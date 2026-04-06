"use strict";(self.webpackChunk_atlantis_cosmos=self.webpackChunk_atlantis_cosmos||[]).push([[779],{4914(e,t,a){a.d(t,{FlyoutPanel:()=>m});var o=a(7359),i=a(3233),r=a(7207),n=a(255),l=a(217),s=a(5959),d=a(5185),c=a(5723);const p=r.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,f=i.default.div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  z-index: 1200;
  background: #161b22;
  border: 1px solid rgba(88, 166, 255, 0.2);
  border-radius: ${l.w.borderRadius.lg};
  box-shadow:
    0 0 0 1px rgba(88, 166, 255, 0.06),
    0 16px 48px rgba(0, 0, 0, 0.75);
  min-width: 210px;
  overflow: hidden;
  animation: ${p} 0.18s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Left connector line */
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 2px;
    background: rgba(88, 166, 255, 0.35);
  }
`,u=i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: rgba(88, 166, 255, 0.85);
  border-bottom: 1px solid rgba(88, 166, 255, 0.1);
  font-family: ${l.w.typography.fontFamily};
`,h=i.default.button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  /* Same padding as PanelTitle so icons stay in the same column */
  padding: 8px 14px;
  background: ${({active:e})=>e?"rgba(88, 166, 255, 0.1)":"none"};
  border: none;
  /* inset box-shadow for the active indicator — doesn't affect layout unlike border-left */
  box-shadow: inset 2px 0 0 ${({active:e})=>e?"#58a6ff":"transparent"};
  color: ${({active:e})=>e?"#58a6ff":"#c9d1d9"};
  font-size: ${l.w.typography.fontSizeBase};
  font-family: ${l.w.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: rgba(88, 166, 255, 0.07);
    color: #e6edf3;
  }
`;function x({iconKey:e}){const t=e?d.t[e]??n.A:n.A;return(0,c.jsx)(t,{size:14,strokeWidth:1.75})}function g({entries:e,activeId:t,onSelect:a}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(o.Fragment,{children:(0,c.jsx)(g,{entries:e.children,activeId:t,onSelect:a})},e.id):(0,c.jsxs)(h,{active:t===e.id,onClick:()=>a(e),children:[(0,c.jsx)(x,{iconKey:e.icon}),e.name]},e.id))})}function m({activeId:e}){const{flyout:t,scheduleFlyoutClose:a,cancelFlyoutClose:o}=(0,s.c)();if(!t)return null;const i=t.entry.icon?d.t[t.entry.icon]??n.A:n.A;return(0,c.jsxs)(f,{anchorY:t.anchorY,onMouseEnter:o,onMouseLeave:a,children:[(0,c.jsxs)(u,{children:[(0,c.jsx)(i,{size:13,strokeWidth:2}),t.entry.name]}),(0,c.jsx)(g,{entries:t.entry.children??[],activeId:e,onSelect:e=>{t.onSelect(e),a()}})]})}},5959(e,t,a){a.d(t,{I:()=>i,c:()=>r});var o=a(7359);const i=(0,o.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),r=()=>(0,o.useContext)(i)},5185(e,t,a){a.d(t,{t:()=>w});var o=a(7901),i=a(2164),r=a(1837),n=a(5751),l=a(255),s=a(9633),d=a(2946),c=a(822),p=a(7032),f=a(8218),u=a(5553),h=a(2820),x=a(6673),g=a(3249),m=a(2932),b=a(7230);const w={"book-open":o.A,"file-text":n.A,package:x.A,compass:r.A,"git-branch":d.A,github:c.A,terminal:g.A,zap:b.A,bot:i.A,lightbulb:f.A,"message-square":h.A,wrench:m.A,"layout-grid":p.A,file:l.A,folder:s.A,"map-pin":u.A}},3188(e,t,a){a.d(t,{PE:()=>j,CD:()=>G,w4:()=>o.w});var o=a(217),i=a(7359),r=a(3233),n=a(5723);r.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 ${o.w.spacing.sm};
  background: ${o.w.colors.surface};
  border: 1px solid ${o.w.colors.border};
  border-radius: ${o.w.borderRadius.md};
  color: ${o.w.colors.mainText};
  font-family: ${o.w.typography.fontFamily};
  font-size: ${o.w.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${o.w.colors.sidebarHover};
    border-color: ${o.w.colors.accent};
  }
`,r.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 160px;
  background: ${o.w.colors.surface};
  border: 1px solid ${o.w.colors.border};
  border-radius: ${o.w.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 100;
`,r.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px ${o.w.spacing.sm};
  background: ${({active:e})=>e?o.w.colors.sidebarActiveBg:"transparent"};
  border: none;
  color: ${({active:e})=>e?o.w.colors.accent:o.w.colors.mainText};
  font-family: ${o.w.typography.fontFamily};
  font-size: ${o.w.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;

  &:hover {
    background: ${o.w.colors.sidebarHover};
  }
`,r.default.div`
  position: relative;
`,r.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:e})=>e?o.w.colors.accent:o.w.colors.sidebarTextMuted};
  margin-right: 6px;
  flex-shrink: 0;
`;var l=a(3661),s=a(5959);const d="260px",c="56px",p=r.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${o.w.colors.sidebarBg};
  border-bottom: 1px solid ${o.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,f=r.default.div`
  width: ${c};
  min-width: ${c};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${o.w.colors.sidebarBorder};
  flex-shrink: 0;
`,u=r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${o.w.borderRadius.md};
  cursor: pointer;
  color: ${o.w.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover {
    background: ${o.w.colors.sidebarHover};
    color: ${o.w.colors.sidebarText};
  }
`,h=r.default.button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${o.w.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${o.w.typography.fontFamily};
  font-size: ${o.w.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${o.w.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }

  span { color: ${o.w.colors.accent}; }
`,x=r.default.div`
  font-size: ${o.w.typography.fontSizeBase};
  font-weight: 500;
  color: ${o.w.colors.sidebarTextMuted};
  font-family: ${o.w.typography.fontFamily};
  padding-left: ${o.w.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${o.w.spacing.sm};
    color: ${o.w.colors.border};
  }
`,g=r.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${o.w.spacing.lg};
`,m=r.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,b=r.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${o.w.colors.mainBg};
  font-family: ${o.w.typography.fontFamily};
  color: ${o.w.colors.mainText};
  overflow: hidden;
`,w=r.default.aside`
  width: ${({collapsed:e})=>e?c:d};
  min-width: ${({collapsed:e})=>e?c:d};
  background: ${o.w.colors.sidebarBg};
  border-right: 1px solid ${o.w.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${o.w.breakpoints.md}) {
    display: none;
  }
`,y=r.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,$=r.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,v="atlantis:sidebar-collapsed";function j({sidebar:e,children:t,topBarRight:o,title:r="Atlantis",activeId:d=null}){const[c,j]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem(v)}catch{return!1}}),[S,k]=(0,i.useState)(null),M=(0,i.useRef)(),z=()=>j(e=>{const t=!e;try{localStorage.setItem(v,String(t))}catch{}return t}),T=i.useMemo(()=>i.lazy(()=>Promise.resolve().then(a.bind(a,4914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,n.jsx)(s.I.Provider,{value:{collapsed:c,toggle:z,flyout:S,openFlyout:(e,t,a)=>{clearTimeout(M.current),k({entry:e,anchorY:t,onSelect:a})},scheduleFlyoutClose:()=>{M.current=setTimeout(()=>k(null),160)},cancelFlyoutClose:()=>clearTimeout(M.current)},children:(0,n.jsxs)(b,{children:[(0,n.jsxs)(p,{children:[(0,n.jsx)(f,{children:(0,n.jsx)(u,{onClick:z,title:c?"Expand sidebar":"Collapse sidebar",children:(0,n.jsx)(l.A,{size:17})})}),(0,n.jsxs)(h,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:["Atl",(0,n.jsx)("span",{children:"antis"})]}),r&&(0,n.jsx)(x,{children:r}),o&&(0,n.jsx)(g,{children:o})]}),(0,n.jsxs)(m,{children:[(0,n.jsx)(w,{collapsed:c,children:(0,n.jsx)(y,{children:e})}),(0,n.jsx)($,{children:t})]}),S&&(0,n.jsx)(i.Suspense,{fallback:null,children:(0,n.jsx)(T,{activeId:d})})]})})}var S=a(255),k=a(9753),M=a(5185);const z=r.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,T=r.default.div`
  overflow: hidden;
`,A=r.default.div`
  padding-left: ${o.w.spacing.md};
`,I=r.default.div`
  display: flex;
  flex-direction: column;
`,C=r.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${o.w.spacing.sm} ${o.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  /* gap=0 when collapsed so the invisible label doesn't shift the icon off-center */
  gap: ${({collapsed:e})=>e?"0":o.w.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${o.w.colors.sidebarTextMuted};
  font-size: ${o.w.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${o.w.typography.fontFamily};
  text-align: left;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${o.w.colors.sidebarText};
    background: ${o.w.colors.sidebarHover};
  }
`,F=r.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,P=r.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,E=r.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${o.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,R=r.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`6px ${o.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?o.w.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?o.w.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?o.w.colors.sidebarActive:o.w.colors.sidebarText};
  font-size: ${o.w.typography.fontSizeBase};
  font-family: ${o.w.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${o.w.borderRadius.sm} ${o.w.borderRadius.sm} 0`};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${o.w.colors.sidebarHover};
  }
`;function B({iconKey:e,size:t=16}){const a=e?M.t[e]??S.A:S.A;return(0,n.jsx)(a,{size:t,strokeWidth:1.75})}function L({entry:e,activeId:t,onSelect:a}){const[o,r]=(0,i.useState)(!0),{collapsed:l,openFlyout:d,scheduleFlyoutClose:c,cancelFlyoutClose:p}=(0,s.c)();return e.children&&e.children.length>0?(0,n.jsxs)(I,{children:[(0,n.jsxs)(C,{collapsed:l,onClick:()=>{l||r(e=>!e)},onMouseEnter:l?t=>{const o=t.currentTarget.getBoundingClientRect();d(e,o.top,a)}:void 0,onMouseLeave:l?c:void 0,children:[(0,n.jsxs)(F,{collapsed:l,children:[(0,n.jsx)(B,{iconKey:e.icon,size:16}),(0,n.jsx)(P,{collapsed:l,children:e.name})]}),(0,n.jsx)(E,{open:o,collapsed:l,children:(0,n.jsx)(k.A,{size:13})})]}),(0,n.jsx)(z,{open:o&&!l,children:(0,n.jsx)(T,{children:(0,n.jsx)(A,{children:e.children.map(e=>(0,n.jsx)(L,{entry:e,activeId:t,onSelect:a},e.id))})})})]}):(0,n.jsxs)(R,{active:t===e.id,collapsed:l,onClick:()=>a(e),onMouseEnter:l?t=>{const o=t.currentTarget.getBoundingClientRect();d({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},o.top,a)}:void 0,onMouseLeave:l?c:void 0,children:[(0,n.jsx)(B,{iconKey:e.icon,size:15}),(0,n.jsx)(P,{collapsed:l,children:e.name})]})}function G({entries:e,activeId:t,onSelect:a}){return(0,n.jsx)("div",{children:e.map(e=>(0,n.jsx)(L,{entry:e,activeId:t,onSelect:a},e.id))})}const D=a(7207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;r.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${D} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: rgba(88, 166, 255, 0.3);
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: #0d1117;
  }
`,r.default.span`
  display: block;
  background: #0d1117;
  border: 1px solid rgba(88, 166, 255, 0.25);
  box-shadow:
    0 0 0 1px rgba(88, 166, 255, 0.08),
    0 8px 32px rgba(0, 0, 0, 0.7);
  color: #e6edf3;
  font-size: 12px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: 6px;
  white-space: nowrap;
`,a(4914)},217(e,t,a){a.d(t,{w:()=>o});const o={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},8351(e,t,a){a.d(t,{A:()=>D});var o=a(7359),i=a(3233),r=a(3188),n=a(5553),l=a(9421),s=a(8641),d=a(8447),c=a(5723);function p(e,t,a,o,i){const r=Math.PI/180,n=180/Math.PI,l=((function(e){const t=function(e){const t=e.getUTCFullYear(),a=e.getUTCMonth()+1,o=e.getUTCDate()+(e.getUTCHours()+e.getUTCMinutes()/60+e.getUTCSeconds()/3600)/24,i=Math.floor((14-a)/12),r=t+4800-i,n=a+12*i-3;return o+Math.floor((153*n+2)/5)+365*r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400)-32045}(e);return((280.46061837+360.98564736629*(t-2451545))%360+360)%360}(i)+o+360)%360-15*e+360)%360*r,s=a*r,d=t*r,c=Math.sin(s)*Math.sin(d)+Math.cos(s)*Math.cos(d)*Math.cos(l),p=Math.asin(Math.max(-1,Math.min(1,c))),f=p*n,u=(Math.sin(d)-Math.sin(p)*Math.sin(s))/(Math.cos(p)*Math.cos(s));let h=Math.acos(Math.max(-1,Math.min(1,u)))*n;return Math.sin(l)>0&&(h=360-h),{az:h,alt:f}}function f(e,t,a){const o=.00669437999014,i=e*(Math.PI/180),r=t*(Math.PI/180),n=6378.137/Math.sqrt(1-o*Math.sin(i)**2);return{x:(n+a)*Math.cos(i)*Math.cos(r),y:(n+a)*Math.cos(i)*Math.sin(r),z:(n*(1-o)+a)*Math.sin(i)}}function u(e,t,a,o,i){const r=f(e,t,0),n=f(a,o,i),l=n.x-r.x,s=n.y-r.y,d=n.z-r.z,c=Math.sqrt(l*l+s*s+d*d),p=e*(Math.PI/180),u=t*(Math.PI/180),h=[-Math.sin(u),Math.cos(u),0],x=[-Math.sin(p)*Math.cos(u),-Math.sin(p)*Math.sin(u),Math.cos(p)],g=[Math.cos(p)*Math.cos(u),Math.cos(p)*Math.sin(u),Math.sin(p)],m=l*h[0]+s*h[1]+d*h[2],b=l*x[0]+s*x[1]+d*x[2],w=l*g[0]+s*g[1]+d*g[2],y=Math.atan2(w,Math.sqrt(m*m+b*b))*(180/Math.PI);let $=Math.atan2(m,b)*(180/Math.PI);return $<0&&($+=360),{az:$,el:y,range_km:c}}function h(e,t,a,o,i){if(t<0)return null;const r=i*(1-t/90),n=e*(Math.PI/180);return{x:a+r*Math.sin(n),y:o-r*Math.cos(n)}}const x=[{id:"Betelgeuse",ra:5.9194,dec:7.407,mag:.45},{id:"Bellatrix",ra:5.4187,dec:6.35,mag:1.64},{id:"Mintaka",ra:5.5334,dec:-.3,mag:2.23},{id:"Alnilam",ra:5.6036,dec:-1.202,mag:1.7},{id:"Alnitak",ra:5.6795,dec:-1.943,mag:1.74},{id:"Rigel",ra:5.2423,dec:-8.202,mag:.13},{id:"Saiph",ra:5.7959,dec:-9.67,mag:2.06},{id:"Meissa",ra:5.5852,dec:9.934,mag:3.39},{id:"Dubhe",ra:11.0621,dec:61.75,mag:1.81},{id:"Merak",ra:11.0306,dec:56.383,mag:2.34},{id:"Phecda",ra:11.8974,dec:53.695,mag:2.44},{id:"Megrez",ra:12.2571,dec:57.033,mag:3.31},{id:"Alioth",ra:12.9004,dec:55.96,mag:1.76},{id:"Mizar",ra:13.399,dec:54.925,mag:2.23},{id:"Alkaid",ra:13.7924,dec:49.313,mag:1.85},{id:"Schedar",ra:.6753,dec:56.537,mag:2.24},{id:"Caph",ra:.1528,dec:59.15,mag:2.27},{id:"GammaCas",ra:.945,dec:60.717,mag:2.47},{id:"Ruchbah",ra:1.4304,dec:60.235,mag:2.66},{id:"Segin",ra:1.9061,dec:63.67,mag:3.37},{id:"Regulus",ra:10.1395,dec:11.967,mag:1.36},{id:"Denebola",ra:11.8179,dec:14.572,mag:2.14},{id:"Algieba",ra:10.333,dec:19.842,mag:2.01},{id:"Zosma",ra:11.235,dec:20.524,mag:2.55},{id:"EtaLeo",ra:10.1221,dec:16.763,mag:3.48},{id:"EpsilonLeo",ra:9.7641,dec:23.774,mag:2.97},{id:"Deneb",ra:20.6905,dec:45.28,mag:1.25},{id:"Sadr",ra:20.3704,dec:40.257,mag:2.23},{id:"Albireo",ra:19.512,dec:27.96,mag:3.09},{id:"Gienah",ra:20.7704,dec:33.97,mag:2.48},{id:"DeltaCyg",ra:19.7496,dec:44.95,mag:2.87},{id:"Vega",ra:18.6157,dec:38.783,mag:.03},{id:"Sheliak",ra:18.835,dec:33.363,mag:3.52},{id:"Sulafat",ra:18.9822,dec:32.69,mag:3.24},{id:"Altair",ra:19.8464,dec:8.868,mag:.76},{id:"Tarazed",ra:19.7713,dec:10.613,mag:2.72},{id:"Alshain",ra:19.9215,dec:6.407,mag:3.71},{id:"Antares",ra:16.4901,dec:-26.432,mag:1.06},{id:"Graffias",ra:16.0921,dec:-19.806,mag:2.62},{id:"Dschubba",ra:16.0056,dec:-22.622,mag:2.29},{id:"Shaula",ra:17.5601,dec:-37.104,mag:1.62},{id:"Lesath",ra:17.5304,dec:-37.298,mag:2.69},{id:"EpsilonSco",ra:16.8362,dec:-34.293,mag:2.29},{id:"ThetaSco",ra:17.622,dec:-42.998,mag:1.87},{id:"KappaSco",ra:17.7082,dec:-39.03,mag:2.41},{id:"Pollux",ra:7.7553,dec:28.026,mag:1.16},{id:"Castor",ra:7.5767,dec:31.888,mag:1.58},{id:"Alhena",ra:6.6283,dec:16.399,mag:1.93},{id:"Wasat",ra:7.3348,dec:21.982,mag:3.53},{id:"MuGem",ra:6.3826,dec:22.514,mag:2.87},{id:"Aldebaran",ra:4.5987,dec:16.509,mag:.87},{id:"Elnath",ra:5.4381,dec:28.608,mag:1.65},{id:"Sirius",ra:6.7525,dec:-16.716,mag:-1.46},{id:"Canopus",ra:6.3992,dec:-52.696,mag:-.74},{id:"Arcturus",ra:14.2613,dec:19.182,mag:-.05},{id:"Capella",ra:5.2782,dec:45.998,mag:.08},{id:"Procyon",ra:7.6551,dec:5.225,mag:.4},{id:"Achernar",ra:1.6285,dec:-57.237,mag:.45},{id:"Spica",ra:13.4199,dec:-11.161,mag:.97},{id:"Fomalhaut",ra:22.9608,dec:-29.622,mag:1.16}],g=Object.fromEntries(x.map(e=>[e.id,e])),m=[{name:"Orion",color:"#a0c4ff",lines:[["Meissa","Betelgeuse"],["Meissa","Bellatrix"],["Betelgeuse","Mintaka"],["Bellatrix","Mintaka"],["Mintaka","Alnilam"],["Alnilam","Alnitak"],["Alnitak","Saiph"],["Alnitak","Rigel"],["Saiph","Rigel"]]},{name:"Ursa Major",color:"#90e090",lines:[["Dubhe","Merak"],["Merak","Phecda"],["Phecda","Megrez"],["Megrez","Dubhe"],["Megrez","Alioth"],["Alioth","Mizar"],["Mizar","Alkaid"]]},{name:"Cassiopeia",color:"#ffd0a0",lines:[["Caph","Schedar"],["Schedar","GammaCas"],["GammaCas","Ruchbah"],["Ruchbah","Segin"]]},{name:"Leo",color:"#ffb0b0",lines:[["Regulus","EtaLeo"],["EtaLeo","Algieba"],["Algieba","EpsilonLeo"],["Algieba","Zosma"],["Zosma","Denebola"]]},{name:"Cygnus",color:"#d0b0ff",lines:[["Deneb","Sadr"],["Sadr","Albireo"],["DeltaCyg","Sadr"],["Sadr","Gienah"]]},{name:"Lyra",color:"#ffe080",lines:[["Vega","Sheliak"],["Sheliak","Sulafat"],["Sulafat","Vega"]]},{name:"Aquila",color:"#80d0ff",lines:[["Tarazed","Altair"],["Altair","Alshain"]]},{name:"Scorpius",color:"#ff9090",lines:[["Graffias","Dschubba"],["Dschubba","Antares"],["Antares","EpsilonSco"],["EpsilonSco","ThetaSco"],["ThetaSco","KappaSco"],["KappaSco","Shaula"],["Shaula","Lesath"]]},{name:"Gemini",color:"#a0ffb0",lines:[["Castor","Pollux"],["Castor","Wasat"],["Wasat","Alhena"],["Pollux","Alhena"],["MuGem","Alhena"]]}],b=i.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.md};
`,w=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${r.w4.spacing.sm};
`,y=i.default.h2`
  font-size: ${r.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${r.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
`,$=i.default.div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  flex-wrap: wrap;
`,v=i.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
`,j=i.default.input`
  width: 90px;
  padding: 4px 8px;
  font-size: 12px;
  font-family: ${r.w4.typography.fontFamilyMono};
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.sm};
  color: ${r.w4.colors.mainText};
  outline: none;

  &:focus {
    border-color: #58a6ff;
  }
`,S=i.default.label`
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
`,k=i.default.div`
  display: flex;
  gap: ${r.w4.spacing.lg};
  align-items: flex-start;

  @media (max-width: ${r.w4.breakpoints.lg}) {
    flex-direction: column;
  }
`,M=i.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
`,z=i.default.canvas`
  border-radius: 50%;
  cursor: crosshair;
`,T=i.default.div`
  width: 220px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.sm};

  @media (max-width: ${r.w4.breakpoints.lg}) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`,A=i.default.div`
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: ${r.w4.spacing.sm} ${r.w4.spacing.md};
`,I=i.default.div`
  font-size: 10px;
  font-weight: 600;
  color: ${r.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: ${r.w4.spacing.xs};
`,C=i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${r.w4.colors.mainText};
  padding: 2px 0;
`,F=i.default.div`
  width: 20px;
  height: 2px;
  background: ${({color:e})=>e};
  opacity: 0.7;
  border-radius: 1px;
  flex-shrink: 0;
`,P=i.default.div`
  font-size: 12px;
  color: ${r.w4.colors.mainText};
  font-family: ${r.w4.typography.fontFamilyMono};
  line-height: 1.8;
`,E=i.default.div`
  display: flex;
  justify-content: space-between;
  gap: ${r.w4.spacing.sm};
`,R=i.default.span`
  color: ${r.w4.colors.mainTextMuted};
  font-size: 11px;
`,B=i.default.div`
  font-size: 12px;
  color: ${r.w4.colors.mainTextMuted};
  line-height: 1.5;
`,L=i.default.div`
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
  text-align: center;
`,G=i.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: 11px;
  background: transparent;
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.sm};
  color: ${r.w4.colors.mainTextMuted};
  cursor: pointer;

  &:hover {
    border-color: #58a6ff;
    color: #58a6ff;
  }
`;function D(){const e=(0,o.useRef)(null),t=(0,o.useRef)(null),[a,i]=(0,o.useState)(480),[f,D]=(0,o.useState)(0),[O,W]=(0,o.useState)(new Date),{data:H}=(0,d.so)(5e3),{location:N,status:U}=(0,d.mJ)(),[Y,q]=(0,o.useState)(48.85),[K,_]=(0,o.useState)(2.35),[V,Z]=(0,o.useState)("48.85"),[X,J]=(0,o.useState)("2.35");(0,o.useEffect)(()=>{N&&(q(N.lat),_(N.lon),Z(N.lat.toFixed(3)),J(N.lon.toFixed(3)))},[N]),(0,o.useEffect)(()=>{const e=t.current;if(!e)return;const a=new ResizeObserver(e=>{const t=e[0].contentRect.width;i(Math.max(280,Math.min(t,540)))});return a.observe(e),()=>a.disconnect()},[]),(0,o.useEffect)(()=>{const e=setInterval(()=>{D(e=>e+1),W(new Date)},1e4);return()=>clearInterval(e)},[]);const Q=(0,o.useCallback)(()=>{const t=e.current;if(!t)return;const o=t.getContext("2d");if(!o)return;const i=new Date,n=a,l=n/2,s=n/2,d=n/2-18;o.clearRect(0,0,n,n);const c=o.createRadialGradient(l,s,0,l,s,d);c.addColorStop(0,"#06060f"),c.addColorStop(.7,"#08091a"),c.addColorStop(1,"#0b0c1e"),o.save(),o.beginPath(),o.arc(l,s,d,0,2*Math.PI),o.clip(),o.fillStyle=c,o.fillRect(0,0,n,n),o.restore();for(const e of[30,60]){const t=d*(1-e/90);o.beginPath(),o.arc(l,s,t,0,2*Math.PI),o.strokeStyle="rgba(255,255,255,0.04)",o.lineWidth=.8,o.stroke()}if(o.beginPath(),o.arc(l,s,d,0,2*Math.PI),o.strokeStyle="rgba(255,255,255,0.12)",o.lineWidth=1,o.stroke(),m.forEach(e=>{o.strokeStyle=e.color+"50",o.lineWidth=.9,e.lines.forEach(([e,t])=>{const a=g[e],r=g[t];if(!a||!r)return;const n=p(a.ra,a.dec,Y,K,i),c=p(r.ra,r.dec,Y,K,i);if(n.alt<0||c.alt<0)return;const f=h(n.az,n.alt,l,s,d),u=h(c.az,c.alt,l,s,d);f&&u&&(o.beginPath(),o.moveTo(f.x,f.y),o.lineTo(u.x,u.y),o.stroke())})}),x.forEach(e=>{const t=p(e.ra,e.dec,Y,K,i);if(t.alt<0)return;const a=h(t.az,t.alt,l,s,d);if(!a)return;const r=Math.max(.4,2.8-.55*e.mag),n=Math.min(1,Math.max(.25,1-.12*(e.mag- -1.5)));if(e.mag<1.5){const e=o.createRadialGradient(a.x,a.y,0,a.x,a.y,3*r);e.addColorStop(0,`rgba(255,255,220,${.5*n})`),e.addColorStop(1,"rgba(255,255,220,0)"),o.beginPath(),o.arc(a.x,a.y,3*r,0,2*Math.PI),o.fillStyle=e,o.fill()}o.beginPath(),o.arc(a.x,a.y,r,0,2*Math.PI),o.fillStyle=`rgba(255,255,220,${n})`,o.fill()}),H){const e=u(Y,K,H.latitude,H.longitude,H.altitude);if(e.el>0){const t=h(e.az,e.el,l,s,d);if(t){const a=o.createRadialGradient(t.x,t.y,0,t.x,t.y,12);a.addColorStop(0,"rgba(255,215,0,0.4)"),a.addColorStop(1,"rgba(255,215,0,0)"),o.beginPath(),o.arc(t.x,t.y,12,0,2*Math.PI),o.fillStyle=a,o.fill(),o.beginPath(),o.arc(t.x,t.y,5,0,2*Math.PI),o.fillStyle="#ffd700",o.fill(),o.strokeStyle="#fffacd",o.lineWidth=1,o.stroke(),o.font=`bold 11px ${r.w4.typography.fontFamilyMono}`,o.fillStyle="#ffd700",o.fillText("ISS",t.x+8,t.y+4),o.font=`10px ${r.w4.typography.fontFamilyMono}`,o.fillStyle="#ffd70099",o.fillText(`${e.el.toFixed(1)}° el`,t.x+8,t.y+16)}}}o.font="bold 11px sans-serif",o.textAlign="center",o.textBaseline="middle",[{az:0,label:"N"},{az:90,label:"E"},{az:180,label:"S"},{az:270,label:"W"}].forEach(({az:e,label:t})=>{const a=e*(Math.PI/180),i=l+(d+12)*Math.sin(a),r=s-(d+12)*Math.cos(a);o.fillStyle="N"===t?"#58a6ff":"#8b949e",o.fillText(t,i,r)}),o.font="9px sans-serif",o.fillStyle="rgba(255,255,255,0.15)",o.textAlign="center",o.fillText("Zenith",l,s+4),o.textAlign="left",o.textBaseline="alphabetic"},[Y,K,H,a]);(0,o.useEffect)(()=>{Q()},[Q,f]);const ee=H?u(Y,K,H.latitude,H.longitude,H.altitude):null,te=ee&&ee.el>0;return(0,c.jsxs)(b,{children:[(0,c.jsxs)(w,{children:[(0,c.jsxs)(y,{children:[(0,c.jsx)(s.A,{size:18,color:"#ffd700"}),"Night Sky"]}),(0,c.jsxs)($,{children:[(0,c.jsxs)(v,{children:[(0,c.jsx)(n.A,{size:12}),(0,c.jsx)(S,{children:"Lat"}),(0,c.jsx)(j,{type:"number",value:V,onChange:e=>{Z(e.target.value);const t=parseFloat(e.target.value);!isNaN(t)&&t>=-90&&t<=90&&q(t)},step:"0.001",min:"-90",max:"90"}),(0,c.jsx)(S,{children:"Lon"}),(0,c.jsx)(j,{type:"number",value:X,onChange:e=>{J(e.target.value);const t=parseFloat(e.target.value);!isNaN(t)&&t>=-180&&t<=180&&_(t)},step:"0.001",min:"-180",max:"180"})]}),"granted"===U&&(0,c.jsxs)(v,{style:{color:"#3fb950"},children:[(0,c.jsx)(n.A,{size:11}),"GPS"]}),(0,c.jsxs)(G,{onClick:()=>{D(e=>e+1),W(new Date)},children:[(0,c.jsx)(l.A,{size:11}),"Refresh"]})]})]}),(0,c.jsxs)(k,{children:[(0,c.jsx)(M,{ref:t,children:(0,c.jsx)(z,{ref:e,width:a,height:a})}),(0,c.jsxs)(T,{children:[(0,c.jsxs)(A,{children:[(0,c.jsx)(I,{children:"ISS Visibility"}),H&&ee?te?(0,c.jsxs)(P,{children:[(0,c.jsxs)(E,{children:[(0,c.jsx)(R,{children:"Elevation"}),(0,c.jsxs)("span",{children:[ee.el.toFixed(1),"°"]})]}),(0,c.jsxs)(E,{children:[(0,c.jsx)(R,{children:"Azimuth"}),(0,c.jsxs)("span",{children:[ee.az.toFixed(1),"°"]})]}),(0,c.jsxs)(E,{children:[(0,c.jsx)(R,{children:"Range"}),(0,c.jsxs)("span",{children:[ee.range_km.toFixed(0)," km"]})]}),(0,c.jsxs)(E,{children:[(0,c.jsx)(R,{children:"Sun"}),(0,c.jsx)("span",{children:H.visibility})]})]}):(0,c.jsxs)(B,{children:["ISS is currently below the horizon.",(0,c.jsx)("br",{}),"El: ",ee.el.toFixed(1),"°"]}):(0,c.jsx)(B,{children:"Loading ISS data…"})]}),(0,c.jsxs)(A,{children:[(0,c.jsx)(I,{children:"Constellations"}),m.map(e=>(0,c.jsxs)(C,{children:[(0,c.jsx)(F,{color:e.color}),e.name]},e.name))]}),(0,c.jsxs)(A,{children:[(0,c.jsx)(I,{children:"How to read"}),(0,c.jsx)(B,{children:"Centre = zenith (directly overhead). Edge = horizon. N is up. Stars are sized by brightness. ISS shown in gold when visible."})]})]})]}),(0,c.jsxs)(L,{children:["UTC ",O.toUTCString().split(" ")[4]," · Observer ",Y.toFixed(3),"° ",Y>=0?"N":"S",","," ",Math.abs(K).toFixed(3),"° ",K>=0?"E":"W"]})]})}},6713(e,t,a){a.d(t,{A:()=>y});var o=a(7359),i=a(3233),r=a(3188),n=a(8447),l=a(5723);const s=[{category:"station",label:"Space Stations",examples:"ISS, Tiangong"},{category:"observation",label:"Earth Observation",examples:"Terra, Aqua, Landsat-9"},{category:"navigation",label:"Navigation",examples:"GPS III, GPS IIF"},{category:"communications",label:"Communications",examples:"Starlink"},{category:"scientific",label:"Scientific",examples:"Hubble"},{category:"weather",label:"Weather",examples:"GOES-16, GOES-18"}],d=i.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,c=i.default.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,p=i.default.div`
  height: 100%;
  width: 100%;

  .leaflet-container {
    height: 100%;
    width: 100%;
    background: #0d1117;
    font-family: ${r.w4.typography.fontFamily};
  }

  .leaflet-tile-pane {
    filter: invert(1) hue-rotate(180deg) brightness(0.85) contrast(0.9);
  }

  .leaflet-popup-content-wrapper {
    background: ${r.w4.colors.surface};
    border: 1px solid ${r.w4.colors.border};
    border-radius: ${r.w4.borderRadius.md};
    color: ${r.w4.colors.mainText};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  }

  .leaflet-popup-tip {
    background: ${r.w4.colors.surface};
  }

  .leaflet-popup-content {
    margin: 12px 16px;
    font-size: 13px;
    line-height: 1.6;
  }

  .leaflet-control-zoom a {
    background: ${r.w4.colors.surface};
    border-color: ${r.w4.colors.border};
    color: ${r.w4.colors.mainText};
  }

  .leaflet-control-zoom a:hover {
    background: ${r.w4.colors.mainBg};
  }

  .leaflet-tooltip {
    background: #1c2128;
    border: 1px solid ${r.w4.colors.border};
    border-radius: 5px;
    color: ${r.w4.colors.mainText};
    font-family: ${r.w4.typography.fontFamilyMono};
    font-size: 11px;
    padding: 4px 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    white-space: nowrap;
  }

  .leaflet-tooltip::before {
    border-top-color: ${r.w4.colors.border};
  }
`,f=i.default.div`
  background: ${r.w4.colors.sidebarBg};
  border-top: 1px solid ${r.w4.colors.border};
  padding: ${r.w4.spacing.sm} ${r.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.lg};
  flex-wrap: wrap;
`,u=i.default.span`
  font-size: 11px;
  font-weight: 600;
  color: ${r.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  flex-shrink: 0;
`,h=i.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${r.w4.colors.mainText};
  white-space: nowrap;
`,x=i.default.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  box-shadow: 0 0 6px ${({color:e})=>e}80;
  flex-shrink: 0;
`,g=i.default.span`
  color: ${r.w4.colors.mainTextMuted};
  font-size: 11px;
`,m=i.default.div`
  height: 26px;
  min-height: 26px;
  background: ${r.w4.colors.sidebarBg};
  border-top: 1px solid ${r.w4.colors.border};
  display: flex;
  align-items: center;
  padding: 0 ${r.w4.spacing.md};
  gap: ${r.w4.spacing.md};
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
`,b=i.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({live:e})=>e?"#3fb950":"#f85149"};
`;function w(e){return`\n    <div style="font-family: monospace; line-height: 1.8;">\n      <div style="font-size: 14px; font-weight: 700; margin-bottom: 6px; color: ${n.IT[e.category]};">\n        🛰 ${e.name}\n      </div>\n      <table style="border-collapse: collapse; width: 100%;">\n        <tr><td style="color:#8b949e; padding-right:12px; font-size:11px;">Lat</td>\n            <td>${e.latitude.toFixed(4)}°</td></tr>\n        <tr><td style="color:#8b949e; padding-right:12px; font-size:11px;">Lon</td>\n            <td>${e.longitude.toFixed(4)}°</td></tr>\n        <tr><td style="color:#8b949e; padding-right:12px; font-size:11px;">Altitude</td>\n            <td>${e.altitude.toFixed(1)} km</td></tr>\n      </table>\n    </div>\n  `}function y(){const e=(0,o.useRef)(null),t=(0,o.useRef)(null),a=(0,o.useRef)(null),i=(0,o.useRef)(null),r=(0,o.useRef)(null),y=(0,o.useRef)(new Map),[$,v]=(0,o.useState)(!1),{data:j}=(0,n.so)(5e3),S=(0,n.Ey)(15e3),{trail:k,addPoint:M}=(0,n.wB)(80);return(0,o.useEffect)(()=>{var e;!function(e){if(document.querySelector(`link[href="${e}"]`))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),(e="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",new Promise((t,a)=>{if(document.querySelector(`script[src="${e}"]`))return void t();const o=document.createElement("script");o.src=e,o.onload=()=>t(),o.onerror=a,document.head.appendChild(o)})).then(()=>v(!0))},[]),(0,o.useEffect)(()=>{if(!$||!e.current||t.current)return;const o=window.L,l=o.map(e.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1,minZoom:2});o.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:10}).addTo(l);const s=o.circleMarker([20,0],{radius:8,color:n.IT.station,fillColor:n.IT.station,fillOpacity:1,weight:2,pane:"markerPane"}).addTo(l);s.bindPopup("Loading ISS…",{maxWidth:260,minWidth:200}),s.bindTooltip("🛰 ISS · International Space Station",{direction:"top",offset:[0,-8]}),a.current=s;const d=o.polyline([],{color:`${n.IT.station}55`,weight:1.5,dashArray:"4 4"}).addTo(l);i.current=d;const c=o.circle([20,0],{radius:0,color:`${n.IT.station}22`,fillColor:`${n.IT.station}08`,fillOpacity:1,weight:1}).addTo(l);return r.current=c,t.current=l,()=>{l.remove(),t.current=null,a.current=null,i.current=null,r.current=null,y.current.clear()}},[$]),(0,o.useEffect)(()=>{if(!j||!t.current)return;const e=[j.latitude,j.longitude];M(j.latitude,j.longitude),a.current?.setLatLng(e),a.current?.setPopupContent(w({...j,norad:25544,category:"station",displayName:"ISS"})),r.current?.setLatLng(e),r.current?.setRadius(j.footprint/2*1e3)},[j,M]),(0,o.useEffect)(()=>{i.current?.setLatLngs(k)},[k]),(0,o.useEffect)(()=>{if(!t.current||!window.L)return;const e=window.L,a=t.current,o=y.current;S.forEach(t=>{if(25544===t.norad)return;const i=[t.latitude,t.longitude],r=n.IT[t.category],l=`🛰 ${t.name} · ${t.altitude.toFixed(0)} km`;if(o.has(t.norad)){const e=o.get(t.norad);e.setLatLng(i),e.setPopupContent(w(t)),e.setTooltipContent(l)}else{const n=e.circleMarker(i,{radius:5,color:r,fillColor:r,fillOpacity:.85,weight:1.5}).addTo(a);n.bindPopup(w(t),{maxWidth:260,minWidth:200}),n.bindTooltip(l,{direction:"top",offset:[0,-6]}),o.set(t.norad,n)}})},[S]),(0,l.jsxs)(d,{children:[(0,l.jsx)(c,{children:(0,l.jsx)(p,{children:(0,l.jsx)("div",{ref:e,style:{height:"100%",width:"100%"}})})}),(0,l.jsxs)(f,{children:[(0,l.jsx)(u,{children:"Legend"}),s.map(({category:e,label:t,examples:a})=>(0,l.jsxs)(h,{children:[(0,l.jsx)(x,{color:n.IT[e]}),t,(0,l.jsxs)(g,{children:["· ",a]})]},e))]}),(0,l.jsxs)(m,{children:[(0,l.jsx)(b,{live:!!j}),(0,l.jsx)("span",{children:"ISS"}),j&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{children:"·"}),(0,l.jsxs)("span",{children:[j.latitude.toFixed(3),"°, ",j.longitude.toFixed(3),"°"]}),(0,l.jsx)("span",{children:"·"}),(0,l.jsxs)("span",{children:[j.altitude.toFixed(1)," km"]}),(0,l.jsx)("span",{children:"·"}),(0,l.jsxs)("span",{children:[(j.velocity/3600).toFixed(2)," km/s"]})]}),(0,l.jsxs)("span",{style:{marginLeft:"auto"},children:[S.length," satellites tracked · click any marker for details"]})]})]})}},6423(e,t,a){a.d(t,{A:()=>R}),a(7359);var o=a(3233),i=a(7207),r=a(3188),n=a(6896),l=a(140),s=a(6494),d=a(6720),c=a(4558),p=a(7230),f=a(8447),u=a(5723);const h=i.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,x=o.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
`,g=o.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${r.w4.spacing.md};
`,m=o.default.h2`
  font-size: ${r.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${r.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
`,b=o.default.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 500;
  color: ${({active:e})=>e?"#3fb950":r.w4.colors.mainTextMuted};
  background: ${({active:e})=>e?"rgba(63,185,80,0.1)":"transparent"};
  border: 1px solid ${({active:e})=>e?"rgba(63,185,80,0.3)":r.w4.colors.border};
  border-radius: 999px;
  padding: 2px 10px;
`,w=o.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:e})=>e?"#3fb950":r.w4.colors.mainTextMuted};
  animation: ${({active:e})=>e?h:"none"} 1.5s ease-in-out infinite;
`,y=o.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${r.w4.spacing.md};

  @media (max-width: ${r.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,$=o.default.div`
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: ${r.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.xs};
`,v=o.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${r.w4.borderRadius.sm};
  background: ${({color:e})=>e}18;
  color: ${({color:e})=>e};
  margin-bottom: ${r.w4.spacing.xs};
`,j=o.default.div`
  font-size: 11px;
  font-weight: 500;
  color: ${r.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,S=o.default.div`
  font-size: ${r.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${r.w4.colors.mainText};
  font-family: ${r.w4.typography.fontFamilyMono};
  line-height: 1.2;
`,k=o.default.div`
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
`,M=o.default.div`
  height: 24px;
  width: 120px;
  background: ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.sm};
  animation: ${h} 1.5s ease-in-out infinite;
`,z=o.default.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${r.w4.spacing.sm};

  @media (max-width: ${r.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,T=o.default.div`
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: ${r.w4.spacing.sm} ${r.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,A=o.default.div`
  font-size: 10px;
  color: ${r.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,I=o.default.div`
  font-size: ${r.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${r.w4.colors.mainText};
  font-family: ${r.w4.typography.fontFamilyMono};
`,C=o.default.div`
  font-size: 12px;
  font-weight: 600;
  color: ${r.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,F=o.default.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  background: ${({vis:e})=>"daylight"===e?"rgba(255,215,0,0.15)":"eclipsed"===e?"rgba(88,166,255,0.15)":"rgba(139,148,158,0.15)"};
  color: ${({vis:e})=>"daylight"===e?"#ffd700":"eclipsed"===e?"#58a6ff":r.w4.colors.mainTextMuted};
`;function P(e,t=2){return void 0===e?"—":e.toFixed(t)}function E(e,t,a){return`${Math.abs(e).toFixed(4)}° ${e>=0?t:a}`}function R(){const{data:e,loading:t}=(0,f.so)(5e3);return(0,u.jsxs)(x,{children:[(0,u.jsxs)(g,{children:[(0,u.jsxs)(m,{children:[(0,u.jsx)(n.A,{size:18,color:"#58a6ff"}),"Space Metrics"]}),(0,u.jsxs)(b,{active:!t&&!!e,children:[(0,u.jsx)(w,{active:!t&&!!e}),t?"Connecting…":e?"Live":"Offline"]})]}),(0,u.jsx)(C,{children:"ISS Telemetry"}),(0,u.jsxs)(y,{children:[(0,u.jsxs)($,{children:[(0,u.jsx)(v,{color:"#58a6ff",children:(0,u.jsx)(d.A,{size:16})}),(0,u.jsx)(j,{children:"Position"}),t?(0,u.jsx)(M,{}):e?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(S,{children:E(e.latitude,"N","S")}),(0,u.jsx)(k,{children:E(e.longitude,"E","W")})]}):(0,u.jsx)(S,{children:"—"})]}),(0,u.jsxs)($,{children:[(0,u.jsx)(v,{color:"#3fb950",children:(0,u.jsx)(s.A,{size:16})}),(0,u.jsx)(j,{children:"Altitude"}),t?(0,u.jsx)(M,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(S,{children:[P(e?.altitude)," km"]}),(0,u.jsxs)(k,{children:["~",P(e?.621371*e.altitude:void 0)," mi"]})]})]}),(0,u.jsxs)($,{children:[(0,u.jsx)(v,{color:"#e3b341",children:(0,u.jsx)(p.A,{size:16})}),(0,u.jsx)(j,{children:"Velocity"}),t?(0,u.jsx)(M,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(S,{children:[P(e?.velocity,0)," km/h"]}),(0,u.jsxs)(k,{children:[P(e?e.velocity/3600:void 0,2)," km/s"]})]})]}),(0,u.jsxs)($,{children:[(0,u.jsx)(v,{color:"#bc8cff",children:(0,u.jsx)(c.A,{size:16})}),(0,u.jsx)(j,{children:"Signal Footprint"}),t?(0,u.jsx)(M,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(S,{children:[P(e?.footprint,0)," km"]}),(0,u.jsx)(k,{children:"diameter visible from ISS"})]})]}),(0,u.jsxs)($,{children:[(0,u.jsx)(v,{color:"#ff7b72",children:(0,u.jsx)(l.A,{size:16})}),(0,u.jsx)(j,{children:"Sun Visibility"}),t?(0,u.jsx)(M,{}):e?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(S,{children:(0,u.jsx)(F,{vis:e.visibility,children:e.visibility.charAt(0).toUpperCase()+e.visibility.slice(1)})}),(0,u.jsxs)(k,{children:["Solar lat ",P(e.solar_lat,1),"° · lon ",P(e.solar_lon,1),"°"]})]}):(0,u.jsx)(S,{children:"—"})]}),(0,u.jsxs)($,{children:[(0,u.jsx)(v,{color:"#39d353",children:(0,u.jsx)(n.A,{size:16})}),(0,u.jsx)(j,{children:"Orbit Period"}),(0,u.jsx)(S,{children:"92.68 min"}),(0,u.jsx)(k,{children:"15.5 orbits per day"})]})]}),(0,u.jsx)(C,{children:"In Orbit Right Now"}),(0,u.jsxs)(z,{children:[(0,u.jsxs)(T,{children:[(0,u.jsx)(A,{children:"Tracked Objects"}),(0,u.jsx)(I,{children:"~27,000+"})]}),(0,u.jsxs)(T,{children:[(0,u.jsx)(A,{children:"Active Satellites"}),(0,u.jsx)(I,{children:"~9,000+"})]}),(0,u.jsxs)(T,{children:[(0,u.jsx)(A,{children:"ISS Inclination"}),(0,u.jsx)(I,{children:"51.64°"})]}),(0,u.jsxs)(T,{children:[(0,u.jsx)(A,{children:"ISS Mass"}),(0,u.jsx)(I,{children:"~420,000 kg"})]}),(0,u.jsxs)(T,{children:[(0,u.jsx)(A,{children:"ISS Size"}),(0,u.jsx)(I,{children:"109 × 73 m"})]}),(0,u.jsxs)(T,{children:[(0,u.jsx)(A,{children:"LEO Range"}),(0,u.jsx)(I,{children:"160–2,000 km"})]}),(0,u.jsxs)(T,{children:[(0,u.jsx)(A,{children:"Orbital Velocity"}),(0,u.jsx)(I,{children:"~7.66 km/s"})]}),(0,u.jsxs)(T,{children:[(0,u.jsx)(A,{children:"ISS Crew"}),(0,u.jsx)(I,{children:"~7 people"})]})]})]})}},8447(e,t,a){a.d(t,{Ey:()=>f,IT:()=>s,mJ:()=>n,so:()=>r,wB:()=>u});var o=a(7359),i=a(5881);function r(e=5e3){const[t,a]=(0,o.useState)(null),[i,r]=(0,o.useState)(!0),[n,l]=(0,o.useState)(null),s=(0,o.useCallback)(async()=>{try{const e=await fetch("https://api.wheretheiss.at/v1/satellites/25544");if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();a(t),l(null)}catch(e){l(e instanceof Error?e.message:"Fetch failed")}finally{r(!1)}},[]);return(0,o.useEffect)(()=>{s();const t=setInterval(s,e);return()=>clearInterval(t)},[s,e]),{data:t,loading:i,error:n,refresh:s}}function n(){const[e,t]=(0,o.useState)(null),[a,i]=(0,o.useState)("pending");return(0,o.useEffect)(()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{t({lat:e.coords.latitude,lon:e.coords.longitude}),i("granted")},()=>i("denied"),{timeout:8e3}):i("denied")},[]),{location:e,status:a}}const l=[{norad:25544,name:"ISS",category:"station"},{norad:48274,name:"Tiangong",category:"station"},{norad:25994,name:"Terra",category:"observation"},{norad:27424,name:"Aqua",category:"observation"},{norad:49260,name:"Landsat-9",category:"observation"},{norad:43873,name:"GPS III-1",category:"navigation"},{norad:45854,name:"GPS III-4",category:"navigation"},{norad:40534,name:"GPS IIF-10",category:"navigation"},{norad:44713,name:"Starlink-24",category:"communications"},{norad:44914,name:"Starlink-60",category:"communications"},{norad:45178,name:"Starlink-100",category:"communications"},{norad:20580,name:"Hubble",category:"scientific"},{norad:37820,name:"Suomi NPP",category:"scientific"},{norad:41866,name:"GOES-16",category:"weather"},{norad:44914,name:"GOES-18",category:"weather"}],s={station:"#ffd700",observation:"#58a6ff",navigation:"#3fb950",communications:"#e3b341",scientific:"#bc8cff",weather:"#79c0ff"},d=new Map,c=36e5;function p(e,t,a){try{const o=(0,i.jl)(e,t),r=(0,i.gv)(o,a);if(!r.position||"boolean"==typeof r.position)return null;const n=(0,i.Y0)(a),l=(0,i.$6)(r.position,n);return{latitude:(0,i.Zr)(l.latitude),longitude:(0,i.yy)(l.longitude),altitude:l.height}}catch{return null}}function f(e=5e3){const[t,a]=(0,o.useState)([]),i=(0,o.useCallback)(async()=>{const e=await Promise.allSettled(l.map(async(e,t)=>(await new Promise(e=>setTimeout(e,120*t)),async function(e){const t=d.get(e);if(t&&Date.now()-t.fetchedAt<c)return{line1:t.line1,line2:t.line2};try{const t=await fetch(`https://tle.ivanstanojevic.me/api/tle/${e}`);if(!t.ok)throw new Error(`HTTP ${t.status}`);const a=await t.json();if(!a.line1||!a.line2)throw new Error("No TLE lines");return d.set(e,{line1:a.line1,line2:a.line2,fetchedAt:Date.now()}),{line1:a.line1,line2:a.line2}}catch{return null}}(e.norad)))),t=new Date,o=[];e.forEach((e,a)=>{if("fulfilled"!==e.status||!e.value)return;const i=l[a],r=p(e.value.line1,e.value.line2,t);r&&o.push({norad:i.norad,name:i.name,category:i.category,...r})}),o.length>0&&a(o)},[]);return(0,o.useEffect)(()=>{i();const e=setInterval(i,c);return()=>clearInterval(e)},[i]),(0,o.useEffect)(()=>{const t=setInterval(()=>{const e=new Date,t=[];l.forEach(a=>{const o=d.get(a.norad);if(!o)return;const i=p(o.line1,o.line2,e);i&&t.push({norad:a.norad,name:a.name,category:a.category,...i})}),t.length>0&&a(t)},e);return()=>clearInterval(t)},[e]),t}function u(e=60){const t=(0,o.useRef)([]),[a,i]=(0,o.useState)([]);return{trail:a,addPoint:(0,o.useCallback)((a,o)=>{t.current=[...t.current,[a,o]].slice(-e),i([...t.current])},[e])}}}}]);
//# sourceMappingURL=779.5435367736392533d2e6.js.map