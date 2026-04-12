"use strict";(self.webpackChunk_atlantis_apiexplorer=self.webpackChunk_atlantis_apiexplorer||[]).push([[188],{188(e,o,r){var t=r(7359),n=r(8997),s=r(3233),a=r(4079),l=r(6480),i=r(4872),d=r(8739),c=r(1365),p=r(1783),h=r(5609),x=r(320),f=r(5723);const u="apiexplorer",g={GET:"#3fb950",POST:"#a371f7",PUT:"#d29922",PATCH:"#f78166",DELETE:"#f85149",HEAD:"#58a6ff",OPTIONS:"#bc8cff"},m=[{label:"JSONPlaceholder — posts",req:{method:"GET",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Accept",value:"application/json",enabled:!0}],params:[{key:"_limit",value:"5",enabled:!0}],body:"",bodyType:"none"}},{label:"IP Geolocation",req:{method:"GET",url:"https://ipapi.co/json",headers:[],params:[],body:"",bodyType:"none"}},{label:"Open-Meteo weather (Lisbon)",req:{method:"GET",url:"https://api.open-meteo.com/v1/forecast",headers:[],params:[{key:"latitude",value:"38.72",enabled:!0},{key:"longitude",value:"-9.14",enabled:!0},{key:"current_weather",value:"true",enabled:!0}],body:"",bodyType:"none"}},{label:"POST — create post",req:{method:"POST",url:"https://jsonplaceholder.typicode.com/posts",headers:[{key:"Content-Type",value:"application/json",enabled:!0},{key:"Accept",value:"application/json",enabled:!0}],params:[],body:JSON.stringify({title:"Hello World",body:"API Explorer test",userId:1},null,2),bodyType:"json"}}],y="atlantis:apiexplorer:history";function b(){try{return JSON.parse(localStorage.getItem(y)??"[]")}catch{return[]}}function w(e){try{localStorage.setItem(y,JSON.stringify(e.slice(0,50)))}catch{}}function $(e){try{const o=JSON.parse(e);return{pretty:JSON.stringify(o,null,2),isJson:!0}}catch{return{pretty:e,isJson:!1}}}const j=s.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${a.w4.colors.mainBg};
  font-family: ${a.w4.typography.fontFamily};
  color: ${a.w4.colors.mainText};
  overflow: hidden;
`,v=s.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  min-height: 48px;
  background: ${a.w4.colors.sidebarBg};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  padding: 0 ${a.w4.spacing.lg};
  gap: ${a.w4.spacing.md};
  flex-shrink: 0;
`,k=s.default.button`
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
`,T=s.default.span`
  color: ${a.w4.colors.border};
  margin: 0 2px;
`,z=s.default.div`
  font-size: ${a.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${a.w4.colors.mainText};
  flex-shrink: 0;
`,C=s.default.div` flex: 1; `,S=s.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
`,M=s.default.div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,E=s.default.div`
  width: 240px;
  min-width: 240px;
  border-right: 1px solid ${a.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${a.w4.colors.sidebarBg};
`,B=s.default.div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${a.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,A=s.default.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 3px;
  &:hover { color: ${a.w4.colors.mainText}; background: ${a.w4.colors.sidebarHover}; }
`,F=s.default.div`
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
`,O=s.default.button`
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
`,H=s.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  min-width: 0;
`,R=s.default.span`
  font-size: 10px;
  font-weight: 700;
  font-family: ${a.w4.typography.fontFamilyMono};
  color: ${({method:e})=>g[e]};
  flex-shrink: 0;
`,P=s.default.span`
  font-size: 11px;
  color: ${a.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,q=s.default.span`
  font-size: 10px;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamilyMono};
`,I=s.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,J=s.default.div`
  border-top: 1px solid ${a.w4.colors.sidebarBorder};
  padding-bottom: 4px;
`,N=s.default.button`
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
`,D=s.default.span`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,L=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`,_=s.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  background: ${a.w4.colors.surface};
  flex-shrink: 0;
`,G=s.default.select`
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
`,K=s.default.input`
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
`,U=s.default.button`
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
`,W=s.default.div`
  display: flex;
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  background: ${a.w4.colors.sidebarBg};
  flex-shrink: 0;
  padding: 0 ${a.w4.spacing.md};
  gap: 2px;
`,Z=s.default.button`
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
`,Q=s.default.span`
  margin-left: 5px;
  font-size: 10px;
  background: ${a.w4.colors.border};
  color: ${a.w4.colors.sidebarTextMuted};
  border-radius: 8px;
  padding: 1px 5px;
`,V=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: ${a.w4.spacing.md};
  overflow-y: auto;
`,X=s.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Y=s.default.input`
  cursor: pointer;
  accent-color: ${a.w4.colors.accent};
  flex-shrink: 0;
`,ee=s.default.input`
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
`,oe=s.default.button`
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
`,re=s.default.button`
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
`,te=s.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,ne=s.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.sm};
  padding: ${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,se=s.default.span`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
`,ae=s.default.button`
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
`,le=s.default.textarea`
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
`,ie=s.default.div`
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
`,de=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-right: 1px solid ${a.w4.colors.sidebarBorder};
  overflow: hidden;
`,ce=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`,pe=s.default.div`
  display: flex;
  align-items: center;
  gap: ${a.w4.spacing.md};
  padding: 6px ${a.w4.spacing.md};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  background: ${a.w4.colors.surface};
  flex-shrink: 0;
`,he=s.default.span`
  font-size: 12px;
  font-weight: 700;
  font-family: ${a.w4.typography.fontFamilyMono};
  color: ${({status:e})=>e>=500?"#f85149":e>=400?"#d29922":e>=300?"#58a6ff":"#3fb950"};
`,xe=s.default.span`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamilyMono};
`,fe=s.default.button`
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
`,ue=s.default.div`
  flex: 1;
  overflow: auto;
  padding: ${a.w4.spacing.md};
`,ge=s.default.pre`
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 12px;
  line-height: 1.7;
  color: ${a.w4.colors.mainText};
  white-space: pre-wrap;
  word-break: break-all;
  margin: 0;
`,me=s.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${a.w4.spacing.sm};
  color: ${a.w4.colors.sidebarTextMuted};
  font-size: ${a.w4.typography.fontSizeBase};
`,ye=s.default.div`
  font-size: 32px;
  opacity: 0.4;
`,be=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: ${a.w4.spacing.md};
`,we=s.default.div`
  display: flex;
  gap: ${a.w4.spacing.md};
  font-size: 12px;
  font-family: ${a.w4.typography.fontFamilyMono};
  padding: 3px 0;
  border-bottom: 1px solid ${a.w4.colors.border};
`,$e=s.default.span`
  color: ${a.w4.colors.accent};
  min-width: 200px;
  flex-shrink: 0;
`,je=s.default.span`
  color: ${a.w4.colors.mainText};
  word-break: break-all;
`,ve=s.default.button`
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
`;function ke({topBarRight:e}){const[o,r]=(0,t.useState)(m[0].req),[n,s]=(0,t.useState)(null),[g,y]=(0,t.useState)(!1),[ke,Te]=(0,t.useState)(null),[ze,Ce]=(0,t.useState)("params"),[Se,Me]=(0,t.useState)("body"),[Ee,Be]=(0,t.useState)(b),[Ae,Fe]=(0,t.useState)(!1),[Oe,He]=(0,t.useState)(!1),Re=(0,t.useRef)(null),Pe=(0,t.useCallback)((e,o)=>{r(r=>({...r,[e]:o}))},[]),qe=(e,r,t)=>{const n=[...o.headers];n[e][r]=t,Pe("headers",n)},Ie=(e,r,t)=>{const n=[...o.params];n[e][r]=t,Pe("params",n)},Je=(0,t.useCallback)(async()=>{if(!o.url.trim())return;Re.current?.abort();const e=new AbortController;Re.current=e,y(!0),Te(null),s(null);const r=performance.now();try{const t=function(e,o){const r=o.filter(e=>e.enabled&&e.key.trim());if(!r.length)return e;const t=r.map(e=>`${encodeURIComponent(e.key)}=${encodeURIComponent(e.value)}`).join("&");return e.includes("?")?`${e}&${t}`:`${e}?${t}`}(o.url.trim(),o.params),n={};let a;o.headers.filter(e=>e.enabled&&e.key.trim()).forEach(e=>{n[e.key.trim()]=e.value}),"none"!==o.bodyType&&"GET"!==o.method&&"HEAD"!==o.method&&(a=o.body,"json"!==o.bodyType||n["Content-Type"]||n["content-type"]||(n["Content-Type"]="application/json"));const l=await fetch(t,{method:o.method,headers:n,body:a,signal:e.signal}),i=await l.text(),d=Math.round(performance.now()-r),c=(new TextEncoder).encode(i).length,p={};l.headers.forEach((e,o)=>{p[o]=e});const h={status:l.status,statusText:l.statusText,headers:p,body:i,timing:d,size:c};s(h);const x={id:`${Date.now()}-${Math.random()}`,method:o.method,url:o.url,timestamp:Date.now(),status:l.status};Be(e=>{const o=[x,...e];return w(o),o})}catch(e){if("AbortError"===e.name)return;Te(e instanceof Error?e.message:"Request failed")}finally{y(!1)}},[o]);(0,t.useEffect)(()=>{const e=e=>{(e.ctrlKey||e.metaKey)&&"Enter"===e.key&&(e.preventDefault(),Je())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[Je]);const{pretty:Ne,isJson:De}=n?$(n.body):{pretty:"",isJson:!1},Le=o.headers.filter(e=>e.enabled&&e.key.trim()).length,_e=o.params.filter(e=>e.enabled&&e.key.trim()).length;return(0,f.jsxs)(j,{children:[(0,f.jsxs)(v,{children:[(0,f.jsxs)(k,{onClick:()=>{window.location.hash="#/home"},children:["Atl",(0,f.jsx)("span",{children:"antis"})]}),(0,f.jsx)(T,{children:"/"}),(0,f.jsx)(z,{children:"API Explorer"}),(0,f.jsx)(C,{}),(0,f.jsxs)(S,{children:[(0,f.jsx)(a.UO,{appId:u,onLoad:e=>{try{const o=JSON.parse(e);1===o.version&&r(o.request)}catch{}}}),(0,f.jsxs)(ve,{onClick:()=>He(!0),children:[(0,f.jsx)(l.A,{size:13}),"Save"]}),e]})]}),(0,f.jsxs)(M,{children:[(0,f.jsxs)(E,{children:[(0,f.jsxs)(B,{children:["History",Ee.length>0&&(0,f.jsx)(A,{title:"Clear history",onClick:()=>{Be([]),w([])},children:(0,f.jsx)(i.A,{size:12})})]}),(0,f.jsxs)(F,{style:{flex:Ee.length?1:0},children:[0===Ee.length&&(0,f.jsx)("div",{style:{padding:"8px 12px",fontSize:11,color:a.w4.colors.sidebarTextMuted},children:"No requests yet"}),Ee.map(e=>(0,f.jsxs)(O,{onClick:()=>r(o=>({...o,method:e.method,url:e.url})),children:[(0,f.jsxs)(H,{children:[e.status&&(0,f.jsx)(I,{status:e.status}),(0,f.jsx)(R,{method:e.method,children:e.method}),(0,f.jsx)(P,{children:e.url.replace(/^https?:\/\//,"")})]}),(0,f.jsxs)(q,{children:[e.status&&(0,f.jsxs)("span",{children:[e.status," · "]}),new Date(e.timestamp).toLocaleTimeString()]})]},e.id))]}),(0,f.jsxs)(J,{children:[(0,f.jsx)(B,{children:"Examples"}),m.map(e=>(0,f.jsxs)(N,{onClick:()=>r(e.req),children:[(0,f.jsx)(R,{method:e.req.method,children:e.req.method}),(0,f.jsx)(D,{children:e.label})]},e.label))]})]}),(0,f.jsxs)(L,{children:[(0,f.jsxs)(_,{children:[(0,f.jsx)(G,{method:o.method,value:o.method,onChange:e=>Pe("method",e.target.value),children:["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"].map(e=>(0,f.jsx)("option",{value:e,children:e},e))}),(0,f.jsx)(K,{value:o.url,onChange:e=>Pe("url",e.target.value),placeholder:"https://api.example.com/endpoint",onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||Je()}}),(0,f.jsxs)(U,{loading:g,onClick:Je,disabled:g,children:[(0,f.jsx)(d.A,{size:14}),g?"Sending…":"Send"]})]}),(0,f.jsxs)(ie,{children:[(0,f.jsxs)(de,{children:[(0,f.jsxs)(W,{children:[(0,f.jsxs)(Z,{active:"params"===ze,onClick:()=>Ce("params"),children:["Params",_e>0&&(0,f.jsx)(Q,{children:_e})]}),(0,f.jsxs)(Z,{active:"headers"===ze,onClick:()=>Ce("headers"),children:["Headers",Le>0&&(0,f.jsx)(Q,{children:Le})]}),(0,f.jsx)(Z,{active:"body"===ze,onClick:()=>Ce("body"),children:"Body"})]}),"params"===ze&&(0,f.jsxs)(V,{children:[o.params.map((e,r)=>(0,f.jsxs)(X,{children:[(0,f.jsx)(Y,{type:"checkbox",checked:e.enabled,onChange:e=>Ie(r,"enabled",e.target.checked)}),(0,f.jsx)(ee,{mono:!0,placeholder:"key",value:e.key,onChange:e=>Ie(r,"key",e.target.value)}),(0,f.jsx)(ee,{mono:!0,placeholder:"value",value:e.value,onChange:e=>Ie(r,"value",e.target.value)}),(0,f.jsx)(oe,{onClick:()=>(e=>Pe("params",o.params.filter((o,r)=>r!==e)))(r),children:(0,f.jsx)(i.A,{size:12})})]},r)),(0,f.jsxs)(re,{onClick:()=>Pe("params",[...o.params,{key:"",value:"",enabled:!0}]),children:[(0,f.jsx)(c.A,{size:12})," Add param"]})]}),"headers"===ze&&(0,f.jsxs)(V,{children:[o.headers.map((e,r)=>(0,f.jsxs)(X,{children:[(0,f.jsx)(Y,{type:"checkbox",checked:e.enabled,onChange:e=>qe(r,"enabled",e.target.checked)}),(0,f.jsx)(ee,{mono:!0,placeholder:"Header-Name",value:e.key,onChange:e=>qe(r,"key",e.target.value)}),(0,f.jsx)(ee,{mono:!0,placeholder:"value",value:e.value,onChange:e=>qe(r,"value",e.target.value)}),(0,f.jsx)(oe,{onClick:()=>(e=>Pe("headers",o.headers.filter((o,r)=>r!==e)))(r),children:(0,f.jsx)(i.A,{size:12})})]},r)),(0,f.jsxs)(re,{onClick:()=>Pe("headers",[...o.headers,{key:"",value:"",enabled:!0}]),children:[(0,f.jsx)(c.A,{size:12})," Add header"]})]}),"body"===ze&&(0,f.jsxs)(te,{children:[(0,f.jsxs)(ne,{children:[(0,f.jsx)(se,{children:"Body type:"}),["none","json","text","form"].map(e=>(0,f.jsx)(ae,{active:o.bodyType===e,onClick:()=>Pe("bodyType",e),children:e},e))]}),"none"!==o.bodyType?(0,f.jsx)(le,{value:o.body,onChange:e=>Pe("body",e.target.value),placeholder:"json"===o.bodyType?'{\n  "key": "value"\n}':"Request body…",spellCheck:!1}):(0,f.jsxs)(me,{style:{flex:1},children:[(0,f.jsx)(ye,{children:"⊘"}),(0,f.jsx)("span",{children:"No body"})]})]})]}),(0,f.jsxs)(ce,{children:[ke&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(pe,{children:[(0,f.jsx)(he,{status:0,children:"Error"}),(0,f.jsx)(xe,{children:ke})]}),(0,f.jsxs)(me,{children:[(0,f.jsx)(ye,{children:"⚠"}),(0,f.jsx)("span",{style:{color:"#f85149"},children:ke}),(0,f.jsx)("span",{style:{fontSize:12,marginTop:4},children:"Check the URL or CORS headers on the server."})]})]}),!n&&!ke&&!g&&(0,f.jsxs)(me,{children:[(0,f.jsx)(ye,{children:"🛰"}),(0,f.jsx)("span",{children:"Hit Send to fire a request"}),(0,f.jsx)("span",{style:{fontSize:12},children:"⌘↵ / Ctrl↵ to send"})]}),g&&(0,f.jsxs)(me,{children:[(0,f.jsx)(ye,{style:{animation:"spin 1s linear infinite"},children:"⟳"}),(0,f.jsx)("span",{children:"Waiting for response…"}),(0,f.jsx)("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),n&&!g&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(pe,{children:[(0,f.jsxs)(he,{status:n.status,children:[n.status," ",n.statusText]}),(0,f.jsxs)(xe,{children:[(0,f.jsx)(p.A,{size:11,style:{display:"inline",marginRight:3}}),n.timing," ms"]}),(0,f.jsx)(xe,{children:(Ke=n.size,Ke<1024?`${Ke} B`:Ke<1048576?`${(Ke/1024).toFixed(1)} KB`:`${(Ke/1048576).toFixed(1)} MB`)}),(0,f.jsx)(fe,{copied:Ae,onClick:()=>{if(!n)return;const{pretty:e}=$(n.body);navigator.clipboard.writeText(e).then(()=>{Fe(!0),setTimeout(()=>Fe(!1),1500)})},children:Ae?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h.A,{size:11})," Copied"]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x.A,{size:11})," Copy"]})})]}),(0,f.jsxs)(W,{children:[(0,f.jsx)(Z,{active:"body"===Se,onClick:()=>Me("body"),children:"Body"}),(0,f.jsxs)(Z,{active:"headers"===Se,onClick:()=>Me("headers"),children:["Headers",(0,f.jsx)(Q,{children:Object.keys(n.headers).length})]})]}),"body"===Se&&(0,f.jsx)(ue,{children:De?(0,f.jsx)(ge,{dangerouslySetInnerHTML:{__html:(Ge=Ne,Ge.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,e=>/^"/.test(e)?/:$/.test(e)?`<span style="color:#79c0ff">${e}</span>`:`<span style="color:#a5d6ff">${e}</span>`:/true|false/.test(e)?`<span style="color:#79c0ff">${e}</span>`:/null/.test(e)?`<span style="color:#8b949e">${e}</span>`:`<span style="color:#f2cc60">${e}</span>`))}}):(0,f.jsx)(ge,{children:Ne})}),"headers"===Se&&(0,f.jsx)(ue,{children:(0,f.jsx)(be,{children:Object.entries(n.headers).map(([e,o])=>(0,f.jsxs)(we,{children:[(0,f.jsx)($e,{children:e}),(0,f.jsx)(je,{children:o})]},e))})})]})]})]})]})]}),Oe&&(0,f.jsx)(a.MJ,{onSave:async e=>{const r={version:1,request:o};await(0,a.KL)(u,e,JSON.stringify(r)),He(!1)},onCancel:()=>He(!1)})]});var Ge,Ke}const Te=document.getElementById("root");if(!Te)throw new Error("Root element #root not found");(0,n.H)(Te).render((0,f.jsx)(ke,{}))},8997(e,o,r){var t=r(8991);o.H=t.createRoot,t.hydrateRoot}}]);
//# sourceMappingURL=188.40be3b9bd8c07fbb56b3.js.map