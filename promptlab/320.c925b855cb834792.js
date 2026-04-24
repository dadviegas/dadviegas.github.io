"use strict";(self.webpackChunk_atlantis_promptlab=self.webpackChunk_atlantis_promptlab||[]).push([["320"],{1825(e,o,r){r.d(o,{A:()=>t});let t=(0,r(5419).A)("Columns2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]])},2743(e,o,r){r.d(o,{A:()=>t});let t=(0,r(5419).A)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},6480(e,o,r){r.d(o,{A:()=>t});let t=(0,r(5419).A)("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]])},5368(e,o,r){r.d(o,{A:()=>t});let t=(0,r(5419).A)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},3758(e,o,r){r.d(o,{L:()=>i});var t=r(7723);async function i(e,o,r,i,n,a,l){let s="",d=e=>{e.length<=s.length||(a(e.slice(s.length)),s=e)};"groq"===e?await (0,t.askGroqStream)(n,{key:o,model:r,system:i,onChunk:d,signal:l}):await (0,t.streamGemini)(n,{key:o,model:r,system:i,onChunk:d,signal:l})}},7613(e,o,r){r.d(o,{H:()=>v});var t=r(5723),i=r(7991),n=r(6859),a=r.n(n),l=r(9874),s=r(2743),d=r(8035);let c=a().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${l.w4.colors.mainBg};
  padding: ${l.w4.spacing.xl};
`,p=a().div`
  width: 100%;
  max-width: 520px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};
`,x=a().div`
  font-size: 48px;
  text-align: center;
`,g=a().h1`
  font-size: 24px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  text-align: center;
  margin: 0;
`,u=a().p`
  font-size: 14px;
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.6;
  margin: 0;
`,h=a().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,m=a().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,f=a().label`
  font-size: 13px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,y=a().a`
  font-size: 11px;
  color: ${l.w4.colors.accent};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover { text-decoration: underline; }
`,w=a().input`
  width: 100%;
  padding: 10px 14px;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 14px;
  font-family: ${l.w4.typography.fontFamilyMono};
  outline: none;
  transition: border-color ${l.w4.transitions.base};
  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; opacity: 0.5; }
`,b=a().button`
  width: 100%;
  padding: 12px;
  background: ${l.w4.colors.accent};
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  cursor: pointer;
  transition: background ${l.w4.transitions.base};
  &:hover { background: ${l.w4.colors.accentHover}; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,$=a().p`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  margin: 0;
`;function v({onSave:e}){let[o,r]=(0,i.useState)(""),[n,a]=(0,i.useState)(""),l=!!(o.trim()||n.trim());return(0,t.jsx)(c,{children:(0,t.jsxs)(p,{children:[(0,t.jsx)(x,{children:"\uD83E\uDDE0"}),(0,t.jsx)(g,{children:"Prompt Lab"}),(0,t.jsx)(u,{children:"Enter at least one API key to get started. Keys are stored locally in your browser — never sent to our servers."}),d.x.map(e=>{let i="groq"===e.id?o:n,l="groq"===e.id?r:a;return(0,t.jsxs)(h,{children:[(0,t.jsxs)(m,{children:[(0,t.jsx)(f,{children:e.label}),(0,t.jsxs)(y,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:["Get key ",(0,t.jsx)(s.A,{size:11})]})]}),(0,t.jsx)(w,{type:"password",placeholder:`Paste your ${e.label} API key`,value:i,onChange:e=>l(e.target.value)})]},e.id)}),(0,t.jsx)(b,{disabled:!l,onClick:()=>{l&&e({groq:o.trim(),gemini:n.trim()})},children:"Get Started"}),(0,t.jsx)($,{children:"You can add more keys later in Settings."})]})})}},5287(e,o,r){r.d(o,{W:()=>w});var t=r(5723),i=r(7991),n=r(6859),a=r.n(n),l=r(9874),s=r(5419);let d=(0,s.A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),c=(0,s.A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),p=(0,s.A)("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]),x=a().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  height: 100%;
  min-height: 0;
`,g=a().button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  cursor: pointer;
  padding: 0;
  &:hover { color: ${l.w4.colors.mainText}; }
`,u=a().textarea`
  width: 100%;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 14px;
  font-family: ${l.w4.typography.fontFamilyMono};
  line-height: 1.6;
  padding: 12px 14px;
  resize: vertical;
  outline: none;
  transition: border-color ${l.w4.transitions.base};
  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; opacity: 0.5; }
`,h=a()(u)`
  min-height: 80px;
  max-height: 200px;
`,m=a()(u)`
  flex: 1;
  min-height: 120px;
`,f=a().button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  background: ${({disabled:e})=>e?l.w4.colors.border:l.w4.colors.accent};
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: background ${l.w4.transitions.base};
  &:hover { background: ${({disabled:e})=>e?l.w4.colors.border:l.w4.colors.accentHover}; }
`,y=a().div`
  font-size: 11px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;function w({systemPrompt:e,userPrompt:o,onSystemChange:r,onUserChange:n,onRun:a,running:l,canRun:s}){let[u,b]=(0,i.useState)(!!e);return(0,t.jsxs)(x,{children:[(0,t.jsxs)(g,{onClick:()=>b(e=>!e),children:[u?(0,t.jsx)(d,{size:14}):(0,t.jsx)(c,{size:14}),"System Prompt"]}),u&&(0,t.jsx)(h,{placeholder:"Optional system prompt...",value:e,onChange:e=>r(e.target.value)}),(0,t.jsx)(y,{children:"User Prompt"}),(0,t.jsx)(m,{placeholder:"Enter your prompt here...",value:o,onChange:e=>n(e.target.value),onKeyDown:e=>{"Enter"===e.key&&(e.metaKey||e.ctrlKey)&&s&&!l&&(e.preventDefault(),a())}}),(0,t.jsxs)(f,{disabled:!s||l,onClick:a,children:[(0,t.jsx)(p,{size:14}),l?"Running...":"Run"]})]})}},3090(e,o,r){r.d(o,{c:()=>q});var t=r(5723),i=r(6859),n=r.n(i),a=r(2799),l=r(9874),s=r(5419);let d=(0,s.A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),c=(0,s.A)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);var p=r(7991),x=r(8035);let g=(0,a.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`,u=n().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  overflow: hidden;
`,h=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  border-bottom: 1px solid ${l.w4.colors.border};
  flex-shrink: 0;
`,m=n().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${({accentColor:e})=>e};
  display: flex;
  align-items: center;
  gap: 6px;
`,f=n().span`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${l.w4.colors.mainTextMuted};
  background: ${l.w4.colors.surface};
  padding: 2px 6px;
  border-radius: ${l.w4.borderRadius.sm};
`,y=n().div`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
`,w=n().div`
  flex: 1;
  overflow-y: auto;
  padding: 14px;
  min-height: 0;
`,b=n().pre`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  line-height: 1.7;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;

  &::after {
    content: ${({streaming:e})=>e?'"\\25CB"':'""'};
    animation: ${({streaming:e})=>e?g:"none"} 1s step-end infinite;
    color: ${l.w4.colors.accent};
    margin-left: 2px;
  }
`,$=n().div`
  color: ${l.w4.colors.mainTextMuted};
  font-size: 13px;
  font-style: italic;
`,v=n().div`
  color: #f85149;
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  white-space: pre-wrap;
`,k=n().div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: #d2992215;
  border: 1px solid #d2992240;
  border-radius: ${l.w4.borderRadius.md};
  color: #d29922;
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  line-height: 1.5;
`,j=n().span`
  font-size: 20px;
  flex-shrink: 0;
`,M=n().button`
  background: none;
  border: none;
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 4px;
  border-radius: ${l.w4.borderRadius.sm};
  display: flex;
  align-items: center;
  transition: color ${l.w4.transitions.base}, background ${l.w4.transitions.base};
  &:hover { color: ${l.w4.colors.mainText}; background: ${l.w4.colors.surface}; }
`,z={groq:"#f55036",gemini:"#4285f4"};function q({run:e}){let[o,r]=(0,p.useState)(!1),i=x.L.find(o=>o.id===e.modelId),n=i?.label??e.modelId,a=z[e.provider]??l.w4.colors.accent,s=async()=>{e.output&&(await navigator.clipboard.writeText(e.output),r(!0),setTimeout(()=>r(!1),1500))};return(0,t.jsxs)(u,{children:[(0,t.jsxs)(h,{children:[(0,t.jsxs)(m,{accentColor:a,children:[(0,t.jsx)(f,{children:e.provider}),n]}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:["done"===e.status&&null!=e.durationMs&&(0,t.jsxs)(y,{children:[(e.durationMs/1e3).toFixed(1),"s"]}),e.output&&(0,t.jsx)(M,{onClick:s,title:"Copy output",children:o?(0,t.jsx)(d,{size:13}):(0,t.jsx)(c,{size:13})})]})]}),(0,t.jsxs)(w,{children:["idle"===e.status&&(0,t.jsx)($,{children:"Response will appear here..."}),"error"===e.status&&e.error?.includes("rate limit")&&(0,t.jsxs)(k,{children:[(0,t.jsx)(j,{children:"⚠️"}),(0,t.jsx)("div",{children:e.error})]}),"error"===e.status&&!e.error?.includes("rate limit")&&(0,t.jsx)(v,{children:e.error}),("streaming"===e.status||"done"===e.status)&&(0,t.jsx)(b,{streaming:"streaming"===e.status,children:e.output})]})]})}},7871(e,o,r){r.d(o,{Vc:()=>n,cR:()=>a,yr:()=>l});var t=r(7723);let i={groq:"",gemini:""};function n(){let e=(0,t.loadApiKeysSync)();return{...i,groq:e.groq??"",gemini:e.gemini??""}}function a(e){(0,t.saveApiKeys)({groq:e.groq,gemini:e.gemini})}function l(e){return!!(e.groq||e.gemini)}},8035(e,o,r){r.d(o,{L:()=>n,x:()=>i});var t=r(7723);let i=[{id:"groq",label:"Groq",url:"https://console.groq.com"},{id:"gemini",label:"Google Gemini",url:"https://aistudio.google.com/apikey"}],n=[...t.GROQ_MODELS.map(e=>({provider:"groq",id:e.id,label:e.label})),...t.GEMINI_MODELS.map(e=>({provider:"gemini",id:e.id,label:e.label}))]}}]);