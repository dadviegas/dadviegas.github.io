"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([[807],{188(e,t,r){var o=r(7359),s=r(8997),n=r(3233),a=r(7207),i=r(458),l=r(9359),c=r(7071),d=r(6480),p=r(6135),u=r(9421),f=r(679),h=r(3482),m=r(1530),x=r(5496),g=r(9881),b=r(5426),w=r(9336),y=r(7293),$=r(5723);const j=a.keyframes`from{transform:rotate(0deg)}to{transform:rotate(360deg)}`,k=(0,n.default)(c.A)`animation: ${j} 1s linear infinite;`,v=n.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  padding: 6px ${i.w4.spacing.md};
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,S=n.default.input`
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
`,C=n.default.button`
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
`,z=`\n  &::-webkit-scrollbar { width: 6px; height: 6px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb { background: ${i.w4.colors.border}; border-radius: 3px; }\n  &::-webkit-scrollbar-thumb:hover { background: ${i.w4.colors.mainTextMuted}; }\n  scrollbar-width: thin;\n  scrollbar-color: ${i.w4.colors.border} transparent;\n`,T=n.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,B=n.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${i.w4.colors.sidebarBorder};
  background: ${i.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,O=n.default.button`
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
`,E=n.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${i.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,N=n.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,J={html:"#f97316",css:"#38bdf8",js:"#facc15",ts:"#3b82f6",react:"#61dafb"},M=n.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 ${i.w4.spacing.md};
  height: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?J[e.lang]??"#facc15":"transparent"};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: ${i.w4.typography.fontFamily};
  color: ${e=>e.active?J[e.lang]??"#facc15":i.w4.colors.sidebarTextMuted};
  transition: color 0.12s, border-color 0.12s;
  &:hover { color: ${e=>J[e.lang]??"#facc15"}; }
`,A=n.default.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>J[e.lang]??"#facc15"};
`,D=n.default.button`
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
`,I=n.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  background: #fff;
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,F=n.default.button`
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
`,L=n.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding: 0 ${i.w4.spacing.md};
  flex-shrink: 0;
`,P=n.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  flex: 1;
`,U=n.default.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,q=n.default.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
`,Y=n.default.div`
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
`,_=n.default.div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function H(e,t,r,o="",s=""){return`<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<style>*, *::before, *::after { box-sizing: border-box; }\n${t}\n</style>\n${s?'\n<script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>':""}\n</head>\n<body>\n${e}\n<script>\n(function() {\n  const send = (kind, args) => {\n    window.parent.postMessage({ type: 'console', kind, text: args.map(a => {\n      try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch { return String(a); }\n    }).join(' ') }, '*');\n  };\n  ['log','warn','error'].forEach(m => {\n    const orig = console[m].bind(console);\n    console[m] = (...args) => { orig(...args); send(m, args); };\n  });\n  window.addEventListener('error', e => send('error', [e.message + ' (' + e.filename + ':' + e.lineno + ')']));\n})();\n<\/script>\n<script>${r}<\/script>\n${o?`<script>${o}<\/script>`:""}\n${s?`<script>${s}<\/script>`:""}\n</body>\n</html>`}const K="toolkit:playground";function X({topBarRight:e}){const[t,s]=(0,o.useState)(""),[n,a]=(0,o.useState)(""),[c,j]=(0,o.useState)(""),[z,J]=(0,o.useState)(""),[X,G]=(0,o.useState)(""),[Z,Q]=(0,o.useState)("html"),[V,W]=(0,o.useState)(()=>H("","","")),[ee,te]=(0,o.useState)(!1),[re,oe]=(0,o.useState)(!1),[se,ne]=(0,o.useState)([]),[ae,ie]=(0,o.useState)(!1),[le,ce]=(0,o.useState)(null),de=(0,o.useRef)(0),pe=(0,o.useRef)(!1);(0,o.useEffect)(()=>{(0,i.PL)(K).then(e=>{if(e)try{const t=JSON.parse(e);s(t.html??""),a(t.css??""),j(t.js??""),J(t.ts??""),G(t.react??""),W(H(t.html??"",t.css??"",t.js??""))}catch{}pe.current=!0})},[]),(0,o.useEffect)(()=>{if(!pe.current)return;const e=setTimeout(()=>(0,i.Is)(K,JSON.stringify({html:t,css:n,js:c,ts:z,react:X})),500);return()=>clearTimeout(e)},[t,n,c,z,X]);const[ue,fe]=(0,o.useState)(""),[he,me]=(0,o.useState)(!1),[xe,ge]=(0,o.useState)(""),be=function(){try{const e=localStorage.getItem("atlantis:promptlab:keys");return e?JSON.parse(e).groq??"":""}catch{return""}}(),we=Boolean(be);(0,o.useEffect)(()=>{const e=e=>{"console"===e.data?.type&&ne(t=>[...t.slice(-49),{kind:e.data.kind,text:e.data.text,id:de.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);const ye=(0,o.useCallback)(async(e,t,o,s,n)=>{ne([]);const a=s.trim()||n.trim()?await r.e(643).then(r.t.bind(r,5643,23)):null;let i="";if(s.trim()&&a)try{const e=a.transform(s,{presets:[["typescript",{allExtensions:!0}]],filename:"script.ts"});i=e?.code??""}catch(e){return void ne([{kind:"error",text:`TypeScript: ${e.message}`,id:de.current++}])}let l="";if(n.trim()&&a)try{const e=a.transform(n,{presets:[["typescript",{allExtensions:!0,isTSX:!0}],["react",{runtime:"classic"}]],filename:"component.tsx"});l=e?.code??""}catch(e){return void ne([{kind:"error",text:`React: ${e.message}`,id:de.current++}])}W(H(e,t,o,i,l))},[]),$e=(0,o.useCallback)(async()=>{if(be&&ue.trim()&&!he){me(!0),ge("");try{const e=await async function(e,t,r){const o=r&&(r.html||r.css||r.js||r.react)?`Here is the current code:\n\`\`\`json\n${JSON.stringify(r,null,2)}\n\`\`\`\n\nUser request: ${t}\n\nModify the existing code based on the request. Keep what works, change what's asked.`:t,s=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"system",content:'You are a code generator. The user describes what they want and you return ONLY a JSON object with the code. No explanation, no markdown fences, no extra text — just the raw JSON.\n\nReturn format:\n{"html": "...", "css": "...", "js": "...", "react": "..."}\n\nRules:\n- html: the body content only (no <html>, <head>, <body> tags)\n- css: complete CSS\n- js: vanilla JavaScript (runs after HTML)\n- react: JSX code using React 18 loaded from a CDN (global React and ReactDOM). Do NOT use import statements. Destructure hooks from the global: const { useState, useEffect, useRef, useMemo, useCallback } = React; Always include the render call: const root = ReactDOM.createRoot(document.getElementById(\'root\')); root.render(<App />); The html field MUST contain <div id="root"></div> when react is used.\n- If a field is not needed, set it to ""\n- Use real newlines (\\n) in the code strings for readability — do NOT put everything on one line\n- Indent with 2 spaces\n- Return valid JSON only'},{role:"user",content:o}],stream:!1,max_tokens:4e3,temperature:.3}),signal:void 0});if(!s.ok){const e=await s.text();throw new Error(`Groq ${s.status}: ${e.slice(0,200)}`)}const n=await s.json(),a=(n.choices?.[0]?.message?.content?.trim()??"").match(/\{[\s\S]*\}/);if(!a)throw new Error("No valid JSON in response");const i=JSON.parse(a[0]),l=e=>e?e.includes("\n")?e:e.replace(/;\s*/g,";\n").replace(/\{\s*/g,"{\n  ").replace(/\}\s*/g,"\n}\n").replace(/,\s*\n\s*\n/g,",\n").trim():"";return{html:l(i.html??""),css:l(i.css??""),js:l(i.js??""),react:l(i.react??"")}}(be,ue,{html:t,css:n,js:c,react:X});s(e.html),a(e.css),j(e.js),G(e.react),J(""),ne([]),fe(""),e.react?(Q("react"),ye(e.html,e.css,e.js,"",e.react)):(Q("html"),ye(e.html,e.css,e.js,"",""))}catch(e){ge(e instanceof Error?e.message:String(e))}finally{me(!1)}}},[be,ue,he,ye,t,n,c,X]),je=(0,o.useCallback)(()=>ye(t,n,c,z,X),[t,n,c,z,X,ye]),ke=()=>{!ee&&re&&oe(!1),te(e=>!e)},ve=()=>{!re&&ee&&te(!1),oe(e=>!e)},Se="html"===Z?t:"css"===Z?n:"js"===Z?c:"ts"===Z?z:X,Ce="html"===Z?s:"css"===Z?a:"js"===Z?j:"ts"===Z?J:G,Re=(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(l.M7,{children:[(0,$.jsx)(l.$n,{variant:"ghost",onClick:()=>{s(""),a(""),j(""),J(""),G(""),ne([]),W(H("","","")),ce(null),(0,i.Is)(K,"")},title:"Clear all panels",children:"New"}),(0,$.jsx)(i.UO,{appId:"playground",onLoad:(e,t,r)=>{ce(t&&r?{id:t,name:r}:null);try{const{html:t,css:r,js:o,ts:n,react:i}=JSON.parse(e);s(t??""),a(r??""),j(o??""),J(n??""),G(i??""),W(H(t??"",r??"",o??"")),ne([])}catch{}}}),(0,$.jsx)(l.$n,{variant:"accent",icon:(0,$.jsx)(d.A,{size:13}),onClick:()=>ie(!0),children:"Save"}),(0,$.jsx)(l.$n,{variant:"success",icon:(0,$.jsx)(p.A,{size:13}),onClick:je,children:"Run"}),(0,$.jsx)(l.K0,{onClick:()=>ne([]),title:"Clear console",children:(0,$.jsx)(u.A,{size:13})}),(0,$.jsx)(l.ms,{trigger:(0,$.jsx)(l.$n,{variant:"ghost",iconRight:(0,$.jsx)(f.A,{size:12}),children:"Examples"}),children:w.k.map(e=>(0,$.jsx)(l.tJ,{onClick:()=>(e=>{const t=e.html,r=e.css,o=e.js,n=e.ts??"",i=e.react??"";s(t),a(r),j(o),J(n),G(i),ne([]),ye(t,r,o,n,i),Q(i?"react":n?"ts":"html")})(e),children:e.label},e.label))})]}),e]});return(0,$.jsxs)(i.PE,{title:"Playground",sidebar:(0,$.jsx)(i.tz,{activeAppId:"playground"}),topBarRight:Re,children:[ae&&(0,$.jsx)(i.MJ,{onSave:async e=>{ie(!1),await(0,i.KL)("playground",e,JSON.stringify({html:t,css:n,js:c,ts:z,react:X})),ce(null)},onUpdate:async()=>{le&&(ie(!1),await(0,i.mZ)(le.id,le.name,JSON.stringify({html:t,css:n,js:c,ts:z,react:X})))},existingDoc:le??void 0,onCancel:()=>ie(!1)}),we&&(0,$.jsxs)(v,{children:[(0,$.jsx)(h.A,{size:14,style:{color:i.w4.colors.accent,flexShrink:0}}),(0,$.jsx)(S,{placeholder:"Describe what you want to build…",value:ue,onChange:e=>fe(e.target.value),onKeyDown:e=>{"Enter"!==e.key||he||$e()}}),xe&&(0,$.jsx)(R,{title:xe,children:xe}),(0,$.jsxs)(C,{disabled:he||!ue.trim(),onClick:$e,children:[he?(0,$.jsx)(k,{size:14}):(0,$.jsx)(h.A,{size:14}),he?"Generating…":"Generate"]})]}),(0,$.jsxs)(T,{children:[ee?(0,$.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,$.jsxs)(O,{onClick:ke,title:"Show editors",children:[(0,$.jsx)(m.A,{size:14}),(0,$.jsx)(E,{children:"Editor"})]})}):(0,$.jsxs)(B,{collapsed:!1,children:[(0,$.jsxs)(N,{children:[["html","css","js","ts","react"].map(e=>(0,$.jsxs)(M,{lang:e,active:Z===e,onClick:()=>Q(e),children:[(0,$.jsx)(A,{lang:e}),"react"===e?"React":e.toUpperCase()]},e)),(0,$.jsx)(D,{onClick:ke,title:"Collapse editors",children:(0,$.jsx)(x.A,{size:14})})]}),(0,$.jsx)(y.A,{lang:Z,value:Se,onChange:Ce},Z)]}),re?(0,$.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,$.jsxs)(F,{onClick:ve,title:"Show preview",children:[(0,$.jsx)(g.A,{size:14}),(0,$.jsx)(E,{children:"Preview"})]})}):(0,$.jsxs)(I,{collapsed:!1,children:[(0,$.jsxs)(L,{children:[(0,$.jsx)(P,{children:"Preview"}),(0,$.jsx)(D,{onClick:ve,title:"Collapse preview",children:(0,$.jsx)(b.A,{size:14})})]}),(0,$.jsx)(U,{children:(0,$.jsx)(q,{srcDoc:V,sandbox:"allow-scripts",title:"preview"},V)}),se.length>0&&(0,$.jsx)(Y,{children:se.map(e=>(0,$.jsxs)(_,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}const G=document.getElementById("root");if(!G)throw new Error("Root element #root not found");(0,s.H)(G).render((0,$.jsx)(X,{}))},8997(e,t,r){var o=r(8991);t.H=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=807.66006b43d353d171beab.js.map