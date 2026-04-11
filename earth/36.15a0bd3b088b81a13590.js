"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[36],{6036(e,t,r){r.r(t),r.d(t,{default:()=>b});var o=r(7359),n=r(3233),l=r(906),i=r(5375),a=r(3792),s=r(5723);const c=n.default.div`
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
`,d=n.default.div`
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
`,u=n.default.span`
  opacity: 0.3;
`,f=n.default.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,h=n.default.div`
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  overflow: hidden;
`,g=n.default.button`
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
`,p=n.default.button`
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
`,m="atlantis:earth:recent";function x(){try{return JSON.parse(localStorage.getItem(m)??"[]")}catch{return[]}}function w(e,t){const r=[t,...e.filter(e=>e!==t)].slice(0,8);return function(e){try{localStorage.setItem(m,JSON.stringify(e))}catch{}}(r),r}function b({topBarRight:e}){const t=(0,o.useRef)(null),r=(0,o.useRef)(null),n=(0,o.useRef)(new Map),[m,b]=(0,o.useState)({lat:0,lng:0,zoom:2}),[y,v]=(0,o.useState)(!1),[k,j]=(0,o.useState)(null),[$,S]=(0,o.useState)(x),[z,T]=(0,o.useState)(()=>new Date),[C,E]=(0,o.useState)(!1),[M,F]=(0,o.useState)(!0),[L,B]=(0,o.useState)(null);(0,o.useEffect)(()=>{const e=setInterval(()=>T(new Date),1e3);return()=>clearInterval(e)},[]);const R=(0,o.useCallback)(e=>{const t=l.rh.find(t=>t.id===e);t&&r.current&&(r.current.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),j(e),S(t=>w(t,e)))},[]),_=(0,o.useMemo)(()=>{if(!k)return null;const e=l.rh.find(e=>e.id===k);return e?{id:e.id,name:e.name,lat:e.lat,lng:e.lng}:null},[k]),I=(0,o.useMemo)(()=>k?l.rh.find(e=>e.id===k)??null:null,[k]);(0,o.useEffect)(()=>{n.current.forEach((e,t)=>{const r=e.getElement()?.querySelector(".flag-marker");r&&r.classList.toggle("active",t===k)})},[k]),(0,o.useEffect)(()=>{L&&n.current.forEach(e=>{M?e.addTo(L):e.remove()})},[M,L]),(0,o.useEffect)(()=>{var e;!function(e){if(document.querySelector(`link[href="${e}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),(e="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",new Promise((t,r)=>{if(document.querySelector(`script[src="${e}"]`))return void t();const o=document.createElement("script");o.src=e,o.onload=()=>t(),o.onerror=r,document.head.appendChild(o)})).then(()=>v(!0))},[]),(0,o.useEffect)(()=>{if(!y||!t.current||r.current)return;const e=window.L,o=e.map(t.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1});return e.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:19}).addTo(o),o.on("mousemove",e=>{b(t=>({...t,lat:e.latlng.lat,lng:e.latlng.lng}))}),o.on("zoomend",()=>{b(e=>({...e,zoom:o.getZoom()}))}),l.rh.forEach(t=>{const r=e.divIcon({html:`<div class="flag-marker">${t.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),l=e.marker([t.lat,t.lng],{icon:r});l.on("click",()=>{o.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),j(t.id),S(e=>w(e,t.id))}),l.addTo(o),n.current.set(t.id,l)}),r.current=o,B(o),()=>{n.current.clear(),o.remove(),r.current=null,B(null)}},[y]);const Z=(0,s.jsxs)(p,{onClick:()=>{r.current?.flyTo([20,0],2,{duration:1.2}),j(null)},title:"Reset to world view",children:[(0,s.jsxs)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,s.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),"World"]}),q=m.zoom>=5,D=(0,s.jsxs)(g,{active:C,onClick:()=>E(e=>!e),title:C&&!q?"Zoom in to level 5+ to see flights":"Toggle live flight tracking",children:["✈ ",C&&!q?"Zoom in":"Flights"]}),O=(0,s.jsx)(g,{active:!M,onClick:()=>F(e=>!e),title:"Toggle country markers",children:M?"🏳 Hide flags":"🏳 Show flags"}),H=(0,o.useMemo)(()=>(0,l.qs)($),[$]),N=(0,s.jsx)(l.CD,{entries:H,activeId:k,onSelect:function(e){e.id.startsWith("country-")||"__recent__"===e.id||R(e.id)}});return(0,s.jsx)(l.PE,{title:"Earth",sidebar:N,activeId:k,topBarRight:(0,s.jsxs)(s.Fragment,{children:[O,D,Z,e]}),children:(0,s.jsxs)(f,{children:[(0,s.jsxs)(h,{children:[(0,s.jsx)(c,{children:(0,s.jsx)("div",{ref:t,style:{height:"100%",width:"100%"}})}),(0,s.jsx)(a.G,{map:L,enabled:C,zoom:m.zoom}),(0,s.jsx)(i.v,{place:_,onClose:()=>j(null)})]}),(0,s.jsxs)(d,{children:[(0,s.jsxs)("span",{children:["Lat: ",m.lat.toFixed(4)]}),(0,s.jsxs)("span",{children:["Lng: ",m.lng.toFixed(4)]}),(0,s.jsxs)("span",{children:["Zoom: ",m.zoom]}),(0,s.jsx)(u,{children:"|"}),(0,s.jsxs)("span",{children:["UTC ",(0,l.u6)(z)]}),I&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u,{children:"·"}),(0,s.jsxs)("span",{children:[I.flag," ",I.name," ",(0,l.w3)(z,I.timezone)]}),(0,s.jsx)(u,{children:"·"}),(0,s.jsx)("span",{children:(0,l.$L)(z,I.timezone)})]}),(0,s.jsx)("span",{style:{marginLeft:"auto"},children:"© OpenStreetMap contributors"})]})]})})}}}]);
//# sourceMappingURL=36.15a0bd3b088b81a13590.js.map