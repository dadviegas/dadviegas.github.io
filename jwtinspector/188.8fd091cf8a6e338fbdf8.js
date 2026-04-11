"use strict";(self.webpackChunk_atlantis_jwtinspector=self.webpackChunk_atlantis_jwtinspector||[]).push([[188],{188(e,r,o){var t=o(7359),n=o(8997),i=o(3233),s=o(906),a=o(2396),l=o(9248),d=o(679),c=o(2534),p=o(947),x=o(1783),f=o(9336),u=o(5723);function g(e){const r=e.replace(/-/g,"+").replace(/_/g,"/"),o=r.length%4==0?"":"=".repeat(4-r.length%4);return atob(r+o)}function h(e){return new Date(1e3*e).toLocaleString()}function b(e){const r=1e3*e-Date.now();if(r<=0)return{text:"Expired",expired:!0};const o=Math.floor(r/1e3);if(o<60)return{text:`${o}s remaining`,expired:!1};const t=Math.floor(o/60);if(t<60)return{text:`${t}m remaining`,expired:!1};const n=Math.floor(t/60);return n<24?{text:`${n}h ${t%60}m remaining`,expired:!1}:{text:`${Math.floor(n/24)}d ${n%24}h remaining`,expired:!1}}const m=["exp","iat","nbf"],w=["iss","sub","aud","jti","scope","roles"];function y({k:e,v:r}){if(null===r)return(0,u.jsx)("span",{style:{color:"#8b949e"},children:"null"});if("boolean"==typeof r)return(0,u.jsx)("span",{style:{color:"#d2a8ff"},children:String(r)});if("number"==typeof r){const o=e&&m.includes(e);return(0,u.jsxs)("span",{children:[(0,u.jsx)("span",{style:{color:"#f78166"},children:r}),o&&(0,u.jsxs)("span",{style:{color:"#8b949e",fontSize:11,marginLeft:8},children:["(",h(r),")"]})]})}if("string"==typeof r){const o=e&&w.includes(e);return(0,u.jsxs)("span",{style:{color:o?s.w4.colors.accent:"#a5d6ff"},children:['"',r,'"']})}if(Array.isArray(r))return(0,u.jsxs)("span",{children:["[",r.map((e,o)=>(0,u.jsxs)("span",{children:[(0,u.jsx)(y,{v:e}),o<r.length-1?", ":""]},o)),"]"]});if("object"==typeof r){const e=Object.entries(r);return(0,u.jsxs)("span",{children:["{",(0,u.jsx)("br",{}),e.map(([r,o],t)=>(0,u.jsxs)("div",{style:{paddingLeft:16},children:[(0,u.jsxs)("span",{style:{color:"#79c0ff"},children:['"',r,'"']}),(0,u.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,u.jsx)(y,{k:r,v:o}),t<e.length-1?",":""]},r)),"}"]})}return(0,u.jsx)("span",{style:{color:"#8b949e"},children:String(r)})}function $({data:e,title:r}){const o=Object.entries(e);return(0,u.jsxs)(J,{children:[(0,u.jsx)(W,{children:r}),(0,u.jsxs)(L,{children:["{",o.map(([e,r],t)=>(0,u.jsxs)("div",{children:[(0,u.jsxs)("span",{style:{color:"#79c0ff"},children:['"',e,'"']}),(0,u.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,u.jsx)(y,{k:e,v:r}),t<o.length-1&&(0,u.jsx)("span",{style:{color:"#8b949e"},children:","}),"exp"===e&&"number"==typeof r&&(()=>{const{text:e,expired:o}=b(r);return(0,u.jsxs)(O,{expired:o,children:[o?(0,u.jsx)(a.A,{size:11}):(0,u.jsx)(l.A,{size:11}),e]})})()]},e)),"}"]})]})}const j=i.default.div`
  display: flex; flex-direction: column; height: 100vh;
  background: ${s.w4.colors.mainBg}; font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainText}; overflow: hidden;
`,k=i.default.header`
  display: flex; align-items: center; height: 48px;
  background: ${s.w4.colors.sidebarBg}; border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  padding: 0 ${s.w4.spacing.lg}; flex-shrink: 0; gap: ${s.w4.spacing.sm};
`,v=i.default.button`
  display: flex; align-items: baseline; padding: 0; background: none; border: none;
  cursor: pointer; font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeBase}; font-weight: 700; letter-spacing: -0.02em;
  color: ${s.w4.colors.mainText}; flex-shrink: 0; transition: opacity 0.15s;
  &:hover { opacity: 0.8; } span { color: ${s.w4.colors.accent}; }
`,z=i.default.span`color: ${s.w4.colors.border}; margin: 0 2px; font-weight: 400;`,T=i.default.div`
  font-size: ${s.w4.typography.fontSizeBase}; font-weight: 700;
  color: ${s.w4.colors.mainText}; letter-spacing: -0.01em; flex-shrink: 0;
`,M=i.default.span`
  font-weight: 400; color: ${s.w4.colors.sidebarTextMuted}; margin-left: 4px; font-size: 12px;
`,A=i.default.div`flex: 1;`,S=i.default.div`
  display: flex; flex-direction: column; flex: 1; overflow: hidden; padding: ${s.w4.spacing.lg}; gap: ${s.w4.spacing.md};
`,R=i.default.textarea`
  width: 100%; min-height: 80px; max-height: 120px;
  background: ${s.w4.colors.surface}; border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md}; padding: ${s.w4.spacing.md};
  font-family: ${s.w4.typography.fontFamilyMono}; font-size: 12px;
  color: ${s.w4.colors.mainText}; resize: vertical; outline: none; line-height: 1.5;
  transition: border-color 0.15s; flex-shrink: 0;
  &:focus { border-color: ${s.w4.colors.accent}; }
  &::placeholder { color: ${s.w4.colors.mainTextMuted}; }
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${s.w4.colors.border}; border-radius: 3px; }
`,F=i.default.div`
  display: flex; align-items: center; gap: ${s.w4.spacing.sm}; flex-shrink: 0;
`,B=i.default.div`
  display: flex; align-items: center; gap: 4px; font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
`,E=i.default.span`
  display: flex; align-items: center; gap: 4px; font-size: 11px;
  color: ${s.w4.colors.mainTextMuted}; background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border}; border-radius: 4px; padding: 2px 8px;
`,C=i.default.div`
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: ${s.w4.spacing.md};
  flex: 1; min-height: 0; overflow: hidden;
`,J=i.default.div`
  display: flex; flex-direction: column; background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border}; border-radius: ${s.w4.borderRadius.md}; overflow: hidden;
`,W=i.default.div`
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md}; font-size: 11px; font-weight: 700;
  letter-spacing: 0.07em; text-transform: uppercase; color: ${s.w4.colors.mainTextMuted};
  background: ${s.w4.colors.mainBg}; border-bottom: 1px solid ${s.w4.colors.border}; flex-shrink: 0;
`,L=i.default.div`
  flex: 1; overflow-y: auto; padding: ${s.w4.spacing.md};
  font-family: ${s.w4.typography.fontFamilyMono}; font-size: 12px; line-height: 1.7;
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${s.w4.colors.border}; border-radius: 3px; }
`,_=i.default.div`
  word-break: break-all; color: ${s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamilyMono}; font-size: 11px; line-height: 1.6;
`,H=i.default.div`
  margin-top: ${s.w4.spacing.md}; padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  background: rgba(56,139,253,0.08); border: 1px solid rgba(56,139,253,0.2);
  border-radius: ${s.w4.borderRadius.sm}; font-size: 11px; color: ${s.w4.colors.mainTextMuted};
`,O=i.default.span`
  display: inline-flex; align-items: center; gap: 3px; margin-left: 8px;
  padding: 1px 6px; border-radius: 10px; font-size: 10px; font-weight: 600;
  font-family: ${s.w4.typography.fontFamily};
  background: ${e=>e.expired?"rgba(248,113,113,0.15)":"rgba(63,185,80,0.15)"};
  color: ${e=>e.expired?"#f87171":"#3fb950"};
  border: 1px solid ${e=>e.expired?"rgba(248,113,113,0.3)":"rgba(63,185,80,0.3)"};
`,I=i.default.div`
  flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column;
  gap: ${s.w4.spacing.sm}; color: ${s.w4.colors.mainTextMuted}; font-size: 14px;
`,P=i.default.div`
  display: flex; align-items: center; gap: ${s.w4.spacing.sm}; padding: ${s.w4.spacing.md};
  background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.25);
  border-radius: ${s.w4.borderRadius.md}; color: #f87171; font-size: 13px; flex-shrink: 0;
`,D=i.default.div`position: relative;`,N=i.default.button`
  display: flex; align-items: center; gap: 4px; padding: 0 ${s.w4.spacing.sm}; height: 30px;
  background: transparent; border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm}; color: ${s.w4.colors.mainTextMuted};
  font-size: 12px; font-family: ${s.w4.typography.fontFamily}; cursor: pointer;
  &:hover { border-color: ${s.w4.colors.accent}; color: ${s.w4.colors.mainText}; }
`,q=i.default.div`
  position: absolute; top: calc(100% + 4px); right: 0;
  background: ${s.w4.colors.surface}; border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md}; box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200; min-width: 200px; overflow: hidden;
`,V=i.default.button`
  display: block; width: 100%; text-align: left; padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  background: transparent; border: none; color: ${s.w4.colors.mainText};
  font-size: 13px; font-family: ${s.w4.typography.fontFamily}; cursor: pointer;
  &:hover { background: ${s.w4.colors.mainBg}; }
`;function G({topBarRight:e}){const[r,o]=(0,t.useState)(f.k[0].token),[n,i]=(0,t.useState)(!1),s=(0,t.useRef)(null);(0,t.useEffect)(()=>{const e=e=>{s.current&&!s.current.contains(e.target)&&i(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const{decoded:m,error:w}=(0,t.useMemo)(()=>function(e){const r=e.trim().split(".");if(3!==r.length)return{decoded:null,error:"JWT must have exactly 3 parts separated by dots."};try{return{decoded:{header:JSON.parse(g(r[0])),payload:JSON.parse(g(r[1])),signature:r[2],raw:{header:r[0],payload:r[1],signature:r[2]}},error:null}}catch(e){return{decoded:null,error:"Failed to decode: "+e.message}}}(r),[r]),y=m?.header.alg,G=m?.payload.exp,K=m?.payload.iat,Q=(new TextEncoder).encode(r).length;return(0,u.jsxs)(j,{children:[(0,u.jsxs)(k,{children:[(0,u.jsxs)(v,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,u.jsx)("span",{children:"antis"})]}),(0,u.jsx)(z,{children:"/"}),(0,u.jsxs)(T,{children:["JWT Inspector",(0,u.jsx)(M,{children:"decode & inspect"})]}),(0,u.jsx)(A,{}),(0,u.jsxs)(D,{ref:s,children:[(0,u.jsxs)(N,{onClick:()=>i(e=>!e),children:["Examples ",(0,u.jsx)(d.A,{size:12})]}),n&&(0,u.jsx)(q,{children:f.k.map(e=>(0,u.jsx)(V,{onClick:()=>{o(e.token),i(!1)},children:e.label},e.label))})]}),e]}),(0,u.jsxs)(S,{children:[(0,u.jsx)(R,{value:r,onChange:e=>o(e.target.value),placeholder:"Paste a JWT token here…",spellCheck:!1}),r.trim()&&(0,u.jsxs)(F,{children:[w?(0,u.jsxs)(B,{ok:!1,children:[(0,u.jsx)(c.A,{size:13})," Invalid JWT"]}):(0,u.jsxs)(B,{ok:!0,children:[(0,u.jsx)(p.A,{size:13})," Valid structure"]}),m&&(0,u.jsxs)(u.Fragment,{children:[y&&(0,u.jsxs)(E,{children:["alg: ",y]}),K&&(0,u.jsxs)(E,{children:[(0,u.jsx)(x.A,{size:11})," ",h(K)]}),G&&(()=>{const{text:e,expired:r}=b(G);return(0,u.jsxs)(O,{expired:r,children:[r?(0,u.jsx)(a.A,{size:11}):(0,u.jsx)(l.A,{size:11}),e]})})(),(0,u.jsxs)(E,{children:[Q," bytes"]})]})]}),w&&r.trim()&&(0,u.jsxs)(P,{children:[(0,u.jsx)(c.A,{size:15})," ",w]}),m?(0,u.jsxs)(C,{children:[(0,u.jsx)($,{data:m.header,title:"Header"}),(0,u.jsx)($,{data:m.payload,title:"Payload"}),(0,u.jsxs)(J,{children:[(0,u.jsx)(W,{children:"Signature"}),(0,u.jsxs)(L,{children:[(0,u.jsx)(_,{children:m.raw.signature}),(0,u.jsx)(H,{children:"Signature verification requires the secret key or public key and must be done server-side. This tool only decodes the token structure."})]})]})]}):r.trim()?null:(0,u.jsxs)(I,{children:[(0,u.jsx)(l.A,{size:40,strokeWidth:1}),"Paste a JWT token above to inspect it"]})]})]})}const K=document.getElementById("root");if(!K)throw new Error("Root element #root not found");(0,n.H)(K).render((0,u.jsx)(G,{}))},8997(e,r,o){var t=o(8991);r.H=t.createRoot,t.hydrateRoot}}]);
//# sourceMappingURL=188.8fd091cf8a6e338fbdf8.js.map