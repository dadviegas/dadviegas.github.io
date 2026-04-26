"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["512"],{8997(e,a,t){var i=t(2727);a.createRoot=i.createRoot,i.hydrateRoot},3611(e,a,t){var i=t(5723),s=t(8997),o=t(7991),l=t(6859),n=t.n(l),r=t(2799),d=t(4764),c=t(5030),g=t(8170),m=t(6527),p=t(4041),w=t(948),f=t(2552),h=t(1589),x=t(8477),u=t(5405),b=t(483),k=t(9276),y=t(5742),v=t(7103),j=t(2128),$=t(9446),C=t(950),S=t(2152),D=t(429);let M="#7fb77e",F=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,T=n().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`,E=n().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,A=n().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,L=n().div`
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  flex: 1;
  animation: ${F} 0.25s ease both;
`,z=n().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-left: 2px solid ${M};
  border-radius: ${d.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${d.w4.spacing.lg};
  gap: ${d.w4.spacing.md};
  transition: border-color 0.14s ease;
`,W=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${d.w4.spacing.sm};

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,I=n().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,P=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  line-height: 1;
`,R=n().span`
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
`;let O=n().div`
  display: flex;
  gap: 4px;
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.lg} 0;
  border-bottom: 1px solid ${d.w4.colors.border};
`,Y=n().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?M:"transparent"};
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
  &:hover { color: ${d.w4.colors.mainText}; }
`,_=n().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${d.w4.spacing.md};
  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,H=n().button`
  position: fixed;
  bottom: max(${d.w4.spacing.md}, env(safe-area-inset-bottom, ${d.w4.spacing.md}));
  right: ${d.w4.spacing.md};
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
  @media (min-width: ${d.w4.breakpoints.md}) {
    display: none;
  }
`,B=document.getElementById("root");if(!B)throw Error("Root element #root not found");(0,s.createRoot)(B).render((0,i.jsx)(function({topBarRight:e}){let[a]=(0,g.Ym)(),t=(0,o.useMemo)(()=>(0,g.Nx)(a,w.A),[a]),{data:s,loaded:l,save:n}=(0,m.useForma)(),[r,M]=(0,o.useState)("16:8"),[F,B]=(0,o.useState)(!1),[N,G]=(0,o.useState)(void 0),[K,Q]=(0,o.useState)(null),[U,q]=(0,o.useState)("today"),J=(0,o.useCallback)((e,a)=>{G(e),Q(a??null),B(!0)},[]),V=(0,o.useCallback)(()=>{B(!1),G(void 0),Q(null)},[]),X=s??{sessions:[],meals:[],weights:[],walks:[],templates:m.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},Z=(0,o.useCallback)(async(e,a)=>{let t={...X,sessions:[...X.sessions,{id:(0,p.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[X,n]),ee=(0,o.useCallback)(async e=>{let a={...X,sessions:X.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[X,n]),ea=(0,o.useCallback)(async()=>{let e=X.sessions.find(e=>void 0===e.endedAt);e&&await ee(e)},[X,ee]),et=(0,o.useCallback)(async e=>{let a=new Date(e.startedAt),i=e=>String(e).padStart(2,"0"),s=`${a.getFullYear()}-${i(a.getMonth()+1)}-${i(a.getDate())}T${i(a.getHours())}:${i(a.getMinutes())}`,o=window.prompt(t("forma.timer.editStartPrompt"),s);if(!o)return;let l=new Date(o);if(Number.isNaN(l.getTime()))return;let r=l.getTime();if(r>Date.now())return;let d={...X,sessions:X.sessions.map(a=>a.id===e.id?{...a,startedAt:r}:a)};await n(d)},[X,n,t]),ei=(0,o.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...X,meals:[...X.meals,{id:(0,p.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[X,n]),es=(0,o.useCallback)(async(e,a,t,i,s,o)=>{let l={...X,meals:X.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[X,n]),eo=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=X.weights.filter(e=>e.date!==a),i={...X,weights:[...t,{date:a,kg:e}]};await n(i)},[X,n]),el=(0,o.useCallback)(async(e,a)=>{let t={...X,weights:X.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[X,n]),en=(0,o.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...X,walks:[...X.walks,{id:(0,p.z)(),date:a,minutes:e}]};await n(t)},[X,n]),er=(0,o.useCallback)(async(e,a,t)=>{let i={...X,walks:X.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[X,n]),ed=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...X,meals:[...X.meals,{id:(0,p.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[X,n]),ec=(0,o.useCallback)(async e=>{let a={...X,meals:X.meals.filter(a=>a.id!==e)};await n(a)},[X,n]),eg=(0,o.useCallback)(async e=>{let a={...X,weights:X.weights.filter(a=>a.date!==e)};await n(a)},[X,n]),em=(0,o.useCallback)(()=>J("meal"),[J]),ep=(0,o.useCallback)(()=>J("walk"),[J]),ew=(0,o.useCallback)(()=>J("weight"),[J]),ef=(0,o.useCallback)(e=>{let a=X.meals.find(a=>a.id===e);a&&J("meal",{kind:"meal",entry:a})},[X.meals,J]),eh=(0,o.useCallback)(e=>{let a=X.weights.find(a=>a.date===e);a&&J("weight",{kind:"weight",entry:a})},[X.weights,J]),ex=(0,o.useCallback)(async e=>{switch(e.kind){case"fast":await Z(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await ei(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await eo(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await en(e.walkMinutes)}},[Z,ei,eo,en]),eu=(0,m.streakDays)(X.sessions,X.goal.targetHours),eb=(0,m.avgFastDuration)(X.sessions,30),ek=X.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(d.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)(T,{children:[(0,i.jsxs)(O,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(Y,{role:"tab","aria-selected":"today"===U,active:"today"===U,onClick:()=>q("today"),children:t("forma.tab.today")}),(0,i.jsx)(Y,{role:"tab","aria-selected":"fasting"===U,active:"fasting"===U,onClick:()=>q("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(Y,{role:"tab","aria-selected":"weight"===U,active:"weight"===U,onClick:()=>q("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(Y,{role:"tab","aria-selected":"settings"===U,active:"settings"===U,onClick:()=>q("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(E,{children:["fasting"===U&&(0,i.jsx)(h.B,{t:t,active:r,onChange:M}),(0,i.jsx)(A,{children:(0,i.jsxs)(L,{children:["today"===U&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.F,{t:t,onParsed:e=>void ex(e)}),(0,i.jsxs)(_,{children:[(0,i.jsx)(j.g,{data:X,t:t,onClick:()=>q("fasting")}),(0,i.jsx)($.S,{data:X,t:t,onClick:()=>q("weight")})]}),(0,i.jsx)(y._,{data:X,t:t,onLogMeal:em,onLogWalk:ep,onLogWeight:ew,onDeleteMeal:e=>void ec(e),onEditMeal:ef}),(0,i.jsx)(v.j,{data:X,t:t,locale:a}),(0,i.jsx)(C.M,{data:X,t:t,locale:a}),(0,i.jsx)(b.v,{data:X,t:t,locale:a,onTapTemplate:e=>void ed(e)}),(0,i.jsxs)(W,{children:[(0,i.jsxs)(I,{children:[(0,i.jsx)(P,{children:eu}),(0,i.jsx)(R,{children:t("forma.streak",{n:eu})})]}),(0,i.jsxs)(I,{children:[(0,i.jsx)(P,{children:eb>0?eb.toFixed(1):"—"}),(0,i.jsx)(R,{children:t("forma.hero.avgDuration")})]}),ek&&(0,i.jsxs)(I,{children:[(0,i.jsx)(P,{children:ek.kg.toFixed(1)}),(0,i.jsx)(R,{children:t("forma.weight.label")})]})]})]}),"fasting"===U&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.P,{t:t,active:r,onChange:M}),(0,i.jsx)(z,{children:(0,i.jsx)(f.k,{data:X,t:t,onStart:()=>{let e="16:8"===r?16:"18:6"===r?18:"20:4"===r?20:X.goal.targetHours;Z(r,e)},onStop:e=>void ee(e),onEditStart:e=>void et(e)})}),(0,i.jsx)(b.v,{data:X,t:t,locale:a,onTapTemplate:e=>void ed(e)})]}),"weight"===U&&(0,i.jsx)(S.m,{data:X,t:t,onLogWeight:ew,onDeleteWeight:e=>void eg(e),onEditWeight:eh}),"settings"===U&&(0,i.jsx)(D.f,{data:X,t:t,onSave:n})]})})]}),(0,i.jsx)(H,{"aria-label":t("forma.log"),onClick:()=>J(),children:(0,i.jsx)(c.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(k.Y,{open:F,onClose:V,data:X,t:t,initialMode:N,editing:K,onStartFast:(e,a)=>void Z(e,a),onStopFast:()=>void ea(),onLogMeal:(e,a,t,i,s)=>void ei(e,a,t,i,s),onEditMeal:(e,a,t,i,s,o)=>void es(e,a,t,i,s,o),onLogWeight:(e,a)=>void eo(e,a),onEditWeight:(e,a)=>void el(e,a),onLogWalk:(e,a)=>void en(e,a),onEditWalk:(e,a,t)=>void er(e,a,t)})]})})},{}))}}]);