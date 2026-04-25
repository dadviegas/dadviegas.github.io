"use strict";(self.webpackChunk_atlantis_school=self.webpackChunk_atlantis_school||[]).push([["9297"],{49685(e,a,o){o.d(a,{WO:()=>aI});var i=o(65723),n=o(37991),t=o(89874),r=o(36859),l=o.n(r),s=o(17681),c=o(69753),d=o(88641),m=o(41783);function p(e){try{return JSON.parse(localStorage.getItem(e)??"[]")}catch{return[]}}let g=l().nav`padding: ${t.w4.spacing.sm} 0;`,u=l().div`
  border-bottom: 1px solid ${t.w4.colors.border}60;
  margin-bottom: 2px;
`,f=l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${t.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${t.w4.colors.sidebarText}; }
`,y=l().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,h=l().span`
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,x=l().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,b=l().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,w=l().div`overflow: hidden;`,$=l().div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,z=l().button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${t.w4.spacing.md};
  background: ${({active:e})=>e?t.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?t.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?t.w4.colors.sidebarActive:t.w4.colors.sidebarText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${t.w4.colors.sidebarHover}; }
`,v=l().button`
  opacity: ${({active:e})=>+!!e};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":t.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;function k({title:e,icon:a,entries:o,activeId:t,onSelect:r,favorites:l,onToggleFav:s,collapsed:m}){let[p,g]=(0,n.useState)(!1);return o.length?(0,i.jsxs)(u,{children:[(0,i.jsxs)(f,{collapsed:m,onClick:()=>{m||g(e=>!e)},children:[(0,i.jsxs)(y,{collapsed:m,children:[a,(0,i.jsx)(h,{collapsed:m,children:e})]}),(0,i.jsx)(x,{open:p,collapsed:m,children:(0,i.jsx)(c.A,{size:12})})]}),(0,i.jsx)(b,{open:p&&!m,children:(0,i.jsx)(w,{children:o.map(e=>{let a=l.some(a=>a.id===e.id);return(0,i.jsxs)($,{children:[(0,i.jsx)(z,{active:t===e.id,onClick:()=>r(e),children:e.name}),(0,i.jsx)(v,{active:a,title:a?"Remover dos favoritos":"Adicionar aos favoritos",onClick:a=>{a.stopPropagation(),s(e)},children:(0,i.jsx)(d.A,{size:12,fill:a?"currentColor":"none"})})]},e.id)})})})]}):null}function A({config:e,activeId:a,onSelect:o,hashPrefix:r}){let l=`atlantis-recent-${r}`,s=`atlantis-fav-${r}`,{collapsed:c}=(0,t.cL)(),[u,f]=(0,n.useState)(()=>p(l)),[y,h]=(0,n.useState)(()=>p(s)),x=(0,n.useCallback)(e=>{e.file&&f(a=>{let o;return o=[e,...a.filter(a=>a.id!==e.id)].slice(0,10),localStorage.setItem(l,JSON.stringify(o)),o}),o(e)},[o,l]),b=(0,n.useCallback)(e=>{h(a=>{let o;return o=a.some(a=>a.id===e.id)?a.filter(a=>a.id!==e.id):[...a,e],localStorage.setItem(s,JSON.stringify(o)),o})},[s]);return(0,i.jsxs)(g,{children:[(0,i.jsx)(k,{title:"Recentes",icon:(0,i.jsx)(m.A,{size:13}),entries:u,activeId:a,onSelect:x,favorites:y,onToggleFav:b,collapsed:c}),(0,i.jsx)(k,{title:"Favoritos",icon:(0,i.jsx)(d.A,{size:13}),entries:y,activeId:a,onSelect:x,favorites:y,onToggleFav:b,collapsed:c}),(0,i.jsx)(t.CD,{entries:e.entries,activeId:a,onSelect:x})]})}var j=o(11352),S=o(76710),M=o(66225),T=o(302),C=o(73639),B=o(8411),E=o(4311),F=o(72799);let R="#7fb77e",L=(0,F.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,P=l().div`
  position: relative;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.lg};
  padding: ${t.w4.spacing.xl} ${t.w4.spacing.lg} ${t.w4.spacing.lg};
  margin: ${t.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  animation: ${L} 0.25s ease both;
  transition:
    border-color ${t.w4.transitions.base},
    transform ${t.w4.transitions.base},
    box-shadow ${t.w4.transitions.base};

  /* Signature left accent bar — full-height, inset like a ribbon */
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0;
    width: 2px;
    border-radius: 2px;
    background: ${R};
    box-shadow: 0 0 12px ${R}55;
  }

  /* Uppercase mono eyebrow tag — reads "DIAGRAM · mermaid" */
  &::after {
    content: '◉ DIAGRAM';
    position: absolute;
    top: 10px;
    right: 14px;
    font-family: ${t.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    color: ${R};
    opacity: 0.7;
    pointer-events: none;
  }

  &:hover {
    border-color: ${t.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: ${t.w4.elevation.sm};
  }

  svg { max-width: 100%; height: auto; }
  svg text { font-variant-numeric: tabular-nums; }
`,O=l().pre`
  background: ${t.w4.colors.codeBg};
  border: 1px solid ${t.w4.colors.codeBorder};
  border-radius: ${t.w4.borderRadius.md};
  padding: ${t.w4.spacing.md};
  margin: ${t.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${t.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,N=!1,D=/^(?:---[\s\S]*?---\s*)?(?:graph|flowchart|sequenceDiagram|classDiagram|stateDiagram(?:-v2)?|erDiagram|pie|gantt|journey|mindmap|gitGraph|sankey(?:-beta)?|quadrantChart|requirementDiagram|timeline|xychart-beta|block-beta|C4Context|C4Container|C4Component|C4Dynamic|C4Deployment)\b/;function I({code:e}){let[a,t]=(0,n.useState)(""),[r,l]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{let a=!1;l(!1),t("");let i=e.trim();if(!i)return void l(!0);let n=i.split(/\r?\n/)[0]?.trim()??"";return D.test(n)?((async()=>{try{let e=(await o.e("6087").then(o.bind(o,29738))).default;if(!N){let a="#141820",o="#1c2332",i="#343c4f",n="#e8edf5",t="#9aa5b8",r="#7fb77e",l="#6aa8d8",s="#8b7bff",c="#e89a5c",d="#f87171";e.initialize({startOnLoad:!1,theme:"base",securityLevel:"loose",themeVariables:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",background:a,mainBkg:o,primaryColor:r,primaryTextColor:n,primaryBorderColor:r,secondaryColor:s,secondaryTextColor:n,secondaryBorderColor:s,tertiaryColor:l,tertiaryTextColor:n,tertiaryBorderColor:l,lineColor:t,textColor:n,nodeBorder:i,clusterBkg:a,clusterBorder:i,edgeLabelBackground:o,labelBackground:o,labelBorder:i,relationLabelBackground:o,relationLabelColor:n,pie1:r,pie2:s,pie3:l,pie4:c,pie5:"#ff6fa9",pie6:"#2dd4bf",pie7:d,pie8:r,pieStrokeColor:a,pieStrokeWidth:"2px",pieTitleTextSize:"18px",pieSectionTextSize:"13px",pieLegendTextSize:"13px",actorBkg:r,actorBorder:r,actorTextColor:a,signalColor:n,signalTextColor:n,labelBoxBkgColor:o,labelBoxBorderColor:i,labelTextColor:n,loopTextColor:n,noteBkgColor:c,noteBorderColor:c,noteTextColor:a,stateBkg:o,altBackground:a,attributeBackgroundColorOdd:o,attributeBackgroundColorEven:a,rowOdd:o,rowEven:a,gridColor:i,sectionBkgColor:o,sectionBkgColor2:a,taskBkgColor:s,taskTextColor:n,taskTextDarkColor:n,taskTextLightColor:n,taskTextOutsideColor:n,activeTaskBkgColor:r,activeTaskBorderColor:r,doneTaskBkgColor:t,doneTaskBorderColor:t,critBkgColor:d,critBorderColor:d}}),N=!0}let{svg:n}=await e.render(`mermaid-${"u">typeof crypto&&"function"==typeof crypto.randomUUID?crypto.randomUUID().replace(/-/g,"").slice(0,8):Math.random().toString(36).slice(2,10).padEnd(8,"0")}`,i);if(a)return;if(!n||/aria-roledescription="error"/i.test(n))return void l(!0);t(n)}catch(e){console.error("[MermaidBlock] render failed",e),a||l(!0)}})(),()=>{a=!0}):void l(!0)},[e]),r)?(0,i.jsx)(O,{children:e.trim()}):(0,i.jsx)(P,{dangerouslySetInnerHTML:{__html:a}})}let H=["#388bfd","#3fb950","#d29922","#a371f7","#f87171","#22d3ee","#fb923c","#34d399","#f472b6","#818cf8"],G=l().div`
  background: ${t.w4.colors.codeBg};
  border: 1px solid ${t.w4.colors.codeBorder};
  border-radius: ${t.w4.borderRadius.md};
  padding: ${t.w4.spacing.lg};
  margin: ${t.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,W=l().div`
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${t.w4.colors.mainText};
  margin-bottom: ${t.w4.spacing.md};
  text-align: center;
`,Y=l().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${t.w4.spacing.sm} ${t.w4.spacing.md};
  margin-top: ${t.w4.spacing.md};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
`,V=l().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,K=l().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,_=l().pre`
  background: ${t.w4.colors.codeBg};
  border: 1px solid ${t.w4.colors.codeBorder};
  border-radius: ${t.w4.borderRadius.md};
  padding: ${t.w4.spacing.md};
  margin: ${t.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${t.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`;function U(e){if(e<=0)return 10;let a=Math.pow(10,Math.floor(Math.log10(e)));return Math.ceil(e/a)*a}function J({labels:e,data:a,colors:o}){let n=340,r=176,l=U(Math.max(...a,1)),s=Math.min(40,n/e.length*.6),c=n/e.length,d=Array.from({length:6},(e,a)=>l/5*a);return(0,i.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[d.map((e,a)=>{let o=16+r-e/l*r;return(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:44,y1:o,x2:384,y2:o,stroke:t.w4.colors.border,strokeWidth:.5,strokeDasharray:0===a?"none":"3,3"}),(0,i.jsx)("text",{x:38,y:o+4,fill:t.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:t.w4.typography.fontFamily,children:Math.round(e)})]},a)}),a.map((a,n)=>{let d=44+c*n+c/2-s/2,m=a/l*r,p=16+r-m,g=o[n%o.length];return(0,i.jsxs)("g",{children:[(0,i.jsxs)("rect",{x:d,y:p,width:s,height:m,rx:3,fill:g,opacity:.85,children:[(0,i.jsx)("animate",{attributeName:"height",from:"0",to:m,dur:"0.5s",fill:"freeze"}),(0,i.jsx)("animate",{attributeName:"y",from:16+r,to:p,dur:"0.5s",fill:"freeze"})]}),(0,i.jsx)("text",{x:d+s/2,y:p-4,fill:t.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:t.w4.typography.fontFamily,children:a}),(0,i.jsx)("text",{x:44+c*n+c/2,y:208,fill:t.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:t.w4.typography.fontFamily,children:e[n].length>8?e[n].slice(0,7)+"…":e[n]})]},n)})]})}function q({labels:e,data:a,colors:o}){let n=a.reduce((e,a)=>e+a,0)||1,r=-Math.PI/2,l=a.map((e,a)=>{let l=e/n*Math.PI*2,s=r,c=r+=l,d=120+90*Math.cos(s),m=120+90*Math.sin(s),p=120+90*Math.cos(c),g=120+90*Math.sin(c),u=+(l>Math.PI),f=s+l/2,y=120+58.5*Math.cos(f),h=120+58.5*Math.sin(f),x=Math.round(e/n*100);return(0,i.jsxs)("g",{children:[(0,i.jsx)("path",{d:`M 120 120 L ${d} ${m} A 90 90 0 ${u} 1 ${p} ${g} Z`,fill:o[a%o.length],stroke:t.w4.colors.codeBg,strokeWidth:2,opacity:.85}),x>=5&&(0,i.jsxs)("text",{x:y,y:h+4,fill:"#fff",fontSize:11,fontWeight:600,textAnchor:"middle",fontFamily:t.w4.typography.fontFamily,children:[x,"%"]})]},a)});return(0,i.jsx)("svg",{viewBox:"0 0 240 240",width:"100%",style:{maxWidth:240},children:l})}function Z({labels:e,data:a,colors:o}){let n=340,r=176,l=U(Math.max(...a,1)),s=a.length>1?n/(a.length-1):n,c=o[0],d=a.map((e,a)=>({x:44+s*a,y:16+r-e/l*r})),m=d.map((e,a)=>`${0===a?"M":"L"} ${e.x} ${e.y}`).join(" "),p=Array.from({length:6},(e,a)=>l/5*a);return(0,i.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[p.map((e,a)=>{let o=16+r-e/l*r;return(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:44,y1:o,x2:384,y2:o,stroke:t.w4.colors.border,strokeWidth:.5,strokeDasharray:0===a?"none":"3,3"}),(0,i.jsx)("text",{x:38,y:o+4,fill:t.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:t.w4.typography.fontFamily,children:Math.round(e)})]},a)}),(0,i.jsx)("path",{d:m,fill:"none",stroke:c,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),d.map((o,n)=>(0,i.jsxs)("g",{children:[(0,i.jsx)("circle",{cx:o.x,cy:o.y,r:4,fill:c,stroke:t.w4.colors.codeBg,strokeWidth:2}),(0,i.jsx)("text",{x:o.x,y:o.y-10,fill:t.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:t.w4.typography.fontFamily,children:a[n]}),(0,i.jsx)("text",{x:o.x,y:208,fill:t.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:t.w4.typography.fontFamily,children:e[n].length>8?e[n].slice(0,7)+"…":e[n]})]},n))]})}function X({code:e}){let a=(0,n.useMemo)(()=>(function(e){let a,o,i=e.trim().split("\n"),n="bar",t=[],r=[];for(let e of i){let[i,...l]=e.split(":"),s=l.join(":").trim();if(s)switch(i.trim().toLowerCase()){case"type":["bar","pie","line"].includes(s.toLowerCase())&&(n=s.toLowerCase());break;case"title":a=s;break;case"labels":t=s.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim());break;case"data":r=s.replace(/^\[|\]$/g,"").split(",").map(e=>parseFloat(e.trim())||0);break;case"colors":o=s.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim())}}return t.length&&r.length?{type:n,title:a,labels:t,data:r,colors:o}:null})(e),[e]);if(!a)return(0,i.jsx)(_,{children:e.trim()});let o=a.colors??H;return(0,i.jsxs)(G,{children:[a.title&&(0,i.jsx)(W,{children:a.title}),"bar"===a.type&&(0,i.jsx)(J,{labels:a.labels,data:a.data,colors:o}),"pie"===a.type&&(0,i.jsx)(q,{labels:a.labels,data:a.data,colors:o}),"line"===a.type&&(0,i.jsx)(Z,{labels:a.labels,data:a.data,colors:o}),(0,i.jsx)(Y,{children:a.labels.map((e,a)=>(0,i.jsxs)(V,{children:[(0,i.jsx)(K,{color:o[a%o.length]}),e]},a))})]})}let Q=l().div`
  background: ${t.w4.colors.codeBg};
  border: 1px solid ${t.w4.colors.codeBorder};
  border-radius: ${t.w4.borderRadius.md};
  padding: ${t.w4.spacing.lg};
  margin: ${t.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${t.w4.spacing.md};
`,ee=l().div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,ea=l().div`
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,eo=l().div`
  display: flex;
  gap: ${t.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,ei=l().button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?t.w4.colors.accent:t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  background: ${({active:e})=>e?t.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?t.w4.colors.accent:t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${t.w4.colors.accent};
    color: ${t.w4.colors.accent};
  }
`,en=l().div`
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  text-align: center;
`,et=l().div`
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${t.w4.colors.mainText};
  text-align: center;
`;function er(e){return e.toString().padStart(2,"0")}function el({hours:e,minutes:a,seconds:o}){let n=e=>e*Math.PI/180,r=o/60*360-90,l=a/60*360+o/60*6-90,s=e%12/12*360+a/60*30-90,c=100+61*Math.cos(n(r)),d=100+61*Math.sin(n(r)),m=100+65*Math.cos(n(l)),p=100+65*Math.sin(n(l)),g=100+45*Math.cos(n(s)),u=100+45*Math.sin(n(s));return(0,i.jsxs)("svg",{viewBox:"0 0 200 200",width:200,height:200,children:[(0,i.jsx)("circle",{cx:100,cy:100,r:85,fill:t.w4.colors.surface,stroke:t.w4.colors.border,strokeWidth:2}),Array.from({length:12},(e,a)=>{let o=a+1,r=o/12*360-90,l=100+69*Math.cos(n(r)),s=100+69*Math.sin(n(r));return(0,i.jsx)("text",{x:l,y:s+4,fill:t.w4.colors.mainText,fontSize:14,fontWeight:600,textAnchor:"middle",fontFamily:t.w4.typography.fontFamily,children:o},o)}),Array.from({length:60},(e,a)=>{let o=a/60*360-90,r=a%5==0,l=r?75:79;return(0,i.jsx)("line",{x1:100+l*Math.cos(n(o)),y1:100+l*Math.sin(n(o)),x2:100+83*Math.cos(n(o)),y2:100+83*Math.sin(n(o)),stroke:r?t.w4.colors.mainTextMuted:t.w4.colors.border,strokeWidth:r?2:1},a)}),(0,i.jsx)("line",{x1:100,y1:100,x2:g,y2:u,stroke:t.w4.colors.mainText,strokeWidth:4,strokeLinecap:"round"}),(0,i.jsx)("line",{x1:100,y1:100,x2:m,y2:p,stroke:t.w4.colors.accent,strokeWidth:2.5,strokeLinecap:"round"}),(0,i.jsx)("line",{x1:100-12*Math.cos(n(r)),y1:100-12*Math.sin(n(r)),x2:c,y2:d,stroke:"#f87171",strokeWidth:1.2,strokeLinecap:"round"}),(0,i.jsx)("circle",{cx:100,cy:100,r:4,fill:t.w4.colors.accent}),(0,i.jsx)("circle",{cx:100,cy:100,r:2,fill:"#f87171"})]})}function es({code:e}){let a=function(e){let a="pt";for(let o of e.trim().split("\n")){let[e,...i]=o.split(":"),n=i.join(":").trim();"locale"===e.trim().toLowerCase()&&(a=n.toLowerCase())}return{locale:a}}(e),[o,t]=(0,n.useState)("live"),[r,l]=(0,n.useState)(()=>new Date().getHours()),[s,c]=(0,n.useState)(()=>new Date().getMinutes()),[d,m]=(0,n.useState)(()=>new Date().getSeconds());(0,n.useEffect)(()=>{if("live"!==o)return;let e=()=>{let e=new Date;l(e.getHours()),c(e.getMinutes()),m(e.getSeconds())};e();let a=setInterval(e,1e3);return()=>clearInterval(a)},[o]);let p=(0,n.useCallback)(e=>{t("manual"),m(0),l(a=>((a+e)%24+24)%24)},[]),g=(0,n.useCallback)(e=>{t("manual"),m(0),c(a=>((a+e)%60+60)%60)},[]),u=(0,n.useCallback)(()=>t("live"),[]);return(0,i.jsxs)(Q,{children:[(0,i.jsxs)(ee,{children:[(0,i.jsx)(el,{hours:r,minutes:s,seconds:d}),(0,i.jsxs)("div",{children:[(0,i.jsxs)(ea,{children:[er(r),":",er(s),(0,i.jsxs)("span",{style:{fontSize:"24px",opacity:.5},children:[":",er(d)]})]}),(0,i.jsx)(et,{children:function(e,a,o){if("pt"===o){let o=1===e?"1 hora":`${e} horas`;return 0===a?o:15===a?`${o} e um quarto`:30===a?`${o} e meia`:45===a?`um quarto para as ${12===e?1:e+1}`:`${o} e ${a} minutos`}let i=e<12?"AM":"PM",n=e%12||12;return 0===a?`${n} o'clock ${i}`:15===a?`quarter past ${n} ${i}`:30===a?`half past ${n} ${i}`:45===a?`quarter to ${n%12+1} ${i}`:`${n}:${er(a)} ${i}`}(r%12||12,s,a.locale)})]})]}),(0,i.jsxs)(eo,{children:[(0,i.jsx)(ei,{onClick:()=>p(-1),children:"−1h"}),(0,i.jsx)(ei,{onClick:()=>p(1),children:"+1h"}),(0,i.jsx)(ei,{onClick:()=>g(-15),children:"−15m"}),(0,i.jsx)(ei,{onClick:()=>g(15),children:"+15m"}),(0,i.jsx)(ei,{onClick:()=>g(-5),children:"−5m"}),(0,i.jsx)(ei,{onClick:()=>g(5),children:"+5m"}),(0,i.jsx)(ei,{active:"live"===o,onClick:u,children:"pt"===a.locale?"Agora":"Now"})]}),(0,i.jsx)(en,{children:"pt"===a.locale?"Usa os bot\xf5es para mudar as horas e os minutos!":"Use the buttons to change the hours and minutes!"}),(0,i.jsx)(eo,{children:[{label:"3:00",h:3,m:0},{label:"6:30",h:6,m:30},{label:"9:15",h:9,m:15},{label:"12:00",h:12,m:0},{label:"13:45",h:13,m:45},{label:"15:30",h:15,m:30},{label:"19:00",h:19,m:0},{label:"23:15",h:23,m:15}].map(e=>(0,i.jsx)(ei,{onClick:()=>{t("manual"),l(e.h),c(e.m)},children:e.label},e.label))})]})}var ec=o(41604);let ed=["Samantha","Karen","Daniel","Moira","Rishi","Google UK English Female","Google US English"],em=["Joana","Luciana","Catarina","Google portugu\xeas do Brasil"];function ep(e,a){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();let o=new SpeechSynthesisUtterance(e);o.lang="pt"===a?"pt-PT":"en-US",o.rate=1,o.pitch=1;let i=function(e,a){let o="en"===a?"en":"pt";for(let i of"en"===a?ed:em){let a=e.find(e=>e.name.includes(i)&&e.lang.startsWith(o));if(a)return a}return e.find(e=>e.lang.startsWith(o))}(window.speechSynthesis.getVoices(),a);i&&(o.voice=i,o.lang=i.lang),window.speechSynthesis.speak(o)}let eg=(0,F.keyframes)`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`,eu=l().div`
  background: ${t.w4.colors.codeBg};
  border: 1px solid ${t.w4.colors.codeBorder};
  border-radius: ${t.w4.borderRadius.lg};
  padding: ${t.w4.spacing.md};
  margin: ${t.w4.spacing.lg} 0;
`,ef=l().div`
  font-size: 11px;
  font-family: ${t.w4.typography.fontFamilyMono};
  color: ${t.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${t.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,ey=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${t.w4.spacing.sm};

  @media (max-width: ${t.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,eh=l().div`
  display: flex;
  flex-direction: column;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${t.w4.colors.accent}40;
    box-shadow: 0 0 8px ${t.w4.colors.accent}15;
  }
`,ex=l().button`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  padding: 14px ${t.w4.spacing.md};
  min-height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${t.w4.typography.fontFamily};
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    animation: ${eg} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`,eb=l()(ex)`
  border-bottom: 1px solid ${t.w4.colors.border}80;
`,ew=l()(ex)``,e$=l().span`
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
`,ez=l().span`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${t.w4.colors.accent};
`,ev=l().span`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainTextMuted};
`;function ek({code:e}){let a=e.split("\n").map(e=>e.trim()).filter(e=>e&&e.includes("|")).map(e=>{let[a,o]=e.split("|").map(e=>e.trim());return{en:a??"",pt:o??""}}).filter(e=>e.en&&e.pt),o=(0,n.useRef)(null),t=(0,n.useRef)(!1),r=(0,n.useCallback)(e=>{o.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},[]),l=(0,n.useCallback)((e,a)=>i=>{if(!o.current)return;let n=Math.abs(i.changedTouches[0].clientX-o.current.x),r=Math.abs(i.changedTouches[0].clientY-o.current.y);o.current=null,n>8||r>8||(t.current=!0,ep(e,a))},[]),s=(0,n.useCallback)((e,a)=>()=>{if(t.current){t.current=!1;return}ep(e,a)},[]);return a.length?(0,i.jsxs)(eu,{children:[(0,i.jsxs)(ef,{children:[(0,i.jsx)(ec.A,{size:12}),"Words to Listen / Palavras para Ouvir"]}),(0,i.jsx)(ey,{children:a.map(e=>(0,i.jsxs)(eh,{children:[(0,i.jsxs)(eb,{accentColor:"#58a6ff",onTouchStart:r,onTouchEnd:l(e.en,"en"),onClick:s(e.en,"en"),title:`Listen: ${e.en}`,children:[(0,i.jsx)(e$,{accentColor:"#58a6ff",children:(0,i.jsx)(ec.A,{size:16})}),(0,i.jsx)(ez,{children:e.en})]}),(0,i.jsxs)(ew,{accentColor:"#3fb950",onTouchStart:r,onTouchEnd:l(e.pt,"pt"),onClick:s(e.pt,"pt"),title:`Ouvir: ${e.pt}`,children:[(0,i.jsx)(e$,{accentColor:"#3fb950",children:(0,i.jsx)(ec.A,{size:16})}),(0,i.jsx)(ev,{children:e.pt})]})]},e.en))})]}):null}var eA=o(17223),ej=o(21426),eS=o(25609),eM=o(20320);let eT=l().div`
  margin: ${t.w4.spacing.lg} 0;
  border-radius: ${t.w4.borderRadius.md};
  border: 1px solid ${t.w4.colors.codeBorder};
  overflow: hidden;
`,eC=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${t.w4.colors.codeBorder};
`,eB=l().span`
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,eE=l().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":t.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${t.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${t.w4.colors.sidebarText}; border-color: ${t.w4.colors.sidebarText}; }
`,eF={...ej.A,'pre[class*="language-"]':{...ej.A['pre[class*="language-"]'],background:t.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...ej.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function eR({lang:e="text",code:a}){let[o,r]=(0,n.useState)(!1);return(0,i.jsxs)(eT,{children:[(0,i.jsxs)(eC,{children:[(0,i.jsx)(eB,{children:e}),(0,i.jsxs)(eE,{copied:o,onClick:()=>{navigator.clipboard.writeText(a).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})},children:[o?(0,i.jsx)(eS.A,{size:12}):(0,i.jsx)(eM.A,{size:12}),o?"Copied!":"Copy"]})]}),(0,i.jsx)(eA.A,{language:e,style:eF,showLineNumbers:a.split("\n").length>8,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:t.w4.colors.codeBg},wrapLongLines:!1,children:a})]})}var eL=o(65569),eP=o(8218),eO=o(57230),eN=o(22966),eD=o(21069);let eI={NOTE:{bg:"rgba(88, 166, 255, 0.08)",border:"#58a6ff",icon:eL.A,label:"Note",color:"#58a6ff"},TIP:{bg:"rgba(63, 185, 80, 0.08)",border:"#3fb950",icon:eP.A,label:"Tip",color:"#3fb950"},IMPORTANT:{bg:"rgba(163, 113, 247, 0.08)",border:"#a371f7",icon:eO.A,label:"Important",color:"#a371f7"},WARNING:{bg:"rgba(210, 153, 34, 0.08)",border:"#d29922",icon:eN.A,label:"Warning",color:"#d29922"},CAUTION:{bg:"rgba(248, 81, 73, 0.08)",border:"#f85149",icon:eD.A,label:"Caution",color:"#f85149"}},eH=l().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${t.w4.borderRadius.md} ${t.w4.borderRadius.md} 0;
  padding: ${t.w4.spacing.md} ${t.w4.spacing.lg};
  margin: ${t.w4.spacing.lg} 0;
`,eG=l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${t.w4.typography.fontFamily};
  margin-bottom: ${t.w4.spacing.sm};
`,eW=l().div`
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`;function eY({type:e,children:a}){let o=eI[e]??eI.NOTE,n=o.icon;return(0,i.jsxs)(eH,{bg:o.bg,border:o.border,children:[(0,i.jsxs)(eG,{color:o.color,children:[(0,i.jsx)(n,{size:15,strokeWidth:2}),o.label]}),(0,i.jsx)(eW,{children:a})]})}let eV=l().nav`
  width: 220px;
  min-width: 220px;
  padding: ${t.w4.spacing.xxl} 0 ${t.w4.spacing.xxl} ${t.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,eK=l().div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  margin-bottom: ${t.w4.spacing.md};
`,e_=l().ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,eU=l().a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${t.w4.typography.fontSizeSm};
  font-family: ${t.w4.typography.fontFamily};
  color: ${({active:e})=>e?t.w4.colors.accent:t.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?t.w4.colors.accent:"transparent"};
  border-radius: 0 ${t.w4.borderRadius.sm} ${t.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${t.w4.colors.mainText}; background: ${t.w4.colors.sidebarHover}; }
`;function eJ({headings:e,activeId:a}){return e.length<2?null:(0,i.jsxs)(eV,{children:[(0,i.jsx)(eK,{children:"On this page"}),(0,i.jsx)(e_,{children:e.map(e=>(0,i.jsx)("li",{children:(0,i.jsx)(eU,{href:`#${e.id}`,active:a===e.id,level:e.level,onClick:a=>{a.preventDefault(),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},children:e.text})},e.id))})]})}function eq(e){return e.toLowerCase().replace(/[*_`[\]()#]/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}function eZ(){return e=>{!function e(a){if("blockquote"===a.type){let e=a.children?.[0];if(e?.type==="paragraph"){let o=e.children?.[0];if(o?.type==="text"){let i=o.value?.match(/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i);i&&(o.value=o.value.slice(i[0].length),o.value.trim()||1!==e.children.length||a.children.shift(),a.data=a.data??{},a.data.hName="div",a.data.hProperties={"data-callout":i[1].toUpperCase()})}}}a.children?.forEach(e)}(e)}}let eX=l().div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${t.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,eQ=l().div`flex: 1; min-width: 0;`,e0=l().article`
  padding: ${t.w4.spacing.xxl} 0;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeMd};
  line-height: ${t.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${t.w4.spacing.xl} 0 ${t.w4.spacing.md};
    color: ${t.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${t.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${t.w4.typography.fontSizeXl}; border-bottom: 1px solid ${t.w4.colors.border}; padding-bottom: ${t.w4.spacing.sm}; }
  h2 { font-size: ${t.w4.typography.fontSizeLg}; border-bottom: 1px solid ${t.w4.colors.border}; padding-bottom: ${t.w4.spacing.xs}; }
  h3 { font-size: ${t.w4.typography.fontSizeMd}; }

  p { margin: ${t.w4.spacing.md} 0; }

  a { color: ${t.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${t.w4.colors.accentHover}; } }

  ul, ol { margin: ${t.w4.spacing.md} 0; padding-left: ${t.w4.spacing.xl}; }
  li { margin: ${t.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${t.w4.colors.border};
    margin: ${t.w4.spacing.lg} 0;
    padding: ${t.w4.spacing.sm} ${t.w4.spacing.lg};
    background: ${t.w4.colors.surface};
    color: ${t.w4.colors.mainTextMuted};
    border-radius: 0 ${t.w4.borderRadius.sm} ${t.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${t.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${t.w4.colors.codeBg};
    border: 1px solid ${t.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${t.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${t.w4.spacing.lg} 0; font-size: ${t.w4.typography.fontSizeBase}; }
  th, td { padding: ${t.w4.spacing.sm} ${t.w4.spacing.md}; border: 1px solid ${t.w4.colors.border}; text-align: left; }
  th { background: ${t.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${t.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${t.w4.colors.border}; margin: ${t.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${t.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${t.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${t.w4.spacing.lg} 0; }
`,e1=l().div`
  display: flex;
  gap: ${t.w4.spacing.lg};
  padding: ${t.w4.spacing.xxl} 0;
  border-top: 1px solid ${t.w4.colors.border};
  margin-top: ${t.w4.spacing.xxl};
`,e4=l().button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${t.w4.spacing.md} ${t.w4.spacing.lg};
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${t.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,e2=l().div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${t.w4.colors.sidebarTextMuted}; font-family: ${t.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,e3=l().div`
  font-size: ${t.w4.typography.fontSizeBase}; color: ${t.w4.colors.accent};
  font-family: ${t.w4.typography.fontFamily}; font-weight: 500;
`,e5=l().div`
  color: ${t.w4.colors.mainTextMuted};
  padding: ${t.w4.spacing.xxl} ${t.w4.spacing.xl};
  font-family: ${t.w4.typography.fontFamily};
`;function e8(e){return function({children:a,...o}){let t=`h${e}`,r=function e(a){return n.Children.toArray(a).map(a=>"string"==typeof a?a:"number"==typeof a?String(a):(0,n.isValidElement)(a)?e(a.props.children??""):"").join("")}(a),l=eq(r);return(0,i.jsxs)(t,{id:l,...o,children:[a,(0,i.jsx)("a",{className:"heading-anchor",href:`#${l}`,"aria-label":`Link to "${r}"`,children:(0,i.jsx)(M.A,{size:14})})]})}}function e6({file:e,prevEntry:a,nextEntry:t,onNavigate:r,scrollToId:l,onScrolled:s}){let[d,m]=(0,n.useState)(null),[p,g]=(0,n.useState)(null),u=(0,n.useRef)(null);if((0,n.useEffect)(()=>{m(null),fetch(`${o.p}content/${e}`).then(e=>{if(!e.ok)throw Error(`${e.status} ${e.statusText}`);return e.text()}).then(m).catch(a=>m(`> **Error loading \`${e}\`:** ${a.message}`))},[e]),(0,n.useEffect)(()=>{if(!l||!d||!u.current)return;let e=setTimeout(()=>{let e=u.current?.querySelector(`#${CSS.escape(l)}`);e&&(e.scrollIntoView({behavior:"smooth",block:"start"}),g(l),s?.())},150);return()=>clearTimeout(e)},[l,d,s]),(0,n.useEffect)(()=>{if(!d||!u.current)return;let e=u.current,a=Array.from(e.querySelectorAll("h2[id], h3[id]"));if(!a.length)return;let o=e.parentElement;for(;o;){let{overflowY:e}=getComputedStyle(o);if(("auto"===e||"scroll"===e)&&o.scrollHeight>o.clientHeight)break;o=o.parentElement}let i=o??window,n=()=>{let e=a[0].id;for(let o of a)if(o.getBoundingClientRect().top-120<=0)e=o.id;else break;g(e)};return n(),i.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n),()=>{i.removeEventListener("scroll",n),window.removeEventListener("resize",n)}},[d]),null===d)return(0,i.jsx)(e5,{children:"Loading…"});let f=function(e){let a,o=[],i=/^(#{2,3})\s+(.+)$/gm;for(;null!==(a=i.exec(e));){let e=a[1].length,i=a[2].trim().replace(/\*\*(.+?)\*\*/g,"$1").replace(/\*(.+?)\*/g,"$1").replace(/`(.+?)`/g,"$1").replace(/\[(.+?)\]\(.+?\)/g,"$1");o.push({level:e,text:i,id:eq(i)})}return o}(d),y=a||t;return(0,i.jsxs)(eX,{children:[(0,i.jsxs)(eQ,{children:[(0,i.jsx)(e0,{ref:u,children:(0,i.jsx)(j.oz,{remarkPlugins:[S.A,E.A,eZ],rehypePlugins:[C.A,B.A],components:{div({node:e,children:a,...o}){let n=o["data-callout"];return n?(0,i.jsx)(eY,{type:n,children:a}):(0,i.jsx)("div",{...o,children:a})},h1:e8(1),h2:e8(2),h3:e8(3),h4:e8(4),pre:({children:e})=>(0,i.jsx)(i.Fragment,{children:e}),code({className:e,children:a}){let o=/language-(\w+)/.exec(e??"")?.[1],n=String(a).replace(/\n$/,"");return"mermaid"===o?(0,i.jsx)(I,{code:n}):"chart"===o?(0,i.jsx)(X,{code:n}):"clock"===o?(0,i.jsx)(es,{code:n}):"vocabulary"===o?(0,i.jsx)(ek,{code:n}):o||n.includes("\n")?(0,i.jsx)(eR,{lang:o,code:n}):(0,i.jsx)("code",{className:e,children:a})}},children:d})}),y&&(0,i.jsxs)(e1,{children:[a?(0,i.jsxs)(e4,{align:"left",onClick:()=>r?.(a),children:[(0,i.jsxs)(e2,{children:[(0,i.jsx)(T.A,{size:13})," Previous"]}),(0,i.jsx)(e3,{children:a.name})]}):(0,i.jsx)("div",{style:{flex:1}}),t?(0,i.jsxs)(e4,{align:"right",onClick:()=>r?.(t),children:[(0,i.jsxs)(e2,{children:["Next ",(0,i.jsx)(c.A,{size:13})]}),(0,i.jsx)(e3,{children:t.name})]}):(0,i.jsx)("div",{style:{flex:1}})]})]}),(0,i.jsx)(eJ,{headings:f,activeId:p})]})}var e9=o(24525),e7=o(87071),ae=o(35751),aa=o(32887);let ao=(0,F.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ai=(0,F.keyframes)`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,an=l().div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${ao} 0.15s ease;
`,at=l().div`
  width: 90%;
  max-width: 580px;
  max-height: 70vh;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.lg};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px ${t.w4.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${ai} 0.2s ease;
`,ar=l().div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid ${t.w4.colors.border};
`,al=l().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeMd};
  &::placeholder { color: ${t.w4.colors.sidebarTextMuted}; }
`,as=l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${t.w4.colors.sidebarHover};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  font-size: 10px;
  font-family: ${t.w4.typography.fontFamilyMono};
  transition: color 0.15s, background 0.15s;
  &:hover { color: ${t.w4.colors.mainText}; background: ${t.w4.colors.border}; }
`,ac=l().div`
  flex: 1;
  overflow-y: auto;
  padding: ${t.w4.spacing.sm} 0;
`,ad=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.sidebarTextMuted};
`,am=l().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,ap=l().button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 10px 18px;
  background: ${({selected:e})=>e?t.w4.colors.accentMuted:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  &:hover { background: ${t.w4.colors.sidebarHover}; }
`,ag=l().div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${t.w4.borderRadius.md};
  background: ${({selected:e})=>e?`${t.w4.colors.accent}20`:t.w4.colors.sidebarHover};
  color: ${({selected:e})=>e?t.w4.colors.accent:t.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  margin-top: 1px;
`,au=l().div`
  flex: 1;
  min-width: 0;
`,af=l().div`
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${t.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 8px;
`,ay=l().span`
  font-weight: 400;
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.sidebarTextMuted};
`,ah=l().span`
  font-size: 11px;
  font-weight: 500;
  color: ${t.w4.colors.accent};
  background: ${t.w4.colors.accentMuted};
  padding: 1px 6px;
  border-radius: 10px;
  font-family: ${t.w4.typography.fontFamilyMono};
`,ax=l().div`
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin-top: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${t.w4.colors.accent}25;
    color: ${t.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,ab=l().div`
  display: flex;
  align-items: center;
  color: ${({selected:e})=>e?t.w4.colors.accent:"transparent"};
  margin-top: 8px;
  transition: color 0.1s;
`,aw=l().div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  border-top: 1px solid ${t.w4.colors.border};
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
`,a$=l().kbd`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background: ${t.w4.colors.sidebarHover};
  border: 1px solid ${t.w4.colors.border};
  border-radius: 3px;
  font-size: 10px;
  font-family: ${t.w4.typography.fontFamilyMono};
  color: ${t.w4.colors.sidebarTextMuted};
`,az=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 18px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`,av=new Map;async function ak(e){let a=av.get(e);if(void 0!==a)return a;try{let a=await fetch(`${o.p}content/${e}`);if(!a.ok)return"";let i=await a.text();return av.set(e,i),i}catch{return av.set(e,""),""}}function aA(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function aj({open:e,onClose:a,entries:o,activeId:r,onSelect:l}){let[c,d]=(0,n.useState)(""),[m,p]=(0,n.useState)([]),[g,u]=(0,n.useState)(!1),[f,y]=(0,n.useState)(0),h=(0,n.useRef)(null),x=(0,n.useRef)(),b=(0,n.useMemo)(()=>(function e(a,o=""){return a.flatMap(a=>a.children?e(a.children,a.name):a.file?[{entry:a,parentName:o}]:[])})(o),[o]);(0,n.useEffect)(()=>{e&&(d(""),p([]),y(0),setTimeout(()=>h.current?.focus(),50))},[e]),(0,n.useEffect)(()=>{if(!e)return;let o=e=>{"Escape"===e.key&&(e.preventDefault(),a())};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,a]);let w=(0,n.useCallback)(async e=>{if(e.length<2){p([]),u(!1);return}u(!0);let a=await Promise.all(b.map(async({entry:e,parentName:a})=>{let o=await ak(e.file);return{entry:e,parentName:a,text:o}})),o=[];for(let{entry:i,parentName:n,text:t}of a){let a=aA(i.name),r=aA(t),l=aA(e);if(!a.includes(l)&&!r.includes(l))continue;let{snippet:s,count:c,headingSlug:d,headingText:m}=function(e,a){let o=aA(e),i=aA(a),n=e.split("\n"),t=0,r=0;for(;-1!==(r=o.indexOf(i,r));)t++,r+=i.length;let l=null;for(let e of n){let o=e.match(/^#{1,4}\s+(.+)/);if(o&&(l=o[1].trim()),!e.trim()||e.startsWith("```")||e.startsWith("|--"))continue;let n=e.replace(/^#{1,6}\s*/,"").replace(/[*_`|]/g,"").trim(),r=n.normalize("NFD"),s=[],c=0;for(let e=0;e<r.length;e++){let a=r.charCodeAt(e);(!(a>=768)||!(a<=879))&&(s.push(c),c++)}s.push(c);let d=aA(n).indexOf(i);if(-1===d)continue;let m=s[d]??d,p=s[d+i.length]??m+a.length,g=Math.max(0,m-50),u=Math.min(n.length,p+70),f=g>0?"…":"",y=u<n.length?"…":"",h=n.slice(g,m),x=n.slice(m,p),b=n.slice(p,u);return{snippet:`${f}${h}<mark>${x}</mark>${b}${y}`,count:t,headingSlug:l?l.toLowerCase().replace(/[*_`[\]()#]/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim():null,headingText:l}}return{snippet:"",count:t,headingSlug:null,headingText:null}}(t,e),p=a.includes(l);o.push({entry:i,parentName:n,snippet:s||(p?i.name:""),matchCount:c+10*!!p,headingSlug:d,headingText:m})}o.sort((e,a)=>a.matchCount-e.matchCount),p(o),y(0),u(!1)},[b]);(0,n.useEffect)(()=>(clearTimeout(x.current),c.trim())?(x.current=setTimeout(()=>w(c.trim()),250),()=>clearTimeout(x.current)):void p([]),[c,w]);let $=(0,n.useCallback)(e=>{"ArrowDown"===e.key?(e.preventDefault(),y(e=>Math.min(e+1,m.length-1))):"ArrowUp"===e.key?(e.preventDefault(),y(e=>Math.max(e-1,0))):"Enter"===e.key&&m[f]&&(e.preventDefault(),l(m[f].entry,m[f].headingSlug),a())},[m,f,l,a]);return e?(0,i.jsx)(an,{onClick:e=>{e.target===e.currentTarget&&a()},children:(0,i.jsxs)(at,{onKeyDown:$,children:[(0,i.jsxs)(ar,{children:[(0,i.jsx)(s.A,{size:18,color:t.w4.colors.accent,style:{flexShrink:0}}),(0,i.jsx)(al,{ref:h,placeholder:"Pesquisar em todo o conte\xfado…",value:c,onChange:e=>d(e.target.value)}),(0,i.jsx)(as,{onClick:a,title:"Fechar (Esc)",children:(0,i.jsx)(e9.A,{size:14})})]}),(0,i.jsxs)(ac,{children:[g&&(0,i.jsxs)(ad,{children:[(0,i.jsx)(am,{children:(0,i.jsx)(e7.A,{size:14})}),"A pesquisar ",b.length," ficheiros…"]}),!g&&c.length>=2&&m.length>0&&(0,i.jsxs)(ad,{children:[(0,i.jsx)(ae.A,{size:13}),m.length," ",1===m.length?"resultado":"resultados"," encontrados"]}),!g&&c.length>=2&&0===m.length&&(0,i.jsxs)(az,{children:[(0,i.jsx)(s.A,{size:32,strokeWidth:1.2}),'Nenhum resultado para "',(0,i.jsx)("strong",{children:c}),'"']}),!g&&c.length<2&&(0,i.jsxs)(az,{children:[(0,i.jsx)(s.A,{size:32,strokeWidth:1.2}),"Escreve pelo menos 2 caracteres para pesquisar"]}),m.map((e,o)=>(0,i.jsxs)(ap,{selected:o===f,onClick:()=>{l(e.entry,e.headingSlug),a()},onMouseEnter:()=>y(o),children:[(0,i.jsx)(ag,{selected:o===f,children:(0,i.jsx)(ae.A,{size:15})}),(0,i.jsxs)(au,{children:[(0,i.jsxs)(af,{children:[e.entry.name,e.matchCount>0&&(0,i.jsx)(ah,{children:e.matchCount>10?e.matchCount-10:e.matchCount})]}),(e.parentName||e.headingText)&&(0,i.jsxs)(ay,{children:[e.parentName,e.parentName&&e.headingText?" › ":"",e.headingText]}),e.snippet&&(0,i.jsx)(ax,{dangerouslySetInnerHTML:{__html:e.snippet}})]}),(0,i.jsx)(ab,{selected:o===f,children:(0,i.jsx)(aa.A,{size:14})})]},e.entry.id))]}),(0,i.jsxs)(aw,{children:[(0,i.jsxs)("span",{children:[(0,i.jsx)(a$,{children:"↑"})," ",(0,i.jsx)(a$,{children:"↓"})," navegar"]}),(0,i.jsxs)("span",{children:[(0,i.jsx)(a$,{children:"↵"})," abrir"]}),(0,i.jsxs)("span",{children:[(0,i.jsx)(a$,{children:"esc"})," fechar"]})]})]})}):null}function aS(e,a){for(let o of e){if(o.id===a)return o;if(o.children){let e=aS(o.children,a);if(e)return e}}}function aM(e){return e.flatMap(e=>e.children?aM(e.children):e.file?[e]:[])}let aT=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${t.w4.typography.fontFamily};
  background: ${t.w4.colors.mainBg};
`,aC=l().div`
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
`,aB=l().div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${t.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${t.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,aE=l().div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,aF=l().h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${t.w4.colors.mainText} 0%,
    ${t.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,aR=l().p`
  font-size: ${t.w4.typography.fontSizeMd};
  color: ${t.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,aL=l().span`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,aP=l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${t.w4.colors.sidebarHover};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: ${t.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${t.w4.colors.accent}60;
    color: ${t.w4.colors.mainText};
    background: ${t.w4.colors.accentMuted};
  }

  kbd {
    font-size: 10px;
    padding: 1px 4px;
    background: ${t.w4.colors.surface};
    border: 1px solid ${t.w4.colors.border};
    border-radius: 3px;
    color: ${t.w4.colors.sidebarTextMuted};
  }

  @media (max-width: ${t.w4.breakpoints.md}) {
    padding: 5px 8px;
    span { display: none; }
    kbd { display: none; }
  }
`,aO={en:"Browse the sidebar",pt:"Explora o menu lateral"};function aN({title:e,sub:a,lang:o}){return(0,i.jsxs)(aT,{children:[(0,i.jsx)(aB,{}),(0,i.jsx)(aC,{size:500,x:10,y:-10,hue:210,dur:7}),(0,i.jsx)(aC,{size:400,x:60,y:50,hue:270,dur:9}),(0,i.jsx)(aC,{size:300,x:30,y:70,hue:190,dur:6}),(0,i.jsxs)(aE,{children:[(0,i.jsx)(aF,{children:e}),(0,i.jsx)(aR,{children:a}),(0,i.jsxs)(aL,{children:[(0,i.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:(0,i.jsx)("polyline",{points:"15 18 9 12 15 6"})}),aO[o]??aO.en]})]})]})}function aD(e,a,o){return"string"==typeof e?e:e[a]??e[o]??Object.values(e)[0]??""}function aI({navigation:e,languages:a,defaultLang:o,locale:r,hashPrefix:l,topBarRight:c,welcomeTitle:d="Blog",welcomeSub:m="Notes, guides, and references — pick a topic from the sidebar to get started."}){let p=a?Object.keys(a):[];p.length;let[g,u]=(0,n.useState)(()=>o??p[0]??"");(0,n.useEffect)(()=>{r&&p.includes(r)&&r!==g&&u(r)},[r]);let f=(0,n.useMemo)(()=>a&&g?a[g].navigation:e??{entries:[]},[a,e,g]);(0,n.useMemo)(()=>aM(f.entries),[f]);let y=(0,n.useCallback)(e=>{let a=e.match(RegExp(`^#\\/${l}\\/(.+)$`));if(a)return aS(f.entries,a[1])},[f,l]),[h,x]=(0,n.useState)(()=>y(window.location.hash)??null);(0,n.useEffect)(()=>{h&&x(aS(f.entries,h.id)??null)},[g,f]),(0,n.useEffect)(()=>{let e=()=>{let e=y(window.location.hash);e&&x(e)};return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[y]);let b=(0,n.useCallback)(e=>{e.file&&(x(e),window.location.hash=`#/${l}/${e.id}`)},[l]),w=(0,n.useMemo)(()=>aM(f.entries),[f]),$=w.findIndex(e=>e.id===h?.id),z=$>0?w[$-1]:null,v=$<w.length-1?w[$+1]:null,[k,j]=(0,n.useState)(!1),[S,M]=(0,n.useState)(null);(0,n.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&"f"===e.key&&(e.preventDefault(),j(!0))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]);let T=h?.label??h?.name??l,C=aD(d,g,o??p[0]??""),B=aD(m,g,o??p[0]??""),E=(0,i.jsxs)(aP,{onClick:()=>j(!0),title:"Pesquisar (Ctrl+F)",children:[(0,i.jsx)(s.A,{size:14}),(0,i.jsx)("span",{children:"Pesquisar"}),(0,i.jsx)("kbd",{children:"⌘F"})]}),F=(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[E,c]});return(0,i.jsxs)(t.PE,{title:T,activeId:h?.id??null,topBarRight:F,sidebar:(0,i.jsx)(A,{config:f,activeId:h?.id??null,onSelect:b,hashPrefix:l}),children:[h?.file?(0,i.jsx)(e6,{file:h.file,prevEntry:z,nextEntry:v,onNavigate:b,scrollToId:S,onScrolled:()=>M(null)}):(0,i.jsx)(aN,{title:C,sub:B,lang:g}),(0,i.jsx)(aj,{open:k,onClose:()=>j(!1),entries:f.entries,activeId:h?.id??null,onSelect:(e,a)=>{b(e),M(a??null)}})]})}l().div`
  display: flex;
  gap: 4px;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  padding: 2px;
`,l().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${t.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?t.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":t.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":t.w4.colors.mainText};
  }
`,l().div`
  padding: ${({collapsed:e})=>e?"8px 4px":`8px ${t.w4.spacing.md}`};
  border-bottom: 1px solid ${t.w4.colors.border}60;
`,l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${({collapsed:e})=>e?"8px 0":"6px 10px"};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  background: ${({focused:e})=>e?`${t.w4.colors.accent}10`:t.w4.colors.sidebarHover};
  border: 1px solid ${({focused:e})=>e?`${t.w4.colors.accent}40`:"transparent"};
  border-radius: ${t.w4.borderRadius.md};
  transition: background 0.15s, border-color 0.2s;
  cursor: ${({collapsed:e})=>e?"pointer":"text"};
`,l().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${t.w4.colors.sidebarText};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  min-width: 0;
  display: ${({collapsed:e})=>e?"none":"block"};
  &::placeholder { color: ${t.w4.colors.sidebarTextMuted}; }
`,l().button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  border-radius: ${t.w4.borderRadius.sm};
  transition: color 0.15s;
  &:hover { color: ${t.w4.colors.mainText}; }
`,l().div`
  max-height: 60vh;
  overflow-y: auto;
  padding: ${t.w4.spacing.sm} 0;
`,l().button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding: 8px ${t.w4.spacing.md};
  background: ${({active:e})=>e?t.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?t.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;
  &:hover { background: ${t.w4.colors.sidebarHover}; }
`,l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${t.w4.colors.sidebarText};
`,l().span`
  font-weight: 400;
  color: ${t.w4.colors.sidebarTextMuted};
  font-size: 11px;
`,l().div`
  font-family: ${t.w4.typography.fontFamily};
  font-size: 12px;
  color: ${t.w4.colors.sidebarTextMuted};
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${t.w4.colors.accent}30;
    color: ${t.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,l().div`
  padding: 12px ${t.w4.spacing.md};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`,l().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,l().span`
  font-size: 11px;
  color: ${t.w4.colors.accent};
  font-weight: 600;
  margin-left: auto;
`},28170(e,a,o){o.d(a,{Ym:()=>c});var i=o(37991),n=o(89874);let t="atlantis:locale",r="shell:locale";function l(e){return"en"===e||"pt"===e}function s(){try{let e=localStorage.getItem(t);if(l(e))return e}catch{}return"en"}function c(){let[e,a]=(0,i.useState)(s),o=(0,i.useCallback)(e=>{a(e);try{localStorage.setItem(t,e)}catch{}(0,n.Is)(r,e).catch(()=>{}),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,i.useEffect)(()=>{let e=e=>{a(e.detail)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,i.useEffect)(()=>{(0,n.PL)(r).then(o=>{if(l(o)&&o!==e){try{localStorage.setItem(t,o)}catch{}a(o)}}).catch(()=>{})},[]),[e,o]}(0,n.PL)(r).then(e=>{if(l(e))try{localStorage.setItem(t,e)}catch{}}).catch(()=>{}),o(65723);var d=o(36859),m=o.n(d);m().div`
  display: flex;
  gap: 4px;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  padding: 2px;
`,m().button`
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
`},48859(e,a,o){o.d(a,{FlyoutPanel:()=>b});var i=o(65723),n=o(37991),t=o.n(n),r=o(36859),l=o.n(r),s=o(72799),c=o(81316),d=o(40814),m=o(96140);let p=(0,s.keyframes)`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=l().div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${c.w4.colors.surfaceRaised};
  border: 1px solid ${c.w4.colors.accentMuted};
  border-radius: ${c.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${c.w4.colors.borderSubtle},
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
    background: ${c.w4.colors.accent};
    opacity: 0.4;
  }
`,u=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${c.w4.colors.accent};
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
  font-family: ${c.w4.typography.fontFamily};
`,f=l().button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?c.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?c.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?c.w4.colors.accent:c.w4.colors.sidebarText};
  font-size: ${c.w4.typography.fontSizeBase};
  font-family: ${c.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${c.w4.colors.accentMuted};
    color: ${c.w4.colors.mainText};
  }
`,y=({size:e=14,strokeWidth:a=1.75})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,i.jsx)("polyline",{points:"14 2 14 8 20 8"})]});function h({iconKey:e}){let a=e?m.t[e]:null;return a?(0,i.jsx)(a,{size:14,strokeWidth:1.75}):(0,i.jsx)(y,{})}function x({entries:e,activeId:a,onSelect:o}){return(0,i.jsx)(i.Fragment,{children:e.map(e=>e.children?(0,i.jsx)(t().Fragment,{children:(0,i.jsx)(x,{entries:e.children,activeId:a,onSelect:o})},e.id):(0,i.jsxs)(f,{active:a===e.id,onClick:()=>o(e),children:[(0,i.jsx)(h,{iconKey:e.icon}),e.name]},e.id))})}function b({activeId:e}){let{flyout:a,scheduleFlyoutClose:o,cancelFlyoutClose:n}=(0,d.c)();if(!a)return null;let t=a.entry.icon?m.t[a.entry.icon]:null;return(0,i.jsxs)(g,{anchorY:a.anchorY,onMouseEnter:n,onMouseLeave:o,children:[(0,i.jsxs)(u,{children:[t?(0,i.jsx)(t,{size:13,strokeWidth:2}):(0,i.jsx)(y,{size:13,strokeWidth:2}),a.entry.name]}),(0,i.jsx)(x,{entries:a.entry.children??[],activeId:e,onSelect:e=>{a.onSelect(e),o()}})]})}},40814(e,a,o){o.d(a,{I:()=>n,c:()=>t});var i=o(37991);let n=(0,i.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),t=()=>(0,i.useContext)(n)},96140(e,a,o){o.d(a,{t:()=>ex});var i=o(36896),n=o(87902),t=o(53013),r=o(32887),l=o(49510),s=o(39848),c=o(37901),d=o(3045),m=o(43775),p=o(41783),g=o(83539),u=o(39416),f=o(1837),y=o(57167),h=o(84494),x=o(82314),b=o(20255),w=o(35751),$=o(69633),z=o(92946),v=o(40822),k=o(36720),A=o(57400),j=o(58456),S=o(43317),M=o(52709),T=o(8006),C=o(89301),B=o(37561),E=o(83517),F=o(28207),R=o(37032),L=o(6949),P=o(8218),O=o(36829),N=o(59591),D=o(15553),I=o(69923),H=o(72820),G=o(14621),W=o(68479),Y=o(72534),V=o(66673),K=o(67490),_=o(49033),U=o(99038),J=o(45775),q=o(31365),Z=o(62937),X=o(9821),Q=o(65912),ee=o(80158),ea=o(88641),eo=o(48607),ei=o(83249),en=o(1821),et=o(15889),er=o(89655),el=o(27170),es=o(19161),ec=o(71849),ed=o(41604),em=o(13142),ep=o(61187),eg=o(77747),eu=o(2932),ef=o(24525),ey=o(57230),eh=o(22164);let ex={activity:i.A,"a-large-small":n.A,apple:t.A,"arrow-right":r.A,"bar-chart-2":l.A,book:s.A,"book-open":c.A,briefcase:d.A,calendar:m.A,clock:p.A,"circle-dot":g.A,cloud:u.A,compass:f.A,cpu:y.A,droplets:h.A,feather:x.A,file:b.A,"file-text":w.A,folder:$.A,"git-branch":z.A,github:v.A,globe:k.A,grid:A.A,hand:j.A,hash:S.A,heart:M.A,key:T.A,hexagon:C.A,home:B.A,landmark:E.A,layers:F.A,"layout-grid":R.A,leaf:L.A,lightbulb:P.A,list:O.A,map:N.A,"map-pin":D.A,"message-circle":I.A,"message-square":H.A,minus:G.A,monitor:W.A,mountain:Y.A,package:V.A,palette:K.A,"pen-tool":_.A,"pie-chart":U.A,plane:J.A,plus:q.A,ruler:Z.A,shirt:X.A,slash:Q.A,square:ee.A,star:ea.A,sun:eo.A,terminal:ei.A,thermometer:en.A,triangle:et.A,trophy:er.A,truck:el.A,type:es.A,users:ec.A,"volume-2":ed.A,watch:em.A,waves:ep.A,wind:eg.A,wrench:eu.A,x:ef.A,zap:ey.A,bot:eh.A}},89874(e,a,o){o.d(a,{w4:()=>i.w4,cL:()=>d.c,CD:()=>W,PE:()=>C,Is:()=>V.putSetting,PL:()=>V.getSetting});var i=o(81316),n=o(65723),t=o(37991),r=o.n(t),l=o(36859),s=o.n(l);s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${i.w4.spacing.sm};
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,s().div`
  position: relative;
`;var c=o(72799),d=o(40814);let m="260px",p="56px",g="48px",u=s().header`
  display: flex;
  align-items: center;
  height: calc(${g} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);

  /* Mobile: logo + app label on row 1, scrollable chrome cluster on row 2. */
  @media (max-width: ${i.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(${g} + env(safe-area-inset-top, 0px));
  }
`,f=s().div`
  width: ${p};
  min-width: ${p};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${i.w4.breakpoints.md}) {
    display: none;
  }
`,y=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${i.w4.borderRadius.md};
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    color: ${i.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,h=(0,c.keyframes)`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,x=s().button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${i.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${i.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${i.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,b=s().span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${h} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`
    background: linear-gradient(135deg, ${i.w4.colors.accent}, ${i.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`,w=s().div`
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  padding-left: ${i.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 0;

  &::before {
    content: '/';
    margin-right: ${i.w4.spacing.sm};
    color: ${i.w4.colors.border};
  }
`,$=s().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${i.w4.spacing.md};
  padding: 0 ${i.w4.spacing.lg};
  min-width: 0;

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${i.w4.spacing.sm};
  }

  /* Full-width second row on mobile, horizontally scrollable.
     Align to the right so the avatar / bell stay flush with the
     viewport edge — matches desktop end-alignment. */
  @media (max-width: ${i.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    justify-content: flex-end;
    padding: ${i.w4.spacing.xs} ${i.w4.spacing.sm};
    gap: ${i.w4.spacing.xs};
    border-top: 1px solid ${i.w4.colors.sidebarBorder};
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
`,z=s().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,v=s().div`
  display: flex;
  flex-direction: column;
  height: ${i.w4.sizes.fullHeight};
  background: ${i.w4.colors.mainBg};
  font-family: ${i.w4.typography.fontFamily};
  color: ${i.w4.colors.mainText};
  overflow: hidden;
`,k=s().aside`
  width: ${({collapsed:e})=>e?p:m};
  min-width: ${({collapsed:e})=>e?p:m};
  background: ${i.w4.colors.sidebarBg};
  border-right: 1px solid ${i.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${i.w4.breakpoints.md}) {
    display: none;
  }
`,A=s().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,j=s().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,S=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function M(){return(0,n.jsx)(x,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:S.map((e,a)=>(0,n.jsx)(b,{index:a,accent:e.accent,children:e.char},a))})}let T="atlantis:sidebar-collapsed";function C({sidebar:e,children:a,topBarRight:i,title:l="Atlantis",activeId:s=null}){let[c,m]=(0,t.useState)(()=>{try{return"true"===localStorage.getItem(T)}catch{return!1}}),[p,g]=(0,t.useState)(null),h=(0,t.useRef)(),x=()=>m(e=>{let a=!e;try{localStorage.setItem(T,String(a))}catch{}return a}),b=r().useMemo(()=>r().lazy(()=>Promise.resolve().then(o.bind(o,48859)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,n.jsx)(d.I.Provider,{value:{collapsed:c,toggle:x,flyout:p,openFlyout:(e,a,o)=>{clearTimeout(h.current),g({entry:e,anchorY:a,onSelect:o})},scheduleFlyoutClose:()=>{h.current=setTimeout(()=>g(null),160)},cancelFlyoutClose:()=>clearTimeout(h.current)},children:(0,n.jsxs)(v,{children:[(0,n.jsxs)(u,{children:[e&&(0,n.jsx)(f,{children:(0,n.jsx)(y,{onClick:x,title:c?"Expand sidebar":"Collapse sidebar",children:(0,n.jsxs)("svg",{width:17,height:17,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),(0,n.jsx)("path",{d:"M9 3v18"})]})})}),(0,n.jsx)(M,{}),l&&(0,n.jsx)(w,{children:l}),i&&(0,n.jsx)($,{children:i})]}),(0,n.jsxs)(z,{children:[null!=e&&(0,n.jsx)(k,{collapsed:c,children:(0,n.jsx)(A,{children:e})}),(0,n.jsx)(j,{children:a})]}),p&&(0,n.jsx)(r().Suspense,{fallback:null,children:(0,n.jsx)(b,{activeId:s})})]})})}var B=o(96140);let E=s().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,F=s().div`
  overflow: hidden;
`,R=s().div`
  padding-left: ${i.w4.spacing.md};
`,L=s().div`
  display: flex;
  flex-direction: column;
`,P=s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${i.w4.spacing.sm} ${i.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":i.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${i.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${i.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${i.w4.colors.sidebarText};
    background: ${i.w4.colors.sidebarHover};
  }
`,O=s().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,N=s().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,D=s().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${i.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,I=s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${i.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?i.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?i.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?i.w4.colors.sidebarActive:i.w4.colors.sidebarText};
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${i.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${i.w4.borderRadius.md} ${i.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    color: ${i.w4.colors.mainText};
  }
`;function H({iconKey:e,size:a=16}){if(e&&!(e in B.t))return(0,n.jsx)("span",{style:{fontSize:a,lineHeight:1,display:"flex",alignItems:"center"},children:e});let o=e?B.t[e]:null;return o?(0,n.jsx)(o,{size:a,strokeWidth:1.75}):(0,n.jsxs)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,n.jsx)("polyline",{points:"14 2 14 8 20 8"})]})}function G({entry:e,activeId:a,onSelect:o}){let[i,r]=(0,t.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:c,cancelFlyoutClose:m}=(0,d.c)();return e.children&&e.children.length>0?(0,n.jsxs)(L,{children:[(0,n.jsxs)(P,{collapsed:l,onClick:()=>{l||r(e=>!e)},onMouseEnter:l?a=>{s(e,a.currentTarget.getBoundingClientRect().top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,n.jsxs)(O,{collapsed:l,children:[(0,n.jsx)(H,{iconKey:e.icon,size:16}),(0,n.jsx)(N,{collapsed:l,children:e.name})]}),(0,n.jsx)(D,{open:i,collapsed:l,children:(0,n.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round",children:(0,n.jsx)("path",{d:"M9 6l6 6-6 6"})})})]}),(0,n.jsx)(E,{open:i&&!l,children:(0,n.jsx)(F,{children:(0,n.jsx)(R,{children:e.children.map(e=>(0,n.jsx)(G,{entry:e,activeId:a,onSelect:o},e.id))})})})]}):(0,n.jsxs)(I,{active:a===e.id,collapsed:l,onClick:()=>o(e),onMouseEnter:l?a=>{let i=a.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},i.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,n.jsx)(H,{iconKey:e.icon,size:15}),(0,n.jsx)(N,{collapsed:l,children:e.name})]})}function W({entries:e,activeId:a,onSelect:o}){return(0,n.jsx)("div",{children:e.map(e=>(0,n.jsx)(G,{entry:e,activeId:a,onSelect:o},e.id))})}let Y=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;s().div`
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
    border-right-color: ${i.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${i.w4.colors.surface};
  }
`,s().span`
  display: block;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${i.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${i.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${i.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${i.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,o(48859),s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  cursor: pointer;
  color: ${i.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    color: ${i.w4.colors.accent};
    border-color: ${i.w4.colors.accent};
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
`,[{id:"europe",name:"Europe",icon:"\uD83C\uDF0D",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"lourinha",name:"Lourinh\xe3",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"\uD83C\uDDEC\uD83C\uDDE7",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"\uD83C\uDDEB\uD83C\uDDF7",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"\uD83C\uDDE9\uD83C\uDDEA",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"\uD83C\uDDEA\uD83C\uDDF8",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"\uD83C\uDDEE\uD83C\uDDF9",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"\uD83C\uDDF3\uD83C\uDDF1",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"\uD83C\uDDEC\uD83C\uDDF7",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"\uD83C\uDDE7\uD83C\uDDEA",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"\uD83C\uDDE6\uD83C\uDDF9",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"\uD83C\uDDF5\uD83C\uDDF1",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"\uD83C\uDDF8\uD83C\uDDEA",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"\uD83C\uDDF3\uD83C\uDDF4",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"\uD83C\uDDE9\uD83C\uDDF0",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"\uD83C\uDDEB\uD83C\uDDEE",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"\uD83C\uDDEE\uD83C\uDDF8",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"\uD83C\uDDEE\uD83C\uDDEA",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"\uD83C\uDDE8\uD83C\uDDED",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"\uD83C\uDDFA\uD83C\uDDE6",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"\uD83C\uDDF7\uD83C\uDDFA",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"\uD83C\uDDF7\uD83C\uDDF4",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"\uD83C\uDDED\uD83C\uDDFA",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"\uD83C\uDDE8\uD83C\uDDFF",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"\uD83C\uDDF8\uD83C\uDDF0",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"\uD83C\uDDF8\uD83C\uDDEE",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"\uD83C\uDDED\uD83C\uDDF7",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"\uD83C\uDDF7\uD83C\uDDF8",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"\uD83C\uDDE7\uD83C\uDDE6",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"\uD83C\uDDE7\uD83C\uDDEC",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"\uD83C\uDDEA\uD83C\uDDEA",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"\uD83C\uDDF1\uD83C\uDDFB",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"\uD83C\uDDF1\uD83C\uDDF9",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"\uD83C\uDDE7\uD83C\uDDFE",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"\uD83C\uDDF2\uD83C\uDDE9",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"\uD83C\uDDE6\uD83C\uDDF1",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"\uD83C\uDDF2\uD83C\uDDF0",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"\uD83C\uDDF2\uD83C\uDDEA",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"\uD83C\uDDE8\uD83C\uDDFE",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"\uD83C\uDDF2\uD83C\uDDF9",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"\uD83C\uDDF1\uD83C\uDDFA",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"\uD83C\uDDE6\uD83C\uDDE9",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"\uD83C\uDDF2\uD83C\uDDE8",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"\uD83C\uDDF8\uD83C\uDDF2",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"\uD83C\uDDF1\uD83C\uDDEE",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"\uD83C\uDDFB\uD83C\uDDE6",zoom:15}]},{id:"americas",name:"Americas",icon:"\uD83C\uDF0E",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"\uD83C\uDDE8\uD83C\uDDE6",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"\uD83C\uDDF2\uD83C\uDDFD",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"\uD83C\uDDE7\uD83C\uDDFF",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"\uD83C\uDDEC\uD83C\uDDF9",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"\uD83C\uDDF8\uD83C\uDDFB",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"\uD83C\uDDED\uD83C\uDDF3",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"\uD83C\uDDF3\uD83C\uDDEE",zoom:12},{id:"san-jose-cr",name:"San Jos\xe9",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"\uD83C\uDDE8\uD83C\uDDF7",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"\uD83C\uDDF5\uD83C\uDDE6",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"\uD83C\uDDE8\uD83C\uDDFA",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"\uD83C\uDDE7\uD83C\uDDF8",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"\uD83C\uDDEF\uD83C\uDDF2",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"\uD83C\uDDED\uD83C\uDDF9",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"\uD83C\uDDE9\uD83C\uDDF4",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"\uD83C\uDDF0\uD83C\uDDF3",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"\uD83C\uDDF1\uD83C\uDDE8",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"\uD83C\uDDFB\uD83C\uDDE8",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"\uD83C\uDDE7\uD83C\uDDE7",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"\uD83C\uDDE6\uD83C\uDDEC",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"\uD83C\uDDE9\uD83C\uDDF2",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"\uD83C\uDDEC\uD83C\uDDE9",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"\uD83C\uDDF9\uD83C\uDDF9",zoom:12},{id:"bogota",name:"Bogot\xe1",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"\uD83C\uDDE8\uD83C\uDDF4",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"\uD83C\uDDFB\uD83C\uDDEA",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"\uD83C\uDDEC\uD83C\uDDFE",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"\uD83C\uDDF8\uD83C\uDDF7",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"\uD83C\uDDEA\uD83C\uDDE8",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"\uD83C\uDDF5\uD83C\uDDEA",zoom:12},{id:"sao-paulo",name:"S\xe3o Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"\uD83C\uDDE7\uD83C\uDDF7",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"\uD83C\uDDE7\uD83C\uDDF4",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"\uD83C\uDDE8\uD83C\uDDF1",zoom:12},{id:"asuncion",name:"Asunci\xf3n",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"\uD83C\uDDF5\uD83C\uDDFE",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"\uD83C\uDDE6\uD83C\uDDF7",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"\uD83C\uDDFA\uD83C\uDDFE",zoom:12}]},{id:"africa",name:"Africa",icon:"\uD83C\uDF0D",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"\uD83C\uDDF2\uD83C\uDDE6",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"\uD83C\uDDE9\uD83C\uDDFF",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"\uD83C\uDDF9\uD83C\uDDF3",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"\uD83C\uDDF1\uD83C\uDDFE",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"\uD83C\uDDEA\uD83C\uDDEC",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"\uD83C\uDDF8\uD83C\uDDE9",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"\uD83C\uDDF8\uD83C\uDDF3",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"\uD83C\uDDEC\uD83C\uDDF2",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"\uD83C\uDDEC\uD83C\uDDFC",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"\uD83C\uDDEC\uD83C\uDDF3",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"\uD83C\uDDF8\uD83C\uDDF1",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"\uD83C\uDDF1\uD83C\uDDF7",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"\uD83C\uDDE8\uD83C\uDDEE",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"\uD83C\uDDEC\uD83C\uDDED",zoom:12},{id:"lome",name:"Lom\xe9",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"\uD83C\uDDF9\uD83C\uDDEC",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"\uD83C\uDDE7\uD83C\uDDEF",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"\uD83C\uDDF3\uD83C\uDDEC",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"\uD83C\uDDF3\uD83C\uDDEA",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"\uD83C\uDDF2\uD83C\uDDF1",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"\uD83C\uDDE7\uD83C\uDDEB",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"\uD83C\uDDF2\uD83C\uDDF7",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"\uD83C\uDDE8\uD83C\uDDFB",zoom:13},{id:"yaounde",name:"Yaound\xe9",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"\uD83C\uDDE8\uD83C\uDDF2",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"\uD83C\uDDF9\uD83C\uDDE9",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"\uD83C\uDDE8\uD83C\uDDEB",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"\uD83C\uDDEC\uD83C\uDDF6",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"\uD83C\uDDEC\uD83C\uDDE6",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"\uD83C\uDDE8\uD83C\uDDEC",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"\uD83C\uDDE8\uD83C\uDDE9",zoom:12},{id:"sao-tome",name:"S\xe3o Tom\xe9",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"\uD83C\uDDF8\uD83C\uDDF9",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"\uD83C\uDDF8\uD83C\uDDF8",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"\uD83C\uDDEA\uD83C\uDDF9",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"\uD83C\uDDEA\uD83C\uDDF7",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"\uD83C\uDDE9\uD83C\uDDEF",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"\uD83C\uDDF8\uD83C\uDDF4",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"\uD83C\uDDF0\uD83C\uDDEA",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"\uD83C\uDDFA\uD83C\uDDEC",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"\uD83C\uDDF7\uD83C\uDDFC",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"\uD83C\uDDE7\uD83C\uDDEE",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"\uD83C\uDDF9\uD83C\uDDFF",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"\uD83C\uDDF2\uD83C\uDDEC",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"\uD83C\uDDF0\uD83C\uDDF2",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"\uD83C\uDDF2\uD83C\uDDFA",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"\uD83C\uDDF8\uD83C\uDDE8",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"\uD83C\uDDE6\uD83C\uDDF4",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"\uD83C\uDDFF\uD83C\uDDF2",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"\uD83C\uDDF2\uD83C\uDDFC",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"\uD83C\uDDF2\uD83C\uDDFF",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"\uD83C\uDDFF\uD83C\uDDFC",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"\uD83C\uDDE7\uD83C\uDDFC",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"\uD83C\uDDF3\uD83C\uDDE6",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"\uD83C\uDDFF\uD83C\uDDE6",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"\uD83C\uDDF8\uD83C\uDDFF",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"\uD83C\uDDF1\uD83C\uDDF8",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"\uD83D\uDD4C",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"\uD83C\uDDF8\uD83C\uDDE6",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"\uD83C\uDDE6\uD83C\uDDEA",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"\uD83C\uDDF6\uD83C\uDDE6",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"\uD83C\uDDE7\uD83C\uDDED",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"\uD83C\uDDF0\uD83C\uDDFC",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"\uD83C\uDDF4\uD83C\uDDF2",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"\uD83C\uDDFE\uD83C\uDDEA",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"\uD83C\uDDEE\uD83C\uDDF6",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"\uD83C\uDDEE\uD83C\uDDF7",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"\uD83C\uDDF9\uD83C\uDDF7",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"\uD83C\uDDF1\uD83C\uDDE7",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"\uD83C\uDDF8\uD83C\uDDFE",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"\uD83C\uDDEF\uD83C\uDDF4",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"\uD83C\uDDEE\uD83C\uDDF1",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"\uD83C\uDDF5\uD83C\uDDF8",zoom:13}]},{id:"asia",name:"Asia",icon:"\uD83C\uDF0F",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"\uD83C\uDDE6\uD83C\uDDEB",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"\uD83C\uDDF0\uD83C\uDDFF",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"\uD83C\uDDF0\uD83C\uDDEC",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"\uD83C\uDDFA\uD83C\uDDFF",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"\uD83C\uDDF9\uD83C\uDDEF",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"\uD83C\uDDF9\uD83C\uDDF2",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"\uD83C\uDDE6\uD83C\uDDF2",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"\uD83C\uDDE6\uD83C\uDDFF",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"\uD83C\uDDEC\uD83C\uDDEA",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"\uD83C\uDDF5\uD83C\uDDF0",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"\uD83C\uDDF3\uD83C\uDDF5",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"\uD83C\uDDE7\uD83C\uDDE9",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"\uD83C\uDDF1\uD83C\uDDF0",zoom:12},{id:"male",name:"Mal\xe9",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"\uD83C\uDDF2\uD83C\uDDFB",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"\uD83C\uDDE8\uD83C\uDDF3",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"\uD83C\uDDEF\uD83C\uDDF5",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"\uD83C\uDDF0\uD83C\uDDF7",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"\uD83C\uDDF0\uD83C\uDDF5",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"\uD83C\uDDF2\uD83C\uDDF3",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"\uD83C\uDDF9\uD83C\uDDED",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"\uD83C\uDDFB\uD83C\uDDF3",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"\uD83C\uDDF0\uD83C\uDDED",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"\uD83C\uDDF1\uD83C\uDDE6",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"\uD83C\uDDF2\uD83C\uDDF2",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"\uD83C\uDDF2\uD83C\uDDFE",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"\uD83C\uDDF8\uD83C\uDDEC",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"\uD83C\uDDEE\uD83C\uDDE9",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"\uD83C\uDDF5\uD83C\uDDED",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"\uD83C\uDDE7\uD83C\uDDF3",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"\uD83C\uDDF9\uD83C\uDDF1",zoom:13}]},{id:"oceania",name:"Oceania",icon:"\uD83C\uDF0A",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"\uD83C\uDDE6\uD83C\uDDFA",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"\uD83C\uDDF3\uD83C\uDDFF",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"\uD83C\uDDF5\uD83C\uDDEC",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"\uD83C\uDDEB\uD83C\uDDEF",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"\uD83C\uDDF8\uD83C\uDDE7",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"\uD83C\uDDFB\uD83C\uDDFA",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"\uD83C\uDDF9\uD83C\uDDF4",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"\uD83C\uDDFC\uD83C\uDDF8",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"\uD83C\uDDF9\uD83C\uDDFB",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"\uD83C\uDDF0\uD83C\uDDEE",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"\uD83C\uDDF2\uD83C\uDDED",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"\uD83C\uDDEB\uD83C\uDDF2",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"\uD83C\uDDF5\uD83C\uDDFC",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"\uD83C\uDDF3\uD83C\uDDF7",zoom:14}]}].flatMap(e=>e.places);var V=o(14453);s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,s().div`
  background: ${i.w4.colors.sidebarBg};
  border: 1px solid ${i.w4.colors.sidebarBorder};
  border-radius: ${i.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,s().div`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
`,s().input`
  width: 100%;
  padding: 8px 12px;
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeBase};
  font-family: ${i.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${i.w4.colors.accent}; }
  &::placeholder { color: ${i.w4.colors.sidebarTextMuted}; }
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,s().button`
  padding: 7px 18px;
  border-radius: ${i.w4.borderRadius.md};
  font-size: ${i.w4.typography.fontSizeBase};
  font-family: ${i.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:a})=>a?"rgba(248,81,73,0.12)":e?i.w4.colors.accent:"none"};
  color: ${({primary:e,danger:a})=>a?i.w4.colors.danger:e?"#fff":i.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:a})=>a?i.w4.colors.danger:e?i.w4.colors.accent:i.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,s().div`
  height: 1px;
  background: ${i.w4.colors.border};
  margin: 0 -4px;
`,s().div`
  font-size: 11px;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
`;let K=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,_=(0,c.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`;s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${i.w4.spacing.md};
  animation: ${K} 0.15s ease both;
`,s().div`
  background: ${i.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?i.w4.colors.danger+"55":i.w4.colors.sidebarBorder};
  border-radius: ${i.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${i.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${_} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,s().div`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?i.w4.colors.danger:i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
`,s().div`
  font-size: ${i.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${i.w4.colors.mainTextMuted};
  font-family: ${i.w4.typography.fontFamily};
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${i.w4.spacing.sm};
`,s().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${i.w4.typography.fontSizeBase};
  font-family: ${i.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${i.w4.transitions.fast},
    border-color ${i.w4.transitions.fast},
    color ${i.w4.transitions.fast},
    opacity ${i.w4.transitions.fast};

  background: ${({primary:e,danger:a})=>a?i.w4.colors.danger:e?i.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:a})=>a||e?"#fff":i.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:a})=>a?i.w4.colors.danger:e?i.w4.colors.accent:i.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${i.w4.focusRing} }
`,s().div`
  position: relative;
`,s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeBase};
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    border-color: ${i.w4.colors.accent};
  }
`,s().div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${i.w4.colors.sidebarBg};
  border: 1px solid ${i.w4.colors.sidebarBorder};
  border-radius: ${i.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,s().div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,s().div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,s().div`
  padding: 16px 14px;
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  font-style: italic;
`,s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
  }
`,s().button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,s().div`
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,s().div`
  font-size: 11px;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  margin-top: 1px;
`,s().button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${i.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`,s().div`
  padding: ${i.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,s().section`
  scroll-margin-top: ${i.w4.spacing.lg};
`,s().div`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.lg};
`,s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${i.w4.spacing.xl};

  @media (max-width: ${i.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,s().div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${i.w4.colors.mainBg};
  font-family: ${i.w4.typography.fontFamily};
  color: ${i.w4.colors.mainText};
  overflow: hidden;
`,s().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding-left: max(${i.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${i.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${i.w4.spacing.sm};
  z-index: 100;
`,s().button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${i.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${i.w4.colors.accent}; }
`,s().span`
  color: ${i.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,s().div`
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,s().span`
  font-weight: 400;
  color: ${i.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,s().div`
  flex: 1;
`;let U=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,J=(0,c.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,q=(0,c.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${i.w4.colors.mainBg};
  font-family: ${i.w4.typography.fontFamily};
  animation: ${U} 0.4s ease 0.15s both;
`,s().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,s().div`
  position: absolute;
  inset: 0;
  animation: ${J} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
`,s().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${i.w4.colors.border};
  animation: ${q} 1.4s ease-in-out infinite;
`,s().span`
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`},81316(e,a,o){o.d(a,{w4:()=>t});let i={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},n="--at-",t={colors:function(){let e={};for(let a of Object.keys(i))e[a]=`var(${n}${a})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${n}suiteLab)`,vida:`var(${n}suiteVida)`,learn:`var(${n}suiteLearn)`,games:`var(${n}suiteGames)`,ent:`var(${n}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",xl:"0 40px 120px var(--at-shadowStrong), 0 8px 24px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:`
    outline: 2px solid var(--at-accent);
    outline-offset: 2px;
  `}},81592(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"e1-greetings","name":"Greetings","icon":"hand","file":"english/en/year1/greetings.md"},{"id":"e1-numbers","name":"Numbers 1–10","icon":"hash","file":"english/en/year1/numbers.md"},{"id":"e1-colors","name":"Colors","icon":"palette","file":"english/en/year1/colors.md"},{"id":"e1-animals","name":"Animals","icon":"feather","file":"english/en/year1/animals.md"},{"id":"e1-family","name":"Family","icon":"heart","file":"english/en/year1/family.md"},{"id":"e1-classroom","name":"Classroom","icon":"map","file":"english/en/year1/classroom.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"e2-food","name":"Food","icon":"apple","file":"english/en/year2/food.md"},{"id":"e2-body","name":"Body Parts","icon":"activity","file":"english/en/year2/body.md"},{"id":"e2-weather","name":"Weather","icon":"cloud","file":"english/en/year2/weather.md"},{"id":"e2-days","name":"Days & Months","icon":"calendar","file":"english/en/year2/days.md"},{"id":"e2-clothes","name":"Clothes","icon":"shirt","file":"english/en/year2/clothes.md"},{"id":"e2-house","name":"The House","icon":"home","file":"english/en/year2/house.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"e3-routines","name":"Daily Routines","icon":"clock","file":"english/en/year3/routines.md"},{"id":"e3-sports","name":"Sports","icon":"trophy","file":"english/en/year3/sports.md"},{"id":"e3-nature","name":"Nature","icon":"leaf","file":"english/en/year3/nature.md"},{"id":"e3-directions","name":"Directions","icon":"compass","file":"english/en/year3/directions.md"},{"id":"e3-time","name":"Telling Time","icon":"watch","file":"english/en/year3/time.md"},{"id":"e3-jobs","name":"Jobs","icon":"briefcase","file":"english/en/year3/jobs.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"e4-past","name":"Simple Past","icon":"clock","file":"english/en/year4/past.md"},{"id":"e4-comparatives","name":"Comparatives","icon":"bar-chart-2","file":"english/en/year4/comparatives.md"},{"id":"e4-travel","name":"Travel","icon":"plane","file":"english/en/year4/travel.md"},{"id":"e4-media","name":"Media & Technology","icon":"monitor","file":"english/en/year4/media.md"},{"id":"e4-health","name":"Health","icon":"heart","file":"english/en/year4/health.md"},{"id":"e4-environment","name":"Environment","icon":"globe","file":"english/en/year4/environment.md"}]},{"id":"year5","name":"Year 5","icon":"⑤","defaultOpen":false,"children":[{"id":"e5-future","name":"Simple Future","icon":"arrow-right","file":"english/en/year5/future.md"},{"id":"e5-conditionals","name":"Conditionals","icon":"git-branch","file":"english/en/year5/conditionals.md"},{"id":"e5-culture","name":"Culture","icon":"landmark","file":"english/en/year5/culture.md"},{"id":"e5-technology","name":"Technology","icon":"cpu","file":"english/en/year5/technology.md"},{"id":"e5-debate","name":"Debate & Opinion","icon":"message-circle","file":"english/en/year5/debate.md"},{"id":"e5-writing","name":"Creative Writing","icon":"pen-tool","file":"english/en/year5/writing.md"}]},{"id":"resources","name":"Resources","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-eng-vocab","name":"Essential Vocabulary","icon":"list","file":"english/en/resources/vocabulary.md"},{"id":"res-eng-verbs","name":"Verb Tables","icon":"zap","file":"english/en/resources/verbs.md"},{"id":"res-eng-phrases","name":"Useful Phrases","icon":"message-square","file":"english/en/resources/phrases.md"},{"id":"res-eng-pronunciation","name":"Pronunciation Guide","icon":"volume-2","file":"english/en/resources/pronunciation.md"}]}]}')},43547(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.\xba Ano","icon":"①","defaultOpen":false,"children":[{"id":"e1-greetings","name":"Cumprimentos","icon":"hand","file":"english/pt/year1/greetings.md"},{"id":"e1-numbers","name":"N\xfameros 1–10","icon":"hash","file":"english/pt/year1/numbers.md"},{"id":"e1-colors","name":"Cores","icon":"palette","file":"english/pt/year1/colors.md"},{"id":"e1-animals","name":"Animais","icon":"feather","file":"english/pt/year1/animals.md"},{"id":"e1-family","name":"Fam\xedlia","icon":"heart","file":"english/pt/year1/family.md"},{"id":"e1-classroom","name":"Sala de Aula","icon":"map","file":"english/pt/year1/classroom.md"}]},{"id":"year2","name":"2.\xba Ano","icon":"②","defaultOpen":false,"children":[{"id":"e2-food","name":"Comida","icon":"apple","file":"english/pt/year2/food.md"},{"id":"e2-body","name":"Corpo Humano","icon":"activity","file":"english/pt/year2/body.md"},{"id":"e2-weather","name":"Tempo e Clima","icon":"cloud","file":"english/pt/year2/weather.md"},{"id":"e2-days","name":"Dias e Meses","icon":"calendar","file":"english/pt/year2/days.md"},{"id":"e2-clothes","name":"Roupa","icon":"shirt","file":"english/pt/year2/clothes.md"},{"id":"e2-house","name":"A Casa","icon":"home","file":"english/pt/year2/house.md"}]},{"id":"year3","name":"3.\xba Ano","icon":"③","defaultOpen":false,"children":[{"id":"e3-routines","name":"Rotinas Di\xe1rias","icon":"clock","file":"english/pt/year3/routines.md"},{"id":"e3-sports","name":"Desportos","icon":"trophy","file":"english/pt/year3/sports.md"},{"id":"e3-nature","name":"Natureza","icon":"leaf","file":"english/pt/year3/nature.md"},{"id":"e3-directions","name":"Dire\xe7\xf5es","icon":"compass","file":"english/pt/year3/directions.md"},{"id":"e3-time","name":"As Horas","icon":"watch","file":"english/pt/year3/time.md"},{"id":"e3-jobs","name":"Profiss\xf5es","icon":"briefcase","file":"english/pt/year3/jobs.md"}]},{"id":"year4","name":"4.\xba Ano","icon":"④","defaultOpen":false,"children":[{"id":"e4-past","name":"Passado Simples","icon":"clock","file":"english/pt/year4/past.md"},{"id":"e4-comparatives","name":"Comparativos","icon":"bar-chart-2","file":"english/pt/year4/comparatives.md"},{"id":"e4-travel","name":"Viagens","icon":"plane","file":"english/pt/year4/travel.md"},{"id":"e4-media","name":"M\xe9dia e Tecnologia","icon":"monitor","file":"english/pt/year4/media.md"},{"id":"e4-health","name":"Sa\xfade","icon":"heart","file":"english/pt/year4/health.md"},{"id":"e4-environment","name":"Ambiente","icon":"globe","file":"english/pt/year4/environment.md"}]},{"id":"year5","name":"5.\xba Ano","icon":"⑤","defaultOpen":false,"children":[{"id":"e5-future","name":"Futuro Simples","icon":"arrow-right","file":"english/pt/year5/future.md"},{"id":"e5-conditionals","name":"Condicionais","icon":"git-branch","file":"english/pt/year5/conditionals.md"},{"id":"e5-culture","name":"Cultura","icon":"landmark","file":"english/pt/year5/culture.md"},{"id":"e5-technology","name":"Tecnologia","icon":"cpu","file":"english/pt/year5/technology.md"},{"id":"e5-debate","name":"Debate e Opini\xe3o","icon":"message-circle","file":"english/pt/year5/debate.md"},{"id":"e5-writing","name":"Escrita Criativa","icon":"pen-tool","file":"english/pt/year5/writing.md"}]},{"id":"resources","name":"Recursos","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-eng-vocab","name":"Vocabul\xe1rio Essencial","icon":"list","file":"english/pt/resources/vocabulario.md"},{"id":"res-eng-verbs","name":"Tabela de Verbos","icon":"zap","file":"english/pt/resources/verbos.md"},{"id":"res-eng-phrases","name":"Frases \xdateis","icon":"message-square","file":"english/pt/resources/frases.md"},{"id":"res-eng-pronunciation","name":"Guia de Pron\xfancia","icon":"volume-2","file":"english/pt/resources/pronuncia.md"}]}]}')},78844(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-numeros","name":"Numbers to 20","icon":"hash","file":"math/en/year1/numbers.md"},{"id":"y1-adicao","name":"Addition","icon":"plus","file":"math/en/year1/addition.md"},{"id":"y1-subtracao","name":"Subtraction","icon":"minus","file":"math/en/year1/subtraction.md"},{"id":"y1-geometria","name":"Geometry","icon":"triangle","file":"math/en/year1/geometry.md"},{"id":"y1-medidas","name":"Measurements","icon":"ruler","file":"math/en/year1/measures.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-numeros","name":"Numbers to 100","icon":"hash","file":"math/en/year2/numbers.md"},{"id":"y2-adicao","name":"Addition with Carrying","icon":"plus","file":"math/en/year2/addition.md"},{"id":"y2-subtracao","name":"Subtraction with Borrowing","icon":"minus","file":"math/en/year2/subtraction.md"},{"id":"y2-tabuadas","name":"Times Tables \xd7 2, \xd7 5, \xd7 10","icon":"x","file":"math/en/year2/multiplication.md"},{"id":"y2-geometria","name":"Geometry","icon":"triangle","file":"math/en/year2/geometry.md"},{"id":"y2-medidas","name":"Measurements","icon":"ruler","file":"math/en/year2/measures.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-numeros","name":"Numbers to 1000","icon":"hash","file":"math/en/year3/numbers.md"},{"id":"y3-multiplicacao","name":"Times Tables \xd7 3 to \xd7 9","icon":"x","file":"math/en/year3/multiplication.md"},{"id":"y3-divisao","name":"Division","icon":"slash","file":"math/en/year3/division.md"},{"id":"y3-fracoes","name":"Fractions","icon":"pie-chart","file":"math/en/year3/fractions.md"},{"id":"y3-geometria","name":"Geometry","icon":"triangle","file":"math/en/year3/geometry.md"},{"id":"y3-medidas","name":"Measurements","icon":"ruler","file":"math/en/year3/measures.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-numeros","name":"Numbers to 1 000 000","icon":"hash","file":"math/en/year4/numbers.md"},{"id":"y4-multiplicacao","name":"Multiplication","icon":"x","file":"math/en/year4/multiplication.md"},{"id":"y4-divisao","name":"Division with Remainder","icon":"slash","file":"math/en/year4/division.md"},{"id":"y4-decimais","name":"Decimal Numbers","icon":"circle-dot","file":"math/en/year4/decimals.md"},{"id":"y4-geometria","name":"Geometry","icon":"triangle","file":"math/en/year4/geometry.md"},{"id":"y4-medidas","name":"Measurements","icon":"ruler","file":"math/en/year4/measures.md"},{"id":"y4-dados","name":"Data Handling","icon":"bar-chart-2","file":"math/en/year4/data.md"}]},{"id":"resources","name":"Resources","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-tabuadas","name":"Times Tables","icon":"grid","file":"math/en/resources/timestables.md"},{"id":"res-formas","name":"Geometric Shapes","icon":"hexagon","file":"math/en/resources/shapes.md"},{"id":"res-areas","name":"Areas & Perimeters","icon":"square","file":"math/en/resources/areas.md"},{"id":"res-unidades","name":"Units of Measurement","icon":"ruler","file":"math/en/resources/units.md"},{"id":"res-romanos","name":"Roman Numerals","icon":"landmark","file":"math/en/resources/roman.md"},{"id":"res-relogio","name":"Interactive Clock","icon":"clock","file":"math/en/resources/clock.md"}]}]}')},41223(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.\xba Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-numeros","name":"N\xfameros at\xe9 20","icon":"hash","file":"math/pt/year1/numbers.md"},{"id":"y1-adicao","name":"Adi\xe7\xe3o","icon":"plus","file":"math/pt/year1/addition.md"},{"id":"y1-subtracao","name":"Subtra\xe7\xe3o","icon":"minus","file":"math/pt/year1/subtraction.md"},{"id":"y1-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year1/geometria.md"},{"id":"y1-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year1/medidas.md"}]},{"id":"year2","name":"2.\xba Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-numeros","name":"N\xfameros at\xe9 100","icon":"hash","file":"math/pt/year2/numbers.md"},{"id":"y2-adicao","name":"Adi\xe7\xe3o com Transporte","icon":"plus","file":"math/pt/year2/addition.md"},{"id":"y2-subtracao","name":"Subtra\xe7\xe3o com Empr\xe9stimo","icon":"minus","file":"math/pt/year2/subtraction.md"},{"id":"y2-tabuadas","name":"Tabuadas \xd7 2, \xd7 5, \xd7 10","icon":"x","file":"math/pt/year2/multiplication.md"},{"id":"y2-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year2/geometria.md"},{"id":"y2-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year2/medidas.md"}]},{"id":"year3","name":"3.\xba Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-numeros","name":"N\xfameros at\xe9 1000","icon":"hash","file":"math/pt/year3/numbers.md"},{"id":"y3-multiplicacao","name":"Tabuadas \xd7 3 ao \xd7 9","icon":"x","file":"math/pt/year3/multiplication.md"},{"id":"y3-divisao","name":"Divis\xe3o","icon":"slash","file":"math/pt/year3/division.md"},{"id":"y3-fracoes","name":"Fra\xe7\xf5es","icon":"pie-chart","file":"math/pt/year3/fractions.md"},{"id":"y3-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year3/geometria.md"},{"id":"y3-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year3/medidas.md"}]},{"id":"year4","name":"4.\xba Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-numeros","name":"N\xfameros at\xe9 1 000 000","icon":"hash","file":"math/pt/year4/numbers.md"},{"id":"y4-multiplicacao","name":"Multiplica\xe7\xe3o","icon":"x","file":"math/pt/year4/multiplication.md"},{"id":"y4-divisao","name":"Divis\xe3o com Resto","icon":"slash","file":"math/pt/year4/division.md"},{"id":"y4-decimais","name":"N\xfameros Decimais","icon":"circle-dot","file":"math/pt/year4/decimals.md"},{"id":"y4-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year4/geometria.md"},{"id":"y4-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year4/medidas.md"},{"id":"y4-dados","name":"Tratamento de Dados","icon":"bar-chart-2","file":"math/pt/year4/dados.md"}]},{"id":"resources","name":"Recursos","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-tabuadas","name":"Tabuadas","icon":"grid","file":"math/pt/resources/tabuadas.md"},{"id":"res-formas","name":"Formas Geom\xe9tricas","icon":"hexagon","file":"math/pt/resources/formas.md"},{"id":"res-areas","name":"\xc1reas e Per\xedmetros","icon":"square","file":"math/pt/resources/areas.md"},{"id":"res-unidades","name":"Unidades de Medida","icon":"ruler","file":"math/pt/resources/unidades.md"},{"id":"res-romanos","name":"N\xfameros Romanos","icon":"landmark","file":"math/pt/resources/romanos.md"},{"id":"res-relogio","name":"Rel\xf3gio Interativo","icon":"clock","file":"math/pt/resources/relogio.md"}]}]}')},75539(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year1/reading.md"},{"id":"y1-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year1/grammar.md"},{"id":"y1-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year1/vocabulary.md"},{"id":"y1-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year1/spelling.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year2/reading.md"},{"id":"y2-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year2/grammar.md"},{"id":"y2-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year2/texttypes.md"},{"id":"y2-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year2/vocabulary.md"},{"id":"y2-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year2/spelling.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year3/reading.md"},{"id":"y3-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year3/grammar.md"},{"id":"y3-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year3/texttypes.md"},{"id":"y3-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year3/vocabulary.md"},{"id":"y3-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year3/spelling.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year4/reading.md"},{"id":"y4-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year4/grammar.md"},{"id":"y4-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year4/texttypes.md"},{"id":"y4-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year4/vocabulary.md"},{"id":"y4-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year4/spelling.md"}]},{"id":"resources","name":"Resources","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-alfabeto","name":"Alphabet & Sounds","icon":"a-large-small","file":"portuguese/en/resources/alphabet.md"},{"id":"res-pontuacao","name":"Punctuation Marks","icon":"circle-dot","file":"portuguese/en/resources/punctuation.md"},{"id":"res-classes","name":"Word Classes","icon":"layers","file":"portuguese/en/resources/wordclasses.md"},{"id":"res-verbos","name":"Verb Conjugation","icon":"zap","file":"portuguese/en/resources/verbs.md"}]}]}')},80940(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.\xba Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year1/leitura.md"},{"id":"y1-gramatica","name":"Gram\xe1tica","icon":"type","file":"portuguese/pt/year1/gramatica.md"},{"id":"y1-vocabulario","name":"Vocabul\xe1rio","icon":"list","file":"portuguese/pt/year1/vocabulario.md"},{"id":"y1-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year1/ortografia.md"}]},{"id":"year2","name":"2.\xba Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year2/leitura.md"},{"id":"y2-gramatica","name":"Gram\xe1tica","icon":"type","file":"portuguese/pt/year2/gramatica.md"},{"id":"y2-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year2/texto.md"},{"id":"y2-vocabulario","name":"Vocabul\xe1rio","icon":"list","file":"portuguese/pt/year2/vocabulario.md"},{"id":"y2-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year2/ortografia.md"}]},{"id":"year3","name":"3.\xba Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year3/leitura.md"},{"id":"y3-gramatica","name":"Gram\xe1tica","icon":"type","file":"portuguese/pt/year3/gramatica.md"},{"id":"y3-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year3/texto.md"},{"id":"y3-vocabulario","name":"Vocabul\xe1rio","icon":"list","file":"portuguese/pt/year3/vocabulario.md"},{"id":"y3-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year3/ortografia.md"}]},{"id":"year4","name":"4.\xba Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year4/leitura.md"},{"id":"y4-gramatica","name":"Gram\xe1tica","icon":"type","file":"portuguese/pt/year4/gramatica.md"},{"id":"y4-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year4/texto.md"},{"id":"y4-vocabulario","name":"Vocabul\xe1rio","icon":"list","file":"portuguese/pt/year4/vocabulario.md"},{"id":"y4-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year4/ortografia.md"}]},{"id":"resources","name":"Recursos","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-alfabeto","name":"Alfabeto e Sons","icon":"a-large-small","file":"portuguese/pt/resources/alfabeto.md"},{"id":"res-pontuacao","name":"Sinais de Pontua\xe7\xe3o","icon":"circle-dot","file":"portuguese/pt/resources/pontuacao.md"},{"id":"res-classes","name":"Classes de Palavras","icon":"layers","file":"portuguese/pt/resources/classes.md"},{"id":"res-verbos","name":"Verbos — Conjuga\xe7\xe3o","icon":"zap","file":"portuguese/pt/resources/verbos.md"}]}]}')},8050(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-corpo","name":"My Body","icon":"activity","file":"science/en/year1/body.md"},{"id":"y1-familia","name":"My Family","icon":"heart","file":"science/en/year1/family.md"},{"id":"y1-escola","name":"My School","icon":"map","file":"science/en/year1/school.md"},{"id":"y1-seres-vivos","name":"Living Things","icon":"feather","file":"science/en/year1/livingthings.md"},{"id":"y1-estacoes","name":"Seasons of the Year","icon":"sun","file":"science/en/year1/seasons.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-corpo","name":"The Human Body","icon":"activity","file":"science/en/year2/body.md"},{"id":"y2-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year2/health.md"},{"id":"y2-animais","name":"Animals","icon":"feather","file":"science/en/year2/animals.md"},{"id":"y2-plantas","name":"Plants","icon":"leaf","file":"science/en/year2/plants.md"},{"id":"y2-transportes","name":"Transport","icon":"truck","file":"science/en/year2/transport.md"},{"id":"y2-orientacao","name":"Orientation & Maps","icon":"compass","file":"science/en/year2/orientation.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-corpo","name":"The Human Body","icon":"activity","file":"science/en/year3/body.md"},{"id":"y3-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year3/health.md"},{"id":"y3-animais","name":"Animals","icon":"feather","file":"science/en/year3/animals.md"},{"id":"y3-plantas","name":"Plants","icon":"leaf","file":"science/en/year3/plants.md"},{"id":"y3-portugal","name":"Portugal","icon":"map","file":"science/en/year3/portugal.md"},{"id":"y3-rochas","name":"Rocks & Soil","icon":"mountain","file":"science/en/year3/rocks.md"},{"id":"y3-astros","name":"Space & Stars","icon":"star","file":"science/en/year3/space.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-corpo","name":"The Human Body","icon":"activity","file":"science/en/year4/body.md"},{"id":"y4-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year4/health.md"},{"id":"y4-animais","name":"Animals","icon":"feather","file":"science/en/year4/animals.md"},{"id":"y4-plantas","name":"Plants","icon":"leaf","file":"science/en/year4/plants.md"},{"id":"y4-portugal","name":"Portugal","icon":"map","file":"science/en/year4/portugal.md"},{"id":"y4-historia","name":"History of Portugal","icon":"landmark","file":"science/en/year4/history.md"},{"id":"y4-economia","name":"Economic Activities","icon":"briefcase","file":"science/en/year4/economy.md"},{"id":"y4-rios","name":"Rivers & Mountains","icon":"waves","file":"science/en/year4/rivers.md"}]},{"id":"resources","name":"Resources","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-corpo","name":"The Human Body","icon":"activity","file":"science/en/resources/body.md"},{"id":"res-agua","name":"The Water Cycle","icon":"droplets","file":"science/en/resources/water.md"},{"id":"res-solar","name":"The Solar System","icon":"sun","file":"science/en/resources/solar.md"},{"id":"res-animais","name":"Animal Classification","icon":"feather","file":"science/en/resources/animals.md"}]}]}')},68585(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.\xba Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-corpo","name":"O Meu Corpo","icon":"activity","file":"science/pt/year1/corpo.md"},{"id":"y1-familia","name":"A Minha Fam\xedlia","icon":"heart","file":"science/pt/year1/familia.md"},{"id":"y1-escola","name":"A Minha Escola","icon":"map","file":"science/pt/year1/escola.md"},{"id":"y1-seres-vivos","name":"Os Seres Vivos","icon":"feather","file":"science/pt/year1/seresvivos.md"},{"id":"y1-estacoes","name":"Esta\xe7\xf5es do Ano","icon":"sun","file":"science/pt/year1/estacoes.md"}]},{"id":"year2","name":"2.\xba Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year2/corpo.md"},{"id":"y2-saude","name":"Sa\xfade e Higiene","icon":"heart","file":"science/pt/year2/saude.md"},{"id":"y2-animais","name":"Os Animais","icon":"feather","file":"science/pt/year2/animais.md"},{"id":"y2-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year2/plantas.md"},{"id":"y2-transportes","name":"Meios de Transporte","icon":"truck","file":"science/pt/year2/transportes.md"},{"id":"y2-orientacao","name":"Orienta\xe7\xe3o e Mapas","icon":"compass","file":"science/pt/year2/orientacao.md"}]},{"id":"year3","name":"3.\xba Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year3/corpo.md"},{"id":"y3-saude","name":"Sa\xfade e Higiene","icon":"heart","file":"science/pt/year3/saude.md"},{"id":"y3-animais","name":"Os Animais","icon":"feather","file":"science/pt/year3/animais.md"},{"id":"y3-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year3/plantas.md"},{"id":"y3-portugal","name":"Portugal","icon":"map","file":"science/pt/year3/portugal.md"},{"id":"y3-rochas","name":"Rochas e Solo","icon":"mountain","file":"science/pt/year3/rochas.md"},{"id":"y3-astros","name":"Os Astros","icon":"star","file":"science/pt/year3/astros.md"}]},{"id":"year4","name":"4.\xba Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year4/corpo.md"},{"id":"y4-saude","name":"Sa\xfade e Higiene","icon":"heart","file":"science/pt/year4/saude.md"},{"id":"y4-animais","name":"Os Animais","icon":"feather","file":"science/pt/year4/animais.md"},{"id":"y4-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year4/plantas.md"},{"id":"y4-portugal","name":"Portugal","icon":"map","file":"science/pt/year4/portugal.md"},{"id":"y4-historia","name":"Hist\xf3ria de Portugal","icon":"landmark","file":"science/pt/year4/historia.md"},{"id":"y4-economia","name":"Atividades Econ\xf3micas","icon":"briefcase","file":"science/pt/year4/economia.md"},{"id":"y4-rios","name":"Rios e Serras","icon":"waves","file":"science/pt/year4/rios.md"}]},{"id":"resources","name":"Recursos","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/resources/corpo.md"},{"id":"res-agua","name":"O Ciclo da \xc1gua","icon":"droplets","file":"science/pt/resources/agua.md"},{"id":"res-solar","name":"O Sistema Solar","icon":"sun","file":"science/pt/resources/solar.md"},{"id":"res-animais","name":"Classifica\xe7\xe3o dos Animais","icon":"feather","file":"science/pt/resources/animais.md"}]}]}')}}]);