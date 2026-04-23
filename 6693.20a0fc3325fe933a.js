"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["6693"],{15940(e,t,i){i.d(t,{WeatherWidget:()=>K});var n=i(65723),r=i(37991),a=i(36859),o=i.n(a),s=i(72799),l=i(23930),d=i(28170),c=i(98975),p=i(48294),x=i(30522);let h=x.j.lisbon.lat,m=x.j.lisbon.lon,f={0:"☀️",1:"\uD83C\uDF24️",2:"⛅",3:"☁️",45:"\uD83C\uDF2B️",48:"\uD83C\uDF2B️",51:"\uD83C\uDF26️",53:"\uD83C\uDF26️",55:"\uD83C\uDF27️",61:"\uD83C\uDF27️",63:"\uD83C\uDF27️",65:"\uD83C\uDF27️",71:"\uD83C\uDF28️",73:"\uD83C\uDF28️",75:"\uD83C\uDF28️",77:"\uD83C\uDF28️",80:"\uD83C\uDF26️",81:"\uD83C\uDF27️",82:"\uD83C\uDF27️",85:"\uD83C\uDF28️",86:"\uD83C\uDF28️",95:"⛈️",96:"⛈️",99:"⛈️"},u={0:"\uD83C\uDF19",1:"\uD83C\uDF19",2:"☁️",3:"☁️"},g={0:"Clear sky",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Foggy",48:"Rime fog",51:"Light drizzle",53:"Drizzle",55:"Dense drizzle",61:"Light rain",63:"Rain",65:"Heavy rain",71:"Light snow",73:"Snow",75:"Heavy snow",77:"Snow grains",80:"Light showers",81:"Showers",82:"Heavy showers",85:"Light snow showers",86:"Snow showers",95:"Thunderstorm",96:"Hail storm",99:"Severe hail storm"},w={0:"C\xe9u limpo",1:"Pouco nublado",2:"Parcialmente nublado",3:"Encoberto",45:"Nevoeiro",48:"Nevoeiro gelado",51:"Chuviscos leves",53:"Chuviscos",55:"Chuviscos densos",61:"Chuva fraca",63:"Chuva",65:"Chuva forte",71:"Neve fraca",73:"Neve",75:"Neve forte",77:"Gr\xe3os de neve",80:"Aguaceiros fracos",81:"Aguaceiros",82:"Aguaceiros fortes",85:"Neve fraca",86:"Neve forte",95:"Trovoada",96:"Granizo",99:"Granizo forte"},y=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,v=(0,s.keyframes)`
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-6px) rotate(2deg); }
`,b=(0,s.keyframes)`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.85; transform: scale(1.08); }
`,j=o().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${y} 0.3s ease both;
  cursor: pointer;
  border-radius: ${l.w4.borderRadius.sm};
  position: relative;

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,_=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
`,$=o().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,k=o().span`
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.7;
  letter-spacing: 0.04em;
  white-space: nowrap;
`,z=o().div`
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
`,M=o().div`
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
    animation: ${b} 5s ease-in-out infinite;
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
  animation: ${v} 5s ease-in-out infinite;
`,C=o().div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,N=o().div`
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
`,S=o().div`
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
`,F=o().div`
  font-size: 16px;
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  margin-top: 10px;
  letter-spacing: -0.01em;
`,L=o().div`
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 3px;
`,A=o().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 12px;
  padding-top: 14px;
  border-top: 1px solid ${l.w4.colors.border};

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,G=o().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 2px 4px;
`,H=o().div`
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  gap: 4px;
`,I=o().div`
  font-size: 15px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,P=o().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.5;
`,Y=o().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  line-height: 1.45;
`,E=o().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.danger};
`;function K({locale:e}){var t;let i=(0,r.useMemo)(()=>(0,d.Nx)("pt"===e?"pt":"en",c.A),[e]),{forecast:a,failed:o}=(0,p.useWeather)({lat:h,lon:m,current:"temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day",daily:"temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max",timezone:"auto",cacheKey:"weather-lisbon-v3"}),s=()=>(0,l.VJ)("earth",{placeId:"lisbon"}),x=e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),s())};if(!a||!a.current||!a.daily)return(0,n.jsx)(j,{role:"link",tabIndex:0,onClick:s,onKeyDown:x,children:o?(0,n.jsxs)(Y,{role:"alert",children:[(0,n.jsx)(E,{children:i("widget.error.label")}),(0,n.jsx)("div",{children:i("widget.error.body")})]}):(0,n.jsx)(P,{children:i("widget.loading")})});let y=a.current,v=y.temperature_2m??0,b=y.apparent_temperature??v,R=y.relative_humidity_2m??0,W=y.weather_code??0,B=y.wind_speed_10m??0,J=1===y.is_day,O=(t=W,J?0===t?"#fbbf24":1===t?"#fcd34d":2===t?"#60a5fa":3===t?"#94a3b8":t>=95?"#c084fc":t>=51?"#38bdf8":t>=45?"#cbd5e1":"#60a5fa":t>=95?"#a78bfa":t>=51?"#60a5fa":"#818cf8"),U=a.daily??{},V=Math.round(U.temperature_2m_max?.[0]??v),q=Math.round(U.temperature_2m_min?.[0]??v),Q=Math.round(U.uv_index_max?.[0]??0),X=U.sunrise?.[0],Z=U.sunset?.[0],ee=Z?new Date(Z).getTime():NaN,et=Number.isFinite(ee)&&Date.now()<ee?"sunset":"sunrise",ei="sunset"===et?Z:U.sunrise?.[1]??X;return(0,n.jsxs)(j,{role:"link",tabIndex:0,onClick:s,onKeyDown:x,children:[(0,n.jsxs)(_,{children:[(0,n.jsxs)($,{children:["\uD83C\uDF24️ ",i("weather.city.lisbon")]}),(0,n.jsx)(k,{children:i("weather.openInEarth")})]}),(0,n.jsxs)(z,{children:[(0,n.jsx)(M,{accent:O,children:(0,n.jsx)(T,{children:!J&&W in u?u[W]:f[W]??"\uD83C\uDF21️"})}),(0,n.jsxs)(C,{children:[(0,n.jsxs)(N,{children:[(0,n.jsxs)(D,{accent:O,children:[Math.round(v),"\xb0"]}),(0,n.jsxs)(S,{children:[(0,n.jsxs)("div",{children:["▲ ",(0,n.jsxs)("span",{children:[V,"\xb0"]})]}),(0,n.jsxs)("div",{children:["▼ ",(0,n.jsxs)("span",{children:[q,"\xb0"]})]})]})]}),(0,n.jsx)(F,{children:("pt"===e?w:g)[W]??("pt"===e?"Desconhecido":"Unknown")}),(0,n.jsx)(L,{children:i("weather.feelsLike",{t:Math.round(b)})})]})]}),(0,n.jsxs)(A,{children:[(0,n.jsxs)(G,{children:[(0,n.jsxs)(H,{children:["\uD83D\uDCA7 ",i("weather.humidity")]}),(0,n.jsxs)(I,{children:[R,"%"]})]}),(0,n.jsxs)(G,{children:[(0,n.jsxs)(H,{children:["\uD83D\uDCA8 ",i("weather.wind")]}),(0,n.jsxs)(I,{children:[Math.round(B)," km/h"]})]}),(0,n.jsxs)(G,{children:[(0,n.jsxs)(H,{children:["☀️ ",i("weather.uv")]}),(0,n.jsx)(I,{children:Q})]}),(0,n.jsxs)(G,{children:[(0,n.jsxs)(H,{children:["sunset"===et?"\uD83C\uDF07":"\uD83C\uDF05"," ",i("sunset"===et?"weather.sunset":"weather.sunrise")]}),(0,n.jsx)(I,{children:ei?new Date(ei).toLocaleTimeString("pt"===e?"pt-PT":"en-GB",{hour:"2-digit",minute:"2-digit"}):"—"})]})]})]})}}}]);