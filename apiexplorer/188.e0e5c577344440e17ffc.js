"use strict";(self.webpackChunk_atlantis_apiexplorer=self.webpackChunk_atlantis_apiexplorer||[]).push([[188],{188(e,o,r){var t=r(7359),n=r(8997),s=r(3233),a=r(5723),l=r(6480),i=r(4872),d=r(8739),c=r(1365),p=r(1783),h=r(5609),x=r(320),u=r(8104);const f="apiexplorer",y={GET:"#3fb950",POST:"#a371f7",PUT:"#d29922",PATCH:"#f78166",DELETE:"#f85149",HEAD:"#58a6ff",OPTIONS:"#bc8cff"},m=[{label:"JSONPlaceholder — posts",req:{method:"GET",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Accept",value:"application/json",enabled:!0}],params:[{key:"_limit",value:"5",enabled:!0}],body:"",bodyType:"none"}},{label:"IP Geolocation",req:{method:"GET",url:"https://ipapi.co/json",headers:[],params:[],body:"",bodyType:"none"}},{label:"Open-Meteo weather (Lisbon)",req:{method:"GET",url:"https://api.open-meteo.com/v1/forecast",headers:[],params:[{key:"latitude",value:"38.72",enabled:!0},{key:"longitude",value:"-9.14",enabled:!0},{key:"current_weather",value:"true",enabled:!0}],body:"",bodyType:"none"}},{label:"POST — create post",req:{method:"POST",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Content-Type",value:"application/json",enabled:!0},{key:"Accept",value:"application/json",enabled:!0}],params:[],body:JSON.stringify({title:"Hello World",body:"API Explorer test",userId:1},null,2),bodyType:"json"}}],g="atlantis:apiexplorer:history";function b(){try{return JSON.parse(localStorage.getItem(g)??"[]")}catch{return[]}}function w(e){try{localStorage.setItem(g,JSON.stringify(e.slice(0,50)))}catch{}}function $(e){try{const o=JSON.parse(e);return{pretty:JSON.stringify(o,null,2),isJson:!0}}catch{return{pretty:e,isJson:!1}}}const j=s.default.div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,v=s.default.div`
  width: 240px;
  min-width: 240px;
  border-right: 1px solid ${a.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${a.w4.colors.sidebarBg};
`,k=s.default.div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${a.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,T=s.default.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 3px;
  &:hover { color: ${a.w4.colors.mainText}; background: ${a.w4.colors.sidebarHover}; }
`,C=s.default.div`
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
`,z=s.default.button`
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
`,S=s.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  min-width: 0;
`,E=s.default.span`
  font-size: 10px;
  font-weight: 700;
  font-family: ${a.w4.typography.fontFamilyMono};
  color: ${({method:e})=>y[e]};
  flex-shrink: 0;
`,M=s.default.span`
  font-size: 11px;
  color: ${a.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,A=s.default.span`
  font-size: 10px;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamilyMono};
`,B=s.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,F=s.default.div`
  border-top: 1px solid ${a.w4.colors.sidebarBorder};
  padding-bottom: 4px;
`,O=s.default.button`
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
`,R=s.default.span`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,H=s.default.div`
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
`,q=s.default.select`
  height: 34px;
  padding: 0 8px;
  background: ${a.w4.colors.sidebarBg};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm};
  color: ${({method:e})=>y[e]};
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  option { color: ${a.w4.colors.mainText}; }
`,I=s.default.input`
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
`,J=s.default.button`
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
`,N=s.default.div`
  display: flex;
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  background: ${a.w4.colors.sidebarBg};
  flex-shrink: 0;
  padding: 0 ${a.w4.spacing.md};
  gap: 2px;
`,D=s.default.button`
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
`,L=s.default.span`
  margin-left: 5px;
  font-size: 10px;
  background: ${a.w4.colors.border};
  color: ${a.w4.colors.sidebarTextMuted};
  border-radius: 8px;
  padding: 1px 5px;
`,_=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: ${a.w4.spacing.md};
  overflow-y: auto;
`,G=s.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,U=s.default.input`
  cursor: pointer;
  accent-color: ${a.w4.colors.accent};
  flex-shrink: 0;
`,K=s.default.input`
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
`,W=s.default.button`
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
`,Z=s.default.button`
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
`,Q=s.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,V=s.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,X=s.default.span`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
`,Y=s.default.button`
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
`,ee=s.default.textarea`
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
`,oe=s.default.div`
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
`,re=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-right: 1px solid ${a.w4.colors.sidebarBorder};
  overflow: hidden;
`,te=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`,ne=s.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.md};
  padding: 6px ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  background: ${a.w4.colors.surface};
  flex-shrink: 0;
`,se=s.default.span`
  font-size: 12px;
  font-weight: 700;
  font-family: ${a.w4.typography.fontFamilyMono};
  color: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,ae=s.default.span`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamilyMono};
`,le=s.default.button`
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
`,ie=s.default.div`
  flex: 1;
  overflow: auto;
  padding: ${a.w4.spacing.md};
`,de=s.default.pre`
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12px;
  line-height: 1.7;
  color: ${a.w4.colors.mainText};
  white-space: pre-wrap;
  word-break: break-all;
  margin: 0;
`,ce=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${a.w4.spacing.sm};
  color: ${a.w4.colors.sidebarTextMuted};
  font-size: ${a.w4.typography.fontSizeBase};
`,pe=s.default.div`
  font-size: 32px;
  opacity: 0.4;
`,he=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: ${a.w4.spacing.md};
`,xe=s.default.div`
  display: flex;
  gap: ${a.w4.spacing.md};
  font-size: 12px;
  font-family: ${a.w4.typography.fontFamilyMono};
  padding: 3px 0;
  border-bottom: 1px solid ${a.w4.colors.border};
`,ue=s.default.span`
  color: ${a.w4.colors.accent};
  min-width: 200px;
  flex-shrink: 0;
`,fe=s.default.span`
  color: ${a.w4.colors.mainText};
  word-break: break-all;
`,ye=s.default.button`
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
`;function me({topBarRight:e}){const[o,r]=(0,t.useState)(m[0].req),[n,s]=(0,t.useState)(null),[y,g]=(0,t.useState)(!1),[me,ge]=(0,t.useState)(null),[be,we]=(0,t.useState)("params"),[$e,je]=(0,t.useState)("body"),[ve,ke]=(0,t.useState)(b),[Te,Ce]=(0,t.useState)(!1),[ze,Se]=(0,t.useState)(!1),Ee=(0,t.useRef)(null),Me=(0,t.useCallback)((e,o)=>{r(r=>({...r,[e]:o}))},[]),Ae=(e,r,t)=>{const n=[...o.headers];n[e][r]=t,Me("headers",n)},Be=(e,r,t)=>{const n=[...o.params];n[e][r]=t,Me("params",n)},Fe=(0,t.useCallback)(async()=>{if(!o.url.trim())return;Ee.current?.abort();const e=new AbortController;Ee.current=e,g(!0),ge(null),s(null);const r=performance.now();try{const t=function(e,o){const r=o.filter(e=>e.enabled&&e.key.trim());if(!r.length)return e;const t=r.map(e=>`${encodeURIComponent(e.key)}=${encodeURIComponent(e.value)}`).join("&");return e.includes("?")?`${e}&${t}`:`${e}?${t}`}(o.url.trim(),o.params),n={};let a;o.headers.filter(e=>e.enabled&&e.key.trim()).forEach(e=>{n[e.key.trim()]=e.value}),"none"!==o.bodyType&&"GET"!==o.method&&"HEAD"!==o.method&&(a=o.body,"json"!==o.bodyType||n["Content-Type"]||n["content-type"]||(n["Content-Type"]="application/json"));const l=await fetch(t,{method:o.method,headers:n,body:a,signal:e.signal}),i=await l.text(),d=Math.round(performance.now()-r),c=(new TextEncoder).encode(i).length,p={};l.headers.forEach((e,o)=>{p[o]=e});const h={status:l.status,statusText:l.statusText,headers:p,body:i,timing:d,size:c};s(h);const x={id:`${Date.now()}-${Math.random()}`,method:o.method,url:o.url,timestamp:Date.now(),status:l.status};ke(e=>{const o=[x,...e];return w(o),o})}catch(e){if("AbortError"===e.name)return;ge(e instanceof Error?e.message:"Request failed")}finally{g(!1)}},[o]);(0,t.useEffect)(()=>{const e=e=>{(e.ctrlKey||e.metaKey)&&"Enter"===e.key&&(e.preventDefault(),Fe())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[Fe]);const[Oe,Re]=(0,t.useState)(null),{pretty:He,isJson:Pe}=n?$(n.body):{pretty:"",isJson:!1},qe=o.headers.filter(e=>e.enabled&&e.key.trim()).length,Ie=o.params.filter(e=>e.enabled&&e.key.trim()).length,Je=(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:a.w4.spacing.sm},children:[(0,u.jsx)(a.UO,{appId:f,onLoad:(e,o,t)=>{Re(o&&t?{id:o,name:t}:null);try{const o=JSON.parse(e);1===o.version&&r(o.request)}catch{}}}),(0,u.jsxs)(ye,{onClick:()=>Se(!0),children:[(0,u.jsx)(l.A,{size:13}),"Save"]}),e]});return(0,u.jsxs)(a.PE,{title:"API Explorer",sidebar:null,topBarRight:Je,children:[(0,u.jsxs)(j,{children:[(0,u.jsxs)(v,{children:[(0,u.jsxs)(k,{children:["History",ve.length>0&&(0,u.jsx)(T,{title:"Clear history",onClick:()=>{ke([]),w([])},children:(0,u.jsx)(i.A,{size:12})})]}),(0,u.jsxs)(C,{style:{flex:ve.length?1:0},children:[0===ve.length&&(0,u.jsx)("div",{style:{padding:"8px 12px",fontSize:11,color:a.w4.colors.sidebarTextMuted},children:"No requests yet"}),ve.map(e=>(0,u.jsxs)(z,{onClick:()=>r(o=>({...o,method:e.method,url:e.url})),children:[(0,u.jsxs)(S,{children:[e.status&&(0,u.jsx)(B,{status:e.status}),(0,u.jsx)(E,{method:e.method,children:e.method}),(0,u.jsx)(M,{children:e.url.replace(/^https?:\/\//,"")})]}),(0,u.jsxs)(A,{children:[e.status&&(0,u.jsxs)("span",{children:[e.status," · "]}),new Date(e.timestamp).toLocaleTimeString()]})]},e.id))]}),(0,u.jsxs)(F,{children:[(0,u.jsx)(k,{children:"Examples"}),m.map(e=>(0,u.jsxs)(O,{onClick:()=>r(e.req),children:[(0,u.jsx)(E,{method:e.req.method,children:e.req.method}),(0,u.jsx)(R,{children:e.label})]},e.label))]})]}),(0,u.jsxs)(H,{children:[(0,u.jsxs)(P,{children:[(0,u.jsx)(q,{method:o.method,value:o.method,onChange:e=>Me("method",e.target.value),children:["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"].map(e=>(0,u.jsx)("option",{value:e,children:e},e))}),(0,u.jsx)(I,{value:o.url,onChange:e=>Me("url",e.target.value),placeholder:"https://api.example.com/endpoint",onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||Fe()}}),(0,u.jsxs)(J,{loading:y,onClick:Fe,disabled:y,children:[(0,u.jsx)(d.A,{size:14}),y?"Sending…":"Send"]})]}),(0,u.jsxs)(oe,{children:[(0,u.jsxs)(re,{children:[(0,u.jsxs)(N,{children:[(0,u.jsxs)(D,{active:"params"===be,onClick:()=>we("params"),children:["Params",Ie>0&&(0,u.jsx)(L,{children:Ie})]}),(0,u.jsxs)(D,{active:"headers"===be,onClick:()=>we("headers"),children:["Headers",qe>0&&(0,u.jsx)(L,{children:qe})]}),(0,u.jsx)(D,{active:"body"===be,onClick:()=>we("body"),children:"Body"})]}),"params"===be&&(0,u.jsxs)(_,{children:[o.params.map((e,r)=>(0,u.jsxs)(G,{children:[(0,u.jsx)(U,{type:"checkbox",checked:e.enabled,onChange:e=>Be(r,"enabled",e.target.checked)}),(0,u.jsx)(K,{mono:!0,placeholder:"key",value:e.key,onChange:e=>Be(r,"key",e.target.value)}),(0,u.jsx)(K,{mono:!0,placeholder:"value",value:e.value,onChange:e=>Be(r,"value",e.target.value)}),(0,u.jsx)(W,{onClick:()=>(e=>Me("params",o.params.filter((o,r)=>r!==e)))(r),children:(0,u.jsx)(i.A,{size:12})})]},r)),(0,u.jsxs)(Z,{onClick:()=>Me("params",[...o.params,{key:"",value:"",enabled:!0}]),children:[(0,u.jsx)(c.A,{size:12})," Add param"]})]}),"headers"===be&&(0,u.jsxs)(_,{children:[o.headers.map((e,r)=>(0,u.jsxs)(G,{children:[(0,u.jsx)(U,{type:"checkbox",checked:e.enabled,onChange:e=>Ae(r,"enabled",e.target.checked)}),(0,u.jsx)(K,{mono:!0,placeholder:"Header-Name",value:e.key,onChange:e=>Ae(r,"key",e.target.value)}),(0,u.jsx)(K,{mono:!0,placeholder:"value",value:e.value,onChange:e=>Ae(r,"value",e.target.value)}),(0,u.jsx)(W,{onClick:()=>(e=>Me("headers",o.headers.filter((o,r)=>r!==e)))(r),children:(0,u.jsx)(i.A,{size:12})})]},r)),(0,u.jsxs)(Z,{onClick:()=>Me("headers",[...o.headers,{key:"",value:"",enabled:!0}]),children:[(0,u.jsx)(c.A,{size:12})," Add header"]})]}),"body"===be&&(0,u.jsxs)(Q,{children:[(0,u.jsxs)(V,{children:[(0,u.jsx)(X,{children:"Body type:"}),["none","json","text","form"].map(e=>(0,u.jsx)(Y,{active:o.bodyType===e,onClick:()=>Me("bodyType",e),children:e},e))]}),"none"!==o.bodyType?(0,u.jsx)(ee,{value:o.body,onChange:e=>Me("body",e.target.value),placeholder:"json"===o.bodyType?'{\n  "key": "value"\n}':"Request body…",spellCheck:!1}):(0,u.jsxs)(ce,{style:{flex:1},children:[(0,u.jsx)(pe,{children:"⊘"}),(0,u.jsx)("span",{children:"No body"})]})]})]}),(0,u.jsxs)(te,{children:[me&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(ne,{children:[(0,u.jsx)(se,{status:0,children:"Error"}),(0,u.jsx)(ae,{children:me})]}),(0,u.jsxs)(ce,{children:[(0,u.jsx)(pe,{children:"⚠"}),(0,u.jsx)("span",{style:{color:"#f85149"},children:me}),(0,u.jsx)("span",{style:{fontSize:12,marginTop:4},children:"Check the URL or CORS headers on the server."})]})]}),!n&&!me&&!y&&(0,u.jsxs)(ce,{children:[(0,u.jsx)(pe,{children:"🛰"}),(0,u.jsx)("span",{children:"Hit Send to fire a request"}),(0,u.jsx)("span",{style:{fontSize:12},children:"⌘↵ / Ctrl↵ to send"})]}),y&&(0,u.jsxs)(ce,{children:[(0,u.jsx)(pe,{style:{animation:"spin 1s linear infinite"},children:"⟳"}),(0,u.jsx)("span",{children:"Waiting for response…"}),(0,u.jsx)("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),n&&!y&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(ne,{children:[(0,u.jsxs)(se,{status:n.status,children:[n.status," ",n.statusText]}),(0,u.jsxs)(ae,{children:[(0,u.jsx)(p.A,{size:11,style:{display:"inline",marginRight:3}}),n.timing," ms"]}),(0,u.jsx)(ae,{children:(De=n.size,De<1024?`${De} B`:De<1048576?`${(De/1024).toFixed(1)} KB`:`${(De/1048576).toFixed(1)} MB`)}),(0,u.jsx)(le,{copied:Te,onClick:()=>{if(!n)return;const{pretty:e}=$(n.body);navigator.clipboard.writeText(e).then(()=>{Ce(!0),setTimeout(()=>Ce(!1),1500)})},children:Te?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h.A,{size:11})," Copied"]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x.A,{size:11})," Copy"]})})]}),(0,u.jsxs)(N,{children:[(0,u.jsx)(D,{active:"body"===$e,onClick:()=>je("body"),children:"Body"}),(0,u.jsxs)(D,{active:"headers"===$e,onClick:()=>je("headers"),children:["Headers",(0,u.jsx)(L,{children:Object.keys(n.headers).length})]})]}),"body"===$e&&(0,u.jsx)(ie,{children:Pe?(0,u.jsx)(de,{dangerouslySetInnerHTML:{__html:(Ne=He,Ne.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,e=>/^"/.test(e)?/:$/.test(e)?`<span style="color:#79c0ff">${e}</span>`:`<span style="color:#a5d6ff">${e}</span>`:/true|false/.test(e)?`<span style="color:#79c0ff">${e}</span>`:/null/.test(e)?`<span style="color:#8b949e">${e}</span>`:`<span style="color:#f2cc60">${e}</span>`))}}):(0,u.jsx)(de,{children:He})}),"headers"===$e&&(0,u.jsx)(ie,{children:(0,u.jsx)(he,{children:Object.entries(n.headers).map(([e,o])=>(0,u.jsxs)(xe,{children:[(0,u.jsx)(ue,{children:e}),(0,u.jsx)(fe,{children:o})]},e))})})]})]})]})]})]}),ze&&(0,u.jsx)(a.MJ,{onSave:async e=>{const r={version:1,request:o};await(0,a.KL)(f,e,JSON.stringify(r)),Se(!1),Re(null)},onUpdate:async()=>{if(!Oe)return;const e={version:1,request:o};await(0,a.mZ)(Oe.id,Oe.name,JSON.stringify(e)),Se(!1)},existingDoc:Oe??void 0,onCancel:()=>Se(!1)})]});var Ne,De}const ge=document.getElementById("root");if(!ge)throw new Error("Root element #root not found");(0,n.H)(ge).render((0,u.jsx)(me,{}))},8997(e,o,r){var t=r(8991);o.H=t.createRoot,t.hydrateRoot}}]);
//# sourceMappingURL=188.e0e5c577344440e17ffc.js.map