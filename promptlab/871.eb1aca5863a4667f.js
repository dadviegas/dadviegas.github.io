"use strict";(self.webpackChunk_atlantis_promptlab=self.webpackChunk_atlantis_promptlab||[]).push([["871"],{3758(e,o,r){r.d(o,{L:()=>a});var t=r(3019);async function a(e,o,r,a,i,n,l){let d="",s=e=>{e.length<=d.length||(n(e.slice(d.length)),d=e)};"groq"===e?await (0,t.askGroqStream)(i,{key:o,model:r,system:a,onChunk:s,signal:l}):await (0,t.streamGemini)(i,{key:o,model:r,system:a,onChunk:s,signal:l})}},7613(e,o,r){r.d(o,{H:()=>v});var t=r(5723),a=r(7991),i=r(6859),n=r.n(i),l=r(6063),d=r(132),s=r(8035);let c=n().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${l.w4.colors.mainBg};
  padding: ${l.w4.spacing.xl};
`,p=n().div`
  width: 100%;
  max-width: 520px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};
`,g=n().div`
  font-size: 48px;
  text-align: center;
`,h=n().h1`
  font-size: 24px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  text-align: center;
  margin: 0;
`,x=n().p`
  font-size: 14px;
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1.6;
  margin: 0;
`,f=n().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,b=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,m=n().label`
  font-size: 13px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,w=n().a`
  font-size: 11px;
  color: ${l.w4.colors.accent};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover { text-decoration: underline; }
`,u=n().input`
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
`,y=n().button`
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
`,$=n().p`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  margin: 0;
`;function v({onSave:e}){let[o,r]=(0,a.useState)(""),[i,n]=(0,a.useState)(""),l=!!(o.trim()||i.trim());return(0,t.jsx)(c,{children:(0,t.jsxs)(p,{children:[(0,t.jsx)(g,{children:"\uD83E\uDDE0"}),(0,t.jsx)(h,{children:"Prompt Lab"}),(0,t.jsx)(x,{children:"Enter at least one API key to get started. Keys are stored locally in your browser — never sent to our servers."}),s.x.map(e=>{let a="groq"===e.id?o:i,l="groq"===e.id?r:n;return(0,t.jsxs)(f,{children:[(0,t.jsxs)(b,{children:[(0,t.jsx)(m,{children:e.label}),(0,t.jsxs)(w,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:["Get key ",(0,t.jsx)(d.In,{name:"external-link",size:11})]})]}),(0,t.jsx)(u,{type:"password",placeholder:`Paste your ${e.label} API key`,value:a,onChange:e=>l(e.target.value)})]},e.id)}),(0,t.jsx)(y,{disabled:!l,onClick:()=>{l&&e({groq:o.trim(),gemini:i.trim()})},children:"Get Started"}),(0,t.jsx)($,{children:"You can add more keys later in Settings."})]})})}},6088(e,o,r){r.d(o,{W:()=>b});var t=r(5723),a=r(7991),i=r(6859),n=r.n(i),l=r(6063),d=r(132);let s=n().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  height: 100%;
  min-height: 0;
`,c=n().button`
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
`,p=n().textarea`
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
`,g=n()(p)`
  min-height: 80px;
  max-height: 200px;
`,h=n()(p)`
  flex: 1;
  min-height: 120px;
`,x=n().button`
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
`,f=n().div`
  font-size: 11px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;function b({systemPrompt:e,userPrompt:o,onSystemChange:r,onUserChange:i,onRun:n,running:l,canRun:p}){let[m,w]=(0,a.useState)(!!e);return(0,t.jsxs)(s,{children:[(0,t.jsxs)(c,{onClick:()=>w(e=>!e),children:[m?(0,t.jsx)(d.In,{name:"chevron-down",size:14}):(0,t.jsx)(d.In,{name:"chevron-right",size:14}),"System Prompt"]}),m&&(0,t.jsx)(g,{placeholder:"Optional system prompt...",value:e,onChange:e=>r(e.target.value)}),(0,t.jsx)(f,{children:"User Prompt"}),(0,t.jsx)(h,{placeholder:"Enter your prompt here...",value:o,onChange:e=>i(e.target.value),onKeyDown:e=>{"Enter"===e.key&&(e.metaKey||e.ctrlKey)&&p&&!l&&(e.preventDefault(),n())}}),(0,t.jsxs)(x,{disabled:!p||l,onClick:n,children:[(0,t.jsx)(d.In,{name:"play",size:14}),l?"Running...":"Run"]})]})}},6220(e,o,r){r.d(o,{c:()=>z});var t=r(5723),a=r(6859),i=r.n(a),n=r(2799),l=r(6063),d=r(132),s=r(7991),c=r(8035);let p=(0,n.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`,g=i().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  overflow: hidden;
`,h=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  border-bottom: 1px solid ${l.w4.colors.border};
  flex-shrink: 0;
`,x=i().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${({accentColor:e})=>e};
  display: flex;
  align-items: center;
  gap: 6px;
`,f=i().span`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${l.w4.colors.mainTextMuted};
  background: ${l.w4.colors.surface};
  padding: 2px 6px;
  border-radius: ${l.w4.borderRadius.sm};
`,b=i().div`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
`,m=i().div`
  flex: 1;
  overflow-y: auto;
  padding: 14px;
  min-height: 0;
`,w=i().pre`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  line-height: 1.7;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;

  &::after {
    content: ${({streaming:e})=>e?'"\\25CB"':'""'};
    animation: ${({streaming:e})=>e?p:"none"} 1s step-end infinite;
    color: ${l.w4.colors.accent};
    margin-left: 2px;
  }
`,u=i().div`
  color: ${l.w4.colors.mainTextMuted};
  font-size: 13px;
  font-style: italic;
`,y=i().div`
  color: #f85149;
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  white-space: pre-wrap;
`,$=i().div`
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
`,v=i().span`
  font-size: 20px;
  flex-shrink: 0;
`,M=i().button`
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
`,k={groq:"#f55036",gemini:"#4285f4"};function z({run:e}){let[o,r]=(0,s.useState)(!1),a=c.L.find(o=>o.id===e.modelId),i=a?.label??e.modelId,n=k[e.provider]??l.w4.colors.accent,p=async()=>{e.output&&(await navigator.clipboard.writeText(e.output),r(!0),setTimeout(()=>r(!1),1500))};return(0,t.jsxs)(g,{children:[(0,t.jsxs)(h,{children:[(0,t.jsxs)(x,{accentColor:n,children:[(0,t.jsx)(f,{children:e.provider}),i]}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:["done"===e.status&&null!=e.durationMs&&(0,t.jsxs)(b,{children:[(e.durationMs/1e3).toFixed(1),"s"]}),e.output&&(0,t.jsx)(M,{onClick:p,title:"Copy output",children:o?(0,t.jsx)(d.In,{name:"check",size:13}):(0,t.jsx)(d.In,{name:"copy",size:13})})]})]}),(0,t.jsxs)(m,{children:["idle"===e.status&&(0,t.jsx)(u,{children:"Response will appear here..."}),"error"===e.status&&e.error?.includes("rate limit")&&(0,t.jsxs)($,{children:[(0,t.jsx)(v,{children:"⚠️"}),(0,t.jsx)("div",{children:e.error})]}),"error"===e.status&&!e.error?.includes("rate limit")&&(0,t.jsx)(y,{children:e.error}),("streaming"===e.status||"done"===e.status)&&(0,t.jsx)(w,{streaming:"streaming"===e.status,children:e.output})]})]})}},7871(e,o,r){r.d(o,{Vc:()=>i,cR:()=>n,yr:()=>l});var t=r(3019);let a={groq:"",gemini:""};function i(){let e=(0,t.loadApiKeysSync)();return{...a,groq:e.groq??"",gemini:e.gemini??""}}function n(e){(0,t.saveApiKeys)({groq:e.groq,gemini:e.gemini})}function l(e){return!!(e.groq||e.gemini)}},8035(e,o,r){r.d(o,{L:()=>i,x:()=>a});var t=r(3019);let a=[{id:"groq",label:"Groq",url:"https://console.groq.com"},{id:"gemini",label:"Google Gemini",url:"https://aistudio.google.com/apikey"}],i=[...t.GROQ_MODELS.map(e=>({provider:"groq",id:e.id,label:e.label})),...t.GEMINI_MODELS.map(e=>({provider:"gemini",id:e.id,label:e.label}))]},5816(e,o,r){r.d(o,{FlyoutPanel:()=>u});var t=r(5723),a=r(7991),i=r.n(a),n=r(6859),l=r.n(n),d=r(2799),s=r(6063),c=r(7993);let p={activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"a-large-small":'<path d="M18 14v7M22 14l-4-7-4 7M2 14h7M2 21V7l5-4 5 4v14"/>',apple:'<path d="M12 20.9A9 9 0 1 1 19 6.5a4.9 4.9 0 0 0 2 5.4 8.9 8.9 0 0 1-9 9z"/><path d="M12 6a2 2 0 0 0 2-2 2 2 0 0 0-2-2"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"bar-chart-2":'<path d="M3 3v18h18"/><path d="M5 18V10M10 18V4M15 18v-7"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"circle-dot":'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2 6.3-6.4 2 2-6.3z"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',"file-text":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5 2.2 5 2.2a5 5 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.5 9.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.4V22"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',hand:'<path d="M18 11V5a2 2 0 1 0-4 0v3a2 2 0 1 0-4 0V5a2 2 0 1 0-4 0v8l-2-3a2 2 0 1 0-3 2l4 7a6 6 0 0 0 6 4h2a6 6 0 0 0 6-6v-3a2 2 0 1 0-4 0z"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',landmark:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 11h20z"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',"layout-grid":'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',map:'<path d="M9 3 3 7v14l6-4 6 4 6-4V3l-6 4z"/><path d="M9 3v14M15 7v14"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"message-circle":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',minus:'<path d="M5 12h14"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',"pen-tool":'<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="M18 13 16.5 5.5 2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2 9.6 9.6"/><circle cx="11" cy="11" r="2"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',plus:'<path d="M12 5v14M5 12h14"/>',puzzle:'<path d="M19.4 14.4a1 1 0 0 0 .6-.9V8a1 1 0 0 0-1-1h-5.5a1 1 0 0 1-.9-.6 2 2 0 1 0-2 2 2.5 2.5 0 0 1 0 3 2 2 0 1 0 2 2 1 1 0 0 1 .9-.6h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 .6-.9 2 2 0 1 0-1.2 0z"/>',ruler:'<path d="M5 3l16 16-3 3L2 6zM8 6l3 3M11 9l3 3M14 12l3 3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>',slash:'<line x1="22" y1="2" x2="2" y2="22"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',triangle:'<path d="M3 20h18L12 4z"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',truck:'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',"volume-2":'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',watch:'<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5M8.2 5.5l.8-2.5h6l.8 2.5M15.8 18.5l-.8 2.5H9l-.8-2.5"/>',waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',bot:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M8 15h.01M16 15h.01M12 17h.01"/>'},g=(0,d.keyframes)`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,h=l().div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${s.w4.colors.surfaceRaised};
  border: 1px solid ${s.w4.colors.accentMuted};
  border-radius: ${s.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${s.w4.colors.borderSubtle},
    0 16px 48px rgba(0, 0, 0, 0.55);
  min-width: 210px;
  overflow-y: auto;
  animation: ${g} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  backdrop-filter: blur(12px);

  /* Left connector line */
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 2px;
    background: ${s.w4.colors.accent};
    opacity: 0.4;
  }
`,x=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${s.w4.colors.accent};
  border-bottom: 1px solid ${s.w4.colors.borderSubtle};
  font-family: ${s.w4.typography.fontFamily};
`,f=l().button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?s.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?s.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.sidebarText};
  font-size: ${s.w4.typography.fontSizeBase};
  font-family: ${s.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${s.w4.colors.accentMuted};
    color: ${s.w4.colors.mainText};
  }
`,b=({size:e=14,strokeWidth:o=1.75})=>(0,t.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,t.jsx)("polyline",{points:"14 2 14 8 20 8"})]});function m({iconKey:e}){let o=e?p[e]:void 0;return o?(0,t.jsx)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,dangerouslySetInnerHTML:{__html:o}}):(0,t.jsx)(b,{})}function w({entries:e,activeId:o,onSelect:r}){return(0,t.jsx)(t.Fragment,{children:e.map(e=>e.children?(0,t.jsx)(i().Fragment,{children:(0,t.jsx)(w,{entries:e.children,activeId:o,onSelect:r})},e.id):(0,t.jsxs)(f,{active:o===e.id,onClick:()=>r(e),children:[(0,t.jsx)(m,{iconKey:e.icon}),e.name]},e.id))})}function u({activeId:e}){let{flyout:o,scheduleFlyoutClose:r,cancelFlyoutClose:a}=(0,c.c)();if(!o)return null;let i=o.entry.icon?p[o.entry.icon]:void 0;return(0,t.jsxs)(h,{anchorY:o.anchorY,onMouseEnter:a,onMouseLeave:r,children:[(0,t.jsxs)(x,{children:[i?(0,t.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,dangerouslySetInnerHTML:{__html:i}}):(0,t.jsx)(b,{size:13,strokeWidth:2}),o.entry.name]}),(0,t.jsx)(w,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),r()}})]})}},7993(e,o,r){r.d(o,{I:()=>a,c:()=>i});var t=r(7991);let a=(0,t.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,t.useContext)(a)},132(e,o,r){r.d(o,{PE:()=>em,MJ:()=>D,In:()=>$});var t=r(5723),a=r(7991),i=r.n(a),n=r(6859),l=r.n(n),d=r(6063);let s={ghost:"transparent",accent:"transparent",primary:d.w4.colors.accent,success:"#238636",danger:"#da3633"},c={ghost:d.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:d.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},p={ghost:d.w4.colors.border,accent:d.w4.colors.accent,primary:d.w4.colors.accent,success:"#238636",danger:"#da3633"},g={ghost:d.w4.colors.mainTextMuted,accent:d.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},h={ghost:d.w4.colors.mainText,accent:d.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},x={sm:"28px",md:"30px"},f={sm:"0 10px",md:"0 12px"},b={sm:"12px",md:"12px"};l().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>x[e]};
  padding: ${({size:e})=>f[e]};
  background: ${({variant:e})=>s[e]};
  border: 1px solid ${({variant:e})=>p[e]};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${({variant:e})=>g[e]};
  font-size: ${({size:e})=>b[e]};
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>c[e]};
    color: ${({variant:e})=>h[e]};
    border-color: ${({variant:e})=>"ghost"===e?d.w4.colors.accent:p[e]};
  }

  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;let m={default:d.w4.colors.accent,danger:"#f85149"},w={default:d.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"};l().button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: ${({active:e})=>e?`${d.w4.colors.accent}22`:"transparent"};
  border: 1px solid
    ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.border};
  border-radius: ${({shape:e})=>"circle"===e?"999px":d.w4.borderRadius.sm};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};

  /**
   * Expand the tap area to ≥44×44px on touch devices without changing the
   * visual size of the button. The pseudo-element extends 7px on each side
   * ((44 - 30) / 2 = 7). Pointer-events fall through to the button itself.
   * Only applied on coarse-pointer (touch) devices so desktop hover still
   * works on the visual 30px area.
   */
  @media (pointer: coarse) {
    &::before {
      content: '';
      position: absolute;
      inset: -7px;
    }
  }

  &:hover:not(:disabled) {
    color: ${({tone:e})=>m[e]};
    background: ${({tone:e})=>w[e]};
    border-color: ${({tone:e})=>m[e]};
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,l().div`
  position: relative;
  display: inline-flex;
`,l().div`
  position: absolute;
  top: calc(100% + 6px);
  ${({align:e})=>"right"===e?"right: 0;":"left: 0;"}
  min-width: 180px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  background: ${d.w4.colors.sidebarBg};
  border: 1px solid ${d.w4.colors.sidebarBorder};
  border-radius: ${d.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: none;
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  color: ${d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeSm};
  font-family: ${d.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
    color: ${d.w4.colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: -2px;
  }
`,l().div`
  height: 1px;
  margin: 4px 0;
  background: ${d.w4.colors.sidebarBorder};
`,l().div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
`,l().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
`,l().span`
  width: 1px;
  height: 20px;
  background: ${d.w4.colors.border};
  flex-shrink: 0;
`,l().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,l()("button",{shouldForwardProp:e=>"active"!==e&&"highlight"!==e})`
  padding: 6px 14px;
  height: 28px;
  border-radius: 999px;
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"transparent"};
  border: 1px solid
    ${({active:e,highlight:o})=>e||o?d.w4.colors.accent:"transparent"};
  color: ${({active:e,highlight:o})=>e||o?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: ${d.w4.transitions.fast};

  &:hover:not(:disabled) { color: ${d.w4.colors.mainText}; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${d.w4.focusRing} }
`,r(2727);var u=r(2799);let y={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',"cloud-rain":'<path d="M16 14a5 5 0 1 0-9.8 2H6M8 19v2M12 17v4M16 19v2"/>',snowflake:'<path d="M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1M2 12h20M8 6l4 4 4-4M8 18l4-4 4 4"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"alert-triangle":'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',"check-circle":'<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>',"x-circle":'<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',"rotate-ccw":'<path d="M2 12a10 10 0 1 0 5-8.7L2 7M2 2v5h5"/>',"rotate-cw":'<path d="M22 12a10 10 0 1 1-5-8.7L22 7M22 2v5h-5"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"alert-circle":'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',"alert-octagon":'<path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"/><path d="M12 8v4M12 16h.01"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',columns:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',"eye-off":'<path d="M17.9 17.9A10.8 10.8 0 0 1 12 20c-7 0-11-8-11-8a19.6 19.6 0 0 1 5.1-6M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a19.6 19.6 0 0 1-2.2 3.2M6.6 6.6l10.8 10.8M14.1 14.1a3 3 0 1 1-4.2-4.2"/>',"file-plus":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M12 12v6M9 15h6"/>',gauge:'<path d="M12 14a2 2 0 1 0-2-2M12 2a10 10 0 1 0 10 10M12 14 7.5 16.5"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',"git-fork":'<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/>',"grip-vertical":'<circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',"image-plus":'<path d="M21 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21M19 2v6M22 5h-6"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',loader:'<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',"panel-left":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',"panel-left-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M16 15l-3-3 3-3"/>',"panel-left-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M14 9l3 3-3 3"/>',"panel-right-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M8 9l3 3-3 3"/>',"panel-right-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M10 15l-3-3 3-3"/>',pencil:'<path d="m12 20 9-9-4-4-9 9v4zM15 5l4 4"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M4.9 19.1a10 10 0 0 1 0-14.1M7.8 16.2a6 6 0 0 1 0-8.5M19.1 4.9a10 10 0 0 1 0 14.1M16.2 7.8a6 6 0 0 1 0 8.5"/>',"scatter-chart":'<circle cx="7.5" cy="7.5" r="0.8" fill="currentColor"/><circle cx="18" cy="5" r="0.8" fill="currentColor"/><circle cx="11" cy="11" r="0.8" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.8" fill="currentColor"/><circle cx="17" cy="14" r="0.8" fill="currentColor"/><path d="M3 3v18h18"/>',shield:'<path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"/>',"shield-off":'<path d="M19.7 14a7.7 7.7 0 0 0 .3-2V4l-8-2-3.4.9M4.7 4.7 4 5v7c0 6 8 10 8 10a13 13 0 0 0 5.2-3.5M2 2l20 20"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',"trending-down":'<path d="M22 17l-9.5-9.5-5 5L2 7"/><path d="M16 17h6v-6"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',"user-cog":'<circle cx="10" cy="8" r="4"/><path d="M10.2 14H8a4 4 0 0 0-4 4v2"/><circle cx="18" cy="15" r="3"/><path d="M18 10v1M18 19v1M22 12l-.8.5M14.8 17.5 14 18M22 18l-.8-.5M14.8 12.5 14 12"/>',volume:'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',car:'<path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h12l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2M5 17l1 3h12l1-3M5 17h14"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>',"shopping-bag":'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>',wifi:'<path d="M5 12.6A10 10 0 0 1 19 12.6M1.5 8.9a15 15 0 0 1 21 0M8.5 16.5a5 5 0 0 1 7 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/>',wallet:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18M16 14h2"/>',receipt:'<path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21z"/><path d="M8 8h8M8 12h8M8 16h5"/>',"piggy-bank":'<path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/><path d="M19 9h2v4M14 7V5a2 2 0 0 0-4 0M16 11h.01M5 17v3M14 17v3"/>',banknote:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M5 9h.01M19 15h.01"/>',coins:'<circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/><path d="M9 6v6M7 9h4"/>',"line-chart":'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',"calendar-range":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 15h3M13 15h3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"refresh-ccw":'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',"refresh-cw":'<path d="M21 12a9 9 0 0 0-15-6.7L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15 6.7L21 16"/><path d="M21 21v-5h-5"/>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',split:'<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 3 12 12 3 3"/><path d="M12 12v9"/>',"more-horizontal":'<circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>',"a-large-small":'<path d="M18 14v7M22 14l-4-7-4 7M2 14h7M2 21V7l5-4 5 4v14"/>',apple:'<path d="M12 20.9A9 9 0 1 1 19 6.5a4.9 4.9 0 0 0 2 5.4 8.9 8.9 0 0 1-9 9z"/><path d="M12 6a2 2 0 0 0 2-2 2 2 0 0 0-2-2"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',"circle-dot":'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2 6.3-6.4 2 2-6.3z"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',"file-text":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5 2.2 5 2.2a5 5 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.5 9.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.4V22"/>',hand:'<path d="M18 11V5a2 2 0 1 0-4 0v3a2 2 0 1 0-4 0V5a2 2 0 1 0-4 0v8l-2-3a2 2 0 1 0-3 2l4 7a6 6 0 0 0 6 4h2a6 6 0 0 0 6-6v-3a2 2 0 1 0-4 0z"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/>',landmark:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 11h20z"/>',"layout-grid":'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',map:'<path d="M9 3 3 7v14l6-4 6 4 6-4V3l-6 4z"/><path d="M9 3v14M15 7v14"/>',"message-circle":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',"pen-tool":'<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="M18 13 16.5 5.5 2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2 9.6 9.6"/><circle cx="11" cy="11" r="2"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',puzzle:'<path d="M19.4 14.4a1 1 0 0 0 .6-.9V8a1 1 0 0 0-1-1h-5.5a1 1 0 0 1-.9-.6 2 2 0 1 0-2 2 2.5 2.5 0 0 1 0 3 2 2 0 1 0 2 2 1 1 0 0 1 .9-.6h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 .6-.9 2 2 0 1 0-1.2 0z"/>',ruler:'<path d="M5 3l16 16-3 3L2 6zM8 6l3 3M11 9l3 3M14 12l3 3"/>',slash:'<line x1="22" y1="2" x2="2" y2="22"/>',triangle:'<path d="M3 20h18L12 4z"/>',truck:'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',"volume-2":'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7"/>',watch:'<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5M8.2 5.5l.8-2.5h6l.8 2.5M15.8 18.5l-.8 2.5H9l-.8-2.5"/>',waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',bot:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M8 15h.01M16 15h.01M12 17h.01"/>',"bar-chart-2":'<path d="M3 3v18h18"/><path d="M5 18V10M10 18V4M15 18v-7"/>'};function $({name:e,size:o=18,strokeWidth:r=1.5,...a}){let i=y[e];return(0,t.jsx)("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!a["aria-label"]||void 0,...a,dangerouslySetInnerHTML:{__html:i}})}Object.keys(y),l().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  border: ${({ring:e})=>e?`1px solid ${d.w4.colors.border}`:"none"};
  flex-shrink: 0;
  overflow: hidden;
  user-select: none;
`,l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: ${({fontSize:e})=>e}px;
  font-weight: 700;
  color: ${d.w4.colors.mainBg};
  line-height: 1;
  letter-spacing: 0;
`,l().img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,l().div`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${d.w4.colors.accentMuted};
  border: 1px solid ${d.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 700;
  color: ${d.w4.colors.accent};
  flex-shrink: 0;
  /* Font scales with size: 26px → 12px, 40px → 18px */
  font-size: ${({size:e})=>Math.round(.46*e)}px;
`;let v=(0,u.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;l().div`
  position: relative;
`,l().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px 4px 4px;
  background: none;
  border: 1px solid ${d.w4.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: border-color ${d.w4.transitions.fast}, background ${d.w4.transitions.fast};
  &:hover {
    border-color: ${d.w4.colors.accent};
    background: ${d.w4.colors.sidebarHover};
  }

  /* With DisplayName hidden on mobile the pill becomes an oval — pad
     equally and drop the gap so the wrapper is a true circle. */
  @media (max-width: ${d.w4.breakpoints.md}) {
    padding: 4px;
    gap: 0;
  }
`,l().span`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,l().div`
  position: fixed;
  min-width: 240px;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${v} 0.15s ease;
  backdrop-filter: blur(12px);

  @media (max-width: ${d.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    max-height: calc(100dvh - env(safe-area-inset-top, 0px) - 96px);
    overflow-y: auto;
  }
`,l().div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${d.w4.colors.border};
`,l().div`
  margin-bottom: 10px;
`,l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${d.w4.colors.mainText};
`,l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  margin-top: 2px;
`,l().div`
  padding: 12px 16px 10px;
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
`,l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextFaint};
  margin-bottom: 6px;
`,l().div`
  display: flex;
  gap: 4px;
  padding: 3px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.borderSubtle};
  border-radius: ${d.w4.borderRadius.md};
`,l().button`
  flex: 1;
  padding: 6px 10px;
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: ${({active:e})=>e?600:500};
  cursor: pointer;
  transition: background ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};

  &:hover {
    color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainText};
    background: ${({active:e})=>e?d.w4.colors.accentMuted:d.w4.colors.sidebarHover};
  }
`,l().button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
  transition: background 0.12s, color 0.12s;
  &:hover {
    background: ${d.w4.colors.sidebarHover};
    color: ${({danger:e})=>e?"#e05252":d.w4.colors.mainText};
  }
`,(0,d.PL)("shell:locale").then(e=>{if("en"===e||"pt"===e)try{localStorage.setItem("atlantis:locale",e)}catch{}}).catch(()=>{}),l().div`
  display: flex;
  gap: 4px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 2px;
`,l().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?d.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":d.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":d.w4.colors.mainText};
  }
`,l().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};

  @media (max-width: ${d.w4.breakpoints.md}) {
    gap: ${d.w4.spacing.xs};

    .header-kbd { display: none; }
    .header-hide-md { display: none; }
  }
`,l().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${d.w4.colors.border};
  border-radius: 999px;
  color: ${d.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.accent};
    border-color: ${d.w4.colors.accent};
    background: ${d.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`,l().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  min-width: 180px;
  padding: 0 6px 0 12px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.borderStrong};
  border-radius: 999px;
  color: ${d.w4.colors.mainText};
  cursor: pointer;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  transition: background ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast}, color ${d.w4.transitions.fast}, box-shadow ${d.w4.transitions.fast};
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);

  .label {
    flex: 1;
    text-align: left;
    color: ${d.w4.colors.mainTextMuted};
    font-weight: 500;
    letter-spacing: -0.1px;
  }

  @media (max-width: ${d.w4.breakpoints.md}) {
    min-width: 0;
    padding: 0 12px;
    .label { display: none; }
  }

  .kbd {
    display: inline-flex;
    align-items: center;
    gap: 1px;
    padding: 2px 6px;
    border-radius: 6px;
    background: ${d.w4.colors.sidebarHover};
    border: 1px solid ${d.w4.colors.borderSubtle};
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    color: ${d.w4.colors.mainTextMuted};
    letter-spacing: 0.04em;
    transition: color ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast}, background ${d.w4.transitions.fast};
  }

  &:hover {
    border-color: ${d.w4.colors.accent};
    background: ${d.w4.colors.surfaceRaised};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  }
  &:hover .label { color: ${d.w4.colors.mainText}; }
  &:hover .kbd {
    color: ${d.w4.colors.accent};
    border-color: ${d.w4.colors.accent}55;
    background: ${d.w4.colors.surface};
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`,l().div`
  position: relative;
  display: inline-flex;
`,l().span`
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: #ff6fa9;
  border: 2px solid ${d.w4.colors.mainBg};
  color: #fff;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0;
  pointer-events: none;
`,l().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  background: ${d.w4.colors.accent};
  border: 1px solid ${d.w4.colors.accent};
  border-radius: 999px;
  color: #fff;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast};
  white-space: nowrap;

  &:hover {
    background: ${d.w4.colors.accentHover};
    border-color: ${d.w4.colors.accentHover};
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }
`,l().div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 900;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  ${({forceVisible:e})=>e?"":"@media (hover: hover) and (pointer: fine) { display: none; }"}
`,l().div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 45%;
  height: 60%;
  pointer-events: auto;
  touch-action: none;
`,l().div`
  position: absolute;
  left: ${({left:e})=>e}px;
  top: ${({top:e})=>e}px;
  width: ${120}px;
  height: ${120}px;
  margin-left: -${60}px;
  margin-top: -${60}px;
  border-radius: 50%;
  background: rgba(13, 17, 23, 0.55);
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
  pointer-events: none;
  opacity: ${({active:e})=>e?1:.9};
  transition: opacity ${d.w4.transitions.fast};
`,l().div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${54}px;
  height: ${54}px;
  margin-left: -${27}px;
  margin-top: -${27}px;
  border-radius: 50%;
  background: ${d.w4.colors.accent};
  border: 2px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.45);
  transform: translate(
    ${({dx:e})=>60*e}px,
    ${({dy:e})=>60*e}px
  );
  transition: transform 0.05s linear;
`,l().div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  gap: 14px;
  pointer-events: auto;
  touch-action: manipulation;

  @media (max-width: ${d.w4.breakpoints.md}) {
    right: 20px;
    bottom: 20px;
    gap: 10px;
  }
`,l().button`
  min-width: 72px;
  min-height: 72px;
  padding: 0 18px;
  border-radius: 50%;
  background: ${({accent:e})=>e};
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 800;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  touch-action: manipulation;
  /* transform is hand-tuned tighter than the fast token so the press-scale
   * tracks the finger (joystick physics), box-shadow uses the motion scale. */
  transition: transform 0.08s ease, box-shadow ${d.w4.transitions.fast};

  &:active {
    transform: scale(0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  }
`;let M=(0,u.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;l()("div",{shouldForwardProp:e=>"accentColor"!==e&&"pinned"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  background: ${d.w4.colors.surface};
  border: 1px solid ${({pinned:e})=>e?d.w4.colors.accent:d.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  min-height: 230px;
  transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 200ms,
              box-shadow 200ms;
  animation: ${M} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${d.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${d.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .pin-btn { opacity: 1; }
    &:hover .pin-controls { opacity: 1; }
  }

  @media (hover: none) {
    .pin-btn { opacity: ${({pinned:e})=>e?1:.55}; }
    .pin-controls { opacity: 0.55; }
  }
`,l().div`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${d.w4.colors.border};
  color: ${d.w4.colors.mainText};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
    z-index: 1;
  }

  /* ── Per-id templates ── */

  /* generic fallback: diagonal gradient + uppercase monogram */
  &.viz--generic {
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(135deg, var(--acc) 0%, transparent 70%),
      linear-gradient(135deg, #1a1f38, #0f1220);
  }
  & .viz-mono {
    position: absolute;
    left: 16px;
    bottom: 12px;
    font-family: ${d.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 28px;
    letter-spacing: -1px;
    color: var(--acc);
    opacity: 0.9;
    z-index: 1;
  }

  /* markdown — paragraphs of lines */
  &.viz--markdown {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { display: block; height: 4px; background: #388bfd; border-radius: 2px; opacity: 0.7; }
    & > .h { height: 7px; background: ${d.w4.colors.mainText}; opacity: 0.9; width: 55%; margin-bottom: 4px; }
    & > .l1 { width: 88%; opacity: 0.5; }
    & > .l2 { width: 72%; opacity: 0.4; }
    & > .l3 { width: 90%; opacity: 0.5; }
    & > .l4 { width: 60%; opacity: 0.3; }
  }

  /* school — year ladder */
  &.viz--school {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    align-items: flex-end;
    gap: 6px;
    & > .col { flex: 1; background: linear-gradient(180deg, #f78166, rgba(247, 129, 102, 0.1)); border-radius: 3px 3px 0 0; }
    & > .col:nth-of-type(1) { height: 32%; }
    & > .col:nth-of-type(2) { height: 52%; }
    & > .col:nth-of-type(3) { height: 74%; }
    & > .col:nth-of-type(4) { height: 92%; }
    & > .lb { position: absolute; left: 14px; top: 12px; font-family: ${d.w4.typography.fontFamily}; font-style: italic; font-size: 22px; font-weight: 600; color: #f78166; letter-spacing: -0.4px; }
  }

  /* earth — globe grid */
  &.viz--earth {
    background: linear-gradient(135deg, #0d2e1a, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .g {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 35% 35%, rgba(63, 185, 80, 0.5), transparent 40%),
        radial-gradient(circle at 70% 65%, rgba(63, 185, 80, 0.3), transparent 40%),
        linear-gradient(135deg, #0f3a20, #0a1a10);
      border: 1px solid rgba(63, 185, 80, 0.3);
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 40px rgba(63, 185, 80, 0.15);
    }
    & > .g::before,
    & > .g::after {
      content: '';
      position: absolute;
      left: 0; right: 0;
      border-top: 1px solid rgba(63, 185, 80, 0.22);
    }
    & > .g::before { top: 30%; transform: skewY(-10deg); }
    & > .g::after  { top: 60%; transform: skewY(8deg); }
  }

  /* cosmos — starfield + moon */
  &.viz--cosmos {
    background:
      radial-gradient(2px 2px at 20% 30%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 75% 20%, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
      radial-gradient(1.5px 1.5px at 45% 70%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 90% 60%, rgba(255, 255, 255, 0.8) 50%, transparent 50%),
      radial-gradient(2px 2px at 15% 85%, rgba(188, 140, 255, 0.9) 50%, transparent 50%),
      radial-gradient(1px 1px at 60% 40%, rgba(255, 255, 255, 0.4) 50%, transparent 50%),
      radial-gradient(1px 1px at 30% 15%, rgba(188, 140, 255, 0.7) 50%, transparent 50%),
      radial-gradient(circle at 78% 45%, rgba(188, 140, 255, 0.35), transparent 45%),
      linear-gradient(135deg, #1a1140, #0f1220);
    &::after {
      content: '';
      position: absolute;
      right: 24px;
      top: 24px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #e9d9ff, #b8a0e8 60%, #7a5ec0);
      box-shadow: 0 0 30px rgba(188, 140, 255, 0.4);
    }
  }

  /* techscope — spectrum bars */
  &.viz--techscope {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: flex-end;
    padding: 14px;
    gap: 3px;
    & > span { flex: 1; background: linear-gradient(180deg, #a371f7, rgba(163, 113, 247, 0.2)); border-radius: 1px; }
  }

  /* citypulse — skyline + sun */
  &.viz--citypulse {
    background: linear-gradient(180deg, #2a1a10 0%, #0f1220 100%);
    &::before {
      content: '';
      position: absolute;
      left: 0; right: 0; bottom: 0;
      height: 70%;
      background: #0a0b14;
      clip-path: polygon(0 100%, 0 80%, 6% 80%, 6% 55%, 13% 55%, 13% 85%, 22% 85%, 22% 35%, 34% 35%, 34% 70%, 43% 70%, 43% 20%, 55% 20%, 55% 60%, 66% 60%, 66% 40%, 75% 40%, 75% 75%, 88% 75%, 88% 50%, 100% 50%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      top: 18px; right: 20px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: #d29922;
      box-shadow: 0 0 24px rgba(210, 153, 34, 0.5);
    }
  }

  /* stockpulse — candles */
  &.viz--stockpulse {
    background: linear-gradient(135deg, #0f2818, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    & > .c { flex: 1; position: relative; height: 100%; }
    & > .c::before { content: ''; position: absolute; left: 50%; transform: translateX(-50%); width: 1px; top: 20%; bottom: 15%; background: #3fb950; opacity: 0.5; }
    & > .c::after  { content: ''; position: absolute; left: 0; width: 100%; top: 35%; height: 30%; background: #3fb950; border-radius: 1px; }
    & > .c.r::before { background: #d86a6a; }
    & > .c.r::after  { background: #d86a6a; }
  }

  /* csvexplorer — mini table */
  &.viz--csvexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 14px;
    gap: 1px;
    & > span {
      background: rgba(88, 166, 255, 0.08);
      border-radius: 2px;
      display: flex;
      align-items: center;
      padding-left: 6px;
      font-family: ${d.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: #58a6ff;
    }
    & > span.h { background: rgba(88, 166, 255, 0.2); font-weight: 500; }
  }

  /* chartbuilder — area chart */
  &.viz--chartbuilder {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    &::before {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: linear-gradient(180deg, rgba(210, 153, 34, 0.5), transparent);
      clip-path: polygon(0 100%, 0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: #d29922;
      clip-path: polygon(0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 24%, 90% 12%, 75% 32%, 60% 22%, 45% 52%, 25% 37%, 15% 57%, 0 62%);
    }
  }

  /* pad — notebook */
  &.viz--pad {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { height: 3px; background: rgba(247, 129, 102, 0.45); border-radius: 2px; }
    & > .t { height: 6px; background: #f78166; width: 45%; }
    & > .a { width: 85%; }
    & > .b { width: 65%; }
    & > .c { width: 90%; }
    & > .d { width: 50%; }
  }

  /* regexlab — pattern + highlight */
  &.viz--regexlab {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 14px;
    padding: 14px;
    line-height: 1.7;
    color: ${d.w4.colors.mainTextMuted};
    & .hl { background: rgba(56, 139, 253, 0.35); color: #58a6ff; padding: 1px 3px; border-radius: 2px; }
    & .slash { color: #58a6ff; }
  }

  /* jsonexplorer — tree */
  &.viz--jsonexplorer {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    color: ${d.w4.colors.mainTextMuted};
    line-height: 1.5;
    & .k { color: #3fb950; }
    & .v { color: ${d.w4.colors.mainText}; }
    & .b { color: ${d.w4.colors.mainTextMuted}; opacity: 0.7; }
  }

  /* codediff — two columns */
  &.viz--codediff {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    padding: 14px;
    & > .col { display: flex; flex-direction: column; gap: 3px; }
    & span { height: 4px; border-radius: 2px; }
    & .a { background: rgba(216, 106, 106, 0.4); }
    & .n { background: rgba(255, 255, 255, 0.08); }
    & .g { background: rgba(127, 183, 126, 0.5); }
  }

  /* playground — tubes */
  &.viz--playground {
    background: linear-gradient(135deg, #2a2410, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    & > .tube {
      width: 24px;
      height: 60px;
      border: 1.5px solid #facc15;
      border-radius: 0 0 12px 12px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg, transparent 40%, rgba(250, 204, 21, 0.35) 40%);
    }
    & > .tube::before {
      content: '';
      position: absolute;
      inset: 40% 3px 3px 3px;
      background: #facc15;
      border-radius: 0 0 8px 8px;
      opacity: 0.6;
    }
  }

  /* jwtinspector — token chunks */
  &.viz--jwtinspector {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    justify-content: center;
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 11px;
    & > span { padding: 6px 10px; border-radius: 4px; }
    & > .h { background: rgba(163, 113, 247, 0.2); color: #a371f7; }
    & > .p { background: rgba(127, 183, 126, 0.2); color: #7fb77e; }
    & > .s { background: rgba(216, 106, 106, 0.2); color: #d86a6a; }
    & > .sep { padding: 0; background: transparent; color: ${d.w4.colors.mainTextMuted}; opacity: 0.6; }
  }

  /* colorlab — palette strip */
  &.viz--colorlab {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
  }

  /* cronbuilder — timeline */
  &.viz--cronbuilder {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    & > .row { display: flex; align-items: center; gap: 2px; height: 6px; position: relative; }
    & > .row::before {
      content: attr(data-l);
      position: absolute;
      left: -2px;
      top: -14px;
      font-family: ${d.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: ${d.w4.colors.mainTextMuted};
      letter-spacing: 1px;
      opacity: 0.7;
    }
    & > .row span { flex: 1; height: 100%; background: rgba(255, 255, 255, 0.05); border-radius: 1px; }
    & > .row span.on { background: #3fb950; }
  }

  /* weather — sun + temp */
  &.viz--weather {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    & > .sun {
      position: absolute;
      top: 20px; left: 34px;
      width: 50px; height: 50px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #ffd780, #58a6ff 80%);
      box-shadow: 0 0 40px rgba(88, 166, 255, 0.4);
    }
    & > .temp {
      position: absolute;
      right: 20px; bottom: 14px;
      font-family: ${d.w4.typography.fontFamily};
      font-size: 38px;
      font-weight: 300;
      color: #58a6ff;
      line-height: 1;
      letter-spacing: -1px;
    }
    & > .temp small { font-size: 16px; vertical-align: top; margin-left: 2px; font-weight: 400; }
  }

  /* apiexplorer — request/response */
  &.viz--apiexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 14px;
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & .get { color: #3fb950; }
    & .url { color: ${d.w4.colors.mainText}; }
    & .status { color: #58a6ff; }
    & .echo { color: ${d.w4.colors.mainTextMuted}; opacity: 0.75; }
  }

  /* movies — poster marquee. 4×2 ordered cool→warm for a diagonal tonal
     sweep; extra gap + padding lets each poster breathe instead of reading
     as a packed mosaic. */
  &.viz--movies {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 16px;
    & > span { border-radius: 4px; }
  }

  /* promptlab — chat bubbles */
  &.viz--promptlab {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    & > .bubble {
      background: rgba(163, 113, 247, 0.12);
      border: 1px solid rgba(163, 113, 247, 0.3);
      border-radius: 6px;
      padding: 6px 10px;
      font-size: 10.5px;
      color: ${d.w4.colors.mainText};
      align-self: flex-start;
      max-width: 80%;
      line-height: 1.35;
    }
    & > .bubble.r {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.14);
      color: ${d.w4.colors.mainTextMuted};
      align-self: flex-end;
      font-family: ${d.w4.typography.fontFamilyMono};
    }
  }

  /* ask — floating conversation with sparkle + response ripples */
  &.viz--ask {
    background:
      radial-gradient(circle at 20% 20%, rgba(139, 123, 255, 0.35), transparent 60%),
      radial-gradient(circle at 80% 85%, rgba(99, 102, 241, 0.25), transparent 55%),
      linear-gradient(135deg, #1a1635 0%, #0e1022 100%);
    padding: 12px;

    & > .ask-user {
      position: absolute;
      top: 14px;
      right: 14px;
      background: rgba(139, 123, 255, 0.18);
      border: 1px solid rgba(139, 123, 255, 0.45);
      border-radius: 10px 10px 2px 10px;
      padding: 5px 9px;
      font-size: 9.5px;
      color: ${d.w4.colors.mainText};
      font-family: ${d.w4.typography.fontFamilyMono};
      letter-spacing: 0.02em;
      max-width: 60%;
    }

    & > .ask-spark {
      position: absolute;
      left: 14px;
      top: 48px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: linear-gradient(135deg, #a371f7, #58a6ff);
      box-shadow: 0 0 12px rgba(139, 123, 255, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 11px;
      line-height: 1;
    }
    & > .ask-spark::before { content: '✦'; }

    & > .ask-reply {
      position: absolute;
      left: 40px;
      right: 18px;
      top: 48px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    & > .ask-reply > span {
      height: 5px;
      border-radius: 2px;
      background: rgba(230, 237, 243, 0.22);
    }
    & > .ask-reply > span.h {
      width: 60%;
      background: rgba(139, 123, 255, 0.55);
      height: 6px;
    }
    & > .ask-reply > span.b1 { width: 85%; }
    & > .ask-reply > span.b2 { width: 72%; }
    & > .ask-reply > span.b3 { width: 50%; }
  }

  /* devtools — IDE-style panel grid showing the 11 tools */
  &.viz--devtools {
    background:
      linear-gradient(180deg, #0d1117 0%, #05070b 100%);
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0 1px, transparent 1px 3px);
      pointer-events: none;
      z-index: 1;
    }

    & > span {
      position: relative;
      z-index: 2;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${d.w4.typography.fontFamilyMono};
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: rgba(255, 255, 255, 0.92);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    /* mark the "focused" pane — the active tool */
    & > span.active {
      outline: 1px solid rgba(255, 255, 255, 0.3);
      outline-offset: 1px;
    }
  }

  /* imagegen — generated frame */
  &.viz--imagegen {
    background: conic-gradient(from 40deg at 50% 50%, #f78166 0 60deg, #a371f7 60deg 180deg, #58a6ff 180deg 280deg, #f78166 280deg 360deg);
    &::after {
      content: 'generate';
      position: absolute;
      left: 0; right: 0; bottom: 14px;
      text-align: center;
      font-family: ${d.w4.typography.fontFamilyMono};
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.9);
      z-index: 2;
    }
    & > .frame {
      position: absolute;
      inset: 14px;
      background: rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
    }
  }

  /* daily — bullseye */
  &.viz--daily {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .ring { position: absolute; border-radius: 50%; border: 1.5px solid #34d399; }
    & > .ring.r1 { width: 100px; height: 100px; opacity: 0.25; }
    & > .ring.r2 { width: 65px;  height: 65px;  opacity: 0.5; }
    & > .ring.r3 { width: 30px;  height: 30px;  opacity: 1; }
    & > .dot {
      width: 8px; height: 8px;
      background: #34d399;
      border-radius: 50%;
      box-shadow: 0 0 18px #34d399;
      position: relative;
      z-index: 2;
    }
  }

  /* forma — fasting + diet: a conic-gradient progress ring with mono caption */
  &.viz--forma {
    background:
      radial-gradient(circle at 30% 25%, rgba(127, 183, 126, 0.20), transparent 55%),
      radial-gradient(circle at 75% 80%, rgba(232, 154, 92, 0.18), transparent 60%),
      linear-gradient(135deg, #14241c 0%, #0f1612 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 0;

    & > .arc {
      position: relative;
      width: 64px; height: 64px;
      border-radius: 50%;
      background: conic-gradient(#7fb77e 0deg 195deg, rgba(255,255,255,0.06) 195deg 360deg);
      display: grid; place-items: center;
      flex-shrink: 0;
    }
    & > .arc::after {
      content: '';
      width: 48px; height: 48px;
      border-radius: 50%;
      background: #14241c;
      grid-area: 1 / 1;
    }
    & > .arc > .h {
      grid-area: 1 / 1;
      z-index: 1;
      font-family: ${d.w4.typography.fontFamilyMono};
      font-size: 14px;
      font-weight: 600;
      color: #e6edf3;
      letter-spacing: -0.02em;
      font-variant-numeric: tabular-nums;
    }

    & > .lbl {
      font-family: ${d.w4.typography.fontFamilyMono};
      font-size: 9.5px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(127, 183, 126, 0.85);
      flex-shrink: 0;
    }
    & > .pip {
      position: absolute;
      width: 4px; height: 4px;
      border-radius: 50%;
      background: rgba(232, 154, 92, 0.9);
      box-shadow: 0 0 6px rgba(232, 154, 92, 0.6);
    }
    & > .pip.p1 { top: 16px; right: 22px; }
    & > .pip.p2 { top: 38px; right: 14px; opacity: 0.7; }
    & > .pip.p3 { top: 62px; right: 22px; opacity: 0.5; }
  }

  /* finance — vertical bar chart, last bar accent */
  &.viz--finance {
    background:
      radial-gradient(circle at 80% 20%, rgba(127, 183, 126, 0.18), transparent 60%),
      linear-gradient(180deg, #0f1f17 0%, #0a130d 100%);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 14px 18px 18px;
    gap: 6px;

    & > .bar {
      flex: 1;
      max-width: 14px;
      background: linear-gradient(180deg, rgba(127,183,126,0.7), rgba(127,183,126,0.3));
      border-radius: 2px 2px 0 0;
      position: relative;
    }
    & > .bar.accent {
      background: linear-gradient(180deg, #7fb77e, #4f8e4e);
      box-shadow: 0 -4px 14px rgba(127, 183, 126, 0.45);
    }

    &::before {
      content: '€';
      position: absolute;
      top: 12px; left: 14px;
      font-family: ${d.w4.typography.fontFamilyMono};
      font-size: 18px;
      font-weight: 600;
      color: rgba(127, 183, 126, 0.7);
    }
    &::after {
      content: '+18%';
      position: absolute;
      top: 12px; right: 14px;
      font-family: ${d.w4.typography.fontFamilyMono};
      font-size: 10px;
      letter-spacing: 0.04em;
      color: #7fb77e;
    }
  }

  /* youtube — three film-strip thumbnails with play glyphs */
  &.viz--youtube {
    background:
      radial-gradient(circle at 50% 30%, rgba(255, 0, 0, 0.18), transparent 55%),
      linear-gradient(135deg, #1a0a0a 0%, #0a0608 100%);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    padding: 14px;

    & > .tile {
      position: relative;
      border-radius: 4px;
      background: linear-gradient(135deg, #2a1414, #160808);
      border: 1px solid rgba(255, 50, 50, 0.18);
      display: grid; place-items: center;
    }
    & > .tile.t1 { background: linear-gradient(135deg, #3a1a1a, #1a0a0a); }
    & > .tile.t2 { background: linear-gradient(135deg, #4a2020, #1c0c0c); }
    & > .tile.t3 { background: linear-gradient(135deg, #2a1010, #140606); }

    & > .tile::after {
      content: '';
      width: 0; height: 0;
      border-left: 9px solid rgba(255,255,255,0.85);
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      margin-left: 2px;
      filter: drop-shadow(0 0 6px rgba(255, 0, 0, 0.5));
    }

    &::before {
      content: '';
      position: absolute;
      left: 14px; right: 14px; top: 50%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,0,0,0.4), transparent);
      pointer-events: none;
    }
  }

  /* music — equalizer bars + warm gradient */
  &.viz--music {
    background:
      radial-gradient(circle at 70% 70%, rgba(232, 154, 92, 0.25), transparent 55%),
      linear-gradient(135deg, #2a1810 0%, #14080a 100%);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 4px;
    padding: 18px 22px;

    & > .eq {
      width: 5px;
      border-radius: 3px;
      background: linear-gradient(180deg, #f0a868, #8a4a22);
      box-shadow: 0 0 6px rgba(232, 154, 92, 0.4);
    }
    & > .eq.b1 { height: 38%; }
    & > .eq.b2 { height: 72%; }
    & > .eq.b3 { height: 48%; }
    & > .eq.b4 { height: 88%; }
    & > .eq.b5 { height: 60%; }
    & > .eq.b6 { height: 32%; }
    & > .eq.b7 { height: 76%; }
    & > .eq.b8 { height: 50%; }
    & > .eq.b9 { height: 84%; }
    & > .eq.b10 { height: 42%; }

    &::before {
      content: '';
      position: absolute;
      top: 14px; right: 14px;
      width: 22px; height: 22px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 50% 50%, #1a0a0a 0 5px, transparent 5px),
        repeating-radial-gradient(circle at 50% 50%, rgba(232,154,92,0.4) 0 1px, transparent 1px 3px);
      border: 1px solid rgba(232, 154, 92, 0.5);
    }
    &::after {
      content: '♪';
      position: absolute;
      bottom: 10px; left: 14px;
      font-size: 14px;
      color: rgba(232, 154, 92, 0.75);
    }
  }

  /* games — square collage */
  &.viz--games {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    padding: 8px;
    & > span {
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${d.w4.typography.fontFamily};
      font-weight: 800;
      font-size: 14px;
      letter-spacing: -1px;
      color: ${d.w4.colors.mainText};
    }
  }
`,l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .lock {
    margin-left: auto;
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 9px;
    color: ${d.w4.colors.mainTextMuted};
    letter-spacing: 1.4px;
    text-transform: uppercase;
    border: 1px solid ${d.w4.colors.border};
    border-radius: 3px;
    padding: 1px 6px;
    flex-shrink: 0;
  }
`,l().div`
  padding: 6px 14px 16px;
`,l().h3`
  margin: 0 0 6px;
  font-family: ${d.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${d.w4.colors.mainText};

  .hash {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${d.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,l().p`
  margin: 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,l().div`
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid ${d.w4.colors.borderSubtle};
  font-size: 12px;
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.4;
`,l().button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: ${({pinned:e})=>e?d.w4.colors.accent:d.w4.colors.mainText};
  opacity: ${({pinned:e})=>+!!e};
  cursor: pointer;
  transition: opacity ${d.w4.transitions.fast}, color ${d.w4.transitions.fast}, border-color ${d.w4.transitions.fast};
  z-index: 3;
  padding: 0;

  &:hover {
    color: ${d.w4.colors.accent};
    border-color: ${d.w4.colors.accent};
  }
`,l().div`
  position: absolute;
  top: 8px;
  right: 44px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${d.w4.transitions.fast};
  z-index: 3;
`,l().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1.5px solid
    ${({variant:e})=>"default"===e?d.w4.colors.borderStrong:d.w4.colors.accent};
  background: ${({variant:e})=>"filled"===e?d.w4.colors.accentMuted:"transparent"};
  color: ${({variant:e})=>"default"===e?d.w4.colors.mainTextMuted:d.w4.colors.accent};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 500;
  white-space: nowrap;
  cursor: ${({clickable:e})=>e?"pointer":"default"};
  transition: ${d.w4.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${({variant:e})=>"default"===e?d.w4.colors.mainTextFaint:d.w4.colors.accentHover};
    color: ${({variant:e})=>"default"===e?d.w4.colors.mainText:d.w4.colors.accentHover};
  }

  &:focus-visible {
    ${d.w4.focusRing}
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,l().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
`;let k={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:d.w4.colors.accentMuted},z={neutral:d.w4.colors.mainTextMuted,live:d.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:d.w4.colors.accent};l().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  font-weight: ${({tone:e})=>"film"===e||"tv"===e?600:500};
  letter-spacing: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"1.2px":"0.6px"};
  text-transform: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"uppercase":"none"};
  padding: ${({tone:e})=>"film"===e||"tv"===e?"3px 8px":"2px 7px"};
  border-radius: ${({tone:e})=>"film"===e||"tv"===e?d.w4.borderRadius.sm:"3px"};
  background: ${({tone:e})=>k[e]};
  color: ${({tone:e})=>z[e]};
`,l().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`,l().kbd`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${d.w4.colors.border};
  border-radius: 3px;
  color: ${d.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`,l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,l().label`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 9px 14px;
  transition: border-color ${d.w4.transitions.fast};

  &:focus-within {
    border-color: ${d.w4.colors.accent};
  }
`,l().input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeMd};
  color: ${d.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${d.w4.colors.mainTextFaint};
  }
`,l().span`
  display: inline-flex;
  align-items: center;
  color: ${d.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,l().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  /* Clip any inner row that's wider than the column instead of letting it
   * push the panel past the grid track. PanelGrid uses minmax(0, 1fr) so
   * the column width is authoritative — we just need to honour it here. */
  min-width: 0;
  overflow: hidden;
  padding: 18px 20px 20px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.borderSubtle};
  border-radius: ${d.w4.borderRadius.lg};
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  transition: border-color ${d.w4.transitions.fast},
    background ${d.w4.transitions.fast};

  &:hover {
    border-color: ${d.w4.colors.borderStrong};
  }

  ${({accentColor:e})=>e&&`&::before {
      content: '';
      position: absolute;
      top: 14px; bottom: 14px; left: 0;
      width: 2px;
      background: ${e};
      border-radius: 0 2px 2px 0;
      opacity: 0.7;
    }`}
`,l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${d.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,l().div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  line-height: 1.45;
`,l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.danger};
`,l().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px;
  background: ${d.w4.colors.surface};
  border: 1px solid
    ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.borderSubtle};
  border-radius: ${d.w4.borderRadius.lg};
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  box-shadow: ${({active:e})=>e?`inset 0 0 0 1px ${d.w4.colors.accent}`:"none"};
  transition: border-color ${d.w4.transitions.fast};

  &:hover {
    border-color: ${({active:e})=>e?d.w4.colors.accentHover:d.w4.colors.borderStrong};
  }
`,l().div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
`,l().div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: ${({bg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fff;
  flex-shrink: 0;
`,l().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,l().div`
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${d.w4.colors.mainText};
  margin-bottom: 4px;
`,l().div`
  font-size: 11.5px;
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.35;
  margin-bottom: 8px;
`,l().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${d.w4.colors.accentMuted};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextMuted};
`,l().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 1;
  min-height: 0;
`,l().button`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.borderSubtle};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;
  gap: 6px;
  font-family: inherit;
  color: ${d.w4.colors.mainText};
  cursor: ${e=>e.onClick?"pointer":"default"};
  transition: border-color ${d.w4.transitions.fast},
    background ${d.w4.transitions.fast};

  &:hover {
    border-color: ${d.w4.colors.borderStrong};
    background: ${d.w4.colors.surfaceHover};
  }

  &:focus-visible {
    ${d.w4.focusRing}
  }
`,l().div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: ${({fg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`,l().div`
  font-size: 11px;
  color: ${d.w4.colors.mainText};
`,l().div`
  margin-top: 14px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({color:e})=>e};
  letter-spacing: 0.5px;
`,l().div`
  position: relative;
  display: inline-block;
`,l().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px 6px 8px;
  background: ${({open:e})=>e?d.w4.colors.surfaceHover:"transparent"};
  border: 1px solid
    ${({open:e})=>e?d.w4.colors.borderStrong:d.w4.colors.border};
  border-radius: 999px;
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background ${d.w4.transitions.fast},
    border-color ${d.w4.transitions.fast},
    color ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.mainText};
    border-color: ${d.w4.colors.borderStrong};
  }
  &:focus-visible { ${d.w4.focusRing} }
`,l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  background: ${d.w4.colors.accentMuted};
  color: ${d.w4.colors.accent};
  padding: 2px 7px;
  border-radius: 999px;
`;let T=(0,u.keyframes)`
  from { opacity: 0; transform: translate(-50%, -6px); }
  to   { opacity: 1; transform: translate(-50%,  0); }
`;l().div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  max-width: calc(100vw - 24px);
  padding: 10px;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.borderStrong};
  border-radius: 14px;
  box-shadow: ${d.w4.elevation.lg};
  z-index: ${d.w4.zIndex.dropdown};
  animation: ${T} 0.18s ease both;

  @media (max-width: ${d.w4.breakpoints.md}) {
    position: fixed;
    top: calc(48px + env(safe-area-inset-top, 0px) + 6px);
    left: 12px;
    right: 12px;
    width: auto;
    max-width: none;
    transform: none;
    animation: none;
    max-height: calc(100dvh - 48px - env(safe-area-inset-top, 0px) - 24px);
    overflow-y: auto;
  }
`,l()("button",{shouldForwardProp:e=>"accent"!==e&&"expanded"!==e})`
  width: 100%;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  background: ${({expanded:e})=>e?d.w4.colors.surfaceHover:"transparent"};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  text-align: left;
  transition: background ${d.w4.transitions.fast};

  &:hover { background: ${d.w4.colors.surfaceHover}; }
  &:focus-visible { ${d.w4.focusRing} }
`,l()("span",{shouldForwardProp:e=>"accent"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({accent:e})=>e}26;
  color: ${({accent:e})=>e};
  border: 1px solid ${({accent:e})=>e}40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,l().span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,l().span`
  font-size: 13.5px;
  color: ${d.w4.colors.mainText};
  font-weight: 500;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,l()("span",{shouldForwardProp:e=>"accent"!==e})`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  min-width: 24px;
  height: 22px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accent:e})=>e}30;
  color: ${({accent:e})=>e};
  border-radius: 999px;
`,l().div`
  margin: 2px 0 6px 48px;
  padding: 4px 0;
  border-left: 1px solid ${d.w4.colors.borderSubtle};
  display: flex;
  flex-direction: column;
`,l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px 7px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 12.5px;
  cursor: pointer;
  text-align: left;
  transition: background ${d.w4.transitions.fast},
    color ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.mainText};
    background: ${d.w4.colors.surfaceHover};
  }
  &:focus-visible { ${d.w4.focusRing} }
`,l().span`
  font-size: 14px;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: ${({accent:e})=>e?`${e}22`:"transparent"};
`,l().span`
  margin-left: auto;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${d.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
`;let j=(0,u.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;l()("div",{shouldForwardProp:e=>"accentColor"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  min-height: 230px;
  transition:
    transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 200ms,
    box-shadow 200ms;
  animation: ${j} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover (mirrors AppCard). */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${d.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${d.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .gamecard-emoji { transform: translateY(-2px) scale(1.05); }
  }
`,l()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${d.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(120% 100% at 50% 100%, var(--acc) 0%, transparent 60%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
  background-color: ${d.w4.colors.codeBg};

  /* Subtle vignette + tile pattern, both fade in on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
  }

  /* ── V3 pattern-tile variants ──────────────────────────────────────────
   * Ported from docs/design/atlantis/project/Atlantis Game Card Explorations.html
   * Raw hex values are intentional — the viz is artwork, mirroring AppCard's
   * sanctioned exception to the no-hardcoded-colors rule.
   */

  /* familyquiz — scattered brand/pink dots, "Q & A" label */
  &.viz--familyquiz {
    background:
      radial-gradient(circle at 20% 30%, rgba(139, 123, 255, 0.4), transparent 15%),
      radial-gradient(circle at 55% 60%, rgba(139, 123, 255, 0.3), transparent 12%),
      radial-gradient(circle at 80% 25%, rgba(255, 111, 169, 0.35), transparent 12%),
      radial-gradient(circle at 35% 75%, rgba(255, 111, 169, 0.25), transparent 14%),
      radial-gradient(circle at 90% 80%, rgba(139, 123, 255, 0.2), transparent 12%),
      #14172a;
  }

  /* tictactoe — grid lines, "3×3" */
  &.viz--tictactoe {
    background:
      repeating-linear-gradient(90deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      repeating-linear-gradient(0deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      #14172a;
  }

  /* soundhunter — vertical waveform stripes, "waveform" */
  &.viz--soundhunter {
    background:
      repeating-linear-gradient(90deg, rgba(127, 183, 126, 0.25) 0 2px, transparent 2px 7px),
      linear-gradient(180deg, #14302a 0%, #0f1220 100%);
  }

  /* adventure — dusk with paper texture */
  &.viz--adventure {
    background:
      radial-gradient(60% 50% at 50% 100%, rgba(232, 154, 92, 0.35), transparent 60%),
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0 2px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* pixelboard — rainbow conic masked by a center fade, "palette" */
  &.viz--pixelboard {
    background:
      conic-gradient(
        from 0deg at 50% 50%,
        #d86a6a 0 60deg,
        #e89a5c 60deg 120deg,
        #c4b24a 120deg 180deg,
        #7fb77e 180deg 240deg,
        #6aa8d8 240deg 300deg,
        #8b7bff 300deg 360deg
      );
    opacity: 0.3;
  }
  &.viz--pixelboard::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 30%, #14172a 70%);
    pointer-events: none;
    z-index: 1;
  }

  /* memory — flipped-card grid, cyan tones */
  &.viz--memory {
    background:
      repeating-linear-gradient(0deg, transparent 0 22px, rgba(6, 182, 212, 0.14) 22px 24px),
      repeating-linear-gradient(90deg, transparent 0 34px, rgba(6, 182, 212, 0.14) 34px 36px),
      linear-gradient(180deg, #0d1f28, #0f1220);
  }

  /* stopgame — warning stripes with stop-sign radial */
  &.viz--stopgame {
    background:
      radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.35), transparent 55%),
      repeating-linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0 8px, transparent 8px 20px),
      linear-gradient(180deg, #241506, #0f1220);
  }

  /* tapit — concentric target rings, coral tint */
  &.viz--tapit {
    background:
      radial-gradient(circle at 50% 50%, rgba(249, 117, 131, 0.55) 0 8%, transparent 8.5% 22%, rgba(249, 117, 131, 0.35) 22.5% 28%, transparent 28.5% 44%, rgba(249, 117, 131, 0.22) 44.5% 52%, transparent 53%),
      linear-gradient(180deg, #2a1420, #0f1220);
  }

  /* bombbrawl — shockwave rings on dark red */
  &.viz--bombbrawl {
    background:
      radial-gradient(circle at 50% 55%, rgba(255, 68, 68, 0.45) 0 12%, transparent 13% 25%, rgba(255, 68, 68, 0.25) 26% 38%, transparent 39% 55%, rgba(255, 68, 68, 0.12) 56% 70%, transparent 71%),
      linear-gradient(180deg, #2a0a0f, #0f0a12);
  }

  /* jumpparty — dotted-trail bounce, lime green */
  &.viz--jumpparty {
    background:
      radial-gradient(circle at 15% 80%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      radial-gradient(circle at 30% 60%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 50% 40%, rgba(63, 185, 80, 0.4) 0 3%, transparent 4%),
      radial-gradient(circle at 70% 55%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 85% 75%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      linear-gradient(180deg, #0e2416, #0f1220);
  }

  /* lebem — pastel pages, coral glow (read-to-play) */
  &.viz--lebem {
    background:
      repeating-linear-gradient(90deg, transparent 0 40px, rgba(249, 117, 131, 0.10) 40px 41px),
      radial-gradient(ellipse at 50% 100%, rgba(249, 117, 131, 0.3), transparent 65%),
      linear-gradient(180deg, #24121a, #0f1220);
  }

  /* drawguess — scribble strokes, lilac */
  &.viz--drawguess {
    background:
      repeating-linear-gradient(20deg, rgba(210, 168, 255, 0.16) 0 1.5px, transparent 2px 9px),
      repeating-linear-gradient(-30deg, rgba(210, 168, 255, 0.12) 0 1.5px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* spotit — scattered dots on violet */
  &.viz--spotit {
    background:
      radial-gradient(circle at 25% 35%, rgba(139, 92, 246, 0.35) 0 4%, transparent 5%),
      radial-gradient(circle at 55% 70%, rgba(139, 92, 246, 0.45) 0 5%, transparent 6%),
      radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.30) 0 3%, transparent 4%),
      radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.25) 0 3%, transparent 4%),
      radial-gradient(circle at 75% 55%, rgba(139, 92, 246, 0.18) 0 2%, transparent 3%),
      linear-gradient(180deg, #1c1530, #0f1220);
  }
`,l().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextMuted};
  z-index: 2;
`,l()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${d.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
  background: ${d.w4.colors.codeBg};

  /* ── bombbrawl — explosive red, heavy condensed logotype ──
   * padding-top reserves room for the player-count + online badges so
   * "BOMB" never sits under them (TopLeft / TopRight are absolutely
   * positioned at top:10px). */
  &.hero--bombbrawl {
    background: linear-gradient(135deg, #2a0a0f, #0f0a12);
    justify-content: flex-start;
    padding: 44px 20px 16px;
  }
  &.hero--bombbrawl .hero-mark {
    font-family: ${d.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 48px;
    letter-spacing: -3px;
    line-height: 0.88;
    color: #ff4444;
    text-shadow: 0 0 40px rgba(255, 68, 68, 0.45), 0 0 80px rgba(255, 68, 68, 0.18);
    user-select: none;
  }
  &.hero--bombbrawl .hero-mark em {
    font-style: normal;
    color: #ffb347;
    display: block;
    font-size: 36px;
    letter-spacing: -2px;
    opacity: 0.9;
  }

  /* ── jumpparty — lime burst, bouncy stacked words ── */
  &.hero--jumpparty {
    background: linear-gradient(135deg, #0e2416, #0f1220);
    flex-direction: column;
    gap: 0;
    padding: 44px 16px 12px;
  }
  &.hero--jumpparty .hero-mark {
    font-family: ${d.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 54px;
    letter-spacing: -3px;
    line-height: 0.9;
    color: #3fb950;
    text-shadow: 0 0 36px rgba(63, 185, 80, 0.4);
    user-select: none;
  }
  &.hero--jumpparty .hero-mark em {
    font-style: normal;
    font-size: 24px;
    letter-spacing: 4px;
    color: rgba(63, 185, 80, 0.55);
    display: block;
    text-transform: uppercase;
  }

  /* ── animalarena — trophy gold, serif italic clash ── */
  &.hero--animalarena {
    background: linear-gradient(135deg, #1c1a0e, #0f0f12);
    flex-direction: column;
    align-items: flex-start;
    padding: 44px 20px 18px;
  }
  &.hero--animalarena .hero-mark {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-weight: 600;
    font-size: 40px;
    letter-spacing: -2px;
    line-height: 0.92;
    background: linear-gradient(120deg, #f59e0b, #ef4444 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    user-select: none;
  }
  &.hero--animalarena .hero-mark em {
    font-style: normal;
    display: block;
    font-size: 14px;
    letter-spacing: 3px;
    -webkit-text-fill-color: rgba(245, 158, 11, 0.45);
    text-transform: uppercase;
    margin-top: 6px;
  }
`,l().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${d.w4.colors.mainTextMuted};
  z-index: 2;

  /* bombbrawl's "BOMB / BRAWL" logotype is left-aligned and reaches the
   * bottom of the hero zone — anchor the caption bottom-right instead so
   * it clears the typography. */
  .hero--bombbrawl & {
    left: auto;
    right: 14px;
    color: rgba(255, 179, 71, 0.55);
  }

  /* animalarena's "SUMO / ZOO" stack is also left-aligned and its "ZOO"
   * block reaches the bottom of the hero zone — same bottom-right
   * anchoring clears the overlap. */
  .hero--animalarena & {
    left: auto;
    right: 14px;
    color: rgba(245, 158, 11, 0.5);
  }
`,l().span`
  font-size: 56px;
  line-height: 1;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,l()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accentColor:e})=>`${e}1f`};
  border: 1px solid ${({accentColor:e})=>`${e}55`};
  color: ${({accentColor:e})=>e};
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,l().div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
`,l().div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`,l()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,l().div`
  padding: 6px 14px 16px;
`,l().h3`
  margin: 0 0 6px;
  font-family: ${d.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${d.w4.colors.mainText};

  .hash {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${d.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,l().p`
  margin: 0;
  color: ${d.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,r(5406),l().nav`padding: ${d.w4.spacing.sm} 0;`,l().div`
  border-bottom: 1px solid ${d.w4.colors.border}60;
  margin-bottom: 2px;
`,l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${d.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${d.w4.colors.sidebarTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${d.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${d.w4.colors.sidebarText}; }
`,l().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,l().span`
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,l().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,l().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,l().div`overflow: hidden;`,l().div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,l().button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${d.w4.spacing.md};
  background: ${({active:e})=>e?d.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?d.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?d.w4.colors.sidebarActive:d.w4.colors.sidebarText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${d.w4.colors.sidebarHover}; }
`,l().button`
  opacity: ${({active:e})=>+!!e};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":d.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;let F="#7fb77e",S=(0,u.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;l().div`
  position: relative;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: 28px ${d.w4.spacing.lg} ${d.w4.spacing.lg};
  margin: ${d.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  min-height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${S} 0.25s ease both;
  transition:
    border-color ${d.w4.transitions.base},
    transform ${d.w4.transitions.base},
    box-shadow ${d.w4.transitions.base};

  /* Signature left accent bar — full-height, inset like a ribbon */
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0;
    width: 2px;
    border-radius: 2px;
    background: ${F};
  }

  /* Uppercase mono eyebrow tag — reads "◉ DIAGRAM" */
  &::after {
    content: '◉ DIAGRAM';
    position: absolute;
    top: 10px;
    right: 14px;
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    color: ${F};
    opacity: 0.75;
    pointer-events: none;
  }

  &:hover {
    border-color: ${d.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: ${d.w4.elevation.sm};
  }

  svg { max-width: 100%; height: auto; }
  svg text { font-variant-numeric: tabular-nums; }
`,l().div`
  height: 36px;
  width: min(60%, 240px);
  margin: 0 auto;
  border-radius: ${d.w4.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${d.w4.colors.border} 0%,
    ${d.w4.colors.borderStrong} 50%,
    ${d.w4.colors.border} 100%
  );
  background-size: 200% 100%;
  animation: ${(0,u.keyframes)`
    from { background-position: 200% 0; }
    to   { background-position: -200% 0; }
  `} 1.6s ease-in-out infinite;
  opacity: 0.45;
`,l().pre`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.codeBorder};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.md};
  margin: ${d.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${d.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,l().div`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.codeBorder};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.lg};
  margin: ${d.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  margin-bottom: ${d.w4.spacing.md};
  text-align: center;
`,l().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${d.w4.spacing.sm} ${d.w4.spacing.md};
  margin-top: ${d.w4.spacing.md};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
`,l().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,l().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,l().pre`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.codeBorder};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.md};
  margin: ${d.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${d.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,l().div`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.codeBorder};
  border-radius: ${d.w4.borderRadius.md};
  padding: ${d.w4.spacing.lg};
  margin: ${d.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${d.w4.spacing.md};
`,l().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,l().div`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,l().div`
  display: flex;
  gap: ${d.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,l().button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${d.w4.colors.accent};
    color: ${d.w4.colors.accent};
  }
`,l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
  text-align: center;
`,l().div`
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  text-align: center;
`;let H=(0,u.keyframes)`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`;l().div`
  background: ${d.w4.colors.codeBg};
  border: 1px solid ${d.w4.colors.codeBorder};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  margin: ${d.w4.spacing.lg} 0;
`,l().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${d.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${d.w4.spacing.sm};

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,l().div`
  display: flex;
  flex-direction: column;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${d.w4.colors.accent}40;
    box-shadow: 0 0 8px ${d.w4.colors.accent}15;
  }
`;let R=l().button`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  padding: 14px ${d.w4.spacing.md};
  min-height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${d.w4.typography.fontFamily};
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    animation: ${H} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;l()(R)`
  border-bottom: 1px solid ${d.w4.colors.border}80;
`,l()(R)``,l().span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({accentColor:e})=>e}18;
  color: ${({accentColor:e})=>e};
  flex-shrink: 0;
  transition: background 0.15s, transform 0.15s;

  button:active > & {
    background: ${({accentColor:e})=>e}30;
    transform: scale(0.9);
  }
`,l().span`
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${d.w4.colors.accent};
`,l().span`
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
`;var B=r(1426);l().div`
  margin: ${d.w4.spacing.lg} 0;
  border-radius: ${d.w4.borderRadius.md};
  border: 1px solid ${d.w4.colors.codeBorder};
  overflow: hidden;
`,l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${d.w4.colors.codeBorder};
`,l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${d.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,l().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":d.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${d.w4.colors.sidebarText}; border-color: ${d.w4.colors.sidebarText}; }
`,B.A,B.A['pre[class*="language-"]'],d.w4.colors.codeBg,B.A['code[class*="language-"]'],l().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${d.w4.borderRadius.md} ${d.w4.borderRadius.md} 0;
  padding: ${d.w4.spacing.md} ${d.w4.spacing.lg};
  margin: ${d.w4.spacing.lg} 0;
`,l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${d.w4.typography.fontFamily};
  margin-bottom: ${d.w4.spacing.sm};
`,l().div`
  color: ${d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`,l().nav`
  width: 220px;
  min-width: 220px;
  padding: ${d.w4.spacing.xxl} 0 ${d.w4.spacing.xxl} ${d.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,l().div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  margin-bottom: ${d.w4.spacing.md};
`,l().ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,l().a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${d.w4.typography.fontSizeSm};
  font-family: ${d.w4.typography.fontFamily};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?d.w4.colors.accent:"transparent"};
  border-radius: 0 ${d.w4.borderRadius.sm} ${d.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${d.w4.colors.mainText}; background: ${d.w4.colors.sidebarHover}; }
`,l().div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${d.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,l().div`flex: 1; min-width: 0;`,l().article`
  padding: ${d.w4.spacing.xxl} 0;
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeMd};
  line-height: ${d.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${d.w4.spacing.xl} 0 ${d.w4.spacing.md};
    color: ${d.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${d.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${d.w4.typography.fontSizeXl}; border-bottom: 1px solid ${d.w4.colors.border}; padding-bottom: ${d.w4.spacing.sm}; }
  h2 { font-size: ${d.w4.typography.fontSizeLg}; border-bottom: 1px solid ${d.w4.colors.border}; padding-bottom: ${d.w4.spacing.xs}; }
  h3 { font-size: ${d.w4.typography.fontSizeMd}; }

  p { margin: ${d.w4.spacing.md} 0; }

  a { color: ${d.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${d.w4.colors.accentHover}; } }

  ul, ol { margin: ${d.w4.spacing.md} 0; padding-left: ${d.w4.spacing.xl}; }
  li { margin: ${d.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${d.w4.colors.border};
    margin: ${d.w4.spacing.lg} 0;
    padding: ${d.w4.spacing.sm} ${d.w4.spacing.lg};
    background: ${d.w4.colors.surface};
    color: ${d.w4.colors.mainTextMuted};
    border-radius: 0 ${d.w4.borderRadius.sm} ${d.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${d.w4.colors.codeBg};
    border: 1px solid ${d.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${d.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${d.w4.spacing.lg} 0; font-size: ${d.w4.typography.fontSizeBase}; }
  th, td { padding: ${d.w4.spacing.sm} ${d.w4.spacing.md}; border: 1px solid ${d.w4.colors.border}; text-align: left; }
  th { background: ${d.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${d.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${d.w4.colors.border}; margin: ${d.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${d.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${d.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${d.w4.spacing.lg} 0; }
`,l().div`
  display: flex;
  gap: ${d.w4.spacing.lg};
  padding: ${d.w4.spacing.xxl} 0;
  border-top: 1px solid ${d.w4.colors.border};
  margin-top: ${d.w4.spacing.xxl};
`,l().button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${d.w4.spacing.md} ${d.w4.spacing.lg};
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${d.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,l().div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${d.w4.colors.sidebarTextMuted}; font-family: ${d.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,l().div`
  font-size: ${d.w4.typography.fontSizeBase}; color: ${d.w4.colors.accent};
  font-family: ${d.w4.typography.fontFamily}; font-weight: 500;
`,l().div`
  color: ${d.w4.colors.mainTextMuted};
  padding: ${d.w4.spacing.xxl} ${d.w4.spacing.xl};
  font-family: ${d.w4.typography.fontFamily};
`;let C=(0,u.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,L=(0,u.keyframes)`
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
`;l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  /* Layout's TopBar uses z-index:1000; sit above it so the drawer fully
     covers the chrome and the drawer header / first row aren't clipped. */
  z-index: 1100;
  animation: ${C} 0.18s ease both;

  @media (min-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,l().aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: min(86vw, 320px);
  background: ${d.w4.colors.sidebarBg};
  border-right: 1px solid ${d.w4.colors.sidebarBorder};
  z-index: 1101;
  /* Respect notches / status bar on iOS so the drawer header sits below
     the safe area inset rather than under the camera notch. */
  padding-top: env(safe-area-inset-top, 0px);
  display: flex;
  flex-direction: column;
  animation: ${L} 0.22s cubic-bezier(0.4, 0, 0.2, 1) both;

  @media (min-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.md};
  border-bottom: 1px solid ${d.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,l().span`
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${d.w4.colors.sidebarTextMuted};
`,l().div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
`,l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${d.w4.typography.fontFamily};
  background: ${d.w4.colors.mainBg};
`,l().div`
  position: absolute;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%,
    hsl(${({hue:e})=>e}, 80%, 65%) 0%,
    hsl(${({hue:e})=>e+30}, 70%, 45%) 60%,
    transparent 100%
  );
  filter: blur(60px);
  opacity: 0.18;
  animation: drift ${({dur:e})=>e}s ease-in-out infinite alternate;
  pointer-events: none;

  @keyframes drift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(30px, -20px) scale(1.12); }
  }
`,l().div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${d.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${d.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,l().div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,l().h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${d.w4.colors.mainText} 0%,
    ${d.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,l().p`
  font-size: ${d.w4.typography.fontSizeMd};
  color: ${d.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,l().span`
  font-size: ${d.w4.typography.fontSizeSm};
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,l().span`
  display: inline-flex;

  @media (min-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,l().div`
  display: flex;
  gap: 4px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  padding: 2px;
`,l().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?d.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":d.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":d.w4.colors.mainText};
  }
`,l().div`
  font-size: 14px;
  color: ${d.w4.colors.mainText};
  line-height: 1.65;

  p { margin: 0 0 0.6em; }
  p:last-child { margin-bottom: 0; }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${d.w4.colors.mainText};
    margin: 0.9em 0 0.3em;
    line-height: 1.3;
  }
  h1 { font-size: 17px; }
  h2 { font-size: 15px; }
  h3, h4, h5, h6 { font-size: 13.5px; }
  & > :first-of-type { margin-top: 0; }

  ul, ol {
    padding-left: 1.4em;
    margin: 0 0 0.6em;
    line-height: 1.65;
  }
  li { margin-bottom: 0.15em; }
  li p { margin: 0; }

  /* Task lists */
  ul.contains-task-list { list-style: none; padding-left: 0.2em; }
  li.task-list-item { display: flex; align-items: baseline; gap: 0.4em; }
  li.task-list-item input[type="checkbox"] {
    accent-color: ${d.w4.colors.accent};
    flex-shrink: 0;
    margin-top: 2px;
  }

  strong { font-weight: 600; color: ${d.w4.colors.mainText}; }
  em     { font-style: italic; }

  a {
    color: ${d.w4.colors.accent};
    text-decoration: none;

    &:hover { text-decoration: underline; color: ${d.w4.colors.accentHover}; }
  }

  blockquote {
    margin: 0.6em 0;
    padding: 6px 12px;
    border-left: 3px solid ${d.w4.colors.accent};
    background: ${d.w4.colors.surface};
    border-radius: 0 6px 6px 0;
    color: ${d.w4.colors.mainTextMuted};
    font-style: italic;
  }

  /* Inline code only — CodeBlock owns fenced blocks */
  code {
    font-family: ${d.w4.typography.fontFamilyMono};
    font-size: 12.5px;
    background: ${d.w4.colors.codeBg};
    border: 1px solid ${d.w4.colors.codeBorder};
    border-radius: 4px;
    padding: 1px 5px;
    color: ${d.w4.colors.mainText};
  }

  /* Pre reset — CodeBlock handles the chrome */
  pre { margin: 0.5em 0; }
  pre code { background: none; border: none; padding: 0; border-radius: 0; }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    margin: 0.5em 0;
    overflow: hidden;
    border-radius: ${d.w4.borderRadius.md};
  }
  th, td {
    padding: 7px 12px;
    border: 1px solid ${d.w4.colors.border};
    text-align: left;
    vertical-align: top;
  }
  th {
    background: ${d.w4.colors.surface};
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.03em;
    color: ${d.w4.colors.mainTextMuted};
    text-transform: uppercase;
  }
  tr:nth-of-type(even) td { background: ${d.w4.colors.surface}; }

  img {
    max-width: 100%;
    border-radius: ${d.w4.borderRadius.md};
    margin: 0.4em 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${d.w4.colors.border};
    margin: 0.8em 0;
  }

  /* KaTeX — hide the aria-only MathML fork, keep the HTML render */
  .katex .katex-mathml { display: none; }
  .katex { font-size: 1.05em; }
  .katex-display {
    margin: 0.6em 0;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 2px 0;
  }
`;var V=r(7993);l().nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${d.w4.spacing.sm} 0;
`,l().div`
  font-size: 10px;
  font-weight: 600;
  color: ${d.w4.colors.sidebarTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: ${d.w4.spacing.xs} ${d.w4.spacing.md};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&`
    font-size: 0;
    padding: 0;
    margin: 0;
    height: 0;
  `}
`,l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 0 6px;
  border: none;
  border-radius: ${d.w4.borderRadius.md};
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.sidebarText};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};

  &:hover {
    background: ${d.w4.colors.sidebarHover};
    color: ${d.w4.colors.mainText};
  }

  ${({collapsed:e})=>e&&`
    justify-content: center;
    padding: 8px;
    margin: 0 4px;
  `}
`,l().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`,l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"display: none;"}
`;let A=(0,u.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;l().div`
  display: grid;
  /* Desktop & iPad: exactly 2 equal columns. sm = 1 col, md/lg = 2 cols (full row). */
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: auto;
  gap: ${d.w4.spacing.lg};

  @media (max-width: ${d.w4.breakpoints.lg}) {
    gap: ${d.w4.spacing.md};
  }

  /* Mobile: stack everything in a single full-width column. */
  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,l().div`
  grid-column: ${({fullWidth:e,colSpan:o})=>e?"1 / -1":`span ${o}`};
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${A} 0.25s ease both;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-column: span 1;
  }
`,l().div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  margin-bottom: 0;
  height: 20px;
`,l().div`
  --panel-accent: ${({accent:e})=>e??d.w4.colors.accent};
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: ${({minH:e})=>e}px;
  height: 100%;
  padding: ${d.w4.spacing.lg};
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  transition:
    border-color ${d.w4.transitions.base},
    box-shadow ${d.w4.transitions.base},
    transform ${d.w4.transitions.base};

  /* Left accent bar */
  &::before {
    content: '';
    position: absolute;
    top: 14px; bottom: 14px; left: 0;
    width: 2px;
    background: var(--panel-accent);
    border-radius: 0 2px 2px 0;
    opacity: 0.7;
  }

  /* Grip visual affordance left edge */
  &[data-grip='true']::after {
    content: '';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 24px;
    border-left: 2px dotted ${d.w4.colors.borderSubtle};
    border-right: 2px dotted ${d.w4.colors.borderSubtle};
    opacity: 0.4;
  }

  &:hover {
    border-color: ${d.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px ${d.w4.colors.shadow};
  }

  /* WidgetShell owns its chrome — zero ours to avoid double frame. */
  &:has(> [data-widget-shell]) {
    padding: 0;
    background: transparent;
    border-color: transparent;
  }
  &:has(> [data-widget-shell])::before,
  &:has(> [data-widget-shell])::after { display: none; }
  &:has(> [data-widget-shell]):hover {
    border-color: transparent;
    box-shadow: none;
    transform: none;
  }

  /* Controls visible on hover (pointer devices); always slightly visible on touch. */
  &:hover .panel-controls { opacity: 1; }

  @media (hover: none) {
    .panel-controls {
      opacity: 0.4;
      transform: scale(0.87);
      transform-origin: top right;
    }
  }
`,l().div`
  position: absolute;
  top: -14px;
  right: 6px;
  display: flex;
  align-items: center;
  gap: 2px;
  opacity: 0;
  transition: opacity ${d.w4.transitions.fast};
  z-index: 2;
`;let q=l().button`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainTextMuted};
  cursor: pointer;
  transition:
    color ${d.w4.transitions.fast},
    border-color ${d.w4.transitions.fast},
    background ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.mainText};
    border-color: ${d.w4.colors.mainTextMuted};
    background: ${d.w4.colors.surfaceRaised};
  }
`;l()(q)`
  &:hover {
    color: #f85149;
    border-color: rgba(248, 81, 73, 0.4);
  }
`;let Y=(0,u.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;l().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${Y} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${d.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${d.w4.colors.surface};
  }
`,l().span`
  display: block;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${d.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${d.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${d.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${d.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`;let I=l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,P=l().div`
  background: ${d.w4.colors.sidebarBg};
  border: 1px solid ${d.w4.colors.sidebarBorder};
  border-radius: ${d.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,E=l().div`
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
`,G=l().input`
  width: 100%;
  padding: 8px 12px;
  background: ${d.w4.colors.mainBg};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${d.w4.colors.accent}; }
  &::placeholder { color: ${d.w4.colors.sidebarTextMuted}; }
`,O=l().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,X=l().button`
  padding: 7px 18px;
  border-radius: ${d.w4.borderRadius.md};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:o})=>o?"rgba(248,81,73,0.12)":e?d.w4.colors.accent:"none"};
  color: ${({primary:e,danger:o})=>o?d.w4.colors.danger:e?"#fff":d.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:o})=>o?d.w4.colors.danger:e?d.w4.colors.accent:d.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,_=l().div`
  height: 1px;
  background: ${d.w4.colors.border};
  margin: 0 -4px;
`,K=l().div`
  font-size: 11px;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
`;function D({onSave:e,onUpdate:o,onCancel:r,existingDoc:i}){let[n,l]=(0,a.useState)(i?.name??""),d=(0,a.useRef)(null);return(0,a.useEffect)(()=>{d.current?.focus(),i&&d.current?.select()},[i]),(0,t.jsx)(I,{onClick:r,children:(0,t.jsxs)(P,{onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(E,{children:"Save document"}),i&&o&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(K,{children:"Update the current version or save as a new one."}),(0,t.jsxs)(O,{children:[(0,t.jsx)(X,{onClick:r,children:"Cancel"}),(0,t.jsxs)(X,{danger:!0,onClick:o,children:['Update "',i.name,'"']})]}),(0,t.jsx)(_,{})]}),(0,t.jsx)(G,{ref:d,value:n,onChange:e=>l(e.target.value),onKeyDown:t=>{"Enter"===t.key&&n.trim()&&(i&&n.trim()===i.name&&o?o():e(n.trim())),"Escape"===t.key&&r()},placeholder:i?"Or save as a new version…":"Give this version a name…",maxLength:80}),(0,t.jsxs)(O,{children:[!i&&(0,t.jsx)(X,{onClick:r,children:"Cancel"}),(0,t.jsx)(X,{primary:!0,disabled:!n.trim(),onClick:()=>e(n.trim()),children:"Save as new"})]})]})})}let W=(0,u.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Z=(0,u.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`;l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${d.w4.spacing.md};
  animation: ${W} 0.15s ease both;
`,l().div`
  background: ${d.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?d.w4.colors.danger+"55":d.w4.colors.sidebarBorder};
  border-radius: ${d.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${d.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${Z} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,l().div`
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?d.w4.colors.danger:d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
`,l().div`
  font-size: ${d.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamily};
`,l().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${d.w4.spacing.sm};
`,l().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${d.w4.transitions.fast},
    border-color ${d.w4.transitions.fast},
    color ${d.w4.transitions.fast},
    opacity ${d.w4.transitions.fast};

  background: ${({primary:e,danger:o})=>o?d.w4.colors.danger:e?d.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:o})=>o||e?"#fff":d.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:o})=>o?d.w4.colors.danger:e?d.w4.colors.accent:d.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${d.w4.focusRing} }
`;let U=(0,u.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,N=(0,u.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Q=(0,u.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${d.w4.colors.mainBg};
  font-family: ${d.w4.typography.fontFamily};
  animation: ${U} 0.4s ease 0.15s both;
`,l().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,l().div`
  position: absolute;
  inset: 0;
  animation: ${N} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${({delay:e})=>e}s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({size:e})=>e}px;
    height: ${({size:e})=>e}px;
    border-radius: 50%;
    background: ${({color:e})=>e};
    box-shadow: 0 0 8px ${({color:e})=>e}44;
  }
`,l().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${d.w4.colors.border};
  animation: ${Q} 1.4s ease-in-out infinite;
`,l().span`
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`,l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${d.w4.spacing.sm};
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,l().div`
  position: relative;
`;let J="260px",ee="56px",eo="56px",er=l().header`
  display: flex;
  align-items: center;
  height: calc(${eo} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${d.w4.colors.sidebarBg};
  border-bottom: 1px solid ${d.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);

  /* Mobile: logo + app label on row 1, scrollable chrome cluster on row 2. */
  @media (max-width: ${d.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(${eo} + env(safe-area-inset-top, 0px));
  }
`,et=l().div`
  width: ${ee};
  min-width: ${ee};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${d.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,ea=l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${d.w4.borderRadius.md};
  cursor: pointer;
  color: ${d.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
    color: ${d.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,ei=l().button`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  padding: 0 ${d.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  color: ${d.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.85; }
`,en=l().span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: linear-gradient(135deg, ${d.w4.colors.accent}, ${d.w4.colors.accentHover});
  font-family: ${d.w4.typography.fontFamilySerif};
  font-size: 23px;
  font-weight: 600;
  line-height: 1;
  color: #ffffff;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08) inset,
    0 6px 18px -4px ${d.w4.colors.accent}88;

  /* serif: approved for logo wordmark */
`,el=l().span`
  font-family: ${d.w4.typography.fontFamilySerif};
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.005em;
  color: ${d.w4.colors.mainText};
  line-height: 1;

  /* serif: approved for logo wordmark */
`,ed=l().div`
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  padding-left: ${d.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 0;

  &::before {
    content: '/';
    margin-right: ${d.w4.spacing.sm};
    color: ${d.w4.colors.border};
  }
`,es=l().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${d.w4.spacing.md};
  padding: 0 ${d.w4.spacing.lg};
  min-width: 0;

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${d.w4.spacing.sm};
  }

  /* Full-width second row on mobile, horizontally scrollable.
     Align to the right so the avatar / bell stay flush with the
     viewport edge — matches desktop end-alignment. */
  @media (max-width: ${d.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    justify-content: flex-end;
    padding: ${d.w4.spacing.xs} ${d.w4.spacing.sm};
    gap: ${d.w4.spacing.xs};
    border-top: 1px solid ${d.w4.colors.sidebarBorder};
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }

    > section + section,
    > *:not(section) + section {
      margin-left: 0;
    }
  }
`,ec=l().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,ep=l().div`
  display: flex;
  flex-direction: column;
  height: ${d.w4.sizes.fullHeight};
  background: ${d.w4.colors.mainBg};
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainText};
  overflow: hidden;
`,eg=l().aside`
  width: ${({collapsed:e})=>e?ee:J};
  min-width: ${({collapsed:e})=>e?ee:J};
  background: ${d.w4.colors.sidebarBg};
  border-right: 1px solid ${d.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,eh=l().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,ex=l().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;function ef(){return(0,t.jsxs)(ei,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:[(0,t.jsx)(en,{"aria-hidden":"true",children:"A"}),(0,t.jsx)(el,{children:"Atlantis"})]})}let eb="atlantis:sidebar-collapsed";function em({sidebar:e,children:o,topBarRight:n,title:l="Atlantis",activeId:d=null}){let[s,c]=(0,a.useState)(()=>{try{return"true"===localStorage.getItem(eb)}catch{return!1}}),[p,g]=(0,a.useState)(null),h=(0,a.useRef)(),x=()=>c(e=>{let o=!e;try{localStorage.setItem(eb,String(o))}catch{}return o}),f=i().useMemo(()=>i().lazy(()=>Promise.resolve().then(r.bind(r,5816)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,t.jsx)(V.I.Provider,{value:{collapsed:s,toggle:x,flyout:p,openFlyout:(e,o,r)=>{clearTimeout(h.current),g({entry:e,anchorY:o,onSelect:r})},scheduleFlyoutClose:()=>{h.current=setTimeout(()=>g(null),160)},cancelFlyoutClose:()=>clearTimeout(h.current)},children:(0,t.jsxs)(ep,{children:[(0,t.jsxs)(er,{children:[e&&(0,t.jsx)(et,{children:(0,t.jsx)(ea,{onClick:x,title:s?"Expand sidebar":"Collapse sidebar",children:(0,t.jsxs)("svg",{width:17,height:17,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),(0,t.jsx)("path",{d:"M9 3v18"})]})})}),(0,t.jsx)(ef,{}),l&&(0,t.jsx)(ed,{children:l}),n&&(0,t.jsx)(es,{children:n})]}),(0,t.jsxs)(ec,{children:[null!=e&&(0,t.jsx)(eg,{collapsed:s,children:(0,t.jsx)(eh,{children:e})}),(0,t.jsx)(ex,{children:o})]}),p&&(0,t.jsx)(i().Suspense,{fallback:null,children:(0,t.jsx)(f,{activeId:d})})]})})}l().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,l().div`
  overflow: hidden;
`,l().div`
  padding-left: ${d.w4.spacing.md};
`,l().div`
  display: flex;
  flex-direction: column;
`,l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${d.w4.spacing.sm} ${d.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":d.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${d.w4.colors.sidebarTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${d.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${d.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${d.w4.colors.sidebarText};
    background: ${d.w4.colors.sidebarHover};
  }
`,l().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,l().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,l().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${d.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${d.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?d.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?d.w4.colors.sidebarActive:d.w4.colors.sidebarText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${d.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${d.w4.borderRadius.md} ${d.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;
  outline: none;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
    color: ${d.w4.colors.mainText};
  }
  &:focus { outline: none; }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: -2px;
  }
`,r(5816),l().div`
  padding: ${d.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,l().section`
  scroll-margin-top: ${d.w4.spacing.lg};
`,l().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.lg};
`,l().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${d.w4.spacing.xl};

  @media (max-width: ${d.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,l().div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${d.w4.colors.mainBg};
  font-family: ${d.w4.typography.fontFamily};
  color: ${d.w4.colors.mainText};
  overflow: hidden;
`,l().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${d.w4.colors.sidebarBg};
  border-bottom: 1px solid ${d.w4.colors.sidebarBorder};
  padding-left: max(${d.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${d.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${d.w4.spacing.sm};
  z-index: 100;
`,l().button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${d.w4.typography.fontFamily};
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${d.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${d.w4.colors.accent}; }
`,l().span`
  color: ${d.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,l().div`
  font-size: ${d.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,l().span`
  font-weight: 400;
  color: ${d.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,l().div`
  flex: 1;
`}}]);