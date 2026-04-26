"use strict";(self.webpackChunk_atlantis_regexlab=self.webpackChunk_atlantis_regexlab||[]).push([["362"],{3935(e,r,o){o.r(r),o.d(r,{default:()=>_});var n=o(5723),t=o(7991),s=o.n(t),l=o(6859),a=o.n(l),i=o(6063),d=o(3501),c=o(5151);let p=[{bg:"rgba(56,139,253,0.25)",border:"#388bfd",label:"#388bfd"},{bg:"rgba(63,185,80,0.25)",border:"#3fb950",label:"#3fb950"},{bg:"rgba(210,153,34,0.25)",border:"#d29922",label:"#d29922"},{bg:"rgba(163,113,247,0.25)",border:"#a371f7",label:"#a371f7"},{bg:"rgba(248,113,113,0.25)",border:"#f87171",label:"#f87171"},{bg:"rgba(34,211,238,0.25)",border:"#22d3ee",label:"#22d3ee"}],x=["g","i","m","s","u"],g=a().button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${i.w4.colors.accent};border-radius:${i.w4.borderRadius.md};color:${i.w4.colors.accent};font-size:${i.w4.typography.fontSizeBase};font-family:${i.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background ${i.w4.transitions.base};white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,u=a().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding: ${i.w4.spacing.lg};
  gap: ${i.w4.spacing.md};
`,h=a().div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: 0 ${i.w4.spacing.md};
  height: 44px;
  flex-shrink: 0;
`,f=a().span`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 18px;
  color: ${i.w4.colors.mainTextMuted};
  user-select: none;
`,b=a().input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${e=>e.hasError?"#f87171":i.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${i.w4.colors.mainTextMuted};
  }
`,m=a().button`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>e.active?i.w4.colors.accent:i.w4.colors.border};
  background: ${e=>e.active?"rgba(56,139,253,0.15)":"transparent"};
  color: ${e=>e.active?i.w4.colors.accent:i.w4.colors.mainTextMuted};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${i.w4.transitions.base};

  &:hover {
    border-color: ${i.w4.colors.accent};
    color: ${i.w4.colors.accent};
  }
`,w=a().div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
  white-space: nowrap;
`,$=a().div`
  display: flex;
  flex: 1;
  gap: ${i.w4.spacing.md};
  overflow: hidden;
  min-height: 0;
`,y=a().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,j=a().div`
  font-size: 11px;
  font-weight: 600;
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
`,v=a().textarea`
  flex: 1;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.md};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${i.w4.colors.mainText};
  resize: none;
  outline: none;
  line-height: 1.6;
  transition: border-color ${i.w4.transitions.base};

  &:focus {
    border-color: ${i.w4.colors.accent};
  }

  &::placeholder {
    color: ${i.w4.colors.mainTextMuted};
  }
`,k=a().div`
  flex: 1;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.md};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${i.w4.colors.mainText};
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-all;
  line-height: 1.6;
`,z=a().mark`
  background: rgba(56,139,253,0.15);
  border-radius: 2px;
  color: inherit;
  outline: 1px solid rgba(56,139,253,0.4);
`,I=a().div`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  flex-shrink: 0;
  max-height: 200px;
  overflow-y: auto;
`,S=a().div`
  display: flex;
  align-items: center;
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  border-bottom: 1px solid ${i.w4.colors.border};
  font-size: 11px;
  color: ${i.w4.colors.mainTextMuted};
  gap: ${i.w4.spacing.md};
`,T=a().span`
  font-weight: 600;
  color: ${i.w4.colors.mainText};
`,M=a().div`
  padding: ${i.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,R=a().div`
  display: flex;
  gap: ${i.w4.spacing.sm};
  padding: 4px ${i.w4.spacing.sm};
  border-radius: 4px;
  font-size: 11px;
  font-family: ${i.w4.typography.fontFamilyMono};
  align-items: baseline;
  flex-wrap: wrap;

  &:hover {
    background: ${i.w4.colors.mainBg};
  }
`,C=a().span`
  color: ${i.w4.colors.mainTextMuted};
  min-width: 28px;
  flex-shrink: 0;
`,F=a().span`
  background: rgba(56,139,253,0.12);
  border-radius: 3px;
  padding: 1px 6px;
  color: ${i.w4.colors.mainText};
`,E=a().span`
  border-radius: 3px;
  padding: 1px 6px;
  color: ${i.w4.colors.mainText};
  background: ${e=>p[e.colorIndex%p.length].bg};
  border: 1px solid ${e=>p[e.colorIndex%p.length].border};
  font-size: 11px;
`,B=a().span`
  font-size: 11px;
  color: ${e=>p[e.colorIndex%p.length].label};
  font-weight: 600;
`,J=a().div`
  position: relative;
`,L=a().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${i.w4.spacing.sm};
  height: 30px;
  background: transparent;
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${i.w4.colors.mainTextMuted};
  font-size: 11px;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: all ${i.w4.transitions.base};

  &:hover {
    border-color: ${i.w4.colors.accent};
    color: ${i.w4.colors.mainText};
  }
`,N=a().div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200;
  min-width: 200px;
  overflow: hidden;
`,O=a().button`
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

  &:hover {
    background: ${i.w4.colors.mainBg};
  }
`,A="toolkit:regexlab";function _({topBarRight:e}){let[r,o]=(0,t.useState)(""),[l,a]=(0,t.useState)(new Set),[P,U]=(0,t.useState)(""),[D,G]=(0,t.useState)(!1),[H,K]=(0,t.useState)(!1),[Z,q]=(0,t.useState)(null),Q=(0,t.useRef)(null),V=(0,t.useRef)(!1);(0,t.useEffect)(()=>{(0,i.PL)(A).then(e=>{if(e)try{let r=JSON.parse(e);r.pattern&&o(r.pattern),r.flags&&a(new Set(r.flags)),r.text&&U(r.text)}catch{}V.current=!0})},[]),(0,t.useEffect)(()=>{if(!V.current)return;let e=setTimeout(()=>(0,i.Is)(A,JSON.stringify({pattern:r,flags:[...l],text:P})),400);return()=>clearTimeout(e)},[r,l,P]);let W=async e=>{K(!1),await (0,i.KL)("regexlab",e,JSON.stringify({pattern:r,flags:[...l],text:P})),q(null)},X=async()=>{Z&&(K(!1),await (0,i.mZ)(Z.id,Z.name,JSON.stringify({pattern:r,flags:[...l],text:P})))};(0,t.useEffect)(()=>{let e=e=>{Q.current&&!Q.current.contains(e.target)&&G(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let Y=Array.from(l).join(""),{matches:ee,error:er}=(0,t.useMemo)(()=>(function(e,r,o){if(!e)return{matches:[],error:null};try{let n,t=r.includes("g")?r:r+"g";try{n=RegExp(e,t+"d")}catch{n=new RegExp(e,t)}let s=[],l=0;for(let e of o.matchAll(n)){let r=Array.from({length:e.length-1},(r,o)=>e[o+1]),o=e.groups?{...e.groups}:null,n=e.indices,t=n?Array.from({length:e.length-1},(e,r)=>n[r+1]):[];s.push({index:l++,value:e[0],groups:r,namedGroups:o,start:e.index,end:e.index+e[0].length,groupIndices:t})}return{matches:s,error:null}}catch(e){return{matches:[],error:e.message}}})(r,Y,P),[r,Y,P]),eo=(0,t.useMemo)(()=>(function(e,r){if(0===r.length)return[e];let o=[],t=0;for(let s of r){s.start>t&&o.push(e.slice(t,s.start));let r=e.slice(s.start,s.end);if(s.groupIndices.length>0){let r=[],t=s.start,l=s.groupIndices.map((e,r)=>e?{...e,gIdx:r}:null).filter(Boolean);for(let o of(l.sort((e,r)=>e[0]-r[0]),l)){if(o[0]>t&&r.push(e.slice(t,o[0])),o[0]<o[1]){let t=p[o.gIdx%p.length];r.push((0,n.jsx)("span",{style:{background:t.bg,borderBottom:`2px solid ${t.border}`,borderRadius:2},children:e.slice(o[0],o[1])},`g${o.gIdx}`))}t=o[1]}t<s.end&&r.push(e.slice(t,s.end)),o.push((0,n.jsx)(z,{children:r},s.start))}else o.push((0,n.jsx)(z,{children:r},s.start));t=s.end}return t<e.length&&o.push(e.slice(t)),o})(P,ee),[P,ee]),en=(0,t.useMemo)(()=>{let e;if(!r)return[];let o=/\(\?<([^>]+)>/g,n=[];for(;null!==(e=o.exec(r));)n.push(e[1]);return n},[r]),et=(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,n.jsxs)(L,{onClick:()=>{o(""),a(new Set),U(""),q(null),(0,i.Is)(A,"")},children:[(0,n.jsx)(d.In,{name:"file-plus",size:13})," New"]}),(0,n.jsx)(i.UO,{appId:"regexlab",onLoad:(e,r,n)=>{q(r&&n?{id:r,name:n}:null);try{let{pattern:r,flags:n,text:t}=JSON.parse(e);void 0!==r&&o(r),void 0!==n&&a(new Set(n)),void 0!==t&&U(t)}catch{}}}),(0,n.jsxs)(g,{onClick:()=>K(!0),children:[(0,n.jsx)(d.In,{name:"save",size:14}),"Save"]}),(0,n.jsxs)(J,{ref:Q,children:[(0,n.jsxs)(L,{onClick:()=>G(e=>!e),children:["Examples ",(0,n.jsx)(d.In,{name:"chevron-down",size:12})]}),D&&(0,n.jsx)(N,{children:c.k.map(e=>(0,n.jsx)(O,{onClick:()=>{o(e.pattern),a(new Set(e.flags.split(""))),U(e.text),G(!1)},children:e.label},e.label))})]}),e]});return(0,n.jsxs)(d.PE,{title:"RegexLab",sidebar:(0,n.jsx)(d.tz,{activeAppId:"regexlab"}),topBarRight:et,children:[H&&(0,n.jsx)(d.MJ,{onSave:W,onUpdate:X,existingDoc:Z??void 0,onCancel:()=>K(!1)}),(0,n.jsxs)(u,{children:[(0,n.jsxs)(h,{children:[(0,n.jsx)(f,{children:"/"}),(0,n.jsx)(b,{hasError:!!er,value:r,onChange:e=>o(e.target.value),placeholder:"enter regex pattern…",spellCheck:!1}),(0,n.jsx)(f,{children:"/"}),x.map(e=>(0,n.jsx)(m,{active:l.has(e),onClick:()=>{a(r=>{let o=new Set(r);return o.has(e)?o.delete(e):o.add(e),o})},title:e,children:e},e)),(0,n.jsx)(w,{ok:!er,children:er?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.In,{name:"alert-circle",size:13})," ",er]}):r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.In,{name:"check-circle",size:13})," ",ee.length," match",1!==ee.length?"es":""]}):null})]}),(0,n.jsxs)($,{children:[(0,n.jsxs)(y,{children:[(0,n.jsx)(j,{children:"Test string"}),(0,n.jsx)(v,{value:P,onChange:e=>U(e.target.value),placeholder:"Paste or type your test string here…",spellCheck:!1})]}),(0,n.jsxs)(y,{children:[(0,n.jsx)(j,{children:"Highlighted matches"}),(0,n.jsx)(k,{children:eo})]})]}),(0,n.jsxs)(I,{children:[(0,n.jsxs)(S,{children:[(0,n.jsxs)(T,{children:[ee.length," match",1!==ee.length?"es":""]}),en.length>0&&(0,n.jsxs)("span",{children:["Groups:"," ",en.map((e,r)=>(0,n.jsxs)(B,{colorIndex:r,children:[" ",e]},e))]})]}),(0,n.jsxs)(M,{children:[ee.slice(0,200).map(e=>(0,n.jsxs)(R,{children:[(0,n.jsxs)(C,{children:["#",e.index+1]}),(0,n.jsx)(F,{children:e.value}),e.groups.map((e,r)=>{if(void 0===e)return null;let o=en[r]??`$${r+1}`;return(0,n.jsxs)(s().Fragment,{children:[(0,n.jsxs)(B,{colorIndex:r,children:[o,":"]}),(0,n.jsx)(E,{colorIndex:r,children:e})]},r)})]},e.index)),ee.length>200&&(0,n.jsxs)(R,{children:[(0,n.jsx)(C,{children:"…"}),(0,n.jsxs)("span",{style:{color:i.w4.colors.mainTextMuted},children:[ee.length-200," more matches not shown"]})]})]})]})]})]})}}}]);