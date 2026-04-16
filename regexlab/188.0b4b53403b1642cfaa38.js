"use strict";(self.webpackChunk_atlantis_regexlab=self.webpackChunk_atlantis_regexlab||[]).push([[188],{188(e,r,o){var n=o(7359),t=o(8997),s=o(3233),a=o(894),l=o(6480),i=o(679),d=o(153),c=o(947),p=o(9336),g=o(5723);const x=[{bg:"rgba(56,139,253,0.25)",border:"#388bfd",label:"#388bfd"},{bg:"rgba(63,185,80,0.25)",border:"#3fb950",label:"#3fb950"},{bg:"rgba(210,153,34,0.25)",border:"#d29922",label:"#d29922"},{bg:"rgba(163,113,247,0.25)",border:"#a371f7",label:"#a371f7"},{bg:"rgba(248,113,113,0.25)",border:"#f87171",label:"#f87171"},{bg:"rgba(34,211,238,0.25)",border:"#22d3ee",label:"#22d3ee"}],u=["g","i","m","s","u"],f=s.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${a.w4.colors.accent};border-radius:${a.w4.borderRadius.md};color:${a.w4.colors.accent};font-size:${a.w4.typography.fontSizeBase};font-family:${a.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,h=s.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding: ${a.w4.spacing.lg};
  gap: ${a.w4.spacing.md};
`,b=s.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  padding: 0 ${a.w4.spacing.md};
  height: 44px;
  flex-shrink: 0;
`,m=s.default.span`
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 18px;
  color: ${a.w4.colors.mainTextMuted};
  user-select: none;
`,w=s.default.input`
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
`,$=s.default.button`
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
`,y=s.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
  white-space: nowrap;
`,j=s.default.div`
  display: flex;
  flex: 1;
  gap: ${a.w4.spacing.md};
  overflow: hidden;
  min-height: 0;
`,v=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,k=s.default.div`
  font-size: 11px;
  font-weight: 600;
  color: ${a.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
`,z=s.default.textarea`
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
`,T=s.default.mark`
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
`,S=s.default.span`
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
`,E=s.default.span`
  color: ${a.w4.colors.mainTextMuted};
  min-width: 28px;
  flex-shrink: 0;
`,A=s.default.span`
  background: rgba(56,139,253,0.12);
  border-radius: 3px;
  padding: 1px 6px;
  color: ${a.w4.colors.mainText};
`,B=s.default.span`
  border-radius: 3px;
  padding: 1px 6px;
  color: ${a.w4.colors.mainText};
  background: ${e=>x[e.colorIndex%x.length].bg};
  border: 1px solid ${e=>x[e.colorIndex%x.length].border};
  font-size: 11px;
`,L=s.default.span`
  font-size: 10px;
  color: ${e=>x[e.colorIndex%x.length].label};
  font-weight: 600;
`,J=s.default.div`
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
`;function N({topBarRight:e}){const[r,o]=(0,n.useState)("([\\w.+-]+)@([\\w-]+)\\.([\\w.]+)"),[t,s]=(0,n.useState)(new Set(["g","i"])),[N,G]=(0,n.useState)("Contact us at hello@example.com or support@atlantis.dev for assistance.\nInvalid ones: @nouser.com, noatsign.org"),[P,U]=(0,n.useState)(!1),[D,K]=(0,n.useState)(!1),[Z,q]=(0,n.useState)(null),Q=(0,n.useRef)(null);(0,n.useEffect)(()=>{const e=e=>{Q.current&&!Q.current.contains(e.target)&&U(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const V=Array.from(t).join(""),{matches:W,error:X}=(0,n.useMemo)(()=>function(e,r,o){if(!e)return{matches:[],error:null};try{const n=r.includes("g")?r:r+"g";let t;try{t=new RegExp(e,n+"d")}catch{t=new RegExp(e,n)}const s=[];let a=0;for(const e of o.matchAll(t)){const r=Array.from({length:e.length-1},(r,o)=>e[o+1]),o=e.groups?{...e.groups}:null,n=e.indices,t=n?Array.from({length:e.length-1},(e,r)=>n[r+1]):[];s.push({index:a++,value:e[0],groups:r,namedGroups:o,start:e.index,end:e.index+e[0].length,groupIndices:t})}return{matches:s,error:null}}catch(e){return{matches:[],error:e.message}}}(r,V,N),[r,V,N]),Y=(0,n.useMemo)(()=>function(e,r){if(0===r.length)return[e];const o=[];let n=0;for(const t of r){t.start>n&&o.push(e.slice(n,t.start));const r=e.slice(t.start,t.end);if(t.groupIndices.length>0){const r=[];let n=t.start;const s=t.groupIndices.map((e,r)=>e?{...e,gIdx:r}:null).filter(Boolean);s.sort((e,r)=>e[0]-r[0]);for(const o of s){if(o[0]>n&&r.push(e.slice(n,o[0])),o[0]<o[1]){const n=x[o.gIdx%x.length];r.push((0,g.jsx)("span",{style:{background:n.bg,borderBottom:`2px solid ${n.border}`,borderRadius:2},children:e.slice(o[0],o[1])},`g${o.gIdx}`))}n=o[1]}n<t.end&&r.push(e.slice(n,t.end)),o.push((0,g.jsx)(T,{children:r},t.start))}else o.push((0,g.jsx)(T,{children:r},t.start));n=t.end}return n<e.length&&o.push(e.slice(n)),o}(N,W),[N,W]),ee=(0,n.useMemo)(()=>{if(!r)return[];const e=/\(\?<([^>]+)>/g,o=[];let n;for(;null!==(n=e.exec(r));)o.push(n[1]);return o},[r]),re=(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,g.jsx)(a.UO,{appId:"regexlab",onLoad:(e,r,n)=>{q(r&&n?{id:r,name:n}:null);try{const{pattern:r,flags:n,text:t}=JSON.parse(e);void 0!==r&&o(r),void 0!==n&&s(new Set(n)),void 0!==t&&G(t)}catch{}}}),(0,g.jsxs)(f,{onClick:()=>K(!0),children:[(0,g.jsx)(l.A,{size:14}),"Save"]}),(0,g.jsxs)(J,{ref:Q,children:[(0,g.jsxs)(O,{onClick:()=>U(e=>!e),children:["Examples ",(0,g.jsx)(i.A,{size:12})]}),P&&(0,g.jsx)(_,{children:p.k.map(e=>(0,g.jsx)(H,{onClick:()=>(e=>{o(e.pattern),s(new Set(e.flags.split(""))),G(e.text),U(!1)})(e),children:e.label},e.label))})]}),e]});return(0,g.jsxs)(a.PE,{title:"RegexLab",sidebar:(0,g.jsx)(a.tz,{activeAppId:"regexlab"}),topBarRight:re,children:[D&&(0,g.jsx)(a.MJ,{onSave:async e=>{K(!1),await(0,a.KL)("regexlab",e,JSON.stringify({pattern:r,flags:[...t],text:N})),q(null)},onUpdate:async()=>{Z&&(K(!1),await(0,a.mZ)(Z.id,Z.name,JSON.stringify({pattern:r,flags:[...t],text:N})))},existingDoc:Z??void 0,onCancel:()=>K(!1)}),(0,g.jsxs)(h,{children:[(0,g.jsxs)(b,{children:[(0,g.jsx)(m,{children:"/"}),(0,g.jsx)(w,{hasError:!!X,value:r,onChange:e=>o(e.target.value),placeholder:"enter regex pattern…",spellCheck:!1}),(0,g.jsx)(m,{children:"/"}),u.map(e=>(0,g.jsx)($,{active:t.has(e),onClick:()=>(e=>{s(r=>{const o=new Set(r);return o.has(e)?o.delete(e):o.add(e),o})})(e),title:e,children:e},e)),(0,g.jsx)(y,{ok:!X,children:X?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d.A,{size:13})," ",X]}):r?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.A,{size:13})," ",W.length," match",1!==W.length?"es":""]}):null})]}),(0,g.jsxs)(j,{children:[(0,g.jsxs)(v,{children:[(0,g.jsx)(k,{children:"Test string"}),(0,g.jsx)(z,{value:N,onChange:e=>G(e.target.value),placeholder:"Paste or type your test string here…",spellCheck:!1})]}),(0,g.jsxs)(v,{children:[(0,g.jsx)(k,{children:"Highlighted matches"}),(0,g.jsx)(M,{children:Y})]})]}),(0,g.jsxs)(I,{children:[(0,g.jsxs)(R,{children:[(0,g.jsxs)(S,{children:[W.length," match",1!==W.length?"es":""]}),ee.length>0&&(0,g.jsxs)("span",{children:["Groups:"," ",ee.map((e,r)=>(0,g.jsxs)(L,{colorIndex:r,children:[" ",e]},e))]})]}),(0,g.jsxs)(C,{children:[W.slice(0,200).map(e=>(0,g.jsxs)(F,{children:[(0,g.jsxs)(E,{children:["#",e.index+1]}),(0,g.jsx)(A,{children:e.value}),e.groups.map((e,r)=>{if(void 0===e)return null;const o=ee[r]??`$${r+1}`;return(0,g.jsxs)(n.Fragment,{children:[(0,g.jsxs)(L,{colorIndex:r,children:[o,":"]}),(0,g.jsx)(B,{colorIndex:r,children:e})]},r)})]},e.index)),W.length>200&&(0,g.jsxs)(F,{children:[(0,g.jsx)(E,{children:"…"}),(0,g.jsxs)("span",{style:{color:a.w4.colors.mainTextMuted},children:[W.length-200," more matches not shown"]})]})]})]})]})]})}const G=document.getElementById("root");if(!G)throw new Error("Root element #root not found");(0,t.H)(G).render((0,g.jsx)(N,{}))},8997(e,r,o){var n=o(8991);r.H=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=188.0b4b53403b1642cfaa38.js.map