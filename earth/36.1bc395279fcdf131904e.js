"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[36],{6036(e,t,r){r.r(t),r.d(t,{default:()=>j});var o=r(7359),n=r(3233),l=r(906),a=r(5375),i=r(3792),s=r(9775),c=r(8599),d=r(2535),u=r(6894),g=r(5723);const h=n.default.div`
  flex: 1;
  min-height: 0;
  height: 100%;
  width: 100%;

  .leaflet-container {
    height: 100%;
    width: 100%;
    background: ${l.w4.colors.mainBg};
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
`,f=n.default.div`
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
`,p=n.default.span`
  opacity: 0.3;
`,m=n.default.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,x=n.default.div`
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  overflow: hidden;
`,b=n.default.button`
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
`,w=n.default.button`
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
`,v="atlantis:earth:recent";function y(){try{return JSON.parse(localStorage.getItem(v)??"[]")}catch{return[]}}function k(e,t){const r=[t,...e.filter(e=>e!==t)].slice(0,8);return function(e){try{localStorage.setItem(v,JSON.stringify(e))}catch{}}(r),r}function j({topBarRight:e}){const t=(0,o.useRef)(null),r=(0,o.useRef)(null),n=(0,o.useRef)(new Map),[v,j]=(0,o.useState)({lat:0,lng:0,zoom:2}),[S,$]=(0,o.useState)(!1),[z,T]=(0,o.useState)(null),[E,C]=(0,o.useState)(y),[M,F]=(0,o.useState)(()=>new Date),[L,R]=(0,o.useState)(!1),[I,B]=(0,o.useState)(!0),[_,D]=(0,o.useState)(!0),[q,Z]=(0,o.useState)(!1),[N,O]=(0,o.useState)(!1),[W,G]=(0,o.useState)(!1),[H,J]=(0,o.useState)(null);(0,o.useEffect)(()=>{const e=setInterval(()=>F(new Date),1e3);return()=>clearInterval(e)},[]);const P=(0,o.useCallback)(e=>{const t=l.rh.find(t=>t.id===e);t&&r.current&&(r.current.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),T(e),C(t=>k(t,e)))},[]),U=(0,o.useMemo)(()=>{if(!z)return null;const e=l.rh.find(e=>e.id===z);return e?{id:e.id,name:e.name,lat:e.lat,lng:e.lng}:null},[z]),A=(0,o.useMemo)(()=>z?l.rh.find(e=>e.id===z)??null:null,[z]);(0,o.useEffect)(()=>{n.current.forEach((e,t)=>{const r=e.getElement()?.querySelector(".flag-marker");r&&r.classList.toggle("active",t===z)})},[z]),(0,o.useEffect)(()=>{H&&n.current.forEach(e=>{I?e.addTo(H):e.remove()})},[I,H]),(0,o.useEffect)(()=>{var e;!function(e){if(document.querySelector(`link[href="${e}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),(e="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",new Promise((t,r)=>{if(document.querySelector(`script[src="${e}"]`))return void t();const o=document.createElement("script");o.src=e,o.onload=()=>t(),o.onerror=r,document.head.appendChild(o)})).then(()=>$(!0))},[]),(0,o.useEffect)(()=>{if(!S||!t.current||r.current)return;const e=window.L,o=e.map(t.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1});return e.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:19}).addTo(o),o.on("mousemove",e=>{j(t=>({...t,lat:e.latlng.lat,lng:e.latlng.lng}))}),o.on("zoomend",()=>{j(e=>({...e,zoom:o.getZoom()}))}),l.rh.forEach(t=>{const r=e.divIcon({html:`<div class="flag-marker">${t.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),l=e.marker([t.lat,t.lng],{icon:r});l.on("click",()=>{o.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),T(t.id),C(e=>k(e,t.id))}),l.addTo(o),n.current.set(t.id,l)}),r.current=o,J(o),()=>{n.current.clear(),o.remove(),r.current=null,J(null)}},[S]);const Q=(0,g.jsxs)(w,{onClick:()=>{r.current?.flyTo([20,0],2,{duration:1.2}),T(null)},title:"Reset to world view",children:[(0,g.jsxs)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,g.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,g.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,g.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),"World"]}),V=v.zoom>=5,K=[{label:"🚩 Flags",active:I,toggle:()=>B(e=>!e),title:"Toggle place markers"},{label:"🌑 Night",active:_,toggle:()=>D(e=>!e),title:"Day/night terminator"},{label:"🛸 ISS",active:q,toggle:()=>Z(e=>!e),title:"ISS live position"},{label:"🌍 Quakes",active:N,toggle:()=>O(e=>!e),title:"Earthquakes — USGS past month"},{label:"🌧 Radar",active:W,toggle:()=>G(e=>!e),title:"Weather radar — RainViewer"},{label:L&&!V?"✈ Zoom in":"✈ Flights",active:L,toggle:()=>R(e=>!e),title:L&&!V?"Zoom to level 5+ to see flights":"Live flight traffic"}],X=(0,o.useMemo)(()=>(0,l.qs)(E),[E]),Y=(0,g.jsx)(l.CD,{entries:X,activeId:z,onSelect:function(e){e.id.startsWith("country-")||"__recent__"===e.id||P(e.id)}});return(0,g.jsx)(l.PE,{title:"Earth",sidebar:Y,activeId:z,topBarRight:(0,g.jsxs)(g.Fragment,{children:[K.map(e=>(0,g.jsx)(b,{active:e.active,onClick:e.toggle,title:e.title,children:e.label},e.label)),Q,e]}),children:(0,g.jsxs)(m,{children:[(0,g.jsxs)(x,{children:[(0,g.jsx)(h,{children:(0,g.jsx)("div",{ref:t,style:{height:"100%",width:"100%"}})}),(0,g.jsx)(s.d,{map:H,enabled:_}),(0,g.jsx)(u.c,{map:H,enabled:W}),(0,g.jsx)(d.l,{map:H,enabled:N}),(0,g.jsx)(i.G,{map:H,enabled:L,zoom:v.zoom}),(0,g.jsx)(c.D,{map:H,enabled:q}),(0,g.jsx)(a.v,{place:U,onClose:()=>T(null)})]}),(0,g.jsxs)(f,{children:[(0,g.jsxs)("span",{children:["Lat: ",v.lat.toFixed(4)]}),(0,g.jsxs)("span",{children:["Lng: ",v.lng.toFixed(4)]}),(0,g.jsxs)("span",{children:["Zoom: ",v.zoom]}),(0,g.jsx)(p,{children:"|"}),(0,g.jsxs)("span",{children:["UTC ",(0,l.u6)(M)]}),A&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p,{children:"·"}),(0,g.jsxs)("span",{children:[A.flag," ",A.name," ",(0,l.w3)(M,A.timezone)]}),(0,g.jsx)(p,{children:"·"}),(0,g.jsx)("span",{children:(0,l.$L)(M,A.timezone)})]}),(0,g.jsx)("span",{style:{marginLeft:"auto"},children:"© OpenStreetMap contributors"})]})]})})}}}]);
//# sourceMappingURL=36.1bc395279fcdf131904e.js.map