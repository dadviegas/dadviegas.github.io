"use strict";(self.webpackChunk_atlantis_regexlab=self.webpackChunk_atlantis_regexlab||[]).push([[36],{6036(e,r,o){o.r(r),o.d(r,{default:()=>N});var n=o(7359),t=o(3233),s=o(894),a=o(153),l=o(947),i=o(679),d=o(6480),c=o(9336),p=o(5723);const g=[{bg:"rgba(56,139,253,0.25)",border:"#388bfd",label:"#388bfd"},{bg:"rgba(63,185,80,0.25)",border:"#3fb950",label:"#3fb950"},{bg:"rgba(210,153,34,0.25)",border:"#d29922",label:"#d29922"},{bg:"rgba(163,113,247,0.25)",border:"#a371f7",label:"#a371f7"},{bg:"rgba(248,113,113,0.25)",border:"#f87171",label:"#f87171"},{bg:"rgba(34,211,238,0.25)",border:"#22d3ee",label:"#22d3ee"}],x=["g","i","m","s","u"],u=t.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${s.w4.colors.accent};border-radius:${s.w4.borderRadius.md};color:${s.w4.colors.accent};font-size:${s.w4.typography.fontSizeBase};font-family:${s.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,f=t.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding: ${s.w4.spacing.lg};
  gap: ${s.w4.spacing.md};
`,h=t.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 0 ${s.w4.spacing.md};
  height: 44px;
  flex-shrink: 0;
`,b=t.default.span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 18px;
  color: ${s.w4.colors.mainTextMuted};
  user-select: none;
`,m=t.default.input`
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
`,w=t.default.button`
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
`,$=t.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
  white-space: nowrap;
`,y=t.default.div`
  display: flex;
  flex: 1;
  gap: ${s.w4.spacing.md};
  overflow: hidden;
  min-height: 0;
`,j=t.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,v=t.default.div`
  font-size: 11px;
  font-weight: 600;
  color: ${s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
`,k=t.default.textarea`
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
`,z=t.default.div`
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
`,M=t.default.mark`
  background: rgba(56,139,253,0.15);
  border-radius: 2px;
  color: inherit;
  outline: 1px solid rgba(56,139,253,0.4);
`,T=t.default.div`
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  flex-shrink: 0;
  max-height: 200px;
  overflow-y: auto;
`,S=t.default.div`
  display: flex;
  align-items: center;
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  border-bottom: 1px solid ${s.w4.colors.border};
  font-size: 12px;
  color: ${s.w4.colors.mainTextMuted};
  gap: ${s.w4.spacing.md};
`,I=t.default.span`
  font-weight: 600;
  color: ${s.w4.colors.mainText};
`,R=t.default.div`
  padding: ${s.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,C=t.default.div`
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
`,F=t.default.span`
  color: ${s.w4.colors.mainTextMuted};
  min-width: 28px;
  flex-shrink: 0;
`,A=t.default.span`
  background: rgba(56,139,253,0.12);
  border-radius: 3px;
  padding: 1px 6px;
  color: ${s.w4.colors.mainText};
`,E=t.default.span`
  border-radius: 3px;
  padding: 1px 6px;
  color: ${s.w4.colors.mainText};
  background: ${e=>g[e.colorIndex%g.length].bg};
  border: 1px solid ${e=>g[e.colorIndex%g.length].border};
  font-size: 11px;
`,B=t.default.span`
  font-size: 10px;
  color: ${e=>g[e.colorIndex%g.length].label};
  font-weight: 600;
`,L=t.default.div`
  position: relative;
`,J=t.default.button`
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
`,O=t.default.div`
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
`,_=t.default.button`
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
`;function N({topBarRight:e}){const[r,o]=(0,n.useState)("([\\w.+-]+)@([\\w-]+)\\.([\\w.]+)"),[t,N]=(0,n.useState)(new Set(["g","i"])),[G,P]=(0,n.useState)("Contact us at hello@example.com or support@atlantis.dev for assistance.\nInvalid ones: @nouser.com, noatsign.org"),[U,D]=(0,n.useState)(!1),[H,K]=(0,n.useState)(!1),[Z,q]=(0,n.useState)(null),Q=(0,n.useRef)(null);(0,n.useEffect)(()=>{const e=e=>{Q.current&&!Q.current.contains(e.target)&&D(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const V=Array.from(t).join(""),{matches:W,error:X}=(0,n.useMemo)(()=>function(e,r,o){if(!e)return{matches:[],error:null};try{const n=r.includes("g")?r:r+"g";let t;try{t=new RegExp(e,n+"d")}catch{t=new RegExp(e,n)}const s=[];let a=0;for(const e of o.matchAll(t)){const r=Array.from({length:e.length-1},(r,o)=>e[o+1]),o=e.groups?{...e.groups}:null,n=e.indices,t=n?Array.from({length:e.length-1},(e,r)=>n[r+1]):[];s.push({index:a++,value:e[0],groups:r,namedGroups:o,start:e.index,end:e.index+e[0].length,groupIndices:t})}return{matches:s,error:null}}catch(e){return{matches:[],error:e.message}}}(r,V,G),[r,V,G]),Y=(0,n.useMemo)(()=>function(e,r){if(0===r.length)return[e];const o=[];let n=0;for(const t of r){t.start>n&&o.push(e.slice(n,t.start));const r=e.slice(t.start,t.end);if(t.groupIndices.length>0){const r=[];let n=t.start;const s=t.groupIndices.map((e,r)=>e?{...e,gIdx:r}:null).filter(Boolean);s.sort((e,r)=>e[0]-r[0]);for(const o of s){if(o[0]>n&&r.push(e.slice(n,o[0])),o[0]<o[1]){const n=g[o.gIdx%g.length];r.push((0,p.jsx)("span",{style:{background:n.bg,borderBottom:`2px solid ${n.border}`,borderRadius:2},children:e.slice(o[0],o[1])},`g${o.gIdx}`))}n=o[1]}n<t.end&&r.push(e.slice(n,t.end)),o.push((0,p.jsx)(M,{children:r},t.start))}else o.push((0,p.jsx)(M,{children:r},t.start));n=t.end}return n<e.length&&o.push(e.slice(n)),o}(G,W),[G,W]),ee=(0,n.useMemo)(()=>{if(!r)return[];const e=/\(\?<([^>]+)>/g,o=[];let n;for(;null!==(n=e.exec(r));)o.push(n[1]);return o},[r]),re=(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,p.jsx)(s.UO,{appId:"regexlab",onLoad:(e,r,n)=>{q(r&&n?{id:r,name:n}:null);try{const{pattern:r,flags:n,text:t}=JSON.parse(e);void 0!==r&&o(r),void 0!==n&&N(new Set(n)),void 0!==t&&P(t)}catch{}}}),(0,p.jsxs)(u,{onClick:()=>K(!0),children:[(0,p.jsx)(d.A,{size:14}),"Save"]}),(0,p.jsxs)(L,{ref:Q,children:[(0,p.jsxs)(J,{onClick:()=>D(e=>!e),children:["Examples ",(0,p.jsx)(i.A,{size:12})]}),U&&(0,p.jsx)(O,{children:c.k.map(e=>(0,p.jsx)(_,{onClick:()=>(e=>{o(e.pattern),N(new Set(e.flags.split(""))),P(e.text),D(!1)})(e),children:e.label},e.label))})]}),e]});return(0,p.jsxs)(s.PE,{title:"RegexLab",sidebar:(0,p.jsx)(s.tz,{activeAppId:"regexlab"}),topBarRight:re,children:[H&&(0,p.jsx)(s.MJ,{onSave:async e=>{K(!1),await(0,s.KL)("regexlab",e,JSON.stringify({pattern:r,flags:[...t],text:G})),q(null)},onUpdate:async()=>{Z&&(K(!1),await(0,s.mZ)(Z.id,Z.name,JSON.stringify({pattern:r,flags:[...t],text:G})))},existingDoc:Z??void 0,onCancel:()=>K(!1)}),(0,p.jsxs)(f,{children:[(0,p.jsxs)(h,{children:[(0,p.jsx)(b,{children:"/"}),(0,p.jsx)(m,{hasError:!!X,value:r,onChange:e=>o(e.target.value),placeholder:"enter regex pattern…",spellCheck:!1}),(0,p.jsx)(b,{children:"/"}),x.map(e=>(0,p.jsx)(w,{active:t.has(e),onClick:()=>(e=>{N(r=>{const o=new Set(r);return o.has(e)?o.delete(e):o.add(e),o})})(e),title:e,children:e},e)),(0,p.jsx)($,{ok:!X,children:X?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.A,{size:13})," ",X]}):r?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.A,{size:13})," ",W.length," match",1!==W.length?"es":""]}):null})]}),(0,p.jsxs)(y,{children:[(0,p.jsxs)(j,{children:[(0,p.jsx)(v,{children:"Test string"}),(0,p.jsx)(k,{value:G,onChange:e=>P(e.target.value),placeholder:"Paste or type your test string here…",spellCheck:!1})]}),(0,p.jsxs)(j,{children:[(0,p.jsx)(v,{children:"Highlighted matches"}),(0,p.jsx)(z,{children:Y})]})]}),(0,p.jsxs)(T,{children:[(0,p.jsxs)(S,{children:[(0,p.jsxs)(I,{children:[W.length," match",1!==W.length?"es":""]}),ee.length>0&&(0,p.jsxs)("span",{children:["Groups:"," ",ee.map((e,r)=>(0,p.jsxs)(B,{colorIndex:r,children:[" ",e]},e))]})]}),(0,p.jsxs)(R,{children:[W.slice(0,200).map(e=>(0,p.jsxs)(C,{children:[(0,p.jsxs)(F,{children:["#",e.index+1]}),(0,p.jsx)(A,{children:e.value}),e.groups.map((e,r)=>{if(void 0===e)return null;const o=ee[r]??`$${r+1}`;return(0,p.jsxs)(n.Fragment,{children:[(0,p.jsxs)(B,{colorIndex:r,children:[o,":"]}),(0,p.jsx)(E,{colorIndex:r,children:e})]},r)})]},e.index)),W.length>200&&(0,p.jsxs)(C,{children:[(0,p.jsx)(F,{children:"…"}),(0,p.jsxs)("span",{style:{color:s.w4.colors.mainTextMuted},children:[W.length-200," more matches not shown"]})]})]})]})]})]})}}}]);
//# sourceMappingURL=36.4faa04ba53fb8113c293.js.map