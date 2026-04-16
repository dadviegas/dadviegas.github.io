"use strict";(self.webpackChunk_atlantis_jwtinspector=self.webpackChunk_atlantis_jwtinspector||[]).push([[188],{188(e,r,o){var t=o(7359),n=o(8997),s=o(3233),i=o(894),a=o(2396),d=o(9248),l=o(679),c=o(153),p=o(947),x=o(1783),u=o(9336),f=o(5723);function g(e){const r=e.replace(/-/g,"+").replace(/_/g,"/"),o=r.length%4==0?"":"=".repeat(4-r.length%4);return atob(r+o)}function h(e){return new Date(1e3*e).toLocaleString()}function b(e){const r=1e3*e-Date.now();if(r<=0)return{text:"Expired",expired:!0};const o=Math.floor(r/1e3);if(o<60)return{text:`${o}s remaining`,expired:!1};const t=Math.floor(o/60);if(t<60)return{text:`${t}m remaining`,expired:!1};const n=Math.floor(t/60);return n<24?{text:`${n}h ${t%60}m remaining`,expired:!1}:{text:`${Math.floor(n/24)}d ${n%24}h remaining`,expired:!1}}const m=["exp","iat","nbf"],w=["iss","sub","aud","jti","scope","roles"];function y({k:e,v:r}){if(null===r)return(0,f.jsx)("span",{style:{color:"#8b949e"},children:"null"});if("boolean"==typeof r)return(0,f.jsx)("span",{style:{color:"#d2a8ff"},children:String(r)});if("number"==typeof r){const o=e&&m.includes(e);return(0,f.jsxs)("span",{children:[(0,f.jsx)("span",{style:{color:"#f78166"},children:r}),o&&(0,f.jsxs)("span",{style:{color:"#8b949e",fontSize:11,marginLeft:8},children:["(",h(r),")"]})]})}if("string"==typeof r){const o=e&&w.includes(e);return(0,f.jsxs)("span",{style:{color:o?i.w4.colors.accent:"#a5d6ff"},children:['"',r,'"']})}if(Array.isArray(r))return(0,f.jsxs)("span",{children:["[",r.map((e,o)=>(0,f.jsxs)("span",{children:[(0,f.jsx)(y,{v:e}),o<r.length-1?", ":""]},o)),"]"]});if("object"==typeof r){const e=Object.entries(r);return(0,f.jsxs)("span",{children:["{",(0,f.jsx)("br",{}),e.map(([r,o],t)=>(0,f.jsxs)("div",{style:{paddingLeft:16},children:[(0,f.jsxs)("span",{style:{color:"#79c0ff"},children:['"',r,'"']}),(0,f.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,f.jsx)(y,{k:r,v:o}),t<e.length-1?",":""]},r)),"}"]})}return(0,f.jsx)("span",{style:{color:"#8b949e"},children:String(r)})}function j({data:e,title:r}){const o=Object.entries(e);return(0,f.jsxs)(A,{children:[(0,f.jsx)(R,{children:r}),(0,f.jsxs)(S,{children:["{",o.map(([e,r],t)=>(0,f.jsxs)("div",{children:[(0,f.jsxs)("span",{style:{color:"#79c0ff"},children:['"',e,'"']}),(0,f.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,f.jsx)(y,{k:e,v:r}),t<o.length-1&&(0,f.jsx)("span",{style:{color:"#8b949e"},children:","}),"exp"===e&&"number"==typeof r&&(()=>{const{text:e,expired:o}=b(r);return(0,f.jsxs)(J,{expired:o,children:[o?(0,f.jsx)(a.A,{size:11}):(0,f.jsx)(d.A,{size:11}),e]})})()]},e)),"}"]})]})}const $=s.default.div`
  display: flex; flex-direction: column; flex: 1; overflow: hidden; padding: ${i.w4.spacing.lg}; gap: ${i.w4.spacing.md};
`,k=s.default.textarea`
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
`,v=s.default.div`
  display: flex; align-items: center; gap: ${i.w4.spacing.sm}; flex-shrink: 0;
`,z=s.default.div`
  display: flex; align-items: center; gap: 4px; font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
`,T=s.default.span`
  display: flex; align-items: center; gap: 4px; font-size: 11px;
  color: ${i.w4.colors.mainTextMuted}; background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border}; border-radius: 4px; padding: 2px 8px;
`,M=s.default.div`
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: ${i.w4.spacing.md};
  flex: 1; min-height: 0; overflow: hidden;
`,A=s.default.div`
  display: flex; flex-direction: column; background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border}; border-radius: ${i.w4.borderRadius.md}; overflow: hidden;
`,R=s.default.div`
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md}; font-size: 11px; font-weight: 700;
  letter-spacing: 0.07em; text-transform: uppercase; color: ${i.w4.colors.mainTextMuted};
  background: ${i.w4.colors.mainBg}; border-bottom: 1px solid ${i.w4.colors.border}; flex-shrink: 0;
`,S=s.default.div`
  flex: 1; overflow-y: auto; padding: ${i.w4.spacing.md};
  font-family: ${i.w4.typography.fontFamilyMono}; font-size: 12px; line-height: 1.7;
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${i.w4.colors.border}; border-radius: 3px; }
`,E=s.default.div`
  word-break: break-all; color: ${i.w4.colors.mainTextMuted};
  font-family: ${i.w4.typography.fontFamilyMono}; font-size: 11px; line-height: 1.6;
`,F=s.default.div`
  margin-top: ${i.w4.spacing.md}; padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  background: rgba(56,139,253,0.08); border: 1px solid rgba(56,139,253,0.2);
  border-radius: ${i.w4.borderRadius.sm}; font-size: 11px; color: ${i.w4.colors.mainTextMuted};
`,J=s.default.span`
  display: inline-flex; align-items: center; gap: 3px; margin-left: 8px;
  padding: 1px 6px; border-radius: 10px; font-size: 10px; font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  background: ${e=>e.expired?"rgba(248,113,113,0.15)":"rgba(63,185,80,0.15)"};
  color: ${e=>e.expired?"#f87171":"#3fb950"};
  border: 1px solid ${e=>e.expired?"rgba(248,113,113,0.3)":"rgba(63,185,80,0.3)"};
`,C=s.default.div`
  flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column;
  gap: ${i.w4.spacing.sm}; color: ${i.w4.colors.mainTextMuted}; font-size: 14px;
`,W=s.default.div`
  display: flex; align-items: center; gap: ${i.w4.spacing.sm}; padding: ${i.w4.spacing.md};
  background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.25);
  border-radius: ${i.w4.borderRadius.md}; color: #f87171; font-size: 13px; flex-shrink: 0;
`,B=s.default.div`position: relative;`,I=s.default.button`
  display: flex; align-items: center; gap: 4px; padding: 0 ${i.w4.spacing.sm}; height: 30px;
  background: transparent; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm}; color: ${i.w4.colors.mainTextMuted};
  font-size: 12px; font-family: ${i.w4.typography.fontFamily}; cursor: pointer;
  &:hover { border-color: ${i.w4.colors.accent}; color: ${i.w4.colors.mainText}; }
`,L=s.default.div`
  position: absolute; top: calc(100% + 4px); right: 0;
  background: ${i.w4.colors.surface}; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md}; box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200; min-width: 200px; overflow: hidden;
`,_=s.default.button`
  display: block; width: 100%; text-align: left; padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  background: transparent; border: none; color: ${i.w4.colors.mainText};
  font-size: 13px; font-family: ${i.w4.typography.fontFamily}; cursor: pointer;
  &:hover { background: ${i.w4.colors.mainBg}; }
`;function O({topBarRight:e}){const[r,o]=(0,t.useState)(u.k[0].token),[n,s]=(0,t.useState)(!1),m=(0,t.useRef)(null);(0,t.useEffect)(()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&s(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const{decoded:w,error:y}=(0,t.useMemo)(()=>function(e){const r=e.trim().split(".");if(3!==r.length)return{decoded:null,error:"JWT must have exactly 3 parts separated by dots."};try{return{decoded:{header:JSON.parse(g(r[0])),payload:JSON.parse(g(r[1])),signature:r[2],raw:{header:r[0],payload:r[1],signature:r[2]}},error:null}}catch(e){return{decoded:null,error:"Failed to decode: "+e.message}}}(r),[r]),O=w?.header.alg,P=w?.payload.exp,H=w?.payload.iat,D=(new TextEncoder).encode(r).length,N=(0,f.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,f.jsxs)(B,{ref:m,children:[(0,f.jsxs)(I,{onClick:()=>s(e=>!e),children:["Examples ",(0,f.jsx)(l.A,{size:12})]}),n&&(0,f.jsx)(L,{children:u.k.map(e=>(0,f.jsx)(_,{onClick:()=>{o(e.token),s(!1)},children:e.label},e.label))})]}),e]});return(0,f.jsx)(i.PE,{title:"JWT Inspector",sidebar:(0,f.jsx)(i.tz,{activeAppId:"jwtinspector"}),topBarRight:N,children:(0,f.jsxs)($,{children:[(0,f.jsx)(k,{value:r,onChange:e=>o(e.target.value),placeholder:"Paste a JWT token here…",spellCheck:!1}),r.trim()&&(0,f.jsxs)(v,{children:[y?(0,f.jsxs)(z,{ok:!1,children:[(0,f.jsx)(c.A,{size:13})," Invalid JWT"]}):(0,f.jsxs)(z,{ok:!0,children:[(0,f.jsx)(p.A,{size:13})," Valid structure"]}),w&&(0,f.jsxs)(f.Fragment,{children:[O&&(0,f.jsxs)(T,{children:["alg: ",O]}),H&&(0,f.jsxs)(T,{children:[(0,f.jsx)(x.A,{size:11})," ",h(H)]}),P&&(()=>{const{text:e,expired:r}=b(P);return(0,f.jsxs)(J,{expired:r,children:[r?(0,f.jsx)(a.A,{size:11}):(0,f.jsx)(d.A,{size:11}),e]})})(),(0,f.jsxs)(T,{children:[D," bytes"]})]})]}),y&&r.trim()&&(0,f.jsxs)(W,{children:[(0,f.jsx)(c.A,{size:15})," ",y]}),w?(0,f.jsxs)(M,{children:[(0,f.jsx)(j,{data:w.header,title:"Header"}),(0,f.jsx)(j,{data:w.payload,title:"Payload"}),(0,f.jsxs)(A,{children:[(0,f.jsx)(R,{children:"Signature"}),(0,f.jsxs)(S,{children:[(0,f.jsx)(E,{children:w.raw.signature}),(0,f.jsx)(F,{children:"Signature verification requires the secret key or public key and must be done server-side. This tool only decodes the token structure."})]})]})]}):r.trim()?null:(0,f.jsxs)(C,{children:[(0,f.jsx)(d.A,{size:40,strokeWidth:1}),"Paste a JWT token above to inspect it"]})]})})}const P=document.getElementById("root");if(!P)throw new Error("Root element #root not found");(0,n.H)(P).render((0,f.jsx)(O,{}))},8997(e,r,o){var t=o(8991);r.H=t.createRoot,t.hydrateRoot}}]);
//# sourceMappingURL=188.fbc937fe11deec2ea698.js.map