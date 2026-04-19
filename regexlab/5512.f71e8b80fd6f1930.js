"use strict";(self.webpackChunk_atlantis_regexlab=self.webpackChunk_atlantis_regexlab||[]).push([["5512"],{8997(e,r,o){var n=o(2727);r.createRoot=n.createRoot,n.hydrateRoot},3611(e,r,o){var n=o(5723),t=o(7991),l=o.n(t),s=o(8997),a=o(6859),i=o.n(a),d=o(9336),c=o(1638),p=o(1344),x=o(6480),g=o(679),u=o(153),h=o(947),f=o(5151);let b=[{bg:"rgba(56,139,253,0.25)",border:"#388bfd",label:"#388bfd"},{bg:"rgba(63,185,80,0.25)",border:"#3fb950",label:"#3fb950"},{bg:"rgba(210,153,34,0.25)",border:"#d29922",label:"#d29922"},{bg:"rgba(163,113,247,0.25)",border:"#a371f7",label:"#a371f7"},{bg:"rgba(248,113,113,0.25)",border:"#f87171",label:"#f87171"},{bg:"rgba(34,211,238,0.25)",border:"#22d3ee",label:"#22d3ee"}],m=["g","i","m","s","u"],w=i().button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${d.w4.colors.accent};border-radius:${d.w4.borderRadius.md};color:${d.w4.colors.accent};font-size:${d.w4.typography.fontSizeBase};font-family:${d.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,$=i().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding: ${d.w4.spacing.lg};
  gap: ${d.w4.spacing.md};
`,y=i().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 0 ${d.w4.spacing.md};
  height: 44px;
  flex-shrink: 0;
`,j=i().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 18px;
  color: ${d.w4.colors.mainTextMuted};
  user-select: none;
`,v=i().input`
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
`,k=i().button`
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
  transition: all 0.15s;

  &:hover {
    border-color: ${d.w4.colors.accent};
    color: ${d.w4.colors.accent};
  }
`,z=i().div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
  white-space: nowrap;
`,S=i().div`
  display: flex;
  flex: 1;
  gap: ${d.w4.spacing.md};
  overflow: hidden;
  min-height: 0;
`,T=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,M=i().div`
  font-size: 11px;
  font-weight: 600;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
`,R=i().textarea`
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
  transition: border-color 0.15s;

  &:focus {
    border-color: ${d.w4.colors.accent};
  }

  &::placeholder {
    color: ${d.w4.colors.mainTextMuted};
  }
`,I=i().div`
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
`,E=i().mark`
  background: rgba(56,139,253,0.15);
  border-radius: 2px;
  color: inherit;
  outline: 1px solid rgba(56,139,253,0.4);
`,C=i().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  flex-shrink: 0;
  max-height: 200px;
  overflow-y: auto;
`,F=i().div`
  display: flex;
  align-items: center;
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.md};
  border-bottom: 1px solid ${d.w4.colors.border};
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  gap: ${d.w4.spacing.md};
`,A=i().span`
  font-weight: 600;
  color: ${d.w4.colors.mainText};
`,B=i().div`
  padding: ${d.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,J=i().div`
  display: flex;
  gap: ${d.w4.spacing.sm};
  padding: 4px ${d.w4.spacing.sm};
  border-radius: 4px;
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  align-items: baseline;
  flex-wrap: wrap;

  &:hover {
    background: ${d.w4.colors.mainBg};
  }
`,L=i().span`
  color: ${d.w4.colors.mainTextMuted};
  min-width: 28px;
  flex-shrink: 0;
`,N=i().span`
  background: rgba(56,139,253,0.12);
  border-radius: 3px;
  padding: 1px 6px;
  color: ${d.w4.colors.mainText};
`,O=i().span`
  border-radius: 3px;
  padding: 1px 6px;
  color: ${d.w4.colors.mainText};
  background: ${e=>b[e.colorIndex%b.length].bg};
  border: 1px solid ${e=>b[e.colorIndex%b.length].border};
  font-size: 11px;
`,_=i().span`
  font-size: 10px;
  color: ${e=>b[e.colorIndex%b.length].label};
  font-weight: 600;
`,P=i().div`
  position: relative;
`,U=i().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${d.w4.spacing.sm};
  height: 30px;
  background: transparent;
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${d.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${d.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${d.w4.colors.accent};
    color: ${d.w4.colors.mainText};
  }
`,D=i().div`
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
`,G=i().button`
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
`,H="toolkit:regexlab",K=document.getElementById("root");if(!K)throw Error("Root element #root not found");(0,s.createRoot)(K).render((0,n.jsx)(function({topBarRight:e}){let[r,o]=(0,t.useState)(""),[s,a]=(0,t.useState)(new Set),[i,K]=(0,t.useState)(""),[Z,q]=(0,t.useState)(!1),[Q,V]=(0,t.useState)(!1),[W,X]=(0,t.useState)(null),Y=(0,t.useRef)(null),ee=(0,t.useRef)(!1);(0,t.useEffect)(()=>{(0,d.PL)(H).then(e=>{if(e)try{let r=JSON.parse(e);r.pattern&&o(r.pattern),r.flags&&a(new Set(r.flags)),r.text&&K(r.text)}catch{}ee.current=!0})},[]),(0,t.useEffect)(()=>{if(!ee.current)return;let e=setTimeout(()=>(0,d.Is)(H,JSON.stringify({pattern:r,flags:[...s],text:i})),400);return()=>clearTimeout(e)},[r,s,i]);let er=async e=>{V(!1),await (0,d.KL)("regexlab",e,JSON.stringify({pattern:r,flags:[...s],text:i})),X(null)},eo=async()=>{W&&(V(!1),await (0,d.mZ)(W.id,W.name,JSON.stringify({pattern:r,flags:[...s],text:i})))};(0,t.useEffect)(()=>{let e=e=>{Y.current&&!Y.current.contains(e.target)&&q(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let en=Array.from(s).join(""),{matches:et,error:el}=(0,t.useMemo)(()=>(function(e,r,o){if(!e)return{matches:[],error:null};try{let n,t=r.includes("g")?r:r+"g";try{n=RegExp(e,t+"d")}catch{n=new RegExp(e,t)}let l=[],s=0;for(let e of o.matchAll(n)){let r=Array.from({length:e.length-1},(r,o)=>e[o+1]),o=e.groups?{...e.groups}:null,n=e.indices,t=n?Array.from({length:e.length-1},(e,r)=>n[r+1]):[];l.push({index:s++,value:e[0],groups:r,namedGroups:o,start:e.index,end:e.index+e[0].length,groupIndices:t})}return{matches:l,error:null}}catch(e){return{matches:[],error:e.message}}})(r,en,i),[r,en,i]),es=(0,t.useMemo)(()=>(function(e,r){if(0===r.length)return[e];let o=[],t=0;for(let l of r){l.start>t&&o.push(e.slice(t,l.start));let r=e.slice(l.start,l.end);if(l.groupIndices.length>0){let r=[],t=l.start,s=l.groupIndices.map((e,r)=>e?{...e,gIdx:r}:null).filter(Boolean);for(let o of(s.sort((e,r)=>e[0]-r[0]),s)){if(o[0]>t&&r.push(e.slice(t,o[0])),o[0]<o[1]){let t=b[o.gIdx%b.length];r.push((0,n.jsx)("span",{style:{background:t.bg,borderBottom:`2px solid ${t.border}`,borderRadius:2},children:e.slice(o[0],o[1])},`g${o.gIdx}`))}t=o[1]}t<l.end&&r.push(e.slice(t,l.end)),o.push((0,n.jsx)(E,{children:r},l.start))}else o.push((0,n.jsx)(E,{children:r},l.start));t=l.end}return t<e.length&&o.push(e.slice(t)),o})(i,et),[i,et]),ea=(0,t.useMemo)(()=>{let e;if(!r)return[];let o=/\(\?<([^>]+)>/g,n=[];for(;null!==(e=o.exec(r));)n.push(e[1]);return n},[r]),ei=(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,n.jsxs)(U,{onClick:()=>{o(""),a(new Set),K(""),X(null),(0,d.Is)(H,"")},children:[(0,n.jsx)(p.A,{size:13})," New"]}),(0,n.jsx)(d.UO,{appId:"regexlab",onLoad:(e,r,n)=>{X(r&&n?{id:r,name:n}:null);try{let{pattern:r,flags:n,text:t}=JSON.parse(e);void 0!==r&&o(r),void 0!==n&&a(new Set(n)),void 0!==t&&K(t)}catch{}}}),(0,n.jsxs)(w,{onClick:()=>V(!0),children:[(0,n.jsx)(x.A,{size:14}),"Save"]}),(0,n.jsxs)(P,{ref:Y,children:[(0,n.jsxs)(U,{onClick:()=>q(e=>!e),children:["Examples ",(0,n.jsx)(g.A,{size:12})]}),Z&&(0,n.jsx)(D,{children:f.k.map(e=>(0,n.jsx)(G,{onClick:()=>{o(e.pattern),a(new Set(e.flags.split(""))),K(e.text),q(!1)},children:e.label},e.label))})]}),e]});return(0,n.jsxs)(d.PE,{title:"RegexLab",sidebar:(0,n.jsx)(c.tz,{activeAppId:"regexlab"}),topBarRight:ei,children:[Q&&(0,n.jsx)(d.MJ,{onSave:er,onUpdate:eo,existingDoc:W??void 0,onCancel:()=>V(!1)}),(0,n.jsxs)($,{children:[(0,n.jsxs)(y,{children:[(0,n.jsx)(j,{children:"/"}),(0,n.jsx)(v,{hasError:!!el,value:r,onChange:e=>o(e.target.value),placeholder:"enter regex pattern…",spellCheck:!1}),(0,n.jsx)(j,{children:"/"}),m.map(e=>(0,n.jsx)(k,{active:s.has(e),onClick:()=>{a(r=>{let o=new Set(r);return o.has(e)?o.delete(e):o.add(e),o})},title:e,children:e},e)),(0,n.jsx)(z,{ok:!el,children:el?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.A,{size:13})," ",el]}):r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.A,{size:13})," ",et.length," match",1!==et.length?"es":""]}):null})]}),(0,n.jsxs)(S,{children:[(0,n.jsxs)(T,{children:[(0,n.jsx)(M,{children:"Test string"}),(0,n.jsx)(R,{value:i,onChange:e=>K(e.target.value),placeholder:"Paste or type your test string here…",spellCheck:!1})]}),(0,n.jsxs)(T,{children:[(0,n.jsx)(M,{children:"Highlighted matches"}),(0,n.jsx)(I,{children:es})]})]}),(0,n.jsxs)(C,{children:[(0,n.jsxs)(F,{children:[(0,n.jsxs)(A,{children:[et.length," match",1!==et.length?"es":""]}),ea.length>0&&(0,n.jsxs)("span",{children:["Groups:"," ",ea.map((e,r)=>(0,n.jsxs)(_,{colorIndex:r,children:[" ",e]},e))]})]}),(0,n.jsxs)(B,{children:[et.slice(0,200).map(e=>(0,n.jsxs)(J,{children:[(0,n.jsxs)(L,{children:["#",e.index+1]}),(0,n.jsx)(N,{children:e.value}),e.groups.map((e,r)=>{if(void 0===e)return null;let o=ea[r]??`$${r+1}`;return(0,n.jsxs)(l().Fragment,{children:[(0,n.jsxs)(_,{colorIndex:r,children:[o,":"]}),(0,n.jsx)(O,{colorIndex:r,children:e})]},r)})]},e.index)),et.length>200&&(0,n.jsxs)(J,{children:[(0,n.jsx)(L,{children:"…"}),(0,n.jsxs)("span",{style:{color:d.w4.colors.mainTextMuted},children:[et.length-200," more matches not shown"]})]})]})]})]})]})},{}))}}]);