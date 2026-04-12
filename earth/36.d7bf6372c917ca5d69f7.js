"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[36],{6036(e,t,r){r.r(t),r.d(t,{default:()=>N});var o=r(7359),a=r(3233),n=r(4079),l=r(5375),i=r(3792),s=r(9775),c=r(8599),d=r(2535),u=r(6894),p=r(7446),g=r(2290),f=r(6210),h=r(5723);const m="earth",x="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",b=a.default.div`
  flex: 1;
  min-height: 0;
  height: 100%;
  width: 100%;

  .leaflet-container {
    height: 100%;
    width: 100%;
    background: ${n.w4.colors.mainBg};
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
`,w=a.default.div`
  height: 28px;
  min-height: 28px;
  background: ${n.w4.colors.sidebarBg};
  border-top: 1px solid ${n.w4.colors.sidebarBorder};
  display: flex;
  align-items: center;
  padding: 0 ${n.w4.spacing.md};
  gap: ${n.w4.spacing.lg};
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,y=a.default.span`opacity: 0.3;`,v=a.default.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,k=a.default.div`
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  overflow: hidden;
`,S=a.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${({active:e})=>e?"rgba(88,166,255,0.12)":"none"};
  border: 1px solid ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.sidebarTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  font-family: ${n.w4.typography.fontFamily};
  transition: background 0.15s, color 0.15s, border-color 0.15s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.sidebarText};
    border-color: ${n.w4.colors.sidebarText};
  }
`,$=a.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  font-family: ${n.w4.typography.fontFamily};
  transition: background 0.15s, color 0.15s, border-color 0.15s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.sidebarText};
    border-color: ${n.w4.colors.sidebarText};
  }
`,j=a.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  font-family: ${n.w4.typography.fontFamily};
  transition: background 0.15s, color 0.15s, border-color 0.15s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.sidebarText};
    border-color: ${n.w4.colors.sidebarText};
  }
`,z=a.default.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  width: min(520px, calc(100vw - 32px));
  background: rgba(13, 17, 23, 0.95);
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.md};
  box-shadow: 0 8px 32px rgba(0,0,0,.6);
  z-index: 700;
  overflow: hidden;
  display: ${({visible:e})=>e?"flex":"none"};
  flex-direction: column;
  backdrop-filter: blur(8px);
`,E=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
`,F=a.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`,T=a.default.button`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: 14px;
  border-radius: 4px;
  &:hover { background: ${n.w4.colors.sidebarHover}; color: ${n.w4.colors.mainText}; }
`,M=a.default.pre`
  margin: 0;
  padding: 12px 14px;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  line-height: 1.65;
  color: ${n.w4.colors.mainTextMuted};
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 280px;
`,C=a.default.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(13,17,23,.85);
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: 6px;
  padding: 4px 12px;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.mainTextMuted};
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
`,A="atlantis:earth:recent";function I(){try{return JSON.parse(localStorage.getItem(A)??"[]")}catch{return[]}}function R(e,t){const r=[t,...e.filter(e=>e!==t)].slice(0,8);return function(e){try{localStorage.setItem(A,JSON.stringify(e))}catch{}}(r),r}function L(e,t){return`${Math.abs(e).toFixed(3)}°${e>=0?"N":"S"}, ${Math.abs(t).toFixed(3)}°${t>=0?"E":"W"}`}function N({topBarRight:e}){const t=(0,o.useRef)(null),r=(0,o.useRef)(null),a=(0,o.useRef)(new Map),A=(0,o.useRef)(null),[N,O]=(0,o.useState)({lat:0,lng:0,zoom:2}),[B,W]=(0,o.useState)(!1),[q,_]=(0,o.useState)(null),[D,H]=(0,o.useState)(null),[G,P]=(0,o.useState)(I),[J,Z]=(0,o.useState)(()=>new Date),[U,K]=(0,o.useState)(null),[Q,V]=(0,o.useState)(!1),[X,Y]=(0,o.useState)(!1),[ee,te]=(0,o.useState)(null),[re,oe]=(0,o.useState)(!0),[ae,ne]=(0,o.useState)(!0),[le,ie]=(0,o.useState)(!1),[se,ce]=(0,o.useState)(!1),[de,ue]=(0,o.useState)(!1),[pe,ge]=(0,o.useState)(!1),[fe,he]=(0,o.useState)(!1),[me,xe]=(0,o.useState)(!1),[be,we]=(0,o.useState)(!1),[ye,ve]=(0,o.useState)(!1);(0,o.useEffect)(()=>{const e=setInterval(()=>Z(new Date),1e3);return()=>clearInterval(e)},[]),(0,o.useEffect)(()=>{!async function(){try{if((await(0,n.Iu)(m)).length>0)return;const e={version:1,layers:{satellite:!1,showFlags:!0,night:!0,aurora:!1,iss:!1,quakes:!1,fires:!1,radar:!1,flights:!1,measure:!1},note:'Earth — Layer Enhancements\n\nNEW LAYERS\n  🌌 Aurora    NOAA SWPC aurora oval + live Kp index badge\n  🔥 Fires     NASA EONET active wildfire markers (30-min refresh)\n  📏 Measure   Click 2 points → great-circle distance (km / nm / mi)\n\nFLIGHTS  ✈\n  Altitude color   grey = ground  orange = <10k ft  amber = <25k ft  blue = cruise\n  Position trail   last 15 positions drawn behind each aircraft\n  Stale pruning    aircraft auto-removed after ~50 s without a ping\n  Follow mode      "📍 Follow" in popup — map pans to track the plane\n\nISS  🛸\n  Footprint circle   ~2 316 km radius showing who can currently see the ISS\n\nWEATHER PANEL\n  Temperature chart  hourly actual + feels-like dual-line SVG chart\n  Feels-like + RH    current-hour apparent temperature & relative humidity\n  AQI badge          US Air Quality Index from Open-Meteo (color-coded)\n\nMAP\n  🛰 Satellite   ESRI World Imagery tiles (dark-mode filter auto-disabled)\n  Right-click    instant weather panel for any coordinate on the map\n'};await(0,n.KL)(m,"Earth Changelog — Apr 2026",JSON.stringify(e))}catch{}}()},[]);const ke=(0,o.useCallback)(()=>({satellite:ye,showFlags:re,night:ae,aurora:fe,iss:le,quakes:se,fires:me,radar:de,flights:pe,measure:be}),[ye,re,ae,fe,le,se,me,de,pe,be]),Se=(0,o.useCallback)(async e=>{const t={version:1,layers:ke()};await(0,n.KL)(m,e,JSON.stringify(t)),Y(!1)},[ke]),$e=((0,o.useCallback)(e=>{try{const t=JSON.parse(e);if(1!==t.version)return;const r=t.layers;ve(r.satellite),oe(r.showFlags),ne(r.night),he(r.aurora),ie(r.iss),ce(r.quakes),xe(r.fires),ue(r.radar),ge(r.flights),we(r.measure),t.note&&te(t.note)}catch{}},[]),(0,o.useCallback)(e=>{const t=n.rh.find(t=>t.id===e);t&&r.current&&(r.current.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),_(e),H({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),P(t=>R(t,e)))},[]));(0,o.useEffect)(()=>{A.current&&A.current.setUrl(ye?"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}":x)},[ye]),(0,o.useEffect)(()=>{a.current.forEach((e,t)=>{const r=e.getElement()?.querySelector(".flag-marker");r&&r.classList.toggle("active",t===q)})},[q]),(0,o.useEffect)(()=>{U&&a.current.forEach(e=>{re?e.addTo(U):e.remove()})},[re,U]),(0,o.useEffect)(()=>{var e;!function(e){if(document.querySelector(`link[href="${e}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),(e="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",new Promise((t,r)=>{if(document.querySelector(`script[src="${e}"]`))return void t();const o=document.createElement("script");o.src=e,o.onload=()=>t(),o.onerror=r,document.head.appendChild(o)})).then(()=>W(!0))},[]),(0,o.useEffect)(()=>{if(!B||!t.current||r.current)return;const e=window.L,o=e.map(t.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1}),l=e.tileLayer(x,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',maxZoom:19}).addTo(o);return A.current=l,o.on("mousemove",e=>{O(t=>({...t,lat:e.latlng.lat,lng:e.latlng.lng}))}),o.on("zoomend",()=>{O(e=>({...e,zoom:o.getZoom()}))}),o.on("contextmenu",e=>{const{lat:t,lng:r}=e.latlng,o=`custom-${t.toFixed(4)}-${r.toFixed(4)}`;_(null),H({id:o,name:L(t,r),lat:t,lng:r}),V(!0),setTimeout(()=>V(!1),3200)}),n.rh.forEach(t=>{const r=e.divIcon({html:`<div class="flag-marker">${t.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),n=e.marker([t.lat,t.lng],{icon:r});n.on("click",()=>{o.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),_(t.id),H({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),P(e=>R(e,t.id))}),n.addTo(o),a.current.set(t.id,n)}),r.current=o,K(o),()=>{a.current.clear(),A.current=null,o.remove(),r.current=null,K(null)}},[B]);const je=(0,o.useMemo)(()=>q?n.rh.find(e=>e.id===q)??null:null,[q]),ze=(0,o.useMemo)(()=>(0,n.qs)(G),[G]),Ee=N.zoom>=5,Fe=[{label:"🛰 Satellite",active:ye,toggle:()=>ve(e=>!e),title:"Switch to satellite imagery"},{label:"🚩 Flags",active:re,toggle:()=>oe(e=>!e),title:"Toggle place markers"},{label:"🌑 Night",active:ae,toggle:()=>ne(e=>!e),title:"Day/night terminator"},{label:"🌌 Aurora",active:fe,toggle:()=>he(e=>!e),title:"Aurora forecast — NOAA SWPC"},{label:"🛸 ISS",active:le,toggle:()=>ie(e=>!e),title:"ISS live position + footprint"},{label:"🌍 Quakes",active:se,toggle:()=>ce(e=>!e),title:"Earthquakes — USGS past month"},{label:"🔥 Fires",active:me,toggle:()=>xe(e=>!e),title:"Active wildfires — NASA EONET"},{label:"🌧 Radar",active:de,toggle:()=>ue(e=>!e),title:"Weather radar — RainViewer"},{label:pe&&!Ee?"✈ Zoom in":"✈ Flights",active:pe,toggle:()=>ge(e=>!e),title:pe&&!Ee?"Zoom to level 5+ to see flights":"Live flight traffic — altitude-coded"},{label:be?"📏 Measuring…":"📏 Measure",active:be,toggle:()=>we(e=>!e),title:"Click two points to measure great-circle distance"}],Te=(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(j,{onClick:()=>Y(!0),title:"Save current view",children:[(0,h.jsxs)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),(0,h.jsx)("polyline",{points:"17 21 17 13 7 13 7 21"}),(0,h.jsx)("polyline",{points:"7 3 7 8 15 8"})]}),"Save"]})}),Me=(0,h.jsxs)($,{onClick:()=>{r.current?.flyTo([20,0],2,{duration:1.2}),_(null),H(null)},title:"Reset to world view",children:[(0,h.jsxs)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,h.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,h.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),"World"]}),Ce=(0,h.jsx)(n.CD,{entries:ze,activeId:q,onSelect:function(e){e.id.startsWith("country-")||"__recent__"===e.id||$e(e.id)}});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n.PE,{title:"Earth",sidebar:Ce,activeId:q,topBarRight:(0,h.jsxs)(h.Fragment,{children:[Fe.map(e=>(0,h.jsx)(S,{active:e.active,onClick:e.toggle,title:e.title,children:e.label},e.label)),Me,Te,e]}),children:(0,h.jsxs)(v,{children:[(0,h.jsxs)(k,{children:[(0,h.jsx)(b,{satellite:ye,children:(0,h.jsx)("div",{ref:t,style:{height:"100%",width:"100%"}})}),(0,h.jsx)(s.d,{map:U,enabled:ae}),(0,h.jsx)(u.c,{map:U,enabled:de}),(0,h.jsx)(d.l,{map:U,enabled:se}),(0,h.jsx)(p.w,{map:U,enabled:fe}),(0,h.jsx)(g.w,{map:U,enabled:me}),(0,h.jsx)(i.G,{map:U,enabled:pe,zoom:N.zoom}),(0,h.jsx)(c.D,{map:U,enabled:le}),(0,h.jsx)(f.q,{map:U,enabled:be}),Q&&(0,h.jsx)(C,{children:"Right-click anywhere for instant weather"}),(0,h.jsxs)(z,{visible:!!ee,children:[(0,h.jsxs)(E,{children:[(0,h.jsx)(F,{children:"Document note"}),(0,h.jsx)(T,{onClick:()=>te(null),children:"✕"})]}),(0,h.jsx)(M,{children:ee??""})]}),(0,h.jsx)(l.v,{place:D,onClose:()=>{_(null),H(null)}})]}),(0,h.jsxs)(w,{children:[(0,h.jsxs)("span",{children:["Lat: ",N.lat.toFixed(4)]}),(0,h.jsxs)("span",{children:["Lng: ",N.lng.toFixed(4)]}),(0,h.jsxs)("span",{children:["Zoom: ",N.zoom]}),(0,h.jsx)(y,{children:"|"}),(0,h.jsxs)("span",{children:["UTC ",(0,n.u6)(J)]}),je&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(y,{children:"·"}),(0,h.jsxs)("span",{children:[je.flag," ",je.name," ",(0,n.w3)(J,je.timezone)]}),(0,h.jsx)(y,{children:"·"}),(0,h.jsx)("span",{children:(0,n.$L)(J,je.timezone)})]}),(0,h.jsx)("span",{style:{marginLeft:"auto"},children:ye?"© Esri, DigitalGlobe, GeoEye":"© OpenStreetMap contributors"})]})]})}),X&&(0,h.jsx)(n.MJ,{onSave:Se,onCancel:()=>Y(!1)})]})}}}]);
//# sourceMappingURL=36.d7bf6372c917ca5d69f7.js.map