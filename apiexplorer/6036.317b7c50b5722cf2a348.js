"use strict";(self.webpackChunk_atlantis_apiexplorer=self.webpackChunk_atlantis_apiexplorer||[]).push([[6036],{6036(e,o,r){r.r(o),r.d(o,{default:()=>we});var t=r(7359),n=r(3233),s=r(9200),a=r(3857),l=r(5609),i=r(1783),d=r(320),c=r(1344),p=r(1365),x=r(6480),h=r(8739),u=r(4872),f=r(5723);const y="apiexplorer",m={GET:"#3fb950",POST:"#a371f7",PUT:"#d29922",PATCH:"#f78166",DELETE:"#f85149",HEAD:"#58a6ff",OPTIONS:"#bc8cff"},g=[{label:"JSONPlaceholder — posts",req:{method:"GET",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Accept",value:"application/json",enabled:!0}],params:[{key:"_limit",value:"5",enabled:!0}],body:"",bodyType:"none"}},{label:"IP Geolocation",req:{method:"GET",url:"https://ipapi.co/json",headers:[],params:[],body:"",bodyType:"none"}},{label:"Open-Meteo weather (Lisbon)",req:{method:"GET",url:"https://api.open-meteo.com/v1/forecast",headers:[],params:[{key:"latitude",value:"38.72",enabled:!0},{key:"longitude",value:"-9.14",enabled:!0},{key:"current_weather",value:"true",enabled:!0}],body:"",bodyType:"none"}},{label:"POST — create post",req:{method:"POST",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Content-Type",value:"application/json",enabled:!0},{key:"Accept",value:"application/json",enabled:!0}],params:[],body:JSON.stringify({title:"Hello World",body:"API Explorer test",userId:1},null,2),bodyType:"json"}}],b="atlantis:apiexplorer:history";function w(){try{return JSON.parse(localStorage.getItem(b)??"[]")}catch{return[]}}function $(e){try{localStorage.setItem(b,JSON.stringify(e.slice(0,50)))}catch{}}function j(e){try{const o=JSON.parse(e);return{pretty:JSON.stringify(o,null,2),isJson:!0}}catch{return{pretty:e,isJson:!1}}}const v=n.default.div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,k=n.default.div`
  width: 240px;
  min-width: 240px;
  border-right: 1px solid ${s.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${s.w4.colors.sidebarBg};
`,T=n.default.div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${s.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,C=n.default.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 3px;
  &:hover { color: ${s.w4.colors.mainText}; background: ${s.w4.colors.sidebarHover}; }
`,z=n.default.div`
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
`,S=n.default.button`
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
`,E=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  min-width: 0;
`,M=n.default.span`
  font-size: 10px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({method:e})=>m[e]};
  flex-shrink: 0;
`,A=n.default.span`
  font-size: 11px;
  color: ${s.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,O=n.default.span`
  font-size: 10px;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
`,B=n.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,F=n.default.div`
  border-top: 1px solid ${s.w4.colors.sidebarBorder};
  padding-bottom: 4px;
`,R=n.default.button`
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
`,H=n.default.span`
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,N=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`,P=n.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  background: ${s.w4.colors.surface};
  flex-shrink: 0;
`,I=n.default.select`
  height: 34px;
  padding: 0 8px;
  background: ${s.w4.colors.sidebarBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${({method:e})=>m[e]};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  option { color: ${s.w4.colors.mainText}; }
`,J=n.default.input`
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
`,q=n.default.button`
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
`,D=n.default.div`
  display: flex;
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  background: ${s.w4.colors.sidebarBg};
  flex-shrink: 0;
  padding: 0 ${s.w4.spacing.md};
  gap: 2px;
`,L=n.default.button`
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
`,G=n.default.span`
  margin-left: 5px;
  font-size: 10px;
  background: ${s.w4.colors.border};
  color: ${s.w4.colors.sidebarTextMuted};
  border-radius: 8px;
  padding: 1px 5px;
`,_=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: ${s.w4.spacing.md};
  overflow-y: auto;
`,U=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,K=n.default.input`
  cursor: pointer;
  accent-color: ${s.w4.colors.accent};
  flex-shrink: 0;
`,W=n.default.input`
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
`,Z=n.default.button`
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
`,Q=n.default.button`
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
`,V=n.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,X=n.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,Y=n.default.span`
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
`,ee=n.default.button`
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
`,oe=n.default.textarea`
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
`,re=n.default.div`
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
`,te=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-right: 1px solid ${s.w4.colors.sidebarBorder};
  overflow: hidden;
`,ne=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`,se=n.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.md};
  padding: 6px ${s.w4.spacing.md};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  background: ${s.w4.colors.surface};
  flex-shrink: 0;
`,ae=n.default.span`
  font-size: 12px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,le=n.default.span`
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
`,ie=n.default.button`
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
`,de=n.default.div`
  flex: 1;
  overflow: auto;
  padding: ${s.w4.spacing.md};
`,ce=n.default.pre`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12px;
  line-height: 1.7;
  color: ${s.w4.colors.mainText};
  white-space: pre-wrap;
  word-break: break-all;
  margin: 0;
`,pe=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${s.w4.spacing.sm};
  color: ${s.w4.colors.sidebarTextMuted};
  font-size: ${s.w4.typography.fontSizeBase};
`,xe=n.default.div`
  font-size: 32px;
  opacity: 0.4;
`,he=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: ${s.w4.spacing.md};
`,ue=n.default.div`
  display: flex;
  gap: ${s.w4.spacing.md};
  font-size: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  padding: 3px 0;
  border-bottom: 1px solid ${s.w4.colors.border};
`,fe=n.default.span`
  color: ${s.w4.colors.accent};
  min-width: 200px;
  flex-shrink: 0;
`,ye=n.default.span`
  color: ${s.w4.colors.mainText};
  word-break: break-all;
`,me=n.default.button`
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
`,ge={method:"GET",url:"",headers:[],params:[],body:"",bodyType:"none"},be="toolkit:apiexplorer";function we({topBarRight:e}){const[o,r]=(0,t.useState)(ge),[n,m]=(0,t.useState)(null),[b,we]=(0,t.useState)(!1),[$e,je]=(0,t.useState)(null),[ve,ke]=(0,t.useState)("params"),[Te,Ce]=(0,t.useState)("body"),[ze,Se]=(0,t.useState)(w),[Ee,Me]=(0,t.useState)(!1),[Ae,Oe]=(0,t.useState)(!1),Be=(0,t.useRef)(null),Fe=(0,t.useRef)(!1);(0,t.useEffect)(()=>{(0,s.PL)(be).then(e=>{if(e)try{r(JSON.parse(e))}catch{}Fe.current=!0})},[]),(0,t.useEffect)(()=>{if(!Fe.current)return;const e=setTimeout(()=>(0,s.Is)(be,JSON.stringify(o)),400);return()=>clearTimeout(e)},[o]);const Re=(0,t.useCallback)((e,o)=>{r(r=>({...r,[e]:o}))},[]),He=(e,r,t)=>{const n=[...o.headers];n[e]={...n[e],[r]:t},Re("headers",n)},Ne=(e,r,t)=>{const n=[...o.params];n[e]={...n[e],[r]:t},Re("params",n)},Pe=(0,t.useCallback)(async()=>{if(!o.url.trim())return;Be.current?.abort();const e=new AbortController;Be.current=e,we(!0),je(null),m(null);const r=performance.now();try{const t=function(e,o){const r=o.filter(e=>e.enabled&&e.key.trim());if(!r.length)return e;const t=r.map(e=>`${encodeURIComponent(e.key)}=${encodeURIComponent(e.value)}`).join("&");return e.includes("?")?`${e}&${t}`:`${e}?${t}`}(o.url.trim(),o.params),n={};let s;o.headers.filter(e=>e.enabled&&e.key.trim()).forEach(e=>{n[e.key.trim()]=e.value}),"none"!==o.bodyType&&"GET"!==o.method&&"HEAD"!==o.method&&(s=o.body,"json"!==o.bodyType||n["Content-Type"]||n["content-type"]||(n["Content-Type"]="application/json"));const a=await fetch(t,{method:o.method,headers:n,body:s,signal:e.signal}),l=await a.text(),i=Math.round(performance.now()-r),d=(new TextEncoder).encode(l).length,c={};a.headers.forEach((e,o)=>{c[o]=e});const p={status:a.status,statusText:a.statusText,headers:c,body:l,timing:i,size:d};m(p);const x={id:`${Date.now()}-${Math.random()}`,method:o.method,url:o.url,timestamp:Date.now(),status:a.status};Se(e=>{const o=[x,...e];return $(o),o})}catch(e){if("AbortError"===e.name)return;je(e instanceof Error?e.message:"Request failed")}finally{we(!1)}},[o]);(0,t.useEffect)(()=>{const e=e=>{(e.ctrlKey||e.metaKey)&&"Enter"===e.key&&(e.preventDefault(),Pe())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[Pe]);const[Ie,Je]=(0,t.useState)(null),{pretty:qe,isJson:De}=n?j(n.body):{pretty:"",isJson:!1},Le=o.headers.filter(e=>e.enabled&&e.key.trim()).length,Ge=o.params.filter(e=>e.enabled&&e.key.trim()).length,_e=(0,f.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:s.w4.spacing.sm},children:[(0,f.jsxs)(me,{onClick:()=>{r(ge),m(null),je(null),(0,s.Is)(be,"")},children:[(0,f.jsx)(c.A,{size:13})," New"]}),(0,f.jsx)(s.UO,{appId:y,onLoad:(e,o,t)=>{Je(o&&t?{id:o,name:t}:null);try{const o=JSON.parse(e);1===o.version&&r(o.request)}catch{}}}),(0,f.jsxs)(me,{onClick:()=>Oe(!0),children:[(0,f.jsx)(x.A,{size:13}),"Save"]}),e]});return(0,f.jsxs)(s.PE,{title:"API Explorer",sidebar:(0,f.jsx)(a.tz,{activeAppId:"apiexplorer"}),topBarRight:_e,children:[(0,f.jsxs)(v,{children:[(0,f.jsxs)(k,{children:[(0,f.jsxs)(T,{children:["History",ze.length>0&&(0,f.jsx)(C,{title:"Clear history",onClick:()=>{Se([]),$([])},children:(0,f.jsx)(u.A,{size:12})})]}),(0,f.jsxs)(z,{style:{flex:ze.length?1:0},children:[0===ze.length&&(0,f.jsx)("div",{style:{padding:"8px 12px",fontSize:11,color:s.w4.colors.sidebarTextMuted},children:"No requests yet"}),ze.map(e=>(0,f.jsxs)(S,{onClick:()=>r(o=>({...o,method:e.method,url:e.url})),children:[(0,f.jsxs)(E,{children:[e.status&&(0,f.jsx)(B,{status:e.status}),(0,f.jsx)(M,{method:e.method,children:e.method}),(0,f.jsx)(A,{children:e.url.replace(/^https?:\/\//,"")})]}),(0,f.jsxs)(O,{children:[e.status&&(0,f.jsxs)("span",{children:[e.status," · "]}),new Date(e.timestamp).toLocaleTimeString()]})]},e.id))]}),(0,f.jsxs)(F,{children:[(0,f.jsx)(T,{children:"Examples"}),g.map(e=>(0,f.jsxs)(R,{onClick:()=>r(e.req),children:[(0,f.jsx)(M,{method:e.req.method,children:e.req.method}),(0,f.jsx)(H,{children:e.label})]},e.label))]})]}),(0,f.jsxs)(N,{children:[(0,f.jsxs)(P,{children:[(0,f.jsx)(I,{method:o.method,value:o.method,onChange:e=>Re("method",e.target.value),children:["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"].map(e=>(0,f.jsx)("option",{value:e,children:e},e))}),(0,f.jsx)(J,{value:o.url,onChange:e=>Re("url",e.target.value),placeholder:"https://api.example.com/endpoint",onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||Pe()}}),(0,f.jsxs)(q,{loading:b,onClick:Pe,disabled:b,children:[(0,f.jsx)(h.A,{size:14}),b?"Sending…":"Send"]})]}),(0,f.jsxs)(re,{children:[(0,f.jsxs)(te,{children:[(0,f.jsxs)(D,{children:[(0,f.jsxs)(L,{active:"params"===ve,onClick:()=>ke("params"),children:["Params",Ge>0&&(0,f.jsx)(G,{children:Ge})]}),(0,f.jsxs)(L,{active:"headers"===ve,onClick:()=>ke("headers"),children:["Headers",Le>0&&(0,f.jsx)(G,{children:Le})]}),(0,f.jsx)(L,{active:"body"===ve,onClick:()=>ke("body"),children:"Body"})]}),"params"===ve&&(0,f.jsxs)(_,{children:[o.params.map((e,r)=>(0,f.jsxs)(U,{children:[(0,f.jsx)(K,{type:"checkbox",checked:e.enabled,onChange:e=>Ne(r,"enabled",e.target.checked)}),(0,f.jsx)(W,{mono:!0,placeholder:"key",value:e.key,onChange:e=>Ne(r,"key",e.target.value)}),(0,f.jsx)(W,{mono:!0,placeholder:"value",value:e.value,onChange:e=>Ne(r,"value",e.target.value)}),(0,f.jsx)(Z,{onClick:()=>(e=>Re("params",o.params.filter((o,r)=>r!==e)))(r),children:(0,f.jsx)(u.A,{size:12})})]},r)),(0,f.jsxs)(Q,{onClick:()=>Re("params",[...o.params,{key:"",value:"",enabled:!0}]),children:[(0,f.jsx)(p.A,{size:12})," Add param"]})]}),"headers"===ve&&(0,f.jsxs)(_,{children:[o.headers.map((e,r)=>(0,f.jsxs)(U,{children:[(0,f.jsx)(K,{type:"checkbox",checked:e.enabled,onChange:e=>He(r,"enabled",e.target.checked)}),(0,f.jsx)(W,{mono:!0,placeholder:"Header-Name",value:e.key,onChange:e=>He(r,"key",e.target.value)}),(0,f.jsx)(W,{mono:!0,placeholder:"value",value:e.value,onChange:e=>He(r,"value",e.target.value)}),(0,f.jsx)(Z,{onClick:()=>(e=>Re("headers",o.headers.filter((o,r)=>r!==e)))(r),children:(0,f.jsx)(u.A,{size:12})})]},r)),(0,f.jsxs)(Q,{onClick:()=>Re("headers",[...o.headers,{key:"",value:"",enabled:!0}]),children:[(0,f.jsx)(p.A,{size:12})," Add header"]})]}),"body"===ve&&(0,f.jsxs)(V,{children:[(0,f.jsxs)(X,{children:[(0,f.jsx)(Y,{children:"Body type:"}),["none","json","text","form"].map(e=>(0,f.jsx)(ee,{active:o.bodyType===e,onClick:()=>Re("bodyType",e),children:e},e))]}),"none"!==o.bodyType?(0,f.jsx)(oe,{value:o.body,onChange:e=>Re("body",e.target.value),placeholder:"json"===o.bodyType?'{\n  "key": "value"\n}':"Request body…",spellCheck:!1}):(0,f.jsxs)(pe,{style:{flex:1},children:[(0,f.jsx)(xe,{children:"⊘"}),(0,f.jsx)("span",{children:"No body"})]})]})]}),(0,f.jsxs)(ne,{children:[$e&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(se,{children:[(0,f.jsx)(ae,{status:0,children:"Error"}),(0,f.jsx)(le,{children:$e})]}),(0,f.jsxs)(pe,{children:[(0,f.jsx)(xe,{children:"⚠"}),(0,f.jsx)("span",{style:{color:"#f85149"},children:$e}),(0,f.jsx)("span",{style:{fontSize:12,marginTop:4},children:"Check the URL or CORS headers on the server."})]})]}),!n&&!$e&&!b&&(0,f.jsxs)(pe,{children:[(0,f.jsx)(xe,{children:"🛰"}),(0,f.jsx)("span",{children:"Hit Send to fire a request"}),(0,f.jsx)("span",{style:{fontSize:12},children:"⌘↵ / Ctrl↵ to send"})]}),b&&(0,f.jsxs)(pe,{children:[(0,f.jsx)(xe,{style:{animation:"spin 1s linear infinite"},children:"⟳"}),(0,f.jsx)("span",{children:"Waiting for response…"}),(0,f.jsx)("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),n&&!b&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(se,{children:[(0,f.jsxs)(ae,{status:n.status,children:[n.status," ",n.statusText]}),(0,f.jsxs)(le,{children:[(0,f.jsx)(i.A,{size:11,style:{display:"inline",marginRight:3}}),n.timing," ms"]}),(0,f.jsx)(le,{children:(Ke=n.size,Ke<1024?`${Ke} B`:Ke<1048576?`${(Ke/1024).toFixed(1)} KB`:`${(Ke/1048576).toFixed(1)} MB`)}),(0,f.jsx)(ie,{copied:Ee,onClick:()=>{if(!n)return;const{pretty:e}=j(n.body);navigator.clipboard.writeText(e).then(()=>{Me(!0),setTimeout(()=>Me(!1),1500)})},children:Ee?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.A,{size:11})," Copied"]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.A,{size:11})," Copy"]})})]}),(0,f.jsxs)(D,{children:[(0,f.jsx)(L,{active:"body"===Te,onClick:()=>Ce("body"),children:"Body"}),(0,f.jsxs)(L,{active:"headers"===Te,onClick:()=>Ce("headers"),children:["Headers",(0,f.jsx)(G,{children:Object.keys(n.headers).length})]})]}),"body"===Te&&(0,f.jsx)(de,{children:De?(0,f.jsx)(ce,{dangerouslySetInnerHTML:{__html:(Ue=qe,Ue.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,e=>/^"/.test(e)?/:$/.test(e)?`<span style="color:#79c0ff">${e}</span>`:`<span style="color:#a5d6ff">${e}</span>`:/true|false/.test(e)?`<span style="color:#79c0ff">${e}</span>`:/null/.test(e)?`<span style="color:#8b949e">${e}</span>`:`<span style="color:#f2cc60">${e}</span>`))}}):(0,f.jsx)(ce,{children:qe})}),"headers"===Te&&(0,f.jsx)(de,{children:(0,f.jsx)(he,{children:Object.entries(n.headers).map(([e,o])=>(0,f.jsxs)(ue,{children:[(0,f.jsx)(fe,{children:e}),(0,f.jsx)(ye,{children:o})]},e))})})]})]})]})]})]}),Ae&&(0,f.jsx)(s.MJ,{onSave:async e=>{const r={version:1,request:o};await(0,s.KL)(y,e,JSON.stringify(r)),Oe(!1),Je(null)},onUpdate:async()=>{if(!Ie)return;const e={version:1,request:o};await(0,s.mZ)(Ie.id,Ie.name,JSON.stringify(e)),Oe(!1)},existingDoc:Ie??void 0,onCancel:()=>Oe(!1)})]});var Ue,Ke}}}]);