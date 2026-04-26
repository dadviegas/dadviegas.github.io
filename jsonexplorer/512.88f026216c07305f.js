"use strict";(self.webpackChunk_atlantis_jsonexplorer=self.webpackChunk_atlantis_jsonexplorer||[]).push([["512"],{8997(e,r,o){var n=o(2727);r.createRoot=n.createRoot,n.hydrateRoot},3611(e,r,o){var n=o(5723),t=o(7991),s=o(8997),l=o(6859),i=o.n(l),a=o(4764),d=o(18),c=o(5151),p=o(3173);let x=i().button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${a.w4.colors.accent};border-radius:${a.w4.borderRadius.md};color:${a.w4.colors.accent};font-size:${a.w4.typography.fontSizeBase};font-family:${a.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background ${a.w4.transitions.base};white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,u=i().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${a.w4.spacing.sm};
  height: 30px;
  background: ${e=>"primary"===e.variant?a.w4.colors.accent:"transparent"};
  border: 1px solid ${e=>"primary"===e.variant?a.w4.colors.accent:a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${e=>"primary"===e.variant?"#fff":a.w4.colors.mainTextMuted};
  font-size: 11px;
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;
  transition: all ${a.w4.transitions.base};

  &:hover {
    border-color: ${a.w4.colors.accent};
    color: ${e=>"primary"===e.variant?"#fff":a.w4.colors.mainText};
    background: ${e=>"primary"===e.variant?a.w4.colors.accent:"rgba(56,139,253,0.1)"};
  }
`,h=i().div`
  display: flex;
  flex: 1;
  overflow: hidden;
  gap: 0;
`,f=i().div`
  display: flex;
  flex-direction: column;
  width: 42%;
  min-width: 280px;
  border-right: 1px solid ${a.w4.colors.border};
  overflow: hidden;
`,m=i().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,g=i().div`
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
`,w=i().textarea`
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
`,y=i().div`
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  background: rgba(248,113,113,0.1);
  border-top: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  font-size: 11px;
  font-family: ${a.w4.typography.fontFamilyMono};
  flex-shrink: 0;
`,b=i().div`
  flex: 1;
  overflow: auto;
  padding: ${a.w4.spacing.md};
`,j=i().div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-top: 1px solid ${a.w4.colors.border};
  background: ${a.w4.colors.sidebarBg};
  flex-shrink: 0;
`,$=i().input`
  flex: 1;
  background: ${a.w4.colors.mainBg};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  padding: 4px 8px;
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${a.w4.colors.mainText};
  outline: none;
  height: 28px;

  &:focus { border-color: ${a.w4.colors.accent}; }
  &::placeholder { color: ${a.w4.colors.mainTextMuted}; }
`,v=i().span`
  font-size: 11px;
  color: ${a.w4.colors.mainTextMuted};
  white-space: nowrap;
`,k=i().div`
  flex: 1;
  overflow: auto;
  padding: ${a.w4.spacing.md};
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12.5px;
`,z=i().div`
  margin-bottom: ${a.w4.spacing.sm};
  border-left: 2px solid ${a.w4.colors.accent};
  padding-left: ${a.w4.spacing.sm};
`,S=i().div`
  font-size: 11px;
  color: ${a.w4.colors.accent};
  margin-bottom: 2px;
`,T=i().pre`
  color: ${a.w4.colors.mainText};
  white-space: pre-wrap;
  font-size: 11px;
  margin: 0;
`,M=i().div`position: relative;`,C=i().div`
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
`,N=i().button`
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
`,E=i().span`color: #79c0ff;`,O=i().span`color: #a5d6ff;`,F=i().span`color: #f78166;`,R=i().span`color: #d2a8ff;`,I=i().span`color: ${a.w4.colors.mainTextMuted}; font-style: italic;`,J=i().span`color: ${a.w4.colors.mainTextMuted};`,B=i().span`
  font-size: 11px;
  color: ${a.w4.colors.mainTextMuted};
  margin-left: 4px;
`,L=i().div`
  display: flex;
  align-items: flex-start;
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
  cursor: default;
  border-radius: 3px;
  padding: 0 2px;

  &:hover { background: rgba(255,255,255,0.04); }
`,P=i().button`
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
`,_=i().div`
  width: ${e=>16*e.level}px;
  flex-shrink: 0;
`;function A({keyName:e,value:r,level:o,isLast:s,defaultExpanded:l=o<2}){let[i,c]=(0,t.useState)(l),p=Array.isArray(r),x=null!==r&&"object"==typeof r&&!p,u=p||x,h=u?Object.keys(r).length:0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(L,{children:[(0,n.jsx)(_,{level:o}),u?(0,n.jsx)(P,{onClick:()=>c(e=>!e),children:i?(0,n.jsx)(d.In,{name:"chevron-down",size:12}):(0,n.jsx)(d.In,{name:"chevron-right",size:12})}):(0,n.jsx)("div",{style:{width:16,flexShrink:0}}),void 0!==e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(E,{children:['"',e,'"']}),(0,n.jsx)("span",{style:{color:a.w4.colors.mainTextMuted,marginRight:4},children:":"})]}),"string"==typeof r?(0,n.jsxs)(O,{children:['"',r,'"']}):"number"==typeof r?(0,n.jsx)(F,{children:r}):"boolean"==typeof r?(0,n.jsx)(R,{children:String(r)}):null===r?(0,n.jsx)(I,{children:"null"}):p?(0,n.jsx)(J,{children:"["}):x?(0,n.jsx)(J,{children:"{"}):null,u&&!i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(B,{children:[h," ",p?"items":"keys"]}),(0,n.jsx)(J,{children:p?"]":"}"})]}),!u&&!s&&(0,n.jsx)("span",{style:{color:a.w4.colors.mainTextMuted},children:","})]}),u&&i&&(0,n.jsxs)(n.Fragment,{children:[p?r.map((e,t)=>(0,n.jsx)(A,{keyName:String(t),value:e,level:o+1,isLast:t===r.length-1,defaultExpanded:o+1<2},t)):Object.entries(r).map(([e,r],t,s)=>(0,n.jsx)(A,{keyName:e,value:r,level:o+1,isLast:t===s.length-1,defaultExpanded:o+1<2},e)),(0,n.jsxs)(L,{children:[(0,n.jsx)(_,{level:o}),(0,n.jsx)("div",{style:{width:16}}),(0,n.jsx)(J,{children:p?"]":"}"}),!s&&(0,n.jsx)("span",{style:{color:a.w4.colors.mainTextMuted},children:","})]})]})]})}function U({text:e}){let[r,o]=(0,t.useState)(!1);return(0,n.jsxs)(u,{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1500)})},title:"Copy to clipboard",children:[r?(0,n.jsx)(d.In,{name:"check",size:12}):(0,n.jsx)(d.In,{name:"copy",size:12}),r?"Copied":"Copy"]})}let D="toolkit:jsonexplorer",K=document.getElementById("root");if(!K)throw Error("Root element #root not found");(0,s.createRoot)(K).render((0,n.jsx)(function({topBarRight:e}){let[r,o]=(0,t.useState)(""),[s,l]=(0,t.useState)(""),[i,E]=(0,t.useState)(!1),[O,F]=(0,t.useState)(!1),[R,I]=(0,t.useState)(null),J=(0,t.useRef)(null),B=(0,t.useRef)(!1);(0,t.useEffect)(()=>{(0,a.PL)(D).then(e=>{if(e)try{let r=JSON.parse(e);o(r.raw??""),l(r.filter??"")}catch{}B.current=!0})},[]),(0,t.useEffect)(()=>{if(!B.current)return;let e=setTimeout(()=>(0,a.Is)(D,JSON.stringify({raw:r,filter:s})),400);return()=>clearTimeout(e)},[r,s]);let L=async e=>{F(!1),await (0,a.KL)("jsonexplorer",e,r),I(null)},P=async()=>{R&&(F(!1),await (0,a.mZ)(R.id,R.name,r))};(0,t.useEffect)(()=>{let e=e=>{J.current&&!J.current.contains(e.target)&&E(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let{parsed:_,error:K}=(0,t.useMemo)(()=>{try{return{parsed:JSON.parse(r),error:null}}catch(e){return{parsed:null,error:e.message}}},[r]),V=(0,t.useMemo)(()=>{if(!s.trim()||null===_)return null;try{return(0,p.Y)(_,s)}catch{return null}},[s,_]),Y=(0,t.useCallback)(()=>{null!==_&&o(JSON.stringify(_,null,2))},[_]),Z=(0,t.useCallback)(()=>{null!==_&&o(JSON.stringify(_))},[_]),q=s.trim().length>0,G=(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,n.jsxs)(u,{onClick:()=>{o(""),l(""),I(null),(0,a.Is)(D,"")},children:[(0,n.jsx)(d.In,{name:"file-plus",size:13})," New"]}),(0,n.jsx)(u,{onClick:Y,disabled:!!K,children:"Format"}),(0,n.jsx)(u,{onClick:Z,disabled:!!K,children:"Minify"}),(0,n.jsx)(a.UO,{appId:"jsonexplorer",onLoad:(e,r,n)=>{o(e),I(r&&n?{id:r,name:n}:null)}}),(0,n.jsxs)(x,{onClick:()=>F(!0),children:[(0,n.jsx)(d.In,{name:"save",size:14}),"Save"]}),(0,n.jsxs)(M,{ref:J,children:[(0,n.jsxs)(u,{onClick:()=>E(e=>!e),children:["Examples ",(0,n.jsx)(d.In,{name:"chevron-down",size:12})]}),i&&(0,n.jsx)(C,{children:c.k.map(e=>(0,n.jsx)(N,{onClick:()=>{o(e.json),l(""),E(!1)},children:e.label},e.label))})]}),e]});return(0,n.jsxs)(a.PE,{title:"JSON Explorer",sidebar:(0,n.jsx)(d.tz,{activeAppId:"jsonexplorer"}),topBarRight:G,children:[O&&(0,n.jsx)(d.MJ,{onSave:L,onUpdate:P,existingDoc:R??void 0,onCancel:()=>F(!1)}),(0,n.jsxs)(h,{children:[(0,n.jsxs)(f,{children:[(0,n.jsxs)(g,{children:[(0,n.jsx)("span",{children:"Raw JSON"}),!K&&null!==_&&(0,n.jsx)(U,{text:r})]}),(0,n.jsx)(w,{hasError:!!K,value:r,onChange:e=>o(e.target.value),spellCheck:!1,placeholder:"Paste JSON here…"}),K&&(0,n.jsxs)(y,{children:["⚠ ",K]})]}),(0,n.jsxs)(m,{children:[(0,n.jsx)(g,{children:(0,n.jsx)("span",{children:"Tree View"})}),q?(0,n.jsx)(k,{children:V&&V.length>0?V.map((e,r)=>(0,n.jsxs)(z,{children:[(0,n.jsx)(S,{children:e.path}),(0,n.jsx)(T,{children:JSON.stringify(e.value,null,2)})]},r)):(0,n.jsx)("span",{style:{color:a.w4.colors.mainTextMuted,fontSize:13},children:"No results"})}):(0,n.jsx)(b,{children:null!==_?(0,n.jsx)(A,{value:_,level:0,isLast:!0,defaultExpanded:!0}):(0,n.jsx)("span",{style:{color:a.w4.colors.mainTextMuted,fontSize:13},children:K?"Fix JSON to see tree":"Paste JSON on the left"})}),(0,n.jsxs)(j,{children:[(0,n.jsx)(v,{children:"JSONPath:"}),(0,n.jsx)($,{value:s,onChange:e=>l(e.target.value),placeholder:"$.users[*].name",spellCheck:!1}),s&&(0,n.jsx)("span",{style:{fontSize:11,color:a.w4.colors.mainTextMuted},children:V?`${V.length} result${1!==V.length?"s":""}`:"—"})]})]})]})]})},{}))}}]);