"use strict";(self.webpackChunk_atlantis_regexlab=self.webpackChunk_atlantis_regexlab||[]).push([[36],{6036(e,o,r){r.r(o),r.d(o,{default:()=>Z});var n=r(7359),t=r(3233),a=r(5723),s=r(2534),l=r(947),i=r(679),d=r(6480),c=r(9336),p=r(8104);const g=[{bg:"rgba(56,139,253,0.25)",border:"#388bfd",label:"#388bfd"},{bg:"rgba(63,185,80,0.25)",border:"#3fb950",label:"#3fb950"},{bg:"rgba(210,153,34,0.25)",border:"#d29922",label:"#d29922"},{bg:"rgba(163,113,247,0.25)",border:"#a371f7",label:"#a371f7"},{bg:"rgba(248,113,113,0.25)",border:"#f87171",label:"#f87171"},{bg:"rgba(34,211,238,0.25)",border:"#22d3ee",label:"#22d3ee"}],x=["g","i","m","s","u"],f=t.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${a.w4.colors.mainBg};
  font-family: ${a.w4.typography.fontFamily};
  color: ${a.w4.colors.mainText};
  overflow: hidden;
`,u=t.default.header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${a.w4.colors.sidebarBg};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  padding-left: max(${a.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${a.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${a.w4.spacing.md};
`,h=t.default.button`
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
`,m=t.default.span`
  color: ${a.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,w=t.default.div`
  font-size: ${a.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${a.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,b=t.default.span`
  font-weight: 400;
  color: ${a.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,$=t.default.div`flex: 1;`,y=t.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${a.w4.colors.accent};border-radius:${a.w4.borderRadius.md};color:${a.w4.colors.accent};font-size:${a.w4.typography.fontSizeBase};font-family:${a.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,v=t.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding: ${a.w4.spacing.lg};
  gap: ${a.w4.spacing.md};
`,j=t.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  padding: 0 ${a.w4.spacing.md};
  height: 44px;
  flex-shrink: 0;
`,k=t.default.span`
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 18px;
  color: ${a.w4.colors.mainTextMuted};
  user-select: none;
`,z=t.default.input`
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
`,T=t.default.button`
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
`,M=t.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
  white-space: nowrap;
`,S=t.default.div`
  display: flex;
  flex: 1;
  gap: ${a.w4.spacing.md};
  overflow: hidden;
  min-height: 0;
`,F=t.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,I=t.default.div`
  font-size: 11px;
  font-weight: 600;
  color: ${a.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
`,C=t.default.textarea`
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
`,R=t.default.div`
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
`,B=t.default.mark`
  background: rgba(56,139,253,0.15);
  border-radius: 2px;
  color: inherit;
  outline: 1px solid rgba(56,139,253,0.4);
`,A=t.default.div`
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  flex-shrink: 0;
  max-height: 200px;
  overflow-y: auto;
`,E=t.default.div`
  display: flex;
  align-items: center;
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.border};
  font-size: 12px;
  color: ${a.w4.colors.mainTextMuted};
  gap: ${a.w4.spacing.md};
`,L=t.default.span`
  font-weight: 600;
  color: ${a.w4.colors.mainText};
`,J=t.default.div`
  padding: ${a.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,O=t.default.div`
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
`,_=t.default.span`
  color: ${a.w4.colors.mainTextMuted};
  min-width: 28px;
  flex-shrink: 0;
`,N=t.default.span`
  background: rgba(56,139,253,0.12);
  border-radius: 3px;
  padding: 1px 6px;
  color: ${a.w4.colors.mainText};
`,G=t.default.span`
  border-radius: 3px;
  padding: 1px 6px;
  color: ${a.w4.colors.mainText};
  background: ${e=>g[e.colorIndex%g.length].bg};
  border: 1px solid ${e=>g[e.colorIndex%g.length].border};
  font-size: 11px;
`,H=t.default.span`
  font-size: 10px;
  color: ${e=>g[e.colorIndex%g.length].label};
  font-weight: 600;
`,U=t.default.div`
  position: relative;
`,D=t.default.button`
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
`,K=t.default.div`
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
`,P=t.default.button`
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
`;function Z({topBarRight:e}){const[o,r]=(0,n.useState)("([\\w.+-]+)@([\\w-]+)\\.([\\w.]+)"),[t,Z]=(0,n.useState)(new Set(["g","i"])),[q,Q]=(0,n.useState)("Contact us at hello@example.com or support@atlantis.dev for assistance.\nInvalid ones: @nouser.com, noatsign.org"),[V,W]=(0,n.useState)(!1),[X,Y]=(0,n.useState)(!1),[ee,oe]=(0,n.useState)(null),re=(0,n.useRef)(null);(0,n.useEffect)(()=>{const e=e=>{re.current&&!re.current.contains(e.target)&&W(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const ne=Array.from(t).join(""),{matches:te,error:ae}=(0,n.useMemo)(()=>function(e,o,r){if(!e)return{matches:[],error:null};try{const n=o.includes("g")?o:o+"g";let t;try{t=new RegExp(e,n+"d")}catch{t=new RegExp(e,n)}const a=[];let s=0;for(const e of r.matchAll(t)){const o=Array.from({length:e.length-1},(o,r)=>e[r+1]),r=e.groups?{...e.groups}:null,n=e.indices,t=n?Array.from({length:e.length-1},(e,o)=>n[o+1]):[];a.push({index:s++,value:e[0],groups:o,namedGroups:r,start:e.index,end:e.index+e[0].length,groupIndices:t})}return{matches:a,error:null}}catch(e){return{matches:[],error:e.message}}}(o,ne,q),[o,ne,q]),se=(0,n.useMemo)(()=>function(e,o){if(0===o.length)return[e];const r=[];let n=0;for(const t of o){t.start>n&&r.push(e.slice(n,t.start));const o=e.slice(t.start,t.end);if(t.groupIndices.length>0){const o=[];let n=t.start;const a=t.groupIndices.map((e,o)=>e?{...e,gIdx:o}:null).filter(Boolean);a.sort((e,o)=>e[0]-o[0]);for(const r of a){if(r[0]>n&&o.push(e.slice(n,r[0])),r[0]<r[1]){const n=g[r.gIdx%g.length];o.push((0,p.jsx)("span",{style:{background:n.bg,borderBottom:`2px solid ${n.border}`,borderRadius:2},children:e.slice(r[0],r[1])},`g${r.gIdx}`))}n=r[1]}n<t.end&&o.push(e.slice(n,t.end)),r.push((0,p.jsx)(B,{children:o},t.start))}else r.push((0,p.jsx)(B,{children:o},t.start));n=t.end}return n<e.length&&r.push(e.slice(n)),r}(q,te),[q,te]),le=(0,n.useMemo)(()=>{if(!o)return[];const e=/\(\?<([^>]+)>/g,r=[];let n;for(;null!==(n=e.exec(o));)r.push(n[1]);return r},[o]);return(0,p.jsxs)(f,{children:[(0,p.jsxs)(u,{children:[(0,p.jsxs)(h,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,p.jsx)("span",{children:"antis"})]}),(0,p.jsx)(m,{children:"/"}),(0,p.jsxs)(w,{children:["Regex Lab",(0,p.jsx)(b,{children:"live match"})]}),(0,p.jsx)($,{}),(0,p.jsx)(a.UO,{appId:"regexlab",onLoad:(e,o,n)=>{oe(o&&n?{id:o,name:n}:null);try{const{pattern:o,flags:n,text:t}=JSON.parse(e);void 0!==o&&r(o),void 0!==n&&Z(new Set(n)),void 0!==t&&Q(t)}catch{}}}),(0,p.jsxs)(y,{onClick:()=>Y(!0),children:[(0,p.jsx)(d.A,{size:14}),"Save"]}),(0,p.jsxs)(U,{ref:re,children:[(0,p.jsxs)(D,{onClick:()=>W(e=>!e),children:["Examples ",(0,p.jsx)(i.A,{size:12})]}),V&&(0,p.jsx)(K,{children:c.k.map(e=>(0,p.jsx)(P,{onClick:()=>(e=>{r(e.pattern),Z(new Set(e.flags.split(""))),Q(e.text),W(!1)})(e),children:e.label},e.label))})]}),e]}),X&&(0,p.jsx)(a.MJ,{onSave:async e=>{Y(!1),await(0,a.KL)("regexlab",e,JSON.stringify({pattern:o,flags:[...t],text:q})),oe(null)},onUpdate:async()=>{ee&&(Y(!1),await(0,a.mZ)(ee.id,ee.name,JSON.stringify({pattern:o,flags:[...t],text:q})))},existingDoc:ee??void 0,onCancel:()=>Y(!1)}),(0,p.jsxs)(v,{children:[(0,p.jsxs)(j,{children:[(0,p.jsx)(k,{children:"/"}),(0,p.jsx)(z,{hasError:!!ae,value:o,onChange:e=>r(e.target.value),placeholder:"enter regex pattern…",spellCheck:!1}),(0,p.jsx)(k,{children:"/"}),x.map(e=>(0,p.jsx)(T,{active:t.has(e),onClick:()=>(e=>{Z(o=>{const r=new Set(o);return r.has(e)?r.delete(e):r.add(e),r})})(e),title:e,children:e},e)),(0,p.jsx)(M,{ok:!ae,children:ae?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.A,{size:13})," ",ae]}):o?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.A,{size:13})," ",te.length," match",1!==te.length?"es":""]}):null})]}),(0,p.jsxs)(S,{children:[(0,p.jsxs)(F,{children:[(0,p.jsx)(I,{children:"Test string"}),(0,p.jsx)(C,{value:q,onChange:e=>Q(e.target.value),placeholder:"Paste or type your test string here…",spellCheck:!1})]}),(0,p.jsxs)(F,{children:[(0,p.jsx)(I,{children:"Highlighted matches"}),(0,p.jsx)(R,{children:se})]})]}),(0,p.jsxs)(A,{children:[(0,p.jsxs)(E,{children:[(0,p.jsxs)(L,{children:[te.length," match",1!==te.length?"es":""]}),le.length>0&&(0,p.jsxs)("span",{children:["Groups:"," ",le.map((e,o)=>(0,p.jsxs)(H,{colorIndex:o,children:[" ",e]},e))]})]}),(0,p.jsxs)(J,{children:[te.slice(0,200).map(e=>(0,p.jsxs)(O,{children:[(0,p.jsxs)(_,{children:["#",e.index+1]}),(0,p.jsx)(N,{children:e.value}),e.groups.map((e,o)=>{if(void 0===e)return null;const r=le[o]??`$${o+1}`;return(0,p.jsxs)(n.Fragment,{children:[(0,p.jsxs)(H,{colorIndex:o,children:[r,":"]}),(0,p.jsx)(G,{colorIndex:o,children:e})]},o)})]},e.index)),te.length>200&&(0,p.jsxs)(O,{children:[(0,p.jsx)(_,{children:"…"}),(0,p.jsxs)("span",{style:{color:a.w4.colors.mainTextMuted},children:[te.length-200," more matches not shown"]})]})]})]})]})]})}}}]);
//# sourceMappingURL=36.84287d6c04bc099fa59f.js.map