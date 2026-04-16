"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([[807],{188(e,r,t){var o=t(7359),s=t(8997),n=t(3233),i=t(5723),a=t(6480),l=t(6135),d=t(9421),c=t(679),p=t(1530),u=t(5496),f=t(9881),x=t(5426),g=t(9336),b=t(7293),m=t(8104);const h=`\n  &::-webkit-scrollbar { width: 6px; height: 6px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb { background: ${i.w4.colors.border}; border-radius: 3px; }\n  &::-webkit-scrollbar-thumb:hover { background: ${i.w4.colors.mainTextMuted}; }\n  scrollbar-width: thin;\n  scrollbar-color: ${i.w4.colors.border} transparent;\n`,w=n.default.button`display:flex;align-items:center;gap:6px;padding:0 ${i.w4.spacing.sm};height:30px;background:none;border:1px solid ${i.w4.colors.accent};border-radius:${i.w4.borderRadius.sm};color:${i.w4.colors.accent};font-size:12px;font-family:${i.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,$=n.default.button`
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
`,y=n.default.button`
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
`,k=n.default.button`
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
`,v=n.default.div`position: relative;`,j=n.default.div`
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
`,S=n.default.button`
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
`,z=n.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,C=n.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${i.w4.colors.sidebarBorder};
  background: ${i.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,R=n.default.button`
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
`,B=n.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${i.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,T=n.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,E={html:"#f97316",css:"#38bdf8",js:"#facc15",ts:"#3b82f6",react:"#61dafb"},M=n.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 ${i.w4.spacing.md};
  height: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?E[e.lang]??"#facc15":"transparent"};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: ${i.w4.typography.fontFamily};
  color: ${e=>e.active?E[e.lang]??"#facc15":i.w4.colors.sidebarTextMuted};
  transition: color 0.12s, border-color 0.12s;
  &:hover { color: ${e=>E[e.lang]??"#facc15"}; }
`,A=n.default.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>E[e.lang]??"#facc15"};
`,F=n.default.button`
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
`,L=n.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  background: #fff;
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,O=n.default.button`
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
`,J=n.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding: 0 ${i.w4.spacing.md};
  flex-shrink: 0;
`,N=n.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  flex: 1;
`,P=n.default.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,U=n.default.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
`,_=n.default.div`
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
  ${h}
`,D=n.default.div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function I(e,r,t,o="",s=""){return`<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<style>*, *::before, *::after { box-sizing: border-box; }\n${r}\n</style>\n${s?'\n<script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>':""}\n</head>\n<body>\n${e}\n<script>\n(function() {\n  const send = (kind, args) => {\n    window.parent.postMessage({ type: 'console', kind, text: args.map(a => {\n      try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch { return String(a); }\n    }).join(' ') }, '*');\n  };\n  ['log','warn','error'].forEach(m => {\n    const orig = console[m].bind(console);\n    console[m] = (...args) => { orig(...args); send(m, args); };\n  });\n  window.addEventListener('error', e => send('error', [e.message + ' (' + e.filename + ':' + e.lineno + ')']));\n})();\n<\/script>\n<script>${t}<\/script>\n${o?`<script>${o}<\/script>`:""}\n${s?`<script>${s}<\/script>`:""}\n</body>\n</html>`}function X({topBarRight:e}){const r=g.k[0],[s,n]=(0,o.useState)(r.html),[h,E]=(0,o.useState)(r.css),[X,Y]=(0,o.useState)(r.js),[H,K]=(0,o.useState)(r.ts??""),[Z,q]=(0,o.useState)(r.react??""),[G,Q]=(0,o.useState)("html"),[V,W]=(0,o.useState)(()=>I(r.html,r.css,r.js)),[ee,re]=(0,o.useState)(!1),[te,oe]=(0,o.useState)(!1),[se,ne]=(0,o.useState)([]),[ie,ae]=(0,o.useState)(!1),[le,de]=(0,o.useState)(!1),[ce,pe]=(0,o.useState)(null),ue=(0,o.useRef)(null),fe=(0,o.useRef)(0);(0,o.useEffect)(()=>{const e=e=>{ue.current&&!ue.current.contains(e.target)&&ae(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,o.useEffect)(()=>{const e=e=>{"console"===e.data?.type&&ne(r=>[...r.slice(-49),{kind:e.data.kind,text:e.data.text,id:fe.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);const xe=(0,o.useCallback)(async(e,r,o,s,n)=>{ne([]);const i=s.trim()||n.trim()?await t.e(643).then(t.t.bind(t,5643,23)):null;let a="";if(s.trim()&&i)try{const e=i.transform(s,{presets:[["typescript",{allExtensions:!0}]],filename:"script.ts"});a=e?.code??""}catch(e){return void ne([{kind:"error",text:`TypeScript: ${e.message}`,id:fe.current++}])}let l="";if(n.trim()&&i)try{const e=i.transform(n,{presets:[["typescript",{allExtensions:!0,isTSX:!0}],["react",{runtime:"classic"}]],filename:"component.tsx"});l=e?.code??""}catch(e){return void ne([{kind:"error",text:`React: ${e.message}`,id:fe.current++}])}W(I(e,r,o,a,l))},[]),ge=(0,o.useCallback)(()=>xe(s,h,X,H,Z),[s,h,X,H,Z,xe]),be=()=>{!ee&&te&&oe(!1),re(e=>!e)},me=()=>{!te&&ee&&re(!1),oe(e=>!e)},he="html"===G?s:"css"===G?h:"js"===G?X:"ts"===G?H:Z,we="html"===G?n:"css"===G?E:"js"===G?Y:"ts"===G?K:q,$e=(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.w4.spacing.sm},children:[(0,m.jsx)(k,{onClick:()=>{n(""),E(""),Y(""),K(""),q(""),ne([]),W(I("","",""))},title:"Clear all panels",children:"New"}),(0,m.jsx)(i.UO,{appId:"playground",onLoad:(e,r,t)=>{pe(r&&t?{id:r,name:t}:null);try{const{html:r,css:t,js:o,ts:s,react:i}=JSON.parse(e);n(r??""),E(t??""),Y(o??""),K(s??""),q(i??""),W(I(r??"",t??"",o??"")),ne([])}catch{}}}),(0,m.jsxs)(w,{onClick:()=>de(!0),children:[(0,m.jsx)(a.A,{size:13})," Save"]}),(0,m.jsxs)($,{onClick:ge,children:[(0,m.jsx)(l.A,{size:13})," Run"]}),(0,m.jsx)(y,{onClick:()=>ne([]),title:"Clear console",children:(0,m.jsx)(d.A,{size:13})}),(0,m.jsxs)(v,{ref:ue,children:[(0,m.jsxs)(k,{onClick:()=>ae(e=>!e),children:["Examples ",(0,m.jsx)(c.A,{size:12})]}),ie&&(0,m.jsx)(j,{children:g.k.map(e=>(0,m.jsx)(S,{onClick:()=>(e=>{const r=e.html,t=e.css,o=e.js,s=e.ts??"",i=e.react??"";n(r),E(t),Y(o),K(s),q(i),ne([]),xe(r,t,o,s,i),Q(i?"react":s?"ts":"html"),ae(!1)})(e),children:e.label},e.label))})]}),e]});return(0,m.jsxs)(i.PE,{title:"Playground",sidebar:null,topBarRight:$e,children:[le&&(0,m.jsx)(i.MJ,{onSave:async e=>{de(!1),await(0,i.KL)("playground",e,JSON.stringify({html:s,css:h,js:X,ts:H,react:Z})),pe(null)},onUpdate:async()=>{ce&&(de(!1),await(0,i.mZ)(ce.id,ce.name,JSON.stringify({html:s,css:h,js:X,ts:H,react:Z})))},existingDoc:ce??void 0,onCancel:()=>de(!1)}),(0,m.jsxs)(z,{children:[ee?(0,m.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,m.jsxs)(R,{onClick:be,title:"Show editors",children:[(0,m.jsx)(p.A,{size:14}),(0,m.jsx)(B,{children:"Editor"})]})}):(0,m.jsxs)(C,{collapsed:!1,children:[(0,m.jsxs)(T,{children:[["html","css","js","ts","react"].map(e=>(0,m.jsxs)(M,{lang:e,active:G===e,onClick:()=>Q(e),children:[(0,m.jsx)(A,{lang:e}),"react"===e?"React":e.toUpperCase()]},e)),(0,m.jsx)(F,{onClick:be,title:"Collapse editors",children:(0,m.jsx)(u.A,{size:14})})]}),(0,m.jsx)(b.A,{lang:G,value:he,onChange:we},G)]}),te?(0,m.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,m.jsxs)(O,{onClick:me,title:"Show preview",children:[(0,m.jsx)(f.A,{size:14}),(0,m.jsx)(B,{children:"Preview"})]})}):(0,m.jsxs)(L,{collapsed:!1,children:[(0,m.jsxs)(J,{children:[(0,m.jsx)(N,{children:"Preview"}),(0,m.jsx)(F,{onClick:me,title:"Collapse preview",children:(0,m.jsx)(x.A,{size:14})})]}),(0,m.jsx)(P,{children:(0,m.jsx)(U,{srcDoc:V,sandbox:"allow-scripts",title:"preview"},V)}),se.length>0&&(0,m.jsx)(_,{children:se.map(e=>(0,m.jsxs)(D,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}const Y=document.getElementById("root");if(!Y)throw new Error("Root element #root not found");(0,s.H)(Y).render((0,m.jsx)(X,{}))},8997(e,r,t){var o=t(8991);r.H=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=807.721e57f007e003c3ca30.js.map