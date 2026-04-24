"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([["5512"],{8997(e,t,r){var o=r(2727);t.createRoot=o.createRoot,o.hydrateRoot},3611(e,t,r){var o=r(5723),n=r(7991),i=r.n(n),a=r(8997),s=r(6859),l=r.n(s),d=r(3930),c=r(8311),p=r(7777),u=r(1112);let x="earth";function f(){return new Set((0,u.xy)().filter(e=>e.defaultEnabled).map(e=>e.id))}let h="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",g=l().div`
  flex: 1;
  min-height: 0;
  height: 100%;
  width: 100%;

  .leaflet-container {
    height: 100%;
    width: 100%;
    background: ${d.w4.colors.mainBg};
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
    transition: transform ${d.w4.transitions.base};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flag-marker:hover  { transform: scale(1.25); }
  .flag-marker.active { transform: scale(1.35); filter: drop-shadow(0 0 6px rgba(88, 166, 255, 0.9)); }
`,m=l().div`
  height: 28px;
  min-height: 28px;
  background: ${d.w4.colors.sidebarBg};
  border-top: 1px solid ${d.w4.colors.sidebarBorder};
  display: flex;
  align-items: center;
  padding: 0 ${d.w4.spacing.md};
  gap: ${d.w4.spacing.lg};
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,w=l().span`opacity: 0.3;`,b=l().div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,y=l().div`
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  overflow: hidden;
`,v=l().section`
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
`,$=l().span`
  width: 1px;
  height: 16px;
  background: rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  margin: 0 2px;
`,k=l().button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  background: ${({active:e})=>e?`${d.w4.colors.accent}33`:"transparent"};
  border: none;
  border-radius: 999px;
  cursor: pointer;
  color: ${d.w4.colors.mainText};
  font-size: 14px;
  line-height: 1;
  filter: ${({active:e})=>e?"saturate(1.15) drop-shadow(0 0 3px rgba(88,166,255,0.45))":"grayscale(0.85) opacity(0.55)"};
  transition: background ${d.w4.transitions.base}, filter ${d.w4.transitions.base}, transform ${d.w4.transitions.base};

  &:hover {
    background: ${d.w4.colors.sidebarHover};
    filter: saturate(1.15);
    transform: scale(1.06);
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
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
    background: ${d.w4.colors.accent};
    opacity: ${({active:e})=>+!!e};
    transform: translateX(-50%);
    transition: opacity ${d.w4.transitions.base};
  }

  /* Tooltip below */
  &::after {
    content: attr(data-tip);
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
    padding: 4px 10px;
    background: ${d.w4.colors.surface};
    border: 1px solid ${d.w4.colors.border};
    border-radius: ${d.w4.borderRadius.sm};
    color: ${d.w4.colors.mainText};
    font-size: 11px;
    font-family: ${d.w4.typography.fontFamily};
    font-weight: 500;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity ${d.w4.transitions.base}, transform ${d.w4.transitions.base};
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  &:hover::after {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`,j=l().div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 220px;
  padding: 6px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
`,z=l().div`
  position: relative;
`,S=l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  background: ${({active:e})=>e?`${d.w4.colors.accent}22`:"transparent"};
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeSm};
  font-family: ${d.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};
  text-align: left;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
    color: ${d.w4.colors.accent};
  }
`,F=l().span`
  font-size: 14px;
  line-height: 1;
  width: 18px;
  text-align: center;
  flex-shrink: 0;
`,E=l().span`
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,C=l().div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  display: flex;
  flex-direction: column;
  background: ${d.w4.colors.sidebarBg};
  border: 1px solid ${d.w4.colors.sidebarBorder};
  border-radius: ${d.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,M=l().div`
  padding: 8px 14px 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  border-bottom: 1px solid ${d.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,T=l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: none;
  border: none;
  color: ${d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background ${d.w4.transitions.fast}, color ${d.w4.transitions.fast};

  &:hover {
    background: ${d.w4.colors.sidebarHover};
    color: ${d.w4.colors.accent};
  }
`,R=l().div`
  overflow-y: auto;
  flex: 1;
`,L=l().div`
  padding: 16px 14px;
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  font-style: italic;
`,B=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-right: 8px;
  transition: background ${d.w4.transitions.fast};

  &:hover { background: ${d.w4.colors.sidebarHover}; }
`,I=l().button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,D=l().div`
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,N=l().div`
  font-size: 11px;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  margin-top: 1px;
`,_=l().button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${d.w4.borderRadius.sm};
  cursor: pointer;
  color: ${d.w4.colors.sidebarTextMuted};
  transition: color ${d.w4.transitions.fast}, background ${d.w4.transitions.fast};

  &:hover {
    color: ${d.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`,A=l().button`
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
  color: ${d.w4.colors.mainTextMuted};
  transition: background ${d.w4.transitions.base}, color ${d.w4.transitions.base};

  &:hover {
    color: ${d.w4.colors.accent};
    background: ${d.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${d.w4.colors.accent};
    outline-offset: 2px;
  }

  &::after {
    content: attr(data-tip);
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
    padding: 4px 10px;
    background: ${d.w4.colors.surface};
    border: 1px solid ${d.w4.colors.border};
    border-radius: ${d.w4.borderRadius.sm};
    color: ${d.w4.colors.mainText};
    font-size: 11px;
    font-family: ${d.w4.typography.fontFamily};
    font-weight: 500;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity ${d.w4.transitions.base}, transform ${d.w4.transitions.base};
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  &:hover::after {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`,O=l().div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  width: min(520px, calc(100vw - 32px));
  background: rgba(13, 17, 23, 0.95);
  border: 1px solid ${d.w4.colors.sidebarBorder};
  border-radius: ${d.w4.borderRadius.md};
  box-shadow: 0 8px 32px rgba(0,0,0,.6);
  z-index: 700;
  overflow: hidden;
  display: ${({visible:e})=>e?"flex":"none"};
  flex-direction: column;
  backdrop-filter: blur(8px);
`,X=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  border-bottom: 1px solid ${d.w4.colors.sidebarBorder};
`,H=l().div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
`,W=l().pre`
  margin: 0;
  padding: 12px 14px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  line-height: 1.65;
  color: ${d.w4.colors.mainTextMuted};
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 280px;
`,Z=l().div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(13,17,23,.85);
  border: 1px solid ${d.w4.colors.sidebarBorder};
  border-radius: 6px;
  padding: 4px 12px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
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
`,q=document.getElementById("root");if(!q)throw Error("Root element #root not found");(0,a.createRoot)(q).render((0,o.jsx)(function({topBarRight:e}){let t=(0,n.useRef)(null),r=(0,n.useRef)(null),a=(0,n.useRef)(new Map),s=(0,n.useRef)(null),[l,q]=(0,n.useState)({lat:0,lng:0,zoom:2}),[J,Y]=(0,n.useState)(!1),[G,P]=(0,n.useState)(null),[U,K]=(0,n.useState)(null),{recent:V,addRecent:Q}=(0,d.rz)("atlantis:earth:recent"),[ee,et]=(0,n.useState)(()=>new Date),[er,eo]=(0,n.useState)(null),[en,ei]=(0,n.useState)(!1),[ea,es]=(0,n.useState)(!1),[el,ed]=(0,n.useState)(null),[ec,ep]=(0,n.useState)(!0),[eu,ex]=(0,n.useState)(!1),[ef,eh]=(0,n.useState)(f),eg=(0,n.useCallback)(e=>{eh(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},[]);(0,n.useEffect)(()=>{let e=setInterval(()=>et(new Date),1e3);return()=>clearInterval(e)},[]);let[em,ew]=(0,n.useState)(null),eb=(0,n.useCallback)(async e=>{let t={version:2,enabled:Array.from(ef),satellite:eu,showFlags:ec};await (0,d.KL)(x,e,JSON.stringify(t)),es(!1),ew(null)},[ef,eu,ec]),ey=(0,n.useCallback)(async()=>{if(!em)return;let e={version:2,enabled:Array.from(ef),satellite:eu,showFlags:ec};await (0,d.mZ)(em.id,em.name,JSON.stringify(e)),es(!1)},[em,ef,eu,ec]),ev=(0,n.useCallback)((e,t,r)=>{ew(t&&r?{id:t,name:r}:null);try{let t=JSON.parse(e);if(2===t.version)ex(t.satellite),ep(t.showFlags),eh(new Set(t.enabled)),t.note&&ed(t.note);else if(1===t.version){let e=t.layers;ex(!!e.satellite),ep(!!e.showFlags);let r=new Set;for(let t of["night","aurora","iss","quakes","fires","radar","flights","measure"])e[t]&&r.add(t);eh(r),t.note&&ed(t.note)}}catch{}},[]),e$=(0,n.useCallback)(e=>{let t=d.rh.find(t=>t.id===e);t&&r.current&&(r.current.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),P(e),K({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),Q(e))},[Q]),ek=(0,d.fy)(),ej=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!er)return;let{placeId:e,lat:t,lon:o,zoom:n}=ek;if(e){if(ej.current===`place:${e}`)return;ej.current=`place:${e}`,e$(e);return}let i=parseFloat(t??""),a=parseFloat(o??"");if(Number.isFinite(i)&&Number.isFinite(a)){let e=parseFloat(n??""),t=Number.isFinite(e)?e:6,o=`coord:${i.toFixed(4)},${a.toFixed(4)},${t}`;if(ej.current===o)return;ej.current=o,r.current?.flyTo([i,a],t,{duration:1.2}),P(null),K({id:o,name:`${i.toFixed(2)}\xb0, ${a.toFixed(2)}\xb0`,lat:i,lng:a})}},[er,ek.placeId,ek.lat,ek.lon,ek.zoom,e$]),(0,n.useEffect)(()=>{s.current&&s.current.setUrl(eu?"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}":h)},[eu]),(0,n.useEffect)(()=>{a.current.forEach((e,t)=>{let r=e.getElement()?.querySelector(".flag-marker");r&&r.classList.toggle("active",t===G)})},[G]),(0,n.useEffect)(()=>{er&&a.current.forEach(e=>{ec?e.addTo(er):e.remove()})},[ec,er]),(0,n.useEffect)(()=>{var e;!function(e){if(document.querySelector(`link[href="${e}"]`))return;let t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),(e="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",new Promise((t,r)=>{if(document.querySelector(`script[src="${e}"]`))return void t();let o=document.createElement("script");o.src=e,o.onload=()=>t(),o.onerror=r,document.head.appendChild(o)})).then(()=>Y(!0))},[]),(0,n.useEffect)(()=>{if(!J||!t.current||r.current)return;let e=window.L,o=e.map(t.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1});return s.current=e.tileLayer(h,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',maxZoom:19}).addTo(o),o.on("mousemove",e=>{q(t=>({...t,lat:e.latlng.lat,lng:e.latlng.lng}))}),o.on("zoomend",()=>{q(e=>({...e,zoom:o.getZoom()}))}),o.on("contextmenu",e=>{let t,r,{lat:o,lng:n}=e.latlng,i=`custom-${o.toFixed(4)}-${n.toFixed(4)}`;P(null),K({id:i,name:(t=`${Math.abs(o).toFixed(3)}\xb0${o>=0?"N":"S"}`,r=`${Math.abs(n).toFixed(3)}\xb0${n>=0?"E":"W"}`,`${t}, ${r}`),lat:o,lng:n}),ei(!0),setTimeout(()=>ei(!1),3200)}),d.rh.forEach(t=>{let r=e.divIcon({html:`<div class="flag-marker">${t.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),n=e.marker([t.lat,t.lng],{icon:r});n.on("click",()=>{o.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),P(t.id),K({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),Q(t.id)}),n.addTo(o),a.current.set(t.id,n)}),r.current=o,eo(o),()=>{a.current.clear(),s.current=null,o.remove(),r.current=null,eo(null)}},[J]);let ez=(0,n.useMemo)(()=>G?d.rh.find(e=>e.id===G)??null:null,[G]),eS=(0,n.useMemo)(()=>(0,d.qs)(V),[V]),eF=l.zoom>=5,eE=(0,n.useMemo)(()=>(0,u.xy)(),[]),eC=[{icon:"\uD83D\uDEF0",name:"Satellite",active:eu,toggle:()=>ex(e=>!e),title:"Satellite"},{icon:"\uD83D\uDEA9",name:"Flags",active:ec,toggle:()=>ep(e=>!e),title:"Flags",dividerAfter:!0},...eE.map(e=>{let t=ef.has(e.id),r=e.label.split(" ")[0],o=e.label.split(" ").slice(1).join(" "),n="flights"===e.id&&t&&!eF;return{icon:r,name:n?"Zoom in":"measure"===e.id&&t?"Measuring…":o,active:t,toggle:()=>eg(e.id),title:n?"Zoom in to see flights":o}})],eM=function(e){let[t,r]=(0,n.useState)(()=>"u">typeof window&&window.matchMedia(e).matches);return(0,n.useEffect)(()=>{let t=window.matchMedia(e),o=e=>r(e.matches);return t.addEventListener("change",o),()=>t.removeEventListener("change",o)},[e]),t}("(max-width: 1100px)"),[eT,eR]=(0,n.useState)(!1),eL=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!eT)return;let e=e=>{eL.current&&!eL.current.contains(e.target)&&eR(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[eT]);let eB=eC.filter(e=>e.active).length,[eI,eD]=(0,n.useState)(!1),[eN,e_]=(0,n.useState)([]),eA=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!eI)return;(0,d.Iu)(x).then(e_).catch(()=>{});let e=e=>{eA.current&&!eA.current.contains(e.target)&&eD(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[eI]);let eO=(0,n.useCallback)(async e=>{await (0,d.kd)(e),e_(t=>t.filter(t=>t.id!==e))},[]),eX=(0,o.jsxs)(z,{ref:eA,children:[(0,o.jsx)(A,{onClick:()=>eD(e=>!e),"data-tip":"Save / Saved",children:(0,o.jsxs)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),(0,o.jsx)("polyline",{points:"17 21 17 13 7 13 7 21"}),(0,o.jsx)("polyline",{points:"7 3 7 8 15 8"})]})}),eI&&(0,o.jsxs)(C,{children:[(0,o.jsx)(M,{children:"Save"}),(0,o.jsx)(T,{onClick:()=>{eD(!1),es(!0)},children:"Save current view…"}),(0,o.jsx)(M,{children:"Saved versions"}),(0,o.jsx)(R,{children:0===eN.length?(0,o.jsx)(L,{children:"No saved documents yet."}):eN.map(e=>{let t;return(0,o.jsxs)(B,{children:[(0,o.jsxs)(I,{onClick:()=>{ev(e.content,e.id,e.name),eD(!1)},children:[(0,o.jsx)(D,{children:e.name}),(0,o.jsx)(N,{children:(t=e.savedAt,new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(t)))})]}),(0,o.jsx)(_,{onClick:t=>{t.stopPropagation(),eO(e.id)},title:"Delete",children:(0,o.jsx)(c.In,{name:"trash",size:13})})]},e.id)})})]})]}),eH=(0,o.jsx)(A,{onClick:()=>{r.current?.flyTo([20,0],2,{duration:1.2}),P(null),K(null)},"data-tip":"World",children:(0,o.jsxs)("svg",{width:15,height:15,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,o.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,o.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})}),eW=(0,o.jsx)(d.CD,{entries:eS,activeId:G,onSelect:function(e){e.id.startsWith("country-")||"__recent__"===e.id||e$(e.id)}});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.PE,{title:"Earth",sidebar:eW,activeId:G,topBarRight:(0,o.jsxs)(o.Fragment,{children:[eM?(0,o.jsxs)(z,{ref:eL,children:[(0,o.jsxs)(v,{children:[(0,o.jsx)(k,{active:eT||eB>0,onClick:()=>eR(e=>!e),"data-tip":"Layers",children:"☰"}),eB>0&&(0,o.jsx)("span",{style:{fontSize:11,fontFamily:d.w4.typography.fontFamilyMono,color:d.w4.colors.accent,padding:"0 6px 0 2px"},children:eB})]}),eT&&(0,o.jsx)(j,{children:eC.map(e=>(0,o.jsxs)(S,{active:e.active,onClick:e.toggle,children:[(0,o.jsx)(F,{children:e.icon}),(0,o.jsx)(E,{children:e.name})]},e.title))})]}):(0,o.jsx)(v,{children:eC.map(e=>(0,o.jsxs)(i().Fragment,{children:[(0,o.jsx)(k,{active:e.active,onClick:e.toggle,"data-tip":e.title,children:e.icon}),e.dividerAfter&&(0,o.jsx)($,{})]},e.title))}),(0,o.jsxs)(v,{children:[eH,(0,o.jsx)($,{}),eX]}),e]}),children:(0,o.jsxs)(b,{children:[(0,o.jsxs)(y,{children:[(0,o.jsx)(g,{satellite:eu,children:(0,o.jsx)("div",{ref:t,style:{height:"100%",width:"100%"}})}),eE.map(e=>{let t=e.component,r="flights"===e.id?{zoom:l.zoom}:{};return(0,o.jsx)(t,{map:er,enabled:ef.has(e.id),...r},e.id)}),en&&(0,o.jsx)(Z,{children:"Right-click anywhere for instant weather"}),(0,o.jsxs)(O,{visible:!!el,children:[(0,o.jsxs)(X,{children:[(0,o.jsx)(H,{children:"Document note"}),(0,o.jsx)(c.K0,{onClick:()=>ed(null),title:"Close",children:(0,o.jsx)(c.In,{name:"close",size:12})})]}),(0,o.jsx)(W,{children:el??""})]}),(0,o.jsx)(p.v,{place:U,onClose:()=>{P(null),K(null)}})]}),(0,o.jsxs)(m,{children:[(0,o.jsxs)("span",{children:["Lat: ",l.lat.toFixed(4)]}),(0,o.jsxs)("span",{children:["Lng: ",l.lng.toFixed(4)]}),(0,o.jsxs)("span",{children:["Zoom: ",l.zoom]}),(0,o.jsx)(w,{children:"|"}),(0,o.jsxs)("span",{children:["UTC ",(0,d.u6)(ee)]}),ez&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w,{children:"\xb7"}),(0,o.jsxs)("span",{children:[ez.flag," ",ez.name," ",(0,d.w3)(ee,ez.timezone)]}),(0,o.jsx)(w,{children:"\xb7"}),(0,o.jsx)("span",{children:(0,d.$L)(ee,ez.timezone)})]}),(0,o.jsx)("span",{style:{marginLeft:"auto"},children:eu?"\xa9 Esri, DigitalGlobe, GeoEye":"\xa9 OpenStreetMap contributors"})]})]})}),ea&&(0,o.jsx)(d.MJ,{onSave:eb,onUpdate:ey,existingDoc:em??void 0,onCancel:()=>es(!1)})]})},{}))}}]);