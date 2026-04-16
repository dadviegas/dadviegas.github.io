"use strict";(self.webpackChunk_atlantis_jsonexplorer=self.webpackChunk_atlantis_jsonexplorer||[]).push([[36],{6036(e,r,o){o.r(r),o.d(r,{default:()=>Z});var n=o(7359),t=o(3233),l=o(894),s=o(5609),a=o(679),i=o(9753),d=o(320),c=o(1344),p=o(6480),x=o(9336),u=o(9054),f=o(5723);const h=t.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${l.w4.colors.accent};border-radius:${l.w4.borderRadius.md};color:${l.w4.colors.accent};font-size:${l.w4.typography.fontSizeBase};font-family:${l.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,g=t.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${l.w4.spacing.sm};
  height: 30px;
  background: ${e=>"primary"===e.variant?l.w4.colors.accent:"transparent"};
  border: 1px solid ${e=>"primary"===e.variant?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${e=>"primary"===e.variant?"#fff":l.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${l.w4.colors.accent};
    color: ${e=>"primary"===e.variant?"#fff":l.w4.colors.mainText};
    background: ${e=>"primary"===e.variant?l.w4.colors.accent:"rgba(56,139,253,0.1)"};
  }
`,m=t.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  gap: 0;
`,w=t.default.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  min-width: 280px;
  border-right: 1px solid ${l.w4.colors.border};
  overflow: hidden;
`,y=t.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,b=t.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.border};
  font-size: 11px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  flex-shrink: 0;
  background: ${l.w4.colors.sidebarBg};
`,j=t.default.textarea`
  flex: 1;
  background: ${l.w4.colors.mainBg};
  border: none;
  outline: none;
  padding: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${e=>e.hasError?"#f87171":l.w4.colors.mainText};
  resize: none;
  line-height: 1.6;
  tab-size: 2;
`,$=t.default.div`
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  background: rgba(248,113,113,0.1);
  border-top: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  font-size: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  flex-shrink: 0;
`,v=t.default.div`
  flex: 1;
  overflow: auto;
  padding: ${l.w4.spacing.md};
`,k=t.default.div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  border-top: 1px solid ${l.w4.colors.border};
  background: ${l.w4.colors.sidebarBg};
  flex-shrink: 0;
`,z=t.default.input`
  flex: 1;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 4px 8px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12px;
  color: ${l.w4.colors.mainText};
  outline: none;
  height: 28px;

  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
`,S=t.default.span`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
`,T=t.default.div`
  flex: 1;
  overflow: auto;
  padding: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12.5px;
`,M=t.default.div`
  margin-bottom: ${l.w4.spacing.sm};
  border-left: 2px solid ${l.w4.colors.accent};
  padding-left: ${l.w4.spacing.sm};
`,C=t.default.div`
  font-size: 11px;
  color: ${l.w4.colors.accent};
  margin-bottom: 2px;
`,N=t.default.pre`
  color: ${l.w4.colors.mainText};
  white-space: pre-wrap;
  font-size: 12px;
  margin: 0;
`,O=t.default.div`position: relative;`,E=t.default.div`
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
`,F=t.default.button`
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
  &:hover { background: ${l.w4.colors.mainBg}; }
`,J=t.default.span`color: #79c0ff;`,A=t.default.span`color: #a5d6ff;`,R=t.default.span`color: #f78166;`,L=t.default.span`color: #d2a8ff;`,B=t.default.span`color: ${l.w4.colors.mainTextMuted}; font-style: italic;`,I=t.default.span`color: ${l.w4.colors.mainTextMuted};`,P=t.default.span`
  font-size: 10px;
  color: ${l.w4.colors.mainTextMuted};
  margin-left: 4px;
`,_=t.default.div`
  display: flex;
  align-items: flex-start;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
  cursor: default;
  border-radius: 3px;
  padding: 0 2px;

  &:hover { background: rgba(255,255,255,0.04); }
`,U=t.default.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  margin-right: 2px;
  flex-shrink: 0;
  width: 16px;
  height: 20px;
`,D=t.default.div`
  width: ${e=>16*e.level}px;
  flex-shrink: 0;
`;function K({keyName:e,value:r,level:o,isLast:t,defaultExpanded:s=o<2}){const[d,c]=(0,n.useState)(s),p=Array.isArray(r),x=null!==r&&"object"==typeof r&&!p,u=p||x,h=u?Object.keys(r).length:0;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(_,{children:[(0,f.jsx)(D,{level:o}),u?(0,f.jsx)(U,{onClick:()=>c(e=>!e),children:d?(0,f.jsx)(a.A,{size:12}):(0,f.jsx)(i.A,{size:12})}):(0,f.jsx)("div",{style:{width:16,flexShrink:0}}),void 0!==e&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(J,{children:['"',e,'"']}),(0,f.jsx)("span",{style:{color:l.w4.colors.mainTextMuted,marginRight:4},children:":"})]}),"string"==typeof r?(0,f.jsxs)(A,{children:['"',r,'"']}):"number"==typeof r?(0,f.jsx)(R,{children:r}):"boolean"==typeof r?(0,f.jsx)(L,{children:String(r)}):null===r?(0,f.jsx)(B,{children:"null"}):p?(0,f.jsx)(I,{children:"["}):x?(0,f.jsx)(I,{children:"{"}):null,u&&!d&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(P,{children:[h," ",p?"items":"keys"]}),(0,f.jsx)(I,{children:p?"]":"}"})]}),!u&&!t&&(0,f.jsx)("span",{style:{color:l.w4.colors.mainTextMuted},children:","})]}),u&&d&&(0,f.jsxs)(f.Fragment,{children:[p?r.map((e,n)=>(0,f.jsx)(K,{keyName:String(n),value:e,level:o+1,isLast:n===r.length-1,defaultExpanded:o+1<2},n)):Object.entries(r).map(([e,r],n,t)=>(0,f.jsx)(K,{keyName:e,value:r,level:o+1,isLast:n===t.length-1,defaultExpanded:o+1<2},e)),(0,f.jsxs)(_,{children:[(0,f.jsx)(D,{level:o}),(0,f.jsx)("div",{style:{width:16}}),(0,f.jsx)(I,{children:p?"]":"}"}),!t&&(0,f.jsx)("span",{style:{color:l.w4.colors.mainTextMuted},children:","})]})]})]})}function V({text:e}){const[r,o]=(0,n.useState)(!1);return(0,f.jsxs)(g,{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1500)})},title:"Copy to clipboard",children:[r?(0,f.jsx)(s.A,{size:12}):(0,f.jsx)(d.A,{size:12}),r?"Copied":"Copy"]})}const Y="toolkit:jsonexplorer";function Z({topBarRight:e}){const[r,o]=(0,n.useState)(""),[t,s]=(0,n.useState)(""),[i,d]=(0,n.useState)(!1),[J,A]=(0,n.useState)(!1),[R,L]=(0,n.useState)(null),B=(0,n.useRef)(null),I=(0,n.useRef)(!1);(0,n.useEffect)(()=>{(0,l.PL)(Y).then(e=>{if(e)try{const r=JSON.parse(e);o(r.raw??""),s(r.filter??"")}catch{}I.current=!0})},[]),(0,n.useEffect)(()=>{if(!I.current)return;const e=setTimeout(()=>(0,l.Is)(Y,JSON.stringify({raw:r,filter:t})),400);return()=>clearTimeout(e)},[r,t]),(0,n.useEffect)(()=>{const e=e=>{B.current&&!B.current.contains(e.target)&&d(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const{parsed:P,error:_}=(0,n.useMemo)(()=>{try{return{parsed:JSON.parse(r),error:null}}catch(e){return{parsed:null,error:e.message}}},[r]),U=(0,n.useMemo)(()=>{if(!t.trim()||null===P)return null;try{return(0,u.Y)(P,t)}catch{return null}},[t,P]),D=(0,n.useCallback)(()=>{null!==P&&o(JSON.stringify(P,null,2))},[P]),Z=(0,n.useCallback)(()=>{null!==P&&o(JSON.stringify(P))},[P]),q=t.trim().length>0,G=(0,f.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,f.jsxs)(g,{onClick:()=>{o(""),s(""),L(null),(0,l.Is)(Y,"")},children:[(0,f.jsx)(c.A,{size:13})," New"]}),(0,f.jsx)(g,{onClick:D,disabled:!!_,children:"Format"}),(0,f.jsx)(g,{onClick:Z,disabled:!!_,children:"Minify"}),(0,f.jsx)(l.UO,{appId:"jsonexplorer",onLoad:(e,r,n)=>{o(e),L(r&&n?{id:r,name:n}:null)}}),(0,f.jsxs)(h,{onClick:()=>A(!0),children:[(0,f.jsx)(p.A,{size:14}),"Save"]}),(0,f.jsxs)(O,{ref:B,children:[(0,f.jsxs)(g,{onClick:()=>d(e=>!e),children:["Examples ",(0,f.jsx)(a.A,{size:12})]}),i&&(0,f.jsx)(E,{children:x.k.map(e=>(0,f.jsx)(F,{onClick:()=>{o(e.json),s(""),d(!1)},children:e.label},e.label))})]}),e]});return(0,f.jsxs)(l.PE,{title:"JSON Explorer",sidebar:(0,f.jsx)(l.tz,{activeAppId:"jsonexplorer"}),topBarRight:G,children:[J&&(0,f.jsx)(l.MJ,{onSave:async e=>{A(!1),await(0,l.KL)("jsonexplorer",e,r),L(null)},onUpdate:async()=>{R&&(A(!1),await(0,l.mZ)(R.id,R.name,r))},existingDoc:R??void 0,onCancel:()=>A(!1)}),(0,f.jsxs)(m,{children:[(0,f.jsxs)(w,{children:[(0,f.jsxs)(b,{children:[(0,f.jsx)("span",{children:"Raw JSON"}),!_&&null!==P&&(0,f.jsx)(V,{text:r})]}),(0,f.jsx)(j,{hasError:!!_,value:r,onChange:e=>o(e.target.value),spellCheck:!1,placeholder:"Paste JSON here…"}),_&&(0,f.jsxs)($,{children:["⚠ ",_]})]}),(0,f.jsxs)(y,{children:[(0,f.jsx)(b,{children:(0,f.jsx)("span",{children:"Tree View"})}),q?(0,f.jsx)(T,{children:U&&U.length>0?U.map((e,r)=>(0,f.jsxs)(M,{children:[(0,f.jsx)(C,{children:e.path}),(0,f.jsx)(N,{children:JSON.stringify(e.value,null,2)})]},r)):(0,f.jsx)("span",{style:{color:l.w4.colors.mainTextMuted,fontSize:13},children:"No results"})}):(0,f.jsx)(v,{children:null!==P?(0,f.jsx)(K,{value:P,level:0,isLast:!0,defaultExpanded:!0}):(0,f.jsx)("span",{style:{color:l.w4.colors.mainTextMuted,fontSize:13},children:_?"Fix JSON to see tree":"Paste JSON on the left"})}),(0,f.jsxs)(k,{children:[(0,f.jsx)(S,{children:"JSONPath:"}),(0,f.jsx)(z,{value:t,onChange:e=>s(e.target.value),placeholder:"$.users[*].name",spellCheck:!1}),t&&(0,f.jsx)("span",{style:{fontSize:11,color:l.w4.colors.mainTextMuted},children:U?`${U.length} result${1!==U.length?"s":""}`:"—"})]})]})]})]})}}}]);
//# sourceMappingURL=36.fcfa9ee5cf5f692becea.js.map