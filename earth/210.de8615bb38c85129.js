"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([["210"],{7777(e,a,o){o.d(a,{v:()=>Z});var n=o(5723),t=o(7991),i=o(6859),r=o.n(i),l=o(3930);function s(e){return 0===e?{label:"Clear sky",emoji:"☀️"}:1===e?{label:"Mainly clear",emoji:"\uD83C\uDF24️"}:2===e?{label:"Partly cloudy",emoji:"⛅"}:3===e?{label:"Overcast",emoji:"☁️"}:e<=48?{label:"Fog",emoji:"\uD83C\uDF2B️"}:e<=55?{label:"Drizzle",emoji:"\uD83C\uDF26️"}:e<=65?{label:"Rain",emoji:"\uD83C\uDF27️"}:e<=75?{label:"Snow",emoji:"❄️"}:77===e?{label:"Snow grains",emoji:"\uD83C\uDF28️"}:e<=82?{label:"Rain showers",emoji:"\uD83C\uDF27️"}:e<=86?{label:"Snow showers",emoji:"\uD83C\uDF28️"}:{label:"Thunderstorm",emoji:"⛈️"}}let c="#58a6ff",d="#ff7b72",m="rgba(255,255,255,0.06)",g="#8b949e",u=[{threshold:0,color:"#3fb950"},{threshold:15,color:"#7ee787"},{threshold:25,color:"#d29922"},{threshold:38,color:"#f0883e"},{threshold:50,color:"#f85149"}],f=r().div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  flex-wrap: wrap;
`,p=r().div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 9px;
  color: ${g};
  font-family: monospace;
`,h=r().div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,y=[{label:"0–14",color:"#3fb950"},{label:"15–24",color:"#7ee787"},{label:"25–37",color:"#d29922"},{label:"38–49",color:"#f0883e"},{label:"50+",color:"#f85149"}];function x(e,a=.35){if(e.length<2)return"";let o=`M ${e[0].x.toFixed(2)} ${e[0].y.toFixed(2)}`;for(let n=0;n<e.length-1;n++){let t=e[Math.max(n-1,0)],i=e[n],r=e[n+1],l=e[Math.min(n+2,e.length-1)],s=i.x+(r.x-t.x)*a,c=i.y+(r.y-t.y)*a,d=r.x-(l.x-i.x)*a,m=r.y-(l.y-i.y)*a;o+=` C ${s.toFixed(2)} ${c.toFixed(2)} ${d.toFixed(2)} ${m.toFixed(2)} ${r.x.toFixed(2)} ${r.y.toFixed(2)}`}return o}function b({cx:e,cy:a,deg:o,size:t=7}){return(0,n.jsx)("g",{transform:`translate(${e},${a}) rotate(${o})`,children:(0,n.jsx)("polygon",{points:`0,${-t} ${.55*t},${.6*t} 0,${.2*t} ${-(.55*t)},${.6*t}`,fill:c,opacity:.85})})}function w({temps:e,feelsLike:a}){let o=228,t=52,i=[...e,...a],r=5*Math.floor(Math.min(...i)/5),l=5*Math.ceil(Math.max(...i)/5),s=l-r||1,u=e=>e.map((a,n)=>({x:32+n/(e.length-1)*o,y:14+t-(a-r)/s*t})),y=u(e),b=u(a),z=x(y),v=x(b),$=`${z} L ${y[y.length-1].x.toFixed(2)} ${(14+t).toFixed(2)} L ${y[0].x.toFixed(2)} ${(14+t).toFixed(2)} Z`,A=[0,6,12,18,23].map(a=>({label:23===a?"24h":`${a}h`,x:32+a/(e.length-1)*o})),k=[{label:`${l}\xb0`,y:14},{label:`${Math.round((l+r)/2)}\xb0`,y:14+t/2},{label:`${r}\xb0`,y:14+t}],M=y[Math.min(new Date().getHours(),y.length-1)];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("svg",{viewBox:"0 0 268 88",width:"100%",style:{display:"block",overflow:"visible"},children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"tempGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,n.jsx)("stop",{offset:"0%",stopColor:c,stopOpacity:.25}),(0,n.jsx)("stop",{offset:"100%",stopColor:c,stopOpacity:0})]})}),k.map(({y:e})=>(0,n.jsx)("line",{x1:32,y1:e,x2:32+o,y2:e,stroke:m,strokeWidth:1},e)),(0,n.jsx)("path",{d:$,fill:"url(#tempGrad)"}),(0,n.jsx)("path",{d:v,fill:"none",stroke:d,strokeWidth:1,strokeDasharray:"3 4",opacity:.6}),(0,n.jsx)("path",{d:z,fill:"none",stroke:c,strokeWidth:1.5,strokeLinejoin:"round"}),(0,n.jsx)("circle",{cx:M.x,cy:M.y,r:3,fill:c}),A.map(({label:e,x:a})=>(0,n.jsx)("text",{x:a,y:84,textAnchor:"middle",fill:g,fontSize:9,fontFamily:"monospace",children:e},e)),k.map(({label:e,y:a})=>(0,n.jsx)("text",{x:28,y:a+3,textAnchor:"end",fill:g,fontSize:9,fontFamily:"monospace",children:e},e))]}),(0,n.jsxs)(f,{children:[(0,n.jsxs)(p,{children:[(0,n.jsx)(h,{color:c})," Actual"]}),(0,n.jsxs)(p,{style:{marginLeft:4},children:[(0,n.jsx)(h,{color:d,style:{opacity:.6}})," Feels like"]})]})]})}function z({speeds:e}){let a,o=232,t=52,i=5*Math.ceil(Math.max(...e,1)/5),r=e.map((a,n)=>({x:28+n/(e.length-1)*o,y:14+t-a/i*t})),l=x(r),s=`${l} L ${r[r.length-1].x.toFixed(2)} ${(14+t).toFixed(2)} L ${r[0].x.toFixed(2)} ${(14+t).toFixed(2)} Z`,d=[0,6,12,18,23].map(a=>({label:23===a?"24h":`${a}h`,x:28+a/(e.length-1)*o})),u=[{label:`${i}`,y:14},{label:`${Math.round(i/2)}`,y:14+t/2},{label:"0",y:14+t}];return(0,n.jsxs)("svg",{viewBox:"0 0 268 88",width:"100%",style:{display:"block",overflow:"visible"},children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"windGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,n.jsx)("stop",{offset:"0%",stopColor:c,stopOpacity:.3}),(0,n.jsx)("stop",{offset:"100%",stopColor:c,stopOpacity:0})]})}),u.map(({y:e})=>(0,n.jsx)("line",{x1:28,y1:e,x2:28+o,y2:e,stroke:m,strokeWidth:1},e)),(0,n.jsx)("path",{d:s,fill:"url(#windGrad)"}),(0,n.jsx)("path",{d:l,fill:"none",stroke:c,strokeWidth:1.5,strokeLinejoin:"round"}),(a=r[Math.min(new Date().getHours(),r.length-1)],(0,n.jsx)("circle",{cx:a.x,cy:a.y,r:3,fill:c})),d.map(({label:e,x:a})=>(0,n.jsx)("text",{x:a,y:84,textAnchor:"middle",fill:g,fontSize:9,fontFamily:"monospace",children:e},e)),u.map(({label:e,y:a})=>(0,n.jsx)("text",{x:24,y:a+3,textAnchor:"end",fill:g,fontSize:9,fontFamily:"monospace",children:e},e))]})}function v({speeds:e,directions:a,dayLabels:o}){let t=e.length,i=5*Math.ceil(Math.max(...e,1)/5),r=252/t,l=.28*r;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("svg",{viewBox:"0 0 268 110",width:"100%",style:{display:"block",overflow:"visible"},children:[(0,n.jsx)("line",{x1:8,y1:90,x2:260,y2:90,stroke:m,strokeWidth:1}),e.map((e,t)=>{let s=e/i*60,c=8+t*r+l/2,d=r-l,m=c+d/2,f=function(e){let a=u[0].color;for(let o of u)if(e>=o.threshold)a=o.color;else break;return a}(e);return(0,n.jsxs)("g",{children:[(0,n.jsx)(b,{cx:m,cy:7,deg:a[t],size:6}),(0,n.jsx)("text",{x:m,y:23,textAnchor:"middle",fill:f,fontSize:8,fontWeight:"600",fontFamily:"monospace",children:Math.round(e)}),(0,n.jsx)("rect",{x:c,y:90-s,width:d,height:s,fill:f,opacity:.85,rx:2}),(0,n.jsx)("text",{x:m,y:106,textAnchor:"middle",fill:g,fontSize:9,fontFamily:"monospace",children:o[t]})]},t)}),(0,n.jsx)("text",{x:260,y:88,textAnchor:"end",fill:g,fontSize:8,fontFamily:"monospace",children:"km/h"})]}),(0,n.jsx)(f,{children:y.map(({label:e,color:a})=>(0,n.jsxs)(p,{children:[(0,n.jsx)(h,{color:a}),e]},e))})]})}let $=r().div`
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
`,A=r().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.md} ${l.w4.spacing.sm};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,k=r().h2`
  margin: 0;
  font-size: ${l.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,M=r().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: 16px;
  line-height: 1;
  transition: background ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};
  flex-shrink: 0;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.mainText};
  }
`,S=r().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,j=r().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
`,T=r().div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
`,B=r().span`
  font-size: 48px;
  line-height: 1;
`,C=r().div`
  font-size: 40px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamilyMono};
  line-height: 1;
`,E=r().div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 4px;
`,L=r().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,F=r().div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
`,P=r().div`
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
`,R=r().div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: 2px;
`,I=r().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 10px 10px 8px;
`,_=r().div`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${g};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: 6px;
`,G=r().div`
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
`,N=r().span`font-size: 20px; width: 28px; text-align: center; flex-shrink: 0;`,D=r().div`flex: 1; min-width: 0;`,K=r().div`font-size: ${l.w4.typography.fontSizeSm}; font-weight: 500; color: ${l.w4.colors.mainText}; font-family: ${l.w4.typography.fontFamily};`,H=r().div`font-size: 11px; color: ${l.w4.colors.sidebarTextMuted}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`,V=r().div`display: flex; flex-direction: column; align-items: flex-end; gap: 1px; flex-shrink: 0;`,O=r().span`font-size: ${l.w4.typography.fontSizeSm}; font-weight: 600; color: ${l.w4.colors.mainText}; font-family: ${l.w4.typography.fontFamilyMono};`,U=r().span`font-size: 11px; color: ${l.w4.colors.sidebarTextMuted}; font-family: ${l.w4.typography.fontFamilyMono};`,W=r().div`display: flex; align-items: center; gap: 2px; font-size: 10px; color: ${l.w4.colors.sidebarTextMuted}; font-family: ${l.w4.typography.fontFamilyMono}; flex-shrink: 0; width: 36px; justify-content: flex-end;`,Y=r().div`
  padding: ${l.w4.spacing.lg};
  text-align: center;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  font-family: ${l.w4.typography.fontFamily};
`;function Z({place:e,onClose:a}){var o;let[i,r]=(0,t.useState)(null),[c,d]=(0,t.useState)(null),[m,g]=(0,t.useState)(!1),[u,f]=(0,t.useState)(null),[p,h]=(0,t.useState)(0);(0,t.useEffect)(()=>{if(!e){r(null),d(null);return}g(!0),f(null),r(null),d(null);let a=`https://api.open-meteo.com/v1/forecast?latitude=${e.lat}&longitude=${e.lng}&current_weather=true&hourly=temperature_2m,apparent_temperature,relativehumidity_2m,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=auto&forecast_days=7`,o=`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${e.lat}&longitude=${e.lng}&current=pm2_5,pm10,european_aqi,us_aqi`;Promise.all([fetch(a).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.json()}),fetch(o).then(e=>e.ok?e.json():null).catch(()=>null)]).then(([e,a])=>{r(e),d(a),g(!1)}).catch(e=>{f(e.message),g(!1)})},[e?.id,p]);let y=i?s(i.current_weather.weathercode):null,x=i?i.hourly.windspeed_10m.slice(0,24):[],b=i?i.hourly.temperature_2m.slice(0,24):[],J=i?i.hourly.apparent_temperature.slice(0,24):[],q=new Date().getHours(),Q=i?i.hourly.relativehumidity_2m[q]:null,X=i?i.hourly.apparent_temperature[q]:null,ee=c?(o=c.current.us_aqi)<=50?{label:"Good",color:"#3fb950"}:o<=100?{label:"Moderate",color:"#d29922"}:o<=150?{label:"Unhealthy (sensitive)",color:"#f0883e"}:o<=200?{label:"Unhealthy",color:"#f85149"}:{label:"Hazardous",color:"#b44ac0"}:null;return(0,n.jsxs)($,{visible:!!e,children:[(0,n.jsxs)(A,{children:[(0,n.jsx)(k,{children:e?.name??""}),(0,n.jsx)(M,{onClick:a,title:"Close",children:"✕"})]}),(0,n.jsxs)(S,{children:[m&&(0,n.jsx)(Y,{children:"Loading weather…"}),u&&(0,n.jsxs)(Y,{children:[(0,n.jsx)("div",{children:"Weather unavailable — the API may be temporarily down."}),(0,n.jsx)("button",{onClick:()=>h(e=>e+1),style:{marginTop:12,padding:"6px 16px",cursor:"pointer",background:"none",border:`1px solid ${l.w4.colors.border}`,borderRadius:6,color:l.w4.colors.mainText,fontFamily:"inherit",fontSize:12},children:"Retry"})]}),i&&y&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(j,{children:[(0,n.jsxs)(T,{children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)(C,{children:[Math.round(i.current_weather.temperature),"\xb0C"]}),(0,n.jsx)(E,{children:y.label})]}),(0,n.jsx)(B,{children:y.emoji})]}),(0,n.jsxs)(L,{children:[(0,n.jsxs)(F,{children:["\uD83D\uDCA8 ",Math.round(i.current_weather.windspeed)," km/h"]}),(0,n.jsxs)(F,{children:["\uD83C\uDF21 ",Math.round(i.daily.temperature_2m_max[0]),"\xb0 / ",Math.round(i.daily.temperature_2m_min[0]),"\xb0"]}),null!=X&&(0,n.jsxs)(F,{children:["\uD83C\uDF2C Feels ",Math.round(X),"\xb0"]}),null!=Q&&(0,n.jsxs)(F,{children:["\uD83D\uDCA7 ",Q,"% RH"]})]}),ee&&c&&(0,n.jsxs)(P,{color:ee.color,children:["\uD83C\uDFED AQI ",c.current.us_aqi," \xb7 ",ee.label]})]}),b.length>0&&(0,n.jsxs)("div",{children:[(0,n.jsx)(R,{children:"Temperature today (hourly)"}),(0,n.jsxs)(I,{children:[(0,n.jsx)(_,{children:"\xb0C \xb7 dot = current hour"}),(0,n.jsx)(w,{temps:b,feelsLike:J})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(R,{children:"Wind today (hourly)"}),(0,n.jsxs)(I,{children:[(0,n.jsx)(_,{children:"Speed km/h \xb7 dot = current hour"}),(0,n.jsx)(z,{speeds:x})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(R,{children:"Wind this week (daily max)"}),(0,n.jsxs)(I,{children:[(0,n.jsx)(_,{children:"Max speed km/h \xb7 arrows = dominant direction"}),(0,n.jsx)(v,{speeds:i.daily.windspeed_10m_max,directions:i.daily.winddirection_10m_dominant,dayLabels:i.daily.time.map((e,a)=>0===a?"Today":new Date(e).toLocaleDateString("en-GB",{weekday:"short"}))})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(R,{children:"7-Day Forecast"}),i.daily.time.map((e,a)=>{let{emoji:o,label:t}=s(i.daily.weathercode[a]);return(0,n.jsxs)(G,{children:[(0,n.jsx)(N,{children:o}),(0,n.jsxs)(D,{children:[(0,n.jsx)(K,{children:0===a?"Today":1===a?"Tomorrow":new Date(e).toLocaleDateString("en-GB",{weekday:"short",month:"short",day:"numeric"})}),(0,n.jsx)(H,{children:t})]}),(0,n.jsx)(W,{children:i.daily.precipitation_sum[a]>0&&(0,n.jsxs)(n.Fragment,{children:["\uD83D\uDCA7 ",i.daily.precipitation_sum[a].toFixed(1)]})}),(0,n.jsxs)(V,{children:[(0,n.jsxs)(O,{children:[Math.round(i.daily.temperature_2m_max[a]),"\xb0"]}),(0,n.jsxs)(U,{children:[Math.round(i.daily.temperature_2m_min[a]),"\xb0"]})]})]},e)})]})]})]})]})}},1112(e,a,o){o.d(a,{xy:()=>d});var n=o(7991);function t(e){return e*Math.PI/180}var i=o(8294);function r(e){return e<20?"#00e676":e<40?"#69ff47":e<60?"#b2ff59":e<80?"#ffea00":"#ff6d00"}function l(e){return null==e||e<1e3?"#8b949e":e<1e4?"#f0883e":e<25e3?"#d29922":"#58a6ff"}function s(e){let a=l(e.altFt),o=null!=e.altFt?`${Math.round(.3048*e.altFt).toLocaleString()} m`:"—",n=null!=e.speedKts?`${Math.round(1.852*e.speedKts)} km/h`:"—",t=null!=e.heading?`${Math.round(e.heading)}\xb0`:"—",i=null!=e.vrateFpm?`${e.vrateFpm>0?"↑":"↓"} ${Math.abs(Math.round(.00508*e.vrateFpm))} m/s`:"—";return`
    <div style="font-family:monospace;font-size:12px;line-height:1.75;min-width:180px;">
      <div style="font-weight:700;font-size:13px;margin-bottom:4px;color:${a}">
        ✈ ${e.callsign??e.icao24}${e.reg?` \xb7 ${e.reg}`:""}
      </div>
      ${e.type?`<div>🛩 ${e.type}</div>`:""}
      <div>📡 ${e.icao24}</div>
      <div>↑ Altitude: ${o}</div>
      <div>→ Speed: ${n}</div>
      <div>⬆ Heading: ${t}</div>
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
    </div>`}let c=new Map([{id:"night",label:"\uD83C\uDF11 Night",title:"Day/night terminator",defaultEnabled:!1,component:function({map:e,enabled:a}){let o=(0,n.useRef)(null),i=(0,n.useRef)(),r=(0,n.useCallback)(()=>{clearInterval(i.current),o.current?.remove(),o.current=null},[]),l=(0,n.useCallback)(()=>{if(!e||!a)return;let n=function(e){let a,o,n,i,r,l,s,c=(n=t((280.46+.9856474*(o=(a=e.getTime()/864e5+2440587.5)-2451545))%360),i=t((357.528+.9856003*o)%360),r=n+t(1.915*Math.sin(i)+.02*Math.sin(2*i)),s=Math.atan2(Math.cos(l=t(23.439-4e-7*o))*Math.sin(r),Math.cos(r)),{ra:s,dec:Math.asin(Math.sin(l)*Math.sin(r)),gmst:t((280.46061837+360.98564736629*(a-2451545))%360)}),d=[];for(let e=-180;e<=180;e++){var m;let a=(m=t(e),Math.atan(-Math.cos(c.gmst+m-c.ra)/Math.tan(c.dec)));d.push([180*a/Math.PI,e])}let g=c.dec>0?-90:90;return d.push([g,180]),d.push([g,-180]),d}(new Date);o.current?o.current.setLatLngs(n):o.current=window.L.polygon(n,{color:"transparent",fillColor:"#000",fillOpacity:.3,interactive:!1}).addTo(e)},[e,a]);return(0,n.useEffect)(()=>e&&a?(l(),i.current=setInterval(l,3e4),r):void r(),[e,a,l,r]),null}},{id:"aurora",label:"\uD83C\uDF0C Aurora",title:"Aurora forecast — NOAA SWPC",defaultEnabled:!1,component:function({map:e,enabled:a}){let o=(0,n.useRef)([]),t=(0,n.useRef)(null),l=(0,n.useCallback)(()=>{o.current.forEach(e=>e.remove()),o.current=[],t.current&&(t.current.remove(),t.current=null)},[]),s=(0,n.useCallback)(async()=>{if(!e||!a)return;let[n,l]=await Promise.all([(0,i.fetchAuroraOvation)(),(0,i.fetchPlanetaryKIndex)()]);if(!n||!l||!e||!a)return;let s=l[l.length-1]?.kp_index??0,c=window.L;for(let[a,t,i]of(o.current.forEach(e=>e.remove()),o.current=[],n.coordinates)){if(i<5||45>Math.abs(t))continue;let n=c.circleMarker([t,a],{radius:3,color:r(i),fillColor:r(i),fillOpacity:Math.min(.85,.15+i/100*.7),weight:0,interactive:!1});n.addTo(e),o.current.push(n)}t.current&&t.current.remove();let d=s>=7?"#f85149":s>=5?"#f0883e":s>=3?"#d29922":"#3fb950";t.current=new(c.Control.extend({onAdd(){let e=c.DomUtil.create("div");return e.innerHTML=`
          <div style="
            background:rgba(13,17,23,.88);
            border:1px solid ${d};
            border-radius:6px;
            padding:5px 11px;
            font-family:monospace;
            font-size:12px;
            color:${d};
            backdrop-filter:blur(4px);
            line-height:1.5;
            user-select:none;
          ">
            🌌 Kp <strong>${s.toFixed(1)}</strong>
            <span style="opacity:.7;font-size:10px;margin-left:4px">${s>=8?"Extreme":s>=7?"Severe":s>=6?"Strong":s>=5?"Moderate":s>=4?"Active":s>=3?"Unsettled":"Quiet"}</span>
          </div>`,e},onRemove(){}}))({position:"bottomleft"}),t.current.addTo(e)},[e,a]);return(0,n.useEffect)(()=>{if(!a)return void l();s();let e=setInterval(s,3e5);return()=>{clearInterval(e),l()}},[a,s,l]),null}},{id:"iss",label:"\uD83D\uDEF8 ISS",title:"ISS live position + footprint",defaultEnabled:!1,component:function({map:e,enabled:a}){let o=(0,n.useRef)(null),t=(0,n.useRef)(null),r=(0,n.useRef)(null),l=(0,n.useRef)([]),s=(0,n.useCallback)(()=>{o.current?.remove(),o.current=null,t.current?.remove(),t.current=null,r.current?.remove(),r.current=null,l.current=[]},[]),c=(0,n.useCallback)(async()=>{if(!e||!a)return;let n=await (0,i.fetchIssPosition)();if(!n||!e||!a)return;let s=window.L,c=n.latitude,d=n.longitude,m=l.current;if(m.length>0){let[,e]=m[m.length-1];Math.abs(d-e)>180&&(l.current=[])}l.current=[...l.current,[c,d]].slice(-80);let g=`<div style="
        font-size:22px;
        filter:drop-shadow(0 0 8px rgba(255,210,0,.9));
        line-height:1;
      ">🛸</div>`,u=s.divIcon({html:g,className:"",iconSize:[24,24],iconAnchor:[12,12]}),f=`
        <div style="font-family:monospace;font-size:12px;line-height:1.75;min-width:165px;">
          <div style="font-weight:700;font-size:13px;color:#f0c040;margin-bottom:4px">🛸 ISS</div>
          <div>↑ ${Math.round(n.altitude).toLocaleString()} km altitude</div>
          <div>→ ${Math.round(n.velocity).toLocaleString()} km/h</div>
          <div>☀ ${n.visibility}</div>
          <div style="margin-top:4px;opacity:.7;font-size:11px">
            ${c.toFixed(3)}\xb0, ${d.toFixed(3)}\xb0
          </div>
          <div style="margin-top:4px;opacity:.55;font-size:10px;line-height:1.4;">
            Circle = visibility footprint<br>(~2 300 km radius)
          </div>
        </div>`;o.current?(o.current.setLatLng([c,d]),o.current.getPopup()?.setContent(f)):o.current=s.marker([c,d],{icon:u,zIndexOffset:2e3}).bindPopup(f,{maxWidth:220}).addTo(e),t.current?t.current.setLatLngs(l.current):t.current=s.polyline(l.current,{color:"#f0c040",weight:1.5,opacity:.55,dashArray:"3 7"}).addTo(e),r.current?r.current.setLatLng([c,d]):r.current=s.circle([c,d],{radius:2316e3,color:"#f0c040",fillColor:"#f0c040",fillOpacity:.04,weight:1,opacity:.25,dashArray:"5 8",interactive:!1}).addTo(e)},[e,a]);return(0,n.useEffect)(()=>{let e;if(!a)return void s();let o=!1,n=async()=>{await c(),o||(e=setTimeout(n,5e3))};return n(),()=>{o=!0,clearTimeout(e),s()}},[a,c,s]),null}},{id:"quakes",label:"\uD83C\uDF0D Quakes",title:"Earthquakes — USGS past month",defaultEnabled:!1,component:function({map:e,enabled:a}){let o=(0,n.useRef)(new Map),t=(0,n.useCallback)(()=>{o.current.forEach(e=>e.remove()),o.current.clear()},[]),r=(0,n.useCallback)(async()=>{if(!e||!a)return;let n=await (0,i.fetchUsgsQuakes)("all_month","seismic-world-all_month");if(!n?.features||!e||!a)return;let t=window.L,r=Date.now(),l=new Set;for(let a of n.features){let[n,i,s]=a.geometry.coordinates,{mag:c,place:d,time:m,type:g}=a.properties;if("earthquake"!==g||null==c||null==i||null==n)continue;l.add(a.id);let u=r-m,f=c<2?"#3fb950":c<3?"#7ee787":c<4?"#d29922":c<5?"#f0883e":c<6?"#f85149":"#ff4444",p=Math.min(40,Math.max(3,1.5*Math.pow(2,c-1)));if(o.current.has(a.id))continue;let h=t.circleMarker([i,n],{radius:p,color:f,fillColor:f,fillOpacity:Math.max(.25,.7-u/2592e6),weight:1});h.bindPopup(`
        <div style="font-family:monospace;font-size:12px;line-height:1.75;min-width:190px;">
          <div style="font-weight:700;font-size:13px;color:${f};margin-bottom:4px">
            M${c.toFixed(1)} Earthquake
          </div>
          <div>📍 ${d}</div>
          <div>🕐 ${function(e){let a=Math.round(e/36e5);return a<1?"<1 h ago":a<24?`${a} h ago`:`${Math.round(a/24)} d ago`}(u)}</div>
          <div>↓ Depth: ${Math.round(s)} km</div>
        </div>`,{maxWidth:250}),h.addTo(e),o.current.set(a.id,h)}o.current.forEach((e,a)=>{l.has(a)||(e.remove(),o.current.delete(a))})},[e,a]);return(0,n.useEffect)(()=>{if(!a)return void t();r();let e=setInterval(r,6e5);return()=>{clearInterval(e),t()}},[a,r,t]),null}},{id:"fires",label:"\uD83D\uDD25 Fires",title:"Active wildfires — NASA EONET",defaultEnabled:!1,component:function({map:e,enabled:a}){let o=(0,n.useRef)(new Map),t=(0,n.useCallback)(()=>{o.current.forEach(e=>e.remove()),o.current.clear()},[]),r=(0,n.useCallback)(async()=>{if(!e||!a)return;let n=await (0,i.fetchEonetEvents)({category:"wildfires",status:"open",limit:500});if(!n||!e||!a)return;let t=window.L,r=new Set;for(let a of n.events){var l;let n=a.geometry[a.geometry.length-1];if(!n||"Point"!==n.type)continue;let[i,s]=n.coordinates;if(r.add(a.id),o.current.has(a.id))continue;let c=(l=n.date,Date.now()-new Date(l).getTime()),d=Math.max(.4,1-c/2592e6),m=a.title.replace(/^Wildfire\s*[-–]\s*/i,""),g=t.divIcon({html:`<div style="
          font-size:16px;line-height:1;
          opacity:${d.toFixed(2)};
          filter:drop-shadow(0 0 5px rgba(255,90,0,.85));
          cursor:pointer;
        ">🔥</div>`,className:"",iconSize:[16,16],iconAnchor:[8,8]}),u=t.marker([s,i],{icon:g});u.bindPopup(`
        <div style="font-family:monospace;font-size:12px;line-height:1.75;min-width:185px;">
          <div style="font-weight:700;font-size:13px;color:#f85149;margin-bottom:4px">
            🔥 Wildfire
          </div>
          <div>📍 ${m}</div>
          <div>🕐 ${function(e){let a=Math.round(e/36e5);return a<1?"< 1 h ago":a<24?`${a} h ago`:`${Math.round(a/24)} d ago`}(c)}</div>
          <div style="margin-top:4px;opacity:.6;font-size:10px">
            ${s.toFixed(3)}\xb0, ${i.toFixed(3)}\xb0
          </div>
        </div>`,{maxWidth:240}),u.addTo(e),o.current.set(a.id,u)}o.current.forEach((e,a)=>{r.has(a)||(e.remove(),o.current.delete(a))})},[e,a]);return(0,n.useEffect)(()=>{if(!a)return void t();r();let e=setInterval(r,18e5);return()=>{clearInterval(e),t()}},[a,r,t]),null}},{id:"radar",label:"\uD83C\uDF27 Radar",title:"Weather radar — RainViewer",defaultEnabled:!1,component:function({map:e,enabled:a}){let o=(0,n.useRef)(null),t=(0,n.useCallback)(()=>{o.current?.remove(),o.current=null},[]),r=(0,n.useCallback)(async()=>{if(!e||!a)return;let n=await (0,i.fetchRainViewerManifest)();if(!n||!e||!a)return;let t=n.radar.past;if(!t?.length)return;let r=t[t.length-1],l=(0,i.rainViewerTileUrl)(n.host,r);o.current?.remove(),o.current=window.L.tileLayer(l,{opacity:.6,attribution:'<a href="https://www.rainviewer.com">RainViewer</a>'}).addTo(e)},[e,a]);return(0,n.useEffect)(()=>{if(!a)return void t();r();let e=setInterval(r,3e5);return()=>{clearInterval(e),t()}},[a,r,t]),null}},{id:"flights",label:"✈ Flights",title:"Live flight traffic — altitude-coded",defaultEnabled:!1,component:function({map:e,enabled:a,zoom:o}){let t=(0,n.useRef)(new Map),r=(0,n.useRef)(new Map),c=(0,n.useRef)(new Map),d=(0,n.useRef)(new Map),m=(0,n.useRef)(new Map),g=(0,n.useRef)(null),u=(0,n.useRef)(null);(0,n.useEffect)(()=>(window.__atlantisFlightFollow=e=>{u.current=u.current===e?null:e},()=>{delete window.__atlantisFlightFollow}),[]);let f=(0,n.useCallback)(()=>{t.current.forEach(e=>e.remove()),t.current.clear(),r.current.forEach(e=>e.remove()),r.current.clear(),c.current.forEach(e=>e.remove()),c.current.clear(),d.current.clear(),m.current.clear(),u.current=null},[]),p=(0,n.useCallback)(async()=>{let n,f,p,h,y,x;if(!e||!a||o<5)return;let b=e.getCenter(),w=(n=e.getBounds(),f=e.getCenter(),p=n.getNorthEast(),h=f.lat*Math.PI/180,y=p.lat*Math.PI/180,Math.min(Math.ceil(6880.13*Math.atan2(Math.sqrt(x=Math.sin((p.lat-f.lat)*Math.PI/180/2)**2+Math.cos(h)*Math.cos(y)*Math.sin((p.lng-f.lng)*Math.PI/180/2)**2),Math.sqrt(1-x))),250));g.current?.abort(),g.current=new AbortController;try{let o=await (0,i.fetchAdsbPoint)({lat:b.lat,lon:b.lng,radiusNm:w,signal:g.current.signal});if(!o||!e||!a)return;let n=window.L,f=Date.now();for(let a of o.ac??[]){let o=null==a.lat||null==a.lon?null:{icao24:a.hex,callsign:a.flight?.trim()||null,lat:a.lat,lon:a.lon,altFt:"number"==typeof a.alt_baro?a.alt_baro:null,speedKts:a.gs??null,heading:a.track??null,vrateFpm:a.baro_rate??null,reg:a.r??null,type:a.t??null};if(!o||null==o.altFt)continue;let i=o.heading??0,g=l(o.altFt),p=u.current===o.icao24,h=n.divIcon({html:function(e,a,o){let n=o?`filter:drop-shadow(0 0 5px ${a}) drop-shadow(0 0 10px ${a});`:"filter:drop-shadow(0 1px 3px rgba(0,0,0,.9));";return`<div style="
    width:22px;height:22px;
    display:flex;align-items:center;justify-content:center;
    transform:rotate(${e}deg);
    ${n}
    cursor:pointer;
    transition:transform .3s;
  ">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="${a}">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
    </svg>
  </div>`}(i,g,p),className:"",iconSize:[22,22],iconAnchor:[11,11]}),y=[...d.current.get(o.icao24)??[],[o.lat,o.lon]].slice(-15);d.current.set(o.icao24,y),m.current.set(o.icao24,f);let x=null!=o.speedKts&&null!=o.heading,b=x?1.852*o.speedKts*.5:0,[w,z]=x?function(e,a,o,n){let t=n/6371,i=e*Math.PI/180,r=o*Math.PI/180,l=Math.asin(Math.sin(i)*Math.cos(t)+Math.cos(i)*Math.sin(t)*Math.cos(r)),s=a*Math.PI/180+Math.atan2(Math.sin(r)*Math.sin(t)*Math.cos(i),Math.cos(t)-Math.sin(i)*Math.sin(l));return[180*l/Math.PI,180*s/Math.PI]}(o.lat,o.lon,o.heading,b):[o.lat,o.lon],v=t.current.get(o.icao24);if(v)v.setLatLng([o.lat,o.lon]),v.setIcon(h),v.getPopup()?.setContent(s(o)),r.current.get(o.icao24)?.setLatLngs([[o.lat,o.lon],[w,z]]),c.current.get(o.icao24)?.setLatLngs(y);else{let a=n.marker([o.lat,o.lon],{icon:h});if(a.bindPopup(s(o),{maxWidth:240}),a.addTo(e),t.current.set(o.icao24,a),x){let a=n.polyline([[o.lat,o.lon],[w,z]],{color:g,weight:1.5,opacity:.35,dashArray:"4 7",interactive:!1});a.addTo(e),r.current.set(o.icao24,a)}if(y.length>1){let a=n.polyline(y,{color:g,weight:1.5,opacity:.45,interactive:!1});a.addTo(e),c.current.set(o.icao24,a)}}}if(t.current.forEach((e,a)=>{let o=m.current.get(a)??0;f-o>5e4&&(e.remove(),t.current.delete(a),r.current.get(a)?.remove(),r.current.delete(a),c.current.get(a)?.remove(),c.current.delete(a),d.current.delete(a),m.current.delete(a),u.current===a&&(u.current=null))}),u.current){let a=t.current.get(u.current);a&&e.panTo(a.getLatLng(),{animate:!0,duration:.5})}}catch(e){if(e instanceof Error&&"AbortError"===e.name)return}},[e,a,o]);return(0,n.useEffect)(()=>{let e;if(!a||o<5)return void f();let n=!1,t=async()=>{await p(),n||(e=setTimeout(t,2e4))};return t(),()=>{n=!0,clearTimeout(e)}},[a,p,f]),(0,n.useEffect)(()=>{let o;if(!e||!a)return;let n=()=>{clearTimeout(o),o=setTimeout(p,1200)};return e.on("moveend",n),()=>{clearTimeout(o),e.off("moveend",n)}},[e,a,p]),null}},{id:"measure",label:"\uD83D\uDCCF Measure",title:"Click two points to measure great-circle distance",defaultEnabled:!1,component:function({map:e,enabled:a}){let o=(0,n.useRef)([]),t=(0,n.useRef)([]),i=(0,n.useRef)([]),r=(0,n.useRef)(null),l=(0,n.useCallback)(()=>{t.current.forEach(e=>e.remove()),t.current=[],i.current.forEach(e=>e.remove()),i.current=[],r.current?.remove(),r.current=null,o.current=[]},[]);return(0,n.useEffect)(()=>{if(!e||!a)return void l();let n=window.L,s=n.divIcon({html:`<div style="
        width:10px;height:10px;
        background:#58a6ff;
        border:2px solid #fff;
        border-radius:50%;
        box-shadow:0 0 6px rgba(88,166,255,.85);
      "></div>`,className:"",iconSize:[10,10],iconAnchor:[5,5]}),c=a=>{let{lat:c,lng:d}=a.latlng;o.current.length>=2&&l(),o.current=[...o.current,[c,d]];let m=n.marker([c,d],{icon:s,interactive:!1}).addTo(e);if(t.current.push(m),2===o.current.length){var g,u,f;let a,[t,l]=o.current,s=n.polyline([t,l],{color:"#58a6ff",weight:2,dashArray:"6 5",opacity:.85,interactive:!1}).addTo(e);i.current.push(s);let c=(g=t[0],u=t[1],12742*Math.atan2(Math.sqrt(a=Math.sin(((f=l[0])-g)*Math.PI/180/2)**2+Math.cos(g*Math.PI/180)*Math.cos(f*Math.PI/180)*Math.sin((l[1]-u)*Math.PI/180/2)**2),Math.sqrt(1-a))),d=(t[0]+l[0])/2,m=(t[1]+l[1])/2;r.current=n.popup({closeButton:!0,autoClose:!1,className:"",offset:[0,-4]}).setLatLng([d,m]).setContent(`
            <div style="font-family:monospace;font-size:12px;line-height:1.9;text-align:center;min-width:120px;">
              <div style="font-weight:700;font-size:15px;color:#58a6ff">
                ${c<1?`${Math.round(1e3*c)} m`:c<100?`${c.toFixed(1)} km`:`${Math.round(c).toLocaleString()} km`}
              </div>
              <div style="opacity:.65;font-size:10px">
                ${Math.round(c/1.852).toLocaleString()} nm
                &nbsp;\xb7&nbsp;
                ${Math.round(.6214*c).toLocaleString()} mi
              </div>
              <div style="opacity:.4;font-size:9px;margin-top:3px">click map to reset</div>
            </div>`).addTo(e)}};return e.on("click",c),e.getContainer().style.cursor="crosshair",()=>{e.off("click",c),e.getContainer().style.cursor="",l()}},[e,a,l]),null}}].map(e=>[e.id,e]));function d(){return Array.from(c.values())}},8859(e,a,o){o.d(a,{FlyoutPanel:()=>b});var n=o(5723),t=o(7991),i=o.n(t),r=o(6859),l=o.n(r),s=o(2799),c=o(255),d=o(1316),m=o(814),g=o(6140);let u=(0,s.keyframes)`
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
  animation: ${u} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
`,p=l().div`
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
`,h=l().button`
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
`;function y({iconKey:e}){let a=e?g.t[e]??c.A:c.A;return(0,n.jsx)(a,{size:14,strokeWidth:1.75})}function x({entries:e,activeId:a,onSelect:o}){return(0,n.jsx)(n.Fragment,{children:e.map(e=>e.children?(0,n.jsx)(i().Fragment,{children:(0,n.jsx)(x,{entries:e.children,activeId:a,onSelect:o})},e.id):(0,n.jsxs)(h,{active:a===e.id,onClick:()=>o(e),children:[(0,n.jsx)(y,{iconKey:e.icon}),e.name]},e.id))})}function b({activeId:e}){let{flyout:a,scheduleFlyoutClose:o,cancelFlyoutClose:t}=(0,m.c)();if(!a)return null;let i=a.entry.icon?g.t[a.entry.icon]??c.A:c.A;return(0,n.jsxs)(f,{anchorY:a.anchorY,onMouseEnter:t,onMouseLeave:o,children:[(0,n.jsxs)(p,{children:[(0,n.jsx)(i,{size:13,strokeWidth:2}),a.entry.name]}),(0,n.jsx)(x,{entries:a.entry.children??[],activeId:e,onSelect:e=>{a.onSelect(e),o()}})]})}},814(e,a,o){o.d(a,{I:()=>t,c:()=>i});var n=o(7991);let t=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,n.useContext)(t)},6140(e,a,o){o.d(a,{t:()=>ex});var n=o(6896),t=o(7902),i=o(3013),r=o(2887),l=o(9510),s=o(9848),c=o(7901),d=o(3045),m=o(3775),g=o(1783),u=o(3539),f=o(9416),p=o(1837),h=o(7167),y=o(4494),x=o(2314),b=o(255),w=o(5751),z=o(9633),v=o(2946),$=o(822),A=o(6720),k=o(7400),M=o(8456),S=o(3317),j=o(2709),T=o(8006),B=o(9301),C=o(7561),E=o(3517),L=o(8207),F=o(7032),P=o(6949),R=o(8218),I=o(6829),_=o(9591),G=o(5553),N=o(9923),D=o(2820),K=o(4621),H=o(8479),V=o(2534),O=o(6673),U=o(7490),W=o(9033),Y=o(9038),Z=o(5775),J=o(1365),q=o(2937),Q=o(9821),X=o(5912),ee=o(158),ea=o(8641),eo=o(8607),en=o(3249),et=o(1821),ei=o(5889),er=o(9655),el=o(7170),es=o(9161),ec=o(1849),ed=o(1604),em=o(3142),eg=o(1187),eu=o(7747),ef=o(2932),ep=o(4525),eh=o(7230),ey=o(2164);let ex={activity:n.A,"a-large-small":t.A,apple:i.A,"arrow-right":r.A,"bar-chart-2":l.A,book:s.A,"book-open":c.A,briefcase:d.A,calendar:m.A,clock:g.A,"circle-dot":u.A,cloud:f.A,compass:p.A,cpu:h.A,droplets:y.A,feather:x.A,file:b.A,"file-text":w.A,folder:z.A,"git-branch":v.A,github:$.A,globe:A.A,grid:k.A,hand:M.A,hash:S.A,heart:j.A,key:T.A,hexagon:B.A,home:C.A,landmark:E.A,layers:L.A,"layout-grid":F.A,leaf:P.A,lightbulb:R.A,list:I.A,map:_.A,"map-pin":G.A,"message-circle":N.A,"message-square":D.A,minus:K.A,monitor:H.A,mountain:V.A,package:O.A,palette:U.A,"pen-tool":W.A,"pie-chart":Y.A,plane:Z.A,plus:J.A,ruler:q.A,shirt:Q.A,slash:X.A,square:ee.A,star:ea.A,sun:eo.A,terminal:en.A,thermometer:et.A,triangle:ei.A,trophy:er.A,truck:el.A,type:es.A,users:ec.A,"volume-2":ed.A,watch:em.A,waves:eg.A,wind:eu.A,wrench:ef.A,x:ep.A,zap:eh.A,bot:ey.A}},3930(e,a,o){o.d(a,{kd:()=>ea.deleteDoc,u6:()=>Q,MJ:()=>ed,rh:()=>Z,KL:()=>ea.saveDoc,w3:()=>J,Iu:()=>ea.listDocs,fy:()=>ep,rz:()=>eu,$L:()=>q,CD:()=>U,qs:()=>ee,mZ:()=>ea.updateDoc,PE:()=>C,w4:()=>n.w4});var n=o(1316),t=o(5723),i=o(7991),r=o.n(i),l=o(6859),s=o.n(l);s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${n.w4.spacing.sm};
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,s().div`
  position: relative;
`;var c=o(2799),d=o(3661),m=o(814);let g="260px",u="56px",f="48px",p=s().header`
  display: flex;
  align-items: center;
  height: calc(${f} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);

  /* Mobile: logo + app label on row 1, scrollable chrome cluster on row 2. */
  @media (max-width: ${n.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(${f} + env(safe-area-inset-top, 0px));
  }
`,h=s().div`
  width: ${u};
  min-width: ${u};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${n.w4.breakpoints.md}) {
    display: none;
  }
`,y=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,x=(0,c.keyframes)`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,b=s().button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${n.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${n.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,w=s().span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${x} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`
    background: linear-gradient(135deg, ${n.w4.colors.accent}, ${n.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`,z=s().div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  padding-left: ${n.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 0;

  &::before {
    content: '/';
    margin-right: ${n.w4.spacing.sm};
    color: ${n.w4.colors.border};
  }
`,v=s().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${n.w4.spacing.md};
  padding: 0 ${n.w4.spacing.lg};
  min-width: 0;

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${n.w4.spacing.sm};
  }

  /* Full-width second row on mobile, horizontally scrollable.
     Align to the right so the avatar / bell stay flush with the
     viewport edge — matches desktop end-alignment. */
  @media (max-width: ${n.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    justify-content: flex-end;
    padding: ${n.w4.spacing.xs} ${n.w4.spacing.sm};
    gap: ${n.w4.spacing.xs};
    border-top: 1px solid ${n.w4.colors.sidebarBorder};
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
`,$=s().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,A=s().div`
  display: flex;
  flex-direction: column;
  height: ${n.w4.sizes.fullHeight};
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,k=s().aside`
  width: ${({collapsed:e})=>e?u:g};
  min-width: ${({collapsed:e})=>e?u:g};
  background: ${n.w4.colors.sidebarBg};
  border-right: 1px solid ${n.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${n.w4.breakpoints.md}) {
    display: none;
  }
`,M=s().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,S=s().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,j=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function T(){return(0,t.jsx)(b,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:j.map((e,a)=>(0,t.jsx)(w,{index:a,accent:e.accent,children:e.char},a))})}let B="atlantis:sidebar-collapsed";function C({sidebar:e,children:a,topBarRight:n,title:l="Atlantis",activeId:s=null}){let[c,g]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem(B)}catch{return!1}}),[u,f]=(0,i.useState)(null),x=(0,i.useRef)(),b=()=>g(e=>{let a=!e;try{localStorage.setItem(B,String(a))}catch{}return a}),w=r().useMemo(()=>r().lazy(()=>Promise.resolve().then(o.bind(o,8859)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,t.jsx)(m.I.Provider,{value:{collapsed:c,toggle:b,flyout:u,openFlyout:(e,a,o)=>{clearTimeout(x.current),f({entry:e,anchorY:a,onSelect:o})},scheduleFlyoutClose:()=>{x.current=setTimeout(()=>f(null),160)},cancelFlyoutClose:()=>clearTimeout(x.current)},children:(0,t.jsxs)(A,{children:[(0,t.jsxs)(p,{children:[e&&(0,t.jsx)(h,{children:(0,t.jsx)(y,{onClick:b,title:c?"Expand sidebar":"Collapse sidebar",children:(0,t.jsx)(d.A,{size:17})})}),(0,t.jsx)(T,{}),l&&(0,t.jsx)(z,{children:l}),n&&(0,t.jsx)(v,{children:n})]}),(0,t.jsxs)($,{children:[null!=e&&(0,t.jsx)(k,{collapsed:c,children:(0,t.jsx)(M,{children:e})}),(0,t.jsx)(S,{children:a})]}),u&&(0,t.jsx)(r().Suspense,{fallback:null,children:(0,t.jsx)(w,{activeId:s})})]})})}var E=o(255),L=o(9753),F=o(6140);let P=s().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,R=s().div`
  overflow: hidden;
`,I=s().div`
  padding-left: ${n.w4.spacing.md};
`,_=s().div`
  display: flex;
  flex-direction: column;
`,G=s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${n.w4.spacing.sm} ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":n.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${n.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${n.w4.colors.sidebarText};
    background: ${n.w4.colors.sidebarHover};
  }
`,N=s().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,D=s().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,K=s().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${n.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,H=s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?n.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?n.w4.colors.sidebarActive:n.w4.colors.sidebarText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${n.w4.borderRadius.md} ${n.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.mainText};
  }
`;function V({iconKey:e,size:a=16}){if(e&&!(e in F.t))return(0,t.jsx)("span",{style:{fontSize:a,lineHeight:1,display:"flex",alignItems:"center"},children:e});let o=e?F.t[e]??E.A:E.A;return(0,t.jsx)(o,{size:a,strokeWidth:1.75})}function O({entry:e,activeId:a,onSelect:o}){let[n,r]=(0,i.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:c,cancelFlyoutClose:d}=(0,m.c)();return e.children&&e.children.length>0?(0,t.jsxs)(_,{children:[(0,t.jsxs)(G,{collapsed:l,onClick:()=>{l||r(e=>!e)},onMouseEnter:l?a=>{s(e,a.currentTarget.getBoundingClientRect().top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,t.jsxs)(N,{collapsed:l,children:[(0,t.jsx)(V,{iconKey:e.icon,size:16}),(0,t.jsx)(D,{collapsed:l,children:e.name})]}),(0,t.jsx)(K,{open:n,collapsed:l,children:(0,t.jsx)(L.A,{size:13})})]}),(0,t.jsx)(P,{open:n&&!l,children:(0,t.jsx)(R,{children:(0,t.jsx)(I,{children:e.children.map(e=>(0,t.jsx)(O,{entry:e,activeId:a,onSelect:o},e.id))})})})]}):(0,t.jsxs)(H,{active:a===e.id,collapsed:l,onClick:()=>o(e),onMouseEnter:l?a=>{let n=a.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},n.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,t.jsx)(V,{iconKey:e.icon,size:15}),(0,t.jsx)(D,{collapsed:l,children:e.name})]})}function U({entries:e,activeId:a,onSelect:o}){return(0,t.jsx)("div",{children:e.map(e=>(0,t.jsx)(O,{entry:e,activeId:a,onSelect:o},e.id))})}let W=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;s().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${W} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${n.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${n.w4.colors.surface};
  }
`,s().span`
  display: block;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${n.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${n.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${n.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${n.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,o(8859),s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  color: ${n.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.accent};
    border-color: ${n.w4.colors.accent};
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
`;let Y=[{id:"europe",name:"Europe",icon:"\uD83C\uDF0D",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"lourinha",name:"Lourinh\xe3",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"\uD83C\uDDEC\uD83C\uDDE7",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"\uD83C\uDDEB\uD83C\uDDF7",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"\uD83C\uDDE9\uD83C\uDDEA",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"\uD83C\uDDEA\uD83C\uDDF8",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"\uD83C\uDDEE\uD83C\uDDF9",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"\uD83C\uDDF3\uD83C\uDDF1",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"\uD83C\uDDEC\uD83C\uDDF7",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"\uD83C\uDDE7\uD83C\uDDEA",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"\uD83C\uDDE6\uD83C\uDDF9",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"\uD83C\uDDF5\uD83C\uDDF1",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"\uD83C\uDDF8\uD83C\uDDEA",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"\uD83C\uDDF3\uD83C\uDDF4",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"\uD83C\uDDE9\uD83C\uDDF0",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"\uD83C\uDDEB\uD83C\uDDEE",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"\uD83C\uDDEE\uD83C\uDDF8",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"\uD83C\uDDEE\uD83C\uDDEA",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"\uD83C\uDDE8\uD83C\uDDED",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"\uD83C\uDDFA\uD83C\uDDE6",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"\uD83C\uDDF7\uD83C\uDDFA",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"\uD83C\uDDF7\uD83C\uDDF4",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"\uD83C\uDDED\uD83C\uDDFA",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"\uD83C\uDDE8\uD83C\uDDFF",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"\uD83C\uDDF8\uD83C\uDDF0",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"\uD83C\uDDF8\uD83C\uDDEE",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"\uD83C\uDDED\uD83C\uDDF7",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"\uD83C\uDDF7\uD83C\uDDF8",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"\uD83C\uDDE7\uD83C\uDDE6",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"\uD83C\uDDE7\uD83C\uDDEC",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"\uD83C\uDDEA\uD83C\uDDEA",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"\uD83C\uDDF1\uD83C\uDDFB",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"\uD83C\uDDF1\uD83C\uDDF9",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"\uD83C\uDDE7\uD83C\uDDFE",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"\uD83C\uDDF2\uD83C\uDDE9",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"\uD83C\uDDE6\uD83C\uDDF1",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"\uD83C\uDDF2\uD83C\uDDF0",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"\uD83C\uDDF2\uD83C\uDDEA",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"\uD83C\uDDE8\uD83C\uDDFE",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"\uD83C\uDDF2\uD83C\uDDF9",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"\uD83C\uDDF1\uD83C\uDDFA",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"\uD83C\uDDE6\uD83C\uDDE9",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"\uD83C\uDDF2\uD83C\uDDE8",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"\uD83C\uDDF8\uD83C\uDDF2",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"\uD83C\uDDF1\uD83C\uDDEE",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"\uD83C\uDDFB\uD83C\uDDE6",zoom:15}]},{id:"americas",name:"Americas",icon:"\uD83C\uDF0E",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"\uD83C\uDDE8\uD83C\uDDE6",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"\uD83C\uDDF2\uD83C\uDDFD",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"\uD83C\uDDE7\uD83C\uDDFF",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"\uD83C\uDDEC\uD83C\uDDF9",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"\uD83C\uDDF8\uD83C\uDDFB",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"\uD83C\uDDED\uD83C\uDDF3",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"\uD83C\uDDF3\uD83C\uDDEE",zoom:12},{id:"san-jose-cr",name:"San Jos\xe9",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"\uD83C\uDDE8\uD83C\uDDF7",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"\uD83C\uDDF5\uD83C\uDDE6",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"\uD83C\uDDE8\uD83C\uDDFA",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"\uD83C\uDDE7\uD83C\uDDF8",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"\uD83C\uDDEF\uD83C\uDDF2",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"\uD83C\uDDED\uD83C\uDDF9",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"\uD83C\uDDE9\uD83C\uDDF4",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"\uD83C\uDDF0\uD83C\uDDF3",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"\uD83C\uDDF1\uD83C\uDDE8",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"\uD83C\uDDFB\uD83C\uDDE8",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"\uD83C\uDDE7\uD83C\uDDE7",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"\uD83C\uDDE6\uD83C\uDDEC",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"\uD83C\uDDE9\uD83C\uDDF2",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"\uD83C\uDDEC\uD83C\uDDE9",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"\uD83C\uDDF9\uD83C\uDDF9",zoom:12},{id:"bogota",name:"Bogot\xe1",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"\uD83C\uDDE8\uD83C\uDDF4",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"\uD83C\uDDFB\uD83C\uDDEA",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"\uD83C\uDDEC\uD83C\uDDFE",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"\uD83C\uDDF8\uD83C\uDDF7",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"\uD83C\uDDEA\uD83C\uDDE8",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"\uD83C\uDDF5\uD83C\uDDEA",zoom:12},{id:"sao-paulo",name:"S\xe3o Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"\uD83C\uDDE7\uD83C\uDDF7",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"\uD83C\uDDE7\uD83C\uDDF4",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"\uD83C\uDDE8\uD83C\uDDF1",zoom:12},{id:"asuncion",name:"Asunci\xf3n",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"\uD83C\uDDF5\uD83C\uDDFE",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"\uD83C\uDDE6\uD83C\uDDF7",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"\uD83C\uDDFA\uD83C\uDDFE",zoom:12}]},{id:"africa",name:"Africa",icon:"\uD83C\uDF0D",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"\uD83C\uDDF2\uD83C\uDDE6",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"\uD83C\uDDE9\uD83C\uDDFF",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"\uD83C\uDDF9\uD83C\uDDF3",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"\uD83C\uDDF1\uD83C\uDDFE",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"\uD83C\uDDEA\uD83C\uDDEC",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"\uD83C\uDDF8\uD83C\uDDE9",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"\uD83C\uDDF8\uD83C\uDDF3",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"\uD83C\uDDEC\uD83C\uDDF2",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"\uD83C\uDDEC\uD83C\uDDFC",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"\uD83C\uDDEC\uD83C\uDDF3",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"\uD83C\uDDF8\uD83C\uDDF1",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"\uD83C\uDDF1\uD83C\uDDF7",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"\uD83C\uDDE8\uD83C\uDDEE",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"\uD83C\uDDEC\uD83C\uDDED",zoom:12},{id:"lome",name:"Lom\xe9",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"\uD83C\uDDF9\uD83C\uDDEC",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"\uD83C\uDDE7\uD83C\uDDEF",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"\uD83C\uDDF3\uD83C\uDDEC",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"\uD83C\uDDF3\uD83C\uDDEA",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"\uD83C\uDDF2\uD83C\uDDF1",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"\uD83C\uDDE7\uD83C\uDDEB",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"\uD83C\uDDF2\uD83C\uDDF7",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"\uD83C\uDDE8\uD83C\uDDFB",zoom:13},{id:"yaounde",name:"Yaound\xe9",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"\uD83C\uDDE8\uD83C\uDDF2",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"\uD83C\uDDF9\uD83C\uDDE9",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"\uD83C\uDDE8\uD83C\uDDEB",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"\uD83C\uDDEC\uD83C\uDDF6",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"\uD83C\uDDEC\uD83C\uDDE6",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"\uD83C\uDDE8\uD83C\uDDEC",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"\uD83C\uDDE8\uD83C\uDDE9",zoom:12},{id:"sao-tome",name:"S\xe3o Tom\xe9",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"\uD83C\uDDF8\uD83C\uDDF9",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"\uD83C\uDDF8\uD83C\uDDF8",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"\uD83C\uDDEA\uD83C\uDDF9",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"\uD83C\uDDEA\uD83C\uDDF7",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"\uD83C\uDDE9\uD83C\uDDEF",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"\uD83C\uDDF8\uD83C\uDDF4",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"\uD83C\uDDF0\uD83C\uDDEA",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"\uD83C\uDDFA\uD83C\uDDEC",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"\uD83C\uDDF7\uD83C\uDDFC",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"\uD83C\uDDE7\uD83C\uDDEE",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"\uD83C\uDDF9\uD83C\uDDFF",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"\uD83C\uDDF2\uD83C\uDDEC",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"\uD83C\uDDF0\uD83C\uDDF2",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"\uD83C\uDDF2\uD83C\uDDFA",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"\uD83C\uDDF8\uD83C\uDDE8",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"\uD83C\uDDE6\uD83C\uDDF4",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"\uD83C\uDDFF\uD83C\uDDF2",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"\uD83C\uDDF2\uD83C\uDDFC",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"\uD83C\uDDF2\uD83C\uDDFF",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"\uD83C\uDDFF\uD83C\uDDFC",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"\uD83C\uDDE7\uD83C\uDDFC",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"\uD83C\uDDF3\uD83C\uDDE6",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"\uD83C\uDDFF\uD83C\uDDE6",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"\uD83C\uDDF8\uD83C\uDDFF",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"\uD83C\uDDF1\uD83C\uDDF8",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"\uD83D\uDD4C",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"\uD83C\uDDF8\uD83C\uDDE6",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"\uD83C\uDDE6\uD83C\uDDEA",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"\uD83C\uDDF6\uD83C\uDDE6",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"\uD83C\uDDE7\uD83C\uDDED",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"\uD83C\uDDF0\uD83C\uDDFC",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"\uD83C\uDDF4\uD83C\uDDF2",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"\uD83C\uDDFE\uD83C\uDDEA",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"\uD83C\uDDEE\uD83C\uDDF6",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"\uD83C\uDDEE\uD83C\uDDF7",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"\uD83C\uDDF9\uD83C\uDDF7",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"\uD83C\uDDF1\uD83C\uDDE7",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"\uD83C\uDDF8\uD83C\uDDFE",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"\uD83C\uDDEF\uD83C\uDDF4",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"\uD83C\uDDEE\uD83C\uDDF1",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"\uD83C\uDDF5\uD83C\uDDF8",zoom:13}]},{id:"asia",name:"Asia",icon:"\uD83C\uDF0F",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"\uD83C\uDDE6\uD83C\uDDEB",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"\uD83C\uDDF0\uD83C\uDDFF",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"\uD83C\uDDF0\uD83C\uDDEC",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"\uD83C\uDDFA\uD83C\uDDFF",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"\uD83C\uDDF9\uD83C\uDDEF",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"\uD83C\uDDF9\uD83C\uDDF2",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"\uD83C\uDDE6\uD83C\uDDF2",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"\uD83C\uDDE6\uD83C\uDDFF",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"\uD83C\uDDEC\uD83C\uDDEA",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"\uD83C\uDDF5\uD83C\uDDF0",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"\uD83C\uDDF3\uD83C\uDDF5",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"\uD83C\uDDE7\uD83C\uDDE9",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"\uD83C\uDDF1\uD83C\uDDF0",zoom:12},{id:"male",name:"Mal\xe9",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"\uD83C\uDDF2\uD83C\uDDFB",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"\uD83C\uDDE8\uD83C\uDDF3",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"\uD83C\uDDEF\uD83C\uDDF5",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"\uD83C\uDDF0\uD83C\uDDF7",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"\uD83C\uDDF0\uD83C\uDDF5",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"\uD83C\uDDF2\uD83C\uDDF3",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"\uD83C\uDDF9\uD83C\uDDED",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"\uD83C\uDDFB\uD83C\uDDF3",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"\uD83C\uDDF0\uD83C\uDDED",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"\uD83C\uDDF1\uD83C\uDDE6",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"\uD83C\uDDF2\uD83C\uDDF2",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"\uD83C\uDDF2\uD83C\uDDFE",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"\uD83C\uDDF8\uD83C\uDDEC",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"\uD83C\uDDEE\uD83C\uDDE9",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"\uD83C\uDDF5\uD83C\uDDED",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"\uD83C\uDDE7\uD83C\uDDF3",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"\uD83C\uDDF9\uD83C\uDDF1",zoom:13}]},{id:"oceania",name:"Oceania",icon:"\uD83C\uDF0A",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"\uD83C\uDDE6\uD83C\uDDFA",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"\uD83C\uDDF3\uD83C\uDDFF",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"\uD83C\uDDF5\uD83C\uDDEC",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"\uD83C\uDDEB\uD83C\uDDEF",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"\uD83C\uDDF8\uD83C\uDDE7",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"\uD83C\uDDFB\uD83C\uDDFA",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"\uD83C\uDDF9\uD83C\uDDF4",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"\uD83C\uDDFC\uD83C\uDDF8",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"\uD83C\uDDF9\uD83C\uDDFB",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"\uD83C\uDDF0\uD83C\uDDEE",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"\uD83C\uDDF2\uD83C\uDDED",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"\uD83C\uDDEB\uD83C\uDDF2",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"\uD83C\uDDF5\uD83C\uDDFC",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"\uD83C\uDDF3\uD83C\uDDF7",zoom:14}]}],Z=Y.flatMap(e=>e.places);function J(e,a){return e.toLocaleTimeString("en-GB",{timeZone:a,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}function q(e,a){return e.toLocaleDateString("en-GB",{timeZone:a,weekday:"short",day:"numeric",month:"short"})}function Q(e){return e.toLocaleTimeString("en-GB",{timeZone:"UTC",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}let X={AD:{name:"Andorra",flag:"\uD83C\uDDE6\uD83C\uDDE9"},AE:{name:"UAE",flag:"\uD83C\uDDE6\uD83C\uDDEA"},AF:{name:"Afghanistan",flag:"\uD83C\uDDE6\uD83C\uDDEB"},AG:{name:"Antigua & Barbuda",flag:"\uD83C\uDDE6\uD83C\uDDEC"},AL:{name:"Albania",flag:"\uD83C\uDDE6\uD83C\uDDF1"},AM:{name:"Armenia",flag:"\uD83C\uDDE6\uD83C\uDDF2"},AO:{name:"Angola",flag:"\uD83C\uDDE6\uD83C\uDDF4"},AR:{name:"Argentina",flag:"\uD83C\uDDE6\uD83C\uDDF7"},AT:{name:"Austria",flag:"\uD83C\uDDE6\uD83C\uDDF9"},AU:{name:"Australia",flag:"\uD83C\uDDE6\uD83C\uDDFA"},AZ:{name:"Azerbaijan",flag:"\uD83C\uDDE6\uD83C\uDDFF"},BA:{name:"Bosnia & Herzegovina",flag:"\uD83C\uDDE7\uD83C\uDDE6"},BB:{name:"Barbados",flag:"\uD83C\uDDE7\uD83C\uDDE7"},BD:{name:"Bangladesh",flag:"\uD83C\uDDE7\uD83C\uDDE9"},BE:{name:"Belgium",flag:"\uD83C\uDDE7\uD83C\uDDEA"},BF:{name:"Burkina Faso",flag:"\uD83C\uDDE7\uD83C\uDDEB"},BG:{name:"Bulgaria",flag:"\uD83C\uDDE7\uD83C\uDDEC"},BH:{name:"Bahrain",flag:"\uD83C\uDDE7\uD83C\uDDED"},BI:{name:"Burundi",flag:"\uD83C\uDDE7\uD83C\uDDEE"},BJ:{name:"Benin",flag:"\uD83C\uDDE7\uD83C\uDDEF"},BN:{name:"Brunei",flag:"\uD83C\uDDE7\uD83C\uDDF3"},BO:{name:"Bolivia",flag:"\uD83C\uDDE7\uD83C\uDDF4"},BR:{name:"Brazil",flag:"\uD83C\uDDE7\uD83C\uDDF7"},BS:{name:"Bahamas",flag:"\uD83C\uDDE7\uD83C\uDDF8"},BW:{name:"Botswana",flag:"\uD83C\uDDE7\uD83C\uDDFC"},BY:{name:"Belarus",flag:"\uD83C\uDDE7\uD83C\uDDFE"},BZ:{name:"Belize",flag:"\uD83C\uDDE7\uD83C\uDDFF"},CA:{name:"Canada",flag:"\uD83C\uDDE8\uD83C\uDDE6"},CD:{name:"DR Congo",flag:"\uD83C\uDDE8\uD83C\uDDE9"},CF:{name:"Central African Rep.",flag:"\uD83C\uDDE8\uD83C\uDDEB"},CG:{name:"Republic of Congo",flag:"\uD83C\uDDE8\uD83C\uDDEC"},CH:{name:"Switzerland",flag:"\uD83C\uDDE8\uD83C\uDDED"},CI:{name:"C\xf4te d'Ivoire",flag:"\uD83C\uDDE8\uD83C\uDDEE"},CL:{name:"Chile",flag:"\uD83C\uDDE8\uD83C\uDDF1"},CM:{name:"Cameroon",flag:"\uD83C\uDDE8\uD83C\uDDF2"},CN:{name:"China",flag:"\uD83C\uDDE8\uD83C\uDDF3"},CO:{name:"Colombia",flag:"\uD83C\uDDE8\uD83C\uDDF4"},CR:{name:"Costa Rica",flag:"\uD83C\uDDE8\uD83C\uDDF7"},CU:{name:"Cuba",flag:"\uD83C\uDDE8\uD83C\uDDFA"},CV:{name:"Cape Verde",flag:"\uD83C\uDDE8\uD83C\uDDFB"},CY:{name:"Cyprus",flag:"\uD83C\uDDE8\uD83C\uDDFE"},CZ:{name:"Czech Republic",flag:"\uD83C\uDDE8\uD83C\uDDFF"},DE:{name:"Germany",flag:"\uD83C\uDDE9\uD83C\uDDEA"},DJ:{name:"Djibouti",flag:"\uD83C\uDDE9\uD83C\uDDEF"},DK:{name:"Denmark",flag:"\uD83C\uDDE9\uD83C\uDDF0"},DM:{name:"Dominica",flag:"\uD83C\uDDE9\uD83C\uDDF2"},DO:{name:"Dominican Republic",flag:"\uD83C\uDDE9\uD83C\uDDF4"},DZ:{name:"Algeria",flag:"\uD83C\uDDE9\uD83C\uDDFF"},EC:{name:"Ecuador",flag:"\uD83C\uDDEA\uD83C\uDDE8"},EE:{name:"Estonia",flag:"\uD83C\uDDEA\uD83C\uDDEA"},EG:{name:"Egypt",flag:"\uD83C\uDDEA\uD83C\uDDEC"},ER:{name:"Eritrea",flag:"\uD83C\uDDEA\uD83C\uDDF7"},ES:{name:"Spain",flag:"\uD83C\uDDEA\uD83C\uDDF8"},ET:{name:"Ethiopia",flag:"\uD83C\uDDEA\uD83C\uDDF9"},FI:{name:"Finland",flag:"\uD83C\uDDEB\uD83C\uDDEE"},FJ:{name:"Fiji",flag:"\uD83C\uDDEB\uD83C\uDDEF"},FM:{name:"Micronesia",flag:"\uD83C\uDDEB\uD83C\uDDF2"},FR:{name:"France",flag:"\uD83C\uDDEB\uD83C\uDDF7"},GA:{name:"Gabon",flag:"\uD83C\uDDEC\uD83C\uDDE6"},GB:{name:"United Kingdom",flag:"\uD83C\uDDEC\uD83C\uDDE7"},GD:{name:"Grenada",flag:"\uD83C\uDDEC\uD83C\uDDE9"},GE:{name:"Georgia",flag:"\uD83C\uDDEC\uD83C\uDDEA"},GH:{name:"Ghana",flag:"\uD83C\uDDEC\uD83C\uDDED"},GM:{name:"Gambia",flag:"\uD83C\uDDEC\uD83C\uDDF2"},GN:{name:"Guinea",flag:"\uD83C\uDDEC\uD83C\uDDF3"},GQ:{name:"Equatorial Guinea",flag:"\uD83C\uDDEC\uD83C\uDDF6"},GR:{name:"Greece",flag:"\uD83C\uDDEC\uD83C\uDDF7"},GT:{name:"Guatemala",flag:"\uD83C\uDDEC\uD83C\uDDF9"},GW:{name:"Guinea-Bissau",flag:"\uD83C\uDDEC\uD83C\uDDFC"},GY:{name:"Guyana",flag:"\uD83C\uDDEC\uD83C\uDDFE"},HN:{name:"Honduras",flag:"\uD83C\uDDED\uD83C\uDDF3"},HR:{name:"Croatia",flag:"\uD83C\uDDED\uD83C\uDDF7"},HT:{name:"Haiti",flag:"\uD83C\uDDED\uD83C\uDDF9"},HU:{name:"Hungary",flag:"\uD83C\uDDED\uD83C\uDDFA"},ID:{name:"Indonesia",flag:"\uD83C\uDDEE\uD83C\uDDE9"},IE:{name:"Ireland",flag:"\uD83C\uDDEE\uD83C\uDDEA"},IL:{name:"Israel",flag:"\uD83C\uDDEE\uD83C\uDDF1"},IN:{name:"India",flag:"\uD83C\uDDEE\uD83C\uDDF3"},IQ:{name:"Iraq",flag:"\uD83C\uDDEE\uD83C\uDDF6"},IR:{name:"Iran",flag:"\uD83C\uDDEE\uD83C\uDDF7"},IS:{name:"Iceland",flag:"\uD83C\uDDEE\uD83C\uDDF8"},IT:{name:"Italy",flag:"\uD83C\uDDEE\uD83C\uDDF9"},JM:{name:"Jamaica",flag:"\uD83C\uDDEF\uD83C\uDDF2"},JO:{name:"Jordan",flag:"\uD83C\uDDEF\uD83C\uDDF4"},JP:{name:"Japan",flag:"\uD83C\uDDEF\uD83C\uDDF5"},KE:{name:"Kenya",flag:"\uD83C\uDDF0\uD83C\uDDEA"},KG:{name:"Kyrgyzstan",flag:"\uD83C\uDDF0\uD83C\uDDEC"},KH:{name:"Cambodia",flag:"\uD83C\uDDF0\uD83C\uDDED"},KI:{name:"Kiribati",flag:"\uD83C\uDDF0\uD83C\uDDEE"},KM:{name:"Comoros",flag:"\uD83C\uDDF0\uD83C\uDDF2"},KN:{name:"Saint Kitts & Nevis",flag:"\uD83C\uDDF0\uD83C\uDDF3"},KP:{name:"North Korea",flag:"\uD83C\uDDF0\uD83C\uDDF5"},KR:{name:"South Korea",flag:"\uD83C\uDDF0\uD83C\uDDF7"},KW:{name:"Kuwait",flag:"\uD83C\uDDF0\uD83C\uDDFC"},KZ:{name:"Kazakhstan",flag:"\uD83C\uDDF0\uD83C\uDDFF"},LA:{name:"Laos",flag:"\uD83C\uDDF1\uD83C\uDDE6"},LB:{name:"Lebanon",flag:"\uD83C\uDDF1\uD83C\uDDE7"},LC:{name:"Saint Lucia",flag:"\uD83C\uDDF1\uD83C\uDDE8"},LI:{name:"Liechtenstein",flag:"\uD83C\uDDF1\uD83C\uDDEE"},LK:{name:"Sri Lanka",flag:"\uD83C\uDDF1\uD83C\uDDF0"},LR:{name:"Liberia",flag:"\uD83C\uDDF1\uD83C\uDDF7"},LS:{name:"Lesotho",flag:"\uD83C\uDDF1\uD83C\uDDF8"},LT:{name:"Lithuania",flag:"\uD83C\uDDF1\uD83C\uDDF9"},LU:{name:"Luxembourg",flag:"\uD83C\uDDF1\uD83C\uDDFA"},LV:{name:"Latvia",flag:"\uD83C\uDDF1\uD83C\uDDFB"},LY:{name:"Libya",flag:"\uD83C\uDDF1\uD83C\uDDFE"},MA:{name:"Morocco",flag:"\uD83C\uDDF2\uD83C\uDDE6"},MC:{name:"Monaco",flag:"\uD83C\uDDF2\uD83C\uDDE8"},MD:{name:"Moldova",flag:"\uD83C\uDDF2\uD83C\uDDE9"},ME:{name:"Montenegro",flag:"\uD83C\uDDF2\uD83C\uDDEA"},MG:{name:"Madagascar",flag:"\uD83C\uDDF2\uD83C\uDDEC"},MH:{name:"Marshall Islands",flag:"\uD83C\uDDF2\uD83C\uDDED"},MK:{name:"North Macedonia",flag:"\uD83C\uDDF2\uD83C\uDDF0"},ML:{name:"Mali",flag:"\uD83C\uDDF2\uD83C\uDDF1"},MM:{name:"Myanmar",flag:"\uD83C\uDDF2\uD83C\uDDF2"},MN:{name:"Mongolia",flag:"\uD83C\uDDF2\uD83C\uDDF3"},MR:{name:"Mauritania",flag:"\uD83C\uDDF2\uD83C\uDDF7"},MT:{name:"Malta",flag:"\uD83C\uDDF2\uD83C\uDDF9"},MU:{name:"Mauritius",flag:"\uD83C\uDDF2\uD83C\uDDFA"},MV:{name:"Maldives",flag:"\uD83C\uDDF2\uD83C\uDDFB"},MW:{name:"Malawi",flag:"\uD83C\uDDF2\uD83C\uDDFC"},MX:{name:"Mexico",flag:"\uD83C\uDDF2\uD83C\uDDFD"},MY:{name:"Malaysia",flag:"\uD83C\uDDF2\uD83C\uDDFE"},MZ:{name:"Mozambique",flag:"\uD83C\uDDF2\uD83C\uDDFF"},NA:{name:"Namibia",flag:"\uD83C\uDDF3\uD83C\uDDE6"},NE:{name:"Niger",flag:"\uD83C\uDDF3\uD83C\uDDEA"},NG:{name:"Nigeria",flag:"\uD83C\uDDF3\uD83C\uDDEC"},NI:{name:"Nicaragua",flag:"\uD83C\uDDF3\uD83C\uDDEE"},NL:{name:"Netherlands",flag:"\uD83C\uDDF3\uD83C\uDDF1"},NO:{name:"Norway",flag:"\uD83C\uDDF3\uD83C\uDDF4"},NP:{name:"Nepal",flag:"\uD83C\uDDF3\uD83C\uDDF5"},NR:{name:"Nauru",flag:"\uD83C\uDDF3\uD83C\uDDF7"},NZ:{name:"New Zealand",flag:"\uD83C\uDDF3\uD83C\uDDFF"},OM:{name:"Oman",flag:"\uD83C\uDDF4\uD83C\uDDF2"},PA:{name:"Panama",flag:"\uD83C\uDDF5\uD83C\uDDE6"},PE:{name:"Peru",flag:"\uD83C\uDDF5\uD83C\uDDEA"},PG:{name:"Papua New Guinea",flag:"\uD83C\uDDF5\uD83C\uDDEC"},PH:{name:"Philippines",flag:"\uD83C\uDDF5\uD83C\uDDED"},PK:{name:"Pakistan",flag:"\uD83C\uDDF5\uD83C\uDDF0"},PL:{name:"Poland",flag:"\uD83C\uDDF5\uD83C\uDDF1"},PS:{name:"Palestine",flag:"\uD83C\uDDF5\uD83C\uDDF8"},PT:{name:"Portugal",flag:"\uD83C\uDDF5\uD83C\uDDF9"},PW:{name:"Palau",flag:"\uD83C\uDDF5\uD83C\uDDFC"},PY:{name:"Paraguay",flag:"\uD83C\uDDF5\uD83C\uDDFE"},QA:{name:"Qatar",flag:"\uD83C\uDDF6\uD83C\uDDE6"},RO:{name:"Romania",flag:"\uD83C\uDDF7\uD83C\uDDF4"},RS:{name:"Serbia",flag:"\uD83C\uDDF7\uD83C\uDDF8"},RU:{name:"Russia",flag:"\uD83C\uDDF7\uD83C\uDDFA"},RW:{name:"Rwanda",flag:"\uD83C\uDDF7\uD83C\uDDFC"},SA:{name:"Saudi Arabia",flag:"\uD83C\uDDF8\uD83C\uDDE6"},SB:{name:"Solomon Islands",flag:"\uD83C\uDDF8\uD83C\uDDE7"},SC:{name:"Seychelles",flag:"\uD83C\uDDF8\uD83C\uDDE8"},SD:{name:"Sudan",flag:"\uD83C\uDDF8\uD83C\uDDE9"},SE:{name:"Sweden",flag:"\uD83C\uDDF8\uD83C\uDDEA"},SG:{name:"Singapore",flag:"\uD83C\uDDF8\uD83C\uDDEC"},SI:{name:"Slovenia",flag:"\uD83C\uDDF8\uD83C\uDDEE"},SK:{name:"Slovakia",flag:"\uD83C\uDDF8\uD83C\uDDF0"},SL:{name:"Sierra Leone",flag:"\uD83C\uDDF8\uD83C\uDDF1"},SM:{name:"San Marino",flag:"\uD83C\uDDF8\uD83C\uDDF2"},SN:{name:"Senegal",flag:"\uD83C\uDDF8\uD83C\uDDF3"},SO:{name:"Somalia",flag:"\uD83C\uDDF8\uD83C\uDDF4"},SR:{name:"Suriname",flag:"\uD83C\uDDF8\uD83C\uDDF7"},SS:{name:"South Sudan",flag:"\uD83C\uDDF8\uD83C\uDDF8"},ST:{name:"S\xe3o Tom\xe9 & Pr\xedncipe",flag:"\uD83C\uDDF8\uD83C\uDDF9"},SV:{name:"El Salvador",flag:"\uD83C\uDDF8\uD83C\uDDFB"},SY:{name:"Syria",flag:"\uD83C\uDDF8\uD83C\uDDFE"},SZ:{name:"Eswatini",flag:"\uD83C\uDDF8\uD83C\uDDFF"},TD:{name:"Chad",flag:"\uD83C\uDDF9\uD83C\uDDE9"},TG:{name:"Togo",flag:"\uD83C\uDDF9\uD83C\uDDEC"},TH:{name:"Thailand",flag:"\uD83C\uDDF9\uD83C\uDDED"},TJ:{name:"Tajikistan",flag:"\uD83C\uDDF9\uD83C\uDDEF"},TL:{name:"Timor-Leste",flag:"\uD83C\uDDF9\uD83C\uDDF1"},TM:{name:"Turkmenistan",flag:"\uD83C\uDDF9\uD83C\uDDF2"},TN:{name:"Tunisia",flag:"\uD83C\uDDF9\uD83C\uDDF3"},TO:{name:"Tonga",flag:"\uD83C\uDDF9\uD83C\uDDF4"},TR:{name:"Turkey",flag:"\uD83C\uDDF9\uD83C\uDDF7"},TT:{name:"Trinidad & Tobago",flag:"\uD83C\uDDF9\uD83C\uDDF9"},TV:{name:"Tuvalu",flag:"\uD83C\uDDF9\uD83C\uDDFB"},TZ:{name:"Tanzania",flag:"\uD83C\uDDF9\uD83C\uDDFF"},UA:{name:"Ukraine",flag:"\uD83C\uDDFA\uD83C\uDDE6"},UG:{name:"Uganda",flag:"\uD83C\uDDFA\uD83C\uDDEC"},US:{name:"United States",flag:"\uD83C\uDDFA\uD83C\uDDF8"},UY:{name:"Uruguay",flag:"\uD83C\uDDFA\uD83C\uDDFE"},UZ:{name:"Uzbekistan",flag:"\uD83C\uDDFA\uD83C\uDDFF"},VA:{name:"Vatican City",flag:"\uD83C\uDDFB\uD83C\uDDE6"},VC:{name:"St Vincent & Gren.",flag:"\uD83C\uDDFB\uD83C\uDDE8"},VE:{name:"Venezuela",flag:"\uD83C\uDDFB\uD83C\uDDEA"},VN:{name:"Vietnam",flag:"\uD83C\uDDFB\uD83C\uDDF3"},VU:{name:"Vanuatu",flag:"\uD83C\uDDFB\uD83C\uDDFA"},WS:{name:"Samoa",flag:"\uD83C\uDDFC\uD83C\uDDF8"},YE:{name:"Yemen",flag:"\uD83C\uDDFE\uD83C\uDDEA"},ZA:{name:"South Africa",flag:"\uD83C\uDDFF\uD83C\uDDE6"},ZM:{name:"Zambia",flag:"\uD83C\uDDFF\uD83C\uDDF2"},ZW:{name:"Zimbabwe",flag:"\uD83C\uDDFF\uD83C\uDDFC"}};function ee(e=[]){let a=[];if(e.length>0){let o=e.map(e=>Z.find(a=>a.id===e)).filter(e=>void 0!==e);a.push({id:"__recent__",name:"Recent",icon:"\uD83D\uDD50",defaultOpen:!0,children:o.map(e=>({id:e.id,name:e.name,icon:e.flag}))})}for(let e of Y){let o=new Map;for(let a of e.places){let e=o.get(a.country)??[];e.push(a),o.set(a.country,e)}let n=[];for(let[e,a]of o){let o=X[e],t=o?.name??e,i=o?.flag??"";n.push({id:`country-${e}`,name:t,icon:i,defaultOpen:!1,children:a.map(e=>({id:e.id,name:e.name,icon:e.flag}))})}a.push({id:e.id,name:e.name,icon:e.icon,defaultOpen:!1,children:n})}return a}var ea=o(1310);let eo=s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,en=s().div`
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,et=s().div`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
`,ei=s().input`
  width: 100%;
  padding: 8px 12px;
  background: ${n.w4.colors.mainBg};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${n.w4.colors.accent}; }
  &::placeholder { color: ${n.w4.colors.sidebarTextMuted}; }
`,er=s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,el=s().button`
  padding: 7px 18px;
  border-radius: ${n.w4.borderRadius.md};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:a})=>a?"rgba(248,81,73,0.12)":e?n.w4.colors.accent:"none"};
  color: ${({primary:e,danger:a})=>a?n.w4.colors.danger:e?"#fff":n.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:a})=>a?n.w4.colors.danger:e?n.w4.colors.accent:n.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,es=s().div`
  height: 1px;
  background: ${n.w4.colors.border};
  margin: 0 -4px;
`,ec=s().div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`;function ed({onSave:e,onUpdate:a,onCancel:o,existingDoc:n}){let[r,l]=(0,i.useState)(n?.name??""),s=(0,i.useRef)(null);return(0,i.useEffect)(()=>{s.current?.focus(),n&&s.current?.select()},[n]),(0,t.jsx)(eo,{onClick:o,children:(0,t.jsxs)(en,{onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(et,{children:"Save document"}),n&&a&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ec,{children:"Update the current version or save as a new one."}),(0,t.jsxs)(er,{children:[(0,t.jsx)(el,{onClick:o,children:"Cancel"}),(0,t.jsxs)(el,{danger:!0,onClick:a,children:['Update "',n.name,'"']})]}),(0,t.jsx)(es,{})]}),(0,t.jsx)(ei,{ref:s,value:r,onChange:e=>l(e.target.value),onKeyDown:t=>{"Enter"===t.key&&r.trim()&&(n&&r.trim()===n.name&&a?a():e(r.trim())),"Escape"===t.key&&o()},placeholder:n?"Or save as a new version…":"Give this version a name…",maxLength:80}),(0,t.jsxs)(er,{children:[!n&&(0,t.jsx)(el,{onClick:o,children:"Cancel"}),(0,t.jsx)(el,{primary:!0,disabled:!r.trim(),onClick:()=>e(r.trim()),children:"Save as new"})]})]})})}let em=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,eg=(0,c.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`;function eu(e,a=8){let[o,n]=(0,i.useState)(()=>(function(e){try{return JSON.parse(localStorage.getItem(e)??"[]")}catch{return[]}})(e));return{recent:o,addRecent:(0,i.useCallback)(o=>{n(n=>{let t=[o,...n.filter(e=>e!==o)].slice(0,a);try{localStorage.setItem(e,JSON.stringify(t))}catch{}return t})},[e,a])}}function ef(){let e="u">typeof window?window.location.hash:"",a=e.indexOf("?");if(-1===a)return{};let o={};for(let n of e.slice(a+1).split("&")){if(!n)continue;let e=n.indexOf("=");-1===e?o[decodeURIComponent(n)]="":o[decodeURIComponent(n.slice(0,e))]=decodeURIComponent(n.slice(e+1))}return o}function ep(){let[e,a]=(0,i.useState)(ef);return(0,i.useEffect)(()=>{let e=()=>a(ef());return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),e}s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${n.w4.spacing.md};
  animation: ${em} 0.15s ease both;
`,s().div`
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?n.w4.colors.danger+"55":n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${n.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${eg} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,s().div`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?n.w4.colors.danger:n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
`,s().div`
  font-size: ${n.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${n.w4.spacing.sm};
`,s().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${n.w4.transitions.fast},
    border-color ${n.w4.transitions.fast},
    color ${n.w4.transitions.fast},
    opacity ${n.w4.transitions.fast};

  background: ${({primary:e,danger:a})=>a?n.w4.colors.danger:e?n.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:a})=>a||e?"#fff":n.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:a})=>a?n.w4.colors.danger:e?n.w4.colors.accent:n.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${n.w4.focusRing} }
`,s().div`
  position: relative;
`,s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    border-color: ${n.w4.colors.accent};
  }
`,s().div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,s().div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,s().div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,s().div`
  padding: 16px 14px;
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-style: italic;
`,s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
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
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,s().div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
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
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${n.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`,s().div`
  padding: ${n.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,s().section`
  scroll-margin-top: ${n.w4.spacing.lg};
`,s().div`
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.lg};
`,s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${n.w4.spacing.xl};

  @media (max-width: ${n.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,s().div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,s().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  padding-left: max(${n.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${n.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${n.w4.spacing.sm};
  z-index: 100;
`,s().button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${n.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${n.w4.colors.accent}; }
`,s().span`
  color: ${n.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,s().div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,s().span`
  font-weight: 400;
  color: ${n.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,s().div`
  flex: 1;
`;let eh=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ey=(0,c.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,ex=(0,c.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  animation: ${eh} 0.4s ease 0.15s both;
`,s().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,s().div`
  position: absolute;
  inset: 0;
  animation: ${ey} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
  background: ${n.w4.colors.border};
  animation: ${ex} 1.4s ease-in-out infinite;
`,s().span`
  color: ${n.w4.colors.mainTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`},1316(e,a,o){o.d(a,{w4:()=>i});let n={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},t="--at-",i={colors:function(){let e={};for(let a of Object.keys(n))e[a]=`var(${t}${a})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${t}suiteLab)`,vida:`var(${t}suiteVida)`,learn:`var(${t}suiteLearn)`,games:`var(${t}suiteGames)`,ent:`var(${t}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",xl:"0 40px 120px var(--at-shadowStrong), 0 8px 24px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:`
    outline: 2px solid var(--at-accent);
    outline-offset: 2px;
  `}}}]);