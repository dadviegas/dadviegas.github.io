"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([["1210"],{7777(e,o,a){a.d(o,{v:()=>Z});var t=a(5723),r=a(7991),n=a(6859),i=a.n(n),l=a(3930),s=a(8311);function d(e){return 0===e?{label:"Clear sky",emoji:"☀️"}:1===e?{label:"Mainly clear",emoji:"\uD83C\uDF24️"}:2===e?{label:"Partly cloudy",emoji:"⛅"}:3===e?{label:"Overcast",emoji:"☁️"}:e<=48?{label:"Fog",emoji:"\uD83C\uDF2B️"}:e<=55?{label:"Drizzle",emoji:"\uD83C\uDF26️"}:e<=65?{label:"Rain",emoji:"\uD83C\uDF27️"}:e<=75?{label:"Snow",emoji:"❄️"}:77===e?{label:"Snow grains",emoji:"\uD83C\uDF28️"}:e<=82?{label:"Rain showers",emoji:"\uD83C\uDF27️"}:e<=86?{label:"Snow showers",emoji:"\uD83C\uDF28️"}:{label:"Thunderstorm",emoji:"⛈️"}}let c="#58a6ff",p="#ff7b72",g="rgba(255,255,255,0.06)",f="#8b949e",m=[{threshold:0,color:"#3fb950"},{threshold:15,color:"#7ee787"},{threshold:25,color:"#d29922"},{threshold:38,color:"#f0883e"},{threshold:50,color:"#f85149"}],u=i().div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  flex-wrap: wrap;
`,x=i().div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 9px;
  color: ${f};
  font-family: monospace;
`,h=i().div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,b=[{label:"0–14",color:"#3fb950"},{label:"15–24",color:"#7ee787"},{label:"25–37",color:"#d29922"},{label:"38–49",color:"#f0883e"},{label:"50+",color:"#f85149"}];function y(e,o=.35){if(e.length<2)return"";let a=`M ${e[0].x.toFixed(2)} ${e[0].y.toFixed(2)}`;for(let t=0;t<e.length-1;t++){let r=e[Math.max(t-1,0)],n=e[t],i=e[t+1],l=e[Math.min(t+2,e.length-1)],s=n.x+(i.x-r.x)*o,d=n.y+(i.y-r.y)*o,c=i.x-(l.x-n.x)*o,p=i.y-(l.y-n.y)*o;a+=` C ${s.toFixed(2)} ${d.toFixed(2)} ${c.toFixed(2)} ${p.toFixed(2)} ${i.x.toFixed(2)} ${i.y.toFixed(2)}`}return a}function w({cx:e,cy:o,deg:a,size:r=7}){return(0,t.jsx)("g",{transform:`translate(${e},${o}) rotate(${a})`,children:(0,t.jsx)("polygon",{points:`0,${-r} ${.55*r},${.6*r} 0,${.2*r} ${-(.55*r)},${.6*r}`,fill:c,opacity:.85})})}function $({temps:e,feelsLike:o}){let a=228,r=52,n=[...e,...o],i=5*Math.floor(Math.min(...n)/5),l=5*Math.ceil(Math.max(...n)/5),s=l-i||1,d=e=>e.map((o,t)=>({x:32+t/(e.length-1)*a,y:14+r-(o-i)/s*r})),m=d(e),b=d(o),w=y(m),v=y(b),z=`${w} L ${m[m.length-1].x.toFixed(2)} ${(14+r).toFixed(2)} L ${m[0].x.toFixed(2)} ${(14+r).toFixed(2)} Z`,M=[0,6,12,18,23].map(o=>({label:23===o?"24h":`${o}h`,x:32+o/(e.length-1)*a})),k=[{label:`${l}\xb0`,y:14},{label:`${Math.round((l+i)/2)}\xb0`,y:14+r/2},{label:`${i}\xb0`,y:14+r}],A=m[Math.min(new Date().getHours(),m.length-1)];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("svg",{viewBox:"0 0 268 88",width:"100%",style:{display:"block",overflow:"visible"},children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"tempGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:c,stopOpacity:.25}),(0,t.jsx)("stop",{offset:"100%",stopColor:c,stopOpacity:0})]})}),k.map(({y:e})=>(0,t.jsx)("line",{x1:32,y1:e,x2:32+a,y2:e,stroke:g,strokeWidth:1},e)),(0,t.jsx)("path",{d:z,fill:"url(#tempGrad)"}),(0,t.jsx)("path",{d:v,fill:"none",stroke:p,strokeWidth:1,strokeDasharray:"3 4",opacity:.6}),(0,t.jsx)("path",{d:w,fill:"none",stroke:c,strokeWidth:1.5,strokeLinejoin:"round"}),(0,t.jsx)("circle",{cx:A.x,cy:A.y,r:3,fill:c}),M.map(({label:e,x:o})=>(0,t.jsx)("text",{x:o,y:84,textAnchor:"middle",fill:f,fontSize:9,fontFamily:"monospace",children:e},e)),k.map(({label:e,y:o})=>(0,t.jsx)("text",{x:28,y:o+3,textAnchor:"end",fill:f,fontSize:9,fontFamily:"monospace",children:e},e))]}),(0,t.jsxs)(u,{children:[(0,t.jsxs)(x,{children:[(0,t.jsx)(h,{color:c})," Actual"]}),(0,t.jsxs)(x,{style:{marginLeft:4},children:[(0,t.jsx)(h,{color:p,style:{opacity:.6}})," Feels like"]})]})]})}function v({speeds:e}){let o,a=232,r=52,n=5*Math.ceil(Math.max(...e,1)/5),i=e.map((o,t)=>({x:28+t/(e.length-1)*a,y:14+r-o/n*r})),l=y(i),s=`${l} L ${i[i.length-1].x.toFixed(2)} ${(14+r).toFixed(2)} L ${i[0].x.toFixed(2)} ${(14+r).toFixed(2)} Z`,d=[0,6,12,18,23].map(o=>({label:23===o?"24h":`${o}h`,x:28+o/(e.length-1)*a})),p=[{label:`${n}`,y:14},{label:`${Math.round(n/2)}`,y:14+r/2},{label:"0",y:14+r}];return(0,t.jsxs)("svg",{viewBox:"0 0 268 88",width:"100%",style:{display:"block",overflow:"visible"},children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"windGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:c,stopOpacity:.3}),(0,t.jsx)("stop",{offset:"100%",stopColor:c,stopOpacity:0})]})}),p.map(({y:e})=>(0,t.jsx)("line",{x1:28,y1:e,x2:28+a,y2:e,stroke:g,strokeWidth:1},e)),(0,t.jsx)("path",{d:s,fill:"url(#windGrad)"}),(0,t.jsx)("path",{d:l,fill:"none",stroke:c,strokeWidth:1.5,strokeLinejoin:"round"}),(o=i[Math.min(new Date().getHours(),i.length-1)],(0,t.jsx)("circle",{cx:o.x,cy:o.y,r:3,fill:c})),d.map(({label:e,x:o})=>(0,t.jsx)("text",{x:o,y:84,textAnchor:"middle",fill:f,fontSize:9,fontFamily:"monospace",children:e},e)),p.map(({label:e,y:o})=>(0,t.jsx)("text",{x:24,y:o+3,textAnchor:"end",fill:f,fontSize:9,fontFamily:"monospace",children:e},e))]})}function z({speeds:e,directions:o,dayLabels:a}){let r=e.length,n=5*Math.ceil(Math.max(...e,1)/5),i=252/r,l=.28*i;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("svg",{viewBox:"0 0 268 110",width:"100%",style:{display:"block",overflow:"visible"},children:[(0,t.jsx)("line",{x1:8,y1:90,x2:260,y2:90,stroke:g,strokeWidth:1}),e.map((e,r)=>{let s=e/n*60,d=8+r*i+l/2,c=i-l,p=d+c/2,g=function(e){let o=m[0].color;for(let a of m)if(e>=a.threshold)o=a.color;else break;return o}(e);return(0,t.jsxs)("g",{children:[(0,t.jsx)(w,{cx:p,cy:7,deg:o[r],size:6}),(0,t.jsx)("text",{x:p,y:23,textAnchor:"middle",fill:g,fontSize:8,fontWeight:"600",fontFamily:"monospace",children:Math.round(e)}),(0,t.jsx)("rect",{x:d,y:90-s,width:c,height:s,fill:g,opacity:.85,rx:2}),(0,t.jsx)("text",{x:p,y:106,textAnchor:"middle",fill:f,fontSize:9,fontFamily:"monospace",children:a[r]})]},r)}),(0,t.jsx)("text",{x:260,y:88,textAnchor:"end",fill:f,fontSize:8,fontFamily:"monospace",children:"km/h"})]}),(0,t.jsx)(u,{children:b.map(({label:e,color:o})=>(0,t.jsxs)(x,{children:[(0,t.jsx)(h,{color:o}),e]},e))})]})}let M=i().div`
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
`,k=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.md} ${l.w4.spacing.sm};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,A=i().h2`
  margin: 0;
  font-size: ${l.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,S=i().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,T=i().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
`,j=i().div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
`,F=i().span`
  font-size: 48px;
  line-height: 1;
`,B=i().div`
  font-size: 40px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamilyMono};
  line-height: 1;
`,C=i().div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 4px;
`,L=i().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,R=i().div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
`,E=i().div`
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
`,P=i().div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: 2px;
`,H=i().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 10px 10px 8px;
`,I=i().div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${f};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: 6px;
`,_=i().div`
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
`,G=i().span`font-size: 20px; width: 28px; text-align: center; flex-shrink: 0;`,V=i().div`flex: 1; min-width: 0;`,D=i().div`font-size: ${l.w4.typography.fontSizeSm}; font-weight: 500; color: ${l.w4.colors.mainText}; font-family: ${l.w4.typography.fontFamily};`,N=i().div`font-size: 11px; color: ${l.w4.colors.sidebarTextMuted}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`,K=i().div`display: flex; flex-direction: column; align-items: flex-end; gap: 1px; flex-shrink: 0;`,O=i().span`font-size: ${l.w4.typography.fontSizeSm}; font-weight: 600; color: ${l.w4.colors.mainText}; font-family: ${l.w4.typography.fontFamilyMono};`,Y=i().span`font-size: 11px; color: ${l.w4.colors.sidebarTextMuted}; font-family: ${l.w4.typography.fontFamilyMono};`,W=i().div`display: flex; align-items: center; gap: 2px; font-size: 11px; color: ${l.w4.colors.sidebarTextMuted}; font-family: ${l.w4.typography.fontFamilyMono}; flex-shrink: 0; width: 36px; justify-content: flex-end;`,U=i().div`
  padding: ${l.w4.spacing.lg};
  text-align: center;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  font-family: ${l.w4.typography.fontFamily};
`;function Z({place:e,onClose:o}){var a;let[n,i]=(0,r.useState)(null),[c,p]=(0,r.useState)(null),[g,f]=(0,r.useState)(!1),[m,u]=(0,r.useState)(null),[x,h]=(0,r.useState)(0);(0,r.useEffect)(()=>{if(!e){i(null),p(null);return}f(!0),u(null),i(null),p(null);let o=`https://api.open-meteo.com/v1/forecast?latitude=${e.lat}&longitude=${e.lng}&current_weather=true&hourly=temperature_2m,apparent_temperature,relativehumidity_2m,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=auto&forecast_days=7`,a=`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${e.lat}&longitude=${e.lng}&current=pm2_5,pm10,european_aqi,us_aqi`;Promise.all([fetch(o).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.json()}),fetch(a).then(e=>e.ok?e.json():null).catch(()=>null)]).then(([e,o])=>{i(e),p(o),f(!1)}).catch(e=>{u(e.message),f(!1)})},[e?.id,x]);let b=n?d(n.current_weather.weathercode):null,y=n?n.hourly.windspeed_10m.slice(0,24):[],w=n?n.hourly.temperature_2m.slice(0,24):[],q=n?n.hourly.apparent_temperature.slice(0,24):[],J=new Date().getHours(),X=n?n.hourly.relativehumidity_2m[J]:null,Q=n?n.hourly.apparent_temperature[J]:null,ee=c?(a=c.current.us_aqi)<=50?{label:"Good",color:"#3fb950"}:a<=100?{label:"Moderate",color:"#d29922"}:a<=150?{label:"Unhealthy (sensitive)",color:"#f0883e"}:a<=200?{label:"Unhealthy",color:"#f85149"}:{label:"Hazardous",color:"#b44ac0"}:null;return(0,t.jsxs)(M,{visible:!!e,children:[(0,t.jsxs)(k,{children:[(0,t.jsx)(A,{children:e?.name??""}),(0,t.jsx)(s.K0,{onClick:o,title:"Close",children:(0,t.jsx)(s.In,{name:"close",size:14})})]}),(0,t.jsxs)(S,{children:[g&&(0,t.jsx)(U,{children:"Loading weather…"}),m&&(0,t.jsxs)(U,{children:[(0,t.jsx)("div",{children:"Weather unavailable — the API may be temporarily down."}),(0,t.jsx)("button",{onClick:()=>h(e=>e+1),style:{marginTop:12,padding:"6px 16px",cursor:"pointer",background:"none",border:`1px solid ${l.w4.colors.border}`,borderRadius:6,color:l.w4.colors.mainText,fontFamily:"inherit",fontSize:12},children:"Retry"})]}),n&&b&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(T,{children:[(0,t.jsxs)(j,{children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)(B,{children:[Math.round(n.current_weather.temperature),"\xb0C"]}),(0,t.jsx)(C,{children:b.label})]}),(0,t.jsx)(F,{children:b.emoji})]}),(0,t.jsxs)(L,{children:[(0,t.jsxs)(R,{children:["\uD83D\uDCA8 ",Math.round(n.current_weather.windspeed)," km/h"]}),(0,t.jsxs)(R,{children:["\uD83C\uDF21 ",Math.round(n.daily.temperature_2m_max[0]),"\xb0 / ",Math.round(n.daily.temperature_2m_min[0]),"\xb0"]}),null!=Q&&(0,t.jsxs)(R,{children:["\uD83C\uDF2C Feels ",Math.round(Q),"\xb0"]}),null!=X&&(0,t.jsxs)(R,{children:["\uD83D\uDCA7 ",X,"% RH"]})]}),ee&&c&&(0,t.jsxs)(E,{color:ee.color,children:["\uD83C\uDFED AQI ",c.current.us_aqi," \xb7 ",ee.label]})]}),w.length>0&&(0,t.jsxs)("div",{children:[(0,t.jsx)(P,{children:"Temperature today (hourly)"}),(0,t.jsxs)(H,{children:[(0,t.jsx)(I,{children:"\xb0C \xb7 dot = current hour"}),(0,t.jsx)($,{temps:w,feelsLike:q})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(P,{children:"Wind today (hourly)"}),(0,t.jsxs)(H,{children:[(0,t.jsx)(I,{children:"Speed km/h \xb7 dot = current hour"}),(0,t.jsx)(v,{speeds:y})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(P,{children:"Wind this week (daily max)"}),(0,t.jsxs)(H,{children:[(0,t.jsx)(I,{children:"Max speed km/h \xb7 arrows = dominant direction"}),(0,t.jsx)(z,{speeds:n.daily.windspeed_10m_max,directions:n.daily.winddirection_10m_dominant,dayLabels:n.daily.time.map((e,o)=>0===o?"Today":new Date(e).toLocaleDateString("en-GB",{weekday:"short"}))})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(P,{children:"7-Day Forecast"}),n.daily.time.map((e,o)=>{let{emoji:a,label:r}=d(n.daily.weathercode[o]);return(0,t.jsxs)(_,{children:[(0,t.jsx)(G,{children:a}),(0,t.jsxs)(V,{children:[(0,t.jsx)(D,{children:0===o?"Today":1===o?"Tomorrow":new Date(e).toLocaleDateString("en-GB",{weekday:"short",month:"short",day:"numeric"})}),(0,t.jsx)(N,{children:r})]}),(0,t.jsx)(W,{children:n.daily.precipitation_sum[o]>0&&(0,t.jsxs)(t.Fragment,{children:["\uD83D\uDCA7 ",n.daily.precipitation_sum[o].toFixed(1)]})}),(0,t.jsxs)(K,{children:[(0,t.jsxs)(O,{children:[Math.round(n.daily.temperature_2m_max[o]),"\xb0"]}),(0,t.jsxs)(Y,{children:[Math.round(n.daily.temperature_2m_min[o]),"\xb0"]})]})]},e)})]})]})]})]})}},1112(e,o,a){a.d(o,{xy:()=>c});var t=a(7991);function r(e){return e*Math.PI/180}var n=a(8294);function i(e){return e<20?"#00e676":e<40?"#69ff47":e<60?"#b2ff59":e<80?"#ffea00":"#ff6d00"}function l(e){return null==e||e<1e3?"#8b949e":e<1e4?"#f0883e":e<25e3?"#d29922":"#58a6ff"}function s(e){let o=l(e.altFt),a=null!=e.altFt?`${Math.round(.3048*e.altFt).toLocaleString()} m`:"—",t=null!=e.speedKts?`${Math.round(1.852*e.speedKts)} km/h`:"—",r=null!=e.heading?`${Math.round(e.heading)}\xb0`:"—",n=null!=e.vrateFpm?`${e.vrateFpm>0?"↑":"↓"} ${Math.abs(Math.round(.00508*e.vrateFpm))} m/s`:"—";return`
    <div style="font-family:monospace;font-size:12px;line-height:1.75;min-width:180px;">
      <div style="font-weight:700;font-size:13px;margin-bottom:4px;color:${o}">
        ✈ ${e.callsign??e.icao24}${e.reg?` \xb7 ${e.reg}`:""}
      </div>
      ${e.type?`<div>🛩 ${e.type}</div>`:""}
      <div>📡 ${e.icao24}</div>
      <div>↑ Altitude: ${a}</div>
      <div>→ Speed: ${t}</div>
      <div>⬆ Heading: ${r}</div>
      <div>${n}</div>
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
    </div>`}let d=new Map([{id:"night",label:"\uD83C\uDF11 Night",title:"Day/night terminator",defaultEnabled:!1,component:function({map:e,enabled:o}){let a=(0,t.useRef)(null),n=(0,t.useRef)(),i=(0,t.useCallback)(()=>{clearInterval(n.current),a.current?.remove(),a.current=null},[]),l=(0,t.useCallback)(()=>{if(!e||!o)return;let t=function(e){let o,a,t,n,i,l,s,d=(t=r((280.46+.9856474*(a=(o=e.getTime()/864e5+2440587.5)-2451545))%360),n=r((357.528+.9856003*a)%360),i=t+r(1.915*Math.sin(n)+.02*Math.sin(2*n)),s=Math.atan2(Math.cos(l=r(23.439-4e-7*a))*Math.sin(i),Math.cos(i)),{ra:s,dec:Math.asin(Math.sin(l)*Math.sin(i)),gmst:r((280.46061837+360.98564736629*(o-2451545))%360)}),c=[];for(let e=-180;e<=180;e++){var p;let o=(p=r(e),Math.atan(-Math.cos(d.gmst+p-d.ra)/Math.tan(d.dec)));c.push([180*o/Math.PI,e])}let g=d.dec>0?-90:90;return c.push([g,180]),c.push([g,-180]),c}(new Date);a.current?a.current.setLatLngs(t):a.current=window.L.polygon(t,{color:"transparent",fillColor:"#000",fillOpacity:.3,interactive:!1}).addTo(e)},[e,o]);return(0,t.useEffect)(()=>e&&o?(l(),n.current=setInterval(l,3e4),i):void i(),[e,o,l,i]),null}},{id:"aurora",label:"\uD83C\uDF0C Aurora",title:"Aurora forecast — NOAA SWPC",defaultEnabled:!1,component:function({map:e,enabled:o}){let a=(0,t.useRef)([]),r=(0,t.useRef)(null),l=(0,t.useCallback)(()=>{a.current.forEach(e=>e.remove()),a.current=[],r.current&&(r.current.remove(),r.current=null)},[]),s=(0,t.useCallback)(async()=>{if(!e||!o)return;let[t,l]=await Promise.all([(0,n.fetchAuroraOvation)(),(0,n.fetchPlanetaryKIndex)()]);if(!t||!l||!e||!o)return;let s=l[l.length-1]?.kp_index??0,d=window.L;for(let[o,r,n]of(a.current.forEach(e=>e.remove()),a.current=[],t.coordinates)){if(n<5||45>Math.abs(r))continue;let t=d.circleMarker([r,o],{radius:3,color:i(n),fillColor:i(n),fillOpacity:Math.min(.85,.15+n/100*.7),weight:0,interactive:!1});t.addTo(e),a.current.push(t)}r.current&&r.current.remove();let c=s>=7?"#f85149":s>=5?"#f0883e":s>=3?"#d29922":"#3fb950";r.current=new(d.Control.extend({onAdd(){let e=d.DomUtil.create("div");return e.innerHTML=`
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
          </div>`,e},onRemove(){}}))({position:"bottomleft"}),r.current.addTo(e)},[e,o]);return(0,t.useEffect)(()=>{if(!o)return void l();s();let e=setInterval(s,3e5);return()=>{clearInterval(e),l()}},[o,s,l]),null}},{id:"iss",label:"\uD83D\uDEF8 ISS",title:"ISS live position + footprint",defaultEnabled:!1,component:function({map:e,enabled:o}){let a=(0,t.useRef)(null),r=(0,t.useRef)(null),i=(0,t.useRef)(null),l=(0,t.useRef)([]),s=(0,t.useCallback)(()=>{a.current?.remove(),a.current=null,r.current?.remove(),r.current=null,i.current?.remove(),i.current=null,l.current=[]},[]),d=(0,t.useCallback)(async()=>{if(!e||!o)return;let t=await (0,n.fetchIssPosition)();if(!t||!e||!o)return;let s=window.L,d=t.latitude,c=t.longitude,p=l.current;if(p.length>0){let[,e]=p[p.length-1];Math.abs(c-e)>180&&(l.current=[])}l.current=[...l.current,[d,c]].slice(-80);let g=`<div style="
        font-size:22px;
        filter:drop-shadow(0 0 8px rgba(255,210,0,.9));
        line-height:1;
      ">🛸</div>`,f=s.divIcon({html:g,className:"",iconSize:[24,24],iconAnchor:[12,12]}),m=`
        <div style="font-family:monospace;font-size:12px;line-height:1.75;min-width:165px;">
          <div style="font-weight:700;font-size:13px;color:#f0c040;margin-bottom:4px">🛸 ISS</div>
          <div>↑ ${Math.round(t.altitude).toLocaleString()} km altitude</div>
          <div>→ ${Math.round(t.velocity).toLocaleString()} km/h</div>
          <div>☀ ${t.visibility}</div>
          <div style="margin-top:4px;opacity:.7;font-size:11px">
            ${d.toFixed(3)}\xb0, ${c.toFixed(3)}\xb0
          </div>
          <div style="margin-top:4px;opacity:.55;font-size:10px;line-height:1.4;">
            Circle = visibility footprint<br>(~2 300 km radius)
          </div>
        </div>`;a.current?(a.current.setLatLng([d,c]),a.current.getPopup()?.setContent(m)):a.current=s.marker([d,c],{icon:f,zIndexOffset:2e3}).bindPopup(m,{maxWidth:220}).addTo(e),r.current?r.current.setLatLngs(l.current):r.current=s.polyline(l.current,{color:"#f0c040",weight:1.5,opacity:.55,dashArray:"3 7"}).addTo(e),i.current?i.current.setLatLng([d,c]):i.current=s.circle([d,c],{radius:2316e3,color:"#f0c040",fillColor:"#f0c040",fillOpacity:.04,weight:1,opacity:.25,dashArray:"5 8",interactive:!1}).addTo(e)},[e,o]);return(0,t.useEffect)(()=>{let e;if(!o)return void s();let a=!1,t=async()=>{await d(),a||(e=setTimeout(t,5e3))};return t(),()=>{a=!0,clearTimeout(e),s()}},[o,d,s]),null}},{id:"quakes",label:"\uD83C\uDF0D Quakes",title:"Earthquakes — USGS past month",defaultEnabled:!1,component:function({map:e,enabled:o}){let a=(0,t.useRef)(new Map),r=(0,t.useCallback)(()=>{a.current.forEach(e=>e.remove()),a.current.clear()},[]),i=(0,t.useCallback)(async()=>{if(!e||!o)return;let t=await (0,n.fetchUsgsQuakes)("all_month","seismic-world-all_month");if(!t?.features||!e||!o)return;let r=window.L,i=Date.now(),l=new Set;for(let o of t.features){let[t,n,s]=o.geometry.coordinates,{mag:d,place:c,time:p,type:g}=o.properties;if("earthquake"!==g||null==d||null==n||null==t)continue;l.add(o.id);let f=i-p,m=d<2?"#3fb950":d<3?"#7ee787":d<4?"#d29922":d<5?"#f0883e":d<6?"#f85149":"#ff4444",u=Math.min(40,Math.max(3,1.5*Math.pow(2,d-1)));if(a.current.has(o.id))continue;let x=r.circleMarker([n,t],{radius:u,color:m,fillColor:m,fillOpacity:Math.max(.25,.7-f/2592e6),weight:1});x.bindPopup(`
        <div style="font-family:monospace;font-size:12px;line-height:1.75;min-width:190px;">
          <div style="font-weight:700;font-size:13px;color:${m};margin-bottom:4px">
            M${d.toFixed(1)} Earthquake
          </div>
          <div>📍 ${c}</div>
          <div>🕐 ${function(e){let o=Math.round(e/36e5);return o<1?"<1 h ago":o<24?`${o} h ago`:`${Math.round(o/24)} d ago`}(f)}</div>
          <div>↓ Depth: ${Math.round(s)} km</div>
        </div>`,{maxWidth:250}),x.addTo(e),a.current.set(o.id,x)}a.current.forEach((e,o)=>{l.has(o)||(e.remove(),a.current.delete(o))})},[e,o]);return(0,t.useEffect)(()=>{if(!o)return void r();i();let e=setInterval(i,6e5);return()=>{clearInterval(e),r()}},[o,i,r]),null}},{id:"fires",label:"\uD83D\uDD25 Fires",title:"Active wildfires — NASA EONET",defaultEnabled:!1,component:function({map:e,enabled:o}){let a=(0,t.useRef)(new Map),r=(0,t.useCallback)(()=>{a.current.forEach(e=>e.remove()),a.current.clear()},[]),i=(0,t.useCallback)(async()=>{if(!e||!o)return;let t=await (0,n.fetchEonetEvents)({category:"wildfires",status:"open",limit:500});if(!t||!e||!o)return;let r=window.L,i=new Set;for(let o of t.events){var l;let t=o.geometry[o.geometry.length-1];if(!t||"Point"!==t.type)continue;let[n,s]=t.coordinates;if(i.add(o.id),a.current.has(o.id))continue;let d=(l=t.date,Date.now()-new Date(l).getTime()),c=Math.max(.4,1-d/2592e6),p=o.title.replace(/^Wildfire\s*[-–]\s*/i,""),g=r.divIcon({html:`<div style="
          font-size:16px;line-height:1;
          opacity:${c.toFixed(2)};
          filter:drop-shadow(0 0 5px rgba(255,90,0,.85));
          cursor:pointer;
        ">🔥</div>`,className:"",iconSize:[16,16],iconAnchor:[8,8]}),f=r.marker([s,n],{icon:g});f.bindPopup(`
        <div style="font-family:monospace;font-size:12px;line-height:1.75;min-width:185px;">
          <div style="font-weight:700;font-size:13px;color:#f85149;margin-bottom:4px">
            🔥 Wildfire
          </div>
          <div>📍 ${p}</div>
          <div>🕐 ${function(e){let o=Math.round(e/36e5);return o<1?"< 1 h ago":o<24?`${o} h ago`:`${Math.round(o/24)} d ago`}(d)}</div>
          <div style="margin-top:4px;opacity:.6;font-size:10px">
            ${s.toFixed(3)}\xb0, ${n.toFixed(3)}\xb0
          </div>
        </div>`,{maxWidth:240}),f.addTo(e),a.current.set(o.id,f)}a.current.forEach((e,o)=>{i.has(o)||(e.remove(),a.current.delete(o))})},[e,o]);return(0,t.useEffect)(()=>{if(!o)return void r();i();let e=setInterval(i,18e5);return()=>{clearInterval(e),r()}},[o,i,r]),null}},{id:"radar",label:"\uD83C\uDF27 Radar",title:"Weather radar — RainViewer",defaultEnabled:!1,component:function({map:e,enabled:o}){let a=(0,t.useRef)(null),r=(0,t.useCallback)(()=>{a.current?.remove(),a.current=null},[]),i=(0,t.useCallback)(async()=>{if(!e||!o)return;let t=await (0,n.fetchRainViewerManifest)();if(!t||!e||!o)return;let r=t.radar.past;if(!r?.length)return;let i=r[r.length-1],l=(0,n.rainViewerTileUrl)(t.host,i);a.current?.remove(),a.current=window.L.tileLayer(l,{opacity:.6,attribution:'<a href="https://www.rainviewer.com">RainViewer</a>'}).addTo(e)},[e,o]);return(0,t.useEffect)(()=>{if(!o)return void r();i();let e=setInterval(i,3e5);return()=>{clearInterval(e),r()}},[o,i,r]),null}},{id:"flights",label:"✈ Flights",title:"Live flight traffic — altitude-coded",defaultEnabled:!1,component:function({map:e,enabled:o,zoom:a}){let r=(0,t.useRef)(new Map),i=(0,t.useRef)(new Map),d=(0,t.useRef)(new Map),c=(0,t.useRef)(new Map),p=(0,t.useRef)(new Map),g=(0,t.useRef)(null),f=(0,t.useRef)(null);(0,t.useEffect)(()=>(window.__atlantisFlightFollow=e=>{f.current=f.current===e?null:e},()=>{delete window.__atlantisFlightFollow}),[]);let m=(0,t.useCallback)(()=>{r.current.forEach(e=>e.remove()),r.current.clear(),i.current.forEach(e=>e.remove()),i.current.clear(),d.current.forEach(e=>e.remove()),d.current.clear(),c.current.clear(),p.current.clear(),f.current=null},[]),u=(0,t.useCallback)(async()=>{let t,m,u,x,h,b;if(!e||!o||a<5)return;let y=e.getCenter(),w=(t=e.getBounds(),m=e.getCenter(),u=t.getNorthEast(),x=m.lat*Math.PI/180,h=u.lat*Math.PI/180,Math.min(Math.ceil(6880.13*Math.atan2(Math.sqrt(b=Math.sin((u.lat-m.lat)*Math.PI/180/2)**2+Math.cos(x)*Math.cos(h)*Math.sin((u.lng-m.lng)*Math.PI/180/2)**2),Math.sqrt(1-b))),250));g.current?.abort(),g.current=new AbortController;try{let a=await (0,n.fetchAdsbPoint)({lat:y.lat,lon:y.lng,radiusNm:w,signal:g.current.signal});if(!a||!e||!o)return;let t=window.L,m=Date.now();for(let o of a.ac??[]){let a=null==o.lat||null==o.lon?null:{icao24:o.hex,callsign:o.flight?.trim()||null,lat:o.lat,lon:o.lon,altFt:"number"==typeof o.alt_baro?o.alt_baro:null,speedKts:o.gs??null,heading:o.track??null,vrateFpm:o.baro_rate??null,reg:o.r??null,type:o.t??null};if(!a||null==a.altFt)continue;let n=a.heading??0,g=l(a.altFt),u=f.current===a.icao24,x=t.divIcon({html:function(e,o,a){let t=a?`filter:drop-shadow(0 0 5px ${o}) drop-shadow(0 0 10px ${o});`:"filter:drop-shadow(0 1px 3px rgba(0,0,0,.9));";return`<div style="
    width:22px;height:22px;
    display:flex;align-items:center;justify-content:center;
    transform:rotate(${e}deg);
    ${t}
    cursor:pointer;
    transition:transform .3s;
  ">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="${o}">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
    </svg>
  </div>`}(n,g,u),className:"",iconSize:[22,22],iconAnchor:[11,11]}),h=[...c.current.get(a.icao24)??[],[a.lat,a.lon]].slice(-15);c.current.set(a.icao24,h),p.current.set(a.icao24,m);let b=null!=a.speedKts&&null!=a.heading,y=b?1.852*a.speedKts*.5:0,[w,$]=b?function(e,o,a,t){let r=t/6371,n=e*Math.PI/180,i=a*Math.PI/180,l=Math.asin(Math.sin(n)*Math.cos(r)+Math.cos(n)*Math.sin(r)*Math.cos(i)),s=o*Math.PI/180+Math.atan2(Math.sin(i)*Math.sin(r)*Math.cos(n),Math.cos(r)-Math.sin(n)*Math.sin(l));return[180*l/Math.PI,180*s/Math.PI]}(a.lat,a.lon,a.heading,y):[a.lat,a.lon],v=r.current.get(a.icao24);if(v)v.setLatLng([a.lat,a.lon]),v.setIcon(x),v.getPopup()?.setContent(s(a)),i.current.get(a.icao24)?.setLatLngs([[a.lat,a.lon],[w,$]]),d.current.get(a.icao24)?.setLatLngs(h);else{let o=t.marker([a.lat,a.lon],{icon:x});if(o.bindPopup(s(a),{maxWidth:240}),o.addTo(e),r.current.set(a.icao24,o),b){let o=t.polyline([[a.lat,a.lon],[w,$]],{color:g,weight:1.5,opacity:.35,dashArray:"4 7",interactive:!1});o.addTo(e),i.current.set(a.icao24,o)}if(h.length>1){let o=t.polyline(h,{color:g,weight:1.5,opacity:.45,interactive:!1});o.addTo(e),d.current.set(a.icao24,o)}}}if(r.current.forEach((e,o)=>{let a=p.current.get(o)??0;m-a>5e4&&(e.remove(),r.current.delete(o),i.current.get(o)?.remove(),i.current.delete(o),d.current.get(o)?.remove(),d.current.delete(o),c.current.delete(o),p.current.delete(o),f.current===o&&(f.current=null))}),f.current){let o=r.current.get(f.current);o&&e.panTo(o.getLatLng(),{animate:!0,duration:.5})}}catch(e){if(e instanceof Error&&"AbortError"===e.name)return}},[e,o,a]);return(0,t.useEffect)(()=>{let e;if(!o||a<5)return void m();let t=!1,r=async()=>{await u(),t||(e=setTimeout(r,2e4))};return r(),()=>{t=!0,clearTimeout(e)}},[o,u,m]),(0,t.useEffect)(()=>{let a;if(!e||!o)return;let t=()=>{clearTimeout(a),a=setTimeout(u,1200)};return e.on("moveend",t),()=>{clearTimeout(a),e.off("moveend",t)}},[e,o,u]),null}},{id:"measure",label:"\uD83D\uDCCF Measure",title:"Click two points to measure great-circle distance",defaultEnabled:!1,component:function({map:e,enabled:o}){let a=(0,t.useRef)([]),r=(0,t.useRef)([]),n=(0,t.useRef)([]),i=(0,t.useRef)(null),l=(0,t.useCallback)(()=>{r.current.forEach(e=>e.remove()),r.current=[],n.current.forEach(e=>e.remove()),n.current=[],i.current?.remove(),i.current=null,a.current=[]},[]);return(0,t.useEffect)(()=>{if(!e||!o)return void l();let t=window.L,s=t.divIcon({html:`<div style="
        width:10px;height:10px;
        background:#58a6ff;
        border:2px solid #fff;
        border-radius:50%;
        box-shadow:0 0 6px rgba(88,166,255,.85);
      "></div>`,className:"",iconSize:[10,10],iconAnchor:[5,5]}),d=o=>{let{lat:d,lng:c}=o.latlng;a.current.length>=2&&l(),a.current=[...a.current,[d,c]];let p=t.marker([d,c],{icon:s,interactive:!1}).addTo(e);if(r.current.push(p),2===a.current.length){var g,f,m;let o,[r,l]=a.current,s=t.polyline([r,l],{color:"#58a6ff",weight:2,dashArray:"6 5",opacity:.85,interactive:!1}).addTo(e);n.current.push(s);let d=(g=r[0],f=r[1],12742*Math.atan2(Math.sqrt(o=Math.sin(((m=l[0])-g)*Math.PI/180/2)**2+Math.cos(g*Math.PI/180)*Math.cos(m*Math.PI/180)*Math.sin((l[1]-f)*Math.PI/180/2)**2),Math.sqrt(1-o))),c=(r[0]+l[0])/2,p=(r[1]+l[1])/2;i.current=t.popup({closeButton:!0,autoClose:!1,className:"",offset:[0,-4]}).setLatLng([c,p]).setContent(`
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
            </div>`).addTo(e)}};return e.on("click",d),e.getContainer().style.cursor="crosshair",()=>{e.off("click",d),e.getContainer().style.cursor="",l()}},[e,o,l]),null}}].map(e=>[e.id,e]));function c(){return Array.from(d.values())}},8859(e,o,a){a.d(o,{FlyoutPanel:()=>y});var t=a(5723),r=a(7991),n=a.n(r),i=a(6859),l=a.n(i),s=a(2799),d=a(1316),c=a(814),p=a(6140);let g=(0,s.keyframes)`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,f=l().div`
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
  animation: ${g} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
`,m=l().div`
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
`,u=l().button`
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
`,x=({size:e=14,strokeWidth:o=1.75})=>(0,t.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,t.jsx)("polyline",{points:"14 2 14 8 20 8"})]});function h({iconKey:e}){let o=e?p.t[e]:null;return o?(0,t.jsx)(o,{size:14,strokeWidth:1.75}):(0,t.jsx)(x,{})}function b({entries:e,activeId:o,onSelect:a}){return(0,t.jsx)(t.Fragment,{children:e.map(e=>e.children?(0,t.jsx)(n().Fragment,{children:(0,t.jsx)(b,{entries:e.children,activeId:o,onSelect:a})},e.id):(0,t.jsxs)(u,{active:o===e.id,onClick:()=>a(e),children:[(0,t.jsx)(h,{iconKey:e.icon}),e.name]},e.id))})}function y({activeId:e}){let{flyout:o,scheduleFlyoutClose:a,cancelFlyoutClose:r}=(0,c.c)();if(!o)return null;let n=o.entry.icon?p.t[o.entry.icon]:null;return(0,t.jsxs)(f,{anchorY:o.anchorY,onMouseEnter:r,onMouseLeave:a,children:[(0,t.jsxs)(m,{children:[n?(0,t.jsx)(n,{size:13,strokeWidth:2}):(0,t.jsx)(x,{size:13,strokeWidth:2}),o.entry.name]}),(0,t.jsx)(b,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),a()}})]})}},814(e,o,a){a.d(o,{I:()=>r,c:()=>n});var t=a(7991);let r=(0,t.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),n=()=>(0,t.useContext)(r)},6140(e,o,a){a.d(o,{t:()=>eb});var t=a(6896),r=a(7902),n=a(3013),i=a(2887),l=a(9510),s=a(9848),d=a(7901),c=a(3045),p=a(3775),g=a(1783),f=a(3539),m=a(9416),u=a(1837),x=a(7167),h=a(4494),b=a(2314),y=a(255),w=a(5751),$=a(9633),v=a(2946),z=a(822),M=a(6720),k=a(7400),A=a(8456),S=a(3317),T=a(2709),j=a(8006),F=a(9301),B=a(7561),C=a(3517),L=a(8207),R=a(7032),E=a(6949),P=a(8218),H=a(6829),I=a(9591),_=a(5553),G=a(9923),V=a(2820),D=a(4621),N=a(8479),K=a(2534),O=a(6673),Y=a(7490),W=a(9033),U=a(9038),Z=a(5775),q=a(1365),J=a(2937),X=a(9821),Q=a(5912),ee=a(158),eo=a(8641),ea=a(8607),et=a(3249),er=a(1821),en=a(5889),ei=a(9655),el=a(7170),es=a(9161),ed=a(1849),ec=a(1604),ep=a(3142),eg=a(1187),ef=a(7747),em=a(2932),eu=a(4525),ex=a(7230),eh=a(2164);let eb={activity:t.A,"a-large-small":r.A,apple:n.A,"arrow-right":i.A,"bar-chart-2":l.A,book:s.A,"book-open":d.A,briefcase:c.A,calendar:p.A,clock:g.A,"circle-dot":f.A,cloud:m.A,compass:u.A,cpu:x.A,droplets:h.A,feather:b.A,file:y.A,"file-text":w.A,folder:$.A,"git-branch":v.A,github:z.A,globe:M.A,grid:k.A,hand:A.A,hash:S.A,heart:T.A,key:j.A,hexagon:F.A,home:B.A,landmark:C.A,layers:L.A,"layout-grid":R.A,leaf:E.A,lightbulb:P.A,list:H.A,map:I.A,"map-pin":_.A,"message-circle":G.A,"message-square":V.A,minus:D.A,monitor:N.A,mountain:K.A,package:O.A,palette:Y.A,"pen-tool":W.A,"pie-chart":U.A,plane:Z.A,plus:q.A,ruler:J.A,shirt:X.A,slash:Q.A,square:ee.A,star:eo.A,sun:ea.A,terminal:et.A,thermometer:er.A,triangle:en.A,trophy:ei.A,truck:el.A,type:es.A,users:ed.A,"volume-2":ec.A,watch:ep.A,waves:eg.A,wind:ef.A,wrench:em.A,x:eu.A,zap:ex.A,bot:eh.A}},3930(e,o,a){a.d(o,{kd:()=>X.deleteDoc,u6:()=>Z,MJ:()=>el,rh:()=>Y,KL:()=>X.saveDoc,w3:()=>W,Iu:()=>X.listDocs,fy:()=>eg,PL:()=>X.getSetting,$L:()=>U,rz:()=>ec,CD:()=>N,qs:()=>J,mZ:()=>X.updateDoc,PE:()=>F,w4:()=>t.w4});var t=a(1316),r=a(5723),n=a(7991),i=a.n(n),l=a(6859),s=a.n(l);s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${t.w4.spacing.sm};
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,s().div`
  position: relative;
`;var d=a(2799),c=a(814);let p="260px",g="56px",f="48px",m=s().header`
  display: flex;
  align-items: center;
  height: calc(${f} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);

  /* Mobile: logo + app label on row 1, scrollable chrome cluster on row 2. */
  @media (max-width: ${t.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(${f} + env(safe-area-inset-top, 0px));
  }
`,u=s().div`
  width: ${g};
  min-width: ${g};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${t.w4.breakpoints.md}) {
    display: none;
  }
`,x=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,h=(0,d.keyframes)`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,b=s().button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${t.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,y=s().span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${h} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`
    background: linear-gradient(135deg, ${t.w4.colors.accent}, ${t.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`,w=s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  padding-left: ${t.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 0;

  &::before {
    content: '/';
    margin-right: ${t.w4.spacing.sm};
    color: ${t.w4.colors.border};
  }
`,$=s().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${t.w4.spacing.md};
  padding: 0 ${t.w4.spacing.lg};
  min-width: 0;

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${t.w4.spacing.sm};
  }

  /* Full-width second row on mobile, horizontally scrollable.
     Align to the right so the avatar / bell stay flush with the
     viewport edge — matches desktop end-alignment. */
  @media (max-width: ${t.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    justify-content: flex-end;
    padding: ${t.w4.spacing.xs} ${t.w4.spacing.sm};
    gap: ${t.w4.spacing.xs};
    border-top: 1px solid ${t.w4.colors.sidebarBorder};
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
`,v=s().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,z=s().div`
  display: flex;
  flex-direction: column;
  height: ${t.w4.sizes.fullHeight};
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,M=s().aside`
  width: ${({collapsed:e})=>e?g:p};
  min-width: ${({collapsed:e})=>e?g:p};
  background: ${t.w4.colors.sidebarBg};
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${t.w4.breakpoints.md}) {
    display: none;
  }
`,k=s().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,A=s().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,S=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function T(){return(0,r.jsx)(b,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:S.map((e,o)=>(0,r.jsx)(y,{index:o,accent:e.accent,children:e.char},o))})}let j="atlantis:sidebar-collapsed";function F({sidebar:e,children:o,topBarRight:t,title:l="Atlantis",activeId:s=null}){let[d,p]=(0,n.useState)(()=>{try{return"true"===localStorage.getItem(j)}catch{return!1}}),[g,f]=(0,n.useState)(null),h=(0,n.useRef)(),b=()=>p(e=>{let o=!e;try{localStorage.setItem(j,String(o))}catch{}return o}),y=i().useMemo(()=>i().lazy(()=>Promise.resolve().then(a.bind(a,8859)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(c.I.Provider,{value:{collapsed:d,toggle:b,flyout:g,openFlyout:(e,o,a)=>{clearTimeout(h.current),f({entry:e,anchorY:o,onSelect:a})},scheduleFlyoutClose:()=>{h.current=setTimeout(()=>f(null),160)},cancelFlyoutClose:()=>clearTimeout(h.current)},children:(0,r.jsxs)(z,{children:[(0,r.jsxs)(m,{children:[e&&(0,r.jsx)(u,{children:(0,r.jsx)(x,{onClick:b,title:d?"Expand sidebar":"Collapse sidebar",children:(0,r.jsxs)("svg",{width:17,height:17,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),(0,r.jsx)("path",{d:"M9 3v18"})]})})}),(0,r.jsx)(T,{}),l&&(0,r.jsx)(w,{children:l}),t&&(0,r.jsx)($,{children:t})]}),(0,r.jsxs)(v,{children:[null!=e&&(0,r.jsx)(M,{collapsed:d,children:(0,r.jsx)(k,{children:e})}),(0,r.jsx)(A,{children:o})]}),g&&(0,r.jsx)(i().Suspense,{fallback:null,children:(0,r.jsx)(y,{activeId:s})})]})})}var B=a(6140);let C=s().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,L=s().div`
  overflow: hidden;
`,R=s().div`
  padding-left: ${t.w4.spacing.md};
`,E=s().div`
  display: flex;
  flex-direction: column;
`,P=s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${t.w4.spacing.sm} ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":t.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${t.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${t.w4.colors.sidebarText};
    background: ${t.w4.colors.sidebarHover};
  }
`,H=s().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,I=s().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,_=s().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${t.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,G=s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?t.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?t.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?t.w4.colors.sidebarActive:t.w4.colors.sidebarText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${t.w4.borderRadius.md} ${t.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.mainText};
  }
`;function V({iconKey:e,size:o=16}){if(e&&!(e in B.t))return(0,r.jsx)("span",{style:{fontSize:o,lineHeight:1,display:"flex",alignItems:"center"},children:e});let a=e?B.t[e]:null;return a?(0,r.jsx)(a,{size:o,strokeWidth:1.75}):(0,r.jsxs)("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,r.jsx)("polyline",{points:"14 2 14 8 20 8"})]})}function D({entry:e,activeId:o,onSelect:a}){let[t,i]=(0,n.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:d,cancelFlyoutClose:p}=(0,c.c)();return e.children&&e.children.length>0?(0,r.jsxs)(E,{children:[(0,r.jsxs)(P,{collapsed:l,onClick:()=>{l||i(e=>!e)},onMouseEnter:l?o=>{s(e,o.currentTarget.getBoundingClientRect().top,a)}:void 0,onMouseLeave:l?d:void 0,children:[(0,r.jsxs)(H,{collapsed:l,children:[(0,r.jsx)(V,{iconKey:e.icon,size:16}),(0,r.jsx)(I,{collapsed:l,children:e.name})]}),(0,r.jsx)(_,{open:t,collapsed:l,children:(0,r.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:"M9 6l6 6-6 6"})})})]}),(0,r.jsx)(C,{open:t&&!l,children:(0,r.jsx)(L,{children:(0,r.jsx)(R,{children:e.children.map(e=>(0,r.jsx)(D,{entry:e,activeId:o,onSelect:a},e.id))})})})]}):(0,r.jsxs)(G,{active:o===e.id,collapsed:l,onClick:()=>a(e),onMouseEnter:l?o=>{let t=o.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},t.top,a)}:void 0,onMouseLeave:l?d:void 0,children:[(0,r.jsx)(V,{iconKey:e.icon,size:15}),(0,r.jsx)(I,{collapsed:l,children:e.name})]})}function N({entries:e,activeId:o,onSelect:a}){return(0,r.jsx)("div",{children:e.map(e=>(0,r.jsx)(D,{entry:e,activeId:o,onSelect:a},e.id))})}let K=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;s().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${K} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${t.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${t.w4.colors.surface};
  }
`,s().span`
  display: block;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${t.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${t.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${t.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${t.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,a(8859),s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  color: ${t.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.accent};
    border-color: ${t.w4.colors.accent};
  }

  &:active {
    transform: scale(0.92);
  }

  svg {
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &:hover svg {
    transform: rotate(15deg);
  }
`;let O=[{id:"europe",name:"Europe",icon:"\uD83C\uDF0D",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"lourinha",name:"Lourinh\xe3",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"\uD83C\uDDEC\uD83C\uDDE7",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"\uD83C\uDDEB\uD83C\uDDF7",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"\uD83C\uDDE9\uD83C\uDDEA",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"\uD83C\uDDEA\uD83C\uDDF8",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"\uD83C\uDDEE\uD83C\uDDF9",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"\uD83C\uDDF3\uD83C\uDDF1",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"\uD83C\uDDEC\uD83C\uDDF7",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"\uD83C\uDDE7\uD83C\uDDEA",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"\uD83C\uDDE6\uD83C\uDDF9",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"\uD83C\uDDF5\uD83C\uDDF1",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"\uD83C\uDDF8\uD83C\uDDEA",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"\uD83C\uDDF3\uD83C\uDDF4",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"\uD83C\uDDE9\uD83C\uDDF0",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"\uD83C\uDDEB\uD83C\uDDEE",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"\uD83C\uDDEE\uD83C\uDDF8",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"\uD83C\uDDEE\uD83C\uDDEA",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"\uD83C\uDDE8\uD83C\uDDED",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"\uD83C\uDDFA\uD83C\uDDE6",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"\uD83C\uDDF7\uD83C\uDDFA",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"\uD83C\uDDF7\uD83C\uDDF4",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"\uD83C\uDDED\uD83C\uDDFA",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"\uD83C\uDDE8\uD83C\uDDFF",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"\uD83C\uDDF8\uD83C\uDDF0",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"\uD83C\uDDF8\uD83C\uDDEE",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"\uD83C\uDDED\uD83C\uDDF7",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"\uD83C\uDDF7\uD83C\uDDF8",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"\uD83C\uDDE7\uD83C\uDDE6",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"\uD83C\uDDE7\uD83C\uDDEC",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"\uD83C\uDDEA\uD83C\uDDEA",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"\uD83C\uDDF1\uD83C\uDDFB",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"\uD83C\uDDF1\uD83C\uDDF9",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"\uD83C\uDDE7\uD83C\uDDFE",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"\uD83C\uDDF2\uD83C\uDDE9",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"\uD83C\uDDE6\uD83C\uDDF1",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"\uD83C\uDDF2\uD83C\uDDF0",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"\uD83C\uDDF2\uD83C\uDDEA",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"\uD83C\uDDE8\uD83C\uDDFE",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"\uD83C\uDDF2\uD83C\uDDF9",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"\uD83C\uDDF1\uD83C\uDDFA",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"\uD83C\uDDE6\uD83C\uDDE9",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"\uD83C\uDDF2\uD83C\uDDE8",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"\uD83C\uDDF8\uD83C\uDDF2",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"\uD83C\uDDF1\uD83C\uDDEE",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"\uD83C\uDDFB\uD83C\uDDE6",zoom:15}]},{id:"americas",name:"Americas",icon:"\uD83C\uDF0E",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"\uD83C\uDDE8\uD83C\uDDE6",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"\uD83C\uDDF2\uD83C\uDDFD",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"\uD83C\uDDE7\uD83C\uDDFF",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"\uD83C\uDDEC\uD83C\uDDF9",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"\uD83C\uDDF8\uD83C\uDDFB",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"\uD83C\uDDED\uD83C\uDDF3",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"\uD83C\uDDF3\uD83C\uDDEE",zoom:12},{id:"san-jose-cr",name:"San Jos\xe9",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"\uD83C\uDDE8\uD83C\uDDF7",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"\uD83C\uDDF5\uD83C\uDDE6",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"\uD83C\uDDE8\uD83C\uDDFA",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"\uD83C\uDDE7\uD83C\uDDF8",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"\uD83C\uDDEF\uD83C\uDDF2",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"\uD83C\uDDED\uD83C\uDDF9",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"\uD83C\uDDE9\uD83C\uDDF4",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"\uD83C\uDDF0\uD83C\uDDF3",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"\uD83C\uDDF1\uD83C\uDDE8",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"\uD83C\uDDFB\uD83C\uDDE8",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"\uD83C\uDDE7\uD83C\uDDE7",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"\uD83C\uDDE6\uD83C\uDDEC",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"\uD83C\uDDE9\uD83C\uDDF2",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"\uD83C\uDDEC\uD83C\uDDE9",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"\uD83C\uDDF9\uD83C\uDDF9",zoom:12},{id:"bogota",name:"Bogot\xe1",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"\uD83C\uDDE8\uD83C\uDDF4",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"\uD83C\uDDFB\uD83C\uDDEA",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"\uD83C\uDDEC\uD83C\uDDFE",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"\uD83C\uDDF8\uD83C\uDDF7",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"\uD83C\uDDEA\uD83C\uDDE8",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"\uD83C\uDDF5\uD83C\uDDEA",zoom:12},{id:"sao-paulo",name:"S\xe3o Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"\uD83C\uDDE7\uD83C\uDDF7",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"\uD83C\uDDE7\uD83C\uDDF4",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"\uD83C\uDDE8\uD83C\uDDF1",zoom:12},{id:"asuncion",name:"Asunci\xf3n",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"\uD83C\uDDF5\uD83C\uDDFE",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"\uD83C\uDDE6\uD83C\uDDF7",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"\uD83C\uDDFA\uD83C\uDDFE",zoom:12}]},{id:"africa",name:"Africa",icon:"\uD83C\uDF0D",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"\uD83C\uDDF2\uD83C\uDDE6",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"\uD83C\uDDE9\uD83C\uDDFF",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"\uD83C\uDDF9\uD83C\uDDF3",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"\uD83C\uDDF1\uD83C\uDDFE",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"\uD83C\uDDEA\uD83C\uDDEC",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"\uD83C\uDDF8\uD83C\uDDE9",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"\uD83C\uDDF8\uD83C\uDDF3",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"\uD83C\uDDEC\uD83C\uDDF2",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"\uD83C\uDDEC\uD83C\uDDFC",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"\uD83C\uDDEC\uD83C\uDDF3",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"\uD83C\uDDF8\uD83C\uDDF1",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"\uD83C\uDDF1\uD83C\uDDF7",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"\uD83C\uDDE8\uD83C\uDDEE",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"\uD83C\uDDEC\uD83C\uDDED",zoom:12},{id:"lome",name:"Lom\xe9",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"\uD83C\uDDF9\uD83C\uDDEC",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"\uD83C\uDDE7\uD83C\uDDEF",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"\uD83C\uDDF3\uD83C\uDDEC",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"\uD83C\uDDF3\uD83C\uDDEA",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"\uD83C\uDDF2\uD83C\uDDF1",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"\uD83C\uDDE7\uD83C\uDDEB",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"\uD83C\uDDF2\uD83C\uDDF7",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"\uD83C\uDDE8\uD83C\uDDFB",zoom:13},{id:"yaounde",name:"Yaound\xe9",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"\uD83C\uDDE8\uD83C\uDDF2",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"\uD83C\uDDF9\uD83C\uDDE9",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"\uD83C\uDDE8\uD83C\uDDEB",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"\uD83C\uDDEC\uD83C\uDDF6",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"\uD83C\uDDEC\uD83C\uDDE6",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"\uD83C\uDDE8\uD83C\uDDEC",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"\uD83C\uDDE8\uD83C\uDDE9",zoom:12},{id:"sao-tome",name:"S\xe3o Tom\xe9",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"\uD83C\uDDF8\uD83C\uDDF9",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"\uD83C\uDDF8\uD83C\uDDF8",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"\uD83C\uDDEA\uD83C\uDDF9",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"\uD83C\uDDEA\uD83C\uDDF7",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"\uD83C\uDDE9\uD83C\uDDEF",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"\uD83C\uDDF8\uD83C\uDDF4",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"\uD83C\uDDF0\uD83C\uDDEA",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"\uD83C\uDDFA\uD83C\uDDEC",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"\uD83C\uDDF7\uD83C\uDDFC",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"\uD83C\uDDE7\uD83C\uDDEE",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"\uD83C\uDDF9\uD83C\uDDFF",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"\uD83C\uDDF2\uD83C\uDDEC",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"\uD83C\uDDF0\uD83C\uDDF2",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"\uD83C\uDDF2\uD83C\uDDFA",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"\uD83C\uDDF8\uD83C\uDDE8",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"\uD83C\uDDE6\uD83C\uDDF4",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"\uD83C\uDDFF\uD83C\uDDF2",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"\uD83C\uDDF2\uD83C\uDDFC",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"\uD83C\uDDF2\uD83C\uDDFF",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"\uD83C\uDDFF\uD83C\uDDFC",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"\uD83C\uDDE7\uD83C\uDDFC",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"\uD83C\uDDF3\uD83C\uDDE6",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"\uD83C\uDDFF\uD83C\uDDE6",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"\uD83C\uDDF8\uD83C\uDDFF",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"\uD83C\uDDF1\uD83C\uDDF8",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"\uD83D\uDD4C",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"\uD83C\uDDF8\uD83C\uDDE6",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"\uD83C\uDDE6\uD83C\uDDEA",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"\uD83C\uDDF6\uD83C\uDDE6",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"\uD83C\uDDE7\uD83C\uDDED",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"\uD83C\uDDF0\uD83C\uDDFC",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"\uD83C\uDDF4\uD83C\uDDF2",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"\uD83C\uDDFE\uD83C\uDDEA",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"\uD83C\uDDEE\uD83C\uDDF6",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"\uD83C\uDDEE\uD83C\uDDF7",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"\uD83C\uDDF9\uD83C\uDDF7",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"\uD83C\uDDF1\uD83C\uDDE7",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"\uD83C\uDDF8\uD83C\uDDFE",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"\uD83C\uDDEF\uD83C\uDDF4",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"\uD83C\uDDEE\uD83C\uDDF1",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"\uD83C\uDDF5\uD83C\uDDF8",zoom:13}]},{id:"asia",name:"Asia",icon:"\uD83C\uDF0F",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"\uD83C\uDDE6\uD83C\uDDEB",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"\uD83C\uDDF0\uD83C\uDDFF",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"\uD83C\uDDF0\uD83C\uDDEC",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"\uD83C\uDDFA\uD83C\uDDFF",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"\uD83C\uDDF9\uD83C\uDDEF",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"\uD83C\uDDF9\uD83C\uDDF2",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"\uD83C\uDDE6\uD83C\uDDF2",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"\uD83C\uDDE6\uD83C\uDDFF",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"\uD83C\uDDEC\uD83C\uDDEA",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"\uD83C\uDDF5\uD83C\uDDF0",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"\uD83C\uDDF3\uD83C\uDDF5",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"\uD83C\uDDE7\uD83C\uDDE9",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"\uD83C\uDDF1\uD83C\uDDF0",zoom:12},{id:"male",name:"Mal\xe9",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"\uD83C\uDDF2\uD83C\uDDFB",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"\uD83C\uDDE8\uD83C\uDDF3",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"\uD83C\uDDEF\uD83C\uDDF5",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"\uD83C\uDDF0\uD83C\uDDF7",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"\uD83C\uDDF0\uD83C\uDDF5",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"\uD83C\uDDF2\uD83C\uDDF3",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"\uD83C\uDDF9\uD83C\uDDED",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"\uD83C\uDDFB\uD83C\uDDF3",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"\uD83C\uDDF0\uD83C\uDDED",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"\uD83C\uDDF1\uD83C\uDDE6",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"\uD83C\uDDF2\uD83C\uDDF2",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"\uD83C\uDDF2\uD83C\uDDFE",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"\uD83C\uDDF8\uD83C\uDDEC",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"\uD83C\uDDEE\uD83C\uDDE9",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"\uD83C\uDDF5\uD83C\uDDED",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"\uD83C\uDDE7\uD83C\uDDF3",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"\uD83C\uDDF9\uD83C\uDDF1",zoom:13}]},{id:"oceania",name:"Oceania",icon:"\uD83C\uDF0A",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"\uD83C\uDDE6\uD83C\uDDFA",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"\uD83C\uDDF3\uD83C\uDDFF",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"\uD83C\uDDF5\uD83C\uDDEC",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"\uD83C\uDDEB\uD83C\uDDEF",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"\uD83C\uDDF8\uD83C\uDDE7",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"\uD83C\uDDFB\uD83C\uDDFA",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"\uD83C\uDDF9\uD83C\uDDF4",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"\uD83C\uDDFC\uD83C\uDDF8",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"\uD83C\uDDF9\uD83C\uDDFB",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"\uD83C\uDDF0\uD83C\uDDEE",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"\uD83C\uDDF2\uD83C\uDDED",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"\uD83C\uDDEB\uD83C\uDDF2",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"\uD83C\uDDF5\uD83C\uDDFC",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"\uD83C\uDDF3\uD83C\uDDF7",zoom:14}]}],Y=O.flatMap(e=>e.places);function W(e,o){return e.toLocaleTimeString("en-GB",{timeZone:o,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}function U(e,o){return e.toLocaleDateString("en-GB",{timeZone:o,weekday:"short",day:"numeric",month:"short"})}function Z(e){return e.toLocaleTimeString("en-GB",{timeZone:"UTC",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}let q={AD:{name:"Andorra",flag:"\uD83C\uDDE6\uD83C\uDDE9"},AE:{name:"UAE",flag:"\uD83C\uDDE6\uD83C\uDDEA"},AF:{name:"Afghanistan",flag:"\uD83C\uDDE6\uD83C\uDDEB"},AG:{name:"Antigua & Barbuda",flag:"\uD83C\uDDE6\uD83C\uDDEC"},AL:{name:"Albania",flag:"\uD83C\uDDE6\uD83C\uDDF1"},AM:{name:"Armenia",flag:"\uD83C\uDDE6\uD83C\uDDF2"},AO:{name:"Angola",flag:"\uD83C\uDDE6\uD83C\uDDF4"},AR:{name:"Argentina",flag:"\uD83C\uDDE6\uD83C\uDDF7"},AT:{name:"Austria",flag:"\uD83C\uDDE6\uD83C\uDDF9"},AU:{name:"Australia",flag:"\uD83C\uDDE6\uD83C\uDDFA"},AZ:{name:"Azerbaijan",flag:"\uD83C\uDDE6\uD83C\uDDFF"},BA:{name:"Bosnia & Herzegovina",flag:"\uD83C\uDDE7\uD83C\uDDE6"},BB:{name:"Barbados",flag:"\uD83C\uDDE7\uD83C\uDDE7"},BD:{name:"Bangladesh",flag:"\uD83C\uDDE7\uD83C\uDDE9"},BE:{name:"Belgium",flag:"\uD83C\uDDE7\uD83C\uDDEA"},BF:{name:"Burkina Faso",flag:"\uD83C\uDDE7\uD83C\uDDEB"},BG:{name:"Bulgaria",flag:"\uD83C\uDDE7\uD83C\uDDEC"},BH:{name:"Bahrain",flag:"\uD83C\uDDE7\uD83C\uDDED"},BI:{name:"Burundi",flag:"\uD83C\uDDE7\uD83C\uDDEE"},BJ:{name:"Benin",flag:"\uD83C\uDDE7\uD83C\uDDEF"},BN:{name:"Brunei",flag:"\uD83C\uDDE7\uD83C\uDDF3"},BO:{name:"Bolivia",flag:"\uD83C\uDDE7\uD83C\uDDF4"},BR:{name:"Brazil",flag:"\uD83C\uDDE7\uD83C\uDDF7"},BS:{name:"Bahamas",flag:"\uD83C\uDDE7\uD83C\uDDF8"},BW:{name:"Botswana",flag:"\uD83C\uDDE7\uD83C\uDDFC"},BY:{name:"Belarus",flag:"\uD83C\uDDE7\uD83C\uDDFE"},BZ:{name:"Belize",flag:"\uD83C\uDDE7\uD83C\uDDFF"},CA:{name:"Canada",flag:"\uD83C\uDDE8\uD83C\uDDE6"},CD:{name:"DR Congo",flag:"\uD83C\uDDE8\uD83C\uDDE9"},CF:{name:"Central African Rep.",flag:"\uD83C\uDDE8\uD83C\uDDEB"},CG:{name:"Republic of Congo",flag:"\uD83C\uDDE8\uD83C\uDDEC"},CH:{name:"Switzerland",flag:"\uD83C\uDDE8\uD83C\uDDED"},CI:{name:"C\xf4te d'Ivoire",flag:"\uD83C\uDDE8\uD83C\uDDEE"},CL:{name:"Chile",flag:"\uD83C\uDDE8\uD83C\uDDF1"},CM:{name:"Cameroon",flag:"\uD83C\uDDE8\uD83C\uDDF2"},CN:{name:"China",flag:"\uD83C\uDDE8\uD83C\uDDF3"},CO:{name:"Colombia",flag:"\uD83C\uDDE8\uD83C\uDDF4"},CR:{name:"Costa Rica",flag:"\uD83C\uDDE8\uD83C\uDDF7"},CU:{name:"Cuba",flag:"\uD83C\uDDE8\uD83C\uDDFA"},CV:{name:"Cape Verde",flag:"\uD83C\uDDE8\uD83C\uDDFB"},CY:{name:"Cyprus",flag:"\uD83C\uDDE8\uD83C\uDDFE"},CZ:{name:"Czech Republic",flag:"\uD83C\uDDE8\uD83C\uDDFF"},DE:{name:"Germany",flag:"\uD83C\uDDE9\uD83C\uDDEA"},DJ:{name:"Djibouti",flag:"\uD83C\uDDE9\uD83C\uDDEF"},DK:{name:"Denmark",flag:"\uD83C\uDDE9\uD83C\uDDF0"},DM:{name:"Dominica",flag:"\uD83C\uDDE9\uD83C\uDDF2"},DO:{name:"Dominican Republic",flag:"\uD83C\uDDE9\uD83C\uDDF4"},DZ:{name:"Algeria",flag:"\uD83C\uDDE9\uD83C\uDDFF"},EC:{name:"Ecuador",flag:"\uD83C\uDDEA\uD83C\uDDE8"},EE:{name:"Estonia",flag:"\uD83C\uDDEA\uD83C\uDDEA"},EG:{name:"Egypt",flag:"\uD83C\uDDEA\uD83C\uDDEC"},ER:{name:"Eritrea",flag:"\uD83C\uDDEA\uD83C\uDDF7"},ES:{name:"Spain",flag:"\uD83C\uDDEA\uD83C\uDDF8"},ET:{name:"Ethiopia",flag:"\uD83C\uDDEA\uD83C\uDDF9"},FI:{name:"Finland",flag:"\uD83C\uDDEB\uD83C\uDDEE"},FJ:{name:"Fiji",flag:"\uD83C\uDDEB\uD83C\uDDEF"},FM:{name:"Micronesia",flag:"\uD83C\uDDEB\uD83C\uDDF2"},FR:{name:"France",flag:"\uD83C\uDDEB\uD83C\uDDF7"},GA:{name:"Gabon",flag:"\uD83C\uDDEC\uD83C\uDDE6"},GB:{name:"United Kingdom",flag:"\uD83C\uDDEC\uD83C\uDDE7"},GD:{name:"Grenada",flag:"\uD83C\uDDEC\uD83C\uDDE9"},GE:{name:"Georgia",flag:"\uD83C\uDDEC\uD83C\uDDEA"},GH:{name:"Ghana",flag:"\uD83C\uDDEC\uD83C\uDDED"},GM:{name:"Gambia",flag:"\uD83C\uDDEC\uD83C\uDDF2"},GN:{name:"Guinea",flag:"\uD83C\uDDEC\uD83C\uDDF3"},GQ:{name:"Equatorial Guinea",flag:"\uD83C\uDDEC\uD83C\uDDF6"},GR:{name:"Greece",flag:"\uD83C\uDDEC\uD83C\uDDF7"},GT:{name:"Guatemala",flag:"\uD83C\uDDEC\uD83C\uDDF9"},GW:{name:"Guinea-Bissau",flag:"\uD83C\uDDEC\uD83C\uDDFC"},GY:{name:"Guyana",flag:"\uD83C\uDDEC\uD83C\uDDFE"},HN:{name:"Honduras",flag:"\uD83C\uDDED\uD83C\uDDF3"},HR:{name:"Croatia",flag:"\uD83C\uDDED\uD83C\uDDF7"},HT:{name:"Haiti",flag:"\uD83C\uDDED\uD83C\uDDF9"},HU:{name:"Hungary",flag:"\uD83C\uDDED\uD83C\uDDFA"},ID:{name:"Indonesia",flag:"\uD83C\uDDEE\uD83C\uDDE9"},IE:{name:"Ireland",flag:"\uD83C\uDDEE\uD83C\uDDEA"},IL:{name:"Israel",flag:"\uD83C\uDDEE\uD83C\uDDF1"},IN:{name:"India",flag:"\uD83C\uDDEE\uD83C\uDDF3"},IQ:{name:"Iraq",flag:"\uD83C\uDDEE\uD83C\uDDF6"},IR:{name:"Iran",flag:"\uD83C\uDDEE\uD83C\uDDF7"},IS:{name:"Iceland",flag:"\uD83C\uDDEE\uD83C\uDDF8"},IT:{name:"Italy",flag:"\uD83C\uDDEE\uD83C\uDDF9"},JM:{name:"Jamaica",flag:"\uD83C\uDDEF\uD83C\uDDF2"},JO:{name:"Jordan",flag:"\uD83C\uDDEF\uD83C\uDDF4"},JP:{name:"Japan",flag:"\uD83C\uDDEF\uD83C\uDDF5"},KE:{name:"Kenya",flag:"\uD83C\uDDF0\uD83C\uDDEA"},KG:{name:"Kyrgyzstan",flag:"\uD83C\uDDF0\uD83C\uDDEC"},KH:{name:"Cambodia",flag:"\uD83C\uDDF0\uD83C\uDDED"},KI:{name:"Kiribati",flag:"\uD83C\uDDF0\uD83C\uDDEE"},KM:{name:"Comoros",flag:"\uD83C\uDDF0\uD83C\uDDF2"},KN:{name:"Saint Kitts & Nevis",flag:"\uD83C\uDDF0\uD83C\uDDF3"},KP:{name:"North Korea",flag:"\uD83C\uDDF0\uD83C\uDDF5"},KR:{name:"South Korea",flag:"\uD83C\uDDF0\uD83C\uDDF7"},KW:{name:"Kuwait",flag:"\uD83C\uDDF0\uD83C\uDDFC"},KZ:{name:"Kazakhstan",flag:"\uD83C\uDDF0\uD83C\uDDFF"},LA:{name:"Laos",flag:"\uD83C\uDDF1\uD83C\uDDE6"},LB:{name:"Lebanon",flag:"\uD83C\uDDF1\uD83C\uDDE7"},LC:{name:"Saint Lucia",flag:"\uD83C\uDDF1\uD83C\uDDE8"},LI:{name:"Liechtenstein",flag:"\uD83C\uDDF1\uD83C\uDDEE"},LK:{name:"Sri Lanka",flag:"\uD83C\uDDF1\uD83C\uDDF0"},LR:{name:"Liberia",flag:"\uD83C\uDDF1\uD83C\uDDF7"},LS:{name:"Lesotho",flag:"\uD83C\uDDF1\uD83C\uDDF8"},LT:{name:"Lithuania",flag:"\uD83C\uDDF1\uD83C\uDDF9"},LU:{name:"Luxembourg",flag:"\uD83C\uDDF1\uD83C\uDDFA"},LV:{name:"Latvia",flag:"\uD83C\uDDF1\uD83C\uDDFB"},LY:{name:"Libya",flag:"\uD83C\uDDF1\uD83C\uDDFE"},MA:{name:"Morocco",flag:"\uD83C\uDDF2\uD83C\uDDE6"},MC:{name:"Monaco",flag:"\uD83C\uDDF2\uD83C\uDDE8"},MD:{name:"Moldova",flag:"\uD83C\uDDF2\uD83C\uDDE9"},ME:{name:"Montenegro",flag:"\uD83C\uDDF2\uD83C\uDDEA"},MG:{name:"Madagascar",flag:"\uD83C\uDDF2\uD83C\uDDEC"},MH:{name:"Marshall Islands",flag:"\uD83C\uDDF2\uD83C\uDDED"},MK:{name:"North Macedonia",flag:"\uD83C\uDDF2\uD83C\uDDF0"},ML:{name:"Mali",flag:"\uD83C\uDDF2\uD83C\uDDF1"},MM:{name:"Myanmar",flag:"\uD83C\uDDF2\uD83C\uDDF2"},MN:{name:"Mongolia",flag:"\uD83C\uDDF2\uD83C\uDDF3"},MR:{name:"Mauritania",flag:"\uD83C\uDDF2\uD83C\uDDF7"},MT:{name:"Malta",flag:"\uD83C\uDDF2\uD83C\uDDF9"},MU:{name:"Mauritius",flag:"\uD83C\uDDF2\uD83C\uDDFA"},MV:{name:"Maldives",flag:"\uD83C\uDDF2\uD83C\uDDFB"},MW:{name:"Malawi",flag:"\uD83C\uDDF2\uD83C\uDDFC"},MX:{name:"Mexico",flag:"\uD83C\uDDF2\uD83C\uDDFD"},MY:{name:"Malaysia",flag:"\uD83C\uDDF2\uD83C\uDDFE"},MZ:{name:"Mozambique",flag:"\uD83C\uDDF2\uD83C\uDDFF"},NA:{name:"Namibia",flag:"\uD83C\uDDF3\uD83C\uDDE6"},NE:{name:"Niger",flag:"\uD83C\uDDF3\uD83C\uDDEA"},NG:{name:"Nigeria",flag:"\uD83C\uDDF3\uD83C\uDDEC"},NI:{name:"Nicaragua",flag:"\uD83C\uDDF3\uD83C\uDDEE"},NL:{name:"Netherlands",flag:"\uD83C\uDDF3\uD83C\uDDF1"},NO:{name:"Norway",flag:"\uD83C\uDDF3\uD83C\uDDF4"},NP:{name:"Nepal",flag:"\uD83C\uDDF3\uD83C\uDDF5"},NR:{name:"Nauru",flag:"\uD83C\uDDF3\uD83C\uDDF7"},NZ:{name:"New Zealand",flag:"\uD83C\uDDF3\uD83C\uDDFF"},OM:{name:"Oman",flag:"\uD83C\uDDF4\uD83C\uDDF2"},PA:{name:"Panama",flag:"\uD83C\uDDF5\uD83C\uDDE6"},PE:{name:"Peru",flag:"\uD83C\uDDF5\uD83C\uDDEA"},PG:{name:"Papua New Guinea",flag:"\uD83C\uDDF5\uD83C\uDDEC"},PH:{name:"Philippines",flag:"\uD83C\uDDF5\uD83C\uDDED"},PK:{name:"Pakistan",flag:"\uD83C\uDDF5\uD83C\uDDF0"},PL:{name:"Poland",flag:"\uD83C\uDDF5\uD83C\uDDF1"},PS:{name:"Palestine",flag:"\uD83C\uDDF5\uD83C\uDDF8"},PT:{name:"Portugal",flag:"\uD83C\uDDF5\uD83C\uDDF9"},PW:{name:"Palau",flag:"\uD83C\uDDF5\uD83C\uDDFC"},PY:{name:"Paraguay",flag:"\uD83C\uDDF5\uD83C\uDDFE"},QA:{name:"Qatar",flag:"\uD83C\uDDF6\uD83C\uDDE6"},RO:{name:"Romania",flag:"\uD83C\uDDF7\uD83C\uDDF4"},RS:{name:"Serbia",flag:"\uD83C\uDDF7\uD83C\uDDF8"},RU:{name:"Russia",flag:"\uD83C\uDDF7\uD83C\uDDFA"},RW:{name:"Rwanda",flag:"\uD83C\uDDF7\uD83C\uDDFC"},SA:{name:"Saudi Arabia",flag:"\uD83C\uDDF8\uD83C\uDDE6"},SB:{name:"Solomon Islands",flag:"\uD83C\uDDF8\uD83C\uDDE7"},SC:{name:"Seychelles",flag:"\uD83C\uDDF8\uD83C\uDDE8"},SD:{name:"Sudan",flag:"\uD83C\uDDF8\uD83C\uDDE9"},SE:{name:"Sweden",flag:"\uD83C\uDDF8\uD83C\uDDEA"},SG:{name:"Singapore",flag:"\uD83C\uDDF8\uD83C\uDDEC"},SI:{name:"Slovenia",flag:"\uD83C\uDDF8\uD83C\uDDEE"},SK:{name:"Slovakia",flag:"\uD83C\uDDF8\uD83C\uDDF0"},SL:{name:"Sierra Leone",flag:"\uD83C\uDDF8\uD83C\uDDF1"},SM:{name:"San Marino",flag:"\uD83C\uDDF8\uD83C\uDDF2"},SN:{name:"Senegal",flag:"\uD83C\uDDF8\uD83C\uDDF3"},SO:{name:"Somalia",flag:"\uD83C\uDDF8\uD83C\uDDF4"},SR:{name:"Suriname",flag:"\uD83C\uDDF8\uD83C\uDDF7"},SS:{name:"South Sudan",flag:"\uD83C\uDDF8\uD83C\uDDF8"},ST:{name:"S\xe3o Tom\xe9 & Pr\xedncipe",flag:"\uD83C\uDDF8\uD83C\uDDF9"},SV:{name:"El Salvador",flag:"\uD83C\uDDF8\uD83C\uDDFB"},SY:{name:"Syria",flag:"\uD83C\uDDF8\uD83C\uDDFE"},SZ:{name:"Eswatini",flag:"\uD83C\uDDF8\uD83C\uDDFF"},TD:{name:"Chad",flag:"\uD83C\uDDF9\uD83C\uDDE9"},TG:{name:"Togo",flag:"\uD83C\uDDF9\uD83C\uDDEC"},TH:{name:"Thailand",flag:"\uD83C\uDDF9\uD83C\uDDED"},TJ:{name:"Tajikistan",flag:"\uD83C\uDDF9\uD83C\uDDEF"},TL:{name:"Timor-Leste",flag:"\uD83C\uDDF9\uD83C\uDDF1"},TM:{name:"Turkmenistan",flag:"\uD83C\uDDF9\uD83C\uDDF2"},TN:{name:"Tunisia",flag:"\uD83C\uDDF9\uD83C\uDDF3"},TO:{name:"Tonga",flag:"\uD83C\uDDF9\uD83C\uDDF4"},TR:{name:"Turkey",flag:"\uD83C\uDDF9\uD83C\uDDF7"},TT:{name:"Trinidad & Tobago",flag:"\uD83C\uDDF9\uD83C\uDDF9"},TV:{name:"Tuvalu",flag:"\uD83C\uDDF9\uD83C\uDDFB"},TZ:{name:"Tanzania",flag:"\uD83C\uDDF9\uD83C\uDDFF"},UA:{name:"Ukraine",flag:"\uD83C\uDDFA\uD83C\uDDE6"},UG:{name:"Uganda",flag:"\uD83C\uDDFA\uD83C\uDDEC"},US:{name:"United States",flag:"\uD83C\uDDFA\uD83C\uDDF8"},UY:{name:"Uruguay",flag:"\uD83C\uDDFA\uD83C\uDDFE"},UZ:{name:"Uzbekistan",flag:"\uD83C\uDDFA\uD83C\uDDFF"},VA:{name:"Vatican City",flag:"\uD83C\uDDFB\uD83C\uDDE6"},VC:{name:"St Vincent & Gren.",flag:"\uD83C\uDDFB\uD83C\uDDE8"},VE:{name:"Venezuela",flag:"\uD83C\uDDFB\uD83C\uDDEA"},VN:{name:"Vietnam",flag:"\uD83C\uDDFB\uD83C\uDDF3"},VU:{name:"Vanuatu",flag:"\uD83C\uDDFB\uD83C\uDDFA"},WS:{name:"Samoa",flag:"\uD83C\uDDFC\uD83C\uDDF8"},YE:{name:"Yemen",flag:"\uD83C\uDDFE\uD83C\uDDEA"},ZA:{name:"South Africa",flag:"\uD83C\uDDFF\uD83C\uDDE6"},ZM:{name:"Zambia",flag:"\uD83C\uDDFF\uD83C\uDDF2"},ZW:{name:"Zimbabwe",flag:"\uD83C\uDDFF\uD83C\uDDFC"}};function J(e=[]){let o=[];if(e.length>0){let a=e.map(e=>Y.find(o=>o.id===e)).filter(e=>void 0!==e);o.push({id:"__recent__",name:"Recent",icon:"\uD83D\uDD50",defaultOpen:!0,children:a.map(e=>({id:e.id,name:e.name,icon:e.flag}))})}for(let e of O){let a=new Map;for(let o of e.places){let e=a.get(o.country)??[];e.push(o),a.set(o.country,e)}let t=[];for(let[e,o]of a){let a=q[e],r=a?.name??e,n=a?.flag??"";t.push({id:`country-${e}`,name:r,icon:n,defaultOpen:!1,children:o.map(e=>({id:e.id,name:e.name,icon:e.flag}))})}o.push({id:e.id,name:e.name,icon:e.icon,defaultOpen:!1,children:t})}return o}var X=a(1310);let Q=s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,ee=s().div`
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,eo=s().div`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,ea=s().input`
  width: 100%;
  padding: 8px 12px;
  background: ${t.w4.colors.mainBg};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${t.w4.colors.accent}; }
  &::placeholder { color: ${t.w4.colors.sidebarTextMuted}; }
`,et=s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,er=s().button`
  padding: 7px 18px;
  border-radius: ${t.w4.borderRadius.md};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:o})=>o?"rgba(248,81,73,0.12)":e?t.w4.colors.accent:"none"};
  color: ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?"#fff":t.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?t.w4.colors.accent:t.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,en=s().div`
  height: 1px;
  background: ${t.w4.colors.border};
  margin: 0 -4px;
`,ei=s().div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
`;function el({onSave:e,onUpdate:o,onCancel:a,existingDoc:t}){let[i,l]=(0,n.useState)(t?.name??""),s=(0,n.useRef)(null);return(0,n.useEffect)(()=>{s.current?.focus(),t&&s.current?.select()},[t]),(0,r.jsx)(Q,{onClick:a,children:(0,r.jsxs)(ee,{onClick:e=>e.stopPropagation(),children:[(0,r.jsx)(eo,{children:"Save document"}),t&&o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ei,{children:"Update the current version or save as a new one."}),(0,r.jsxs)(et,{children:[(0,r.jsx)(er,{onClick:a,children:"Cancel"}),(0,r.jsxs)(er,{danger:!0,onClick:o,children:['Update "',t.name,'"']})]}),(0,r.jsx)(en,{})]}),(0,r.jsx)(ea,{ref:s,value:i,onChange:e=>l(e.target.value),onKeyDown:r=>{"Enter"===r.key&&i.trim()&&(t&&i.trim()===t.name&&o?o():e(i.trim())),"Escape"===r.key&&a()},placeholder:t?"Or save as a new version…":"Give this version a name…",maxLength:80}),(0,r.jsxs)(et,{children:[!t&&(0,r.jsx)(er,{onClick:a,children:"Cancel"}),(0,r.jsx)(er,{primary:!0,disabled:!i.trim(),onClick:()=>e(i.trim()),children:"Save as new"})]})]})})}let es=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ed=(0,d.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`;function ec(e,o=8){let[a,t]=(0,n.useState)(()=>(function(e){try{return JSON.parse(localStorage.getItem(e)??"[]")}catch{return[]}})(e));return{recent:a,addRecent:(0,n.useCallback)(a=>{t(t=>{let r=[a,...t.filter(e=>e!==a)].slice(0,o);try{localStorage.setItem(e,JSON.stringify(r))}catch{}return r})},[e,o])}}function ep(){let e="u">typeof window?window.location.hash:"",o=e.indexOf("?");if(-1===o)return{};let a={};for(let t of e.slice(o+1).split("&")){if(!t)continue;let e=t.indexOf("=");-1===e?a[decodeURIComponent(t)]="":a[decodeURIComponent(t.slice(0,e))]=decodeURIComponent(t.slice(e+1))}return a}function eg(){let[e,o]=(0,n.useState)(ep);return(0,n.useEffect)(()=>{let e=()=>o(ep());return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),e}s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${t.w4.spacing.md};
  animation: ${es} 0.15s ease both;
`,s().div`
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?t.w4.colors.danger+"55":t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${t.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${ed} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,s().div`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?t.w4.colors.danger:t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamily};
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${t.w4.spacing.sm};
`,s().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${t.w4.transitions.fast},
    border-color ${t.w4.transitions.fast},
    color ${t.w4.transitions.fast},
    opacity ${t.w4.transitions.fast};

  background: ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?t.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:o})=>o||e?"#fff":t.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?t.w4.colors.accent:t.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${t.w4.focusRing} }
`,s().div`
  position: relative;
`,s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    border-color: ${t.w4.colors.accent};
  }
`,s().div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,s().div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,s().div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,s().div`
  padding: 16px 14px;
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  font-style: italic;
`,s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
  }
`,s().button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,s().div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  margin-top: 1px;
`,s().button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${t.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`,s().div`
  padding: ${t.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${t.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,s().section`
  scroll-margin-top: ${t.w4.spacing.lg};
`,s().div`
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.lg};
  padding: ${t.w4.spacing.lg};
`,s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${t.w4.spacing.xl};

  @media (max-width: ${t.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,s().div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,s().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  padding-left: max(${t.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${t.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${t.w4.spacing.sm};
  z-index: 100;
`,s().button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${t.w4.colors.accent}; }
`,s().span`
  color: ${t.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,s().span`
  font-weight: 400;
  color: ${t.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,s().div`
  flex: 1;
`;let ef=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,em=(0,d.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,eu=(0,d.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  animation: ${ef} 0.4s ease 0.15s both;
`,s().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,s().div`
  position: absolute;
  inset: 0;
  animation: ${em} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
`,s().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${t.w4.colors.border};
  animation: ${eu} 1.4s ease-in-out infinite;
`,s().span`
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`},1316(e,o,a){a.d(o,{w4:()=>n});let t={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},r="--at-",n={colors:function(){let e={};for(let o of Object.keys(t))e[o]=`var(${r}${o})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${r}suiteLab)`,vida:`var(${r}suiteVida)`,learn:`var(${r}suiteLearn)`,games:`var(${r}suiteGames)`,ent:`var(${r}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",xl:"0 40px 120px var(--at-shadowStrong), 0 8px 24px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:`
    outline: 2px solid var(--at-accent);
    outline-offset: 2px;
  `}},8311(e,o,a){a.d(o,{K0:()=>w,In:()=>M});var t=a(5723),r=a(7991),n=a.n(r),i=a(6859),l=a.n(i),s=a(3930);let d={ghost:"transparent",accent:"transparent",primary:s.w4.colors.accent,success:"#238636",danger:"#da3633"},c={ghost:s.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:s.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},p={ghost:s.w4.colors.border,accent:s.w4.colors.accent,primary:s.w4.colors.accent,success:"#238636",danger:"#da3633"},g={ghost:s.w4.colors.mainTextMuted,accent:s.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},f={ghost:s.w4.colors.mainText,accent:s.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},m={sm:"28px",md:"30px"},u={sm:"0 10px",md:"0 12px"},x={sm:"12px",md:"12px"};l().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>m[e]};
  padding: ${({size:e})=>u[e]};
  background: ${({variant:e})=>d[e]};
  border: 1px solid ${({variant:e})=>p[e]};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${({variant:e})=>g[e]};
  font-size: ${({size:e})=>x[e]};
  font-family: ${s.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>c[e]};
    color: ${({variant:e})=>f[e]};
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
`;let h={default:s.w4.colors.accent,danger:"#f85149"},b={default:s.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"},y=l().button`
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

  &:hover:not(:disabled) {
    color: ${({tone:e})=>h[e]};
    background: ${({tone:e})=>b[e]};
    border-color: ${({tone:e})=>h[e]};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,w=n().forwardRef(function({active:e=!1,shape:o="square",tone:a="default",children:r,...n},i){return(0,t.jsx)(y,{ref:i,active:e,shape:o,tone:a,...n,children:r})});l().div`
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
    ${({active:e,highlight:o})=>e||o?s.w4.colors.accent:"transparent"};
  color: ${({active:e,highlight:o})=>e||o?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: ${s.w4.transitions.fast};

  &:hover:not(:disabled) { color: ${s.w4.colors.mainText}; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${s.w4.focusRing} }
`,a(2727);var $=a(2799);let v=(0,$.keyframes)`
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
`,l().img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,l().div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${s.w4.colors.accentMuted};
  border: 1px solid ${s.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: ${s.w4.colors.accent};
  font-family: ${s.w4.typography.fontFamily};
  flex-shrink: 0;
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
  animation: ${v} 0.15s ease;
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
`,l().img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`,l().div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${s.w4.colors.accentMuted};
  border: 1px solid ${s.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: ${s.w4.colors.accent};
  font-family: ${s.w4.typography.fontFamily};
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
`;let z={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',"cloud-rain":'<path d="M16 14a5 5 0 1 0-9.8 2H6M8 19v2M12 17v4M16 19v2"/>',snowflake:'<path d="M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1M2 12h20M8 6l4 4 4-4M8 18l4-4 4 4"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"alert-triangle":'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',"check-circle":'<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>',"x-circle":'<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',"rotate-ccw":'<path d="M2 12a10 10 0 1 0 5-8.7L2 7M2 2v5h5"/>',"rotate-cw":'<path d="M22 12a10 10 0 1 1-5-8.7L22 7M22 2v5h-5"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"alert-circle":'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',"alert-octagon":'<path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"/><path d="M12 8v4M12 16h.01"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',columns:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',"eye-off":'<path d="M17.9 17.9A10.8 10.8 0 0 1 12 20c-7 0-11-8-11-8a19.6 19.6 0 0 1 5.1-6M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a19.6 19.6 0 0 1-2.2 3.2M6.6 6.6l10.8 10.8M14.1 14.1a3 3 0 1 1-4.2-4.2"/>',"file-plus":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M12 12v6M9 15h6"/>',gauge:'<path d="M12 14a2 2 0 1 0-2-2M12 2a10 10 0 1 0 10 10M12 14 7.5 16.5"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',"git-fork":'<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/>',"grip-vertical":'<circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',"image-plus":'<path d="M21 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21M19 2v6M22 5h-6"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',loader:'<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',"panel-left":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',"panel-left-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M16 15l-3-3 3-3"/>',"panel-left-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M14 9l3 3-3 3"/>',"panel-right-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M8 9l3 3-3 3"/>',"panel-right-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M10 15l-3-3 3-3"/>',pencil:'<path d="m12 20 9-9-4-4-9 9v4zM15 5l4 4"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M4.9 19.1a10 10 0 0 1 0-14.1M7.8 16.2a6 6 0 0 1 0-8.5M19.1 4.9a10 10 0 0 1 0 14.1M16.2 7.8a6 6 0 0 1 0 8.5"/>',"scatter-chart":'<circle cx="7.5" cy="7.5" r="0.8" fill="currentColor"/><circle cx="18" cy="5" r="0.8" fill="currentColor"/><circle cx="11" cy="11" r="0.8" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.8" fill="currentColor"/><circle cx="17" cy="14" r="0.8" fill="currentColor"/><path d="M3 3v18h18"/>',shield:'<path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"/>',"shield-off":'<path d="M19.7 14a7.7 7.7 0 0 0 .3-2V4l-8-2-3.4.9M4.7 4.7 4 5v7c0 6 8 10 8 10a13 13 0 0 0 5.2-3.5M2 2l20 20"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',"trending-down":'<path d="M22 17l-9.5-9.5-5 5L2 7"/><path d="M16 17h6v-6"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',"user-cog":'<circle cx="10" cy="8" r="4"/><path d="M10.2 14H8a4 4 0 0 0-4 4v2"/><circle cx="18" cy="15" r="3"/><path d="M18 10v1M18 19v1M22 12l-.8.5M14.8 17.5 14 18M22 18l-.8-.5M14.8 12.5 14 12"/>',volume:'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',wallet:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18M16 14h2"/>',receipt:'<path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21z"/><path d="M8 8h8M8 12h8M8 16h5"/>',"piggy-bank":'<path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/><path d="M19 9h2v4M14 7V5a2 2 0 0 0-4 0M16 11h.01M5 17v3M14 17v3"/>',banknote:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M5 9h.01M19 15h.01"/>',coins:'<circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/><path d="M9 6v6M7 9h4"/>',"line-chart":'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',"calendar-range":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 15h3M13 15h3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"refresh-ccw":'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',split:'<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 3 12 12 3 3"/><path d="M12 12v9"/>',"more-horizontal":'<circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>'};function M({name:e,size:o=18,strokeWidth:a=1.5,...r}){let n=z[e];return(0,t.jsx)("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!r["aria-label"]||void 0,...r,dangerouslySetInnerHTML:{__html:n}})}Object.keys(z),l().div`
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
`;let k=(0,$.keyframes)`
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
  animation: ${k} 0.18s ease both;

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
  padding: 0 10px 0 10px;
  background: transparent;
  border: 1px solid ${s.w4.colors.border};
  border-radius: 999px;
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  transition: background ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};
  white-space: nowrap;

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
    color: ${s.w4.colors.accent};
    border-color: ${s.w4.colors.accent};
    background: ${s.w4.colors.sidebarHover};
  }
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
`;let A=(0,$.keyframes)`
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
  animation: ${A} 0.4s ease both;
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
`;let S={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:s.w4.colors.accentMuted},T={neutral:s.w4.colors.mainTextMuted,live:s.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:s.w4.colors.accent};l().span`
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
  background: ${({tone:e})=>S[e]};
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
`;let j=(0,$.keyframes)`
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
  animation: ${j} 0.4s ease both;
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
`,a(5406),l().nav`padding: ${s.w4.spacing.sm} 0;`,l().div`
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
`,l().div`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.codeBorder};
  border-radius: ${s.w4.borderRadius.md};
  padding: ${s.w4.spacing.lg};
  margin: ${s.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  svg { max-width: 100%; }
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
`;let F=(0,$.keyframes)`
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
`;let B=l().button`
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
    animation: ${F} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;l()(B)`
  border-bottom: 1px solid ${s.w4.colors.border}80;
`,l()(B)``,l().span`
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
`;var C=a(1426);l().div`
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
`,C.A,C.A['pre[class*="language-"]'],s.w4.colors.codeBg,C.A['code[class*="language-"]'],l().div`
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
`;let L=(0,$.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,R=(0,$.keyframes)`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;l().div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${L} 0.15s ease;
`,l().div`
  width: 90%;
  max-width: 580px;
  max-height: 70vh;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px ${s.w4.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${R} 0.2s ease;
`,l().div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid ${s.w4.colors.border};
`,l().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeMd};
  &::placeholder { color: ${s.w4.colors.sidebarTextMuted}; }
`,l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${s.w4.colors.sidebarHover};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  font-size: 10px;
  font-family: ${s.w4.typography.fontFamilyMono};
  transition: color 0.15s, background 0.15s;
  &:hover { color: ${s.w4.colors.mainText}; background: ${s.w4.colors.border}; }
`,l().div`
  flex: 1;
  overflow-y: auto;
  padding: ${s.w4.spacing.sm} 0;
`,l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.sidebarTextMuted};
`,l().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,l().button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 10px 18px;
  background: ${({selected:e})=>e?s.w4.colors.accentMuted:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  &:hover { background: ${s.w4.colors.sidebarHover}; }
`,l().div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${s.w4.borderRadius.md};
  background: ${({selected:e})=>e?`${s.w4.colors.accent}20`:s.w4.colors.sidebarHover};
  color: ${({selected:e})=>e?s.w4.colors.accent:s.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  margin-top: 1px;
`,l().div`
  flex: 1;
  min-width: 0;
`,l().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 8px;
`,l().span`
  font-weight: 400;
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.sidebarTextMuted};
`,l().span`
  font-size: 11px;
  font-weight: 500;
  color: ${s.w4.colors.accent};
  background: ${s.w4.colors.accentMuted};
  padding: 1px 6px;
  border-radius: 10px;
  font-family: ${s.w4.typography.fontFamilyMono};
`,l().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin-top: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${s.w4.colors.accent}25;
    color: ${s.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,l().div`
  display: flex;
  align-items: center;
  color: ${({selected:e})=>e?s.w4.colors.accent:"transparent"};
  margin-top: 8px;
  transition: color 0.1s;
`,l().div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  border-top: 1px solid ${s.w4.colors.border};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
`,l().kbd`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background: ${s.w4.colors.sidebarHover};
  border: 1px solid ${s.w4.colors.border};
  border-radius: 3px;
  font-size: 10px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.sidebarTextMuted};
`,l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 18px;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  text-align: center;
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
`,l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${s.w4.colors.sidebarHover};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: ${s.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${s.w4.colors.accent}60;
    color: ${s.w4.colors.mainText};
    background: ${s.w4.colors.accentMuted};
  }

  kbd {
    font-size: 10px;
    padding: 1px 4px;
    background: ${s.w4.colors.surface};
    border: 1px solid ${s.w4.colors.border};
    border-radius: 3px;
    color: ${s.w4.colors.sidebarTextMuted};
  }

  @media (max-width: ${s.w4.breakpoints.md}) {
    padding: 5px 8px;
    span { display: none; }
    kbd { display: none; }
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
  padding: ${({collapsed:e})=>e?"8px 4px":`8px ${s.w4.spacing.md}`};
  border-bottom: 1px solid ${s.w4.colors.border}60;
`,l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${({collapsed:e})=>e?"8px 0":"6px 10px"};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  background: ${({focused:e})=>e?`${s.w4.colors.accent}10`:s.w4.colors.sidebarHover};
  border: 1px solid ${({focused:e})=>e?`${s.w4.colors.accent}40`:"transparent"};
  border-radius: ${s.w4.borderRadius.md};
  transition: background 0.15s, border-color 0.2s;
  cursor: ${({collapsed:e})=>e?"pointer":"text"};
`,l().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${s.w4.colors.sidebarText};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  min-width: 0;
  display: ${({collapsed:e})=>e?"none":"block"};
  &::placeholder { color: ${s.w4.colors.sidebarTextMuted}; }
`,l().button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  border-radius: ${s.w4.borderRadius.sm};
  transition: color 0.15s;
  &:hover { color: ${s.w4.colors.mainText}; }
`,l().div`
  max-height: 60vh;
  overflow-y: auto;
  padding: ${s.w4.spacing.sm} 0;
`,l().button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding: 8px ${s.w4.spacing.md};
  background: ${({active:e})=>e?s.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?s.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;
  &:hover { background: ${s.w4.colors.sidebarHover}; }
`,l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${s.w4.colors.sidebarText};
`,l().span`
  font-weight: 400;
  color: ${s.w4.colors.sidebarTextMuted};
  font-size: 11px;
`,l().div`
  font-family: ${s.w4.typography.fontFamily};
  font-size: 12px;
  color: ${s.w4.colors.sidebarTextMuted};
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${s.w4.colors.accent}30;
    color: ${s.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,l().div`
  padding: 12px ${s.w4.spacing.md};
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`,l().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,l().span`
  font-size: 11px;
  color: ${s.w4.colors.accent};
  font-weight: 600;
  margin-left: auto;
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
  & > :first-child { margin-top: 0; }

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
`,l().nav`
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
`,l().span`
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
`}}]);