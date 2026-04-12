"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[188],{188(e,t,r){var o=r(7359),a=r(8997),n=r(3233),l=r(4079),i=r(5375),s=r(3792),c=r(9775),d=r(8599),u=r(2535),p=r(6894),g=r(7446),f=r(2290),h=r(6210),m=r(5723);const x="earth",b="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",w=n.default.div`
  flex: 1;
  min-height: 0;
  height: 100%;
  width: 100%;

  .leaflet-container {
    height: 100%;
    width: 100%;
    background: ${l.w4.colors.mainBg};
  }

  /* Dark-mode tile filter — disabled for satellite imagery */
  .leaflet-tile-pane {
    filter: ${({satellite:e})=>e?"none":"invert(1) hue-rotate(180deg) brightness(0.85) contrast(0.9)"};
  }

  /* Flag marker */
  .flag-marker {
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
    user-select: none;
    filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.7));
    transition: transform 0.15s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flag-marker:hover  { transform: scale(1.25); }
  .flag-marker.active { transform: scale(1.35); filter: drop-shadow(0 0 6px rgba(88, 166, 255, 0.9)); }
`,y=n.default.div`
  height: 28px;
  min-height: 28px;
  background: ${l.w4.colors.sidebarBg};
  border-top: 1px solid ${l.w4.colors.sidebarBorder};
  display: flex;
  align-items: center;
  padding: 0 ${l.w4.spacing.md};
  gap: ${l.w4.spacing.lg};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,v=n.default.span`opacity: 0.3;`,k=n.default.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,S=n.default.div`
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  overflow: hidden;
`,$=n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${({active:e})=>e?"rgba(88,166,255,0.12)":"none"};
  border: 1px solid ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.md};
  cursor: pointer;
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  font-family: ${l.w4.typography.fontFamily};
  transition: background 0.15s, color 0.15s, border-color 0.15s;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.sidebarText};
    border-color: ${l.w4.colors.sidebarText};
  }
`,j=n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.md};
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  font-family: ${l.w4.typography.fontFamily};
  transition: background 0.15s, color 0.15s, border-color 0.15s;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.sidebarText};
    border-color: ${l.w4.colors.sidebarText};
  }
`,E=n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.md};
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  font-family: ${l.w4.typography.fontFamily};
  transition: background 0.15s, color 0.15s, border-color 0.15s;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.sidebarText};
    border-color: ${l.w4.colors.sidebarText};
  }
`,z=n.default.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  width: min(520px, calc(100vw - 32px));
  background: rgba(13, 17, 23, 0.95);
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.md};
  box-shadow: 0 8px 32px rgba(0,0,0,.6);
  z-index: 700;
  overflow: hidden;
  display: ${({visible:e})=>e?"flex":"none"};
  flex-direction: column;
  backdrop-filter: blur(8px);
`,F=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
`,T=n.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`,M=n.default.button`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: 14px;
  border-radius: 4px;
  &:hover { background: ${l.w4.colors.sidebarHover}; color: ${l.w4.colors.mainText}; }
`,C=n.default.pre`
  margin: 0;
  padding: 12px 14px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  line-height: 1.65;
  color: ${l.w4.colors.mainTextMuted};
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 280px;
`,A=n.default.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(13,17,23,.85);
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-radius: 6px;
  padding: 4px 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  pointer-events: none;
  white-space: nowrap;
  z-index: 600;
  backdrop-filter: blur(4px);
  animation: fadeOut 3s ease forwards;

  @keyframes fadeOut {
    0%   { opacity: 1; }
    60%  { opacity: 1; }
    100% { opacity: 0; }
  }
`,R="atlantis:earth:recent";function I(){try{return JSON.parse(localStorage.getItem(R)??"[]")}catch{return[]}}function L(e,t){const r=[t,...e.filter(e=>e!==t)].slice(0,8);return function(e){try{localStorage.setItem(R,JSON.stringify(e))}catch{}}(r),r}function N(e,t){return`${Math.abs(e).toFixed(3)}°${e>=0?"N":"S"}, ${Math.abs(t).toFixed(3)}°${t>=0?"E":"W"}`}function B({topBarRight:e}){const t=(0,o.useRef)(null),r=(0,o.useRef)(null),a=(0,o.useRef)(new Map),n=(0,o.useRef)(null),[R,B]=(0,o.useState)({lat:0,lng:0,zoom:2}),[O,W]=(0,o.useState)(!1),[H,q]=(0,o.useState)(null),[_,D]=(0,o.useState)(null),[G,P]=(0,o.useState)(I),[J,Z]=(0,o.useState)(()=>new Date),[U,K]=(0,o.useState)(null),[Q,V]=(0,o.useState)(!1),[X,Y]=(0,o.useState)(!1),[ee,te]=(0,o.useState)(null),[re,oe]=(0,o.useState)(!0),[ae,ne]=(0,o.useState)(!0),[le,ie]=(0,o.useState)(!1),[se,ce]=(0,o.useState)(!1),[de,ue]=(0,o.useState)(!1),[pe,ge]=(0,o.useState)(!1),[fe,he]=(0,o.useState)(!1),[me,xe]=(0,o.useState)(!1),[be,we]=(0,o.useState)(!1),[ye,ve]=(0,o.useState)(!1);(0,o.useEffect)(()=>{const e=setInterval(()=>Z(new Date),1e3);return()=>clearInterval(e)},[]),(0,o.useEffect)(()=>{!async function(){try{if((await(0,l.Iu)(x)).length>0)return;const e={version:1,layers:{satellite:!1,showFlags:!0,night:!0,aurora:!1,iss:!1,quakes:!1,fires:!1,radar:!1,flights:!1,measure:!1},note:'Earth — Layer Enhancements\n\nNEW LAYERS\n  🌌 Aurora    NOAA SWPC aurora oval + live Kp index badge\n  🔥 Fires     NASA EONET active wildfire markers (30-min refresh)\n  📏 Measure   Click 2 points → great-circle distance (km / nm / mi)\n\nFLIGHTS  ✈\n  Altitude color   grey = ground  orange = <10k ft  amber = <25k ft  blue = cruise\n  Position trail   last 15 positions drawn behind each aircraft\n  Stale pruning    aircraft auto-removed after ~50 s without a ping\n  Follow mode      "📍 Follow" in popup — map pans to track the plane\n\nISS  🛸\n  Footprint circle   ~2 316 km radius showing who can currently see the ISS\n\nWEATHER PANEL\n  Temperature chart  hourly actual + feels-like dual-line SVG chart\n  Feels-like + RH    current-hour apparent temperature & relative humidity\n  AQI badge          US Air Quality Index from Open-Meteo (color-coded)\n\nMAP\n  🛰 Satellite   ESRI World Imagery tiles (dark-mode filter auto-disabled)\n  Right-click    instant weather panel for any coordinate on the map\n'};await(0,l.KL)(x,"Earth Changelog — Apr 2026",JSON.stringify(e))}catch{}}()},[]);const ke=(0,o.useCallback)(()=>({satellite:ye,showFlags:re,night:ae,aurora:fe,iss:le,quakes:se,fires:me,radar:de,flights:pe,measure:be}),[ye,re,ae,fe,le,se,me,de,pe,be]),Se=(0,o.useCallback)(async e=>{const t={version:1,layers:ke()};await(0,l.KL)(x,e,JSON.stringify(t)),Y(!1)},[ke]),$e=((0,o.useCallback)(e=>{try{const t=JSON.parse(e);if(1!==t.version)return;const r=t.layers;ve(r.satellite),oe(r.showFlags),ne(r.night),he(r.aurora),ie(r.iss),ce(r.quakes),xe(r.fires),ue(r.radar),ge(r.flights),we(r.measure),t.note&&te(t.note)}catch{}},[]),(0,o.useCallback)(e=>{const t=l.rh.find(t=>t.id===e);t&&r.current&&(r.current.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),q(e),D({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),P(t=>L(t,e)))},[]));(0,o.useEffect)(()=>{n.current&&n.current.setUrl(ye?"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}":b)},[ye]),(0,o.useEffect)(()=>{a.current.forEach((e,t)=>{const r=e.getElement()?.querySelector(".flag-marker");r&&r.classList.toggle("active",t===H)})},[H]),(0,o.useEffect)(()=>{U&&a.current.forEach(e=>{re?e.addTo(U):e.remove()})},[re,U]),(0,o.useEffect)(()=>{!function(e){if(document.querySelector(`link[href="${e}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),function(e){return new Promise((t,r)=>{if(document.querySelector(`script[src="${e}"]`))return void t();const o=document.createElement("script");o.src=e,o.onload=()=>t(),o.onerror=r,document.head.appendChild(o)})}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js").then(()=>W(!0))},[]),(0,o.useEffect)(()=>{if(!O||!t.current||r.current)return;const e=window.L,o=e.map(t.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1}),i=e.tileLayer(b,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',maxZoom:19}).addTo(o);return n.current=i,o.on("mousemove",e=>{B(t=>({...t,lat:e.latlng.lat,lng:e.latlng.lng}))}),o.on("zoomend",()=>{B(e=>({...e,zoom:o.getZoom()}))}),o.on("contextmenu",e=>{const{lat:t,lng:r}=e.latlng,o=`custom-${t.toFixed(4)}-${r.toFixed(4)}`;q(null),D({id:o,name:N(t,r),lat:t,lng:r}),V(!0),setTimeout(()=>V(!1),3200)}),l.rh.forEach(t=>{const r=e.divIcon({html:`<div class="flag-marker">${t.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),n=e.marker([t.lat,t.lng],{icon:r});n.on("click",()=>{o.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),q(t.id),D({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),P(e=>L(e,t.id))}),n.addTo(o),a.current.set(t.id,n)}),r.current=o,K(o),()=>{a.current.clear(),n.current=null,o.remove(),r.current=null,K(null)}},[O]);const je=(0,o.useMemo)(()=>H?l.rh.find(e=>e.id===H)??null:null,[H]),Ee=(0,o.useMemo)(()=>(0,l.qs)(G),[G]),ze=R.zoom>=5,Fe=[{label:"🛰 Satellite",active:ye,toggle:()=>ve(e=>!e),title:"Switch to satellite imagery"},{label:"🚩 Flags",active:re,toggle:()=>oe(e=>!e),title:"Toggle place markers"},{label:"🌑 Night",active:ae,toggle:()=>ne(e=>!e),title:"Day/night terminator"},{label:"🌌 Aurora",active:fe,toggle:()=>he(e=>!e),title:"Aurora forecast — NOAA SWPC"},{label:"🛸 ISS",active:le,toggle:()=>ie(e=>!e),title:"ISS live position + footprint"},{label:"🌍 Quakes",active:se,toggle:()=>ce(e=>!e),title:"Earthquakes — USGS past month"},{label:"🔥 Fires",active:me,toggle:()=>xe(e=>!e),title:"Active wildfires — NASA EONET"},{label:"🌧 Radar",active:de,toggle:()=>ue(e=>!e),title:"Weather radar — RainViewer"},{label:pe&&!ze?"✈ Zoom in":"✈ Flights",active:pe,toggle:()=>ge(e=>!e),title:pe&&!ze?"Zoom to level 5+ to see flights":"Live flight traffic — altitude-coded"},{label:be?"📏 Measuring…":"📏 Measure",active:be,toggle:()=>we(e=>!e),title:"Click two points to measure great-circle distance"}],Te=(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(E,{onClick:()=>Y(!0),title:"Save current view",children:[(0,m.jsxs)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,m.jsx)("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),(0,m.jsx)("polyline",{points:"17 21 17 13 7 13 7 21"}),(0,m.jsx)("polyline",{points:"7 3 7 8 15 8"})]}),"Save"]})}),Me=(0,m.jsxs)(j,{onClick:()=>{r.current?.flyTo([20,0],2,{duration:1.2}),q(null),D(null)},title:"Reset to world view",children:[(0,m.jsxs)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,m.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,m.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,m.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),"World"]}),Ce=(0,m.jsx)(l.CD,{entries:Ee,activeId:H,onSelect:function(e){e.id.startsWith("country-")||"__recent__"===e.id||$e(e.id)}});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.PE,{title:"Earth",sidebar:Ce,activeId:H,topBarRight:(0,m.jsxs)(m.Fragment,{children:[Fe.map(e=>(0,m.jsx)($,{active:e.active,onClick:e.toggle,title:e.title,children:e.label},e.label)),Me,Te,e]}),children:(0,m.jsxs)(k,{children:[(0,m.jsxs)(S,{children:[(0,m.jsx)(w,{satellite:ye,children:(0,m.jsx)("div",{ref:t,style:{height:"100%",width:"100%"}})}),(0,m.jsx)(c.d,{map:U,enabled:ae}),(0,m.jsx)(p.c,{map:U,enabled:de}),(0,m.jsx)(u.l,{map:U,enabled:se}),(0,m.jsx)(g.w,{map:U,enabled:fe}),(0,m.jsx)(f.w,{map:U,enabled:me}),(0,m.jsx)(s.G,{map:U,enabled:pe,zoom:R.zoom}),(0,m.jsx)(d.D,{map:U,enabled:le}),(0,m.jsx)(h.q,{map:U,enabled:be}),Q&&(0,m.jsx)(A,{children:"Right-click anywhere for instant weather"}),(0,m.jsxs)(z,{visible:!!ee,children:[(0,m.jsxs)(F,{children:[(0,m.jsx)(T,{children:"Document note"}),(0,m.jsx)(M,{onClick:()=>te(null),children:"✕"})]}),(0,m.jsx)(C,{children:ee??""})]}),(0,m.jsx)(i.v,{place:_,onClose:()=>{q(null),D(null)}})]}),(0,m.jsxs)(y,{children:[(0,m.jsxs)("span",{children:["Lat: ",R.lat.toFixed(4)]}),(0,m.jsxs)("span",{children:["Lng: ",R.lng.toFixed(4)]}),(0,m.jsxs)("span",{children:["Zoom: ",R.zoom]}),(0,m.jsx)(v,{children:"|"}),(0,m.jsxs)("span",{children:["UTC ",(0,l.u6)(J)]}),je&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{children:"·"}),(0,m.jsxs)("span",{children:[je.flag," ",je.name," ",(0,l.w3)(J,je.timezone)]}),(0,m.jsx)(v,{children:"·"}),(0,m.jsx)("span",{children:(0,l.$L)(J,je.timezone)})]}),(0,m.jsx)("span",{style:{marginLeft:"auto"},children:ye?"© Esri, DigitalGlobe, GeoEye":"© OpenStreetMap contributors"})]})]})}),X&&(0,m.jsx)(l.MJ,{onSave:Se,onCancel:()=>Y(!1)})]})}const O=document.getElementById("root");if(!O)throw new Error("Root element #root not found");(0,a.H)(O).render((0,m.jsx)(B,{}))},8997(e,t,r){var o=r(8991);t.H=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=188.f2cf967a3ee8f51b967f.js.map