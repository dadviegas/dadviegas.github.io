"use strict";(self.webpackChunk_atlantis_jsonexplorer=self.webpackChunk_atlantis_jsonexplorer||[]).push([[188],{188(e,o,r){var n=r(359),l=r(997),t=r(233),i=r(807),s=r(679),a=r(753),d=r(609),c=r(320),p=r(336),x=r(54),f=r(723);const u=t.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${i.w4.colors.mainBg};
  font-family: ${i.w4.typography.fontFamily};
  color: ${i.w4.colors.mainText};
  overflow: hidden;
`,h=t.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding: 0 ${i.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${i.w4.spacing.sm};
`,g=t.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${i.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${i.w4.colors.accent}; }
`,m=t.default.span`
  color: ${i.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,w=t.default.div`
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
  margin-right: ${i.w4.spacing.sm};
`,y=t.default.div`flex: 1;`,b=t.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${i.w4.spacing.sm};
  height: 30px;
  background: ${e=>"primary"===e.variant?i.w4.colors.accent:"transparent"};
  border: 1px solid ${e=>"primary"===e.variant?i.w4.colors.accent:i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${e=>"primary"===e.variant?"#fff":i.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${i.w4.colors.accent};
    color: ${e=>"primary"===e.variant?"#fff":i.w4.colors.mainText};
    background: ${e=>"primary"===e.variant?i.w4.colors.accent:"rgba(56,139,253,0.1)"};
  }
`,j=t.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  gap: 0;
`,$=t.default.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  min-width: 280px;
  border-right: 1px solid ${i.w4.colors.border};
  overflow: hidden;
`,v=t.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,k=t.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  border-bottom: 1px solid ${i.w4.colors.border};
  font-size: 11px;
  font-weight: 600;
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  flex-shrink: 0;
  background: ${i.w4.colors.sidebarBg};
`,z=t.default.textarea`
  flex: 1;
  background: ${i.w4.colors.mainBg};
  border: none;
  outline: none;
  padding: ${i.w4.spacing.md};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${e=>e.hasError?"#f87171":i.w4.colors.mainText};
  resize: none;
  line-height: 1.6;
  tab-size: 2;
`,T=t.default.div`
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  background: rgba(248,113,113,0.1);
  border-top: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  font-size: 12px;
  font-family: ${i.w4.typography.fontFamilyMono};
  flex-shrink: 0;
`,S=t.default.div`
  flex: 1;
  overflow: auto;
  padding: ${i.w4.spacing.md};
`,M=t.default.div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  border-top: 1px solid ${i.w4.colors.border};
  background: ${i.w4.colors.sidebarBg};
  flex-shrink: 0;
`,C=t.default.input`
  flex: 1;
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  padding: 4px 8px;
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 12px;
  color: ${i.w4.colors.mainText};
  outline: none;
  height: 28px;

  &:focus { border-color: ${i.w4.colors.accent}; }
  &::placeholder { color: ${i.w4.colors.mainTextMuted}; }
`,F=t.default.span`
  font-size: 11px;
  color: ${i.w4.colors.mainTextMuted};
  white-space: nowrap;
`,N=t.default.div`
  flex: 1;
  overflow: auto;
  padding: ${i.w4.spacing.md};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 12.5px;
`,E=t.default.div`
  margin-bottom: ${i.w4.spacing.sm};
  border-left: 2px solid ${i.w4.colors.accent};
  padding-left: ${i.w4.spacing.sm};
`,B=t.default.div`
  font-size: 11px;
  color: ${i.w4.colors.accent};
  margin-bottom: 2px;
`,O=t.default.pre`
  color: ${i.w4.colors.mainText};
  white-space: pre-wrap;
  font-size: 12px;
  margin: 0;
`,J=t.default.div`position: relative;`,R=t.default.div`
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
`,A=t.default.button`
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
  &:hover { background: ${i.w4.colors.mainBg}; }
`,L=t.default.span`color: #79c0ff;`,_=t.default.span`color: #a5d6ff;`,H=t.default.span`color: #f78166;`,P=t.default.span`color: #d2a8ff;`,I=t.default.span`color: ${i.w4.colors.mainTextMuted}; font-style: italic;`,V=t.default.span`color: ${i.w4.colors.mainTextMuted};`,Y=t.default.span`
  font-size: 10px;
  color: ${i.w4.colors.mainTextMuted};
  margin-left: 4px;
`,q=t.default.div`
  display: flex;
  align-items: flex-start;
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
  cursor: default;
  border-radius: 3px;
  padding: 0 2px;

  &:hover { background: rgba(255,255,255,0.04); }
`,D=t.default.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${i.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  margin-right: 2px;
  flex-shrink: 0;
  width: 16px;
  height: 20px;
`,G=t.default.div`
  width: ${e=>16*e.level}px;
  flex-shrink: 0;
`;function K({keyName:e,value:o,level:r,isLast:l,defaultExpanded:t=r<2}){const[d,c]=(0,n.useState)(t),p=Array.isArray(o),x=null!==o&&"object"==typeof o&&!p,u=p||x,h=u?Object.keys(o).length:0;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(q,{children:[(0,f.jsx)(G,{level:r}),u?(0,f.jsx)(D,{onClick:()=>c(e=>!e),children:d?(0,f.jsx)(s.A,{size:12}):(0,f.jsx)(a.A,{size:12})}):(0,f.jsx)("div",{style:{width:16,flexShrink:0}}),void 0!==e&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(L,{children:['"',e,'"']}),(0,f.jsx)("span",{style:{color:i.w4.colors.mainTextMuted,marginRight:4},children:":"})]}),"string"==typeof o?(0,f.jsxs)(_,{children:['"',o,'"']}):"number"==typeof o?(0,f.jsx)(H,{children:o}):"boolean"==typeof o?(0,f.jsx)(P,{children:String(o)}):null===o?(0,f.jsx)(I,{children:"null"}):p?(0,f.jsx)(V,{children:"["}):x?(0,f.jsx)(V,{children:"{"}):null,u&&!d&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(Y,{children:[h," ",p?"items":"keys"]}),(0,f.jsx)(V,{children:p?"]":"}"})]}),!u&&!l&&(0,f.jsx)("span",{style:{color:i.w4.colors.mainTextMuted},children:","})]}),u&&d&&(0,f.jsxs)(f.Fragment,{children:[p?o.map((e,n)=>(0,f.jsx)(K,{keyName:String(n),value:e,level:r+1,isLast:n===o.length-1,defaultExpanded:r+1<2},n)):Object.entries(o).map(([e,o],n,l)=>(0,f.jsx)(K,{keyName:e,value:o,level:r+1,isLast:n===l.length-1,defaultExpanded:r+1<2},e)),(0,f.jsxs)(q,{children:[(0,f.jsx)(G,{level:r}),(0,f.jsx)("div",{style:{width:16}}),(0,f.jsx)(V,{children:p?"]":"}"}),!l&&(0,f.jsx)("span",{style:{color:i.w4.colors.mainTextMuted},children:","})]})]})]})}function Q({text:e}){const[o,r]=(0,n.useState)(!1);return(0,f.jsxs)(b,{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{r(!0),setTimeout(()=>r(!1),1500)})},title:"Copy to clipboard",children:[o?(0,f.jsx)(d.A,{size:12}):(0,f.jsx)(c.A,{size:12}),o?"Copied":"Copy"]})}function U({topBarRight:e}){const[o,r]=(0,n.useState)(p.k[0].json),[l,t]=(0,n.useState)(""),[a,d]=(0,n.useState)(!1),c=(0,n.useRef)(null);(0,n.useEffect)(()=>{const e=e=>{c.current&&!c.current.contains(e.target)&&d(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const{parsed:L,error:_}=(0,n.useMemo)(()=>{try{return{parsed:JSON.parse(o),error:null}}catch(e){return{parsed:null,error:e.message}}},[o]),H=(0,n.useMemo)(()=>{if(!l.trim()||null===L)return null;try{return(0,x.Y)(L,l)}catch{return null}},[l,L]),P=(0,n.useCallback)(()=>{null!==L&&r(JSON.stringify(L,null,2))},[L]),I=(0,n.useCallback)(()=>{null!==L&&r(JSON.stringify(L))},[L]),V=l.trim().length>0;return(0,f.jsxs)(u,{children:[(0,f.jsxs)(h,{children:[(0,f.jsxs)(g,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,f.jsx)("span",{children:"antis"})]}),(0,f.jsx)(m,{children:"/"}),(0,f.jsx)(w,{children:"JSON Explorer"}),(0,f.jsx)(b,{onClick:P,disabled:!!_,children:"Format"}),(0,f.jsx)(b,{onClick:I,disabled:!!_,children:"Minify"}),(0,f.jsx)(y,{}),(0,f.jsxs)(J,{ref:c,children:[(0,f.jsxs)(b,{onClick:()=>d(e=>!e),children:["Examples ",(0,f.jsx)(s.A,{size:12})]}),a&&(0,f.jsx)(R,{children:p.k.map(e=>(0,f.jsx)(A,{onClick:()=>{r(e.json),t(""),d(!1)},children:e.label},e.label))})]}),e]}),(0,f.jsxs)(j,{children:[(0,f.jsxs)($,{children:[(0,f.jsxs)(k,{children:[(0,f.jsx)("span",{children:"Raw JSON"}),!_&&null!==L&&(0,f.jsx)(Q,{text:o})]}),(0,f.jsx)(z,{hasError:!!_,value:o,onChange:e=>r(e.target.value),spellCheck:!1,placeholder:"Paste JSON here…"}),_&&(0,f.jsxs)(T,{children:["⚠ ",_]})]}),(0,f.jsxs)(v,{children:[(0,f.jsx)(k,{children:(0,f.jsx)("span",{children:"Tree View"})}),V?(0,f.jsx)(N,{children:H&&H.length>0?H.map((e,o)=>(0,f.jsxs)(E,{children:[(0,f.jsx)(B,{children:e.path}),(0,f.jsx)(O,{children:JSON.stringify(e.value,null,2)})]},o)):(0,f.jsx)("span",{style:{color:i.w4.colors.mainTextMuted,fontSize:13},children:"No results"})}):(0,f.jsx)(S,{children:null!==L?(0,f.jsx)(K,{value:L,level:0,isLast:!0,defaultExpanded:!0}):(0,f.jsx)("span",{style:{color:i.w4.colors.mainTextMuted,fontSize:13},children:_?"Fix JSON to see tree":"Paste JSON on the left"})}),(0,f.jsxs)(M,{children:[(0,f.jsx)(F,{children:"JSONPath:"}),(0,f.jsx)(C,{value:l,onChange:e=>t(e.target.value),placeholder:"$.users[*].name",spellCheck:!1}),l&&(0,f.jsx)("span",{style:{fontSize:11,color:i.w4.colors.mainTextMuted},children:H?`${H.length} result${1!==H.length?"s":""}`:"—"})]})]})]})]})}const W=document.getElementById("root");if(!W)throw new Error("Root element #root not found");(0,l.H)(W).render((0,f.jsx)(U,{}))},997(e,o,r){var n=r(991);o.H=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=188.019c336e6678a89023b9.js.map