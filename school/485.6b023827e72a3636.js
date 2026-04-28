"use strict";(self.webpackChunk_atlantis_school=self.webpackChunk_atlantis_school||[]).push([["485"],{2053(e,a,o){o.d(a,{WO:()=>ap});var t=o(5723),r=o(7991),i=o(6063),n=o(6859),l=o.n(n),s=o(8550);function d(e){try{return JSON.parse(localStorage.getItem(e)??"[]")}catch{return[]}}let c=l().nav`padding: ${i.w4.spacing.sm} 0;`,p=l().div`
  border-bottom: 1px solid ${i.w4.colors.border}60;
  margin-bottom: 2px;
`,m=l().button`
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
`,g=l().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,h=l().span`
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,f=l().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,u=l().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,x=l().div`overflow: hidden;`,y=l().div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,b=l().button`
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
`,w=l().button`
  opacity: ${({active:e})=>+!!e};
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
`;function v({title:e,icon:a,entries:o,activeId:i,onSelect:n,favorites:l,onToggleFav:d,collapsed:c}){let[$,z]=(0,r.useState)(!1);return o.length?(0,t.jsxs)(p,{children:[(0,t.jsxs)(m,{collapsed:c,onClick:()=>{c||z(e=>!e)},children:[(0,t.jsxs)(g,{collapsed:c,children:[a,(0,t.jsx)(h,{collapsed:c,children:e})]}),(0,t.jsx)(f,{open:$,collapsed:c,children:(0,t.jsx)(s.In,{name:"chevron-right",size:12})})]}),(0,t.jsx)(u,{open:$&&!c,children:(0,t.jsx)(x,{children:o.map(e=>{let a=l.some(a=>a.id===e.id);return(0,t.jsxs)(y,{children:[(0,t.jsx)(b,{active:i===e.id,onClick:()=>n(e),children:e.name}),(0,t.jsx)(w,{active:a,title:a?"Remover dos favoritos":"Adicionar aos favoritos",onClick:a=>{a.stopPropagation(),d(e)},children:(0,t.jsx)(s.In,{name:"star",size:12})})]},e.id)})})})]}):null}function $({config:e,activeId:a,onSelect:o,hashPrefix:i}){let n=`atlantis-recent-${i}`,l=`atlantis-fav-${i}`,{collapsed:p}=(0,s.cL)(),[m,g]=(0,r.useState)(()=>d(n)),[h,f]=(0,r.useState)(()=>d(l)),u=(0,r.useCallback)(e=>{e.file&&g(a=>{let o;return o=[e,...a.filter(a=>a.id!==e.id)].slice(0,10),localStorage.setItem(n,JSON.stringify(o)),o}),o(e)},[o,n]),x=(0,r.useCallback)(e=>{f(a=>{let o;return o=a.some(a=>a.id===e.id)?a.filter(a=>a.id!==e.id):[...a,e],localStorage.setItem(l,JSON.stringify(o)),o})},[l]);return(0,t.jsxs)(c,{children:[(0,t.jsx)(v,{title:"Recentes",icon:(0,t.jsx)(s.In,{name:"clock",size:13}),entries:m,activeId:a,onSelect:u,favorites:h,onToggleFav:x,collapsed:p}),(0,t.jsx)(v,{title:"Favoritos",icon:(0,t.jsx)(s.In,{name:"star",size:13}),entries:h,activeId:a,onSelect:u,favorites:h,onToggleFav:x,collapsed:p}),(0,t.jsx)(s.CD,{entries:e.entries,activeId:a,onSelect:u})]})}var z=o(1352),M=o(6710),k=o(3639),j=o(80),T=o(4311),A=o(2799);let S="https://cdn.jsdelivr.net/npm/mermaid@11.14.0/dist/mermaid.min.js",C=null,B="#7fb77e",F=(0,A.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,L=l().div`
  position: relative;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: 28px ${i.w4.spacing.lg} ${i.w4.spacing.lg};
  margin: ${i.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  min-height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${F} 0.25s ease both;
  transition:
    border-color ${i.w4.transitions.base},
    transform ${i.w4.transitions.base},
    box-shadow ${i.w4.transitions.base};

  /* Signature left accent bar — full-height, inset like a ribbon */
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0;
    width: 2px;
    border-radius: 2px;
    background: ${B};
  }

  /* Uppercase mono eyebrow tag — reads "◉ DIAGRAM" */
  &::after {
    content: '◉ DIAGRAM';
    position: absolute;
    top: 10px;
    right: 14px;
    font-family: ${i.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    color: ${B};
    opacity: 0.75;
    pointer-events: none;
  }

  &:hover {
    border-color: ${i.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: ${i.w4.elevation.sm};
  }

  svg { max-width: 100%; height: auto; }
  svg text { font-variant-numeric: tabular-nums; }
`,H=l().div`
  height: 36px;
  width: min(60%, 240px);
  margin: 0 auto;
  border-radius: ${i.w4.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${i.w4.colors.border} 0%,
    ${i.w4.colors.borderStrong} 50%,
    ${i.w4.colors.border} 100%
  );
  background-size: 200% 100%;
  animation: ${(0,A.keyframes)`
    from { background-position: 200% 0; }
    to   { background-position: -200% 0; }
  `} 1.6s ease-in-out infinite;
  opacity: 0.45;
`,R=l().pre`
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
`,E=!1,P=/^(?:---[\s\S]*?---\s*)?(?:graph|flowchart|sequenceDiagram|classDiagram|stateDiagram(?:-v2)?|erDiagram|pie|gantt|journey|mindmap|gitGraph|sankey(?:-beta)?|quadrantChart|requirementDiagram|timeline|xychart-beta|block-beta|C4Context|C4Container|C4Component|C4Dynamic|C4Deployment)\b/;function V({code:e}){let[a,o]=(0,r.useState)(""),[i,n]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{let a=!1;n(!1),o("");let t=e.trim();if(!t)return void n(!0);let r=t.split(/\r?\n/)[0]?.trim()??"";if(!P.test(r))return void n(!0);let i=setTimeout(()=>{a||(console.error("[MermaidBlock] render timed out after 5s"),n(!0))},5e3);return(async()=>{try{let e=await (C||(C=new Promise((e,a)=>{let o=globalThis.mermaid;if(o)return void e(o);let t=document.createElement("script");t.src=S,t.async=!0,t.onload=()=>{let o=globalThis.mermaid;o?e(o):a(Error("mermaid loaded but globalThis.mermaid missing"))},t.onerror=()=>a(Error(`failed to load ${S}`)),document.head.appendChild(t)})));if(console.debug("[MermaidBlock] mermaid ready",{initialized:E}),!E){let a="#141820",o="#1c2332",t="#343c4f",r="#e8edf5",i="#9aa5b8",n="#7fb77e",l="#6aa8d8",s="#8b7bff",d="#e89a5c",c="#f87171";e.initialize({startOnLoad:!1,theme:"base",securityLevel:"loose",themeVariables:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",background:a,mainBkg:o,primaryColor:n,primaryTextColor:r,primaryBorderColor:n,secondaryColor:s,secondaryTextColor:r,secondaryBorderColor:s,tertiaryColor:l,tertiaryTextColor:r,tertiaryBorderColor:l,lineColor:i,textColor:r,nodeBorder:t,clusterBkg:a,clusterBorder:t,edgeLabelBackground:o,labelBackground:o,labelBorder:t,relationLabelBackground:o,relationLabelColor:r,pie1:n,pie2:s,pie3:l,pie4:d,pie5:"#ff6fa9",pie6:"#2dd4bf",pie7:c,pie8:n,pieStrokeColor:a,pieStrokeWidth:"2px",pieTitleTextSize:"18px",pieSectionTextSize:"13px",pieLegendTextSize:"13px",actorBkg:n,actorBorder:n,actorTextColor:a,signalColor:r,signalTextColor:r,labelBoxBkgColor:o,labelBoxBorderColor:t,labelTextColor:r,loopTextColor:r,noteBkgColor:d,noteBorderColor:d,noteTextColor:a,stateBkg:o,altBackground:a,attributeBackgroundColorOdd:o,attributeBackgroundColorEven:a,rowOdd:o,rowEven:a,gridColor:t,sectionBkgColor:o,sectionBkgColor2:a,taskBkgColor:s,taskTextColor:r,taskTextDarkColor:r,taskTextLightColor:r,taskTextOutsideColor:r,activeTaskBkgColor:n,activeTaskBorderColor:n,doneTaskBkgColor:i,doneTaskBorderColor:i,critBkgColor:c,critBorderColor:c}}),E=!0}console.debug("[MermaidBlock] calling mermaid.render");let{svg:r}=await e.render(`mermaid-${"u">typeof crypto&&"function"==typeof crypto.randomUUID?crypto.randomUUID().replace(/-/g,"").slice(0,8):Math.random().toString(36).slice(2,10).padEnd(8,"0")}`,t);if(clearTimeout(i),console.debug("[MermaidBlock] render returned",{length:r?.length??0}),a)return;let l=/aria-roledescription="error"/i.test(r)||/class="error-(?:icon|text)"/i.test(r)||/>Syntax error in text</i.test(r);if(!r||l)return void n(!0);o(r)}catch(e){clearTimeout(i),console.error("[MermaidBlock] render failed",e),a||n(!0)}})(),()=>{a=!0,clearTimeout(i)}},[e]),i)?(0,t.jsx)(R,{children:e.trim()}):a?(0,t.jsx)(L,{dangerouslySetInnerHTML:{__html:a}}):(0,t.jsx)(L,{children:(0,t.jsx)(H,{"aria-hidden":!0})})}let O=["#388bfd","#3fb950","#d29922","#a371f7","#f87171","#22d3ee","#fb923c","#34d399","#f472b6","#818cf8"],I=l().div`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.codeBorder};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.lg};
  margin: ${i.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,N=l().div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  margin-bottom: ${i.w4.spacing.md};
  text-align: center;
`,D=l().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  margin-top: ${i.w4.spacing.md};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,G=l().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,Y=l().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,W=l().pre`
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
`;function K(e){if(e<=0)return 10;let a=Math.pow(10,Math.floor(Math.log10(e)));return Math.ceil(e/a)*a}function q(e,a,o){let t=Math.max(1,Math.ceil(o/8));return 0!==a&&a!==o-1&&a%t!=0?"":e.length>12?e.slice(0,11)+"…":e}function _({labels:e,data:a,colors:o}){let r=340,n=176,l=K(Math.max(...a,1)),s=Math.min(40,r/e.length*.6),d=r/e.length,c=Array.from({length:6},(e,a)=>l/5*a);return(0,t.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[c.map((e,a)=>{let o=16+n-e/l*n;return(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:44,y1:o,x2:384,y2:o,stroke:i.w4.colors.border,strokeWidth:.5,strokeDasharray:0===a?"none":"3,3"}),(0,t.jsx)("text",{x:38,y:o+4,fill:i.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:i.w4.typography.fontFamily,children:Math.round(e)})]},a)}),a.map((a,r)=>{let c=44+d*r+d/2-s/2,p=a/l*n,m=16+n-p,g=o[r%o.length];return(0,t.jsxs)("g",{children:[(0,t.jsxs)("rect",{x:c,y:m,width:s,height:p,rx:3,fill:g,opacity:.85,children:[(0,t.jsx)("animate",{attributeName:"height",from:"0",to:p,dur:"0.5s",fill:"freeze"}),(0,t.jsx)("animate",{attributeName:"y",from:16+n,to:m,dur:"0.5s",fill:"freeze"})]}),(0,t.jsx)("text",{x:c+s/2,y:m-4,fill:i.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:a}),(0,t.jsx)("text",{x:44+d*r+d/2,y:208,fill:i.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:q(e[r],r,e.length)})]},r)})]})}function U({labels:e,data:a,colors:o}){let r=a.reduce((e,a)=>e+a,0)||1,n=-Math.PI/2,l=a.map((e,a)=>{let l=e/r*Math.PI*2,s=n,d=n+=l,c=120+90*Math.cos(s),p=120+90*Math.sin(s),m=120+90*Math.cos(d),g=120+90*Math.sin(d),h=+(l>Math.PI),f=s+l/2,u=120+58.5*Math.cos(f),x=120+58.5*Math.sin(f),y=Math.round(e/r*100);return(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:`M 120 120 L ${c} ${p} A 90 90 0 ${h} 1 ${m} ${g} Z`,fill:o[a%o.length],stroke:i.w4.colors.codeBg,strokeWidth:2,opacity:.85}),y>=5&&(0,t.jsxs)("text",{x:u,y:x+4,fill:"#fff",fontSize:11,fontWeight:600,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:[y,"%"]})]},a)});return(0,t.jsx)("svg",{viewBox:"0 0 240 240",width:"100%",style:{maxWidth:240},children:l})}function J({labels:e,data:a,colors:o}){let r=340,n=176,l=K(Math.max(...a,1)),s=a.length>1?r/(a.length-1):r,d=o[0],c=a.map((e,a)=>({x:44+s*a,y:16+n-e/l*n})),p=c.map((e,a)=>`${0===a?"M":"L"} ${e.x} ${e.y}`).join(" "),m=Array.from({length:6},(e,a)=>l/5*a);return(0,t.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[m.map((e,a)=>{let o=16+n-e/l*n;return(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:44,y1:o,x2:384,y2:o,stroke:i.w4.colors.border,strokeWidth:.5,strokeDasharray:0===a?"none":"3,3"}),(0,t.jsx)("text",{x:38,y:o+4,fill:i.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:i.w4.typography.fontFamily,children:Math.round(e)})]},a)}),(0,t.jsx)("path",{d:p,fill:"none",stroke:d,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),c.map((o,r)=>(0,t.jsxs)("g",{children:[(0,t.jsx)("circle",{cx:o.x,cy:o.y,r:4,fill:d,stroke:i.w4.colors.codeBg,strokeWidth:2}),(0,t.jsx)("text",{x:o.x,y:o.y-10,fill:i.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:a[r]}),(0,t.jsx)("text",{x:o.x,y:208,fill:i.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:q(e[r],r,e.length)})]},r))]})}function Z({code:e}){let a=(0,r.useMemo)(()=>(function(e){let a,o,t=e.trim().split("\n"),r="bar",i=[],n=[];for(let e of t){let[t,...l]=e.split(":"),s=l.join(":").trim();if(s)switch(t.trim().toLowerCase()){case"type":["bar","pie","line"].includes(s.toLowerCase())&&(r=s.toLowerCase());break;case"title":a=s;break;case"labels":i=s.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim()).filter(Boolean);break;case"data":n=s.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim()).filter(Boolean).map(e=>parseFloat(e)||0);break;case"colors":{let e=s.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim()).filter(Boolean);o=e.length?e:void 0}}}return i.length&&n.length?{type:r,title:a,labels:i,data:n,colors:o}:null})(e),[e]);if(!a)return(0,t.jsx)(W,{children:e.trim()});let o=a.colors??O;return(0,t.jsxs)(I,{children:[a.title&&(0,t.jsx)(N,{children:a.title}),"bar"===a.type&&(0,t.jsx)(_,{labels:a.labels,data:a.data,colors:o}),"pie"===a.type&&(0,t.jsx)(U,{labels:a.labels,data:a.data,colors:o}),"line"===a.type&&(0,t.jsx)(J,{labels:a.labels,data:a.data,colors:o}),(0,t.jsx)(D,{children:a.labels.map((e,a)=>(0,t.jsxs)(G,{children:[(0,t.jsx)(Y,{color:o[a%o.length]}),e]},a))})]})}let X=l().div`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.codeBorder};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.lg};
  margin: ${i.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.md};
`,Q=l().div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,ee=l().div`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,ea=l().div`
  display: flex;
  gap: ${i.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,eo=l().button`
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
`,et=l().div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
`,er=l().div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  text-align: center;
`;function ei(e){return e.toString().padStart(2,"0")}function en({hours:e,minutes:a,seconds:o}){let r=e=>e*Math.PI/180,n=o/60*360-90,l=a/60*360+o/60*6-90,s=e%12/12*360+a/60*30-90,d=100+61*Math.cos(r(n)),c=100+61*Math.sin(r(n)),p=100+65*Math.cos(r(l)),m=100+65*Math.sin(r(l)),g=100+45*Math.cos(r(s)),h=100+45*Math.sin(r(s));return(0,t.jsxs)("svg",{viewBox:"0 0 200 200",width:200,height:200,children:[(0,t.jsx)("circle",{cx:100,cy:100,r:85,fill:i.w4.colors.surface,stroke:i.w4.colors.border,strokeWidth:2}),Array.from({length:12},(e,a)=>{let o=a+1,n=o/12*360-90,l=100+69*Math.cos(r(n)),s=100+69*Math.sin(r(n));return(0,t.jsx)("text",{x:l,y:s+4,fill:i.w4.colors.mainText,fontSize:14,fontWeight:600,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:o},o)}),Array.from({length:60},(e,a)=>{let o=a/60*360-90,n=a%5==0,l=n?75:79;return(0,t.jsx)("line",{x1:100+l*Math.cos(r(o)),y1:100+l*Math.sin(r(o)),x2:100+83*Math.cos(r(o)),y2:100+83*Math.sin(r(o)),stroke:n?i.w4.colors.mainTextMuted:i.w4.colors.border,strokeWidth:n?2:1},a)}),(0,t.jsx)("line",{x1:100,y1:100,x2:g,y2:h,stroke:i.w4.colors.mainText,strokeWidth:4,strokeLinecap:"round"}),(0,t.jsx)("line",{x1:100,y1:100,x2:p,y2:m,stroke:i.w4.colors.accent,strokeWidth:2.5,strokeLinecap:"round"}),(0,t.jsx)("line",{x1:100-12*Math.cos(r(n)),y1:100-12*Math.sin(r(n)),x2:d,y2:c,stroke:"#f87171",strokeWidth:1.2,strokeLinecap:"round"}),(0,t.jsx)("circle",{cx:100,cy:100,r:4,fill:i.w4.colors.accent}),(0,t.jsx)("circle",{cx:100,cy:100,r:2,fill:"#f87171"})]})}function el({code:e}){let a=function(e){let a="pt";for(let o of e.trim().split("\n")){let[e,...t]=o.split(":"),r=t.join(":").trim();"locale"===e.trim().toLowerCase()&&(a=r.toLowerCase())}return{locale:a}}(e),[o,i]=(0,r.useState)("live"),[n,l]=(0,r.useState)(()=>new Date().getHours()),[s,d]=(0,r.useState)(()=>new Date().getMinutes()),[c,p]=(0,r.useState)(()=>new Date().getSeconds());(0,r.useEffect)(()=>{if("live"!==o)return;let e=()=>{let e=new Date;l(e.getHours()),d(e.getMinutes()),p(e.getSeconds())};e();let a=setInterval(e,1e3);return()=>clearInterval(a)},[o]);let m=(0,r.useCallback)(e=>{i("manual"),p(0),l(a=>((a+e)%24+24)%24)},[]),g=(0,r.useCallback)(e=>{i("manual"),p(0),d(a=>((a+e)%60+60)%60)},[]),h=(0,r.useCallback)(()=>i("live"),[]);return(0,t.jsxs)(X,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsx)(en,{hours:n,minutes:s,seconds:c}),(0,t.jsxs)("div",{children:[(0,t.jsxs)(ee,{children:[ei(n),":",ei(s),(0,t.jsxs)("span",{style:{fontSize:"24px",opacity:.5},children:[":",ei(c)]})]}),(0,t.jsx)(er,{children:function(e,a,o){if("pt"===o){let o=1===e?"1 hora":`${e} horas`;return 0===a?o:15===a?`${o} e um quarto`:30===a?`${o} e meia`:45===a?`um quarto para as ${12===e?1:e+1}`:`${o} e ${a} minutos`}let t=e<12?"AM":"PM",r=e%12||12;return 0===a?`${r} o'clock ${t}`:15===a?`quarter past ${r} ${t}`:30===a?`half past ${r} ${t}`:45===a?`quarter to ${r%12+1} ${t}`:`${r}:${ei(a)} ${t}`}(n%12||12,s,a.locale)})]})]}),(0,t.jsxs)(ea,{children:[(0,t.jsx)(eo,{onClick:()=>m(-1),children:"−1h"}),(0,t.jsx)(eo,{onClick:()=>m(1),children:"+1h"}),(0,t.jsx)(eo,{onClick:()=>g(-15),children:"−15m"}),(0,t.jsx)(eo,{onClick:()=>g(15),children:"+15m"}),(0,t.jsx)(eo,{onClick:()=>g(-5),children:"−5m"}),(0,t.jsx)(eo,{onClick:()=>g(5),children:"+5m"}),(0,t.jsx)(eo,{active:"live"===o,onClick:h,children:"pt"===a.locale?"Agora":"Now"})]}),(0,t.jsx)(et,{children:"pt"===a.locale?"Usa os bot\xf5es para mudar as horas e os minutos!":"Use the buttons to change the hours and minutes!"}),(0,t.jsx)(ea,{children:[{label:"3:00",h:3,m:0},{label:"6:30",h:6,m:30},{label:"9:15",h:9,m:15},{label:"12:00",h:12,m:0},{label:"13:45",h:13,m:45},{label:"15:30",h:15,m:30},{label:"19:00",h:19,m:0},{label:"23:15",h:23,m:15}].map(e=>(0,t.jsx)(eo,{onClick:()=>{i("manual"),l(e.h),d(e.m)},children:e.label},e.label))})]})}let es=["Samantha","Karen","Daniel","Moira","Rishi","Google UK English Female","Google US English"],ed=["Joana","Luciana","Catarina","Google portugu\xeas do Brasil"];function ec(e,a){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();let o=new SpeechSynthesisUtterance(e);o.lang="pt"===a?"pt-PT":"en-US",o.rate=1,o.pitch=1;let t=function(e,a){let o="en"===a?"en":"pt";for(let t of"en"===a?es:ed){let a=e.find(e=>e.name.includes(t)&&e.lang.startsWith(o));if(a)return a}return e.find(e=>e.lang.startsWith(o))}(window.speechSynthesis.getVoices(),a);t&&(o.voice=t,o.lang=t.lang),window.speechSynthesis.speak(o)}let ep=(0,A.keyframes)`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`,em=l().div`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.codeBorder};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.md};
  margin: ${i.w4.spacing.lg} 0;
`,eg=l().div`
  font-size: 11px;
  font-family: ${i.w4.typography.fontFamilyMono};
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${i.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,eh=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${i.w4.spacing.sm};

  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,ef=l().div`
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
`,eu=l().button`
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
    animation: ${ep} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`,ex=l()(eu)`
  border-bottom: 1px solid ${i.w4.colors.border}80;
`,ey=l()(eu)``,eb=l().span`
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
`,ew=l().span`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${i.w4.colors.accent};
`,ev=l().span`
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${i.w4.colors.mainTextMuted};
`;function e$({code:e}){let a=e.split("\n").map(e=>e.trim()).filter(e=>e&&e.includes("|")).map(e=>{let[a,o]=e.split("|").map(e=>e.trim());return{en:a??"",pt:o??""}}).filter(e=>e.en&&e.pt),o=(0,r.useRef)(null),i=(0,r.useRef)(!1),n=(0,r.useCallback)(e=>{o.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},[]),l=(0,r.useCallback)((e,a)=>t=>{if(!o.current)return;let r=Math.abs(t.changedTouches[0].clientX-o.current.x),n=Math.abs(t.changedTouches[0].clientY-o.current.y);o.current=null,r>8||n>8||(i.current=!0,ec(e,a))},[]),d=(0,r.useCallback)((e,a)=>()=>{if(i.current){i.current=!1;return}ec(e,a)},[]);return a.length?(0,t.jsxs)(em,{children:[(0,t.jsxs)(eg,{children:[(0,t.jsx)(s.In,{name:"volume-2",size:12}),"Words to Listen / Palavras para Ouvir"]}),(0,t.jsx)(eh,{children:a.map(e=>(0,t.jsxs)(ef,{children:[(0,t.jsxs)(ex,{accentColor:"#58a6ff",onTouchStart:n,onTouchEnd:l(e.en,"en"),onClick:d(e.en,"en"),title:`Listen: ${e.en}`,children:[(0,t.jsx)(eb,{accentColor:"#58a6ff",children:(0,t.jsx)(s.In,{name:"volume-2",size:16})}),(0,t.jsx)(ew,{children:e.en})]}),(0,t.jsxs)(ey,{accentColor:"#3fb950",onTouchStart:n,onTouchEnd:l(e.pt,"pt"),onClick:d(e.pt,"pt"),title:`Ouvir: ${e.pt}`,children:[(0,t.jsx)(eb,{accentColor:"#3fb950",children:(0,t.jsx)(s.In,{name:"volume-2",size:16})}),(0,t.jsx)(ev,{children:e.pt})]})]},e.en))})]}):null}var ez=o(7223),eM=o(1426);let ek=l().div`
  margin: ${i.w4.spacing.lg} 0;
  border-radius: ${i.w4.borderRadius.md};
  border: 1px solid ${i.w4.colors.codeBorder};
  overflow: hidden;
`,ej=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${i.w4.colors.codeBorder};
`,eT=l().span`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${i.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,eA=l().button`
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
`,eS={...eM.A,'pre[class*="language-"]':{...eM.A['pre[class*="language-"]'],background:i.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...eM.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function eC({lang:e="text",code:a}){let[o,n]=(0,r.useState)(!1);return(0,t.jsxs)(ek,{children:[(0,t.jsxs)(ej,{children:[(0,t.jsx)(eT,{children:e}),(0,t.jsxs)(eA,{copied:o,onClick:()=>{navigator.clipboard.writeText(a).then(()=>{n(!0),setTimeout(()=>n(!1),2e3)})},children:[o?(0,t.jsx)(s.In,{name:"check",size:12}):(0,t.jsx)(s.In,{name:"copy",size:12}),o?"Copied!":"Copy"]})]}),(0,t.jsx)(ez.A,{language:e,style:eS,showLineNumbers:a.split("\n").length>8,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:i.w4.colors.codeBg},wrapLongLines:!1,children:a})]})}let eB={NOTE:{bg:"rgba(88, 166, 255, 0.08)",border:"#58a6ff",icon:"info",label:"Note",color:"#58a6ff"},TIP:{bg:"rgba(63, 185, 80, 0.08)",border:"#3fb950",icon:"lightbulb",label:"Tip",color:"#3fb950"},IMPORTANT:{bg:"rgba(163, 113, 247, 0.08)",border:"#a371f7",icon:"zap",label:"Important",color:"#a371f7"},WARNING:{bg:"rgba(210, 153, 34, 0.08)",border:"#d29922",icon:"alert-triangle",label:"Warning",color:"#d29922"},CAUTION:{bg:"rgba(248, 81, 73, 0.08)",border:"#f85149",icon:"alert-octagon",label:"Caution",color:"#f85149"}},eF=l().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${i.w4.borderRadius.md} ${i.w4.borderRadius.md} 0;
  padding: ${i.w4.spacing.md} ${i.w4.spacing.lg};
  margin: ${i.w4.spacing.lg} 0;
`,eL=l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${i.w4.typography.fontFamily};
  margin-bottom: ${i.w4.spacing.sm};
`,eH=l().div`
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`;function eR({type:e,children:a}){let o=eB[e]??eB.NOTE;return(0,t.jsxs)(eF,{bg:o.bg,border:o.border,children:[(0,t.jsxs)(eL,{color:o.color,children:[(0,t.jsx)(s.In,{name:o.icon,size:15,strokeWidth:2}),o.label]}),(0,t.jsx)(eH,{children:a})]})}let eE=l().nav`
  width: 220px;
  min-width: 220px;
  padding: ${i.w4.spacing.xxl} 0 ${i.w4.spacing.xxl} ${i.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,eP=l().div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  margin-bottom: ${i.w4.spacing.md};
`,eV=l().ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,eO=l().a`
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
`;function eI({headings:e,activeId:a}){return e.length<2?null:(0,t.jsxs)(eE,{children:[(0,t.jsx)(eP,{children:"On this page"}),(0,t.jsx)(eV,{children:e.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(eO,{href:`#${e.id}`,active:a===e.id,level:e.level,onClick:a=>{a.preventDefault(),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},children:e.text})},e.id))})]})}function eN(){let e=new Map;return a=>{let o=a.toLowerCase().replace(/[*_`[\]()#]/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),t=(e.get(o)??0)+1;return e.set(o,t),1===t?o:`${o}-${t}`}}function eD(){return e=>{!function e(a){if("blockquote"===a.type){let e=a.children?.[0];if(e?.type==="paragraph"){let o=e.children?.[0];if(o?.type==="text"){let t=o.value?.match(/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i);t&&(o.value=o.value.slice(t[0].length),o.value.trim()||1!==e.children.length||a.children.shift(),a.data=a.data??{},a.data.hName="div",a.data.hProperties={"data-callout":t[1].toUpperCase()})}}}a.children?.forEach(e)}(e)}}let eG=l().div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${i.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,eY=l().div`flex: 1; min-width: 0;`,eW=l().article`
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
`,eK=l().div`
  display: flex;
  gap: ${i.w4.spacing.lg};
  padding: ${i.w4.spacing.xxl} 0;
  border-top: 1px solid ${i.w4.colors.border};
  margin-top: ${i.w4.spacing.xxl};
`,eq=l().button`
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
`,e_=l().div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${i.w4.colors.sidebarTextMuted}; font-family: ${i.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,eU=l().div`
  font-size: ${i.w4.typography.fontSizeBase}; color: ${i.w4.colors.accent};
  font-family: ${i.w4.typography.fontFamily}; font-weight: 500;
`,eJ=l().div`
  color: ${i.w4.colors.mainTextMuted};
  padding: ${i.w4.spacing.xxl} ${i.w4.spacing.xl};
  font-family: ${i.w4.typography.fontFamily};
`;function eZ(e,a){return function({children:o,...i}){let n=`h${e}`,l=function e(a){return r.Children.toArray(a).map(a=>"string"==typeof a?a:"number"==typeof a?String(a):(0,r.isValidElement)(a)?e(a.props.children??""):"").join("")}(o),d=a(l);return(0,t.jsxs)(n,{id:d,...i,children:[o,(0,t.jsx)("a",{className:"heading-anchor",href:`#${d}`,"aria-label":`Link to "${l}"`,children:(0,t.jsx)(s.In,{name:"link",size:14})})]})}}function eX({file:e,prevEntry:a,nextEntry:i,onNavigate:n}){let[l,d]=(0,r.useState)(null),[c,p]=(0,r.useState)(null),m=(0,r.useRef)(null);if((0,r.useEffect)(()=>{d(null),fetch(`${o.p}content/${e}`).then(e=>{if(!e.ok)throw Error(`${e.status} ${e.statusText}`);return e.text()}).then(d).catch(a=>d(`> **Error loading \`${e}\`:** ${a.message}`))},[e]),(0,r.useEffect)(()=>{if(!l||!m.current)return;let e=m.current,a=Array.from(e.querySelectorAll("h2[id], h3[id]"));if(!a.length)return;let o=e.parentElement;for(;o;){let{overflowY:e}=getComputedStyle(o);if(("auto"===e||"scroll"===e)&&o.scrollHeight>o.clientHeight)break;o=o.parentElement}let t=o??window,r=()=>{let e=a[0].id;for(let o of a)if(o.getBoundingClientRect().top-120<=0)e=o.id;else break;p(e)};return r(),t.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r),()=>{t.removeEventListener("scroll",r),window.removeEventListener("resize",r)}},[l]),null===l)return(0,t.jsx)(eJ,{children:"Loading…"});let g=function(e){let a,o=[],t=/^(#{2,3})\s+(.+)$/gm,r=eN();for(;null!==(a=t.exec(e));){let e=a[1].length,t=a[2].trim().replace(/\*\*(.+?)\*\*/g,"$1").replace(/\*(.+?)\*/g,"$1").replace(/`(.+?)`/g,"$1").replace(/\[(.+?)\]\(.+?\)/g,"$1");o.push({level:e,text:t,id:r(t)})}return o}(l),h=a||i,f=eN();return(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eY,{children:[(0,t.jsx)(eW,{ref:m,children:(0,t.jsx)(z.oz,{remarkPlugins:[M.A,T.A,eD],rehypePlugins:[k.A,j.A],components:{div({node:e,children:a,...o}){let r=o["data-callout"];return r?(0,t.jsx)(eR,{type:r,children:a}):(0,t.jsx)("div",{...o,children:a})},h1:eZ(1,f),h2:eZ(2,f),h3:eZ(3,f),h4:eZ(4,f),pre:({children:e})=>(0,t.jsx)(t.Fragment,{children:e}),code({className:e,children:a}){let o=/language-(\w+)/.exec(e??"")?.[1],r=String(a).replace(/\n$/,"");return"mermaid"===o?(0,t.jsx)(V,{code:r}):"chart"===o?(0,t.jsx)(Z,{code:r}):"clock"===o?(0,t.jsx)(el,{code:r}):"vocabulary"===o?(0,t.jsx)(e$,{code:r}):o||r.includes("\n")?(0,t.jsx)(eC,{lang:o,code:r}):(0,t.jsx)("code",{className:e,children:a})}},children:l})}),h&&(0,t.jsxs)(eK,{children:[a?(0,t.jsxs)(eq,{align:"left",onClick:()=>n?.(a),children:[(0,t.jsxs)(e_,{children:[(0,t.jsx)(s.In,{name:"chevron-left",size:13})," Previous"]}),(0,t.jsx)(eU,{children:a.name})]}):(0,t.jsx)("div",{style:{flex:1}}),i?(0,t.jsxs)(eq,{align:"right",onClick:()=>n?.(i),children:[(0,t.jsxs)(e_,{children:["Next ",(0,t.jsx)(s.In,{name:"chevron-right",size:13})]}),(0,t.jsx)(eU,{children:i.name})]}):(0,t.jsx)("div",{style:{flex:1}})]})]}),(0,t.jsx)(eI,{headings:g,activeId:c})]})}let eQ=(0,A.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,e1=(0,A.keyframes)`
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
`,e0=l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  /* Layout's TopBar uses z-index:1000; sit above it so the drawer fully
     covers the chrome and the drawer header / first row aren't clipped. */
  z-index: 1100;
  animation: ${eQ} 0.18s ease both;

  @media (min-width: ${i.w4.breakpoints.md}) {
    display: none;
  }
`,e2=l().aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: min(86vw, 320px);
  background: ${i.w4.colors.sidebarBg};
  border-right: 1px solid ${i.w4.colors.sidebarBorder};
  z-index: 1101;
  /* Respect notches / status bar on iOS so the drawer header sits below
     the safe area inset rather than under the camera notch. */
  padding-top: env(safe-area-inset-top, 0px);
  display: flex;
  flex-direction: column;
  animation: ${e1} 0.22s cubic-bezier(0.4, 0, 0.2, 1) both;

  @media (min-width: ${i.w4.breakpoints.md}) {
    display: none;
  }
`,e4=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,e5=l().span`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${i.w4.colors.sidebarTextMuted};
`,e3=l().div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
`;function e6({open:e,title:a,onClose:o,children:i}){return((0,r.useEffect)(()=>{if(!e)return;let a=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[e,o]),e)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e0,{onClick:o}),(0,t.jsxs)(e2,{role:"dialog","aria-modal":"true","aria-label":a,children:[(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{children:a}),(0,t.jsx)(s.K0,{onClick:o,title:"Close menu","aria-label":"Close menu",children:(0,t.jsx)(s.In,{name:"close",size:14})})]}),(0,t.jsx)(e3,{children:i})]})]}):null}function e8(e,a){for(let o of e){if(o.id===a)return o;if(o.children){let e=e8(o.children,a);if(e)return e}}}function e7(e){return e.flatMap(e=>e.children?e7(e.children):e.file?[e]:[])}let e9=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${i.w4.typography.fontFamily};
  background: ${i.w4.colors.mainBg};
`,ae=l().div`
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
`,aa=l().div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${i.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${i.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,ao=l().div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,at=l().h1`
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
`,ar=l().p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,ai=l().span`
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
`,an={en:"Pick a topic to begin",pt:"Escolhe um t\xf3pico para come\xe7ar"},al={en:"Menu",pt:"Menu"},as=l().span`
  display: inline-flex;

  @media (min-width: ${i.w4.breakpoints.md}) {
    display: none;
  }
`;function ad({title:e,sub:a,lang:o}){return(0,t.jsxs)(e9,{children:[(0,t.jsx)(aa,{}),(0,t.jsx)(ae,{size:500,x:10,y:-10,hue:210,dur:7}),(0,t.jsx)(ae,{size:400,x:60,y:50,hue:270,dur:9}),(0,t.jsx)(ae,{size:300,x:30,y:70,hue:190,dur:6}),(0,t.jsxs)(ao,{children:[(0,t.jsx)(at,{children:e}),(0,t.jsx)(ar,{children:a}),(0,t.jsxs)(ai,{children:[(0,t.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("polyline",{points:"15 18 9 12 15 6"})}),an[o]??an.en]})]})]})}function ac(e,a,o){return"string"==typeof e?e:e[a]??e[o]??Object.values(e)[0]??""}function ap({navigation:e,languages:a,defaultLang:o,locale:i,hashPrefix:n,topBarRight:l,welcomeTitle:d="Blog",welcomeSub:c="Notes, guides, and references — pick a topic from the sidebar to get started."}){let p=a?Object.keys(a):[];p.length;let[m,g]=(0,r.useState)(()=>o??p[0]??"");(0,r.useEffect)(()=>{i&&p.includes(i)&&i!==m&&g(i)},[i]);let h=(0,r.useMemo)(()=>a&&m?a[m].navigation:e??{entries:[]},[a,e,m]);(0,r.useMemo)(()=>e7(h.entries),[h]);let f=(0,r.useCallback)(e=>{let a=e.match(RegExp(`^#\\/${n}\\/(.+)$`));if(a)return e8(h.entries,a[1])},[h,n]),[u,x]=(0,r.useState)(()=>f(window.location.hash)??null),[y,b]=(0,r.useState)(!1);(0,r.useEffect)(()=>{u&&x(e8(h.entries,u.id)??null)},[m,h]),(0,r.useEffect)(()=>{let e=()=>{let e=f(window.location.hash);e&&x(e)};return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[f]);let w=(0,r.useCallback)(e=>{e.file&&(x(e),b(!1),window.location.hash=`#/${n}/${e.id}`)},[n]),v=o??p[0]??"",z=al[m]??al[v]??"Menu",M=(0,t.jsx)(as,{children:(0,t.jsx)(s.K0,{onClick:()=>b(!0),title:z,"aria-label":z,children:(0,t.jsx)(s.In,{name:"menu",size:16})})}),k=(0,r.useMemo)(()=>e7(h.entries),[h]),j=k.findIndex(e=>e.id===u?.id),T=j>0?k[j-1]:null,A=j<k.length-1?k[j+1]:null,S=u?.label??u?.name??n,C=ac(d,m,o??p[0]??""),B=ac(c,m,o??p[0]??"");return(0,t.jsxs)(s.PE,{title:S,activeId:u?.id??null,topBarRight:(0,t.jsxs)(t.Fragment,{children:[M,l]}),sidebar:(0,t.jsx)($,{config:h,activeId:u?.id??null,onSelect:w,hashPrefix:n}),children:[u?.file?(0,t.jsx)(eX,{file:u.file,prevEntry:T,nextEntry:A,onNavigate:w}):(0,t.jsx)(ad,{title:C,sub:B,lang:m}),(0,t.jsx)(e6,{open:y,title:z,onClose:()=>b(!1),children:(0,t.jsx)($,{config:h,activeId:u?.id??null,onSelect:w,hashPrefix:n})})]})}l().div`
  display: flex;
  gap: 4px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: 2px;
`,l().button`
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
`},8170(e,a,o){o.d(a,{Ym:()=>d});var t=o(7991),r=o(6063);let i="atlantis:locale",n="shell:locale";function l(e){return"en"===e||"pt"===e}function s(){try{let e=localStorage.getItem(i);if(l(e))return e}catch{}return"en"}function d(){let[e,a]=(0,t.useState)(s),o=(0,t.useCallback)(e=>{a(e);try{localStorage.setItem(i,e)}catch{}(0,r.Is)(n,e).catch(()=>{}),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,t.useEffect)(()=>{let e=e=>{a(e.detail)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,t.useEffect)(()=>{(0,r.PL)(n).then(o=>{if(l(o)&&o!==e){try{localStorage.setItem(i,o)}catch{}a(o)}}).catch(()=>{})},[]),[e,o]}(0,r.PL)(n).then(e=>{if(l(e))try{localStorage.setItem(i,e)}catch{}}).catch(()=>{}),o(5723);var c=o(6859),p=o.n(c);p().div`
  display: flex;
  gap: 4px;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: 2px;
`,p().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${r.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${r.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?r.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":r.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":r.w4.colors.mainText};
  }
`},6063(e,a,o){o.d(a,{w4:()=>i,Is:()=>s.putSetting,PL:()=>s.getSetting});let t={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},r="--at-",i={colors:function(){let e={};for(let a of Object.keys(t))e[a]=`var(${r}${a})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${r}suiteLab)`,vida:`var(${r}suiteVida)`,learn:`var(${r}suiteLearn)`,games:`var(${r}suiteGames)`,ent:`var(${r}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",xl:"0 40px 120px var(--at-shadowStrong), 0 8px 24px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:`
    outline: 2px solid var(--at-accent);
    outline-offset: 2px;
  `};o(5723),o(7991),o(2799);var n=o(6859),l=o.n(n);l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${i.colors.border};
  border-radius: ${i.borderRadius.md};
  cursor: pointer;
  color: ${i.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${i.colors.sidebarHover};
    color: ${i.colors.accent};
    border-color: ${i.colors.accent};
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
`,[{id:"europe",name:"Europe",icon:"\uD83C\uDF0D",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"lourinha",name:"Lourinh\xe3",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"\uD83C\uDDEC\uD83C\uDDE7",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"\uD83C\uDDEB\uD83C\uDDF7",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"\uD83C\uDDE9\uD83C\uDDEA",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"\uD83C\uDDEA\uD83C\uDDF8",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"\uD83C\uDDEE\uD83C\uDDF9",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"\uD83C\uDDF3\uD83C\uDDF1",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"\uD83C\uDDEC\uD83C\uDDF7",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"\uD83C\uDDE7\uD83C\uDDEA",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"\uD83C\uDDE6\uD83C\uDDF9",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"\uD83C\uDDF5\uD83C\uDDF1",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"\uD83C\uDDF8\uD83C\uDDEA",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"\uD83C\uDDF3\uD83C\uDDF4",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"\uD83C\uDDE9\uD83C\uDDF0",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"\uD83C\uDDEB\uD83C\uDDEE",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"\uD83C\uDDEE\uD83C\uDDF8",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"\uD83C\uDDEE\uD83C\uDDEA",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"\uD83C\uDDE8\uD83C\uDDED",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"\uD83C\uDDFA\uD83C\uDDE6",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"\uD83C\uDDF7\uD83C\uDDFA",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"\uD83C\uDDF7\uD83C\uDDF4",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"\uD83C\uDDED\uD83C\uDDFA",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"\uD83C\uDDE8\uD83C\uDDFF",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"\uD83C\uDDF8\uD83C\uDDF0",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"\uD83C\uDDF8\uD83C\uDDEE",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"\uD83C\uDDED\uD83C\uDDF7",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"\uD83C\uDDF7\uD83C\uDDF8",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"\uD83C\uDDE7\uD83C\uDDE6",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"\uD83C\uDDE7\uD83C\uDDEC",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"\uD83C\uDDEA\uD83C\uDDEA",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"\uD83C\uDDF1\uD83C\uDDFB",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"\uD83C\uDDF1\uD83C\uDDF9",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"\uD83C\uDDE7\uD83C\uDDFE",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"\uD83C\uDDF2\uD83C\uDDE9",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"\uD83C\uDDE6\uD83C\uDDF1",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"\uD83C\uDDF2\uD83C\uDDF0",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"\uD83C\uDDF2\uD83C\uDDEA",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"\uD83C\uDDE8\uD83C\uDDFE",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"\uD83C\uDDF2\uD83C\uDDF9",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"\uD83C\uDDF1\uD83C\uDDFA",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"\uD83C\uDDE6\uD83C\uDDE9",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"\uD83C\uDDF2\uD83C\uDDE8",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"\uD83C\uDDF8\uD83C\uDDF2",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"\uD83C\uDDF1\uD83C\uDDEE",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"\uD83C\uDDFB\uD83C\uDDE6",zoom:15}]},{id:"americas",name:"Americas",icon:"\uD83C\uDF0E",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"\uD83C\uDDE8\uD83C\uDDE6",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"\uD83C\uDDF2\uD83C\uDDFD",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"\uD83C\uDDE7\uD83C\uDDFF",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"\uD83C\uDDEC\uD83C\uDDF9",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"\uD83C\uDDF8\uD83C\uDDFB",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"\uD83C\uDDED\uD83C\uDDF3",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"\uD83C\uDDF3\uD83C\uDDEE",zoom:12},{id:"san-jose-cr",name:"San Jos\xe9",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"\uD83C\uDDE8\uD83C\uDDF7",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"\uD83C\uDDF5\uD83C\uDDE6",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"\uD83C\uDDE8\uD83C\uDDFA",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"\uD83C\uDDE7\uD83C\uDDF8",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"\uD83C\uDDEF\uD83C\uDDF2",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"\uD83C\uDDED\uD83C\uDDF9",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"\uD83C\uDDE9\uD83C\uDDF4",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"\uD83C\uDDF0\uD83C\uDDF3",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"\uD83C\uDDF1\uD83C\uDDE8",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"\uD83C\uDDFB\uD83C\uDDE8",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"\uD83C\uDDE7\uD83C\uDDE7",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"\uD83C\uDDE6\uD83C\uDDEC",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"\uD83C\uDDE9\uD83C\uDDF2",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"\uD83C\uDDEC\uD83C\uDDE9",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"\uD83C\uDDF9\uD83C\uDDF9",zoom:12},{id:"bogota",name:"Bogot\xe1",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"\uD83C\uDDE8\uD83C\uDDF4",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"\uD83C\uDDFB\uD83C\uDDEA",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"\uD83C\uDDEC\uD83C\uDDFE",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"\uD83C\uDDF8\uD83C\uDDF7",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"\uD83C\uDDEA\uD83C\uDDE8",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"\uD83C\uDDF5\uD83C\uDDEA",zoom:12},{id:"sao-paulo",name:"S\xe3o Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"\uD83C\uDDE7\uD83C\uDDF7",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"\uD83C\uDDE7\uD83C\uDDF4",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"\uD83C\uDDE8\uD83C\uDDF1",zoom:12},{id:"asuncion",name:"Asunci\xf3n",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"\uD83C\uDDF5\uD83C\uDDFE",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"\uD83C\uDDE6\uD83C\uDDF7",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"\uD83C\uDDFA\uD83C\uDDFE",zoom:12}]},{id:"africa",name:"Africa",icon:"\uD83C\uDF0D",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"\uD83C\uDDF2\uD83C\uDDE6",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"\uD83C\uDDE9\uD83C\uDDFF",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"\uD83C\uDDF9\uD83C\uDDF3",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"\uD83C\uDDF1\uD83C\uDDFE",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"\uD83C\uDDEA\uD83C\uDDEC",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"\uD83C\uDDF8\uD83C\uDDE9",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"\uD83C\uDDF8\uD83C\uDDF3",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"\uD83C\uDDEC\uD83C\uDDF2",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"\uD83C\uDDEC\uD83C\uDDFC",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"\uD83C\uDDEC\uD83C\uDDF3",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"\uD83C\uDDF8\uD83C\uDDF1",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"\uD83C\uDDF1\uD83C\uDDF7",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"\uD83C\uDDE8\uD83C\uDDEE",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"\uD83C\uDDEC\uD83C\uDDED",zoom:12},{id:"lome",name:"Lom\xe9",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"\uD83C\uDDF9\uD83C\uDDEC",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"\uD83C\uDDE7\uD83C\uDDEF",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"\uD83C\uDDF3\uD83C\uDDEC",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"\uD83C\uDDF3\uD83C\uDDEA",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"\uD83C\uDDF2\uD83C\uDDF1",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"\uD83C\uDDE7\uD83C\uDDEB",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"\uD83C\uDDF2\uD83C\uDDF7",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"\uD83C\uDDE8\uD83C\uDDFB",zoom:13},{id:"yaounde",name:"Yaound\xe9",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"\uD83C\uDDE8\uD83C\uDDF2",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"\uD83C\uDDF9\uD83C\uDDE9",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"\uD83C\uDDE8\uD83C\uDDEB",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"\uD83C\uDDEC\uD83C\uDDF6",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"\uD83C\uDDEC\uD83C\uDDE6",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"\uD83C\uDDE8\uD83C\uDDEC",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"\uD83C\uDDE8\uD83C\uDDE9",zoom:12},{id:"sao-tome",name:"S\xe3o Tom\xe9",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"\uD83C\uDDF8\uD83C\uDDF9",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"\uD83C\uDDF8\uD83C\uDDF8",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"\uD83C\uDDEA\uD83C\uDDF9",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"\uD83C\uDDEA\uD83C\uDDF7",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"\uD83C\uDDE9\uD83C\uDDEF",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"\uD83C\uDDF8\uD83C\uDDF4",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"\uD83C\uDDF0\uD83C\uDDEA",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"\uD83C\uDDFA\uD83C\uDDEC",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"\uD83C\uDDF7\uD83C\uDDFC",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"\uD83C\uDDE7\uD83C\uDDEE",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"\uD83C\uDDF9\uD83C\uDDFF",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"\uD83C\uDDF2\uD83C\uDDEC",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"\uD83C\uDDF0\uD83C\uDDF2",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"\uD83C\uDDF2\uD83C\uDDFA",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"\uD83C\uDDF8\uD83C\uDDE8",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"\uD83C\uDDE6\uD83C\uDDF4",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"\uD83C\uDDFF\uD83C\uDDF2",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"\uD83C\uDDF2\uD83C\uDDFC",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"\uD83C\uDDF2\uD83C\uDDFF",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"\uD83C\uDDFF\uD83C\uDDFC",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"\uD83C\uDDE7\uD83C\uDDFC",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"\uD83C\uDDF3\uD83C\uDDE6",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"\uD83C\uDDFF\uD83C\uDDE6",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"\uD83C\uDDF8\uD83C\uDDFF",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"\uD83C\uDDF1\uD83C\uDDF8",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"\uD83D\uDD4C",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"\uD83C\uDDF8\uD83C\uDDE6",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"\uD83C\uDDE6\uD83C\uDDEA",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"\uD83C\uDDF6\uD83C\uDDE6",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"\uD83C\uDDE7\uD83C\uDDED",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"\uD83C\uDDF0\uD83C\uDDFC",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"\uD83C\uDDF4\uD83C\uDDF2",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"\uD83C\uDDFE\uD83C\uDDEA",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"\uD83C\uDDEE\uD83C\uDDF6",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"\uD83C\uDDEE\uD83C\uDDF7",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"\uD83C\uDDF9\uD83C\uDDF7",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"\uD83C\uDDF1\uD83C\uDDE7",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"\uD83C\uDDF8\uD83C\uDDFE",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"\uD83C\uDDEF\uD83C\uDDF4",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"\uD83C\uDDEE\uD83C\uDDF1",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"\uD83C\uDDF5\uD83C\uDDF8",zoom:13}]},{id:"asia",name:"Asia",icon:"\uD83C\uDF0F",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"\uD83C\uDDE6\uD83C\uDDEB",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"\uD83C\uDDF0\uD83C\uDDFF",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"\uD83C\uDDF0\uD83C\uDDEC",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"\uD83C\uDDFA\uD83C\uDDFF",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"\uD83C\uDDF9\uD83C\uDDEF",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"\uD83C\uDDF9\uD83C\uDDF2",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"\uD83C\uDDE6\uD83C\uDDF2",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"\uD83C\uDDE6\uD83C\uDDFF",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"\uD83C\uDDEC\uD83C\uDDEA",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"\uD83C\uDDF5\uD83C\uDDF0",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"\uD83C\uDDF3\uD83C\uDDF5",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"\uD83C\uDDE7\uD83C\uDDE9",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"\uD83C\uDDF1\uD83C\uDDF0",zoom:12},{id:"male",name:"Mal\xe9",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"\uD83C\uDDF2\uD83C\uDDFB",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"\uD83C\uDDE8\uD83C\uDDF3",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"\uD83C\uDDEF\uD83C\uDDF5",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"\uD83C\uDDF0\uD83C\uDDF7",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"\uD83C\uDDF0\uD83C\uDDF5",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"\uD83C\uDDF2\uD83C\uDDF3",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"\uD83C\uDDF9\uD83C\uDDED",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"\uD83C\uDDFB\uD83C\uDDF3",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"\uD83C\uDDF0\uD83C\uDDED",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"\uD83C\uDDF1\uD83C\uDDE6",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"\uD83C\uDDF2\uD83C\uDDF2",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"\uD83C\uDDF2\uD83C\uDDFE",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"\uD83C\uDDF8\uD83C\uDDEC",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"\uD83C\uDDEE\uD83C\uDDE9",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"\uD83C\uDDF5\uD83C\uDDED",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"\uD83C\uDDE7\uD83C\uDDF3",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"\uD83C\uDDF9\uD83C\uDDF1",zoom:13}]},{id:"oceania",name:"Oceania",icon:"\uD83C\uDF0A",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"\uD83C\uDDE6\uD83C\uDDFA",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"\uD83C\uDDF3\uD83C\uDDFF",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"\uD83C\uDDF5\uD83C\uDDEC",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"\uD83C\uDDEB\uD83C\uDDEF",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"\uD83C\uDDF8\uD83C\uDDE7",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"\uD83C\uDDFB\uD83C\uDDFA",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"\uD83C\uDDF9\uD83C\uDDF4",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"\uD83C\uDDFC\uD83C\uDDF8",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"\uD83C\uDDF9\uD83C\uDDFB",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"\uD83C\uDDF0\uD83C\uDDEE",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"\uD83C\uDDF2\uD83C\uDDED",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"\uD83C\uDDEB\uD83C\uDDF2",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"\uD83C\uDDF5\uD83C\uDDFC",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"\uD83C\uDDF3\uD83C\uDDF7",zoom:14}]}].flatMap(e=>e.places);var s=o(5473);l().div`
  position: relative;
`,l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${i.colors.border};
  border-radius: ${i.borderRadius.md};
  color: ${i.colors.mainText};
  font-size: ${i.typography.fontSizeBase};
  font-family: ${i.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${i.colors.sidebarHover};
    border-color: ${i.colors.accent};
  }
`,l().div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${i.colors.sidebarBg};
  border: 1px solid ${i.colors.sidebarBorder};
  border-radius: ${i.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,l().div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${i.colors.sidebarTextMuted};
  font-family: ${i.typography.fontFamily};
  border-bottom: 1px solid ${i.colors.sidebarBorder};
  flex-shrink: 0;
`,l().div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,l().div`
  padding: 16px 14px;
  font-size: ${i.typography.fontSizeBase};
  color: ${i.colors.sidebarTextMuted};
  font-family: ${i.typography.fontFamily};
  font-style: italic;
`,l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${i.colors.sidebarHover};
  }
`,l().button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,l().div`
  font-size: ${i.typography.fontSizeBase};
  color: ${i.colors.mainText};
  font-family: ${i.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,l().div`
  font-size: 11px;
  color: ${i.colors.sidebarTextMuted};
  font-family: ${i.typography.fontFamily};
  margin-top: 1px;
`,l().button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${i.borderRadius.sm};
  cursor: pointer;
  color: ${i.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${i.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`},2787(e,a,o){o.d(a,{FlyoutPanel:()=>b});var t=o(5723),r=o(7991),i=o.n(r),n=o(6859),l=o.n(n),s=o(2799),d=o(6063),c=o(7993),p=o(4971);let m=(0,s.keyframes)`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=l().div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.accentMuted};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${d.w4.colors.borderSubtle},
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
    background: ${d.w4.colors.accent};
    opacity: 0.4;
  }
`,h=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${d.w4.colors.accent};
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
  font-family: ${d.w4.typography.fontFamily};
`,f=l().button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?d.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.sidebarText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${d.w4.colors.accentMuted};
    color: ${d.w4.colors.mainText};
  }
`,u=({size:e=14,strokeWidth:a=1.75})=>(0,t.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,t.jsx)("polyline",{points:"14 2 14 8 20 8"})]});function x({iconKey:e}){let a=e?p.X[e]:void 0;return a?(0,t.jsx)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,dangerouslySetInnerHTML:{__html:a}}):(0,t.jsx)(u,{})}function y({entries:e,activeId:a,onSelect:o}){return(0,t.jsx)(t.Fragment,{children:e.map(e=>e.children?(0,t.jsx)(i().Fragment,{children:(0,t.jsx)(y,{entries:e.children,activeId:a,onSelect:o})},e.id):(0,t.jsxs)(f,{active:a===e.id,onClick:()=>o(e),children:[(0,t.jsx)(x,{iconKey:e.icon}),e.name]},e.id))})}function b({activeId:e}){let{flyout:a,scheduleFlyoutClose:o,cancelFlyoutClose:r}=(0,c.c)();if(!a)return null;let i=a.entry.icon?p.X[a.entry.icon]:void 0;return(0,t.jsxs)(g,{anchorY:a.anchorY,onMouseEnter:r,onMouseLeave:o,children:[(0,t.jsxs)(h,{children:[i?(0,t.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,dangerouslySetInnerHTML:{__html:i}}):(0,t.jsx)(u,{size:13,strokeWidth:2}),a.entry.name]}),(0,t.jsx)(y,{entries:a.entry.children??[],activeId:e,onSelect:e=>{a.onSelect(e),o()}})]})}},7993(e,a,o){o.d(a,{I:()=>r,c:()=>i});var t=o(7991);let r=(0,t.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,t.useContext)(r)},4971(e,a,o){o.d(a,{X:()=>t});let t={activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"a-large-small":'<path d="M18 14v7M22 14l-4-7-4 7M2 14h7M2 21V7l5-4 5 4v14"/>',apple:'<path d="M12 20.9A9 9 0 1 1 19 6.5a4.9 4.9 0 0 0 2 5.4 8.9 8.9 0 0 1-9 9z"/><path d="M12 6a2 2 0 0 0 2-2 2 2 0 0 0-2-2"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"bar-chart-2":'<path d="M3 3v18h18"/><path d="M5 18V10M10 18V4M15 18v-7"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"circle-dot":'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2 6.3-6.4 2 2-6.3z"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',"file-text":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5 2.2 5 2.2a5 5 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.5 9.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.4V22"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',hand:'<path d="M18 11V5a2 2 0 1 0-4 0v3a2 2 0 1 0-4 0V5a2 2 0 1 0-4 0v8l-2-3a2 2 0 1 0-3 2l4 7a6 6 0 0 0 6 4h2a6 6 0 0 0 6-6v-3a2 2 0 1 0-4 0z"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',landmark:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 11h20z"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',"layout-grid":'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',map:'<path d="M9 3 3 7v14l6-4 6 4 6-4V3l-6 4z"/><path d="M9 3v14M15 7v14"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"message-circle":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',minus:'<path d="M5 12h14"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',"pen-tool":'<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="M18 13 16.5 5.5 2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2 9.6 9.6"/><circle cx="11" cy="11" r="2"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',plus:'<path d="M12 5v14M5 12h14"/>',puzzle:'<path d="M19.4 14.4a1 1 0 0 0 .6-.9V8a1 1 0 0 0-1-1h-5.5a1 1 0 0 1-.9-.6 2 2 0 1 0-2 2 2.5 2.5 0 0 1 0 3 2 2 0 1 0 2 2 1 1 0 0 1 .9-.6h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 .6-.9 2 2 0 1 0-1.2 0z"/>',ruler:'<path d="M5 3l16 16-3 3L2 6zM8 6l3 3M11 9l3 3M14 12l3 3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>',slash:'<line x1="22" y1="2" x2="2" y2="22"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',triangle:'<path d="M3 20h18L12 4z"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',truck:'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',"volume-2":'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',watch:'<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5M8.2 5.5l.8-2.5h6l.8 2.5M15.8 18.5l-.8 2.5H9l-.8-2.5"/>',waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',bot:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M8 15h.01M16 15h.01M12 17h.01"/>'}},8550(e,a,o){o.d(a,{K0:()=>w,CD:()=>eu,PE:()=>et,cL:()=>C.c,In:()=>z});var t=o(5723),r=o(7991),i=o.n(r),n=o(6859),l=o.n(n),s=o(6063);let d={ghost:"transparent",accent:"transparent",primary:s.w4.colors.accent,success:"#238636",danger:"#da3633"},c={ghost:s.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:s.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},p={ghost:s.w4.colors.border,accent:s.w4.colors.accent,primary:s.w4.colors.accent,success:"#238636",danger:"#da3633"},m={ghost:s.w4.colors.mainTextMuted,accent:s.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},g={ghost:s.w4.colors.mainText,accent:s.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},h={sm:"28px",md:"30px"},f={sm:"0 10px",md:"0 12px"},u={sm:"12px",md:"12px"};l().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>h[e]};
  padding: ${({size:e})=>f[e]};
  background: ${({variant:e})=>d[e]};
  border: 1px solid ${({variant:e})=>p[e]};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${({variant:e})=>m[e]};
  font-size: ${({size:e})=>u[e]};
  font-family: ${s.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>c[e]};
    color: ${({variant:e})=>g[e]};
    border-color: ${({variant:e})=>"ghost"===e?s.w4.colors.accent:p[e]};
  }

  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;let x={default:s.w4.colors.accent,danger:"#f85149"},y={default:s.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"},b=l().button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: ${({active:e})=>e?`${s.w4.colors.accent}22`:"transparent"};
  border: 1px solid
    ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.border};
  border-radius: ${({shape:e})=>"circle"===e?"999px":s.w4.borderRadius.sm};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};

  /**
   * Expand the tap area to ≥44×44px on touch devices without changing the
   * visual size of the button. The pseudo-element extends 7px on each side
   * ((44 - 30) / 2 = 7). Pointer-events fall through to the button itself.
   * Only applied on coarse-pointer (touch) devices so desktop hover still
   * works on the visual 30px area.
   */
  @media (pointer: coarse) {
    &::before {
      content: '';
      position: absolute;
      inset: -7px;
    }
  }

  &:hover:not(:disabled) {
    color: ${({tone:e})=>x[e]};
    background: ${({tone:e})=>y[e]};
    border-color: ${({tone:e})=>x[e]};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,w=i().forwardRef(function({active:e=!1,shape:a="square",tone:o="default",children:r,...i},n){return(0,t.jsx)(b,{ref:n,active:e,shape:a,tone:o,...i,children:r})});l().div`
  position: relative;
  display: inline-flex;
`,l().div`
  position: absolute;
  top: calc(100% + 6px);
  ${({align:e})=>"right"===e?"right: 0;":"left: 0;"}
  min-width: 180px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  background: ${s.w4.colors.sidebarBg};
  border: 1px solid ${s.w4.colors.sidebarBorder};
  border-radius: ${s.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: none;
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  color: ${s.w4.colors.mainText};
  font-size: ${s.w4.typography.fontSizeSm};
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${s.w4.colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: -2px;
  }
`,l().div`
  height: 1px;
  margin: 4px 0;
  background: ${s.w4.colors.sidebarBorder};
`,l().div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
`,l().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
`,l().span`
  width: 1px;
  height: 20px;
  background: ${s.w4.colors.border};
  flex-shrink: 0;
`,l().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,l()("button",{shouldForwardProp:e=>"active"!==e&&"highlight"!==e})`
  padding: 6px 14px;
  height: 28px;
  border-radius: 999px;
  background: ${({active:e})=>e?s.w4.colors.accentMuted:"transparent"};
  border: 1px solid
    ${({active:e,highlight:a})=>e||a?s.w4.colors.accent:"transparent"};
  color: ${({active:e,highlight:a})=>e||a?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: ${s.w4.transitions.fast};

  &:hover:not(:disabled) { color: ${s.w4.colors.mainText}; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${s.w4.focusRing} }
`,o(2727);var v=o(2799);let $={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',"cloud-rain":'<path d="M16 14a5 5 0 1 0-9.8 2H6M8 19v2M12 17v4M16 19v2"/>',snowflake:'<path d="M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1M2 12h20M8 6l4 4 4-4M8 18l4-4 4 4"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"alert-triangle":'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',"check-circle":'<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>',"x-circle":'<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',"rotate-ccw":'<path d="M2 12a10 10 0 1 0 5-8.7L2 7M2 2v5h5"/>',"rotate-cw":'<path d="M22 12a10 10 0 1 1-5-8.7L22 7M22 2v5h-5"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"alert-circle":'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',"alert-octagon":'<path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"/><path d="M12 8v4M12 16h.01"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',columns:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',"eye-off":'<path d="M17.9 17.9A10.8 10.8 0 0 1 12 20c-7 0-11-8-11-8a19.6 19.6 0 0 1 5.1-6M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a19.6 19.6 0 0 1-2.2 3.2M6.6 6.6l10.8 10.8M14.1 14.1a3 3 0 1 1-4.2-4.2"/>',"file-plus":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M12 12v6M9 15h6"/>',gauge:'<path d="M12 14a2 2 0 1 0-2-2M12 2a10 10 0 1 0 10 10M12 14 7.5 16.5"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',"git-fork":'<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/>',"grip-vertical":'<circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',"image-plus":'<path d="M21 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21M19 2v6M22 5h-6"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',loader:'<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',"panel-left":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',"panel-left-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M16 15l-3-3 3-3"/>',"panel-left-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M14 9l3 3-3 3"/>',"panel-right-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M8 9l3 3-3 3"/>',"panel-right-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M10 15l-3-3 3-3"/>',pencil:'<path d="m12 20 9-9-4-4-9 9v4zM15 5l4 4"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M4.9 19.1a10 10 0 0 1 0-14.1M7.8 16.2a6 6 0 0 1 0-8.5M19.1 4.9a10 10 0 0 1 0 14.1M16.2 7.8a6 6 0 0 1 0 8.5"/>',"scatter-chart":'<circle cx="7.5" cy="7.5" r="0.8" fill="currentColor"/><circle cx="18" cy="5" r="0.8" fill="currentColor"/><circle cx="11" cy="11" r="0.8" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.8" fill="currentColor"/><circle cx="17" cy="14" r="0.8" fill="currentColor"/><path d="M3 3v18h18"/>',shield:'<path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"/>',"shield-off":'<path d="M19.7 14a7.7 7.7 0 0 0 .3-2V4l-8-2-3.4.9M4.7 4.7 4 5v7c0 6 8 10 8 10a13 13 0 0 0 5.2-3.5M2 2l20 20"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',"trending-down":'<path d="M22 17l-9.5-9.5-5 5L2 7"/><path d="M16 17h6v-6"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',"user-cog":'<circle cx="10" cy="8" r="4"/><path d="M10.2 14H8a4 4 0 0 0-4 4v2"/><circle cx="18" cy="15" r="3"/><path d="M18 10v1M18 19v1M22 12l-.8.5M14.8 17.5 14 18M22 18l-.8-.5M14.8 12.5 14 12"/>',volume:'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',car:'<path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h12l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2M5 17l1 3h12l1-3M5 17h14"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>',"shopping-bag":'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>',wifi:'<path d="M5 12.6A10 10 0 0 1 19 12.6M1.5 8.9a15 15 0 0 1 21 0M8.5 16.5a5 5 0 0 1 7 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/>',wallet:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18M16 14h2"/>',receipt:'<path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21z"/><path d="M8 8h8M8 12h8M8 16h5"/>',"piggy-bank":'<path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/><path d="M19 9h2v4M14 7V5a2 2 0 0 0-4 0M16 11h.01M5 17v3M14 17v3"/>',banknote:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M5 9h.01M19 15h.01"/>',coins:'<circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/><path d="M9 6v6M7 9h4"/>',"line-chart":'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',"calendar-range":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 15h3M13 15h3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"refresh-ccw":'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',"refresh-cw":'<path d="M21 12a9 9 0 0 0-15-6.7L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15 6.7L21 16"/><path d="M21 21v-5h-5"/>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',split:'<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 3 12 12 3 3"/><path d="M12 12v9"/>',"more-horizontal":'<circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>',"a-large-small":'<path d="M18 14v7M22 14l-4-7-4 7M2 14h7M2 21V7l5-4 5 4v14"/>',apple:'<path d="M12 20.9A9 9 0 1 1 19 6.5a4.9 4.9 0 0 0 2 5.4 8.9 8.9 0 0 1-9 9z"/><path d="M12 6a2 2 0 0 0 2-2 2 2 0 0 0-2-2"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',"circle-dot":'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2 6.3-6.4 2 2-6.3z"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',"file-text":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5 2.2 5 2.2a5 5 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.5 9.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.4V22"/>',hand:'<path d="M18 11V5a2 2 0 1 0-4 0v3a2 2 0 1 0-4 0V5a2 2 0 1 0-4 0v8l-2-3a2 2 0 1 0-3 2l4 7a6 6 0 0 0 6 4h2a6 6 0 0 0 6-6v-3a2 2 0 1 0-4 0z"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/>',landmark:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 11h20z"/>',"layout-grid":'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',map:'<path d="M9 3 3 7v14l6-4 6 4 6-4V3l-6 4z"/><path d="M9 3v14M15 7v14"/>',"message-circle":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',"pen-tool":'<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="M18 13 16.5 5.5 2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2 9.6 9.6"/><circle cx="11" cy="11" r="2"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',puzzle:'<path d="M19.4 14.4a1 1 0 0 0 .6-.9V8a1 1 0 0 0-1-1h-5.5a1 1 0 0 1-.9-.6 2 2 0 1 0-2 2 2.5 2.5 0 0 1 0 3 2 2 0 1 0 2 2 1 1 0 0 1 .9-.6h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 .6-.9 2 2 0 1 0-1.2 0z"/>',ruler:'<path d="M5 3l16 16-3 3L2 6zM8 6l3 3M11 9l3 3M14 12l3 3"/>',slash:'<line x1="22" y1="2" x2="2" y2="22"/>',triangle:'<path d="M3 20h18L12 4z"/>',truck:'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',"volume-2":'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7"/>',watch:'<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5M8.2 5.5l.8-2.5h6l.8 2.5M15.8 18.5l-.8 2.5H9l-.8-2.5"/>',waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',bot:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M8 15h.01M16 15h.01M12 17h.01"/>',"bar-chart-2":'<path d="M3 3v18h18"/><path d="M5 18V10M10 18V4M15 18v-7"/>'};function z({name:e,size:a=18,strokeWidth:o=1.5,...r}){let i=$[e];return(0,t.jsx)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!r["aria-label"]||void 0,...r,dangerouslySetInnerHTML:{__html:i}})}Object.keys($),l().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  border: ${({ring:e})=>e?`1px solid ${s.w4.colors.border}`:"none"};
  flex-shrink: 0;
  overflow: hidden;
  user-select: none;
`,l().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: ${({fontSize:e})=>e}px;
  font-weight: 700;
  color: ${s.w4.colors.mainBg};
  line-height: 1;
  letter-spacing: 0;
`,l().img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,l().div`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${s.w4.colors.accentMuted};
  border: 1px solid ${s.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${s.w4.typography.fontFamily};
  font-weight: 700;
  color: ${s.w4.colors.accent};
  flex-shrink: 0;
  /* Font scales with size: 26px → 12px, 40px → 18px */
  font-size: ${({size:e})=>Math.round(.46*e)}px;
`;let M=(0,v.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;l().div`
  position: relative;
`,l().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px 4px 4px;
  background: none;
  border: 1px solid ${s.w4.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: border-color ${s.w4.transitions.fast}, background ${s.w4.transitions.fast};
  &:hover {
    border-color: ${s.w4.colors.accent};
    background: ${s.w4.colors.sidebarHover};
  }

  /* With DisplayName hidden on mobile the pill becomes an oval — pad
     equally and drop the gap so the wrapper is a true circle. */
  @media (max-width: ${s.w4.breakpoints.md}) {
    padding: 4px;
    gap: 0;
  }
`,l().span`
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${s.w4.breakpoints.md}) {
    display: none;
  }
`,l().div`
  position: fixed;
  min-width: 240px;
  background: ${s.w4.colors.surfaceRaised};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${M} 0.15s ease;
  backdrop-filter: blur(12px);

  @media (max-width: ${s.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    max-height: calc(100dvh - env(safe-area-inset-top, 0px) - 96px);
    overflow-y: auto;
  }
`,l().div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${s.w4.colors.border};
`,l().div`
  margin-bottom: 10px;
`,l().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${s.w4.colors.mainText};
`,l().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: 12px;
  color: ${s.w4.colors.mainTextMuted};
  margin-top: 2px;
`,l().div`
  padding: 12px 16px 10px;
  border-bottom: 1px solid ${s.w4.colors.borderSubtle};
`,l().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextFaint};
  margin-bottom: 6px;
`,l().div`
  display: flex;
  gap: 4px;
  padding: 3px;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.borderSubtle};
  border-radius: ${s.w4.borderRadius.md};
`,l().button`
  flex: 1;
  padding: 6px 10px;
  background: ${({active:e})=>e?s.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  font-family: ${s.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: ${({active:e})=>e?600:500};
  cursor: pointer;
  transition: background ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};

  &:hover {
    color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.mainText};
    background: ${({active:e})=>e?s.w4.colors.accentMuted:s.w4.colors.sidebarHover};
  }
`,l().button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeBase};
  color: ${s.w4.colors.mainTextMuted};
  transition: background 0.12s, color 0.12s;
  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${({danger:e})=>e?"#e05252":s.w4.colors.mainText};
  }
`,o(8170),l().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};

  @media (max-width: ${s.w4.breakpoints.md}) {
    gap: ${s.w4.spacing.xs};

    .header-kbd { display: none; }
    .header-hide-md { display: none; }
  }
`,l().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${s.w4.colors.border};
  border-radius: 999px;
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};

  &:hover {
    color: ${s.w4.colors.accent};
    border-color: ${s.w4.colors.accent};
    background: ${s.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
`,l().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  min-width: 180px;
  padding: 0 6px 0 12px;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.borderStrong};
  border-radius: 999px;
  color: ${s.w4.colors.mainText};
  cursor: pointer;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, color ${s.w4.transitions.fast}, box-shadow ${s.w4.transitions.fast};
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);

  .label {
    flex: 1;
    text-align: left;
    color: ${s.w4.colors.mainTextMuted};
    font-weight: 500;
    letter-spacing: -0.1px;
  }

  @media (max-width: ${s.w4.breakpoints.md}) {
    min-width: 0;
    padding: 0 12px;
    .label { display: none; }
  }

  .kbd {
    display: inline-flex;
    align-items: center;
    gap: 1px;
    padding: 2px 6px;
    border-radius: 6px;
    background: ${s.w4.colors.sidebarHover};
    border: 1px solid ${s.w4.colors.borderSubtle};
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    color: ${s.w4.colors.mainTextMuted};
    letter-spacing: 0.04em;
    transition: color ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, background ${s.w4.transitions.fast};
  }

  &:hover {
    border-color: ${s.w4.colors.accent};
    background: ${s.w4.colors.surfaceRaised};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  }
  &:hover .label { color: ${s.w4.colors.mainText}; }
  &:hover .kbd {
    color: ${s.w4.colors.accent};
    border-color: ${s.w4.colors.accent}55;
    background: ${s.w4.colors.surface};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
`,l().div`
  position: relative;
  display: inline-flex;
`,l().span`
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: #ff6fa9;
  border: 2px solid ${s.w4.colors.mainBg};
  color: #fff;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0;
  pointer-events: none;
`,l().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  background: ${s.w4.colors.accent};
  border: 1px solid ${s.w4.colors.accent};
  border-radius: 999px;
  color: #fff;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast};
  white-space: nowrap;

  &:hover {
    background: ${s.w4.colors.accentHover};
    border-color: ${s.w4.colors.accentHover};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
`,l().div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 900;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  ${({forceVisible:e})=>e?"":"@media (hover: hover) and (pointer: fine) { display: none; }"}
`,l().div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 45%;
  height: 60%;
  pointer-events: auto;
  touch-action: none;
`,l().div`
  position: absolute;
  left: ${({left:e})=>e}px;
  top: ${({top:e})=>e}px;
  width: ${120}px;
  height: ${120}px;
  margin-left: -${60}px;
  margin-top: -${60}px;
  border-radius: 50%;
  background: rgba(13, 17, 23, 0.55);
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
  pointer-events: none;
  opacity: ${({active:e})=>e?1:.9};
  transition: opacity ${s.w4.transitions.fast};
`,l().div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${54}px;
  height: ${54}px;
  margin-left: -${27}px;
  margin-top: -${27}px;
  border-radius: 50%;
  background: ${s.w4.colors.accent};
  border: 2px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.45);
  transform: translate(
    ${({dx:e})=>60*e}px,
    ${({dy:e})=>60*e}px
  );
  transition: transform 0.05s linear;
`,l().div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  gap: 14px;
  pointer-events: auto;
  touch-action: manipulation;

  @media (max-width: ${s.w4.breakpoints.md}) {
    right: 20px;
    bottom: 20px;
    gap: 10px;
  }
`,l().button`
  min-width: 72px;
  min-height: 72px;
  padding: 0 18px;
  border-radius: 50%;
  background: ${({accent:e})=>e};
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-family: ${s.w4.typography.fontFamily};
  font-weight: 800;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  touch-action: manipulation;
  /* transform is hand-tuned tighter than the fast token so the press-scale
   * tracks the finger (joystick physics), box-shadow uses the motion scale. */
  transition: transform 0.08s ease, box-shadow ${s.w4.transitions.fast};

  &:active {
    transform: scale(0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  }
`;let k=(0,v.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;l()("div",{shouldForwardProp:e=>"accentColor"!==e&&"pinned"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  background: ${s.w4.colors.surface};
  border: 1px solid ${({pinned:e})=>e?s.w4.colors.accent:s.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  min-height: 230px;
  transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 200ms,
              box-shadow 200ms;
  animation: ${k} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${s.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${s.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .pin-btn { opacity: 1; }
    &:hover .pin-controls { opacity: 1; }
  }

  @media (hover: none) {
    .pin-btn { opacity: ${({pinned:e})=>e?1:.55}; }
    .pin-controls { opacity: 0.55; }
  }
`,l().div`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${s.w4.colors.border};
  color: ${s.w4.colors.mainText};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
    z-index: 1;
  }

  /* ── Per-id templates ── */

  /* generic fallback: diagonal gradient + uppercase monogram */
  &.viz--generic {
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(135deg, var(--acc) 0%, transparent 70%),
      linear-gradient(135deg, #1a1f38, #0f1220);
  }
  & .viz-mono {
    position: absolute;
    left: 16px;
    bottom: 12px;
    font-family: ${s.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 28px;
    letter-spacing: -1px;
    color: var(--acc);
    opacity: 0.9;
    z-index: 1;
  }

  /* markdown — paragraphs of lines */
  &.viz--markdown {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { display: block; height: 4px; background: #388bfd; border-radius: 2px; opacity: 0.7; }
    & > .h { height: 7px; background: ${s.w4.colors.mainText}; opacity: 0.9; width: 55%; margin-bottom: 4px; }
    & > .l1 { width: 88%; opacity: 0.5; }
    & > .l2 { width: 72%; opacity: 0.4; }
    & > .l3 { width: 90%; opacity: 0.5; }
    & > .l4 { width: 60%; opacity: 0.3; }
  }

  /* school — year ladder */
  &.viz--school {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    align-items: flex-end;
    gap: 6px;
    & > .col { flex: 1; background: linear-gradient(180deg, #f78166, rgba(247, 129, 102, 0.1)); border-radius: 3px 3px 0 0; }
    & > .col:nth-of-type(1) { height: 32%; }
    & > .col:nth-of-type(2) { height: 52%; }
    & > .col:nth-of-type(3) { height: 74%; }
    & > .col:nth-of-type(4) { height: 92%; }
    & > .lb { position: absolute; left: 14px; top: 12px; font-family: ${s.w4.typography.fontFamily}; font-style: italic; font-size: 22px; font-weight: 600; color: #f78166; letter-spacing: -0.4px; }
  }

  /* earth — globe grid */
  &.viz--earth {
    background: linear-gradient(135deg, #0d2e1a, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .g {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 35% 35%, rgba(63, 185, 80, 0.5), transparent 40%),
        radial-gradient(circle at 70% 65%, rgba(63, 185, 80, 0.3), transparent 40%),
        linear-gradient(135deg, #0f3a20, #0a1a10);
      border: 1px solid rgba(63, 185, 80, 0.3);
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 40px rgba(63, 185, 80, 0.15);
    }
    & > .g::before,
    & > .g::after {
      content: '';
      position: absolute;
      left: 0; right: 0;
      border-top: 1px solid rgba(63, 185, 80, 0.22);
    }
    & > .g::before { top: 30%; transform: skewY(-10deg); }
    & > .g::after  { top: 60%; transform: skewY(8deg); }
  }

  /* cosmos — starfield + moon */
  &.viz--cosmos {
    background:
      radial-gradient(2px 2px at 20% 30%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 75% 20%, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
      radial-gradient(1.5px 1.5px at 45% 70%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 90% 60%, rgba(255, 255, 255, 0.8) 50%, transparent 50%),
      radial-gradient(2px 2px at 15% 85%, rgba(188, 140, 255, 0.9) 50%, transparent 50%),
      radial-gradient(1px 1px at 60% 40%, rgba(255, 255, 255, 0.4) 50%, transparent 50%),
      radial-gradient(1px 1px at 30% 15%, rgba(188, 140, 255, 0.7) 50%, transparent 50%),
      radial-gradient(circle at 78% 45%, rgba(188, 140, 255, 0.35), transparent 45%),
      linear-gradient(135deg, #1a1140, #0f1220);
    &::after {
      content: '';
      position: absolute;
      right: 24px;
      top: 24px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #e9d9ff, #b8a0e8 60%, #7a5ec0);
      box-shadow: 0 0 30px rgba(188, 140, 255, 0.4);
    }
  }

  /* techscope — spectrum bars */
  &.viz--techscope {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: flex-end;
    padding: 14px;
    gap: 3px;
    & > span { flex: 1; background: linear-gradient(180deg, #a371f7, rgba(163, 113, 247, 0.2)); border-radius: 1px; }
  }

  /* citypulse — skyline + sun */
  &.viz--citypulse {
    background: linear-gradient(180deg, #2a1a10 0%, #0f1220 100%);
    &::before {
      content: '';
      position: absolute;
      left: 0; right: 0; bottom: 0;
      height: 70%;
      background: #0a0b14;
      clip-path: polygon(0 100%, 0 80%, 6% 80%, 6% 55%, 13% 55%, 13% 85%, 22% 85%, 22% 35%, 34% 35%, 34% 70%, 43% 70%, 43% 20%, 55% 20%, 55% 60%, 66% 60%, 66% 40%, 75% 40%, 75% 75%, 88% 75%, 88% 50%, 100% 50%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      top: 18px; right: 20px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: #d29922;
      box-shadow: 0 0 24px rgba(210, 153, 34, 0.5);
    }
  }

  /* stockpulse — candles */
  &.viz--stockpulse {
    background: linear-gradient(135deg, #0f2818, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    & > .c { flex: 1; position: relative; height: 100%; }
    & > .c::before { content: ''; position: absolute; left: 50%; transform: translateX(-50%); width: 1px; top: 20%; bottom: 15%; background: #3fb950; opacity: 0.5; }
    & > .c::after  { content: ''; position: absolute; left: 0; width: 100%; top: 35%; height: 30%; background: #3fb950; border-radius: 1px; }
    & > .c.r::before { background: #d86a6a; }
    & > .c.r::after  { background: #d86a6a; }
  }

  /* csvexplorer — mini table */
  &.viz--csvexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 14px;
    gap: 1px;
    & > span {
      background: rgba(88, 166, 255, 0.08);
      border-radius: 2px;
      display: flex;
      align-items: center;
      padding-left: 6px;
      font-family: ${s.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: #58a6ff;
    }
    & > span.h { background: rgba(88, 166, 255, 0.2); font-weight: 500; }
  }

  /* chartbuilder — area chart */
  &.viz--chartbuilder {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    &::before {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: linear-gradient(180deg, rgba(210, 153, 34, 0.5), transparent);
      clip-path: polygon(0 100%, 0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: #d29922;
      clip-path: polygon(0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 24%, 90% 12%, 75% 32%, 60% 22%, 45% 52%, 25% 37%, 15% 57%, 0 62%);
    }
  }

  /* pad — notebook */
  &.viz--pad {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { height: 3px; background: rgba(247, 129, 102, 0.45); border-radius: 2px; }
    & > .t { height: 6px; background: #f78166; width: 45%; }
    & > .a { width: 85%; }
    & > .b { width: 65%; }
    & > .c { width: 90%; }
    & > .d { width: 50%; }
  }

  /* regexlab — pattern + highlight */
  &.viz--regexlab {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 14px;
    padding: 14px;
    line-height: 1.7;
    color: ${s.w4.colors.mainTextMuted};
    & .hl { background: rgba(56, 139, 253, 0.35); color: #58a6ff; padding: 1px 3px; border-radius: 2px; }
    & .slash { color: #58a6ff; }
  }

  /* jsonexplorer — tree */
  &.viz--jsonexplorer {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    color: ${s.w4.colors.mainTextMuted};
    line-height: 1.5;
    & .k { color: #3fb950; }
    & .v { color: ${s.w4.colors.mainText}; }
    & .b { color: ${s.w4.colors.mainTextMuted}; opacity: 0.7; }
  }

  /* codediff — two columns */
  &.viz--codediff {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    padding: 14px;
    & > .col { display: flex; flex-direction: column; gap: 3px; }
    & span { height: 4px; border-radius: 2px; }
    & .a { background: rgba(216, 106, 106, 0.4); }
    & .n { background: rgba(255, 255, 255, 0.08); }
    & .g { background: rgba(127, 183, 126, 0.5); }
  }

  /* playground — tubes */
  &.viz--playground {
    background: linear-gradient(135deg, #2a2410, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    & > .tube {
      width: 24px;
      height: 60px;
      border: 1.5px solid #facc15;
      border-radius: 0 0 12px 12px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg, transparent 40%, rgba(250, 204, 21, 0.35) 40%);
    }
    & > .tube::before {
      content: '';
      position: absolute;
      inset: 40% 3px 3px 3px;
      background: #facc15;
      border-radius: 0 0 8px 8px;
      opacity: 0.6;
    }
  }

  /* jwtinspector — token chunks */
  &.viz--jwtinspector {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    justify-content: center;
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 11px;
    & > span { padding: 6px 10px; border-radius: 4px; }
    & > .h { background: rgba(163, 113, 247, 0.2); color: #a371f7; }
    & > .p { background: rgba(127, 183, 126, 0.2); color: #7fb77e; }
    & > .s { background: rgba(216, 106, 106, 0.2); color: #d86a6a; }
    & > .sep { padding: 0; background: transparent; color: ${s.w4.colors.mainTextMuted}; opacity: 0.6; }
  }

  /* colorlab — palette strip */
  &.viz--colorlab {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
  }

  /* cronbuilder — timeline */
  &.viz--cronbuilder {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    & > .row { display: flex; align-items: center; gap: 2px; height: 6px; position: relative; }
    & > .row::before {
      content: attr(data-l);
      position: absolute;
      left: -2px;
      top: -14px;
      font-family: ${s.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: ${s.w4.colors.mainTextMuted};
      letter-spacing: 1px;
      opacity: 0.7;
    }
    & > .row span { flex: 1; height: 100%; background: rgba(255, 255, 255, 0.05); border-radius: 1px; }
    & > .row span.on { background: #3fb950; }
  }

  /* weather — sun + temp */
  &.viz--weather {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    & > .sun {
      position: absolute;
      top: 20px; left: 34px;
      width: 50px; height: 50px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #ffd780, #58a6ff 80%);
      box-shadow: 0 0 40px rgba(88, 166, 255, 0.4);
    }
    & > .temp {
      position: absolute;
      right: 20px; bottom: 14px;
      font-family: ${s.w4.typography.fontFamily};
      font-size: 38px;
      font-weight: 300;
      color: #58a6ff;
      line-height: 1;
      letter-spacing: -1px;
    }
    & > .temp small { font-size: 16px; vertical-align: top; margin-left: 2px; font-weight: 400; }
  }

  /* apiexplorer — request/response */
  &.viz--apiexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 14px;
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & .get { color: #3fb950; }
    & .url { color: ${s.w4.colors.mainText}; }
    & .status { color: #58a6ff; }
    & .echo { color: ${s.w4.colors.mainTextMuted}; opacity: 0.75; }
  }

  /* movies — poster marquee. 4×2 ordered cool→warm for a diagonal tonal
     sweep; extra gap + padding lets each poster breathe instead of reading
     as a packed mosaic. */
  &.viz--movies {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 16px;
    & > span { border-radius: 4px; }
  }

  /* promptlab — chat bubbles */
  &.viz--promptlab {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    & > .bubble {
      background: rgba(163, 113, 247, 0.12);
      border: 1px solid rgba(163, 113, 247, 0.3);
      border-radius: 6px;
      padding: 6px 10px;
      font-size: 10.5px;
      color: ${s.w4.colors.mainText};
      align-self: flex-start;
      max-width: 80%;
      line-height: 1.35;
    }
    & > .bubble.r {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.14);
      color: ${s.w4.colors.mainTextMuted};
      align-self: flex-end;
      font-family: ${s.w4.typography.fontFamilyMono};
    }
  }

  /* ask — floating conversation with sparkle + response ripples */
  &.viz--ask {
    background:
      radial-gradient(circle at 20% 20%, rgba(139, 123, 255, 0.35), transparent 60%),
      radial-gradient(circle at 80% 85%, rgba(99, 102, 241, 0.25), transparent 55%),
      linear-gradient(135deg, #1a1635 0%, #0e1022 100%);
    padding: 12px;

    & > .ask-user {
      position: absolute;
      top: 14px;
      right: 14px;
      background: rgba(139, 123, 255, 0.18);
      border: 1px solid rgba(139, 123, 255, 0.45);
      border-radius: 10px 10px 2px 10px;
      padding: 5px 9px;
      font-size: 9.5px;
      color: ${s.w4.colors.mainText};
      font-family: ${s.w4.typography.fontFamilyMono};
      letter-spacing: 0.02em;
      max-width: 60%;
    }

    & > .ask-spark {
      position: absolute;
      left: 14px;
      top: 48px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: linear-gradient(135deg, #a371f7, #58a6ff);
      box-shadow: 0 0 12px rgba(139, 123, 255, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 11px;
      line-height: 1;
    }
    & > .ask-spark::before { content: '✦'; }

    & > .ask-reply {
      position: absolute;
      left: 40px;
      right: 18px;
      top: 48px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    & > .ask-reply > span {
      height: 5px;
      border-radius: 2px;
      background: rgba(230, 237, 243, 0.22);
    }
    & > .ask-reply > span.h {
      width: 60%;
      background: rgba(139, 123, 255, 0.55);
      height: 6px;
    }
    & > .ask-reply > span.b1 { width: 85%; }
    & > .ask-reply > span.b2 { width: 72%; }
    & > .ask-reply > span.b3 { width: 50%; }
  }

  /* devtools — IDE-style panel grid showing the 11 tools */
  &.viz--devtools {
    background:
      linear-gradient(180deg, #0d1117 0%, #05070b 100%);
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0 1px, transparent 1px 3px);
      pointer-events: none;
      z-index: 1;
    }

    & > span {
      position: relative;
      z-index: 2;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${s.w4.typography.fontFamilyMono};
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: rgba(255, 255, 255, 0.92);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    /* mark the "focused" pane — the active tool */
    & > span.active {
      outline: 1px solid rgba(255, 255, 255, 0.3);
      outline-offset: 1px;
    }
  }

  /* imagegen — generated frame */
  &.viz--imagegen {
    background: conic-gradient(from 40deg at 50% 50%, #f78166 0 60deg, #a371f7 60deg 180deg, #58a6ff 180deg 280deg, #f78166 280deg 360deg);
    &::after {
      content: 'generate';
      position: absolute;
      left: 0; right: 0; bottom: 14px;
      text-align: center;
      font-family: ${s.w4.typography.fontFamilyMono};
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.9);
      z-index: 2;
    }
    & > .frame {
      position: absolute;
      inset: 14px;
      background: rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
    }
  }

  /* daily — bullseye */
  &.viz--daily {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .ring { position: absolute; border-radius: 50%; border: 1.5px solid #34d399; }
    & > .ring.r1 { width: 100px; height: 100px; opacity: 0.25; }
    & > .ring.r2 { width: 65px;  height: 65px;  opacity: 0.5; }
    & > .ring.r3 { width: 30px;  height: 30px;  opacity: 1; }
    & > .dot {
      width: 8px; height: 8px;
      background: #34d399;
      border-radius: 50%;
      box-shadow: 0 0 18px #34d399;
      position: relative;
      z-index: 2;
    }
  }

  /* forma — fasting + diet: a conic-gradient progress ring with mono caption */
  &.viz--forma {
    background:
      radial-gradient(circle at 30% 25%, rgba(127, 183, 126, 0.20), transparent 55%),
      radial-gradient(circle at 75% 80%, rgba(232, 154, 92, 0.18), transparent 60%),
      linear-gradient(135deg, #14241c 0%, #0f1612 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 0;

    & > .arc {
      position: relative;
      width: 64px; height: 64px;
      border-radius: 50%;
      background: conic-gradient(#7fb77e 0deg 195deg, rgba(255,255,255,0.06) 195deg 360deg);
      display: grid; place-items: center;
      flex-shrink: 0;
    }
    & > .arc::after {
      content: '';
      width: 48px; height: 48px;
      border-radius: 50%;
      background: #14241c;
      grid-area: 1 / 1;
    }
    & > .arc > .h {
      grid-area: 1 / 1;
      z-index: 1;
      font-family: ${s.w4.typography.fontFamilyMono};
      font-size: 14px;
      font-weight: 600;
      color: #e6edf3;
      letter-spacing: -0.02em;
      font-variant-numeric: tabular-nums;
    }

    & > .lbl {
      font-family: ${s.w4.typography.fontFamilyMono};
      font-size: 9.5px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(127, 183, 126, 0.85);
      flex-shrink: 0;
    }
    & > .pip {
      position: absolute;
      width: 4px; height: 4px;
      border-radius: 50%;
      background: rgba(232, 154, 92, 0.9);
      box-shadow: 0 0 6px rgba(232, 154, 92, 0.6);
    }
    & > .pip.p1 { top: 16px; right: 22px; }
    & > .pip.p2 { top: 38px; right: 14px; opacity: 0.7; }
    & > .pip.p3 { top: 62px; right: 22px; opacity: 0.5; }
  }

  /* finance — vertical bar chart, last bar accent */
  &.viz--finance {
    background:
      radial-gradient(circle at 80% 20%, rgba(127, 183, 126, 0.18), transparent 60%),
      linear-gradient(180deg, #0f1f17 0%, #0a130d 100%);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 14px 18px 18px;
    gap: 6px;

    & > .bar {
      flex: 1;
      max-width: 14px;
      background: linear-gradient(180deg, rgba(127,183,126,0.7), rgba(127,183,126,0.3));
      border-radius: 2px 2px 0 0;
      position: relative;
    }
    & > .bar.accent {
      background: linear-gradient(180deg, #7fb77e, #4f8e4e);
      box-shadow: 0 -4px 14px rgba(127, 183, 126, 0.45);
    }

    &::before {
      content: '€';
      position: absolute;
      top: 12px; left: 14px;
      font-family: ${s.w4.typography.fontFamilyMono};
      font-size: 18px;
      font-weight: 600;
      color: rgba(127, 183, 126, 0.7);
    }
    &::after {
      content: '+18%';
      position: absolute;
      top: 12px; right: 14px;
      font-family: ${s.w4.typography.fontFamilyMono};
      font-size: 10px;
      letter-spacing: 0.04em;
      color: #7fb77e;
    }
  }

  /* youtube — three film-strip thumbnails with play glyphs */
  &.viz--youtube {
    background:
      radial-gradient(circle at 50% 30%, rgba(255, 0, 0, 0.18), transparent 55%),
      linear-gradient(135deg, #1a0a0a 0%, #0a0608 100%);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    padding: 14px;

    & > .tile {
      position: relative;
      border-radius: 4px;
      background: linear-gradient(135deg, #2a1414, #160808);
      border: 1px solid rgba(255, 50, 50, 0.18);
      display: grid; place-items: center;
    }
    & > .tile.t1 { background: linear-gradient(135deg, #3a1a1a, #1a0a0a); }
    & > .tile.t2 { background: linear-gradient(135deg, #4a2020, #1c0c0c); }
    & > .tile.t3 { background: linear-gradient(135deg, #2a1010, #140606); }

    & > .tile::after {
      content: '';
      width: 0; height: 0;
      border-left: 9px solid rgba(255,255,255,0.85);
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      margin-left: 2px;
      filter: drop-shadow(0 0 6px rgba(255, 0, 0, 0.5));
    }

    &::before {
      content: '';
      position: absolute;
      left: 14px; right: 14px; top: 50%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,0,0,0.4), transparent);
      pointer-events: none;
    }
  }

  /* music — equalizer bars + warm gradient */
  &.viz--music {
    background:
      radial-gradient(circle at 70% 70%, rgba(232, 154, 92, 0.25), transparent 55%),
      linear-gradient(135deg, #2a1810 0%, #14080a 100%);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 4px;
    padding: 18px 22px;

    & > .eq {
      width: 5px;
      border-radius: 3px;
      background: linear-gradient(180deg, #f0a868, #8a4a22);
      box-shadow: 0 0 6px rgba(232, 154, 92, 0.4);
    }
    & > .eq.b1 { height: 38%; }
    & > .eq.b2 { height: 72%; }
    & > .eq.b3 { height: 48%; }
    & > .eq.b4 { height: 88%; }
    & > .eq.b5 { height: 60%; }
    & > .eq.b6 { height: 32%; }
    & > .eq.b7 { height: 76%; }
    & > .eq.b8 { height: 50%; }
    & > .eq.b9 { height: 84%; }
    & > .eq.b10 { height: 42%; }

    &::before {
      content: '';
      position: absolute;
      top: 14px; right: 14px;
      width: 22px; height: 22px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 50% 50%, #1a0a0a 0 5px, transparent 5px),
        repeating-radial-gradient(circle at 50% 50%, rgba(232,154,92,0.4) 0 1px, transparent 1px 3px);
      border: 1px solid rgba(232, 154, 92, 0.5);
    }
    &::after {
      content: '♪';
      position: absolute;
      bottom: 10px; left: 14px;
      font-size: 14px;
      color: rgba(232, 154, 92, 0.75);
    }
  }

  /* games — square collage */
  &.viz--games {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    padding: 8px;
    & > span {
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${s.w4.typography.fontFamily};
      font-weight: 800;
      font-size: 14px;
      letter-spacing: -1px;
      color: ${s.w4.colors.mainText};
    }
  }
`,l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .lock {
    margin-left: auto;
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 9px;
    color: ${s.w4.colors.mainTextMuted};
    letter-spacing: 1.4px;
    text-transform: uppercase;
    border: 1px solid ${s.w4.colors.border};
    border-radius: 3px;
    padding: 1px 6px;
    flex-shrink: 0;
  }
`,l().div`
  padding: 6px 14px 16px;
`,l().h3`
  margin: 0 0 6px;
  font-family: ${s.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${s.w4.colors.mainText};

  .hash {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${s.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,l().p`
  margin: 0;
  color: ${s.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,l().div`
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid ${s.w4.colors.borderSubtle};
  font-size: 12px;
  color: ${s.w4.colors.mainTextMuted};
  line-height: 1.4;
`,l().button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: ${({pinned:e})=>e?s.w4.colors.accent:s.w4.colors.mainText};
  opacity: ${({pinned:e})=>+!!e};
  cursor: pointer;
  transition: opacity ${s.w4.transitions.fast}, color ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast};
  z-index: 3;
  padding: 0;

  &:hover {
    color: ${s.w4.colors.accent};
    border-color: ${s.w4.colors.accent};
  }
`,l().div`
  position: absolute;
  top: 8px;
  right: 44px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${s.w4.transitions.fast};
  z-index: 3;
`,l().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1.5px solid
    ${({variant:e})=>"default"===e?s.w4.colors.borderStrong:s.w4.colors.accent};
  background: ${({variant:e})=>"filled"===e?s.w4.colors.accentMuted:"transparent"};
  color: ${({variant:e})=>"default"===e?s.w4.colors.mainTextMuted:s.w4.colors.accent};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 500;
  white-space: nowrap;
  cursor: ${({clickable:e})=>e?"pointer":"default"};
  transition: ${s.w4.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${({variant:e})=>"default"===e?s.w4.colors.mainTextFaint:s.w4.colors.accentHover};
    color: ${({variant:e})=>"default"===e?s.w4.colors.mainText:s.w4.colors.accentHover};
  }

  &:focus-visible {
    ${s.w4.focusRing}
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,l().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
`;let j={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:s.w4.colors.accentMuted},T={neutral:s.w4.colors.mainTextMuted,live:s.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:s.w4.colors.accent};l().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  font-weight: ${({tone:e})=>"film"===e||"tv"===e?600:500};
  letter-spacing: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"1.2px":"0.6px"};
  text-transform: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"uppercase":"none"};
  padding: ${({tone:e})=>"film"===e||"tv"===e?"3px 8px":"2px 7px"};
  border-radius: ${({tone:e})=>"film"===e||"tv"===e?s.w4.borderRadius.sm:"3px"};
  background: ${({tone:e})=>j[e]};
  color: ${({tone:e})=>T[e]};
`,l().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`,l().kbd`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${s.w4.colors.border};
  border-radius: 3px;
  color: ${s.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`,l().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,l().label`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 9px 14px;
  transition: border-color ${s.w4.transitions.fast};

  &:focus-within {
    border-color: ${s.w4.colors.accent};
  }
`,l().input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeMd};
  color: ${s.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${s.w4.colors.mainTextFaint};
  }
`,l().span`
  display: inline-flex;
  align-items: center;
  color: ${s.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,l().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  /* Clip any inner row that's wider than the column instead of letting it
   * push the panel past the grid track. PanelGrid uses minmax(0, 1fr) so
   * the column width is authoritative — we just need to honour it here. */
  min-width: 0;
  overflow: hidden;
  padding: 18px 20px 20px;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.borderSubtle};
  border-radius: ${s.w4.borderRadius.lg};
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  transition: border-color ${s.w4.transitions.fast},
    background ${s.w4.transitions.fast};

  &:hover {
    border-color: ${s.w4.colors.borderStrong};
  }

  ${({accentColor:e})=>e&&`&::before {
      content: '';
      position: absolute;
      top: 14px; bottom: 14px; left: 0;
      width: 2px;
      background: ${e};
      border-radius: 0 2px 2px 0;
      opacity: 0.7;
    }`}
`,l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,l().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${s.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,l().div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  line-height: 1.45;
`,l().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${s.w4.colors.danger};
`,l().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px;
  background: ${s.w4.colors.surface};
  border: 1px solid
    ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.borderSubtle};
  border-radius: ${s.w4.borderRadius.lg};
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  box-shadow: ${({active:e})=>e?`inset 0 0 0 1px ${s.w4.colors.accent}`:"none"};
  transition: border-color ${s.w4.transitions.fast};

  &:hover {
    border-color: ${({active:e})=>e?s.w4.colors.accentHover:s.w4.colors.borderStrong};
  }
`,l().div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
`,l().div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: ${({bg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fff;
  flex-shrink: 0;
`,l().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,l().div`
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${s.w4.colors.mainText};
  margin-bottom: 4px;
`,l().div`
  font-size: 11.5px;
  color: ${s.w4.colors.mainTextMuted};
  line-height: 1.35;
  margin-bottom: 8px;
`,l().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${s.w4.colors.accentMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextMuted};
`,l().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 1;
  min-height: 0;
`,l().button`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.borderSubtle};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;
  gap: 6px;
  font-family: inherit;
  color: ${s.w4.colors.mainText};
  cursor: ${e=>e.onClick?"pointer":"default"};
  transition: border-color ${s.w4.transitions.fast},
    background ${s.w4.transitions.fast};

  &:hover {
    border-color: ${s.w4.colors.borderStrong};
    background: ${s.w4.colors.surfaceHover};
  }

  &:focus-visible {
    ${s.w4.focusRing}
  }
`,l().div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: ${({fg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`,l().div`
  font-size: 11px;
  color: ${s.w4.colors.mainText};
`,l().div`
  margin-top: 14px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({color:e})=>e};
  letter-spacing: 0.5px;
`,l().div`
  position: relative;
  display: inline-block;
`,l().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px 6px 8px;
  background: ${({open:e})=>e?s.w4.colors.surfaceHover:"transparent"};
  border: 1px solid
    ${({open:e})=>e?s.w4.colors.borderStrong:s.w4.colors.border};
  border-radius: 999px;
  color: ${s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background ${s.w4.transitions.fast},
    border-color ${s.w4.transitions.fast},
    color ${s.w4.transitions.fast};

  &:hover {
    color: ${s.w4.colors.mainText};
    border-color: ${s.w4.colors.borderStrong};
  }
  &:focus-visible { ${s.w4.focusRing} }
`,l().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  background: ${s.w4.colors.accentMuted};
  color: ${s.w4.colors.accent};
  padding: 2px 7px;
  border-radius: 999px;
`;let A=(0,v.keyframes)`
  from { opacity: 0; transform: translate(-50%, -6px); }
  to   { opacity: 1; transform: translate(-50%,  0); }
`;l().div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  max-width: calc(100vw - 24px);
  padding: 10px;
  background: ${s.w4.colors.surfaceRaised};
  border: 1px solid ${s.w4.colors.borderStrong};
  border-radius: 14px;
  box-shadow: ${s.w4.elevation.lg};
  z-index: ${s.w4.zIndex.dropdown};
  animation: ${A} 0.18s ease both;

  @media (max-width: ${s.w4.breakpoints.md}) {
    position: fixed;
    top: calc(48px + env(safe-area-inset-top, 0px) + 6px);
    left: 12px;
    right: 12px;
    width: auto;
    max-width: none;
    transform: none;
    animation: none;
    max-height: calc(100dvh - 48px - env(safe-area-inset-top, 0px) - 24px);
    overflow-y: auto;
  }
`,l()("button",{shouldForwardProp:e=>"accent"!==e&&"expanded"!==e})`
  width: 100%;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  background: ${({expanded:e})=>e?s.w4.colors.surfaceHover:"transparent"};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  text-align: left;
  transition: background ${s.w4.transitions.fast};

  &:hover { background: ${s.w4.colors.surfaceHover}; }
  &:focus-visible { ${s.w4.focusRing} }
`,l()("span",{shouldForwardProp:e=>"accent"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({accent:e})=>e}26;
  color: ${({accent:e})=>e};
  border: 1px solid ${({accent:e})=>e}40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,l().span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,l().span`
  font-size: 13.5px;
  color: ${s.w4.colors.mainText};
  font-weight: 500;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,l().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${s.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,l()("span",{shouldForwardProp:e=>"accent"!==e})`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  min-width: 24px;
  height: 22px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accent:e})=>e}30;
  color: ${({accent:e})=>e};
  border-radius: 999px;
`,l().div`
  margin: 2px 0 6px 48px;
  padding: 4px 0;
  border-left: 1px solid ${s.w4.colors.borderSubtle};
  display: flex;
  flex-direction: column;
`,l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px 7px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  color: ${s.w4.colors.mainTextMuted};
  font-size: 12.5px;
  cursor: pointer;
  text-align: left;
  transition: background ${s.w4.transitions.fast},
    color ${s.w4.transitions.fast};

  &:hover {
    color: ${s.w4.colors.mainText};
    background: ${s.w4.colors.surfaceHover};
  }
  &:focus-visible { ${s.w4.focusRing} }
`,l().span`
  font-size: 14px;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: ${({accent:e})=>e?`${e}22`:"transparent"};
`,l().span`
  margin-left: auto;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${s.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
`;let S=(0,v.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;l()("div",{shouldForwardProp:e=>"accentColor"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  min-height: 230px;
  transition:
    transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 200ms,
    box-shadow 200ms;
  animation: ${S} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover (mirrors AppCard). */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${s.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${s.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .gamecard-emoji { transform: translateY(-2px) scale(1.05); }
  }
`,l()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${s.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(120% 100% at 50% 100%, var(--acc) 0%, transparent 60%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
  background-color: ${s.w4.colors.codeBg};

  /* Subtle vignette + tile pattern, both fade in on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
  }

  /* ── V3 pattern-tile variants ──────────────────────────────────────────
   * Ported from docs/design/atlantis/project/Atlantis Game Card Explorations.html
   * Raw hex values are intentional — the viz is artwork, mirroring AppCard's
   * sanctioned exception to the no-hardcoded-colors rule.
   */

  /* familyquiz — scattered brand/pink dots, "Q & A" label */
  &.viz--familyquiz {
    background:
      radial-gradient(circle at 20% 30%, rgba(139, 123, 255, 0.4), transparent 15%),
      radial-gradient(circle at 55% 60%, rgba(139, 123, 255, 0.3), transparent 12%),
      radial-gradient(circle at 80% 25%, rgba(255, 111, 169, 0.35), transparent 12%),
      radial-gradient(circle at 35% 75%, rgba(255, 111, 169, 0.25), transparent 14%),
      radial-gradient(circle at 90% 80%, rgba(139, 123, 255, 0.2), transparent 12%),
      #14172a;
  }

  /* tictactoe — grid lines, "3×3" */
  &.viz--tictactoe {
    background:
      repeating-linear-gradient(90deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      repeating-linear-gradient(0deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      #14172a;
  }

  /* soundhunter — vertical waveform stripes, "waveform" */
  &.viz--soundhunter {
    background:
      repeating-linear-gradient(90deg, rgba(127, 183, 126, 0.25) 0 2px, transparent 2px 7px),
      linear-gradient(180deg, #14302a 0%, #0f1220 100%);
  }

  /* adventure — dusk with paper texture */
  &.viz--adventure {
    background:
      radial-gradient(60% 50% at 50% 100%, rgba(232, 154, 92, 0.35), transparent 60%),
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0 2px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* pixelboard — rainbow conic masked by a center fade, "palette" */
  &.viz--pixelboard {
    background:
      conic-gradient(
        from 0deg at 50% 50%,
        #d86a6a 0 60deg,
        #e89a5c 60deg 120deg,
        #c4b24a 120deg 180deg,
        #7fb77e 180deg 240deg,
        #6aa8d8 240deg 300deg,
        #8b7bff 300deg 360deg
      );
    opacity: 0.3;
  }
  &.viz--pixelboard::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 30%, #14172a 70%);
    pointer-events: none;
    z-index: 1;
  }

  /* memory — flipped-card grid, cyan tones */
  &.viz--memory {
    background:
      repeating-linear-gradient(0deg, transparent 0 22px, rgba(6, 182, 212, 0.14) 22px 24px),
      repeating-linear-gradient(90deg, transparent 0 34px, rgba(6, 182, 212, 0.14) 34px 36px),
      linear-gradient(180deg, #0d1f28, #0f1220);
  }

  /* stopgame — warning stripes with stop-sign radial */
  &.viz--stopgame {
    background:
      radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.35), transparent 55%),
      repeating-linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0 8px, transparent 8px 20px),
      linear-gradient(180deg, #241506, #0f1220);
  }

  /* tapit — concentric target rings, coral tint */
  &.viz--tapit {
    background:
      radial-gradient(circle at 50% 50%, rgba(249, 117, 131, 0.55) 0 8%, transparent 8.5% 22%, rgba(249, 117, 131, 0.35) 22.5% 28%, transparent 28.5% 44%, rgba(249, 117, 131, 0.22) 44.5% 52%, transparent 53%),
      linear-gradient(180deg, #2a1420, #0f1220);
  }

  /* bombbrawl — shockwave rings on dark red */
  &.viz--bombbrawl {
    background:
      radial-gradient(circle at 50% 55%, rgba(255, 68, 68, 0.45) 0 12%, transparent 13% 25%, rgba(255, 68, 68, 0.25) 26% 38%, transparent 39% 55%, rgba(255, 68, 68, 0.12) 56% 70%, transparent 71%),
      linear-gradient(180deg, #2a0a0f, #0f0a12);
  }

  /* jumpparty — dotted-trail bounce, lime green */
  &.viz--jumpparty {
    background:
      radial-gradient(circle at 15% 80%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      radial-gradient(circle at 30% 60%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 50% 40%, rgba(63, 185, 80, 0.4) 0 3%, transparent 4%),
      radial-gradient(circle at 70% 55%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 85% 75%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      linear-gradient(180deg, #0e2416, #0f1220);
  }

  /* lebem — pastel pages, coral glow (read-to-play) */
  &.viz--lebem {
    background:
      repeating-linear-gradient(90deg, transparent 0 40px, rgba(249, 117, 131, 0.10) 40px 41px),
      radial-gradient(ellipse at 50% 100%, rgba(249, 117, 131, 0.3), transparent 65%),
      linear-gradient(180deg, #24121a, #0f1220);
  }

  /* drawguess — scribble strokes, lilac */
  &.viz--drawguess {
    background:
      repeating-linear-gradient(20deg, rgba(210, 168, 255, 0.16) 0 1.5px, transparent 2px 9px),
      repeating-linear-gradient(-30deg, rgba(210, 168, 255, 0.12) 0 1.5px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* spotit — scattered dots on violet */
  &.viz--spotit {
    background:
      radial-gradient(circle at 25% 35%, rgba(139, 92, 246, 0.35) 0 4%, transparent 5%),
      radial-gradient(circle at 55% 70%, rgba(139, 92, 246, 0.45) 0 5%, transparent 6%),
      radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.30) 0 3%, transparent 4%),
      radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.25) 0 3%, transparent 4%),
      radial-gradient(circle at 75% 55%, rgba(139, 92, 246, 0.18) 0 2%, transparent 3%),
      linear-gradient(180deg, #1c1530, #0f1220);
  }
`,l().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextMuted};
  z-index: 2;
`,l()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${s.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
  background: ${s.w4.colors.codeBg};

  /* ── bombbrawl — explosive red, heavy condensed logotype ──
   * padding-top reserves room for the player-count + online badges so
   * "BOMB" never sits under them (TopLeft / TopRight are absolutely
   * positioned at top:10px). */
  &.hero--bombbrawl {
    background: linear-gradient(135deg, #2a0a0f, #0f0a12);
    justify-content: flex-start;
    padding: 44px 20px 16px;
  }
  &.hero--bombbrawl .hero-mark {
    font-family: ${s.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 48px;
    letter-spacing: -3px;
    line-height: 0.88;
    color: #ff4444;
    text-shadow: 0 0 40px rgba(255, 68, 68, 0.45), 0 0 80px rgba(255, 68, 68, 0.18);
    user-select: none;
  }
  &.hero--bombbrawl .hero-mark em {
    font-style: normal;
    color: #ffb347;
    display: block;
    font-size: 36px;
    letter-spacing: -2px;
    opacity: 0.9;
  }

  /* ── jumpparty — lime burst, bouncy stacked words ── */
  &.hero--jumpparty {
    background: linear-gradient(135deg, #0e2416, #0f1220);
    flex-direction: column;
    gap: 0;
    padding: 44px 16px 12px;
  }
  &.hero--jumpparty .hero-mark {
    font-family: ${s.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 54px;
    letter-spacing: -3px;
    line-height: 0.9;
    color: #3fb950;
    text-shadow: 0 0 36px rgba(63, 185, 80, 0.4);
    user-select: none;
  }
  &.hero--jumpparty .hero-mark em {
    font-style: normal;
    font-size: 24px;
    letter-spacing: 4px;
    color: rgba(63, 185, 80, 0.55);
    display: block;
    text-transform: uppercase;
  }

  /* ── animalarena — trophy gold, serif italic clash ── */
  &.hero--animalarena {
    background: linear-gradient(135deg, #1c1a0e, #0f0f12);
    flex-direction: column;
    align-items: flex-start;
    padding: 44px 20px 18px;
  }
  &.hero--animalarena .hero-mark {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-weight: 600;
    font-size: 40px;
    letter-spacing: -2px;
    line-height: 0.92;
    background: linear-gradient(120deg, #f59e0b, #ef4444 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    user-select: none;
  }
  &.hero--animalarena .hero-mark em {
    font-style: normal;
    display: block;
    font-size: 14px;
    letter-spacing: 3px;
    -webkit-text-fill-color: rgba(245, 158, 11, 0.45);
    text-transform: uppercase;
    margin-top: 6px;
  }
`,l().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextMuted};
  z-index: 2;

  /* bombbrawl's "BOMB / BRAWL" logotype is left-aligned and reaches the
   * bottom of the hero zone — anchor the caption bottom-right instead so
   * it clears the typography. */
  .hero--bombbrawl & {
    left: auto;
    right: 14px;
    color: rgba(255, 179, 71, 0.55);
  }

  /* animalarena's "SUMO / ZOO" stack is also left-aligned and its "ZOO"
   * block reaches the bottom of the hero zone — same bottom-right
   * anchoring clears the overlap. */
  .hero--animalarena & {
    left: auto;
    right: 14px;
    color: rgba(245, 158, 11, 0.5);
  }
`,l().span`
  font-size: 56px;
  line-height: 1;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,l()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accentColor:e})=>`${e}1f`};
  border: 1px solid ${({accentColor:e})=>`${e}55`};
  color: ${({accentColor:e})=>e};
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,l().div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
`,l().div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`,l()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,l().div`
  padding: 6px 14px 16px;
`,l().h3`
  margin: 0 0 6px;
  font-family: ${s.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${s.w4.colors.mainText};

  .hash {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${s.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,l().p`
  margin: 0;
  color: ${s.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,o(5406),o(2053),l().div`
  font-size: 14px;
  color: ${s.w4.colors.mainText};
  line-height: 1.65;

  p { margin: 0 0 0.6em; }
  p:last-child { margin-bottom: 0; }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${s.w4.colors.mainText};
    margin: 0.9em 0 0.3em;
    line-height: 1.3;
  }
  h1 { font-size: 17px; }
  h2 { font-size: 15px; }
  h3, h4, h5, h6 { font-size: 13.5px; }
  & > :first-of-type { margin-top: 0; }

  ul, ol {
    padding-left: 1.4em;
    margin: 0 0 0.6em;
    line-height: 1.65;
  }
  li { margin-bottom: 0.15em; }
  li p { margin: 0; }

  /* Task lists */
  ul.contains-task-list { list-style: none; padding-left: 0.2em; }
  li.task-list-item { display: flex; align-items: baseline; gap: 0.4em; }
  li.task-list-item input[type="checkbox"] {
    accent-color: ${s.w4.colors.accent};
    flex-shrink: 0;
    margin-top: 2px;
  }

  strong { font-weight: 600; color: ${s.w4.colors.mainText}; }
  em     { font-style: italic; }

  a {
    color: ${s.w4.colors.accent};
    text-decoration: none;

    &:hover { text-decoration: underline; color: ${s.w4.colors.accentHover}; }
  }

  blockquote {
    margin: 0.6em 0;
    padding: 6px 12px;
    border-left: 3px solid ${s.w4.colors.accent};
    background: ${s.w4.colors.surface};
    border-radius: 0 6px 6px 0;
    color: ${s.w4.colors.mainTextMuted};
    font-style: italic;
  }

  /* Inline code only — CodeBlock owns fenced blocks */
  code {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 12.5px;
    background: ${s.w4.colors.codeBg};
    border: 1px solid ${s.w4.colors.codeBorder};
    border-radius: 4px;
    padding: 1px 5px;
    color: ${s.w4.colors.mainText};
  }

  /* Pre reset — CodeBlock handles the chrome */
  pre { margin: 0.5em 0; }
  pre code { background: none; border: none; padding: 0; border-radius: 0; }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    margin: 0.5em 0;
    overflow: hidden;
    border-radius: ${s.w4.borderRadius.md};
  }
  th, td {
    padding: 7px 12px;
    border: 1px solid ${s.w4.colors.border};
    text-align: left;
    vertical-align: top;
  }
  th {
    background: ${s.w4.colors.surface};
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.03em;
    color: ${s.w4.colors.mainTextMuted};
    text-transform: uppercase;
  }
  tr:nth-of-type(even) td { background: ${s.w4.colors.surface}; }

  img {
    max-width: 100%;
    border-radius: ${s.w4.borderRadius.md};
    margin: 0.4em 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${s.w4.colors.border};
    margin: 0.8em 0;
  }

  /* KaTeX — hide the aria-only MathML fork, keep the HTML render */
  .katex .katex-mathml { display: none; }
  .katex { font-size: 1.05em; }
  .katex-display {
    margin: 0.6em 0;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 2px 0;
  }
`;var C=o(7993);l().nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${s.w4.spacing.sm} 0;
`,l().div`
  font-size: 10px;
  font-weight: 600;
  color: ${s.w4.colors.sidebarTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: ${s.w4.spacing.xs} ${s.w4.spacing.md};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&`
    font-size: 0;
    padding: 0;
    margin: 0;
    height: 0;
  `}
`,l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 0 6px;
  border: none;
  border-radius: ${s.w4.borderRadius.md};
  background: ${({active:e})=>e?s.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.sidebarText};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${s.w4.colors.mainText};
  }

  ${({collapsed:e})=>e&&`
    justify-content: center;
    padding: 8px;
    margin: 0 4px;
  `}
`,l().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`,l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"display: none;"}
`;let B=(0,v.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;l().div`
  display: grid;
  /* Desktop & iPad: exactly 2 equal columns. sm = 1 col, md/lg = 2 cols (full row). */
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: auto;
  gap: ${s.w4.spacing.lg};

  @media (max-width: ${s.w4.breakpoints.lg}) {
    gap: ${s.w4.spacing.md};
  }

  /* Mobile: stack everything in a single full-width column. */
  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,l().div`
  grid-column: ${({fullWidth:e,colSpan:a})=>e?"1 / -1":`span ${a}`};
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${B} 0.25s ease both;

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-column: span 1;
  }
`,l().div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  margin-bottom: 0;
  height: 20px;
`,l().div`
  --panel-accent: ${({accent:e})=>e??s.w4.colors.accent};
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: ${({minH:e})=>e}px;
  height: 100%;
  padding: ${s.w4.spacing.lg};
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  transition:
    border-color ${s.w4.transitions.base},
    box-shadow ${s.w4.transitions.base},
    transform ${s.w4.transitions.base};

  /* Left accent bar */
  &::before {
    content: '';
    position: absolute;
    top: 14px; bottom: 14px; left: 0;
    width: 2px;
    background: var(--panel-accent);
    border-radius: 0 2px 2px 0;
    opacity: 0.7;
  }

  /* Grip visual affordance left edge */
  &[data-grip='true']::after {
    content: '';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 24px;
    border-left: 2px dotted ${s.w4.colors.borderSubtle};
    border-right: 2px dotted ${s.w4.colors.borderSubtle};
    opacity: 0.4;
  }

  &:hover {
    border-color: ${s.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px ${s.w4.colors.shadow};
  }

  /* WidgetShell owns its chrome — zero ours to avoid double frame. */
  &:has(> [data-widget-shell]) {
    padding: 0;
    background: transparent;
    border-color: transparent;
  }
  &:has(> [data-widget-shell])::before,
  &:has(> [data-widget-shell])::after { display: none; }
  &:has(> [data-widget-shell]):hover {
    border-color: transparent;
    box-shadow: none;
    transform: none;
  }

  /* Controls visible on hover (pointer devices); always slightly visible on touch. */
  &:hover .panel-controls { opacity: 1; }

  @media (hover: none) {
    .panel-controls {
      opacity: 0.4;
      transform: scale(0.87);
      transform-origin: top right;
    }
  }
`,l().div`
  position: absolute;
  top: -14px;
  right: 6px;
  display: flex;
  align-items: center;
  gap: 2px;
  opacity: 0;
  transition: opacity ${s.w4.transitions.fast};
  z-index: 2;
`;let F=l().button`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  transition:
    color ${s.w4.transitions.fast},
    border-color ${s.w4.transitions.fast},
    background ${s.w4.transitions.fast};

  &:hover {
    color: ${s.w4.colors.mainText};
    border-color: ${s.w4.colors.mainTextMuted};
    background: ${s.w4.colors.surfaceRaised};
  }
`;l()(F)`
  &:hover {
    color: #f85149;
    border-color: rgba(248, 81, 73, 0.4);
  }
`;let L=(0,v.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;l().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${L} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${s.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${s.w4.colors.surface};
  }
`,l().span`
  display: block;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${s.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${s.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${s.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${s.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,l().div`
  background: ${s.w4.colors.sidebarBg};
  border: 1px solid ${s.w4.colors.sidebarBorder};
  border-radius: ${s.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,l().div`
  font-size: ${s.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
`,l().input`
  width: 100%;
  padding: 8px 12px;
  background: ${s.w4.colors.mainBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  color: ${s.w4.colors.mainText};
  font-size: ${s.w4.typography.fontSizeBase};
  font-family: ${s.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${s.w4.colors.accent}; }
  &::placeholder { color: ${s.w4.colors.sidebarTextMuted}; }
`,l().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,l().button`
  padding: 7px 18px;
  border-radius: ${s.w4.borderRadius.md};
  font-size: ${s.w4.typography.fontSizeBase};
  font-family: ${s.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:a})=>a?"rgba(248,81,73,0.12)":e?s.w4.colors.accent:"none"};
  color: ${({primary:e,danger:a})=>a?s.w4.colors.danger:e?"#fff":s.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:a})=>a?s.w4.colors.danger:e?s.w4.colors.accent:s.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,l().div`
  height: 1px;
  background: ${s.w4.colors.border};
  margin: 0 -4px;
`,l().div`
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
`;let H=(0,v.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,R=(0,v.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`;l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${s.w4.spacing.md};
  animation: ${H} 0.15s ease both;
`,l().div`
  background: ${s.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?s.w4.colors.danger+"55":s.w4.colors.sidebarBorder};
  border-radius: ${s.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${s.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${R} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,l().div`
  font-size: ${s.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?s.w4.colors.danger:s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
`,l().div`
  font-size: ${s.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamily};
`,l().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${s.w4.spacing.sm};
`,l().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${s.w4.typography.fontSizeBase};
  font-family: ${s.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${s.w4.transitions.fast},
    border-color ${s.w4.transitions.fast},
    color ${s.w4.transitions.fast},
    opacity ${s.w4.transitions.fast};

  background: ${({primary:e,danger:a})=>a?s.w4.colors.danger:e?s.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:a})=>a||e?"#fff":s.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:a})=>a?s.w4.colors.danger:e?s.w4.colors.accent:s.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${s.w4.focusRing} }
`;let E=(0,v.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,P=(0,v.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,V=(0,v.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${s.w4.colors.mainBg};
  font-family: ${s.w4.typography.fontFamily};
  animation: ${E} 0.4s ease 0.15s both;
`,l().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,l().div`
  position: absolute;
  inset: 0;
  animation: ${P} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
`,l().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${s.w4.colors.border};
  animation: ${V} 1.4s ease-in-out infinite;
`,l().span`
  color: ${s.w4.colors.mainTextMuted};
  font-size: ${s.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`,l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${s.w4.spacing.sm};
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,l().div`
  position: relative;
`;let O="260px",I="56px",N="56px",D=l().header`
  display: flex;
  align-items: center;
  height: calc(${N} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);

  /* Mobile: logo + app label on row 1, scrollable chrome cluster on row 2. */
  @media (max-width: ${s.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(${N} + env(safe-area-inset-top, 0px));
  }
`,G=l().div`
  width: ${I};
  min-width: ${I};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${s.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${s.w4.breakpoints.md}) {
    display: none;
  }
`,Y=l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${s.w4.borderRadius.md};
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${s.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,W=l().button`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  padding: 0 ${s.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  color: ${s.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.85; }
`,K=l().span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: linear-gradient(135deg, ${s.w4.colors.accent}, ${s.w4.colors.accentHover});
  font-family: ${s.w4.typography.fontFamilySerif};
  font-size: 23px;
  font-weight: 600;
  line-height: 1;
  color: #ffffff;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08) inset,
    0 6px 18px -4px ${s.w4.colors.accent}88;

  /* serif: approved for logo wordmark */
`,q=l().span`
  font-family: ${s.w4.typography.fontFamilySerif};
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.005em;
  color: ${s.w4.colors.mainText};
  line-height: 1;

  /* serif: approved for logo wordmark */
`,_=l().div`
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  padding-left: ${s.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 0;

  &::before {
    content: '/';
    margin-right: ${s.w4.spacing.sm};
    color: ${s.w4.colors.border};
  }
`,U=l().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${s.w4.spacing.md};
  padding: 0 ${s.w4.spacing.lg};
  min-width: 0;

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${s.w4.spacing.sm};
  }

  /* Full-width second row on mobile, horizontally scrollable.
     Align to the right so the avatar / bell stay flush with the
     viewport edge — matches desktop end-alignment. */
  @media (max-width: ${s.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    justify-content: flex-end;
    padding: ${s.w4.spacing.xs} ${s.w4.spacing.sm};
    gap: ${s.w4.spacing.xs};
    border-top: 1px solid ${s.w4.colors.sidebarBorder};
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }

    > section + section,
    > *:not(section) + section {
      margin-left: 0;
    }
  }
`,J=l().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,Z=l().div`
  display: flex;
  flex-direction: column;
  height: ${s.w4.sizes.fullHeight};
  background: ${s.w4.colors.mainBg};
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainText};
  overflow: hidden;
`,X=l().aside`
  width: ${({collapsed:e})=>e?I:O};
  min-width: ${({collapsed:e})=>e?I:O};
  background: ${s.w4.colors.sidebarBg};
  border-right: 1px solid ${s.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${s.w4.breakpoints.md}) {
    display: none;
  }
`,Q=l().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,ee=l().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;function ea(){return(0,t.jsxs)(W,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:[(0,t.jsx)(K,{"aria-hidden":"true",children:"A"}),(0,t.jsx)(q,{children:"Atlantis"})]})}let eo="atlantis:sidebar-collapsed";function et({sidebar:e,children:a,topBarRight:n,title:l="Atlantis",activeId:s=null}){let[d,c]=(0,r.useState)(()=>{try{return"true"===localStorage.getItem(eo)}catch{return!1}}),[p,m]=(0,r.useState)(null),g=(0,r.useRef)(),h=()=>c(e=>{let a=!e;try{localStorage.setItem(eo,String(a))}catch{}return a}),f=i().useMemo(()=>i().lazy(()=>Promise.resolve().then(o.bind(o,2787)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,t.jsx)(C.I.Provider,{value:{collapsed:d,toggle:h,flyout:p,openFlyout:(e,a,o)=>{clearTimeout(g.current),m({entry:e,anchorY:a,onSelect:o})},scheduleFlyoutClose:()=>{g.current=setTimeout(()=>m(null),160)},cancelFlyoutClose:()=>clearTimeout(g.current)},children:(0,t.jsxs)(Z,{children:[(0,t.jsxs)(D,{children:[e&&(0,t.jsx)(G,{children:(0,t.jsx)(Y,{onClick:h,title:d?"Expand sidebar":"Collapse sidebar",children:(0,t.jsxs)("svg",{width:17,height:17,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),(0,t.jsx)("path",{d:"M9 3v18"})]})})}),(0,t.jsx)(ea,{}),l&&(0,t.jsx)(_,{children:l}),n&&(0,t.jsx)(U,{children:n})]}),(0,t.jsxs)(J,{children:[null!=e&&(0,t.jsx)(X,{collapsed:d,children:(0,t.jsx)(Q,{children:e})}),(0,t.jsx)(ee,{children:a})]}),p&&(0,t.jsx)(i().Suspense,{fallback:null,children:(0,t.jsx)(f,{activeId:s})})]})})}var er=o(4971);let ei=l().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,en=l().div`
  overflow: hidden;
`,el=l().div`
  padding-left: ${s.w4.spacing.md};
`,es=l().div`
  display: flex;
  flex-direction: column;
`,ed=l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${s.w4.spacing.sm} ${s.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":s.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${s.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${s.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${s.w4.colors.sidebarText};
    background: ${s.w4.colors.sidebarHover};
  }
`,ec=l().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,ep=l().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,em=l().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${s.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,eg=l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${s.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?s.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?s.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?s.w4.colors.sidebarActive:s.w4.colors.sidebarText};
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${s.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${s.w4.borderRadius.md} ${s.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;
  outline: none;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${s.w4.colors.mainText};
  }
  &:focus { outline: none; }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: -2px;
  }
`;function eh({iconKey:e,size:a=16}){let o=e?er.X[e]:void 0;return o?(0,t.jsx)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,dangerouslySetInnerHTML:{__html:o}}):e?(0,t.jsx)("span",{style:{fontSize:a,lineHeight:1,display:"flex",alignItems:"center"},children:e}):(0,t.jsxs)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:[(0,t.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,t.jsx)("polyline",{points:"14 2 14 8 20 8"})]})}function ef({entry:e,activeId:a,onSelect:o}){let[i,n]=(0,r.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:d,cancelFlyoutClose:c}=(0,C.c)();return e.children&&e.children.length>0?(0,t.jsxs)(es,{children:[(0,t.jsxs)(ed,{collapsed:l,onClick:()=>{l||n(e=>!e)},onMouseEnter:l?a=>{s(e,a.currentTarget.getBoundingClientRect().top,o)}:void 0,onMouseLeave:l?d:void 0,children:[(0,t.jsxs)(ec,{collapsed:l,children:[(0,t.jsx)(eh,{iconKey:e.icon,size:16}),(0,t.jsx)(ep,{collapsed:l,children:e.name})]}),(0,t.jsx)(em,{open:i,collapsed:l,children:(0,t.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M9 6l6 6-6 6"})})})]}),(0,t.jsx)(ei,{open:i&&!l,children:(0,t.jsx)(en,{children:(0,t.jsx)(el,{children:e.children.map(e=>(0,t.jsx)(ef,{entry:e,activeId:a,onSelect:o},e.id))})})})]}):(0,t.jsxs)(eg,{active:a===e.id,collapsed:l,onClick:()=>o(e),onMouseEnter:l?a=>{let t=a.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},t.top,o)}:void 0,onMouseLeave:l?d:void 0,children:[(0,t.jsx)(eh,{iconKey:e.icon,size:15}),(0,t.jsx)(ep,{collapsed:l,children:e.name})]})}function eu({entries:e,activeId:a,onSelect:o}){return(0,t.jsx)("div",{children:e.map(e=>(0,t.jsx)(ef,{entry:e,activeId:a,onSelect:o},e.id))})}o(2787),l().div`
  padding: ${s.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,l().section`
  scroll-margin-top: ${s.w4.spacing.lg};
`,l().div`
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.lg};
`,l().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${s.w4.spacing.xl};

  @media (max-width: ${s.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,l().div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${s.w4.colors.mainBg};
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainText};
  overflow: hidden;
`,l().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  padding-left: max(${s.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${s.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${s.w4.spacing.sm};
  z-index: 100;
`,l().button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${s.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${s.w4.colors.accent}; }
`,l().span`
  color: ${s.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,l().div`
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${s.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,l().span`
  font-weight: 400;
  color: ${s.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,l().div`
  flex: 1;
`},1592(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"e1-greetings","name":"Greetings","icon":"hand","file":"english/en/year1/greetings.md"},{"id":"e1-numbers","name":"Numbers 1–10","icon":"hash","file":"english/en/year1/numbers.md"},{"id":"e1-colors","name":"Colors","icon":"palette","file":"english/en/year1/colors.md"},{"id":"e1-animals","name":"Animals","icon":"feather","file":"english/en/year1/animals.md"},{"id":"e1-family","name":"Family","icon":"heart","file":"english/en/year1/family.md"},{"id":"e1-classroom","name":"Classroom","icon":"map","file":"english/en/year1/classroom.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"e2-food","name":"Food","icon":"apple","file":"english/en/year2/food.md"},{"id":"e2-body","name":"Body Parts","icon":"activity","file":"english/en/year2/body.md"},{"id":"e2-weather","name":"Weather","icon":"cloud","file":"english/en/year2/weather.md"},{"id":"e2-days","name":"Days & Months","icon":"calendar","file":"english/en/year2/days.md"},{"id":"e2-clothes","name":"Clothes","icon":"shirt","file":"english/en/year2/clothes.md"},{"id":"e2-house","name":"The House","icon":"home","file":"english/en/year2/house.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"e3-routines","name":"Daily Routines","icon":"clock","file":"english/en/year3/routines.md"},{"id":"e3-sports","name":"Sports","icon":"trophy","file":"english/en/year3/sports.md"},{"id":"e3-nature","name":"Nature","icon":"leaf","file":"english/en/year3/nature.md"},{"id":"e3-directions","name":"Directions","icon":"compass","file":"english/en/year3/directions.md"},{"id":"e3-time","name":"Telling Time","icon":"watch","file":"english/en/year3/time.md"},{"id":"e3-jobs","name":"Jobs","icon":"briefcase","file":"english/en/year3/jobs.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"e4-past","name":"Simple Past","icon":"clock","file":"english/en/year4/past.md"},{"id":"e4-comparatives","name":"Comparatives","icon":"bar-chart-2","file":"english/en/year4/comparatives.md"},{"id":"e4-travel","name":"Travel","icon":"plane","file":"english/en/year4/travel.md"},{"id":"e4-media","name":"Media & Technology","icon":"monitor","file":"english/en/year4/media.md"},{"id":"e4-health","name":"Health","icon":"heart","file":"english/en/year4/health.md"},{"id":"e4-environment","name":"Environment","icon":"globe","file":"english/en/year4/environment.md"}]},{"id":"year5","name":"Year 5","icon":"⑤","defaultOpen":false,"children":[{"id":"e5-future","name":"Simple Future","icon":"arrow-right","file":"english/en/year5/future.md"},{"id":"e5-conditionals","name":"Conditionals","icon":"git-branch","file":"english/en/year5/conditionals.md"},{"id":"e5-culture","name":"Culture","icon":"landmark","file":"english/en/year5/culture.md"},{"id":"e5-technology","name":"Technology","icon":"cpu","file":"english/en/year5/technology.md"},{"id":"e5-debate","name":"Debate & Opinion","icon":"message-circle","file":"english/en/year5/debate.md"},{"id":"e5-writing","name":"Creative Writing","icon":"pen-tool","file":"english/en/year5/writing.md"}]},{"id":"resources","name":"Resources","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-eng-vocab","name":"Essential Vocabulary","icon":"list","file":"english/en/resources/vocabulary.md"},{"id":"res-eng-verbs","name":"Verb Tables","icon":"zap","file":"english/en/resources/verbs.md"},{"id":"res-eng-phrases","name":"Useful Phrases","icon":"message-square","file":"english/en/resources/phrases.md"},{"id":"res-eng-pronunciation","name":"Pronunciation Guide","icon":"volume-2","file":"english/en/resources/pronunciation.md"}]}]}')},3547(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.\xba Ano","icon":"①","defaultOpen":false,"children":[{"id":"e1-greetings","name":"Cumprimentos","icon":"hand","file":"english/pt/year1/greetings.md"},{"id":"e1-numbers","name":"N\xfameros 1–10","icon":"hash","file":"english/pt/year1/numbers.md"},{"id":"e1-colors","name":"Cores","icon":"palette","file":"english/pt/year1/colors.md"},{"id":"e1-animals","name":"Animais","icon":"feather","file":"english/pt/year1/animals.md"},{"id":"e1-family","name":"Fam\xedlia","icon":"heart","file":"english/pt/year1/family.md"},{"id":"e1-classroom","name":"Sala de Aula","icon":"map","file":"english/pt/year1/classroom.md"}]},{"id":"year2","name":"2.\xba Ano","icon":"②","defaultOpen":false,"children":[{"id":"e2-food","name":"Comida","icon":"apple","file":"english/pt/year2/food.md"},{"id":"e2-body","name":"Corpo Humano","icon":"activity","file":"english/pt/year2/body.md"},{"id":"e2-weather","name":"Tempo e Clima","icon":"cloud","file":"english/pt/year2/weather.md"},{"id":"e2-days","name":"Dias e Meses","icon":"calendar","file":"english/pt/year2/days.md"},{"id":"e2-clothes","name":"Roupa","icon":"shirt","file":"english/pt/year2/clothes.md"},{"id":"e2-house","name":"A Casa","icon":"home","file":"english/pt/year2/house.md"}]},{"id":"year3","name":"3.\xba Ano","icon":"③","defaultOpen":false,"children":[{"id":"e3-routines","name":"Rotinas Di\xe1rias","icon":"clock","file":"english/pt/year3/routines.md"},{"id":"e3-sports","name":"Desportos","icon":"trophy","file":"english/pt/year3/sports.md"},{"id":"e3-nature","name":"Natureza","icon":"leaf","file":"english/pt/year3/nature.md"},{"id":"e3-directions","name":"Dire\xe7\xf5es","icon":"compass","file":"english/pt/year3/directions.md"},{"id":"e3-time","name":"As Horas","icon":"watch","file":"english/pt/year3/time.md"},{"id":"e3-jobs","name":"Profiss\xf5es","icon":"briefcase","file":"english/pt/year3/jobs.md"}]},{"id":"year4","name":"4.\xba Ano","icon":"④","defaultOpen":false,"children":[{"id":"e4-past","name":"Passado Simples","icon":"clock","file":"english/pt/year4/past.md"},{"id":"e4-comparatives","name":"Comparativos","icon":"bar-chart-2","file":"english/pt/year4/comparatives.md"},{"id":"e4-travel","name":"Viagens","icon":"plane","file":"english/pt/year4/travel.md"},{"id":"e4-media","name":"M\xe9dia e Tecnologia","icon":"monitor","file":"english/pt/year4/media.md"},{"id":"e4-health","name":"Sa\xfade","icon":"heart","file":"english/pt/year4/health.md"},{"id":"e4-environment","name":"Ambiente","icon":"globe","file":"english/pt/year4/environment.md"}]},{"id":"year5","name":"5.\xba Ano","icon":"⑤","defaultOpen":false,"children":[{"id":"e5-future","name":"Futuro Simples","icon":"arrow-right","file":"english/pt/year5/future.md"},{"id":"e5-conditionals","name":"Condicionais","icon":"git-branch","file":"english/pt/year5/conditionals.md"},{"id":"e5-culture","name":"Cultura","icon":"landmark","file":"english/pt/year5/culture.md"},{"id":"e5-technology","name":"Tecnologia","icon":"cpu","file":"english/pt/year5/technology.md"},{"id":"e5-debate","name":"Debate e Opini\xe3o","icon":"message-circle","file":"english/pt/year5/debate.md"},{"id":"e5-writing","name":"Escrita Criativa","icon":"pen-tool","file":"english/pt/year5/writing.md"}]},{"id":"resources","name":"Recursos","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-eng-vocab","name":"Vocabul\xe1rio Essencial","icon":"list","file":"english/pt/resources/vocabulario.md"},{"id":"res-eng-verbs","name":"Tabela de Verbos","icon":"zap","file":"english/pt/resources/verbos.md"},{"id":"res-eng-phrases","name":"Frases \xdateis","icon":"message-square","file":"english/pt/resources/frases.md"},{"id":"res-eng-pronunciation","name":"Guia de Pron\xfancia","icon":"volume-2","file":"english/pt/resources/pronuncia.md"}]}]}')},8844(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-numeros","name":"Numbers to 20","icon":"hash","file":"math/en/year1/numbers.md"},{"id":"y1-adicao","name":"Addition","icon":"plus","file":"math/en/year1/addition.md"},{"id":"y1-subtracao","name":"Subtraction","icon":"minus","file":"math/en/year1/subtraction.md"},{"id":"y1-geometria","name":"Geometry","icon":"triangle","file":"math/en/year1/geometry.md"},{"id":"y1-medidas","name":"Measurements","icon":"ruler","file":"math/en/year1/measures.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-numeros","name":"Numbers to 100","icon":"hash","file":"math/en/year2/numbers.md"},{"id":"y2-adicao","name":"Addition with Carrying","icon":"plus","file":"math/en/year2/addition.md"},{"id":"y2-subtracao","name":"Subtraction with Borrowing","icon":"minus","file":"math/en/year2/subtraction.md"},{"id":"y2-tabuadas","name":"Times Tables \xd7 2, \xd7 5, \xd7 10","icon":"x","file":"math/en/year2/multiplication.md"},{"id":"y2-geometria","name":"Geometry","icon":"triangle","file":"math/en/year2/geometry.md"},{"id":"y2-medidas","name":"Measurements","icon":"ruler","file":"math/en/year2/measures.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-numeros","name":"Numbers to 1000","icon":"hash","file":"math/en/year3/numbers.md"},{"id":"y3-multiplicacao","name":"Times Tables \xd7 3 to \xd7 9","icon":"x","file":"math/en/year3/multiplication.md"},{"id":"y3-divisao","name":"Division","icon":"slash","file":"math/en/year3/division.md"},{"id":"y3-fracoes","name":"Fractions","icon":"pie-chart","file":"math/en/year3/fractions.md"},{"id":"y3-geometria","name":"Geometry","icon":"triangle","file":"math/en/year3/geometry.md"},{"id":"y3-medidas","name":"Measurements","icon":"ruler","file":"math/en/year3/measures.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-numeros","name":"Numbers to 1 000 000","icon":"hash","file":"math/en/year4/numbers.md"},{"id":"y4-multiplicacao","name":"Multiplication","icon":"x","file":"math/en/year4/multiplication.md"},{"id":"y4-divisao","name":"Division with Remainder","icon":"slash","file":"math/en/year4/division.md"},{"id":"y4-decimais","name":"Decimal Numbers","icon":"circle-dot","file":"math/en/year4/decimals.md"},{"id":"y4-geometria","name":"Geometry","icon":"triangle","file":"math/en/year4/geometry.md"},{"id":"y4-medidas","name":"Measurements","icon":"ruler","file":"math/en/year4/measures.md"},{"id":"y4-dados","name":"Data Handling","icon":"bar-chart-2","file":"math/en/year4/data.md"}]},{"id":"resources","name":"Resources","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-tabuadas","name":"Times Tables","icon":"grid","file":"math/en/resources/timestables.md"},{"id":"res-formas","name":"Geometric Shapes","icon":"hexagon","file":"math/en/resources/shapes.md"},{"id":"res-areas","name":"Areas & Perimeters","icon":"square","file":"math/en/resources/areas.md"},{"id":"res-unidades","name":"Units of Measurement","icon":"ruler","file":"math/en/resources/units.md"},{"id":"res-romanos","name":"Roman Numerals","icon":"landmark","file":"math/en/resources/roman.md"},{"id":"res-relogio","name":"Interactive Clock","icon":"clock","file":"math/en/resources/clock.md"}]}]}')},1223(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.\xba Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-numeros","name":"N\xfameros at\xe9 20","icon":"hash","file":"math/pt/year1/numbers.md"},{"id":"y1-adicao","name":"Adi\xe7\xe3o","icon":"plus","file":"math/pt/year1/addition.md"},{"id":"y1-subtracao","name":"Subtra\xe7\xe3o","icon":"minus","file":"math/pt/year1/subtraction.md"},{"id":"y1-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year1/geometria.md"},{"id":"y1-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year1/medidas.md"}]},{"id":"year2","name":"2.\xba Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-numeros","name":"N\xfameros at\xe9 100","icon":"hash","file":"math/pt/year2/numbers.md"},{"id":"y2-adicao","name":"Adi\xe7\xe3o com Transporte","icon":"plus","file":"math/pt/year2/addition.md"},{"id":"y2-subtracao","name":"Subtra\xe7\xe3o com Empr\xe9stimo","icon":"minus","file":"math/pt/year2/subtraction.md"},{"id":"y2-tabuadas","name":"Tabuadas \xd7 2, \xd7 5, \xd7 10","icon":"x","file":"math/pt/year2/multiplication.md"},{"id":"y2-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year2/geometria.md"},{"id":"y2-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year2/medidas.md"}]},{"id":"year3","name":"3.\xba Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-numeros","name":"N\xfameros at\xe9 1000","icon":"hash","file":"math/pt/year3/numbers.md"},{"id":"y3-multiplicacao","name":"Tabuadas \xd7 3 ao \xd7 9","icon":"x","file":"math/pt/year3/multiplication.md"},{"id":"y3-divisao","name":"Divis\xe3o","icon":"slash","file":"math/pt/year3/division.md"},{"id":"y3-fracoes","name":"Fra\xe7\xf5es","icon":"pie-chart","file":"math/pt/year3/fractions.md"},{"id":"y3-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year3/geometria.md"},{"id":"y3-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year3/medidas.md"}]},{"id":"year4","name":"4.\xba Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-numeros","name":"N\xfameros at\xe9 1 000 000","icon":"hash","file":"math/pt/year4/numbers.md"},{"id":"y4-multiplicacao","name":"Multiplica\xe7\xe3o","icon":"x","file":"math/pt/year4/multiplication.md"},{"id":"y4-divisao","name":"Divis\xe3o com Resto","icon":"slash","file":"math/pt/year4/division.md"},{"id":"y4-decimais","name":"N\xfameros Decimais","icon":"circle-dot","file":"math/pt/year4/decimals.md"},{"id":"y4-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year4/geometria.md"},{"id":"y4-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year4/medidas.md"},{"id":"y4-dados","name":"Tratamento de Dados","icon":"bar-chart-2","file":"math/pt/year4/dados.md"}]},{"id":"resources","name":"Recursos","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-tabuadas","name":"Tabuadas","icon":"grid","file":"math/pt/resources/tabuadas.md"},{"id":"res-formas","name":"Formas Geom\xe9tricas","icon":"hexagon","file":"math/pt/resources/formas.md"},{"id":"res-areas","name":"\xc1reas e Per\xedmetros","icon":"square","file":"math/pt/resources/areas.md"},{"id":"res-unidades","name":"Unidades de Medida","icon":"ruler","file":"math/pt/resources/unidades.md"},{"id":"res-romanos","name":"N\xfameros Romanos","icon":"landmark","file":"math/pt/resources/romanos.md"},{"id":"res-relogio","name":"Rel\xf3gio Interativo","icon":"clock","file":"math/pt/resources/relogio.md"}]}]}')},7920(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year1/reading.md"},{"id":"y1-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year1/grammar.md"},{"id":"y1-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year1/vocabulary.md"},{"id":"y1-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year1/spelling.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year2/reading.md"},{"id":"y2-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year2/grammar.md"},{"id":"y2-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year2/texttypes.md"},{"id":"y2-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year2/vocabulary.md"},{"id":"y2-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year2/spelling.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year3/reading.md"},{"id":"y3-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year3/grammar.md"},{"id":"y3-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year3/texttypes.md"},{"id":"y3-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year3/vocabulary.md"},{"id":"y3-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year3/spelling.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year4/reading.md"},{"id":"y4-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year4/grammar.md"},{"id":"y4-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year4/texttypes.md"},{"id":"y4-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year4/vocabulary.md"},{"id":"y4-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year4/spelling.md"}]},{"id":"resources","name":"Resources","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-alfabeto","name":"Alphabet & Sounds","icon":"a-large-small","file":"portuguese/en/resources/alphabet.md"},{"id":"res-pontuacao","name":"Punctuation Marks","icon":"circle-dot","file":"portuguese/en/resources/punctuation.md"},{"id":"res-classes","name":"Word Classes","icon":"layers","file":"portuguese/en/resources/wordclasses.md"},{"id":"res-verbos","name":"Verb Conjugation","icon":"zap","file":"portuguese/en/resources/verbs.md"}]}]}')},940(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.\xba Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year1/leitura.md"},{"id":"y1-gramatica","name":"Gram\xe1tica","icon":"type","file":"portuguese/pt/year1/gramatica.md"},{"id":"y1-vocabulario","name":"Vocabul\xe1rio","icon":"list","file":"portuguese/pt/year1/vocabulario.md"},{"id":"y1-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year1/ortografia.md"}]},{"id":"year2","name":"2.\xba Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year2/leitura.md"},{"id":"y2-gramatica","name":"Gram\xe1tica","icon":"type","file":"portuguese/pt/year2/gramatica.md"},{"id":"y2-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year2/texto.md"},{"id":"y2-vocabulario","name":"Vocabul\xe1rio","icon":"list","file":"portuguese/pt/year2/vocabulario.md"},{"id":"y2-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year2/ortografia.md"}]},{"id":"year3","name":"3.\xba Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year3/leitura.md"},{"id":"y3-gramatica","name":"Gram\xe1tica","icon":"type","file":"portuguese/pt/year3/gramatica.md"},{"id":"y3-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year3/texto.md"},{"id":"y3-vocabulario","name":"Vocabul\xe1rio","icon":"list","file":"portuguese/pt/year3/vocabulario.md"},{"id":"y3-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year3/ortografia.md"}]},{"id":"year4","name":"4.\xba Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year4/leitura.md"},{"id":"y4-gramatica","name":"Gram\xe1tica","icon":"type","file":"portuguese/pt/year4/gramatica.md"},{"id":"y4-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year4/texto.md"},{"id":"y4-vocabulario","name":"Vocabul\xe1rio","icon":"list","file":"portuguese/pt/year4/vocabulario.md"},{"id":"y4-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year4/ortografia.md"}]},{"id":"resources","name":"Recursos","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-alfabeto","name":"Alfabeto e Sons","icon":"a-large-small","file":"portuguese/pt/resources/alfabeto.md"},{"id":"res-pontuacao","name":"Sinais de Pontua\xe7\xe3o","icon":"circle-dot","file":"portuguese/pt/resources/pontuacao.md"},{"id":"res-classes","name":"Classes de Palavras","icon":"layers","file":"portuguese/pt/resources/classes.md"},{"id":"res-verbos","name":"Verbos — Conjuga\xe7\xe3o","icon":"zap","file":"portuguese/pt/resources/verbos.md"}]}]}')},8050(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-corpo","name":"My Body","icon":"activity","file":"science/en/year1/body.md"},{"id":"y1-familia","name":"My Family","icon":"heart","file":"science/en/year1/family.md"},{"id":"y1-escola","name":"My School","icon":"map","file":"science/en/year1/school.md"},{"id":"y1-seres-vivos","name":"Living Things","icon":"feather","file":"science/en/year1/livingthings.md"},{"id":"y1-estacoes","name":"Seasons of the Year","icon":"sun","file":"science/en/year1/seasons.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-corpo","name":"The Human Body","icon":"activity","file":"science/en/year2/body.md"},{"id":"y2-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year2/health.md"},{"id":"y2-animais","name":"Animals","icon":"feather","file":"science/en/year2/animals.md"},{"id":"y2-plantas","name":"Plants","icon":"leaf","file":"science/en/year2/plants.md"},{"id":"y2-transportes","name":"Transport","icon":"truck","file":"science/en/year2/transport.md"},{"id":"y2-orientacao","name":"Orientation & Maps","icon":"compass","file":"science/en/year2/orientation.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-corpo","name":"The Human Body","icon":"activity","file":"science/en/year3/body.md"},{"id":"y3-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year3/health.md"},{"id":"y3-animais","name":"Animals","icon":"feather","file":"science/en/year3/animals.md"},{"id":"y3-plantas","name":"Plants","icon":"leaf","file":"science/en/year3/plants.md"},{"id":"y3-portugal","name":"Portugal","icon":"map","file":"science/en/year3/portugal.md"},{"id":"y3-rochas","name":"Rocks & Soil","icon":"mountain","file":"science/en/year3/rocks.md"},{"id":"y3-astros","name":"Space & Stars","icon":"star","file":"science/en/year3/space.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-corpo","name":"The Human Body","icon":"activity","file":"science/en/year4/body.md"},{"id":"y4-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year4/health.md"},{"id":"y4-animais","name":"Animals","icon":"feather","file":"science/en/year4/animals.md"},{"id":"y4-plantas","name":"Plants","icon":"leaf","file":"science/en/year4/plants.md"},{"id":"y4-portugal","name":"Portugal","icon":"map","file":"science/en/year4/portugal.md"},{"id":"y4-historia","name":"History of Portugal","icon":"landmark","file":"science/en/year4/history.md"},{"id":"y4-economia","name":"Economic Activities","icon":"briefcase","file":"science/en/year4/economy.md"},{"id":"y4-rios","name":"Rivers & Mountains","icon":"waves","file":"science/en/year4/rivers.md"}]},{"id":"resources","name":"Resources","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-corpo","name":"The Human Body","icon":"activity","file":"science/en/resources/body.md"},{"id":"res-agua","name":"The Water Cycle","icon":"droplets","file":"science/en/resources/water.md"},{"id":"res-solar","name":"The Solar System","icon":"sun","file":"science/en/resources/solar.md"},{"id":"res-animais","name":"Animal Classification","icon":"feather","file":"science/en/resources/animals.md"}]}]}')},8585(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.\xba Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-corpo","name":"O Meu Corpo","icon":"activity","file":"science/pt/year1/corpo.md"},{"id":"y1-familia","name":"A Minha Fam\xedlia","icon":"heart","file":"science/pt/year1/familia.md"},{"id":"y1-escola","name":"A Minha Escola","icon":"map","file":"science/pt/year1/escola.md"},{"id":"y1-seres-vivos","name":"Os Seres Vivos","icon":"feather","file":"science/pt/year1/seresvivos.md"},{"id":"y1-estacoes","name":"Esta\xe7\xf5es do Ano","icon":"sun","file":"science/pt/year1/estacoes.md"}]},{"id":"year2","name":"2.\xba Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year2/corpo.md"},{"id":"y2-saude","name":"Sa\xfade e Higiene","icon":"heart","file":"science/pt/year2/saude.md"},{"id":"y2-animais","name":"Os Animais","icon":"feather","file":"science/pt/year2/animais.md"},{"id":"y2-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year2/plantas.md"},{"id":"y2-transportes","name":"Meios de Transporte","icon":"truck","file":"science/pt/year2/transportes.md"},{"id":"y2-orientacao","name":"Orienta\xe7\xe3o e Mapas","icon":"compass","file":"science/pt/year2/orientacao.md"}]},{"id":"year3","name":"3.\xba Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year3/corpo.md"},{"id":"y3-saude","name":"Sa\xfade e Higiene","icon":"heart","file":"science/pt/year3/saude.md"},{"id":"y3-animais","name":"Os Animais","icon":"feather","file":"science/pt/year3/animais.md"},{"id":"y3-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year3/plantas.md"},{"id":"y3-portugal","name":"Portugal","icon":"map","file":"science/pt/year3/portugal.md"},{"id":"y3-rochas","name":"Rochas e Solo","icon":"mountain","file":"science/pt/year3/rochas.md"},{"id":"y3-astros","name":"Os Astros","icon":"star","file":"science/pt/year3/astros.md"}]},{"id":"year4","name":"4.\xba Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year4/corpo.md"},{"id":"y4-saude","name":"Sa\xfade e Higiene","icon":"heart","file":"science/pt/year4/saude.md"},{"id":"y4-animais","name":"Os Animais","icon":"feather","file":"science/pt/year4/animais.md"},{"id":"y4-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year4/plantas.md"},{"id":"y4-portugal","name":"Portugal","icon":"map","file":"science/pt/year4/portugal.md"},{"id":"y4-historia","name":"Hist\xf3ria de Portugal","icon":"landmark","file":"science/pt/year4/historia.md"},{"id":"y4-economia","name":"Atividades Econ\xf3micas","icon":"briefcase","file":"science/pt/year4/economia.md"},{"id":"y4-rios","name":"Rios e Serras","icon":"waves","file":"science/pt/year4/rios.md"}]},{"id":"resources","name":"Recursos","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/resources/corpo.md"},{"id":"res-agua","name":"O Ciclo da \xc1gua","icon":"droplets","file":"science/pt/resources/agua.md"},{"id":"res-solar","name":"O Sistema Solar","icon":"sun","file":"science/pt/resources/solar.md"},{"id":"res-animais","name":"Classifica\xe7\xe3o dos Animais","icon":"feather","file":"science/pt/resources/animais.md"}]}]}')}}]);