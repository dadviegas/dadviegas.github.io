"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["131"],{58997(e,a,t){var i=t(62727);a.createRoot=i.createRoot,i.hydrateRoot},13611(e,a,t){var i=t(65723),s=t(58997),o=t(37991),l=t(36859),n=t.n(l),r=t(72799),d=t(6063),c=t(63236),g=t(28170),m=t(51385),w=t(54041),p=t(20948),h=t(72552),f=t(71589),x=t(68477),u=t(25405),b=t(20483),k=t(17102),v=t(19652),y=t(37103),j=t(52128),C=t(59446),$=t(92152),S=t(20429),D=t(4406),M=t(84964),F=t(90429),z=t(22684),E=t(33499),T=t(24470),W=t(86704),A=t(69568),L=t(84391);let I="#7fb77e",O=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,P=n().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,R=n().div`
  display: flex;
  flex: 1;
  min-height: 0;
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
`,Y=n().div`
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
`,B=n().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  min-width: 0;
`,H=n().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-left: 2px solid ${I};
  border-radius: ${d.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${d.w4.spacing.lg};
  gap: ${d.w4.spacing.md};
  transition: border-color 0.14s ease;
`,G=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${d.w4.spacing.sm};
  height: 100%;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,N=n().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 100%;
`,K=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  line-height: 1;
`,Q=n().span`
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
`;let q=n().div`
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
`,U=n().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?I:"transparent"};
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
`;let J=n().button`
  position: fixed;
  bottom: max(${d.w4.spacing.md}, env(safe-area-inset-bottom, ${d.w4.spacing.md}));
  right: ${d.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${I};
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
`,V=document.getElementById("root");if(!V)throw Error("Root element #root not found");(0,s.createRoot)(V).render((0,i.jsx)(function({topBarRight:e}){let[a]=(0,g.Ym)(),t=(0,o.useMemo)(()=>(0,g.Nx)(a,p.A),[a]),{data:s,loaded:l,save:n}=(0,m.useForma)(),[r,d]=(0,o.useState)("16:8"),[I,O]=(0,o.useState)(!1),[V,X]=(0,o.useState)(void 0),[Z,ee]=(0,o.useState)(null),[ea,et]=(0,o.useState)(!1),[ei,es]=(0,o.useState)("today"),eo=(0,o.useCallback)((e,a)=>{X(e),ee(a??null),O(!0)},[]),el=(0,o.useCallback)(()=>{O(!1),X(void 0),ee(null)},[]),en=s??{...m.EMPTY_FORMA_DATA,templates:m.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},er=(0,o.useCallback)(async(e,a)=>{let t={...en,sessions:[...en.sessions,{id:(0,w.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[en,n]),ed=(0,o.useCallback)(async e=>{let a={...en,sessions:en.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[en,n]),ec=(0,o.useCallback)(async()=>{let e=en.sessions.find(e=>void 0===e.endedAt);e&&await ed(e)},[en,ed]),eg=(0,o.useCallback)(e=>{eo(void 0,{kind:"fast",entry:e})},[eo]),em=(0,o.useCallback)(async(e,a,t,i)=>{let s={...en,sessions:[...en.sessions,{id:(0,w.z)(),startedAt:t,endedAt:i,targetHours:a,protocol:e}]};await n(s)},[en,n]),ew=(0,o.useCallback)(async(e,a,t,i,s)=>{let o={...en,sessions:en.sessions.map(o=>o.id===e?{...o,protocol:a,targetHours:t,startedAt:i,endedAt:s}:o)};await n(o)},[en,n]),ep=(0,o.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...en,meals:[...en.meals,{id:(0,w.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[en,n]),eh=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...en,meals:[...en.meals,{...e,id:(0,w.z)(),date:a,createdAt:Date.now()}]};await n(t)},[en,n]),ef=(0,o.useCallback)(async(e,a,t,i,s,o)=>{let l={...en,meals:en.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[en,n]),ex=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=en.weights.filter(e=>e.date!==a),i={...en,weights:[...t,{date:a,kg:e}]};await n(i)},[en,n]),eu=(0,o.useCallback)(async(e,a)=>{let t={...en,weights:en.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[en,n]),eb=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...en,walks:[...en.walks,{id:(0,w.z)(),date:a,minutes:e}]};await n(t)},[en,n]),ek=(0,o.useCallback)(async(e,a,t)=>{let i={...en,walks:en.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[en,n]),ev=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={id:(0,w.z)(),date:a,ml:e,createdAt:Date.now()},i={...en,water:[...en.water??[],t]};await n(i)},[en,n]),ey=(0,o.useCallback)(async(e,a,t)=>{let i={...en,water:(en.water??[]).map(i=>i.id===e?{...i,ml:a,date:t}:i)};await n(i)},[en,n]),ej=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...en,meals:[...en.meals,{id:(0,w.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[en,n]),eC=(0,o.useCallback)(async e=>{let a={...en,meals:en.meals.filter(a=>a.id!==e)};await n(a)},[en,n]),e$=(0,o.useCallback)(async e=>{let a={...en,weights:en.weights.filter(a=>a.date!==e)};await n(a)},[en,n]),eS=(0,o.useCallback)(async e=>{let a={...en,walks:en.walks.filter(a=>a.date!==e)};await n(a)},[en,n]),eD=(0,o.useCallback)(async e=>{let a={...en,sessions:en.sessions.filter(a=>a.id!==e)};await n(a)},[en,n]),eM=(0,o.useCallback)(()=>eo("meal"),[eo]),eF=(0,o.useCallback)(()=>eo("walk"),[eo]),ez=(0,o.useCallback)(()=>eo("weight"),[eo]),eE=(0,o.useCallback)(e=>{let a=en.meals.find(a=>a.id===e);a&&eo("meal",{kind:"meal",entry:a})},[en.meals,eo]),eT=(0,o.useCallback)(e=>{let a=en.weights.find(a=>a.date===e);a&&eo("weight",{kind:"weight",entry:a})},[en.weights,eo]),eW=(0,o.useCallback)(async e=>{switch(e.kind){case"fast":await er(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await ep(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await ex(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await eb(e.walkMinutes);break;case"water":void 0!==e.waterMl&&await ev(e.waterMl)}},[er,ep,ex,eb,ev]),eA=(0,m.streakDays)(en.sessions,en.goal.targetHours),eL=(0,m.avgFastDuration)(en.sessions,30),eI=en.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(c.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)(P,{children:[(0,i.jsxs)(q,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(U,{role:"tab","aria-selected":"today"===ei,active:"today"===ei,onClick:()=>es("today"),children:t("forma.tab.today")}),(0,i.jsx)(U,{role:"tab","aria-selected":"fasting"===ei,active:"fasting"===ei,onClick:()=>es("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(U,{role:"tab","aria-selected":"weight"===ei,active:"weight"===ei,onClick:()=>es("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(U,{role:"tab","aria-selected":"activities"===ei,active:"activities"===ei,onClick:()=>es("activities"),children:t("forma.tab.activities")}),(0,i.jsx)(U,{role:"tab","aria-selected":"analytics"===ei,active:"analytics"===ei,onClick:()=>es("analytics"),children:t("forma.tab.analytics")}),(0,i.jsx)(U,{role:"tab","aria-selected":"coach"===ei,active:"coach"===ei,onClick:()=>es("coach"),children:t("forma.tab.coach")}),(0,i.jsx)(U,{role:"tab","aria-selected":"settings"===ei,active:"settings"===ei,onClick:()=>es("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(R,{children:["fasting"===ei&&(0,i.jsx)(f.B,{t:t,active:r,onChange:d}),(0,i.jsx)(_,{children:(0,i.jsxs)(Y,{children:["today"===ei&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.F,{t:t,onParsed:e=>void eW(e)}),(0,i.jsx)(D.C,{t:t,cards:[{id:"mini-fast",defaultSize:"sm",render:()=>(0,i.jsx)(j.g,{data:en,t:t,onClick:()=>es("fasting")})},{id:"mini-weight",defaultSize:"sm",render:()=>(0,i.jsx)(C.S,{data:en,t:t,onClick:()=>es("weight")})},{id:"today",defaultSize:"lg",render:()=>(0,i.jsx)(v._,{data:en,t:t,onLogMeal:eM,onLogWalk:eF,onLogWeight:ez,onLogWater:e=>void ev(e),onDeleteMeal:e=>void eC(e),onEditMeal:eE,onTapTemplate:e=>void ej(e)})},{id:"ask",defaultSize:"lg",render:()=>(0,i.jsx)(y.j,{data:en,t:t,locale:a})},{id:"week",defaultSize:"lg",render:()=>(0,i.jsx)(b.v,{data:en,t:t,locale:a,onTapTemplate:e=>void ej(e)})},{id:"stats",defaultSize:"md",render:()=>(0,i.jsxs)(G,{children:[(0,i.jsxs)(N,{children:[(0,i.jsx)(K,{children:eA}),(0,i.jsx)(Q,{children:t("forma.streak",{n:eA})})]}),(0,i.jsxs)(N,{children:[(0,i.jsx)(K,{children:eL>0?eL.toFixed(1):"—"}),(0,i.jsx)(Q,{children:t("forma.hero.avgDuration")})]}),eI&&(0,i.jsxs)(N,{children:[(0,i.jsx)(K,{children:eI.kg.toFixed(1)}),(0,i.jsx)(Q,{children:t("forma.weight.label")})]})]})}]})]}),"coach"===ei&&(0,i.jsxs)(B,{children:[(0,i.jsx)(z.q,{t:t,onOpenCheckIn:()=>et(!0),onOpenSettings:()=>es("settings")}),(0,i.jsx)(T.s,{t:t}),(0,i.jsx)(W.g,{t:t}),(0,i.jsx)(L.v,{data:en,t:t,locale:a}),(0,i.jsx)(A.c,{t:t,locale:a})]}),"fasting"===ei&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.P,{t:t,active:r,onChange:d}),(0,i.jsx)(H,{children:(0,i.jsx)(h.k,{data:en,t:t,onStart:()=>{let e="16:8"===r?16:"18:6"===r?18:"20:4"===r?20:en.goal.targetHours;er(r,e)},onStop:e=>void ed(e),onEditStart:e=>eg(e)})}),(0,i.jsx)(b.v,{data:en,t:t,locale:a,onTapTemplate:e=>void ej(e)})]}),"weight"===ei&&(0,i.jsx)($.m,{data:en,t:t,onLogWeight:ez,onDeleteWeight:e=>void e$(e),onEditWeight:eT}),"activities"===ei&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(F.N,{data:en,t:t,locale:a,onEditFast:e=>eg(e),onEditMeal:e=>eE(e.id),onDuplicateMeal:e=>void eh(e),onEditWeight:e=>eT(e.date),onDeleteFast:e=>void eD(e),onDeleteMeal:e=>void eC(e),onDeleteWeight:e=>void e$(e),onDeleteWalk:e=>void eS(e)})}),"analytics"===ei&&(0,i.jsx)(M.Q,{data:en,t:t,locale:a}),"settings"===ei&&(0,i.jsx)(S.f,{data:en,t:t,onSave:n})]})})]}),(0,i.jsx)(J,{"aria-label":t("forma.log"),onClick:()=>eo(),children:(0,i.jsx)(c.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(k.Y,{open:I,onClose:el,data:en,t:t,initialMode:V,editing:Z,onStartFast:(e,a)=>void er(e,a),onStopFast:()=>void ec(),onLogPastFast:(e,a,t,i)=>void em(e,a,t,i),onEditFast:(e,a,t,i,s)=>void ew(e,a,t,i,s),onLogMeal:(e,a,t,i,s)=>void ep(e,a,t,i,s),onEditMeal:(e,a,t,i,s,o)=>void ef(e,a,t,i,s,o),onLogWeight:(e,a)=>void ex(e,a),onEditWeight:(e,a)=>void eu(e,a),onLogWalk:(e,a)=>void eb(e,a),onEditWalk:(e,a,t)=>void ek(e,a,t),onLogWater:(e,a)=>void ev(e,a),onEditWater:(e,a,t)=>void ey(e,a,t)}),(0,i.jsx)(E.N,{open:ea,onClose:()=>et(!1),t:t})]})})},{}))}}]);