"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([["6362"],{3935(e,t,r){r.r(t),r.d(t,{default:()=>Z});var s=r(5723),o=r(7991),n=r(6859),i=r.n(n),a=r(2799),l=r(3930),c=r(1638),d=r(7071),p=r(6480),u=r(6135),h=r(9421),f=r(679),m=r(3482),x=r(1530),g=r(5496),w=r(9881),b=r(5426),y=r(5151),$=r(676);let k=`You are a code generator. The user describes what they want and you return ONLY a JSON object with the code. No explanation, no markdown fences, no extra text — just the raw JSON.

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
- Return valid JSON only`;async function j(e,t,r,s){let o=r&&(r.html||r.css||r.js||r.react)?`Here is the current code:
\`\`\`json
${JSON.stringify(r,null,2)}
\`\`\`

User request: ${t}

Modify the existing code based on the request. Keep what works, change what's asked.`:t,n=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"system",content:k},{role:"user",content:o}],stream:!1,max_tokens:4e3,temperature:.3}),signal:s});if(!n.ok){let e=await n.text();throw Error(`Groq ${n.status}: ${e.slice(0,200)}`)}let i=await n.json(),a=(i.choices?.[0]?.message?.content?.trim()??"").match(/\{[\s\S]*\}/);if(!a)throw Error("No valid JSON in response");let l=JSON.parse(a[0]),c=e=>e?e.includes("\n")?e:e.replace(/;\s*/g,";\n").replace(/\{\s*/g,"{\n  ").replace(/\}\s*/g,"\n}\n").replace(/,\s*\n\s*\n/g,",\n").trim():"";return{html:c(l.html??""),css:c(l.css??""),js:c(l.js??""),react:c(l.react??"")}}let v=(0,a.keyframes)`from{transform:rotate(0deg)}to{transform:rotate(360deg)}`,S=i()(d.A)`animation: ${v} 1s linear infinite;`,C=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 6px ${l.w4.spacing.md};
  background: ${l.w4.colors.sidebarBg};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,T=i().input`
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
`,R=i().button`
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
`,z=i().span`
  font-size: 11px;
  color: #f87171;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`,O=`
  &::-webkit-scrollbar { width: 6px; height: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${l.w4.colors.border}; border-radius: 3px; }
  &::-webkit-scrollbar-thumb:hover { background: ${l.w4.colors.mainTextMuted}; }
  scrollbar-width: thin;
  scrollbar-color: ${l.w4.colors.border} transparent;
`,B=i().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,N=i().div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${l.w4.colors.sidebarBorder};
  background: ${l.w4.colors.mainBg};
  transition: flex ${l.w4.transitions.slow}, min-width ${l.w4.transitions.slow};
  position: relative;
`,E=i().button`
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
`,J=i().span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${l.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,M=i().div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${l.w4.colors.sidebarBg};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,A={html:"#f97316",css:"#38bdf8",js:"#facc15",ts:"#3b82f6",react:"#61dafb"},D=i().button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 ${l.w4.spacing.md};
  height: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?A[e.lang]??"#facc15":"transparent"};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: ${l.w4.typography.fontFamily};
  color: ${e=>e.active?A[e.lang]??"#facc15":l.w4.colors.sidebarTextMuted};
  transition: color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};
  &:hover { color: ${e=>A[e.lang]??"#facc15"}; }
`,F=i().span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>A[e.lang]??"#facc15"};
`,I=i().button`
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
`,L=i().div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  background: #fff;
  transition: flex ${l.w4.transitions.slow}, min-width ${l.w4.transitions.slow};
  position: relative;
`,P=i().button`
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
`,U=i().div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${l.w4.colors.sidebarBg};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  padding: 0 ${l.w4.spacing.md};
  flex-shrink: 0;
`,q=i().span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  flex: 1;
`,Y=i().div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,_=i().iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
`,K=i().div`
  max-height: 110px;
  overflow-y: auto;
  background: ${l.w4.colors.mainBg};
  border-top: 1px solid ${l.w4.colors.sidebarBorder};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12px;
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
  ${O}
`,X=i().div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function G(e,t,r,s="",o=""){let n=o?`
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
</html>`}let H="toolkit:playground";function Z({topBarRight:e}){let[t,n]=(0,o.useState)(""),[i,a]=(0,o.useState)(""),[d,k]=(0,o.useState)(""),[v,O]=(0,o.useState)(""),[A,Q]=(0,o.useState)(""),[V,W]=(0,o.useState)("html"),[ee,et]=(0,o.useState)(()=>G("","","")),[er,es]=(0,o.useState)(!1),[eo,en]=(0,o.useState)(!1),[ei,ea]=(0,o.useState)([]),[el,ec]=(0,o.useState)(!1),[ed,ep]=(0,o.useState)(null),eu=(0,o.useRef)(0),eh=(0,o.useRef)(!1);(0,o.useEffect)(()=>{(0,l.PL)(H).then(e=>{if(e)try{let t=JSON.parse(e);n(t.html??""),a(t.css??""),k(t.js??""),O(t.ts??""),Q(t.react??""),et(G(t.html??"",t.css??"",t.js??""))}catch{}eh.current=!0})},[]),(0,o.useEffect)(()=>{if(!eh.current)return;let e=setTimeout(()=>(0,l.Is)(H,JSON.stringify({html:t,css:i,js:d,ts:v,react:A})),500);return()=>clearTimeout(e)},[t,i,d,v,A]);let[ef,em]=(0,o.useState)(""),[ex,eg]=(0,o.useState)(!1),[ew,eb]=(0,o.useState)(""),ey=function(){try{let e=localStorage.getItem("atlantis:promptlab:keys");if(!e)return"";return JSON.parse(e).groq??""}catch{return""}}(),e$=!!ey,ek=async e=>{ec(!1),await (0,l.KL)("playground",e,JSON.stringify({html:t,css:i,js:d,ts:v,react:A})),ep(null)},ej=async()=>{ed&&(ec(!1),await (0,l.mZ)(ed.id,ed.name,JSON.stringify({html:t,css:i,js:d,ts:v,react:A})))};(0,o.useEffect)(()=>{let e=e=>{e.data?.type==="console"&&ea(t=>[...t.slice(-49),{kind:e.data.kind,text:e.data.text,id:eu.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);let ev=(0,o.useCallback)(async(e,t,s,o,n)=>{ea([]);let i=o.trim()||n.trim()?await r.e("7960").then(r.t.bind(r,5643,23)):null,a="";if(o.trim()&&i)try{let e=i.transform(o,{presets:[["typescript",{allExtensions:!0}]],filename:"script.ts"});a=e?.code??""}catch(e){ea([{kind:"error",text:`TypeScript: ${e.message}`,id:eu.current++}]);return}let l="";if(n.trim()&&i)try{let e=i.transform(n,{presets:[["typescript",{allExtensions:!0,isTSX:!0}],["react",{runtime:"classic"}]],filename:"component.tsx"});l=e?.code??""}catch(e){ea([{kind:"error",text:`React: ${e.message}`,id:eu.current++}]);return}et(G(e,t,s,a,l))},[]),eS=(0,o.useCallback)(async()=>{if(ey&&ef.trim()&&!ex){eg(!0),eb("");try{let e=await j(ey,ef,{html:t,css:i,js:d,react:A});n(e.html),a(e.css),k(e.js),Q(e.react),O(""),ea([]),em(""),e.react?(W("react"),ev(e.html,e.css,e.js,"",e.react)):(W("html"),ev(e.html,e.css,e.js,"",""))}catch(e){eb(e instanceof Error?e.message:String(e))}finally{eg(!1)}}},[ey,ef,ex,ev,t,i,d,A]),eC=(0,o.useCallback)(()=>ev(t,i,d,v,A),[t,i,d,v,A,ev]),eT=()=>{!er&&eo&&en(!1),es(e=>!e)},eR=()=>{!eo&&er&&es(!1),en(e=>!e)},ez="html"===V?t:"css"===V?i:"js"===V?d:"ts"===V?v:A,eO="html"===V?n:"css"===V?a:"js"===V?k:"ts"===V?O:Q,eB=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c.M7,{children:[(0,s.jsx)(c.$n,{variant:"ghost",onClick:()=>{n(""),a(""),k(""),O(""),Q(""),ea([]),et(G("","","")),ep(null),(0,l.Is)(H,"")},title:"Clear all panels",children:"New"}),(0,s.jsx)(l.UO,{appId:"playground",onLoad:(e,t,r)=>{ep(t&&r?{id:t,name:r}:null);try{let{html:t,css:r,js:s,ts:o,react:i}=JSON.parse(e);n(t??""),a(r??""),k(s??""),O(o??""),Q(i??""),et(G(t??"",r??"",s??"")),ea([])}catch{}}}),(0,s.jsx)(c.$n,{variant:"accent",icon:(0,s.jsx)(p.A,{size:13}),onClick:()=>ec(!0),children:"Save"}),(0,s.jsx)(c.$n,{variant:"success",icon:(0,s.jsx)(u.A,{size:13}),onClick:eC,children:"Run"}),(0,s.jsx)(c.K0,{onClick:()=>ea([]),title:"Clear console",children:(0,s.jsx)(h.A,{size:13})}),(0,s.jsx)(c.ms,{trigger:(0,s.jsx)(c.$n,{variant:"ghost",iconRight:(0,s.jsx)(f.A,{size:12}),children:"Examples"}),children:y.k.map(e=>(0,s.jsx)(c.tJ,{onClick:()=>{let t,r,s,o,i;return t=e.html,r=e.css,s=e.js,o=e.ts??"",i=e.react??"",void(n(t),a(r),k(s),O(o),Q(i),ea([]),ev(t,r,s,o,i),i?W("react"):o?W("ts"):W("html"))},children:e.label},e.label))})]}),e]});return(0,s.jsxs)(l.PE,{title:"Playground",sidebar:(0,s.jsx)(c.tz,{activeAppId:"playground"}),topBarRight:eB,children:[el&&(0,s.jsx)(l.MJ,{onSave:ek,onUpdate:ej,existingDoc:ed??void 0,onCancel:()=>ec(!1)}),e$&&(0,s.jsxs)(C,{children:[(0,s.jsx)(m.A,{size:14,style:{color:l.w4.colors.accent,flexShrink:0}}),(0,s.jsx)(T,{placeholder:"Describe what you want to build…",value:ef,onChange:e=>em(e.target.value),onKeyDown:e=>{"Enter"!==e.key||ex||eS()}}),ew&&(0,s.jsx)(z,{title:ew,children:ew}),(0,s.jsxs)(R,{disabled:ex||!ef.trim(),onClick:eS,children:[ex?(0,s.jsx)(S,{size:14}):(0,s.jsx)(m.A,{size:14}),ex?"Generating…":"Generate"]})]}),(0,s.jsxs)(B,{children:[er?(0,s.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,s.jsxs)(E,{onClick:eT,title:"Show editors",children:[(0,s.jsx)(x.A,{size:14}),(0,s.jsx)(J,{children:"Editor"})]})}):(0,s.jsxs)(N,{collapsed:!1,children:[(0,s.jsxs)(M,{children:[["html","css","js","ts","react"].map(e=>(0,s.jsxs)(D,{lang:e,active:V===e,onClick:()=>W(e),children:[(0,s.jsx)(F,{lang:e}),"react"===e?"React":e.toUpperCase()]},e)),(0,s.jsx)(I,{onClick:eT,title:"Collapse editors",children:(0,s.jsx)(g.A,{size:14})})]}),(0,s.jsx)($.A,{lang:V,value:ez,onChange:eO},V)]}),eo?(0,s.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,s.jsxs)(P,{onClick:eR,title:"Show preview",children:[(0,s.jsx)(w.A,{size:14}),(0,s.jsx)(J,{children:"Preview"})]})}):(0,s.jsxs)(L,{collapsed:!1,children:[(0,s.jsxs)(U,{children:[(0,s.jsx)(q,{children:"Preview"}),(0,s.jsx)(I,{onClick:eR,title:"Collapse preview",children:(0,s.jsx)(b.A,{size:14})})]}),(0,s.jsx)(Y,{children:(0,s.jsx)(_,{srcDoc:ee,sandbox:"allow-scripts",title:"preview"},ee)}),ei.length>0&&(0,s.jsx)(K,{children:ei.map(e=>(0,s.jsxs)(X,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}}}]);