"use strict";(self.webpackChunk_atlantis_jsonexplorer=self.webpackChunk_atlantis_jsonexplorer||[]).push([[36],{6036(e,r,o){o.r(r),o.d(r,{default:()=>V});var n=o(7359),l=o(3233),t=o(894),s=o(5609),a=o(679),i=o(9753),d=o(320),c=o(6480),p=o(9336),x=o(9054),u=o(5723);const f=l.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${t.w4.colors.accent};border-radius:${t.w4.borderRadius.md};color:${t.w4.colors.accent};font-size:${t.w4.typography.fontSizeBase};font-family:${t.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,h=l.default.button`
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
`,g=l.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  gap: 0;
`,m=l.default.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  min-width: 280px;
  border-right: 1px solid ${t.w4.colors.border};
  overflow: hidden;
`,w=l.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,y=l.default.div`
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
`,b=l.default.textarea`
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
`,j=l.default.div`
  padding: ${t.w4.spacing.sm} ${t.w4.spacing.md};
  background: rgba(248,113,113,0.1);
  border-top: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  font-size: 12px;
  font-family: ${t.w4.typography.fontFamilyMono};
  flex-shrink: 0;
`,$=l.default.div`
  flex: 1;
  overflow: auto;
  padding: ${t.w4.spacing.md};
`,v=l.default.div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  padding: ${t.w4.spacing.sm} ${t.w4.spacing.md};
  border-top: 1px solid ${t.w4.colors.border};
  background: ${t.w4.colors.sidebarBg};
  flex-shrink: 0;
`,k=l.default.input`
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
`,z=l.default.span`
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  white-space: nowrap;
`,S=l.default.div`
  flex: 1;
  overflow: auto;
  padding: ${t.w4.spacing.md};
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
`,M=l.default.div`
  margin-bottom: ${t.w4.spacing.sm};
  border-left: 2px solid ${t.w4.colors.accent};
  padding-left: ${t.w4.spacing.sm};
`,T=l.default.div`
  font-size: 11px;
  color: ${t.w4.colors.accent};
  margin-bottom: 2px;
`,C=l.default.pre`
  color: ${t.w4.colors.mainText};
  white-space: pre-wrap;
  font-size: 12px;
  margin: 0;
`,F=l.default.div`position: relative;`,N=l.default.div`
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
`,O=l.default.button`
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
`,E=l.default.span`color: #79c0ff;`,J=l.default.span`color: #a5d6ff;`,A=l.default.span`color: #f78166;`,R=l.default.span`color: #d2a8ff;`,B=l.default.span`color: ${t.w4.colors.mainTextMuted}; font-style: italic;`,L=l.default.span`color: ${t.w4.colors.mainTextMuted};`,P=l.default.span`
  font-size: 10px;
  color: ${t.w4.colors.mainTextMuted};
  margin-left: 4px;
`,_=l.default.div`
  display: flex;
  align-items: flex-start;
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
  cursor: default;
  border-radius: 3px;
  padding: 0 2px;

  &:hover { background: rgba(255,255,255,0.04); }
`,I=l.default.button`
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
`,U=l.default.div`
  width: ${e=>16*e.level}px;
  flex-shrink: 0;
`;function D({keyName:e,value:r,level:o,isLast:l,defaultExpanded:s=o<2}){const[d,c]=(0,n.useState)(s),p=Array.isArray(r),x=null!==r&&"object"==typeof r&&!p,f=p||x,h=f?Object.keys(r).length:0;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(_,{children:[(0,u.jsx)(U,{level:o}),f?(0,u.jsx)(I,{onClick:()=>c(e=>!e),children:d?(0,u.jsx)(a.A,{size:12}):(0,u.jsx)(i.A,{size:12})}):(0,u.jsx)("div",{style:{width:16,flexShrink:0}}),void 0!==e&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(E,{children:['"',e,'"']}),(0,u.jsx)("span",{style:{color:t.w4.colors.mainTextMuted,marginRight:4},children:":"})]}),"string"==typeof r?(0,u.jsxs)(J,{children:['"',r,'"']}):"number"==typeof r?(0,u.jsx)(A,{children:r}):"boolean"==typeof r?(0,u.jsx)(R,{children:String(r)}):null===r?(0,u.jsx)(B,{children:"null"}):p?(0,u.jsx)(L,{children:"["}):x?(0,u.jsx)(L,{children:"{"}):null,f&&!d&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(P,{children:[h," ",p?"items":"keys"]}),(0,u.jsx)(L,{children:p?"]":"}"})]}),!f&&!l&&(0,u.jsx)("span",{style:{color:t.w4.colors.mainTextMuted},children:","})]}),f&&d&&(0,u.jsxs)(u.Fragment,{children:[p?r.map((e,n)=>(0,u.jsx)(D,{keyName:String(n),value:e,level:o+1,isLast:n===r.length-1,defaultExpanded:o+1<2},n)):Object.entries(r).map(([e,r],n,l)=>(0,u.jsx)(D,{keyName:e,value:r,level:o+1,isLast:n===l.length-1,defaultExpanded:o+1<2},e)),(0,u.jsxs)(_,{children:[(0,u.jsx)(U,{level:o}),(0,u.jsx)("div",{style:{width:16}}),(0,u.jsx)(L,{children:p?"]":"}"}),!l&&(0,u.jsx)("span",{style:{color:t.w4.colors.mainTextMuted},children:","})]})]})]})}function K({text:e}){const[r,o]=(0,n.useState)(!1);return(0,u.jsxs)(h,{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1500)})},title:"Copy to clipboard",children:[r?(0,u.jsx)(s.A,{size:12}):(0,u.jsx)(d.A,{size:12}),r?"Copied":"Copy"]})}function V({topBarRight:e}){const[r,o]=(0,n.useState)(p.k[0].json),[l,s]=(0,n.useState)(""),[i,d]=(0,n.useState)(!1),[E,J]=(0,n.useState)(!1),[A,R]=(0,n.useState)(null),B=(0,n.useRef)(null);(0,n.useEffect)(()=>{const e=e=>{B.current&&!B.current.contains(e.target)&&d(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const{parsed:L,error:P}=(0,n.useMemo)(()=>{try{return{parsed:JSON.parse(r),error:null}}catch(e){return{parsed:null,error:e.message}}},[r]),_=(0,n.useMemo)(()=>{if(!l.trim()||null===L)return null;try{return(0,x.Y)(L,l)}catch{return null}},[l,L]),I=(0,n.useCallback)(()=>{null!==L&&o(JSON.stringify(L,null,2))},[L]),U=(0,n.useCallback)(()=>{null!==L&&o(JSON.stringify(L))},[L]),V=l.trim().length>0,Y=(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,u.jsx)(h,{onClick:I,disabled:!!P,children:"Format"}),(0,u.jsx)(h,{onClick:U,disabled:!!P,children:"Minify"}),(0,u.jsx)(t.UO,{appId:"jsonexplorer",onLoad:(e,r,n)=>{o(e),R(r&&n?{id:r,name:n}:null)}}),(0,u.jsxs)(f,{onClick:()=>J(!0),children:[(0,u.jsx)(c.A,{size:14}),"Save"]}),(0,u.jsxs)(F,{ref:B,children:[(0,u.jsxs)(h,{onClick:()=>d(e=>!e),children:["Examples ",(0,u.jsx)(a.A,{size:12})]}),i&&(0,u.jsx)(N,{children:p.k.map(e=>(0,u.jsx)(O,{onClick:()=>{o(e.json),s(""),d(!1)},children:e.label},e.label))})]}),e]});return(0,u.jsxs)(t.PE,{title:"JSON Explorer",sidebar:(0,u.jsx)(t.tz,{activeAppId:"jsonexplorer"}),topBarRight:Y,children:[E&&(0,u.jsx)(t.MJ,{onSave:async e=>{J(!1),await(0,t.KL)("jsonexplorer",e,r),R(null)},onUpdate:async()=>{A&&(J(!1),await(0,t.mZ)(A.id,A.name,r))},existingDoc:A??void 0,onCancel:()=>J(!1)}),(0,u.jsxs)(g,{children:[(0,u.jsxs)(m,{children:[(0,u.jsxs)(y,{children:[(0,u.jsx)("span",{children:"Raw JSON"}),!P&&null!==L&&(0,u.jsx)(K,{text:r})]}),(0,u.jsx)(b,{hasError:!!P,value:r,onChange:e=>o(e.target.value),spellCheck:!1,placeholder:"Paste JSON here…"}),P&&(0,u.jsxs)(j,{children:["⚠ ",P]})]}),(0,u.jsxs)(w,{children:[(0,u.jsx)(y,{children:(0,u.jsx)("span",{children:"Tree View"})}),V?(0,u.jsx)(S,{children:_&&_.length>0?_.map((e,r)=>(0,u.jsxs)(M,{children:[(0,u.jsx)(T,{children:e.path}),(0,u.jsx)(C,{children:JSON.stringify(e.value,null,2)})]},r)):(0,u.jsx)("span",{style:{color:t.w4.colors.mainTextMuted,fontSize:13},children:"No results"})}):(0,u.jsx)($,{children:null!==L?(0,u.jsx)(D,{value:L,level:0,isLast:!0,defaultExpanded:!0}):(0,u.jsx)("span",{style:{color:t.w4.colors.mainTextMuted,fontSize:13},children:P?"Fix JSON to see tree":"Paste JSON on the left"})}),(0,u.jsxs)(v,{children:[(0,u.jsx)(z,{children:"JSONPath:"}),(0,u.jsx)(k,{value:l,onChange:e=>s(e.target.value),placeholder:"$.users[*].name",spellCheck:!1}),l&&(0,u.jsx)("span",{style:{fontSize:11,color:t.w4.colors.mainTextMuted},children:_?`${_.length} result${1!==_.length?"s":""}`:"—"})]})]})]})]})}}}]);
//# sourceMappingURL=36.12be622fb63ec7f32bf7.js.map