"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["84"],{58997(e,a,t){var s=t(62727);a.createRoot=s.createRoot,s.hydrateRoot},13611(e,a,t){var s=t(65723),i=t(58997),o=t(37991),l=t(36859),n=t.n(l),r=t(72799),d=t(6063),c=t(63236),m=t(28170),w=t(23029),p=t(54041),g=t(20948),b=t(25405),h=t(20483),u=t(17102),x=t(13412),f=t(77112),k=t(20429),v=t(71575),y=t(90429),C=t(22684),j=t(33499),$=t(24470),S=t(86704),D=t(69568),M=t(84391),A=t(7434),F=t(78531),z=t(79793),E=t(36971),L=t(359),T=t(82167),W=t(77961),I=t(76890),O=t(21571);let P=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,_=n().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,K=n().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  touch-action: pan-y;
  display: flex;
  flex-direction: column;
`,R=n().div`
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  flex: 1;
  animation: ${P} 0.25s ease both;
  min-width: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding: ${d.w4.spacing.md};
    padding-bottom: calc(${d.w4.spacing.md} + 56px + env(safe-area-inset-bottom, 0px) + ${d.w4.spacing.md});
    gap: ${d.w4.spacing.md};
  }
`,J=n().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${d.w4.spacing.lg};
  min-width: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${d.w4.spacing.md};
  }
`,Y=n().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  min-width: 0;
`,G=n().div`
  display: flex;
  gap: 4px;
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.lg} 0;
  border-bottom: 1px solid ${d.w4.colors.border};
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  flex-shrink: 0;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding-left: ${d.w4.spacing.md};
    padding-right: ${d.w4.spacing.md};
  }
`,H=n().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?O.Js:"transparent"};
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
  flex-shrink: 0;
  white-space: nowrap;
  min-height: 44px;
  &:hover { color: ${d.w4.colors.mainText}; }

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding: ${d.w4.spacing.sm} 10px;
    letter-spacing: 0.12em;
    font-size: 11px;
  }
`,B=n().div`
  display: flex;
  gap: ${d.w4.spacing.xs};
  flex-wrap: wrap;
`,N=n().button`
  background: ${({active:e})=>e?`${O.Js}14`:"transparent"};
  border: 1px solid ${({active:e})=>e?`${O.Js}60`:d.w4.colors.border};
  border-radius: 99px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({active:e})=>e?O.Js:d.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 140ms ease, border-color 140ms ease, background 140ms ease;
  min-height: 28px;
  white-space: nowrap;

  &:hover {
    color: ${d.w4.colors.mainText};
    border-color: ${d.w4.colors.borderStrong??d.w4.colors.mainTextMuted};
  }
`,Q=n().button`
  position: fixed;
  bottom: max(${d.w4.spacing.md}, env(safe-area-inset-bottom, ${d.w4.spacing.md}));
  right: ${d.w4.spacing.md};
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
  @media (min-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,q=n().div`
  padding: ${d.w4.spacing.md};
`,U=document.getElementById("root");if(!U)throw Error("Root element #root not found");(0,i.createRoot)(U).render((0,s.jsx)(function({topBarRight:e}){let[a]=(0,m.Ym)(),t=(0,o.useMemo)(()=>(0,m.Nx)(a,g.A),[a]),{data:i,loaded:l,save:n}=(0,w.useForma)(),[r,d]=(0,o.useState)(!1),[O,P]=(0,o.useState)(void 0),[U,X]=(0,o.useState)(null),[V,Z]=(0,o.useState)(!1),[ee,ea]=(0,o.useState)(!1),[et,es]=(0,o.useState)("today"),[ei,eo]=(0,o.useState)("overview"),el=(0,o.useCallback)((e,a)=>{P(e),X(a??null),d(!0)},[]),en=(0,o.useCallback)(()=>{d(!1),P(void 0),X(null)},[]),er=i??{...w.EMPTY_FORMA_DATA,templates:w.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},ed=(0,o.useCallback)(async(e,a)=>{let t={...er,sessions:[...er.sessions,{id:(0,p.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[er,n]),ec=(0,o.useCallback)(async e=>{let a={...er,sessions:er.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[er,n]),em=(0,o.useCallback)(async()=>{let e=er.sessions.find(e=>void 0===e.endedAt);e&&await ec(e)},[er,ec]),ew=(0,o.useCallback)(e=>{el(void 0,{kind:"fast",entry:e})},[el]),ep=(0,o.useCallback)(async(e,a,t,s)=>{let i={...er,sessions:[...er.sessions,{id:(0,p.z)(),startedAt:t,endedAt:s,targetHours:a,protocol:e}]};await n(i)},[er,n]),eg=(0,o.useCallback)(async(e,a,t,s,i)=>{let o={...er,sessions:er.sessions.map(o=>o.id===e?{...o,protocol:a,targetHours:t,startedAt:s,endedAt:i}:o)};await n(o)},[er,n]),eb=(0,o.useCallback)(async(e,a,t,s,i=new Date().toISOString().slice(0,10))=>{let o={...er,meals:[...er.meals,{id:(0,p.z)(),date:i,slot:e,proteinG:a,kcal:t,notes:s||void 0,createdAt:Date.now()}]};await n(o)},[er,n]),eh=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...er,meals:[...er.meals,{...e,id:(0,p.z)(),date:a,createdAt:Date.now()}]};await n(t)},[er,n]),eu=(0,o.useCallback)(async(e,a,t,s,i,o)=>{let l={...er,meals:er.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:s,notes:i||void 0,date:o}:l)};await n(l)},[er,n]),ex=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=er.weights.filter(e=>e.date!==a),s={...er,weights:[...t,{date:a,kg:e}]};await n(s)},[er,n]),ef=(0,o.useCallback)(async(e,a)=>{let t={...er,weights:er.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[er,n]),ek=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...er,walks:[...er.walks,{id:(0,p.z)(),date:a,minutes:e}]};await n(t)},[er,n]),ev=(0,o.useCallback)(async(e,a,t)=>{let s={...er,walks:er.walks.map(s=>s.id===e?{...s,minutes:a,date:t}:s)};await n(s)},[er,n]),ey=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={id:(0,p.z)(),date:a,ml:e,createdAt:Date.now()},s={...er,water:[...er.water??[],t]};await n(s)},[er,n]),eC=(0,o.useCallback)(async(e,a,t)=>{let s={...er,water:(er.water??[]).map(s=>s.id===e?{...s,ml:a,date:t}:s)};await n(s)},[er,n]),ej=(0,o.useCallback)(async(e,a,t=new Date().toISOString().slice(0,10))=>{let s={...er,measurements:[...er.measurements??[],{id:(0,p.z)(),date:t,kind:e,cm:a,createdAt:Date.now()}]};await n(s)},[er,n]),e$=(0,o.useCallback)(async e=>{let a={id:(0,p.z)(),...e,createdAt:Date.now()},t={...er,sleep:[...er.sleep??[],a]};await n(t)},[er,n]),eS=(0,o.useCallback)(async e=>{let a={...er,measurements:(er.measurements??[]).filter(a=>a.id!==e)};await n(a)},[er,n]),eD=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...er,meals:[...er.meals,{id:(0,p.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[er,n]),eM=(0,o.useCallback)(async(e,a)=>{let t=new Date().toISOString().slice(0,10),s={...er,meals:[...er.meals,{id:(0,p.z)(),date:t,slot:e.slot,proteinG:e.proteinG,kcal:e.kcal,notes:`🥤 ${a}`,createdAt:Date.now()}]};await n(s)},[er,n]),eA=(0,o.useCallback)(async e=>{let a={...er,meals:er.meals.filter(a=>a.id!==e)};await n(a)},[er,n]),eF=(0,o.useCallback)(async e=>{let a={...er,weights:er.weights.filter(a=>a.date!==e)};await n(a)},[er,n]),ez=(0,o.useCallback)(async e=>{let a={...er,walks:er.walks.filter(a=>a.date!==e)};await n(a)},[er,n]),eE=(0,o.useCallback)(async e=>{let a={...er,sessions:er.sessions.filter(a=>a.id!==e)};await n(a)},[er,n]),eL=(0,o.useCallback)(()=>el("meal"),[el]),eT=(0,o.useCallback)(()=>el("walk"),[el]),eW=(0,o.useCallback)(()=>el("weight"),[el]),eI=(0,o.useCallback)(e=>{let a=er.meals.find(a=>a.id===e);a&&el("meal",{kind:"meal",entry:a})},[er.meals,el]),eO=(0,o.useCallback)(e=>{let a=er.weights.find(a=>a.date===e);a&&el("weight",{kind:"weight",entry:a})},[er.weights,el]),eP=(0,o.useCallback)(async e=>{switch(e.kind){case"fast":await ed(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await eb(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await ex(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await ek(e.walkMinutes);break;case"water":void 0!==e.waterMl&&await ey(e.waterMl);break;case"measurement":void 0!==e.measurementKind&&void 0!==e.measurementCm&&await ej(e.measurementKind,e.measurementCm);break;case"sleep":void 0!==e.sleepHours&&await e$({date:new Date().toISOString().slice(0,10),hoursSlept:e.sleepHours})}},[ed,eb,ex,ek,ey,ej,e$]),e_=(0,s.jsx)(c.K0,{title:t("forma.settings.cog.label"),onClick:()=>ea(!0),children:(0,s.jsx)(c.In,{name:"settings",size:16})});return(0,s.jsx)(c.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:(0,s.jsxs)(s.Fragment,{children:[e_,e]}),children:(0,s.jsxs)(_,{children:[(0,s.jsxs)(G,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,s.jsx)(H,{role:"tab","aria-selected":"today"===et,active:"today"===et,onClick:()=>es("today"),children:t("forma.tab.today")}),(0,s.jsx)(H,{role:"tab","aria-selected":"trends"===et,active:"trends"===et,onClick:()=>es("trends"),children:t("forma.tab.trends")}),(0,s.jsx)(H,{role:"tab","aria-selected":"coach"===et,active:"coach"===et,onClick:()=>es("coach"),children:t("forma.tab.coach")})]}),(0,s.jsx)(K,{children:(0,s.jsxs)(R,{children:["today"===et&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(A.c,{data:er,t:t}),(0,s.jsxs)(J,{children:[(0,s.jsx)(F.F,{data:er,t:t,onClick:()=>el("startFast")}),(0,s.jsx)(z.J,{data:er,t:t,onClick:()=>el("weight")})]}),(0,s.jsx)(E.z,{data:er,t:t,onOpenSheet:el}),(0,s.jsx)(L.e,{t:t,onLogShake:(e,a)=>void eM(e,a)}),(0,s.jsx)(b.F,{t:t,onParsed:e=>void eP(e)}),(0,s.jsx)(x._,{data:er,t:t,onLogMeal:eL,onLogWalk:eT,onLogWeight:eW,onLogWater:e=>void ey(e),onDeleteMeal:e=>void eA(e),onEditMeal:eI,onTapTemplate:e=>void eD(e)}),(0,s.jsx)(h.v,{data:er,t:t,locale:a,onTapTemplate:e=>void eD(e)}),(0,s.jsx)(I.k,{data:er,t:t,onLogSleep:e=>e$(e)})]}),"trends"===et&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(B,{role:"tablist","aria-label":t("forma.trends.sub.aria"),children:[(0,s.jsx)(N,{role:"tab","aria-selected":"overview"===ei,active:"overview"===ei,onClick:()=>eo("overview"),children:t("forma.trends.sub.overview")}),(0,s.jsx)(N,{role:"tab","aria-selected":"weight"===ei,active:"weight"===ei,onClick:()=>eo("weight"),children:t("forma.trends.sub.weight")}),(0,s.jsx)(N,{role:"tab","aria-selected":"activities"===ei,active:"activities"===ei,onClick:()=>eo("activities"),children:t("forma.trends.sub.activities")}),(0,s.jsx)(N,{role:"tab","aria-selected":"body"===ei,active:"body"===ei,onClick:()=>eo("body"),children:t("forma.trends.sub.body")})]}),"overview"===ei&&(0,s.jsx)(v.Q,{data:er,t:t,locale:a}),"weight"===ei&&(0,s.jsx)(f.m,{data:er,t:t,onLogWeight:eW,onDeleteWeight:e=>void eF(e),onEditWeight:eO}),"activities"===ei&&(0,s.jsx)(y.N,{data:er,t:t,locale:a,onEditFast:e=>ew(e),onEditMeal:e=>eI(e.id),onDuplicateMeal:e=>void eh(e),onEditWeight:e=>eO(e.date),onDeleteFast:e=>void eE(e),onDeleteMeal:e=>void eA(e),onDeleteWeight:e=>void eF(e),onDeleteWalk:e=>void ez(e)}),"body"===ei&&(0,s.jsx)(W.P,{data:er,t:t,onAddMeasurement:ej,onDeleteMeasurement:eS})]}),"coach"===et&&(0,s.jsxs)(Y,{children:[(0,s.jsx)(C.q,{t:t,onOpenCheckIn:()=>Z(!0),onOpenSettings:()=>ea(!0)}),(0,s.jsx)($.s,{t:t}),(0,s.jsx)(S.g,{t:t}),(0,s.jsx)(M.v,{data:er,t:t,locale:a}),(0,s.jsx)(D.c,{t:t,locale:a})]})]})}),(0,s.jsx)(Q,{"aria-label":t("forma.log"),onClick:()=>el(),children:(0,s.jsx)(c.In,{name:"plus",size:24,color:"#fff"})}),(0,s.jsx)(u.Y,{open:r,onClose:en,data:er,t:t,initialMode:O,editing:U,onStartFast:(e,a)=>void ed(e,a),onStopFast:()=>void em(),onLogPastFast:(e,a,t,s)=>void ep(e,a,t,s),onEditFast:(e,a,t,s,i)=>void eg(e,a,t,s,i),onLogMeal:(e,a,t,s,i)=>void eb(e,a,t,s,i),onEditMeal:(e,a,t,s,i,o)=>void eu(e,a,t,s,i,o),onLogWeight:(e,a)=>void ex(e,a),onEditWeight:(e,a)=>void ef(e,a),onLogWalk:(e,a)=>void ek(e,a),onEditWalk:(e,a,t)=>void ev(e,a,t),onLogWater:(e,a)=>void ey(e,a),onEditWater:(e,a,t)=>void eC(e,a,t)}),(0,s.jsx)(j.N,{open:V,onClose:()=>Z(!1),t:t}),(0,s.jsx)(T.X,{open:ee,onClose:()=>ea(!1),ariaLabel:t("forma.settings.cog.label"),maxWidth:560,children:(0,s.jsx)(q,{children:(0,s.jsx)(k.f,{data:er,t:t,locale:a,onSave:n})})})]})})},{}))},58085(e,a,t){t.d(a,{default:()=>s});let s={id:"forma",port:3034,labelKey:"apps.forma.label",descriptionKey:"apps.forma.description",hash:"#/forma",hashAliases:[],icon:"heart",color:"#7fb77e",enabled:!0,category:"Tools",needsAuth:!1,suite:"Life Dashboard"}}}]);