"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[188],{188(e,n,o){var a=o(359),i=o(997),t=o(233),r=o(365),l=o(375),m=o(723);const s=t.default.div`
  flex: 1;
  min-height: 0;
  height: 100%;
  width: 100%;

  .leaflet-container {
    height: 100%;
    width: 100%;
    background: ${r.w4.colors.mainBg};
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
`,d=t.default.div`
  height: 28px;
  min-height: 28px;
  background: ${r.w4.colors.sidebarBg};
  border-top: 1px solid ${r.w4.colors.sidebarBorder};
  display: flex;
  align-items: center;
  padding: 0 ${r.w4.spacing.md};
  gap: ${r.w4.spacing.lg};
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,c=t.default.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,p=t.default.div`
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  overflow: hidden;
`,g=t.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${r.w4.colors.sidebarBorder};
  border-radius: ${r.w4.borderRadius.md};
  cursor: pointer;
  color: ${r.w4.colors.sidebarTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  font-family: ${r.w4.typography.fontFamily};
  transition: background 0.15s, color 0.15s, border-color 0.15s;

  &:hover {
    background: ${r.w4.colors.sidebarHover};
    color: ${r.w4.colors.sidebarText};
    border-color: ${r.w4.colors.sidebarText};
  }
`,u=[{id:"portugal",name:"Portugal",icon:"map-pin",children:[{id:"lisbon",name:"Lisbon",icon:"map-pin"},{id:"porto",name:"Porto",icon:"map-pin"},{id:"faro",name:"Faro",icon:"map-pin"},{id:"coimbra",name:"Coimbra",icon:"map-pin"},{id:"braga",name:"Braga",icon:"map-pin"},{id:"ponta-delgada",name:"Ponta Delgada",icon:"map-pin"},{id:"lourinha",name:"Lourinhã",icon:"map-pin"}]},{id:"europe",name:"Europe",icon:"map-pin",children:[{id:"madrid",name:"Madrid",icon:"map-pin"},{id:"paris",name:"Paris",icon:"map-pin"},{id:"london",name:"London",icon:"map-pin"},{id:"berlin",name:"Berlin",icon:"map-pin"},{id:"rome",name:"Rome",icon:"map-pin"},{id:"amsterdam",name:"Amsterdam",icon:"map-pin"}]},{id:"americas",name:"Americas",icon:"map-pin",children:[{id:"new-york",name:"New York",icon:"map-pin"},{id:"sao-paulo",name:"São Paulo",icon:"map-pin"},{id:"buenos-aires",name:"Buenos Aires",icon:"map-pin"},{id:"mexico-city",name:"Mexico City",icon:"map-pin"}]},{id:"asia",name:"Asia",icon:"map-pin",children:[{id:"tokyo",name:"Tokyo",icon:"map-pin"},{id:"dubai",name:"Dubai",icon:"map-pin"},{id:"singapore",name:"Singapore",icon:"map-pin"},{id:"beijing",name:"Beijing",icon:"map-pin"},{id:"mumbai",name:"Mumbai",icon:"map-pin"}]},{id:"other",name:"Other",icon:"map-pin",children:[{id:"sydney",name:"Sydney",icon:"map-pin"},{id:"cape-town",name:"Cape Town",icon:"map-pin"}]}],f={lisbon:{lat:38.7169,lng:-9.1399,zoom:12,name:"Lisbon",flag:"🇵🇹"},porto:{lat:41.1579,lng:-8.6291,zoom:12,name:"Porto",flag:"🇵🇹"},faro:{lat:37.0194,lng:-7.9322,zoom:12,name:"Faro",flag:"🇵🇹"},coimbra:{lat:40.2033,lng:-8.4103,zoom:12,name:"Coimbra",flag:"🇵🇹"},braga:{lat:41.5518,lng:-8.4229,zoom:12,name:"Braga",flag:"🇵🇹"},"ponta-delgada":{lat:37.7412,lng:-25.6756,zoom:12,name:"Ponta Delgada",flag:"🇵🇹"},lourinha:{lat:39.2417,lng:-9.3133,zoom:12,name:"Lourinhã",flag:"🇵🇹"},madrid:{lat:40.4168,lng:-3.7038,zoom:12,name:"Madrid",flag:"🇪🇸"},paris:{lat:48.8566,lng:2.3522,zoom:12,name:"Paris",flag:"🇫🇷"},london:{lat:51.5074,lng:-.1278,zoom:12,name:"London",flag:"🇬🇧"},berlin:{lat:52.52,lng:13.405,zoom:12,name:"Berlin",flag:"🇩🇪"},rome:{lat:41.9028,lng:12.4964,zoom:12,name:"Rome",flag:"🇮🇹"},amsterdam:{lat:52.3676,lng:4.9041,zoom:12,name:"Amsterdam",flag:"🇳🇱"},"new-york":{lat:40.7128,lng:-74.006,zoom:12,name:"New York",flag:"🇺🇸"},"sao-paulo":{lat:-23.5505,lng:-46.6333,zoom:11,name:"São Paulo",flag:"🇧🇷"},"buenos-aires":{lat:-34.6037,lng:-58.3816,zoom:12,name:"Buenos Aires",flag:"🇦🇷"},"mexico-city":{lat:19.4326,lng:-99.1332,zoom:12,name:"Mexico City",flag:"🇲🇽"},tokyo:{lat:35.6762,lng:139.6503,zoom:12,name:"Tokyo",flag:"🇯🇵"},dubai:{lat:25.2048,lng:55.2708,zoom:12,name:"Dubai",flag:"🇦🇪"},singapore:{lat:1.3521,lng:103.8198,zoom:12,name:"Singapore",flag:"🇸🇬"},beijing:{lat:39.9042,lng:116.4074,zoom:12,name:"Beijing",flag:"🇨🇳"},mumbai:{lat:19.076,lng:72.8777,zoom:12,name:"Mumbai",flag:"🇮🇳"},sydney:{lat:-33.8688,lng:151.2093,zoom:12,name:"Sydney",flag:"🇦🇺"},"cape-town":{lat:-33.9249,lng:18.4241,zoom:12,name:"Cape Town",flag:"🇿🇦"}};function h({topBarRight:e}){const n=(0,a.useRef)(null),o=(0,a.useRef)(null),i=(0,a.useRef)(new Map),[t,h]=(0,a.useState)({lat:0,lng:0,zoom:2}),[x,b]=(0,a.useState)(!1),[y,w]=(0,a.useState)(null),z=(0,a.useCallback)(e=>{const n=f[e];n&&o.current&&(o.current.flyTo([n.lat,n.lng],n.zoom,{duration:1.2}),w(e))},[]),k=(0,a.useMemo)(()=>y?{id:y,...f[y]}:null,[y]);(0,a.useEffect)(()=>{i.current.forEach((e,n)=>{const o=e.getElement()?.querySelector(".flag-marker");o&&o.classList.toggle("active",n===y)})},[y]),(0,a.useEffect)(()=>{!function(e){if(document.querySelector(`link[href="${e}"]`))return;const n=document.createElement("link");n.rel="stylesheet",n.href=e,document.head.appendChild(n)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),function(e){return new Promise((n,o)=>{if(document.querySelector(`script[src="${e}"]`))return void n();const a=document.createElement("script");a.src=e,a.onload=()=>n(),a.onerror=o,document.head.appendChild(a)})}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js").then(()=>b(!0))},[]),(0,a.useEffect)(()=>{if(!x||!n.current||o.current)return;const e=window.L,a=e.map(n.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1});return e.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:19}).addTo(a),a.on("mousemove",e=>{h(n=>({...n,lat:e.latlng.lat,lng:e.latlng.lng}))}),a.on("zoomend",()=>{h(e=>({...e,zoom:a.getZoom()}))}),Object.entries(f).forEach(([n,o])=>{const t=e.divIcon({html:`<div class="flag-marker">${o.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),r=e.marker([o.lat,o.lng],{icon:t});r.on("click",()=>{a.flyTo([o.lat,o.lng],o.zoom,{duration:1.2}),w(n)}),r.addTo(a),i.current.set(n,r)}),o.current=a,()=>{i.current.clear(),a.remove(),o.current=null}},[x]);const v=(0,m.jsxs)(g,{onClick:()=>{o.current?.flyTo([20,0],2,{duration:1.2}),w(null)},title:"Reset to world view",children:[(0,m.jsxs)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,m.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,m.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,m.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),"World"]}),j=(0,m.jsx)(r.CD,{entries:u,activeId:y,onSelect:function(e){z(e.id)}});return(0,m.jsx)(r.PE,{title:"Earth",sidebar:j,activeId:y,topBarRight:(0,m.jsxs)(m.Fragment,{children:[v,e]}),children:(0,m.jsxs)(c,{children:[(0,m.jsxs)(p,{children:[(0,m.jsx)(s,{children:(0,m.jsx)("div",{ref:n,style:{height:"100%",width:"100%"}})}),(0,m.jsx)(l.v,{place:k,onClose:()=>w(null)})]}),(0,m.jsxs)(d,{children:[(0,m.jsxs)("span",{children:["Lat: ",t.lat.toFixed(4)]}),(0,m.jsxs)("span",{children:["Lng: ",t.lng.toFixed(4)]}),(0,m.jsxs)("span",{children:["Zoom: ",t.zoom]}),(0,m.jsx)("span",{style:{marginLeft:"auto"},children:"© OpenStreetMap contributors"})]})]})})}const x=document.getElementById("root");if(!x)throw new Error("Root element #root not found");(0,i.H)(x).render((0,m.jsx)(h,{}))},997(e,n,o){var a=o(991);n.H=a.createRoot,a.hydrateRoot}}]);
//# sourceMappingURL=188.1dec201d0a26fde87ac4.js.map