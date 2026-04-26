"use strict";(self.webpackChunk_atlantis_regexlab=self.webpackChunk_atlantis_regexlab||[]).push([["512"],{8997(e,r,o){var n=o(2727);r.createRoot=n.createRoot,n.hydrateRoot},3611(e,r,o){var n=o(5723),t=o(7991),s=o.n(t),l=o(8997),a=o(6859),i=o.n(a),d=o(6063),c=o(3501),p=o(5151);let x=[{bg:"rgba(56,139,253,0.25)",border:"#388bfd",label:"#388bfd"},{bg:"rgba(63,185,80,0.25)",border:"#3fb950",label:"#3fb950"},{bg:"rgba(210,153,34,0.25)",border:"#d29922",label:"#d29922"},{bg:"rgba(163,113,247,0.25)",border:"#a371f7",label:"#a371f7"},{bg:"rgba(248,113,113,0.25)",border:"#f87171",label:"#f87171"},{bg:"rgba(34,211,238,0.25)",border:"#22d3ee",label:"#22d3ee"}],g=["g","i","m","s","u"],u=i().button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${d.w4.colors.accent};border-radius:${d.w4.borderRadius.md};color:${d.w4.colors.accent};font-size:${d.w4.typography.fontSizeBase};font-family:${d.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background ${d.w4.transitions.base};white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,h=i().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding: ${d.w4.spacing.lg};
  gap: ${d.w4.spacing.md};
`,f=i().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 0 ${d.w4.spacing.md};
  height: 44px;
  flex-shrink: 0;
`,b=i().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 18px;
  color: ${d.w4.colors.mainTextMuted};
  user-select: none;
`,m=i().input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${e=>e.hasError?"#f87171":d.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${d.w4.colors.mainTextMuted};
  }
`,w=i().button`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>e.active?d.w4.colors.accent:d.w4.colors.border};
  background: ${e=>e.active?"rgba(56,139,253,0.15)":"transparent"};
  color: ${e=>e.active?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${d.w4.transitions.base};

  &:hover {
    border-color: ${d.w4.colors.accent};
    color: ${d.w4.colors.accent};
  }
`,$=i().div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
  white-space: nowrap;
`,y=i().div`
  display: flex;
  flex: 1;
  gap: ${d.w4.spacing.md};
  overflow: hidden;
  min-height: 0;
`,j=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,v=i().div`
  font-size: 11px;
  font-weight: 600;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
`,k=i().textarea`
  flex: 1;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.md};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${d.w4.colors.mainText};
  resize: none;
  outline: none;
  line-height: 1.6;
  transition: border-color ${d.w4.transitions.base};

  &:focus {
    border-color: ${d.w4.colors.accent};
  }

  &::placeholder {
    color: ${d.w4.colors.mainTextMuted};
  }
`,z=i().div`
  flex: 1;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.md};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${d.w4.colors.mainText};
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-all;
  line-height: 1.6;
`,I=i().mark`
  background: rgba(56,139,253,0.15);
  border-radius: 2px;
  color: inherit;
  outline: 1px solid rgba(56,139,253,0.4);
`,S=i().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  flex-shrink: 0;
  max-height: 200px;
  overflow-y: auto;
`,T=i().div`
  display: flex;
  align-items: center;
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.md};
  border-bottom: 1px solid ${d.w4.colors.border};
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  gap: ${d.w4.spacing.md};
`,M=i().span`
  font-weight: 600;
  color: ${d.w4.colors.mainText};
`,R=i().div`
  padding: ${d.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,E=i().div`
  display: flex;
  gap: ${d.w4.spacing.sm};
  padding: 4px ${d.w4.spacing.sm};
  border-radius: 4px;
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  align-items: baseline;
  flex-wrap: wrap;

  &:hover {
    background: ${d.w4.colors.mainBg};
  }
`,C=i().span`
  color: ${d.w4.colors.mainTextMuted};
  min-width: 28px;
  flex-shrink: 0;
`,F=i().span`
  background: rgba(56,139,253,0.12);
  border-radius: 3px;
  padding: 1px 6px;
  color: ${d.w4.colors.mainText};
`,B=i().span`
  border-radius: 3px;
  padding: 1px 6px;
  color: ${d.w4.colors.mainText};
  background: ${e=>x[e.colorIndex%x.length].bg};
  border: 1px solid ${e=>x[e.colorIndex%x.length].border};
  font-size: 11px;
`,J=i().span`
  font-size: 11px;
  color: ${e=>x[e.colorIndex%x.length].label};
  font-weight: 600;
`,L=i().div`
  position: relative;
`,N=i().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${d.w4.spacing.sm};
  height: 30px;
  background: transparent;
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${d.w4.colors.mainTextMuted};
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamily};
  cursor: pointer;
  transition: all ${d.w4.transitions.base};

  &:hover {
    border-color: ${d.w4.colors.accent};
    color: ${d.w4.colors.mainText};
  }
`,O=i().div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200;
  min-width: 200px;
  overflow: hidden;
`,A=i().button`
  display: block;
  width: 100%;
  text-align: left;
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.md};
  background: transparent;
  border: none;
  color: ${d.w4.colors.mainText};
  font-size: 13px;
  font-family: ${d.w4.typography.fontFamily};
  cursor: pointer;

  &:hover {
    background: ${d.w4.colors.mainBg};
  }
`,_="toolkit:regexlab",P=document.getElementById("root");if(!P)throw Error("Root element #root not found");(0,l.createRoot)(P).render((0,n.jsx)(function({topBarRight:e}){let[r,o]=(0,t.useState)(""),[l,a]=(0,t.useState)(new Set),[i,P]=(0,t.useState)(""),[U,D]=(0,t.useState)(!1),[G,H]=(0,t.useState)(!1),[K,Z]=(0,t.useState)(null),q=(0,t.useRef)(null),Q=(0,t.useRef)(!1);(0,t.useEffect)(()=>{(0,d.PL)(_).then(e=>{if(e)try{let r=JSON.parse(e);r.pattern&&o(r.pattern),r.flags&&a(new Set(r.flags)),r.text&&P(r.text)}catch{}Q.current=!0})},[]),(0,t.useEffect)(()=>{if(!Q.current)return;let e=setTimeout(()=>(0,d.Is)(_,JSON.stringify({pattern:r,flags:[...l],text:i})),400);return()=>clearTimeout(e)},[r,l,i]);let V=async e=>{H(!1),await (0,d.KL)("regexlab",e,JSON.stringify({pattern:r,flags:[...l],text:i})),Z(null)},W=async()=>{K&&(H(!1),await (0,d.mZ)(K.id,K.name,JSON.stringify({pattern:r,flags:[...l],text:i})))};(0,t.useEffect)(()=>{let e=e=>{q.current&&!q.current.contains(e.target)&&D(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let X=Array.from(l).join(""),{matches:Y,error:ee}=(0,t.useMemo)(()=>(function(e,r,o){if(!e)return{matches:[],error:null};try{let n,t=r.includes("g")?r:r+"g";try{n=RegExp(e,t+"d")}catch{n=new RegExp(e,t)}let s=[],l=0;for(let e of o.matchAll(n)){let r=Array.from({length:e.length-1},(r,o)=>e[o+1]),o=e.groups?{...e.groups}:null,n=e.indices,t=n?Array.from({length:e.length-1},(e,r)=>n[r+1]):[];s.push({index:l++,value:e[0],groups:r,namedGroups:o,start:e.index,end:e.index+e[0].length,groupIndices:t})}return{matches:s,error:null}}catch(e){return{matches:[],error:e.message}}})(r,X,i),[r,X,i]),er=(0,t.useMemo)(()=>(function(e,r){if(0===r.length)return[e];let o=[],t=0;for(let s of r){s.start>t&&o.push(e.slice(t,s.start));let r=e.slice(s.start,s.end);if(s.groupIndices.length>0){let r=[],t=s.start,l=s.groupIndices.map((e,r)=>e?{...e,gIdx:r}:null).filter(Boolean);for(let o of(l.sort((e,r)=>e[0]-r[0]),l)){if(o[0]>t&&r.push(e.slice(t,o[0])),o[0]<o[1]){let t=x[o.gIdx%x.length];r.push((0,n.jsx)("span",{style:{background:t.bg,borderBottom:`2px solid ${t.border}`,borderRadius:2},children:e.slice(o[0],o[1])},`g${o.gIdx}`))}t=o[1]}t<s.end&&r.push(e.slice(t,s.end)),o.push((0,n.jsx)(I,{children:r},s.start))}else o.push((0,n.jsx)(I,{children:r},s.start));t=s.end}return t<e.length&&o.push(e.slice(t)),o})(i,Y),[i,Y]),eo=(0,t.useMemo)(()=>{let e;if(!r)return[];let o=/\(\?<([^>]+)>/g,n=[];for(;null!==(e=o.exec(r));)n.push(e[1]);return n},[r]),en=(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,n.jsxs)(N,{onClick:()=>{o(""),a(new Set),P(""),Z(null),(0,d.Is)(_,"")},children:[(0,n.jsx)(c.In,{name:"file-plus",size:13})," New"]}),(0,n.jsx)(d.UO,{appId:"regexlab",onLoad:(e,r,n)=>{Z(r&&n?{id:r,name:n}:null);try{let{pattern:r,flags:n,text:t}=JSON.parse(e);void 0!==r&&o(r),void 0!==n&&a(new Set(n)),void 0!==t&&P(t)}catch{}}}),(0,n.jsxs)(u,{onClick:()=>H(!0),children:[(0,n.jsx)(c.In,{name:"save",size:14}),"Save"]}),(0,n.jsxs)(L,{ref:q,children:[(0,n.jsxs)(N,{onClick:()=>D(e=>!e),children:["Examples ",(0,n.jsx)(c.In,{name:"chevron-down",size:12})]}),U&&(0,n.jsx)(O,{children:p.k.map(e=>(0,n.jsx)(A,{onClick:()=>{o(e.pattern),a(new Set(e.flags.split(""))),P(e.text),D(!1)},children:e.label},e.label))})]}),e]});return(0,n.jsxs)(c.PE,{title:"RegexLab",sidebar:(0,n.jsx)(c.tz,{activeAppId:"regexlab"}),topBarRight:en,children:[G&&(0,n.jsx)(c.MJ,{onSave:V,onUpdate:W,existingDoc:K??void 0,onCancel:()=>H(!1)}),(0,n.jsxs)(h,{children:[(0,n.jsxs)(f,{children:[(0,n.jsx)(b,{children:"/"}),(0,n.jsx)(m,{hasError:!!ee,value:r,onChange:e=>o(e.target.value),placeholder:"enter regex pattern…",spellCheck:!1}),(0,n.jsx)(b,{children:"/"}),g.map(e=>(0,n.jsx)(w,{active:l.has(e),onClick:()=>{a(r=>{let o=new Set(r);return o.has(e)?o.delete(e):o.add(e),o})},title:e,children:e},e)),(0,n.jsx)($,{ok:!ee,children:ee?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.In,{name:"alert-circle",size:13})," ",ee]}):r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.In,{name:"check-circle",size:13})," ",Y.length," match",1!==Y.length?"es":""]}):null})]}),(0,n.jsxs)(y,{children:[(0,n.jsxs)(j,{children:[(0,n.jsx)(v,{children:"Test string"}),(0,n.jsx)(k,{value:i,onChange:e=>P(e.target.value),placeholder:"Paste or type your test string here…",spellCheck:!1})]}),(0,n.jsxs)(j,{children:[(0,n.jsx)(v,{children:"Highlighted matches"}),(0,n.jsx)(z,{children:er})]})]}),(0,n.jsxs)(S,{children:[(0,n.jsxs)(T,{children:[(0,n.jsxs)(M,{children:[Y.length," match",1!==Y.length?"es":""]}),eo.length>0&&(0,n.jsxs)("span",{children:["Groups:"," ",eo.map((e,r)=>(0,n.jsxs)(J,{colorIndex:r,children:[" ",e]},e))]})]}),(0,n.jsxs)(R,{children:[Y.slice(0,200).map(e=>(0,n.jsxs)(E,{children:[(0,n.jsxs)(C,{children:["#",e.index+1]}),(0,n.jsx)(F,{children:e.value}),e.groups.map((e,r)=>{if(void 0===e)return null;let o=eo[r]??`$${r+1}`;return(0,n.jsxs)(s().Fragment,{children:[(0,n.jsxs)(J,{colorIndex:r,children:[o,":"]}),(0,n.jsx)(B,{colorIndex:r,children:e})]},r)})]},e.index)),Y.length>200&&(0,n.jsxs)(E,{children:[(0,n.jsx)(C,{children:"…"}),(0,n.jsxs)("span",{style:{color:d.w4.colors.mainTextMuted},children:[Y.length-200," more matches not shown"]})]})]})]})]})]})},{}))}}]);