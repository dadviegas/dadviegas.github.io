"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["512"],{58997(e,a,t){var i=t(62727);a.createRoot=i.createRoot,i.hydrateRoot},13611(e,a,t){var i=t(65723),s=t(58997),o=t(37991),l=t(36859),n=t.n(l),d=t(72799),r=t(6063),c=t(80884),g=t(28170),m=t(60033),p=t(54041),w=t(20948),h=t(72552),f=t(71589),x=t(68477),u=t(25405),b=t(20483),k=t(17102),v=t(15742),y=t(37103),j=t(52128),$=t(59446),C=t(92152),S=t(20429),D=t(4406),F=t(63709),M=t(90429),z=t(22684),E=t(33499),T=t(24470),W=t(86704),A=t(69568);let L="#7fb77e",I=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,O=n().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,P=n().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,R=n().main`
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
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  min-width: 0;
`,B=n().div`
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
`,H=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${r.w4.spacing.sm};
  height: 100%;

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,G=n().div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  padding: ${r.w4.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 100%;
`,N=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${r.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${r.w4.colors.mainText};
  line-height: 1;
`,K=n().span`
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
`;let Q=n().div`
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
`,q=n().button`
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
`;let U=n().button`
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
`,J=document.getElementById("root");if(!J)throw Error("Root element #root not found");(0,s.createRoot)(J).render((0,i.jsx)(function({topBarRight:e}){let[a]=(0,g.Ym)(),t=(0,o.useMemo)(()=>(0,g.Nx)(a,w.A),[a]),{data:s,loaded:l,save:n}=(0,m.useForma)(),[d,r]=(0,o.useState)("16:8"),[L,I]=(0,o.useState)(!1),[J,V]=(0,o.useState)(void 0),[X,Z]=(0,o.useState)(null),[ee,ea]=(0,o.useState)(!1),[et,ei]=(0,o.useState)("today"),es=(0,o.useCallback)((e,a)=>{V(e),Z(a??null),I(!0)},[]),eo=(0,o.useCallback)(()=>{I(!1),V(void 0),Z(null)},[]),el=s??{...m.EMPTY_FORMA_DATA,templates:m.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},en=(0,o.useCallback)(async(e,a)=>{let t={...el,sessions:[...el.sessions,{id:(0,p.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[el,n]),ed=(0,o.useCallback)(async e=>{let a={...el,sessions:el.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[el,n]),er=(0,o.useCallback)(async()=>{let e=el.sessions.find(e=>void 0===e.endedAt);e&&await ed(e)},[el,ed]),ec=(0,o.useCallback)(e=>{es(void 0,{kind:"fast",entry:e})},[es]),eg=(0,o.useCallback)(async(e,a,t,i)=>{let s={...el,sessions:[...el.sessions,{id:(0,p.z)(),startedAt:t,endedAt:i,targetHours:a,protocol:e}]};await n(s)},[el,n]),em=(0,o.useCallback)(async(e,a,t,i,s)=>{let o={...el,sessions:el.sessions.map(o=>o.id===e?{...o,protocol:a,targetHours:t,startedAt:i,endedAt:s}:o)};await n(o)},[el,n]),ep=(0,o.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...el,meals:[...el.meals,{id:(0,p.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[el,n]),ew=(0,o.useCallback)(async(e,a,t,i,s,o)=>{let l={...el,meals:el.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[el,n]),eh=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=el.weights.filter(e=>e.date!==a),i={...el,weights:[...t,{date:a,kg:e}]};await n(i)},[el,n]),ef=(0,o.useCallback)(async(e,a)=>{let t={...el,weights:el.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[el,n]),ex=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...el,walks:[...el.walks,{id:(0,p.z)(),date:a,minutes:e}]};await n(t)},[el,n]),eu=(0,o.useCallback)(async(e,a,t)=>{let i={...el,walks:el.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[el,n]),eb=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...el,meals:[...el.meals,{id:(0,p.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[el,n]),ek=(0,o.useCallback)(async e=>{let a={...el,meals:el.meals.filter(a=>a.id!==e)};await n(a)},[el,n]),ev=(0,o.useCallback)(async e=>{let a={...el,weights:el.weights.filter(a=>a.date!==e)};await n(a)},[el,n]),ey=(0,o.useCallback)(async e=>{let a={...el,walks:el.walks.filter(a=>a.date!==e)};await n(a)},[el,n]),ej=(0,o.useCallback)(async e=>{let a={...el,sessions:el.sessions.filter(a=>a.id!==e)};await n(a)},[el,n]),e$=(0,o.useCallback)(()=>es("meal"),[es]),eC=(0,o.useCallback)(()=>es("walk"),[es]),eS=(0,o.useCallback)(()=>es("weight"),[es]),eD=(0,o.useCallback)(e=>{let a=el.meals.find(a=>a.id===e);a&&es("meal",{kind:"meal",entry:a})},[el.meals,es]),eF=(0,o.useCallback)(e=>{let a=el.weights.find(a=>a.date===e);a&&es("weight",{kind:"weight",entry:a})},[el.weights,es]),eM=(0,o.useCallback)(async e=>{switch(e.kind){case"fast":await en(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await ep(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await eh(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await ex(e.walkMinutes)}},[en,ep,eh,ex]),ez=(0,m.streakDays)(el.sessions,el.goal.targetHours),eE=(0,m.avgFastDuration)(el.sessions,30),eT=el.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(c.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)(O,{children:[(0,i.jsxs)(Q,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(q,{role:"tab","aria-selected":"today"===et,active:"today"===et,onClick:()=>ei("today"),children:t("forma.tab.today")}),(0,i.jsx)(q,{role:"tab","aria-selected":"fasting"===et,active:"fasting"===et,onClick:()=>ei("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(q,{role:"tab","aria-selected":"weight"===et,active:"weight"===et,onClick:()=>ei("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(q,{role:"tab","aria-selected":"activities"===et,active:"activities"===et,onClick:()=>ei("activities"),children:t("forma.tab.activities")}),(0,i.jsx)(q,{role:"tab","aria-selected":"analytics"===et,active:"analytics"===et,onClick:()=>ei("analytics"),children:t("forma.tab.analytics")}),(0,i.jsx)(q,{role:"tab","aria-selected":"coach"===et,active:"coach"===et,onClick:()=>ei("coach"),children:t("forma.tab.coach")}),(0,i.jsx)(q,{role:"tab","aria-selected":"settings"===et,active:"settings"===et,onClick:()=>ei("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(P,{children:["fasting"===et&&(0,i.jsx)(f.B,{t:t,active:d,onChange:r}),(0,i.jsx)(R,{children:(0,i.jsxs)(_,{children:["today"===et&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.F,{t:t,onParsed:e=>void eM(e)}),(0,i.jsx)(D.C,{t:t,cards:[{id:"mini-fast",defaultSize:"sm",render:()=>(0,i.jsx)(j.g,{data:el,t:t,onClick:()=>ei("fasting")})},{id:"mini-weight",defaultSize:"sm",render:()=>(0,i.jsx)($.S,{data:el,t:t,onClick:()=>ei("weight")})},{id:"today",defaultSize:"lg",render:()=>(0,i.jsx)(v._,{data:el,t:t,onLogMeal:e$,onLogWalk:eC,onLogWeight:eS,onDeleteMeal:e=>void ek(e),onEditMeal:eD})},{id:"ask",defaultSize:"lg",render:()=>(0,i.jsx)(y.j,{data:el,t:t,locale:a})},{id:"week",defaultSize:"lg",render:()=>(0,i.jsx)(b.v,{data:el,t:t,locale:a,onTapTemplate:e=>void eb(e)})},{id:"stats",defaultSize:"md",render:()=>(0,i.jsxs)(H,{children:[(0,i.jsxs)(G,{children:[(0,i.jsx)(N,{children:ez}),(0,i.jsx)(K,{children:t("forma.streak",{n:ez})})]}),(0,i.jsxs)(G,{children:[(0,i.jsx)(N,{children:eE>0?eE.toFixed(1):"—"}),(0,i.jsx)(K,{children:t("forma.hero.avgDuration")})]}),eT&&(0,i.jsxs)(G,{children:[(0,i.jsx)(N,{children:eT.kg.toFixed(1)}),(0,i.jsx)(K,{children:t("forma.weight.label")})]})]})}]})]}),"coach"===et&&(0,i.jsxs)(Y,{children:[(0,i.jsx)(z.q,{t:t,onOpenCheckIn:()=>ea(!0),onOpenSettings:()=>ei("settings")}),(0,i.jsx)(T.s,{t:t}),(0,i.jsx)(W.g,{t:t}),(0,i.jsx)(A.c,{t:t,locale:a})]}),"fasting"===et&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.P,{t:t,active:d,onChange:r}),(0,i.jsx)(B,{children:(0,i.jsx)(h.k,{data:el,t:t,onStart:()=>{let e="16:8"===d?16:"18:6"===d?18:"20:4"===d?20:el.goal.targetHours;en(d,e)},onStop:e=>void ed(e),onEditStart:e=>ec(e)})}),(0,i.jsx)(b.v,{data:el,t:t,locale:a,onTapTemplate:e=>void eb(e)})]}),"weight"===et&&(0,i.jsx)(C.m,{data:el,t:t,onLogWeight:eS,onDeleteWeight:e=>void ev(e),onEditWeight:eF}),"activities"===et&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(M.N,{data:el,t:t,locale:a,onEditFast:e=>ec(e),onEditMeal:e=>eD(e.id),onEditWeight:e=>eF(e.date),onDeleteFast:e=>void ej(e),onDeleteMeal:e=>void ek(e),onDeleteWeight:e=>void ev(e),onDeleteWalk:e=>void ey(e)})}),"analytics"===et&&(0,i.jsx)(F.Q,{data:el,t:t,locale:a}),"settings"===et&&(0,i.jsx)(S.f,{data:el,t:t,onSave:n})]})})]}),(0,i.jsx)(U,{"aria-label":t("forma.log"),onClick:()=>es(),children:(0,i.jsx)(c.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(k.Y,{open:L,onClose:eo,data:el,t:t,initialMode:J,editing:X,onStartFast:(e,a)=>void en(e,a),onStopFast:()=>void er(),onLogPastFast:(e,a,t,i)=>void eg(e,a,t,i),onEditFast:(e,a,t,i,s)=>void em(e,a,t,i,s),onLogMeal:(e,a,t,i,s)=>void ep(e,a,t,i,s),onEditMeal:(e,a,t,i,s,o)=>void ew(e,a,t,i,s,o),onLogWeight:(e,a)=>void eh(e,a),onEditWeight:(e,a)=>void ef(e,a),onLogWalk:(e,a)=>void ex(e,a),onEditWalk:(e,a,t)=>void eu(e,a,t)}),(0,i.jsx)(E.N,{open:ee,onClose:()=>ea(!1),t:t})]})})},{}))}}]);