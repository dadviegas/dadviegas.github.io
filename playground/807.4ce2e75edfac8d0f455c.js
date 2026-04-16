"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([[807],{188(e,r,t){var o=t(7359),n=t(8997),s=t(3233),i=t(5723),a=t(6480),l=t(6135),d=t(9421),c=t(679),p=t(1530),f=t(5496),u=t(9881),x=t(3045),g=t(9336),h=t(7293),m=t(8104);const b=`\n  &::-webkit-scrollbar { width: 6px; height: 6px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb { background: ${i.w4.colors.border}; border-radius: 3px; }\n  &::-webkit-scrollbar-thumb:hover { background: ${i.w4.colors.mainTextMuted}; }\n  scrollbar-width: thin;\n  scrollbar-color: ${i.w4.colors.border} transparent;\n`,w=s.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${i.w4.colors.mainBg};
  font-family: ${i.w4.typography.fontFamily};
  color: ${i.w4.colors.mainText};
  overflow: hidden;
`,$=s.default.header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding-left: max(${i.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${i.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${i.w4.spacing.sm};
`,y=s.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${i.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${i.w4.colors.accent}; }
`,k=s.default.span`
  color: ${i.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,v=s.default.div`
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,j=s.default.span`
  font-weight: 400;
  color: ${i.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,S=s.default.div`flex: 1;`,z=s.default.button`display:flex;align-items:center;gap:6px;padding:0 ${i.w4.spacing.sm};height:30px;background:none;border:1px solid ${i.w4.colors.accent};border-radius:${i.w4.borderRadius.sm};color:${i.w4.colors.accent};font-size:12px;font-family:${i.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,C=s.default.button`
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
`,T=s.default.button`
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
`,B=s.default.button`
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
`,R=s.default.div`position: relative;`,E=s.default.div`
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
`,M=s.default.button`
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
`,F=s.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,A=s.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${i.w4.colors.sidebarBorder};
  background: ${i.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,L=s.default.button`
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
`,J=s.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${i.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,O=s.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,N={html:"#f97316",css:"#38bdf8",js:"#facc15",ts:"#3b82f6",react:"#61dafb"},H=s.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 ${i.w4.spacing.md};
  height: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?N[e.lang]??"#facc15":"transparent"};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: ${i.w4.typography.fontFamily};
  color: ${e=>e.active?N[e.lang]??"#facc15":i.w4.colors.sidebarTextMuted};
  transition: color 0.12s, border-color 0.12s;
  &:hover { color: ${e=>N[e.lang]??"#facc15"}; }
`,P=s.default.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>N[e.lang]??"#facc15"};
`,U=s.default.button`
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
`,_=s.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  background: #fff;
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,D=s.default.button`
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
`,X=s.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding: 0 ${i.w4.spacing.md};
  flex-shrink: 0;
`,Y=s.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  flex: 1;
`,I=s.default.div`
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
  ${b}
`,q=s.default.div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function G(e,r,t,o="",n=""){return`<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<style>*, *::before, *::after { box-sizing: border-box; }\n${r}\n</style>\n${n?'\n<script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>':""}\n</head>\n<body>\n${e}\n<script>\n(function() {\n  const send = (kind, args) => {\n    window.parent.postMessage({ type: 'console', kind, text: args.map(a => {\n      try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch { return String(a); }\n    }).join(' ') }, '*');\n  };\n  ['log','warn','error'].forEach(m => {\n    const orig = console[m].bind(console);\n    console[m] = (...args) => { orig(...args); send(m, args); };\n  });\n  window.addEventListener('error', e => send('error', [e.message + ' (' + e.filename + ':' + e.lineno + ')']));\n})();\n<\/script>\n<script>${t}<\/script>\n${o?`<script>${o}<\/script>`:""}\n${n?`<script>${n}<\/script>`:""}\n</body>\n</html>`}function Q({topBarRight:e}){const r=g.k[0],[n,s]=(0,o.useState)(r.html),[b,N]=(0,o.useState)(r.css),[Q,V]=(0,o.useState)(r.js),[W,ee]=(0,o.useState)(r.ts??""),[re,te]=(0,o.useState)(r.react??""),[oe,ne]=(0,o.useState)("html"),[se,ie]=(0,o.useState)(()=>G(r.html,r.css,r.js)),[ae,le]=(0,o.useState)(!1),[de,ce]=(0,o.useState)(!1),[pe,fe]=(0,o.useState)([]),[ue,xe]=(0,o.useState)(!1),[ge,he]=(0,o.useState)(!1),[me,be]=(0,o.useState)(null),we=(0,o.useRef)(null),$e=(0,o.useRef)(0);(0,o.useEffect)(()=>{const e=e=>{we.current&&!we.current.contains(e.target)&&xe(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,o.useEffect)(()=>{const e=e=>{"console"===e.data?.type&&fe(r=>[...r.slice(-49),{kind:e.data.kind,text:e.data.text,id:$e.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);const ye=(0,o.useCallback)(async(e,r,o,n,s)=>{fe([]);const i=n.trim()||s.trim()?await t.e(643).then(t.t.bind(t,5643,23)):null;let a="";if(n.trim()&&i)try{const e=i.transform(n,{presets:[["typescript",{allExtensions:!0}]],filename:"script.ts"});a=e?.code??""}catch(e){return void fe([{kind:"error",text:`TypeScript: ${e.message}`,id:$e.current++}])}let l="";if(s.trim()&&i)try{const e=i.transform(s,{presets:[["typescript",{allExtensions:!0,isTSX:!0}],["react",{runtime:"classic"}]],filename:"component.tsx"});l=e?.code??""}catch(e){return void fe([{kind:"error",text:`React: ${e.message}`,id:$e.current++}])}ie(G(e,r,o,a,l))},[]),ke=(0,o.useCallback)(()=>ye(n,b,Q,W,re),[n,b,Q,W,re,ye]),ve=()=>{!ae&&de&&ce(!1),le(e=>!e)},je=()=>{!de&&ae&&le(!1),ce(e=>!e)},Se="html"===oe?n:"css"===oe?b:"js"===oe?Q:"ts"===oe?W:re,ze="html"===oe?s:"css"===oe?N:"js"===oe?V:"ts"===oe?ee:te;return(0,m.jsxs)(w,{children:[(0,m.jsxs)($,{children:[(0,m.jsxs)(y,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,m.jsx)("span",{children:"antis"})]}),(0,m.jsx)(k,{children:"/"}),(0,m.jsxs)(v,{children:["Playground",(0,m.jsx)(j,{children:"HTML · CSS · JS · TS · React"})]}),(0,m.jsx)(S,{}),(0,m.jsx)(B,{onClick:()=>{s(""),N(""),V(""),ee(""),te(""),fe([]),ie(G("","",""))},title:"Clear all panels",children:"New"}),(0,m.jsx)(i.UO,{appId:"playground",onLoad:(e,r,t)=>{be(r&&t?{id:r,name:t}:null);try{const{html:r,css:t,js:o,ts:n,react:i}=JSON.parse(e);s(r??""),N(t??""),V(o??""),ee(n??""),te(i??""),ie(G(r??"",t??"",o??"")),fe([])}catch{}}}),(0,m.jsxs)(z,{onClick:()=>he(!0),children:[(0,m.jsx)(a.A,{size:13})," Save"]}),(0,m.jsxs)(C,{onClick:ke,children:[(0,m.jsx)(l.A,{size:13})," Run"]}),(0,m.jsx)(T,{onClick:()=>fe([]),title:"Clear console",children:(0,m.jsx)(d.A,{size:13})}),(0,m.jsxs)(R,{ref:we,children:[(0,m.jsxs)(B,{onClick:()=>xe(e=>!e),children:["Examples ",(0,m.jsx)(c.A,{size:12})]}),ue&&(0,m.jsx)(E,{children:g.k.map(e=>(0,m.jsx)(M,{onClick:()=>(e=>{const r=e.html,t=e.css,o=e.js,n=e.ts??"",i=e.react??"";s(r),N(t),V(o),ee(n),te(i),fe([]),ye(r,t,o,n,i),ne(i?"react":n?"ts":"html"),xe(!1)})(e),children:e.label},e.label))})]}),e]}),ge&&(0,m.jsx)(i.MJ,{onSave:async e=>{he(!1),await(0,i.KL)("playground",e,JSON.stringify({html:n,css:b,js:Q,ts:W,react:re})),be(null)},onUpdate:async()=>{me&&(he(!1),await(0,i.mZ)(me.id,me.name,JSON.stringify({html:n,css:b,js:Q,ts:W,react:re})))},existingDoc:me??void 0,onCancel:()=>he(!1)}),(0,m.jsxs)(F,{children:[ae?(0,m.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,m.jsxs)(L,{onClick:ve,title:"Show editors",children:[(0,m.jsx)(p.A,{size:14}),(0,m.jsx)(J,{children:"Editor"})]})}):(0,m.jsxs)(A,{collapsed:!1,children:[(0,m.jsxs)(O,{children:[["html","css","js","ts","react"].map(e=>(0,m.jsxs)(H,{lang:e,active:oe===e,onClick:()=>ne(e),children:[(0,m.jsx)(P,{lang:e}),"react"===e?"React":e.toUpperCase()]},e)),(0,m.jsx)(U,{onClick:ve,title:"Collapse editors",children:(0,m.jsx)(f.A,{size:14})})]}),(0,m.jsx)(h.A,{lang:oe,value:Se,onChange:ze},oe)]}),de?(0,m.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,m.jsxs)(D,{onClick:je,title:"Show preview",children:[(0,m.jsx)(u.A,{size:14}),(0,m.jsx)(J,{children:"Preview"})]})}):(0,m.jsxs)(_,{collapsed:!1,children:[(0,m.jsxs)(X,{children:[(0,m.jsx)(Y,{children:"Preview"}),(0,m.jsx)(U,{onClick:je,title:"Collapse preview",children:(0,m.jsx)(x.A,{size:14})})]}),(0,m.jsx)(I,{children:(0,m.jsx)(K,{srcDoc:se,sandbox:"allow-scripts",title:"preview"},se)}),pe.length>0&&(0,m.jsx)(Z,{children:pe.map(e=>(0,m.jsxs)(q,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}const V=document.getElementById("root");if(!V)throw new Error("Root element #root not found");(0,n.H)(V).render((0,m.jsx)(Q,{}))},8997(e,r,t){var o=t(8991);r.H=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=807.4ce2e75edfac8d0f455c.js.map