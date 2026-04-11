"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([[807],{188(e,o,r){var t=r(7359),n=r(8997),i=r(3233),s=r(906),a=r(6135),l=r(9421),d=r(679),c=r(1530),p=r(5496),f=r(9881),u=r(3045),x=r(9336),g=r(5723);const b=`\n  &::-webkit-scrollbar { width: 6px; height: 6px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb { background: ${s.w4.colors.border}; border-radius: 3px; }\n  &::-webkit-scrollbar-thumb:hover { background: ${s.w4.colors.mainTextMuted}; }\n  scrollbar-width: thin;\n  scrollbar-color: ${s.w4.colors.border} transparent;\n`,h=i.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${s.w4.colors.mainBg};
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainText};
  overflow: hidden;
`,w=i.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  padding: 0 ${s.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${s.w4.spacing.sm};
`,m=i.default.button`
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
`,$=i.default.span`
  color: ${s.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,y=i.default.div`
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${s.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,k=i.default.span`
  font-weight: 400;
  color: ${s.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,v=i.default.div`flex: 1;`,j=i.default.button`
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
`,z=i.default.button`
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
`,T=i.default.button`
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
`,B=i.default.div`position: relative;`,C=i.default.div`
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
`,S=i.default.button`
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
`,E=i.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,R=i.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${s.w4.colors.sidebarBorder};
  background: ${s.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,M=i.default.button`
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
`,F=i.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${s.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,A=i.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,L=i.default.button`
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
`,D=i.default.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>"html"===e.lang?"#f97316":"css"===e.lang?"#38bdf8":"#facc15"};
`,H=i.default.button`
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
  ${b}

  &::placeholder { color: ${s.w4.colors.sidebarTextMuted}; }
`,O=i.default.div`
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
`,Y=i.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  padding: 0 ${s.w4.spacing.md};
  flex-shrink: 0;
`,J=i.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  flex: 1;
`,N=i.default.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,U=i.default.iframe`
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
  ${b}
`,I=i.default.div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function K(e,o,r){return`<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<style>*, *::before, *::after { box-sizing: border-box; }\n${o}\n</style>\n</head>\n<body>\n${e}\n<script>\n(function() {\n  const send = (kind, args) => {\n    window.parent.postMessage({ type: 'console', kind, text: args.map(a => {\n      try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch { return String(a); }\n    }).join(' ') }, '*');\n  };\n  ['log','warn','error'].forEach(m => {\n    const orig = console[m].bind(console);\n    console[m] = (...args) => { orig(...args); send(m, args); };\n  });\n  window.addEventListener('error', e => send('error', [e.message + ' (' + e.filename + ':' + e.lineno + ')']));\n})();\n<\/script>\n<script>${r}<\/script>\n</body>\n</html>`}function q({topBarRight:e}){const o=x.k[0],[r,n]=(0,t.useState)(o.html),[i,s]=(0,t.useState)(o.css),[b,q]=(0,t.useState)(o.js),[G,Q]=(0,t.useState)("html"),[V,W]=(0,t.useState)(()=>K(o.html,o.css,o.js)),[Z,ee]=(0,t.useState)(!1),[oe,re]=(0,t.useState)(!1),[te,ne]=(0,t.useState)([]),[ie,se]=(0,t.useState)(!1),ae=(0,t.useRef)(null),le=(0,t.useRef)(0);(0,t.useEffect)(()=>{const e=e=>{ae.current&&!ae.current.contains(e.target)&&se(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,t.useEffect)(()=>{const e=e=>{"console"===e.data?.type&&ne(o=>[...o.slice(-49),{kind:e.data.kind,text:e.data.text,id:le.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);const de=(0,t.useCallback)(()=>{ne([]),W(K(r,i,b))},[r,i,b]),ce=()=>{!Z&&oe&&re(!1),ee(e=>!e)},pe=()=>{!oe&&Z&&ee(!1),re(e=>!e)},fe="html"===G?r:"css"===G?i:b,ue="html"===G?n:"css"===G?s:q;return(0,g.jsxs)(h,{children:[(0,g.jsxs)(w,{children:[(0,g.jsxs)(m,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,g.jsx)("span",{children:"antis"})]}),(0,g.jsx)($,{children:"/"}),(0,g.jsxs)(y,{children:["Playground",(0,g.jsx)(k,{children:"HTML · CSS · JS"})]}),(0,g.jsx)(v,{}),(0,g.jsx)(T,{onClick:()=>{n(""),s(""),q(""),ne([]),W(K("","",""))},title:"Clear all panels",children:"New"}),(0,g.jsxs)(j,{onClick:de,children:[(0,g.jsx)(a.A,{size:13})," Run"]}),(0,g.jsx)(z,{onClick:()=>ne([]),title:"Clear console",children:(0,g.jsx)(l.A,{size:13})}),(0,g.jsxs)(B,{ref:ae,children:[(0,g.jsxs)(T,{onClick:()=>se(e=>!e),children:["Examples ",(0,g.jsx)(d.A,{size:12})]}),ie&&(0,g.jsx)(C,{children:x.k.map(e=>(0,g.jsx)(S,{onClick:()=>(e=>{n(e.html),s(e.css),q(e.js),ne([]),W(K(e.html,e.css,e.js)),se(!1)})(e),children:e.label},e.label))})]}),e]}),(0,g.jsxs)(E,{children:[Z?(0,g.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,g.jsxs)(M,{onClick:ce,title:"Show editors",children:[(0,g.jsx)(c.A,{size:14}),(0,g.jsx)(F,{children:"Editor"})]})}):(0,g.jsxs)(R,{collapsed:!1,children:[(0,g.jsxs)(A,{children:[["html","css","js"].map(e=>(0,g.jsxs)(L,{lang:e,active:G===e,onClick:()=>Q(e),children:[(0,g.jsx)(D,{lang:e}),e.toUpperCase()]},e)),(0,g.jsx)(H,{onClick:ce,title:"Collapse editors",children:(0,g.jsx)(p.A,{size:14})})]}),(0,g.jsx)(P,{value:fe,onChange:e=>ue(e.target.value),onKeyDown:e=>{if("Tab"===e.key){e.preventDefault();const o=e.currentTarget,r=o.selectionStart,t=o.value.substring(0,r)+"  "+o.value.substring(o.selectionEnd),n=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value")?.set;n&&(n.call(o,t),o.dispatchEvent(new Event("input",{bubbles:!0}))),o.selectionStart=o.selectionEnd=r+2}},spellCheck:!1},G)]}),oe?(0,g.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,g.jsxs)(_,{onClick:pe,title:"Show preview",children:[(0,g.jsx)(f.A,{size:14}),(0,g.jsx)(F,{children:"Preview"})]})}):(0,g.jsxs)(O,{collapsed:!1,children:[(0,g.jsxs)(Y,{children:[(0,g.jsx)(J,{children:"Preview"}),(0,g.jsx)(H,{onClick:pe,title:"Collapse preview",children:(0,g.jsx)(u.A,{size:14})})]}),(0,g.jsx)(N,{children:(0,g.jsx)(U,{srcDoc:V,sandbox:"allow-scripts",title:"preview"},V)}),te.length>0&&(0,g.jsx)(X,{children:te.map(e=>(0,g.jsxs)(I,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}const G=document.getElementById("root");if(!G)throw new Error("Root element #root not found");(0,n.H)(G).render((0,g.jsx)(q,{}))},8997(e,o,r){var t=r(8991);o.H=t.createRoot,t.hydrateRoot}}]);
//# sourceMappingURL=807.75be892b361c0c8503d6.js.map