"use strict";(self.webpackChunk_atlantis_jsonexplorer=self.webpackChunk_atlantis_jsonexplorer||[]).push([["362"],{3935(e,r,n){n.r(r),n.d(r,{default:()=>D});var o=n(5723),s=n(7991),l=n(6859),i=n.n(l),t=n(6063),a=n(132),d=n(5151),c=n(3173);let p=i().button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${t.w4.colors.accent};border-radius:${t.w4.borderRadius.md};color:${t.w4.colors.accent};font-size:${t.w4.typography.fontSizeBase};font-family:${t.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background ${t.w4.transitions.base};white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,x=i().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${t.w4.spacing.sm};
  height: 30px;
  background: ${e=>"primary"===e.variant?t.w4.colors.accent:"transparent"};
  border: 1px solid ${e=>"primary"===e.variant?t.w4.colors.accent:t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm};
  color: ${e=>"primary"===e.variant?"#fff":t.w4.colors.mainTextMuted};
  font-size: 11px;
  font-family: ${t.w4.typography.fontFamily};
  cursor: pointer;
  transition: all ${t.w4.transitions.base};

  &:hover {
    border-color: ${t.w4.colors.accent};
    color: ${e=>"primary"===e.variant?"#fff":t.w4.colors.mainText};
    background: ${e=>"primary"===e.variant?t.w4.colors.accent:"rgba(56,139,253,0.1)"};
  }
`,u=i().div`
  display: flex;
  flex: 1;
  overflow: hidden;
  gap: 0;
`,h=i().div`
  display: flex;
  flex-direction: column;
  width: 42%;
  min-width: 280px;
  border-right: 1px solid ${t.w4.colors.border};
  overflow: hidden;
`,f=i().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,g=i().div`
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
`,m=i().textarea`
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
`,w=i().div`
  padding: ${t.w4.spacing.sm} ${t.w4.spacing.md};
  background: rgba(248,113,113,0.1);
  border-top: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  font-size: 11px;
  font-family: ${t.w4.typography.fontFamilyMono};
  flex-shrink: 0;
`,y=i().div`
  flex: 1;
  overflow: auto;
  padding: ${t.w4.spacing.md};
`,b=i().div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  padding: ${t.w4.spacing.sm} ${t.w4.spacing.md};
  border-top: 1px solid ${t.w4.colors.border};
  background: ${t.w4.colors.sidebarBg};
  flex-shrink: 0;
`,j=i().input`
  flex: 1;
  background: ${t.w4.colors.mainBg};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm};
  padding: 4px 8px;
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${t.w4.colors.mainText};
  outline: none;
  height: 28px;

  &:focus { border-color: ${t.w4.colors.accent}; }
  &::placeholder { color: ${t.w4.colors.mainTextMuted}; }
`,$=i().span`
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  white-space: nowrap;
`,v=i().div`
  flex: 1;
  overflow: auto;
  padding: ${t.w4.spacing.md};
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
`,k=i().div`
  margin-bottom: ${t.w4.spacing.sm};
  border-left: 2px solid ${t.w4.colors.accent};
  padding-left: ${t.w4.spacing.sm};
`,z=i().div`
  font-size: 11px;
  color: ${t.w4.colors.accent};
  margin-bottom: 2px;
`,S=i().pre`
  color: ${t.w4.colors.mainText};
  white-space: pre-wrap;
  font-size: 11px;
  margin: 0;
`,T=i().div`position: relative;`,M=i().div`
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
`,C=i().button`
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
`,N=i().span`color: #79c0ff;`,O=i().span`color: #a5d6ff;`,F=i().span`color: #f78166;`,E=i().span`color: #d2a8ff;`,J=i().span`color: ${t.w4.colors.mainTextMuted}; font-style: italic;`,I=i().span`color: ${t.w4.colors.mainTextMuted};`,R=i().span`
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  margin-left: 4px;
`,L=i().div`
  display: flex;
  align-items: flex-start;
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
  cursor: default;
  border-radius: 3px;
  padding: 0 2px;

  &:hover { background: rgba(255,255,255,0.04); }
`,B=i().button`
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
`,P=i().div`
  width: ${e=>16*e.level}px;
  flex-shrink: 0;
`;function _({keyName:e,value:r,level:n,isLast:l,defaultExpanded:i=n<2}){let[d,c]=(0,s.useState)(i),p=Array.isArray(r),x=null!==r&&"object"==typeof r&&!p,u=p||x,h=u?Object.keys(r).length:0;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(L,{children:[(0,o.jsx)(P,{level:n}),u?(0,o.jsx)(B,{onClick:()=>c(e=>!e),children:d?(0,o.jsx)(a.In,{name:"chevron-down",size:12}):(0,o.jsx)(a.In,{name:"chevron-right",size:12})}):(0,o.jsx)("div",{style:{width:16,flexShrink:0}}),void 0!==e&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(N,{children:['"',e,'"']}),(0,o.jsx)("span",{style:{color:t.w4.colors.mainTextMuted,marginRight:4},children:":"})]}),"string"==typeof r?(0,o.jsxs)(O,{children:['"',r,'"']}):"number"==typeof r?(0,o.jsx)(F,{children:r}):"boolean"==typeof r?(0,o.jsx)(E,{children:String(r)}):null===r?(0,o.jsx)(J,{children:"null"}):p?(0,o.jsx)(I,{children:"["}):x?(0,o.jsx)(I,{children:"{"}):null,u&&!d&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(R,{children:[h," ",p?"items":"keys"]}),(0,o.jsx)(I,{children:p?"]":"}"})]}),!u&&!l&&(0,o.jsx)("span",{style:{color:t.w4.colors.mainTextMuted},children:","})]}),u&&d&&(0,o.jsxs)(o.Fragment,{children:[p?r.map((e,s)=>(0,o.jsx)(_,{keyName:String(s),value:e,level:n+1,isLast:s===r.length-1,defaultExpanded:n+1<2},s)):Object.entries(r).map(([e,r],s,l)=>(0,o.jsx)(_,{keyName:e,value:r,level:n+1,isLast:s===l.length-1,defaultExpanded:n+1<2},e)),(0,o.jsxs)(L,{children:[(0,o.jsx)(P,{level:n}),(0,o.jsx)("div",{style:{width:16}}),(0,o.jsx)(I,{children:p?"]":"}"}),!l&&(0,o.jsx)("span",{style:{color:t.w4.colors.mainTextMuted},children:","})]})]})]})}function A({text:e}){let[r,n]=(0,s.useState)(!1);return(0,o.jsxs)(x,{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{n(!0),setTimeout(()=>n(!1),1500)})},title:"Copy to clipboard",children:[r?(0,o.jsx)(a.In,{name:"check",size:12}):(0,o.jsx)(a.In,{name:"copy",size:12}),r?"Copied":"Copy"]})}let U="toolkit:jsonexplorer";function D({topBarRight:e}){let[r,n]=(0,s.useState)(""),[l,i]=(0,s.useState)(""),[N,O]=(0,s.useState)(!1),[F,E]=(0,s.useState)(!1),[J,I]=(0,s.useState)(null),R=(0,s.useRef)(null),L=(0,s.useRef)(!1);(0,s.useEffect)(()=>{(0,t.PL)(U).then(e=>{if(e)try{let r=JSON.parse(e);n(r.raw??""),i(r.filter??"")}catch{}L.current=!0})},[]),(0,s.useEffect)(()=>{if(!L.current)return;let e=setTimeout(()=>(0,t.Is)(U,JSON.stringify({raw:r,filter:l})),400);return()=>clearTimeout(e)},[r,l]);let B=async e=>{E(!1),await (0,t.KL)("jsonexplorer",e,r),I(null)},P=async()=>{J&&(E(!1),await (0,t.mZ)(J.id,J.name,r))};(0,s.useEffect)(()=>{let e=e=>{R.current&&!R.current.contains(e.target)&&O(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let{parsed:K,error:V}=(0,s.useMemo)(()=>{try{return{parsed:JSON.parse(r),error:null}}catch(e){return{parsed:null,error:e.message}}},[r]),Y=(0,s.useMemo)(()=>{if(!l.trim()||null===K)return null;try{return(0,c.Y)(K,l)}catch{return null}},[l,K]),Z=(0,s.useCallback)(()=>{null!==K&&n(JSON.stringify(K,null,2))},[K]),q=(0,s.useCallback)(()=>{null!==K&&n(JSON.stringify(K))},[K]),G=l.trim().length>0,H=(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,o.jsxs)(x,{onClick:()=>{n(""),i(""),I(null),(0,t.Is)(U,"")},children:[(0,o.jsx)(a.In,{name:"file-plus",size:13})," New"]}),(0,o.jsx)(x,{onClick:Z,disabled:!!V,children:"Format"}),(0,o.jsx)(x,{onClick:q,disabled:!!V,children:"Minify"}),(0,o.jsx)(t.UO,{appId:"jsonexplorer",onLoad:(e,r,o)=>{n(e),I(r&&o?{id:r,name:o}:null)}}),(0,o.jsxs)(p,{onClick:()=>E(!0),children:[(0,o.jsx)(a.In,{name:"save",size:14}),"Save"]}),(0,o.jsxs)(T,{ref:R,children:[(0,o.jsxs)(x,{onClick:()=>O(e=>!e),children:["Examples ",(0,o.jsx)(a.In,{name:"chevron-down",size:12})]}),N&&(0,o.jsx)(M,{children:d.k.map(e=>(0,o.jsx)(C,{onClick:()=>{n(e.json),i(""),O(!1)},children:e.label},e.label))})]}),e]});return(0,o.jsxs)(a.PE,{title:"JSON Explorer",sidebar:(0,o.jsx)(a.tz,{activeAppId:"jsonexplorer"}),topBarRight:H,children:[F&&(0,o.jsx)(a.MJ,{onSave:B,onUpdate:P,existingDoc:J??void 0,onCancel:()=>E(!1)}),(0,o.jsxs)(u,{children:[(0,o.jsxs)(h,{children:[(0,o.jsxs)(g,{children:[(0,o.jsx)("span",{children:"Raw JSON"}),!V&&null!==K&&(0,o.jsx)(A,{text:r})]}),(0,o.jsx)(m,{hasError:!!V,value:r,onChange:e=>n(e.target.value),spellCheck:!1,placeholder:"Paste JSON here…"}),V&&(0,o.jsxs)(w,{children:["⚠ ",V]})]}),(0,o.jsxs)(f,{children:[(0,o.jsx)(g,{children:(0,o.jsx)("span",{children:"Tree View"})}),G?(0,o.jsx)(v,{children:Y&&Y.length>0?Y.map((e,r)=>(0,o.jsxs)(k,{children:[(0,o.jsx)(z,{children:e.path}),(0,o.jsx)(S,{children:JSON.stringify(e.value,null,2)})]},r)):(0,o.jsx)("span",{style:{color:t.w4.colors.mainTextMuted,fontSize:13},children:"No results"})}):(0,o.jsx)(y,{children:null!==K?(0,o.jsx)(_,{value:K,level:0,isLast:!0,defaultExpanded:!0}):(0,o.jsx)("span",{style:{color:t.w4.colors.mainTextMuted,fontSize:13},children:V?"Fix JSON to see tree":"Paste JSON on the left"})}),(0,o.jsxs)(b,{children:[(0,o.jsx)($,{children:"JSONPath:"}),(0,o.jsx)(j,{value:l,onChange:e=>i(e.target.value),placeholder:"$.users[*].name",spellCheck:!1}),l&&(0,o.jsx)("span",{style:{fontSize:11,color:t.w4.colors.mainTextMuted},children:Y?`${Y.length} result${1!==Y.length?"s":""}`:"—"})]})]})]})]})}}}]);