"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([["6362"],{3935(e,t,r){r.r(t),r.d(t,{default:()=>Z});var o=r(5723),s=r(7991),i=r(6859),n=r.n(i),a=r(2799),l=r(5726),c=r(1638),d=r(7071),p=r(6480),u=r(6135),h=r(9421),m=r(679),x=r(3482),f=r(1530),g=r(5496),b=r(9881),w=r(5426),y=r(5151),$=r(676);let k=`You are a code generator. The user describes what they want and you return ONLY a JSON object with the code. No explanation, no markdown fences, no extra text — just the raw JSON.

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
- Return valid JSON only`;async function j(e,t,r,o){let s=r&&(r.html||r.css||r.js||r.react)?`Here is the current code:
\`\`\`json
${JSON.stringify(r,null,2)}
\`\`\`

User request: ${t}

Modify the existing code based on the request. Keep what works, change what's asked.`:t,i=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"system",content:k},{role:"user",content:s}],stream:!1,max_tokens:4e3,temperature:.3}),signal:o});if(!i.ok){let e=await i.text();throw Error(`Groq ${i.status}: ${e.slice(0,200)}`)}let n=await i.json(),a=(n.choices?.[0]?.message?.content?.trim()??"").match(/\{[\s\S]*\}/);if(!a)throw Error("No valid JSON in response");let l=JSON.parse(a[0]),c=e=>e?e.includes("\n")?e:e.replace(/;\s*/g,";\n").replace(/\{\s*/g,"{\n  ").replace(/\}\s*/g,"\n}\n").replace(/,\s*\n\s*\n/g,",\n").trim():"";return{html:c(l.html??""),css:c(l.css??""),js:c(l.js??""),react:c(l.react??"")}}let v=(0,a.keyframes)`from{transform:rotate(0deg)}to{transform:rotate(360deg)}`,S=n()(d.A)`animation: ${v} 1s linear infinite;`,C=n().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 6px ${l.w4.spacing.md};
  background: ${l.w4.colors.sidebarBg};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,z=n().input`
  flex: 1;
  padding: 7px 12px;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamily};
  outline: none;
  transition: border-color 0.15s;
  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; opacity: 0.5; }
`,T=n().button`
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
  transition: opacity 0.15s;
  &:hover { opacity: ${({disabled:e})=>e?1:.85}; }
`,R=n().span`
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
`,B=n().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,N=n().div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${l.w4.colors.sidebarBorder};
  background: ${l.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,E=n().button`
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
  transition: color 0.12s, background 0.12s;
  z-index: 10;
  &:hover { background: ${l.w4.colors.sidebarBorder}; color: ${l.w4.colors.mainText}; }
`,J=n().span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${l.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,M=n().div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${l.w4.colors.sidebarBg};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,A={html:"#f97316",css:"#38bdf8",js:"#facc15",ts:"#3b82f6",react:"#61dafb"},D=n().button`
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
  transition: color 0.12s, border-color 0.12s;
  &:hover { color: ${e=>A[e.lang]??"#facc15"}; }
`,F=n().span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>A[e.lang]??"#facc15"};
`,I=n().button`
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
  transition: background 0.12s, color 0.12s;
  &:hover { background: ${l.w4.colors.sidebarBorder}; color: ${l.w4.colors.mainText}; }
`,L=n().div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  background: #fff;
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,P=n().button`
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
  transition: color 0.12s, background 0.12s;
  z-index: 10;
  &:hover { background: ${l.w4.colors.sidebarBorder}; color: ${l.w4.colors.mainText}; }
`,U=n().div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${l.w4.colors.sidebarBg};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  padding: 0 ${l.w4.spacing.md};
  flex-shrink: 0;
`,q=n().span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  flex: 1;
`,Y=n().div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,_=n().iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
`,K=n().div`
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
`,X=n().div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function G(e,t,r,o="",s=""){let i=s?`
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
</html>`}let H="toolkit:playground";function Z({topBarRight:e}){let[t,i]=(0,s.useState)(""),[n,a]=(0,s.useState)(""),[d,k]=(0,s.useState)(""),[v,O]=(0,s.useState)(""),[A,Q]=(0,s.useState)(""),[V,W]=(0,s.useState)("html"),[ee,et]=(0,s.useState)(()=>G("","","")),[er,eo]=(0,s.useState)(!1),[es,ei]=(0,s.useState)(!1),[en,ea]=(0,s.useState)([]),[el,ec]=(0,s.useState)(!1),[ed,ep]=(0,s.useState)(null),eu=(0,s.useRef)(0),eh=(0,s.useRef)(!1);(0,s.useEffect)(()=>{(0,l.PL)(H).then(e=>{if(e)try{let t=JSON.parse(e);i(t.html??""),a(t.css??""),k(t.js??""),O(t.ts??""),Q(t.react??""),et(G(t.html??"",t.css??"",t.js??""))}catch{}eh.current=!0})},[]),(0,s.useEffect)(()=>{if(!eh.current)return;let e=setTimeout(()=>(0,l.Is)(H,JSON.stringify({html:t,css:n,js:d,ts:v,react:A})),500);return()=>clearTimeout(e)},[t,n,d,v,A]);let[em,ex]=(0,s.useState)(""),[ef,eg]=(0,s.useState)(!1),[eb,ew]=(0,s.useState)(""),ey=function(){try{let e=localStorage.getItem("atlantis:promptlab:keys");if(!e)return"";return JSON.parse(e).groq??""}catch{return""}}(),e$=!!ey,ek=async e=>{ec(!1),await (0,l.KL)("playground",e,JSON.stringify({html:t,css:n,js:d,ts:v,react:A})),ep(null)},ej=async()=>{ed&&(ec(!1),await (0,l.mZ)(ed.id,ed.name,JSON.stringify({html:t,css:n,js:d,ts:v,react:A})))};(0,s.useEffect)(()=>{let e=e=>{e.data?.type==="console"&&ea(t=>[...t.slice(-49),{kind:e.data.kind,text:e.data.text,id:eu.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);let ev=(0,s.useCallback)(async(e,t,o,s,i)=>{ea([]);let n=s.trim()||i.trim()?await r.e("7960").then(r.t.bind(r,5643,23)):null,a="";if(s.trim()&&n)try{let e=n.transform(s,{presets:[["typescript",{allExtensions:!0}]],filename:"script.ts"});a=e?.code??""}catch(e){ea([{kind:"error",text:`TypeScript: ${e.message}`,id:eu.current++}]);return}let l="";if(i.trim()&&n)try{let e=n.transform(i,{presets:[["typescript",{allExtensions:!0,isTSX:!0}],["react",{runtime:"classic"}]],filename:"component.tsx"});l=e?.code??""}catch(e){ea([{kind:"error",text:`React: ${e.message}`,id:eu.current++}]);return}et(G(e,t,o,a,l))},[]),eS=(0,s.useCallback)(async()=>{if(ey&&em.trim()&&!ef){eg(!0),ew("");try{let e=await j(ey,em,{html:t,css:n,js:d,react:A});i(e.html),a(e.css),k(e.js),Q(e.react),O(""),ea([]),ex(""),e.react?(W("react"),ev(e.html,e.css,e.js,"",e.react)):(W("html"),ev(e.html,e.css,e.js,"",""))}catch(e){ew(e instanceof Error?e.message:String(e))}finally{eg(!1)}}},[ey,em,ef,ev,t,n,d,A]),eC=(0,s.useCallback)(()=>ev(t,n,d,v,A),[t,n,d,v,A,ev]),ez=()=>{!er&&es&&ei(!1),eo(e=>!e)},eT=()=>{!es&&er&&eo(!1),ei(e=>!e)},eR="html"===V?t:"css"===V?n:"js"===V?d:"ts"===V?v:A,eO="html"===V?i:"css"===V?a:"js"===V?k:"ts"===V?O:Q,eB=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c.M7,{children:[(0,o.jsx)(c.$n,{variant:"ghost",onClick:()=>{i(""),a(""),k(""),O(""),Q(""),ea([]),et(G("","","")),ep(null),(0,l.Is)(H,"")},title:"Clear all panels",children:"New"}),(0,o.jsx)(l.UO,{appId:"playground",onLoad:(e,t,r)=>{ep(t&&r?{id:t,name:r}:null);try{let{html:t,css:r,js:o,ts:s,react:n}=JSON.parse(e);i(t??""),a(r??""),k(o??""),O(s??""),Q(n??""),et(G(t??"",r??"",o??"")),ea([])}catch{}}}),(0,o.jsx)(c.$n,{variant:"accent",icon:(0,o.jsx)(p.A,{size:13}),onClick:()=>ec(!0),children:"Save"}),(0,o.jsx)(c.$n,{variant:"success",icon:(0,o.jsx)(u.A,{size:13}),onClick:eC,children:"Run"}),(0,o.jsx)(c.K0,{onClick:()=>ea([]),title:"Clear console",children:(0,o.jsx)(h.A,{size:13})}),(0,o.jsx)(c.ms,{trigger:(0,o.jsx)(c.$n,{variant:"ghost",iconRight:(0,o.jsx)(m.A,{size:12}),children:"Examples"}),children:y.k.map(e=>(0,o.jsx)(c.tJ,{onClick:()=>{let t,r,o,s,n;return t=e.html,r=e.css,o=e.js,s=e.ts??"",n=e.react??"",void(i(t),a(r),k(o),O(s),Q(n),ea([]),ev(t,r,o,s,n),n?W("react"):s?W("ts"):W("html"))},children:e.label},e.label))})]}),e]});return(0,o.jsxs)(l.PE,{title:"Playground",sidebar:(0,o.jsx)(c.tz,{activeAppId:"playground"}),topBarRight:eB,children:[el&&(0,o.jsx)(l.MJ,{onSave:ek,onUpdate:ej,existingDoc:ed??void 0,onCancel:()=>ec(!1)}),e$&&(0,o.jsxs)(C,{children:[(0,o.jsx)(x.A,{size:14,style:{color:l.w4.colors.accent,flexShrink:0}}),(0,o.jsx)(z,{placeholder:"Describe what you want to build…",value:em,onChange:e=>ex(e.target.value),onKeyDown:e=>{"Enter"!==e.key||ef||eS()}}),eb&&(0,o.jsx)(R,{title:eb,children:eb}),(0,o.jsxs)(T,{disabled:ef||!em.trim(),onClick:eS,children:[ef?(0,o.jsx)(S,{size:14}):(0,o.jsx)(x.A,{size:14}),ef?"Generating…":"Generate"]})]}),(0,o.jsxs)(B,{children:[er?(0,o.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,o.jsxs)(E,{onClick:ez,title:"Show editors",children:[(0,o.jsx)(f.A,{size:14}),(0,o.jsx)(J,{children:"Editor"})]})}):(0,o.jsxs)(N,{collapsed:!1,children:[(0,o.jsxs)(M,{children:[["html","css","js","ts","react"].map(e=>(0,o.jsxs)(D,{lang:e,active:V===e,onClick:()=>W(e),children:[(0,o.jsx)(F,{lang:e}),"react"===e?"React":e.toUpperCase()]},e)),(0,o.jsx)(I,{onClick:ez,title:"Collapse editors",children:(0,o.jsx)(g.A,{size:14})})]}),(0,o.jsx)($.A,{lang:V,value:eR,onChange:eO},V)]}),es?(0,o.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,o.jsxs)(P,{onClick:eT,title:"Show preview",children:[(0,o.jsx)(b.A,{size:14}),(0,o.jsx)(J,{children:"Preview"})]})}):(0,o.jsxs)(L,{collapsed:!1,children:[(0,o.jsxs)(U,{children:[(0,o.jsx)(q,{children:"Preview"}),(0,o.jsx)(I,{onClick:eT,title:"Collapse preview",children:(0,o.jsx)(w.A,{size:14})})]}),(0,o.jsx)(Y,{children:(0,o.jsx)(_,{srcDoc:ee,sandbox:"allow-scripts",title:"preview"},ee)}),en.length>0&&(0,o.jsx)(K,{children:en.map(e=>(0,o.jsxs)(X,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}}}]);