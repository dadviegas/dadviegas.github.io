"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([[36],{6036(e,t,o){o.r(t),o.d(t,{default:()=>M});var r=o(7359),n=o(3233),a=o(5723),l=o(5375),i=o(9390),s=o(8104);const d="earth";function c(){return new Set((0,i.xy)().filter(e=>e.defaultEnabled).map(e=>e.id))}const u="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",p=n.default.div`
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
`,h=n.default.span`opacity: 0.3;`,g=n.default.div`
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
`,m=n.default.button`
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
`,b=n.default.button`
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
`,w=n.default.button`
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
`,k=n.default.button`
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
`,j=n.default.pre`
  margin: 0;
  padding: 12px 14px;
  font-family: ${a.w4.typography.fontFamilyMono};
  font-size: 11px;
  line-height: 1.65;
  color: ${a.w4.colors.mainTextMuted};
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 280px;
`,S=n.default.div`
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
`;function z(e,t){return`${Math.abs(e).toFixed(3)}°${e>=0?"N":"S"}, ${Math.abs(t).toFixed(3)}°${t>=0?"E":"W"}`}function M({topBarRight:e}){const t=(0,r.useRef)(null),o=(0,r.useRef)(null),n=(0,r.useRef)(new Map),M=(0,r.useRef)(null),[T,F]=(0,r.useState)({lat:0,lng:0,zoom:2}),[C,E]=(0,r.useState)(!1),[B,L]=(0,r.useState)(null),[R,_]=(0,r.useState)(null),{recent:I,addRecent:O}=(0,a.rz)("atlantis:earth:recent"),[D,W]=(0,r.useState)(()=>new Date),[Z,q]=(0,r.useState)(null),[H,N]=(0,r.useState)(!1),[A,J]=(0,r.useState)(!1),[U,G]=(0,r.useState)(null),[P,X]=(0,r.useState)(!0),[K,V]=(0,r.useState)(!1),[Q,Y]=(0,r.useState)(c),ee=(0,r.useCallback)(e=>{Y(t=>{const o=new Set(t);return o.has(e)?o.delete(e):o.add(e),o})},[]);(0,r.useEffect)(()=>{const e=setInterval(()=>W(new Date),1e3);return()=>clearInterval(e)},[]);const[te,oe]=(0,r.useState)(null),re=(0,r.useCallback)(async e=>{const t={version:2,enabled:Array.from(Q),satellite:K,showFlags:P};await(0,a.KL)(d,e,JSON.stringify(t)),J(!1),oe(null)},[Q,K,P]),ne=(0,r.useCallback)(async()=>{if(!te)return;const e={version:2,enabled:Array.from(Q),satellite:K,showFlags:P};await(0,a.mZ)(te.id,te.name,JSON.stringify(e)),J(!1)},[te,Q,K,P]),ae=(0,r.useCallback)((e,t,o)=>{oe(t&&o?{id:t,name:o}:null);try{const t=JSON.parse(e);if(2===t.version){const e=t;V(e.satellite),X(e.showFlags),Y(new Set(e.enabled)),e.note&&G(e.note)}else if(1===t.version){const e=t.layers;V(Boolean(e.satellite)),X(Boolean(e.showFlags));const o=new Set;for(const t of["night","aurora","iss","quakes","fires","radar","flights","measure"])e[t]&&o.add(t);Y(o),t.note&&G(t.note)}}catch{}},[]),le=(0,r.useCallback)(e=>{const t=a.rh.find(t=>t.id===e);t&&o.current&&(o.current.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),L(e),_({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),O(e))},[O]);(0,r.useEffect)(()=>{M.current&&M.current.setUrl(K?"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}":u)},[K]),(0,r.useEffect)(()=>{n.current.forEach((e,t)=>{const o=e.getElement()?.querySelector(".flag-marker");o&&o.classList.toggle("active",t===B)})},[B]),(0,r.useEffect)(()=>{Z&&n.current.forEach(e=>{P?e.addTo(Z):e.remove()})},[P,Z]),(0,r.useEffect)(()=>{var e;!function(e){if(document.querySelector(`link[href="${e}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),(e="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",new Promise((t,o)=>{if(document.querySelector(`script[src="${e}"]`))return void t();const r=document.createElement("script");r.src=e,r.onload=()=>t(),r.onerror=o,document.head.appendChild(r)})).then(()=>E(!0))},[]),(0,r.useEffect)(()=>{if(!C||!t.current||o.current)return;const e=window.L,r=e.map(t.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1}),l=e.tileLayer(u,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',maxZoom:19}).addTo(r);return M.current=l,r.on("mousemove",e=>{F(t=>({...t,lat:e.latlng.lat,lng:e.latlng.lng}))}),r.on("zoomend",()=>{F(e=>({...e,zoom:r.getZoom()}))}),r.on("contextmenu",e=>{const{lat:t,lng:o}=e.latlng,r=`custom-${t.toFixed(4)}-${o.toFixed(4)}`;L(null),_({id:r,name:z(t,o),lat:t,lng:o}),N(!0),setTimeout(()=>N(!1),3200)}),a.rh.forEach(t=>{const o=e.divIcon({html:`<div class="flag-marker">${t.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),a=e.marker([t.lat,t.lng],{icon:o});a.on("click",()=>{r.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),L(t.id),_({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),O(t.id)}),a.addTo(r),n.current.set(t.id,a)}),o.current=r,q(r),()=>{n.current.clear(),M.current=null,r.remove(),o.current=null,q(null)}},[C]);const ie=(0,r.useMemo)(()=>B?a.rh.find(e=>e.id===B)??null:null,[B]),se=(0,r.useMemo)(()=>(0,a.qs)(I),[I]),de=T.zoom>=5,ce=(0,r.useMemo)(()=>(0,i.xy)(),[]),ue=[{label:"🛰 Satellite",active:K,toggle:()=>V(e=>!e),title:"Switch to satellite imagery"},{label:"🚩 Flags",active:P,toggle:()=>X(e=>!e),title:"Toggle place markers"},...ce.map(e=>{const t=Q.has(e.id),o="flights"===e.id&&t&&!de;return{label:o?"✈ Zoom in":"measure"===e.id&&t?"📏 Measuring…":e.label,active:t,toggle:()=>ee(e.id),title:o?"Zoom to level 5+ to see flights":e.title}})],pe=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.UO,{appId:d,onLoad:ae}),(0,s.jsxs)(w,{onClick:()=>J(!0),title:"Save current view",children:[(0,s.jsxs)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),(0,s.jsx)("polyline",{points:"17 21 17 13 7 13 7 21"}),(0,s.jsx)("polyline",{points:"7 3 7 8 15 8"})]}),"Save"]})]}),fe=(0,s.jsxs)(b,{onClick:()=>{o.current?.flyTo([20,0],2,{duration:1.2}),L(null),_(null)},title:"Reset to world view",children:[(0,s.jsxs)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,s.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),"World"]}),he=(0,s.jsx)(a.CD,{entries:se,activeId:B,onSelect:function(e){e.id.startsWith("country-")||"__recent__"===e.id||le(e.id)}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.PE,{title:"Earth",sidebar:he,activeId:B,topBarRight:(0,s.jsxs)(s.Fragment,{children:[ue.map(e=>(0,s.jsx)(m,{active:e.active,onClick:e.toggle,title:e.title,children:e.label},e.label)),fe,pe,e]}),children:(0,s.jsxs)(g,{children:[(0,s.jsxs)(x,{children:[(0,s.jsx)(p,{satellite:K,children:(0,s.jsx)("div",{ref:t,style:{height:"100%",width:"100%"}})}),ce.map(e=>{const t=e.component,o="flights"===e.id?{zoom:T.zoom}:{};return(0,s.jsx)(t,{map:Z,enabled:Q.has(e.id),...o},e.id)}),H&&(0,s.jsx)(S,{children:"Right-click anywhere for instant weather"}),(0,s.jsxs)(y,{visible:!!U,children:[(0,s.jsxs)(v,{children:[(0,s.jsx)($,{children:"Document note"}),(0,s.jsx)(k,{onClick:()=>G(null),children:"✕"})]}),(0,s.jsx)(j,{children:U??""})]}),(0,s.jsx)(l.v,{place:R,onClose:()=>{L(null),_(null)}})]}),(0,s.jsxs)(f,{children:[(0,s.jsxs)("span",{children:["Lat: ",T.lat.toFixed(4)]}),(0,s.jsxs)("span",{children:["Lng: ",T.lng.toFixed(4)]}),(0,s.jsxs)("span",{children:["Zoom: ",T.zoom]}),(0,s.jsx)(h,{children:"|"}),(0,s.jsxs)("span",{children:["UTC ",(0,a.u6)(D)]}),ie&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h,{children:"·"}),(0,s.jsxs)("span",{children:[ie.flag," ",ie.name," ",(0,a.w3)(D,ie.timezone)]}),(0,s.jsx)(h,{children:"·"}),(0,s.jsx)("span",{children:(0,a.$L)(D,ie.timezone)})]}),(0,s.jsx)("span",{style:{marginLeft:"auto"},children:K?"© Esri, DigitalGlobe, GeoEye":"© OpenStreetMap contributors"})]})]})}),A&&(0,s.jsx)(a.MJ,{onSave:re,onUpdate:ne,existingDoc:te??void 0,onCancel:()=>J(!1)})]})}}}]);
//# sourceMappingURL=36.6ab90b348d5391457cc6.js.map