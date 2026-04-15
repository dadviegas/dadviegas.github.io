"use strict";(self.webpackChunk_atlantis_regexlab=self.webpackChunk_atlantis_regexlab||[]).push([[188],{188(e,o,r){var n=r(7359),t=r(8997),s=r(3233),a=r(4191),l=r(6480),i=r(679),d=r(2534),c=r(947),p=r(9336),g=r(5723);const x=[{bg:"rgba(56,139,253,0.25)",border:"#388bfd",label:"#388bfd"},{bg:"rgba(63,185,80,0.25)",border:"#3fb950",label:"#3fb950"},{bg:"rgba(210,153,34,0.25)",border:"#d29922",label:"#d29922"},{bg:"rgba(163,113,247,0.25)",border:"#a371f7",label:"#a371f7"},{bg:"rgba(248,113,113,0.25)",border:"#f87171",label:"#f87171"},{bg:"rgba(34,211,238,0.25)",border:"#22d3ee",label:"#22d3ee"}],u=["g","i","m","s","u"],f=s.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${a.w4.colors.mainBg};
  font-family: ${a.w4.typography.fontFamily};
  color: ${a.w4.colors.mainText};
  overflow: hidden;
`,h=s.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${a.w4.colors.sidebarBg};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  padding: 0 ${a.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${a.w4.spacing.md};
`,m=s.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${a.w4.typography.fontFamily};
  font-size: ${a.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${a.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${a.w4.colors.accent}; }
`,w=s.default.span`
  color: ${a.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,b=s.default.div`
  font-size: ${a.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${a.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,$=s.default.span`
  font-weight: 400;
  color: ${a.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,y=s.default.div`flex: 1;`,j=s.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${a.w4.colors.accent};border-radius:${a.w4.borderRadius.md};color:${a.w4.colors.accent};font-size:${a.w4.typography.fontSizeBase};font-family:${a.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,v=s.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding: ${a.w4.spacing.lg};
  gap: ${a.w4.spacing.md};
`,k=s.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  padding: 0 ${a.w4.spacing.md};
  height: 44px;
  flex-shrink: 0;
`,z=s.default.span`
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 18px;
  color: ${a.w4.colors.mainTextMuted};
  user-select: none;
`,T=s.default.input`
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
`,M=s.default.button`
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
`,S=s.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
  white-space: nowrap;
`,R=s.default.div`
  display: flex;
  flex: 1;
  gap: ${a.w4.spacing.md};
  overflow: hidden;
  min-height: 0;
`,I=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,F=s.default.div`
  font-size: 11px;
  font-weight: 600;
  color: ${a.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
`,B=s.default.textarea`
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
`,C=s.default.div`
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
`,E=s.default.mark`
  background: rgba(56,139,253,0.15);
  border-radius: 2px;
  color: inherit;
  outline: 1px solid rgba(56,139,253,0.4);
`,A=s.default.div`
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  flex-shrink: 0;
  max-height: 200px;
  overflow-y: auto;
`,L=s.default.div`
  display: flex;
  align-items: center;
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.border};
  font-size: 12px;
  color: ${a.w4.colors.mainTextMuted};
  gap: ${a.w4.spacing.md};
`,H=s.default.span`
  font-weight: 600;
  color: ${a.w4.colors.mainText};
`,J=s.default.div`
  padding: ${a.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,O=s.default.div`
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
`,_=s.default.span`
  color: ${a.w4.colors.mainTextMuted};
  min-width: 28px;
  flex-shrink: 0;
`,N=s.default.span`
  background: rgba(56,139,253,0.12);
  border-radius: 3px;
  padding: 1px 6px;
  color: ${a.w4.colors.mainText};
`,G=s.default.span`
  border-radius: 3px;
  padding: 1px 6px;
  color: ${a.w4.colors.mainText};
  background: ${e=>x[e.colorIndex%x.length].bg};
  border: 1px solid ${e=>x[e.colorIndex%x.length].border};
  font-size: 11px;
`,U=s.default.span`
  font-size: 10px;
  color: ${e=>x[e.colorIndex%x.length].label};
  font-weight: 600;
`,D=s.default.div`
  position: relative;
`,K=s.default.button`
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
`,P=s.default.div`
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
`,Z=s.default.button`
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
`;function q({topBarRight:e}){const[o,r]=(0,n.useState)("([\\w.+-]+)@([\\w-]+)\\.([\\w.]+)"),[t,s]=(0,n.useState)(new Set(["g","i"])),[q,Q]=(0,n.useState)("Contact us at hello@example.com or support@atlantis.dev for assistance.\nInvalid ones: @nouser.com, noatsign.org"),[V,W]=(0,n.useState)(!1),[X,Y]=(0,n.useState)(!1),[ee,oe]=(0,n.useState)(null),re=(0,n.useRef)(null);(0,n.useEffect)(()=>{const e=e=>{re.current&&!re.current.contains(e.target)&&W(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const ne=Array.from(t).join(""),{matches:te,error:se}=(0,n.useMemo)(()=>function(e,o,r){if(!e)return{matches:[],error:null};try{const n=o.includes("g")?o:o+"g";let t;try{t=new RegExp(e,n+"d")}catch{t=new RegExp(e,n)}const s=[];let a=0;for(const e of r.matchAll(t)){const o=Array.from({length:e.length-1},(o,r)=>e[r+1]),r=e.groups?{...e.groups}:null,n=e.indices,t=n?Array.from({length:e.length-1},(e,o)=>n[o+1]):[];s.push({index:a++,value:e[0],groups:o,namedGroups:r,start:e.index,end:e.index+e[0].length,groupIndices:t})}return{matches:s,error:null}}catch(e){return{matches:[],error:e.message}}}(o,ne,q),[o,ne,q]),ae=(0,n.useMemo)(()=>function(e,o){if(0===o.length)return[e];const r=[];let n=0;for(const t of o){t.start>n&&r.push(e.slice(n,t.start));const o=e.slice(t.start,t.end);if(t.groupIndices.length>0){const o=[];let n=t.start;const s=t.groupIndices.map((e,o)=>e?{...e,gIdx:o}:null).filter(Boolean);s.sort((e,o)=>e[0]-o[0]);for(const r of s){if(r[0]>n&&o.push(e.slice(n,r[0])),r[0]<r[1]){const n=x[r.gIdx%x.length];o.push((0,g.jsx)("span",{style:{background:n.bg,borderBottom:`2px solid ${n.border}`,borderRadius:2},children:e.slice(r[0],r[1])},`g${r.gIdx}`))}n=r[1]}n<t.end&&o.push(e.slice(n,t.end)),r.push((0,g.jsx)(E,{children:o},t.start))}else r.push((0,g.jsx)(E,{children:o},t.start));n=t.end}return n<e.length&&r.push(e.slice(n)),r}(q,te),[q,te]),le=(0,n.useMemo)(()=>{if(!o)return[];const e=/\(\?<([^>]+)>/g,r=[];let n;for(;null!==(n=e.exec(o));)r.push(n[1]);return r},[o]);return(0,g.jsxs)(f,{children:[(0,g.jsxs)(h,{children:[(0,g.jsxs)(m,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,g.jsx)("span",{children:"antis"})]}),(0,g.jsx)(w,{children:"/"}),(0,g.jsxs)(b,{children:["Regex Lab",(0,g.jsx)($,{children:"live match"})]}),(0,g.jsx)(y,{}),(0,g.jsx)(a.UO,{appId:"regexlab",onLoad:(e,o,n)=>{oe(o&&n?{id:o,name:n}:null);try{const{pattern:o,flags:n,text:t}=JSON.parse(e);void 0!==o&&r(o),void 0!==n&&s(new Set(n)),void 0!==t&&Q(t)}catch{}}}),(0,g.jsxs)(j,{onClick:()=>Y(!0),children:[(0,g.jsx)(l.A,{size:14}),"Save"]}),(0,g.jsxs)(D,{ref:re,children:[(0,g.jsxs)(K,{onClick:()=>W(e=>!e),children:["Examples ",(0,g.jsx)(i.A,{size:12})]}),V&&(0,g.jsx)(P,{children:p.k.map(e=>(0,g.jsx)(Z,{onClick:()=>(e=>{r(e.pattern),s(new Set(e.flags.split(""))),Q(e.text),W(!1)})(e),children:e.label},e.label))})]}),e]}),X&&(0,g.jsx)(a.MJ,{onSave:async e=>{Y(!1),await(0,a.KL)("regexlab",e,JSON.stringify({pattern:o,flags:[...t],text:q})),oe(null)},onUpdate:async()=>{ee&&(Y(!1),await(0,a.mZ)(ee.id,ee.name,JSON.stringify({pattern:o,flags:[...t],text:q})))},existingDoc:ee??void 0,onCancel:()=>Y(!1)}),(0,g.jsxs)(v,{children:[(0,g.jsxs)(k,{children:[(0,g.jsx)(z,{children:"/"}),(0,g.jsx)(T,{hasError:!!se,value:o,onChange:e=>r(e.target.value),placeholder:"enter regex pattern…",spellCheck:!1}),(0,g.jsx)(z,{children:"/"}),u.map(e=>(0,g.jsx)(M,{active:t.has(e),onClick:()=>(e=>{s(o=>{const r=new Set(o);return r.has(e)?r.delete(e):r.add(e),r})})(e),title:e,children:e},e)),(0,g.jsx)(S,{ok:!se,children:se?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d.A,{size:13})," ",se]}):o?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.A,{size:13})," ",te.length," match",1!==te.length?"es":""]}):null})]}),(0,g.jsxs)(R,{children:[(0,g.jsxs)(I,{children:[(0,g.jsx)(F,{children:"Test string"}),(0,g.jsx)(B,{value:q,onChange:e=>Q(e.target.value),placeholder:"Paste or type your test string here…",spellCheck:!1})]}),(0,g.jsxs)(I,{children:[(0,g.jsx)(F,{children:"Highlighted matches"}),(0,g.jsx)(C,{children:ae})]})]}),(0,g.jsxs)(A,{children:[(0,g.jsxs)(L,{children:[(0,g.jsxs)(H,{children:[te.length," match",1!==te.length?"es":""]}),le.length>0&&(0,g.jsxs)("span",{children:["Groups:"," ",le.map((e,o)=>(0,g.jsxs)(U,{colorIndex:o,children:[" ",e]},e))]})]}),(0,g.jsxs)(J,{children:[te.slice(0,200).map(e=>(0,g.jsxs)(O,{children:[(0,g.jsxs)(_,{children:["#",e.index+1]}),(0,g.jsx)(N,{children:e.value}),e.groups.map((e,o)=>{if(void 0===e)return null;const r=le[o]??`$${o+1}`;return(0,g.jsxs)(n.Fragment,{children:[(0,g.jsxs)(U,{colorIndex:o,children:[r,":"]}),(0,g.jsx)(G,{colorIndex:o,children:e})]},o)})]},e.index)),te.length>200&&(0,g.jsxs)(O,{children:[(0,g.jsx)(_,{children:"…"}),(0,g.jsxs)("span",{style:{color:a.w4.colors.mainTextMuted},children:[te.length-200," more matches not shown"]})]})]})]})]})]})}const Q=document.getElementById("root");if(!Q)throw new Error("Root element #root not found");(0,t.H)(Q).render((0,g.jsx)(q,{}))},8997(e,o,r){var n=r(8991);o.H=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=188.6895369fa4d0fc3f33b4.js.map