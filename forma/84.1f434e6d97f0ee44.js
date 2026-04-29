"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["84"],{58997(e,a,t){var i=t(62727);a.createRoot=i.createRoot,i.hydrateRoot},13611(e,a,t){var i=t(65723),s=t(58997),o=t(37991),l=t(36859),n=t.n(l),r=t(72799),d=t(6063),c=t(63236),m=t(28170),w=t(77752),p=t(54041),g=t(20948),h=t(25405),b=t(20483),u=t(17102),x=t(13412),f=t(77112),k=t(20429),v=t(71575),y=t(90429),C=t(22684),j=t(33499),$=t(24470),S=t(86704),D=t(69568),M=t(84391),A=t(7434),F=t(78531),E=t(79793),T=t(36971),z=t(359),L=t(82167),W=t(77961),I=t(21571);let O=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,P=n().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,_=n().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  touch-action: pan-y;
  display: flex;
  flex-direction: column;
`,K=n().div`
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  flex: 1;
  animation: ${O} 0.25s ease both;
  min-width: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding: ${d.w4.spacing.md};
    padding-bottom: calc(${d.w4.spacing.md} + 56px + env(safe-area-inset-bottom, 0px) + ${d.w4.spacing.md});
    gap: ${d.w4.spacing.md};
  }
`,R=n().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${d.w4.spacing.lg};
  min-width: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${d.w4.spacing.md};
  }
`,J=n().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  min-width: 0;
`,Y=n().div`
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
`,G=n().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?I.Js:"transparent"};
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
  background: ${({active:e})=>e?`${I.Js}14`:"transparent"};
  border: 1px solid ${({active:e})=>e?`${I.Js}60`:d.w4.colors.border};
  border-radius: 99px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({active:e})=>e?I.Js:d.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 140ms ease, border-color 140ms ease, background 140ms ease;
  min-height: 28px;
  white-space: nowrap;

  &:hover {
    color: ${d.w4.colors.mainText};
    border-color: ${d.w4.colors.borderStrong??d.w4.colors.mainTextMuted};
  }
`,H=n().button`
  position: fixed;
  bottom: max(${d.w4.spacing.md}, env(safe-area-inset-bottom, ${d.w4.spacing.md}));
  right: ${d.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${I.Js};
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
`,Q=n().div`
  padding: ${d.w4.spacing.md};
`,q=document.getElementById("root");if(!q)throw Error("Root element #root not found");(0,s.createRoot)(q).render((0,i.jsx)(function({topBarRight:e}){let[a]=(0,m.Ym)(),t=(0,o.useMemo)(()=>(0,m.Nx)(a,g.A),[a]),{data:s,loaded:l,save:n}=(0,w.useForma)(),[r,d]=(0,o.useState)(!1),[I,O]=(0,o.useState)(void 0),[q,U]=(0,o.useState)(null),[X,V]=(0,o.useState)(!1),[Z,ee]=(0,o.useState)(!1),[ea,et]=(0,o.useState)("today"),[ei,es]=(0,o.useState)("overview"),eo=(0,o.useCallback)((e,a)=>{O(e),U(a??null),d(!0)},[]),el=(0,o.useCallback)(()=>{d(!1),O(void 0),U(null)},[]),en=s??{...w.EMPTY_FORMA_DATA,templates:w.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},er=(0,o.useCallback)(async(e,a)=>{let t={...en,sessions:[...en.sessions,{id:(0,p.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[en,n]),ed=(0,o.useCallback)(async e=>{let a={...en,sessions:en.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[en,n]),ec=(0,o.useCallback)(async()=>{let e=en.sessions.find(e=>void 0===e.endedAt);e&&await ed(e)},[en,ed]),em=(0,o.useCallback)(e=>{eo(void 0,{kind:"fast",entry:e})},[eo]),ew=(0,o.useCallback)(async(e,a,t,i)=>{let s={...en,sessions:[...en.sessions,{id:(0,p.z)(),startedAt:t,endedAt:i,targetHours:a,protocol:e}]};await n(s)},[en,n]),ep=(0,o.useCallback)(async(e,a,t,i,s)=>{let o={...en,sessions:en.sessions.map(o=>o.id===e?{...o,protocol:a,targetHours:t,startedAt:i,endedAt:s}:o)};await n(o)},[en,n]),eg=(0,o.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...en,meals:[...en.meals,{id:(0,p.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[en,n]),eh=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...en,meals:[...en.meals,{...e,id:(0,p.z)(),date:a,createdAt:Date.now()}]};await n(t)},[en,n]),eb=(0,o.useCallback)(async(e,a,t,i,s,o)=>{let l={...en,meals:en.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[en,n]),eu=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=en.weights.filter(e=>e.date!==a),i={...en,weights:[...t,{date:a,kg:e}]};await n(i)},[en,n]),ex=(0,o.useCallback)(async(e,a)=>{let t={...en,weights:en.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[en,n]),ef=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...en,walks:[...en.walks,{id:(0,p.z)(),date:a,minutes:e}]};await n(t)},[en,n]),ek=(0,o.useCallback)(async(e,a,t)=>{let i={...en,walks:en.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[en,n]),ev=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={id:(0,p.z)(),date:a,ml:e,createdAt:Date.now()},i={...en,water:[...en.water??[],t]};await n(i)},[en,n]),ey=(0,o.useCallback)(async(e,a,t)=>{let i={...en,water:(en.water??[]).map(i=>i.id===e?{...i,ml:a,date:t}:i)};await n(i)},[en,n]),eC=(0,o.useCallback)(async(e,a,t=new Date().toISOString().slice(0,10))=>{let i={...en,measurements:[...en.measurements??[],{id:(0,p.z)(),date:t,kind:e,cm:a,createdAt:Date.now()}]};await n(i)},[en,n]),ej=(0,o.useCallback)(async e=>{let a={...en,measurements:(en.measurements??[]).filter(a=>a.id!==e)};await n(a)},[en,n]),e$=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...en,meals:[...en.meals,{id:(0,p.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[en,n]),eS=(0,o.useCallback)(async(e,a)=>{let t=new Date().toISOString().slice(0,10),i={...en,meals:[...en.meals,{id:(0,p.z)(),date:t,slot:e.slot,proteinG:e.proteinG,kcal:e.kcal,notes:`🥤 ${a}`,createdAt:Date.now()}]};await n(i)},[en,n]),eD=(0,o.useCallback)(async e=>{let a={...en,meals:en.meals.filter(a=>a.id!==e)};await n(a)},[en,n]),eM=(0,o.useCallback)(async e=>{let a={...en,weights:en.weights.filter(a=>a.date!==e)};await n(a)},[en,n]),eA=(0,o.useCallback)(async e=>{let a={...en,walks:en.walks.filter(a=>a.date!==e)};await n(a)},[en,n]),eF=(0,o.useCallback)(async e=>{let a={...en,sessions:en.sessions.filter(a=>a.id!==e)};await n(a)},[en,n]),eE=(0,o.useCallback)(()=>eo("meal"),[eo]),eT=(0,o.useCallback)(()=>eo("walk"),[eo]),ez=(0,o.useCallback)(()=>eo("weight"),[eo]),eL=(0,o.useCallback)(e=>{let a=en.meals.find(a=>a.id===e);a&&eo("meal",{kind:"meal",entry:a})},[en.meals,eo]),eW=(0,o.useCallback)(e=>{let a=en.weights.find(a=>a.date===e);a&&eo("weight",{kind:"weight",entry:a})},[en.weights,eo]),eI=(0,o.useCallback)(async e=>{switch(e.kind){case"fast":await er(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await eg(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await eu(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await ef(e.walkMinutes);break;case"water":void 0!==e.waterMl&&await ev(e.waterMl);break;case"measurement":void 0!==e.measurementKind&&void 0!==e.measurementCm&&await eC(e.measurementKind,e.measurementCm)}},[er,eg,eu,ef,ev,eC]),eO=(0,i.jsx)(c.K0,{title:t("forma.settings.cog.label"),onClick:()=>ee(!0),children:(0,i.jsx)(c.In,{name:"settings",size:16})});return(0,i.jsx)(c.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:(0,i.jsxs)(i.Fragment,{children:[eO,e]}),children:(0,i.jsxs)(P,{children:[(0,i.jsxs)(Y,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(G,{role:"tab","aria-selected":"today"===ea,active:"today"===ea,onClick:()=>et("today"),children:t("forma.tab.today")}),(0,i.jsx)(G,{role:"tab","aria-selected":"trends"===ea,active:"trends"===ea,onClick:()=>et("trends"),children:t("forma.tab.trends")}),(0,i.jsx)(G,{role:"tab","aria-selected":"coach"===ea,active:"coach"===ea,onClick:()=>et("coach"),children:t("forma.tab.coach")})]}),(0,i.jsx)(_,{children:(0,i.jsxs)(K,{children:["today"===ea&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(A.c,{data:en,t:t}),(0,i.jsxs)(R,{children:[(0,i.jsx)(F.F,{data:en,t:t,onClick:()=>eo("startFast")}),(0,i.jsx)(E.J,{data:en,t:t,onClick:()=>eo("weight")})]}),(0,i.jsx)(T.z,{data:en,t:t,onOpenSheet:eo}),(0,i.jsx)(z.e,{t:t,onLogShake:(e,a)=>void eS(e,a)}),(0,i.jsx)(h.F,{t:t,onParsed:e=>void eI(e)}),(0,i.jsx)(x._,{data:en,t:t,onLogMeal:eE,onLogWalk:eT,onLogWeight:ez,onLogWater:e=>void ev(e),onDeleteMeal:e=>void eD(e),onEditMeal:eL,onTapTemplate:e=>void e$(e)}),(0,i.jsx)(b.v,{data:en,t:t,locale:a,onTapTemplate:e=>void e$(e)})]}),"trends"===ea&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(B,{role:"tablist","aria-label":t("forma.trends.sub.aria"),children:[(0,i.jsx)(N,{role:"tab","aria-selected":"overview"===ei,active:"overview"===ei,onClick:()=>es("overview"),children:t("forma.trends.sub.overview")}),(0,i.jsx)(N,{role:"tab","aria-selected":"weight"===ei,active:"weight"===ei,onClick:()=>es("weight"),children:t("forma.trends.sub.weight")}),(0,i.jsx)(N,{role:"tab","aria-selected":"activities"===ei,active:"activities"===ei,onClick:()=>es("activities"),children:t("forma.trends.sub.activities")}),(0,i.jsx)(N,{role:"tab","aria-selected":"body"===ei,active:"body"===ei,onClick:()=>es("body"),children:t("forma.trends.sub.body")})]}),"overview"===ei&&(0,i.jsx)(v.Q,{data:en,t:t,locale:a}),"weight"===ei&&(0,i.jsx)(f.m,{data:en,t:t,onLogWeight:ez,onDeleteWeight:e=>void eM(e),onEditWeight:eW}),"activities"===ei&&(0,i.jsx)(y.N,{data:en,t:t,locale:a,onEditFast:e=>em(e),onEditMeal:e=>eL(e.id),onDuplicateMeal:e=>void eh(e),onEditWeight:e=>eW(e.date),onDeleteFast:e=>void eF(e),onDeleteMeal:e=>void eD(e),onDeleteWeight:e=>void eM(e),onDeleteWalk:e=>void eA(e)}),"body"===ei&&(0,i.jsx)(W.P,{data:en,t:t,onAddMeasurement:eC,onDeleteMeasurement:ej})]}),"coach"===ea&&(0,i.jsxs)(J,{children:[(0,i.jsx)(C.q,{t:t,onOpenCheckIn:()=>V(!0),onOpenSettings:()=>ee(!0)}),(0,i.jsx)($.s,{t:t}),(0,i.jsx)(S.g,{t:t}),(0,i.jsx)(M.v,{data:en,t:t,locale:a}),(0,i.jsx)(D.c,{t:t,locale:a})]})]})}),(0,i.jsx)(H,{"aria-label":t("forma.log"),onClick:()=>eo(),children:(0,i.jsx)(c.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(u.Y,{open:r,onClose:el,data:en,t:t,initialMode:I,editing:q,onStartFast:(e,a)=>void er(e,a),onStopFast:()=>void ec(),onLogPastFast:(e,a,t,i)=>void ew(e,a,t,i),onEditFast:(e,a,t,i,s)=>void ep(e,a,t,i,s),onLogMeal:(e,a,t,i,s)=>void eg(e,a,t,i,s),onEditMeal:(e,a,t,i,s,o)=>void eb(e,a,t,i,s,o),onLogWeight:(e,a)=>void eu(e,a),onEditWeight:(e,a)=>void ex(e,a),onLogWalk:(e,a)=>void ef(e,a),onEditWalk:(e,a,t)=>void ek(e,a,t),onLogWater:(e,a)=>void ev(e,a),onEditWater:(e,a,t)=>void ey(e,a,t)}),(0,i.jsx)(j.N,{open:X,onClose:()=>V(!1),t:t}),(0,i.jsx)(L.X,{open:Z,onClose:()=>ee(!1),ariaLabel:t("forma.settings.cog.label"),maxWidth:560,children:(0,i.jsx)(Q,{children:(0,i.jsx)(k.f,{data:en,t:t,locale:a,onSave:n})})})]})})},{}))},58085(e,a,t){t.d(a,{default:()=>i});let i={id:"forma",port:3034,labelKey:"apps.forma.label",descriptionKey:"apps.forma.description",hash:"#/forma",hashAliases:[],icon:"heart",color:"#7fb77e",enabled:!0,category:"Tools",needsAuth:!1,suite:"Life Dashboard"}}}]);