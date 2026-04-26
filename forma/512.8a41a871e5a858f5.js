"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["512"],{8997(e,a,t){var i=t(2727);a.createRoot=i.createRoot,i.hydrateRoot},3611(e,a,t){var i=t(5723),s=t(8997),o=t(7991),l=t(6859),n=t.n(l),r=t(2799),d=t(4764),c=t(5030),g=t(8170),m=t(3650),w=t(4041),f=t(948),p=t(2552),h=t(1589),u=t(8477),x=t(5405),b=t(483),k=t(9276),v=t(5742),y=t(7103),j=t(2128),$=t(9446),C=t(950),S=t(2152),D=t(429),M=t(4406),F=t(9624),z=t(2810);let T="#7fb77e",E=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,W=n().div`
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
`,I=n().div`
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  flex: 1;
  animation: ${E} 0.25s ease both;
`,P=n().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-left: 2px solid ${T};
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
  height: 100%;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,O=n().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 100%;
`,Y=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  line-height: 1;
`,_=n().span`
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
`;let H=n().div`
  display: flex;
  gap: 4px;
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.lg} 0;
  border-bottom: 1px solid ${d.w4.colors.border};
`,N=n().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?T:"transparent"};
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
  background: ${T};
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
`,G=document.getElementById("root");if(!G)throw Error("Root element #root not found");(0,s.createRoot)(G).render((0,i.jsx)(function({topBarRight:e}){let[a]=(0,g.Ym)(),t=(0,o.useMemo)(()=>(0,g.Nx)(a,f.A),[a]),{data:s,loaded:l,save:n}=(0,m.useForma)(),[r,T]=(0,o.useState)("16:8"),[E,G]=(0,o.useState)(!1),[K,Q]=(0,o.useState)(void 0),[U,q]=(0,o.useState)(null),[J,V]=(0,o.useState)("today"),X=(0,o.useCallback)((e,a)=>{Q(e),q(a??null),G(!0)},[]),Z=(0,o.useCallback)(()=>{G(!1),Q(void 0),q(null)},[]),ee=s??{sessions:[],meals:[],weights:[],walks:[],templates:m.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},ea=(0,o.useCallback)(async(e,a)=>{let t={...ee,sessions:[...ee.sessions,{id:(0,w.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[ee,n]),et=(0,o.useCallback)(async e=>{let a={...ee,sessions:ee.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[ee,n]),ei=(0,o.useCallback)(async()=>{let e=ee.sessions.find(e=>void 0===e.endedAt);e&&await et(e)},[ee,et]),es=(0,o.useCallback)(async e=>{let a=new Date(e.startedAt),i=e=>String(e).padStart(2,"0"),s=`${a.getFullYear()}-${i(a.getMonth()+1)}-${i(a.getDate())}T${i(a.getHours())}:${i(a.getMinutes())}`,o=window.prompt(t("forma.timer.editStartPrompt"),s);if(!o)return;let l=new Date(o);if(Number.isNaN(l.getTime()))return;let r=l.getTime();if(r>Date.now())return;let d={...ee,sessions:ee.sessions.map(a=>a.id===e.id?{...a,startedAt:r}:a)};await n(d)},[ee,n,t]),eo=(0,o.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...ee,meals:[...ee.meals,{id:(0,w.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[ee,n]),el=(0,o.useCallback)(async(e,a,t,i,s,o)=>{let l={...ee,meals:ee.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[ee,n]),en=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=ee.weights.filter(e=>e.date!==a),i={...ee,weights:[...t,{date:a,kg:e}]};await n(i)},[ee,n]),er=(0,o.useCallback)(async(e,a)=>{let t={...ee,weights:ee.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[ee,n]),ed=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...ee,walks:[...ee.walks,{id:(0,w.z)(),date:a,minutes:e}]};await n(t)},[ee,n]),ec=(0,o.useCallback)(async(e,a,t)=>{let i={...ee,walks:ee.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[ee,n]),eg=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...ee,meals:[...ee.meals,{id:(0,w.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[ee,n]),em=(0,o.useCallback)(async e=>{let a={...ee,meals:ee.meals.filter(a=>a.id!==e)};await n(a)},[ee,n]),ew=(0,o.useCallback)(async e=>{let a={...ee,weights:ee.weights.filter(a=>a.date!==e)};await n(a)},[ee,n]),ef=(0,o.useCallback)(async e=>{let a={...ee,walks:ee.walks.filter(a=>a.date!==e)};await n(a)},[ee,n]),ep=(0,o.useCallback)(async e=>{let a={...ee,sessions:ee.sessions.filter(a=>a.id!==e)};await n(a)},[ee,n]),eh=(0,o.useCallback)(()=>X("meal"),[X]),eu=(0,o.useCallback)(()=>X("walk"),[X]),ex=(0,o.useCallback)(()=>X("weight"),[X]),eb=(0,o.useCallback)(e=>{let a=ee.meals.find(a=>a.id===e);a&&X("meal",{kind:"meal",entry:a})},[ee.meals,X]),ek=(0,o.useCallback)(e=>{let a=ee.weights.find(a=>a.date===e);a&&X("weight",{kind:"weight",entry:a})},[ee.weights,X]),ev=(0,o.useCallback)(async e=>{switch(e.kind){case"fast":await ea(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await eo(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await en(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await ed(e.walkMinutes)}},[ea,eo,en,ed]),ey=(0,m.streakDays)(ee.sessions,ee.goal.targetHours),ej=(0,m.avgFastDuration)(ee.sessions,30),e$=ee.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(d.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)(W,{children:[(0,i.jsxs)(H,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(N,{role:"tab","aria-selected":"today"===J,active:"today"===J,onClick:()=>V("today"),children:t("forma.tab.today")}),(0,i.jsx)(N,{role:"tab","aria-selected":"fasting"===J,active:"fasting"===J,onClick:()=>V("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(N,{role:"tab","aria-selected":"weight"===J,active:"weight"===J,onClick:()=>V("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(N,{role:"tab","aria-selected":"activities"===J,active:"activities"===J,onClick:()=>V("activities"),children:t("forma.tab.activities")}),(0,i.jsx)(N,{role:"tab","aria-selected":"analytics"===J,active:"analytics"===J,onClick:()=>V("analytics"),children:t("forma.tab.analytics")}),(0,i.jsx)(N,{role:"tab","aria-selected":"settings"===J,active:"settings"===J,onClick:()=>V("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(A,{children:["fasting"===J&&(0,i.jsx)(h.B,{t:t,active:r,onChange:T}),(0,i.jsx)(L,{children:(0,i.jsxs)(I,{children:["today"===J&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.F,{t:t,onParsed:e=>void ev(e)}),(0,i.jsx)(M.C,{t:t,cards:[{id:"mini-fast",defaultSize:"sm",render:()=>(0,i.jsx)(j.g,{data:ee,t:t,onClick:()=>V("fasting")})},{id:"mini-weight",defaultSize:"sm",render:()=>(0,i.jsx)($.S,{data:ee,t:t,onClick:()=>V("weight")})},{id:"today",defaultSize:"lg",render:()=>(0,i.jsx)(v._,{data:ee,t:t,onLogMeal:eh,onLogWalk:eu,onLogWeight:ex,onDeleteMeal:e=>void em(e),onEditMeal:eb})},{id:"ask",defaultSize:"lg",render:()=>(0,i.jsx)(y.j,{data:ee,t:t,locale:a})},{id:"meal-heatmap",defaultSize:"lg",render:()=>(0,i.jsx)(C.M,{data:ee,t:t,locale:a})},{id:"week",defaultSize:"lg",render:()=>(0,i.jsx)(b.v,{data:ee,t:t,locale:a,onTapTemplate:e=>void eg(e)})},{id:"stats",defaultSize:"md",render:()=>(0,i.jsxs)(R,{children:[(0,i.jsxs)(O,{children:[(0,i.jsx)(Y,{children:ey}),(0,i.jsx)(_,{children:t("forma.streak",{n:ey})})]}),(0,i.jsxs)(O,{children:[(0,i.jsx)(Y,{children:ej>0?ej.toFixed(1):"—"}),(0,i.jsx)(_,{children:t("forma.hero.avgDuration")})]}),e$&&(0,i.jsxs)(O,{children:[(0,i.jsx)(Y,{children:e$.kg.toFixed(1)}),(0,i.jsx)(_,{children:t("forma.weight.label")})]})]})}]})]}),"fasting"===J&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.P,{t:t,active:r,onChange:T}),(0,i.jsx)(P,{children:(0,i.jsx)(p.k,{data:ee,t:t,onStart:()=>{let e="16:8"===r?16:"18:6"===r?18:"20:4"===r?20:ee.goal.targetHours;ea(r,e)},onStop:e=>void et(e),onEditStart:e=>void es(e)})}),(0,i.jsx)(b.v,{data:ee,t:t,locale:a,onTapTemplate:e=>void eg(e)})]}),"weight"===J&&(0,i.jsx)(S.m,{data:ee,t:t,onLogWeight:ex,onDeleteWeight:e=>void ew(e),onEditWeight:ek}),"activities"===J&&(0,i.jsx)(z.N,{data:ee,t:t,locale:a,onEditFast:e=>void es(e),onEditMeal:e=>eb(e.id),onEditWeight:e=>ek(e.date),onDeleteFast:e=>void ep(e),onDeleteMeal:e=>void em(e),onDeleteWeight:e=>void ew(e),onDeleteWalk:e=>void ef(e)}),"analytics"===J&&(0,i.jsx)(F.Q,{data:ee,t:t,locale:a}),"settings"===J&&(0,i.jsx)(D.f,{data:ee,t:t,onSave:n})]})})]}),(0,i.jsx)(B,{"aria-label":t("forma.log"),onClick:()=>X(),children:(0,i.jsx)(c.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(k.Y,{open:E,onClose:Z,data:ee,t:t,initialMode:K,editing:U,onStartFast:(e,a)=>void ea(e,a),onStopFast:()=>void ei(),onLogMeal:(e,a,t,i,s)=>void eo(e,a,t,i,s),onEditMeal:(e,a,t,i,s,o)=>void el(e,a,t,i,s,o),onLogWeight:(e,a)=>void en(e,a),onEditWeight:(e,a)=>void er(e,a),onLogWalk:(e,a)=>void ed(e,a),onEditWalk:(e,a,t)=>void ec(e,a,t)})]})})},{}))}}]);