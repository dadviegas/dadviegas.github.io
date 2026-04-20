"use strict";(self.webpackChunk_atlantis_jsonexplorer=self.webpackChunk_atlantis_jsonexplorer||[]).push([["5512"],{8997(e,r,o){var n=o(2727);r.createRoot=n.createRoot,n.hydrateRoot},3611(e,r,o){var n=o(5723),t=o(7991),s=o(8997),l=o(6859),i=o.n(l),a=o(3930),d=o(1638),c=o(679),p=o(9753),x=o(5609),u=o(320),f=o(1344),h=o(6480),g=o(5151),m=o(3173);let w=i().button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${a.w4.colors.accent};border-radius:${a.w4.borderRadius.md};color:${a.w4.colors.accent};font-size:${a.w4.typography.fontSizeBase};font-family:${a.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background ${a.w4.transitions.base};white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,y=i().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 ${a.w4.spacing.sm};
  height: 30px;
  background: ${e=>"primary"===e.variant?a.w4.colors.accent:"transparent"};
  border: 1px solid ${e=>"primary"===e.variant?a.w4.colors.accent:a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${e=>"primary"===e.variant?"#fff":a.w4.colors.mainTextMuted};
  font-size: 12px;
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;
  transition: all ${a.w4.transitions.base};

  &:hover {
    border-color: ${a.w4.colors.accent};
    color: ${e=>"primary"===e.variant?"#fff":a.w4.colors.mainText};
    background: ${e=>"primary"===e.variant?a.w4.colors.accent:"rgba(56,139,253,0.1)"};
  }
`,b=i().div`
  display: flex;
  flex: 1;
  overflow: hidden;
  gap: 0;
`,j=i().div`
  display: flex;
  flex-direction: column;
  width: 42%;
  min-width: 280px;
  border-right: 1px solid ${a.w4.colors.border};
  overflow: hidden;
`,$=i().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,v=i().div`
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
`,k=i().textarea`
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
`,z=i().div`
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  background: rgba(248,113,113,0.1);
  border-top: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  font-size: 12px;
  font-family: ${a.w4.typography.fontFamilyMono};
  flex-shrink: 0;
`,S=i().div`
  flex: 1;
  overflow: auto;
  padding: ${a.w4.spacing.md};
`,T=i().div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-top: 1px solid ${a.w4.colors.border};
  background: ${a.w4.colors.sidebarBg};
  flex-shrink: 0;
`,M=i().input`
  flex: 1;
  background: ${a.w4.colors.mainBg};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  padding: 4px 8px;
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12px;
  color: ${a.w4.colors.mainText};
  outline: none;
  height: 28px;

  &:focus { border-color: ${a.w4.colors.accent}; }
  &::placeholder { color: ${a.w4.colors.mainTextMuted}; }
`,C=i().span`
  font-size: 11px;
  color: ${a.w4.colors.mainTextMuted};
  white-space: nowrap;
`,N=i().div`
  flex: 1;
  overflow: auto;
  padding: ${a.w4.spacing.md};
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12.5px;
`,E=i().div`
  margin-bottom: ${a.w4.spacing.sm};
  border-left: 2px solid ${a.w4.colors.accent};
  padding-left: ${a.w4.spacing.sm};
`,O=i().div`
  font-size: 11px;
  color: ${a.w4.colors.accent};
  margin-bottom: 2px;
`,F=i().pre`
  color: ${a.w4.colors.mainText};
  white-space: pre-wrap;
  font-size: 12px;
  margin: 0;
`,R=i().div`position: relative;`,J=i().div`
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
`,A=i().button`
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
`,B=i().span`color: #79c0ff;`,L=i().span`color: #a5d6ff;`,I=i().span`color: #f78166;`,P=i().span`color: #d2a8ff;`,_=i().span`color: ${a.w4.colors.mainTextMuted}; font-style: italic;`,U=i().span`color: ${a.w4.colors.mainTextMuted};`,D=i().span`
  font-size: 10px;
  color: ${a.w4.colors.mainTextMuted};
  margin-left: 4px;
`,K=i().div`
  display: flex;
  align-items: flex-start;
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
  cursor: default;
  border-radius: 3px;
  padding: 0 2px;

  &:hover { background: rgba(255,255,255,0.04); }
`,V=i().button`
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
`,Y=i().div`
  width: ${e=>16*e.level}px;
  flex-shrink: 0;
`;function Z({keyName:e,value:r,level:o,isLast:s,defaultExpanded:l=o<2}){let[i,d]=(0,t.useState)(l),x=Array.isArray(r),u=null!==r&&"object"==typeof r&&!x,f=x||u,h=f?Object.keys(r).length:0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(K,{children:[(0,n.jsx)(Y,{level:o}),f?(0,n.jsx)(V,{onClick:()=>d(e=>!e),children:i?(0,n.jsx)(c.A,{size:12}):(0,n.jsx)(p.A,{size:12})}):(0,n.jsx)("div",{style:{width:16,flexShrink:0}}),void 0!==e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(B,{children:['"',e,'"']}),(0,n.jsx)("span",{style:{color:a.w4.colors.mainTextMuted,marginRight:4},children:":"})]}),"string"==typeof r?(0,n.jsxs)(L,{children:['"',r,'"']}):"number"==typeof r?(0,n.jsx)(I,{children:r}):"boolean"==typeof r?(0,n.jsx)(P,{children:String(r)}):null===r?(0,n.jsx)(_,{children:"null"}):x?(0,n.jsx)(U,{children:"["}):u?(0,n.jsx)(U,{children:"{"}):null,f&&!i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(D,{children:[h," ",x?"items":"keys"]}),(0,n.jsx)(U,{children:x?"]":"}"})]}),!f&&!s&&(0,n.jsx)("span",{style:{color:a.w4.colors.mainTextMuted},children:","})]}),f&&i&&(0,n.jsxs)(n.Fragment,{children:[x?r.map((e,t)=>(0,n.jsx)(Z,{keyName:String(t),value:e,level:o+1,isLast:t===r.length-1,defaultExpanded:o+1<2},t)):Object.entries(r).map(([e,r],t,s)=>(0,n.jsx)(Z,{keyName:e,value:r,level:o+1,isLast:t===s.length-1,defaultExpanded:o+1<2},e)),(0,n.jsxs)(K,{children:[(0,n.jsx)(Y,{level:o}),(0,n.jsx)("div",{style:{width:16}}),(0,n.jsx)(U,{children:x?"]":"}"}),!s&&(0,n.jsx)("span",{style:{color:a.w4.colors.mainTextMuted},children:","})]})]})]})}function q({text:e}){let[r,o]=(0,t.useState)(!1);return(0,n.jsxs)(y,{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1500)})},title:"Copy to clipboard",children:[r?(0,n.jsx)(x.A,{size:12}):(0,n.jsx)(u.A,{size:12}),r?"Copied":"Copy"]})}let G="toolkit:jsonexplorer",H=document.getElementById("root");if(!H)throw Error("Root element #root not found");(0,s.createRoot)(H).render((0,n.jsx)(function({topBarRight:e}){let[r,o]=(0,t.useState)(""),[s,l]=(0,t.useState)(""),[i,p]=(0,t.useState)(!1),[x,u]=(0,t.useState)(!1),[B,L]=(0,t.useState)(null),I=(0,t.useRef)(null),P=(0,t.useRef)(!1);(0,t.useEffect)(()=>{(0,a.PL)(G).then(e=>{if(e)try{let r=JSON.parse(e);o(r.raw??""),l(r.filter??"")}catch{}P.current=!0})},[]),(0,t.useEffect)(()=>{if(!P.current)return;let e=setTimeout(()=>(0,a.Is)(G,JSON.stringify({raw:r,filter:s})),400);return()=>clearTimeout(e)},[r,s]);let _=async e=>{u(!1),await (0,a.KL)("jsonexplorer",e,r),L(null)},U=async()=>{B&&(u(!1),await (0,a.mZ)(B.id,B.name,r))};(0,t.useEffect)(()=>{let e=e=>{I.current&&!I.current.contains(e.target)&&p(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let{parsed:D,error:K}=(0,t.useMemo)(()=>{try{return{parsed:JSON.parse(r),error:null}}catch(e){return{parsed:null,error:e.message}}},[r]),V=(0,t.useMemo)(()=>{if(!s.trim()||null===D)return null;try{return(0,m.Y)(D,s)}catch{return null}},[s,D]),Y=(0,t.useCallback)(()=>{null!==D&&o(JSON.stringify(D,null,2))},[D]),H=(0,t.useCallback)(()=>{null!==D&&o(JSON.stringify(D))},[D]),Q=s.trim().length>0,W=(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,n.jsxs)(y,{onClick:()=>{o(""),l(""),L(null),(0,a.Is)(G,"")},children:[(0,n.jsx)(f.A,{size:13})," New"]}),(0,n.jsx)(y,{onClick:Y,disabled:!!K,children:"Format"}),(0,n.jsx)(y,{onClick:H,disabled:!!K,children:"Minify"}),(0,n.jsx)(a.UO,{appId:"jsonexplorer",onLoad:(e,r,n)=>{o(e),L(r&&n?{id:r,name:n}:null)}}),(0,n.jsxs)(w,{onClick:()=>u(!0),children:[(0,n.jsx)(h.A,{size:14}),"Save"]}),(0,n.jsxs)(R,{ref:I,children:[(0,n.jsxs)(y,{onClick:()=>p(e=>!e),children:["Examples ",(0,n.jsx)(c.A,{size:12})]}),i&&(0,n.jsx)(J,{children:g.k.map(e=>(0,n.jsx)(A,{onClick:()=>{o(e.json),l(""),p(!1)},children:e.label},e.label))})]}),e]});return(0,n.jsxs)(a.PE,{title:"JSON Explorer",sidebar:(0,n.jsx)(d.tz,{activeAppId:"jsonexplorer"}),topBarRight:W,children:[x&&(0,n.jsx)(a.MJ,{onSave:_,onUpdate:U,existingDoc:B??void 0,onCancel:()=>u(!1)}),(0,n.jsxs)(b,{children:[(0,n.jsxs)(j,{children:[(0,n.jsxs)(v,{children:[(0,n.jsx)("span",{children:"Raw JSON"}),!K&&null!==D&&(0,n.jsx)(q,{text:r})]}),(0,n.jsx)(k,{hasError:!!K,value:r,onChange:e=>o(e.target.value),spellCheck:!1,placeholder:"Paste JSON here…"}),K&&(0,n.jsxs)(z,{children:["⚠ ",K]})]}),(0,n.jsxs)($,{children:[(0,n.jsx)(v,{children:(0,n.jsx)("span",{children:"Tree View"})}),Q?(0,n.jsx)(N,{children:V&&V.length>0?V.map((e,r)=>(0,n.jsxs)(E,{children:[(0,n.jsx)(O,{children:e.path}),(0,n.jsx)(F,{children:JSON.stringify(e.value,null,2)})]},r)):(0,n.jsx)("span",{style:{color:a.w4.colors.mainTextMuted,fontSize:13},children:"No results"})}):(0,n.jsx)(S,{children:null!==D?(0,n.jsx)(Z,{value:D,level:0,isLast:!0,defaultExpanded:!0}):(0,n.jsx)("span",{style:{color:a.w4.colors.mainTextMuted,fontSize:13},children:K?"Fix JSON to see tree":"Paste JSON on the left"})}),(0,n.jsxs)(T,{children:[(0,n.jsx)(C,{children:"JSONPath:"}),(0,n.jsx)(M,{value:s,onChange:e=>l(e.target.value),placeholder:"$.users[*].name",spellCheck:!1}),s&&(0,n.jsx)("span",{style:{fontSize:11,color:a.w4.colors.mainTextMuted},children:V?`${V.length} result${1!==V.length?"s":""}`:"—"})]})]})]})]})},{}))}}]);