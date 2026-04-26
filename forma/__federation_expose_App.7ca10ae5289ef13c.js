"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["362"],{3935(e,a,t){t.r(a),t.d(a,{default:()=>z});var i=t(5723),s=t(7991),o=t(6859),n=t.n(o),r=t(2799),l=t(4764),d=t(5030),c=t(8170),m=t(6107),p=t(4041),w=t(948),g=t(2552),f=t(1589),u=t(8477),x=t(5405),h=t(483),b=t(9276),k=t(5742),y=t(7103);let v="#7fb77e",j=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,$=n().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`,S=n().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,N=n().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,C=n().div`
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};
  flex: 1;
  animation: ${j} 0.25s ease both;
`,D=n().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${v};
  border-radius: ${l.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${l.w4.spacing.lg};
  gap: ${l.w4.spacing.md};
  transition: border-color 0.14s ease;
`,F=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${l.w4.spacing.sm};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,M=n().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,A=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  line-height: 1;
`,L=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,P=n().div`
  /* Phase 2 seam — FormaGrid drops in here */
  flex: 1;
  min-height: 0;
`,T=n().button`
  position: fixed;
  bottom: max(${l.w4.spacing.md}, env(safe-area-inset-bottom, ${l.w4.spacing.md}));
  right: ${l.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${v};
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
`;function z({topBarRight:e}){let[a]=(0,c.Ym)(),t=(0,s.useMemo)(()=>(0,c.Nx)(a,w.A),[a]),{data:o,loaded:n,save:r}=(0,m.useForma)(),[v,j]=(0,s.useState)("16:8"),[W,Y]=(0,s.useState)(!1),_=o??{sessions:[],meals:[],weights:[],walks:[],templates:m.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},E=(0,s.useCallback)(async(e,a)=>{let t={..._,sessions:[..._.sessions,{id:(0,p.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await r(t)},[_,r]),H=(0,s.useCallback)(async e=>{let a={..._,sessions:_.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await r(a)},[_,r]),I=(0,s.useCallback)(async()=>{let e=_.sessions.find(e=>void 0===e.endedAt);e&&await H(e)},[_,H]),O=(0,s.useCallback)(async e=>{let a=new Date(e.startedAt),i=e=>String(e).padStart(2,"0"),s=`${a.getFullYear()}-${i(a.getMonth()+1)}-${i(a.getDate())}T${i(a.getHours())}:${i(a.getMinutes())}`,o=window.prompt(t("forma.timer.editStartPrompt"),s);if(!o)return;let n=new Date(o);if(Number.isNaN(n.getTime()))return;let l=n.getTime();if(l>Date.now())return;let d={..._,sessions:_.sessions.map(a=>a.id===e.id?{...a,startedAt:l}:a)};await r(d)},[_,r,t]),B=(0,s.useCallback)(async(e,a,t,i)=>{let s=new Date().toISOString().slice(0,10),o={..._,meals:[..._.meals,{id:(0,p.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await r(o)},[_,r]),K=(0,s.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t=_.weights.filter(e=>e.date!==a),i={..._,weights:[...t,{date:a,kg:e}]};await r(i)},[_,r]),R=(0,s.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={..._,walks:[..._.walks,{date:a,minutes:e}]};await r(t)},[_,r]),G=(0,s.useCallback)(async e=>{let a={..._,meals:_.meals.filter(a=>a.id!==e)};await r(a)},[_,r]),Q=(0,s.useCallback)(()=>{let e=window.prompt(t("forma.action.promptSlot"),"dinner");if(!e)return;let a=["lunch","dinner","snack"].includes(e)?e:"dinner",i=window.prompt(t("forma.action.promptMealDesc"))??"",s=window.prompt(t("forma.action.promptProtein"),"30"),o=window.prompt(t("forma.action.promptKcal"),"500"),n=s?Number(s):0,r=o?Number(o):0;Number.isNaN(n)||Number.isNaN(r)||B(a,n,r,i)},[t,B]),U=(0,s.useCallback)(()=>{let e=window.prompt(t("forma.action.promptWalk"),"30");if(!e)return;let a=Number(e);Number.isNaN(a)||a<=0||R(a)},[t,R]),q=(0,s.useCallback)(()=>{let e=window.prompt(t("forma.action.promptWeight"),"");if(!e)return;let a=Number(e);Number.isNaN(a)||a<=0||K(a)},[t,K]),J=(0,s.useCallback)(async e=>{switch(e.kind){case"fast":await E(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await B(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await K(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await R(e.walkMinutes)}},[E,B,K,R]),V=(0,m.streakDays)(_.sessions,_.goal.targetHours),X=(0,m.avgFastDuration)(_.sessions,30),Z=_.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(l.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)($,{children:[(0,i.jsx)(u.P,{t:t,active:v,onChange:j}),(0,i.jsx)(x.F,{t:t,onParsed:e=>void J(e)}),(0,i.jsxs)(S,{children:[(0,i.jsx)(f.B,{t:t,active:v,onChange:j}),(0,i.jsx)(N,{children:(0,i.jsxs)(C,{children:[(0,i.jsx)(k._,{data:_,t:t,onLogMeal:Q,onLogWalk:U,onLogWeight:q,onDeleteMeal:e=>void G(e)}),(0,i.jsx)(y.j,{data:_,t:t,locale:a}),(0,i.jsx)(h.v,{data:_,t:t,locale:a}),(0,i.jsxs)(F,{children:[(0,i.jsxs)(M,{children:[(0,i.jsx)(A,{children:V}),(0,i.jsx)(L,{children:t("forma.streak",{n:V})})]}),(0,i.jsxs)(M,{children:[(0,i.jsx)(A,{children:X>0?X.toFixed(1):"—"}),(0,i.jsx)(L,{children:t("forma.hero.avgDuration")})]}),Z&&(0,i.jsxs)(M,{children:[(0,i.jsx)(A,{children:Z.kg.toFixed(1)}),(0,i.jsx)(L,{children:t("forma.weight.label")})]})]}),(0,i.jsx)(D,{children:(0,i.jsx)(g.k,{data:_,t:t,onStart:()=>{let e="16:8"===v?16:"18:6"===v?18:"20:4"===v?20:_.goal.targetHours;E(v,e)},onStop:e=>void H(e),onEditStart:e=>void O(e)})}),(0,i.jsx)(P,{})]})})]}),(0,i.jsx)(T,{"aria-label":t("forma.log"),onClick:()=>Y(!0),children:(0,i.jsx)(d.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(b.Y,{open:W,onClose:()=>Y(!1),data:_,t:t,onStartFast:(e,a)=>void E(e,a),onStopFast:()=>void I(),onLogMeal:(e,a,t,i)=>void B(e,a,t,i),onLogWeight:e=>void K(e),onLogWalk:e=>void R(e)})]})})}}}]);