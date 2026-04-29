"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["362"],{73935(a,e,t){t.r(e),t.d(e,{default:()=>R});var i=t(65723),s=t(37991),o=t(36859),l=t.n(o),n=t(72799),r=t(6063),d=t(63236),c=t(28170),w=t(52502),p=t(54041),m=t(20948),g=t(25405),h=t(20483),x=t(17102),b=t(19652),u=t(77112),k=t(20429),f=t(71575),v=t(90429),y=t(22684),C=t(33499),j=t(24470),$=t(86704),S=t(69568),D=t(84391),M=t(7434),F=t(78531),T=t(79793),W=t(36971),z=t(359),E=t(82167);let L="#7fb77e",A=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,O=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,I=l().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  touch-action: pan-y;
  display: flex;
  flex-direction: column;
`,_=l().div`
  padding: ${r.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  flex: 1;
  animation: ${A} 0.25s ease both;
  min-width: 0;

  @media (max-width: ${r.w4.breakpoints.md}) {
    padding: ${r.w4.spacing.md};
    padding-bottom: calc(${r.w4.spacing.md} + 56px + env(safe-area-inset-bottom, 0px) + ${r.w4.spacing.md});
    gap: ${r.w4.spacing.md};
  }
`,P=l().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${r.w4.spacing.lg};
  min-width: 0;

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${r.w4.spacing.md};
  }
`,Y=l().div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};
  min-width: 0;
`,G=l().div`
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
  border-bottom: 2px solid ${({active:a})=>a?L:"transparent"};
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
  background: ${({active:a})=>a?`${L}14`:"transparent"};
  border: 1px solid ${({active:a})=>a?`${L}60`:r.w4.colors.border};
  border-radius: 99px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 600;
  font-family: ${r.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({active:a})=>a?L:r.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 140ms ease, border-color 140ms ease, background 140ms ease;
  min-height: 28px;
  white-space: nowrap;

  &:hover {
    color: ${r.w4.colors.mainText};
    border-color: ${r.w4.colors.borderStrong??r.w4.colors.mainTextMuted};
  }
`,H=l().button`
  position: fixed;
  bottom: max(${r.w4.spacing.md}, env(safe-area-inset-bottom, ${r.w4.spacing.md}));
  right: ${r.w4.spacing.md};
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
  @media (min-width: ${r.w4.breakpoints.md}) {
    display: none;
  }
`,Q=l().div`
  padding: ${r.w4.spacing.md};
`;function R({topBarRight:a}){let[e]=(0,c.Ym)(),t=(0,s.useMemo)(()=>(0,c.Nx)(e,m.A),[e]),{data:o,loaded:l,save:n}=(0,w.useForma)(),[r,L]=(0,s.useState)(!1),[A,q]=(0,s.useState)(void 0),[J,U]=(0,s.useState)(null),[X,V]=(0,s.useState)(!1),[Z,aa]=(0,s.useState)(!1),[ae,at]=(0,s.useState)("today"),[ai,as]=(0,s.useState)("overview"),ao=(0,s.useCallback)((a,e)=>{q(a),U(e??null),L(!0)},[]),al=(0,s.useCallback)(()=>{L(!1),q(void 0),U(null)},[]),an=o??{...w.EMPTY_FORMA_DATA,templates:w.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},ar=(0,s.useCallback)(async(a,e)=>{let t={...an,sessions:[...an.sessions,{id:(0,p.z)(),startedAt:Date.now(),targetHours:e,protocol:a}]};await n(t)},[an,n]),ad=(0,s.useCallback)(async a=>{let e={...an,sessions:an.sessions.map(e=>e.id===a.id?{...e,endedAt:Date.now()}:e)};await n(e)},[an,n]),ac=(0,s.useCallback)(async()=>{let a=an.sessions.find(a=>void 0===a.endedAt);a&&await ad(a)},[an,ad]),aw=(0,s.useCallback)(a=>{ao(void 0,{kind:"fast",entry:a})},[ao]),ap=(0,s.useCallback)(async(a,e,t,i)=>{let s={...an,sessions:[...an.sessions,{id:(0,p.z)(),startedAt:t,endedAt:i,targetHours:e,protocol:a}]};await n(s)},[an,n]),am=(0,s.useCallback)(async(a,e,t,i,s)=>{let o={...an,sessions:an.sessions.map(o=>o.id===a?{...o,protocol:e,targetHours:t,startedAt:i,endedAt:s}:o)};await n(o)},[an,n]),ag=(0,s.useCallback)(async(a,e,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...an,meals:[...an.meals,{id:(0,p.z)(),date:s,slot:a,proteinG:e,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[an,n]),ah=(0,s.useCallback)(async a=>{let e=new Date().toISOString().slice(0,10),t={...an,meals:[...an.meals,{...a,id:(0,p.z)(),date:e,createdAt:Date.now()}]};await n(t)},[an,n]),ax=(0,s.useCallback)(async(a,e,t,i,s,o)=>{let l={...an,meals:an.meals.map(l=>l.id===a?{...l,slot:e,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[an,n]),ab=(0,s.useCallback)(async(a,e=new Date().toISOString().slice(0,10))=>{let t=an.weights.filter(a=>a.date!==e),i={...an,weights:[...t,{date:e,kg:a}]};await n(i)},[an,n]),au=(0,s.useCallback)(async(a,e)=>{let t={...an,weights:an.weights.filter(e=>e.date!==a).concat({date:a,kg:e})};await n(t)},[an,n]),ak=(0,s.useCallback)(async(a,e=new Date().toISOString().slice(0,10))=>{let t={...an,walks:[...an.walks,{id:(0,p.z)(),date:e,minutes:a}]};await n(t)},[an,n]),af=(0,s.useCallback)(async(a,e,t)=>{let i={...an,walks:an.walks.map(i=>i.id===a?{...i,minutes:e,date:t}:i)};await n(i)},[an,n]),av=(0,s.useCallback)(async(a,e=new Date().toISOString().slice(0,10))=>{let t={id:(0,p.z)(),date:e,ml:a,createdAt:Date.now()},i={...an,water:[...an.water??[],t]};await n(i)},[an,n]),ay=(0,s.useCallback)(async(a,e,t)=>{let i={...an,water:(an.water??[]).map(i=>i.id===a?{...i,ml:e,date:t}:i)};await n(i)},[an,n]),aC=(0,s.useCallback)(async a=>{let e=new Date().toISOString().slice(0,10),t={...an,meals:[...an.meals,{id:(0,p.z)(),date:e,slot:a.slot,templateId:a.id,proteinG:a.proteinG,kcal:a.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[an,n]),aj=(0,s.useCallback)(async(a,e)=>{let t=new Date().toISOString().slice(0,10),i={...an,meals:[...an.meals,{id:(0,p.z)(),date:t,slot:a.slot,proteinG:a.proteinG,kcal:a.kcal,notes:`🥤 ${e}`,createdAt:Date.now()}]};await n(i)},[an,n]),a$=(0,s.useCallback)(async a=>{let e={...an,meals:an.meals.filter(e=>e.id!==a)};await n(e)},[an,n]),aS=(0,s.useCallback)(async a=>{let e={...an,weights:an.weights.filter(e=>e.date!==a)};await n(e)},[an,n]),aD=(0,s.useCallback)(async a=>{let e={...an,walks:an.walks.filter(e=>e.date!==a)};await n(e)},[an,n]),aM=(0,s.useCallback)(async a=>{let e={...an,sessions:an.sessions.filter(e=>e.id!==a)};await n(e)},[an,n]),aF=(0,s.useCallback)(()=>ao("meal"),[ao]),aT=(0,s.useCallback)(()=>ao("walk"),[ao]),aW=(0,s.useCallback)(()=>ao("weight"),[ao]),az=(0,s.useCallback)(a=>{let e=an.meals.find(e=>e.id===a);e&&ao("meal",{kind:"meal",entry:e})},[an.meals,ao]),aE=(0,s.useCallback)(a=>{let e=an.weights.find(e=>e.date===a);e&&ao("weight",{kind:"weight",entry:e})},[an.weights,ao]),aL=(0,s.useCallback)(async a=>{switch(a.kind){case"fast":await ar(a.fastProtocol??"custom",a.fastHours??16);break;case"meal":await ag(a.mealSlot??"dinner",0,0,a.mealDesc??"");break;case"weight":void 0!==a.weightKg&&await ab(a.weightKg);break;case"walk":void 0!==a.walkMinutes&&await ak(a.walkMinutes);break;case"water":void 0!==a.waterMl&&await av(a.waterMl)}},[ar,ag,ab,ak,av]),aA=(0,i.jsx)(d.K0,{title:t("forma.settings.cog.label"),onClick:()=>aa(!0),children:(0,i.jsx)(d.In,{name:"settings",size:16})});return(0,i.jsx)(d.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:(0,i.jsxs)(i.Fragment,{children:[aA,a]}),children:(0,i.jsxs)(O,{children:[(0,i.jsxs)(G,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(K,{role:"tab","aria-selected":"today"===ae,active:"today"===ae,onClick:()=>at("today"),children:t("forma.tab.today")}),(0,i.jsx)(K,{role:"tab","aria-selected":"trends"===ae,active:"trends"===ae,onClick:()=>at("trends"),children:t("forma.tab.trends")}),(0,i.jsx)(K,{role:"tab","aria-selected":"coach"===ae,active:"coach"===ae,onClick:()=>at("coach"),children:t("forma.tab.coach")})]}),(0,i.jsx)(I,{children:(0,i.jsxs)(_,{children:["today"===ae&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(M.c,{data:an,t:t}),(0,i.jsxs)(P,{children:[(0,i.jsx)(F.F,{data:an,t:t,onClick:()=>ao("startFast")}),(0,i.jsx)(T.J,{data:an,t:t,onClick:()=>ao("weight")})]}),(0,i.jsx)(W.z,{data:an,t:t,onOpenSheet:ao}),(0,i.jsx)(z.e,{t:t,onLogShake:(a,e)=>void aj(a,e)}),(0,i.jsx)(g.F,{t:t,onParsed:a=>void aL(a)}),(0,i.jsx)(b._,{data:an,t:t,onLogMeal:aF,onLogWalk:aT,onLogWeight:aW,onLogWater:a=>void av(a),onDeleteMeal:a=>void a$(a),onEditMeal:az,onTapTemplate:a=>void aC(a)}),(0,i.jsx)(h.v,{data:an,t:t,locale:e,onTapTemplate:a=>void aC(a)})]}),"trends"===ae&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(N,{role:"tablist","aria-label":t("forma.trends.sub.aria"),children:[(0,i.jsx)(B,{role:"tab","aria-selected":"overview"===ai,active:"overview"===ai,onClick:()=>as("overview"),children:t("forma.trends.sub.overview")}),(0,i.jsx)(B,{role:"tab","aria-selected":"weight"===ai,active:"weight"===ai,onClick:()=>as("weight"),children:t("forma.trends.sub.weight")}),(0,i.jsx)(B,{role:"tab","aria-selected":"activities"===ai,active:"activities"===ai,onClick:()=>as("activities"),children:t("forma.trends.sub.activities")})]}),"overview"===ai&&(0,i.jsx)(f.Q,{data:an,t:t,locale:e}),"weight"===ai&&(0,i.jsx)(u.m,{data:an,t:t,onLogWeight:aW,onDeleteWeight:a=>void aS(a),onEditWeight:aE}),"activities"===ai&&(0,i.jsx)(v.N,{data:an,t:t,locale:e,onEditFast:a=>aw(a),onEditMeal:a=>az(a.id),onDuplicateMeal:a=>void ah(a),onEditWeight:a=>aE(a.date),onDeleteFast:a=>void aM(a),onDeleteMeal:a=>void a$(a),onDeleteWeight:a=>void aS(a),onDeleteWalk:a=>void aD(a)})]}),"coach"===ae&&(0,i.jsxs)(Y,{children:[(0,i.jsx)(y.q,{t:t,onOpenCheckIn:()=>V(!0),onOpenSettings:()=>aa(!0)}),(0,i.jsx)(j.s,{t:t}),(0,i.jsx)($.g,{t:t}),(0,i.jsx)(D.v,{data:an,t:t,locale:e}),(0,i.jsx)(S.c,{t:t,locale:e})]})]})}),(0,i.jsx)(H,{"aria-label":t("forma.log"),onClick:()=>ao(),children:(0,i.jsx)(d.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(x.Y,{open:r,onClose:al,data:an,t:t,initialMode:A,editing:J,onStartFast:(a,e)=>void ar(a,e),onStopFast:()=>void ac(),onLogPastFast:(a,e,t,i)=>void ap(a,e,t,i),onEditFast:(a,e,t,i,s)=>void am(a,e,t,i,s),onLogMeal:(a,e,t,i,s)=>void ag(a,e,t,i,s),onEditMeal:(a,e,t,i,s,o)=>void ax(a,e,t,i,s,o),onLogWeight:(a,e)=>void ab(a,e),onEditWeight:(a,e)=>void au(a,e),onLogWalk:(a,e)=>void ak(a,e),onEditWalk:(a,e,t)=>void af(a,e,t),onLogWater:(a,e)=>void av(a,e),onEditWater:(a,e,t)=>void ay(a,e,t)}),(0,i.jsx)(C.N,{open:X,onClose:()=>V(!1),t:t}),(0,i.jsx)(E.X,{open:Z,onClose:()=>aa(!1),ariaLabel:t("forma.settings.cog.label"),maxWidth:560,children:(0,i.jsx)(Q,{children:(0,i.jsx)(k.f,{data:an,t:t,onSave:n})})})]})})}}}]);