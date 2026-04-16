"use strict";(self.webpackChunk_atlantis_jsonexplorer=self.webpackChunk_atlantis_jsonexplorer||[]).push([[36],{6036(e,o,n){n.r(o),n.d(o,{default:()=>Q});var r=n(7359),l=n(3233),t=n(5723),a=n(5609),i=n(679),s=n(9753),d=n(320),c=n(6480),p=n(9336),x=n(9054),f=n(8104);const u=l.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,h=l.default.header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  padding-left: max(${t.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${t.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${t.w4.spacing.sm};
`,g=l.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${t.w4.colors.accent}; }
`,m=l.default.span`
  color: ${t.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,w=l.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
  margin-right: ${t.w4.spacing.sm};
`,y=l.default.div`flex: 1;`,b=l.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${t.w4.colors.accent};border-radius:${t.w4.borderRadius.md};color:${t.w4.colors.accent};font-size:${t.w4.typography.fontSizeBase};font-family:${t.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,j=l.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${t.w4.spacing.sm};
  height: 30px;
  background: ${e=>"primary"===e.variant?t.w4.colors.accent:"transparent"};
  border: 1px solid ${e=>"primary"===e.variant?t.w4.colors.accent:t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm};
  color: ${e=>"primary"===e.variant?"#fff":t.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${t.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${t.w4.colors.accent};
    color: ${e=>"primary"===e.variant?"#fff":t.w4.colors.mainText};
    background: ${e=>"primary"===e.variant?t.w4.colors.accent:"rgba(56,139,253,0.1)"};
  }
`,$=l.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  gap: 0;
`,v=l.default.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  min-width: 280px;
  border-right: 1px solid ${t.w4.colors.border};
  overflow: hidden;
`,k=l.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,z=l.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${t.w4.spacing.sm} ${t.w4.spacing.md};
  border-bottom: 1px solid ${t.w4.colors.border};
  font-size: 11px;
  font-weight: 600;
  color: ${t.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  flex-shrink: 0;
  background: ${t.w4.colors.sidebarBg};
`,S=l.default.textarea`
  flex: 1;
  background: ${t.w4.colors.mainBg};
  border: none;
  outline: none;
  padding: ${t.w4.spacing.md};
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${e=>e.hasError?"#f87171":t.w4.colors.mainText};
  resize: none;
  line-height: 1.6;
  tab-size: 2;
`,T=l.default.div`
  padding: ${t.w4.spacing.sm} ${t.w4.spacing.md};
  background: rgba(248,113,113,0.1);
  border-top: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  font-size: 12px;
  font-family: ${t.w4.typography.fontFamilyMono};
  flex-shrink: 0;
`,M=l.default.div`
  flex: 1;
  overflow: auto;
  padding: ${t.w4.spacing.md};
`,C=l.default.div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  padding: ${t.w4.spacing.sm} ${t.w4.spacing.md};
  border-top: 1px solid ${t.w4.colors.border};
  background: ${t.w4.colors.sidebarBg};
  flex-shrink: 0;
`,F=l.default.input`
  flex: 1;
  background: ${t.w4.colors.mainBg};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm};
  padding: 4px 8px;
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12px;
  color: ${t.w4.colors.mainText};
  outline: none;
  height: 28px;

  &:focus { border-color: ${t.w4.colors.accent}; }
  &::placeholder { color: ${t.w4.colors.mainTextMuted}; }
`,N=l.default.span`
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  white-space: nowrap;
`,O=l.default.div`
  flex: 1;
  overflow: auto;
  padding: ${t.w4.spacing.md};
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
`,B=l.default.div`
  margin-bottom: ${t.w4.spacing.sm};
  border-left: 2px solid ${t.w4.colors.accent};
  padding-left: ${t.w4.spacing.sm};
`,E=l.default.div`
  font-size: 11px;
  color: ${t.w4.colors.accent};
  margin-bottom: 2px;
`,J=l.default.pre`
  color: ${t.w4.colors.mainText};
  white-space: pre-wrap;
  font-size: 12px;
  margin: 0;
`,A=l.default.div`position: relative;`,L=l.default.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200;
  min-width: 200px;
  overflow: hidden;
`,R=l.default.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: ${t.w4.spacing.sm} ${t.w4.spacing.md};
  background: transparent;
  border: none;
  color: ${t.w4.colors.mainText};
  font-size: 13px;
  font-family: ${t.w4.typography.fontFamily};
  cursor: pointer;
  &:hover { background: ${t.w4.colors.mainBg}; }
`,_=l.default.span`color: #79c0ff;`,P=l.default.span`color: #a5d6ff;`,U=l.default.span`color: #f78166;`,D=l.default.span`color: #d2a8ff;`,H=l.default.span`color: ${t.w4.colors.mainTextMuted}; font-style: italic;`,I=l.default.span`color: ${t.w4.colors.mainTextMuted};`,K=l.default.span`
  font-size: 10px;
  color: ${t.w4.colors.mainTextMuted};
  margin-left: 4px;
`,V=l.default.div`
  display: flex;
  align-items: flex-start;
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
  cursor: default;
  border-radius: 3px;
  padding: 0 2px;

  &:hover { background: rgba(255,255,255,0.04); }
`,Y=l.default.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${t.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  margin-right: 2px;
  flex-shrink: 0;
  width: 16px;
  height: 20px;
`,Z=l.default.div`
  width: ${e=>16*e.level}px;
  flex-shrink: 0;
`;function q({keyName:e,value:o,level:n,isLast:l,defaultExpanded:a=n<2}){const[d,c]=(0,r.useState)(a),p=Array.isArray(o),x=null!==o&&"object"==typeof o&&!p,u=p||x,h=u?Object.keys(o).length:0;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(V,{children:[(0,f.jsx)(Z,{level:n}),u?(0,f.jsx)(Y,{onClick:()=>c(e=>!e),children:d?(0,f.jsx)(i.A,{size:12}):(0,f.jsx)(s.A,{size:12})}):(0,f.jsx)("div",{style:{width:16,flexShrink:0}}),void 0!==e&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(_,{children:['"',e,'"']}),(0,f.jsx)("span",{style:{color:t.w4.colors.mainTextMuted,marginRight:4},children:":"})]}),"string"==typeof o?(0,f.jsxs)(P,{children:['"',o,'"']}):"number"==typeof o?(0,f.jsx)(U,{children:o}):"boolean"==typeof o?(0,f.jsx)(D,{children:String(o)}):null===o?(0,f.jsx)(H,{children:"null"}):p?(0,f.jsx)(I,{children:"["}):x?(0,f.jsx)(I,{children:"{"}):null,u&&!d&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(K,{children:[h," ",p?"items":"keys"]}),(0,f.jsx)(I,{children:p?"]":"}"})]}),!u&&!l&&(0,f.jsx)("span",{style:{color:t.w4.colors.mainTextMuted},children:","})]}),u&&d&&(0,f.jsxs)(f.Fragment,{children:[p?o.map((e,r)=>(0,f.jsx)(q,{keyName:String(r),value:e,level:n+1,isLast:r===o.length-1,defaultExpanded:n+1<2},r)):Object.entries(o).map(([e,o],r,l)=>(0,f.jsx)(q,{keyName:e,value:o,level:n+1,isLast:r===l.length-1,defaultExpanded:n+1<2},e)),(0,f.jsxs)(V,{children:[(0,f.jsx)(Z,{level:n}),(0,f.jsx)("div",{style:{width:16}}),(0,f.jsx)(I,{children:p?"]":"}"}),!l&&(0,f.jsx)("span",{style:{color:t.w4.colors.mainTextMuted},children:","})]})]})]})}function G({text:e}){const[o,n]=(0,r.useState)(!1);return(0,f.jsxs)(j,{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{n(!0),setTimeout(()=>n(!1),1500)})},title:"Copy to clipboard",children:[o?(0,f.jsx)(a.A,{size:12}):(0,f.jsx)(d.A,{size:12}),o?"Copied":"Copy"]})}function Q({topBarRight:e}){const[o,n]=(0,r.useState)(p.k[0].json),[l,a]=(0,r.useState)(""),[s,d]=(0,r.useState)(!1),[_,P]=(0,r.useState)(!1),[U,D]=(0,r.useState)(null),H=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=e=>{H.current&&!H.current.contains(e.target)&&d(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const{parsed:I,error:K}=(0,r.useMemo)(()=>{try{return{parsed:JSON.parse(o),error:null}}catch(e){return{parsed:null,error:e.message}}},[o]),V=(0,r.useMemo)(()=>{if(!l.trim()||null===I)return null;try{return(0,x.Y)(I,l)}catch{return null}},[l,I]),Y=(0,r.useCallback)(()=>{null!==I&&n(JSON.stringify(I,null,2))},[I]),Z=(0,r.useCallback)(()=>{null!==I&&n(JSON.stringify(I))},[I]),Q=l.trim().length>0;return(0,f.jsxs)(u,{children:[(0,f.jsxs)(h,{children:[(0,f.jsxs)(g,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,f.jsx)("span",{children:"antis"})]}),(0,f.jsx)(m,{children:"/"}),(0,f.jsx)(w,{children:"JSON Explorer"}),(0,f.jsx)(j,{onClick:Y,disabled:!!K,children:"Format"}),(0,f.jsx)(j,{onClick:Z,disabled:!!K,children:"Minify"}),(0,f.jsx)(y,{}),(0,f.jsx)(t.UO,{appId:"jsonexplorer",onLoad:(e,o,r)=>{n(e),D(o&&r?{id:o,name:r}:null)}}),(0,f.jsxs)(b,{onClick:()=>P(!0),children:[(0,f.jsx)(c.A,{size:14}),"Save"]}),(0,f.jsxs)(A,{ref:H,children:[(0,f.jsxs)(j,{onClick:()=>d(e=>!e),children:["Examples ",(0,f.jsx)(i.A,{size:12})]}),s&&(0,f.jsx)(L,{children:p.k.map(e=>(0,f.jsx)(R,{onClick:()=>{n(e.json),a(""),d(!1)},children:e.label},e.label))})]}),e]}),_&&(0,f.jsx)(t.MJ,{onSave:async e=>{P(!1),await(0,t.KL)("jsonexplorer",e,o),D(null)},onUpdate:async()=>{U&&(P(!1),await(0,t.mZ)(U.id,U.name,o))},existingDoc:U??void 0,onCancel:()=>P(!1)}),(0,f.jsxs)($,{children:[(0,f.jsxs)(v,{children:[(0,f.jsxs)(z,{children:[(0,f.jsx)("span",{children:"Raw JSON"}),!K&&null!==I&&(0,f.jsx)(G,{text:o})]}),(0,f.jsx)(S,{hasError:!!K,value:o,onChange:e=>n(e.target.value),spellCheck:!1,placeholder:"Paste JSON here…"}),K&&(0,f.jsxs)(T,{children:["⚠ ",K]})]}),(0,f.jsxs)(k,{children:[(0,f.jsx)(z,{children:(0,f.jsx)("span",{children:"Tree View"})}),Q?(0,f.jsx)(O,{children:V&&V.length>0?V.map((e,o)=>(0,f.jsxs)(B,{children:[(0,f.jsx)(E,{children:e.path}),(0,f.jsx)(J,{children:JSON.stringify(e.value,null,2)})]},o)):(0,f.jsx)("span",{style:{color:t.w4.colors.mainTextMuted,fontSize:13},children:"No results"})}):(0,f.jsx)(M,{children:null!==I?(0,f.jsx)(q,{value:I,level:0,isLast:!0,defaultExpanded:!0}):(0,f.jsx)("span",{style:{color:t.w4.colors.mainTextMuted,fontSize:13},children:K?"Fix JSON to see tree":"Paste JSON on the left"})}),(0,f.jsxs)(C,{children:[(0,f.jsx)(N,{children:"JSONPath:"}),(0,f.jsx)(F,{value:l,onChange:e=>a(e.target.value),placeholder:"$.users[*].name",spellCheck:!1}),l&&(0,f.jsx)("span",{style:{fontSize:11,color:t.w4.colors.mainTextMuted},children:V?`${V.length} result${1!==V.length?"s":""}`:"—"})]})]})]})]})}}}]);
//# sourceMappingURL=36.9069b94a539b62cd9377.js.map