"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["6693"],{15940(e,i,t){t.d(i,{WeatherWidget:()=>P});var r=t(65723),n=t(37991),a=t(36859),o=t.n(a),s=t(72799),l=t(6063),d=t(63236),c=t(28170),p=t(98975),h=t(22004),x=t(30522),m=t(52306),u=t(64443);let f=x.j.lisbon.lat,w=x.j.lisbon.lon,g={0:"☀️",1:"\uD83C\uDF24️",2:"⛅",3:"☁️",45:"\uD83C\uDF2B️",48:"\uD83C\uDF2B️",51:"\uD83C\uDF26️",53:"\uD83C\uDF26️",55:"\uD83C\uDF27️",61:"\uD83C\uDF27️",63:"\uD83C\uDF27️",65:"\uD83C\uDF27️",71:"\uD83C\uDF28️",73:"\uD83C\uDF28️",75:"\uD83C\uDF28️",77:"\uD83C\uDF28️",80:"\uD83C\uDF26️",81:"\uD83C\uDF27️",82:"\uD83C\uDF27️",85:"\uD83C\uDF28️",86:"\uD83C\uDF28️",95:"⛈️",96:"⛈️",99:"⛈️"},v={0:"\uD83C\uDF19",1:"\uD83C\uDF19",2:"☁️",3:"☁️"},y={0:"Clear sky",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Foggy",48:"Rime fog",51:"Light drizzle",53:"Drizzle",55:"Dense drizzle",61:"Light rain",63:"Rain",65:"Heavy rain",71:"Light snow",73:"Snow",75:"Heavy snow",77:"Snow grains",80:"Light showers",81:"Showers",82:"Heavy showers",85:"Light snow showers",86:"Snow showers",95:"Thunderstorm",96:"Hail storm",99:"Severe hail storm"},b={0:"C\xe9u limpo",1:"Pouco nublado",2:"Parcialmente nublado",3:"Encoberto",45:"Nevoeiro",48:"Nevoeiro gelado",51:"Chuviscos leves",53:"Chuviscos",55:"Chuviscos densos",61:"Chuva fraca",63:"Chuva",65:"Chuva forte",71:"Neve fraca",73:"Neve",75:"Neve forte",77:"Gr\xe3os de neve",80:"Aguaceiros fracos",81:"Aguaceiros",82:"Aguaceiros fortes",85:"Neve fraca",86:"Neve forte",95:"Trovoada",96:"Granizo",99:"Granizo forte"},j=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,_=o().div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: ${l.w4.borderRadius.sm};
  animation: ${j} 0.25s ease both;

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,k=o().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.7;
  letter-spacing: 0.04em;
  white-space: nowrap;
`,$=o().div`
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
`,z=o().div`
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
      ${({accent:e})=>e}33 0%,
      ${({accent:e})=>e}11 40%,
      transparent 70%
    );
    pointer-events: none;
  }

  @media (max-width: 520px) {
    width: 92px;
    height: 92px;
  }
`,M=o().div`
  font-size: clamp(56px, 18vw, 84px);
  line-height: 1;
  position: relative;
  z-index: 1;
`,C=o().div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,T=o().div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`,N=o().div`
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
`,D=o().div`
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
`,L=o().div`
  font-size: 13px;
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  margin-top: 10px;
`,S=o().div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 3px;
`,F=o().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 12px;
  padding-top: 14px;
  border-top: 1px solid ${l.w4.colors.border};

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,A=o().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 2px 4px;
`,G=o().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  gap: 4px;
`,H=o().div`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`;function P({locale:e}){var i;let t=(0,n.useMemo)(()=>(0,c.Nx)("pt"===e?"pt":"en",p.A),[e]),{forecast:a,failed:o}=(0,h.useWeather)({lat:f,lon:w,current:"temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day",daily:"temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max",timezone:"auto",cacheKey:"weather-lisbon-v3"}),s=()=>(0,l.VJ)("earth",{placeId:"lisbon"}),x=a&&a.current?a.current:null,j=a&&a.daily?a.daily:null,E=null!==x&&null!==j,I=x?.temperature_2m??0,R=x?.apparent_temperature??I,W=x?.relative_humidity_2m??0,Y=x?.weather_code??0,K=x?.wind_speed_10m??0,B=x?.is_day===1,J=E?(i=Y,B?0===i?"#fbbf24":1===i?"#fcd34d":2===i?"#60a5fa":3===i?"#94a3b8":i>=95?"#c084fc":i>=51?"#38bdf8":i>=45?"#cbd5e1":"#60a5fa":i>=95?"#a78bfa":i>=51?"#60a5fa":"#818cf8"):m.A.accentColor,O=Math.round(j?.temperature_2m_max?.[0]??I),U=Math.round(j?.temperature_2m_min?.[0]??I),V=Math.round(j?.uv_index_max?.[0]??0),q=j?.sunrise?.[0],Q=j?.sunset?.[0],X=Q?new Date(Q).getTime():NaN,Z=Number.isFinite(X)&&Date.now()<X?"sunset":"sunrise",ee="sunset"===Z?Q:j?.sunrise?.[1]??q;return(0,r.jsx)(d.rl,{title:t("weather.city.lisbon"),accessory:(0,r.jsx)(k,{children:t("weather.openInEarth")}),accentColor:J,error:o&&!E?t("widget.error.body"):void 0,errorLabel:o&&!E?t("widget.error.label"):void 0,children:E||o?E?(0,r.jsxs)(_,{role:"link",tabIndex:0,onClick:s,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),s())},children:[(0,r.jsxs)($,{children:[(0,r.jsx)(z,{accent:J,children:(0,r.jsx)(M,{children:!B&&Y in v?v[Y]:g[Y]??"\uD83C\uDF21️"})}),(0,r.jsxs)(C,{children:[(0,r.jsxs)(T,{children:[(0,r.jsxs)(N,{accent:J,children:[Math.round(I),"\xb0"]}),(0,r.jsxs)(D,{children:[(0,r.jsxs)("div",{children:["▲ ",(0,r.jsxs)("span",{children:[O,"\xb0"]})]}),(0,r.jsxs)("div",{children:["▼ ",(0,r.jsxs)("span",{children:[U,"\xb0"]})]})]})]}),(0,r.jsx)(L,{children:("pt"===e?b:y)[Y]??("pt"===e?"Desconhecido":"Unknown")}),(0,r.jsx)(S,{children:t("weather.feelsLike",{t:Math.round(R)})})]})]}),(0,r.jsxs)(F,{children:[(0,r.jsxs)(A,{children:[(0,r.jsxs)(G,{children:["\uD83D\uDCA7 ",t("weather.humidity")]}),(0,r.jsxs)(H,{children:[W,"%"]})]}),(0,r.jsxs)(A,{children:[(0,r.jsxs)(G,{children:["\uD83D\uDCA8 ",t("weather.wind")]}),(0,r.jsxs)(H,{children:[Math.round(K)," km/h"]})]}),(0,r.jsxs)(A,{children:[(0,r.jsxs)(G,{children:["☀️ ",t("weather.uv")]}),(0,r.jsx)(H,{children:V})]}),(0,r.jsxs)(A,{children:[(0,r.jsxs)(G,{children:["sunset"===Z?"\uD83C\uDF07":"\uD83C\uDF05"," ",t("sunset"===Z?"weather.sunset":"weather.sunrise")]}),(0,r.jsx)(H,{children:ee?new Date(ee).toLocaleTimeString("pt"===e?"pt-PT":"en-GB",{hour:"2-digit",minute:"2-digit"}):"—"})]})]})]}):null:(0,r.jsx)(u.YG,{mode:"loading",label:t("widget.loading")})})}}}]);