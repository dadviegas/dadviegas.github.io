"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([[36],{6036(e,t,r){r.r(t),r.d(t,{default:()=>X});var s=r(7359),o=r(3233),n=r(7207),a=r(458),i=r(9359),l=r(7071),c=r(5496),d=r(1530),p=r(3482),u=r(679),f=r(5426),h=r(9881),m=r(6135),x=r(9421),g=r(6480),b=r(9336),w=r(7293),y=r(5723);const $=n.keyframes`from{transform:rotate(0deg)}to{transform:rotate(360deg)}`,j=(0,o.default)(l.A)`animation: ${$} 1s linear infinite;`,k=o.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  padding: 6px ${a.w4.spacing.md};
  background: ${a.w4.colors.sidebarBg};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,v=o.default.input`
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
`,S=o.default.button`
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
`,C=o.default.span`
  font-size: 11px;
  color: #f87171;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`,z=`\n  &::-webkit-scrollbar { width: 6px; height: 6px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb { background: ${a.w4.colors.border}; border-radius: 3px; }\n  &::-webkit-scrollbar-thumb:hover { background: ${a.w4.colors.mainTextMuted}; }\n  scrollbar-width: thin;\n  scrollbar-color: ${a.w4.colors.border} transparent;\n`,T=o.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,R=o.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${a.w4.colors.sidebarBorder};
  background: ${a.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,B=o.default.button`
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
`,O=o.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${a.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,N=o.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${a.w4.colors.sidebarBg};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,E={html:"#f97316",css:"#38bdf8",js:"#facc15",ts:"#3b82f6",react:"#61dafb"},J=o.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 ${a.w4.spacing.md};
  height: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?E[e.lang]??"#facc15":"transparent"};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: ${a.w4.typography.fontFamily};
  color: ${e=>e.active?E[e.lang]??"#facc15":a.w4.colors.sidebarTextMuted};
  transition: color 0.12s, border-color 0.12s;
  &:hover { color: ${e=>E[e.lang]??"#facc15"}; }
`,M=o.default.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>E[e.lang]??"#facc15"};
`,A=o.default.button`
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
`,D=o.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  background: #fff;
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,F=o.default.button`
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
`,I=o.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${a.w4.colors.sidebarBg};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  padding: 0 ${a.w4.spacing.md};
  flex-shrink: 0;
`,L=o.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
  flex: 1;
`,P=o.default.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,U=o.default.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
`,q=o.default.div`
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
`,Y=o.default.div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function _(e,t,r,s="",o=""){return`<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<style>*, *::before, *::after { box-sizing: border-box; }\n${t}\n</style>\n${o?'\n<script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>':""}\n</head>\n<body>\n${e}\n<script>\n(function() {\n  const send = (kind, args) => {\n    window.parent.postMessage({ type: 'console', kind, text: args.map(a => {\n      try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch { return String(a); }\n    }).join(' ') }, '*');\n  };\n  ['log','warn','error'].forEach(m => {\n    const orig = console[m].bind(console);\n    console[m] = (...args) => { orig(...args); send(m, args); };\n  });\n  window.addEventListener('error', e => send('error', [e.message + ' (' + e.filename + ':' + e.lineno + ')']));\n})();\n<\/script>\n<script>${r}<\/script>\n${s?`<script>${s}<\/script>`:""}\n${o?`<script>${o}<\/script>`:""}\n</body>\n</html>`}const K="toolkit:playground";function X({topBarRight:e}){const[t,o]=(0,s.useState)(""),[n,l]=(0,s.useState)(""),[$,z]=(0,s.useState)(""),[E,X]=(0,s.useState)(""),[G,H]=(0,s.useState)(""),[Z,Q]=(0,s.useState)("html"),[V,W]=(0,s.useState)(()=>_("","","")),[ee,te]=(0,s.useState)(!1),[re,se]=(0,s.useState)(!1),[oe,ne]=(0,s.useState)([]),[ae,ie]=(0,s.useState)(!1),[le,ce]=(0,s.useState)(null),de=(0,s.useRef)(0),pe=(0,s.useRef)(!1);(0,s.useEffect)(()=>{(0,a.PL)(K).then(e=>{if(e)try{const t=JSON.parse(e);o(t.html??""),l(t.css??""),z(t.js??""),X(t.ts??""),H(t.react??""),W(_(t.html??"",t.css??"",t.js??""))}catch{}pe.current=!0})},[]),(0,s.useEffect)(()=>{if(!pe.current)return;const e=setTimeout(()=>(0,a.Is)(K,JSON.stringify({html:t,css:n,js:$,ts:E,react:G})),500);return()=>clearTimeout(e)},[t,n,$,E,G]);const[ue,fe]=(0,s.useState)(""),[he,me]=(0,s.useState)(!1),[xe,ge]=(0,s.useState)(""),be=function(){try{const e=localStorage.getItem("atlantis:promptlab:keys");return e?JSON.parse(e).groq??"":""}catch{return""}}(),we=Boolean(be);(0,s.useEffect)(()=>{const e=e=>{"console"===e.data?.type&&ne(t=>[...t.slice(-49),{kind:e.data.kind,text:e.data.text,id:de.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);const ye=(0,s.useCallback)(async(e,t,s,o,n)=>{ne([]);const a=o.trim()||n.trim()?await r.e(643).then(r.t.bind(r,5643,23)):null;let i="";if(o.trim()&&a)try{const e=a.transform(o,{presets:[["typescript",{allExtensions:!0}]],filename:"script.ts"});i=e?.code??""}catch(e){return void ne([{kind:"error",text:`TypeScript: ${e.message}`,id:de.current++}])}let l="";if(n.trim()&&a)try{const e=a.transform(n,{presets:[["typescript",{allExtensions:!0,isTSX:!0}],["react",{runtime:"classic"}]],filename:"component.tsx"});l=e?.code??""}catch(e){return void ne([{kind:"error",text:`React: ${e.message}`,id:de.current++}])}W(_(e,t,s,i,l))},[]),$e=(0,s.useCallback)(async()=>{if(be&&ue.trim()&&!he){me(!0),ge("");try{const e=await async function(e,t,r){const s=r&&(r.html||r.css||r.js||r.react)?`Here is the current code:\n\`\`\`json\n${JSON.stringify(r,null,2)}\n\`\`\`\n\nUser request: ${t}\n\nModify the existing code based on the request. Keep what works, change what's asked.`:t,o=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"system",content:'You are a code generator. The user describes what they want and you return ONLY a JSON object with the code. No explanation, no markdown fences, no extra text — just the raw JSON.\n\nReturn format:\n{"html": "...", "css": "...", "js": "...", "react": "..."}\n\nRules:\n- html: the body content only (no <html>, <head>, <body> tags)\n- css: complete CSS\n- js: vanilla JavaScript (runs after HTML)\n- react: JSX code using React 18 loaded from a CDN (global React and ReactDOM). Do NOT use import statements. Destructure hooks from the global: const { useState, useEffect, useRef, useMemo, useCallback } = React; Always include the render call: const root = ReactDOM.createRoot(document.getElementById(\'root\')); root.render(<App />); The html field MUST contain <div id="root"></div> when react is used.\n- If a field is not needed, set it to ""\n- Use real newlines (\\n) in the code strings for readability — do NOT put everything on one line\n- Indent with 2 spaces\n- Return valid JSON only'},{role:"user",content:s}],stream:!1,max_tokens:4e3,temperature:.3}),signal:void 0});if(!o.ok){const e=await o.text();throw new Error(`Groq ${o.status}: ${e.slice(0,200)}`)}const n=await o.json(),a=(n.choices?.[0]?.message?.content?.trim()??"").match(/\{[\s\S]*\}/);if(!a)throw new Error("No valid JSON in response");const i=JSON.parse(a[0]),l=e=>e?e.includes("\n")?e:e.replace(/;\s*/g,";\n").replace(/\{\s*/g,"{\n  ").replace(/\}\s*/g,"\n}\n").replace(/,\s*\n\s*\n/g,",\n").trim():"";return{html:l(i.html??""),css:l(i.css??""),js:l(i.js??""),react:l(i.react??"")}}(be,ue,{html:t,css:n,js:$,react:G});o(e.html),l(e.css),z(e.js),H(e.react),X(""),ne([]),fe(""),e.react?(Q("react"),ye(e.html,e.css,e.js,"",e.react)):(Q("html"),ye(e.html,e.css,e.js,"",""))}catch(e){ge(e instanceof Error?e.message:String(e))}finally{me(!1)}}},[be,ue,he,ye,t,n,$,G]),je=(0,s.useCallback)(()=>ye(t,n,$,E,G),[t,n,$,E,G,ye]),ke=()=>{!ee&&re&&se(!1),te(e=>!e)},ve=()=>{!re&&ee&&te(!1),se(e=>!e)},Se="html"===Z?t:"css"===Z?n:"js"===Z?$:"ts"===Z?E:G,Ce="html"===Z?o:"css"===Z?l:"js"===Z?z:"ts"===Z?X:H,ze=(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(i.M7,{children:[(0,y.jsx)(i.$n,{variant:"ghost",onClick:()=>{o(""),l(""),z(""),X(""),H(""),ne([]),W(_("","","")),ce(null),(0,a.Is)(K,"")},title:"Clear all panels",children:"New"}),(0,y.jsx)(a.UO,{appId:"playground",onLoad:(e,t,r)=>{ce(t&&r?{id:t,name:r}:null);try{const{html:t,css:r,js:s,ts:n,react:a}=JSON.parse(e);o(t??""),l(r??""),z(s??""),X(n??""),H(a??""),W(_(t??"",r??"",s??"")),ne([])}catch{}}}),(0,y.jsx)(i.$n,{variant:"accent",icon:(0,y.jsx)(g.A,{size:13}),onClick:()=>ie(!0),children:"Save"}),(0,y.jsx)(i.$n,{variant:"success",icon:(0,y.jsx)(m.A,{size:13}),onClick:je,children:"Run"}),(0,y.jsx)(i.K0,{onClick:()=>ne([]),title:"Clear console",children:(0,y.jsx)(x.A,{size:13})}),(0,y.jsx)(i.ms,{trigger:(0,y.jsx)(i.$n,{variant:"ghost",iconRight:(0,y.jsx)(u.A,{size:12}),children:"Examples"}),children:b.k.map(e=>(0,y.jsx)(i.tJ,{onClick:()=>(e=>{const t=e.html,r=e.css,s=e.js,n=e.ts??"",a=e.react??"";o(t),l(r),z(s),X(n),H(a),ne([]),ye(t,r,s,n,a),Q(a?"react":n?"ts":"html")})(e),children:e.label},e.label))})]}),e]});return(0,y.jsxs)(a.PE,{title:"Playground",sidebar:(0,y.jsx)(a.tz,{activeAppId:"playground"}),topBarRight:ze,children:[ae&&(0,y.jsx)(a.MJ,{onSave:async e=>{ie(!1),await(0,a.KL)("playground",e,JSON.stringify({html:t,css:n,js:$,ts:E,react:G})),ce(null)},onUpdate:async()=>{le&&(ie(!1),await(0,a.mZ)(le.id,le.name,JSON.stringify({html:t,css:n,js:$,ts:E,react:G})))},existingDoc:le??void 0,onCancel:()=>ie(!1)}),we&&(0,y.jsxs)(k,{children:[(0,y.jsx)(p.A,{size:14,style:{color:a.w4.colors.accent,flexShrink:0}}),(0,y.jsx)(v,{placeholder:"Describe what you want to build…",value:ue,onChange:e=>fe(e.target.value),onKeyDown:e=>{"Enter"!==e.key||he||$e()}}),xe&&(0,y.jsx)(C,{title:xe,children:xe}),(0,y.jsxs)(S,{disabled:he||!ue.trim(),onClick:$e,children:[he?(0,y.jsx)(j,{size:14}):(0,y.jsx)(p.A,{size:14}),he?"Generating…":"Generate"]})]}),(0,y.jsxs)(T,{children:[ee?(0,y.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,y.jsxs)(B,{onClick:ke,title:"Show editors",children:[(0,y.jsx)(d.A,{size:14}),(0,y.jsx)(O,{children:"Editor"})]})}):(0,y.jsxs)(R,{collapsed:!1,children:[(0,y.jsxs)(N,{children:[["html","css","js","ts","react"].map(e=>(0,y.jsxs)(J,{lang:e,active:Z===e,onClick:()=>Q(e),children:[(0,y.jsx)(M,{lang:e}),"react"===e?"React":e.toUpperCase()]},e)),(0,y.jsx)(A,{onClick:ke,title:"Collapse editors",children:(0,y.jsx)(c.A,{size:14})})]}),(0,y.jsx)(w.A,{lang:Z,value:Se,onChange:Ce},Z)]}),re?(0,y.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,y.jsxs)(F,{onClick:ve,title:"Show preview",children:[(0,y.jsx)(h.A,{size:14}),(0,y.jsx)(O,{children:"Preview"})]})}):(0,y.jsxs)(D,{collapsed:!1,children:[(0,y.jsxs)(I,{children:[(0,y.jsx)(L,{children:"Preview"}),(0,y.jsx)(A,{onClick:ve,title:"Collapse preview",children:(0,y.jsx)(f.A,{size:14})})]}),(0,y.jsx)(P,{children:(0,y.jsx)(U,{srcDoc:V,sandbox:"allow-scripts",title:"preview"},V)}),oe.length>0&&(0,y.jsx)(q,{children:oe.map(e=>(0,y.jsxs)(Y,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}}}]);
//# sourceMappingURL=36.4d90fbc6d0db9f35bd77.js.map