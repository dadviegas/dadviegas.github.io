"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["362"],{73935(e,a,t){t.r(a),t.d(a,{default:()=>q});var s=t(65723),i=t(37991),o=t(36859),l=t.n(o),n=t(72799),r=t(6063),d=t(63236),c=t(28170),w=t(5908),m=t(54041),p=t(20948),g=t(25405),b=t(20483),h=t(17102),u=t(13412),x=t(77112),f=t(20429),k=t(71575),v=t(90429),y=t(22684),C=t(33499),j=t(24470),$=t(86704),S=t(69568),D=t(84391),M=t(7434),A=t(78531),F=t(79793),z=t(36971),L=t(359),T=t(82167),W=t(77961),E=t(76890),O=t(21571);let I=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,P=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,_=l().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  touch-action: pan-y;
  display: flex;
  flex-direction: column;
`,K=l().div`
  padding: ${r.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  flex: 1;
  animation: ${I} 0.25s ease both;
  min-width: 0;

  @media (max-width: ${r.w4.breakpoints.md}) {
    padding: ${r.w4.spacing.md};
    padding-bottom: calc(${r.w4.spacing.md} + 56px + env(safe-area-inset-bottom, 0px) + ${r.w4.spacing.md});
    gap: ${r.w4.spacing.md};
  }
`,J=l().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${r.w4.spacing.lg};
  min-width: 0;

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${r.w4.spacing.md};
  }
`,Y=l().div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  min-width: 0;
`,G=l().div`
  display: flex;
  gap: 4px;
  padding: ${r.w4.spacing.sm} ${r.w4.spacing.lg} 0;
  border-bottom: 1px solid ${r.w4.colors.border};
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  flex-shrink: 0;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: ${r.w4.breakpoints.md}) {
    padding-left: ${r.w4.spacing.md};
    padding-right: ${r.w4.spacing.md};
  }
`,H=l().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?O.Js:"transparent"};
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
`,N=l().div`
  display: flex;
  gap: ${r.w4.spacing.xs};
  flex-wrap: wrap;
`,B=l().button`
  background: ${({active:e})=>e?`${O.Js}14`:"transparent"};
  border: 1px solid ${({active:e})=>e?`${O.Js}60`:r.w4.colors.border};
  border-radius: 99px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 600;
  font-family: ${r.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({active:e})=>e?O.Js:r.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 140ms ease, border-color 140ms ease, background 140ms ease;
  min-height: 28px;
  white-space: nowrap;

  &:hover {
    color: ${r.w4.colors.mainText};
    border-color: ${r.w4.colors.borderStrong??r.w4.colors.mainTextMuted};
  }
`,Q=l().button`
  position: fixed;
  bottom: max(${r.w4.spacing.md}, env(safe-area-inset-bottom, ${r.w4.spacing.md}));
  right: ${r.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${O.Js};
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
`,R=l().div`
  padding: ${r.w4.spacing.md};
`;function q({topBarRight:e}){let[a]=(0,c.Ym)(),t=(0,i.useMemo)(()=>(0,c.Nx)(a,p.A),[a]),{data:o,loaded:l,save:n}=(0,w.useForma)(),[r,O]=(0,i.useState)(!1),[I,U]=(0,i.useState)(void 0),[X,V]=(0,i.useState)(null),[Z,ee]=(0,i.useState)(!1),[ea,et]=(0,i.useState)(!1),[es,ei]=(0,i.useState)("today"),[eo,el]=(0,i.useState)("overview"),en=(0,i.useCallback)((e,a)=>{U(e),V(a??null),O(!0)},[]),er=(0,i.useCallback)(()=>{O(!1),U(void 0),V(null)},[]),ed=o??{...w.EMPTY_FORMA_DATA,templates:w.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},ec=(0,i.useCallback)(async(e,a)=>{let t={...ed,sessions:[...ed.sessions,{id:(0,m.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[ed,n]),ew=(0,i.useCallback)(async e=>{let a={...ed,sessions:ed.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[ed,n]),em=(0,i.useCallback)(async()=>{let e=ed.sessions.find(e=>void 0===e.endedAt);e&&await ew(e)},[ed,ew]),ep=(0,i.useCallback)(e=>{en(void 0,{kind:"fast",entry:e})},[en]),eg=(0,i.useCallback)(async(e,a,t,s)=>{let i={...ed,sessions:[...ed.sessions,{id:(0,m.z)(),startedAt:t,endedAt:s,targetHours:a,protocol:e}]};await n(i)},[ed,n]),eb=(0,i.useCallback)(async(e,a,t,s,i)=>{let o={...ed,sessions:ed.sessions.map(o=>o.id===e?{...o,protocol:a,targetHours:t,startedAt:s,endedAt:i}:o)};await n(o)},[ed,n]),eh=(0,i.useCallback)(async(e,a,t,s,i=new Date().toISOString().slice(0,10))=>{let o={...ed,meals:[...ed.meals,{id:(0,m.z)(),date:i,slot:e,proteinG:a,kcal:t,notes:s||void 0,createdAt:Date.now()}]};await n(o)},[ed,n]),eu=(0,i.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...ed,meals:[...ed.meals,{...e,id:(0,m.z)(),date:a,createdAt:Date.now()}]};await n(t)},[ed,n]),ex=(0,i.useCallback)(async(e,a,t,s,i,o)=>{let l={...ed,meals:ed.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:s,notes:i||void 0,date:o}:l)};await n(l)},[ed,n]),ef=(0,i.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=ed.weights.filter(e=>e.date!==a),s={...ed,weights:[...t,{date:a,kg:e}]};await n(s)},[ed,n]),ek=(0,i.useCallback)(async(e,a)=>{let t={...ed,weights:ed.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[ed,n]),ev=(0,i.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...ed,walks:[...ed.walks,{id:(0,m.z)(),date:a,minutes:e}]};await n(t)},[ed,n]),ey=(0,i.useCallback)(async(e,a,t)=>{let s={...ed,walks:ed.walks.map(s=>s.id===e?{...s,minutes:a,date:t}:s)};await n(s)},[ed,n]),eC=(0,i.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={id:(0,m.z)(),date:a,ml:e,createdAt:Date.now()},s={...ed,water:[...ed.water??[],t]};await n(s)},[ed,n]),ej=(0,i.useCallback)(async(e,a,t)=>{let s={...ed,water:(ed.water??[]).map(s=>s.id===e?{...s,ml:a,date:t}:s)};await n(s)},[ed,n]),e$=(0,i.useCallback)(async(e,a,t=new Date().toISOString().slice(0,10))=>{let s={...ed,measurements:[...ed.measurements??[],{id:(0,m.z)(),date:t,kind:e,cm:a,createdAt:Date.now()}]};await n(s)},[ed,n]),eS=(0,i.useCallback)(async e=>{let a={id:(0,m.z)(),...e,createdAt:Date.now()},t={...ed,sleep:[...ed.sleep??[],a]};await n(t)},[ed,n]),eD=(0,i.useCallback)(async e=>{let a={...ed,measurements:(ed.measurements??[]).filter(a=>a.id!==e)};await n(a)},[ed,n]),eM=(0,i.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...ed,meals:[...ed.meals,{id:(0,m.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[ed,n]),eA=(0,i.useCallback)(async(e,a)=>{let t=new Date().toISOString().slice(0,10),s={...ed,meals:[...ed.meals,{id:(0,m.z)(),date:t,slot:e.slot,proteinG:e.proteinG,kcal:e.kcal,notes:`🥤 ${a}`,createdAt:Date.now()}]};await n(s)},[ed,n]),eF=(0,i.useCallback)(async e=>{let a={...ed,meals:ed.meals.filter(a=>a.id!==e)};await n(a)},[ed,n]),ez=(0,i.useCallback)(async e=>{let a={...ed,weights:ed.weights.filter(a=>a.date!==e)};await n(a)},[ed,n]),eL=(0,i.useCallback)(async e=>{let a={...ed,walks:ed.walks.filter(a=>a.date!==e)};await n(a)},[ed,n]),eT=(0,i.useCallback)(async e=>{let a={...ed,sessions:ed.sessions.filter(a=>a.id!==e)};await n(a)},[ed,n]),eW=(0,i.useCallback)(()=>en("meal"),[en]),eE=(0,i.useCallback)(()=>en("walk"),[en]),eO=(0,i.useCallback)(()=>en("weight"),[en]),eI=(0,i.useCallback)(e=>{let a=ed.meals.find(a=>a.id===e);a&&en("meal",{kind:"meal",entry:a})},[ed.meals,en]),eP=(0,i.useCallback)(e=>{let a=ed.weights.find(a=>a.date===e);a&&en("weight",{kind:"weight",entry:a})},[ed.weights,en]),e_=(0,i.useCallback)(async e=>{switch(e.kind){case"fast":await ec(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await eh(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await ef(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await ev(e.walkMinutes);break;case"water":void 0!==e.waterMl&&await eC(e.waterMl);break;case"measurement":void 0!==e.measurementKind&&void 0!==e.measurementCm&&await e$(e.measurementKind,e.measurementCm);break;case"sleep":void 0!==e.sleepHours&&await eS({date:new Date().toISOString().slice(0,10),hoursSlept:e.sleepHours})}},[ec,eh,ef,ev,eC,e$,eS]),eK=(0,s.jsx)(d.K0,{title:t("forma.settings.cog.label"),onClick:()=>et(!0),children:(0,s.jsx)(d.In,{name:"settings",size:16})});return(0,s.jsx)(d.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:(0,s.jsxs)(s.Fragment,{children:[eK,e]}),children:(0,s.jsxs)(P,{children:[(0,s.jsxs)(G,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,s.jsx)(H,{role:"tab","aria-selected":"today"===es,active:"today"===es,onClick:()=>ei("today"),children:t("forma.tab.today")}),(0,s.jsx)(H,{role:"tab","aria-selected":"trends"===es,active:"trends"===es,onClick:()=>ei("trends"),children:t("forma.tab.trends")}),(0,s.jsx)(H,{role:"tab","aria-selected":"coach"===es,active:"coach"===es,onClick:()=>ei("coach"),children:t("forma.tab.coach")})]}),(0,s.jsx)(_,{children:(0,s.jsxs)(K,{children:["today"===es&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(M.c,{data:ed,t:t}),(0,s.jsxs)(J,{children:[(0,s.jsx)(A.F,{data:ed,t:t,onClick:()=>en("startFast")}),(0,s.jsx)(F.J,{data:ed,t:t,onClick:()=>en("weight")})]}),(0,s.jsx)(z.z,{data:ed,t:t,onOpenSheet:en}),(0,s.jsx)(L.e,{t:t,onLogShake:(e,a)=>void eA(e,a)}),(0,s.jsx)(g.F,{t:t,onParsed:e=>void e_(e)}),(0,s.jsx)(u._,{data:ed,t:t,onLogMeal:eW,onLogWalk:eE,onLogWeight:eO,onLogWater:e=>void eC(e),onDeleteMeal:e=>void eF(e),onEditMeal:eI,onTapTemplate:e=>void eM(e)}),(0,s.jsx)(b.v,{data:ed,t:t,locale:a,onTapTemplate:e=>void eM(e)}),(0,s.jsx)(E.k,{data:ed,t:t,onLogSleep:e=>eS(e)})]}),"trends"===es&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(N,{role:"tablist","aria-label":t("forma.trends.sub.aria"),children:[(0,s.jsx)(B,{role:"tab","aria-selected":"overview"===eo,active:"overview"===eo,onClick:()=>el("overview"),children:t("forma.trends.sub.overview")}),(0,s.jsx)(B,{role:"tab","aria-selected":"weight"===eo,active:"weight"===eo,onClick:()=>el("weight"),children:t("forma.trends.sub.weight")}),(0,s.jsx)(B,{role:"tab","aria-selected":"activities"===eo,active:"activities"===eo,onClick:()=>el("activities"),children:t("forma.trends.sub.activities")}),(0,s.jsx)(B,{role:"tab","aria-selected":"body"===eo,active:"body"===eo,onClick:()=>el("body"),children:t("forma.trends.sub.body")})]}),"overview"===eo&&(0,s.jsx)(k.Q,{data:ed,t:t,locale:a}),"weight"===eo&&(0,s.jsx)(x.m,{data:ed,t:t,onLogWeight:eO,onDeleteWeight:e=>void ez(e),onEditWeight:eP}),"activities"===eo&&(0,s.jsx)(v.N,{data:ed,t:t,locale:a,onEditFast:e=>ep(e),onEditMeal:e=>eI(e.id),onDuplicateMeal:e=>void eu(e),onEditWeight:e=>eP(e.date),onDeleteFast:e=>void eT(e),onDeleteMeal:e=>void eF(e),onDeleteWeight:e=>void ez(e),onDeleteWalk:e=>void eL(e)}),"body"===eo&&(0,s.jsx)(W.P,{data:ed,t:t,onAddMeasurement:e$,onDeleteMeasurement:eD})]}),"coach"===es&&(0,s.jsxs)(Y,{children:[(0,s.jsx)(y.q,{t:t,onOpenCheckIn:()=>ee(!0),onOpenSettings:()=>et(!0)}),(0,s.jsx)(j.s,{t:t}),(0,s.jsx)($.g,{t:t}),(0,s.jsx)(D.v,{data:ed,t:t,locale:a}),(0,s.jsx)(S.c,{t:t,locale:a})]})]})}),(0,s.jsx)(Q,{"aria-label":t("forma.log"),onClick:()=>en(),children:(0,s.jsx)(d.In,{name:"plus",size:24,color:"#fff"})}),(0,s.jsx)(h.Y,{open:r,onClose:er,data:ed,t:t,initialMode:I,editing:X,onStartFast:(e,a)=>void ec(e,a),onStopFast:()=>void em(),onLogPastFast:(e,a,t,s)=>void eg(e,a,t,s),onEditFast:(e,a,t,s,i)=>void eb(e,a,t,s,i),onLogMeal:(e,a,t,s,i)=>void eh(e,a,t,s,i),onEditMeal:(e,a,t,s,i,o)=>void ex(e,a,t,s,i,o),onLogWeight:(e,a)=>void ef(e,a),onEditWeight:(e,a)=>void ek(e,a),onLogWalk:(e,a)=>void ev(e,a),onEditWalk:(e,a,t)=>void ey(e,a,t),onLogWater:(e,a)=>void eC(e,a),onEditWater:(e,a,t)=>void ej(e,a,t)}),(0,s.jsx)(C.N,{open:Z,onClose:()=>ee(!1),t:t}),(0,s.jsx)(T.X,{open:ea,onClose:()=>et(!1),ariaLabel:t("forma.settings.cog.label"),maxWidth:560,children:(0,s.jsx)(R,{children:(0,s.jsx)(f.f,{data:ed,t:t,locale:a,onSave:n})})})]})})}},58085(e,a,t){t.r(a),t.d(a,{default:()=>s});let s={id:"forma",port:3034,labelKey:"apps.forma.label",descriptionKey:"apps.forma.description",hash:"#/forma",hashAliases:[],icon:"heart",color:"#7fb77e",enabled:!0,category:"Tools",needsAuth:!1,suite:"Life Dashboard"}}}]);