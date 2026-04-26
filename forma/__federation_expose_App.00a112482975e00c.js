"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["362"],{3935(e,a,t){t.r(a),t.d(a,{default:()=>N});var i=t(5723),s=t(7991),o=t(6859),l=t.n(o),n=t(2799),r=t(4764),d=t(5030),c=t(8170),g=t(8837),m=t(4041),p=t(948),w=t(2552),f=t(1589),u=t(8477),h=t(5405),x=t(483),b=t(9276),k=t(5742),y=t(7103),v=t(2128),j=t(9446),$=t(950),C=t(2152),S=t(429),D=t(4406);let M="#7fb77e",z=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,F=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`,T=l().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,A=l().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,E=l().div`
  padding: ${r.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  flex: 1;
  animation: ${z} 0.25s ease both;
`,L=l().div`
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
`,W=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${r.w4.spacing.sm};

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,P=l().div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  padding: ${r.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,I=l().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${r.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${r.w4.colors.mainText};
  line-height: 1;
`,O=l().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${r.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${r.w4.colors.mainTextMuted};
`;l().div`
  /* Phase 2 seam — FormaGrid drops in here */
  flex: 1;
  min-height: 0;
`;let Y=l().div`
  display: flex;
  gap: 4px;
  padding: ${r.w4.spacing.sm} ${r.w4.spacing.lg} 0;
  border-bottom: 1px solid ${r.w4.colors.border};
`,_=l().button`
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
  &:hover { color: ${r.w4.colors.mainText}; }
`;l().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${r.w4.spacing.md};
  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;let H=l().button`
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
`;function N({topBarRight:e}){let[a]=(0,c.Ym)(),t=(0,s.useMemo)(()=>(0,c.Nx)(a,p.A),[a]),{data:o,loaded:l,save:n}=(0,g.useForma)(),[M,z]=(0,s.useState)("16:8"),[B,G]=(0,s.useState)(!1),[R,K]=(0,s.useState)(void 0),[Q,U]=(0,s.useState)(null),[q,J]=(0,s.useState)("today"),V=(0,s.useCallback)((e,a)=>{K(e),U(a??null),G(!0)},[]),X=(0,s.useCallback)(()=>{G(!1),K(void 0),U(null)},[]),Z=o??{sessions:[],meals:[],weights:[],walks:[],templates:g.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},ee=(0,s.useCallback)(async(e,a)=>{let t={...Z,sessions:[...Z.sessions,{id:(0,m.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[Z,n]),ea=(0,s.useCallback)(async e=>{let a={...Z,sessions:Z.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[Z,n]),et=(0,s.useCallback)(async()=>{let e=Z.sessions.find(e=>void 0===e.endedAt);e&&await ea(e)},[Z,ea]),ei=(0,s.useCallback)(async e=>{let a=new Date(e.startedAt),i=e=>String(e).padStart(2,"0"),s=`${a.getFullYear()}-${i(a.getMonth()+1)}-${i(a.getDate())}T${i(a.getHours())}:${i(a.getMinutes())}`,o=window.prompt(t("forma.timer.editStartPrompt"),s);if(!o)return;let l=new Date(o);if(Number.isNaN(l.getTime()))return;let r=l.getTime();if(r>Date.now())return;let d={...Z,sessions:Z.sessions.map(a=>a.id===e.id?{...a,startedAt:r}:a)};await n(d)},[Z,n,t]),es=(0,s.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...Z,meals:[...Z.meals,{id:(0,m.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[Z,n]),eo=(0,s.useCallback)(async(e,a,t,i,s,o)=>{let l={...Z,meals:Z.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[Z,n]),el=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=Z.weights.filter(e=>e.date!==a),i={...Z,weights:[...t,{date:a,kg:e}]};await n(i)},[Z,n]),en=(0,s.useCallback)(async(e,a)=>{let t={...Z,weights:Z.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[Z,n]),er=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...Z,walks:[...Z.walks,{id:(0,m.z)(),date:a,minutes:e}]};await n(t)},[Z,n]),ed=(0,s.useCallback)(async(e,a,t)=>{let i={...Z,walks:Z.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[Z,n]),ec=(0,s.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...Z,meals:[...Z.meals,{id:(0,m.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[Z,n]),eg=(0,s.useCallback)(async e=>{let a={...Z,meals:Z.meals.filter(a=>a.id!==e)};await n(a)},[Z,n]),em=(0,s.useCallback)(async e=>{let a={...Z,weights:Z.weights.filter(a=>a.date!==e)};await n(a)},[Z,n]),ep=(0,s.useCallback)(()=>V("meal"),[V]),ew=(0,s.useCallback)(()=>V("walk"),[V]),ef=(0,s.useCallback)(()=>V("weight"),[V]),eu=(0,s.useCallback)(e=>{let a=Z.meals.find(a=>a.id===e);a&&V("meal",{kind:"meal",entry:a})},[Z.meals,V]),eh=(0,s.useCallback)(e=>{let a=Z.weights.find(a=>a.date===e);a&&V("weight",{kind:"weight",entry:a})},[Z.weights,V]),ex=(0,s.useCallback)(async e=>{switch(e.kind){case"fast":await ee(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await es(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await el(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await er(e.walkMinutes)}},[ee,es,el,er]),eb=(0,g.streakDays)(Z.sessions,Z.goal.targetHours),ek=(0,g.avgFastDuration)(Z.sessions,30),ey=Z.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(r.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)(F,{children:[(0,i.jsxs)(Y,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(_,{role:"tab","aria-selected":"today"===q,active:"today"===q,onClick:()=>J("today"),children:t("forma.tab.today")}),(0,i.jsx)(_,{role:"tab","aria-selected":"fasting"===q,active:"fasting"===q,onClick:()=>J("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(_,{role:"tab","aria-selected":"weight"===q,active:"weight"===q,onClick:()=>J("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(_,{role:"tab","aria-selected":"settings"===q,active:"settings"===q,onClick:()=>J("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(T,{children:["fasting"===q&&(0,i.jsx)(f.B,{t:t,active:M,onChange:z}),(0,i.jsx)(A,{children:(0,i.jsxs)(E,{children:["today"===q&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.F,{t:t,onParsed:e=>void ex(e)}),(0,i.jsx)(D.C,{t:t,cards:[{id:"mini-fast",defaultSize:"sm",render:()=>(0,i.jsx)(v.g,{data:Z,t:t,onClick:()=>J("fasting")})},{id:"mini-weight",defaultSize:"sm",render:()=>(0,i.jsx)(j.S,{data:Z,t:t,onClick:()=>J("weight")})},{id:"today",defaultSize:"lg",render:()=>(0,i.jsx)(k._,{data:Z,t:t,onLogMeal:ep,onLogWalk:ew,onLogWeight:ef,onDeleteMeal:e=>void eg(e),onEditMeal:eu})},{id:"ask",defaultSize:"lg",render:()=>(0,i.jsx)(y.j,{data:Z,t:t,locale:a})},{id:"meal-heatmap",defaultSize:"lg",render:()=>(0,i.jsx)($.M,{data:Z,t:t,locale:a})},{id:"week",defaultSize:"lg",render:()=>(0,i.jsx)(x.v,{data:Z,t:t,locale:a,onTapTemplate:e=>void ec(e)})},{id:"stats",defaultSize:"md",render:()=>(0,i.jsxs)(W,{children:[(0,i.jsxs)(P,{children:[(0,i.jsx)(I,{children:eb}),(0,i.jsx)(O,{children:t("forma.streak",{n:eb})})]}),(0,i.jsxs)(P,{children:[(0,i.jsx)(I,{children:ek>0?ek.toFixed(1):"—"}),(0,i.jsx)(O,{children:t("forma.hero.avgDuration")})]}),ey&&(0,i.jsxs)(P,{children:[(0,i.jsx)(I,{children:ey.kg.toFixed(1)}),(0,i.jsx)(O,{children:t("forma.weight.label")})]})]})}]})]}),"fasting"===q&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.P,{t:t,active:M,onChange:z}),(0,i.jsx)(L,{children:(0,i.jsx)(w.k,{data:Z,t:t,onStart:()=>{let e="16:8"===M?16:"18:6"===M?18:"20:4"===M?20:Z.goal.targetHours;ee(M,e)},onStop:e=>void ea(e),onEditStart:e=>void ei(e)})}),(0,i.jsx)(x.v,{data:Z,t:t,locale:a,onTapTemplate:e=>void ec(e)})]}),"weight"===q&&(0,i.jsx)(C.m,{data:Z,t:t,onLogWeight:ef,onDeleteWeight:e=>void em(e),onEditWeight:eh}),"settings"===q&&(0,i.jsx)(S.f,{data:Z,t:t,onSave:n})]})})]}),(0,i.jsx)(H,{"aria-label":t("forma.log"),onClick:()=>V(),children:(0,i.jsx)(d.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(b.Y,{open:B,onClose:X,data:Z,t:t,initialMode:R,editing:Q,onStartFast:(e,a)=>void ee(e,a),onStopFast:()=>void et(),onLogMeal:(e,a,t,i,s)=>void es(e,a,t,i,s),onEditMeal:(e,a,t,i,s,o)=>void eo(e,a,t,i,s,o),onLogWeight:(e,a)=>void el(e,a),onEditWeight:(e,a)=>void en(e,a),onLogWalk:(e,a)=>void er(e,a),onEditWalk:(e,a,t)=>void ed(e,a,t)})]})})}}}]);