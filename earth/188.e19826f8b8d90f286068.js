"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[188],{188(e,t,r){var o=r(7359),n=r(8997),a=r(3233),l=r(4079),i=r(5375),s=r(9390),c=r(5723);const d="earth";function u(){return new Set((0,s.xy)().filter(e=>e.defaultEnabled).map(e=>e.id))}const p="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",f=a.default.div`
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
`,h=a.default.div`
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
`,g=a.default.span`opacity: 0.3;`,m=a.default.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,x=a.default.div`
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  overflow: hidden;
`,b=a.default.button`
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
`,w=a.default.button`
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
`,y=a.default.button`
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
`,v=a.default.div`
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
`,k=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
`,$=a.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`,S=a.default.button`
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
`,j=a.default.pre`
  margin: 0;
  padding: 12px 14px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  line-height: 1.65;
  color: ${l.w4.colors.mainTextMuted};
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 280px;
`,z=a.default.div`
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
`,E="atlantis:earth:recent";function F(){try{return JSON.parse(localStorage.getItem(E)??"[]")}catch{return[]}}function T(e,t){const r=[t,...e.filter(e=>e!==t)].slice(0,8);return function(e){try{localStorage.setItem(E,JSON.stringify(e))}catch{}}(r),r}function M(e,t){return`${Math.abs(e).toFixed(3)}°${e>=0?"N":"S"}, ${Math.abs(t).toFixed(3)}°${t>=0?"E":"W"}`}function C({topBarRight:e}){const t=(0,o.useRef)(null),r=(0,o.useRef)(null),n=(0,o.useRef)(new Map),a=(0,o.useRef)(null),[E,C]=(0,o.useState)({lat:0,lng:0,zoom:2}),[R,I]=(0,o.useState)(!1),[L,A]=(0,o.useState)(null),[B,O]=(0,o.useState)(null),[N,H]=(0,o.useState)(F),[W,_]=(0,o.useState)(()=>new Date),[D,J]=(0,o.useState)(null),[P,q]=(0,o.useState)(!1),[G,Z]=(0,o.useState)(!1),[U,K]=(0,o.useState)(null),[Q,V]=(0,o.useState)(!0),[X,Y]=(0,o.useState)(!1),[ee,te]=(0,o.useState)(u),re=(0,o.useCallback)(e=>{te(t=>{const r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},[]);(0,o.useEffect)(()=>{const e=setInterval(()=>_(new Date),1e3);return()=>clearInterval(e)},[]),(0,o.useEffect)(()=>{!async function(){try{if((await(0,l.Iu)(d)).length>0)return;const e={version:2,enabled:["night"],satellite:!1,showFlags:!0,note:'Earth — Layer Enhancements\n\nNEW LAYERS\n  🌌 Aurora    NOAA SWPC aurora oval + live Kp index badge\n  🔥 Fires     NASA EONET active wildfire markers (30-min refresh)\n  📏 Measure   Click 2 points → great-circle distance (km / nm / mi)\n\nFLIGHTS  ✈\n  Altitude color   grey = ground  orange = <10k ft  amber = <25k ft  blue = cruise\n  Position trail   last 15 positions drawn behind each aircraft\n  Stale pruning    aircraft auto-removed after ~50 s without a ping\n  Follow mode      "📍 Follow" in popup — map pans to track the plane\n\nISS  🛸\n  Footprint circle   ~2 316 km radius showing who can currently see the ISS\n\nWEATHER PANEL\n  Temperature chart  hourly actual + feels-like dual-line SVG chart\n  Feels-like + RH    current-hour apparent temperature & relative humidity\n  AQI badge          US Air Quality Index from Open-Meteo (color-coded)\n\nMAP\n  🛰 Satellite   ESRI World Imagery tiles (dark-mode filter auto-disabled)\n  Right-click    instant weather panel for any coordinate on the map\n'};await(0,l.KL)(d,"Earth Changelog — Apr 2026",JSON.stringify(e))}catch{}}()},[]);const oe=(0,o.useCallback)(async e=>{const t={version:2,enabled:Array.from(ee),satellite:X,showFlags:Q};await(0,l.KL)(d,e,JSON.stringify(t)),Z(!1)},[ee,X,Q]),ne=(0,o.useCallback)(e=>{try{const t=JSON.parse(e);if(2===t.version){const e=t;Y(e.satellite),V(e.showFlags),te(new Set(e.enabled)),e.note&&K(e.note)}else if(1===t.version){const e=t.layers;Y(Boolean(e.satellite)),V(Boolean(e.showFlags));const r=new Set;for(const t of["night","aurora","iss","quakes","fires","radar","flights","measure"])e[t]&&r.add(t);te(r),t.note&&K(t.note)}}catch{}},[]),ae=(0,o.useCallback)(e=>{const t=l.rh.find(t=>t.id===e);t&&r.current&&(r.current.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),A(e),O({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),H(t=>T(t,e)))},[]);(0,o.useEffect)(()=>{a.current&&a.current.setUrl(X?"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}":p)},[X]),(0,o.useEffect)(()=>{n.current.forEach((e,t)=>{const r=e.getElement()?.querySelector(".flag-marker");r&&r.classList.toggle("active",t===L)})},[L]),(0,o.useEffect)(()=>{D&&n.current.forEach(e=>{Q?e.addTo(D):e.remove()})},[Q,D]),(0,o.useEffect)(()=>{!function(e){if(document.querySelector(`link[href="${e}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),function(e){return new Promise((t,r)=>{if(document.querySelector(`script[src="${e}"]`))return void t();const o=document.createElement("script");o.src=e,o.onload=()=>t(),o.onerror=r,document.head.appendChild(o)})}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js").then(()=>I(!0))},[]),(0,o.useEffect)(()=>{if(!R||!t.current||r.current)return;const e=window.L,o=e.map(t.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1}),i=e.tileLayer(p,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',maxZoom:19}).addTo(o);return a.current=i,o.on("mousemove",e=>{C(t=>({...t,lat:e.latlng.lat,lng:e.latlng.lng}))}),o.on("zoomend",()=>{C(e=>({...e,zoom:o.getZoom()}))}),o.on("contextmenu",e=>{const{lat:t,lng:r}=e.latlng,o=`custom-${t.toFixed(4)}-${r.toFixed(4)}`;A(null),O({id:o,name:M(t,r),lat:t,lng:r}),q(!0),setTimeout(()=>q(!1),3200)}),l.rh.forEach(t=>{const r=e.divIcon({html:`<div class="flag-marker">${t.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),a=e.marker([t.lat,t.lng],{icon:r});a.on("click",()=>{o.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),A(t.id),O({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),H(e=>T(e,t.id))}),a.addTo(o),n.current.set(t.id,a)}),r.current=o,J(o),()=>{n.current.clear(),a.current=null,o.remove(),r.current=null,J(null)}},[R]);const le=(0,o.useMemo)(()=>L?l.rh.find(e=>e.id===L)??null:null,[L]),ie=(0,o.useMemo)(()=>(0,l.qs)(N),[N]),se=E.zoom>=5,ce=(0,o.useMemo)(()=>(0,s.xy)(),[]),de=[{label:"🛰 Satellite",active:X,toggle:()=>Y(e=>!e),title:"Switch to satellite imagery"},{label:"🚩 Flags",active:Q,toggle:()=>V(e=>!e),title:"Toggle place markers"},...ce.map(e=>{const t=ee.has(e.id),r="flights"===e.id&&t&&!se;return{label:r?"✈ Zoom in":"measure"===e.id&&t?"📏 Measuring…":e.label,active:t,toggle:()=>re(e.id),title:r?"Zoom to level 5+ to see flights":e.title}})],ue=(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.UO,{appId:d,onLoad:ne}),(0,c.jsxs)(y,{onClick:()=>Z(!0),title:"Save current view",children:[(0,c.jsxs)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,c.jsx)("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),(0,c.jsx)("polyline",{points:"17 21 17 13 7 13 7 21"}),(0,c.jsx)("polyline",{points:"7 3 7 8 15 8"})]}),"Save"]})]}),pe=(0,c.jsxs)(w,{onClick:()=>{r.current?.flyTo([20,0],2,{duration:1.2}),A(null),O(null)},title:"Reset to world view",children:[(0,c.jsxs)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,c.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,c.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,c.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),"World"]}),fe=(0,c.jsx)(l.CD,{entries:ie,activeId:L,onSelect:function(e){e.id.startsWith("country-")||"__recent__"===e.id||ae(e.id)}});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.PE,{title:"Earth",sidebar:fe,activeId:L,topBarRight:(0,c.jsxs)(c.Fragment,{children:[de.map(e=>(0,c.jsx)(b,{active:e.active,onClick:e.toggle,title:e.title,children:e.label},e.label)),pe,ue,e]}),children:(0,c.jsxs)(m,{children:[(0,c.jsxs)(x,{children:[(0,c.jsx)(f,{satellite:X,children:(0,c.jsx)("div",{ref:t,style:{height:"100%",width:"100%"}})}),ce.map(e=>{const t=e.component,r="flights"===e.id?{zoom:E.zoom}:{};return(0,c.jsx)(t,{map:D,enabled:ee.has(e.id),...r},e.id)}),P&&(0,c.jsx)(z,{children:"Right-click anywhere for instant weather"}),(0,c.jsxs)(v,{visible:!!U,children:[(0,c.jsxs)(k,{children:[(0,c.jsx)($,{children:"Document note"}),(0,c.jsx)(S,{onClick:()=>K(null),children:"✕"})]}),(0,c.jsx)(j,{children:U??""})]}),(0,c.jsx)(i.v,{place:B,onClose:()=>{A(null),O(null)}})]}),(0,c.jsxs)(h,{children:[(0,c.jsxs)("span",{children:["Lat: ",E.lat.toFixed(4)]}),(0,c.jsxs)("span",{children:["Lng: ",E.lng.toFixed(4)]}),(0,c.jsxs)("span",{children:["Zoom: ",E.zoom]}),(0,c.jsx)(g,{children:"|"}),(0,c.jsxs)("span",{children:["UTC ",(0,l.u6)(W)]}),le&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(g,{children:"·"}),(0,c.jsxs)("span",{children:[le.flag," ",le.name," ",(0,l.w3)(W,le.timezone)]}),(0,c.jsx)(g,{children:"·"}),(0,c.jsx)("span",{children:(0,l.$L)(W,le.timezone)})]}),(0,c.jsx)("span",{style:{marginLeft:"auto"},children:X?"© Esri, DigitalGlobe, GeoEye":"© OpenStreetMap contributors"})]})]})}),G&&(0,c.jsx)(l.MJ,{onSave:oe,onCancel:()=>Z(!1)})]})}const R=document.getElementById("root");if(!R)throw new Error("Root element #root not found");(0,n.H)(R).render((0,c.jsx)(C,{}))},8997(e,t,r){var o=r(8991);t.H=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=188.e19826f8b8d90f286068.js.map