"use strict";(self.webpackChunk_atlantis_regexlab=self.webpackChunk_atlantis_regexlab||[]).push([[188],{188(e,r,o){var t=o(7359),n=o(8997),s=o(3233),a=o(9200),l=o(8608),i=o(1344),d=o(6480),c=o(679),p=o(153),u=o(947),x=o(9336),g=o(5723);const f=[{bg:"rgba(56,139,253,0.25)",border:"#388bfd",label:"#388bfd"},{bg:"rgba(63,185,80,0.25)",border:"#3fb950",label:"#3fb950"},{bg:"rgba(210,153,34,0.25)",border:"#d29922",label:"#d29922"},{bg:"rgba(163,113,247,0.25)",border:"#a371f7",label:"#a371f7"},{bg:"rgba(248,113,113,0.25)",border:"#f87171",label:"#f87171"},{bg:"rgba(34,211,238,0.25)",border:"#22d3ee",label:"#22d3ee"}],h=["g","i","m","s","u"],b=s.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${a.w4.colors.accent};border-radius:${a.w4.borderRadius.md};color:${a.w4.colors.accent};font-size:${a.w4.typography.fontSizeBase};font-family:${a.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,m=s.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding: ${a.w4.spacing.lg};
  gap: ${a.w4.spacing.md};
`,w=s.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  padding: 0 ${a.w4.spacing.md};
  height: 44px;
  flex-shrink: 0;
`,$=s.default.span`
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 18px;
  color: ${a.w4.colors.mainTextMuted};
  user-select: none;
`,y=s.default.input`
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
`,j=s.default.button`
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
`,v=s.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
  white-space: nowrap;
`,k=s.default.div`
  display: flex;
  flex: 1;
  gap: ${a.w4.spacing.md};
  overflow: hidden;
  min-height: 0;
`,z=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,S=s.default.div`
  font-size: 11px;
  font-weight: 600;
  color: ${a.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
`,T=s.default.textarea`
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
`,M=s.default.div`
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
`,I=s.default.mark`
  background: rgba(56,139,253,0.15);
  border-radius: 2px;
  color: inherit;
  outline: 1px solid rgba(56,139,253,0.4);
`,R=s.default.div`
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  flex-shrink: 0;
  max-height: 200px;
  overflow-y: auto;
`,E=s.default.div`
  display: flex;
  align-items: center;
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.border};
  font-size: 12px;
  color: ${a.w4.colors.mainTextMuted};
  gap: ${a.w4.spacing.md};
`,C=s.default.span`
  font-weight: 600;
  color: ${a.w4.colors.mainText};
`,F=s.default.div`
  padding: ${a.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,A=s.default.div`
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
`,B=s.default.span`
  color: ${a.w4.colors.mainTextMuted};
  min-width: 28px;
  flex-shrink: 0;
`,J=s.default.span`
  background: rgba(56,139,253,0.12);
  border-radius: 3px;
  padding: 1px 6px;
  color: ${a.w4.colors.mainText};
`,L=s.default.span`
  border-radius: 3px;
  padding: 1px 6px;
  color: ${a.w4.colors.mainText};
  background: ${e=>f[e.colorIndex%f.length].bg};
  border: 1px solid ${e=>f[e.colorIndex%f.length].border};
  font-size: 11px;
`,N=s.default.span`
  font-size: 10px;
  color: ${e=>f[e.colorIndex%f.length].label};
  font-weight: 600;
`,O=s.default.div`
  position: relative;
`,_=s.default.button`
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
`,H=s.default.div`
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
`,P=s.default.button`
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
`,G="toolkit:regexlab";function U({topBarRight:e}){const[r,o]=(0,t.useState)(""),[n,s]=(0,t.useState)(new Set),[U,D]=(0,t.useState)(""),[K,Z]=(0,t.useState)(!1),[q,Q]=(0,t.useState)(!1),[V,W]=(0,t.useState)(null),X=(0,t.useRef)(null),Y=(0,t.useRef)(!1);(0,t.useEffect)(()=>{(0,a.PL)(G).then(e=>{if(e)try{const r=JSON.parse(e);r.pattern&&o(r.pattern),r.flags&&s(new Set(r.flags)),r.text&&D(r.text)}catch{}Y.current=!0})},[]),(0,t.useEffect)(()=>{if(!Y.current)return;const e=setTimeout(()=>(0,a.Is)(G,JSON.stringify({pattern:r,flags:[...n],text:U})),400);return()=>clearTimeout(e)},[r,n,U]),(0,t.useEffect)(()=>{const e=e=>{X.current&&!X.current.contains(e.target)&&Z(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const ee=Array.from(n).join(""),{matches:re,error:oe}=(0,t.useMemo)(()=>function(e,r,o){if(!e)return{matches:[],error:null};try{const t=r.includes("g")?r:r+"g";let n;try{n=new RegExp(e,t+"d")}catch{n=new RegExp(e,t)}const s=[];let a=0;for(const e of o.matchAll(n)){const r=Array.from({length:e.length-1},(r,o)=>e[o+1]),o=e.groups?{...e.groups}:null,t=e.indices,n=t?Array.from({length:e.length-1},(e,r)=>t[r+1]):[];s.push({index:a++,value:e[0],groups:r,namedGroups:o,start:e.index,end:e.index+e[0].length,groupIndices:n})}return{matches:s,error:null}}catch(e){return{matches:[],error:e.message}}}(r,ee,U),[r,ee,U]),te=(0,t.useMemo)(()=>function(e,r){if(0===r.length)return[e];const o=[];let t=0;for(const n of r){n.start>t&&o.push(e.slice(t,n.start));const r=e.slice(n.start,n.end);if(n.groupIndices.length>0){const r=[];let t=n.start;const s=n.groupIndices.map((e,r)=>e?{...e,gIdx:r}:null).filter(Boolean);s.sort((e,r)=>e[0]-r[0]);for(const o of s){if(o[0]>t&&r.push(e.slice(t,o[0])),o[0]<o[1]){const t=f[o.gIdx%f.length];r.push((0,g.jsx)("span",{style:{background:t.bg,borderBottom:`2px solid ${t.border}`,borderRadius:2},children:e.slice(o[0],o[1])},`g${o.gIdx}`))}t=o[1]}t<n.end&&r.push(e.slice(t,n.end)),o.push((0,g.jsx)(I,{children:r},n.start))}else o.push((0,g.jsx)(I,{children:r},n.start));t=n.end}return t<e.length&&o.push(e.slice(t)),o}(U,re),[U,re]),ne=(0,t.useMemo)(()=>{if(!r)return[];const e=/\(\?<([^>]+)>/g,o=[];let t;for(;null!==(t=e.exec(r));)o.push(t[1]);return o},[r]),se=(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,g.jsxs)(_,{onClick:()=>{o(""),s(new Set),D(""),W(null),(0,a.Is)(G,"")},children:[(0,g.jsx)(i.A,{size:13})," New"]}),(0,g.jsx)(a.UO,{appId:"regexlab",onLoad:(e,r,t)=>{W(r&&t?{id:r,name:t}:null);try{const{pattern:r,flags:t,text:n}=JSON.parse(e);void 0!==r&&o(r),void 0!==t&&s(new Set(t)),void 0!==n&&D(n)}catch{}}}),(0,g.jsxs)(b,{onClick:()=>Q(!0),children:[(0,g.jsx)(d.A,{size:14}),"Save"]}),(0,g.jsxs)(O,{ref:X,children:[(0,g.jsxs)(_,{onClick:()=>Z(e=>!e),children:["Examples ",(0,g.jsx)(c.A,{size:12})]}),K&&(0,g.jsx)(H,{children:x.k.map(e=>(0,g.jsx)(P,{onClick:()=>(e=>{o(e.pattern),s(new Set(e.flags.split(""))),D(e.text),Z(!1)})(e),children:e.label},e.label))})]}),e]});return(0,g.jsxs)(a.PE,{title:"RegexLab",sidebar:(0,g.jsx)(l.tz,{activeAppId:"regexlab"}),topBarRight:se,children:[q&&(0,g.jsx)(a.MJ,{onSave:async e=>{Q(!1),await(0,a.KL)("regexlab",e,JSON.stringify({pattern:r,flags:[...n],text:U})),W(null)},onUpdate:async()=>{V&&(Q(!1),await(0,a.mZ)(V.id,V.name,JSON.stringify({pattern:r,flags:[...n],text:U})))},existingDoc:V??void 0,onCancel:()=>Q(!1)}),(0,g.jsxs)(m,{children:[(0,g.jsxs)(w,{children:[(0,g.jsx)($,{children:"/"}),(0,g.jsx)(y,{hasError:!!oe,value:r,onChange:e=>o(e.target.value),placeholder:"enter regex pattern…",spellCheck:!1}),(0,g.jsx)($,{children:"/"}),h.map(e=>(0,g.jsx)(j,{active:n.has(e),onClick:()=>(e=>{s(r=>{const o=new Set(r);return o.has(e)?o.delete(e):o.add(e),o})})(e),title:e,children:e},e)),(0,g.jsx)(v,{ok:!oe,children:oe?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p.A,{size:13})," ",oe]}):r?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u.A,{size:13})," ",re.length," match",1!==re.length?"es":""]}):null})]}),(0,g.jsxs)(k,{children:[(0,g.jsxs)(z,{children:[(0,g.jsx)(S,{children:"Test string"}),(0,g.jsx)(T,{value:U,onChange:e=>D(e.target.value),placeholder:"Paste or type your test string here…",spellCheck:!1})]}),(0,g.jsxs)(z,{children:[(0,g.jsx)(S,{children:"Highlighted matches"}),(0,g.jsx)(M,{children:te})]})]}),(0,g.jsxs)(R,{children:[(0,g.jsxs)(E,{children:[(0,g.jsxs)(C,{children:[re.length," match",1!==re.length?"es":""]}),ne.length>0&&(0,g.jsxs)("span",{children:["Groups:"," ",ne.map((e,r)=>(0,g.jsxs)(N,{colorIndex:r,children:[" ",e]},e))]})]}),(0,g.jsxs)(F,{children:[re.slice(0,200).map(e=>(0,g.jsxs)(A,{children:[(0,g.jsxs)(B,{children:["#",e.index+1]}),(0,g.jsx)(J,{children:e.value}),e.groups.map((e,r)=>{if(void 0===e)return null;const o=ne[r]??`$${r+1}`;return(0,g.jsxs)(t.Fragment,{children:[(0,g.jsxs)(N,{colorIndex:r,children:[o,":"]}),(0,g.jsx)(L,{colorIndex:r,children:e})]},r)})]},e.index)),re.length>200&&(0,g.jsxs)(A,{children:[(0,g.jsx)(B,{children:"…"}),(0,g.jsxs)("span",{style:{color:a.w4.colors.mainTextMuted},children:[re.length-200," more matches not shown"]})]})]})]})]})]})}const D=document.getElementById("root");if(!D)throw new Error("Root element #root not found");(0,n.H)(D).render((0,g.jsx)(U,{}))},8997(e,r,o){var t=o(8991);r.H=t.createRoot,t.hydrateRoot}}]);