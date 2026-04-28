"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([["210"],{158(e,t,r){r.d(t,{v:()=>N});var o=r(5723),a=r(7991),i=r(6859),n=r.n(i),l=r(6063),s=r(132);function d(e){return 0===e?{label:"Clear sky",emoji:"☀️"}:1===e?{label:"Mainly clear",emoji:"\uD83C\uDF24️"}:2===e?{label:"Partly cloudy",emoji:"⛅"}:3===e?{label:"Overcast",emoji:"☁️"}:e<=48?{label:"Fog",emoji:"\uD83C\uDF2B️"}:e<=55?{label:"Drizzle",emoji:"\uD83C\uDF26️"}:e<=65?{label:"Rain",emoji:"\uD83C\uDF27️"}:e<=75?{label:"Snow",emoji:"❄️"}:77===e?{label:"Snow grains",emoji:"\uD83C\uDF28️"}:e<=82?{label:"Rain showers",emoji:"\uD83C\uDF27️"}:e<=86?{label:"Snow showers",emoji:"\uD83C\uDF28️"}:{label:"Thunderstorm",emoji:"⛈️"}}let c="#58a6ff",p="#ff7b72",h="rgba(255,255,255,0.06)",g="#8b949e",x=[{threshold:0,color:"#3fb950"},{threshold:15,color:"#7ee787"},{threshold:25,color:"#d29922"},{threshold:38,color:"#f0883e"},{threshold:50,color:"#f85149"}],f=n().div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  flex-wrap: wrap;
`,u=n().div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 9px;
  color: ${g};
  font-family: monospace;
`,m=n().div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,b=[{label:"0–14",color:"#3fb950"},{label:"15–24",color:"#7ee787"},{label:"25–37",color:"#d29922"},{label:"38–49",color:"#f0883e"},{label:"50+",color:"#f85149"}];function w(e,t=.35){if(e.length<2)return"";let r=`M ${e[0].x.toFixed(2)} ${e[0].y.toFixed(2)}`;for(let o=0;o<e.length-1;o++){let a=e[Math.max(o-1,0)],i=e[o],n=e[o+1],l=e[Math.min(o+2,e.length-1)],s=i.x+(n.x-a.x)*t,d=i.y+(n.y-a.y)*t,c=n.x-(l.x-i.x)*t,p=n.y-(l.y-i.y)*t;r+=` C ${s.toFixed(2)} ${d.toFixed(2)} ${c.toFixed(2)} ${p.toFixed(2)} ${n.x.toFixed(2)} ${n.y.toFixed(2)}`}return r}function y({cx:e,cy:t,deg:r,size:a=7}){return(0,o.jsx)("g",{transform:`translate(${e},${t}) rotate(${r})`,children:(0,o.jsx)("polygon",{points:`0,${-a} ${.55*a},${.6*a} 0,${.2*a} ${-(.55*a)},${.6*a}`,fill:c,opacity:.85})})}function $({temps:e,feelsLike:t}){let r=228,a=52,i=[...e,...t],n=5*Math.floor(Math.min(...i)/5),l=5*Math.ceil(Math.max(...i)/5),s=l-n||1,d=e=>e.map((t,o)=>({x:32+o/(e.length-1)*r,y:14+a-(t-n)/s*a})),x=d(e),b=d(t),y=w(x),v=w(b),M=`${y} L ${x[x.length-1].x.toFixed(2)} ${(14+a).toFixed(2)} L ${x[0].x.toFixed(2)} ${(14+a).toFixed(2)} Z`,k=[0,6,12,18,23].map(t=>({label:23===t?"24h":`${t}h`,x:32+t/(e.length-1)*r})),z=[{label:`${l}\xb0`,y:14},{label:`${Math.round((l+n)/2)}\xb0`,y:14+a/2},{label:`${n}\xb0`,y:14+a}],j=x[Math.min(new Date().getHours(),x.length-1)];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("svg",{viewBox:"0 0 268 88",width:"100%",style:{display:"block",overflow:"visible"},children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{id:"tempGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,o.jsx)("stop",{offset:"0%",stopColor:c,stopOpacity:.25}),(0,o.jsx)("stop",{offset:"100%",stopColor:c,stopOpacity:0})]})}),z.map(({y:e})=>(0,o.jsx)("line",{x1:32,y1:e,x2:32+r,y2:e,stroke:h,strokeWidth:1},e)),(0,o.jsx)("path",{d:M,fill:"url(#tempGrad)"}),(0,o.jsx)("path",{d:v,fill:"none",stroke:p,strokeWidth:1,strokeDasharray:"3 4",opacity:.6}),(0,o.jsx)("path",{d:y,fill:"none",stroke:c,strokeWidth:1.5,strokeLinejoin:"round"}),(0,o.jsx)("circle",{cx:j.x,cy:j.y,r:3,fill:c}),k.map(({label:e,x:t})=>(0,o.jsx)("text",{x:t,y:84,textAnchor:"middle",fill:g,fontSize:9,fontFamily:"monospace",children:e},e)),z.map(({label:e,y:t})=>(0,o.jsx)("text",{x:28,y:t+3,textAnchor:"end",fill:g,fontSize:9,fontFamily:"monospace",children:e},e))]}),(0,o.jsxs)(f,{children:[(0,o.jsxs)(u,{children:[(0,o.jsx)(m,{color:c})," Actual"]}),(0,o.jsxs)(u,{style:{marginLeft:4},children:[(0,o.jsx)(m,{color:p,style:{opacity:.6}})," Feels like"]})]})]})}function v({speeds:e}){let t,r=232,a=52,i=5*Math.ceil(Math.max(...e,1)/5),n=e.map((t,o)=>({x:28+o/(e.length-1)*r,y:14+a-t/i*a})),l=w(n),s=`${l} L ${n[n.length-1].x.toFixed(2)} ${(14+a).toFixed(2)} L ${n[0].x.toFixed(2)} ${(14+a).toFixed(2)} Z`,d=[0,6,12,18,23].map(t=>({label:23===t?"24h":`${t}h`,x:28+t/(e.length-1)*r})),p=[{label:`${i}`,y:14},{label:`${Math.round(i/2)}`,y:14+a/2},{label:"0",y:14+a}];return(0,o.jsxs)("svg",{viewBox:"0 0 268 88",width:"100%",style:{display:"block",overflow:"visible"},children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{id:"windGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,o.jsx)("stop",{offset:"0%",stopColor:c,stopOpacity:.3}),(0,o.jsx)("stop",{offset:"100%",stopColor:c,stopOpacity:0})]})}),p.map(({y:e})=>(0,o.jsx)("line",{x1:28,y1:e,x2:28+r,y2:e,stroke:h,strokeWidth:1},e)),(0,o.jsx)("path",{d:s,fill:"url(#windGrad)"}),(0,o.jsx)("path",{d:l,fill:"none",stroke:c,strokeWidth:1.5,strokeLinejoin:"round"}),(t=n[Math.min(new Date().getHours(),n.length-1)],(0,o.jsx)("circle",{cx:t.x,cy:t.y,r:3,fill:c})),d.map(({label:e,x:t})=>(0,o.jsx)("text",{x:t,y:84,textAnchor:"middle",fill:g,fontSize:9,fontFamily:"monospace",children:e},e)),p.map(({label:e,y:t})=>(0,o.jsx)("text",{x:24,y:t+3,textAnchor:"end",fill:g,fontSize:9,fontFamily:"monospace",children:e},e))]})}function M({speeds:e,directions:t,dayLabels:r}){let a=e.length,i=5*Math.ceil(Math.max(...e,1)/5),n=252/a,l=.28*n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("svg",{viewBox:"0 0 268 110",width:"100%",style:{display:"block",overflow:"visible"},children:[(0,o.jsx)("line",{x1:8,y1:90,x2:260,y2:90,stroke:h,strokeWidth:1}),e.map((e,a)=>{let s=e/i*60,d=8+a*n+l/2,c=n-l,p=d+c/2,h=function(e){let t=x[0].color;for(let r of x)if(e>=r.threshold)t=r.color;else break;return t}(e);return(0,o.jsxs)("g",{children:[(0,o.jsx)(y,{cx:p,cy:7,deg:t[a],size:6}),(0,o.jsx)("text",{x:p,y:23,textAnchor:"middle",fill:h,fontSize:8,fontWeight:"600",fontFamily:"monospace",children:Math.round(e)}),(0,o.jsx)("rect",{x:d,y:90-s,width:c,height:s,fill:h,opacity:.85,rx:2}),(0,o.jsx)("text",{x:p,y:106,textAnchor:"middle",fill:g,fontSize:9,fontFamily:"monospace",children:r[a]})]},a)}),(0,o.jsx)("text",{x:260,y:88,textAnchor:"end",fill:g,fontSize:8,fontFamily:"monospace",children:"km/h"})]}),(0,o.jsx)(f,{children:b.map(({label:e,color:t})=>(0,o.jsxs)(u,{children:[(0,o.jsx)(m,{color:t}),e]},e))})]})}let k=n().div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: ${l.w4.colors.sidebarBg};
  border-left: 1px solid ${l.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  transform: translateX(${({visible:e})=>e?"0":"100%"});
  transition: transform ${l.w4.transitions.slow};
  z-index: 500;
  overflow: hidden;
`,z=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.md} ${l.w4.spacing.sm};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,j=n().h2`
  margin: 0;
  font-size: ${l.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,T=n().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,F=n().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
`,S=n().div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
`,L=n().span`
  font-size: 48px;
  line-height: 1;
`,H=n().div`
  font-size: 40px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamilyMono};
  line-height: 1;
`,C=n().div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 4px;
`,R=n().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,B=n().div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
`,V=n().div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: ${l.w4.spacing.sm};
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid ${({color:e})=>e};
  background: ${({color:e})=>e}18;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${({color:e})=>e};
`,A=n().div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: 2px;
`,_=n().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 10px 10px 8px;
`,I=n().div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${g};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: 6px;
`,E=n().div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: ${l.w4.borderRadius.sm};
  gap: ${l.w4.spacing.sm};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`,P=n().span`font-size: 20px; width: 28px; text-align: center; flex-shrink: 0;`,Y=n().div`flex: 1; min-width: 0;`,W=n().div`font-size: ${l.w4.typography.fontSizeSm}; font-weight: 500; color: ${l.w4.colors.mainText}; font-family: ${l.w4.typography.fontFamily};`,q=n().div`font-size: 11px; color: ${l.w4.colors.sidebarTextMuted}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`,D=n().div`display: flex; flex-direction: column; align-items: flex-end; gap: 1px; flex-shrink: 0;`,O=n().span`font-size: ${l.w4.typography.fontSizeSm}; font-weight: 600; color: ${l.w4.colors.mainText}; font-family: ${l.w4.typography.fontFamilyMono};`,X=n().span`font-size: 11px; color: ${l.w4.colors.sidebarTextMuted}; font-family: ${l.w4.typography.fontFamilyMono};`,G=n().div`display: flex; align-items: center; gap: 2px; font-size: 11px; color: ${l.w4.colors.sidebarTextMuted}; font-family: ${l.w4.typography.fontFamilyMono}; flex-shrink: 0; width: 36px; justify-content: flex-end;`,K=n().div`
  padding: ${l.w4.spacing.lg};
  text-align: center;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  font-family: ${l.w4.typography.fontFamily};
`;function N({place:e,onClose:t}){var r;let[i,n]=(0,a.useState)(null),[c,p]=(0,a.useState)(null),[h,g]=(0,a.useState)(!1),[x,f]=(0,a.useState)(null),[u,m]=(0,a.useState)(0);(0,a.useEffect)(()=>{if(!e){n(null),p(null);return}g(!0),f(null),n(null),p(null);let t=`https://api.open-meteo.com/v1/forecast?latitude=${e.lat}&longitude=${e.lng}&current_weather=true&hourly=temperature_2m,apparent_temperature,relativehumidity_2m,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=auto&forecast_days=7`,r=`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${e.lat}&longitude=${e.lng}&current=pm2_5,pm10,european_aqi,us_aqi`;Promise.all([fetch(t).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.json()}),fetch(r).then(e=>e.ok?e.json():null).catch(()=>null)]).then(([e,t])=>{n(e),p(t),g(!1)}).catch(e=>{f(e.message),g(!1)})},[e?.id,u]);let b=i?d(i.current_weather.weathercode):null,w=i?i.hourly.windspeed_10m.slice(0,24):[],y=i?i.hourly.temperature_2m.slice(0,24):[],U=i?i.hourly.apparent_temperature.slice(0,24):[],Z=new Date().getHours(),Q=i?i.hourly.relativehumidity_2m[Z]:null,J=i?i.hourly.apparent_temperature[Z]:null,ee=c?(r=c.current.us_aqi)<=50?{label:"Good",color:"#3fb950"}:r<=100?{label:"Moderate",color:"#d29922"}:r<=150?{label:"Unhealthy (sensitive)",color:"#f0883e"}:r<=200?{label:"Unhealthy",color:"#f85149"}:{label:"Hazardous",color:"#b44ac0"}:null;return(0,o.jsxs)(k,{visible:!!e,children:[(0,o.jsxs)(z,{children:[(0,o.jsx)(j,{children:e?.name??""}),(0,o.jsx)(s.K0,{onClick:t,title:"Close",children:(0,o.jsx)(s.In,{name:"close",size:14})})]}),(0,o.jsxs)(T,{children:[h&&(0,o.jsx)(K,{children:"Loading weather…"}),x&&(0,o.jsxs)(K,{children:[(0,o.jsx)("div",{children:"Weather unavailable — the API may be temporarily down."}),(0,o.jsx)("button",{onClick:()=>m(e=>e+1),style:{marginTop:12,padding:"6px 16px",cursor:"pointer",background:"none",border:`1px solid ${l.w4.colors.border}`,borderRadius:6,color:l.w4.colors.mainText,fontFamily:"inherit",fontSize:12},children:"Retry"})]}),i&&b&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(F,{children:[(0,o.jsxs)(S,{children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)(H,{children:[Math.round(i.current_weather.temperature),"\xb0C"]}),(0,o.jsx)(C,{children:b.label})]}),(0,o.jsx)(L,{children:b.emoji})]}),(0,o.jsxs)(R,{children:[(0,o.jsxs)(B,{children:["\uD83D\uDCA8 ",Math.round(i.current_weather.windspeed)," km/h"]}),(0,o.jsxs)(B,{children:["\uD83C\uDF21 ",Math.round(i.daily.temperature_2m_max[0]),"\xb0 / ",Math.round(i.daily.temperature_2m_min[0]),"\xb0"]}),null!=J&&(0,o.jsxs)(B,{children:["\uD83C\uDF2C Feels ",Math.round(J),"\xb0"]}),null!=Q&&(0,o.jsxs)(B,{children:["\uD83D\uDCA7 ",Q,"% RH"]})]}),ee&&c&&(0,o.jsxs)(V,{color:ee.color,children:["\uD83C\uDFED AQI ",c.current.us_aqi," \xb7 ",ee.label]})]}),y.length>0&&(0,o.jsxs)("div",{children:[(0,o.jsx)(A,{children:"Temperature today (hourly)"}),(0,o.jsxs)(_,{children:[(0,o.jsx)(I,{children:"\xb0C \xb7 dot = current hour"}),(0,o.jsx)($,{temps:y,feelsLike:U})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(A,{children:"Wind today (hourly)"}),(0,o.jsxs)(_,{children:[(0,o.jsx)(I,{children:"Speed km/h \xb7 dot = current hour"}),(0,o.jsx)(v,{speeds:w})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(A,{children:"Wind this week (daily max)"}),(0,o.jsxs)(_,{children:[(0,o.jsx)(I,{children:"Max speed km/h \xb7 arrows = dominant direction"}),(0,o.jsx)(M,{speeds:i.daily.windspeed_10m_max,directions:i.daily.winddirection_10m_dominant,dayLabels:i.daily.time.map((e,t)=>0===t?"Today":new Date(e).toLocaleDateString("en-GB",{weekday:"short"}))})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(A,{children:"7-Day Forecast"}),i.daily.time.map((e,t)=>{let{emoji:r,label:a}=d(i.daily.weathercode[t]);return(0,o.jsxs)(E,{children:[(0,o.jsx)(P,{children:r}),(0,o.jsxs)(Y,{children:[(0,o.jsx)(W,{children:0===t?"Today":1===t?"Tomorrow":new Date(e).toLocaleDateString("en-GB",{weekday:"short",month:"short",day:"numeric"})}),(0,o.jsx)(q,{children:a})]}),(0,o.jsx)(G,{children:i.daily.precipitation_sum[t]>0&&(0,o.jsxs)(o.Fragment,{children:["\uD83D\uDCA7 ",i.daily.precipitation_sum[t].toFixed(1)]})}),(0,o.jsxs)(D,{children:[(0,o.jsxs)(O,{children:[Math.round(i.daily.temperature_2m_max[t]),"\xb0"]}),(0,o.jsxs)(X,{children:[Math.round(i.daily.temperature_2m_min[t]),"\xb0"]})]})]},e)})]})]})]})]})}},1112(e,t,r){r.d(t,{xy:()=>c});var o=r(7991);function a(e){return e*Math.PI/180}var i=r(6506);function n(e){return e<20?"#00e676":e<40?"#69ff47":e<60?"#b2ff59":e<80?"#ffea00":"#ff6d00"}function l(e){return null==e||e<1e3?"#8b949e":e<1e4?"#f0883e":e<25e3?"#d29922":"#58a6ff"}function s(e){let t=l(e.altFt),r=null!=e.altFt?`${Math.round(.3048*e.altFt).toLocaleString()} m`:"—",o=null!=e.speedKts?`${Math.round(1.852*e.speedKts)} km/h`:"—",a=null!=e.heading?`${Math.round(e.heading)}\xb0`:"—",i=null!=e.vrateFpm?`${e.vrateFpm>0?"↑":"↓"} ${Math.abs(Math.round(.00508*e.vrateFpm))} m/s`:"—";return`
    <div style="font-family:monospace;font-size:12px;line-height:1.75;min-width:180px;">
      <div style="font-weight:700;font-size:13px;margin-bottom:4px;color:${t}">
        ✈ ${e.callsign??e.icao24}${e.reg?` \xb7 ${e.reg}`:""}
      </div>
      ${e.type?`<div>🛩 ${e.type}</div>`:""}
      <div>📡 ${e.icao24}</div>
      <div>↑ Altitude: ${r}</div>
      <div>→ Speed: ${o}</div>
      <div>⬆ Heading: ${a}</div>
      <div>${i}</div>
      <div style="margin-top:6px">
        <button
          onclick="window.__atlantisFlightFollow && window.__atlantisFlightFollow('${e.icao24}')"
          style="
            padding:3px 10px;cursor:pointer;
            background:rgba(88,166,255,.12);
            border:1px solid #58a6ff;
            border-radius:4px;
            color:#58a6ff;
            font-family:monospace;font-size:11px;
          ">📍 Follow</button>
      </div>
    </div>`}let d=new Map([{id:"night",label:"\uD83C\uDF11 Night",title:"Day/night terminator",defaultEnabled:!1,component:function({map:e,enabled:t}){let r=(0,o.useRef)(null),i=(0,o.useRef)(),n=(0,o.useCallback)(()=>{clearInterval(i.current),r.current?.remove(),r.current=null},[]),l=(0,o.useCallback)(()=>{if(!e||!t)return;let o=function(e){let t,r,o,i,n,l,s,d=(o=a((280.46+.9856474*(r=(t=e.getTime()/864e5+2440587.5)-2451545))%360),i=a((357.528+.9856003*r)%360),n=o+a(1.915*Math.sin(i)+.02*Math.sin(2*i)),s=Math.atan2(Math.cos(l=a(23.439-4e-7*r))*Math.sin(n),Math.cos(n)),{ra:s,dec:Math.asin(Math.sin(l)*Math.sin(n)),gmst:a((280.46061837+360.98564736629*(t-2451545))%360)}),c=[];for(let e=-180;e<=180;e++){var p;let t=(p=a(e),Math.atan(-Math.cos(d.gmst+p-d.ra)/Math.tan(d.dec)));c.push([180*t/Math.PI,e])}let h=d.dec>0?-90:90;return c.push([h,180]),c.push([h,-180]),c}(new Date);r.current?r.current.setLatLngs(o):r.current=window.L.polygon(o,{color:"transparent",fillColor:"#000",fillOpacity:.3,interactive:!1}).addTo(e)},[e,t]);return(0,o.useEffect)(()=>e&&t?(l(),i.current=setInterval(l,3e4),n):void n(),[e,t,l,n]),null}},{id:"aurora",label:"\uD83C\uDF0C Aurora",title:"Aurora forecast — NOAA SWPC",defaultEnabled:!1,component:function({map:e,enabled:t}){let r=(0,o.useRef)([]),a=(0,o.useRef)(null),l=(0,o.useCallback)(()=>{r.current.forEach(e=>e.remove()),r.current=[],a.current&&(a.current.remove(),a.current=null)},[]),s=(0,o.useCallback)(async()=>{if(!e||!t)return;let[o,l]=await Promise.all([(0,i.fetchAuroraOvation)(),(0,i.fetchPlanetaryKIndex)()]);if(!o||!l||!e||!t)return;let s=l[l.length-1]?.kp_index??0,d=window.L;for(let[t,a,i]of(r.current.forEach(e=>e.remove()),r.current=[],o.coordinates)){if(i<5||45>Math.abs(a))continue;let o=d.circleMarker([a,t],{radius:3,color:n(i),fillColor:n(i),fillOpacity:Math.min(.85,.15+i/100*.7),weight:0,interactive:!1});o.addTo(e),r.current.push(o)}a.current&&a.current.remove();let c=s>=7?"#f85149":s>=5?"#f0883e":s>=3?"#d29922":"#3fb950";a.current=new(d.Control.extend({onAdd(){let e=d.DomUtil.create("div");return e.innerHTML=`
          <div style="
            background:rgba(13,17,23,.88);
            border:1px solid ${c};
            border-radius:6px;
            padding:5px 11px;
            font-family:monospace;
            font-size:12px;
            color:${c};
            backdrop-filter:blur(4px);
            line-height:1.5;
            user-select:none;
          ">
            🌌 Kp <strong>${s.toFixed(1)}</strong>
            <span style="opacity:.7;font-size:10px;margin-left:4px">${s>=8?"Extreme":s>=7?"Severe":s>=6?"Strong":s>=5?"Moderate":s>=4?"Active":s>=3?"Unsettled":"Quiet"}</span>
          </div>`,e},onRemove(){}}))({position:"bottomleft"}),a.current.addTo(e)},[e,t]);return(0,o.useEffect)(()=>{if(!t)return void l();s();let e=setInterval(s,3e5);return()=>{clearInterval(e),l()}},[t,s,l]),null}},{id:"iss",label:"\uD83D\uDEF8 ISS",title:"ISS live position + footprint",defaultEnabled:!1,component:function({map:e,enabled:t}){let r=(0,o.useRef)(null),a=(0,o.useRef)(null),n=(0,o.useRef)(null),l=(0,o.useRef)([]),s=(0,o.useCallback)(()=>{r.current?.remove(),r.current=null,a.current?.remove(),a.current=null,n.current?.remove(),n.current=null,l.current=[]},[]),d=(0,o.useCallback)(async()=>{if(!e||!t)return;let o=await (0,i.fetchIssPosition)();if(!o||!e||!t)return;let s=window.L,d=o.latitude,c=o.longitude,p=l.current;if(p.length>0){let[,e]=p[p.length-1];Math.abs(c-e)>180&&(l.current=[])}l.current=[...l.current,[d,c]].slice(-80);let h=`<div style="
        font-size:22px;
        filter:drop-shadow(0 0 8px rgba(255,210,0,.9));
        line-height:1;
      ">🛸</div>`,g=s.divIcon({html:h,className:"",iconSize:[24,24],iconAnchor:[12,12]}),x=`
        <div style="font-family:monospace;font-size:12px;line-height:1.75;min-width:165px;">
          <div style="font-weight:700;font-size:13px;color:#f0c040;margin-bottom:4px">🛸 ISS</div>
          <div>↑ ${Math.round(o.altitude).toLocaleString()} km altitude</div>
          <div>→ ${Math.round(o.velocity).toLocaleString()} km/h</div>
          <div>☀ ${o.visibility}</div>
          <div style="margin-top:4px;opacity:.7;font-size:11px">
            ${d.toFixed(3)}\xb0, ${c.toFixed(3)}\xb0
          </div>
          <div style="margin-top:4px;opacity:.55;font-size:10px;line-height:1.4;">
            Circle = visibility footprint<br>(~2 300 km radius)
          </div>
        </div>`;r.current?(r.current.setLatLng([d,c]),r.current.getPopup()?.setContent(x)):r.current=s.marker([d,c],{icon:g,zIndexOffset:2e3}).bindPopup(x,{maxWidth:220}).addTo(e),a.current?a.current.setLatLngs(l.current):a.current=s.polyline(l.current,{color:"#f0c040",weight:1.5,opacity:.55,dashArray:"3 7"}).addTo(e),n.current?n.current.setLatLng([d,c]):n.current=s.circle([d,c],{radius:2316e3,color:"#f0c040",fillColor:"#f0c040",fillOpacity:.04,weight:1,opacity:.25,dashArray:"5 8",interactive:!1}).addTo(e)},[e,t]);return(0,o.useEffect)(()=>{let e;if(!t)return void s();let r=!1,o=async()=>{await d(),r||(e=setTimeout(o,5e3))};return o(),()=>{r=!0,clearTimeout(e),s()}},[t,d,s]),null}},{id:"quakes",label:"\uD83C\uDF0D Quakes",title:"Earthquakes — USGS past month",defaultEnabled:!1,component:function({map:e,enabled:t}){let r=(0,o.useRef)(new Map),a=(0,o.useCallback)(()=>{r.current.forEach(e=>e.remove()),r.current.clear()},[]),n=(0,o.useCallback)(async()=>{if(!e||!t)return;let o=await (0,i.fetchUsgsQuakes)("all_month","seismic-world-all_month");if(!o?.features||!e||!t)return;let a=window.L,n=Date.now(),l=new Set;for(let t of o.features){let[o,i,s]=t.geometry.coordinates,{mag:d,place:c,time:p,type:h}=t.properties;if("earthquake"!==h||null==d||null==i||null==o)continue;l.add(t.id);let g=n-p,x=d<2?"#3fb950":d<3?"#7ee787":d<4?"#d29922":d<5?"#f0883e":d<6?"#f85149":"#ff4444",f=Math.min(40,Math.max(3,1.5*Math.pow(2,d-1)));if(r.current.has(t.id))continue;let u=a.circleMarker([i,o],{radius:f,color:x,fillColor:x,fillOpacity:Math.max(.25,.7-g/2592e6),weight:1});u.bindPopup(`
        <div style="font-family:monospace;font-size:12px;line-height:1.75;min-width:190px;">
          <div style="font-weight:700;font-size:13px;color:${x};margin-bottom:4px">
            M${d.toFixed(1)} Earthquake
          </div>
          <div>📍 ${c}</div>
          <div>🕐 ${function(e){let t=Math.round(e/36e5);return t<1?"<1 h ago":t<24?`${t} h ago`:`${Math.round(t/24)} d ago`}(g)}</div>
          <div>↓ Depth: ${Math.round(s)} km</div>
        </div>`,{maxWidth:250}),u.addTo(e),r.current.set(t.id,u)}r.current.forEach((e,t)=>{l.has(t)||(e.remove(),r.current.delete(t))})},[e,t]);return(0,o.useEffect)(()=>{if(!t)return void a();n();let e=setInterval(n,6e5);return()=>{clearInterval(e),a()}},[t,n,a]),null}},{id:"fires",label:"\uD83D\uDD25 Fires",title:"Active wildfires — NASA EONET",defaultEnabled:!1,component:function({map:e,enabled:t}){let r=(0,o.useRef)(new Map),a=(0,o.useCallback)(()=>{r.current.forEach(e=>e.remove()),r.current.clear()},[]),n=(0,o.useCallback)(async()=>{if(!e||!t)return;let o=await (0,i.fetchEonetEvents)({category:"wildfires",status:"open",limit:500});if(!o||!e||!t)return;let a=window.L,n=new Set;for(let t of o.events){var l;let o=t.geometry[t.geometry.length-1];if(!o||"Point"!==o.type)continue;let[i,s]=o.coordinates;if(n.add(t.id),r.current.has(t.id))continue;let d=(l=o.date,Date.now()-new Date(l).getTime()),c=Math.max(.4,1-d/2592e6),p=t.title.replace(/^Wildfire\s*[-–]\s*/i,""),h=a.divIcon({html:`<div style="
          font-size:16px;line-height:1;
          opacity:${c.toFixed(2)};
          filter:drop-shadow(0 0 5px rgba(255,90,0,.85));
          cursor:pointer;
        ">🔥</div>`,className:"",iconSize:[16,16],iconAnchor:[8,8]}),g=a.marker([s,i],{icon:h});g.bindPopup(`
        <div style="font-family:monospace;font-size:12px;line-height:1.75;min-width:185px;">
          <div style="font-weight:700;font-size:13px;color:#f85149;margin-bottom:4px">
            🔥 Wildfire
          </div>
          <div>📍 ${p}</div>
          <div>🕐 ${function(e){let t=Math.round(e/36e5);return t<1?"< 1 h ago":t<24?`${t} h ago`:`${Math.round(t/24)} d ago`}(d)}</div>
          <div style="margin-top:4px;opacity:.6;font-size:10px">
            ${s.toFixed(3)}\xb0, ${i.toFixed(3)}\xb0
          </div>
        </div>`,{maxWidth:240}),g.addTo(e),r.current.set(t.id,g)}r.current.forEach((e,t)=>{n.has(t)||(e.remove(),r.current.delete(t))})},[e,t]);return(0,o.useEffect)(()=>{if(!t)return void a();n();let e=setInterval(n,18e5);return()=>{clearInterval(e),a()}},[t,n,a]),null}},{id:"radar",label:"\uD83C\uDF27 Radar",title:"Weather radar — RainViewer",defaultEnabled:!1,component:function({map:e,enabled:t}){let r=(0,o.useRef)(null),a=(0,o.useCallback)(()=>{r.current?.remove(),r.current=null},[]),n=(0,o.useCallback)(async()=>{if(!e||!t)return;let o=await (0,i.fetchRainViewerManifest)();if(!o||!e||!t)return;let a=o.radar.past;if(!a?.length)return;let n=a[a.length-1],l=(0,i.rainViewerTileUrl)(o.host,n);r.current?.remove(),r.current=window.L.tileLayer(l,{opacity:.6,attribution:'<a href="https://www.rainviewer.com">RainViewer</a>'}).addTo(e)},[e,t]);return(0,o.useEffect)(()=>{if(!t)return void a();n();let e=setInterval(n,3e5);return()=>{clearInterval(e),a()}},[t,n,a]),null}},{id:"flights",label:"✈ Flights",title:"Live flight traffic — altitude-coded",defaultEnabled:!1,component:function({map:e,enabled:t,zoom:r}){let a=(0,o.useRef)(new Map),n=(0,o.useRef)(new Map),d=(0,o.useRef)(new Map),c=(0,o.useRef)(new Map),p=(0,o.useRef)(new Map),h=(0,o.useRef)(null),g=(0,o.useRef)(null);(0,o.useEffect)(()=>(window.__atlantisFlightFollow=e=>{g.current=g.current===e?null:e},()=>{delete window.__atlantisFlightFollow}),[]);let x=(0,o.useCallback)(()=>{a.current.forEach(e=>e.remove()),a.current.clear(),n.current.forEach(e=>e.remove()),n.current.clear(),d.current.forEach(e=>e.remove()),d.current.clear(),c.current.clear(),p.current.clear(),g.current=null},[]),f=(0,o.useCallback)(async()=>{let o,x,f,u,m,b;if(!e||!t||r<5)return;let w=e.getCenter(),y=(o=e.getBounds(),x=e.getCenter(),f=o.getNorthEast(),u=x.lat*Math.PI/180,m=f.lat*Math.PI/180,Math.min(Math.ceil(6880.13*Math.atan2(Math.sqrt(b=Math.sin((f.lat-x.lat)*Math.PI/180/2)**2+Math.cos(u)*Math.cos(m)*Math.sin((f.lng-x.lng)*Math.PI/180/2)**2),Math.sqrt(1-b))),250));h.current?.abort(),h.current=new AbortController;try{let r=await (0,i.fetchAdsbPoint)({lat:w.lat,lon:w.lng,radiusNm:y,signal:h.current.signal});if(!r||!e||!t)return;let o=window.L,x=Date.now();for(let t of r.ac??[]){let r=null==t.lat||null==t.lon?null:{icao24:t.hex,callsign:t.flight?.trim()||null,lat:t.lat,lon:t.lon,altFt:"number"==typeof t.alt_baro?t.alt_baro:null,speedKts:t.gs??null,heading:t.track??null,vrateFpm:t.baro_rate??null,reg:t.r??null,type:t.t??null};if(!r||null==r.altFt)continue;let i=r.heading??0,h=l(r.altFt),f=g.current===r.icao24,u=o.divIcon({html:function(e,t,r){let o=r?`filter:drop-shadow(0 0 5px ${t}) drop-shadow(0 0 10px ${t});`:"filter:drop-shadow(0 1px 3px rgba(0,0,0,.9));";return`<div style="
    width:22px;height:22px;
    display:flex;align-items:center;justify-content:center;
    transform:rotate(${e}deg);
    ${o}
    cursor:pointer;
    transition:transform .3s;
  ">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="${t}">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
    </svg>
  </div>`}(i,h,f),className:"",iconSize:[22,22],iconAnchor:[11,11]}),m=[...c.current.get(r.icao24)??[],[r.lat,r.lon]].slice(-15);c.current.set(r.icao24,m),p.current.set(r.icao24,x);let b=null!=r.speedKts&&null!=r.heading,w=b?1.852*r.speedKts*.5:0,[y,$]=b?function(e,t,r,o){let a=o/6371,i=e*Math.PI/180,n=r*Math.PI/180,l=Math.asin(Math.sin(i)*Math.cos(a)+Math.cos(i)*Math.sin(a)*Math.cos(n)),s=t*Math.PI/180+Math.atan2(Math.sin(n)*Math.sin(a)*Math.cos(i),Math.cos(a)-Math.sin(i)*Math.sin(l));return[180*l/Math.PI,180*s/Math.PI]}(r.lat,r.lon,r.heading,w):[r.lat,r.lon],v=a.current.get(r.icao24);if(v)v.setLatLng([r.lat,r.lon]),v.setIcon(u),v.getPopup()?.setContent(s(r)),n.current.get(r.icao24)?.setLatLngs([[r.lat,r.lon],[y,$]]),d.current.get(r.icao24)?.setLatLngs(m);else{let t=o.marker([r.lat,r.lon],{icon:u});if(t.bindPopup(s(r),{maxWidth:240}),t.addTo(e),a.current.set(r.icao24,t),b){let t=o.polyline([[r.lat,r.lon],[y,$]],{color:h,weight:1.5,opacity:.35,dashArray:"4 7",interactive:!1});t.addTo(e),n.current.set(r.icao24,t)}if(m.length>1){let t=o.polyline(m,{color:h,weight:1.5,opacity:.45,interactive:!1});t.addTo(e),d.current.set(r.icao24,t)}}}if(a.current.forEach((e,t)=>{let r=p.current.get(t)??0;x-r>5e4&&(e.remove(),a.current.delete(t),n.current.get(t)?.remove(),n.current.delete(t),d.current.get(t)?.remove(),d.current.delete(t),c.current.delete(t),p.current.delete(t),g.current===t&&(g.current=null))}),g.current){let t=a.current.get(g.current);t&&e.panTo(t.getLatLng(),{animate:!0,duration:.5})}}catch(e){if(e instanceof Error&&"AbortError"===e.name)return}},[e,t,r]);return(0,o.useEffect)(()=>{let e;if(!t||r<5)return void x();let o=!1,a=async()=>{await f(),o||(e=setTimeout(a,2e4))};return a(),()=>{o=!0,clearTimeout(e)}},[t,f,x]),(0,o.useEffect)(()=>{let r;if(!e||!t)return;let o=()=>{clearTimeout(r),r=setTimeout(f,1200)};return e.on("moveend",o),()=>{clearTimeout(r),e.off("moveend",o)}},[e,t,f]),null}},{id:"measure",label:"\uD83D\uDCCF Measure",title:"Click two points to measure great-circle distance",defaultEnabled:!1,component:function({map:e,enabled:t}){let r=(0,o.useRef)([]),a=(0,o.useRef)([]),i=(0,o.useRef)([]),n=(0,o.useRef)(null),l=(0,o.useCallback)(()=>{a.current.forEach(e=>e.remove()),a.current=[],i.current.forEach(e=>e.remove()),i.current=[],n.current?.remove(),n.current=null,r.current=[]},[]);return(0,o.useEffect)(()=>{if(!e||!t)return void l();let o=window.L,s=o.divIcon({html:`<div style="
        width:10px;height:10px;
        background:#58a6ff;
        border:2px solid #fff;
        border-radius:50%;
        box-shadow:0 0 6px rgba(88,166,255,.85);
      "></div>`,className:"",iconSize:[10,10],iconAnchor:[5,5]}),d=t=>{let{lat:d,lng:c}=t.latlng;r.current.length>=2&&l(),r.current=[...r.current,[d,c]];let p=o.marker([d,c],{icon:s,interactive:!1}).addTo(e);if(a.current.push(p),2===r.current.length){var h,g,x;let t,[a,l]=r.current,s=o.polyline([a,l],{color:"#58a6ff",weight:2,dashArray:"6 5",opacity:.85,interactive:!1}).addTo(e);i.current.push(s);let d=(h=a[0],g=a[1],12742*Math.atan2(Math.sqrt(t=Math.sin(((x=l[0])-h)*Math.PI/180/2)**2+Math.cos(h*Math.PI/180)*Math.cos(x*Math.PI/180)*Math.sin((l[1]-g)*Math.PI/180/2)**2),Math.sqrt(1-t))),c=(a[0]+l[0])/2,p=(a[1]+l[1])/2;n.current=o.popup({closeButton:!0,autoClose:!1,className:"",offset:[0,-4]}).setLatLng([c,p]).setContent(`
            <div style="font-family:monospace;font-size:12px;line-height:1.9;text-align:center;min-width:120px;">
              <div style="font-weight:700;font-size:15px;color:#58a6ff">
                ${d<1?`${Math.round(1e3*d)} m`:d<100?`${d.toFixed(1)} km`:`${Math.round(d).toLocaleString()} km`}
              </div>
              <div style="opacity:.65;font-size:10px">
                ${Math.round(d/1.852).toLocaleString()} nm
                &nbsp;\xb7&nbsp;
                ${Math.round(.6214*d).toLocaleString()} mi
              </div>
              <div style="opacity:.4;font-size:9px;margin-top:3px">click map to reset</div>
            </div>`).addTo(e)}};return e.on("click",d),e.getContainer().style.cursor="crosshair",()=>{e.off("click",d),e.getContainer().style.cursor="",l()}},[e,t,l]),null}}].map(e=>[e.id,e]));function c(){return Array.from(d.values())}},2787(e,t,r){r.d(t,{FlyoutPanel:()=>w});var o=r(5723),a=r(7991),i=r.n(a),n=r(6859),l=r.n(n),s=r(2799),d=r(6063),c=r(7993),p=r(4971);let h=(0,s.keyframes)`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=l().div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.accentMuted};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${d.w4.colors.borderSubtle},
    0 16px 48px rgba(0, 0, 0, 0.55);
  min-width: 210px;
  overflow-y: auto;
  animation: ${h} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  backdrop-filter: blur(12px);

  /* Left connector line */
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 2px;
    background: ${d.w4.colors.accent};
    opacity: 0.4;
  }
`,x=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${d.w4.colors.accent};
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
  font-family: ${d.w4.typography.fontFamily};
`,f=l().button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?d.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.sidebarText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${d.w4.colors.accentMuted};
    color: ${d.w4.colors.mainText};
  }
`,u=({size:e=14,strokeWidth:t=1.75})=>(0,o.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,o.jsx)("polyline",{points:"14 2 14 8 20 8"})]});function m({iconKey:e}){let t=e?p.X[e]:void 0;return t?(0,o.jsx)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,dangerouslySetInnerHTML:{__html:t}}):(0,o.jsx)(u,{})}function b({entries:e,activeId:t,onSelect:r}){return(0,o.jsx)(o.Fragment,{children:e.map(e=>e.children?(0,o.jsx)(i().Fragment,{children:(0,o.jsx)(b,{entries:e.children,activeId:t,onSelect:r})},e.id):(0,o.jsxs)(f,{active:t===e.id,onClick:()=>r(e),children:[(0,o.jsx)(m,{iconKey:e.icon}),e.name]},e.id))})}function w({activeId:e}){let{flyout:t,scheduleFlyoutClose:r,cancelFlyoutClose:a}=(0,c.c)();if(!t)return null;let i=t.entry.icon?p.X[t.entry.icon]:void 0;return(0,o.jsxs)(g,{anchorY:t.anchorY,onMouseEnter:a,onMouseLeave:r,children:[(0,o.jsxs)(x,{children:[i?(0,o.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,dangerouslySetInnerHTML:{__html:i}}):(0,o.jsx)(u,{size:13,strokeWidth:2}),t.entry.name]}),(0,o.jsx)(b,{entries:t.entry.children??[],activeId:e,onSelect:e=>{t.onSelect(e),r()}})]})}},7993(e,t,r){r.d(t,{I:()=>a,c:()=>i});var o=r(7991);let a=(0,o.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,o.useContext)(a)},4971(e,t,r){r.d(t,{X:()=>o});let o={activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"a-large-small":'<path d="M18 14v7M22 14l-4-7-4 7M2 14h7M2 21V7l5-4 5 4v14"/>',apple:'<path d="M12 20.9A9 9 0 1 1 19 6.5a4.9 4.9 0 0 0 2 5.4 8.9 8.9 0 0 1-9 9z"/><path d="M12 6a2 2 0 0 0 2-2 2 2 0 0 0-2-2"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"bar-chart-2":'<path d="M3 3v18h18"/><path d="M5 18V10M10 18V4M15 18v-7"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"circle-dot":'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2 6.3-6.4 2 2-6.3z"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',"file-text":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5 2.2 5 2.2a5 5 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.5 9.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.4V22"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',hand:'<path d="M18 11V5a2 2 0 1 0-4 0v3a2 2 0 1 0-4 0V5a2 2 0 1 0-4 0v8l-2-3a2 2 0 1 0-3 2l4 7a6 6 0 0 0 6 4h2a6 6 0 0 0 6-6v-3a2 2 0 1 0-4 0z"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',landmark:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 11h20z"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',"layout-grid":'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',map:'<path d="M9 3 3 7v14l6-4 6 4 6-4V3l-6 4z"/><path d="M9 3v14M15 7v14"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"message-circle":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',minus:'<path d="M5 12h14"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',"pen-tool":'<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="M18 13 16.5 5.5 2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2 9.6 9.6"/><circle cx="11" cy="11" r="2"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',plus:'<path d="M12 5v14M5 12h14"/>',puzzle:'<path d="M19.4 14.4a1 1 0 0 0 .6-.9V8a1 1 0 0 0-1-1h-5.5a1 1 0 0 1-.9-.6 2 2 0 1 0-2 2 2.5 2.5 0 0 1 0 3 2 2 0 1 0 2 2 1 1 0 0 1 .9-.6h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 .6-.9 2 2 0 1 0-1.2 0z"/>',ruler:'<path d="M5 3l16 16-3 3L2 6zM8 6l3 3M11 9l3 3M14 12l3 3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>',slash:'<line x1="22" y1="2" x2="2" y2="22"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',triangle:'<path d="M3 20h18L12 4z"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',truck:'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',"volume-2":'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',watch:'<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5M8.2 5.5l.8-2.5h6l.8 2.5M15.8 18.5l-.8 2.5H9l-.8-2.5"/>',waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',bot:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M8 15h.01M16 15h.01M12 17h.01"/>'}},132(e,t,r){r.d(t,{K0:()=>y,CD:()=>eR,MJ:()=>N,PE:()=>ey,In:()=>M});var o=r(5723),a=r(7991),i=r.n(a),n=r(6859),l=r.n(n),s=r(6063);let d={ghost:"transparent",accent:"transparent",primary:s.w4.colors.accent,success:"#238636",danger:"#da3633"},c={ghost:s.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:s.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},p={ghost:s.w4.colors.border,accent:s.w4.colors.accent,primary:s.w4.colors.accent,success:"#238636",danger:"#da3633"},h={ghost:s.w4.colors.mainTextMuted,accent:s.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},g={ghost:s.w4.colors.mainText,accent:s.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},x={sm:"28px",md:"30px"},f={sm:"0 10px",md:"0 12px"},u={sm:"12px",md:"12px"};l().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>x[e]};
  padding: ${({size:e})=>f[e]};
  background: ${({variant:e})=>d[e]};
  border: 1px solid ${({variant:e})=>p[e]};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${({variant:e})=>h[e]};
  font-size: ${({size:e})=>u[e]};
  font-family: ${s.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>c[e]};
    color: ${({variant:e})=>g[e]};
    border-color: ${({variant:e})=>"ghost"===e?s.w4.colors.accent:p[e]};
  }

  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;let m={default:s.w4.colors.accent,danger:"#f85149"},b={default:s.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"},w=l().button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: ${({active:e})=>e?`${s.w4.colors.accent}22`:"transparent"};
  border: 1px solid
    ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.border};
  border-radius: ${({shape:e})=>"circle"===e?"999px":s.w4.borderRadius.sm};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};

  /**
   * Expand the tap area to ≥44×44px on touch devices without changing the
   * visual size of the button. The pseudo-element extends 7px on each side
   * ((44 - 30) / 2 = 7). Pointer-events fall through to the button itself.
   * Only applied on coarse-pointer (touch) devices so desktop hover still
   * works on the visual 30px area.
   */
  @media (pointer: coarse) {
    &::before {
      content: '';
      position: absolute;
      inset: -7px;
    }
  }

  &:hover:not(:disabled) {
    color: ${({tone:e})=>m[e]};
    background: ${({tone:e})=>b[e]};
    border-color: ${({tone:e})=>m[e]};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,y=i().forwardRef(function({active:e=!1,shape:t="square",tone:r="default",children:a,...i},n){return(0,o.jsx)(w,{ref:n,active:e,shape:t,tone:r,...i,children:a})});l().div`
  position: relative;
  display: inline-flex;
`,l().div`
  position: absolute;
  top: calc(100% + 6px);
  ${({align:e})=>"right"===e?"right: 0;":"left: 0;"}
  min-width: 180px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  background: ${s.w4.colors.sidebarBg};
  border: 1px solid ${s.w4.colors.sidebarBorder};
  border-radius: ${s.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: none;
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  color: ${s.w4.colors.mainText};
  font-size: ${s.w4.typography.fontSizeSm};
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${s.w4.colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: -2px;
  }
`,l().div`
  height: 1px;
  margin: 4px 0;
  background: ${s.w4.colors.sidebarBorder};
`,l().div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
`,l().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
`,l().span`
  width: 1px;
  height: 20px;
  background: ${s.w4.colors.border};
  flex-shrink: 0;
`,l().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,l()("button",{shouldForwardProp:e=>"active"!==e&&"highlight"!==e})`
  padding: 6px 14px;
  height: 28px;
  border-radius: 999px;
  background: ${({active:e})=>e?s.w4.colors.accentMuted:"transparent"};
  border: 1px solid
    ${({active:e,highlight:t})=>e||t?s.w4.colors.accent:"transparent"};
  color: ${({active:e,highlight:t})=>e||t?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: ${s.w4.transitions.fast};

  &:hover:not(:disabled) { color: ${s.w4.colors.mainText}; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${s.w4.focusRing} }
`,r(2727);var $=r(2799);let v={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',"cloud-rain":'<path d="M16 14a5 5 0 1 0-9.8 2H6M8 19v2M12 17v4M16 19v2"/>',snowflake:'<path d="M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1M2 12h20M8 6l4 4 4-4M8 18l4-4 4 4"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"alert-triangle":'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',"check-circle":'<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>',"x-circle":'<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',"rotate-ccw":'<path d="M2 12a10 10 0 1 0 5-8.7L2 7M2 2v5h5"/>',"rotate-cw":'<path d="M22 12a10 10 0 1 1-5-8.7L22 7M22 2v5h-5"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"alert-circle":'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',"alert-octagon":'<path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"/><path d="M12 8v4M12 16h.01"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',columns:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',"eye-off":'<path d="M17.9 17.9A10.8 10.8 0 0 1 12 20c-7 0-11-8-11-8a19.6 19.6 0 0 1 5.1-6M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a19.6 19.6 0 0 1-2.2 3.2M6.6 6.6l10.8 10.8M14.1 14.1a3 3 0 1 1-4.2-4.2"/>',"file-plus":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M12 12v6M9 15h6"/>',gauge:'<path d="M12 14a2 2 0 1 0-2-2M12 2a10 10 0 1 0 10 10M12 14 7.5 16.5"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',"git-fork":'<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/>',"grip-vertical":'<circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',"image-plus":'<path d="M21 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21M19 2v6M22 5h-6"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',loader:'<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',"panel-left":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',"panel-left-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M16 15l-3-3 3-3"/>',"panel-left-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M14 9l3 3-3 3"/>',"panel-right-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M8 9l3 3-3 3"/>',"panel-right-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M10 15l-3-3 3-3"/>',pencil:'<path d="m12 20 9-9-4-4-9 9v4zM15 5l4 4"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M4.9 19.1a10 10 0 0 1 0-14.1M7.8 16.2a6 6 0 0 1 0-8.5M19.1 4.9a10 10 0 0 1 0 14.1M16.2 7.8a6 6 0 0 1 0 8.5"/>',"scatter-chart":'<circle cx="7.5" cy="7.5" r="0.8" fill="currentColor"/><circle cx="18" cy="5" r="0.8" fill="currentColor"/><circle cx="11" cy="11" r="0.8" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.8" fill="currentColor"/><circle cx="17" cy="14" r="0.8" fill="currentColor"/><path d="M3 3v18h18"/>',shield:'<path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"/>',"shield-off":'<path d="M19.7 14a7.7 7.7 0 0 0 .3-2V4l-8-2-3.4.9M4.7 4.7 4 5v7c0 6 8 10 8 10a13 13 0 0 0 5.2-3.5M2 2l20 20"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',"trending-down":'<path d="M22 17l-9.5-9.5-5 5L2 7"/><path d="M16 17h6v-6"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',"user-cog":'<circle cx="10" cy="8" r="4"/><path d="M10.2 14H8a4 4 0 0 0-4 4v2"/><circle cx="18" cy="15" r="3"/><path d="M18 10v1M18 19v1M22 12l-.8.5M14.8 17.5 14 18M22 18l-.8-.5M14.8 12.5 14 12"/>',volume:'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',car:'<path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h12l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2M5 17l1 3h12l1-3M5 17h14"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>',"shopping-bag":'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>',wifi:'<path d="M5 12.6A10 10 0 0 1 19 12.6M1.5 8.9a15 15 0 0 1 21 0M8.5 16.5a5 5 0 0 1 7 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/>',wallet:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18M16 14h2"/>',receipt:'<path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21z"/><path d="M8 8h8M8 12h8M8 16h5"/>',"piggy-bank":'<path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/><path d="M19 9h2v4M14 7V5a2 2 0 0 0-4 0M16 11h.01M5 17v3M14 17v3"/>',banknote:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M5 9h.01M19 15h.01"/>',coins:'<circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/><path d="M9 6v6M7 9h4"/>',"line-chart":'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',"calendar-range":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 15h3M13 15h3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"refresh-ccw":'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',"refresh-cw":'<path d="M21 12a9 9 0 0 0-15-6.7L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15 6.7L21 16"/><path d="M21 21v-5h-5"/>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',split:'<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 3 12 12 3 3"/><path d="M12 12v9"/>',"more-horizontal":'<circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>',"a-large-small":'<path d="M18 14v7M22 14l-4-7-4 7M2 14h7M2 21V7l5-4 5 4v14"/>',apple:'<path d="M12 20.9A9 9 0 1 1 19 6.5a4.9 4.9 0 0 0 2 5.4 8.9 8.9 0 0 1-9 9z"/><path d="M12 6a2 2 0 0 0 2-2 2 2 0 0 0-2-2"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',"circle-dot":'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2 6.3-6.4 2 2-6.3z"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',"file-text":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5 2.2 5 2.2a5 5 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.5 9.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.4V22"/>',hand:'<path d="M18 11V5a2 2 0 1 0-4 0v3a2 2 0 1 0-4 0V5a2 2 0 1 0-4 0v8l-2-3a2 2 0 1 0-3 2l4 7a6 6 0 0 0 6 4h2a6 6 0 0 0 6-6v-3a2 2 0 1 0-4 0z"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/>',landmark:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 11h20z"/>',"layout-grid":'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',map:'<path d="M9 3 3 7v14l6-4 6 4 6-4V3l-6 4z"/><path d="M9 3v14M15 7v14"/>',"message-circle":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',"pen-tool":'<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="M18 13 16.5 5.5 2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2 9.6 9.6"/><circle cx="11" cy="11" r="2"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',puzzle:'<path d="M19.4 14.4a1 1 0 0 0 .6-.9V8a1 1 0 0 0-1-1h-5.5a1 1 0 0 1-.9-.6 2 2 0 1 0-2 2 2.5 2.5 0 0 1 0 3 2 2 0 1 0 2 2 1 1 0 0 1 .9-.6h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 .6-.9 2 2 0 1 0-1.2 0z"/>',ruler:'<path d="M5 3l16 16-3 3L2 6zM8 6l3 3M11 9l3 3M14 12l3 3"/>',slash:'<line x1="22" y1="2" x2="2" y2="22"/>',triangle:'<path d="M3 20h18L12 4z"/>',truck:'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',"volume-2":'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7"/>',watch:'<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5M8.2 5.5l.8-2.5h6l.8 2.5M15.8 18.5l-.8 2.5H9l-.8-2.5"/>',waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',bot:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M8 15h.01M16 15h.01M12 17h.01"/>',"bar-chart-2":'<path d="M3 3v18h18"/><path d="M5 18V10M10 18V4M15 18v-7"/>'};function M({name:e,size:t=18,strokeWidth:r=1.5,...a}){let i=v[e];return(0,o.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!a["aria-label"]||void 0,...a,dangerouslySetInnerHTML:{__html:i}})}Object.keys(v),l().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  border: ${({ring:e})=>e?`1px solid ${s.w4.colors.border}`:"none"};
  flex-shrink: 0;
  overflow: hidden;
  user-select: none;
`,l().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: ${({fontSize:e})=>e}px;
  font-weight: 700;
  color: ${s.w4.colors.mainBg};
  line-height: 1;
  letter-spacing: 0;
`,l().img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,l().div`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${s.w4.colors.accentMuted};
  border: 1px solid ${s.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${s.w4.typography.fontFamily};
  font-weight: 700;
  color: ${s.w4.colors.accent};
  flex-shrink: 0;
  /* Font scales with size: 26px → 12px, 40px → 18px */
  font-size: ${({size:e})=>Math.round(.46*e)}px;
`;let k=(0,$.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;l().div`
  position: relative;
`,l().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px 4px 4px;
  background: none;
  border: 1px solid ${s.w4.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: border-color ${s.w4.transitions.fast}, background ${s.w4.transitions.fast};
  &:hover {
    border-color: ${s.w4.colors.accent};
    background: ${s.w4.colors.sidebarHover};
  }

  /* With DisplayName hidden on mobile the pill becomes an oval — pad
     equally and drop the gap so the wrapper is a true circle. */
  @media (max-width: ${s.w4.breakpoints.md}) {
    padding: 4px;
    gap: 0;
  }
`,l().span`
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${s.w4.breakpoints.md}) {
    display: none;
  }
`,l().div`
  position: fixed;
  min-width: 240px;
  background: ${s.w4.colors.surfaceRaised};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${k} 0.15s ease;
  backdrop-filter: blur(12px);

  @media (max-width: ${s.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    max-height: calc(100dvh - env(safe-area-inset-top, 0px) - 96px);
    overflow-y: auto;
  }
`,l().div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${s.w4.colors.border};
`,l().div`
  margin-bottom: 10px;
`,l().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${s.w4.colors.mainText};
`,l().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: 12px;
  color: ${s.w4.colors.mainTextMuted};
  margin-top: 2px;
`,l().div`
  padding: 12px 16px 10px;
  border-bottom: 1px solid ${s.w4.colors.borderSubtle};
`,l().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextFaint};
  margin-bottom: 6px;
`,l().div`
  display: flex;
  gap: 4px;
  padding: 3px;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.borderSubtle};
  border-radius: ${s.w4.borderRadius.md};
`,l().button`
  flex: 1;
  padding: 6px 10px;
  background: ${({active:e})=>e?s.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  font-family: ${s.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: ${({active:e})=>e?600:500};
  cursor: pointer;
  transition: background ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};

  &:hover {
    color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.mainText};
    background: ${({active:e})=>e?s.w4.colors.accentMuted:s.w4.colors.sidebarHover};
  }
`,l().button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeBase};
  color: ${s.w4.colors.mainTextMuted};
  transition: background 0.12s, color 0.12s;
  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${({danger:e})=>e?"#e05252":s.w4.colors.mainText};
  }
`,(0,s.PL)("shell:locale").then(e=>{if("en"===e||"pt"===e)try{localStorage.setItem("atlantis:locale",e)}catch{}}).catch(()=>{}),l().div`
  display: flex;
  gap: 4px;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 2px;
`,l().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?s.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":s.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":s.w4.colors.mainText};
  }
`,l().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};

  @media (max-width: ${s.w4.breakpoints.md}) {
    gap: ${s.w4.spacing.xs};

    .header-kbd { display: none; }
    .header-hide-md { display: none; }
  }
`,l().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${s.w4.colors.border};
  border-radius: 999px;
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};

  &:hover {
    color: ${s.w4.colors.accent};
    border-color: ${s.w4.colors.accent};
    background: ${s.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
`,l().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  min-width: 180px;
  padding: 0 6px 0 12px;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.borderStrong};
  border-radius: 999px;
  color: ${s.w4.colors.mainText};
  cursor: pointer;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, color ${s.w4.transitions.fast}, box-shadow ${s.w4.transitions.fast};
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);

  .label {
    flex: 1;
    text-align: left;
    color: ${s.w4.colors.mainTextMuted};
    font-weight: 500;
    letter-spacing: -0.1px;
  }

  @media (max-width: ${s.w4.breakpoints.md}) {
    min-width: 0;
    padding: 0 12px;
    .label { display: none; }
  }

  .kbd {
    display: inline-flex;
    align-items: center;
    gap: 1px;
    padding: 2px 6px;
    border-radius: 6px;
    background: ${s.w4.colors.sidebarHover};
    border: 1px solid ${s.w4.colors.borderSubtle};
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    color: ${s.w4.colors.mainTextMuted};
    letter-spacing: 0.04em;
    transition: color ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, background ${s.w4.transitions.fast};
  }

  &:hover {
    border-color: ${s.w4.colors.accent};
    background: ${s.w4.colors.surfaceRaised};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  }
  &:hover .label { color: ${s.w4.colors.mainText}; }
  &:hover .kbd {
    color: ${s.w4.colors.accent};
    border-color: ${s.w4.colors.accent}55;
    background: ${s.w4.colors.surface};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
`,l().div`
  position: relative;
  display: inline-flex;
`,l().span`
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: #ff6fa9;
  border: 2px solid ${s.w4.colors.mainBg};
  color: #fff;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0;
  pointer-events: none;
`,l().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  background: ${s.w4.colors.accent};
  border: 1px solid ${s.w4.colors.accent};
  border-radius: 999px;
  color: #fff;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast};
  white-space: nowrap;

  &:hover {
    background: ${s.w4.colors.accentHover};
    border-color: ${s.w4.colors.accentHover};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
`,l().div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 900;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  ${({forceVisible:e})=>e?"":"@media (hover: hover) and (pointer: fine) { display: none; }"}
`,l().div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 45%;
  height: 60%;
  pointer-events: auto;
  touch-action: none;
`,l().div`
  position: absolute;
  left: ${({left:e})=>e}px;
  top: ${({top:e})=>e}px;
  width: ${120}px;
  height: ${120}px;
  margin-left: -${60}px;
  margin-top: -${60}px;
  border-radius: 50%;
  background: rgba(13, 17, 23, 0.55);
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
  pointer-events: none;
  opacity: ${({active:e})=>e?1:.9};
  transition: opacity ${s.w4.transitions.fast};
`,l().div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${54}px;
  height: ${54}px;
  margin-left: -${27}px;
  margin-top: -${27}px;
  border-radius: 50%;
  background: ${s.w4.colors.accent};
  border: 2px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.45);
  transform: translate(
    ${({dx:e})=>60*e}px,
    ${({dy:e})=>60*e}px
  );
  transition: transform 0.05s linear;
`,l().div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  gap: 14px;
  pointer-events: auto;
  touch-action: manipulation;

  @media (max-width: ${s.w4.breakpoints.md}) {
    right: 20px;
    bottom: 20px;
    gap: 10px;
  }
`,l().button`
  min-width: 72px;
  min-height: 72px;
  padding: 0 18px;
  border-radius: 50%;
  background: ${({accent:e})=>e};
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-family: ${s.w4.typography.fontFamily};
  font-weight: 800;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  touch-action: manipulation;
  /* transform is hand-tuned tighter than the fast token so the press-scale
   * tracks the finger (joystick physics), box-shadow uses the motion scale. */
  transition: transform 0.08s ease, box-shadow ${s.w4.transitions.fast};

  &:active {
    transform: scale(0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  }
`;let z=(0,$.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;l()("div",{shouldForwardProp:e=>"accentColor"!==e&&"pinned"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  background: ${s.w4.colors.surface};
  border: 1px solid ${({pinned:e})=>e?s.w4.colors.accent:s.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  min-height: 230px;
  transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 200ms,
              box-shadow 200ms;
  animation: ${z} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${s.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${s.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .pin-btn { opacity: 1; }
    &:hover .pin-controls { opacity: 1; }
  }

  @media (hover: none) {
    .pin-btn { opacity: ${({pinned:e})=>e?1:.55}; }
    .pin-controls { opacity: 0.55; }
  }
`,l().div`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${s.w4.colors.border};
  color: ${s.w4.colors.mainText};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
    z-index: 1;
  }

  /* ── Per-id templates ── */

  /* generic fallback: diagonal gradient + uppercase monogram */
  &.viz--generic {
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(135deg, var(--acc) 0%, transparent 70%),
      linear-gradient(135deg, #1a1f38, #0f1220);
  }
  & .viz-mono {
    position: absolute;
    left: 16px;
    bottom: 12px;
    font-family: ${s.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 28px;
    letter-spacing: -1px;
    color: var(--acc);
    opacity: 0.9;
    z-index: 1;
  }

  /* markdown — paragraphs of lines */
  &.viz--markdown {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { display: block; height: 4px; background: #388bfd; border-radius: 2px; opacity: 0.7; }
    & > .h { height: 7px; background: ${s.w4.colors.mainText}; opacity: 0.9; width: 55%; margin-bottom: 4px; }
    & > .l1 { width: 88%; opacity: 0.5; }
    & > .l2 { width: 72%; opacity: 0.4; }
    & > .l3 { width: 90%; opacity: 0.5; }
    & > .l4 { width: 60%; opacity: 0.3; }
  }

  /* school — year ladder */
  &.viz--school {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    align-items: flex-end;
    gap: 6px;
    & > .col { flex: 1; background: linear-gradient(180deg, #f78166, rgba(247, 129, 102, 0.1)); border-radius: 3px 3px 0 0; }
    & > .col:nth-of-type(1) { height: 32%; }
    & > .col:nth-of-type(2) { height: 52%; }
    & > .col:nth-of-type(3) { height: 74%; }
    & > .col:nth-of-type(4) { height: 92%; }
    & > .lb { position: absolute; left: 14px; top: 12px; font-family: ${s.w4.typography.fontFamily}; font-style: italic; font-size: 22px; font-weight: 600; color: #f78166; letter-spacing: -0.4px; }
  }

  /* earth — globe grid */
  &.viz--earth {
    background: linear-gradient(135deg, #0d2e1a, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .g {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 35% 35%, rgba(63, 185, 80, 0.5), transparent 40%),
        radial-gradient(circle at 70% 65%, rgba(63, 185, 80, 0.3), transparent 40%),
        linear-gradient(135deg, #0f3a20, #0a1a10);
      border: 1px solid rgba(63, 185, 80, 0.3);
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 40px rgba(63, 185, 80, 0.15);
    }
    & > .g::before,
    & > .g::after {
      content: '';
      position: absolute;
      left: 0; right: 0;
      border-top: 1px solid rgba(63, 185, 80, 0.22);
    }
    & > .g::before { top: 30%; transform: skewY(-10deg); }
    & > .g::after  { top: 60%; transform: skewY(8deg); }
  }

  /* cosmos — starfield + moon */
  &.viz--cosmos {
    background:
      radial-gradient(2px 2px at 20% 30%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 75% 20%, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
      radial-gradient(1.5px 1.5px at 45% 70%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 90% 60%, rgba(255, 255, 255, 0.8) 50%, transparent 50%),
      radial-gradient(2px 2px at 15% 85%, rgba(188, 140, 255, 0.9) 50%, transparent 50%),
      radial-gradient(1px 1px at 60% 40%, rgba(255, 255, 255, 0.4) 50%, transparent 50%),
      radial-gradient(1px 1px at 30% 15%, rgba(188, 140, 255, 0.7) 50%, transparent 50%),
      radial-gradient(circle at 78% 45%, rgba(188, 140, 255, 0.35), transparent 45%),
      linear-gradient(135deg, #1a1140, #0f1220);
    &::after {
      content: '';
      position: absolute;
      right: 24px;
      top: 24px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #e9d9ff, #b8a0e8 60%, #7a5ec0);
      box-shadow: 0 0 30px rgba(188, 140, 255, 0.4);
    }
  }

  /* techscope — spectrum bars */
  &.viz--techscope {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: flex-end;
    padding: 14px;
    gap: 3px;
    & > span { flex: 1; background: linear-gradient(180deg, #a371f7, rgba(163, 113, 247, 0.2)); border-radius: 1px; }
  }

  /* citypulse — skyline + sun */
  &.viz--citypulse {
    background: linear-gradient(180deg, #2a1a10 0%, #0f1220 100%);
    &::before {
      content: '';
      position: absolute;
      left: 0; right: 0; bottom: 0;
      height: 70%;
      background: #0a0b14;
      clip-path: polygon(0 100%, 0 80%, 6% 80%, 6% 55%, 13% 55%, 13% 85%, 22% 85%, 22% 35%, 34% 35%, 34% 70%, 43% 70%, 43% 20%, 55% 20%, 55% 60%, 66% 60%, 66% 40%, 75% 40%, 75% 75%, 88% 75%, 88% 50%, 100% 50%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      top: 18px; right: 20px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: #d29922;
      box-shadow: 0 0 24px rgba(210, 153, 34, 0.5);
    }
  }

  /* stockpulse — candles */
  &.viz--stockpulse {
    background: linear-gradient(135deg, #0f2818, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    & > .c { flex: 1; position: relative; height: 100%; }
    & > .c::before { content: ''; position: absolute; left: 50%; transform: translateX(-50%); width: 1px; top: 20%; bottom: 15%; background: #3fb950; opacity: 0.5; }
    & > .c::after  { content: ''; position: absolute; left: 0; width: 100%; top: 35%; height: 30%; background: #3fb950; border-radius: 1px; }
    & > .c.r::before { background: #d86a6a; }
    & > .c.r::after  { background: #d86a6a; }
  }

  /* csvexplorer — mini table */
  &.viz--csvexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 14px;
    gap: 1px;
    & > span {
      background: rgba(88, 166, 255, 0.08);
      border-radius: 2px;
      display: flex;
      align-items: center;
      padding-left: 6px;
      font-family: ${s.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: #58a6ff;
    }
    & > span.h { background: rgba(88, 166, 255, 0.2); font-weight: 500; }
  }

  /* chartbuilder — area chart */
  &.viz--chartbuilder {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    &::before {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: linear-gradient(180deg, rgba(210, 153, 34, 0.5), transparent);
      clip-path: polygon(0 100%, 0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: #d29922;
      clip-path: polygon(0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 24%, 90% 12%, 75% 32%, 60% 22%, 45% 52%, 25% 37%, 15% 57%, 0 62%);
    }
  }

  /* pad — notebook */
  &.viz--pad {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { height: 3px; background: rgba(247, 129, 102, 0.45); border-radius: 2px; }
    & > .t { height: 6px; background: #f78166; width: 45%; }
    & > .a { width: 85%; }
    & > .b { width: 65%; }
    & > .c { width: 90%; }
    & > .d { width: 50%; }
  }

  /* regexlab — pattern + highlight */
  &.viz--regexlab {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 14px;
    padding: 14px;
    line-height: 1.7;
    color: ${s.w4.colors.mainTextMuted};
    & .hl { background: rgba(56, 139, 253, 0.35); color: #58a6ff; padding: 1px 3px; border-radius: 2px; }
    & .slash { color: #58a6ff; }
  }

  /* jsonexplorer — tree */
  &.viz--jsonexplorer {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    color: ${s.w4.colors.mainTextMuted};
    line-height: 1.5;
    & .k { color: #3fb950; }
    & .v { color: ${s.w4.colors.mainText}; }
    & .b { color: ${s.w4.colors.mainTextMuted}; opacity: 0.7; }
  }

  /* codediff — two columns */
  &.viz--codediff {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    padding: 14px;
    & > .col { display: flex; flex-direction: column; gap: 3px; }
    & span { height: 4px; border-radius: 2px; }
    & .a { background: rgba(216, 106, 106, 0.4); }
    & .n { background: rgba(255, 255, 255, 0.08); }
    & .g { background: rgba(127, 183, 126, 0.5); }
  }

  /* playground — tubes */
  &.viz--playground {
    background: linear-gradient(135deg, #2a2410, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    & > .tube {
      width: 24px;
      height: 60px;
      border: 1.5px solid #facc15;
      border-radius: 0 0 12px 12px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg, transparent 40%, rgba(250, 204, 21, 0.35) 40%);
    }
    & > .tube::before {
      content: '';
      position: absolute;
      inset: 40% 3px 3px 3px;
      background: #facc15;
      border-radius: 0 0 8px 8px;
      opacity: 0.6;
    }
  }

  /* jwtinspector — token chunks */
  &.viz--jwtinspector {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    justify-content: center;
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 11px;
    & > span { padding: 6px 10px; border-radius: 4px; }
    & > .h { background: rgba(163, 113, 247, 0.2); color: #a371f7; }
    & > .p { background: rgba(127, 183, 126, 0.2); color: #7fb77e; }
    & > .s { background: rgba(216, 106, 106, 0.2); color: #d86a6a; }
    & > .sep { padding: 0; background: transparent; color: ${s.w4.colors.mainTextMuted}; opacity: 0.6; }
  }

  /* colorlab — palette strip */
  &.viz--colorlab {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
  }

  /* cronbuilder — timeline */
  &.viz--cronbuilder {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    & > .row { display: flex; align-items: center; gap: 2px; height: 6px; position: relative; }
    & > .row::before {
      content: attr(data-l);
      position: absolute;
      left: -2px;
      top: -14px;
      font-family: ${s.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: ${s.w4.colors.mainTextMuted};
      letter-spacing: 1px;
      opacity: 0.7;
    }
    & > .row span { flex: 1; height: 100%; background: rgba(255, 255, 255, 0.05); border-radius: 1px; }
    & > .row span.on { background: #3fb950; }
  }

  /* weather — sun + temp */
  &.viz--weather {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    & > .sun {
      position: absolute;
      top: 20px; left: 34px;
      width: 50px; height: 50px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #ffd780, #58a6ff 80%);
      box-shadow: 0 0 40px rgba(88, 166, 255, 0.4);
    }
    & > .temp {
      position: absolute;
      right: 20px; bottom: 14px;
      font-family: ${s.w4.typography.fontFamily};
      font-size: 38px;
      font-weight: 300;
      color: #58a6ff;
      line-height: 1;
      letter-spacing: -1px;
    }
    & > .temp small { font-size: 16px; vertical-align: top; margin-left: 2px; font-weight: 400; }
  }

  /* apiexplorer — request/response */
  &.viz--apiexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 14px;
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & .get { color: #3fb950; }
    & .url { color: ${s.w4.colors.mainText}; }
    & .status { color: #58a6ff; }
    & .echo { color: ${s.w4.colors.mainTextMuted}; opacity: 0.75; }
  }

  /* movies — poster marquee. 4×2 ordered cool→warm for a diagonal tonal
     sweep; extra gap + padding lets each poster breathe instead of reading
     as a packed mosaic. */
  &.viz--movies {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 16px;
    & > span { border-radius: 4px; }
  }

  /* promptlab — chat bubbles */
  &.viz--promptlab {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    & > .bubble {
      background: rgba(163, 113, 247, 0.12);
      border: 1px solid rgba(163, 113, 247, 0.3);
      border-radius: 6px;
      padding: 6px 10px;
      font-size: 10.5px;
      color: ${s.w4.colors.mainText};
      align-self: flex-start;
      max-width: 80%;
      line-height: 1.35;
    }
    & > .bubble.r {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.14);
      color: ${s.w4.colors.mainTextMuted};
      align-self: flex-end;
      font-family: ${s.w4.typography.fontFamilyMono};
    }
  }

  /* ask — floating conversation with sparkle + response ripples */
  &.viz--ask {
    background:
      radial-gradient(circle at 20% 20%, rgba(139, 123, 255, 0.35), transparent 60%),
      radial-gradient(circle at 80% 85%, rgba(99, 102, 241, 0.25), transparent 55%),
      linear-gradient(135deg, #1a1635 0%, #0e1022 100%);
    padding: 12px;

    & > .ask-user {
      position: absolute;
      top: 14px;
      right: 14px;
      background: rgba(139, 123, 255, 0.18);
      border: 1px solid rgba(139, 123, 255, 0.45);
      border-radius: 10px 10px 2px 10px;
      padding: 5px 9px;
      font-size: 9.5px;
      color: ${s.w4.colors.mainText};
      font-family: ${s.w4.typography.fontFamilyMono};
      letter-spacing: 0.02em;
      max-width: 60%;
    }

    & > .ask-spark {
      position: absolute;
      left: 14px;
      top: 48px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: linear-gradient(135deg, #a371f7, #58a6ff);
      box-shadow: 0 0 12px rgba(139, 123, 255, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 11px;
      line-height: 1;
    }
    & > .ask-spark::before { content: '✦'; }

    & > .ask-reply {
      position: absolute;
      left: 40px;
      right: 18px;
      top: 48px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    & > .ask-reply > span {
      height: 5px;
      border-radius: 2px;
      background: rgba(230, 237, 243, 0.22);
    }
    & > .ask-reply > span.h {
      width: 60%;
      background: rgba(139, 123, 255, 0.55);
      height: 6px;
    }
    & > .ask-reply > span.b1 { width: 85%; }
    & > .ask-reply > span.b2 { width: 72%; }
    & > .ask-reply > span.b3 { width: 50%; }
  }

  /* devtools — IDE-style panel grid showing the 11 tools */
  &.viz--devtools {
    background:
      linear-gradient(180deg, #0d1117 0%, #05070b 100%);
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0 1px, transparent 1px 3px);
      pointer-events: none;
      z-index: 1;
    }

    & > span {
      position: relative;
      z-index: 2;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${s.w4.typography.fontFamilyMono};
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: rgba(255, 255, 255, 0.92);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    /* mark the "focused" pane — the active tool */
    & > span.active {
      outline: 1px solid rgba(255, 255, 255, 0.3);
      outline-offset: 1px;
    }
  }

  /* imagegen — generated frame */
  &.viz--imagegen {
    background: conic-gradient(from 40deg at 50% 50%, #f78166 0 60deg, #a371f7 60deg 180deg, #58a6ff 180deg 280deg, #f78166 280deg 360deg);
    &::after {
      content: 'generate';
      position: absolute;
      left: 0; right: 0; bottom: 14px;
      text-align: center;
      font-family: ${s.w4.typography.fontFamilyMono};
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.9);
      z-index: 2;
    }
    & > .frame {
      position: absolute;
      inset: 14px;
      background: rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
    }
  }

  /* daily — bullseye */
  &.viz--daily {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .ring { position: absolute; border-radius: 50%; border: 1.5px solid #34d399; }
    & > .ring.r1 { width: 100px; height: 100px; opacity: 0.25; }
    & > .ring.r2 { width: 65px;  height: 65px;  opacity: 0.5; }
    & > .ring.r3 { width: 30px;  height: 30px;  opacity: 1; }
    & > .dot {
      width: 8px; height: 8px;
      background: #34d399;
      border-radius: 50%;
      box-shadow: 0 0 18px #34d399;
      position: relative;
      z-index: 2;
    }
  }

  /* games — square collage */
  &.viz--games {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    padding: 8px;
    & > span {
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${s.w4.typography.fontFamily};
      font-weight: 800;
      font-size: 14px;
      letter-spacing: -1px;
      color: ${s.w4.colors.mainText};
    }
  }
`,l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .lock {
    margin-left: auto;
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 9px;
    color: ${s.w4.colors.mainTextMuted};
    letter-spacing: 1.4px;
    text-transform: uppercase;
    border: 1px solid ${s.w4.colors.border};
    border-radius: 3px;
    padding: 1px 6px;
    flex-shrink: 0;
  }
`,l().div`
  padding: 6px 14px 16px;
`,l().h3`
  margin: 0 0 6px;
  font-family: ${s.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${s.w4.colors.mainText};

  .hash {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${s.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,l().p`
  margin: 0;
  color: ${s.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,l().div`
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid ${s.w4.colors.borderSubtle};
  font-size: 12px;
  color: ${s.w4.colors.mainTextMuted};
  line-height: 1.4;
`,l().button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: ${({pinned:e})=>e?s.w4.colors.accent:s.w4.colors.mainText};
  opacity: ${({pinned:e})=>+!!e};
  cursor: pointer;
  transition: opacity ${s.w4.transitions.fast}, color ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast};
  z-index: 3;
  padding: 0;

  &:hover {
    color: ${s.w4.colors.accent};
    border-color: ${s.w4.colors.accent};
  }
`,l().div`
  position: absolute;
  top: 8px;
  right: 44px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${s.w4.transitions.fast};
  z-index: 3;
`,l().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1.5px solid
    ${({variant:e})=>"default"===e?s.w4.colors.borderStrong:s.w4.colors.accent};
  background: ${({variant:e})=>"filled"===e?s.w4.colors.accentMuted:"transparent"};
  color: ${({variant:e})=>"default"===e?s.w4.colors.mainTextMuted:s.w4.colors.accent};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 500;
  white-space: nowrap;
  cursor: ${({clickable:e})=>e?"pointer":"default"};
  transition: ${s.w4.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${({variant:e})=>"default"===e?s.w4.colors.mainTextFaint:s.w4.colors.accentHover};
    color: ${({variant:e})=>"default"===e?s.w4.colors.mainText:s.w4.colors.accentHover};
  }

  &:focus-visible {
    ${s.w4.focusRing}
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,l().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
`;let j={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:s.w4.colors.accentMuted},T={neutral:s.w4.colors.mainTextMuted,live:s.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:s.w4.colors.accent};l().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  font-weight: ${({tone:e})=>"film"===e||"tv"===e?600:500};
  letter-spacing: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"1.2px":"0.6px"};
  text-transform: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"uppercase":"none"};
  padding: ${({tone:e})=>"film"===e||"tv"===e?"3px 8px":"2px 7px"};
  border-radius: ${({tone:e})=>"film"===e||"tv"===e?s.w4.borderRadius.sm:"3px"};
  background: ${({tone:e})=>j[e]};
  color: ${({tone:e})=>T[e]};
`,l().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`,l().kbd`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${s.w4.colors.border};
  border-radius: 3px;
  color: ${s.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`,l().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,l().label`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 9px 14px;
  transition: border-color ${s.w4.transitions.fast};

  &:focus-within {
    border-color: ${s.w4.colors.accent};
  }
`,l().input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeMd};
  color: ${s.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${s.w4.colors.mainTextFaint};
  }
`,l().span`
  display: inline-flex;
  align-items: center;
  color: ${s.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,l().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  /* Clip any inner row that's wider than the column instead of letting it
   * push the panel past the grid track. PanelGrid uses minmax(0, 1fr) so
   * the column width is authoritative — we just need to honour it here. */
  min-width: 0;
  overflow: hidden;
  padding: 18px 20px 20px;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.borderSubtle};
  border-radius: ${s.w4.borderRadius.lg};
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  transition: border-color ${s.w4.transitions.fast},
    background ${s.w4.transitions.fast};

  &:hover {
    border-color: ${s.w4.colors.borderStrong};
  }

  ${({accentColor:e})=>e&&`&::before {
      content: '';
      position: absolute;
      top: 14px; bottom: 14px; left: 0;
      width: 2px;
      background: ${e};
      border-radius: 0 2px 2px 0;
      opacity: 0.7;
    }`}
`,l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,l().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${s.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,l().div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  line-height: 1.45;
`,l().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${s.w4.colors.danger};
`,l().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px;
  background: ${s.w4.colors.surface};
  border: 1px solid
    ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.borderSubtle};
  border-radius: ${s.w4.borderRadius.lg};
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  box-shadow: ${({active:e})=>e?`inset 0 0 0 1px ${s.w4.colors.accent}`:"none"};
  transition: border-color ${s.w4.transitions.fast};

  &:hover {
    border-color: ${({active:e})=>e?s.w4.colors.accentHover:s.w4.colors.borderStrong};
  }
`,l().div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
`,l().div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: ${({bg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fff;
  flex-shrink: 0;
`,l().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,l().div`
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${s.w4.colors.mainText};
  margin-bottom: 4px;
`,l().div`
  font-size: 11.5px;
  color: ${s.w4.colors.mainTextMuted};
  line-height: 1.35;
  margin-bottom: 8px;
`,l().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${s.w4.colors.accentMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextMuted};
`,l().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 1;
  min-height: 0;
`,l().button`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.borderSubtle};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;
  gap: 6px;
  font-family: inherit;
  color: ${s.w4.colors.mainText};
  cursor: ${e=>e.onClick?"pointer":"default"};
  transition: border-color ${s.w4.transitions.fast},
    background ${s.w4.transitions.fast};

  &:hover {
    border-color: ${s.w4.colors.borderStrong};
    background: ${s.w4.colors.surfaceHover};
  }

  &:focus-visible {
    ${s.w4.focusRing}
  }
`,l().div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: ${({fg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`,l().div`
  font-size: 11px;
  color: ${s.w4.colors.mainText};
`,l().div`
  margin-top: 14px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({color:e})=>e};
  letter-spacing: 0.5px;
`,l().div`
  position: relative;
  display: inline-block;
`,l().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px 6px 8px;
  background: ${({open:e})=>e?s.w4.colors.surfaceHover:"transparent"};
  border: 1px solid
    ${({open:e})=>e?s.w4.colors.borderStrong:s.w4.colors.border};
  border-radius: 999px;
  color: ${s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background ${s.w4.transitions.fast},
    border-color ${s.w4.transitions.fast},
    color ${s.w4.transitions.fast};

  &:hover {
    color: ${s.w4.colors.mainText};
    border-color: ${s.w4.colors.borderStrong};
  }
  &:focus-visible { ${s.w4.focusRing} }
`,l().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  background: ${s.w4.colors.accentMuted};
  color: ${s.w4.colors.accent};
  padding: 2px 7px;
  border-radius: 999px;
`;let F=(0,$.keyframes)`
  from { opacity: 0; transform: translate(-50%, -6px); }
  to   { opacity: 1; transform: translate(-50%,  0); }
`;l().div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  max-width: calc(100vw - 24px);
  padding: 10px;
  background: ${s.w4.colors.surfaceRaised};
  border: 1px solid ${s.w4.colors.borderStrong};
  border-radius: 14px;
  box-shadow: ${s.w4.elevation.lg};
  z-index: ${s.w4.zIndex.dropdown};
  animation: ${F} 0.18s ease both;

  @media (max-width: ${s.w4.breakpoints.md}) {
    position: fixed;
    top: calc(48px + env(safe-area-inset-top, 0px) + 6px);
    left: 12px;
    right: 12px;
    width: auto;
    max-width: none;
    transform: none;
    animation: none;
    max-height: calc(100dvh - 48px - env(safe-area-inset-top, 0px) - 24px);
    overflow-y: auto;
  }
`,l()("button",{shouldForwardProp:e=>"accent"!==e&&"expanded"!==e})`
  width: 100%;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  background: ${({expanded:e})=>e?s.w4.colors.surfaceHover:"transparent"};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  text-align: left;
  transition: background ${s.w4.transitions.fast};

  &:hover { background: ${s.w4.colors.surfaceHover}; }
  &:focus-visible { ${s.w4.focusRing} }
`,l()("span",{shouldForwardProp:e=>"accent"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({accent:e})=>e}26;
  color: ${({accent:e})=>e};
  border: 1px solid ${({accent:e})=>e}40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,l().span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,l().span`
  font-size: 13.5px;
  color: ${s.w4.colors.mainText};
  font-weight: 500;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,l().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${s.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,l()("span",{shouldForwardProp:e=>"accent"!==e})`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  min-width: 24px;
  height: 22px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accent:e})=>e}30;
  color: ${({accent:e})=>e};
  border-radius: 999px;
`,l().div`
  margin: 2px 0 6px 48px;
  padding: 4px 0;
  border-left: 1px solid ${s.w4.colors.borderSubtle};
  display: flex;
  flex-direction: column;
`,l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px 7px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  color: ${s.w4.colors.mainTextMuted};
  font-size: 12.5px;
  cursor: pointer;
  text-align: left;
  transition: background ${s.w4.transitions.fast},
    color ${s.w4.transitions.fast};

  &:hover {
    color: ${s.w4.colors.mainText};
    background: ${s.w4.colors.surfaceHover};
  }
  &:focus-visible { ${s.w4.focusRing} }
`,l().span`
  font-size: 14px;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: ${({accent:e})=>e?`${e}22`:"transparent"};
`,l().span`
  margin-left: auto;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${s.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
`;let S=(0,$.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;l()("div",{shouldForwardProp:e=>"accentColor"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  min-height: 230px;
  transition:
    transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 200ms,
    box-shadow 200ms;
  animation: ${S} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover (mirrors AppCard). */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${s.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${s.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .gamecard-emoji { transform: translateY(-2px) scale(1.05); }
  }
`,l()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${s.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(120% 100% at 50% 100%, var(--acc) 0%, transparent 60%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
  background-color: ${s.w4.colors.codeBg};

  /* Subtle vignette + tile pattern, both fade in on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
  }

  /* ── V3 pattern-tile variants ──────────────────────────────────────────
   * Ported from docs/design/atlantis/project/Atlantis Game Card Explorations.html
   * Raw hex values are intentional — the viz is artwork, mirroring AppCard's
   * sanctioned exception to the no-hardcoded-colors rule.
   */

  /* familyquiz — scattered brand/pink dots, "Q & A" label */
  &.viz--familyquiz {
    background:
      radial-gradient(circle at 20% 30%, rgba(139, 123, 255, 0.4), transparent 15%),
      radial-gradient(circle at 55% 60%, rgba(139, 123, 255, 0.3), transparent 12%),
      radial-gradient(circle at 80% 25%, rgba(255, 111, 169, 0.35), transparent 12%),
      radial-gradient(circle at 35% 75%, rgba(255, 111, 169, 0.25), transparent 14%),
      radial-gradient(circle at 90% 80%, rgba(139, 123, 255, 0.2), transparent 12%),
      #14172a;
  }

  /* tictactoe — grid lines, "3×3" */
  &.viz--tictactoe {
    background:
      repeating-linear-gradient(90deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      repeating-linear-gradient(0deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      #14172a;
  }

  /* soundhunter — vertical waveform stripes, "waveform" */
  &.viz--soundhunter {
    background:
      repeating-linear-gradient(90deg, rgba(127, 183, 126, 0.25) 0 2px, transparent 2px 7px),
      linear-gradient(180deg, #14302a 0%, #0f1220 100%);
  }

  /* adventure — dusk with paper texture */
  &.viz--adventure {
    background:
      radial-gradient(60% 50% at 50% 100%, rgba(232, 154, 92, 0.35), transparent 60%),
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0 2px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* pixelboard — rainbow conic masked by a center fade, "palette" */
  &.viz--pixelboard {
    background:
      conic-gradient(
        from 0deg at 50% 50%,
        #d86a6a 0 60deg,
        #e89a5c 60deg 120deg,
        #c4b24a 120deg 180deg,
        #7fb77e 180deg 240deg,
        #6aa8d8 240deg 300deg,
        #8b7bff 300deg 360deg
      );
    opacity: 0.3;
  }
  &.viz--pixelboard::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 30%, #14172a 70%);
    pointer-events: none;
    z-index: 1;
  }

  /* memory — flipped-card grid, cyan tones */
  &.viz--memory {
    background:
      repeating-linear-gradient(0deg, transparent 0 22px, rgba(6, 182, 212, 0.14) 22px 24px),
      repeating-linear-gradient(90deg, transparent 0 34px, rgba(6, 182, 212, 0.14) 34px 36px),
      linear-gradient(180deg, #0d1f28, #0f1220);
  }

  /* stopgame — warning stripes with stop-sign radial */
  &.viz--stopgame {
    background:
      radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.35), transparent 55%),
      repeating-linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0 8px, transparent 8px 20px),
      linear-gradient(180deg, #241506, #0f1220);
  }

  /* tapit — concentric target rings, coral tint */
  &.viz--tapit {
    background:
      radial-gradient(circle at 50% 50%, rgba(249, 117, 131, 0.55) 0 8%, transparent 8.5% 22%, rgba(249, 117, 131, 0.35) 22.5% 28%, transparent 28.5% 44%, rgba(249, 117, 131, 0.22) 44.5% 52%, transparent 53%),
      linear-gradient(180deg, #2a1420, #0f1220);
  }

  /* bombbrawl — shockwave rings on dark red */
  &.viz--bombbrawl {
    background:
      radial-gradient(circle at 50% 55%, rgba(255, 68, 68, 0.45) 0 12%, transparent 13% 25%, rgba(255, 68, 68, 0.25) 26% 38%, transparent 39% 55%, rgba(255, 68, 68, 0.12) 56% 70%, transparent 71%),
      linear-gradient(180deg, #2a0a0f, #0f0a12);
  }

  /* jumpparty — dotted-trail bounce, lime green */
  &.viz--jumpparty {
    background:
      radial-gradient(circle at 15% 80%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      radial-gradient(circle at 30% 60%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 50% 40%, rgba(63, 185, 80, 0.4) 0 3%, transparent 4%),
      radial-gradient(circle at 70% 55%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 85% 75%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      linear-gradient(180deg, #0e2416, #0f1220);
  }

  /* lebem — pastel pages, coral glow (read-to-play) */
  &.viz--lebem {
    background:
      repeating-linear-gradient(90deg, transparent 0 40px, rgba(249, 117, 131, 0.10) 40px 41px),
      radial-gradient(ellipse at 50% 100%, rgba(249, 117, 131, 0.3), transparent 65%),
      linear-gradient(180deg, #24121a, #0f1220);
  }

  /* drawguess — scribble strokes, lilac */
  &.viz--drawguess {
    background:
      repeating-linear-gradient(20deg, rgba(210, 168, 255, 0.16) 0 1.5px, transparent 2px 9px),
      repeating-linear-gradient(-30deg, rgba(210, 168, 255, 0.12) 0 1.5px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* spotit — scattered dots on violet */
  &.viz--spotit {
    background:
      radial-gradient(circle at 25% 35%, rgba(139, 92, 246, 0.35) 0 4%, transparent 5%),
      radial-gradient(circle at 55% 70%, rgba(139, 92, 246, 0.45) 0 5%, transparent 6%),
      radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.30) 0 3%, transparent 4%),
      radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.25) 0 3%, transparent 4%),
      radial-gradient(circle at 75% 55%, rgba(139, 92, 246, 0.18) 0 2%, transparent 3%),
      linear-gradient(180deg, #1c1530, #0f1220);
  }
`,l().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextMuted};
  z-index: 2;
`,l()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${s.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
  background: ${s.w4.colors.codeBg};

  /* ── bombbrawl — explosive red, heavy condensed logotype ──
   * padding-top reserves room for the player-count + online badges so
   * "BOMB" never sits under them (TopLeft / TopRight are absolutely
   * positioned at top:10px). */
  &.hero--bombbrawl {
    background: linear-gradient(135deg, #2a0a0f, #0f0a12);
    justify-content: flex-start;
    padding: 44px 20px 16px;
  }
  &.hero--bombbrawl .hero-mark {
    font-family: ${s.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 48px;
    letter-spacing: -3px;
    line-height: 0.88;
    color: #ff4444;
    text-shadow: 0 0 40px rgba(255, 68, 68, 0.45), 0 0 80px rgba(255, 68, 68, 0.18);
    user-select: none;
  }
  &.hero--bombbrawl .hero-mark em {
    font-style: normal;
    color: #ffb347;
    display: block;
    font-size: 36px;
    letter-spacing: -2px;
    opacity: 0.9;
  }

  /* ── jumpparty — lime burst, bouncy stacked words ── */
  &.hero--jumpparty {
    background: linear-gradient(135deg, #0e2416, #0f1220);
    flex-direction: column;
    gap: 0;
    padding: 44px 16px 12px;
  }
  &.hero--jumpparty .hero-mark {
    font-family: ${s.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 54px;
    letter-spacing: -3px;
    line-height: 0.9;
    color: #3fb950;
    text-shadow: 0 0 36px rgba(63, 185, 80, 0.4);
    user-select: none;
  }
  &.hero--jumpparty .hero-mark em {
    font-style: normal;
    font-size: 24px;
    letter-spacing: 4px;
    color: rgba(63, 185, 80, 0.55);
    display: block;
    text-transform: uppercase;
  }

  /* ── animalarena — trophy gold, serif italic clash ── */
  &.hero--animalarena {
    background: linear-gradient(135deg, #1c1a0e, #0f0f12);
    flex-direction: column;
    align-items: flex-start;
    padding: 44px 20px 18px;
  }
  &.hero--animalarena .hero-mark {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-weight: 600;
    font-size: 40px;
    letter-spacing: -2px;
    line-height: 0.92;
    background: linear-gradient(120deg, #f59e0b, #ef4444 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    user-select: none;
  }
  &.hero--animalarena .hero-mark em {
    font-style: normal;
    display: block;
    font-size: 14px;
    letter-spacing: 3px;
    -webkit-text-fill-color: rgba(245, 158, 11, 0.45);
    text-transform: uppercase;
    margin-top: 6px;
  }
`,l().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextMuted};
  z-index: 2;

  /* bombbrawl's "BOMB / BRAWL" logotype is left-aligned and reaches the
   * bottom of the hero zone — anchor the caption bottom-right instead so
   * it clears the typography. */
  .hero--bombbrawl & {
    left: auto;
    right: 14px;
    color: rgba(255, 179, 71, 0.55);
  }

  /* animalarena's "SUMO / ZOO" stack is also left-aligned and its "ZOO"
   * block reaches the bottom of the hero zone — same bottom-right
   * anchoring clears the overlap. */
  .hero--animalarena & {
    left: auto;
    right: 14px;
    color: rgba(245, 158, 11, 0.5);
  }
`,l().span`
  font-size: 56px;
  line-height: 1;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,l()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accentColor:e})=>`${e}1f`};
  border: 1px solid ${({accentColor:e})=>`${e}55`};
  color: ${({accentColor:e})=>e};
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,l().div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
`,l().div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`,l()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,l().div`
  padding: 6px 14px 16px;
`,l().h3`
  margin: 0 0 6px;
  font-family: ${s.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${s.w4.colors.mainText};

  .hash {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${s.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,l().p`
  margin: 0;
  color: ${s.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,r(5406),l().nav`padding: ${s.w4.spacing.sm} 0;`,l().div`
  border-bottom: 1px solid ${s.w4.colors.border}60;
  margin-bottom: 2px;
`,l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${s.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${s.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${s.w4.colors.sidebarText}; }
`,l().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,l().span`
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,l().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,l().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,l().div`overflow: hidden;`,l().div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,l().button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${s.w4.spacing.md};
  background: ${({active:e})=>e?s.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?s.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?s.w4.colors.sidebarActive:s.w4.colors.sidebarText};
  font-size: ${s.w4.typography.fontSizeBase};
  font-family: ${s.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${s.w4.colors.sidebarHover}; }
`,l().button`
  opacity: ${({active:e})=>+!!e};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":s.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;let L="#7fb77e",H=(0,$.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;l().div`
  position: relative;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  padding: 28px ${s.w4.spacing.lg} ${s.w4.spacing.lg};
  margin: ${s.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  min-height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${H} 0.25s ease both;
  transition:
    border-color ${s.w4.transitions.base},
    transform ${s.w4.transitions.base},
    box-shadow ${s.w4.transitions.base};

  /* Signature left accent bar — full-height, inset like a ribbon */
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0;
    width: 2px;
    border-radius: 2px;
    background: ${L};
  }

  /* Uppercase mono eyebrow tag — reads "◉ DIAGRAM" */
  &::after {
    content: '◉ DIAGRAM';
    position: absolute;
    top: 10px;
    right: 14px;
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    color: ${L};
    opacity: 0.75;
    pointer-events: none;
  }

  &:hover {
    border-color: ${s.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: ${s.w4.elevation.sm};
  }

  svg { max-width: 100%; height: auto; }
  svg text { font-variant-numeric: tabular-nums; }
`,l().div`
  height: 36px;
  width: min(60%, 240px);
  margin: 0 auto;
  border-radius: ${s.w4.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${s.w4.colors.border} 0%,
    ${s.w4.colors.borderStrong} 50%,
    ${s.w4.colors.border} 100%
  );
  background-size: 200% 100%;
  animation: ${(0,$.keyframes)`
    from { background-position: 200% 0; }
    to   { background-position: -200% 0; }
  `} 1.6s ease-in-out infinite;
  opacity: 0.45;
`,l().pre`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.codeBorder};
  border-radius: ${s.w4.borderRadius.md};
  padding: ${s.w4.spacing.md};
  margin: ${s.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${s.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,l().div`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.codeBorder};
  border-radius: ${s.w4.borderRadius.md};
  padding: ${s.w4.spacing.lg};
  margin: ${s.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,l().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  margin-bottom: ${s.w4.spacing.md};
  text-align: center;
`,l().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  margin-top: ${s.w4.spacing.md};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainTextMuted};
`,l().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,l().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,l().pre`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.codeBorder};
  border-radius: ${s.w4.borderRadius.md};
  padding: ${s.w4.spacing.md};
  margin: ${s.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${s.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,l().div`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.codeBorder};
  border-radius: ${s.w4.borderRadius.md};
  padding: ${s.w4.spacing.lg};
  margin: ${s.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${s.w4.spacing.md};
`,l().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,l().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${s.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,l().div`
  display: flex;
  gap: ${s.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,l().button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  background: ${({active:e})=>e?s.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${s.w4.colors.accent};
    color: ${s.w4.colors.accent};
  }
`,l().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainTextMuted};
  text-align: center;
`,l().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  text-align: center;
`;let C=(0,$.keyframes)`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`;l().div`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.codeBorder};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.md};
  margin: ${s.w4.spacing.lg} 0;
`,l().div`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${s.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${s.w4.spacing.sm};

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,l().div`
  display: flex;
  flex-direction: column;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${s.w4.colors.accent}40;
    box-shadow: 0 0 8px ${s.w4.colors.accent}15;
  }
`;let R=l().button`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  padding: 14px ${s.w4.spacing.md};
  min-height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${s.w4.typography.fontFamily};
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    animation: ${C} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;l()(R)`
  border-bottom: 1px solid ${s.w4.colors.border}80;
`,l()(R)``,l().span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({accentColor:e})=>e}18;
  color: ${({accentColor:e})=>e};
  flex-shrink: 0;
  transition: background 0.15s, transform 0.15s;

  button:active > & {
    background: ${({accentColor:e})=>e}30;
    transform: scale(0.9);
  }
`,l().span`
  font-size: ${s.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${s.w4.colors.accent};
`,l().span`
  font-size: ${s.w4.typography.fontSizeBase};
  color: ${s.w4.colors.mainTextMuted};
`;var B=r(1426);l().div`
  margin: ${s.w4.spacing.lg} 0;
  border-radius: ${s.w4.borderRadius.md};
  border: 1px solid ${s.w4.colors.codeBorder};
  overflow: hidden;
`,l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${s.w4.colors.codeBorder};
`,l().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,l().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":s.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${s.w4.colors.sidebarText}; border-color: ${s.w4.colors.sidebarText}; }
`,B.A,B.A['pre[class*="language-"]'],s.w4.colors.codeBg,B.A['code[class*="language-"]'],l().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${s.w4.borderRadius.md} ${s.w4.borderRadius.md} 0;
  padding: ${s.w4.spacing.md} ${s.w4.spacing.lg};
  margin: ${s.w4.spacing.lg} 0;
`,l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${s.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${s.w4.typography.fontFamily};
  margin-bottom: ${s.w4.spacing.sm};
`,l().div`
  color: ${s.w4.colors.mainText};
  font-size: ${s.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`,l().nav`
  width: 220px;
  min-width: 220px;
  padding: ${s.w4.spacing.xxl} 0 ${s.w4.spacing.xxl} ${s.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,l().div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  margin-bottom: ${s.w4.spacing.md};
`,l().ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,l().a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${s.w4.typography.fontSizeSm};
  font-family: ${s.w4.typography.fontFamily};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?s.w4.colors.accent:"transparent"};
  border-radius: 0 ${s.w4.borderRadius.sm} ${s.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${s.w4.colors.mainText}; background: ${s.w4.colors.sidebarHover}; }
`,l().div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${s.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,l().div`flex: 1; min-width: 0;`,l().article`
  padding: ${s.w4.spacing.xxl} 0;
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeMd};
  line-height: ${s.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${s.w4.spacing.xl} 0 ${s.w4.spacing.md};
    color: ${s.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${s.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${s.w4.typography.fontSizeXl}; border-bottom: 1px solid ${s.w4.colors.border}; padding-bottom: ${s.w4.spacing.sm}; }
  h2 { font-size: ${s.w4.typography.fontSizeLg}; border-bottom: 1px solid ${s.w4.colors.border}; padding-bottom: ${s.w4.spacing.xs}; }
  h3 { font-size: ${s.w4.typography.fontSizeMd}; }

  p { margin: ${s.w4.spacing.md} 0; }

  a { color: ${s.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${s.w4.colors.accentHover}; } }

  ul, ol { margin: ${s.w4.spacing.md} 0; padding-left: ${s.w4.spacing.xl}; }
  li { margin: ${s.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${s.w4.colors.border};
    margin: ${s.w4.spacing.lg} 0;
    padding: ${s.w4.spacing.sm} ${s.w4.spacing.lg};
    background: ${s.w4.colors.surface};
    color: ${s.w4.colors.mainTextMuted};
    border-radius: 0 ${s.w4.borderRadius.sm} ${s.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${s.w4.colors.codeBg};
    border: 1px solid ${s.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${s.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${s.w4.spacing.lg} 0; font-size: ${s.w4.typography.fontSizeBase}; }
  th, td { padding: ${s.w4.spacing.sm} ${s.w4.spacing.md}; border: 1px solid ${s.w4.colors.border}; text-align: left; }
  th { background: ${s.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${s.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${s.w4.colors.border}; margin: ${s.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${s.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${s.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${s.w4.spacing.lg} 0; }
`,l().div`
  display: flex;
  gap: ${s.w4.spacing.lg};
  padding: ${s.w4.spacing.xxl} 0;
  border-top: 1px solid ${s.w4.colors.border};
  margin-top: ${s.w4.spacing.xxl};
`,l().button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${s.w4.spacing.md} ${s.w4.spacing.lg};
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${s.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,l().div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${s.w4.colors.sidebarTextMuted}; font-family: ${s.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,l().div`
  font-size: ${s.w4.typography.fontSizeBase}; color: ${s.w4.colors.accent};
  font-family: ${s.w4.typography.fontFamily}; font-weight: 500;
`,l().div`
  color: ${s.w4.colors.mainTextMuted};
  padding: ${s.w4.spacing.xxl} ${s.w4.spacing.xl};
  font-family: ${s.w4.typography.fontFamily};
`;let V=(0,$.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,A=(0,$.keyframes)`
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
`;l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  /* Layout's TopBar uses z-index:1000; sit above it so the drawer fully
     covers the chrome and the drawer header / first row aren't clipped. */
  z-index: 1100;
  animation: ${V} 0.18s ease both;

  @media (min-width: ${s.w4.breakpoints.md}) {
    display: none;
  }
`,l().aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: min(86vw, 320px);
  background: ${s.w4.colors.sidebarBg};
  border-right: 1px solid ${s.w4.colors.sidebarBorder};
  z-index: 1101;
  /* Respect notches / status bar on iOS so the drawer header sits below
     the safe area inset rather than under the camera notch. */
  padding-top: env(safe-area-inset-top, 0px);
  display: flex;
  flex-direction: column;
  animation: ${A} 0.22s cubic-bezier(0.4, 0, 0.2, 1) both;

  @media (min-width: ${s.w4.breakpoints.md}) {
    display: none;
  }
`,l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,l().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${s.w4.colors.sidebarTextMuted};
`,l().div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
`,l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${s.w4.typography.fontFamily};
  background: ${s.w4.colors.mainBg};
`,l().div`
  position: absolute;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%,
    hsl(${({hue:e})=>e}, 80%, 65%) 0%,
    hsl(${({hue:e})=>e+30}, 70%, 45%) 60%,
    transparent 100%
  );
  filter: blur(60px);
  opacity: 0.18;
  animation: drift ${({dur:e})=>e}s ease-in-out infinite alternate;
  pointer-events: none;

  @keyframes drift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(30px, -20px) scale(1.12); }
  }
`,l().div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${s.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${s.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,l().div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,l().h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${s.w4.colors.mainText} 0%,
    ${s.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,l().p`
  font-size: ${s.w4.typography.fontSizeMd};
  color: ${s.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,l().span`
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,l().span`
  display: inline-flex;

  @media (min-width: ${s.w4.breakpoints.md}) {
    display: none;
  }
`,l().div`
  display: flex;
  gap: 4px;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 2px;
`,l().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?s.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":s.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":s.w4.colors.mainText};
  }
`,l().div`
  font-size: 14px;
  color: ${s.w4.colors.mainText};
  line-height: 1.65;

  p { margin: 0 0 0.6em; }
  p:last-child { margin-bottom: 0; }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${s.w4.colors.mainText};
    margin: 0.9em 0 0.3em;
    line-height: 1.3;
  }
  h1 { font-size: 17px; }
  h2 { font-size: 15px; }
  h3, h4, h5, h6 { font-size: 13.5px; }
  & > :first-of-type { margin-top: 0; }

  ul, ol {
    padding-left: 1.4em;
    margin: 0 0 0.6em;
    line-height: 1.65;
  }
  li { margin-bottom: 0.15em; }
  li p { margin: 0; }

  /* Task lists */
  ul.contains-task-list { list-style: none; padding-left: 0.2em; }
  li.task-list-item { display: flex; align-items: baseline; gap: 0.4em; }
  li.task-list-item input[type="checkbox"] {
    accent-color: ${s.w4.colors.accent};
    flex-shrink: 0;
    margin-top: 2px;
  }

  strong { font-weight: 600; color: ${s.w4.colors.mainText}; }
  em     { font-style: italic; }

  a {
    color: ${s.w4.colors.accent};
    text-decoration: none;

    &:hover { text-decoration: underline; color: ${s.w4.colors.accentHover}; }
  }

  blockquote {
    margin: 0.6em 0;
    padding: 6px 12px;
    border-left: 3px solid ${s.w4.colors.accent};
    background: ${s.w4.colors.surface};
    border-radius: 0 6px 6px 0;
    color: ${s.w4.colors.mainTextMuted};
    font-style: italic;
  }

  /* Inline code only — CodeBlock owns fenced blocks */
  code {
    font-family: ${s.w4.typography.fontFamilyMono};
    font-size: 12.5px;
    background: ${s.w4.colors.codeBg};
    border: 1px solid ${s.w4.colors.codeBorder};
    border-radius: 4px;
    padding: 1px 5px;
    color: ${s.w4.colors.mainText};
  }

  /* Pre reset — CodeBlock handles the chrome */
  pre { margin: 0.5em 0; }
  pre code { background: none; border: none; padding: 0; border-radius: 0; }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    margin: 0.5em 0;
    overflow: hidden;
    border-radius: ${s.w4.borderRadius.md};
  }
  th, td {
    padding: 7px 12px;
    border: 1px solid ${s.w4.colors.border};
    text-align: left;
    vertical-align: top;
  }
  th {
    background: ${s.w4.colors.surface};
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.03em;
    color: ${s.w4.colors.mainTextMuted};
    text-transform: uppercase;
  }
  tr:nth-of-type(even) td { background: ${s.w4.colors.surface}; }

  img {
    max-width: 100%;
    border-radius: ${s.w4.borderRadius.md};
    margin: 0.4em 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${s.w4.colors.border};
    margin: 0.8em 0;
  }

  /* KaTeX — hide the aria-only MathML fork, keep the HTML render */
  .katex .katex-mathml { display: none; }
  .katex { font-size: 1.05em; }
  .katex-display {
    margin: 0.6em 0;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 2px 0;
  }
`;var _=r(7993);l().nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${s.w4.spacing.sm} 0;
`,l().div`
  font-size: 10px;
  font-weight: 600;
  color: ${s.w4.colors.sidebarTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: ${s.w4.spacing.xs} ${s.w4.spacing.md};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&`
    font-size: 0;
    padding: 0;
    margin: 0;
    height: 0;
  `}
`,l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 0 6px;
  border: none;
  border-radius: ${s.w4.borderRadius.md};
  background: ${({active:e})=>e?s.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.sidebarText};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${s.w4.colors.mainText};
  }

  ${({collapsed:e})=>e&&`
    justify-content: center;
    padding: 8px;
    margin: 0 4px;
  `}
`,l().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`,l().span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"display: none;"}
`;let I=(0,$.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;l().div`
  display: grid;
  /* Desktop & iPad: exactly 2 equal columns. sm = 1 col, md/lg = 2 cols (full row). */
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: auto;
  gap: ${s.w4.spacing.lg};

  @media (max-width: ${s.w4.breakpoints.lg}) {
    gap: ${s.w4.spacing.md};
  }

  /* Mobile: stack everything in a single full-width column. */
  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,l().div`
  grid-column: ${({fullWidth:e,colSpan:t})=>e?"1 / -1":`span ${t}`};
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${I} 0.25s ease both;

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-column: span 1;
  }
`,l().div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  margin-bottom: 0;
  height: 20px;
`,l().div`
  --panel-accent: ${({accent:e})=>e??s.w4.colors.accent};
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: ${({minH:e})=>e}px;
  height: 100%;
  padding: ${s.w4.spacing.lg};
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  transition:
    border-color ${s.w4.transitions.base},
    box-shadow ${s.w4.transitions.base},
    transform ${s.w4.transitions.base};

  /* Left accent bar */
  &::before {
    content: '';
    position: absolute;
    top: 14px; bottom: 14px; left: 0;
    width: 2px;
    background: var(--panel-accent);
    border-radius: 0 2px 2px 0;
    opacity: 0.7;
  }

  /* Grip visual affordance left edge */
  &[data-grip='true']::after {
    content: '';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 24px;
    border-left: 2px dotted ${s.w4.colors.borderSubtle};
    border-right: 2px dotted ${s.w4.colors.borderSubtle};
    opacity: 0.4;
  }

  &:hover {
    border-color: ${s.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px ${s.w4.colors.shadow};
  }

  /* WidgetShell owns its chrome — zero ours to avoid double frame. */
  &:has(> [data-widget-shell]) {
    padding: 0;
    background: transparent;
    border-color: transparent;
  }
  &:has(> [data-widget-shell])::before,
  &:has(> [data-widget-shell])::after { display: none; }
  &:has(> [data-widget-shell]):hover {
    border-color: transparent;
    box-shadow: none;
    transform: none;
  }

  /* Controls visible on hover (pointer devices); always slightly visible on touch. */
  &:hover .panel-controls { opacity: 1; }

  @media (hover: none) {
    .panel-controls {
      opacity: 0.4;
      transform: scale(0.87);
      transform-origin: top right;
    }
  }
`,l().div`
  position: absolute;
  top: -14px;
  right: 6px;
  display: flex;
  align-items: center;
  gap: 2px;
  opacity: 0;
  transition: opacity ${s.w4.transitions.fast};
  z-index: 2;
`;let E=l().button`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  transition:
    color ${s.w4.transitions.fast},
    border-color ${s.w4.transitions.fast},
    background ${s.w4.transitions.fast};

  &:hover {
    color: ${s.w4.colors.mainText};
    border-color: ${s.w4.colors.mainTextMuted};
    background: ${s.w4.colors.surfaceRaised};
  }
`;l()(E)`
  &:hover {
    color: #f85149;
    border-color: rgba(248, 81, 73, 0.4);
  }
`;let P=(0,$.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;l().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${P} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${s.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${s.w4.colors.surface};
  }
`,l().span`
  display: block;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${s.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${s.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${s.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${s.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`;let Y=l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,W=l().div`
  background: ${s.w4.colors.sidebarBg};
  border: 1px solid ${s.w4.colors.sidebarBorder};
  border-radius: ${s.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,q=l().div`
  font-size: ${s.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
`,D=l().input`
  width: 100%;
  padding: 8px 12px;
  background: ${s.w4.colors.mainBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  color: ${s.w4.colors.mainText};
  font-size: ${s.w4.typography.fontSizeBase};
  font-family: ${s.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${s.w4.colors.accent}; }
  &::placeholder { color: ${s.w4.colors.sidebarTextMuted}; }
`,O=l().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,X=l().button`
  padding: 7px 18px;
  border-radius: ${s.w4.borderRadius.md};
  font-size: ${s.w4.typography.fontSizeBase};
  font-family: ${s.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:t})=>t?"rgba(248,81,73,0.12)":e?s.w4.colors.accent:"none"};
  color: ${({primary:e,danger:t})=>t?s.w4.colors.danger:e?"#fff":s.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:t})=>t?s.w4.colors.danger:e?s.w4.colors.accent:s.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,G=l().div`
  height: 1px;
  background: ${s.w4.colors.border};
  margin: 0 -4px;
`,K=l().div`
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
`;function N({onSave:e,onUpdate:t,onCancel:r,existingDoc:i}){let[n,l]=(0,a.useState)(i?.name??""),s=(0,a.useRef)(null);return(0,a.useEffect)(()=>{s.current?.focus(),i&&s.current?.select()},[i]),(0,o.jsx)(Y,{onClick:r,children:(0,o.jsxs)(W,{onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(q,{children:"Save document"}),i&&t&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(K,{children:"Update the current version or save as a new one."}),(0,o.jsxs)(O,{children:[(0,o.jsx)(X,{onClick:r,children:"Cancel"}),(0,o.jsxs)(X,{danger:!0,onClick:t,children:['Update "',i.name,'"']})]}),(0,o.jsx)(G,{})]}),(0,o.jsx)(D,{ref:s,value:n,onChange:e=>l(e.target.value),onKeyDown:o=>{"Enter"===o.key&&n.trim()&&(i&&n.trim()===i.name&&t?t():e(n.trim())),"Escape"===o.key&&r()},placeholder:i?"Or save as a new version…":"Give this version a name…",maxLength:80}),(0,o.jsxs)(O,{children:[!i&&(0,o.jsx)(X,{onClick:r,children:"Cancel"}),(0,o.jsx)(X,{primary:!0,disabled:!n.trim(),onClick:()=>e(n.trim()),children:"Save as new"})]})]})})}let U=(0,$.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Z=(0,$.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`;l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${s.w4.spacing.md};
  animation: ${U} 0.15s ease both;
`,l().div`
  background: ${s.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?s.w4.colors.danger+"55":s.w4.colors.sidebarBorder};
  border-radius: ${s.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${s.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${Z} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,l().div`
  font-size: ${s.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?s.w4.colors.danger:s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
`,l().div`
  font-size: ${s.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamily};
`,l().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${s.w4.spacing.sm};
`,l().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${s.w4.typography.fontSizeBase};
  font-family: ${s.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${s.w4.transitions.fast},
    border-color ${s.w4.transitions.fast},
    color ${s.w4.transitions.fast},
    opacity ${s.w4.transitions.fast};

  background: ${({primary:e,danger:t})=>t?s.w4.colors.danger:e?s.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:t})=>t||e?"#fff":s.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:t})=>t?s.w4.colors.danger:e?s.w4.colors.accent:s.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${s.w4.focusRing} }
`;let Q=(0,$.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,J=(0,$.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,ee=(0,$.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${s.w4.colors.mainBg};
  font-family: ${s.w4.typography.fontFamily};
  animation: ${Q} 0.4s ease 0.15s both;
`,l().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,l().div`
  position: absolute;
  inset: 0;
  animation: ${J} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${({delay:e})=>e}s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({size:e})=>e}px;
    height: ${({size:e})=>e}px;
    border-radius: 50%;
    background: ${({color:e})=>e};
    box-shadow: 0 0 8px ${({color:e})=>e}44;
  }
`,l().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${s.w4.colors.border};
  animation: ${ee} 1.4s ease-in-out infinite;
`,l().span`
  color: ${s.w4.colors.mainTextMuted};
  font-size: ${s.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`,l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${s.w4.spacing.sm};
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,l().div`
  position: relative;
`;let et="260px",er="56px",eo="48px",ea=l().header`
  display: flex;
  align-items: center;
  height: calc(${eo} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);

  /* Mobile: logo + app label on row 1, scrollable chrome cluster on row 2. */
  @media (max-width: ${s.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(${eo} + env(safe-area-inset-top, 0px));
  }
`,ei=l().div`
  width: ${er};
  min-width: ${er};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${s.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${s.w4.breakpoints.md}) {
    display: none;
  }
`,en=l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${s.w4.borderRadius.md};
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${s.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,el=(0,$.keyframes)`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,es=l().button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${s.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${s.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${s.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,ed=l().span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${el} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`
    background: linear-gradient(135deg, ${s.w4.colors.accent}, ${s.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`,ec=l().div`
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  padding-left: ${s.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 0;

  &::before {
    content: '/';
    margin-right: ${s.w4.spacing.sm};
    color: ${s.w4.colors.border};
  }
`,ep=l().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${s.w4.spacing.md};
  padding: 0 ${s.w4.spacing.lg};
  min-width: 0;

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${s.w4.spacing.sm};
  }

  /* Full-width second row on mobile, horizontally scrollable.
     Align to the right so the avatar / bell stay flush with the
     viewport edge — matches desktop end-alignment. */
  @media (max-width: ${s.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    justify-content: flex-end;
    padding: ${s.w4.spacing.xs} ${s.w4.spacing.sm};
    gap: ${s.w4.spacing.xs};
    border-top: 1px solid ${s.w4.colors.sidebarBorder};
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }

    > section + section,
    > *:not(section) + section {
      margin-left: 0;
    }
  }
`,eh=l().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,eg=l().div`
  display: flex;
  flex-direction: column;
  height: ${s.w4.sizes.fullHeight};
  background: ${s.w4.colors.mainBg};
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainText};
  overflow: hidden;
`,ex=l().aside`
  width: ${({collapsed:e})=>e?er:et};
  min-width: ${({collapsed:e})=>e?er:et};
  background: ${s.w4.colors.sidebarBg};
  border-right: 1px solid ${s.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${s.w4.breakpoints.md}) {
    display: none;
  }
`,ef=l().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,eu=l().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,em=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function eb(){return(0,o.jsx)(es,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:em.map((e,t)=>(0,o.jsx)(ed,{index:t,accent:e.accent,children:e.char},t))})}let ew="atlantis:sidebar-collapsed";function ey({sidebar:e,children:t,topBarRight:n,title:l="Atlantis",activeId:s=null}){let[d,c]=(0,a.useState)(()=>{try{return"true"===localStorage.getItem(ew)}catch{return!1}}),[p,h]=(0,a.useState)(null),g=(0,a.useRef)(),x=()=>c(e=>{let t=!e;try{localStorage.setItem(ew,String(t))}catch{}return t}),f=i().useMemo(()=>i().lazy(()=>Promise.resolve().then(r.bind(r,2787)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,o.jsx)(_.I.Provider,{value:{collapsed:d,toggle:x,flyout:p,openFlyout:(e,t,r)=>{clearTimeout(g.current),h({entry:e,anchorY:t,onSelect:r})},scheduleFlyoutClose:()=>{g.current=setTimeout(()=>h(null),160)},cancelFlyoutClose:()=>clearTimeout(g.current)},children:(0,o.jsxs)(eg,{children:[(0,o.jsxs)(ea,{children:[e&&(0,o.jsx)(ei,{children:(0,o.jsx)(en,{onClick:x,title:d?"Expand sidebar":"Collapse sidebar",children:(0,o.jsxs)("svg",{width:17,height:17,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),(0,o.jsx)("path",{d:"M9 3v18"})]})})}),(0,o.jsx)(eb,{}),l&&(0,o.jsx)(ec,{children:l}),n&&(0,o.jsx)(ep,{children:n})]}),(0,o.jsxs)(eh,{children:[null!=e&&(0,o.jsx)(ex,{collapsed:d,children:(0,o.jsx)(ef,{children:e})}),(0,o.jsx)(eu,{children:t})]}),p&&(0,o.jsx)(i().Suspense,{fallback:null,children:(0,o.jsx)(f,{activeId:s})})]})})}var e$=r(4971);let ev=l().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,eM=l().div`
  overflow: hidden;
`,ek=l().div`
  padding-left: ${s.w4.spacing.md};
`,ez=l().div`
  display: flex;
  flex-direction: column;
`,ej=l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${s.w4.spacing.sm} ${s.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":s.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${s.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${s.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${s.w4.colors.sidebarText};
    background: ${s.w4.colors.sidebarHover};
  }
`,eT=l().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,eF=l().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,eS=l().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${s.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,eL=l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${s.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?s.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?s.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?s.w4.colors.sidebarActive:s.w4.colors.sidebarText};
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${s.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${s.w4.borderRadius.md} ${s.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${s.w4.colors.mainText};
  }
`;function eH({iconKey:e,size:t=16}){let r=e?e$.X[e]:void 0;return r?(0,o.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,dangerouslySetInnerHTML:{__html:r}}):e?(0,o.jsx)("span",{style:{fontSize:t,lineHeight:1,display:"flex",alignItems:"center"},children:e}):(0,o.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:[(0,o.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,o.jsx)("polyline",{points:"14 2 14 8 20 8"})]})}function eC({entry:e,activeId:t,onSelect:r}){let[i,n]=(0,a.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:d,cancelFlyoutClose:c}=(0,_.c)();return e.children&&e.children.length>0?(0,o.jsxs)(ez,{children:[(0,o.jsxs)(ej,{collapsed:l,onClick:()=>{l||n(e=>!e)},onMouseEnter:l?t=>{s(e,t.currentTarget.getBoundingClientRect().top,r)}:void 0,onMouseLeave:l?d:void 0,children:[(0,o.jsxs)(eT,{collapsed:l,children:[(0,o.jsx)(eH,{iconKey:e.icon,size:16}),(0,o.jsx)(eF,{collapsed:l,children:e.name})]}),(0,o.jsx)(eS,{open:i,collapsed:l,children:(0,o.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M9 6l6 6-6 6"})})})]}),(0,o.jsx)(ev,{open:i&&!l,children:(0,o.jsx)(eM,{children:(0,o.jsx)(ek,{children:e.children.map(e=>(0,o.jsx)(eC,{entry:e,activeId:t,onSelect:r},e.id))})})})]}):(0,o.jsxs)(eL,{active:t===e.id,collapsed:l,onClick:()=>r(e),onMouseEnter:l?t=>{let o=t.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},o.top,r)}:void 0,onMouseLeave:l?d:void 0,children:[(0,o.jsx)(eH,{iconKey:e.icon,size:15}),(0,o.jsx)(eF,{collapsed:l,children:e.name})]})}function eR({entries:e,activeId:t,onSelect:r}){return(0,o.jsx)("div",{children:e.map(e=>(0,o.jsx)(eC,{entry:e,activeId:t,onSelect:r},e.id))})}r(2787),l().div`
  padding: ${s.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,l().section`
  scroll-margin-top: ${s.w4.spacing.lg};
`,l().div`
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.lg};
`,l().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${s.w4.spacing.xl};

  @media (max-width: ${s.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,l().div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${s.w4.colors.mainBg};
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainText};
  overflow: hidden;
`,l().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  padding-left: max(${s.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${s.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${s.w4.spacing.sm};
  z-index: 100;
`,l().button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${s.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${s.w4.colors.accent}; }
`,l().span`
  color: ${s.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,l().div`
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${s.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,l().span`
  font-weight: 400;
  color: ${s.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,l().div`
  flex: 1;
`}}]);