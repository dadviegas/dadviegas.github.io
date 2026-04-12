"use strict";(self.webpackChunk_atlantis_cosmos=self.webpackChunk_atlantis_cosmos||[]).push([[188],{188(e,t,o){var i=o(7359),r=o(8997),n=o(8991),s=o(3233),a=o(7207),l=o(5569),c=o(4079),d=o(6423),p=o(6713),u=o(8351),x=o(5723);const h=[{id:"cosmos",name:"Cosmos",icon:"globe",children:[{id:"space-metrics",name:"Space Metrics",icon:"activity"},{id:"satellite-map",name:"Satellite Tracker",icon:"map-pin"},{id:"night-sky",name:"Night Sky",icon:"star"}]}],f=a.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`,g=s.default.div`
  display: inline-flex;
  align-items: center;
`,m=s.default.div`
  position: fixed;
  left: ${({x:e})=>e}px;
  top: ${({y:e})=>e}px;
  transform: translateY(-50%);
  z-index: 2000;
  pointer-events: none;
  animation: ${f} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* left-pointing arrow */
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
`,w=s.default.div`
  font-size: 11px;
  font-weight: 600;
  color: ${c.w4.colors.mainText};
  margin-bottom: 3px;
  white-space: nowrap;
`,y=s.default.div`
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.5;
`,j=s.default.button`
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
`;function v({title:e,description:t}){const[o,r]=(0,i.useState)(null),s=(0,i.useRef)(),a=(0,i.useRef)(null);return(0,x.jsxs)(g,{onMouseEnter:()=>{if(clearTimeout(s.current),a.current){const e=a.current.getBoundingClientRect();r({x:e.right+10,y:e.top+e.height/2})}},onMouseLeave:()=>{s.current=setTimeout(()=>r(null),120)},children:[(0,x.jsx)(j,{ref:a,tabIndex:-1,"aria-label":e,children:(0,x.jsx)(l.A,{size:14})}),o&&(0,n.createPortal)((0,x.jsx)(m,{x:o.x,y:o.y,children:(0,x.jsxs)(b,{children:[(0,x.jsx)(w,{children:e}),(0,x.jsx)(y,{children:t})]})}),document.body)]})}const S=s.default.div`
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
`;function $({label:e,tooltip:t,description:o}){return(0,x.jsxs)(S,{children:[(0,x.jsx)(k,{children:e}),(0,x.jsx)(v,{title:t,description:o})]})}const I={label:"Space Metrics",tooltip:"Live ISS Telemetry",description:"Position, altitude, velocity, footprint and sun visibility — refreshed every 5 s."},C={label:"Satellite Tracker",tooltip:"Live ISS World Map",description:"Gold marker = current ISS position. Dashed trail = last ~7 min of orbit. Circle = signal footprint. Click the marker for details."},R={label:"Night Sky",tooltip:"Star Chart + ISS Overlay",description:"Sky dome centred on your zenith. N is up, horizon is the edge. ISS shown in gold when above your horizon."},z=s.default.div`
  padding: ${c.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
`,T=s.default.section`
  scroll-margin-top: ${c.w4.spacing.lg};
`,M=s.default.section`
  scroll-margin-top: ${c.w4.spacing.lg};
  height: 600px;
`,B=s.default.div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.lg};
`,E=(0,s.default)(B)`
  height: 100%;
  padding: 0;
  overflow: hidden;
`;function Y({topBarRight:e}){const[t,o]=(0,i.useState)(null),r=(0,i.useCallback)(e=>{o(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),n=(0,x.jsx)(c.CD,{entries:h,activeId:t,onSelect:r});return(0,x.jsx)(c.PE,{title:"Cosmos",sidebar:n,activeId:t,topBarRight:e,children:(0,x.jsxs)(z,{children:[(0,x.jsxs)(T,{id:"space-metrics",children:[(0,x.jsx)($,{...I}),(0,x.jsx)(B,{children:(0,x.jsx)(d.A,{})})]}),(0,x.jsxs)(M,{id:"satellite-map",children:[(0,x.jsx)($,{...C}),(0,x.jsx)(E,{style:{height:"calc(100% - 36px)"},children:(0,x.jsx)(p.A,{})})]}),(0,x.jsxs)(T,{id:"night-sky",children:[(0,x.jsx)($,{...R}),(0,x.jsx)(B,{children:(0,x.jsx)(u.A,{})})]})]})})}const A=document.getElementById("root");if(!A)throw new Error("Root element #root not found");(0,r.H)(A).render((0,x.jsx)(Y,{}))},8997(e,t,o){var i=o(8991);t.H=i.createRoot,i.hydrateRoot}}]);
//# sourceMappingURL=188.499b46e5b6d0cebfd6c9.js.map