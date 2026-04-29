"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["512"],{58997(e,a,t){var i=t(62727);a.createRoot=i.createRoot,i.hydrateRoot},13611(e,a,t){var i=t(65723),o=t(58997),s=t(37991),l=t(36859),n=t.n(l),r=t(72799),d=t(6063),c=t(63236),w=t(28170),m=t(47693),p=t(54041),g=t(20948),h=t(25405),x=t(20483),b=t(17102),u=t(19652),f=t(77112),k=t(20429),v=t(71575),y=t(90429),C=t(22684),j=t(33499),$=t(24470),S=t(86704),D=t(69568),M=t(84391),F=t(7434),E=t(78531),T=t(79793),W=t(36971),z=t(359),L=t(82167);let A="#7fb77e",I=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,O=n().div`
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
`,P=n().div`
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  flex: 1;
  animation: ${I} 0.25s ease both;
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
`,B=n().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?A:"transparent"};
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
  background: ${({active:e})=>e?`${A}14`:"transparent"};
  border: 1px solid ${({active:e})=>e?`${A}60`:d.w4.colors.border};
  border-radius: 99px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({active:e})=>e?A:d.w4.colors.mainTextMuted};
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
  background: ${A};
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
`,q=document.getElementById("root");if(!q)throw Error("Root element #root not found");(0,o.createRoot)(q).render((0,i.jsx)(function({topBarRight:e}){let[a]=(0,w.Ym)(),t=(0,s.useMemo)(()=>(0,w.Nx)(a,g.A),[a]),{data:o,loaded:l,save:n}=(0,m.useForma)(),[r,d]=(0,s.useState)(!1),[A,I]=(0,s.useState)(void 0),[q,J]=(0,s.useState)(null),[U,X]=(0,s.useState)(!1),[V,Z]=(0,s.useState)(!1),[ee,ea]=(0,s.useState)("today"),[et,ei]=(0,s.useState)("overview"),eo=(0,s.useCallback)((e,a)=>{I(e),J(a??null),d(!0)},[]),es=(0,s.useCallback)(()=>{d(!1),I(void 0),J(null)},[]),el=o??{...m.EMPTY_FORMA_DATA,templates:m.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},en=(0,s.useCallback)(async(e,a)=>{let t={...el,sessions:[...el.sessions,{id:(0,p.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[el,n]),er=(0,s.useCallback)(async e=>{let a={...el,sessions:el.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[el,n]),ed=(0,s.useCallback)(async()=>{let e=el.sessions.find(e=>void 0===e.endedAt);e&&await er(e)},[el,er]),ec=(0,s.useCallback)(e=>{eo(void 0,{kind:"fast",entry:e})},[eo]),ew=(0,s.useCallback)(async(e,a,t,i)=>{let o={...el,sessions:[...el.sessions,{id:(0,p.z)(),startedAt:t,endedAt:i,targetHours:a,protocol:e}]};await n(o)},[el,n]),em=(0,s.useCallback)(async(e,a,t,i,o)=>{let s={...el,sessions:el.sessions.map(s=>s.id===e?{...s,protocol:a,targetHours:t,startedAt:i,endedAt:o}:s)};await n(s)},[el,n]),ep=(0,s.useCallback)(async(e,a,t,i,o=new Date().toISOString().slice(0,10))=>{let s={...el,meals:[...el.meals,{id:(0,p.z)(),date:o,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(s)},[el,n]),eg=(0,s.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...el,meals:[...el.meals,{...e,id:(0,p.z)(),date:a,createdAt:Date.now()}]};await n(t)},[el,n]),eh=(0,s.useCallback)(async(e,a,t,i,o,s)=>{let l={...el,meals:el.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:o||void 0,date:s}:l)};await n(l)},[el,n]),ex=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=el.weights.filter(e=>e.date!==a),i={...el,weights:[...t,{date:a,kg:e}]};await n(i)},[el,n]),eb=(0,s.useCallback)(async(e,a)=>{let t={...el,weights:el.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[el,n]),eu=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...el,walks:[...el.walks,{id:(0,p.z)(),date:a,minutes:e}]};await n(t)},[el,n]),ef=(0,s.useCallback)(async(e,a,t)=>{let i={...el,walks:el.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[el,n]),ek=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={id:(0,p.z)(),date:a,ml:e,createdAt:Date.now()},i={...el,water:[...el.water??[],t]};await n(i)},[el,n]),ev=(0,s.useCallback)(async(e,a,t)=>{let i={...el,water:(el.water??[]).map(i=>i.id===e?{...i,ml:a,date:t}:i)};await n(i)},[el,n]),ey=(0,s.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...el,meals:[...el.meals,{id:(0,p.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[el,n]),eC=(0,s.useCallback)(async(e,a)=>{let t=new Date().toISOString().slice(0,10),i={...el,meals:[...el.meals,{id:(0,p.z)(),date:t,slot:e.slot,proteinG:e.proteinG,kcal:e.kcal,notes:`🥤 ${a}`,createdAt:Date.now()}]};await n(i)},[el,n]),ej=(0,s.useCallback)(async e=>{let a={...el,meals:el.meals.filter(a=>a.id!==e)};await n(a)},[el,n]),e$=(0,s.useCallback)(async e=>{let a={...el,weights:el.weights.filter(a=>a.date!==e)};await n(a)},[el,n]),eS=(0,s.useCallback)(async e=>{let a={...el,walks:el.walks.filter(a=>a.date!==e)};await n(a)},[el,n]),eD=(0,s.useCallback)(async e=>{let a={...el,sessions:el.sessions.filter(a=>a.id!==e)};await n(a)},[el,n]),eM=(0,s.useCallback)(()=>eo("meal"),[eo]),eF=(0,s.useCallback)(()=>eo("walk"),[eo]),eE=(0,s.useCallback)(()=>eo("weight"),[eo]),eT=(0,s.useCallback)(e=>{let a=el.meals.find(a=>a.id===e);a&&eo("meal",{kind:"meal",entry:a})},[el.meals,eo]),eW=(0,s.useCallback)(e=>{let a=el.weights.find(a=>a.date===e);a&&eo("weight",{kind:"weight",entry:a})},[el.weights,eo]),ez=(0,s.useCallback)(async e=>{switch(e.kind){case"fast":await en(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await ep(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await ex(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await eu(e.walkMinutes);break;case"water":void 0!==e.waterMl&&await ek(e.waterMl)}},[en,ep,ex,eu,ek]),eL=(0,i.jsx)(c.K0,{title:t("forma.settings.cog.label"),onClick:()=>Z(!0),children:(0,i.jsx)(c.In,{name:"settings",size:16})});return(0,i.jsx)(c.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:(0,i.jsxs)(i.Fragment,{children:[eL,e]}),children:(0,i.jsxs)(O,{children:[(0,i.jsxs)(G,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(B,{role:"tab","aria-selected":"today"===ee,active:"today"===ee,onClick:()=>ea("today"),children:t("forma.tab.today")}),(0,i.jsx)(B,{role:"tab","aria-selected":"trends"===ee,active:"trends"===ee,onClick:()=>ea("trends"),children:t("forma.tab.trends")}),(0,i.jsx)(B,{role:"tab","aria-selected":"coach"===ee,active:"coach"===ee,onClick:()=>ea("coach"),children:t("forma.tab.coach")})]}),(0,i.jsx)(_,{children:(0,i.jsxs)(P,{children:["today"===ee&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(F.c,{data:el,t:t}),(0,i.jsxs)(R,{children:[(0,i.jsx)(E.F,{data:el,t:t,onClick:()=>eo("startFast")}),(0,i.jsx)(T.J,{data:el,t:t,onClick:()=>eo("weight")})]}),(0,i.jsx)(W.z,{data:el,t:t,onOpenSheet:eo}),(0,i.jsx)(z.e,{t:t,onLogShake:(e,a)=>void eC(e,a)}),(0,i.jsx)(h.F,{t:t,onParsed:e=>void ez(e)}),(0,i.jsx)(u._,{data:el,t:t,onLogMeal:eM,onLogWalk:eF,onLogWeight:eE,onLogWater:e=>void ek(e),onDeleteMeal:e=>void ej(e),onEditMeal:eT,onTapTemplate:e=>void ey(e)}),(0,i.jsx)(x.v,{data:el,t:t,locale:a,onTapTemplate:e=>void ey(e)})]}),"trends"===ee&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(K,{role:"tablist","aria-label":t("forma.trends.sub.aria"),children:[(0,i.jsx)(N,{role:"tab","aria-selected":"overview"===et,active:"overview"===et,onClick:()=>ei("overview"),children:t("forma.trends.sub.overview")}),(0,i.jsx)(N,{role:"tab","aria-selected":"weight"===et,active:"weight"===et,onClick:()=>ei("weight"),children:t("forma.trends.sub.weight")}),(0,i.jsx)(N,{role:"tab","aria-selected":"activities"===et,active:"activities"===et,onClick:()=>ei("activities"),children:t("forma.trends.sub.activities")})]}),"overview"===et&&(0,i.jsx)(v.Q,{data:el,t:t,locale:a}),"weight"===et&&(0,i.jsx)(f.m,{data:el,t:t,onLogWeight:eE,onDeleteWeight:e=>void e$(e),onEditWeight:eW}),"activities"===et&&(0,i.jsx)(y.N,{data:el,t:t,locale:a,onEditFast:e=>ec(e),onEditMeal:e=>eT(e.id),onDuplicateMeal:e=>void eg(e),onEditWeight:e=>eW(e.date),onDeleteFast:e=>void eD(e),onDeleteMeal:e=>void ej(e),onDeleteWeight:e=>void e$(e),onDeleteWalk:e=>void eS(e)})]}),"coach"===ee&&(0,i.jsxs)(Y,{children:[(0,i.jsx)(C.q,{t:t,onOpenCheckIn:()=>X(!0),onOpenSettings:()=>Z(!0)}),(0,i.jsx)($.s,{t:t}),(0,i.jsx)(S.g,{t:t}),(0,i.jsx)(M.v,{data:el,t:t,locale:a}),(0,i.jsx)(D.c,{t:t,locale:a})]})]})}),(0,i.jsx)(H,{"aria-label":t("forma.log"),onClick:()=>eo(),children:(0,i.jsx)(c.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(b.Y,{open:r,onClose:es,data:el,t:t,initialMode:A,editing:q,onStartFast:(e,a)=>void en(e,a),onStopFast:()=>void ed(),onLogPastFast:(e,a,t,i)=>void ew(e,a,t,i),onEditFast:(e,a,t,i,o)=>void em(e,a,t,i,o),onLogMeal:(e,a,t,i,o)=>void ep(e,a,t,i,o),onEditMeal:(e,a,t,i,o,s)=>void eh(e,a,t,i,o,s),onLogWeight:(e,a)=>void ex(e,a),onEditWeight:(e,a)=>void eb(e,a),onLogWalk:(e,a)=>void eu(e,a),onEditWalk:(e,a,t)=>void ef(e,a,t),onLogWater:(e,a)=>void ek(e,a),onEditWater:(e,a,t)=>void ev(e,a,t)}),(0,i.jsx)(j.N,{open:U,onClose:()=>X(!1),t:t}),(0,i.jsx)(L.X,{open:V,onClose:()=>Z(!1),ariaLabel:t("forma.settings.cog.label"),maxWidth:560,children:(0,i.jsx)(Q,{children:(0,i.jsx)(k.f,{data:el,t:t,onSave:n})})})]})})},{}))}}]);