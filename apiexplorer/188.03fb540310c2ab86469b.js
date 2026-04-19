"use strict";(self.webpackChunk_atlantis_apiexplorer=self.webpackChunk_atlantis_apiexplorer||[]).push([[188],{188(e,o,r){var t=r(7359),n=r(8997),s=r(3233),a=r(9200),l=r(8608),i=r(1344),d=r(6480),c=r(4872),p=r(8739),h=r(1365),x=r(1783),u=r(5609),f=r(320),y=r(5723);const m="apiexplorer",g={GET:"#3fb950",POST:"#a371f7",PUT:"#d29922",PATCH:"#f78166",DELETE:"#f85149",HEAD:"#58a6ff",OPTIONS:"#bc8cff"},b=[{label:"JSONPlaceholder — posts",req:{method:"GET",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Accept",value:"application/json",enabled:!0}],params:[{key:"_limit",value:"5",enabled:!0}],body:"",bodyType:"none"}},{label:"IP Geolocation",req:{method:"GET",url:"https://ipapi.co/json",headers:[],params:[],body:"",bodyType:"none"}},{label:"Open-Meteo weather (Lisbon)",req:{method:"GET",url:"https://api.open-meteo.com/v1/forecast",headers:[],params:[{key:"latitude",value:"38.72",enabled:!0},{key:"longitude",value:"-9.14",enabled:!0},{key:"current_weather",value:"true",enabled:!0}],body:"",bodyType:"none"}},{label:"POST — create post",req:{method:"POST",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Content-Type",value:"application/json",enabled:!0},{key:"Accept",value:"application/json",enabled:!0}],params:[],body:JSON.stringify({title:"Hello World",body:"API Explorer test",userId:1},null,2),bodyType:"json"}}],w="atlantis:apiexplorer:history";function $(){try{return JSON.parse(localStorage.getItem(w)??"[]")}catch{return[]}}function j(e){try{localStorage.setItem(w,JSON.stringify(e.slice(0,50)))}catch{}}function v(e){try{const o=JSON.parse(e);return{pretty:JSON.stringify(o,null,2),isJson:!0}}catch{return{pretty:e,isJson:!1}}}const k=s.default.div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,T=s.default.div`
  width: 240px;
  min-width: 240px;
  border-right: 1px solid ${a.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${a.w4.colors.sidebarBg};
`,C=s.default.div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${a.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,z=s.default.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 3px;
  &:hover { color: ${a.w4.colors.mainText}; background: ${a.w4.colors.sidebarHover}; }
`,S=s.default.div`
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
`,E=s.default.button`
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
`,M=s.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  min-width: 0;
`,A=s.default.span`
  font-size: 10px;
  font-weight: 700;
  font-family: ${a.w4.typography.fontFamilyMono};
  color: ${({method:e})=>g[e]};
  flex-shrink: 0;
`,B=s.default.span`
  font-size: 11px;
  color: ${a.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,O=s.default.span`
  font-size: 10px;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamilyMono};
`,F=s.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,R=s.default.div`
  border-top: 1px solid ${a.w4.colors.sidebarBorder};
  padding-bottom: 4px;
`,H=s.default.button`
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
`,I=s.default.span`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,N=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`,P=s.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  background: ${a.w4.colors.surface};
  flex-shrink: 0;
`,J=s.default.select`
  height: 34px;
  padding: 0 8px;
  background: ${a.w4.colors.sidebarBg};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${({method:e})=>g[e]};
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  option { color: ${a.w4.colors.mainText}; }
`,q=s.default.input`
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
`,D=s.default.button`
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
`,L=s.default.div`
  display: flex;
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  background: ${a.w4.colors.sidebarBg};
  flex-shrink: 0;
  padding: 0 ${a.w4.spacing.md};
  gap: 2px;
`,G=s.default.button`
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
`,_=s.default.span`
  margin-left: 5px;
  font-size: 10px;
  background: ${a.w4.colors.border};
  color: ${a.w4.colors.sidebarTextMuted};
  border-radius: 8px;
  padding: 1px 5px;
`,U=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: ${a.w4.spacing.md};
  overflow-y: auto;
`,K=s.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,W=s.default.input`
  cursor: pointer;
  accent-color: ${a.w4.colors.accent};
  flex-shrink: 0;
`,Z=s.default.input`
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
`,Q=s.default.button`
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
`,V=s.default.button`
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
`,X=s.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,Y=s.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,ee=s.default.span`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
`,oe=s.default.button`
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
`,re=s.default.textarea`
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
`,te=s.default.div`
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
`,ne=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-right: 1px solid ${a.w4.colors.sidebarBorder};
  overflow: hidden;
`,se=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`,ae=s.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.md};
  padding: 6px ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  background: ${a.w4.colors.surface};
  flex-shrink: 0;
`,le=s.default.span`
  font-size: 12px;
  font-weight: 700;
  font-family: ${a.w4.typography.fontFamilyMono};
  color: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,ie=s.default.span`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamilyMono};
`,de=s.default.button`
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
`,ce=s.default.div`
  flex: 1;
  overflow: auto;
  padding: ${a.w4.spacing.md};
`,pe=s.default.pre`
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12px;
  line-height: 1.7;
  color: ${a.w4.colors.mainText};
  white-space: pre-wrap;
  word-break: break-all;
  margin: 0;
`,he=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${a.w4.spacing.sm};
  color: ${a.w4.colors.sidebarTextMuted};
  font-size: ${a.w4.typography.fontSizeBase};
`,xe=s.default.div`
  font-size: 32px;
  opacity: 0.4;
`,ue=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: ${a.w4.spacing.md};
`,fe=s.default.div`
  display: flex;
  gap: ${a.w4.spacing.md};
  font-size: 12px;
  font-family: ${a.w4.typography.fontFamilyMono};
  padding: 3px 0;
  border-bottom: 1px solid ${a.w4.colors.border};
`,ye=s.default.span`
  color: ${a.w4.colors.accent};
  min-width: 200px;
  flex-shrink: 0;
`,me=s.default.span`
  color: ${a.w4.colors.mainText};
  word-break: break-all;
`,ge=s.default.button`
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
`,be={method:"GET",url:"",headers:[],params:[],body:"",bodyType:"none"},we="toolkit:apiexplorer";function $e({topBarRight:e}){const[o,r]=(0,t.useState)(be),[n,s]=(0,t.useState)(null),[g,w]=(0,t.useState)(!1),[$e,je]=(0,t.useState)(null),[ve,ke]=(0,t.useState)("params"),[Te,Ce]=(0,t.useState)("body"),[ze,Se]=(0,t.useState)($),[Ee,Me]=(0,t.useState)(!1),[Ae,Be]=(0,t.useState)(!1),Oe=(0,t.useRef)(null),Fe=(0,t.useRef)(!1);(0,t.useEffect)(()=>{(0,a.PL)(we).then(e=>{if(e)try{r(JSON.parse(e))}catch{}Fe.current=!0})},[]),(0,t.useEffect)(()=>{if(!Fe.current)return;const e=setTimeout(()=>(0,a.Is)(we,JSON.stringify(o)),400);return()=>clearTimeout(e)},[o]);const Re=(0,t.useCallback)((e,o)=>{r(r=>({...r,[e]:o}))},[]),He=(e,r,t)=>{const n=[...o.headers];n[e]={...n[e],[r]:t},Re("headers",n)},Ie=(e,r,t)=>{const n=[...o.params];n[e]={...n[e],[r]:t},Re("params",n)},Ne=(0,t.useCallback)(async()=>{if(!o.url.trim())return;Oe.current?.abort();const e=new AbortController;Oe.current=e,w(!0),je(null),s(null);const r=performance.now();try{const t=function(e,o){const r=o.filter(e=>e.enabled&&e.key.trim());if(!r.length)return e;const t=r.map(e=>`${encodeURIComponent(e.key)}=${encodeURIComponent(e.value)}`).join("&");return e.includes("?")?`${e}&${t}`:`${e}?${t}`}(o.url.trim(),o.params),n={};let a;o.headers.filter(e=>e.enabled&&e.key.trim()).forEach(e=>{n[e.key.trim()]=e.value}),"none"!==o.bodyType&&"GET"!==o.method&&"HEAD"!==o.method&&(a=o.body,"json"!==o.bodyType||n["Content-Type"]||n["content-type"]||(n["Content-Type"]="application/json"));const l=await fetch(t,{method:o.method,headers:n,body:a,signal:e.signal}),i=await l.text(),d=Math.round(performance.now()-r),c=(new TextEncoder).encode(i).length,p={};l.headers.forEach((e,o)=>{p[o]=e});const h={status:l.status,statusText:l.statusText,headers:p,body:i,timing:d,size:c};s(h);const x={id:`${Date.now()}-${Math.random()}`,method:o.method,url:o.url,timestamp:Date.now(),status:l.status};Se(e=>{const o=[x,...e];return j(o),o})}catch(e){if("AbortError"===e.name)return;je(e instanceof Error?e.message:"Request failed")}finally{w(!1)}},[o]);(0,t.useEffect)(()=>{const e=e=>{(e.ctrlKey||e.metaKey)&&"Enter"===e.key&&(e.preventDefault(),Ne())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[Ne]);const[Pe,Je]=(0,t.useState)(null),{pretty:qe,isJson:De}=n?v(n.body):{pretty:"",isJson:!1},Le=o.headers.filter(e=>e.enabled&&e.key.trim()).length,Ge=o.params.filter(e=>e.enabled&&e.key.trim()).length,_e=(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.w4.spacing.sm},children:[(0,y.jsxs)(ge,{onClick:()=>{r(be),s(null),je(null),(0,a.Is)(we,"")},children:[(0,y.jsx)(i.A,{size:13})," New"]}),(0,y.jsx)(a.UO,{appId:m,onLoad:(e,o,t)=>{Je(o&&t?{id:o,name:t}:null);try{const o=JSON.parse(e);1===o.version&&r(o.request)}catch{}}}),(0,y.jsxs)(ge,{onClick:()=>Be(!0),children:[(0,y.jsx)(d.A,{size:13}),"Save"]}),e]});return(0,y.jsxs)(a.PE,{title:"API Explorer",sidebar:(0,y.jsx)(l.tz,{activeAppId:"apiexplorer"}),topBarRight:_e,children:[(0,y.jsxs)(k,{children:[(0,y.jsxs)(T,{children:[(0,y.jsxs)(C,{children:["History",ze.length>0&&(0,y.jsx)(z,{title:"Clear history",onClick:()=>{Se([]),j([])},children:(0,y.jsx)(c.A,{size:12})})]}),(0,y.jsxs)(S,{style:{flex:ze.length?1:0},children:[0===ze.length&&(0,y.jsx)("div",{style:{padding:"8px 12px",fontSize:11,color:a.w4.colors.sidebarTextMuted},children:"No requests yet"}),ze.map(e=>(0,y.jsxs)(E,{onClick:()=>r(o=>({...o,method:e.method,url:e.url})),children:[(0,y.jsxs)(M,{children:[e.status&&(0,y.jsx)(F,{status:e.status}),(0,y.jsx)(A,{method:e.method,children:e.method}),(0,y.jsx)(B,{children:e.url.replace(/^https?:\/\//,"")})]}),(0,y.jsxs)(O,{children:[e.status&&(0,y.jsxs)("span",{children:[e.status," · "]}),new Date(e.timestamp).toLocaleTimeString()]})]},e.id))]}),(0,y.jsxs)(R,{children:[(0,y.jsx)(C,{children:"Examples"}),b.map(e=>(0,y.jsxs)(H,{onClick:()=>r(e.req),children:[(0,y.jsx)(A,{method:e.req.method,children:e.req.method}),(0,y.jsx)(I,{children:e.label})]},e.label))]})]}),(0,y.jsxs)(N,{children:[(0,y.jsxs)(P,{children:[(0,y.jsx)(J,{method:o.method,value:o.method,onChange:e=>Re("method",e.target.value),children:["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"].map(e=>(0,y.jsx)("option",{value:e,children:e},e))}),(0,y.jsx)(q,{value:o.url,onChange:e=>Re("url",e.target.value),placeholder:"https://api.example.com/endpoint",onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||Ne()}}),(0,y.jsxs)(D,{loading:g,onClick:Ne,disabled:g,children:[(0,y.jsx)(p.A,{size:14}),g?"Sending…":"Send"]})]}),(0,y.jsxs)(te,{children:[(0,y.jsxs)(ne,{children:[(0,y.jsxs)(L,{children:[(0,y.jsxs)(G,{active:"params"===ve,onClick:()=>ke("params"),children:["Params",Ge>0&&(0,y.jsx)(_,{children:Ge})]}),(0,y.jsxs)(G,{active:"headers"===ve,onClick:()=>ke("headers"),children:["Headers",Le>0&&(0,y.jsx)(_,{children:Le})]}),(0,y.jsx)(G,{active:"body"===ve,onClick:()=>ke("body"),children:"Body"})]}),"params"===ve&&(0,y.jsxs)(U,{children:[o.params.map((e,r)=>(0,y.jsxs)(K,{children:[(0,y.jsx)(W,{type:"checkbox",checked:e.enabled,onChange:e=>Ie(r,"enabled",e.target.checked)}),(0,y.jsx)(Z,{mono:!0,placeholder:"key",value:e.key,onChange:e=>Ie(r,"key",e.target.value)}),(0,y.jsx)(Z,{mono:!0,placeholder:"value",value:e.value,onChange:e=>Ie(r,"value",e.target.value)}),(0,y.jsx)(Q,{onClick:()=>(e=>Re("params",o.params.filter((o,r)=>r!==e)))(r),children:(0,y.jsx)(c.A,{size:12})})]},r)),(0,y.jsxs)(V,{onClick:()=>Re("params",[...o.params,{key:"",value:"",enabled:!0}]),children:[(0,y.jsx)(h.A,{size:12})," Add param"]})]}),"headers"===ve&&(0,y.jsxs)(U,{children:[o.headers.map((e,r)=>(0,y.jsxs)(K,{children:[(0,y.jsx)(W,{type:"checkbox",checked:e.enabled,onChange:e=>He(r,"enabled",e.target.checked)}),(0,y.jsx)(Z,{mono:!0,placeholder:"Header-Name",value:e.key,onChange:e=>He(r,"key",e.target.value)}),(0,y.jsx)(Z,{mono:!0,placeholder:"value",value:e.value,onChange:e=>He(r,"value",e.target.value)}),(0,y.jsx)(Q,{onClick:()=>(e=>Re("headers",o.headers.filter((o,r)=>r!==e)))(r),children:(0,y.jsx)(c.A,{size:12})})]},r)),(0,y.jsxs)(V,{onClick:()=>Re("headers",[...o.headers,{key:"",value:"",enabled:!0}]),children:[(0,y.jsx)(h.A,{size:12})," Add header"]})]}),"body"===ve&&(0,y.jsxs)(X,{children:[(0,y.jsxs)(Y,{children:[(0,y.jsx)(ee,{children:"Body type:"}),["none","json","text","form"].map(e=>(0,y.jsx)(oe,{active:o.bodyType===e,onClick:()=>Re("bodyType",e),children:e},e))]}),"none"!==o.bodyType?(0,y.jsx)(re,{value:o.body,onChange:e=>Re("body",e.target.value),placeholder:"json"===o.bodyType?'{\n  "key": "value"\n}':"Request body…",spellCheck:!1}):(0,y.jsxs)(he,{style:{flex:1},children:[(0,y.jsx)(xe,{children:"⊘"}),(0,y.jsx)("span",{children:"No body"})]})]})]}),(0,y.jsxs)(se,{children:[$e&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(ae,{children:[(0,y.jsx)(le,{status:0,children:"Error"}),(0,y.jsx)(ie,{children:$e})]}),(0,y.jsxs)(he,{children:[(0,y.jsx)(xe,{children:"⚠"}),(0,y.jsx)("span",{style:{color:"#f85149"},children:$e}),(0,y.jsx)("span",{style:{fontSize:12,marginTop:4},children:"Check the URL or CORS headers on the server."})]})]}),!n&&!$e&&!g&&(0,y.jsxs)(he,{children:[(0,y.jsx)(xe,{children:"🛰"}),(0,y.jsx)("span",{children:"Hit Send to fire a request"}),(0,y.jsx)("span",{style:{fontSize:12},children:"⌘↵ / Ctrl↵ to send"})]}),g&&(0,y.jsxs)(he,{children:[(0,y.jsx)(xe,{style:{animation:"spin 1s linear infinite"},children:"⟳"}),(0,y.jsx)("span",{children:"Waiting for response…"}),(0,y.jsx)("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),n&&!g&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(ae,{children:[(0,y.jsxs)(le,{status:n.status,children:[n.status," ",n.statusText]}),(0,y.jsxs)(ie,{children:[(0,y.jsx)(x.A,{size:11,style:{display:"inline",marginRight:3}}),n.timing," ms"]}),(0,y.jsx)(ie,{children:(Ke=n.size,Ke<1024?`${Ke} B`:Ke<1048576?`${(Ke/1024).toFixed(1)} KB`:`${(Ke/1048576).toFixed(1)} MB`)}),(0,y.jsx)(de,{copied:Ee,onClick:()=>{if(!n)return;const{pretty:e}=v(n.body);navigator.clipboard.writeText(e).then(()=>{Me(!0),setTimeout(()=>Me(!1),1500)})},children:Ee?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(u.A,{size:11})," Copied"]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f.A,{size:11})," Copy"]})})]}),(0,y.jsxs)(L,{children:[(0,y.jsx)(G,{active:"body"===Te,onClick:()=>Ce("body"),children:"Body"}),(0,y.jsxs)(G,{active:"headers"===Te,onClick:()=>Ce("headers"),children:["Headers",(0,y.jsx)(_,{children:Object.keys(n.headers).length})]})]}),"body"===Te&&(0,y.jsx)(ce,{children:De?(0,y.jsx)(pe,{dangerouslySetInnerHTML:{__html:(Ue=qe,Ue.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,e=>/^"/.test(e)?/:$/.test(e)?`<span style="color:#79c0ff">${e}</span>`:`<span style="color:#a5d6ff">${e}</span>`:/true|false/.test(e)?`<span style="color:#79c0ff">${e}</span>`:/null/.test(e)?`<span style="color:#8b949e">${e}</span>`:`<span style="color:#f2cc60">${e}</span>`))}}):(0,y.jsx)(pe,{children:qe})}),"headers"===Te&&(0,y.jsx)(ce,{children:(0,y.jsx)(ue,{children:Object.entries(n.headers).map(([e,o])=>(0,y.jsxs)(fe,{children:[(0,y.jsx)(ye,{children:e}),(0,y.jsx)(me,{children:o})]},e))})})]})]})]})]})]}),Ae&&(0,y.jsx)(a.MJ,{onSave:async e=>{const r={version:1,request:o};await(0,a.KL)(m,e,JSON.stringify(r)),Be(!1),Je(null)},onUpdate:async()=>{if(!Pe)return;const e={version:1,request:o};await(0,a.mZ)(Pe.id,Pe.name,JSON.stringify(e)),Be(!1)},existingDoc:Pe??void 0,onCancel:()=>Be(!1)})]});var Ue,Ke}const je=document.getElementById("root");if(!je)throw new Error("Root element #root not found");(0,n.H)(je).render((0,y.jsx)($e,{}))},8997(e,o,r){var t=r(8991);o.H=t.createRoot,t.hydrateRoot}}]);