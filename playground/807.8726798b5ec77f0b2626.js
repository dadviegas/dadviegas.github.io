"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([[807],{188(e,o,r){var t=r(7359),n=r(8997),i=r(3233),s=r(4079),a=r(6480),l=r(6135),d=r(9421),c=r(679),p=r(1530),f=r(5496),u=r(9881),x=r(3045),g=r(9336),b=r(5723);const h=`\n  &::-webkit-scrollbar { width: 6px; height: 6px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb { background: ${s.w4.colors.border}; border-radius: 3px; }\n  &::-webkit-scrollbar-thumb:hover { background: ${s.w4.colors.mainTextMuted}; }\n  scrollbar-width: thin;\n  scrollbar-color: ${s.w4.colors.border} transparent;\n`,w=i.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${s.w4.colors.mainBg};
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainText};
  overflow: hidden;
`,m=i.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  padding: 0 ${s.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${s.w4.spacing.sm};
`,$=i.default.button`
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
`,y=i.default.span`
  color: ${s.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,k=i.default.div`
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${s.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,v=i.default.span`
  font-weight: 400;
  color: ${s.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,j=i.default.div`flex: 1;`,z=i.default.button`display:flex;align-items:center;gap:6px;padding:0 ${s.w4.spacing.sm};height:30px;background:none;border:1px solid ${s.w4.colors.accent};border-radius:${s.w4.borderRadius.sm};color:${s.w4.colors.accent};font-size:12px;font-family:${s.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,S=i.default.button`
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
`,T=i.default.button`
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
`,C=i.default.button`
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
`,B=i.default.div`position: relative;`,E=i.default.div`
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
`,R=i.default.button`
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
`,M=i.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,F=i.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${s.w4.colors.sidebarBorder};
  background: ${s.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,A=i.default.button`
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
`,L=i.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${s.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,O=i.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,D=i.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 ${s.w4.spacing.md};
  height: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?"html"===e.lang?"#f97316":"css"===e.lang?"#38bdf8":"#facc15":"transparent"};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: ${s.w4.typography.fontFamily};
  color: ${e=>e.active?"html"===e.lang?"#f97316":"css"===e.lang?"#38bdf8":"#facc15":s.w4.colors.sidebarTextMuted};
  transition: color 0.12s, border-color 0.12s;
  &:hover { color: ${e=>"html"===e.lang?"#f97316":"css"===e.lang?"#38bdf8":"#facc15"}; }
`,H=i.default.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>"html"===e.lang?"#f97316":"css"===e.lang?"#38bdf8":"#facc15"};
`,J=i.default.button`
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
`,P=i.default.textarea`
  flex: 1;
  width: 100%;
  background: ${s.w4.colors.mainBg};
  border: none;
  outline: none;
  padding: ${s.w4.spacing.lg};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${s.w4.colors.mainText};
  resize: none;
  line-height: 1.7;
  tab-size: 2;
  caret-color: ${s.w4.colors.accent};
  ${h}

  &::placeholder { color: ${s.w4.colors.sidebarTextMuted}; }
`,N=i.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  background: #fff;
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,_=i.default.button`
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
`,U=i.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  padding: 0 ${s.w4.spacing.md};
  flex-shrink: 0;
`,Y=i.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  flex: 1;
`,I=i.default.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,K=i.default.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
`,X=i.default.div`
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
  ${h}
`,q=i.default.div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function G(e,o,r){return`<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<style>*, *::before, *::after { box-sizing: border-box; }\n${o}\n</style>\n</head>\n<body>\n${e}\n<script>\n(function() {\n  const send = (kind, args) => {\n    window.parent.postMessage({ type: 'console', kind, text: args.map(a => {\n      try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch { return String(a); }\n    }).join(' ') }, '*');\n  };\n  ['log','warn','error'].forEach(m => {\n    const orig = console[m].bind(console);\n    console[m] = (...args) => { orig(...args); send(m, args); };\n  });\n  window.addEventListener('error', e => send('error', [e.message + ' (' + e.filename + ':' + e.lineno + ')']));\n})();\n<\/script>\n<script>${r}<\/script>\n</body>\n</html>`}function Q({topBarRight:e}){const o=g.k[0],[r,n]=(0,t.useState)(o.html),[i,h]=(0,t.useState)(o.css),[Q,V]=(0,t.useState)(o.js),[W,Z]=(0,t.useState)("html"),[ee,oe]=(0,t.useState)(()=>G(o.html,o.css,o.js)),[re,te]=(0,t.useState)(!1),[ne,ie]=(0,t.useState)(!1),[se,ae]=(0,t.useState)([]),[le,de]=(0,t.useState)(!1),[ce,pe]=(0,t.useState)(!1),[fe,ue]=(0,t.useState)(null),xe=(0,t.useRef)(null),ge=(0,t.useRef)(0);(0,t.useEffect)(()=>{const e=e=>{xe.current&&!xe.current.contains(e.target)&&de(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,t.useEffect)(()=>{const e=e=>{"console"===e.data?.type&&ae(o=>[...o.slice(-49),{kind:e.data.kind,text:e.data.text,id:ge.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);const be=(0,t.useCallback)(()=>{ae([]),oe(G(r,i,Q))},[r,i,Q]),he=()=>{!re&&ne&&ie(!1),te(e=>!e)},we=()=>{!ne&&re&&te(!1),ie(e=>!e)},me="html"===W?r:"css"===W?i:Q,$e="html"===W?n:"css"===W?h:V;return(0,b.jsxs)(w,{children:[(0,b.jsxs)(m,{children:[(0,b.jsxs)($,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,b.jsx)("span",{children:"antis"})]}),(0,b.jsx)(y,{children:"/"}),(0,b.jsxs)(k,{children:["Playground",(0,b.jsx)(v,{children:"HTML · CSS · JS"})]}),(0,b.jsx)(j,{}),(0,b.jsx)(C,{onClick:()=>{n(""),h(""),V(""),ae([]),oe(G("","",""))},title:"Clear all panels",children:"New"}),(0,b.jsx)(s.UO,{appId:"playground",onLoad:(e,o,r)=>{ue(o&&r?{id:o,name:r}:null);try{const{html:o,css:r,js:t}=JSON.parse(e);n(o??""),h(r??""),V(t??""),oe(G(o??"",r??"",t??"")),ae([])}catch{}}}),(0,b.jsxs)(z,{onClick:()=>pe(!0),children:[(0,b.jsx)(a.A,{size:13})," Save"]}),(0,b.jsxs)(S,{onClick:be,children:[(0,b.jsx)(l.A,{size:13})," Run"]}),(0,b.jsx)(T,{onClick:()=>ae([]),title:"Clear console",children:(0,b.jsx)(d.A,{size:13})}),(0,b.jsxs)(B,{ref:xe,children:[(0,b.jsxs)(C,{onClick:()=>de(e=>!e),children:["Examples ",(0,b.jsx)(c.A,{size:12})]}),le&&(0,b.jsx)(E,{children:g.k.map(e=>(0,b.jsx)(R,{onClick:()=>(e=>{n(e.html),h(e.css),V(e.js),ae([]),oe(G(e.html,e.css,e.js)),de(!1)})(e),children:e.label},e.label))})]}),e]}),ce&&(0,b.jsx)(s.MJ,{onSave:async e=>{pe(!1),await(0,s.KL)("playground",e,JSON.stringify({html:r,css:i,js:Q})),ue(null)},onCancel:()=>pe(!1)}),(0,b.jsxs)(M,{children:[re?(0,b.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,b.jsxs)(A,{onClick:he,title:"Show editors",children:[(0,b.jsx)(p.A,{size:14}),(0,b.jsx)(L,{children:"Editor"})]})}):(0,b.jsxs)(F,{collapsed:!1,children:[(0,b.jsxs)(O,{children:[["html","css","js"].map(e=>(0,b.jsxs)(D,{lang:e,active:W===e,onClick:()=>Z(e),children:[(0,b.jsx)(H,{lang:e}),e.toUpperCase()]},e)),(0,b.jsx)(J,{onClick:he,title:"Collapse editors",children:(0,b.jsx)(f.A,{size:14})})]}),(0,b.jsx)(P,{value:me,onChange:e=>$e(e.target.value),onKeyDown:e=>{if("Tab"===e.key){e.preventDefault();const o=e.currentTarget,r=o.selectionStart,t=o.value.substring(0,r)+"  "+o.value.substring(o.selectionEnd),n=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value")?.set;n&&(n.call(o,t),o.dispatchEvent(new Event("input",{bubbles:!0}))),o.selectionStart=o.selectionEnd=r+2}},spellCheck:!1},W)]}),ne?(0,b.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,b.jsxs)(_,{onClick:we,title:"Show preview",children:[(0,b.jsx)(u.A,{size:14}),(0,b.jsx)(L,{children:"Preview"})]})}):(0,b.jsxs)(N,{collapsed:!1,children:[(0,b.jsxs)(U,{children:[(0,b.jsx)(Y,{children:"Preview"}),(0,b.jsx)(J,{onClick:we,title:"Collapse preview",children:(0,b.jsx)(x.A,{size:14})})]}),(0,b.jsx)(I,{children:(0,b.jsx)(K,{srcDoc:ee,sandbox:"allow-scripts",title:"preview"},ee)}),se.length>0&&(0,b.jsx)(X,{children:se.map(e=>(0,b.jsxs)(q,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}const V=document.getElementById("root");if(!V)throw new Error("Root element #root not found");(0,n.H)(V).render((0,b.jsx)(Q,{}))},8997(e,o,r){var t=r(8991);o.H=t.createRoot,t.hydrateRoot}}]);
//# sourceMappingURL=807.8726798b5ec77f0b2626.js.map