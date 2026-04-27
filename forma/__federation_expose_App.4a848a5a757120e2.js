"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["362"],{73935(e,a,t){t.r(a),t.d(a,{default:()=>U});var i=t(65723),s=t(37991),o=t(36859),l=t.n(o),n=t(72799),d=t(6063),r=t(80884),c=t(28170),g=t(60033),m=t(54041),p=t(20948),w=t(72552),h=t(71589),f=t(68477),x=t(25405),u=t(20483),b=t(17102),k=t(15742),v=t(37103),y=t(52128),j=t(59446),$=t(92152),C=t(20429),S=t(4406),D=t(63709),F=t(90429),M=t(22684),z=t(33499),E=t(24470),T=t(86704),W=t(69568);let A="#7fb77e",L=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,O=l().div`
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
`,I=l().main`
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,_=l().div`
  padding: ${d.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  flex: 1;
  animation: ${L} 0.25s ease both;
  min-width: 0;

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding: ${d.w4.spacing.md};
    gap: ${d.w4.spacing.md};
  }
`,Y=l().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.lg};
  min-width: 0;
`,H=l().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-left: 2px solid ${A};
  border-radius: ${d.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${d.w4.spacing.lg};
  gap: ${d.w4.spacing.md};
  transition: border-color 0.14s ease;
`,R=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${d.w4.spacing.sm};
  height: 100%;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,B=l().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 100%;
`,G=l().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  line-height: 1;
`,N=l().span`
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
`;let K=l().div`
  display: flex;
  gap: 4px;
  padding: ${d.w4.spacing.sm} ${d.w4.spacing.lg} 0;
  border-bottom: 1px solid ${d.w4.colors.border};
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  flex-shrink: 0;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding-left: ${d.w4.spacing.md};
    padding-right: ${d.w4.spacing.md};
  }
`,Q=l().button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({active:e})=>e?A:"transparent"};
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
`;let q=l().button`
  position: fixed;
  bottom: max(${d.w4.spacing.md}, env(safe-area-inset-bottom, ${d.w4.spacing.md}));
  right: ${d.w4.spacing.md};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${A};
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
`;function U({topBarRight:e}){let[a]=(0,c.Ym)(),t=(0,s.useMemo)(()=>(0,c.Nx)(a,p.A),[a]),{data:o,loaded:l,save:n}=(0,g.useForma)(),[d,A]=(0,s.useState)("16:8"),[L,J]=(0,s.useState)(!1),[V,X]=(0,s.useState)(void 0),[Z,ee]=(0,s.useState)(null),[ea,et]=(0,s.useState)(!1),[ei,es]=(0,s.useState)("today"),eo=(0,s.useCallback)((e,a)=>{X(e),ee(a??null),J(!0)},[]),el=(0,s.useCallback)(()=>{J(!1),X(void 0),ee(null)},[]),en=o??{...g.EMPTY_FORMA_DATA,templates:g.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},ed=(0,s.useCallback)(async(e,a)=>{let t={...en,sessions:[...en.sessions,{id:(0,m.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[en,n]),er=(0,s.useCallback)(async e=>{let a={...en,sessions:en.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[en,n]),ec=(0,s.useCallback)(async()=>{let e=en.sessions.find(e=>void 0===e.endedAt);e&&await er(e)},[en,er]),eg=(0,s.useCallback)(e=>{eo(void 0,{kind:"fast",entry:e})},[eo]),em=(0,s.useCallback)(async(e,a,t,i)=>{let s={...en,sessions:[...en.sessions,{id:(0,m.z)(),startedAt:t,endedAt:i,targetHours:a,protocol:e}]};await n(s)},[en,n]),ep=(0,s.useCallback)(async(e,a,t,i,s)=>{let o={...en,sessions:en.sessions.map(o=>o.id===e?{...o,protocol:a,targetHours:t,startedAt:i,endedAt:s}:o)};await n(o)},[en,n]),ew=(0,s.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...en,meals:[...en.meals,{id:(0,m.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[en,n]),eh=(0,s.useCallback)(async(e,a,t,i,s,o)=>{let l={...en,meals:en.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[en,n]),ef=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=en.weights.filter(e=>e.date!==a),i={...en,weights:[...t,{date:a,kg:e}]};await n(i)},[en,n]),ex=(0,s.useCallback)(async(e,a)=>{let t={...en,weights:en.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[en,n]),eu=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...en,walks:[...en.walks,{id:(0,m.z)(),date:a,minutes:e}]};await n(t)},[en,n]),eb=(0,s.useCallback)(async(e,a,t)=>{let i={...en,walks:en.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[en,n]),ek=(0,s.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...en,meals:[...en.meals,{id:(0,m.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[en,n]),ev=(0,s.useCallback)(async e=>{let a={...en,meals:en.meals.filter(a=>a.id!==e)};await n(a)},[en,n]),ey=(0,s.useCallback)(async e=>{let a={...en,weights:en.weights.filter(a=>a.date!==e)};await n(a)},[en,n]),ej=(0,s.useCallback)(async e=>{let a={...en,walks:en.walks.filter(a=>a.date!==e)};await n(a)},[en,n]),e$=(0,s.useCallback)(async e=>{let a={...en,sessions:en.sessions.filter(a=>a.id!==e)};await n(a)},[en,n]),eC=(0,s.useCallback)(()=>eo("meal"),[eo]),eS=(0,s.useCallback)(()=>eo("walk"),[eo]),eD=(0,s.useCallback)(()=>eo("weight"),[eo]),eF=(0,s.useCallback)(e=>{let a=en.meals.find(a=>a.id===e);a&&eo("meal",{kind:"meal",entry:a})},[en.meals,eo]),eM=(0,s.useCallback)(e=>{let a=en.weights.find(a=>a.date===e);a&&eo("weight",{kind:"weight",entry:a})},[en.weights,eo]),ez=(0,s.useCallback)(async e=>{switch(e.kind){case"fast":await ed(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await ew(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await ef(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await eu(e.walkMinutes)}},[ed,ew,ef,eu]),eE=(0,g.streakDays)(en.sessions,en.goal.targetHours),eT=(0,g.avgFastDuration)(en.sessions,30),eW=en.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(r.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)(O,{children:[(0,i.jsxs)(K,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(Q,{role:"tab","aria-selected":"today"===ei,active:"today"===ei,onClick:()=>es("today"),children:t("forma.tab.today")}),(0,i.jsx)(Q,{role:"tab","aria-selected":"fasting"===ei,active:"fasting"===ei,onClick:()=>es("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(Q,{role:"tab","aria-selected":"weight"===ei,active:"weight"===ei,onClick:()=>es("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(Q,{role:"tab","aria-selected":"activities"===ei,active:"activities"===ei,onClick:()=>es("activities"),children:t("forma.tab.activities")}),(0,i.jsx)(Q,{role:"tab","aria-selected":"analytics"===ei,active:"analytics"===ei,onClick:()=>es("analytics"),children:t("forma.tab.analytics")}),(0,i.jsx)(Q,{role:"tab","aria-selected":"coach"===ei,active:"coach"===ei,onClick:()=>es("coach"),children:t("forma.tab.coach")}),(0,i.jsx)(Q,{role:"tab","aria-selected":"settings"===ei,active:"settings"===ei,onClick:()=>es("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(P,{children:["fasting"===ei&&(0,i.jsx)(h.B,{t:t,active:d,onChange:A}),(0,i.jsx)(I,{children:(0,i.jsxs)(_,{children:["today"===ei&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.F,{t:t,onParsed:e=>void ez(e)}),(0,i.jsx)(S.C,{t:t,cards:[{id:"mini-fast",defaultSize:"sm",render:()=>(0,i.jsx)(y.g,{data:en,t:t,onClick:()=>es("fasting")})},{id:"mini-weight",defaultSize:"sm",render:()=>(0,i.jsx)(j.S,{data:en,t:t,onClick:()=>es("weight")})},{id:"today",defaultSize:"lg",render:()=>(0,i.jsx)(k._,{data:en,t:t,onLogMeal:eC,onLogWalk:eS,onLogWeight:eD,onDeleteMeal:e=>void ev(e),onEditMeal:eF})},{id:"ask",defaultSize:"lg",render:()=>(0,i.jsx)(v.j,{data:en,t:t,locale:a})},{id:"week",defaultSize:"lg",render:()=>(0,i.jsx)(u.v,{data:en,t:t,locale:a,onTapTemplate:e=>void ek(e)})},{id:"stats",defaultSize:"md",render:()=>(0,i.jsxs)(R,{children:[(0,i.jsxs)(B,{children:[(0,i.jsx)(G,{children:eE}),(0,i.jsx)(N,{children:t("forma.streak",{n:eE})})]}),(0,i.jsxs)(B,{children:[(0,i.jsx)(G,{children:eT>0?eT.toFixed(1):"—"}),(0,i.jsx)(N,{children:t("forma.hero.avgDuration")})]}),eW&&(0,i.jsxs)(B,{children:[(0,i.jsx)(G,{children:eW.kg.toFixed(1)}),(0,i.jsx)(N,{children:t("forma.weight.label")})]})]})}]})]}),"coach"===ei&&(0,i.jsxs)(Y,{children:[(0,i.jsx)(M.q,{t:t,onOpenCheckIn:()=>et(!0),onOpenSettings:()=>es("settings")}),(0,i.jsx)(E.s,{t:t}),(0,i.jsx)(T.g,{t:t}),(0,i.jsx)(W.c,{t:t,locale:a})]}),"fasting"===ei&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.P,{t:t,active:d,onChange:A}),(0,i.jsx)(H,{children:(0,i.jsx)(w.k,{data:en,t:t,onStart:()=>{let e="16:8"===d?16:"18:6"===d?18:"20:4"===d?20:en.goal.targetHours;ed(d,e)},onStop:e=>void er(e),onEditStart:e=>eg(e)})}),(0,i.jsx)(u.v,{data:en,t:t,locale:a,onTapTemplate:e=>void ek(e)})]}),"weight"===ei&&(0,i.jsx)($.m,{data:en,t:t,onLogWeight:eD,onDeleteWeight:e=>void ey(e),onEditWeight:eM}),"activities"===ei&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(F.N,{data:en,t:t,locale:a,onEditFast:e=>eg(e),onEditMeal:e=>eF(e.id),onEditWeight:e=>eM(e.date),onDeleteFast:e=>void e$(e),onDeleteMeal:e=>void ev(e),onDeleteWeight:e=>void ey(e),onDeleteWalk:e=>void ej(e)})}),"analytics"===ei&&(0,i.jsx)(D.Q,{data:en,t:t,locale:a}),"settings"===ei&&(0,i.jsx)(C.f,{data:en,t:t,onSave:n})]})})]}),(0,i.jsx)(q,{"aria-label":t("forma.log"),onClick:()=>eo(),children:(0,i.jsx)(r.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(b.Y,{open:L,onClose:el,data:en,t:t,initialMode:V,editing:Z,onStartFast:(e,a)=>void ed(e,a),onStopFast:()=>void ec(),onLogPastFast:(e,a,t,i)=>void em(e,a,t,i),onEditFast:(e,a,t,i,s)=>void ep(e,a,t,i,s),onLogMeal:(e,a,t,i,s)=>void ew(e,a,t,i,s),onEditMeal:(e,a,t,i,s,o)=>void eh(e,a,t,i,s,o),onLogWeight:(e,a)=>void ef(e,a),onEditWeight:(e,a)=>void ex(e,a),onLogWalk:(e,a)=>void eu(e,a),onEditWalk:(e,a,t)=>void eb(e,a,t)}),(0,i.jsx)(z.N,{open:ea,onClose:()=>et(!1),t:t})]})})}}}]);