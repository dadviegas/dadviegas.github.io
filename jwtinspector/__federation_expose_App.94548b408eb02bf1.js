"use strict";(self.webpackChunk_atlantis_jwtinspector=self.webpackChunk_atlantis_jwtinspector||[]).push([["6362"],{3935(e,r,i){i.r(r),i.d(r,{default:()=>D});var s=i(5723),t=i(7991),o=i(6859),n=i.n(o),l=i(5726),a=i(1638),d=i(2396),c=i(9248),p=i(1344),x=i(679),u=i(153),f=i(947),g=i(1783),h=i(5151);function b(e){let r=e.replace(/-/g,"+").replace(/_/g,"/"),i=r.length%4==0?"":"=".repeat(4-r.length%4);return atob(r+i)}function m(e){return new Date(1e3*e).toLocaleString()}function w(e){let r=1e3*e-Date.now();if(r<=0)return{text:"Expired",expired:!0};let i=Math.floor(r/1e3);if(i<60)return{text:`${i}s remaining`,expired:!1};let s=Math.floor(i/60);if(s<60)return{text:`${s}m remaining`,expired:!1};let t=Math.floor(s/60);if(t<24)return{text:`${t}h ${s%60}m remaining`,expired:!1};let o=Math.floor(t/24);return{text:`${o}d ${t%24}h remaining`,expired:!1}}let j=["exp","iat","nbf"],y=["iss","sub","aud","jti","scope","roles"];function $({k:e,v:r}){if(null===r)return(0,s.jsx)("span",{style:{color:"#8b949e"},children:"null"});if("boolean"==typeof r)return(0,s.jsx)("span",{style:{color:"#d2a8ff"},children:String(r)});if("number"==typeof r){let i=e&&j.includes(e);return(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{style:{color:"#f78166"},children:r}),i&&(0,s.jsxs)("span",{style:{color:"#8b949e",fontSize:11,marginLeft:8},children:["(",m(r),")"]})]})}if("string"==typeof r){let i=e&&y.includes(e);return(0,s.jsxs)("span",{style:{color:i?l.w4.colors.accent:"#a5d6ff"},children:['"',r,'"']})}if(Array.isArray(r))return(0,s.jsxs)("span",{children:["[",r.map((e,i)=>(0,s.jsxs)("span",{children:[(0,s.jsx)($,{v:e}),i<r.length-1?", ":""]},i)),"]"]});if("object"==typeof r){let e=Object.entries(r);return(0,s.jsxs)("span",{children:["{",(0,s.jsx)("br",{}),e.map(([r,i],t)=>(0,s.jsxs)("div",{style:{paddingLeft:16},children:[(0,s.jsxs)("span",{style:{color:"#79c0ff"},children:['"',r,'"']}),(0,s.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,s.jsx)($,{k:r,v:i}),t<e.length-1?",":""]},r)),"}"]})}return(0,s.jsx)("span",{style:{color:"#8b949e"},children:String(r)})}function k({data:e,title:r}){let i=Object.entries(e);return(0,s.jsxs)(E,{children:[(0,s.jsx)(R,{children:r}),(0,s.jsxs)(F,{children:["{",i.map(([e,r],t)=>(0,s.jsxs)("div",{children:[(0,s.jsxs)("span",{style:{color:"#79c0ff"},children:['"',e,'"']}),(0,s.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,s.jsx)($,{k:e,v:r}),t<i.length-1&&(0,s.jsx)("span",{style:{color:"#8b949e"},children:","}),"exp"===e&&"number"==typeof r&&(()=>{let{text:e,expired:i}=w(r);return(0,s.jsxs)(I,{expired:i,children:[i?(0,s.jsx)(d.A,{size:11}):(0,s.jsx)(c.A,{size:11}),e]})})()]},e)),"}"]})]})}let v=n().div`
  display: flex; flex-direction: column; flex: 1; overflow: hidden; padding: ${l.w4.spacing.lg}; gap: ${l.w4.spacing.md};
`,z=n().textarea`
  width: 100%; min-height: 80px; max-height: 120px;
  background: ${l.w4.colors.surface}; border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md}; padding: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamilyMono}; font-size: 12px;
  color: ${l.w4.colors.mainText}; resize: vertical; outline: none; line-height: 1.5;
  transition: border-color 0.15s; flex-shrink: 0;
  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${l.w4.colors.border}; border-radius: 3px; }
`,T=n().div`
  display: flex; align-items: center; gap: ${l.w4.spacing.sm}; flex-shrink: 0;
`,M=n().div`
  display: flex; align-items: center; gap: 4px; font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
`,A=n().span`
  display: flex; align-items: center; gap: 4px; font-size: 11px;
  color: ${l.w4.colors.mainTextMuted}; background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border}; border-radius: 4px; padding: 2px 8px;
`,S=n().div`
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: ${l.w4.spacing.md};
  flex: 1; min-height: 0; overflow: hidden;
`,E=n().div`
  display: flex; flex-direction: column; background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border}; border-radius: ${l.w4.borderRadius.md}; overflow: hidden;
`,R=n().div`
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md}; font-size: 11px; font-weight: 700;
  letter-spacing: 0.07em; text-transform: uppercase; color: ${l.w4.colors.mainTextMuted};
  background: ${l.w4.colors.mainBg}; border-bottom: 1px solid ${l.w4.colors.border}; flex-shrink: 0;
`,F=n().div`
  flex: 1; overflow-y: auto; padding: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamilyMono}; font-size: 12px; line-height: 1.7;
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${l.w4.colors.border}; border-radius: 3px; }
`,C=n().div`
  word-break: break-all; color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono}; font-size: 11px; line-height: 1.6;
`,J=n().div`
  margin-top: ${l.w4.spacing.md}; padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  background: rgba(56,139,253,0.08); border: 1px solid rgba(56,139,253,0.2);
  border-radius: ${l.w4.borderRadius.sm}; font-size: 11px; color: ${l.w4.colors.mainTextMuted};
`,I=n().span`
  display: inline-flex; align-items: center; gap: 3px; margin-left: 8px;
  padding: 1px 6px; border-radius: 10px; font-size: 10px; font-weight: 600;
  font-family: ${l.w4.typography.fontFamily};
  background: ${e=>e.expired?"rgba(248,113,113,0.15)":"rgba(63,185,80,0.15)"};
  color: ${e=>e.expired?"#f87171":"#3fb950"};
  border: 1px solid ${e=>e.expired?"rgba(248,113,113,0.3)":"rgba(63,185,80,0.3)"};
`,L=n().div`
  flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column;
  gap: ${l.w4.spacing.sm}; color: ${l.w4.colors.mainTextMuted}; font-size: 14px;
`,W=n().div`
  display: flex; align-items: center; gap: ${l.w4.spacing.sm}; padding: ${l.w4.spacing.md};
  background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.25);
  border-radius: ${l.w4.borderRadius.md}; color: #f87171; font-size: 13px; flex-shrink: 0;
`,P=n().div`position: relative;`,_=n().button`
  display: flex; align-items: center; gap: 4px; padding: 0 ${l.w4.spacing.sm}; height: 30px;
  background: transparent; border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm}; color: ${l.w4.colors.mainTextMuted};
  font-size: 12px; font-family: ${l.w4.typography.fontFamily}; cursor: pointer;
  &:hover { border-color: ${l.w4.colors.accent}; color: ${l.w4.colors.mainText}; }
`,O=n().div`
  position: absolute; top: calc(100% + 4px); right: 0;
  background: ${l.w4.colors.surface}; border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md}; box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200; min-width: 200px; overflow: hidden;
`,B=n().button`
  display: block; width: 100%; text-align: left; padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  background: transparent; border: none; color: ${l.w4.colors.mainText};
  font-size: 13px; font-family: ${l.w4.typography.fontFamily}; cursor: pointer;
  &:hover { background: ${l.w4.colors.mainBg}; }
`,N="toolkit:jwtinspector";function D({topBarRight:e}){let[r,i]=(0,t.useState)(""),[o,n]=(0,t.useState)(!1),j=(0,t.useRef)(null),y=(0,t.useRef)(!1);(0,t.useEffect)(()=>{let e=e=>{j.current&&!j.current.contains(e.target)&&n(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,t.useEffect)(()=>{(0,l.PL)(N).then(e=>{e&&i(e),y.current=!0})},[]),(0,t.useEffect)(()=>{if(!y.current)return;let e=setTimeout(()=>(0,l.Is)(N,r),400);return()=>clearTimeout(e)},[r]);let{decoded:$,error:q}=(0,t.useMemo)(()=>(function(e){let r=e.trim().split(".");if(3!==r.length)return{decoded:null,error:"JWT must have exactly 3 parts separated by dots."};try{let e=JSON.parse(b(r[0])),i=JSON.parse(b(r[1]));return{decoded:{header:e,payload:i,signature:r[2],raw:{header:r[0],payload:r[1],signature:r[2]}},error:null}}catch(e){return{decoded:null,error:"Failed to decode: "+e.message}}})(r),[r]),H=$?.header.alg,V=$?.payload.exp,G=$?.payload.iat,K=new TextEncoder().encode(r).length,Q=(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,s.jsxs)(_,{onClick:()=>{i(""),(0,l.Is)(N,"")},children:[(0,s.jsx)(p.A,{size:13})," New"]}),(0,s.jsxs)(P,{ref:j,children:[(0,s.jsxs)(_,{onClick:()=>n(e=>!e),children:["Examples ",(0,s.jsx)(x.A,{size:12})]}),o&&(0,s.jsx)(O,{children:h.k.map(e=>(0,s.jsx)(B,{onClick:()=>{i(e.token),n(!1)},children:e.label},e.label))})]}),e]});return(0,s.jsx)(l.PE,{title:"JWT Inspector",sidebar:(0,s.jsx)(a.tz,{activeAppId:"jwtinspector"}),topBarRight:Q,children:(0,s.jsxs)(v,{children:[(0,s.jsx)(z,{value:r,onChange:e=>i(e.target.value),placeholder:"Paste a JWT token here…",spellCheck:!1}),r.trim()&&(0,s.jsxs)(T,{children:[q?(0,s.jsxs)(M,{ok:!1,children:[(0,s.jsx)(u.A,{size:13})," Invalid JWT"]}):(0,s.jsxs)(M,{ok:!0,children:[(0,s.jsx)(f.A,{size:13})," Valid structure"]}),$&&(0,s.jsxs)(s.Fragment,{children:[H&&(0,s.jsxs)(A,{children:["alg: ",H]}),G&&(0,s.jsxs)(A,{children:[(0,s.jsx)(g.A,{size:11})," ",m(G)]}),V&&(()=>{let{text:e,expired:r}=w(V);return(0,s.jsxs)(I,{expired:r,children:[r?(0,s.jsx)(d.A,{size:11}):(0,s.jsx)(c.A,{size:11}),e]})})(),(0,s.jsxs)(A,{children:[K," bytes"]})]})]}),q&&r.trim()&&(0,s.jsxs)(W,{children:[(0,s.jsx)(u.A,{size:15})," ",q]}),$?(0,s.jsxs)(S,{children:[(0,s.jsx)(k,{data:$.header,title:"Header"}),(0,s.jsx)(k,{data:$.payload,title:"Payload"}),(0,s.jsxs)(E,{children:[(0,s.jsx)(R,{children:"Signature"}),(0,s.jsxs)(F,{children:[(0,s.jsx)(C,{children:$.raw.signature}),(0,s.jsx)(J,{children:"Signature verification requires the secret key or public key and must be done server-side. This tool only decodes the token structure."})]})]})]}):r.trim()?null:(0,s.jsxs)(L,{children:[(0,s.jsx)(c.A,{size:40,strokeWidth:1}),"Paste a JWT token above to inspect it"]})]})})}}}]);