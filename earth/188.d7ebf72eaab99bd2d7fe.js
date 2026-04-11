"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[188],{188(e,t,r){var o=r(7359),n=r(8997),l=r(3233),i=r(906),s=r(5375),a=r(3792),c=r(5723);const d=l.default.div`
  flex: 1;
  min-height: 0;
  height: 100%;
  width: 100%;

  .leaflet-container {
    height: 100%;
    width: 100%;
    background: ${i.w4.colors.mainBg};
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
`,u=l.default.div`
  height: 28px;
  min-height: 28px;
  background: ${i.w4.colors.sidebarBg};
  border-top: 1px solid ${i.w4.colors.sidebarBorder};
  display: flex;
  align-items: center;
  padding: 0 ${i.w4.spacing.md};
  gap: ${i.w4.spacing.lg};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${i.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,f=l.default.span`
  opacity: 0.3;
`,h=l.default.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,g=l.default.div`
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  overflow: hidden;
`,p=l.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${({active:e})=>e?"rgba(88,166,255,0.12)":"none"};
  border: 1px solid ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.sidebarBorder};
  border-radius: ${i.w4.borderRadius.md};
  cursor: pointer;
  color: ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.sidebarTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  font-family: ${i.w4.typography.fontFamily};
  transition: background 0.15s, color 0.15s, border-color 0.15s;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    color: ${i.w4.colors.sidebarText};
    border-color: ${i.w4.colors.sidebarText};
  }
`,m=l.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${i.w4.colors.sidebarBorder};
  border-radius: ${i.w4.borderRadius.md};
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  font-family: ${i.w4.typography.fontFamily};
  transition: background 0.15s, color 0.15s, border-color 0.15s;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    color: ${i.w4.colors.sidebarText};
    border-color: ${i.w4.colors.sidebarText};
  }
`,x="atlantis:earth:recent";function w(){try{return JSON.parse(localStorage.getItem(x)??"[]")}catch{return[]}}function y(e,t){const r=[t,...e.filter(e=>e!==t)].slice(0,8);return function(e){try{localStorage.setItem(x,JSON.stringify(e))}catch{}}(r),r}function b({topBarRight:e}){const t=(0,o.useRef)(null),r=(0,o.useRef)(null),n=(0,o.useRef)(new Map),[l,x]=(0,o.useState)({lat:0,lng:0,zoom:2}),[b,v]=(0,o.useState)(!1),[k,j]=(0,o.useState)(null),[$,S]=(0,o.useState)(w),[z,T]=(0,o.useState)(()=>new Date),[E,C]=(0,o.useState)(!1),[M,R]=(0,o.useState)(!0),[B,F]=(0,o.useState)(null);(0,o.useEffect)(()=>{const e=setInterval(()=>T(new Date),1e3);return()=>clearInterval(e)},[]);const L=(0,o.useCallback)(e=>{const t=i.rh.find(t=>t.id===e);t&&r.current&&(r.current.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),j(e),S(t=>y(t,e)))},[]),I=(0,o.useMemo)(()=>{if(!k)return null;const e=i.rh.find(e=>e.id===k);return e?{id:e.id,name:e.name,lat:e.lat,lng:e.lng}:null},[k]),_=(0,o.useMemo)(()=>k?i.rh.find(e=>e.id===k)??null:null,[k]);(0,o.useEffect)(()=>{n.current.forEach((e,t)=>{const r=e.getElement()?.querySelector(".flag-marker");r&&r.classList.toggle("active",t===k)})},[k]),(0,o.useEffect)(()=>{B&&n.current.forEach(e=>{M?e.addTo(B):e.remove()})},[M,B]),(0,o.useEffect)(()=>{!function(e){if(document.querySelector(`link[href="${e}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),function(e){return new Promise((t,r)=>{if(document.querySelector(`script[src="${e}"]`))return void t();const o=document.createElement("script");o.src=e,o.onload=()=>t(),o.onerror=r,document.head.appendChild(o)})}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js").then(()=>v(!0))},[]),(0,o.useEffect)(()=>{if(!b||!t.current||r.current)return;const e=window.L,o=e.map(t.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1});return e.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:19}).addTo(o),o.on("mousemove",e=>{x(t=>({...t,lat:e.latlng.lat,lng:e.latlng.lng}))}),o.on("zoomend",()=>{x(e=>({...e,zoom:o.getZoom()}))}),i.rh.forEach(t=>{const r=e.divIcon({html:`<div class="flag-marker">${t.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),l=e.marker([t.lat,t.lng],{icon:r});l.on("click",()=>{o.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),j(t.id),S(e=>y(e,t.id))}),l.addTo(o),n.current.set(t.id,l)}),r.current=o,F(o),()=>{n.current.clear(),o.remove(),r.current=null,F(null)}},[b]);const H=(0,c.jsxs)(m,{onClick:()=>{r.current?.flyTo([20,0],2,{duration:1.2}),j(null)},title:"Reset to world view",children:[(0,c.jsxs)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,c.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,c.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,c.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),"World"]}),Z=l.zoom>=5,q=(0,c.jsxs)(p,{active:E,onClick:()=>C(e=>!e),title:E&&!Z?"Zoom in to level 5+ to see flights":"Toggle live flight tracking",children:["✈ ",E&&!Z?"Zoom in":"Flights"]}),D=(0,c.jsx)(p,{active:!M,onClick:()=>R(e=>!e),title:"Toggle country markers",children:M?"🏳 Hide flags":"🏳 Show flags"}),O=(0,o.useMemo)(()=>(0,i.qs)($),[$]),N=(0,c.jsx)(i.CD,{entries:O,activeId:k,onSelect:function(e){e.id.startsWith("country-")||"__recent__"===e.id||L(e.id)}});return(0,c.jsx)(i.PE,{title:"Earth",sidebar:N,activeId:k,topBarRight:(0,c.jsxs)(c.Fragment,{children:[D,q,H,e]}),children:(0,c.jsxs)(h,{children:[(0,c.jsxs)(g,{children:[(0,c.jsx)(d,{children:(0,c.jsx)("div",{ref:t,style:{height:"100%",width:"100%"}})}),(0,c.jsx)(a.G,{map:B,enabled:E,zoom:l.zoom}),(0,c.jsx)(s.v,{place:I,onClose:()=>j(null)})]}),(0,c.jsxs)(u,{children:[(0,c.jsxs)("span",{children:["Lat: ",l.lat.toFixed(4)]}),(0,c.jsxs)("span",{children:["Lng: ",l.lng.toFixed(4)]}),(0,c.jsxs)("span",{children:["Zoom: ",l.zoom]}),(0,c.jsx)(f,{children:"|"}),(0,c.jsxs)("span",{children:["UTC ",(0,i.u6)(z)]}),_&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(f,{children:"·"}),(0,c.jsxs)("span",{children:[_.flag," ",_.name," ",(0,i.w3)(z,_.timezone)]}),(0,c.jsx)(f,{children:"·"}),(0,c.jsx)("span",{children:(0,i.$L)(z,_.timezone)})]}),(0,c.jsx)("span",{style:{marginLeft:"auto"},children:"© OpenStreetMap contributors"})]})]})})}const v=document.getElementById("root");if(!v)throw new Error("Root element #root not found");(0,n.H)(v).render((0,c.jsx)(b,{}))},8997(e,t,r){var o=r(8991);t.H=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=188.d7ebf72eaab99bd2d7fe.js.map