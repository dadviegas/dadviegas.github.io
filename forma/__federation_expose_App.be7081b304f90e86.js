"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["362"],{3935(e,a,t){t.r(a),t.d(a,{default:()=>G});var i=t(5723),s=t(7991),o=t(6859),l=t.n(o),n=t(2799),r=t(4764),d=t(5030),c=t(8170),g=t(7711),m=t(4041),w=t(948),p=t(2552),f=t(1589),h=t(8477),x=t(5405),u=t(483),b=t(9276),k=t(5742),v=t(7103),y=t(2128),j=t(9446),C=t(2152),$=t(429),S=t(4406),D=t(3709),F=t(2810);let M="#7fb77e",z=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,E=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  padding: ${r.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  flex: 1;
  animation: ${z} 0.25s ease both;
`,A=l().div`
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
`,P=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${r.w4.spacing.sm};
  height: 100%;

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,I=l().div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  padding: ${r.w4.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 100%;
`,O=l().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${r.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${r.w4.colors.mainText};
  line-height: 1;
`,_=l().span`
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
`,H=l().button`
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
`;let B=l().button`
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
`;function G({topBarRight:e}){let[a]=(0,c.Ym)(),t=(0,s.useMemo)(()=>(0,c.Nx)(a,w.A),[a]),{data:o,loaded:l,save:n}=(0,g.useForma)(),[M,z]=(0,s.useState)("16:8"),[R,K]=(0,s.useState)(!1),[N,Q]=(0,s.useState)(void 0),[U,q]=(0,s.useState)(null),[J,V]=(0,s.useState)("today"),X=(0,s.useCallback)((e,a)=>{Q(e),q(a??null),K(!0)},[]),Z=(0,s.useCallback)(()=>{K(!1),Q(void 0),q(null)},[]),ee=o??{sessions:[],meals:[],weights:[],walks:[],templates:g.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},ea=(0,s.useCallback)(async(e,a)=>{let t={...ee,sessions:[...ee.sessions,{id:(0,m.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[ee,n]),et=(0,s.useCallback)(async e=>{let a={...ee,sessions:ee.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[ee,n]),ei=(0,s.useCallback)(async()=>{let e=ee.sessions.find(e=>void 0===e.endedAt);e&&await et(e)},[ee,et]),es=(0,s.useCallback)(e=>{X(void 0,{kind:"fast",entry:e})},[X]),eo=(0,s.useCallback)(async(e,a,t,i)=>{let s={...ee,sessions:[...ee.sessions,{id:(0,m.z)(),startedAt:t,endedAt:i,targetHours:a,protocol:e}]};await n(s)},[ee,n]),el=(0,s.useCallback)(async(e,a,t,i,s)=>{let o={...ee,sessions:ee.sessions.map(o=>o.id===e?{...o,protocol:a,targetHours:t,startedAt:i,endedAt:s}:o)};await n(o)},[ee,n]),en=(0,s.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...ee,meals:[...ee.meals,{id:(0,m.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[ee,n]),er=(0,s.useCallback)(async(e,a,t,i,s,o)=>{let l={...ee,meals:ee.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[ee,n]),ed=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=ee.weights.filter(e=>e.date!==a),i={...ee,weights:[...t,{date:a,kg:e}]};await n(i)},[ee,n]),ec=(0,s.useCallback)(async(e,a)=>{let t={...ee,weights:ee.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[ee,n]),eg=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...ee,walks:[...ee.walks,{id:(0,m.z)(),date:a,minutes:e}]};await n(t)},[ee,n]),em=(0,s.useCallback)(async(e,a,t)=>{let i={...ee,walks:ee.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[ee,n]),ew=(0,s.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...ee,meals:[...ee.meals,{id:(0,m.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[ee,n]),ep=(0,s.useCallback)(async e=>{let a={...ee,meals:ee.meals.filter(a=>a.id!==e)};await n(a)},[ee,n]),ef=(0,s.useCallback)(async e=>{let a={...ee,weights:ee.weights.filter(a=>a.date!==e)};await n(a)},[ee,n]),eh=(0,s.useCallback)(async e=>{let a={...ee,walks:ee.walks.filter(a=>a.date!==e)};await n(a)},[ee,n]),ex=(0,s.useCallback)(async e=>{let a={...ee,sessions:ee.sessions.filter(a=>a.id!==e)};await n(a)},[ee,n]),eu=(0,s.useCallback)(()=>X("meal"),[X]),eb=(0,s.useCallback)(()=>X("walk"),[X]),ek=(0,s.useCallback)(()=>X("weight"),[X]),ev=(0,s.useCallback)(e=>{let a=ee.meals.find(a=>a.id===e);a&&X("meal",{kind:"meal",entry:a})},[ee.meals,X]),ey=(0,s.useCallback)(e=>{let a=ee.weights.find(a=>a.date===e);a&&X("weight",{kind:"weight",entry:a})},[ee.weights,X]),ej=(0,s.useCallback)(async e=>{switch(e.kind){case"fast":await ea(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await en(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await ed(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await eg(e.walkMinutes)}},[ea,en,ed,eg]),eC=(0,g.streakDays)(ee.sessions,ee.goal.targetHours),e$=(0,g.avgFastDuration)(ee.sessions,30),eS=ee.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(r.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)(E,{children:[(0,i.jsxs)(Y,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(H,{role:"tab","aria-selected":"today"===J,active:"today"===J,onClick:()=>V("today"),children:t("forma.tab.today")}),(0,i.jsx)(H,{role:"tab","aria-selected":"fasting"===J,active:"fasting"===J,onClick:()=>V("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(H,{role:"tab","aria-selected":"weight"===J,active:"weight"===J,onClick:()=>V("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(H,{role:"tab","aria-selected":"activities"===J,active:"activities"===J,onClick:()=>V("activities"),children:t("forma.tab.activities")}),(0,i.jsx)(H,{role:"tab","aria-selected":"analytics"===J,active:"analytics"===J,onClick:()=>V("analytics"),children:t("forma.tab.analytics")}),(0,i.jsx)(H,{role:"tab","aria-selected":"settings"===J,active:"settings"===J,onClick:()=>V("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(T,{children:["fasting"===J&&(0,i.jsx)(f.B,{t:t,active:M,onChange:z}),(0,i.jsx)(W,{children:(0,i.jsxs)(L,{children:["today"===J&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.F,{t:t,onParsed:e=>void ej(e)}),(0,i.jsx)(S.C,{t:t,cards:[{id:"mini-fast",defaultSize:"sm",render:()=>(0,i.jsx)(y.g,{data:ee,t:t,onClick:()=>V("fasting")})},{id:"mini-weight",defaultSize:"sm",render:()=>(0,i.jsx)(j.S,{data:ee,t:t,onClick:()=>V("weight")})},{id:"today",defaultSize:"lg",render:()=>(0,i.jsx)(k._,{data:ee,t:t,onLogMeal:eu,onLogWalk:eb,onLogWeight:ek,onDeleteMeal:e=>void ep(e),onEditMeal:ev})},{id:"ask",defaultSize:"lg",render:()=>(0,i.jsx)(v.j,{data:ee,t:t,locale:a})},{id:"week",defaultSize:"lg",render:()=>(0,i.jsx)(u.v,{data:ee,t:t,locale:a,onTapTemplate:e=>void ew(e)})},{id:"stats",defaultSize:"md",render:()=>(0,i.jsxs)(P,{children:[(0,i.jsxs)(I,{children:[(0,i.jsx)(O,{children:eC}),(0,i.jsx)(_,{children:t("forma.streak",{n:eC})})]}),(0,i.jsxs)(I,{children:[(0,i.jsx)(O,{children:e$>0?e$.toFixed(1):"—"}),(0,i.jsx)(_,{children:t("forma.hero.avgDuration")})]}),eS&&(0,i.jsxs)(I,{children:[(0,i.jsx)(O,{children:eS.kg.toFixed(1)}),(0,i.jsx)(_,{children:t("forma.weight.label")})]})]})}]})]}),"fasting"===J&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.P,{t:t,active:M,onChange:z}),(0,i.jsx)(A,{children:(0,i.jsx)(p.k,{data:ee,t:t,onStart:()=>{let e="16:8"===M?16:"18:6"===M?18:"20:4"===M?20:ee.goal.targetHours;ea(M,e)},onStop:e=>void et(e),onEditStart:e=>es(e)})}),(0,i.jsx)(u.v,{data:ee,t:t,locale:a,onTapTemplate:e=>void ew(e)})]}),"weight"===J&&(0,i.jsx)(C.m,{data:ee,t:t,onLogWeight:ek,onDeleteWeight:e=>void ef(e),onEditWeight:ey}),"activities"===J&&(0,i.jsx)(F.N,{data:ee,t:t,locale:a,onEditFast:e=>es(e),onEditMeal:e=>ev(e.id),onEditWeight:e=>ey(e.date),onDeleteFast:e=>void ex(e),onDeleteMeal:e=>void ep(e),onDeleteWeight:e=>void ef(e),onDeleteWalk:e=>void eh(e)}),"analytics"===J&&(0,i.jsx)(D.Q,{data:ee,t:t,locale:a}),"settings"===J&&(0,i.jsx)($.f,{data:ee,t:t,onSave:n})]})})]}),(0,i.jsx)(B,{"aria-label":t("forma.log"),onClick:()=>X(),children:(0,i.jsx)(d.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(b.Y,{open:R,onClose:Z,data:ee,t:t,initialMode:N,editing:U,onStartFast:(e,a)=>void ea(e,a),onStopFast:()=>void ei(),onLogPastFast:(e,a,t,i)=>void eo(e,a,t,i),onEditFast:(e,a,t,i,s)=>void el(e,a,t,i,s),onLogMeal:(e,a,t,i,s)=>void en(e,a,t,i,s),onEditMeal:(e,a,t,i,s,o)=>void er(e,a,t,i,s,o),onLogWeight:(e,a)=>void ed(e,a),onEditWeight:(e,a)=>void ec(e,a),onLogWalk:(e,a)=>void eg(e,a),onEditWalk:(e,a,t)=>void em(e,a,t)})]})})}}}]);