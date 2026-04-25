"use strict";(self.webpackChunk_atlantis_jwtinspector=self.webpackChunk_atlantis_jwtinspector||[]).push([["362"],{3935(e,r,n){n.r(r),n.d(r,{default:()=>W});var i=n(5723),s=n(7991),o=n(6859),t=n.n(o),l=n(9874),a=n(8311),d=n(5151);function c(e){let r=e.replace(/-/g,"+").replace(/_/g,"/"),n=r.length%4==0?"":"=".repeat(4-r.length%4);return atob(r+n)}function p(e){return new Date(1e3*e).toLocaleString()}function x(e){let r=1e3*e-Date.now();if(r<=0)return{text:"Expired",expired:!0};let n=Math.floor(r/1e3);if(n<60)return{text:`${n}s remaining`,expired:!1};let i=Math.floor(n/60);if(i<60)return{text:`${i}m remaining`,expired:!1};let s=Math.floor(i/60);if(s<24)return{text:`${s}h ${i%60}m remaining`,expired:!1};let o=Math.floor(s/24);return{text:`${o}d ${s%24}h remaining`,expired:!1}}let u=["exp","iat","nbf"],f=["iss","sub","aud","jti","scope","roles"];function g({k:e,v:r}){if(null===r)return(0,i.jsx)("span",{style:{color:"#8b949e"},children:"null"});if("boolean"==typeof r)return(0,i.jsx)("span",{style:{color:"#d2a8ff"},children:String(r)});if("number"==typeof r){let n=e&&u.includes(e);return(0,i.jsxs)("span",{children:[(0,i.jsx)("span",{style:{color:"#f78166"},children:r}),n&&(0,i.jsxs)("span",{style:{color:"#8b949e",fontSize:11,marginLeft:8},children:["(",p(r),")"]})]})}if("string"==typeof r){let n=e&&f.includes(e);return(0,i.jsxs)("span",{style:{color:n?l.w4.colors.accent:"#a5d6ff"},children:['"',r,'"']})}if(Array.isArray(r))return(0,i.jsxs)("span",{children:["[",r.map((e,n)=>(0,i.jsxs)("span",{children:[(0,i.jsx)(g,{v:e}),n<r.length-1?", ":""]},n)),"]"]});if("object"==typeof r){let e=Object.entries(r);return(0,i.jsxs)("span",{children:["{",(0,i.jsx)("br",{}),e.map(([r,n],s)=>(0,i.jsxs)("div",{style:{paddingLeft:16},children:[(0,i.jsxs)("span",{style:{color:"#79c0ff"},children:['"',r,'"']}),(0,i.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,i.jsx)(g,{k:r,v:n}),s<e.length-1?",":""]},r)),"}"]})}return(0,i.jsx)("span",{style:{color:"#8b949e"},children:String(r)})}function h({data:e,title:r}){let n=Object.entries(e);return(0,i.jsxs)(k,{children:[(0,i.jsx)(v,{children:r}),(0,i.jsxs)(z,{children:["{",n.map(([e,r],s)=>(0,i.jsxs)("div",{children:[(0,i.jsxs)("span",{style:{color:"#79c0ff"},children:['"',e,'"']}),(0,i.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,i.jsx)(g,{k:e,v:r}),s<n.length-1&&(0,i.jsx)("span",{style:{color:"#8b949e"},children:","}),"exp"===e&&"number"==typeof r&&(()=>{let{text:e,expired:n}=x(r);return(0,i.jsxs)(M,{expired:n,children:[n?(0,i.jsx)(a.In,{name:"shield-off",size:11}):(0,i.jsx)(a.In,{name:"shield",size:11}),e]})})()]},e)),"}"]})]})}let b=t().div`
  display: flex; flex-direction: column; flex: 1; overflow: hidden; padding: ${l.w4.spacing.lg}; gap: ${l.w4.spacing.md};
`,m=t().textarea`
  width: 100%; min-height: 80px; max-height: 120px;
  background: ${l.w4.colors.surface}; border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md}; padding: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamilyMono}; font-size: 11px;
  color: ${l.w4.colors.mainText}; resize: vertical; outline: none; line-height: 1.5;
  transition: border-color ${l.w4.transitions.base}; flex-shrink: 0;
  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${l.w4.colors.border}; border-radius: 3px; }
`,w=t().div`
  display: flex; align-items: center; gap: ${l.w4.spacing.sm}; flex-shrink: 0;
`,j=t().div`
  display: flex; align-items: center; gap: 4px; font-size: 11px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
`,y=t().span`
  display: flex; align-items: center; gap: 4px; font-size: 11px;
  color: ${l.w4.colors.mainTextMuted}; background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border}; border-radius: 4px; padding: 2px 8px;
`,$=t().div`
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: ${l.w4.spacing.md};
  flex: 1; min-height: 0; overflow: hidden;
`,k=t().div`
  display: flex; flex-direction: column; background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border}; border-radius: ${l.w4.borderRadius.md}; overflow: hidden;
`,v=t().div`
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md}; font-size: 11px; font-weight: 700;
  letter-spacing: 0.07em; text-transform: uppercase; color: ${l.w4.colors.mainTextMuted};
  background: ${l.w4.colors.mainBg}; border-bottom: 1px solid ${l.w4.colors.border}; flex-shrink: 0;
`,z=t().div`
  flex: 1; overflow-y: auto; padding: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamilyMono}; font-size: 11px; line-height: 1.7;
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${l.w4.colors.border}; border-radius: 3px; }
`,T=t().div`
  word-break: break-all; color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono}; font-size: 11px; line-height: 1.6;
`,I=t().div`
  margin-top: ${l.w4.spacing.md}; padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  background: rgba(56,139,253,0.08); border: 1px solid rgba(56,139,253,0.2);
  border-radius: ${l.w4.borderRadius.sm}; font-size: 11px; color: ${l.w4.colors.mainTextMuted};
`,M=t().span`
  display: inline-flex; align-items: center; gap: 3px; margin-left: 8px;
  padding: 1px 6px; border-radius: 10px; font-size: 11px; font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  background: ${e=>e.expired?"rgba(248,113,113,0.15)":"rgba(63,185,80,0.15)"};
  color: ${e=>e.expired?"#f87171":"#3fb950"};
  border: 1px solid ${e=>e.expired?"rgba(248,113,113,0.3)":"rgba(63,185,80,0.3)"};
`,S=t().div`
  flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column;
  gap: ${l.w4.spacing.sm}; color: ${l.w4.colors.mainTextMuted}; font-size: 14px;
`,E=t().div`
  display: flex; align-items: center; gap: ${l.w4.spacing.sm}; padding: ${l.w4.spacing.md};
  background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.25);
  border-radius: ${l.w4.borderRadius.md}; color: #f87171; font-size: 13px; flex-shrink: 0;
`,R=t().div`position: relative;`,F=t().button`
  display: flex; align-items: center; gap: 4px; padding: 0 ${l.w4.spacing.sm}; height: 30px;
  background: transparent; border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm}; color: ${l.w4.colors.mainTextMuted};
  font-size: 11px; font-family: ${l.w4.typography.fontFamily}; cursor: pointer;
  &:hover { border-color: ${l.w4.colors.accent}; color: ${l.w4.colors.mainText}; }
`,C=t().div`
  position: absolute; top: calc(100% + 4px); right: 0;
  background: ${l.w4.colors.surface}; border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md}; box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200; min-width: 200px; overflow: hidden;
`,J=t().button`
  display: block; width: 100%; text-align: left; padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  background: transparent; border: none; color: ${l.w4.colors.mainText};
  font-size: 13px; font-family: ${l.w4.typography.fontFamily}; cursor: pointer;
  &:hover { background: ${l.w4.colors.mainBg}; }
`,L="toolkit:jwtinspector";function W({topBarRight:e}){let[r,n]=(0,s.useState)(""),[o,t]=(0,s.useState)(!1),u=(0,s.useRef)(null),f=(0,s.useRef)(!1);(0,s.useEffect)(()=>{let e=e=>{u.current&&!u.current.contains(e.target)&&t(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,s.useEffect)(()=>{(0,l.PL)(L).then(e=>{e&&n(e),f.current=!0})},[]),(0,s.useEffect)(()=>{if(!f.current)return;let e=setTimeout(()=>(0,l.Is)(L,r),400);return()=>clearTimeout(e)},[r]);let{decoded:g,error:P}=(0,s.useMemo)(()=>(function(e){let r=e.trim().split(".");if(3!==r.length)return{decoded:null,error:"JWT must have exactly 3 parts separated by dots."};try{let e=JSON.parse(c(r[0])),n=JSON.parse(c(r[1]));return{decoded:{header:e,payload:n,signature:r[2],raw:{header:r[0],payload:r[1],signature:r[2]}},error:null}}catch(e){return{decoded:null,error:"Failed to decode: "+e.message}}})(r),[r]),_=g?.header.alg,O=g?.payload.exp,A=g?.payload.iat,B=new TextEncoder().encode(r).length,N=(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,i.jsxs)(F,{onClick:()=>{n(""),(0,l.Is)(L,"")},children:[(0,i.jsx)(a.In,{name:"file-plus",size:13})," New"]}),(0,i.jsxs)(R,{ref:u,children:[(0,i.jsxs)(F,{onClick:()=>t(e=>!e),children:["Examples ",(0,i.jsx)(a.In,{name:"chevron-down",size:12})]}),o&&(0,i.jsx)(C,{children:d.k.map(e=>(0,i.jsx)(J,{onClick:()=>{n(e.token),t(!1)},children:e.label},e.label))})]}),e]});return(0,i.jsx)(l.PE,{title:"JWT Inspector",sidebar:(0,i.jsx)(a.tz,{activeAppId:"jwtinspector"}),topBarRight:N,children:(0,i.jsxs)(b,{children:[(0,i.jsx)(m,{value:r,onChange:e=>n(e.target.value),placeholder:"Paste a JWT token here…",spellCheck:!1}),r.trim()&&(0,i.jsxs)(w,{children:[P?(0,i.jsxs)(j,{ok:!1,children:[(0,i.jsx)(a.In,{name:"alert-circle",size:13})," Invalid JWT"]}):(0,i.jsxs)(j,{ok:!0,children:[(0,i.jsx)(a.In,{name:"check-circle",size:13})," Valid structure"]}),g&&(0,i.jsxs)(i.Fragment,{children:[_&&(0,i.jsxs)(y,{children:["alg: ",_]}),A&&(0,i.jsxs)(y,{children:[(0,i.jsx)(a.In,{name:"clock",size:11})," ",p(A)]}),O&&(()=>{let{text:e,expired:r}=x(O);return(0,i.jsxs)(M,{expired:r,children:[r?(0,i.jsx)(a.In,{name:"shield-off",size:11}):(0,i.jsx)(a.In,{name:"shield",size:11}),e]})})(),(0,i.jsxs)(y,{children:[B," bytes"]})]})]}),P&&r.trim()&&(0,i.jsxs)(E,{children:[(0,i.jsx)(a.In,{name:"alert-circle",size:15})," ",P]}),g?(0,i.jsxs)($,{children:[(0,i.jsx)(h,{data:g.header,title:"Header"}),(0,i.jsx)(h,{data:g.payload,title:"Payload"}),(0,i.jsxs)(k,{children:[(0,i.jsx)(v,{children:"Signature"}),(0,i.jsxs)(z,{children:[(0,i.jsx)(T,{children:g.raw.signature}),(0,i.jsx)(I,{children:"Signature verification requires the secret key or public key and must be done server-side. This tool only decodes the token structure."})]})]})]}):r.trim()?null:(0,i.jsxs)(S,{children:[(0,i.jsx)(a.In,{name:"shield",size:40,strokeWidth:1}),"Paste a JWT token above to inspect it"]})]})})}}}]);