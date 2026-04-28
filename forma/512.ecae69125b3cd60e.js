"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["512"],{58997(e,a,t){var i=t(62727);a.createRoot=i.createRoot,i.hydrateRoot},13611(e,a,t){var i=t(65723),s=t(58997),o=t(37991),l=t(36859),n=t.n(l),r=t(72799),d=t(6063),c=t(63236),g=t(28170),m=t(63019),w=t(54041),p=t(20948),h=t(72552),x=t(71589),f=t(68477),u=t(25405),b=t(20483),k=t(17102),v=t(19652),y=t(37103),j=t(52128),C=t(59446),$=t(92152),S=t(20429),D=t(4406),M=t(84964),F=t(90429),z=t(22684),E=t(33499),T=t(24470),W=t(86704),A=t(69568),L=t(84391),O=t(7434),I=t(36971);let P="#7fb77e",R=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,_=n().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,Y=n().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,B=n().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  touch-action: pan-y;
  display: flex;
  flex-direction: column;
`,H=n().div`
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  flex: 1;
  animation: ${R} 0.25s ease both;
  min-width: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding: ${d.w4.spacing.md};
    padding-bottom: calc(${d.w4.spacing.md} + 56px + env(safe-area-inset-bottom, 0px) + ${d.w4.spacing.md});
    gap: ${d.w4.spacing.md};
  }
`,G=n().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  min-width: 0;
`,N=n().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-left: 2px solid ${P};
  border-radius: ${d.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${d.w4.spacing.lg};
  gap: ${d.w4.spacing.md};
  transition: border-color 0.14s ease;
`,K=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${d.w4.spacing.sm};
  height: 100%;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Q=n().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 100%;
`,q=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  line-height: 1;
`,U=n().span`
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
`;let J=n().div`
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
`,V=n().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?P:"transparent"};
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
`;n().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${d.w4.spacing.md};
  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;let X=n().button`
  position: fixed;
  bottom: max(${d.w4.spacing.md}, env(safe-area-inset-bottom, ${d.w4.spacing.md}));
  right: ${d.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${P};
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
`,Z=document.getElementById("root");if(!Z)throw Error("Root element #root not found");(0,s.createRoot)(Z).render((0,i.jsx)(function({topBarRight:e}){let[a]=(0,g.Ym)(),t=(0,o.useMemo)(()=>(0,g.Nx)(a,p.A),[a]),{data:s,loaded:l,save:n}=(0,m.useForma)(),[r,d]=(0,o.useState)("16:8"),[P,R]=(0,o.useState)(!1),[Z,ee]=(0,o.useState)(void 0),[ea,et]=(0,o.useState)(null),[ei,es]=(0,o.useState)(!1),[eo,el]=(0,o.useState)("today"),en=(0,o.useCallback)((e,a)=>{ee(e),et(a??null),R(!0)},[]),er=(0,o.useCallback)(()=>{R(!1),ee(void 0),et(null)},[]),ed=s??{...m.EMPTY_FORMA_DATA,templates:m.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},ec=(0,o.useCallback)(async(e,a)=>{let t={...ed,sessions:[...ed.sessions,{id:(0,w.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[ed,n]),eg=(0,o.useCallback)(async e=>{let a={...ed,sessions:ed.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[ed,n]),em=(0,o.useCallback)(async()=>{let e=ed.sessions.find(e=>void 0===e.endedAt);e&&await eg(e)},[ed,eg]),ew=(0,o.useCallback)(e=>{en(void 0,{kind:"fast",entry:e})},[en]),ep=(0,o.useCallback)(async(e,a,t,i)=>{let s={...ed,sessions:[...ed.sessions,{id:(0,w.z)(),startedAt:t,endedAt:i,targetHours:a,protocol:e}]};await n(s)},[ed,n]),eh=(0,o.useCallback)(async(e,a,t,i,s)=>{let o={...ed,sessions:ed.sessions.map(o=>o.id===e?{...o,protocol:a,targetHours:t,startedAt:i,endedAt:s}:o)};await n(o)},[ed,n]),ex=(0,o.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...ed,meals:[...ed.meals,{id:(0,w.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[ed,n]),ef=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...ed,meals:[...ed.meals,{...e,id:(0,w.z)(),date:a,createdAt:Date.now()}]};await n(t)},[ed,n]),eu=(0,o.useCallback)(async(e,a,t,i,s,o)=>{let l={...ed,meals:ed.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[ed,n]),eb=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=ed.weights.filter(e=>e.date!==a),i={...ed,weights:[...t,{date:a,kg:e}]};await n(i)},[ed,n]),ek=(0,o.useCallback)(async(e,a)=>{let t={...ed,weights:ed.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[ed,n]),ev=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...ed,walks:[...ed.walks,{id:(0,w.z)(),date:a,minutes:e}]};await n(t)},[ed,n]),ey=(0,o.useCallback)(async(e,a,t)=>{let i={...ed,walks:ed.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[ed,n]),ej=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={id:(0,w.z)(),date:a,ml:e,createdAt:Date.now()},i={...ed,water:[...ed.water??[],t]};await n(i)},[ed,n]),eC=(0,o.useCallback)(async(e,a,t)=>{let i={...ed,water:(ed.water??[]).map(i=>i.id===e?{...i,ml:a,date:t}:i)};await n(i)},[ed,n]),e$=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...ed,meals:[...ed.meals,{id:(0,w.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[ed,n]),eS=(0,o.useCallback)(async e=>{let a={...ed,meals:ed.meals.filter(a=>a.id!==e)};await n(a)},[ed,n]),eD=(0,o.useCallback)(async e=>{let a={...ed,weights:ed.weights.filter(a=>a.date!==e)};await n(a)},[ed,n]),eM=(0,o.useCallback)(async e=>{let a={...ed,walks:ed.walks.filter(a=>a.date!==e)};await n(a)},[ed,n]),eF=(0,o.useCallback)(async e=>{let a={...ed,sessions:ed.sessions.filter(a=>a.id!==e)};await n(a)},[ed,n]),ez=(0,o.useCallback)(()=>en("meal"),[en]),eE=(0,o.useCallback)(()=>en("walk"),[en]),eT=(0,o.useCallback)(()=>en("weight"),[en]),eW=(0,o.useCallback)(e=>{let a=ed.meals.find(a=>a.id===e);a&&en("meal",{kind:"meal",entry:a})},[ed.meals,en]),eA=(0,o.useCallback)(e=>{let a=ed.weights.find(a=>a.date===e);a&&en("weight",{kind:"weight",entry:a})},[ed.weights,en]),eL=(0,o.useCallback)(async e=>{switch(e.kind){case"fast":await ec(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await ex(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await eb(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await ev(e.walkMinutes);break;case"water":void 0!==e.waterMl&&await ej(e.waterMl)}},[ec,ex,eb,ev,ej]),eO=(0,m.streakDays)(ed.sessions,ed.goal.targetHours),eI=(0,m.avgFastDuration)(ed.sessions,30),eP=ed.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(c.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)(_,{children:[(0,i.jsxs)(J,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(V,{role:"tab","aria-selected":"today"===eo,active:"today"===eo,onClick:()=>el("today"),children:t("forma.tab.today")}),(0,i.jsx)(V,{role:"tab","aria-selected":"fasting"===eo,active:"fasting"===eo,onClick:()=>el("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(V,{role:"tab","aria-selected":"weight"===eo,active:"weight"===eo,onClick:()=>el("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(V,{role:"tab","aria-selected":"activities"===eo,active:"activities"===eo,onClick:()=>el("activities"),children:t("forma.tab.activities")}),(0,i.jsx)(V,{role:"tab","aria-selected":"analytics"===eo,active:"analytics"===eo,onClick:()=>el("analytics"),children:t("forma.tab.analytics")}),(0,i.jsx)(V,{role:"tab","aria-selected":"coach"===eo,active:"coach"===eo,onClick:()=>el("coach"),children:t("forma.tab.coach")}),(0,i.jsx)(V,{role:"tab","aria-selected":"settings"===eo,active:"settings"===eo,onClick:()=>el("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(Y,{children:["fasting"===eo&&(0,i.jsx)(x.B,{t:t,active:r,onChange:d}),(0,i.jsx)(B,{children:(0,i.jsxs)(H,{children:["today"===eo&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(O.c,{data:ed,t:t}),(0,i.jsx)(I.z,{data:ed,t:t,onOpenSheet:en}),(0,i.jsx)(u.F,{t:t,onParsed:e=>void eL(e)}),(0,i.jsx)(D.C,{t:t,cards:[{id:"mini-fast",defaultSize:"sm",render:()=>(0,i.jsx)(j.g,{data:ed,t:t,onClick:()=>el("fasting")})},{id:"mini-weight",defaultSize:"sm",render:()=>(0,i.jsx)(C.S,{data:ed,t:t,onClick:()=>el("weight")})},{id:"today",defaultSize:"lg",render:()=>(0,i.jsx)(v._,{data:ed,t:t,onLogMeal:ez,onLogWalk:eE,onLogWeight:eT,onLogWater:e=>void ej(e),onDeleteMeal:e=>void eS(e),onEditMeal:eW,onTapTemplate:e=>void e$(e)})},{id:"ask",defaultSize:"lg",render:()=>(0,i.jsx)(y.j,{data:ed,t:t,locale:a})},{id:"week",defaultSize:"lg",render:()=>(0,i.jsx)(b.v,{data:ed,t:t,locale:a,onTapTemplate:e=>void e$(e)})},{id:"stats",defaultSize:"md",render:()=>(0,i.jsxs)(K,{children:[(0,i.jsxs)(Q,{children:[(0,i.jsx)(q,{children:eO}),(0,i.jsx)(U,{children:t("forma.streak",{n:eO})})]}),(0,i.jsxs)(Q,{children:[(0,i.jsx)(q,{children:eI>0?eI.toFixed(1):"—"}),(0,i.jsx)(U,{children:t("forma.hero.avgDuration")})]}),eP&&(0,i.jsxs)(Q,{children:[(0,i.jsx)(q,{children:eP.kg.toFixed(1)}),(0,i.jsx)(U,{children:t("forma.weight.label")})]})]})}]})]}),"coach"===eo&&(0,i.jsxs)(G,{children:[(0,i.jsx)(z.q,{t:t,onOpenCheckIn:()=>es(!0),onOpenSettings:()=>el("settings")}),(0,i.jsx)(T.s,{t:t}),(0,i.jsx)(W.g,{t:t}),(0,i.jsx)(L.v,{data:ed,t:t,locale:a}),(0,i.jsx)(A.c,{t:t,locale:a})]}),"fasting"===eo&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.P,{t:t,active:r,onChange:d}),(0,i.jsx)(N,{children:(0,i.jsx)(h.k,{data:ed,t:t,onStart:()=>{let e="16:8"===r?16:"18:6"===r?18:"20:4"===r?20:ed.goal.targetHours;ec(r,e)},onStop:e=>void eg(e),onEditStart:e=>ew(e)})}),(0,i.jsx)(b.v,{data:ed,t:t,locale:a,onTapTemplate:e=>void e$(e)})]}),"weight"===eo&&(0,i.jsx)($.m,{data:ed,t:t,onLogWeight:eT,onDeleteWeight:e=>void eD(e),onEditWeight:eA}),"activities"===eo&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(F.N,{data:ed,t:t,locale:a,onEditFast:e=>ew(e),onEditMeal:e=>eW(e.id),onDuplicateMeal:e=>void ef(e),onEditWeight:e=>eA(e.date),onDeleteFast:e=>void eF(e),onDeleteMeal:e=>void eS(e),onDeleteWeight:e=>void eD(e),onDeleteWalk:e=>void eM(e)})}),"analytics"===eo&&(0,i.jsx)(M.Q,{data:ed,t:t,locale:a}),"settings"===eo&&(0,i.jsx)(S.f,{data:ed,t:t,onSave:n})]})})]}),(0,i.jsx)(X,{"aria-label":t("forma.log"),onClick:()=>en(),children:(0,i.jsx)(c.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(k.Y,{open:P,onClose:er,data:ed,t:t,initialMode:Z,editing:ea,onStartFast:(e,a)=>void ec(e,a),onStopFast:()=>void em(),onLogPastFast:(e,a,t,i)=>void ep(e,a,t,i),onEditFast:(e,a,t,i,s)=>void eh(e,a,t,i,s),onLogMeal:(e,a,t,i,s)=>void ex(e,a,t,i,s),onEditMeal:(e,a,t,i,s,o)=>void eu(e,a,t,i,s,o),onLogWeight:(e,a)=>void eb(e,a),onEditWeight:(e,a)=>void ek(e,a),onLogWalk:(e,a)=>void ev(e,a),onEditWalk:(e,a,t)=>void ey(e,a,t),onLogWater:(e,a)=>void ej(e,a),onEditWater:(e,a,t)=>void eC(e,a,t)}),(0,i.jsx)(E.N,{open:ei,onClose:()=>es(!1),t:t})]})})},{}))}}]);