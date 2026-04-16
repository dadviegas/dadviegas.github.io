"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[188],{188(e,t,o){var r=o(7359),n=o(8997),a=o(3233),i=o(894),l=o(5375),s=o(9390),c=o(5723);const d="earth";function p(){return new Set((0,s.xy)().filter(e=>e.defaultEnabled).map(e=>e.id))}const u="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",f=a.default.div`
  flex: 1;
  min-height: 0;
  height: 100%;
  width: 100%;

  .leaflet-container {
    height: 100%;
    width: 100%;
    background: ${i.w4.colors.mainBg};
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
`,x=a.default.span`opacity: 0.3;`,m=a.default.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,g=a.default.div`
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  overflow: hidden;
`,w=a.default.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background: ${({active:e})=>e?`${i.w4.colors.accent}18`:"transparent"};
  border: 1.5px solid ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.sidebarBorder};
  border-radius: 50%;
  cursor: pointer;
  color: ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.sidebarTextMuted};
  font-size: 16px;
  line-height: 1;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    background: ${i.w4.colors.accent}20;
    color: ${i.w4.colors.accent};
    border-color: ${i.w4.colors.accent};
    transform: scale(1.12);
  }
  &:active { transform: scale(0.95); }

  /* Tooltip below */
  &::after {
    content: attr(data-tip);
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
    padding: 4px 10px;
    background: ${i.w4.colors.surface};
    border: 1px solid ${i.w4.colors.border};
    border-radius: ${i.w4.borderRadius.sm};
    color: ${i.w4.colors.mainText};
    font-size: 11px;
    font-family: ${i.w4.typography.fontFamily};
    font-weight: 500;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s, transform 0.15s;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  &:hover::after {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`,b=a.default.div`
  width: 1px;
  height: 20px;
  background: ${i.w4.colors.sidebarBorder};
  margin: 0 2px;
  flex-shrink: 0;
`,y=a.default.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background: transparent;
  border: 1.5px solid ${i.w4.colors.sidebarBorder};
  border-radius: 50%;
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    background: ${i.w4.colors.accent}20;
    color: ${i.w4.colors.accent};
    border-color: ${i.w4.colors.accent};
    transform: scale(1.12);
  }
  &:active { transform: scale(0.95); }

  &::after {
    content: attr(data-tip);
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
    padding: 4px 10px;
    background: ${i.w4.colors.surface};
    border: 1px solid ${i.w4.colors.border};
    border-radius: ${i.w4.borderRadius.sm};
    color: ${i.w4.colors.mainText};
    font-size: 11px;
    font-family: ${i.w4.typography.fontFamily};
    font-weight: 500;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s, transform 0.15s;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  &:hover::after {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`,v=a.default.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  width: min(520px, calc(100vw - 32px));
  background: rgba(13, 17, 23, 0.95);
  border: 1px solid ${i.w4.colors.sidebarBorder};
  border-radius: ${i.w4.borderRadius.md};
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
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
`,j=a.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
`,k=a.default.button`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  font-size: 14px;
  border-radius: 4px;
  &:hover { background: ${i.w4.colors.sidebarHover}; color: ${i.w4.colors.mainText}; }
`,z=a.default.pre`
  margin: 0;
  padding: 12px 14px;
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  line-height: 1.65;
  color: ${i.w4.colors.mainTextMuted};
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 280px;
`,S=a.default.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(13,17,23,.85);
  border: 1px solid ${i.w4.colors.sidebarBorder};
  border-radius: 6px;
  padding: 4px 12px;
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${i.w4.colors.mainTextMuted};
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
`;function F(e,t){return`${Math.abs(e).toFixed(3)}°${e>=0?"N":"S"}, ${Math.abs(t).toFixed(3)}°${t>=0?"E":"W"}`}function M({topBarRight:e}){const t=(0,r.useRef)(null),o=(0,r.useRef)(null),n=(0,r.useRef)(new Map),a=(0,r.useRef)(null),[M,C]=(0,r.useState)({lat:0,lng:0,zoom:2}),[E,T]=(0,r.useState)(!1),[B,R]=(0,r.useState)(null),[L,I]=(0,r.useState)(null),{recent:_,addRecent:O}=(0,i.rz)("atlantis:earth:recent"),[D,A]=(0,r.useState)(()=>new Date),[W,X]=(0,r.useState)(null),[Z,q]=(0,r.useState)(!1),[N,H]=(0,r.useState)(!1),[J,U]=(0,r.useState)(null),[Y,G]=(0,r.useState)(!0),[P,K]=(0,r.useState)(!1),[V,Q]=(0,r.useState)(p),ee=(0,r.useCallback)(e=>{Q(t=>{const o=new Set(t);return o.has(e)?o.delete(e):o.add(e),o})},[]);(0,r.useEffect)(()=>{const e=setInterval(()=>A(new Date),1e3);return()=>clearInterval(e)},[]);const[te,oe]=(0,r.useState)(null),re=(0,r.useCallback)(async e=>{const t={version:2,enabled:Array.from(V),satellite:P,showFlags:Y};await(0,i.KL)(d,e,JSON.stringify(t)),H(!1),oe(null)},[V,P,Y]),ne=(0,r.useCallback)(async()=>{if(!te)return;const e={version:2,enabled:Array.from(V),satellite:P,showFlags:Y};await(0,i.mZ)(te.id,te.name,JSON.stringify(e)),H(!1)},[te,V,P,Y]),ae=(0,r.useCallback)((e,t,o)=>{oe(t&&o?{id:t,name:o}:null);try{const t=JSON.parse(e);if(2===t.version){const e=t;K(e.satellite),G(e.showFlags),Q(new Set(e.enabled)),e.note&&U(e.note)}else if(1===t.version){const e=t.layers;K(Boolean(e.satellite)),G(Boolean(e.showFlags));const o=new Set;for(const t of["night","aurora","iss","quakes","fires","radar","flights","measure"])e[t]&&o.add(t);Q(o),t.note&&U(t.note)}}catch{}},[]),ie=(0,r.useCallback)(e=>{const t=i.rh.find(t=>t.id===e);t&&o.current&&(o.current.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),R(e),I({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),O(e))},[O]);(0,r.useEffect)(()=>{a.current&&a.current.setUrl(P?"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}":u)},[P]),(0,r.useEffect)(()=>{n.current.forEach((e,t)=>{const o=e.getElement()?.querySelector(".flag-marker");o&&o.classList.toggle("active",t===B)})},[B]),(0,r.useEffect)(()=>{W&&n.current.forEach(e=>{Y?e.addTo(W):e.remove()})},[Y,W]),(0,r.useEffect)(()=>{!function(e){if(document.querySelector(`link[href="${e}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),function(e){return new Promise((t,o)=>{if(document.querySelector(`script[src="${e}"]`))return void t();const r=document.createElement("script");r.src=e,r.onload=()=>t(),r.onerror=o,document.head.appendChild(r)})}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js").then(()=>T(!0))},[]),(0,r.useEffect)(()=>{if(!E||!t.current||o.current)return;const e=window.L,r=e.map(t.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1}),l=e.tileLayer(u,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',maxZoom:19}).addTo(r);return a.current=l,r.on("mousemove",e=>{C(t=>({...t,lat:e.latlng.lat,lng:e.latlng.lng}))}),r.on("zoomend",()=>{C(e=>({...e,zoom:r.getZoom()}))}),r.on("contextmenu",e=>{const{lat:t,lng:o}=e.latlng,r=`custom-${t.toFixed(4)}-${o.toFixed(4)}`;R(null),I({id:r,name:F(t,o),lat:t,lng:o}),q(!0),setTimeout(()=>q(!1),3200)}),i.rh.forEach(t=>{const o=e.divIcon({html:`<div class="flag-marker">${t.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),a=e.marker([t.lat,t.lng],{icon:o});a.on("click",()=>{r.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),R(t.id),I({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),O(t.id)}),a.addTo(r),n.current.set(t.id,a)}),o.current=r,X(r),()=>{n.current.clear(),a.current=null,r.remove(),o.current=null,X(null)}},[E]);const le=(0,r.useMemo)(()=>B?i.rh.find(e=>e.id===B)??null:null,[B]),se=(0,r.useMemo)(()=>(0,i.qs)(_),[_]),ce=M.zoom>=5,de=(0,r.useMemo)(()=>(0,s.xy)(),[]),pe=[{icon:"🛰",name:"Satellite",active:P,toggle:()=>K(e=>!e),title:"Satellite"},{icon:"🚩",name:"Flags",active:Y,toggle:()=>G(e=>!e),title:"Flags",dividerAfter:!0},...de.map(e=>{const t=V.has(e.id),o=e.label.split(" ")[0],r=e.label.split(" ").slice(1).join(" "),n="flights"===e.id&&t&&!ce;return{icon:o,name:n?"Zoom in":"measure"===e.id&&t?"Measuring…":r,active:t,toggle:()=>ee(e.id),title:n?"Zoom in to see flights":r}})],ue=(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.UO,{appId:d,onLoad:ae}),(0,c.jsx)(y,{onClick:()=>H(!0),"data-tip":"Save",children:(0,c.jsxs)("svg",{width:15,height:15,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,c.jsx)("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),(0,c.jsx)("polyline",{points:"17 21 17 13 7 13 7 21"}),(0,c.jsx)("polyline",{points:"7 3 7 8 15 8"})]})})]}),fe=(0,c.jsx)(y,{onClick:()=>{o.current?.flyTo([20,0],2,{duration:1.2}),R(null),I(null)},"data-tip":"World",children:(0,c.jsxs)("svg",{width:15,height:15,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,c.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,c.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,c.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})}),he=(0,c.jsx)(i.CD,{entries:se,activeId:B,onSelect:function(e){e.id.startsWith("country-")||"__recent__"===e.id||ie(e.id)}});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.PE,{title:"Earth",sidebar:he,activeId:B,topBarRight:(0,c.jsxs)(c.Fragment,{children:[pe.map((e,t)=>(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)(w,{active:e.active,onClick:e.toggle,"data-tip":e.title,children:e.icon}),e.dividerAfter&&(0,c.jsx)(b,{})]},e.title)),(0,c.jsx)(b,{}),fe,ue,e]}),children:(0,c.jsxs)(m,{children:[(0,c.jsxs)(g,{children:[(0,c.jsx)(f,{satellite:P,children:(0,c.jsx)("div",{ref:t,style:{height:"100%",width:"100%"}})}),de.map(e=>{const t=e.component,o="flights"===e.id?{zoom:M.zoom}:{};return(0,c.jsx)(t,{map:W,enabled:V.has(e.id),...o},e.id)}),Z&&(0,c.jsx)(S,{children:"Right-click anywhere for instant weather"}),(0,c.jsxs)(v,{visible:!!J,children:[(0,c.jsxs)($,{children:[(0,c.jsx)(j,{children:"Document note"}),(0,c.jsx)(k,{onClick:()=>U(null),children:"✕"})]}),(0,c.jsx)(z,{children:J??""})]}),(0,c.jsx)(l.v,{place:L,onClose:()=>{R(null),I(null)}})]}),(0,c.jsxs)(h,{children:[(0,c.jsxs)("span",{children:["Lat: ",M.lat.toFixed(4)]}),(0,c.jsxs)("span",{children:["Lng: ",M.lng.toFixed(4)]}),(0,c.jsxs)("span",{children:["Zoom: ",M.zoom]}),(0,c.jsx)(x,{children:"|"}),(0,c.jsxs)("span",{children:["UTC ",(0,i.u6)(D)]}),le&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(x,{children:"·"}),(0,c.jsxs)("span",{children:[le.flag," ",le.name," ",(0,i.w3)(D,le.timezone)]}),(0,c.jsx)(x,{children:"·"}),(0,c.jsx)("span",{children:(0,i.$L)(D,le.timezone)})]}),(0,c.jsx)("span",{style:{marginLeft:"auto"},children:P?"© Esri, DigitalGlobe, GeoEye":"© OpenStreetMap contributors"})]})]})}),N&&(0,c.jsx)(i.MJ,{onSave:re,onUpdate:ne,existingDoc:te??void 0,onCancel:()=>H(!1)})]})}const C=document.getElementById("root");if(!C)throw new Error("Root element #root not found");(0,n.H)(C).render((0,c.jsx)(M,{}))},8997(e,t,o){var r=o(8991);t.H=r.createRoot,r.hydrateRoot}}]);
//# sourceMappingURL=188.d1f9fd071dd472f12f3f.js.map