"use strict";(self.webpackChunk_atlantis_jsonexplorer=self.webpackChunk_atlantis_jsonexplorer||[]).push([["6362"],{3935(e,r,o){o.r(r),o.d(r,{default:()=>G});var n=o(5723),s=o(7991),l=o(6859),i=o.n(l),t=o(3930),a=o(1638),d=o(679),c=o(9753),p=o(5609),x=o(320),u=o(1344),f=o(6480),h=o(5151),g=o(3173);let m=i().button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${t.w4.colors.accent};border-radius:${t.w4.borderRadius.md};color:${t.w4.colors.accent};font-size:${t.w4.typography.fontSizeBase};font-family:${t.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background ${t.w4.transitions.base};white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,w=i().button`
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
  transition: all ${t.w4.transitions.base};

  &:hover {
    border-color: ${t.w4.colors.accent};
    color: ${e=>"primary"===e.variant?"#fff":t.w4.colors.mainText};
    background: ${e=>"primary"===e.variant?t.w4.colors.accent:"rgba(56,139,253,0.1)"};
  }
`,y=i().div`
  display: flex;
  flex: 1;
  overflow: hidden;
  gap: 0;
`,b=i().div`
  display: flex;
  flex-direction: column;
  width: 42%;
  min-width: 280px;
  border-right: 1px solid ${t.w4.colors.border};
  overflow: hidden;
`,j=i().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,$=i().div`
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
`,v=i().textarea`
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
`,k=i().div`
  padding: ${t.w4.spacing.sm} ${t.w4.spacing.md};
  background: rgba(248,113,113,0.1);
  border-top: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  font-size: 12px;
  font-family: ${t.w4.typography.fontFamilyMono};
  flex-shrink: 0;
`,z=i().div`
  flex: 1;
  overflow: auto;
  padding: ${t.w4.spacing.md};
`,S=i().div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  padding: ${t.w4.spacing.sm} ${t.w4.spacing.md};
  border-top: 1px solid ${t.w4.colors.border};
  background: ${t.w4.colors.sidebarBg};
  flex-shrink: 0;
`,T=i().input`
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
`,M=i().span`
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  white-space: nowrap;
`,C=i().div`
  flex: 1;
  overflow: auto;
  padding: ${t.w4.spacing.md};
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
`,N=i().div`
  margin-bottom: ${t.w4.spacing.sm};
  border-left: 2px solid ${t.w4.colors.accent};
  padding-left: ${t.w4.spacing.sm};
`,O=i().div`
  font-size: 11px;
  color: ${t.w4.colors.accent};
  margin-bottom: 2px;
`,F=i().pre`
  color: ${t.w4.colors.mainText};
  white-space: pre-wrap;
  font-size: 12px;
  margin: 0;
`,E=i().div`position: relative;`,J=i().div`
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
`,A=i().button`
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
`,R=i().span`color: #79c0ff;`,L=i().span`color: #a5d6ff;`,B=i().span`color: #f78166;`,I=i().span`color: #d2a8ff;`,P=i().span`color: ${t.w4.colors.mainTextMuted}; font-style: italic;`,_=i().span`color: ${t.w4.colors.mainTextMuted};`,U=i().span`
  font-size: 10px;
  color: ${t.w4.colors.mainTextMuted};
  margin-left: 4px;
`,D=i().div`
  display: flex;
  align-items: flex-start;
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  line-height: 1.6;
  cursor: default;
  border-radius: 3px;
  padding: 0 2px;

  &:hover { background: rgba(255,255,255,0.04); }
`,K=i().button`
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
`,V=i().div`
  width: ${e=>16*e.level}px;
  flex-shrink: 0;
`;function Y({keyName:e,value:r,level:o,isLast:l,defaultExpanded:i=o<2}){let[a,p]=(0,s.useState)(i),x=Array.isArray(r),u=null!==r&&"object"==typeof r&&!x,f=x||u,h=f?Object.keys(r).length:0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(D,{children:[(0,n.jsx)(V,{level:o}),f?(0,n.jsx)(K,{onClick:()=>p(e=>!e),children:a?(0,n.jsx)(d.A,{size:12}):(0,n.jsx)(c.A,{size:12})}):(0,n.jsx)("div",{style:{width:16,flexShrink:0}}),void 0!==e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(R,{children:['"',e,'"']}),(0,n.jsx)("span",{style:{color:t.w4.colors.mainTextMuted,marginRight:4},children:":"})]}),"string"==typeof r?(0,n.jsxs)(L,{children:['"',r,'"']}):"number"==typeof r?(0,n.jsx)(B,{children:r}):"boolean"==typeof r?(0,n.jsx)(I,{children:String(r)}):null===r?(0,n.jsx)(P,{children:"null"}):x?(0,n.jsx)(_,{children:"["}):u?(0,n.jsx)(_,{children:"{"}):null,f&&!a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(U,{children:[h," ",x?"items":"keys"]}),(0,n.jsx)(_,{children:x?"]":"}"})]}),!f&&!l&&(0,n.jsx)("span",{style:{color:t.w4.colors.mainTextMuted},children:","})]}),f&&a&&(0,n.jsxs)(n.Fragment,{children:[x?r.map((e,s)=>(0,n.jsx)(Y,{keyName:String(s),value:e,level:o+1,isLast:s===r.length-1,defaultExpanded:o+1<2},s)):Object.entries(r).map(([e,r],s,l)=>(0,n.jsx)(Y,{keyName:e,value:r,level:o+1,isLast:s===l.length-1,defaultExpanded:o+1<2},e)),(0,n.jsxs)(D,{children:[(0,n.jsx)(V,{level:o}),(0,n.jsx)("div",{style:{width:16}}),(0,n.jsx)(_,{children:x?"]":"}"}),!l&&(0,n.jsx)("span",{style:{color:t.w4.colors.mainTextMuted},children:","})]})]})]})}function Z({text:e}){let[r,o]=(0,s.useState)(!1);return(0,n.jsxs)(w,{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1500)})},title:"Copy to clipboard",children:[r?(0,n.jsx)(p.A,{size:12}):(0,n.jsx)(x.A,{size:12}),r?"Copied":"Copy"]})}let q="toolkit:jsonexplorer";function G({topBarRight:e}){let[r,o]=(0,s.useState)(""),[l,i]=(0,s.useState)(""),[c,p]=(0,s.useState)(!1),[x,R]=(0,s.useState)(!1),[L,B]=(0,s.useState)(null),I=(0,s.useRef)(null),P=(0,s.useRef)(!1);(0,s.useEffect)(()=>{(0,t.PL)(q).then(e=>{if(e)try{let r=JSON.parse(e);o(r.raw??""),i(r.filter??"")}catch{}P.current=!0})},[]),(0,s.useEffect)(()=>{if(!P.current)return;let e=setTimeout(()=>(0,t.Is)(q,JSON.stringify({raw:r,filter:l})),400);return()=>clearTimeout(e)},[r,l]);let _=async e=>{R(!1),await (0,t.KL)("jsonexplorer",e,r),B(null)},U=async()=>{L&&(R(!1),await (0,t.mZ)(L.id,L.name,r))};(0,s.useEffect)(()=>{let e=e=>{I.current&&!I.current.contains(e.target)&&p(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let{parsed:D,error:K}=(0,s.useMemo)(()=>{try{return{parsed:JSON.parse(r),error:null}}catch(e){return{parsed:null,error:e.message}}},[r]),V=(0,s.useMemo)(()=>{if(!l.trim()||null===D)return null;try{return(0,g.Y)(D,l)}catch{return null}},[l,D]),H=(0,s.useCallback)(()=>{null!==D&&o(JSON.stringify(D,null,2))},[D]),Q=(0,s.useCallback)(()=>{null!==D&&o(JSON.stringify(D))},[D]),W=l.trim().length>0,X=(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,n.jsxs)(w,{onClick:()=>{o(""),i(""),B(null),(0,t.Is)(q,"")},children:[(0,n.jsx)(u.A,{size:13})," New"]}),(0,n.jsx)(w,{onClick:H,disabled:!!K,children:"Format"}),(0,n.jsx)(w,{onClick:Q,disabled:!!K,children:"Minify"}),(0,n.jsx)(t.UO,{appId:"jsonexplorer",onLoad:(e,r,n)=>{o(e),B(r&&n?{id:r,name:n}:null)}}),(0,n.jsxs)(m,{onClick:()=>R(!0),children:[(0,n.jsx)(f.A,{size:14}),"Save"]}),(0,n.jsxs)(E,{ref:I,children:[(0,n.jsxs)(w,{onClick:()=>p(e=>!e),children:["Examples ",(0,n.jsx)(d.A,{size:12})]}),c&&(0,n.jsx)(J,{children:h.k.map(e=>(0,n.jsx)(A,{onClick:()=>{o(e.json),i(""),p(!1)},children:e.label},e.label))})]}),e]});return(0,n.jsxs)(t.PE,{title:"JSON Explorer",sidebar:(0,n.jsx)(a.tz,{activeAppId:"jsonexplorer"}),topBarRight:X,children:[x&&(0,n.jsx)(t.MJ,{onSave:_,onUpdate:U,existingDoc:L??void 0,onCancel:()=>R(!1)}),(0,n.jsxs)(y,{children:[(0,n.jsxs)(b,{children:[(0,n.jsxs)($,{children:[(0,n.jsx)("span",{children:"Raw JSON"}),!K&&null!==D&&(0,n.jsx)(Z,{text:r})]}),(0,n.jsx)(v,{hasError:!!K,value:r,onChange:e=>o(e.target.value),spellCheck:!1,placeholder:"Paste JSON here…"}),K&&(0,n.jsxs)(k,{children:["⚠ ",K]})]}),(0,n.jsxs)(j,{children:[(0,n.jsx)($,{children:(0,n.jsx)("span",{children:"Tree View"})}),W?(0,n.jsx)(C,{children:V&&V.length>0?V.map((e,r)=>(0,n.jsxs)(N,{children:[(0,n.jsx)(O,{children:e.path}),(0,n.jsx)(F,{children:JSON.stringify(e.value,null,2)})]},r)):(0,n.jsx)("span",{style:{color:t.w4.colors.mainTextMuted,fontSize:13},children:"No results"})}):(0,n.jsx)(z,{children:null!==D?(0,n.jsx)(Y,{value:D,level:0,isLast:!0,defaultExpanded:!0}):(0,n.jsx)("span",{style:{color:t.w4.colors.mainTextMuted,fontSize:13},children:K?"Fix JSON to see tree":"Paste JSON on the left"})}),(0,n.jsxs)(S,{children:[(0,n.jsx)(M,{children:"JSONPath:"}),(0,n.jsx)(T,{value:l,onChange:e=>i(e.target.value),placeholder:"$.users[*].name",spellCheck:!1}),l&&(0,n.jsx)("span",{style:{fontSize:11,color:t.w4.colors.mainTextMuted},children:V?`${V.length} result${1!==V.length?"s":""}`:"—"})]})]})]})]})}}}]);