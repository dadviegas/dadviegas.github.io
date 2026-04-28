"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["512"],{58997(e,a,t){var i=t(62727);a.createRoot=i.createRoot,i.hydrateRoot},13611(e,a,t){var i=t(65723),o=t(58997),s=t(37991),l=t(36859),n=t.n(l),r=t(72799),d=t(6063),c=t(63236),w=t(28170),m=t(94021),p=t(54041),g=t(20948),h=t(25405),x=t(20483),b=t(17102),u=t(19652),f=t(77112),k=t(20429),v=t(71575),y=t(90429),C=t(22684),j=t(33499),$=t(24470),S=t(86704),D=t(69568),M=t(84391),F=t(7434),E=t(78531),T=t(79793),W=t(36971),z=t(82167);let L="#7fb77e",A=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,I=n().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,O=n().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  touch-action: pan-y;
  display: flex;
  flex-direction: column;
`,_=n().div`
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  flex: 1;
  animation: ${A} 0.25s ease both;
  min-width: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding: ${d.w4.spacing.md};
    padding-bottom: calc(${d.w4.spacing.md} + 56px + env(safe-area-inset-bottom, 0px) + ${d.w4.spacing.md});
    gap: ${d.w4.spacing.md};
  }
`,P=n().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${d.w4.spacing.lg};
  min-width: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${d.w4.spacing.md};
  }
`,R=n().div`
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
`,B=n().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?L:"transparent"};
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
`,K=n().div`
  display: flex;
  gap: ${d.w4.spacing.xs};
  flex-wrap: wrap;
`,N=n().button`
  background: ${({active:e})=>e?`${L}14`:"transparent"};
  border: 1px solid ${({active:e})=>e?`${L}60`:d.w4.colors.border};
  border-radius: 99px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({active:e})=>e?L:d.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 140ms ease, border-color 140ms ease, background 140ms ease;
  min-height: 28px;
  white-space: nowrap;

  &:hover {
    color: ${d.w4.colors.mainText};
    border-color: ${d.w4.colors.borderStrong??d.w4.colors.mainTextMuted};
  }
`,G=n().button`
  position: fixed;
  bottom: max(${d.w4.spacing.md}, env(safe-area-inset-bottom, ${d.w4.spacing.md}));
  right: ${d.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${L};
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
`,H=n().div`
  padding: ${d.w4.spacing.md};
`,Q=document.getElementById("root");if(!Q)throw Error("Root element #root not found");(0,o.createRoot)(Q).render((0,i.jsx)(function({topBarRight:e}){let[a]=(0,w.Ym)(),t=(0,s.useMemo)(()=>(0,w.Nx)(a,g.A),[a]),{data:o,loaded:l,save:n}=(0,m.useForma)(),[r,d]=(0,s.useState)(!1),[L,A]=(0,s.useState)(void 0),[Q,q]=(0,s.useState)(null),[J,U]=(0,s.useState)(!1),[X,V]=(0,s.useState)(!1),[Z,ee]=(0,s.useState)("today"),[ea,et]=(0,s.useState)("overview"),ei=(0,s.useCallback)((e,a)=>{A(e),q(a??null),d(!0)},[]),eo=(0,s.useCallback)(()=>{d(!1),A(void 0),q(null)},[]),es=o??{...m.EMPTY_FORMA_DATA,templates:m.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},el=(0,s.useCallback)(async(e,a)=>{let t={...es,sessions:[...es.sessions,{id:(0,p.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[es,n]),en=(0,s.useCallback)(async e=>{let a={...es,sessions:es.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[es,n]),er=(0,s.useCallback)(async()=>{let e=es.sessions.find(e=>void 0===e.endedAt);e&&await en(e)},[es,en]),ed=(0,s.useCallback)(e=>{ei(void 0,{kind:"fast",entry:e})},[ei]),ec=(0,s.useCallback)(async(e,a,t,i)=>{let o={...es,sessions:[...es.sessions,{id:(0,p.z)(),startedAt:t,endedAt:i,targetHours:a,protocol:e}]};await n(o)},[es,n]),ew=(0,s.useCallback)(async(e,a,t,i,o)=>{let s={...es,sessions:es.sessions.map(s=>s.id===e?{...s,protocol:a,targetHours:t,startedAt:i,endedAt:o}:s)};await n(s)},[es,n]),em=(0,s.useCallback)(async(e,a,t,i,o=new Date().toISOString().slice(0,10))=>{let s={...es,meals:[...es.meals,{id:(0,p.z)(),date:o,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(s)},[es,n]),ep=(0,s.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...es,meals:[...es.meals,{...e,id:(0,p.z)(),date:a,createdAt:Date.now()}]};await n(t)},[es,n]),eg=(0,s.useCallback)(async(e,a,t,i,o,s)=>{let l={...es,meals:es.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:o||void 0,date:s}:l)};await n(l)},[es,n]),eh=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=es.weights.filter(e=>e.date!==a),i={...es,weights:[...t,{date:a,kg:e}]};await n(i)},[es,n]),ex=(0,s.useCallback)(async(e,a)=>{let t={...es,weights:es.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[es,n]),eb=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...es,walks:[...es.walks,{id:(0,p.z)(),date:a,minutes:e}]};await n(t)},[es,n]),eu=(0,s.useCallback)(async(e,a,t)=>{let i={...es,walks:es.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[es,n]),ef=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={id:(0,p.z)(),date:a,ml:e,createdAt:Date.now()},i={...es,water:[...es.water??[],t]};await n(i)},[es,n]),ek=(0,s.useCallback)(async(e,a,t)=>{let i={...es,water:(es.water??[]).map(i=>i.id===e?{...i,ml:a,date:t}:i)};await n(i)},[es,n]),ev=(0,s.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...es,meals:[...es.meals,{id:(0,p.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[es,n]),ey=(0,s.useCallback)(async e=>{let a={...es,meals:es.meals.filter(a=>a.id!==e)};await n(a)},[es,n]),eC=(0,s.useCallback)(async e=>{let a={...es,weights:es.weights.filter(a=>a.date!==e)};await n(a)},[es,n]),ej=(0,s.useCallback)(async e=>{let a={...es,walks:es.walks.filter(a=>a.date!==e)};await n(a)},[es,n]),e$=(0,s.useCallback)(async e=>{let a={...es,sessions:es.sessions.filter(a=>a.id!==e)};await n(a)},[es,n]),eS=(0,s.useCallback)(()=>ei("meal"),[ei]),eD=(0,s.useCallback)(()=>ei("walk"),[ei]),eM=(0,s.useCallback)(()=>ei("weight"),[ei]),eF=(0,s.useCallback)(e=>{let a=es.meals.find(a=>a.id===e);a&&ei("meal",{kind:"meal",entry:a})},[es.meals,ei]),eE=(0,s.useCallback)(e=>{let a=es.weights.find(a=>a.date===e);a&&ei("weight",{kind:"weight",entry:a})},[es.weights,ei]),eT=(0,s.useCallback)(async e=>{switch(e.kind){case"fast":await el(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await em(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await eh(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await eb(e.walkMinutes);break;case"water":void 0!==e.waterMl&&await ef(e.waterMl)}},[el,em,eh,eb,ef]),eW=(0,i.jsx)(c.K0,{title:t("forma.settings.cog.label"),onClick:()=>V(!0),children:(0,i.jsx)(c.In,{name:"settings",size:16})});return(0,i.jsx)(c.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:(0,i.jsxs)(i.Fragment,{children:[eW,e]}),children:(0,i.jsxs)(I,{children:[(0,i.jsxs)(Y,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(B,{role:"tab","aria-selected":"today"===Z,active:"today"===Z,onClick:()=>ee("today"),children:t("forma.tab.today")}),(0,i.jsx)(B,{role:"tab","aria-selected":"trends"===Z,active:"trends"===Z,onClick:()=>ee("trends"),children:t("forma.tab.trends")}),(0,i.jsx)(B,{role:"tab","aria-selected":"coach"===Z,active:"coach"===Z,onClick:()=>ee("coach"),children:t("forma.tab.coach")})]}),(0,i.jsx)(O,{children:(0,i.jsxs)(_,{children:["today"===Z&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(F.c,{data:es,t:t}),(0,i.jsxs)(P,{children:[(0,i.jsx)(E.F,{data:es,t:t,onClick:()=>ei("startFast")}),(0,i.jsx)(T.J,{data:es,t:t,onClick:()=>ei("weight")})]}),(0,i.jsx)(W.z,{data:es,t:t,onOpenSheet:ei}),(0,i.jsx)(h.F,{t:t,onParsed:e=>void eT(e)}),(0,i.jsx)(u._,{data:es,t:t,onLogMeal:eS,onLogWalk:eD,onLogWeight:eM,onLogWater:e=>void ef(e),onDeleteMeal:e=>void ey(e),onEditMeal:eF,onTapTemplate:e=>void ev(e)}),(0,i.jsx)(x.v,{data:es,t:t,locale:a,onTapTemplate:e=>void ev(e)})]}),"trends"===Z&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(K,{role:"tablist","aria-label":t("forma.trends.sub.aria"),children:[(0,i.jsx)(N,{role:"tab","aria-selected":"overview"===ea,active:"overview"===ea,onClick:()=>et("overview"),children:t("forma.trends.sub.overview")}),(0,i.jsx)(N,{role:"tab","aria-selected":"weight"===ea,active:"weight"===ea,onClick:()=>et("weight"),children:t("forma.trends.sub.weight")}),(0,i.jsx)(N,{role:"tab","aria-selected":"activities"===ea,active:"activities"===ea,onClick:()=>et("activities"),children:t("forma.trends.sub.activities")})]}),"overview"===ea&&(0,i.jsx)(v.Q,{data:es,t:t,locale:a}),"weight"===ea&&(0,i.jsx)(f.m,{data:es,t:t,onLogWeight:eM,onDeleteWeight:e=>void eC(e),onEditWeight:eE}),"activities"===ea&&(0,i.jsx)(y.N,{data:es,t:t,locale:a,onEditFast:e=>ed(e),onEditMeal:e=>eF(e.id),onDuplicateMeal:e=>void ep(e),onEditWeight:e=>eE(e.date),onDeleteFast:e=>void e$(e),onDeleteMeal:e=>void ey(e),onDeleteWeight:e=>void eC(e),onDeleteWalk:e=>void ej(e)})]}),"coach"===Z&&(0,i.jsxs)(R,{children:[(0,i.jsx)(C.q,{t:t,onOpenCheckIn:()=>U(!0),onOpenSettings:()=>V(!0)}),(0,i.jsx)($.s,{t:t}),(0,i.jsx)(S.g,{t:t}),(0,i.jsx)(M.v,{data:es,t:t,locale:a}),(0,i.jsx)(D.c,{t:t,locale:a})]})]})}),(0,i.jsx)(G,{"aria-label":t("forma.log"),onClick:()=>ei(),children:(0,i.jsx)(c.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(b.Y,{open:r,onClose:eo,data:es,t:t,initialMode:L,editing:Q,onStartFast:(e,a)=>void el(e,a),onStopFast:()=>void er(),onLogPastFast:(e,a,t,i)=>void ec(e,a,t,i),onEditFast:(e,a,t,i,o)=>void ew(e,a,t,i,o),onLogMeal:(e,a,t,i,o)=>void em(e,a,t,i,o),onEditMeal:(e,a,t,i,o,s)=>void eg(e,a,t,i,o,s),onLogWeight:(e,a)=>void eh(e,a),onEditWeight:(e,a)=>void ex(e,a),onLogWalk:(e,a)=>void eb(e,a),onEditWalk:(e,a,t)=>void eu(e,a,t),onLogWater:(e,a)=>void ef(e,a),onEditWater:(e,a,t)=>void ek(e,a,t)}),(0,i.jsx)(j.N,{open:J,onClose:()=>U(!1),t:t}),(0,i.jsx)(z.X,{open:X,onClose:()=>V(!1),ariaLabel:t("forma.settings.cog.label"),maxWidth:560,children:(0,i.jsx)(H,{children:(0,i.jsx)(k.f,{data:es,t:t,onSave:n})})})]})})},{}))}}]);