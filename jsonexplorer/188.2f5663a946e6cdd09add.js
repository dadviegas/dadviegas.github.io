"use strict";(self.webpackChunk_atlantis_jsonexplorer=self.webpackChunk_atlantis_jsonexplorer||[]).push([[188],{188(e,r,o){var n=o(7359),t=o(8997),l=o(3233),s=o(9200),a=o(8608),i=o(679),d=o(9753),c=o(5609),p=o(320),x=o(1344),u=o(6480),f=o(9336),h=o(9054),g=o(5723);const m=l.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${s.w4.colors.accent};border-radius:${s.w4.borderRadius.md};color:${s.w4.colors.accent};font-size:${s.w4.typography.fontSizeBase};font-family:${s.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,w=l.default.button`
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
`,y=l.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  gap: 0;
`,j=l.default.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  min-width: 280px;
  border-right: 1px solid ${s.w4.colors.border};
  overflow: hidden;
`,b=l.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,$=l.default.div`
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
`,v=l.default.textarea`
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
`,k=l.default.div`
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  background: rgba(248,113,113,0.1);
  border-top: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  font-size: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  flex-shrink: 0;
`,z=l.default.div`
  flex: 1;
  overflow: auto;
  padding: ${s.w4.spacing.md};
`,S=l.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  border-top: 1px solid ${s.w4.colors.border};
  background: ${s.w4.colors.sidebarBg};
  flex-shrink: 0;
`,T=l.default.input`
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
`,M=l.default.span`
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  white-space: nowrap;
`,C=l.default.div`
  flex: 1;
  overflow: auto;
  padding: ${s.w4.spacing.md};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12.5px;
`,N=l.default.div`
  margin-bottom: ${s.w4.spacing.sm};
  border-left: 2px solid ${s.w4.colors.accent};
  padding-left: ${s.w4.spacing.sm};
`,E=l.default.div`
  font-size: 11px;
  color: ${s.w4.colors.accent};
  margin-bottom: 2px;
`,O=l.default.pre`
  color: ${s.w4.colors.mainText};
  white-space: pre-wrap;
  font-size: 12px;
  margin: 0;
`,F=l.default.div`position: relative;`,J=l.default.div`
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
`,R=l.default.button`
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
`,A=l.default.span`color: #79c0ff;`,B=l.default.span`color: #a5d6ff;`,L=l.default.span`color: #f78166;`,I=l.default.span`color: #d2a8ff;`,P=l.default.span`color: ${s.w4.colors.mainTextMuted}; font-style: italic;`,_=l.default.span`color: ${s.w4.colors.mainTextMuted};`,H=l.default.span`
  font-size: 10px;
  color: ${s.w4.colors.mainTextMuted};
  margin-left: 4px;
`,U=l.default.div`
  display: flex;
  align-items: flex-start;
  font-family: ${s.w4.typography.fontFamilyMono};
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
  color: ${s.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  margin-right: 2px;
  flex-shrink: 0;
  width: 16px;
  height: 20px;
`,K=l.default.div`
  width: ${e=>16*e.level}px;
  flex-shrink: 0;
`;function V({keyName:e,value:r,level:o,isLast:t,defaultExpanded:l=o<2}){const[a,c]=(0,n.useState)(l),p=Array.isArray(r),x=null!==r&&"object"==typeof r&&!p,u=p||x,f=u?Object.keys(r).length:0;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(U,{children:[(0,g.jsx)(K,{level:o}),u?(0,g.jsx)(D,{onClick:()=>c(e=>!e),children:a?(0,g.jsx)(i.A,{size:12}):(0,g.jsx)(d.A,{size:12})}):(0,g.jsx)("div",{style:{width:16,flexShrink:0}}),void 0!==e&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(A,{children:['"',e,'"']}),(0,g.jsx)("span",{style:{color:s.w4.colors.mainTextMuted,marginRight:4},children:":"})]}),"string"==typeof r?(0,g.jsxs)(B,{children:['"',r,'"']}):"number"==typeof r?(0,g.jsx)(L,{children:r}):"boolean"==typeof r?(0,g.jsx)(I,{children:String(r)}):null===r?(0,g.jsx)(P,{children:"null"}):p?(0,g.jsx)(_,{children:"["}):x?(0,g.jsx)(_,{children:"{"}):null,u&&!a&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(H,{children:[f," ",p?"items":"keys"]}),(0,g.jsx)(_,{children:p?"]":"}"})]}),!u&&!t&&(0,g.jsx)("span",{style:{color:s.w4.colors.mainTextMuted},children:","})]}),u&&a&&(0,g.jsxs)(g.Fragment,{children:[p?r.map((e,n)=>(0,g.jsx)(V,{keyName:String(n),value:e,level:o+1,isLast:n===r.length-1,defaultExpanded:o+1<2},n)):Object.entries(r).map(([e,r],n,t)=>(0,g.jsx)(V,{keyName:e,value:r,level:o+1,isLast:n===t.length-1,defaultExpanded:o+1<2},e)),(0,g.jsxs)(U,{children:[(0,g.jsx)(K,{level:o}),(0,g.jsx)("div",{style:{width:16}}),(0,g.jsx)(_,{children:p?"]":"}"}),!t&&(0,g.jsx)("span",{style:{color:s.w4.colors.mainTextMuted},children:","})]})]})]})}function Y({text:e}){const[r,o]=(0,n.useState)(!1);return(0,g.jsxs)(w,{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1500)})},title:"Copy to clipboard",children:[r?(0,g.jsx)(c.A,{size:12}):(0,g.jsx)(p.A,{size:12}),r?"Copied":"Copy"]})}const Z="toolkit:jsonexplorer";function q({topBarRight:e}){const[r,o]=(0,n.useState)(""),[t,l]=(0,n.useState)(""),[d,c]=(0,n.useState)(!1),[p,A]=(0,n.useState)(!1),[B,L]=(0,n.useState)(null),I=(0,n.useRef)(null),P=(0,n.useRef)(!1);(0,n.useEffect)(()=>{(0,s.PL)(Z).then(e=>{if(e)try{const r=JSON.parse(e);o(r.raw??""),l(r.filter??"")}catch{}P.current=!0})},[]),(0,n.useEffect)(()=>{if(!P.current)return;const e=setTimeout(()=>(0,s.Is)(Z,JSON.stringify({raw:r,filter:t})),400);return()=>clearTimeout(e)},[r,t]),(0,n.useEffect)(()=>{const e=e=>{I.current&&!I.current.contains(e.target)&&c(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const{parsed:_,error:H}=(0,n.useMemo)(()=>{try{return{parsed:JSON.parse(r),error:null}}catch(e){return{parsed:null,error:e.message}}},[r]),U=(0,n.useMemo)(()=>{if(!t.trim()||null===_)return null;try{return(0,h.Y)(_,t)}catch{return null}},[t,_]),D=(0,n.useCallback)(()=>{null!==_&&o(JSON.stringify(_,null,2))},[_]),K=(0,n.useCallback)(()=>{null!==_&&o(JSON.stringify(_))},[_]),q=t.trim().length>0,G=(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,g.jsxs)(w,{onClick:()=>{o(""),l(""),L(null),(0,s.Is)(Z,"")},children:[(0,g.jsx)(x.A,{size:13})," New"]}),(0,g.jsx)(w,{onClick:D,disabled:!!H,children:"Format"}),(0,g.jsx)(w,{onClick:K,disabled:!!H,children:"Minify"}),(0,g.jsx)(s.UO,{appId:"jsonexplorer",onLoad:(e,r,n)=>{o(e),L(r&&n?{id:r,name:n}:null)}}),(0,g.jsxs)(m,{onClick:()=>A(!0),children:[(0,g.jsx)(u.A,{size:14}),"Save"]}),(0,g.jsxs)(F,{ref:I,children:[(0,g.jsxs)(w,{onClick:()=>c(e=>!e),children:["Examples ",(0,g.jsx)(i.A,{size:12})]}),d&&(0,g.jsx)(J,{children:f.k.map(e=>(0,g.jsx)(R,{onClick:()=>{o(e.json),l(""),c(!1)},children:e.label},e.label))})]}),e]});return(0,g.jsxs)(s.PE,{title:"JSON Explorer",sidebar:(0,g.jsx)(a.tz,{activeAppId:"jsonexplorer"}),topBarRight:G,children:[p&&(0,g.jsx)(s.MJ,{onSave:async e=>{A(!1),await(0,s.KL)("jsonexplorer",e,r),L(null)},onUpdate:async()=>{B&&(A(!1),await(0,s.mZ)(B.id,B.name,r))},existingDoc:B??void 0,onCancel:()=>A(!1)}),(0,g.jsxs)(y,{children:[(0,g.jsxs)(j,{children:[(0,g.jsxs)($,{children:[(0,g.jsx)("span",{children:"Raw JSON"}),!H&&null!==_&&(0,g.jsx)(Y,{text:r})]}),(0,g.jsx)(v,{hasError:!!H,value:r,onChange:e=>o(e.target.value),spellCheck:!1,placeholder:"Paste JSON here…"}),H&&(0,g.jsxs)(k,{children:["⚠ ",H]})]}),(0,g.jsxs)(b,{children:[(0,g.jsx)($,{children:(0,g.jsx)("span",{children:"Tree View"})}),q?(0,g.jsx)(C,{children:U&&U.length>0?U.map((e,r)=>(0,g.jsxs)(N,{children:[(0,g.jsx)(E,{children:e.path}),(0,g.jsx)(O,{children:JSON.stringify(e.value,null,2)})]},r)):(0,g.jsx)("span",{style:{color:s.w4.colors.mainTextMuted,fontSize:13},children:"No results"})}):(0,g.jsx)(z,{children:null!==_?(0,g.jsx)(V,{value:_,level:0,isLast:!0,defaultExpanded:!0}):(0,g.jsx)("span",{style:{color:s.w4.colors.mainTextMuted,fontSize:13},children:H?"Fix JSON to see tree":"Paste JSON on the left"})}),(0,g.jsxs)(S,{children:[(0,g.jsx)(M,{children:"JSONPath:"}),(0,g.jsx)(T,{value:t,onChange:e=>l(e.target.value),placeholder:"$.users[*].name",spellCheck:!1}),t&&(0,g.jsx)("span",{style:{fontSize:11,color:s.w4.colors.mainTextMuted},children:U?`${U.length} result${1!==U.length?"s":""}`:"—"})]})]})]})]})}const G=document.getElementById("root");if(!G)throw new Error("Root element #root not found");(0,t.H)(G).render((0,g.jsx)(q,{}))},8997(e,r,o){var n=o(8991);r.H=n.createRoot,n.hydrateRoot}}]);