"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([[807],{188(e,r,o){var t=o(7359),n=o(8997),s=o(3233),i=o(5723),a=o(6480),l=o(6135),d=o(9421),c=o(679),p=o(1530),u=o(5496),f=o(9881),x=o(3045),g=o(9336),h=o(7293),b=o(8104);const m=`\n  &::-webkit-scrollbar { width: 6px; height: 6px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb { background: ${i.w4.colors.border}; border-radius: 3px; }\n  &::-webkit-scrollbar-thumb:hover { background: ${i.w4.colors.mainTextMuted}; }\n  scrollbar-width: thin;\n  scrollbar-color: ${i.w4.colors.border} transparent;\n`,w=s.default.div`
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
  height: 48px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding: 0 ${i.w4.spacing.lg};
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
  ${m}
`,q=s.default.div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function G(e,r,o,t="",n=""){return`<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<style>*, *::before, *::after { box-sizing: border-box; }\n${r}\n</style>\n${n?'\n<script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>':""}\n</head>\n<body>\n${e}\n<script>\n(function() {\n  const send = (kind, args) => {\n    window.parent.postMessage({ type: 'console', kind, text: args.map(a => {\n      try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch { return String(a); }\n    }).join(' ') }, '*');\n  };\n  ['log','warn','error'].forEach(m => {\n    const orig = console[m].bind(console);\n    console[m] = (...args) => { orig(...args); send(m, args); };\n  });\n  window.addEventListener('error', e => send('error', [e.message + ' (' + e.filename + ':' + e.lineno + ')']));\n})();\n<\/script>\n<script>${o}<\/script>\n${t?`<script>${t}<\/script>`:""}\n${n?`<script>${n}<\/script>`:""}\n</body>\n</html>`}function Q({topBarRight:e}){const r=g.k[0],[n,s]=(0,t.useState)(r.html),[m,N]=(0,t.useState)(r.css),[Q,V]=(0,t.useState)(r.js),[W,ee]=(0,t.useState)(r.ts??""),[re,oe]=(0,t.useState)(r.react??""),[te,ne]=(0,t.useState)("html"),[se,ie]=(0,t.useState)(()=>G(r.html,r.css,r.js)),[ae,le]=(0,t.useState)(!1),[de,ce]=(0,t.useState)(!1),[pe,ue]=(0,t.useState)([]),[fe,xe]=(0,t.useState)(!1),[ge,he]=(0,t.useState)(!1),[be,me]=(0,t.useState)(null),we=(0,t.useRef)(null),$e=(0,t.useRef)(0);(0,t.useEffect)(()=>{const e=e=>{we.current&&!we.current.contains(e.target)&&xe(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,t.useEffect)(()=>{const e=e=>{"console"===e.data?.type&&ue(r=>[...r.slice(-49),{kind:e.data.kind,text:e.data.text,id:$e.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);const ye=(0,t.useCallback)(async(e,r,t,n,s)=>{ue([]);const i=n.trim()||s.trim()?await o.e(643).then(o.t.bind(o,5643,23)):null;let a="";if(n.trim()&&i)try{const e=i.transform(n,{presets:[["typescript",{allExtensions:!0}]],filename:"script.ts"});a=e?.code??""}catch(e){return void ue([{kind:"error",text:`TypeScript: ${e.message}`,id:$e.current++}])}let l="";if(s.trim()&&i)try{const e=i.transform(s,{presets:[["typescript",{allExtensions:!0,isTSX:!0}],["react",{runtime:"classic"}]],filename:"component.tsx"});l=e?.code??""}catch(e){return void ue([{kind:"error",text:`React: ${e.message}`,id:$e.current++}])}ie(G(e,r,t,a,l))},[]),ke=(0,t.useCallback)(()=>ye(n,m,Q,W,re),[n,m,Q,W,re,ye]),ve=()=>{!ae&&de&&ce(!1),le(e=>!e)},je=()=>{!de&&ae&&le(!1),ce(e=>!e)},Se="html"===te?n:"css"===te?m:"js"===te?Q:"ts"===te?W:re,ze="html"===te?s:"css"===te?N:"js"===te?V:"ts"===te?ee:oe;return(0,b.jsxs)(w,{children:[(0,b.jsxs)($,{children:[(0,b.jsxs)(y,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,b.jsx)("span",{children:"antis"})]}),(0,b.jsx)(k,{children:"/"}),(0,b.jsxs)(v,{children:["Playground",(0,b.jsx)(j,{children:"HTML · CSS · JS · TS · React"})]}),(0,b.jsx)(S,{}),(0,b.jsx)(B,{onClick:()=>{s(""),N(""),V(""),ee(""),oe(""),ue([]),ie(G("","",""))},title:"Clear all panels",children:"New"}),(0,b.jsx)(i.UO,{appId:"playground",onLoad:(e,r,o)=>{me(r&&o?{id:r,name:o}:null);try{const{html:r,css:o,js:t,ts:n,react:i}=JSON.parse(e);s(r??""),N(o??""),V(t??""),ee(n??""),oe(i??""),ie(G(r??"",o??"",t??"")),ue([])}catch{}}}),(0,b.jsxs)(z,{onClick:()=>he(!0),children:[(0,b.jsx)(a.A,{size:13})," Save"]}),(0,b.jsxs)(C,{onClick:ke,children:[(0,b.jsx)(l.A,{size:13})," Run"]}),(0,b.jsx)(T,{onClick:()=>ue([]),title:"Clear console",children:(0,b.jsx)(d.A,{size:13})}),(0,b.jsxs)(R,{ref:we,children:[(0,b.jsxs)(B,{onClick:()=>xe(e=>!e),children:["Examples ",(0,b.jsx)(c.A,{size:12})]}),fe&&(0,b.jsx)(E,{children:g.k.map(e=>(0,b.jsx)(M,{onClick:()=>(e=>{const r=e.html,o=e.css,t=e.js,n=e.ts??"",i=e.react??"";s(r),N(o),V(t),ee(n),oe(i),ue([]),ye(r,o,t,n,i),ne(i?"react":n?"ts":"html"),xe(!1)})(e),children:e.label},e.label))})]}),e]}),ge&&(0,b.jsx)(i.MJ,{onSave:async e=>{he(!1),await(0,i.KL)("playground",e,JSON.stringify({html:n,css:m,js:Q,ts:W,react:re})),me(null)},onUpdate:async()=>{be&&(he(!1),await(0,i.mZ)(be.id,be.name,JSON.stringify({html:n,css:m,js:Q,ts:W,react:re})))},existingDoc:be??void 0,onCancel:()=>he(!1)}),(0,b.jsxs)(F,{children:[ae?(0,b.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,b.jsxs)(L,{onClick:ve,title:"Show editors",children:[(0,b.jsx)(p.A,{size:14}),(0,b.jsx)(J,{children:"Editor"})]})}):(0,b.jsxs)(A,{collapsed:!1,children:[(0,b.jsxs)(O,{children:[["html","css","js","ts","react"].map(e=>(0,b.jsxs)(H,{lang:e,active:te===e,onClick:()=>ne(e),children:[(0,b.jsx)(P,{lang:e}),"react"===e?"React":e.toUpperCase()]},e)),(0,b.jsx)(U,{onClick:ve,title:"Collapse editors",children:(0,b.jsx)(u.A,{size:14})})]}),(0,b.jsx)(h.A,{lang:te,value:Se,onChange:ze},te)]}),de?(0,b.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,b.jsxs)(D,{onClick:je,title:"Show preview",children:[(0,b.jsx)(f.A,{size:14}),(0,b.jsx)(J,{children:"Preview"})]})}):(0,b.jsxs)(_,{collapsed:!1,children:[(0,b.jsxs)(X,{children:[(0,b.jsx)(Y,{children:"Preview"}),(0,b.jsx)(U,{onClick:je,title:"Collapse preview",children:(0,b.jsx)(x.A,{size:14})})]}),(0,b.jsx)(I,{children:(0,b.jsx)(K,{srcDoc:se,sandbox:"allow-scripts",title:"preview"},se)}),pe.length>0&&(0,b.jsx)(Z,{children:pe.map(e=>(0,b.jsxs)(q,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}const V=document.getElementById("root");if(!V)throw new Error("Root element #root not found");(0,n.H)(V).render((0,b.jsx)(Q,{}))},8997(e,r,o){var t=o(8991);r.H=t.createRoot,t.hydrateRoot}}]);
//# sourceMappingURL=807.343c7a26b196f22fcb36.js.map