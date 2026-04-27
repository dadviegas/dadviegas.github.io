"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["512"],{58997(e,a,t){var i=t(62727);a.createRoot=i.createRoot,i.hydrateRoot},13611(e,a,t){var i=t(65723),s=t(58997),o=t(37991),l=t(36859),n=t.n(l),d=t(72799),r=t(6063),c=t(80884),g=t(28170),m=t(65256),w=t(54041),p=t(20948),h=t(72552),f=t(71589),x=t(68477),u=t(25405),b=t(20483),k=t(17102),y=t(15742),v=t(37103),j=t(52128),$=t(59446),C=t(92152),S=t(20429),D=t(4406),F=t(63709),z=t(90429),M=t(22684),E=t(33499),T=t(24470),W=t(86704),A=t(69568);let L="#7fb77e",I=(0,d.keyframes)`
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
`,O=n().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,_=n().div`
  padding: ${r.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  flex: 1;
  animation: ${I} 0.25s ease both;
  min-width: 0;

  @media (max-width: ${r.w4.breakpoints.md}) {
    padding: ${r.w4.spacing.md};
    gap: ${r.w4.spacing.md};
  }
`,Y=n().div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-left: 2px solid ${L};
  border-radius: ${r.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${r.w4.spacing.lg};
  gap: ${r.w4.spacing.md};
  transition: border-color 0.14s ease;
`,B=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${r.w4.spacing.sm};
  height: 100%;

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,H=n().div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  padding: ${r.w4.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 100%;
`,G=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${r.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${r.w4.colors.mainText};
  line-height: 1;
`,N=n().span`
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
`;let K=n().div`
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
`,Q=n().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?L:"transparent"};
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
`;let q=n().button`
  position: fixed;
  bottom: max(${r.w4.spacing.md}, env(safe-area-inset-bottom, ${r.w4.spacing.md}));
  right: ${r.w4.spacing.md};
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
  @media (min-width: ${r.w4.breakpoints.md}) {
    display: none;
  }
`,U=document.getElementById("root");if(!U)throw Error("Root element #root not found");(0,s.createRoot)(U).render((0,i.jsx)(function({topBarRight:e}){let[a]=(0,g.Ym)(),t=(0,o.useMemo)(()=>(0,g.Nx)(a,p.A),[a]),{data:s,loaded:l,save:n}=(0,m.useForma)(),[d,r]=(0,o.useState)("16:8"),[L,I]=(0,o.useState)(!1),[U,J]=(0,o.useState)(void 0),[V,X]=(0,o.useState)(null),[Z,ee]=(0,o.useState)(!1),[ea,et]=(0,o.useState)("today"),ei=(0,o.useCallback)((e,a)=>{J(e),X(a??null),I(!0)},[]),es=(0,o.useCallback)(()=>{I(!1),J(void 0),X(null)},[]),eo=s??{...m.EMPTY_FORMA_DATA,templates:m.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},el=(0,o.useCallback)(async(e,a)=>{let t={...eo,sessions:[...eo.sessions,{id:(0,w.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[eo,n]),en=(0,o.useCallback)(async e=>{let a={...eo,sessions:eo.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[eo,n]),ed=(0,o.useCallback)(async()=>{let e=eo.sessions.find(e=>void 0===e.endedAt);e&&await en(e)},[eo,en]),er=(0,o.useCallback)(e=>{ei(void 0,{kind:"fast",entry:e})},[ei]),ec=(0,o.useCallback)(async(e,a,t,i)=>{let s={...eo,sessions:[...eo.sessions,{id:(0,w.z)(),startedAt:t,endedAt:i,targetHours:a,protocol:e}]};await n(s)},[eo,n]),eg=(0,o.useCallback)(async(e,a,t,i,s)=>{let o={...eo,sessions:eo.sessions.map(o=>o.id===e?{...o,protocol:a,targetHours:t,startedAt:i,endedAt:s}:o)};await n(o)},[eo,n]),em=(0,o.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...eo,meals:[...eo.meals,{id:(0,w.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[eo,n]),ew=(0,o.useCallback)(async(e,a,t,i,s,o)=>{let l={...eo,meals:eo.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[eo,n]),ep=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=eo.weights.filter(e=>e.date!==a),i={...eo,weights:[...t,{date:a,kg:e}]};await n(i)},[eo,n]),eh=(0,o.useCallback)(async(e,a)=>{let t={...eo,weights:eo.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[eo,n]),ef=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...eo,walks:[...eo.walks,{id:(0,w.z)(),date:a,minutes:e}]};await n(t)},[eo,n]),ex=(0,o.useCallback)(async(e,a,t)=>{let i={...eo,walks:eo.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[eo,n]),eu=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...eo,meals:[...eo.meals,{id:(0,w.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[eo,n]),eb=(0,o.useCallback)(async e=>{let a={...eo,meals:eo.meals.filter(a=>a.id!==e)};await n(a)},[eo,n]),ek=(0,o.useCallback)(async e=>{let a={...eo,weights:eo.weights.filter(a=>a.date!==e)};await n(a)},[eo,n]),ey=(0,o.useCallback)(async e=>{let a={...eo,walks:eo.walks.filter(a=>a.date!==e)};await n(a)},[eo,n]),ev=(0,o.useCallback)(async e=>{let a={...eo,sessions:eo.sessions.filter(a=>a.id!==e)};await n(a)},[eo,n]),ej=(0,o.useCallback)(()=>ei("meal"),[ei]),e$=(0,o.useCallback)(()=>ei("walk"),[ei]),eC=(0,o.useCallback)(()=>ei("weight"),[ei]),eS=(0,o.useCallback)(e=>{let a=eo.meals.find(a=>a.id===e);a&&ei("meal",{kind:"meal",entry:a})},[eo.meals,ei]),eD=(0,o.useCallback)(e=>{let a=eo.weights.find(a=>a.date===e);a&&ei("weight",{kind:"weight",entry:a})},[eo.weights,ei]),eF=(0,o.useCallback)(async e=>{switch(e.kind){case"fast":await el(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await em(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await ep(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await ef(e.walkMinutes)}},[el,em,ep,ef]),ez=(0,m.streakDays)(eo.sessions,eo.goal.targetHours),eM=(0,m.avgFastDuration)(eo.sessions,30),eE=eo.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(c.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)(P,{children:[(0,i.jsxs)(K,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(Q,{role:"tab","aria-selected":"today"===ea,active:"today"===ea,onClick:()=>et("today"),children:t("forma.tab.today")}),(0,i.jsx)(Q,{role:"tab","aria-selected":"fasting"===ea,active:"fasting"===ea,onClick:()=>et("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(Q,{role:"tab","aria-selected":"weight"===ea,active:"weight"===ea,onClick:()=>et("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(Q,{role:"tab","aria-selected":"activities"===ea,active:"activities"===ea,onClick:()=>et("activities"),children:t("forma.tab.activities")}),(0,i.jsx)(Q,{role:"tab","aria-selected":"analytics"===ea,active:"analytics"===ea,onClick:()=>et("analytics"),children:t("forma.tab.analytics")}),(0,i.jsx)(Q,{role:"tab","aria-selected":"settings"===ea,active:"settings"===ea,onClick:()=>et("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(R,{children:["fasting"===ea&&(0,i.jsx)(f.B,{t:t,active:d,onChange:r}),(0,i.jsx)(O,{children:(0,i.jsxs)(_,{children:["today"===ea&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.F,{t:t,onParsed:e=>void eF(e)}),(0,i.jsx)(D.C,{t:t,cards:[{id:"mini-fast",defaultSize:"sm",render:()=>(0,i.jsx)(j.g,{data:eo,t:t,onClick:()=>et("fasting")})},{id:"mini-weight",defaultSize:"sm",render:()=>(0,i.jsx)($.S,{data:eo,t:t,onClick:()=>et("weight")})},{id:"today",defaultSize:"lg",render:()=>(0,i.jsx)(y._,{data:eo,t:t,onLogMeal:ej,onLogWalk:e$,onLogWeight:eC,onDeleteMeal:e=>void eb(e),onEditMeal:eS})},{id:"today-card",defaultSize:"md",render:()=>(0,i.jsx)(M.q,{t:t,onOpenCheckIn:()=>ee(!0)})},{id:"coach",defaultSize:"md",render:()=>(0,i.jsx)(T.s,{t:t})},{id:"ask",defaultSize:"lg",render:()=>(0,i.jsx)(v.j,{data:eo,t:t,locale:a})},{id:"week",defaultSize:"lg",render:()=>(0,i.jsx)(b.v,{data:eo,t:t,locale:a,onTapTemplate:e=>void eu(e)})},{id:"stats",defaultSize:"md",render:()=>(0,i.jsxs)(B,{children:[(0,i.jsxs)(H,{children:[(0,i.jsx)(G,{children:ez}),(0,i.jsx)(N,{children:t("forma.streak",{n:ez})})]}),(0,i.jsxs)(H,{children:[(0,i.jsx)(G,{children:eM>0?eM.toFixed(1):"—"}),(0,i.jsx)(N,{children:t("forma.hero.avgDuration")})]}),eE&&(0,i.jsxs)(H,{children:[(0,i.jsx)(G,{children:eE.kg.toFixed(1)}),(0,i.jsx)(N,{children:t("forma.weight.label")})]})]})}]}),(0,i.jsx)(A.c,{t:t,locale:a})]}),"fasting"===ea&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.P,{t:t,active:d,onChange:r}),(0,i.jsx)(Y,{children:(0,i.jsx)(h.k,{data:eo,t:t,onStart:()=>{let e="16:8"===d?16:"18:6"===d?18:"20:4"===d?20:eo.goal.targetHours;el(d,e)},onStop:e=>void en(e),onEditStart:e=>er(e)})}),(0,i.jsx)(b.v,{data:eo,t:t,locale:a,onTapTemplate:e=>void eu(e)})]}),"weight"===ea&&(0,i.jsx)(C.m,{data:eo,t:t,onLogWeight:eC,onDeleteWeight:e=>void ek(e),onEditWeight:eD}),"activities"===ea&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(W.g,{t:t}),(0,i.jsx)(z.N,{data:eo,t:t,locale:a,onEditFast:e=>er(e),onEditMeal:e=>eS(e.id),onEditWeight:e=>eD(e.date),onDeleteFast:e=>void ev(e),onDeleteMeal:e=>void eb(e),onDeleteWeight:e=>void ek(e),onDeleteWalk:e=>void ey(e)})]}),"analytics"===ea&&(0,i.jsx)(F.Q,{data:eo,t:t,locale:a}),"settings"===ea&&(0,i.jsx)(S.f,{data:eo,t:t,onSave:n})]})})]}),(0,i.jsx)(q,{"aria-label":t("forma.log"),onClick:()=>ei(),children:(0,i.jsx)(c.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(k.Y,{open:L,onClose:es,data:eo,t:t,initialMode:U,editing:V,onStartFast:(e,a)=>void el(e,a),onStopFast:()=>void ed(),onLogPastFast:(e,a,t,i)=>void ec(e,a,t,i),onEditFast:(e,a,t,i,s)=>void eg(e,a,t,i,s),onLogMeal:(e,a,t,i,s)=>void em(e,a,t,i,s),onEditMeal:(e,a,t,i,s,o)=>void ew(e,a,t,i,s,o),onLogWeight:(e,a)=>void ep(e,a),onEditWeight:(e,a)=>void eh(e,a),onLogWalk:(e,a)=>void ef(e,a),onEditWalk:(e,a,t)=>void ex(e,a,t)}),(0,i.jsx)(E.N,{open:Z,onClose:()=>ee(!1),t:t})]})})},{}))}}]);