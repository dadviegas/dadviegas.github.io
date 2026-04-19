"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([["5512"],{8997(e,t,r){var o=r(2727);t.createRoot=o.createRoot,o.hydrateRoot},3611(e,t,r){var o=r(5723),s=r(7991),i=r(8997),n=r(6859),a=r.n(n),l=r(2799),c=r(9336),d=r(1638),p=r(7071),u=r(6480),h=r(6135),m=r(9421),x=r(679),f=r(3482),g=r(1530),b=r(5496),w=r(9881),y=r(5426),$=r(5151),j=r(676);let k=`You are a code generator. The user describes what they want and you return ONLY a JSON object with the code. No explanation, no markdown fences, no extra text — just the raw JSON.

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
- Return valid JSON only`;async function v(e,t,r,o){let s=r&&(r.html||r.css||r.js||r.react)?`Here is the current code:
\`\`\`json
${JSON.stringify(r,null,2)}
\`\`\`

User request: ${t}

Modify the existing code based on the request. Keep what works, change what's asked.`:t,i=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"system",content:k},{role:"user",content:s}],stream:!1,max_tokens:4e3,temperature:.3}),signal:o});if(!i.ok){let e=await i.text();throw Error(`Groq ${i.status}: ${e.slice(0,200)}`)}let n=await i.json(),a=(n.choices?.[0]?.message?.content?.trim()??"").match(/\{[\s\S]*\}/);if(!a)throw Error("No valid JSON in response");let l=JSON.parse(a[0]),c=e=>e?e.includes("\n")?e:e.replace(/;\s*/g,";\n").replace(/\{\s*/g,"{\n  ").replace(/\}\s*/g,"\n}\n").replace(/,\s*\n\s*\n/g,",\n").trim():"";return{html:c(l.html??""),css:c(l.css??""),js:c(l.js??""),react:c(l.react??"")}}let S=(0,l.keyframes)`from{transform:rotate(0deg)}to{transform:rotate(360deg)}`,C=a()(p.A)`animation: ${S} 1s linear infinite;`,R=a().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: 6px ${c.w4.spacing.md};
  background: ${c.w4.colors.sidebarBg};
  border-bottom: 1px solid ${c.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,z=a().input`
  flex: 1;
  padding: 7px 12px;
  background: ${c.w4.colors.codeBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamily};
  outline: none;
  transition: border-color 0.15s;
  &:focus { border-color: ${c.w4.colors.accent}; }
  &::placeholder { color: ${c.w4.colors.mainTextMuted}; opacity: 0.5; }
`,T=a().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  background: ${({disabled:e})=>e?c.w4.colors.border:"linear-gradient(135deg, #a371f7, #58a6ff)"};
  border: none;
  border-radius: ${c.w4.borderRadius.md};
  color: ${({disabled:e})=>e?c.w4.colors.mainTextMuted:"#fff"};
  font-size: 13px;
  font-weight: 600;
  font-family: ${c.w4.typography.fontFamily};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  white-space: nowrap;
  transition: opacity 0.15s;
  &:hover { opacity: ${({disabled:e})=>e?1:.85}; }
`,B=a().span`
  font-size: 11px;
  color: #f87171;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`,O=`
  &::-webkit-scrollbar { width: 6px; height: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${c.w4.colors.border}; border-radius: 3px; }
  &::-webkit-scrollbar-thumb:hover { background: ${c.w4.colors.mainTextMuted}; }
  scrollbar-width: thin;
  scrollbar-color: ${c.w4.colors.border} transparent;
`,E=a().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,N=a().div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${c.w4.colors.sidebarBorder};
  background: ${c.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,J=a().button`
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
  background: ${c.w4.colors.sidebarBg};
  border: 1px solid ${c.w4.colors.sidebarBorder};
  border-left: none;
  border-radius: 0 ${c.w4.borderRadius.md} ${c.w4.borderRadius.md} 0;
  cursor: pointer;
  color: ${c.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  z-index: 10;
  &:hover { background: ${c.w4.colors.sidebarBorder}; color: ${c.w4.colors.mainText}; }
`,M=a().span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${c.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,A=a().div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${c.w4.colors.sidebarBg};
  border-bottom: 1px solid ${c.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,D={html:"#f97316",css:"#38bdf8",js:"#facc15",ts:"#3b82f6",react:"#61dafb"},I=a().button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 ${c.w4.spacing.md};
  height: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?D[e.lang]??"#facc15":"transparent"};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: ${c.w4.typography.fontFamily};
  color: ${e=>e.active?D[e.lang]??"#facc15":c.w4.colors.sidebarTextMuted};
  transition: color 0.12s, border-color 0.12s;
  &:hover { color: ${e=>D[e.lang]??"#facc15"}; }
`,F=a().span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>D[e.lang]??"#facc15"};
`,L=a().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${c.w4.borderRadius.sm};
  cursor: pointer;
  color: ${c.w4.colors.sidebarTextMuted};
  margin-left: auto;
  margin-right: 6px;
  transition: background 0.12s, color 0.12s;
  &:hover { background: ${c.w4.colors.sidebarBorder}; color: ${c.w4.colors.mainText}; }
`,P=a().div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  background: #fff;
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,U=a().button`
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
  background: ${c.w4.colors.sidebarBg};
  border: 1px solid ${c.w4.colors.sidebarBorder};
  border-right: none;
  border-radius: ${c.w4.borderRadius.md} 0 0 ${c.w4.borderRadius.md};
  cursor: pointer;
  color: ${c.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  z-index: 10;
  &:hover { background: ${c.w4.colors.sidebarBorder}; color: ${c.w4.colors.mainText}; }
`,q=a().div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${c.w4.colors.sidebarBg};
  border-bottom: 1px solid ${c.w4.colors.sidebarBorder};
  padding: 0 ${c.w4.spacing.md};
  flex-shrink: 0;
`,Y=a().span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${c.w4.colors.sidebarTextMuted};
  font-family: ${c.w4.typography.fontFamily};
  flex: 1;
`,_=a().div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,K=a().iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
`,X=a().div`
  max-height: 110px;
  overflow-y: auto;
  background: ${c.w4.colors.mainBg};
  border-top: 1px solid ${c.w4.colors.sidebarBorder};
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 12px;
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
  ${O}
`,G=a().div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function H(e,t,r,o="",s=""){let i=s?`
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>`:"";return`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>*, *::before, *::after { box-sizing: border-box; }
${t}
</style>
${i}
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
${o?`<script>${o}</script>`:""}
${s?`<script>${s}</script>`:""}
</body>
</html>`}let Z="toolkit:playground",Q=document.getElementById("root");if(!Q)throw Error("Root element #root not found");(0,i.createRoot)(Q).render((0,o.jsx)(function({topBarRight:e}){let[t,i]=(0,s.useState)(""),[n,a]=(0,s.useState)(""),[l,p]=(0,s.useState)(""),[k,S]=(0,s.useState)(""),[O,D]=(0,s.useState)(""),[Q,V]=(0,s.useState)("html"),[W,ee]=(0,s.useState)(()=>H("","","")),[et,er]=(0,s.useState)(!1),[eo,es]=(0,s.useState)(!1),[ei,en]=(0,s.useState)([]),[ea,el]=(0,s.useState)(!1),[ec,ed]=(0,s.useState)(null),ep=(0,s.useRef)(0),eu=(0,s.useRef)(!1);(0,s.useEffect)(()=>{(0,c.PL)(Z).then(e=>{if(e)try{let t=JSON.parse(e);i(t.html??""),a(t.css??""),p(t.js??""),S(t.ts??""),D(t.react??""),ee(H(t.html??"",t.css??"",t.js??""))}catch{}eu.current=!0})},[]),(0,s.useEffect)(()=>{if(!eu.current)return;let e=setTimeout(()=>(0,c.Is)(Z,JSON.stringify({html:t,css:n,js:l,ts:k,react:O})),500);return()=>clearTimeout(e)},[t,n,l,k,O]);let[eh,em]=(0,s.useState)(""),[ex,ef]=(0,s.useState)(!1),[eg,eb]=(0,s.useState)(""),ew=function(){try{let e=localStorage.getItem("atlantis:promptlab:keys");if(!e)return"";return JSON.parse(e).groq??""}catch{return""}}(),ey=!!ew,e$=async e=>{el(!1),await (0,c.KL)("playground",e,JSON.stringify({html:t,css:n,js:l,ts:k,react:O})),ed(null)},ej=async()=>{ec&&(el(!1),await (0,c.mZ)(ec.id,ec.name,JSON.stringify({html:t,css:n,js:l,ts:k,react:O})))};(0,s.useEffect)(()=>{let e=e=>{e.data?.type==="console"&&en(t=>[...t.slice(-49),{kind:e.data.kind,text:e.data.text,id:ep.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);let ek=(0,s.useCallback)(async(e,t,o,s,i)=>{en([]);let n=s.trim()||i.trim()?await r.e("7960").then(r.t.bind(r,5643,23)):null,a="";if(s.trim()&&n)try{let e=n.transform(s,{presets:[["typescript",{allExtensions:!0}]],filename:"script.ts"});a=e?.code??""}catch(e){en([{kind:"error",text:`TypeScript: ${e.message}`,id:ep.current++}]);return}let l="";if(i.trim()&&n)try{let e=n.transform(i,{presets:[["typescript",{allExtensions:!0,isTSX:!0}],["react",{runtime:"classic"}]],filename:"component.tsx"});l=e?.code??""}catch(e){en([{kind:"error",text:`React: ${e.message}`,id:ep.current++}]);return}ee(H(e,t,o,a,l))},[]),ev=(0,s.useCallback)(async()=>{if(ew&&eh.trim()&&!ex){ef(!0),eb("");try{let e=await v(ew,eh,{html:t,css:n,js:l,react:O});i(e.html),a(e.css),p(e.js),D(e.react),S(""),en([]),em(""),e.react?(V("react"),ek(e.html,e.css,e.js,"",e.react)):(V("html"),ek(e.html,e.css,e.js,"",""))}catch(e){eb(e instanceof Error?e.message:String(e))}finally{ef(!1)}}},[ew,eh,ex,ek,t,n,l,O]),eS=(0,s.useCallback)(()=>ek(t,n,l,k,O),[t,n,l,k,O,ek]),eC=()=>{!et&&eo&&es(!1),er(e=>!e)},eR=()=>{!eo&&et&&er(!1),es(e=>!e)},ez="html"===Q?t:"css"===Q?n:"js"===Q?l:"ts"===Q?k:O,eT="html"===Q?i:"css"===Q?a:"js"===Q?p:"ts"===Q?S:D,eB=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(d.M7,{children:[(0,o.jsx)(d.$n,{variant:"ghost",onClick:()=>{i(""),a(""),p(""),S(""),D(""),en([]),ee(H("","","")),ed(null),(0,c.Is)(Z,"")},title:"Clear all panels",children:"New"}),(0,o.jsx)(c.UO,{appId:"playground",onLoad:(e,t,r)=>{ed(t&&r?{id:t,name:r}:null);try{let{html:t,css:r,js:o,ts:s,react:n}=JSON.parse(e);i(t??""),a(r??""),p(o??""),S(s??""),D(n??""),ee(H(t??"",r??"",o??"")),en([])}catch{}}}),(0,o.jsx)(d.$n,{variant:"accent",icon:(0,o.jsx)(u.A,{size:13}),onClick:()=>el(!0),children:"Save"}),(0,o.jsx)(d.$n,{variant:"success",icon:(0,o.jsx)(h.A,{size:13}),onClick:eS,children:"Run"}),(0,o.jsx)(d.K0,{onClick:()=>en([]),title:"Clear console",children:(0,o.jsx)(m.A,{size:13})}),(0,o.jsx)(d.ms,{trigger:(0,o.jsx)(d.$n,{variant:"ghost",iconRight:(0,o.jsx)(x.A,{size:12}),children:"Examples"}),children:$.k.map(e=>(0,o.jsx)(d.tJ,{onClick:()=>{let t,r,o,s,n;return t=e.html,r=e.css,o=e.js,s=e.ts??"",n=e.react??"",void(i(t),a(r),p(o),S(s),D(n),en([]),ek(t,r,o,s,n),n?V("react"):s?V("ts"):V("html"))},children:e.label},e.label))})]}),e]});return(0,o.jsxs)(c.PE,{title:"Playground",sidebar:(0,o.jsx)(d.tz,{activeAppId:"playground"}),topBarRight:eB,children:[ea&&(0,o.jsx)(c.MJ,{onSave:e$,onUpdate:ej,existingDoc:ec??void 0,onCancel:()=>el(!1)}),ey&&(0,o.jsxs)(R,{children:[(0,o.jsx)(f.A,{size:14,style:{color:c.w4.colors.accent,flexShrink:0}}),(0,o.jsx)(z,{placeholder:"Describe what you want to build…",value:eh,onChange:e=>em(e.target.value),onKeyDown:e=>{"Enter"!==e.key||ex||ev()}}),eg&&(0,o.jsx)(B,{title:eg,children:eg}),(0,o.jsxs)(T,{disabled:ex||!eh.trim(),onClick:ev,children:[ex?(0,o.jsx)(C,{size:14}):(0,o.jsx)(f.A,{size:14}),ex?"Generating…":"Generate"]})]}),(0,o.jsxs)(E,{children:[et?(0,o.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,o.jsxs)(J,{onClick:eC,title:"Show editors",children:[(0,o.jsx)(g.A,{size:14}),(0,o.jsx)(M,{children:"Editor"})]})}):(0,o.jsxs)(N,{collapsed:!1,children:[(0,o.jsxs)(A,{children:[["html","css","js","ts","react"].map(e=>(0,o.jsxs)(I,{lang:e,active:Q===e,onClick:()=>V(e),children:[(0,o.jsx)(F,{lang:e}),"react"===e?"React":e.toUpperCase()]},e)),(0,o.jsx)(L,{onClick:eC,title:"Collapse editors",children:(0,o.jsx)(b.A,{size:14})})]}),(0,o.jsx)(j.A,{lang:Q,value:ez,onChange:eT},Q)]}),eo?(0,o.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,o.jsxs)(U,{onClick:eR,title:"Show preview",children:[(0,o.jsx)(w.A,{size:14}),(0,o.jsx)(M,{children:"Preview"})]})}):(0,o.jsxs)(P,{collapsed:!1,children:[(0,o.jsxs)(q,{children:[(0,o.jsx)(Y,{children:"Preview"}),(0,o.jsx)(L,{onClick:eR,title:"Collapse preview",children:(0,o.jsx)(y.A,{size:14})})]}),(0,o.jsx)(_,{children:(0,o.jsx)(K,{srcDoc:W,sandbox:"allow-scripts",title:"preview"},W)}),ei.length>0&&(0,o.jsx)(X,{children:ei.map(e=>(0,o.jsxs)(G,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})},{}))}}]);