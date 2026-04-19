"use strict";(self.webpackChunk_atlantis_regexlab=self.webpackChunk_atlantis_regexlab||[]).push([["6362"],{3935(e,r,o){o.r(r),o.d(r,{default:()=>H});var n=o(5723),t=o(7991),l=o.n(t),s=o(6859),a=o.n(s),i=o(9336),d=o(1638),c=o(1344),p=o(6480),x=o(679),g=o(153),u=o(947),h=o(5151);let f=[{bg:"rgba(56,139,253,0.25)",border:"#388bfd",label:"#388bfd"},{bg:"rgba(63,185,80,0.25)",border:"#3fb950",label:"#3fb950"},{bg:"rgba(210,153,34,0.25)",border:"#d29922",label:"#d29922"},{bg:"rgba(163,113,247,0.25)",border:"#a371f7",label:"#a371f7"},{bg:"rgba(248,113,113,0.25)",border:"#f87171",label:"#f87171"},{bg:"rgba(34,211,238,0.25)",border:"#22d3ee",label:"#22d3ee"}],b=["g","i","m","s","u"],m=a().button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${i.w4.colors.accent};border-radius:${i.w4.borderRadius.md};color:${i.w4.colors.accent};font-size:${i.w4.typography.fontSizeBase};font-family:${i.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,w=a().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding: ${i.w4.spacing.lg};
  gap: ${i.w4.spacing.md};
`,$=a().div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: 0 ${i.w4.spacing.md};
  height: 44px;
  flex-shrink: 0;
`,y=a().span`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 18px;
  color: ${i.w4.colors.mainTextMuted};
  user-select: none;
`,j=a().input`
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
`,v=a().button`
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
  transition: all 0.15s;

  &:hover {
    border-color: ${i.w4.colors.accent};
    color: ${i.w4.colors.accent};
  }
`,k=a().div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
  white-space: nowrap;
`,z=a().div`
  display: flex;
  flex: 1;
  gap: ${i.w4.spacing.md};
  overflow: hidden;
  min-height: 0;
`,S=a().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,T=a().div`
  font-size: 11px;
  font-weight: 600;
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
`,M=a().textarea`
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
  transition: border-color 0.15s;

  &:focus {
    border-color: ${i.w4.colors.accent};
  }

  &::placeholder {
    color: ${i.w4.colors.mainTextMuted};
  }
`,I=a().div`
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
`,R=a().mark`
  background: rgba(56,139,253,0.15);
  border-radius: 2px;
  color: inherit;
  outline: 1px solid rgba(56,139,253,0.4);
`,C=a().div`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  flex-shrink: 0;
  max-height: 200px;
  overflow-y: auto;
`,F=a().div`
  display: flex;
  align-items: center;
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  border-bottom: 1px solid ${i.w4.colors.border};
  font-size: 12px;
  color: ${i.w4.colors.mainTextMuted};
  gap: ${i.w4.spacing.md};
`,E=a().span`
  font-weight: 600;
  color: ${i.w4.colors.mainText};
`,A=a().div`
  padding: ${i.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,B=a().div`
  display: flex;
  gap: ${i.w4.spacing.sm};
  padding: 4px ${i.w4.spacing.sm};
  border-radius: 4px;
  font-size: 12px;
  font-family: ${i.w4.typography.fontFamilyMono};
  align-items: baseline;
  flex-wrap: wrap;

  &:hover {
    background: ${i.w4.colors.mainBg};
  }
`,J=a().span`
  color: ${i.w4.colors.mainTextMuted};
  min-width: 28px;
  flex-shrink: 0;
`,L=a().span`
  background: rgba(56,139,253,0.12);
  border-radius: 3px;
  padding: 1px 6px;
  color: ${i.w4.colors.mainText};
`,N=a().span`
  border-radius: 3px;
  padding: 1px 6px;
  color: ${i.w4.colors.mainText};
  background: ${e=>f[e.colorIndex%f.length].bg};
  border: 1px solid ${e=>f[e.colorIndex%f.length].border};
  font-size: 11px;
`,O=a().span`
  font-size: 10px;
  color: ${e=>f[e.colorIndex%f.length].label};
  font-weight: 600;
`,_=a().div`
  position: relative;
`,P=a().button`
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

  &:hover {
    border-color: ${i.w4.colors.accent};
    color: ${i.w4.colors.mainText};
  }
`,U=a().div`
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
`,D=a().button`
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
`,G="toolkit:regexlab";function H({topBarRight:e}){let[r,o]=(0,t.useState)(""),[s,a]=(0,t.useState)(new Set),[K,Z]=(0,t.useState)(""),[q,Q]=(0,t.useState)(!1),[V,W]=(0,t.useState)(!1),[X,Y]=(0,t.useState)(null),ee=(0,t.useRef)(null),er=(0,t.useRef)(!1);(0,t.useEffect)(()=>{(0,i.PL)(G).then(e=>{if(e)try{let r=JSON.parse(e);r.pattern&&o(r.pattern),r.flags&&a(new Set(r.flags)),r.text&&Z(r.text)}catch{}er.current=!0})},[]),(0,t.useEffect)(()=>{if(!er.current)return;let e=setTimeout(()=>(0,i.Is)(G,JSON.stringify({pattern:r,flags:[...s],text:K})),400);return()=>clearTimeout(e)},[r,s,K]);let eo=async e=>{W(!1),await (0,i.KL)("regexlab",e,JSON.stringify({pattern:r,flags:[...s],text:K})),Y(null)},en=async()=>{X&&(W(!1),await (0,i.mZ)(X.id,X.name,JSON.stringify({pattern:r,flags:[...s],text:K})))};(0,t.useEffect)(()=>{let e=e=>{ee.current&&!ee.current.contains(e.target)&&Q(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let et=Array.from(s).join(""),{matches:el,error:es}=(0,t.useMemo)(()=>(function(e,r,o){if(!e)return{matches:[],error:null};try{let n,t=r.includes("g")?r:r+"g";try{n=RegExp(e,t+"d")}catch{n=new RegExp(e,t)}let l=[],s=0;for(let e of o.matchAll(n)){let r=Array.from({length:e.length-1},(r,o)=>e[o+1]),o=e.groups?{...e.groups}:null,n=e.indices,t=n?Array.from({length:e.length-1},(e,r)=>n[r+1]):[];l.push({index:s++,value:e[0],groups:r,namedGroups:o,start:e.index,end:e.index+e[0].length,groupIndices:t})}return{matches:l,error:null}}catch(e){return{matches:[],error:e.message}}})(r,et,K),[r,et,K]),ea=(0,t.useMemo)(()=>(function(e,r){if(0===r.length)return[e];let o=[],t=0;for(let l of r){l.start>t&&o.push(e.slice(t,l.start));let r=e.slice(l.start,l.end);if(l.groupIndices.length>0){let r=[],t=l.start,s=l.groupIndices.map((e,r)=>e?{...e,gIdx:r}:null).filter(Boolean);for(let o of(s.sort((e,r)=>e[0]-r[0]),s)){if(o[0]>t&&r.push(e.slice(t,o[0])),o[0]<o[1]){let t=f[o.gIdx%f.length];r.push((0,n.jsx)("span",{style:{background:t.bg,borderBottom:`2px solid ${t.border}`,borderRadius:2},children:e.slice(o[0],o[1])},`g${o.gIdx}`))}t=o[1]}t<l.end&&r.push(e.slice(t,l.end)),o.push((0,n.jsx)(R,{children:r},l.start))}else o.push((0,n.jsx)(R,{children:r},l.start));t=l.end}return t<e.length&&o.push(e.slice(t)),o})(K,el),[K,el]),ei=(0,t.useMemo)(()=>{let e;if(!r)return[];let o=/\(\?<([^>]+)>/g,n=[];for(;null!==(e=o.exec(r));)n.push(e[1]);return n},[r]),ed=(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,n.jsxs)(P,{onClick:()=>{o(""),a(new Set),Z(""),Y(null),(0,i.Is)(G,"")},children:[(0,n.jsx)(c.A,{size:13})," New"]}),(0,n.jsx)(i.UO,{appId:"regexlab",onLoad:(e,r,n)=>{Y(r&&n?{id:r,name:n}:null);try{let{pattern:r,flags:n,text:t}=JSON.parse(e);void 0!==r&&o(r),void 0!==n&&a(new Set(n)),void 0!==t&&Z(t)}catch{}}}),(0,n.jsxs)(m,{onClick:()=>W(!0),children:[(0,n.jsx)(p.A,{size:14}),"Save"]}),(0,n.jsxs)(_,{ref:ee,children:[(0,n.jsxs)(P,{onClick:()=>Q(e=>!e),children:["Examples ",(0,n.jsx)(x.A,{size:12})]}),q&&(0,n.jsx)(U,{children:h.k.map(e=>(0,n.jsx)(D,{onClick:()=>{o(e.pattern),a(new Set(e.flags.split(""))),Z(e.text),Q(!1)},children:e.label},e.label))})]}),e]});return(0,n.jsxs)(i.PE,{title:"RegexLab",sidebar:(0,n.jsx)(d.tz,{activeAppId:"regexlab"}),topBarRight:ed,children:[V&&(0,n.jsx)(i.MJ,{onSave:eo,onUpdate:en,existingDoc:X??void 0,onCancel:()=>W(!1)}),(0,n.jsxs)(w,{children:[(0,n.jsxs)($,{children:[(0,n.jsx)(y,{children:"/"}),(0,n.jsx)(j,{hasError:!!es,value:r,onChange:e=>o(e.target.value),placeholder:"enter regex pattern…",spellCheck:!1}),(0,n.jsx)(y,{children:"/"}),b.map(e=>(0,n.jsx)(v,{active:s.has(e),onClick:()=>{a(r=>{let o=new Set(r);return o.has(e)?o.delete(e):o.add(e),o})},title:e,children:e},e)),(0,n.jsx)(k,{ok:!es,children:es?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.A,{size:13})," ",es]}):r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.A,{size:13})," ",el.length," match",1!==el.length?"es":""]}):null})]}),(0,n.jsxs)(z,{children:[(0,n.jsxs)(S,{children:[(0,n.jsx)(T,{children:"Test string"}),(0,n.jsx)(M,{value:K,onChange:e=>Z(e.target.value),placeholder:"Paste or type your test string here…",spellCheck:!1})]}),(0,n.jsxs)(S,{children:[(0,n.jsx)(T,{children:"Highlighted matches"}),(0,n.jsx)(I,{children:ea})]})]}),(0,n.jsxs)(C,{children:[(0,n.jsxs)(F,{children:[(0,n.jsxs)(E,{children:[el.length," match",1!==el.length?"es":""]}),ei.length>0&&(0,n.jsxs)("span",{children:["Groups:"," ",ei.map((e,r)=>(0,n.jsxs)(O,{colorIndex:r,children:[" ",e]},e))]})]}),(0,n.jsxs)(A,{children:[el.slice(0,200).map(e=>(0,n.jsxs)(B,{children:[(0,n.jsxs)(J,{children:["#",e.index+1]}),(0,n.jsx)(L,{children:e.value}),e.groups.map((e,r)=>{if(void 0===e)return null;let o=ei[r]??`$${r+1}`;return(0,n.jsxs)(l().Fragment,{children:[(0,n.jsxs)(O,{colorIndex:r,children:[o,":"]}),(0,n.jsx)(N,{colorIndex:r,children:e})]},r)})]},e.index)),el.length>200&&(0,n.jsxs)(B,{children:[(0,n.jsx)(J,{children:"…"}),(0,n.jsxs)("span",{style:{color:i.w4.colors.mainTextMuted},children:[el.length-200," more matches not shown"]})]})]})]})]})]})}}}]);