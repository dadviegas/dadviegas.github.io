"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["362"],{3935(e,a,t){t.r(a),t.d(a,{default:()=>O});var i=t(5723),o=t(7991),s=t(6859),r=t.n(s),n=t(2799),l=t(4764),d=t(5030),c=t(8170),m=t(9463),g=t(4041),p=t(948),w=t(2552),f=t(1589),x=t(8477),u=t(5405),h=t(483),b=t(9276),k=t(5742),y=t(7103),j=t(2128),v=t(9446),$=t(950),C=t(2152),S=t(429);let N="#7fb77e",D=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,F=r().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`,M=r().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,T=r().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,L=r().div`
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};
  flex: 1;
  animation: ${D} 0.25s ease both;
`,A=r().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${N};
  border-radius: ${l.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${l.w4.spacing.lg};
  gap: ${l.w4.spacing.md};
  transition: border-color 0.14s ease;
`,P=r().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${l.w4.spacing.sm};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,W=r().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,z=r().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  line-height: 1;
`,Y=r().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`;r().div`
  /* Phase 2 seam — FormaGrid drops in here */
  flex: 1;
  min-height: 0;
`;let _=r().div`
  display: flex;
  gap: 4px;
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.lg} 0;
  border-bottom: 1px solid ${l.w4.colors.border};
`,E=r().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?N:"transparent"};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  font-size: 12px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({active:e})=>e?l.w4.colors.mainText:l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 140ms ease, border-color 140ms ease;
  margin-bottom: -1px;
  &:hover { color: ${l.w4.colors.mainText}; }
`,H=r().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.md};
  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,I=r().button`
  position: fixed;
  bottom: max(${l.w4.spacing.md}, env(safe-area-inset-bottom, ${l.w4.spacing.md}));
  right: ${l.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${N};
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
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`;function O({topBarRight:e}){let[a]=(0,c.Ym)(),t=(0,o.useMemo)(()=>(0,c.Nx)(a,p.A),[a]),{data:s,loaded:r,save:n}=(0,m.useForma)(),[N,D]=(0,o.useState)("16:8"),[B,K]=(0,o.useState)(!1),[R,G]=(0,o.useState)("today"),Q=s??{sessions:[],meals:[],weights:[],walks:[],templates:m.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},U=(0,o.useCallback)(async(e,a)=>{let t={...Q,sessions:[...Q.sessions,{id:(0,g.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[Q,n]),q=(0,o.useCallback)(async e=>{let a={...Q,sessions:Q.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[Q,n]),J=(0,o.useCallback)(async()=>{let e=Q.sessions.find(e=>void 0===e.endedAt);e&&await q(e)},[Q,q]),V=(0,o.useCallback)(async e=>{let a=new Date(e.startedAt),i=e=>String(e).padStart(2,"0"),o=`${a.getFullYear()}-${i(a.getMonth()+1)}-${i(a.getDate())}T${i(a.getHours())}:${i(a.getMinutes())}`,s=window.prompt(t("forma.timer.editStartPrompt"),o);if(!s)return;let r=new Date(s);if(Number.isNaN(r.getTime()))return;let l=r.getTime();if(l>Date.now())return;let d={...Q,sessions:Q.sessions.map(a=>a.id===e.id?{...a,startedAt:l}:a)};await n(d)},[Q,n,t]),X=(0,o.useCallback)(async(e,a,t,i)=>{let o=new Date().toISOString().slice(0,10),s={...Q,meals:[...Q.meals,{id:(0,g.z)(),date:o,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(s)},[Q,n]),Z=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t=Q.weights.filter(e=>e.date!==a),i={...Q,weights:[...t,{date:a,kg:e}]};await n(i)},[Q,n]),ee=(0,o.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...Q,walks:[...Q.walks,{date:a,minutes:e}]};await n(t)},[Q,n]),ea=(0,o.useCallback)(async e=>{let a={...Q,meals:Q.meals.filter(a=>a.id!==e)};await n(a)},[Q,n]),et=(0,o.useCallback)(async e=>{let a={...Q,weights:Q.weights.filter(a=>a.date!==e)};await n(a)},[Q,n]),ei=(0,o.useCallback)(()=>{let e=window.prompt(t("forma.action.promptSlot"),"dinner");if(!e)return;let a=["lunch","dinner","snack"].includes(e)?e:"dinner",i=window.prompt(t("forma.action.promptMealDesc"))??"",o=window.prompt(t("forma.action.promptProtein"),"30"),s=window.prompt(t("forma.action.promptKcal"),"500"),r=o?Number(o):0,n=s?Number(s):0;Number.isNaN(r)||Number.isNaN(n)||X(a,r,n,i)},[t,X]),eo=(0,o.useCallback)(()=>{let e=window.prompt(t("forma.action.promptWalk"),"30");if(!e)return;let a=Number(e);Number.isNaN(a)||a<=0||ee(a)},[t,ee]),es=(0,o.useCallback)(()=>{let e=window.prompt(t("forma.action.promptWeight"),"");if(!e)return;let a=Number(e);Number.isNaN(a)||a<=0||Z(a)},[t,Z]),er=(0,o.useCallback)(async e=>{switch(e.kind){case"fast":await U(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await X(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await Z(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await ee(e.walkMinutes)}},[U,X,Z,ee]),en=(0,m.streakDays)(Q.sessions,Q.goal.targetHours),el=(0,m.avgFastDuration)(Q.sessions,30),ed=Q.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(l.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)(F,{children:[(0,i.jsxs)(_,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(E,{role:"tab","aria-selected":"today"===R,active:"today"===R,onClick:()=>G("today"),children:t("forma.tab.today")}),(0,i.jsx)(E,{role:"tab","aria-selected":"fasting"===R,active:"fasting"===R,onClick:()=>G("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(E,{role:"tab","aria-selected":"weight"===R,active:"weight"===R,onClick:()=>G("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(E,{role:"tab","aria-selected":"settings"===R,active:"settings"===R,onClick:()=>G("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(M,{children:["fasting"===R&&(0,i.jsx)(f.B,{t:t,active:N,onChange:D}),(0,i.jsx)(T,{children:(0,i.jsxs)(L,{children:["today"===R&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.F,{t:t,onParsed:e=>void er(e)}),(0,i.jsxs)(H,{children:[(0,i.jsx)(j.g,{data:Q,t:t,onClick:()=>G("fasting")}),(0,i.jsx)(v.S,{data:Q,t:t,onClick:()=>G("weight")})]}),(0,i.jsx)(k._,{data:Q,t:t,onLogMeal:ei,onLogWalk:eo,onLogWeight:es,onDeleteMeal:e=>void ea(e)}),(0,i.jsx)(y.j,{data:Q,t:t,locale:a}),(0,i.jsx)($.M,{data:Q,t:t,locale:a}),(0,i.jsx)(h.v,{data:Q,t:t,locale:a}),(0,i.jsxs)(P,{children:[(0,i.jsxs)(W,{children:[(0,i.jsx)(z,{children:en}),(0,i.jsx)(Y,{children:t("forma.streak",{n:en})})]}),(0,i.jsxs)(W,{children:[(0,i.jsx)(z,{children:el>0?el.toFixed(1):"—"}),(0,i.jsx)(Y,{children:t("forma.hero.avgDuration")})]}),ed&&(0,i.jsxs)(W,{children:[(0,i.jsx)(z,{children:ed.kg.toFixed(1)}),(0,i.jsx)(Y,{children:t("forma.weight.label")})]})]})]}),"fasting"===R&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.P,{t:t,active:N,onChange:D}),(0,i.jsx)(A,{children:(0,i.jsx)(w.k,{data:Q,t:t,onStart:()=>{let e="16:8"===N?16:"18:6"===N?18:"20:4"===N?20:Q.goal.targetHours;U(N,e)},onStop:e=>void q(e),onEditStart:e=>void V(e)})}),(0,i.jsx)(h.v,{data:Q,t:t,locale:a})]}),"weight"===R&&(0,i.jsx)(C.m,{data:Q,t:t,onLogWeight:es,onDeleteWeight:e=>void et(e)}),"settings"===R&&(0,i.jsx)(S.f,{data:Q,t:t,onSave:n})]})})]}),(0,i.jsx)(I,{"aria-label":t("forma.log"),onClick:()=>K(!0),children:(0,i.jsx)(d.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(b.Y,{open:B,onClose:()=>K(!1),data:Q,t:t,onStartFast:(e,a)=>void U(e,a),onStopFast:()=>void J(),onLogMeal:(e,a,t,i)=>void X(e,a,t,i),onLogWeight:e=>void Z(e),onLogWalk:e=>void ee(e)})]})})}}}]);