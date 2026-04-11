"use strict";(self.webpackChunk_atlantis_cosmos=self.webpackChunk_atlantis_cosmos||[]).push([[36],{6036(e,t,i){i.r(t),i.d(t,{default:()=>A});var o=i(7359),r=i(8991),n=i(3233),s=i(7207),a=i(5569),l=i(906),c=i(6423),d=i(6713),p=i(8351),u=i(5723);const x=[{id:"cosmos",name:"Cosmos",icon:"globe",children:[{id:"space-metrics",name:"Space Metrics",icon:"activity"},{id:"satellite-map",name:"Satellite Tracker",icon:"map-pin"},{id:"night-sky",name:"Night Sky",icon:"star"}]}],h=s.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`,f=n.default.div`
  display: inline-flex;
  align-items: center;
`,g=n.default.div`
  position: fixed;
  left: ${({x:e})=>e}px;
  top: ${({y:e})=>e}px;
  transform: translateY(-50%);
  z-index: 2000;
  pointer-events: none;
  animation: ${h} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* left-pointing arrow */
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
`,m=n.default.div`
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
`,w=n.default.div`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.5;
`,y=n.default.button`
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
`;function j({title:e,description:t}){const[i,n]=(0,o.useState)(null),s=(0,o.useRef)(),l=(0,o.useRef)(null);return(0,u.jsxs)(f,{onMouseEnter:()=>{if(clearTimeout(s.current),l.current){const e=l.current.getBoundingClientRect();n({x:e.right+10,y:e.top+e.height/2})}},onMouseLeave:()=>{s.current=setTimeout(()=>n(null),120)},children:[(0,u.jsx)(y,{ref:l,tabIndex:-1,"aria-label":e,children:(0,u.jsx)(a.A,{size:14})}),i&&(0,r.createPortal)((0,u.jsx)(g,{x:i.x,y:i.y,children:(0,u.jsxs)(m,{children:[(0,u.jsx)(b,{children:e}),(0,u.jsx)(w,{children:t})]})}),document.body)]})}const v=n.default.div`
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
`;function k({label:e,tooltip:t,description:i}){return(0,u.jsxs)(v,{children:[(0,u.jsx)(S,{children:e}),(0,u.jsx)(j,{title:t,description:i})]})}const $={label:"Space Metrics",tooltip:"Live ISS Telemetry",description:"Position, altitude, velocity, footprint and sun visibility — refreshed every 5 s."},C={label:"Satellite Tracker",tooltip:"Live ISS World Map",description:"Gold marker = current ISS position. Dashed trail = last ~7 min of orbit. Circle = signal footprint. Click the marker for details."},I={label:"Night Sky",tooltip:"Star Chart + ISS Overlay",description:"Sky dome centred on your zenith. N is up, horizon is the edge. ISS shown in gold when above your horizon."},z=n.default.div`
  padding: ${l.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
`,T=n.default.section`
  scroll-margin-top: ${l.w4.spacing.lg};
`,M=n.default.section`
  scroll-margin-top: ${l.w4.spacing.lg};
  height: 600px;
`,R=n.default.div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
`,Y=(0,n.default)(R)`
  height: 100%;
  padding: 0;
  overflow: hidden;
`;function A({topBarRight:e}){const[t,i]=(0,o.useState)(null),r=(0,o.useCallback)(e=>{i(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),n=(0,u.jsx)(l.CD,{entries:x,activeId:t,onSelect:r});return(0,u.jsx)(l.PE,{title:"Cosmos",sidebar:n,activeId:t,topBarRight:e,children:(0,u.jsxs)(z,{children:[(0,u.jsxs)(T,{id:"space-metrics",children:[(0,u.jsx)(k,{...$}),(0,u.jsx)(R,{children:(0,u.jsx)(c.A,{})})]}),(0,u.jsxs)(M,{id:"satellite-map",children:[(0,u.jsx)(k,{...C}),(0,u.jsx)(Y,{style:{height:"calc(100% - 36px)"},children:(0,u.jsx)(d.A,{})})]}),(0,u.jsxs)(T,{id:"night-sky",children:[(0,u.jsx)(k,{...I}),(0,u.jsx)(R,{children:(0,u.jsx)(p.A,{})})]})]})})}}}]);
//# sourceMappingURL=36.7caa66c2dc4c7e162abc.js.map