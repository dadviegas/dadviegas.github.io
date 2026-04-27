"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["693"],{522(e,a,t){t.d(a,{C:()=>p,j:()=>c});let l={dal:{tmdb:{baseUrl:"https://api.themoviedb.org/3",imageBaseUrl:"https://image.tmdb.org/t/p",defaultTtlMs:18e5},wikipedia:{contentBaseUrl:"https://en.wikipedia.org/api/rest_v1",analyticsBaseUrl:"https://wikimedia.org/api/rest_v1",defaultTtlMs:36e5},sunriseSunset:{baseUrl:"https://api.sunrise-sunset.org/json",defaultTtlMs:864e5},openLibrary:{searchUrl:"https://openlibrary.org/search.json",coverBaseUrl:"https://covers.openlibrary.org/b/id",defaultTtlMs:2592e6},coinGecko:{baseUrl:"https://api.coingecko.com/api/v3",defaultTtlMs:3e5},openMeteo:{baseUrl:"https://api.open-meteo.com/v1",defaultTtlMs:9e5},hn:{algoliaBaseUrl:"https://hn.algolia.com/api/v1",firebaseBaseUrl:"https://hacker-news.firebaseio.com/v0",defaultTtlMs:3e5},github:{baseUrl:"https://api.github.com",defaultTtlMs:3e5},rss:{baseUrl:"https://api.rss2json.com/v1/api.json",defaultTtlMs:6e5},ipma:{baseUrl:"https://api.ipma.pt/open-data/observation/seismic",defaultTtlMs:18e5},usgs:{baseUrl:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary",defaultTtlMs:18e5},noaaSwpc:{baseUrl:"https://services.swpc.noaa.gov/json",defaultTtlMs:3e5},nasaEonet:{baseUrl:"https://eonet.gsfc.nasa.gov/api/v3",defaultTtlMs:18e5},airplanesLive:{baseUrl:"https://api.airplanes.live/v2",defaultTtlMs:15e3},rainViewer:{manifestUrl:"https://api.rainviewer.com/public/weather-maps.json",defaultTtlMs:3e5},npms:{baseUrl:"https://api.npms.io/v2",defaultTtlMs:3e5},npmRegistry:{baseUrl:"https://api.npmjs.org",defaultTtlMs:36e5},devTo:{baseUrl:"https://dev.to/api",defaultTtlMs:6e5},stackExchange:{baseUrl:"https://api.stackexchange.com/2.3",defaultTtlMs:6e5},itunesSearch:{baseUrl:"https://itunes.apple.com/search",defaultTtlMs:864e5},whereIsTheIss:{baseUrl:"https://api.wheretheiss.at/v1/satellites",defaultTtlMs:5e3},tle:{baseUrl:"https://tle.ivanstanojevic.me/api/tle",defaultTtlMs:36e5},groq:{chatCompletionsUrl:"https://api.groq.com/openai/v1/chat/completions",defaultModel:"llama-3.1-8b-instant",models:[{id:"llama-3.1-8b-instant",label:"Llama 3.1 \xb7 8B \xb7 instant",hint:"Fast default — good for short answers",vision:!1},{id:"llama-3.3-70b-versatile",label:"Llama 3.3 \xb7 70B \xb7 versatile",hint:"Slower but stronger reasoning",vision:!1},{id:"openai/gpt-oss-120b",label:"GPT-OSS \xb7 120B",hint:"Largest open-weights option",vision:!1},{id:"meta-llama/llama-4-scout-17b-16e-instruct",label:"Llama 4 \xb7 Scout \xb7 17B",hint:"Vision capable — analyzes images",vision:!0},{id:"meta-llama/llama-4-maverick-17b-128e-instruct",label:"Llama 4 \xb7 Maverick \xb7 17B",hint:"Vision capable — stronger multi-modal",vision:!0}]},gemini:{baseUrl:"https://generativelanguage.googleapis.com/v1beta/models",defaultModel:"gemini-2.0-flash",models:[{id:"gemini-2.0-flash",label:"Gemini 2.0 \xb7 Flash",hint:"Fast default — balanced quality"},{id:"gemini-2.0-flash-lite",label:"Gemini 2.0 \xb7 Flash Lite",hint:"Cheapest option"},{id:"gemini-1.5-flash",label:"Gemini 1.5 \xb7 Flash",hint:"Legacy — still supported"}]},pollinations:{imageBaseUrl:"https://image.pollinations.ai/prompt",defaultModel:"flux",models:[{id:"flux",label:"Flux"},{id:"flux-realism",label:"Flux \xb7 Realism"},{id:"flux-anime",label:"Flux \xb7 Anime"},{id:"flux-3d",label:"Flux \xb7 3D"},{id:"any-dark",label:"Any Dark"},{id:"turbo",label:"Turbo"}]}},locations:{lisbon:{lat:38.7223,lon:-9.1393,label:"Lisboa",timezone:"Europe/Lisbon"}}};function s(e){try{return"u">typeof process?process.env[e]:void 0}catch{return}}function i(e,a){let t=e;for(let e of a){if(!t||"object"!=typeof t)throw Error(`appConfig: missing path ${a.join(".")}`);t=t[e]}return t}function r(e,a){let t=s(a);if(t)return t;let r=i(l,e);if("string"!=typeof r)throw Error(`appConfig: expected string at ${e.join(".")}`);return r}function n(e,a){let t=s(a);if(void 0!==t&&""!==t){let e=Number(t);if(Number.isFinite(e))return e}let r=i(l,e);if("number"!=typeof r)throw Error(`appConfig: expected number at ${e.join(".")}`);return r}function o(e,a){let t=i(l,e);if(!Array.isArray(t))throw Error(`appConfig: expected array at ${e.join(".")}`);return Object.freeze(t.map((t,l)=>{try{return a(t)}catch(a){throw Error(`appConfig: invalid row at ${e.join(".")}[${l}]: ${a.message}`)}}))}function d(e){if("string"!=typeof e.id||"string"!=typeof e.label||"string"!=typeof e.hint)throw Error("expected { id, label, hint } strings");let a="boolean"==typeof e.vision?e.vision:void 0;return Object.freeze({id:e.id,label:e.label,hint:e.hint,...void 0!==a?{vision:a}:{}})}let p=Object.freeze({tmdb:Object.freeze({baseUrl:r(["dal","tmdb","baseUrl"],"TMDB_BASE_URL"),imageBaseUrl:r(["dal","tmdb","imageBaseUrl"],"TMDB_IMAGE_BASE_URL"),defaultTtlMs:n(["dal","tmdb","defaultTtlMs"],"TMDB_DEFAULT_TTL_MS")}),wikipedia:Object.freeze({contentBaseUrl:r(["dal","wikipedia","contentBaseUrl"],"WIKIPEDIA_CONTENT_BASE_URL"),analyticsBaseUrl:r(["dal","wikipedia","analyticsBaseUrl"],"WIKIPEDIA_ANALYTICS_BASE_URL"),defaultTtlMs:n(["dal","wikipedia","defaultTtlMs"],"WIKIPEDIA_DEFAULT_TTL_MS")}),sunriseSunset:Object.freeze({baseUrl:r(["dal","sunriseSunset","baseUrl"],"SUNRISE_SUNSET_BASE_URL"),defaultTtlMs:n(["dal","sunriseSunset","defaultTtlMs"],"SUNRISE_SUNSET_DEFAULT_TTL_MS")}),openLibrary:Object.freeze({searchUrl:r(["dal","openLibrary","searchUrl"],"OPEN_LIBRARY_SEARCH_URL"),coverBaseUrl:r(["dal","openLibrary","coverBaseUrl"],"OPEN_LIBRARY_COVER_BASE_URL"),defaultTtlMs:n(["dal","openLibrary","defaultTtlMs"],"OPEN_LIBRARY_DEFAULT_TTL_MS")}),coinGecko:Object.freeze({baseUrl:r(["dal","coinGecko","baseUrl"],"COINGECKO_BASE_URL"),defaultTtlMs:n(["dal","coinGecko","defaultTtlMs"],"COINGECKO_DEFAULT_TTL_MS")}),openMeteo:Object.freeze({baseUrl:r(["dal","openMeteo","baseUrl"],"OPEN_METEO_BASE_URL"),defaultTtlMs:n(["dal","openMeteo","defaultTtlMs"],"OPEN_METEO_DEFAULT_TTL_MS")}),hn:Object.freeze({algoliaBaseUrl:r(["dal","hn","algoliaBaseUrl"],"HN_ALGOLIA_BASE_URL"),firebaseBaseUrl:r(["dal","hn","firebaseBaseUrl"],"HN_FIREBASE_BASE_URL"),defaultTtlMs:n(["dal","hn","defaultTtlMs"],"HN_DEFAULT_TTL_MS")}),github:Object.freeze({baseUrl:r(["dal","github","baseUrl"],"GITHUB_BASE_URL"),defaultTtlMs:n(["dal","github","defaultTtlMs"],"GITHUB_DEFAULT_TTL_MS")}),rss:Object.freeze({baseUrl:r(["dal","rss","baseUrl"],"RSS_BASE_URL"),defaultTtlMs:n(["dal","rss","defaultTtlMs"],"RSS_DEFAULT_TTL_MS")}),ipma:Object.freeze({baseUrl:r(["dal","ipma","baseUrl"],"IPMA_BASE_URL"),defaultTtlMs:n(["dal","ipma","defaultTtlMs"],"IPMA_DEFAULT_TTL_MS")}),usgs:Object.freeze({baseUrl:r(["dal","usgs","baseUrl"],"USGS_BASE_URL"),defaultTtlMs:n(["dal","usgs","defaultTtlMs"],"USGS_DEFAULT_TTL_MS")}),whereIsTheIss:Object.freeze({baseUrl:r(["dal","whereIsTheIss","baseUrl"],"WHERE_IS_THE_ISS_BASE_URL"),defaultTtlMs:n(["dal","whereIsTheIss","defaultTtlMs"],"WHERE_IS_THE_ISS_DEFAULT_TTL_MS")}),tle:Object.freeze({baseUrl:r(["dal","tle","baseUrl"],"TLE_BASE_URL"),defaultTtlMs:n(["dal","tle","defaultTtlMs"],"TLE_DEFAULT_TTL_MS")}),groq:Object.freeze({chatCompletionsUrl:r(["dal","groq","chatCompletionsUrl"],"GROQ_CHAT_COMPLETIONS_URL"),defaultModel:r(["dal","groq","defaultModel"],"GROQ_DEFAULT_MODEL"),models:o(["dal","groq","models"],d)}),gemini:Object.freeze({baseUrl:r(["dal","gemini","baseUrl"],"GEMINI_BASE_URL"),defaultModel:r(["dal","gemini","defaultModel"],"GEMINI_DEFAULT_MODEL"),models:o(["dal","gemini","models"],d)}),pollinations:Object.freeze({imageBaseUrl:r(["dal","pollinations","imageBaseUrl"],"POLLINATIONS_IMAGE_BASE_URL"),defaultModel:r(["dal","pollinations","defaultModel"],"POLLINATIONS_DEFAULT_MODEL"),models:o(["dal","pollinations","models"],function(e){if("string"!=typeof e.id||"string"!=typeof e.label)throw Error("expected { id, label } strings");return Object.freeze({id:e.id,label:e.label})})}),noaaSwpc:Object.freeze({baseUrl:r(["dal","noaaSwpc","baseUrl"],"NOAA_SWPC_BASE_URL"),defaultTtlMs:n(["dal","noaaSwpc","defaultTtlMs"],"NOAA_SWPC_DEFAULT_TTL_MS")}),nasaEonet:Object.freeze({baseUrl:r(["dal","nasaEonet","baseUrl"],"NASA_EONET_BASE_URL"),defaultTtlMs:n(["dal","nasaEonet","defaultTtlMs"],"NASA_EONET_DEFAULT_TTL_MS")}),airplanesLive:Object.freeze({baseUrl:r(["dal","airplanesLive","baseUrl"],"AIRPLANES_LIVE_BASE_URL"),defaultTtlMs:n(["dal","airplanesLive","defaultTtlMs"],"AIRPLANES_LIVE_DEFAULT_TTL_MS")}),rainViewer:Object.freeze({manifestUrl:r(["dal","rainViewer","manifestUrl"],"RAIN_VIEWER_MANIFEST_URL"),defaultTtlMs:n(["dal","rainViewer","defaultTtlMs"],"RAIN_VIEWER_DEFAULT_TTL_MS")}),npms:Object.freeze({baseUrl:r(["dal","npms","baseUrl"],"NPMS_BASE_URL"),defaultTtlMs:n(["dal","npms","defaultTtlMs"],"NPMS_DEFAULT_TTL_MS")}),npmRegistry:Object.freeze({baseUrl:r(["dal","npmRegistry","baseUrl"],"NPM_REGISTRY_BASE_URL"),defaultTtlMs:n(["dal","npmRegistry","defaultTtlMs"],"NPM_REGISTRY_DEFAULT_TTL_MS")}),devTo:Object.freeze({baseUrl:r(["dal","devTo","baseUrl"],"DEV_TO_BASE_URL"),defaultTtlMs:n(["dal","devTo","defaultTtlMs"],"DEV_TO_DEFAULT_TTL_MS")}),stackExchange:Object.freeze({baseUrl:r(["dal","stackExchange","baseUrl"],"STACK_EXCHANGE_BASE_URL"),defaultTtlMs:n(["dal","stackExchange","defaultTtlMs"],"STACK_EXCHANGE_DEFAULT_TTL_MS")}),itunesSearch:Object.freeze({baseUrl:r(["dal","itunesSearch","baseUrl"],"ITUNES_SEARCH_BASE_URL"),defaultTtlMs:n(["dal","itunesSearch","defaultTtlMs"],"ITUNES_SEARCH_DEFAULT_TTL_MS")})}),c=Object.freeze({lisbon:Object.freeze({lat:n(["locations","lisbon","lat"],"LOCATION_LISBON_LAT"),lon:n(["locations","lisbon","lon"],"LOCATION_LISBON_LON"),label:r(["locations","lisbon","label"],"LOCATION_LISBON_LABEL"),timezone:r(["locations","lisbon","timezone"],"LOCATION_LISBON_TIMEZONE")})})},5940(e,a,t){t.d(a,{WeatherWidget:()=>F});var l=t(5723),s=t(7991),i=t(6859),r=t.n(i),n=t(2799),o=t(6063),d=t(3236),p=t(8170),c=t(8975),f=t(1855),u=t(522),m=t(2306),h=t(6246);let _=u.j.lisbon.lat,b=u.j.lisbon.lon,T={0:"☀️",1:"\uD83C\uDF24️",2:"⛅",3:"☁️",45:"\uD83C\uDF2B️",48:"\uD83C\uDF2B️",51:"\uD83C\uDF26️",53:"\uD83C\uDF26️",55:"\uD83C\uDF27️",61:"\uD83C\uDF27️",63:"\uD83C\uDF27️",65:"\uD83C\uDF27️",71:"\uD83C\uDF28️",73:"\uD83C\uDF28️",75:"\uD83C\uDF28️",77:"\uD83C\uDF28️",80:"\uD83C\uDF26️",81:"\uD83C\uDF27️",82:"\uD83C\uDF27️",85:"\uD83C\uDF28️",86:"\uD83C\uDF28️",95:"⛈️",96:"⛈️",99:"⛈️"},g={0:"\uD83C\uDF19",1:"\uD83C\uDF19",2:"☁️",3:"☁️"},U={0:"Clear sky",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Foggy",48:"Rime fog",51:"Light drizzle",53:"Drizzle",55:"Dense drizzle",61:"Light rain",63:"Rain",65:"Heavy rain",71:"Light snow",73:"Snow",75:"Heavy snow",77:"Snow grains",80:"Light showers",81:"Showers",82:"Heavy showers",85:"Light snow showers",86:"Snow showers",95:"Thunderstorm",96:"Hail storm",99:"Severe hail storm"},M={0:"C\xe9u limpo",1:"Pouco nublado",2:"Parcialmente nublado",3:"Encoberto",45:"Nevoeiro",48:"Nevoeiro gelado",51:"Chuviscos leves",53:"Chuviscos",55:"Chuviscos densos",61:"Chuva fraca",63:"Chuva",65:"Chuva forte",71:"Neve fraca",73:"Neve",75:"Neve forte",77:"Gr\xe3os de neve",80:"Aguaceiros fracos",81:"Aguaceiros",82:"Aguaceiros fortes",85:"Neve fraca",86:"Neve forte",95:"Trovoada",96:"Granizo",99:"Granizo forte"},E=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,L=(0,n.keyframes)`
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-6px) rotate(2deg); }
`,x=(0,n.keyframes)`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.85; transform: scale(1.08); }
`,S=r().div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: ${o.w4.borderRadius.sm};
  animation: ${E} 0.25s ease both;

  &:focus-visible {
    outline: 2px solid ${o.w4.colors.accent};
    outline-offset: 2px;
  }
`,v=r().span`
  font-size: 11px;
  font-family: ${o.w4.typography.fontFamilyMono};
  color: ${o.w4.colors.mainTextMuted};
  opacity: 0.7;
  letter-spacing: 0.04em;
  white-space: nowrap;
`,w=r().div`
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
`,A=r().div`
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
    animation: ${x} 5s ease-in-out infinite;
    pointer-events: none;
  }

  @media (max-width: 520px) {
    width: 92px;
    height: 92px;
  }
`,y=r().div`
  font-size: clamp(56px, 18vw, 84px);
  line-height: 1;
  position: relative;
  z-index: 1;
  animation: ${L} 5s ease-in-out infinite;
`,j=r().div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,O=r().div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`,I=r().div`
  font-size: clamp(48px, 16vw, 76px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  background: linear-gradient(
    135deg,
    ${o.w4.colors.mainText} 20%,
    ${({accent:e})=>e} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`,B=r().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 11px;
  font-family: ${o.w4.typography.fontFamilyMono};
  color: ${o.w4.colors.mainTextMuted};
  letter-spacing: 0.04em;
  padding-bottom: 6px;

  span {
    font-weight: 700;
    color: ${o.w4.colors.mainText};
  }
`,N=r().div`
  font-size: 16px;
  font-weight: 600;
  color: ${o.w4.colors.mainText};
  margin-top: 10px;
  letter-spacing: -0.01em;
`,R=r().div`
  font-size: ${o.w4.typography.fontSizeSm};
  color: ${o.w4.colors.mainTextMuted};
  margin-top: 3px;
`,z=r().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 12px;
  padding-top: 14px;
  border-top: 1px solid ${o.w4.colors.border};

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,k=r().div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 2px 4px;
`,D=r().div`
  font-size: 11px;
  font-family: ${o.w4.typography.fontFamilyMono};
  color: ${o.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  gap: 4px;
`,C=r().div`
  font-size: ${o.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${o.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`;function F({locale:e}){var a;let t=(0,s.useMemo)(()=>(0,p.Nx)("pt"===e?"pt":"en",c.A),[e]),{forecast:i,failed:r}=(0,f.useWeather)({lat:_,lon:b,current:"temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day",daily:"temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max",timezone:"auto",cacheKey:"weather-lisbon-v3"}),n=()=>(0,o.VJ)("earth",{placeId:"lisbon"}),u=i&&i.current?i.current:null,E=i&&i.daily?i.daily:null,L=null!==u&&null!==E,x=u?.temperature_2m??0,G=u?.apparent_temperature??x,$=u?.relative_humidity_2m??0,P=u?.weather_code??0,H=u?.wind_speed_10m??0,V=u?.is_day===1,W=L?(a=P,V?0===a?"#fbbf24":1===a?"#fcd34d":2===a?"#60a5fa":3===a?"#94a3b8":a>=95?"#c084fc":a>=51?"#38bdf8":a>=45?"#cbd5e1":"#60a5fa":a>=95?"#a78bfa":a>=51?"#60a5fa":"#818cf8"):m.A.accentColor,Y=Math.round(E?.temperature_2m_max?.[0]??x),q=Math.round(E?.temperature_2m_min?.[0]??x),K=Math.round(E?.uv_index_max?.[0]??0),Q=E?.sunrise?.[0],X=E?.sunset?.[0],J=X?new Date(X).getTime():NaN,Z=Number.isFinite(J)&&Date.now()<J?"sunset":"sunrise",ee="sunset"===Z?X:E?.sunrise?.[1]??Q;return(0,l.jsx)(d.rl,{title:t("weather.city.lisbon"),accessory:(0,l.jsx)(v,{children:t("weather.openInEarth")}),accentColor:W,error:r&&!L?t("widget.error.body"):void 0,errorLabel:r&&!L?t("widget.error.label"):void 0,children:L||r?L?(0,l.jsxs)(S,{role:"link",tabIndex:0,onClick:n,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),n())},children:[(0,l.jsxs)(w,{children:[(0,l.jsx)(A,{accent:W,children:(0,l.jsx)(y,{children:!V&&P in g?g[P]:T[P]??"\uD83C\uDF21️"})}),(0,l.jsxs)(j,{children:[(0,l.jsxs)(O,{children:[(0,l.jsxs)(I,{accent:W,children:[Math.round(x),"\xb0"]}),(0,l.jsxs)(B,{children:[(0,l.jsxs)("div",{children:["▲ ",(0,l.jsxs)("span",{children:[Y,"\xb0"]})]}),(0,l.jsxs)("div",{children:["▼ ",(0,l.jsxs)("span",{children:[q,"\xb0"]})]})]})]}),(0,l.jsx)(N,{children:("pt"===e?M:U)[P]??("pt"===e?"Desconhecido":"Unknown")}),(0,l.jsx)(R,{children:t("weather.feelsLike",{t:Math.round(G)})})]})]}),(0,l.jsxs)(z,{children:[(0,l.jsxs)(k,{children:[(0,l.jsxs)(D,{children:["\uD83D\uDCA7 ",t("weather.humidity")]}),(0,l.jsxs)(C,{children:[$,"%"]})]}),(0,l.jsxs)(k,{children:[(0,l.jsxs)(D,{children:["\uD83D\uDCA8 ",t("weather.wind")]}),(0,l.jsxs)(C,{children:[Math.round(H)," km/h"]})]}),(0,l.jsxs)(k,{children:[(0,l.jsxs)(D,{children:["☀️ ",t("weather.uv")]}),(0,l.jsx)(C,{children:K})]}),(0,l.jsxs)(k,{children:[(0,l.jsxs)(D,{children:["sunset"===Z?"\uD83C\uDF07":"\uD83C\uDF05"," ",t("sunset"===Z?"weather.sunset":"weather.sunrise")]}),(0,l.jsx)(C,{children:ee?new Date(ee).toLocaleTimeString("pt"===e?"pt-PT":"en-GB",{hour:"2-digit",minute:"2-digit"}):"—"})]})]})]}):null:(0,l.jsx)(h.YG,{mode:"loading",label:t("widget.loading")})})}}}]);