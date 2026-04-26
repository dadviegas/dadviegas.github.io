"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["512"],{8997(e,t,a){var o=a(2727);t.createRoot=o.createRoot,o.hydrateRoot},3611(e,t,a){var o=a(5723),i=a(8997),s=a(7991),r=a(6859),n=a.n(r),l=a(2799),d=a(4764),c=a(5030),m=a(8170),g=a(9463),p=a(4041),w=a(948),f=a(2552),x=a(1589),u=a(8477),h=a(5405),b=a(483),k=a(9276),y=a(5742),j=a(7103),v=a(2128),$=a(9446),C=a(950),S=a(2152),N=a(429);let D="#7fb77e",F=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,M=n().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`,T=n().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,L=n().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,A=n().div`
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  flex: 1;
  animation: ${F} 0.25s ease both;
`,P=n().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-left: 2px solid ${D};
  border-radius: ${d.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${d.w4.spacing.lg};
  gap: ${d.w4.spacing.md};
  transition: border-color 0.14s ease;
`,R=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${d.w4.spacing.sm};

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,W=n().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,z=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  line-height: 1;
`,E=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${d.w4.colors.mainTextMuted};
`;n().div`
  /* Phase 2 seam — FormaGrid drops in here */
  flex: 1;
  min-height: 0;
`;let I=n().div`
  display: flex;
  gap: 4px;
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.lg} 0;
  border-bottom: 1px solid ${d.w4.colors.border};
`,Y=n().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?D:"transparent"};
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.md};
  font-size: 12px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({active:e})=>e?d.w4.colors.mainText:d.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 140ms ease, border-color 140ms ease;
  margin-bottom: -1px;
  &:hover { color: ${d.w4.colors.mainText}; }
`,_=n().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${d.w4.spacing.md};
  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,H=n().button`
  position: fixed;
  bottom: max(${d.w4.spacing.md}, env(safe-area-inset-bottom, ${d.w4.spacing.md}));
  right: ${d.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${D};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
  z-index: 100;
  transition: transform 0.14s ease, box-shadow 0.14s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  /* Only show on mobile/iPad; desktop uses QuickLogBar */
  @media (min-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,O=document.getElementById("root");if(!O)throw Error("Root element #root not found");(0,i.createRoot)(O).render((0,o.jsx)(function({topBarRight:e}){let[t]=(0,m.Ym)(),a=(0,s.useMemo)(()=>(0,m.Nx)(t,w.A),[t]),{data:i,loaded:r,save:n}=(0,g.useForma)(),[l,D]=(0,s.useState)("16:8"),[F,O]=(0,s.useState)(!1),[B,K]=(0,s.useState)("today"),G=i??{sessions:[],meals:[],weights:[],walks:[],templates:g.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},Q=(0,s.useCallback)(async(e,t)=>{let a={...G,sessions:[...G.sessions,{id:(0,p.z)(),startedAt:Date.now(),targetHours:t,protocol:e}]};await n(a)},[G,n]),U=(0,s.useCallback)(async e=>{let t={...G,sessions:G.sessions.map(t=>t.id===e.id?{...t,endedAt:Date.now()}:t)};await n(t)},[G,n]),q=(0,s.useCallback)(async()=>{let e=G.sessions.find(e=>void 0===e.endedAt);e&&await U(e)},[G,U]),J=(0,s.useCallback)(async e=>{let t=new Date(e.startedAt),o=e=>String(e).padStart(2,"0"),i=`${t.getFullYear()}-${o(t.getMonth()+1)}-${o(t.getDate())}T${o(t.getHours())}:${o(t.getMinutes())}`,s=window.prompt(a("forma.timer.editStartPrompt"),i);if(!s)return;let r=new Date(s);if(Number.isNaN(r.getTime()))return;let l=r.getTime();if(l>Date.now())return;let d={...G,sessions:G.sessions.map(t=>t.id===e.id?{...t,startedAt:l}:t)};await n(d)},[G,n,a]),V=(0,s.useCallback)(async(e,t,a,o)=>{let i=new Date().toISOString().slice(0,10),s={...G,meals:[...G.meals,{id:(0,p.z)(),date:i,slot:e,proteinG:t,kcal:a,notes:o||void 0,createdAt:Date.now()}]};await n(s)},[G,n]),X=(0,s.useCallback)(async e=>{let t=new Date().toISOString().slice(0,10),a=G.weights.filter(e=>e.date!==t),o={...G,weights:[...a,{date:t,kg:e}]};await n(o)},[G,n]),Z=(0,s.useCallback)(async e=>{let t=new Date().toISOString().slice(0,10),a={...G,walks:[...G.walks,{date:t,minutes:e}]};await n(a)},[G,n]),ee=(0,s.useCallback)(async e=>{let t={...G,meals:G.meals.filter(t=>t.id!==e)};await n(t)},[G,n]),et=(0,s.useCallback)(async e=>{let t={...G,weights:G.weights.filter(t=>t.date!==e)};await n(t)},[G,n]),ea=(0,s.useCallback)(()=>{let e=window.prompt(a("forma.action.promptSlot"),"dinner");if(!e)return;let t=["lunch","dinner","snack"].includes(e)?e:"dinner",o=window.prompt(a("forma.action.promptMealDesc"))??"",i=window.prompt(a("forma.action.promptProtein"),"30"),s=window.prompt(a("forma.action.promptKcal"),"500"),r=i?Number(i):0,n=s?Number(s):0;Number.isNaN(r)||Number.isNaN(n)||V(t,r,n,o)},[a,V]),eo=(0,s.useCallback)(()=>{let e=window.prompt(a("forma.action.promptWalk"),"30");if(!e)return;let t=Number(e);Number.isNaN(t)||t<=0||Z(t)},[a,Z]),ei=(0,s.useCallback)(()=>{let e=window.prompt(a("forma.action.promptWeight"),"");if(!e)return;let t=Number(e);Number.isNaN(t)||t<=0||X(t)},[a,X]),es=(0,s.useCallback)(async e=>{switch(e.kind){case"fast":await Q(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await V(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await X(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await Z(e.walkMinutes)}},[Q,V,X,Z]),er=(0,g.streakDays)(G.sessions,G.goal.targetHours),en=(0,g.avgFastDuration)(G.sessions,30),el=G.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,o.jsx)(d.PE,{title:a("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,o.jsxs)(M,{children:[(0,o.jsxs)(I,{role:"tablist","aria-label":a("forma.tabs.aria"),children:[(0,o.jsx)(Y,{role:"tab","aria-selected":"today"===B,active:"today"===B,onClick:()=>K("today"),children:a("forma.tab.today")}),(0,o.jsx)(Y,{role:"tab","aria-selected":"fasting"===B,active:"fasting"===B,onClick:()=>K("fasting"),children:a("forma.tab.fasting")}),(0,o.jsx)(Y,{role:"tab","aria-selected":"weight"===B,active:"weight"===B,onClick:()=>K("weight"),children:a("forma.tab.weight")}),(0,o.jsx)(Y,{role:"tab","aria-selected":"settings"===B,active:"settings"===B,onClick:()=>K("settings"),children:a("forma.tab.settings")})]}),(0,o.jsxs)(T,{children:["fasting"===B&&(0,o.jsx)(x.B,{t:a,active:l,onChange:D}),(0,o.jsx)(L,{children:(0,o.jsxs)(A,{children:["today"===B&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.F,{t:a,onParsed:e=>void es(e)}),(0,o.jsxs)(_,{children:[(0,o.jsx)(v.g,{data:G,t:a,onClick:()=>K("fasting")}),(0,o.jsx)($.S,{data:G,t:a,onClick:()=>K("weight")})]}),(0,o.jsx)(y._,{data:G,t:a,onLogMeal:ea,onLogWalk:eo,onLogWeight:ei,onDeleteMeal:e=>void ee(e)}),(0,o.jsx)(j.j,{data:G,t:a,locale:t}),(0,o.jsx)(C.M,{data:G,t:a,locale:t}),(0,o.jsx)(b.v,{data:G,t:a,locale:t}),(0,o.jsxs)(R,{children:[(0,o.jsxs)(W,{children:[(0,o.jsx)(z,{children:er}),(0,o.jsx)(E,{children:a("forma.streak",{n:er})})]}),(0,o.jsxs)(W,{children:[(0,o.jsx)(z,{children:en>0?en.toFixed(1):"—"}),(0,o.jsx)(E,{children:a("forma.hero.avgDuration")})]}),el&&(0,o.jsxs)(W,{children:[(0,o.jsx)(z,{children:el.kg.toFixed(1)}),(0,o.jsx)(E,{children:a("forma.weight.label")})]})]})]}),"fasting"===B&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.P,{t:a,active:l,onChange:D}),(0,o.jsx)(P,{children:(0,o.jsx)(f.k,{data:G,t:a,onStart:()=>{let e="16:8"===l?16:"18:6"===l?18:"20:4"===l?20:G.goal.targetHours;Q(l,e)},onStop:e=>void U(e),onEditStart:e=>void J(e)})}),(0,o.jsx)(b.v,{data:G,t:a,locale:t})]}),"weight"===B&&(0,o.jsx)(S.m,{data:G,t:a,onLogWeight:ei,onDeleteWeight:e=>void et(e)}),"settings"===B&&(0,o.jsx)(N.f,{data:G,t:a,onSave:n})]})})]}),(0,o.jsx)(H,{"aria-label":a("forma.log"),onClick:()=>O(!0),children:(0,o.jsx)(c.In,{name:"plus",size:24,color:"#fff"})}),(0,o.jsx)(k.Y,{open:F,onClose:()=>O(!1),data:G,t:a,onStartFast:(e,t)=>void Q(e,t),onStopFast:()=>void q(),onLogMeal:(e,t,a,o)=>void V(e,t,a,o),onLogWeight:e=>void X(e),onLogWalk:e=>void Z(e)})]})})},{}))}}]);