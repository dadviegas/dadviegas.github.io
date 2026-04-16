"use strict";(self.webpackChunk_atlantis_apiexplorer=self.webpackChunk_atlantis_apiexplorer||[]).push([[36],{6036(e,o,r){r.r(o),r.d(o,{default:()=>ve});var t=r(7359),n=r(3233),a=r(5723),s=r(5609),l=r(1783),i=r(320),d=r(1365),c=r(6480),p=r(8739),x=r(4872),h=r(8104);const f="apiexplorer",u={GET:"#3fb950",POST:"#a371f7",PUT:"#d29922",PATCH:"#f78166",DELETE:"#f85149",HEAD:"#58a6ff",OPTIONS:"#bc8cff"},g=[{label:"JSONPlaceholder — posts",req:{method:"GET",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Accept",value:"application/json",enabled:!0}],params:[{key:"_limit",value:"5",enabled:!0}],body:"",bodyType:"none"}},{label:"IP Geolocation",req:{method:"GET",url:"https://ipapi.co/json",headers:[],params:[],body:"",bodyType:"none"}},{label:"Open-Meteo weather (Lisbon)",req:{method:"GET",url:"https://api.open-meteo.com/v1/forecast",headers:[],params:[{key:"latitude",value:"38.72",enabled:!0},{key:"longitude",value:"-9.14",enabled:!0},{key:"current_weather",value:"true",enabled:!0}],body:"",bodyType:"none"}},{label:"POST — create post",req:{method:"POST",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Content-Type",value:"application/json",enabled:!0},{key:"Accept",value:"application/json",enabled:!0}],params:[],body:JSON.stringify({title:"Hello World",body:"API Explorer test",userId:1},null,2),bodyType:"json"}}],m="atlantis:apiexplorer:history";function y(){try{return JSON.parse(localStorage.getItem(m)??"[]")}catch{return[]}}function b(e){try{localStorage.setItem(m,JSON.stringify(e.slice(0,50)))}catch{}}function w(e){try{const o=JSON.parse(e);return{pretty:JSON.stringify(o,null,2),isJson:!0}}catch{return{pretty:e,isJson:!1}}}const $=n.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${a.w4.colors.mainBg};
  font-family: ${a.w4.typography.fontFamily};
  color: ${a.w4.colors.mainText};
  overflow: hidden;
`,j=n.default.header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  min-height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${a.w4.colors.sidebarBg};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  padding-left: max(${a.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${a.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  gap: ${a.w4.spacing.md};
  flex-shrink: 0;
`,v=n.default.button`
  font-size: ${a.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${a.w4.colors.mainText};
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  span { color: ${a.w4.colors.accent}; }
  &:hover span { color: ${a.w4.colors.accentHover}; }
`,k=n.default.span`
  color: ${a.w4.colors.border};
  margin: 0 2px;
`,T=n.default.div`
  font-size: ${a.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${a.w4.colors.mainText};
  flex-shrink: 0;
`,z=n.default.div` flex: 1; `,C=n.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
`,S=n.default.div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,M=n.default.div`
  width: 240px;
  min-width: 240px;
  border-right: 1px solid ${a.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${a.w4.colors.sidebarBg};
`,E=n.default.div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${a.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,B=n.default.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 3px;
  &:hover { color: ${a.w4.colors.mainText}; background: ${a.w4.colors.sidebarHover}; }
`,A=n.default.div`
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
`,F=n.default.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6px 12px;
  background: ${({selected:e})=>e?a.w4.colors.sidebarHover:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 2px;
  transition: background 0.1s;
  &:hover { background: ${a.w4.colors.sidebarHover}; }
`,O=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  min-width: 0;
`,H=n.default.span`
  font-size: 10px;
  font-weight: 700;
  font-family: ${a.w4.typography.fontFamilyMono};
  color: ${({method:e})=>u[e]};
  flex-shrink: 0;
`,R=n.default.span`
  font-size: 11px;
  color: ${a.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,q=n.default.span`
  font-size: 10px;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamilyMono};
`,P=n.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,J=n.default.div`
  border-top: 1px solid ${a.w4.colors.sidebarBorder};
  padding-bottom: 4px;
`,N=n.default.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  &:hover { background: ${a.w4.colors.sidebarHover}; }
`,I=n.default.span`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,D=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`,L=n.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  background: ${a.w4.colors.surface};
  flex-shrink: 0;
`,_=n.default.select`
  height: 34px;
  padding: 0 8px;
  background: ${a.w4.colors.sidebarBg};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${({method:e})=>u[e]};
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  option { color: ${a.w4.colors.mainText}; }
`,G=n.default.input`
  flex: 1;
  height: 34px;
  padding: 0 ${a.w4.spacing.md};
  background: ${a.w4.colors.mainBg};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${a.w4.colors.mainText};
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 13px;
  outline: none;
  min-width: 0;
  transition: border-color 0.15s;
  &::placeholder { color: ${a.w4.colors.sidebarTextMuted}; }
  &:focus { border-color: ${a.w4.colors.accent}; }
`,U=n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 16px;
  background: ${a.w4.colors.accent};
  border: none;
  border-radius: ${a.w4.borderRadius.sm};
  color: #fff;
  font-family: ${a.w4.typography.fontFamily};
  font-size: ${a.w4.typography.fontSizeBase};
  font-weight: 600;
  cursor: ${({loading:e})=>e?"wait":"pointer"};
  opacity: ${({loading:e})=>e?.7:1};
  transition: opacity 0.15s, background 0.15s;
  flex-shrink: 0;
  &:hover:not(:disabled) { background: #4493f8; }
`,K=n.default.div`
  display: flex;
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  background: ${a.w4.colors.sidebarBg};
  flex-shrink: 0;
  padding: 0 ${a.w4.spacing.md};
  gap: 2px;
`,W=n.default.button`
  height: 36px;
  padding: 0 12px;
  background: none;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?a.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?a.w4.colors.mainText:a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
  font-size: ${a.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?600:400};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${a.w4.colors.mainText}; }
`,Z=n.default.span`
  margin-left: 5px;
  font-size: 10px;
  background: ${a.w4.colors.border};
  color: ${a.w4.colors.sidebarTextMuted};
  border-radius: 8px;
  padding: 1px 5px;
`,Q=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: ${a.w4.spacing.md};
  overflow-y: auto;
`,V=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,X=n.default.input`
  cursor: pointer;
  accent-color: ${a.w4.colors.accent};
  flex-shrink: 0;
`,Y=n.default.input`
  flex: 1;
  height: 30px;
  padding: 0 8px;
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${a.w4.colors.mainText};
  font-family: ${({mono:e})=>e?a.w4.typography.fontFamilyMono:a.w4.typography.fontFamily};
  font-size: 12px;
  outline: none;
  min-width: 0;
  &::placeholder { color: ${a.w4.colors.sidebarTextMuted}; }
  &:focus { border-color: ${a.w4.colors.accent}; }
`,ee=n.default.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  border-radius: 3px;
  flex-shrink: 0;
  &:hover { color: ${a.w4.colors.mainText}; background: ${a.w4.colors.sidebarHover}; }
`,oe=n.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 28px;
  padding: 0 8px;
  background: none;
  border: 1px dashed ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
  font-size: 12px;
  cursor: pointer;
  align-self: flex-start;
  transition: border-color 0.15s, color 0.15s;
  &:hover { border-color: ${a.w4.colors.accent}; color: ${a.w4.colors.accent}; }
`,re=n.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,te=n.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,ne=n.default.span`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
`,ae=n.default.button`
  height: 24px;
  padding: 0 10px;
  background: ${({active:e})=>e?"rgba(88,166,255,0.12)":"none"};
  border: 1px solid ${({active:e})=>e?a.w4.colors.accent:a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${({active:e})=>e?a.w4.colors.accent:a.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;
  &:hover { border-color: ${a.w4.colors.accent}; color: ${a.w4.colors.accent}; }
`,se=n.default.textarea`
  flex: 1;
  padding: ${a.w4.spacing.md};
  background: ${a.w4.colors.mainBg};
  border: none;
  color: ${a.w4.colors.mainText};
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12px;
  line-height: 1.6;
  resize: none;
  outline: none;
  min-height: 0;
`,le=n.default.div`
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
`,ie=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-right: 1px solid ${a.w4.colors.sidebarBorder};
  overflow: hidden;
`,de=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`,ce=n.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.md};
  padding: 6px ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  background: ${a.w4.colors.surface};
  flex-shrink: 0;
`,pe=n.default.span`
  font-size: 12px;
  font-weight: 700;
  font-family: ${a.w4.typography.fontFamilyMono};
  color: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,xe=n.default.span`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamilyMono};
`,he=n.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  padding: 0 8px;
  background: none;
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":a.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;
  margin-left: auto;
  transition: all 0.15s;
  &:hover { border-color: ${a.w4.colors.accent}; color: ${a.w4.colors.accent}; }
`,fe=n.default.div`
  flex: 1;
  overflow: auto;
  padding: ${a.w4.spacing.md};
`,ue=n.default.pre`
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12px;
  line-height: 1.7;
  color: ${a.w4.colors.mainText};
  white-space: pre-wrap;
  word-break: break-all;
  margin: 0;
`,ge=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${a.w4.spacing.sm};
  color: ${a.w4.colors.sidebarTextMuted};
  font-size: ${a.w4.typography.fontSizeBase};
`,me=n.default.div`
  font-size: 32px;
  opacity: 0.4;
`,ye=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: ${a.w4.spacing.md};
`,be=n.default.div`
  display: flex;
  gap: ${a.w4.spacing.md};
  font-size: 12px;
  font-family: ${a.w4.typography.fontFamilyMono};
  padding: 3px 0;
  border-bottom: 1px solid ${a.w4.colors.border};
`,we=n.default.span`
  color: ${a.w4.colors.accent};
  min-width: 200px;
  flex-shrink: 0;
`,$e=n.default.span`
  color: ${a.w4.colors.mainText};
  word-break: break-all;
`,je=n.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 28px;
  padding: 0 10px;
  background: none;
  border: 1px solid ${a.w4.colors.sidebarBorder};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
  font-size: 12px;
  cursor: pointer;
  transition: all 0.15s;
  &:hover { border-color: ${a.w4.colors.accent}; color: ${a.w4.colors.accent}; }
`;function ve({topBarRight:e}){const[o,r]=(0,t.useState)(g[0].req),[n,u]=(0,t.useState)(null),[m,ve]=(0,t.useState)(!1),[ke,Te]=(0,t.useState)(null),[ze,Ce]=(0,t.useState)("params"),[Se,Me]=(0,t.useState)("body"),[Ee,Be]=(0,t.useState)(y),[Ae,Fe]=(0,t.useState)(!1),[Oe,He]=(0,t.useState)(!1),Re=(0,t.useRef)(null),qe=(0,t.useCallback)((e,o)=>{r(r=>({...r,[e]:o}))},[]),Pe=(e,r,t)=>{const n=[...o.headers];n[e][r]=t,qe("headers",n)},Je=(e,r,t)=>{const n=[...o.params];n[e][r]=t,qe("params",n)},Ne=(0,t.useCallback)(async()=>{if(!o.url.trim())return;Re.current?.abort();const e=new AbortController;Re.current=e,ve(!0),Te(null),u(null);const r=performance.now();try{const t=function(e,o){const r=o.filter(e=>e.enabled&&e.key.trim());if(!r.length)return e;const t=r.map(e=>`${encodeURIComponent(e.key)}=${encodeURIComponent(e.value)}`).join("&");return e.includes("?")?`${e}&${t}`:`${e}?${t}`}(o.url.trim(),o.params),n={};let a;o.headers.filter(e=>e.enabled&&e.key.trim()).forEach(e=>{n[e.key.trim()]=e.value}),"none"!==o.bodyType&&"GET"!==o.method&&"HEAD"!==o.method&&(a=o.body,"json"!==o.bodyType||n["Content-Type"]||n["content-type"]||(n["Content-Type"]="application/json"));const s=await fetch(t,{method:o.method,headers:n,body:a,signal:e.signal}),l=await s.text(),i=Math.round(performance.now()-r),d=(new TextEncoder).encode(l).length,c={};s.headers.forEach((e,o)=>{c[o]=e});const p={status:s.status,statusText:s.statusText,headers:c,body:l,timing:i,size:d};u(p);const x={id:`${Date.now()}-${Math.random()}`,method:o.method,url:o.url,timestamp:Date.now(),status:s.status};Be(e=>{const o=[x,...e];return b(o),o})}catch(e){if("AbortError"===e.name)return;Te(e instanceof Error?e.message:"Request failed")}finally{ve(!1)}},[o]);(0,t.useEffect)(()=>{const e=e=>{(e.ctrlKey||e.metaKey)&&"Enter"===e.key&&(e.preventDefault(),Ne())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[Ne]);const[Ie,De]=(0,t.useState)(null),{pretty:Le,isJson:_e}=n?w(n.body):{pretty:"",isJson:!1},Ge=o.headers.filter(e=>e.enabled&&e.key.trim()).length,Ue=o.params.filter(e=>e.enabled&&e.key.trim()).length;return(0,h.jsxs)($,{children:[(0,h.jsxs)(j,{children:[(0,h.jsxs)(v,{onClick:()=>{window.location.hash="#/home"},children:["Atl",(0,h.jsx)("span",{children:"antis"})]}),(0,h.jsx)(k,{children:"/"}),(0,h.jsx)(T,{children:"API Explorer"}),(0,h.jsx)(z,{}),(0,h.jsxs)(C,{children:[(0,h.jsx)(a.UO,{appId:f,onLoad:(e,o,t)=>{De(o&&t?{id:o,name:t}:null);try{const o=JSON.parse(e);1===o.version&&r(o.request)}catch{}}}),(0,h.jsxs)(je,{onClick:()=>He(!0),children:[(0,h.jsx)(c.A,{size:13}),"Save"]}),e]})]}),(0,h.jsxs)(S,{children:[(0,h.jsxs)(M,{children:[(0,h.jsxs)(E,{children:["History",Ee.length>0&&(0,h.jsx)(B,{title:"Clear history",onClick:()=>{Be([]),b([])},children:(0,h.jsx)(x.A,{size:12})})]}),(0,h.jsxs)(A,{style:{flex:Ee.length?1:0},children:[0===Ee.length&&(0,h.jsx)("div",{style:{padding:"8px 12px",fontSize:11,color:a.w4.colors.sidebarTextMuted},children:"No requests yet"}),Ee.map(e=>(0,h.jsxs)(F,{onClick:()=>r(o=>({...o,method:e.method,url:e.url})),children:[(0,h.jsxs)(O,{children:[e.status&&(0,h.jsx)(P,{status:e.status}),(0,h.jsx)(H,{method:e.method,children:e.method}),(0,h.jsx)(R,{children:e.url.replace(/^https?:\/\//,"")})]}),(0,h.jsxs)(q,{children:[e.status&&(0,h.jsxs)("span",{children:[e.status," · "]}),new Date(e.timestamp).toLocaleTimeString()]})]},e.id))]}),(0,h.jsxs)(J,{children:[(0,h.jsx)(E,{children:"Examples"}),g.map(e=>(0,h.jsxs)(N,{onClick:()=>r(e.req),children:[(0,h.jsx)(H,{method:e.req.method,children:e.req.method}),(0,h.jsx)(I,{children:e.label})]},e.label))]})]}),(0,h.jsxs)(D,{children:[(0,h.jsxs)(L,{children:[(0,h.jsx)(_,{method:o.method,value:o.method,onChange:e=>qe("method",e.target.value),children:["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"].map(e=>(0,h.jsx)("option",{value:e,children:e},e))}),(0,h.jsx)(G,{value:o.url,onChange:e=>qe("url",e.target.value),placeholder:"https://api.example.com/endpoint",onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||Ne()}}),(0,h.jsxs)(U,{loading:m,onClick:Ne,disabled:m,children:[(0,h.jsx)(p.A,{size:14}),m?"Sending…":"Send"]})]}),(0,h.jsxs)(le,{children:[(0,h.jsxs)(ie,{children:[(0,h.jsxs)(K,{children:[(0,h.jsxs)(W,{active:"params"===ze,onClick:()=>Ce("params"),children:["Params",Ue>0&&(0,h.jsx)(Z,{children:Ue})]}),(0,h.jsxs)(W,{active:"headers"===ze,onClick:()=>Ce("headers"),children:["Headers",Ge>0&&(0,h.jsx)(Z,{children:Ge})]}),(0,h.jsx)(W,{active:"body"===ze,onClick:()=>Ce("body"),children:"Body"})]}),"params"===ze&&(0,h.jsxs)(Q,{children:[o.params.map((e,r)=>(0,h.jsxs)(V,{children:[(0,h.jsx)(X,{type:"checkbox",checked:e.enabled,onChange:e=>Je(r,"enabled",e.target.checked)}),(0,h.jsx)(Y,{mono:!0,placeholder:"key",value:e.key,onChange:e=>Je(r,"key",e.target.value)}),(0,h.jsx)(Y,{mono:!0,placeholder:"value",value:e.value,onChange:e=>Je(r,"value",e.target.value)}),(0,h.jsx)(ee,{onClick:()=>(e=>qe("params",o.params.filter((o,r)=>r!==e)))(r),children:(0,h.jsx)(x.A,{size:12})})]},r)),(0,h.jsxs)(oe,{onClick:()=>qe("params",[...o.params,{key:"",value:"",enabled:!0}]),children:[(0,h.jsx)(d.A,{size:12})," Add param"]})]}),"headers"===ze&&(0,h.jsxs)(Q,{children:[o.headers.map((e,r)=>(0,h.jsxs)(V,{children:[(0,h.jsx)(X,{type:"checkbox",checked:e.enabled,onChange:e=>Pe(r,"enabled",e.target.checked)}),(0,h.jsx)(Y,{mono:!0,placeholder:"Header-Name",value:e.key,onChange:e=>Pe(r,"key",e.target.value)}),(0,h.jsx)(Y,{mono:!0,placeholder:"value",value:e.value,onChange:e=>Pe(r,"value",e.target.value)}),(0,h.jsx)(ee,{onClick:()=>(e=>qe("headers",o.headers.filter((o,r)=>r!==e)))(r),children:(0,h.jsx)(x.A,{size:12})})]},r)),(0,h.jsxs)(oe,{onClick:()=>qe("headers",[...o.headers,{key:"",value:"",enabled:!0}]),children:[(0,h.jsx)(d.A,{size:12})," Add header"]})]}),"body"===ze&&(0,h.jsxs)(re,{children:[(0,h.jsxs)(te,{children:[(0,h.jsx)(ne,{children:"Body type:"}),["none","json","text","form"].map(e=>(0,h.jsx)(ae,{active:o.bodyType===e,onClick:()=>qe("bodyType",e),children:e},e))]}),"none"!==o.bodyType?(0,h.jsx)(se,{value:o.body,onChange:e=>qe("body",e.target.value),placeholder:"json"===o.bodyType?'{\n  "key": "value"\n}':"Request body…",spellCheck:!1}):(0,h.jsxs)(ge,{style:{flex:1},children:[(0,h.jsx)(me,{children:"⊘"}),(0,h.jsx)("span",{children:"No body"})]})]})]}),(0,h.jsxs)(de,{children:[ke&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(ce,{children:[(0,h.jsx)(pe,{status:0,children:"Error"}),(0,h.jsx)(xe,{children:ke})]}),(0,h.jsxs)(ge,{children:[(0,h.jsx)(me,{children:"⚠"}),(0,h.jsx)("span",{style:{color:"#f85149"},children:ke}),(0,h.jsx)("span",{style:{fontSize:12,marginTop:4},children:"Check the URL or CORS headers on the server."})]})]}),!n&&!ke&&!m&&(0,h.jsxs)(ge,{children:[(0,h.jsx)(me,{children:"🛰"}),(0,h.jsx)("span",{children:"Hit Send to fire a request"}),(0,h.jsx)("span",{style:{fontSize:12},children:"⌘↵ / Ctrl↵ to send"})]}),m&&(0,h.jsxs)(ge,{children:[(0,h.jsx)(me,{style:{animation:"spin 1s linear infinite"},children:"⟳"}),(0,h.jsx)("span",{children:"Waiting for response…"}),(0,h.jsx)("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),n&&!m&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(ce,{children:[(0,h.jsxs)(pe,{status:n.status,children:[n.status," ",n.statusText]}),(0,h.jsxs)(xe,{children:[(0,h.jsx)(l.A,{size:11,style:{display:"inline",marginRight:3}}),n.timing," ms"]}),(0,h.jsx)(xe,{children:(We=n.size,We<1024?`${We} B`:We<1048576?`${(We/1024).toFixed(1)} KB`:`${(We/1048576).toFixed(1)} MB`)}),(0,h.jsx)(he,{copied:Ae,onClick:()=>{if(!n)return;const{pretty:e}=w(n.body);navigator.clipboard.writeText(e).then(()=>{Fe(!0),setTimeout(()=>Fe(!1),1500)})},children:Ae?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.A,{size:11})," Copied"]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.A,{size:11})," Copy"]})})]}),(0,h.jsxs)(K,{children:[(0,h.jsx)(W,{active:"body"===Se,onClick:()=>Me("body"),children:"Body"}),(0,h.jsxs)(W,{active:"headers"===Se,onClick:()=>Me("headers"),children:["Headers",(0,h.jsx)(Z,{children:Object.keys(n.headers).length})]})]}),"body"===Se&&(0,h.jsx)(fe,{children:_e?(0,h.jsx)(ue,{dangerouslySetInnerHTML:{__html:(Ke=Le,Ke.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,e=>/^"/.test(e)?/:$/.test(e)?`<span style="color:#79c0ff">${e}</span>`:`<span style="color:#a5d6ff">${e}</span>`:/true|false/.test(e)?`<span style="color:#79c0ff">${e}</span>`:/null/.test(e)?`<span style="color:#8b949e">${e}</span>`:`<span style="color:#f2cc60">${e}</span>`))}}):(0,h.jsx)(ue,{children:Le})}),"headers"===Se&&(0,h.jsx)(fe,{children:(0,h.jsx)(ye,{children:Object.entries(n.headers).map(([e,o])=>(0,h.jsxs)(be,{children:[(0,h.jsx)(we,{children:e}),(0,h.jsx)($e,{children:o})]},e))})})]})]})]})]})]}),Oe&&(0,h.jsx)(a.MJ,{onSave:async e=>{const r={version:1,request:o};await(0,a.KL)(f,e,JSON.stringify(r)),He(!1),De(null)},onUpdate:async()=>{if(!Ie)return;const e={version:1,request:o};await(0,a.mZ)(Ie.id,Ie.name,JSON.stringify(e)),He(!1)},existingDoc:Ie??void 0,onCancel:()=>He(!1)})]});var Ke,We}}}]);
//# sourceMappingURL=36.a3d1f777248f0c44210e.js.map