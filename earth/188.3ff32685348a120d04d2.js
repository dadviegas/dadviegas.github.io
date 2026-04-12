"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[188],{188(e,t,r){var o=r(7359),n=r(8997),l=r(3233),a=r(906),i=r(5375),s=r(3792),c=r(9775),d=r(8599),u=r(2535),g=r(6894),h=r(5723);const f=l.default.div`
  flex: 1;
  min-height: 0;
  height: 100%;
  width: 100%;

  .leaflet-container {
    height: 100%;
    width: 100%;
    background: ${a.w4.colors.mainBg};
  }

  /* Dark-mode tile filter — only tiles, not markers */
  .leaflet-tile-pane {
    filter: invert(1) hue-rotate(180deg) brightness(0.85) contrast(0.9);
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

  .flag-marker:hover {
    transform: scale(1.25);
  }

  .flag-marker.active {
    transform: scale(1.35);
    filter: drop-shadow(0 0 6px rgba(88, 166, 255, 0.9));
  }
`,p=l.default.div`
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
`,m=l.default.span`
  opacity: 0.3;
`,x=l.default.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,b=l.default.div`
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  overflow: hidden;
`,w=l.default.button`
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
`,y=l.default.button`
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
`,v="atlantis:earth:recent";function k(){try{return JSON.parse(localStorage.getItem(v)??"[]")}catch{return[]}}function j(e,t){const r=[t,...e.filter(e=>e!==t)].slice(0,8);return function(e){try{localStorage.setItem(v,JSON.stringify(e))}catch{}}(r),r}function S({topBarRight:e}){const t=(0,o.useRef)(null),r=(0,o.useRef)(null),n=(0,o.useRef)(new Map),[l,v]=(0,o.useState)({lat:0,lng:0,zoom:2}),[S,$]=(0,o.useState)(!1),[z,E]=(0,o.useState)(null),[T,C]=(0,o.useState)(k),[R,M]=(0,o.useState)(()=>new Date),[F,I]=(0,o.useState)(!1),[L,B]=(0,o.useState)(!0),[_,D]=(0,o.useState)(!0),[q,Z]=(0,o.useState)(!1),[H,N]=(0,o.useState)(!1),[O,W]=(0,o.useState)(!1),[G,J]=(0,o.useState)(null);(0,o.useEffect)(()=>{const e=setInterval(()=>M(new Date),1e3);return()=>clearInterval(e)},[]);const P=(0,o.useCallback)(e=>{const t=a.rh.find(t=>t.id===e);t&&r.current&&(r.current.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),E(e),C(t=>j(t,e)))},[]),U=(0,o.useMemo)(()=>{if(!z)return null;const e=a.rh.find(e=>e.id===z);return e?{id:e.id,name:e.name,lat:e.lat,lng:e.lng}:null},[z]),A=(0,o.useMemo)(()=>z?a.rh.find(e=>e.id===z)??null:null,[z]);(0,o.useEffect)(()=>{n.current.forEach((e,t)=>{const r=e.getElement()?.querySelector(".flag-marker");r&&r.classList.toggle("active",t===z)})},[z]),(0,o.useEffect)(()=>{G&&n.current.forEach(e=>{L?e.addTo(G):e.remove()})},[L,G]),(0,o.useEffect)(()=>{!function(e){if(document.querySelector(`link[href="${e}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),function(e){return new Promise((t,r)=>{if(document.querySelector(`script[src="${e}"]`))return void t();const o=document.createElement("script");o.src=e,o.onload=()=>t(),o.onerror=r,document.head.appendChild(o)})}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js").then(()=>$(!0))},[]),(0,o.useEffect)(()=>{if(!S||!t.current||r.current)return;const e=window.L,o=e.map(t.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1});return e.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:19}).addTo(o),o.on("mousemove",e=>{v(t=>({...t,lat:e.latlng.lat,lng:e.latlng.lng}))}),o.on("zoomend",()=>{v(e=>({...e,zoom:o.getZoom()}))}),a.rh.forEach(t=>{const r=e.divIcon({html:`<div class="flag-marker">${t.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),l=e.marker([t.lat,t.lng],{icon:r});l.on("click",()=>{o.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),E(t.id),C(e=>j(e,t.id))}),l.addTo(o),n.current.set(t.id,l)}),r.current=o,J(o),()=>{n.current.clear(),o.remove(),r.current=null,J(null)}},[S]);const Q=(0,h.jsxs)(y,{onClick:()=>{r.current?.flyTo([20,0],2,{duration:1.2}),E(null)},title:"Reset to world view",children:[(0,h.jsxs)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,h.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,h.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),"World"]}),V=l.zoom>=5,K=[{label:"🚩 Flags",active:L,toggle:()=>B(e=>!e),title:"Toggle place markers"},{label:"🌑 Night",active:_,toggle:()=>D(e=>!e),title:"Day/night terminator"},{label:"🛸 ISS",active:q,toggle:()=>Z(e=>!e),title:"ISS live position"},{label:"🌍 Quakes",active:H,toggle:()=>N(e=>!e),title:"Earthquakes — USGS past month"},{label:"🌧 Radar",active:O,toggle:()=>W(e=>!e),title:"Weather radar — RainViewer"},{label:F&&!V?"✈ Zoom in":"✈ Flights",active:F,toggle:()=>I(e=>!e),title:F&&!V?"Zoom to level 5+ to see flights":"Live flight traffic"}],X=(0,o.useMemo)(()=>(0,a.qs)(T),[T]),Y=(0,h.jsx)(a.CD,{entries:X,activeId:z,onSelect:function(e){e.id.startsWith("country-")||"__recent__"===e.id||P(e.id)}});return(0,h.jsx)(a.PE,{title:"Earth",sidebar:Y,activeId:z,topBarRight:(0,h.jsxs)(h.Fragment,{children:[K.map(e=>(0,h.jsx)(w,{active:e.active,onClick:e.toggle,title:e.title,children:e.label},e.label)),Q,e]}),children:(0,h.jsxs)(x,{children:[(0,h.jsxs)(b,{children:[(0,h.jsx)(f,{children:(0,h.jsx)("div",{ref:t,style:{height:"100%",width:"100%"}})}),(0,h.jsx)(c.d,{map:G,enabled:_}),(0,h.jsx)(g.c,{map:G,enabled:O}),(0,h.jsx)(u.l,{map:G,enabled:H}),(0,h.jsx)(s.G,{map:G,enabled:F,zoom:l.zoom}),(0,h.jsx)(d.D,{map:G,enabled:q}),(0,h.jsx)(i.v,{place:U,onClose:()=>E(null)})]}),(0,h.jsxs)(p,{children:[(0,h.jsxs)("span",{children:["Lat: ",l.lat.toFixed(4)]}),(0,h.jsxs)("span",{children:["Lng: ",l.lng.toFixed(4)]}),(0,h.jsxs)("span",{children:["Zoom: ",l.zoom]}),(0,h.jsx)(m,{children:"|"}),(0,h.jsxs)("span",{children:["UTC ",(0,a.u6)(R)]}),A&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m,{children:"·"}),(0,h.jsxs)("span",{children:[A.flag," ",A.name," ",(0,a.w3)(R,A.timezone)]}),(0,h.jsx)(m,{children:"·"}),(0,h.jsx)("span",{children:(0,a.$L)(R,A.timezone)})]}),(0,h.jsx)("span",{style:{marginLeft:"auto"},children:"© OpenStreetMap contributors"})]})]})})}const $=document.getElementById("root");if(!$)throw new Error("Root element #root not found");(0,n.H)($).render((0,h.jsx)(S,{}))},8997(e,t,r){var o=r(8991);t.H=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=188.3ff32685348a120d04d2.js.map