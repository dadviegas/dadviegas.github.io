"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["362"],{73935(a,e,t){t.r(e),t.d(e,{default:()=>J});var i=t(65723),s=t(37991),o=t(36859),l=t.n(o),n=t(72799),d=t(6063),r=t(63236),c=t(28170),g=t(71730),w=t(54041),m=t(20948),p=t(72552),h=t(71589),f=t(68477),x=t(25405),u=t(20483),b=t(17102),k=t(15742),v=t(37103),y=t(52128),j=t(59446),C=t(92152),$=t(20429),S=t(4406),D=t(84964),M=t(90429),F=t(22684),z=t(33499),E=t(24470),T=t(86704),W=t(69568),A=t(84391);let L="#7fb77e",O=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,I=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,P=l().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,_=l().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  touch-action: pan-y;
  display: flex;
  flex-direction: column;
`,Y=l().div`
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  flex: 1;
  animation: ${O} 0.25s ease both;
  min-width: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding: ${d.w4.spacing.md};
    padding-bottom: calc(${d.w4.spacing.md} + 56px + env(safe-area-inset-bottom, 0px) + ${d.w4.spacing.md});
    gap: ${d.w4.spacing.md};
  }
`,H=l().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  min-width: 0;
`,R=l().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-left: 2px solid ${L};
  border-radius: ${d.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${d.w4.spacing.lg};
  gap: ${d.w4.spacing.md};
  transition: border-color 0.14s ease;
`,B=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${d.w4.spacing.sm};
  height: 100%;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,G=l().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 100%;
`,N=l().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  line-height: 1;
`,K=l().span`
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
`;let Q=l().div`
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
`,q=l().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:a})=>a?L:"transparent"};
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.md};
  font-size: 12px;
  font-weight: 600;
  font-family: ${d.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({active:a})=>a?d.w4.colors.mainText:d.w4.colors.mainTextMuted};
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
`;let U=l().button`
  position: fixed;
  bottom: max(${d.w4.spacing.md}, env(safe-area-inset-bottom, ${d.w4.spacing.md}));
  right: ${d.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${L};
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
`;function J({topBarRight:a}){let[e]=(0,c.Ym)(),t=(0,s.useMemo)(()=>(0,c.Nx)(e,m.A),[e]),{data:o,loaded:l,save:n}=(0,g.useForma)(),[d,L]=(0,s.useState)("16:8"),[O,V]=(0,s.useState)(!1),[X,Z]=(0,s.useState)(void 0),[aa,ae]=(0,s.useState)(null),[at,ai]=(0,s.useState)(!1),[as,ao]=(0,s.useState)("today"),al=(0,s.useCallback)((a,e)=>{Z(a),ae(e??null),V(!0)},[]),an=(0,s.useCallback)(()=>{V(!1),Z(void 0),ae(null)},[]),ad=o??{...g.EMPTY_FORMA_DATA,templates:g.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},ar=(0,s.useCallback)(async(a,e)=>{let t={...ad,sessions:[...ad.sessions,{id:(0,w.z)(),startedAt:Date.now(),targetHours:e,protocol:a}]};await n(t)},[ad,n]),ac=(0,s.useCallback)(async a=>{let e={...ad,sessions:ad.sessions.map(e=>e.id===a.id?{...e,endedAt:Date.now()}:e)};await n(e)},[ad,n]),ag=(0,s.useCallback)(async()=>{let a=ad.sessions.find(a=>void 0===a.endedAt);a&&await ac(a)},[ad,ac]),aw=(0,s.useCallback)(a=>{al(void 0,{kind:"fast",entry:a})},[al]),am=(0,s.useCallback)(async(a,e,t,i)=>{let s={...ad,sessions:[...ad.sessions,{id:(0,w.z)(),startedAt:t,endedAt:i,targetHours:e,protocol:a}]};await n(s)},[ad,n]),ap=(0,s.useCallback)(async(a,e,t,i,s)=>{let o={...ad,sessions:ad.sessions.map(o=>o.id===a?{...o,protocol:e,targetHours:t,startedAt:i,endedAt:s}:o)};await n(o)},[ad,n]),ah=(0,s.useCallback)(async(a,e,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...ad,meals:[...ad.meals,{id:(0,w.z)(),date:s,slot:a,proteinG:e,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[ad,n]),af=(0,s.useCallback)(async a=>{let e=new Date().toISOString().slice(0,10),t={...ad,meals:[...ad.meals,{...a,id:(0,w.z)(),date:e,createdAt:Date.now()}]};await n(t)},[ad,n]),ax=(0,s.useCallback)(async(a,e,t,i,s,o)=>{let l={...ad,meals:ad.meals.map(l=>l.id===a?{...l,slot:e,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[ad,n]),au=(0,s.useCallback)(async(a,e=new Date().toISOString().slice(0,10))=>{let t=ad.weights.filter(a=>a.date!==e),i={...ad,weights:[...t,{date:e,kg:a}]};await n(i)},[ad,n]),ab=(0,s.useCallback)(async(a,e)=>{let t={...ad,weights:ad.weights.filter(e=>e.date!==a).concat({date:a,kg:e})};await n(t)},[ad,n]),ak=(0,s.useCallback)(async(a,e=new Date().toISOString().slice(0,10))=>{let t={...ad,walks:[...ad.walks,{id:(0,w.z)(),date:e,minutes:a}]};await n(t)},[ad,n]),av=(0,s.useCallback)(async(a,e,t)=>{let i={...ad,walks:ad.walks.map(i=>i.id===a?{...i,minutes:e,date:t}:i)};await n(i)},[ad,n]),ay=(0,s.useCallback)(async(a,e=new Date().toISOString().slice(0,10))=>{let t={id:(0,w.z)(),date:e,ml:a,createdAt:Date.now()},i={...ad,water:[...ad.water??[],t]};await n(i)},[ad,n]),aj=(0,s.useCallback)(async(a,e,t)=>{let i={...ad,water:(ad.water??[]).map(i=>i.id===a?{...i,ml:e,date:t}:i)};await n(i)},[ad,n]),aC=(0,s.useCallback)(async a=>{let e=new Date().toISOString().slice(0,10),t={...ad,meals:[...ad.meals,{id:(0,w.z)(),date:e,slot:a.slot,templateId:a.id,proteinG:a.proteinG,kcal:a.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[ad,n]),a$=(0,s.useCallback)(async a=>{let e={...ad,meals:ad.meals.filter(e=>e.id!==a)};await n(e)},[ad,n]),aS=(0,s.useCallback)(async a=>{let e={...ad,weights:ad.weights.filter(e=>e.date!==a)};await n(e)},[ad,n]),aD=(0,s.useCallback)(async a=>{let e={...ad,walks:ad.walks.filter(e=>e.date!==a)};await n(e)},[ad,n]),aM=(0,s.useCallback)(async a=>{let e={...ad,sessions:ad.sessions.filter(e=>e.id!==a)};await n(e)},[ad,n]),aF=(0,s.useCallback)(()=>al("meal"),[al]),az=(0,s.useCallback)(()=>al("walk"),[al]),aE=(0,s.useCallback)(()=>al("weight"),[al]),aT=(0,s.useCallback)(a=>{let e=ad.meals.find(e=>e.id===a);e&&al("meal",{kind:"meal",entry:e})},[ad.meals,al]),aW=(0,s.useCallback)(a=>{let e=ad.weights.find(e=>e.date===a);e&&al("weight",{kind:"weight",entry:e})},[ad.weights,al]),aA=(0,s.useCallback)(async a=>{switch(a.kind){case"fast":await ar(a.fastProtocol??"custom",a.fastHours??16);break;case"meal":await ah(a.mealSlot??"dinner",0,0,a.mealDesc??"");break;case"weight":void 0!==a.weightKg&&await au(a.weightKg);break;case"walk":void 0!==a.walkMinutes&&await ak(a.walkMinutes);break;case"water":void 0!==a.waterMl&&await ay(a.waterMl)}},[ar,ah,au,ak,ay]),aL=(0,g.streakDays)(ad.sessions,ad.goal.targetHours),aO=(0,g.avgFastDuration)(ad.sessions,30),aI=ad.weights.find(a=>a.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(r.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:a,children:(0,i.jsxs)(I,{children:[(0,i.jsxs)(Q,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(q,{role:"tab","aria-selected":"today"===as,active:"today"===as,onClick:()=>ao("today"),children:t("forma.tab.today")}),(0,i.jsx)(q,{role:"tab","aria-selected":"fasting"===as,active:"fasting"===as,onClick:()=>ao("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(q,{role:"tab","aria-selected":"weight"===as,active:"weight"===as,onClick:()=>ao("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(q,{role:"tab","aria-selected":"activities"===as,active:"activities"===as,onClick:()=>ao("activities"),children:t("forma.tab.activities")}),(0,i.jsx)(q,{role:"tab","aria-selected":"analytics"===as,active:"analytics"===as,onClick:()=>ao("analytics"),children:t("forma.tab.analytics")}),(0,i.jsx)(q,{role:"tab","aria-selected":"coach"===as,active:"coach"===as,onClick:()=>ao("coach"),children:t("forma.tab.coach")}),(0,i.jsx)(q,{role:"tab","aria-selected":"settings"===as,active:"settings"===as,onClick:()=>ao("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(P,{children:["fasting"===as&&(0,i.jsx)(h.B,{t:t,active:d,onChange:L}),(0,i.jsx)(_,{children:(0,i.jsxs)(Y,{children:["today"===as&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.F,{t:t,onParsed:a=>void aA(a)}),(0,i.jsx)(S.C,{t:t,cards:[{id:"mini-fast",defaultSize:"sm",render:()=>(0,i.jsx)(y.g,{data:ad,t:t,onClick:()=>ao("fasting")})},{id:"mini-weight",defaultSize:"sm",render:()=>(0,i.jsx)(j.S,{data:ad,t:t,onClick:()=>ao("weight")})},{id:"today",defaultSize:"lg",render:()=>(0,i.jsx)(k._,{data:ad,t:t,onLogMeal:aF,onLogWalk:az,onLogWeight:aE,onLogWater:a=>void ay(a),onDeleteMeal:a=>void a$(a),onEditMeal:aT})},{id:"ask",defaultSize:"lg",render:()=>(0,i.jsx)(v.j,{data:ad,t:t,locale:e})},{id:"week",defaultSize:"lg",render:()=>(0,i.jsx)(u.v,{data:ad,t:t,locale:e,onTapTemplate:a=>void aC(a)})},{id:"stats",defaultSize:"md",render:()=>(0,i.jsxs)(B,{children:[(0,i.jsxs)(G,{children:[(0,i.jsx)(N,{children:aL}),(0,i.jsx)(K,{children:t("forma.streak",{n:aL})})]}),(0,i.jsxs)(G,{children:[(0,i.jsx)(N,{children:aO>0?aO.toFixed(1):"—"}),(0,i.jsx)(K,{children:t("forma.hero.avgDuration")})]}),aI&&(0,i.jsxs)(G,{children:[(0,i.jsx)(N,{children:aI.kg.toFixed(1)}),(0,i.jsx)(K,{children:t("forma.weight.label")})]})]})}]})]}),"coach"===as&&(0,i.jsxs)(H,{children:[(0,i.jsx)(F.q,{t:t,onOpenCheckIn:()=>ai(!0),onOpenSettings:()=>ao("settings")}),(0,i.jsx)(E.s,{t:t}),(0,i.jsx)(T.g,{t:t}),(0,i.jsx)(A.v,{data:ad,t:t,locale:e}),(0,i.jsx)(W.c,{t:t,locale:e})]}),"fasting"===as&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.P,{t:t,active:d,onChange:L}),(0,i.jsx)(R,{children:(0,i.jsx)(p.k,{data:ad,t:t,onStart:()=>{let a="16:8"===d?16:"18:6"===d?18:"20:4"===d?20:ad.goal.targetHours;ar(d,a)},onStop:a=>void ac(a),onEditStart:a=>aw(a)})}),(0,i.jsx)(u.v,{data:ad,t:t,locale:e,onTapTemplate:a=>void aC(a)})]}),"weight"===as&&(0,i.jsx)(C.m,{data:ad,t:t,onLogWeight:aE,onDeleteWeight:a=>void aS(a),onEditWeight:aW}),"activities"===as&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(M.N,{data:ad,t:t,locale:e,onEditFast:a=>aw(a),onEditMeal:a=>aT(a.id),onDuplicateMeal:a=>void af(a),onEditWeight:a=>aW(a.date),onDeleteFast:a=>void aM(a),onDeleteMeal:a=>void a$(a),onDeleteWeight:a=>void aS(a),onDeleteWalk:a=>void aD(a)})}),"analytics"===as&&(0,i.jsx)(D.Q,{data:ad,t:t,locale:e}),"settings"===as&&(0,i.jsx)($.f,{data:ad,t:t,onSave:n})]})})]}),(0,i.jsx)(U,{"aria-label":t("forma.log"),onClick:()=>al(),children:(0,i.jsx)(r.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(b.Y,{open:O,onClose:an,data:ad,t:t,initialMode:X,editing:aa,onStartFast:(a,e)=>void ar(a,e),onStopFast:()=>void ag(),onLogPastFast:(a,e,t,i)=>void am(a,e,t,i),onEditFast:(a,e,t,i,s)=>void ap(a,e,t,i,s),onLogMeal:(a,e,t,i,s)=>void ah(a,e,t,i,s),onEditMeal:(a,e,t,i,s,o)=>void ax(a,e,t,i,s,o),onLogWeight:(a,e)=>void au(a,e),onEditWeight:(a,e)=>void ab(a,e),onLogWalk:(a,e)=>void ak(a,e),onEditWalk:(a,e,t)=>void av(a,e,t),onLogWater:(a,e)=>void ay(a,e),onEditWater:(a,e,t)=>void aj(a,e,t)}),(0,i.jsx)(z.N,{open:at,onClose:()=>ai(!1),t:t})]})})}}}]);