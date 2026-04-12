"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([[36],{6036(e,o,r){r.r(o),r.d(o,{default:()=>G});var t=r(7359),n=r(3233),i=r(4079),s=r(5496),a=r(1530),l=r(679),d=r(3045),c=r(9881),p=r(6135),f=r(9421),u=r(6480),x=r(9336),g=r(5723);const b=`\n  &::-webkit-scrollbar { width: 6px; height: 6px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb { background: ${i.w4.colors.border}; border-radius: 3px; }\n  &::-webkit-scrollbar-thumb:hover { background: ${i.w4.colors.mainTextMuted}; }\n  scrollbar-width: thin;\n  scrollbar-color: ${i.w4.colors.border} transparent;\n`,h=n.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${i.w4.colors.mainBg};
  font-family: ${i.w4.typography.fontFamily};
  color: ${i.w4.colors.mainText};
  overflow: hidden;
`,w=n.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding: 0 ${i.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${i.w4.spacing.sm};
`,m=n.default.button`
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
`,$=n.default.span`
  color: ${i.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,y=n.default.div`
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,k=n.default.span`
  font-weight: 400;
  color: ${i.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,v=n.default.div`flex: 1;`,j=n.default.button`display:flex;align-items:center;gap:6px;padding:0 ${i.w4.spacing.sm};height:30px;background:none;border:1px solid ${i.w4.colors.accent};border-radius:${i.w4.borderRadius.sm};color:${i.w4.colors.accent};font-size:12px;font-family:${i.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,z=n.default.button`
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
`,S=n.default.button`
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
`,T=n.default.button`
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
`,C=n.default.div`position: relative;`,B=n.default.div`
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
`,E=n.default.button`
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
`,M=n.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,R=n.default.div`
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
`,A=n.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${i.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,L=n.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,O=n.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 ${i.w4.spacing.md};
  height: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?"html"===e.lang?"#f97316":"css"===e.lang?"#38bdf8":"#facc15":"transparent"};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: ${i.w4.typography.fontFamily};
  color: ${e=>e.active?"html"===e.lang?"#f97316":"css"===e.lang?"#38bdf8":"#facc15":i.w4.colors.sidebarTextMuted};
  transition: color 0.12s, border-color 0.12s;
  &:hover { color: ${e=>"html"===e.lang?"#f97316":"css"===e.lang?"#38bdf8":"#facc15"}; }
`,D=n.default.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>"html"===e.lang?"#f97316":"css"===e.lang?"#38bdf8":"#facc15"};
`,J=n.default.button`
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
`,P=n.default.textarea`
  flex: 1;
  width: 100%;
  background: ${i.w4.colors.mainBg};
  border: none;
  outline: none;
  padding: ${i.w4.spacing.lg};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${i.w4.colors.mainText};
  resize: none;
  line-height: 1.7;
  tab-size: 2;
  caret-color: ${i.w4.colors.accent};
  ${b}

  &::placeholder { color: ${i.w4.colors.sidebarTextMuted}; }
`,N=n.default.div`
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
`,U=n.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  flex: 1;
`,Y=n.default.div`
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
`,X=n.default.div`
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
`,I=n.default.div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function q(e,o,r){return`<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<style>*, *::before, *::after { box-sizing: border-box; }\n${o}\n</style>\n</head>\n<body>\n${e}\n<script>\n(function() {\n  const send = (kind, args) => {\n    window.parent.postMessage({ type: 'console', kind, text: args.map(a => {\n      try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch { return String(a); }\n    }).join(' ') }, '*');\n  };\n  ['log','warn','error'].forEach(m => {\n    const orig = console[m].bind(console);\n    console[m] = (...args) => { orig(...args); send(m, args); };\n  });\n  window.addEventListener('error', e => send('error', [e.message + ' (' + e.filename + ':' + e.lineno + ')']));\n})();\n<\/script>\n<script>${r}<\/script>\n</body>\n</html>`}function G({topBarRight:e}){const o=x.k[0],[r,n]=(0,t.useState)(o.html),[b,G]=(0,t.useState)(o.css),[Q,V]=(0,t.useState)(o.js),[W,Z]=(0,t.useState)("html"),[ee,oe]=(0,t.useState)(()=>q(o.html,o.css,o.js)),[re,te]=(0,t.useState)(!1),[ne,ie]=(0,t.useState)(!1),[se,ae]=(0,t.useState)([]),[le,de]=(0,t.useState)(!1),[ce,pe]=(0,t.useState)(!1),fe=(0,t.useRef)(null),ue=(0,t.useRef)(0);(0,t.useEffect)(()=>{const e=e=>{fe.current&&!fe.current.contains(e.target)&&de(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,t.useEffect)(()=>{const e=e=>{"console"===e.data?.type&&ae(o=>[...o.slice(-49),{kind:e.data.kind,text:e.data.text,id:ue.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);const xe=(0,t.useCallback)(()=>{ae([]),oe(q(r,b,Q))},[r,b,Q]),ge=()=>{!re&&ne&&ie(!1),te(e=>!e)},be=()=>{!ne&&re&&te(!1),ie(e=>!e)},he="html"===W?r:"css"===W?b:Q,we="html"===W?n:"css"===W?G:V;return(0,g.jsxs)(h,{children:[(0,g.jsxs)(w,{children:[(0,g.jsxs)(m,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,g.jsx)("span",{children:"antis"})]}),(0,g.jsx)($,{children:"/"}),(0,g.jsxs)(y,{children:["Playground",(0,g.jsx)(k,{children:"HTML · CSS · JS"})]}),(0,g.jsx)(v,{}),(0,g.jsx)(T,{onClick:()=>{n(""),G(""),V(""),ae([]),oe(q("","",""))},title:"Clear all panels",children:"New"}),(0,g.jsx)(i.UO,{appId:"playground",onLoad:e=>{try{const{html:o,css:r,js:t}=JSON.parse(e);n(o??""),G(r??""),V(t??""),oe(q(o??"",r??"",t??"")),ae([])}catch{}}}),(0,g.jsxs)(j,{onClick:()=>pe(!0),children:[(0,g.jsx)(u.A,{size:13})," Save"]}),(0,g.jsxs)(z,{onClick:xe,children:[(0,g.jsx)(p.A,{size:13})," Run"]}),(0,g.jsx)(S,{onClick:()=>ae([]),title:"Clear console",children:(0,g.jsx)(f.A,{size:13})}),(0,g.jsxs)(C,{ref:fe,children:[(0,g.jsxs)(T,{onClick:()=>de(e=>!e),children:["Examples ",(0,g.jsx)(l.A,{size:12})]}),le&&(0,g.jsx)(B,{children:x.k.map(e=>(0,g.jsx)(E,{onClick:()=>(e=>{n(e.html),G(e.css),V(e.js),ae([]),oe(q(e.html,e.css,e.js)),de(!1)})(e),children:e.label},e.label))})]}),e]}),ce&&(0,g.jsx)(i.MJ,{onSave:async e=>{pe(!1),await(0,i.KL)("playground",e,JSON.stringify({html:r,css:b,js:Q}))},onCancel:()=>pe(!1)}),(0,g.jsxs)(M,{children:[re?(0,g.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,g.jsxs)(F,{onClick:ge,title:"Show editors",children:[(0,g.jsx)(a.A,{size:14}),(0,g.jsx)(A,{children:"Editor"})]})}):(0,g.jsxs)(R,{collapsed:!1,children:[(0,g.jsxs)(L,{children:[["html","css","js"].map(e=>(0,g.jsxs)(O,{lang:e,active:W===e,onClick:()=>Z(e),children:[(0,g.jsx)(D,{lang:e}),e.toUpperCase()]},e)),(0,g.jsx)(J,{onClick:ge,title:"Collapse editors",children:(0,g.jsx)(s.A,{size:14})})]}),(0,g.jsx)(P,{value:he,onChange:e=>we(e.target.value),onKeyDown:e=>{if("Tab"===e.key){e.preventDefault();const o=e.currentTarget,r=o.selectionStart,t=o.value.substring(0,r)+"  "+o.value.substring(o.selectionEnd),n=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value")?.set;n&&(n.call(o,t),o.dispatchEvent(new Event("input",{bubbles:!0}))),o.selectionStart=o.selectionEnd=r+2}},spellCheck:!1},W)]}),ne?(0,g.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,g.jsxs)(_,{onClick:be,title:"Show preview",children:[(0,g.jsx)(c.A,{size:14}),(0,g.jsx)(A,{children:"Preview"})]})}):(0,g.jsxs)(N,{collapsed:!1,children:[(0,g.jsxs)(H,{children:[(0,g.jsx)(U,{children:"Preview"}),(0,g.jsx)(J,{onClick:be,title:"Collapse preview",children:(0,g.jsx)(d.A,{size:14})})]}),(0,g.jsx)(Y,{children:(0,g.jsx)(K,{srcDoc:ee,sandbox:"allow-scripts",title:"preview"},ee)}),se.length>0&&(0,g.jsx)(X,{children:se.map(e=>(0,g.jsxs)(I,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}}}]);
//# sourceMappingURL=36.4de96e9b8807dff6fb04.js.map