"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["512"],{8997(e,a,t){var i=t(2727);a.createRoot=i.createRoot,i.hydrateRoot},3611(e,a,t){var i=t(5723),s=t(8997),o=t(7991),l=t(6859),n=t.n(l),r=t(2799),d=t(4764),c=t(5030),g=t(8170),m=t(1232),w=t(4041),p=t(948),f=t(2552),h=t(1589),u=t(8477),x=t(5405),b=t(483),k=t(9276),y=t(5742),v=t(7103),j=t(2128),$=t(9446),C=t(950),S=t(2152),D=t(429),M=t(4406),z=t(3161);let F="#7fb77e",T=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,E=n().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`,A=n().div`
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
`,W=n().div`
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  flex: 1;
  animation: ${T} 0.25s ease both;
`,I=n().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-left: 2px solid ${F};
  border-radius: ${d.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${d.w4.spacing.lg};
  gap: ${d.w4.spacing.md};
  transition: border-color 0.14s ease;
`,P=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${d.w4.spacing.sm};
  height: 100%;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,R=n().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 100%;
`,O=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  line-height: 1;
`,Y=n().span`
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
`;let _=n().div`
  display: flex;
  gap: 4px;
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.lg} 0;
  border-bottom: 1px solid ${d.w4.colors.border};
`,H=n().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?F:"transparent"};
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
`;n().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${d.w4.spacing.md};
  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;let B=n().button`
  position: fixed;
  bottom: max(${d.w4.spacing.md}, env(safe-area-inset-bottom, ${d.w4.spacing.md}));
  right: ${d.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${F};
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
`,N=document.getElementById("root");if(!N)throw Error("Root element #root not found");(0,s.createRoot)(N).render((0,i.jsx)(function({topBarRight:e}){let[a]=(0,g.Ym)(),t=(0,o.useMemo)(()=>(0,g.Nx)(a,p.A),[a]),{data:s,loaded:l,save:n}=(0,m.useForma)(),[r,F]=(0,o.useState)("16:8"),[T,N]=(0,o.useState)(!1),[G,K]=(0,o.useState)(void 0),[Q,U]=(0,o.useState)(null),[q,J]=(0,o.useState)("today"),V=(0,o.useCallback)((e,a)=>{K(e),U(a??null),N(!0)},[]),X=(0,o.useCallback)(()=>{N(!1),K(void 0),U(null)},[]),Z=s??{sessions:[],meals:[],weights:[],walks:[],templates:m.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},ee=(0,o.useCallback)(async(e,a)=>{let t={...Z,sessions:[...Z.sessions,{id:(0,w.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[Z,n]),ea=(0,o.useCallback)(async e=>{let a={...Z,sessions:Z.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[Z,n]),et=(0,o.useCallback)(async()=>{let e=Z.sessions.find(e=>void 0===e.endedAt);e&&await ea(e)},[Z,ea]),ei=(0,o.useCallback)(async e=>{let a=new Date(e.startedAt),i=e=>String(e).padStart(2,"0"),s=`${a.getFullYear()}-${i(a.getMonth()+1)}-${i(a.getDate())}T${i(a.getHours())}:${i(a.getMinutes())}`,o=window.prompt(t("forma.timer.editStartPrompt"),s);if(!o)return;let l=new Date(o);if(Number.isNaN(l.getTime()))return;let r=l.getTime();if(r>Date.now())return;let d={...Z,sessions:Z.sessions.map(a=>a.id===e.id?{...a,startedAt:r}:a)};await n(d)},[Z,n,t]),es=(0,o.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...Z,meals:[...Z.meals,{id:(0,w.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[Z,n]),eo=(0,o.useCallback)(async(e,a,t,i,s,o)=>{let l={...Z,meals:Z.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[Z,n]),el=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=Z.weights.filter(e=>e.date!==a),i={...Z,weights:[...t,{date:a,kg:e}]};await n(i)},[Z,n]),en=(0,o.useCallback)(async(e,a)=>{let t={...Z,weights:Z.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[Z,n]),er=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...Z,walks:[...Z.walks,{id:(0,w.z)(),date:a,minutes:e}]};await n(t)},[Z,n]),ed=(0,o.useCallback)(async(e,a,t)=>{let i={...Z,walks:Z.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[Z,n]),ec=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...Z,meals:[...Z.meals,{id:(0,w.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[Z,n]),eg=(0,o.useCallback)(async e=>{let a={...Z,meals:Z.meals.filter(a=>a.id!==e)};await n(a)},[Z,n]),em=(0,o.useCallback)(async e=>{let a={...Z,weights:Z.weights.filter(a=>a.date!==e)};await n(a)},[Z,n]),ew=(0,o.useCallback)(()=>V("meal"),[V]),ep=(0,o.useCallback)(()=>V("walk"),[V]),ef=(0,o.useCallback)(()=>V("weight"),[V]),eh=(0,o.useCallback)(e=>{let a=Z.meals.find(a=>a.id===e);a&&V("meal",{kind:"meal",entry:a})},[Z.meals,V]),eu=(0,o.useCallback)(e=>{let a=Z.weights.find(a=>a.date===e);a&&V("weight",{kind:"weight",entry:a})},[Z.weights,V]),ex=(0,o.useCallback)(async e=>{switch(e.kind){case"fast":await ee(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await es(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await el(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await er(e.walkMinutes)}},[ee,es,el,er]),eb=(0,m.streakDays)(Z.sessions,Z.goal.targetHours),ek=(0,m.avgFastDuration)(Z.sessions,30),ey=Z.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(d.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)(E,{children:[(0,i.jsxs)(_,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(H,{role:"tab","aria-selected":"today"===q,active:"today"===q,onClick:()=>J("today"),children:t("forma.tab.today")}),(0,i.jsx)(H,{role:"tab","aria-selected":"fasting"===q,active:"fasting"===q,onClick:()=>J("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(H,{role:"tab","aria-selected":"weight"===q,active:"weight"===q,onClick:()=>J("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(H,{role:"tab","aria-selected":"analytics"===q,active:"analytics"===q,onClick:()=>J("analytics"),children:t("forma.tab.analytics")}),(0,i.jsx)(H,{role:"tab","aria-selected":"settings"===q,active:"settings"===q,onClick:()=>J("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(A,{children:["fasting"===q&&(0,i.jsx)(h.B,{t:t,active:r,onChange:F}),(0,i.jsx)(L,{children:(0,i.jsxs)(W,{children:["today"===q&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.F,{t:t,onParsed:e=>void ex(e)}),(0,i.jsx)(M.C,{t:t,cards:[{id:"mini-fast",defaultSize:"sm",render:()=>(0,i.jsx)(j.g,{data:Z,t:t,onClick:()=>J("fasting")})},{id:"mini-weight",defaultSize:"sm",render:()=>(0,i.jsx)($.S,{data:Z,t:t,onClick:()=>J("weight")})},{id:"today",defaultSize:"lg",render:()=>(0,i.jsx)(y._,{data:Z,t:t,onLogMeal:ew,onLogWalk:ep,onLogWeight:ef,onDeleteMeal:e=>void eg(e),onEditMeal:eh})},{id:"ask",defaultSize:"lg",render:()=>(0,i.jsx)(v.j,{data:Z,t:t,locale:a})},{id:"meal-heatmap",defaultSize:"lg",render:()=>(0,i.jsx)(C.M,{data:Z,t:t,locale:a})},{id:"week",defaultSize:"lg",render:()=>(0,i.jsx)(b.v,{data:Z,t:t,locale:a,onTapTemplate:e=>void ec(e)})},{id:"stats",defaultSize:"md",render:()=>(0,i.jsxs)(P,{children:[(0,i.jsxs)(R,{children:[(0,i.jsx)(O,{children:eb}),(0,i.jsx)(Y,{children:t("forma.streak",{n:eb})})]}),(0,i.jsxs)(R,{children:[(0,i.jsx)(O,{children:ek>0?ek.toFixed(1):"—"}),(0,i.jsx)(Y,{children:t("forma.hero.avgDuration")})]}),ey&&(0,i.jsxs)(R,{children:[(0,i.jsx)(O,{children:ey.kg.toFixed(1)}),(0,i.jsx)(Y,{children:t("forma.weight.label")})]})]})}]})]}),"fasting"===q&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.P,{t:t,active:r,onChange:F}),(0,i.jsx)(I,{children:(0,i.jsx)(f.k,{data:Z,t:t,onStart:()=>{let e="16:8"===r?16:"18:6"===r?18:"20:4"===r?20:Z.goal.targetHours;ee(r,e)},onStop:e=>void ea(e),onEditStart:e=>void ei(e)})}),(0,i.jsx)(b.v,{data:Z,t:t,locale:a,onTapTemplate:e=>void ec(e)})]}),"weight"===q&&(0,i.jsx)(S.m,{data:Z,t:t,onLogWeight:ef,onDeleteWeight:e=>void em(e),onEditWeight:eu}),"analytics"===q&&(0,i.jsx)(z.Q,{data:Z,t:t,locale:a}),"settings"===q&&(0,i.jsx)(D.f,{data:Z,t:t,onSave:n})]})})]}),(0,i.jsx)(B,{"aria-label":t("forma.log"),onClick:()=>V(),children:(0,i.jsx)(c.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(k.Y,{open:T,onClose:X,data:Z,t:t,initialMode:G,editing:Q,onStartFast:(e,a)=>void ee(e,a),onStopFast:()=>void et(),onLogMeal:(e,a,t,i,s)=>void es(e,a,t,i,s),onEditMeal:(e,a,t,i,s,o)=>void eo(e,a,t,i,s,o),onLogWeight:(e,a)=>void el(e,a),onEditWeight:(e,a)=>void en(e,a),onLogWalk:(e,a)=>void er(e,a),onEditWalk:(e,a,t)=>void ed(e,a,t)})]})})},{}))}}]);