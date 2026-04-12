"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[188],{188(e,t,o){var r=o(7359),n=o(8997),a=o(3233),l=o(4079),i=o(5375),s=o(9390),d=o(5723);const c="earth";function u(){return new Set((0,s.xy)().filter(e=>e.defaultEnabled).map(e=>e.id))}const p="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",f=a.default.div`
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
`,g=a.default.div`
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
`,h=a.default.span`opacity: 0.3;`,m=a.default.div`
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
`,$=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
`,k=a.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`,j=a.default.button`
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
`,S=a.default.pre`
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
`,M="atlantis:earth:recent";function T(){try{return JSON.parse(localStorage.getItem(M)??"[]")}catch{return[]}}function F(e,t){const o=[t,...e.filter(e=>e!==t)].slice(0,8);return function(e){try{localStorage.setItem(M,JSON.stringify(e))}catch{}}(o),o}function C(e,t){return`${Math.abs(e).toFixed(3)}°${e>=0?"N":"S"}, ${Math.abs(t).toFixed(3)}°${t>=0?"E":"W"}`}function E({topBarRight:e}){const t=(0,r.useRef)(null),o=(0,r.useRef)(null),n=(0,r.useRef)(new Map),a=(0,r.useRef)(null),[M,E]=(0,r.useState)({lat:0,lng:0,zoom:2}),[B,R]=(0,r.useState)(!1),[L,I]=(0,r.useState)(null),[O,_]=(0,r.useState)(null),[D,H]=(0,r.useState)(T),[N,J]=(0,r.useState)(()=>new Date),[W,Z]=(0,r.useState)(null),[q,A]=(0,r.useState)(!1),[U,G]=(0,r.useState)(!1),[P,X]=(0,r.useState)(null),[K,V]=(0,r.useState)(!0),[Q,Y]=(0,r.useState)(!1),[ee,te]=(0,r.useState)(u),oe=(0,r.useCallback)(e=>{te(t=>{const o=new Set(t);return o.has(e)?o.delete(e):o.add(e),o})},[]);(0,r.useEffect)(()=>{const e=setInterval(()=>J(new Date),1e3);return()=>clearInterval(e)},[]);const[re,ne]=(0,r.useState)(null),ae=(0,r.useCallback)(async e=>{const t={version:2,enabled:Array.from(ee),satellite:Q,showFlags:K};await(0,l.KL)(c,e,JSON.stringify(t)),G(!1),ne(null)},[ee,Q,K]),le=(0,r.useCallback)(async()=>{if(!re)return;const e={version:2,enabled:Array.from(ee),satellite:Q,showFlags:K};await(0,l.mZ)(re.id,re.name,JSON.stringify(e)),G(!1)},[re,ee,Q,K]),ie=(0,r.useCallback)((e,t,o)=>{ne(t&&o?{id:t,name:o}:null);try{const t=JSON.parse(e);if(2===t.version){const e=t;Y(e.satellite),V(e.showFlags),te(new Set(e.enabled)),e.note&&X(e.note)}else if(1===t.version){const e=t.layers;Y(Boolean(e.satellite)),V(Boolean(e.showFlags));const o=new Set;for(const t of["night","aurora","iss","quakes","fires","radar","flights","measure"])e[t]&&o.add(t);te(o),t.note&&X(t.note)}}catch{}},[]),se=(0,r.useCallback)(e=>{const t=l.rh.find(t=>t.id===e);t&&o.current&&(o.current.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),I(e),_({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),H(t=>F(t,e)))},[]);(0,r.useEffect)(()=>{a.current&&a.current.setUrl(Q?"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}":p)},[Q]),(0,r.useEffect)(()=>{n.current.forEach((e,t)=>{const o=e.getElement()?.querySelector(".flag-marker");o&&o.classList.toggle("active",t===L)})},[L]),(0,r.useEffect)(()=>{W&&n.current.forEach(e=>{K?e.addTo(W):e.remove()})},[K,W]),(0,r.useEffect)(()=>{!function(e){if(document.querySelector(`link[href="${e}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),function(e){return new Promise((t,o)=>{if(document.querySelector(`script[src="${e}"]`))return void t();const r=document.createElement("script");r.src=e,r.onload=()=>t(),r.onerror=o,document.head.appendChild(r)})}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js").then(()=>R(!0))},[]),(0,r.useEffect)(()=>{if(!B||!t.current||o.current)return;const e=window.L,r=e.map(t.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1}),i=e.tileLayer(p,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',maxZoom:19}).addTo(r);return a.current=i,r.on("mousemove",e=>{E(t=>({...t,lat:e.latlng.lat,lng:e.latlng.lng}))}),r.on("zoomend",()=>{E(e=>({...e,zoom:r.getZoom()}))}),r.on("contextmenu",e=>{const{lat:t,lng:o}=e.latlng,r=`custom-${t.toFixed(4)}-${o.toFixed(4)}`;I(null),_({id:r,name:C(t,o),lat:t,lng:o}),A(!0),setTimeout(()=>A(!1),3200)}),l.rh.forEach(t=>{const o=e.divIcon({html:`<div class="flag-marker">${t.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),a=e.marker([t.lat,t.lng],{icon:o});a.on("click",()=>{r.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),I(t.id),_({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),H(e=>F(e,t.id))}),a.addTo(r),n.current.set(t.id,a)}),o.current=r,Z(r),()=>{n.current.clear(),a.current=null,r.remove(),o.current=null,Z(null)}},[B]);const de=(0,r.useMemo)(()=>L?l.rh.find(e=>e.id===L)??null:null,[L]),ce=(0,r.useMemo)(()=>(0,l.qs)(D),[D]),ue=M.zoom>=5,pe=(0,r.useMemo)(()=>(0,s.xy)(),[]),fe=[{label:"🛰 Satellite",active:Q,toggle:()=>Y(e=>!e),title:"Switch to satellite imagery"},{label:"🚩 Flags",active:K,toggle:()=>V(e=>!e),title:"Toggle place markers"},...pe.map(e=>{const t=ee.has(e.id),o="flights"===e.id&&t&&!ue;return{label:o?"✈ Zoom in":"measure"===e.id&&t?"📏 Measuring…":e.label,active:t,toggle:()=>oe(e.id),title:o?"Zoom to level 5+ to see flights":e.title}})],ge=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.UO,{appId:c,onLoad:ie}),(0,d.jsxs)(y,{onClick:()=>G(!0),title:"Save current view",children:[(0,d.jsxs)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,d.jsx)("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),(0,d.jsx)("polyline",{points:"17 21 17 13 7 13 7 21"}),(0,d.jsx)("polyline",{points:"7 3 7 8 15 8"})]}),"Save"]})]}),he=(0,d.jsxs)(w,{onClick:()=>{o.current?.flyTo([20,0],2,{duration:1.2}),I(null),_(null)},title:"Reset to world view",children:[(0,d.jsxs)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,d.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,d.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,d.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),"World"]}),me=(0,d.jsx)(l.CD,{entries:ce,activeId:L,onSelect:function(e){e.id.startsWith("country-")||"__recent__"===e.id||se(e.id)}});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.PE,{title:"Earth",sidebar:me,activeId:L,topBarRight:(0,d.jsxs)(d.Fragment,{children:[fe.map(e=>(0,d.jsx)(b,{active:e.active,onClick:e.toggle,title:e.title,children:e.label},e.label)),he,ge,e]}),children:(0,d.jsxs)(m,{children:[(0,d.jsxs)(x,{children:[(0,d.jsx)(f,{satellite:Q,children:(0,d.jsx)("div",{ref:t,style:{height:"100%",width:"100%"}})}),pe.map(e=>{const t=e.component,o="flights"===e.id?{zoom:M.zoom}:{};return(0,d.jsx)(t,{map:W,enabled:ee.has(e.id),...o},e.id)}),q&&(0,d.jsx)(z,{children:"Right-click anywhere for instant weather"}),(0,d.jsxs)(v,{visible:!!P,children:[(0,d.jsxs)($,{children:[(0,d.jsx)(k,{children:"Document note"}),(0,d.jsx)(j,{onClick:()=>X(null),children:"✕"})]}),(0,d.jsx)(S,{children:P??""})]}),(0,d.jsx)(i.v,{place:O,onClose:()=>{I(null),_(null)}})]}),(0,d.jsxs)(g,{children:[(0,d.jsxs)("span",{children:["Lat: ",M.lat.toFixed(4)]}),(0,d.jsxs)("span",{children:["Lng: ",M.lng.toFixed(4)]}),(0,d.jsxs)("span",{children:["Zoom: ",M.zoom]}),(0,d.jsx)(h,{children:"|"}),(0,d.jsxs)("span",{children:["UTC ",(0,l.u6)(N)]}),de&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{children:"·"}),(0,d.jsxs)("span",{children:[de.flag," ",de.name," ",(0,l.w3)(N,de.timezone)]}),(0,d.jsx)(h,{children:"·"}),(0,d.jsx)("span",{children:(0,l.$L)(N,de.timezone)})]}),(0,d.jsx)("span",{style:{marginLeft:"auto"},children:Q?"© Esri, DigitalGlobe, GeoEye":"© OpenStreetMap contributors"})]})]})}),U&&(0,d.jsx)(l.MJ,{onSave:ae,onUpdate:le,existingDoc:re??void 0,onCancel:()=>G(!1)})]})}const B=document.getElementById("root");if(!B)throw new Error("Root element #root not found");(0,n.H)(B).render((0,d.jsx)(E,{}))},8997(e,t,o){var r=o(8991);t.H=r.createRoot,r.hydrateRoot}}]);
//# sourceMappingURL=188.fc8ecd9da799a49d521d.js.map