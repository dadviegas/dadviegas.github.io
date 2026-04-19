"use strict";(self.webpackChunk_atlantis_jsonexplorer=self.webpackChunk_atlantis_jsonexplorer||[]).push([[6036],{6036(e,r,o){o.r(r),o.d(r,{default:()=>q});var n=o(7359),t=o(3233),l=o(9200),s=o(3857),a=o(5609),i=o(679),d=o(9753),c=o(320),p=o(1344),x=o(6480),u=o(9336),f=o(9054),h=o(5723);const g=t.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${l.w4.colors.accent};border-radius:${l.w4.borderRadius.md};color:${l.w4.colors.accent};font-size:${l.w4.typography.fontSizeBase};font-family:${l.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,m=t.default.button`
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
`,w=t.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  gap: 0;
`,y=t.default.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  min-width: 280px;
  border-right: 1px solid ${l.w4.colors.border};
  overflow: hidden;
`,b=t.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,j=t.default.div`
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
`,$=t.default.textarea`
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
`,v=t.default.div`
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  background: rgba(248,113,113,0.1);
  border-top: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  font-size: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  flex-shrink: 0;
`,k=t.default.div`
  flex: 1;
  overflow: auto;
  padding: ${l.w4.spacing.md};
`,z=t.default.div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  border-top: 1px solid ${l.w4.colors.border};
  background: ${l.w4.colors.sidebarBg};
  flex-shrink: 0;
`,S=t.default.input`
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
`,T=t.default.span`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
`,M=t.default.div`
  flex: 1;
  overflow: auto;
  padding: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12.5px;
`,C=t.default.div`
  margin-bottom: ${l.w4.spacing.sm};
  border-left: 2px solid ${l.w4.colors.accent};
  padding-left: ${l.w4.spacing.sm};
`,N=t.default.div`
  font-size: 11px;
  color: ${l.w4.colors.accent};
  margin-bottom: 2px;
`,O=t.default.pre`
  color: ${l.w4.colors.mainText};
  white-space: pre-wrap;
  font-size: 12px;
  margin: 0;
`,E=t.default.div`position: relative;`,F=t.default.div`
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
`,J=t.default.button`
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
`,A=t.default.span`color: #79c0ff;`,R=t.default.span`color: #a5d6ff;`,L=t.default.span`color: #f78166;`,B=t.default.span`color: #d2a8ff;`,I=t.default.span`color: ${l.w4.colors.mainTextMuted}; font-style: italic;`,P=t.default.span`color: ${l.w4.colors.mainTextMuted};`,_=t.default.span`
  font-size: 10px;
  color: ${l.w4.colors.mainTextMuted};
  margin-left: 4px;
`,U=t.default.div`
  display: flex;
  align-items: flex-start;
  font-family: ${l.w4.typography.fontFamilyMono};
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
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  margin-right: 2px;
  flex-shrink: 0;
  width: 16px;
  height: 20px;
`,K=t.default.div`
  width: ${e=>16*e.level}px;
  flex-shrink: 0;
`;function V({keyName:e,value:r,level:o,isLast:t,defaultExpanded:s=o<2}){const[a,c]=(0,n.useState)(s),p=Array.isArray(r),x=null!==r&&"object"==typeof r&&!p,u=p||x,f=u?Object.keys(r).length:0;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(U,{children:[(0,h.jsx)(K,{level:o}),u?(0,h.jsx)(D,{onClick:()=>c(e=>!e),children:a?(0,h.jsx)(i.A,{size:12}):(0,h.jsx)(d.A,{size:12})}):(0,h.jsx)("div",{style:{width:16,flexShrink:0}}),void 0!==e&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(A,{children:['"',e,'"']}),(0,h.jsx)("span",{style:{color:l.w4.colors.mainTextMuted,marginRight:4},children:":"})]}),"string"==typeof r?(0,h.jsxs)(R,{children:['"',r,'"']}):"number"==typeof r?(0,h.jsx)(L,{children:r}):"boolean"==typeof r?(0,h.jsx)(B,{children:String(r)}):null===r?(0,h.jsx)(I,{children:"null"}):p?(0,h.jsx)(P,{children:"["}):x?(0,h.jsx)(P,{children:"{"}):null,u&&!a&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(_,{children:[f," ",p?"items":"keys"]}),(0,h.jsx)(P,{children:p?"]":"}"})]}),!u&&!t&&(0,h.jsx)("span",{style:{color:l.w4.colors.mainTextMuted},children:","})]}),u&&a&&(0,h.jsxs)(h.Fragment,{children:[p?r.map((e,n)=>(0,h.jsx)(V,{keyName:String(n),value:e,level:o+1,isLast:n===r.length-1,defaultExpanded:o+1<2},n)):Object.entries(r).map(([e,r],n,t)=>(0,h.jsx)(V,{keyName:e,value:r,level:o+1,isLast:n===t.length-1,defaultExpanded:o+1<2},e)),(0,h.jsxs)(U,{children:[(0,h.jsx)(K,{level:o}),(0,h.jsx)("div",{style:{width:16}}),(0,h.jsx)(P,{children:p?"]":"}"}),!t&&(0,h.jsx)("span",{style:{color:l.w4.colors.mainTextMuted},children:","})]})]})]})}function Y({text:e}){const[r,o]=(0,n.useState)(!1);return(0,h.jsxs)(m,{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1500)})},title:"Copy to clipboard",children:[r?(0,h.jsx)(a.A,{size:12}):(0,h.jsx)(c.A,{size:12}),r?"Copied":"Copy"]})}const Z="toolkit:jsonexplorer";function q({topBarRight:e}){const[r,o]=(0,n.useState)(""),[t,a]=(0,n.useState)(""),[d,c]=(0,n.useState)(!1),[A,R]=(0,n.useState)(!1),[L,B]=(0,n.useState)(null),I=(0,n.useRef)(null),P=(0,n.useRef)(!1);(0,n.useEffect)(()=>{(0,l.PL)(Z).then(e=>{if(e)try{const r=JSON.parse(e);o(r.raw??""),a(r.filter??"")}catch{}P.current=!0})},[]),(0,n.useEffect)(()=>{if(!P.current)return;const e=setTimeout(()=>(0,l.Is)(Z,JSON.stringify({raw:r,filter:t})),400);return()=>clearTimeout(e)},[r,t]),(0,n.useEffect)(()=>{const e=e=>{I.current&&!I.current.contains(e.target)&&c(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const{parsed:_,error:U}=(0,n.useMemo)(()=>{try{return{parsed:JSON.parse(r),error:null}}catch(e){return{parsed:null,error:e.message}}},[r]),D=(0,n.useMemo)(()=>{if(!t.trim()||null===_)return null;try{return(0,f.Y)(_,t)}catch{return null}},[t,_]),K=(0,n.useCallback)(()=>{null!==_&&o(JSON.stringify(_,null,2))},[_]),q=(0,n.useCallback)(()=>{null!==_&&o(JSON.stringify(_))},[_]),G=t.trim().length>0,H=(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,h.jsxs)(m,{onClick:()=>{o(""),a(""),B(null),(0,l.Is)(Z,"")},children:[(0,h.jsx)(p.A,{size:13})," New"]}),(0,h.jsx)(m,{onClick:K,disabled:!!U,children:"Format"}),(0,h.jsx)(m,{onClick:q,disabled:!!U,children:"Minify"}),(0,h.jsx)(l.UO,{appId:"jsonexplorer",onLoad:(e,r,n)=>{o(e),B(r&&n?{id:r,name:n}:null)}}),(0,h.jsxs)(g,{onClick:()=>R(!0),children:[(0,h.jsx)(x.A,{size:14}),"Save"]}),(0,h.jsxs)(E,{ref:I,children:[(0,h.jsxs)(m,{onClick:()=>c(e=>!e),children:["Examples ",(0,h.jsx)(i.A,{size:12})]}),d&&(0,h.jsx)(F,{children:u.k.map(e=>(0,h.jsx)(J,{onClick:()=>{o(e.json),a(""),c(!1)},children:e.label},e.label))})]}),e]});return(0,h.jsxs)(l.PE,{title:"JSON Explorer",sidebar:(0,h.jsx)(s.tz,{activeAppId:"jsonexplorer"}),topBarRight:H,children:[A&&(0,h.jsx)(l.MJ,{onSave:async e=>{R(!1),await(0,l.KL)("jsonexplorer",e,r),B(null)},onUpdate:async()=>{L&&(R(!1),await(0,l.mZ)(L.id,L.name,r))},existingDoc:L??void 0,onCancel:()=>R(!1)}),(0,h.jsxs)(w,{children:[(0,h.jsxs)(y,{children:[(0,h.jsxs)(j,{children:[(0,h.jsx)("span",{children:"Raw JSON"}),!U&&null!==_&&(0,h.jsx)(Y,{text:r})]}),(0,h.jsx)($,{hasError:!!U,value:r,onChange:e=>o(e.target.value),spellCheck:!1,placeholder:"Paste JSON here…"}),U&&(0,h.jsxs)(v,{children:["⚠ ",U]})]}),(0,h.jsxs)(b,{children:[(0,h.jsx)(j,{children:(0,h.jsx)("span",{children:"Tree View"})}),G?(0,h.jsx)(M,{children:D&&D.length>0?D.map((e,r)=>(0,h.jsxs)(C,{children:[(0,h.jsx)(N,{children:e.path}),(0,h.jsx)(O,{children:JSON.stringify(e.value,null,2)})]},r)):(0,h.jsx)("span",{style:{color:l.w4.colors.mainTextMuted,fontSize:13},children:"No results"})}):(0,h.jsx)(k,{children:null!==_?(0,h.jsx)(V,{value:_,level:0,isLast:!0,defaultExpanded:!0}):(0,h.jsx)("span",{style:{color:l.w4.colors.mainTextMuted,fontSize:13},children:U?"Fix JSON to see tree":"Paste JSON on the left"})}),(0,h.jsxs)(z,{children:[(0,h.jsx)(T,{children:"JSONPath:"}),(0,h.jsx)(S,{value:t,onChange:e=>a(e.target.value),placeholder:"$.users[*].name",spellCheck:!1}),t&&(0,h.jsx)("span",{style:{fontSize:11,color:l.w4.colors.mainTextMuted},children:D?`${D.length} result${1!==D.length?"s":""}`:"—"})]})]})]})]})}}}]);