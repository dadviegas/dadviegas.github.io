"use strict";(self.webpackChunk_atlantis_regexlab=self.webpackChunk_atlantis_regexlab||[]).push([[36],{6036(e,r,o){o.r(r),o.d(r,{default:()=>G});var t=o(7359),n=o(3233),s=o(6879),a=o(153),l=o(947),i=o(679),d=o(1344),c=o(6480),p=o(9336),u=o(5723);const x=[{bg:"rgba(56,139,253,0.25)",border:"#388bfd",label:"#388bfd"},{bg:"rgba(63,185,80,0.25)",border:"#3fb950",label:"#3fb950"},{bg:"rgba(210,153,34,0.25)",border:"#d29922",label:"#d29922"},{bg:"rgba(163,113,247,0.25)",border:"#a371f7",label:"#a371f7"},{bg:"rgba(248,113,113,0.25)",border:"#f87171",label:"#f87171"},{bg:"rgba(34,211,238,0.25)",border:"#22d3ee",label:"#22d3ee"}],g=["g","i","m","s","u"],f=n.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${s.w4.colors.accent};border-radius:${s.w4.borderRadius.md};color:${s.w4.colors.accent};font-size:${s.w4.typography.fontSizeBase};font-family:${s.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,h=n.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding: ${s.w4.spacing.lg};
  gap: ${s.w4.spacing.md};
`,b=n.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 0 ${s.w4.spacing.md};
  height: 44px;
  flex-shrink: 0;
`,m=n.default.span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 18px;
  color: ${s.w4.colors.mainTextMuted};
  user-select: none;
`,w=n.default.input`
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
`,$=n.default.button`
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
`,y=n.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
  white-space: nowrap;
`,j=n.default.div`
  display: flex;
  flex: 1;
  gap: ${s.w4.spacing.md};
  overflow: hidden;
  min-height: 0;
`,v=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,k=n.default.div`
  font-size: 11px;
  font-weight: 600;
  color: ${s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
`,z=n.default.textarea`
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
`,S=n.default.div`
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
`,T=n.default.mark`
  background: rgba(56,139,253,0.15);
  border-radius: 2px;
  color: inherit;
  outline: 1px solid rgba(56,139,253,0.4);
`,M=n.default.div`
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  flex-shrink: 0;
  max-height: 200px;
  overflow-y: auto;
`,I=n.default.div`
  display: flex;
  align-items: center;
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  border-bottom: 1px solid ${s.w4.colors.border};
  font-size: 12px;
  color: ${s.w4.colors.mainTextMuted};
  gap: ${s.w4.spacing.md};
`,R=n.default.span`
  font-weight: 600;
  color: ${s.w4.colors.mainText};
`,C=n.default.div`
  padding: ${s.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,F=n.default.div`
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
`,E=n.default.span`
  color: ${s.w4.colors.mainTextMuted};
  min-width: 28px;
  flex-shrink: 0;
`,A=n.default.span`
  background: rgba(56,139,253,0.12);
  border-radius: 3px;
  padding: 1px 6px;
  color: ${s.w4.colors.mainText};
`,B=n.default.span`
  border-radius: 3px;
  padding: 1px 6px;
  color: ${s.w4.colors.mainText};
  background: ${e=>x[e.colorIndex%x.length].bg};
  border: 1px solid ${e=>x[e.colorIndex%x.length].border};
  font-size: 11px;
`,J=n.default.span`
  font-size: 10px;
  color: ${e=>x[e.colorIndex%x.length].label};
  font-weight: 600;
`,L=n.default.div`
  position: relative;
`,N=n.default.button`
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
`,O=n.default.div`
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
`,_=n.default.button`
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
`,P="toolkit:regexlab";function G({topBarRight:e}){const[r,o]=(0,t.useState)(""),[n,G]=(0,t.useState)(new Set),[U,D]=(0,t.useState)(""),[H,K]=(0,t.useState)(!1),[Z,q]=(0,t.useState)(!1),[Q,V]=(0,t.useState)(null),W=(0,t.useRef)(null),X=(0,t.useRef)(!1);(0,t.useEffect)(()=>{(0,s.PL)(P).then(e=>{if(e)try{const r=JSON.parse(e);r.pattern&&o(r.pattern),r.flags&&G(new Set(r.flags)),r.text&&D(r.text)}catch{}X.current=!0})},[]),(0,t.useEffect)(()=>{if(!X.current)return;const e=setTimeout(()=>(0,s.Is)(P,JSON.stringify({pattern:r,flags:[...n],text:U})),400);return()=>clearTimeout(e)},[r,n,U]),(0,t.useEffect)(()=>{const e=e=>{W.current&&!W.current.contains(e.target)&&K(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const Y=Array.from(n).join(""),{matches:ee,error:re}=(0,t.useMemo)(()=>function(e,r,o){if(!e)return{matches:[],error:null};try{const t=r.includes("g")?r:r+"g";let n;try{n=new RegExp(e,t+"d")}catch{n=new RegExp(e,t)}const s=[];let a=0;for(const e of o.matchAll(n)){const r=Array.from({length:e.length-1},(r,o)=>e[o+1]),o=e.groups?{...e.groups}:null,t=e.indices,n=t?Array.from({length:e.length-1},(e,r)=>t[r+1]):[];s.push({index:a++,value:e[0],groups:r,namedGroups:o,start:e.index,end:e.index+e[0].length,groupIndices:n})}return{matches:s,error:null}}catch(e){return{matches:[],error:e.message}}}(r,Y,U),[r,Y,U]),oe=(0,t.useMemo)(()=>function(e,r){if(0===r.length)return[e];const o=[];let t=0;for(const n of r){n.start>t&&o.push(e.slice(t,n.start));const r=e.slice(n.start,n.end);if(n.groupIndices.length>0){const r=[];let t=n.start;const s=n.groupIndices.map((e,r)=>e?{...e,gIdx:r}:null).filter(Boolean);s.sort((e,r)=>e[0]-r[0]);for(const o of s){if(o[0]>t&&r.push(e.slice(t,o[0])),o[0]<o[1]){const t=x[o.gIdx%x.length];r.push((0,u.jsx)("span",{style:{background:t.bg,borderBottom:`2px solid ${t.border}`,borderRadius:2},children:e.slice(o[0],o[1])},`g${o.gIdx}`))}t=o[1]}t<n.end&&r.push(e.slice(t,n.end)),o.push((0,u.jsx)(T,{children:r},n.start))}else o.push((0,u.jsx)(T,{children:r},n.start));t=n.end}return t<e.length&&o.push(e.slice(t)),o}(U,ee),[U,ee]),te=(0,t.useMemo)(()=>{if(!r)return[];const e=/\(\?<([^>]+)>/g,o=[];let t;for(;null!==(t=e.exec(r));)o.push(t[1]);return o},[r]),ne=(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,u.jsxs)(N,{onClick:()=>{o(""),G(new Set),D(""),V(null),(0,s.Is)(P,"")},children:[(0,u.jsx)(d.A,{size:13})," New"]}),(0,u.jsx)(s.UO,{appId:"regexlab",onLoad:(e,r,t)=>{V(r&&t?{id:r,name:t}:null);try{const{pattern:r,flags:t,text:n}=JSON.parse(e);void 0!==r&&o(r),void 0!==t&&G(new Set(t)),void 0!==n&&D(n)}catch{}}}),(0,u.jsxs)(f,{onClick:()=>q(!0),children:[(0,u.jsx)(c.A,{size:14}),"Save"]}),(0,u.jsxs)(L,{ref:W,children:[(0,u.jsxs)(N,{onClick:()=>K(e=>!e),children:["Examples ",(0,u.jsx)(i.A,{size:12})]}),H&&(0,u.jsx)(O,{children:p.k.map(e=>(0,u.jsx)(_,{onClick:()=>(e=>{o(e.pattern),G(new Set(e.flags.split(""))),D(e.text),K(!1)})(e),children:e.label},e.label))})]}),e]});return(0,u.jsxs)(s.PE,{title:"RegexLab",sidebar:(0,u.jsx)(s.tz,{activeAppId:"regexlab"}),topBarRight:ne,children:[Z&&(0,u.jsx)(s.MJ,{onSave:async e=>{q(!1),await(0,s.KL)("regexlab",e,JSON.stringify({pattern:r,flags:[...n],text:U})),V(null)},onUpdate:async()=>{Q&&(q(!1),await(0,s.mZ)(Q.id,Q.name,JSON.stringify({pattern:r,flags:[...n],text:U})))},existingDoc:Q??void 0,onCancel:()=>q(!1)}),(0,u.jsxs)(h,{children:[(0,u.jsxs)(b,{children:[(0,u.jsx)(m,{children:"/"}),(0,u.jsx)(w,{hasError:!!re,value:r,onChange:e=>o(e.target.value),placeholder:"enter regex pattern…",spellCheck:!1}),(0,u.jsx)(m,{children:"/"}),g.map(e=>(0,u.jsx)($,{active:n.has(e),onClick:()=>(e=>{G(r=>{const o=new Set(r);return o.has(e)?o.delete(e):o.add(e),o})})(e),title:e,children:e},e)),(0,u.jsx)(y,{ok:!re,children:re?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.A,{size:13})," ",re]}):r?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.A,{size:13})," ",ee.length," match",1!==ee.length?"es":""]}):null})]}),(0,u.jsxs)(j,{children:[(0,u.jsxs)(v,{children:[(0,u.jsx)(k,{children:"Test string"}),(0,u.jsx)(z,{value:U,onChange:e=>D(e.target.value),placeholder:"Paste or type your test string here…",spellCheck:!1})]}),(0,u.jsxs)(v,{children:[(0,u.jsx)(k,{children:"Highlighted matches"}),(0,u.jsx)(S,{children:oe})]})]}),(0,u.jsxs)(M,{children:[(0,u.jsxs)(I,{children:[(0,u.jsxs)(R,{children:[ee.length," match",1!==ee.length?"es":""]}),te.length>0&&(0,u.jsxs)("span",{children:["Groups:"," ",te.map((e,r)=>(0,u.jsxs)(J,{colorIndex:r,children:[" ",e]},e))]})]}),(0,u.jsxs)(C,{children:[ee.slice(0,200).map(e=>(0,u.jsxs)(F,{children:[(0,u.jsxs)(E,{children:["#",e.index+1]}),(0,u.jsx)(A,{children:e.value}),e.groups.map((e,r)=>{if(void 0===e)return null;const o=te[r]??`$${r+1}`;return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsxs)(J,{colorIndex:r,children:[o,":"]}),(0,u.jsx)(B,{colorIndex:r,children:e})]},r)})]},e.index)),ee.length>200&&(0,u.jsxs)(F,{children:[(0,u.jsx)(E,{children:"…"}),(0,u.jsxs)("span",{style:{color:s.w4.colors.mainTextMuted},children:[ee.length-200," more matches not shown"]})]})]})]})]})]})}}}]);
//# sourceMappingURL=36.1312bf10f68d8f2cb323.js.map