"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["512"],{8997(e,a,t){var o=t(2727);a.createRoot=o.createRoot,o.hydrateRoot},3611(e,a,t){var o=t(5723),i=t(8997),s=t(7991),r=t(6859),n=t.n(r),l=t(2799),d=t(4764),c=t(5030),m=t(8170),p=t(6107),w=t(4041),g=t(948),f=t(2552),u=t(1589),x=t(8477),h=t(5405),b=t(483),k=t(9276),y=t(5742),v=t(7103);let j="#7fb77e",$=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,S=n().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`,N=n().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,C=n().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,D=n().div`
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  flex: 1;
  animation: ${$} 0.25s ease both;
`,F=n().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-left: 2px solid ${j};
  border-radius: ${d.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${d.w4.spacing.lg};
  gap: ${d.w4.spacing.md};
  transition: border-color 0.14s ease;
`,M=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${d.w4.spacing.sm};

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,A=n().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,L=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  line-height: 1;
`,P=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${d.w4.colors.mainTextMuted};
`,T=n().div`
  /* Phase 2 seam — FormaGrid drops in here */
  flex: 1;
  min-height: 0;
`,R=n().button`
  position: fixed;
  bottom: max(${d.w4.spacing.md}, env(safe-area-inset-bottom, ${d.w4.spacing.md}));
  right: ${d.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${j};
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
`,E=document.getElementById("root");if(!E)throw Error("Root element #root not found");(0,i.createRoot)(E).render((0,o.jsx)(function({topBarRight:e}){let[a]=(0,m.Ym)(),t=(0,s.useMemo)(()=>(0,m.Nx)(a,g.A),[a]),{data:i,loaded:r,save:n}=(0,p.useForma)(),[l,j]=(0,s.useState)("16:8"),[$,E]=(0,s.useState)(!1),z=i??{sessions:[],meals:[],weights:[],walks:[],templates:p.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},I=(0,s.useCallback)(async(e,a)=>{let t={...z,sessions:[...z.sessions,{id:(0,w.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[z,n]),W=(0,s.useCallback)(async e=>{let a={...z,sessions:z.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[z,n]),Y=(0,s.useCallback)(async()=>{let e=z.sessions.find(e=>void 0===e.endedAt);e&&await W(e)},[z,W]),_=(0,s.useCallback)(async e=>{let a=new Date(e.startedAt),o=e=>String(e).padStart(2,"0"),i=`${a.getFullYear()}-${o(a.getMonth()+1)}-${o(a.getDate())}T${o(a.getHours())}:${o(a.getMinutes())}`,s=window.prompt(t("forma.timer.editStartPrompt"),i);if(!s)return;let r=new Date(s);if(Number.isNaN(r.getTime()))return;let l=r.getTime();if(l>Date.now())return;let d={...z,sessions:z.sessions.map(a=>a.id===e.id?{...a,startedAt:l}:a)};await n(d)},[z,n,t]),H=(0,s.useCallback)(async(e,a,t,o)=>{let i=new Date().toISOString().slice(0,10),s={...z,meals:[...z.meals,{id:(0,w.z)(),date:i,slot:e,proteinG:a,kcal:t,notes:o||void 0,createdAt:Date.now()}]};await n(s)},[z,n]),O=(0,s.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t=z.weights.filter(e=>e.date!==a),o={...z,weights:[...t,{date:a,kg:e}]};await n(o)},[z,n]),B=(0,s.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...z,walks:[...z.walks,{date:a,minutes:e}]};await n(t)},[z,n]),K=(0,s.useCallback)(async e=>{let a={...z,meals:z.meals.filter(a=>a.id!==e)};await n(a)},[z,n]),G=(0,s.useCallback)(()=>{let e=window.prompt(t("forma.action.promptSlot"),"dinner");if(!e)return;let a=["lunch","dinner","snack"].includes(e)?e:"dinner",o=window.prompt(t("forma.action.promptMealDesc"))??"",i=window.prompt(t("forma.action.promptProtein"),"30"),s=window.prompt(t("forma.action.promptKcal"),"500"),r=i?Number(i):0,n=s?Number(s):0;Number.isNaN(r)||Number.isNaN(n)||H(a,r,n,o)},[t,H]),Q=(0,s.useCallback)(()=>{let e=window.prompt(t("forma.action.promptWalk"),"30");if(!e)return;let a=Number(e);Number.isNaN(a)||a<=0||B(a)},[t,B]),U=(0,s.useCallback)(()=>{let e=window.prompt(t("forma.action.promptWeight"),"");if(!e)return;let a=Number(e);Number.isNaN(a)||a<=0||O(a)},[t,O]),q=(0,s.useCallback)(async e=>{switch(e.kind){case"fast":await I(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await H(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await O(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await B(e.walkMinutes)}},[I,H,O,B]),J=(0,p.streakDays)(z.sessions,z.goal.targetHours),V=(0,p.avgFastDuration)(z.sessions,30),X=z.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,o.jsx)(d.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,o.jsxs)(S,{children:[(0,o.jsx)(x.P,{t:t,active:l,onChange:j}),(0,o.jsx)(h.F,{t:t,onParsed:e=>void q(e)}),(0,o.jsxs)(N,{children:[(0,o.jsx)(u.B,{t:t,active:l,onChange:j}),(0,o.jsx)(C,{children:(0,o.jsxs)(D,{children:[(0,o.jsx)(y._,{data:z,t:t,onLogMeal:G,onLogWalk:Q,onLogWeight:U,onDeleteMeal:e=>void K(e)}),(0,o.jsx)(v.j,{data:z,t:t,locale:a}),(0,o.jsx)(b.v,{data:z,t:t,locale:a}),(0,o.jsxs)(M,{children:[(0,o.jsxs)(A,{children:[(0,o.jsx)(L,{children:J}),(0,o.jsx)(P,{children:t("forma.streak",{n:J})})]}),(0,o.jsxs)(A,{children:[(0,o.jsx)(L,{children:V>0?V.toFixed(1):"—"}),(0,o.jsx)(P,{children:t("forma.hero.avgDuration")})]}),X&&(0,o.jsxs)(A,{children:[(0,o.jsx)(L,{children:X.kg.toFixed(1)}),(0,o.jsx)(P,{children:t("forma.weight.label")})]})]}),(0,o.jsx)(F,{children:(0,o.jsx)(f.k,{data:z,t:t,onStart:()=>{let e="16:8"===l?16:"18:6"===l?18:"20:4"===l?20:z.goal.targetHours;I(l,e)},onStop:e=>void W(e),onEditStart:e=>void _(e)})}),(0,o.jsx)(T,{})]})})]}),(0,o.jsx)(R,{"aria-label":t("forma.log"),onClick:()=>E(!0),children:(0,o.jsx)(c.In,{name:"plus",size:24,color:"#fff"})}),(0,o.jsx)(k.Y,{open:$,onClose:()=>E(!1),data:z,t:t,onStartFast:(e,a)=>void I(e,a),onStopFast:()=>void Y(),onLogMeal:(e,a,t,o)=>void H(e,a,t,o),onLogWeight:e=>void O(e),onLogWalk:e=>void B(e)})]})})},{}))}}]);