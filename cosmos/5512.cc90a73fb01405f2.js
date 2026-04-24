"use strict";(self.webpackChunk_atlantis_cosmos=self.webpackChunk_atlantis_cosmos||[]).push([["5512"],{8997(e,t,i){var o=i(2727);t.createRoot=o.createRoot,o.hydrateRoot},3611(e,t,i){var o=i(5723),r=i(7991),n=i(8997),s=i(2727),a=i(6859),l=i.n(a),c=i(2799),d=i(8311),p=i(3930),h=i(6080),x=i(1150),m=i(7416);let u=[{id:"cosmos",name:"Cosmos",icon:"globe",children:[{id:"space-metrics",name:"Space Metrics",icon:"activity"},{id:"satellite-map",name:"Satellite Tracker",icon:"map-pin"},{id:"night-sky",name:"Night Sky",icon:"star"}]}],g=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`,f=l().div`
  display: inline-flex;
  align-items: center;
`,b=l().div`
  position: fixed;
  left: ${({x:e})=>e}px;
  top: ${({y:e})=>e}px;
  transform: translateY(-50%);
  z-index: 2000;
  pointer-events: none;
  animation: ${g} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-right-color: ${p.w4.colors.border};
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
`,y=l().div`
  background: #1c2128;
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
  padding: 8px 12px;
  width: 220px;
`,w=l().div`
  font-size: 11px;
  font-weight: 600;
  color: ${p.w4.colors.mainText};
  margin-bottom: 3px;
  white-space: nowrap;
`,j=l().div`
  font-size: 11px;
  color: ${p.w4.colors.mainTextMuted};
  line-height: 1.5;
`,v=l().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${p.w4.colors.mainTextMuted};
  opacity: 0.6;
  transition: opacity ${p.w4.transitions.base}, color ${p.w4.transitions.base};

  &:hover {
    opacity: 1;
    color: ${p.w4.colors.accent};
  }
`;function S({title:e,description:t}){let[i,n]=(0,r.useState)(null),a=(0,r.useRef)(),l=(0,r.useRef)(null);return(0,o.jsxs)(f,{onMouseEnter:()=>{if(clearTimeout(a.current),l.current){let e=l.current.getBoundingClientRect();n({x:e.right+10,y:e.top+e.height/2})}},onMouseLeave:()=>{a.current=setTimeout(()=>n(null),120)},children:[(0,o.jsx)(v,{ref:l,role:"img","aria-label":e,children:(0,o.jsx)(d.In,{name:"info",size:14})}),i&&(0,s.createPortal)((0,o.jsx)(b,{x:i.x,y:i.y,children:(0,o.jsxs)(y,{children:[(0,o.jsx)(w,{children:e}),(0,o.jsx)(j,{children:t})]})}),document.body)]})}let k=l().div`
  display: flex;
  align-items: center;
  gap: ${p.w4.spacing.sm};
  margin-bottom: ${p.w4.spacing.md};
`,$=l().h3`
  font-size: 11px;
  font-weight: 600;
  color: ${p.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
`;function R({label:e,tooltip:t,description:i}){return(0,o.jsxs)(k,{children:[(0,o.jsx)($,{children:e}),(0,o.jsx)(S,{title:t,description:i})]})}let z={label:"Space Metrics",tooltip:"Live ISS Telemetry",description:"Position, altitude, velocity, footprint and sun visibility — refreshed every 5 s."},T={label:"Satellite Tracker",tooltip:"Live ISS World Map",description:"Gold marker = current ISS position. Dashed trail = last ~7 min of orbit. Circle = signal footprint. Click the marker for details."},C={label:"Night Sky",tooltip:"Star Chart + ISS Overlay",description:"Sky dome centred on your zenith. N is up, horizon is the edge. ISS shown in gold when above your horizon."},I=l().section`
  scroll-margin-top: ${p.w4.spacing.lg};
  height: 600px;
`,M=l()(p.PH)`
  height: 100%;
  padding: 0;
  overflow: hidden;
`,P=document.getElementById("root");if(!P)throw Error("Root element #root not found");(0,n.createRoot)(P).render((0,o.jsx)(function({topBarRight:e}){return(0,o.jsx)(p.NI,{title:"Cosmos",sections:u,topBarRight:e,children:(0,o.jsxs)(p.wi,{children:[(0,o.jsxs)(p.KW,{id:"space-metrics",children:[(0,o.jsx)(R,{...z}),(0,o.jsx)(p.PH,{children:(0,o.jsx)(h.A,{})})]}),(0,o.jsxs)(I,{id:"satellite-map",children:[(0,o.jsx)(R,{...T}),(0,o.jsx)(M,{style:{height:"calc(100% - 36px)"},children:(0,o.jsx)(x.A,{})})]}),(0,o.jsxs)(p.KW,{id:"night-sky",children:[(0,o.jsx)(R,{...C}),(0,o.jsx)(p.PH,{children:(0,o.jsx)(m.A,{})})]})]})})},{}))}}]);