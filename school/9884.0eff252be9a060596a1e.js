"use strict";(self.webpackChunk_atlantis_school=self.webpackChunk_atlantis_school||[]).push([[9884],{9752(e,a,o){o.d(a,{WO:()=>Xa});var t=o(27359),n=o(60894),r=o(53233),i=o(17681),s=o(69753),l=o(88641),d=o(41783),c=o(65723);function p(e){try{return JSON.parse(localStorage.getItem(e)??"[]")}catch{return[]}}const m=r.default.nav`padding: ${n.w4.spacing.sm} 0;`,u=r.default.div`
  border-bottom: 1px solid ${n.w4.colors.border}60;
  margin-bottom: 2px;
`,g=r.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${n.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${n.w4.colors.sidebarText}; }
`,f=r.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,h=r.default.span`
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,x=r.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,b=r.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,y=r.default.div`overflow: hidden;`,w=r.default.div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,v=r.default.button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${n.w4.spacing.md};
  background: ${({active:e})=>e?n.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?n.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?n.w4.colors.sidebarActive:n.w4.colors.sidebarText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${n.w4.colors.sidebarHover}; }
`,$=r.default.button`
  opacity: ${({active:e})=>e?1:0};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":n.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;function j({title:e,icon:a,entries:o,activeId:n,onSelect:r,favorites:i,onToggleFav:d,collapsed:p}){const[m,j]=(0,t.useState)(!1);return o.length?(0,c.jsxs)(u,{children:[(0,c.jsxs)(g,{collapsed:p,onClick:()=>{p||j(e=>!e)},children:[(0,c.jsxs)(f,{collapsed:p,children:[a,(0,c.jsx)(h,{collapsed:p,children:e})]}),(0,c.jsx)(x,{open:m,collapsed:p,children:(0,c.jsx)(s.A,{size:12})})]}),(0,c.jsx)(b,{open:m&&!p,children:(0,c.jsx)(y,{children:o.map(e=>{const a=i.some(a=>a.id===e.id);return(0,c.jsxs)(w,{children:[(0,c.jsx)(v,{active:n===e.id,onClick:()=>r(e),children:e.name}),(0,c.jsx)($,{active:a,title:a?"Remover dos favoritos":"Adicionar aos favoritos",onClick:a=>{a.stopPropagation(),d(e)},children:(0,c.jsx)(l.A,{size:12,fill:a?"currentColor":"none"})})]},e.id)})})})]}):null}function k({config:e,activeId:a,onSelect:o,hashPrefix:r}){const i=`atlantis-recent-${r}`,s=`atlantis-fav-${r}`,{collapsed:u}=(0,n.cL)(),[g,f]=(0,t.useState)(()=>p(i)),[h,x]=(0,t.useState)(()=>p(s)),b=(0,t.useCallback)(e=>{e.file&&f(a=>function(e,a,o){const t=[a,...o.filter(e=>e.id!==a.id)].slice(0,10);return localStorage.setItem(e,JSON.stringify(t)),t}(i,e,a)),o(e)},[o,i]),y=(0,t.useCallback)(e=>{x(a=>function(e,a,o){const t=o.some(e=>e.id===a.id)?o.filter(e=>e.id!==a.id):[...o,a];return localStorage.setItem(e,JSON.stringify(t)),t}(s,e,a))},[s]);return(0,c.jsxs)(m,{children:[(0,c.jsx)(j,{title:"Recentes",icon:(0,c.jsx)(d.A,{size:13}),entries:g,activeId:a,onSelect:b,favorites:h,onToggleFav:y,collapsed:u}),(0,c.jsx)(j,{title:"Favoritos",icon:(0,c.jsx)(l.A,{size:13}),entries:h,activeId:a,onSelect:b,favorites:h,onToggleFav:y,collapsed:u}),(0,c.jsx)(n.CD,{entries:e.entries,activeId:a,onSelect:b})]})}var z=o(28976),S=o(18055),T=o(66225),A=o(302),C=o(39895),M=o(6930),P=o(14944);const E=r.default.div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  svg { max-width: 100%; }
`,B=r.default.div`
  color: #f85149;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: ${n.w4.typography.fontSizeSm};
  white-space: pre-wrap;
`;let R=!1;function F({code:e}){const a=(0,t.useRef)(null),[r,i]=(0,t.useState)(null);return(0,t.useEffect)(()=>{let t=!1;return async function(){const r=(await o.e(774).then(o.bind(o,30774))).default;if(R||(r.initialize({startOnLoad:!1,theme:"dark",themeVariables:{background:n.w4.colors.codeBg,primaryColor:n.w4.colors.accent,primaryTextColor:n.w4.colors.mainText,lineColor:n.w4.colors.border}}),R=!0),a.current&&!t)try{const o=`mermaid-${Math.random().toString(36).slice(2)}`,{svg:n}=await r.render(o,e);!t&&a.current&&(a.current.innerHTML=n)}catch(e){t||i(e instanceof Error?e.message:String(e))}}(),()=>{t=!0}},[e]),r?(0,c.jsx)(E,{children:(0,c.jsxs)(B,{children:["Mermaid error: ",r]})}):(0,c.jsx)(E,{ref:a})}const O=["#388bfd","#3fb950","#d29922","#a371f7","#f87171","#22d3ee","#fb923c","#34d399","#f472b6","#818cf8"],L=r.default.div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,I=r.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  margin-bottom: ${n.w4.spacing.md};
  text-align: center;
`,D=r.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${n.w4.spacing.sm} ${n.w4.spacing.md};
  margin-top: ${n.w4.spacing.md};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
`,N=r.default.span`
  display: flex;
  align-items: center;
  gap: 6px;
`,G=r.default.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,V=r.default.div`
  color: #f85149;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: ${n.w4.typography.fontSizeSm};
`;function H(e){if(e<=0)return 10;const a=Math.pow(10,Math.floor(Math.log10(e)));return Math.ceil(e/a)*a}function q({labels:e,data:a,colors:o}){const t=176,r=H(Math.max(...a,1)),i=Math.min(40,340/e.length*.6),s=340/e.length,l=Array.from({length:6},(e,a)=>r/5*a);return(0,c.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[l.map((e,a)=>{const o=192-e/r*t;return(0,c.jsxs)("g",{children:[(0,c.jsx)("line",{x1:44,y1:o,x2:384,y2:o,stroke:n.w4.colors.border,strokeWidth:.5,strokeDasharray:0===a?"none":"3,3"}),(0,c.jsx)("text",{x:38,y:o+4,fill:n.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:n.w4.typography.fontFamily,children:Math.round(e)})]},a)}),a.map((a,l)=>{const d=44+s*l+s/2-i/2,p=a/r*t,m=192-p,u=o[l%o.length];return(0,c.jsxs)("g",{children:[(0,c.jsxs)("rect",{x:d,y:m,width:i,height:p,rx:3,fill:u,opacity:.85,children:[(0,c.jsx)("animate",{attributeName:"height",from:"0",to:p,dur:"0.5s",fill:"freeze"}),(0,c.jsx)("animate",{attributeName:"y",from:192,to:m,dur:"0.5s",fill:"freeze"})]}),(0,c.jsx)("text",{x:d+i/2,y:m-4,fill:n.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:n.w4.typography.fontFamily,children:a}),(0,c.jsx)("text",{x:44+s*l+s/2,y:208,fill:n.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:n.w4.typography.fontFamily,children:e[l].length>8?e[l].slice(0,7)+"…":e[l]})]},l)})]})}function Y({labels:e,data:a,colors:o}){const t=a.reduce((e,a)=>e+a,0)||1;let r=-Math.PI/2;const i=a.map((e,a)=>{const i=e/t*Math.PI*2,s=r;r+=i;const l=r,d=120+90*Math.cos(s),p=120+90*Math.sin(s),m=120+90*Math.cos(l),u=120+90*Math.sin(l),g=i>Math.PI?1:0,f=s+i/2,h=120+58.5*Math.cos(f),x=120+58.5*Math.sin(f),b=Math.round(e/t*100);return(0,c.jsxs)("g",{children:[(0,c.jsx)("path",{d:`M 120 120 L ${d} ${p} A 90 90 0 ${g} 1 ${m} ${u} Z`,fill:o[a%o.length],stroke:n.w4.colors.codeBg,strokeWidth:2,opacity:.85}),b>=5&&(0,c.jsxs)("text",{x:h,y:x+4,fill:"#fff",fontSize:11,fontWeight:600,textAnchor:"middle",fontFamily:n.w4.typography.fontFamily,children:[b,"%"]})]},a)});return(0,c.jsx)("svg",{viewBox:"0 0 240 240",width:"100%",style:{maxWidth:240},children:i})}function _({labels:e,data:a,colors:o}){const t=176,r=H(Math.max(...a,1)),i=a.length>1?340/(a.length-1):340,s=o[0],l=a.map((e,a)=>({x:44+i*a,y:192-e/r*t})),d=l.map((e,a)=>`${0===a?"M":"L"} ${e.x} ${e.y}`).join(" "),p=Array.from({length:6},(e,a)=>r/5*a);return(0,c.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[p.map((e,a)=>{const o=192-e/r*t;return(0,c.jsxs)("g",{children:[(0,c.jsx)("line",{x1:44,y1:o,x2:384,y2:o,stroke:n.w4.colors.border,strokeWidth:.5,strokeDasharray:0===a?"none":"3,3"}),(0,c.jsx)("text",{x:38,y:o+4,fill:n.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:n.w4.typography.fontFamily,children:Math.round(e)})]},a)}),(0,c.jsx)("path",{d,fill:"none",stroke:s,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.map((o,t)=>(0,c.jsxs)("g",{children:[(0,c.jsx)("circle",{cx:o.x,cy:o.y,r:4,fill:s,stroke:n.w4.colors.codeBg,strokeWidth:2}),(0,c.jsx)("text",{x:o.x,y:o.y-10,fill:n.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:n.w4.typography.fontFamily,children:a[t]}),(0,c.jsx)("text",{x:o.x,y:208,fill:n.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:n.w4.typography.fontFamily,children:e[t].length>8?e[t].slice(0,7)+"…":e[t]})]},t))]})}function J({code:e}){const a=(0,t.useMemo)(()=>function(e){const a=e.trim().split("\n");let o,t,n="bar",r=[],i=[];for(const e of a){const[a,...s]=e.split(":"),l=s.join(":").trim();if(l)switch(a.trim().toLowerCase()){case"type":["bar","pie","line"].includes(l.toLowerCase())&&(n=l.toLowerCase());break;case"title":o=l;break;case"labels":r=l.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim());break;case"data":i=l.replace(/^\[|\]$/g,"").split(",").map(e=>parseFloat(e.trim())||0);break;case"colors":t=l.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim())}}return r.length&&i.length?{type:n,title:o,labels:r,data:i,colors:t}:null}(e),[e]);if(!a)return(0,c.jsx)(L,{children:(0,c.jsx)(V,{children:"Invalid chart data"})});const o=a.colors??O;return(0,c.jsxs)(L,{children:[a.title&&(0,c.jsx)(I,{children:a.title}),"bar"===a.type&&(0,c.jsx)(q,{labels:a.labels,data:a.data,colors:o}),"pie"===a.type&&(0,c.jsx)(Y,{labels:a.labels,data:a.data,colors:o}),"line"===a.type&&(0,c.jsx)(_,{labels:a.labels,data:a.data,colors:o}),(0,c.jsx)(D,{children:a.labels.map((e,a)=>(0,c.jsxs)(N,{children:[(0,c.jsx)(G,{color:o[a%o.length]}),e]},a))})]})}const W=r.default.div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${n.w4.spacing.md};
`,U=r.default.div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,X=r.default.div`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,K=r.default.div`
  display: flex;
  gap: ${n.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,Q=r.default.button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${n.w4.colors.accent};
    color: ${n.w4.colors.accent};
  }
`,Z=r.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  text-align: center;
`,ee=r.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  text-align: center;
`;function ae(e){return e.toString().padStart(2,"0")}function oe(e,a,o){if("pt"===o){const o=1===e?"1 hora":`${e} horas`;return 0===a?o:15===a?`${o} e um quarto`:30===a?`${o} e meia`:45===a?`um quarto para as ${12===e?1:e+1}`:`${o} e ${a} minutos`}const t=e<12?"AM":"PM",n=e%12||12;return 0===a?`${n} o'clock ${t}`:15===a?`quarter past ${n} ${t}`:30===a?`half past ${n} ${t}`:45===a?`quarter to ${n%12+1} ${t}`:`${n}:${ae(a)} ${t}`}function te({hours:e,minutes:a,seconds:o}){const t=100,r=100,i=e=>e*Math.PI/180,s=o/60*360-90,l=a/60*360+o/60*6-90,d=e%12/12*360+a/60*30-90,p=t+61*Math.cos(i(s)),m=r+61*Math.sin(i(s)),u=t+65*Math.cos(i(l)),g=r+65*Math.sin(i(l)),f=t+45*Math.cos(i(d)),h=r+45*Math.sin(i(d));return(0,c.jsxs)("svg",{viewBox:"0 0 200 200",width:200,height:200,children:[(0,c.jsx)("circle",{cx:t,cy:r,r:85,fill:n.w4.colors.surface,stroke:n.w4.colors.border,strokeWidth:2}),Array.from({length:12},(e,a)=>{const o=a+1,s=o/12*360-90,l=t+69*Math.cos(i(s)),d=r+69*Math.sin(i(s));return(0,c.jsx)("text",{x:l,y:d+4,fill:n.w4.colors.mainText,fontSize:14,fontWeight:600,textAnchor:"middle",fontFamily:n.w4.typography.fontFamily,children:o},o)}),Array.from({length:60},(e,a)=>{const o=a/60*360-90,s=a%5==0,l=s?75:79;return(0,c.jsx)("line",{x1:t+l*Math.cos(i(o)),y1:r+l*Math.sin(i(o)),x2:t+83*Math.cos(i(o)),y2:r+83*Math.sin(i(o)),stroke:s?n.w4.colors.mainTextMuted:n.w4.colors.border,strokeWidth:s?2:1},a)}),(0,c.jsx)("line",{x1:t,y1:r,x2:f,y2:h,stroke:n.w4.colors.mainText,strokeWidth:4,strokeLinecap:"round"}),(0,c.jsx)("line",{x1:t,y1:r,x2:u,y2:g,stroke:n.w4.colors.accent,strokeWidth:2.5,strokeLinecap:"round"}),(0,c.jsx)("line",{x1:t-12*Math.cos(i(s)),y1:r-12*Math.sin(i(s)),x2:p,y2:m,stroke:"#f87171",strokeWidth:1.2,strokeLinecap:"round"}),(0,c.jsx)("circle",{cx:t,cy:r,r:4,fill:n.w4.colors.accent}),(0,c.jsx)("circle",{cx:t,cy:r,r:2,fill:"#f87171"})]})}function ne({code:e}){const a=function(e){let a="pt";for(const o of e.trim().split("\n")){const[e,...t]=o.split(":"),n=t.join(":").trim();"locale"===e.trim().toLowerCase()&&(a=n.toLowerCase())}return{locale:a}}(e),[o,n]=(0,t.useState)("live"),[r,i]=(0,t.useState)(()=>(new Date).getHours()),[s,l]=(0,t.useState)(()=>(new Date).getMinutes()),[d,p]=(0,t.useState)(()=>(new Date).getSeconds());(0,t.useEffect)(()=>{if("live"!==o)return;const e=()=>{const e=new Date;i(e.getHours()),l(e.getMinutes()),p(e.getSeconds())};e();const a=setInterval(e,1e3);return()=>clearInterval(a)},[o]);const m=(0,t.useCallback)(e=>{n("manual"),p(0),i(a=>((a+e)%24+24)%24)},[]),u=(0,t.useCallback)(e=>{n("manual"),p(0),l(a=>((a+e)%60+60)%60)},[]),g=(0,t.useCallback)(()=>n("live"),[]);return(0,c.jsxs)(W,{children:[(0,c.jsxs)(U,{children:[(0,c.jsx)(te,{hours:r,minutes:s,seconds:d}),(0,c.jsxs)("div",{children:[(0,c.jsxs)(X,{children:[ae(r),":",ae(s),(0,c.jsxs)("span",{style:{fontSize:"24px",opacity:.5},children:[":",ae(d)]})]}),(0,c.jsx)(ee,{children:oe(r%12||12,s,a.locale)})]})]}),(0,c.jsxs)(K,{children:[(0,c.jsx)(Q,{onClick:()=>m(-1),children:"−1h"}),(0,c.jsx)(Q,{onClick:()=>m(1),children:"+1h"}),(0,c.jsx)(Q,{onClick:()=>u(-15),children:"−15m"}),(0,c.jsx)(Q,{onClick:()=>u(15),children:"+15m"}),(0,c.jsx)(Q,{onClick:()=>u(-5),children:"−5m"}),(0,c.jsx)(Q,{onClick:()=>u(5),children:"+5m"}),(0,c.jsx)(Q,{active:"live"===o,onClick:g,children:"pt"===a.locale?"Agora":"Now"})]}),(0,c.jsx)(Z,{children:"pt"===a.locale?"Usa os botões para mudar as horas e os minutos!":"Use the buttons to change the hours and minutes!"}),(0,c.jsx)(K,{children:[{label:"3:00",h:3,m:0},{label:"6:30",h:6,m:30},{label:"9:15",h:9,m:15},{label:"12:00",h:12,m:0},{label:"13:45",h:13,m:45},{label:"15:30",h:15,m:30},{label:"19:00",h:19,m:0},{label:"23:15",h:23,m:15}].map(e=>(0,c.jsx)(Q,{onClick:()=>{n("manual"),i(e.h),l(e.m)},children:e.label},e.label))})]})}var re=o(77207),ie=o(41604);const se=["Samantha","Karen","Daniel","Moira","Rishi","Google UK English Female","Google US English"],le=["Joana","Luciana","Catarina","Google português do Brasil"];function de(e,a){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const o=new SpeechSynthesisUtterance(e);o.lang="pt"===a?"pt-PT":"en-US",o.rate=1,o.pitch=1;const t=function(e,a){const o="en"===a?se:le,t="en"===a?"en":"pt";for(const a of o){const o=e.find(e=>e.name.includes(a)&&e.lang.startsWith(t));if(o)return o}return e.find(e=>e.lang.startsWith(t))}(window.speechSynthesis.getVoices(),a);t&&(o.voice=t,o.lang=t.lang),window.speechSynthesis.speak(o)}const ce=re.keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`,pe=r.default.div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.md};
  margin: ${n.w4.spacing.lg} 0;
`,me=r.default.div`
  font-size: 11px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${n.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,ue=r.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${n.w4.spacing.sm};

  @media (max-width: ${n.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,ge=r.default.div`
  display: flex;
  flex-direction: column;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${n.w4.colors.accent}40;
    box-shadow: 0 0 8px ${n.w4.colors.accent}15;
  }
`,fe=r.default.button`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.sm};
  padding: 14px ${n.w4.spacing.md};
  min-height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${n.w4.typography.fontFamily};
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    animation: ${ce} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`,he=(0,r.default)(fe)`
  border-bottom: 1px solid ${n.w4.colors.border}80;
`,xe=(0,r.default)(fe)``,be=r.default.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({accentColor:e})=>e}18;
  color: ${({accentColor:e})=>e};
  flex-shrink: 0;
  transition: background 0.15s, transform 0.15s;

  button:active > & {
    background: ${({accentColor:e})=>e}30;
    transform: scale(0.9);
  }
`,ye=r.default.span`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${n.w4.colors.accent};
`,we=r.default.span`
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainTextMuted};
`;function ve({code:e}){const a=function(e){return e.split("\n").map(e=>e.trim()).filter(e=>e&&e.includes("|")).map(e=>{const[a,o]=e.split("|").map(e=>e.trim());return{en:a??"",pt:o??""}}).filter(e=>e.en&&e.pt)}(e),o=(0,t.useRef)(null),n=(0,t.useRef)(!1),r=(0,t.useCallback)(e=>{o.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},[]),i=(0,t.useCallback)((e,a)=>t=>{if(!o.current)return;const r=Math.abs(t.changedTouches[0].clientX-o.current.x),i=Math.abs(t.changedTouches[0].clientY-o.current.y);o.current=null,r>8||i>8||(n.current=!0,de(e,a))},[]),s=(0,t.useCallback)((e,a)=>()=>{n.current?n.current=!1:de(e,a)},[]);return a.length?(0,c.jsxs)(pe,{children:[(0,c.jsxs)(me,{children:[(0,c.jsx)(ie.A,{size:12}),"Words to Listen / Palavras para Ouvir"]}),(0,c.jsx)(ue,{children:a.map(e=>(0,c.jsxs)(ge,{children:[(0,c.jsxs)(he,{accentColor:"#58a6ff",onTouchStart:r,onTouchEnd:i(e.en,"en"),onClick:s(e.en,"en"),title:`Listen: ${e.en}`,children:[(0,c.jsx)(be,{accentColor:"#58a6ff",children:(0,c.jsx)(ie.A,{size:16})}),(0,c.jsx)(ye,{children:e.en})]}),(0,c.jsxs)(xe,{accentColor:"#3fb950",onTouchStart:r,onTouchEnd:i(e.pt,"pt"),onClick:s(e.pt,"pt"),title:`Ouvir: ${e.pt}`,children:[(0,c.jsx)(be,{accentColor:"#3fb950",children:(0,c.jsx)(ie.A,{size:16})}),(0,c.jsx)(we,{children:e.pt})]})]},e.en))})]}):null}var $e=o(68383),je=o(21426),ke=o(25609),ze=o(20320);const Se=r.default.div`
  margin: ${n.w4.spacing.lg} 0;
  border-radius: ${n.w4.borderRadius.md};
  border: 1px solid ${n.w4.colors.codeBorder};
  overflow: hidden;
`,Te=r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${n.w4.colors.codeBorder};
`,Ae=r.default.span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,Ce=r.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":n.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${n.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${n.w4.colors.sidebarText}; border-color: ${n.w4.colors.sidebarText}; }
`,Me={...je.A,'pre[class*="language-"]':{...je.A['pre[class*="language-"]'],background:n.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...je.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function Pe({lang:e="text",code:a}){const[o,r]=(0,t.useState)(!1);return(0,c.jsxs)(Se,{children:[(0,c.jsxs)(Te,{children:[(0,c.jsx)(Ae,{children:e}),(0,c.jsxs)(Ce,{copied:o,onClick:()=>{navigator.clipboard.writeText(a).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})},children:[o?(0,c.jsx)(ke.A,{size:12}):(0,c.jsx)(ze.A,{size:12}),o?"Copied!":"Copy"]})]}),(0,c.jsx)($e.A,{language:e,style:Me,showLineNumbers:a.split("\n").length>8,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:n.w4.colors.codeBg},wrapLongLines:!1,children:a})]})}var Ee=o(65569),Be=o(8218),Re=o(57230),Fe=o(22966),Oe=o(21069);const Le={NOTE:{bg:"rgba(88, 166, 255, 0.08)",border:"#58a6ff",icon:Ee.A,label:"Note",color:"#58a6ff"},TIP:{bg:"rgba(63, 185, 80, 0.08)",border:"#3fb950",icon:Be.A,label:"Tip",color:"#3fb950"},IMPORTANT:{bg:"rgba(163, 113, 247, 0.08)",border:"#a371f7",icon:Re.A,label:"Important",color:"#a371f7"},WARNING:{bg:"rgba(210, 153, 34, 0.08)",border:"#d29922",icon:Fe.A,label:"Warning",color:"#d29922"},CAUTION:{bg:"rgba(248, 81, 73, 0.08)",border:"#f85149",icon:Oe.A,label:"Caution",color:"#f85149"}},Ie=r.default.div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${n.w4.borderRadius.md} ${n.w4.borderRadius.md} 0;
  padding: ${n.w4.spacing.md} ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
`,De=r.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${n.w4.typography.fontFamily};
  margin-bottom: ${n.w4.spacing.sm};
`,Ne=r.default.div`
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`;function Ge({type:e,children:a}){const o=Le[e]??Le.NOTE,t=o.icon;return(0,c.jsxs)(Ie,{bg:o.bg,border:o.border,children:[(0,c.jsxs)(De,{color:o.color,children:[(0,c.jsx)(t,{size:15,strokeWidth:2}),o.label]}),(0,c.jsx)(Ne,{children:a})]})}const Ve=r.default.nav`
  width: 220px;
  min-width: 220px;
  padding: ${n.w4.spacing.xxl} 0 ${n.w4.spacing.xxl} ${n.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,He=r.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  margin-bottom: ${n.w4.spacing.md};
`,qe=r.default.ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,Ye=r.default.a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${n.w4.typography.fontSizeSm};
  font-family: ${n.w4.typography.fontFamily};
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?n.w4.colors.accent:"transparent"};
  border-radius: 0 ${n.w4.borderRadius.sm} ${n.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${n.w4.colors.mainText}; background: ${n.w4.colors.sidebarHover}; }
`;function _e({headings:e,activeId:a}){return e.length<2?null:(0,c.jsxs)(Ve,{children:[(0,c.jsx)(He,{children:"On this page"}),(0,c.jsx)(qe,{children:e.map(e=>(0,c.jsx)("li",{children:(0,c.jsx)(Ye,{href:`#${e.id}`,active:a===e.id,level:e.level,onClick:a=>{a.preventDefault(),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},children:e.text})},e.id))})]})}function Je(e){return e.toLowerCase().replace(/[*_`[\]()#]/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}function We(e){const{Children:a,isValidElement:t}=o(27359);return a.toArray(e).map(e=>"string"==typeof e?e:"number"==typeof e?String(e):t(e)?We(e.props.children??""):"").join("")}function Ue(){return e=>{!function e(a){if("blockquote"===a.type){const e=a.children?.[0];if("paragraph"===e?.type){const o=e.children?.[0];if("text"===o?.type){const t=o.value?.match(/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i);t&&(o.value=o.value.slice(t[0].length),o.value.trim()||1!==e.children.length||a.children.shift(),a.data=a.data??{},a.data.hName="div",a.data.hProperties={"data-callout":t[1].toUpperCase()})}}}a.children?.forEach(e)}(e)}}const Xe=r.default.div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${n.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,Ke=r.default.div`flex: 1; min-width: 0;`,Qe=r.default.article`
  padding: ${n.w4.spacing.xxl} 0;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  line-height: ${n.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${n.w4.spacing.xl} 0 ${n.w4.spacing.md};
    color: ${n.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${n.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${n.w4.typography.fontSizeXl}; border-bottom: 1px solid ${n.w4.colors.border}; padding-bottom: ${n.w4.spacing.sm}; }
  h2 { font-size: ${n.w4.typography.fontSizeLg}; border-bottom: 1px solid ${n.w4.colors.border}; padding-bottom: ${n.w4.spacing.xs}; }
  h3 { font-size: ${n.w4.typography.fontSizeMd}; }

  p { margin: ${n.w4.spacing.md} 0; }

  a { color: ${n.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${n.w4.colors.accentHover}; } }

  ul, ol { margin: ${n.w4.spacing.md} 0; padding-left: ${n.w4.spacing.xl}; }
  li { margin: ${n.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${n.w4.colors.border};
    margin: ${n.w4.spacing.lg} 0;
    padding: ${n.w4.spacing.sm} ${n.w4.spacing.lg};
    background: ${n.w4.colors.surface};
    color: ${n.w4.colors.mainTextMuted};
    border-radius: 0 ${n.w4.borderRadius.sm} ${n.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${n.w4.colors.codeBg};
    border: 1px solid ${n.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${n.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${n.w4.spacing.lg} 0; font-size: ${n.w4.typography.fontSizeBase}; }
  th, td { padding: ${n.w4.spacing.sm} ${n.w4.spacing.md}; border: 1px solid ${n.w4.colors.border}; text-align: left; }
  th { background: ${n.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${n.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${n.w4.colors.border}; margin: ${n.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${n.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${n.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${n.w4.spacing.lg} 0; }
`,Ze=r.default.div`
  display: flex;
  gap: ${n.w4.spacing.lg};
  padding: ${n.w4.spacing.xxl} 0;
  border-top: 1px solid ${n.w4.colors.border};
  margin-top: ${n.w4.spacing.xxl};
`,ea=r.default.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${n.w4.spacing.md} ${n.w4.spacing.lg};
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${n.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,aa=r.default.div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${n.w4.colors.sidebarTextMuted}; font-family: ${n.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,oa=r.default.div`
  font-size: ${n.w4.typography.fontSizeBase}; color: ${n.w4.colors.accent};
  font-family: ${n.w4.typography.fontFamily}; font-weight: 500;
`,ta=r.default.div`
  color: ${n.w4.colors.mainTextMuted};
  padding: ${n.w4.spacing.xxl} ${n.w4.spacing.xl};
  font-family: ${n.w4.typography.fontFamily};
`;function na(e){return function({children:a,...o}){const t=`h${e}`,n=We(a),r=Je(n);return(0,c.jsxs)(t,{id:r,...o,children:[a,(0,c.jsx)("a",{className:"heading-anchor",href:`#${r}`,"aria-label":`Link to "${n}"`,children:(0,c.jsx)(T.A,{size:14})})]})}}function ra({file:e,prevEntry:a,nextEntry:n,onNavigate:r,scrollToId:i,onScrolled:l}){const[d,p]=(0,t.useState)(null),[m,u]=(0,t.useState)(null),g=(0,t.useRef)(null);if((0,t.useEffect)(()=>{p(null),fetch(`${o.p}content/${e}`).then(e=>{if(!e.ok)throw new Error(`${e.status} ${e.statusText}`);return e.text()}).then(p).catch(a=>p(`> **Error loading \`${e}\`:** ${a.message}`))},[e]),(0,t.useEffect)(()=>{if(!i||!d||!g.current)return;const e=setTimeout(()=>{const e=g.current?.querySelector(`#${CSS.escape(i)}`);e&&(e.scrollIntoView({behavior:"smooth",block:"start"}),u(i),l?.())},150);return()=>clearTimeout(e)},[i,d,l]),(0,t.useEffect)(()=>{if(!d||!g.current)return;const e=g.current.querySelectorAll("h2[id], h3[id]");if(!e.length)return;const a=new IntersectionObserver(e=>{const a=e.filter(e=>e.isIntersecting);a.length&&u(a[0].target.id)},{rootMargin:"-10% 0% -60% 0%",threshold:0});return e.forEach(e=>a.observe(e)),()=>a.disconnect()},[d]),null===d)return(0,c.jsx)(ta,{children:"Loading…"});const f=function(e){const a=[],o=/^(#{2,3})\s+(.+)$/gm;let t;for(;null!==(t=o.exec(e));){const e=t[1].length,o=t[2].trim().replace(/\*\*(.+?)\*\*/g,"$1").replace(/\*(.+?)\*/g,"$1").replace(/`(.+?)`/g,"$1").replace(/\[(.+?)\]\(.+?\)/g,"$1");a.push({level:e,text:o,id:Je(o)})}return a}(d),h=a||n;return(0,c.jsxs)(Xe,{children:[(0,c.jsxs)(Ke,{children:[(0,c.jsx)(Qe,{ref:g,children:(0,c.jsx)(z.oz,{remarkPlugins:[S.A,P.A,Ue],rehypePlugins:[C.A,M.A],components:{div({node:e,children:a,...o}){const t=o["data-callout"];return t?(0,c.jsx)(Ge,{type:t,children:a}):(0,c.jsx)("div",{...o,children:a})},h1:na(1),h2:na(2),h3:na(3),h4:na(4),pre:({children:e})=>(0,c.jsx)(c.Fragment,{children:e}),code({className:e,children:a}){const o=/language-(\w+)/.exec(e??"")?.[1],t=String(a).replace(/\n$/,"");return"mermaid"===o?(0,c.jsx)(F,{code:t}):"chart"===o?(0,c.jsx)(J,{code:t}):"clock"===o?(0,c.jsx)(ne,{code:t}):"vocabulary"===o?(0,c.jsx)(ve,{code:t}):o||t.includes("\n")?(0,c.jsx)(Pe,{lang:o,code:t}):(0,c.jsx)("code",{className:e,children:a})}},children:d})}),h&&(0,c.jsxs)(Ze,{children:[a?(0,c.jsxs)(ea,{align:"left",onClick:()=>r?.(a),children:[(0,c.jsxs)(aa,{children:[(0,c.jsx)(A.A,{size:13})," Previous"]}),(0,c.jsx)(oa,{children:a.name})]}):(0,c.jsx)("div",{style:{flex:1}}),n?(0,c.jsxs)(ea,{align:"right",onClick:()=>r?.(n),children:[(0,c.jsxs)(aa,{children:["Next ",(0,c.jsx)(s.A,{size:13})]}),(0,c.jsx)(oa,{children:n.name})]}):(0,c.jsx)("div",{style:{flex:1}})]})]}),(0,c.jsx)(_e,{headings:f,activeId:m})]})}var ia=o(24525),sa=o(87071),la=o(35751),da=o(32887);const ca=re.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,pa=re.keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,ma=r.default.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${ca} 0.15s ease;
`,ua=r.default.div`
  width: 90%;
  max-width: 580px;
  max-height: 70vh;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px ${n.w4.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${pa} 0.2s ease;
`,ga=r.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid ${n.w4.colors.border};
`,fa=r.default.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  &::placeholder { color: ${n.w4.colors.sidebarTextMuted}; }
`,ha=r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${n.w4.colors.sidebarHover};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: 10px;
  font-family: ${n.w4.typography.fontFamilyMono};
  transition: color 0.15s, background 0.15s;
  &:hover { color: ${n.w4.colors.mainText}; background: ${n.w4.colors.border}; }
`,xa=r.default.div`
  flex: 1;
  overflow-y: auto;
  padding: ${n.w4.spacing.sm} 0;
`,ba=r.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.sidebarTextMuted};
`,ya=r.default.span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,wa=r.default.button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 10px 18px;
  background: ${({selected:e})=>e?n.w4.colors.accentMuted:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  &:hover { background: ${n.w4.colors.sidebarHover}; }
`,va=r.default.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${n.w4.borderRadius.md};
  background: ${({selected:e})=>e?`${n.w4.colors.accent}20`:n.w4.colors.sidebarHover};
  color: ${({selected:e})=>e?n.w4.colors.accent:n.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  margin-top: 1px;
`,$a=r.default.div`
  flex: 1;
  min-width: 0;
`,ja=r.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 8px;
`,ka=r.default.span`
  font-weight: 400;
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.sidebarTextMuted};
`,za=r.default.span`
  font-size: 11px;
  font-weight: 500;
  color: ${n.w4.colors.accent};
  background: ${n.w4.colors.accentMuted};
  padding: 1px 6px;
  border-radius: 10px;
  font-family: ${n.w4.typography.fontFamilyMono};
`,Sa=r.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin-top: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${n.w4.colors.accent}25;
    color: ${n.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,Ta=r.default.div`
  display: flex;
  align-items: center;
  color: ${({selected:e})=>e?n.w4.colors.accent:"transparent"};
  margin-top: 8px;
  transition: color 0.1s;
`,Aa=r.default.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  border-top: 1px solid ${n.w4.colors.border};
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
`,Ca=r.default.kbd`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background: ${n.w4.colors.sidebarHover};
  border: 1px solid ${n.w4.colors.border};
  border-radius: 3px;
  font-size: 10px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.sidebarTextMuted};
`,Ma=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 18px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  text-align: center;
`;function Pa(e){return e.toLowerCase().replace(/[*_`[\]()#]/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}const Ea=new Map;function Ba(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function Ra(e,a=""){return e.flatMap(e=>e.children?Ra(e.children,e.name):e.file?[{entry:e,parentName:a}]:[])}function Fa(e,a){const o=Ba(e),t=Ba(a),n=e.split("\n");let r=0,i=0;for(;-1!==(i=o.indexOf(t,i));)r++,i+=t.length;let s=null;for(const e of n){const o=e.match(/^#{1,4}\s+(.+)/);if(o&&(s=o[1].trim()),!e.trim()||e.startsWith("```")||e.startsWith("|--"))continue;const n=e.replace(/^#{1,6}\s*/,"").replace(/[*_`|]/g,"").trim(),i=n.normalize("NFD"),l=[];let d=0;for(let e=0;e<i.length;e++){const a=i.charCodeAt(e);a>=768&&a<=879||(l.push(d),d++)}l.push(d);const c=Ba(n).indexOf(t);if(-1===c)continue;const p=l[c]??c,m=l[c+t.length]??p+a.length,u=Math.max(0,p-50),g=Math.min(n.length,m+70),f=u>0?"…":"",h=g<n.length?"…":"";return{snippet:`${f}${n.slice(u,p)}<mark>${n.slice(p,m)}</mark>${n.slice(m,g)}${h}`,count:r,headingSlug:s?Pa(s):null,headingText:s}}return{snippet:"",count:r,headingSlug:null,headingText:null}}function Oa({open:e,onClose:a,entries:r,activeId:s,onSelect:l}){const[d,p]=(0,t.useState)(""),[m,u]=(0,t.useState)([]),[g,f]=(0,t.useState)(!1),[h,x]=(0,t.useState)(0),b=(0,t.useRef)(null),y=(0,t.useRef)(),w=(0,t.useMemo)(()=>Ra(r),[r]);(0,t.useEffect)(()=>{e&&(p(""),u([]),x(0),setTimeout(()=>b.current?.focus(),50))},[e]),(0,t.useEffect)(()=>{if(!e)return;const o=e=>{"Escape"===e.key&&(e.preventDefault(),a())};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,a]);const v=(0,t.useCallback)(async e=>{if(e.length<2)return u([]),void f(!1);f(!0);const a=await Promise.all(w.map(async({entry:e,parentName:a})=>({entry:e,parentName:a,text:await async function(e){const a=Ea.get(e);if(void 0!==a)return a;try{const a=await fetch(`${o.p}content/${e}`);if(!a.ok)return"";const t=await a.text();return Ea.set(e,t),t}catch{return Ea.set(e,""),""}}(e.file)}))),t=[];for(const{entry:o,parentName:n,text:r}of a){const a=Ba(o.name),i=Ba(r),s=Ba(e);if(!a.includes(s)&&!i.includes(s))continue;const{snippet:l,count:d,headingSlug:c,headingText:p}=Fa(r,e),m=a.includes(s);t.push({entry:o,parentName:n,snippet:l||(m?o.name:""),matchCount:d+(m?10:0),headingSlug:c,headingText:p})}t.sort((e,a)=>a.matchCount-e.matchCount),u(t),x(0),f(!1)},[w]);(0,t.useEffect)(()=>{if(clearTimeout(y.current),d.trim())return y.current=setTimeout(()=>v(d.trim()),250),()=>clearTimeout(y.current);u([])},[d,v]);const $=(0,t.useCallback)(e=>{"ArrowDown"===e.key?(e.preventDefault(),x(e=>Math.min(e+1,m.length-1))):"ArrowUp"===e.key?(e.preventDefault(),x(e=>Math.max(e-1,0))):"Enter"===e.key&&m[h]&&(e.preventDefault(),l(m[h].entry,m[h].headingSlug),a())},[m,h,l,a]);return e?(0,c.jsx)(ma,{onClick:e=>{e.target===e.currentTarget&&a()},children:(0,c.jsxs)(ua,{onKeyDown:$,children:[(0,c.jsxs)(ga,{children:[(0,c.jsx)(i.A,{size:18,color:n.w4.colors.accent,style:{flexShrink:0}}),(0,c.jsx)(fa,{ref:b,placeholder:"Pesquisar em todo o conteúdo…",value:d,onChange:e=>p(e.target.value)}),(0,c.jsx)(ha,{onClick:a,title:"Fechar (Esc)",children:(0,c.jsx)(ia.A,{size:14})})]}),(0,c.jsxs)(xa,{children:[g&&(0,c.jsxs)(ba,{children:[(0,c.jsx)(ya,{children:(0,c.jsx)(sa.A,{size:14})}),"A pesquisar ",w.length," ficheiros…"]}),!g&&d.length>=2&&m.length>0&&(0,c.jsxs)(ba,{children:[(0,c.jsx)(la.A,{size:13}),m.length," ",1===m.length?"resultado":"resultados"," encontrados"]}),!g&&d.length>=2&&0===m.length&&(0,c.jsxs)(Ma,{children:[(0,c.jsx)(i.A,{size:32,strokeWidth:1.2}),'Nenhum resultado para "',(0,c.jsx)("strong",{children:d}),'"']}),!g&&d.length<2&&(0,c.jsxs)(Ma,{children:[(0,c.jsx)(i.A,{size:32,strokeWidth:1.2}),"Escreve pelo menos 2 caracteres para pesquisar"]}),m.map((e,o)=>(0,c.jsxs)(wa,{selected:o===h,onClick:()=>{l(e.entry,e.headingSlug),a()},onMouseEnter:()=>x(o),children:[(0,c.jsx)(va,{selected:o===h,children:(0,c.jsx)(la.A,{size:15})}),(0,c.jsxs)($a,{children:[(0,c.jsxs)(ja,{children:[e.entry.name,e.matchCount>0&&(0,c.jsx)(za,{children:e.matchCount>10?e.matchCount-10:e.matchCount})]}),(e.parentName||e.headingText)&&(0,c.jsxs)(ka,{children:[e.parentName,e.parentName&&e.headingText?" › ":"",e.headingText]}),e.snippet&&(0,c.jsx)(Sa,{dangerouslySetInnerHTML:{__html:e.snippet}})]}),(0,c.jsx)(Ta,{selected:o===h,children:(0,c.jsx)(da.A,{size:14})})]},e.entry.id))]}),(0,c.jsxs)(Aa,{children:[(0,c.jsxs)("span",{children:[(0,c.jsx)(Ca,{children:"↑"})," ",(0,c.jsx)(Ca,{children:"↓"})," navegar"]}),(0,c.jsxs)("span",{children:[(0,c.jsx)(Ca,{children:"↵"})," abrir"]}),(0,c.jsxs)("span",{children:[(0,c.jsx)(Ca,{children:"esc"})," fechar"]})]})]})}):null}function La(e,a){for(const o of e){if(o.id===a)return o;if(o.children){const e=La(o.children,a);if(e)return e}}}function Ia(e){return e.flatMap(e=>e.children?Ia(e.children):e.file?[e]:[])}const Da=r.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${n.w4.typography.fontFamily};
  background: ${n.w4.colors.mainBg};
`,Na=r.default.div`
  position: absolute;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%,
    hsl(${({hue:e})=>e}, 80%, 65%) 0%,
    hsl(${({hue:e})=>e+30}, 70%, 45%) 60%,
    transparent 100%
  );
  filter: blur(60px);
  opacity: 0.18;
  animation: drift ${({dur:e})=>e}s ease-in-out infinite alternate;
  pointer-events: none;

  @keyframes drift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(30px, -20px) scale(1.12); }
  }
`,Ga=r.default.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${n.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${n.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,Va=r.default.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,Ha=r.default.h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${n.w4.colors.mainText} 0%,
    ${n.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,qa=r.default.p`
  font-size: ${n.w4.typography.fontSizeMd};
  color: ${n.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,Ya=r.default.span`
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,_a=r.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${n.w4.colors.sidebarHover};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: ${n.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${n.w4.colors.accent}60;
    color: ${n.w4.colors.mainText};
    background: ${n.w4.colors.accentMuted};
  }

  kbd {
    font-size: 10px;
    padding: 1px 4px;
    background: ${n.w4.colors.surface};
    border: 1px solid ${n.w4.colors.border};
    border-radius: 3px;
    color: ${n.w4.colors.sidebarTextMuted};
  }

  @media (max-width: ${n.w4.breakpoints.md}) {
    padding: 5px 8px;
    span { display: none; }
    kbd { display: none; }
  }
`,Ja={en:"Browse the sidebar",pt:"Explora o menu lateral"};function Wa({title:e,sub:a,lang:o}){return(0,c.jsxs)(Da,{children:[(0,c.jsx)(Ga,{}),(0,c.jsx)(Na,{size:500,x:10,y:-10,hue:210,dur:7}),(0,c.jsx)(Na,{size:400,x:60,y:50,hue:270,dur:9}),(0,c.jsx)(Na,{size:300,x:30,y:70,hue:190,dur:6}),(0,c.jsxs)(Va,{children:[(0,c.jsx)(Ha,{children:e}),(0,c.jsx)(qa,{children:a}),(0,c.jsxs)(Ya,{children:[(0,c.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:(0,c.jsx)("polyline",{points:"15 18 9 12 15 6"})}),Ja[o]??Ja.en]})]})]})}function Ua(e,a,o){return"string"==typeof e?e:e[a]??e[o]??Object.values(e)[0]??""}function Xa({navigation:e,languages:a,defaultLang:o,locale:r,hashPrefix:s,topBarRight:l,welcomeTitle:d="Blog",welcomeSub:p="Notes, guides, and references — pick a topic from the sidebar to get started."}){const m=a?Object.keys(a):[],[u,g]=(m.length,(0,t.useState)(()=>o??m[0]??""));(0,t.useEffect)(()=>{r&&m.includes(r)&&r!==u&&g(r)},[r]);const f=(0,t.useMemo)(()=>a&&u?a[u].navigation:e??{entries:[]},[a,e,u]),h=((0,t.useMemo)(()=>Ia(f.entries),[f]),(0,t.useCallback)(e=>{const a=e.match(new RegExp(`^#\\/${s}\\/(.+)$`));if(a)return La(f.entries,a[1])},[f,s])),[x,b]=(0,t.useState)(()=>h(window.location.hash)??null);(0,t.useEffect)(()=>{if(!x)return;const e=La(f.entries,x.id);b(e??null)},[u,f]),(0,t.useEffect)(()=>{const e=()=>{const e=h(window.location.hash);e&&b(e)};return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[h]);const y=(0,t.useCallback)(e=>{e.file&&(b(e),window.location.hash=`#/${s}/${e.id}`)},[s]),w=(0,t.useMemo)(()=>Ia(f.entries),[f]),v=w.findIndex(e=>e.id===x?.id),$=v>0?w[v-1]:null,j=v<w.length-1?w[v+1]:null,[z,S]=(0,t.useState)(!1),[T,A]=(0,t.useState)(null);(0,t.useEffect)(()=>{const e=e=>{(e.metaKey||e.ctrlKey)&&"f"===e.key&&(e.preventDefault(),S(!0))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]);const C=x?.label??x?.name??s,M=Ua(d,u,o??m[0]??""),P=Ua(p,u,o??m[0]??""),E=(0,c.jsxs)(_a,{onClick:()=>S(!0),title:"Pesquisar (Ctrl+F)",children:[(0,c.jsx)(i.A,{size:14}),(0,c.jsx)("span",{children:"Pesquisar"}),(0,c.jsx)("kbd",{children:"⌘F"})]}),B=(0,c.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[E,l]});return(0,c.jsxs)(n.PE,{title:C,activeId:x?.id??null,topBarRight:B,sidebar:(0,c.jsx)(k,{config:f,activeId:x?.id??null,onSelect:y,hashPrefix:s}),children:[x?.file?(0,c.jsx)(ra,{file:x.file,prevEntry:$,nextEntry:j,onNavigate:y,scrollToId:T,onScrolled:()=>A(null)}):(0,c.jsx)(Wa,{title:M,sub:P,lang:u}),(0,c.jsx)(Oa,{open:z,onClose:()=>S(!1),entries:f.entries,activeId:x?.id??null,onSelect:(e,a)=>{y(e),A(a??null)}})]})}r.default.div`
  display: flex;
  gap: 4px;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  padding: 2px;
`,r.default.button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${n.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?n.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":n.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":n.w4.colors.mainText};
  }
`,r.default.div`
  padding: ${({collapsed:e})=>e?"8px 4px":`8px ${n.w4.spacing.md}`};
  border-bottom: 1px solid ${n.w4.colors.border}60;
`,r.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${({collapsed:e})=>e?"8px 0":"6px 10px"};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  background: ${({focused:e})=>e?`${n.w4.colors.accent}10`:n.w4.colors.sidebarHover};
  border: 1px solid ${({focused:e})=>e?`${n.w4.colors.accent}40`:"transparent"};
  border-radius: ${n.w4.borderRadius.md};
  transition: background 0.15s, border-color 0.2s;
  cursor: ${({collapsed:e})=>e?"pointer":"text"};
`,r.default.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${n.w4.colors.sidebarText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  min-width: 0;
  display: ${({collapsed:e})=>e?"none":"block"};
  &::placeholder { color: ${n.w4.colors.sidebarTextMuted}; }
`,r.default.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  border-radius: ${n.w4.borderRadius.sm};
  transition: color 0.15s;
  &:hover { color: ${n.w4.colors.mainText}; }
`,r.default.div`
  max-height: 60vh;
  overflow-y: auto;
  padding: ${n.w4.spacing.sm} 0;
`,r.default.button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding: 8px ${n.w4.spacing.md};
  background: ${({active:e})=>e?n.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?n.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;
  &:hover { background: ${n.w4.colors.sidebarHover}; }
`,r.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${n.w4.colors.sidebarText};
`,r.default.span`
  font-weight: 400;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: 11px;
`,r.default.div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: 12px;
  color: ${n.w4.colors.sidebarTextMuted};
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${n.w4.colors.accent}30;
    color: ${n.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,r.default.div`
  padding: 12px ${n.w4.spacing.md};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`,r.default.span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,r.default.span`
  font-size: 11px;
  color: ${n.w4.colors.accent};
  font-weight: 600;
  margin-left: auto;
`,new Map},30894(e,a,o){o.d(a,{Ym:()=>d});var t=o(27359),n=o(60894);const r="atlantis:locale",i="shell:locale";function s(e){return"en"===e||"pt"===e}function l(){try{const e=localStorage.getItem(r);if(s(e))return e}catch{}return"en"}function d(){const[e,a]=(0,t.useState)(l),o=(0,t.useCallback)(e=>{a(e),function(e){try{localStorage.setItem(r,e)}catch{}(0,n.Is)(i,e).catch(()=>{})}(e),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,t.useEffect)(()=>{const e=e=>{const o=e.detail;a(o)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,t.useEffect)(()=>{(0,n.PL)(i).then(o=>{if(s(o)&&o!==e){try{localStorage.setItem(r,o)}catch{}a(o)}}).catch(()=>{})},[]),[e,o]}(0,n.PL)(i).then(e=>{if(s(e))try{localStorage.setItem(r,e)}catch{}}).catch(()=>{});var c=o(53233);o(65723),c.default.div`
  display: flex;
  gap: 4px;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  padding: 2px;
`,c.default.button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${n.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?n.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":n.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":n.w4.colors.mainText};
  }
`},74914(e,a,o){o.d(a,{FlyoutPanel:()=>x});var t=o(27359),n=o(53233),r=o(77207),i=o(20255),s=o(217),l=o(15959),d=o(65185),c=o(65723);const p=r.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,m=n.default.div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${s.w4.colors.surfaceRaised};
  border: 1px solid ${s.w4.colors.accentMuted};
  border-radius: ${s.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${s.w4.colors.borderSubtle},
    0 16px 48px rgba(0, 0, 0, 0.55);
  min-width: 210px;
  overflow-y: auto;
  animation: ${p} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  backdrop-filter: blur(12px);

  /* Left connector line */
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 2px;
    background: ${s.w4.colors.accent};
    opacity: 0.4;
  }
`,u=n.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${s.w4.colors.accent};
  border-bottom: 1px solid ${s.w4.colors.borderSubtle};
  font-family: ${s.w4.typography.fontFamily};
`,g=n.default.button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?s.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?s.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.sidebarText};
  font-size: ${s.w4.typography.fontSizeBase};
  font-family: ${s.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${s.w4.colors.accentMuted};
    color: ${s.w4.colors.mainText};
  }
`;function f({iconKey:e}){const a=e?d.t[e]??i.A:i.A;return(0,c.jsx)(a,{size:14,strokeWidth:1.75})}function h({entries:e,activeId:a,onSelect:o}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(t.Fragment,{children:(0,c.jsx)(h,{entries:e.children,activeId:a,onSelect:o})},e.id):(0,c.jsxs)(g,{active:a===e.id,onClick:()=>o(e),children:[(0,c.jsx)(f,{iconKey:e.icon}),e.name]},e.id))})}function x({activeId:e}){const{flyout:a,scheduleFlyoutClose:o,cancelFlyoutClose:t}=(0,l.c)();if(!a)return null;const n=a.entry.icon?d.t[a.entry.icon]??i.A:i.A;return(0,c.jsxs)(m,{anchorY:a.anchorY,onMouseEnter:t,onMouseLeave:o,children:[(0,c.jsxs)(u,{children:[(0,c.jsx)(n,{size:13,strokeWidth:2}),a.entry.name]}),(0,c.jsx)(h,{entries:a.entry.children??[],activeId:e,onSelect:e=>{a.onSelect(e),o()}})]})}},15959(e,a,o){o.d(a,{I:()=>n,c:()=>r});var t=o(27359);const n=(0,t.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),r=()=>(0,t.useContext)(n)},65185(e,a,o){o.d(a,{t:()=>be});var t=o(49510),n=o(99038),r=o(57400),i=o(37561),s=o(28207),l=o(87902),d=o(36896),c=o(53013),p=o(32887),m=o(37901),u=o(39848),g=o(22164),f=o(3045),h=o(43775),x=o(83539),b=o(41783),y=o(39416),w=o(1837),v=o(57167),$=o(84494),j=o(82314),k=o(35751),z=o(20255),S=o(69633),T=o(92946),A=o(40822),C=o(36720),M=o(58456),P=o(43317),E=o(52709),B=o(89301),R=o(8006),F=o(83517),O=o(37032),L=o(6949),I=o(8218),D=o(36829),N=o(15553),G=o(59591),V=o(69923),H=o(72820),q=o(14621),Y=o(68479),_=o(72534),J=o(66673),W=o(67490),U=o(49033),X=o(45775),K=o(31365),Q=o(62937),Z=o(9821),ee=o(65912),ae=o(80158),oe=o(88641),te=o(48607),ne=o(83249),re=o(1821),ie=o(15889),se=o(89655),le=o(27170),de=o(19161),ce=o(71849),pe=o(41604),me=o(13142),ue=o(61187),ge=o(77747),fe=o(2932),he=o(24525),xe=o(57230);const be={activity:d.A,"a-large-small":l.A,apple:c.A,"arrow-right":p.A,"bar-chart-2":t.A,book:u.A,"book-open":m.A,briefcase:f.A,calendar:h.A,clock:b.A,"circle-dot":x.A,cloud:y.A,compass:w.A,cpu:v.A,droplets:$.A,feather:j.A,file:z.A,"file-text":k.A,folder:S.A,"git-branch":T.A,github:A.A,globe:C.A,grid:r.A,hand:M.A,hash:P.A,heart:E.A,key:R.A,hexagon:B.A,home:i.A,landmark:F.A,layers:s.A,"layout-grid":O.A,leaf:L.A,lightbulb:I.A,list:D.A,map:G.A,"map-pin":N.A,"message-circle":V.A,"message-square":H.A,minus:q.A,monitor:Y.A,mountain:_.A,package:J.A,palette:W.A,"pen-tool":U.A,"pie-chart":n.A,plane:X.A,plus:K.A,ruler:Q.A,shirt:Z.A,slash:ee.A,square:ae.A,star:oe.A,sun:te.A,terminal:ne.A,thermometer:re.A,triangle:ie.A,trophy:se.A,truck:le.A,type:de.A,users:ce.A,"volume-2":pe.A,watch:me.A,waves:ue.A,wind:ge.A,wrench:fe.A,x:he.A,zap:xe.A,bot:g.A}},60894(e,a,o){o.d(a,{PE:()=>A,CD:()=>H,PL:()=>Z,Is:()=>Q,w4:()=>t.w4,cL:()=>d.c});var t=o(217),n=o(27359),r=o(53233),i=o(65723);r.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${t.w4.spacing.sm};
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,r.default.div`
  position: relative;
`;var s=o(77207),l=o(73661),d=o(15959);const c="260px",p="56px",m=r.default.header`
  display: flex;
  align-items: center;
  height: calc(${"48px"} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);
`,u=r.default.div`
  width: ${p};
  min-width: ${p};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,g=r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,f=s.keyframes`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,h=r.default.button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${t.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,x=r.default.span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${f} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`\n    background: linear-gradient(135deg, ${t.w4.colors.accent}, ${t.w4.colors.accentHover});\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`,b=r.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  padding-left: ${t.w4.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${t.w4.spacing.sm};
    color: ${t.w4.colors.border};
  }
`,y=r.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${t.w4.spacing.sm};
  padding: 0 ${t.w4.spacing.lg};
`,w=r.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,v=r.default.div`
  display: flex;
  flex-direction: column;
  height: ${t.w4.sizes.fullHeight};
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,$=r.default.aside`
  width: ${({collapsed:e})=>e?p:c};
  min-width: ${({collapsed:e})=>e?p:c};
  background: ${t.w4.colors.sidebarBg};
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${t.w4.breakpoints.md}) {
    display: none;
  }
`,j=r.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,k=r.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,z=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function S(){return(0,i.jsx)(h,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:z.map((e,a)=>(0,i.jsx)(x,{index:a,accent:e.accent,children:e.char},a))})}const T="atlantis:sidebar-collapsed";function A({sidebar:e,children:a,topBarRight:t,title:r="Atlantis",activeId:s=null}){const[c,p]=(0,n.useState)(()=>{try{return"true"===localStorage.getItem(T)}catch{return!1}}),[f,h]=(0,n.useState)(null),x=(0,n.useRef)(),z=()=>p(e=>{const a=!e;try{localStorage.setItem(T,String(a))}catch{}return a}),A=n.useMemo(()=>n.lazy(()=>Promise.resolve().then(o.bind(o,74914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,i.jsx)(d.I.Provider,{value:{collapsed:c,toggle:z,flyout:f,openFlyout:(e,a,o)=>{clearTimeout(x.current),h({entry:e,anchorY:a,onSelect:o})},scheduleFlyoutClose:()=>{x.current=setTimeout(()=>h(null),160)},cancelFlyoutClose:()=>clearTimeout(x.current)},children:(0,i.jsxs)(v,{children:[(0,i.jsxs)(m,{children:[e&&(0,i.jsx)(u,{children:(0,i.jsx)(g,{onClick:z,title:c?"Expand sidebar":"Collapse sidebar",children:(0,i.jsx)(l.A,{size:17})})}),(0,i.jsx)(S,{}),r&&(0,i.jsx)(b,{children:r}),t&&(0,i.jsx)(y,{children:t})]}),(0,i.jsxs)(w,{children:[null!=e&&(0,i.jsx)($,{collapsed:c,children:(0,i.jsx)(j,{children:e})}),(0,i.jsx)(k,{children:a})]}),f&&(0,i.jsx)(n.Suspense,{fallback:null,children:(0,i.jsx)(A,{activeId:s})})]})})}var C=o(20255),M=o(69753),P=o(65185);const E=r.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,B=r.default.div`
  overflow: hidden;
`,R=r.default.div`
  padding-left: ${t.w4.spacing.md};
`,F=r.default.div`
  display: flex;
  flex-direction: column;
`,O=r.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${t.w4.spacing.sm} ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":t.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${t.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${t.w4.colors.sidebarText};
    background: ${t.w4.colors.sidebarHover};
  }
`,L=r.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,I=r.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,D=r.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${t.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,N=r.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?t.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?t.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?t.w4.colors.sidebarActive:t.w4.colors.sidebarText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${t.w4.borderRadius.md} ${t.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.mainText};
  }
`;function G({iconKey:e,size:a=16}){if(e&&!(e in P.t))return(0,i.jsx)("span",{style:{fontSize:a,lineHeight:1,display:"flex",alignItems:"center"},children:e});const o=e?P.t[e]??C.A:C.A;return(0,i.jsx)(o,{size:a,strokeWidth:1.75})}function V({entry:e,activeId:a,onSelect:o}){const[t,r]=(0,n.useState)(e.defaultOpen??!0),{collapsed:s,openFlyout:l,scheduleFlyoutClose:c,cancelFlyoutClose:p}=(0,d.c)();return e.children&&e.children.length>0?(0,i.jsxs)(F,{children:[(0,i.jsxs)(O,{collapsed:s,onClick:()=>{s||r(e=>!e)},onMouseEnter:s?a=>{const t=a.currentTarget.getBoundingClientRect();l(e,t.top,o)}:void 0,onMouseLeave:s?c:void 0,children:[(0,i.jsxs)(L,{collapsed:s,children:[(0,i.jsx)(G,{iconKey:e.icon,size:16}),(0,i.jsx)(I,{collapsed:s,children:e.name})]}),(0,i.jsx)(D,{open:t,collapsed:s,children:(0,i.jsx)(M.A,{size:13})})]}),(0,i.jsx)(E,{open:t&&!s,children:(0,i.jsx)(B,{children:(0,i.jsx)(R,{children:e.children.map(e=>(0,i.jsx)(V,{entry:e,activeId:a,onSelect:o},e.id))})})})]}):(0,i.jsxs)(N,{active:a===e.id,collapsed:s,onClick:()=>o(e),onMouseEnter:s?a=>{const t=a.currentTarget.getBoundingClientRect();l({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},t.top,o)}:void 0,onMouseLeave:s?c:void 0,children:[(0,i.jsx)(G,{iconKey:e.icon,size:15}),(0,i.jsx)(I,{collapsed:s,children:e.name})]})}function H({entries:e,activeId:a,onSelect:o}){return(0,i.jsx)("div",{children:e.map(e=>(0,i.jsx)(V,{entry:e,activeId:a,onSelect:o},e.id))})}const q=s.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;r.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${q} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${t.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${t.w4.colors.surface};
  }
`,r.default.span`
  display: block;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${t.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${t.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${t.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${t.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,o(74914);var Y=o(61920),_=o(48607),J=o(68479);r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  color: ${t.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.accent};
    border-color: ${t.w4.colors.accent};
  }

  &:active {
    transform: scale(0.92);
  }

  svg {
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &:hover svg {
    transform: rotate(15deg);
  }
`,Y.A,_.A,J.A;[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(e=>e.places);const W="documents",U="settings";function X(){return new Promise((e,a)=>{const o=indexedDB.open("atlantis-tools",2);o.onupgradeneeded=e=>{const a=e.target.result;a.objectStoreNames.contains(W)||a.createObjectStore(W,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),a.objectStoreNames.contains(U)||a.createObjectStore(U,{keyPath:"key"})},o.onsuccess=()=>e(o.result),o.onerror=()=>a(o.error)})}let K={async saveDoc(e,a,o){const t=await X(),n={appId:e,name:a,content:o,savedAt:Date.now()};return new Promise((e,a)=>{const o=t.transaction(W,"readwrite").objectStore(W).add(n);o.onsuccess=()=>e(String(o.result)),o.onerror=()=>a(o.error)})},async updateDoc(e,a,o){const t=await X();return new Promise((n,r)=>{const i=t.transaction(W,"readwrite").objectStore(W),s=i.get(Number(e));s.onsuccess=()=>{const e=s.result;if(!e)return void r(new Error("Doc not found"));const t=i.put({...e,name:a,content:o,savedAt:Date.now()});t.onsuccess=()=>n(),t.onerror=()=>r(t.error)},s.onerror=()=>r(s.error)})},async listDocs(e){const a=await X();return new Promise((o,t)=>{const n=a.transaction(W,"readonly").objectStore(W).index("appId").getAll(e);n.onsuccess=()=>o(n.result.map(e=>({...e,id:String(e.id)})).reverse()),n.onerror=()=>t(n.error)})},async deleteDoc(e){const a=await X();return new Promise((o,t)=>{const n=a.transaction(W,"readwrite").objectStore(W).delete(Number(e));n.onsuccess=()=>o(),n.onerror=()=>t(n.error)})},async putSetting(e,a){const o=await X();return new Promise((t,n)=>{const r=o.transaction(U,"readwrite").objectStore(U).put({key:e,value:a});r.onsuccess=()=>t(),r.onerror=()=>n(r.error)})},async getSetting(e){const a=await X();return new Promise((o,t)=>{const n=a.transaction(U,"readonly").objectStore(U).get(e);n.onsuccess=()=>o(n.result?n.result.value:null),n.onerror=()=>t(n.error)})}};function Q(e,a){return K.putSetting(e,a)}function Z(e){return K.getSetting(e)}r.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,r.default.div`
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,r.default.div`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,r.default.input`
  width: 100%;
  padding: 8px 12px;
  background: ${t.w4.colors.mainBg};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${t.w4.colors.accent}; }
  &::placeholder { color: ${t.w4.colors.sidebarTextMuted}; }
`,r.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,r.default.button`
  padding: 7px 18px;
  border-radius: ${t.w4.borderRadius.md};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:a})=>a?"rgba(248,81,73,0.12)":e?t.w4.colors.accent:"none"};
  color: ${({primary:e,danger:a})=>a?t.w4.colors.danger:e?"#fff":t.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:a})=>a?t.w4.colors.danger:e?t.w4.colors.accent:t.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,r.default.div`
  height: 1px;
  background: ${t.w4.colors.border};
  margin: 0 -4px;
`,r.default.div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
`,r.default.div`
  position: relative;
`,r.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    border-color: ${t.w4.colors.accent};
  }
`,r.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,r.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,r.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,r.default.div`
  padding: 16px 14px;
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  font-style: italic;
`,r.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
  }
`,r.default.button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,r.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,r.default.div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  margin-top: 1px;
`,r.default.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${t.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`,r.default.div`
  padding: ${t.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${t.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,r.default.section`
  scroll-margin-top: ${t.w4.spacing.lg};
`,r.default.div`
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.lg};
  padding: ${t.w4.spacing.lg};
`,r.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${t.w4.spacing.xl};

  @media (max-width: ${t.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,r.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,r.default.header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  padding-left: max(${t.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${t.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${t.w4.spacing.sm};
  z-index: 100;
`,r.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${t.w4.colors.accent}; }
`,r.default.span`
  color: ${t.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,r.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,r.default.span`
  font-weight: 400;
  color: ${t.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,r.default.div`
  flex: 1;
`;const ee=s.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ae=s.keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,oe=s.keyframes`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  animation: ${ee} 0.4s ease 0.15s both;
`,r.default.div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,r.default.div`
  position: absolute;
  inset: 0;
  animation: ${ae} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${({delay:e})=>e}s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({size:e})=>e}px;
    height: ${({size:e})=>e}px;
    border-radius: 50%;
    background: ${({color:e})=>e};
    box-shadow: 0 0 8px ${({color:e})=>e}44;
  }
`,r.default.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${t.w4.colors.border};
  animation: ${oe} 1.4s ease-in-out infinite;
`,r.default.span`
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`,r.default.nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${t.w4.spacing.sm} 0;
`,r.default.div`
  font-size: 10px;
  font-weight: 600;
  color: ${t.w4.colors.sidebarTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: ${t.w4.spacing.xs} ${t.w4.spacing.md};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"\n    font-size: 0;\n    padding: 0;\n    margin: 0;\n    height: 0;\n  "}
`,r.default.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 0 6px;
  border: none;
  border-radius: ${t.w4.borderRadius.md};
  background: ${({active:e})=>e?t.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?t.w4.colors.accent:t.w4.colors.sidebarText};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.mainText};
  }

  ${({collapsed:e})=>e&&"\n    justify-content: center;\n    padding: 8px;\n    margin: 0 4px;\n  "}
`,r.default.span`
  font-size: 15px;
  line-height: 1;
  flex-shrink: 0;
  width: 20px;
  text-align: center;
`,r.default.span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"display: none;"}
`},217(e,a,o){o.d(a,{w4:()=>n});const t={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#7a8599",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.15)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#2a3040",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1a2030",success:"#34d399",warning:"#fbbf24",danger:"#f87171"},n={colors:function(){const e={};for(const a of Object.keys(t))e[a]=`var(--at-${a})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"}}},90818(e,a,o){o.d(a,{i:()=>ie});var t=o(27359),n=o(53233),r=o(77207),i=o(60894),s=o(65723);const l=[{id:"geography",icon:"🌍",color:"#3fb950",label:{en:"Geography",pt:"Geografia"},questions:[{q:{en:"What is the capital of France?",pt:"Qual é a capital da França?"},options:[{en:"Berlin",pt:"Berlim"},{en:"Madrid",pt:"Madrid"},{en:"Paris",pt:"Paris"},{en:"Rome",pt:"Roma"}],correct:2},{q:{en:"How many continents are there on Earth?",pt:"Quantos continentes existem na Terra?"},options:[{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"7",pt:"7"},{en:"8",pt:"8"}],correct:2},{q:{en:"What is the largest ocean in the world?",pt:"Qual é o maior oceano do mundo?"},options:[{en:"Atlantic Ocean",pt:"Oceano Atlântico"},{en:"Indian Ocean",pt:"Oceano Índico"},{en:"Arctic Ocean",pt:"Oceano Ártico"},{en:"Pacific Ocean",pt:"Oceano Pacífico"}],correct:3},{q:{en:"Which is the longest river in the world?",pt:"Qual é o rio mais longo do mundo?"},options:[{en:"Amazon",pt:"Amazonas"},{en:"Nile",pt:"Nilo"},{en:"Mississippi",pt:"Mississípi"},{en:"Yangtze",pt:"Yangtzé"}],correct:1},{q:{en:"What is the capital of Brazil?",pt:"Qual é a capital do Brasil?"},options:[{en:"São Paulo",pt:"São Paulo"},{en:"Rio de Janeiro",pt:"Rio de Janeiro"},{en:"Brasília",pt:"Brasília"},{en:"Salvador",pt:"Salvador"}],correct:2},{q:{en:"Which continent is the largest?",pt:"Qual é o maior continente?"},options:[{en:"Africa",pt:"África"},{en:"North America",pt:"América do Norte"},{en:"Asia",pt:"Ásia"},{en:"Europe",pt:"Europa"}],correct:2},{q:{en:"What is the capital of Portugal?",pt:"Qual é a capital de Portugal?"},options:[{en:"Porto",pt:"Porto"},{en:"Lisbon",pt:"Lisboa"},{en:"Faro",pt:"Faro"},{en:"Coimbra",pt:"Coimbra"}],correct:1},{q:{en:"The Amazon River flows through which continent?",pt:"O rio Amazonas atravessa qual continente?"},options:[{en:"Africa",pt:"África"},{en:"North America",pt:"América do Norte"},{en:"Asia",pt:"Ásia"},{en:"South America",pt:"América do Sul"}],correct:3},{q:{en:"How many oceans are there on Earth?",pt:"Quantos oceanos existem na Terra?"},options:[{en:"3",pt:"3"},{en:"4",pt:"4"},{en:"5",pt:"5"},{en:"6",pt:"6"}],correct:2},{q:{en:"Which country has the most people?",pt:"Qual país tem mais pessoas?"},options:[{en:"USA",pt:"EUA"},{en:"India",pt:"Índia"},{en:"China",pt:"China"},{en:"Russia",pt:"Rússia"}],correct:1}]},{id:"science",icon:"🔬",color:"#58a6ff",label:{en:"Science",pt:"Ciências"},questions:[{q:{en:"How many planets are in our Solar System?",pt:"Quantos planetas tem o nosso Sistema Solar?"},options:[{en:"7",pt:"7"},{en:"8",pt:"8"},{en:"9",pt:"9"},{en:"10",pt:"10"}],correct:1},{q:{en:"What are the three states of matter?",pt:"Quais são os três estados da matéria?"},options:[{en:"Hot, cold, warm",pt:"Quente, frio, morno"},{en:"Solid, liquid, gas",pt:"Sólido, líquido, gasoso"},{en:"Hard, soft, medium",pt:"Duro, mole, médio"},{en:"Fire, water, earth",pt:"Fogo, água, terra"}],correct:1},{q:{en:"Which planet is closest to the Sun?",pt:"Qual planeta está mais perto do Sol?"},options:[{en:"Venus",pt:"Vénus"},{en:"Earth",pt:"Terra"},{en:"Mercury",pt:"Mercúrio"},{en:"Mars",pt:"Marte"}],correct:2},{q:{en:"How many bones does an adult human body have?",pt:"Quantos ossos tem o corpo humano adulto?"},options:[{en:"106",pt:"106"},{en:"206",pt:"206"},{en:"306",pt:"306"},{en:"406",pt:"406"}],correct:1},{q:{en:"What do plants need to make their food?",pt:"O que as plantas precisam para fazer o seu alimento?"},options:[{en:"Darkness and water",pt:"Escuridão e água"},{en:"Sunlight and carbon dioxide",pt:"Luz solar e dióxido de carbono"},{en:"Rain and soil only",pt:"Chuva e terra apenas"},{en:"Oxygen and fire",pt:"Oxigênio e fogo"}],correct:1},{q:{en:"What is the largest planet in our Solar System?",pt:"Qual é o maior planeta do Sistema Solar?"},options:[{en:"Saturn",pt:"Saturno"},{en:"Neptune",pt:"Neptuno"},{en:"Uranus",pt:"Úrano"},{en:"Jupiter",pt:"Júpiter"}],correct:3},{q:{en:"What organ pumps blood around your body?",pt:"Que órgão bombeia o sangue pelo corpo?"},options:[{en:"Liver",pt:"Fígado"},{en:"Lungs",pt:"Pulmões"},{en:"Heart",pt:"Coração"},{en:"Brain",pt:"Cérebro"}],correct:2},{q:{en:"What happens to water when it freezes?",pt:"O que acontece à água quando congela?"},options:[{en:"It becomes a gas",pt:"Torna-se um gás"},{en:"It becomes smaller",pt:"Fica mais pequena"},{en:"It becomes a solid",pt:"Torna-se um sólido"},{en:"It disappears",pt:"Desaparece"}],correct:2},{q:{en:"Which planet has rings around it?",pt:"Qual planeta tem anéis à sua volta?"},options:[{en:"Mars",pt:"Marte"},{en:"Venus",pt:"Vénus"},{en:"Mercury",pt:"Mercúrio"},{en:"Saturn",pt:"Saturno"}],correct:3},{q:{en:"What is the center of the Solar System?",pt:"O que está no centro do Sistema Solar?"},options:[{en:"The Moon",pt:"A Lua"},{en:"The Earth",pt:"A Terra"},{en:"The Sun",pt:"O Sol"},{en:"Jupiter",pt:"Júpiter"}],correct:2}]},{id:"animals",icon:"🐾",color:"#f0883e",label:{en:"Animals",pt:"Animais"},questions:[{q:{en:"What do pandas mostly eat?",pt:"O que os pandas comem principalmente?"},options:[{en:"Fish",pt:"Peixe"},{en:"Bamboo",pt:"Bambu"},{en:"Leaves",pt:"Folhas"},{en:"Berries",pt:"Bagas"}],correct:1},{q:{en:"Where do penguins live?",pt:"Onde vivem os pinguins?"},options:[{en:"Africa",pt:"África"},{en:"North Pole",pt:"Polo Norte"},{en:"South Pole / Antarctica",pt:"Polo Sul / Antártida"},{en:"Amazon rainforest",pt:"Floresta amazónica"}],correct:2},{q:{en:"What is a baby cat called?",pt:"Como se chama um bebé gato?"},options:[{en:"Puppy",pt:"Cachorro"},{en:"Cub",pt:"Filhote"},{en:"Kitten",pt:"Gatinho"},{en:"Calf",pt:"Bezerro"}],correct:2},{q:{en:"Which is the fastest land animal?",pt:"Qual é o animal terrestre mais rápido?"},options:[{en:"Lion",pt:"Leão"},{en:"Horse",pt:"Cavalo"},{en:"Cheetah",pt:"Guepardo"},{en:"Leopard",pt:"Leopardo"}],correct:2},{q:{en:"How many legs does a spider have?",pt:"Quantas patas tem uma aranha?"},options:[{en:"6",pt:"6"},{en:"8",pt:"8"},{en:"10",pt:"10"},{en:"12",pt:"12"}],correct:1},{q:{en:"What is a baby dog called?",pt:"Como se chama um bebé cão?"},options:[{en:"Kitten",pt:"Gatinho"},{en:"Foal",pt:"Potro"},{en:"Puppy",pt:"Cachorro"},{en:"Lamb",pt:"Cordeiro"}],correct:2},{q:{en:"Which animal is known as the king of the jungle?",pt:"Qual animal é conhecido como o rei da selva?"},options:[{en:"Tiger",pt:"Tigre"},{en:"Elephant",pt:"Elefante"},{en:"Lion",pt:"Leão"},{en:"Gorilla",pt:"Gorila"}],correct:2},{q:{en:"What do cows eat?",pt:"O que as vacas comem?"},options:[{en:"Fish",pt:"Peixe"},{en:"Grass and hay",pt:"Erva e feno"},{en:"Insects",pt:"Insetos"},{en:"Fruit",pt:"Fruta"}],correct:1},{q:{en:"Which is the largest animal on Earth?",pt:"Qual é o maior animal da Terra?"},options:[{en:"Elephant",pt:"Elefante"},{en:"Giraffe",pt:"Girafa"},{en:"Blue whale",pt:"Baleia azul"},{en:"Giant squid",pt:"Lula gigante"}],correct:2},{q:{en:"What sound does a duck make?",pt:"Que som faz um pato?"},options:[{en:"Moo",pt:"Mu"},{en:"Quack",pt:"Quá quá"},{en:"Oink",pt:"Ronc ronc"},{en:"Baa",pt:"Bé"}],correct:1}]},{id:"culture",icon:"🎨",color:"#bc8cff",label:{en:"Culture",pt:"Cultura"},questions:[{q:{en:"How many strings does a guitar usually have?",pt:"Quantas cordas tem normalmente uma guitarra?"},options:[{en:"4",pt:"4"},{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"8",pt:"8"}],correct:2},{q:{en:'Who wrote the fairy tale "Cinderella"?',pt:'Quem escreveu o conto "A Gata Borralheira"?'},options:[{en:"Hans Christian Andersen",pt:"Hans Christian Andersen"},{en:"Charles Perrault",pt:"Charles Perrault"},{en:"Brothers Grimm",pt:"Irmãos Grimm"},{en:"Walt Disney",pt:"Walt Disney"}],correct:1},{q:{en:"What instrument has black and white keys?",pt:"Que instrumento tem teclas pretas e brancas?"},options:[{en:"Violin",pt:"Violino"},{en:"Trumpet",pt:"Trompete"},{en:"Piano",pt:"Piano"},{en:"Flute",pt:"Flauta"}],correct:2},{q:{en:"In which story does a boy travel to Neverland?",pt:"Em que história um menino viaja para a Terra do Nunca?"},options:[{en:"Pinocchio",pt:"Pinóquio"},{en:"Peter Pan",pt:"Peter Pan"},{en:"Alice in Wonderland",pt:"Alice no País das Maravilhas"},{en:"The Wizard of Oz",pt:"O Feiticeiro de Oz"}],correct:1},{q:{en:"Which instrument do you blow to play?",pt:"Que instrumento se sopra para tocar?"},options:[{en:"Drums",pt:"Bateria"},{en:"Guitar",pt:"Guitarra"},{en:"Flute",pt:"Flauta"},{en:"Harp",pt:"Harpa"}],correct:2},{q:{en:"What are the three primary colors?",pt:"Quais são as três cores primárias?"},options:[{en:"Green, purple, orange",pt:"Verde, roxo, laranja"},{en:"Red, blue, yellow",pt:"Vermelho, azul, amarelo"},{en:"Black, white, grey",pt:"Preto, branco, cinzento"},{en:"Pink, brown, gold",pt:"Rosa, castanho, dourado"}],correct:1},{q:{en:"Who painted the Mona Lisa?",pt:"Quem pintou a Mona Lisa?"},options:[{en:"Michelangelo",pt:"Miguel Ângelo"},{en:"Pablo Picasso",pt:"Pablo Picasso"},{en:"Leonardo da Vinci",pt:"Leonardo da Vinci"},{en:"Vincent van Gogh",pt:"Vincent van Gogh"}],correct:2},{q:{en:"In the story of the Three Little Pigs, what does the wolf do?",pt:"Na história dos Três Porquinhos, o que faz o lobo?"},options:[{en:"Sings songs",pt:"Canta canções"},{en:"Blows down houses",pt:"Derruba casas soprando"},{en:"Bakes cakes",pt:"Faz bolos"},{en:"Steals food",pt:"Rouba comida"}],correct:1},{q:{en:"Which instrument has strings you hit with sticks?",pt:"Que instrumento tem cordas que se tocam com baquetas?"},options:[{en:"Violin",pt:"Violino"},{en:"Piano",pt:"Piano"},{en:"Xylophone",pt:"Xilofone"},{en:"Banjo",pt:"Banjo"}],correct:2}]},{id:"history",icon:"🏛️",color:"#e3b341",label:{en:"History",pt:"História"},questions:[{q:{en:"Who invented the telephone?",pt:"Quem inventou o telefone?"},options:[{en:"Thomas Edison",pt:"Thomas Edison"},{en:"Alexander Graham Bell",pt:"Alexander Graham Bell"},{en:"Nikola Tesla",pt:"Nikola Tesla"},{en:"Benjamin Franklin",pt:"Benjamin Franklin"}],correct:1},{q:{en:"Who was the first person to walk on the Moon?",pt:"Quem foi a primeira pessoa a caminhar na Lua?"},options:[{en:"Buzz Aldrin",pt:"Buzz Aldrin"},{en:"Yuri Gagarin",pt:"Yuri Gagarin"},{en:"Neil Armstrong",pt:"Neil Armstrong"},{en:"John Glenn",pt:"John Glenn"}],correct:2},{q:{en:"What ancient civilization built the pyramids?",pt:"Que civilização antiga construiu as pirâmides?"},options:[{en:"Romans",pt:"Romanos"},{en:"Greeks",pt:"Gregos"},{en:"Egyptians",pt:"Egípcios"},{en:"Vikings",pt:"Vikings"}],correct:2},{q:{en:"Who was Christopher Columbus?",pt:"Quem foi Cristóvão Colombo?"},options:[{en:"A famous painter",pt:"Um famoso pintor"},{en:"An explorer who sailed to America",pt:"Um explorador que navegou até à América"},{en:"A Roman emperor",pt:"Um imperador romano"},{en:"A scientist",pt:"Um cientista"}],correct:1},{q:{en:"Who invented the light bulb?",pt:"Quem inventou a lâmpada elétrica?"},options:[{en:"Alexander Graham Bell",pt:"Alexander Graham Bell"},{en:"Nikola Tesla",pt:"Nikola Tesla"},{en:"Albert Einstein",pt:"Albert Einstein"},{en:"Thomas Edison",pt:"Thomas Edison"}],correct:3},{q:{en:"What did the ancient Romans build across their empire to travel?",pt:"O que os romanos construíram pelo império para viajar?"},options:[{en:"Canals",pt:"Canais"},{en:"Railways",pt:"Comboios"},{en:"Roads",pt:"Estradas"},{en:"Bridges only",pt:"Apenas pontes"}],correct:2},{q:{en:"What did Vasco da Gama discover?",pt:"O que descobriu Vasco da Gama?"},options:[{en:"A sea route to India",pt:"O caminho marítimo para a Índia"},{en:"The Americas",pt:"As Américas"},{en:"Australia",pt:"A Austrália"},{en:"The South Pole",pt:"O Polo Sul"}],correct:0},{q:{en:"Which ancient wonder is still standing today?",pt:"Qual maravilha antiga ainda existe hoje?"},options:[{en:"The Colossus of Rhodes",pt:"O Colosso de Rodes"},{en:"The Hanging Gardens",pt:"Os Jardins Suspensos"},{en:"The Great Pyramid of Giza",pt:"A Grande Pirâmide de Gizé"},{en:"The Lighthouse of Alexandria",pt:"O Farol de Alexandria"}],correct:2},{q:{en:"In what year did the first man land on the Moon?",pt:"Em que ano o primeiro homem pousou na Lua?"},options:[{en:"1959",pt:"1959"},{en:"1969",pt:"1969"},{en:"1979",pt:"1979"},{en:"1989",pt:"1989"}],correct:1}]},{id:"sports",icon:"⚽",color:"#f78166",label:{en:"Sports",pt:"Desporto"},questions:[{q:{en:"How many players are on a football (soccer) team on the field?",pt:"Quantos jogadores tem uma equipa de futebol em campo?"},options:[{en:"9",pt:"9"},{en:"10",pt:"10"},{en:"11",pt:"11"},{en:"12",pt:"12"}],correct:2},{q:{en:"How often are the Summer Olympics held?",pt:"De quantos em quantos anos se realizam os Jogos Olímpicos de Verão?"},options:[{en:"Every 2 years",pt:"De 2 em 2 anos"},{en:"Every 3 years",pt:"De 3 em 3 anos"},{en:"Every 4 years",pt:"De 4 em 4 anos"},{en:"Every 5 years",pt:"De 5 em 5 anos"}],correct:2},{q:{en:"In basketball, how many points is a regular shot worth?",pt:"No basquetebol, quantos pontos vale um cesto normal?"},options:[{en:"1",pt:"1"},{en:"2",pt:"2"},{en:"3",pt:"3"},{en:"4",pt:"4"}],correct:1},{q:{en:"In which sport do you use a racket and a shuttlecock?",pt:"Em que desporto se usa uma raquete e um volante?"},options:[{en:"Tennis",pt:"Ténis"},{en:"Squash",pt:"Squash"},{en:"Badminton",pt:"Badminton"},{en:"Table tennis",pt:"Ténis de mesa"}],correct:2},{q:{en:"Who is famous for winning 23 Olympic gold medals in swimming?",pt:"Quem é famoso por ganhar 23 medalhas de ouro olímpicas em natação?"},options:[{en:"Ian Thorpe",pt:"Ian Thorpe"},{en:"Ryan Lochte",pt:"Ryan Lochte"},{en:"Michael Phelps",pt:"Michael Phelps"},{en:"Mark Spitz",pt:"Mark Spitz"}],correct:2},{q:{en:"How many players are on each side in volleyball?",pt:"Quantos jogadores tem cada equipa no voleibol?"},options:[{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"7",pt:"7"},{en:"8",pt:"8"}],correct:1},{q:{en:"What sport uses a puck instead of a ball?",pt:"Que desporto usa um disco em vez de bola?"},options:[{en:"Lacrosse",pt:"Lacrosse"},{en:"Polo",pt:"Polo"},{en:"Ice hockey",pt:"Hóquei no gelo"},{en:"Baseball",pt:"Basebol"}],correct:2},{q:{en:"In tennis, what is it called when the score is tied at 40-40?",pt:"No ténis, como se chama quando o marcador está 40-40?"},options:[{en:"Tie",pt:"Empate"},{en:"Deuce",pt:"Deuce"},{en:"Love",pt:"Love"},{en:"Match point",pt:"Match point"}],correct:1},{q:{en:"How many rings are on the Olympic flag?",pt:"Quantos anéis tem a bandeira olímpica?"},options:[{en:"4",pt:"4"},{en:"5",pt:"5"},{en:"6",pt:"6"},{en:"7",pt:"7"}],correct:1}]}],d=r.keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,c=r.keyframes`
  0%   { transform: scale(0.7); opacity: 0; }
  60%  { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(1); }
`,p=r.keyframes`
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.08); }
`,m=r.keyframes`
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-6px); }
  40%       { transform: translateX(6px); }
  60%       { transform: translateX(-4px); }
  80%       { transform: translateX(4px); }
`,u=r.keyframes`
  0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
`,g=r.keyframes`
  0%   { transform: scale(0) rotate(-30deg); opacity: 0; }
  60%  { transform: scale(1.3) rotate(5deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
`,f=r.keyframes`
  from { width: 0; }
`,h=r.keyframes`
  from { width: 100%; }
  to   { width: 0%; }
`,x=r.keyframes`
  from { opacity: 0; transform: scale(0.6); }
  to   { opacity: 1; transform: scale(1); }
`,b=n.default.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: ${i.w4.colors.mainBg};
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
  padding: ${i.w4.spacing.lg};
  animation: ${d} 0.3s ease;

  @media (max-width: ${i.w4.breakpoints.md}) {
    padding: ${i.w4.spacing.md};
  }
`,y=n.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.md};
  margin-bottom: ${i.w4.spacing.xl};
`,w=n.default.button`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.xs};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeBase};
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
  min-height: 44px;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    border-color: ${i.w4.colors.accent};
  }
`,v=n.default.h1`
  font-size: ${i.w4.typography.fontSizeLg};
  font-weight: 700;
  margin: 0;
  flex: 1;

  @media (max-width: ${i.w4.breakpoints.md}) {
    font-size: ${i.w4.typography.fontSizeMd};
  }
`,$=n.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${i.w4.spacing.lg};

  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${i.w4.spacing.md};
  }
`,j=n.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  padding: ${i.w4.spacing.xl} ${i.w4.spacing.lg};
  background: ${i.w4.colors.surface};
  border: 2px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  color: ${i.w4.colors.mainText};
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  min-height: 44px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({catColor:e})=>e};
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: ${({catColor:e})=>e};
    box-shadow: 0 8px 24px ${({catColor:e})=>`${e}30`};
  }

  &:hover::before {
    opacity: 0.15;
  }

  @media (max-width: ${i.w4.breakpoints.md}) {
    padding: ${i.w4.spacing.lg} ${i.w4.spacing.md};
  }
`,k=n.default.span`
  font-size: 2.5rem;
  line-height: 1;

  @media (max-width: ${i.w4.breakpoints.md}) {
    font-size: 2rem;
  }
`,z=n.default.span`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
`,S=n.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${({catColor:e})=>e};
  font-weight: 600;
`,T=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.lg};
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
`,A=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${i.w4.spacing.md};
`,C=n.default.div`
  padding: ${i.w4.spacing.xs} ${i.w4.spacing.md};
  background: ${i.w4.colors.surface};
  border: 1px solid ${({catColor:e})=>e};
  border-radius: 99px;
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${({catColor:e})=>e};
`,M=n.default.div`
  flex: 1;
  height: 8px;
  background: ${i.w4.colors.surface};
  border-radius: 99px;
  overflow: hidden;
  border: 1px solid ${i.w4.colors.border};
`,P=n.default.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: ${({catColor:e})=>e};
  border-radius: 99px;
  transition: width 0.4s ease;
  animation: ${f} 0.5s ease;
`,E=n.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  white-space: nowrap;
`,B=n.default.div`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-top: 3px solid ${({catColor:e})=>e};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.xl};
  animation: ${d} 0.25s ease;
  overflow: hidden;

  @media (max-width: ${i.w4.breakpoints.md}) {
    padding: ${i.w4.spacing.lg};
  }
`,R=n.default.div`
  height: 4px;
  background: ${({urgent:e,catColor:a})=>e?"#f85149":a};
  border-radius: 2px;
  margin-bottom: ${i.w4.spacing.md};
  animation: ${h} ${({duration:e})=>e}s linear forwards;
  transform-origin: left;
`,F=n.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 700;
  color: ${({urgent:e})=>e?"#f85149":i.w4.colors.mainTextMuted};
  transition: color 0.3s ease;
`,O=n.default.p`
  font-size: ${i.w4.typography.fontSizeLg};
  font-weight: 600;
  line-height: 1.5;
  margin: 0 0 ${i.w4.spacing.lg};
  color: ${i.w4.colors.mainText};

  @media (max-width: ${i.w4.breakpoints.md}) {
    font-size: ${i.w4.typography.fontSizeMd};
  }
`,L=n.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${i.w4.spacing.md};

  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,I=n.default.button`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.lg};
  background: ${({status:e})=>"correct"===e||"highlight"===e?"rgba(63, 185, 80, 0.15)":"wrong"===e?"rgba(248, 81, 73, 0.15)":i.w4.colors.mainBg};
  border: 2px solid
    ${({status:e,catColor:a})=>"correct"===e||"highlight"===e?"#3fb950":"wrong"===e?"#f85149":"idle"===e?i.w4.colors.border:a};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 500;
  cursor: ${({status:e})=>"idle"===e?"pointer":"default"};
  text-align: left;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
  min-height: 56px;
  animation: ${({status:e})=>"correct"===e?`${p} 0.4s ease`:"wrong"===e?`${m} 0.4s ease`:"none"};

  &:hover {
    background: ${({status:e,catColor:a})=>"idle"===e?`${a}18`:void 0};
    border-color: ${({status:e,catColor:a})=>"idle"===e?a:void 0};
    transform: ${({status:e})=>"idle"===e?"translateY(-1px)":"none"};
  }

  @media (max-width: ${i.w4.breakpoints.md}) {
    font-size: ${i.w4.typography.fontSizeBase};
    min-height: 52px;
  }
`,D=n.default.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-weight: 700;
  font-size: ${i.w4.typography.fontSizeSm};
  flex-shrink: 0;
  background: ${({status:e,catColor:a})=>"correct"===e||"highlight"===e?"#3fb950":"wrong"===e?"#f85149":a};
  color: #fff;
`,N=n.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.sm};
  padding: ${i.w4.spacing.md};
  border-radius: ${i.w4.borderRadius.md};
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  background: ${({isCorrect:e})=>e?"rgba(63, 185, 80, 0.12)":"rgba(248, 81, 73, 0.12)"};
  border: 1px solid ${({isCorrect:e})=>e?"#3fb950":"#f85149"};
  color: ${({isCorrect:e})=>e?"#3fb950":"#f85149"};
  animation: ${c} 0.35s ease;
`,G=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.xl};
  max-width: 560px;
  margin: 0 auto;
  width: 100%;
  animation: ${d} 0.35s ease;
`,V=n.default.div`
  width: 100%;
  background: ${i.w4.colors.surface};
  border: 2px solid ${({catColor:e})=>e};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.xl};
  text-align: center;
  position: relative;
  overflow: hidden;
`,H=n.default.h2`
  font-size: ${i.w4.typography.fontSizeXl};
  font-weight: 800;
  margin: 0 0 ${i.w4.spacing.sm};
`,q=n.default.p`
  font-size: 5rem;
  font-weight: 900;
  color: ${({catColor:e})=>e};
  margin: 0;
  line-height: 1;
  animation: ${x} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  text-shadow: 0 0 40px ${({catColor:e})=>`${e}50`};
`,Y=n.default.p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainTextMuted};
  margin: ${i.w4.spacing.xs} 0 ${i.w4.spacing.lg};
`,_=n.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.md};
  margin-bottom: ${i.w4.spacing.lg};
`,J=n.default.span`
  font-size: 2.5rem;
  opacity: ${({lit:e})=>e?1:.25};
  filter: ${({lit:e})=>e?"drop-shadow(0 0 8px gold)":"none"};
  animation: ${({lit:e})=>e?`${g} 0.5s ease`:"none"};
  animation-delay: ${({delay:e})=>e}s;
  animation-fill-mode: both;
`,W=n.default.p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainText};
  margin: 0;
`,U=n.default.div`
  display: flex;
  gap: ${i.w4.spacing.md};
  width: 100%;

  @media (max-width: ${i.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,X=n.default.button`
  flex: 1;
  padding: ${i.w4.spacing.md} ${i.w4.spacing.lg};
  border-radius: ${i.w4.borderRadius.md};
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
  min-height: 48px;
  border: 2px solid
    ${({primary:e,catColor:a})=>e?a??i.w4.colors.accent:i.w4.colors.border};
  background: ${({primary:e,catColor:a})=>e?a??i.w4.colors.accent:"transparent"};
  color: ${({primary:e})=>e?"#fff":i.w4.colors.mainText};

  &:hover {
    transform: translateY(-2px);
    background: ${({primary:e,catColor:a})=>e?a??i.w4.colors.accentHover:i.w4.colors.sidebarHover};
  }
`,K=n.default.div`
  position: fixed;
  top: -20px;
  left: ${({left:e})=>e}%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  background: ${({color:e})=>e};
  border-radius: 2px;
  animation: ${u} ${({duration:e})=>e}s
    ${({delay:e})=>e}s ease-in forwards;
  pointer-events: none;
  z-index: 9999;
`,Q=["#f0883e","#58a6ff","#3fb950","#e3b341","#bc8cff","#f78166"];function Z({count:e=60}){const a=(0,t.useMemo)(()=>Array.from({length:e},(e,a)=>({id:a,left:100*Math.random(),delay:2*Math.random(),duration:2.5+2*Math.random(),color:Q[Math.floor(Math.random()*Q.length)]??"#58a6ff",size:6+Math.floor(8*Math.random())})),[e]);return(0,s.jsx)(s.Fragment,{children:a.map(e=>(0,s.jsx)(K,{left:e.left,delay:e.delay,duration:e.duration,color:e.color,size:e.size},e.id))})}const ee="atlantis-familyquiz-scores";function ae(){try{const e=localStorage.getItem(ee);return e?JSON.parse(e):{}}catch{return{}}}function oe(e,a){const o=ae();if((o[e]??0)<a){o[e]=a;try{localStorage.setItem(ee,JSON.stringify(o))}catch{}}}const te={title:{en:"Family Quiz",pt:"Quiz da Família"},chooseCategory:{en:"Choose a category",pt:"Escolhe uma categoria"},question:{en:"Question",pt:"Pergunta"},of:{en:"of",pt:"de"},score:{en:"Score",pt:"Pontos"},correct:{en:"✓ Correct!",pt:"✓ Correto!"},correctBonus:{en:"✓ Correct! +5 speed bonus!",pt:"✓ Correto! +5 bónus de velocidade!"},wrong:{en:"✗ Wrong",pt:"✗ Errado"},timeUp:{en:"⏰ Time's up!",pt:"⏰ Tempo esgotado!"},results:{en:"Results",pt:"Resultados"},retry:{en:"Play Again",pt:"Jogar de Novo"},categories:{en:"Categories",pt:"Categorias"},highScore:{en:"Best:",pt:"Melhor:"},msg3stars:{en:"🎉 Amazing! You got everything right!",pt:"🎉 Incrível! Acertaste tudo!"},msg2stars:{en:"👏 Well done! Keep it up!",pt:"👏 Muito bem! Continua assim!"},msg1star:{en:"💪 Good try! Study and try again!",pt:"💪 Boa tentativa! Estuda e tenta outra vez!"},back:{en:"← Back",pt:"← Voltar"}};function ne(e,a){const o=te[e];return"pt"===a?o.pt:o.en}const re=["A","B","C","D"];function ie({lang:e,onBack:a}){const[o,n]=(0,t.useState)("categories"),[r,d]=(0,t.useState)(null),[c,p]=(0,t.useState)(0),[m,u]=(0,t.useState)(0),[g,f]=(0,t.useState)("idle"),[h,x]=(0,t.useState)(null),[K,Q]=(0,t.useState)(ae),[ee,te]=(0,t.useState)(15),[ie,se]=(0,t.useState)(0),[le,de]=(0,t.useState)(!1),ce=(0,t.useRef)(Date.now()),pe=(0,t.useRef)(null),me=(0,t.useRef)(null),ue=(0,t.useRef)(null),ge=(0,t.useRef)(!1),fe=(0,t.useCallback)(()=>{pe.current&&(clearInterval(pe.current),pe.current=null)},[]),he=(0,t.useCallback)(()=>{me.current&&(clearTimeout(me.current),me.current=null),fe()},[fe]);(0,t.useEffect)(()=>()=>he(),[he]);const xe=(0,t.useCallback)(()=>{fe(),te(15),se(e=>e+1),ce.current=Date.now(),pe.current=setInterval(()=>{te(e=>e<=1?0:e-1)},1e3)},[fe]),be=(0,t.useCallback)(e=>{he(),d(e),p(0),u(0),f("idle"),x(null),n("playing")},[he]);(0,t.useEffect)(()=>{"playing"===o&&"idle"===g&&xe()},[o,c]),(0,t.useEffect)(()=>{if(0===ee&&"playing"===o&&"idle"===g&&r){fe(),f("wrong"),x(null),de(!1);const e=m;me.current=setTimeout(()=>{const a=c+1;a>=r.questions.length?(oe(r.id,e),Q(ae()),u(e),n("results")):(u(e),p(a),f("idle"),x(null))},1500)}},[ee,o,g,r,c,m,fe]);const ye=(0,t.useCallback)(e=>{if("idle"!==g||!r)return;const a=r.questions[c];if(!a)return;fe();const o=(Date.now()-ce.current)/1e3,t=e===a.correct,i=t&&o<5,s=i?5:0;de(i),x(e),f(t?"correct":"wrong");const l=m+(t?10:0)+s;me.current=setTimeout(()=>{const e=c+1;e>=r.questions.length?(oe(r.id,l),Q(ae()),u(l),n("results")):(u(l),p(e),f("idle"),x(null),de(!1))},1500)},[g,r,c,m,fe]);if("categories"===o)return(0,s.jsxs)(b,{children:[(0,s.jsx)(y,{children:(0,s.jsxs)(v,{children:["🧠 ",ne("title",e)]})}),(0,s.jsx)("p",{style:{color:i.w4.colors.mainTextMuted,marginBottom:i.w4.spacing.lg,fontSize:i.w4.typography.fontSizeMd},children:ne("chooseCategory",e)}),(0,s.jsx)($,{children:l.map(a=>{const o=K[a.id];return(0,s.jsxs)(j,{catColor:a.color,onClick:()=>be(a),children:[(0,s.jsx)(k,{children:a.icon}),(0,s.jsx)(z,{children:"pt"===e?a.label.pt:a.label.en}),void 0!==o&&(0,s.jsxs)(S,{catColor:a.color,children:[ne("highScore",e)," ",o,"/",10*a.questions.length]})]},a.id)})})]});if("playing"===o&&r){const a=r.questions[c];if(!a)return null;const o=r.questions.length,t=(c+1)/o*100;return(0,s.jsxs)(b,{children:[(0,s.jsxs)(y,{children:[(0,s.jsx)(w,{onClick:()=>{he(),n("categories")},children:ne("back",e)}),(0,s.jsxs)(v,{children:[r.icon," ","pt"===e?r.label.pt:r.label.en]})]}),(0,s.jsxs)(T,{children:[(0,s.jsxs)(A,{children:[(0,s.jsxs)(C,{catColor:r.color,children:[ne("score",e),": ",m]}),(0,s.jsx)(M,{children:(0,s.jsx)(P,{pct:t,catColor:r.color})}),(0,s.jsxs)(E,{children:[ne("question",e)," ",c+1," ",ne("of",e)," ",o]}),(0,s.jsxs)(F,{urgent:ee<=5,children:[ee,"s"]})]}),(0,s.jsxs)(B,{catColor:r.color,children:[(0,s.jsx)(R,{duration:15,catColor:r.color,urgent:ee<=5},ie),(0,s.jsx)(O,{children:"pt"===e?a.q.pt:a.q.en}),(0,s.jsx)(L,{children:a.options.map((o,t)=>{let n="idle";return"idle"!==g&&(t===a.correct?n=h===t?"correct":"highlight":t===h&&(n="wrong")),(0,s.jsxs)(I,{status:n,catColor:r.color,disabled:"idle"!==g,...(i=t,{onTouchStart:e=>{ue.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:e=>{if(!ue.current)return;const a=Math.abs(e.changedTouches[0].clientX-ue.current.x),o=Math.abs(e.changedTouches[0].clientY-ue.current.y);ue.current=null,a>8||o>8||(ge.current=!0,ye(i))},onClick:()=>{ge.current?ge.current=!1:ye(i)}}),children:[(0,s.jsx)(D,{status:n,catColor:r.color,children:re[t]}),"pt"===e?o.pt:o.en]},t);var i})})]},c),"idle"!==g&&(0,s.jsx)(N,{isCorrect:"correct"===g,children:ne("correct"===g?le?"correctBonus":"correct":null===h?"timeUp":"wrong",e)})]})]})}if("results"===o&&r){const a=10*r.questions.length,o=Math.round(m/a*100),t=100===o?3:o>=60?2:1,i={3:ne("msg3stars",e),2:ne("msg2stars",e),1:ne("msg1star",e)};return(0,s.jsxs)(b,{children:[3===t&&(0,s.jsx)(Z,{}),(0,s.jsxs)(y,{children:[(0,s.jsx)(w,{onClick:()=>n("categories"),children:ne("back",e)}),(0,s.jsxs)(v,{children:[r.icon," ",ne("results",e)]})]}),(0,s.jsxs)(G,{children:[(0,s.jsxs)(V,{catColor:r.color,children:[(0,s.jsx)(H,{children:ne("results",e)}),(0,s.jsx)(q,{catColor:r.color,children:m}),(0,s.jsxs)(Y,{children:[o,"% — ",m,"/",a]}),(0,s.jsx)(_,{children:[1,2,3].map(e=>(0,s.jsx)(J,{lit:e<=t,delay:.15*(e-1),children:"⭐"},e))}),(0,s.jsx)(W,{children:i[t]})]}),(0,s.jsxs)(U,{children:[(0,s.jsx)(X,{primary:!0,catColor:r.color,onClick:()=>be(r),children:ne("retry",e)}),(0,s.jsx)(X,{onClick:()=>n("categories"),children:ne("categories",e)})]})]})]})}return null}},35758(e,a,o){o.d(a,{Y:()=>ue});var t=o(27359),n=o(53233),r=o(77207),i=o(60894),s=o(65723);const l={title:{pt:"Jogo da Memória",en:"Memory Game"},subtitle:{pt:"Vira duas cartas e encontra os pares!",en:"Flip two cards and find the pairs!"},easy:{pt:"Fácil",en:"Easy"},medium:{pt:"Médio",en:"Medium"},hard:{pt:"Difícil",en:"Hard"},easyDesc:{pt:"16 cartas · 8 pares",en:"16 cards · 8 pairs"},mediumDesc:{pt:"24 cartas · 12 pares",en:"24 cards · 12 pairs"},hardDesc:{pt:"40 cartas · 20 pares",en:"40 cards · 20 pairs"},moves:{pt:"Jogadas",en:"Moves"},pairs:{pt:"Pares",en:"Pairs"},time:{pt:"Tempo",en:"Time"},great:{pt:"Boa!",en:"Great!"},amazing:{pt:"Incrível!",en:"Amazing!"},perfect:{pt:"Perfeito!",en:"Perfect!"},super:{pt:"Super!",en:"Super!"},wow:{pt:"Uau!",en:"Wow!"},fast:{pt:"Rápido!",en:"Fast!"},gameOver:{pt:"Parabéns!",en:"Well done!"},finalMoves:{pt:"jogadas",en:"moves"},finalTime:{pt:"Tempo total",en:"Total time"},playAgain:{pt:"Jogar Outra Vez",en:"Play Again"},newRecord:{pt:"Novo recorde!",en:"New record!"},bestMoves:{pt:"Melhor",en:"Best"},flipTwo:{pt:"Vira duas cartas!",en:"Flip two cards!"},pickTheme:{pt:"Escolhe um tema!",en:"Pick a theme!"},pickSize:{pt:"Quantas cartas?",en:"How many cards?"},animals:{pt:"Animais",en:"Animals"},food:{pt:"Comida",en:"Food"},space:{pt:"Espaço",en:"Space"},mix:{pt:"Mistura",en:"Mix"},animalsDesc:{pt:"Cães, gatos, leões e mais!",en:"Dogs, cats, lions and more!"},foodDesc:{pt:"Pizza, gelado, bolo e mais!",en:"Pizza, ice cream, cake and more!"},spaceDesc:{pt:"Planetas, foguetões e estrelas!",en:"Planets, rockets and stars!"},mixDesc:{pt:"Um pouco de tudo!",en:"A bit of everything!"},matched:{pt:"Par encontrado!",en:"Match found!"},tryAgain:{pt:"Tenta outra vez!",en:"Try again!"},allFound:{pt:"Encontraste todos!",en:"You found them all!"}};function d(e,a){return l[e]["pt"===a?"pt":"en"]}const c=[{id:"animals",emoji:"🦁",color:"#f59e0b",preview:["🐶","🐱","🦁","🐼","🦋"],symbols:["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🐔","🦄","🐝","🦋","🐞","🐢","🐙","🐬","🐳","🐘","🦒"]},{id:"food",emoji:"🍕",color:"#ef4444",preview:["🍕","🍦","🧁","🍓","🍩"],symbols:["🍎","🍌","🍓","🍉","🍕","🧁","🍩","🍪","🌮","🍦","🎂","🍫","🍬","🍭","🍿","🥐","🍔","🌭","🍟","🥪","🍝","🍣","🍧","🍰","🥑","🍇"]},{id:"space",emoji:"🚀",color:"#8b5cf6",preview:["🚀","🌍","⭐","🛸","🌙"],symbols:["🚀","🌍","⭐","🛸","🌙","☀️","🪐","🌟","💫","✨","🔭","👽","🤖","👾","🛰️","💎","🔮","⚡","🌈","☄️","🎯","🎮","🎲","🧩","🎸","🔥"]},{id:"mix",emoji:"🎪",color:"#3fb950",preview:["🐶","🍕","🚀","⭐","🎸"],symbols:["🐶","🐱","🦁","🐼","🦋","🐢","🐙","🐬","🍕","🍦","🧁","🍓","🍩","🍉","🎂","🍌","🚀","🌍","⭐","🛸","🌙","☀️","🌈","💎","🎸","⚽"]}],p={easy:8,medium:12,hard:20};function m(e){const a=[...e];for(let e=a.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1));[a[e],a[o]]=[a[o],a[e]]}return a}function u(e){return`${Math.floor(e/60)}:${(e%60).toString().padStart(2,"0")}`}const g=r.keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=r.keyframes`
  0%   { transform: scale(0); opacity: 0; }
  60%  { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
`,h=r.keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
`,x=r.keyframes`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.06); }
`,b=r.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,y=r.keyframes`
  0%   { transform: rotateY(0deg) scale(1); }
  30%  { transform: rotateY(0deg) scale(1.15); }
  60%  { transform: rotateY(0deg) scale(0.95); }
  100% { transform: rotateY(0deg) scale(1); }
`,w=r.keyframes`
  0%, 100% { transform: rotateY(0deg); }
  20%      { transform: rotateY(0deg) translateX(-4px); }
  40%      { transform: rotateY(0deg) translateX(4px); }
  60%      { transform: rotateY(0deg) translateX(-3px); }
  80%      { transform: rotateY(0deg) translateX(3px); }
`,v=r.keyframes`
  0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(80px) rotate(720deg); opacity: 0; }
`,$=r.keyframes`
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
  50%      { transform: translateY(-6px) scale(1.1); opacity: 1; }
`,j=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 0;
  overflow-y: auto;
  background:
    radial-gradient(ellipse 60% 50% at 30% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 70% 80%, rgba(249, 117, 131, 0.06) 0%, transparent 70%),
    #080b12;
`,k=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: ${i.w4.spacing.xl};
  animation: ${g} 0.4s ease;
`,z=n.default.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: ${i.w4.colors.mainText};
  text-align: center;
  margin: 0;
  letter-spacing: -0.02em;
`,S=n.default.p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  margin: 0;
  max-width: 380px;
  line-height: 1.5;
`,T=n.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${i.w4.spacing.md};
  max-width: 480px;
  width: 100%;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    max-width: 240px;
  }
`,A=n.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px 20px 22px;
  background: linear-gradient(168deg, ${({accent:e})=>e}12 0%, ${i.w4.colors.surface} 50%);
  border: 2px solid ${({accent:e})=>e}35;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: ${i.w4.typography.fontFamily};
  position: relative;
  overflow: hidden;
  min-height: 48px;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${({accent:e})=>e}, transparent);
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    border-color: ${({accent:e})=>e}70;
    box-shadow: 0 8px 28px ${({accent:e})=>e}20;
  }

  &:active { transform: translateY(-2px) scale(0.98); }
`,C=n.default.span`
  font-size: 44px;
  animation: ${h} 2.5s ease-in-out infinite;
`,M=n.default.div`
  display: flex;
  gap: 4px;
  font-size: 20px;
  opacity: 0.7;
`,P=n.default.span`
  font-size: 17px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
`,E=n.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.3;
`,B=n.default.div`
  display: flex;
  gap: ${i.w4.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;
`,R=n.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 28px 32px;
  background: linear-gradient(168deg, ${({accent:e})=>e}15 0%, ${i.w4.colors.surface} 50%);
  border: 2px solid ${({accent:e})=>e}40;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: ${i.w4.typography.fontFamily};
  min-width: 150px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: ${({accent:e})=>e};
    border-radius: 20px 20px 0 0;
    opacity: 0.6;
  }

  &:hover {
    transform: translateY(-6px) scale(1.03);
    border-color: ${({accent:e})=>e}80;
    box-shadow: 0 8px 30px ${({accent:e})=>e}25;
  }

  &:active { transform: translateY(-2px) scale(0.98); }
`,F=n.default.span`
  font-size: 40px;
  animation: ${h} 2s ease-in-out infinite;
`,O=n.default.span`
  font-size: 18px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
`,L=n.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,I=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px ${i.w4.spacing.md} ${i.w4.spacing.lg};
  gap: 12px;
  min-height: 0;
  width: 100%;
`,D=n.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.md};
  width: 100%;
  max-width: 700px;
  flex-wrap: wrap;
`,N=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${({highlight:e})=>e?"#3fb950":i.w4.colors.border};
  border-radius: 24px;
  font-size: 15px;
  font-weight: 700;
  color: ${({highlight:e})=>e?"#3fb950":i.w4.colors.mainText};
`,G=n.default.div`
  font-size: 16px;
  font-weight: 700;
  min-height: 24px;
  text-align: center;
  color: ${({type:e})=>"match"===e?"#3fb950":"miss"===e?"#f97583":i.w4.colors.accent};
  animation: ${({type:e})=>"match"===e?f:"miss"===e?w:"none"} 0.4s ease;
`,V=n.default.div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, 1fr);
  gap: 10px;
  max-width: 720px;
  width: 100%;
  padding: 0 4px;
  animation: ${g} 0.3s ease;

  @media (max-width: ${i.w4.breakpoints.md}) {
    gap: 8px;
  }
`,H=n.default.button`
  aspect-ratio: 1;
  perspective: 600px;
  border: none;
  background: none;
  padding: 0;
  cursor: ${({matched:e})=>e?"default":"pointer"};
  outline: none;

  ${({matched:e})=>e?`animation: ${y.toString()} 0.5s ease;`:""}
  ${({wrong:e})=>e?`animation: ${w.toString()} 0.4s ease;`:""}
`,q=n.default.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-style: preserve-3d;
  transform: ${({flipped:e})=>e?"rotateY(180deg)":"rotateY(0deg)"};
`,Y=n.default.div`
  position: absolute;
  inset: 0;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`,_=(0,n.default)(Y)`
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.2) 0%,
    ${i.w4.colors.surface} 40%,
    ${i.w4.colors.surface} 60%,
    rgba(79, 192, 255, 0.15) 100%
  );
  border: 2px solid ${i.w4.colors.border};
  transition: border-color 0.2s, box-shadow 0.2s;
  overflow: hidden;

  &::after {
    content: '?';
    font-size: 28px;
    font-weight: 800;
    color: ${i.w4.colors.mainTextMuted};
    opacity: 0.3;
  }

  .card-outer:hover & {
    border-color: ${i.w4.colors.accent}60;
    box-shadow: 0 0 16px rgba(139, 92, 246, 0.15);
  }

  @media (max-width: ${i.w4.breakpoints.md}) {
    &::after { font-size: 20px; }
  }
`,J=(0,n.default)(Y)`
  transform: rotateY(180deg);
  background: ${({matched:e})=>e?`linear-gradient(135deg, rgba(63, 185, 80, 0.15) 0%, ${i.w4.colors.surface} 50%)`:i.w4.colors.surface};
  border: 2px solid ${({matched:e})=>e?"#3fb95060":i.w4.colors.accent+"50"};
  box-shadow: ${({matched:e})=>e?"0 0 16px rgba(63, 185, 80, 0.15)":"0 0 12px rgba(139, 92, 246, 0.1)"};
`,W=n.default.span`
  font-size: ${({size:e})=>"lg"===e?"48px":"md"===e?"40px":"32px"};
  line-height: 1;
  user-select: none;

  @media (max-width: ${i.w4.breakpoints.md}) {
    font-size: ${({size:e})=>"lg"===e?"36px":"md"===e?"30px":"24px"};
  }
`,U=n.default.span`
  position: absolute;
  font-size: 12px;
  pointer-events: none;
  animation: ${$} 1.5s ease-in-out infinite;
  animation-delay: ${({i:e})=>.3*e}s;
  ${({i:e})=>["top: 4px; right: 6px;","bottom: 4px; left: 6px;","top: 6px; left: 8px;","bottom: 6px; right: 8px;"][e%4]}
`,X=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: ${i.w4.spacing.xl};
  animation: ${g} 0.5s ease;
  text-align: center;
`,K=n.default.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: ${i.w4.colors.mainText};
  margin: 0;
`,Q=n.default.span`
  font-size: 72px;
  animation: ${h} 1s ease-in-out infinite;
`,Z=n.default.div`
  display: flex;
  gap: ${i.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,ee=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,ae=n.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,oe=n.default.span`
  font-size: 40px;
  font-weight: 800;
  color: ${({color:e})=>e??i.w4.colors.accent};
`,te=n.default.span`
  font-size: 18px;
  font-weight: 700;
  color: #f59e0b;
  animation: ${x} 1s ease-in-out infinite;
`,ne=n.default.button`
  padding: 16px 40px;
  background: ${({accent:e})=>e};
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 52px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 24px ${({accent:e})=>e}40;
  }

  &:active { transform: translateY(-1px); }
`,re=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: 20px;
  font-size: 14px;
  color: ${i.w4.colors.mainTextMuted};
`,ie=n.default.span`
  position: fixed;
  top: 20%;
  left: ${({left:e})=>e}%;
  font-size: 22px;
  color: ${({color:e})=>e};
  pointer-events: none;
  animation: ${v} 1.5s ease-out ${({delay:e})=>e}s forwards;
  opacity: 0;
  animation-fill-mode: forwards;
  z-index: 100;
`,se=n.default.span`
  background: linear-gradient(90deg, #f97583, #d2a8ff, #79c0ff, #3fb950, #f97583);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${b} 3s linear infinite;
  font-size: 16px;
  font-weight: 700;
`,le=["🎊","⭐","🌟","💫","✨","🎉","🏆","🥳"],de=["#f97583","#d2a8ff","#79c0ff","#3fb950","#f59e0b","#ff6bcb"],ce=["great","amazing","perfect","super","wow","fast"],pe="atlantis-memory-best";function me(e){try{return JSON.parse(localStorage.getItem(pe)??"{}")[e]??0}catch{return 0}}function ue({lang:e}){const[a,o]=(0,t.useState)("theme"),[n,r]=(0,t.useState)("animals"),[i,l]=(0,t.useState)("easy"),[g,f]=(0,t.useState)([]),[h,x]=(0,t.useState)([]),[b,y]=(0,t.useState)(new Set),[w,v]=(0,t.useState)(0),[$,Y]=(0,t.useState)(0),[ue,ge]=(0,t.useState)(0),[fe,he]=(0,t.useState)({msg:"",type:"info"}),[xe,be]=(0,t.useState)(!1),[ye,we]=(0,t.useState)(!1),ve=(0,t.useRef)(!1),$e=(0,t.useRef)(null),je=p[i],ke=function(e){return"easy"===e?4:"medium"===e?6:8}(i),ze=function(e){return"easy"===e?"lg":"medium"===e?"md":"sm"}(i),Se=(0,t.useMemo)(()=>{const e=c.find(e=>e.id===n);return e?.symbols??c[0].symbols},[n]);(0,t.useEffect)(()=>{if("playing"===a)return $e.current=setInterval(()=>ge(e=>e+1),1e3),()=>{$e.current&&clearInterval($e.current)};$e.current&&clearInterval($e.current)},[a]);const Te=(0,t.useCallback)(a=>{l(a);const t=function(e,a){const o=m(e).slice(0,a),t=[];return o.forEach((e,a)=>{t.push({id:2*a,symbol:e,pairId:a,flipped:!1,matched:!1}),t.push({id:2*a+1,symbol:e,pairId:a,flipped:!1,matched:!1})}),m(t)}(Se,p[a]);f(t),x([]),y(new Set),v(0),Y(0),ge(0),he({msg:d("flipTwo",e),type:"info"}),be(!1),we(!1),o("playing")},[Se,e]),Ae=(0,t.useCallback)(a=>{if(ve.current||a.matched||a.flipped)return;const t=[...h,a.id];if(x(t),f(e=>e.map(e=>e.id===a.id?{...e,flipped:!0}:e)),2===t.length){ve.current=!0,v(e=>e+1);const[n,r]=t,s=g.find(e=>e.id===n),l=a;if(s.pairId===l.pairId){const a=$+1;Y(a);const t=ce[Math.floor(Math.random()*ce.length)];he({msg:`${d(t,e)} ${d("matched",e)}`,type:"match"}),setTimeout(()=>{if(f(e=>e.map(e=>e.pairId===s.pairId?{...e,matched:!0}:e)),x([]),ve.current=!1,a===je){he({msg:d("allFound",e),type:"match"});const a=w+1,t=me(i);(!t||a<t)&&(function(e,a){try{const o=JSON.parse(localStorage.getItem(pe)??"{}");(!o[e]||a<o[e])&&(o[e]=a,localStorage.setItem(pe,JSON.stringify(o)))}catch{}}(i,a),be(!0)),we(!0),setTimeout(()=>o("gameover"),1200)}},500)}else he({msg:d("tryAgain",e),type:"miss"}),y(new Set([n,r])),setTimeout(()=>{f(e=>e.map(e=>e.id===n||e.id===r?{...e,flipped:!1}:e)),x([]),y(new Set),ve.current=!1},800)}},[h,g,$,je,w,i,e]),Ce=me(i);return"theme"===a?(0,s.jsx)(j,{children:(0,s.jsxs)(k,{children:[(0,s.jsxs)(z,{children:["🃏 ",d("title",e)]}),(0,s.jsx)(S,{children:d("pickTheme",e)}),(0,s.jsx)(T,{children:c.map(a=>(0,s.jsxs)(A,{accent:a.color,onClick:()=>{r(a.id),o("difficulty")},children:[(0,s.jsx)(C,{children:a.emoji}),(0,s.jsx)(P,{children:d(a.id,e)}),(0,s.jsx)(M,{children:a.preview.map((e,a)=>(0,s.jsx)("span",{children:e},a))}),(0,s.jsx)(E,{children:d(`${a.id}Desc`,e)})]},a.id))})]})}):"difficulty"===a?(0,s.jsx)(j,{children:(0,s.jsxs)(k,{children:[(0,s.jsxs)(z,{children:["🃏 ",d("title",e)]}),(0,s.jsx)(S,{children:d("pickSize",e)}),(0,s.jsxs)(B,{children:[(0,s.jsxs)(R,{accent:"#3fb950",onClick:()=>Te("easy"),children:[(0,s.jsx)(F,{children:"🌟"}),(0,s.jsx)(O,{children:d("easy",e)}),(0,s.jsx)(L,{children:d("easyDesc",e)})]}),(0,s.jsxs)(R,{accent:"#f59e0b",onClick:()=>Te("medium"),children:[(0,s.jsx)(F,{children:"🔥"}),(0,s.jsx)(O,{children:d("medium",e)}),(0,s.jsx)(L,{children:d("mediumDesc",e)})]}),(0,s.jsxs)(R,{accent:"#f97583",onClick:()=>Te("hard"),children:[(0,s.jsx)(F,{children:"💪"}),(0,s.jsx)(O,{children:d("hard",e)}),(0,s.jsx)(L,{children:d("hardDesc",e)})]})]}),Ce>0&&(0,s.jsxs)(re,{children:["🏆 ",d("bestMoves",e),": ",Ce," ",d("finalMoves",e)]})]})}):"gameover"===a?(0,s.jsxs)(j,{children:[ye&&le.map((e,a)=>(0,s.jsx)(ie,{left:5+12*a,delay:.1*a,color:de[a%de.length],children:e},a)),(0,s.jsxs)(X,{children:[(0,s.jsx)(Q,{children:"🏆"}),(0,s.jsx)(K,{children:d("gameOver",e)}),(0,s.jsx)(se,{children:d("allFound",e)}),(0,s.jsxs)(Z,{children:[(0,s.jsxs)(ee,{children:[(0,s.jsx)(ae,{children:d("moves",e)}),(0,s.jsx)(oe,{children:w})]}),(0,s.jsxs)(ee,{children:[(0,s.jsx)(ae,{children:d("pairs",e)}),(0,s.jsx)(oe,{color:"#3fb950",children:je})]}),(0,s.jsxs)(ee,{children:[(0,s.jsx)(ae,{children:d("finalTime",e)}),(0,s.jsx)(oe,{color:"#f59e0b",children:u(ue)})]})]}),xe&&(0,s.jsxs)(te,{children:["🎉 ",d("newRecord",e)]}),Ce>0&&!xe&&(0,s.jsxs)(re,{children:["🏆 ",d("bestMoves",e),": ",Ce," ",d("finalMoves",e)]}),(0,s.jsx)(ne,{accent:"#8b5cf6",onClick:()=>o("theme"),children:d("playAgain",e)})]})]}):(0,s.jsx)(j,{children:(0,s.jsxs)(I,{children:[(0,s.jsxs)(D,{children:[(0,s.jsxs)(N,{children:["🎴 ",d("moves",e),": ",w]}),(0,s.jsxs)(N,{highlight:$===je,children:["⭐ ",d("pairs",e),": ",$,"/",je]}),(0,s.jsxs)(N,{children:["⏱️ ",u(ue)]})]}),(0,s.jsx)(G,{type:fe.type,children:fe.msg},fe.msg),(0,s.jsx)(V,{cols:ke,children:g.map(e=>(0,s.jsx)(H,{className:"card-outer",matched:e.matched,wrong:b.has(e.id),onClick:()=>Ae(e),"aria-label":e.flipped?e.symbol:"Hidden card",children:(0,s.jsxs)(q,{flipped:e.flipped,children:[(0,s.jsx)(_,{}),(0,s.jsxs)(J,{matched:e.matched,children:[(0,s.jsx)(W,{size:ze,children:e.symbol}),e.matched&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(U,{i:0,children:"✨"}),(0,s.jsx)(U,{i:1,children:"✨"})]})]})]})},e.id))})]})})}},71442(e,a,o){o.d(a,{K:()=>xe});var t=o(27359),n=o(53233),r=o(77207),i=o(60894),s=o(65723);const l="atlantis-missions-progress",d=[{id:"brush-teeth",emoji:"🪥",name:{pt:"Lavar os dentes",en:"Brush teeth"},points:5},{id:"make-bed",emoji:"🛏️",name:{pt:"Fazer a cama",en:"Make bed"},points:10},{id:"read",emoji:"📚",name:{pt:"Ler 15 minutos",en:"Read for 15 min"},points:15},{id:"tidy-room",emoji:"🧹",name:{pt:"Arrumar o quarto",en:"Tidy room"},points:15},{id:"set-table",emoji:"🍽️",name:{pt:"Ajudar a pôr a mesa",en:"Help set table"},points:10},{id:"school-bag",emoji:"🎒",name:{pt:"Preparar a mochila",en:"Pack school bag"},points:5},{id:"pet",emoji:"🐕",name:{pt:"Passear/alimentar animal",en:"Walk/feed pet"},points:10},{id:"vegetables",emoji:"🥗",name:{pt:"Comer legumes",en:"Eat vegetables"},points:5},{id:"clothes-away",emoji:"🧤",name:{pt:"Guardar a roupa",en:"Put clothes away"},points:10},{id:"homework",emoji:"📝",name:{pt:"Fazer os trabalhos",en:"Do homework"},points:15},{id:"draw",emoji:"🎨",name:{pt:"Desenhar ou pintar",en:"Draw or paint"},points:10},{id:"be-kind",emoji:"🤗",name:{pt:"Ser gentil com alguém",en:"Be kind to someone"},points:10}],c=50,p=[{emoji:"🌱",pt:"Recruta",en:"Recruit"},{emoji:"🧭",pt:"Explorador",en:"Explorer"},{emoji:"⚔️",pt:"Aventureiro",en:"Adventurer"},{emoji:"🦸",pt:"Herói",en:"Hero"},{emoji:"🏆",pt:"Campeão",en:"Champion"},{emoji:"🌟",pt:"Lenda",en:"Legend"}];function m(e){const a=Math.floor(e/c);return Math.min(a,p.length-1)}function u(){return(new Date).toISOString().slice(0,10)}const g=r.keyframes`
  0%   { opacity: 1; transform: translateY(0) scale(1); }
  80%  { opacity: 1; transform: translateY(-48px) scale(1.15); }
  100% { opacity: 0; transform: translateY(-72px) scale(0.9); }
`,f=r.keyframes`
  0%   { background: ${i.w4.colors.surface}; box-shadow: none; }
  30%  { background: rgba(88,166,255,0.18); box-shadow: 0 0 0 2px ${i.w4.colors.accent}; }
  100% { background: ${i.w4.colors.surface}; box-shadow: none; }
`,h=r.keyframes`
  0%   { border-color: rgba(52, 211, 153, 0.4); box-shadow: none; }
  40%  { border-color: #f59e0b; box-shadow: 0 0 12px rgba(245, 158, 11, 0.5), 0 0 0 2px rgba(52, 211, 153, 0.6); }
  100% { border-color: rgba(52, 211, 153, 0.6); box-shadow: 0 0 6px rgba(52, 211, 153, 0.2); }
`,x=r.keyframes`
  0%   { opacity: 0; transform: scale(0.7); }
  60%  { opacity: 1; transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
`,b=r.keyframes`
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.2); }
`,y=r.keyframes`
  from { width: 0%; }
`,w=r.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,v=r.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,$=r.keyframes`
  0%   { transform: scale(0.6); }
  60%  { transform: scale(1.25); }
  100% { transform: scale(1); }
`,j=r.keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(251, 146, 60, 0.3); }
  50%       { box-shadow: 0 0 20px rgba(251, 146, 60, 0.6), 0 0 40px rgba(251, 146, 60, 0.2); }
`,k=r.keyframes`
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50%       { transform: translateY(-12px) rotate(5deg); }
`,z=r.keyframes`
  0%   { opacity: 0; transform: scale(0.95) translateY(12px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
`,S=n.default.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: radial-gradient(ellipse at 50% 0%, rgba(88, 166, 255, 0.08) 0%, ${i.w4.colors.mainBg} 70%);
  padding: ${i.w4.spacing.md} ${i.w4.spacing.md} ${i.w4.spacing.xl};
  gap: ${i.w4.spacing.lg};
  animation: ${v} 0.3s ease;

  @media (min-width: ${i.w4.breakpoints.md}) {
    padding: ${i.w4.spacing.xl};
    max-width: 640px;
    margin: 0 auto;
    width: 100%;
  }
`,T=n.default.div`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% -20%, rgba(88, 166, 255, 0.12) 0%, transparent 70%);
    pointer-events: none;
  }
`,A=n.default.div`
  font-size: 64px;
  line-height: 1;
  filter: drop-shadow(0 4px 12px rgba(88, 166, 255, 0.4));
`,C=n.default.div`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.accent};
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,M=n.default.div`
  font-size: ${i.w4.typography.fontSizeXl};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
`,P=n.default.div`
  font-size: ${i.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${i.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.xs};

  span {
    color: ${i.w4.colors.accent};
    font-size: ${i.w4.typography.fontSizeXl};
    font-weight: 700;
  }
`,E=n.default.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,B=n.default.div`
  display: flex;
  justify-content: space-between;
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,R=n.default.div`
  width: 100%;
  height: 10px;
  background: rgba(255,255,255,0.07);
  border-radius: 99px;
  overflow: hidden;
`,F=n.default.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: linear-gradient(90deg, ${i.w4.colors.accent}, ${i.w4.colors.accentHover});
  border-radius: 99px;
  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: ${y} 0.8s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.5) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    opacity: ${({shimmer:e})=>e?1:0};
    animation: ${({shimmer:e})=>e?w:"none"} 0.7s ease forwards;
  }
`,O=n.default.h2`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  margin: 0;
`,L=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.sm};
`,I=n.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.md};
  padding: ${i.w4.spacing.md};
  min-height: 64px;
  background: ${({completed:e})=>e?"rgba(52, 211, 153, 0.06)":i.w4.colors.surface};
  border: 1px solid ${({completed:e})=>e?"rgba(52, 211, 153, 0.6)":i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  animation: ${({flashing:e,newlyCompleted:a})=>a?h:e?f:"none"} 0.6s ease forwards;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${({completed:e})=>e?"rgba(52, 211, 153, 0.8)":i.w4.colors.accentHover};
    background: ${({completed:e})=>e?"rgba(52, 211, 153, 0.1)":"rgba(255,255,255,0.03)"};
  }
`,D=n.default.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(52, 211, 153, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: #fff;
  animation: ${$} 0.35s ease;
  box-shadow: 0 0 8px rgba(52, 211, 153, 0.4);
`,N=n.default.div`
  width: 28px;
  height: 28px;
  min-width: 28px;
  border-radius: ${i.w4.borderRadius.sm};
  border: 2px solid ${({checked:e})=>e?"rgba(52, 211, 153, 0.8)":i.w4.colors.border};
  background: ${({checked:e})=>e?"rgba(52, 211, 153, 0.2)":"transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: rgba(52, 211, 153, 1);
  font-size: 16px;
  flex-shrink: 0;
`,G=n.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  flex: 1;
  min-width: 0;
`,V=n.default.span`
  font-size: 24px;
  line-height: 1;
  flex-shrink: 0;
`,H=n.default.span`
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${({completed:e})=>e?i.w4.colors.mainTextMuted:i.w4.colors.mainText};
  font-weight: 500;
  text-decoration: ${({completed:e})=>e?"line-through":"none"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,q=n.default.div`
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 700;
  color: ${({completed:e})=>e?"rgba(52, 211, 153, 0.8)":i.w4.colors.accent};
  background: ${({completed:e})=>e?"rgba(52, 211, 153, 0.1)":"rgba(88,166,255,0.12)"};
  padding: 4px 10px;
  border-radius: 99px;
  white-space: nowrap;
  flex-shrink: 0;
`,Y=n.default.div`
  position: fixed;
  pointer-events: none;
  font-size: 18px;
  font-weight: 700;
  color: ${i.w4.colors.accent};
  text-shadow: 0 0 8px rgba(88, 166, 255, 0.6);
  z-index: 9999;
  animation: ${g} 1.1s ease forwards;
`,_=n.default.div`
  position: fixed;
  inset: 0;
  background: rgba(13, 17, 23, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${({exiting:e})=>e?b:x} 0.4s ease forwards;
`,J=n.default.div`
  background: ${i.w4.colors.surface};
  border: 2px solid ${i.w4.colors.accent};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.xxl} ${i.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.md};
  text-align: center;
  box-shadow: 0 0 40px rgba(88, 166, 255, 0.3);
`,W=n.default.div`
  font-size: 80px;
  line-height: 1;
  filter: drop-shadow(0 0 16px rgba(88,166,255,0.6));
`,U=n.default.div`
  font-size: ${i.w4.typography.fontSizeSm};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${i.w4.colors.accent};
  font-weight: 700;
`,X=n.default.div`
  font-size: ${i.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${i.w4.colors.mainText};
`,K=n.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${i.w4.spacing.sm};
`,Q=n.default.div`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.xs};
  text-align: center;
`,Z=n.default.div`
  background: linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.06) 100%);
  border: 1px solid rgba(251, 146, 60, 0.4);
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.xs};
  text-align: center;
  animation: ${j} 3s ease-in-out infinite;
`,ee=n.default.div`
  font-size: ${i.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${i.w4.colors.accent};
`,ae=n.default.div`
  font-size: ${i.w4.typography.fontSizeHero};
  font-weight: 800;
  color: #fb923c;
  text-shadow: 0 0 12px rgba(251, 146, 60, 0.5);
  line-height: 1;
`,oe=n.default.div`
  font-size: 11px;
  color: ${i.w4.colors.mainTextMuted};
  line-height: 1.3;
`,te=n.default.div`
  font-size: ${i.w4.typography.fontSizeSm};
  color: rgba(251, 146, 60, 0.8);
  font-weight: 600;
  line-height: 1.3;
`,ne=n.default.div`
  font-size: 20px;
`,re=n.default.div`
  font-size: 32px;
`,ie=n.default.div`
  background: linear-gradient(135deg, rgba(88, 166, 255, 0.1) 0%, rgba(88, 166, 255, 0.04) 100%);
  border: 1px solid rgba(88, 166, 255, 0.25);
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.xl} ${i.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  text-align: center;
  animation: ${z} 0.5s ease;
`,se=n.default.div`
  font-size: 52px;
  animation: ${k} 2s ease-in-out infinite;
`,le=n.default.div`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
`,de=n.default.div`
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${i.w4.colors.mainTextMuted};
  max-width: 280px;
  line-height: 1.5;
`,ce=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.sm};

  @media (min-width: ${i.w4.breakpoints.md}) {
    flex-direction: row;
  }
`,pe=n.default.button`
  flex: 1;
  padding: ${i.w4.spacing.md};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 48px;

  &:hover {
    background: rgba(255,255,255,0.08);
    color: ${i.w4.colors.mainText};
    border-color: ${i.w4.colors.mainTextMuted};
  }

  &:focus-visible {
    outline: 2px solid ${i.w4.colors.accent};
    outline-offset: 2px;
  }
`,me=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.xs};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.md};
  animation: ${v} 0.2s ease;
`,ue=n.default.div`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
`,ge=n.default.div`
  display: flex;
  gap: ${i.w4.spacing.sm};
`,fe=n.default.button`
  flex: 1;
  padding: 10px;
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.4);
  border-radius: ${i.w4.borderRadius.sm};
  color: #f87171;
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;

  &:hover {
    background: rgba(239, 68, 68, 0.25);
  }

  &:focus-visible {
    outline: 2px solid #f87171;
    outline-offset: 2px;
  }
`,he=n.default.button`
  flex: 1;
  padding: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;

  &:hover {
    background: rgba(255,255,255,0.08);
    color: ${i.w4.colors.mainText};
  }

  &:focus-visible {
    outline: 2px solid ${i.w4.colors.accent};
    outline-offset: 2px;
  }
`;function xe({lang:e,onBack:a}){const o="pt"===e,[n,r]=(0,t.useState)(()=>{const e=function(){try{const e=localStorage.getItem(l);if(e)return JSON.parse(e)}catch{}return{totalPoints:0,totalMissionsCompleted:0,completedToday:[],streakDays:[],lastResetDate:u()}}(),a=u();return e.lastResetDate!==a?{...e,completedToday:[],lastResetDate:a}:e}),[g,f]=(0,t.useState)(new Set),[h,x]=(0,t.useState)(new Set),[b,y]=(0,t.useState)([]),[w,v]=(0,t.useState)(null),[$,j]=(0,t.useState)(!1),[k,z]=(0,t.useState)(!1),[xe,be]=(0,t.useState)(!1),ye=(0,t.useRef)(0),we=(0,t.useRef)(null),ve=(0,t.useRef)({});(0,t.useEffect)(()=>{!function(e){try{localStorage.setItem(l,JSON.stringify(e))}catch{}}(n)},[n]);const $e=(0,t.useRef)(m(n.totalPoints)),je=(0,t.useCallback)((e,a)=>{r(o=>{const t=o.completedToday.includes(e.id),n=u();if(t){const a=Math.max(0,o.totalPoints-e.points),t=o.completedToday.filter(a=>a!==e.id),r=Math.max(0,o.totalMissionsCompleted-1);let i=o.streakDays;return t.length<3&&(i=o.streakDays.filter(e=>e!==n)),{...o,totalPoints:a,totalMissionsCompleted:r,completedToday:t,streakDays:i}}const r=o.totalPoints+e.points,i=[...o.completedToday,e.id],s=o.totalMissionsCompleted+1;let l=o.streakDays;if(i.length>=3&&!o.streakDays.includes(n)&&(l=[...o.streakDays,n]),f(a=>{const o=new Set(a);return o.add(e.id),o}),setTimeout(()=>{f(a=>{const o=new Set(a);return o.delete(e.id),o})},600),x(a=>{const o=new Set(a);return o.add(e.id),o}),setTimeout(()=>{x(a=>{const o=new Set(a);return o.delete(e.id),o})},700),z(!0),setTimeout(()=>z(!1),750),navigator.vibrate?.(50),a){const o=a.getBoundingClientRect(),t=++ye.current,n={id:t,value:e.points,x:o.right-60,y:o.top+o.height/2};y(e=>[...e,n]),setTimeout(()=>{y(e=>e.filter(e=>e.id!==t))},1200)}const d=m(o.totalPoints),c=m(r);return c>d&&(v(p[c]),j(!1),setTimeout(()=>{j(!0),setTimeout(()=>v(null),450)},2e3)),{...o,totalPoints:r,totalMissionsCompleted:s,completedToday:i,streakDays:l}})},[]);(0,t.useEffect)(()=>{$e.current=m(n.totalPoints)},[n.totalPoints]);const ke=(0,t.useCallback)(()=>{r(e=>({...e,completedToday:[],lastResetDate:u()})),be(!1)},[]),ze=m(n.totalPoints),Se=(Te=n.totalPoints,Math.floor(Te/c)+1);var Te;const Ae=p[ze],Ce=function(e){return e%c/c*100}(n.totalPoints),Me=n.totalPoints%c,Pe=function(e){if(0===e.length)return 0;const a=[...new Set(e)].sort().reverse();let o=0,t=u();for(const e of a){if(e!==t)break;{o++;const e=new Date(t);e.setDate(e.getDate()-1),t=e.toISOString().slice(0,10)}}return o}(n.streakDays),Ee=[...d].sort((e,a)=>(n.completedToday.includes(e.id)?1:0)-(n.completedToday.includes(a.id)?1:0)),Be=0===n.totalPoints&&0===n.completedToday.length;return(0,s.jsxs)(S,{children:[(0,s.jsxs)(T,{children:[(0,s.jsx)(A,{children:Ae.emoji}),(0,s.jsx)(C,{children:o?`Nível ${Se}`:`Level ${Se}`}),(0,s.jsx)(M,{children:o?Ae.pt:Ae.en}),(0,s.jsxs)(P,{children:[(0,s.jsx)("span",{children:n.totalPoints}),o?"pontos":"points"]}),(0,s.jsxs)(E,{children:[(0,s.jsxs)(B,{children:[(0,s.jsx)("span",{children:"XP"}),(0,s.jsxs)("span",{children:[Me," / ",c]})]}),(0,s.jsx)(R,{children:(0,s.jsx)(F,{pct:Ce,shimmer:k})})]})]}),Be&&(0,s.jsxs)(ie,{children:[(0,s.jsx)(se,{children:"🚀"}),(0,s.jsx)(le,{children:o?"A tua aventura começa hoje!":"Your adventure starts today!"}),(0,s.jsx)(de,{children:o?"Completa missões para ganhar pontos e subir de nível. Quanto mais fizeres, mais forte ficas!":"Complete missions to earn points and level up. The more you do, the stronger you get!"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(O,{style:{marginBottom:i.w4.spacing.md},children:o?"🎯 Missões de Hoje":"🎯 Today's Missions"}),(0,s.jsx)(L,{children:Ee.map(e=>{const a=n.completedToday.includes(e.id),t=g.has(e.id),r=h.has(e.id);return(0,s.jsxs)(I,{completed:a,flashing:t,newlyCompleted:r,onClick:a=>{ve.current[e.id]?ve.current[e.id]=!1:je(e,a.currentTarget)},onTouchStart:e=>{we.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:a=>((a,o)=>{if(!we.current)return;const t=Math.abs(a.changedTouches[0].clientX-we.current.x),n=Math.abs(a.changedTouches[0].clientY-we.current.y);we.current=null,t>8||n>8||(ve.current[e.id]=!0,je(e,o))})(a,a.currentTarget),role:"checkbox","aria-checked":a,tabIndex:0,onKeyDown:a=>{" "!==a.key&&"Enter"!==a.key||(a.preventDefault(),je(e,a.currentTarget))},children:[(0,s.jsx)(N,{checked:a,children:a&&"✓"}),(0,s.jsxs)(G,{children:[(0,s.jsx)(V,{children:e.emoji}),(0,s.jsx)(H,{completed:a,children:o?e.name.pt:e.name.en})]}),(0,s.jsxs)(q,{completed:a,children:["+",e.points," pts"]}),a&&(0,s.jsx)(D,{children:"✓"})]},e.id)})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(O,{style:{marginBottom:i.w4.spacing.md},children:o?"📊 As Tuas Estatísticas":"📊 Your Stats"}),(0,s.jsxs)(K,{children:[(0,s.jsxs)(Q,{children:[(0,s.jsx)(ne,{children:"✅"}),(0,s.jsx)(ee,{children:n.totalMissionsCompleted}),(0,s.jsx)(oe,{children:o?"Missões\nconcluídas":"Missions\ncompleted"})]}),(0,s.jsxs)(Q,{children:[(0,s.jsx)(ne,{children:"⭐"}),(0,s.jsx)(ee,{children:n.totalPoints}),(0,s.jsx)(oe,{children:o?"Pontos\nganhos":"Points\nearned"})]}),(0,s.jsxs)(Z,{children:[(0,s.jsx)(re,{children:"🔥"}),(0,s.jsx)(ae,{children:Pe}),(0,s.jsx)(te,{children:o?"Dias\nseguidos":"Day\nstreak"})]})]})]}),(0,s.jsx)(ce,{children:xe?(0,s.jsxs)(me,{children:[(0,s.jsx)(ue,{children:o?"Tens a certeza? As missões de hoje serão limpas, mas os teus pontos ficam.":"Are you sure? This clears today's missions but keeps your points."}),(0,s.jsxs)(ge,{children:[(0,s.jsx)(fe,{onClick:ke,children:o?"Confirmar":"Confirm"}),(0,s.jsx)(he,{onClick:()=>be(!1),children:o?"Cancelar":"Cancel"})]})]}):(0,s.jsxs)(pe,{onClick:()=>be(!0),children:["🔄 ",o?"Novo dia":"Reset day"]})}),b.map(e=>(0,s.jsxs)(Y,{style:{left:e.x,top:e.y},children:["+",e.value]},e.id)),w&&(0,s.jsx)(_,{exiting:$,children:(0,s.jsxs)(J,{children:[(0,s.jsx)(W,{children:w.emoji}),(0,s.jsx)(U,{children:o?"🎉 Subiste de nível!":"🎉 Level Up!"}),(0,s.jsx)(X,{children:o?w.pt:w.en})]})})]})}n.default.button`
  flex: 1;
  padding: ${i.w4.spacing.md};
  background: transparent;
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.sm};

  &:hover {
    background: rgba(255,255,255,0.04);
    color: ${i.w4.colors.mainText};
  }

  &:focus-visible {
    outline: 2px solid ${i.w4.colors.accent};
    outline-offset: 2px;
  }
`},43065(e,a,o){o.d(a,{H:()=>ne});var t=o(27359),n=o(53233),r=o(77207),i=o(60894),s=o(65723);const l="atlantis-pixelboard-gallery",d=["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4ecdc4","#74c0fc","#748ffc","#da77f2","#f783ac","#ffffff","#868e96","#212529"],c=[8,12,16],p={title:{pt:"Tabuleiro de Pixels",en:"Pixel Board"},paint:{pt:"Pintar",en:"Paint"},eraser:{pt:"Apagar",en:"Eraser"},clearAll:{pt:"Limpar",en:"Clear"},save:{pt:"Guardar",en:"Save"},gallery:{pt:"Galeria",en:"Gallery"},back:{pt:"← Voltar",en:"← Back"},confirmClear:{pt:"Tens a certeza que queres apagar tudo?",en:"Are you sure you want to clear everything?"},yes:{pt:"Sim",en:"Yes"},no:{pt:"Não",en:"No"},drawingName:{pt:"Nome do desenho:",en:"Drawing name:"},myDrawing:{pt:"O meu desenho",en:"My drawing"},saved:{pt:"Guardado!",en:"Saved!"},emptyGallery:{pt:"Ainda sem desenhos guardados.",en:"No saved drawings yet."},load:{pt:"Carregar",en:"Load"},delete:{pt:"Apagar",en:"Delete"},close:{pt:"Fechar",en:"Close"},templates:{pt:"Modelos",en:"Templates"},heart:{pt:"Coração",en:"Heart"},star:{pt:"Estrela",en:"Star"},smiley:{pt:"Sorriso",en:"Smiley"},gridSize:{pt:"Tamanho",en:"Size"},selectedColor:{pt:"Cor selecionada",en:"Selected color"},undo:{pt:"Desfazer",en:"Undo"},tapToPaint:{pt:"Toca para pintar!",en:"Tap to paint!"}};function m(e){return Array(e*e).fill("")}function u(e,a,o){const t=m(o),n=Math.floor((o-e.length)/2);return e.forEach((e,r)=>{e.forEach((e,i)=>{const s=r+n,l=i+n;s>=0&&s<o&&l>=0&&l<o&&0!==e&&(t[s*o+l]=a[e]??"")})}),t}function g(e){return u([[0,1,1,0,0,0,1,1,0],[1,1,1,1,0,1,1,1,1],[1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,0,0],[0,0,0,1,1,1,0,0,0],[0,0,0,0,1,0,0,0,0]],{1:"#ff6b6b"},e)}function f(e){return u([[0,0,0,0,1,0,0,0,0],[0,0,0,1,1,1,0,0,0],[1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,0],[0,0,1,0,1,0,1,0,0],[0,1,0,0,0,0,0,1,0],[1,0,0,0,0,0,0,0,1]],{1:"#ffd43b"},e)}function h(e){return u([[0,0,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,0],[1,1,2,1,1,1,1,2,1,1],[1,1,2,1,1,1,1,2,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,3,1,1,1,1,3,1,1],[1,1,1,3,3,3,3,1,1,1],[0,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,0,0]],{1:"#ffd43b",2:"#212529",3:"#212529"},e)}function x(e){localStorage.setItem(l,JSON.stringify(e))}const b=r.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,y=r.keyframes`
  0%   { transform: scale(1); }
  40%  { transform: scale(1.35); }
  100% { transform: scale(1); }
`,w=r.keyframes`
  0%   { opacity: 0; transform: scale(0.7) translateY(4px); }
  60%  { opacity: 1; transform: scale(1.1) translateY(-2px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
`,v=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${i.w4.spacing.md} ${i.w4.spacing.md} ${i.w4.spacing.lg};
  gap: ${i.w4.spacing.md};
  overflow-y: auto;
  min-height: 0;
  background: ${i.w4.colors.mainBg};
  position: relative;
`,$=n.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  animation: ${b} 0.3s ease;
`,j=n.default.h1`
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 800;
  color: ${i.w4.colors.mainText};
  margin: 0;
  letter-spacing: -0.02em;
`,k=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  animation: ${b} 0.3s ease 0.05s both;
  width: 100%;
  max-width: min(calc(100vw - 32px), 480px);
`,z=n.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
  width: 100%;
`,S=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${i.w4.borderRadius.md};
  border: 1px solid ${({danger:e})=>e?"rgba(249,117,131,0.3)":i.w4.colors.border};
  background: ${({danger:e})=>e?"rgba(249,117,131,0.08)":i.w4.colors.surface};
  color: ${({danger:e})=>e?"#f97583":i.w4.colors.mainTextMuted};
  font-size: 18px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.12s;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-1px);
    background: ${({danger:e})=>e?"rgba(249,117,131,0.14)":"rgba(255,255,255,0.06)"};
    border-color: ${({danger:e})=>e?"#f97583":i.w4.colors.mainTextMuted};
  }
  &:active { transform: translateY(0); }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: none;
  }
`,T=n.default.div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  flex-shrink: 0;
`,A=n.default.button`
  padding: 8px 14px;
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  font-size: 13px;
  min-height: 36px;
  font-weight: 700;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?"rgba(88,166,255,0.18)":"transparent"};
  color: ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.mainTextMuted};

  &:hover {
    background: rgba(88,166,255,0.1);
    color: ${i.w4.colors.accent};
  }
`,C=n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: ${i.w4.borderRadius.md};
  min-height: 44px;
  border: 1px solid ${({active:e,danger:a})=>a?"rgba(249,117,131,0.3)":e?i.w4.colors.accent+"50":i.w4.colors.border};
  background: ${({active:e,danger:a})=>a?"rgba(249,117,131,0.08)":e?"rgba(88,166,255,0.12)":i.w4.colors.surface};
  color: ${({active:e,danger:a})=>a?"#f97583":e?i.w4.colors.accent:i.w4.colors.mainText};
  font-size: 13px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.12s;
  white-space: nowrap;

  &:hover {
    transform: translateY(-1px);
    background: ${({danger:e})=>e?"rgba(249,117,131,0.14)":"rgba(88,166,255,0.1)"};
    border-color: ${({danger:e})=>e?"#f97583":i.w4.colors.accent+"60"};
  }

  &:active {
    transform: translateY(0);
  }
`,M=n.default.div`
  position: relative;
  flex-shrink: 0;
  animation: ${b} 0.3s ease 0.1s both;
  touch-action: pan-y;
  user-select: none;
  -webkit-user-select: none;
  border-radius: ${i.w4.borderRadius.lg};
  padding: 6px;
  background: ${i.w4.colors.surface};
  box-shadow:
    0 0 0 1px ${i.w4.colors.border},
    0 0 0 1px rgba(88,166,255,0.08) inset,
    0 4px 24px rgba(0,0,0,0.4),
    0 0 16px rgba(88,166,255,0.04) inset;
`,P=n.default.div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, 1fr);
  gap: 1px;
  background: ${i.w4.colors.border};
  border: 1px solid rgba(88,166,255,0.15);
  border-radius: ${i.w4.borderRadius.sm};
  overflow: hidden;
  width: min(calc(100vw - 56px), 468px);
  aspect-ratio: 1;
`,E=n.default.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
  border-radius: ${i.w4.borderRadius.lg};
`,B=n.default.span`
  font-size: clamp(0.85rem, 3vw, 1.1rem);
  font-weight: 700;
  color: ${i.w4.colors.mainTextMuted};
  opacity: 0.5;
  letter-spacing: 0.02em;
  text-align: center;
  padding: ${i.w4.spacing.sm};
`,R=n.default.div`
  background: ${({color:e})=>e||i.w4.colors.surface};
  cursor: crosshair;
  transition: background 0.08s;
  animation: ${({isNew:e})=>e?y:"none"} 0.18s ease;

  &:hover {
    filter: brightness(1.18);
    z-index: 1;
  }
`,F=n.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  animation: ${b} 0.3s ease 0.15s both;
  max-width: min(calc(100vw - 32px), 480px);
`,O=n.default.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  cursor: pointer;
  border: 2px solid ${({selected:e})=>e?"#ffffff":"transparent"};
  box-shadow: ${({selected:e})=>e?"0 0 0 2px rgba(255,255,255,0.4), 0 0 0 4px rgba(88,166,255,0.5)":"0 1px 3px rgba(0,0,0,0.4)"};
  transform: ${({selected:e})=>e?"scale(1.2)":"scale(1)"};
  transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 0 0 2px rgba(255,255,255,0.3), 0 2px 6px rgba(0,0,0,0.4);
  }
`,L=n.default.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border: 2px solid ${({selected:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  box-shadow: ${({selected:e})=>e?"0 0 0 2px rgba(88,166,255,0.4)":"none"};
  transform: ${({selected:e})=>e?"scale(1.2)":"scale(1)"};
  transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;

  &:hover {
    transform: scale(1.15);
    border-color: ${i.w4.colors.accent};
  }
`,I=n.default.div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(63,185,80,0.2);
  color: #3fb950;
  border: 1px solid rgba(63,185,80,0.4);
  border-radius: 20px;
  padding: 6px 18px;
  font-size: 14px;
  font-weight: 700;
  font-family: ${i.w4.typography.fontFamily};
  animation: ${w} 0.3s ease forwards;
  pointer-events: none;
  z-index: 100;
`,D=n.default.div`
  position: absolute;
  inset: 0;
  background: rgba(13,17,23,0.75);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  padding: ${i.w4.spacing.lg};
  animation: ${b} 0.2s ease;
`,N=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.md};
  padding: ${i.w4.spacing.lg};
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  max-width: 320px;
  width: 100%;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
  animation: ${b} 0.2s ease;
`,G=n.default.p`
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${i.w4.colors.mainText};
  text-align: center;
  margin: 0;
`,V=n.default.div`
  display: flex;
  gap: ${i.w4.spacing.sm};
`,H=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${i.w4.spacing.lg};
  gap: ${i.w4.spacing.md};
  min-height: 0;
  overflow-y: auto;
`,q=n.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: ${i.w4.spacing.md};
  width: 100%;
  max-width: 540px;
`,Y=n.default.div`
  display: flex;
  flex-direction: column;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  overflow: hidden;
  animation: ${b} 0.2s ease;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:hover {
    border-color: ${i.w4.colors.accent}40;
    box-shadow: 0 2px 12px rgba(0,0,0,0.3);
  }
`,_=n.default.div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, 1fr);
  gap: 0;
  aspect-ratio: 1;
  width: 100%;
`,J=n.default.div`
  background: ${({color:e})=>e||"#161b22"};
`,W=n.default.div`
  display: flex;
  flex-direction: column;
  background: rgba(0,0,0,0.25);
  border-top: 1px solid ${i.w4.colors.border};
`,U=n.default.div`
  font-size: 11px;
  font-weight: 600;
  color: ${i.w4.colors.mainTextMuted};
  padding: 4px 6px 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,X=n.default.div`
  display: flex;
  gap: 4px;
  padding: 4px 6px 6px;
`,K=n.default.button`
  flex: 1;
  padding: 8px 10px;
  border-radius: ${i.w4.borderRadius.sm};
  border: 1px solid ${({variant:e})=>"danger"===e?"rgba(249,117,131,0.3)":i.w4.colors.border};
  background: ${({variant:e})=>"danger"===e?"rgba(249,117,131,0.1)":"rgba(88,166,255,0.08)"};
  color: ${({variant:e})=>"danger"===e?"#f97583":i.w4.colors.accent};
  font-size: 12px;
  min-height: 36px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${({variant:e})=>"danger"===e?"rgba(249,117,131,0.2)":"rgba(88,166,255,0.16)"};
  }
`,Q=n.default.h2`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  margin: 0;
`,Z=n.default.p`
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
  text-align: center;
`,ee=n.default.div`
  display: flex;
  gap: ${i.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
  max-width: min(calc(100vw - 32px), 480px);
  width: 100%;
`,ae=n.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px 12px 12px;
  border-radius: ${i.w4.borderRadius.md};
  border: 1px solid ${i.w4.colors.border};
  background: ${i.w4.colors.surface};
  color: ${i.w4.colors.mainText};
  font-size: 12px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.12s;
  min-width: 80px;
  min-height: 44px;

  &:hover {
    transform: translateY(-1px);
    border-color: ${i.w4.colors.accent}60;
    background: rgba(88,166,255,0.06);
  }
  &:active { transform: translateY(0); }
`,oe=n.default.div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, 1fr);
  gap: 0;
  border: 1px solid ${i.w4.colors.border};
  border-radius: 3px;
  overflow: hidden;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
`,te=n.default.div`
  background: ${({color:e})=>e||i.w4.colors.mainBg};
`;function ne({lang:e,onBack:a}){const o=(0,t.useCallback)(a=>p[a]?.[e]??p[a]?.en??a,[e]),[n,r]=(0,t.useState)(12),[u,b]=(0,t.useState)(()=>m(12)),[y,w]=(0,t.useState)([]),[ne,re]=(0,t.useState)(d[0]),[ie,se]=(0,t.useState)("paint"),[le,de]=(0,t.useState)(null),[ce,pe]=(0,t.useState)(!1),[me,ue]=(0,t.useState)(()=>function(){try{const e=localStorage.getItem(l);if(e)return JSON.parse(e)}catch{}return[]}()),[ge,fe]=(0,t.useState)("draw"),[he,xe]=(0,t.useState)(!1),[be,ye]=(0,t.useState)(!1),[we,ve]=(0,t.useState)(!1),[$e,je]=(0,t.useState)(""),[ke,ze]=(0,t.useState)(!1),Se=(0,t.useMemo)(()=>u.every(e=>""===e),[u]),Te=(0,t.useRef)(null),Ae=(0,t.useRef)(null),Ce=(0,t.useRef)(null),Me=(0,t.useCallback)(e=>{de(e),Ce.current&&clearTimeout(Ce.current),Ce.current=setTimeout(()=>de(null),200)},[]),Pe=(0,t.useCallback)(e=>{w(a=>[...a.slice(-19),e])},[]),Ee=(0,t.useCallback)(e=>{b(a=>{const o="eraser"===ie?"":ne;if(a[e]===o)return a;Pe(a);const t=[...a];return t[e]=o,t}),ze(!0),Me(e)},[ie,ne,Me,Pe]),Be=(0,t.useCallback)(()=>{w(e=>{if(0===e.length)return e;const a=e[e.length-1];return b(a),e.slice(0,-1)})},[]),Re=(0,t.useCallback)(e=>{pe(!0),Ee(e)},[Ee]),Fe=(0,t.useCallback)(e=>{ce&&Ee(e)},[ce,Ee]),Oe=(0,t.useCallback)(()=>{pe(!1)},[]);(0,t.useEffect)(()=>{const e=()=>pe(!1);return window.addEventListener("mouseup",e),()=>window.removeEventListener("mouseup",e)},[]);const Le=(0,t.useCallback)((e,a)=>{if(!Ae.current)return null;const o=Ae.current.getBoundingClientRect(),t=e-o.left,r=a-o.top;if(t<0||r<0||t>o.width||r>o.height)return null;const i=Math.floor(t/o.width*n),s=Math.floor(r/o.height*n);return i<0||i>=n||s<0||s>=n?null:s*n+i},[n]),Ie=(0,t.useCallback)(e=>{const a=e.touches[0],o=Le(a.clientX,a.clientY);Te.current={x:a.clientX,y:a.clientY,idx:o??-1}},[Le]),De=(0,t.useCallback)(e=>{if(!Te.current)return;const a=e.changedTouches[0],o=Math.abs(a.clientX-Te.current.x),t=Math.abs(a.clientY-Te.current.y);if((o>8||t>8)&&(o>2*t||t<=8)){const e=Le(a.clientX,a.clientY);null!==e&&Ee(e)}},[Le,Ee]),Ne=(0,t.useCallback)(e=>{if(!Te.current)return;const a=e.changedTouches[0],o=Math.abs(a.clientX-Te.current.x),t=Math.abs(a.clientY-Te.current.y),n=Te.current.idx;Te.current=null,o<=8&&t<=8&&n>=0&&Ee(n)},[Ee]),Ge=(0,t.useCallback)(e=>{r(e),b(m(e)),w([]),ze(!1)},[]),Ve=(0,t.useCallback)(e=>{se(e)},[]),He=(0,t.useCallback)(()=>{Pe(u),b(m(n)),xe(!1),ze(!1)},[n,u,Pe]),qe=(0,t.useCallback)(()=>{je(o("myDrawing")),ye(!0)},[o]),Ye=(0,t.useCallback)(()=>{const e=$e.trim()||o("myDrawing"),a=[{id:Date.now().toString(),name:e,grid:[...u],size:n,savedAt:Date.now()},...me].slice(0,30);ue(a),x(a),ye(!1),ve(!0),setTimeout(()=>ve(!1),1800)},[$e,u,n,me,o]),_e=(0,t.useCallback)(e=>{r(e.size),b(e.grid),w([]),ze(!0),fe("draw")},[]),Je=(0,t.useCallback)(e=>{const a=me.filter(a=>a.id!==e);ue(a),x(a)},[me]),We=(0,t.useCallback)(e=>{Pe(u),b(e(n)),ze(!0)},[n,u,Pe]),Ue=(0,t.useMemo)(()=>({heart:g(8),star:f(8),smiley:h(8)}),[]);return"gallery"===ge?(0,s.jsxs)(v,{children:[(0,s.jsxs)($,{children:[(0,s.jsxs)(C,{onClick:()=>fe("draw"),children:["← ",o("close")]}),(0,s.jsxs)(Q,{children:["🖼️ ",o("gallery")]})]}),(0,s.jsx)(H,{children:0===me.length?(0,s.jsx)(Z,{children:o("emptyGallery")}):(0,s.jsx)(q,{children:me.map(e=>(0,s.jsxs)(Y,{children:[(0,s.jsx)(_,{cols:e.size,children:e.grid.map((e,a)=>(0,s.jsx)(J,{color:e},a))}),(0,s.jsxs)(W,{children:[(0,s.jsx)(U,{children:e.name}),(0,s.jsxs)(X,{children:[(0,s.jsx)(K,{variant:"primary",onClick:()=>_e(e),children:o("load")}),(0,s.jsx)(K,{variant:"danger",onClick:()=>Je(e.id),children:o("delete")})]})]})]},e.id))})})]}):(0,s.jsxs)(v,{children:[he&&(0,s.jsx)(D,{onClick:()=>xe(!1),children:(0,s.jsxs)(N,{onClick:e=>e.stopPropagation(),children:[(0,s.jsx)(G,{children:o("confirmClear")}),(0,s.jsxs)(V,{children:[(0,s.jsx)(C,{onClick:()=>xe(!1),children:o("no")}),(0,s.jsx)(C,{danger:!0,onClick:He,children:o("yes")})]})]})}),be&&(0,s.jsx)(D,{onClick:()=>ye(!1),children:(0,s.jsxs)(N,{onClick:e=>e.stopPropagation(),children:[(0,s.jsx)(G,{children:o("drawingName")}),(0,s.jsx)("input",{value:$e,onChange:e=>je(e.target.value),onKeyDown:e=>{"Enter"===e.key&&Ye(),"Escape"===e.key&&ye(!1)},autoFocus:!0,style:{background:i.w4.colors.mainBg,border:`1px solid ${i.w4.colors.border}`,borderRadius:i.w4.borderRadius.md,color:i.w4.colors.mainText,padding:"8px 12px",fontSize:i.w4.typography.fontSizeBase,fontFamily:i.w4.typography.fontFamily,width:"100%",outline:"none"}}),(0,s.jsxs)(V,{children:[(0,s.jsx)(C,{onClick:()=>ye(!1),children:o("no")}),(0,s.jsxs)(C,{onClick:Ye,children:[o("save")," 💾"]})]})]})}),(0,s.jsx)($,{children:(0,s.jsxs)(j,{children:["🎨 ",o("title")]})}),(0,s.jsxs)(k,{children:[(0,s.jsxs)(z,{children:[(0,s.jsx)(S,{onClick:Be,disabled:0===y.length,"aria-label":o("undo"),title:o("undo"),children:"↩️"}),(0,s.jsxs)(C,{active:"paint"===ie,onClick:()=>Ve("paint"),children:["🎨 ",o("paint")]}),(0,s.jsxs)(C,{active:"eraser"===ie,onClick:()=>Ve("eraser"),children:["🧹 ",o("eraser")]}),(0,s.jsx)(T,{children:c.map(e=>(0,s.jsxs)(A,{active:n===e,onClick:()=>Ge(e),children:[e,"×",e]},e))})]}),(0,s.jsxs)(z,{children:[(0,s.jsx)(S,{danger:!0,onClick:()=>xe(!0),title:o("clearAll"),"aria-label":o("clearAll"),children:"🗑️"}),(0,s.jsx)(S,{onClick:qe,title:o("save"),"aria-label":o("save"),children:"💾"}),(0,s.jsxs)(C,{onClick:()=>fe("gallery"),children:["🖼️ ",o("gallery")," ",me.length>0&&`(${me.length})`]})]})]}),(0,s.jsxs)(ee,{children:[(0,s.jsxs)("span",{style:{fontSize:12,color:i.w4.colors.mainTextMuted,alignSelf:"center",flexShrink:0},children:[o("templates"),":"]}),(0,s.jsxs)(ae,{onClick:()=>We(g),children:[(0,s.jsx)(oe,{cols:8,children:Ue.heart.map((e,a)=>(0,s.jsx)(te,{color:e},a))}),o("heart")]}),(0,s.jsxs)(ae,{onClick:()=>We(f),children:[(0,s.jsx)(oe,{cols:8,children:Ue.star.map((e,a)=>(0,s.jsx)(te,{color:e},a))}),o("star")]}),(0,s.jsxs)(ae,{onClick:()=>We(h),children:[(0,s.jsx)(oe,{cols:8,children:Ue.smiley.map((e,a)=>(0,s.jsx)(te,{color:e},a))}),o("smiley")]})]}),(0,s.jsxs)(M,{ref:Ae,onTouchStart:Ie,onTouchMove:De,onTouchEnd:Ne,children:[(0,s.jsx)(P,{cols:n,role:"grid","aria-label":o("title"),children:u.map((e,a)=>(0,s.jsx)(R,{color:e,isNew:a===le,role:"gridcell","aria-label":`cell ${a}`,onMouseDown:()=>Re(a),onMouseEnter:()=>Fe(a),onMouseUp:Oe},a))}),Se&&!ke&&(0,s.jsx)(E,{children:(0,s.jsx)(B,{children:o("tapToPaint")})})]}),(0,s.jsxs)(F,{role:"group","aria-label":o("selectedColor"),children:[d.map(e=>(0,s.jsx)(O,{color:e,selected:"paint"===ie&&ne===e,onClick:()=>{re(e),se("paint")},role:"radio","aria-checked":"paint"===ie&&ne===e,"aria-label":e},e)),(0,s.jsx)(L,{selected:"eraser"===ie,onClick:()=>se("eraser"),role:"radio","aria-checked":"eraser"===ie,"aria-label":o("eraser"),children:"🧹"})]}),we&&(0,s.jsxs)(I,{children:["✅ ",o("saved")]})]})}n.default.div`
  margin-top: auto;
  padding-top: ${i.w4.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
`,n.default.button`
  padding: 12px 24px;
  border-radius: ${i.w4.borderRadius.md};
  border: 1px solid ${i.w4.colors.border};
  background: transparent;
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
  min-height: 44px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;

  &:hover {
    background: rgba(255,255,255,0.04);
    border-color: ${i.w4.colors.mainTextMuted};
    color: ${i.w4.colors.mainText};
  }
`},82742(e,a,o){o.d(a,{m:()=>te});var t=o(27359),n=o(53233),r=o(77207),i=o(60894),s=o(65723);const l={title:{pt:"Caçador de Sons",en:"Sound Hunter"},subtitle:{pt:"Encontra os sons ao teu redor!",en:"Find the sounds around you!"},progress:{pt:"Missões completas",en:"Missions complete"},record:{pt:"Gravar",en:"Record"},stop:{pt:"Parar",en:"Stop"},play:{pt:"Ouvir",en:"Play"},complete:{pt:"Concluído!",en:"Done!"},markDone:{pt:"Marcar como feito",en:"Mark as done"},back:{pt:"Voltar",en:"Back"},reset:{pt:"Recomeçar",en:"Reset"},permDenied:{pt:"Microfone bloqueado. Verifica as permissões do navegador.",en:"Microphone blocked. Check your browser permissions."},permError:{pt:"Não foi possível aceder ao microfone.",en:"Could not access the microphone."},celebrate:{pt:"🎉 Parabéns, Caçador de Sons!",en:"🎉 Congrats, Sound Hunter!"},celebrateSub:{pt:"Encontraste todos os sons! Que aventura incrível!",en:"You found every sound! What an amazing adventure!"},celebrateReset:{pt:"Jogar outra vez",en:"Play again"},recording:{pt:"A gravar…",en:"Recording…"},tapRecord:{pt:"Toca em Gravar",en:"Tap Record"}};function d(e,a){return l[e]["pt"===a?"pt":"en"]}const c=[{id:"dog",emoji:"🐕",en:"Dog barking",pt:"Cão a ladrar"},{id:"water",emoji:"🚿",en:"Water running",pt:"Água a correr"},{id:"clap",emoji:"👏",en:"Clapping hands",pt:"Palmas"},{id:"door",emoji:"🚪",en:"Door closing",pt:"Porta a fechar"},{id:"cat",emoji:"🐱",en:"Cat meowing",pt:"Gato a miar"},{id:"bell",emoji:"🔔",en:"Bell ringing",pt:"Campainha a tocar"},{id:"alarm",emoji:"⏰",en:"Alarm clock",pt:"Despertador"},{id:"sing",emoji:"🎵",en:"Singing a song",pt:"Cantar uma música"},{id:"wind",emoji:"💨",en:"Wind blowing",pt:"Vento a soprar"},{id:"bird",emoji:"🦜",en:"Bird singing",pt:"Pássaro a cantar"},{id:"keys",emoji:"🗝️",en:"Jingling keys",pt:"Chaves a tilintar"},{id:"laugh",emoji:"😂",en:"Laughter",pt:"Gargalhada"}],p="atlantis-soundhunter-progress";function m(){return Object.fromEntries(c.map(e=>[e.id,{recording:!1,audioUrl:null,completed:!1,timerSecs:0}]))}const u=r.keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,g=r.keyframes`
  0%   { transform: scale(0.8); opacity: 0; }
  60%  { transform: scale(1.12); }
  100% { transform: scale(1); opacity: 1; }
`,f=r.keyframes`
  0%, 100% { height: 6px; }
  50%       { height: 22px; }
`,h=r.keyframes`
  0%   { box-shadow: 0 0 0px rgba(46, 160, 67, 0); border-color: #2ea043; }
  40%  { box-shadow: 0 0 20px rgba(255, 215, 0, 0.35), 0 0 40px rgba(46, 160, 67, 0.25); border-color: #ffd700; }
  100% { box-shadow: 0 0 8px rgba(46, 160, 67, 0.2); border-color: #2ea043; }
`,x=r.keyframes`
  0%, 100% { filter: drop-shadow(0 0 0px rgba(255, 215, 0, 0)); }
  50%       { filter: drop-shadow(0 0 24px rgba(255, 215, 0, 0.7)) drop-shadow(0 0 48px rgba(255, 200, 0, 0.4)); }
`,b=r.keyframes`
  0%   { transform: scale(1); background: rgba(88, 166, 255, 0.15); }
  50%  { transform: scale(1.15); background: rgba(88, 166, 255, 0.4); }
  100% { transform: scale(1); background: rgba(88, 166, 255, 0.15); }
`,y=r.keyframes`
  0%   { transform: translateY(-40px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
`,w=r.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,v=r.keyframes`
  0%   { transform: rotate(0deg) scale(0); }
  60%  { transform: rotate(200deg) scale(1.3); }
  100% { transform: rotate(360deg) scale(1); }
`,$=n.default.div`
  min-height: 100%;
  background:
    radial-gradient(ellipse at 20% 15%, rgba(20, 80, 100, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 80%, rgba(99, 102, 241, 0.06) 0%, transparent 55%),
    radial-gradient(ellipse at 50% 50%, rgba(14, 26, 46, 0.7) 0%, ${i.w4.colors.mainBg} 80%);
  padding: ${i.w4.spacing.lg} ${i.w4.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${u} 0.3s ease;
`,j=n.default.header`
  text-align: center;
  margin-bottom: ${i.w4.spacing.xl};
`,k=n.default.h1`
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 800;
  color: ${i.w4.colors.mainText};
  letter-spacing: -0.5px;
  margin-bottom: ${i.w4.spacing.xs};
`,z=n.default.p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainTextMuted};
`,S=n.default.div`
  width: 100%;
  max-width: 720px;
  margin-bottom: ${i.w4.spacing.xl};
`,T=n.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${i.w4.spacing.sm};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,A=n.default.span`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${i.w4.colors.accent};
`,C=n.default.div`
  height: 12px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: 999px;
  overflow: visible;
  position: relative;
`,M=n.default.div`
  position: absolute;
  top: 50%;
  left: ${({position:e})=>e}%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({reached:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  border: 2px solid ${({reached:e})=>e?i.w4.colors.accentHover:i.w4.colors.surface};
  z-index: 1;
  transition: background 0.4s ease, border-color 0.4s ease;
  animation: ${({flashing:e})=>e?b:"none"} 0.5s ease 3;
`,P=n.default.div`
  height: 100%;
  border-radius: 999px;
  overflow: hidden;
  position: relative;
`,E=n.default.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  border-radius: 999px;
  background: linear-gradient(90deg, #58a6ff, #79c0ff, #a5d6ff);
  background-size: 200% auto;
  animation: ${w} 2s linear infinite;
  transition: width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
`,B=n.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${i.w4.spacing.md};
  width: 100%;
  max-width: 900px;
  @media (max-width: ${i.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,R=n.default.div`
  background: ${({completed:e})=>e?"#0e2a1a":i.w4.colors.surface};
  border: 2px solid ${({completed:e,recording:a})=>e?"#2ea043":a?"#f85149":i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  transition: border-color 0.2s ease, background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
  animation: ${({justCompleted:e,completed:a})=>e?`${g} 0.35s ease, ${h} 1.4s ease 0.1s`:a?"none":`${u} 0.35s ease`};
  cursor: default;
  position: relative;

  &:hover {
    transform: ${({completed:e})=>e?"none":"translateY(-2px)"};
    box-shadow: ${({completed:e,recording:a})=>e?"0 4px 16px rgba(46, 160, 67, 0.15)":a?"0 8px 24px rgba(248, 81, 73, 0.25)":"0 8px 24px rgba(88, 166, 255, 0.15)"};
  }

  &:hover .record-btn {
    background: ${i.w4.colors.accentHover};
    transform: translateY(-1px);
  }

  &:active .record-btn {
    transform: scale(0.97) translateY(0);
  }
`,F=n.default.div`
  font-size: 52px;
  line-height: 1;
  user-select: none;
`,O=n.default.div`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  text-align: center;
`,L=n.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,I=n.default.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 24px;
  flex-shrink: 0;
`,D=n.default.span`
  display: inline-block;
  width: 4px;
  height: 6px;
  border-radius: 2px;
  background: #f85149;
  animation: ${f} 0.7s ease-in-out infinite;
  animation-delay: ${({delay:e})=>e}s;
`;function N(){return(0,s.jsx)(I,{children:[0,.1,.2,.15,.05,.25,.1].map((e,a)=>(0,s.jsx)(D,{delay:e},a))})}const G=n.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: #f85149;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
`,V=n.default.div`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  min-height: 18px;
  text-align: center;
`,H=n.default.button`
  display: inline-flex;
  align-items: center;
  gap: ${i.w4.spacing.xs};
  padding: 8px 16px;
  border-radius: ${i.w4.borderRadius.md};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background 0.15s ease, transform 0.1s ease, opacity 0.15s ease;
  min-height: 44px;

  ${({variant:e="primary"})=>"primary"===e?`background: ${i.w4.colors.accent}; color: #0d1117;`:"danger"===e?"background: #f85149; color: #fff;":"success"===e?"background: #2ea043; color: #fff;":`background: ${i.w4.colors.surface}; color: ${i.w4.colors.mainText}; border-color: ${i.w4.colors.border};`}

  &:hover:not(:disabled) {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,q=n.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.xs};
  color: #2ea043;
  font-weight: 700;
  font-size: ${i.w4.typography.fontSizeSm};
`,Y=n.default.span`
  display: inline-block;
  animation: ${v} 0.6s ease forwards;
`,_=n.default.div`
  background: #2d1a1a;
  border: 1px solid #f85149;
  border-radius: ${i.w4.borderRadius.md};
  color: #ff7b72;
  font-size: ${i.w4.typography.fontSizeSm};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  text-align: center;
  width: 100%;
`,J=n.default.div`
  display: flex;
  gap: ${i.w4.spacing.md};
  margin-top: ${i.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,W=["#58a6ff","#f78166","#3fb950","#d2a8ff","#ffa657","#79c0ff"],U=n.default.div`
  position: fixed;
  top: -40px;
  left: ${({left:e})=>e}%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>.4*e}px;
  background: ${({color:e})=>e};
  border-radius: 3px;
  animation: ${y} ${({delay:e})=>2+e}s ease-in ${({delay:e})=>(.15*e).toFixed(2)}s forwards;
  pointer-events: none;
  z-index: 999;
`,X=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  gap: ${i.w4.spacing.lg};
  text-align: center;
  animation: ${u} 0.4s ease;
`,K=n.default.h2`
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 900;
  color: ${i.w4.colors.mainText};
`,Q=n.default.p`
  font-size: ${i.w4.typography.fontSizeLg};
  color: ${i.w4.colors.mainTextMuted};
  max-width: 480px;
`,Z=n.default.div`
  font-size: clamp(3.5rem, 10vw, 6rem);
  line-height: 1;
  animation: ${x} 2s ease-in-out infinite;
  user-select: none;
`;function ee(){const e=Array.from({length:50},(e,a)=>({key:a,left:100*Math.random(),delay:20*Math.random(),color:W[Math.floor(Math.random()*W.length)],size:8+Math.floor(10*Math.random())}));return(0,s.jsx)(s.Fragment,{children:e.map(e=>(0,s.jsx)(U,{left:e.left,delay:e.delay,color:e.color,size:e.size},e.key))})}function ae({mission:e,state:a,lang:o,justCompleted:t,onRecord:n,onStop:r,onPlay:i,onComplete:l,permError:c}){const p="pt"===o?e.pt:e.en;return(0,s.jsxs)(R,{completed:a.completed,recording:a.recording,justCompleted:t,children:[(0,s.jsx)(F,{children:e.emoji}),(0,s.jsx)(O,{children:p}),a.completed?(0,s.jsxs)(q,{children:[(0,s.jsx)(Y,{children:"⭐"})," ",d("complete",o)]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(L,{children:[a.recording?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(N,{}),(0,s.jsxs)(G,{children:[10-a.timerSecs,"s"]}),(0,s.jsxs)(H,{variant:"danger",onClick:r,children:["⏹ ",d("stop",o)]})]}):(0,s.jsxs)(H,{variant:"primary",className:"record-btn",onClick:n,children:["🎙 ",d("record",o)]}),a.audioUrl&&!a.recording&&(0,s.jsxs)(H,{variant:"ghost",onClick:i,children:["▶ ",d("play",o)]})]}),(0,s.jsx)(V,{children:a.recording?d("recording",o):a.audioUrl?"":d("tapRecord",o)}),c&&(0,s.jsx)(_,{children:c}),a.audioUrl&&!a.recording&&(0,s.jsxs)(H,{variant:"success",onClick:l,children:["✅ ",d("markDone",o)]})]})]})}const oe=[25,50,75];function te({lang:e,onBack:a}){const[o,n]=(0,t.useState)(()=>{const e=m(),a=function(){try{const e=localStorage.getItem(p);if(e)return new Set(JSON.parse(e))}catch{}return new Set}();for(const o of a)e[o]&&(e[o]={...e[o],completed:!0});return e}),[r,i]=(0,t.useState)({}),[l,u]=(0,t.useState)(new Set),[g,f]=(0,t.useState)(null),h=(0,t.useRef)(0),x=(0,t.useRef)(null),b=(0,t.useRef)([]),y=(0,t.useRef)(null),w=(0,t.useRef)(null),v=Object.values(o).filter(e=>e.completed).length,R=v===c.length,F=Math.round(v/c.length*100);(0,t.useEffect)(()=>{const e=h.current;for(const a of oe)if(e<a&&F>=a){f(a),setTimeout(()=>f(null),1800);break}h.current=F},[F]),(0,t.useEffect)(()=>{!function(e){try{localStorage.setItem(p,JSON.stringify([...e]))}catch{}}(new Set(Object.entries(o).filter(([,e])=>e.completed).map(([e])=>e)))},[o]);const O=(0,t.useCallback)((e,a)=>{n(o=>({...o,[e]:{...o[e],...a}}))},[]),I=(0,t.useCallback)(()=>{null!==y.current&&(clearInterval(y.current),y.current=null)},[]),D=(0,t.useCallback)(e=>{I(),x.current&&"inactive"!==x.current.state&&x.current.stop(),O(e,{recording:!1,timerSecs:0}),w.current=null},[I,O]),N=(0,t.useCallback)(async a=>{let o;w.current&&w.current!==a&&D(w.current),i(e=>({...e,[a]:""}));try{o=await navigator.mediaDevices.getUserMedia({audio:!0})}catch(o){const t=o instanceof DOMException&&"NotAllowedError"===o.name?d("permDenied",e):d("permError",e);return void i(e=>({...e,[a]:t}))}b.current=[];const t=new MediaRecorder(o);x.current=t,w.current=a,t.ondataavailable=e=>{e.data.size>0&&b.current.push(e.data)},t.onstop=()=>{const e=new Blob(b.current,{type:"audio/webm"}),t=URL.createObjectURL(e);O(a,{audioUrl:t}),o.getTracks().forEach(e=>e.stop())},t.start(),O(a,{recording:!0,timerSecs:0});let n=0;y.current=setInterval(()=>{n+=1,O(a,{timerSecs:n}),n>=10&&D(a)},1e3)},[e,D,O]),G=(0,t.useCallback)(e=>{D(e)},[D]),V=(0,t.useCallback)(e=>{const a=o[e]?.audioUrl;a&&new Audio(a).play().catch(()=>{})},[o]),q=(0,t.useCallback)(e=>{O(e,{completed:!0}),u(a=>new Set([...a,e])),setTimeout(()=>{u(a=>{const o=new Set(a);return o.delete(e),o})},1600)},[O]),Y=(0,t.useCallback)(()=>{Object.values(o).forEach(e=>{e.audioUrl&&URL.revokeObjectURL(e.audioUrl)}),I(),x.current&&"inactive"!==x.current.state&&x.current.stop(),w.current=null,n(m()),i({}),u(new Set),f(null),h.current=0,localStorage.removeItem(p)},[o,I]);return(0,t.useEffect)(()=>()=>{I(),x.current&&"inactive"!==x.current.state&&x.current.stop(),Object.values(o).forEach(e=>{e.audioUrl&&URL.revokeObjectURL(e.audioUrl)})},[]),R?(0,s.jsxs)($,{children:[(0,s.jsx)(ee,{}),(0,s.jsxs)(X,{children:[(0,s.jsx)(Z,{children:"🏆"}),(0,s.jsx)(K,{children:d("celebrate",e)}),(0,s.jsx)(Q,{children:d("celebrateSub",e)}),(0,s.jsx)(L,{children:(0,s.jsxs)(H,{variant:"primary",onClick:Y,children:["🔄 ",d("celebrateReset",e)]})})]})]}):(0,s.jsxs)($,{children:[(0,s.jsxs)(j,{children:[(0,s.jsxs)(k,{children:["🎙 ",d("title",e)]}),(0,s.jsx)(z,{children:d("subtitle",e)})]}),(0,s.jsxs)(S,{children:[(0,s.jsxs)(T,{children:[(0,s.jsx)("span",{children:d("progress",e)}),(0,s.jsxs)(A,{children:[v," / ",c.length]})]}),(0,s.jsxs)(C,{children:[(0,s.jsx)(P,{children:(0,s.jsx)(E,{pct:F})}),oe.map(e=>(0,s.jsx)(M,{position:e,reached:F>=e,flashing:g===e},e))]})]}),(0,s.jsx)(B,{children:c.map(a=>(0,s.jsx)(ae,{mission:a,state:o[a.id],lang:e,justCompleted:l.has(a.id),onRecord:()=>N(a.id),onStop:()=>G(a.id),onPlay:()=>V(a.id),onComplete:()=>q(a.id),permError:r[a.id]??null},a.id))}),(0,s.jsx)(J,{children:(0,s.jsxs)(H,{variant:"ghost",onClick:Y,children:["🔄 ",d("reset",e)]})})]})}},37566(e,a,o){o.d(a,{O:()=>ue});var t=o(27359),n=o(53233),r=o(77207),i=o(60894),s=o(65723);const l={title:{pt:"Encontra o Par!",en:"Spot It!"},subtitle:{pt:"Encontra o símbolo igual nas duas cartas",en:"Find the matching symbol on both cards"},easy:{pt:"Fácil",en:"Easy"},medium:{pt:"Médio",en:"Medium"},hard:{pt:"Difícil",en:"Hard"},easyDesc:{pt:"4 símbolos por carta",en:"4 symbols per card"},mediumDesc:{pt:"6 símbolos por carta",en:"6 symbols per card"},hardDesc:{pt:"8 símbolos por carta",en:"8 symbols per card"},score:{pt:"Pontos",en:"Score"},round:{pt:"Ronda",en:"Round"},great:{pt:"Boa!",en:"Great!"},amazing:{pt:"Incrível!",en:"Amazing!"},perfect:{pt:"Perfeito!",en:"Perfect!"},super:{pt:"Super!",en:"Super!"},wow:{pt:"Uau!",en:"Wow!"},fast:{pt:"Rápido!",en:"Fast!"},oops:{pt:"Ups!",en:"Oops!"},gameOver:{pt:"Fim de Jogo!",en:"Game Over!"},finalScore:{pt:"Pontuação final",en:"Final score"},rounds:{pt:"rondas",en:"rounds"},playAgain:{pt:"Jogar Outra Vez",en:"Play Again"},newRecord:{pt:"Novo recorde!",en:"New record!"},bestScore:{pt:"Melhor",en:"Best"},tapMatch:{pt:"Toca no símbolo igual!",en:"Tap the matching symbol!"},pickTheme:{pt:"Escolhe um tema!",en:"Pick a theme!"},animals:{pt:"Animais",en:"Animals"},food:{pt:"Comida",en:"Food"},space:{pt:"Espaço",en:"Space"},mix:{pt:"Mistura",en:"Mix"},animalsDesc:{pt:"Cães, gatos, leões e mais!",en:"Dogs, cats, lions and more!"},foodDesc:{pt:"Pizza, gelado, bolo e mais!",en:"Pizza, ice cream, cake and more!"},spaceDesc:{pt:"Planetas, foguetões e estrelas!",en:"Planets, rockets and stars!"},mixDesc:{pt:"Um pouco de tudo!",en:"A bit of everything!"}};function d(e,a){return l[e]["pt"===a?"pt":"en"]}const c=[{id:"animals",emoji:"🦁",color:"#f59e0b",preview:["🐶","🐱","🦁","🐼","🦋"],symbols:["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🐔","🦄","🐝","🐛","🦋","🐌","🐞","🐢","🐙","🦀","🐠","🐬","🦈","🐳","🐘","🦒","🦘","🐿️","🦜","🦩","🐧","🦔","🐫","🦙","🐊","🦕","🐋","🦑","🐄","🐏","🦌","🐈","🐕","🦉","🐓","🦢","🐇","🦎","🐅","🐆","🦧","🦦","🐑"]},{id:"food",emoji:"🍕",color:"#ef4444",preview:["🍕","🍦","🧁","🍓","🍩"],symbols:["🍎","🍌","🍓","🍉","🍕","🧁","🍩","🍪","🌮","🍦","🎂","🍫","🍬","🍭","🍿","🥐","🥨","🥯","🥞","🧇","🍔","🌭","🍟","🥪","🌯","🥗","🍝","🍜","🍣","🍱","🥟","🍡","🍧","🍨","🥧","🍰","🧀","🥚","🥑","🫐","🍇","🍊","🍋","🍑","🍒","🥝","🍍","🥥","🥕","🌽","🥒","🍆","🫑","🧅","🥜","🌰","☕","🧃"]},{id:"space",emoji:"🚀",color:"#8b5cf6",preview:["🚀","🌍","⭐","🛸","🌙"],symbols:["🚀","🌍","⭐","🛸","🌙","☀️","🪐","🌟","💫","✨","🌠","🔭","👽","🤖","👾","🛰️","🌌","💎","🔮","⚡","🌈","☄️","🧲","🔬","🧪","⏰","🗝️","🧭","🎯","🔔","🏆","🎪","🎠","🎡","🎢","🎮","🕹️","🎲","♟️","🧩","🎨","🖌️","🎸","🥁","🎺","🎹","🎤","🎧","📡","💡","🔋","🧬","🌋","🗻","❄️","🔥","💧","🌪️"]},{id:"mix",emoji:"🎪",color:"#3fb950",preview:["🐶","🍕","🚀","⭐","🎸"],symbols:["🐶","🐱","🦁","🐼","🦋","🐢","🐙","🐬","🍕","🍦","🧁","🍓","🍩","🍉","🎂","🍌","🚀","🌍","⭐","🛸","🌙","☀️","🌈","💎","🎈","🎸","⚽","🎯","🔔","🎁","🎮","🎲","❤️","🔥","💧","🌸","🌻","🧲","⚡","🔮","🎨","🎤","🥁","🧩","🏆","🎪","🎡","🎢","🦄","🐘","🐳","🦊","🐸","🐵","🐝","🐞","🍎","🌮"]}];function p(e){const a=[...e];for(let e=a.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1));[a[e],a[o]]=[a[o],a[e]]}return a}const m={easy:{order:3,totalRounds:10,timePerRound:15},medium:{order:5,totalRounds:12,timePerRound:12},hard:{order:7,totalRounds:15,timePerRound:10}},u=r.keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`,g=r.keyframes`
  0%   { transform: scale(0); opacity: 0; }
  60%  { transform: scale(1.15); }
  100% { transform: scale(1); opacity: 1; }
`,f=r.keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
`,h=r.keyframes`
  0%, 100% { transform: rotate(0deg); }
  25%      { transform: rotate(-8deg); }
  75%      { transform: rotate(8deg); }
`,x=r.keyframes`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.06); }
`,b=r.keyframes`
  0%   { opacity: 1; transform: scale(0) rotate(0deg); }
  50%  { opacity: 1; transform: scale(1.2) rotate(180deg); }
  100% { opacity: 0; transform: scale(0) rotate(360deg); }
`,y=r.keyframes`
  0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(80px) rotate(720deg); opacity: 0; }
`,w=r.keyframes`
  0%   { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-60px) scale(1.5); }
`,v=r.keyframes`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.08); }
`,$=r.keyframes`
  0%, 100% { transform: translateX(0); }
  20%      { transform: translateX(-8px); }
  40%      { transform: translateX(8px); }
  60%      { transform: translateX(-6px); }
  80%      { transform: translateX(6px); }
`,j=r.keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.15), 0 4px 20px rgba(0,0,0,0.3); }
  50%      { box-shadow: 0 0 28px rgba(139, 92, 246, 0.25), 0 4px 24px rgba(0,0,0,0.4); }
`,k=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 0;
  overflow-y: auto;
  background:
    radial-gradient(ellipse 60% 50% at 30% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 70% 80%, rgba(249, 117, 131, 0.06) 0%, transparent 70%),
    #080b12;
`,z=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: ${i.w4.spacing.xl};
  animation: ${u} 0.4s ease;
`,S=n.default.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: ${i.w4.colors.mainText};
  text-align: center;
  margin: 0;
  letter-spacing: -0.02em;
`,T=n.default.p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  margin: 0;
  max-width: 340px;
  line-height: 1.5;
`,A=n.default.div`
  display: flex;
  gap: ${i.w4.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;
`,C=n.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 28px 32px;
  background: linear-gradient(168deg, ${({accent:e})=>e}15 0%, ${i.w4.colors.surface} 50%);
  border: 2px solid ${({accent:e})=>e}40;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: ${i.w4.typography.fontFamily};
  min-width: 150px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: ${({accent:e})=>e};
    border-radius: 20px 20px 0 0;
    opacity: 0.6;
  }

  &:hover {
    transform: translateY(-6px) scale(1.03);
    border-color: ${({accent:e})=>e}80;
    box-shadow: 0 8px 30px ${({accent:e})=>e}25;
  }

  &:active { transform: translateY(-2px) scale(0.98); }
`,M=n.default.span`
  font-size: 40px;
  animation: ${f} 2s ease-in-out infinite;
`,P=n.default.span`
  font-size: 18px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
`,E=n.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,B=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px ${i.w4.spacing.md} ${i.w4.spacing.lg};
  gap: 16px;
  min-height: 0;
  width: 100%;
`,R=n.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.lg};
  width: 100%;
  max-width: 600px;
  flex-wrap: wrap;
`,F=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${({color:e})=>e??i.w4.colors.border};
  border-radius: 24px;
  font-size: 15px;
  font-weight: 700;
  color: ${({color:e})=>e??i.w4.colors.mainText};
  animation: ${({urgent:e})=>e?v:"none"} 0.5s ease-in-out infinite;
`,O=n.default.p`
  font-size: 15px;
  font-weight: 600;
  color: ${({wrong:e})=>e?"#f97583":i.w4.colors.accent};
  margin: 0;
  text-align: center;
  min-height: 22px;
  animation: ${({wrong:e})=>e?$:"none"} 0.4s ease;
`,L=n.default.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  max-width: 700px;
  min-height: 0;

  @media (max-width: ${i.w4.breakpoints.md}) {
    flex-direction: column;
    gap: 14px;
  }
`,I=n.default.div`
  position: relative;
  background:
    radial-gradient(ellipse at 30% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 60%),
    radial-gradient(ellipse at 70% 80%, rgba(79, 192, 255, 0.04) 0%, transparent 60%),
    ${i.w4.colors.surface};
  border: 2.5px solid ${({highlighted:e})=>e?"#8b5cf6":i.w4.colors.border};
  border-radius: 50%;
  padding: 28px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 340px;
  height: 340px;
  animation: ${g} 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition: border-color 0.25s, box-shadow 0.25s;
  ${({highlighted:e})=>e?`animation: ${j.toString()} 2s ease-in-out infinite;`:"box-shadow: 0 4px 20px rgba(0,0,0,0.3);"}

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, transparent 40%, transparent 60%, rgba(79, 192, 255, 0.15) 100%);
    pointer-events: none;
    opacity: ${({highlighted:e})=>e?1:.4};
    transition: opacity 0.3s;
  }

  @media (max-width: ${i.w4.breakpoints.md}) {
    width: 260px;
    height: 260px;
    padding: 20px;
    gap: 4px;
  }
`,D=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  font-size: ${({size:e})=>Math.round(.65*e)}px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  transition: all 0.15s ease;
  transform: rotate(${({rotDeg:e})=>e}deg);
  animation: ${g} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
  position: relative;

  ${({correct:e})=>e?`\n    border-color: #3fb950;\n    background: rgba(63, 185, 80, 0.15);\n    animation: ${x.toString()} 0.4s ease;\n  `:""}

  ${({wrong:e})=>e?`\n    border-color: #f97583;\n    background: rgba(249, 117, 131, 0.15);\n    animation: ${h.toString()} 0.4s ease;\n  `:""}

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(${({rotDeg:e})=>e}deg) scale(1.15);
    border-color: ${i.w4.colors.accent}60;
  }

  &:active {
    transform: rotate(${({rotDeg:e})=>e}deg) scale(0.95);
  }
`,N=n.default.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(8, 11, 18, 0.7);
  z-index: 100;
  animation: ${u} 0.2s ease;
  pointer-events: none;
`,G=n.default.span`
  font-size: 80px;
  animation: ${f} 0.6s ease;
`,V=n.default.span`
  font-size: 32px;
  font-weight: 800;
  color: ${({color:e})=>e};
  margin-top: 8px;
  animation: ${g} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s backwards;
`,H=n.default.span`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: 800;
  color: #3fb950;
  pointer-events: none;
  animation: ${w} 0.8s ease-out forwards;
`,q=n.default.span`
  position: absolute;
  top: 0;
  left: ${({left:e})=>e}%;
  font-size: 18px;
  color: ${({color:e})=>e};
  pointer-events: none;
  animation: ${y} 1.2s ease-out ${({delay:e})=>e}s forwards;
  opacity: 0;
  animation-fill-mode: forwards;
`,Y=n.default.span`
  position: absolute;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  font-size: 14px;
  pointer-events: none;
  animation: ${b} 0.6s ease ${({delay:e})=>e}s both;
`,_=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: ${i.w4.spacing.xl};
  animation: ${u} 0.5s ease;
  text-align: center;
`,J=n.default.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: ${i.w4.colors.mainText};
  margin: 0;
`,W=n.default.span`
  font-size: 72px;
  animation: ${f} 1s ease-in-out infinite;
`,U=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,X=n.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,K=n.default.span`
  font-size: 48px;
  font-weight: 800;
  color: ${i.w4.colors.accent};
`,Q=n.default.span`
  font-size: 18px;
  font-weight: 700;
  color: #f59e0b;
  animation: ${x} 1s ease-in-out infinite;
`,Z=n.default.button`
  padding: 16px 40px;
  background: ${({accent:e})=>e};
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 52px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 24px ${({accent:e})=>e}40;
  }

  &:active { transform: translateY(-1px); }
`,ee=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: 20px;
  font-size: 14px;
  color: ${i.w4.colors.mainTextMuted};
`,ae=n.default.div`
  font-size: 24px;
  font-weight: 800;
  color: ${i.w4.colors.mainTextMuted};
  opacity: 0.3;
  flex-shrink: 0;

  @media (max-width: ${i.w4.breakpoints.md}) {
    font-size: 18px;
  }
`,oe=n.default.span`
  position: absolute;
  top: 8px;
  left: 12px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${i.w4.colors.mainTextMuted};
  opacity: 0.5;
`,te=n.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${i.w4.spacing.md};
  max-width: 480px;
  width: 100%;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    max-width: 240px;
  }
`,ne=n.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px 20px 22px;
  background: linear-gradient(168deg, ${({accent:e})=>e}12 0%, ${i.w4.colors.surface} 50%);
  border: 2px solid ${({accent:e})=>e}35;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: ${i.w4.typography.fontFamily};
  position: relative;
  overflow: hidden;
  min-height: 48px;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${({accent:e})=>e}, transparent);
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    border-color: ${({accent:e})=>e}70;
    box-shadow: 0 8px 28px ${({accent:e})=>e}20;
  }

  &:active { transform: translateY(-2px) scale(0.98); }
`,re=n.default.span`
  font-size: 44px;
  animation: ${f} 2.5s ease-in-out infinite;
`,ie=n.default.div`
  display: flex;
  gap: 4px;
  font-size: 20px;
  opacity: 0.7;
`,se=n.default.span`
  font-size: 17px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
`,le=n.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.3;
`,de=["#f97583","#d2a8ff","#79c0ff","#3fb950","#f59e0b","#ff6bcb"],ce=["great","amazing","perfect","super","wow","fast"],pe="atlantis-spotit-best";function me(e){try{return JSON.parse(localStorage.getItem(pe)??"{}")[e]??0}catch{return 0}}function ue({lang:e}){const[a,o]=(0,t.useState)("theme"),[n,r]=(0,t.useState)("animals"),[l,u]=(0,t.useState)("easy"),[g,f]=(0,t.useState)(null),[h,x]=(0,t.useState)(-1),[b,y]=(0,t.useState)(0),[w,v]=(0,t.useState)(0),[$,j]=(0,t.useState)(0),[ue,ge]=(0,t.useState)(""),[fe,he]=(0,t.useState)(null),[xe,be]=(0,t.useState)(null),[ye,we]=(0,t.useState)(!1),[ve,$e]=(0,t.useState)(!1),[je,ke]=(0,t.useState)(new Map),[ze,Se]=(0,t.useState)(new Map),[Te,Ae]=(0,t.useState)([[],[]]),Ce=(0,t.useRef)(null),Me=(0,t.useRef)([]),Pe=(0,t.useRef)(0),Ee=m[l],Be=(0,t.useMemo)(()=>{return e=n,c.find(a=>a.id===e)?.symbols??c[3].symbols;var e},[n]),Re=(0,t.useCallback)(e=>{const a=new Map,o=new Map,t=[p(e[0].symbols),p(e[1].symbols)];e.forEach((e,n)=>{t[n].forEach((e,t)=>{const r=`${n}-${e}`;a.set(r,Math.floor(40*Math.random()-20)),o.set(r,.05*t)})}),ke(a),Se(o),Ae(t)},[]),Fe=(0,t.useCallback)(e=>{u(e);const a=m[e],t=p(function(e){const a=[];a.push({symbols:Array.from({length:e+1},(e,a)=>a)});for(let o=0;o<e;o++){const t=[0];for(let a=0;a<e;a++)t.push(e+1+o*e+a);a.push({symbols:t})}for(let o=0;o<e;o++)for(let t=0;t<e;t++){const n=[o+1];for(let a=0;a<e;a++)n.push(e+1+a*e+(o*a+t)%e);a.push({symbols:n})}return a}(a.order));Me.current=t,Pe.current=0,y(1),v(0),ge(""),he(null),be(null),$e(!1);const n=[t[0],t[1]];f(n);const r=n[0].symbols.find(e=>n[1].symbols.includes(e))??-1;x(r),j(a.timePerRound),Re(n),o("playing")},[Re]);(0,t.useEffect)(()=>{if("playing"===a)return Ce.current=setInterval(()=>{j(e=>e<=1?(Ce.current&&clearInterval(Ce.current),o("gameover"),0):e-1)},1e3),()=>{Ce.current&&clearInterval(Ce.current)};Ce.current&&clearInterval(Ce.current)},[a]),(0,t.useEffect)(()=>{if("gameover"===a){const e=me(l);w>e&&(function(e,a){try{const o=JSON.parse(localStorage.getItem(pe)??"{}");o[e]=a,localStorage.setItem(pe,JSON.stringify(o))}catch{}}(l,w),$e(!0))}},[a,l,w]);const Oe=(0,t.useCallback)(()=>{const e=Pe.current+1;Pe.current=e;const a=Me.current;if(e>=m[l].totalRounds||2*e+1>=a.length)return void o("gameover");const t=[a[2*e],a[2*e+1]];f(t);const n=t[0].symbols.find(e=>t[1].symbols.includes(e))??-1;x(n),y(e+1),j(m[l].timePerRound),he(null),be(null),ge(""),we(!1),Re(t),o("playing")},[l,Re]),Le=(0,t.useCallback)((t,n)=>{if("playing"===a)if(t===h){const a=100+Math.ceil(2*$);v(e=>e+a),be(`${n}-${t}`),we(!0);const r=ce[Math.floor(Math.random()*ce.length)];ge(d(r,e)),o("correct"),setTimeout(()=>{Oe()},900)}else he(`${n}-${t}`),ge(d("oops",e)),v(e=>Math.max(0,e-20)),setTimeout(()=>{he(null),ge(d("tapMatch",e))},500)},[a,h,$,e,Oe]),Ie=(0,t.useMemo)(()=>"easy"===l?80:"medium"===l?64:52,[l]),De=me(l);if("theme"===a)return(0,s.jsx)(k,{children:(0,s.jsxs)(z,{children:[(0,s.jsxs)(S,{children:["🃏 ",d("title",e)]}),(0,s.jsx)(T,{children:d("pickTheme",e)}),(0,s.jsx)(te,{children:c.map(a=>(0,s.jsxs)(ne,{accent:a.color,onClick:()=>{r(a.id),o("menu")},children:[(0,s.jsx)(re,{children:a.emoji}),(0,s.jsx)(se,{children:d(a.id,e)}),(0,s.jsx)(ie,{children:a.preview.map((e,a)=>(0,s.jsx)("span",{children:e},a))}),(0,s.jsx)(le,{children:d(`${a.id}Desc`,e)})]},a.id))})]})});if("menu"===a)return(0,s.jsx)(k,{children:(0,s.jsxs)(z,{children:[(0,s.jsxs)(S,{children:["🃏 ",d("title",e)]}),(0,s.jsx)(T,{children:d("subtitle",e)}),(0,s.jsxs)(A,{children:[(0,s.jsxs)(C,{accent:"#3fb950",onClick:()=>Fe("easy"),children:[(0,s.jsx)(M,{children:"🌟"}),(0,s.jsx)(P,{children:d("easy",e)}),(0,s.jsx)(E,{children:d("easyDesc",e)})]}),(0,s.jsxs)(C,{accent:"#f59e0b",onClick:()=>Fe("medium"),children:[(0,s.jsx)(M,{children:"🔥"}),(0,s.jsx)(P,{children:d("medium",e)}),(0,s.jsx)(E,{children:d("mediumDesc",e)})]}),(0,s.jsxs)(C,{accent:"#f97583",onClick:()=>Fe("hard"),children:[(0,s.jsx)(M,{children:"💪"}),(0,s.jsx)(P,{children:d("hard",e)}),(0,s.jsx)(E,{children:d("hardDesc",e)})]})]}),De>0&&(0,s.jsxs)(ee,{children:["🏆 ",d("bestScore",e),": ",De]})]})});if("gameover"===a)return(0,s.jsx)(k,{children:(0,s.jsxs)(_,{children:[(0,s.jsx)(W,{children:"🏆"}),(0,s.jsx)(J,{children:d("gameOver",e)}),(0,s.jsxs)(U,{children:[(0,s.jsx)(X,{children:d("finalScore",e)}),(0,s.jsx)(K,{children:w}),(0,s.jsxs)(X,{children:[b," ",d("rounds",e)]})]}),ve&&(0,s.jsxs)(Q,{children:["🎉 ",d("newRecord",e)]}),De>0&&!ve&&(0,s.jsxs)(ee,{children:["🏆 ",d("bestScore",e),": ",De]}),(0,s.jsx)(Z,{accent:"#8b5cf6",onClick:()=>o("theme"),children:d("playAgain",e)})]})});const Ne=$<=3?"#f97583":$<=6?"#f59e0b":i.w4.colors.accent;return(0,s.jsx)(k,{children:(0,s.jsxs)(B,{children:[(0,s.jsxs)(R,{children:[(0,s.jsxs)(F,{children:["⭐ ",d("score",e),": ",w]}),(0,s.jsxs)(F,{children:[d("round",e)," ",b,"/",Ee.totalRounds]}),(0,s.jsxs)(F,{color:Ne,urgent:$<=3,children:["⏱️ ",$,"s"]})]}),(0,s.jsx)(O,{wrong:!!fe,children:ue||d("tapMatch",e)}),g&&(0,s.jsx)(L,{children:g.map((e,a)=>(0,s.jsxs)(s.Fragment,{children:[1===a&&(0,s.jsx)(ae,{children:"VS"}),(0,s.jsxs)(I,{highlighted:0===a,children:[(0,s.jsx)(oe,{children:0===a?"A":"B"}),Te[a].map(e=>{const o=`${a}-${e}`,t=je.get(o)??0,n=ze.get(o)??0,r=xe===o,i=fe===o;return(0,s.jsxs)(D,{size:Ie,rotDeg:t,correct:r,wrong:i,style:{animationDelay:`${n}s`},onClick:()=>Le(e,a),children:[Be[e%Be.length],r&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Y,{x:10,y:10,delay:0,children:"✨"}),(0,s.jsx)(Y,{x:80,y:20,delay:.1,children:"✨"}),(0,s.jsx)(Y,{x:20,y:80,delay:.15,children:"✨"}),(0,s.jsx)(Y,{x:75,y:75,delay:.2,children:"✨"})]})]},o)}),ye&&0===a&&(0,s.jsxs)(H,{children:["+",100+Math.ceil(2*$)]})]},`card-${a}-${b}`)]}))}),"correct"===a&&(0,s.jsxs)(N,{children:[(0,s.jsx)(G,{children:"🎉"}),(0,s.jsx)(V,{color:"#3fb950",children:ue}),de.map((e,a)=>(0,s.jsx)(q,{left:10+15*a,delay:.08*a,color:e,children:["🎊","⭐","🌟","💫","✨","🎉"][a]},a))]})]})})}},51623(e,a,o){o.d(a,{z:()=>ge});var t=o(27359),n=o(53233),r=o(77207),i=o(60894),s=o(65723);const l="ABCDEFGHIJLMNOPRSTUVZ",d="ABCDEFGHIJKLMNOPRSTUVWYZ",c=[0,60,90,120],p=[{id:"cities",icon:"🏙️",label:{pt:"Cidades",en:"Cities"}},{id:"countries",icon:"🌍",label:{pt:"Países",en:"Countries"}},{id:"animals",icon:"🐾",label:{pt:"Animais",en:"Animals"}},{id:"fruits",icon:"🍎",label:{pt:"Frutas",en:"Fruits"}},{id:"movies",icon:"🎬",label:{pt:"Filmes",en:"Movies"}},{id:"tvshows",icon:"📺",label:{pt:"Séries",en:"TV Shows"}},{id:"brands",icon:"🏷️",label:{pt:"Marcas",en:"Brands"}},{id:"sports",icon:"⚽",label:{pt:"Desportos",en:"Sports"}},{id:"musicians",icon:"🎵",label:{pt:"Músicos",en:"Musicians"}},{id:"books",icon:"📚",label:{pt:"Livros",en:"Books"}},{id:"names",icon:"🧑",label:{pt:"Nomes",en:"Names"}},{id:"foods",icon:"🍽️",label:{pt:"Comidas",en:"Foods"}},{id:"history",icon:"🏛️",label:{pt:"História",en:"History"}},{id:"jobs",icon:"💼",label:{pt:"Profissões",en:"Jobs"}},{id:"colors",icon:"🎨",label:{pt:"Cores",en:"Colors"}},{id:"flowers",icon:"🌺",label:{pt:"Flores",en:"Flowers"}}],m={cities:{A:{pt:["Aveiro","Almada","Amadora","Albufeira"],en:["Amsterdam","Athens","Atlanta","Auckland"]},B:{pt:["Braga","Beja","Bragança","Barcelos"],en:["Berlin","Boston","Barcelona","Brussels"]},C:{pt:["Coimbra","Cascais","Covilhã","Chaves"],en:["Chicago","Cairo","Cologne","Calgary"]},D:{pt:["Dourinho","Douro","Évora (não)"],en:["Dubai","Dublin","Denver","Damascus"]},E:{pt:["Évora","Elvas","Espinho"],en:["Edinburgh","Essex","El Paso","Exeter"]},F:{pt:["Faro","Funchal","Figueira da Foz","Felgueiras"],en:["Florence","Frankfurt","Fukuoka","Fresno"]},G:{pt:["Guimarães","Guarda","Gondomar","Grândola"],en:["Geneva","Glasgow","Guangzhou","Guadalajara"]},H:{pt:["Horta","Hungria (não)"],en:["Hamburg","Havana","Helsinki","Houston"]},I:{pt:["Ílhavo","Idanha-a-Nova"],en:["Istanbul","Indianapolis","Islamabad","Izmir"]},J:{pt:["Joane","Juromenha"],en:["Jakarta","Jerusalem","Johannesburg","Jacksonville"]},L:{pt:["Lisboa","Leiria","Loures","Lagos"],en:["London","Los Angeles","Lima","Lisbon"]},M:{pt:["Matosinhos","Montijo","Miranda do Douro","Moura"],en:["Madrid","Milan","Melbourne","Moscow"]},N:{pt:["Nazaré","Nisa","Nordeste"],en:["New York","Naples","Nairobi","Nashville"]},O:{pt:["Odivelas","Ovar","Óbidos","Olhão"],en:["Oslo","Ottawa","Oxford","Orlando"]},P:{pt:["Porto","Portimão","Ponte de Lima","Póvoa de Varzim"],en:["Paris","Prague","Porto","Pretoria"]},R:{pt:["Régua","Rio Maior","Reguengos","Resende"],en:["Rome","Rio de Janeiro","Rotterdam","Rabat"]},S:{pt:["Setúbal","Sintra","Santarém","Sines"],en:["Sydney","Stockholm","Seoul","Seville"]},T:{pt:["Torres Vedras","Tomar","Tavira","Trofa"],en:["Tokyo","Toronto","Tehran","Tunis"]},V:{pt:["Viseu","Viana do Castelo","Vila Nova de Gaia","Valongo"],en:["Vienna","Vancouver","Venice","Vilnius"]}},countries:{A:{pt:["Alemanha","Angola","Argentina","Austrália"],en:["Argentina","Australia","Austria","Angola"]},B:{pt:["Brasil","Bélgica","Bulgária","Bolívia"],en:["Brazil","Belgium","Bulgaria","Bolivia"]},C:{pt:["China","Colômbia","Cuba","Chile"],en:["China","Colombia","Cuba","Chile"]},D:{pt:["Dinamarca","Djibuti"],en:["Denmark","Dominican Republic","Djibouti"]},E:{pt:["Espanha","Egipto","Etiópia","Equador"],en:["Egypt","Ethiopia","Ecuador","Estonia"]},F:{pt:["França","Finlândia","Filipinas","Fiji"],en:["France","Finland","Philippines","Fiji"]},G:{pt:["Grécia","Guatemala","Gana","Guiné"],en:["Greece","Guatemala","Ghana","Germany"]},H:{pt:["Hungria","Honduras","Haiti"],en:["Hungary","Honduras","Haiti","Holland"]},I:{pt:["Itália","Índia","Irlanda","Islândia"],en:["Italy","India","Ireland","Iceland"]},J:{pt:["Japão","Jordânia","Jamaica"],en:["Japan","Jordan","Jamaica"]},L:{pt:["Líbia","Líbano","Letónia","Lesoto"],en:["Libya","Lebanon","Latvia","Lesotho"]},M:{pt:["México","Marrocos","Moçambique","Madagascar"],en:["Mexico","Morocco","Mozambique","Malaysia"]},N:{pt:["Noruega","Nepal","Nigéria","Nicarágua"],en:["Norway","Nepal","Nigeria","Nicaragua"]},O:{pt:["Omã"],en:["Oman"]},P:{pt:["Portugal","Peru","Paquistão","Polónia"],en:["Portugal","Peru","Pakistan","Poland"]},R:{pt:["Roménia","Rússia","Ruanda"],en:["Romania","Russia","Rwanda"]},S:{pt:["Suécia","Suíça","Sérvia","Síria"],en:["Sweden","Switzerland","Serbia","Spain"]},T:{pt:["Turquia","Tunísia","Tanzânia","Tailândia"],en:["Turkey","Tunisia","Tanzania","Thailand"]},V:{pt:["Venezuela","Vietname"],en:["Venezuela","Vietnam"]}},animals:{A:{pt:["Abelha","Águia","Antílope","Aranha"],en:["Antelope","Alligator","Ape","Albatross"]},B:{pt:["Baleia","Borboleta","Burro","Búfalo"],en:["Bear","Buffalo","Butterfly","Baboon"]},C:{pt:["Cavalo","Coelho","Crocodilo","Camelo"],en:["Cat","Crocodile","Camel","Cobra"]},D:{pt:["Delfim","Dragão","Dromedário"],en:["Dolphin","Dog","Donkey","Deer"]},E:{pt:["Elefante","Esquilo","Escorpião"],en:["Elephant","Eagle","Eel","Elk"]},F:{pt:["Falcão","Flamingo","Formiga","Foca"],en:["Fox","Flamingo","Frog","Falcon"]},G:{pt:["Girafa","Gorila","Gato","Gavião"],en:["Giraffe","Gorilla","Guppy","Gazelle"]},H:{pt:["Hipopótamo","Hiena"],en:["Hippo","Hyena","Hare","Hawk"]},I:{pt:["Iguana","Íbis"],en:["Iguana","Ibis","Impala"]},J:{pt:["Javali","Jaguar","Jerboa"],en:["Jaguar","Jellyfish","Jackal"]},L:{pt:["Leão","Lobo","Lagarto","Lince"],en:["Lion","Lizard","Leopard","Lynx"]},M:{pt:["Macaco","Morcego","Mocho","Morsa"],en:["Monkey","Moose","Mouse","Meerkat"]},N:{pt:["Narval","Nandú"],en:["Narwhal","Newt","Nightingale"]},O:{pt:["Ouriço","Orangotango","Ovelha","Orca"],en:["Owl","Octopus","Otter","Orangutan"]},P:{pt:["Panda","Pinguim","Pato","Papagaio"],en:["Panda","Penguin","Parrot","Panther"]},R:{pt:["Rato","Rinoceronte","Raposa","Rouxinol"],en:["Rabbit","Rhinoceros","Raccoon","Robin"]},S:{pt:["Sapo","Serpente","Sardinha","Salamandra"],en:["Snake","Shark","Salmon","Squirrel"]},T:{pt:["Tigre","Tartaruga","Texugo","Tubarão"],en:["Tiger","Turtle","Toad","Toucan"]},V:{pt:["Vaca","Veado","Vespa"],en:["Vulture","Viper","Vole"]}},fruits:{A:{pt:["Abacate","Abacaxi","Amora","Ameixa"],en:["Apple","Avocado","Apricot","Acai"]},B:{pt:["Banana","Blueberry","Bergamota"],en:["Banana","Blueberry","Blackberry","Boysenberry"]},C:{pt:["Cereja","Coco","Carambola","Caqui"],en:["Cherry","Coconut","Clementine","Cranberry"]},D:{pt:["Damasco","Durian"],en:["Date","Dragonfruit","Durian"]},E:{pt:["Eirado","Escaramuça"],en:["Elderberry"]},F:{pt:["Figo","Framboesa","Feijoa"],en:["Fig","Feijoa"]},G:{pt:["Goiaba","Groselha","Granadilha"],en:["Grape","Guava","Grapefruit","Gooseberry"]},H:{pt:["Higo"],en:["Honeydew","Huckleberry"]},I:{pt:["Imbú"],en:["Imbe"]},J:{pt:["Jaca","Jabuticaba"],en:["Jackfruit","Jujube"]},L:{pt:["Laranja","Limão","Lima","Lichias"],en:["Lemon","Lime","Lychee","Lingonberry"]},M:{pt:["Maçã","Manga","Melão","Melancia"],en:["Mango","Melon","Mulberry","Mandarin"]},N:{pt:["Nectarina","Nêspera"],en:["Nectarine","Nance"]},O:{pt:["Oliveira"],en:["Orange","Olive"]},P:{pt:["Pêra","Pêssego","Papaia","Pitaia"],en:["Peach","Pear","Pineapple","Papaya"]},R:{pt:["Romã","Rambutan"],en:["Raspberry","Rambutan"]},S:{pt:["Saboticaba","Sapota"],en:["Strawberry","Star fruit","Soursop"]},T:{pt:["Tamarindo","Tomate","Tangerina"],en:["Tamarind","Tangerine","Tomato"]},V:{pt:["Uva (não)"],en:["Vanilla bean"]}},names:{A:{pt:["Ana","António","André","Alice"],en:["Anna","Andrew","Alice","Adam"]},B:{pt:["Beatriz","Bruno","Bruna","Bernardo"],en:["Benjamin","Bella","Brian","Beatrice"]},C:{pt:["Carlos","Carolina","Catarina","Clara"],en:["Carlos","Catherine","Clara","Christopher"]},D:{pt:["David","Diana","Diogo","Daniel"],en:["David","Diana","Daniel","Daisy"]},E:{pt:["Eduardo","Eva","Elisa","Emília"],en:["Edward","Emma","Emily","Ethan"]},F:{pt:["Filipa","Francisco","Fernanda","Fábio"],en:["Frank","Frances","Felix","Fiona"]},G:{pt:["Gonçalo","Gabriela","Guida","Gil"],en:["George","Grace","Gabriel","Gabrielle"]},H:{pt:["Henrique","Helena","Hugo"],en:["Henry","Hannah","Harry","Helen"]},I:{pt:["Inês","Isabel","Igor"],en:["Isabelle","Ivan","Irene","Iris"]},J:{pt:["João","Jorge","Joana","Juliana"],en:["James","Julia","John","Jessica"]},L:{pt:["Luís","Laura","Leonardo","Leonor"],en:["Lucas","Laura","Leonardo","Lily"]},M:{pt:["Maria","Miguel","Marta","Manuel"],en:["Matthew","Maria","Mia","Michael"]},N:{pt:["Nuno","Natália","Natacha"],en:["Noah","Natalie","Nicholas","Nina"]},O:{pt:["Olga","Óscar"],en:["Oliver","Olivia","Oscar"]},P:{pt:["Pedro","Paula","Paulo","Patrícia"],en:["Peter","Patricia","Paul","Penelope"]},R:{pt:["Ricardo","Rita","Rodrigo","Rosa"],en:["Richard","Rachel","Robert","Rebecca"]},S:{pt:["Sara","Sofia","Sérgio","Susana"],en:["Samuel","Sarah","Sophia","Simon"]},T:{pt:["Tiago","Teresa","Tomás","Tatiana"],en:["Thomas","Tessa","Timothy","Tina"]},V:{pt:["Vera","Vítor","Valentina"],en:["Victor","Valentina","Victoria"]}},foods:{A:{pt:["Arroz","Atum","Azeitonas","Alho"],en:["Apple pie","Avocado toast","Asparagus","Almond"]},B:{pt:["Bacalhau","Bifes","Batatas","Broa"],en:["Bacon","Bagel","Biscuit","Brownie"]},C:{pt:["Caldo verde","Chouriço","Cenoura","Cebola"],en:["Cake","Carrot","Cheese","Croissant"]},D:{pt:["Doce de leite","Dobrada"],en:["Doughnut","Dumpling","Dal"]},E:{pt:["Espetada","Enchidos","Esparguete"],en:["Egg","Enchilada","Eggplant"]},F:{pt:["Frango","Feijão","Farinha","Francesinha"],en:["Fish","Fries","Falafel","Fondue"]},G:{pt:["Grão","Gelado","Ginja"],en:["Grilled chicken","Guacamole","Gelato","Granola"]},H:{pt:["Hambúrguer","Hotdog"],en:["Hamburger","Hotdog","Hummus","Honey"]},I:{pt:["Iogurte"],en:["Ice cream","Iced tea"]},J:{pt:["Jantar","Jardineira"],en:["Jam","Jelly","Jalapeño"]},L:{pt:["Linguiça","Lentilhas","Laranja"],en:["Lasagna","Lentil soup","Lemon tart"]},M:{pt:["Massa","Migas","Mel","Manteiga"],en:["Mango sorbet","Meatball","Mushroom","Moussaka"]},N:{pt:["Natas","Nozes"],en:["Noodles","Nachos","Nut butter"]},O:{pt:["Ovos","Omeleta"],en:["Omelette","Oyster","Oatmeal"]},P:{pt:["Pão","Peixe","Pizza","Pudim"],en:["Pizza","Pancake","Pasta","Pudding"]},R:{pt:["Risotto","Rissol","Robalo"],en:["Rice","Risotto","Ramen","Roast beef"]},S:{pt:["Sopa","Sardinha","Salada"],en:["Salad","Sandwich","Sushi","Soup"]},T:{pt:["Tosta","Tremoços","Tarte"],en:["Tacos","Tofu","Tomato soup","Toast"]},V:{pt:["Vitela","Vinagrete"],en:["Vegetable stir fry","Vanilla pudding","Veal"]}},colors:{A:{pt:["Amarelo","Azul","Anil","Âmbar"],en:["Amber","Azure","Aquamarine"]},B:{pt:["Branco","Bordô","Bege"],en:["Blue","Black","Brown","Beige"]},C:{pt:["Castanho","Carmim","Ciano","Coral"],en:["Crimson","Cyan","Coral","Cream"]},D:{pt:["Dourado"],en:["Dark blue","Denim"]},E:{pt:["Esmeralda","Escarlate"],en:["Emerald","Electric blue"]},F:{pt:["Fucsia","Ferrugem","Flamingo"],en:["Fuchsia","Flamingo pink","Forest green"]},G:{pt:["Grafite","Gelo"],en:["Gold","Green","Gray"]},H:{pt:["Húmido (não)"],en:["Hot pink","Honey yellow"]},I:{pt:["Índigo","Ivory"],en:["Indigo","Ivory"]},J:{pt:["Jade"],en:["Jade","Jasmine"]},L:{pt:["Laranja","Lavanda","Lilás","Limão"],en:["Lavender","Lime green","Lilac"]},M:{pt:["Magenta","Marrom","Malva"],en:["Magenta","Maroon","Mauve","Mint"]},N:{pt:["Negro","Nata"],en:["Navy blue","Neon green"]},O:{pt:["Ocre","Oliveira"],en:["Orange","Olive","Ochre"]},P:{pt:["Preto","Prata","Rosa","Púrpura"],en:["Purple","Pink","Peach","Platinum"]},R:{pt:["Roxo","Rubi","Rosa"],en:["Red","Ruby","Rose"]},S:{pt:["Salmão","Sépia"],en:["Salmon","Sapphire","Scarlet","Silver"]},T:{pt:["Turquesa","Terra"],en:["Turquoise","Teal","Tan"]},V:{pt:["Verde","Violeta","Vermelho"],en:["Violet","Viridian"]}},sports:{A:{pt:["Atletismo","Andebol","Aeróbica","Aikido"],en:["Athletics","Archery","American football","Aerobics"]},B:{pt:["Basquetebol","Boxe","Badminton","Baseball"],en:["Basketball","Boxing","Badminton","Baseball"]},C:{pt:["Ciclismo","Corrida","Cricket","Canoagem"],en:["Cycling","Cricket","Climbing","Canoeing"]},D:{pt:["Dança","Dart","Dodgeball"],en:["Diving","Darts","Dodgeball"]},E:{pt:["Equitação","Esgrima"],en:["Equestrian","Fencing (esgrima em EN é Fencing)"]},F:{pt:["Futebol","Futsal","Fórmula 1","Fisiculturismo"],en:["Football","Futsal","Formula 1"]},G:{pt:["Ginástica","Golfe","Gateball"],en:["Golf","Gymnastics","Go-karting"]},H:{pt:["Hóquei","Halterofilia","Hípica"],en:["Hockey","Handball","Hurdles"]},I:{pt:["Ioga"],en:["Ice hockey","Ice skating"]},J:{pt:["Judo","Jet ski"],en:["Judo","Javelin","Jet skiing"]},L:{pt:["Luta livre","Lacrosse"],en:["Lacrosse","Long jump"]},M:{pt:["Maratona","Mergulho","MMA"],en:["Marathon","Mixed martial arts","Motocross"]},N:{pt:["Natação","Netball"],en:["Swimming (Natação em PT)","Netball"]},O:{pt:["Orientação"],en:["Orienteering","Olympic weightlifting"]},P:{pt:["Padel","Polo","Patinagem","Pesca desportiva"],en:["Padel","Polo","Parkour","Pentathlon"]},R:{pt:["Rugby","Remo","Raquetebol"],en:["Rugby","Rowing","Racquetball"]},S:{pt:["Surf","Squash","Ski"],en:["Swimming","Surfing","Squash","Skiing"]},T:{pt:["Ténis","Taekwondo","Tiro ao alvo"],en:["Tennis","Taekwondo","Triathlon"]},V:{pt:["Voleibol","Vela","Voo livre"],en:["Volleyball","Volleyball (beach)"]}},brands:{A:{pt:["Apple","Adidas","Amazon","Audi"],en:["Apple","Adidas","Amazon","Audi"]},B:{pt:["BMW","Bose","Burger King","Boss"],en:["BMW","Bose","Burger King","Boss"]},C:{pt:["Coca-Cola","Calvin Klein","Chanel","Canon"],en:["Coca-Cola","Calvin Klein","Chanel","Canon"]},D:{pt:["Disney","Dell","Dyson"],en:["Disney","Dell","Dyson","Dove"]},E:{pt:["Emirates","Epson"],en:["Emirates","Epson","Estée Lauder"]},F:{pt:["Ferrari","Ford","Facebook","Fender"],en:["Ferrari","Ford","Facebook","Fender"]},G:{pt:["Google","Gucci","Gillette"],en:["Google","Gucci","Gillette"]},H:{pt:["H&M","Honda","Heineken"],en:["H&M","Honda","Heineken","Hugo Boss"]},I:{pt:["IKEA","Intel"],en:["IKEA","Intel","Instagram"]},J:{pt:["Jeep","Jimmy Choo"],en:["Jeep","Jimmy Choo","Jordan"]},L:{pt:["Lego","Louis Vuitton","Levi's"],en:["Lego","Louis Vuitton","Levi's"]},M:{pt:["McDonald's","Microsoft","Mercedes","Mazda"],en:["McDonald's","Microsoft","Mercedes","Mazda"]},N:{pt:["Nike","Netflix","Nestlé","Nintendo"],en:["Nike","Netflix","Nestlé","Nintendo"]},O:{pt:["Omega","Oracle"],en:["Omega","Oracle","Old Spice"]},P:{pt:["Puma","Prada","PlayStation","Peugeot"],en:["Puma","Prada","PlayStation","Peugeot"]},R:{pt:["Ray-Ban","Rolex","Renault"],en:["Ray-Ban","Rolex","Renault","Red Bull"]},S:{pt:["Samsung","Sony","Spotify","Skype"],en:["Samsung","Sony","Spotify","Snapchat"]},T:{pt:["Toyota","Twitter","TikTok","Tesla"],en:["Toyota","Twitter","TikTok","Tesla"]},V:{pt:["Versace","Volkswagen","Visa"],en:["Versace","Volkswagen","Visa"]}},movies:{A:{pt:["Avatar","Aladdim","Amor Infinito"],en:["Avatar","Aladdin","Avengers"]},B:{pt:["Bambi","Batman"],en:["Bambi","Batman","Bohemian Rhapsody"]},C:{pt:["Cenicienta","Coco","Cars"],en:["Coco","Cars","Cinderella","Casino Royale"]},D:{pt:["Divertida Mente","Dumbo"],en:["Dune","Dunkirk"]},E:{pt:["Encanto","Elfen Lied"],en:["Encanto","Elf","Eternal Sunshine"]},F:{pt:["Frozen","Fantasia"],en:["Frozen","Finding Nemo"]},G:{pt:["Gladiador","Godzilla"],en:["Gladiator","Godzilla","Grease"]},H:{pt:["Homem-Aranha","Hercules"],en:["Harry Potter","Hercules","Home Alone"]},I:{pt:["Intocáveis","Inside Out"],en:["Inception","Inside Out","Interstellar"]},J:{pt:["Jurassic Park"],en:["Jaws","Jurassic Park","Joker"]},L:{pt:["A Bela e o Monstro","Luca"],en:["Lion King","Luca","La La Land"]},M:{pt:["Moana","Mulan","Monstros SA"],en:["Moana","Mulan","Monsters Inc"]},N:{pt:["Nemo","Noiva Cadáver"],en:["Nemo","Nightmare before Christmas"]},O:{pt:["O Rei Leão","O Espanta Tubarões"],en:["Onward","Oz"]},P:{pt:["Procurando Nemo","Pinóquio"],en:["Pinocchio","Paddington"]},R:{pt:["Ratatouille","Robots"],en:["Ratatouille","Rocky"]},S:{pt:["Soul","Shrek","Star Wars"],en:["Soul","Shrek","Star Wars"]},T:{pt:["Toy Story","Tangled","Titanic"],en:["Toy Story","Titanic","Tangled"]},V:{pt:["Vida de Inseto","Valente"],en:["Venom","Vampirina"]}},tvshows:{A:{pt:["A Casa de Papel","Atípico"],en:["Avatar: The Last Airbender","Arcane"]},B:{pt:["Bluey","Bob Esponja"],en:["Bluey","Breaking Bad","Brooklyn Nine-Nine"]},C:{pt:["Cocomelon","Cidade dos Sonhos"],en:["Cocomelon","Caillou"]},D:{pt:["Detetive Conan","Digimon"],en:["Dora the Explorer","Digimon","Dexter"]},E:{pt:["Emily em Paris"],en:["Emily in Paris"]},F:{pt:["Friends","Flintstones"],en:["Friends","Family Guy"]},G:{pt:["Gravity Falls"],en:["Gravity Falls","Game of Thrones"]},H:{pt:["Heidi","Hora de Aventura"],en:["Hazbin Hotel","Hilda","How I Met Your Mother"]},I:{pt:["Inspector Gadget"],en:["Inside Job","iCarly"]},J:{pt:["Jorge o Curioso"],en:["Jimmy Neutron","Jeopardy"]},L:{pt:["La Casa de Papel","Lupin"],en:["Loki","Lucifer"]},M:{pt:["Miraculous","Mansão Foster"],en:["Miraculous","Monster High"]},N:{pt:["Naruto","Ninjago"],en:["Naruto","Never Have I Ever"]},O:{pt:["Os Simpsons","O Ursinho Pooh"],en:["The Office","Only Murders in the Building"]},P:{pt:["Peppa Pig","Patrulha Pata"],en:["Peppa Pig","Paw Patrol"]},R:{pt:["Rapunzel","Round 6"],en:["Rugrats","Recess"]},S:{pt:["Stranger Things","SpongeBob"],en:["Stranger Things","SpongeBob","Scrubs"]},T:{pt:["Turma da Mônica","The Walking Dead"],en:["The Simpsons","Ted Lasso"]}},musicians:{A:{pt:["ABBA","Adele","Arctic Monkeys"],en:["ABBA","Adele","Arctic Monkeys"]},B:{pt:["Beatles","Beyoncé","Bruno Mars"],en:["Beatles","Beyoncé","Bruno Mars"]},C:{pt:["Coldplay","Cristiano Araújo"],en:["Coldplay","Chris Brown","Cardi B"]},D:{pt:["David Bowie","Drake"],en:["David Bowie","Drake"]},E:{pt:["Ed Sheeran","Elvis"],en:["Ed Sheeran","Elvis Presley","Eminem"]},F:{pt:["Foo Fighters","Fado (não é músico)"],en:["Foo Fighters","Frank Sinatra","Freddie Mercury"]},G:{pt:["Guns N' Roses","Gloria Gaynor"],en:["Guns N' Roses","Green Day"]},H:{pt:["Harry Styles"],en:["Harry Styles","Halsey"]},I:{pt:["Iron Maiden"],en:["Iron Maiden","Imagine Dragons"]},J:{pt:["Joana Amendoeira","Justin Bieber"],en:["Justin Bieber","Jay-Z","John Legend"]},L:{pt:["Lady Gaga","Lorde"],en:["Lady Gaga","Lorde","Lewis Capaldi"]},M:{pt:["Michael Jackson","Madonna","Maroon 5"],en:["Michael Jackson","Madonna","Maroon 5"]},N:{pt:["Nirvana"],en:["Nirvana","Nicki Minaj"]},O:{pt:["One Direction"],en:["One Direction","Olivia Rodrigo"]},P:{pt:["Pink Floyd","Post Malone"],en:["Pink Floyd","Post Malone"]},R:{pt:["Rihanna","Red Hot Chili Peppers"],en:["Rihanna","Red Hot Chili Peppers"]},S:{pt:["Shakira","Selena Gomez","Sam Smith"],en:["Shakira","Selena Gomez","Sam Smith"]},T:{pt:["Taylor Swift","The Weeknd"],en:["Taylor Swift","The Weeknd"]},V:{pt:["Vivaldi"],en:["Vance Joy","Vampire Weekend"]}},books:{A:{pt:["Alice no País das Maravilhas","O Alquimista"],en:["Alice in Wonderland","Animal Farm"]},B:{pt:["Bambi (livro)","Bíblia"],en:["Bambi","Billy Budd"]},C:{pt:["Cinderela","Charlie e a Fábrica de Chocolate"],en:["Charlie and the Chocolate Factory","Cinderella"]},D:{pt:["Dom Quixote","Diário de um Banana"],en:["David Copperfield","Diary of a Wimpy Kid"]},E:{pt:["Eragon","O Estrangeiro"],en:["Eragon","Emma"]},F:{pt:["Fadas e Magia (não real)"],en:["Frankenstein","Fantastic Mr Fox"]},G:{pt:["O Grande Gatsby","Gulliver"],en:["The Great Gatsby","Gulliver's Travels"]},H:{pt:["Harry Potter","Hamlet"],en:["Harry Potter","Hamlet","Hunger Games"]},I:{pt:["Ilíada"],en:["Iliad","It (Stephen King)"]},J:{pt:["O Jogo do Imortais"],en:["Jane Eyre","Julius Caesar"]},L:{pt:["O Livro da Selva","O Leão a Feiticeira e o Guarda-Roupa"],en:["The Lion, the Witch and the Wardrobe","Little Women"]},M:{pt:["Moby Dick","Mafalda"],en:["Moby Dick","Matilda"]},N:{pt:["Narnia (série)"],en:["Narnia Chronicles"]},O:{pt:["Odisseia","Os Lusíadas"],en:["Odyssey","Oliver Twist"]},P:{pt:["Pequeno Príncipe","Peter Pan","Pinóquio"],en:["The Little Prince","Peter Pan","Pinocchio"]},R:{pt:["Robinson Crusoe","Romeo e Julieta"],en:["Robinson Crusoe","Romeo and Juliet"]},S:{pt:["O Senhor dos Anéis","O Sol também se Levanta"],en:["The Lord of the Rings","Sherlock Holmes"]},T:{pt:["Tom Sawyer","Três Mosqueteiros"],en:["Tom Sawyer","The Three Musketeers"]},V:{pt:["Viagem ao Centro da Terra","Vinte Mil Léguas"],en:["Voyage to the Center of the Earth","20,000 Leagues Under the Sea"]}},history:{A:{pt:["Alexandre o Grande","Afonso Henriques"],en:["Alexander the Great","American Revolution"]},B:{pt:["Batalha de Aljubarrota","Bartolomeu Dias"],en:["Battle of Waterloo","Black Death"]},C:{pt:["Cristóvão Colombo","Cleópatra"],en:["Christopher Columbus","Cleopatra","Crusades"]},D:{pt:["Dom Sebastião","Descobrimentos"],en:["Da Vinci","Dark Ages"]},E:{pt:["Egípcios","Escravidão"],en:["Egyptian Empire","Enlightenment"]},F:{pt:["Fernando Magalhães","Feudalismo"],en:["French Revolution","Feudalism"]},G:{pt:["Gengis Khan","Gregos"],en:["Genghis Khan","Greeks"]},H:{pt:["Hitler","Hannibal"],en:["Hitler","Hannibal"]},I:{pt:["Império Romano","Inquisição"],en:["Industrial Revolution","Inquisition"]},J:{pt:["Júlio César"],en:["Julius Caesar"]},L:{pt:["Luís XIV","Lusíadas"],en:["Louis XIV","Lewis and Clark"]},M:{pt:["Marco Polo","Mundo Antigo"],en:["Marco Polo","Middle Ages"]},N:{pt:["Napoleão"],en:["Napoleon","Norman Conquest"]},O:{pt:["Otomanos"],en:["Ottoman Empire"]},P:{pt:["Pombal","Portugueses (descobertas)"],en:["Pharaohs","Peloponnesian War"]},R:{pt:["Revolução Francesa","Roma"],en:["Renaissance","Roman Empire"]},S:{pt:["Salazar","Segunda Guerra Mundial"],en:["Second World War","Spartans"]},T:{pt:["Tratado de Tordesilhas","Templários"],en:["Trojan War","Treaty of Versailles"]}},jobs:{A:{pt:["Advogado","Arquiteto","Astronauta","Agricultor"],en:["Architect","Astronaut","Actor","Accountant"]},B:{pt:["Bombeiro","Biólogo","Barbeiro"],en:["Baker","Biologist","Builder"]},C:{pt:["Cozinheiro","Carpinteiro","Cientista","Cantor"],en:["Chef","Carpenter","Chemist","Conductor"]},D:{pt:["Dentista","Designer","Detetive"],en:["Dentist","Designer","Doctor","Detective"]},E:{pt:["Enfermeiro","Engenheiro","Escritor"],en:["Engineer","Electrician","Economist"]},F:{pt:["Fotógrafo","Fisioterapeuta","Farmacêutico"],en:["Farmer","Firefighter","Florist"]},G:{pt:["Geólogo","Gestor"],en:["Geologist","Gardener","General"]},H:{pt:["Historiador","Hacker (ético)"],en:["Historian","Hairdresser"]},I:{pt:["Informático","Ilustrador"],en:["Illustrator","Inspector"]},J:{pt:["Jornalista","Juiz"],en:["Journalist","Judge"]},L:{pt:["Limpador","Locutor"],en:["Lawyer","Librarian","Locksmith"]},M:{pt:["Médico","Músico","Mecânico","Matemático"],en:["Mechanic","Musician","Manager","Mathematician"]},N:{pt:["Nutricionista","Nadador-Salvador"],en:["Nurse","Nutritionist"]},O:{pt:["Oftalmologista","Operador"],en:["Optician","Officer"]},P:{pt:["Professor","Piloto","Pintor","Polícia"],en:["Pilot","Painter","Police officer","Plumber"]},R:{pt:["Rececionista","Redator"],en:["Receptionist","Reporter","Researcher"]},S:{pt:["Soldado","Secretário","Sociólogo"],en:["Scientist","Surgeon","Social worker"]},T:{pt:["Técnico","Tradutor","Terapeuta"],en:["Teacher","Translator","Technician"]},V:{pt:["Veterinário","Vendedor"],en:["Veterinarian","Violinist"]}},flowers:{A:{pt:["Azaléia","Açafrão","Antúrio"],en:["Azalea","Amaryllis","Aster"]},B:{pt:["Begónia","Boca-de-Leão"],en:["Begonia","Bluebell","Buttercup"]},C:{pt:["Cravo","Crisântemo","Camomila"],en:["Carnation","Chrysanthemum","Clover"]},D:{pt:["Dália","Dente-de-Leão"],en:["Daisy","Daffodil","Dahlia"]},E:{pt:["Espadana"],en:["Echinacea","Elderflower"]},F:{pt:["Freesia","Fúcsia"],en:["Freesia","Fuchsia","Forget-me-not"]},G:{pt:["Gardénia","Gerânio","Girassol"],en:["Gardenia","Geranium","Gladiolus"]},H:{pt:["Hortênsia","Heliotropo"],en:["Hydrangea","Hibiscus","Hollyhock"]},I:{pt:["Íris"],en:["Iris","Impatiens"]},J:{pt:["Jasmim","Jacinto"],en:["Jasmine","Jonquil"]},L:{pt:["Lavanda","Lírio","Loto"],en:["Lavender","Lily","Lotus","Larkspur"]},M:{pt:["Magnólia","Margarida","Malmequeres"],en:["Magnolia","Marigold","Morning glory"]},N:{pt:["Narciso","Noivinha"],en:["Narcissus","Nasturtium"]},O:{pt:["Orquídea"],en:["Orchid","Oxeye daisy"]},P:{pt:["Peônia","Petúnia","Papoila"],en:["Peony","Petunia","Poppy"]},R:{pt:["Rosa","Ranúnculo"],en:["Rose","Ranunculus"]},S:{pt:["Sempre-viva","Salva"],en:["Sunflower","Sweet pea","Sage"]},T:{pt:["Tulipa","Thistle"],en:["Tulip","Thistle"]},V:{pt:["Violeta","Verbena"],en:["Violet","Verbena"]}}},u="atlantis:stop:categories",g="atlantis:stop:timer",f={title:{pt:"STOP!",en:"STOP!"},chooseCategories:{pt:"Escolhe as categorias",en:"Choose categories"},selected:{pt:"selecionadas",en:"selected"},minCategories:{pt:"Seleciona pelo menos 3",en:"Select at least 3"},startGame:{pt:"Iniciar Jogo",en:"Start Game"},spinning:{pt:"A sortear a letra...",en:"Drawing a letter..."},got:{pt:"Saiu o",en:"Got"},thinkFast:{pt:"Pensa rápido!",en:"Think fast!"},timer:{pt:"Temporizador",en:"Timer"},noTimer:{pt:"Sem tempo",en:"No timer"},seconds:{pt:"s",en:"s"},stopBtn:{pt:"🛑 STOP!",en:"🛑 STOP!"},suggestions:{pt:"Sugestões",en:"Suggestions"},showHints:{pt:"💡 Ver sugestões",en:"💡 Show hints"},hideHints:{pt:"💡 Ocultar sugestões",en:"💡 Hide hints"},roundOver:{pt:"Ronda terminada!",en:"Round over!"},newLetter:{pt:"🔀 Nova Letra",en:"🔀 New Letter"},changeCategories:{pt:"⚙️ Mudar Categorias",en:"⚙️ Change Categories"},roundCount:{pt:"Ronda",en:"Round"},typeAnswer:{pt:"Escreve a resposta...",en:"Type your answer..."},timeUp:{pt:"Tempo esgotado!",en:"Time's up!"},noHints:{pt:"Sem sugestões para esta letra",en:"No hints for this letter"}};function h(e,a){return f[e]["pt"===a?"pt":"en"]}r.keyframes`
  0% { transform: scale(1) rotate(0deg); }
  100% { transform: scale(1) rotate(360deg); }
`;const x=r.keyframes`
  0%   { transform: scale(0.3); opacity: 0; }
  60%  { transform: scale(1.2); opacity: 1; }
  80%  { transform: scale(0.92); }
  100% { transform: scale(1); }
`,b=r.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,y=r.keyframes`
  from { opacity: 0; max-height: 0; transform: translateY(-4px); }
  to   { opacity: 1; max-height: 200px; transform: translateY(0); }
`,w=r.keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(88, 166, 255, 0.4); }
  50%       { box-shadow: 0 0 0 12px rgba(88, 166, 255, 0); }
`,v=r.keyframes`
  from { background-position: -200% center; }
  to   { background-position: 200% center; }
`,$=n.default.div`
  min-height: 100%;
  background: radial-gradient(ellipse at top, #0f1624 0%, ${i.w4.colors.mainBg} 70%);
  padding: ${i.w4.spacing.lg} ${i.w4.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
`,j=n.default.h1`
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.08em;
  background: linear-gradient(135deg, ${i.w4.colors.accent}, #a78bfa, #f472b6);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${v} 3s linear infinite;
  margin-bottom: ${i.w4.spacing.xs};
`,k=n.default.p`
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeMd};
  margin-bottom: ${i.w4.spacing.xl};
  text-align: center;
`,z=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 720px;
  margin-bottom: ${i.w4.spacing.md};
  flex-wrap: wrap;
  gap: ${i.w4.spacing.sm};
`,S=n.default.span`
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
`,T=n.default.span`
  font-weight: 700;
  color: ${({ok:e})=>e?i.w4.colors.accent:i.w4.colors.mainTextMuted};
`,A=n.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${i.w4.spacing.sm};
  width: 100%;
  max-width: 720px;
  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,C=n.default.button`
  position: relative;
  background: ${({selected:e})=>e?"rgba(88, 166, 255, 0.1)":i.w4.colors.surface};
  border: 2px solid ${({selected:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.xs};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 80px;
  color: ${({selected:e})=>e?i.w4.colors.mainText:i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
  font-family: ${i.w4.typography.fontFamily};
  &:hover {
    border-color: ${i.w4.colors.accent};
    background: rgba(88, 166, 255, 0.05);
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`,M=n.default.span`
  font-size: 1.6rem;
  line-height: 1;
`,P=n.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 500;
  text-align: center;
  line-height: 1.3;
`,E=n.default.div`
  position: absolute;
  top: 6px;
  right: 8px;
  color: ${i.w4.colors.accent};
  font-size: 0.85rem;
  font-weight: 700;
`,B=n.default.button`
  margin-top: ${i.w4.spacing.xl};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.xl};
  background: ${({disabled:e})=>e?i.w4.colors.surface:`linear-gradient(135deg, ${i.w4.colors.accent}, #a78bfa)`};
  color: ${({disabled:e})=>e?i.w4.colors.mainTextMuted:"#fff"};
  border: none;
  border-radius: ${i.w4.borderRadius.lg};
  font-size: ${i.w4.typography.fontSizeLg};
  font-weight: 700;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  opacity: ${({disabled:e})=>e?.5:1};
  min-height: 52px;
  &:hover:not([disabled]) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(88, 166, 255, 0.3);
  }
`,R=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.xl};
  flex: 1;
  padding: ${i.w4.spacing.xxl} 0;
  animation: ${b} 0.3s ease;
`,F=n.default.div`
  width: clamp(160px, 30vw, 220px);
  height: clamp(160px, 30vw, 220px);
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(88, 166, 255, 0.3), rgba(167, 139, 250, 0.1));
  border: 3px solid ${i.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(4rem, 12vw, 8rem);
  font-weight: 900;
  color: ${i.w4.colors.mainText};
  animation: ${({landed:e})=>e?`${w} 1s ease infinite`:"none"};
  box-shadow: 0 0 40px rgba(88, 166, 255, 0.2);
  transition: all 0.1s ease;
  ${({landing:e})=>e&&"\n    transform: scale(1.05);\n    box-shadow: 0 0 60px rgba(88, 166, 255, 0.5);\n  "}
  ${({landed:e})=>e&&`\n    animation: ${x} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, ${w} 1.5s 0.5s ease infinite;\n  `}
`,O=n.default.p`
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeMd};
  text-align: center;
`,L=n.default.div`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 900;
  color: ${i.w4.colors.accent};
  text-align: center;
  animation: ${x} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
`,I=n.default.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.md};
  animation: ${b} 0.3s ease;
`,D=n.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.md};
  margin-bottom: ${i.w4.spacing.sm};
`,N=n.default.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(88, 166, 255, 0.2), rgba(167, 139, 250, 0.2));
  border: 2px solid ${i.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 900;
  color: ${i.w4.colors.mainText};
  flex-shrink: 0;
`,G=n.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  flex-wrap: wrap;
`,V=n.default.span`
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
`,H=n.default.button`
  padding: ${i.w4.spacing.xs} ${i.w4.spacing.sm};
  border-radius: ${i.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  background: ${({active:e})=>e?"rgba(88, 166, 255, 0.1)":"transparent"};
  color: ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s ease;
  min-height: 44px;
  &:hover {
    border-color: ${i.w4.colors.accent};
    color: ${i.w4.colors.accent};
  }
`,q=n.default.div`
  flex: 1;
  height: 8px;
  background: ${i.w4.colors.surface};
  border-radius: 99px;
  overflow: hidden;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: ${({pct:e})=>100*e}%;
    background: ${({pct:e})=>e>.5?"#3fb950":e>.25?"#f0a202":"#f85149"};
    transition: width 1s linear, background 1s ease;
    border-radius: 99px;
  }
`,Y=n.default.span`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({pct:e})=>e>.5?"#3fb950":e>.25?"#f0a202":"#f85149"};
  min-width: 36px;
  text-align: right;
`,_=n.default.div`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.sm};
  animation: ${b} 0.25s ease;
`,J=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${i.w4.spacing.sm};
`,W=n.default.span`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeMd};
`,U=n.default.button`
  padding: ${i.w4.spacing.xs} ${i.w4.spacing.sm};
  border-radius: ${i.w4.borderRadius.md};
  border: 1px solid rgba(240, 162, 2, 0.4);
  background: rgba(240, 162, 2, 0.08);
  color: #f0a202;
  font-size: ${i.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
  min-height: 44px;
  &:hover {
    background: rgba(240, 162, 2, 0.15);
    border-color: rgba(240, 162, 2, 0.6);
  }
`,X=n.default.input`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeMd};
  font-family: ${i.w4.typography.fontFamily};
  width: 100%;
  min-height: 44px;
  transition: border-color 0.15s ease;
  &:focus {
    outline: none;
    border-color: ${i.w4.colors.accent};
  }
  &::placeholder {
    color: ${i.w4.colors.mainTextMuted};
  }
`,K=n.default.div`
  overflow: hidden;
  animation: ${y} 0.25s ease forwards;
  background: rgba(240, 162, 2, 0.06);
  border: 1px solid rgba(240, 162, 2, 0.2);
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
`,Q=n.default.p`
  font-size: ${i.w4.typography.fontSizeSm};
  color: #f0a202;
  font-weight: 600;
  margin-bottom: ${i.w4.spacing.xs};
`,Z=n.default.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${i.w4.spacing.xs};
  margin: 0;
  padding: 0;
`,ee=n.default.li`
  background: rgba(240, 162, 2, 0.12);
  border: 1px solid rgba(240, 162, 2, 0.25);
  border-radius: 99px;
  padding: 2px 10px;
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainText};
`,ae=n.default.p`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  font-style: italic;
`,oe=n.default.button`
  align-self: center;
  margin-top: ${i.w4.spacing.md};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.xxl};
  background: linear-gradient(135deg, #f85149, #ff7a6e);
  color: #fff;
  border: none;
  border-radius: ${i.w4.borderRadius.lg};
  font-size: ${i.w4.typography.fontSizeLg};
  font-weight: 900;
  cursor: pointer;
  letter-spacing: 0.1em;
  transition: all 0.2s ease;
  min-height: 52px;
  box-shadow: 0 4px 20px rgba(248, 81, 73, 0.3);
  &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 8px 28px rgba(248, 81, 73, 0.5);
  }
  &:active {
    transform: translateY(0) scale(0.98);
  }
`,te=r.keyframes`
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(248, 81, 73, 0.5); }
  50%      { transform: scale(1.05); box-shadow: 0 0 0 14px rgba(248, 81, 73, 0); }
`,ne=n.default.button`
  margin-top: ${i.w4.spacing.lg};
  width: clamp(140px, 40vw, 180px);
  height: clamp(140px, 40vw, 180px);
  border-radius: 50%;
  background: linear-gradient(145deg, #ff4040, #e02020);
  border: 4px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: clamp(1.8rem, 5vw, 2.6rem);
  font-weight: 900;
  letter-spacing: 0.08em;
  cursor: pointer;
  animation: ${te} 1.2s ease-in-out infinite;
  transition: transform 0.1s;
  box-shadow: 0 8px 32px rgba(248, 81, 73, 0.4), inset 0 -4px 12px rgba(0, 0, 0, 0.2);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:active {
    transform: scale(0.9);
    animation: none;
  }
`,re=n.default.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.md};
  animation: ${b} 0.3s ease;
`,ie=n.default.div`
  text-align: center;
  margin-bottom: ${i.w4.spacing.md};
`,se=n.default.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 900;
  color: ${i.w4.colors.mainText};
  margin-bottom: ${i.w4.spacing.xs};
`,le=n.default.p`
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
`,de=n.default.div`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.md};
`,ce=n.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  font-weight: 600;
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
  margin-bottom: ${i.w4.spacing.xs};
`,pe=n.default.div`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${({children:e})=>e?i.w4.colors.mainText:i.w4.colors.mainTextMuted};
  font-style: ${({children:e})=>e?"normal":"italic"};
  padding-left: calc(1.6rem + ${i.w4.spacing.sm});
`,me=n.default.div`
  display: flex;
  gap: ${i.w4.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${i.w4.spacing.md};
`,ue=n.default.button`
  padding: ${i.w4.spacing.md} ${i.w4.spacing.lg};
  border-radius: ${i.w4.borderRadius.lg};
  border: ${({variant:e})=>"secondary"===e?`1px solid ${i.w4.colors.border}`:"none"};
  background: ${({variant:e})=>"secondary"===e?i.w4.colors.surface:`linear-gradient(135deg, ${i.w4.colors.accent}, #a78bfa)`};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 48px;
  &:hover {
    transform: translateY(-2px);
    ${({variant:e})=>"secondary"!==e&&"box-shadow: 0 8px 20px rgba(88,166,255,0.3);"}
    ${({variant:e})=>"secondary"===e&&`border-color: ${i.w4.colors.accent};`}
  }
`;function ge({lang:e}){const[a,o]=(0,t.useState)("setup"),[n,r]=(0,t.useState)(()=>{try{const e=localStorage.getItem(u);if(e){const a=JSON.parse(e);return Array.isArray(a)?a:[]}}catch{}return["cities","animals","names","fruits","colors"]}),[f,x]=(0,t.useState)("A"),[b,y]=(0,t.useState)("A"),[w,v]=(0,t.useState)("spinning"),[te,ge]=(0,t.useState)({}),[fe,he]=(0,t.useState)({}),[xe,be]=(0,t.useState)(()=>{try{const e=localStorage.getItem(g);if(e){const a=Number(e);return c.includes(a)?a:60}}catch{}return 60}),[ye,we]=(0,t.useState)(0),[ve,$e]=(0,t.useState)(!1),[je,ke]=(0,t.useState)(!1),[ze,Se]=(0,t.useState)(0),Te=(0,t.useRef)(null),Ae=(0,t.useRef)(null),Ce=(0,t.useRef)("pt"===e?l:d);(0,t.useEffect)(()=>{Ce.current="pt"===e?l:d},[e]),(0,t.useEffect)(()=>{localStorage.setItem(u,JSON.stringify(n))},[n]),(0,t.useEffect)(()=>{localStorage.setItem(g,String(xe))},[xe]),(0,t.useEffect)(()=>()=>{Te.current&&clearInterval(Te.current),Ae.current&&clearInterval(Ae.current)},[]);const Me=(0,t.useCallback)(e=>{r(a=>a.includes(e)?a.filter(a=>a!==e):[...a,e])},[]),Pe=(0,t.useCallback)(a=>{try{const o=new SpeechSynthesisUtterance(a);o.lang="pt"===e?"pt-PT":"en-US",o.rate=.8,o.pitch=1.2,o.volume=1,window.speechSynthesis.cancel(),window.speechSynthesis.speak(o)}catch{}},[e]),Ee=(0,t.useCallback)(()=>{o("roulette"),v("spinning");const e=Ce.current;let a=Math.floor(Math.random()*e.length);Ae.current&&clearInterval(Ae.current),Ae.current=setInterval(()=>{a=(a+1)%e.length,y(e[a])},70)},[]),Be=(0,t.useCallback)(()=>{if("spinning"!==w)return;Ae.current&&clearInterval(Ae.current);const a=function(e){const a="pt"===e?l:d;return a[Math.floor(Math.random()*a.length)]}(e);x(a),y(a),v("landing"),Pe(a),setTimeout(()=>{v("landed"),setTimeout(()=>{o("playing"),ge({}),he({}),ke(!1),xe>0&&(we(xe),$e(!0))},1500)},400)},[e,xe,w,Pe]);(0,t.useEffect)(()=>{if(ve&&0!==xe)return Te.current&&clearInterval(Te.current),Te.current=setInterval(()=>{we(e=>e<=1?(Te.current&&clearInterval(Te.current),$e(!1),ke(!0),o("results"),0):e-1)},1e3),()=>{Te.current&&clearInterval(Te.current)}},[ve,xe]);const Re=(0,t.useCallback)(()=>{Te.current&&clearInterval(Te.current),$e(!1),o("results"),Se(e=>e+1)},[]),Fe=(0,t.useCallback)(()=>{ge({}),he({}),ke(!1),Ee()},[Ee]),Oe=(0,t.useCallback)(()=>{o("setup"),ge({}),he({}),ke(!1),Te.current&&clearInterval(Te.current),$e(!1)},[]),Le=(0,t.useCallback)(e=>{he(a=>({...a,[e]:!a[e]}))},[]),Ie=p.filter(e=>n.includes(e.id)),De=xe>0?ye/xe:1,Ne=(0,t.useRef)(null),Ge=(0,t.useRef)(!1);return(0,s.jsxs)($,{children:[(0,s.jsx)(j,{children:h("title",e)}),"setup"===a&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k,{children:h("chooseCategories",e)}),(0,s.jsx)(z,{children:(0,s.jsxs)(S,{children:[(0,s.jsx)(T,{ok:n.length>=3,children:n.length})," ",h("selected",e),n.length<3&&(0,s.jsxs)("span",{style:{marginLeft:i.w4.spacing.sm,color:"#f0a202",fontSize:i.w4.typography.fontSizeSm},children:["— ",h("minCategories",e)]})]})}),(0,s.jsx)(A,{children:p.map(a=>{const o=n.includes(a.id);return(0,s.jsxs)(C,{selected:o,onClick:()=>Me(a.id),type:"button","aria-pressed":o,children:[o&&(0,s.jsx)(E,{children:"✓"}),(0,s.jsx)(M,{children:a.icon}),(0,s.jsx)(P,{children:"pt"===e?a.label.pt:a.label.en})]},a.id)})}),(0,s.jsx)("div",{style:{marginTop:i.w4.spacing.lg,width:"100%",maxWidth:"720px"},children:(0,s.jsxs)(G,{children:[(0,s.jsxs)(V,{children:[h("timer",e),":"]}),c.map(a=>(0,s.jsx)(H,{active:xe===a,onClick:()=>be(a),type:"button",children:0===a?h("noTimer",e):`${a}${h("seconds",e)}`},a))]})}),(0,s.jsx)(B,{disabled:n.length<3,onClick:n.length>=3?Ee:void 0,type:"button",children:h("startGame",e)})]}),"roulette"===a&&(0,s.jsxs)(R,{children:[(0,s.jsx)(F,{landing:"landing"===w,landed:"landed"===w,children:b}),"spinning"===w&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(O,{children:h("spinning",e)}),(0,s.jsx)(ne,{onTouchStart:e=>{Ne.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:e=>{if(!Ne.current)return;const a=Math.abs(e.changedTouches[0].clientX-Ne.current.x),o=Math.abs(e.changedTouches[0].clientY-Ne.current.y);Ne.current=null,a>8||o>8||(Ge.current=!0,Be())},onClick:()=>{Ge.current?Ge.current=!1:Be()},children:"STOP!"})]}),("landing"===w||"landed"===w)&&(0,s.jsxs)(L,{children:[h("got",e)," ",(0,s.jsxs)("strong",{children:["“",f,"”"]}),"!",(0,s.jsx)("br",{}),(0,s.jsx)("span",{style:{fontSize:"1rem",fontWeight:400,color:i.w4.colors.mainTextMuted},children:h("thinkFast",e)})]})]}),"playing"===a&&(0,s.jsxs)(I,{children:[(0,s.jsxs)(D,{children:[(0,s.jsx)(N,{children:f}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{style:{fontSize:i.w4.typography.fontSizeLg,fontWeight:700,color:i.w4.colors.mainText},children:[h("got",e)," “",f,"”"]}),ze>0&&(0,s.jsxs)("div",{style:{fontSize:i.w4.typography.fontSizeSm,color:i.w4.colors.mainTextMuted},children:[h("roundCount",e)," ",ze+1]})]})]}),xe>0&&(0,s.jsxs)(G,{children:[(0,s.jsx)(q,{pct:De}),(0,s.jsxs)(Y,{pct:De,children:[ye,h("seconds",e)]})]}),Ie.map(a=>{const o=function(e,a,o){const t=m[e];if(!t)return[];const n=t[a];return n?"pt"===o?n.pt:n.en:[]}(a.id,f,e),t=fe[a.id]??!1;return(0,s.jsxs)(_,{children:[(0,s.jsxs)(J,{children:[(0,s.jsxs)(W,{children:[(0,s.jsx)("span",{children:a.icon}),"pt"===e?a.label.pt:a.label.en]}),(0,s.jsx)(U,{onClick:()=>Le(a.id),type:"button",children:h(t?"hideHints":"showHints",e)})]}),(0,s.jsx)(X,{value:te[a.id]??"",onChange:e=>ge(o=>({...o,[a.id]:e.target.value})),placeholder:h("typeAnswer",e),spellCheck:!1,autoCapitalize:"off"}),t&&(0,s.jsxs)(K,{children:[(0,s.jsx)(Q,{children:h("suggestions",e)}),o.length>0?(0,s.jsx)(Z,{children:o.map((e,a)=>(0,s.jsx)(ee,{children:e},a))}):(0,s.jsx)(ae,{children:h("noHints",e)})]})]},a.id)}),(0,s.jsx)(oe,{type:"button",onTouchStart:e=>{Ne.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},onTouchEnd:e=>{if(!Ne.current)return;const a=Math.abs(e.changedTouches[0].clientX-Ne.current.x),o=Math.abs(e.changedTouches[0].clientY-Ne.current.y);Ne.current=null,a>8||o>8||(Ge.current=!0,Re())},onClick:()=>{Ge.current?Ge.current=!1:Re()},children:h("stopBtn",e)})]}),"results"===a&&(0,s.jsxs)(re,{children:[(0,s.jsxs)(ie,{children:[(0,s.jsx)(se,{children:h(je?"timeUp":"roundOver",e)}),(0,s.jsxs)(le,{children:[h("got",e)," “",f,"”",ze>0&&` · ${h("roundCount",e)} ${ze+1}`]})]}),Ie.map(a=>(0,s.jsxs)(de,{children:[(0,s.jsxs)(ce,{children:[(0,s.jsx)("span",{children:a.icon}),"pt"===e?a.label.pt:a.label.en]}),(0,s.jsx)(pe,{children:te[a.id]||(0,s.jsx)("span",{style:{color:i.w4.colors.mainTextMuted,fontStyle:"italic"},children:"—"})})]},a.id)),(0,s.jsxs)(me,{children:[(0,s.jsx)(ue,{type:"button",onClick:Fe,children:h("newLetter",e)}),(0,s.jsx)(ue,{type:"button",variant:"secondary",onClick:Oe,children:h("changeCategories",e)})]})]})]})}},56574(e,a,o){o.d(a,{a:()=>ee});var t=o(27359),n=o(53233),r=o(77207),i=o(60894),s=o(65723);const l="atlantis-textadventure-progress";function d(){try{const e=localStorage.getItem(l);return e?JSON.parse(e):{}}catch{return{}}}const c=[{id:"castle",emoji:"🏰",title:{pt:"O Castelo Misterioso",en:"The Mysterious Castle"},description:{pt:"Explora um castelo mágico cheio de segredos, magos e criaturas encantadas.",en:"Explore a magical castle full of secrets, wizards and enchanted creatures."},color:"#7c5cbf",totalEndings:3,scenes:[{id:"castle_start",emoji:"🏰",text:{pt:"Você chega à porta de um enorme castelo misterioso. As paredes são de pedra cinzenta e há hera crescendo por toda parte. Uma brisa fria sopra pela floresta ao redor. Você ouve um barulho estranho vindo de dentro.",en:"You arrive at the gate of an enormous mysterious castle. The walls are grey stone with ivy growing everywhere. A cool breeze blows through the surrounding forest. You hear a strange sound coming from inside."},choices:[{label:{pt:"Entrar pela porta principal",en:"Enter through the main door"},next:"castle_main_door"},{label:{pt:"Procurar uma janela aberta",en:"Look for an open window"},next:"castle_window"},{label:{pt:"Chamar por alguém",en:"Call out to someone"},next:"castle_call"}]},{id:"castle_main_door",emoji:"🚪",text:{pt:"A porta enorme range ao abrir. Dentro, você encontra um grande salão com tapeçarias coloridas nas paredes. No centro, uma escada larga sobe para o andar de cima. Mas também há uma porta pequena à esquerda.",en:"The huge door creaks as it opens. Inside, you find a grand hall with colourful tapestries on the walls. In the centre, a wide staircase leads upstairs. But there is also a small door to the left."},choices:[{label:{pt:"Subir a escada",en:"Climb the staircase"},next:"castle_upstairs"},{label:{pt:"Abrir a porta pequena",en:"Open the small door"},next:"castle_kitchen"}]},{id:"castle_window",emoji:"🪟",text:{pt:"Você encontra uma janela entreaberta no andar térreo. Ao espiar para dentro, vê uma biblioteca cheia de livros enormes e um gato preto dormindo sobre uma mesa. Você entra sem fazer barulho.",en:"You find a slightly open window on the ground floor. Peeking inside, you see a library full of enormous books and a black cat sleeping on a table. You climb in without making a sound."},choices:[{label:{pt:"Explorar a biblioteca",en:"Explore the library"},next:"castle_library"},{label:{pt:"Acordar o gato",en:"Wake the cat"},next:"castle_cat"}]},{id:"castle_call",emoji:"📣",text:{pt:'Você grita "Olá! Tem alguém aí?" e sua voz ecoa pelo castelo. De repente, uma janela lá em cima se abre e uma velhinha de cabelos brancos aparece. Ela sorri e joga uma chave dourada para você!',en:'You shout "Hello! Is anyone there?" and your voice echoes through the castle. Suddenly, a window opens high above and a little old lady with white hair appears. She smiles and tosses a golden key down to you!'},choices:[{label:{pt:"Usar a chave dourada na porta",en:"Use the golden key on the door"},next:"castle_golden_room"},{label:{pt:"Perguntar à velhinha quem ela é",en:"Ask the old lady who she is"},next:"castle_witch"}]},{id:"castle_upstairs",emoji:"🌟",text:{pt:'No topo da escada, você encontra um quarto cheio de brilho dourado. No centro há um baú antigo com um cartão que diz: "Para o corajoso aventureiro — abra e descubra!" Seu coração bate mais rápido.',en:'At the top of the staircase, you find a room filled with golden glow. In the centre is an old chest with a card that reads: "For the brave adventurer — open and discover!" Your heart beats faster.'},choices:[{label:{pt:"Abrir o baú",en:"Open the chest"},next:"castle_end_treasure"},{label:{pt:"Chamar os amigos antes de abrir",en:"Call friends before opening"},next:"castle_end_friends"}]},{id:"castle_kitchen",emoji:"🍲",text:{pt:'A porta pequena leva a uma cozinha quentinha e cheirosa. Uma sopa deliciosa fervilha no fogão. Há um bilhete na mesa: "Ajude-se! — O Mago do Castelo". Você come um pouco e se sente muito mais corajoso!',en:'The small door leads to a warm, fragrant kitchen. A delicious soup bubbles on the stove. There is a note on the table: "Help yourself! — The Castle Wizard". You eat some and feel much braver!'},choices:[{label:{pt:"Ir procurar o mago",en:"Go look for the wizard"},next:"castle_wizard"},{label:{pt:"Explorar mais o castelo",en:"Explore more of the castle"},next:"castle_upstairs"}]},{id:"castle_library",emoji:"📚",text:{pt:'Os livros na biblioteca são enormes e têm títulos como "Feitiços para Iniciantes" e "Dragões: Um Guia Completo". Um livro começa a brilhar quando você se aproxima. Ele se abre sozinho numa página especial!',en:'The books in the library are enormous with titles like "Spells for Beginners" and "Dragons: A Complete Guide". One book begins to glow as you approach. It opens by itself to a special page!'},choices:[{label:{pt:"Ler o livro brilhante",en:"Read the glowing book"},next:"castle_spell"},{label:{pt:"Pegar o livro sobre dragões",en:"Grab the dragon book"},next:"castle_dragon"}]},{id:"castle_cat",emoji:"🐱",text:{pt:'O gato abre os olhos lentamente e fala: "Finalmente! Estava esperando por você." Você quase cai de susto! O gato explica que é o guardião do castelo e que pode mostrar o tesouro secreto.',en:'The cat opens its eyes slowly and says: "Finally! I have been waiting for you." You nearly fall over in shock! The cat explains it is the castle guardian and can show you the secret treasure.'},choices:[{label:{pt:"Seguir o gato mágico",en:"Follow the magic cat"},next:"castle_end_treasure"},{label:{pt:"Perguntar como o gato fala",en:"Ask how the cat speaks"},next:"castle_wizard"}]},{id:"castle_golden_room",emoji:"✨",text:{pt:'A chave dourada abre uma porta secreta no jardim! Dentro há um quarto redondo cheio de estrelas brilhando no tecto, mesmo durante o dia. Uma nota diz: "Este quarto pertence a quem é curioso e corajoso."',en:'The golden key opens a secret door in the garden! Inside is a round room full of stars shining on the ceiling, even during the day. A note reads: "This room belongs to whoever is curious and brave."'},choices:[{label:{pt:"Deitar e observar as estrelas",en:"Lie down and watch the stars"},next:"castle_end_stars"},{label:{pt:"Procurar mais segredos no quarto",en:"Search for more secrets in the room"},next:"castle_end_treasure"}]},{id:"castle_witch",emoji:"🧙‍♀️",text:{pt:'A velhinha desce pelo jardim e se apresenta: "Sou a Bruxinha Margarida! Cuido deste castelo há 200 anos." Ela sorri: "Mas estou tão sozinha... Queres ficar para um chá e me contar histórias do mundo lá fora?"',en:'The little old lady comes down through the garden and introduces herself: "I am Witch Marguerite! I have been looking after this castle for 200 years." She smiles: "But I am so lonely... Will you stay for tea and tell me stories from the outside world?"'},choices:[{label:{pt:"Ficar para o chá e fazer amizade",en:"Stay for tea and make a friend"},next:"castle_end_friends"},{label:{pt:"Entrar e explorar o castelo dela",en:"Go in and explore her castle"},next:"castle_end_stars"}]},{id:"castle_spell",emoji:"🪄",text:{pt:"O livro ensina um feitiço simples de luz. Você segue as instruções e de repente a palma da sua mão brilha! A magia funciona! O castelo inteiro se ilumina e você vê um mapa secreto desenhado no chão.",en:"The book teaches a simple light spell. You follow the instructions and suddenly your palm glows! The magic works! The whole castle lights up and you see a secret map drawn on the floor."},choices:[{label:{pt:"Seguir o mapa até o tesouro",en:"Follow the map to the treasure"},next:"castle_end_treasure"},{label:{pt:"Guardar o mapa para voltar depois",en:"Keep the map and come back later"},next:"castle_end_stars"}]},{id:"castle_dragon",emoji:"🐉",text:{pt:"O livro se abre numa página com um dragão pequenino desenhado. De repente o dragão sai do livro! Mas é muito pequeno — cabe na sua mão. Ele ronrona como um gatinho e se torna seu amigo.",en:"The book opens to a page with a tiny dragon drawn on it. Suddenly the dragon leaps out of the book! But it is very tiny — small enough to fit in your hand. It purrs like a kitten and becomes your friend."},choices:[{label:{pt:"Levar o dragão em casa como animal de estimação",en:"Take the dragon home as a pet"},next:"castle_end_friends"},{label:{pt:"Pedir ao dragão para mostrar o castelo",en:"Ask the dragon to show you the castle"},next:"castle_end_treasure"}]},{id:"castle_wizard",emoji:"🧙",text:{pt:'Você encontra o Mago do Castelo na torre mais alta. É um senhor alegre com barba azul e chapéu de estrelas. Ele fica muito feliz com sua visita: "Não recebia visitantes há séculos! Vou te ensinar um feitiço de presente!"',en:"You find the Castle Wizard in the tallest tower. He is a jolly gentleman with a blue beard and a star-covered hat. He is thrilled by your visit: \"I haven't had visitors in centuries! I'll teach you a spell as a gift!\""},choices:[{label:{pt:"Aprender o feitiço e explorar o castelo",en:"Learn the spell and explore the castle"},next:"castle_end_stars"},{label:{pt:"Convidar o mago para jantar na sua casa",en:"Invite the wizard to dinner at your home"},next:"castle_end_friends"}]},{id:"castle_end_treasure",emoji:"💎",text:{pt:"Você descobriu o Tesouro do Castelo Misterioso! Baús cheios de joias coloridas, livros de magia e brinquedos encantados que nunca existiram antes. O mago diz que tudo pertence a você porque você foi corajoso e curioso. Que aventura incrível!",en:"You discovered the Treasure of the Mysterious Castle! Chests full of colourful jewels, magic books and enchanted toys that have never existed before. The wizard says it all belongs to you because you were brave and curious. What an incredible adventure!"},isEnding:!0,endingType:"good"},{id:"castle_end_friends",emoji:"🤝",text:{pt:"Você fez os melhores amigos do mundo neste castelo! A Bruxinha Margarida, o Mago da Barba Azul, o gato falante e até um dragãozinho. Eles te convidam para voltar sempre. Às vezes os maiores tesouros são as amizades que fazemos!",en:"You made the best friends in the world in this castle! Witch Marguerite, the Blue-Beard Wizard, the talking cat, and even a tiny dragon. They invite you to come back whenever you like. Sometimes the greatest treasures are the friendships we make!"},isEnding:!0,endingType:"good"},{id:"castle_end_stars",emoji:"🌌",text:{pt:"Você descobre o segredo mais bonito do castelo: um quarto com um telescópio mágico que mostra não só as estrelas, mas também as histórias que acontecem nelas. Você fica tão encantado que decide voltar todos os dias para aprender mais sobre o universo.",en:"You discover the most beautiful secret of the castle: a room with a magical telescope that shows not just stars but also the stories happening in them. You are so enchanted that you decide to come back every day to learn more about the universe."},isEnding:!0,endingType:"neutral"}]},{id:"space",emoji:"🚀",title:{pt:"Missão Espacial",en:"Space Mission"},description:{pt:"Sê o capitão de uma nave espacial e descobre planetas incríveis e seres amigáveis.",en:"Be the captain of a spaceship and discover incredible planets and friendly beings."},color:"#1e6fa8",totalEndings:4,scenes:[{id:"space_start",emoji:"🚀",text:{pt:"Você é o capitão da nave espacial Estrela Dourada! A nave está a orbitar um planeta desconhecido de cor roxa. Os sensores detectam vida lá em baixo, mas também um sinal de socorro vindo de uma lua próxima.",en:"You are the captain of the spaceship Golden Star! The ship is orbiting an unknown purple planet. Sensors detect life below, but also a distress signal coming from a nearby moon."},choices:[{label:{pt:"Descer ao planeta roxo",en:"Land on the purple planet"},next:"space_planet"},{label:{pt:"Ir até à lua do sinal de socorro",en:"Head to the moon with the distress signal"},next:"space_moon"},{label:{pt:"Analisar melhor os dados primeiro",en:"Analyse the data more carefully first"},next:"space_analyse"}]},{id:"space_planet",emoji:"🪐",text:{pt:"O planeta roxo é cheio de plantas gigantes que brilham de noite! Criaturas pequenas e amigáveis chamadas Puffs correm ao seu encontro. Elas falam numa língua estranha mas parecem muito alegres por te ver.",en:"The purple planet is full of giant plants that glow at night! Small, friendly creatures called Puffs come running towards you. They speak a strange language but seem very happy to see you."},choices:[{label:{pt:"Tentar comunicar com os Puffs",en:"Try to communicate with the Puffs"},next:"space_puffs"},{label:{pt:"Explorar a floresta brilhante",en:"Explore the glowing forest"},next:"space_forest"}]},{id:"space_moon",emoji:"🌕",text:{pt:"A lua tem uma superfície cinzenta e cheia de crateras. O sinal vem de uma cúpula de vidro escondida atrás de uma colina de pedra. Dentro, você vê um robô pequenino que acena para você!",en:"The moon has a grey surface full of craters. The signal comes from a glass dome hidden behind a stone hill. Inside, you spot a tiny robot waving at you!"},choices:[{label:{pt:"Entrar na cúpula para ajudar o robô",en:"Enter the dome to help the robot"},next:"space_robot"},{label:{pt:"Pedir reforços antes de entrar",en:"Call for backup before entering"},next:"space_analyse"}]},{id:"space_analyse",emoji:"💻",text:{pt:"Você estuda os dados com cuidado. Os computadores da nave revelam uma surpresa: o planeta roxo e a lua estão conectados! Um túnel subterrâneo liga os dois. Alguém — ou algo — mora nos dois lugares ao mesmo tempo!",en:"You study the data carefully. The ship's computers reveal a surprise: the purple planet and the moon are connected! An underground tunnel links the two. Someone — or something — lives in both places at once!"},choices:[{label:{pt:"Ir ao planeta para procurar a entrada do túnel",en:"Go to the planet to look for the tunnel entrance"},next:"space_tunnel"},{label:{pt:"Mandar uma mensagem amigável pelo rádio",en:"Send a friendly message by radio"},next:"space_radio"}]},{id:"space_puffs",emoji:"👽",text:{pt:"Com gestos e sorrisos, você começa a aprender a língua dos Puffs! Eles se chamam Bloop, Fleep e Zoop. Eles explicam que são os guardiões de uma semente especial que pode crescer em qualquer planeta do universo.",en:"With gestures and smiles, you begin to learn the Puffs' language! They are called Bloop, Fleep and Zoop. They explain they are guardians of a special seed that can grow on any planet in the universe."},choices:[{label:{pt:"Receber a semente como presente",en:"Accept the seed as a gift"},next:"space_end_seeds"},{label:{pt:"Ajudá-los a plantar a semente num novo planeta",en:"Help them plant the seed on a new planet"},next:"space_end_friendship"}]},{id:"space_forest",emoji:"🌿",text:{pt:"A floresta brilhante é mágica! As plantas emitem sons musicais ao serem tocadas. Você descobre que toda a floresta é um instrumento musical gigante. De repente, uma melodia incrível começa a tocar quando você toca as plantas na ordem certa.",en:"The glowing forest is magical! The plants make musical sounds when touched. You discover the whole forest is one giant musical instrument. Suddenly, an incredible melody begins to play when you touch the plants in the right order."},choices:[{label:{pt:"Gravar a música para levar para casa",en:"Record the music to take home"},next:"space_end_music"},{label:{pt:"Chamar os Puffs para dançar",en:"Call the Puffs to come dance"},next:"space_end_friendship"}]},{id:"space_robot",emoji:"🤖",text:{pt:"O robô se chama R-7 e ficou preso na cúpula há 50 anos quando a sua nave avariou. Ele ficou a estudar as estrelas sozinho todo esse tempo. Está tão feliz que começa a dançar! Ele tem mapas de 1000 planetas desconhecidos!",en:"The robot is called R-7 and got stuck in the dome 50 years ago when its ship broke down. It has been studying the stars alone all that time. It is so happy that it starts dancing! It has maps of 1000 unknown planets!"},choices:[{label:{pt:"Levar o R-7 a bordo da sua nave",en:"Bring R-7 aboard your ship"},next:"space_end_friendship"},{label:{pt:"Usar os mapas para explorar novos planetas juntos",en:"Use the maps to explore new planets together"},next:"space_end_exploration"}]},{id:"space_tunnel",emoji:"🕳️",text:{pt:"Você encontra a entrada do túnel escondida debaixo de uma rocha enorme. É um tubo de vidro que brilha de azul por dentro. Ao entrar, você escorrega rapidamente até um laboratório subterrâneo incrível!",en:"You find the tunnel entrance hidden under an enormous rock. It is a glass tube that glows blue inside. When you enter, you slide quickly down to an incredible underground laboratory!"},choices:[{label:{pt:"Explorar o laboratório",en:"Explore the laboratory"},next:"space_end_exploration"},{label:{pt:"Usar o laboratório para fazer contacto com outros planetas",en:"Use the lab to make contact with other planets"},next:"space_end_seeds"}]},{id:"space_radio",emoji:"📡",text:{pt:'Você envia uma mensagem simpática: "Olá, viemos em paz!" Uns segundos depois, recebe uma resposta com música! É uma melodia linda de um ser chamado Cosmo que mora em ambos os mundos e está muito curioso sobre a Terra.',en:'You send a friendly message: "Hello, we come in peace!" A few seconds later you receive a reply with music! It is a beautiful melody from a being called Cosmo who lives in both worlds and is very curious about Earth.'},choices:[{label:{pt:"Trocar músicas e histórias com Cosmo",en:"Exchange music and stories with Cosmo"},next:"space_end_music"},{label:{pt:"Convidar Cosmo a visitar a Terra",en:"Invite Cosmo to visit Earth"},next:"space_end_friendship"}]},{id:"space_end_exploration",emoji:"🗺️",text:{pt:"Com os mapas incríveis que encontrou, você se torna o maior explorador espacial de todos os tempos! A sua nave visita centenas de planetas novos e cada um tem maravilhas nunca vistas. Você escreve um livro que todas as crianças da galáxia lêem!",en:"With the incredible maps you found, you become the greatest space explorer of all time! Your ship visits hundreds of new planets and each one has wonders never seen before. You write a book that every child in the galaxy reads!"},isEnding:!0,endingType:"good"},{id:"space_end_friendship",emoji:"🌈",text:{pt:"Você faz os melhores amigos do universo: os Puffs Bloop, Fleep e Zoop, o robô R-7 e o misterioso Cosmo! Eles visitam a Terra e ficam encantados com o planeta azul. Vocês criam uma aliança galáctica de amizade e aventuras!",en:"You make the best friends in the universe: the Puffs Bloop, Fleep and Zoop, the robot R-7, and the mysterious Cosmo! They visit Earth and are enchanted by the blue planet. Together you create a galactic alliance of friendship and adventures!"},isEnding:!0,endingType:"good"},{id:"space_end_music",emoji:"🎵",text:{pt:"Você traz para a Terra a música mais bonita do universo. Quando ela toca, as pessoas ficam em paz e felizes. Cientistas descobrem que a melodia contém a linguagem universal que todos os seres do cosmos entendem. Você mudou o mundo com música!",en:"You bring to Earth the most beautiful music in the universe. When it plays, people feel peaceful and happy. Scientists discover the melody contains the universal language that all beings in the cosmos understand. You changed the world with music!"},isEnding:!0,endingType:"neutral"},{id:"space_end_seeds",emoji:"🌱",text:{pt:"A semente especial dos Puffs cresce em todos os planetas! Em pouco tempo, cada mundo tem uma floresta brilhante e musical. Os Puffs te nomeiam Guardião das Sementes do Universo. É uma responsabilidade enorme, mas você está pronto!",en:"The Puffs' special seed grows on every planet! Soon, every world has a glowing, musical forest. The Puffs name you Guardian of the Universe's Seeds. It is an enormous responsibility, but you are ready!"},isEnding:!0,endingType:"neutral"}]},{id:"island",emoji:"🌊",title:{pt:"A Ilha do Tesouro",en:"Treasure Island"},description:{pt:"Segue um mapa antigo até uma ilha misteriosa e descobre o que o tesouro realmente é.",en:"Follow an old map to a mysterious island and discover what the treasure really is."},color:"#2d7a4f",totalEndings:3,scenes:[{id:"island_start",emoji:"🗺️",text:{pt:"Você encontrou um velho mapa numa garrafa à beira-mar! O mapa mostra uma ilha misteriosa com um X marcando onde está escondido um tesouro. Você tem um barco pequeno e dois amigos prontos para a aventura!",en:"You found an old map in a bottle by the sea! The map shows a mysterious island with an X marking where a treasure is hidden. You have a small boat and two friends ready for adventure!"},choices:[{label:{pt:"Seguir o mapa directamente até ao X",en:"Follow the map straight to the X"},next:"island_direct"},{label:{pt:"Explorar a ilha primeiro para conhecê-la",en:"Explore the island first to get to know it"},next:"island_explore"},{label:{pt:"Perguntar a um pescador local sobre a ilha",en:"Ask a local fisherman about the island"},next:"island_fisherman"}]},{id:"island_direct",emoji:"🧭",text:{pt:"Você segue o mapa com cuidado pela floresta tropical. Os sons dos pássaros coloridos enchem o ar. De repente, o caminho divide-se em dois: um desce para a praia, o outro sobe pela montanha.",en:"You follow the map carefully through the tropical forest. The sounds of colourful birds fill the air. Suddenly the path splits in two: one goes down to the beach, the other climbs up the mountain."},choices:[{label:{pt:"Ir pela praia",en:"Go along the beach"},next:"island_beach"},{label:{pt:"Subir a montanha",en:"Climb the mountain"},next:"island_mountain"}]},{id:"island_explore",emoji:"🌴",text:{pt:'Explorando a ilha, você encontra uma aldeia escondida na floresta! Os moradores são crianças e adultos que vivem ali há gerações. A anciã da aldeia olha para o seu mapa e diz: "Conheço este tesouro. É especial!"',en:'Exploring the island, you find a hidden village in the forest! The residents are children and adults who have lived there for generations. The village elder looks at your map and says: "I know this treasure. It is special!"'},choices:[{label:{pt:"Ouvir o que a anciã sabe sobre o tesouro",en:"Listen to what the elder knows about the treasure"},next:"island_elder"},{label:{pt:"Convidar a aldeia para ir contigo",en:"Invite the village to come with you"},next:"island_together"}]},{id:"island_fisherman",emoji:"🎣",text:{pt:'O pescador olha para o mapa e arregalha os olhos. "Ah! Esse é o Mapa do Capitão Estrela! Ele escondeu o tesouro aqui há 300 anos. Mas cuidado com a Lagoa dos Peixes Voadores — eles adoram brincar com viajantes!"',en:'The fisherman looks at the map and his eyes go wide. "Ah! That is Captain Star\'s Map! He hid the treasure here 300 years ago. But beware of the Flying Fish Lagoon — they love to play tricks on travellers!"'},choices:[{label:{pt:"Ir ver a lagoa dos peixes voadores",en:"Go see the flying fish lagoon"},next:"island_lagoon"},{label:{pt:"Pedir ao pescador para guiar você até ao X",en:"Ask the fisherman to guide you to the X"},next:"island_direct"}]},{id:"island_beach",emoji:"🐚",text:{pt:'A praia é lindíssima com areia dourada e conchas coloridas. Uma tartaruga gigante dorme na areia. Quando você passa, ela acorda e fala: "Boa tarde! Procura o tesouro, não é? Eu sei onde fica!"',en:'The beach is beautiful with golden sand and colourful shells. A giant turtle is sleeping on the sand. When you walk past, it wakes up and says: "Good afternoon! You are looking for the treasure, aren\'t you? I know where it is!"'},choices:[{label:{pt:"Seguir a tartaruga",en:"Follow the turtle"},next:"island_turtle"},{label:{pt:"Agradecer mas continuar pelo mapa",en:"Thank the turtle but continue with the map"},next:"island_mountain"}]},{id:"island_mountain",emoji:"⛰️",text:{pt:"No topo da montanha, há uma vista incrível de toda a ilha! E você vê claramente onde está o X do mapa — uma gruta escondida atrás de uma cascata. Mas para chegar lá, precisa de atravessar uma ponte de lianas sobre um rio.",en:"At the top of the mountain, there is an incredible view of the whole island! And you can clearly see where the X on the map is — a cave hidden behind a waterfall. But to get there, you need to cross a vine bridge over a river."},choices:[{label:{pt:"Atravessar a ponte de lianas",en:"Cross the vine bridge"},next:"island_cave"},{label:{pt:"Descer pela cascata com uma corda",en:"Climb down by the waterfall with a rope"},next:"island_waterfall"}]},{id:"island_elder",emoji:"👵",text:{pt:'A anciã conta que o tesouro do Capitão Estrela não é ouro — é um cofre de sementes raras de plantas que curam qualquer doença! "Foram roubadas do nosso povo há 300 anos. Se as trouver de volta, a nossa aldeia florescerá de novo!"',en:'The elder explains that Captain Star\'s treasure is not gold — it is a chest of rare seeds from plants that heal any illness! "They were stolen from our people 300 years ago. If you bring them back, our village will flourish again!"'},choices:[{label:{pt:"Prometer devolver o tesouro ao povo da ilha",en:"Promise to return the treasure to the island people"},next:"island_together"},{label:{pt:"Ir buscar o tesouro e partilhá-lo",en:"Go get the treasure and share it"},next:"island_cave"}]},{id:"island_together",emoji:"👫",text:{pt:"Toda a aldeia vai convosco! É uma festa animada a caminhar pela floresta. As crianças cantam, os adultos contam histórias antigas. Juntos, encontram o caminho até à gruta mais depressa e sem nenhum perigo.",en:"The whole village comes with you! It is a joyful procession through the forest. The children sing, the adults tell old stories. Together, you find the path to the cave faster and without any danger."},choices:[{label:{pt:"Abrir a gruta juntos",en:"Open the cave together"},next:"island_end_village"},{label:{pt:"Deixar a anciã entrar primeiro",en:"Let the elder enter first"},next:"island_end_village"}]},{id:"island_lagoon",emoji:"🐟",text:{pt:'A Lagoa dos Peixes Voadores é espectacular! Os peixes saltam para fora de água e voam pelo ar. Um peixe dourado pousa no seu ombro e cochicha: "Sigo o X do teu mapa — sigo eu!" e voa em frente a guiar o caminho.',en:'The Flying Fish Lagoon is spectacular! The fish leap out of the water and fly through the air. A golden fish lands on your shoulder and whispers: "I follow your map\'s X — I follow! Follow me!" and flies ahead to guide the way.'},choices:[{label:{pt:"Seguir o peixe dourado",en:"Follow the golden fish"},next:"island_cave"},{label:{pt:"Nadar com os peixes voadores primeiro",en:"Swim with the flying fish first"},next:"island_waterfall"}]},{id:"island_turtle",emoji:"🐢",text:{pt:'A tartaruga leva você por um caminho secreto pela floresta que nenhum mapa mostra. Em poucos minutos chegam a uma gruta escondida. "Eu guardo este segredo há 100 anos," diz ela orgulhosa.',en:'The turtle leads you along a secret path through the forest that no map shows. In just a few minutes you arrive at a hidden cave. "I have kept this secret for 100 years," she says proudly.'},choices:[{label:{pt:"Entrar na gruta",en:"Enter the cave"},next:"island_cave"},{label:{pt:"Agradecer e dar à tartaruga a sua melhor concha",en:"Thank the turtle and give her your best shell"},next:"island_end_friends"}]},{id:"island_cave",emoji:"🌊",text:{pt:"A gruta atrás da cascata é mágica! As paredes brilham com pedras coloridas. No centro, sobre um pedestal de coral, repousa o cofre do Capitão Estrela. Está coberto de conchas e estrelas-do-mar adormecidas.",en:"The cave behind the waterfall is magical! The walls shimmer with colourful stones. In the centre, on a coral pedestal, rests Captain Star's chest. It is covered in shells and sleeping starfish."},choices:[{label:{pt:"Abrir o cofre",en:"Open the chest"},next:"island_end_treasure"},{label:{pt:"Ler a inscrição gravada no cofre primeiro",en:"Read the inscription carved on the chest first"},next:"island_end_village"}]},{id:"island_waterfall",emoji:"💧",text:{pt:"A cascata forma uma piscina natural linda e fresca. Você nada até ao fundo e descobre um túnel subaquático que leva directamente para dentro da gruta do tesouro! É o atalho secreto que o Capitão Estrela usava.",en:"The waterfall forms a beautiful cool natural pool. You swim to the bottom and discover an underwater tunnel leading straight into the treasure cave! It is the secret shortcut that Captain Star used."},choices:[{label:{pt:"Atravessar o túnel subaquático",en:"Swim through the underwater tunnel"},next:"island_end_treasure"},{label:{pt:"Voltar e partilhar a descoberta com a aldeia",en:"Go back and share the discovery with the village"},next:"island_end_village"}]},{id:"island_end_treasure",emoji:"💰",text:{pt:"O cofre está cheio de moedas douradas, joias brilhantes e mapas de ilhas secretas ao redor do mundo! Você decide partilhar o tesouro com a aldeia da ilha e com as famílias dos pescadores. Toda a gente fica feliz e você é declarado Herói da Ilha!",en:"The chest is full of gold coins, shining jewels and maps of secret islands around the world! You decide to share the treasure with the island village and the fishermen's families. Everyone is happy and you are declared Hero of the Island!"},isEnding:!0,endingType:"good"},{id:"island_end_village",emoji:"🌺",text:{pt:"O cofre continha as sementes mágicas que pertenciam ao povo da ilha! Ao plantá-las, a floresta começa a florescer com cores que nunca tinham visto. A aldeia organiza uma festa enorme em sua honra e você é convidado a ficar para sempre!",en:"The chest contained the magic seeds that belonged to the island people! When planted, the forest begins to bloom with colours never seen before. The village throws a huge party in your honour and you are invited to stay forever!"},isEnding:!0,endingType:"good"},{id:"island_end_friends",emoji:"🐠",text:{pt:"A tartaruga, os peixes voadores e o povo da ilha tornam-se os seus melhores amigos. Você volta a visitar a ilha todos os verões e cada vez encontra novos segredos escondidos. A ilha é um lugar mágico que só os corações bons conseguem encontrar.",en:"The turtle, the flying fish and the island people become your best friends. You visit the island every summer and each time you find new hidden secrets. The island is a magical place that only kind hearts can find."},isEnding:!0,endingType:"neutral"}]}],p=r.keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,m=r.keyframes`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-12px); }
`,u=r.keyframes`
  0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
`,g=r.keyframes`
  0%   { opacity: 0; transform: scale(0.5); }
  70%  { opacity: 1; transform: scale(1.12); }
  100% { opacity: 1; transform: scale(1); }
`,f=r.keyframes`
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,h=n.default.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: ${({accentColor:e})=>e?`radial-gradient(ellipse at top left, ${e}18 0%, ${i.w4.colors.mainBg} 55%)`:i.w4.colors.mainBg};
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
  transition: background 0.4s ease;
`,x=n.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.lg};
  border-bottom: 1px solid ${i.w4.colors.border};
  flex-shrink: 0;
`,b=n.default.button`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.xs};
  background: none;
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  min-height: 44px;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  &:hover {
    color: ${i.w4.colors.mainText};
    border-color: ${i.w4.colors.accent};
    background: ${i.w4.colors.surface};
  }
`,y=n.default.h1`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  margin: 0;
`,w=n.default.div`
  flex: 1;
  overflow-y: auto;
  padding: ${i.w4.spacing.xl} ${i.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
`,v=n.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${i.w4.spacing.lg};
  width: 100%;
  max-width: 900px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 480px;
  }
`,$=n.default.h2`
  font-size: ${i.w4.typography.fontSizeXl};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  text-align: center;
  margin-bottom: ${i.w4.spacing.sm};
`,j=n.default.p`
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
  margin-bottom: ${i.w4.spacing.xl};
`,k=n.default.button`
  background: linear-gradient(
    135deg,
    ${i.w4.colors.surface} 0%,
    ${({accentColor:e})=>e}12 100%
  );
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.xl} ${i.w4.spacing.lg};
  cursor: pointer;
  text-align: left;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.sm};
  animation: ${p} 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    border-color: ${({accentColor:e})=>e};
    box-shadow: 0 8px 32px ${({accentColor:e})=>e}40;
    background: linear-gradient(
      135deg,
      ${i.w4.colors.surface} 0%,
      ${({accentColor:e})=>e}20 100%
    );
  }
`,z=n.default.span`
  font-size: 48px;
  line-height: 1;
  display: block;
  margin-bottom: ${i.w4.spacing.sm};
`,S=n.default.h3`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  margin: 0;
`,T=n.default.p`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  margin: 0;
  line-height: ${i.w4.typography.lineHeightBase};
`,A=n.default.div`
  display: inline-flex;
  align-items: center;
  gap: ${i.w4.spacing.xs};
  font-size: 12px;
  font-weight: 600;
  padding: 2px ${i.w4.spacing.sm};
  border-radius: 100px;
  margin-top: ${i.w4.spacing.xs};
  background: ${({hasProgress:e})=>e?"rgba(88, 166, 255, 0.15)":"rgba(139, 148, 158, 0.1)"};
  color: ${({hasProgress:e})=>e?i.w4.colors.accent:i.w4.colors.mainTextMuted};
  border: 1px solid ${({hasProgress:e})=>e?"rgba(88, 166, 255, 0.3)":i.w4.colors.border};
`,C=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  animation: ${({exiting:e})=>e?m:p} 0.25s ease forwards;
`,M=n.default.div`
  font-size: 80px;
  line-height: 1;
  margin-bottom: ${i.w4.spacing.lg};
  animation: ${g} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  @media (max-width: 768px) {
    font-size: 60px;
  }
`,P=n.default.div`
  font-size: 18px;
  line-height: 1.75;
  color: ${i.w4.colors.mainText};
  text-align: center;
  margin-bottom: ${i.w4.spacing.xl};
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.lg} ${i.w4.spacing.xl};
  min-height: 5em;
  position: relative;
  animation: ${p} 0.5s ease both;
  @media (max-width: 768px) {
    font-size: 16px;
    padding: ${i.w4.spacing.md};
  }
`,E=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.sm};
  width: 100%;
`,B=n.default.button`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-left: 3px solid ${i.w4.colors.accent};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeMd};
  font-family: ${i.w4.typography.fontFamily};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.lg};
  text-align: left;
  cursor: pointer;
  min-height: 56px;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
  line-height: ${i.w4.typography.lineHeightBase};
  opacity: 0;
  animation: ${p} 0.25s ease forwards;
  animation-delay: ${({index:e})=>100*e}ms;
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  &:hover {
    background: rgba(88, 166, 255, 0.08);
    border-color: ${i.w4.colors.accent};
    border-left-color: ${i.w4.colors.accentHover};
    transform: translateX(4px);
  }
  @media (max-width: 768px) {
    font-size: ${i.w4.typography.fontSizeBase};
  }
`,R=n.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  margin-bottom: ${i.w4.spacing.xl};
  width: 100%;
`,F=n.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,O=n.default.span`
  color: ${i.w4.colors.accent};
  font-weight: 600;
`,L=n.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
`,I=n.default.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({filled:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  transition: background 0.2s ease;
`,D=n.default.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${i.w4.colors.accent};
  color: ${i.w4.colors.mainBg};
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
`,N=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  text-align: center;
  animation: ${p} 0.4s ease;
`,G=r.keyframes`
  0%   { opacity: 0; transform: scale(0.3) rotate(-15deg); }
  60%  { opacity: 1; transform: scale(1.2) rotate(8deg); }
  80%  { transform: scale(0.95) rotate(-3deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`,V=n.default.div`
  font-size: 100px;
  line-height: 1;
  margin-bottom: ${i.w4.spacing.lg};
  animation: ${G} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
`,H=n.default.div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: ${i.w4.spacing.xs} ${i.w4.spacing.md};
  border-radius: 100px;
  margin-bottom: ${i.w4.spacing.md};
  background: ${({endingType:e})=>"good"===e?"rgba(63, 185, 80, 0.15)":"rgba(88, 166, 255, 0.12)"};
  color: ${({endingType:e})=>"good"===e?"#3fb950":i.w4.colors.accent};
  border: 1px solid ${({endingType:e})=>"good"===e?"rgba(63, 185, 80, 0.3)":"rgba(88, 166, 255, 0.3)"};
`,q=n.default.h2`
  font-size: ${i.w4.typography.fontSizeXl};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  margin-bottom: ${i.w4.spacing.md};
`,Y=n.default.p`
  font-size: 17px;
  line-height: 1.75;
  color: ${i.w4.colors.mainText};
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.lg} ${i.w4.spacing.xl};
  margin-bottom: ${i.w4.spacing.xl};
  min-height: 4em;
  animation: ${p} 0.5s ease both;
  @media (max-width: 768px) {
    font-size: 15px;
    padding: ${i.w4.spacing.md};
  }
`,_=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.sm};
  width: 100%;
`,J=n.default.button`
  background: ${i.w4.colors.accent};
  border: none;
  border-radius: ${i.w4.borderRadius.md};
  color: #0d1117;
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  font-family: ${i.w4.typography.fontFamily};
  padding: ${i.w4.spacing.md} ${i.w4.spacing.xl};
  cursor: pointer;
  min-height: 52px;
  transition: background 0.2s ease, transform 0.15s ease;
  &:hover {
    background: ${i.w4.colors.accentHover};
    transform: translateY(-2px);
  }
`,W=n.default.button`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeBase};
  font-family: ${i.w4.typography.fontFamily};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.xl};
  cursor: pointer;
  min-height: 44px;
  transition: border-color 0.2s ease, background 0.2s ease;
  &:hover {
    border-color: ${i.w4.colors.accent};
    background: rgba(88, 166, 255, 0.06);
  }
`,U=n.default.div`
  background: linear-gradient(90deg, #3fb950, #58a6ff);
  background-size: 200% 100%;
  animation: ${f} 2s linear infinite;
  color: #0d1117;
  font-weight: 700;
  font-size: ${i.w4.typography.fontSizeSm};
  padding: ${i.w4.spacing.xs} ${i.w4.spacing.md};
  border-radius: 100px;
  margin-bottom: ${i.w4.spacing.md};
`,X=n.default.div`
  position: fixed;
  top: -20px;
  left: ${({left:e})=>e}%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  background: ${({color:e})=>e};
  border-radius: 2px;
  animation: ${u} ${({delay:e})=>1.8+e}s ease-in ${({delay:e})=>e}s forwards;
  pointer-events: none;
  z-index: 9999;
`,K=["#58a6ff","#3fb950","#f78166","#ffa657","#d2a8ff","#79c0ff"];function Q(){const e=Array.from({length:40},(e,a)=>({id:a,left:100*Math.random(),delay:1.2*Math.random(),color:K[Math.floor(Math.random()*K.length)]??"#58a6ff",size:6+Math.floor(10*Math.random())}));return(0,s.jsx)(s.Fragment,{children:e.map(e=>(0,s.jsx)(X,{left:e.left,delay:e.delay,color:e.color,size:e.size},e.id))})}const Z=["A","B","C","D"];function ee({lang:e,onBack:a}){const[o,n]=(0,t.useState)({phase:"select"}),[r,i]=(0,t.useState)(d),p=(0,t.useRef)(null),[m,u]=(0,t.useState)(!1),[g,f]=(0,t.useState)(0),G=(0,t.useRef)(null),[X,K]=(0,t.useState)(0),ee="pt"===e?"pt":"en",ae=(0,t.useCallback)(e=>{u(!1),f(e=>e+1),G.current&&clearTimeout(G.current),G.current=setTimeout(()=>{u(!0)},600)},[]),oe=(0,t.useRef)(null),te=(0,t.useRef)(!1),ne=(0,t.useCallback)(e=>{oe.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},[]),re=(0,t.useCallback)(e=>a=>{if(!oe.current)return;const o=Math.abs(a.changedTouches[0].clientX-oe.current.x),t=Math.abs(a.changedTouches[0].clientY-oe.current.y);oe.current=null,o>8||t>8||(te.current=!0,e())},[]),ie=(0,t.useCallback)(e=>()=>{te.current?te.current=!1:e()},[]),se=(0,t.useCallback)((e,a)=>{const o=c.find(a=>a.id===e);return o?.scenes.find(e=>e.id===a)},[]),le=(0,t.useCallback)((a,t)=>{const s=se(a,t);if(s)if(s.isEnding){const o=r[a]??[],d=!o.includes(t),c={...r,[a]:d?[...o,t]:o};d&&(i(c),function(e){try{localStorage.setItem(l,JSON.stringify(e))}catch{}}(c)),n({phase:"ending",storyId:a,sceneId:t,isNew:d}),ae(s.text["pt"===e?"pt":"en"])}else K(e=>e+1),"scene"===o.phase?(n({...o,exiting:!0}),p.current=setTimeout(()=>{n({phase:"scene",storyId:a,sceneId:t,exiting:!1}),ae(s.text["pt"===e?"pt":"en"])},220)):(n({phase:"scene",storyId:a,sceneId:t,exiting:!1}),ae(s.text["pt"===e?"pt":"en"]))},[se,o,r,ae,e]),de=(0,t.useCallback)(a=>{const o=c.find(e=>e.id===a);o&&o.scenes[0]&&(K(0),n({phase:"scene",storyId:a,sceneId:o.scenes[0].id,exiting:!1}),ae(o.scenes[0].text["pt"===e?"pt":"en"]))},[ae,e]),ce=(0,t.useCallback)(()=>{p.current&&clearTimeout(p.current),G.current&&clearTimeout(G.current),n({phase:"select"}),K(0),u(!1)},[]);(0,t.useEffect)(()=>()=>{p.current&&clearTimeout(p.current),G.current&&clearTimeout(G.current)},[]);const pe="pt"===ee?"Aventura de Texto":"Text Adventure";if("select"===o.phase){const e="pt"===ee?"Escolhe a tua Aventura":"Choose Your Adventure",a="pt"===ee?"Selecciona uma história e toma decisões que moldam o destino!":"Select a story and make choices that shape the outcome!";return(0,s.jsxs)(h,{children:[(0,s.jsx)(x,{children:(0,s.jsx)(y,{children:pe})}),(0,s.jsxs)(w,{children:[(0,s.jsx)($,{children:e}),(0,s.jsx)(j,{children:a}),(0,s.jsx)(v,{children:c.map(e=>{const a=(r[e.id]??[]).length,o=a>0,t="pt"===ee?`${a}/${e.totalEndings} finais descobertos`:`${a}/${e.totalEndings} endings found`,n=()=>de(e.id);return(0,s.jsxs)(k,{accentColor:e.color,onTouchStart:ne,onTouchEnd:re(n),onClick:ie(n),children:[(0,s.jsx)(z,{children:e.emoji}),(0,s.jsx)(S,{children:e.title[ee]}),(0,s.jsx)(T,{children:e.description[ee]}),(0,s.jsxs)(A,{hasProgress:o,children:[o?"⭐ ":"○ ",t]})]},e.id)})})]})]})}if("scene"===o.phase){const{storyId:e,sceneId:a,exiting:t}=o,n=se(e,a),r=c.find(a=>a.id===e);if(!n||!r)return(0,s.jsx)(h,{children:(0,s.jsx)(w,{children:"pt"===ee?"Cena não encontrada.":"Scene not found."})});const i="pt"===ee?"← Histórias":"← Stories",l=8,d=Math.min(X+1,l);return(0,s.jsxs)(h,{accentColor:r.color,children:[(0,s.jsxs)(x,{children:[(0,s.jsx)(b,{onTouchStart:ne,onTouchEnd:re(ce),onClick:ie(ce),children:i}),(0,s.jsx)(y,{children:r.title[ee]})]}),(0,s.jsx)(w,{children:(0,s.jsxs)(C,{exiting:t,children:[(0,s.jsxs)(R,{children:[(0,s.jsxs)(F,{children:[r.emoji," ",(0,s.jsx)(O,{children:r.title[ee]})]}),(0,s.jsx)(L,{children:Array.from({length:l},(e,a)=>(0,s.jsx)(I,{filled:a<d},a))})]}),(0,s.jsx)(M,{children:n.emoji},a),(0,s.jsx)(P,{children:n.text[ee]},g),m&&n.choices&&(0,s.jsx)(E,{children:n.choices.map((a,o)=>{const t=()=>le(e,a.next);return(0,s.jsxs)(B,{index:o,onTouchStart:ne,onTouchEnd:re(t),onClick:ie(t),children:[(0,s.jsx)(D,{children:Z[o]??String(o+1)}),a.label[ee]]},o)})})]})})]})}if("ending"===o.phase){const{storyId:e,sceneId:a,isNew:t}=o,n=se(e,a),i=c.find(a=>a.id===e);if(!n||!i)return(0,s.jsx)(h,{children:(0,s.jsx)(w,{children:"pt"===ee?"Fim não encontrado.":"Ending not found."})});const l=n.endingType??"neutral",d="good"===l,p=(r[e]??[]).length,u=d?"pt"===ee?"🎉 Final Feliz!":"🎉 Happy Ending!":"pt"===ee?"✨ Final Alternativo":"✨ Alternative Ending",f=d?"pt"===ee?"Que aventura incrível!":"What an incredible adventure!":"pt"===ee?"Uma história para recordar.":"A story to remember.",v="pt"===ee?"🌟 Novo final descoberto!":"🌟 New ending discovered!",$="pt"===ee?`${p} de ${i.totalEndings} finais encontrados`:`${p} of ${i.totalEndings} endings found`,j="pt"===ee?"Jogar novamente":"Play again",k="pt"===ee?"Escolher outra história":"Choose another story",z=()=>de(e),S=()=>ce();return(0,s.jsxs)(h,{accentColor:i.color,children:[d&&(0,s.jsx)(Q,{}),(0,s.jsxs)(x,{children:[(0,s.jsx)(b,{onTouchStart:ne,onTouchEnd:re(ce),onClick:ie(ce),children:"pt"===ee?"← Histórias":"← Stories"}),(0,s.jsx)(y,{children:i.title[ee]})]}),(0,s.jsx)(w,{children:(0,s.jsxs)(N,{children:[t&&(0,s.jsx)(U,{children:v}),(0,s.jsx)(V,{children:n.emoji}),(0,s.jsx)(H,{endingType:l,children:u}),(0,s.jsx)(q,{children:f}),(0,s.jsx)(Y,{children:n.text[ee]},g),m&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(A,{hasProgress:p>0,style:{marginBottom:24},children:[p>0?"⭐ ":"○ ",$]}),(0,s.jsxs)(_,{children:[(0,s.jsx)(J,{onTouchStart:ne,onTouchEnd:re(z),onClick:ie(z),children:j}),(0,s.jsx)(W,{onTouchStart:ne,onTouchEnd:re(S),onClick:ie(S),children:k})]})]})]})})]})}return null}},80273(e,a,o){o.d(a,{t:()=>W});var t=o(27359),n=o(53233),r=o(77207),i=o(60894),s=o(65723);const l=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function d(e){for(const a of l){const[o,t,n]=a;if(e[o]&&e[o]===e[t]&&e[o]===e[n])return{winner:e[o],line:a}}return{winner:null,line:null}}function c(e){return e.reduce((e,a,o)=>null===a?[...e,o]:e,[])}function p(e,a){const{winner:o}=d(e);if("O"===o)return 10;if("X"===o)return-10;const t=c(e);if(0===t.length)return 0;if(a){let a=-1/0;for(const o of t)e[o]="O",a=Math.max(a,p(e,!1)),e[o]=null;return a}{let a=1/0;for(const o of t)e[o]="X",a=Math.min(a,p(e,!0)),e[o]=null;return a}}const m={title:{pt:"Jogo do Galo",en:"Tic Tac Toe"},yourTurn:{pt:"A tua vez!",en:"Your turn!"},thinking:{pt:"A pensar...",en:"Thinking..."},youWin:{pt:"🎉 Ganhaste!",en:"🎉 You win!"},youLose:{pt:"😅 Perdeste!",en:"😅 You lost!"},draw:{pt:"🤝 Empate!",en:"🤝 Draw!"},playAgain:{pt:"Jogar outra vez",en:"Play again"},back:{pt:"← Voltar",en:"← Back"},easy:{pt:"Fácil",en:"Easy"},medium:{pt:"Médio",en:"Medium"},hard:{pt:"Difícil",en:"Hard"},wins:{pt:"Vitórias",en:"Wins"},losses:{pt:"Derrotas",en:"Losses"},draws:{pt:"Empates",en:"Draws"},you:{pt:"Tu",en:"You"},robot:{pt:"Robot",en:"Robot"},vsRobot:{pt:"vs Robot",en:"vs Robot"},vsFriend:{pt:"vs Amigo",en:"vs Friend"},player1:{pt:"Jogador 1",en:"Player 1"},player2:{pt:"Jogador 2",en:"Player 2"},player1Turn:{pt:"Vez do Jogador 1!",en:"Player 1's turn!"},player2Turn:{pt:"Vez do Jogador 2!",en:"Player 2's turn!"},player1Wins:{pt:"🎉 Jogador 1 ganhou!",en:"🎉 Player 1 wins!"},player2Wins:{pt:"🎉 Jogador 2 ganhou!",en:"🎉 Player 2 wins!"},p1:{pt:"J1",en:"P1"},p2:{pt:"J2",en:"P2"}},u="atlantis-tictactoe-score";function g(){try{const e=localStorage.getItem(u);if(e)return JSON.parse(e)}catch{}return{wins:0,losses:0,draws:0}}const f=r.keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
`,h=r.keyframes`
  0%   { opacity: 0; transform: scale(0.3) rotate(-15deg); }
  60%  { transform: scale(1.15) rotate(3deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`,x=r.keyframes`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.12); }
`,b=r.keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
`,y=r.keyframes`
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0 0 0); }
`,w=r.keyframes`
  0%   { transform: scale(1); }
  40%  { transform: scale(1.4); }
  70%  { transform: scale(0.9); }
  100% { transform: scale(1); }
`,v=r.keyframes`
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40%           { transform: scale(1);   opacity: 1; }
`,$=r.keyframes`
  0%   { transform: translateY(-10px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(40px) rotate(360deg); opacity: 0; }
`,j=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${i.w4.spacing.lg};
  gap: ${i.w4.spacing.lg};
  overflow-y: auto;
  background:
    radial-gradient(ellipse 60% 50% at 30% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 70% 80%, rgba(249, 117, 131, 0.04) 0%, transparent 70%),
    #080b12;
  min-height: 0;
`,k=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  animation: ${f} 0.3s ease;
`,z=n.default.h1`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${i.w4.colors.mainText};
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
`,S=n.default.div`
  display: flex;
  gap: ${i.w4.spacing.sm};
`,T=n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 20px;
  border-radius: ${i.w4.borderRadius.md};
  font-size: ${i.w4.typography.fontSizeBase};
  min-height: 44px;
  font-weight: 700;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
  background: ${({active:e,color:a})=>e?a+"20":i.w4.colors.surface};
  color: ${({active:e,color:a})=>e?a:i.w4.colors.mainTextMuted};
  border: 1.5px solid ${({active:e,color:a})=>e?a+"60":i.w4.colors.border};
  box-shadow: ${({active:e,color:a})=>e?`0 0 12px ${a}20`:"none"};

  &:hover {
    color: ${({color:e})=>e};
    background: ${({color:e})=>e}18;
    border-color: ${({color:e})=>e}50;
    transform: translateY(-1px);
  }
  &:active { transform: translateY(0); }
`,A=n.default.div`
  display: flex;
  gap: 2px;
  padding: 2px;
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
`,C=n.default.button`
  padding: 8px 16px;
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  font-size: 14px;
  min-height: 36px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  background: ${({active:e,color:a})=>e?a+"22":"transparent"};
  color: ${({active:e,color:a})=>e?a:i.w4.colors.mainTextMuted};

  &:hover {
    color: ${({color:e})=>e};
    background: ${({color:e})=>e}11;
  }
`,M=n.default.div`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  padding: 6px 20px;
  border-radius: 20px;
  animation: ${({variant:e})=>"win"===e?b:f} ${({variant:e})=>"win"===e?"0.6s ease-in-out infinite":"0.3s ease"};
  background: ${({variant:e})=>"win"===e?"rgba(63, 185, 80, 0.15)":"lose"===e?"rgba(249, 117, 131, 0.15)":"draw"===e?"rgba(210, 169, 34, 0.15)":"rgba(88, 166, 255, 0.1)"};
  color: ${({variant:e})=>"win"===e?"#3fb950":"lose"===e?"#f97583":"draw"===e?"#d2a922":i.w4.colors.accent};
`,P=n.default.div`
  position: relative;
`,E=n.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  background: ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06);
`,B=n.default.button`
  width: clamp(80px, 20vw, 120px);
  height: clamp(80px, 20vw, 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({isWinning:e})=>e?"rgba(63, 185, 80, 0.12)":i.w4.colors.surface};
  border: none;
  border-radius: ${i.w4.borderRadius.md};
  cursor: ${({disabled:e})=>e?"default":"pointer"};
  transition: background 0.15s, transform 0.15s, opacity 0.2s;
  font-size: clamp(36px, 8vw, 52px);
  line-height: 1;
  position: relative;
  animation: ${({isWinning:e})=>e?x:"none"} 1s ease-in-out infinite;
  opacity: ${({isThinking:e})=>e?.55:1};

  &:hover:not(:disabled) {
    background: rgba(88, 166, 255, 0.08);
    transform: scale(1.04);
  }

  &:active:not(:disabled) {
    transform: scale(0.96);
  }
`,R=n.default.span`
  animation: ${({isNew:e})=>e?h:"none"} 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`,F=n.default.div`
  display: flex;
  gap: ${i.w4.spacing.lg};
  animation: ${f} 0.3s ease 0.1s both;
`,O=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`,L=n.default.span`
  font-size: ${i.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${({color:e})=>e};
  font-variant-numeric: tabular-nums;
  animation: ${({pop:e})=>e?w:"none"} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
`,I=n.default.span`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${i.w4.colors.mainTextMuted};
`,D=n.default.div`
  display: flex;
  gap: ${i.w4.spacing.md};
  animation: ${f} 0.3s ease 0.2s both;
`,N=n.default.button`
  padding: 12px 24px;
  border-radius: ${i.w4.borderRadius.md};
  font-size: ${i.w4.typography.fontSizeBase};
  min-height: 44px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.2s, transform 0.15s, border-color 0.2s;

  background: ${({variant:e})=>"primary"===e?"rgba(88, 166, 255, 0.15)":"transparent"};
  color: ${({variant:e})=>"primary"===e?i.w4.colors.accent:i.w4.colors.mainTextMuted};
  border: 1px solid ${({variant:e})=>"primary"===e?i.w4.colors.accent+"40":i.w4.colors.border};

  &:hover {
    background: ${({variant:e})=>"primary"===e?"rgba(88, 166, 255, 0.25)":"rgba(255,255,255,0.04)"};
    border-color: ${({variant:e})=>"primary"===e?i.w4.colors.accent:i.w4.colors.mainTextMuted};
    transform: translateY(-1px);
  }
  &:active { transform: translateY(0); }
`,G=n.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.md};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  animation: ${f} 0.3s ease 0.15s both;
`,V=n.default.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,H=n.default.div`
  position: absolute;
  top: 0;
  left: ${({left:e})=>e}%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  animation: ${$} 1.2s ease-out forwards;
  animation-delay: ${({delay:e})=>e}s;
  pointer-events: none;
`,q=n.default.div`
  position: absolute;
  height: 6px;
  border-radius: 3px;
  background: ${({color:e})=>e};
  box-shadow: 0 0 12px ${({color:e})=>e}80;
  pointer-events: none;
  animation: ${y} 0.35s ease forwards;
  z-index: 10;
  transform-origin: left center;
  /* Geometry calculated inline via style prop */
`,Y=n.default.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 4px;
`,_=n.default.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
  animation: ${v} 1.2s ease-in-out ${({delay:e})=>e}s infinite;
`,J=["#f97583","#58a6ff","#3fb950","#d2a922","#d2a8ff","#79c0ff"];function W({lang:e,onBack:a}){const[o,n]=(0,t.useState)(Array(9).fill(null)),[r,l]=(0,t.useState)(null),[f,h]=(0,t.useState)(!0),[x,b]=(0,t.useState)("medium"),[y,w]=(0,t.useState)("bot"),[v,$]=(0,t.useState)(g),[W,U]=(0,t.useState)(!1),[X,K]=(0,t.useState)(null),Q=(0,t.useRef)(o);Q.current=o;const{winner:Z,line:ee}=d(o),ae=!Z&&0===c(o).length,oe=(0,t.useCallback)(()=>{n(Array(9).fill(null)),l(null),h(!0),U(!1)},[]);(0,t.useEffect)(()=>{W||!Z&&!ae||(U(!0),"bot"!==y)||(K("X"===Z?"wins":"O"===Z?"losses":"draws"),setTimeout(()=>K(null),500),$(e=>{const a={...e};return"X"===Z?a.wins++:"O"===Z?a.losses++:a.draws++,function(e){localStorage.setItem(u,JSON.stringify(e))}(a),a}))},[Z,ae,W,y]),(0,t.useEffect)(()=>{if("2p"===y||f||W||Z||ae)return;const e=setTimeout(()=>{const e=Q.current,a=function(e,a){const o=c(e);if(0===o.length)return-1;if("easy"===a){if(Math.random()<.7)return o[Math.floor(Math.random()*o.length)]}else if("medium"===a&&Math.random()<.3)return o[Math.floor(Math.random()*o.length)];let t=-1/0,n=o[0];for(const a of o){e[a]="O";const o=p(e,!1);e[a]=null,o>t&&(t=o,n=a)}return n}([...e],x);if(a>=0){const o=[...e];o[a]="O",n(o),l(a),h(!0)}},500);return()=>clearTimeout(e)},[f,W,Z,ae,x,y]);const te=e=>{b(e),oe()},ne=e=>{w(e),oe()},re=a=>m[a]?.[e]??m[a]?.en??a;let ie,se;"2p"===y?"X"===Z?(ie="win",se=re("player1Wins")):"O"===Z?(ie="win",se=re("player2Wins")):ae?(ie="draw",se=re("draw")):(ie="turn",se=re(f?"player1Turn":"player2Turn")):"X"===Z?(ie="win",se=re("youWin")):"O"===Z?(ie="lose",se=re("youLose")):ae?(ie="draw",se=re("draw")):(ie="turn",se=re(f?"yourTurn":"thinking"));const le=new Set(ee??[]),de="bot"===y?"X"===Z:!!Z,ce="bot"===y&&!f&&!W,pe=(0,t.useMemo)(()=>de?Array.from({length:12},(e,a)=>({left:10+80*Math.random(),delay:.5*Math.random(),color:J[a%J.length]})):[],[de]),me=(0,t.useMemo)(()=>{if(!ee)return null;const e=Math.min(120,Math.max(80,.2*window.innerWidth)),a=a=>{const o=a%3,t=Math.floor(a/3);return{x:8+o*(e+8)+e/2,y:8+t*(e+8)+e/2}},o=a(ee[0]),t=a(ee[2]),n=t.x-o.x,r=t.y-o.y,i=Math.sqrt(n*n+r*r),s=Math.atan2(r,n)*(180/Math.PI);return{left:`${o.x}px`,top:o.y-3+"px",width:`${i}px`,transform:`rotate(${s}deg)`}},[ee]),ue="bot"===y?"X"===Z?"#3fb950":"#f97583":"X"===Z?"#58a6ff":"#d2a8ff",ge=e=>e?"X"===e?"⭐":"2p"===y?"🌙":"🤖":null;return(0,s.jsxs)(j,{children:[(0,s.jsxs)(k,{children:[(0,s.jsxs)(z,{children:["❌ ⭕ ",re("title")]}),(0,s.jsxs)(S,{children:[(0,s.jsxs)(T,{active:"bot"===y,color:i.w4.colors.accent,onClick:()=>ne("bot"),children:["🤖 ",re("vsRobot")]}),(0,s.jsxs)(T,{active:"2p"===y,color:"#d2a8ff",onClick:()=>ne("2p"),children:["👫 ",re("vsFriend")]})]}),"bot"===y&&(0,s.jsxs)(A,{children:[(0,s.jsx)(C,{active:"easy"===x,color:"#3fb950",onClick:()=>te("easy"),children:re("easy")}),(0,s.jsx)(C,{active:"medium"===x,color:"#d2a922",onClick:()=>te("medium"),children:re("medium")}),(0,s.jsx)(C,{active:"hard"===x,color:"#f97583",onClick:()=>te("hard"),children:re("hard")})]})]}),(0,s.jsxs)(G,{children:[(0,s.jsxs)(V,{children:["⭐"," = ",re("2p"===y?"player1":"you")]}),(0,s.jsxs)(V,{children:["2p"===y?"🌙":"🤖"," = ",re("2p"===y?"player2":"robot")]})]}),(0,s.jsxs)(M,{variant:ie,children:[se,ce&&(0,s.jsxs)(Y,{children:[(0,s.jsx)(_,{delay:0}),(0,s.jsx)(_,{delay:.2}),(0,s.jsx)(_,{delay:.4})]})]}),(0,s.jsxs)(P,{children:[pe.map((e,a)=>(0,s.jsx)(H,{left:e.left,delay:e.delay,color:e.color},a)),me&&(0,s.jsx)(q,{x1:0,y1:0,x2:0,y2:0,color:ue,style:me}),(0,s.jsx)(E,{children:o.map((e,a)=>(0,s.jsx)(B,{isWinning:le.has(a),isThinking:ce&&!e,disabled:!!e||W||"bot"===y&&!f,onClick:()=>(e=>{if(o[e]||W)return;if("bot"===y&&!f)return;const a=[...o],t=f?"X":"O";a[e]=t,n(a),l(e),h(!f)})(a),"aria-label":`Cell ${Math.floor(a/3)+1},${a%3+1}${e?`: ${e}`:""}`,children:e&&(0,s.jsx)(R,{isNew:a===r,children:ge(e)})},a))})]}),"bot"===y&&(0,s.jsxs)(F,{children:[(0,s.jsxs)(O,{color:"#3fb950",children:[(0,s.jsx)(L,{color:"#3fb950",pop:"wins"===X,children:v.wins}),(0,s.jsx)(I,{children:re("wins")})]}),(0,s.jsxs)(O,{color:"#d2a922",children:[(0,s.jsx)(L,{color:"#d2a922",pop:"draws"===X,children:v.draws}),(0,s.jsx)(I,{children:re("draws")})]}),(0,s.jsxs)(O,{color:"#f97583",children:[(0,s.jsx)(L,{color:"#f97583",pop:"losses"===X,children:v.losses}),(0,s.jsx)(I,{children:re("losses")})]})]}),W&&(0,s.jsx)(D,{children:(0,s.jsx)(N,{variant:"primary",onClick:oe,children:re("playAgain")})})]})}},63594(e,a,o){o.d(a,{f:()=>Ba});var t=o(27359),n=o(53233),r=o(77207),i=o(69753);const s=[{id:"vogais",title:"Vogais",subtitle:"A · E · I · O · U",icon:"🔤",color:"#a855f7",cards:[{id:"a",letter:"A",emoji:"🐝",word:"Abelha",hint:"Avião · Anel · Arco · Árvore"},{id:"e",letter:"E",emoji:"🐘",word:"Elefante",hint:"Estrela · Escada · Erva · Espada"},{id:"i",letter:"I",emoji:"🏝️",word:"Ilha",hint:"Iglu · Igreja · Íris · Inseto"},{id:"o",letter:"O",emoji:"🐑",word:"Ovelha",hint:"Ovo · Olho · Ouriço · Ouro"},{id:"u",letter:"U",emoji:"🍇",word:"Uva",hint:"Urso · Unhas · Único · Útil"}]},{id:"silabas-b",title:"Letra B",subtitle:"BA · BE · BI · BO · BU",icon:"🅱️",color:"#3b82f6",cards:[{id:"ba",letter:"BA",emoji:"⛵",word:"Barco",hint:"Bala · Bater · Baile · Banana"},{id:"be",letter:"BE",emoji:"👶",word:"Bebé",hint:"Belo · Beber · Berço · Beleza"},{id:"bi",letter:"BI",emoji:"🚲",word:"Bicicleta",hint:"Bicho · Bico · Bingo · Biscoito"},{id:"bo",letter:"BO",emoji:"⚽",word:"Bola",hint:"Boca · Bolo · Bosque · Borboleta"},{id:"bu",letter:"BU",emoji:"🫏",word:"Burro",hint:"Buzina · Bufo · Búzio · Bucha"}]},{id:"silabas-c",title:"Letra C",subtitle:"CA · CE · CI · CO · CU",icon:"🐱",color:"#f97316",cards:[{id:"ca",letter:"CA",emoji:"🏠",word:"Casa",hint:"Cama · Cão · Carro · Caracol"},{id:"ce",letter:"CE",emoji:"🦌",word:"Cervo",hint:"Cedo · Cereja · Cesta · Cebola"},{id:"ci",letter:"CI",emoji:"🦢",word:"Cisne",hint:"Cidade · Cinto · Cinema · Cinco"},{id:"co",letter:"CO",emoji:"🐰",word:"Coelho",hint:"Copo · Corda · Coroa · Comida"},{id:"cu",letter:"CU",emoji:"🩹",word:"Curativo",hint:"Cubo · Cuidado · Curva · Cultura"}]},{id:"silabas-d",title:"Letra D",subtitle:"DA · DE · DI · DO · DU",icon:"🦷",color:"#06b6d4",cards:[{id:"da",letter:"DA",emoji:"💃",word:"Dança",hint:"Data · Dado · Dama · Dama"},{id:"de",letter:"DE",emoji:"🦷",word:"Dente",hint:"Dedo · Descanso · Devagar · Dezembro"},{id:"di",letter:"DI",emoji:"💰",word:"Dinheiro",hint:"Dia · Dinossauro · Direto · Disco"},{id:"do",letter:"DO",emoji:"🤒",word:"Doente",hint:"Doce · Dormir · Dois · Domino"},{id:"du",letter:"DU",emoji:"🚿",word:"Duche",hint:"Duro · Duende · Duna · Duplo"}]},{id:"silabas-f",title:"Letra F",subtitle:"FA · FE · FI · FO · FU",icon:"🌸",color:"#ec4899",cards:[{id:"fa",letter:"FA",emoji:"🗣️",word:"Falar",hint:"Faca · Fada · Família · Farinha"},{id:"fe",letter:"FE",emoji:"😊",word:"Feliz",hint:"Feno · Ferro · Festa · Fevereiro"},{id:"fi",letter:"FI",emoji:"🧵",word:"Fio",hint:"Filho · Figo · Fila · Fim"},{id:"fo",letter:"FO",emoji:"📸",word:"Foto",hint:"Fogo · Folha · Forno · Formiga"},{id:"fu",letter:"FU",emoji:"⽕",word:"Fumo",hint:"Futebol · Furo · Futuro · Fungo"}]},{id:"silabas-g",title:"Letra G",subtitle:"GA · GE · GI · GO · GU",icon:"🐱",color:"#84cc16",cards:[{id:"ga",letter:"GA",emoji:"🐱",word:"Gato",hint:"Galinha · Ganso · Garfo · Gavião"},{id:"ge",letter:"GE",emoji:"🧊",word:"Gelo",hint:"Gente · Gelado · Gengibre · Gesto"},{id:"gi",letter:"GI",emoji:"🌻",word:"Girassol",hint:"Girafa · Ginásio · Gigante · Gira"},{id:"go",letter:"GO",emoji:"💧",word:"Gota",hint:"Gordo · Gorila · Golfe · Governo"},{id:"gu",letter:"GU",emoji:"🌂",word:"Guarda-chuva",hint:"Guitarra · Guloso · Guerra · Guia"}]},{id:"silabas-l",title:"Letra L",subtitle:"LA · LE · LI · LO · LU",icon:"🌙",color:"#8b5cf6",cards:[{id:"la",letter:"LA",emoji:"🏞️",word:"Lago",hint:"Lata · Lavar · Laranja · Lagarto"},{id:"le",letter:"LE",emoji:"🦁",word:"Leão",hint:"Leite · Ler · Lento · Lençol"},{id:"li",letter:"LI",emoji:"📚",word:"Livro",hint:"Lição · Liga · Limão · Lindo"},{id:"lo",letter:"LO",emoji:"🐺",word:"Lobo",hint:"Loja · Logo · Longe · Louça"},{id:"lu",letter:"LU",emoji:"🌙",word:"Lua",hint:"Luva · Luta · Lugar · Lume"}]},{id:"silabas-m",title:"Letra M",subtitle:"MA · ME · MI · MO · MU",icon:"🌊",color:"#10b981",cards:[{id:"ma",letter:"MA",emoji:"🍎",word:"Maçã",hint:"Mala · Mapa · Mago · Macaco"},{id:"me",letter:"ME",emoji:"🍯",word:"Mel",hint:"Mesa · Medo · Meias · Melancia"},{id:"mi",letter:"MI",emoji:"🐭",word:"Rato",hint:"Mina · Mimo · Milho · Miúdo"},{id:"mo",letter:"MO",emoji:"🏍️",word:"Mota",hint:"Mola · Monte · Mochila · Morada"},{id:"mu",letter:"MU",emoji:"🎵",word:"Música",hint:"Muro · Muitos · Mudo · Mundial"}]},{id:"silabas-n",title:"Letra N",subtitle:"NA · NE · NI · NO · NU",icon:"🌙",color:"#6366f1",cards:[{id:"na",letter:"NA",emoji:"🏊",word:"Nadar",hint:"Navio · Nariz · Natal · Natureza"},{id:"ne",letter:"NE",emoji:"❄️",word:"Neve",hint:"Neto · Negro · Negar · Necessário"},{id:"ni",letter:"NI",emoji:"🐦",word:"Ninho",hint:"Ninja · Nitido · Nível · Ninguém"},{id:"no",letter:"NO",emoji:"🌙",word:"Noite",hint:"Nota · Nome · Nobre · Noivo"},{id:"nu",letter:"NU",emoji:"☁️",word:"Nuvem",hint:"Número · Nulo · Nutrição · Nunca"}]},{id:"silabas-p",title:"Letra P",subtitle:"PA · PE · PI · PO · PU",icon:"🦆",color:"#f59e0b",cards:[{id:"pa",letter:"PA",emoji:"🦆",word:"Pato",hint:"Pão · Papa · Palha · Papagaio"},{id:"pe",letter:"PE",emoji:"🐟",word:"Peixe",hint:"Pele · Pena · Pedra · Pensar"},{id:"pi",letter:"PI",emoji:"🎀",word:"Pipa",hint:"Pico · Pingo · Pilha · Pintainho"},{id:"po",letter:"PO",emoji:"🐴",word:"Potro",hint:"Povo · Pote · Pomba · Polvo"},{id:"pu",letter:"PU",emoji:"🐾",word:"Pulga",hint:"Pulo · Pura · Pudim · Pulseira"}]},{id:"silabas-r",title:"Letra R",subtitle:"RA · RE · RI · RO · RU",icon:"🌹",color:"#ef4444",cards:[{id:"ra",letter:"RA",emoji:"🐸",word:"Rana",hint:"Rato · Ramo · Rapaz · Rainha"},{id:"re",letter:"RE",emoji:"👑",word:"Rei",hint:"Rede · Relógio · Remédio · Regra"},{id:"ri",letter:"RI",emoji:"😂",word:"Rir",hint:"Rio · Rico · Risco · Ritmo"},{id:"ro",letter:"RO",emoji:"🌹",word:"Rosa",hint:"Roda · Roupa · Robô · Rochedo"},{id:"ru",letter:"RU",emoji:"🛣️",word:"Rua",hint:"Ruído · Rural · Rumo · Rugido"}]},{id:"silabas-s",title:"Letra S",subtitle:"SA · SE · SI · SO · SU",icon:"☀️",color:"#f43f5e",cards:[{id:"sa",letter:"SA",emoji:"🐸",word:"Sapo",hint:"Saco · Sala · Salto · Sapato"},{id:"se",letter:"SE",emoji:"🌾",word:"Seco",hint:"Sede · Seta · Serra · Setembro"},{id:"si",letter:"SI",emoji:"🔔",word:"Sino",hint:"Sinal · Sítio · Sinto · Silêncio"},{id:"so",letter:"SO",emoji:"☀️",word:"Sol",hint:"Sopa · Sono · Soco · Sonho"},{id:"su",letter:"SU",emoji:"🧃",word:"Sumo",hint:"Sul · Suave · Susto · Subir"}]},{id:"silabas-t",title:"Letra T",subtitle:"TA · TE · TI · TO · TU",icon:"🐯",color:"#0ea5e9",cards:[{id:"ta",letter:"TA",emoji:"🥁",word:"Tambor",hint:"Tapa · Tarde · Tarefa · Tartaruga"},{id:"te",letter:"TE",emoji:"🧸",word:"Teddy",hint:"Tela · Tempo · Telefone · Terra"},{id:"ti",letter:"TI",emoji:"🐯",word:"Tigre",hint:"Tio · Tipo · Título · Tinha"},{id:"to",letter:"TO",emoji:"🍅",word:"Tomate",hint:"Toca · Torta · Touro · Torneira"},{id:"tu",letter:"TU",emoji:"🦈",word:"Tubarão",hint:"Tubo · Tudo · Tulipa · Turbina"}]},{id:"silabas-v",title:"Letra V",subtitle:"VA · VE · VI · VO · VU",icon:"🦋",color:"#d946ef",cards:[{id:"va",letter:"VA",emoji:"🐄",word:"Vaca",hint:"Vale · Varanda · Vassoura · Vampiro"},{id:"ve",letter:"VE",emoji:"🕯️",word:"Vela",hint:"Vento · Verde · Verdade · Veludo"},{id:"vi",letter:"VI",emoji:"🍷",word:"Vinho",hint:"Vida · Vila · Visão · Viagem"},{id:"vo",letter:"VO",emoji:"✈️",word:"Voar",hint:"Voz · Volta · Volume · Voluntário"},{id:"vu",letter:"VU",emoji:"🌋",word:"Vulcão",hint:"Vulnerável · Vulto · Vulgaria"}]},{id:"numeros",title:"Números",subtitle:"UM · DOIS · TRÊS...",icon:"🔢",color:"#f97316",cards:[{id:"um",letter:"UM",emoji:"1️⃣",word:"Um",hint:"Uma · Único · Unidade"},{id:"dois",letter:"DOIS",emoji:"2️⃣",word:"Dois",hint:"Duplo · Segundo · Par"},{id:"tres",letter:"TRÊS",emoji:"3️⃣",word:"Três",hint:"Triplo · Terceiro · Trio"},{id:"quatro",letter:"QUATRO",emoji:"4️⃣",word:"Quatro",hint:"Quádruplo · Quarto · Quadrado"},{id:"cinco",letter:"CINCO",emoji:"5️⃣",word:"Cinco",hint:"Quinteto · Quinto · Pentagon"},{id:"seis",letter:"SEIS",emoji:"6️⃣",word:"Seis",hint:"Sexto · Sexteto · Hexágono"},{id:"sete",letter:"SETE",emoji:"7️⃣",word:"Sete",hint:"Sétimo · Semana · Arco-íris"},{id:"oito",letter:"OITO",emoji:"8️⃣",word:"Oito",hint:"Oitavo · Polvo · Araña"},{id:"nove",letter:"NOVE",emoji:"9️⃣",word:"Nove",hint:"Nono · Novembro · Planeta"},{id:"dez",letter:"DEZ",emoji:"🔟",word:"Dez",hint:"Décimo · Dezembro · Dedos"}]},{id:"cores",title:"Cores",subtitle:"VERMELHO · AZUL · VERDE...",icon:"🎨",color:"#a855f7",cards:[{id:"vermelho",letter:"VERMELHO",emoji:"🔴",word:"Vermelho",hint:"Rosa · Tomate · Maçã · Coração"},{id:"azul",letter:"AZUL",emoji:"🔵",word:"Azul",hint:"Mar · Céu · Mirtilo · Baleia"},{id:"verde",letter:"VERDE",emoji:"🟢",word:"Verde",hint:"Erva · Folha · Sapo · Maçã"},{id:"amarelo",letter:"AMARELO",emoji:"🟡",word:"Amarelo",hint:"Sol · Banana · Patinho · Girassol"},{id:"laranja",letter:"LARANJA",emoji:"🟠",word:"Laranja",hint:"Fruta · Cenoura · Tigre · Outono"},{id:"roxo",letter:"ROXO",emoji:"🟣",word:"Roxo",hint:"Uva · Lavanda · Beringela · Violeta"},{id:"rosa",letter:"ROSA",emoji:"🌸",word:"Rosa",hint:"Flor · Porco · Flamingo · Bubble-gum"},{id:"branco",letter:"BRANCO",emoji:"⬜",word:"Branco",hint:"Neve · Leite · Nuvem · Algodão"},{id:"preto",letter:"PRETO",emoji:"⬛",word:"Preto",hint:"Noite · Gato · Pneu · Carvão"},{id:"castanho",letter:"CASTANHO",emoji:"🟫",word:"Castanho",hint:"Terra · Madeira · Chocolate · Urso"}]},{id:"animais",title:"Animais",subtitle:"Todos os animais",icon:"🦁",color:"#22c55e",cards:[{id:"cao",letter:"CÃO",emoji:"🐕",word:"Cão",hint:"Canino · Cachorro · Companheiro"},{id:"gato2",letter:"GATO",emoji:"🐈",word:"Gato",hint:"Felino · Miar · Bigodes"},{id:"cavalo",letter:"CAVALO",emoji:"🐴",word:"Cavalo",hint:"Patas · Crina · Galope"},{id:"elefante",letter:"ELEFANTE",emoji:"🐘",word:"Elefante",hint:"Tromba · Presa · Savana"},{id:"leao2",letter:"LEÃO",emoji:"🦁",word:"Leão",hint:"Rei · Juba · África"},{id:"girafa",letter:"GIRAFA",emoji:"🦒",word:"Girafa",hint:"Pescoço · Alto · Savana"},{id:"pinguim",letter:"PINGUIM",emoji:"🐧",word:"Pinguim",hint:"Gelo · Nadar · Antártida"},{id:"borboleta",letter:"BORBOLETA",emoji:"🦋",word:"Borboleta",hint:"Asas · Colorida · Flor"},{id:"coelho2",letter:"COELHO",emoji:"🐰",word:"Coelho",hint:"Orelhas · Saltitar · Cenoura"},{id:"pato2",letter:"PATO",emoji:"🦆",word:"Pato",hint:"Nadar · Grasnar · Lago"}]},{id:"corpo",title:"O Meu Corpo",subtitle:"Cabeça · Mãos · Pés...",icon:"🧒",color:"#f59e0b",cards:[{id:"cabeca",letter:"CABEÇA",emoji:"🧠",word:"Cabeça",hint:"Cérebro · Pensar · Crânio"},{id:"olhos",letter:"OLHOS",emoji:"👀",word:"Olhos",hint:"Ver · Piscar · Cores"},{id:"nariz",letter:"NARIZ",emoji:"👃",word:"Nariz",hint:"Cheirar · Respirar · Espirrar"},{id:"boca",letter:"BOCA",emoji:"👄",word:"Boca",hint:"Falar · Comer · Sorrir"},{id:"orelhas",letter:"ORELHAS",emoji:"👂",word:"Orelhas",hint:"Ouvir · Sons · Música"},{id:"maos",letter:"MÃOS",emoji:"🙌",word:"Mãos",hint:"Tocar · Escrever · Bater"},{id:"pes",letter:"PÉS",emoji:"🦶",word:"Pés",hint:"Andar · Correr · Saltar"},{id:"coracão",letter:"CORAÇÃO",emoji:"❤️",word:"Coração",hint:"Amor · Batimento · Vida"}]},{id:"familia",title:"Família",subtitle:"Mãe · Pai · Irmão...",icon:"👨‍👩‍👧‍👦",color:"#e11d48",cards:[{id:"mae",letter:"MÃE",emoji:"👩",word:"Mãe",hint:"Amor · Cuidar · Abraço"},{id:"pai",letter:"PAI",emoji:"👨",word:"Pai",hint:"Forte · Proteção · Brincar"},{id:"irmao",letter:"IRMÃO",emoji:"👦",word:"Irmão",hint:"Brincar · Partilhar · Família"},{id:"irma",letter:"IRMÃ",emoji:"👧",word:"Irmã",hint:"Amigas · Brincar · Família"},{id:"avo",letter:"AVÔ",emoji:"👴",word:"Avô",hint:"Sábio · Velho · Histórias"},{id:"avo2",letter:"AVÓ",emoji:"👵",word:"Avó",hint:"Mimos · Cozinhar · Amor"},{id:"bebe",letter:"BEBÉ",emoji:"👶",word:"Bebé",hint:"Pequeno · Dormir · Chorar"},{id:"tio",letter:"TIO",emoji:"🧔",word:"Tio",hint:"Divertido · Familiar · Natal"}]},{id:"palavras",title:"Palavras",subtitle:"Ler palavras simples",icon:"💬",color:"#14b8a6",cards:[{id:"bola",letter:"BOLA",emoji:"⚽",word:"Bola"},{id:"gato",letter:"GATO",emoji:"🐱",word:"Gato"},{id:"casa",letter:"CASA",emoji:"🏠",word:"Casa"},{id:"pato",letter:"PATO",emoji:"🦆",word:"Pato"},{id:"leao",letter:"LEÃO",emoji:"🦁",word:"Leão"},{id:"mesa",letter:"MESA",emoji:"🪑",word:"Mesa"},{id:"sapo",letter:"SAPO",emoji:"🐸",word:"Sapo"},{id:"porta",letter:"PORTA",emoji:"🚪",word:"Porta"},{id:"livro",letter:"LIVRO",emoji:"📚",word:"Livro"},{id:"cama",letter:"CAMA",emoji:"🛏️",word:"Cama"},{id:"carro",letter:"CARRO",emoji:"🚗",word:"Carro"},{id:"flor",letter:"FLOR",emoji:"🌸",word:"Flor"},{id:"peixe",letter:"PEIXE",emoji:"🐟",word:"Peixe"},{id:"arco",letter:"ARCO",emoji:"🌈",word:"Arco-íris"},{id:"borboleta2",letter:"BORBOLETA",emoji:"🦋",word:"Borboleta"}]},{id:"frases",title:"Frases",subtitle:"Ler frases simples",icon:"📖",color:"#6366f1",cards:[{id:"f1",letter:"O gato é bonito.",emoji:"🐱",word:"O gato é bonito."},{id:"f2",letter:"A bola é redonda.",emoji:"⚽",word:"A bola é redonda."},{id:"f3",letter:"O sapo é verde.",emoji:"🐸",word:"O sapo é verde."},{id:"f4",letter:"A lua brilha à noite.",emoji:"🌙",word:"A lua brilha à noite."},{id:"f5",letter:"O pato nada no lago.",emoji:"🦆",word:"O pato nada no lago."},{id:"f6",letter:"O leão é o rei da selva.",emoji:"🦁",word:"O leão é o rei da selva."},{id:"f7",letter:"A borboleta é colorida.",emoji:"🦋",word:"A borboleta é colorida."},{id:"f8",letter:"O coelho come cenouras.",emoji:"🐰",word:"O coelho come cenouras."},{id:"f9",letter:"O sol brilha durante o dia.",emoji:"☀️",word:"O sol brilha durante o dia."},{id:"f10",letter:"Eu gosto de ler livros.",emoji:"📚",word:"Eu gosto de ler livros."}]}],l=[{label:"🔤 Primeiros Passos",ids:["vogais"]},{label:"🔡 Sílabas",ids:["silabas-b","silabas-c","silabas-d","silabas-f","silabas-g","silabas-l","silabas-m","silabas-n","silabas-p","silabas-r","silabas-s","silabas-t","silabas-v"]},{label:"🌍 O Mundo à Volta",ids:["animais","cores","numeros","corpo","familia"]},{label:"📖 Ler e Escrever",ids:["palavras","frases"]}],d={"primeira-estrela":{emoji:"⭐",label:"Primeira Estrela!",desc:"Ganhaste a tua primeira estrela"},"primeira-licao":{emoji:"🎓",label:"Primeira Lição!",desc:"Completaste a tua primeira lição"},"tres-estrelas":{emoji:"🌟",label:"Super Estrela!",desc:"Tiveste 3 estrelas numa lição"},coleccionador:{emoji:"💎",label:"Coleccionador!",desc:"10 favoritos guardados"},"vogais-mestre":{emoji:"🔤",label:"Mestre das Vogais!",desc:"Completaste as Vogais com 3 estrelas"},leitor:{emoji:"📖",label:"Leitor!",desc:"Completaste todas as sílabas"},explorador:{emoji:"🌍",label:"Explorador!",desc:"Completaste O Mundo à Volta"},"numeros-mestre":{emoji:"🔢",label:"Mestre dos Números!",desc:"Completaste os Números com 3 estrelas"}};var c=o(65723);const p=r.keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`,m=r.keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
`,u=r.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`,g=r.keyframes`
  0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
  60%  { transform: scale(1.3) rotate(5deg);  opacity: 1; }
  100% { transform: scale(1)   rotate(0deg);  opacity: 1; }
`,f=n.default.div`
  min-height: 100%;
  background: #0a0e1a;
  padding-bottom: 48px;
  overflow-y: auto;
  font-family: 'Nunito', 'Segoe UI', system-ui, -apple-system, sans-serif;
`,h=n.default.div`
  background: linear-gradient(160deg, #1a0040 0%, #0d1f5e 45%, #062040 100%);
  padding: 28px 20px 24px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 70% 90% at 15% 25%, #9333ea55 0%, transparent 65%),
      radial-gradient(ellipse 50% 70% at 85% 75%, #06b6d460 0%, transparent 65%),
      radial-gradient(ellipse 40% 50% at 50% 50%, #ec489940 0%, transparent 70%);
    pointer-events: none;
  }

  /* floating bubbles decoration */
  &::after {
    content: '⭐ 🌈 ✨ 🌟';
    position: absolute;
    top: 8px;
    right: 12px;
    font-size: 14px;
    opacity: 0.3;
    pointer-events: none;
    letter-spacing: 4px;
  }
`,x=n.default.div`position: relative; z-index: 1;`,b=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`,y=n.default.h1`
  font-size: 42px;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;
  background: linear-gradient(135deg, #fde68a 0%, #fb7185 40%, #a78bfa 70%, #60a5fa 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${u} 2.5s linear infinite;
  text-shadow: none;
`,w=n.default.div`
  font-size: 16px;
  font-weight: 700;
  color: #c4b5fd;
  margin-top: 4px;
  letter-spacing: 0.01em;
`,v=n.default.div`
  font-size: 72px;
  line-height: 1;
  animation: ${m} 2.5s ease-in-out infinite;
  user-select: none;
  filter: drop-shadow(0 0 16px #a78bfa80);
`,$=n.default.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,j=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({color:e})=>e}30;
  border: 2px solid ${({color:e})=>e}70;
  border-radius: 32px;
  padding: 8px 16px;
`,k=n.default.span`font-size: 20px;`,z=n.default.span`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
`,S=n.default.span`
  font-size: 13px;
  font-weight: 700;
  color: #c4b5fd;
  margin-left: 2px;
`,T=n.default.div`
  margin-top: 14px;
  background: #ffffff20;
  border-radius: 16px;
  height: 14px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px #00000030;
`,A=n.default.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: linear-gradient(90deg, #f59e0b, #ec4899, #a78bfa, #60a5fa);
  background-size: 200% auto;
  border-radius: 16px;
  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: ${u} 2s linear infinite;
`,C=n.default.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #a78bfa;
`,M=n.default.div`padding: 20px 16px 0;`,P=n.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 18px 20px;
  background: linear-gradient(135deg, #be185d35, #9333ea35);
  border: 2px solid #ec4899;
  border-radius: 24px;
  cursor: pointer;
  gap: 14px;
  margin-bottom: 20px;
  transition: transform 0.15s, box-shadow 0.15s;
  animation: ${p} 0.3s ease both;
  box-shadow: 0 4px 16px #be185d25;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 30px #be185d45;
  }
  &:active { transform: scale(0.97); }
`,E=n.default.span`font-size: 36px;`,B=n.default.div`
  flex: 1;
  text-align: left;
`,R=n.default.div`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
`,F=n.default.div`font-size: 14px; font-weight: 600; color: #f9a8d4;`,O=n.default.div`color: #fb7185; font-size: 24px;`,L=(n.default.div`
  background: linear-gradient(135deg, #0f2a2a, #101827);
  border: 1.5px solid #34d39955;
  border-radius: 18px;
  padding: 14px 16px;
  margin-bottom: 20px;
  animation: ${p} 0.32s ease both;
`,n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
`,n.default.div`
  font-size: 14px;
  font-weight: 800;
  color: #ecfeff;
`,n.default.div`
  font-size: 12px;
  color: #94a3b8;
  margin-top: 2px;
`,n.default.button`
  border: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, #34d399, #0ea5e9);
  color: #06202a;
  font-size: 12px;
  font-weight: 800;
  padding: 10px 12px;
  cursor: pointer;
`,n.default.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`,n.default.div`
  background: #ffffff08;
  border: 1px solid #ffffff12;
  border-radius: 12px;
  padding: 10px 11px;
`,n.default.div`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #64748b;
  margin-bottom: 4px;
`,n.default.div`
  font-size: 13px;
  font-weight: 700;
  color: #e2e8f0;
  word-break: break-word;
`,n.default.div`
  margin-bottom: 24px;
  animation: ${p} 0.35s ease both;
  animation-delay: ${({index:e})=>60*e}ms;
`),I=n.default.div`
  font-size: 15px;
  font-weight: 900;
  color: #a78bfa;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
  padding-left: 4px;
`,D=n.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
`,N=n.default.button`
  display: flex;
  flex-direction: column;
  padding: 18px 16px 16px;
  background: ${({color:e,done:a})=>a?`linear-gradient(145deg, ${e}40, ${e}20)`:"linear-gradient(145deg, #1e2540, #131726)"};
  border: 2.5px solid ${({color:e,done:a})=>a?e+"90":e+"40"};
  border-radius: 28px;
  cursor: pointer;
  text-align: left;
  transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;
  position: relative;
  overflow: hidden;
  box-shadow: ${({color:e})=>`0 4px 16px ${e}20`};

  &::before {
    content: '';
    position: absolute;
    top: -20px; right: -20px;
    width: 80px; height: 80px;
    border-radius: 50%;
    background: ${({color:e})=>e}25;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30px; left: -10px;
    width: 70px; height: 70px;
    border-radius: 50%;
    background: ${({color:e})=>e}15;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px) scale(1.03);
    border-color: ${({color:e})=>e};
    box-shadow: 0 14px 32px ${({color:e})=>e}40;
  }

  &:active { transform: scale(0.96); }
`,G=n.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
`,V=n.default.div`font-size: 48px; line-height: 1; filter: drop-shadow(0 2px 6px #00000040);`,H=n.default.div`
  font-size: 11px;
  font-weight: 800;
  color: ${({color:e})=>e};
  background: ${({color:e})=>e}25;
  border: 1.5px solid ${({color:e})=>e}60;
  border-radius: 12px;
  padding: 3px 9px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,q=n.default.div`
  font-size: 17px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 3px;
  letter-spacing: -0.01em;
`,Y=n.default.div`
  font-size: 12px;
  font-weight: 600;
  color: #7c8db5;
  margin-bottom: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,_=n.default.div`
  display: flex;
  gap: 4px;
  align-items: center;
`,J=n.default.span`
  font-size: 20px;
  opacity: ${({lit:e})=>e?1:.18};
  filter: ${({lit:e,color:a})=>e?`drop-shadow(0 0 6px ${a})`:"none"};
  animation: ${({lit:e})=>e?g:"none"} 0.5s ease both;
  animation-delay: ${({delay:e})=>e}ms;
`,W=n.default.div`
  margin-left: auto;
  font-size: 12px;
  font-weight: 700;
  color: #4b5980;
`,U=n.default.div`
  margin-top: 4px;
  animation: ${p} 0.4s ease both;
`,X=n.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,K=n.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #1e2540, #131726);
  border: 2px solid #a78bfa50;
  border-radius: 20px;
  padding: 10px 14px;
  box-shadow: 0 4px 12px #a78bfa15;
`,Q=n.default.span`font-size: 26px;`,Z=n.default.span`
  font-size: 14px;
  font-weight: 800;
  color: #e2d9ff;
`;function ee({progress:e,speechDebug:a,onSelectLesson:o,onOpenFavorites:t,onSpeechTest:n}){const r=s.length,p=Object.values(e.lessons).filter(e=>e.completed).length,m=Math.round(p/r*100);return(0,c.jsxs)(f,{children:[(0,c.jsx)(h,{children:(0,c.jsxs)(x,{children:[(0,c.jsxs)(b,{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(y,{children:"LêBem"}),(0,c.jsx)(w,{children:"Vamos aprender a ler! 🚀✨"})]}),(0,c.jsx)(v,{children:"🦉"})]}),(0,c.jsxs)($,{children:[(0,c.jsxs)(j,{color:"#f59e0b",children:[(0,c.jsx)(k,{children:"⭐"}),(0,c.jsx)(z,{children:e.totalStars}),(0,c.jsx)(S,{children:"estrelas"})]}),(0,c.jsxs)(j,{color:"#7c3aed",children:[(0,c.jsx)(k,{children:"🏆"}),(0,c.jsxs)(z,{children:["Nível ",e.level]})]}),(0,c.jsxs)(j,{color:"#10b981",children:[(0,c.jsx)(k,{children:"🔥"}),(0,c.jsx)(z,{children:e.streak}),(0,c.jsx)(S,{children:"dias"})]})]}),(0,c.jsx)(T,{children:(0,c.jsx)(A,{pct:m})}),(0,c.jsxs)(C,{children:[(0,c.jsxs)("span",{children:[p," de ",r," lições"]}),(0,c.jsxs)("span",{children:[m,"% completo"]})]})]})}),(0,c.jsxs)(M,{children:[!1,(0,c.jsxs)(P,{onClick:t,children:[(0,c.jsx)(E,{children:"❤️"}),(0,c.jsxs)(B,{children:[(0,c.jsx)(R,{children:"Os meus Favoritos"}),(0,c.jsxs)(F,{children:[e.favorites.length," cartões guardados"]})]}),(0,c.jsx)(O,{children:(0,c.jsx)(i.A,{size:20})})]}),l.map((a,t)=>{const n=a.ids.map(e=>s.find(a=>a.id===e)).filter(Boolean);return(0,c.jsxs)(L,{index:t,children:[(0,c.jsx)(I,{children:a.label}),(0,c.jsx)(D,{children:n.map(a=>{const t=e.lessons[a.id],n=t?.stars??0,r=t?.completed??!1;return(0,c.jsxs)(N,{color:a.color,done:r,onClick:()=>o(a.id),children:[(0,c.jsxs)(G,{children:[(0,c.jsx)(V,{children:a.icon}),r&&(0,c.jsx)(H,{color:a.color,children:"✓ Feito"})]}),(0,c.jsx)(q,{children:a.title}),(0,c.jsx)(Y,{children:a.subtitle}),(0,c.jsxs)(_,{children:[[1,2,3].map(e=>(0,c.jsx)(J,{lit:n>=e,color:a.color,delay:80*e,children:"⭐"},e)),(0,c.jsxs)(W,{children:[a.cards.length," cartões"]})]})]},a.id)})})]},a.label)}),e.badges.length>0&&(0,c.jsxs)(U,{children:[(0,c.jsx)(I,{children:"🏅 Conquistas"}),(0,c.jsx)(X,{children:e.badges.map(e=>{const a=d[e];return a?(0,c.jsxs)(K,{title:a.desc,children:[(0,c.jsx)(Q,{children:a.emoji}),(0,c.jsx)(Z,{children:a.label})]},e):null})})]})]})]})}var ae=o(77180),oe=o(41604),te=o(52709),ne=o(32887),re=o(70947),ie=o(76680),se=o(60894);let le=null,de=null,ce=[],pe=!1,me=null,ue="idle",ge=null;const fe=new Set,he=["Joana","Luciana","Eddy","Flo","Grandma","Grandpa","Reed","Rocko","Sandy","Shelley"];function xe(){return/Chrome/i.test(window.navigator.userAgent)&&!/Edg|OPR|CriOS/i.test(window.navigator.userAgent)}function be(){const e=$e();for(const a of fe)a(e)}function ye(){return 0===ce.length&&(ce=window.speechSynthesis.getVoices()),ce}function we(){if(ce=window.speechSynthesis.getVoices(),ge&&ce.length>0){const e=ge;ge=null,window.setTimeout(()=>je(e),0)}return be(),ce}function ve(){const e=ye();if(xe())return e.find(e=>e.default&&e.lang.toLowerCase().startsWith("pt"))??e.find(e=>"pt-br"===e.lang.toLowerCase())??e.find(e=>"pt-pt"===e.lang.toLowerCase())??e.find(e=>e.lang.toLowerCase().startsWith("pt"))??null;for(const a of he){const o=e.find(e=>e.name.toLowerCase()===a.toLowerCase());if(o)return o}return e.find(e=>"pt-pt"===e.lang.toLowerCase())??e.find(e=>"pt-br"===e.lang.toLowerCase())??e.find(e=>e.lang.toLowerCase().startsWith("pt"))??e.find(e=>e.default)??null}function $e(){if(!("speechSynthesis"in window))return{supported:!1,voicesCount:0,preferredVoiceName:null,preferredVoiceLang:null,availableVoiceNames:[],speaking:!1,pending:!1,paused:!1,lastEvent:ue,lastError:me};const e=window.speechSynthesis,a=ve(),o=ye();return{supported:!0,voicesCount:o.length,preferredVoiceName:a?.name??null,preferredVoiceLang:a?.lang??null,availableVoiceNames:o.filter(e=>e.lang.toLowerCase().startsWith("pt")).slice(0,6).map(e=>`${e.name} (${e.lang})`),speaking:e.speaking,pending:e.pending,paused:e.paused,lastEvent:ue,lastError:me}}function je(e){const a=window.speechSynthesis,o=e.trim(),t=ye();if(!o)return;if(0===t.length)return ge=o,ue="waiting-for-voices",be(),void window.setTimeout(()=>{ge===o&&(ge=null,je(o))},400);null!==de&&(window.clearTimeout(de),de=null),me=null,ue="queued",le=new SpeechSynthesisUtterance(o),le.lang=xe()?"pt-BR":"pt-PT",le.rate=.8,le.pitch=1.1;const n=ve();n&&!xe()?(le.voice=n,le.lang=n.lang):n&&(le.lang=n.lang),le.onstart=()=>{ue="start",be()},le.onend=()=>{le=null,ue="end",be()},le.onerror=e=>{le=null,ue="error",me=e.error,be()},a.resume(),a.speak(le),be()}function ke(e){if(!("speechSynthesis"in window))return;const a=window.speechSynthesis,o=e.trim();if(o){if(null!==de&&(window.clearTimeout(de),de=null),a.speaking||a.pending)return ue="cancel",a.cancel(),de=window.setTimeout(()=>je(o),150),void be();je(o)}}function ze(){ke("Ola, teste de voz do LeBem. Esta e a voz do leitor.")}r.keyframes`from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); }`;const Se=r.keyframes`0%,100%{ transform: translateX(0); } 25%{ transform: translateX(-10px); } 75%{ transform: translateX(10px); }`,Te=r.keyframes`0%{ transform: scale(1); } 50%{ transform: scale(1.2); } 100%{ transform: scale(1); }`,Ae=r.keyframes`from{ transform: translateY(0) scale(1); opacity: 1; } to{ transform: translateY(-120px) scale(0.3) rotate(360deg); opacity: 0; }`,Ce=r.keyframes`0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-12px); }`,Me=n.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${se.w4.colors.mainBg};
  font-family: ${se.w4.typography.fontFamily};
  overflow: hidden;
`,Pe=n.default.div`
  display: flex;
  align-items: center;
  padding: 16px 20px 0;
  padding-top: max(16px, env(safe-area-inset-top, 16px));
  gap: 12px;
  flex-shrink: 0;
`,Ee=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${se.w4.colors.surface};
  border: 1px solid ${se.w4.colors.border};
  border-radius: 12px;
  cursor: pointer;
  color: ${se.w4.colors.mainText};
  flex-shrink: 0;
  transition: background 0.15s;
  &:hover { background: ${se.w4.colors.sidebarHover}; }
`,Be=n.default.div`
  font-size: 17px;
  font-weight: 700;
  color: ${se.w4.colors.mainText};
  flex: 1;
`,Re=n.default.div`
  display: flex;
  gap: 5px;
  flex-shrink: 0;
`,Fe=n.default.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({active:e,done:a,color:o})=>e?o:a?o+"80":se.w4.colors.border};
  transition: background 0.2s, transform 0.2s;
  transform: ${({active:e})=>e?"scale(1.4)":"scale(1)"};
`,Oe=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;
  gap: 20px;
`,Le=n.default.div`
  font-size: 110px;
  line-height: 1;
  cursor: pointer;
  animation: ${Ce} 2.5s ease-in-out infinite;
  filter: drop-shadow(0 8px 24px ${({color:e})=>e}50);
  user-select: none;
  &:hover { animation: ${Te} 0.3s ease; }
`,Ie=n.default.div`
  font-size: 72px;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: ${({color:e})=>e};
  text-shadow: 0 4px 24px ${({color:e})=>e}60;
  line-height: 1;
`,De=n.default.div`
  font-size: 26px;
  font-weight: 700;
  color: ${se.w4.colors.mainText};
`,Ne=n.default.div`
  font-size: 14px;
  color: ${se.w4.colors.mainTextMuted};
  text-align: center;
`,Ge=n.default.div`
  display: flex;
  gap: 12px;
`,Ve=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: ${({color:e,active:a})=>a?e+"30":se.w4.colors.surface};
  border: 2px solid ${({color:e,active:a})=>a?e??"#fff":se.w4.colors.border};
  border-radius: 16px;
  cursor: pointer;
  color: ${({color:e,active:a})=>a?e??"#fff":se.w4.colors.mainText};
  transition: all 0.15s;
  &:hover { transform: scale(1.1); }
  &:active { transform: scale(0.95); }
`,He=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px 24px;
  flex-shrink: 0;
`,qe=n.default.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  background: ${({color:e,disabled:a})=>a?se.w4.colors.surface:e+"20"};
  border: 2px solid ${({color:e,disabled:a})=>a?se.w4.colors.border:e+"60"};
  border-radius: 16px;
  color: ${({color:e,disabled:a})=>a?se.w4.colors.mainTextMuted:e};
  font-family: ${se.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 600;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.15s;
  opacity: ${({disabled:e})=>e?.4:1};
  &:hover:not(:disabled) { transform: translateX(${e=>e.disabled?"0":"3px"}); }
`,Ye=n.default.button`
  flex: 1;
  padding: 16px;
  background: ${({color:e})=>e};
  border: none;
  border-radius: 16px;
  color: #fff;
  font-family: ${se.w4.typography.fontFamily};
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.15s, transform 0.15s;
  &:hover { opacity: 0.9; transform: translateY(-2px); }
  &:active { transform: scale(0.97); }
`,_e=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0;
  gap: 16px;
  overflow: hidden;
`,Je=n.default.div`
  display: flex;
  gap: 6px;
  width: 100%;
`,We=n.default.div`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: ${({state:e,color:a})=>"correct"===e?"#10b981":"wrong"===e?"#ef4444":"current"===e?a:se.w4.colors.border};
  transition: background 0.3s;
`,Ue=n.default.div`
  font-size: 18px;
  font-weight: 600;
  color: ${se.w4.colors.mainTextMuted};
  text-align: center;
`,Xe=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: ${({isShaking:e})=>e?Se:"none"} 0.4s ease;
`,Ke=n.default.div`font-size: 80px; line-height: 1;`,Qe=n.default.div`
  font-size: 20px;
  font-weight: 700;
  color: ${se.w4.colors.mainText};
`,Ze=n.default.div`
  font-size: 80px;
  font-weight: 900;
  color: ${({color:e})=>e};
  text-shadow: 0 4px 24px ${({color:e})=>e}60;
  line-height: 1;
`,ea=n.default.div`
  display: grid;
  grid-template-columns: ${({count:e})=>e<=2?"1fr 1fr":"repeat(2, 1fr)"};
  gap: 10px;
  width: 100%;
`,aa=n.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 18px 12px;
  background: ${({state:e})=>"correct"===e?"#10b98120":"wrong"===e?"#ef444420":se.w4.colors.surface};
  border: 3px solid ${({state:e})=>"correct"===e?"#10b981":"wrong"===e?"#ef4444":se.w4.colors.border};
  border-radius: 18px;
  cursor: pointer;
  font-family: ${se.w4.typography.fontFamily};
  transition: transform 0.15s, border-color 0.15s, background 0.15s;
  animation: ${({isShaking:e})=>e?Se:"none"} 0.4s ease;

  &:hover:not(:disabled) {
    transform: scale(1.04);
    border-color: ${se.w4.colors.accent};
  }
  &:active:not(:disabled) { transform: scale(0.97); }
  &:disabled { cursor: not-allowed; }
`,oa=n.default.div`font-size: 42px; line-height: 1;`,ta=n.default.div`
  font-size: 30px;
  font-weight: 900;
  color: ${({color:e})=>e};
`,na=n.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 600;
  min-height: 28px;
`,ra=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 20px;
  position: relative;
  overflow: hidden;
`,ia=n.default.div`
  position: absolute;
  font-size: 28px;
  top: 60%;
  left: ${({x:e})=>e}%;
  animation: ${Ae} 1.4s ease ${({delay:e})=>e}s forwards;
  pointer-events: none;
`,sa=n.default.div`
  font-size: 80px;
  animation: ${Ce} 1s ease-in-out infinite;
`,la=n.default.div`
  font-size: 32px;
  font-weight: 900;
  color: ${({color:e})=>e};
  text-align: center;
`,da=n.default.div`
  font-size: 18px;
  color: ${se.w4.colors.mainTextMuted};
`,ca=n.default.div`
  display: flex;
  gap: 8px;
  font-size: 44px;
`,pa=n.default.button`
  padding: 16px 40px;
  background: ${({color:e})=>e};
  border: none;
  border-radius: 20px;
  color: #fff;
  font-family: ${se.w4.typography.fontFamily};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.15s, transform 0.15s;
  &:hover { opacity: 0.9; transform: translateY(-2px); }
`;function ma({lessonId:e,progress:a,onBack:o,onComplete:n,onToggleFavorite:r}){const i=(l=e,s.find(e=>e.id===l));var l;const[d,p]=(0,t.useState)("learn"),[m,u]=(0,t.useState)(0),[g,f]=(0,t.useState)([]),[h,x]=(0,t.useState)(0),[b,y]=(0,t.useState)([]),[w,v]=(0,t.useState)(null),[$,j]=(0,t.useState)(0),[k,z]=(0,t.useState)(!1),[S,T]=(0,t.useState)(!1),[A,C]=(0,t.useState)(!1),M=(0,t.useCallback)(e=>{ke(e),C(!0),setTimeout(()=>C(!1),1200)},[]),P=(0,t.useCallback)(()=>{const e=function(e){const a=[...e.cards].sort(()=>Math.random()-.5).slice(0,5),o="palavras"===e.id||"frases"===e.id;return a.map(a=>{const t=e.cards.filter(e=>e.id!==a.id).sort(()=>Math.random()-.5).slice(0,3);if(o){const e=[{emoji:a.emoji},...t.map(e=>({emoji:e.emoji}))].sort(()=>Math.random()-.5);return{type:"word-to-emoji",cardId:a.id,promptWord:a.letter,label:"Qual é a imagem?",options:e,correctIndex:e.findIndex(e=>e.emoji===a.emoji)}}if(Math.random()>.5){const o=[{letter:a.letter},...t.map(e=>({letter:e.letter}))].sort(()=>Math.random()-.5);return{type:"emoji-to-letter",cardId:a.id,promptEmoji:a.emoji,promptWord:a.word,label:"vogais"===e.id?"Começa com que letra?":"Começa com que sílaba?",options:o,correctIndex:o.findIndex(e=>e.letter===a.letter)}}const n=[{emoji:a.emoji},...t.map(e=>({emoji:e.emoji}))].sort(()=>Math.random()-.5);return{type:"letter-to-emoji",cardId:a.id,promptLetter:a.letter,label:"Qual é a imagem?",options:n,correctIndex:n.findIndex(e=>e.emoji===a.emoji)}})}(i);f(e),x(0),y([]),v(null),j(0),p("quiz")},[i]),E=(0,t.useCallback)(e=>{if(null!==w||!g[h])return;const a=e===g[h].correctIndex;v(e),a?(j(e=>e+1),y(e=>[...e,"correct"]),setTimeout(()=>ke(g[h]?.promptWord??g[h]?.promptLetter??""),200)):(z(!0),y(e=>[...e,"wrong"]),setTimeout(()=>z(!1),500)),setTimeout(()=>{h+1>=g.length?(p("result"),T(!0)):(x(e=>e+1),v(null))},900)},[w,g,h]),B=(0,t.useCallback)(()=>{n(e,$,g.length)},[e,$,g.length,n]);if(!i)return null;const R=i.cards[m],F=`${e}:${R?.id}`,O=a.favorites.includes(F),L=$>=g.length?3:$>=g.length-1?2:$>=Math.ceil(g.length/2)?1:0;if("learn"===d)return(0,c.jsxs)(Me,{children:[(0,c.jsxs)(Pe,{children:[(0,c.jsx)(Ee,{onClick:o,children:(0,c.jsx)(ae.A,{size:18})}),(0,c.jsx)(Be,{children:i.title}),(0,c.jsx)(Re,{children:i.cards.map((e,a)=>(0,c.jsx)(Fe,{active:a===m,done:a<m,color:i.color},a))})]}),(0,c.jsxs)(Oe,{children:[(0,c.jsx)(Le,{color:i.color,onClick:()=>M(R.word),children:R.emoji}),(0,c.jsx)(Ie,{color:i.color,children:R.letter}),(0,c.jsx)(De,{children:R.word}),R.hint&&(0,c.jsx)(Ne,{children:R.hint}),(0,c.jsxs)(Ge,{children:[(0,c.jsx)(Ve,{type:"button",color:"#f59e0b",active:A,title:"Ouvir",onClick:()=>M(R.word),children:(0,c.jsx)(oe.A,{size:22,color:"#f59e0b"})}),(0,c.jsx)(Ve,{type:"button",color:"#ef4444",active:O,title:O?"Remover dos favoritos":"Adicionar aos favoritos",onClick:()=>r(F),children:(0,c.jsx)(te.A,{size:22,fill:O?"#ef4444":"none",color:"#ef4444"})})]})]}),(0,c.jsxs)(He,{children:[(0,c.jsxs)(qe,{color:i.color,disabled:0===m,onClick:()=>{m>0&&u(e=>e-1)},children:[(0,c.jsx)(ae.A,{size:18})," Anterior"]}),m<i.cards.length-1?(0,c.jsxs)(qe,{color:i.color,onClick:()=>{u(e=>e+1),M(i.cards[m+1].word)},children:["Próxima ",(0,c.jsx)(ne.A,{size:18})]}):(0,c.jsx)(Ye,{color:i.color,onClick:P,children:"Fazer Quiz 🎯"})]})]});if("quiz"===d){const e=g[h];return e?(0,c.jsxs)(Me,{children:[(0,c.jsxs)(Pe,{children:[(0,c.jsx)(Ee,{onClick:o,children:(0,c.jsx)(ae.A,{size:18})}),(0,c.jsxs)(Be,{children:["Quiz — ",i.title]})]}),(0,c.jsxs)(_e,{children:[(0,c.jsx)(Je,{children:g.map((e,a)=>(0,c.jsx)(We,{color:i.color,state:a<b.length?b[a]:a===h?"current":"pending"},a))}),(0,c.jsx)(Ue,{children:e.label}),(0,c.jsxs)(Xe,{isShaking:k,color:i.color,children:[e.promptEmoji&&(0,c.jsx)(Ke,{children:e.promptEmoji}),e.promptWord&&"word-to-emoji"!==e.type&&(0,c.jsx)(Qe,{children:e.promptWord}),"word-to-emoji"===e.type&&(0,c.jsx)(Ze,{color:i.color,children:e.promptWord}),e.promptLetter&&(0,c.jsx)(Ze,{color:i.color,children:e.promptLetter})]}),(0,c.jsx)(ea,{count:e.options.length,children:e.options.map((a,o)=>{const t=null===w?"idle":o===e.correctIndex?"correct":o===w&&w!==e.correctIndex?"wrong":"idle";return(0,c.jsxs)(aa,{state:t,isShaking:"wrong"===t&&k,disabled:null!==w,onClick:()=>E(o),children:[a.emoji&&(0,c.jsx)(oa,{children:a.emoji}),a.letter&&(0,c.jsx)(ta,{color:i.color,children:a.letter})]},o)})}),(0,c.jsxs)(na,{children:[null!==w&&w===e.correctIndex&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(re.A,{size:22,color:"#10b981"})," ",(0,c.jsx)("span",{style:{color:"#10b981"},children:"Muito bem! 🎉"})]}),null!==w&&w!==e.correctIndex&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(ie.A,{size:22,color:"#ef4444"})," ",(0,c.jsxs)("span",{style:{color:"#ef4444"},children:["Era ",e.options[e.correctIndex]?.letter??e.options[e.correctIndex]?.emoji,"!"]})]})]})]})]}):null}const I=L>0?["⭐","✨","🌟","💫","⭐","✨"].map((e,a)=>({emoji:e,x:10+15*a,delay:.15*a})):[];return(0,c.jsxs)(Me,{children:[(0,c.jsxs)(Pe,{children:[(0,c.jsx)(Ee,{onClick:o,children:(0,c.jsx)(ae.A,{size:18})}),(0,c.jsx)(Be,{children:"Resultado"})]}),(0,c.jsxs)(ra,{children:[S&&I.map((e,a)=>(0,c.jsx)(ia,{x:e.x,delay:e.delay,children:e.emoji},a)),(0,c.jsx)(sa,{children:3===L?"🏆":2===L?"🎉":1===L?"👍":"😅"}),(0,c.jsx)(la,{color:i.color,children:3===L?"Perfeito!":2===L?"Muito bem!":1===L?"Bom esforço!":"Continua a tentar!"}),(0,c.jsxs)(da,{children:[$," de ",g.length," acertos"]}),(0,c.jsx)(ca,{children:[1,2,3].map(e=>(0,c.jsx)("span",{style:{opacity:L>=e?1:.2},children:"⭐"},e))}),(0,c.jsx)(pa,{color:i.color,onClick:B,children:"Continuar →"})]})]})}const ua=r.keyframes`from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); }`,ga=n.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${se.w4.colors.mainBg};
  font-family: ${se.w4.typography.fontFamily};
  overflow: hidden;
`,fa=n.default.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  padding-top: max(16px, env(safe-area-inset-top, 16px));
  gap: 12px;
  border-bottom: 1px solid ${se.w4.colors.border};
  flex-shrink: 0;
`,ha=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${se.w4.colors.surface};
  border: 1px solid ${se.w4.colors.border};
  border-radius: 12px;
  cursor: pointer;
  color: ${se.w4.colors.mainText};
  transition: background 0.15s;
  &:hover { background: ${se.w4.colors.sidebarHover}; }
`,xa=n.default.div`
  font-size: 18px;
  font-weight: 700;
  color: ${se.w4.colors.mainText};
`,ba=n.default.div`
  margin-left: auto;
  font-size: 13px;
  color: ${se.w4.colors.mainTextMuted};
`,ya=n.default.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 16px 40px;
`,wa=n.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,va=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px 14px;
  background: ${({color:e})=>e}12;
  border: 2px solid ${({color:e})=>e}30;
  border-radius: 20px;
  position: relative;
  animation: ${ua} 0.3s ease both;
  animation-delay: ${({index:e})=>40*e}ms;
`,$a=n.default.div`
  font-size: 52px;
  line-height: 1;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover { transform: scale(1.1); transition: transform 0.15s; }
`,ja=n.default.div`
  font-size: 22px;
  font-weight: 900;
  color: ${({color:e})=>e};
  letter-spacing: 0.02em;
`,ka=n.default.div`
  font-size: 14px;
  color: ${se.w4.colors.mainTextMuted};
  margin-top: 2px;
`,za=n.default.div`
  display: flex;
  gap: 6px;
  margin-top: 10px;
`,Sa=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${se.w4.colors.surface};
  border: 1px solid ${se.w4.colors.border};
  border-radius: 10px;
  cursor: pointer;
  color: ${se.w4.colors.mainTextMuted};
  transition: all 0.15s;
  &:hover { color: ${se.w4.colors.mainText}; background: ${se.w4.colors.sidebarHover}; }
`,Ta=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 16px;
  color: ${se.w4.colors.mainTextMuted};
  font-size: 16px;
  text-align: center;
`;function Aa({progress:e,onBack:a,onToggleFavorite:o}){const t=[];for(const a of e.favorites){const[e,o]=a.split(":"),n=s.find(a=>a.id===e),r=n?.cards.find(e=>e.id===o);n&&r&&t.push({cardKey:a,card:r,color:n.color})}return(0,c.jsxs)(ga,{children:[(0,c.jsxs)(fa,{children:[(0,c.jsx)(ha,{onClick:a,children:(0,c.jsx)(ae.A,{size:18})}),(0,c.jsx)(xa,{children:"❤️ Favoritos"}),(0,c.jsxs)(ba,{children:[t.length," guardados"]})]}),(0,c.jsx)(ya,{children:0===t.length?(0,c.jsxs)(Ta,{children:[(0,c.jsx)("span",{style:{fontSize:64},children:"💔"}),(0,c.jsx)("span",{children:"Ainda não tens favoritos."}),(0,c.jsx)("span",{style:{fontSize:14},children:"Toca no ❤️ nas lições para guardar."})]}):(0,c.jsx)(wa,{children:t.map(({cardKey:e,card:a,color:t},n)=>(0,c.jsxs)(va,{color:t,index:n,children:[(0,c.jsx)($a,{onClick:()=>ke(a.word),children:a.emoji}),(0,c.jsx)(ja,{color:t,children:a.letter}),(0,c.jsx)(ka,{children:a.word}),(0,c.jsxs)(za,{children:[(0,c.jsx)(Sa,{type:"button",title:"Ouvir",onClick:()=>ke(a.word),children:(0,c.jsx)(oe.A,{size:16})}),(0,c.jsx)(Sa,{type:"button",title:"Remover dos favoritos",onClick:()=>o(e),style:{color:"#ef4444",borderColor:"#ef444440"},children:(0,c.jsx)(te.A,{size:16,fill:"#ef4444"})})]})]},e))})})]})}const Ca="atlantis-leitor-progress",Ma={totalStars:0,level:1,streak:0,lastPlayedDate:"",lessons:{},favorites:[],badges:[]};function Pa(e,a){return e.badges.includes(a)?e:{...e,badges:[...e.badges,a]}}const Ea=n.default.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;function Ba({onBack:e}){const[a,o]=(0,t.useState)(()=>function(){try{const e=localStorage.getItem(Ca);return e?{...Ma,...JSON.parse(e)}:{...Ma}}catch{return{...Ma}}}()),[n,r]=(0,t.useState)(()=>$e());(0,t.useEffect)(()=>{return"speechSynthesis"in window&&(we(),pe||(window.speechSynthesis.addEventListener("voiceschanged",we),pe=!0,be())),e=r,fe.add(e),e($e()),()=>{fe.delete(e)};var e},[]);const[i,s]=(0,t.useState)({id:"home"}),l=(0,t.useCallback)(e=>{o(a=>{const o=function(e){let a=e;return a.totalStars>=1&&!a.badges.includes("primeira-estrela")&&(a=Pa(a,"primeira-estrela")),Object.values(a.lessons).filter(e=>e.completed).length>=1&&!a.badges.includes("primeira-licao")&&(a=Pa(a,"primeira-licao")),Object.values(a.lessons).some(e=>3===e.stars)&&!a.badges.includes("tres-estrelas")&&(a=Pa(a,"tres-estrelas")),a.favorites.length>=10&&!a.badges.includes("coleccionador")&&(a=Pa(a,"coleccionador")),3!==a.lessons.vogais?.stars||a.badges.includes("vogais-mestre")||(a=Pa(a,"vogais-mestre")),["silabas-b","silabas-c","silabas-d","silabas-f","silabas-g","silabas-l","silabas-m","silabas-n","silabas-p","silabas-r","silabas-s","silabas-t","silabas-v"].every(e=>a.lessons[e]?.completed)&&!a.badges.includes("leitor")&&(a=Pa(a,"leitor")),["animais","cores","numeros","corpo","familia"].every(e=>a.lessons[e]?.completed)&&!a.badges.includes("explorador")&&(a=Pa(a,"explorador")),3!==a.lessons.numeros?.stars||a.badges.includes("numeros-mestre")||(a=Pa(a,"numeros-mestre")),a}(e(a));return function(e){try{localStorage.setItem(Ca,JSON.stringify(e))}catch{}}(o),o})},[]),d=(0,t.useCallback)(e=>{l(a=>function(e,a){const o=e.favorites.includes(a);return{...e,favorites:o?e.favorites.filter(e=>e!==a):[...e.favorites,a]}}(a,e))},[l]),p=(0,t.useCallback)((e,a,o)=>{l(t=>function(e,a,o,t){o>=t||o>=t-1||Math.ceil(t/2);const n=e.lessons[a],r=Math.max(n?.bestScore??0,o),i=r>=t?3:r>=t-1?2:r>=Math.ceil(t/2)?1:0,s=Math.max(0,i-(n?.stars??0)),l=(new Date).toISOString().split("T")[0],d=(()=>{if(!e.lastPlayedDate)return!1;const a=new Date(e.lastPlayedDate);return 1==(new Date(l).getTime()-a.getTime())/864e5})();return{...e,totalStars:e.totalStars+s,level:Math.floor((e.totalStars+s)/5)+1,streak:e.lastPlayedDate===l?e.streak:d?e.streak+1:1,lastPlayedDate:l,lessons:{...e.lessons,[a]:{stars:i,bestScore:r,completed:i>0}}}}(t,e,a,o)),s({id:"home"})},[l]);return"lesson"===i.id?(0,c.jsx)(Ea,{children:(0,c.jsx)(ma,{lessonId:i.lessonId,progress:a,onBack:()=>s({id:"home"}),onComplete:p,onToggleFavorite:d})}):"favorites"===i.id?(0,c.jsx)(Ea,{children:(0,c.jsx)(Aa,{progress:a,onBack:()=>s({id:"home"}),onToggleFavorite:d})}):(0,c.jsx)(Ea,{children:(0,c.jsx)(ee,{progress:a,speechDebug:n,onSelectLesson:e=>s({id:"lesson",lessonId:e}),onOpenFavorites:()=>s({id:"favorites"}),onSpeechTest:ze})})}},10388(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"e1-greetings","name":"Greetings","icon":"hand","file":"english/en/year1/greetings.md"},{"id":"e1-numbers","name":"Numbers 1–10","icon":"hash","file":"english/en/year1/numbers.md"},{"id":"e1-colors","name":"Colors","icon":"palette","file":"english/en/year1/colors.md"},{"id":"e1-animals","name":"Animals","icon":"feather","file":"english/en/year1/animals.md"},{"id":"e1-family","name":"Family","icon":"heart","file":"english/en/year1/family.md"},{"id":"e1-classroom","name":"Classroom","icon":"map","file":"english/en/year1/classroom.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"e2-food","name":"Food","icon":"apple","file":"english/en/year2/food.md"},{"id":"e2-body","name":"Body Parts","icon":"activity","file":"english/en/year2/body.md"},{"id":"e2-weather","name":"Weather","icon":"cloud","file":"english/en/year2/weather.md"},{"id":"e2-days","name":"Days & Months","icon":"calendar","file":"english/en/year2/days.md"},{"id":"e2-clothes","name":"Clothes","icon":"shirt","file":"english/en/year2/clothes.md"},{"id":"e2-house","name":"The House","icon":"home","file":"english/en/year2/house.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"e3-routines","name":"Daily Routines","icon":"clock","file":"english/en/year3/routines.md"},{"id":"e3-sports","name":"Sports","icon":"trophy","file":"english/en/year3/sports.md"},{"id":"e3-nature","name":"Nature","icon":"leaf","file":"english/en/year3/nature.md"},{"id":"e3-directions","name":"Directions","icon":"compass","file":"english/en/year3/directions.md"},{"id":"e3-time","name":"Telling Time","icon":"watch","file":"english/en/year3/time.md"},{"id":"e3-jobs","name":"Jobs","icon":"briefcase","file":"english/en/year3/jobs.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"e4-past","name":"Simple Past","icon":"clock","file":"english/en/year4/past.md"},{"id":"e4-comparatives","name":"Comparatives","icon":"bar-chart-2","file":"english/en/year4/comparatives.md"},{"id":"e4-travel","name":"Travel","icon":"plane","file":"english/en/year4/travel.md"},{"id":"e4-media","name":"Media & Technology","icon":"monitor","file":"english/en/year4/media.md"},{"id":"e4-health","name":"Health","icon":"heart","file":"english/en/year4/health.md"},{"id":"e4-environment","name":"Environment","icon":"globe","file":"english/en/year4/environment.md"}]},{"id":"year5","name":"Year 5","icon":"⑤","defaultOpen":false,"children":[{"id":"e5-future","name":"Simple Future","icon":"arrow-right","file":"english/en/year5/future.md"},{"id":"e5-conditionals","name":"Conditionals","icon":"git-branch","file":"english/en/year5/conditionals.md"},{"id":"e5-culture","name":"Culture","icon":"landmark","file":"english/en/year5/culture.md"},{"id":"e5-technology","name":"Technology","icon":"cpu","file":"english/en/year5/technology.md"},{"id":"e5-debate","name":"Debate & Opinion","icon":"message-circle","file":"english/en/year5/debate.md"},{"id":"e5-writing","name":"Creative Writing","icon":"pen-tool","file":"english/en/year5/writing.md"}]},{"id":"resources","name":"Resources","icon":"📚","defaultOpen":false,"children":[{"id":"res-eng-vocab","name":"Essential Vocabulary","icon":"list","file":"english/en/resources/vocabulary.md"},{"id":"res-eng-verbs","name":"Verb Tables","icon":"zap","file":"english/en/resources/verbs.md"},{"id":"res-eng-phrases","name":"Useful Phrases","icon":"message-square","file":"english/en/resources/phrases.md"},{"id":"res-eng-pronunciation","name":"Pronunciation Guide","icon":"volume-2","file":"english/en/resources/pronunciation.md"}]}]}')},94831(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.º Ano","icon":"①","defaultOpen":false,"children":[{"id":"e1-greetings","name":"Cumprimentos","icon":"hand","file":"english/pt/year1/greetings.md"},{"id":"e1-numbers","name":"Números 1–10","icon":"hash","file":"english/pt/year1/numbers.md"},{"id":"e1-colors","name":"Cores","icon":"palette","file":"english/pt/year1/colors.md"},{"id":"e1-animals","name":"Animais","icon":"feather","file":"english/pt/year1/animals.md"},{"id":"e1-family","name":"Família","icon":"heart","file":"english/pt/year1/family.md"},{"id":"e1-classroom","name":"Sala de Aula","icon":"map","file":"english/pt/year1/classroom.md"}]},{"id":"year2","name":"2.º Ano","icon":"②","defaultOpen":false,"children":[{"id":"e2-food","name":"Comida","icon":"apple","file":"english/pt/year2/food.md"},{"id":"e2-body","name":"Corpo Humano","icon":"activity","file":"english/pt/year2/body.md"},{"id":"e2-weather","name":"Tempo e Clima","icon":"cloud","file":"english/pt/year2/weather.md"},{"id":"e2-days","name":"Dias e Meses","icon":"calendar","file":"english/pt/year2/days.md"},{"id":"e2-clothes","name":"Roupa","icon":"shirt","file":"english/pt/year2/clothes.md"},{"id":"e2-house","name":"A Casa","icon":"home","file":"english/pt/year2/house.md"}]},{"id":"year3","name":"3.º Ano","icon":"③","defaultOpen":false,"children":[{"id":"e3-routines","name":"Rotinas Diárias","icon":"clock","file":"english/pt/year3/routines.md"},{"id":"e3-sports","name":"Desportos","icon":"trophy","file":"english/pt/year3/sports.md"},{"id":"e3-nature","name":"Natureza","icon":"leaf","file":"english/pt/year3/nature.md"},{"id":"e3-directions","name":"Direções","icon":"compass","file":"english/pt/year3/directions.md"},{"id":"e3-time","name":"As Horas","icon":"watch","file":"english/pt/year3/time.md"},{"id":"e3-jobs","name":"Profissões","icon":"briefcase","file":"english/pt/year3/jobs.md"}]},{"id":"year4","name":"4.º Ano","icon":"④","defaultOpen":false,"children":[{"id":"e4-past","name":"Passado Simples","icon":"clock","file":"english/pt/year4/past.md"},{"id":"e4-comparatives","name":"Comparativos","icon":"bar-chart-2","file":"english/pt/year4/comparatives.md"},{"id":"e4-travel","name":"Viagens","icon":"plane","file":"english/pt/year4/travel.md"},{"id":"e4-media","name":"Média e Tecnologia","icon":"monitor","file":"english/pt/year4/media.md"},{"id":"e4-health","name":"Saúde","icon":"heart","file":"english/pt/year4/health.md"},{"id":"e4-environment","name":"Ambiente","icon":"globe","file":"english/pt/year4/environment.md"}]},{"id":"year5","name":"5.º Ano","icon":"⑤","defaultOpen":false,"children":[{"id":"e5-future","name":"Futuro Simples","icon":"arrow-right","file":"english/pt/year5/future.md"},{"id":"e5-conditionals","name":"Condicionais","icon":"git-branch","file":"english/pt/year5/conditionals.md"},{"id":"e5-culture","name":"Cultura","icon":"landmark","file":"english/pt/year5/culture.md"},{"id":"e5-technology","name":"Tecnologia","icon":"cpu","file":"english/pt/year5/technology.md"},{"id":"e5-debate","name":"Debate e Opinião","icon":"message-circle","file":"english/pt/year5/debate.md"},{"id":"e5-writing","name":"Escrita Criativa","icon":"pen-tool","file":"english/pt/year5/writing.md"}]},{"id":"resources","name":"Recursos","icon":"📚","defaultOpen":false,"children":[{"id":"res-eng-vocab","name":"Vocabulário Essencial","icon":"list","file":"english/pt/resources/vocabulario.md"},{"id":"res-eng-verbs","name":"Tabela de Verbos","icon":"zap","file":"english/pt/resources/verbos.md"},{"id":"res-eng-phrases","name":"Frases Úteis","icon":"message-square","file":"english/pt/resources/frases.md"},{"id":"res-eng-pronunciation","name":"Guia de Pronúncia","icon":"volume-2","file":"english/pt/resources/pronuncia.md"}]}]}')},81664(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-numeros","name":"Numbers to 20","icon":"hash","file":"math/en/year1/numbers.md"},{"id":"y1-adicao","name":"Addition","icon":"plus","file":"math/en/year1/addition.md"},{"id":"y1-subtracao","name":"Subtraction","icon":"minus","file":"math/en/year1/subtraction.md"},{"id":"y1-geometria","name":"Geometry","icon":"triangle","file":"math/en/year1/geometry.md"},{"id":"y1-medidas","name":"Measurements","icon":"ruler","file":"math/en/year1/measures.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-numeros","name":"Numbers to 100","icon":"hash","file":"math/en/year2/numbers.md"},{"id":"y2-adicao","name":"Addition with Carrying","icon":"plus","file":"math/en/year2/addition.md"},{"id":"y2-subtracao","name":"Subtraction with Borrowing","icon":"minus","file":"math/en/year2/subtraction.md"},{"id":"y2-tabuadas","name":"Times Tables × 2, × 5, × 10","icon":"x","file":"math/en/year2/multiplication.md"},{"id":"y2-geometria","name":"Geometry","icon":"triangle","file":"math/en/year2/geometry.md"},{"id":"y2-medidas","name":"Measurements","icon":"ruler","file":"math/en/year2/measures.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-numeros","name":"Numbers to 1000","icon":"hash","file":"math/en/year3/numbers.md"},{"id":"y3-multiplicacao","name":"Times Tables × 3 to × 9","icon":"x","file":"math/en/year3/multiplication.md"},{"id":"y3-divisao","name":"Division","icon":"slash","file":"math/en/year3/division.md"},{"id":"y3-fracoes","name":"Fractions","icon":"pie-chart","file":"math/en/year3/fractions.md"},{"id":"y3-geometria","name":"Geometry","icon":"triangle","file":"math/en/year3/geometry.md"},{"id":"y3-medidas","name":"Measurements","icon":"ruler","file":"math/en/year3/measures.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-numeros","name":"Numbers to 1 000 000","icon":"hash","file":"math/en/year4/numbers.md"},{"id":"y4-multiplicacao","name":"Multiplication","icon":"x","file":"math/en/year4/multiplication.md"},{"id":"y4-divisao","name":"Division with Remainder","icon":"slash","file":"math/en/year4/division.md"},{"id":"y4-decimais","name":"Decimal Numbers","icon":"circle-dot","file":"math/en/year4/decimals.md"},{"id":"y4-geometria","name":"Geometry","icon":"triangle","file":"math/en/year4/geometry.md"},{"id":"y4-medidas","name":"Measurements","icon":"ruler","file":"math/en/year4/measures.md"},{"id":"y4-dados","name":"Data Handling","icon":"bar-chart-2","file":"math/en/year4/data.md"}]},{"id":"resources","name":"Resources","icon":"📚","defaultOpen":false,"children":[{"id":"res-tabuadas","name":"Times Tables","icon":"grid","file":"math/en/resources/timestables.md"},{"id":"res-formas","name":"Geometric Shapes","icon":"hexagon","file":"math/en/resources/shapes.md"},{"id":"res-areas","name":"Areas & Perimeters","icon":"square","file":"math/en/resources/areas.md"},{"id":"res-unidades","name":"Units of Measurement","icon":"ruler","file":"math/en/resources/units.md"},{"id":"res-romanos","name":"Roman Numerals","icon":"landmark","file":"math/en/resources/roman.md"},{"id":"res-relogio","name":"Interactive Clock","icon":"clock","file":"math/en/resources/clock.md"}]}]}')},87891(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.º Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-numeros","name":"Números até 20","icon":"hash","file":"math/pt/year1/numbers.md"},{"id":"y1-adicao","name":"Adição","icon":"plus","file":"math/pt/year1/addition.md"},{"id":"y1-subtracao","name":"Subtração","icon":"minus","file":"math/pt/year1/subtraction.md"},{"id":"y1-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year1/geometria.md"},{"id":"y1-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year1/medidas.md"}]},{"id":"year2","name":"2.º Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-numeros","name":"Números até 100","icon":"hash","file":"math/pt/year2/numbers.md"},{"id":"y2-adicao","name":"Adição com Transporte","icon":"plus","file":"math/pt/year2/addition.md"},{"id":"y2-subtracao","name":"Subtração com Empréstimo","icon":"minus","file":"math/pt/year2/subtraction.md"},{"id":"y2-tabuadas","name":"Tabuadas × 2, × 5, × 10","icon":"x","file":"math/pt/year2/multiplication.md"},{"id":"y2-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year2/geometria.md"},{"id":"y2-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year2/medidas.md"}]},{"id":"year3","name":"3.º Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-numeros","name":"Números até 1000","icon":"hash","file":"math/pt/year3/numbers.md"},{"id":"y3-multiplicacao","name":"Tabuadas × 3 ao × 9","icon":"x","file":"math/pt/year3/multiplication.md"},{"id":"y3-divisao","name":"Divisão","icon":"slash","file":"math/pt/year3/division.md"},{"id":"y3-fracoes","name":"Frações","icon":"pie-chart","file":"math/pt/year3/fractions.md"},{"id":"y3-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year3/geometria.md"},{"id":"y3-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year3/medidas.md"}]},{"id":"year4","name":"4.º Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-numeros","name":"Números até 1 000 000","icon":"hash","file":"math/pt/year4/numbers.md"},{"id":"y4-multiplicacao","name":"Multiplicação","icon":"x","file":"math/pt/year4/multiplication.md"},{"id":"y4-divisao","name":"Divisão com Resto","icon":"slash","file":"math/pt/year4/division.md"},{"id":"y4-decimais","name":"Números Decimais","icon":"circle-dot","file":"math/pt/year4/decimals.md"},{"id":"y4-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year4/geometria.md"},{"id":"y4-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year4/medidas.md"},{"id":"y4-dados","name":"Tratamento de Dados","icon":"bar-chart-2","file":"math/pt/year4/dados.md"}]},{"id":"resources","name":"Recursos","icon":"📚","defaultOpen":false,"children":[{"id":"res-tabuadas","name":"Tabuadas","icon":"grid","file":"math/pt/resources/tabuadas.md"},{"id":"res-formas","name":"Formas Geométricas","icon":"hexagon","file":"math/pt/resources/formas.md"},{"id":"res-areas","name":"Áreas e Perímetros","icon":"square","file":"math/pt/resources/areas.md"},{"id":"res-unidades","name":"Unidades de Medida","icon":"ruler","file":"math/pt/resources/unidades.md"},{"id":"res-romanos","name":"Números Romanos","icon":"landmark","file":"math/pt/resources/romanos.md"},{"id":"res-relogio","name":"Relógio Interativo","icon":"clock","file":"math/pt/resources/relogio.md"}]}]}')},31103(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year1/reading.md"},{"id":"y1-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year1/grammar.md"},{"id":"y1-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year1/vocabulary.md"},{"id":"y1-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year1/spelling.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year2/reading.md"},{"id":"y2-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year2/grammar.md"},{"id":"y2-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year2/texttypes.md"},{"id":"y2-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year2/vocabulary.md"},{"id":"y2-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year2/spelling.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year3/reading.md"},{"id":"y3-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year3/grammar.md"},{"id":"y3-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year3/texttypes.md"},{"id":"y3-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year3/vocabulary.md"},{"id":"y3-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year3/spelling.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year4/reading.md"},{"id":"y4-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year4/grammar.md"},{"id":"y4-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year4/texttypes.md"},{"id":"y4-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year4/vocabulary.md"},{"id":"y4-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year4/spelling.md"}]},{"id":"resources","name":"Resources","icon":"📚","defaultOpen":false,"children":[{"id":"res-alfabeto","name":"Alphabet & Sounds","icon":"a-large-small","file":"portuguese/en/resources/alphabet.md"},{"id":"res-pontuacao","name":"Punctuation Marks","icon":"circle-dot","file":"portuguese/en/resources/punctuation.md"},{"id":"res-classes","name":"Word Classes","icon":"layers","file":"portuguese/en/resources/wordclasses.md"},{"id":"res-verbos","name":"Verb Conjugation","icon":"zap","file":"portuguese/en/resources/verbs.md"}]}]}')},39360(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.º Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year1/leitura.md"},{"id":"y1-gramatica","name":"Gramática","icon":"type","file":"portuguese/pt/year1/gramatica.md"},{"id":"y1-vocabulario","name":"Vocabulário","icon":"list","file":"portuguese/pt/year1/vocabulario.md"},{"id":"y1-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year1/ortografia.md"}]},{"id":"year2","name":"2.º Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year2/leitura.md"},{"id":"y2-gramatica","name":"Gramática","icon":"type","file":"portuguese/pt/year2/gramatica.md"},{"id":"y2-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year2/texto.md"},{"id":"y2-vocabulario","name":"Vocabulário","icon":"list","file":"portuguese/pt/year2/vocabulario.md"},{"id":"y2-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year2/ortografia.md"}]},{"id":"year3","name":"3.º Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year3/leitura.md"},{"id":"y3-gramatica","name":"Gramática","icon":"type","file":"portuguese/pt/year3/gramatica.md"},{"id":"y3-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year3/texto.md"},{"id":"y3-vocabulario","name":"Vocabulário","icon":"list","file":"portuguese/pt/year3/vocabulario.md"},{"id":"y3-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year3/ortografia.md"}]},{"id":"year4","name":"4.º Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year4/leitura.md"},{"id":"y4-gramatica","name":"Gramática","icon":"type","file":"portuguese/pt/year4/gramatica.md"},{"id":"y4-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year4/texto.md"},{"id":"y4-vocabulario","name":"Vocabulário","icon":"list","file":"portuguese/pt/year4/vocabulario.md"},{"id":"y4-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year4/ortografia.md"}]},{"id":"resources","name":"Recursos","icon":"📚","defaultOpen":false,"children":[{"id":"res-alfabeto","name":"Alfabeto e Sons","icon":"a-large-small","file":"portuguese/pt/resources/alfabeto.md"},{"id":"res-pontuacao","name":"Sinais de Pontuação","icon":"circle-dot","file":"portuguese/pt/resources/pontuacao.md"},{"id":"res-classes","name":"Classes de Palavras","icon":"layers","file":"portuguese/pt/resources/classes.md"},{"id":"res-verbos","name":"Verbos — Conjugação","icon":"zap","file":"portuguese/pt/resources/verbos.md"}]}]}')},6662(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-corpo","name":"My Body","icon":"activity","file":"science/en/year1/body.md"},{"id":"y1-familia","name":"My Family","icon":"heart","file":"science/en/year1/family.md"},{"id":"y1-escola","name":"My School","icon":"map","file":"science/en/year1/school.md"},{"id":"y1-seres-vivos","name":"Living Things","icon":"feather","file":"science/en/year1/livingthings.md"},{"id":"y1-estacoes","name":"Seasons of the Year","icon":"sun","file":"science/en/year1/seasons.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-corpo","name":"The Human Body","icon":"activity","file":"science/en/year2/body.md"},{"id":"y2-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year2/health.md"},{"id":"y2-animais","name":"Animals","icon":"feather","file":"science/en/year2/animals.md"},{"id":"y2-plantas","name":"Plants","icon":"leaf","file":"science/en/year2/plants.md"},{"id":"y2-transportes","name":"Transport","icon":"truck","file":"science/en/year2/transport.md"},{"id":"y2-orientacao","name":"Orientation & Maps","icon":"compass","file":"science/en/year2/orientation.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-corpo","name":"The Human Body","icon":"activity","file":"science/en/year3/body.md"},{"id":"y3-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year3/health.md"},{"id":"y3-animais","name":"Animals","icon":"feather","file":"science/en/year3/animals.md"},{"id":"y3-plantas","name":"Plants","icon":"leaf","file":"science/en/year3/plants.md"},{"id":"y3-portugal","name":"Portugal","icon":"map","file":"science/en/year3/portugal.md"},{"id":"y3-rochas","name":"Rocks & Soil","icon":"mountain","file":"science/en/year3/rocks.md"},{"id":"y3-astros","name":"Space & Stars","icon":"star","file":"science/en/year3/space.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-corpo","name":"The Human Body","icon":"activity","file":"science/en/year4/body.md"},{"id":"y4-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year4/health.md"},{"id":"y4-animais","name":"Animals","icon":"feather","file":"science/en/year4/animals.md"},{"id":"y4-plantas","name":"Plants","icon":"leaf","file":"science/en/year4/plants.md"},{"id":"y4-portugal","name":"Portugal","icon":"map","file":"science/en/year4/portugal.md"},{"id":"y4-historia","name":"History of Portugal","icon":"landmark","file":"science/en/year4/history.md"},{"id":"y4-economia","name":"Economic Activities","icon":"briefcase","file":"science/en/year4/economy.md"},{"id":"y4-rios","name":"Rivers & Mountains","icon":"waves","file":"science/en/year4/rivers.md"}]},{"id":"resources","name":"Resources","icon":"📚","defaultOpen":false,"children":[{"id":"res-corpo","name":"The Human Body","icon":"activity","file":"science/en/resources/body.md"},{"id":"res-agua","name":"The Water Cycle","icon":"droplets","file":"science/en/resources/water.md"},{"id":"res-solar","name":"The Solar System","icon":"sun","file":"science/en/resources/solar.md"},{"id":"res-animais","name":"Animal Classification","icon":"feather","file":"science/en/resources/animals.md"}]}]}')},37877(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.º Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-corpo","name":"O Meu Corpo","icon":"activity","file":"science/pt/year1/corpo.md"},{"id":"y1-familia","name":"A Minha Família","icon":"heart","file":"science/pt/year1/familia.md"},{"id":"y1-escola","name":"A Minha Escola","icon":"map","file":"science/pt/year1/escola.md"},{"id":"y1-seres-vivos","name":"Os Seres Vivos","icon":"feather","file":"science/pt/year1/seresvivos.md"},{"id":"y1-estacoes","name":"Estações do Ano","icon":"sun","file":"science/pt/year1/estacoes.md"}]},{"id":"year2","name":"2.º Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year2/corpo.md"},{"id":"y2-saude","name":"Saúde e Higiene","icon":"heart","file":"science/pt/year2/saude.md"},{"id":"y2-animais","name":"Os Animais","icon":"feather","file":"science/pt/year2/animais.md"},{"id":"y2-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year2/plantas.md"},{"id":"y2-transportes","name":"Meios de Transporte","icon":"truck","file":"science/pt/year2/transportes.md"},{"id":"y2-orientacao","name":"Orientação e Mapas","icon":"compass","file":"science/pt/year2/orientacao.md"}]},{"id":"year3","name":"3.º Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year3/corpo.md"},{"id":"y3-saude","name":"Saúde e Higiene","icon":"heart","file":"science/pt/year3/saude.md"},{"id":"y3-animais","name":"Os Animais","icon":"feather","file":"science/pt/year3/animais.md"},{"id":"y3-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year3/plantas.md"},{"id":"y3-portugal","name":"Portugal","icon":"map","file":"science/pt/year3/portugal.md"},{"id":"y3-rochas","name":"Rochas e Solo","icon":"mountain","file":"science/pt/year3/rochas.md"},{"id":"y3-astros","name":"Os Astros","icon":"star","file":"science/pt/year3/astros.md"}]},{"id":"year4","name":"4.º Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year4/corpo.md"},{"id":"y4-saude","name":"Saúde e Higiene","icon":"heart","file":"science/pt/year4/saude.md"},{"id":"y4-animais","name":"Os Animais","icon":"feather","file":"science/pt/year4/animais.md"},{"id":"y4-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year4/plantas.md"},{"id":"y4-portugal","name":"Portugal","icon":"map","file":"science/pt/year4/portugal.md"},{"id":"y4-historia","name":"História de Portugal","icon":"landmark","file":"science/pt/year4/historia.md"},{"id":"y4-economia","name":"Atividades Económicas","icon":"briefcase","file":"science/pt/year4/economia.md"},{"id":"y4-rios","name":"Rios e Serras","icon":"waves","file":"science/pt/year4/rios.md"}]},{"id":"resources","name":"Recursos","icon":"📚","defaultOpen":false,"children":[{"id":"res-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/resources/corpo.md"},{"id":"res-agua","name":"O Ciclo da Água","icon":"droplets","file":"science/pt/resources/agua.md"},{"id":"res-solar","name":"O Sistema Solar","icon":"sun","file":"science/pt/resources/solar.md"},{"id":"res-animais","name":"Classificação dos Animais","icon":"feather","file":"science/pt/resources/animais.md"}]}]}')}}]);
//# sourceMappingURL=9884.0eff252be9a060596a1e.js.map