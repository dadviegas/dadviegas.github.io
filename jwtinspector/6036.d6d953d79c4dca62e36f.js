"use strict";(self.webpackChunk_atlantis_jwtinspector=self.webpackChunk_atlantis_jwtinspector||[]).push([[6036],{6036(e,r,t){t.r(r),t.d(r,{default:()=>N});var o=t(7359),s=t(3233),n=t(9200),i=t(3857),a=t(153),l=t(947),d=t(679),c=t(1783),p=t(1344),x=t(2396),u=t(9248),f=t(9336),g=t(5723);function h(e){const r=e.replace(/-/g,"+").replace(/_/g,"/"),t=r.length%4==0?"":"=".repeat(4-r.length%4);return atob(r+t)}function b(e){return new Date(1e3*e).toLocaleString()}function m(e){const r=1e3*e-Date.now();if(r<=0)return{text:"Expired",expired:!0};const t=Math.floor(r/1e3);if(t<60)return{text:`${t}s remaining`,expired:!1};const o=Math.floor(t/60);if(o<60)return{text:`${o}m remaining`,expired:!1};const s=Math.floor(o/60);return s<24?{text:`${s}h ${o%60}m remaining`,expired:!1}:{text:`${Math.floor(s/24)}d ${s%24}h remaining`,expired:!1}}const w=["exp","iat","nbf"],j=["iss","sub","aud","jti","scope","roles"];function y({k:e,v:r}){if(null===r)return(0,g.jsx)("span",{style:{color:"#8b949e"},children:"null"});if("boolean"==typeof r)return(0,g.jsx)("span",{style:{color:"#d2a8ff"},children:String(r)});if("number"==typeof r){const t=e&&w.includes(e);return(0,g.jsxs)("span",{children:[(0,g.jsx)("span",{style:{color:"#f78166"},children:r}),t&&(0,g.jsxs)("span",{style:{color:"#8b949e",fontSize:11,marginLeft:8},children:["(",b(r),")"]})]})}if("string"==typeof r){const t=e&&j.includes(e);return(0,g.jsxs)("span",{style:{color:t?n.w4.colors.accent:"#a5d6ff"},children:['"',r,'"']})}if(Array.isArray(r))return(0,g.jsxs)("span",{children:["[",r.map((e,t)=>(0,g.jsxs)("span",{children:[(0,g.jsx)(y,{v:e}),t<r.length-1?", ":""]},t)),"]"]});if("object"==typeof r){const e=Object.entries(r);return(0,g.jsxs)("span",{children:["{",(0,g.jsx)("br",{}),e.map(([r,t],o)=>(0,g.jsxs)("div",{style:{paddingLeft:16},children:[(0,g.jsxs)("span",{style:{color:"#79c0ff"},children:['"',r,'"']}),(0,g.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,g.jsx)(y,{k:r,v:t}),o<e.length-1?",":""]},r)),"}"]})}return(0,g.jsx)("span",{style:{color:"#8b949e"},children:String(r)})}function $({data:e,title:r}){const t=Object.entries(e);return(0,g.jsxs)(R,{children:[(0,g.jsx)(S,{children:r}),(0,g.jsxs)(E,{children:["{",t.map(([e,r],o)=>(0,g.jsxs)("div",{children:[(0,g.jsxs)("span",{style:{color:"#79c0ff"},children:['"',e,'"']}),(0,g.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,g.jsx)(y,{k:e,v:r}),o<t.length-1&&(0,g.jsx)("span",{style:{color:"#8b949e"},children:","}),"exp"===e&&"number"==typeof r&&(()=>{const{text:e,expired:t}=m(r);return(0,g.jsxs)(J,{expired:t,children:[t?(0,g.jsx)(x.A,{size:11}):(0,g.jsx)(u.A,{size:11}),e]})})()]},e)),"}"]})]})}const k=s.default.div`
  display: flex; flex-direction: column; flex: 1; overflow: hidden; padding: ${n.w4.spacing.lg}; gap: ${n.w4.spacing.md};
`,v=s.default.textarea`
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
`,z=s.default.div`
  display: flex; align-items: center; gap: ${n.w4.spacing.sm}; flex-shrink: 0;
`,T=s.default.div`
  display: flex; align-items: center; gap: 4px; font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
`,M=s.default.span`
  display: flex; align-items: center; gap: 4px; font-size: 11px;
  color: ${n.w4.colors.mainTextMuted}; background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border}; border-radius: 4px; padding: 2px 8px;
`,A=s.default.div`
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: ${n.w4.spacing.md};
  flex: 1; min-height: 0; overflow: hidden;
`,R=s.default.div`
  display: flex; flex-direction: column; background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border}; border-radius: ${n.w4.borderRadius.md}; overflow: hidden;
`,S=s.default.div`
  padding: ${n.w4.spacing.sm} ${n.w4.spacing.md}; font-size: 11px; font-weight: 700;
  letter-spacing: 0.07em; text-transform: uppercase; color: ${n.w4.colors.mainTextMuted};
  background: ${n.w4.colors.mainBg}; border-bottom: 1px solid ${n.w4.colors.border}; flex-shrink: 0;
`,E=s.default.div`
  flex: 1; overflow-y: auto; padding: ${n.w4.spacing.md};
  font-family: ${n.w4.typography.fontFamilyMono}; font-size: 12px; line-height: 1.7;
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${n.w4.colors.border}; border-radius: 3px; }
`,F=s.default.div`
  word-break: break-all; color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamilyMono}; font-size: 11px; line-height: 1.6;
`,C=s.default.div`
  margin-top: ${n.w4.spacing.md}; padding: ${n.w4.spacing.sm} ${n.w4.spacing.md};
  background: rgba(56,139,253,0.08); border: 1px solid rgba(56,139,253,0.2);
  border-radius: ${n.w4.borderRadius.sm}; font-size: 11px; color: ${n.w4.colors.mainTextMuted};
`,J=s.default.span`
  display: inline-flex; align-items: center; gap: 3px; margin-left: 8px;
  padding: 1px 6px; border-radius: 10px; font-size: 10px; font-weight: 600;
  font-family: ${n.w4.typography.fontFamily};
  background: ${e=>e.expired?"rgba(248,113,113,0.15)":"rgba(63,185,80,0.15)"};
  color: ${e=>e.expired?"#f87171":"#3fb950"};
  border: 1px solid ${e=>e.expired?"rgba(248,113,113,0.3)":"rgba(63,185,80,0.3)"};
`,I=s.default.div`
  flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column;
  gap: ${n.w4.spacing.sm}; color: ${n.w4.colors.mainTextMuted}; font-size: 14px;
`,L=s.default.div`
  display: flex; align-items: center; gap: ${n.w4.spacing.sm}; padding: ${n.w4.spacing.md};
  background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.25);
  border-radius: ${n.w4.borderRadius.md}; color: #f87171; font-size: 13px; flex-shrink: 0;
`,W=s.default.div`position: relative;`,P=s.default.button`
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
`,O="toolkit:jwtinspector";function N({topBarRight:e}){const[r,t]=(0,o.useState)(""),[s,w]=(0,o.useState)(!1),j=(0,o.useRef)(null),y=(0,o.useRef)(!1);(0,o.useEffect)(()=>{const e=e=>{j.current&&!j.current.contains(e.target)&&w(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,o.useEffect)(()=>{(0,n.PL)(O).then(e=>{e&&t(e),y.current=!0})},[]),(0,o.useEffect)(()=>{if(!y.current)return;const e=setTimeout(()=>(0,n.Is)(O,r),400);return()=>clearTimeout(e)},[r]);const{decoded:N,error:D}=(0,o.useMemo)(()=>function(e){const r=e.trim().split(".");if(3!==r.length)return{decoded:null,error:"JWT must have exactly 3 parts separated by dots."};try{return{decoded:{header:JSON.parse(h(r[0])),payload:JSON.parse(h(r[1])),signature:r[2],raw:{header:r[0],payload:r[1],signature:r[2]}},error:null}}catch(e){return{decoded:null,error:"Failed to decode: "+e.message}}}(r),[r]),q=N?.header.alg,H=N?.payload.exp,V=N?.payload.iat,G=(new TextEncoder).encode(r).length,K=(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,g.jsxs)(P,{onClick:()=>{t(""),(0,n.Is)(O,"")},children:[(0,g.jsx)(p.A,{size:13})," New"]}),(0,g.jsxs)(W,{ref:j,children:[(0,g.jsxs)(P,{onClick:()=>w(e=>!e),children:["Examples ",(0,g.jsx)(d.A,{size:12})]}),s&&(0,g.jsx)(_,{children:f.k.map(e=>(0,g.jsx)(B,{onClick:()=>{t(e.token),w(!1)},children:e.label},e.label))})]}),e]});return(0,g.jsx)(n.PE,{title:"JWT Inspector",sidebar:(0,g.jsx)(i.tz,{activeAppId:"jwtinspector"}),topBarRight:K,children:(0,g.jsxs)(k,{children:[(0,g.jsx)(v,{value:r,onChange:e=>t(e.target.value),placeholder:"Paste a JWT token here…",spellCheck:!1}),r.trim()&&(0,g.jsxs)(z,{children:[D?(0,g.jsxs)(T,{ok:!1,children:[(0,g.jsx)(a.A,{size:13})," Invalid JWT"]}):(0,g.jsxs)(T,{ok:!0,children:[(0,g.jsx)(l.A,{size:13})," Valid structure"]}),N&&(0,g.jsxs)(g.Fragment,{children:[q&&(0,g.jsxs)(M,{children:["alg: ",q]}),V&&(0,g.jsxs)(M,{children:[(0,g.jsx)(c.A,{size:11})," ",b(V)]}),H&&(()=>{const{text:e,expired:r}=m(H);return(0,g.jsxs)(J,{expired:r,children:[r?(0,g.jsx)(x.A,{size:11}):(0,g.jsx)(u.A,{size:11}),e]})})(),(0,g.jsxs)(M,{children:[G," bytes"]})]})]}),D&&r.trim()&&(0,g.jsxs)(L,{children:[(0,g.jsx)(a.A,{size:15})," ",D]}),N?(0,g.jsxs)(A,{children:[(0,g.jsx)($,{data:N.header,title:"Header"}),(0,g.jsx)($,{data:N.payload,title:"Payload"}),(0,g.jsxs)(R,{children:[(0,g.jsx)(S,{children:"Signature"}),(0,g.jsxs)(E,{children:[(0,g.jsx)(F,{children:N.raw.signature}),(0,g.jsx)(C,{children:"Signature verification requires the secret key or public key and must be done server-side. This tool only decodes the token structure."})]})]})]}):r.trim()?null:(0,g.jsxs)(I,{children:[(0,g.jsx)(u.A,{size:40,strokeWidth:1}),"Paste a JWT token above to inspect it"]})]})})}}}]);