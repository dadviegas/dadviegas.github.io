"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([[807],{188(e,t,r){var o=r(7359),s=r(8997),n=r(3233),a=r(7207),i=r(9178),l=r(7071),c=r(6480),d=r(6135),p=r(9421),u=r(679),f=r(3482),m=r(1530),h=r(5496),g=r(9881),x=r(5426),b=r(9336),w=r(7293),y=r(5723);const $=a.keyframes`from{transform:rotate(0deg)}to{transform:rotate(360deg)}`,k=(0,n.default)(l.A)`animation: ${$} 1s linear infinite;`,j=n.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  padding: 6px ${i.w4.spacing.md};
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,v=n.default.input`
  flex: 1;
  padding: 7px 12px;
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-size: 13px;
  font-family: ${i.w4.typography.fontFamily};
  outline: none;
  transition: border-color 0.15s;
  &:focus { border-color: ${i.w4.colors.accent}; }
  &::placeholder { color: ${i.w4.colors.mainTextMuted}; opacity: 0.5; }
`,S=n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  background: ${({disabled:e})=>e?i.w4.colors.border:"linear-gradient(135deg, #a371f7, #58a6ff)"};
  border: none;
  border-radius: ${i.w4.borderRadius.md};
  color: ${({disabled:e})=>e?i.w4.colors.mainTextMuted:"#fff"};
  font-size: 13px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  white-space: nowrap;
  transition: opacity 0.15s;
  &:hover { opacity: ${({disabled:e})=>e?1:.85}; }
`,R=n.default.span`
  font-size: 11px;
  color: #f87171;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`,z=`\n  &::-webkit-scrollbar { width: 6px; height: 6px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb { background: ${i.w4.colors.border}; border-radius: 3px; }\n  &::-webkit-scrollbar-thumb:hover { background: ${i.w4.colors.mainTextMuted}; }\n  scrollbar-width: thin;\n  scrollbar-color: ${i.w4.colors.border} transparent;\n`,T=n.default.button`display:flex;align-items:center;gap:6px;padding:0 ${i.w4.spacing.sm};height:30px;background:none;border:1px solid ${i.w4.colors.accent};border-radius:${i.w4.borderRadius.sm};color:${i.w4.colors.accent};font-size:12px;font-family:${i.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,C=n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 ${i.w4.spacing.md};
  height: 32px;
  background: #238636;
  border: 1px solid #2ea043;
  border-radius: ${i.w4.borderRadius.sm};
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s;
  &:hover { background: #2ea043; }
  &:active { transform: scale(0.97); }
`,B=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${i.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: all 0.15s;
  &:hover { border-color: ${i.w4.colors.accent}; color: ${i.w4.colors.mainText}; }
`,E=n.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${i.w4.spacing.sm};
  height: 30px;
  background: transparent;
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${i.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;
  &:hover { border-color: ${i.w4.colors.accent}; color: ${i.w4.colors.mainText}; }
`,O=n.default.div`position: relative;`,N=n.default.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0,0,0,0.5);
  z-index: 200;
  min-width: 200px;
  overflow: hidden;
`,M=n.default.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  background: transparent;
  border: none;
  color: ${i.w4.colors.mainText};
  font-size: 13px;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  &:hover { background: ${i.w4.colors.mainBg}; }
`,J=n.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,A=n.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${i.w4.colors.sidebarBorder};
  background: ${i.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,F=n.default.button`
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
  background: ${i.w4.colors.sidebarBg};
  border: 1px solid ${i.w4.colors.sidebarBorder};
  border-left: none;
  border-radius: 0 ${i.w4.borderRadius.md} ${i.w4.borderRadius.md} 0;
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  z-index: 10;
  &:hover { background: ${i.w4.colors.sidebarBorder}; color: ${i.w4.colors.mainText}; }
`,D=n.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${i.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,I=n.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,L={html:"#f97316",css:"#38bdf8",js:"#facc15",ts:"#3b82f6",react:"#61dafb"},P=n.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 ${i.w4.spacing.md};
  height: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?L[e.lang]??"#facc15":"transparent"};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: ${i.w4.typography.fontFamily};
  color: ${e=>e.active?L[e.lang]??"#facc15":i.w4.colors.sidebarTextMuted};
  transition: color 0.12s, border-color 0.12s;
  &:hover { color: ${e=>L[e.lang]??"#facc15"}; }
`,U=n.default.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>L[e.lang]??"#facc15"};
`,q=n.default.button`
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
  margin-left: auto;
  margin-right: 6px;
  transition: background 0.12s, color 0.12s;
  &:hover { background: ${i.w4.colors.sidebarBorder}; color: ${i.w4.colors.mainText}; }
`,Y=n.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  background: #fff;
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,_=n.default.button`
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
  background: ${i.w4.colors.sidebarBg};
  border: 1px solid ${i.w4.colors.sidebarBorder};
  border-right: none;
  border-radius: ${i.w4.borderRadius.md} 0 0 ${i.w4.borderRadius.md};
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  z-index: 10;
  &:hover { background: ${i.w4.colors.sidebarBorder}; color: ${i.w4.colors.mainText}; }
`,H=n.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding: 0 ${i.w4.spacing.md};
  flex-shrink: 0;
`,X=n.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  flex: 1;
`,G=n.default.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,K=n.default.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
`,Z=n.default.div`
  max-height: 110px;
  overflow-y: auto;
  background: ${i.w4.colors.mainBg};
  border-top: 1px solid ${i.w4.colors.sidebarBorder};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 12px;
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
  ${z}
`,Q=n.default.div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function V(e,t,r,o="",s=""){return`<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<style>*, *::before, *::after { box-sizing: border-box; }\n${t}\n</style>\n${s?'\n<script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>':""}\n</head>\n<body>\n${e}\n<script>\n(function() {\n  const send = (kind, args) => {\n    window.parent.postMessage({ type: 'console', kind, text: args.map(a => {\n      try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch { return String(a); }\n    }).join(' ') }, '*');\n  };\n  ['log','warn','error'].forEach(m => {\n    const orig = console[m].bind(console);\n    console[m] = (...args) => { orig(...args); send(m, args); };\n  });\n  window.addEventListener('error', e => send('error', [e.message + ' (' + e.filename + ':' + e.lineno + ')']));\n})();\n<\/script>\n<script>${r}<\/script>\n${o?`<script>${o}<\/script>`:""}\n${s?`<script>${s}<\/script>`:""}\n</body>\n</html>`}const W="toolkit:playground";function ee({topBarRight:e}){const[t,s]=(0,o.useState)(""),[n,a]=(0,o.useState)(""),[l,$]=(0,o.useState)(""),[z,L]=(0,o.useState)(""),[ee,te]=(0,o.useState)(""),[re,oe]=(0,o.useState)("html"),[se,ne]=(0,o.useState)(()=>V("","","")),[ae,ie]=(0,o.useState)(!1),[le,ce]=(0,o.useState)(!1),[de,pe]=(0,o.useState)([]),[ue,fe]=(0,o.useState)(!1),[me,he]=(0,o.useState)(!1),[ge,xe]=(0,o.useState)(null),be=(0,o.useRef)(null),we=(0,o.useRef)(0),ye=(0,o.useRef)(!1);(0,o.useEffect)(()=>{(0,i.PL)(W).then(e=>{if(e)try{const t=JSON.parse(e);s(t.html??""),a(t.css??""),$(t.js??""),L(t.ts??""),te(t.react??""),ne(V(t.html??"",t.css??"",t.js??""))}catch{}ye.current=!0})},[]),(0,o.useEffect)(()=>{if(!ye.current)return;const e=setTimeout(()=>(0,i.Is)(W,JSON.stringify({html:t,css:n,js:l,ts:z,react:ee})),500);return()=>clearTimeout(e)},[t,n,l,z,ee]);const[$e,ke]=(0,o.useState)(""),[je,ve]=(0,o.useState)(!1),[Se,Re]=(0,o.useState)(""),ze=function(){try{const e=localStorage.getItem("atlantis:promptlab:keys");return e?JSON.parse(e).groq??"":""}catch{return""}}(),Te=Boolean(ze);(0,o.useEffect)(()=>{const e=e=>{be.current&&!be.current.contains(e.target)&&fe(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,o.useEffect)(()=>{const e=e=>{"console"===e.data?.type&&pe(t=>[...t.slice(-49),{kind:e.data.kind,text:e.data.text,id:we.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);const Ce=(0,o.useCallback)(async(e,t,o,s,n)=>{pe([]);const a=s.trim()||n.trim()?await r.e(643).then(r.t.bind(r,5643,23)):null;let i="";if(s.trim()&&a)try{const e=a.transform(s,{presets:[["typescript",{allExtensions:!0}]],filename:"script.ts"});i=e?.code??""}catch(e){return void pe([{kind:"error",text:`TypeScript: ${e.message}`,id:we.current++}])}let l="";if(n.trim()&&a)try{const e=a.transform(n,{presets:[["typescript",{allExtensions:!0,isTSX:!0}],["react",{runtime:"classic"}]],filename:"component.tsx"});l=e?.code??""}catch(e){return void pe([{kind:"error",text:`React: ${e.message}`,id:we.current++}])}ne(V(e,t,o,i,l))},[]),Be=(0,o.useCallback)(async()=>{if(ze&&$e.trim()&&!je){ve(!0),Re("");try{const e=await async function(e,t,r){const o=r&&(r.html||r.css||r.js||r.react)?`Here is the current code:\n\`\`\`json\n${JSON.stringify(r,null,2)}\n\`\`\`\n\nUser request: ${t}\n\nModify the existing code based on the request. Keep what works, change what's asked.`:t,s=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"system",content:'You are a code generator. The user describes what they want and you return ONLY a JSON object with the code. No explanation, no markdown fences, no extra text — just the raw JSON.\n\nReturn format:\n{"html": "...", "css": "...", "js": "...", "react": "..."}\n\nRules:\n- html: the body content only (no <html>, <head>, <body> tags)\n- css: complete CSS\n- js: vanilla JavaScript (runs after HTML)\n- react: JSX code using React 18 loaded from a CDN (global React and ReactDOM). Do NOT use import statements. Destructure hooks from the global: const { useState, useEffect, useRef, useMemo, useCallback } = React; Always include the render call: const root = ReactDOM.createRoot(document.getElementById(\'root\')); root.render(<App />); The html field MUST contain <div id="root"></div> when react is used.\n- If a field is not needed, set it to ""\n- Use real newlines (\\n) in the code strings for readability — do NOT put everything on one line\n- Indent with 2 spaces\n- Return valid JSON only'},{role:"user",content:o}],stream:!1,max_tokens:4e3,temperature:.3}),signal:void 0});if(!s.ok){const e=await s.text();throw new Error(`Groq ${s.status}: ${e.slice(0,200)}`)}const n=await s.json(),a=(n.choices?.[0]?.message?.content?.trim()??"").match(/\{[\s\S]*\}/);if(!a)throw new Error("No valid JSON in response");const i=JSON.parse(a[0]),l=e=>e?e.includes("\n")?e:e.replace(/;\s*/g,";\n").replace(/\{\s*/g,"{\n  ").replace(/\}\s*/g,"\n}\n").replace(/,\s*\n\s*\n/g,",\n").trim():"";return{html:l(i.html??""),css:l(i.css??""),js:l(i.js??""),react:l(i.react??"")}}(ze,$e,{html:t,css:n,js:l,react:ee});s(e.html),a(e.css),$(e.js),te(e.react),L(""),pe([]),ke(""),e.react?(oe("react"),Ce(e.html,e.css,e.js,"",e.react)):(oe("html"),Ce(e.html,e.css,e.js,"",""))}catch(e){Re(e instanceof Error?e.message:String(e))}finally{ve(!1)}}},[ze,$e,je,Ce,t,n,l,ee]),Ee=(0,o.useCallback)(()=>Ce(t,n,l,z,ee),[t,n,l,z,ee,Ce]),Oe=()=>{!ae&&le&&ce(!1),ie(e=>!e)},Ne=()=>{!le&&ae&&ie(!1),ce(e=>!e)},Me="html"===re?t:"css"===re?n:"js"===re?l:"ts"===re?z:ee,Je="html"===re?s:"css"===re?a:"js"===re?$:"ts"===re?L:te,Ae=(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.w4.spacing.sm},children:[(0,y.jsx)(E,{onClick:()=>{s(""),a(""),$(""),L(""),te(""),pe([]),ne(V("","","")),xe(null),(0,i.Is)(W,"")},title:"Clear all panels",children:"New"}),(0,y.jsx)(i.UO,{appId:"playground",onLoad:(e,t,r)=>{xe(t&&r?{id:t,name:r}:null);try{const{html:t,css:r,js:o,ts:n,react:i}=JSON.parse(e);s(t??""),a(r??""),$(o??""),L(n??""),te(i??""),ne(V(t??"",r??"",o??"")),pe([])}catch{}}}),(0,y.jsxs)(T,{onClick:()=>he(!0),children:[(0,y.jsx)(c.A,{size:13})," Save"]}),(0,y.jsxs)(C,{onClick:Ee,children:[(0,y.jsx)(d.A,{size:13})," Run"]}),(0,y.jsx)(B,{onClick:()=>pe([]),title:"Clear console",children:(0,y.jsx)(p.A,{size:13})}),(0,y.jsxs)(O,{ref:be,children:[(0,y.jsxs)(E,{onClick:()=>fe(e=>!e),children:["Examples ",(0,y.jsx)(u.A,{size:12})]}),ue&&(0,y.jsx)(N,{children:b.k.map(e=>(0,y.jsx)(M,{onClick:()=>(e=>{const t=e.html,r=e.css,o=e.js,n=e.ts??"",i=e.react??"";s(t),a(r),$(o),L(n),te(i),pe([]),Ce(t,r,o,n,i),oe(i?"react":n?"ts":"html"),fe(!1)})(e),children:e.label},e.label))})]}),e]});return(0,y.jsxs)(i.PE,{title:"Playground",sidebar:(0,y.jsx)(i.tz,{activeAppId:"playground"}),topBarRight:Ae,children:[me&&(0,y.jsx)(i.MJ,{onSave:async e=>{he(!1),await(0,i.KL)("playground",e,JSON.stringify({html:t,css:n,js:l,ts:z,react:ee})),xe(null)},onUpdate:async()=>{ge&&(he(!1),await(0,i.mZ)(ge.id,ge.name,JSON.stringify({html:t,css:n,js:l,ts:z,react:ee})))},existingDoc:ge??void 0,onCancel:()=>he(!1)}),Te&&(0,y.jsxs)(j,{children:[(0,y.jsx)(f.A,{size:14,style:{color:i.w4.colors.accent,flexShrink:0}}),(0,y.jsx)(v,{placeholder:"Describe what you want to build…",value:$e,onChange:e=>ke(e.target.value),onKeyDown:e=>{"Enter"!==e.key||je||Be()}}),Se&&(0,y.jsx)(R,{title:Se,children:Se}),(0,y.jsxs)(S,{disabled:je||!$e.trim(),onClick:Be,children:[je?(0,y.jsx)(k,{size:14}):(0,y.jsx)(f.A,{size:14}),je?"Generating…":"Generate"]})]}),(0,y.jsxs)(J,{children:[ae?(0,y.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,y.jsxs)(F,{onClick:Oe,title:"Show editors",children:[(0,y.jsx)(m.A,{size:14}),(0,y.jsx)(D,{children:"Editor"})]})}):(0,y.jsxs)(A,{collapsed:!1,children:[(0,y.jsxs)(I,{children:[["html","css","js","ts","react"].map(e=>(0,y.jsxs)(P,{lang:e,active:re===e,onClick:()=>oe(e),children:[(0,y.jsx)(U,{lang:e}),"react"===e?"React":e.toUpperCase()]},e)),(0,y.jsx)(q,{onClick:Oe,title:"Collapse editors",children:(0,y.jsx)(h.A,{size:14})})]}),(0,y.jsx)(w.A,{lang:re,value:Me,onChange:Je},re)]}),le?(0,y.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,y.jsxs)(_,{onClick:Ne,title:"Show preview",children:[(0,y.jsx)(g.A,{size:14}),(0,y.jsx)(D,{children:"Preview"})]})}):(0,y.jsxs)(Y,{collapsed:!1,children:[(0,y.jsxs)(H,{children:[(0,y.jsx)(X,{children:"Preview"}),(0,y.jsx)(q,{onClick:Ne,title:"Collapse preview",children:(0,y.jsx)(x.A,{size:14})})]}),(0,y.jsx)(G,{children:(0,y.jsx)(K,{srcDoc:se,sandbox:"allow-scripts",title:"preview"},se)}),de.length>0&&(0,y.jsx)(Z,{children:de.map(e=>(0,y.jsxs)(Q,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}const te=document.getElementById("root");if(!te)throw new Error("Root element #root not found");(0,s.H)(te).render((0,y.jsx)(ee,{}))},8997(e,t,r){var o=r(8991);t.H=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=807.549e506fd2ac622df7ec.js.map