"use strict";(self.webpackChunk_atlantis_school=self.webpackChunk_atlantis_school||[]).push([[8021],{9752(e,a,o){o.d(a,{WO:()=>Za});var n=o(27359),i=o(59200),t=o(53233),r=o(17681),l=o(69753),s=o(88641),c=o(41783),d=o(65723);function m(e){try{return JSON.parse(localStorage.getItem(e)??"[]")}catch{return[]}}const u=t.default.nav`padding: ${i.w4.spacing.sm} 0;`,p=t.default.div`
  border-bottom: 1px solid ${i.w4.colors.border}60;
  margin-bottom: 2px;
`,f=t.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${i.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${i.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${i.w4.colors.sidebarText}; }
`,g=t.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,y=t.default.span`
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,h=t.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,x=t.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,b=t.default.div`overflow: hidden;`,w=t.default.div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,z=t.default.button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${i.w4.spacing.md};
  background: ${({active:e})=>e?i.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?i.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?i.w4.colors.sidebarActive:i.w4.colors.sidebarText};
  font-size: ${i.w4.typography.fontSizeBase};
  font-family: ${i.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${i.w4.colors.sidebarHover}; }
`,$=t.default.button`
  opacity: ${({active:e})=>e?1:0};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":i.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;function v({title:e,icon:a,entries:o,activeId:i,onSelect:t,favorites:r,onToggleFav:c,collapsed:m}){const[u,v]=(0,n.useState)(!1);return o.length?(0,d.jsxs)(p,{children:[(0,d.jsxs)(f,{collapsed:m,onClick:()=>{m||v(e=>!e)},children:[(0,d.jsxs)(g,{collapsed:m,children:[a,(0,d.jsx)(y,{collapsed:m,children:e})]}),(0,d.jsx)(h,{open:u,collapsed:m,children:(0,d.jsx)(l.A,{size:12})})]}),(0,d.jsx)(x,{open:u&&!m,children:(0,d.jsx)(b,{children:o.map(e=>{const a=r.some(a=>a.id===e.id);return(0,d.jsxs)(w,{children:[(0,d.jsx)(z,{active:i===e.id,onClick:()=>t(e),children:e.name}),(0,d.jsx)($,{active:a,title:a?"Remover dos favoritos":"Adicionar aos favoritos",onClick:a=>{a.stopPropagation(),c(e)},children:(0,d.jsx)(s.A,{size:12,fill:a?"currentColor":"none"})})]},e.id)})})})]}):null}function k({config:e,activeId:a,onSelect:o,hashPrefix:t}){const r=`atlantis-recent-${t}`,l=`atlantis-fav-${t}`,{collapsed:p}=(0,i.cL)(),[f,g]=(0,n.useState)(()=>m(r)),[y,h]=(0,n.useState)(()=>m(l)),x=(0,n.useCallback)(e=>{e.file&&g(a=>function(e,a,o){const n=[a,...o.filter(e=>e.id!==a.id)].slice(0,10);return localStorage.setItem(e,JSON.stringify(n)),n}(r,e,a)),o(e)},[o,r]),b=(0,n.useCallback)(e=>{h(a=>function(e,a,o){const n=o.some(e=>e.id===a.id)?o.filter(e=>e.id!==a.id):[...o,a];return localStorage.setItem(e,JSON.stringify(n)),n}(l,e,a))},[l]);return(0,d.jsxs)(u,{children:[(0,d.jsx)(v,{title:"Recentes",icon:(0,d.jsx)(c.A,{size:13}),entries:f,activeId:a,onSelect:x,favorites:y,onToggleFav:b,collapsed:p}),(0,d.jsx)(v,{title:"Favoritos",icon:(0,d.jsx)(s.A,{size:13}),entries:y,activeId:a,onSelect:x,favorites:y,onToggleFav:b,collapsed:p}),(0,d.jsx)(i.CD,{entries:e.entries,activeId:a,onSelect:x})]})}var A=o(28976),j=o(18055),S=o(66225),M=o(302),T=o(39895),C=o(6930),B=o(14944);const E=t.default.div`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.codeBorder};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.lg};
  margin: ${i.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  svg { max-width: 100%; }
`,P=t.default.pre`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.codeBorder};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.md};
  margin: ${i.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${i.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`;let F=!1;function R(e){if("undefined"==typeof window)return e;const a=e.match(/^var\((--[-\w]+)\)$/);return a&&getComputedStyle(document.documentElement).getPropertyValue(a[1]).trim()||e}function L({code:e}){const a=(0,n.useRef)(null),[t,r]=(0,n.useState)(null),[l,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let n=!1;if(r(null),s(!1),!e.trim())return void s(!0);const t=e.trim().split(/\r?\n/)[0]?.trim()??"";if(/^(?:---[\s\S]*?---\s*)?(?:graph|flowchart|sequenceDiagram|classDiagram|stateDiagram(?:-v2)?|erDiagram|pie|gantt|journey|mindmap|gitGraph|sankey(?:-beta)?|quadrantChart|requirementDiagram|timeline|xychart-beta|block-beta|C4Context|C4Container|C4Component|C4Dynamic|C4Deployment)\b/.test(t))return async function(){const t=(await o.e(774).then(o.bind(o,30774))).default;if(F||(t.initialize({startOnLoad:!1,theme:"dark",themeVariables:{background:R(i.w4.colors.codeBg),primaryColor:R(i.w4.colors.accent),primaryTextColor:R(i.w4.colors.mainText),lineColor:R(i.w4.colors.border)}}),F=!0),a.current&&!n)try{const o=`mermaid-${Math.random().toString(36).slice(2)}`,{svg:i}=await t.render(o,e);if(n||!a.current)return;if(/aria-roledescription="error"|class="error-icon"|>Syntax error/i.test(i))return void s(!0);a.current.innerHTML=i,requestAnimationFrame(()=>{if(n||!a.current)return;const e=a.current.querySelector("svg");if(!e)return void s(!0);const o=e.getBoundingClientRect();(o.width<40||o.height<40)&&s(!0)})}catch(e){n||r(e instanceof Error?e.message:String(e))}}(),()=>{n=!0};s(!0)},[e]),t||l?(0,d.jsx)(P,{children:e.trim()}):(0,d.jsx)(E,{ref:a})}const O=["#388bfd","#3fb950","#d29922","#a371f7","#f87171","#22d3ee","#fb923c","#34d399","#f472b6","#818cf8"],N=t.default.div`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.codeBorder};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.lg};
  margin: ${i.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,I=t.default.div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  margin-bottom: ${i.w4.spacing.md};
  text-align: center;
`,D=t.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  margin-top: ${i.w4.spacing.md};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,H=t.default.span`
  display: flex;
  align-items: center;
  gap: 6px;
`,G=t.default.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,W=t.default.pre`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.codeBorder};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.md};
  margin: ${i.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${i.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`;function Y(e){if(e<=0)return 10;const a=Math.pow(10,Math.floor(Math.log10(e)));return Math.ceil(e/a)*a}function K({labels:e,data:a,colors:o}){const n=176,t=Y(Math.max(...a,1)),r=Math.min(40,340/e.length*.6),l=340/e.length,s=Array.from({length:6},(e,a)=>t/5*a);return(0,d.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[s.map((e,a)=>{const o=192-e/t*n;return(0,d.jsxs)("g",{children:[(0,d.jsx)("line",{x1:44,y1:o,x2:384,y2:o,stroke:i.w4.colors.border,strokeWidth:.5,strokeDasharray:0===a?"none":"3,3"}),(0,d.jsx)("text",{x:38,y:o+4,fill:i.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:i.w4.typography.fontFamily,children:Math.round(e)})]},a)}),a.map((a,s)=>{const c=44+l*s+l/2-r/2,m=a/t*n,u=192-m,p=o[s%o.length];return(0,d.jsxs)("g",{children:[(0,d.jsxs)("rect",{x:c,y:u,width:r,height:m,rx:3,fill:p,opacity:.85,children:[(0,d.jsx)("animate",{attributeName:"height",from:"0",to:m,dur:"0.5s",fill:"freeze"}),(0,d.jsx)("animate",{attributeName:"y",from:192,to:u,dur:"0.5s",fill:"freeze"})]}),(0,d.jsx)("text",{x:c+r/2,y:u-4,fill:i.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:a}),(0,d.jsx)("text",{x:44+l*s+l/2,y:208,fill:i.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:e[s].length>8?e[s].slice(0,7)+"…":e[s]})]},s)})]})}function V({labels:e,data:a,colors:o}){const n=a.reduce((e,a)=>e+a,0)||1;let t=-Math.PI/2;const r=a.map((e,a)=>{const r=e/n*Math.PI*2,l=t;t+=r;const s=t,c=120+90*Math.cos(l),m=120+90*Math.sin(l),u=120+90*Math.cos(s),p=120+90*Math.sin(s),f=r>Math.PI?1:0,g=l+r/2,y=120+58.5*Math.cos(g),h=120+58.5*Math.sin(g),x=Math.round(e/n*100);return(0,d.jsxs)("g",{children:[(0,d.jsx)("path",{d:`M 120 120 L ${c} ${m} A 90 90 0 ${f} 1 ${u} ${p} Z`,fill:o[a%o.length],stroke:i.w4.colors.codeBg,strokeWidth:2,opacity:.85}),x>=5&&(0,d.jsxs)("text",{x:y,y:h+4,fill:"#fff",fontSize:11,fontWeight:600,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:[x,"%"]})]},a)});return(0,d.jsx)("svg",{viewBox:"0 0 240 240",width:"100%",style:{maxWidth:240},children:r})}function _({labels:e,data:a,colors:o}){const n=176,t=Y(Math.max(...a,1)),r=a.length>1?340/(a.length-1):340,l=o[0],s=a.map((e,a)=>({x:44+r*a,y:192-e/t*n})),c=s.map((e,a)=>`${0===a?"M":"L"} ${e.x} ${e.y}`).join(" "),m=Array.from({length:6},(e,a)=>t/5*a);return(0,d.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[m.map((e,a)=>{const o=192-e/t*n;return(0,d.jsxs)("g",{children:[(0,d.jsx)("line",{x1:44,y1:o,x2:384,y2:o,stroke:i.w4.colors.border,strokeWidth:.5,strokeDasharray:0===a?"none":"3,3"}),(0,d.jsx)("text",{x:38,y:o+4,fill:i.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:i.w4.typography.fontFamily,children:Math.round(e)})]},a)}),(0,d.jsx)("path",{d:c,fill:"none",stroke:l,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),s.map((o,n)=>(0,d.jsxs)("g",{children:[(0,d.jsx)("circle",{cx:o.x,cy:o.y,r:4,fill:l,stroke:i.w4.colors.codeBg,strokeWidth:2}),(0,d.jsx)("text",{x:o.x,y:o.y-10,fill:i.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:a[n]}),(0,d.jsx)("text",{x:o.x,y:208,fill:i.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:e[n].length>8?e[n].slice(0,7)+"…":e[n]})]},n))]})}function J({code:e}){const a=(0,n.useMemo)(()=>function(e){const a=e.trim().split("\n");let o,n,i="bar",t=[],r=[];for(const e of a){const[a,...l]=e.split(":"),s=l.join(":").trim();if(s)switch(a.trim().toLowerCase()){case"type":["bar","pie","line"].includes(s.toLowerCase())&&(i=s.toLowerCase());break;case"title":o=s;break;case"labels":t=s.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim());break;case"data":r=s.replace(/^\[|\]$/g,"").split(",").map(e=>parseFloat(e.trim())||0);break;case"colors":n=s.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim())}}return t.length&&r.length?{type:i,title:o,labels:t,data:r,colors:n}:null}(e),[e]);if(!a)return(0,d.jsx)(W,{children:e.trim()});const o=a.colors??O;return(0,d.jsxs)(N,{children:[a.title&&(0,d.jsx)(I,{children:a.title}),"bar"===a.type&&(0,d.jsx)(K,{labels:a.labels,data:a.data,colors:o}),"pie"===a.type&&(0,d.jsx)(V,{labels:a.labels,data:a.data,colors:o}),"line"===a.type&&(0,d.jsx)(_,{labels:a.labels,data:a.data,colors:o}),(0,d.jsx)(D,{children:a.labels.map((e,a)=>(0,d.jsxs)(H,{children:[(0,d.jsx)(G,{color:o[a%o.length]}),e]},a))})]})}const U=t.default.div`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.codeBorder};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.lg};
  margin: ${i.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.md};
`,q=t.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,Z=t.default.div`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,X=t.default.div`
  display: flex;
  gap: ${i.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,Q=t.default.button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  background: ${({active:e})=>e?i.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.mainTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${i.w4.colors.accent};
    color: ${i.w4.colors.accent};
  }
`,ee=t.default.div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
`,ae=t.default.div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  text-align: center;
`;function oe(e){return e.toString().padStart(2,"0")}function ne(e,a,o){if("pt"===o){const o=1===e?"1 hora":`${e} horas`;return 0===a?o:15===a?`${o} e um quarto`:30===a?`${o} e meia`:45===a?`um quarto para as ${12===e?1:e+1}`:`${o} e ${a} minutos`}const n=e<12?"AM":"PM",i=e%12||12;return 0===a?`${i} o'clock ${n}`:15===a?`quarter past ${i} ${n}`:30===a?`half past ${i} ${n}`:45===a?`quarter to ${i%12+1} ${n}`:`${i}:${oe(a)} ${n}`}function ie({hours:e,minutes:a,seconds:o}){const n=100,t=100,r=e=>e*Math.PI/180,l=o/60*360-90,s=a/60*360+o/60*6-90,c=e%12/12*360+a/60*30-90,m=n+61*Math.cos(r(l)),u=t+61*Math.sin(r(l)),p=n+65*Math.cos(r(s)),f=t+65*Math.sin(r(s)),g=n+45*Math.cos(r(c)),y=t+45*Math.sin(r(c));return(0,d.jsxs)("svg",{viewBox:"0 0 200 200",width:200,height:200,children:[(0,d.jsx)("circle",{cx:n,cy:t,r:85,fill:i.w4.colors.surface,stroke:i.w4.colors.border,strokeWidth:2}),Array.from({length:12},(e,a)=>{const o=a+1,l=o/12*360-90,s=n+69*Math.cos(r(l)),c=t+69*Math.sin(r(l));return(0,d.jsx)("text",{x:s,y:c+4,fill:i.w4.colors.mainText,fontSize:14,fontWeight:600,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:o},o)}),Array.from({length:60},(e,a)=>{const o=a/60*360-90,l=a%5==0,s=l?75:79;return(0,d.jsx)("line",{x1:n+s*Math.cos(r(o)),y1:t+s*Math.sin(r(o)),x2:n+83*Math.cos(r(o)),y2:t+83*Math.sin(r(o)),stroke:l?i.w4.colors.mainTextMuted:i.w4.colors.border,strokeWidth:l?2:1},a)}),(0,d.jsx)("line",{x1:n,y1:t,x2:g,y2:y,stroke:i.w4.colors.mainText,strokeWidth:4,strokeLinecap:"round"}),(0,d.jsx)("line",{x1:n,y1:t,x2:p,y2:f,stroke:i.w4.colors.accent,strokeWidth:2.5,strokeLinecap:"round"}),(0,d.jsx)("line",{x1:n-12*Math.cos(r(l)),y1:t-12*Math.sin(r(l)),x2:m,y2:u,stroke:"#f87171",strokeWidth:1.2,strokeLinecap:"round"}),(0,d.jsx)("circle",{cx:n,cy:t,r:4,fill:i.w4.colors.accent}),(0,d.jsx)("circle",{cx:n,cy:t,r:2,fill:"#f87171"})]})}function te({code:e}){const a=function(e){let a="pt";for(const o of e.trim().split("\n")){const[e,...n]=o.split(":"),i=n.join(":").trim();"locale"===e.trim().toLowerCase()&&(a=i.toLowerCase())}return{locale:a}}(e),[o,i]=(0,n.useState)("live"),[t,r]=(0,n.useState)(()=>(new Date).getHours()),[l,s]=(0,n.useState)(()=>(new Date).getMinutes()),[c,m]=(0,n.useState)(()=>(new Date).getSeconds());(0,n.useEffect)(()=>{if("live"!==o)return;const e=()=>{const e=new Date;r(e.getHours()),s(e.getMinutes()),m(e.getSeconds())};e();const a=setInterval(e,1e3);return()=>clearInterval(a)},[o]);const u=(0,n.useCallback)(e=>{i("manual"),m(0),r(a=>((a+e)%24+24)%24)},[]),p=(0,n.useCallback)(e=>{i("manual"),m(0),s(a=>((a+e)%60+60)%60)},[]),f=(0,n.useCallback)(()=>i("live"),[]);return(0,d.jsxs)(U,{children:[(0,d.jsxs)(q,{children:[(0,d.jsx)(ie,{hours:t,minutes:l,seconds:c}),(0,d.jsxs)("div",{children:[(0,d.jsxs)(Z,{children:[oe(t),":",oe(l),(0,d.jsxs)("span",{style:{fontSize:"24px",opacity:.5},children:[":",oe(c)]})]}),(0,d.jsx)(ae,{children:ne(t%12||12,l,a.locale)})]})]}),(0,d.jsxs)(X,{children:[(0,d.jsx)(Q,{onClick:()=>u(-1),children:"−1h"}),(0,d.jsx)(Q,{onClick:()=>u(1),children:"+1h"}),(0,d.jsx)(Q,{onClick:()=>p(-15),children:"−15m"}),(0,d.jsx)(Q,{onClick:()=>p(15),children:"+15m"}),(0,d.jsx)(Q,{onClick:()=>p(-5),children:"−5m"}),(0,d.jsx)(Q,{onClick:()=>p(5),children:"+5m"}),(0,d.jsx)(Q,{active:"live"===o,onClick:f,children:"pt"===a.locale?"Agora":"Now"})]}),(0,d.jsx)(ee,{children:"pt"===a.locale?"Usa os botões para mudar as horas e os minutos!":"Use the buttons to change the hours and minutes!"}),(0,d.jsx)(X,{children:[{label:"3:00",h:3,m:0},{label:"6:30",h:6,m:30},{label:"9:15",h:9,m:15},{label:"12:00",h:12,m:0},{label:"13:45",h:13,m:45},{label:"15:30",h:15,m:30},{label:"19:00",h:19,m:0},{label:"23:15",h:23,m:15}].map(e=>(0,d.jsx)(Q,{onClick:()=>{i("manual"),r(e.h),s(e.m)},children:e.label},e.label))})]})}var re=o(77207),le=o(41604);const se=["Samantha","Karen","Daniel","Moira","Rishi","Google UK English Female","Google US English"],ce=["Joana","Luciana","Catarina","Google português do Brasil"];function de(e,a){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const o=new SpeechSynthesisUtterance(e);o.lang="pt"===a?"pt-PT":"en-US",o.rate=1,o.pitch=1;const n=function(e,a){const o="en"===a?se:ce,n="en"===a?"en":"pt";for(const a of o){const o=e.find(e=>e.name.includes(a)&&e.lang.startsWith(n));if(o)return o}return e.find(e=>e.lang.startsWith(n))}(window.speechSynthesis.getVoices(),a);n&&(o.voice=n,o.lang=n.lang),window.speechSynthesis.speak(o)}const me=re.keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`,ue=t.default.div`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.codeBorder};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.md};
  margin: ${i.w4.spacing.lg} 0;
`,pe=t.default.div`
  font-size: 11px;
  font-family: ${i.w4.typography.fontFamilyMono};
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${i.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,fe=t.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${i.w4.spacing.sm};

  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,ge=t.default.div`
  display: flex;
  flex-direction: column;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${i.w4.colors.accent}40;
    box-shadow: 0 0 8px ${i.w4.colors.accent}15;
  }
`,ye=t.default.button`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  padding: 14px ${i.w4.spacing.md};
  min-height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${i.w4.typography.fontFamily};
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    animation: ${me} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`,he=(0,t.default)(ye)`
  border-bottom: 1px solid ${i.w4.colors.border}80;
`,xe=(0,t.default)(ye)``,be=t.default.span`
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
`,we=t.default.span`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${i.w4.colors.accent};
`,ze=t.default.span`
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${i.w4.colors.mainTextMuted};
`;function $e({code:e}){const a=function(e){return e.split("\n").map(e=>e.trim()).filter(e=>e&&e.includes("|")).map(e=>{const[a,o]=e.split("|").map(e=>e.trim());return{en:a??"",pt:o??""}}).filter(e=>e.en&&e.pt)}(e),o=(0,n.useRef)(null),i=(0,n.useRef)(!1),t=(0,n.useCallback)(e=>{o.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},[]),r=(0,n.useCallback)((e,a)=>n=>{if(!o.current)return;const t=Math.abs(n.changedTouches[0].clientX-o.current.x),r=Math.abs(n.changedTouches[0].clientY-o.current.y);o.current=null,t>8||r>8||(i.current=!0,de(e,a))},[]),l=(0,n.useCallback)((e,a)=>()=>{i.current?i.current=!1:de(e,a)},[]);return a.length?(0,d.jsxs)(ue,{children:[(0,d.jsxs)(pe,{children:[(0,d.jsx)(le.A,{size:12}),"Words to Listen / Palavras para Ouvir"]}),(0,d.jsx)(fe,{children:a.map(e=>(0,d.jsxs)(ge,{children:[(0,d.jsxs)(he,{accentColor:"#58a6ff",onTouchStart:t,onTouchEnd:r(e.en,"en"),onClick:l(e.en,"en"),title:`Listen: ${e.en}`,children:[(0,d.jsx)(be,{accentColor:"#58a6ff",children:(0,d.jsx)(le.A,{size:16})}),(0,d.jsx)(we,{children:e.en})]}),(0,d.jsxs)(xe,{accentColor:"#3fb950",onTouchStart:t,onTouchEnd:r(e.pt,"pt"),onClick:l(e.pt,"pt"),title:`Ouvir: ${e.pt}`,children:[(0,d.jsx)(be,{accentColor:"#3fb950",children:(0,d.jsx)(le.A,{size:16})}),(0,d.jsx)(ze,{children:e.pt})]})]},e.en))})]}):null}var ve=o(68383),ke=o(21426),Ae=o(25609),je=o(20320);const Se=t.default.div`
  margin: ${i.w4.spacing.lg} 0;
  border-radius: ${i.w4.borderRadius.md};
  border: 1px solid ${i.w4.colors.codeBorder};
  overflow: hidden;
`,Me=t.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${i.w4.colors.codeBorder};
`,Te=t.default.span`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${i.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,Ce=t.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":i.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${i.w4.colors.sidebarText}; border-color: ${i.w4.colors.sidebarText}; }
`,Be={...ke.A,'pre[class*="language-"]':{...ke.A['pre[class*="language-"]'],background:i.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...ke.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function Ee({lang:e="text",code:a}){const[o,t]=(0,n.useState)(!1);return(0,d.jsxs)(Se,{children:[(0,d.jsxs)(Me,{children:[(0,d.jsx)(Te,{children:e}),(0,d.jsxs)(Ce,{copied:o,onClick:()=>{navigator.clipboard.writeText(a).then(()=>{t(!0),setTimeout(()=>t(!1),2e3)})},children:[o?(0,d.jsx)(Ae.A,{size:12}):(0,d.jsx)(je.A,{size:12}),o?"Copied!":"Copy"]})]}),(0,d.jsx)(ve.A,{language:e,style:Be,showLineNumbers:a.split("\n").length>8,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:i.w4.colors.codeBg},wrapLongLines:!1,children:a})]})}var Pe=o(65569),Fe=o(8218),Re=o(57230),Le=o(22966),Oe=o(21069);const Ne={NOTE:{bg:"rgba(88, 166, 255, 0.08)",border:"#58a6ff",icon:Pe.A,label:"Note",color:"#58a6ff"},TIP:{bg:"rgba(63, 185, 80, 0.08)",border:"#3fb950",icon:Fe.A,label:"Tip",color:"#3fb950"},IMPORTANT:{bg:"rgba(163, 113, 247, 0.08)",border:"#a371f7",icon:Re.A,label:"Important",color:"#a371f7"},WARNING:{bg:"rgba(210, 153, 34, 0.08)",border:"#d29922",icon:Le.A,label:"Warning",color:"#d29922"},CAUTION:{bg:"rgba(248, 81, 73, 0.08)",border:"#f85149",icon:Oe.A,label:"Caution",color:"#f85149"}},Ie=t.default.div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${i.w4.borderRadius.md} ${i.w4.borderRadius.md} 0;
  padding: ${i.w4.spacing.md} ${i.w4.spacing.lg};
  margin: ${i.w4.spacing.lg} 0;
`,De=t.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${i.w4.typography.fontFamily};
  margin-bottom: ${i.w4.spacing.sm};
`,He=t.default.div`
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`;function Ge({type:e,children:a}){const o=Ne[e]??Ne.NOTE,n=o.icon;return(0,d.jsxs)(Ie,{bg:o.bg,border:o.border,children:[(0,d.jsxs)(De,{color:o.color,children:[(0,d.jsx)(n,{size:15,strokeWidth:2}),o.label]}),(0,d.jsx)(He,{children:a})]})}const We=t.default.nav`
  width: 220px;
  min-width: 220px;
  padding: ${i.w4.spacing.xxl} 0 ${i.w4.spacing.xxl} ${i.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,Ye=t.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  margin-bottom: ${i.w4.spacing.md};
`,Ke=t.default.ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,Ve=t.default.a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${i.w4.typography.fontSizeSm};
  font-family: ${i.w4.typography.fontFamily};
  color: ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?i.w4.colors.accent:"transparent"};
  border-radius: 0 ${i.w4.borderRadius.sm} ${i.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${i.w4.colors.mainText}; background: ${i.w4.colors.sidebarHover}; }
`;function _e({headings:e,activeId:a}){return e.length<2?null:(0,d.jsxs)(We,{children:[(0,d.jsx)(Ye,{children:"On this page"}),(0,d.jsx)(Ke,{children:e.map(e=>(0,d.jsx)("li",{children:(0,d.jsx)(Ve,{href:`#${e.id}`,active:a===e.id,level:e.level,onClick:a=>{a.preventDefault(),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},children:e.text})},e.id))})]})}function Je(e){return e.toLowerCase().replace(/[*_`[\]()#]/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}function Ue(e){return n.Children.toArray(e).map(e=>"string"==typeof e?e:"number"==typeof e?String(e):(0,n.isValidElement)(e)?Ue(e.props.children??""):"").join("")}function qe(){return e=>{!function e(a){if("blockquote"===a.type){const e=a.children?.[0];if("paragraph"===e?.type){const o=e.children?.[0];if("text"===o?.type){const n=o.value?.match(/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i);n&&(o.value=o.value.slice(n[0].length),o.value.trim()||1!==e.children.length||a.children.shift(),a.data=a.data??{},a.data.hName="div",a.data.hProperties={"data-callout":n[1].toUpperCase()})}}}a.children?.forEach(e)}(e)}}const Ze=t.default.div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${i.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,Xe=t.default.div`flex: 1; min-width: 0;`,Qe=t.default.article`
  padding: ${i.w4.spacing.xxl} 0;
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeMd};
  line-height: ${i.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${i.w4.spacing.xl} 0 ${i.w4.spacing.md};
    color: ${i.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${i.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${i.w4.typography.fontSizeXl}; border-bottom: 1px solid ${i.w4.colors.border}; padding-bottom: ${i.w4.spacing.sm}; }
  h2 { font-size: ${i.w4.typography.fontSizeLg}; border-bottom: 1px solid ${i.w4.colors.border}; padding-bottom: ${i.w4.spacing.xs}; }
  h3 { font-size: ${i.w4.typography.fontSizeMd}; }

  p { margin: ${i.w4.spacing.md} 0; }

  a { color: ${i.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${i.w4.colors.accentHover}; } }

  ul, ol { margin: ${i.w4.spacing.md} 0; padding-left: ${i.w4.spacing.xl}; }
  li { margin: ${i.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${i.w4.colors.border};
    margin: ${i.w4.spacing.lg} 0;
    padding: ${i.w4.spacing.sm} ${i.w4.spacing.lg};
    background: ${i.w4.colors.surface};
    color: ${i.w4.colors.mainTextMuted};
    border-radius: 0 ${i.w4.borderRadius.sm} ${i.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${i.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${i.w4.colors.codeBg};
    border: 1px solid ${i.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${i.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${i.w4.spacing.lg} 0; font-size: ${i.w4.typography.fontSizeBase}; }
  th, td { padding: ${i.w4.spacing.sm} ${i.w4.spacing.md}; border: 1px solid ${i.w4.colors.border}; text-align: left; }
  th { background: ${i.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${i.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${i.w4.colors.border}; margin: ${i.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${i.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${i.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${i.w4.spacing.lg} 0; }
`,ea=t.default.div`
  display: flex;
  gap: ${i.w4.spacing.lg};
  padding: ${i.w4.spacing.xxl} 0;
  border-top: 1px solid ${i.w4.colors.border};
  margin-top: ${i.w4.spacing.xxl};
`,aa=t.default.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${i.w4.spacing.md} ${i.w4.spacing.lg};
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${i.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,oa=t.default.div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${i.w4.colors.sidebarTextMuted}; font-family: ${i.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,na=t.default.div`
  font-size: ${i.w4.typography.fontSizeBase}; color: ${i.w4.colors.accent};
  font-family: ${i.w4.typography.fontFamily}; font-weight: 500;
`,ia=t.default.div`
  color: ${i.w4.colors.mainTextMuted};
  padding: ${i.w4.spacing.xxl} ${i.w4.spacing.xl};
  font-family: ${i.w4.typography.fontFamily};
`;function ta(e){return function({children:a,...o}){const n=`h${e}`,i=Ue(a),t=Je(i);return(0,d.jsxs)(n,{id:t,...o,children:[a,(0,d.jsx)("a",{className:"heading-anchor",href:`#${t}`,"aria-label":`Link to "${i}"`,children:(0,d.jsx)(S.A,{size:14})})]})}}function ra({file:e,prevEntry:a,nextEntry:i,onNavigate:t,scrollToId:r,onScrolled:s}){const[c,m]=(0,n.useState)(null),[u,p]=(0,n.useState)(null),f=(0,n.useRef)(null);if((0,n.useEffect)(()=>{m(null),fetch(`${o.p}content/${e}`).then(e=>{if(!e.ok)throw new Error(`${e.status} ${e.statusText}`);return e.text()}).then(m).catch(a=>m(`> **Error loading \`${e}\`:** ${a.message}`))},[e]),(0,n.useEffect)(()=>{if(!r||!c||!f.current)return;const e=setTimeout(()=>{const e=f.current?.querySelector(`#${CSS.escape(r)}`);e&&(e.scrollIntoView({behavior:"smooth",block:"start"}),p(r),s?.())},150);return()=>clearTimeout(e)},[r,c,s]),(0,n.useEffect)(()=>{if(!c||!f.current)return;const e=f.current,a=Array.from(e.querySelectorAll("h2[id], h3[id]"));if(!a.length)return;let o=e.parentElement;for(;o;){const{overflowY:e}=getComputedStyle(o);if(("auto"===e||"scroll"===e)&&o.scrollHeight>o.clientHeight)break;o=o.parentElement}const n=o??window,i=()=>{let e=a[0].id;for(const o of a){if(!(o.getBoundingClientRect().top-120<=0))break;e=o.id}p(e)};return i(),n.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i),()=>{n.removeEventListener("scroll",i),window.removeEventListener("resize",i)}},[c]),null===c)return(0,d.jsx)(ia,{children:"Loading…"});const g=function(e){const a=[],o=/^(#{2,3})\s+(.+)$/gm;let n;for(;null!==(n=o.exec(e));){const e=n[1].length,o=n[2].trim().replace(/\*\*(.+?)\*\*/g,"$1").replace(/\*(.+?)\*/g,"$1").replace(/`(.+?)`/g,"$1").replace(/\[(.+?)\]\(.+?\)/g,"$1");a.push({level:e,text:o,id:Je(o)})}return a}(c),y=a||i;return(0,d.jsxs)(Ze,{children:[(0,d.jsxs)(Xe,{children:[(0,d.jsx)(Qe,{ref:f,children:(0,d.jsx)(A.oz,{remarkPlugins:[j.A,B.A,qe],rehypePlugins:[T.A,C.A],components:{div({node:e,children:a,...o}){const n=o["data-callout"];return n?(0,d.jsx)(Ge,{type:n,children:a}):(0,d.jsx)("div",{...o,children:a})},h1:ta(1),h2:ta(2),h3:ta(3),h4:ta(4),pre:({children:e})=>(0,d.jsx)(d.Fragment,{children:e}),code({className:e,children:a}){const o=/language-(\w+)/.exec(e??"")?.[1],n=String(a).replace(/\n$/,"");return"mermaid"===o?(0,d.jsx)(L,{code:n}):"chart"===o?(0,d.jsx)(J,{code:n}):"clock"===o?(0,d.jsx)(te,{code:n}):"vocabulary"===o?(0,d.jsx)($e,{code:n}):o||n.includes("\n")?(0,d.jsx)(Ee,{lang:o,code:n}):(0,d.jsx)("code",{className:e,children:a})}},children:c})}),y&&(0,d.jsxs)(ea,{children:[a?(0,d.jsxs)(aa,{align:"left",onClick:()=>t?.(a),children:[(0,d.jsxs)(oa,{children:[(0,d.jsx)(M.A,{size:13})," Previous"]}),(0,d.jsx)(na,{children:a.name})]}):(0,d.jsx)("div",{style:{flex:1}}),i?(0,d.jsxs)(aa,{align:"right",onClick:()=>t?.(i),children:[(0,d.jsxs)(oa,{children:["Next ",(0,d.jsx)(l.A,{size:13})]}),(0,d.jsx)(na,{children:i.name})]}):(0,d.jsx)("div",{style:{flex:1}})]})]}),(0,d.jsx)(_e,{headings:g,activeId:u})]})}var la=o(24525),sa=o(87071),ca=o(35751),da=o(32887);const ma=re.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ua=re.keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,pa=t.default.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${ma} 0.15s ease;
`,fa=t.default.div`
  width: 90%;
  max-width: 580px;
  max-height: 70vh;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px ${i.w4.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${ua} 0.2s ease;
`,ga=t.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid ${i.w4.colors.border};
`,ya=t.default.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeMd};
  &::placeholder { color: ${i.w4.colors.sidebarTextMuted}; }
`,ha=t.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${i.w4.colors.sidebarHover};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  font-size: 10px;
  font-family: ${i.w4.typography.fontFamilyMono};
  transition: color 0.15s, background 0.15s;
  &:hover { color: ${i.w4.colors.mainText}; background: ${i.w4.colors.border}; }
`,xa=t.default.div`
  flex: 1;
  overflow-y: auto;
  padding: ${i.w4.spacing.sm} 0;
`,ba=t.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.sidebarTextMuted};
`,wa=t.default.span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,za=t.default.button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 10px 18px;
  background: ${({selected:e})=>e?i.w4.colors.accentMuted:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  &:hover { background: ${i.w4.colors.sidebarHover}; }
`,$a=t.default.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${i.w4.borderRadius.md};
  background: ${({selected:e})=>e?`${i.w4.colors.accent}20`:i.w4.colors.sidebarHover};
  color: ${({selected:e})=>e?i.w4.colors.accent:i.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  margin-top: 1px;
`,va=t.default.div`
  flex: 1;
  min-width: 0;
`,ka=t.default.div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 8px;
`,Aa=t.default.span`
  font-weight: 400;
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.sidebarTextMuted};
`,ja=t.default.span`
  font-size: 11px;
  font-weight: 500;
  color: ${i.w4.colors.accent};
  background: ${i.w4.colors.accentMuted};
  padding: 1px 6px;
  border-radius: 10px;
  font-family: ${i.w4.typography.fontFamilyMono};
`,Sa=t.default.div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin-top: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${i.w4.colors.accent}25;
    color: ${i.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,Ma=t.default.div`
  display: flex;
  align-items: center;
  color: ${({selected:e})=>e?i.w4.colors.accent:"transparent"};
  margin-top: 8px;
  transition: color 0.1s;
`,Ta=t.default.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  border-top: 1px solid ${i.w4.colors.border};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${i.w4.colors.sidebarTextMuted};
`,Ca=t.default.kbd`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background: ${i.w4.colors.sidebarHover};
  border: 1px solid ${i.w4.colors.border};
  border-radius: 3px;
  font-size: 10px;
  font-family: ${i.w4.typography.fontFamilyMono};
  color: ${i.w4.colors.sidebarTextMuted};
`,Ba=t.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 18px;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  text-align: center;
`;function Ea(e){return e.toLowerCase().replace(/[*_`[\]()#]/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}const Pa=new Map;function Fa(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function Ra(e,a=""){return e.flatMap(e=>e.children?Ra(e.children,e.name):e.file?[{entry:e,parentName:a}]:[])}function La(e,a){const o=Fa(e),n=Fa(a),i=e.split("\n");let t=0,r=0;for(;-1!==(r=o.indexOf(n,r));)t++,r+=n.length;let l=null;for(const e of i){const o=e.match(/^#{1,4}\s+(.+)/);if(o&&(l=o[1].trim()),!e.trim()||e.startsWith("```")||e.startsWith("|--"))continue;const i=e.replace(/^#{1,6}\s*/,"").replace(/[*_`|]/g,"").trim(),r=i.normalize("NFD"),s=[];let c=0;for(let e=0;e<r.length;e++){const a=r.charCodeAt(e);a>=768&&a<=879||(s.push(c),c++)}s.push(c);const d=Fa(i).indexOf(n);if(-1===d)continue;const m=s[d]??d,u=s[d+n.length]??m+a.length,p=Math.max(0,m-50),f=Math.min(i.length,u+70),g=p>0?"…":"",y=f<i.length?"…":"";return{snippet:`${g}${i.slice(p,m)}<mark>${i.slice(m,u)}</mark>${i.slice(u,f)}${y}`,count:t,headingSlug:l?Ea(l):null,headingText:l}}return{snippet:"",count:t,headingSlug:null,headingText:null}}function Oa({open:e,onClose:a,entries:t,activeId:l,onSelect:s}){const[c,m]=(0,n.useState)(""),[u,p]=(0,n.useState)([]),[f,g]=(0,n.useState)(!1),[y,h]=(0,n.useState)(0),x=(0,n.useRef)(null),b=(0,n.useRef)(),w=(0,n.useMemo)(()=>Ra(t),[t]);(0,n.useEffect)(()=>{e&&(m(""),p([]),h(0),setTimeout(()=>x.current?.focus(),50))},[e]),(0,n.useEffect)(()=>{if(!e)return;const o=e=>{"Escape"===e.key&&(e.preventDefault(),a())};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,a]);const z=(0,n.useCallback)(async e=>{if(e.length<2)return p([]),void g(!1);g(!0);const a=await Promise.all(w.map(async({entry:e,parentName:a})=>({entry:e,parentName:a,text:await async function(e){const a=Pa.get(e);if(void 0!==a)return a;try{const a=await fetch(`${o.p}content/${e}`);if(!a.ok)return"";const n=await a.text();return Pa.set(e,n),n}catch{return Pa.set(e,""),""}}(e.file)}))),n=[];for(const{entry:o,parentName:i,text:t}of a){const a=Fa(o.name),r=Fa(t),l=Fa(e);if(!a.includes(l)&&!r.includes(l))continue;const{snippet:s,count:c,headingSlug:d,headingText:m}=La(t,e),u=a.includes(l);n.push({entry:o,parentName:i,snippet:s||(u?o.name:""),matchCount:c+(u?10:0),headingSlug:d,headingText:m})}n.sort((e,a)=>a.matchCount-e.matchCount),p(n),h(0),g(!1)},[w]);(0,n.useEffect)(()=>{if(clearTimeout(b.current),c.trim())return b.current=setTimeout(()=>z(c.trim()),250),()=>clearTimeout(b.current);p([])},[c,z]);const $=(0,n.useCallback)(e=>{"ArrowDown"===e.key?(e.preventDefault(),h(e=>Math.min(e+1,u.length-1))):"ArrowUp"===e.key?(e.preventDefault(),h(e=>Math.max(e-1,0))):"Enter"===e.key&&u[y]&&(e.preventDefault(),s(u[y].entry,u[y].headingSlug),a())},[u,y,s,a]);return e?(0,d.jsx)(pa,{onClick:e=>{e.target===e.currentTarget&&a()},children:(0,d.jsxs)(fa,{onKeyDown:$,children:[(0,d.jsxs)(ga,{children:[(0,d.jsx)(r.A,{size:18,color:i.w4.colors.accent,style:{flexShrink:0}}),(0,d.jsx)(ya,{ref:x,placeholder:"Pesquisar em todo o conteúdo…",value:c,onChange:e=>m(e.target.value)}),(0,d.jsx)(ha,{onClick:a,title:"Fechar (Esc)",children:(0,d.jsx)(la.A,{size:14})})]}),(0,d.jsxs)(xa,{children:[f&&(0,d.jsxs)(ba,{children:[(0,d.jsx)(wa,{children:(0,d.jsx)(sa.A,{size:14})}),"A pesquisar ",w.length," ficheiros…"]}),!f&&c.length>=2&&u.length>0&&(0,d.jsxs)(ba,{children:[(0,d.jsx)(ca.A,{size:13}),u.length," ",1===u.length?"resultado":"resultados"," encontrados"]}),!f&&c.length>=2&&0===u.length&&(0,d.jsxs)(Ba,{children:[(0,d.jsx)(r.A,{size:32,strokeWidth:1.2}),'Nenhum resultado para "',(0,d.jsx)("strong",{children:c}),'"']}),!f&&c.length<2&&(0,d.jsxs)(Ba,{children:[(0,d.jsx)(r.A,{size:32,strokeWidth:1.2}),"Escreve pelo menos 2 caracteres para pesquisar"]}),u.map((e,o)=>(0,d.jsxs)(za,{selected:o===y,onClick:()=>{s(e.entry,e.headingSlug),a()},onMouseEnter:()=>h(o),children:[(0,d.jsx)($a,{selected:o===y,children:(0,d.jsx)(ca.A,{size:15})}),(0,d.jsxs)(va,{children:[(0,d.jsxs)(ka,{children:[e.entry.name,e.matchCount>0&&(0,d.jsx)(ja,{children:e.matchCount>10?e.matchCount-10:e.matchCount})]}),(e.parentName||e.headingText)&&(0,d.jsxs)(Aa,{children:[e.parentName,e.parentName&&e.headingText?" › ":"",e.headingText]}),e.snippet&&(0,d.jsx)(Sa,{dangerouslySetInnerHTML:{__html:e.snippet}})]}),(0,d.jsx)(Ma,{selected:o===y,children:(0,d.jsx)(da.A,{size:14})})]},e.entry.id))]}),(0,d.jsxs)(Ta,{children:[(0,d.jsxs)("span",{children:[(0,d.jsx)(Ca,{children:"↑"})," ",(0,d.jsx)(Ca,{children:"↓"})," navegar"]}),(0,d.jsxs)("span",{children:[(0,d.jsx)(Ca,{children:"↵"})," abrir"]}),(0,d.jsxs)("span",{children:[(0,d.jsx)(Ca,{children:"esc"})," fechar"]})]})]})}):null}function Na(e,a){for(const o of e){if(o.id===a)return o;if(o.children){const e=Na(o.children,a);if(e)return e}}}function Ia(e){return e.flatMap(e=>e.children?Ia(e.children):e.file?[e]:[])}const Da=t.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${i.w4.typography.fontFamily};
  background: ${i.w4.colors.mainBg};
`,Ha=t.default.div`
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
`,Ga=t.default.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${i.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${i.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,Wa=t.default.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,Ya=t.default.h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${i.w4.colors.mainText} 0%,
    ${i.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,Ka=t.default.p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,Va=t.default.span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,_a=t.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${i.w4.colors.sidebarHover};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: ${i.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${i.w4.colors.accent}60;
    color: ${i.w4.colors.mainText};
    background: ${i.w4.colors.accentMuted};
  }

  kbd {
    font-size: 10px;
    padding: 1px 4px;
    background: ${i.w4.colors.surface};
    border: 1px solid ${i.w4.colors.border};
    border-radius: 3px;
    color: ${i.w4.colors.sidebarTextMuted};
  }

  @media (max-width: ${i.w4.breakpoints.md}) {
    padding: 5px 8px;
    span { display: none; }
    kbd { display: none; }
  }
`,Ja={en:"Browse the sidebar",pt:"Explora o menu lateral"};function Ua({title:e,sub:a,lang:o}){return(0,d.jsxs)(Da,{children:[(0,d.jsx)(Ga,{}),(0,d.jsx)(Ha,{size:500,x:10,y:-10,hue:210,dur:7}),(0,d.jsx)(Ha,{size:400,x:60,y:50,hue:270,dur:9}),(0,d.jsx)(Ha,{size:300,x:30,y:70,hue:190,dur:6}),(0,d.jsxs)(Wa,{children:[(0,d.jsx)(Ya,{children:e}),(0,d.jsx)(Ka,{children:a}),(0,d.jsxs)(Va,{children:[(0,d.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:(0,d.jsx)("polyline",{points:"15 18 9 12 15 6"})}),Ja[o]??Ja.en]})]})]})}function qa(e,a,o){return"string"==typeof e?e:e[a]??e[o]??Object.values(e)[0]??""}function Za({navigation:e,languages:a,defaultLang:o,locale:t,hashPrefix:l,topBarRight:s,welcomeTitle:c="Blog",welcomeSub:m="Notes, guides, and references — pick a topic from the sidebar to get started."}){const u=a?Object.keys(a):[],[p,f]=(u.length,(0,n.useState)(()=>o??u[0]??""));(0,n.useEffect)(()=>{t&&u.includes(t)&&t!==p&&f(t)},[t]);const g=(0,n.useMemo)(()=>a&&p?a[p].navigation:e??{entries:[]},[a,e,p]),y=((0,n.useMemo)(()=>Ia(g.entries),[g]),(0,n.useCallback)(e=>{const a=e.match(new RegExp(`^#\\/${l}\\/(.+)$`));if(a)return Na(g.entries,a[1])},[g,l])),[h,x]=(0,n.useState)(()=>y(window.location.hash)??null);(0,n.useEffect)(()=>{if(!h)return;const e=Na(g.entries,h.id);x(e??null)},[p,g]),(0,n.useEffect)(()=>{const e=()=>{const e=y(window.location.hash);e&&x(e)};return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[y]);const b=(0,n.useCallback)(e=>{e.file&&(x(e),window.location.hash=`#/${l}/${e.id}`)},[l]),w=(0,n.useMemo)(()=>Ia(g.entries),[g]),z=w.findIndex(e=>e.id===h?.id),$=z>0?w[z-1]:null,v=z<w.length-1?w[z+1]:null,[A,j]=(0,n.useState)(!1),[S,M]=(0,n.useState)(null);(0,n.useEffect)(()=>{const e=e=>{(e.metaKey||e.ctrlKey)&&"f"===e.key&&(e.preventDefault(),j(!0))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]);const T=h?.label??h?.name??l,C=qa(c,p,o??u[0]??""),B=qa(m,p,o??u[0]??""),E=(0,d.jsxs)(_a,{onClick:()=>j(!0),title:"Pesquisar (Ctrl+F)",children:[(0,d.jsx)(r.A,{size:14}),(0,d.jsx)("span",{children:"Pesquisar"}),(0,d.jsx)("kbd",{children:"⌘F"})]}),P=(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[E,s]});return(0,d.jsxs)(i.PE,{title:T,activeId:h?.id??null,topBarRight:P,sidebar:(0,d.jsx)(k,{config:g,activeId:h?.id??null,onSelect:b,hashPrefix:l}),children:[h?.file?(0,d.jsx)(ra,{file:h.file,prevEntry:$,nextEntry:v,onNavigate:b,scrollToId:S,onScrolled:()=>M(null)}):(0,d.jsx)(Ua,{title:C,sub:B,lang:p}),(0,d.jsx)(Oa,{open:A,onClose:()=>j(!1),entries:g.entries,activeId:h?.id??null,onSelect:(e,a)=>{b(e),M(a??null)}})]})}t.default.div`
  display: flex;
  gap: 4px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: 2px;
`,t.default.button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?i.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":i.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":i.w4.colors.mainText};
  }
`,t.default.div`
  padding: ${({collapsed:e})=>e?"8px 4px":`8px ${i.w4.spacing.md}`};
  border-bottom: 1px solid ${i.w4.colors.border}60;
`,t.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${({collapsed:e})=>e?"8px 0":"6px 10px"};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  background: ${({focused:e})=>e?`${i.w4.colors.accent}10`:i.w4.colors.sidebarHover};
  border: 1px solid ${({focused:e})=>e?`${i.w4.colors.accent}40`:"transparent"};
  border-radius: ${i.w4.borderRadius.md};
  transition: background 0.15s, border-color 0.2s;
  cursor: ${({collapsed:e})=>e?"pointer":"text"};
`,t.default.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${i.w4.colors.sidebarText};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  min-width: 0;
  display: ${({collapsed:e})=>e?"none":"block"};
  &::placeholder { color: ${i.w4.colors.sidebarTextMuted}; }
`,t.default.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  border-radius: ${i.w4.borderRadius.sm};
  transition: color 0.15s;
  &:hover { color: ${i.w4.colors.mainText}; }
`,t.default.div`
  max-height: 60vh;
  overflow-y: auto;
  padding: ${i.w4.spacing.sm} 0;
`,t.default.button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding: 8px ${i.w4.spacing.md};
  background: ${({active:e})=>e?i.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?i.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;
  &:hover { background: ${i.w4.colors.sidebarHover}; }
`,t.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${i.w4.colors.sidebarText};
`,t.default.span`
  font-weight: 400;
  color: ${i.w4.colors.sidebarTextMuted};
  font-size: 11px;
`,t.default.div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: 12px;
  color: ${i.w4.colors.sidebarTextMuted};
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${i.w4.colors.accent}30;
    color: ${i.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,t.default.div`
  padding: 12px ${i.w4.spacing.md};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`,t.default.span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,t.default.span`
  font-size: 11px;
  color: ${i.w4.colors.accent};
  font-weight: 600;
  margin-left: auto;
`,new Map},30894(e,a,o){o.d(a,{Ym:()=>c});var n=o(27359),i=o(59200);const t="atlantis:locale",r="shell:locale";function l(e){return"en"===e||"pt"===e}function s(){try{const e=localStorage.getItem(t);if(l(e))return e}catch{}return"en"}function c(){const[e,a]=(0,n.useState)(s),o=(0,n.useCallback)(e=>{a(e),function(e){try{localStorage.setItem(t,e)}catch{}(0,i.Is)(r,e).catch(()=>{})}(e),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,n.useEffect)(()=>{const e=e=>{const o=e.detail;a(o)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,n.useEffect)(()=>{(0,i.PL)(r).then(o=>{if(l(o)&&o!==e){try{localStorage.setItem(t,o)}catch{}a(o)}}).catch(()=>{})},[]),[e,o]}(0,i.PL)(r).then(e=>{if(l(e))try{localStorage.setItem(t,e)}catch{}}).catch(()=>{});var d=o(53233);o(65723),d.default.div`
  display: flex;
  gap: 4px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: 2px;
`,d.default.button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?i.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":i.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":i.w4.colors.mainText};
  }
`},74914(e,a,o){o.d(a,{FlyoutPanel:()=>h});var n=o(27359),i=o(53233),t=o(77207),r=o(20255),l=o(217),s=o(15959),c=o(65185),d=o(65723);const m=t.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,u=i.default.div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${l.w4.colors.surfaceRaised};
  border: 1px solid ${l.w4.colors.accentMuted};
  border-radius: ${l.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${l.w4.colors.borderSubtle},
    0 16px 48px rgba(0, 0, 0, 0.55);
  min-width: 210px;
  overflow-y: auto;
  animation: ${m} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
    background: ${l.w4.colors.accent};
    opacity: 0.4;
  }
`,p=i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${l.w4.colors.accent};
  border-bottom: 1px solid ${l.w4.colors.borderSubtle};
  font-family: ${l.w4.typography.fontFamily};
`,f=i.default.button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?l.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${l.w4.colors.accentMuted};
    color: ${l.w4.colors.mainText};
  }
`;function g({iconKey:e}){const a=e?c.t[e]??r.A:r.A;return(0,d.jsx)(a,{size:14,strokeWidth:1.75})}function y({entries:e,activeId:a,onSelect:o}){return(0,d.jsx)(d.Fragment,{children:e.map(e=>e.children?(0,d.jsx)(n.Fragment,{children:(0,d.jsx)(y,{entries:e.children,activeId:a,onSelect:o})},e.id):(0,d.jsxs)(f,{active:a===e.id,onClick:()=>o(e),children:[(0,d.jsx)(g,{iconKey:e.icon}),e.name]},e.id))})}function h({activeId:e}){const{flyout:a,scheduleFlyoutClose:o,cancelFlyoutClose:n}=(0,s.c)();if(!a)return null;const i=a.entry.icon?c.t[a.entry.icon]??r.A:r.A;return(0,d.jsxs)(u,{anchorY:a.anchorY,onMouseEnter:n,onMouseLeave:o,children:[(0,d.jsxs)(p,{children:[(0,d.jsx)(i,{size:13,strokeWidth:2}),a.entry.name]}),(0,d.jsx)(y,{entries:a.entry.children??[],activeId:e,onSelect:e=>{a.onSelect(e),o()}})]})}},15959(e,a,o){o.d(a,{I:()=>i,c:()=>t});var n=o(27359);const i=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),t=()=>(0,n.useContext)(i)},65185(e,a,o){o.d(a,{t:()=>xe});var n=o(49510),i=o(99038),t=o(57400),r=o(37561),l=o(28207),s=o(87902),c=o(36896),d=o(53013),m=o(32887),u=o(37901),p=o(39848),f=o(22164),g=o(3045),y=o(43775),h=o(83539),x=o(41783),b=o(39416),w=o(1837),z=o(57167),$=o(84494),v=o(82314),k=o(35751),A=o(20255),j=o(69633),S=o(92946),M=o(40822),T=o(36720),C=o(58456),B=o(43317),E=o(52709),P=o(89301),F=o(8006),R=o(83517),L=o(37032),O=o(6949),N=o(8218),I=o(36829),D=o(15553),H=o(59591),G=o(69923),W=o(72820),Y=o(14621),K=o(68479),V=o(72534),_=o(66673),J=o(67490),U=o(49033),q=o(45775),Z=o(31365),X=o(62937),Q=o(9821),ee=o(65912),ae=o(80158),oe=o(88641),ne=o(48607),ie=o(83249),te=o(1821),re=o(15889),le=o(89655),se=o(27170),ce=o(19161),de=o(71849),me=o(41604),ue=o(13142),pe=o(61187),fe=o(77747),ge=o(2932),ye=o(24525),he=o(57230);const xe={activity:c.A,"a-large-small":s.A,apple:d.A,"arrow-right":m.A,"bar-chart-2":n.A,book:p.A,"book-open":u.A,briefcase:g.A,calendar:y.A,clock:x.A,"circle-dot":h.A,cloud:b.A,compass:w.A,cpu:z.A,droplets:$.A,feather:v.A,file:A.A,"file-text":k.A,folder:j.A,"git-branch":S.A,github:M.A,globe:T.A,grid:t.A,hand:C.A,hash:B.A,heart:E.A,key:F.A,hexagon:P.A,home:r.A,landmark:R.A,layers:l.A,"layout-grid":L.A,leaf:O.A,lightbulb:N.A,list:I.A,map:H.A,"map-pin":D.A,"message-circle":G.A,"message-square":W.A,minus:Y.A,monitor:K.A,mountain:V.A,package:_.A,palette:J.A,"pen-tool":U.A,"pie-chart":i.A,plane:q.A,plus:Z.A,ruler:X.A,shirt:Q.A,slash:ee.A,square:ae.A,star:oe.A,sun:ne.A,terminal:ie.A,thermometer:te.A,triangle:re.A,trophy:le.A,truck:se.A,type:ce.A,users:de.A,"volume-2":me.A,watch:ue.A,waves:pe.A,wind:fe.A,wrench:ge.A,x:ye.A,zap:he.A,bot:f.A}},59200(e,a,o){o.d(a,{PE:()=>M,CD:()=>W,PL:()=>Q,Is:()=>X,w4:()=>n.w4,cL:()=>c.c});var n=o(217),i=o(27359),t=o(53233),r=o(65723);t.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${n.w4.spacing.sm};
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,t.default.div`
  position: relative;
`;var l=o(77207),s=o(73661),c=o(15959);const d="260px",m="56px",u=t.default.header`
  display: flex;
  align-items: center;
  height: calc(${"48px"} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);
`,p=t.default.div`
  width: ${m};
  min-width: ${m};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,f=t.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,g=l.keyframes`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,y=t.default.button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${n.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${n.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,h=t.default.span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${g} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`\n    background: linear-gradient(135deg, ${n.w4.colors.accent}, ${n.w4.colors.accentHover});\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`,x=t.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  padding-left: ${n.w4.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${n.w4.spacing.sm};
    color: ${n.w4.colors.border};
  }
`,b=t.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${n.w4.spacing.md};
  padding: 0 ${n.w4.spacing.lg};

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${n.w4.spacing.sm};
  }
`,w=t.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,z=t.default.div`
  display: flex;
  flex-direction: column;
  height: ${n.w4.sizes.fullHeight};
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,$=t.default.aside`
  width: ${({collapsed:e})=>e?m:d};
  min-width: ${({collapsed:e})=>e?m:d};
  background: ${n.w4.colors.sidebarBg};
  border-right: 1px solid ${n.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${n.w4.breakpoints.md}) {
    display: none;
  }
`,v=t.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,k=t.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,A=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function j(){return(0,r.jsx)(y,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:A.map((e,a)=>(0,r.jsx)(h,{index:a,accent:e.accent,children:e.char},a))})}const S="atlantis:sidebar-collapsed";function M({sidebar:e,children:a,topBarRight:n,title:t="Atlantis",activeId:l=null}){const[d,m]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem(S)}catch{return!1}}),[g,y]=(0,i.useState)(null),h=(0,i.useRef)(),A=()=>m(e=>{const a=!e;try{localStorage.setItem(S,String(a))}catch{}return a}),M=i.useMemo(()=>i.lazy(()=>Promise.resolve().then(o.bind(o,74914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(c.I.Provider,{value:{collapsed:d,toggle:A,flyout:g,openFlyout:(e,a,o)=>{clearTimeout(h.current),y({entry:e,anchorY:a,onSelect:o})},scheduleFlyoutClose:()=>{h.current=setTimeout(()=>y(null),160)},cancelFlyoutClose:()=>clearTimeout(h.current)},children:(0,r.jsxs)(z,{children:[(0,r.jsxs)(u,{children:[e&&(0,r.jsx)(p,{children:(0,r.jsx)(f,{onClick:A,title:d?"Expand sidebar":"Collapse sidebar",children:(0,r.jsx)(s.A,{size:17})})}),(0,r.jsx)(j,{}),t&&(0,r.jsx)(x,{children:t}),n&&(0,r.jsx)(b,{children:n})]}),(0,r.jsxs)(w,{children:[null!=e&&(0,r.jsx)($,{collapsed:d,children:(0,r.jsx)(v,{children:e})}),(0,r.jsx)(k,{children:a})]}),g&&(0,r.jsx)(i.Suspense,{fallback:null,children:(0,r.jsx)(M,{activeId:l})})]})})}var T=o(20255),C=o(69753),B=o(65185);const E=t.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,P=t.default.div`
  overflow: hidden;
`,F=t.default.div`
  padding-left: ${n.w4.spacing.md};
`,R=t.default.div`
  display: flex;
  flex-direction: column;
`,L=t.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${n.w4.spacing.sm} ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":n.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${n.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${n.w4.colors.sidebarText};
    background: ${n.w4.colors.sidebarHover};
  }
`,O=t.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,N=t.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,I=t.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${n.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,D=t.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?n.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?n.w4.colors.sidebarActive:n.w4.colors.sidebarText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${n.w4.borderRadius.md} ${n.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.mainText};
  }
`;function H({iconKey:e,size:a=16}){if(e&&!(e in B.t))return(0,r.jsx)("span",{style:{fontSize:a,lineHeight:1,display:"flex",alignItems:"center"},children:e});const o=e?B.t[e]??T.A:T.A;return(0,r.jsx)(o,{size:a,strokeWidth:1.75})}function G({entry:e,activeId:a,onSelect:o}){const[n,t]=(0,i.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:d,cancelFlyoutClose:m}=(0,c.c)();return e.children&&e.children.length>0?(0,r.jsxs)(R,{children:[(0,r.jsxs)(L,{collapsed:l,onClick:()=>{l||t(e=>!e)},onMouseEnter:l?a=>{const n=a.currentTarget.getBoundingClientRect();s(e,n.top,o)}:void 0,onMouseLeave:l?d:void 0,children:[(0,r.jsxs)(O,{collapsed:l,children:[(0,r.jsx)(H,{iconKey:e.icon,size:16}),(0,r.jsx)(N,{collapsed:l,children:e.name})]}),(0,r.jsx)(I,{open:n,collapsed:l,children:(0,r.jsx)(C.A,{size:13})})]}),(0,r.jsx)(E,{open:n&&!l,children:(0,r.jsx)(P,{children:(0,r.jsx)(F,{children:e.children.map(e=>(0,r.jsx)(G,{entry:e,activeId:a,onSelect:o},e.id))})})})]}):(0,r.jsxs)(D,{active:a===e.id,collapsed:l,onClick:()=>o(e),onMouseEnter:l?a=>{const n=a.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},n.top,o)}:void 0,onMouseLeave:l?d:void 0,children:[(0,r.jsx)(H,{iconKey:e.icon,size:15}),(0,r.jsx)(N,{collapsed:l,children:e.name})]})}function W({entries:e,activeId:a,onSelect:o}){return(0,r.jsx)("div",{children:e.map(e=>(0,r.jsx)(G,{entry:e,activeId:a,onSelect:o},e.id))})}const Y=l.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;t.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${Y} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${n.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${n.w4.colors.surface};
  }
`,t.default.span`
  display: block;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${n.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${n.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${n.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${n.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,o(74914);var K=o(61920),V=o(48607),_=o(68479);t.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  color: ${n.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.accent};
    border-color: ${n.w4.colors.accent};
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
`,K.A,V.A,_.A;[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(e=>e.places);const J="documents",U="settings";function q(){return new Promise((e,a)=>{const o=indexedDB.open("atlantis-tools",2);o.onupgradeneeded=e=>{const a=e.target.result;a.objectStoreNames.contains(J)||a.createObjectStore(J,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),a.objectStoreNames.contains(U)||a.createObjectStore(U,{keyPath:"key"})},o.onsuccess=()=>e(o.result),o.onerror=()=>a(o.error)})}let Z={async saveDoc(e,a,o){const n=await q(),i={appId:e,name:a,content:o,savedAt:Date.now()};return new Promise((e,a)=>{const o=n.transaction(J,"readwrite").objectStore(J).add(i);o.onsuccess=()=>e(String(o.result)),o.onerror=()=>a(o.error)})},async updateDoc(e,a,o){const n=await q();return new Promise((i,t)=>{const r=n.transaction(J,"readwrite").objectStore(J),l=r.get(Number(e));l.onsuccess=()=>{const e=l.result;if(!e)return void t(new Error("Doc not found"));const n=r.put({...e,name:a,content:o,savedAt:Date.now()});n.onsuccess=()=>i(),n.onerror=()=>t(n.error)},l.onerror=()=>t(l.error)})},async listDocs(e){const a=await q();return new Promise((o,n)=>{const i=a.transaction(J,"readonly").objectStore(J).index("appId").getAll(e);i.onsuccess=()=>o(i.result.map(e=>({...e,id:String(e.id)})).reverse()),i.onerror=()=>n(i.error)})},async deleteDoc(e){const a=await q();return new Promise((o,n)=>{const i=a.transaction(J,"readwrite").objectStore(J).delete(Number(e));i.onsuccess=()=>o(),i.onerror=()=>n(i.error)})},async putSetting(e,a){const o=await q();return new Promise((n,i)=>{const t=o.transaction(U,"readwrite").objectStore(U).put({key:e,value:a});t.onsuccess=()=>n(),t.onerror=()=>i(t.error)})},async getSetting(e){const a=await q();return new Promise((o,n)=>{const i=a.transaction(U,"readonly").objectStore(U).get(e);i.onsuccess=()=>o(i.result?i.result.value:null),i.onerror=()=>n(i.error)})}};function X(e,a){return Z.putSetting(e,a)}function Q(e){return Z.getSetting(e)}t.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,t.default.div`
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,t.default.div`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
`,t.default.input`
  width: 100%;
  padding: 8px 12px;
  background: ${n.w4.colors.mainBg};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${n.w4.colors.accent}; }
  &::placeholder { color: ${n.w4.colors.sidebarTextMuted}; }
`,t.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,t.default.button`
  padding: 7px 18px;
  border-radius: ${n.w4.borderRadius.md};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:a})=>a?"rgba(248,81,73,0.12)":e?n.w4.colors.accent:"none"};
  color: ${({primary:e,danger:a})=>a?n.w4.colors.danger:e?"#fff":n.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:a})=>a?n.w4.colors.danger:e?n.w4.colors.accent:n.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,t.default.div`
  height: 1px;
  background: ${n.w4.colors.border};
  margin: 0 -4px;
`,t.default.div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`,t.default.div`
  position: relative;
`,t.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    border-color: ${n.w4.colors.accent};
  }
`,t.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,t.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,t.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,t.default.div`
  padding: 16px 14px;
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-style: italic;
`,t.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
  }
`,t.default.button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,t.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,t.default.div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  margin-top: 1px;
`,t.default.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${n.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`,new Set([10751]),new Set([27]),t.default.div`
  padding: ${n.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,t.default.section`
  scroll-margin-top: ${n.w4.spacing.lg};
`,t.default.div`
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.lg};
`,t.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${n.w4.spacing.xl};

  @media (max-width: ${n.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,t.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,t.default.header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  padding-left: max(${n.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${n.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${n.w4.spacing.sm};
  z-index: 100;
`,t.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${n.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${n.w4.colors.accent}; }
`,t.default.span`
  color: ${n.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,t.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,t.default.span`
  font-weight: 400;
  color: ${n.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,t.default.div`
  flex: 1;
`;const ee=l.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ae=l.keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,oe=l.keyframes`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;t.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  animation: ${ee} 0.4s ease 0.15s both;
`,t.default.div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,t.default.div`
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
`,t.default.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${n.w4.colors.border};
  animation: ${oe} 1.4s ease-in-out infinite;
`,t.default.span`
  color: ${n.w4.colors.mainTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`},217(e,a,o){o.d(a,{w4:()=>t});const n={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},i="--at-",t={colors:function(){const e={};for(const a of Object.keys(n))e[a]=`var(${i}${a})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${i}suiteLab)`,vida:`var(${i}suiteVida)`,learn:`var(${i}suiteLearn)`,games:`var(${i}suiteGames)`,ent:`var(${i}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:"\n    outline: 2px solid var(--at-accent);\n    outline-offset: 2px;\n  "}},10388(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"e1-greetings","name":"Greetings","icon":"hand","file":"english/en/year1/greetings.md"},{"id":"e1-numbers","name":"Numbers 1–10","icon":"hash","file":"english/en/year1/numbers.md"},{"id":"e1-colors","name":"Colors","icon":"palette","file":"english/en/year1/colors.md"},{"id":"e1-animals","name":"Animals","icon":"feather","file":"english/en/year1/animals.md"},{"id":"e1-family","name":"Family","icon":"heart","file":"english/en/year1/family.md"},{"id":"e1-classroom","name":"Classroom","icon":"map","file":"english/en/year1/classroom.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"e2-food","name":"Food","icon":"apple","file":"english/en/year2/food.md"},{"id":"e2-body","name":"Body Parts","icon":"activity","file":"english/en/year2/body.md"},{"id":"e2-weather","name":"Weather","icon":"cloud","file":"english/en/year2/weather.md"},{"id":"e2-days","name":"Days & Months","icon":"calendar","file":"english/en/year2/days.md"},{"id":"e2-clothes","name":"Clothes","icon":"shirt","file":"english/en/year2/clothes.md"},{"id":"e2-house","name":"The House","icon":"home","file":"english/en/year2/house.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"e3-routines","name":"Daily Routines","icon":"clock","file":"english/en/year3/routines.md"},{"id":"e3-sports","name":"Sports","icon":"trophy","file":"english/en/year3/sports.md"},{"id":"e3-nature","name":"Nature","icon":"leaf","file":"english/en/year3/nature.md"},{"id":"e3-directions","name":"Directions","icon":"compass","file":"english/en/year3/directions.md"},{"id":"e3-time","name":"Telling Time","icon":"watch","file":"english/en/year3/time.md"},{"id":"e3-jobs","name":"Jobs","icon":"briefcase","file":"english/en/year3/jobs.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"e4-past","name":"Simple Past","icon":"clock","file":"english/en/year4/past.md"},{"id":"e4-comparatives","name":"Comparatives","icon":"bar-chart-2","file":"english/en/year4/comparatives.md"},{"id":"e4-travel","name":"Travel","icon":"plane","file":"english/en/year4/travel.md"},{"id":"e4-media","name":"Media & Technology","icon":"monitor","file":"english/en/year4/media.md"},{"id":"e4-health","name":"Health","icon":"heart","file":"english/en/year4/health.md"},{"id":"e4-environment","name":"Environment","icon":"globe","file":"english/en/year4/environment.md"}]},{"id":"year5","name":"Year 5","icon":"⑤","defaultOpen":false,"children":[{"id":"e5-future","name":"Simple Future","icon":"arrow-right","file":"english/en/year5/future.md"},{"id":"e5-conditionals","name":"Conditionals","icon":"git-branch","file":"english/en/year5/conditionals.md"},{"id":"e5-culture","name":"Culture","icon":"landmark","file":"english/en/year5/culture.md"},{"id":"e5-technology","name":"Technology","icon":"cpu","file":"english/en/year5/technology.md"},{"id":"e5-debate","name":"Debate & Opinion","icon":"message-circle","file":"english/en/year5/debate.md"},{"id":"e5-writing","name":"Creative Writing","icon":"pen-tool","file":"english/en/year5/writing.md"}]},{"id":"resources","name":"Resources","icon":"📚","defaultOpen":false,"children":[{"id":"res-eng-vocab","name":"Essential Vocabulary","icon":"list","file":"english/en/resources/vocabulary.md"},{"id":"res-eng-verbs","name":"Verb Tables","icon":"zap","file":"english/en/resources/verbs.md"},{"id":"res-eng-phrases","name":"Useful Phrases","icon":"message-square","file":"english/en/resources/phrases.md"},{"id":"res-eng-pronunciation","name":"Pronunciation Guide","icon":"volume-2","file":"english/en/resources/pronunciation.md"}]}]}')},94831(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.º Ano","icon":"①","defaultOpen":false,"children":[{"id":"e1-greetings","name":"Cumprimentos","icon":"hand","file":"english/pt/year1/greetings.md"},{"id":"e1-numbers","name":"Números 1–10","icon":"hash","file":"english/pt/year1/numbers.md"},{"id":"e1-colors","name":"Cores","icon":"palette","file":"english/pt/year1/colors.md"},{"id":"e1-animals","name":"Animais","icon":"feather","file":"english/pt/year1/animals.md"},{"id":"e1-family","name":"Família","icon":"heart","file":"english/pt/year1/family.md"},{"id":"e1-classroom","name":"Sala de Aula","icon":"map","file":"english/pt/year1/classroom.md"}]},{"id":"year2","name":"2.º Ano","icon":"②","defaultOpen":false,"children":[{"id":"e2-food","name":"Comida","icon":"apple","file":"english/pt/year2/food.md"},{"id":"e2-body","name":"Corpo Humano","icon":"activity","file":"english/pt/year2/body.md"},{"id":"e2-weather","name":"Tempo e Clima","icon":"cloud","file":"english/pt/year2/weather.md"},{"id":"e2-days","name":"Dias e Meses","icon":"calendar","file":"english/pt/year2/days.md"},{"id":"e2-clothes","name":"Roupa","icon":"shirt","file":"english/pt/year2/clothes.md"},{"id":"e2-house","name":"A Casa","icon":"home","file":"english/pt/year2/house.md"}]},{"id":"year3","name":"3.º Ano","icon":"③","defaultOpen":false,"children":[{"id":"e3-routines","name":"Rotinas Diárias","icon":"clock","file":"english/pt/year3/routines.md"},{"id":"e3-sports","name":"Desportos","icon":"trophy","file":"english/pt/year3/sports.md"},{"id":"e3-nature","name":"Natureza","icon":"leaf","file":"english/pt/year3/nature.md"},{"id":"e3-directions","name":"Direções","icon":"compass","file":"english/pt/year3/directions.md"},{"id":"e3-time","name":"As Horas","icon":"watch","file":"english/pt/year3/time.md"},{"id":"e3-jobs","name":"Profissões","icon":"briefcase","file":"english/pt/year3/jobs.md"}]},{"id":"year4","name":"4.º Ano","icon":"④","defaultOpen":false,"children":[{"id":"e4-past","name":"Passado Simples","icon":"clock","file":"english/pt/year4/past.md"},{"id":"e4-comparatives","name":"Comparativos","icon":"bar-chart-2","file":"english/pt/year4/comparatives.md"},{"id":"e4-travel","name":"Viagens","icon":"plane","file":"english/pt/year4/travel.md"},{"id":"e4-media","name":"Média e Tecnologia","icon":"monitor","file":"english/pt/year4/media.md"},{"id":"e4-health","name":"Saúde","icon":"heart","file":"english/pt/year4/health.md"},{"id":"e4-environment","name":"Ambiente","icon":"globe","file":"english/pt/year4/environment.md"}]},{"id":"year5","name":"5.º Ano","icon":"⑤","defaultOpen":false,"children":[{"id":"e5-future","name":"Futuro Simples","icon":"arrow-right","file":"english/pt/year5/future.md"},{"id":"e5-conditionals","name":"Condicionais","icon":"git-branch","file":"english/pt/year5/conditionals.md"},{"id":"e5-culture","name":"Cultura","icon":"landmark","file":"english/pt/year5/culture.md"},{"id":"e5-technology","name":"Tecnologia","icon":"cpu","file":"english/pt/year5/technology.md"},{"id":"e5-debate","name":"Debate e Opinião","icon":"message-circle","file":"english/pt/year5/debate.md"},{"id":"e5-writing","name":"Escrita Criativa","icon":"pen-tool","file":"english/pt/year5/writing.md"}]},{"id":"resources","name":"Recursos","icon":"📚","defaultOpen":false,"children":[{"id":"res-eng-vocab","name":"Vocabulário Essencial","icon":"list","file":"english/pt/resources/vocabulario.md"},{"id":"res-eng-verbs","name":"Tabela de Verbos","icon":"zap","file":"english/pt/resources/verbos.md"},{"id":"res-eng-phrases","name":"Frases Úteis","icon":"message-square","file":"english/pt/resources/frases.md"},{"id":"res-eng-pronunciation","name":"Guia de Pronúncia","icon":"volume-2","file":"english/pt/resources/pronuncia.md"}]}]}')},81664(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-numeros","name":"Numbers to 20","icon":"hash","file":"math/en/year1/numbers.md"},{"id":"y1-adicao","name":"Addition","icon":"plus","file":"math/en/year1/addition.md"},{"id":"y1-subtracao","name":"Subtraction","icon":"minus","file":"math/en/year1/subtraction.md"},{"id":"y1-geometria","name":"Geometry","icon":"triangle","file":"math/en/year1/geometry.md"},{"id":"y1-medidas","name":"Measurements","icon":"ruler","file":"math/en/year1/measures.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-numeros","name":"Numbers to 100","icon":"hash","file":"math/en/year2/numbers.md"},{"id":"y2-adicao","name":"Addition with Carrying","icon":"plus","file":"math/en/year2/addition.md"},{"id":"y2-subtracao","name":"Subtraction with Borrowing","icon":"minus","file":"math/en/year2/subtraction.md"},{"id":"y2-tabuadas","name":"Times Tables × 2, × 5, × 10","icon":"x","file":"math/en/year2/multiplication.md"},{"id":"y2-geometria","name":"Geometry","icon":"triangle","file":"math/en/year2/geometry.md"},{"id":"y2-medidas","name":"Measurements","icon":"ruler","file":"math/en/year2/measures.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-numeros","name":"Numbers to 1000","icon":"hash","file":"math/en/year3/numbers.md"},{"id":"y3-multiplicacao","name":"Times Tables × 3 to × 9","icon":"x","file":"math/en/year3/multiplication.md"},{"id":"y3-divisao","name":"Division","icon":"slash","file":"math/en/year3/division.md"},{"id":"y3-fracoes","name":"Fractions","icon":"pie-chart","file":"math/en/year3/fractions.md"},{"id":"y3-geometria","name":"Geometry","icon":"triangle","file":"math/en/year3/geometry.md"},{"id":"y3-medidas","name":"Measurements","icon":"ruler","file":"math/en/year3/measures.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-numeros","name":"Numbers to 1 000 000","icon":"hash","file":"math/en/year4/numbers.md"},{"id":"y4-multiplicacao","name":"Multiplication","icon":"x","file":"math/en/year4/multiplication.md"},{"id":"y4-divisao","name":"Division with Remainder","icon":"slash","file":"math/en/year4/division.md"},{"id":"y4-decimais","name":"Decimal Numbers","icon":"circle-dot","file":"math/en/year4/decimals.md"},{"id":"y4-geometria","name":"Geometry","icon":"triangle","file":"math/en/year4/geometry.md"},{"id":"y4-medidas","name":"Measurements","icon":"ruler","file":"math/en/year4/measures.md"},{"id":"y4-dados","name":"Data Handling","icon":"bar-chart-2","file":"math/en/year4/data.md"}]},{"id":"resources","name":"Resources","icon":"📚","defaultOpen":false,"children":[{"id":"res-tabuadas","name":"Times Tables","icon":"grid","file":"math/en/resources/timestables.md"},{"id":"res-formas","name":"Geometric Shapes","icon":"hexagon","file":"math/en/resources/shapes.md"},{"id":"res-areas","name":"Areas & Perimeters","icon":"square","file":"math/en/resources/areas.md"},{"id":"res-unidades","name":"Units of Measurement","icon":"ruler","file":"math/en/resources/units.md"},{"id":"res-romanos","name":"Roman Numerals","icon":"landmark","file":"math/en/resources/roman.md"},{"id":"res-relogio","name":"Interactive Clock","icon":"clock","file":"math/en/resources/clock.md"}]}]}')},87891(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.º Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-numeros","name":"Números até 20","icon":"hash","file":"math/pt/year1/numbers.md"},{"id":"y1-adicao","name":"Adição","icon":"plus","file":"math/pt/year1/addition.md"},{"id":"y1-subtracao","name":"Subtração","icon":"minus","file":"math/pt/year1/subtraction.md"},{"id":"y1-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year1/geometria.md"},{"id":"y1-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year1/medidas.md"}]},{"id":"year2","name":"2.º Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-numeros","name":"Números até 100","icon":"hash","file":"math/pt/year2/numbers.md"},{"id":"y2-adicao","name":"Adição com Transporte","icon":"plus","file":"math/pt/year2/addition.md"},{"id":"y2-subtracao","name":"Subtração com Empréstimo","icon":"minus","file":"math/pt/year2/subtraction.md"},{"id":"y2-tabuadas","name":"Tabuadas × 2, × 5, × 10","icon":"x","file":"math/pt/year2/multiplication.md"},{"id":"y2-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year2/geometria.md"},{"id":"y2-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year2/medidas.md"}]},{"id":"year3","name":"3.º Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-numeros","name":"Números até 1000","icon":"hash","file":"math/pt/year3/numbers.md"},{"id":"y3-multiplicacao","name":"Tabuadas × 3 ao × 9","icon":"x","file":"math/pt/year3/multiplication.md"},{"id":"y3-divisao","name":"Divisão","icon":"slash","file":"math/pt/year3/division.md"},{"id":"y3-fracoes","name":"Frações","icon":"pie-chart","file":"math/pt/year3/fractions.md"},{"id":"y3-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year3/geometria.md"},{"id":"y3-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year3/medidas.md"}]},{"id":"year4","name":"4.º Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-numeros","name":"Números até 1 000 000","icon":"hash","file":"math/pt/year4/numbers.md"},{"id":"y4-multiplicacao","name":"Multiplicação","icon":"x","file":"math/pt/year4/multiplication.md"},{"id":"y4-divisao","name":"Divisão com Resto","icon":"slash","file":"math/pt/year4/division.md"},{"id":"y4-decimais","name":"Números Decimais","icon":"circle-dot","file":"math/pt/year4/decimals.md"},{"id":"y4-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year4/geometria.md"},{"id":"y4-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year4/medidas.md"},{"id":"y4-dados","name":"Tratamento de Dados","icon":"bar-chart-2","file":"math/pt/year4/dados.md"}]},{"id":"resources","name":"Recursos","icon":"📚","defaultOpen":false,"children":[{"id":"res-tabuadas","name":"Tabuadas","icon":"grid","file":"math/pt/resources/tabuadas.md"},{"id":"res-formas","name":"Formas Geométricas","icon":"hexagon","file":"math/pt/resources/formas.md"},{"id":"res-areas","name":"Áreas e Perímetros","icon":"square","file":"math/pt/resources/areas.md"},{"id":"res-unidades","name":"Unidades de Medida","icon":"ruler","file":"math/pt/resources/unidades.md"},{"id":"res-romanos","name":"Números Romanos","icon":"landmark","file":"math/pt/resources/romanos.md"},{"id":"res-relogio","name":"Relógio Interativo","icon":"clock","file":"math/pt/resources/relogio.md"}]}]}')},31103(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year1/reading.md"},{"id":"y1-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year1/grammar.md"},{"id":"y1-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year1/vocabulary.md"},{"id":"y1-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year1/spelling.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year2/reading.md"},{"id":"y2-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year2/grammar.md"},{"id":"y2-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year2/texttypes.md"},{"id":"y2-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year2/vocabulary.md"},{"id":"y2-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year2/spelling.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year3/reading.md"},{"id":"y3-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year3/grammar.md"},{"id":"y3-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year3/texttypes.md"},{"id":"y3-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year3/vocabulary.md"},{"id":"y3-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year3/spelling.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year4/reading.md"},{"id":"y4-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year4/grammar.md"},{"id":"y4-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year4/texttypes.md"},{"id":"y4-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year4/vocabulary.md"},{"id":"y4-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year4/spelling.md"}]},{"id":"resources","name":"Resources","icon":"📚","defaultOpen":false,"children":[{"id":"res-alfabeto","name":"Alphabet & Sounds","icon":"a-large-small","file":"portuguese/en/resources/alphabet.md"},{"id":"res-pontuacao","name":"Punctuation Marks","icon":"circle-dot","file":"portuguese/en/resources/punctuation.md"},{"id":"res-classes","name":"Word Classes","icon":"layers","file":"portuguese/en/resources/wordclasses.md"},{"id":"res-verbos","name":"Verb Conjugation","icon":"zap","file":"portuguese/en/resources/verbs.md"}]}]}')},39360(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.º Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year1/leitura.md"},{"id":"y1-gramatica","name":"Gramática","icon":"type","file":"portuguese/pt/year1/gramatica.md"},{"id":"y1-vocabulario","name":"Vocabulário","icon":"list","file":"portuguese/pt/year1/vocabulario.md"},{"id":"y1-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year1/ortografia.md"}]},{"id":"year2","name":"2.º Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year2/leitura.md"},{"id":"y2-gramatica","name":"Gramática","icon":"type","file":"portuguese/pt/year2/gramatica.md"},{"id":"y2-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year2/texto.md"},{"id":"y2-vocabulario","name":"Vocabulário","icon":"list","file":"portuguese/pt/year2/vocabulario.md"},{"id":"y2-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year2/ortografia.md"}]},{"id":"year3","name":"3.º Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year3/leitura.md"},{"id":"y3-gramatica","name":"Gramática","icon":"type","file":"portuguese/pt/year3/gramatica.md"},{"id":"y3-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year3/texto.md"},{"id":"y3-vocabulario","name":"Vocabulário","icon":"list","file":"portuguese/pt/year3/vocabulario.md"},{"id":"y3-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year3/ortografia.md"}]},{"id":"year4","name":"4.º Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year4/leitura.md"},{"id":"y4-gramatica","name":"Gramática","icon":"type","file":"portuguese/pt/year4/gramatica.md"},{"id":"y4-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year4/texto.md"},{"id":"y4-vocabulario","name":"Vocabulário","icon":"list","file":"portuguese/pt/year4/vocabulario.md"},{"id":"y4-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year4/ortografia.md"}]},{"id":"resources","name":"Recursos","icon":"📚","defaultOpen":false,"children":[{"id":"res-alfabeto","name":"Alfabeto e Sons","icon":"a-large-small","file":"portuguese/pt/resources/alfabeto.md"},{"id":"res-pontuacao","name":"Sinais de Pontuação","icon":"circle-dot","file":"portuguese/pt/resources/pontuacao.md"},{"id":"res-classes","name":"Classes de Palavras","icon":"layers","file":"portuguese/pt/resources/classes.md"},{"id":"res-verbos","name":"Verbos — Conjugação","icon":"zap","file":"portuguese/pt/resources/verbos.md"}]}]}')},6662(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-corpo","name":"My Body","icon":"activity","file":"science/en/year1/body.md"},{"id":"y1-familia","name":"My Family","icon":"heart","file":"science/en/year1/family.md"},{"id":"y1-escola","name":"My School","icon":"map","file":"science/en/year1/school.md"},{"id":"y1-seres-vivos","name":"Living Things","icon":"feather","file":"science/en/year1/livingthings.md"},{"id":"y1-estacoes","name":"Seasons of the Year","icon":"sun","file":"science/en/year1/seasons.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-corpo","name":"The Human Body","icon":"activity","file":"science/en/year2/body.md"},{"id":"y2-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year2/health.md"},{"id":"y2-animais","name":"Animals","icon":"feather","file":"science/en/year2/animals.md"},{"id":"y2-plantas","name":"Plants","icon":"leaf","file":"science/en/year2/plants.md"},{"id":"y2-transportes","name":"Transport","icon":"truck","file":"science/en/year2/transport.md"},{"id":"y2-orientacao","name":"Orientation & Maps","icon":"compass","file":"science/en/year2/orientation.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-corpo","name":"The Human Body","icon":"activity","file":"science/en/year3/body.md"},{"id":"y3-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year3/health.md"},{"id":"y3-animais","name":"Animals","icon":"feather","file":"science/en/year3/animals.md"},{"id":"y3-plantas","name":"Plants","icon":"leaf","file":"science/en/year3/plants.md"},{"id":"y3-portugal","name":"Portugal","icon":"map","file":"science/en/year3/portugal.md"},{"id":"y3-rochas","name":"Rocks & Soil","icon":"mountain","file":"science/en/year3/rocks.md"},{"id":"y3-astros","name":"Space & Stars","icon":"star","file":"science/en/year3/space.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-corpo","name":"The Human Body","icon":"activity","file":"science/en/year4/body.md"},{"id":"y4-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year4/health.md"},{"id":"y4-animais","name":"Animals","icon":"feather","file":"science/en/year4/animals.md"},{"id":"y4-plantas","name":"Plants","icon":"leaf","file":"science/en/year4/plants.md"},{"id":"y4-portugal","name":"Portugal","icon":"map","file":"science/en/year4/portugal.md"},{"id":"y4-historia","name":"History of Portugal","icon":"landmark","file":"science/en/year4/history.md"},{"id":"y4-economia","name":"Economic Activities","icon":"briefcase","file":"science/en/year4/economy.md"},{"id":"y4-rios","name":"Rivers & Mountains","icon":"waves","file":"science/en/year4/rivers.md"}]},{"id":"resources","name":"Resources","icon":"📚","defaultOpen":false,"children":[{"id":"res-corpo","name":"The Human Body","icon":"activity","file":"science/en/resources/body.md"},{"id":"res-agua","name":"The Water Cycle","icon":"droplets","file":"science/en/resources/water.md"},{"id":"res-solar","name":"The Solar System","icon":"sun","file":"science/en/resources/solar.md"},{"id":"res-animais","name":"Animal Classification","icon":"feather","file":"science/en/resources/animals.md"}]}]}')},37877(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.º Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-corpo","name":"O Meu Corpo","icon":"activity","file":"science/pt/year1/corpo.md"},{"id":"y1-familia","name":"A Minha Família","icon":"heart","file":"science/pt/year1/familia.md"},{"id":"y1-escola","name":"A Minha Escola","icon":"map","file":"science/pt/year1/escola.md"},{"id":"y1-seres-vivos","name":"Os Seres Vivos","icon":"feather","file":"science/pt/year1/seresvivos.md"},{"id":"y1-estacoes","name":"Estações do Ano","icon":"sun","file":"science/pt/year1/estacoes.md"}]},{"id":"year2","name":"2.º Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year2/corpo.md"},{"id":"y2-saude","name":"Saúde e Higiene","icon":"heart","file":"science/pt/year2/saude.md"},{"id":"y2-animais","name":"Os Animais","icon":"feather","file":"science/pt/year2/animais.md"},{"id":"y2-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year2/plantas.md"},{"id":"y2-transportes","name":"Meios de Transporte","icon":"truck","file":"science/pt/year2/transportes.md"},{"id":"y2-orientacao","name":"Orientação e Mapas","icon":"compass","file":"science/pt/year2/orientacao.md"}]},{"id":"year3","name":"3.º Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year3/corpo.md"},{"id":"y3-saude","name":"Saúde e Higiene","icon":"heart","file":"science/pt/year3/saude.md"},{"id":"y3-animais","name":"Os Animais","icon":"feather","file":"science/pt/year3/animais.md"},{"id":"y3-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year3/plantas.md"},{"id":"y3-portugal","name":"Portugal","icon":"map","file":"science/pt/year3/portugal.md"},{"id":"y3-rochas","name":"Rochas e Solo","icon":"mountain","file":"science/pt/year3/rochas.md"},{"id":"y3-astros","name":"Os Astros","icon":"star","file":"science/pt/year3/astros.md"}]},{"id":"year4","name":"4.º Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year4/corpo.md"},{"id":"y4-saude","name":"Saúde e Higiene","icon":"heart","file":"science/pt/year4/saude.md"},{"id":"y4-animais","name":"Os Animais","icon":"feather","file":"science/pt/year4/animais.md"},{"id":"y4-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year4/plantas.md"},{"id":"y4-portugal","name":"Portugal","icon":"map","file":"science/pt/year4/portugal.md"},{"id":"y4-historia","name":"História de Portugal","icon":"landmark","file":"science/pt/year4/historia.md"},{"id":"y4-economia","name":"Atividades Económicas","icon":"briefcase","file":"science/pt/year4/economia.md"},{"id":"y4-rios","name":"Rios e Serras","icon":"waves","file":"science/pt/year4/rios.md"}]},{"id":"resources","name":"Recursos","icon":"📚","defaultOpen":false,"children":[{"id":"res-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/resources/corpo.md"},{"id":"res-agua","name":"O Ciclo da Água","icon":"droplets","file":"science/pt/resources/agua.md"},{"id":"res-solar","name":"O Sistema Solar","icon":"sun","file":"science/pt/resources/solar.md"},{"id":"res-animais","name":"Classificação dos Animais","icon":"feather","file":"science/pt/resources/animais.md"}]}]}')}}]);