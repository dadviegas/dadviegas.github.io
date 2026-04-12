"use strict";(self.webpackChunk_atlantis_jsonexplorer=self.webpackChunk_atlantis_jsonexplorer||[]).push([[188],{188(e,o,r){var n=r(7359),t=r(8997),l=r(3233),a=r(4079),i=r(679),s=r(9753),d=r(5609),c=r(320),p=r(6480),x=r(9336),f=r(9054),u=r(5723);const h=l.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${a.w4.colors.mainBg};
  font-family: ${a.w4.typography.fontFamily};
  color: ${a.w4.colors.mainText};
  overflow: hidden;
`,g=l.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${a.w4.colors.sidebarBg};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  padding: 0 ${a.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${a.w4.spacing.sm};
`,m=l.default.button`
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
`,w=l.default.span`
  color: ${a.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,y=l.default.div`
  font-size: ${a.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${a.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
  margin-right: ${a.w4.spacing.sm};
`,b=l.default.div`flex: 1;`,j=l.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${a.w4.colors.accent};border-radius:${a.w4.borderRadius.md};color:${a.w4.colors.accent};font-size:${a.w4.typography.fontSizeBase};font-family:${a.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,$=l.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${a.w4.spacing.sm};
  height: 30px;
  background: ${e=>"primary"===e.variant?a.w4.colors.accent:"transparent"};
  border: 1px solid ${e=>"primary"===e.variant?a.w4.colors.accent:a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${e=>"primary"===e.variant?"#fff":a.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${a.w4.colors.accent};
    color: ${e=>"primary"===e.variant?"#fff":a.w4.colors.mainText};
    background: ${e=>"primary"===e.variant?a.w4.colors.accent:"rgba(56,139,253,0.1)"};
  }
`,v=l.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  gap: 0;
`,k=l.default.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  min-width: 280px;
  border-right: 1px solid ${a.w4.colors.border};
  overflow: hidden;
`,z=l.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,S=l.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.border};
  font-size: 11px;
  font-weight: 600;
  color: ${a.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  flex-shrink: 0;
  background: ${a.w4.colors.sidebarBg};
`,T=l.default.textarea`
  flex: 1;
  background: ${a.w4.colors.mainBg};
  border: none;
  outline: none;
  padding: ${a.w4.spacing.md};
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${e=>e.hasError?"#f87171":a.w4.colors.mainText};
  resize: none;
  line-height: 1.6;
  tab-size: 2;
`,M=l.default.div`
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  background: rgba(248,113,113,0.1);
  border-top: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  font-size: 12px;
  font-family: ${a.w4.typography.fontFamilyMono};
  flex-shrink: 0;
`,C=l.default.div`
  flex: 1;
  overflow: auto;
  padding: ${a.w4.spacing.md};
`,F=l.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-top: 1px solid ${a.w4.colors.border};
  background: ${a.w4.colors.sidebarBg};
  flex-shrink: 0;
`,N=l.default.input`
  flex: 1;
  background: ${a.w4.colors.mainBg};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  padding: 4px 8px;
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12px;
  color: ${a.w4.colors.mainText};
  outline: none;
  height: 28px;

  &:focus { border-color: ${a.w4.colors.accent}; }
  &::placeholder { color: ${a.w4.colors.mainTextMuted}; }
`,B=l.default.span`
  font-size: 11px;
  color: ${a.w4.colors.mainTextMuted};
  white-space: nowrap;
`,E=l.default.div`
  flex: 1;
  overflow: auto;
  padding: ${a.w4.spacing.md};
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12.5px;
`,O=l.default.div`
  margin-bottom: ${a.w4.spacing.sm};
  border-left: 2px solid ${a.w4.colors.accent};
  padding-left: ${a.w4.spacing.sm};
`,J=l.default.div`
  font-size: 11px;
  color: ${a.w4.colors.accent};
  margin-bottom: 2px;
`,R=l.default.pre`
  color: ${a.w4.colors.mainText};
  white-space: pre-wrap;
  font-size: 12px;
  margin: 0;
`,A=l.default.div`position: relative;`,L=l.default.div`
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
`,_=l.default.button`
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
  &:hover { background: ${a.w4.colors.mainBg}; }
`,H=l.default.span`color: #79c0ff;`,P=l.default.span`color: #a5d6ff;`,I=l.default.span`color: #f78166;`,U=l.default.span`color: #d2a8ff;`,D=l.default.span`color: ${a.w4.colors.mainTextMuted}; font-style: italic;`,K=l.default.span`color: ${a.w4.colors.mainTextMuted};`,V=l.default.span`
  font-size: 10px;
  color: ${a.w4.colors.mainTextMuted};
  margin-left: 4px;
`,Y=l.default.div`
  display: flex;
  align-items: flex-start;
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
  cursor: default;
  border-radius: 3px;
  padding: 0 2px;

  &:hover { background: rgba(255,255,255,0.04); }
`,Z=l.default.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${a.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  margin-right: 2px;
  flex-shrink: 0;
  width: 16px;
  height: 20px;
`,q=l.default.div`
  width: ${e=>16*e.level}px;
  flex-shrink: 0;
`;function G({keyName:e,value:o,level:r,isLast:t,defaultExpanded:l=r<2}){const[d,c]=(0,n.useState)(l),p=Array.isArray(o),x=null!==o&&"object"==typeof o&&!p,f=p||x,h=f?Object.keys(o).length:0;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(Y,{children:[(0,u.jsx)(q,{level:r}),f?(0,u.jsx)(Z,{onClick:()=>c(e=>!e),children:d?(0,u.jsx)(i.A,{size:12}):(0,u.jsx)(s.A,{size:12})}):(0,u.jsx)("div",{style:{width:16,flexShrink:0}}),void 0!==e&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(H,{children:['"',e,'"']}),(0,u.jsx)("span",{style:{color:a.w4.colors.mainTextMuted,marginRight:4},children:":"})]}),"string"==typeof o?(0,u.jsxs)(P,{children:['"',o,'"']}):"number"==typeof o?(0,u.jsx)(I,{children:o}):"boolean"==typeof o?(0,u.jsx)(U,{children:String(o)}):null===o?(0,u.jsx)(D,{children:"null"}):p?(0,u.jsx)(K,{children:"["}):x?(0,u.jsx)(K,{children:"{"}):null,f&&!d&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(V,{children:[h," ",p?"items":"keys"]}),(0,u.jsx)(K,{children:p?"]":"}"})]}),!f&&!t&&(0,u.jsx)("span",{style:{color:a.w4.colors.mainTextMuted},children:","})]}),f&&d&&(0,u.jsxs)(u.Fragment,{children:[p?o.map((e,n)=>(0,u.jsx)(G,{keyName:String(n),value:e,level:r+1,isLast:n===o.length-1,defaultExpanded:r+1<2},n)):Object.entries(o).map(([e,o],n,t)=>(0,u.jsx)(G,{keyName:e,value:o,level:r+1,isLast:n===t.length-1,defaultExpanded:r+1<2},e)),(0,u.jsxs)(Y,{children:[(0,u.jsx)(q,{level:r}),(0,u.jsx)("div",{style:{width:16}}),(0,u.jsx)(K,{children:p?"]":"}"}),!t&&(0,u.jsx)("span",{style:{color:a.w4.colors.mainTextMuted},children:","})]})]})]})}function Q({text:e}){const[o,r]=(0,n.useState)(!1);return(0,u.jsxs)($,{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{r(!0),setTimeout(()=>r(!1),1500)})},title:"Copy to clipboard",children:[o?(0,u.jsx)(d.A,{size:12}):(0,u.jsx)(c.A,{size:12}),o?"Copied":"Copy"]})}function W({topBarRight:e}){const[o,r]=(0,n.useState)(x.k[0].json),[t,l]=(0,n.useState)(""),[s,d]=(0,n.useState)(!1),[c,H]=(0,n.useState)(!1),[P,I]=(0,n.useState)(null),U=(0,n.useRef)(null);(0,n.useEffect)(()=>{const e=e=>{U.current&&!U.current.contains(e.target)&&d(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const{parsed:D,error:K}=(0,n.useMemo)(()=>{try{return{parsed:JSON.parse(o),error:null}}catch(e){return{parsed:null,error:e.message}}},[o]),V=(0,n.useMemo)(()=>{if(!t.trim()||null===D)return null;try{return(0,f.Y)(D,t)}catch{return null}},[t,D]),Y=(0,n.useCallback)(()=>{null!==D&&r(JSON.stringify(D,null,2))},[D]),Z=(0,n.useCallback)(()=>{null!==D&&r(JSON.stringify(D))},[D]),q=t.trim().length>0;return(0,u.jsxs)(h,{children:[(0,u.jsxs)(g,{children:[(0,u.jsxs)(m,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,u.jsx)("span",{children:"antis"})]}),(0,u.jsx)(w,{children:"/"}),(0,u.jsx)(y,{children:"JSON Explorer"}),(0,u.jsx)($,{onClick:Y,disabled:!!K,children:"Format"}),(0,u.jsx)($,{onClick:Z,disabled:!!K,children:"Minify"}),(0,u.jsx)(b,{}),(0,u.jsx)(a.UO,{appId:"jsonexplorer",onLoad:(e,o,n)=>{r(e),I(o&&n?{id:o,name:n}:null)}}),(0,u.jsxs)(j,{onClick:()=>H(!0),children:[(0,u.jsx)(p.A,{size:14}),"Save"]}),(0,u.jsxs)(A,{ref:U,children:[(0,u.jsxs)($,{onClick:()=>d(e=>!e),children:["Examples ",(0,u.jsx)(i.A,{size:12})]}),s&&(0,u.jsx)(L,{children:x.k.map(e=>(0,u.jsx)(_,{onClick:()=>{r(e.json),l(""),d(!1)},children:e.label},e.label))})]}),e]}),c&&(0,u.jsx)(a.MJ,{onSave:async e=>{H(!1),await(0,a.KL)("jsonexplorer",e,o),I(null)},onUpdate:async()=>{P&&(H(!1),await(0,a.mZ)(P.id,P.name,o))},existingDoc:P??void 0,onCancel:()=>H(!1)}),(0,u.jsxs)(v,{children:[(0,u.jsxs)(k,{children:[(0,u.jsxs)(S,{children:[(0,u.jsx)("span",{children:"Raw JSON"}),!K&&null!==D&&(0,u.jsx)(Q,{text:o})]}),(0,u.jsx)(T,{hasError:!!K,value:o,onChange:e=>r(e.target.value),spellCheck:!1,placeholder:"Paste JSON here…"}),K&&(0,u.jsxs)(M,{children:["⚠ ",K]})]}),(0,u.jsxs)(z,{children:[(0,u.jsx)(S,{children:(0,u.jsx)("span",{children:"Tree View"})}),q?(0,u.jsx)(E,{children:V&&V.length>0?V.map((e,o)=>(0,u.jsxs)(O,{children:[(0,u.jsx)(J,{children:e.path}),(0,u.jsx)(R,{children:JSON.stringify(e.value,null,2)})]},o)):(0,u.jsx)("span",{style:{color:a.w4.colors.mainTextMuted,fontSize:13},children:"No results"})}):(0,u.jsx)(C,{children:null!==D?(0,u.jsx)(G,{value:D,level:0,isLast:!0,defaultExpanded:!0}):(0,u.jsx)("span",{style:{color:a.w4.colors.mainTextMuted,fontSize:13},children:K?"Fix JSON to see tree":"Paste JSON on the left"})}),(0,u.jsxs)(F,{children:[(0,u.jsx)(B,{children:"JSONPath:"}),(0,u.jsx)(N,{value:t,onChange:e=>l(e.target.value),placeholder:"$.users[*].name",spellCheck:!1}),t&&(0,u.jsx)("span",{style:{fontSize:11,color:a.w4.colors.mainTextMuted},children:V?`${V.length} result${1!==V.length?"s":""}`:"—"})]})]})]})]})}const X=document.getElementById("root");if(!X)throw new Error("Root element #root not found");(0,t.H)(X).render((0,u.jsx)(W,{}))},8997(e,o,r){var n=r(8991);o.H=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=188.51a925701e0fe6ac283a.js.map