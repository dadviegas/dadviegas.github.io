"use strict";(self.webpackChunk_atlantis_jwtinspector=self.webpackChunk_atlantis_jwtinspector||[]).push([["5512"],{8997(e,r,o){var t=o(2727);r.createRoot=t.createRoot,t.hydrateRoot},3611(e,r,o){var t=o(5723),i=o(7991),n=o(8997),s=o(6859),l=o.n(s),a=o(9336),d=o(1638),c=o(2396),p=o(9248),x=o(1344),u=o(679),f=o(153),g=o(947),h=o(1783),b=o(5151);function m(e){let r=e.replace(/-/g,"+").replace(/_/g,"/"),o=r.length%4==0?"":"=".repeat(4-r.length%4);return atob(r+o)}function w(e){return new Date(1e3*e).toLocaleString()}function j(e){let r=1e3*e-Date.now();if(r<=0)return{text:"Expired",expired:!0};let o=Math.floor(r/1e3);if(o<60)return{text:`${o}s remaining`,expired:!1};let t=Math.floor(o/60);if(t<60)return{text:`${t}m remaining`,expired:!1};let i=Math.floor(t/60);if(i<24)return{text:`${i}h ${t%60}m remaining`,expired:!1};let n=Math.floor(i/24);return{text:`${n}d ${i%24}h remaining`,expired:!1}}let y=["exp","iat","nbf"],$=["iss","sub","aud","jti","scope","roles"];function k({k:e,v:r}){if(null===r)return(0,t.jsx)("span",{style:{color:"#8b949e"},children:"null"});if("boolean"==typeof r)return(0,t.jsx)("span",{style:{color:"#d2a8ff"},children:String(r)});if("number"==typeof r){let o=e&&y.includes(e);return(0,t.jsxs)("span",{children:[(0,t.jsx)("span",{style:{color:"#f78166"},children:r}),o&&(0,t.jsxs)("span",{style:{color:"#8b949e",fontSize:11,marginLeft:8},children:["(",w(r),")"]})]})}if("string"==typeof r){let o=e&&$.includes(e);return(0,t.jsxs)("span",{style:{color:o?a.w4.colors.accent:"#a5d6ff"},children:['"',r,'"']})}if(Array.isArray(r))return(0,t.jsxs)("span",{children:["[",r.map((e,o)=>(0,t.jsxs)("span",{children:[(0,t.jsx)(k,{v:e}),o<r.length-1?", ":""]},o)),"]"]});if("object"==typeof r){let e=Object.entries(r);return(0,t.jsxs)("span",{children:["{",(0,t.jsx)("br",{}),e.map(([r,o],i)=>(0,t.jsxs)("div",{style:{paddingLeft:16},children:[(0,t.jsxs)("span",{style:{color:"#79c0ff"},children:['"',r,'"']}),(0,t.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,t.jsx)(k,{k:r,v:o}),i<e.length-1?",":""]},r)),"}"]})}return(0,t.jsx)("span",{style:{color:"#8b949e"},children:String(r)})}function v({data:e,title:r}){let o=Object.entries(e);return(0,t.jsxs)(S,{children:[(0,t.jsx)(F,{children:r}),(0,t.jsxs)(C,{children:["{",o.map(([e,r],i)=>(0,t.jsxs)("div",{children:[(0,t.jsxs)("span",{style:{color:"#79c0ff"},children:['"',e,'"']}),(0,t.jsx)("span",{style:{color:"#8b949e"},children:": "}),(0,t.jsx)(k,{k:e,v:r}),i<o.length-1&&(0,t.jsx)("span",{style:{color:"#8b949e"},children:","}),"exp"===e&&"number"==typeof r&&(()=>{let{text:e,expired:o}=j(r);return(0,t.jsxs)(L,{expired:o,children:[o?(0,t.jsx)(c.A,{size:11}):(0,t.jsx)(p.A,{size:11}),e]})})()]},e)),"}"]})]})}let z=l().div`
  display: flex; flex-direction: column; flex: 1; overflow: hidden; padding: ${a.w4.spacing.lg}; gap: ${a.w4.spacing.md};
`,T=l().textarea`
  width: 100%; min-height: 80px; max-height: 120px;
  background: ${a.w4.colors.surface}; border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md}; padding: ${a.w4.spacing.md};
  font-family: ${a.w4.typography.fontFamilyMono}; font-size: 12px;
  color: ${a.w4.colors.mainText}; resize: vertical; outline: none; line-height: 1.5;
  transition: border-color 0.15s; flex-shrink: 0;
  &:focus { border-color: ${a.w4.colors.accent}; }
  &::placeholder { color: ${a.w4.colors.mainTextMuted}; }
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${a.w4.colors.border}; border-radius: 3px; }
`,M=l().div`
  display: flex; align-items: center; gap: ${a.w4.spacing.sm}; flex-shrink: 0;
`,A=l().div`
  display: flex; align-items: center; gap: 4px; font-size: 12px;
  color: ${e=>e.ok?"#3fb950":"#f87171"};
`,R=l().span`
  display: flex; align-items: center; gap: 4px; font-size: 11px;
  color: ${a.w4.colors.mainTextMuted}; background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border}; border-radius: 4px; padding: 2px 8px;
`,E=l().div`
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: ${a.w4.spacing.md};
  flex: 1; min-height: 0; overflow: hidden;
`,S=l().div`
  display: flex; flex-direction: column; background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border}; border-radius: ${a.w4.borderRadius.md}; overflow: hidden;
`,F=l().div`
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md}; font-size: 11px; font-weight: 700;
  letter-spacing: 0.07em; text-transform: uppercase; color: ${a.w4.colors.mainTextMuted};
  background: ${a.w4.colors.mainBg}; border-bottom: 1px solid ${a.w4.colors.border}; flex-shrink: 0;
`,C=l().div`
  flex: 1; overflow-y: auto; padding: ${a.w4.spacing.md};
  font-family: ${a.w4.typography.fontFamilyMono}; font-size: 12px; line-height: 1.7;
  &::-webkit-scrollbar { width: 6px; } &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${a.w4.colors.border}; border-radius: 3px; }
`,I=l().div`
  word-break: break-all; color: ${a.w4.colors.mainTextMuted};
  font-family: ${a.w4.typography.fontFamilyMono}; font-size: 11px; line-height: 1.6;
`,J=l().div`
  margin-top: ${a.w4.spacing.md}; padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  background: rgba(56,139,253,0.08); border: 1px solid rgba(56,139,253,0.2);
  border-radius: ${a.w4.borderRadius.sm}; font-size: 11px; color: ${a.w4.colors.mainTextMuted};
`,L=l().span`
  display: inline-flex; align-items: center; gap: 3px; margin-left: 8px;
  padding: 1px 6px; border-radius: 10px; font-size: 10px; font-weight: 600;
  font-family: ${a.w4.typography.fontFamily};
  background: ${e=>e.expired?"rgba(248,113,113,0.15)":"rgba(63,185,80,0.15)"};
  color: ${e=>e.expired?"#f87171":"#3fb950"};
  border: 1px solid ${e=>e.expired?"rgba(248,113,113,0.3)":"rgba(63,185,80,0.3)"};
`,W=l().div`
  flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column;
  gap: ${a.w4.spacing.sm}; color: ${a.w4.colors.mainTextMuted}; font-size: 14px;
`,P=l().div`
  display: flex; align-items: center; gap: ${a.w4.spacing.sm}; padding: ${a.w4.spacing.md};
  background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.25);
  border-radius: ${a.w4.borderRadius.md}; color: #f87171; font-size: 13px; flex-shrink: 0;
`,_=l().div`position: relative;`,B=l().button`
  display: flex; align-items: center; gap: 4px; padding: 0 ${a.w4.spacing.sm}; height: 30px;
  background: transparent; border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm}; color: ${a.w4.colors.mainTextMuted};
  font-size: 12px; font-family: ${a.w4.typography.fontFamily}; cursor: pointer;
  &:hover { border-color: ${a.w4.colors.accent}; color: ${a.w4.colors.mainText}; }
`,O=l().div`
  position: absolute; top: calc(100% + 4px); right: 0;
  background: ${a.w4.colors.surface}; border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md}; box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200; min-width: 200px; overflow: hidden;
`,N=l().button`
  display: block; width: 100%; text-align: left; padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  background: transparent; border: none; color: ${a.w4.colors.mainText};
  font-size: 13px; font-family: ${a.w4.typography.fontFamily}; cursor: pointer;
  &:hover { background: ${a.w4.colors.mainBg}; }
`,D="toolkit:jwtinspector",q=document.getElementById("root");if(!q)throw Error("Root element #root not found");(0,n.createRoot)(q).render((0,t.jsx)(function({topBarRight:e}){let[r,o]=(0,i.useState)(""),[n,s]=(0,i.useState)(!1),l=(0,i.useRef)(null),y=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=e=>{l.current&&!l.current.contains(e.target)&&s(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,i.useEffect)(()=>{(0,a.PL)(D).then(e=>{e&&o(e),y.current=!0})},[]),(0,i.useEffect)(()=>{if(!y.current)return;let e=setTimeout(()=>(0,a.Is)(D,r),400);return()=>clearTimeout(e)},[r]);let{decoded:$,error:k}=(0,i.useMemo)(()=>(function(e){let r=e.trim().split(".");if(3!==r.length)return{decoded:null,error:"JWT must have exactly 3 parts separated by dots."};try{let e=JSON.parse(m(r[0])),o=JSON.parse(m(r[1]));return{decoded:{header:e,payload:o,signature:r[2],raw:{header:r[0],payload:r[1],signature:r[2]}},error:null}}catch(e){return{decoded:null,error:"Failed to decode: "+e.message}}})(r),[r]),q=$?.header.alg,H=$?.payload.exp,V=$?.payload.iat,G=new TextEncoder().encode(r).length,K=(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,t.jsxs)(B,{onClick:()=>{o(""),(0,a.Is)(D,"")},children:[(0,t.jsx)(x.A,{size:13})," New"]}),(0,t.jsxs)(_,{ref:l,children:[(0,t.jsxs)(B,{onClick:()=>s(e=>!e),children:["Examples ",(0,t.jsx)(u.A,{size:12})]}),n&&(0,t.jsx)(O,{children:b.k.map(e=>(0,t.jsx)(N,{onClick:()=>{o(e.token),s(!1)},children:e.label},e.label))})]}),e]});return(0,t.jsx)(a.PE,{title:"JWT Inspector",sidebar:(0,t.jsx)(d.tz,{activeAppId:"jwtinspector"}),topBarRight:K,children:(0,t.jsxs)(z,{children:[(0,t.jsx)(T,{value:r,onChange:e=>o(e.target.value),placeholder:"Paste a JWT token here…",spellCheck:!1}),r.trim()&&(0,t.jsxs)(M,{children:[k?(0,t.jsxs)(A,{ok:!1,children:[(0,t.jsx)(f.A,{size:13})," Invalid JWT"]}):(0,t.jsxs)(A,{ok:!0,children:[(0,t.jsx)(g.A,{size:13})," Valid structure"]}),$&&(0,t.jsxs)(t.Fragment,{children:[q&&(0,t.jsxs)(R,{children:["alg: ",q]}),V&&(0,t.jsxs)(R,{children:[(0,t.jsx)(h.A,{size:11})," ",w(V)]}),H&&(()=>{let{text:e,expired:r}=j(H);return(0,t.jsxs)(L,{expired:r,children:[r?(0,t.jsx)(c.A,{size:11}):(0,t.jsx)(p.A,{size:11}),e]})})(),(0,t.jsxs)(R,{children:[G," bytes"]})]})]}),k&&r.trim()&&(0,t.jsxs)(P,{children:[(0,t.jsx)(f.A,{size:15})," ",k]}),$?(0,t.jsxs)(E,{children:[(0,t.jsx)(v,{data:$.header,title:"Header"}),(0,t.jsx)(v,{data:$.payload,title:"Payload"}),(0,t.jsxs)(S,{children:[(0,t.jsx)(F,{children:"Signature"}),(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{children:$.raw.signature}),(0,t.jsx)(J,{children:"Signature verification requires the secret key or public key and must be done server-side. This tool only decodes the token structure."})]})]})]}):r.trim()?null:(0,t.jsxs)(W,{children:[(0,t.jsx)(p.A,{size:40,strokeWidth:1}),"Paste a JWT token above to inspect it"]})]})})},{}))}}]);