"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([[807],{188(e,t,r){var o=r(7359),n=r(8997),s=r(3233),a=r(7207),i=r(894),l=r(7071),d=r(6480),c=r(6135),p=r(9421),u=r(679),f=r(3482),m=r(1530),h=r(5496),g=r(9881),x=r(5426),b=r(9336),w=r(7293),y=r(5723);const $=a.keyframes`from{transform:rotate(0deg)}to{transform:rotate(360deg)}`,k=(0,s.default)(l.A)`animation: ${$} 1s linear infinite;`,j=s.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  padding: 6px ${i.w4.spacing.md};
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,v=s.default.input`
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
`,S=s.default.button`
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
`,z=s.default.span`
  font-size: 11px;
  color: #f87171;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`,R=`\n  &::-webkit-scrollbar { width: 6px; height: 6px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb { background: ${i.w4.colors.border}; border-radius: 3px; }\n  &::-webkit-scrollbar-thumb:hover { background: ${i.w4.colors.mainTextMuted}; }\n  scrollbar-width: thin;\n  scrollbar-color: ${i.w4.colors.border} transparent;\n`,C=s.default.button`display:flex;align-items:center;gap:6px;padding:0 ${i.w4.spacing.sm};height:30px;background:none;border:1px solid ${i.w4.colors.accent};border-radius:${i.w4.borderRadius.sm};color:${i.w4.colors.accent};font-size:12px;font-family:${i.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,T=s.default.button`
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
`,B=s.default.button`
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
`,E=s.default.button`
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
`,O=s.default.div`position: relative;`,M=s.default.div`
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
`,N=s.default.button`
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
`,A=s.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,J=s.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${i.w4.colors.sidebarBorder};
  background: ${i.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,F=s.default.button`
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
`,D=s.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${i.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,L=s.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,I={html:"#f97316",css:"#38bdf8",js:"#facc15",ts:"#3b82f6",react:"#61dafb"},U=s.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 ${i.w4.spacing.md};
  height: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?I[e.lang]??"#facc15":"transparent"};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: ${i.w4.typography.fontFamily};
  color: ${e=>e.active?I[e.lang]??"#facc15":i.w4.colors.sidebarTextMuted};
  transition: color 0.12s, border-color 0.12s;
  &:hover { color: ${e=>I[e.lang]??"#facc15"}; }
`,P=s.default.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>I[e.lang]??"#facc15"};
`,q=s.default.button`
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
`,Y=s.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  background: #fff;
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,_=s.default.button`
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
`,H=s.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding: 0 ${i.w4.spacing.md};
  flex-shrink: 0;
`,X=s.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  flex: 1;
`,G=s.default.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,K=s.default.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
`,Z=s.default.div`
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
  ${R}
`,Q=s.default.div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function V(e,t,r,o="",n=""){return`<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<style>*, *::before, *::after { box-sizing: border-box; }\n${t}\n</style>\n${n?'\n<script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>':""}\n</head>\n<body>\n${e}\n<script>\n(function() {\n  const send = (kind, args) => {\n    window.parent.postMessage({ type: 'console', kind, text: args.map(a => {\n      try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch { return String(a); }\n    }).join(' ') }, '*');\n  };\n  ['log','warn','error'].forEach(m => {\n    const orig = console[m].bind(console);\n    console[m] = (...args) => { orig(...args); send(m, args); };\n  });\n  window.addEventListener('error', e => send('error', [e.message + ' (' + e.filename + ':' + e.lineno + ')']));\n})();\n<\/script>\n<script>${r}<\/script>\n${o?`<script>${o}<\/script>`:""}\n${n?`<script>${n}<\/script>`:""}\n</body>\n</html>`}function W({topBarRight:e}){const t=b.k[0],[n,s]=(0,o.useState)(t.html),[a,l]=(0,o.useState)(t.css),[$,R]=(0,o.useState)(t.js),[I,W]=(0,o.useState)(t.ts??""),[ee,te]=(0,o.useState)(t.react??""),[re,oe]=(0,o.useState)("html"),[ne,se]=(0,o.useState)(()=>V(t.html,t.css,t.js)),[ae,ie]=(0,o.useState)(!1),[le,de]=(0,o.useState)(!1),[ce,pe]=(0,o.useState)([]),[ue,fe]=(0,o.useState)(!1),[me,he]=(0,o.useState)(!1),[ge,xe]=(0,o.useState)(null),be=(0,o.useRef)(null),we=(0,o.useRef)(0),[ye,$e]=(0,o.useState)(""),[ke,je]=(0,o.useState)(!1),[ve,Se]=(0,o.useState)(""),ze=function(){try{const e=localStorage.getItem("atlantis:promptlab:keys");return e?JSON.parse(e).groq??"":""}catch{return""}}(),Re=Boolean(ze);(0,o.useEffect)(()=>{const e=e=>{be.current&&!be.current.contains(e.target)&&fe(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,o.useEffect)(()=>{const e=e=>{"console"===e.data?.type&&pe(t=>[...t.slice(-49),{kind:e.data.kind,text:e.data.text,id:we.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);const Ce=(0,o.useCallback)(async(e,t,o,n,s)=>{pe([]);const a=n.trim()||s.trim()?await r.e(643).then(r.t.bind(r,5643,23)):null;let i="";if(n.trim()&&a)try{const e=a.transform(n,{presets:[["typescript",{allExtensions:!0}]],filename:"script.ts"});i=e?.code??""}catch(e){return void pe([{kind:"error",text:`TypeScript: ${e.message}`,id:we.current++}])}let l="";if(s.trim()&&a)try{const e=a.transform(s,{presets:[["typescript",{allExtensions:!0,isTSX:!0}],["react",{runtime:"classic"}]],filename:"component.tsx"});l=e?.code??""}catch(e){return void pe([{kind:"error",text:`React: ${e.message}`,id:we.current++}])}se(V(e,t,o,i,l))},[]),Te=(0,o.useCallback)(async()=>{if(ze&&ye.trim()&&!ke){je(!0),Se("");try{const e=await async function(e,t,r){const o=r&&(r.html||r.css||r.js||r.react)?`Here is the current code:\n\`\`\`json\n${JSON.stringify(r,null,2)}\n\`\`\`\n\nUser request: ${t}\n\nModify the existing code based on the request. Keep what works, change what's asked.`:t,n=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"system",content:'You are a code generator. The user describes what they want and you return ONLY a JSON object with the code. No explanation, no markdown fences, no extra text — just the raw JSON.\n\nReturn format:\n{"html": "...", "css": "...", "js": "...", "react": "..."}\n\nRules:\n- html: the body content only (no <html>, <head>, <body> tags)\n- css: complete CSS\n- js: vanilla JavaScript (runs after HTML)\n- react: JSX code using React 18 loaded from a CDN (global React and ReactDOM). Do NOT use import statements. Destructure hooks from the global: const { useState, useEffect, useRef, useMemo, useCallback } = React; Always include the render call: const root = ReactDOM.createRoot(document.getElementById(\'root\')); root.render(<App />); The html field MUST contain <div id="root"></div> when react is used.\n- If a field is not needed, set it to ""\n- Use real newlines (\\n) in the code strings for readability — do NOT put everything on one line\n- Indent with 2 spaces\n- Return valid JSON only'},{role:"user",content:o}],stream:!1,max_tokens:4e3,temperature:.3}),signal:void 0});if(!n.ok){const e=await n.text();throw new Error(`Groq ${n.status}: ${e.slice(0,200)}`)}const s=await n.json(),a=(s.choices?.[0]?.message?.content?.trim()??"").match(/\{[\s\S]*\}/);if(!a)throw new Error("No valid JSON in response");const i=JSON.parse(a[0]),l=e=>e?e.includes("\n")?e:e.replace(/;\s*/g,";\n").replace(/\{\s*/g,"{\n  ").replace(/\}\s*/g,"\n}\n").replace(/,\s*\n\s*\n/g,",\n").trim():"";return{html:l(i.html??""),css:l(i.css??""),js:l(i.js??""),react:l(i.react??"")}}(ze,ye,{html:n,css:a,js:$,react:ee});s(e.html),l(e.css),R(e.js),te(e.react),W(""),pe([]),$e(""),e.react?(oe("react"),Ce(e.html,e.css,e.js,"",e.react)):(oe("html"),Ce(e.html,e.css,e.js,"",""))}catch(e){Se(e instanceof Error?e.message:String(e))}finally{je(!1)}}},[ze,ye,ke,Ce,n,a,$,ee]),Be=(0,o.useCallback)(()=>Ce(n,a,$,I,ee),[n,a,$,I,ee,Ce]),Ee=()=>{!ae&&le&&de(!1),ie(e=>!e)},Oe=()=>{!le&&ae&&ie(!1),de(e=>!e)},Me="html"===re?n:"css"===re?a:"js"===re?$:"ts"===re?I:ee,Ne="html"===re?s:"css"===re?l:"js"===re?R:"ts"===re?W:te,Ae=(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.w4.spacing.sm},children:[(0,y.jsx)(E,{onClick:()=>{s(""),l(""),R(""),W(""),te(""),pe([]),se(V("","",""))},title:"Clear all panels",children:"New"}),(0,y.jsx)(i.UO,{appId:"playground",onLoad:(e,t,r)=>{xe(t&&r?{id:t,name:r}:null);try{const{html:t,css:r,js:o,ts:n,react:a}=JSON.parse(e);s(t??""),l(r??""),R(o??""),W(n??""),te(a??""),se(V(t??"",r??"",o??"")),pe([])}catch{}}}),(0,y.jsxs)(C,{onClick:()=>he(!0),children:[(0,y.jsx)(d.A,{size:13})," Save"]}),(0,y.jsxs)(T,{onClick:Be,children:[(0,y.jsx)(c.A,{size:13})," Run"]}),(0,y.jsx)(B,{onClick:()=>pe([]),title:"Clear console",children:(0,y.jsx)(p.A,{size:13})}),(0,y.jsxs)(O,{ref:be,children:[(0,y.jsxs)(E,{onClick:()=>fe(e=>!e),children:["Examples ",(0,y.jsx)(u.A,{size:12})]}),ue&&(0,y.jsx)(M,{children:b.k.map(e=>(0,y.jsx)(N,{onClick:()=>(e=>{const t=e.html,r=e.css,o=e.js,n=e.ts??"",a=e.react??"";s(t),l(r),R(o),W(n),te(a),pe([]),Ce(t,r,o,n,a),oe(a?"react":n?"ts":"html"),fe(!1)})(e),children:e.label},e.label))})]}),e]});return(0,y.jsxs)(i.PE,{title:"Playground",sidebar:(0,y.jsx)(i.tz,{activeAppId:"playground"}),topBarRight:Ae,children:[me&&(0,y.jsx)(i.MJ,{onSave:async e=>{he(!1),await(0,i.KL)("playground",e,JSON.stringify({html:n,css:a,js:$,ts:I,react:ee})),xe(null)},onUpdate:async()=>{ge&&(he(!1),await(0,i.mZ)(ge.id,ge.name,JSON.stringify({html:n,css:a,js:$,ts:I,react:ee})))},existingDoc:ge??void 0,onCancel:()=>he(!1)}),Re&&(0,y.jsxs)(j,{children:[(0,y.jsx)(f.A,{size:14,style:{color:i.w4.colors.accent,flexShrink:0}}),(0,y.jsx)(v,{placeholder:"Describe what you want to build…",value:ye,onChange:e=>$e(e.target.value),onKeyDown:e=>{"Enter"!==e.key||ke||Te()}}),ve&&(0,y.jsx)(z,{title:ve,children:ve}),(0,y.jsxs)(S,{disabled:ke||!ye.trim(),onClick:Te,children:[ke?(0,y.jsx)(k,{size:14}):(0,y.jsx)(f.A,{size:14}),ke?"Generating…":"Generate"]})]}),(0,y.jsxs)(A,{children:[ae?(0,y.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,y.jsxs)(F,{onClick:Ee,title:"Show editors",children:[(0,y.jsx)(m.A,{size:14}),(0,y.jsx)(D,{children:"Editor"})]})}):(0,y.jsxs)(J,{collapsed:!1,children:[(0,y.jsxs)(L,{children:[["html","css","js","ts","react"].map(e=>(0,y.jsxs)(U,{lang:e,active:re===e,onClick:()=>oe(e),children:[(0,y.jsx)(P,{lang:e}),"react"===e?"React":e.toUpperCase()]},e)),(0,y.jsx)(q,{onClick:Ee,title:"Collapse editors",children:(0,y.jsx)(h.A,{size:14})})]}),(0,y.jsx)(w.A,{lang:re,value:Me,onChange:Ne},re)]}),le?(0,y.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,y.jsxs)(_,{onClick:Oe,title:"Show preview",children:[(0,y.jsx)(g.A,{size:14}),(0,y.jsx)(D,{children:"Preview"})]})}):(0,y.jsxs)(Y,{collapsed:!1,children:[(0,y.jsxs)(H,{children:[(0,y.jsx)(X,{children:"Preview"}),(0,y.jsx)(q,{onClick:Oe,title:"Collapse preview",children:(0,y.jsx)(x.A,{size:14})})]}),(0,y.jsx)(G,{children:(0,y.jsx)(K,{srcDoc:ne,sandbox:"allow-scripts",title:"preview"},ne)}),ce.length>0&&(0,y.jsx)(Z,{children:ce.map(e=>(0,y.jsxs)(Q,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}const ee=document.getElementById("root");if(!ee)throw new Error("Root element #root not found");(0,n.H)(ee).render((0,y.jsx)(W,{}))},8997(e,t,r){var o=r(8991);t.H=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=807.8bfebdab4aab6a8524c4.js.map