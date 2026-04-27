"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["362"],{73935(e,a,t){t.r(a),t.d(a,{default:()=>q});var i=t(65723),s=t(37991),o=t(36859),l=t.n(o),n=t(72799),d=t(6063),r=t(80884),c=t(28170),g=t(65256),m=t(54041),w=t(20948),p=t(72552),f=t(71589),h=t(68477),x=t(25405),u=t(20483),b=t(17102),k=t(15742),v=t(37103),y=t(52128),j=t(59446),$=t(92152),C=t(20429),S=t(4406),D=t(63709),F=t(90429),z=t(22684),M=t(33499),E=t(24470),T=t(86704),W=t(69568);let A="#7fb77e",L=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,P=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,I=l().div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,O=l().main`
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
`,H=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${d.w4.spacing.sm};
  height: 100%;

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,R=l().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 100%;
`,B=l().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d.w4.colors.mainText};
  line-height: 1;
`,G=l().span`
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
`;let N=l().div`
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
`,K=l().button`
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
`;let Q=l().button`
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
`;function q({topBarRight:e}){let[a]=(0,c.Ym)(),t=(0,s.useMemo)(()=>(0,c.Nx)(a,w.A),[a]),{data:o,loaded:l,save:n}=(0,g.useForma)(),[d,A]=(0,s.useState)("16:8"),[L,U]=(0,s.useState)(!1),[J,V]=(0,s.useState)(void 0),[X,Z]=(0,s.useState)(null),[ee,ea]=(0,s.useState)(!1),[et,ei]=(0,s.useState)("today"),es=(0,s.useCallback)((e,a)=>{V(e),Z(a??null),U(!0)},[]),eo=(0,s.useCallback)(()=>{U(!1),V(void 0),Z(null)},[]),el=o??{...g.EMPTY_FORMA_DATA,templates:g.DEFAULT_TEMPLATES,goal:{targetHours:16,weeklyFasts:5}},en=(0,s.useCallback)(async(e,a)=>{let t={...el,sessions:[...el.sessions,{id:(0,m.z)(),startedAt:Date.now(),targetHours:a,protocol:e}]};await n(t)},[el,n]),ed=(0,s.useCallback)(async e=>{let a={...el,sessions:el.sessions.map(a=>a.id===e.id?{...a,endedAt:Date.now()}:a)};await n(a)},[el,n]),er=(0,s.useCallback)(async()=>{let e=el.sessions.find(e=>void 0===e.endedAt);e&&await ed(e)},[el,ed]),ec=(0,s.useCallback)(e=>{es(void 0,{kind:"fast",entry:e})},[es]),eg=(0,s.useCallback)(async(e,a,t,i)=>{let s={...el,sessions:[...el.sessions,{id:(0,m.z)(),startedAt:t,endedAt:i,targetHours:a,protocol:e}]};await n(s)},[el,n]),em=(0,s.useCallback)(async(e,a,t,i,s)=>{let o={...el,sessions:el.sessions.map(o=>o.id===e?{...o,protocol:a,targetHours:t,startedAt:i,endedAt:s}:o)};await n(o)},[el,n]),ew=(0,s.useCallback)(async(e,a,t,i,s=new Date().toISOString().slice(0,10))=>{let o={...el,meals:[...el.meals,{id:(0,m.z)(),date:s,slot:e,proteinG:a,kcal:t,notes:i||void 0,createdAt:Date.now()}]};await n(o)},[el,n]),ep=(0,s.useCallback)(async(e,a,t,i,s,o)=>{let l={...el,meals:el.meals.map(l=>l.id===e?{...l,slot:a,proteinG:t,kcal:i,notes:s||void 0,date:o}:l)};await n(l)},[el,n]),ef=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t=el.weights.filter(e=>e.date!==a),i={...el,weights:[...t,{date:a,kg:e}]};await n(i)},[el,n]),eh=(0,s.useCallback)(async(e,a)=>{let t={...el,weights:el.weights.filter(a=>a.date!==e).concat({date:e,kg:a})};await n(t)},[el,n]),ex=(0,s.useCallback)(async(e,a=new Date().toISOString().slice(0,10))=>{let t={...el,walks:[...el.walks,{id:(0,m.z)(),date:a,minutes:e}]};await n(t)},[el,n]),eu=(0,s.useCallback)(async(e,a,t)=>{let i={...el,walks:el.walks.map(i=>i.id===e?{...i,minutes:a,date:t}:i)};await n(i)},[el,n]),eb=(0,s.useCallback)(async e=>{let a=new Date().toISOString().slice(0,10),t={...el,meals:[...el.meals,{id:(0,m.z)(),date:a,slot:e.slot,templateId:e.id,proteinG:e.proteinG,kcal:e.kcal,notes:void 0,createdAt:Date.now()}]};await n(t)},[el,n]),ek=(0,s.useCallback)(async e=>{let a={...el,meals:el.meals.filter(a=>a.id!==e)};await n(a)},[el,n]),ev=(0,s.useCallback)(async e=>{let a={...el,weights:el.weights.filter(a=>a.date!==e)};await n(a)},[el,n]),ey=(0,s.useCallback)(async e=>{let a={...el,walks:el.walks.filter(a=>a.date!==e)};await n(a)},[el,n]),ej=(0,s.useCallback)(async e=>{let a={...el,sessions:el.sessions.filter(a=>a.id!==e)};await n(a)},[el,n]),e$=(0,s.useCallback)(()=>es("meal"),[es]),eC=(0,s.useCallback)(()=>es("walk"),[es]),eS=(0,s.useCallback)(()=>es("weight"),[es]),eD=(0,s.useCallback)(e=>{let a=el.meals.find(a=>a.id===e);a&&es("meal",{kind:"meal",entry:a})},[el.meals,es]),eF=(0,s.useCallback)(e=>{let a=el.weights.find(a=>a.date===e);a&&es("weight",{kind:"weight",entry:a})},[el.weights,es]),ez=(0,s.useCallback)(async e=>{switch(e.kind){case"fast":await en(e.fastProtocol??"custom",e.fastHours??16);break;case"meal":await ew(e.mealSlot??"dinner",0,0,e.mealDesc??"");break;case"weight":void 0!==e.weightKg&&await ef(e.weightKg);break;case"walk":void 0!==e.walkMinutes&&await ex(e.walkMinutes)}},[en,ew,ef,ex]),eM=(0,g.streakDays)(el.sessions,el.goal.targetHours),eE=(0,g.avgFastDuration)(el.sessions,30),eT=el.weights.find(e=>e.date===new Date().toISOString().slice(0,10));return(0,i.jsx)(r.PE,{title:t("forma.appTitle"),sidebar:null,topBarRight:e,children:(0,i.jsxs)(P,{children:[(0,i.jsxs)(N,{role:"tablist","aria-label":t("forma.tabs.aria"),children:[(0,i.jsx)(K,{role:"tab","aria-selected":"today"===et,active:"today"===et,onClick:()=>ei("today"),children:t("forma.tab.today")}),(0,i.jsx)(K,{role:"tab","aria-selected":"fasting"===et,active:"fasting"===et,onClick:()=>ei("fasting"),children:t("forma.tab.fasting")}),(0,i.jsx)(K,{role:"tab","aria-selected":"weight"===et,active:"weight"===et,onClick:()=>ei("weight"),children:t("forma.tab.weight")}),(0,i.jsx)(K,{role:"tab","aria-selected":"activities"===et,active:"activities"===et,onClick:()=>ei("activities"),children:t("forma.tab.activities")}),(0,i.jsx)(K,{role:"tab","aria-selected":"analytics"===et,active:"analytics"===et,onClick:()=>ei("analytics"),children:t("forma.tab.analytics")}),(0,i.jsx)(K,{role:"tab","aria-selected":"settings"===et,active:"settings"===et,onClick:()=>ei("settings"),children:t("forma.tab.settings")})]}),(0,i.jsxs)(I,{children:["fasting"===et&&(0,i.jsx)(f.B,{t:t,active:d,onChange:A}),(0,i.jsx)(O,{children:(0,i.jsxs)(_,{children:["today"===et&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.F,{t:t,onParsed:e=>void ez(e)}),(0,i.jsx)(S.C,{t:t,cards:[{id:"mini-fast",defaultSize:"sm",render:()=>(0,i.jsx)(y.g,{data:el,t:t,onClick:()=>ei("fasting")})},{id:"mini-weight",defaultSize:"sm",render:()=>(0,i.jsx)(j.S,{data:el,t:t,onClick:()=>ei("weight")})},{id:"today",defaultSize:"lg",render:()=>(0,i.jsx)(k._,{data:el,t:t,onLogMeal:e$,onLogWalk:eC,onLogWeight:eS,onDeleteMeal:e=>void ek(e),onEditMeal:eD})},{id:"today-card",defaultSize:"md",render:()=>(0,i.jsx)(z.q,{t:t,onOpenCheckIn:()=>ea(!0)})},{id:"coach",defaultSize:"md",render:()=>(0,i.jsx)(E.s,{t:t})},{id:"ask",defaultSize:"lg",render:()=>(0,i.jsx)(v.j,{data:el,t:t,locale:a})},{id:"week",defaultSize:"lg",render:()=>(0,i.jsx)(u.v,{data:el,t:t,locale:a,onTapTemplate:e=>void eb(e)})},{id:"stats",defaultSize:"md",render:()=>(0,i.jsxs)(H,{children:[(0,i.jsxs)(R,{children:[(0,i.jsx)(B,{children:eM}),(0,i.jsx)(G,{children:t("forma.streak",{n:eM})})]}),(0,i.jsxs)(R,{children:[(0,i.jsx)(B,{children:eE>0?eE.toFixed(1):"—"}),(0,i.jsx)(G,{children:t("forma.hero.avgDuration")})]}),eT&&(0,i.jsxs)(R,{children:[(0,i.jsx)(B,{children:eT.kg.toFixed(1)}),(0,i.jsx)(G,{children:t("forma.weight.label")})]})]})}]}),(0,i.jsx)(W.c,{t:t,locale:a})]}),"fasting"===et&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.P,{t:t,active:d,onChange:A}),(0,i.jsx)(Y,{children:(0,i.jsx)(p.k,{data:el,t:t,onStart:()=>{let e="16:8"===d?16:"18:6"===d?18:"20:4"===d?20:el.goal.targetHours;en(d,e)},onStop:e=>void ed(e),onEditStart:e=>ec(e)})}),(0,i.jsx)(u.v,{data:el,t:t,locale:a,onTapTemplate:e=>void eb(e)})]}),"weight"===et&&(0,i.jsx)($.m,{data:el,t:t,onLogWeight:eS,onDeleteWeight:e=>void ev(e),onEditWeight:eF}),"activities"===et&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(T.g,{t:t}),(0,i.jsx)(F.N,{data:el,t:t,locale:a,onEditFast:e=>ec(e),onEditMeal:e=>eD(e.id),onEditWeight:e=>eF(e.date),onDeleteFast:e=>void ej(e),onDeleteMeal:e=>void ek(e),onDeleteWeight:e=>void ev(e),onDeleteWalk:e=>void ey(e)})]}),"analytics"===et&&(0,i.jsx)(D.Q,{data:el,t:t,locale:a}),"settings"===et&&(0,i.jsx)(C.f,{data:el,t:t,onSave:n})]})})]}),(0,i.jsx)(Q,{"aria-label":t("forma.log"),onClick:()=>es(),children:(0,i.jsx)(r.In,{name:"plus",size:24,color:"#fff"})}),(0,i.jsx)(b.Y,{open:L,onClose:eo,data:el,t:t,initialMode:J,editing:X,onStartFast:(e,a)=>void en(e,a),onStopFast:()=>void er(),onLogPastFast:(e,a,t,i)=>void eg(e,a,t,i),onEditFast:(e,a,t,i,s)=>void em(e,a,t,i,s),onLogMeal:(e,a,t,i,s)=>void ew(e,a,t,i,s),onEditMeal:(e,a,t,i,s,o)=>void ep(e,a,t,i,s,o),onLogWeight:(e,a)=>void ef(e,a),onEditWeight:(e,a)=>void eh(e,a),onLogWalk:(e,a)=>void ex(e,a),onEditWalk:(e,a,t)=>void eu(e,a,t)}),(0,i.jsx)(M.N,{open:ee,onClose:()=>ea(!1),t:t})]})})}}}]);