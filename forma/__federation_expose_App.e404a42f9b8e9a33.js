"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["362"],{3935(e,a,t){t.r(a),t.d(a,{default:()=>G});var i=t(5723),s=t(7991),l=t(6859),o=t.n(l),n=t(2799),r=t(4764),d=t(5030),c=t(8170),g=t(3650),m=t(4041),w=t(948),p=t(2552),f=t(1589),h=t(8477),u=t(5405),x=t(483),b=t(9276),k=t(5742),v=t(7103),y=t(2128),j=t(9446),$=t(950),C=t(2152),S=t(429),D=t(4406),M=t(9624),F=t(2810);let z="#7fb77e",T=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,E=o().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`,W=o().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,A=o().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,L=o().div`
  padding: ${r.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  flex: 1;
  animation: ${T} 0.25s ease both;
`,P=o().div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-left: 2px solid ${z};
  border-radius: ${r.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${r.w4.spacing.lg};
  gap: ${r.w4.spacing.md};
  transition: border-color 0.14s ease;
`,I=o().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${r.w4.spacing.sm};
  height: 100%;

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,O=o().div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  padding: ${r.w4.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 100%;
`,Y=o().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${r.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${r.w4.colors.mainText};
  line-height: 1;
`,_=o().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${r.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${r.w4.colors.mainTextMuted};
`;o().div`
  /* Phase 2 seam — FormaGrid drops in here */
  flex: 1;
  min-height: 0;
`;let H=o().div`
  display: flex;
  gap: 4px;
  padding: ${r.w4.spacing.sm} ${r.w4.spacing.lg} 0;
  border-bottom: 1px solid ${r.w4.colors.border};
`,N=o().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?z:"transparent"};
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
`;o().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${r.w4.spacing.md};
  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;let B=o().button`
  position: fixed;
  bottom: max(${r.w4.spacing.md}, env(safe-area-inset-bottom, ${r.w4.spacing.md}));
  right: ${r.w4.spacing.md};
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
  @media (min-width: ${r.w4.breakpoints.md}) {
    display: none;
  }
`;function G({topBarRight:e}){let[a]=(0,c.Ym)(),t=(0,s.useMemo)(()=>(0,c.Nx)(a,w.A),[a]),{data:l,loaded:o,save:n}=(0,g.useForma)(),[z,T]=(0,s.useState)("16:8"),[R,K]=(0,s.useState)(!1),[Q,U]=(0,s.useState)(void 0),[q,J]=(0,s.useState)(null),[V,X]=(0,s.useState)("today"),Z=(0,s.useCallback)((e,a)=>{U(e),J(a??null),K(!0)},[]),ee=(0,s.useCallback)(()=>{K(!1),U(void 0),J(null)},[]),ea=l??{sessions:[],meals:[],weights:[],walks:[],templates:g.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},et=(0,s.useCallback)(async(e,a)=>{let t={...ea,sessions:[...ea.sessions,{id:(0,m.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[ea,n]),ei=(0,s.useCallback)(async e=>{let a={...ea,sessions:ea.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[ea,n]),es=(0,s.useCallback)(async()=>{let e=ea.sessions.find(e=>void 0===e.endedAt);e&&await ei(e)},[ea,ei]),el=(0,s.useCallback)(async e=>{let a=new Date(e.startedAt),i=e=>String(e).padStart(2,"0"),s=`${a.getFullYear()}-${i(a.getMonth()+1)}-${i(a.getDate())}T${i(a.getHours())}:${i(a.getMinutes())}`,l=window.prompt(t("forma.timer.editStartPrompt"),s);if(!l)return;let o=new Date(l);if(Number.isNaN(o.getTime()))return;let r=o.getTime();if(r>Date.now())return;let d={...ea,sessions:ea.sessions.map(a=>a.id===e.id?{...a,startedAt:r}:a)};await n(d)},[ea,n,t]),eo=(0,s.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let l={...ea,meals:[...ea.meals,{id:(0,m.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(l)},[ea,n]),en=(0,s.useCallback)(async(e,a,t,i,s,l)=>{let o={...ea,meals:ea.meals.map(o=>o.id===e?{...o,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:l}:o)};await n(o)},[ea,n]),er=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=ea.weights.filter(e=>e.date!==a),i={...ea,weights:[...t,{date:a,kg:e}]};await n(i)},[ea,n]),ed=(0,s.useCallback)(async(e,a)=>{let t={...ea,weights:ea.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[ea,n]),ec=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...ea,walks:[...ea.walks,{id:(0,m.z)(),date:a,minutes:e}]};await n(t)},[ea,n]),eg=(0,s.useCallback)(async(e,a,t)=>{let i={...ea,walks:ea.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[ea,n]),em=(0,s.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...ea,meals:[...ea.meals,{id:(0,m.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[ea,n]),ew=(0,s.useCallback)(async e=>{let a={...ea,meals:ea.meals.filter(a=>a.id!==e)};await n(a)},[ea,n]),ep=(0,s.useCallback)(async e=>{let a={...ea,weights:ea.weights.filter(a=>a.date!==e)};await n(a)},[ea,n]),ef=(0,s.useCallback)(async e=>{let a={...ea,walks:ea.walks.filter(a=>a.date!==e)};await n(a)},[ea,n]),eh=(0,s.useCallback)(async e=>{let a={...ea,sessions:ea.sessions.filter(a=>a.id!==e)};await n(a)},[ea,n]),eu=(0,s.useCallback)(()=>Z("meal"),[Z]),ex=(0,s.useCallback)(()=>Z("walk"),[Z]),eb=(0,s.useCallback)(()=>Z("weight"),[Z]),ek=(0,s.useCallback)(e=>{let a=ea.meals.find(a=>a.id===e);a&&Z("meal",{kind:"meal",entry:a})},[ea.meals,Z]),ev=(0,s.useCallback)(e=>{let a=ea.weights.find(a=>a.date===e);a&&Z("weight",{kind:"weight",entry:a})},[ea.weights,Z]),ey=(0,s.useCallback)(async e=>{switch(e.kind){case"fast":await et(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await eo(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await er(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await ec(e.walkMinutes)}},[et,eo,er,ec]),ej=(0,g.streakDays)(ea.sessions,ea.goal.targetHours),e$=(0,g.avgFastDuration)(ea.sessions,30),eC=ea.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(r.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)(E,{children:[(0,i.jsxs)(H,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(N,{role:"tab","aria-selected":"today"===V,active:"today"===V,onClick:()=>X("today"),children:t("forma.tab.today")}),(0,i.jsx)(N,{role:"tab","aria-selected":"fasting"===V,active:"fasting"===V,onClick:()=>X("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(N,{role:"tab","aria-selected":"weight"===V,active:"weight"===V,onClick:()=>X("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(N,{role:"tab","aria-selected":"activities"===V,active:"activities"===V,onClick:()=>X("activities"),children:t("forma.tab.activities")}),(0,i.jsx)(N,{role:"tab","aria-selected":"analytics"===V,active:"analytics"===V,onClick:()=>X("analytics"),children:t("forma.tab.analytics")}),(0,i.jsx)(N,{role:"tab","aria-selected":"settings"===V,active:"settings"===V,onClick:()=>X("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(W,{children:["fasting"===V&&(0,i.jsx)(f.B,{t:t,active:z,onChange:T}),(0,i.jsx)(A,{children:(0,i.jsxs)(L,{children:["today"===V&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.F,{t:t,onParsed:e=>void ey(e)}),(0,i.jsx)(D.C,{t:t,cards:[{id:"mini-fast",defaultSize:"sm",render:()=>(0,i.jsx)(y.g,{data:ea,t:t,onClick:()=>X("fasting")})},{id:"mini-weight",defaultSize:"sm",render:()=>(0,i.jsx)(j.S,{data:ea,t:t,onClick:()=>X("weight")})},{id:"today",defaultSize:"lg",render:()=>(0,i.jsx)(k._,{data:ea,t:t,onLogMeal:eu,onLogWalk:ex,onLogWeight:eb,onDeleteMeal:e=>void ew(e),onEditMeal:ek})},{id:"ask",defaultSize:"lg",render:()=>(0,i.jsx)(v.j,{data:ea,t:t,locale:a})},{id:"meal-heatmap",defaultSize:"lg",render:()=>(0,i.jsx)($.M,{data:ea,t:t,locale:a})},{id:"week",defaultSize:"lg",render:()=>(0,i.jsx)(x.v,{data:ea,t:t,locale:a,onTapTemplate:e=>void em(e)})},{id:"stats",defaultSize:"md",render:()=>(0,i.jsxs)(I,{children:[(0,i.jsxs)(O,{children:[(0,i.jsx)(Y,{children:ej}),(0,i.jsx)(_,{children:t("forma.streak",{n:ej})})]}),(0,i.jsxs)(O,{children:[(0,i.jsx)(Y,{children:e$>0?e$.toFixed(1):"—"}),(0,i.jsx)(_,{children:t("forma.hero.avgDuration")})]}),eC&&(0,i.jsxs)(O,{children:[(0,i.jsx)(Y,{children:eC.kg.toFixed(1)}),(0,i.jsx)(_,{children:t("forma.weight.label")})]})]})}]})]}),"fasting"===V&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.P,{t:t,active:z,onChange:T}),(0,i.jsx)(P,{children:(0,i.jsx)(p.k,{data:ea,t:t,onStart:()=>{let e="16:8"===z?16:"18:6"===z?18:"20:4"===z?20:ea.goal.targetHours;et(z,e)},onStop:e=>void ei(e),onEditStart:e=>void el(e)})}),(0,i.jsx)(x.v,{data:ea,t:t,locale:a,onTapTemplate:e=>void em(e)})]}),"weight"===V&&(0,i.jsx)(C.m,{data:ea,t:t,onLogWeight:eb,onDeleteWeight:e=>void ep(e),onEditWeight:ev}),"activities"===V&&(0,i.jsx)(F.N,{data:ea,t:t,locale:a,onEditFast:e=>void el(e),onEditMeal:e=>ek(e.id),onEditWeight:e=>ev(e.date),onDeleteFast:e=>void eh(e),onDeleteMeal:e=>void ew(e),onDeleteWeight:e=>void ep(e),onDeleteWalk:e=>void ef(e)}),"analytics"===V&&(0,i.jsx)(M.Q,{data:ea,t:t,locale:a}),"settings"===V&&(0,i.jsx)(S.f,{data:ea,t:t,onSave:n})]})})]}),(0,i.jsx)(B,{"aria-label":t("forma.log"),onClick:()=>Z(),children:(0,i.jsx)(d.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(b.Y,{open:R,onClose:ee,data:ea,t:t,initialMode:Q,editing:q,onStartFast:(e,a)=>void et(e,a),onStopFast:()=>void es(),onLogMeal:(e,a,t,i,s)=>void eo(e,a,t,i,s),onEditMeal:(e,a,t,i,s,l)=>void en(e,a,t,i,s,l),onLogWeight:(e,a)=>void er(e,a),onEditWeight:(e,a)=>void ed(e,a),onLogWalk:(e,a)=>void ec(e,a),onEditWalk:(e,a,t)=>void eg(e,a,t)})]})})}}}]);