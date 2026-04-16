"use strict";(self.webpackChunk_atlantis_regexlab=self.webpackChunk_atlantis_regexlab||[]).push([[188],{188(e,r,o){var t=o(7359),n=o(8997),s=o(3233),a=o(894),l=o(1344),i=o(6480),d=o(679),c=o(153),p=o(947),u=o(9336),x=o(5723);const g=[{bg:"rgba(56,139,253,0.25)",border:"#388bfd",label:"#388bfd"},{bg:"rgba(63,185,80,0.25)",border:"#3fb950",label:"#3fb950"},{bg:"rgba(210,153,34,0.25)",border:"#d29922",label:"#d29922"},{bg:"rgba(163,113,247,0.25)",border:"#a371f7",label:"#a371f7"},{bg:"rgba(248,113,113,0.25)",border:"#f87171",label:"#f87171"},{bg:"rgba(34,211,238,0.25)",border:"#22d3ee",label:"#22d3ee"}],f=["g","i","m","s","u"],h=s.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${a.w4.colors.accent};border-radius:${a.w4.borderRadius.md};color:${a.w4.colors.accent};font-size:${a.w4.typography.fontSizeBase};font-family:${a.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,b=s.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding: ${a.w4.spacing.lg};
  gap: ${a.w4.spacing.md};
`,m=s.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  padding: 0 ${a.w4.spacing.md};
  height: 44px;
  flex-shrink: 0;
`,w=s.default.span`
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 18px;
  color: ${a.w4.colors.mainTextMuted};
  user-select: none;
`,$=s.default.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: ${a.w4.typography.fontSizeBase};
  color: ${e=>e.hasError?"#f87171":a.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${a.w4.colors.mainTextMuted};
  }
`,y=s.default.button`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>e.active?a.w4.colors.accent:a.w4.colors.border};
  background: ${e=>e.active?"rgba(56,139,253,0.15)":"transparent"};
  color: ${e=>e.active?a.w4.colors.accent:a.w4.colors.mainTextMuted};
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 11px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;

  &:hover {
    border-color: ${a.w4.colors.accent};
    color: ${a.w4.colors.accent};
  }
`,j=s.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
  white-space: nowrap;
`,v=s.default.div`
  display: flex;
  flex: 1;
  gap: ${a.w4.spacing.md};
  overflow: hidden;
  min-height: 0;
`,k=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,z=s.default.div`
  font-size: 11px;
  font-weight: 600;
  color: ${a.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
`,S=s.default.textarea`
  flex: 1;
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  padding: ${a.w4.spacing.md};
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${a.w4.colors.mainText};
  resize: none;
  outline: none;
  line-height: 1.6;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${a.w4.colors.accent};
  }

  &::placeholder {
    color: ${a.w4.colors.mainTextMuted};
  }
`,T=s.default.div`
  flex: 1;
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  padding: ${a.w4.spacing.md};
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${a.w4.colors.mainText};
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-all;
  line-height: 1.6;
`,M=s.default.mark`
  background: rgba(56,139,253,0.15);
  border-radius: 2px;
  color: inherit;
  outline: 1px solid rgba(56,139,253,0.4);
`,I=s.default.div`
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  flex-shrink: 0;
  max-height: 200px;
  overflow-y: auto;
`,R=s.default.div`
  display: flex;
  align-items: center;
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.border};
  font-size: 12px;
  color: ${a.w4.colors.mainTextMuted};
  gap: ${a.w4.spacing.md};
`,E=s.default.span`
  font-weight: 600;
  color: ${a.w4.colors.mainText};
`,C=s.default.div`
  padding: ${a.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,F=s.default.div`
  display: flex;
  gap: ${a.w4.spacing.sm};
  padding: 4px ${a.w4.spacing.sm};
  border-radius: 4px;
  font-size: 12px;
  font-family: ${a.w4.typography.fontFamilyMono};
  align-items: baseline;
  flex-wrap: wrap;

  &:hover {
    background: ${a.w4.colors.mainBg};
  }
`,A=s.default.span`
  color: ${a.w4.colors.mainTextMuted};
  min-width: 28px;
  flex-shrink: 0;
`,B=s.default.span`
  background: rgba(56,139,253,0.12);
  border-radius: 3px;
  padding: 1px 6px;
  color: ${a.w4.colors.mainText};
`,J=s.default.span`
  border-radius: 3px;
  padding: 1px 6px;
  color: ${a.w4.colors.mainText};
  background: ${e=>g[e.colorIndex%g.length].bg};
  border: 1px solid ${e=>g[e.colorIndex%g.length].border};
  font-size: 11px;
`,L=s.default.span`
  font-size: 10px;
  color: ${e=>g[e.colorIndex%g.length].label};
  font-weight: 600;
`,N=s.default.div`
  position: relative;
`,O=s.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${a.w4.spacing.sm};
  height: 30px;
  background: transparent;
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${a.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${a.w4.colors.accent};
    color: ${a.w4.colors.mainText};
  }
`,_=s.default.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200;
  min-width: 200px;
  overflow: hidden;
`,H=s.default.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  background: transparent;
  border: none;
  color: ${a.w4.colors.mainText};
  font-size: 13px;
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;

  &:hover {
    background: ${a.w4.colors.mainBg};
  }
`,P="toolkit:regexlab";function G({topBarRight:e}){const[r,o]=(0,t.useState)(""),[n,s]=(0,t.useState)(new Set),[G,U]=(0,t.useState)(""),[D,K]=(0,t.useState)(!1),[Z,q]=(0,t.useState)(!1),[Q,V]=(0,t.useState)(null),W=(0,t.useRef)(null),X=(0,t.useRef)(!1);(0,t.useEffect)(()=>{(0,a.PL)(P).then(e=>{if(e)try{const r=JSON.parse(e);r.pattern&&o(r.pattern),r.flags&&s(new Set(r.flags)),r.text&&U(r.text)}catch{}X.current=!0})},[]),(0,t.useEffect)(()=>{if(!X.current)return;const e=setTimeout(()=>(0,a.Is)(P,JSON.stringify({pattern:r,flags:[...n],text:G})),400);return()=>clearTimeout(e)},[r,n,G]),(0,t.useEffect)(()=>{const e=e=>{W.current&&!W.current.contains(e.target)&&K(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const Y=Array.from(n).join(""),{matches:ee,error:re}=(0,t.useMemo)(()=>function(e,r,o){if(!e)return{matches:[],error:null};try{const t=r.includes("g")?r:r+"g";let n;try{n=new RegExp(e,t+"d")}catch{n=new RegExp(e,t)}const s=[];let a=0;for(const e of o.matchAll(n)){const r=Array.from({length:e.length-1},(r,o)=>e[o+1]),o=e.groups?{...e.groups}:null,t=e.indices,n=t?Array.from({length:e.length-1},(e,r)=>t[r+1]):[];s.push({index:a++,value:e[0],groups:r,namedGroups:o,start:e.index,end:e.index+e[0].length,groupIndices:n})}return{matches:s,error:null}}catch(e){return{matches:[],error:e.message}}}(r,Y,G),[r,Y,G]),oe=(0,t.useMemo)(()=>function(e,r){if(0===r.length)return[e];const o=[];let t=0;for(const n of r){n.start>t&&o.push(e.slice(t,n.start));const r=e.slice(n.start,n.end);if(n.groupIndices.length>0){const r=[];let t=n.start;const s=n.groupIndices.map((e,r)=>e?{...e,gIdx:r}:null).filter(Boolean);s.sort((e,r)=>e[0]-r[0]);for(const o of s){if(o[0]>t&&r.push(e.slice(t,o[0])),o[0]<o[1]){const t=g[o.gIdx%g.length];r.push((0,x.jsx)("span",{style:{background:t.bg,borderBottom:`2px solid ${t.border}`,borderRadius:2},children:e.slice(o[0],o[1])},`g${o.gIdx}`))}t=o[1]}t<n.end&&r.push(e.slice(t,n.end)),o.push((0,x.jsx)(M,{children:r},n.start))}else o.push((0,x.jsx)(M,{children:r},n.start));t=n.end}return t<e.length&&o.push(e.slice(t)),o}(G,ee),[G,ee]),te=(0,t.useMemo)(()=>{if(!r)return[];const e=/\(\?<([^>]+)>/g,o=[];let t;for(;null!==(t=e.exec(r));)o.push(t[1]);return o},[r]),ne=(0,x.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,x.jsxs)(O,{onClick:()=>{o(""),s(new Set),U(""),V(null),(0,a.Is)(P,"")},children:[(0,x.jsx)(l.A,{size:13})," New"]}),(0,x.jsx)(a.UO,{appId:"regexlab",onLoad:(e,r,t)=>{V(r&&t?{id:r,name:t}:null);try{const{pattern:r,flags:t,text:n}=JSON.parse(e);void 0!==r&&o(r),void 0!==t&&s(new Set(t)),void 0!==n&&U(n)}catch{}}}),(0,x.jsxs)(h,{onClick:()=>q(!0),children:[(0,x.jsx)(i.A,{size:14}),"Save"]}),(0,x.jsxs)(N,{ref:W,children:[(0,x.jsxs)(O,{onClick:()=>K(e=>!e),children:["Examples ",(0,x.jsx)(d.A,{size:12})]}),D&&(0,x.jsx)(_,{children:u.k.map(e=>(0,x.jsx)(H,{onClick:()=>(e=>{o(e.pattern),s(new Set(e.flags.split(""))),U(e.text),K(!1)})(e),children:e.label},e.label))})]}),e]});return(0,x.jsxs)(a.PE,{title:"RegexLab",sidebar:(0,x.jsx)(a.tz,{activeAppId:"regexlab"}),topBarRight:ne,children:[Z&&(0,x.jsx)(a.MJ,{onSave:async e=>{q(!1),await(0,a.KL)("regexlab",e,JSON.stringify({pattern:r,flags:[...n],text:G})),V(null)},onUpdate:async()=>{Q&&(q(!1),await(0,a.mZ)(Q.id,Q.name,JSON.stringify({pattern:r,flags:[...n],text:G})))},existingDoc:Q??void 0,onCancel:()=>q(!1)}),(0,x.jsxs)(b,{children:[(0,x.jsxs)(m,{children:[(0,x.jsx)(w,{children:"/"}),(0,x.jsx)($,{hasError:!!re,value:r,onChange:e=>o(e.target.value),placeholder:"enter regex pattern…",spellCheck:!1}),(0,x.jsx)(w,{children:"/"}),f.map(e=>(0,x.jsx)(y,{active:n.has(e),onClick:()=>(e=>{s(r=>{const o=new Set(r);return o.has(e)?o.delete(e):o.add(e),o})})(e),title:e,children:e},e)),(0,x.jsx)(j,{ok:!re,children:re?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.A,{size:13})," ",re]}):r?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.A,{size:13})," ",ee.length," match",1!==ee.length?"es":""]}):null})]}),(0,x.jsxs)(v,{children:[(0,x.jsxs)(k,{children:[(0,x.jsx)(z,{children:"Test string"}),(0,x.jsx)(S,{value:G,onChange:e=>U(e.target.value),placeholder:"Paste or type your test string here…",spellCheck:!1})]}),(0,x.jsxs)(k,{children:[(0,x.jsx)(z,{children:"Highlighted matches"}),(0,x.jsx)(T,{children:oe})]})]}),(0,x.jsxs)(I,{children:[(0,x.jsxs)(R,{children:[(0,x.jsxs)(E,{children:[ee.length," match",1!==ee.length?"es":""]}),te.length>0&&(0,x.jsxs)("span",{children:["Groups:"," ",te.map((e,r)=>(0,x.jsxs)(L,{colorIndex:r,children:[" ",e]},e))]})]}),(0,x.jsxs)(C,{children:[ee.slice(0,200).map(e=>(0,x.jsxs)(F,{children:[(0,x.jsxs)(A,{children:["#",e.index+1]}),(0,x.jsx)(B,{children:e.value}),e.groups.map((e,r)=>{if(void 0===e)return null;const o=te[r]??`$${r+1}`;return(0,x.jsxs)(t.Fragment,{children:[(0,x.jsxs)(L,{colorIndex:r,children:[o,":"]}),(0,x.jsx)(J,{colorIndex:r,children:e})]},r)})]},e.index)),ee.length>200&&(0,x.jsxs)(F,{children:[(0,x.jsx)(A,{children:"…"}),(0,x.jsxs)("span",{style:{color:a.w4.colors.mainTextMuted},children:[ee.length-200," more matches not shown"]})]})]})]})]})]})}const U=document.getElementById("root");if(!U)throw new Error("Root element #root not found");(0,n.H)(U).render((0,x.jsx)(G,{}))},8997(e,r,o){var t=o(8991);r.H=t.createRoot,t.hydrateRoot}}]);
//# sourceMappingURL=188.40f01663eeede65c3a10.js.map