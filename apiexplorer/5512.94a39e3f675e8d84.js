"use strict";(self.webpackChunk_atlantis_apiexplorer=self.webpackChunk_atlantis_apiexplorer||[]).push([["5512"],{8997(e,o,r){var t=r(2727);o.createRoot=t.createRoot,t.hydrateRoot},3611(e,o,r){var t=r(5723),n=r(7991),s=r(8997),a=r(6859),i=r.n(a),l=r(5726),d=r(1638),c=r(1344),p=r(6480),x=r(4872),h=r(8739),u=r(1365),f=r(1783),y=r(5609),m=r(320);let g="apiexplorer",b={GET:"#3fb950",POST:"#a371f7",PUT:"#d29922",PATCH:"#f78166",DELETE:"#f85149",HEAD:"#58a6ff",OPTIONS:"#bc8cff"},w=[{label:"JSONPlaceholder — posts",req:{method:"GET",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Accept",value:"application/json",enabled:!0}],params:[{key:"_limit",value:"5",enabled:!0}],body:"",bodyType:"none"}},{label:"IP Geolocation",req:{method:"GET",url:"https://ipapi.co/json",headers:[],params:[],body:"",bodyType:"none"}},{label:"Open-Meteo weather (Lisbon)",req:{method:"GET",url:"https://api.open-meteo.com/v1/forecast",headers:[],params:[{key:"latitude",value:"38.72",enabled:!0},{key:"longitude",value:"-9.14",enabled:!0},{key:"current_weather",value:"true",enabled:!0}],body:"",bodyType:"none"}},{label:"POST — create post",req:{method:"POST",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Content-Type",value:"application/json",enabled:!0},{key:"Accept",value:"application/json",enabled:!0}],params:[],body:JSON.stringify({title:"Hello World",body:"API Explorer test",userId:1},null,2),bodyType:"json"}}],$="atlantis:apiexplorer:history";function j(){try{return JSON.parse(localStorage.getItem($)??"[]")}catch{return[]}}function v(e){try{localStorage.setItem($,JSON.stringify(e.slice(0,50)))}catch{}}function k(e){try{let o=JSON.parse(e);return{pretty:JSON.stringify(o,null,2),isJson:!0}}catch{return{pretty:e,isJson:!1}}}let T=i().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,C=i().div`
  width: 240px;
  min-width: 240px;
  border-right: 1px solid ${l.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${l.w4.colors.sidebarBg};
`,z=i().div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,S=i().button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 3px;
  &:hover { color: ${l.w4.colors.mainText}; background: ${l.w4.colors.sidebarHover}; }
`,E=i().div`
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
`,M=i().button`
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
  transition: background 0.1s;
  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,A=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  min-width: 0;
`,O=i().span`
  font-size: 10px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${({method:e})=>b[e]};
  flex-shrink: 0;
`,B=i().span`
  font-size: 11px;
  color: ${l.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,F=i().span`
  font-size: 10px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
`,R=i().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,H=i().div`
  border-top: 1px solid ${l.w4.colors.sidebarBorder};
  padding-bottom: 4px;
`,I=i().button`
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
  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,N=i().span`
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,P=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`,J=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  background: ${l.w4.colors.surface};
  flex-shrink: 0;
`,q=i().select`
  height: 34px;
  padding: 0 8px;
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({method:e})=>b[e]};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  option { color: ${l.w4.colors.mainText}; }
`,D=i().input`
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
  transition: border-color 0.15s;
  &::placeholder { color: ${l.w4.colors.sidebarTextMuted}; }
  &:focus { border-color: ${l.w4.colors.accent}; }
`,L=i().button`
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
  transition: opacity 0.15s, background 0.15s;
  flex-shrink: 0;
  &:hover:not(:disabled) { background: #4493f8; }
`,G=i().div`
  display: flex;
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  background: ${l.w4.colors.sidebarBg};
  flex-shrink: 0;
  padding: 0 ${l.w4.spacing.md};
  gap: 2px;
`,_=i().button`
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
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${l.w4.colors.mainText}; }
`,U=i().span`
  margin-left: 5px;
  font-size: 10px;
  background: ${l.w4.colors.border};
  color: ${l.w4.colors.sidebarTextMuted};
  border-radius: 8px;
  padding: 1px 5px;
`,K=i().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: ${l.w4.spacing.md};
  overflow-y: auto;
`,W=i().div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Z=i().input`
  cursor: pointer;
  accent-color: ${l.w4.colors.accent};
  flex-shrink: 0;
`,Q=i().input`
  flex: 1;
  height: 30px;
  padding: 0 8px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainText};
  font-family: ${({mono:e})=>e?l.w4.typography.fontFamilyMono:l.w4.typography.fontFamily};
  font-size: 12px;
  outline: none;
  min-width: 0;
  &::placeholder { color: ${l.w4.colors.sidebarTextMuted}; }
  &:focus { border-color: ${l.w4.colors.accent}; }
`,V=i().button`
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
`,X=i().button`
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
  font-size: 12px;
  cursor: pointer;
  align-self: flex-start;
  transition: border-color 0.15s, color 0.15s;
  &:hover { border-color: ${l.w4.colors.accent}; color: ${l.w4.colors.accent}; }
`,Y=i().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,ee=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,eo=i().span`
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
`,er=i().button`
  height: 24px;
  padding: 0 10px;
  background: ${({active:e})=>e?"rgba(88,166,255,0.12)":"none"};
  border: 1px solid ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s;
  &:hover { border-color: ${l.w4.colors.accent}; color: ${l.w4.colors.accent}; }
`,et=i().textarea`
  flex: 1;
  padding: ${l.w4.spacing.md};
  background: ${l.w4.colors.mainBg};
  border: none;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12px;
  line-height: 1.6;
  resize: none;
  outline: none;
  min-height: 0;
`,en=i().div`
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
`,es=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-right: 1px solid ${l.w4.colors.sidebarBorder};
  overflow: hidden;
`,ea=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`,ei=i().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.md};
  padding: 6px ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  background: ${l.w4.colors.surface};
  flex-shrink: 0;
`,el=i().span`
  font-size: 12px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,ed=i().span`
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
`,ec=i().button`
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
  transition: all 0.15s;
  &:hover { border-color: ${l.w4.colors.accent}; color: ${l.w4.colors.accent}; }
`,ep=i().div`
  flex: 1;
  overflow: auto;
  padding: ${l.w4.spacing.md};
`,ex=i().pre`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12px;
  line-height: 1.7;
  color: ${l.w4.colors.mainText};
  white-space: pre-wrap;
  word-break: break-all;
  margin: 0;
`,eh=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.sm};
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: ${l.w4.typography.fontSizeBase};
`,eu=i().div`
  font-size: 32px;
  opacity: 0.4;
`,ef=i().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: ${l.w4.spacing.md};
`,ey=i().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  font-size: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  padding: 3px 0;
  border-bottom: 1px solid ${l.w4.colors.border};
`,em=i().span`
  color: ${l.w4.colors.accent};
  min-width: 200px;
  flex-shrink: 0;
`,eg=i().span`
  color: ${l.w4.colors.mainText};
  word-break: break-all;
`,eb=i().button`
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
  font-size: 12px;
  cursor: pointer;
  transition: all 0.15s;
  &:hover { border-color: ${l.w4.colors.accent}; color: ${l.w4.colors.accent}; }
`,ew={method:"GET",url:"",headers:[],params:[],body:"",bodyType:"none"},e$="toolkit:apiexplorer",ej=document.getElementById("root");if(!ej)throw Error("Root element #root not found");(0,s.createRoot)(ej).render((0,t.jsx)(function({topBarRight:e}){var o;let[r,s]=(0,n.useState)(ew),[a,i]=(0,n.useState)(null),[b,$]=(0,n.useState)(!1),[ej,ev]=(0,n.useState)(null),[ek,eT]=(0,n.useState)("params"),[eC,ez]=(0,n.useState)("body"),[eS,eE]=(0,n.useState)(j),[eM,eA]=(0,n.useState)(!1),[eO,eB]=(0,n.useState)(!1),eF=(0,n.useRef)(null),eR=(0,n.useRef)(!1);(0,n.useEffect)(()=>{(0,l.PL)(e$).then(e=>{if(e)try{s(JSON.parse(e))}catch{}eR.current=!0})},[]),(0,n.useEffect)(()=>{if(!eR.current)return;let e=setTimeout(()=>(0,l.Is)(e$,JSON.stringify(r)),400);return()=>clearTimeout(e)},[r]);let eH=(0,n.useCallback)((e,o)=>{s(r=>({...r,[e]:o}))},[]),eI=(e,o,t)=>{let n=[...r.headers];n[e]={...n[e],[o]:t},eH("headers",n)},eN=(e,o,t)=>{let n=[...r.params];n[e]={...n[e],[o]:t},eH("params",n)},eP=(0,n.useCallback)(async()=>{if(!r.url.trim())return;eF.current?.abort();let e=new AbortController;eF.current=e,$(!0),ev(null),i(null);let o=performance.now();try{let t,n=function(e,o){let r=o.filter(e=>e.enabled&&e.key.trim());if(!r.length)return e;let t=r.map(e=>`${encodeURIComponent(e.key)}=${encodeURIComponent(e.value)}`).join("&");return e.includes("?")?`${e}&${t}`:`${e}?${t}`}(r.url.trim(),r.params),s={};r.headers.filter(e=>e.enabled&&e.key.trim()).forEach(e=>{s[e.key.trim()]=e.value}),"none"!==r.bodyType&&"GET"!==r.method&&"HEAD"!==r.method&&(t=r.body,"json"!==r.bodyType||s["Content-Type"]||s["content-type"]||(s["Content-Type"]="application/json"));let a=await fetch(n,{method:r.method,headers:s,body:t,signal:e.signal}),l=await a.text(),d=Math.round(performance.now()-o),c=new TextEncoder().encode(l).length,p={};a.headers.forEach((e,o)=>{p[o]=e});let x={status:a.status,statusText:a.statusText,headers:p,body:l,timing:d,size:c};i(x);let h={id:`${Date.now()}-${Math.random()}`,method:r.method,url:r.url,timestamp:Date.now(),status:a.status};eE(e=>{let o=[h,...e];return v(o),o})}catch(e){if("AbortError"===e.name)return;ev(e instanceof Error?e.message:"Request failed")}finally{$(!1)}},[r]);(0,n.useEffect)(()=>{let e=e=>{(e.ctrlKey||e.metaKey)&&"Enter"===e.key&&(e.preventDefault(),eP())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[eP]);let[eJ,eq]=(0,n.useState)(null),eD=async e=>{await (0,l.KL)(g,e,JSON.stringify({version:1,request:r})),eB(!1),eq(null)},eL=async()=>{eJ&&(await (0,l.mZ)(eJ.id,eJ.name,JSON.stringify({version:1,request:r})),eB(!1))},{pretty:eG,isJson:e_}=a?k(a.body):{pretty:"",isJson:!1},eU=r.headers.filter(e=>e.enabled&&e.key.trim()).length,eK=r.params.filter(e=>e.enabled&&e.key.trim()).length,eW=(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:l.w4.spacing.sm},children:[(0,t.jsxs)(eb,{onClick:()=>{s(ew),i(null),ev(null),(0,l.Is)(e$,"")},children:[(0,t.jsx)(c.A,{size:13})," New"]}),(0,t.jsx)(l.UO,{appId:g,onLoad:(e,o,r)=>{eq(o&&r?{id:o,name:r}:null);try{let o=JSON.parse(e);1===o.version&&s(o.request)}catch{}}}),(0,t.jsxs)(eb,{onClick:()=>eB(!0),children:[(0,t.jsx)(p.A,{size:13}),"Save"]}),e]});return(0,t.jsxs)(l.PE,{title:"API Explorer",sidebar:(0,t.jsx)(d.tz,{activeAppId:"apiexplorer"}),topBarRight:eW,children:[(0,t.jsxs)(T,{children:[(0,t.jsxs)(C,{children:[(0,t.jsxs)(z,{children:["History",eS.length>0&&(0,t.jsx)(S,{title:"Clear history",onClick:()=>{eE([]),v([])},children:(0,t.jsx)(x.A,{size:12})})]}),(0,t.jsxs)(E,{style:{flex:+!!eS.length},children:[0===eS.length&&(0,t.jsx)("div",{style:{padding:"8px 12px",fontSize:11,color:l.w4.colors.sidebarTextMuted},children:"No requests yet"}),eS.map(e=>(0,t.jsxs)(M,{onClick:()=>s(o=>({...o,method:e.method,url:e.url})),children:[(0,t.jsxs)(A,{children:[e.status&&(0,t.jsx)(R,{status:e.status}),(0,t.jsx)(O,{method:e.method,children:e.method}),(0,t.jsx)(B,{children:e.url.replace(/^https?:\/\//,"")})]}),(0,t.jsxs)(F,{children:[e.status&&(0,t.jsxs)("span",{children:[e.status," \xb7 "]}),new Date(e.timestamp).toLocaleTimeString()]})]},e.id))]}),(0,t.jsxs)(H,{children:[(0,t.jsx)(z,{children:"Examples"}),w.map(e=>(0,t.jsxs)(I,{onClick:()=>s(e.req),children:[(0,t.jsx)(O,{method:e.req.method,children:e.req.method}),(0,t.jsx)(N,{children:e.label})]},e.label))]})]}),(0,t.jsxs)(P,{children:[(0,t.jsxs)(J,{children:[(0,t.jsx)(q,{method:r.method,value:r.method,onChange:e=>eH("method",e.target.value),children:["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"].map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)(D,{value:r.url,onChange:e=>eH("url",e.target.value),placeholder:"https://api.example.com/endpoint",onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||eP()}}),(0,t.jsxs)(L,{loading:b,onClick:eP,disabled:b,children:[(0,t.jsx)(h.A,{size:14}),b?"Sending…":"Send"]})]}),(0,t.jsxs)(en,{children:[(0,t.jsxs)(es,{children:[(0,t.jsxs)(G,{children:[(0,t.jsxs)(_,{active:"params"===ek,onClick:()=>eT("params"),children:["Params",eK>0&&(0,t.jsx)(U,{children:eK})]}),(0,t.jsxs)(_,{active:"headers"===ek,onClick:()=>eT("headers"),children:["Headers",eU>0&&(0,t.jsx)(U,{children:eU})]}),(0,t.jsx)(_,{active:"body"===ek,onClick:()=>eT("body"),children:"Body"})]}),"params"===ek&&(0,t.jsxs)(K,{children:[r.params.map((e,o)=>(0,t.jsxs)(W,{children:[(0,t.jsx)(Z,{type:"checkbox",checked:e.enabled,onChange:e=>eN(o,"enabled",e.target.checked)}),(0,t.jsx)(Q,{mono:!0,placeholder:"key",value:e.key,onChange:e=>eN(o,"key",e.target.value)}),(0,t.jsx)(Q,{mono:!0,placeholder:"value",value:e.value,onChange:e=>eN(o,"value",e.target.value)}),(0,t.jsx)(V,{onClick:()=>eH("params",r.params.filter((e,r)=>r!==o)),children:(0,t.jsx)(x.A,{size:12})})]},o)),(0,t.jsxs)(X,{onClick:()=>eH("params",[...r.params,{key:"",value:"",enabled:!0}]),children:[(0,t.jsx)(u.A,{size:12})," Add param"]})]}),"headers"===ek&&(0,t.jsxs)(K,{children:[r.headers.map((e,o)=>(0,t.jsxs)(W,{children:[(0,t.jsx)(Z,{type:"checkbox",checked:e.enabled,onChange:e=>eI(o,"enabled",e.target.checked)}),(0,t.jsx)(Q,{mono:!0,placeholder:"Header-Name",value:e.key,onChange:e=>eI(o,"key",e.target.value)}),(0,t.jsx)(Q,{mono:!0,placeholder:"value",value:e.value,onChange:e=>eI(o,"value",e.target.value)}),(0,t.jsx)(V,{onClick:()=>eH("headers",r.headers.filter((e,r)=>r!==o)),children:(0,t.jsx)(x.A,{size:12})})]},o)),(0,t.jsxs)(X,{onClick:()=>eH("headers",[...r.headers,{key:"",value:"",enabled:!0}]),children:[(0,t.jsx)(u.A,{size:12})," Add header"]})]}),"body"===ek&&(0,t.jsxs)(Y,{children:[(0,t.jsxs)(ee,{children:[(0,t.jsx)(eo,{children:"Body type:"}),["none","json","text","form"].map(e=>(0,t.jsx)(er,{active:r.bodyType===e,onClick:()=>eH("bodyType",e),children:e},e))]}),"none"!==r.bodyType?(0,t.jsx)(et,{value:r.body,onChange:e=>eH("body",e.target.value),placeholder:"json"===r.bodyType?'{\n  "key": "value"\n}':"Request body…",spellCheck:!1}):(0,t.jsxs)(eh,{style:{flex:1},children:[(0,t.jsx)(eu,{children:"⊘"}),(0,t.jsx)("span",{children:"No body"})]})]})]}),(0,t.jsxs)(ea,{children:[ej&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ei,{children:[(0,t.jsx)(el,{status:0,children:"Error"}),(0,t.jsx)(ed,{children:ej})]}),(0,t.jsxs)(eh,{children:[(0,t.jsx)(eu,{children:"⚠"}),(0,t.jsx)("span",{style:{color:"#f85149"},children:ej}),(0,t.jsx)("span",{style:{fontSize:12,marginTop:4},children:"Check the URL or CORS headers on the server."})]})]}),!a&&!ej&&!b&&(0,t.jsxs)(eh,{children:[(0,t.jsx)(eu,{children:"\uD83D\uDEF0"}),(0,t.jsx)("span",{children:"Hit Send to fire a request"}),(0,t.jsx)("span",{style:{fontSize:12},children:"⌘↵ / Ctrl↵ to send"})]}),b&&(0,t.jsxs)(eh,{children:[(0,t.jsx)(eu,{style:{animation:"spin 1s linear infinite"},children:"⟳"}),(0,t.jsx)("span",{children:"Waiting for response…"}),(0,t.jsx)("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),a&&!b&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ei,{children:[(0,t.jsxs)(el,{status:a.status,children:[a.status," ",a.statusText]}),(0,t.jsxs)(ed,{children:[(0,t.jsx)(f.A,{size:11,style:{display:"inline",marginRight:3}}),a.timing," ms"]}),(0,t.jsx)(ed,{children:(o=a.size)<1024?`${o} B`:o<1048576?`${(o/1024).toFixed(1)} KB`:`${(o/1048576).toFixed(1)} MB`}),(0,t.jsx)(ec,{copied:eM,onClick:()=>{if(!a)return;let{pretty:e}=k(a.body);navigator.clipboard.writeText(e).then(()=>{eA(!0),setTimeout(()=>eA(!1),1500)})},children:eM?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.A,{size:11})," Copied"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.A,{size:11})," Copy"]})})]}),(0,t.jsxs)(G,{children:[(0,t.jsx)(_,{active:"body"===eC,onClick:()=>ez("body"),children:"Body"}),(0,t.jsxs)(_,{active:"headers"===eC,onClick:()=>ez("headers"),children:["Headers",(0,t.jsx)(U,{children:Object.keys(a.headers).length})]})]}),"body"===eC&&(0,t.jsx)(ep,{children:e_?(0,t.jsx)(ex,{dangerouslySetInnerHTML:{__html:eG.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,e=>/^"/.test(e)?/:$/.test(e)?`<span style="color:#79c0ff">${e}</span>`:`<span style="color:#a5d6ff">${e}</span>`:/true|false/.test(e)?`<span style="color:#79c0ff">${e}</span>`:/null/.test(e)?`<span style="color:#8b949e">${e}</span>`:`<span style="color:#f2cc60">${e}</span>`)}}):(0,t.jsx)(ex,{children:eG})}),"headers"===eC&&(0,t.jsx)(ep,{children:(0,t.jsx)(ef,{children:Object.entries(a.headers).map(([e,o])=>(0,t.jsxs)(ey,{children:[(0,t.jsx)(em,{children:e}),(0,t.jsx)(eg,{children:o})]},e))})})]})]})]})]})]}),eO&&(0,t.jsx)(l.MJ,{onSave:eD,onUpdate:eL,existingDoc:eJ??void 0,onCancel:()=>eB(!1)})]})},{}))}}]);