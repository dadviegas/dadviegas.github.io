"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["362"],{73935(e,a,t){t.r(a),t.d(a,{default:()=>G});var i=t(65723),s=t(37991),o=t(36859),l=t.n(o),n=t(72799),d=t(6063),r=t(80884),c=t(28170),g=t(28751),m=t(54041),w=t(20948),p=t(72552),f=t(71589),h=t(68477),x=t(25405),u=t(20483),b=t(39276),k=t(15742),v=t(37103),y=t(52128),j=t(59446),$=t(92152),C=t(20429),S=t(4406),D=t(63709),F=t(90429);let z="#7fb77e",M=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,E=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,T=l().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,W=l().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,L=l().div`
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  flex: 1;
  animation: ${M} 0.25s ease both;
  min-width: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding: ${d.w4.spacing.md};
    gap: ${d.w4.spacing.md};
  }
`,A=l().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-left: 2px solid ${z};
  border-radius: ${d.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${d.w4.spacing.lg};
  gap: ${d.w4.spacing.md};
  transition: border-color 0.14s ease;
`,P=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${d.w4.spacing.sm};
  height: 100%;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,I=l().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 100%;
`,O=l().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  line-height: 1;
`,_=l().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${d.w4.colors.mainTextMuted};
`;l().div`
  /* Phase 2 seam — FormaGrid drops in here */
  flex: 1;
  min-height: 0;
`;let Y=l().div`
  display: flex;
  gap: 4px;
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.lg} 0;
  border-bottom: 1px solid ${d.w4.colors.border};
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  flex-shrink: 0;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding-left: ${d.w4.spacing.md};
    padding-right: ${d.w4.spacing.md};
  }
`,H=l().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?z:"transparent"};
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
`;l().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${d.w4.spacing.md};
  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;let B=l().button`
  position: fixed;
  bottom: max(${d.w4.spacing.md}, env(safe-area-inset-bottom, ${d.w4.spacing.md}));
  right: ${d.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${z};
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
`;function G({topBarRight:e}){let[a]=(0,c.Ym)(),t=(0,s.useMemo)(()=>(0,c.Nx)(a,w.A),[a]),{data:o,loaded:l,save:n}=(0,g.useForma)(),[d,z]=(0,s.useState)("16:8"),[M,R]=(0,s.useState)(!1),[K,N]=(0,s.useState)(void 0),[Q,U]=(0,s.useState)(null),[q,J]=(0,s.useState)("today"),V=(0,s.useCallback)((e,a)=>{N(e),U(a??null),R(!0)},[]),X=(0,s.useCallback)(()=>{R(!1),N(void 0),U(null)},[]),Z=o??{sessions:[],meals:[],weights:[],walks:[],templates:g.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},ee=(0,s.useCallback)(async(e,a)=>{let t={...Z,sessions:[...Z.sessions,{id:(0,m.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[Z,n]),ea=(0,s.useCallback)(async e=>{let a={...Z,sessions:Z.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[Z,n]),et=(0,s.useCallback)(async()=>{let e=Z.sessions.find(e=>void 0===e.endedAt);e&&await ea(e)},[Z,ea]),ei=(0,s.useCallback)(e=>{V(void 0,{kind:"fast",entry:e})},[V]),es=(0,s.useCallback)(async(e,a,t,i)=>{let s={...Z,sessions:[...Z.sessions,{id:(0,m.z)(),startedAt:t,endedAt:i,targetHours:a,protocol:e}]};await n(s)},[Z,n]),eo=(0,s.useCallback)(async(e,a,t,i,s)=>{let o={...Z,sessions:Z.sessions.map(o=>o.id===e?{...o,protocol:a,targetHours:t,startedAt:i,endedAt:s}:o)};await n(o)},[Z,n]),el=(0,s.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...Z,meals:[...Z.meals,{id:(0,m.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[Z,n]),en=(0,s.useCallback)(async(e,a,t,i,s,o)=>{let l={...Z,meals:Z.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[Z,n]),ed=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=Z.weights.filter(e=>e.date!==a),i={...Z,weights:[...t,{date:a,kg:e}]};await n(i)},[Z,n]),er=(0,s.useCallback)(async(e,a)=>{let t={...Z,weights:Z.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[Z,n]),ec=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...Z,walks:[...Z.walks,{id:(0,m.z)(),date:a,minutes:e}]};await n(t)},[Z,n]),eg=(0,s.useCallback)(async(e,a,t)=>{let i={...Z,walks:Z.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[Z,n]),em=(0,s.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...Z,meals:[...Z.meals,{id:(0,m.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[Z,n]),ew=(0,s.useCallback)(async e=>{let a={...Z,meals:Z.meals.filter(a=>a.id!==e)};await n(a)},[Z,n]),ep=(0,s.useCallback)(async e=>{let a={...Z,weights:Z.weights.filter(a=>a.date!==e)};await n(a)},[Z,n]),ef=(0,s.useCallback)(async e=>{let a={...Z,walks:Z.walks.filter(a=>a.date!==e)};await n(a)},[Z,n]),eh=(0,s.useCallback)(async e=>{let a={...Z,sessions:Z.sessions.filter(a=>a.id!==e)};await n(a)},[Z,n]),ex=(0,s.useCallback)(()=>V("meal"),[V]),eu=(0,s.useCallback)(()=>V("walk"),[V]),eb=(0,s.useCallback)(()=>V("weight"),[V]),ek=(0,s.useCallback)(e=>{let a=Z.meals.find(a=>a.id===e);a&&V("meal",{kind:"meal",entry:a})},[Z.meals,V]),ev=(0,s.useCallback)(e=>{let a=Z.weights.find(a=>a.date===e);a&&V("weight",{kind:"weight",entry:a})},[Z.weights,V]),ey=(0,s.useCallback)(async e=>{switch(e.kind){case"fast":await ee(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await el(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await ed(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await ec(e.walkMinutes)}},[ee,el,ed,ec]),ej=(0,g.streakDays)(Z.sessions,Z.goal.targetHours),e$=(0,g.avgFastDuration)(Z.sessions,30),eC=Z.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(r.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)(E,{children:[(0,i.jsxs)(Y,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(H,{role:"tab","aria-selected":"today"===q,active:"today"===q,onClick:()=>J("today"),children:t("forma.tab.today")}),(0,i.jsx)(H,{role:"tab","aria-selected":"fasting"===q,active:"fasting"===q,onClick:()=>J("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(H,{role:"tab","aria-selected":"weight"===q,active:"weight"===q,onClick:()=>J("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(H,{role:"tab","aria-selected":"activities"===q,active:"activities"===q,onClick:()=>J("activities"),children:t("forma.tab.activities")}),(0,i.jsx)(H,{role:"tab","aria-selected":"analytics"===q,active:"analytics"===q,onClick:()=>J("analytics"),children:t("forma.tab.analytics")}),(0,i.jsx)(H,{role:"tab","aria-selected":"settings"===q,active:"settings"===q,onClick:()=>J("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(T,{children:["fasting"===q&&(0,i.jsx)(f.B,{t:t,active:d,onChange:z}),(0,i.jsx)(W,{children:(0,i.jsxs)(L,{children:["today"===q&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.F,{t:t,onParsed:e=>void ey(e)}),(0,i.jsx)(S.C,{t:t,cards:[{id:"mini-fast",defaultSize:"sm",render:()=>(0,i.jsx)(y.g,{data:Z,t:t,onClick:()=>J("fasting")})},{id:"mini-weight",defaultSize:"sm",render:()=>(0,i.jsx)(j.S,{data:Z,t:t,onClick:()=>J("weight")})},{id:"today",defaultSize:"lg",render:()=>(0,i.jsx)(k._,{data:Z,t:t,onLogMeal:ex,onLogWalk:eu,onLogWeight:eb,onDeleteMeal:e=>void ew(e),onEditMeal:ek})},{id:"ask",defaultSize:"lg",render:()=>(0,i.jsx)(v.j,{data:Z,t:t,locale:a})},{id:"week",defaultSize:"lg",render:()=>(0,i.jsx)(u.v,{data:Z,t:t,locale:a,onTapTemplate:e=>void em(e)})},{id:"stats",defaultSize:"md",render:()=>(0,i.jsxs)(P,{children:[(0,i.jsxs)(I,{children:[(0,i.jsx)(O,{children:ej}),(0,i.jsx)(_,{children:t("forma.streak",{n:ej})})]}),(0,i.jsxs)(I,{children:[(0,i.jsx)(O,{children:e$>0?e$.toFixed(1):"—"}),(0,i.jsx)(_,{children:t("forma.hero.avgDuration")})]}),eC&&(0,i.jsxs)(I,{children:[(0,i.jsx)(O,{children:eC.kg.toFixed(1)}),(0,i.jsx)(_,{children:t("forma.weight.label")})]})]})}]})]}),"fasting"===q&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.P,{t:t,active:d,onChange:z}),(0,i.jsx)(A,{children:(0,i.jsx)(p.k,{data:Z,t:t,onStart:()=>{let e="16:8"===d?16:"18:6"===d?18:"20:4"===d?20:Z.goal.targetHours;ee(d,e)},onStop:e=>void ea(e),onEditStart:e=>ei(e)})}),(0,i.jsx)(u.v,{data:Z,t:t,locale:a,onTapTemplate:e=>void em(e)})]}),"weight"===q&&(0,i.jsx)($.m,{data:Z,t:t,onLogWeight:eb,onDeleteWeight:e=>void ep(e),onEditWeight:ev}),"activities"===q&&(0,i.jsx)(F.N,{data:Z,t:t,locale:a,onEditFast:e=>ei(e),onEditMeal:e=>ek(e.id),onEditWeight:e=>ev(e.date),onDeleteFast:e=>void eh(e),onDeleteMeal:e=>void ew(e),onDeleteWeight:e=>void ep(e),onDeleteWalk:e=>void ef(e)}),"analytics"===q&&(0,i.jsx)(D.Q,{data:Z,t:t,locale:a}),"settings"===q&&(0,i.jsx)(C.f,{data:Z,t:t,onSave:n})]})})]}),(0,i.jsx)(B,{"aria-label":t("forma.log"),onClick:()=>V(),children:(0,i.jsx)(r.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(b.Y,{open:M,onClose:X,data:Z,t:t,initialMode:K,editing:Q,onStartFast:(e,a)=>void ee(e,a),onStopFast:()=>void et(),onLogPastFast:(e,a,t,i)=>void es(e,a,t,i),onEditFast:(e,a,t,i,s)=>void eo(e,a,t,i,s),onLogMeal:(e,a,t,i,s)=>void el(e,a,t,i,s),onEditMeal:(e,a,t,i,s,o)=>void en(e,a,t,i,s,o),onLogWeight:(e,a)=>void ed(e,a),onEditWeight:(e,a)=>void er(e,a),onLogWalk:(e,a)=>void ec(e,a),onEditWalk:(e,a,t)=>void eg(e,a,t)})]})})}}}]);