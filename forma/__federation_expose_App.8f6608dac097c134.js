"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["362"],{73935(e,a,t){t.r(a),t.d(a,{default:()=>R});var i=t(65723),s=t(37991),o=t(36859),l=t.n(o),n=t(72799),r=t(6063),d=t(63236),c=t(28170),m=t(77752),w=t(54041),p=t(20948),g=t(25405),b=t(20483),h=t(17102),u=t(13412),x=t(77112),f=t(20429),k=t(71575),v=t(90429),y=t(22684),C=t(33499),j=t(24470),$=t(86704),S=t(69568),D=t(84391),M=t(7434),A=t(78531),F=t(79793),T=t(36971),z=t(359),L=t(82167),W=t(77961),E=t(21571);let O=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,I=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,P=l().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  touch-action: pan-y;
  display: flex;
  flex-direction: column;
`,_=l().div`
  padding: ${r.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  flex: 1;
  animation: ${O} 0.25s ease both;
  min-width: 0;

  @media (max-width: ${r.w4.breakpoints.md}) {
    padding: ${r.w4.spacing.md};
    padding-bottom: calc(${r.w4.spacing.md} + 56px + env(safe-area-inset-bottom, 0px) + ${r.w4.spacing.md});
    gap: ${r.w4.spacing.md};
  }
`,K=l().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${r.w4.spacing.lg};
  min-width: 0;

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${r.w4.spacing.md};
  }
`,J=l().div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  min-width: 0;
`,Y=l().div`
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
`,G=l().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?E.Js:"transparent"};
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
  background: ${({active:e})=>e?`${E.Js}14`:"transparent"};
  border: 1px solid ${({active:e})=>e?`${E.Js}60`:r.w4.colors.border};
  border-radius: 99px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 600;
  font-family: ${r.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({active:e})=>e?E.Js:r.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 140ms ease, border-color 140ms ease, background 140ms ease;
  min-height: 28px;
  white-space: nowrap;

  &:hover {
    color: ${r.w4.colors.mainText};
    border-color: ${r.w4.colors.borderStrong??r.w4.colors.mainTextMuted};
  }
`,H=l().button`
  position: fixed;
  bottom: max(${r.w4.spacing.md}, env(safe-area-inset-bottom, ${r.w4.spacing.md}));
  right: ${r.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${E.Js};
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
`,Q=l().div`
  padding: ${r.w4.spacing.md};
`;function R({topBarRight:e}){let[a]=(0,c.Ym)(),t=(0,s.useMemo)(()=>(0,c.Nx)(a,p.A),[a]),{data:o,loaded:l,save:n}=(0,m.useForma)(),[r,E]=(0,s.useState)(!1),[O,q]=(0,s.useState)(void 0),[U,X]=(0,s.useState)(null),[V,Z]=(0,s.useState)(!1),[ee,ea]=(0,s.useState)(!1),[et,ei]=(0,s.useState)("today"),[es,eo]=(0,s.useState)("overview"),el=(0,s.useCallback)((e,a)=>{q(e),X(a??null),E(!0)},[]),en=(0,s.useCallback)(()=>{E(!1),q(void 0),X(null)},[]),er=o??{...m.EMPTY_FORMA_DATA,templates:m.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},ed=(0,s.useCallback)(async(e,a)=>{let t={...er,sessions:[...er.sessions,{id:(0,w.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[er,n]),ec=(0,s.useCallback)(async e=>{let a={...er,sessions:er.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[er,n]),em=(0,s.useCallback)(async()=>{let e=er.sessions.find(e=>void 0===e.endedAt);e&&await ec(e)},[er,ec]),ew=(0,s.useCallback)(e=>{el(void 0,{kind:"fast",entry:e})},[el]),ep=(0,s.useCallback)(async(e,a,t,i)=>{let s={...er,sessions:[...er.sessions,{id:(0,w.z)(),startedAt:t,endedAt:i,targetHours:a,protocol:e}]};await n(s)},[er,n]),eg=(0,s.useCallback)(async(e,a,t,i,s)=>{let o={...er,sessions:er.sessions.map(o=>o.id===e?{...o,protocol:a,targetHours:t,startedAt:i,endedAt:s}:o)};await n(o)},[er,n]),eb=(0,s.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...er,meals:[...er.meals,{id:(0,w.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[er,n]),eh=(0,s.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...er,meals:[...er.meals,{...e,id:(0,w.z)(),date:a,createdAt:Date.now()}]};await n(t)},[er,n]),eu=(0,s.useCallback)(async(e,a,t,i,s,o)=>{let l={...er,meals:er.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[er,n]),ex=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=er.weights.filter(e=>e.date!==a),i={...er,weights:[...t,{date:a,kg:e}]};await n(i)},[er,n]),ef=(0,s.useCallback)(async(e,a)=>{let t={...er,weights:er.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[er,n]),ek=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...er,walks:[...er.walks,{id:(0,w.z)(),date:a,minutes:e}]};await n(t)},[er,n]),ev=(0,s.useCallback)(async(e,a,t)=>{let i={...er,walks:er.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[er,n]),ey=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={id:(0,w.z)(),date:a,ml:e,createdAt:Date.now()},i={...er,water:[...er.water??[],t]};await n(i)},[er,n]),eC=(0,s.useCallback)(async(e,a,t)=>{let i={...er,water:(er.water??[]).map(i=>i.id===e?{...i,ml:a,date:t}:i)};await n(i)},[er,n]),ej=(0,s.useCallback)(async(e,a,t=new Date().toISOString().slice(0,10))=>{let i={...er,measurements:[...er.measurements??[],{id:(0,w.z)(),date:t,kind:e,cm:a,createdAt:Date.now()}]};await n(i)},[er,n]),e$=(0,s.useCallback)(async e=>{let a={...er,measurements:(er.measurements??[]).filter(a=>a.id!==e)};await n(a)},[er,n]),eS=(0,s.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...er,meals:[...er.meals,{id:(0,w.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[er,n]),eD=(0,s.useCallback)(async(e,a)=>{let t=new Date().toISOString().slice(0,10),i={...er,meals:[...er.meals,{id:(0,w.z)(),date:t,slot:e.slot,proteinG:e.proteinG,kcal:e.kcal,notes:`🥤 ${a}`,createdAt:Date.now()}]};await n(i)},[er,n]),eM=(0,s.useCallback)(async e=>{let a={...er,meals:er.meals.filter(a=>a.id!==e)};await n(a)},[er,n]),eA=(0,s.useCallback)(async e=>{let a={...er,weights:er.weights.filter(a=>a.date!==e)};await n(a)},[er,n]),eF=(0,s.useCallback)(async e=>{let a={...er,walks:er.walks.filter(a=>a.date!==e)};await n(a)},[er,n]),eT=(0,s.useCallback)(async e=>{let a={...er,sessions:er.sessions.filter(a=>a.id!==e)};await n(a)},[er,n]),ez=(0,s.useCallback)(()=>el("meal"),[el]),eL=(0,s.useCallback)(()=>el("walk"),[el]),eW=(0,s.useCallback)(()=>el("weight"),[el]),eE=(0,s.useCallback)(e=>{let a=er.meals.find(a=>a.id===e);a&&el("meal",{kind:"meal",entry:a})},[er.meals,el]),eO=(0,s.useCallback)(e=>{let a=er.weights.find(a=>a.date===e);a&&el("weight",{kind:"weight",entry:a})},[er.weights,el]),eI=(0,s.useCallback)(async e=>{switch(e.kind){case"fast":await ed(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await eb(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await ex(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await ek(e.walkMinutes);break;case"water":void 0!==e.waterMl&&await ey(e.waterMl);break;case"measurement":void 0!==e.measurementKind&&void 0!==e.measurementCm&&await ej(e.measurementKind,e.measurementCm)}},[ed,eb,ex,ek,ey,ej]),eP=(0,i.jsx)(d.K0,{title:t("forma.settings.cog.label"),onClick:()=>ea(!0),children:(0,i.jsx)(d.In,{name:"settings",size:16})});return(0,i.jsx)(d.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:(0,i.jsxs)(i.Fragment,{children:[eP,e]}),children:(0,i.jsxs)(I,{children:[(0,i.jsxs)(Y,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(G,{role:"tab","aria-selected":"today"===et,active:"today"===et,onClick:()=>ei("today"),children:t("forma.tab.today")}),(0,i.jsx)(G,{role:"tab","aria-selected":"trends"===et,active:"trends"===et,onClick:()=>ei("trends"),children:t("forma.tab.trends")}),(0,i.jsx)(G,{role:"tab","aria-selected":"coach"===et,active:"coach"===et,onClick:()=>ei("coach"),children:t("forma.tab.coach")})]}),(0,i.jsx)(P,{children:(0,i.jsxs)(_,{children:["today"===et&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(M.c,{data:er,t:t}),(0,i.jsxs)(K,{children:[(0,i.jsx)(A.F,{data:er,t:t,onClick:()=>el("startFast")}),(0,i.jsx)(F.J,{data:er,t:t,onClick:()=>el("weight")})]}),(0,i.jsx)(T.z,{data:er,t:t,onOpenSheet:el}),(0,i.jsx)(z.e,{t:t,onLogShake:(e,a)=>void eD(e,a)}),(0,i.jsx)(g.F,{t:t,onParsed:e=>void eI(e)}),(0,i.jsx)(u._,{data:er,t:t,onLogMeal:ez,onLogWalk:eL,onLogWeight:eW,onLogWater:e=>void ey(e),onDeleteMeal:e=>void eM(e),onEditMeal:eE,onTapTemplate:e=>void eS(e)}),(0,i.jsx)(b.v,{data:er,t:t,locale:a,onTapTemplate:e=>void eS(e)})]}),"trends"===et&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(N,{role:"tablist","aria-label":t("forma.trends.sub.aria"),children:[(0,i.jsx)(B,{role:"tab","aria-selected":"overview"===es,active:"overview"===es,onClick:()=>eo("overview"),children:t("forma.trends.sub.overview")}),(0,i.jsx)(B,{role:"tab","aria-selected":"weight"===es,active:"weight"===es,onClick:()=>eo("weight"),children:t("forma.trends.sub.weight")}),(0,i.jsx)(B,{role:"tab","aria-selected":"activities"===es,active:"activities"===es,onClick:()=>eo("activities"),children:t("forma.trends.sub.activities")}),(0,i.jsx)(B,{role:"tab","aria-selected":"body"===es,active:"body"===es,onClick:()=>eo("body"),children:t("forma.trends.sub.body")})]}),"overview"===es&&(0,i.jsx)(k.Q,{data:er,t:t,locale:a}),"weight"===es&&(0,i.jsx)(x.m,{data:er,t:t,onLogWeight:eW,onDeleteWeight:e=>void eA(e),onEditWeight:eO}),"activities"===es&&(0,i.jsx)(v.N,{data:er,t:t,locale:a,onEditFast:e=>ew(e),onEditMeal:e=>eE(e.id),onDuplicateMeal:e=>void eh(e),onEditWeight:e=>eO(e.date),onDeleteFast:e=>void eT(e),onDeleteMeal:e=>void eM(e),onDeleteWeight:e=>void eA(e),onDeleteWalk:e=>void eF(e)}),"body"===es&&(0,i.jsx)(W.P,{data:er,t:t,onAddMeasurement:ej,onDeleteMeasurement:e$})]}),"coach"===et&&(0,i.jsxs)(J,{children:[(0,i.jsx)(y.q,{t:t,onOpenCheckIn:()=>Z(!0),onOpenSettings:()=>ea(!0)}),(0,i.jsx)(j.s,{t:t}),(0,i.jsx)($.g,{t:t}),(0,i.jsx)(D.v,{data:er,t:t,locale:a}),(0,i.jsx)(S.c,{t:t,locale:a})]})]})}),(0,i.jsx)(H,{"aria-label":t("forma.log"),onClick:()=>el(),children:(0,i.jsx)(d.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(h.Y,{open:r,onClose:en,data:er,t:t,initialMode:O,editing:U,onStartFast:(e,a)=>void ed(e,a),onStopFast:()=>void em(),onLogPastFast:(e,a,t,i)=>void ep(e,a,t,i),onEditFast:(e,a,t,i,s)=>void eg(e,a,t,i,s),onLogMeal:(e,a,t,i,s)=>void eb(e,a,t,i,s),onEditMeal:(e,a,t,i,s,o)=>void eu(e,a,t,i,s,o),onLogWeight:(e,a)=>void ex(e,a),onEditWeight:(e,a)=>void ef(e,a),onLogWalk:(e,a)=>void ek(e,a),onEditWalk:(e,a,t)=>void ev(e,a,t),onLogWater:(e,a)=>void ey(e,a),onEditWater:(e,a,t)=>void eC(e,a,t)}),(0,i.jsx)(C.N,{open:V,onClose:()=>Z(!1),t:t}),(0,i.jsx)(L.X,{open:ee,onClose:()=>ea(!1),ariaLabel:t("forma.settings.cog.label"),maxWidth:560,children:(0,i.jsx)(Q,{children:(0,i.jsx)(f.f,{data:er,t:t,locale:a,onSave:n})})})]})})}},58085(e,a,t){t.r(a),t.d(a,{default:()=>i});let i={id:"forma",port:3034,labelKey:"apps.forma.label",descriptionKey:"apps.forma.description",hash:"#/forma",hashAliases:[],icon:"heart",color:"#7fb77e",enabled:!0,category:"Tools",needsAuth:!1,suite:"Life Dashboard"}}}]);