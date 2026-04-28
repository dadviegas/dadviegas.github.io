"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["362"],{73935(a,e,t){t.r(e),t.d(e,{default:()=>X});var i=t(65723),s=t(37991),o=t(36859),l=t.n(o),n=t(72799),d=t(6063),r=t(63236),c=t(28170),g=t(63019),m=t(54041),w=t(20948),p=t(72552),h=t(71589),x=t(68477),f=t(25405),u=t(20483),b=t(17102),k=t(19652),v=t(37103),y=t(52128),j=t(59446),C=t(92152),$=t(20429),S=t(4406),D=t(84964),M=t(90429),F=t(22684),z=t(33499),T=t(24470),E=t(86704),W=t(69568),A=t(84391),L=t(7434),O=t(36971);let I="#7fb77e",P=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,_=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,Y=l().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,H=l().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  touch-action: pan-y;
  display: flex;
  flex-direction: column;
`,R=l().div`
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  flex: 1;
  animation: ${P} 0.25s ease both;
  min-width: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding: ${d.w4.spacing.md};
    padding-bottom: calc(${d.w4.spacing.md} + 56px + env(safe-area-inset-bottom, 0px) + ${d.w4.spacing.md});
    gap: ${d.w4.spacing.md};
  }
`,B=l().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  min-width: 0;
`,G=l().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-left: 2px solid ${I};
  border-radius: ${d.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${d.w4.spacing.lg};
  gap: ${d.w4.spacing.md};
  transition: border-color 0.14s ease;
`,N=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${d.w4.spacing.sm};
  height: 100%;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,K=l().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 100%;
`,Q=l().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  line-height: 1;
`,q=l().span`
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
`;let U=l().div`
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
`,J=l().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:a})=>a?I:"transparent"};
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
`;let V=l().button`
  position: fixed;
  bottom: max(${d.w4.spacing.md}, env(safe-area-inset-bottom, ${d.w4.spacing.md}));
  right: ${d.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${I};
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
`;function X({topBarRight:a}){let[e]=(0,c.Ym)(),t=(0,s.useMemo)(()=>(0,c.Nx)(e,w.A),[e]),{data:o,loaded:l,save:n}=(0,g.useForma)(),[d,I]=(0,s.useState)("16:8"),[P,Z]=(0,s.useState)(!1),[aa,ae]=(0,s.useState)(void 0),[at,ai]=(0,s.useState)(null),[as,ao]=(0,s.useState)(!1),[al,an]=(0,s.useState)("today"),ad=(0,s.useCallback)((a,e)=>{ae(a),ai(e??null),Z(!0)},[]),ar=(0,s.useCallback)(()=>{Z(!1),ae(void 0),ai(null)},[]),ac=o??{...g.EMPTY_FORMA_DATA,templates:g.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},ag=(0,s.useCallback)(async(a,e)=>{let t={...ac,sessions:[...ac.sessions,{id:(0,m.z)(),startedAt:Date.now(),targetHours:e,protocol:a}]};await n(t)},[ac,n]),am=(0,s.useCallback)(async a=>{let e={...ac,sessions:ac.sessions.map(e=>e.id===a.id?{...e,endedAt:Date.now()}:e)};await n(e)},[ac,n]),aw=(0,s.useCallback)(async()=>{let a=ac.sessions.find(a=>void 0===a.endedAt);a&&await am(a)},[ac,am]),ap=(0,s.useCallback)(a=>{ad(void 0,{kind:"fast",entry:a})},[ad]),ah=(0,s.useCallback)(async(a,e,t,i)=>{let s={...ac,sessions:[...ac.sessions,{id:(0,m.z)(),startedAt:t,endedAt:i,targetHours:e,protocol:a}]};await n(s)},[ac,n]),ax=(0,s.useCallback)(async(a,e,t,i,s)=>{let o={...ac,sessions:ac.sessions.map(o=>o.id===a?{...o,protocol:e,targetHours:t,startedAt:i,endedAt:s}:o)};await n(o)},[ac,n]),af=(0,s.useCallback)(async(a,e,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...ac,meals:[...ac.meals,{id:(0,m.z)(),date:s,slot:a,proteinG:e,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[ac,n]),au=(0,s.useCallback)(async a=>{let e=new Date().toISOString().slice(0,10),t={...ac,meals:[...ac.meals,{...a,id:(0,m.z)(),date:e,createdAt:Date.now()}]};await n(t)},[ac,n]),ab=(0,s.useCallback)(async(a,e,t,i,s,o)=>{let l={...ac,meals:ac.meals.map(l=>l.id===a?{...l,slot:e,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[ac,n]),ak=(0,s.useCallback)(async(a,e=new Date().toISOString().slice(0,10))=>{let t=ac.weights.filter(a=>a.date!==e),i={...ac,weights:[...t,{date:e,kg:a}]};await n(i)},[ac,n]),av=(0,s.useCallback)(async(a,e)=>{let t={...ac,weights:ac.weights.filter(e=>e.date!==a).concat({date:a,kg:e})};await n(t)},[ac,n]),ay=(0,s.useCallback)(async(a,e=new Date().toISOString().slice(0,10))=>{let t={...ac,walks:[...ac.walks,{id:(0,m.z)(),date:e,minutes:a}]};await n(t)},[ac,n]),aj=(0,s.useCallback)(async(a,e,t)=>{let i={...ac,walks:ac.walks.map(i=>i.id===a?{...i,minutes:e,date:t}:i)};await n(i)},[ac,n]),aC=(0,s.useCallback)(async(a,e=new Date().toISOString().slice(0,10))=>{let t={id:(0,m.z)(),date:e,ml:a,createdAt:Date.now()},i={...ac,water:[...ac.water??[],t]};await n(i)},[ac,n]),a$=(0,s.useCallback)(async(a,e,t)=>{let i={...ac,water:(ac.water??[]).map(i=>i.id===a?{...i,ml:e,date:t}:i)};await n(i)},[ac,n]),aS=(0,s.useCallback)(async a=>{let e=new Date().toISOString().slice(0,10),t={...ac,meals:[...ac.meals,{id:(0,m.z)(),date:e,slot:a.slot,templateId:a.id,proteinG:a.proteinG,kcal:a.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[ac,n]),aD=(0,s.useCallback)(async a=>{let e={...ac,meals:ac.meals.filter(e=>e.id!==a)};await n(e)},[ac,n]),aM=(0,s.useCallback)(async a=>{let e={...ac,weights:ac.weights.filter(e=>e.date!==a)};await n(e)},[ac,n]),aF=(0,s.useCallback)(async a=>{let e={...ac,walks:ac.walks.filter(e=>e.date!==a)};await n(e)},[ac,n]),az=(0,s.useCallback)(async a=>{let e={...ac,sessions:ac.sessions.filter(e=>e.id!==a)};await n(e)},[ac,n]),aT=(0,s.useCallback)(()=>ad("meal"),[ad]),aE=(0,s.useCallback)(()=>ad("walk"),[ad]),aW=(0,s.useCallback)(()=>ad("weight"),[ad]),aA=(0,s.useCallback)(a=>{let e=ac.meals.find(e=>e.id===a);e&&ad("meal",{kind:"meal",entry:e})},[ac.meals,ad]),aL=(0,s.useCallback)(a=>{let e=ac.weights.find(e=>e.date===a);e&&ad("weight",{kind:"weight",entry:e})},[ac.weights,ad]),aO=(0,s.useCallback)(async a=>{switch(a.kind){case"fast":await ag(a.fastProtocol??"custom",a.fastHours??16);break;case"meal":await af(a.mealSlot??"dinner",0,0,a.mealDesc??"");break;case"weight":void 0!==a.weightKg&&await ak(a.weightKg);break;case"walk":void 0!==a.walkMinutes&&await ay(a.walkMinutes);break;case"water":void 0!==a.waterMl&&await aC(a.waterMl)}},[ag,af,ak,ay,aC]),aI=(0,g.streakDays)(ac.sessions,ac.goal.targetHours),aP=(0,g.avgFastDuration)(ac.sessions,30),a_=ac.weights.find(a=>a.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(r.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:a,children:(0,i.jsxs)(_,{children:[(0,i.jsxs)(U,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(J,{role:"tab","aria-selected":"today"===al,active:"today"===al,onClick:()=>an("today"),children:t("forma.tab.today")}),(0,i.jsx)(J,{role:"tab","aria-selected":"fasting"===al,active:"fasting"===al,onClick:()=>an("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(J,{role:"tab","aria-selected":"weight"===al,active:"weight"===al,onClick:()=>an("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(J,{role:"tab","aria-selected":"activities"===al,active:"activities"===al,onClick:()=>an("activities"),children:t("forma.tab.activities")}),(0,i.jsx)(J,{role:"tab","aria-selected":"analytics"===al,active:"analytics"===al,onClick:()=>an("analytics"),children:t("forma.tab.analytics")}),(0,i.jsx)(J,{role:"tab","aria-selected":"coach"===al,active:"coach"===al,onClick:()=>an("coach"),children:t("forma.tab.coach")}),(0,i.jsx)(J,{role:"tab","aria-selected":"settings"===al,active:"settings"===al,onClick:()=>an("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(Y,{children:["fasting"===al&&(0,i.jsx)(h.B,{t:t,active:d,onChange:I}),(0,i.jsx)(H,{children:(0,i.jsxs)(R,{children:["today"===al&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(L.c,{data:ac,t:t}),(0,i.jsx)(O.z,{data:ac,t:t,onOpenSheet:ad}),(0,i.jsx)(f.F,{t:t,onParsed:a=>void aO(a)}),(0,i.jsx)(S.C,{t:t,cards:[{id:"mini-fast",defaultSize:"sm",render:()=>(0,i.jsx)(y.g,{data:ac,t:t,onClick:()=>an("fasting")})},{id:"mini-weight",defaultSize:"sm",render:()=>(0,i.jsx)(j.S,{data:ac,t:t,onClick:()=>an("weight")})},{id:"today",defaultSize:"lg",render:()=>(0,i.jsx)(k._,{data:ac,t:t,onLogMeal:aT,onLogWalk:aE,onLogWeight:aW,onLogWater:a=>void aC(a),onDeleteMeal:a=>void aD(a),onEditMeal:aA,onTapTemplate:a=>void aS(a)})},{id:"ask",defaultSize:"lg",render:()=>(0,i.jsx)(v.j,{data:ac,t:t,locale:e})},{id:"week",defaultSize:"lg",render:()=>(0,i.jsx)(u.v,{data:ac,t:t,locale:e,onTapTemplate:a=>void aS(a)})},{id:"stats",defaultSize:"md",render:()=>(0,i.jsxs)(N,{children:[(0,i.jsxs)(K,{children:[(0,i.jsx)(Q,{children:aI}),(0,i.jsx)(q,{children:t("forma.streak",{n:aI})})]}),(0,i.jsxs)(K,{children:[(0,i.jsx)(Q,{children:aP>0?aP.toFixed(1):"—"}),(0,i.jsx)(q,{children:t("forma.hero.avgDuration")})]}),a_&&(0,i.jsxs)(K,{children:[(0,i.jsx)(Q,{children:a_.kg.toFixed(1)}),(0,i.jsx)(q,{children:t("forma.weight.label")})]})]})}]})]}),"coach"===al&&(0,i.jsxs)(B,{children:[(0,i.jsx)(F.q,{t:t,onOpenCheckIn:()=>ao(!0),onOpenSettings:()=>an("settings")}),(0,i.jsx)(T.s,{t:t}),(0,i.jsx)(E.g,{t:t}),(0,i.jsx)(A.v,{data:ac,t:t,locale:e}),(0,i.jsx)(W.c,{t:t,locale:e})]}),"fasting"===al&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.P,{t:t,active:d,onChange:I}),(0,i.jsx)(G,{children:(0,i.jsx)(p.k,{data:ac,t:t,onStart:()=>{let a="16:8"===d?16:"18:6"===d?18:"20:4"===d?20:ac.goal.targetHours;ag(d,a)},onStop:a=>void am(a),onEditStart:a=>ap(a)})}),(0,i.jsx)(u.v,{data:ac,t:t,locale:e,onTapTemplate:a=>void aS(a)})]}),"weight"===al&&(0,i.jsx)(C.m,{data:ac,t:t,onLogWeight:aW,onDeleteWeight:a=>void aM(a),onEditWeight:aL}),"activities"===al&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(M.N,{data:ac,t:t,locale:e,onEditFast:a=>ap(a),onEditMeal:a=>aA(a.id),onDuplicateMeal:a=>void au(a),onEditWeight:a=>aL(a.date),onDeleteFast:a=>void az(a),onDeleteMeal:a=>void aD(a),onDeleteWeight:a=>void aM(a),onDeleteWalk:a=>void aF(a)})}),"analytics"===al&&(0,i.jsx)(D.Q,{data:ac,t:t,locale:e}),"settings"===al&&(0,i.jsx)($.f,{data:ac,t:t,onSave:n})]})})]}),(0,i.jsx)(V,{"aria-label":t("forma.log"),onClick:()=>ad(),children:(0,i.jsx)(r.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(b.Y,{open:P,onClose:ar,data:ac,t:t,initialMode:aa,editing:at,onStartFast:(a,e)=>void ag(a,e),onStopFast:()=>void aw(),onLogPastFast:(a,e,t,i)=>void ah(a,e,t,i),onEditFast:(a,e,t,i,s)=>void ax(a,e,t,i,s),onLogMeal:(a,e,t,i,s)=>void af(a,e,t,i,s),onEditMeal:(a,e,t,i,s,o)=>void ab(a,e,t,i,s,o),onLogWeight:(a,e)=>void ak(a,e),onEditWeight:(a,e)=>void av(a,e),onLogWalk:(a,e)=>void ay(a,e),onEditWalk:(a,e,t)=>void aj(a,e,t),onLogWater:(a,e)=>void aC(a,e),onEditWater:(a,e,t)=>void a$(a,e,t)}),(0,i.jsx)(z.N,{open:as,onClose:()=>ao(!1),t:t})]})})}}}]);