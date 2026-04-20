"use strict";(self.webpackChunk_atlantis_apiexplorer=self.webpackChunk_atlantis_apiexplorer||[]).push([["6362"],{3935(e,o,r){r.r(o),r.d(o,{default:()=>e$});var t=r(5723),n=r(7991),s=r(6859),i=r.n(s),a=r(3930),l=r(1638),d=r(1344),c=r(6480),p=r(4872),x=r(8739),h=r(1365),f=r(1783),u=r(5609),y=r(320);let b="apiexplorer",m={GET:"#3fb950",POST:"#a371f7",PUT:"#d29922",PATCH:"#f78166",DELETE:"#f85149",HEAD:"#58a6ff",OPTIONS:"#bc8cff"},g=[{label:"JSONPlaceholder — posts",req:{method:"GET",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Accept",value:"application/json",enabled:!0}],params:[{key:"_limit",value:"5",enabled:!0}],body:"",bodyType:"none"}},{label:"IP Geolocation",req:{method:"GET",url:"https://ipapi.co/json",headers:[],params:[],body:"",bodyType:"none"}},{label:"Open-Meteo weather (Lisbon)",req:{method:"GET",url:"https://api.open-meteo.com/v1/forecast",headers:[],params:[{key:"latitude",value:"38.72",enabled:!0},{key:"longitude",value:"-9.14",enabled:!0},{key:"current_weather",value:"true",enabled:!0}],body:"",bodyType:"none"}},{label:"POST — create post",req:{method:"POST",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Content-Type",value:"application/json",enabled:!0},{key:"Accept",value:"application/json",enabled:!0}],params:[],body:JSON.stringify({title:"Hello World",body:"API Explorer test",userId:1},null,2),bodyType:"json"}}],w="atlantis:apiexplorer:history";function $(){try{return JSON.parse(localStorage.getItem(w)??"[]")}catch{return[]}}function j(e){try{localStorage.setItem(w,JSON.stringify(e.slice(0,50)))}catch{}}function v(e){try{let o=JSON.parse(e);return{pretty:JSON.stringify(o,null,2),isJson:!0}}catch{return{pretty:e,isJson:!1}}}let k=i().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,T=i().div`
  width: 240px;
  min-width: 240px;
  border-right: 1px solid ${a.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${a.w4.colors.sidebarBg};
`,C=i().div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${a.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,z=i().button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 3px;
  &:hover { color: ${a.w4.colors.mainText}; background: ${a.w4.colors.sidebarHover}; }
`,S=i().div`
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
`,E=i().button`
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
  transition: background ${a.w4.transitions.fast};
  &:hover { background: ${a.w4.colors.sidebarHover}; }
`,M=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  min-width: 0;
`,A=i().span`
  font-size: 10px;
  font-weight: 700;
  font-family: ${a.w4.typography.fontFamilyMono};
  color: ${({method:e})=>m[e]};
  flex-shrink: 0;
`,O=i().span`
  font-size: 11px;
  color: ${a.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,F=i().span`
  font-size: 10px;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamilyMono};
`,B=i().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,R=i().div`
  border-top: 1px solid ${a.w4.colors.sidebarBorder};
  padding-bottom: 4px;
`,H=i().button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background ${a.w4.transitions.fast};
  &:hover { background: ${a.w4.colors.sidebarHover}; }
`,N=i().span`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,P=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`,I=i().div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  background: ${a.w4.colors.surface};
  flex-shrink: 0;
`,J=i().select`
  height: 34px;
  padding: 0 8px;
  background: ${a.w4.colors.sidebarBg};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${({method:e})=>m[e]};
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  option { color: ${a.w4.colors.mainText}; }
`,q=i().input`
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
  transition: border-color ${a.w4.transitions.base};
  &::placeholder { color: ${a.w4.colors.sidebarTextMuted}; }
  &:focus { border-color: ${a.w4.colors.accent}; }
`,D=i().button`
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
  transition: opacity ${a.w4.transitions.base}, background ${a.w4.transitions.base};
  flex-shrink: 0;
  &:hover:not(:disabled) { background: #4493f8; }
`,L=i().div`
  display: flex;
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  background: ${a.w4.colors.sidebarBg};
  flex-shrink: 0;
  padding: 0 ${a.w4.spacing.md};
  gap: 2px;
`,G=i().button`
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
  transition: color ${a.w4.transitions.base}, border-color ${a.w4.transitions.base};
  &:hover { color: ${a.w4.colors.mainText}; }
`,_=i().span`
  margin-left: 5px;
  font-size: 10px;
  background: ${a.w4.colors.border};
  color: ${a.w4.colors.sidebarTextMuted};
  border-radius: 8px;
  padding: 1px 5px;
`,U=i().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: ${a.w4.spacing.md};
  overflow-y: auto;
`,K=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
`,W=i().input`
  cursor: pointer;
  accent-color: ${a.w4.colors.accent};
  flex-shrink: 0;
`,Z=i().input`
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
`,Q=i().button`
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
`,V=i().button`
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
  transition: border-color ${a.w4.transitions.base}, color ${a.w4.transitions.base};
  &:hover { border-color: ${a.w4.colors.accent}; color: ${a.w4.colors.accent}; }
`,X=i().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,Y=i().div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,ee=i().span`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
`,eo=i().button`
  height: 24px;
  padding: 0 10px;
  background: ${({active:e})=>e?"rgba(88,166,255,0.12)":"none"};
  border: 1px solid ${({active:e})=>e?a.w4.colors.accent:a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${({active:e})=>e?a.w4.colors.accent:a.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;
  transition: all ${a.w4.transitions.base};
  &:hover { border-color: ${a.w4.colors.accent}; color: ${a.w4.colors.accent}; }
`,er=i().textarea`
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
`,et=i().div`
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
`,en=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-right: 1px solid ${a.w4.colors.sidebarBorder};
  overflow: hidden;
`,es=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`,ei=i().div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.md};
  padding: 6px ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  background: ${a.w4.colors.surface};
  flex-shrink: 0;
`,ea=i().span`
  font-size: 12px;
  font-weight: 700;
  font-family: ${a.w4.typography.fontFamilyMono};
  color: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,el=i().span`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamilyMono};
`,ed=i().button`
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
  transition: all ${a.w4.transitions.base};
  &:hover { border-color: ${a.w4.colors.accent}; color: ${a.w4.colors.accent}; }
`,ec=i().div`
  flex: 1;
  overflow: auto;
  padding: ${a.w4.spacing.md};
`,ep=i().pre`
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12px;
  line-height: 1.7;
  color: ${a.w4.colors.mainText};
  white-space: pre-wrap;
  word-break: break-all;
  margin: 0;
`,ex=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${a.w4.spacing.sm};
  color: ${a.w4.colors.sidebarTextMuted};
  font-size: ${a.w4.typography.fontSizeBase};
`,eh=i().div`
  font-size: 32px;
  opacity: 0.4;
`,ef=i().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: ${a.w4.spacing.md};
`,eu=i().div`
  display: flex;
  gap: ${a.w4.spacing.md};
  font-size: 12px;
  font-family: ${a.w4.typography.fontFamilyMono};
  padding: 3px 0;
  border-bottom: 1px solid ${a.w4.colors.border};
`,ey=i().span`
  color: ${a.w4.colors.accent};
  min-width: 200px;
  flex-shrink: 0;
`,eb=i().span`
  color: ${a.w4.colors.mainText};
  word-break: break-all;
`,em=i().button`
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
  transition: all ${a.w4.transitions.base};
  &:hover { border-color: ${a.w4.colors.accent}; color: ${a.w4.colors.accent}; }
`,eg={method:"GET",url:"",headers:[],params:[],body:"",bodyType:"none"},ew="toolkit:apiexplorer";function e$({topBarRight:e}){var o;let[r,s]=(0,n.useState)(eg),[i,m]=(0,n.useState)(null),[w,ej]=(0,n.useState)(!1),[ev,ek]=(0,n.useState)(null),[eT,eC]=(0,n.useState)("params"),[ez,eS]=(0,n.useState)("body"),[eE,eM]=(0,n.useState)($),[eA,eO]=(0,n.useState)(!1),[eF,eB]=(0,n.useState)(!1),eR=(0,n.useRef)(null),eH=(0,n.useRef)(!1);(0,n.useEffect)(()=>{(0,a.PL)(ew).then(e=>{if(e)try{s(JSON.parse(e))}catch{}eH.current=!0})},[]),(0,n.useEffect)(()=>{if(!eH.current)return;let e=setTimeout(()=>(0,a.Is)(ew,JSON.stringify(r)),400);return()=>clearTimeout(e)},[r]);let eN=(0,n.useCallback)((e,o)=>{s(r=>({...r,[e]:o}))},[]),eP=(e,o,t)=>{let n=[...r.headers];n[e]={...n[e],[o]:t},eN("headers",n)},eI=(e,o,t)=>{let n=[...r.params];n[e]={...n[e],[o]:t},eN("params",n)},eJ=(0,n.useCallback)(async()=>{if(!r.url.trim())return;eR.current?.abort();let e=new AbortController;eR.current=e,ej(!0),ek(null),m(null);let o=performance.now();try{let t,n=function(e,o){let r=o.filter(e=>e.enabled&&e.key.trim());if(!r.length)return e;let t=r.map(e=>`${encodeURIComponent(e.key)}=${encodeURIComponent(e.value)}`).join("&");return e.includes("?")?`${e}&${t}`:`${e}?${t}`}(r.url.trim(),r.params),s={};r.headers.filter(e=>e.enabled&&e.key.trim()).forEach(e=>{s[e.key.trim()]=e.value}),"none"!==r.bodyType&&"GET"!==r.method&&"HEAD"!==r.method&&(t=r.body,"json"!==r.bodyType||s["Content-Type"]||s["content-type"]||(s["Content-Type"]="application/json"));let i=await fetch(n,{method:r.method,headers:s,body:t,signal:e.signal}),a=await i.text(),l=Math.round(performance.now()-o),d=new TextEncoder().encode(a).length,c={};i.headers.forEach((e,o)=>{c[o]=e});let p={status:i.status,statusText:i.statusText,headers:c,body:a,timing:l,size:d};m(p);let x={id:`${Date.now()}-${Math.random()}`,method:r.method,url:r.url,timestamp:Date.now(),status:i.status};eM(e=>{let o=[x,...e];return j(o),o})}catch(e){if("AbortError"===e.name)return;ek(e instanceof Error?e.message:"Request failed")}finally{ej(!1)}},[r]);(0,n.useEffect)(()=>{let e=e=>{(e.ctrlKey||e.metaKey)&&"Enter"===e.key&&(e.preventDefault(),eJ())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[eJ]);let[eq,eD]=(0,n.useState)(null),eL=async e=>{await (0,a.KL)(b,e,JSON.stringify({version:1,request:r})),eB(!1),eD(null)},eG=async()=>{eq&&(await (0,a.mZ)(eq.id,eq.name,JSON.stringify({version:1,request:r})),eB(!1))},{pretty:e_,isJson:eU}=i?v(i.body):{pretty:"",isJson:!1},eK=r.headers.filter(e=>e.enabled&&e.key.trim()).length,eW=r.params.filter(e=>e.enabled&&e.key.trim()).length,eZ=(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.w4.spacing.sm},children:[(0,t.jsxs)(em,{onClick:()=>{s(eg),m(null),ek(null),(0,a.Is)(ew,"")},children:[(0,t.jsx)(d.A,{size:13})," New"]}),(0,t.jsx)(a.UO,{appId:b,onLoad:(e,o,r)=>{eD(o&&r?{id:o,name:r}:null);try{let o=JSON.parse(e);1===o.version&&s(o.request)}catch{}}}),(0,t.jsxs)(em,{onClick:()=>eB(!0),children:[(0,t.jsx)(c.A,{size:13}),"Save"]}),e]});return(0,t.jsxs)(a.PE,{title:"API Explorer",sidebar:(0,t.jsx)(l.tz,{activeAppId:"apiexplorer"}),topBarRight:eZ,children:[(0,t.jsxs)(k,{children:[(0,t.jsxs)(T,{children:[(0,t.jsxs)(C,{children:["History",eE.length>0&&(0,t.jsx)(z,{title:"Clear history",onClick:()=>{eM([]),j([])},children:(0,t.jsx)(p.A,{size:12})})]}),(0,t.jsxs)(S,{style:{flex:+!!eE.length},children:[0===eE.length&&(0,t.jsx)("div",{style:{padding:"8px 12px",fontSize:11,color:a.w4.colors.sidebarTextMuted},children:"No requests yet"}),eE.map(e=>(0,t.jsxs)(E,{onClick:()=>s(o=>({...o,method:e.method,url:e.url})),children:[(0,t.jsxs)(M,{children:[e.status&&(0,t.jsx)(B,{status:e.status}),(0,t.jsx)(A,{method:e.method,children:e.method}),(0,t.jsx)(O,{children:e.url.replace(/^https?:\/\//,"")})]}),(0,t.jsxs)(F,{children:[e.status&&(0,t.jsxs)("span",{children:[e.status," \xb7 "]}),new Date(e.timestamp).toLocaleTimeString()]})]},e.id))]}),(0,t.jsxs)(R,{children:[(0,t.jsx)(C,{children:"Examples"}),g.map(e=>(0,t.jsxs)(H,{onClick:()=>s(e.req),children:[(0,t.jsx)(A,{method:e.req.method,children:e.req.method}),(0,t.jsx)(N,{children:e.label})]},e.label))]})]}),(0,t.jsxs)(P,{children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(J,{method:r.method,value:r.method,onChange:e=>eN("method",e.target.value),children:["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"].map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(q,{value:r.url,onChange:e=>eN("url",e.target.value),placeholder:"https://api.example.com/endpoint",onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||eJ()}}),(0,t.jsxs)(D,{loading:w,onClick:eJ,disabled:w,children:[(0,t.jsx)(x.A,{size:14}),w?"Sending…":"Send"]})]}),(0,t.jsxs)(et,{children:[(0,t.jsxs)(en,{children:[(0,t.jsxs)(L,{children:[(0,t.jsxs)(G,{active:"params"===eT,onClick:()=>eC("params"),children:["Params",eW>0&&(0,t.jsx)(_,{children:eW})]}),(0,t.jsxs)(G,{active:"headers"===eT,onClick:()=>eC("headers"),children:["Headers",eK>0&&(0,t.jsx)(_,{children:eK})]}),(0,t.jsx)(G,{active:"body"===eT,onClick:()=>eC("body"),children:"Body"})]}),"params"===eT&&(0,t.jsxs)(U,{children:[r.params.map((e,o)=>(0,t.jsxs)(K,{children:[(0,t.jsx)(W,{type:"checkbox",checked:e.enabled,onChange:e=>eI(o,"enabled",e.target.checked)}),(0,t.jsx)(Z,{mono:!0,placeholder:"key",value:e.key,onChange:e=>eI(o,"key",e.target.value)}),(0,t.jsx)(Z,{mono:!0,placeholder:"value",value:e.value,onChange:e=>eI(o,"value",e.target.value)}),(0,t.jsx)(Q,{onClick:()=>eN("params",r.params.filter((e,r)=>r!==o)),children:(0,t.jsx)(p.A,{size:12})})]},o)),(0,t.jsxs)(V,{onClick:()=>eN("params",[...r.params,{key:"",value:"",enabled:!0}]),children:[(0,t.jsx)(h.A,{size:12})," Add param"]})]}),"headers"===eT&&(0,t.jsxs)(U,{children:[r.headers.map((e,o)=>(0,t.jsxs)(K,{children:[(0,t.jsx)(W,{type:"checkbox",checked:e.enabled,onChange:e=>eP(o,"enabled",e.target.checked)}),(0,t.jsx)(Z,{mono:!0,placeholder:"Header-Name",value:e.key,onChange:e=>eP(o,"key",e.target.value)}),(0,t.jsx)(Z,{mono:!0,placeholder:"value",value:e.value,onChange:e=>eP(o,"value",e.target.value)}),(0,t.jsx)(Q,{onClick:()=>eN("headers",r.headers.filter((e,r)=>r!==o)),children:(0,t.jsx)(p.A,{size:12})})]},o)),(0,t.jsxs)(V,{onClick:()=>eN("headers",[...r.headers,{key:"",value:"",enabled:!0}]),children:[(0,t.jsx)(h.A,{size:12})," Add header"]})]}),"body"===eT&&(0,t.jsxs)(X,{children:[(0,t.jsxs)(Y,{children:[(0,t.jsx)(ee,{children:"Body type:"}),["none","json","text","form"].map(e=>(0,t.jsx)(eo,{active:r.bodyType===e,onClick:()=>eN("bodyType",e),children:e},e))]}),"none"!==r.bodyType?(0,t.jsx)(er,{value:r.body,onChange:e=>eN("body",e.target.value),placeholder:"json"===r.bodyType?'{\n  "key": "value"\n}':"Request body…",spellCheck:!1}):(0,t.jsxs)(ex,{style:{flex:1},children:[(0,t.jsx)(eh,{children:"⊘"}),(0,t.jsx)("span",{children:"No body"})]})]})]}),(0,t.jsxs)(es,{children:[ev&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ei,{children:[(0,t.jsx)(ea,{status:0,children:"Error"}),(0,t.jsx)(el,{children:ev})]}),(0,t.jsxs)(ex,{children:[(0,t.jsx)(eh,{children:"⚠"}),(0,t.jsx)("span",{style:{color:"#f85149"},children:ev}),(0,t.jsx)("span",{style:{fontSize:12,marginTop:4},children:"Check the URL or CORS headers on the server."})]})]}),!i&&!ev&&!w&&(0,t.jsxs)(ex,{children:[(0,t.jsx)(eh,{children:"\uD83D\uDEF0"}),(0,t.jsx)("span",{children:"Hit Send to fire a request"}),(0,t.jsx)("span",{style:{fontSize:12},children:"⌘↵ / Ctrl↵ to send"})]}),w&&(0,t.jsxs)(ex,{children:[(0,t.jsx)(eh,{style:{animation:"spin 1s linear infinite"},children:"⟳"}),(0,t.jsx)("span",{children:"Waiting for response…"}),(0,t.jsx)("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),i&&!w&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ei,{children:[(0,t.jsxs)(ea,{status:i.status,children:[i.status," ",i.statusText]}),(0,t.jsxs)(el,{children:[(0,t.jsx)(f.A,{size:11,style:{display:"inline",marginRight:3}}),i.timing," ms"]}),(0,t.jsx)(el,{children:(o=i.size)<1024?`${o} B`:o<1048576?`${(o/1024).toFixed(1)} KB`:`${(o/1048576).toFixed(1)} MB`}),(0,t.jsx)(ed,{copied:eA,onClick:()=>{if(!i)return;let{pretty:e}=v(i.body);navigator.clipboard.writeText(e).then(()=>{eO(!0),setTimeout(()=>eO(!1),1500)})},children:eA?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.A,{size:11})," Copied"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.A,{size:11})," Copy"]})})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(G,{active:"body"===ez,onClick:()=>eS("body"),children:"Body"}),(0,t.jsxs)(G,{active:"headers"===ez,onClick:()=>eS("headers"),children:["Headers",(0,t.jsx)(_,{children:Object.keys(i.headers).length})]})]}),"body"===ez&&(0,t.jsx)(ec,{children:eU?(0,t.jsx)(ep,{dangerouslySetInnerHTML:{__html:e_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,e=>/^"/.test(e)?/:$/.test(e)?`<span style="color:#79c0ff">${e}</span>`:`<span style="color:#a5d6ff">${e}</span>`:/true|false/.test(e)?`<span style="color:#79c0ff">${e}</span>`:/null/.test(e)?`<span style="color:#8b949e">${e}</span>`:`<span style="color:#f2cc60">${e}</span>`)}}):(0,t.jsx)(ep,{children:e_})}),"headers"===ez&&(0,t.jsx)(ec,{children:(0,t.jsx)(ef,{children:Object.entries(i.headers).map(([e,o])=>(0,t.jsxs)(eu,{children:[(0,t.jsx)(ey,{children:e}),(0,t.jsx)(eb,{children:o})]},e))})})]})]})]})]})]}),eF&&(0,t.jsx)(a.MJ,{onSave:eL,onUpdate:eG,existingDoc:eq??void 0,onCancel:()=>eB(!1)})]})}}}]);