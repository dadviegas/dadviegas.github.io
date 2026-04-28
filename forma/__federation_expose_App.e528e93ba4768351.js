"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["362"],{73935(a,e,t){t.r(e),t.d(e,{default:()=>Q});var i=t(65723),s=t(37991),o=t(36859),l=t.n(o),n=t(72799),r=t(6063),d=t(63236),c=t(28170),w=t(94021),p=t(54041),m=t(20948),g=t(25405),h=t(20483),x=t(17102),b=t(19652),u=t(77112),f=t(20429),k=t(71575),v=t(90429),y=t(22684),C=t(33499),j=t(24470),$=t(86704),S=t(69568),D=t(84391),M=t(7434),F=t(78531),T=t(79793),W=t(36971),E=t(82167);let z="#7fb77e",L=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,A=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,O=l().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  touch-action: pan-y;
  display: flex;
  flex-direction: column;
`,I=l().div`
  padding: ${r.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  flex: 1;
  animation: ${L} 0.25s ease both;
  min-width: 0;

  @media (max-width: ${r.w4.breakpoints.md}) {
    padding: ${r.w4.spacing.md};
    padding-bottom: calc(${r.w4.spacing.md} + 56px + env(safe-area-inset-bottom, 0px) + ${r.w4.spacing.md});
    gap: ${r.w4.spacing.md};
  }
`,_=l().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${r.w4.spacing.lg};
  min-width: 0;

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${r.w4.spacing.md};
  }
`,P=l().div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  min-width: 0;
`,Y=l().div`
  display: flex;
  gap: 4px;
  padding: ${r.w4.spacing.sm} ${r.w4.spacing.lg} 0;
  border-bottom: 1px solid ${r.w4.colors.border};
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  flex-shrink: 0;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: ${r.w4.breakpoints.md}) {
    padding-left: ${r.w4.spacing.md};
    padding-right: ${r.w4.spacing.md};
  }
`,K=l().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:a})=>a?z:"transparent"};
  padding: ${r.w4.spacing.sm} ${r.w4.spacing.md};
  font-size: 12px;
  font-weight: 600;
  font-family: ${r.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({active:a})=>a?r.w4.colors.mainText:r.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 140ms ease, border-color 140ms ease;
  margin-bottom: -1px;
  flex-shrink: 0;
  white-space: nowrap;
  min-height: 44px;
  &:hover { color: ${r.w4.colors.mainText}; }

  @media (max-width: ${r.w4.breakpoints.md}) {
    padding: ${r.w4.spacing.sm} 10px;
    letter-spacing: 0.12em;
    font-size: 11px;
  }
`,N=l().div`
  display: flex;
  gap: ${r.w4.spacing.xs};
  flex-wrap: wrap;
`,B=l().button`
  background: ${({active:a})=>a?`${z}14`:"transparent"};
  border: 1px solid ${({active:a})=>a?`${z}60`:r.w4.colors.border};
  border-radius: 99px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 600;
  font-family: ${r.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({active:a})=>a?z:r.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 140ms ease, border-color 140ms ease, background 140ms ease;
  min-height: 28px;
  white-space: nowrap;

  &:hover {
    color: ${r.w4.colors.mainText};
    border-color: ${r.w4.colors.borderStrong??r.w4.colors.mainTextMuted};
  }
`,G=l().button`
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
`,H=l().div`
  padding: ${r.w4.spacing.md};
`;function Q({topBarRight:a}){let[e]=(0,c.Ym)(),t=(0,s.useMemo)(()=>(0,c.Nx)(e,m.A),[e]),{data:o,loaded:l,save:n}=(0,w.useForma)(),[r,z]=(0,s.useState)(!1),[L,R]=(0,s.useState)(void 0),[q,J]=(0,s.useState)(null),[U,X]=(0,s.useState)(!1),[V,Z]=(0,s.useState)(!1),[aa,ae]=(0,s.useState)("today"),[at,ai]=(0,s.useState)("overview"),as=(0,s.useCallback)((a,e)=>{R(a),J(e??null),z(!0)},[]),ao=(0,s.useCallback)(()=>{z(!1),R(void 0),J(null)},[]),al=o??{...w.EMPTY_FORMA_DATA,templates:w.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},an=(0,s.useCallback)(async(a,e)=>{let t={...al,sessions:[...al.sessions,{id:(0,p.z)(),startedAt:Date.now(),targetHours:e,protocol:a}]};await n(t)},[al,n]),ar=(0,s.useCallback)(async a=>{let e={...al,sessions:al.sessions.map(e=>e.id===a.id?{...e,endedAt:Date.now()}:e)};await n(e)},[al,n]),ad=(0,s.useCallback)(async()=>{let a=al.sessions.find(a=>void 0===a.endedAt);a&&await ar(a)},[al,ar]),ac=(0,s.useCallback)(a=>{as(void 0,{kind:"fast",entry:a})},[as]),aw=(0,s.useCallback)(async(a,e,t,i)=>{let s={...al,sessions:[...al.sessions,{id:(0,p.z)(),startedAt:t,endedAt:i,targetHours:e,protocol:a}]};await n(s)},[al,n]),ap=(0,s.useCallback)(async(a,e,t,i,s)=>{let o={...al,sessions:al.sessions.map(o=>o.id===a?{...o,protocol:e,targetHours:t,startedAt:i,endedAt:s}:o)};await n(o)},[al,n]),am=(0,s.useCallback)(async(a,e,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...al,meals:[...al.meals,{id:(0,p.z)(),date:s,slot:a,proteinG:e,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[al,n]),ag=(0,s.useCallback)(async a=>{let e=new Date().toISOString().slice(0,10),t={...al,meals:[...al.meals,{...a,id:(0,p.z)(),date:e,createdAt:Date.now()}]};await n(t)},[al,n]),ah=(0,s.useCallback)(async(a,e,t,i,s,o)=>{let l={...al,meals:al.meals.map(l=>l.id===a?{...l,slot:e,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[al,n]),ax=(0,s.useCallback)(async(a,e=new Date().toISOString().slice(0,10))=>{let t=al.weights.filter(a=>a.date!==e),i={...al,weights:[...t,{date:e,kg:a}]};await n(i)},[al,n]),ab=(0,s.useCallback)(async(a,e)=>{let t={...al,weights:al.weights.filter(e=>e.date!==a).concat({date:a,kg:e})};await n(t)},[al,n]),au=(0,s.useCallback)(async(a,e=new Date().toISOString().slice(0,10))=>{let t={...al,walks:[...al.walks,{id:(0,p.z)(),date:e,minutes:a}]};await n(t)},[al,n]),af=(0,s.useCallback)(async(a,e,t)=>{let i={...al,walks:al.walks.map(i=>i.id===a?{...i,minutes:e,date:t}:i)};await n(i)},[al,n]),ak=(0,s.useCallback)(async(a,e=new Date().toISOString().slice(0,10))=>{let t={id:(0,p.z)(),date:e,ml:a,createdAt:Date.now()},i={...al,water:[...al.water??[],t]};await n(i)},[al,n]),av=(0,s.useCallback)(async(a,e,t)=>{let i={...al,water:(al.water??[]).map(i=>i.id===a?{...i,ml:e,date:t}:i)};await n(i)},[al,n]),ay=(0,s.useCallback)(async a=>{let e=new Date().toISOString().slice(0,10),t={...al,meals:[...al.meals,{id:(0,p.z)(),date:e,slot:a.slot,templateId:a.id,proteinG:a.proteinG,kcal:a.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[al,n]),aC=(0,s.useCallback)(async a=>{let e={...al,meals:al.meals.filter(e=>e.id!==a)};await n(e)},[al,n]),aj=(0,s.useCallback)(async a=>{let e={...al,weights:al.weights.filter(e=>e.date!==a)};await n(e)},[al,n]),a$=(0,s.useCallback)(async a=>{let e={...al,walks:al.walks.filter(e=>e.date!==a)};await n(e)},[al,n]),aS=(0,s.useCallback)(async a=>{let e={...al,sessions:al.sessions.filter(e=>e.id!==a)};await n(e)},[al,n]),aD=(0,s.useCallback)(()=>as("meal"),[as]),aM=(0,s.useCallback)(()=>as("walk"),[as]),aF=(0,s.useCallback)(()=>as("weight"),[as]),aT=(0,s.useCallback)(a=>{let e=al.meals.find(e=>e.id===a);e&&as("meal",{kind:"meal",entry:e})},[al.meals,as]),aW=(0,s.useCallback)(a=>{let e=al.weights.find(e=>e.date===a);e&&as("weight",{kind:"weight",entry:e})},[al.weights,as]),aE=(0,s.useCallback)(async a=>{switch(a.kind){case"fast":await an(a.fastProtocol??"custom",a.fastHours??16);break;case"meal":await am(a.mealSlot??"dinner",0,0,a.mealDesc??"");break;case"weight":void 0!==a.weightKg&&await ax(a.weightKg);break;case"walk":void 0!==a.walkMinutes&&await au(a.walkMinutes);break;case"water":void 0!==a.waterMl&&await ak(a.waterMl)}},[an,am,ax,au,ak]),az=(0,i.jsx)(d.K0,{title:t("forma.settings.cog.label"),onClick:()=>Z(!0),children:(0,i.jsx)(d.In,{name:"settings",size:16})});return(0,i.jsx)(d.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:(0,i.jsxs)(i.Fragment,{children:[az,a]}),children:(0,i.jsxs)(A,{children:[(0,i.jsxs)(Y,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(K,{role:"tab","aria-selected":"today"===aa,active:"today"===aa,onClick:()=>ae("today"),children:t("forma.tab.today")}),(0,i.jsx)(K,{role:"tab","aria-selected":"trends"===aa,active:"trends"===aa,onClick:()=>ae("trends"),children:t("forma.tab.trends")}),(0,i.jsx)(K,{role:"tab","aria-selected":"coach"===aa,active:"coach"===aa,onClick:()=>ae("coach"),children:t("forma.tab.coach")})]}),(0,i.jsx)(O,{children:(0,i.jsxs)(I,{children:["today"===aa&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(M.c,{data:al,t:t}),(0,i.jsxs)(_,{children:[(0,i.jsx)(F.F,{data:al,t:t,onClick:()=>as("startFast")}),(0,i.jsx)(T.J,{data:al,t:t,onClick:()=>as("weight")})]}),(0,i.jsx)(W.z,{data:al,t:t,onOpenSheet:as}),(0,i.jsx)(g.F,{t:t,onParsed:a=>void aE(a)}),(0,i.jsx)(b._,{data:al,t:t,onLogMeal:aD,onLogWalk:aM,onLogWeight:aF,onLogWater:a=>void ak(a),onDeleteMeal:a=>void aC(a),onEditMeal:aT,onTapTemplate:a=>void ay(a)}),(0,i.jsx)(h.v,{data:al,t:t,locale:e,onTapTemplate:a=>void ay(a)})]}),"trends"===aa&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(N,{role:"tablist","aria-label":t("forma.trends.sub.aria"),children:[(0,i.jsx)(B,{role:"tab","aria-selected":"overview"===at,active:"overview"===at,onClick:()=>ai("overview"),children:t("forma.trends.sub.overview")}),(0,i.jsx)(B,{role:"tab","aria-selected":"weight"===at,active:"weight"===at,onClick:()=>ai("weight"),children:t("forma.trends.sub.weight")}),(0,i.jsx)(B,{role:"tab","aria-selected":"activities"===at,active:"activities"===at,onClick:()=>ai("activities"),children:t("forma.trends.sub.activities")})]}),"overview"===at&&(0,i.jsx)(k.Q,{data:al,t:t,locale:e}),"weight"===at&&(0,i.jsx)(u.m,{data:al,t:t,onLogWeight:aF,onDeleteWeight:a=>void aj(a),onEditWeight:aW}),"activities"===at&&(0,i.jsx)(v.N,{data:al,t:t,locale:e,onEditFast:a=>ac(a),onEditMeal:a=>aT(a.id),onDuplicateMeal:a=>void ag(a),onEditWeight:a=>aW(a.date),onDeleteFast:a=>void aS(a),onDeleteMeal:a=>void aC(a),onDeleteWeight:a=>void aj(a),onDeleteWalk:a=>void a$(a)})]}),"coach"===aa&&(0,i.jsxs)(P,{children:[(0,i.jsx)(y.q,{t:t,onOpenCheckIn:()=>X(!0),onOpenSettings:()=>Z(!0)}),(0,i.jsx)(j.s,{t:t}),(0,i.jsx)($.g,{t:t}),(0,i.jsx)(D.v,{data:al,t:t,locale:e}),(0,i.jsx)(S.c,{t:t,locale:e})]})]})}),(0,i.jsx)(G,{"aria-label":t("forma.log"),onClick:()=>as(),children:(0,i.jsx)(d.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(x.Y,{open:r,onClose:ao,data:al,t:t,initialMode:L,editing:q,onStartFast:(a,e)=>void an(a,e),onStopFast:()=>void ad(),onLogPastFast:(a,e,t,i)=>void aw(a,e,t,i),onEditFast:(a,e,t,i,s)=>void ap(a,e,t,i,s),onLogMeal:(a,e,t,i,s)=>void am(a,e,t,i,s),onEditMeal:(a,e,t,i,s,o)=>void ah(a,e,t,i,s,o),onLogWeight:(a,e)=>void ax(a,e),onEditWeight:(a,e)=>void ab(a,e),onLogWalk:(a,e)=>void au(a,e),onEditWalk:(a,e,t)=>void af(a,e,t),onLogWater:(a,e)=>void ak(a,e),onEditWater:(a,e,t)=>void av(a,e,t)}),(0,i.jsx)(C.N,{open:U,onClose:()=>X(!1),t:t}),(0,i.jsx)(E.X,{open:V,onClose:()=>Z(!1),ariaLabel:t("forma.settings.cog.label"),maxWidth:560,children:(0,i.jsx)(H,{children:(0,i.jsx)(f.f,{data:al,t:t,onSave:n})})})]})})}}}]);