"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["27"],{90429(e,t,a){a.d(t,{N:()=>S});var o=a(65723),r=a(37991),i=a(36859),n=a.n(i),s=a(72799),l=a(6063),d=a(80884),c=a(69454);let p="#7fb77e",h={month:30,"3m":90,"6m":183,year:365,all:null},g=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=n().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${g} 0.25s ease both;
`,m=n().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
`,x=n().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${p};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.sm} 0;
`,u=n().div`
  display: grid;
  grid-template-columns: 28px 1fr auto auto;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 6px ${l.w4.spacing.md};
  transition: background 140ms ease;
  border-bottom: 1px solid ${l.w4.colors.borderSubtle??l.w4.colors.border};
  min-width: 0;

  &:last-child { border-bottom: none; }

  &:hover { background: ${l.w4.colors.sidebarHover}; }

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 28px 1fr auto;
    padding: 8px ${l.w4.spacing.sm};
  }
`,w=n().div`
  width: 24px;
  height: 24px;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}1f`};
  color: ${({color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
`,b=n().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,y=n().span`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,$=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,v=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainTextMuted};
  text-align: right;

  @media (max-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,k=n().div`
  display: flex;
  gap: 2px;
`,M=n().button`
  background: transparent;
  border: none;
  padding: 4px;
  border-radius: ${l.w4.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${l.w4.colors.mainTextMuted};
  transition: color 140ms ease, background 140ms ease;
  /* Minimum 44px touch target on mobile */
  min-width: 44px;
  min-height: 44px;

  @media (min-width: ${l.w4.breakpoints.md}) {
    min-width: 28px;
    min-height: 28px;
  }

  &:hover {
    color: ${p};
    background: ${l.w4.colors.mainBg};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,j={fast:p,meal:"#58a6ff",weight:"#d29922",walk:"#a371f7"},z={fast:"flame",meal:"utensils",weight:"gauge",walk:"activity"};function T(e){let[t,a,o]=e.split("-").map(e=>parseInt(e,10));return new Date(t,(a??1)-1,o??1).getTime()}function S({data:e,t,locale:a,onEditFast:i,onEditMeal:n,onEditWeight:s,onDeleteFast:l,onDeleteMeal:p,onDeleteWeight:g,onDeleteWalk:F}){let[C,A]=(0,r.useState)("all"),[H,L]=(0,r.useState)("month"),D=(0,r.useMemo)(()=>(function(e,t){let a=[];for(let o of e.sessions){let e=o.endedAt?(o.endedAt-o.startedAt)/36e5:(Date.now()-o.startedAt)/36e5;a.push({kind:"fast",ts:o.startedAt,id:o.id,editable:!0,primary:o.endedAt?`${t("forma.activities.fast.completed")} \xb7 ${e.toFixed(1)}h`:`${t("forma.activities.fast.inProgress")} \xb7 ${e.toFixed(1)}h`,meta:`${o.protocol} \xb7 ${t("forma.activities.fast.target")} ${o.targetHours}h`})}for(let o of e.meals){let e="forma.meal."+o.slot,r=[];o.proteinG&&r.push(`${o.proteinG}g ${t("forma.activities.protein")}`),o.kcal&&r.push(`${o.kcal} kcal`),a.push({kind:"meal",ts:o.createdAt??T(o.date),id:o.id,editable:!0,primary:`${t(e)}${o.notes?` \xb7 ${o.notes}`:""}`,meta:r.length>0?r.join(" \xb7 "):"—"})}for(let o of e.weights)a.push({kind:"weight",ts:T(o.date),id:o.date,editable:!0,primary:`${o.kg.toFixed(1)} kg`,meta:t("forma.activities.weight.entry")});for(let o of e.walks)a.push({kind:"walk",ts:T(o.date),id:o.date,editable:!1,primary:`${o.minutes} min`,meta:t("forma.activities.walk.entry")});return a.sort((e,t)=>t.ts-e.ts),a})(e,t),[e,t]),R=(0,r.useMemo)(()=>{let e=h[H];return null===e?0:Date.now()-864e5*e},[H]),B=(0,r.useMemo)(()=>D.filter(e=>e.ts>=R),[D,R]),P=(0,r.useMemo)(()=>"all"===C?B:B.filter(e=>e.kind===C),[B,C]),I=(0,r.useMemo)(()=>{let e={all:B.length,fast:0,meal:0,weight:0,walk:0};for(let t of B)e[t.kind]+=1;return e},[B]),W=(e,a)=>(0,o.jsxs)(d.vu,{variant:C===e?"selected":"default",dotColor:"all"===e?void 0:j[e],onClick:()=>A(e),children:[t(a)," ",I[e]>0&&`(${I[e]})`]},e);return(0,o.jsxs)(f,{children:[(0,o.jsx)(m,{children:["month","3m","6m","year","all"].map(e=>(0,o.jsx)(d.vu,{variant:H===e?"selected":"default",onClick:()=>L(e),children:t("forma.activities.range."+e)},e))}),(0,o.jsxs)(m,{children:[W("all","forma.activities.filter.all"),W("fast","forma.activities.filter.fast"),W("meal","forma.activities.filter.meal"),W("weight","forma.activities.filter.weight"),W("walk","forma.activities.filter.walk")]}),0===P.length?(0,o.jsx)(c.YG,{mode:"empty",label:t("forma.activities.empty")}):(0,o.jsx)(x,{children:P.map(r=>(0,o.jsxs)(u,{children:[(0,o.jsx)(w,{color:j[r.kind],children:(0,o.jsx)(d.In,{name:z[r.kind],size:14})}),(0,o.jsxs)(b,{children:[(0,o.jsx)(y,{children:r.primary}),(0,o.jsx)($,{children:r.meta})]}),(0,o.jsx)(v,{children:function(e,t,a){let o=new Date(e),r=o.toLocaleDateString("pt"===t?"pt-PT":"en-GB",{day:"2-digit",month:"short"});if(!a)return r;let i=o.toLocaleTimeString("pt"===t?"pt-PT":"en-GB",{hour:"2-digit",minute:"2-digit"});return`${r} ${i}`}(r.ts,a,"fast"===r.kind||"meal"===r.kind)}),(0,o.jsxs)(k,{children:[r.editable&&(0,o.jsx)(M,{onClick:()=>(t=>{if(t.editable){if("fast"===t.kind){let a=e.sessions.find(e=>e.id===t.id);a&&i(a)}else if("meal"===t.kind){let a=e.meals.find(e=>e.id===t.id);a&&n(a)}else if("weight"===t.kind){let a=e.weights.find(e=>e.date===t.id);a&&s(a)}}})(r),title:t("forma.activities.edit"),"aria-label":t("forma.activities.edit"),children:(0,o.jsx)(d.In,{name:"edit",size:14})}),(0,o.jsx)(M,{onClick:()=>{let e;return e="forma.activities.confirmDelete."+r.kind,void(window.confirm(t(e))&&("fast"===r.kind&&l(r.id),"meal"===r.kind&&p(r.id),"weight"===r.kind&&g(r.id),"walk"===r.kind&&F(r.id)))},title:t("forma.activities.delete"),"aria-label":t("forma.activities.delete"),children:(0,o.jsx)(d.In,{name:"trash",size:14})})]})]},`${r.kind}:${r.id}`))})]})}},63709(e,t,a){a.d(t,{Q:()=>ex});var o=a(65723),r=a(37991),i=a(36859),n=a.n(i),s=a(72799),l=a(6063),d=a(28751),c=a(69454),p=a(4406);let h=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],g=["Seg","Ter","Qua","Qui","Sex","S\xe1b","Dom"];function f(e,t,a,o,r){let i=[`${("pt"===r?g:h)[t]} ${String(a).padStart(2,"0")}:00`],n=(t+1)%7,s=e.sessions.filter(e=>{let t=new Date(e.startedAt);return t.getDay()===n&&t.getHours()===a});s.length>0&&i.push(`🔥 ${s.length}\xd7 ${o("forma.activities.fast.target").toLowerCase()} \xb7 ${o("forma.activities.filter.fast")}`);let l=e.meals.filter(e=>{let t=new Date(e.createdAt??Date.parse(e.date));return t.getDay()===n&&t.getHours()===a});if(l.length>0){let e=l.reduce((e,t)=>e+(t.proteinG??0),0),t=l.reduce((e,t)=>e+(t.kcal??0),0);i.push(`🍽 ${l.length}\xd7 ${o("forma.activities.filter.meal")}`+(e?` \xb7 ${e}g`:"")+(t?` \xb7 ${t} kcal`:""))}return 1===i.length&&i.push(`— ${o("forma.activities.empty")}`),i.join("\n")}let m="#7fb77e";function x(e){return[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)]}let u=x("#1d2230"),w=x(m);function b(e){let t=Math.round(u[0]+(w[0]-u[0])*e),a=Math.round(u[1]+(w[1]-u[1])*e),o=Math.round(u[2]+(w[2]-u[2])*e);return`rgb(${t},${a},${o})`}let y=new Set([0,4,8,12,16,20]),$=["Mo","Tu","We","Th","Fr","Sa","Su"],v=["Se","Te","Qa","Qi","Sx","S\xe1","Do"],k=n().section`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${m};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  height: 100%;
  min-width: 0;
`,M=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,j=n().div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  min-width: 0;
`,z=n().div`
  display: grid;
  grid-template-columns: 28px repeat(24, minmax(10px, 1fr));
  gap: 2px;
  min-width: 260px;
`,T=n().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1;
`,S=n().div``,F=n().div`
  display: grid;
  grid-template-columns: 28px repeat(24, minmax(10px, 1fr));
  gap: 2px;
  min-width: 260px;
`,C=n().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
`,A=n().div`
  aspect-ratio: 1 / 1;
  border-radius: 2px;
  background: ${({bg:e})=>e};
  min-height: 8px;
  transition: filter 120ms ease;
  &:hover { filter: brightness(1.35); }
`,H=n().div`
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 2px;
  align-items: center;
  min-width: 260px;
`,L=n().div`
  display: flex;
  gap: 2px;
  height: 8px;
`,D=n().div`
  flex: 1;
  background: ${({pct:e})=>b(e)};
  border-radius: 1px;
`,R=n().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`;function B({data:e,t,locale:a}){let i=(0,r.useMemo)(()=>(0,d.mealDayHourMatrix)(e.meals),[e.meals]),n=(0,r.useMemo)(()=>(0,d.mealKcalByHour)(e.meals),[e.meals]),s=(0,r.useMemo)(()=>{let e=0;for(let t of i)for(let a of t)a>e&&(e=a);return e},[i]),l=(0,r.useMemo)(()=>Math.max(0,...n),[n]),c=(0,r.useMemo)(()=>n.reduce((e,t)=>e+t,0),[n]),p="pt"===a?v:$;return(0,o.jsxs)(k,{children:[(0,o.jsx)(M,{children:t("forma.mealHeatmap.title")}),(0,o.jsxs)(j,{children:[(0,o.jsxs)(z,{children:[(0,o.jsx)(S,{}),Array.from({length:24},(e,t)=>(0,o.jsx)(T,{children:y.has(t)?String(t).padStart(2,"0"):""},t))]}),i.map((r,i)=>(0,o.jsxs)(F,{children:[(0,o.jsx)(C,{children:p[i]}),r.map((r,n)=>(0,o.jsx)(A,{bg:0===s?b(0):b(r/s),title:f(e,i,n,t,a)},n))]},i)),(0,o.jsxs)(H,{children:[(0,o.jsx)(S,{}),(0,o.jsx)(L,{children:n.map((e,t)=>(0,o.jsx)(D,{pct:0===l?0:e/l},t))})]}),(0,o.jsxs)(R,{children:[(0,o.jsx)("span",{children:"0"}),(0,o.jsxs)("span",{children:[Math.round(c).toLocaleString()," kcal"]})]})]})]})}let P="#7fb77e",I="#58a6ff",W="#d29922",E="#7fb77e",N=["Mo","Tu","We","Th","Fr","Sa","Su"],O=["Se","Te","Qa","Qi","Sx","S\xe1","Do"],Y=new Set([0,4,8,12,16,20]);function V(e){return[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)]}let K=V("#1d2230"),G=V(P);function _(e){let t=Math.round(K[0]+(G[0]-K[0])*e),a=Math.round(K[1]+(G[1]-K[1])*e),o=Math.round(K[2]+(G[2]-K[2])*e);return`rgb(${t},${a},${o})`}let q=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,J=n().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${P};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  animation: ${q} 0.25s ease both;
  transition: border-color 0.14s ease, transform 0.14s ease, box-shadow 0.14s ease;
  min-width: 0;
  height: 100%;

  &:hover {
    border-color: ${l.w4.colors.borderStrong??l.w4.colors.mainTextMuted};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  }
`,Q=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,U=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  line-height: 1;
`,X=n().span`
  font-size: 18px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1;
`,Z=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,ee=n().div`
  display: flex;
  align-items: baseline;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,et=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${({positive:e})=>e?l.w4.colors.danger:P};
  background: ${({positive:e})=>e?`${l.w4.colors.danger}18`:`${P}18`};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 2px 6px;
`,ea=n().div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`,eo=n().div`
  display: grid;
  grid-template-columns: 28px repeat(24, minmax(10px, 1fr));
  gap: 2px;
  margin-bottom: 2px;
  min-width: 260px;
`,er=n().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1;
`,ei=n().div`
  display: grid;
  grid-template-columns: 28px repeat(24, minmax(10px, 1fr));
  gap: 2px;
  margin-bottom: 2px;
  min-width: 260px;
`,en=n().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
`,es=n().div`
  aspect-ratio: 1 / 1;
  border-radius: 2px;
  background: ${({bg:e})=>e};
  min-height: 10px;
  transition: filter 120ms ease;
  &:hover { filter: brightness(1.4); }
`,el=n().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  flex-wrap: wrap;
`,ed=n().div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,ec=n().div`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,ep={positive:"#7fb77e",warn:"#facc15",info:l.w4.colors.mainTextMuted},eh=n().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,eg=n().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${({accent:e})=>e};
  border-radius: ${l.w4.borderRadius.md};
`,ef=n().span`
  font-size: 13px;
  font-weight: 600;
  color: ${l.w4.colors.mainText};
`,em=n().span`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
`;function ex({data:e,t,locale:a}){let i=new Date().toISOString().slice(0,10),n=(0,r.useMemo)(()=>(function(e){let t={};for(let a of e){if(!a.endedAt)continue;let e=a.startedAt,o=a.endedAt,r=e;for(;r<o;){let e=new Date(r),a=new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0).getTime()+864e5,i=Math.min(o,a)-r,n=e.toISOString().slice(0,10);t[n]=(t[n]??0)+i/36e5,r=a}}let a=[];for(let e=89;e>=0;e--){let o=t[function(e){let t=new Date;return t.setDate(t.getDate()-e),t.toISOString().slice(0,10)}(e)]??0,r=0;o>=18?r=4:o>=14?r=3:o>=8?r=2:o>0&&(r=1),a.push(r)}return a})(e.sessions),[e.sessions]),s=(0,r.useMemo)(()=>(0,d.weightTrend)(e.weights,60),[e.weights]),l=(0,r.useMemo)(()=>[...e.weights].sort((e,t)=>t.date.localeCompare(e.date))[0]??null,[e.weights]),h=(0,r.useMemo)(()=>(0,d.proteinByDay)(e.meals,i),[e.meals,i]),g=(0,r.useMemo)(()=>e.goal.proteinG??110,[e.goal.proteinG]),m=(0,r.useMemo)(()=>(function(e){let t=[],a=new Date,o=new Date(a),r=(a.getDay()+6)%7;o.setDate(a.getDate()-r),o.setHours(0,0,0,0);for(let a=5;a>=0;a--){let r=new Date(o);r.setDate(o.getDate()-7*a);let i=new Date(r);i.setDate(r.getDate()+7);let n=r.toISOString().slice(0,10),s=i.toISOString().slice(0,10),l=e.filter(e=>e.date>=n&&e.date<s),d=l.filter(e=>"lunch"===e.slot).reduce((e,t)=>e+(t.proteinG??0),0),c=l.filter(e=>"snack"===e.slot).reduce((e,t)=>e+(t.proteinG??0),0),p=l.filter(e=>"dinner"===e.slot).reduce((e,t)=>e+(t.proteinG??0),0),h=`${String(r.getDate()).padStart(2,"0")}/${String(r.getMonth()+1).padStart(2,"0")}`;t.push({label:h,segments:[{id:"lunch",value:d,color:I},{id:"snack",value:c,color:W},{id:"dinner",value:p,color:E}]})}return t})(e.meals),[e.meals]),x=(0,r.useMemo)(()=>(0,d.dayHourFastMatrix)(e.sessions),[e.sessions]),u=(0,r.useMemo)(()=>{let e=0;for(let t of x)for(let a of t)a>e&&(e=a);return e},[x]),w="pt"===a?O:N,b=e.weights.length>=2,y=e.meals.length>0,$=e.sessions.some(e=>void 0!==e.endedAt),v=(0,r.useMemo)(()=>(0,d.generateFormaInsights)(e),[e]),k=[{id:"insights",defaultSize:"lg",render:()=>(0,o.jsxs)(J,{children:[(0,o.jsxs)(Q,{children:["◉ ",t("forma.insights.title")]}),0===v.length?(0,o.jsx)(c.YG,{mode:"empty",label:t("forma.insights.empty")}):(0,o.jsx)(eh,{children:v.map(e=>{let a;return"string"==typeof(a={...e.vars??{}}).dayKey&&(a.day=t(a.dayKey)),(0,o.jsxs)(eg,{accent:ep[e.severity],children:[(0,o.jsx)(ef,{children:t(e.titleKey)}),(0,o.jsx)(em,{children:t(e.bodyKey,a)})]},e.id)})})]})},{id:"fast-heatmap",defaultSize:"lg",render:()=>(0,o.jsxs)(J,{children:[(0,o.jsxs)(Q,{children:["◉ ",t("forma.analytics.heatmap.title")]}),$?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.RT,{data:n,cellSize:11,gap:2,locale:a,tooltip:o=>{var r;let i;return function(e,t,a,o){let r=[function(e,t){let[a,o,r]=e.split("-").map(e=>parseInt(e,10));return new Date(a,(o??1)-1,r??1).toLocaleDateString("pt"===t?"pt-PT":"en-GB",{day:"2-digit",month:"short",year:"numeric"})}(t,o)],{count:i,hours:n}=function(e,t){let[a,o,r]=t.split("-").map(e=>parseInt(e,10)),i=new Date(a,(o??1)-1,r??1).getTime(),n=i+864e5,s=0,l=0;for(let t of e.sessions){let e=t.startedAt,a=Math.min(t.endedAt??Date.now(),n)-Math.max(e,i);a>0&&(s+=1,l+=a/36e5)}return{count:s,hours:l}}(e,t);i>0&&r.push(`🔥 ${i}\xd7 ${a("forma.activities.filter.fast")} \xb7 ${n.toFixed(1)}h`);let s=e.meals.filter(e=>e.date===t);if(s.length>0){let e=s.reduce((e,t)=>e+(t.proteinG??0),0),t=s.reduce((e,t)=>e+(t.kcal??0),0);r.push(`🍽 ${s.length}\xd7 ${a("forma.activities.filter.meal")}`+(e?` \xb7 ${e}g ${a("forma.activities.protein")}`:"")+(t?` \xb7 ${t} kcal`:""))}let l=e.weights.find(e=>e.date===t);l&&r.push(`⚖ ${l.kg.toFixed(1)} kg`);let d=e.walks.filter(e=>e.date===t);if(d.length>0){let e=d.reduce((e,t)=>e+t.minutes,0);r.push(`🚶 ${e} min`)}return 1===r.length&&r.push(`— ${a("forma.activities.empty")}`),r.join("\n")}(e,(r=n.length,(i=new Date).setDate(i.getDate()-(r-1-o)),i.toISOString().slice(0,10)),t,a)}}),(0,o.jsxs)(el,{children:[(0,o.jsxs)(ed,{children:[(0,o.jsx)(ec,{color:_(0)}),(0,o.jsx)("span",{children:t("forma.analytics.heatmap.none")})]}),(0,o.jsxs)(ed,{children:[(0,o.jsx)(ec,{color:_(.25)}),(0,o.jsx)("span",{children:"<8h"})]}),(0,o.jsxs)(ed,{children:[(0,o.jsx)(ec,{color:_(.5)}),(0,o.jsx)("span",{children:"8–14h"})]}),(0,o.jsxs)(ed,{children:[(0,o.jsx)(ec,{color:_(.75)}),(0,o.jsx)("span",{children:"14–18h"})]}),(0,o.jsxs)(ed,{children:[(0,o.jsx)(ec,{color:_(1)}),(0,o.jsx)("span",{children:"≥18h"})]})]})]}):(0,o.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")})]})},{id:"weight-trend",defaultSize:"md",render:()=>(0,o.jsxs)(J,{children:[(0,o.jsxs)(Q,{children:["◉ ",t("forma.analytics.weight.title")]}),b?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(ee,{children:[(0,o.jsx)(U,{children:l?l.kg.toFixed(1):"—"}),(0,o.jsx)(Z,{children:"kg"}),0!==s.delta&&(0,o.jsxs)(et,{positive:s.delta>0,children:[s.delta>0?"+":"",s.delta.toFixed(1)," kg"]})]}),void 0!==e.goal.weightKg&&(0,o.jsxs)(ee,{children:[(0,o.jsx)(X,{children:e.goal.weightKg.toFixed(1)}),(0,o.jsxs)(Z,{children:["kg ",t("forma.weight.target")]})]}),(0,o.jsx)(Z,{children:t("forma.analytics.weight.delta")}),(0,o.jsx)(c.OW,{points:s.ema.length>=2?s.ema:e.weights.map(e=>e.kg),accent:P,width:260,height:60,fluid:!0})]}):(0,o.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")})]})},{id:"protein-burn",defaultSize:"md",render:()=>(0,o.jsxs)(J,{children:[(0,o.jsxs)(Q,{children:["◉ ",t("forma.analytics.protein.title")]}),(0,o.jsxs)(ee,{children:[(0,o.jsx)(U,{children:h.toFixed(0)}),(0,o.jsxs)(Z,{children:["/ ",g,"g ",t("forma.analytics.protein.target")]})]}),y?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.kl,{spent:g-h,budget:g,height:60}),(0,o.jsx)(Z,{children:h>=g?t("forma.analytics.protein.achieved"):`${(g-h).toFixed(0)}g ${t("forma.analytics.protein.remaining")}`})]}):(0,o.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")})]})},{id:"weekly-protein",defaultSize:"lg",render:()=>(0,o.jsxs)(J,{children:[(0,o.jsxs)(Q,{children:["◉ ",t("forma.analytics.weekly.title")]}),y?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.ik,{data:m,budget:7*g,height:160}),(0,o.jsxs)(el,{children:[(0,o.jsxs)(ed,{children:[(0,o.jsx)(ec,{color:I}),(0,o.jsx)("span",{children:t("forma.meal.lunch")})]}),(0,o.jsxs)(ed,{children:[(0,o.jsx)(ec,{color:W}),(0,o.jsx)("span",{children:t("forma.meal.snack")})]}),(0,o.jsxs)(ed,{children:[(0,o.jsx)(ec,{color:E}),(0,o.jsx)("span",{children:t("forma.meal.dinner")})]})]})]}):(0,o.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")})]})},{id:"meal-heatmap",defaultSize:"lg",render:()=>(0,o.jsx)(B,{data:e,t:t,locale:a})},{id:"fast-times",defaultSize:"lg",render:()=>(0,o.jsxs)(J,{children:[(0,o.jsxs)(Q,{children:["◉ ",t("forma.analytics.fastTimes.title")]}),$?(0,o.jsxs)(ea,{children:[(0,o.jsxs)(eo,{children:[(0,o.jsx)("div",{}),Array.from({length:24},(e,t)=>(0,o.jsx)(er,{children:Y.has(t)?String(t).padStart(2,"0"):""},t))]}),x.map((r,i)=>(0,o.jsxs)(ei,{children:[(0,o.jsx)(en,{children:w[i]}),r.map((r,n)=>(0,o.jsx)(es,{bg:0===u?_(0):_(r/u),title:f(e,i,n,t,a)},n))]},i))]}):(0,o.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")})]})}];return(0,o.jsx)(p.C,{t:t,cards:k,storageKey:"forma:layout:analytics"})}},37103(e,t,a){a.d(t,{j:()=>u});var o=a(65723),r=a(37991),i=a(36859),n=a.n(i),s=a(6063),l=a(80884),d=a(28751);let c=n().section`
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-left: 2px solid ${s.w4.colors.accent};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.sm};
`,p=n().header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${s.w4.spacing.sm};
`,h=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
`,g=n().div`
  font-size: 13px;
  line-height: 1.55;
  color: ${s.w4.colors.mainText};
  min-height: 24px;
`,f=n().div`
  font-size: 12px;
  color: ${s.w4.colors.danger};
`,m=n().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.04em;
  color: ${s.w4.colors.mainTextFaint};
`,x="forma:ask:last";function u({data:e,t,locale:a}){let i,n,w,[b,y]=(0,r.useState)(null),[$,v]=(0,r.useState)(""),[k,M]=(0,r.useState)(null),[j,z]=(0,r.useState)(!1),[T,S]=(0,r.useState)(null);(0,r.useEffect)(()=>{(0,d.resolveGroqKey)().then(e=>y(!!e))},[]),(0,r.useEffect)(()=>{(0,s.qj)(x).then(e=>{if(e)try{let t=JSON.parse(e);t.text&&t.ts&&(v(t.text),M(t.ts))}catch{}})},[]);let F=(0,r.useCallback)(async()=>{z(!0),S(null),v("");try{let o,r,i,n,l,c,p,h,g,f,m=await (0,d.resolveGroqKey)();if(!m){S(t("forma.ask.noKey")),z(!1);return}let u=(o=new Date().toISOString().slice(0,10),r=(0,d.proteinByDay)(e.meals,o),i=e.meals.filter(e=>e.date===o).reduce((e,t)=>e+(t.kcal??0),0),n=e.walks.filter(e=>e.date===o).reduce((e,t)=>e+t.minutes,0),l=(function(){let e=[],t=new Date;for(let a=6;a>=0;a-=1){let o=new Date(t);o.setDate(t.getDate()-a),e.push(o.toISOString().slice(0,10))}return e})().map(t=>({date:t,protein:(0,d.proteinByDay)(e.meals,t),kcal:e.meals.filter(e=>e.date===t).reduce((e,t)=>e+(t.kcal??0),0),walk:e.walks.filter(e=>e.date===t).reduce((e,t)=>e+t.minutes,0)})),(c=new Date).setDate(c.getDate()-6),p=(0,d.weeklyAdherence)(e.sessions,c,e.goal.weeklyFasts),h=(0,d.streakDays)(e.sessions,e.goal.targetHours),g=(0,d.avgFastDuration)(e.sessions,30),f=e.meals.filter(e=>e.date>=l[0].date).slice(-15).map(e=>`${e.date} ${e.slot} \xb7 ${e.proteinG??0}g protein \xb7 ${e.kcal??0}kcal \xb7 ${e.notes||""}`).join("\n"),`You are a concise nutrition + habit coach. Reply in ${"pt"===a?"Portuguese (PT-PT)":"English"}, max 5 short bullet points.
Focus on FOOD and ACTIONS first, fasting is secondary context. Be specific and actionable.
Avoid disclaimers. No medical advice — just practical patterns from the data.

Give 3–5 short insights as a Markdown bullet list ('- '), one insight per line.
Use **bold** to highlight the metric or food name being called out.
After the bullet list, leave one blank line, then add EXACTLY one callout for the
next-meal suggestion on its own line, in the form:
> [!TIP] <one specific suggestion>
No headings, no tables, no code fences. Never inline the TIP inside a bullet.

TODAY (${o}):
- protein: ${Math.round(r)}g
- kcal: ${Math.round(i)}
- walk: ${n} min

LAST 7 DAYS:
${l.map(e=>`- ${e.date}: ${Math.round(e.protein)}g \xb7 ${Math.round(e.kcal)}kcal \xb7 walk ${e.walk}min`).join("\n")}

CONTEXT:
- weekly fast adherence: ${Math.round(100*p)}% (target ${e.goal.weeklyFasts}/wk)
- current streak: ${h} days
- avg fast (last 30d): ${g.toFixed(1)}h

RECENT MEALS:
${f||"(none yet)"}

Give 3–5 bullets: what's going well, what to fix, one specific next-meal suggestion.`),w=await (0,d.askGroqStream)(u,{key:m,locale:a,maxTokens:400,onChunk:e=>v(e)}),b=Date.now();M(b),(0,s.pJ)(x,JSON.stringify({text:w,ts:b}))}catch(e){S(e instanceof Error?e.message:t("forma.ask.error"))}finally{z(!1)}},[e,a,t]);if(null===b||!1===b)return null;let C=!!$;return(0,o.jsxs)(c,{children:[(0,o.jsxs)(p,{children:[(0,o.jsxs)(h,{children:["✦ ",t("forma.ask.title")]}),(0,o.jsx)(l.$n,{variant:"accent",icon:(0,o.jsx)(l.In,{name:C?"refresh":"message",size:14}),onClick:()=>void F(),disabled:j,children:j?t("forma.ask.loading"):C?t("forma.ask.regenerate"):t("forma.ask.button")})]}),T&&(0,o.jsx)(f,{children:T}),($||j)&&(0,o.jsx)(g,{children:$?(0,o.jsx)(l.mQ,{children:$}):"…"}),null!==k&&!j&&C&&(0,o.jsxs)(m,{children:[t("forma.ask.generatedAt")," \xb7 ",(i=new Date(k),n=e=>String(e).padStart(2,"0"),w=i.toLocaleDateString("pt"===a?"pt-PT":"en-GB",{day:"2-digit",month:"short"}),`${w}, ${n(i.getHours())}:${n(i.getMinutes())}`)]}),!$&&!j&&!T&&(0,o.jsx)(g,{style:{color:s.w4.colors.mainTextMuted,fontStyle:"italic"},children:t("forma.ask.hint")})]})}},72552(e,t,a){a.d(t,{k:()=>j});var o=a(65723),r=a(37991),i=a(36859),n=a.n(i),s=a(6063),l=a(80884),d=a(28751);let c="#7fb77e",p=2*Math.PI*95,h=n().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${s.w4.spacing.md};
  padding: ${s.w4.spacing.lg} 0;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`,g=n().div`
  position: relative;
  width: ${200}px;
  height: ${200}px;
  flex-shrink: 0;
  max-width: 100%;
`,f=n().svg`
  transform: rotate(-90deg);
  overflow: visible;
  width: 100%;
  height: auto;
`,m=n().div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`,x=n().span`
  font-size: clamp(48px, 16vw, 76px);
  font-weight: 800;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainText};
  line-height: 1;
  letter-spacing: -0.02em;
`,u=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
`,w=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c};
  border: 1px solid ${c}40;
  border-radius: ${s.w4.borderRadius.sm};
  padding: 2px 6px;
`,b=n().div`
  display: flex;
  gap: ${s.w4.spacing.md};
  align-items: center;
`,y=n().div`
  display: flex;
  gap: ${s.w4.spacing.sm};
  align-items: center;
`,$=n().button`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${s.w4.colors.mainTextMuted};
  background: transparent;
  border: 1px dashed ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  padding: 2px 8px;
  cursor: pointer;
  transition: color 140ms ease, border-color 140ms ease;
  &:hover {
    color: ${s.w4.colors.mainText};
    border-color: ${s.w4.colors.borderStrong};
  }
`,v=n().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`,k=n().span`
  font-size: 13px;
  font-weight: 500;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainText};
`,M=n().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.16em;
`;function j({data:e,t,onStart:a,onStop:i,onEditStart:n}){let z,T,S,F,C,[A,H]=(0,r.useState)(Date.now),L=e.sessions.some(e=>void 0===e.endedAt);(0,r.useEffect)(()=>{if(!L)return;let e=setInterval(()=>H(Date.now()),1e3);return()=>clearInterval(e)},[L]);let D=(0,d.currentFast)(e,A),R=D?.percent??0,B=null!==D,P=D?D.hoursElapsed:0,I=D?D.remainingMs:0,W=D?D.session.targetHours:e.goal.targetHours;return(0,o.jsxs)(h,{children:[(0,o.jsxs)(g,{children:[(0,o.jsxs)(f,{width:200,height:200,viewBox:"0 0 200 200","aria-hidden":"true",children:[(0,o.jsx)("circle",{cx:100,cy:100,r:95,fill:"none",stroke:s.w4.colors.border,strokeWidth:10}),(0,o.jsx)("circle",{cx:100,cy:100,r:95,fill:"none",stroke:c,strokeWidth:10,strokeLinecap:"round",strokeDasharray:p,strokeDashoffset:p*(1-R),style:{transition:"stroke-dashoffset 0.6s ease"}})]}),(0,o.jsx)(m,{children:B?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(x,{children:[P.toFixed(1),"h"]}),(0,o.jsx)(u,{children:t("forma.timer.elapsed")})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(x,{children:[W,"h"]}),(0,o.jsx)(u,{children:t("forma.hero.notFasting")})]})})]}),B&&D&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(y,{children:[(0,o.jsx)(w,{children:D.session.protocol}),n&&(0,o.jsx)($,{type:"button",onClick:()=>n(D.session),title:t("forma.timer.editStart"),children:t("forma.timer.startedAt",{time:(T=String((z=new Date(D.session.startedAt)).getHours()).padStart(2,"0"),S=String(z.getMinutes()).padStart(2,"0"),`${T}:${S}`)})})]}),(0,o.jsxs)(b,{children:[(0,o.jsxs)(v,{children:[(0,o.jsx)(k,{children:(C=Math.floor((F=Math.floor(I/6e4))/60),`${String(C).padStart(2,"0")}:${String(F%60).padStart(2,"0")}`)}),(0,o.jsx)(M,{children:t("forma.timer.remaining")})]}),(0,o.jsxs)(v,{children:[(0,o.jsxs)(k,{children:[Math.round(100*R),"%"]}),(0,o.jsx)(M,{children:t("forma.timer.complete")})]})]})]}),B&&D?(0,o.jsx)(l.$n,{variant:"danger",onClick:()=>i(D.session),children:t("forma.stop")}):(0,o.jsx)(l.$n,{variant:"success",onClick:a,children:t("forma.start")})]})}},4406(e,t,a){a.d(t,{C:()=>w});var o=a(65723),r=a(37991),i=a(36859),n=a.n(i),s=a(6063),l=a(80884);let d="#7fb77e",c=n().div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${s.w4.spacing.md};

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,p=n().div`
  position: relative;
  grid-column: span ${({size:e})=>"sm"===e?4:"md"===e?6:12};
  display: flex;
  min-width: 0;

  /* Stretch the rendered card to fill the auto-sized grid row, so
     mixed-size cards on the same row align top + bottom. Excludes the
     absolutely-positioned controls bar (which must keep its own width). */
  & > :not(.forma-grid-controls) {
    flex: 1;
    min-width: 0;
    width: 100%;
  }

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-column: span 1;
  }

  &:hover .forma-grid-controls {
    opacity: 1;
    pointer-events: auto;
  }
`,h=n().div`
  position: absolute;
  top: -14px;
  right: 6px;
  display: flex;
  align-items: center;
  gap: 2px;
  opacity: 0;
  pointer-events: none;
  transition: opacity ${s.w4.transitions.fast};
  z-index: 5;

  /* Always visible on touch devices — no hover available */
  @media (hover: none) {
    opacity: 0.85;
    pointer-events: auto;
  }
`,g=n().button`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  position: relative;
  transition:
    color ${s.w4.transitions.fast},
    border-color ${s.w4.transitions.fast},
    background ${s.w4.transitions.fast};

  &:hover {
    color: ${s.w4.colors.mainText};
    border-color: ${s.w4.colors.mainTextMuted};
    background: ${s.w4.colors.surfaceRaised};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  /* Larger tap target for touch without changing visual size */
  @media (pointer: coarse) {
    &::before {
      content: '';
      position: absolute;
      inset: -6px;
    }
  }
`,f=n()(g)`
  &:hover {
    color: #f85149;
    border-color: rgba(248, 81, 73, 0.4);
  }
`;function m({size:e}){return(0,o.jsxs)("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:[(0,o.jsx)("rect",{x:1.5,y:4.5,width:11,height:5,rx:1,stroke:"currentColor",strokeWidth:1,opacity:.4}),(0,o.jsx)("rect",{x:2,y:5,width:"sm"===e?4:"md"===e?7:11,height:4,rx:.5,fill:"currentColor"})]})}let x=n().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${s.w4.spacing.xs};
  padding: ${s.w4.spacing.sm} 0;
`,u=n().button`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: transparent;
  border: 1px dashed ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  padding: 4px 8px;
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  &:hover { color: ${d}; border-color: ${d}; }
`;function w({cards:e,t,storageKey:a="forma:layout"}){let[i,n]=(0,r.useState)(null);(0,r.useEffect)(()=>{let t=!1;return(async()=>{let o=await (0,s.PL)(a),r=null;if(o)try{r=JSON.parse(o)}catch{r=null}t||n(function(e,t){let a=new Set(t.map(e=>e.id)),o=new Set,r=[];if(e)for(let t of e)a.has(t.id)&&(r.push(t),o.add(t.id));for(let e of t)o.has(e.id)||r.push({id:e.id,size:e.defaultSize??"sm",hidden:!1});return r}(r,e))})(),()=>{t=!0}},[a,e.map(e=>e.id).join("|")]);let d=(0,r.useCallback)(e=>{n(e),(0,s.Is)(a,JSON.stringify(e))},[a]),b=(0,r.useCallback)((e,t)=>{if(!i)return;let a=i.filter(e=>!e.hidden),o=a.findIndex(t=>t.id===e);if(-1===o)return;let r=o+t;if(r<0||r>=a.length)return;let n=a[r],s=i.findIndex(t=>t.id===e),l=i.findIndex(e=>e.id===n.id),c=[...i];[c[s],c[l]]=[c[l],c[s]],d(c)},[i,d]),y=(0,r.useCallback)(e=>{i&&d(i.map(t=>{var a;return t.id===e?{...t,size:"sm"===(a=t.size)?"md":"md"===a?"lg":"sm"}:t}))},[i,d]),$=(0,r.useCallback)(e=>{i&&d(i.map(t=>t.id===e?{...t,hidden:!0}:t))},[i,d]),v=(0,r.useCallback)(e=>{i&&d(i.map(t=>t.id===e?{...t,hidden:!1}:t))},[i,d]),k=(0,r.useMemo)(()=>{let t=new Map;for(let a of e)t.set(a.id,a);return t},[e]);if(!i)return(0,o.jsx)(c,{});let M=i.filter(e=>!e.hidden),j=i.filter(e=>e.hidden);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{children:M.map((e,a)=>{let r=k.get(e.id);return r?(0,o.jsxs)(p,{size:e.size,children:[r.render(),(0,o.jsxs)(h,{className:"forma-grid-controls",children:[a>0&&(0,o.jsx)(g,{onClick:()=>b(e.id,-1),title:t("forma.grid.moveLeft"),"aria-label":t("forma.grid.moveLeft"),children:(0,o.jsx)(l.In,{name:"chevron-left",size:14})}),a<M.length-1&&(0,o.jsx)(g,{onClick:()=>b(e.id,1),title:t("forma.grid.moveRight"),"aria-label":t("forma.grid.moveRight"),children:(0,o.jsx)(l.In,{name:"chevron-right",size:14})}),(0,o.jsx)(g,{onClick:()=>y(e.id),title:t("forma.grid.resize",{size:e.size.toUpperCase()}),"aria-label":t("forma.grid.resize",{size:e.size.toUpperCase()}),children:(0,o.jsx)(m,{size:e.size})}),(0,o.jsx)(f,{onClick:()=>$(e.id),title:t("forma.grid.hide"),"aria-label":t("forma.grid.hide"),children:(0,o.jsx)(l.In,{name:"close",size:14})})]})]},e.id):null})}),j.length>0&&(0,o.jsxs)(x,{children:[(0,o.jsx)("span",{style:{fontSize:11,fontFamily:s.w4.typography.fontFamilyMono,color:s.w4.colors.mainTextMuted,textTransform:"uppercase",letterSpacing:"0.16em",alignSelf:"center",marginRight:8},children:t("forma.grid.hiddenLabel")}),j.map(e=>(0,o.jsxs)(u,{onClick:()=>v(e.id),children:["+ ",t(`forma.grid.card.${e.id}`)]},e.id))]})]})}},39276(e,t,a){a.d(t,{Y:()=>L});var o=a(65723),r=a(37991),i=a(36859),n=a.n(i),s=a(6063),l=a(80884),d=a(72799);let c=(0,d.keyframes)`
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
`,p=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,h=n().div`
  position: fixed;
  top: var(--topbar-height, ${56}px);
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index: ${s.w4.zIndex.modal??1e3};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  animation: ${p} 0.18s ease both;

  @media (min-width: ${s.w4.breakpoints.md}) {
    align-items: center;
    padding: ${s.w4.spacing.lg};
  }
`,g=n().div`
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg} ${s.w4.borderRadius.lg} 0 0;
  border-left: 2px solid #7fb77e;
  width: 100%;
  max-width: ${({maxWidth:e})=>e}px;
  max-height: 80dvh;
  overflow-y: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: column;
  padding-bottom: max(0px, env(safe-area-inset-bottom));
  animation: ${c} 0.22s ease both;

  @media (min-width: ${s.w4.breakpoints.md}) {
    border-radius: ${s.w4.borderRadius.lg};
    max-height: calc(100dvh - ${56}px - ${s.w4.spacing.xl});
  }
`,f=n().div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${s.w4.spacing.sm} 0 0;
  flex-shrink: 0;
  touch-action: none;
  cursor: grab;

  @media (min-width: ${s.w4.breakpoints.md}) {
    cursor: default;
    pointer-events: none;
  }
`,m=n().div`
  width: 36px;
  height: 4px;
  border-radius: 2px;
  background: ${s.w4.colors.mainTextMuted};
  opacity: 0.4;
`,x=n().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;function u({open:e,onClose:t,children:a,maxWidth:i=480,ariaLabel:n}){let s=(0,r.useRef)(null);(0,r.useEffect)(()=>{if(!e)return;let a=e=>{"Escape"===e.key&&t()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[e,t]),(0,r.useEffect)(()=>{if(!e||!s.current)return;let t=s.current.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t?.focus()},[e]);let l=(0,r.useRef)(null),d=(0,r.useCallback)(e=>{l.current={y:e.touches[0].clientY}},[]),c=(0,r.useCallback)(e=>{if(!l.current||!s.current)return;let a=e.changedTouches[0].clientY-l.current.y;l.current=null,a<=0||a/s.current.getBoundingClientRect().height>.3&&t()},[t]),p=(0,r.useRef)(null),w=(0,r.useCallback)(e=>{p.current={y:e.clientY}},[]),b=(0,r.useCallback)(e=>{if(!p.current||!s.current)return;let a=e.clientY-p.current.y;p.current=null,a<=0||a/s.current.getBoundingClientRect().height>.3&&t()},[t]);return e?(0,o.jsx)(h,{onClick:t,role:"dialog","aria-modal":"true","aria-label":n,children:(0,o.jsxs)(g,{ref:s,maxWidth:i,onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(f,{onTouchStart:d,onTouchEnd:c,onPointerDown:w,onPointerUp:b,"aria-hidden":"true",children:(0,o.jsx)(m,{})}),(0,o.jsx)(x,{children:a})]})}):null}function w(){return new Date().toISOString().slice(0,10)}function b(e){let t=new Date(e),a=e=>String(e).padStart(2,"0");return`${t.getFullYear()}-${a(t.getMonth()+1)}-${a(t.getDate())}T${a(t.getHours())}:${a(t.getMinutes())}`}function y(){return b(Date.now())}function $(e){if(!e)return null;let t=new Date(e).getTime();return Number.isNaN(t)?null:t}let v="#7fb77e",k=n().div`
  padding: ${s.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.md};
`,M=n().div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.sm};
`,j=n().div`
  border-top: 1px solid ${s.w4.colors.border};
  padding-top: ${s.w4.spacing.md};
`,z=n().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};

  @media (max-width: ${s.w4.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`,T=n().label`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
  flex: 0 0 100px;

  @media (max-width: ${s.w4.breakpoints.md}) {
    flex: none;
    margin-bottom: 2px;
  }
`,S=n().input`
  flex: 1;
  min-width: 0;
  width: 100%;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 8px ${s.w4.spacing.sm};
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainText};
  outline: none;
  transition: border-color 0.14s ease;
  /* iOS: prevent zoom on focus (needs 16px font on inputs — covered by container 13px + 44px touch target) */
  min-height: 44px;

  &:focus {
    border-color: ${v};
  }
`,F=n().select`
  flex: 1;
  min-width: 0;
  width: 100%;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 8px ${s.w4.spacing.sm};
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainText};
  outline: none;
  cursor: pointer;
  min-height: 44px;

  &:focus {
    border-color: ${v};
  }
`,C=n()(F)``,A=n().button`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  background: transparent;
  color: ${s.w4.colors.mainText};
  font-size: 13px;
  cursor: pointer;
  transition: background 0.12s ease, border-color 0.12s ease;
  width: 100%;
  text-align: left;
  min-height: 44px;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    border-color: ${v};
  }
`,H=n().div`
  display: flex;
  gap: ${s.w4.spacing.sm};
  padding-top: ${s.w4.spacing.sm};
`;function L({open:e,onClose:t,data:a,t:i,initialMode:n,editing:d,onStartFast:c,onStopFast:p,onLogPastFast:h,onEditFast:g,onLogMeal:f,onEditMeal:m,onLogWeight:x,onEditWeight:v,onLogWalk:D,onEditWalk:R}){let[B,P]=(0,r.useState)(n??null),[I,W]=(0,r.useState)("16:8"),[E,N]=(0,r.useState)("16"),[O,Y]=(0,r.useState)("16:8"),[V,K]=(0,r.useState)("16"),[G,_]=(0,r.useState)(y),[q,J]=(0,r.useState)(""),[Q,U]=(0,r.useState)(null),[X,Z]=(0,r.useState)("dinner"),[ee,et]=(0,r.useState)(""),[ea,eo]=(0,r.useState)(""),[er,ei]=(0,r.useState)(""),[en,es]=(0,r.useState)(w),[el,ed]=(0,r.useState)(""),[ec,ep]=(0,r.useState)(w),[eh,eg]=(0,r.useState)(""),[ef,em]=(0,r.useState)(w);(0,r.useEffect)(()=>{if(e)if(U(null),d?.kind==="fast"){let e=d.entry;P("pastFast"),Y(e.protocol),K(String(e.targetHours)),_(b(e.startedAt)),J(e.endedAt?b(e.endedAt):"")}else if(d?.kind==="meal"){let e=d.entry;P("meal"),Z(e.slot),et(String(e.proteinG??"")),eo(String(e.kcal??"")),ei(e.notes??""),es(e.date)}else d?.kind==="weight"?(P("weight"),ed(String(d.entry.kg)),ep(d.entry.date)):d?.kind==="walk"?(P("walk"),eg(String(d.entry.minutes)),em(d.entry.date)):n&&(P(n),"pastFast"===n?(Y("16:8"),K("16"),_(y()),J("")):"meal"===n?(Z("dinner"),et(""),eo(""),ei(""),es(w())):"weight"===n?(ed(""),ep(w())):"walk"===n&&(eg(""),em(w())))},[e,d,n]);let ex=a.sessions.some(e=>void 0===e.endedAt),eu=d?.kind??("startFast"===n||"pastFast"===n?"fast":"meal"===n?"meal":"weight"===n?"weight":"walk"===n?"walk":null),ew=null===eu||"fast"===eu,eb=null===eu||"meal"===eu,ey=null===eu||"weight"===eu,e$=null===eu||"walk"===eu,ev=(0,r.useCallback)(()=>{P(null)},[]),ek=(0,r.useCallback)(()=>{ev(),t()},[ev,t]),eM=(0,r.useCallback)(()=>{let e=$(G);if(null===e)return;let t=q.trim(),a=t?$(t):null;if(t&&null===a)return;if(null!==a&&a<=e)return void U(i("forma.sheet.fastInvalidRange"));let o=parseInt(V,10),r=isNaN(o)||o<1?16:o;d?.kind==="fast"&&g?g(d.entry.id,O,r,e,a??void 0):h&&h(O,r,e,a??void 0),ek()},[d,g,h,O,V,G,q,i,ek]),ej=(0,r.useCallback)(()=>{let e=parseInt(E,10);isNaN(e)||e<1||(c(I,e),ek())},[I,E,c,ek]),ez=(0,r.useCallback)(()=>{let e=parseFloat(ee)||0,t=parseFloat(ea)||0;d?.kind==="meal"&&m?m(d.entry.id,X,e,t,er.trim(),en):f(X,e,t,er.trim(),en),ek()},[d,m,X,ee,ea,er,en,f,ek]),eT=(0,r.useCallback)(()=>{let e=parseFloat(el.replace(",","."));isNaN(e)||e<=0||(d?.kind==="weight"&&v?v(ec,e):x(e,ec),ek())},[d,v,el,ec,x,ek]),eS=(0,r.useCallback)(()=>{let e=parseInt(eh,10);isNaN(e)||e<=0||(d?.kind==="walk"&&R?R(d.entry.id,e,ef):D(e,ef),ek())},[d,R,eh,ef,D,ek]);return(0,o.jsx)(u,{open:e,onClose:ek,maxWidth:520,ariaLabel:i("forma.sheet.ariaLabel"),children:(0,o.jsxs)(k,{children:[(0,o.jsx)(l.YZ,{children:d?.kind==="fast"?i("forma.sheet.titleEditFast"):d?.kind==="meal"?i("forma.sheet.titleEditMeal"):d?.kind==="weight"?i("forma.sheet.titleEditWeight"):d?.kind==="walk"?i("forma.sheet.titleEditWalk"):"pastFast"===n?i("forma.sheet.titleAddFast"):"meal"===n?i("forma.sheet.titleAddMeal"):"weight"===n?i("forma.sheet.titleAddWeight"):"walk"===n?i("forma.sheet.titleAddWalk"):i("forma.sheet.title")}),ew&&(0,o.jsx)(j,{children:(0,o.jsx)(l.YZ,{children:i("forma.sheet.fastSection")})}),ew&&("pastFast"===B?(0,o.jsxs)(M,{children:[(0,o.jsxs)(z,{children:[(0,o.jsx)(T,{htmlFor:"past-fast-protocol",children:i("forma.rail.title")}),(0,o.jsxs)(F,{id:"past-fast-protocol",value:O,onChange:e=>{let t=e.target.value;Y(t),"custom"!==t&&K(t.split(":")[0])},children:[(0,o.jsx)("option",{value:"16:8",children:"16:8"}),(0,o.jsx)("option",{value:"18:6",children:"18:6"}),(0,o.jsx)("option",{value:"20:4",children:"20:4"}),(0,o.jsx)("option",{value:"custom",children:i("forma.protocol.custom")})]})]}),"custom"===O&&(0,o.jsxs)(z,{children:[(0,o.jsx)(T,{htmlFor:"past-fast-target",children:i("forma.sheet.fastTargetLabel")}),(0,o.jsx)(S,{id:"past-fast-target",type:"number",value:V,min:1,max:72,onChange:e=>K(e.target.value)})]}),(0,o.jsxs)(z,{children:[(0,o.jsx)(T,{htmlFor:"past-fast-start",children:i("forma.sheet.fastStartLabel")}),(0,o.jsx)(S,{id:"past-fast-start",type:"datetime-local",value:G,max:y(),onChange:e=>{_(e.target.value),U(null)}})]}),(0,o.jsxs)(z,{children:[(0,o.jsx)(T,{htmlFor:"past-fast-end",children:i("forma.sheet.fastEndLabel")}),(0,o.jsx)(S,{id:"past-fast-end",type:"datetime-local",value:q,max:y(),placeholder:i("forma.sheet.fastEndHint"),onChange:e=>{J(e.target.value),U(null)}})]}),Q&&(0,o.jsx)("div",{style:{fontSize:11,fontFamily:s.w4.typography.fontFamilyMono,color:s.w4.colors.danger},children:Q}),(0,o.jsxs)(H,{children:[(0,o.jsx)(l.$n,{variant:"primary",onClick:eM,children:d?.kind==="fast"?i("forma.sheet.saveEdit"):i("forma.sheet.save")}),(0,o.jsx)(l.$n,{variant:"ghost",onClick:ev,children:i("forma.sheet.cancel")})]})]}):ex?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.$n,{variant:"danger",onClick:()=>{p(),ek()},children:i("forma.stop")}),(0,o.jsxs)(A,{onClick:()=>P("pastFast"),children:[(0,o.jsx)(l.In,{name:"clock",size:16}),i("forma.sheet.logPastFast")]})]}):"startFast"===B?(0,o.jsxs)(M,{children:[(0,o.jsxs)(z,{children:[(0,o.jsx)(T,{htmlFor:"fast-protocol",children:i("forma.rail.title")}),(0,o.jsxs)(F,{id:"fast-protocol",value:I,onChange:e=>{let t=e.target.value;W(t),"custom"!==t&&N(t.split(":")[0])},children:[(0,o.jsx)("option",{value:"16:8",children:"16:8"}),(0,o.jsx)("option",{value:"18:6",children:"18:6"}),(0,o.jsx)("option",{value:"20:4",children:"20:4"}),(0,o.jsx)("option",{value:"custom",children:i("forma.protocol.custom")})]})]}),"custom"===I&&(0,o.jsxs)(z,{children:[(0,o.jsx)(T,{htmlFor:"fast-hours",children:i("forma.timer.target")}),(0,o.jsx)(S,{id:"fast-hours",type:"number",value:E,min:1,max:72,onChange:e=>N(e.target.value)})]}),(0,o.jsxs)(H,{children:[(0,o.jsx)(l.$n,{variant:"success",onClick:ej,children:i("forma.start")}),(0,o.jsx)(l.$n,{variant:"ghost",onClick:ev,children:i("forma.sheet.cancel")})]})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(A,{onClick:()=>P("startFast"),children:[(0,o.jsx)(l.In,{name:"play",size:16}),i("forma.start")]}),(0,o.jsxs)(A,{onClick:()=>P("pastFast"),children:[(0,o.jsx)(l.In,{name:"clock",size:16}),i("forma.sheet.logPastFast")]})]})),eb&&(0,o.jsx)(j,{children:(0,o.jsx)(l.YZ,{children:i("forma.sheet.mealSection")})}),eb&&("meal"===B?(0,o.jsxs)(M,{children:[(0,o.jsxs)(z,{children:[(0,o.jsx)(T,{htmlFor:"meal-slot",children:i("forma.meal.lunch")}),(0,o.jsxs)(C,{id:"meal-slot",value:X,onChange:e=>Z(e.target.value),children:[(0,o.jsx)("option",{value:"lunch",children:i("forma.meal.lunch")}),(0,o.jsx)("option",{value:"dinner",children:i("forma.meal.dinner")}),(0,o.jsx)("option",{value:"snack",children:i("forma.meal.snack")})]})]}),(0,o.jsxs)(z,{children:[(0,o.jsx)(T,{htmlFor:"meal-protein",children:i("forma.sheet.proteinLabel")}),(0,o.jsx)(S,{id:"meal-protein",type:"number",value:ee,min:0,placeholder:"0",onChange:e=>et(e.target.value)})]}),(0,o.jsxs)(z,{children:[(0,o.jsx)(T,{htmlFor:"meal-kcal",children:i("forma.sheet.kcalLabel")}),(0,o.jsx)(S,{id:"meal-kcal",type:"number",value:ea,min:0,placeholder:"0",onChange:e=>eo(e.target.value)})]}),(0,o.jsxs)(z,{children:[(0,o.jsx)(T,{htmlFor:"meal-notes",children:i("forma.meal.template")}),(0,o.jsx)(S,{id:"meal-notes",type:"text",value:er,placeholder:"ovos, frango…",onChange:e=>ei(e.target.value)})]}),(0,o.jsxs)(z,{children:[(0,o.jsx)(T,{htmlFor:"meal-date",children:i("forma.sheet.dateLabel")}),(0,o.jsx)(S,{id:"meal-date",type:"date",value:en,max:w(),onChange:e=>es(e.target.value)})]}),(0,o.jsxs)(H,{children:[(0,o.jsx)(l.$n,{variant:"primary",onClick:ez,children:d?.kind==="meal"?i("forma.sheet.saveEdit"):i("forma.sheet.save")}),(0,o.jsx)(l.$n,{variant:"ghost",onClick:ev,children:i("forma.sheet.cancel")})]})]}):(0,o.jsxs)(A,{onClick:()=>P("meal"),children:[(0,o.jsx)(l.In,{name:"utensils",size:16}),i("forma.sheet.logMeal")]})),ey&&(0,o.jsx)(j,{children:(0,o.jsx)(l.YZ,{children:i("forma.sheet.weightSection")})}),ey&&("weight"===B?(0,o.jsxs)(M,{children:[(0,o.jsxs)(z,{children:[(0,o.jsx)(T,{htmlFor:"weight-kg",children:i("forma.sheet.weightLabel")}),(0,o.jsx)(S,{id:"weight-kg",type:"number",value:el,min:20,max:300,step:.1,placeholder:"84.2",onChange:e=>ed(e.target.value)})]}),(0,o.jsxs)(z,{children:[(0,o.jsx)(T,{htmlFor:"weight-date",children:i("forma.sheet.dateLabel")}),(0,o.jsx)(S,{id:"weight-date",type:"date",value:ec,max:w(),onChange:e=>ep(e.target.value)})]}),(0,o.jsxs)(H,{children:[(0,o.jsx)(l.$n,{variant:"primary",onClick:eT,children:d?.kind==="weight"?i("forma.sheet.saveEdit"):i("forma.sheet.save")}),(0,o.jsx)(l.$n,{variant:"ghost",onClick:ev,children:i("forma.sheet.cancel")})]})]}):(0,o.jsxs)(A,{onClick:()=>P("weight"),children:[(0,o.jsx)(l.In,{name:"trending-up",size:16}),i("forma.sheet.logWeight")]})),e$&&(0,o.jsx)(j,{children:(0,o.jsx)(l.YZ,{children:i("forma.sheet.walkSection")})}),e$&&("walk"===B?(0,o.jsxs)(M,{children:[(0,o.jsxs)(z,{children:[(0,o.jsx)(T,{htmlFor:"walk-min",children:i("forma.sheet.walkLabel")}),(0,o.jsx)(S,{id:"walk-min",type:"number",value:eh,min:1,max:600,placeholder:"30",onChange:e=>eg(e.target.value)})]}),(0,o.jsxs)(z,{children:[(0,o.jsx)(T,{htmlFor:"walk-date",children:i("forma.sheet.dateLabel")}),(0,o.jsx)(S,{id:"walk-date",type:"date",value:ef,max:w(),onChange:e=>em(e.target.value)})]}),(0,o.jsxs)(H,{children:[(0,o.jsx)(l.$n,{variant:"primary",onClick:eS,children:d?.kind==="walk"?i("forma.sheet.saveEdit"):i("forma.sheet.save")}),(0,o.jsx)(l.$n,{variant:"ghost",onClick:ev,children:i("forma.sheet.cancel")})]})]}):(0,o.jsxs)(A,{onClick:()=>P("walk"),children:[(0,o.jsx)(l.In,{name:"activity",size:16}),i("forma.sheet.logWalk")]}))]})})}},52128(e,t,a){a.d(t,{g:()=>y});var o=a(65723),r=a(37991),i=a(36859),n=a.n(i),s=a(6063),l=a(28751);let d="#7fb77e",c=n().button`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.sm};
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-left: 2px solid ${d};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.md};
  cursor: pointer;
  text-align: left;
  width: 100%;
  height: 100%;
  transition: border-color 140ms ease, transform 140ms ease;

  &:hover {
    border-color: ${s.w4.colors.borderStrong};
    transform: translateY(-1px);
  }
`,p=n().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${s.w4.spacing.sm};
`,h=n().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
`,g=n().span`
  font-size: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${d};
`,f=n().div`
  display: flex;
  align-items: baseline;
  gap: ${s.w4.spacing.sm};
  flex-wrap: wrap;
`,m=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainText};
  line-height: 1;
`,x=n().span`
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
`,u=n().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextFaint??s.w4.colors.mainTextMuted};
`,w=n().div`
  height: 4px;
  width: 100%;
  background: ${s.w4.colors.border};
  border-radius: 999px;
  overflow: hidden;
`,b=n().div`
  height: 100%;
  width: ${({pct:e})=>`${Math.min(100,Math.max(0,100*e))}%`};
  background: ${d};
  transition: width 0.6s ease;
`;function y({data:e,t,onClick:a}){let[i,n]=(0,r.useState)(Date.now),s=e.sessions.some(e=>void 0===e.endedAt);(0,r.useEffect)(()=>{if(!s)return;let e=setInterval(()=>n(Date.now()),3e4);return()=>clearInterval(e)},[s]);let d=(0,l.currentFast)(e,i),$=d?.percent??0,v=d?Math.max(0,d.session.targetHours-d.hoursElapsed):0,k=d?`${v.toFixed(1)}h ${t("forma.timer.remaining")}`:t("forma.miniFast.noActive");return(0,o.jsxs)(c,{onClick:a,"aria-label":t("forma.miniFast.aria"),children:[(0,o.jsxs)(p,{children:[(0,o.jsxs)(h,{children:["◉ ",t("forma.miniFast.title")]}),d&&(0,o.jsxs)(g,{children:[Math.round(100*$),"%"]})]}),(0,o.jsxs)(f,{children:[(0,o.jsx)(m,{children:d?d.hoursElapsed.toFixed(1):"—"}),(0,o.jsx)(x,{children:d?`h / ${d.session.targetHours}h`:t("forma.miniFast.noActive")})]}),(0,o.jsx)(w,{children:(0,o.jsx)(b,{pct:$})}),(0,o.jsx)(u,{children:k})]})}},59446(e,t,a){a.d(t,{S:()=>w});var o=a(65723),r=a(37991),i=a(36859),n=a.n(i),s=a(6063),l=a(28751),d=a(11533);let c="#7fb77e",p=n().button`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.sm};
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-left: 2px solid ${c};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.md};
  cursor: pointer;
  text-align: left;
  width: 100%;
  height: 100%;
  transition: border-color 140ms ease, transform 140ms ease;

  &:hover {
    border-color: ${s.w4.colors.borderStrong};
    transform: translateY(-1px);
  }
`,h=n().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,g=n().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
`,f=n().div`
  display: flex;
  align-items: baseline;
  gap: ${s.w4.spacing.sm};
`,m=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainText};
  line-height: 1;
`,x=n().span`
  font-size: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${({pos:e})=>e?s.w4.colors.danger:c};
`,u=n().div`
  flex: 1;
  min-height: 60px;
`;function w({data:e,t,onClick:a}){let i=(0,r.useMemo)(()=>(0,l.weightForecast)(e.weights,60,30),[e.weights]),n=i.history.length>0?i.history[i.history.length-1]:null,c=i.forecast.length>0?i.forecast[i.forecast.length-1]:null,b=n&&c?c.kg-n.kg:0;return(0,o.jsxs)(p,{onClick:a,"aria-label":t("forma.miniWeight.aria"),children:[(0,o.jsxs)(h,{children:[(0,o.jsxs)(g,{children:["◉ ",t("forma.miniWeight.title")]}),c&&(0,o.jsxs)(x,{pos:b>0,children:[b>=0?"+":"",b.toFixed(1),"kg / 30d"]})]}),(0,o.jsxs)(f,{children:[(0,o.jsx)(m,{children:n?n.kg.toFixed(1):"—"}),(0,o.jsx)("span",{style:{color:s.w4.colors.mainTextMuted,fontSize:13,fontFamily:s.w4.typography.fontFamilyMono},children:"kg"}),c&&(0,o.jsxs)("span",{style:{color:s.w4.colors.mainTextMuted,fontSize:12,fontFamily:s.w4.typography.fontFamilyMono},children:["→ ",c.kg.toFixed(1)," kg"]})]}),(0,o.jsx)(u,{children:(0,o.jsx)(d.h,{forecast:i,axes:!1})})]})}},68477(e,t,a){a.d(t,{P:()=>p});var o=a(65723),r=a(36859),i=a.n(r),n=a(6063);let s="#7fb77e",l=["16:8","18:6","20:4","custom"],d=i().div`
  display: flex;
  gap: ${n.w4.spacing.sm};
  overflow-x: auto;
  padding: ${n.w4.spacing.sm} ${n.w4.spacing.md};
  border-bottom: 1px solid ${n.w4.colors.border};
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  @media (min-width: ${n.w4.breakpoints.lg}) {
    display: none;
  }
`,c=i().button`
  flex-shrink: 0;
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid ${({active:e})=>e?s:n.w4.colors.border};
  background: ${({active:e})=>e?`${s}18`:"transparent"};
  color: ${({active:e})=>e?s:n.w4.colors.mainTextMuted};
  font-size: 13px;
  font-family: ${n.w4.typography.fontFamilyMono};
  cursor: pointer;
  transition: border-color 0.14s ease, background 0.14s ease, color 0.14s ease;
  white-space: nowrap;

  &:hover {
    border-color: ${s};
    color: ${s};
  }
`;function p({t:e,active:t,onChange:a}){return(0,o.jsx)(d,{role:"group","aria-label":e("forma.rail.title"),children:l.map(r=>(0,o.jsx)(c,{active:t===r,onClick:()=>a(r),"aria-pressed":t===r,children:e(`forma.protocol.${r}`)},r))})}},71589(e,t,a){a.d(t,{B:()=>f});var o=a(65723),r=a(36859),i=a.n(r),n=a(6063);let s="#7fb77e",l=[{id:"16:8",fastH:16,windowH:8},{id:"18:6",fastH:18,windowH:6},{id:"20:4",fastH:20,windowH:4},{id:"custom",fastH:0,windowH:0}],d=i().aside`
  width: 260px;
  flex-shrink: 0;
  border-right: 1px solid ${n.w4.colors.border};
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: ${n.w4.breakpoints.lg}) {
    display: none;
  }
`,c=i().div`
  padding: ${n.w4.spacing.md} ${n.w4.spacing.md} ${n.w4.spacing.sm};
  font-size: 11px;
  font-weight: 600;
  font-family: ${n.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${n.w4.colors.mainTextMuted};
  border-bottom: 1px solid ${n.w4.colors.border};
`,p=i().button`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: ${n.w4.spacing.md};
  border: none;
  border-bottom: 1px solid ${n.w4.colors.border};
  background: ${({active:e})=>e?`${s}14`:"transparent"};
  border-left: 2px solid ${({active:e})=>e?s:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background 0.14s ease, border-color 0.14s ease;
  width: 100%;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
  }
`,h=i().span`
  font-size: 13px;
  font-weight: 600;
  color: ${({active:e})=>e?s:n.w4.colors.mainText};
`,g=i().span`
  font-size: 11px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.mainTextMuted};
`;function f({t:e,active:t,onChange:a}){return(0,o.jsxs)(d,{"aria-label":e("forma.rail.title"),children:[(0,o.jsx)(c,{children:e("forma.rail.title")}),l.map(r=>(0,o.jsxs)(p,{active:t===r.id,onClick:()=>a(r.id),"aria-pressed":t===r.id,children:[(0,o.jsx)(h,{active:t===r.id,children:e(`forma.protocol.${r.id}`)}),r.fastH>0&&(0,o.jsxs)(g,{children:[e("forma.rail.hours",{n:r.fastH})," \xb7 ",e("forma.rail.window",{n:r.windowH})]})]},r.id))]})}},25405(e,t,a){a.d(t,{F:()=>p});var o=a(65723),r=a(37991),i=a(36859),n=a.n(i),s=a(6063);let l=n().form`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.md};
  border-bottom: 1px solid ${s.w4.colors.border};

  @media (max-width: ${s.w4.breakpoints.md}) {
    display: none;
  }
`,d=n().input`
  flex: 1;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 6px ${s.w4.spacing.sm};
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainText};
  outline: none;
  transition: border-color 0.14s ease;

  &::placeholder {
    color: ${s.w4.colors.mainTextMuted};
    font-size: 11px;
  }

  &:focus {
    border-color: ${"#7fb77e"};
  }
`,c=n().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  white-space: nowrap;
`;function p({t:e,onParsed:t}){let[a,i]=(0,r.useState)(""),[n,s]=(0,r.useState)(!1),h=(0,r.useCallback)(e=>{e.preventDefault();let o=function(e){let t=e.trim().toLowerCase();if(!t)return null;let a=t.match(/^(?:peso|weight)\s+(\d+(?:[.,]\d+)?)/);if(a){let e=parseFloat(a[1].replace(",","."));if(!isNaN(e))return{kind:"weight",weightKg:e}}let o=t.match(/^(?:caminhei|walked|walk|caminhada)\s+(\d+)/);if(o){let e=parseInt(o[1],10);if(!isNaN(e))return{kind:"walk",walkMinutes:e}}let r=t.match(/^(?:jejum|fast)\s+(\d+)/);if(r){let e=parseInt(r[1],10);if(!isNaN(e))return{kind:"fast",fastHours:e,fastProtocol:16===e?"16:8":18===e?"18:6":20===e?"20:4":"custom"}}let i=t.match(/^(jantar|almoço|almoco|dinner|snack|lanche|lunch)\s+(.*)/);if(i){let e=i[1];return{kind:"meal",mealSlot:"jantar"===e||"dinner"===e?"dinner":"almo\xe7o"===e||"almoco"===e||"lunch"===e?"lunch":"snack",mealDesc:i[2].trim()}}return null}(a);if(!o){s(!0),setTimeout(()=>s(!1),1200);return}t(o),i("")},[a,t]);return(0,o.jsxs)(l,{onSubmit:h,children:[(0,o.jsx)(d,{value:a,onChange:e=>i(e.target.value),placeholder:e("forma.quickadd.placeholder"),style:{borderColor:n?"#f85149":void 0},"aria-label":e("forma.quickadd.hint")}),(0,o.jsx)(c,{children:e("forma.quickadd.hint")})]})}},20429(e,t,a){a.d(t,{f:()=>w});var o=a(65723),r=a(37991),i=a(36859),n=a.n(i),s=a(6063),l=a(80884);let d="#7fb77e",c=n().section`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.lg};
  max-width: 560px;
`,p=n().div`
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.md};
`,h=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
`,g=n().div`
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: ${s.w4.spacing.sm};
  align-items: center;
`,f=n().label`
  font-size: 13px;
  color: ${s.w4.colors.mainText};
`,m=n().input`
  background: ${s.w4.colors.mainBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 6px 8px;
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainText};
  outline: none;
  &:focus { border-color: ${d}; }
`,x=n().div`
  display: flex;
  gap: ${s.w4.spacing.sm};
  justify-content: flex-end;
`,u=n().span`
  font-size: 12px;
  color: ${d};
  align-self: center;
`;function w({data:e,t,onSave:a}){let[i,n]=(0,r.useState)(String(e.goal.proteinG??110)),[s,d]=(0,r.useState)(String(e.goal.kcal??2200)),[b,y]=(0,r.useState)(String(e.goal.walkMin??30)),[$,v]=(0,r.useState)(String(e.goal.weightKg??"")),[k,M]=(0,r.useState)(String(e.goal.targetHours)),[j,z]=(0,r.useState)(String(e.goal.weeklyFasts)),[T,S]=(0,r.useState)(!1),F=async()=>{let t={...e,goal:{targetHours:Number(k)||16,weeklyFasts:Number(j)||5,proteinG:Number(i)||void 0,kcal:Number(s)||void 0,walkMin:Number(b)||void 0,weightKg:$?Number($):void 0}};await a(t),S(!0),setTimeout(()=>S(!1),2e3)};return(0,o.jsxs)(c,{children:[(0,o.jsxs)(p,{children:[(0,o.jsxs)(h,{children:["◉ ",t("forma.settings.foodGoals")]}),(0,o.jsxs)(g,{children:[(0,o.jsx)(f,{children:t("forma.settings.proteinG")}),(0,o.jsx)(m,{type:"number",value:i,onChange:e=>n(e.target.value)})]}),(0,o.jsxs)(g,{children:[(0,o.jsx)(f,{children:t("forma.settings.kcal")}),(0,o.jsx)(m,{type:"number",value:s,onChange:e=>d(e.target.value)})]}),(0,o.jsxs)(g,{children:[(0,o.jsx)(f,{children:t("forma.settings.walkMin")}),(0,o.jsx)(m,{type:"number",value:b,onChange:e=>y(e.target.value)})]}),(0,o.jsxs)(g,{children:[(0,o.jsx)(f,{children:t("forma.settings.weightTarget")}),(0,o.jsx)(m,{type:"number",step:"0.1",value:$,onChange:e=>v(e.target.value)})]})]}),(0,o.jsxs)(p,{children:[(0,o.jsxs)(h,{children:["◉ ",t("forma.settings.fastingGoals")]}),(0,o.jsxs)(g,{children:[(0,o.jsx)(f,{children:t("forma.settings.targetHours")}),(0,o.jsx)(m,{type:"number",value:k,onChange:e=>M(e.target.value)})]}),(0,o.jsxs)(g,{children:[(0,o.jsx)(f,{children:t("forma.settings.weeklyFasts")}),(0,o.jsx)(m,{type:"number",value:j,onChange:e=>z(e.target.value)})]})]}),(0,o.jsxs)(x,{children:[T&&(0,o.jsx)(u,{children:t("forma.settings.saved")}),(0,o.jsx)(l.$n,{variant:"primary",onClick:()=>void F(),children:t("forma.settings.save")})]})]})}},15742(e,t,a){a.d(t,{_:()=>S});var o=a(65723),r=a(36859),i=a.n(r),n=a(6063),s=a(80884),l=a(28751);let d="#7fb77e",c=i().section`
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-left: 2px solid ${d};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.md};
`,p=i().header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${n.w4.spacing.md};
`,h=i().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${n.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${n.w4.colors.mainTextMuted};
`,g=i().div`
  display: flex;
  align-items: baseline;
  gap: ${n.w4.spacing.lg};
  flex-wrap: wrap;
`,f=i().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,m=i().span`
  font-size: 28px;
  font-weight: 700;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${n.w4.colors.mainText};
  line-height: 1;
`,x=i().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${n.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${n.w4.colors.mainTextMuted};
`,u=i().div`
  position: relative;
  height: 8px;
  background: ${n.w4.colors.border};
  border-radius: 4px;
  overflow: hidden;
`,w=i().div`
  position: absolute;
  inset: 0;
  width: ${({pct:e})=>`${Math.min(100,Math.max(0,e))}%`};
  background: ${d};
  transition: width 0.3s ease;
`,b=i().div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${n.w4.spacing.sm};

  @media (max-width: ${n.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,y=i().ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.xs};
`,$=i().li`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  gap: ${n.w4.spacing.sm};
  padding: 6px 8px;
  border-radius: ${n.w4.borderRadius.sm};
  &:hover {
    background: ${n.w4.colors.sidebarHover};
  }
`,v=i().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${n.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${n.w4.colors.mainTextMuted};
  min-width: 56px;
`,k=i().span`
  font-size: 13px;
  color: ${n.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,M=i().span`
  font-size: 13px;
  font-weight: 500;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${n.w4.colors.mainText};
`,j=i().button`
  background: transparent;
  border: none;
  color: ${n.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 4px;
  border-radius: ${n.w4.borderRadius.sm};
  display: flex;
  align-items: center;
  &:hover { color: ${n.w4.colors.danger}; }
`,z=i().p`
  font-size: 12px;
  color: ${n.w4.colors.mainTextMuted};
  margin: 0;
  font-style: italic;
`,T=i().div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
`;function S({data:e,t,onLogMeal:a,onLogWalk:r,onLogWeight:i,onDeleteMeal:d,onEditMeal:F}){var C,A;let H=new Date().toISOString().slice(0,10),L=(0,l.proteinByDay)(e.meals,H),D=(C=e.meals,C.filter(e=>e.date===H).reduce((e,t)=>e+(t.kcal??0),0)),R=(A=e.walks,A.filter(e=>e.date===H).reduce((e,t)=>e+t.minutes,0)),B=e.meals.filter(e=>e.date===H).sort((e,t)=>e.createdAt-t.createdAt),P=e.goal.proteinG??110;return(0,o.jsxs)(c,{children:[(0,o.jsxs)(p,{children:[(0,o.jsxs)(h,{children:["◉ ",t("forma.today.title")]}),(0,o.jsx)(h,{children:new Date().toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"short"})})]}),(0,o.jsxs)(g,{children:[(0,o.jsxs)(f,{children:[(0,o.jsxs)(m,{children:[Math.round(L),(0,o.jsxs)("span",{style:{fontSize:14,color:n.w4.colors.mainTextMuted,marginLeft:4},children:["/ ",P,"g"]})]}),(0,o.jsx)(x,{children:t("forma.today.protein")})]}),(0,o.jsxs)(f,{children:[(0,o.jsx)(m,{children:Math.round(D)}),(0,o.jsx)(x,{children:t("forma.today.kcal")})]}),(0,o.jsxs)(f,{children:[(0,o.jsxs)(m,{children:[R,(0,o.jsx)("span",{style:{fontSize:14,color:n.w4.colors.mainTextMuted,marginLeft:4},children:"min"})]}),(0,o.jsx)(x,{children:t("forma.today.walk")})]})]}),(0,o.jsx)(u,{children:(0,o.jsx)(w,{pct:L/P*100})}),(0,o.jsxs)(b,{children:[(0,o.jsx)(s.$n,{variant:"primary",icon:(0,o.jsx)(s.In,{name:"plus",size:14}),onClick:a,children:t("forma.action.logMeal")}),(0,o.jsx)(s.$n,{variant:"ghost",icon:(0,o.jsx)(s.In,{name:"plus",size:14}),onClick:r,children:t("forma.action.logWalk")}),(0,o.jsx)(s.$n,{variant:"ghost",icon:(0,o.jsx)(s.In,{name:"plus",size:14}),onClick:i,children:t("forma.action.logWeight")})]}),0===B.length?(0,o.jsx)(z,{children:t("forma.today.noMealsYet")}):(0,o.jsx)(y,{children:B.map(e=>(0,o.jsxs)($,{onClick:F?()=>F(e.id):void 0,style:{cursor:F?"pointer":"default"},title:F?t("forma.action.edit"):void 0,children:[(0,o.jsx)(v,{children:t(`forma.meal.${e.slot}`)}),(0,o.jsx)(k,{children:e.notes||"—"}),(0,o.jsxs)(M,{children:[e.proteinG??0,"g \xb7 ",e.kcal??0,"kcal"]}),(0,o.jsx)(j,{onClick:t=>{t.stopPropagation(),d(e.id)},"aria-label":t("forma.action.delete"),children:(0,o.jsx)(s.In,{name:"trash",size:14})})]},e.id))}),R>0&&(0,o.jsx)(T,{children:(0,o.jsx)("span",{children:t("forma.today.walkSummary",{min:R})})})]})}},20483(e,t,a){a.d(t,{v:()=>v});var o=a(65723),r=a(36859),i=a.n(r),n=a(72799),s=a(6063),l=a(80884);let d="#7fb77e",c=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,p=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],h=["Dom","Seg","Ter","Qua","Qui","Sex","S\xe1b"];function g(e){return e.toISOString().slice(0,10)}let f=i().div`
  animation: ${c} 0.25s ease both;
`,m=i().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
  padding: 0 0 ${s.w4.spacing.sm};
`,x=i().div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${s.w4.spacing.xs};
`,u=i().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.xs};
  border-radius: ${s.w4.borderRadius.md};
  border: 1px solid ${({isDone:e})=>e?`${d}40`:s.w4.colors.border};
  background: ${({isDone:e,isToday:t})=>e?`${d}10`:t?`${s.w4.colors.surface}`:"transparent"};
  outline: ${({isToday:e})=>e?`1px solid ${d}60`:"none"};
  transition: border-color 0.14s ease, background 0.14s ease, transform 0.14s ease;
  min-width: 0;
  cursor: ${({tappable:e})=>e?"pointer":"default"};
  font: inherit;
  color: inherit;
  text-align: center;

  &:hover {
    ${({tappable:e})=>e?`border-color: ${d}; transform: translateY(-1px);`:""}
  }
`,w=i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-weight: ${({isToday:e})=>e?700:400};
  color: ${({isToday:e})=>e?d:s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,b=i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,y=i().div`
  color: ${d};
  display: flex;
  align-items: center;
  justify-content: center;
`,$=i().div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${s.w4.colors.border};
`;function v({data:e,t,locale:a,onTapTemplate:r}){let i,n,s,d=(n=new Date(i=new Date),s=(i.getDay()+6)%7,n.setDate(i.getDate()-s),n.setHours(0,0,0,0),Array.from({length:7},(e,t)=>{let a=new Date(n);return a.setDate(n.getDate()+t),{date:g(a),weekday:a.getDay()}})),c=g(new Date),k="pt"===a?h:p,M=new Map;for(let t of e.templates)M.set(t.weekday,t);return(0,o.jsxs)(f,{children:[(0,o.jsx)(m,{children:t("forma.week.title")}),(0,o.jsx)(x,{children:d.map(({date:a,weekday:i})=>{let n=a===c,s=e.meals.some(e=>e.date===a),d=e.sessions.some(e=>void 0!==e.endedAt&&g(new Date(e.startedAt))===a),p=s||d,h=M.get(i),f=n&&void 0!==h&&void 0!==r&&!s;return(0,o.jsxs)(u,{isToday:n,isDone:p,tappable:f,onClick:()=>{f&&h&&r?.(h)},type:"button",title:f?t("forma.week.tapToLog"):void 0,"aria-label":f?t("forma.week.tapToLog"):void 0,children:[(0,o.jsx)(w,{isToday:n,children:k[i]}),p?(0,o.jsx)(y,{"aria-label":t("forma.week.done"),children:(0,o.jsx)(l.In,{name:"check-circle",size:14})}):h?(0,o.jsx)($,{title:t("forma.week.planned")}):null,h&&(0,o.jsx)(b,{children:t(h.nameKey)})]},a)})})]})}},11533(e,t,a){a.d(t,{h:()=>h});var o=a(65723),r=a(37991),i=a(36859),n=a.n(i),s=a(6063);let l="#7fb77e",d=n().div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 140px;
`,c=n().svg`
  width: 100%;
  height: 100%;
  display: block;
  overflow: visible;
`,p=n().text`
  font-size: 10px;
  font-family: ${s.w4.typography.fontFamilyMono};
  fill: ${s.w4.colors.mainTextMuted};
`;function h({forecast:e,axes:t=!0}){let a=(0,r.useMemo)(()=>[...e.history,...e.forecast],[e.history,e.forecast]);if(a.length<2)return(0,o.jsx)(d,{children:(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:s.w4.colors.mainTextMuted,fontSize:12,fontFamily:s.w4.typography.fontFamilyMono},children:"—"})});let i=t?36:8,n=t?18:4,g=a.map(e=>e.kg),f=Math.min(...g),m=Math.max(...g),x=m-f||1,u=new Date(a[0].date).getTime(),w=new Date(a[a.length-1].date).getTime()-u||1,b=e=>i+(new Date(e).getTime()-u)/w*(600-2*i),y=e=>200-n-(e-f)/x*(200-2*n),$=e.history.map((e,t)=>`${0===t?"M":"L"} ${b(e.date).toFixed(1)} ${y(e.kg).toFixed(1)}`).join(" "),v=e.forecast.length?`M ${b(e.history[e.history.length-1].date).toFixed(1)} ${y(e.history[e.history.length-1].kg).toFixed(1)} `+e.forecast.map(e=>`L ${b(e.date).toFixed(1)} ${y(e.kg).toFixed(1)}`).join(" "):"",k=e.history[e.history.length-1],M=e.forecast[e.forecast.length-1];return(0,o.jsx)(d,{children:(0,o.jsxs)(c,{viewBox:"0 0 600 200",preserveAspectRatio:"none",children:[t&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p,{x:4,y:n+4,children:m.toFixed(1)}),(0,o.jsx)(p,{x:4,y:200-n+4,children:f.toFixed(1)}),(0,o.jsx)("line",{x1:i,y1:200-n,x2:600-i,y2:200-n,stroke:s.w4.colors.border,strokeWidth:1}),(0,o.jsx)("line",{x1:i,y1:n,x2:i,y2:200-n,stroke:s.w4.colors.border,strokeWidth:1})]}),(0,o.jsx)("path",{d:$,fill:"none",stroke:l,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),v&&(0,o.jsx)("path",{d:v,fill:"none",stroke:l,strokeWidth:2,strokeDasharray:"4 4",strokeLinecap:"round",opacity:.65}),M&&(0,o.jsx)("circle",{cx:b(M.date),cy:y(M.kg),r:3,fill:l,opacity:.7}),k&&(0,o.jsx)("circle",{cx:b(k.date),cy:y(k.kg),r:4,fill:l,stroke:s.w4.colors.surface,strokeWidth:1.5})]})})}},92152(e,t,a){a.d(t,{m:()=>M});var o=a(65723),r=a(37991),i=a(36859),n=a.n(i),s=a(6063),l=a(80884),d=a(28751),c=a(11533);let p="#7fb77e",h=n().section`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.lg};
`,g=n().div`
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-left: 2px solid ${p};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.md};
`,f=n().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,m=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
`,x=n().div`
  display: flex;
  align-items: baseline;
  gap: ${s.w4.spacing.lg};
`,u=n().span`
  font-size: 28px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainText};
`,w=n().span`
  font-size: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
`,b=n().div`
  height: 240px;
`,y=n().div`
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({pos:e})=>e?s.w4.colors.danger:p};
`,$=n().ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 280px;
  overflow-y: auto;
`,v=n().li`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: ${s.w4.spacing.md};
  padding: 6px 8px;
  border-radius: ${s.w4.borderRadius.sm};
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  &:hover { background: ${s.w4.colors.sidebarHover}; }
`,k=n().button`
  background: transparent;
  border: none;
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 4px;
  border-radius: ${s.w4.borderRadius.sm};
  display: flex;
  align-items: center;
  &:hover { color: ${s.w4.colors.danger}; }
`;function M({data:e,t,onLogWeight:a,onDeleteWeight:i,onEditWeight:n}){let p=(0,r.useMemo)(()=>(0,d.weightForecast)(e.weights,90,30),[e.weights]),j=p.history.length?p.history[p.history.length-1]:null,z=e.goal.weightKg,T=7*p.slopePerDay,S=p.forecast.length?p.forecast[p.forecast.length-1]:null,F=[...e.weights].sort((e,t)=>t.date.localeCompare(e.date));return(0,o.jsxs)(h,{children:[(0,o.jsxs)(g,{children:[(0,o.jsxs)(f,{children:[(0,o.jsxs)(m,{children:["◉ ",t("forma.weight.title")]}),(0,o.jsx)(l.$n,{variant:"primary",icon:(0,o.jsx)(l.In,{name:"plus",size:14}),onClick:a,children:t("forma.action.logWeight")})]}),(0,o.jsxs)(x,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(u,{children:j?j.kg.toFixed(1):"—"}),(0,o.jsxs)(w,{children:[" kg ",t("forma.weight.now")]})]}),S&&(0,o.jsxs)("div",{children:[(0,o.jsx)(u,{style:{fontSize:18,color:s.w4.colors.mainTextMuted},children:S.kg.toFixed(1)}),(0,o.jsxs)(w,{children:[" kg ",t("forma.weight.in30")]})]}),void 0!==z&&(0,o.jsxs)("div",{children:[(0,o.jsx)(u,{style:{fontSize:18,color:s.w4.colors.accent},children:z.toFixed(1)}),(0,o.jsxs)(w,{children:[" kg ",t("forma.weight.target")]})]})]}),p.history.length>=2&&(0,o.jsxs)(y,{pos:T>0,children:[T>=0?"+":"",T.toFixed(2)," kg / ",t("forma.weight.perWeek")]}),(0,o.jsx)(b,{children:(0,o.jsx)(c.h,{forecast:p,axes:!0})})]}),(0,o.jsxs)(g,{children:[(0,o.jsxs)(m,{children:["◉ ",t("forma.weight.entries")]}),0===F.length?(0,o.jsx)(w,{style:{fontStyle:"italic"},children:t("forma.weight.empty")}):(0,o.jsx)($,{children:F.map(e=>(0,o.jsxs)(v,{onClick:n?()=>n(e.date):void 0,style:{cursor:n?"pointer":"default"},title:n?t("forma.action.edit"):void 0,children:[(0,o.jsx)("span",{children:e.date}),(0,o.jsxs)("span",{children:[e.kg.toFixed(1)," kg"]}),(0,o.jsx)(k,{onClick:t=>{t.stopPropagation(),i(e.date)},"aria-label":t("forma.action.delete"),children:(0,o.jsx)(l.In,{name:"trash",size:14})})]},e.date))})]})]})}},20948(e,t,a){a.d(t,{A:()=>o});let o={"forma.appTitle":{en:"Forma",pt:"Forma"},"forma.timer.elapsed":{en:"elapsed",pt:"decorrido"},"forma.timer.remaining":{en:"remaining",pt:"restantes"},"forma.timer.target":{en:"target",pt:"objetivo"},"forma.timer.complete":{en:"complete",pt:"completo"},"forma.timer.startedAt":{en:"started {time}",pt:"iniciado {time}"},"forma.timer.editStart":{en:"Edit start time",pt:"Editar hora de in\xedcio"},"forma.timer.editStartPrompt":{en:"New start time (YYYY-MM-DDTHH:MM):",pt:"Nova hora de in\xedcio (AAAA-MM-DDTHH:MM):"},"forma.today.title":{en:"Today",pt:"Hoje"},"forma.today.protein":{en:"protein",pt:"prote\xedna"},"forma.today.kcal":{en:"kcal",pt:"kcal"},"forma.today.walk":{en:"walking",pt:"caminhada"},"forma.today.noMealsYet":{en:"No meals logged yet today.",pt:"Ainda n\xe3o registaste refei\xe7\xf5es hoje."},"forma.today.walkSummary":{en:"{min} min walked today",pt:"{min} min caminhados hoje"},"forma.action.logMeal":{en:"Log meal",pt:"Registar refei\xe7\xe3o"},"forma.action.logWalk":{en:"Log walk",pt:"Registar caminhada"},"forma.action.logWeight":{en:"Log weight",pt:"Registar peso"},"forma.action.delete":{en:"Delete",pt:"Apagar"},"forma.action.promptSlot":{en:"Slot (lunch / dinner / snack):",pt:"Slot (lunch / dinner / snack):"},"forma.action.promptMealDesc":{en:"What did you eat?",pt:"O que comeste?"},"forma.action.promptProtein":{en:"Protein (g):",pt:"Prote\xedna (g):"},"forma.action.promptKcal":{en:"Calories (kcal):",pt:"Calorias (kcal):"},"forma.action.promptWalk":{en:"Minutes walked:",pt:"Minutos caminhados:"},"forma.action.promptWeight":{en:"Weight (kg):",pt:"Peso (kg):"},"forma.action.edit":{en:"Edit",pt:"Editar"},"forma.ask.title":{en:"Ask Forma",pt:"Pergunta \xe0 Forma"},"forma.ask.button":{en:"Get feedback",pt:"Pedir feedback"},"forma.ask.loading":{en:"Thinking…",pt:"A pensar…"},"forma.ask.hint":{en:"Get AI feedback on your meals, protein and recent activity.",pt:"Recebe feedback de IA sobre as tuas refei\xe7\xf5es, prote\xedna e atividade recente."},"forma.ask.noKey":{en:"No Groq API key configured. Add one in Settings.",pt:"Sem chave Groq configurada. Adiciona uma nas Defini\xe7\xf5es."},"forma.ask.error":{en:"Could not reach Groq. Try again.",pt:"N\xe3o foi poss\xedvel contactar o Groq. Tenta de novo."},"forma.ask.generatedAt":{en:"Generated",pt:"Gerado"},"forma.ask.regenerate":{en:"Refresh",pt:"Atualizar"},"forma.tabs.aria":{en:"Forma sections",pt:"Sec\xe7\xf5es Forma"},"forma.tab.today":{en:"Today",pt:"Hoje"},"forma.tab.fasting":{en:"Fasting",pt:"Jejum"},"forma.tab.weight":{en:"Weight",pt:"Peso"},"forma.tab.settings":{en:"Settings",pt:"Defini\xe7\xf5es"},"forma.miniFast.title":{en:"Fasting",pt:"Jejum"},"forma.miniFast.aria":{en:"Open fasting tab",pt:"Abrir separador jejum"},"forma.miniFast.noActive":{en:"Not fasting",pt:"Sem jejum"},"forma.miniWeight.title":{en:"Weight forecast",pt:"Previs\xe3o de peso"},"forma.miniWeight.aria":{en:"Open weight tab",pt:"Abrir separador peso"},"forma.weight.title":{en:"Weight",pt:"Peso"},"forma.weight.now":{en:"now",pt:"agora"},"forma.weight.in30":{en:"in 30d (projected)",pt:"em 30d (previsto)"},"forma.weight.target":{en:"target",pt:"objetivo"},"forma.weight.perWeek":{en:"week",pt:"semana"},"forma.weight.entries":{en:"Entries",pt:"Registos"},"forma.weight.empty":{en:"No weight entries yet.",pt:"Ainda sem registos de peso."},"forma.mealHeatmap.title":{en:"Meals by day & hour",pt:"Refei\xe7\xf5es por dia e hora"},"forma.settings.foodGoals":{en:"Food goals",pt:"Objetivos alimentares"},"forma.settings.fastingGoals":{en:"Fasting goals",pt:"Objetivos de jejum"},"forma.settings.proteinG":{en:"Daily protein (g)",pt:"Prote\xedna di\xe1ria (g)"},"forma.settings.kcal":{en:"Daily kcal",pt:"kcal di\xe1rias"},"forma.settings.walkMin":{en:"Daily walk (min)",pt:"Caminhada di\xe1ria (min)"},"forma.settings.weightTarget":{en:"Weight target (kg)",pt:"Peso-objetivo (kg)"},"forma.settings.targetHours":{en:"Default fast hours",pt:"Horas de jejum padr\xe3o"},"forma.settings.weeklyFasts":{en:"Fasts per week",pt:"Jejuns por semana"},"forma.settings.save":{en:"Save settings",pt:"Guardar"},"forma.settings.saved":{en:"Saved ✓",pt:"Guardado ✓"},"forma.grid.moveLeft":{en:"Move left",pt:"Mover para a esquerda"},"forma.grid.moveRight":{en:"Move right",pt:"Mover para a direita"},"forma.grid.resize":{en:"Resize ({size})",pt:"Redimensionar ({size})"},"forma.grid.hide":{en:"Hide card",pt:"Ocultar cart\xe3o"},"forma.grid.hiddenLabel":{en:"Hidden",pt:"Ocultos"},"forma.grid.card.mini-fast":{en:"Fasting",pt:"Jejum"},"forma.grid.card.mini-weight":{en:"Weight forecast",pt:"Previs\xe3o de peso"},"forma.grid.card.today":{en:"Today",pt:"Hoje"},"forma.grid.card.ask":{en:"Ask Forma",pt:"Pergunta \xe0 Forma"},"forma.grid.card.meal-heatmap":{en:"Meal heatmap",pt:"Mapa de refei\xe7\xf5es"},"forma.grid.card.week":{en:"Week plan",pt:"Plano semanal"},"forma.grid.card.stats":{en:"Stats",pt:"M\xe9tricas"},"forma.start":{en:"Start fast",pt:"Iniciar jejum"},"forma.stop":{en:"End fast",pt:"Terminar jejum"},"forma.log":{en:"Log",pt:"Registar"},"forma.protocol.16-8":{en:"16:8 — Leangains",pt:"16:8 — Leangains"},"forma.protocol.18-6":{en:"18:6 — Warrior Lite",pt:"18:6 — Guerreiro Leve"},"forma.protocol.20-4":{en:"20:4 — Warrior",pt:"20:4 — Guerreiro"},"forma.protocol.custom":{en:"Custom",pt:"Personalizado"},"forma.protocol.adherence":{en:"adherence",pt:"ader\xeancia"},"forma.streak":{en:"{n} day streak|day streak",pt:"{n} dia seguido|dias seguidos"},"forma.streak.none":{en:"No streak yet",pt:"Ainda sem sequ\xeancia"},"forma.adherence.weekly":{en:"This week",pt:"Esta semana"},"forma.adherence.fasts":{en:"{n} fast|fasts",pt:"{n} jejum|jejuns"},"forma.meal.lunch":{en:"Lunch",pt:"Almo\xe7o"},"forma.meal.dinner":{en:"Dinner",pt:"Jantar"},"forma.meal.snack":{en:"Snack",pt:"Lanche"},"forma.meal.protein":{en:"Protein",pt:"Prote\xedna"},"forma.meal.kcal":{en:"kcal",pt:"kcal"},"forma.meal.logged":{en:"Meal logged",pt:"Refei\xe7\xe3o registada"},"forma.meal.template":{en:"Template",pt:"Modelo"},"forma.weight.kg":{en:"kg",pt:"kg"},"forma.weight.logged":{en:"Weight logged",pt:"Peso registado"},"forma.weight.trend":{en:"7d trend",pt:"Tend\xeancia 7d"},"forma.weight.label":{en:"Weight",pt:"Peso"},"forma.walk.minutes":{en:"min",pt:"min"},"forma.walk.logged":{en:"Walk logged",pt:"Caminhada registada"},"forma.walk.label":{en:"Walk",pt:"Caminhada"},"forma.walk.consistency":{en:"consistency",pt:"consist\xeancia"},"forma.quickadd.placeholder":{en:'"dinner chicken", "walked 30", "weight 84.2", "fast 16"',pt:'"jantar frango", "caminhei 30", "peso 84.2", "jejum 16"'},"forma.quickadd.hint":{en:"Quick log",pt:"Registo r\xe1pido"},"forma.week.title":{en:"◉ WEEK",pt:"◉ SEMANA"},"forma.week.done":{en:"done",pt:"feito"},"forma.week.planned":{en:"planned",pt:"planeado"},"forma.week.noTemplate":{en:"Flexible",pt:"Livre"},"forma.week.tapToLog":{en:"Tap to log this meal",pt:"Toca para registar esta refei\xe7\xe3o"},"forma.sheet.title":{en:"◉ LOG",pt:"◉ REGISTAR"},"forma.sheet.ariaLabel":{en:"Log entry",pt:"Registar entrada"},"forma.sheet.fastSection":{en:"◉ FAST",pt:"◉ JEJUM"},"forma.sheet.mealSection":{en:"◉ MEAL",pt:"◉ REFEI\xc7\xc3O"},"forma.sheet.weightSection":{en:"◉ WEIGHT",pt:"◉ PESO"},"forma.sheet.walkSection":{en:"◉ WALK",pt:"◉ CAMINHADA"},"forma.sheet.logMeal":{en:"Log meal",pt:"Registar refei\xe7\xe3o"},"forma.sheet.logWeight":{en:"Log weight",pt:"Registar peso"},"forma.sheet.logWalk":{en:"Log walk",pt:"Registar caminhada"},"forma.sheet.minutesSuffix":{en:"min",pt:"min"},"forma.sheet.proteinLabel":{en:"Protein (g)",pt:"Prote\xedna (g)"},"forma.sheet.kcalLabel":{en:"kcal",pt:"kcal"},"forma.sheet.weightLabel":{en:"Weight (kg)",pt:"Peso (kg)"},"forma.sheet.walkLabel":{en:"Duration (min)",pt:"Dura\xe7\xe3o (min)"},"forma.sheet.save":{en:"Save",pt:"Guardar"},"forma.sheet.saveEdit":{en:"Save changes",pt:"Guardar altera\xe7\xf5es"},"forma.sheet.cancel":{en:"Cancel",pt:"Cancelar"},"forma.sheet.dateLabel":{en:"Date",pt:"Data"},"forma.sheet.titleAddMeal":{en:"◉ LOG MEAL",pt:"◉ NOVA REFEI\xc7\xc3O"},"forma.sheet.titleAddWeight":{en:"◉ LOG WEIGHT",pt:"◉ NOVO PESO"},"forma.sheet.titleAddWalk":{en:"◉ LOG WALK",pt:"◉ NOVA CAMINHADA"},"forma.sheet.titleEditMeal":{en:"◉ EDIT MEAL",pt:"◉ EDITAR REFEI\xc7\xc3O"},"forma.sheet.titleEditWeight":{en:"◉ EDIT WEIGHT",pt:"◉ EDITAR PESO"},"forma.sheet.titleEditWalk":{en:"◉ EDIT WALK",pt:"◉ EDITAR CAMINHADA"},"forma.sheet.logPastFast":{en:"Log past fast",pt:"Registar jejum passado"},"forma.sheet.titleAddFast":{en:"◉ LOG PAST FAST",pt:"◉ NOVO JEJUM PASSADO"},"forma.sheet.titleEditFast":{en:"◉ EDIT FAST",pt:"◉ EDITAR JEJUM"},"forma.sheet.fastStartLabel":{en:"Started at",pt:"In\xedcio"},"forma.sheet.fastEndLabel":{en:"Ended at",pt:"Fim"},"forma.sheet.fastEndHint":{en:"Leave empty if still in progress",pt:"Deixa vazio se ainda em curso"},"forma.sheet.fastTargetLabel":{en:"Target (h)",pt:"Objetivo (h)"},"forma.sheet.fastInvalidRange":{en:"End must be after start.",pt:"O fim tem de ser depois do in\xedcio."},"forma.rail.title":{en:"◉ PROTOCOL",pt:"◉ PROTOCOLO"},"forma.rail.hours":{en:"{n}h fast",pt:"Jejum de {n}h"},"forma.rail.window":{en:"{n}h window",pt:"Janela de {n}h"},"forma.hero.notFasting":{en:"Not fasting",pt:"Sem jejum activo"},"forma.hero.inProgress":{en:"In progress",pt:"Em progresso"},"forma.hero.completed":{en:"Completed",pt:"Conclu\xeddo"},"forma.hero.avgDuration":{en:"Avg duration",pt:"Dura\xe7\xe3o m\xe9dia"},"forma.empty.firstFast":{en:"Start your first fast",pt:"Inicia o teu primeiro jejum"},"forma.empty.noMeals":{en:"No meals logged today",pt:"Sem refei\xe7\xf5es hoje"},"forma.empty.noWeight":{en:"No weight logged",pt:"Sem peso registado"},"forma.error.load":{en:"Failed to load data",pt:"Erro ao carregar dados"},"forma.tab.activities":{en:"Activities",pt:"Atividades"},"forma.activities.empty":{en:"No activities yet",pt:"Sem atividades ainda"},"forma.activities.edit":{en:"Edit entry",pt:"Editar entrada"},"forma.activities.delete":{en:"Delete entry",pt:"Apagar entrada"},"forma.activities.protein":{en:"protein",pt:"prote\xedna"},"forma.activities.fast.completed":{en:"Fast completed",pt:"Jejum conclu\xeddo"},"forma.activities.fast.inProgress":{en:"Fast in progress",pt:"Jejum em curso"},"forma.activities.fast.target":{en:"target",pt:"objetivo"},"forma.activities.weight.entry":{en:"Weight log",pt:"Registo de peso"},"forma.activities.walk.entry":{en:"Walk",pt:"Caminhada"},"forma.activities.filter.all":{en:"All",pt:"Todas"},"forma.activities.filter.fast":{en:"Fast",pt:"Jejum"},"forma.activities.filter.meal":{en:"Food",pt:"Comida"},"forma.activities.filter.weight":{en:"Weight",pt:"Peso"},"forma.activities.filter.walk":{en:"Walk",pt:"Caminhada"},"forma.activities.range.month":{en:"Last month",pt:"\xdaltimo m\xeas"},"forma.activities.range.3m":{en:"Last 3 months",pt:"\xdaltimos 3 meses"},"forma.activities.range.6m":{en:"Last 6 months",pt:"\xdaltimos 6 meses"},"forma.activities.range.year":{en:"Last year",pt:"\xdaltimo ano"},"forma.activities.range.all":{en:"All time",pt:"Tudo"},"forma.activities.confirmDelete.fast":{en:"Delete this fast session?",pt:"Apagar este jejum?"},"forma.activities.confirmDelete.meal":{en:"Delete this meal entry?",pt:"Apagar esta refei\xe7\xe3o?"},"forma.activities.confirmDelete.weight":{en:"Delete this weight entry?",pt:"Apagar este registo de peso?"},"forma.activities.confirmDelete.walk":{en:"Delete this walk entry?",pt:"Apagar esta caminhada?"},"forma.tab.analytics":{en:"Analytics",pt:"An\xe1lise"},"forma.analytics.empty":{en:"No data yet",pt:"Sem dados ainda"},"forma.analytics.heatmap.title":{en:"90-day fasting",pt:"Jejum 90 dias"},"forma.analytics.heatmap.none":{en:"none",pt:"nenhum"},"forma.analytics.weight.title":{en:"Weight trend",pt:"Tend\xeancia de peso"},"forma.analytics.weight.delta":{en:"60-day EMA trend",pt:"Tend\xeancia EMA 60 dias"},"forma.analytics.protein.title":{en:"Today's protein",pt:"Prote\xedna de hoje"},"forma.analytics.protein.target":{en:"target",pt:"objetivo"},"forma.analytics.protein.remaining":{en:"remaining",pt:"restantes"},"forma.analytics.protein.achieved":{en:"Target reached ✓",pt:"Objetivo atingido ✓"},"forma.analytics.weekly.title":{en:"Weekly protein (6w)",pt:"Prote\xedna semanal (6s)"},"forma.analytics.fastTimes.title":{en:"When I fast",pt:"Quando jejuo"},"forma.grid.card.fast-heatmap":{en:"90-day fasting",pt:"Jejum 90 dias"},"forma.grid.card.weight-trend":{en:"Weight trend",pt:"Tend\xeancia de peso"},"forma.grid.card.protein-burn":{en:"Today's protein",pt:"Prote\xedna de hoje"},"forma.grid.card.weekly-protein":{en:"Weekly protein",pt:"Prote\xedna semanal"},"forma.grid.card.fast-times":{en:"When I fast",pt:"Quando jejuo"},"forma.grid.card.insights":{en:"Insights",pt:"Insights"},"forma.insights.title":{en:"Insights",pt:"Insights"},"forma.insights.empty":{en:"Log a fast, meal or weight to see insights.",pt:"Regista um jejum, refei\xe7\xe3o ou peso para veres insights."},"forma.insights.weeklyFasts.up.title":{en:"Strong week",pt:"Boa semana"},"forma.insights.weeklyFasts.up.body":{en:"{done}/{target} fasts — {delta} vs last week",pt:"{done}/{target} jejuns — {delta} vs semana passada"},"forma.insights.weeklyFasts.down.title":{en:"Slower week",pt:"Semana mais fraca"},"forma.insights.weeklyFasts.down.body":{en:"{done}/{target} fasts — {delta} vs last week",pt:"{done}/{target} jejuns — {delta} vs semana passada"},"forma.insights.weeklyFasts.steady.title":{en:"Steady week",pt:"Semana est\xe1vel"},"forma.insights.weeklyFasts.steady.body":{en:"{done}/{target} fasts — same as last week",pt:"{done}/{target} jejuns — igual \xe0 semana passada"},"forma.insights.protein.short.title":{en:"Protein below target",pt:"Prote\xedna abaixo do alvo"},"forma.insights.protein.short.body":{en:"Avg {avg} g — {delta} g below {target} g/day",pt:"M\xe9dia {avg} g — {delta} g abaixo de {target} g/dia"},"forma.insights.protein.over.title":{en:"Above protein target",pt:"Acima do alvo de prote\xedna"},"forma.insights.protein.over.body":{en:"Avg {avg} g — {delta} g over {target} g/day",pt:"M\xe9dia {avg} g — {delta} g acima de {target} g/dia"},"forma.insights.protein.onTarget.title":{en:"Protein on track",pt:"Prote\xedna no caminho"},"forma.insights.protein.onTarget.body":{en:"Avg {avg} g — close to {target} g/day",pt:"M\xe9dia {avg} g — perto de {target} g/dia"},"forma.insights.weight.down.title":{en:"Trending down",pt:"Em descida"},"forma.insights.weight.down.body":{en:"7-day EMA {delta} kg",pt:"EMA 7 dias {delta} kg"},"forma.insights.weight.up.title":{en:"Trending up",pt:"Em subida"},"forma.insights.weight.up.body":{en:"7-day EMA {delta} kg",pt:"EMA 7 dias {delta} kg"},"forma.insights.weight.flat.title":{en:"Weight steady",pt:"Peso est\xe1vel"},"forma.insights.weight.flat.body":{en:"7-day EMA {delta} kg",pt:"EMA 7 dias {delta} kg"},"forma.insights.walks.consistent.title":{en:"Walks on track",pt:"Caminhadas em dia"},"forma.insights.walks.consistent.body":{en:"{done}/{target} days this week",pt:"{done}/{target} dias esta semana"},"forma.insights.walks.partial.title":{en:"Walks — keep going",pt:"Caminhadas — continua"},"forma.insights.walks.partial.body":{en:"{done}/{target} days this week",pt:"{done}/{target} dias esta semana"},"forma.insights.walks.inconsistent.title":{en:"Walks slipping",pt:"Caminhadas a falhar"},"forma.insights.walks.inconsistent.body":{en:"Only {done}/{target} days this week",pt:"S\xf3 {done}/{target} dias esta semana"},"forma.insights.dayOfWeek.strong.title":{en:"Strongest day",pt:"Dia mais forte"},"forma.insights.dayOfWeek.strong.body":{en:"{day} — {count} fasts in 8 weeks",pt:"{day} — {count} jejuns em 8 semanas"},"forma.day.sun":{en:"Sunday",pt:"Domingo"},"forma.day.mon":{en:"Monday",pt:"Segunda"},"forma.day.tue":{en:"Tuesday",pt:"Ter\xe7a"},"forma.day.wed":{en:"Wednesday",pt:"Quarta"},"forma.day.thu":{en:"Thursday",pt:"Quinta"},"forma.day.fri":{en:"Friday",pt:"Sexta"},"forma.day.sat":{en:"Saturday",pt:"S\xe1bado"},"forma.template.monEggs":{en:"Eggs",pt:"Ovos"},"forma.template.tueBeef":{en:"Beef",pt:"Novilho"},"forma.template.wedEggsWhites":{en:"Eggs + Whites",pt:"Ovos + Claras"},"forma.template.thuChicken":{en:"Chicken",pt:"Frango"},"forma.template.friOmelette":{en:"Omelette",pt:"Omelete"},"forma.template.satMeatFish":{en:"Meat / Fish",pt:"Carne / Peixe"},"forma.template.sunFlexible":{en:"Flexible",pt:"Livre"}}},28170(e,t,a){a.d(t,{Ym:()=>c,Nx:()=>p});var o=a(37991),r=a(6063);let i={"time.justNow":{en:"just now",pt:"agora mesmo"},"time.mAgo":{en:"{n}m ago",pt:"h\xe1 {n}m"},"time.hAgo":{en:"{n}h ago",pt:"h\xe1 {n}h"},"time.dAgo":{en:"{n}d ago",pt:"h\xe1 {n}d"},updated:{en:"updated {age}",pt:"atualizado {age}"},refresh:{en:"Refresh",pt:"Atualizar"},loading:{en:"Loading…",pt:"A carregar…"},noData:{en:"No data available",pt:"Sem dados dispon\xedveis"},noDescription:{en:"No description provided.",pt:"Sem descri\xe7\xe3o."},failedToFetch:{en:"Failed to fetch",pt:"Erro ao carregar"},perWeek:{en:"/ wk",pt:"/ sem"},"devtools.heading":{en:"Dev Tools",pt:"Ferramentas"},"devtools.playground":{en:"Playground",pt:"Playground"},"devtools.pad":{en:"Pad",pt:"Pad"},"devtools.charts":{en:"Charts",pt:"Gr\xe1ficos"},"devtools.csv":{en:"CSV",pt:"CSV"},"devtools.regex":{en:"Regex",pt:"Regex"},"devtools.json":{en:"JSON",pt:"JSON"},"devtools.diff":{en:"Diff",pt:"Diferen\xe7as"},"devtools.jwt":{en:"JWT",pt:"JWT"},"devtools.cron":{en:"Cron",pt:"Cron"},"devtools.colors":{en:"Colors",pt:"Cores"},"devtools.api":{en:"API",pt:"API"}},n="atlantis:locale",s="shell:locale";function l(e){return"en"===e||"pt"===e}function d(){try{let e=localStorage.getItem(n);if(l(e))return e}catch{}return"en"}function c(){let[e,t]=(0,o.useState)(d),a=(0,o.useCallback)(e=>{t(e);try{localStorage.setItem(n,e)}catch{}(0,r.Is)(s,e).catch(()=>{}),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,o.useEffect)(()=>{let e=e=>{t(e.detail)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,o.useEffect)(()=>{(0,r.PL)(s).then(a=>{if(l(a)&&a!==e){try{localStorage.setItem(n,a)}catch{}t(a)}}).catch(()=>{})},[]),[e,a]}function p(e,t){let a=t?{...i,...t}:i;return(t,o)=>{let r=function(e,t){if(!t||!e.includes("|"))return e;let a=null;for(let e of Object.values(t))if("number"==typeof e&&Number.isFinite(e)){a=e;break}if(null===a)return e;let o=e.indexOf("|"),r=e.slice(0,o),i=e.slice(o+1);return 1===a?r:i}(a[t]?.[e]??t,o);return o?Object.entries(o).reduce((e,[t,a])=>e.replace(RegExp(`\\{${t}\\}`,"g"),String(a)),r):r}}(0,r.PL)(s).then(e=>{if(l(e))try{localStorage.setItem(n,e)}catch{}}).catch(()=>{}),a(65723);var h=a(36859),g=a.n(h);g().div`
  display: flex;
  gap: 4px;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: 2px;
`,g().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${r.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${r.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?r.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":r.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":r.w4.colors.mainText};
  }
`},45816(e,t,a){a.d(t,{FlyoutPanel:()=>b});var o=a(65723),r=a(37991),i=a.n(r),n=a(36859),s=a.n(n),l=a(72799),d=a(6063),c=a(37993);let p={activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"a-large-small":'<path d="M18 14v7M22 14l-4-7-4 7M2 14h7M2 21V7l5-4 5 4v14"/>',apple:'<path d="M12 20.9A9 9 0 1 1 19 6.5a4.9 4.9 0 0 0 2 5.4 8.9 8.9 0 0 1-9 9z"/><path d="M12 6a2 2 0 0 0 2-2 2 2 0 0 0-2-2"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"bar-chart-2":'<path d="M3 3v18h18"/><path d="M5 18V10M10 18V4M15 18v-7"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"circle-dot":'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2 6.3-6.4 2 2-6.3z"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',"file-text":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5 2.2 5 2.2a5 5 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.5 9.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.4V22"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',hand:'<path d="M18 11V5a2 2 0 1 0-4 0v3a2 2 0 1 0-4 0V5a2 2 0 1 0-4 0v8l-2-3a2 2 0 1 0-3 2l4 7a6 6 0 0 0 6 4h2a6 6 0 0 0 6-6v-3a2 2 0 1 0-4 0z"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',landmark:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 11h20z"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',"layout-grid":'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',map:'<path d="M9 3 3 7v14l6-4 6 4 6-4V3l-6 4z"/><path d="M9 3v14M15 7v14"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"message-circle":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',minus:'<path d="M5 12h14"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',"pen-tool":'<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="M18 13 16.5 5.5 2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2 9.6 9.6"/><circle cx="11" cy="11" r="2"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',plus:'<path d="M12 5v14M5 12h14"/>',puzzle:'<path d="M19.4 14.4a1 1 0 0 0 .6-.9V8a1 1 0 0 0-1-1h-5.5a1 1 0 0 1-.9-.6 2 2 0 1 0-2 2 2.5 2.5 0 0 1 0 3 2 2 0 1 0 2 2 1 1 0 0 1 .9-.6h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 .6-.9 2 2 0 1 0-1.2 0z"/>',ruler:'<path d="M5 3l16 16-3 3L2 6zM8 6l3 3M11 9l3 3M14 12l3 3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>',slash:'<line x1="22" y1="2" x2="2" y2="22"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',triangle:'<path d="M3 20h18L12 4z"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',truck:'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',"volume-2":'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',watch:'<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5M8.2 5.5l.8-2.5h6l.8 2.5M15.8 18.5l-.8 2.5H9l-.8-2.5"/>',waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',bot:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M8 15h.01M16 15h.01M12 17h.01"/>'},h=(0,l.keyframes)`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,g=s().div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.accentMuted};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${d.w4.colors.borderSubtle},
    0 16px 48px rgba(0, 0, 0, 0.55);
  min-width: 210px;
  overflow-y: auto;
  animation: ${h} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  backdrop-filter: blur(12px);

  /* Left connector line */
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 2px;
    background: ${d.w4.colors.accent};
    opacity: 0.4;
  }
`,f=s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${d.w4.colors.accent};
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
  font-family: ${d.w4.typography.fontFamily};
`,m=s().button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?d.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.sidebarText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${d.w4.colors.accentMuted};
    color: ${d.w4.colors.mainText};
  }
`,x=({size:e=14,strokeWidth:t=1.75})=>(0,o.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,o.jsx)("polyline",{points:"14 2 14 8 20 8"})]});function u({iconKey:e}){let t=e?p[e]:void 0;return t?(0,o.jsx)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,dangerouslySetInnerHTML:{__html:t}}):(0,o.jsx)(x,{})}function w({entries:e,activeId:t,onSelect:a}){return(0,o.jsx)(o.Fragment,{children:e.map(e=>e.children?(0,o.jsx)(i().Fragment,{children:(0,o.jsx)(w,{entries:e.children,activeId:t,onSelect:a})},e.id):(0,o.jsxs)(m,{active:t===e.id,onClick:()=>a(e),children:[(0,o.jsx)(u,{iconKey:e.icon}),e.name]},e.id))})}function b({activeId:e}){let{flyout:t,scheduleFlyoutClose:a,cancelFlyoutClose:r}=(0,c.c)();if(!t)return null;let i=t.entry.icon?p[t.entry.icon]:void 0;return(0,o.jsxs)(g,{anchorY:t.anchorY,onMouseEnter:r,onMouseLeave:a,children:[(0,o.jsxs)(f,{children:[i?(0,o.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,dangerouslySetInnerHTML:{__html:i}}):(0,o.jsx)(x,{size:13,strokeWidth:2}),t.entry.name]}),(0,o.jsx)(w,{entries:t.entry.children??[],activeId:e,onSelect:e=>{t.onSelect(e),a()}})]})}},37993(e,t,a){a.d(t,{I:()=>r,c:()=>i});var o=a(37991);let r=(0,o.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,o.useContext)(r)},80884(e,t,a){a.d(t,{vu:()=>R,Ex:()=>E,$n:()=>w,YZ:()=>O,n6:()=>k,In:()=>M,rl:()=>J,mQ:()=>eG,PE:()=>tp,eu:()=>C});var o=a(65723),r=a(37991),i=a.n(r),n=a(36859),s=a.n(n),l=a(6063);let d={ghost:"transparent",accent:"transparent",primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},c={ghost:l.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:l.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},p={ghost:l.w4.colors.border,accent:l.w4.colors.accent,primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},h={ghost:l.w4.colors.mainTextMuted,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},g={ghost:l.w4.colors.mainText,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},f={sm:"28px",md:"30px"},m={sm:"0 10px",md:"0 12px"},x={sm:"12px",md:"12px"},u=s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>f[e]};
  padding: ${({size:e})=>m[e]};
  background: ${({variant:e})=>d[e]};
  border: 1px solid ${({variant:e})=>p[e]};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({variant:e})=>h[e]};
  font-size: ${({size:e})=>x[e]};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>c[e]};
    color: ${({variant:e})=>g[e]};
    border-color: ${({variant:e})=>"ghost"===e?l.w4.colors.accent:p[e]};
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,w=i().forwardRef(function({variant:e="ghost",size:t="md",icon:a,iconRight:r,children:i,...n},s){return(0,o.jsxs)(u,{ref:s,variant:e,size:t,...n,children:[a,i,r]})}),b={default:l.w4.colors.accent,danger:"#f85149"},y={default:l.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"};s().button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: ${({active:e})=>e?`${l.w4.colors.accent}22`:"transparent"};
  border: 1px solid
    ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${({shape:e})=>"circle"===e?"999px":l.w4.borderRadius.sm};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  /**
   * Expand the tap area to ≥44×44px on touch devices without changing the
   * visual size of the button. The pseudo-element extends 7px on each side
   * ((44 - 30) / 2 = 7). Pointer-events fall through to the button itself.
   * Only applied on coarse-pointer (touch) devices so desktop hover still
   * works on the visual 30px area.
   */
  @media (pointer: coarse) {
    &::before {
      content: '';
      position: absolute;
      inset: -7px;
    }
  }

  &:hover:not(:disabled) {
    color: ${({tone:e})=>b[e]};
    background: ${({tone:e})=>y[e]};
    border-color: ${({tone:e})=>b[e]};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,s().div`
  position: relative;
  display: inline-flex;
`,s().div`
  position: absolute;
  top: calc(100% + 6px);
  ${({align:e})=>"right"===e?"right: 0;":"left: 0;"}
  min-width: 180px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,s().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: none;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeSm};
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: -2px;
  }
`,s().div`
  height: 1px;
  margin: 4px 0;
  background: ${l.w4.colors.sidebarBorder};
`,s().div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`,s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,s().span`
  width: 1px;
  height: 20px;
  background: ${l.w4.colors.border};
  flex-shrink: 0;
`,s().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,s()("button",{shouldForwardProp:e=>"active"!==e&&"highlight"!==e})`
  padding: 6px 14px;
  height: 28px;
  border-radius: 999px;
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  border: 1px solid
    ${({active:e,highlight:t})=>e||t?l.w4.colors.accent:"transparent"};
  color: ${({active:e,highlight:t})=>e||t?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: ${l.w4.transitions.fast};

  &:hover:not(:disabled) { color: ${l.w4.colors.mainText}; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${l.w4.focusRing} }
`,a(62727);var $=a(72799);let v={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',"cloud-rain":'<path d="M16 14a5 5 0 1 0-9.8 2H6M8 19v2M12 17v4M16 19v2"/>',snowflake:'<path d="M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1M2 12h20M8 6l4 4 4-4M8 18l4-4 4 4"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"alert-triangle":'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',"check-circle":'<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>',"x-circle":'<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',"rotate-ccw":'<path d="M2 12a10 10 0 1 0 5-8.7L2 7M2 2v5h5"/>',"rotate-cw":'<path d="M22 12a10 10 0 1 1-5-8.7L22 7M22 2v5h-5"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"alert-circle":'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',"alert-octagon":'<path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"/><path d="M12 8v4M12 16h.01"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',columns:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',"eye-off":'<path d="M17.9 17.9A10.8 10.8 0 0 1 12 20c-7 0-11-8-11-8a19.6 19.6 0 0 1 5.1-6M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a19.6 19.6 0 0 1-2.2 3.2M6.6 6.6l10.8 10.8M14.1 14.1a3 3 0 1 1-4.2-4.2"/>',"file-plus":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M12 12v6M9 15h6"/>',gauge:'<path d="M12 14a2 2 0 1 0-2-2M12 2a10 10 0 1 0 10 10M12 14 7.5 16.5"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',"git-fork":'<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/>',"grip-vertical":'<circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',"image-plus":'<path d="M21 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21M19 2v6M22 5h-6"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',loader:'<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',"panel-left":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',"panel-left-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M16 15l-3-3 3-3"/>',"panel-left-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M14 9l3 3-3 3"/>',"panel-right-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M8 9l3 3-3 3"/>',"panel-right-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M10 15l-3-3 3-3"/>',pencil:'<path d="m12 20 9-9-4-4-9 9v4zM15 5l4 4"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M4.9 19.1a10 10 0 0 1 0-14.1M7.8 16.2a6 6 0 0 1 0-8.5M19.1 4.9a10 10 0 0 1 0 14.1M16.2 7.8a6 6 0 0 1 0 8.5"/>',"scatter-chart":'<circle cx="7.5" cy="7.5" r="0.8" fill="currentColor"/><circle cx="18" cy="5" r="0.8" fill="currentColor"/><circle cx="11" cy="11" r="0.8" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.8" fill="currentColor"/><circle cx="17" cy="14" r="0.8" fill="currentColor"/><path d="M3 3v18h18"/>',shield:'<path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"/>',"shield-off":'<path d="M19.7 14a7.7 7.7 0 0 0 .3-2V4l-8-2-3.4.9M4.7 4.7 4 5v7c0 6 8 10 8 10a13 13 0 0 0 5.2-3.5M2 2l20 20"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',"trending-down":'<path d="M22 17l-9.5-9.5-5 5L2 7"/><path d="M16 17h6v-6"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',"user-cog":'<circle cx="10" cy="8" r="4"/><path d="M10.2 14H8a4 4 0 0 0-4 4v2"/><circle cx="18" cy="15" r="3"/><path d="M18 10v1M18 19v1M22 12l-.8.5M14.8 17.5 14 18M22 18l-.8-.5M14.8 12.5 14 12"/>',volume:'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',car:'<path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h12l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2M5 17l1 3h12l1-3M5 17h14"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>',"shopping-bag":'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>',wifi:'<path d="M5 12.6A10 10 0 0 1 19 12.6M1.5 8.9a15 15 0 0 1 21 0M8.5 16.5a5 5 0 0 1 7 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/>',wallet:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18M16 14h2"/>',receipt:'<path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21z"/><path d="M8 8h8M8 12h8M8 16h5"/>',"piggy-bank":'<path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/><path d="M19 9h2v4M14 7V5a2 2 0 0 0-4 0M16 11h.01M5 17v3M14 17v3"/>',banknote:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M5 9h.01M19 15h.01"/>',coins:'<circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/><path d="M9 6v6M7 9h4"/>',"line-chart":'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',"calendar-range":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 15h3M13 15h3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"refresh-ccw":'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',"refresh-cw":'<path d="M21 12a9 9 0 0 0-15-6.7L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15 6.7L21 16"/><path d="M21 21v-5h-5"/>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',split:'<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 3 12 12 3 3"/><path d="M12 12v9"/>',"more-horizontal":'<circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>',"a-large-small":'<path d="M18 14v7M22 14l-4-7-4 7M2 14h7M2 21V7l5-4 5 4v14"/>',apple:'<path d="M12 20.9A9 9 0 1 1 19 6.5a4.9 4.9 0 0 0 2 5.4 8.9 8.9 0 0 1-9 9z"/><path d="M12 6a2 2 0 0 0 2-2 2 2 0 0 0-2-2"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',"circle-dot":'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2 6.3-6.4 2 2-6.3z"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',"file-text":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5 2.2 5 2.2a5 5 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.5 9.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.4V22"/>',hand:'<path d="M18 11V5a2 2 0 1 0-4 0v3a2 2 0 1 0-4 0V5a2 2 0 1 0-4 0v8l-2-3a2 2 0 1 0-3 2l4 7a6 6 0 0 0 6 4h2a6 6 0 0 0 6-6v-3a2 2 0 1 0-4 0z"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/>',landmark:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 11h20z"/>',"layout-grid":'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',map:'<path d="M9 3 3 7v14l6-4 6 4 6-4V3l-6 4z"/><path d="M9 3v14M15 7v14"/>',"message-circle":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',"pen-tool":'<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="M18 13 16.5 5.5 2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2 9.6 9.6"/><circle cx="11" cy="11" r="2"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',puzzle:'<path d="M19.4 14.4a1 1 0 0 0 .6-.9V8a1 1 0 0 0-1-1h-5.5a1 1 0 0 1-.9-.6 2 2 0 1 0-2 2 2.5 2.5 0 0 1 0 3 2 2 0 1 0 2 2 1 1 0 0 1 .9-.6h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 .6-.9 2 2 0 1 0-1.2 0z"/>',ruler:'<path d="M5 3l16 16-3 3L2 6zM8 6l3 3M11 9l3 3M14 12l3 3"/>',slash:'<line x1="22" y1="2" x2="2" y2="22"/>',triangle:'<path d="M3 20h18L12 4z"/>',truck:'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',"volume-2":'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7"/>',watch:'<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5M8.2 5.5l.8-2.5h6l.8 2.5M15.8 18.5l-.8 2.5H9l-.8-2.5"/>',waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',bot:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M8 15h.01M16 15h.01M12 17h.01"/>',"bar-chart-2":'<path d="M3 3v18h18"/><path d="M5 18V10M10 18V4M15 18v-7"/>'};function k(e){return Object.prototype.hasOwnProperty.call(v,e)}function M({name:e,size:t=18,strokeWidth:a=1.5,...r}){let i=v[e];return(0,o.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!r["aria-label"]||void 0,...r,dangerouslySetInnerHTML:{__html:i}})}Object.keys(v);let j=s().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  border: ${({ring:e})=>e?`1px solid ${l.w4.colors.border}`:"none"};
  flex-shrink: 0;
  overflow: hidden;
  user-select: none;
`,z=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: ${({fontSize:e})=>e}px;
  font-weight: 700;
  color: ${l.w4.colors.mainBg};
  line-height: 1;
  letter-spacing: 0;
`,T=["#3b82f6","#8b5cf6","#ec4899","#10b981","#f59e0b","#06b6d4"],S=0,F=new Map;function C({member:e,size:t=24}){var a,r;let i,n="shared"===e.id||"shared"===e.role,s=Math.floor(.55*t),d=t<=18?8:t<=22?9:t<=28?11:12;if(n)return(0,o.jsx)(j,{size:t,bg:l.w4.colors.surface,ring:!0,"aria-label":"Shared",title:"Shared",style:{color:l.w4.colors.mainTextMuted},children:(0,o.jsx)(M,{name:"home",size:s,"aria-hidden":!0})});let c=(a=e.id,(r=e.color)?r:(!F.has(a)&&(F.set(a,T[S%T.length]),S++),F.get(a))),p="adult"===e.role,h=(i=e.name.trim().split(/\s+/),((i[0]?.[0]??"")+(i[1]?.[0]??"")).toUpperCase().slice(0,2));return(0,o.jsx)(j,{size:t,bg:c,ring:p,title:e.name,children:(0,o.jsx)(z,{fontSize:d,children:h})})}s().img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,s().div`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${l.w4.colors.accentMuted};
  border: 1px solid ${l.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 700;
  color: ${l.w4.colors.accent};
  flex-shrink: 0;
  /* Font scales with size: 26px → 12px, 40px → 18px */
  font-size: ${({size:e})=>Math.round(.46*e)}px;
`;let A=(0,$.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;s().div`
  position: relative;
`,s().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px 4px 4px;
  background: none;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: border-color ${l.w4.transitions.fast}, background ${l.w4.transitions.fast};
  &:hover {
    border-color: ${l.w4.colors.accent};
    background: ${l.w4.colors.sidebarHover};
  }

  /* With DisplayName hidden on mobile the pill becomes an oval — pad
     equally and drop the gap so the wrapper is a true circle. */
  @media (max-width: ${l.w4.breakpoints.md}) {
    padding: 4px;
    gap: 0;
  }
`,s().span`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,s().div`
  position: fixed;
  min-width: 240px;
  background: ${l.w4.colors.surfaceRaised};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${A} 0.15s ease;
  backdrop-filter: blur(12px);

  @media (max-width: ${l.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    max-height: calc(100dvh - env(safe-area-inset-top, 0px) - 96px);
    overflow-y: auto;
  }
`,s().div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${l.w4.colors.border};
`,s().div`
  margin-bottom: 10px;
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,s().div`
  padding: 12px 16px 10px;
  border-bottom: 1px solid ${l.w4.colors.borderSubtle};
`,s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextFaint};
  margin-bottom: 6px;
`,s().div`
  display: flex;
  gap: 4px;
  padding: 3px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.borderSubtle};
  border-radius: ${l.w4.borderRadius.md};
`,s().button`
  flex: 1;
  padding: 6px 10px;
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: ${({active:e})=>e?600:500};
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  &:hover {
    color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainText};
    background: ${({active:e})=>e?l.w4.colors.accentMuted:l.w4.colors.sidebarHover};
  }
`,s().button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${l.w4.colors.mainTextMuted};
  transition: background 0.12s, color 0.12s;
  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${({danger:e})=>e?"#e05252":l.w4.colors.mainText};
  }
`,a(28170),s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};

  @media (max-width: ${l.w4.breakpoints.md}) {
    gap: ${l.w4.spacing.xs};

    .header-kbd { display: none; }
    .header-hide-md { display: none; }
  }
`,s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 999px;
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.accent};
    border-color: ${l.w4.colors.accent};
    background: ${l.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,s().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  min-width: 180px;
  padding: 0 6px 0 12px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.borderStrong};
  border-radius: 999px;
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast}, box-shadow ${l.w4.transitions.fast};
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);

  .label {
    flex: 1;
    text-align: left;
    color: ${l.w4.colors.mainTextMuted};
    font-weight: 500;
    letter-spacing: -0.1px;
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    min-width: 0;
    padding: 0 12px;
    .label { display: none; }
  }

  .kbd {
    display: inline-flex;
    align-items: center;
    gap: 1px;
    padding: 2px 6px;
    border-radius: 6px;
    background: ${l.w4.colors.sidebarHover};
    border: 1px solid ${l.w4.colors.borderSubtle};
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    color: ${l.w4.colors.mainTextMuted};
    letter-spacing: 0.04em;
    transition: color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, background ${l.w4.transitions.fast};
  }

  &:hover {
    border-color: ${l.w4.colors.accent};
    background: ${l.w4.colors.surfaceRaised};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  }
  &:hover .label { color: ${l.w4.colors.mainText}; }
  &:hover .kbd {
    color: ${l.w4.colors.accent};
    border-color: ${l.w4.colors.accent}55;
    background: ${l.w4.colors.surface};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,s().div`
  position: relative;
  display: inline-flex;
`,s().span`
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: #ff6fa9;
  border: 2px solid ${l.w4.colors.mainBg};
  color: #fff;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0;
  pointer-events: none;
`,s().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  background: ${l.w4.colors.accent};
  border: 1px solid ${l.w4.colors.accent};
  border-radius: 999px;
  color: #fff;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};
  white-space: nowrap;

  &:hover {
    background: ${l.w4.colors.accentHover};
    border-color: ${l.w4.colors.accentHover};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,s().div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 900;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  ${({forceVisible:e})=>e?"":"@media (hover: hover) and (pointer: fine) { display: none; }"}
`,s().div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 45%;
  height: 60%;
  pointer-events: auto;
  touch-action: none;
`,s().div`
  position: absolute;
  left: ${({left:e})=>e}px;
  top: ${({top:e})=>e}px;
  width: ${120}px;
  height: ${120}px;
  margin-left: -${60}px;
  margin-top: -${60}px;
  border-radius: 50%;
  background: rgba(13, 17, 23, 0.55);
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
  pointer-events: none;
  opacity: ${({active:e})=>e?1:.9};
  transition: opacity ${l.w4.transitions.fast};
`,s().div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${54}px;
  height: ${54}px;
  margin-left: -${27}px;
  margin-top: -${27}px;
  border-radius: 50%;
  background: ${l.w4.colors.accent};
  border: 2px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.45);
  transform: translate(
    ${({dx:e})=>60*e}px,
    ${({dy:e})=>60*e}px
  );
  transition: transform 0.05s linear;
`,s().div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  gap: 14px;
  pointer-events: auto;
  touch-action: manipulation;

  @media (max-width: ${l.w4.breakpoints.md}) {
    right: 20px;
    bottom: 20px;
    gap: 10px;
  }
`,s().button`
  min-width: 72px;
  min-height: 72px;
  padding: 0 18px;
  border-radius: 50%;
  background: ${({accent:e})=>e};
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 800;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  touch-action: manipulation;
  /* transform is hand-tuned tighter than the fast token so the press-scale
   * tracks the finger (joystick physics), box-shadow uses the motion scale. */
  transition: transform 0.08s ease, box-shadow ${l.w4.transitions.fast};

  &:active {
    transform: scale(0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  }
`;let H=(0,$.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;s()("div",{shouldForwardProp:e=>"accentColor"!==e&&"pinned"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  background: ${l.w4.colors.surface};
  border: 1px solid ${({pinned:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  min-height: 230px;
  transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 200ms,
              box-shadow 200ms;
  animation: ${H} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${l.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${l.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .pin-btn { opacity: 1; }
    &:hover .pin-controls { opacity: 1; }
  }

  @media (hover: none) {
    .pin-btn { opacity: ${({pinned:e})=>e?1:.55}; }
    .pin-controls { opacity: 0.55; }
  }
`,s().div`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${l.w4.colors.border};
  color: ${l.w4.colors.mainText};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
    z-index: 1;
  }

  /* ── Per-id templates ── */

  /* generic fallback: diagonal gradient + uppercase monogram */
  &.viz--generic {
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(135deg, var(--acc) 0%, transparent 70%),
      linear-gradient(135deg, #1a1f38, #0f1220);
  }
  & .viz-mono {
    position: absolute;
    left: 16px;
    bottom: 12px;
    font-family: ${l.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 28px;
    letter-spacing: -1px;
    color: var(--acc);
    opacity: 0.9;
    z-index: 1;
  }

  /* markdown — paragraphs of lines */
  &.viz--markdown {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { display: block; height: 4px; background: #388bfd; border-radius: 2px; opacity: 0.7; }
    & > .h { height: 7px; background: ${l.w4.colors.mainText}; opacity: 0.9; width: 55%; margin-bottom: 4px; }
    & > .l1 { width: 88%; opacity: 0.5; }
    & > .l2 { width: 72%; opacity: 0.4; }
    & > .l3 { width: 90%; opacity: 0.5; }
    & > .l4 { width: 60%; opacity: 0.3; }
  }

  /* school — year ladder */
  &.viz--school {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    align-items: flex-end;
    gap: 6px;
    & > .col { flex: 1; background: linear-gradient(180deg, #f78166, rgba(247, 129, 102, 0.1)); border-radius: 3px 3px 0 0; }
    & > .col:nth-of-type(1) { height: 32%; }
    & > .col:nth-of-type(2) { height: 52%; }
    & > .col:nth-of-type(3) { height: 74%; }
    & > .col:nth-of-type(4) { height: 92%; }
    & > .lb { position: absolute; left: 14px; top: 12px; font-family: ${l.w4.typography.fontFamily}; font-style: italic; font-size: 22px; font-weight: 600; color: #f78166; letter-spacing: -0.4px; }
  }

  /* earth — globe grid */
  &.viz--earth {
    background: linear-gradient(135deg, #0d2e1a, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .g {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 35% 35%, rgba(63, 185, 80, 0.5), transparent 40%),
        radial-gradient(circle at 70% 65%, rgba(63, 185, 80, 0.3), transparent 40%),
        linear-gradient(135deg, #0f3a20, #0a1a10);
      border: 1px solid rgba(63, 185, 80, 0.3);
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 40px rgba(63, 185, 80, 0.15);
    }
    & > .g::before,
    & > .g::after {
      content: '';
      position: absolute;
      left: 0; right: 0;
      border-top: 1px solid rgba(63, 185, 80, 0.22);
    }
    & > .g::before { top: 30%; transform: skewY(-10deg); }
    & > .g::after  { top: 60%; transform: skewY(8deg); }
  }

  /* cosmos — starfield + moon */
  &.viz--cosmos {
    background:
      radial-gradient(2px 2px at 20% 30%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 75% 20%, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
      radial-gradient(1.5px 1.5px at 45% 70%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 90% 60%, rgba(255, 255, 255, 0.8) 50%, transparent 50%),
      radial-gradient(2px 2px at 15% 85%, rgba(188, 140, 255, 0.9) 50%, transparent 50%),
      radial-gradient(1px 1px at 60% 40%, rgba(255, 255, 255, 0.4) 50%, transparent 50%),
      radial-gradient(1px 1px at 30% 15%, rgba(188, 140, 255, 0.7) 50%, transparent 50%),
      radial-gradient(circle at 78% 45%, rgba(188, 140, 255, 0.35), transparent 45%),
      linear-gradient(135deg, #1a1140, #0f1220);
    &::after {
      content: '';
      position: absolute;
      right: 24px;
      top: 24px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #e9d9ff, #b8a0e8 60%, #7a5ec0);
      box-shadow: 0 0 30px rgba(188, 140, 255, 0.4);
    }
  }

  /* techscope — spectrum bars */
  &.viz--techscope {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: flex-end;
    padding: 14px;
    gap: 3px;
    & > span { flex: 1; background: linear-gradient(180deg, #a371f7, rgba(163, 113, 247, 0.2)); border-radius: 1px; }
  }

  /* citypulse — skyline + sun */
  &.viz--citypulse {
    background: linear-gradient(180deg, #2a1a10 0%, #0f1220 100%);
    &::before {
      content: '';
      position: absolute;
      left: 0; right: 0; bottom: 0;
      height: 70%;
      background: #0a0b14;
      clip-path: polygon(0 100%, 0 80%, 6% 80%, 6% 55%, 13% 55%, 13% 85%, 22% 85%, 22% 35%, 34% 35%, 34% 70%, 43% 70%, 43% 20%, 55% 20%, 55% 60%, 66% 60%, 66% 40%, 75% 40%, 75% 75%, 88% 75%, 88% 50%, 100% 50%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      top: 18px; right: 20px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: #d29922;
      box-shadow: 0 0 24px rgba(210, 153, 34, 0.5);
    }
  }

  /* stockpulse — candles */
  &.viz--stockpulse {
    background: linear-gradient(135deg, #0f2818, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    & > .c { flex: 1; position: relative; height: 100%; }
    & > .c::before { content: ''; position: absolute; left: 50%; transform: translateX(-50%); width: 1px; top: 20%; bottom: 15%; background: #3fb950; opacity: 0.5; }
    & > .c::after  { content: ''; position: absolute; left: 0; width: 100%; top: 35%; height: 30%; background: #3fb950; border-radius: 1px; }
    & > .c.r::before { background: #d86a6a; }
    & > .c.r::after  { background: #d86a6a; }
  }

  /* csvexplorer — mini table */
  &.viz--csvexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 14px;
    gap: 1px;
    & > span {
      background: rgba(88, 166, 255, 0.08);
      border-radius: 2px;
      display: flex;
      align-items: center;
      padding-left: 6px;
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: #58a6ff;
    }
    & > span.h { background: rgba(88, 166, 255, 0.2); font-weight: 500; }
  }

  /* chartbuilder — area chart */
  &.viz--chartbuilder {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    &::before {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: linear-gradient(180deg, rgba(210, 153, 34, 0.5), transparent);
      clip-path: polygon(0 100%, 0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: #d29922;
      clip-path: polygon(0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 24%, 90% 12%, 75% 32%, 60% 22%, 45% 52%, 25% 37%, 15% 57%, 0 62%);
    }
  }

  /* pad — notebook */
  &.viz--pad {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { height: 3px; background: rgba(247, 129, 102, 0.45); border-radius: 2px; }
    & > .t { height: 6px; background: #f78166; width: 45%; }
    & > .a { width: 85%; }
    & > .b { width: 65%; }
    & > .c { width: 90%; }
    & > .d { width: 50%; }
  }

  /* regexlab — pattern + highlight */
  &.viz--regexlab {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 14px;
    padding: 14px;
    line-height: 1.7;
    color: ${l.w4.colors.mainTextMuted};
    & .hl { background: rgba(56, 139, 253, 0.35); color: #58a6ff; padding: 1px 3px; border-radius: 2px; }
    & .slash { color: #58a6ff; }
  }

  /* jsonexplorer — tree */
  &.viz--jsonexplorer {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    color: ${l.w4.colors.mainTextMuted};
    line-height: 1.5;
    & .k { color: #3fb950; }
    & .v { color: ${l.w4.colors.mainText}; }
    & .b { color: ${l.w4.colors.mainTextMuted}; opacity: 0.7; }
  }

  /* codediff — two columns */
  &.viz--codediff {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    padding: 14px;
    & > .col { display: flex; flex-direction: column; gap: 3px; }
    & span { height: 4px; border-radius: 2px; }
    & .a { background: rgba(216, 106, 106, 0.4); }
    & .n { background: rgba(255, 255, 255, 0.08); }
    & .g { background: rgba(127, 183, 126, 0.5); }
  }

  /* playground — tubes */
  &.viz--playground {
    background: linear-gradient(135deg, #2a2410, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    & > .tube {
      width: 24px;
      height: 60px;
      border: 1.5px solid #facc15;
      border-radius: 0 0 12px 12px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg, transparent 40%, rgba(250, 204, 21, 0.35) 40%);
    }
    & > .tube::before {
      content: '';
      position: absolute;
      inset: 40% 3px 3px 3px;
      background: #facc15;
      border-radius: 0 0 8px 8px;
      opacity: 0.6;
    }
  }

  /* jwtinspector — token chunks */
  &.viz--jwtinspector {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    justify-content: center;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    & > span { padding: 6px 10px; border-radius: 4px; }
    & > .h { background: rgba(163, 113, 247, 0.2); color: #a371f7; }
    & > .p { background: rgba(127, 183, 126, 0.2); color: #7fb77e; }
    & > .s { background: rgba(216, 106, 106, 0.2); color: #d86a6a; }
    & > .sep { padding: 0; background: transparent; color: ${l.w4.colors.mainTextMuted}; opacity: 0.6; }
  }

  /* colorlab — palette strip */
  &.viz--colorlab {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
  }

  /* cronbuilder — timeline */
  &.viz--cronbuilder {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    & > .row { display: flex; align-items: center; gap: 2px; height: 6px; position: relative; }
    & > .row::before {
      content: attr(data-l);
      position: absolute;
      left: -2px;
      top: -14px;
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: ${l.w4.colors.mainTextMuted};
      letter-spacing: 1px;
      opacity: 0.7;
    }
    & > .row span { flex: 1; height: 100%; background: rgba(255, 255, 255, 0.05); border-radius: 1px; }
    & > .row span.on { background: #3fb950; }
  }

  /* weather — sun + temp */
  &.viz--weather {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    & > .sun {
      position: absolute;
      top: 20px; left: 34px;
      width: 50px; height: 50px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #ffd780, #58a6ff 80%);
      box-shadow: 0 0 40px rgba(88, 166, 255, 0.4);
    }
    & > .temp {
      position: absolute;
      right: 20px; bottom: 14px;
      font-family: ${l.w4.typography.fontFamily};
      font-size: 38px;
      font-weight: 300;
      color: #58a6ff;
      line-height: 1;
      letter-spacing: -1px;
    }
    & > .temp small { font-size: 16px; vertical-align: top; margin-left: 2px; font-weight: 400; }
  }

  /* apiexplorer — request/response */
  &.viz--apiexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 14px;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & .get { color: #3fb950; }
    & .url { color: ${l.w4.colors.mainText}; }
    & .status { color: #58a6ff; }
    & .echo { color: ${l.w4.colors.mainTextMuted}; opacity: 0.75; }
  }

  /* movies — poster marquee. 4×2 ordered cool→warm for a diagonal tonal
     sweep; extra gap + padding lets each poster breathe instead of reading
     as a packed mosaic. */
  &.viz--movies {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 16px;
    & > span { border-radius: 4px; }
  }

  /* promptlab — chat bubbles */
  &.viz--promptlab {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    & > .bubble {
      background: rgba(163, 113, 247, 0.12);
      border: 1px solid rgba(163, 113, 247, 0.3);
      border-radius: 6px;
      padding: 6px 10px;
      font-size: 10.5px;
      color: ${l.w4.colors.mainText};
      align-self: flex-start;
      max-width: 80%;
      line-height: 1.35;
    }
    & > .bubble.r {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.14);
      color: ${l.w4.colors.mainTextMuted};
      align-self: flex-end;
      font-family: ${l.w4.typography.fontFamilyMono};
    }
  }

  /* ask — floating conversation with sparkle + response ripples */
  &.viz--ask {
    background:
      radial-gradient(circle at 20% 20%, rgba(139, 123, 255, 0.35), transparent 60%),
      radial-gradient(circle at 80% 85%, rgba(99, 102, 241, 0.25), transparent 55%),
      linear-gradient(135deg, #1a1635 0%, #0e1022 100%);
    padding: 12px;

    & > .ask-user {
      position: absolute;
      top: 14px;
      right: 14px;
      background: rgba(139, 123, 255, 0.18);
      border: 1px solid rgba(139, 123, 255, 0.45);
      border-radius: 10px 10px 2px 10px;
      padding: 5px 9px;
      font-size: 9.5px;
      color: ${l.w4.colors.mainText};
      font-family: ${l.w4.typography.fontFamilyMono};
      letter-spacing: 0.02em;
      max-width: 60%;
    }

    & > .ask-spark {
      position: absolute;
      left: 14px;
      top: 48px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: linear-gradient(135deg, #a371f7, #58a6ff);
      box-shadow: 0 0 12px rgba(139, 123, 255, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 11px;
      line-height: 1;
    }
    & > .ask-spark::before { content: '✦'; }

    & > .ask-reply {
      position: absolute;
      left: 40px;
      right: 18px;
      top: 48px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    & > .ask-reply > span {
      height: 5px;
      border-radius: 2px;
      background: rgba(230, 237, 243, 0.22);
    }
    & > .ask-reply > span.h {
      width: 60%;
      background: rgba(139, 123, 255, 0.55);
      height: 6px;
    }
    & > .ask-reply > span.b1 { width: 85%; }
    & > .ask-reply > span.b2 { width: 72%; }
    & > .ask-reply > span.b3 { width: 50%; }
  }

  /* devtools — IDE-style panel grid showing the 11 tools */
  &.viz--devtools {
    background:
      linear-gradient(180deg, #0d1117 0%, #05070b 100%);
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0 1px, transparent 1px 3px);
      pointer-events: none;
      z-index: 1;
    }

    & > span {
      position: relative;
      z-index: 2;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: rgba(255, 255, 255, 0.92);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    /* mark the "focused" pane — the active tool */
    & > span.active {
      outline: 1px solid rgba(255, 255, 255, 0.3);
      outline-offset: 1px;
    }
  }

  /* imagegen — generated frame */
  &.viz--imagegen {
    background: conic-gradient(from 40deg at 50% 50%, #f78166 0 60deg, #a371f7 60deg 180deg, #58a6ff 180deg 280deg, #f78166 280deg 360deg);
    &::after {
      content: 'generate';
      position: absolute;
      left: 0; right: 0; bottom: 14px;
      text-align: center;
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.9);
      z-index: 2;
    }
    & > .frame {
      position: absolute;
      inset: 14px;
      background: rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
    }
  }

  /* daily — bullseye */
  &.viz--daily {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .ring { position: absolute; border-radius: 50%; border: 1.5px solid #34d399; }
    & > .ring.r1 { width: 100px; height: 100px; opacity: 0.25; }
    & > .ring.r2 { width: 65px;  height: 65px;  opacity: 0.5; }
    & > .ring.r3 { width: 30px;  height: 30px;  opacity: 1; }
    & > .dot {
      width: 8px; height: 8px;
      background: #34d399;
      border-radius: 50%;
      box-shadow: 0 0 18px #34d399;
      position: relative;
      z-index: 2;
    }
  }

  /* games — square collage */
  &.viz--games {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    padding: 8px;
    & > span {
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${l.w4.typography.fontFamily};
      font-weight: 800;
      font-size: 14px;
      letter-spacing: -1px;
      color: ${l.w4.colors.mainText};
    }
  }
`,s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .lock {
    margin-left: auto;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 9px;
    color: ${l.w4.colors.mainTextMuted};
    letter-spacing: 1.4px;
    text-transform: uppercase;
    border: 1px solid ${l.w4.colors.border};
    border-radius: 3px;
    padding: 1px 6px;
    flex-shrink: 0;
  }
`,s().div`
  padding: 6px 14px 16px;
`,s().h3`
  margin: 0 0 6px;
  font-family: ${l.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${l.w4.colors.mainText};

  .hash {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${l.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,s().p`
  margin: 0;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,s().div`
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid ${l.w4.colors.borderSubtle};
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.4;
`,s().button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: ${({pinned:e})=>e?l.w4.colors.accent:l.w4.colors.mainText};
  opacity: ${({pinned:e})=>+!!e};
  cursor: pointer;
  transition: opacity ${l.w4.transitions.fast}, color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};
  z-index: 3;
  padding: 0;

  &:hover {
    color: ${l.w4.colors.accent};
    border-color: ${l.w4.colors.accent};
  }
`,s().div`
  position: absolute;
  top: 8px;
  right: 44px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${l.w4.transitions.fast};
  z-index: 3;
`;let L=s().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1.5px solid
    ${({variant:e})=>"default"===e?l.w4.colors.borderStrong:l.w4.colors.accent};
  background: ${({variant:e})=>"filled"===e?l.w4.colors.accentMuted:"transparent"};
  color: ${({variant:e})=>"default"===e?l.w4.colors.mainTextMuted:l.w4.colors.accent};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 500;
  white-space: nowrap;
  cursor: ${({clickable:e})=>e?"pointer":"default"};
  transition: ${l.w4.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${({variant:e})=>"default"===e?l.w4.colors.mainTextFaint:l.w4.colors.accentHover};
    color: ${({variant:e})=>"default"===e?l.w4.colors.mainText:l.w4.colors.accentHover};
  }

  &:focus-visible {
    ${l.w4.focusRing}
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,D=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
`,R=i().forwardRef(function({variant:e="default",dotColor:t,children:a,onClick:r,...i},n){return(0,o.jsxs)(L,{ref:n,variant:e,clickable:!!r,onClick:r,type:i.type??"button",...i,children:[t&&(0,o.jsx)(D,{color:t}),a]})}),B={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:l.w4.colors.accentMuted},P={neutral:l.w4.colors.mainTextMuted,live:l.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:l.w4.colors.accent},I=s().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  font-weight: ${({tone:e})=>"film"===e||"tv"===e?600:500};
  letter-spacing: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"1.2px":"0.6px"};
  text-transform: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"uppercase":"none"};
  padding: ${({tone:e})=>"film"===e||"tv"===e?"3px 8px":"2px 7px"};
  border-radius: ${({tone:e})=>"film"===e||"tv"===e?l.w4.borderRadius.sm:"3px"};
  background: ${({tone:e})=>B[e]};
  color: ${({tone:e})=>P[e]};
`,W=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`;function E({tone:e="neutral",dot:t,children:a,...r}){return(0,o.jsxs)(I,{tone:e,...r,children:[(t??"live"===e)&&(0,o.jsx)(W,{}),a]})}s().kbd`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 3px;
  color: ${l.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`;let N=s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;function O({children:e,...t}){return(0,o.jsx)(N,{...t,children:e})}s().label`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 9px 14px;
  transition: border-color ${l.w4.transitions.fast};

  &:focus-within {
    border-color: ${l.w4.colors.accent};
  }
`,s().input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${l.w4.colors.mainTextFaint};
  }
`,s().span`
  display: inline-flex;
  align-items: center;
  color: ${l.w4.colors.mainTextMuted};
  flex-shrink: 0;
`;let Y=s().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  /* Clip any inner row that's wider than the column instead of letting it
   * push the panel past the grid track. PanelGrid uses minmax(0, 1fr) so
   * the column width is authoritative — we just need to honour it here. */
  min-width: 0;
  overflow: hidden;
  padding: 18px 20px 20px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.borderSubtle};
  border-radius: ${l.w4.borderRadius.lg};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  transition: border-color ${l.w4.transitions.fast},
    background ${l.w4.transitions.fast};

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
  }

  ${({accentColor:e})=>e&&`&::before {
      content: '';
      position: absolute;
      top: 14px; bottom: 14px; left: 0;
      width: 2px;
      background: ${e};
      border-radius: 0 2px 2px 0;
      opacity: 0.7;
    }`}
`,V=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,K=s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,G=s().div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,_=s().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  line-height: 1.45;
`,q=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.danger};
`;function J({title:e,accessory:t,accentColor:a,error:r,errorLabel:i,children:n}){return(0,o.jsxs)(Y,{accentColor:a,"data-widget-shell":!0,children:[(0,o.jsxs)(V,{children:[(0,o.jsx)(O,{children:e}),t&&(0,o.jsx)(K,{children:t})]}),r?(0,o.jsxs)(_,{role:"alert",children:[(0,o.jsx)(q,{children:i??"Error"}),(0,o.jsx)("div",{children:r})]}):(0,o.jsx)(G,{children:n})]})}s().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px;
  background: ${l.w4.colors.surface};
  border: 1px solid
    ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.borderSubtle};
  border-radius: ${l.w4.borderRadius.lg};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  box-shadow: ${({active:e})=>e?`inset 0 0 0 1px ${l.w4.colors.accent}`:"none"};
  transition: border-color ${l.w4.transitions.fast};

  &:hover {
    border-color: ${({active:e})=>e?l.w4.colors.accentHover:l.w4.colors.borderStrong};
  }
`,s().div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
`,s().div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: ${({bg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fff;
  flex-shrink: 0;
`,s().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,s().div`
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${l.w4.colors.mainText};
  margin-bottom: 4px;
`,s().div`
  font-size: 11.5px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.35;
  margin-bottom: 8px;
`,s().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${l.w4.colors.accentMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
`,s().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 1;
  min-height: 0;
`,s().button`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.borderSubtle};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;
  gap: 6px;
  font-family: inherit;
  color: ${l.w4.colors.mainText};
  cursor: ${e=>e.onClick?"pointer":"default"};
  transition: border-color ${l.w4.transitions.fast},
    background ${l.w4.transitions.fast};

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
    background: ${l.w4.colors.surfaceHover};
  }

  &:focus-visible {
    ${l.w4.focusRing}
  }
`,s().div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: ${({fg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`,s().div`
  font-size: 11px;
  color: ${l.w4.colors.mainText};
`,s().div`
  margin-top: 14px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({color:e})=>e};
  letter-spacing: 0.5px;
`,s().div`
  position: relative;
  display: inline-block;
`,s().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px 6px 8px;
  background: ${({open:e})=>e?l.w4.colors.surfaceHover:"transparent"};
  border: 1px solid
    ${({open:e})=>e?l.w4.colors.borderStrong:l.w4.colors.border};
  border-radius: 999px;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast},
    border-color ${l.w4.transitions.fast},
    color ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.mainText};
    border-color: ${l.w4.colors.borderStrong};
  }
  &:focus-visible { ${l.w4.focusRing} }
`,s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  background: ${l.w4.colors.accentMuted};
  color: ${l.w4.colors.accent};
  padding: 2px 7px;
  border-radius: 999px;
`;let Q=(0,$.keyframes)`
  from { opacity: 0; transform: translate(-50%, -6px); }
  to   { opacity: 1; transform: translate(-50%,  0); }
`;s().div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  max-width: calc(100vw - 24px);
  padding: 10px;
  background: ${l.w4.colors.surfaceRaised};
  border: 1px solid ${l.w4.colors.borderStrong};
  border-radius: 14px;
  box-shadow: ${l.w4.elevation.lg};
  z-index: ${l.w4.zIndex.dropdown};
  animation: ${Q} 0.18s ease both;

  @media (max-width: ${l.w4.breakpoints.md}) {
    position: fixed;
    top: calc(48px + env(safe-area-inset-top, 0px) + 6px);
    left: 12px;
    right: 12px;
    width: auto;
    max-width: none;
    transform: none;
    animation: none;
    max-height: calc(100dvh - 48px - env(safe-area-inset-top, 0px) - 24px);
    overflow-y: auto;
  }
`,s()("button",{shouldForwardProp:e=>"accent"!==e&&"expanded"!==e})`
  width: 100%;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  background: ${({expanded:e})=>e?l.w4.colors.surfaceHover:"transparent"};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  text-align: left;
  transition: background ${l.w4.transitions.fast};

  &:hover { background: ${l.w4.colors.surfaceHover}; }
  &:focus-visible { ${l.w4.focusRing} }
`,s()("span",{shouldForwardProp:e=>"accent"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({accent:e})=>e}26;
  color: ${({accent:e})=>e};
  border: 1px solid ${({accent:e})=>e}40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,s().span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,s().span`
  font-size: 13.5px;
  color: ${l.w4.colors.mainText};
  font-weight: 500;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,s()("span",{shouldForwardProp:e=>"accent"!==e})`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  min-width: 24px;
  height: 22px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accent:e})=>e}30;
  color: ${({accent:e})=>e};
  border-radius: 999px;
`,s().div`
  margin: 2px 0 6px 48px;
  padding: 4px 0;
  border-left: 1px solid ${l.w4.colors.borderSubtle};
  display: flex;
  flex-direction: column;
`,s().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px 7px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12.5px;
  cursor: pointer;
  text-align: left;
  transition: background ${l.w4.transitions.fast},
    color ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.mainText};
    background: ${l.w4.colors.surfaceHover};
  }
  &:focus-visible { ${l.w4.focusRing} }
`,s().span`
  font-size: 14px;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: ${({accent:e})=>e?`${e}22`:"transparent"};
`,s().span`
  margin-left: auto;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
`;let U=(0,$.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;s()("div",{shouldForwardProp:e=>"accentColor"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  min-height: 230px;
  transition:
    transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 200ms,
    box-shadow 200ms;
  animation: ${U} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover (mirrors AppCard). */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${l.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${l.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .gamecard-emoji { transform: translateY(-2px) scale(1.05); }
  }
`,s()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${l.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(120% 100% at 50% 100%, var(--acc) 0%, transparent 60%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
  background-color: ${l.w4.colors.codeBg};

  /* Subtle vignette + tile pattern, both fade in on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
  }

  /* ── V3 pattern-tile variants ──────────────────────────────────────────
   * Ported from docs/design/atlantis/project/Atlantis Game Card Explorations.html
   * Raw hex values are intentional — the viz is artwork, mirroring AppCard's
   * sanctioned exception to the no-hardcoded-colors rule.
   */

  /* familyquiz — scattered brand/pink dots, "Q & A" label */
  &.viz--familyquiz {
    background:
      radial-gradient(circle at 20% 30%, rgba(139, 123, 255, 0.4), transparent 15%),
      radial-gradient(circle at 55% 60%, rgba(139, 123, 255, 0.3), transparent 12%),
      radial-gradient(circle at 80% 25%, rgba(255, 111, 169, 0.35), transparent 12%),
      radial-gradient(circle at 35% 75%, rgba(255, 111, 169, 0.25), transparent 14%),
      radial-gradient(circle at 90% 80%, rgba(139, 123, 255, 0.2), transparent 12%),
      #14172a;
  }

  /* tictactoe — grid lines, "3×3" */
  &.viz--tictactoe {
    background:
      repeating-linear-gradient(90deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      repeating-linear-gradient(0deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      #14172a;
  }

  /* soundhunter — vertical waveform stripes, "waveform" */
  &.viz--soundhunter {
    background:
      repeating-linear-gradient(90deg, rgba(127, 183, 126, 0.25) 0 2px, transparent 2px 7px),
      linear-gradient(180deg, #14302a 0%, #0f1220 100%);
  }

  /* adventure — dusk with paper texture */
  &.viz--adventure {
    background:
      radial-gradient(60% 50% at 50% 100%, rgba(232, 154, 92, 0.35), transparent 60%),
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0 2px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* pixelboard — rainbow conic masked by a center fade, "palette" */
  &.viz--pixelboard {
    background:
      conic-gradient(
        from 0deg at 50% 50%,
        #d86a6a 0 60deg,
        #e89a5c 60deg 120deg,
        #c4b24a 120deg 180deg,
        #7fb77e 180deg 240deg,
        #6aa8d8 240deg 300deg,
        #8b7bff 300deg 360deg
      );
    opacity: 0.3;
  }
  &.viz--pixelboard::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 30%, #14172a 70%);
    pointer-events: none;
    z-index: 1;
  }

  /* memory — flipped-card grid, cyan tones */
  &.viz--memory {
    background:
      repeating-linear-gradient(0deg, transparent 0 22px, rgba(6, 182, 212, 0.14) 22px 24px),
      repeating-linear-gradient(90deg, transparent 0 34px, rgba(6, 182, 212, 0.14) 34px 36px),
      linear-gradient(180deg, #0d1f28, #0f1220);
  }

  /* stopgame — warning stripes with stop-sign radial */
  &.viz--stopgame {
    background:
      radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.35), transparent 55%),
      repeating-linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0 8px, transparent 8px 20px),
      linear-gradient(180deg, #241506, #0f1220);
  }

  /* tapit — concentric target rings, coral tint */
  &.viz--tapit {
    background:
      radial-gradient(circle at 50% 50%, rgba(249, 117, 131, 0.55) 0 8%, transparent 8.5% 22%, rgba(249, 117, 131, 0.35) 22.5% 28%, transparent 28.5% 44%, rgba(249, 117, 131, 0.22) 44.5% 52%, transparent 53%),
      linear-gradient(180deg, #2a1420, #0f1220);
  }

  /* bombbrawl — shockwave rings on dark red */
  &.viz--bombbrawl {
    background:
      radial-gradient(circle at 50% 55%, rgba(255, 68, 68, 0.45) 0 12%, transparent 13% 25%, rgba(255, 68, 68, 0.25) 26% 38%, transparent 39% 55%, rgba(255, 68, 68, 0.12) 56% 70%, transparent 71%),
      linear-gradient(180deg, #2a0a0f, #0f0a12);
  }

  /* jumpparty — dotted-trail bounce, lime green */
  &.viz--jumpparty {
    background:
      radial-gradient(circle at 15% 80%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      radial-gradient(circle at 30% 60%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 50% 40%, rgba(63, 185, 80, 0.4) 0 3%, transparent 4%),
      radial-gradient(circle at 70% 55%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 85% 75%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      linear-gradient(180deg, #0e2416, #0f1220);
  }

  /* lebem — pastel pages, coral glow (read-to-play) */
  &.viz--lebem {
    background:
      repeating-linear-gradient(90deg, transparent 0 40px, rgba(249, 117, 131, 0.10) 40px 41px),
      radial-gradient(ellipse at 50% 100%, rgba(249, 117, 131, 0.3), transparent 65%),
      linear-gradient(180deg, #24121a, #0f1220);
  }

  /* drawguess — scribble strokes, lilac */
  &.viz--drawguess {
    background:
      repeating-linear-gradient(20deg, rgba(210, 168, 255, 0.16) 0 1.5px, transparent 2px 9px),
      repeating-linear-gradient(-30deg, rgba(210, 168, 255, 0.12) 0 1.5px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* spotit — scattered dots on violet */
  &.viz--spotit {
    background:
      radial-gradient(circle at 25% 35%, rgba(139, 92, 246, 0.35) 0 4%, transparent 5%),
      radial-gradient(circle at 55% 70%, rgba(139, 92, 246, 0.45) 0 5%, transparent 6%),
      radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.30) 0 3%, transparent 4%),
      radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.25) 0 3%, transparent 4%),
      radial-gradient(circle at 75% 55%, rgba(139, 92, 246, 0.18) 0 2%, transparent 3%),
      linear-gradient(180deg, #1c1530, #0f1220);
  }
`,s().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  z-index: 2;
`,s()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${l.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
  background: ${l.w4.colors.codeBg};

  /* ── bombbrawl — explosive red, heavy condensed logotype ──
   * padding-top reserves room for the player-count + online badges so
   * "BOMB" never sits under them (TopLeft / TopRight are absolutely
   * positioned at top:10px). */
  &.hero--bombbrawl {
    background: linear-gradient(135deg, #2a0a0f, #0f0a12);
    justify-content: flex-start;
    padding: 44px 20px 16px;
  }
  &.hero--bombbrawl .hero-mark {
    font-family: ${l.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 48px;
    letter-spacing: -3px;
    line-height: 0.88;
    color: #ff4444;
    text-shadow: 0 0 40px rgba(255, 68, 68, 0.45), 0 0 80px rgba(255, 68, 68, 0.18);
    user-select: none;
  }
  &.hero--bombbrawl .hero-mark em {
    font-style: normal;
    color: #ffb347;
    display: block;
    font-size: 36px;
    letter-spacing: -2px;
    opacity: 0.9;
  }

  /* ── jumpparty — lime burst, bouncy stacked words ── */
  &.hero--jumpparty {
    background: linear-gradient(135deg, #0e2416, #0f1220);
    flex-direction: column;
    gap: 0;
    padding: 44px 16px 12px;
  }
  &.hero--jumpparty .hero-mark {
    font-family: ${l.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 54px;
    letter-spacing: -3px;
    line-height: 0.9;
    color: #3fb950;
    text-shadow: 0 0 36px rgba(63, 185, 80, 0.4);
    user-select: none;
  }
  &.hero--jumpparty .hero-mark em {
    font-style: normal;
    font-size: 24px;
    letter-spacing: 4px;
    color: rgba(63, 185, 80, 0.55);
    display: block;
    text-transform: uppercase;
  }

  /* ── animalarena — trophy gold, serif italic clash ── */
  &.hero--animalarena {
    background: linear-gradient(135deg, #1c1a0e, #0f0f12);
    flex-direction: column;
    align-items: flex-start;
    padding: 44px 20px 18px;
  }
  &.hero--animalarena .hero-mark {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-weight: 600;
    font-size: 40px;
    letter-spacing: -2px;
    line-height: 0.92;
    background: linear-gradient(120deg, #f59e0b, #ef4444 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    user-select: none;
  }
  &.hero--animalarena .hero-mark em {
    font-style: normal;
    display: block;
    font-size: 14px;
    letter-spacing: 3px;
    -webkit-text-fill-color: rgba(245, 158, 11, 0.45);
    text-transform: uppercase;
    margin-top: 6px;
  }
`,s().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  z-index: 2;

  /* bombbrawl's "BOMB / BRAWL" logotype is left-aligned and reaches the
   * bottom of the hero zone — anchor the caption bottom-right instead so
   * it clears the typography. */
  .hero--bombbrawl & {
    left: auto;
    right: 14px;
    color: rgba(255, 179, 71, 0.55);
  }

  /* animalarena's "SUMO / ZOO" stack is also left-aligned and its "ZOO"
   * block reaches the bottom of the hero zone — same bottom-right
   * anchoring clears the overlap. */
  .hero--animalarena & {
    left: auto;
    right: 14px;
    color: rgba(245, 158, 11, 0.5);
  }
`,s().span`
  font-size: 56px;
  line-height: 1;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,s()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accentColor:e})=>`${e}1f`};
  border: 1px solid ${({accentColor:e})=>`${e}55`};
  color: ${({accentColor:e})=>e};
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,s().div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
`,s().div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`,s()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,s().div`
  padding: 6px 14px 16px;
`,s().h3`
  margin: 0 0 6px;
  font-family: ${l.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${l.w4.colors.mainText};

  .hash {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${l.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,s().p`
  margin: 0;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`;var X=a(11352),Z=a(76710),ee=a(4311),et=a(73639),ea=a(40080);a(75406),s().nav`padding: ${l.w4.spacing.sm} 0;`,s().div`
  border-bottom: 1px solid ${l.w4.colors.border}60;
  margin-bottom: 2px;
`,s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${l.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${l.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${l.w4.colors.sidebarText}; }
`,s().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,s().span`
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,s().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,s().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,s().div`overflow: hidden;`,s().div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,s().button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${l.w4.spacing.md};
  background: ${({active:e})=>e?l.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?l.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?l.w4.colors.sidebarActive:l.w4.colors.sidebarText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,s().button`
  opacity: ${({active:e})=>+!!e};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":l.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;var eo=a(54041);let er="https://cdn.jsdelivr.net/npm/mermaid@11.14.0/dist/mermaid.min.js",ei=null,en="#7fb77e",es=(0,$.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,el=s().div`
  position: relative;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: 28px ${l.w4.spacing.lg} ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  min-height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${es} 0.25s ease both;
  transition:
    border-color ${l.w4.transitions.base},
    transform ${l.w4.transitions.base},
    box-shadow ${l.w4.transitions.base};

  /* Signature left accent bar — full-height, inset like a ribbon */
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0;
    width: 2px;
    border-radius: 2px;
    background: ${en};
  }

  /* Uppercase mono eyebrow tag — reads "◉ DIAGRAM" */
  &::after {
    content: '◉ DIAGRAM';
    position: absolute;
    top: 10px;
    right: 14px;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    color: ${en};
    opacity: 0.75;
    pointer-events: none;
  }

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: ${l.w4.elevation.sm};
  }

  svg { max-width: 100%; height: auto; }
  svg text { font-variant-numeric: tabular-nums; }
`,ed=s().div`
  height: 36px;
  width: min(60%, 240px);
  margin: 0 auto;
  border-radius: ${l.w4.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${l.w4.colors.border} 0%,
    ${l.w4.colors.borderStrong} 50%,
    ${l.w4.colors.border} 100%
  );
  background-size: 200% 100%;
  animation: ${(0,$.keyframes)`
    from { background-position: 200% 0; }
    to   { background-position: -200% 0; }
  `} 1.6s ease-in-out infinite;
  opacity: 0.45;
`,ec=s().pre`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${l.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,ep=!1,eh=/^(?:---[\s\S]*?---\s*)?(?:graph|flowchart|sequenceDiagram|classDiagram|stateDiagram(?:-v2)?|erDiagram|pie|gantt|journey|mindmap|gitGraph|sankey(?:-beta)?|quadrantChart|requirementDiagram|timeline|xychart-beta|block-beta|C4Context|C4Container|C4Component|C4Dynamic|C4Deployment)\b/;function eg({code:e}){let[t,a]=(0,r.useState)(""),[i,n]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{let t=!1;n(!1),a("");let o=e.trim();if(!o)return void n(!0);let r=o.split(/\r?\n/)[0]?.trim()??"";if(!eh.test(r))return void n(!0);let i=setTimeout(()=>{t||(console.error("[MermaidBlock] render timed out after 5s"),n(!0))},5e3);return(async()=>{try{let e=await (ei||(ei=new Promise((e,t)=>{let a=globalThis.mermaid;if(a)return void e(a);let o=document.createElement("script");o.src=er,o.async=!0,o.onload=()=>{let a=globalThis.mermaid;a?e(a):t(Error("mermaid loaded but globalThis.mermaid missing"))},o.onerror=()=>t(Error(`failed to load ${er}`)),document.head.appendChild(o)})));if(console.debug("[MermaidBlock] mermaid ready",{initialized:ep}),!ep){let t="#141820",a="#1c2332",o="#343c4f",r="#e8edf5",i="#9aa5b8",n="#7fb77e",s="#6aa8d8",l="#8b7bff",d="#e89a5c",c="#f87171";e.initialize({startOnLoad:!1,theme:"base",securityLevel:"loose",themeVariables:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",background:t,mainBkg:a,primaryColor:n,primaryTextColor:r,primaryBorderColor:n,secondaryColor:l,secondaryTextColor:r,secondaryBorderColor:l,tertiaryColor:s,tertiaryTextColor:r,tertiaryBorderColor:s,lineColor:i,textColor:r,nodeBorder:o,clusterBkg:t,clusterBorder:o,edgeLabelBackground:a,labelBackground:a,labelBorder:o,relationLabelBackground:a,relationLabelColor:r,pie1:n,pie2:l,pie3:s,pie4:d,pie5:"#ff6fa9",pie6:"#2dd4bf",pie7:c,pie8:n,pieStrokeColor:t,pieStrokeWidth:"2px",pieTitleTextSize:"18px",pieSectionTextSize:"13px",pieLegendTextSize:"13px",actorBkg:n,actorBorder:n,actorTextColor:t,signalColor:r,signalTextColor:r,labelBoxBkgColor:a,labelBoxBorderColor:o,labelTextColor:r,loopTextColor:r,noteBkgColor:d,noteBorderColor:d,noteTextColor:t,stateBkg:a,altBackground:t,attributeBackgroundColorOdd:a,attributeBackgroundColorEven:t,rowOdd:a,rowEven:t,gridColor:o,sectionBkgColor:a,sectionBkgColor2:t,taskBkgColor:l,taskTextColor:r,taskTextDarkColor:r,taskTextLightColor:r,taskTextOutsideColor:r,activeTaskBkgColor:n,activeTaskBorderColor:n,doneTaskBkgColor:i,doneTaskBorderColor:i,critBkgColor:c,critBorderColor:c}}),ep=!0}console.debug("[MermaidBlock] calling mermaid.render");let{svg:r}=await e.render(`mermaid-${(0,eo.z)()}`,o);if(clearTimeout(i),console.debug("[MermaidBlock] render returned",{length:r?.length??0}),t)return;let s=/aria-roledescription="error"/i.test(r)||/class="error-(?:icon|text)"/i.test(r)||/>Syntax error in text</i.test(r);if(!r||s)return void n(!0);a(r)}catch(e){clearTimeout(i),console.error("[MermaidBlock] render failed",e),t||n(!0)}})(),()=>{t=!0,clearTimeout(i)}},[e]),i)?(0,o.jsx)(ec,{children:e.trim()}):t?(0,o.jsx)(el,{dangerouslySetInnerHTML:{__html:t}}):(0,o.jsx)(el,{children:(0,o.jsx)(ed,{"aria-hidden":!0})})}let ef=["#388bfd","#3fb950","#d29922","#a371f7","#f87171","#22d3ee","#fb923c","#34d399","#f472b6","#818cf8"],em=s().div`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ex=s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  margin-bottom: ${l.w4.spacing.md};
  text-align: center;
`,eu=s().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
`,ew=s().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,eb=s().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,ey=s().pre`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${l.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`;function e$(e){if(e<=0)return 10;let t=Math.pow(10,Math.floor(Math.log10(e)));return Math.ceil(e/t)*t}function ev(e,t,a){let o=Math.max(1,Math.ceil(a/8));return 0!==t&&t!==a-1&&t%o!=0?"":e.length>12?e.slice(0,11)+"…":e}function ek({labels:e,data:t,colors:a}){let r=340,i=176,n=e$(Math.max(...t,1)),s=Math.min(40,r/e.length*.6),d=r/e.length,c=Array.from({length:6},(e,t)=>n/5*t);return(0,o.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[c.map((e,t)=>{let a=16+i-e/n*i;return(0,o.jsxs)("g",{children:[(0,o.jsx)("line",{x1:44,y1:a,x2:384,y2:a,stroke:l.w4.colors.border,strokeWidth:.5,strokeDasharray:0===t?"none":"3,3"}),(0,o.jsx)("text",{x:38,y:a+4,fill:l.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:l.w4.typography.fontFamily,children:Math.round(e)})]},t)}),t.map((t,r)=>{let c=44+d*r+d/2-s/2,p=t/n*i,h=16+i-p,g=a[r%a.length];return(0,o.jsxs)("g",{children:[(0,o.jsxs)("rect",{x:c,y:h,width:s,height:p,rx:3,fill:g,opacity:.85,children:[(0,o.jsx)("animate",{attributeName:"height",from:"0",to:p,dur:"0.5s",fill:"freeze"}),(0,o.jsx)("animate",{attributeName:"y",from:16+i,to:h,dur:"0.5s",fill:"freeze"})]}),(0,o.jsx)("text",{x:c+s/2,y:h-4,fill:l.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:t}),(0,o.jsx)("text",{x:44+d*r+d/2,y:208,fill:l.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:ev(e[r],r,e.length)})]},r)})]})}function eM({labels:e,data:t,colors:a}){let r=t.reduce((e,t)=>e+t,0)||1,i=-Math.PI/2,n=t.map((e,t)=>{let n=e/r*Math.PI*2,s=i,d=i+=n,c=120+90*Math.cos(s),p=120+90*Math.sin(s),h=120+90*Math.cos(d),g=120+90*Math.sin(d),f=+(n>Math.PI),m=s+n/2,x=120+58.5*Math.cos(m),u=120+58.5*Math.sin(m),w=Math.round(e/r*100);return(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{d:`M 120 120 L ${c} ${p} A 90 90 0 ${f} 1 ${h} ${g} Z`,fill:a[t%a.length],stroke:l.w4.colors.codeBg,strokeWidth:2,opacity:.85}),w>=5&&(0,o.jsxs)("text",{x:x,y:u+4,fill:"#fff",fontSize:11,fontWeight:600,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:[w,"%"]})]},t)});return(0,o.jsx)("svg",{viewBox:"0 0 240 240",width:"100%",style:{maxWidth:240},children:n})}function ej({labels:e,data:t,colors:a}){let r=340,i=176,n=e$(Math.max(...t,1)),s=t.length>1?r/(t.length-1):r,d=a[0],c=t.map((e,t)=>({x:44+s*t,y:16+i-e/n*i})),p=c.map((e,t)=>`${0===t?"M":"L"} ${e.x} ${e.y}`).join(" "),h=Array.from({length:6},(e,t)=>n/5*t);return(0,o.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[h.map((e,t)=>{let a=16+i-e/n*i;return(0,o.jsxs)("g",{children:[(0,o.jsx)("line",{x1:44,y1:a,x2:384,y2:a,stroke:l.w4.colors.border,strokeWidth:.5,strokeDasharray:0===t?"none":"3,3"}),(0,o.jsx)("text",{x:38,y:a+4,fill:l.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:l.w4.typography.fontFamily,children:Math.round(e)})]},t)}),(0,o.jsx)("path",{d:p,fill:"none",stroke:d,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),c.map((a,r)=>(0,o.jsxs)("g",{children:[(0,o.jsx)("circle",{cx:a.x,cy:a.y,r:4,fill:d,stroke:l.w4.colors.codeBg,strokeWidth:2}),(0,o.jsx)("text",{x:a.x,y:a.y-10,fill:l.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:t[r]}),(0,o.jsx)("text",{x:a.x,y:208,fill:l.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:ev(e[r],r,e.length)})]},r))]})}function ez({code:e}){let t=(0,r.useMemo)(()=>(function(e){let t,a,o=e.trim().split("\n"),r="bar",i=[],n=[];for(let e of o){let[o,...s]=e.split(":"),l=s.join(":").trim();if(l)switch(o.trim().toLowerCase()){case"type":["bar","pie","line"].includes(l.toLowerCase())&&(r=l.toLowerCase());break;case"title":t=l;break;case"labels":i=l.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim()).filter(Boolean);break;case"data":n=l.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim()).filter(Boolean).map(e=>parseFloat(e)||0);break;case"colors":{let e=l.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim()).filter(Boolean);a=e.length?e:void 0}}}return i.length&&n.length?{type:r,title:t,labels:i,data:n,colors:a}:null})(e),[e]);if(!t)return(0,o.jsx)(ey,{children:e.trim()});let a=t.colors??ef;return(0,o.jsxs)(em,{children:[t.title&&(0,o.jsx)(ex,{children:t.title}),"bar"===t.type&&(0,o.jsx)(ek,{labels:t.labels,data:t.data,colors:a}),"pie"===t.type&&(0,o.jsx)(eM,{labels:t.labels,data:t.data,colors:a}),"line"===t.type&&(0,o.jsx)(ej,{labels:t.labels,data:t.data,colors:a}),(0,o.jsx)(eu,{children:t.labels.map((e,t)=>(0,o.jsxs)(ew,{children:[(0,o.jsx)(eb,{color:a[t%a.length]}),e]},t))})]})}s().div`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.md};
`,s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,s().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,s().button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${l.w4.colors.accent};
    color: ${l.w4.colors.accent};
  }
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  text-align: center;
`;let eT=(0,$.keyframes)`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`;s().div`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  margin: ${l.w4.spacing.lg} 0;
`,s().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${l.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,s().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${l.w4.spacing.sm};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,s().div`
  display: flex;
  flex-direction: column;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${l.w4.colors.accent}40;
    box-shadow: 0 0 8px ${l.w4.colors.accent}15;
  }
`;let eS=s().button`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 14px ${l.w4.spacing.md};
  min-height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${l.w4.typography.fontFamily};
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    animation: ${eT} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;s()(eS)`
  border-bottom: 1px solid ${l.w4.colors.border}80;
`,s()(eS)``,s().span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({accentColor:e})=>e}18;
  color: ${({accentColor:e})=>e};
  flex-shrink: 0;
  transition: background 0.15s, transform 0.15s;

  button:active > & {
    background: ${({accentColor:e})=>e}30;
    transform: scale(0.9);
  }
`,s().span`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.accent};
`,s().span`
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${l.w4.colors.mainTextMuted};
`;var eF=a(17223),eC=a(21426);let eA=s().div`
  margin: ${l.w4.spacing.lg} 0;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${l.w4.colors.codeBorder};
  overflow: hidden;
`,eH=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${l.w4.colors.codeBorder};
`,eL=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,eD=s().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":l.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${l.w4.colors.sidebarText}; border-color: ${l.w4.colors.sidebarText}; }
`,eR={...eC.A,'pre[class*="language-"]':{...eC.A['pre[class*="language-"]'],background:l.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...eC.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function eB({lang:e="text",code:t}){let[a,i]=(0,r.useState)(!1);return(0,o.jsxs)(eA,{children:[(0,o.jsxs)(eH,{children:[(0,o.jsx)(eL,{children:e}),(0,o.jsxs)(eD,{copied:a,onClick:()=>{navigator.clipboard.writeText(t).then(()=>{i(!0),setTimeout(()=>i(!1),2e3)})},children:[a?(0,o.jsx)(M,{name:"check",size:12}):(0,o.jsx)(M,{name:"copy",size:12}),a?"Copied!":"Copy"]})]}),(0,o.jsx)(eF.A,{language:e,style:eR,showLineNumbers:t.split("\n").length>8,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:l.w4.colors.codeBg},wrapLongLines:!1,children:t})]})}let eP={NOTE:{bg:"rgba(88, 166, 255, 0.08)",border:"#58a6ff",icon:"info",label:"Note",color:"#58a6ff"},TIP:{bg:"rgba(63, 185, 80, 0.08)",border:"#3fb950",icon:"lightbulb",label:"Tip",color:"#3fb950"},IMPORTANT:{bg:"rgba(163, 113, 247, 0.08)",border:"#a371f7",icon:"zap",label:"Important",color:"#a371f7"},WARNING:{bg:"rgba(210, 153, 34, 0.08)",border:"#d29922",icon:"alert-triangle",label:"Warning",color:"#d29922"},CAUTION:{bg:"rgba(248, 81, 73, 0.08)",border:"#f85149",icon:"alert-octagon",label:"Caution",color:"#f85149"}},eI=s().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${l.w4.borderRadius.md} ${l.w4.borderRadius.md} 0;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
`,eW=s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: ${l.w4.spacing.sm};
`,eE=s().div`
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`;function eN({type:e,children:t}){let a=eP[e]??eP.NOTE;return(0,o.jsxs)(eI,{bg:a.bg,border:a.border,children:[(0,o.jsxs)(eW,{color:a.color,children:[(0,o.jsx)(M,{name:a.icon,size:15,strokeWidth:2}),a.label]}),(0,o.jsx)(eE,{children:t})]})}s().nav`
  width: 220px;
  min-width: 220px;
  padding: ${l.w4.spacing.xxl} 0 ${l.w4.spacing.xxl} ${l.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,s().div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: ${l.w4.spacing.md};
`,s().ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,s().a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${l.w4.typography.fontSizeSm};
  font-family: ${l.w4.typography.fontFamily};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?l.w4.colors.accent:"transparent"};
  border-radius: 0 ${l.w4.borderRadius.sm} ${l.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${l.w4.colors.mainText}; background: ${l.w4.colors.sidebarHover}; }
`,s().div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${l.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,s().div`flex: 1; min-width: 0;`,s().article`
  padding: ${l.w4.spacing.xxl} 0;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  line-height: ${l.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${l.w4.spacing.xl} 0 ${l.w4.spacing.md};
    color: ${l.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${l.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${l.w4.typography.fontSizeXl}; border-bottom: 1px solid ${l.w4.colors.border}; padding-bottom: ${l.w4.spacing.sm}; }
  h2 { font-size: ${l.w4.typography.fontSizeLg}; border-bottom: 1px solid ${l.w4.colors.border}; padding-bottom: ${l.w4.spacing.xs}; }
  h3 { font-size: ${l.w4.typography.fontSizeMd}; }

  p { margin: ${l.w4.spacing.md} 0; }

  a { color: ${l.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${l.w4.colors.accentHover}; } }

  ul, ol { margin: ${l.w4.spacing.md} 0; padding-left: ${l.w4.spacing.xl}; }
  li { margin: ${l.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${l.w4.colors.border};
    margin: ${l.w4.spacing.lg} 0;
    padding: ${l.w4.spacing.sm} ${l.w4.spacing.lg};
    background: ${l.w4.colors.surface};
    color: ${l.w4.colors.mainTextMuted};
    border-radius: 0 ${l.w4.borderRadius.sm} ${l.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${l.w4.colors.codeBg};
    border: 1px solid ${l.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${l.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${l.w4.spacing.lg} 0; font-size: ${l.w4.typography.fontSizeBase}; }
  th, td { padding: ${l.w4.spacing.sm} ${l.w4.spacing.md}; border: 1px solid ${l.w4.colors.border}; text-align: left; }
  th { background: ${l.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${l.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${l.w4.colors.border}; margin: ${l.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${l.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${l.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${l.w4.spacing.lg} 0; }
`,s().div`
  display: flex;
  gap: ${l.w4.spacing.lg};
  padding: ${l.w4.spacing.xxl} 0;
  border-top: 1px solid ${l.w4.colors.border};
  margin-top: ${l.w4.spacing.xxl};
`,s().button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${l.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,s().div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${l.w4.colors.sidebarTextMuted}; font-family: ${l.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,s().div`
  font-size: ${l.w4.typography.fontSizeBase}; color: ${l.w4.colors.accent};
  font-family: ${l.w4.typography.fontFamily}; font-weight: 500;
`,s().div`
  color: ${l.w4.colors.mainTextMuted};
  padding: ${l.w4.spacing.xxl} ${l.w4.spacing.xl};
  font-family: ${l.w4.typography.fontFamily};
`;let eO=(0,$.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,eY=(0,$.keyframes)`
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
`;function eV(){let e=/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i;return t=>{function a(t,a,o){let r=a.children?.[0];r?.type==="text"&&(r.value=r.value.replace(e,""),r.value.trim()||1!==a.children.length||a.children.shift()),t.data=t.data??{},t.data.hName="div",t.data.hProperties={"data-callout":o.toUpperCase()}}!function t(o){if("blockquote"===o.type){let t=o.children?.[0];if(t?.type==="paragraph"){let r=t.children?.[0],i=r?.type==="text"&&r.value?.match(e);i&&a(o,t,i[1])}}if("paragraph"===o.type){let t=o.children?.[0],r=t?.type==="text"&&t.value?.match(e);if(r){let t=[...o.children];o.children=[{type:"paragraph",children:t}],a(o,o.children[0],r[1]);let i=t[0];i?.type==="text"&&(i.value=i.value.replace(e,""),i.value.trim()||1!==t.length||t.shift());return}}o.children?.forEach(t)}(t)}}s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 90;
  animation: ${eO} 0.18s ease both;

  @media (min-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,s().aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: min(86vw, 320px);
  background: ${l.w4.colors.sidebarBg};
  border-right: 1px solid ${l.w4.colors.sidebarBorder};
  z-index: 91;
  display: flex;
  flex-direction: column;
  animation: ${eY} 0.22s cubic-bezier(0.4, 0, 0.2, 1) both;

  @media (min-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
`,s().div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
`,s().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${l.w4.typography.fontFamily};
  background: ${l.w4.colors.mainBg};
`,s().div`
  position: absolute;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%,
    hsl(${({hue:e})=>e}, 80%, 65%) 0%,
    hsl(${({hue:e})=>e+30}, 70%, 45%) 60%,
    transparent 100%
  );
  filter: blur(60px);
  opacity: 0.18;
  animation: drift ${({dur:e})=>e}s ease-in-out infinite alternate;
  pointer-events: none;

  @keyframes drift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(30px, -20px) scale(1.12); }
  }
`,s().div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${l.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${l.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,s().div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,s().h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${l.w4.colors.mainText} 0%,
    ${l.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,s().p`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,s().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,s().span`
  display: inline-flex;

  @media (min-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,s().div`
  display: flex;
  gap: 4px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
`,s().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?l.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":l.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":l.w4.colors.mainText};
  }
`;let eK=s().div`
  font-size: 14px;
  color: ${l.w4.colors.mainText};
  line-height: 1.65;

  p { margin: 0 0 0.6em; }
  p:last-child { margin-bottom: 0; }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${l.w4.colors.mainText};
    margin: 0.9em 0 0.3em;
    line-height: 1.3;
  }
  h1 { font-size: 17px; }
  h2 { font-size: 15px; }
  h3, h4, h5, h6 { font-size: 13.5px; }
  & > :first-of-type { margin-top: 0; }

  ul, ol {
    padding-left: 1.4em;
    margin: 0 0 0.6em;
    line-height: 1.65;
  }
  li { margin-bottom: 0.15em; }
  li p { margin: 0; }

  /* Task lists */
  ul.contains-task-list { list-style: none; padding-left: 0.2em; }
  li.task-list-item { display: flex; align-items: baseline; gap: 0.4em; }
  li.task-list-item input[type="checkbox"] {
    accent-color: ${l.w4.colors.accent};
    flex-shrink: 0;
    margin-top: 2px;
  }

  strong { font-weight: 600; color: ${l.w4.colors.mainText}; }
  em     { font-style: italic; }

  a {
    color: ${l.w4.colors.accent};
    text-decoration: none;

    &:hover { text-decoration: underline; color: ${l.w4.colors.accentHover}; }
  }

  blockquote {
    margin: 0.6em 0;
    padding: 6px 12px;
    border-left: 3px solid ${l.w4.colors.accent};
    background: ${l.w4.colors.surface};
    border-radius: 0 6px 6px 0;
    color: ${l.w4.colors.mainTextMuted};
    font-style: italic;
  }

  /* Inline code only — CodeBlock owns fenced blocks */
  code {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 12.5px;
    background: ${l.w4.colors.codeBg};
    border: 1px solid ${l.w4.colors.codeBorder};
    border-radius: 4px;
    padding: 1px 5px;
    color: ${l.w4.colors.mainText};
  }

  /* Pre reset — CodeBlock handles the chrome */
  pre { margin: 0.5em 0; }
  pre code { background: none; border: none; padding: 0; border-radius: 0; }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    margin: 0.5em 0;
    overflow: hidden;
    border-radius: ${l.w4.borderRadius.md};
  }
  th, td {
    padding: 7px 12px;
    border: 1px solid ${l.w4.colors.border};
    text-align: left;
    vertical-align: top;
  }
  th {
    background: ${l.w4.colors.surface};
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.03em;
    color: ${l.w4.colors.mainTextMuted};
    text-transform: uppercase;
  }
  tr:nth-of-type(even) td { background: ${l.w4.colors.surface}; }

  img {
    max-width: 100%;
    border-radius: ${l.w4.borderRadius.md};
    margin: 0.4em 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${l.w4.colors.border};
    margin: 0.8em 0;
  }

  /* KaTeX — hide the aria-only MathML fork, keep the HTML render */
  .katex .katex-mathml { display: none; }
  .katex { font-size: 1.05em; }
  .katex-display {
    margin: 0.6em 0;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 2px 0;
  }
`;function eG({children:e}){return(0,o.jsx)(eK,{children:(0,o.jsx)(X.oz,{remarkPlugins:[Z.A,ee.A,eV],rehypePlugins:[et.A,ea.A],components:{div({node:e,children:t,...a}){let r=a["data-callout"];return r?(0,o.jsx)(eN,{type:r,children:t}):(0,o.jsx)("div",{...a,children:t})},pre:({children:e})=>(0,o.jsx)(o.Fragment,{children:e}),code({className:e,children:t}){let a=/language-(\w+)/.exec(e??"")?.[1],r=String(t).replace(/\n$/,"");return r.trim()?"mermaid"===a?(0,o.jsx)(eg,{code:r}):"chart"===a?(0,o.jsx)(ez,{code:r}):a||r.includes("\n")?(0,o.jsx)(eB,{lang:a,code:r}):(0,o.jsx)("code",{className:e,children:t}):null}},children:e})})}var e_=a(37993);s().nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${l.w4.spacing.sm} 0;
`,s().div`
  font-size: 10px;
  font-weight: 600;
  color: ${l.w4.colors.sidebarTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: ${l.w4.spacing.xs} ${l.w4.spacing.md};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&`
    font-size: 0;
    padding: 0;
    margin: 0;
    height: 0;
  `}
`,s().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 0 6px;
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.mainText};
  }

  ${({collapsed:e})=>e&&`
    justify-content: center;
    padding: 8px;
    margin: 0 4px;
  `}
`,s().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`,s().span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"display: none;"}
`;let eq=(0,$.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;s().div`
  display: grid;
  /* Desktop & iPad: exactly 2 equal columns. sm = 1 col, md/lg = 2 cols (full row). */
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: auto;
  gap: ${l.w4.spacing.lg};

  @media (max-width: ${l.w4.breakpoints.lg}) {
    gap: ${l.w4.spacing.md};
  }

  /* Mobile: stack everything in a single full-width column. */
  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,s().div`
  grid-column: ${({fullWidth:e,colSpan:t})=>e?"1 / -1":`span ${t}`};
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${eq} 0.25s ease both;

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-column: span 1;
  }
`,s().div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  margin-bottom: 0;
  height: 20px;
`,s().div`
  --panel-accent: ${({accent:e})=>e??l.w4.colors.accent};
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: ${({minH:e})=>e}px;
  height: 100%;
  padding: ${l.w4.spacing.lg};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  transition:
    border-color ${l.w4.transitions.base},
    box-shadow ${l.w4.transitions.base},
    transform ${l.w4.transitions.base};

  /* Left accent bar */
  &::before {
    content: '';
    position: absolute;
    top: 14px; bottom: 14px; left: 0;
    width: 2px;
    background: var(--panel-accent);
    border-radius: 0 2px 2px 0;
    opacity: 0.7;
  }

  /* Grip visual affordance left edge */
  &[data-grip='true']::after {
    content: '';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 24px;
    border-left: 2px dotted ${l.w4.colors.borderSubtle};
    border-right: 2px dotted ${l.w4.colors.borderSubtle};
    opacity: 0.4;
  }

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px ${l.w4.colors.shadow};
  }

  /* WidgetShell owns its chrome — zero ours to avoid double frame. */
  &:has(> [data-widget-shell]) {
    padding: 0;
    background: transparent;
    border-color: transparent;
  }
  &:has(> [data-widget-shell])::before,
  &:has(> [data-widget-shell])::after { display: none; }
  &:has(> [data-widget-shell]):hover {
    border-color: transparent;
    box-shadow: none;
    transform: none;
  }

  /* Controls visible on hover (pointer devices); always slightly visible on touch. */
  &:hover .panel-controls { opacity: 1; }

  @media (hover: none) {
    .panel-controls {
      opacity: 0.4;
      transform: scale(0.87);
      transform-origin: top right;
    }
  }
`,s().div`
  position: absolute;
  top: -14px;
  right: 6px;
  display: flex;
  align-items: center;
  gap: 2px;
  opacity: 0;
  transition: opacity ${l.w4.transitions.fast};
  z-index: 2;
`;let eJ=s().button`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition:
    color ${l.w4.transitions.fast},
    border-color ${l.w4.transitions.fast},
    background ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.mainText};
    border-color: ${l.w4.colors.mainTextMuted};
    background: ${l.w4.colors.surfaceRaised};
  }
`;s()(eJ)`
  &:hover {
    color: #f85149;
    border-color: rgba(248, 81, 73, 0.4);
  }
`;let eQ=(0,$.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;s().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${eQ} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${l.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${l.w4.colors.surface};
  }
`,s().span`
  display: block;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${l.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${l.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${l.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${l.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,s().div`
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,s().div`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
`,s().input`
  width: 100%;
  padding: 8px 12px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.sidebarTextMuted}; }
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,s().button`
  padding: 7px 18px;
  border-radius: ${l.w4.borderRadius.md};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:t})=>t?"rgba(248,81,73,0.12)":e?l.w4.colors.accent:"none"};
  color: ${({primary:e,danger:t})=>t?l.w4.colors.danger:e?"#fff":l.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:t})=>t?l.w4.colors.danger:e?l.w4.colors.accent:l.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,s().div`
  height: 1px;
  background: ${l.w4.colors.border};
  margin: 0 -4px;
`,s().div`
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`;let eU=(0,$.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,eX=(0,$.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`;s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${l.w4.spacing.md};
  animation: ${eU} 0.15s ease both;
`,s().div`
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?l.w4.colors.danger+"55":l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${l.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${eX} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,s().div`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?l.w4.colors.danger:l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
`,s().div`
  font-size: ${l.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${l.w4.spacing.sm};
`,s().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast},
    border-color ${l.w4.transitions.fast},
    color ${l.w4.transitions.fast},
    opacity ${l.w4.transitions.fast};

  background: ${({primary:e,danger:t})=>t?l.w4.colors.danger:e?l.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:t})=>t||e?"#fff":l.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:t})=>t?l.w4.colors.danger:e?l.w4.colors.accent:l.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${l.w4.focusRing} }
`;let eZ=(0,$.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,e0=(0,$.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,e1=(0,$.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${l.w4.colors.mainBg};
  font-family: ${l.w4.typography.fontFamily};
  animation: ${eZ} 0.4s ease 0.15s both;
`,s().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,s().div`
  position: absolute;
  inset: 0;
  animation: ${e0} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${({delay:e})=>e}s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({size:e})=>e}px;
    height: ${({size:e})=>e}px;
    border-radius: 50%;
    background: ${({color:e})=>e};
    box-shadow: 0 0 8px ${({color:e})=>e}44;
  }
`,s().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${l.w4.colors.border};
  animation: ${e1} 1.4s ease-in-out infinite;
`,s().span`
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`,s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${l.w4.spacing.sm};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,s().div`
  position: relative;
`;let e2="260px",e4="56px",e5="48px",e3=s().header`
  display: flex;
  align-items: center;
  height: calc(${e5} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${l.w4.colors.sidebarBg};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);

  /* Mobile: logo + app label on row 1, scrollable chrome cluster on row 2. */
  @media (max-width: ${l.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(${e5} + env(safe-area-inset-top, 0px));
  }
`,e6=s().div`
  width: ${e4};
  min-width: ${e4};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,e8=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,e7=(0,$.keyframes)`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,e9=s().button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${l.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${l.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,te=s().span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${e7} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`
    background: linear-gradient(135deg, ${l.w4.colors.accent}, ${l.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`,tt=s().div`
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  padding-left: ${l.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 0;

  &::before {
    content: '/';
    margin-right: ${l.w4.spacing.sm};
    color: ${l.w4.colors.border};
  }
`,ta=s().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${l.w4.spacing.md};
  padding: 0 ${l.w4.spacing.lg};
  min-width: 0;

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${l.w4.spacing.sm};
  }

  /* Full-width second row on mobile, horizontally scrollable.
     Align to the right so the avatar / bell stay flush with the
     viewport edge — matches desktop end-alignment. */
  @media (max-width: ${l.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    justify-content: flex-end;
    padding: ${l.w4.spacing.xs} ${l.w4.spacing.sm};
    gap: ${l.w4.spacing.xs};
    border-top: 1px solid ${l.w4.colors.sidebarBorder};
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }

    > section + section,
    > *:not(section) + section {
      margin-left: 0;
    }
  }
`,to=s().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,tr=s().div`
  display: flex;
  flex-direction: column;
  height: ${l.w4.sizes.fullHeight};
  background: ${l.w4.colors.mainBg};
  font-family: ${l.w4.typography.fontFamily};
  color: ${l.w4.colors.mainText};
  overflow: hidden;
`,ti=s().aside`
  width: ${({collapsed:e})=>e?e4:e2};
  min-width: ${({collapsed:e})=>e?e4:e2};
  background: ${l.w4.colors.sidebarBg};
  border-right: 1px solid ${l.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,tn=s().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,ts=s().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,tl=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function td(){return(0,o.jsx)(e9,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:tl.map((e,t)=>(0,o.jsx)(te,{index:t,accent:e.accent,children:e.char},t))})}let tc="atlantis:sidebar-collapsed";function tp({sidebar:e,children:t,topBarRight:n,title:s="Atlantis",activeId:l=null}){let[d,c]=(0,r.useState)(()=>{try{return"true"===localStorage.getItem(tc)}catch{return!1}}),[p,h]=(0,r.useState)(null),g=(0,r.useRef)(),f=()=>c(e=>{let t=!e;try{localStorage.setItem(tc,String(t))}catch{}return t}),m=i().useMemo(()=>i().lazy(()=>Promise.resolve().then(a.bind(a,45816)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,o.jsx)(e_.I.Provider,{value:{collapsed:d,toggle:f,flyout:p,openFlyout:(e,t,a)=>{clearTimeout(g.current),h({entry:e,anchorY:t,onSelect:a})},scheduleFlyoutClose:()=>{g.current=setTimeout(()=>h(null),160)},cancelFlyoutClose:()=>clearTimeout(g.current)},children:(0,o.jsxs)(tr,{children:[(0,o.jsxs)(e3,{children:[e&&(0,o.jsx)(e6,{children:(0,o.jsx)(e8,{onClick:f,title:d?"Expand sidebar":"Collapse sidebar",children:(0,o.jsxs)("svg",{width:17,height:17,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),(0,o.jsx)("path",{d:"M9 3v18"})]})})}),(0,o.jsx)(td,{}),s&&(0,o.jsx)(tt,{children:s}),n&&(0,o.jsx)(ta,{children:n})]}),(0,o.jsxs)(to,{children:[null!=e&&(0,o.jsx)(ti,{collapsed:d,children:(0,o.jsx)(tn,{children:e})}),(0,o.jsx)(ts,{children:t})]}),p&&(0,o.jsx)(i().Suspense,{fallback:null,children:(0,o.jsx)(m,{activeId:l})})]})})}s().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,s().div`
  overflow: hidden;
`,s().div`
  padding-left: ${l.w4.spacing.md};
`,s().div`
  display: flex;
  flex-direction: column;
`,s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${l.w4.spacing.sm} ${l.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":l.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${l.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${l.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${l.w4.colors.sidebarText};
    background: ${l.w4.colors.sidebarHover};
  }
`,s().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,s().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,s().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${l.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${l.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?l.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?l.w4.colors.sidebarActive:l.w4.colors.sidebarText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${l.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${l.w4.borderRadius.md} ${l.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.mainText};
  }
`,a(45816),s().div`
  padding: ${l.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,s().section`
  scroll-margin-top: ${l.w4.spacing.lg};
`,s().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
`,s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${l.w4.spacing.xl};

  @media (max-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,s().div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${l.w4.colors.mainBg};
  font-family: ${l.w4.typography.fontFamily};
  color: ${l.w4.colors.mainText};
  overflow: hidden;
`,s().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${l.w4.colors.sidebarBg};
  border-bottom: 1px solid ${l.w4.colors.sidebarBorder};
  padding-left: max(${l.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${l.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${l.w4.spacing.sm};
  z-index: 100;
`,s().button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${l.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${l.w4.colors.accent}; }
`,s().span`
  color: ${l.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,s().div`
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,s().span`
  font-weight: 400;
  color: ${l.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,s().div`
  flex: 1;
`},9391(e,t,a){a.d(t,{O:()=>n});var o=a(65723);a(37991);var r=a(80884);let i={sm:20,md:24,lg:28};function n({member:e,size:t="md"}){let a="number"==typeof t?t:i[t];return(0,o.jsx)(r.eu,{member:e,size:a})}},85043(e,t,a){a.d(t,{Y:()=>p});var o=a(65723),r=a(36859),i=a.n(r),n=a(6063);let s=i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 80px;
  gap: 6px;
  padding: ${n.w4.spacing.md};
`,l=i().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({mode:e})=>n.w4.colors.mainTextMuted};
  opacity: ${({mode:e})=>"loading"===e?.5:.7};
`,d=i().p`
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  opacity: 0.6;
  text-align: center;
  max-width: 240px;
  margin: 0;
  line-height: 1.5;
`,c={loading:"◌ Loading",empty:"◎ Empty",error:"◎ Offline"};function p({mode:e,label:t,body:a}){return(0,o.jsxs)(s,{children:[(0,o.jsx)(l,{mode:e,children:t??c[e]}),a&&(0,o.jsx)(d,{children:a})]})}},96246(e,t,a){a.d(t,{OW:()=>s,ik:()=>p,kl:()=>u,RT:()=>m,YG:()=>o.Y});var o=a(85043),r=a(65723),i=a(37991),n=a(6063);function s({points:e,accent:t=n.w4.colors.accent,width:a=60,height:o=28,strokeWidth:l=1.5,fluid:d=!1}){let c=(0,i.useMemo)(()=>{if(e.length<2)return"";let t=Math.min(...e),r=Math.max(...e)-t||1,i=a-2*l,n=o-2*l;return e.map((a,o)=>{let s=l+o/(e.length-1)*i,d=l+n-(a-t)/r*n;return`${0===o?"M":"L"} ${s.toFixed(1)} ${d.toFixed(1)}`}).join(" ")},[e,a,o,l]),p=(0,i.useMemo)(()=>{if(e.length<1)return null;let t=e[e.length-1],r=Math.min(...e),i=a-2*l,n=o-2*l;return{x:l+i,y:l+n-(t-r)/(Math.max(...e)-r||1)*n}},[e,a,o,l]);return c?(0,r.jsxs)("svg",{width:d?"100%":a,height:d?"auto":o,viewBox:`0 0 ${a} ${o}`,preserveAspectRatio:"xMidYMid meet","aria-hidden":"true",style:{display:"block",flexShrink:+!!d},children:[(0,r.jsx)("path",{d:c,fill:"none",stroke:t,strokeWidth:l,strokeLinecap:"round",strokeLinejoin:"round",opacity:.7}),p&&(0,r.jsx)("circle",{cx:p.x,cy:p.y,r:l+1,fill:t})]}):null}var l=a(36859),d=a.n(l);d().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
  color: ${({sign:e})=>"pos"===e?n.w4.colors.success:"neg"===e?n.w4.colors.danger:n.w4.colors.mainTextMuted};
  white-space: nowrap;
`,d().div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${n.w4.spacing.sm};
  padding: 4px 0;
  cursor: default;
  transition: background 0.12s;
  border-radius: 3px;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
  }
`,d().a`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${n.w4.spacing.sm};
  padding: 4px 0;
  text-decoration: none;
  color: inherit;
  border-radius: 3px;
  transition: background 0.12s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
  }
`,d().div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
`,d().span`
  font-size: 13px;
  color: ${n.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
`,d().span`
  font-size: 11px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.mainTextMuted};
  opacity: 0.75;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,d().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  color: ${n.w4.colors.mainTextMuted};
  white-space: nowrap;
  flex-shrink: 0;
  text-align: right;
`,a(83090);let c="'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";function p({data:e,budget:t,height:a=200,animation:o="rise"}){let s=(0,i.useId)();if(!e.length)return null;let l=1.1*Math.max(...e.map(e=>e.segments.reduce((e,t)=>e+t.value,0)+(e.over??0)),t??0)||1,d=472,h=a-20-24,g=472/e.length*.58,f=d/e.length,m="rise"===o?{transformOrigin:"bottom",animation:`${s}_rise 0.45s ease-out both`}:{};return(0,r.jsxs)(r.Fragment,{children:["rise"===o&&(0,r.jsx)("style",{children:`
          @keyframes ${s}_rise {
            from { transform: scaleY(0); }
            to   { transform: scaleY(1); }
          }
        `}),(0,r.jsxs)("svg",{viewBox:`0 0 520 ${a}`,style:{width:"100%",height:a},preserveAspectRatio:"xMidYMid meet","aria-hidden":"true",children:[null!=t?(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:40,x2:40+d,y1:20+h-t/l*h,y2:20+h-t/l*h,stroke:n.w4.colors.border,strokeDasharray:"3 3",strokeWidth:"1"}),(0,r.jsxs)("text",{x:36,y:20+h-t/l*h+3,textAnchor:"end",fontFamily:c,fontSize:"9",fill:n.w4.colors.mainTextMuted,children:["€",t]})]}):null,e.map((e,t)=>{let o,i=40+t*f+(f-g)/2,s=20+h;return(0,r.jsxs)("g",{style:m,children:[e.segments.map(e=>{let t=e.value/l*h;return s-=t,(0,r.jsx)("rect",{x:i,y:s,width:g,height:t,fill:e.color,opacity:.85},e.id)}),null!=e.over&&e.over>0?(o=e.over/l*h,s-=o,(0,r.jsx)("rect",{x:i,y:s,width:g,height:o,fill:"#f85149",opacity:.7},"over")):null,(0,r.jsx)("text",{x:i+g/2,y:a-6,textAnchor:"middle",fontFamily:c,fontSize:"10",fill:n.w4.colors.mainTextMuted,children:e.label})]},e.label)})]})]})}let h=["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"],g=["S","T","Q","Q","S","S","D"],f=["S","M","T","W","T","F","S"];function m({data:e,cellSize:t=10,gap:a=2,locale:o="pt",tooltip:s}){let l=(0,i.useId)();if(!e.length)return null;let d=24+Math.ceil(e.length/7)*(t+a),c=14+7*(t+a);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes ${l}_fade { from { opacity: 0; } to { opacity: 1; } }
      `}),(0,r.jsxs)("svg",{viewBox:`0 0 ${d} ${c}`,preserveAspectRatio:"xMidYMid meet",style:{width:"100%",height:"auto",maxHeight:220,display:"block"},"aria-hidden":"true",children:[(0,r.jsx)("g",{fontFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSize:"8",fill:n.w4.colors.mainTextMuted,children:("pt"===o?g:f).map((e,o)=>(0,r.jsx)("text",{x:"0",y:10+o*(t+a),children:e},o))}),e.map((e,o)=>{let i=18+Math.floor(o/7)*(t+a),n=2+o%7*(t+a),d=h[Math.max(0,Math.min(4,e))]??h[0],c=s?.(o,e);return(0,r.jsx)("rect",{x:i,y:n,width:t,height:t,fill:d,rx:"1",style:{animation:`${l}_fade 0.3s ease-out ${8*o}ms both`},children:c?(0,r.jsx)("title",{children:c}):null},o)})]})]})}function x(e){let t=0;for(let a=1;a<e.length;a++){let o=e[a][0]-e[a-1][0],r=e[a][1]-e[a-1][1];t+=Math.sqrt(o*o+r*r)}return t}function u({spent:e,budget:t,height:a=60}){let o=(0,i.useId)(),s=1.05*t||1,l=Array.from({length:8},(e,a)=>t-t/7*a),d=Math.min(e/(t||1),1),c=Array.from({length:8},(e,a)=>Math.max(0,t-a/7*t*d*1.1)),p=l.map((e,t)=>[320*t/7,a-e/s*(a-5)]),h=c.map((e,t)=>[320*t/7,a-e/s*(a-5)]),g=p.map(e=>e.join(",")).join(" "),f=h.map(e=>e.join(",")).join(" "),m=x(p).toFixed(1),w=x(h).toFixed(1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes ${o}_i { from { stroke-dashoffset: ${m}; } }
        @keyframes ${o}_a { from { stroke-dashoffset: ${w}; } }
      `}),(0,r.jsxs)("svg",{viewBox:`0 0 320 ${a}`,style:{width:"100%",height:a},preserveAspectRatio:"none","aria-hidden":"true",children:[(0,r.jsx)("line",{x1:"0",x2:320,y1:a-5,y2:a-5,stroke:n.w4.colors.border,strokeDasharray:"3 3",strokeWidth:"1"}),(0,r.jsx)("polyline",{points:g,stroke:n.w4.colors.mainTextMuted,strokeWidth:"1",strokeDasharray:`${m} ${m}`,strokeDashoffset:"0",fill:"none",style:{strokeDasharray:"2 3",animation:`${o}_i 0.45s ease-out both`}}),(0,r.jsx)("polyline",{points:f,stroke:"#7fb77e",strokeWidth:"1.5",strokeDasharray:`${w} ${w}`,strokeDashoffset:"0",fill:"none",strokeLinecap:"round",style:{animation:`${o}_a 0.45s ease-out 0.08s both`}})]})]})}d().div`
  position: relative;
  height: 6px;
  background: ${n.w4.colors.border};
  border-radius: 3px;
  overflow: hidden;
`,d().div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 3px;
  width: ${({pct:e})=>Math.min(100,e)}%;
  background: ${({color:e})=>e};
  transition: width 400ms ease;
`,d().div`
  position: absolute;
  top: 0;
  height: 100%;
  left: ${({left:e})=>e}%;
  width: ${({width:e})=>e}%;
  background: ${"#f85149"};
  opacity: 0.7;
  transition: width 400ms ease;
`,a(9391),d().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  height: 28px;
  min-height: 44px; /* touch target */
  border-radius: 999px;
  border: 1px solid ${({selected:e,color:t})=>e?t:n.w4.colors.border};
  background: ${({selected:e,color:t})=>e?`${t}22`:n.w4.colors.surface};
  color: ${n.w4.colors.mainText};
  font-size: 13px;
  font-family: ${n.w4.typography.fontFamily};
  cursor: pointer;
  white-space: nowrap;
  transition: border-color 120ms ease, background 120ms ease;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    border-color: ${({color:e})=>e};
    background: ${({color:e})=>`${e}11`};
  }

  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,d().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  color: ${n.w4.colors.mainTextMuted};
`},83090(e,t,a){a.d(t,{B:()=>r});var o=a(28751);function r(e){let t=(0,o.cacheBackedProducer)({id:e.id,category:e.category,cacheKey:e.cacheKey,parse:e.parse});return{id:e.id,category:e.category,labelKey:e.labelKey,defaultEnabled:e.defaultEnabled,producer:t,start(){},stop(){}}}},87517(e,t,a){a.d(t,{A:()=>o});let o={id:"habits",load:()=>Promise.all([a.e("44"),a.e("45")]).then(a.bind(a,26780)).then(e=>({default:e.HabitsWidget})),labels:{en:"Habits Grid",pt:"Grelha de H\xe1bitos"},descriptions:{en:"Your last 7 days of missions",pt:"Os teus \xfaltimas 7 dias de miss\xf5es"},icon:"\uD83C\uDFAF",accentColor:"#fb923c",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:200,suite:"vida",defaultOnDashboard:!0,sources:[{id:"daily-progress",kind:"bll-hook",cacheKey:"daily:progress",labelKey:"sources.dailyProgress"}],notifications:[{id:"daily",category:"daily.overdue",labelKey:"notifications.source.daily",producer:(0,a(28751).dailyProducer)({category:"daily.overdue"}),start(){},stop(){}}],persistedKeys:["daily:progress"]}},32013(e,t,a){a.d(t,{A:()=>i});var o=a(66053),r=a(28751);let i={id:"hackernews-hot",load:()=>Promise.all([a.e("44"),a.e("390")]).then(a.bind(a,33565)).then(e=>({default:e.HackerNewsHotWidget})),labels:{en:"Hacker News Hot",pt:"Em Alta no HN"},descriptions:{en:"Top stories from Hacker News",pt:"Hist\xf3rias em destaque no Hacker News"},icon:"\uD83D\uDD25",accentColor:"#f97316",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"hn-firebase",kind:"dal-client",cacheKey:"internet-hn-ids",labelKey:"sources.hackerNews",notifiable:!0}],notifications:[{id:"hn-front-page",category:"hn.frontPage",labelKey:"notifications.source.hnFrontPage",producer:{id:"hn-front-page",category:"hn.frontPage",async poll(){if((0,r.isMutedNow)("hn.frontPage"))return[];let e=await (0,o.fetchHnFrontPage)(5);if(!e?.hits)return[];let t=[];for(let a of e.hits){let e=a.created_at_i??(a.created_at?Date.parse(a.created_at)/1e3:NaN);Number.isFinite(e)&&t.push({id:`hn-front:${a.objectID}`,category:"hn.frontPage",ts:1e3*e,title:a.title,link:a.url??`https://news.ycombinator.com/item?id=${a.objectID}`,meta:{points:a.points,comments:a.num_comments}})}return t}},start(){},stop(){}}],persistedKeys:["widget-cache:internet-hn-ids"]}},69454(e,t,a){a.d(t,{OW:()=>o.OW,ik:()=>o.ik,kl:()=>o.kl,RT:()=>o.RT,YG:()=>o.YG}),a(28751),a(87517),a(32013),a(19603),a(72026),a(25471),a(55417),a(54200),a(52306),a(89780);var o=a(96246);a(65723),a(37991);var r=a(36859),i=a.n(r),n=a(72799),s=a(6063);a(80884),a(28170);let l=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`;i().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
  gap: 8px;
  flex: 1;
  align-content: start;
  animation: ${l} 0.25s ease both;
`,i().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 4px;
  background: ${({accentColor:e})=>`${e}08`};
  border: 1px solid ${({accentColor:e})=>`${e}20`};
  border-radius: ${s.w4.borderRadius.md};
  cursor: pointer;
  transition: background ${s.w4.transitions.base}, border-color ${s.w4.transitions.base}, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    background: ${({accentColor:e})=>`${e}18`};
    border-color: ${({accentColor:e})=>`${e}40`};
    transform: scale(1.05);
  }
  &:active { transform: scale(0.95); }
`,i().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({tint:e})=>e};
`,i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainText};
  font-weight: 500;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  opacity: 0.5;
  text-align: center;
  line-height: 1.5;
`},19603(e,t,a){a.d(t,{A:()=>n});var o=a(28751),r=a(83090);function i(e){return function(t){if(!t?.items)return[];let a=[];return t.items.forEach(t=>{let r=Date.parse(t.pubDate);if(Number.isNaN(r)||(0,o.classifyPtNewsItem)(t.title,t.description)!==e)return;let i=t.link||t.title;a.push({id:`news-pt-${e}:${i}`,ts:r,title:t.title,link:t.link})}),a}}let n={id:"news-pt",load:()=>Promise.all([a.e("44"),a.e("392")]).then(a.bind(a,71507)).then(e=>({default:e.NewsPortugalWidget})),labels:{en:"PT News",pt:"Not\xedcias PT"},descriptions:{en:"Latest news from RTP",pt:"\xdaltimas not\xedcias da RTP"},icon:"\uD83D\uDCF0",accentColor:"#2da44e",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"rtp-rss",kind:"cache-key",cacheKey:"news-portugal",labelKey:"sources.rtp",notifiable:!0}],notifications:[(0,r.B)({id:"news-pt-tech",category:"news.pt.tech",labelKey:"notifications.source.newsPtTech",badgeColor:"#a371f7",cacheKey:"news-portugal",parse:i("tech")}),(0,r.B)({id:"news-pt-sports",category:"news.pt.sports",labelKey:"notifications.source.newsPtSports",badgeColor:"#3fb950",cacheKey:"news-portugal",parse:i("sports")}),(0,r.B)({id:"news-pt-business",category:"news.pt.business",labelKey:"notifications.source.newsPtBusiness",badgeColor:"#d29922",cacheKey:"news-portugal",parse:i("business")}),(0,r.B)({id:"news-pt-general",category:"news.pt.general",labelKey:"notifications.source.newsPtGeneral",badgeColor:"#2da44e",cacheKey:"news-portugal",parse:i("general")})],persistedKeys:["widget-cache:news-portugal"]}},72026(e,t,a){a.d(t,{A:()=>o});let o={id:"news-world",load:()=>Promise.all([a.e("44"),a.e("566")]).then(a.bind(a,94925)).then(e=>({default:e.NewsWorldWidget})),labels:{en:"World News",pt:"Not\xedcias Mundo"},descriptions:{en:"Latest news from CNN",pt:"\xdaltimas not\xedcias da CNN"},icon:"\uD83C\uDF0D",accentColor:"#cc0000",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"cnn-rss",kind:"cache-key",cacheKey:"news-world",labelKey:"sources.cnn",notifiable:!0}],notifications:[(0,a(83090).B)({id:"news-world",category:"news.world",labelKey:"notifications.source.newsWorld",badgeColor:"#cc0000",cacheKey:"news-world",parse:function(e){if(!e?.items)return[];let t=[];return e.items.forEach((e,a)=>{let o=Date.parse(e.pubDate);Number.isNaN(o)||t.push({id:`${o}-${a}`,ts:o,title:e.title,link:e.link})}),t}})],persistedKeys:["widget-cache:news-world"]}},25471(e,t,a){a.d(t,{A:()=>r});var o=a(83090);let r={id:"seismic",load:()=>Promise.all([a.e("44"),a.e("773")]).then(a.bind(a,38108)).then(e=>({default:e.SeismicWidget})),labels:{en:"PT Seismic",pt:"Sismicidade PT"},descriptions:{en:"Recent seismic activity in Portugal",pt:"Atividade s\xedsmica recente em Portugal"},icon:"\uD83C\uDF0B",accentColor:"#f97316",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"ipma",kind:"dal-client",cacheKey:"seismic-pt",labelKey:"sources.ipma",notifiable:!0},{id:"usgs",kind:"dal-client",cacheKey:"seismic-world",labelKey:"sources.usgs",notifiable:!0}],notifications:[(0,o.B)({id:"seismic-pt",category:"seismic.pt",labelKey:"notifications.source.seismicPt",badgeColor:"#f97316",cacheKey:"seismic-pt",parse:function(e){if(!Array.isArray(e))return[];let t=[];return e.forEach((e,a)=>{let o=Date.parse(e.time);if(Number.isNaN(o))return;let r=e.local||e.obsRegion||"?";t.push({id:`pt-${o}-${a}`,ts:o,title:`M ${e.mag.toFixed(1)} — ${r}`})}),t}}),(0,o.B)({id:"seismic-world",category:"seismic.world",labelKey:"notifications.source.seismicWorld",badgeColor:"#ea580c",cacheKey:"seismic-world",parse:function(e){return e?.features?e.features.map(e=>({id:e.id,ts:e.properties.time,title:`M ${e.properties.mag.toFixed(1)} — ${e.properties.place}`,link:e.properties.url})):[]}})],persistedKeys:["widget-cache:seismic-pt","widget-cache:seismic-world"]}},55417(e,t,a){a.d(t,{A:()=>i});var o=a(66053),r=a(28751);let i={id:"techscope",load:()=>Promise.all([a.e("44"),a.e("923")]).then(a.bind(a,4942)).then(e=>({default:e.TechScopeLiveWidget})),labels:{en:"TechScope Live",pt:"TechScope Ao Vivo"},descriptions:{en:"Trending GitHub repos and Hacker News stories",pt:"Reposit\xf3rios GitHub e hist\xf3rias do Hacker News em alta"},icon:"⚡",accentColor:"#a371f7",defaultSize:"lg",defaultCols:2,maxCols:2,minHeight:240,suite:"learn",defaultOnDashboard:!0,sources:[{id:"github-trending",kind:"cache-key",cacheKey:"techscope-gh",labelKey:"sources.github",notifiable:!0},{id:"hn-algolia",kind:"cache-key",cacheKey:"techscope-hn",labelKey:"sources.hackerNews",notifiable:!0}],notifications:[{id:"github-trending",category:"github.trending",labelKey:"notifications.source.githubTrending",producer:{id:"github-trending",category:"github.trending",async poll(){if((0,r.isMutedNow)("github.trending"))return[];let e=await (0,o.fetchTrendingRepos)({days:7,perPage:5});if(!e?.items)return[];let t=[];for(let a of e.items){let e=a.created_at?Date.parse(a.created_at):NaN;if(!Number.isFinite(e))continue;let o=a.stargazers_count,r=a.language?` \xb7 ${a.language}`:"";t.push({id:`gh-trending:${a.id}`,category:"github.trending",ts:e,title:`${a.full_name} — ${o.toLocaleString()}★${r}`,link:a.html_url,meta:{stars:o,language:a.language,description:a.description}})}return t}},start(){},stop(){}},{id:"devto-weekly",category:"devto.weekly",labelKey:"notifications.source.devto",producer:{id:"devto-weekly",category:"devto.weekly",async poll(){if((0,r.isMutedNow)("devto.weekly"))return[];let e=await (0,o.fetchDevToArticles)({top:7,perPage:5});if(!e)return[];let t=[];for(let a of e){let e=Date.parse(a.published_at);if(!Number.isFinite(e))continue;let o=a.public_reactions_count??0,r=a.user?.name||a.user?.username,i=r?` — ${r}`:"";t.push({id:`devto:${a.id}`,category:"devto.weekly",ts:e,title:`${a.title}${i}`,link:a.url,meta:{reactions:o,comments:a.comments_count??0,readingTime:a.reading_time_minutes??null,tags:a.tag_list??[]}})}return t}},start(){},stop(){}}],persistedKeys:["widget-cache:techscope-gh","widget-cache:techscope-hn"]}},54200(e,t,a){a.d(t,{A:()=>o});let o={id:"trending-searches",load:()=>Promise.all([a.e("44"),a.e("346")]).then(a.bind(a,32065)).then(e=>({default:e.TrendingSearchesWidget})),labels:{en:"Trending Searches",pt:"Pesquisas em Alta"},descriptions:{en:"Top Google trending searches right now",pt:"As pesquisas mais populares no Google agora"},icon:"\uD83D\uDD0D",accentColor:"#e233ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"google-trends-rss",kind:"cache-key",cacheKey:"internet-trends",labelKey:"sources.googleTrends",notifiable:!0}],notifications:[(0,a(83090).B)({id:"trending-daily",category:"trending.daily",labelKey:"notifications.source.trending",badgeColor:"#e233ff",cacheKey:"internet-trends",parse:function(e){let t=e?.items?.[0];return t?[{id:new Date().toISOString().slice(0,10),ts:Date.now(),title:t.title,link:t.link}]:[]},defaultEnabled:!1})],persistedKeys:["widget-cache:internet-trends"]}},52306(e,t,a){a.d(t,{A:()=>n});var o=a(83090);let r={yellow:"\uD83D\uDFE1",orange:"\uD83D\uDFE0",red:"\uD83D\uDD34"},i={yellow:"Yellow",orange:"Orange",red:"Red"},n={id:"weather",load:()=>Promise.all([a.e("44"),a.e("693")]).then(a.bind(a,15940)).then(e=>({default:e.WeatherWidget})),labels:{en:"Weather",pt:"Meteorologia"},descriptions:{en:"Current weather for Lisbon",pt:"Meteorologia atual em Lisboa"},icon:"\uD83C\uDF24️",accentColor:"#58a6ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:280,suite:"vida",defaultOnDashboard:!0,sources:[{id:"openMeteo",kind:"cache-key",cacheKey:"weather-lisbon",labelKey:"sources.openMeteo",notifiable:!0}],notifications:[(0,o.B)({id:"ipma-warnings",category:"weather.pt.warnings",labelKey:"notifications.source.weatherPt",badgeColor:"#facc15",cacheKey:"ipma-warnings",parse:function(e){if(!Array.isArray(e))return[];let t=Date.now(),a=[];return e.forEach((e,o)=>{if("green"===e.awarenessLevelID||"yellow"===e.awarenessLevelID)return;let n=Date.parse(e.endTime);if(Number.isNaN(n)||n<t)return;let s=Date.parse(e.startTime);if(Number.isNaN(s))return;let l=e.awarenessLevelID,d=r[l]??"⚠",c=i[l]??e.awarenessLevelID.toUpperCase(),p=e.idAreaAviso||"Portugal",h=e.awarenessTypeName?e.awarenessTypeName.toLowerCase():"weather";a.push({id:`ipma-warn:${p}-${s}-${o}`,ts:s,title:`${d} ${c} ${h} warning — ${p}`,link:"https://www.ipma.pt/en/otempo/prev-sam/"})}),a}})]}},89780(e,t,a){a.d(t,{A:()=>n});var o=a(83090);let r=new Set(["Main_Page","Special:Search","Wikipedia:Featured_pictures","-","Special:Watchlist","Portal:Current_events"]);function i(){return new Date(Date.now()-864e5).toISOString().slice(0,10)}let n={id:"wiki-most-read",load:()=>Promise.all([a.e("44"),a.e("545")]).then(a.bind(a,45464)).then(e=>({default:e.WikiMostReadWidget})),labels:{en:"Wikipedia Top",pt:"Mais Lido na Wikip\xe9dia"},descriptions:{en:"Most read articles on Wikipedia today",pt:"Artigos mais lidos na Wikip\xe9dia hoje"},icon:"\uD83D\uDCD6",accentColor:"#58a6ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"wikipedia-pageviews",kind:"cache-key",labelKey:"sources.wikipedia",notifiable:!0}],notifications:[(0,o.B)({id:"wiki-top-read",category:"wiki.topRead",labelKey:"notifications.source.wikiTopRead",badgeColor:"#58a6ff",cacheKey:()=>`internet-wiki-${i()}`,parse:function(e){let t=(e?.items?.[0]?.articles??[]).find(e=>!r.has(e.article));if(!t)return[];let a=i(),o=t.article.replace(/_/g," ");return[{id:a,ts:Date.now(),title:o,link:`https://en.wikipedia.org/wiki/${encodeURIComponent(t.article)}`}]},defaultEnabled:!1})]}}}]);