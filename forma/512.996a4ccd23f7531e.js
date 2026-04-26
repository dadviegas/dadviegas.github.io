"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["512"],{58997(e,a,t){var i=t(62727);a.createRoot=i.createRoot,i.hydrateRoot},13611(e,a,t){var i=t(65723),s=t(58997),o=t(37991),l=t(36859),n=t.n(l),d=t(72799),r=t(6063),c=t(44e3),g=t(28170),m=t(14659),w=t(54041),p=t(20948),h=t(72552),f=t(71589),x=t(68477),u=t(25405),b=t(20483),k=t(39276),v=t(15742),y=t(37103),j=t(52128),$=t(59446),C=t(92152),S=t(20429),D=t(4406),F=t(63709),z=t(90429);let M="#7fb77e",E=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,T=n().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,W=n().div`
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
  padding: ${r.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  flex: 1;
  animation: ${E} 0.25s ease both;
  min-width: 0;

  @media (max-width: ${r.w4.breakpoints.md}) {
    padding: ${r.w4.spacing.md};
    gap: ${r.w4.spacing.md};
  }
`,I=n().div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-left: 2px solid ${M};
  border-radius: ${r.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${r.w4.spacing.lg};
  gap: ${r.w4.spacing.md};
  transition: border-color 0.14s ease;
`,P=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${r.w4.spacing.sm};
  height: 100%;

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,R=n().div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  padding: ${r.w4.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 100%;
`,O=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${r.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${r.w4.colors.mainText};
  line-height: 1;
`,_=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${r.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${r.w4.colors.mainTextMuted};
`;n().div`
  /* Phase 2 seam — FormaGrid drops in here */
  flex: 1;
  min-height: 0;
`;let Y=n().div`
  display: flex;
  gap: 4px;
  padding: ${r.w4.spacing.sm} ${r.w4.spacing.lg} 0;
  border-bottom: 1px solid ${r.w4.colors.border};
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  flex-shrink: 0;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: ${r.w4.breakpoints.md}) {
    padding-left: ${r.w4.spacing.md};
    padding-right: ${r.w4.spacing.md};
  }
`,B=n().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?M:"transparent"};
  padding: ${r.w4.spacing.sm} ${r.w4.spacing.md};
  font-size: 12px;
  font-weight: 600;
  font-family: ${r.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({active:e})=>e?r.w4.colors.mainText:r.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 140ms ease, border-color 140ms ease;
  margin-bottom: -1px;
  flex-shrink: 0;
  white-space: nowrap;
  min-height: 44px;
  &:hover { color: ${r.w4.colors.mainText}; }

  @media (max-width: ${r.w4.breakpoints.md}) {
    padding: ${r.w4.spacing.sm} 10px;
    letter-spacing: 0.12em;
    font-size: 11px;
  }
`;n().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${r.w4.spacing.md};
  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;let H=n().button`
  position: fixed;
  bottom: max(${r.w4.spacing.md}, env(safe-area-inset-bottom, ${r.w4.spacing.md}));
  right: ${r.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${M};
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
  @media (min-width: ${r.w4.breakpoints.md}) {
    display: none;
  }
`,G=document.getElementById("root");if(!G)throw Error("Root element #root not found");(0,s.createRoot)(G).render((0,i.jsx)(function({topBarRight:e}){let[a]=(0,g.Ym)(),t=(0,o.useMemo)(()=>(0,g.Nx)(a,p.A),[a]),{data:s,loaded:l,save:n}=(0,m.useForma)(),[d,r]=(0,o.useState)("16:8"),[M,E]=(0,o.useState)(!1),[G,K]=(0,o.useState)(void 0),[N,Q]=(0,o.useState)(null),[U,q]=(0,o.useState)("today"),J=(0,o.useCallback)((e,a)=>{K(e),Q(a??null),E(!0)},[]),V=(0,o.useCallback)(()=>{E(!1),K(void 0),Q(null)},[]),X=s??{sessions:[],meals:[],weights:[],walks:[],templates:m.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},Z=(0,o.useCallback)(async(e,a)=>{let t={...X,sessions:[...X.sessions,{id:(0,w.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[X,n]),ee=(0,o.useCallback)(async e=>{let a={...X,sessions:X.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[X,n]),ea=(0,o.useCallback)(async()=>{let e=X.sessions.find(e=>void 0===e.endedAt);e&&await ee(e)},[X,ee]),et=(0,o.useCallback)(e=>{J(void 0,{kind:"fast",entry:e})},[J]),ei=(0,o.useCallback)(async(e,a,t,i)=>{let s={...X,sessions:[...X.sessions,{id:(0,w.z)(),startedAt:t,endedAt:i,targetHours:a,protocol:e}]};await n(s)},[X,n]),es=(0,o.useCallback)(async(e,a,t,i,s)=>{let o={...X,sessions:X.sessions.map(o=>o.id===e?{...o,protocol:a,targetHours:t,startedAt:i,endedAt:s}:o)};await n(o)},[X,n]),eo=(0,o.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...X,meals:[...X.meals,{id:(0,w.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[X,n]),el=(0,o.useCallback)(async(e,a,t,i,s,o)=>{let l={...X,meals:X.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[X,n]),en=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=X.weights.filter(e=>e.date!==a),i={...X,weights:[...t,{date:a,kg:e}]};await n(i)},[X,n]),ed=(0,o.useCallback)(async(e,a)=>{let t={...X,weights:X.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[X,n]),er=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...X,walks:[...X.walks,{id:(0,w.z)(),date:a,minutes:e}]};await n(t)},[X,n]),ec=(0,o.useCallback)(async(e,a,t)=>{let i={...X,walks:X.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[X,n]),eg=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...X,meals:[...X.meals,{id:(0,w.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[X,n]),em=(0,o.useCallback)(async e=>{let a={...X,meals:X.meals.filter(a=>a.id!==e)};await n(a)},[X,n]),ew=(0,o.useCallback)(async e=>{let a={...X,weights:X.weights.filter(a=>a.date!==e)};await n(a)},[X,n]),ep=(0,o.useCallback)(async e=>{let a={...X,walks:X.walks.filter(a=>a.date!==e)};await n(a)},[X,n]),eh=(0,o.useCallback)(async e=>{let a={...X,sessions:X.sessions.filter(a=>a.id!==e)};await n(a)},[X,n]),ef=(0,o.useCallback)(()=>J("meal"),[J]),ex=(0,o.useCallback)(()=>J("walk"),[J]),eu=(0,o.useCallback)(()=>J("weight"),[J]),eb=(0,o.useCallback)(e=>{let a=X.meals.find(a=>a.id===e);a&&J("meal",{kind:"meal",entry:a})},[X.meals,J]),ek=(0,o.useCallback)(e=>{let a=X.weights.find(a=>a.date===e);a&&J("weight",{kind:"weight",entry:a})},[X.weights,J]),ev=(0,o.useCallback)(async e=>{switch(e.kind){case"fast":await Z(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await eo(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await en(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await er(e.walkMinutes)}},[Z,eo,en,er]),ey=(0,m.streakDays)(X.sessions,X.goal.targetHours),ej=(0,m.avgFastDuration)(X.sessions,30),e$=X.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(c.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)(T,{children:[(0,i.jsxs)(Y,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(B,{role:"tab","aria-selected":"today"===U,active:"today"===U,onClick:()=>q("today"),children:t("forma.tab.today")}),(0,i.jsx)(B,{role:"tab","aria-selected":"fasting"===U,active:"fasting"===U,onClick:()=>q("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(B,{role:"tab","aria-selected":"weight"===U,active:"weight"===U,onClick:()=>q("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(B,{role:"tab","aria-selected":"activities"===U,active:"activities"===U,onClick:()=>q("activities"),children:t("forma.tab.activities")}),(0,i.jsx)(B,{role:"tab","aria-selected":"analytics"===U,active:"analytics"===U,onClick:()=>q("analytics"),children:t("forma.tab.analytics")}),(0,i.jsx)(B,{role:"tab","aria-selected":"settings"===U,active:"settings"===U,onClick:()=>q("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(W,{children:["fasting"===U&&(0,i.jsx)(f.B,{t:t,active:d,onChange:r}),(0,i.jsx)(L,{children:(0,i.jsxs)(A,{children:["today"===U&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.F,{t:t,onParsed:e=>void ev(e)}),(0,i.jsx)(D.C,{t:t,cards:[{id:"mini-fast",defaultSize:"sm",render:()=>(0,i.jsx)(j.g,{data:X,t:t,onClick:()=>q("fasting")})},{id:"mini-weight",defaultSize:"sm",render:()=>(0,i.jsx)($.S,{data:X,t:t,onClick:()=>q("weight")})},{id:"today",defaultSize:"lg",render:()=>(0,i.jsx)(v._,{data:X,t:t,onLogMeal:ef,onLogWalk:ex,onLogWeight:eu,onDeleteMeal:e=>void em(e),onEditMeal:eb})},{id:"ask",defaultSize:"lg",render:()=>(0,i.jsx)(y.j,{data:X,t:t,locale:a})},{id:"week",defaultSize:"lg",render:()=>(0,i.jsx)(b.v,{data:X,t:t,locale:a,onTapTemplate:e=>void eg(e)})},{id:"stats",defaultSize:"md",render:()=>(0,i.jsxs)(P,{children:[(0,i.jsxs)(R,{children:[(0,i.jsx)(O,{children:ey}),(0,i.jsx)(_,{children:t("forma.streak",{n:ey})})]}),(0,i.jsxs)(R,{children:[(0,i.jsx)(O,{children:ej>0?ej.toFixed(1):"—"}),(0,i.jsx)(_,{children:t("forma.hero.avgDuration")})]}),e$&&(0,i.jsxs)(R,{children:[(0,i.jsx)(O,{children:e$.kg.toFixed(1)}),(0,i.jsx)(_,{children:t("forma.weight.label")})]})]})}]})]}),"fasting"===U&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.P,{t:t,active:d,onChange:r}),(0,i.jsx)(I,{children:(0,i.jsx)(h.k,{data:X,t:t,onStart:()=>{let e="16:8"===d?16:"18:6"===d?18:"20:4"===d?20:X.goal.targetHours;Z(d,e)},onStop:e=>void ee(e),onEditStart:e=>et(e)})}),(0,i.jsx)(b.v,{data:X,t:t,locale:a,onTapTemplate:e=>void eg(e)})]}),"weight"===U&&(0,i.jsx)(C.m,{data:X,t:t,onLogWeight:eu,onDeleteWeight:e=>void ew(e),onEditWeight:ek}),"activities"===U&&(0,i.jsx)(z.N,{data:X,t:t,locale:a,onEditFast:e=>et(e),onEditMeal:e=>eb(e.id),onEditWeight:e=>ek(e.date),onDeleteFast:e=>void eh(e),onDeleteMeal:e=>void em(e),onDeleteWeight:e=>void ew(e),onDeleteWalk:e=>void ep(e)}),"analytics"===U&&(0,i.jsx)(F.Q,{data:X,t:t,locale:a}),"settings"===U&&(0,i.jsx)(S.f,{data:X,t:t,onSave:n})]})})]}),(0,i.jsx)(H,{"aria-label":t("forma.log"),onClick:()=>J(),children:(0,i.jsx)(c.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(k.Y,{open:M,onClose:V,data:X,t:t,initialMode:G,editing:N,onStartFast:(e,a)=>void Z(e,a),onStopFast:()=>void ea(),onLogPastFast:(e,a,t,i)=>void ei(e,a,t,i),onEditFast:(e,a,t,i,s)=>void es(e,a,t,i,s),onLogMeal:(e,a,t,i,s)=>void eo(e,a,t,i,s),onEditMeal:(e,a,t,i,s,o)=>void el(e,a,t,i,s,o),onLogWeight:(e,a)=>void en(e,a),onEditWeight:(e,a)=>void ed(e,a),onLogWalk:(e,a)=>void er(e,a),onEditWalk:(e,a,t)=>void ec(e,a,t)})]})})},{}))}}]);