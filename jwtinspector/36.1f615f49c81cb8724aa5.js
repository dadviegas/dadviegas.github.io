"use strict";(self.webpackChunk_atlantis_jwtinspector=self.webpackChunk_atlantis_jwtinspector||[]).push([[36],{6036(e,r,o){o.r(r),o.d(r,{default:()=>V});var n=o(7359),t=o(3233),i=o(4191),s=o(2534),a=o(947),l=o(679),d=o(1783),c=o(2396),p=o(9248),x=o(9336),f=o(5723);function u(e){const r=e.replace(/-/g,"+").replace(/_/g,"/"),o=r.length%4==0?"":"=".repeat(4-r.length%4);return atob(r+o)}function g(e){return new Date(1e3*e).toLocaleString()}function h(e){const r=1e3*e-Date.now();if(r<=0)return{text:"Expired",expired:!0};const o=Math.floor(r/1e3);if(o<60)return{text:`${o}s remaining`,expired:!1};const n=Math.floor(o/60);if(n<60)return{text:`${n}m remaining`,expired:!1};const t=Math.floor(n/60);return t<24?{text:`${t}h ${n%60}m remaining`,expired:!1}:{text:`${Math.floor(t/24)}d ${t%24}h remaining`,expired:!1}}const b=["exp","iat","nbf"],m=["iss","sub","aud","jti","scope","roles"];function w({k:e,v:r}){if(null===r)return(0,f.jsx)("span",{style:{color:"#8b949e"},children:"null"});if("boolean"==typeof r)return(0,f.jsx)("span",{style:{color:"#d2a8ff"},children:String(r)});if("number"==typeof r){const o=e&&b.includes(e);return(0,f.jsxs)("span",{children:[(0,f.jsx)("span",{style:{color:"#f78166"},children:r}),o&&(0,f.jsxs)("span",{style:{color:"#8b949e",fontSize:11,marginLeft:8},children:["(",g(r),")"]})]})}if("string"==typeof r){const o=e&&m.includes(e);return(0,f.jsxs)("span",{style:{color:o?i.w4.colors.accent:"#a5d6ff"},children:['"',r,'"']})}if(Array.isArray(r))return(0,f.jsxs)("span",{children:["[",r.map((e,o)=>(0,f.jsxs)("span",{children:[(0,f.jsx)(w,{v:e}),o<r.length-1?", ":""]},o)),"]"]});if("object"==typeof r){const e=Object.entries(r);return(0,f.jsxs)("span",{children:["{",(0,f.jsx)("br",{}),e.map(([r,o],n)=>(0,f.jsxs)("div",{style:{paddingLeft:16},children:[(0,f.jsxs)("span",{style:{color:"#79c0ff"},children:['"',r,'"']}),(0,f.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,f.jsx)(w,{k:r,v:o}),n<e.length-1?",":""]},r)),"}"]})}return(0,f.jsx)("span",{style:{color:"#8b949e"},children:String(r)})}function y({data:e,title:r}){const o=Object.entries(e);return(0,f.jsxs)(J,{children:[(0,f.jsx)(E,{children:r}),(0,f.jsxs)(W,{children:["{",o.map(([e,r],n)=>(0,f.jsxs)("div",{children:[(0,f.jsxs)("span",{style:{color:"#79c0ff"},children:['"',e,'"']}),(0,f.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,f.jsx)(w,{k:e,v:r}),n<o.length-1&&(0,f.jsx)("span",{style:{color:"#8b949e"},children:","}),"exp"===e&&"number"==typeof r&&(()=>{const{text:e,expired:o}=h(r);return(0,f.jsxs)(O,{expired:o,children:[o?(0,f.jsx)(c.A,{size:11}):(0,f.jsx)(p.A,{size:11}),e]})})()]},e)),"}"]})]})}const $=t.default.div`
  display: flex; flex-direction: column; height: 100vh;
  background: ${i.w4.colors.mainBg}; font-family: ${i.w4.typography.fontFamily};
  color: ${i.w4.colors.mainText}; overflow: hidden;
`,j=t.default.header`
  display: flex; align-items: center; height: 48px;
  background: ${i.w4.colors.sidebarBg}; border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding: 0 ${i.w4.spacing.lg}; flex-shrink: 0; gap: ${i.w4.spacing.sm};
`,k=t.default.button`
  display: flex; align-items: baseline; padding: 0; background: none; border: none;
  cursor: pointer; font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeBase}; font-weight: 700; letter-spacing: -0.02em;
  color: ${i.w4.colors.mainText}; flex-shrink: 0; transition: opacity 0.15s;
  &:hover { opacity: 0.8; } span { color: ${i.w4.colors.accent}; }
`,v=t.default.span`color: ${i.w4.colors.border}; margin: 0 2px; font-weight: 400;`,z=t.default.div`
  font-size: ${i.w4.typography.fontSizeBase}; font-weight: 700;
  color: ${i.w4.colors.mainText}; letter-spacing: -0.01em; flex-shrink: 0;
`,T=t.default.span`
  font-weight: 400; color: ${i.w4.colors.sidebarTextMuted}; margin-left: 4px; font-size: 12px;
`,M=t.default.div`flex: 1;`,A=t.default.div`
  display: flex; flex-direction: column; flex: 1; overflow: hidden; padding: ${i.w4.spacing.lg}; gap: ${i.w4.spacing.md};
`,S=t.default.textarea`
  width: 100%; min-height: 80px; max-height: 120px;
  background: ${i.w4.colors.surface}; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md}; padding: ${i.w4.spacing.md};
  font-family: ${i.w4.typography.fontFamilyMono}; font-size: 12px;
  color: ${i.w4.colors.mainText}; resize: vertical; outline: none; line-height: 1.5;
  transition: border-color 0.15s; flex-shrink: 0;
  &:focus { border-color: ${i.w4.colors.accent}; }
  &::placeholder { color: ${i.w4.colors.mainTextMuted}; }
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${i.w4.colors.border}; border-radius: 3px; }
`,F=t.default.div`
  display: flex; align-items: center; gap: ${i.w4.spacing.sm}; flex-shrink: 0;
`,B=t.default.div`
  display: flex; align-items: center; gap: 4px; font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
`,R=t.default.span`
  display: flex; align-items: center; gap: 4px; font-size: 11px;
  color: ${i.w4.colors.mainTextMuted}; background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border}; border-radius: 4px; padding: 2px 8px;
`,C=t.default.div`
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: ${i.w4.spacing.md};
  flex: 1; min-height: 0; overflow: hidden;
`,J=t.default.div`
  display: flex; flex-direction: column; background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border}; border-radius: ${i.w4.borderRadius.md}; overflow: hidden;
`,E=t.default.div`
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md}; font-size: 11px; font-weight: 700;
  letter-spacing: 0.07em; text-transform: uppercase; color: ${i.w4.colors.mainTextMuted};
  background: ${i.w4.colors.mainBg}; border-bottom: 1px solid ${i.w4.colors.border}; flex-shrink: 0;
`,W=t.default.div`
  flex: 1; overflow-y: auto; padding: ${i.w4.spacing.md};
  font-family: ${i.w4.typography.fontFamilyMono}; font-size: 12px; line-height: 1.7;
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${i.w4.colors.border}; border-radius: 3px; }
`,L=t.default.div`
  word-break: break-all; color: ${i.w4.colors.mainTextMuted};
  font-family: ${i.w4.typography.fontFamilyMono}; font-size: 11px; line-height: 1.6;
`,_=t.default.div`
  margin-top: ${i.w4.spacing.md}; padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  background: rgba(56,139,253,0.08); border: 1px solid rgba(56,139,253,0.2);
  border-radius: ${i.w4.borderRadius.sm}; font-size: 11px; color: ${i.w4.colors.mainTextMuted};
`,O=t.default.span`
  display: inline-flex; align-items: center; gap: 3px; margin-left: 8px;
  padding: 1px 6px; border-radius: 10px; font-size: 10px; font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  background: ${e=>e.expired?"rgba(248,113,113,0.15)":"rgba(63,185,80,0.15)"};
  color: ${e=>e.expired?"#f87171":"#3fb950"};
  border: 1px solid ${e=>e.expired?"rgba(248,113,113,0.3)":"rgba(63,185,80,0.3)"};
`,P=t.default.div`
  flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column;
  gap: ${i.w4.spacing.sm}; color: ${i.w4.colors.mainTextMuted}; font-size: 14px;
`,D=t.default.div`
  display: flex; align-items: center; gap: ${i.w4.spacing.sm}; padding: ${i.w4.spacing.md};
  background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.25);
  border-radius: ${i.w4.borderRadius.md}; color: #f87171; font-size: 13px; flex-shrink: 0;
`,H=t.default.div`position: relative;`,I=t.default.button`
  display: flex; align-items: center; gap: 4px; padding: 0 ${i.w4.spacing.sm}; height: 30px;
  background: transparent; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm}; color: ${i.w4.colors.mainTextMuted};
  font-size: 12px; font-family: ${i.w4.typography.fontFamily}; cursor: pointer;
  &:hover { border-color: ${i.w4.colors.accent}; color: ${i.w4.colors.mainText}; }
`,N=t.default.div`
  position: absolute; top: calc(100% + 4px); right: 0;
  background: ${i.w4.colors.surface}; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md}; box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200; min-width: 200px; overflow: hidden;
`,q=t.default.button`
  display: block; width: 100%; text-align: left; padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  background: transparent; border: none; color: ${i.w4.colors.mainText};
  font-size: 13px; font-family: ${i.w4.typography.fontFamily}; cursor: pointer;
  &:hover { background: ${i.w4.colors.mainBg}; }
`;function V({topBarRight:e}){const[r,o]=(0,n.useState)(x.k[0].token),[t,i]=(0,n.useState)(!1),b=(0,n.useRef)(null);(0,n.useEffect)(()=>{const e=e=>{b.current&&!b.current.contains(e.target)&&i(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const{decoded:m,error:w}=(0,n.useMemo)(()=>function(e){const r=e.trim().split(".");if(3!==r.length)return{decoded:null,error:"JWT must have exactly 3 parts separated by dots."};try{return{decoded:{header:JSON.parse(u(r[0])),payload:JSON.parse(u(r[1])),signature:r[2],raw:{header:r[0],payload:r[1],signature:r[2]}},error:null}}catch(e){return{decoded:null,error:"Failed to decode: "+e.message}}}(r),[r]),V=m?.header.alg,G=m?.payload.exp,K=m?.payload.iat,Q=(new TextEncoder).encode(r).length;return(0,f.jsxs)($,{children:[(0,f.jsxs)(j,{children:[(0,f.jsxs)(k,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,f.jsx)("span",{children:"antis"})]}),(0,f.jsx)(v,{children:"/"}),(0,f.jsxs)(z,{children:["JWT Inspector",(0,f.jsx)(T,{children:"decode & inspect"})]}),(0,f.jsx)(M,{}),(0,f.jsxs)(H,{ref:b,children:[(0,f.jsxs)(I,{onClick:()=>i(e=>!e),children:["Examples ",(0,f.jsx)(l.A,{size:12})]}),t&&(0,f.jsx)(N,{children:x.k.map(e=>(0,f.jsx)(q,{onClick:()=>{o(e.token),i(!1)},children:e.label},e.label))})]}),e]}),(0,f.jsxs)(A,{children:[(0,f.jsx)(S,{value:r,onChange:e=>o(e.target.value),placeholder:"Paste a JWT token here…",spellCheck:!1}),r.trim()&&(0,f.jsxs)(F,{children:[w?(0,f.jsxs)(B,{ok:!1,children:[(0,f.jsx)(s.A,{size:13})," Invalid JWT"]}):(0,f.jsxs)(B,{ok:!0,children:[(0,f.jsx)(a.A,{size:13})," Valid structure"]}),m&&(0,f.jsxs)(f.Fragment,{children:[V&&(0,f.jsxs)(R,{children:["alg: ",V]}),K&&(0,f.jsxs)(R,{children:[(0,f.jsx)(d.A,{size:11})," ",g(K)]}),G&&(()=>{const{text:e,expired:r}=h(G);return(0,f.jsxs)(O,{expired:r,children:[r?(0,f.jsx)(c.A,{size:11}):(0,f.jsx)(p.A,{size:11}),e]})})(),(0,f.jsxs)(R,{children:[Q," bytes"]})]})]}),w&&r.trim()&&(0,f.jsxs)(D,{children:[(0,f.jsx)(s.A,{size:15})," ",w]}),m?(0,f.jsxs)(C,{children:[(0,f.jsx)(y,{data:m.header,title:"Header"}),(0,f.jsx)(y,{data:m.payload,title:"Payload"}),(0,f.jsxs)(J,{children:[(0,f.jsx)(E,{children:"Signature"}),(0,f.jsxs)(W,{children:[(0,f.jsx)(L,{children:m.raw.signature}),(0,f.jsx)(_,{children:"Signature verification requires the secret key or public key and must be done server-side. This tool only decodes the token structure."})]})]})]}):r.trim()?null:(0,f.jsxs)(P,{children:[(0,f.jsx)(p.A,{size:40,strokeWidth:1}),"Paste a JWT token above to inspect it"]})]})]})}}}]);
//# sourceMappingURL=36.1f615f49c81cb8724aa5.js.map