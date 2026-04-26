"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["6693"],{15940(e,t,i){i.d(t,{WeatherWidget:()=>E});var r=i(65723),n=i(37991),a=i(36859),o=i.n(a),s=i(72799),l=i(94764),d=i(45030),c=i(28170),p=i(98975),h=i(12906),x=i(30522),m=i(52306),u=i(96246);let f=x.j.lisbon.lat,w=x.j.lisbon.lon,g={0:"☀️",1:"\uD83C\uDF24️",2:"⛅",3:"☁️",45:"\uD83C\uDF2B️",48:"\uD83C\uDF2B️",51:"\uD83C\uDF26️",53:"\uD83C\uDF26️",55:"\uD83C\uDF27️",61:"\uD83C\uDF27️",63:"\uD83C\uDF27️",65:"\uD83C\uDF27️",71:"\uD83C\uDF28️",73:"\uD83C\uDF28️",75:"\uD83C\uDF28️",77:"\uD83C\uDF28️",80:"\uD83C\uDF26️",81:"\uD83C\uDF27️",82:"\uD83C\uDF27️",85:"\uD83C\uDF28️",86:"\uD83C\uDF28️",95:"⛈️",96:"⛈️",99:"⛈️"},v={0:"\uD83C\uDF19",1:"\uD83C\uDF19",2:"☁️",3:"☁️"},y={0:"Clear sky",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Foggy",48:"Rime fog",51:"Light drizzle",53:"Drizzle",55:"Dense drizzle",61:"Light rain",63:"Rain",65:"Heavy rain",71:"Light snow",73:"Snow",75:"Heavy snow",77:"Snow grains",80:"Light showers",81:"Showers",82:"Heavy showers",85:"Light snow showers",86:"Snow showers",95:"Thunderstorm",96:"Hail storm",99:"Severe hail storm"},b={0:"C\xe9u limpo",1:"Pouco nublado",2:"Parcialmente nublado",3:"Encoberto",45:"Nevoeiro",48:"Nevoeiro gelado",51:"Chuviscos leves",53:"Chuviscos",55:"Chuviscos densos",61:"Chuva fraca",63:"Chuva",65:"Chuva forte",71:"Neve fraca",73:"Neve",75:"Neve forte",77:"Gr\xe3os de neve",80:"Aguaceiros fracos",81:"Aguaceiros",82:"Aguaceiros fortes",85:"Neve fraca",86:"Neve forte",95:"Trovoada",96:"Granizo",99:"Granizo forte"},j=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,_=(0,s.keyframes)`
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-6px) rotate(2deg); }
`,k=(0,s.keyframes)`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.85; transform: scale(1.08); }
`,$=o().div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: ${l.w4.borderRadius.sm};
  animation: ${j} 0.25s ease both;

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,z=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.7;
  letter-spacing: 0.04em;
  white-space: nowrap;
`,M=o().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  flex: 1;
  padding: 16px 8px;
  position: relative;
  min-width: 0;
  flex-wrap: wrap;

  /* Narrow cells: shrink icon + temp so the row fits inside the widget
   * without overflow. 520px covers every single-column dashboard slot.  */
  @media (max-width: 520px) {
    gap: 14px;
    padding: 12px 4px;
  }
`,C=o().div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(80px, 28vw, 120px);
  height: clamp(80px, 28vw, 120px);
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      ${({accent:e})=>e}55 0%,
      ${({accent:e})=>e}22 40%,
      transparent 70%
    );
    filter: blur(16px);
    animation: ${k} 5s ease-in-out infinite;
    pointer-events: none;
  }

  @media (max-width: 520px) {
    width: 92px;
    height: 92px;
  }
`,T=o().div`
  font-size: clamp(56px, 18vw, 84px);
  line-height: 1;
  position: relative;
  z-index: 1;
  animation: ${_} 5s ease-in-out infinite;
`,N=o().div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,S=o().div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`,D=o().div`
  font-size: clamp(48px, 16vw, 76px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  background: linear-gradient(
    135deg,
    ${l.w4.colors.mainText} 20%,
    ${({accent:e})=>e} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`,L=o().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
  padding-bottom: 6px;

  span {
    font-weight: 700;
    color: ${l.w4.colors.mainText};
  }
`,A=o().div`
  font-size: 16px;
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  margin-top: 10px;
  letter-spacing: -0.01em;
`,F=o().div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 3px;
`,G=o().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 12px;
  padding-top: 14px;
  border-top: 1px solid ${l.w4.colors.border};

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Y=o().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 2px 4px;
`,H=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  gap: 4px;
`,P=o().div`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`;function E({locale:e}){var t;let i=(0,n.useMemo)(()=>(0,c.Nx)("pt"===e?"pt":"en",p.A),[e]),{forecast:a,failed:o}=(0,h.useWeather)({lat:f,lon:w,current:"temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day",daily:"temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max",timezone:"auto",cacheKey:"weather-lisbon-v3"}),s=()=>(0,l.VJ)("earth",{placeId:"lisbon"}),x=a&&a.current?a.current:null,j=a&&a.daily?a.daily:null,_=null!==x&&null!==j,k=x?.temperature_2m??0,I=x?.apparent_temperature??k,R=x?.relative_humidity_2m??0,W=x?.weather_code??0,K=x?.wind_speed_10m??0,B=x?.is_day===1,J=_?(t=W,B?0===t?"#fbbf24":1===t?"#fcd34d":2===t?"#60a5fa":3===t?"#94a3b8":t>=95?"#c084fc":t>=51?"#38bdf8":t>=45?"#cbd5e1":"#60a5fa":t>=95?"#a78bfa":t>=51?"#60a5fa":"#818cf8"):m.A.accentColor,O=Math.round(j?.temperature_2m_max?.[0]??k),U=Math.round(j?.temperature_2m_min?.[0]??k),V=Math.round(j?.uv_index_max?.[0]??0),q=j?.sunrise?.[0],Q=j?.sunset?.[0],X=Q?new Date(Q).getTime():NaN,Z=Number.isFinite(X)&&Date.now()<X?"sunset":"sunrise",ee="sunset"===Z?Q:j?.sunrise?.[1]??q;return(0,r.jsx)(d.rl,{title:i("weather.city.lisbon"),accessory:(0,r.jsx)(z,{children:i("weather.openInEarth")}),accentColor:J,error:o&&!_?i("widget.error.body"):void 0,errorLabel:o&&!_?i("widget.error.label"):void 0,children:_||o?_?(0,r.jsxs)($,{role:"link",tabIndex:0,onClick:s,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),s())},children:[(0,r.jsxs)(M,{children:[(0,r.jsx)(C,{accent:J,children:(0,r.jsx)(T,{children:!B&&W in v?v[W]:g[W]??"\uD83C\uDF21️"})}),(0,r.jsxs)(N,{children:[(0,r.jsxs)(S,{children:[(0,r.jsxs)(D,{accent:J,children:[Math.round(k),"\xb0"]}),(0,r.jsxs)(L,{children:[(0,r.jsxs)("div",{children:["▲ ",(0,r.jsxs)("span",{children:[O,"\xb0"]})]}),(0,r.jsxs)("div",{children:["▼ ",(0,r.jsxs)("span",{children:[U,"\xb0"]})]})]})]}),(0,r.jsx)(A,{children:("pt"===e?b:y)[W]??("pt"===e?"Desconhecido":"Unknown")}),(0,r.jsx)(F,{children:i("weather.feelsLike",{t:Math.round(I)})})]})]}),(0,r.jsxs)(G,{children:[(0,r.jsxs)(Y,{children:[(0,r.jsxs)(H,{children:["\uD83D\uDCA7 ",i("weather.humidity")]}),(0,r.jsxs)(P,{children:[R,"%"]})]}),(0,r.jsxs)(Y,{children:[(0,r.jsxs)(H,{children:["\uD83D\uDCA8 ",i("weather.wind")]}),(0,r.jsxs)(P,{children:[Math.round(K)," km/h"]})]}),(0,r.jsxs)(Y,{children:[(0,r.jsxs)(H,{children:["☀️ ",i("weather.uv")]}),(0,r.jsx)(P,{children:V})]}),(0,r.jsxs)(Y,{children:[(0,r.jsxs)(H,{children:["sunset"===Z?"\uD83C\uDF07":"\uD83C\uDF05"," ",i("sunset"===Z?"weather.sunset":"weather.sunrise")]}),(0,r.jsx)(P,{children:ee?new Date(ee).toLocaleTimeString("pt"===e?"pt-PT":"en-GB",{hour:"2-digit",minute:"2-digit"}):"—"})]})]})]}):null:(0,r.jsx)(u.YG,{mode:"loading",label:i("widget.loading")})})}}}]);