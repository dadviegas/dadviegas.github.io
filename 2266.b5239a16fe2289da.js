"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["2266"],{98689(e,t,n){n.d(t,{LiveDataWidget:()=>q});var o=n(65723),i=n(37991),a=n(36859),l=n.n(a),r=n(72799),s=n(23930),c=n(1310),p=n(28170),h=n(98975);let f=[{key:"crypto",labelKey:"health.ch.crypto",color:"#f7931a",unit:"ms",floor:0,ceil:500,consumers:["Crypto"],host:"api.coingecko.com",probeUrl:"https://api.coingecko.com/api/v3/ping"},{key:"weather",labelKey:"health.ch.weather",color:"#58a6ff",unit:"ms",floor:0,ceil:500,consumers:["Weather"],host:"api.open-meteo.com",probeUrl:"https://api.open-meteo.com/v1/forecast?latitude=38.72&longitude=-9.14&current=temperature_2m"},{key:"wiki",labelKey:"health.ch.wiki",color:"#3fb950",unit:"ms",floor:0,ceil:500,consumers:["OnThisDay","WikiTop"],host:"en.wikipedia.org",probeUrl:"https://en.wikipedia.org/api/rest_v1/page/summary/Lisbon"},{key:"hn",labelKey:"health.ch.hn",color:"#f97316",unit:"ms",floor:0,ceil:500,consumers:["TechScope","HN Hot"],host:"hn.algolia.com",probeUrl:"https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=1"},{key:"dom",labelKey:"health.ch.dom",color:"#f87171",unit:"",floor:0,ceil:5e3},{key:"fps",labelKey:"health.ch.fps",color:"#d29922",unit:"fps",floor:0,ceil:120}],d=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,m=(0,r.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,u=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
`,x=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 6px;
`,y=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 6px;
`,g=l().span`
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
`,w=l().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({tone:e})=>"ok"===e?"#3fb950":"warn"===e?"#d29922":"#f85149"};
  animation: ${m} 1.5s ease-in-out infinite;
`,b=l().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  flex: 1;

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,k=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  animation: ${d} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;
`,$=l().div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`,v=l().div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,j=l().span`
  font-size: 10px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,M=l().span`
  font-size: 9px;
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainTextFaint};
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,F=l().div`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`,z=l().span`
  font-size: 14px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({color:e,warn:t})=>t?"#f85149":e};
  transition: color ${s.w4.transitions.base};
  font-variant-numeric: tabular-nums;
`,T=l().span`
  font-size: 10px;
  font-weight: 400;
  opacity: 0.6;
`,K=l().span`
  font-size: 10px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({dir:e,latency:t})=>"flat"===e?s.w4.colors.mainTextFaint:(t?"up"===e:"down"===e)?"#f85149":"#3fb950"};
`,_=l().div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: ${s.w4.colors.border};
  overflow: hidden;
`,S=l().div`
  width: ${({pct:e})=>Math.min(100,e)}%;
  height: 100%;
  border-radius: 2px;
  background: ${({color:e})=>e};
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 6px ${({color:e})=>`${e}40`};
`,U=l().div`
  display: flex;
  align-items: flex-end;
  gap: 1px;
  height: 16px;
`,A=l().div`
  flex: 1;
  height: ${({h:e})=>e}%;
  min-height: 1px;
  border-radius: 1px;
  background: ${({color:e,latest:t})=>t?e:`${e}40`};
  transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`,C=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${s.w4.colors.mainTextMuted};
  opacity: 0.5;
`;function q({locale:e}){let t="pt"===e?"pt":"en",n=(0,i.useMemo)(()=>(0,p.Nx)(t,h.A),[t]),[a,l]=(0,i.useState)(()=>f.map(()=>Array(24).fill(0))),[r,d]=(0,i.useState)({}),[m,O]=(0,i.useState)(!1),R=(0,i.useRef)(null),D=(0,i.useRef)(new Set);(0,i.useEffect)(()=>{let e=function(){let e=0,t=performance.now(),n=60,o=0;function i(){e++;let a=performance.now(),l=a-t;l>=1e3&&(n=Math.round(1e3*e/l),e=0,t=a),o=requestAnimationFrame(i)}return{start(){o=requestAnimationFrame(i)},stop(){cancelAnimationFrame(o)},get fps(){return n}}}();return R.current=e,e.start(),()=>e.stop()},[]);let E=(0,i.useCallback)(async(e,t)=>{if(!D.current.has(e)){D.current.add(e);try{await (0,c.requestRaw)(t)}catch{}finally{D.current.delete(e)}}},[]),L=(0,i.useCallback)(()=>{let e=Date.now(),t=document.getElementsByTagName("*").length,n=R.current?.fps??0,o={};l(i=>i.map((i,a)=>{let l=f[a],r=i[i.length-1];if("ms"===l.unit&&l.host){let t=(0,c.getLastRequestOutcome)(l.host),n=t&&e-t.ts<6e4;if(!t||!n)return l.probeUrl&&E(l.host,l.probeUrl),o[l.key]=!!t&&!t.ok,[...i.slice(1),r];o[l.key]=!t.ok;let a=t.ok?Math.round(t.latencyMs):r;return[...i.slice(1),a]}return"dom"===l.key?[...i.slice(1),t]:"fps"===l.key?[...i.slice(1),n]:i})),d(o),O(!0)},[E]);if((0,i.useEffect)(()=>{L();let e=setInterval(L,5e3);return()=>clearInterval(e)},[L]),!m)return(0,o.jsx)(u,{children:(0,o.jsx)(C,{children:n("health.measuring")})});let N=s.w4.colors.mainTextFaint,W=Object.values(r).filter(Boolean).length,B=f.filter(e=>"ms"===e.unit&&!r[e.key]&&a[f.indexOf(e)][23]>300).length,H=W>0?"bad":B>0?"warn":"ok",I=W>0?n("health.status.offline",{n:W}):B>0?n("health.status.slow",{n:B}):n("health.status.ok");return(0,o.jsxs)(u,{children:[(0,o.jsxs)(x,{children:[(0,o.jsxs)(y,{children:[(0,o.jsx)(w,{tone:H}),n("health.title")]}),(0,o.jsx)(g,{tone:H,children:I})]}),(0,o.jsx)(b,{children:f.map((e,t)=>{let i=a[t],l=i[i.length-1],s=i[i.length-2]??l,c="ms"===e.unit,p=c&&!!r[e.key],h=!p&&c&&l>300,f=p?100:(l-e.floor)/(e.ceil-e.floor)*100,d=p?N:h?"#f85149":e.color,m=p?N:e.color,u=p?n("health.offline"):"dom"===e.key&&l>=1e3?`${(l/1e3).toFixed(1)}k`:String(Math.round(l)),x=p?"":e.unit,y=l-s,g=!p&&Math.abs(y)>=(c?10:2)?y>0?"up":"down":"flat",w=e.consumers?.length?n("health.consumers",{list:e.consumers.join(" \xb7 ")}):"";return(0,o.jsxs)(k,{delay:t,children:[(0,o.jsxs)($,{children:[(0,o.jsxs)(v,{children:[(0,o.jsx)(j,{children:n(e.labelKey)}),w&&(0,o.jsx)(M,{children:w})]}),(0,o.jsxs)(F,{children:[!p&&"flat"!==g&&(0,o.jsx)(K,{dir:g,latency:c,children:"up"===g?"▲":"down"===g?"▼":"\xb7"}),(0,o.jsxs)(z,{color:m,warn:h,children:[u,x&&(0,o.jsx)(T,{children:x})]})]})]}),(0,o.jsx)(_,{children:(0,o.jsx)(S,{pct:f,color:d})}),(0,o.jsx)(U,{children:i.map((t,n)=>{let a=Math.max(2,(t-e.floor)/(e.ceil-e.floor)*100);return(0,o.jsx)(A,{h:Math.min(100,a),color:p&&n===i.length-1?N:h&&n===i.length-1?"#f85149":e.color,latest:n===i.length-1},n)})})]},e.key)})})]})}}}]);