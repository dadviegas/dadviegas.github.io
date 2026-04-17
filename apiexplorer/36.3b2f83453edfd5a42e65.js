"use strict";(self.webpackChunk_atlantis_apiexplorer=self.webpackChunk_atlantis_apiexplorer||[]).push([[36],{6036(e,o,r){r.r(o),r.d(o,{default:()=>be});var t=r(7359),n=r(3233),s=r(9178),a=r(5609),l=r(1783),i=r(320),d=r(1344),c=r(1365),p=r(6480),x=r(8739),h=r(4872),u=r(5723);const f="apiexplorer",y={GET:"#3fb950",POST:"#a371f7",PUT:"#d29922",PATCH:"#f78166",DELETE:"#f85149",HEAD:"#58a6ff",OPTIONS:"#bc8cff"},m=[{label:"JSONPlaceholder — posts",req:{method:"GET",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Accept",value:"application/json",enabled:!0}],params:[{key:"_limit",value:"5",enabled:!0}],body:"",bodyType:"none"}},{label:"IP Geolocation",req:{method:"GET",url:"https://ipapi.co/json",headers:[],params:[],body:"",bodyType:"none"}},{label:"Open-Meteo weather (Lisbon)",req:{method:"GET",url:"https://api.open-meteo.com/v1/forecast",headers:[],params:[{key:"latitude",value:"38.72",enabled:!0},{key:"longitude",value:"-9.14",enabled:!0},{key:"current_weather",value:"true",enabled:!0}],body:"",bodyType:"none"}},{label:"POST — create post",req:{method:"POST",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Content-Type",value:"application/json",enabled:!0},{key:"Accept",value:"application/json",enabled:!0}],params:[],body:JSON.stringify({title:"Hello World",body:"API Explorer test",userId:1},null,2),bodyType:"json"}}],g="atlantis:apiexplorer:history";function b(){try{return JSON.parse(localStorage.getItem(g)??"[]")}catch{return[]}}function w(e){try{localStorage.setItem(g,JSON.stringify(e.slice(0,50)))}catch{}}function $(e){try{const o=JSON.parse(e);return{pretty:JSON.stringify(o,null,2),isJson:!0}}catch{return{pretty:e,isJson:!1}}}const j=n.default.div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,v=n.default.div`
  width: 240px;
  min-width: 240px;
  border-right: 1px solid ${s.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${s.w4.colors.sidebarBg};
`,k=n.default.div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${s.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,T=n.default.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 3px;
  &:hover { color: ${s.w4.colors.mainText}; background: ${s.w4.colors.sidebarHover}; }
`,C=n.default.div`
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
`,z=n.default.button`
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
`,S=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  min-width: 0;
`,E=n.default.span`
  font-size: 10px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({method:e})=>y[e]};
  flex-shrink: 0;
`,M=n.default.span`
  font-size: 11px;
  color: ${s.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,A=n.default.span`
  font-size: 10px;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
`,O=n.default.span`
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
`,R=n.default.span`
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,H=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`,N=n.default.div`
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
  color: ${({method:e})=>y[e]};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  option { color: ${s.w4.colors.mainText}; }
`,I=n.default.input`
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
`,q=n.default.div`
  display: flex;
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  background: ${s.w4.colors.sidebarBg};
  flex-shrink: 0;
  padding: 0 ${s.w4.spacing.md};
  gap: 2px;
`,D=n.default.button`
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
`,L=n.default.span`
  margin-left: 5px;
  font-size: 10px;
  background: ${s.w4.colors.border};
  color: ${s.w4.colors.sidebarTextMuted};
  border-radius: 8px;
  padding: 1px 5px;
`,G=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: ${s.w4.spacing.md};
  overflow-y: auto;
`,_=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,U=n.default.input`
  cursor: pointer;
  accent-color: ${s.w4.colors.accent};
  flex-shrink: 0;
`,K=n.default.input`
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
`,W=n.default.button`
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
`,Z=n.default.button`
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
`,Q=n.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,V=n.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,X=n.default.span`
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
`,Y=n.default.button`
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
`,ee=n.default.textarea`
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
`,oe=n.default.div`
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
`,re=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-right: 1px solid ${s.w4.colors.sidebarBorder};
  overflow: hidden;
`,te=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`,ne=n.default.div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.md};
  padding: 6px ${s.w4.spacing.md};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  background: ${s.w4.colors.surface};
  flex-shrink: 0;
`,se=n.default.span`
  font-size: 12px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,ae=n.default.span`
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
`,le=n.default.button`
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
`,ie=n.default.div`
  flex: 1;
  overflow: auto;
  padding: ${s.w4.spacing.md};
`,de=n.default.pre`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12px;
  line-height: 1.7;
  color: ${s.w4.colors.mainText};
  white-space: pre-wrap;
  word-break: break-all;
  margin: 0;
`,ce=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${s.w4.spacing.sm};
  color: ${s.w4.colors.sidebarTextMuted};
  font-size: ${s.w4.typography.fontSizeBase};
`,pe=n.default.div`
  font-size: 32px;
  opacity: 0.4;
`,xe=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: ${s.w4.spacing.md};
`,he=n.default.div`
  display: flex;
  gap: ${s.w4.spacing.md};
  font-size: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  padding: 3px 0;
  border-bottom: 1px solid ${s.w4.colors.border};
`,ue=n.default.span`
  color: ${s.w4.colors.accent};
  min-width: 200px;
  flex-shrink: 0;
`,fe=n.default.span`
  color: ${s.w4.colors.mainText};
  word-break: break-all;
`,ye=n.default.button`
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
`,me={method:"GET",url:"",headers:[],params:[],body:"",bodyType:"none"},ge="toolkit:apiexplorer";function be({topBarRight:e}){const[o,r]=(0,t.useState)(me),[n,y]=(0,t.useState)(null),[g,be]=(0,t.useState)(!1),[we,$e]=(0,t.useState)(null),[je,ve]=(0,t.useState)("params"),[ke,Te]=(0,t.useState)("body"),[Ce,ze]=(0,t.useState)(b),[Se,Ee]=(0,t.useState)(!1),[Me,Ae]=(0,t.useState)(!1),Oe=(0,t.useRef)(null),Be=(0,t.useRef)(!1);(0,t.useEffect)(()=>{(0,s.PL)(ge).then(e=>{if(e)try{r(JSON.parse(e))}catch{}Be.current=!0})},[]),(0,t.useEffect)(()=>{if(!Be.current)return;const e=setTimeout(()=>(0,s.Is)(ge,JSON.stringify(o)),400);return()=>clearTimeout(e)},[o]);const Fe=(0,t.useCallback)((e,o)=>{r(r=>({...r,[e]:o}))},[]),Re=(e,r,t)=>{const n=[...o.headers];n[e]={...n[e],[r]:t},Fe("headers",n)},He=(e,r,t)=>{const n=[...o.params];n[e]={...n[e],[r]:t},Fe("params",n)},Ne=(0,t.useCallback)(async()=>{if(!o.url.trim())return;Oe.current?.abort();const e=new AbortController;Oe.current=e,be(!0),$e(null),y(null);const r=performance.now();try{const t=function(e,o){const r=o.filter(e=>e.enabled&&e.key.trim());if(!r.length)return e;const t=r.map(e=>`${encodeURIComponent(e.key)}=${encodeURIComponent(e.value)}`).join("&");return e.includes("?")?`${e}&${t}`:`${e}?${t}`}(o.url.trim(),o.params),n={};let s;o.headers.filter(e=>e.enabled&&e.key.trim()).forEach(e=>{n[e.key.trim()]=e.value}),"none"!==o.bodyType&&"GET"!==o.method&&"HEAD"!==o.method&&(s=o.body,"json"!==o.bodyType||n["Content-Type"]||n["content-type"]||(n["Content-Type"]="application/json"));const a=await fetch(t,{method:o.method,headers:n,body:s,signal:e.signal}),l=await a.text(),i=Math.round(performance.now()-r),d=(new TextEncoder).encode(l).length,c={};a.headers.forEach((e,o)=>{c[o]=e});const p={status:a.status,statusText:a.statusText,headers:c,body:l,timing:i,size:d};y(p);const x={id:`${Date.now()}-${Math.random()}`,method:o.method,url:o.url,timestamp:Date.now(),status:a.status};ze(e=>{const o=[x,...e];return w(o),o})}catch(e){if("AbortError"===e.name)return;$e(e instanceof Error?e.message:"Request failed")}finally{be(!1)}},[o]);(0,t.useEffect)(()=>{const e=e=>{(e.ctrlKey||e.metaKey)&&"Enter"===e.key&&(e.preventDefault(),Ne())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[Ne]);const[Pe,Ie]=(0,t.useState)(null),{pretty:Je,isJson:qe}=n?$(n.body):{pretty:"",isJson:!1},De=o.headers.filter(e=>e.enabled&&e.key.trim()).length,Le=o.params.filter(e=>e.enabled&&e.key.trim()).length,Ge=(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:s.w4.spacing.sm},children:[(0,u.jsxs)(ye,{onClick:()=>{r(me),y(null),$e(null),(0,s.Is)(ge,"")},children:[(0,u.jsx)(d.A,{size:13})," New"]}),(0,u.jsx)(s.UO,{appId:f,onLoad:(e,o,t)=>{Ie(o&&t?{id:o,name:t}:null);try{const o=JSON.parse(e);1===o.version&&r(o.request)}catch{}}}),(0,u.jsxs)(ye,{onClick:()=>Ae(!0),children:[(0,u.jsx)(p.A,{size:13}),"Save"]}),e]});return(0,u.jsxs)(s.PE,{title:"API Explorer",sidebar:(0,u.jsx)(s.tz,{activeAppId:"apiexplorer"}),topBarRight:Ge,children:[(0,u.jsxs)(j,{children:[(0,u.jsxs)(v,{children:[(0,u.jsxs)(k,{children:["History",Ce.length>0&&(0,u.jsx)(T,{title:"Clear history",onClick:()=>{ze([]),w([])},children:(0,u.jsx)(h.A,{size:12})})]}),(0,u.jsxs)(C,{style:{flex:Ce.length?1:0},children:[0===Ce.length&&(0,u.jsx)("div",{style:{padding:"8px 12px",fontSize:11,color:s.w4.colors.sidebarTextMuted},children:"No requests yet"}),Ce.map(e=>(0,u.jsxs)(z,{onClick:()=>r(o=>({...o,method:e.method,url:e.url})),children:[(0,u.jsxs)(S,{children:[e.status&&(0,u.jsx)(O,{status:e.status}),(0,u.jsx)(E,{method:e.method,children:e.method}),(0,u.jsx)(M,{children:e.url.replace(/^https?:\/\//,"")})]}),(0,u.jsxs)(A,{children:[e.status&&(0,u.jsxs)("span",{children:[e.status," · "]}),new Date(e.timestamp).toLocaleTimeString()]})]},e.id))]}),(0,u.jsxs)(B,{children:[(0,u.jsx)(k,{children:"Examples"}),m.map(e=>(0,u.jsxs)(F,{onClick:()=>r(e.req),children:[(0,u.jsx)(E,{method:e.req.method,children:e.req.method}),(0,u.jsx)(R,{children:e.label})]},e.label))]})]}),(0,u.jsxs)(H,{children:[(0,u.jsxs)(N,{children:[(0,u.jsx)(P,{method:o.method,value:o.method,onChange:e=>Fe("method",e.target.value),children:["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"].map(e=>(0,u.jsx)("option",{value:e,children:e},e))}),(0,u.jsx)(I,{value:o.url,onChange:e=>Fe("url",e.target.value),placeholder:"https://api.example.com/endpoint",onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||Ne()}}),(0,u.jsxs)(J,{loading:g,onClick:Ne,disabled:g,children:[(0,u.jsx)(x.A,{size:14}),g?"Sending…":"Send"]})]}),(0,u.jsxs)(oe,{children:[(0,u.jsxs)(re,{children:[(0,u.jsxs)(q,{children:[(0,u.jsxs)(D,{active:"params"===je,onClick:()=>ve("params"),children:["Params",Le>0&&(0,u.jsx)(L,{children:Le})]}),(0,u.jsxs)(D,{active:"headers"===je,onClick:()=>ve("headers"),children:["Headers",De>0&&(0,u.jsx)(L,{children:De})]}),(0,u.jsx)(D,{active:"body"===je,onClick:()=>ve("body"),children:"Body"})]}),"params"===je&&(0,u.jsxs)(G,{children:[o.params.map((e,r)=>(0,u.jsxs)(_,{children:[(0,u.jsx)(U,{type:"checkbox",checked:e.enabled,onChange:e=>He(r,"enabled",e.target.checked)}),(0,u.jsx)(K,{mono:!0,placeholder:"key",value:e.key,onChange:e=>He(r,"key",e.target.value)}),(0,u.jsx)(K,{mono:!0,placeholder:"value",value:e.value,onChange:e=>He(r,"value",e.target.value)}),(0,u.jsx)(W,{onClick:()=>(e=>Fe("params",o.params.filter((o,r)=>r!==e)))(r),children:(0,u.jsx)(h.A,{size:12})})]},r)),(0,u.jsxs)(Z,{onClick:()=>Fe("params",[...o.params,{key:"",value:"",enabled:!0}]),children:[(0,u.jsx)(c.A,{size:12})," Add param"]})]}),"headers"===je&&(0,u.jsxs)(G,{children:[o.headers.map((e,r)=>(0,u.jsxs)(_,{children:[(0,u.jsx)(U,{type:"checkbox",checked:e.enabled,onChange:e=>Re(r,"enabled",e.target.checked)}),(0,u.jsx)(K,{mono:!0,placeholder:"Header-Name",value:e.key,onChange:e=>Re(r,"key",e.target.value)}),(0,u.jsx)(K,{mono:!0,placeholder:"value",value:e.value,onChange:e=>Re(r,"value",e.target.value)}),(0,u.jsx)(W,{onClick:()=>(e=>Fe("headers",o.headers.filter((o,r)=>r!==e)))(r),children:(0,u.jsx)(h.A,{size:12})})]},r)),(0,u.jsxs)(Z,{onClick:()=>Fe("headers",[...o.headers,{key:"",value:"",enabled:!0}]),children:[(0,u.jsx)(c.A,{size:12})," Add header"]})]}),"body"===je&&(0,u.jsxs)(Q,{children:[(0,u.jsxs)(V,{children:[(0,u.jsx)(X,{children:"Body type:"}),["none","json","text","form"].map(e=>(0,u.jsx)(Y,{active:o.bodyType===e,onClick:()=>Fe("bodyType",e),children:e},e))]}),"none"!==o.bodyType?(0,u.jsx)(ee,{value:o.body,onChange:e=>Fe("body",e.target.value),placeholder:"json"===o.bodyType?'{\n  "key": "value"\n}':"Request body…",spellCheck:!1}):(0,u.jsxs)(ce,{style:{flex:1},children:[(0,u.jsx)(pe,{children:"⊘"}),(0,u.jsx)("span",{children:"No body"})]})]})]}),(0,u.jsxs)(te,{children:[we&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(ne,{children:[(0,u.jsx)(se,{status:0,children:"Error"}),(0,u.jsx)(ae,{children:we})]}),(0,u.jsxs)(ce,{children:[(0,u.jsx)(pe,{children:"⚠"}),(0,u.jsx)("span",{style:{color:"#f85149"},children:we}),(0,u.jsx)("span",{style:{fontSize:12,marginTop:4},children:"Check the URL or CORS headers on the server."})]})]}),!n&&!we&&!g&&(0,u.jsxs)(ce,{children:[(0,u.jsx)(pe,{children:"🛰"}),(0,u.jsx)("span",{children:"Hit Send to fire a request"}),(0,u.jsx)("span",{style:{fontSize:12},children:"⌘↵ / Ctrl↵ to send"})]}),g&&(0,u.jsxs)(ce,{children:[(0,u.jsx)(pe,{style:{animation:"spin 1s linear infinite"},children:"⟳"}),(0,u.jsx)("span",{children:"Waiting for response…"}),(0,u.jsx)("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),n&&!g&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(ne,{children:[(0,u.jsxs)(se,{status:n.status,children:[n.status," ",n.statusText]}),(0,u.jsxs)(ae,{children:[(0,u.jsx)(l.A,{size:11,style:{display:"inline",marginRight:3}}),n.timing," ms"]}),(0,u.jsx)(ae,{children:(Ue=n.size,Ue<1024?`${Ue} B`:Ue<1048576?`${(Ue/1024).toFixed(1)} KB`:`${(Ue/1048576).toFixed(1)} MB`)}),(0,u.jsx)(le,{copied:Se,onClick:()=>{if(!n)return;const{pretty:e}=$(n.body);navigator.clipboard.writeText(e).then(()=>{Ee(!0),setTimeout(()=>Ee(!1),1500)})},children:Se?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.A,{size:11})," Copied"]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.A,{size:11})," Copy"]})})]}),(0,u.jsxs)(q,{children:[(0,u.jsx)(D,{active:"body"===ke,onClick:()=>Te("body"),children:"Body"}),(0,u.jsxs)(D,{active:"headers"===ke,onClick:()=>Te("headers"),children:["Headers",(0,u.jsx)(L,{children:Object.keys(n.headers).length})]})]}),"body"===ke&&(0,u.jsx)(ie,{children:qe?(0,u.jsx)(de,{dangerouslySetInnerHTML:{__html:(_e=Je,_e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,e=>/^"/.test(e)?/:$/.test(e)?`<span style="color:#79c0ff">${e}</span>`:`<span style="color:#a5d6ff">${e}</span>`:/true|false/.test(e)?`<span style="color:#79c0ff">${e}</span>`:/null/.test(e)?`<span style="color:#8b949e">${e}</span>`:`<span style="color:#f2cc60">${e}</span>`))}}):(0,u.jsx)(de,{children:Je})}),"headers"===ke&&(0,u.jsx)(ie,{children:(0,u.jsx)(xe,{children:Object.entries(n.headers).map(([e,o])=>(0,u.jsxs)(he,{children:[(0,u.jsx)(ue,{children:e}),(0,u.jsx)(fe,{children:o})]},e))})})]})]})]})]})]}),Me&&(0,u.jsx)(s.MJ,{onSave:async e=>{const r={version:1,request:o};await(0,s.KL)(f,e,JSON.stringify(r)),Ae(!1),Ie(null)},onUpdate:async()=>{if(!Pe)return;const e={version:1,request:o};await(0,s.mZ)(Pe.id,Pe.name,JSON.stringify(e)),Ae(!1)},existingDoc:Pe??void 0,onCancel:()=>Ae(!1)})]});var _e,Ue}}}]);
//# sourceMappingURL=36.3b2f83453edfd5a42e65.js.map