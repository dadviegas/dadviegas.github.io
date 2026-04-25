"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([["512"],{8997(e,t,r){var o=r(2727);t.createRoot=o.createRoot,o.hydrateRoot},3611(e,t,r){var o=r(5723),s=r(7991),n=r(8997),a=r(6859),i=r.n(a),l=r(2799),c=r(9874),d=r(8311),p=r(5643),h=r.n(p),u=r(5151),m=r(676);let f=h()??p,x=`You are a code generator. The user describes what they want and you return ONLY a JSON object with the code. No explanation, no markdown fences, no extra text — just the raw JSON.

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
- Return valid JSON only`;async function g(e,t,r,o){let s=r&&(r.html||r.css||r.js||r.react)?`Here is the current code:
\`\`\`json
${JSON.stringify(r,null,2)}
\`\`\`

User request: ${t}

Modify the existing code based on the request. Keep what works, change what's asked.`:t,n=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"system",content:x},{role:"user",content:s}],stream:!1,max_tokens:4e3,temperature:.3}),signal:o});if(!n.ok){let e=await n.text();throw Error(`Groq ${n.status}: ${e.slice(0,200)}`)}let a=await n.json(),i=(a.choices?.[0]?.message?.content?.trim()??"").match(/\{[\s\S]*\}/);if(!i)throw Error("No valid JSON in response");let l=JSON.parse(i[0]),c=e=>e?e.includes("\n")?e:e.replace(/;\s*/g,";\n").replace(/\{\s*/g,"{\n  ").replace(/\}\s*/g,"\n}\n").replace(/,\s*\n\s*\n/g,",\n").trim():"";return{html:c(l.html??""),css:c(l.css??""),js:c(l.js??""),react:c(l.react??"")}}let w=(0,l.keyframes)`from{transform:rotate(0deg)}to{transform:rotate(360deg)}`,b=i().span`display:inline-flex;animation: ${w} 1s linear infinite;`,y=i().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: 6px ${c.w4.spacing.md};
  background: ${c.w4.colors.sidebarBg};
  border-bottom: 1px solid ${c.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,$=i().input`
  flex: 1;
  padding: 7px 12px;
  background: ${c.w4.colors.codeBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamily};
  outline: none;
  transition: border-color ${c.w4.transitions.base};
  &:focus { border-color: ${c.w4.colors.accent}; }
  &::placeholder { color: ${c.w4.colors.mainTextMuted}; opacity: 0.5; }
`,k=i().button`
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
  transition: opacity ${c.w4.transitions.base};
  &:hover { opacity: ${({disabled:e})=>e?1:.85}; }
`,j=i().span`
  font-size: 11px;
  color: #f87171;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`,v=`
  &::-webkit-scrollbar { width: 6px; height: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${c.w4.colors.border}; border-radius: 3px; }
  &::-webkit-scrollbar-thumb:hover { background: ${c.w4.colors.mainTextMuted}; }
  scrollbar-width: thin;
  scrollbar-color: ${c.w4.colors.border} transparent;
`,S=i().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,C=i().div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${c.w4.colors.sidebarBorder};
  background: ${c.w4.colors.mainBg};
  transition: flex ${c.w4.transitions.slow}, min-width ${c.w4.transitions.slow};
  position: relative;
`,R=i().button`
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
  transition: color ${c.w4.transitions.fast}, background ${c.w4.transitions.fast};
  z-index: 10;
  &:hover { background: ${c.w4.colors.sidebarBorder}; color: ${c.w4.colors.mainText}; }
`,T=i().span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${c.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,z=i().div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${c.w4.colors.sidebarBg};
  border-bottom: 1px solid ${c.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,B={html:"#f97316",css:"#38bdf8",js:"#facc15",ts:"#3b82f6",react:"#61dafb"},O=i().button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 ${c.w4.spacing.md};
  height: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?B[e.lang]??"#facc15":"transparent"};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: ${c.w4.typography.fontFamily};
  color: ${e=>e.active?B[e.lang]??"#facc15":c.w4.colors.sidebarTextMuted};
  transition: color ${c.w4.transitions.fast}, border-color ${c.w4.transitions.fast};
  &:hover { color: ${e=>B[e.lang]??"#facc15"}; }
`,E=i().span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>B[e.lang]??"#facc15"};
`,N=i().button`
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
  transition: background ${c.w4.transitions.fast}, color ${c.w4.transitions.fast};
  &:hover { background: ${c.w4.colors.sidebarBorder}; color: ${c.w4.colors.mainText}; }
`,I=i().div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  background: #fff;
  transition: flex ${c.w4.transitions.slow}, min-width ${c.w4.transitions.slow};
  position: relative;
`,J=i().button`
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
  transition: color ${c.w4.transitions.fast}, background ${c.w4.transitions.fast};
  z-index: 10;
  &:hover { background: ${c.w4.colors.sidebarBorder}; color: ${c.w4.colors.mainText}; }
`,M=i().div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${c.w4.colors.sidebarBg};
  border-bottom: 1px solid ${c.w4.colors.sidebarBorder};
  padding: 0 ${c.w4.spacing.md};
  flex-shrink: 0;
`,D=i().span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${c.w4.colors.sidebarTextMuted};
  font-family: ${c.w4.typography.fontFamily};
  flex: 1;
`,F=i().div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,L=i().iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
`,P=i().div`
  max-height: 110px;
  overflow-y: auto;
  background: ${c.w4.colors.mainBg};
  border-top: 1px solid ${c.w4.colors.sidebarBorder};
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
  ${v}
`,U=i().div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function q(e,t,r,o="",s=""){let n=s?`
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
${o?`<script>${o}</script>`:""}
${s?`<script>${s}</script>`:""}
</body>
</html>`}let A="toolkit:playground",Y=document.getElementById("root");if(!Y)throw Error("Root element #root not found");(0,n.createRoot)(Y).render((0,o.jsx)(function({topBarRight:e}){let[t,r]=(0,s.useState)(""),[n,a]=(0,s.useState)(""),[i,l]=(0,s.useState)(""),[p,h]=(0,s.useState)(""),[x,w]=(0,s.useState)(""),[v,B]=(0,s.useState)("html"),[Y,_]=(0,s.useState)(()=>q("","","")),[K,X]=(0,s.useState)(!1),[G,H]=(0,s.useState)(!1),[Z,Q]=(0,s.useState)([]),[V,W]=(0,s.useState)(!1),[ee,et]=(0,s.useState)(null),er=(0,s.useRef)(0),eo=(0,s.useRef)(!1);(0,s.useEffect)(()=>{(0,c.PL)(A).then(e=>{if(e)try{let t=JSON.parse(e);r(t.html??""),a(t.css??""),l(t.js??""),h(t.ts??""),w(t.react??""),_(q(t.html??"",t.css??"",t.js??""))}catch{}eo.current=!0})},[]),(0,s.useEffect)(()=>{if(!eo.current)return;let e=setTimeout(()=>(0,c.Is)(A,JSON.stringify({html:t,css:n,js:i,ts:p,react:x})),500);return()=>clearTimeout(e)},[t,n,i,p,x]);let[es,en]=(0,s.useState)(""),[ea,ei]=(0,s.useState)(!1),[el,ec]=(0,s.useState)(""),ed=function(){try{let e=localStorage.getItem("atlantis:promptlab:keys");if(!e)return"";return JSON.parse(e).groq??""}catch{return""}}(),ep=!!ed,eh=async e=>{W(!1),await (0,c.KL)("playground",e,JSON.stringify({html:t,css:n,js:i,ts:p,react:x})),et(null)},eu=async()=>{ee&&(W(!1),await (0,c.mZ)(ee.id,ee.name,JSON.stringify({html:t,css:n,js:i,ts:p,react:x})))};(0,s.useEffect)(()=>{let e=e=>{e.data?.type==="console"&&Q(t=>[...t.slice(-49),{kind:e.data.kind,text:e.data.text,id:er.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);let em=(0,s.useCallback)(async(e,t,r,o,s)=>{Q([]);let n="";if(o.trim())try{let e=f.transform(o,{presets:[["typescript",{allExtensions:!0}]],filename:"script.ts"});n=e?.code??""}catch(e){Q([{kind:"error",text:`TypeScript: ${e.message}`,id:er.current++}]);return}let a="";if(s.trim())try{let e=f.transform(s,{presets:[["typescript",{allExtensions:!0,isTSX:!0}],["react",{runtime:"classic"}]],filename:"component.tsx"});a=e?.code??""}catch(e){Q([{kind:"error",text:`React: ${e.message}`,id:er.current++}]);return}_(q(e,t,r,n,a))},[]),ef=(0,s.useCallback)(async()=>{if(ed&&es.trim()&&!ea){ei(!0),ec("");try{let e=await g(ed,es,{html:t,css:n,js:i,react:x});r(e.html),a(e.css),l(e.js),w(e.react),h(""),Q([]),en(""),e.react?(B("react"),em(e.html,e.css,e.js,"",e.react)):(B("html"),em(e.html,e.css,e.js,"",""))}catch(e){ec(e instanceof Error?e.message:String(e))}finally{ei(!1)}}},[ed,es,ea,em,t,n,i,x]),ex=(0,s.useCallback)(()=>em(t,n,i,p,x),[t,n,i,p,x,em]),eg=()=>{!K&&G&&H(!1),X(e=>!e)},ew=()=>{!G&&K&&X(!1),H(e=>!e)},eb="html"===v?t:"css"===v?n:"js"===v?i:"ts"===v?p:x,ey="html"===v?r:"css"===v?a:"js"===v?l:"ts"===v?h:w,e$=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(d.M7,{children:[(0,o.jsx)(d.$n,{variant:"ghost",onClick:()=>{r(""),a(""),l(""),h(""),w(""),Q([]),_(q("","","")),et(null),(0,c.Is)(A,"")},title:"Clear all panels",children:"New"}),(0,o.jsx)(c.UO,{appId:"playground",onLoad:(e,t,o)=>{et(t&&o?{id:t,name:o}:null);try{let{html:t,css:o,js:s,ts:n,react:i}=JSON.parse(e);r(t??""),a(o??""),l(s??""),h(n??""),w(i??""),_(q(t??"",o??"",s??"")),Q([])}catch{}}}),(0,o.jsx)(d.$n,{variant:"accent",icon:(0,o.jsx)(d.In,{name:"save",size:13}),onClick:()=>W(!0),children:"Save"}),(0,o.jsx)(d.$n,{variant:"success",icon:(0,o.jsx)(d.In,{name:"play",size:13}),onClick:ex,children:"Run"}),(0,o.jsx)(d.K0,{onClick:()=>Q([]),title:"Clear console",children:(0,o.jsx)(d.In,{name:"refresh",size:13})}),(0,o.jsx)(d.ms,{trigger:(0,o.jsx)(d.$n,{variant:"ghost",iconRight:(0,o.jsx)(d.In,{name:"chevron-down",size:12}),children:"Examples"}),children:u.k.map(e=>(0,o.jsx)(d.tJ,{onClick:()=>{let t,o,s,n,i;return t=e.html,o=e.css,s=e.js,n=e.ts??"",i=e.react??"",void(r(t),a(o),l(s),h(n),w(i),Q([]),em(t,o,s,n,i),i?B("react"):n?B("ts"):B("html"))},children:e.label},e.label))})]}),e]});return(0,o.jsxs)(c.PE,{title:"Playground",sidebar:(0,o.jsx)(d.tz,{activeAppId:"playground"}),topBarRight:e$,children:[V&&(0,o.jsx)(c.MJ,{onSave:eh,onUpdate:eu,existingDoc:ee??void 0,onCancel:()=>W(!1)}),ep&&(0,o.jsxs)(y,{children:[(0,o.jsx)(d.In,{name:"sparkle",size:14,style:{color:c.w4.colors.accent,flexShrink:0}}),(0,o.jsx)($,{placeholder:"Describe what you want to build…",value:es,onChange:e=>en(e.target.value),onKeyDown:e=>{"Enter"!==e.key||ea||ef()}}),el&&(0,o.jsx)(j,{title:el,children:el}),(0,o.jsxs)(k,{disabled:ea||!es.trim(),onClick:ef,children:[ea?(0,o.jsx)(b,{children:(0,o.jsx)(d.In,{name:"loader",size:14})}):(0,o.jsx)(d.In,{name:"sparkle",size:14}),ea?"Generating…":"Generate"]})]}),(0,o.jsxs)(S,{children:[K?(0,o.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,o.jsxs)(R,{onClick:eg,title:"Show editors",children:[(0,o.jsx)(d.In,{name:"panel-left-open",size:14}),(0,o.jsx)(T,{children:"Editor"})]})}):(0,o.jsxs)(C,{collapsed:!1,children:[(0,o.jsxs)(z,{children:[["html","css","js","ts","react"].map(e=>(0,o.jsxs)(O,{lang:e,active:v===e,onClick:()=>B(e),children:[(0,o.jsx)(E,{lang:e}),"react"===e?"React":e.toUpperCase()]},e)),(0,o.jsx)(N,{onClick:eg,title:"Collapse editors",children:(0,o.jsx)(d.In,{name:"panel-left-close",size:14})})]}),(0,o.jsx)(m.A,{lang:v,value:eb,onChange:ey},v)]}),G?(0,o.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,o.jsxs)(J,{onClick:ew,title:"Show preview",children:[(0,o.jsx)(d.In,{name:"panel-right-open",size:14}),(0,o.jsx)(T,{children:"Preview"})]})}):(0,o.jsxs)(I,{collapsed:!1,children:[(0,o.jsxs)(M,{children:[(0,o.jsx)(D,{children:"Preview"}),(0,o.jsx)(N,{onClick:ew,title:"Collapse preview",children:(0,o.jsx)(d.In,{name:"panel-right-close",size:14})})]}),(0,o.jsx)(F,{children:(0,o.jsx)(L,{srcDoc:Y,sandbox:"allow-scripts",title:"preview"},Y)}),Z.length>0&&(0,o.jsx)(P,{children:Z.map(e=>(0,o.jsxs)(U,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})},{}))}}]);