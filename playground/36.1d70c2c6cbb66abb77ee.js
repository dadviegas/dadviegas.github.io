"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([[36],{6036(e,t,r){r.r(t),r.d(t,{default:()=>W});var o=r(7359),s=r(3233),n=r(7207),a=r(9178),i=r(7071),l=r(5496),c=r(1530),d=r(3482),p=r(679),u=r(5426),f=r(9881),m=r(6135),h=r(9421),g=r(6480),x=r(9336),b=r(7293),w=r(5723);const y=n.keyframes`from{transform:rotate(0deg)}to{transform:rotate(360deg)}`,$=(0,s.default)(i.A)`animation: ${y} 1s linear infinite;`,k=s.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  padding: 6px ${a.w4.spacing.md};
  background: ${a.w4.colors.sidebarBg};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,j=s.default.input`
  flex: 1;
  padding: 7px 12px;
  background: ${a.w4.colors.codeBg};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  color: ${a.w4.colors.mainText};
  font-size: 13px;
  font-family: ${a.w4.typography.fontFamily};
  outline: none;
  transition: border-color 0.15s;
  &:focus { border-color: ${a.w4.colors.accent}; }
  &::placeholder { color: ${a.w4.colors.mainTextMuted}; opacity: 0.5; }
`,v=s.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  background: ${({disabled:e})=>e?a.w4.colors.border:"linear-gradient(135deg, #a371f7, #58a6ff)"};
  border: none;
  border-radius: ${a.w4.borderRadius.md};
  color: ${({disabled:e})=>e?a.w4.colors.mainTextMuted:"#fff"};
  font-size: 13px;
  font-weight: 600;
  font-family: ${a.w4.typography.fontFamily};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  white-space: nowrap;
  transition: opacity 0.15s;
  &:hover { opacity: ${({disabled:e})=>e?1:.85}; }
`,S=s.default.span`
  font-size: 11px;
  color: #f87171;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`,z=`\n  &::-webkit-scrollbar { width: 6px; height: 6px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb { background: ${a.w4.colors.border}; border-radius: 3px; }\n  &::-webkit-scrollbar-thumb:hover { background: ${a.w4.colors.mainTextMuted}; }\n  scrollbar-width: thin;\n  scrollbar-color: ${a.w4.colors.border} transparent;\n`,T=s.default.button`display:flex;align-items:center;gap:6px;padding:0 ${a.w4.spacing.sm};height:30px;background:none;border:1px solid ${a.w4.colors.accent};border-radius:${a.w4.borderRadius.sm};color:${a.w4.colors.accent};font-size:12px;font-family:${a.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,C=s.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 ${a.w4.spacing.md};
  height: 32px;
  background: #238636;
  border: 1px solid #2ea043;
  border-radius: ${a.w4.borderRadius.sm};
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s;
  &:hover { background: #2ea043; }
  &:active { transform: scale(0.97); }
`,R=s.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${a.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: all 0.15s;
  &:hover { border-color: ${a.w4.colors.accent}; color: ${a.w4.colors.mainText}; }
`,B=s.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${a.w4.spacing.sm};
  height: 30px;
  background: transparent;
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${a.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;
  &:hover { border-color: ${a.w4.colors.accent}; color: ${a.w4.colors.mainText}; }
`,E=s.default.div`position: relative;`,O=s.default.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0,0,0,0.5);
  z-index: 200;
  min-width: 200px;
  overflow: hidden;
`,N=s.default.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  background: transparent;
  border: none;
  color: ${a.w4.colors.mainText};
  font-size: 13px;
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;
  &:hover { background: ${a.w4.colors.mainBg}; }
`,M=s.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,J=s.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${a.w4.colors.sidebarBorder};
  background: ${a.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,A=s.default.button`
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
  background: ${a.w4.colors.sidebarBg};
  border: 1px solid ${a.w4.colors.sidebarBorder};
  border-left: none;
  border-radius: 0 ${a.w4.borderRadius.md} ${a.w4.borderRadius.md} 0;
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  z-index: 10;
  &:hover { background: ${a.w4.colors.sidebarBorder}; color: ${a.w4.colors.mainText}; }
`,F=s.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${a.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,D=s.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${a.w4.colors.sidebarBg};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,L={html:"#f97316",css:"#38bdf8",js:"#facc15",ts:"#3b82f6",react:"#61dafb"},I=s.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 ${a.w4.spacing.md};
  height: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?L[e.lang]??"#facc15":"transparent"};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: ${a.w4.typography.fontFamily};
  color: ${e=>e.active?L[e.lang]??"#facc15":a.w4.colors.sidebarTextMuted};
  transition: color 0.12s, border-color 0.12s;
  &:hover { color: ${e=>L[e.lang]??"#facc15"}; }
`,P=s.default.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>L[e.lang]??"#facc15"};
`,U=s.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${a.w4.borderRadius.sm};
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  margin-left: auto;
  margin-right: 6px;
  transition: background 0.12s, color 0.12s;
  &:hover { background: ${a.w4.colors.sidebarBorder}; color: ${a.w4.colors.mainText}; }
`,q=s.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  background: #fff;
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,Y=s.default.button`
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
  background: ${a.w4.colors.sidebarBg};
  border: 1px solid ${a.w4.colors.sidebarBorder};
  border-right: none;
  border-radius: ${a.w4.borderRadius.md} 0 0 ${a.w4.borderRadius.md};
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  z-index: 10;
  &:hover { background: ${a.w4.colors.sidebarBorder}; color: ${a.w4.colors.mainText}; }
`,_=s.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${a.w4.colors.sidebarBg};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  padding: 0 ${a.w4.spacing.md};
  flex-shrink: 0;
`,X=s.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
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
`,H=s.default.div`
  max-height: 110px;
  overflow-y: auto;
  background: ${a.w4.colors.mainBg};
  border-top: 1px solid ${a.w4.colors.sidebarBorder};
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12px;
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
  ${z}
`,Z=s.default.div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function Q(e,t,r,o="",s=""){return`<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<style>*, *::before, *::after { box-sizing: border-box; }\n${t}\n</style>\n${s?'\n<script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>':""}\n</head>\n<body>\n${e}\n<script>\n(function() {\n  const send = (kind, args) => {\n    window.parent.postMessage({ type: 'console', kind, text: args.map(a => {\n      try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch { return String(a); }\n    }).join(' ') }, '*');\n  };\n  ['log','warn','error'].forEach(m => {\n    const orig = console[m].bind(console);\n    console[m] = (...args) => { orig(...args); send(m, args); };\n  });\n  window.addEventListener('error', e => send('error', [e.message + ' (' + e.filename + ':' + e.lineno + ')']));\n})();\n<\/script>\n<script>${r}<\/script>\n${o?`<script>${o}<\/script>`:""}\n${s?`<script>${s}<\/script>`:""}\n</body>\n</html>`}const V="toolkit:playground";function W({topBarRight:e}){const[t,s]=(0,o.useState)(""),[n,i]=(0,o.useState)(""),[y,z]=(0,o.useState)(""),[L,W]=(0,o.useState)(""),[ee,te]=(0,o.useState)(""),[re,oe]=(0,o.useState)("html"),[se,ne]=(0,o.useState)(()=>Q("","","")),[ae,ie]=(0,o.useState)(!1),[le,ce]=(0,o.useState)(!1),[de,pe]=(0,o.useState)([]),[ue,fe]=(0,o.useState)(!1),[me,he]=(0,o.useState)(!1),[ge,xe]=(0,o.useState)(null),be=(0,o.useRef)(null),we=(0,o.useRef)(0),ye=(0,o.useRef)(!1);(0,o.useEffect)(()=>{(0,a.PL)(V).then(e=>{if(e)try{const t=JSON.parse(e);s(t.html??""),i(t.css??""),z(t.js??""),W(t.ts??""),te(t.react??""),ne(Q(t.html??"",t.css??"",t.js??""))}catch{}ye.current=!0})},[]),(0,o.useEffect)(()=>{if(!ye.current)return;const e=setTimeout(()=>(0,a.Is)(V,JSON.stringify({html:t,css:n,js:y,ts:L,react:ee})),500);return()=>clearTimeout(e)},[t,n,y,L,ee]);const[$e,ke]=(0,o.useState)(""),[je,ve]=(0,o.useState)(!1),[Se,ze]=(0,o.useState)(""),Te=function(){try{const e=localStorage.getItem("atlantis:promptlab:keys");return e?JSON.parse(e).groq??"":""}catch{return""}}(),Ce=Boolean(Te);(0,o.useEffect)(()=>{const e=e=>{be.current&&!be.current.contains(e.target)&&fe(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,o.useEffect)(()=>{const e=e=>{"console"===e.data?.type&&pe(t=>[...t.slice(-49),{kind:e.data.kind,text:e.data.text,id:we.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);const Re=(0,o.useCallback)(async(e,t,o,s,n)=>{pe([]);const a=s.trim()||n.trim()?await r.e(643).then(r.t.bind(r,5643,23)):null;let i="";if(s.trim()&&a)try{const e=a.transform(s,{presets:[["typescript",{allExtensions:!0}]],filename:"script.ts"});i=e?.code??""}catch(e){return void pe([{kind:"error",text:`TypeScript: ${e.message}`,id:we.current++}])}let l="";if(n.trim()&&a)try{const e=a.transform(n,{presets:[["typescript",{allExtensions:!0,isTSX:!0}],["react",{runtime:"classic"}]],filename:"component.tsx"});l=e?.code??""}catch(e){return void pe([{kind:"error",text:`React: ${e.message}`,id:we.current++}])}ne(Q(e,t,o,i,l))},[]),Be=(0,o.useCallback)(async()=>{if(Te&&$e.trim()&&!je){ve(!0),ze("");try{const e=await async function(e,t,r){const o=r&&(r.html||r.css||r.js||r.react)?`Here is the current code:\n\`\`\`json\n${JSON.stringify(r,null,2)}\n\`\`\`\n\nUser request: ${t}\n\nModify the existing code based on the request. Keep what works, change what's asked.`:t,s=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"system",content:'You are a code generator. The user describes what they want and you return ONLY a JSON object with the code. No explanation, no markdown fences, no extra text — just the raw JSON.\n\nReturn format:\n{"html": "...", "css": "...", "js": "...", "react": "..."}\n\nRules:\n- html: the body content only (no <html>, <head>, <body> tags)\n- css: complete CSS\n- js: vanilla JavaScript (runs after HTML)\n- react: JSX code using React 18 loaded from a CDN (global React and ReactDOM). Do NOT use import statements. Destructure hooks from the global: const { useState, useEffect, useRef, useMemo, useCallback } = React; Always include the render call: const root = ReactDOM.createRoot(document.getElementById(\'root\')); root.render(<App />); The html field MUST contain <div id="root"></div> when react is used.\n- If a field is not needed, set it to ""\n- Use real newlines (\\n) in the code strings for readability — do NOT put everything on one line\n- Indent with 2 spaces\n- Return valid JSON only'},{role:"user",content:o}],stream:!1,max_tokens:4e3,temperature:.3}),signal:void 0});if(!s.ok){const e=await s.text();throw new Error(`Groq ${s.status}: ${e.slice(0,200)}`)}const n=await s.json(),a=(n.choices?.[0]?.message?.content?.trim()??"").match(/\{[\s\S]*\}/);if(!a)throw new Error("No valid JSON in response");const i=JSON.parse(a[0]),l=e=>e?e.includes("\n")?e:e.replace(/;\s*/g,";\n").replace(/\{\s*/g,"{\n  ").replace(/\}\s*/g,"\n}\n").replace(/,\s*\n\s*\n/g,",\n").trim():"";return{html:l(i.html??""),css:l(i.css??""),js:l(i.js??""),react:l(i.react??"")}}(Te,$e,{html:t,css:n,js:y,react:ee});s(e.html),i(e.css),z(e.js),te(e.react),W(""),pe([]),ke(""),e.react?(oe("react"),Re(e.html,e.css,e.js,"",e.react)):(oe("html"),Re(e.html,e.css,e.js,"",""))}catch(e){ze(e instanceof Error?e.message:String(e))}finally{ve(!1)}}},[Te,$e,je,Re,t,n,y,ee]),Ee=(0,o.useCallback)(()=>Re(t,n,y,L,ee),[t,n,y,L,ee,Re]),Oe=()=>{!ae&&le&&ce(!1),ie(e=>!e)},Ne=()=>{!le&&ae&&ie(!1),ce(e=>!e)},Me="html"===re?t:"css"===re?n:"js"===re?y:"ts"===re?L:ee,Je="html"===re?s:"css"===re?i:"js"===re?z:"ts"===re?W:te,Ae=(0,w.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.w4.spacing.sm},children:[(0,w.jsx)(B,{onClick:()=>{s(""),i(""),z(""),W(""),te(""),pe([]),ne(Q("","","")),xe(null),(0,a.Is)(V,"")},title:"Clear all panels",children:"New"}),(0,w.jsx)(a.UO,{appId:"playground",onLoad:(e,t,r)=>{xe(t&&r?{id:t,name:r}:null);try{const{html:t,css:r,js:o,ts:n,react:a}=JSON.parse(e);s(t??""),i(r??""),z(o??""),W(n??""),te(a??""),ne(Q(t??"",r??"",o??"")),pe([])}catch{}}}),(0,w.jsxs)(T,{onClick:()=>he(!0),children:[(0,w.jsx)(g.A,{size:13})," Save"]}),(0,w.jsxs)(C,{onClick:Ee,children:[(0,w.jsx)(m.A,{size:13})," Run"]}),(0,w.jsx)(R,{onClick:()=>pe([]),title:"Clear console",children:(0,w.jsx)(h.A,{size:13})}),(0,w.jsxs)(E,{ref:be,children:[(0,w.jsxs)(B,{onClick:()=>fe(e=>!e),children:["Examples ",(0,w.jsx)(p.A,{size:12})]}),ue&&(0,w.jsx)(O,{children:x.k.map(e=>(0,w.jsx)(N,{onClick:()=>(e=>{const t=e.html,r=e.css,o=e.js,n=e.ts??"",a=e.react??"";s(t),i(r),z(o),W(n),te(a),pe([]),Re(t,r,o,n,a),oe(a?"react":n?"ts":"html"),fe(!1)})(e),children:e.label},e.label))})]}),e]});return(0,w.jsxs)(a.PE,{title:"Playground",sidebar:(0,w.jsx)(a.tz,{activeAppId:"playground"}),topBarRight:Ae,children:[me&&(0,w.jsx)(a.MJ,{onSave:async e=>{he(!1),await(0,a.KL)("playground",e,JSON.stringify({html:t,css:n,js:y,ts:L,react:ee})),xe(null)},onUpdate:async()=>{ge&&(he(!1),await(0,a.mZ)(ge.id,ge.name,JSON.stringify({html:t,css:n,js:y,ts:L,react:ee})))},existingDoc:ge??void 0,onCancel:()=>he(!1)}),Ce&&(0,w.jsxs)(k,{children:[(0,w.jsx)(d.A,{size:14,style:{color:a.w4.colors.accent,flexShrink:0}}),(0,w.jsx)(j,{placeholder:"Describe what you want to build…",value:$e,onChange:e=>ke(e.target.value),onKeyDown:e=>{"Enter"!==e.key||je||Be()}}),Se&&(0,w.jsx)(S,{title:Se,children:Se}),(0,w.jsxs)(v,{disabled:je||!$e.trim(),onClick:Be,children:[je?(0,w.jsx)($,{size:14}):(0,w.jsx)(d.A,{size:14}),je?"Generating…":"Generate"]})]}),(0,w.jsxs)(M,{children:[ae?(0,w.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,w.jsxs)(A,{onClick:Oe,title:"Show editors",children:[(0,w.jsx)(c.A,{size:14}),(0,w.jsx)(F,{children:"Editor"})]})}):(0,w.jsxs)(J,{collapsed:!1,children:[(0,w.jsxs)(D,{children:[["html","css","js","ts","react"].map(e=>(0,w.jsxs)(I,{lang:e,active:re===e,onClick:()=>oe(e),children:[(0,w.jsx)(P,{lang:e}),"react"===e?"React":e.toUpperCase()]},e)),(0,w.jsx)(U,{onClick:Oe,title:"Collapse editors",children:(0,w.jsx)(l.A,{size:14})})]}),(0,w.jsx)(b.A,{lang:re,value:Me,onChange:Je},re)]}),le?(0,w.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,w.jsxs)(Y,{onClick:Ne,title:"Show preview",children:[(0,w.jsx)(f.A,{size:14}),(0,w.jsx)(F,{children:"Preview"})]})}):(0,w.jsxs)(q,{collapsed:!1,children:[(0,w.jsxs)(_,{children:[(0,w.jsx)(X,{children:"Preview"}),(0,w.jsx)(U,{onClick:Ne,title:"Collapse preview",children:(0,w.jsx)(u.A,{size:14})})]}),(0,w.jsx)(G,{children:(0,w.jsx)(K,{srcDoc:se,sandbox:"allow-scripts",title:"preview"},se)}),de.length>0&&(0,w.jsx)(H,{children:de.map(e=>(0,w.jsxs)(Z,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}}}]);
//# sourceMappingURL=36.1d70c2c6cbb66abb77ee.js.map