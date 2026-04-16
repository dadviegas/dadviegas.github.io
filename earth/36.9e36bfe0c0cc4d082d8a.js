"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[36],{6036(e,t,r){r.r(t),r.d(t,{default:()=>F});var o=r(7359),n=r(3233),a=r(894),i=r(5375),l=r(9390),s=r(5723);const c="earth";function d(){return new Set((0,l.xy)().filter(e=>e.defaultEnabled).map(e=>e.id))}const p="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",u=n.default.div`
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
`,h=n.default.span`opacity: 0.3;`,x=n.default.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,g=n.default.div`
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  overflow: hidden;
`,m=n.default.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background: ${({active:e})=>e?`${a.w4.colors.accent}18`:"transparent"};
  border: 1.5px solid ${({active:e})=>e?a.w4.colors.accent:a.w4.colors.sidebarBorder};
  border-radius: 50%;
  cursor: pointer;
  color: ${({active:e})=>e?a.w4.colors.accent:a.w4.colors.sidebarTextMuted};
  font-size: 16px;
  line-height: 1;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    background: ${a.w4.colors.accent}20;
    color: ${a.w4.colors.accent};
    border-color: ${a.w4.colors.accent};
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
    background: ${a.w4.colors.surface};
    border: 1px solid ${a.w4.colors.border};
    border-radius: ${a.w4.borderRadius.sm};
    color: ${a.w4.colors.mainText};
    font-size: 11px;
    font-family: ${a.w4.typography.fontFamily};
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
`,b=n.default.div`
  width: 1px;
  height: 20px;
  background: ${a.w4.colors.sidebarBorder};
  margin: 0 2px;
  flex-shrink: 0;
`,w=n.default.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background: transparent;
  border: 1.5px solid ${a.w4.colors.sidebarBorder};
  border-radius: 50%;
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    background: ${a.w4.colors.accent}20;
    color: ${a.w4.colors.accent};
    border-color: ${a.w4.colors.accent};
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
    background: ${a.w4.colors.surface};
    border: 1px solid ${a.w4.colors.border};
    border-radius: ${a.w4.borderRadius.sm};
    color: ${a.w4.colors.mainText};
    font-size: 11px;
    font-family: ${a.w4.typography.fontFamily};
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
`,$=n.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
`,j=n.default.button`
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
`,k=n.default.pre`
  margin: 0;
  padding: 12px 14px;
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 11px;
  line-height: 1.65;
  color: ${a.w4.colors.mainTextMuted};
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 280px;
`,z=n.default.div`
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
`;function S(e,t){return`${Math.abs(e).toFixed(3)}°${e>=0?"N":"S"}, ${Math.abs(t).toFixed(3)}°${t>=0?"E":"W"}`}function F({topBarRight:e}){const t=(0,o.useRef)(null),r=(0,o.useRef)(null),n=(0,o.useRef)(new Map),F=(0,o.useRef)(null),[M,C]=(0,o.useState)({lat:0,lng:0,zoom:2}),[T,E]=(0,o.useState)(!1),[B,L]=(0,o.useState)(null),[R,_]=(0,o.useState)(null),{recent:I,addRecent:O}=(0,a.rz)("atlantis:earth:recent"),[D,A]=(0,o.useState)(()=>new Date),[W,X]=(0,o.useState)(null),[Z,q]=(0,o.useState)(!1),[N,J]=(0,o.useState)(!1),[U,Y]=(0,o.useState)(null),[G,H]=(0,o.useState)(!0),[P,K]=(0,o.useState)(!1),[V,Q]=(0,o.useState)(d),ee=(0,o.useCallback)(e=>{Q(t=>{const r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},[]);(0,o.useEffect)(()=>{const e=setInterval(()=>A(new Date),1e3);return()=>clearInterval(e)},[]);const[te,re]=(0,o.useState)(null),oe=(0,o.useCallback)(async e=>{const t={version:2,enabled:Array.from(V),satellite:P,showFlags:G};await(0,a.KL)(c,e,JSON.stringify(t)),J(!1),re(null)},[V,P,G]),ne=(0,o.useCallback)(async()=>{if(!te)return;const e={version:2,enabled:Array.from(V),satellite:P,showFlags:G};await(0,a.mZ)(te.id,te.name,JSON.stringify(e)),J(!1)},[te,V,P,G]),ae=(0,o.useCallback)((e,t,r)=>{re(t&&r?{id:t,name:r}:null);try{const t=JSON.parse(e);if(2===t.version){const e=t;K(e.satellite),H(e.showFlags),Q(new Set(e.enabled)),e.note&&Y(e.note)}else if(1===t.version){const e=t.layers;K(Boolean(e.satellite)),H(Boolean(e.showFlags));const r=new Set;for(const t of["night","aurora","iss","quakes","fires","radar","flights","measure"])e[t]&&r.add(t);Q(r),t.note&&Y(t.note)}}catch{}},[]),ie=(0,o.useCallback)(e=>{const t=a.rh.find(t=>t.id===e);t&&r.current&&(r.current.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),L(e),_({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),O(e))},[O]);(0,o.useEffect)(()=>{F.current&&F.current.setUrl(P?"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}":p)},[P]),(0,o.useEffect)(()=>{n.current.forEach((e,t)=>{const r=e.getElement()?.querySelector(".flag-marker");r&&r.classList.toggle("active",t===B)})},[B]),(0,o.useEffect)(()=>{W&&n.current.forEach(e=>{G?e.addTo(W):e.remove()})},[G,W]),(0,o.useEffect)(()=>{var e;!function(e){if(document.querySelector(`link[href="${e}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),(e="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",new Promise((t,r)=>{if(document.querySelector(`script[src="${e}"]`))return void t();const o=document.createElement("script");o.src=e,o.onload=()=>t(),o.onerror=r,document.head.appendChild(o)})).then(()=>E(!0))},[]),(0,o.useEffect)(()=>{if(!T||!t.current||r.current)return;const e=window.L,o=e.map(t.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1}),i=e.tileLayer(p,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',maxZoom:19}).addTo(o);return F.current=i,o.on("mousemove",e=>{C(t=>({...t,lat:e.latlng.lat,lng:e.latlng.lng}))}),o.on("zoomend",()=>{C(e=>({...e,zoom:o.getZoom()}))}),o.on("contextmenu",e=>{const{lat:t,lng:r}=e.latlng,o=`custom-${t.toFixed(4)}-${r.toFixed(4)}`;L(null),_({id:o,name:S(t,r),lat:t,lng:r}),q(!0),setTimeout(()=>q(!1),3200)}),a.rh.forEach(t=>{const r=e.divIcon({html:`<div class="flag-marker">${t.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),a=e.marker([t.lat,t.lng],{icon:r});a.on("click",()=>{o.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),L(t.id),_({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),O(t.id)}),a.addTo(o),n.current.set(t.id,a)}),r.current=o,X(o),()=>{n.current.clear(),F.current=null,o.remove(),r.current=null,X(null)}},[T]);const le=(0,o.useMemo)(()=>B?a.rh.find(e=>e.id===B)??null:null,[B]),se=(0,o.useMemo)(()=>(0,a.qs)(I),[I]),ce=M.zoom>=5,de=(0,o.useMemo)(()=>(0,l.xy)(),[]),pe=[{icon:"🛰",name:"Satellite",active:P,toggle:()=>K(e=>!e),title:"Satellite"},{icon:"🚩",name:"Flags",active:G,toggle:()=>H(e=>!e),title:"Flags",dividerAfter:!0},...de.map(e=>{const t=V.has(e.id),r=e.label.split(" ")[0],o=e.label.split(" ").slice(1).join(" "),n="flights"===e.id&&t&&!ce;return{icon:r,name:n?"Zoom in":"measure"===e.id&&t?"Measuring…":o,active:t,toggle:()=>ee(e.id),title:n?"Zoom in to see flights":o}})],ue=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.UO,{appId:c,onLoad:ae}),(0,s.jsx)(w,{onClick:()=>J(!0),"data-tip":"Save",children:(0,s.jsxs)("svg",{width:15,height:15,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),(0,s.jsx)("polyline",{points:"17 21 17 13 7 13 7 21"}),(0,s.jsx)("polyline",{points:"7 3 7 8 15 8"})]})})]}),fe=(0,s.jsx)(w,{onClick:()=>{r.current?.flyTo([20,0],2,{duration:1.2}),L(null),_(null)},"data-tip":"World",children:(0,s.jsxs)("svg",{width:15,height:15,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,s.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})}),he=(0,s.jsx)(a.CD,{entries:se,activeId:B,onSelect:function(e){e.id.startsWith("country-")||"__recent__"===e.id||ie(e.id)}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.PE,{title:"Earth",sidebar:he,activeId:B,topBarRight:(0,s.jsxs)(s.Fragment,{children:[pe.map((e,t)=>(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(m,{active:e.active,onClick:e.toggle,"data-tip":e.title,children:e.icon}),e.dividerAfter&&(0,s.jsx)(b,{})]},e.title)),(0,s.jsx)(b,{}),fe,ue,e]}),children:(0,s.jsxs)(x,{children:[(0,s.jsxs)(g,{children:[(0,s.jsx)(u,{satellite:P,children:(0,s.jsx)("div",{ref:t,style:{height:"100%",width:"100%"}})}),de.map(e=>{const t=e.component,r="flights"===e.id?{zoom:M.zoom}:{};return(0,s.jsx)(t,{map:W,enabled:V.has(e.id),...r},e.id)}),Z&&(0,s.jsx)(z,{children:"Right-click anywhere for instant weather"}),(0,s.jsxs)(y,{visible:!!U,children:[(0,s.jsxs)(v,{children:[(0,s.jsx)($,{children:"Document note"}),(0,s.jsx)(j,{onClick:()=>Y(null),children:"✕"})]}),(0,s.jsx)(k,{children:U??""})]}),(0,s.jsx)(i.v,{place:R,onClose:()=>{L(null),_(null)}})]}),(0,s.jsxs)(f,{children:[(0,s.jsxs)("span",{children:["Lat: ",M.lat.toFixed(4)]}),(0,s.jsxs)("span",{children:["Lng: ",M.lng.toFixed(4)]}),(0,s.jsxs)("span",{children:["Zoom: ",M.zoom]}),(0,s.jsx)(h,{children:"|"}),(0,s.jsxs)("span",{children:["UTC ",(0,a.u6)(D)]}),le&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h,{children:"·"}),(0,s.jsxs)("span",{children:[le.flag," ",le.name," ",(0,a.w3)(D,le.timezone)]}),(0,s.jsx)(h,{children:"·"}),(0,s.jsx)("span",{children:(0,a.$L)(D,le.timezone)})]}),(0,s.jsx)("span",{style:{marginLeft:"auto"},children:P?"© Esri, DigitalGlobe, GeoEye":"© OpenStreetMap contributors"})]})]})}),N&&(0,s.jsx)(a.MJ,{onSave:oe,onUpdate:ne,existingDoc:te??void 0,onCancel:()=>J(!1)})]})}}}]);
//# sourceMappingURL=36.9e36bfe0c0cc4d082d8a.js.map