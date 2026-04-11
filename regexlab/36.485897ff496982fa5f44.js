"use strict";(self.webpackChunk_atlantis_regexlab=self.webpackChunk_atlantis_regexlab||[]).push([[36],{6036(e,o,r){r.r(o),r.d(o,{default:()=>N});var n=r(7359),t=r(3233),l=r(906),s=r(2534),a=r(947),i=r(679),d=r(9336),c=r(5723);const p=[{bg:"rgba(56,139,253,0.25)",border:"#388bfd",label:"#388bfd"},{bg:"rgba(63,185,80,0.25)",border:"#3fb950",label:"#3fb950"},{bg:"rgba(210,153,34,0.25)",border:"#d29922",label:"#d29922"},{bg:"rgba(163,113,247,0.25)",border:"#a371f7",label:"#a371f7"},{bg:"rgba(248,113,113,0.25)",border:"#f87171",label:"#f87171"},{bg:"rgba(34,211,238,0.25)",border:"#22d3ee",label:"#22d3ee"}],g=["g","i","m","s","u"],x=t.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${l.w4.colors.mainBg};
  font-family: ${l.w4.typography.fontFamily};
  color: ${l.w4.colors.mainText};
  overflow: hidden;
`,u=t.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${l.w4.colors.sidebarBg};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  padding: 0 ${l.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${l.w4.spacing.md};
`,f=t.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${l.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${l.w4.colors.accent}; }
`,h=t.default.span`
  color: ${l.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,m=t.default.div`
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,b=t.default.span`
  font-weight: 400;
  color: ${l.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,w=t.default.div`flex: 1;`,$=t.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding: ${l.w4.spacing.lg};
  gap: ${l.w4.spacing.md};
`,y=t.default.div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 0 ${l.w4.spacing.md};
  height: 44px;
  flex-shrink: 0;
`,j=t.default.span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 18px;
  color: ${l.w4.colors.mainTextMuted};
  user-select: none;
`,v=t.default.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${e=>e.hasError?"#f87171":l.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${l.w4.colors.mainTextMuted};
  }
`,k=t.default.button`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>e.active?l.w4.colors.accent:l.w4.colors.border};
  background: ${e=>e.active?"rgba(56,139,253,0.15)":"transparent"};
  color: ${e=>e.active?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;

  &:hover {
    border-color: ${l.w4.colors.accent};
    color: ${l.w4.colors.accent};
  }
`,z=t.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
  white-space: nowrap;
`,T=t.default.div`
  display: flex;
  flex: 1;
  gap: ${l.w4.spacing.md};
  overflow: hidden;
  min-height: 0;
`,M=t.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,F=t.default.div`
  font-size: 11px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
`,I=t.default.textarea`
  flex: 1;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  resize: none;
  outline: none;
  line-height: 1.6;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${l.w4.colors.accent};
  }

  &::placeholder {
    color: ${l.w4.colors.mainTextMuted};
  }
`,R=t.default.div`
  flex: 1;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-all;
  line-height: 1.6;
`,B=t.default.mark`
  background: rgba(56,139,253,0.15);
  border-radius: 2px;
  color: inherit;
  outline: 1px solid rgba(56,139,253,0.4);
`,C=t.default.div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  flex-shrink: 0;
  max-height: 200px;
  overflow-y: auto;
`,S=t.default.div`
  display: flex;
  align-items: center;
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.border};
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  gap: ${l.w4.spacing.md};
`,A=t.default.span`
  font-weight: 600;
  color: ${l.w4.colors.mainText};
`,E=t.default.div`
  padding: ${l.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,_=t.default.div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  padding: 4px ${l.w4.spacing.sm};
  border-radius: 4px;
  font-size: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  align-items: baseline;
  flex-wrap: wrap;

  &:hover {
    background: ${l.w4.colors.mainBg};
  }
`,L=t.default.span`
  color: ${l.w4.colors.mainTextMuted};
  min-width: 28px;
  flex-shrink: 0;
`,G=t.default.span`
  background: rgba(56,139,253,0.12);
  border-radius: 3px;
  padding: 1px 6px;
  color: ${l.w4.colors.mainText};
`,H=t.default.span`
  border-radius: 3px;
  padding: 1px 6px;
  color: ${l.w4.colors.mainText};
  background: ${e=>p[e.colorIndex%p.length].bg};
  border: 1px solid ${e=>p[e.colorIndex%p.length].border};
  font-size: 11px;
`,P=t.default.span`
  font-size: 10px;
  color: ${e=>p[e.colorIndex%p.length].label};
  font-weight: 600;
`,q=t.default.div`
  position: relative;
`,D=t.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${l.w4.spacing.sm};
  height: 30px;
  background: transparent;
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${l.w4.colors.accent};
    color: ${l.w4.colors.mainText};
  }
`,J=t.default.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200;
  min-width: 200px;
  overflow: hidden;
`,K=t.default.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  background: transparent;
  border: none;
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;

  &:hover {
    background: ${l.w4.colors.mainBg};
  }
`;function N({topBarRight:e}){const[o,r]=(0,n.useState)("([\\w.+-]+)@([\\w-]+)\\.([\\w.]+)"),[t,N]=(0,n.useState)(new Set(["g","i"])),[O,Q]=(0,n.useState)("Contact us at hello@example.com or support@atlantis.dev for assistance.\nInvalid ones: @nouser.com, noatsign.org"),[U,V]=(0,n.useState)(!1),W=(0,n.useRef)(null);(0,n.useEffect)(()=>{const e=e=>{W.current&&!W.current.contains(e.target)&&V(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const X=Array.from(t).join(""),{matches:Y,error:Z}=(0,n.useMemo)(()=>function(e,o,r){if(!e)return{matches:[],error:null};try{const n=o.includes("g")?o:o+"g";let t;try{t=new RegExp(e,n+"d")}catch{t=new RegExp(e,n)}const l=[];let s=0;for(const e of r.matchAll(t)){const o=Array.from({length:e.length-1},(o,r)=>e[r+1]),r=e.groups?{...e.groups}:null,n=e.indices,t=n?Array.from({length:e.length-1},(e,o)=>n[o+1]):[];l.push({index:s++,value:e[0],groups:o,namedGroups:r,start:e.index,end:e.index+e[0].length,groupIndices:t})}return{matches:l,error:null}}catch(e){return{matches:[],error:e.message}}}(o,X,O),[o,X,O]),ee=(0,n.useMemo)(()=>function(e,o){if(0===o.length)return[e];const r=[];let n=0;for(const t of o){t.start>n&&r.push(e.slice(n,t.start));const o=e.slice(t.start,t.end);if(t.groupIndices.length>0){const o=[];let n=t.start;const l=t.groupIndices.map((e,o)=>e?{...e,gIdx:o}:null).filter(Boolean);l.sort((e,o)=>e[0]-o[0]);for(const r of l){if(r[0]>n&&o.push(e.slice(n,r[0])),r[0]<r[1]){const n=p[r.gIdx%p.length];o.push((0,c.jsx)("span",{style:{background:n.bg,borderBottom:`2px solid ${n.border}`,borderRadius:2},children:e.slice(r[0],r[1])},`g${r.gIdx}`))}n=r[1]}n<t.end&&o.push(e.slice(n,t.end)),r.push((0,c.jsx)(B,{children:o},t.start))}else r.push((0,c.jsx)(B,{children:o},t.start));n=t.end}return n<e.length&&r.push(e.slice(n)),r}(O,Y),[O,Y]),oe=(0,n.useMemo)(()=>{if(!o)return[];const e=/\(\?<([^>]+)>/g,r=[];let n;for(;null!==(n=e.exec(o));)r.push(n[1]);return r},[o]);return(0,c.jsxs)(x,{children:[(0,c.jsxs)(u,{children:[(0,c.jsxs)(f,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,c.jsx)("span",{children:"antis"})]}),(0,c.jsx)(h,{children:"/"}),(0,c.jsxs)(m,{children:["Regex Lab",(0,c.jsx)(b,{children:"live match"})]}),(0,c.jsx)(w,{}),(0,c.jsxs)(q,{ref:W,children:[(0,c.jsxs)(D,{onClick:()=>V(e=>!e),children:["Examples ",(0,c.jsx)(i.A,{size:12})]}),U&&(0,c.jsx)(J,{children:d.k.map(e=>(0,c.jsx)(K,{onClick:()=>(e=>{r(e.pattern),N(new Set(e.flags.split(""))),Q(e.text),V(!1)})(e),children:e.label},e.label))})]}),e]}),(0,c.jsxs)($,{children:[(0,c.jsxs)(y,{children:[(0,c.jsx)(j,{children:"/"}),(0,c.jsx)(v,{hasError:!!Z,value:o,onChange:e=>r(e.target.value),placeholder:"enter regex pattern…",spellCheck:!1}),(0,c.jsx)(j,{children:"/"}),g.map(e=>(0,c.jsx)(k,{active:t.has(e),onClick:()=>(e=>{N(o=>{const r=new Set(o);return r.has(e)?r.delete(e):r.add(e),r})})(e),title:e,children:e},e)),(0,c.jsx)(z,{ok:!Z,children:Z?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.A,{size:13})," ",Z]}):o?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.A,{size:13})," ",Y.length," match",1!==Y.length?"es":""]}):null})]}),(0,c.jsxs)(T,{children:[(0,c.jsxs)(M,{children:[(0,c.jsx)(F,{children:"Test string"}),(0,c.jsx)(I,{value:O,onChange:e=>Q(e.target.value),placeholder:"Paste or type your test string here…",spellCheck:!1})]}),(0,c.jsxs)(M,{children:[(0,c.jsx)(F,{children:"Highlighted matches"}),(0,c.jsx)(R,{children:ee})]})]}),(0,c.jsxs)(C,{children:[(0,c.jsxs)(S,{children:[(0,c.jsxs)(A,{children:[Y.length," match",1!==Y.length?"es":""]}),oe.length>0&&(0,c.jsxs)("span",{children:["Groups:"," ",oe.map((e,o)=>(0,c.jsxs)(P,{colorIndex:o,children:[" ",e]},e))]})]}),(0,c.jsxs)(E,{children:[Y.slice(0,200).map(e=>(0,c.jsxs)(_,{children:[(0,c.jsxs)(L,{children:["#",e.index+1]}),(0,c.jsx)(G,{children:e.value}),e.groups.map((e,o)=>{if(void 0===e)return null;const r=oe[o]??`$${o+1}`;return(0,c.jsxs)(n.Fragment,{children:[(0,c.jsxs)(P,{colorIndex:o,children:[r,":"]}),(0,c.jsx)(H,{colorIndex:o,children:e})]},o)})]},e.index)),Y.length>200&&(0,c.jsxs)(_,{children:[(0,c.jsx)(L,{children:"…"}),(0,c.jsxs)("span",{style:{color:l.w4.colors.mainTextMuted},children:[Y.length-200," more matches not shown"]})]})]})]})]})]})}}}]);
//# sourceMappingURL=36.485897ff496982fa5f44.js.map