"use strict";(self.webpackChunk_atlantis_apiexplorer=self.webpackChunk_atlantis_apiexplorer||[]).push([["362"],{3935(e,o,r){r.r(o),r.d(o,{default:()=>eh});var n=r(5723),t=r(7991),s=r(6859),a=r.n(s),i=r(6063),l=r(132);let d="apiexplorer",c={GET:"#3fb950",POST:"#a371f7",PUT:"#d29922",PATCH:"#f78166",DELETE:"#f85149",HEAD:"#58a6ff",OPTIONS:"#bc8cff"},p=[{label:"JSONPlaceholder — posts",req:{method:"GET",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Accept",value:"application/json",enabled:!0}],params:[{key:"_limit",value:"5",enabled:!0}],body:"",bodyType:"none"}},{label:"IP Geolocation",req:{method:"GET",url:"https://ipapi.co/json",headers:[],params:[],body:"",bodyType:"none"}},{label:"Open-Meteo weather (Lisbon)",req:{method:"GET",url:"https://api.open-meteo.com/v1/forecast",headers:[],params:[{key:"latitude",value:"38.72",enabled:!0},{key:"longitude",value:"-9.14",enabled:!0},{key:"current_weather",value:"true",enabled:!0}],body:"",bodyType:"none"}},{label:"POST — create post",req:{method:"POST",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Content-Type",value:"application/json",enabled:!0},{key:"Accept",value:"application/json",enabled:!0}],params:[],body:JSON.stringify({title:"Hello World",body:"API Explorer test",userId:1},null,2),bodyType:"json"}}],x="atlantis:apiexplorer:history";function h(){try{return JSON.parse(localStorage.getItem(x)??"[]")}catch{return[]}}function u(e){try{localStorage.setItem(x,JSON.stringify(e.slice(0,50)))}catch{}}function f(e){try{let o=JSON.parse(e);return{pretty:JSON.stringify(o,null,2),isJson:!0}}catch{return{pretty:e,isJson:!1}}}let m=a().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,y=a().div`
  width: 240px;
  min-width: 240px;
  border-right: 1px solid ${i.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${i.w4.colors.sidebarBg};
`,b=a().div`
  padding: 8px 12px 4px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${i.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,g=a().button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 3px;
  &:hover { color: ${i.w4.colors.mainText}; background: ${i.w4.colors.sidebarHover}; }
`,w=a().div`
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
`,$=a().button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6px 12px;
  background: ${({selected:e})=>e?i.w4.colors.sidebarHover:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 2px;
  transition: background ${i.w4.transitions.fast};
  &:hover { background: ${i.w4.colors.sidebarHover}; }
`,j=a().div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  min-width: 0;
`,v=a().span`
  font-size: 11px;
  font-weight: 700;
  font-family: ${i.w4.typography.fontFamilyMono};
  color: ${({method:e})=>c[e]};
  flex-shrink: 0;
`,k=a().span`
  font-size: 11px;
  color: ${i.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,T=a().span`
  font-size: 11px;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamilyMono};
`,C=a().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,z=a().div`
  border-top: 1px solid ${i.w4.colors.sidebarBorder};
  padding-bottom: 4px;
`,S=a().button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background ${i.w4.transitions.fast};
  &:hover { background: ${i.w4.colors.sidebarHover}; }
`,E=a().span`
  font-size: 11px;
  color: ${i.w4.colors.sidebarTextMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,M=a().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`,I=a().div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  background: ${i.w4.colors.surface};
  flex-shrink: 0;
`,O=a().select`
  height: 34px;
  padding: 0 8px;
  background: ${i.w4.colors.sidebarBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${({method:e})=>c[e]};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  option { color: ${i.w4.colors.mainText}; }
`,F=a().input`
  flex: 1;
  height: 34px;
  padding: 0 ${i.w4.spacing.md};
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 13px;
  outline: none;
  min-width: 0;
  transition: border-color ${i.w4.transitions.base};
  &::placeholder { color: ${i.w4.colors.sidebarTextMuted}; }
  &:focus { border-color: ${i.w4.colors.accent}; }
`,B=a().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 16px;
  background: ${i.w4.colors.accent};
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  color: #fff;
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 600;
  cursor: ${({loading:e})=>e?"wait":"pointer"};
  opacity: ${({loading:e})=>e?.7:1};
  transition: opacity ${i.w4.transitions.base}, background ${i.w4.transitions.base};
  flex-shrink: 0;
  &:hover:not(:disabled) { background: #4493f8; }
`,R=a().div`
  display: flex;
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  background: ${i.w4.colors.sidebarBg};
  flex-shrink: 0;
  padding: 0 ${i.w4.spacing.md};
  gap: 2px;
`,H=a().button`
  height: 36px;
  padding: 0 12px;
  background: none;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?i.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?i.w4.colors.mainText:i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?600:400};
  cursor: pointer;
  transition: color ${i.w4.transitions.base}, border-color ${i.w4.transitions.base};
  &:hover { color: ${i.w4.colors.mainText}; }
`,N=a().span`
  margin-left: 5px;
  font-size: 11px;
  background: ${i.w4.colors.border};
  color: ${i.w4.colors.sidebarTextMuted};
  border-radius: 8px;
  padding: 1px 5px;
`,P=a().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: ${i.w4.spacing.md};
  overflow-y: auto;
`,A=a().div`
  display: flex;
  align-items: center;
  gap: 6px;
`,J=a().input`
  cursor: pointer;
  accent-color: ${i.w4.colors.accent};
  flex-shrink: 0;
`,q=a().input`
  flex: 1;
  height: 30px;
  padding: 0 8px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${i.w4.colors.mainText};
  font-family: ${({mono:e})=>e?i.w4.typography.fontFamilyMono:i.w4.typography.fontFamily};
  font-size: 11px;
  outline: none;
  min-width: 0;
  &::placeholder { color: ${i.w4.colors.sidebarTextMuted}; }
  &:focus { border-color: ${i.w4.colors.accent}; }
`,D=a().button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  border-radius: 3px;
  flex-shrink: 0;
  &:hover { color: ${i.w4.colors.mainText}; background: ${i.w4.colors.sidebarHover}; }
`,L=a().button`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 28px;
  padding: 0 8px;
  background: none;
  border: 1px dashed ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  font-size: 11px;
  cursor: pointer;
  align-self: flex-start;
  transition: border-color ${i.w4.transitions.base}, color ${i.w4.transitions.base};
  &:hover { border-color: ${i.w4.colors.accent}; color: ${i.w4.colors.accent}; }
`,G=a().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,_=a().div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  padding: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,U=a().span`
  font-size: 11px;
  color: ${i.w4.colors.sidebarTextMuted};
`,K=a().button`
  height: 24px;
  padding: 0 10px;
  background: ${({active:e})=>e?"rgba(88,166,255,0.12)":"none"};
  border: 1px solid ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: all ${i.w4.transitions.base};
  &:hover { border-color: ${i.w4.colors.accent}; color: ${i.w4.colors.accent}; }
`,W=a().textarea`
  flex: 1;
  padding: ${i.w4.spacing.md};
  background: ${i.w4.colors.mainBg};
  border: none;
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  line-height: 1.6;
  resize: none;
  outline: none;
  min-height: 0;
`,Z=a().div`
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
`,Q=a().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-right: 1px solid ${i.w4.colors.sidebarBorder};
  overflow: hidden;
`,V=a().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`,X=a().div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.md};
  padding: 6px ${i.w4.spacing.md};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  background: ${i.w4.colors.surface};
  flex-shrink: 0;
`,Y=a().span`
  font-size: 11px;
  font-weight: 700;
  font-family: ${i.w4.typography.fontFamilyMono};
  color: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,ee=a().span`
  font-size: 11px;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamilyMono};
`,eo=a().button`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  padding: 0 8px;
  background: none;
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":i.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  margin-left: auto;
  transition: all ${i.w4.transitions.base};
  &:hover { border-color: ${i.w4.colors.accent}; color: ${i.w4.colors.accent}; }
`,er=a().div`
  flex: 1;
  overflow: auto;
  padding: ${i.w4.spacing.md};
`,en=a().pre`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  line-height: 1.7;
  color: ${i.w4.colors.mainText};
  white-space: pre-wrap;
  word-break: break-all;
  margin: 0;
`,et=a().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${i.w4.spacing.sm};
  color: ${i.w4.colors.sidebarTextMuted};
  font-size: ${i.w4.typography.fontSizeBase};
`,es=a().div`
  font-size: 32px;
  opacity: 0.4;
`,ea=a().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: ${i.w4.spacing.md};
`,ei=a().div`
  display: flex;
  gap: ${i.w4.spacing.md};
  font-size: 11px;
  font-family: ${i.w4.typography.fontFamilyMono};
  padding: 3px 0;
  border-bottom: 1px solid ${i.w4.colors.border};
`,el=a().span`
  color: ${i.w4.colors.accent};
  min-width: 200px;
  flex-shrink: 0;
`,ed=a().span`
  color: ${i.w4.colors.mainText};
  word-break: break-all;
`,ec=a().button`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 28px;
  padding: 0 10px;
  background: none;
  border: 1px solid ${i.w4.colors.sidebarBorder};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  font-size: 11px;
  cursor: pointer;
  transition: all ${i.w4.transitions.base};
  &:hover { border-color: ${i.w4.colors.accent}; color: ${i.w4.colors.accent}; }
`,ep={method:"GET",url:"",headers:[],params:[],body:"",bodyType:"none"},ex="toolkit:apiexplorer";function eh({topBarRight:e}){var o;let[r,s]=(0,t.useState)(ep),[a,c]=(0,t.useState)(null),[x,eu]=(0,t.useState)(!1),[ef,em]=(0,t.useState)(null),[ey,eb]=(0,t.useState)("params"),[eg,ew]=(0,t.useState)("body"),[e$,ej]=(0,t.useState)(h),[ev,ek]=(0,t.useState)(!1),[eT,eC]=(0,t.useState)(!1),ez=(0,t.useRef)(null),eS=(0,t.useRef)(!1);(0,t.useEffect)(()=>{(0,i.PL)(ex).then(e=>{if(e)try{s(JSON.parse(e))}catch{}eS.current=!0})},[]),(0,t.useEffect)(()=>{if(!eS.current)return;let e=setTimeout(()=>(0,i.Is)(ex,JSON.stringify(r)),400);return()=>clearTimeout(e)},[r]);let eE=(0,t.useCallback)((e,o)=>{s(r=>({...r,[e]:o}))},[]),eM=(e,o,n)=>{let t=[...r.headers];t[e]={...t[e],[o]:n},eE("headers",t)},eI=(e,o,n)=>{let t=[...r.params];t[e]={...t[e],[o]:n},eE("params",t)},eO=(0,t.useCallback)(async()=>{if(!r.url.trim())return;ez.current?.abort();let e=new AbortController;ez.current=e,eu(!0),em(null),c(null);let o=performance.now();try{let n,t=function(e,o){let r=o.filter(e=>e.enabled&&e.key.trim());if(!r.length)return e;let n=r.map(e=>`${encodeURIComponent(e.key)}=${encodeURIComponent(e.value)}`).join("&");return e.includes("?")?`${e}&${n}`:`${e}?${n}`}(r.url.trim(),r.params),s={};r.headers.filter(e=>e.enabled&&e.key.trim()).forEach(e=>{s[e.key.trim()]=e.value}),"none"!==r.bodyType&&"GET"!==r.method&&"HEAD"!==r.method&&(n=r.body,"json"!==r.bodyType||s["Content-Type"]||s["content-type"]||(s["Content-Type"]="application/json"));let a=await fetch(t,{method:r.method,headers:s,body:n,signal:e.signal}),i=await a.text(),l=Math.round(performance.now()-o),d=new TextEncoder().encode(i).length,p={};a.headers.forEach((e,o)=>{p[o]=e});let x={status:a.status,statusText:a.statusText,headers:p,body:i,timing:l,size:d};c(x);let h={id:`${Date.now()}-${Math.random()}`,method:r.method,url:r.url,timestamp:Date.now(),status:a.status};ej(e=>{let o=[h,...e];return u(o),o})}catch(e){if("AbortError"===e.name)return;em(e instanceof Error?e.message:"Request failed")}finally{eu(!1)}},[r]);(0,t.useEffect)(()=>{let e=e=>{(e.ctrlKey||e.metaKey)&&"Enter"===e.key&&(e.preventDefault(),eO())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[eO]);let[eF,eB]=(0,t.useState)(null),eR=async e=>{await (0,i.KL)(d,e,JSON.stringify({version:1,request:r})),eC(!1),eB(null)},eH=async()=>{eF&&(await (0,i.mZ)(eF.id,eF.name,JSON.stringify({version:1,request:r})),eC(!1))},{pretty:eN,isJson:eP}=a?f(a.body):{pretty:"",isJson:!1},eA=r.headers.filter(e=>e.enabled&&e.key.trim()).length,eJ=r.params.filter(e=>e.enabled&&e.key.trim()).length,eq=(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.w4.spacing.sm},children:[(0,n.jsxs)(ec,{onClick:()=>{s(ep),c(null),em(null),(0,i.Is)(ex,"")},children:[(0,n.jsx)(l.In,{name:"file-plus",size:13})," New"]}),(0,n.jsx)(i.UO,{appId:d,onLoad:(e,o,r)=>{eB(o&&r?{id:o,name:r}:null);try{let o=JSON.parse(e);1===o.version&&s(o.request)}catch{}}}),(0,n.jsxs)(ec,{onClick:()=>eC(!0),children:[(0,n.jsx)(l.In,{name:"save",size:13}),"Save"]}),e]});return(0,n.jsxs)(l.PE,{title:"API Explorer",sidebar:(0,n.jsx)(l.tz,{activeAppId:"apiexplorer"}),topBarRight:eq,children:[(0,n.jsxs)(m,{children:[(0,n.jsxs)(y,{children:[(0,n.jsxs)(b,{children:["History",e$.length>0&&(0,n.jsx)(g,{title:"Clear history",onClick:()=>{ej([]),u([])},children:(0,n.jsx)(l.In,{name:"trash",size:12})})]}),(0,n.jsxs)(w,{style:{flex:+!!e$.length},children:[0===e$.length&&(0,n.jsx)("div",{style:{padding:"8px 12px",fontSize:11,color:i.w4.colors.sidebarTextMuted},children:"No requests yet"}),e$.map(e=>(0,n.jsxs)($,{onClick:()=>s(o=>({...o,method:e.method,url:e.url})),children:[(0,n.jsxs)(j,{children:[e.status&&(0,n.jsx)(C,{status:e.status}),(0,n.jsx)(v,{method:e.method,children:e.method}),(0,n.jsx)(k,{children:e.url.replace(/^https?:\/\//,"")})]}),(0,n.jsxs)(T,{children:[e.status&&(0,n.jsxs)("span",{children:[e.status," \xb7 "]}),new Date(e.timestamp).toLocaleTimeString()]})]},e.id))]}),(0,n.jsxs)(z,{children:[(0,n.jsx)(b,{children:"Examples"}),p.map(e=>(0,n.jsxs)(S,{onClick:()=>s(e.req),children:[(0,n.jsx)(v,{method:e.req.method,children:e.req.method}),(0,n.jsx)(E,{children:e.label})]},e.label))]})]}),(0,n.jsxs)(M,{children:[(0,n.jsxs)(I,{children:[(0,n.jsx)(O,{method:r.method,value:r.method,onChange:e=>eE("method",e.target.value),children:["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"].map(e=>(0,n.jsx)("option",{value:e,children:e},e))}),(0,n.jsx)(F,{value:r.url,onChange:e=>eE("url",e.target.value),placeholder:"https://api.example.com/endpoint",onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||eO()}}),(0,n.jsxs)(B,{loading:x,onClick:eO,disabled:x,children:[(0,n.jsx)(l.In,{name:"send",size:14}),x?"Sending…":"Send"]})]}),(0,n.jsxs)(Z,{children:[(0,n.jsxs)(Q,{children:[(0,n.jsxs)(R,{children:[(0,n.jsxs)(H,{active:"params"===ey,onClick:()=>eb("params"),children:["Params",eJ>0&&(0,n.jsx)(N,{children:eJ})]}),(0,n.jsxs)(H,{active:"headers"===ey,onClick:()=>eb("headers"),children:["Headers",eA>0&&(0,n.jsx)(N,{children:eA})]}),(0,n.jsx)(H,{active:"body"===ey,onClick:()=>eb("body"),children:"Body"})]}),"params"===ey&&(0,n.jsxs)(P,{children:[r.params.map((e,o)=>(0,n.jsxs)(A,{children:[(0,n.jsx)(J,{type:"checkbox",checked:e.enabled,onChange:e=>eI(o,"enabled",e.target.checked)}),(0,n.jsx)(q,{mono:!0,placeholder:"key",value:e.key,onChange:e=>eI(o,"key",e.target.value)}),(0,n.jsx)(q,{mono:!0,placeholder:"value",value:e.value,onChange:e=>eI(o,"value",e.target.value)}),(0,n.jsx)(D,{onClick:()=>eE("params",r.params.filter((e,r)=>r!==o)),children:(0,n.jsx)(l.In,{name:"trash",size:12})})]},o)),(0,n.jsxs)(L,{onClick:()=>eE("params",[...r.params,{key:"",value:"",enabled:!0}]),children:[(0,n.jsx)(l.In,{name:"plus",size:12})," Add param"]})]}),"headers"===ey&&(0,n.jsxs)(P,{children:[r.headers.map((e,o)=>(0,n.jsxs)(A,{children:[(0,n.jsx)(J,{type:"checkbox",checked:e.enabled,onChange:e=>eM(o,"enabled",e.target.checked)}),(0,n.jsx)(q,{mono:!0,placeholder:"Header-Name",value:e.key,onChange:e=>eM(o,"key",e.target.value)}),(0,n.jsx)(q,{mono:!0,placeholder:"value",value:e.value,onChange:e=>eM(o,"value",e.target.value)}),(0,n.jsx)(D,{onClick:()=>eE("headers",r.headers.filter((e,r)=>r!==o)),children:(0,n.jsx)(l.In,{name:"trash",size:12})})]},o)),(0,n.jsxs)(L,{onClick:()=>eE("headers",[...r.headers,{key:"",value:"",enabled:!0}]),children:[(0,n.jsx)(l.In,{name:"plus",size:12})," Add header"]})]}),"body"===ey&&(0,n.jsxs)(G,{children:[(0,n.jsxs)(_,{children:[(0,n.jsx)(U,{children:"Body type:"}),["none","json","text","form"].map(e=>(0,n.jsx)(K,{active:r.bodyType===e,onClick:()=>eE("bodyType",e),children:e},e))]}),"none"!==r.bodyType?(0,n.jsx)(W,{value:r.body,onChange:e=>eE("body",e.target.value),placeholder:"json"===r.bodyType?'{\n  "key": "value"\n}':"Request body…",spellCheck:!1}):(0,n.jsxs)(et,{style:{flex:1},children:[(0,n.jsx)(es,{children:"⊘"}),(0,n.jsx)("span",{children:"No body"})]})]})]}),(0,n.jsxs)(V,{children:[ef&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(X,{children:[(0,n.jsx)(Y,{status:0,children:"Error"}),(0,n.jsx)(ee,{children:ef})]}),(0,n.jsxs)(et,{children:[(0,n.jsx)(es,{children:"⚠"}),(0,n.jsx)("span",{style:{color:"#f85149"},children:ef}),(0,n.jsx)("span",{style:{fontSize:12,marginTop:4},children:"Check the URL or CORS headers on the server."})]})]}),!a&&!ef&&!x&&(0,n.jsxs)(et,{children:[(0,n.jsx)(es,{children:"\uD83D\uDEF0"}),(0,n.jsx)("span",{children:"Hit Send to fire a request"}),(0,n.jsx)("span",{style:{fontSize:12},children:"⌘↵ / Ctrl↵ to send"})]}),x&&(0,n.jsxs)(et,{children:[(0,n.jsx)(es,{style:{animation:"spin 1s linear infinite"},children:"⟳"}),(0,n.jsx)("span",{children:"Waiting for response…"}),(0,n.jsx)("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),a&&!x&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(X,{children:[(0,n.jsxs)(Y,{status:a.status,children:[a.status," ",a.statusText]}),(0,n.jsxs)(ee,{children:[(0,n.jsx)(l.In,{name:"clock",size:11,style:{display:"inline",marginRight:3}}),a.timing," ms"]}),(0,n.jsx)(ee,{children:(o=a.size)<1024?`${o} B`:o<1048576?`${(o/1024).toFixed(1)} KB`:`${(o/1048576).toFixed(1)} MB`}),(0,n.jsx)(eo,{copied:ev,onClick:()=>{if(!a)return;let{pretty:e}=f(a.body);navigator.clipboard.writeText(e).then(()=>{ek(!0),setTimeout(()=>ek(!1),1500)})},children:ev?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.In,{name:"check",size:11})," Copied"]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.In,{name:"copy",size:11})," Copy"]})})]}),(0,n.jsxs)(R,{children:[(0,n.jsx)(H,{active:"body"===eg,onClick:()=>ew("body"),children:"Body"}),(0,n.jsxs)(H,{active:"headers"===eg,onClick:()=>ew("headers"),children:["Headers",(0,n.jsx)(N,{children:Object.keys(a.headers).length})]})]}),"body"===eg&&(0,n.jsx)(er,{children:eP?(0,n.jsx)(en,{dangerouslySetInnerHTML:{__html:eN.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,e=>/^"/.test(e)?/:$/.test(e)?`<span style="color:#79c0ff">${e}</span>`:`<span style="color:#a5d6ff">${e}</span>`:/true|false/.test(e)?`<span style="color:#79c0ff">${e}</span>`:/null/.test(e)?`<span style="color:#8b949e">${e}</span>`:`<span style="color:#f2cc60">${e}</span>`)}}):(0,n.jsx)(en,{children:eN})}),"headers"===eg&&(0,n.jsx)(er,{children:(0,n.jsx)(ea,{children:Object.entries(a.headers).map(([e,o])=>(0,n.jsxs)(ei,{children:[(0,n.jsx)(el,{children:e}),(0,n.jsx)(ed,{children:o})]},e))})})]})]})]})]})]}),eT&&(0,n.jsx)(l.MJ,{onSave:eR,onUpdate:eH,existingDoc:eF??void 0,onCancel:()=>eC(!1)})]})}}}]);