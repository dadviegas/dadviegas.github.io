"use strict";(self.webpackChunk_atlantis_playground=self.webpackChunk_atlantis_playground||[]).push([[36],{6036(e,r,t){t.r(r),t.d(r,{default:()=>X});var o=t(7359),s=t(3233),n=t(5723),i=t(5496),a=t(1530),l=t(679),d=t(5426),c=t(9881),p=t(6135),u=t(9421),f=t(6480),x=t(9336),b=t(7293),g=t(8104);const m=`\n  &::-webkit-scrollbar { width: 6px; height: 6px; }\n  &::-webkit-scrollbar-track { background: transparent; }\n  &::-webkit-scrollbar-thumb { background: ${n.w4.colors.border}; border-radius: 3px; }\n  &::-webkit-scrollbar-thumb:hover { background: ${n.w4.colors.mainTextMuted}; }\n  scrollbar-width: thin;\n  scrollbar-color: ${n.w4.colors.border} transparent;\n`,h=s.default.button`display:flex;align-items:center;gap:6px;padding:0 ${n.w4.spacing.sm};height:30px;background:none;border:1px solid ${n.w4.colors.accent};border-radius:${n.w4.borderRadius.sm};color:${n.w4.colors.accent};font-size:12px;font-family:${n.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,w=s.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 ${n.w4.spacing.md};
  height: 32px;
  background: #238636;
  border: 1px solid #2ea043;
  border-radius: ${n.w4.borderRadius.sm};
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  font-family: ${n.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s;
  &:hover { background: #2ea043; }
  &:active { transform: scale(0.97); }
`,$=s.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm};
  color: ${n.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: all 0.15s;
  &:hover { border-color: ${n.w4.colors.accent}; color: ${n.w4.colors.mainText}; }
`,y=s.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${n.w4.spacing.sm};
  height: 30px;
  background: transparent;
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm};
  color: ${n.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${n.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;
  &:hover { border-color: ${n.w4.colors.accent}; color: ${n.w4.colors.mainText}; }
`,k=s.default.div`position: relative;`,v=s.default.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0,0,0,0.5);
  z-index: 200;
  min-width: 200px;
  overflow: hidden;
`,j=s.default.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: ${n.w4.spacing.sm} ${n.w4.spacing.md};
  background: transparent;
  border: none;
  color: ${n.w4.colors.mainText};
  font-size: 13px;
  font-family: ${n.w4.typography.fontFamily};
  cursor: pointer;
  &:hover { background: ${n.w4.colors.mainBg}; }
`,S=s.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,z=s.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${n.w4.colors.sidebarBorder};
  background: ${n.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,C=s.default.button`
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
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-left: none;
  border-radius: 0 ${n.w4.borderRadius.md} ${n.w4.borderRadius.md} 0;
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  z-index: 10;
  &:hover { background: ${n.w4.colors.sidebarBorder}; color: ${n.w4.colors.mainText}; }
`,B=s.default.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${n.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`,T=s.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,R={html:"#f97316",css:"#38bdf8",js:"#facc15",ts:"#3b82f6",react:"#61dafb"},E=s.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 ${n.w4.spacing.md};
  height: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?R[e.lang]??"#facc15":"transparent"};
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: ${n.w4.typography.fontFamily};
  color: ${e=>e.active?R[e.lang]??"#facc15":n.w4.colors.sidebarTextMuted};
  transition: color 0.12s, border-color 0.12s;
  &:hover { color: ${e=>R[e.lang]??"#facc15"}; }
`,M=s.default.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>R[e.lang]??"#facc15"};
`,A=s.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  margin-left: auto;
  margin-right: 6px;
  transition: background 0.12s, color 0.12s;
  &:hover { background: ${n.w4.colors.sidebarBorder}; color: ${n.w4.colors.mainText}; }
`,F=s.default.div`
  display: flex;
  flex-direction: column;
  flex: ${e=>e.collapsed?"0 0 0px":"1"};
  min-width: ${e=>e.collapsed?"0":"200px"};
  overflow: hidden;
  background: #fff;
  transition: flex 0.25s cubic-bezier(0.4,0,0.2,1), min-width 0.25s cubic-bezier(0.4,0,0.2,1);
  position: relative;
`,L=s.default.button`
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
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-right: none;
  border-radius: ${n.w4.borderRadius.md} 0 0 ${n.w4.borderRadius.md};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  z-index: 10;
  &:hover { background: ${n.w4.colors.sidebarBorder}; color: ${n.w4.colors.mainText}; }
`,O=s.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  padding: 0 ${n.w4.spacing.md};
  flex-shrink: 0;
`,J=s.default.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  flex: 1;
`,N=s.default.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,P=s.default.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
`,U=s.default.div`
  max-height: 110px;
  overflow-y: auto;
  background: ${n.w4.colors.mainBg};
  border-top: 1px solid ${n.w4.colors.sidebarBorder};
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 12px;
  padding: ${n.w4.spacing.sm} ${n.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
  ${m}
`,_=s.default.div`
  color: ${e=>"error"===e.kind?"#f87171":"warn"===e.kind?"#d29922":"#8b949e"};
`;function D(e,r,t,o="",s=""){return`<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<style>*, *::before, *::after { box-sizing: border-box; }\n${r}\n</style>\n${s?'\n<script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>':""}\n</head>\n<body>\n${e}\n<script>\n(function() {\n  const send = (kind, args) => {\n    window.parent.postMessage({ type: 'console', kind, text: args.map(a => {\n      try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch { return String(a); }\n    }).join(' ') }, '*');\n  };\n  ['log','warn','error'].forEach(m => {\n    const orig = console[m].bind(console);\n    console[m] = (...args) => { orig(...args); send(m, args); };\n  });\n  window.addEventListener('error', e => send('error', [e.message + ' (' + e.filename + ':' + e.lineno + ')']));\n})();\n<\/script>\n<script>${t}<\/script>\n${o?`<script>${o}<\/script>`:""}\n${s?`<script>${s}<\/script>`:""}\n</body>\n</html>`}function X({topBarRight:e}){const r=x.k[0],[s,m]=(0,o.useState)(r.html),[R,X]=(0,o.useState)(r.css),[Y,I]=(0,o.useState)(r.js),[K,Z]=(0,o.useState)(r.ts??""),[q,G]=(0,o.useState)(r.react??""),[H,Q]=(0,o.useState)("html"),[V,W]=(0,o.useState)(()=>D(r.html,r.css,r.js)),[ee,re]=(0,o.useState)(!1),[te,oe]=(0,o.useState)(!1),[se,ne]=(0,o.useState)([]),[ie,ae]=(0,o.useState)(!1),[le,de]=(0,o.useState)(!1),[ce,pe]=(0,o.useState)(null),ue=(0,o.useRef)(null),fe=(0,o.useRef)(0);(0,o.useEffect)(()=>{const e=e=>{ue.current&&!ue.current.contains(e.target)&&ae(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,o.useEffect)(()=>{const e=e=>{"console"===e.data?.type&&ne(r=>[...r.slice(-49),{kind:e.data.kind,text:e.data.text,id:fe.current++}])};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]);const xe=(0,o.useCallback)(async(e,r,o,s,n)=>{ne([]);const i=s.trim()||n.trim()?await t.e(643).then(t.t.bind(t,5643,23)):null;let a="";if(s.trim()&&i)try{const e=i.transform(s,{presets:[["typescript",{allExtensions:!0}]],filename:"script.ts"});a=e?.code??""}catch(e){return void ne([{kind:"error",text:`TypeScript: ${e.message}`,id:fe.current++}])}let l="";if(n.trim()&&i)try{const e=i.transform(n,{presets:[["typescript",{allExtensions:!0,isTSX:!0}],["react",{runtime:"classic"}]],filename:"component.tsx"});l=e?.code??""}catch(e){return void ne([{kind:"error",text:`React: ${e.message}`,id:fe.current++}])}W(D(e,r,o,a,l))},[]),be=(0,o.useCallback)(()=>xe(s,R,Y,K,q),[s,R,Y,K,q,xe]),ge=()=>{!ee&&te&&oe(!1),re(e=>!e)},me=()=>{!te&&ee&&re(!1),oe(e=>!e)},he="html"===H?s:"css"===H?R:"js"===H?Y:"ts"===H?K:q,we="html"===H?m:"css"===H?X:"js"===H?I:"ts"===H?Z:G,$e=(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:n.w4.spacing.sm},children:[(0,g.jsx)(y,{onClick:()=>{m(""),X(""),I(""),Z(""),G(""),ne([]),W(D("","",""))},title:"Clear all panels",children:"New"}),(0,g.jsx)(n.UO,{appId:"playground",onLoad:(e,r,t)=>{pe(r&&t?{id:r,name:t}:null);try{const{html:r,css:t,js:o,ts:s,react:n}=JSON.parse(e);m(r??""),X(t??""),I(o??""),Z(s??""),G(n??""),W(D(r??"",t??"",o??"")),ne([])}catch{}}}),(0,g.jsxs)(h,{onClick:()=>de(!0),children:[(0,g.jsx)(f.A,{size:13})," Save"]}),(0,g.jsxs)(w,{onClick:be,children:[(0,g.jsx)(p.A,{size:13})," Run"]}),(0,g.jsx)($,{onClick:()=>ne([]),title:"Clear console",children:(0,g.jsx)(u.A,{size:13})}),(0,g.jsxs)(k,{ref:ue,children:[(0,g.jsxs)(y,{onClick:()=>ae(e=>!e),children:["Examples ",(0,g.jsx)(l.A,{size:12})]}),ie&&(0,g.jsx)(v,{children:x.k.map(e=>(0,g.jsx)(j,{onClick:()=>(e=>{const r=e.html,t=e.css,o=e.js,s=e.ts??"",n=e.react??"";m(r),X(t),I(o),Z(s),G(n),ne([]),xe(r,t,o,s,n),Q(n?"react":s?"ts":"html"),ae(!1)})(e),children:e.label},e.label))})]}),e]});return(0,g.jsxs)(n.PE,{title:"Playground",sidebar:null,topBarRight:$e,children:[le&&(0,g.jsx)(n.MJ,{onSave:async e=>{de(!1),await(0,n.KL)("playground",e,JSON.stringify({html:s,css:R,js:Y,ts:K,react:q})),pe(null)},onUpdate:async()=>{ce&&(de(!1),await(0,n.mZ)(ce.id,ce.name,JSON.stringify({html:s,css:R,js:Y,ts:K,react:q})))},existingDoc:ce??void 0,onCancel:()=>de(!1)}),(0,g.jsxs)(S,{children:[ee?(0,g.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,g.jsxs)(C,{onClick:ge,title:"Show editors",children:[(0,g.jsx)(a.A,{size:14}),(0,g.jsx)(B,{children:"Editor"})]})}):(0,g.jsxs)(z,{collapsed:!1,children:[(0,g.jsxs)(T,{children:[["html","css","js","ts","react"].map(e=>(0,g.jsxs)(E,{lang:e,active:H===e,onClick:()=>Q(e),children:[(0,g.jsx)(M,{lang:e}),"react"===e?"React":e.toUpperCase()]},e)),(0,g.jsx)(A,{onClick:ge,title:"Collapse editors",children:(0,g.jsx)(i.A,{size:14})})]}),(0,g.jsx)(b.A,{lang:H,value:he,onChange:we},H)]}),te?(0,g.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,g.jsxs)(L,{onClick:me,title:"Show preview",children:[(0,g.jsx)(c.A,{size:14}),(0,g.jsx)(B,{children:"Preview"})]})}):(0,g.jsxs)(F,{collapsed:!1,children:[(0,g.jsxs)(O,{children:[(0,g.jsx)(J,{children:"Preview"}),(0,g.jsx)(A,{onClick:me,title:"Collapse preview",children:(0,g.jsx)(d.A,{size:14})})]}),(0,g.jsx)(N,{children:(0,g.jsx)(P,{srcDoc:V,sandbox:"allow-scripts",title:"preview"},V)}),se.length>0&&(0,g.jsx)(U,{children:se.map(e=>(0,g.jsxs)(_,{kind:e.kind,children:["[",e.kind,"] ",e.text]},e.id))})]})]})]})}}}]);
//# sourceMappingURL=36.1f07c609579f4df0363e.js.map