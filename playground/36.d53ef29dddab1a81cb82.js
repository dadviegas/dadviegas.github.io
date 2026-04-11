"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([[36],{6036(e,o,r){r.r(o),r.d(o,{default:()=>q});var t=r(7359),n=r(3233),i=r(906),s=r(5496),a=r(1530),l=r(679),d=r(3045),c=r(9881),p=r(6135),f=r(9421),u=r(9336),x=r(5723);const g=`\n  &::-webkit-scrollbar { width: 6px; height: 6px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb { background: ${i.w4.colors.border}; border-radius: 3px; }\n  &::-webkit-scrollbar-thumb:hover { background: ${i.w4.colors.mainTextMuted}; }\n  scrollbar-width: thin;\n  scrollbar-color: ${i.w4.colors.border} transparent;\n`,b=n.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${i.w4.colors.mainBg};
  font-family: ${i.w4.typography.fontFamily};
  color: ${i.w4.colors.mainText};
  overflow: hidden;
`,h=n.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding: 0 ${i.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${i.w4.spacing.sm};
`,w=n.default.button`
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
`,m=n.default.span`
  color: ${i.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,$=n.default.div`
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,y=n.default.span`
  font-weight: 400;
  color: ${i.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,k=n.default.div`flex: 1;`,v=n.default.button`
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
`,j=n.default.button`
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
`,z=n.default.button`
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
`,T=n.default.div`position: relative;`,B=n.default.div`
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
`,C=n.default.button`
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
`,S=n.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,E=n.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${i.w4.colors.sidebarBorder};
  background: ${i.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,M=n.default.button`
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
`,R=n.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${i.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,F=n.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,A=n.default.button`
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
`,L=n.default.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>"html"===e.lang?"#f97316":"css"===e.lang?"#38bdf8":"#facc15"};
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
  ${g}

  &::placeholder { color: ${i.w4.colors.sidebarTextMuted}; }
`,O=n.default.div`
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
`,Y=n.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  flex: 1;
`,J=n.default.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,N=n.default.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
`,U=n.default.div`
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
  ${g}
`,X=n.default.div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function K(e,o,r){return`<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<style>*, *::before, *::after { box-sizing: border-box; }\n${o}\n</style>\n</head>\n<body>\n${e}\n<script>\n(function() {\n  const send = (kind, args) => {\n    window.parent.postMessage({ type: 'console', kind, text: args.map(a => {\n      try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch { return String(a); }\n    }).join(' ') }, '*');\n  };\n  ['log','warn','error'].forEach(m => {\n    const orig = console[m].bind(console);\n    console[m] = (...args) => { orig(...args); send(m, args); };\n  });\n  window.addEventListener('error', e => send('error', [e.message + ' (' + e.filename + ':' + e.lineno + ')']));\n})();\n<\/script>\n<script>${r}<\/script>\n</body>\n</html>`}function q({topBarRight:e}){const o=u.k[0],[r,n]=(0,t.useState)(o.html),[i,g]=(0,t.useState)(o.css),[q,G]=(0,t.useState)(o.js),[I,Q]=(0,t.useState)("html"),[V,W]=(0,t.useState)(()=>K(o.html,o.css,o.js)),[Z,ee]=(0,t.useState)(!1),[oe,re]=(0,t.useState)(!1),[te,ne]=(0,t.useState)([]),[ie,se]=(0,t.useState)(!1),ae=(0,t.useRef)(null),le=(0,t.useRef)(0);(0,t.useEffect)(()=>{const e=e=>{ae.current&&!ae.current.contains(e.target)&&se(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,t.useEffect)(()=>{const e=e=>{"console"===e.data?.type&&ne(o=>[...o.slice(-49),{kind:e.data.kind,text:e.data.text,id:le.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);const de=(0,t.useCallback)(()=>{ne([]),W(K(r,i,q))},[r,i,q]),ce=()=>{!Z&&oe&&re(!1),ee(e=>!e)},pe=()=>{!oe&&Z&&ee(!1),re(e=>!e)},fe="html"===I?r:"css"===I?i:q,ue="html"===I?n:"css"===I?g:G;return(0,x.jsxs)(b,{children:[(0,x.jsxs)(h,{children:[(0,x.jsxs)(w,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,x.jsx)("span",{children:"antis"})]}),(0,x.jsx)(m,{children:"/"}),(0,x.jsxs)($,{children:["Playground",(0,x.jsx)(y,{children:"HTML · CSS · JS"})]}),(0,x.jsx)(k,{}),(0,x.jsx)(z,{onClick:()=>{n(""),g(""),G(""),ne([]),W(K("","",""))},title:"Clear all panels",children:"New"}),(0,x.jsxs)(v,{onClick:de,children:[(0,x.jsx)(p.A,{size:13})," Run"]}),(0,x.jsx)(j,{onClick:()=>ne([]),title:"Clear console",children:(0,x.jsx)(f.A,{size:13})}),(0,x.jsxs)(T,{ref:ae,children:[(0,x.jsxs)(z,{onClick:()=>se(e=>!e),children:["Examples ",(0,x.jsx)(l.A,{size:12})]}),ie&&(0,x.jsx)(B,{children:u.k.map(e=>(0,x.jsx)(C,{onClick:()=>(e=>{n(e.html),g(e.css),G(e.js),ne([]),W(K(e.html,e.css,e.js)),se(!1)})(e),children:e.label},e.label))})]}),e]}),(0,x.jsxs)(S,{children:[Z?(0,x.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,x.jsxs)(M,{onClick:ce,title:"Show editors",children:[(0,x.jsx)(a.A,{size:14}),(0,x.jsx)(R,{children:"Editor"})]})}):(0,x.jsxs)(E,{collapsed:!1,children:[(0,x.jsxs)(F,{children:[["html","css","js"].map(e=>(0,x.jsxs)(A,{lang:e,active:I===e,onClick:()=>Q(e),children:[(0,x.jsx)(L,{lang:e}),e.toUpperCase()]},e)),(0,x.jsx)(D,{onClick:ce,title:"Collapse editors",children:(0,x.jsx)(s.A,{size:14})})]}),(0,x.jsx)(P,{value:fe,onChange:e=>ue(e.target.value),onKeyDown:e=>{if("Tab"===e.key){e.preventDefault();const o=e.currentTarget,r=o.selectionStart,t=o.value.substring(0,r)+"  "+o.value.substring(o.selectionEnd),n=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value")?.set;n&&(n.call(o,t),o.dispatchEvent(new Event("input",{bubbles:!0}))),o.selectionStart=o.selectionEnd=r+2}},spellCheck:!1},I)]}),oe?(0,x.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,x.jsxs)(_,{onClick:pe,title:"Show preview",children:[(0,x.jsx)(c.A,{size:14}),(0,x.jsx)(R,{children:"Preview"})]})}):(0,x.jsxs)(O,{collapsed:!1,children:[(0,x.jsxs)(H,{children:[(0,x.jsx)(Y,{children:"Preview"}),(0,x.jsx)(D,{onClick:pe,title:"Collapse preview",children:(0,x.jsx)(d.A,{size:14})})]}),(0,x.jsx)(J,{children:(0,x.jsx)(N,{srcDoc:V,sandbox:"allow-scripts",title:"preview"},V)}),te.length>0&&(0,x.jsx)(U,{children:te.map(e=>(0,x.jsxs)(X,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}}}]);
//# sourceMappingURL=36.d53ef29dddab1a81cb82.js.map