"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([["362"],{3935(e,t,r){r.r(t),r.d(t,{default:()=>A});var s=r(5723),o=r(7991),n=r(6859),a=r.n(n),i=r(2799),l=r(9874),c=r(8311),d=r(5643),p=r.n(d),h=r(5151),u=r(676);let m=p()??d,f=`You are a code generator. The user describes what they want and you return ONLY a JSON object with the code. No explanation, no markdown fences, no extra text — just the raw JSON.

Return format:
{"html": "...", "css": "...", "js": "...", "react": "..."}

Rules:
- html: the body content only (no <html>, <head>, <body> tags)
- css: complete CSS
- js: vanilla JavaScript (runs after HTML)
- react: JSX code using React 18 loaded from a CDN (global React and ReactDOM). Do NOT use import statements. Destructure hooks from the global: const { useState, useEffect, useRef, useMemo, useCallback } = React; Always include the render call: const root = ReactDOM.createRoot(document.getElementById('root')); root.render(<App />); The html field MUST contain <div id="root"></div> when react is used.
- If a field is not needed, set it to ""
- Use real newlines (\\n) in the code strings for readability — do NOT put everything on one line
- Indent with 2 spaces
- Return valid JSON only`;async function x(e,t,r,s){let o=r&&(r.html||r.css||r.js||r.react)?`Here is the current code:
\`\`\`json
${JSON.stringify(r,null,2)}
\`\`\`

User request: ${t}

Modify the existing code based on the request. Keep what works, change what's asked.`:t,n=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"system",content:f},{role:"user",content:o}],stream:!1,max_tokens:4e3,temperature:.3}),signal:s});if(!n.ok){let e=await n.text();throw Error(`Groq ${n.status}: ${e.slice(0,200)}`)}let a=await n.json(),i=(a.choices?.[0]?.message?.content?.trim()??"").match(/\{[\s\S]*\}/);if(!i)throw Error("No valid JSON in response");let l=JSON.parse(i[0]),c=e=>e?e.includes("\n")?e:e.replace(/;\s*/g,";\n").replace(/\{\s*/g,"{\n  ").replace(/\}\s*/g,"\n}\n").replace(/,\s*\n\s*\n/g,",\n").trim():"";return{html:c(l.html??""),css:c(l.css??""),js:c(l.js??""),react:c(l.react??"")}}let g=(0,i.keyframes)`from{transform:rotate(0deg)}to{transform:rotate(360deg)}`,w=a().span`display:inline-flex;animation: ${g} 1s linear infinite;`,b=a().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 6px ${l.w4.spacing.md};
  background: ${l.w4.colors.sidebarBg};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,y=a().input`
  flex: 1;
  padding: 7px 12px;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamily};
  outline: none;
  transition: border-color ${l.w4.transitions.base};
  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; opacity: 0.5; }
`,$=a().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  background: ${({disabled:e})=>e?l.w4.colors.border:"linear-gradient(135deg, #a371f7, #58a6ff)"};
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  color: ${({disabled:e})=>e?l.w4.colors.mainTextMuted:"#fff"};
  font-size: 13px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  white-space: nowrap;
  transition: opacity ${l.w4.transitions.base};
  &:hover { opacity: ${({disabled:e})=>e?1:.85}; }
`,k=a().span`
  font-size: 11px;
  color: #f87171;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`,j=`
  &::-webkit-scrollbar { width: 6px; height: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${l.w4.colors.border}; border-radius: 3px; }
  &::-webkit-scrollbar-thumb:hover { background: ${l.w4.colors.mainTextMuted}; }
  scrollbar-width: thin;
  scrollbar-color: ${l.w4.colors.border} transparent;
`,v=a().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,S=a().div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${l.w4.colors.sidebarBorder};
  background: ${l.w4.colors.mainBg};
  transition: flex ${l.w4.transitions.slow}, min-width ${l.w4.transitions.slow};
  position: relative;
`,C=a().button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) translateX(100%);
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 4px;
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-left: none;
  border-radius: 0 ${l.w4.borderRadius.md} ${l.w4.borderRadius.md} 0;
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  transition: color ${l.w4.transitions.fast}, background ${l.w4.transitions.fast};
  z-index: 10;
  &:hover { background: ${l.w4.colors.sidebarBorder}; color: ${l.w4.colors.mainText}; }
`,T=a().span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${l.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,R=a().div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${l.w4.colors.sidebarBg};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,z={html:"#f97316",css:"#38bdf8",js:"#facc15",ts:"#3b82f6",react:"#61dafb"},O=a().button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 ${l.w4.spacing.md};
  height: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?z[e.lang]??"#facc15":"transparent"};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: ${l.w4.typography.fontFamily};
  color: ${e=>e.active?z[e.lang]??"#facc15":l.w4.colors.sidebarTextMuted};
  transition: color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};
  &:hover { color: ${e=>z[e.lang]??"#facc15"}; }
`,B=a().span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>z[e.lang]??"#facc15"};
`,N=a().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  margin-left: auto;
  margin-right: 6px;
  transition: background ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};
  &:hover { background: ${l.w4.colors.sidebarBorder}; color: ${l.w4.colors.mainText}; }
`,E=a().div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  background: #fff;
  transition: flex ${l.w4.transitions.slow}, min-width ${l.w4.transitions.slow};
  position: relative;
`,I=a().button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) translateX(-100%);
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 4px;
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-right: none;
  border-radius: ${l.w4.borderRadius.md} 0 0 ${l.w4.borderRadius.md};
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  transition: color ${l.w4.transitions.fast}, background ${l.w4.transitions.fast};
  z-index: 10;
  &:hover { background: ${l.w4.colors.sidebarBorder}; color: ${l.w4.colors.mainText}; }
`,J=a().div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${l.w4.colors.sidebarBg};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  padding: 0 ${l.w4.spacing.md};
  flex-shrink: 0;
`,M=a().span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  flex: 1;
`,D=a().div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,F=a().iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
`,L=a().div`
  max-height: 110px;
  overflow-y: auto;
  background: ${l.w4.colors.mainBg};
  border-top: 1px solid ${l.w4.colors.sidebarBorder};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
  ${j}
`,P=a().div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function U(e,t,r,s="",o=""){let n=o?`
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>`:"";return`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>*, *::before, *::after { box-sizing: border-box; }
${t}
</style>
${n}
</head>
<body>
${e}
<script>
(function() {
  const send = (kind, args) => {
    window.parent.postMessage({ type: 'console', kind, text: args.map(a => {
      try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch { return String(a); }
    }).join(' ') }, '*');
  };
  ['log','warn','error'].forEach(m => {
    const orig = console[m].bind(console);
    console[m] = (...args) => { orig(...args); send(m, args); };
  });
  window.addEventListener('error', e => send('error', [e.message + ' (' + e.filename + ':' + e.lineno + ')']));
})();
</script>
<script>${r}</script>
${s?`<script>${s}</script>`:""}
${o?`<script>${o}</script>`:""}
</body>
</html>`}let q="toolkit:playground";function A({topBarRight:e}){let[t,r]=(0,o.useState)(""),[n,a]=(0,o.useState)(""),[i,d]=(0,o.useState)(""),[p,f]=(0,o.useState)(""),[g,j]=(0,o.useState)(""),[z,Y]=(0,o.useState)("html"),[_,K]=(0,o.useState)(()=>U("","","")),[X,G]=(0,o.useState)(!1),[H,Z]=(0,o.useState)(!1),[Q,V]=(0,o.useState)([]),[W,ee]=(0,o.useState)(!1),[et,er]=(0,o.useState)(null),es=(0,o.useRef)(0),eo=(0,o.useRef)(!1);(0,o.useEffect)(()=>{(0,l.PL)(q).then(e=>{if(e)try{let t=JSON.parse(e);r(t.html??""),a(t.css??""),d(t.js??""),f(t.ts??""),j(t.react??""),K(U(t.html??"",t.css??"",t.js??""))}catch{}eo.current=!0})},[]),(0,o.useEffect)(()=>{if(!eo.current)return;let e=setTimeout(()=>(0,l.Is)(q,JSON.stringify({html:t,css:n,js:i,ts:p,react:g})),500);return()=>clearTimeout(e)},[t,n,i,p,g]);let[en,ea]=(0,o.useState)(""),[ei,el]=(0,o.useState)(!1),[ec,ed]=(0,o.useState)(""),ep=function(){try{let e=localStorage.getItem("atlantis:promptlab:keys");if(!e)return"";return JSON.parse(e).groq??""}catch{return""}}(),eh=!!ep,eu=async e=>{ee(!1),await (0,l.KL)("playground",e,JSON.stringify({html:t,css:n,js:i,ts:p,react:g})),er(null)},em=async()=>{et&&(ee(!1),await (0,l.mZ)(et.id,et.name,JSON.stringify({html:t,css:n,js:i,ts:p,react:g})))};(0,o.useEffect)(()=>{let e=e=>{e.data?.type==="console"&&V(t=>[...t.slice(-49),{kind:e.data.kind,text:e.data.text,id:es.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);let ef=(0,o.useCallback)(async(e,t,r,s,o)=>{V([]);let n="";if(s.trim())try{let e=m.transform(s,{presets:[["typescript",{allExtensions:!0}]],filename:"script.ts"});n=e?.code??""}catch(e){V([{kind:"error",text:`TypeScript: ${e.message}`,id:es.current++}]);return}let a="";if(o.trim())try{let e=m.transform(o,{presets:[["typescript",{allExtensions:!0,isTSX:!0}],["react",{runtime:"classic"}]],filename:"component.tsx"});a=e?.code??""}catch(e){V([{kind:"error",text:`React: ${e.message}`,id:es.current++}]);return}K(U(e,t,r,n,a))},[]),ex=(0,o.useCallback)(async()=>{if(ep&&en.trim()&&!ei){el(!0),ed("");try{let e=await x(ep,en,{html:t,css:n,js:i,react:g});r(e.html),a(e.css),d(e.js),j(e.react),f(""),V([]),ea(""),e.react?(Y("react"),ef(e.html,e.css,e.js,"",e.react)):(Y("html"),ef(e.html,e.css,e.js,"",""))}catch(e){ed(e instanceof Error?e.message:String(e))}finally{el(!1)}}},[ep,en,ei,ef,t,n,i,g]),eg=(0,o.useCallback)(()=>ef(t,n,i,p,g),[t,n,i,p,g,ef]),ew=()=>{!X&&H&&Z(!1),G(e=>!e)},eb=()=>{!H&&X&&G(!1),Z(e=>!e)},ey="html"===z?t:"css"===z?n:"js"===z?i:"ts"===z?p:g,e$="html"===z?r:"css"===z?a:"js"===z?d:"ts"===z?f:j,ek=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c.M7,{children:[(0,s.jsx)(c.$n,{variant:"ghost",onClick:()=>{r(""),a(""),d(""),f(""),j(""),V([]),K(U("","","")),er(null),(0,l.Is)(q,"")},title:"Clear all panels",children:"New"}),(0,s.jsx)(l.UO,{appId:"playground",onLoad:(e,t,s)=>{er(t&&s?{id:t,name:s}:null);try{let{html:t,css:s,js:o,ts:n,react:i}=JSON.parse(e);r(t??""),a(s??""),d(o??""),f(n??""),j(i??""),K(U(t??"",s??"",o??"")),V([])}catch{}}}),(0,s.jsx)(c.$n,{variant:"accent",icon:(0,s.jsx)(c.In,{name:"save",size:13}),onClick:()=>ee(!0),children:"Save"}),(0,s.jsx)(c.$n,{variant:"success",icon:(0,s.jsx)(c.In,{name:"play",size:13}),onClick:eg,children:"Run"}),(0,s.jsx)(c.K0,{onClick:()=>V([]),title:"Clear console",children:(0,s.jsx)(c.In,{name:"refresh",size:13})}),(0,s.jsx)(c.ms,{trigger:(0,s.jsx)(c.$n,{variant:"ghost",iconRight:(0,s.jsx)(c.In,{name:"chevron-down",size:12}),children:"Examples"}),children:h.k.map(e=>(0,s.jsx)(c.tJ,{onClick:()=>{let t,s,o,n,i;return t=e.html,s=e.css,o=e.js,n=e.ts??"",i=e.react??"",void(r(t),a(s),d(o),f(n),j(i),V([]),ef(t,s,o,n,i),i?Y("react"):n?Y("ts"):Y("html"))},children:e.label},e.label))})]}),e]});return(0,s.jsxs)(l.PE,{title:"Playground",sidebar:(0,s.jsx)(c.tz,{activeAppId:"playground"}),topBarRight:ek,children:[W&&(0,s.jsx)(l.MJ,{onSave:eu,onUpdate:em,existingDoc:et??void 0,onCancel:()=>ee(!1)}),eh&&(0,s.jsxs)(b,{children:[(0,s.jsx)(c.In,{name:"sparkle",size:14,style:{color:l.w4.colors.accent,flexShrink:0}}),(0,s.jsx)(y,{placeholder:"Describe what you want to build…",value:en,onChange:e=>ea(e.target.value),onKeyDown:e=>{"Enter"!==e.key||ei||ex()}}),ec&&(0,s.jsx)(k,{title:ec,children:ec}),(0,s.jsxs)($,{disabled:ei||!en.trim(),onClick:ex,children:[ei?(0,s.jsx)(w,{children:(0,s.jsx)(c.In,{name:"loader",size:14})}):(0,s.jsx)(c.In,{name:"sparkle",size:14}),ei?"Generating…":"Generate"]})]}),(0,s.jsxs)(v,{children:[X?(0,s.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,s.jsxs)(C,{onClick:ew,title:"Show editors",children:[(0,s.jsx)(c.In,{name:"panel-left-open",size:14}),(0,s.jsx)(T,{children:"Editor"})]})}):(0,s.jsxs)(S,{collapsed:!1,children:[(0,s.jsxs)(R,{children:[["html","css","js","ts","react"].map(e=>(0,s.jsxs)(O,{lang:e,active:z===e,onClick:()=>Y(e),children:[(0,s.jsx)(B,{lang:e}),"react"===e?"React":e.toUpperCase()]},e)),(0,s.jsx)(N,{onClick:ew,title:"Collapse editors",children:(0,s.jsx)(c.In,{name:"panel-left-close",size:14})})]}),(0,s.jsx)(u.A,{lang:z,value:ey,onChange:e$},z)]}),H?(0,s.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,s.jsxs)(I,{onClick:eb,title:"Show preview",children:[(0,s.jsx)(c.In,{name:"panel-right-open",size:14}),(0,s.jsx)(T,{children:"Preview"})]})}):(0,s.jsxs)(E,{collapsed:!1,children:[(0,s.jsxs)(J,{children:[(0,s.jsx)(M,{children:"Preview"}),(0,s.jsx)(N,{onClick:eb,title:"Collapse preview",children:(0,s.jsx)(c.In,{name:"panel-right-close",size:14})})]}),(0,s.jsx)(D,{children:(0,s.jsx)(F,{srcDoc:_,sandbox:"allow-scripts",title:"preview"},_)}),Q.length>0&&(0,s.jsx)(L,{children:Q.map(e=>(0,s.jsxs)(P,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}}}]);