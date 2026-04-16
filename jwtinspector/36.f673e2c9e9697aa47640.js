"use strict";(self.webpackChunk_atlantis_jwtinspector=self.webpackChunk_atlantis_jwtinspector||[]).push([[36],{6036(e,r,o){o.r(r),o.d(r,{default:()=>I});var t=o(7359),s=o(3233),n=o(894),i=o(153),a=o(947),d=o(679),l=o(1783),c=o(2396),p=o(9248),x=o(9336),u=o(5723);function f(e){const r=e.replace(/-/g,"+").replace(/_/g,"/"),o=r.length%4==0?"":"=".repeat(4-r.length%4);return atob(r+o)}function g(e){return new Date(1e3*e).toLocaleString()}function h(e){const r=1e3*e-Date.now();if(r<=0)return{text:"Expired",expired:!0};const o=Math.floor(r/1e3);if(o<60)return{text:`${o}s remaining`,expired:!1};const t=Math.floor(o/60);if(t<60)return{text:`${t}m remaining`,expired:!1};const s=Math.floor(t/60);return s<24?{text:`${s}h ${t%60}m remaining`,expired:!1}:{text:`${Math.floor(s/24)}d ${s%24}h remaining`,expired:!1}}const b=["exp","iat","nbf"],m=["iss","sub","aud","jti","scope","roles"];function w({k:e,v:r}){if(null===r)return(0,u.jsx)("span",{style:{color:"#8b949e"},children:"null"});if("boolean"==typeof r)return(0,u.jsx)("span",{style:{color:"#d2a8ff"},children:String(r)});if("number"==typeof r){const o=e&&b.includes(e);return(0,u.jsxs)("span",{children:[(0,u.jsx)("span",{style:{color:"#f78166"},children:r}),o&&(0,u.jsxs)("span",{style:{color:"#8b949e",fontSize:11,marginLeft:8},children:["(",g(r),")"]})]})}if("string"==typeof r){const o=e&&m.includes(e);return(0,u.jsxs)("span",{style:{color:o?n.w4.colors.accent:"#a5d6ff"},children:['"',r,'"']})}if(Array.isArray(r))return(0,u.jsxs)("span",{children:["[",r.map((e,o)=>(0,u.jsxs)("span",{children:[(0,u.jsx)(w,{v:e}),o<r.length-1?", ":""]},o)),"]"]});if("object"==typeof r){const e=Object.entries(r);return(0,u.jsxs)("span",{children:["{",(0,u.jsx)("br",{}),e.map(([r,o],t)=>(0,u.jsxs)("div",{style:{paddingLeft:16},children:[(0,u.jsxs)("span",{style:{color:"#79c0ff"},children:['"',r,'"']}),(0,u.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,u.jsx)(w,{k:r,v:o}),t<e.length-1?",":""]},r)),"}"]})}return(0,u.jsx)("span",{style:{color:"#8b949e"},children:String(r)})}function y({data:e,title:r}){const o=Object.entries(e);return(0,u.jsxs)(M,{children:[(0,u.jsx)(A,{children:r}),(0,u.jsxs)(S,{children:["{",o.map(([e,r],t)=>(0,u.jsxs)("div",{children:[(0,u.jsxs)("span",{style:{color:"#79c0ff"},children:['"',e,'"']}),(0,u.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,u.jsx)(w,{k:e,v:r}),t<o.length-1&&(0,u.jsx)("span",{style:{color:"#8b949e"},children:","}),"exp"===e&&"number"==typeof r&&(()=>{const{text:e,expired:o}=h(r);return(0,u.jsxs)(E,{expired:o,children:[o?(0,u.jsx)(c.A,{size:11}):(0,u.jsx)(p.A,{size:11}),e]})})()]},e)),"}"]})]})}const j=s.default.div`
  display: flex; flex-direction: column; flex: 1; overflow: hidden; padding: ${n.w4.spacing.lg}; gap: ${n.w4.spacing.md};
`,$=s.default.textarea`
  width: 100%; min-height: 80px; max-height: 120px;
  background: ${n.w4.colors.surface}; border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md}; padding: ${n.w4.spacing.md};
  font-family: ${n.w4.typography.fontFamilyMono}; font-size: 12px;
  color: ${n.w4.colors.mainText}; resize: vertical; outline: none; line-height: 1.5;
  transition: border-color 0.15s; flex-shrink: 0;
  &:focus { border-color: ${n.w4.colors.accent}; }
  &::placeholder { color: ${n.w4.colors.mainTextMuted}; }
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${n.w4.colors.border}; border-radius: 3px; }
`,k=s.default.div`
  display: flex; align-items: center; gap: ${n.w4.spacing.sm}; flex-shrink: 0;
`,v=s.default.div`
  display: flex; align-items: center; gap: 4px; font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
`,z=s.default.span`
  display: flex; align-items: center; gap: 4px; font-size: 11px;
  color: ${n.w4.colors.mainTextMuted}; background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border}; border-radius: 4px; padding: 2px 8px;
`,T=s.default.div`
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: ${n.w4.spacing.md};
  flex: 1; min-height: 0; overflow: hidden;
`,M=s.default.div`
  display: flex; flex-direction: column; background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border}; border-radius: ${n.w4.borderRadius.md}; overflow: hidden;
`,A=s.default.div`
  padding: ${n.w4.spacing.sm} ${n.w4.spacing.md}; font-size: 11px; font-weight: 700;
  letter-spacing: 0.07em; text-transform: uppercase; color: ${n.w4.colors.mainTextMuted};
  background: ${n.w4.colors.mainBg}; border-bottom: 1px solid ${n.w4.colors.border}; flex-shrink: 0;
`,S=s.default.div`
  flex: 1; overflow-y: auto; padding: ${n.w4.spacing.md};
  font-family: ${n.w4.typography.fontFamilyMono}; font-size: 12px; line-height: 1.7;
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${n.w4.colors.border}; border-radius: 3px; }
`,R=s.default.div`
  word-break: break-all; color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamilyMono}; font-size: 11px; line-height: 1.6;
`,F=s.default.div`
  margin-top: ${n.w4.spacing.md}; padding: ${n.w4.spacing.sm} ${n.w4.spacing.md};
  background: rgba(56,139,253,0.08); border: 1px solid rgba(56,139,253,0.2);
  border-radius: ${n.w4.borderRadius.sm}; font-size: 11px; color: ${n.w4.colors.mainTextMuted};
`,E=s.default.span`
  display: inline-flex; align-items: center; gap: 3px; margin-left: 8px;
  padding: 1px 6px; border-radius: 10px; font-size: 10px; font-weight: 600;
  font-family: ${n.w4.typography.fontFamily};
  background: ${e=>e.expired?"rgba(248,113,113,0.15)":"rgba(63,185,80,0.15)"};
  color: ${e=>e.expired?"#f87171":"#3fb950"};
  border: 1px solid ${e=>e.expired?"rgba(248,113,113,0.3)":"rgba(63,185,80,0.3)"};
`,J=s.default.div`
  flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column;
  gap: ${n.w4.spacing.sm}; color: ${n.w4.colors.mainTextMuted}; font-size: 14px;
`,C=s.default.div`
  display: flex; align-items: center; gap: ${n.w4.spacing.sm}; padding: ${n.w4.spacing.md};
  background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.25);
  border-radius: ${n.w4.borderRadius.md}; color: #f87171; font-size: 13px; flex-shrink: 0;
`,W=s.default.div`position: relative;`,L=s.default.button`
  display: flex; align-items: center; gap: 4px; padding: 0 ${n.w4.spacing.sm}; height: 30px;
  background: transparent; border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm}; color: ${n.w4.colors.mainTextMuted};
  font-size: 12px; font-family: ${n.w4.typography.fontFamily}; cursor: pointer;
  &:hover { border-color: ${n.w4.colors.accent}; color: ${n.w4.colors.mainText}; }
`,_=s.default.div`
  position: absolute; top: calc(100% + 4px); right: 0;
  background: ${n.w4.colors.surface}; border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md}; box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200; min-width: 200px; overflow: hidden;
`,B=s.default.button`
  display: block; width: 100%; text-align: left; padding: ${n.w4.spacing.sm} ${n.w4.spacing.md};
  background: transparent; border: none; color: ${n.w4.colors.mainText};
  font-size: 13px; font-family: ${n.w4.typography.fontFamily}; cursor: pointer;
  &:hover { background: ${n.w4.colors.mainBg}; }
`;function I({topBarRight:e}){const[r,o]=(0,t.useState)(x.k[0].token),[s,b]=(0,t.useState)(!1),m=(0,t.useRef)(null);(0,t.useEffect)(()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const{decoded:w,error:I}=(0,t.useMemo)(()=>function(e){const r=e.trim().split(".");if(3!==r.length)return{decoded:null,error:"JWT must have exactly 3 parts separated by dots."};try{return{decoded:{header:JSON.parse(f(r[0])),payload:JSON.parse(f(r[1])),signature:r[2],raw:{header:r[0],payload:r[1],signature:r[2]}},error:null}}catch(e){return{decoded:null,error:"Failed to decode: "+e.message}}}(r),[r]),O=w?.header.alg,P=w?.payload.exp,D=w?.payload.iat,N=(new TextEncoder).encode(r).length,q=(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,u.jsxs)(W,{ref:m,children:[(0,u.jsxs)(L,{onClick:()=>b(e=>!e),children:["Examples ",(0,u.jsx)(d.A,{size:12})]}),s&&(0,u.jsx)(_,{children:x.k.map(e=>(0,u.jsx)(B,{onClick:()=>{o(e.token),b(!1)},children:e.label},e.label))})]}),e]});return(0,u.jsx)(n.PE,{title:"JWT Inspector",sidebar:(0,u.jsx)(n.tz,{activeAppId:"jwtinspector"}),topBarRight:q,children:(0,u.jsxs)(j,{children:[(0,u.jsx)($,{value:r,onChange:e=>o(e.target.value),placeholder:"Paste a JWT token here…",spellCheck:!1}),r.trim()&&(0,u.jsxs)(k,{children:[I?(0,u.jsxs)(v,{ok:!1,children:[(0,u.jsx)(i.A,{size:13})," Invalid JWT"]}):(0,u.jsxs)(v,{ok:!0,children:[(0,u.jsx)(a.A,{size:13})," Valid structure"]}),w&&(0,u.jsxs)(u.Fragment,{children:[O&&(0,u.jsxs)(z,{children:["alg: ",O]}),D&&(0,u.jsxs)(z,{children:[(0,u.jsx)(l.A,{size:11})," ",g(D)]}),P&&(()=>{const{text:e,expired:r}=h(P);return(0,u.jsxs)(E,{expired:r,children:[r?(0,u.jsx)(c.A,{size:11}):(0,u.jsx)(p.A,{size:11}),e]})})(),(0,u.jsxs)(z,{children:[N," bytes"]})]})]}),I&&r.trim()&&(0,u.jsxs)(C,{children:[(0,u.jsx)(i.A,{size:15})," ",I]}),w?(0,u.jsxs)(T,{children:[(0,u.jsx)(y,{data:w.header,title:"Header"}),(0,u.jsx)(y,{data:w.payload,title:"Payload"}),(0,u.jsxs)(M,{children:[(0,u.jsx)(A,{children:"Signature"}),(0,u.jsxs)(S,{children:[(0,u.jsx)(R,{children:w.raw.signature}),(0,u.jsx)(F,{children:"Signature verification requires the secret key or public key and must be done server-side. This tool only decodes the token structure."})]})]})]}):r.trim()?null:(0,u.jsxs)(J,{children:[(0,u.jsx)(p.A,{size:40,strokeWidth:1}),"Paste a JWT token above to inspect it"]})]})})}}}]);
//# sourceMappingURL=36.f673e2c9e9697aa47640.js.map