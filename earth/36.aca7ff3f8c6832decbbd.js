"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[36],{6036(e,t,r){r.r(t),r.d(t,{default:()=>x});var n=r(7359),o=r(3233),l=r(906),i=r(5375),s=r(5723);const a=o.default.div`
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
`,c=o.default.div`
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
`,d=o.default.span`
  opacity: 0.3;
`,u=o.default.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,h=o.default.div`
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  overflow: hidden;
`,f=o.default.button`
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
`,p="atlantis:earth:recent";function g(){try{return JSON.parse(localStorage.getItem(p)??"[]")}catch{return[]}}function m(e,t){const r=[t,...e.filter(e=>e!==t)].slice(0,8);return function(e){try{localStorage.setItem(p,JSON.stringify(e))}catch{}}(r),r}function x({topBarRight:e}){const t=(0,n.useRef)(null),r=(0,n.useRef)(null),o=(0,n.useRef)(new Map),[p,x]=(0,n.useState)({lat:0,lng:0,zoom:2}),[w,y]=(0,n.useState)(!1),[b,k]=(0,n.useState)(null),[v,j]=(0,n.useState)(g),[$,S]=(0,n.useState)(()=>new Date);(0,n.useEffect)(()=>{const e=setInterval(()=>S(new Date),1e3);return()=>clearInterval(e)},[]);const z=(0,n.useCallback)(e=>{const t=l.rh.find(t=>t.id===e);t&&r.current&&(r.current.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),k(e),j(t=>m(t,e)))},[]),C=(0,n.useMemo)(()=>{if(!b)return null;const e=l.rh.find(e=>e.id===b);return e?{id:e.id,name:e.name,lat:e.lat,lng:e.lng}:null},[b]),E=(0,n.useMemo)(()=>b?l.rh.find(e=>e.id===b)??null:null,[b]);(0,n.useEffect)(()=>{o.current.forEach((e,t)=>{const r=e.getElement()?.querySelector(".flag-marker");r&&r.classList.toggle("active",t===b)})},[b]),(0,n.useEffect)(()=>{var e;!function(e){if(document.querySelector(`link[href="${e}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),(e="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",new Promise((t,r)=>{if(document.querySelector(`script[src="${e}"]`))return void t();const n=document.createElement("script");n.src=e,n.onload=()=>t(),n.onerror=r,document.head.appendChild(n)})).then(()=>y(!0))},[]),(0,n.useEffect)(()=>{if(!w||!t.current||r.current)return;const e=window.L,n=e.map(t.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1});return e.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:19}).addTo(n),n.on("mousemove",e=>{x(t=>({...t,lat:e.latlng.lat,lng:e.latlng.lng}))}),n.on("zoomend",()=>{x(e=>({...e,zoom:n.getZoom()}))}),l.rh.forEach(t=>{const r=e.divIcon({html:`<div class="flag-marker">${t.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),l=e.marker([t.lat,t.lng],{icon:r});l.on("click",()=>{n.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),k(t.id),j(e=>m(e,t.id))}),l.addTo(n),o.current.set(t.id,l)}),r.current=n,()=>{o.current.clear(),n.remove(),r.current=null}},[w]);const M=(0,s.jsxs)(f,{onClick:()=>{r.current?.flyTo([20,0],2,{duration:1.2}),k(null)},title:"Reset to world view",children:[(0,s.jsxs)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,s.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),"World"]}),T=(0,n.useMemo)(()=>(0,l.qs)(v),[v]),L=(0,s.jsx)(l.CD,{entries:T,activeId:b,onSelect:function(e){e.id.startsWith("country-")||"__recent__"===e.id||z(e.id)}});return(0,s.jsx)(l.PE,{title:"Earth",sidebar:L,activeId:b,topBarRight:(0,s.jsxs)(s.Fragment,{children:[M,e]}),children:(0,s.jsxs)(u,{children:[(0,s.jsxs)(h,{children:[(0,s.jsx)(a,{children:(0,s.jsx)("div",{ref:t,style:{height:"100%",width:"100%"}})}),(0,s.jsx)(i.v,{place:C,onClose:()=>k(null)})]}),(0,s.jsxs)(c,{children:[(0,s.jsxs)("span",{children:["Lat: ",p.lat.toFixed(4)]}),(0,s.jsxs)("span",{children:["Lng: ",p.lng.toFixed(4)]}),(0,s.jsxs)("span",{children:["Zoom: ",p.zoom]}),(0,s.jsx)(d,{children:"|"}),(0,s.jsxs)("span",{children:["UTC ",(0,l.u6)($)]}),E&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{children:"·"}),(0,s.jsxs)("span",{children:[E.flag," ",E.name," ",(0,l.w3)($,E.timezone)]}),(0,s.jsx)(d,{children:"·"}),(0,s.jsx)("span",{children:(0,l.$L)($,E.timezone)})]}),(0,s.jsx)("span",{style:{marginLeft:"auto"},children:"© OpenStreetMap contributors"})]})]})})}}}]);
//# sourceMappingURL=36.aca7ff3f8c6832decbbd.js.map