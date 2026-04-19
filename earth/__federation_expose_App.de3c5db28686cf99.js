"use strict";(self.webpackChunk_atlantis_earth=self.webpackChunk_atlantis_earth||[]).push([["362"],{3935(e,t,r){r.r(t),r.d(t,{default:()=>q});var o=r(5723),n=r(7991),i=r.n(n),a=r(6859),l=r.n(a),s=r(9336),d=r(4872),c=r(7777),p=r(1112);let u="earth";function x(){return new Set((0,p.xy)().filter(e=>e.defaultEnabled).map(e=>e.id))}let f="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",h=l().div`
  flex: 1;
  min-height: 0;
  height: 100%;
  width: 100%;

  .leaflet-container {
    height: 100%;
    width: 100%;
    background: ${s.w4.colors.mainBg};
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
`,g=l().div`
  height: 28px;
  min-height: 28px;
  background: ${s.w4.colors.sidebarBg};
  border-top: 1px solid ${s.w4.colors.sidebarBorder};
  display: flex;
  align-items: center;
  padding: 0 ${s.w4.spacing.md};
  gap: ${s.w4.spacing.lg};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,m=l().span`opacity: 0.3;`,b=l().div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,w=l().div`
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  overflow: hidden;
`,y=l().section`
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
`,v=l().span`
  width: 1px;
  height: 16px;
  background: rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  margin: 0 2px;
`,$=l().button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  background: ${({active:e})=>e?`${s.w4.colors.accent}33`:"transparent"};
  border: none;
  border-radius: 999px;
  cursor: pointer;
  color: ${s.w4.colors.mainText};
  font-size: 15px;
  line-height: 1;
  filter: ${({active:e})=>e?"saturate(1.15) drop-shadow(0 0 3px rgba(88,166,255,0.45))":"grayscale(0.85) opacity(0.55)"};
  transition: background 0.15s, filter 0.15s, transform 0.15s;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    filter: saturate(1.15);
    transform: scale(1.06);
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
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
    background: ${s.w4.colors.accent};
    opacity: ${({active:e})=>+!!e};
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
    background: ${s.w4.colors.surface};
    border: 1px solid ${s.w4.colors.border};
    border-radius: ${s.w4.borderRadius.sm};
    color: ${s.w4.colors.mainText};
    font-size: 11px;
    font-family: ${s.w4.typography.fontFamily};
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
`,k=l().div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 220px;
  padding: 6px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
`,j=l().div`
  position: relative;
`,z=l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  background: ${({active:e})=>e?`${s.w4.colors.accent}22`:"transparent"};
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  color: ${({active:e})=>e?s.w4.colors.accent:s.w4.colors.mainText};
  font-size: ${s.w4.typography.fontSizeSm};
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.12s, color 0.12s;
  text-align: left;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${s.w4.colors.accent};
  }
`,S=l().span`
  font-size: 15px;
  line-height: 1;
  width: 18px;
  text-align: center;
  flex-shrink: 0;
`,F=l().span`
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,M=l().div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  display: flex;
  flex-direction: column;
  background: ${s.w4.colors.sidebarBg};
  border: 1px solid ${s.w4.colors.sidebarBorder};
  border-radius: ${s.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,T=l().div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,E=l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: none;
  border: none;
  color: ${s.w4.colors.mainText};
  font-size: ${s.w4.typography.fontSizeBase};
  font-family: ${s.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${s.w4.colors.accent};
  }
`,C=l().div`
  overflow-y: auto;
  flex: 1;
`,L=l().div`
  padding: 16px 14px;
  font-size: ${s.w4.typography.fontSizeBase};
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  font-style: italic;
`,R=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-right: 8px;
  transition: background 0.12s;

  &:hover { background: ${s.w4.colors.sidebarHover}; }
`,B=l().button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,D=l().div`
  font-size: ${s.w4.typography.fontSizeBase};
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,I=l().div`
  font-size: 11px;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
  margin-top: 1px;
`,N=l().button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: #f85149;
    background: rgba(248, 81, 73, 0.12);
  }
`,_=l().button`
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
  color: ${s.w4.colors.mainTextMuted};
  transition: background 0.15s, color 0.15s;

  &:hover {
    color: ${s.w4.colors.accent};
    background: ${s.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }

  &::after {
    content: attr(data-tip);
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
    padding: 4px 10px;
    background: ${s.w4.colors.surface};
    border: 1px solid ${s.w4.colors.border};
    border-radius: ${s.w4.borderRadius.sm};
    color: ${s.w4.colors.mainText};
    font-size: 11px;
    font-family: ${s.w4.typography.fontFamily};
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
`,A=l().div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  width: min(520px, calc(100vw - 32px));
  background: rgba(13, 17, 23, 0.95);
  border: 1px solid ${s.w4.colors.sidebarBorder};
  border-radius: ${s.w4.borderRadius.md};
  box-shadow: 0 8px 32px rgba(0,0,0,.6);
  z-index: 700;
  overflow: hidden;
  display: ${({visible:e})=>e?"flex":"none"};
  flex-direction: column;
  backdrop-filter: blur(8px);
`,H=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
`,O=l().div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
`,X=l().button`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  font-size: 14px;
  border-radius: 4px;
  &:hover { background: ${s.w4.colors.sidebarHover}; color: ${s.w4.colors.mainText}; }
`,W=l().pre`
  margin: 0;
  padding: 12px 14px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  line-height: 1.65;
  color: ${s.w4.colors.mainTextMuted};
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 280px;
`,Z=l().div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(13,17,23,.85);
  border: 1px solid ${s.w4.colors.sidebarBorder};
  border-radius: 6px;
  padding: 4px 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
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
`;function q({topBarRight:e}){let t=(0,n.useRef)(null),r=(0,n.useRef)(null),a=(0,n.useRef)(new Map),l=(0,n.useRef)(null),[J,Y]=(0,n.useState)({lat:0,lng:0,zoom:2}),[G,P]=(0,n.useState)(!1),[U,K]=(0,n.useState)(null),[V,Q]=(0,n.useState)(null),{recent:ee,addRecent:et}=(0,s.rz)("atlantis:earth:recent"),[er,eo]=(0,n.useState)(()=>new Date),[en,ei]=(0,n.useState)(null),[ea,el]=(0,n.useState)(!1),[es,ed]=(0,n.useState)(!1),[ec,ep]=(0,n.useState)(null),[eu,ex]=(0,n.useState)(!0),[ef,eh]=(0,n.useState)(!1),[eg,em]=(0,n.useState)(x),eb=(0,n.useCallback)(e=>{em(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},[]);(0,n.useEffect)(()=>{let e=setInterval(()=>eo(new Date),1e3);return()=>clearInterval(e)},[]);let[ew,ey]=(0,n.useState)(null),ev=(0,n.useCallback)(async e=>{let t={version:2,enabled:Array.from(eg),satellite:ef,showFlags:eu};await (0,s.KL)(u,e,JSON.stringify(t)),ed(!1),ey(null)},[eg,ef,eu]),e$=(0,n.useCallback)(async()=>{if(!ew)return;let e={version:2,enabled:Array.from(eg),satellite:ef,showFlags:eu};await (0,s.mZ)(ew.id,ew.name,JSON.stringify(e)),ed(!1)},[ew,eg,ef,eu]),ek=(0,n.useCallback)((e,t,r)=>{ey(t&&r?{id:t,name:r}:null);try{let t=JSON.parse(e);if(2===t.version)eh(t.satellite),ex(t.showFlags),em(new Set(t.enabled)),t.note&&ep(t.note);else if(1===t.version){let e=t.layers;eh(!!e.satellite),ex(!!e.showFlags);let r=new Set;for(let t of["night","aurora","iss","quakes","fires","radar","flights","measure"])e[t]&&r.add(t);em(r),t.note&&ep(t.note)}}catch{}},[]),ej=(0,n.useCallback)(e=>{let t=s.rh.find(t=>t.id===e);t&&r.current&&(r.current.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),K(e),Q({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),et(e))},[et]),ez=(0,s.fy)(),eS=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!en)return;let{placeId:e,lat:t,lon:o,zoom:n}=ez;if(e){if(eS.current===`place:${e}`)return;eS.current=`place:${e}`,ej(e);return}let i=parseFloat(t??""),a=parseFloat(o??"");if(Number.isFinite(i)&&Number.isFinite(a)){let e=parseFloat(n??""),t=Number.isFinite(e)?e:6,o=`coord:${i.toFixed(4)},${a.toFixed(4)},${t}`;if(eS.current===o)return;eS.current=o,r.current?.flyTo([i,a],t,{duration:1.2}),K(null),Q({id:o,name:`${i.toFixed(2)}\xb0, ${a.toFixed(2)}\xb0`,lat:i,lng:a})}},[en,ez.placeId,ez.lat,ez.lon,ez.zoom,ej]),(0,n.useEffect)(()=>{l.current&&l.current.setUrl(ef?"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}":f)},[ef]),(0,n.useEffect)(()=>{a.current.forEach((e,t)=>{let r=e.getElement()?.querySelector(".flag-marker");r&&r.classList.toggle("active",t===U)})},[U]),(0,n.useEffect)(()=>{en&&a.current.forEach(e=>{eu?e.addTo(en):e.remove()})},[eu,en]),(0,n.useEffect)(()=>{var e;!function(e){if(document.querySelector(`link[href="${e}"]`))return;let t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),(e="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",new Promise((t,r)=>{if(document.querySelector(`script[src="${e}"]`))return void t();let o=document.createElement("script");o.src=e,o.onload=()=>t(),o.onerror=r,document.head.appendChild(o)})).then(()=>P(!0))},[]),(0,n.useEffect)(()=>{if(!G||!t.current||r.current)return;let e=window.L,o=e.map(t.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1});return l.current=e.tileLayer(f,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',maxZoom:19}).addTo(o),o.on("mousemove",e=>{Y(t=>({...t,lat:e.latlng.lat,lng:e.latlng.lng}))}),o.on("zoomend",()=>{Y(e=>({...e,zoom:o.getZoom()}))}),o.on("contextmenu",e=>{let t,r,{lat:o,lng:n}=e.latlng,i=`custom-${o.toFixed(4)}-${n.toFixed(4)}`;K(null),Q({id:i,name:(t=`${Math.abs(o).toFixed(3)}\xb0${o>=0?"N":"S"}`,r=`${Math.abs(n).toFixed(3)}\xb0${n>=0?"E":"W"}`,`${t}, ${r}`),lat:o,lng:n}),el(!0),setTimeout(()=>el(!1),3200)}),s.rh.forEach(t=>{let r=e.divIcon({html:`<div class="flag-marker">${t.flag}</div>`,className:"",iconSize:[28,28],iconAnchor:[14,14]}),n=e.marker([t.lat,t.lng],{icon:r});n.on("click",()=>{o.flyTo([t.lat,t.lng],t.zoom,{duration:1.2}),K(t.id),Q({id:t.id,name:`${t.flag} ${t.name}`,lat:t.lat,lng:t.lng}),et(t.id)}),n.addTo(o),a.current.set(t.id,n)}),r.current=o,ei(o),()=>{a.current.clear(),l.current=null,o.remove(),r.current=null,ei(null)}},[G]);let eF=(0,n.useMemo)(()=>U?s.rh.find(e=>e.id===U)??null:null,[U]),eM=(0,n.useMemo)(()=>(0,s.qs)(ee),[ee]),eT=J.zoom>=5,eE=(0,n.useMemo)(()=>(0,p.xy)(),[]),eC=[{icon:"\uD83D\uDEF0",name:"Satellite",active:ef,toggle:()=>eh(e=>!e),title:"Satellite"},{icon:"\uD83D\uDEA9",name:"Flags",active:eu,toggle:()=>ex(e=>!e),title:"Flags",dividerAfter:!0},...eE.map(e=>{let t=eg.has(e.id),r=e.label.split(" ")[0],o=e.label.split(" ").slice(1).join(" "),n="flights"===e.id&&t&&!eT;return{icon:r,name:n?"Zoom in":"measure"===e.id&&t?"Measuring…":o,active:t,toggle:()=>eb(e.id),title:n?"Zoom in to see flights":o}})],eL=function(e){let[t,r]=(0,n.useState)(()=>"u">typeof window&&window.matchMedia(e).matches);return(0,n.useEffect)(()=>{let t=window.matchMedia(e),o=e=>r(e.matches);return t.addEventListener("change",o),()=>t.removeEventListener("change",o)},[e]),t}("(max-width: 1100px)"),[eR,eB]=(0,n.useState)(!1),eD=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!eR)return;let e=e=>{eD.current&&!eD.current.contains(e.target)&&eB(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[eR]);let eI=eC.filter(e=>e.active).length,[eN,e_]=(0,n.useState)(!1),[eA,eH]=(0,n.useState)([]),eO=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!eN)return;(0,s.Iu)(u).then(eH).catch(()=>{});let e=e=>{eO.current&&!eO.current.contains(e.target)&&e_(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[eN]);let eX=(0,n.useCallback)(async e=>{await (0,s.kd)(e),eH(t=>t.filter(t=>t.id!==e))},[]),eW=(0,o.jsxs)(j,{ref:eO,children:[(0,o.jsx)(_,{onClick:()=>e_(e=>!e),"data-tip":"Save / Saved",children:(0,o.jsxs)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),(0,o.jsx)("polyline",{points:"17 21 17 13 7 13 7 21"}),(0,o.jsx)("polyline",{points:"7 3 7 8 15 8"})]})}),eN&&(0,o.jsxs)(M,{children:[(0,o.jsx)(T,{children:"Save"}),(0,o.jsx)(E,{onClick:()=>{e_(!1),ed(!0)},children:"Save current view…"}),(0,o.jsx)(T,{children:"Saved versions"}),(0,o.jsx)(C,{children:0===eA.length?(0,o.jsx)(L,{children:"No saved documents yet."}):eA.map(e=>{let t;return(0,o.jsxs)(R,{children:[(0,o.jsxs)(B,{onClick:()=>{ek(e.content,e.id,e.name),e_(!1)},children:[(0,o.jsx)(D,{children:e.name}),(0,o.jsx)(I,{children:(t=e.savedAt,new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(t)))})]}),(0,o.jsx)(N,{onClick:t=>{t.stopPropagation(),eX(e.id)},title:"Delete",children:(0,o.jsx)(d.A,{size:13})})]},e.id)})})]})]}),eZ=(0,o.jsx)(_,{onClick:()=>{r.current?.flyTo([20,0],2,{duration:1.2}),K(null),Q(null)},"data-tip":"World",children:(0,o.jsxs)("svg",{width:15,height:15,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,o.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,o.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})}),eq=(0,o.jsx)(s.CD,{entries:eM,activeId:U,onSelect:function(e){e.id.startsWith("country-")||"__recent__"===e.id||ej(e.id)}});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.PE,{title:"Earth",sidebar:eq,activeId:U,topBarRight:(0,o.jsxs)(o.Fragment,{children:[eL?(0,o.jsxs)(j,{ref:eD,children:[(0,o.jsxs)(y,{children:[(0,o.jsx)($,{active:eR||eI>0,onClick:()=>eB(e=>!e),"data-tip":"Layers",children:"☰"}),eI>0&&(0,o.jsx)("span",{style:{fontSize:11,fontFamily:s.w4.typography.fontFamilyMono,color:s.w4.colors.accent,padding:"0 6px 0 2px"},children:eI})]}),eR&&(0,o.jsx)(k,{children:eC.map(e=>(0,o.jsxs)(z,{active:e.active,onClick:e.toggle,children:[(0,o.jsx)(S,{children:e.icon}),(0,o.jsx)(F,{children:e.name})]},e.title))})]}):(0,o.jsx)(y,{children:eC.map(e=>(0,o.jsxs)(i().Fragment,{children:[(0,o.jsx)($,{active:e.active,onClick:e.toggle,"data-tip":e.title,children:e.icon}),e.dividerAfter&&(0,o.jsx)(v,{})]},e.title))}),(0,o.jsxs)(y,{children:[eZ,(0,o.jsx)(v,{}),eW]}),e]}),children:(0,o.jsxs)(b,{children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(h,{satellite:ef,children:(0,o.jsx)("div",{ref:t,style:{height:"100%",width:"100%"}})}),eE.map(e=>{let t=e.component,r="flights"===e.id?{zoom:J.zoom}:{};return(0,o.jsx)(t,{map:en,enabled:eg.has(e.id),...r},e.id)}),ea&&(0,o.jsx)(Z,{children:"Right-click anywhere for instant weather"}),(0,o.jsxs)(A,{visible:!!ec,children:[(0,o.jsxs)(H,{children:[(0,o.jsx)(O,{children:"Document note"}),(0,o.jsx)(X,{onClick:()=>ep(null),children:"✕"})]}),(0,o.jsx)(W,{children:ec??""})]}),(0,o.jsx)(c.v,{place:V,onClose:()=>{K(null),Q(null)}})]}),(0,o.jsxs)(g,{children:[(0,o.jsxs)("span",{children:["Lat: ",J.lat.toFixed(4)]}),(0,o.jsxs)("span",{children:["Lng: ",J.lng.toFixed(4)]}),(0,o.jsxs)("span",{children:["Zoom: ",J.zoom]}),(0,o.jsx)(m,{children:"|"}),(0,o.jsxs)("span",{children:["UTC ",(0,s.u6)(er)]}),eF&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m,{children:"\xb7"}),(0,o.jsxs)("span",{children:[eF.flag," ",eF.name," ",(0,s.w3)(er,eF.timezone)]}),(0,o.jsx)(m,{children:"\xb7"}),(0,o.jsx)("span",{children:(0,s.$L)(er,eF.timezone)})]}),(0,o.jsx)("span",{style:{marginLeft:"auto"},children:ef?"\xa9 Esri, DigitalGlobe, GeoEye":"\xa9 OpenStreetMap contributors"})]})]})}),es&&(0,o.jsx)(s.MJ,{onSave:ev,onUpdate:e$,existingDoc:ew??void 0,onCancel:()=>ed(!1)})]})}}}]);