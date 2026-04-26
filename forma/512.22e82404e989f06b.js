"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["512"],{8997(e,a,t){var i=t(2727);a.createRoot=i.createRoot,i.hydrateRoot},3611(e,a,t){var i=t(5723),s=t(8997),o=t(7991),l=t(6859),n=t.n(l),d=t(2799),r=t(4764),c=t(5030),g=t(8170),m=t(2906),w=t(4041),p=t(948),h=t(2552),f=t(1589),x=t(8477),u=t(5405),b=t(483),k=t(9276),v=t(5742),y=t(7103),j=t(2128),$=t(9446),C=t(2152),S=t(429),D=t(4406),F=t(3709),z=t(2810);let M="#7fb77e",E=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,T=n().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,W=n().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,L=n().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,A=n().div`
  padding: ${r.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  flex: 1;
  animation: ${E} 0.25s ease both;
  min-width: 0;

  @media (max-width: ${r.w4.breakpoints.md}) {
    padding: ${r.w4.spacing.md};
    gap: ${r.w4.spacing.md};
  }
`,I=n().div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-left: 2px solid ${M};
  border-radius: ${r.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${r.w4.spacing.lg};
  gap: ${r.w4.spacing.md};
  transition: border-color 0.14s ease;
`,P=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${r.w4.spacing.sm};
  height: 100%;

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,R=n().div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  padding: ${r.w4.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 100%;
`,O=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${r.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${r.w4.colors.mainText};
  line-height: 1;
`,_=n().span`
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
`;let Y=n().div`
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
`,B=n().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?M:"transparent"};
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
`;let H=n().button`
  position: fixed;
  bottom: max(${r.w4.spacing.md}, env(safe-area-inset-bottom, ${r.w4.spacing.md}));
  right: ${r.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${M};
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
`,G=document.getElementById("root");if(!G)throw Error("Root element #root not found");(0,s.createRoot)(G).render((0,i.jsx)(function({topBarRight:e}){let[a]=(0,g.Ym)(),t=(0,o.useMemo)(()=>(0,g.Nx)(a,p.A),[a]),{data:s,loaded:l,save:n}=(0,m.useForma)(),[d,M]=(0,o.useState)("16:8"),[E,G]=(0,o.useState)(!1),[K,N]=(0,o.useState)(void 0),[Q,U]=(0,o.useState)(null),[q,J]=(0,o.useState)("today"),V=(0,o.useCallback)((e,a)=>{N(e),U(a??null),G(!0)},[]),X=(0,o.useCallback)(()=>{G(!1),N(void 0),U(null)},[]),Z=s??{sessions:[],meals:[],weights:[],walks:[],templates:m.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},ee=(0,o.useCallback)(async(e,a)=>{let t={...Z,sessions:[...Z.sessions,{id:(0,w.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[Z,n]),ea=(0,o.useCallback)(async e=>{let a={...Z,sessions:Z.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[Z,n]),et=(0,o.useCallback)(async()=>{let e=Z.sessions.find(e=>void 0===e.endedAt);e&&await ea(e)},[Z,ea]),ei=(0,o.useCallback)(e=>{V(void 0,{kind:"fast",entry:e})},[V]),es=(0,o.useCallback)(async(e,a,t,i)=>{let s={...Z,sessions:[...Z.sessions,{id:(0,w.z)(),startedAt:t,endedAt:i,targetHours:a,protocol:e}]};await n(s)},[Z,n]),eo=(0,o.useCallback)(async(e,a,t,i,s)=>{let o={...Z,sessions:Z.sessions.map(o=>o.id===e?{...o,protocol:a,targetHours:t,startedAt:i,endedAt:s}:o)};await n(o)},[Z,n]),el=(0,o.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...Z,meals:[...Z.meals,{id:(0,w.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[Z,n]),en=(0,o.useCallback)(async(e,a,t,i,s,o)=>{let l={...Z,meals:Z.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[Z,n]),ed=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=Z.weights.filter(e=>e.date!==a),i={...Z,weights:[...t,{date:a,kg:e}]};await n(i)},[Z,n]),er=(0,o.useCallback)(async(e,a)=>{let t={...Z,weights:Z.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[Z,n]),ec=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...Z,walks:[...Z.walks,{id:(0,w.z)(),date:a,minutes:e}]};await n(t)},[Z,n]),eg=(0,o.useCallback)(async(e,a,t)=>{let i={...Z,walks:Z.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[Z,n]),em=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...Z,meals:[...Z.meals,{id:(0,w.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[Z,n]),ew=(0,o.useCallback)(async e=>{let a={...Z,meals:Z.meals.filter(a=>a.id!==e)};await n(a)},[Z,n]),ep=(0,o.useCallback)(async e=>{let a={...Z,weights:Z.weights.filter(a=>a.date!==e)};await n(a)},[Z,n]),eh=(0,o.useCallback)(async e=>{let a={...Z,walks:Z.walks.filter(a=>a.date!==e)};await n(a)},[Z,n]),ef=(0,o.useCallback)(async e=>{let a={...Z,sessions:Z.sessions.filter(a=>a.id!==e)};await n(a)},[Z,n]),ex=(0,o.useCallback)(()=>V("meal"),[V]),eu=(0,o.useCallback)(()=>V("walk"),[V]),eb=(0,o.useCallback)(()=>V("weight"),[V]),ek=(0,o.useCallback)(e=>{let a=Z.meals.find(a=>a.id===e);a&&V("meal",{kind:"meal",entry:a})},[Z.meals,V]),ev=(0,o.useCallback)(e=>{let a=Z.weights.find(a=>a.date===e);a&&V("weight",{kind:"weight",entry:a})},[Z.weights,V]),ey=(0,o.useCallback)(async e=>{switch(e.kind){case"fast":await ee(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await el(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await ed(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await ec(e.walkMinutes)}},[ee,el,ed,ec]),ej=(0,m.streakDays)(Z.sessions,Z.goal.targetHours),e$=(0,m.avgFastDuration)(Z.sessions,30),eC=Z.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(r.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)(T,{children:[(0,i.jsxs)(Y,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(B,{role:"tab","aria-selected":"today"===q,active:"today"===q,onClick:()=>J("today"),children:t("forma.tab.today")}),(0,i.jsx)(B,{role:"tab","aria-selected":"fasting"===q,active:"fasting"===q,onClick:()=>J("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(B,{role:"tab","aria-selected":"weight"===q,active:"weight"===q,onClick:()=>J("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(B,{role:"tab","aria-selected":"activities"===q,active:"activities"===q,onClick:()=>J("activities"),children:t("forma.tab.activities")}),(0,i.jsx)(B,{role:"tab","aria-selected":"analytics"===q,active:"analytics"===q,onClick:()=>J("analytics"),children:t("forma.tab.analytics")}),(0,i.jsx)(B,{role:"tab","aria-selected":"settings"===q,active:"settings"===q,onClick:()=>J("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(W,{children:["fasting"===q&&(0,i.jsx)(f.B,{t:t,active:d,onChange:M}),(0,i.jsx)(L,{children:(0,i.jsxs)(A,{children:["today"===q&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.F,{t:t,onParsed:e=>void ey(e)}),(0,i.jsx)(D.C,{t:t,cards:[{id:"mini-fast",defaultSize:"sm",render:()=>(0,i.jsx)(j.g,{data:Z,t:t,onClick:()=>J("fasting")})},{id:"mini-weight",defaultSize:"sm",render:()=>(0,i.jsx)($.S,{data:Z,t:t,onClick:()=>J("weight")})},{id:"today",defaultSize:"lg",render:()=>(0,i.jsx)(v._,{data:Z,t:t,onLogMeal:ex,onLogWalk:eu,onLogWeight:eb,onDeleteMeal:e=>void ew(e),onEditMeal:ek})},{id:"ask",defaultSize:"lg",render:()=>(0,i.jsx)(y.j,{data:Z,t:t,locale:a})},{id:"week",defaultSize:"lg",render:()=>(0,i.jsx)(b.v,{data:Z,t:t,locale:a,onTapTemplate:e=>void em(e)})},{id:"stats",defaultSize:"md",render:()=>(0,i.jsxs)(P,{children:[(0,i.jsxs)(R,{children:[(0,i.jsx)(O,{children:ej}),(0,i.jsx)(_,{children:t("forma.streak",{n:ej})})]}),(0,i.jsxs)(R,{children:[(0,i.jsx)(O,{children:e$>0?e$.toFixed(1):"—"}),(0,i.jsx)(_,{children:t("forma.hero.avgDuration")})]}),eC&&(0,i.jsxs)(R,{children:[(0,i.jsx)(O,{children:eC.kg.toFixed(1)}),(0,i.jsx)(_,{children:t("forma.weight.label")})]})]})}]})]}),"fasting"===q&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.P,{t:t,active:d,onChange:M}),(0,i.jsx)(I,{children:(0,i.jsx)(h.k,{data:Z,t:t,onStart:()=>{let e="16:8"===d?16:"18:6"===d?18:"20:4"===d?20:Z.goal.targetHours;ee(d,e)},onStop:e=>void ea(e),onEditStart:e=>ei(e)})}),(0,i.jsx)(b.v,{data:Z,t:t,locale:a,onTapTemplate:e=>void em(e)})]}),"weight"===q&&(0,i.jsx)(C.m,{data:Z,t:t,onLogWeight:eb,onDeleteWeight:e=>void ep(e),onEditWeight:ev}),"activities"===q&&(0,i.jsx)(z.N,{data:Z,t:t,locale:a,onEditFast:e=>ei(e),onEditMeal:e=>ek(e.id),onEditWeight:e=>ev(e.date),onDeleteFast:e=>void ef(e),onDeleteMeal:e=>void ew(e),onDeleteWeight:e=>void ep(e),onDeleteWalk:e=>void eh(e)}),"analytics"===q&&(0,i.jsx)(F.Q,{data:Z,t:t,locale:a}),"settings"===q&&(0,i.jsx)(S.f,{data:Z,t:t,onSave:n})]})})]}),(0,i.jsx)(H,{"aria-label":t("forma.log"),onClick:()=>V(),children:(0,i.jsx)(c.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(k.Y,{open:E,onClose:X,data:Z,t:t,initialMode:K,editing:Q,onStartFast:(e,a)=>void ee(e,a),onStopFast:()=>void et(),onLogPastFast:(e,a,t,i)=>void es(e,a,t,i),onEditFast:(e,a,t,i,s)=>void eo(e,a,t,i,s),onLogMeal:(e,a,t,i,s)=>void el(e,a,t,i,s),onEditMeal:(e,a,t,i,s,o)=>void en(e,a,t,i,s,o),onLogWeight:(e,a)=>void ed(e,a),onEditWeight:(e,a)=>void er(e,a),onLogWalk:(e,a)=>void ec(e,a),onEditWalk:(e,a,t)=>void eg(e,a,t)})]})})},{}))}}]);