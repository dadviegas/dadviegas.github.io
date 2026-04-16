"use strict";(self.webpackChunk_atlantis_jsonexplorer=self.webpackChunk_atlantis_jsonexplorer||[]).push([[188],{188(e,o,r){var n=r(7359),t=r(8997),l=r(3233),s=r(894),a=r(679),i=r(9753),d=r(5609),c=r(320),p=r(6480),x=r(9336),u=r(9054),f=r(5723);const h=l.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${s.w4.colors.accent};border-radius:${s.w4.borderRadius.md};color:${s.w4.colors.accent};font-size:${s.w4.typography.fontSizeBase};font-family:${s.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,g=l.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${s.w4.spacing.sm};
  height: 30px;
  background: ${e=>"primary"===e.variant?s.w4.colors.accent:"transparent"};
  border: 1px solid ${e=>"primary"===e.variant?s.w4.colors.accent:s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${e=>"primary"===e.variant?"#fff":s.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${s.w4.colors.accent};
    color: ${e=>"primary"===e.variant?"#fff":s.w4.colors.mainText};
    background: ${e=>"primary"===e.variant?s.w4.colors.accent:"rgba(56,139,253,0.1)"};
  }
`,m=l.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  gap: 0;
`,w=l.default.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  min-width: 280px;
  border-right: 1px solid ${s.w4.colors.border};
  overflow: hidden;
`,y=l.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,b=l.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  border-bottom: 1px solid ${s.w4.colors.border};
  font-size: 11px;
  font-weight: 600;
  color: ${s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  flex-shrink: 0;
  background: ${s.w4.colors.sidebarBg};
`,j=l.default.textarea`
  flex: 1;
  background: ${s.w4.colors.mainBg};
  border: none;
  outline: none;
  padding: ${s.w4.spacing.md};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${e=>e.hasError?"#f87171":s.w4.colors.mainText};
  resize: none;
  line-height: 1.6;
  tab-size: 2;
`,$=l.default.div`
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  background: rgba(248,113,113,0.1);
  border-top: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  font-size: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  flex-shrink: 0;
`,v=l.default.div`
  flex: 1;
  overflow: auto;
  padding: ${s.w4.spacing.md};
`,k=l.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  border-top: 1px solid ${s.w4.colors.border};
  background: ${s.w4.colors.sidebarBg};
  flex-shrink: 0;
`,z=l.default.input`
  flex: 1;
  background: ${s.w4.colors.mainBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  padding: 4px 8px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12px;
  color: ${s.w4.colors.mainText};
  outline: none;
  height: 28px;

  &:focus { border-color: ${s.w4.colors.accent}; }
  &::placeholder { color: ${s.w4.colors.mainTextMuted}; }
`,S=l.default.span`
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  white-space: nowrap;
`,M=l.default.div`
  flex: 1;
  overflow: auto;
  padding: ${s.w4.spacing.md};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12.5px;
`,T=l.default.div`
  margin-bottom: ${s.w4.spacing.sm};
  border-left: 2px solid ${s.w4.colors.accent};
  padding-left: ${s.w4.spacing.sm};
`,C=l.default.div`
  font-size: 11px;
  color: ${s.w4.colors.accent};
  margin-bottom: 2px;
`,E=l.default.pre`
  color: ${s.w4.colors.mainText};
  white-space: pre-wrap;
  font-size: 12px;
  margin: 0;
`,F=l.default.div`position: relative;`,N=l.default.div`
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
`,O=l.default.button`
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
  &:hover { background: ${s.w4.colors.mainBg}; }
`,R=l.default.span`color: #79c0ff;`,J=l.default.span`color: #a5d6ff;`,A=l.default.span`color: #f78166;`,B=l.default.span`color: #d2a8ff;`,L=l.default.span`color: ${s.w4.colors.mainTextMuted}; font-style: italic;`,I=l.default.span`color: ${s.w4.colors.mainTextMuted};`,P=l.default.span`
  font-size: 10px;
  color: ${s.w4.colors.mainTextMuted};
  margin-left: 4px;
`,_=l.default.div`
  display: flex;
  align-items: flex-start;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
  cursor: default;
  border-radius: 3px;
  padding: 0 2px;

  &:hover { background: rgba(255,255,255,0.04); }
`,H=l.default.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${s.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  margin-right: 2px;
  flex-shrink: 0;
  width: 16px;
  height: 20px;
`,U=l.default.div`
  width: ${e=>16*e.level}px;
  flex-shrink: 0;
`;function D({keyName:e,value:o,level:r,isLast:t,defaultExpanded:l=r<2}){const[d,c]=(0,n.useState)(l),p=Array.isArray(o),x=null!==o&&"object"==typeof o&&!p,u=p||x,h=u?Object.keys(o).length:0;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(_,{children:[(0,f.jsx)(U,{level:r}),u?(0,f.jsx)(H,{onClick:()=>c(e=>!e),children:d?(0,f.jsx)(a.A,{size:12}):(0,f.jsx)(i.A,{size:12})}):(0,f.jsx)("div",{style:{width:16,flexShrink:0}}),void 0!==e&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(R,{children:['"',e,'"']}),(0,f.jsx)("span",{style:{color:s.w4.colors.mainTextMuted,marginRight:4},children:":"})]}),"string"==typeof o?(0,f.jsxs)(J,{children:['"',o,'"']}):"number"==typeof o?(0,f.jsx)(A,{children:o}):"boolean"==typeof o?(0,f.jsx)(B,{children:String(o)}):null===o?(0,f.jsx)(L,{children:"null"}):p?(0,f.jsx)(I,{children:"["}):x?(0,f.jsx)(I,{children:"{"}):null,u&&!d&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(P,{children:[h," ",p?"items":"keys"]}),(0,f.jsx)(I,{children:p?"]":"}"})]}),!u&&!t&&(0,f.jsx)("span",{style:{color:s.w4.colors.mainTextMuted},children:","})]}),u&&d&&(0,f.jsxs)(f.Fragment,{children:[p?o.map((e,n)=>(0,f.jsx)(D,{keyName:String(n),value:e,level:r+1,isLast:n===o.length-1,defaultExpanded:r+1<2},n)):Object.entries(o).map(([e,o],n,t)=>(0,f.jsx)(D,{keyName:e,value:o,level:r+1,isLast:n===t.length-1,defaultExpanded:r+1<2},e)),(0,f.jsxs)(_,{children:[(0,f.jsx)(U,{level:r}),(0,f.jsx)("div",{style:{width:16}}),(0,f.jsx)(I,{children:p?"]":"}"}),!t&&(0,f.jsx)("span",{style:{color:s.w4.colors.mainTextMuted},children:","})]})]})]})}function K({text:e}){const[o,r]=(0,n.useState)(!1);return(0,f.jsxs)(g,{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{r(!0),setTimeout(()=>r(!1),1500)})},title:"Copy to clipboard",children:[o?(0,f.jsx)(d.A,{size:12}):(0,f.jsx)(c.A,{size:12}),o?"Copied":"Copy"]})}function V({topBarRight:e}){const[o,r]=(0,n.useState)(x.k[0].json),[t,l]=(0,n.useState)(""),[i,d]=(0,n.useState)(!1),[c,R]=(0,n.useState)(!1),[J,A]=(0,n.useState)(null),B=(0,n.useRef)(null);(0,n.useEffect)(()=>{const e=e=>{B.current&&!B.current.contains(e.target)&&d(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const{parsed:L,error:I}=(0,n.useMemo)(()=>{try{return{parsed:JSON.parse(o),error:null}}catch(e){return{parsed:null,error:e.message}}},[o]),P=(0,n.useMemo)(()=>{if(!t.trim()||null===L)return null;try{return(0,u.Y)(L,t)}catch{return null}},[t,L]),_=(0,n.useCallback)(()=>{null!==L&&r(JSON.stringify(L,null,2))},[L]),H=(0,n.useCallback)(()=>{null!==L&&r(JSON.stringify(L))},[L]),U=t.trim().length>0,V=(0,f.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,f.jsx)(g,{onClick:_,disabled:!!I,children:"Format"}),(0,f.jsx)(g,{onClick:H,disabled:!!I,children:"Minify"}),(0,f.jsx)(s.UO,{appId:"jsonexplorer",onLoad:(e,o,n)=>{r(e),A(o&&n?{id:o,name:n}:null)}}),(0,f.jsxs)(h,{onClick:()=>R(!0),children:[(0,f.jsx)(p.A,{size:14}),"Save"]}),(0,f.jsxs)(F,{ref:B,children:[(0,f.jsxs)(g,{onClick:()=>d(e=>!e),children:["Examples ",(0,f.jsx)(a.A,{size:12})]}),i&&(0,f.jsx)(N,{children:x.k.map(e=>(0,f.jsx)(O,{onClick:()=>{r(e.json),l(""),d(!1)},children:e.label},e.label))})]}),e]});return(0,f.jsxs)(s.PE,{title:"JSON Explorer",sidebar:(0,f.jsx)(s.tz,{activeAppId:"jsonexplorer"}),topBarRight:V,children:[c&&(0,f.jsx)(s.MJ,{onSave:async e=>{R(!1),await(0,s.KL)("jsonexplorer",e,o),A(null)},onUpdate:async()=>{J&&(R(!1),await(0,s.mZ)(J.id,J.name,o))},existingDoc:J??void 0,onCancel:()=>R(!1)}),(0,f.jsxs)(m,{children:[(0,f.jsxs)(w,{children:[(0,f.jsxs)(b,{children:[(0,f.jsx)("span",{children:"Raw JSON"}),!I&&null!==L&&(0,f.jsx)(K,{text:o})]}),(0,f.jsx)(j,{hasError:!!I,value:o,onChange:e=>r(e.target.value),spellCheck:!1,placeholder:"Paste JSON here…"}),I&&(0,f.jsxs)($,{children:["⚠ ",I]})]}),(0,f.jsxs)(y,{children:[(0,f.jsx)(b,{children:(0,f.jsx)("span",{children:"Tree View"})}),U?(0,f.jsx)(M,{children:P&&P.length>0?P.map((e,o)=>(0,f.jsxs)(T,{children:[(0,f.jsx)(C,{children:e.path}),(0,f.jsx)(E,{children:JSON.stringify(e.value,null,2)})]},o)):(0,f.jsx)("span",{style:{color:s.w4.colors.mainTextMuted,fontSize:13},children:"No results"})}):(0,f.jsx)(v,{children:null!==L?(0,f.jsx)(D,{value:L,level:0,isLast:!0,defaultExpanded:!0}):(0,f.jsx)("span",{style:{color:s.w4.colors.mainTextMuted,fontSize:13},children:I?"Fix JSON to see tree":"Paste JSON on the left"})}),(0,f.jsxs)(k,{children:[(0,f.jsx)(S,{children:"JSONPath:"}),(0,f.jsx)(z,{value:t,onChange:e=>l(e.target.value),placeholder:"$.users[*].name",spellCheck:!1}),t&&(0,f.jsx)("span",{style:{fontSize:11,color:s.w4.colors.mainTextMuted},children:P?`${P.length} result${1!==P.length?"s":""}`:"—"})]})]})]})]})}const Y=document.getElementById("root");if(!Y)throw new Error("Root element #root not found");(0,t.H)(Y).render((0,f.jsx)(V,{}))},8997(e,o,r){var n=r(8991);o.H=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=188.e8aab372d612f639531b.js.map