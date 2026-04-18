"use strict";(self.webpackChunk_atlantis_jwtinspector=self.webpackChunk_atlantis_jwtinspector||[]).push([[188],{188(e,r,o){var t=o(7359),s=o(8997),n=o(3233),i=o(458),a=o(2396),l=o(9248),d=o(1344),c=o(679),p=o(153),x=o(947),u=o(1783),f=o(9336),g=o(5723);function h(e){const r=e.replace(/-/g,"+").replace(/_/g,"/"),o=r.length%4==0?"":"=".repeat(4-r.length%4);return atob(r+o)}function b(e){return new Date(1e3*e).toLocaleString()}function m(e){const r=1e3*e-Date.now();if(r<=0)return{text:"Expired",expired:!0};const o=Math.floor(r/1e3);if(o<60)return{text:`${o}s remaining`,expired:!1};const t=Math.floor(o/60);if(t<60)return{text:`${t}m remaining`,expired:!1};const s=Math.floor(t/60);return s<24?{text:`${s}h ${t%60}m remaining`,expired:!1}:{text:`${Math.floor(s/24)}d ${s%24}h remaining`,expired:!1}}const w=["exp","iat","nbf"],j=["iss","sub","aud","jti","scope","roles"];function y({k:e,v:r}){if(null===r)return(0,g.jsx)("span",{style:{color:"#8b949e"},children:"null"});if("boolean"==typeof r)return(0,g.jsx)("span",{style:{color:"#d2a8ff"},children:String(r)});if("number"==typeof r){const o=e&&w.includes(e);return(0,g.jsxs)("span",{children:[(0,g.jsx)("span",{style:{color:"#f78166"},children:r}),o&&(0,g.jsxs)("span",{style:{color:"#8b949e",fontSize:11,marginLeft:8},children:["(",b(r),")"]})]})}if("string"==typeof r){const o=e&&j.includes(e);return(0,g.jsxs)("span",{style:{color:o?i.w4.colors.accent:"#a5d6ff"},children:['"',r,'"']})}if(Array.isArray(r))return(0,g.jsxs)("span",{children:["[",r.map((e,o)=>(0,g.jsxs)("span",{children:[(0,g.jsx)(y,{v:e}),o<r.length-1?", ":""]},o)),"]"]});if("object"==typeof r){const e=Object.entries(r);return(0,g.jsxs)("span",{children:["{",(0,g.jsx)("br",{}),e.map(([r,o],t)=>(0,g.jsxs)("div",{style:{paddingLeft:16},children:[(0,g.jsxs)("span",{style:{color:"#79c0ff"},children:['"',r,'"']}),(0,g.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,g.jsx)(y,{k:r,v:o}),t<e.length-1?",":""]},r)),"}"]})}return(0,g.jsx)("span",{style:{color:"#8b949e"},children:String(r)})}function $({data:e,title:r}){const o=Object.entries(e);return(0,g.jsxs)(R,{children:[(0,g.jsx)(E,{children:r}),(0,g.jsxs)(S,{children:["{",o.map(([e,r],t)=>(0,g.jsxs)("div",{children:[(0,g.jsxs)("span",{style:{color:"#79c0ff"},children:['"',e,'"']}),(0,g.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,g.jsx)(y,{k:e,v:r}),t<o.length-1&&(0,g.jsx)("span",{style:{color:"#8b949e"},children:","}),"exp"===e&&"number"==typeof r&&(()=>{const{text:e,expired:o}=m(r);return(0,g.jsxs)(I,{expired:o,children:[o?(0,g.jsx)(a.A,{size:11}):(0,g.jsx)(l.A,{size:11}),e]})})()]},e)),"}"]})]})}const k=n.default.div`
  display: flex; flex-direction: column; flex: 1; overflow: hidden; padding: ${i.w4.spacing.lg}; gap: ${i.w4.spacing.md};
`,v=n.default.textarea`
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
`,z=n.default.div`
  display: flex; align-items: center; gap: ${i.w4.spacing.sm}; flex-shrink: 0;
`,T=n.default.div`
  display: flex; align-items: center; gap: 4px; font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
`,M=n.default.span`
  display: flex; align-items: center; gap: 4px; font-size: 11px;
  color: ${i.w4.colors.mainTextMuted}; background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border}; border-radius: 4px; padding: 2px 8px;
`,A=n.default.div`
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: ${i.w4.spacing.md};
  flex: 1; min-height: 0; overflow: hidden;
`,R=n.default.div`
  display: flex; flex-direction: column; background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border}; border-radius: ${i.w4.borderRadius.md}; overflow: hidden;
`,E=n.default.div`
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md}; font-size: 11px; font-weight: 700;
  letter-spacing: 0.07em; text-transform: uppercase; color: ${i.w4.colors.mainTextMuted};
  background: ${i.w4.colors.mainBg}; border-bottom: 1px solid ${i.w4.colors.border}; flex-shrink: 0;
`,S=n.default.div`
  flex: 1; overflow-y: auto; padding: ${i.w4.spacing.md};
  font-family: ${i.w4.typography.fontFamilyMono}; font-size: 12px; line-height: 1.7;
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${i.w4.colors.border}; border-radius: 3px; }
`,F=n.default.div`
  word-break: break-all; color: ${i.w4.colors.mainTextMuted};
  font-family: ${i.w4.typography.fontFamilyMono}; font-size: 11px; line-height: 1.6;
`,C=n.default.div`
  margin-top: ${i.w4.spacing.md}; padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  background: rgba(56,139,253,0.08); border: 1px solid rgba(56,139,253,0.2);
  border-radius: ${i.w4.borderRadius.sm}; font-size: 11px; color: ${i.w4.colors.mainTextMuted};
`,I=n.default.span`
  display: inline-flex; align-items: center; gap: 3px; margin-left: 8px;
  padding: 1px 6px; border-radius: 10px; font-size: 10px; font-weight: 600;
  font-family: ${i.w4.typography.fontFamily};
  background: ${e=>e.expired?"rgba(248,113,113,0.15)":"rgba(63,185,80,0.15)"};
  color: ${e=>e.expired?"#f87171":"#3fb950"};
  border: 1px solid ${e=>e.expired?"rgba(248,113,113,0.3)":"rgba(63,185,80,0.3)"};
`,J=n.default.div`
  flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column;
  gap: ${i.w4.spacing.sm}; color: ${i.w4.colors.mainTextMuted}; font-size: 14px;
`,L=n.default.div`
  display: flex; align-items: center; gap: ${i.w4.spacing.sm}; padding: ${i.w4.spacing.md};
  background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.25);
  border-radius: ${i.w4.borderRadius.md}; color: #f87171; font-size: 13px; flex-shrink: 0;
`,W=n.default.div`position: relative;`,B=n.default.button`
  display: flex; align-items: center; gap: 4px; padding: 0 ${i.w4.spacing.sm}; height: 30px;
  background: transparent; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm}; color: ${i.w4.colors.mainTextMuted};
  font-size: 12px; font-family: ${i.w4.typography.fontFamily}; cursor: pointer;
  &:hover { border-color: ${i.w4.colors.accent}; color: ${i.w4.colors.mainText}; }
`,P=n.default.div`
  position: absolute; top: calc(100% + 4px); right: 0;
  background: ${i.w4.colors.surface}; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md}; box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200; min-width: 200px; overflow: hidden;
`,_=n.default.button`
  display: block; width: 100%; text-align: left; padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  background: transparent; border: none; color: ${i.w4.colors.mainText};
  font-size: 13px; font-family: ${i.w4.typography.fontFamily}; cursor: pointer;
  &:hover { background: ${i.w4.colors.mainBg}; }
`,O="toolkit:jwtinspector";function H({topBarRight:e}){const[r,o]=(0,t.useState)(""),[s,n]=(0,t.useState)(!1),w=(0,t.useRef)(null),j=(0,t.useRef)(!1);(0,t.useEffect)(()=>{const e=e=>{w.current&&!w.current.contains(e.target)&&n(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,t.useEffect)(()=>{(0,i.PL)(O).then(e=>{e&&o(e),j.current=!0})},[]),(0,t.useEffect)(()=>{if(!j.current)return;const e=setTimeout(()=>(0,i.Is)(O,r),400);return()=>clearTimeout(e)},[r]);const{decoded:y,error:H}=(0,t.useMemo)(()=>function(e){const r=e.trim().split(".");if(3!==r.length)return{decoded:null,error:"JWT must have exactly 3 parts separated by dots."};try{return{decoded:{header:JSON.parse(h(r[0])),payload:JSON.parse(h(r[1])),signature:r[2],raw:{header:r[0],payload:r[1],signature:r[2]}},error:null}}catch(e){return{decoded:null,error:"Failed to decode: "+e.message}}}(r),[r]),N=y?.header.alg,D=y?.payload.exp,q=y?.payload.iat,V=(new TextEncoder).encode(r).length,G=(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,g.jsxs)(B,{onClick:()=>{o(""),(0,i.Is)(O,"")},children:[(0,g.jsx)(d.A,{size:13})," New"]}),(0,g.jsxs)(W,{ref:w,children:[(0,g.jsxs)(B,{onClick:()=>n(e=>!e),children:["Examples ",(0,g.jsx)(c.A,{size:12})]}),s&&(0,g.jsx)(P,{children:f.k.map(e=>(0,g.jsx)(_,{onClick:()=>{o(e.token),n(!1)},children:e.label},e.label))})]}),e]});return(0,g.jsx)(i.PE,{title:"JWT Inspector",sidebar:(0,g.jsx)(i.tz,{activeAppId:"jwtinspector"}),topBarRight:G,children:(0,g.jsxs)(k,{children:[(0,g.jsx)(v,{value:r,onChange:e=>o(e.target.value),placeholder:"Paste a JWT token here…",spellCheck:!1}),r.trim()&&(0,g.jsxs)(z,{children:[H?(0,g.jsxs)(T,{ok:!1,children:[(0,g.jsx)(p.A,{size:13})," Invalid JWT"]}):(0,g.jsxs)(T,{ok:!0,children:[(0,g.jsx)(x.A,{size:13})," Valid structure"]}),y&&(0,g.jsxs)(g.Fragment,{children:[N&&(0,g.jsxs)(M,{children:["alg: ",N]}),q&&(0,g.jsxs)(M,{children:[(0,g.jsx)(u.A,{size:11})," ",b(q)]}),D&&(()=>{const{text:e,expired:r}=m(D);return(0,g.jsxs)(I,{expired:r,children:[r?(0,g.jsx)(a.A,{size:11}):(0,g.jsx)(l.A,{size:11}),e]})})(),(0,g.jsxs)(M,{children:[V," bytes"]})]})]}),H&&r.trim()&&(0,g.jsxs)(L,{children:[(0,g.jsx)(p.A,{size:15})," ",H]}),y?(0,g.jsxs)(A,{children:[(0,g.jsx)($,{data:y.header,title:"Header"}),(0,g.jsx)($,{data:y.payload,title:"Payload"}),(0,g.jsxs)(R,{children:[(0,g.jsx)(E,{children:"Signature"}),(0,g.jsxs)(S,{children:[(0,g.jsx)(F,{children:y.raw.signature}),(0,g.jsx)(C,{children:"Signature verification requires the secret key or public key and must be done server-side. This tool only decodes the token structure."})]})]})]}):r.trim()?null:(0,g.jsxs)(J,{children:[(0,g.jsx)(l.A,{size:40,strokeWidth:1}),"Paste a JWT token above to inspect it"]})]})})}const N=document.getElementById("root");if(!N)throw new Error("Root element #root not found");(0,s.H)(N).render((0,g.jsx)(H,{}))},8997(e,r,o){var t=o(8991);r.H=t.createRoot,t.hydrateRoot}}]);
//# sourceMappingURL=188.0464fc34a0b5186f244b.js.map