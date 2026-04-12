"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[36],{6036(e,t,r){r.r(t),r.d(t,{default:()=>M});var o=r(7359),n=r(3233),a=r(4079),l=r(5375),i=r(9390),s=r(5723);const c="earth";function d(){return new Set((0,i.xy)().filter(e=>e.defaultEnabled).map(e=>e.id))}const u="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",p=n.default.div`
  flex: 1;
  min-height: 0;
  height: 100%;
  width: 100%;

  .leaflet-container {
    height: 100%;
    width: 100%;
    background: ${a.w4.colors.mainBg};
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
`,f=n.default.div`
  height: 28px;
  min-height: 28px;
  background: ${a.w4.colors.sidebarBg};
  border-top: 1px solid ${a.w4.colors.sidebarBorder};
  display: flex;
  align-items: center;
  padding: 0 ${a.w4.spacing.md};
  gap: ${a.w4.spacing.lg};
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${a.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,h=n.default.span`opacity: 0.3;`,g=n.default.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,m=n.default.div`
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  overflow: hidden;
`,x=n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${({active:e})=>e?"rgba(88,166,255,0.12)":"none"};
  border: 1px solid ${({active:e})=>e?a.w4.colors.accent:a.w4.colors.sidebarBorder};
  border-radius: ${a.w4.borderRadius.md};
  cursor: pointer;
  color: ${({active:e})=>e?a.w4.colors.accent:a.w4.colors.sidebarTextMuted};
  font-size: ${a.w4.typography.fontSizeSm};
  font-family: ${a.w4.typography.fontFamily};
  transition: background 0.15s, color 0.15s, border-color 0.15s;

  &:hover {
    background: ${a.w4.colors.sidebarHover};
    color: ${a.w4.colors.sidebarText};
    border-color: ${a.w4.colors.sidebarText};
  }
`,b=n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${a.w4.colors.sidebarBorder};
  border-radius: ${a.w4.borderRadius.md};
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  font-size: ${a.w4.typography.fontSizeSm};
  font-family: ${a.w4.typography.fontFamily};
  transition: background 0.15s, color 0.15s, border-color 0.15s;

  &:hover {
    background: ${a.w4.colors.sidebarHover};
    color: ${a.w4.colors.sidebarText};
    border-color: ${a.w4.colors.sidebarText};
  }
`,w=n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${a.w4.colors.sidebarBorder};
  border-radius: ${a.w4.borderRadius.md};
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  font-size: ${a.w4.typography.fontSizeSm};
  font-family: ${a.w4.typography.fontFamily};
  transition: background 0.15s, color 0.15s, border-color 0.15s;

  &:hover {
    background: ${a.w4.colors.sidebarHover};
    color: ${a.w4.colors.sidebarText};
    border-color: ${a.w4.colors.sidebarText};
  }
`,y=n.default.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  width: min(520px, calc(100vw - 32px));
  background: rgba(13, 17, 23, 0.95);
  border: 1px solid ${a.w4.colors.sidebarBorder};
  border-radius: ${a.w4.borderRadius.md};
  box-shadow: 0 8px 32px rgba(0,0,0,.6);
  z-index: 700;
  overflow: hidden;
  display: ${({visible:e})=>e?"flex":"none"};
  flex-direction: column;
  backdrop-filter: blur(8px);
`,v=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
`,k=n.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
`,$=n.default.button`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  font-size: 14px;
  border-radius: 4px;
  &:hover { background: ${a.w4.colors.sidebarHover}; color: ${a.w4.colors.mainText}; }
`,S=n.default.pre`
  margin: 0;
  padding: 12px 14px;
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 11px;
  line-height: 1.65;
  color: ${a.w4.colors.mainTextMuted};
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 280px;
`,j=n.default.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(13,17,23,.85);
  border: 1px solid ${a.w4.colors.sidebarBorder};
  border-radius: 6px;
  padding: 4px 12px;
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${a.w4.colors.mainTextMuted};
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
`,z="atlantis:earth:recent";function E(){try{return JSON.parse(localStorage.getItem(z)??"[]")}catch{return[]}}function F(e,t){const r=[t,...e.filter(e=>e!==t)].slice(0,8);return function(e){try{localStorage.setItem(z,JSON.stringify(e))}catch{}}(r),r}function T(e,t){return`${Math.abs(e).toFixed(3)}°${e>=0?"N":"S"}, ${Math.abs(t).toFixed(3)}°${t>=0?"E":"W"}`}function M({topBarRight:e}){const t=(0,o.useRef)(null),r=(0,o.useRef)(null),n=(0,o.useRef)(new Map),z=(0,o.useRef)(null),[M,C]=(0,o.useState)({lat:0,lng:0,zoom:2}),[I,L]=(0,o.useState)(!1),[R,A]=(0,o.useState)(null),[B,N]=(0,o.useState)(null),[O,W]=(0,o.useState)(E),[_,H]=(0,o.useState)(()=>new Date),[D,J]=(0,o.useState)(null),[P,q]=(0,o.useState)(!1),[G,Z]=(0,o.useState)(!1),[K,U]=(0,o.useState)(null),[Q,V]=(0,o.useState)(!0),[X,Y]=(0,o.useState)(!1),[ee,te]=(0,o.useState)(d),re=(0,o.useCallback)(e=>{te(t=>{const r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},[]);(0,o.useEffect)(()=>{const e=setInterval(()=>H(new Date),1e3);return()=>clearInterval(e)},[]),(0,o.useEffect)(()=>{!async function(){try{if((await(0,a.Iu)(c)).length>0)return;const e={version:2,enabled:["night"],satellite:!1,showFlags:!0,note:'Earth — Layer Enhancements\n\nNEW LAYERS\n  🌌 Aurora    NOAA SWPC aurora oval + live Kp index badge\n  🔥 Fires     NASA EONET active wildfire markers (30-min refresh)\n  📏 Measure   Click 2 points → great-circle distance (km / nm / mi)\n\nFLIGHTS  ✈\n  Altitude color   grey = ground  orange = <10k ft  amber = <25k ft  blue = cruise\n  Position trail   last 15 positions drawn behind each aircraft\n  Stale pruning    aircraft auto-removed after ~50 s without a ping\n  Follow mode      "📍 Follow" in popup — map pans to track the plane\n\nISS  🛸\n  Footprint circle   ~2 316 km radius showing who can currently see the ISS\n\nWEATHER PANEL\n  Temperature chart  hourly actual + feels-like dual-line SVG chart\n  Feels-like + RH    current-hour apparent temperature & relative humidity\n  AQI badge          US Air Quality Index from Open-Meteo (color-coded)\n\nMAP\n  🛰 Satellite   ESRI World Imagery tiles (dark-mode filter auto-disabled)\n  Right-click    instant weather panel for any coordinate on the map\n'};await(0,a.KL)(c,"Earth Changelog — Apr 2026",JSON.stringify(e))}catch{}}()},[]);const oe=(0,o.useCallback)(async e=>{const t={version:2,enabled:Array.from(ee),satellite:X,showFlags:Q};await(0,a.KL)(c,e,JSON.stringify(t)),Z(!1)},[ee,X,Q]),ne=((0,o.useCallback)(e=>{try{const t=JSON.parse(e);if(2===t.version){const e=t;Y(e.satellite),V(e.showFlags),te(new Set(e.enabled)),e.note&&U(e.note)}else if(1===t.version){const e=t.layers;Y(Boolean(e.satellite)),V(Boolean(e.showFlags));const r=new Set;for(const t of["night","aurora","iss","quakes","fires","radar","flights","measure"])e[t]&&r.add(t);te(r),t.note&&U(t.note)}}catch{}},[]),(0,o.useCallback)(e=>{const t=a.rh.find(t=>t.id===e);t&&r.current&&(r.current.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),A(e),N({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),W(t=>F(t,e)))},[]));(0,o.useEffect)(()=>{z.current&&z.current.setUrl(X?"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}":u)},[X]),(0,o.useEffect)(()=>{n.current.forEach((e,t)=>{const r=e.getElement()?.querySelector(".flag-marker");r&&r.classList.toggle("active",t===R)})},[R]),(0,o.useEffect)(()=>{D&&n.current.forEach(e=>{Q?e.addTo(D):e.remove()})},[Q,D]),(0,o.useEffect)(()=>{var e;!function(e){if(document.querySelector(`link[href="${e}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),(e="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",new Promise((t,r)=>{if(document.querySelector(`script[src="${e}"]`))return void t();const o=document.createElement("script");o.src=e,o.onload=()=>t(),o.onerror=r,document.head.appendChild(o)})).then(()=>L(!0))},[]),(0,o.useEffect)(()=>{if(!I||!t.current||r.current)return;const e=window.L,o=e.map(t.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1}),l=e.tileLayer(u,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',maxZoom:19}).addTo(o);return z.current=l,o.on("mousemove",e=>{C(t=>({...t,lat:e.latlng.lat,lng:e.latlng.lng}))}),o.on("zoomend",()=>{C(e=>({...e,zoom:o.getZoom()}))}),o.on("contextmenu",e=>{const{lat:t,lng:r}=e.latlng,o=`custom-${t.toFixed(4)}-${r.toFixed(4)}`;A(null),N({id:o,name:T(t,r),lat:t,lng:r}),q(!0),setTimeout(()=>q(!1),3200)}),a.rh.forEach(t=>{const r=e.divIcon({html:`<div class="flag-marker">${t.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),a=e.marker([t.lat,t.lng],{icon:r});a.on("click",()=>{o.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),A(t.id),N({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),W(e=>F(e,t.id))}),a.addTo(o),n.current.set(t.id,a)}),r.current=o,J(o),()=>{n.current.clear(),z.current=null,o.remove(),r.current=null,J(null)}},[I]);const ae=(0,o.useMemo)(()=>R?a.rh.find(e=>e.id===R)??null:null,[R]),le=(0,o.useMemo)(()=>(0,a.qs)(O),[O]),ie=M.zoom>=5,se=(0,o.useMemo)(()=>(0,i.xy)(),[]),ce=[{label:"🛰 Satellite",active:X,toggle:()=>Y(e=>!e),title:"Switch to satellite imagery"},{label:"🚩 Flags",active:Q,toggle:()=>V(e=>!e),title:"Toggle place markers"},...se.map(e=>{const t=ee.has(e.id),r="flights"===e.id&&t&&!ie;return{label:r?"✈ Zoom in":"measure"===e.id&&t?"📏 Measuring…":e.label,active:t,toggle:()=>re(e.id),title:r?"Zoom to level 5+ to see flights":e.title}})],de=(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(w,{onClick:()=>Z(!0),title:"Save current view",children:[(0,s.jsxs)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),(0,s.jsx)("polyline",{points:"17 21 17 13 7 13 7 21"}),(0,s.jsx)("polyline",{points:"7 3 7 8 15 8"})]}),"Save"]})}),ue=(0,s.jsxs)(b,{onClick:()=>{r.current?.flyTo([20,0],2,{duration:1.2}),A(null),N(null)},title:"Reset to world view",children:[(0,s.jsxs)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,s.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),"World"]}),pe=(0,s.jsx)(a.CD,{entries:le,activeId:R,onSelect:function(e){e.id.startsWith("country-")||"__recent__"===e.id||ne(e.id)}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.PE,{title:"Earth",sidebar:pe,activeId:R,topBarRight:(0,s.jsxs)(s.Fragment,{children:[ce.map(e=>(0,s.jsx)(x,{active:e.active,onClick:e.toggle,title:e.title,children:e.label},e.label)),ue,de,e]}),children:(0,s.jsxs)(g,{children:[(0,s.jsxs)(m,{children:[(0,s.jsx)(p,{satellite:X,children:(0,s.jsx)("div",{ref:t,style:{height:"100%",width:"100%"}})}),se.map(e=>{const t=e.component,r="flights"===e.id?{zoom:M.zoom}:{};return(0,s.jsx)(t,{map:D,enabled:ee.has(e.id),...r},e.id)}),P&&(0,s.jsx)(j,{children:"Right-click anywhere for instant weather"}),(0,s.jsxs)(y,{visible:!!K,children:[(0,s.jsxs)(v,{children:[(0,s.jsx)(k,{children:"Document note"}),(0,s.jsx)($,{onClick:()=>U(null),children:"✕"})]}),(0,s.jsx)(S,{children:K??""})]}),(0,s.jsx)(l.v,{place:B,onClose:()=>{A(null),N(null)}})]}),(0,s.jsxs)(f,{children:[(0,s.jsxs)("span",{children:["Lat: ",M.lat.toFixed(4)]}),(0,s.jsxs)("span",{children:["Lng: ",M.lng.toFixed(4)]}),(0,s.jsxs)("span",{children:["Zoom: ",M.zoom]}),(0,s.jsx)(h,{children:"|"}),(0,s.jsxs)("span",{children:["UTC ",(0,a.u6)(_)]}),ae&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h,{children:"·"}),(0,s.jsxs)("span",{children:[ae.flag," ",ae.name," ",(0,a.w3)(_,ae.timezone)]}),(0,s.jsx)(h,{children:"·"}),(0,s.jsx)("span",{children:(0,a.$L)(_,ae.timezone)})]}),(0,s.jsx)("span",{style:{marginLeft:"auto"},children:X?"© Esri, DigitalGlobe, GeoEye":"© OpenStreetMap contributors"})]})]})}),G&&(0,s.jsx)(a.MJ,{onSave:oe,onCancel:()=>Z(!1)})]})}}}]);
//# sourceMappingURL=36.714b4ac25051d8ad0f85.js.map