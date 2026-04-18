"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[36],{6036(e,t,o){o.r(t),o.d(t,{default:()=>Z});var r=o(7359),n=o(3233),a=o(6879),i=o(4872),s=o(5375),l=o(9390),d=o(5723);const c="earth";function p(){return new Set((0,l.xy)().filter(e=>e.defaultEnabled).map(e=>e.id))}const u="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",f=n.default.div`
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
`,x=n.default.div`
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
`,w=n.default.section`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 3px 5px;
  height: 34px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 2px 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  flex-shrink: 0;
`,b=n.default.span`
  width: 1px;
  height: 16px;
  background: rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  margin: 0 2px;
`,y=n.default.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  background: ${({active:e})=>e?`${a.w4.colors.accent}33`:"transparent"};
  border: none;
  border-radius: 999px;
  cursor: pointer;
  color: ${a.w4.colors.mainText};
  font-size: 15px;
  line-height: 1;
  filter: ${({active:e})=>e?"saturate(1.15) drop-shadow(0 0 3px rgba(88,166,255,0.45))":"grayscale(0.85) opacity(0.55)"};
  transition: background 0.15s, filter 0.15s, transform 0.15s;

  &:hover {
    background: ${a.w4.colors.sidebarHover};
    filter: saturate(1.15);
    transform: scale(1.06);
  }
  &:focus-visible {
    outline: 2px solid ${a.w4.colors.accent};
    outline-offset: 2px;
  }

  /* Tiny accent dot below the icon when active */
  &::before {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${a.w4.colors.accent};
    opacity: ${({active:e})=>e?1:0};
    transform: translateX(-50%);
    transition: opacity 0.15s;
  }

  /* Tooltip below */
  &::after {
    content: attr(data-tip);
    position: absolute;
    top: calc(100% + 10px);
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
`,v=n.default.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 220px;
  padding: 6px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
`,$=n.default.div`
  position: relative;
`,k=n.default.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  background: ${({active:e})=>e?`${a.w4.colors.accent}22`:"transparent"};
  border: none;
  border-radius: ${a.w4.borderRadius.sm};
  color: ${({active:e})=>e?a.w4.colors.accent:a.w4.colors.mainText};
  font-size: ${a.w4.typography.fontSizeSm};
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.12s, color 0.12s;
  text-align: left;

  &:hover {
    background: ${a.w4.colors.sidebarHover};
    color: ${a.w4.colors.accent};
  }
`,j=n.default.span`
  font-size: 15px;
  line-height: 1;
  width: 18px;
  text-align: center;
  flex-shrink: 0;
`,z=n.default.span`
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,S=n.default.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  display: flex;
  flex-direction: column;
  background: ${a.w4.colors.sidebarBg};
  border: 1px solid ${a.w4.colors.sidebarBorder};
  border-radius: ${a.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,F=n.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,M=n.default.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: none;
  border: none;
  color: ${a.w4.colors.mainText};
  font-size: ${a.w4.typography.fontSizeBase};
  font-family: ${a.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${a.w4.colors.sidebarHover};
    color: ${a.w4.colors.accent};
  }
`,T=n.default.div`
  overflow-y: auto;
  flex: 1;
`,E=n.default.div`
  padding: 16px 14px;
  font-size: ${a.w4.typography.fontSizeBase};
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
  font-style: italic;
`,C=n.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-right: 8px;
  transition: background 0.12s;

  &:hover { background: ${a.w4.colors.sidebarHover}; }
`,L=n.default.button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,B=n.default.div`
  font-size: ${a.w4.typography.fontSizeBase};
  color: ${a.w4.colors.mainText};
  font-family: ${a.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,R=n.default.div`
  font-size: 11px;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
  margin-top: 1px;
`,I=n.default.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${a.w4.borderRadius.sm};
  cursor: pointer;
  color: ${a.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: #f85149;
    background: rgba(248, 81, 73, 0.12);
  }
`,D=n.default.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  color: ${a.w4.colors.mainTextMuted};
  transition: background 0.15s, color 0.15s;

  &:hover {
    color: ${a.w4.colors.accent};
    background: ${a.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${a.w4.colors.accent};
    outline-offset: 2px;
  }

  &::after {
    content: attr(data-tip);
    position: absolute;
    top: calc(100% + 10px);
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
`,N=n.default.div`
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
`,_=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  border-bottom: 1px solid ${a.w4.colors.sidebarBorder};
`,A=n.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${a.w4.colors.sidebarTextMuted};
  font-family: ${a.w4.typography.fontFamily};
`,H=n.default.button`
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
`,O=n.default.pre`
  margin: 0;
  padding: 12px 14px;
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 11px;
  line-height: 1.65;
  color: ${a.w4.colors.mainTextMuted};
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 280px;
`,X=n.default.div`
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
`;function W(e,t){return`${Math.abs(e).toFixed(3)}°${e>=0?"N":"S"}, ${Math.abs(t).toFixed(3)}°${t>=0?"E":"W"}`}function Z({topBarRight:e}){const t=(0,r.useRef)(null),o=(0,r.useRef)(null),n=(0,r.useRef)(new Map),Z=(0,r.useRef)(null),[q,J]=(0,r.useState)({lat:0,lng:0,zoom:2}),[Y,G]=(0,r.useState)(!1),[P,U]=(0,r.useState)(null),[K,V]=(0,r.useState)(null),{recent:Q,addRecent:ee}=(0,a.rz)("atlantis:earth:recent"),[te,oe]=(0,r.useState)(()=>new Date),[re,ne]=(0,r.useState)(null),[ae,ie]=(0,r.useState)(!1),[se,le]=(0,r.useState)(!1),[de,ce]=(0,r.useState)(null),[pe,ue]=(0,r.useState)(!0),[fe,xe]=(0,r.useState)(!1),[he,ge]=(0,r.useState)(p),me=(0,r.useCallback)(e=>{ge(t=>{const o=new Set(t);return o.has(e)?o.delete(e):o.add(e),o})},[]);(0,r.useEffect)(()=>{const e=setInterval(()=>oe(new Date),1e3);return()=>clearInterval(e)},[]);const[we,be]=(0,r.useState)(null),ye=(0,r.useCallback)(async e=>{const t={version:2,enabled:Array.from(he),satellite:fe,showFlags:pe};await(0,a.KL)(c,e,JSON.stringify(t)),le(!1),be(null)},[he,fe,pe]),ve=(0,r.useCallback)(async()=>{if(!we)return;const e={version:2,enabled:Array.from(he),satellite:fe,showFlags:pe};await(0,a.mZ)(we.id,we.name,JSON.stringify(e)),le(!1)},[we,he,fe,pe]),$e=(0,r.useCallback)((e,t,o)=>{be(t&&o?{id:t,name:o}:null);try{const t=JSON.parse(e);if(2===t.version){const e=t;xe(e.satellite),ue(e.showFlags),ge(new Set(e.enabled)),e.note&&ce(e.note)}else if(1===t.version){const e=t.layers;xe(Boolean(e.satellite)),ue(Boolean(e.showFlags));const o=new Set;for(const t of["night","aurora","iss","quakes","fires","radar","flights","measure"])e[t]&&o.add(t);ge(o),t.note&&ce(t.note)}}catch{}},[]),ke=(0,r.useCallback)(e=>{const t=a.rh.find(t=>t.id===e);t&&o.current&&(o.current.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),U(e),V({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),ee(e))},[ee]),je=(0,a.fy)(),ze=(0,r.useRef)(null);(0,r.useEffect)(()=>{if(!re)return;const{placeId:e,lat:t,lon:r,zoom:n}=je;if(e){if(ze.current===`place:${e}`)return;return ze.current=`place:${e}`,void ke(e)}const a=parseFloat(t??""),i=parseFloat(r??"");if(Number.isFinite(a)&&Number.isFinite(i)){const e=parseFloat(n??""),t=Number.isFinite(e)?e:6,r=`coord:${a.toFixed(4)},${i.toFixed(4)},${t}`;if(ze.current===r)return;ze.current=r,o.current?.flyTo([a,i],t,{duration:1.2}),U(null),V({id:r,name:`${a.toFixed(2)}°, ${i.toFixed(2)}°`,lat:a,lng:i})}},[re,je.placeId,je.lat,je.lon,je.zoom,ke]),(0,r.useEffect)(()=>{Z.current&&Z.current.setUrl(fe?"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}":u)},[fe]),(0,r.useEffect)(()=>{n.current.forEach((e,t)=>{const o=e.getElement()?.querySelector(".flag-marker");o&&o.classList.toggle("active",t===P)})},[P]),(0,r.useEffect)(()=>{re&&n.current.forEach(e=>{pe?e.addTo(re):e.remove()})},[pe,re]),(0,r.useEffect)(()=>{var e;!function(e){if(document.querySelector(`link[href="${e}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),(e="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",new Promise((t,o)=>{if(document.querySelector(`script[src="${e}"]`))return void t();const r=document.createElement("script");r.src=e,r.onload=()=>t(),r.onerror=o,document.head.appendChild(r)})).then(()=>G(!0))},[]),(0,r.useEffect)(()=>{if(!Y||!t.current||o.current)return;const e=window.L,r=e.map(t.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1}),i=e.tileLayer(u,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',maxZoom:19}).addTo(r);return Z.current=i,r.on("mousemove",e=>{J(t=>({...t,lat:e.latlng.lat,lng:e.latlng.lng}))}),r.on("zoomend",()=>{J(e=>({...e,zoom:r.getZoom()}))}),r.on("contextmenu",e=>{const{lat:t,lng:o}=e.latlng,r=`custom-${t.toFixed(4)}-${o.toFixed(4)}`;U(null),V({id:r,name:W(t,o),lat:t,lng:o}),ie(!0),setTimeout(()=>ie(!1),3200)}),a.rh.forEach(t=>{const o=e.divIcon({html:`<div class="flag-marker">${t.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),a=e.marker([t.lat,t.lng],{icon:o});a.on("click",()=>{r.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),U(t.id),V({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),ee(t.id)}),a.addTo(r),n.current.set(t.id,a)}),o.current=r,ne(r),()=>{n.current.clear(),Z.current=null,r.remove(),o.current=null,ne(null)}},[Y]);const Se=(0,r.useMemo)(()=>P?a.rh.find(e=>e.id===P)??null:null,[P]),Fe=(0,r.useMemo)(()=>(0,a.qs)(Q),[Q]),Me=q.zoom>=5,Te=(0,r.useMemo)(()=>(0,l.xy)(),[]),Ee=[{icon:"🛰",name:"Satellite",active:fe,toggle:()=>xe(e=>!e),title:"Satellite"},{icon:"🚩",name:"Flags",active:pe,toggle:()=>ue(e=>!e),title:"Flags",dividerAfter:!0},...Te.map(e=>{const t=he.has(e.id),o=e.label.split(" ")[0],r=e.label.split(" ").slice(1).join(" "),n="flights"===e.id&&t&&!Me;return{icon:o,name:n?"Zoom in":"measure"===e.id&&t?"Measuring…":r,active:t,toggle:()=>me(e.id),title:n?"Zoom in to see flights":r}})],Ce=function(e){const[t,o]=(0,r.useState)(()=>"undefined"!=typeof window&&window.matchMedia(e).matches);return(0,r.useEffect)(()=>{const t=window.matchMedia(e),r=e=>o(e.matches);return t.addEventListener("change",r),()=>t.removeEventListener("change",r)},[e]),t}("(max-width: 1100px)"),[Le,Be]=(0,r.useState)(!1),Re=(0,r.useRef)(null);(0,r.useEffect)(()=>{if(!Le)return;const e=e=>{Re.current&&!Re.current.contains(e.target)&&Be(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[Le]);const Ie=Ee.filter(e=>e.active).length,[De,Ne]=(0,r.useState)(!1),[_e,Ae]=(0,r.useState)([]),He=(0,r.useRef)(null);(0,r.useEffect)(()=>{if(!De)return;(0,a.Iu)(c).then(Ae).catch(()=>{});const e=e=>{He.current&&!He.current.contains(e.target)&&Ne(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[De]);const Oe=(0,r.useCallback)(async e=>{await(0,a.kd)(e),Ae(t=>t.filter(t=>t.id!==e))},[]),Xe=(0,d.jsxs)($,{ref:He,children:[(0,d.jsx)(D,{onClick:()=>Ne(e=>!e),"data-tip":"Save / Saved",children:(0,d.jsxs)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,d.jsx)("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),(0,d.jsx)("polyline",{points:"17 21 17 13 7 13 7 21"}),(0,d.jsx)("polyline",{points:"7 3 7 8 15 8"})]})}),De&&(0,d.jsxs)(S,{children:[(0,d.jsx)(F,{children:"Save"}),(0,d.jsx)(M,{onClick:()=>{Ne(!1),le(!0)},children:"Save current view…"}),(0,d.jsx)(F,{children:"Saved versions"}),(0,d.jsx)(T,{children:0===_e.length?(0,d.jsx)(E,{children:"No saved documents yet."}):_e.map(e=>{return(0,d.jsxs)(C,{children:[(0,d.jsxs)(L,{onClick:()=>{$e(e.content,e.id,e.name),Ne(!1)},children:[(0,d.jsx)(B,{children:e.name}),(0,d.jsx)(R,{children:(t=e.savedAt,new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(t)))})]}),(0,d.jsx)(I,{onClick:t=>{t.stopPropagation(),Oe(e.id)},title:"Delete",children:(0,d.jsx)(i.A,{size:13})})]},e.id);var t})})]})]}),We=(0,d.jsx)(D,{onClick:()=>{o.current?.flyTo([20,0],2,{duration:1.2}),U(null),V(null)},"data-tip":"World",children:(0,d.jsxs)("svg",{width:15,height:15,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,d.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,d.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,d.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})}),Ze=(0,d.jsx)(a.CD,{entries:Fe,activeId:P,onSelect:function(e){e.id.startsWith("country-")||"__recent__"===e.id||ke(e.id)}});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.PE,{title:"Earth",sidebar:Ze,activeId:P,topBarRight:(0,d.jsxs)(d.Fragment,{children:[Ce?(0,d.jsxs)($,{ref:Re,children:[(0,d.jsxs)(w,{children:[(0,d.jsx)(y,{active:Le||Ie>0,onClick:()=>Be(e=>!e),"data-tip":"Layers",children:"☰"}),Ie>0&&(0,d.jsx)("span",{style:{fontSize:11,fontFamily:a.w4.typography.fontFamilyMono,color:a.w4.colors.accent,padding:"0 6px 0 2px"},children:Ie})]}),Le&&(0,d.jsx)(v,{children:Ee.map(e=>(0,d.jsxs)(k,{active:e.active,onClick:e.toggle,children:[(0,d.jsx)(j,{children:e.icon}),(0,d.jsx)(z,{children:e.name})]},e.title))})]}):(0,d.jsx)(w,{children:Ee.map(e=>(0,d.jsxs)(r.Fragment,{children:[(0,d.jsx)(y,{active:e.active,onClick:e.toggle,"data-tip":e.title,children:e.icon}),e.dividerAfter&&(0,d.jsx)(b,{})]},e.title))}),(0,d.jsxs)(w,{children:[We,(0,d.jsx)(b,{}),Xe]}),e]}),children:(0,d.jsxs)(g,{children:[(0,d.jsxs)(m,{children:[(0,d.jsx)(f,{satellite:fe,children:(0,d.jsx)("div",{ref:t,style:{height:"100%",width:"100%"}})}),Te.map(e=>{const t=e.component,o="flights"===e.id?{zoom:q.zoom}:{};return(0,d.jsx)(t,{map:re,enabled:he.has(e.id),...o},e.id)}),ae&&(0,d.jsx)(X,{children:"Right-click anywhere for instant weather"}),(0,d.jsxs)(N,{visible:!!de,children:[(0,d.jsxs)(_,{children:[(0,d.jsx)(A,{children:"Document note"}),(0,d.jsx)(H,{onClick:()=>ce(null),children:"✕"})]}),(0,d.jsx)(O,{children:de??""})]}),(0,d.jsx)(s.v,{place:K,onClose:()=>{U(null),V(null)}})]}),(0,d.jsxs)(x,{children:[(0,d.jsxs)("span",{children:["Lat: ",q.lat.toFixed(4)]}),(0,d.jsxs)("span",{children:["Lng: ",q.lng.toFixed(4)]}),(0,d.jsxs)("span",{children:["Zoom: ",q.zoom]}),(0,d.jsx)(h,{children:"|"}),(0,d.jsxs)("span",{children:["UTC ",(0,a.u6)(te)]}),Se&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{children:"·"}),(0,d.jsxs)("span",{children:[Se.flag," ",Se.name," ",(0,a.w3)(te,Se.timezone)]}),(0,d.jsx)(h,{children:"·"}),(0,d.jsx)("span",{children:(0,a.$L)(te,Se.timezone)})]}),(0,d.jsx)("span",{style:{marginLeft:"auto"},children:fe?"© Esri, DigitalGlobe, GeoEye":"© OpenStreetMap contributors"})]})]})}),se&&(0,d.jsx)(a.MJ,{onSave:ye,onUpdate:ve,existingDoc:we??void 0,onCancel:()=>le(!1)})]})}}}]);
//# sourceMappingURL=36.8a206181fd9d81d6964a.js.map