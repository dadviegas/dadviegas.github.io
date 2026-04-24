"use strict";(self.webpackChunk_atlantis_jwtinspector=self.webpackChunk_atlantis_jwtinspector||[]).push([["5512"],{8997(e,r,n){var o=n(2727);r.createRoot=o.createRoot,o.hydrateRoot},3611(e,r,n){var o=n(5723),t=n(7991),i=n(8997),s=n(6859),l=n.n(s),a=n(3930),d=n(8311),c=n(5151);function p(e){let r=e.replace(/-/g,"+").replace(/_/g,"/"),n=r.length%4==0?"":"=".repeat(4-r.length%4);return atob(r+n)}function x(e){return new Date(1e3*e).toLocaleString()}function u(e){let r=1e3*e-Date.now();if(r<=0)return{text:"Expired",expired:!0};let n=Math.floor(r/1e3);if(n<60)return{text:`${n}s remaining`,expired:!1};let o=Math.floor(n/60);if(o<60)return{text:`${o}m remaining`,expired:!1};let t=Math.floor(o/60);if(t<24)return{text:`${t}h ${o%60}m remaining`,expired:!1};let i=Math.floor(t/24);return{text:`${i}d ${t%24}h remaining`,expired:!1}}let f=["exp","iat","nbf"],g=["iss","sub","aud","jti","scope","roles"];function h({k:e,v:r}){if(null===r)return(0,o.jsx)("span",{style:{color:"#8b949e"},children:"null"});if("boolean"==typeof r)return(0,o.jsx)("span",{style:{color:"#d2a8ff"},children:String(r)});if("number"==typeof r){let n=e&&f.includes(e);return(0,o.jsxs)("span",{children:[(0,o.jsx)("span",{style:{color:"#f78166"},children:r}),n&&(0,o.jsxs)("span",{style:{color:"#8b949e",fontSize:11,marginLeft:8},children:["(",x(r),")"]})]})}if("string"==typeof r){let n=e&&g.includes(e);return(0,o.jsxs)("span",{style:{color:n?a.w4.colors.accent:"#a5d6ff"},children:['"',r,'"']})}if(Array.isArray(r))return(0,o.jsxs)("span",{children:["[",r.map((e,n)=>(0,o.jsxs)("span",{children:[(0,o.jsx)(h,{v:e}),n<r.length-1?", ":""]},n)),"]"]});if("object"==typeof r){let e=Object.entries(r);return(0,o.jsxs)("span",{children:["{",(0,o.jsx)("br",{}),e.map(([r,n],t)=>(0,o.jsxs)("div",{style:{paddingLeft:16},children:[(0,o.jsxs)("span",{style:{color:"#79c0ff"},children:['"',r,'"']}),(0,o.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,o.jsx)(h,{k:r,v:n}),t<e.length-1?",":""]},r)),"}"]})}return(0,o.jsx)("span",{style:{color:"#8b949e"},children:String(r)})}function m({data:e,title:r}){let n=Object.entries(e);return(0,o.jsxs)(v,{children:[(0,o.jsx)(z,{children:r}),(0,o.jsxs)(T,{children:["{",n.map(([e,r],t)=>(0,o.jsxs)("div",{children:[(0,o.jsxs)("span",{style:{color:"#79c0ff"},children:['"',e,'"']}),(0,o.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,o.jsx)(h,{k:e,v:r}),t<n.length-1&&(0,o.jsx)("span",{style:{color:"#8b949e"},children:","}),"exp"===e&&"number"==typeof r&&(()=>{let{text:e,expired:n}=u(r);return(0,o.jsxs)(R,{expired:n,children:[n?(0,o.jsx)(d.In,{name:"shield-off",size:11}):(0,o.jsx)(d.In,{name:"shield",size:11}),e]})})()]},e)),"}"]})]})}let b=l().div`
  display: flex; flex-direction: column; flex: 1; overflow: hidden; padding: ${a.w4.spacing.lg}; gap: ${a.w4.spacing.md};
`,w=l().textarea`
  width: 100%; min-height: 80px; max-height: 120px;
  background: ${a.w4.colors.surface}; border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md}; padding: ${a.w4.spacing.md};
  font-family: ${a.w4.typography.fontFamilyMono}; font-size: 11px;
  color: ${a.w4.colors.mainText}; resize: vertical; outline: none; line-height: 1.5;
  transition: border-color ${a.w4.transitions.base}; flex-shrink: 0;
  &:focus { border-color: ${a.w4.colors.accent}; }
  &::placeholder { color: ${a.w4.colors.mainTextMuted}; }
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${a.w4.colors.border}; border-radius: 3px; }
`,j=l().div`
  display: flex; align-items: center; gap: ${a.w4.spacing.sm}; flex-shrink: 0;
`,y=l().div`
  display: flex; align-items: center; gap: 4px; font-size: 11px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
`,$=l().span`
  display: flex; align-items: center; gap: 4px; font-size: 11px;
  color: ${a.w4.colors.mainTextMuted}; background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border}; border-radius: 4px; padding: 2px 8px;
`,k=l().div`
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: ${a.w4.spacing.md};
  flex: 1; min-height: 0; overflow: hidden;
`,v=l().div`
  display: flex; flex-direction: column; background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border}; border-radius: ${a.w4.borderRadius.md}; overflow: hidden;
`,z=l().div`
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md}; font-size: 11px; font-weight: 700;
  letter-spacing: 0.07em; text-transform: uppercase; color: ${a.w4.colors.mainTextMuted};
  background: ${a.w4.colors.mainBg}; border-bottom: 1px solid ${a.w4.colors.border}; flex-shrink: 0;
`,T=l().div`
  flex: 1; overflow-y: auto; padding: ${a.w4.spacing.md};
  font-family: ${a.w4.typography.fontFamilyMono}; font-size: 11px; line-height: 1.7;
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${a.w4.colors.border}; border-radius: 3px; }
`,I=l().div`
  word-break: break-all; color: ${a.w4.colors.mainTextMuted};
  font-family: ${a.w4.typography.fontFamilyMono}; font-size: 11px; line-height: 1.6;
`,M=l().div`
  margin-top: ${a.w4.spacing.md}; padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  background: rgba(56,139,253,0.08); border: 1px solid rgba(56,139,253,0.2);
  border-radius: ${a.w4.borderRadius.sm}; font-size: 11px; color: ${a.w4.colors.mainTextMuted};
`,R=l().span`
  display: inline-flex; align-items: center; gap: 3px; margin-left: 8px;
  padding: 1px 6px; border-radius: 10px; font-size: 11px; font-weight: 600;
  font-family: ${a.w4.typography.fontFamily};
  background: ${e=>e.expired?"rgba(248,113,113,0.15)":"rgba(63,185,80,0.15)"};
  color: ${e=>e.expired?"#f87171":"#3fb950"};
  border: 1px solid ${e=>e.expired?"rgba(248,113,113,0.3)":"rgba(63,185,80,0.3)"};
`,E=l().div`
  flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column;
  gap: ${a.w4.spacing.sm}; color: ${a.w4.colors.mainTextMuted}; font-size: 14px;
`,S=l().div`
  display: flex; align-items: center; gap: ${a.w4.spacing.sm}; padding: ${a.w4.spacing.md};
  background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.25);
  border-radius: ${a.w4.borderRadius.md}; color: #f87171; font-size: 13px; flex-shrink: 0;
`,F=l().div`position: relative;`,C=l().button`
  display: flex; align-items: center; gap: 4px; padding: 0 ${a.w4.spacing.sm}; height: 30px;
  background: transparent; border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm}; color: ${a.w4.colors.mainTextMuted};
  font-size: 11px; font-family: ${a.w4.typography.fontFamily}; cursor: pointer;
  &:hover { border-color: ${a.w4.colors.accent}; color: ${a.w4.colors.mainText}; }
`,J=l().div`
  position: absolute; top: calc(100% + 4px); right: 0;
  background: ${a.w4.colors.surface}; border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md}; box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200; min-width: 200px; overflow: hidden;
`,L=l().button`
  display: block; width: 100%; text-align: left; padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  background: transparent; border: none; color: ${a.w4.colors.mainText};
  font-size: 13px; font-family: ${a.w4.typography.fontFamily}; cursor: pointer;
  &:hover { background: ${a.w4.colors.mainBg}; }
`,W="toolkit:jwtinspector",P=document.getElementById("root");if(!P)throw Error("Root element #root not found");(0,i.createRoot)(P).render((0,o.jsx)(function({topBarRight:e}){let[r,n]=(0,t.useState)(""),[i,s]=(0,t.useState)(!1),l=(0,t.useRef)(null),f=(0,t.useRef)(!1);(0,t.useEffect)(()=>{let e=e=>{l.current&&!l.current.contains(e.target)&&s(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,t.useEffect)(()=>{(0,a.PL)(W).then(e=>{e&&n(e),f.current=!0})},[]),(0,t.useEffect)(()=>{if(!f.current)return;let e=setTimeout(()=>(0,a.Is)(W,r),400);return()=>clearTimeout(e)},[r]);let{decoded:g,error:h}=(0,t.useMemo)(()=>(function(e){let r=e.trim().split(".");if(3!==r.length)return{decoded:null,error:"JWT must have exactly 3 parts separated by dots."};try{let e=JSON.parse(p(r[0])),n=JSON.parse(p(r[1]));return{decoded:{header:e,payload:n,signature:r[2],raw:{header:r[0],payload:r[1],signature:r[2]}},error:null}}catch(e){return{decoded:null,error:"Failed to decode: "+e.message}}})(r),[r]),P=g?.header.alg,_=g?.payload.exp,B=g?.payload.iat,O=new TextEncoder().encode(r).length,A=(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,o.jsxs)(C,{onClick:()=>{n(""),(0,a.Is)(W,"")},children:[(0,o.jsx)(d.In,{name:"file-plus",size:13})," New"]}),(0,o.jsxs)(F,{ref:l,children:[(0,o.jsxs)(C,{onClick:()=>s(e=>!e),children:["Examples ",(0,o.jsx)(d.In,{name:"chevron-down",size:12})]}),i&&(0,o.jsx)(J,{children:c.k.map(e=>(0,o.jsx)(L,{onClick:()=>{n(e.token),s(!1)},children:e.label},e.label))})]}),e]});return(0,o.jsx)(a.PE,{title:"JWT Inspector",sidebar:(0,o.jsx)(d.tz,{activeAppId:"jwtinspector"}),topBarRight:A,children:(0,o.jsxs)(b,{children:[(0,o.jsx)(w,{value:r,onChange:e=>n(e.target.value),placeholder:"Paste a JWT token here…",spellCheck:!1}),r.trim()&&(0,o.jsxs)(j,{children:[h?(0,o.jsxs)(y,{ok:!1,children:[(0,o.jsx)(d.In,{name:"alert-circle",size:13})," Invalid JWT"]}):(0,o.jsxs)(y,{ok:!0,children:[(0,o.jsx)(d.In,{name:"check-circle",size:13})," Valid structure"]}),g&&(0,o.jsxs)(o.Fragment,{children:[P&&(0,o.jsxs)($,{children:["alg: ",P]}),B&&(0,o.jsxs)($,{children:[(0,o.jsx)(d.In,{name:"clock",size:11})," ",x(B)]}),_&&(()=>{let{text:e,expired:r}=u(_);return(0,o.jsxs)(R,{expired:r,children:[r?(0,o.jsx)(d.In,{name:"shield-off",size:11}):(0,o.jsx)(d.In,{name:"shield",size:11}),e]})})(),(0,o.jsxs)($,{children:[O," bytes"]})]})]}),h&&r.trim()&&(0,o.jsxs)(S,{children:[(0,o.jsx)(d.In,{name:"alert-circle",size:15})," ",h]}),g?(0,o.jsxs)(k,{children:[(0,o.jsx)(m,{data:g.header,title:"Header"}),(0,o.jsx)(m,{data:g.payload,title:"Payload"}),(0,o.jsxs)(v,{children:[(0,o.jsx)(z,{children:"Signature"}),(0,o.jsxs)(T,{children:[(0,o.jsx)(I,{children:g.raw.signature}),(0,o.jsx)(M,{children:"Signature verification requires the secret key or public key and must be done server-side. This tool only decodes the token structure."})]})]})]}):r.trim()?null:(0,o.jsxs)(E,{children:[(0,o.jsx)(d.In,{name:"shield",size:40,strokeWidth:1}),"Paste a JWT token above to inspect it"]})]})})},{}))}}]);