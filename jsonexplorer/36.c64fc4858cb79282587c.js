"use strict";(self.webpackChunk_atlantis_jsonexplorer=self.webpackChunk_atlantis_jsonexplorer||[]).push([[36],{36(e,o,r){r.r(o),r.d(o,{default:()=>Q});var n=r(359),l=r(233),t=r(807),i=r(609),s=r(679),a=r(753),d=r(320),c=r(336),p=r(54),x=r(723);const f=l.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,u=l.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  padding: 0 ${t.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${t.w4.spacing.sm};
`,h=l.default.button`
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
`,g=l.default.span`
  color: ${t.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,m=l.default.div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
  margin-right: ${t.w4.spacing.sm};
`,w=l.default.div`flex: 1;`,y=l.default.button`
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
`,b=l.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  gap: 0;
`,j=l.default.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  min-width: 280px;
  border-right: 1px solid ${t.w4.colors.border};
  overflow: hidden;
`,$=l.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,v=l.default.div`
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
`,k=l.default.textarea`
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
`,z=l.default.div`
  padding: ${t.w4.spacing.sm} ${t.w4.spacing.md};
  background: rgba(248,113,113,0.1);
  border-top: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  font-size: 12px;
  font-family: ${t.w4.typography.fontFamilyMono};
  flex-shrink: 0;
`,T=l.default.div`
  flex: 1;
  overflow: auto;
  padding: ${t.w4.spacing.md};
`,S=l.default.div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  padding: ${t.w4.spacing.sm} ${t.w4.spacing.md};
  border-top: 1px solid ${t.w4.colors.border};
  background: ${t.w4.colors.sidebarBg};
  flex-shrink: 0;
`,M=l.default.input`
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
`,C=l.default.span`
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  white-space: nowrap;
`,F=l.default.div`
  flex: 1;
  overflow: auto;
  padding: ${t.w4.spacing.md};
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
`,N=l.default.div`
  margin-bottom: ${t.w4.spacing.sm};
  border-left: 2px solid ${t.w4.colors.accent};
  padding-left: ${t.w4.spacing.sm};
`,O=l.default.div`
  font-size: 11px;
  color: ${t.w4.colors.accent};
  margin-bottom: 2px;
`,B=l.default.pre`
  color: ${t.w4.colors.mainText};
  white-space: pre-wrap;
  font-size: 12px;
  margin: 0;
`,E=l.default.div`position: relative;`,J=l.default.div`
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
`,A=l.default.button`
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
`,R=l.default.span`color: #79c0ff;`,L=l.default.span`color: #a5d6ff;`,_=l.default.span`color: #f78166;`,P=l.default.span`color: #d2a8ff;`,H=l.default.span`color: ${t.w4.colors.mainTextMuted}; font-style: italic;`,V=l.default.span`color: ${t.w4.colors.mainTextMuted};`,Y=l.default.span`
  font-size: 10px;
  color: ${t.w4.colors.mainTextMuted};
  margin-left: 4px;
`,q=l.default.div`
  display: flex;
  align-items: flex-start;
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
  cursor: default;
  border-radius: 3px;
  padding: 0 2px;

  &:hover { background: rgba(255,255,255,0.04); }
`,D=l.default.button`
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
`,G=l.default.div`
  width: ${e=>16*e.level}px;
  flex-shrink: 0;
`;function I({keyName:e,value:o,level:r,isLast:l,defaultExpanded:i=r<2}){const[d,c]=(0,n.useState)(i),p=Array.isArray(o),f=null!==o&&"object"==typeof o&&!p,u=p||f,h=u?Object.keys(o).length:0;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(q,{children:[(0,x.jsx)(G,{level:r}),u?(0,x.jsx)(D,{onClick:()=>c(e=>!e),children:d?(0,x.jsx)(s.A,{size:12}):(0,x.jsx)(a.A,{size:12})}):(0,x.jsx)("div",{style:{width:16,flexShrink:0}}),void 0!==e&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(R,{children:['"',e,'"']}),(0,x.jsx)("span",{style:{color:t.w4.colors.mainTextMuted,marginRight:4},children:":"})]}),"string"==typeof o?(0,x.jsxs)(L,{children:['"',o,'"']}):"number"==typeof o?(0,x.jsx)(_,{children:o}):"boolean"==typeof o?(0,x.jsx)(P,{children:String(o)}):null===o?(0,x.jsx)(H,{children:"null"}):p?(0,x.jsx)(V,{children:"["}):f?(0,x.jsx)(V,{children:"{"}):null,u&&!d&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(Y,{children:[h," ",p?"items":"keys"]}),(0,x.jsx)(V,{children:p?"]":"}"})]}),!u&&!l&&(0,x.jsx)("span",{style:{color:t.w4.colors.mainTextMuted},children:","})]}),u&&d&&(0,x.jsxs)(x.Fragment,{children:[p?o.map((e,n)=>(0,x.jsx)(I,{keyName:String(n),value:e,level:r+1,isLast:n===o.length-1,defaultExpanded:r+1<2},n)):Object.entries(o).map(([e,o],n,l)=>(0,x.jsx)(I,{keyName:e,value:o,level:r+1,isLast:n===l.length-1,defaultExpanded:r+1<2},e)),(0,x.jsxs)(q,{children:[(0,x.jsx)(G,{level:r}),(0,x.jsx)("div",{style:{width:16}}),(0,x.jsx)(V,{children:p?"]":"}"}),!l&&(0,x.jsx)("span",{style:{color:t.w4.colors.mainTextMuted},children:","})]})]})]})}function K({text:e}){const[o,r]=(0,n.useState)(!1);return(0,x.jsxs)(y,{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{r(!0),setTimeout(()=>r(!1),1500)})},title:"Copy to clipboard",children:[o?(0,x.jsx)(i.A,{size:12}):(0,x.jsx)(d.A,{size:12}),o?"Copied":"Copy"]})}function Q({topBarRight:e}){const[o,r]=(0,n.useState)(c.k[0].json),[l,i]=(0,n.useState)(""),[a,d]=(0,n.useState)(!1),R=(0,n.useRef)(null);(0,n.useEffect)(()=>{const e=e=>{R.current&&!R.current.contains(e.target)&&d(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const{parsed:L,error:_}=(0,n.useMemo)(()=>{try{return{parsed:JSON.parse(o),error:null}}catch(e){return{parsed:null,error:e.message}}},[o]),P=(0,n.useMemo)(()=>{if(!l.trim()||null===L)return null;try{return(0,p.Y)(L,l)}catch{return null}},[l,L]),H=(0,n.useCallback)(()=>{null!==L&&r(JSON.stringify(L,null,2))},[L]),V=(0,n.useCallback)(()=>{null!==L&&r(JSON.stringify(L))},[L]),Y=l.trim().length>0;return(0,x.jsxs)(f,{children:[(0,x.jsxs)(u,{children:[(0,x.jsxs)(h,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,x.jsx)("span",{children:"antis"})]}),(0,x.jsx)(g,{children:"/"}),(0,x.jsx)(m,{children:"JSON Explorer"}),(0,x.jsx)(y,{onClick:H,disabled:!!_,children:"Format"}),(0,x.jsx)(y,{onClick:V,disabled:!!_,children:"Minify"}),(0,x.jsx)(w,{}),(0,x.jsxs)(E,{ref:R,children:[(0,x.jsxs)(y,{onClick:()=>d(e=>!e),children:["Examples ",(0,x.jsx)(s.A,{size:12})]}),a&&(0,x.jsx)(J,{children:c.k.map(e=>(0,x.jsx)(A,{onClick:()=>{r(e.json),i(""),d(!1)},children:e.label},e.label))})]}),e]}),(0,x.jsxs)(b,{children:[(0,x.jsxs)(j,{children:[(0,x.jsxs)(v,{children:[(0,x.jsx)("span",{children:"Raw JSON"}),!_&&null!==L&&(0,x.jsx)(K,{text:o})]}),(0,x.jsx)(k,{hasError:!!_,value:o,onChange:e=>r(e.target.value),spellCheck:!1,placeholder:"Paste JSON here…"}),_&&(0,x.jsxs)(z,{children:["⚠ ",_]})]}),(0,x.jsxs)($,{children:[(0,x.jsx)(v,{children:(0,x.jsx)("span",{children:"Tree View"})}),Y?(0,x.jsx)(F,{children:P&&P.length>0?P.map((e,o)=>(0,x.jsxs)(N,{children:[(0,x.jsx)(O,{children:e.path}),(0,x.jsx)(B,{children:JSON.stringify(e.value,null,2)})]},o)):(0,x.jsx)("span",{style:{color:t.w4.colors.mainTextMuted,fontSize:13},children:"No results"})}):(0,x.jsx)(T,{children:null!==L?(0,x.jsx)(I,{value:L,level:0,isLast:!0,defaultExpanded:!0}):(0,x.jsx)("span",{style:{color:t.w4.colors.mainTextMuted,fontSize:13},children:_?"Fix JSON to see tree":"Paste JSON on the left"})}),(0,x.jsxs)(S,{children:[(0,x.jsx)(C,{children:"JSONPath:"}),(0,x.jsx)(M,{value:l,onChange:e=>i(e.target.value),placeholder:"$.users[*].name",spellCheck:!1}),l&&(0,x.jsx)("span",{style:{fontSize:11,color:t.w4.colors.mainTextMuted},children:P?`${P.length} result${1!==P.length?"s":""}`:"—"})]})]})]})]})}}}]);
//# sourceMappingURL=36.c64fc4858cb79282587c.js.map