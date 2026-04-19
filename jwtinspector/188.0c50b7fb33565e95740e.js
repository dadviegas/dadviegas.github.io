"use strict";(self.webpackChunk_atlantis_jwtinspector=self.webpackChunk_atlantis_jwtinspector||[]).push([[188],{188(e,r,o){var t=o(7359),s=o(8997),n=o(3233),i=o(9200),a=o(8608),l=o(2396),d=o(9248),c=o(1344),p=o(679),x=o(153),u=o(947),f=o(1783),g=o(9336),h=o(5723);function b(e){const r=e.replace(/-/g,"+").replace(/_/g,"/"),o=r.length%4==0?"":"=".repeat(4-r.length%4);return atob(r+o)}function m(e){return new Date(1e3*e).toLocaleString()}function w(e){const r=1e3*e-Date.now();if(r<=0)return{text:"Expired",expired:!0};const o=Math.floor(r/1e3);if(o<60)return{text:`${o}s remaining`,expired:!1};const t=Math.floor(o/60);if(t<60)return{text:`${t}m remaining`,expired:!1};const s=Math.floor(t/60);return s<24?{text:`${s}h ${t%60}m remaining`,expired:!1}:{text:`${Math.floor(s/24)}d ${s%24}h remaining`,expired:!1}}const j=["exp","iat","nbf"],y=["iss","sub","aud","jti","scope","roles"];function $({k:e,v:r}){if(null===r)return(0,h.jsx)("span",{style:{color:"#8b949e"},children:"null"});if("boolean"==typeof r)return(0,h.jsx)("span",{style:{color:"#d2a8ff"},children:String(r)});if("number"==typeof r){const o=e&&j.includes(e);return(0,h.jsxs)("span",{children:[(0,h.jsx)("span",{style:{color:"#f78166"},children:r}),o&&(0,h.jsxs)("span",{style:{color:"#8b949e",fontSize:11,marginLeft:8},children:["(",m(r),")"]})]})}if("string"==typeof r){const o=e&&y.includes(e);return(0,h.jsxs)("span",{style:{color:o?i.w4.colors.accent:"#a5d6ff"},children:['"',r,'"']})}if(Array.isArray(r))return(0,h.jsxs)("span",{children:["[",r.map((e,o)=>(0,h.jsxs)("span",{children:[(0,h.jsx)($,{v:e}),o<r.length-1?", ":""]},o)),"]"]});if("object"==typeof r){const e=Object.entries(r);return(0,h.jsxs)("span",{children:["{",(0,h.jsx)("br",{}),e.map(([r,o],t)=>(0,h.jsxs)("div",{style:{paddingLeft:16},children:[(0,h.jsxs)("span",{style:{color:"#79c0ff"},children:['"',r,'"']}),(0,h.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,h.jsx)($,{k:r,v:o}),t<e.length-1?",":""]},r)),"}"]})}return(0,h.jsx)("span",{style:{color:"#8b949e"},children:String(r)})}function k({data:e,title:r}){const o=Object.entries(e);return(0,h.jsxs)(E,{children:[(0,h.jsx)(S,{children:r}),(0,h.jsxs)(F,{children:["{",o.map(([e,r],t)=>(0,h.jsxs)("div",{children:[(0,h.jsxs)("span",{style:{color:"#79c0ff"},children:['"',e,'"']}),(0,h.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,h.jsx)($,{k:e,v:r}),t<o.length-1&&(0,h.jsx)("span",{style:{color:"#8b949e"},children:","}),"exp"===e&&"number"==typeof r&&(()=>{const{text:e,expired:o}=w(r);return(0,h.jsxs)(J,{expired:o,children:[o?(0,h.jsx)(l.A,{size:11}):(0,h.jsx)(d.A,{size:11}),e]})})()]},e)),"}"]})]})}const v=n.default.div`
  display: flex; flex-direction: column; flex: 1; overflow: hidden; padding: ${i.w4.spacing.lg}; gap: ${i.w4.spacing.md};
`,z=n.default.textarea`
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
`,T=n.default.div`
  display: flex; align-items: center; gap: ${i.w4.spacing.sm}; flex-shrink: 0;
`,M=n.default.div`
  display: flex; align-items: center; gap: 4px; font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
`,A=n.default.span`
  display: flex; align-items: center; gap: 4px; font-size: 11px;
  color: ${i.w4.colors.mainTextMuted}; background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border}; border-radius: 4px; padding: 2px 8px;
`,R=n.default.div`
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: ${i.w4.spacing.md};
  flex: 1; min-height: 0; overflow: hidden;
`,E=n.default.div`
  display: flex; flex-direction: column; background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border}; border-radius: ${i.w4.borderRadius.md}; overflow: hidden;
`,S=n.default.div`
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md}; font-size: 11px; font-weight: 700;
  letter-spacing: 0.07em; text-transform: uppercase; color: ${i.w4.colors.mainTextMuted};
  background: ${i.w4.colors.mainBg}; border-bottom: 1px solid ${i.w4.colors.border}; flex-shrink: 0;
`,F=n.default.div`
  flex: 1; overflow-y: auto; padding: ${i.w4.spacing.md};
  font-family: ${i.w4.typography.fontFamilyMono}; font-size: 12px; line-height: 1.7;
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${i.w4.colors.border}; border-radius: 3px; }
`,C=n.default.div`
  word-break: break-all; color: ${i.w4.colors.mainTextMuted};
  font-family: ${i.w4.typography.fontFamilyMono}; font-size: 11px; line-height: 1.6;
`,I=n.default.div`
  margin-top: ${i.w4.spacing.md}; padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  background: rgba(56,139,253,0.08); border: 1px solid rgba(56,139,253,0.2);
  border-radius: ${i.w4.borderRadius.sm}; font-size: 11px; color: ${i.w4.colors.mainTextMuted};
`,J=n.default.span`
  display: inline-flex; align-items: center; gap: 3px; margin-left: 8px;
  padding: 1px 6px; border-radius: 10px; font-size: 10px; font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  background: ${e=>e.expired?"rgba(248,113,113,0.15)":"rgba(63,185,80,0.15)"};
  color: ${e=>e.expired?"#f87171":"#3fb950"};
  border: 1px solid ${e=>e.expired?"rgba(248,113,113,0.3)":"rgba(63,185,80,0.3)"};
`,L=n.default.div`
  flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column;
  gap: ${i.w4.spacing.sm}; color: ${i.w4.colors.mainTextMuted}; font-size: 14px;
`,W=n.default.div`
  display: flex; align-items: center; gap: ${i.w4.spacing.sm}; padding: ${i.w4.spacing.md};
  background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.25);
  border-radius: ${i.w4.borderRadius.md}; color: #f87171; font-size: 13px; flex-shrink: 0;
`,B=n.default.div`position: relative;`,P=n.default.button`
  display: flex; align-items: center; gap: 4px; padding: 0 ${i.w4.spacing.sm}; height: 30px;
  background: transparent; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm}; color: ${i.w4.colors.mainTextMuted};
  font-size: 12px; font-family: ${i.w4.typography.fontFamily}; cursor: pointer;
  &:hover { border-color: ${i.w4.colors.accent}; color: ${i.w4.colors.mainText}; }
`,_=n.default.div`
  position: absolute; top: calc(100% + 4px); right: 0;
  background: ${i.w4.colors.surface}; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md}; box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200; min-width: 200px; overflow: hidden;
`,O=n.default.button`
  display: block; width: 100%; text-align: left; padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  background: transparent; border: none; color: ${i.w4.colors.mainText};
  font-size: 13px; font-family: ${i.w4.typography.fontFamily}; cursor: pointer;
  &:hover { background: ${i.w4.colors.mainBg}; }
`,H="toolkit:jwtinspector";function N({topBarRight:e}){const[r,o]=(0,t.useState)(""),[s,n]=(0,t.useState)(!1),j=(0,t.useRef)(null),y=(0,t.useRef)(!1);(0,t.useEffect)(()=>{const e=e=>{j.current&&!j.current.contains(e.target)&&n(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,t.useEffect)(()=>{(0,i.PL)(H).then(e=>{e&&o(e),y.current=!0})},[]),(0,t.useEffect)(()=>{if(!y.current)return;const e=setTimeout(()=>(0,i.Is)(H,r),400);return()=>clearTimeout(e)},[r]);const{decoded:$,error:N}=(0,t.useMemo)(()=>function(e){const r=e.trim().split(".");if(3!==r.length)return{decoded:null,error:"JWT must have exactly 3 parts separated by dots."};try{return{decoded:{header:JSON.parse(b(r[0])),payload:JSON.parse(b(r[1])),signature:r[2],raw:{header:r[0],payload:r[1],signature:r[2]}},error:null}}catch(e){return{decoded:null,error:"Failed to decode: "+e.message}}}(r),[r]),D=$?.header.alg,q=$?.payload.exp,V=$?.payload.iat,G=(new TextEncoder).encode(r).length,K=(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,h.jsxs)(P,{onClick:()=>{o(""),(0,i.Is)(H,"")},children:[(0,h.jsx)(c.A,{size:13})," New"]}),(0,h.jsxs)(B,{ref:j,children:[(0,h.jsxs)(P,{onClick:()=>n(e=>!e),children:["Examples ",(0,h.jsx)(p.A,{size:12})]}),s&&(0,h.jsx)(_,{children:g.k.map(e=>(0,h.jsx)(O,{onClick:()=>{o(e.token),n(!1)},children:e.label},e.label))})]}),e]});return(0,h.jsx)(i.PE,{title:"JWT Inspector",sidebar:(0,h.jsx)(a.tz,{activeAppId:"jwtinspector"}),topBarRight:K,children:(0,h.jsxs)(v,{children:[(0,h.jsx)(z,{value:r,onChange:e=>o(e.target.value),placeholder:"Paste a JWT token here…",spellCheck:!1}),r.trim()&&(0,h.jsxs)(T,{children:[N?(0,h.jsxs)(M,{ok:!1,children:[(0,h.jsx)(x.A,{size:13})," Invalid JWT"]}):(0,h.jsxs)(M,{ok:!0,children:[(0,h.jsx)(u.A,{size:13})," Valid structure"]}),$&&(0,h.jsxs)(h.Fragment,{children:[D&&(0,h.jsxs)(A,{children:["alg: ",D]}),V&&(0,h.jsxs)(A,{children:[(0,h.jsx)(f.A,{size:11})," ",m(V)]}),q&&(()=>{const{text:e,expired:r}=w(q);return(0,h.jsxs)(J,{expired:r,children:[r?(0,h.jsx)(l.A,{size:11}):(0,h.jsx)(d.A,{size:11}),e]})})(),(0,h.jsxs)(A,{children:[G," bytes"]})]})]}),N&&r.trim()&&(0,h.jsxs)(W,{children:[(0,h.jsx)(x.A,{size:15})," ",N]}),$?(0,h.jsxs)(R,{children:[(0,h.jsx)(k,{data:$.header,title:"Header"}),(0,h.jsx)(k,{data:$.payload,title:"Payload"}),(0,h.jsxs)(E,{children:[(0,h.jsx)(S,{children:"Signature"}),(0,h.jsxs)(F,{children:[(0,h.jsx)(C,{children:$.raw.signature}),(0,h.jsx)(I,{children:"Signature verification requires the secret key or public key and must be done server-side. This tool only decodes the token structure."})]})]})]}):r.trim()?null:(0,h.jsxs)(L,{children:[(0,h.jsx)(d.A,{size:40,strokeWidth:1}),"Paste a JWT token above to inspect it"]})]})})}const D=document.getElementById("root");if(!D)throw new Error("Root element #root not found");(0,s.H)(D).render((0,h.jsx)(N,{}))},8997(e,r,o){var t=o(8991);r.H=t.createRoot,t.hydrateRoot}}]);