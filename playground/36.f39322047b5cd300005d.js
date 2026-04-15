"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([[36],{6036(e,r,o){o.r(r),o.d(r,{default:()=>G});var t=o(7359),n=o(3233),s=o(4191),i=o(5496),a=o(1530),l=o(679),d=o(3045),c=o(9881),p=o(6135),u=o(9421),f=o(6480),x=o(9336),g=o(7293),h=o(5723);const b=`\n  &::-webkit-scrollbar { width: 6px; height: 6px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb { background: ${s.w4.colors.border}; border-radius: 3px; }\n  &::-webkit-scrollbar-thumb:hover { background: ${s.w4.colors.mainTextMuted}; }\n  scrollbar-width: thin;\n  scrollbar-color: ${s.w4.colors.border} transparent;\n`,m=n.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${s.w4.colors.mainBg};
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainText};
  overflow: hidden;
`,w=n.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  padding: 0 ${s.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${s.w4.spacing.sm};
`,$=n.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${s.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${s.w4.colors.accent}; }
`,y=n.default.span`
  color: ${s.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,k=n.default.div`
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${s.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,v=n.default.span`
  font-weight: 400;
  color: ${s.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,j=n.default.div`flex: 1;`,S=n.default.button`display:flex;align-items:center;gap:6px;padding:0 ${s.w4.spacing.sm};height:30px;background:none;border:1px solid ${s.w4.colors.accent};border-radius:${s.w4.borderRadius.sm};color:${s.w4.colors.accent};font-size:12px;font-family:${s.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,z=n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 ${s.w4.spacing.md};
  height: 32px;
  background: #238636;
  border: 1px solid #2ea043;
  border-radius: ${s.w4.borderRadius.sm};
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s;
  &:hover { background: #2ea043; }
  &:active { transform: scale(0.97); }
`,C=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: all 0.15s;
  &:hover { border-color: ${s.w4.colors.accent}; color: ${s.w4.colors.mainText}; }
`,T=n.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${s.w4.spacing.sm};
  height: 30px;
  background: transparent;
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${s.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;
  &:hover { border-color: ${s.w4.colors.accent}; color: ${s.w4.colors.mainText}; }
`,B=n.default.div`position: relative;`,R=n.default.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0,0,0,0.5);
  z-index: 200;
  min-width: 200px;
  overflow: hidden;
`,E=n.default.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  background: transparent;
  border: none;
  color: ${s.w4.colors.mainText};
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  &:hover { background: ${s.w4.colors.mainBg}; }
`,M=n.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,F=n.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${s.w4.colors.sidebarBorder};
  background: ${s.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,A=n.default.button`
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
  background: ${s.w4.colors.sidebarBg};
  border: 1px solid ${s.w4.colors.sidebarBorder};
  border-left: none;
  border-radius: 0 ${s.w4.borderRadius.md} ${s.w4.borderRadius.md} 0;
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  z-index: 10;
  &:hover { background: ${s.w4.colors.sidebarBorder}; color: ${s.w4.colors.mainText}; }
`,L=n.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${s.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,J=n.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,O={html:"#f97316",css:"#38bdf8",js:"#facc15",ts:"#3b82f6",react:"#61dafb"},N=n.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 ${s.w4.spacing.md};
  height: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?O[e.lang]??"#facc15":"transparent"};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: ${s.w4.typography.fontFamily};
  color: ${e=>e.active?O[e.lang]??"#facc15":s.w4.colors.sidebarTextMuted};
  transition: color 0.12s, border-color 0.12s;
  &:hover { color: ${e=>O[e.lang]??"#facc15"}; }
`,P=n.default.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>O[e.lang]??"#facc15"};
`,U=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  margin-left: auto;
  margin-right: 6px;
  transition: background 0.12s, color 0.12s;
  &:hover { background: ${s.w4.colors.sidebarBorder}; color: ${s.w4.colors.mainText}; }
`,_=n.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  background: #fff;
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,D=n.default.button`
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
  background: ${s.w4.colors.sidebarBg};
  border: 1px solid ${s.w4.colors.sidebarBorder};
  border-right: none;
  border-radius: ${s.w4.borderRadius.md} 0 0 ${s.w4.borderRadius.md};
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  z-index: 10;
  &:hover { background: ${s.w4.colors.sidebarBorder}; color: ${s.w4.colors.mainText}; }
`,X=n.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  padding: 0 ${s.w4.spacing.md};
  flex-shrink: 0;
`,Y=n.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  flex: 1;
`,H=n.default.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,I=n.default.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
`,K=n.default.div`
  max-height: 110px;
  overflow-y: auto;
  background: ${s.w4.colors.mainBg};
  border-top: 1px solid ${s.w4.colors.sidebarBorder};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12px;
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
  ${b}
`,Z=n.default.div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function q(e,r,o,t="",n=""){return`<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<style>*, *::before, *::after { box-sizing: border-box; }\n${r}\n</style>\n${n?'\n<script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>':""}\n</head>\n<body>\n${e}\n<script>\n(function() {\n  const send = (kind, args) => {\n    window.parent.postMessage({ type: 'console', kind, text: args.map(a => {\n      try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch { return String(a); }\n    }).join(' ') }, '*');\n  };\n  ['log','warn','error'].forEach(m => {\n    const orig = console[m].bind(console);\n    console[m] = (...args) => { orig(...args); send(m, args); };\n  });\n  window.addEventListener('error', e => send('error', [e.message + ' (' + e.filename + ':' + e.lineno + ')']));\n})();\n<\/script>\n<script>${o}<\/script>\n${t?`<script>${t}<\/script>`:""}\n${n?`<script>${n}<\/script>`:""}\n</body>\n</html>`}function G({topBarRight:e}){const r=x.k[0],[n,b]=(0,t.useState)(r.html),[O,G]=(0,t.useState)(r.css),[Q,V]=(0,t.useState)(r.js),[W,ee]=(0,t.useState)(r.ts??""),[re,oe]=(0,t.useState)(r.react??""),[te,ne]=(0,t.useState)("html"),[se,ie]=(0,t.useState)(()=>q(r.html,r.css,r.js)),[ae,le]=(0,t.useState)(!1),[de,ce]=(0,t.useState)(!1),[pe,ue]=(0,t.useState)([]),[fe,xe]=(0,t.useState)(!1),[ge,he]=(0,t.useState)(!1),[be,me]=(0,t.useState)(null),we=(0,t.useRef)(null),$e=(0,t.useRef)(0);(0,t.useEffect)(()=>{const e=e=>{we.current&&!we.current.contains(e.target)&&xe(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,t.useEffect)(()=>{const e=e=>{"console"===e.data?.type&&ue(r=>[...r.slice(-49),{kind:e.data.kind,text:e.data.text,id:$e.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);const ye=(0,t.useCallback)(async(e,r,t,n,s)=>{ue([]);const i=n.trim()||s.trim()?await o.e(643).then(o.t.bind(o,5643,23)):null;let a="";if(n.trim()&&i)try{const e=i.transform(n,{presets:[["typescript",{allExtensions:!0}]],filename:"script.ts"});a=e?.code??""}catch(e){return void ue([{kind:"error",text:`TypeScript: ${e.message}`,id:$e.current++}])}let l="";if(s.trim()&&i)try{const e=i.transform(s,{presets:[["typescript",{allExtensions:!0,isTSX:!0}],["react",{runtime:"classic"}]],filename:"component.tsx"});l=e?.code??""}catch(e){return void ue([{kind:"error",text:`React: ${e.message}`,id:$e.current++}])}ie(q(e,r,t,a,l))},[]),ke=(0,t.useCallback)(()=>ye(n,O,Q,W,re),[n,O,Q,W,re,ye]),ve=()=>{!ae&&de&&ce(!1),le(e=>!e)},je=()=>{!de&&ae&&le(!1),ce(e=>!e)},Se="html"===te?n:"css"===te?O:"js"===te?Q:"ts"===te?W:re,ze="html"===te?b:"css"===te?G:"js"===te?V:"ts"===te?ee:oe;return(0,h.jsxs)(m,{children:[(0,h.jsxs)(w,{children:[(0,h.jsxs)($,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,h.jsx)("span",{children:"antis"})]}),(0,h.jsx)(y,{children:"/"}),(0,h.jsxs)(k,{children:["Playground",(0,h.jsx)(v,{children:"HTML · CSS · JS · TS · React"})]}),(0,h.jsx)(j,{}),(0,h.jsx)(T,{onClick:()=>{b(""),G(""),V(""),ee(""),oe(""),ue([]),ie(q("","",""))},title:"Clear all panels",children:"New"}),(0,h.jsx)(s.UO,{appId:"playground",onLoad:(e,r,o)=>{me(r&&o?{id:r,name:o}:null);try{const{html:r,css:o,js:t,ts:n,react:s}=JSON.parse(e);b(r??""),G(o??""),V(t??""),ee(n??""),oe(s??""),ie(q(r??"",o??"",t??"")),ue([])}catch{}}}),(0,h.jsxs)(S,{onClick:()=>he(!0),children:[(0,h.jsx)(f.A,{size:13})," Save"]}),(0,h.jsxs)(z,{onClick:ke,children:[(0,h.jsx)(p.A,{size:13})," Run"]}),(0,h.jsx)(C,{onClick:()=>ue([]),title:"Clear console",children:(0,h.jsx)(u.A,{size:13})}),(0,h.jsxs)(B,{ref:we,children:[(0,h.jsxs)(T,{onClick:()=>xe(e=>!e),children:["Examples ",(0,h.jsx)(l.A,{size:12})]}),fe&&(0,h.jsx)(R,{children:x.k.map(e=>(0,h.jsx)(E,{onClick:()=>(e=>{const r=e.html,o=e.css,t=e.js,n=e.ts??"",s=e.react??"";b(r),G(o),V(t),ee(n),oe(s),ue([]),ye(r,o,t,n,s),ne(s?"react":n?"ts":"html"),xe(!1)})(e),children:e.label},e.label))})]}),e]}),ge&&(0,h.jsx)(s.MJ,{onSave:async e=>{he(!1),await(0,s.KL)("playground",e,JSON.stringify({html:n,css:O,js:Q,ts:W,react:re})),me(null)},onUpdate:async()=>{be&&(he(!1),await(0,s.mZ)(be.id,be.name,JSON.stringify({html:n,css:O,js:Q,ts:W,react:re})))},existingDoc:be??void 0,onCancel:()=>he(!1)}),(0,h.jsxs)(M,{children:[ae?(0,h.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,h.jsxs)(A,{onClick:ve,title:"Show editors",children:[(0,h.jsx)(a.A,{size:14}),(0,h.jsx)(L,{children:"Editor"})]})}):(0,h.jsxs)(F,{collapsed:!1,children:[(0,h.jsxs)(J,{children:[["html","css","js","ts","react"].map(e=>(0,h.jsxs)(N,{lang:e,active:te===e,onClick:()=>ne(e),children:[(0,h.jsx)(P,{lang:e}),"react"===e?"React":e.toUpperCase()]},e)),(0,h.jsx)(U,{onClick:ve,title:"Collapse editors",children:(0,h.jsx)(i.A,{size:14})})]}),(0,h.jsx)(g.A,{lang:te,value:Se,onChange:ze},te)]}),de?(0,h.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,h.jsxs)(D,{onClick:je,title:"Show preview",children:[(0,h.jsx)(c.A,{size:14}),(0,h.jsx)(L,{children:"Preview"})]})}):(0,h.jsxs)(_,{collapsed:!1,children:[(0,h.jsxs)(X,{children:[(0,h.jsx)(Y,{children:"Preview"}),(0,h.jsx)(U,{onClick:je,title:"Collapse preview",children:(0,h.jsx)(d.A,{size:14})})]}),(0,h.jsx)(H,{children:(0,h.jsx)(I,{srcDoc:se,sandbox:"allow-scripts",title:"preview"},se)}),pe.length>0&&(0,h.jsx)(K,{children:pe.map(e=>(0,h.jsxs)(Z,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}}}]);
//# sourceMappingURL=36.f39322047b5cd300005d.js.map