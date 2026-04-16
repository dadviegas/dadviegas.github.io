"use strict";(self.webpackChunk_atlantis_jsonexplorer=self.webpackChunk_atlantis_jsonexplorer||[]).push([[188],{188(e,r,o){var n=o(7359),t=o(8997),l=o(3233),s=o(894),a=o(679),i=o(9753),d=o(5609),c=o(320),p=o(1344),x=o(6480),u=o(9336),f=o(9054),h=o(5723);const g=l.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${s.w4.colors.accent};border-radius:${s.w4.borderRadius.md};color:${s.w4.colors.accent};font-size:${s.w4.typography.fontSizeBase};font-family:${s.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,m=l.default.button`
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
`,w=l.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  gap: 0;
`,y=l.default.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  min-width: 280px;
  border-right: 1px solid ${s.w4.colors.border};
  overflow: hidden;
`,j=l.default.div`
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
`,$=l.default.textarea`
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
`,v=l.default.div`
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  background: rgba(248,113,113,0.1);
  border-top: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  font-size: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  flex-shrink: 0;
`,k=l.default.div`
  flex: 1;
  overflow: auto;
  padding: ${s.w4.spacing.md};
`,z=l.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  border-top: 1px solid ${s.w4.colors.border};
  background: ${s.w4.colors.sidebarBg};
  flex-shrink: 0;
`,S=l.default.input`
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
`,T=l.default.span`
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  white-space: nowrap;
`,M=l.default.div`
  flex: 1;
  overflow: auto;
  padding: ${s.w4.spacing.md};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12.5px;
`,C=l.default.div`
  margin-bottom: ${s.w4.spacing.sm};
  border-left: 2px solid ${s.w4.colors.accent};
  padding-left: ${s.w4.spacing.sm};
`,N=l.default.div`
  font-size: 11px;
  color: ${s.w4.colors.accent};
  margin-bottom: 2px;
`,E=l.default.pre`
  color: ${s.w4.colors.mainText};
  white-space: pre-wrap;
  font-size: 12px;
  margin: 0;
`,O=l.default.div`position: relative;`,F=l.default.div`
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
`,J=l.default.button`
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
`,R=l.default.span`color: #79c0ff;`,A=l.default.span`color: #a5d6ff;`,B=l.default.span`color: #f78166;`,L=l.default.span`color: #d2a8ff;`,I=l.default.span`color: ${s.w4.colors.mainTextMuted}; font-style: italic;`,P=l.default.span`color: ${s.w4.colors.mainTextMuted};`,_=l.default.span`
  font-size: 10px;
  color: ${s.w4.colors.mainTextMuted};
  margin-left: 4px;
`,H=l.default.div`
  display: flex;
  align-items: flex-start;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
  cursor: default;
  border-radius: 3px;
  padding: 0 2px;

  &:hover { background: rgba(255,255,255,0.04); }
`,U=l.default.button`
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
`,D=l.default.div`
  width: ${e=>16*e.level}px;
  flex-shrink: 0;
`;function K({keyName:e,value:r,level:o,isLast:t,defaultExpanded:l=o<2}){const[d,c]=(0,n.useState)(l),p=Array.isArray(r),x=null!==r&&"object"==typeof r&&!p,u=p||x,f=u?Object.keys(r).length:0;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(H,{children:[(0,h.jsx)(D,{level:o}),u?(0,h.jsx)(U,{onClick:()=>c(e=>!e),children:d?(0,h.jsx)(a.A,{size:12}):(0,h.jsx)(i.A,{size:12})}):(0,h.jsx)("div",{style:{width:16,flexShrink:0}}),void 0!==e&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(R,{children:['"',e,'"']}),(0,h.jsx)("span",{style:{color:s.w4.colors.mainTextMuted,marginRight:4},children:":"})]}),"string"==typeof r?(0,h.jsxs)(A,{children:['"',r,'"']}):"number"==typeof r?(0,h.jsx)(B,{children:r}):"boolean"==typeof r?(0,h.jsx)(L,{children:String(r)}):null===r?(0,h.jsx)(I,{children:"null"}):p?(0,h.jsx)(P,{children:"["}):x?(0,h.jsx)(P,{children:"{"}):null,u&&!d&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(_,{children:[f," ",p?"items":"keys"]}),(0,h.jsx)(P,{children:p?"]":"}"})]}),!u&&!t&&(0,h.jsx)("span",{style:{color:s.w4.colors.mainTextMuted},children:","})]}),u&&d&&(0,h.jsxs)(h.Fragment,{children:[p?r.map((e,n)=>(0,h.jsx)(K,{keyName:String(n),value:e,level:o+1,isLast:n===r.length-1,defaultExpanded:o+1<2},n)):Object.entries(r).map(([e,r],n,t)=>(0,h.jsx)(K,{keyName:e,value:r,level:o+1,isLast:n===t.length-1,defaultExpanded:o+1<2},e)),(0,h.jsxs)(H,{children:[(0,h.jsx)(D,{level:o}),(0,h.jsx)("div",{style:{width:16}}),(0,h.jsx)(P,{children:p?"]":"}"}),!t&&(0,h.jsx)("span",{style:{color:s.w4.colors.mainTextMuted},children:","})]})]})]})}function V({text:e}){const[r,o]=(0,n.useState)(!1);return(0,h.jsxs)(m,{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1500)})},title:"Copy to clipboard",children:[r?(0,h.jsx)(d.A,{size:12}):(0,h.jsx)(c.A,{size:12}),r?"Copied":"Copy"]})}const Y="toolkit:jsonexplorer";function Z({topBarRight:e}){const[r,o]=(0,n.useState)(""),[t,l]=(0,n.useState)(""),[i,d]=(0,n.useState)(!1),[c,R]=(0,n.useState)(!1),[A,B]=(0,n.useState)(null),L=(0,n.useRef)(null),I=(0,n.useRef)(!1);(0,n.useEffect)(()=>{(0,s.PL)(Y).then(e=>{if(e)try{const r=JSON.parse(e);o(r.raw??""),l(r.filter??"")}catch{}I.current=!0})},[]),(0,n.useEffect)(()=>{if(!I.current)return;const e=setTimeout(()=>(0,s.Is)(Y,JSON.stringify({raw:r,filter:t})),400);return()=>clearTimeout(e)},[r,t]),(0,n.useEffect)(()=>{const e=e=>{L.current&&!L.current.contains(e.target)&&d(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const{parsed:P,error:_}=(0,n.useMemo)(()=>{try{return{parsed:JSON.parse(r),error:null}}catch(e){return{parsed:null,error:e.message}}},[r]),H=(0,n.useMemo)(()=>{if(!t.trim()||null===P)return null;try{return(0,f.Y)(P,t)}catch{return null}},[t,P]),U=(0,n.useCallback)(()=>{null!==P&&o(JSON.stringify(P,null,2))},[P]),D=(0,n.useCallback)(()=>{null!==P&&o(JSON.stringify(P))},[P]),Z=t.trim().length>0,q=(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,h.jsxs)(m,{onClick:()=>{o(""),l(""),B(null),(0,s.Is)(Y,"")},children:[(0,h.jsx)(p.A,{size:13})," New"]}),(0,h.jsx)(m,{onClick:U,disabled:!!_,children:"Format"}),(0,h.jsx)(m,{onClick:D,disabled:!!_,children:"Minify"}),(0,h.jsx)(s.UO,{appId:"jsonexplorer",onLoad:(e,r,n)=>{o(e),B(r&&n?{id:r,name:n}:null)}}),(0,h.jsxs)(g,{onClick:()=>R(!0),children:[(0,h.jsx)(x.A,{size:14}),"Save"]}),(0,h.jsxs)(O,{ref:L,children:[(0,h.jsxs)(m,{onClick:()=>d(e=>!e),children:["Examples ",(0,h.jsx)(a.A,{size:12})]}),i&&(0,h.jsx)(F,{children:u.k.map(e=>(0,h.jsx)(J,{onClick:()=>{o(e.json),l(""),d(!1)},children:e.label},e.label))})]}),e]});return(0,h.jsxs)(s.PE,{title:"JSON Explorer",sidebar:(0,h.jsx)(s.tz,{activeAppId:"jsonexplorer"}),topBarRight:q,children:[c&&(0,h.jsx)(s.MJ,{onSave:async e=>{R(!1),await(0,s.KL)("jsonexplorer",e,r),B(null)},onUpdate:async()=>{A&&(R(!1),await(0,s.mZ)(A.id,A.name,r))},existingDoc:A??void 0,onCancel:()=>R(!1)}),(0,h.jsxs)(w,{children:[(0,h.jsxs)(y,{children:[(0,h.jsxs)(b,{children:[(0,h.jsx)("span",{children:"Raw JSON"}),!_&&null!==P&&(0,h.jsx)(V,{text:r})]}),(0,h.jsx)($,{hasError:!!_,value:r,onChange:e=>o(e.target.value),spellCheck:!1,placeholder:"Paste JSON here…"}),_&&(0,h.jsxs)(v,{children:["⚠ ",_]})]}),(0,h.jsxs)(j,{children:[(0,h.jsx)(b,{children:(0,h.jsx)("span",{children:"Tree View"})}),Z?(0,h.jsx)(M,{children:H&&H.length>0?H.map((e,r)=>(0,h.jsxs)(C,{children:[(0,h.jsx)(N,{children:e.path}),(0,h.jsx)(E,{children:JSON.stringify(e.value,null,2)})]},r)):(0,h.jsx)("span",{style:{color:s.w4.colors.mainTextMuted,fontSize:13},children:"No results"})}):(0,h.jsx)(k,{children:null!==P?(0,h.jsx)(K,{value:P,level:0,isLast:!0,defaultExpanded:!0}):(0,h.jsx)("span",{style:{color:s.w4.colors.mainTextMuted,fontSize:13},children:_?"Fix JSON to see tree":"Paste JSON on the left"})}),(0,h.jsxs)(z,{children:[(0,h.jsx)(T,{children:"JSONPath:"}),(0,h.jsx)(S,{value:t,onChange:e=>l(e.target.value),placeholder:"$.users[*].name",spellCheck:!1}),t&&(0,h.jsx)("span",{style:{fontSize:11,color:s.w4.colors.mainTextMuted},children:H?`${H.length} result${1!==H.length?"s":""}`:"—"})]})]})]})]})}const q=document.getElementById("root");if(!q)throw new Error("Root element #root not found");(0,t.H)(q).render((0,h.jsx)(Z,{}))},8997(e,r,o){var n=o(8991);r.H=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=188.54b44a6091bd9e0f38a7.js.map