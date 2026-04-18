"use strict";(self.webpackChunk_atlantis_cosmos=self.webpackChunk_atlantis_cosmos||[]).push([[188],{188(e,t,o){var i=o(7359),r=o(8997),n=o(8991),s=o(3233),a=o(7207),l=o(5569),c=o(458),d=o(6423),p=o(6713),h=o(8351),u=o(5723);const x=[{id:"cosmos",name:"Cosmos",icon:"globe",children:[{id:"space-metrics",name:"Space Metrics",icon:"activity"},{id:"satellite-map",name:"Satellite Tracker",icon:"map-pin"},{id:"night-sky",name:"Night Sky",icon:"star"}]}],f=a.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`,m=s.default.div`
  display: inline-flex;
  align-items: center;
`,g=s.default.div`
  position: fixed;
  left: ${({x:e})=>e}px;
  top: ${({y:e})=>e}px;
  transform: translateY(-50%);
  z-index: 2000;
  pointer-events: none;
  animation: ${f} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-right-color: ${c.w4.colors.border};
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
`,b=s.default.div`
  background: #1c2128;
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
  padding: 8px 12px;
  width: 220px;
`,y=s.default.div`
  font-size: 11px;
  font-weight: 600;
  color: ${c.w4.colors.mainText};
  margin-bottom: 3px;
  white-space: nowrap;
`,j=s.default.div`
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.5;
`,w=s.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: default;
  color: ${c.w4.colors.mainTextMuted};
  opacity: 0.6;
  transition: opacity 0.15s, color 0.15s;

  &:hover {
    opacity: 1;
    color: #58a6ff;
  }
`;function v({title:e,description:t}){const[o,r]=(0,i.useState)(null),s=(0,i.useRef)(),a=(0,i.useRef)(null);return(0,u.jsxs)(m,{onMouseEnter:()=>{if(clearTimeout(s.current),a.current){const e=a.current.getBoundingClientRect();r({x:e.right+10,y:e.top+e.height/2})}},onMouseLeave:()=>{s.current=setTimeout(()=>r(null),120)},children:[(0,u.jsx)(w,{ref:a,tabIndex:-1,"aria-label":e,children:(0,u.jsx)(l.A,{size:14})}),o&&(0,n.createPortal)((0,u.jsx)(g,{x:o.x,y:o.y,children:(0,u.jsxs)(b,{children:[(0,u.jsx)(y,{children:e}),(0,u.jsx)(j,{children:t})]})}),document.body)]})}const S=s.default.div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  margin-bottom: ${c.w4.spacing.md};
`,k=s.default.h3`
  font-size: 11px;
  font-weight: 600;
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
`;function $({label:e,tooltip:t,description:o}){return(0,u.jsxs)(S,{children:[(0,u.jsx)(k,{children:e}),(0,u.jsx)(v,{title:t,description:o})]})}const z={label:"Space Metrics",tooltip:"Live ISS Telemetry",description:"Position, altitude, velocity, footprint and sun visibility — refreshed every 5 s."},R={label:"Satellite Tracker",tooltip:"Live ISS World Map",description:"Gold marker = current ISS position. Dashed trail = last ~7 min of orbit. Circle = signal footprint. Click the marker for details."},T={label:"Night Sky",tooltip:"Star Chart + ISS Overlay",description:"Sky dome centred on your zenith. N is up, horizon is the edge. ISS shown in gold when above your horizon."},C=s.default.section`
  scroll-margin-top: ${c.w4.spacing.lg};
  height: 600px;
`,I=(0,s.default)(c.PH)`
  height: 100%;
  padding: 0;
  overflow: hidden;
`;function M({topBarRight:e}){return(0,u.jsx)(c.NI,{title:"Cosmos",sections:x,topBarRight:e,children:(0,u.jsxs)(c.wi,{children:[(0,u.jsxs)(c.KW,{id:"space-metrics",children:[(0,u.jsx)($,{...z}),(0,u.jsx)(c.PH,{children:(0,u.jsx)(d.A,{})})]}),(0,u.jsxs)(C,{id:"satellite-map",children:[(0,u.jsx)($,{...R}),(0,u.jsx)(I,{style:{height:"calc(100% - 36px)"},children:(0,u.jsx)(p.A,{})})]}),(0,u.jsxs)(c.KW,{id:"night-sky",children:[(0,u.jsx)($,{...T}),(0,u.jsx)(c.PH,{children:(0,u.jsx)(h.A,{})})]})]})})}const H=document.getElementById("root");if(!H)throw new Error("Root element #root not found");(0,r.H)(H).render((0,u.jsx)(M,{}))},8997(e,t,o){var i=o(8991);t.H=i.createRoot,i.hydrateRoot}}]);
//# sourceMappingURL=188.03f231f2025372a9375f.js.map