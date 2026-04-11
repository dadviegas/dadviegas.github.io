"use strict";(self.webpackChunk_atlantis_regexlab=self.webpackChunk_atlantis_regexlab||[]).push([[188],{188(e,o,r){var n=r(7359),t=r(8997),l=r(3233),s=r(906),a=r(679),i=r(2534),d=r(947),c=r(9336),p=r(5723);const g=[{bg:"rgba(56,139,253,0.25)",border:"#388bfd",label:"#388bfd"},{bg:"rgba(63,185,80,0.25)",border:"#3fb950",label:"#3fb950"},{bg:"rgba(210,153,34,0.25)",border:"#d29922",label:"#d29922"},{bg:"rgba(163,113,247,0.25)",border:"#a371f7",label:"#a371f7"},{bg:"rgba(248,113,113,0.25)",border:"#f87171",label:"#f87171"},{bg:"rgba(34,211,238,0.25)",border:"#22d3ee",label:"#22d3ee"}],x=["g","i","m","s","u"],u=l.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${s.w4.colors.mainBg};
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainText};
  overflow: hidden;
`,f=l.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  padding: 0 ${s.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${s.w4.spacing.md};
`,h=l.default.button`
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
`,m=l.default.span`
  color: ${s.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,w=l.default.div`
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${s.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,b=l.default.span`
  font-weight: 400;
  color: ${s.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,$=l.default.div`flex: 1;`,y=l.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding: ${s.w4.spacing.lg};
  gap: ${s.w4.spacing.md};
`,j=l.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 0 ${s.w4.spacing.md};
  height: 44px;
  flex-shrink: 0;
`,v=l.default.span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 18px;
  color: ${s.w4.colors.mainTextMuted};
  user-select: none;
`,k=l.default.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: ${s.w4.typography.fontSizeBase};
  color: ${e=>e.hasError?"#f87171":s.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${s.w4.colors.mainTextMuted};
  }
`,z=l.default.button`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>e.active?s.w4.colors.accent:s.w4.colors.border};
  background: ${e=>e.active?"rgba(56,139,253,0.15)":"transparent"};
  color: ${e=>e.active?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;

  &:hover {
    border-color: ${s.w4.colors.accent};
    color: ${s.w4.colors.accent};
  }
`,T=l.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
  white-space: nowrap;
`,M=l.default.div`
  display: flex;
  flex: 1;
  gap: ${s.w4.spacing.md};
  overflow: hidden;
  min-height: 0;
`,R=l.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,I=l.default.div`
  font-size: 11px;
  font-weight: 600;
  color: ${s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
`,F=l.default.textarea`
  flex: 1;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: ${s.w4.spacing.md};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${s.w4.colors.mainText};
  resize: none;
  outline: none;
  line-height: 1.6;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${s.w4.colors.accent};
  }

  &::placeholder {
    color: ${s.w4.colors.mainTextMuted};
  }
`,B=l.default.div`
  flex: 1;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: ${s.w4.spacing.md};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${s.w4.colors.mainText};
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-all;
  line-height: 1.6;
`,C=l.default.mark`
  background: rgba(56,139,253,0.15);
  border-radius: 2px;
  color: inherit;
  outline: 1px solid rgba(56,139,253,0.4);
`,E=l.default.div`
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  flex-shrink: 0;
  max-height: 200px;
  overflow-y: auto;
`,S=l.default.div`
  display: flex;
  align-items: center;
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  border-bottom: 1px solid ${s.w4.colors.border};
  font-size: 12px;
  color: ${s.w4.colors.mainTextMuted};
  gap: ${s.w4.spacing.md};
`,A=l.default.span`
  font-weight: 600;
  color: ${s.w4.colors.mainText};
`,H=l.default.div`
  padding: ${s.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,_=l.default.div`
  display: flex;
  gap: ${s.w4.spacing.sm};
  padding: 4px ${s.w4.spacing.sm};
  border-radius: 4px;
  font-size: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  align-items: baseline;
  flex-wrap: wrap;

  &:hover {
    background: ${s.w4.colors.mainBg};
  }
`,L=l.default.span`
  color: ${s.w4.colors.mainTextMuted};
  min-width: 28px;
  flex-shrink: 0;
`,G=l.default.span`
  background: rgba(56,139,253,0.12);
  border-radius: 3px;
  padding: 1px 6px;
  color: ${s.w4.colors.mainText};
`,P=l.default.span`
  border-radius: 3px;
  padding: 1px 6px;
  color: ${s.w4.colors.mainText};
  background: ${e=>g[e.colorIndex%g.length].bg};
  border: 1px solid ${e=>g[e.colorIndex%g.length].border};
  font-size: 11px;
`,q=l.default.span`
  font-size: 10px;
  color: ${e=>g[e.colorIndex%g.length].label};
  font-weight: 600;
`,D=l.default.div`
  position: relative;
`,J=l.default.button`
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

  &:hover {
    border-color: ${s.w4.colors.accent};
    color: ${s.w4.colors.mainText};
  }
`,K=l.default.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200;
  min-width: 200px;
  overflow: hidden;
`,N=l.default.button`
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

  &:hover {
    background: ${s.w4.colors.mainBg};
  }
`;function O({topBarRight:e}){const[o,r]=(0,n.useState)("([\\w.+-]+)@([\\w-]+)\\.([\\w.]+)"),[t,l]=(0,n.useState)(new Set(["g","i"])),[O,Q]=(0,n.useState)("Contact us at hello@example.com or support@atlantis.dev for assistance.\nInvalid ones: @nouser.com, noatsign.org"),[U,V]=(0,n.useState)(!1),W=(0,n.useRef)(null);(0,n.useEffect)(()=>{const e=e=>{W.current&&!W.current.contains(e.target)&&V(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const X=Array.from(t).join(""),{matches:Y,error:Z}=(0,n.useMemo)(()=>function(e,o,r){if(!e)return{matches:[],error:null};try{const n=o.includes("g")?o:o+"g";let t;try{t=new RegExp(e,n+"d")}catch{t=new RegExp(e,n)}const l=[];let s=0;for(const e of r.matchAll(t)){const o=Array.from({length:e.length-1},(o,r)=>e[r+1]),r=e.groups?{...e.groups}:null,n=e.indices,t=n?Array.from({length:e.length-1},(e,o)=>n[o+1]):[];l.push({index:s++,value:e[0],groups:o,namedGroups:r,start:e.index,end:e.index+e[0].length,groupIndices:t})}return{matches:l,error:null}}catch(e){return{matches:[],error:e.message}}}(o,X,O),[o,X,O]),ee=(0,n.useMemo)(()=>function(e,o){if(0===o.length)return[e];const r=[];let n=0;for(const t of o){t.start>n&&r.push(e.slice(n,t.start));const o=e.slice(t.start,t.end);if(t.groupIndices.length>0){const o=[];let n=t.start;const l=t.groupIndices.map((e,o)=>e?{...e,gIdx:o}:null).filter(Boolean);l.sort((e,o)=>e[0]-o[0]);for(const r of l){if(r[0]>n&&o.push(e.slice(n,r[0])),r[0]<r[1]){const n=g[r.gIdx%g.length];o.push((0,p.jsx)("span",{style:{background:n.bg,borderBottom:`2px solid ${n.border}`,borderRadius:2},children:e.slice(r[0],r[1])},`g${r.gIdx}`))}n=r[1]}n<t.end&&o.push(e.slice(n,t.end)),r.push((0,p.jsx)(C,{children:o},t.start))}else r.push((0,p.jsx)(C,{children:o},t.start));n=t.end}return n<e.length&&r.push(e.slice(n)),r}(O,Y),[O,Y]),oe=(0,n.useMemo)(()=>{if(!o)return[];const e=/\(\?<([^>]+)>/g,r=[];let n;for(;null!==(n=e.exec(o));)r.push(n[1]);return r},[o]);return(0,p.jsxs)(u,{children:[(0,p.jsxs)(f,{children:[(0,p.jsxs)(h,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,p.jsx)("span",{children:"antis"})]}),(0,p.jsx)(m,{children:"/"}),(0,p.jsxs)(w,{children:["Regex Lab",(0,p.jsx)(b,{children:"live match"})]}),(0,p.jsx)($,{}),(0,p.jsxs)(D,{ref:W,children:[(0,p.jsxs)(J,{onClick:()=>V(e=>!e),children:["Examples ",(0,p.jsx)(a.A,{size:12})]}),U&&(0,p.jsx)(K,{children:c.k.map(e=>(0,p.jsx)(N,{onClick:()=>(e=>{r(e.pattern),l(new Set(e.flags.split(""))),Q(e.text),V(!1)})(e),children:e.label},e.label))})]}),e]}),(0,p.jsxs)(y,{children:[(0,p.jsxs)(j,{children:[(0,p.jsx)(v,{children:"/"}),(0,p.jsx)(k,{hasError:!!Z,value:o,onChange:e=>r(e.target.value),placeholder:"enter regex pattern…",spellCheck:!1}),(0,p.jsx)(v,{children:"/"}),x.map(e=>(0,p.jsx)(z,{active:t.has(e),onClick:()=>(e=>{l(o=>{const r=new Set(o);return r.has(e)?r.delete(e):r.add(e),r})})(e),title:e,children:e},e)),(0,p.jsx)(T,{ok:!Z,children:Z?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.A,{size:13})," ",Z]}):o?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.A,{size:13})," ",Y.length," match",1!==Y.length?"es":""]}):null})]}),(0,p.jsxs)(M,{children:[(0,p.jsxs)(R,{children:[(0,p.jsx)(I,{children:"Test string"}),(0,p.jsx)(F,{value:O,onChange:e=>Q(e.target.value),placeholder:"Paste or type your test string here…",spellCheck:!1})]}),(0,p.jsxs)(R,{children:[(0,p.jsx)(I,{children:"Highlighted matches"}),(0,p.jsx)(B,{children:ee})]})]}),(0,p.jsxs)(E,{children:[(0,p.jsxs)(S,{children:[(0,p.jsxs)(A,{children:[Y.length," match",1!==Y.length?"es":""]}),oe.length>0&&(0,p.jsxs)("span",{children:["Groups:"," ",oe.map((e,o)=>(0,p.jsxs)(q,{colorIndex:o,children:[" ",e]},e))]})]}),(0,p.jsxs)(H,{children:[Y.slice(0,200).map(e=>(0,p.jsxs)(_,{children:[(0,p.jsxs)(L,{children:["#",e.index+1]}),(0,p.jsx)(G,{children:e.value}),e.groups.map((e,o)=>{if(void 0===e)return null;const r=oe[o]??`$${o+1}`;return(0,p.jsxs)(n.Fragment,{children:[(0,p.jsxs)(q,{colorIndex:o,children:[r,":"]}),(0,p.jsx)(P,{colorIndex:o,children:e})]},o)})]},e.index)),Y.length>200&&(0,p.jsxs)(_,{children:[(0,p.jsx)(L,{children:"…"}),(0,p.jsxs)("span",{style:{color:s.w4.colors.mainTextMuted},children:[Y.length-200," more matches not shown"]})]})]})]})]})]})}const Q=document.getElementById("root");if(!Q)throw new Error("Root element #root not found");(0,t.H)(Q).render((0,p.jsx)(O,{}))},8997(e,o,r){var n=r(8991);o.H=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=188.caa2edca296f36de5a71.js.map