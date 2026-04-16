"use strict";(self.webpackChunk_atlantis_apiexplorer=self.webpackChunk_atlantis_apiexplorer||[]).push([[36],{6036(e,o,r){r.r(o),r.d(o,{default:()=>ye});var t=r(7359),n=r(3233),s=r(5723),a=r(5609),l=r(1783),i=r(320),d=r(1365),c=r(6480),p=r(8739),x=r(4872),h=r(8104);const u="apiexplorer",f={GET:"#3fb950",POST:"#a371f7",PUT:"#d29922",PATCH:"#f78166",DELETE:"#f85149",HEAD:"#58a6ff",OPTIONS:"#bc8cff"},y=[{label:"JSONPlaceholder — posts",req:{method:"GET",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Accept",value:"application/json",enabled:!0}],params:[{key:"_limit",value:"5",enabled:!0}],body:"",bodyType:"none"}},{label:"IP Geolocation",req:{method:"GET",url:"https://ipapi.co/json",headers:[],params:[],body:"",bodyType:"none"}},{label:"Open-Meteo weather (Lisbon)",req:{method:"GET",url:"https://api.open-meteo.com/v1/forecast",headers:[],params:[{key:"latitude",value:"38.72",enabled:!0},{key:"longitude",value:"-9.14",enabled:!0},{key:"current_weather",value:"true",enabled:!0}],body:"",bodyType:"none"}},{label:"POST — create post",req:{method:"POST",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Content-Type",value:"application/json",enabled:!0},{key:"Accept",value:"application/json",enabled:!0}],params:[],body:JSON.stringify({title:"Hello World",body:"API Explorer test",userId:1},null,2),bodyType:"json"}}],m="atlantis:apiexplorer:history";function g(){try{return JSON.parse(localStorage.getItem(m)??"[]")}catch{return[]}}function b(e){try{localStorage.setItem(m,JSON.stringify(e.slice(0,50)))}catch{}}function w(e){try{const o=JSON.parse(e);return{pretty:JSON.stringify(o,null,2),isJson:!0}}catch{return{pretty:e,isJson:!1}}}const $=n.default.div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,j=n.default.div`
  width: 240px;
  min-width: 240px;
  border-right: 1px solid ${s.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${s.w4.colors.sidebarBg};
`,v=n.default.div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${s.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,k=n.default.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 3px;
  &:hover { color: ${s.w4.colors.mainText}; background: ${s.w4.colors.sidebarHover}; }
`,T=n.default.div`
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
`,C=n.default.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6px 12px;
  background: ${({selected:e})=>e?s.w4.colors.sidebarHover:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 2px;
  transition: background 0.1s;
  &:hover { background: ${s.w4.colors.sidebarHover}; }
`,z=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  min-width: 0;
`,S=n.default.span`
  font-size: 10px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({method:e})=>f[e]};
  flex-shrink: 0;
`,M=n.default.span`
  font-size: 11px;
  color: ${s.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,E=n.default.span`
  font-size: 10px;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
`,A=n.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,B=n.default.div`
  border-top: 1px solid ${s.w4.colors.sidebarBorder};
  padding-bottom: 4px;
`,F=n.default.button`
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
  &:hover { background: ${s.w4.colors.sidebarHover}; }
`,O=n.default.span`
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,R=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`,H=n.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  background: ${s.w4.colors.surface};
  flex-shrink: 0;
`,P=n.default.select`
  height: 34px;
  padding: 0 8px;
  background: ${s.w4.colors.sidebarBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${({method:e})=>f[e]};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  option { color: ${s.w4.colors.mainText}; }
`,q=n.default.input`
  flex: 1;
  height: 34px;
  padding: 0 ${s.w4.spacing.md};
  background: ${s.w4.colors.mainBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 13px;
  outline: none;
  min-width: 0;
  transition: border-color 0.15s;
  &::placeholder { color: ${s.w4.colors.sidebarTextMuted}; }
  &:focus { border-color: ${s.w4.colors.accent}; }
`,J=n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 16px;
  background: ${s.w4.colors.accent};
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  color: #fff;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 600;
  cursor: ${({loading:e})=>e?"wait":"pointer"};
  opacity: ${({loading:e})=>e?.7:1};
  transition: opacity 0.15s, background 0.15s;
  flex-shrink: 0;
  &:hover:not(:disabled) { background: #4493f8; }
`,N=n.default.div`
  display: flex;
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  background: ${s.w4.colors.sidebarBg};
  flex-shrink: 0;
  padding: 0 ${s.w4.spacing.md};
  gap: 2px;
`,I=n.default.button`
  height: 36px;
  padding: 0 12px;
  background: none;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?s.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?s.w4.colors.mainText:s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?600:400};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${s.w4.colors.mainText}; }
`,D=n.default.span`
  margin-left: 5px;
  font-size: 10px;
  background: ${s.w4.colors.border};
  color: ${s.w4.colors.sidebarTextMuted};
  border-radius: 8px;
  padding: 1px 5px;
`,L=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: ${s.w4.spacing.md};
  overflow-y: auto;
`,_=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,G=n.default.input`
  cursor: pointer;
  accent-color: ${s.w4.colors.accent};
  flex-shrink: 0;
`,U=n.default.input`
  flex: 1;
  height: 30px;
  padding: 0 8px;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${s.w4.colors.mainText};
  font-family: ${({mono:e})=>e?s.w4.typography.fontFamilyMono:s.w4.typography.fontFamily};
  font-size: 12px;
  outline: none;
  min-width: 0;
  &::placeholder { color: ${s.w4.colors.sidebarTextMuted}; }
  &:focus { border-color: ${s.w4.colors.accent}; }
`,K=n.default.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  border-radius: 3px;
  flex-shrink: 0;
  &:hover { color: ${s.w4.colors.mainText}; background: ${s.w4.colors.sidebarHover}; }
`,W=n.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 28px;
  padding: 0 8px;
  background: none;
  border: 1px dashed ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: 12px;
  cursor: pointer;
  align-self: flex-start;
  transition: border-color 0.15s, color 0.15s;
  &:hover { border-color: ${s.w4.colors.accent}; color: ${s.w4.colors.accent}; }
`,Z=n.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,Q=n.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,V=n.default.span`
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
`,X=n.default.button`
  height: 24px;
  padding: 0 10px;
  background: ${({active:e})=>e?"rgba(88,166,255,0.12)":"none"};
  border: 1px solid ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;
  &:hover { border-color: ${s.w4.colors.accent}; color: ${s.w4.colors.accent}; }
`,Y=n.default.textarea`
  flex: 1;
  padding: ${s.w4.spacing.md};
  background: ${s.w4.colors.mainBg};
  border: none;
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12px;
  line-height: 1.6;
  resize: none;
  outline: none;
  min-height: 0;
`,ee=n.default.div`
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
`,oe=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-right: 1px solid ${s.w4.colors.sidebarBorder};
  overflow: hidden;
`,re=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`,te=n.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.md};
  padding: 6px ${s.w4.spacing.md};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  background: ${s.w4.colors.surface};
  flex-shrink: 0;
`,ne=n.default.span`
  font-size: 12px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,se=n.default.span`
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
`,ae=n.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  padding: 0 8px;
  background: none;
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":s.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  margin-left: auto;
  transition: all 0.15s;
  &:hover { border-color: ${s.w4.colors.accent}; color: ${s.w4.colors.accent}; }
`,le=n.default.div`
  flex: 1;
  overflow: auto;
  padding: ${s.w4.spacing.md};
`,ie=n.default.pre`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12px;
  line-height: 1.7;
  color: ${s.w4.colors.mainText};
  white-space: pre-wrap;
  word-break: break-all;
  margin: 0;
`,de=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${s.w4.spacing.sm};
  color: ${s.w4.colors.sidebarTextMuted};
  font-size: ${s.w4.typography.fontSizeBase};
`,ce=n.default.div`
  font-size: 32px;
  opacity: 0.4;
`,pe=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: ${s.w4.spacing.md};
`,xe=n.default.div`
  display: flex;
  gap: ${s.w4.spacing.md};
  font-size: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  padding: 3px 0;
  border-bottom: 1px solid ${s.w4.colors.border};
`,he=n.default.span`
  color: ${s.w4.colors.accent};
  min-width: 200px;
  flex-shrink: 0;
`,ue=n.default.span`
  color: ${s.w4.colors.mainText};
  word-break: break-all;
`,fe=n.default.button`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 28px;
  padding: 0 10px;
  background: none;
  border: 1px solid ${s.w4.colors.sidebarBorder};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: 12px;
  cursor: pointer;
  transition: all 0.15s;
  &:hover { border-color: ${s.w4.colors.accent}; color: ${s.w4.colors.accent}; }
`;function ye({topBarRight:e}){const[o,r]=(0,t.useState)(y[0].req),[n,f]=(0,t.useState)(null),[m,ye]=(0,t.useState)(!1),[me,ge]=(0,t.useState)(null),[be,we]=(0,t.useState)("params"),[$e,je]=(0,t.useState)("body"),[ve,ke]=(0,t.useState)(g),[Te,Ce]=(0,t.useState)(!1),[ze,Se]=(0,t.useState)(!1),Me=(0,t.useRef)(null),Ee=(0,t.useCallback)((e,o)=>{r(r=>({...r,[e]:o}))},[]),Ae=(e,r,t)=>{const n=[...o.headers];n[e][r]=t,Ee("headers",n)},Be=(e,r,t)=>{const n=[...o.params];n[e][r]=t,Ee("params",n)},Fe=(0,t.useCallback)(async()=>{if(!o.url.trim())return;Me.current?.abort();const e=new AbortController;Me.current=e,ye(!0),ge(null),f(null);const r=performance.now();try{const t=function(e,o){const r=o.filter(e=>e.enabled&&e.key.trim());if(!r.length)return e;const t=r.map(e=>`${encodeURIComponent(e.key)}=${encodeURIComponent(e.value)}`).join("&");return e.includes("?")?`${e}&${t}`:`${e}?${t}`}(o.url.trim(),o.params),n={};let s;o.headers.filter(e=>e.enabled&&e.key.trim()).forEach(e=>{n[e.key.trim()]=e.value}),"none"!==o.bodyType&&"GET"!==o.method&&"HEAD"!==o.method&&(s=o.body,"json"!==o.bodyType||n["Content-Type"]||n["content-type"]||(n["Content-Type"]="application/json"));const a=await fetch(t,{method:o.method,headers:n,body:s,signal:e.signal}),l=await a.text(),i=Math.round(performance.now()-r),d=(new TextEncoder).encode(l).length,c={};a.headers.forEach((e,o)=>{c[o]=e});const p={status:a.status,statusText:a.statusText,headers:c,body:l,timing:i,size:d};f(p);const x={id:`${Date.now()}-${Math.random()}`,method:o.method,url:o.url,timestamp:Date.now(),status:a.status};ke(e=>{const o=[x,...e];return b(o),o})}catch(e){if("AbortError"===e.name)return;ge(e instanceof Error?e.message:"Request failed")}finally{ye(!1)}},[o]);(0,t.useEffect)(()=>{const e=e=>{(e.ctrlKey||e.metaKey)&&"Enter"===e.key&&(e.preventDefault(),Fe())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[Fe]);const[Oe,Re]=(0,t.useState)(null),{pretty:He,isJson:Pe}=n?w(n.body):{pretty:"",isJson:!1},qe=o.headers.filter(e=>e.enabled&&e.key.trim()).length,Je=o.params.filter(e=>e.enabled&&e.key.trim()).length,Ne=(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:s.w4.spacing.sm},children:[(0,h.jsx)(s.UO,{appId:u,onLoad:(e,o,t)=>{Re(o&&t?{id:o,name:t}:null);try{const o=JSON.parse(e);1===o.version&&r(o.request)}catch{}}}),(0,h.jsxs)(fe,{onClick:()=>Se(!0),children:[(0,h.jsx)(c.A,{size:13}),"Save"]}),e]});return(0,h.jsxs)(s.PE,{title:"API Explorer",sidebar:null,topBarRight:Ne,children:[(0,h.jsxs)($,{children:[(0,h.jsxs)(j,{children:[(0,h.jsxs)(v,{children:["History",ve.length>0&&(0,h.jsx)(k,{title:"Clear history",onClick:()=>{ke([]),b([])},children:(0,h.jsx)(x.A,{size:12})})]}),(0,h.jsxs)(T,{style:{flex:ve.length?1:0},children:[0===ve.length&&(0,h.jsx)("div",{style:{padding:"8px 12px",fontSize:11,color:s.w4.colors.sidebarTextMuted},children:"No requests yet"}),ve.map(e=>(0,h.jsxs)(C,{onClick:()=>r(o=>({...o,method:e.method,url:e.url})),children:[(0,h.jsxs)(z,{children:[e.status&&(0,h.jsx)(A,{status:e.status}),(0,h.jsx)(S,{method:e.method,children:e.method}),(0,h.jsx)(M,{children:e.url.replace(/^https?:\/\//,"")})]}),(0,h.jsxs)(E,{children:[e.status&&(0,h.jsxs)("span",{children:[e.status," · "]}),new Date(e.timestamp).toLocaleTimeString()]})]},e.id))]}),(0,h.jsxs)(B,{children:[(0,h.jsx)(v,{children:"Examples"}),y.map(e=>(0,h.jsxs)(F,{onClick:()=>r(e.req),children:[(0,h.jsx)(S,{method:e.req.method,children:e.req.method}),(0,h.jsx)(O,{children:e.label})]},e.label))]})]}),(0,h.jsxs)(R,{children:[(0,h.jsxs)(H,{children:[(0,h.jsx)(P,{method:o.method,value:o.method,onChange:e=>Ee("method",e.target.value),children:["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"].map(e=>(0,h.jsx)("option",{value:e,children:e},e))}),(0,h.jsx)(q,{value:o.url,onChange:e=>Ee("url",e.target.value),placeholder:"https://api.example.com/endpoint",onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||Fe()}}),(0,h.jsxs)(J,{loading:m,onClick:Fe,disabled:m,children:[(0,h.jsx)(p.A,{size:14}),m?"Sending…":"Send"]})]}),(0,h.jsxs)(ee,{children:[(0,h.jsxs)(oe,{children:[(0,h.jsxs)(N,{children:[(0,h.jsxs)(I,{active:"params"===be,onClick:()=>we("params"),children:["Params",Je>0&&(0,h.jsx)(D,{children:Je})]}),(0,h.jsxs)(I,{active:"headers"===be,onClick:()=>we("headers"),children:["Headers",qe>0&&(0,h.jsx)(D,{children:qe})]}),(0,h.jsx)(I,{active:"body"===be,onClick:()=>we("body"),children:"Body"})]}),"params"===be&&(0,h.jsxs)(L,{children:[o.params.map((e,r)=>(0,h.jsxs)(_,{children:[(0,h.jsx)(G,{type:"checkbox",checked:e.enabled,onChange:e=>Be(r,"enabled",e.target.checked)}),(0,h.jsx)(U,{mono:!0,placeholder:"key",value:e.key,onChange:e=>Be(r,"key",e.target.value)}),(0,h.jsx)(U,{mono:!0,placeholder:"value",value:e.value,onChange:e=>Be(r,"value",e.target.value)}),(0,h.jsx)(K,{onClick:()=>(e=>Ee("params",o.params.filter((o,r)=>r!==e)))(r),children:(0,h.jsx)(x.A,{size:12})})]},r)),(0,h.jsxs)(W,{onClick:()=>Ee("params",[...o.params,{key:"",value:"",enabled:!0}]),children:[(0,h.jsx)(d.A,{size:12})," Add param"]})]}),"headers"===be&&(0,h.jsxs)(L,{children:[o.headers.map((e,r)=>(0,h.jsxs)(_,{children:[(0,h.jsx)(G,{type:"checkbox",checked:e.enabled,onChange:e=>Ae(r,"enabled",e.target.checked)}),(0,h.jsx)(U,{mono:!0,placeholder:"Header-Name",value:e.key,onChange:e=>Ae(r,"key",e.target.value)}),(0,h.jsx)(U,{mono:!0,placeholder:"value",value:e.value,onChange:e=>Ae(r,"value",e.target.value)}),(0,h.jsx)(K,{onClick:()=>(e=>Ee("headers",o.headers.filter((o,r)=>r!==e)))(r),children:(0,h.jsx)(x.A,{size:12})})]},r)),(0,h.jsxs)(W,{onClick:()=>Ee("headers",[...o.headers,{key:"",value:"",enabled:!0}]),children:[(0,h.jsx)(d.A,{size:12})," Add header"]})]}),"body"===be&&(0,h.jsxs)(Z,{children:[(0,h.jsxs)(Q,{children:[(0,h.jsx)(V,{children:"Body type:"}),["none","json","text","form"].map(e=>(0,h.jsx)(X,{active:o.bodyType===e,onClick:()=>Ee("bodyType",e),children:e},e))]}),"none"!==o.bodyType?(0,h.jsx)(Y,{value:o.body,onChange:e=>Ee("body",e.target.value),placeholder:"json"===o.bodyType?'{\n  "key": "value"\n}':"Request body…",spellCheck:!1}):(0,h.jsxs)(de,{style:{flex:1},children:[(0,h.jsx)(ce,{children:"⊘"}),(0,h.jsx)("span",{children:"No body"})]})]})]}),(0,h.jsxs)(re,{children:[me&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(te,{children:[(0,h.jsx)(ne,{status:0,children:"Error"}),(0,h.jsx)(se,{children:me})]}),(0,h.jsxs)(de,{children:[(0,h.jsx)(ce,{children:"⚠"}),(0,h.jsx)("span",{style:{color:"#f85149"},children:me}),(0,h.jsx)("span",{style:{fontSize:12,marginTop:4},children:"Check the URL or CORS headers on the server."})]})]}),!n&&!me&&!m&&(0,h.jsxs)(de,{children:[(0,h.jsx)(ce,{children:"🛰"}),(0,h.jsx)("span",{children:"Hit Send to fire a request"}),(0,h.jsx)("span",{style:{fontSize:12},children:"⌘↵ / Ctrl↵ to send"})]}),m&&(0,h.jsxs)(de,{children:[(0,h.jsx)(ce,{style:{animation:"spin 1s linear infinite"},children:"⟳"}),(0,h.jsx)("span",{children:"Waiting for response…"}),(0,h.jsx)("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),n&&!m&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(te,{children:[(0,h.jsxs)(ne,{status:n.status,children:[n.status," ",n.statusText]}),(0,h.jsxs)(se,{children:[(0,h.jsx)(l.A,{size:11,style:{display:"inline",marginRight:3}}),n.timing," ms"]}),(0,h.jsx)(se,{children:(De=n.size,De<1024?`${De} B`:De<1048576?`${(De/1024).toFixed(1)} KB`:`${(De/1048576).toFixed(1)} MB`)}),(0,h.jsx)(ae,{copied:Te,onClick:()=>{if(!n)return;const{pretty:e}=w(n.body);navigator.clipboard.writeText(e).then(()=>{Ce(!0),setTimeout(()=>Ce(!1),1500)})},children:Te?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.A,{size:11})," Copied"]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.A,{size:11})," Copy"]})})]}),(0,h.jsxs)(N,{children:[(0,h.jsx)(I,{active:"body"===$e,onClick:()=>je("body"),children:"Body"}),(0,h.jsxs)(I,{active:"headers"===$e,onClick:()=>je("headers"),children:["Headers",(0,h.jsx)(D,{children:Object.keys(n.headers).length})]})]}),"body"===$e&&(0,h.jsx)(le,{children:Pe?(0,h.jsx)(ie,{dangerouslySetInnerHTML:{__html:(Ie=He,Ie.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,e=>/^"/.test(e)?/:$/.test(e)?`<span style="color:#79c0ff">${e}</span>`:`<span style="color:#a5d6ff">${e}</span>`:/true|false/.test(e)?`<span style="color:#79c0ff">${e}</span>`:/null/.test(e)?`<span style="color:#8b949e">${e}</span>`:`<span style="color:#f2cc60">${e}</span>`))}}):(0,h.jsx)(ie,{children:He})}),"headers"===$e&&(0,h.jsx)(le,{children:(0,h.jsx)(pe,{children:Object.entries(n.headers).map(([e,o])=>(0,h.jsxs)(xe,{children:[(0,h.jsx)(he,{children:e}),(0,h.jsx)(ue,{children:o})]},e))})})]})]})]})]})]}),ze&&(0,h.jsx)(s.MJ,{onSave:async e=>{const r={version:1,request:o};await(0,s.KL)(u,e,JSON.stringify(r)),Se(!1),Re(null)},onUpdate:async()=>{if(!Oe)return;const e={version:1,request:o};await(0,s.mZ)(Oe.id,Oe.name,JSON.stringify(e)),Se(!1)},existingDoc:Oe??void 0,onCancel:()=>Se(!1)})]});var Ie,De}}}]);
//# sourceMappingURL=36.2355e0bc968c1e041da7.js.map