"use strict";(self.webpackChunk_atlantis_cosmos=self.webpackChunk_atlantis_cosmos||[]).push([[36],{6036(e,t,i){i.r(t),i.d(t,{default:()=>I});var o=i(7359),r=i(8991),n=i(3233),s=i(7207),a=i(5569),l=i(9178),c=i(6423),d=i(6713),p=i(8351),h=i(5723);const u=[{id:"cosmos",name:"Cosmos",icon:"globe",children:[{id:"space-metrics",name:"Space Metrics",icon:"activity"},{id:"satellite-map",name:"Satellite Tracker",icon:"map-pin"},{id:"night-sky",name:"Night Sky",icon:"star"}]}],x=s.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`,f=n.default.div`
  display: inline-flex;
  align-items: center;
`,m=n.default.div`
  position: fixed;
  left: ${({x:e})=>e}px;
  top: ${({y:e})=>e}px;
  transform: translateY(-50%);
  z-index: 2000;
  pointer-events: none;
  animation: ${x} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-right-color: ${l.w4.colors.border};
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
`,g=n.default.div`
  background: #1c2128;
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
  padding: 8px 12px;
  width: 220px;
`,b=n.default.div`
  font-size: 11px;
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  margin-bottom: 3px;
  white-space: nowrap;
`,y=n.default.div`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.5;
`,j=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: default;
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.6;
  transition: opacity 0.15s, color 0.15s;

  &:hover {
    opacity: 1;
    color: #58a6ff;
  }
`;function w({title:e,description:t}){const[i,n]=(0,o.useState)(null),s=(0,o.useRef)(),l=(0,o.useRef)(null);return(0,h.jsxs)(f,{onMouseEnter:()=>{if(clearTimeout(s.current),l.current){const e=l.current.getBoundingClientRect();n({x:e.right+10,y:e.top+e.height/2})}},onMouseLeave:()=>{s.current=setTimeout(()=>n(null),120)},children:[(0,h.jsx)(j,{ref:l,tabIndex:-1,"aria-label":e,children:(0,h.jsx)(a.A,{size:14})}),i&&(0,r.createPortal)((0,h.jsx)(m,{x:i.x,y:i.y,children:(0,h.jsxs)(g,{children:[(0,h.jsx)(b,{children:e}),(0,h.jsx)(y,{children:t})]})}),document.body)]})}const v=n.default.div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.md};
`,S=n.default.h3`
  font-size: 11px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
`;function k({label:e,tooltip:t,description:i}){return(0,h.jsxs)(v,{children:[(0,h.jsx)(S,{children:e}),(0,h.jsx)(w,{title:t,description:i})]})}const $={label:"Space Metrics",tooltip:"Live ISS Telemetry",description:"Position, altitude, velocity, footprint and sun visibility — refreshed every 5 s."},z={label:"Satellite Tracker",tooltip:"Live ISS World Map",description:"Gold marker = current ISS position. Dashed trail = last ~7 min of orbit. Circle = signal footprint. Click the marker for details."},T={label:"Night Sky",tooltip:"Star Chart + ISS Overlay",description:"Sky dome centred on your zenith. N is up, horizon is the edge. ISS shown in gold when above your horizon."},C=n.default.section`
  scroll-margin-top: ${l.w4.spacing.lg};
  height: 600px;
`,M=(0,n.default)(l.PH)`
  height: 100%;
  padding: 0;
  overflow: hidden;
`;function I({topBarRight:e}){return(0,h.jsx)(l.NI,{title:"Cosmos",sections:u,topBarRight:e,children:(0,h.jsxs)(l.wi,{children:[(0,h.jsxs)(l.KW,{id:"space-metrics",children:[(0,h.jsx)(k,{...$}),(0,h.jsx)(l.PH,{children:(0,h.jsx)(c.A,{})})]}),(0,h.jsxs)(C,{id:"satellite-map",children:[(0,h.jsx)(k,{...z}),(0,h.jsx)(M,{style:{height:"calc(100% - 36px)"},children:(0,h.jsx)(d.A,{})})]}),(0,h.jsxs)(l.KW,{id:"night-sky",children:[(0,h.jsx)(k,{...T}),(0,h.jsx)(l.PH,{children:(0,h.jsx)(p.A,{})})]})]})})}}}]);
//# sourceMappingURL=36.b90b51f2333f97d65ad3.js.map