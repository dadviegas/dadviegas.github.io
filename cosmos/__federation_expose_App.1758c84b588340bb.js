"use strict";(self.webpackChunk_atlantis_cosmos=self.webpackChunk_atlantis_cosmos||[]).push([["362"],{3935(e,t,i){i.r(t),i.d(t,{default:()=>P});var r=i(5723),o=i(7991),n=i(2727),s=i(6859),a=i.n(s),l=i(2799),c=i(5569),d=i(246),p=i(6080),h=i(1150),x=i(7416);let m=[{id:"cosmos",name:"Cosmos",icon:"globe",children:[{id:"space-metrics",name:"Space Metrics",icon:"activity"},{id:"satellite-map",name:"Satellite Tracker",icon:"map-pin"},{id:"night-sky",name:"Night Sky",icon:"star"}]}],u=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`,g=a().div`
  display: inline-flex;
  align-items: center;
`,f=a().div`
  position: fixed;
  left: ${({x:e})=>e}px;
  top: ${({y:e})=>e}px;
  transform: translateY(-50%);
  z-index: 2000;
  pointer-events: none;
  animation: ${u} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-right-color: ${d.w4.colors.border};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: #1c2128;
  }
`,b=a().div`
  background: #1c2128;
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
  padding: 8px 12px;
  width: 220px;
`,y=a().div`
  font-size: 11px;
  font-weight: 600;
  color: ${d.w4.colors.mainText};
  margin-bottom: 3px;
  white-space: nowrap;
`,j=a().div`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.5;
`,w=a().button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: default;
  color: ${d.w4.colors.mainTextMuted};
  opacity: 0.6;
  transition: opacity 0.15s, color 0.15s;

  &:hover {
    opacity: 1;
    color: #58a6ff;
  }
`;function v({title:e,description:t}){let[i,s]=(0,o.useState)(null),a=(0,o.useRef)(),l=(0,o.useRef)(null);return(0,r.jsxs)(g,{onMouseEnter:()=>{if(clearTimeout(a.current),l.current){let e=l.current.getBoundingClientRect();s({x:e.right+10,y:e.top+e.height/2})}},onMouseLeave:()=>{a.current=setTimeout(()=>s(null),120)},children:[(0,r.jsx)(w,{ref:l,tabIndex:-1,"aria-label":e,children:(0,r.jsx)(c.A,{size:14})}),i&&(0,n.createPortal)((0,r.jsx)(f,{x:i.x,y:i.y,children:(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{children:e}),(0,r.jsx)(j,{children:t})]})}),document.body)]})}let S=a().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  margin-bottom: ${d.w4.spacing.md};
`,k=a().h3`
  font-size: 11px;
  font-weight: 600;
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
`;function $({label:e,tooltip:t,description:i}){return(0,r.jsxs)(S,{children:[(0,r.jsx)(k,{children:e}),(0,r.jsx)(v,{title:t,description:i})]})}let z={label:"Space Metrics",tooltip:"Live ISS Telemetry",description:"Position, altitude, velocity, footprint and sun visibility — refreshed every 5 s."},T={label:"Satellite Tracker",tooltip:"Live ISS World Map",description:"Gold marker = current ISS position. Dashed trail = last ~7 min of orbit. Circle = signal footprint. Click the marker for details."},C={label:"Night Sky",tooltip:"Star Chart + ISS Overlay",description:"Sky dome centred on your zenith. N is up, horizon is the edge. ISS shown in gold when above your horizon."},M=a().section`
  scroll-margin-top: ${d.w4.spacing.lg};
  height: 600px;
`,I=a()(d.PH)`
  height: 100%;
  padding: 0;
  overflow: hidden;
`;function P({topBarRight:e}){return(0,r.jsx)(d.NI,{title:"Cosmos",sections:m,topBarRight:e,children:(0,r.jsxs)(d.wi,{children:[(0,r.jsxs)(d.KW,{id:"space-metrics",children:[(0,r.jsx)($,{...z}),(0,r.jsx)(d.PH,{children:(0,r.jsx)(p.A,{})})]}),(0,r.jsxs)(M,{id:"satellite-map",children:[(0,r.jsx)($,{...T}),(0,r.jsx)(I,{style:{height:"calc(100% - 36px)"},children:(0,r.jsx)(h.A,{})})]}),(0,r.jsxs)(d.KW,{id:"night-sky",children:[(0,r.jsx)($,{...C}),(0,r.jsx)(d.PH,{children:(0,r.jsx)(x.A,{})})]})]})})}}}]);