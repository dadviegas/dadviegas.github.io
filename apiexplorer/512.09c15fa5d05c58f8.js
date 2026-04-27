"use strict";(self.webpackChunk_atlantis_apiexplorer=self.webpackChunk_atlantis_apiexplorer||[]).push([["512"],{8997(e,o,r){var n=r(2727);o.createRoot=n.createRoot,n.hydrateRoot},3611(e,o,r){var n=r(5723),t=r(7991),s=r(8997),a=r(6859),i=r.n(a),l=r(6063),d=r(132);let c="apiexplorer",p={GET:"#3fb950",POST:"#a371f7",PUT:"#d29922",PATCH:"#f78166",DELETE:"#f85149",HEAD:"#58a6ff",OPTIONS:"#bc8cff"},h=[{label:"JSONPlaceholder — posts",req:{method:"GET",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Accept",value:"application/json",enabled:!0}],params:[{key:"_limit",value:"5",enabled:!0}],body:"",bodyType:"none"}},{label:"IP Geolocation",req:{method:"GET",url:"https://ipapi.co/json",headers:[],params:[],body:"",bodyType:"none"}},{label:"Open-Meteo weather (Lisbon)",req:{method:"GET",url:"https://api.open-meteo.com/v1/forecast",headers:[],params:[{key:"latitude",value:"38.72",enabled:!0},{key:"longitude",value:"-9.14",enabled:!0},{key:"current_weather",value:"true",enabled:!0}],body:"",bodyType:"none"}},{label:"POST — create post",req:{method:"POST",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Content-Type",value:"application/json",enabled:!0},{key:"Accept",value:"application/json",enabled:!0}],params:[],body:JSON.stringify({title:"Hello World",body:"API Explorer test",userId:1},null,2),bodyType:"json"}}],x="atlantis:apiexplorer:history";function u(){try{return JSON.parse(localStorage.getItem(x)??"[]")}catch{return[]}}function f(e){try{localStorage.setItem(x,JSON.stringify(e.slice(0,50)))}catch{}}function m(e){try{let o=JSON.parse(e);return{pretty:JSON.stringify(o,null,2),isJson:!0}}catch{return{pretty:e,isJson:!1}}}let y=i().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,b=i().div`
  width: 240px;
  min-width: 240px;
  border-right: 1px solid ${l.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${l.w4.colors.sidebarBg};
`,g=i().div`
  padding: 8px 12px 4px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,w=i().button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 3px;
  &:hover { color: ${l.w4.colors.mainText}; background: ${l.w4.colors.sidebarHover}; }
`,$=i().div`
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
`,j=i().button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6px 12px;
  background: ${({selected:e})=>e?l.w4.colors.sidebarHover:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 2px;
  transition: background ${l.w4.transitions.fast};
  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,v=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  min-width: 0;
`,k=i().span`
  font-size: 11px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${({method:e})=>p[e]};
  flex-shrink: 0;
`,T=i().span`
  font-size: 11px;
  color: ${l.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,C=i().span`
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
`,z=i().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,S=i().div`
  border-top: 1px solid ${l.w4.colors.sidebarBorder};
  padding-bottom: 4px;
`,E=i().button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background ${l.w4.transitions.fast};
  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,M=i().span`
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,I=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`,O=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  background: ${l.w4.colors.surface};
  flex-shrink: 0;
`,B=i().select`
  height: 34px;
  padding: 0 8px;
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({method:e})=>p[e]};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  option { color: ${l.w4.colors.mainText}; }
`,F=i().input`
  flex: 1;
  height: 34px;
  padding: 0 ${l.w4.spacing.md};
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 13px;
  outline: none;
  min-width: 0;
  transition: border-color ${l.w4.transitions.base};
  &::placeholder { color: ${l.w4.colors.sidebarTextMuted}; }
  &:focus { border-color: ${l.w4.colors.accent}; }
`,R=i().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 16px;
  background: ${l.w4.colors.accent};
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  color: #fff;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 600;
  cursor: ${({loading:e})=>e?"wait":"pointer"};
  opacity: ${({loading:e})=>e?.7:1};
  transition: opacity ${l.w4.transitions.base}, background ${l.w4.transitions.base};
  flex-shrink: 0;
  &:hover:not(:disabled) { background: #4493f8; }
`,H=i().div`
  display: flex;
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  background: ${l.w4.colors.sidebarBg};
  flex-shrink: 0;
  padding: 0 ${l.w4.spacing.md};
  gap: 2px;
`,N=i().button`
  height: 36px;
  padding: 0 12px;
  background: none;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?l.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.mainText:l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?600:400};
  cursor: pointer;
  transition: color ${l.w4.transitions.base}, border-color ${l.w4.transitions.base};
  &:hover { color: ${l.w4.colors.mainText}; }
`,P=i().span`
  margin-left: 5px;
  font-size: 11px;
  background: ${l.w4.colors.border};
  color: ${l.w4.colors.sidebarTextMuted};
  border-radius: 8px;
  padding: 1px 5px;
`,A=i().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: ${l.w4.spacing.md};
  overflow-y: auto;
`,J=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
`,q=i().input`
  cursor: pointer;
  accent-color: ${l.w4.colors.accent};
  flex-shrink: 0;
`,D=i().input`
  flex: 1;
  height: 30px;
  padding: 0 8px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainText};
  font-family: ${({mono:e})=>e?l.w4.typography.fontFamilyMono:l.w4.typography.fontFamily};
  font-size: 11px;
  outline: none;
  min-width: 0;
  &::placeholder { color: ${l.w4.colors.sidebarTextMuted}; }
  &:focus { border-color: ${l.w4.colors.accent}; }
`,L=i().button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  border-radius: 3px;
  flex-shrink: 0;
  &:hover { color: ${l.w4.colors.mainText}; background: ${l.w4.colors.sidebarHover}; }
`,G=i().button`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 28px;
  padding: 0 8px;
  background: none;
  border: 1px dashed ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 11px;
  cursor: pointer;
  align-self: flex-start;
  transition: border-color ${l.w4.transitions.base}, color ${l.w4.transitions.base};
  &:hover { border-color: ${l.w4.colors.accent}; color: ${l.w4.colors.accent}; }
`,_=i().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,U=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,K=i().span`
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
`,W=i().button`
  height: 24px;
  padding: 0 10px;
  background: ${({active:e})=>e?"rgba(88,166,255,0.12)":"none"};
  border: 1px solid ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: all ${l.w4.transitions.base};
  &:hover { border-color: ${l.w4.colors.accent}; color: ${l.w4.colors.accent}; }
`,Z=i().textarea`
  flex: 1;
  padding: ${l.w4.spacing.md};
  background: ${l.w4.colors.mainBg};
  border: none;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  line-height: 1.6;
  resize: none;
  outline: none;
  min-height: 0;
`,Q=i().div`
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
`,V=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-right: 1px solid ${l.w4.colors.sidebarBorder};
  overflow: hidden;
`,X=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`,Y=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.md};
  padding: 6px ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  background: ${l.w4.colors.surface};
  flex-shrink: 0;
`,ee=i().span`
  font-size: 11px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,eo=i().span`
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
`,er=i().button`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  padding: 0 8px;
  background: none;
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":l.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  margin-left: auto;
  transition: all ${l.w4.transitions.base};
  &:hover { border-color: ${l.w4.colors.accent}; color: ${l.w4.colors.accent}; }
`,en=i().div`
  flex: 1;
  overflow: auto;
  padding: ${l.w4.spacing.md};
`,et=i().pre`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  line-height: 1.7;
  color: ${l.w4.colors.mainText};
  white-space: pre-wrap;
  word-break: break-all;
  margin: 0;
`,es=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.sm};
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: ${l.w4.typography.fontSizeBase};
`,ea=i().div`
  font-size: 32px;
  opacity: 0.4;
`,ei=i().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: ${l.w4.spacing.md};
`,el=i().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  padding: 3px 0;
  border-bottom: 1px solid ${l.w4.colors.border};
`,ed=i().span`
  color: ${l.w4.colors.accent};
  min-width: 200px;
  flex-shrink: 0;
`,ec=i().span`
  color: ${l.w4.colors.mainText};
  word-break: break-all;
`,ep=i().button`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 28px;
  padding: 0 10px;
  background: none;
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 11px;
  cursor: pointer;
  transition: all ${l.w4.transitions.base};
  &:hover { border-color: ${l.w4.colors.accent}; color: ${l.w4.colors.accent}; }
`,eh={method:"GET",url:"",headers:[],params:[],body:"",bodyType:"none"},ex="toolkit:apiexplorer",eu=document.getElementById("root");if(!eu)throw Error("Root element #root not found");(0,s.createRoot)(eu).render((0,n.jsx)(function({topBarRight:e}){var o;let[r,s]=(0,t.useState)(eh),[a,i]=(0,t.useState)(null),[p,x]=(0,t.useState)(!1),[eu,ef]=(0,t.useState)(null),[em,ey]=(0,t.useState)("params"),[eb,eg]=(0,t.useState)("body"),[ew,e$]=(0,t.useState)(u),[ej,ev]=(0,t.useState)(!1),[ek,eT]=(0,t.useState)(!1),eC=(0,t.useRef)(null),ez=(0,t.useRef)(!1);(0,t.useEffect)(()=>{(0,l.PL)(ex).then(e=>{if(e)try{s(JSON.parse(e))}catch{}ez.current=!0})},[]),(0,t.useEffect)(()=>{if(!ez.current)return;let e=setTimeout(()=>(0,l.Is)(ex,JSON.stringify(r)),400);return()=>clearTimeout(e)},[r]);let eS=(0,t.useCallback)((e,o)=>{s(r=>({...r,[e]:o}))},[]),eE=(e,o,n)=>{let t=[...r.headers];t[e]={...t[e],[o]:n},eS("headers",t)},eM=(e,o,n)=>{let t=[...r.params];t[e]={...t[e],[o]:n},eS("params",t)},eI=(0,t.useCallback)(async()=>{if(!r.url.trim())return;eC.current?.abort();let e=new AbortController;eC.current=e,x(!0),ef(null),i(null);let o=performance.now();try{let n,t=function(e,o){let r=o.filter(e=>e.enabled&&e.key.trim());if(!r.length)return e;let n=r.map(e=>`${encodeURIComponent(e.key)}=${encodeURIComponent(e.value)}`).join("&");return e.includes("?")?`${e}&${n}`:`${e}?${n}`}(r.url.trim(),r.params),s={};r.headers.filter(e=>e.enabled&&e.key.trim()).forEach(e=>{s[e.key.trim()]=e.value}),"none"!==r.bodyType&&"GET"!==r.method&&"HEAD"!==r.method&&(n=r.body,"json"!==r.bodyType||s["Content-Type"]||s["content-type"]||(s["Content-Type"]="application/json"));let a=await fetch(t,{method:r.method,headers:s,body:n,signal:e.signal}),l=await a.text(),d=Math.round(performance.now()-o),c=new TextEncoder().encode(l).length,p={};a.headers.forEach((e,o)=>{p[o]=e});let h={status:a.status,statusText:a.statusText,headers:p,body:l,timing:d,size:c};i(h);let x={id:`${Date.now()}-${Math.random()}`,method:r.method,url:r.url,timestamp:Date.now(),status:a.status};e$(e=>{let o=[x,...e];return f(o),o})}catch(e){if("AbortError"===e.name)return;ef(e instanceof Error?e.message:"Request failed")}finally{x(!1)}},[r]);(0,t.useEffect)(()=>{let e=e=>{(e.ctrlKey||e.metaKey)&&"Enter"===e.key&&(e.preventDefault(),eI())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[eI]);let[eO,eB]=(0,t.useState)(null),eF=async e=>{await (0,l.KL)(c,e,JSON.stringify({version:1,request:r})),eT(!1),eB(null)},eR=async()=>{eO&&(await (0,l.mZ)(eO.id,eO.name,JSON.stringify({version:1,request:r})),eT(!1))},{pretty:eH,isJson:eN}=a?m(a.body):{pretty:"",isJson:!1},eP=r.headers.filter(e=>e.enabled&&e.key.trim()).length,eA=r.params.filter(e=>e.enabled&&e.key.trim()).length,eJ=(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm},children:[(0,n.jsxs)(ep,{onClick:()=>{s(eh),i(null),ef(null),(0,l.Is)(ex,"")},children:[(0,n.jsx)(d.In,{name:"file-plus",size:13})," New"]}),(0,n.jsx)(l.UO,{appId:c,onLoad:(e,o,r)=>{eB(o&&r?{id:o,name:r}:null);try{let o=JSON.parse(e);1===o.version&&s(o.request)}catch{}}}),(0,n.jsxs)(ep,{onClick:()=>eT(!0),children:[(0,n.jsx)(d.In,{name:"save",size:13}),"Save"]}),e]});return(0,n.jsxs)(d.PE,{title:"API Explorer",sidebar:(0,n.jsx)(d.tz,{activeAppId:"apiexplorer"}),topBarRight:eJ,children:[(0,n.jsxs)(y,{children:[(0,n.jsxs)(b,{children:[(0,n.jsxs)(g,{children:["History",ew.length>0&&(0,n.jsx)(w,{title:"Clear history",onClick:()=>{e$([]),f([])},children:(0,n.jsx)(d.In,{name:"trash",size:12})})]}),(0,n.jsxs)($,{style:{flex:+!!ew.length},children:[0===ew.length&&(0,n.jsx)("div",{style:{padding:"8px 12px",fontSize:11,color:l.w4.colors.sidebarTextMuted},children:"No requests yet"}),ew.map(e=>(0,n.jsxs)(j,{onClick:()=>s(o=>({...o,method:e.method,url:e.url})),children:[(0,n.jsxs)(v,{children:[e.status&&(0,n.jsx)(z,{status:e.status}),(0,n.jsx)(k,{method:e.method,children:e.method}),(0,n.jsx)(T,{children:e.url.replace(/^https?:\/\//,"")})]}),(0,n.jsxs)(C,{children:[e.status&&(0,n.jsxs)("span",{children:[e.status," \xb7 "]}),new Date(e.timestamp).toLocaleTimeString()]})]},e.id))]}),(0,n.jsxs)(S,{children:[(0,n.jsx)(g,{children:"Examples"}),h.map(e=>(0,n.jsxs)(E,{onClick:()=>s(e.req),children:[(0,n.jsx)(k,{method:e.req.method,children:e.req.method}),(0,n.jsx)(M,{children:e.label})]},e.label))]})]}),(0,n.jsxs)(I,{children:[(0,n.jsxs)(O,{children:[(0,n.jsx)(B,{method:r.method,value:r.method,onChange:e=>eS("method",e.target.value),children:["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"].map(e=>(0,n.jsx)("option",{value:e,children:e},e))}),(0,n.jsx)(F,{value:r.url,onChange:e=>eS("url",e.target.value),placeholder:"https://api.example.com/endpoint",onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||eI()}}),(0,n.jsxs)(R,{loading:p,onClick:eI,disabled:p,children:[(0,n.jsx)(d.In,{name:"send",size:14}),p?"Sending…":"Send"]})]}),(0,n.jsxs)(Q,{children:[(0,n.jsxs)(V,{children:[(0,n.jsxs)(H,{children:[(0,n.jsxs)(N,{active:"params"===em,onClick:()=>ey("params"),children:["Params",eA>0&&(0,n.jsx)(P,{children:eA})]}),(0,n.jsxs)(N,{active:"headers"===em,onClick:()=>ey("headers"),children:["Headers",eP>0&&(0,n.jsx)(P,{children:eP})]}),(0,n.jsx)(N,{active:"body"===em,onClick:()=>ey("body"),children:"Body"})]}),"params"===em&&(0,n.jsxs)(A,{children:[r.params.map((e,o)=>(0,n.jsxs)(J,{children:[(0,n.jsx)(q,{type:"checkbox",checked:e.enabled,onChange:e=>eM(o,"enabled",e.target.checked)}),(0,n.jsx)(D,{mono:!0,placeholder:"key",value:e.key,onChange:e=>eM(o,"key",e.target.value)}),(0,n.jsx)(D,{mono:!0,placeholder:"value",value:e.value,onChange:e=>eM(o,"value",e.target.value)}),(0,n.jsx)(L,{onClick:()=>eS("params",r.params.filter((e,r)=>r!==o)),children:(0,n.jsx)(d.In,{name:"trash",size:12})})]},o)),(0,n.jsxs)(G,{onClick:()=>eS("params",[...r.params,{key:"",value:"",enabled:!0}]),children:[(0,n.jsx)(d.In,{name:"plus",size:12})," Add param"]})]}),"headers"===em&&(0,n.jsxs)(A,{children:[r.headers.map((e,o)=>(0,n.jsxs)(J,{children:[(0,n.jsx)(q,{type:"checkbox",checked:e.enabled,onChange:e=>eE(o,"enabled",e.target.checked)}),(0,n.jsx)(D,{mono:!0,placeholder:"Header-Name",value:e.key,onChange:e=>eE(o,"key",e.target.value)}),(0,n.jsx)(D,{mono:!0,placeholder:"value",value:e.value,onChange:e=>eE(o,"value",e.target.value)}),(0,n.jsx)(L,{onClick:()=>eS("headers",r.headers.filter((e,r)=>r!==o)),children:(0,n.jsx)(d.In,{name:"trash",size:12})})]},o)),(0,n.jsxs)(G,{onClick:()=>eS("headers",[...r.headers,{key:"",value:"",enabled:!0}]),children:[(0,n.jsx)(d.In,{name:"plus",size:12})," Add header"]})]}),"body"===em&&(0,n.jsxs)(_,{children:[(0,n.jsxs)(U,{children:[(0,n.jsx)(K,{children:"Body type:"}),["none","json","text","form"].map(e=>(0,n.jsx)(W,{active:r.bodyType===e,onClick:()=>eS("bodyType",e),children:e},e))]}),"none"!==r.bodyType?(0,n.jsx)(Z,{value:r.body,onChange:e=>eS("body",e.target.value),placeholder:"json"===r.bodyType?'{\n  "key": "value"\n}':"Request body…",spellCheck:!1}):(0,n.jsxs)(es,{style:{flex:1},children:[(0,n.jsx)(ea,{children:"⊘"}),(0,n.jsx)("span",{children:"No body"})]})]})]}),(0,n.jsxs)(X,{children:[eu&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(Y,{children:[(0,n.jsx)(ee,{status:0,children:"Error"}),(0,n.jsx)(eo,{children:eu})]}),(0,n.jsxs)(es,{children:[(0,n.jsx)(ea,{children:"⚠"}),(0,n.jsx)("span",{style:{color:"#f85149"},children:eu}),(0,n.jsx)("span",{style:{fontSize:12,marginTop:4},children:"Check the URL or CORS headers on the server."})]})]}),!a&&!eu&&!p&&(0,n.jsxs)(es,{children:[(0,n.jsx)(ea,{children:"\uD83D\uDEF0"}),(0,n.jsx)("span",{children:"Hit Send to fire a request"}),(0,n.jsx)("span",{style:{fontSize:12},children:"⌘↵ / Ctrl↵ to send"})]}),p&&(0,n.jsxs)(es,{children:[(0,n.jsx)(ea,{style:{animation:"spin 1s linear infinite"},children:"⟳"}),(0,n.jsx)("span",{children:"Waiting for response…"}),(0,n.jsx)("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),a&&!p&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(Y,{children:[(0,n.jsxs)(ee,{status:a.status,children:[a.status," ",a.statusText]}),(0,n.jsxs)(eo,{children:[(0,n.jsx)(d.In,{name:"clock",size:11,style:{display:"inline",marginRight:3}}),a.timing," ms"]}),(0,n.jsx)(eo,{children:(o=a.size)<1024?`${o} B`:o<1048576?`${(o/1024).toFixed(1)} KB`:`${(o/1048576).toFixed(1)} MB`}),(0,n.jsx)(er,{copied:ej,onClick:()=>{if(!a)return;let{pretty:e}=m(a.body);navigator.clipboard.writeText(e).then(()=>{ev(!0),setTimeout(()=>ev(!1),1500)})},children:ej?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.In,{name:"check",size:11})," Copied"]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.In,{name:"copy",size:11})," Copy"]})})]}),(0,n.jsxs)(H,{children:[(0,n.jsx)(N,{active:"body"===eb,onClick:()=>eg("body"),children:"Body"}),(0,n.jsxs)(N,{active:"headers"===eb,onClick:()=>eg("headers"),children:["Headers",(0,n.jsx)(P,{children:Object.keys(a.headers).length})]})]}),"body"===eb&&(0,n.jsx)(en,{children:eN?(0,n.jsx)(et,{dangerouslySetInnerHTML:{__html:eH.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,e=>/^"/.test(e)?/:$/.test(e)?`<span style="color:#79c0ff">${e}</span>`:`<span style="color:#a5d6ff">${e}</span>`:/true|false/.test(e)?`<span style="color:#79c0ff">${e}</span>`:/null/.test(e)?`<span style="color:#8b949e">${e}</span>`:`<span style="color:#f2cc60">${e}</span>`)}}):(0,n.jsx)(et,{children:eH})}),"headers"===eb&&(0,n.jsx)(en,{children:(0,n.jsx)(ei,{children:Object.entries(a.headers).map(([e,o])=>(0,n.jsxs)(el,{children:[(0,n.jsx)(ed,{children:e}),(0,n.jsx)(ec,{children:o})]},e))})})]})]})]})]})]}),ek&&(0,n.jsx)(d.MJ,{onSave:eF,onUpdate:eR,existingDoc:eO??void 0,onCancel:()=>eT(!1)})]})},{}))}}]);