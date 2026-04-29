"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["335"],{32988(e,t,a){a.d(t,{I:()=>l});var r=a(65723),o=a(36859),i=a.n(o),n=a(21571);let s=i().span`
  position: absolute;
  top: ${({top:e})=>e}px;
  right: ${({right:e})=>e}px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${n.yl};
  opacity: ${({opacity:e})=>e};
  box-shadow: 0 0 8px rgba(232, 154, 92, 0.7);
  pointer-events: none;
`;function l({variant:e="hero"}){return"compact"===e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{top:10,right:28,opacity:.7}),(0,r.jsx)(s,{top:22,right:20,opacity:.4})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{top:18,right:22,opacity:.95}),(0,r.jsx)(s,{top:42,right:14,opacity:.7}),(0,r.jsx)(s,{top:66,right:26,opacity:.45})]})}},21571(e,t,a){a.d(t,{m5:()=>i,xF:()=>n,yl:()=>o,Js:()=>r});let r=a(58085).default.color,o="#e89a5c",i="#5fb3d9",n=`
  radial-gradient(circle at 12% 18%, rgba(127, 183, 126, 0.10), transparent 55%),
  radial-gradient(circle at 88% 90%, rgba(232, 154, 92, 0.08), transparent 60%),
  linear-gradient(135deg, #14241c 0%, #0f1612 100%)
`},90429(e,t,a){a.d(t,{N:()=>S});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(72799),l=a(6063),d=a(63236),c=a(69454),p=a(21571),m=a(32988);let g={month:30,"3m":90,"6m":183,year:365,all:null},h=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=n().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${h} 0.25s ease both;
`,x=n().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
`,u=n().div`
  position: relative;
  overflow: hidden;
  background: ${p.xF};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${p.Js};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.sm} 0;
`,w=n().div`
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
`,b=n().div`
  width: 24px;
  height: 24px;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}1f`};
  color: ${({color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
`,y=n().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,$=n().span`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,v=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,k=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainTextMuted};
  text-align: right;

  @media (max-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,j=n().div`
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
    color: ${p.Js};
    background: ${l.w4.colors.mainBg};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,z={fast:p.Js,meal:"#58a6ff",weight:"#d29922",walk:"#a371f7"},T={fast:"flame",meal:"utensils",weight:"gauge",walk:"activity"};function F(e){let[t,a,r]=e.split("-").map(e=>parseInt(e,10));return new Date(t,(a??1)-1,r??1).getTime()}function S({data:e,t,locale:a,onEditFast:i,onEditMeal:n,onDuplicateMeal:s,onEditWeight:l,onDeleteFast:p,onDeleteMeal:h,onDeleteWeight:C,onDeleteWalk:A}){let[D,R]=(0,o.useState)("all"),[I,L]=(0,o.useState)("month"),E=(0,o.useMemo)(()=>(function(e,t){let a=[];for(let r of e.sessions){let e=r.endedAt?(r.endedAt-r.startedAt)/36e5:(Date.now()-r.startedAt)/36e5;a.push({kind:"fast",ts:r.startedAt,id:r.id,editable:!0,primary:r.endedAt?`${t("forma.activities.fast.completed")} \xb7 ${e.toFixed(1)}h`:`${t("forma.activities.fast.inProgress")} \xb7 ${e.toFixed(1)}h`,meta:`${r.protocol} \xb7 ${t("forma.activities.fast.target")} ${r.targetHours}h`})}for(let r of e.meals){let e="forma.meal."+r.slot,o=[];r.proteinG&&o.push(`${r.proteinG}g ${t("forma.activities.protein")}`),r.kcal&&o.push(`${r.kcal} kcal`),a.push({kind:"meal",ts:r.createdAt??F(r.date),id:r.id,editable:!0,primary:`${t(e)}${r.notes?` \xb7 ${r.notes}`:""}`,meta:o.length>0?o.join(" \xb7 "):"—"})}for(let r of e.weights)a.push({kind:"weight",ts:F(r.date),id:r.date,editable:!0,primary:`${r.kg.toFixed(1)} kg`,meta:t("forma.activities.weight.entry")});for(let r of e.walks)a.push({kind:"walk",ts:F(r.date),id:r.date,editable:!1,primary:`${r.minutes} min`,meta:t("forma.activities.walk.entry")});return a.sort((e,t)=>t.ts-e.ts),a})(e,t),[e,t]),P=(0,o.useMemo)(()=>{let e=g[I];return null===e?0:Date.now()-864e5*e},[I]),H=(0,o.useMemo)(()=>E.filter(e=>e.ts>=P),[E,P]),B=(0,o.useMemo)(()=>"all"===D?H:H.filter(e=>e.kind===D),[H,D]),W=(0,o.useMemo)(()=>{let e={all:H.length,fast:0,meal:0,weight:0,walk:0};for(let t of H)e[t.kind]+=1;return e},[H]),O=(e,a)=>(0,r.jsxs)(d.vu,{variant:D===e?"selected":"default",dotColor:"all"===e?void 0:z[e],onClick:()=>R(e),children:[t(a)," ",W[e]>0&&`(${W[e]})`]},e);return(0,r.jsxs)(f,{children:[(0,r.jsx)(x,{children:["month","3m","6m","year","all"].map(e=>(0,r.jsx)(d.vu,{variant:I===e?"selected":"default",onClick:()=>L(e),children:t("forma.activities.range."+e)},e))}),(0,r.jsxs)(x,{children:[O("all","forma.activities.filter.all"),O("fast","forma.activities.filter.fast"),O("meal","forma.activities.filter.meal"),O("weight","forma.activities.filter.weight"),O("walk","forma.activities.filter.walk")]}),0===B.length?(0,r.jsx)(c.YG,{mode:"empty",label:t("forma.activities.empty")}):(0,r.jsxs)(u,{children:[B.map(o=>(0,r.jsxs)(w,{children:[(0,r.jsx)(b,{color:z[o.kind],children:(0,r.jsx)(d.In,{name:T[o.kind],size:14})}),(0,r.jsxs)(y,{children:[(0,r.jsx)($,{children:o.primary}),(0,r.jsx)(v,{children:o.meta})]}),(0,r.jsx)(k,{children:function(e,t,a){let r=new Date(e),o=r.toLocaleDateString("pt"===t?"pt-PT":"en-GB",{day:"2-digit",month:"short"});if(!a)return o;let i=r.toLocaleTimeString("pt"===t?"pt-PT":"en-GB",{hour:"2-digit",minute:"2-digit"});return`${o} ${i}`}(o.ts,a,"fast"===o.kind||"meal"===o.kind)}),(0,r.jsxs)(j,{children:["meal"===o.kind&&s&&(0,r.jsx)(M,{onClick:()=>(t=>{if("meal"!==t.kind||!s)return;let a=e.meals.find(e=>e.id===t.id);a&&s(a)})(o),title:t("forma.activities.duplicateToToday"),"aria-label":t("forma.activities.duplicateToToday"),children:(0,r.jsx)(d.In,{name:"copy",size:14})}),o.editable&&(0,r.jsx)(M,{onClick:()=>(t=>{if(t.editable){if("fast"===t.kind){let a=e.sessions.find(e=>e.id===t.id);a&&i(a)}else if("meal"===t.kind){let a=e.meals.find(e=>e.id===t.id);a&&n(a)}else if("weight"===t.kind){let a=e.weights.find(e=>e.date===t.id);a&&l(a)}}})(o),title:t("forma.activities.edit"),"aria-label":t("forma.activities.edit"),children:(0,r.jsx)(d.In,{name:"edit",size:14})}),(0,r.jsx)(M,{onClick:()=>{let e;return e="forma.activities.confirmDelete."+o.kind,void(window.confirm(t(e))&&("fast"===o.kind&&p(o.id),"meal"===o.kind&&h(o.id),"weight"===o.kind&&C(o.id),"walk"===o.kind&&A(o.id)))},title:t("forma.activities.delete"),"aria-label":t("forma.activities.delete"),children:(0,r.jsx)(d.In,{name:"trash",size:14})})]})]},`${o.kind}:${o.id}`)),(0,r.jsx)(m.I,{variant:"compact"})]})]})}},84391(e,t,a){a.d(t,{v:()=>z});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(72799),l=a(6063),d=a(69454),c=a(1609),p=a(21571),m=a(32988);let g="forma:timeline:range",h=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=n().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${h} 0.25s ease both;
`,x=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,u=n().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(127, 183, 126, 0.85);
`,w=n().div`
  width: 100%;
`,b=n().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
`,y=n().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  margin-bottom: ${l.w4.spacing.xs};
`,$=n().pre`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  white-space: pre-wrap;
  margin: 0;
  line-height: 1.6;
`,v=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${l.w4.spacing.sm};
`,k=n().div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: ${p.xF};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.sm};
`,j=n().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,M=n().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: clamp(22px, 5.6vw, 28px);
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  color: ${p.Js};
  letter-spacing: -0.02em;
`;function z({data:e,t,locale:a}){let[i,n]=(0,o.useState)("1m"),[s,h]=(0,o.useState)(void 0),[T,F]=(0,o.useState)(!1);(0,o.useEffect)(()=>{(0,l.PL)(g).then(e=>{("1m"===e||"3m"===e||"6m"===e||"1y"===e)&&n(e),F(!0)}).catch(()=>F(!0))},[]);let S=(0,o.useCallback)(e=>{n(e),h(void 0),(0,l.Is)(g,e).catch(()=>{})},[]),C=(0,o.useMemo)(()=>(function(e,t){let a=d.zA[t],r=Array(a).fill(0),o=new Date;for(let t=0;t<a;t++){let[i,n,s]=(0,d.x)(t,a,o).split("-").map(e=>parseInt(e,10)),l=new Date(i,(n??1)-1,s??1).getTime(),c=l+864e5,p=0;for(let t of e.sessions){let e=t.startedAt,a=Math.min(t.endedAt??Date.now(),c)-Math.max(e,l);a>0&&(p+=a/36e5)}let m=0;p>=16?m=4:p>=12?m=3:p>=8?m=2:p>0&&(m=1),r[t]=m}return r})(e,i),[e,i]),A=d.zA[i],D=void 0!==s?(0,d.x)(s,A):null,R=(0,o.useMemo)(()=>D?(0,c.Af)(e,D,t,a):null,[e,D,t,a]),I=(0,o.useMemo)(()=>{let t=new Date,a=[];for(let e=0;e<A;e++)a.push((0,d.x)(e,A,t));let r=a[0]??"",o=a[a.length-1]??"",i=0;for(let t of e.sessions){let e=t.startedAt,a=t.endedAt??Date.now(),n=new Date(r).getTime(),s=Math.min(a,new Date(o).getTime()+864e5)-Math.max(e,n);s>0&&(i+=s/36e5)}let n={};for(let t of e.meals)t.date>=r&&t.date<=o&&(n[t.date]=(n[t.date]??0)+(t.proteinG??0));let s=Object.keys(n).length,l=Object.values(n).reduce((e,t)=>e+t,0),c=e.weights.filter(e=>e.date>=r&&e.date<=o).sort((e,t)=>e.date.localeCompare(t.date));return{totalFastHours:i,avgProtein:s>0?l/s:0,weightDelta:c.length>=2?(c[c.length-1]?.kg??0)-(c[0]?.kg??0):null,totalWalkMins:e.walks.filter(e=>e.date>=r&&e.date<=o).reduce((e,t)=>e+t.minutes,0)}},[e,i,A]),L=(0,o.useMemo)(()=>({"1m":t("forma.timeline.range.1m"),"3m":t("forma.timeline.range.3m"),"6m":t("forma.timeline.range.6m"),"1y":t("forma.timeline.range.1y")}),[t]),E=(0,o.useCallback)((r,o)=>{if(0===o)return;let i=(0,d.x)(r,A);return(0,c.Af)(e,i,t,a)},[e,A,t,a]);return T?(0,r.jsxs)(f,{children:[(0,r.jsxs)(x,{children:[(0,r.jsx)(u,{children:t("forma.timeline.title")}),(0,r.jsx)(d.zy,{range:i,onChange:S,labels:L})]}),(0,r.jsx)(w,{children:(0,r.jsx)(d.RT,{data:C,locale:a,showMonthLabels:!0,accent:p.Js,selectedIndex:s,onCellClick:e=>h(t=>t===e?void 0:e),tooltip:E})}),null!==R&&(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{children:t("forma.timeline.selectedDay.title")}),(0,r.jsx)($,{children:R})]}),(0,r.jsxs)(v,{children:[(0,r.jsxs)(k,{children:[(0,r.jsx)(j,{children:t("forma.timeline.kpi.fastHours")}),(0,r.jsxs)(M,{children:[I.totalFastHours.toFixed(0),"h"]}),(0,r.jsx)(m.I,{variant:"compact"})]}),(0,r.jsxs)(k,{children:[(0,r.jsx)(j,{children:t("forma.timeline.kpi.avgProtein")}),(0,r.jsxs)(M,{children:[I.avgProtein.toFixed(0),"g"]}),(0,r.jsx)(m.I,{variant:"compact"})]}),(0,r.jsxs)(k,{children:[(0,r.jsx)(j,{children:t("forma.timeline.kpi.weightDelta")}),(0,r.jsx)(M,{children:null!==I.weightDelta?`${I.weightDelta>=0?"+":""}${I.weightDelta.toFixed(1)} kg`:"—"}),(0,r.jsx)(m.I,{variant:"compact"})]}),(0,r.jsxs)(k,{children:[(0,r.jsx)(j,{children:t("forma.timeline.kpi.walks")}),(0,r.jsxs)(M,{children:[I.totalWalkMins," min"]}),(0,r.jsx)(m.I,{variant:"compact"})]})]})]}):(0,r.jsx)(f,{})}},71575(e,t,a){a.d(t,{Q:()=>ti});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(72799),l=a(6063),d=a(77752),c=a(69454),p=a(63236),m=a(21571);let g=n().div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,h=n().div`
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

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-column: span 1;
  }

  &:hover .forma-grid-controls {
    opacity: 1;
    pointer-events: auto;
  }
`,f=n().div`
  position: absolute;
  top: -14px;
  right: 6px;
  display: flex;
  align-items: center;
  gap: 2px;
  opacity: 0;
  pointer-events: none;
  transition: opacity ${l.w4.transitions.fast};
  z-index: 5;

  /* Always visible on touch devices — no hover available */
  @media (hover: none) {
    opacity: 0.85;
    pointer-events: auto;
  }
`,x=n().button`
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
  position: relative;
  transition:
    color ${l.w4.transitions.fast},
    border-color ${l.w4.transitions.fast},
    background ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.mainText};
    border-color: ${l.w4.colors.mainTextMuted};
    background: ${l.w4.colors.surfaceRaised};
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
`,u=n()(x)`
  &:hover {
    color: #f85149;
    border-color: rgba(248, 81, 73, 0.4);
  }
`;function w({size:e}){return(0,r.jsxs)("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:[(0,r.jsx)("rect",{x:1.5,y:4.5,width:11,height:5,rx:1,stroke:"currentColor",strokeWidth:1,opacity:.4}),(0,r.jsx)("rect",{x:2,y:5,width:"sm"===e?4:"md"===e?7:11,height:4,rx:.5,fill:"currentColor"})]})}let b=n().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
  padding: ${l.w4.spacing.sm} 0;
`,y=n().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: transparent;
  border: 1px dashed ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 4px 8px;
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  &:hover { color: ${m.Js}; border-color: ${m.Js}; }
`;function $({cards:e,t,storageKey:a="forma:layout"}){let[i,n]=(0,o.useState)(null);(0,o.useEffect)(()=>{let t=!1;return(async()=>{let r=await (0,l.PL)(a),o=null;if(r)try{o=JSON.parse(r)}catch{o=null}t||n(function(e,t){let a=new Set(t.map(e=>e.id)),r=new Set,o=[];if(e)for(let t of e)a.has(t.id)&&(o.push(t),r.add(t.id));for(let e of t)r.has(e.id)||o.push({id:e.id,size:e.defaultSize??"sm",hidden:!1});return o}(o,e))})(),()=>{t=!0}},[a,e.map(e=>e.id).join("|")]);let s=(0,o.useCallback)(e=>{n(e),(0,l.Is)(a,JSON.stringify(e))},[a]),d=(0,o.useCallback)((e,t)=>{if(!i)return;let a=i.filter(e=>!e.hidden),r=a.findIndex(t=>t.id===e);if(-1===r)return;let o=r+t;if(o<0||o>=a.length)return;let n=a[o],l=i.findIndex(t=>t.id===e),d=i.findIndex(e=>e.id===n.id),c=[...i];[c[l],c[d]]=[c[d],c[l]],s(c)},[i,s]),c=(0,o.useCallback)(e=>{i&&s(i.map(t=>{var a;return t.id===e?{...t,size:"sm"===(a=t.size)?"md":"md"===a?"lg":"sm"}:t}))},[i,s]),m=(0,o.useCallback)(e=>{i&&s(i.map(t=>t.id===e?{...t,hidden:!0}:t))},[i,s]),v=(0,o.useCallback)(e=>{i&&s(i.map(t=>t.id===e?{...t,hidden:!1}:t))},[i,s]),k=(0,o.useMemo)(()=>{let t=new Map;for(let a of e)t.set(a.id,a);return t},[e]);if(!i)return(0,r.jsx)(g,{});let j=i.filter(e=>!e.hidden),M=i.filter(e=>e.hidden);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{children:j.map((e,a)=>{let o=k.get(e.id);return o?(0,r.jsxs)(h,{size:e.size,children:[o.render(),(0,r.jsxs)(f,{className:"forma-grid-controls",children:[a>0&&(0,r.jsx)(x,{onClick:()=>d(e.id,-1),title:t("forma.grid.moveLeft"),"aria-label":t("forma.grid.moveLeft"),children:(0,r.jsx)(p.In,{name:"chevron-left",size:14})}),a<j.length-1&&(0,r.jsx)(x,{onClick:()=>d(e.id,1),title:t("forma.grid.moveRight"),"aria-label":t("forma.grid.moveRight"),children:(0,r.jsx)(p.In,{name:"chevron-right",size:14})}),(0,r.jsx)(x,{onClick:()=>c(e.id),title:t("forma.grid.resize",{size:e.size.toUpperCase()}),"aria-label":t("forma.grid.resize",{size:e.size.toUpperCase()}),children:(0,r.jsx)(w,{size:e.size})}),(0,r.jsx)(u,{onClick:()=>m(e.id),title:t("forma.grid.hide"),"aria-label":t("forma.grid.hide"),children:(0,r.jsx)(p.In,{name:"close",size:14})})]})]},e.id):null})}),M.length>0&&(0,r.jsxs)(b,{children:[(0,r.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted,textTransform:"uppercase",letterSpacing:"0.16em",alignSelf:"center",marginRight:8},children:t("forma.grid.hiddenLabel")}),M.map(e=>(0,r.jsxs)(y,{onClick:()=>v(e.id),children:["+ ",t(`forma.grid.card.${e.id}`)]},e.id))]})]})}var v=a(1609),k=a(32988);function j(e){return[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)]}let M=j("#1d2230"),z=j(m.Js);function T(e){let t=Math.round(M[0]+(z[0]-M[0])*e),a=Math.round(M[1]+(z[1]-M[1])*e),r=Math.round(M[2]+(z[2]-M[2])*e);return`rgb(${t},${a},${r})`}let F=new Set([0,4,8,12,16,20]),S=["Mo","Tu","We","Th","Fr","Sa","Su"],C=["Se","Te","Qa","Qi","Sx","S\xe1","Do"],A=n().section`
  position: relative;
  overflow: hidden;
  background: ${m.xF};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${m.Js};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  height: 100%;
  min-width: 0;
`,D=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(127, 183, 126, 0.85);
`,R=n().div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  min-width: 0;
`,I=n().div`
  display: grid;
  grid-template-columns: 28px repeat(24, ${14}px);
  gap: 3px;
  width: max-content;
`,L=n().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1;
`,E=n().div``,P=n().div`
  display: grid;
  grid-template-columns: 28px repeat(24, ${14}px);
  gap: 3px;
  width: max-content;
`,H=n().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextFaint??l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
`,B=n().button`
  width: ${14}px;
  height: ${14}px;
  border-radius: 2px;
  background: ${({bg:e})=>e};
  border: none;
  padding: 0;
  cursor: pointer;
  outline: ${({selected:e})=>e?`2px solid ${l.w4.colors.accent}`:"none"};
  outline-offset: 1px;
  transition: filter 120ms ease;
  &:hover { filter: brightness(1.35); }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 1px; }
`,W=n().div`
  display: flex;
  align-items: flex-start;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${m.Js};
  border-radius: ${l.w4.borderRadius.md};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12px;
  color: ${l.w4.colors.mainText};
  white-space: pre-wrap;
  line-height: 1.5;
`,O=n().button`
  background: transparent;
  border: none;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  padding: 4px;
  border-radius: ${l.w4.borderRadius.sm};
  margin-left: auto;
  flex-shrink: 0;
  &:hover { color: ${l.w4.colors.mainText}; }
`,N=n().div`
  display: grid;
  grid-template-columns: 28px ${405}px;
  gap: 3px;
  align-items: center;
  width: max-content;
`,Y=n().div`
  display: flex;
  gap: 2px;
  height: 8px;
`,K=n().div`
  flex: 1;
  background: ${({pct:e})=>T(e)};
  border-radius: 1px;
`,J=n().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`;function G({data:e,t,locale:a}){let[i,n]=(0,o.useState)(null),s=(0,o.useMemo)(()=>(0,d.mealDayHourMatrix)(e.meals),[e.meals]),l=(0,o.useMemo)(()=>(0,d.mealKcalByHour)(e.meals),[e.meals]),c=(0,o.useMemo)(()=>{let e=0;for(let t of s)for(let a of t)a>e&&(e=a);return e},[s]),p=(0,o.useMemo)(()=>Math.max(0,...l),[l]),m=(0,o.useMemo)(()=>l.reduce((e,t)=>e+t,0),[l]),g="pt"===a?C:S;return(0,r.jsxs)(A,{children:[(0,r.jsx)(D,{children:t("forma.mealHeatmap.title")}),(0,r.jsxs)(R,{children:[(0,r.jsxs)(I,{children:[(0,r.jsx)(E,{}),Array.from({length:24},(e,t)=>(0,r.jsx)(L,{children:F.has(t)?String(t).padStart(2,"0"):""},t))]}),s.map((o,s)=>(0,r.jsxs)(P,{children:[(0,r.jsx)(H,{children:g[s]}),o.map((o,l)=>{let d=null!==i&&i.day===s&&i.hour===l;return(0,r.jsx)(B,{type:"button",bg:0===c?T(0):T(o/c),selected:d,"aria-pressed":d,onClick:()=>n(e=>e&&e.day===s&&e.hour===l?null:{day:s,hour:l}),title:(0,v.Cl)(e,s,l,t,a)},l)})]},s)),(0,r.jsxs)(N,{children:[(0,r.jsx)(E,{}),(0,r.jsx)(Y,{children:l.map((e,t)=>(0,r.jsx)(K,{pct:0===p?0:e/p},t))})]}),(0,r.jsxs)(J,{children:[(0,r.jsx)("span",{children:"0"}),(0,r.jsxs)("span",{children:[Math.round(m).toLocaleString()," kcal"]})]})]}),i&&(0,r.jsxs)(W,{role:"status","aria-live":"polite",children:[(0,r.jsx)("span",{children:(0,v.Cl)(e,i.day,i.hour,t,a)}),(0,r.jsx)(O,{type:"button",onClick:()=>n(null),"aria-label":t("forma.month.summary.close"),children:"\xd7"})]}),(0,r.jsx)(k.I,{variant:"compact"})]})}let V="#1d2230";function q(){let e=new Date;return{year:e.getFullYear(),month:e.getMonth()}}function U(e,t){let a=new Date(e.year,e.month+t,1);return{year:a.getFullYear(),month:a.getMonth()}}function _(e,t){let a=String(e.month+1).padStart(2,"0"),r=String(t).padStart(2,"0");return`${e.year}-${a}-${r}`}function Q(e){return[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)]}let X=Q(V),Z=Q(m.Js),ee=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,et=n().section`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  margin-bottom: ${l.w4.spacing.lg};
  animation: ${ee} 0.25s ease both;
`,ea=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  padding: 0 ${l.w4.spacing.xs};
  flex-wrap: wrap;
`,er=n().h2`
  font-size: clamp(15px, 4.5vw, 18px);
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  margin: 0;
  text-transform: capitalize;
  font-variant-numeric: tabular-nums;
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eo=n().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  flex-shrink: 0;
`,ei=n().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: border-color 0.14s ease, color 0.14s ease;
  &:hover { border-color: ${l.w4.colors.borderStrong??l.w4.colors.mainTextMuted}; color: ${l.w4.colors.mainText}; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`,en=n().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainTextMuted};
  padding: 6px 10px;
  cursor: pointer;
  transition: border-color 0.14s ease, color 0.14s ease;
  &:hover { border-color: ${m.Js}; color: ${l.w4.colors.mainText}; }
`,es=n().div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${l.w4.spacing.sm};
  @media (min-width: ${l.w4.breakpoints.md??"768px"}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,el=n().div`
  position: relative;
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${m.Js};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  background:
    radial-gradient(circle at 12% 18%, rgba(127, 183, 126, 0.10), transparent 55%),
    radial-gradient(circle at 88% 90%, rgba(232, 154, 92, 0.08), transparent 60%),
    linear-gradient(135deg, #14241c 0%, #0f1612 100%);
  overflow: hidden;
  transition: border-color 0.14s ease, transform 0.14s ease;

  &:hover {
    border-color: rgba(127, 183, 126, 0.4);
    transform: translateY(-1px);
  }
`,ed=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.xs};
`,ec=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(127, 183, 126, 0.85);
`,ep=n().span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(127, 183, 126, 0.10);
  color: ${m.Js};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 0 12px rgba(127, 183, 126, 0.16);
`,em=n().span`
  font-size: clamp(22px, 5.6vw, 28px);
  font-weight: 800;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  line-height: 1;
  letter-spacing: -0.02em;
  word-break: break-word;
`,eg=n().span`
  font-size: 11px;
  font-weight: 500;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-left: 6px;
  letter-spacing: 0.04em;
`,eh=n().span`
  position: absolute;
  top: ${({top:e})=>e}px;
  right: ${({right:e})=>e}px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #e89a5c;
  opacity: ${({opacity:e})=>e};
  box-shadow: 0 0 6px rgba(232, 154, 92, 0.6);
  pointer-events: none;
`,ef=n().div`
  position: relative;
  overflow: hidden;
  background: ${m.xF};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${m.Js};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  min-width: 0;
`,ex=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(127, 183, 126, 0.85);
`,eu=n().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${l.w4.spacing.md};
  @media (min-width: ${l.w4.breakpoints.lg??"1024px"}) {
    grid-template-columns: 1.2fr 1fr;
  }
`,ew=n().div`
  display: grid;
  grid-template-columns: repeat(7, 36px);
  gap: 4px;
  width: max-content;

  @media (min-width: ${l.w4.breakpoints.md??"768px"}) {
    grid-template-columns: repeat(7, 44px);
  }
`,eb=n().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.12em;
`,ey=n().button`
  aspect-ratio: 1 / 1;
  background: ${({bg:e})=>e};
  border: 1px solid
    ${({today:e,selected:t})=>t?l.w4.colors.accent:e?m.Js:"transparent"};
  outline: ${({selected:e})=>e?`2px solid ${l.w4.colors.accent}`:"none"};
  outline-offset: ${({selected:e})=>e?"1px":"0"};
  border-radius: ${l.w4.borderRadius.sm};
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2px 3px;
  font-size: 10px;
  line-height: 1;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  transition: filter 120ms ease, transform 120ms ease;
  cursor: pointer;
  &:hover { filter: brightness(1.35); transform: translateY(-1px); }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 1px;
  }
`,e$=n().div`
  aspect-ratio: 1 / 1;
`,ev=n().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.md};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${m.Js};
  border-radius: ${l.w4.borderRadius.md};
  flex-wrap: wrap;
  animation: ${ee} 0.2s ease both;
`,ek=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
  margin-right: auto;
`,ej=n().span`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  font-size: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};

  & > em {
    font-style: normal;
    font-size: 10px;
    color: ${l.w4.colors.mainTextMuted};
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
`,eM=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
`,ez=n().button`
  background: transparent;
  border: none;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  padding: 4px;
  border-radius: ${l.w4.borderRadius.sm};
  &:hover { color: ${l.w4.colors.mainText}; }
`,eT=n().span`
  position: absolute;
  bottom: 14px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1;
  pointer-events: none;
  @media (min-width: ${l.w4.breakpoints.md??"768px"}) {
    font-size: 11px;
    bottom: 16px;
  }
`,eF=n().div`
  position: absolute;
  bottom: 3px;
  right: 3px;
  display: flex;
  gap: 2px;
`,eS=n().span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  @media (min-width: ${l.w4.breakpoints.md??"768px"}) {
    width: 4px;
    height: 4px;
  }
`,eC=n().div`
  display: grid;
  grid-template-columns: repeat(31, 1fr);
  align-items: end;
  gap: 1px;
  height: 80px;
  @media (min-width: ${l.w4.breakpoints.md??"768px"}) {
    gap: 2px;
    height: 100px;
  }
`,eA=n().div`
  height: ${({h:e})=>Math.max(2,e)}%;
  background: ${({over:e})=>e?m.Js:l.w4.colors.mainTextMuted};
  opacity: ${({over:e})=>e?1:.4};
  border-radius: 2px 2px 0 0;
  transition: filter 120ms ease;
  &:hover { filter: brightness(1.3); }
`,eD=n().div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`;function eR({data:e,t,locale:a}){let i,n,s,l,d,g,h,[f,x]=(0,o.useState)(()=>q()),[u,w]=(0,o.useState)(null),b=(0,o.useCallback)(()=>x(e=>U(e,-1)),[]),y=(0,o.useCallback)(()=>x(e=>U(e,1)),[]),$=(0,o.useCallback)(()=>x(q()),[]),v=(0,o.useMemo)(()=>{let e=q();return f.year===e.year&&f.month===e.month},[f]),{fastHours:j,proteinByDayMap:M,weightByDayMap:z,walkByDayMap:T,checkInDays:F}=(0,o.useMemo)(()=>{let t=function(e,t){let a={};for(let r of e.sessions){if(void 0===r.endedAt)continue;let e=r.startedAt,o=r.endedAt;for(;e<o;){let r=new Date(e);if(r.getFullYear()===t.year&&r.getMonth()===t.month){let i=new Date(r.getFullYear(),r.getMonth(),r.getDate()).getTime()+864e5,n=Math.min(o,i)-e,s=_(t,r.getDate());a[s]=(a[s]??0)+n/36e5,e=i}else e=new Date(r.getFullYear(),r.getMonth(),r.getDate()).getTime()+864e5}}return a}(e,f),a=`${f.year}-${String(f.month+1).padStart(2,"0")}-`,r={};for(let t of e.meals)t.date.startsWith(a)&&(r[t.date]=(r[t.date]??0)+(t.proteinG??0));let o={};for(let t of e.weights)t.date.startsWith(a)&&(o[t.date]=t.kg);let i={};for(let t of e.walks)t.date.startsWith(a)&&(i[t.date]=(i[t.date]??0)+t.minutes);return{fastHours:t,proteinByDayMap:r,weightByDayMap:o,walkByDayMap:i,checkInDays:new Set(e.checkIns.filter(e=>e.date.startsWith(a)).map(e=>e.date))}},[e,f]),S=new Date(f.year,f.month+1,0).getDate(),C=new Date().toISOString().slice(0,10),A=(0,o.useMemo)(()=>Object.values(j).reduce((e,t)=>e+t,0),[j]),D=e.goal.proteinG??110,R=Object.values(M),I=R.length?R.reduce((e,t)=>e+t,0)/R.length:0,L=(0,o.useMemo)(()=>{let t=Object.keys(z).sort(),a=String(f.month+1).padStart(2,"0"),r=`${f.year}-${a}-01`,o=e.weights.filter(e=>e.date<r).sort((e,t)=>e.date.localeCompare(t.date)),i=o[o.length-1]?.kg;if(0===t.length&&void 0===i)return{kind:"none"};if(0===t.length)return{kind:"absolute",value:i};let n=z[t[t.length-1]];if(void 0===n)return{kind:"none"};if(void 0!==i)return{kind:"delta",value:n-i};if(t.length>=2){let e=z[t[0]];if(void 0!==e)return{kind:"delta",value:n-e}}return{kind:"absolute",value:n}},[z,e.weights,f]),E=(0,o.useMemo)(()=>Object.values(T).reduce((e,t)=>e+t,0),[T]),P=(new Date(f.year,f.month,1).getDay()+6)%7,H=[];for(let e=0;e<P;e++)H.push({key:`lead-${e}`,day:null,iso:null});for(let e=1;e<=S;e++){let t=_(f,e);H.push({key:t,day:e,iso:t})}for(;H.length%7!=0;)H.push({key:`tail-${H.length}`,day:null,iso:null});let B=Math.max(18,...Object.values(j)),W=[];for(let e=1;e<=S;e++)W.push(M[_(f,e)]??0);for(;W.length<31;)W.push(0);let O=[];for(let e=1;e<=S;e++){let t=z[_(f,e)];void 0!==t&&O.push(t)}return(0,r.jsxs)(et,{children:[(0,r.jsxs)(ea,{children:[(0,r.jsx)(er,{children:new Date(f.year,f.month,1).toLocaleDateString("pt"===a?"pt-PT":"en-US",{month:"long",year:"numeric"})}),(0,r.jsxs)(eo,{children:[(0,r.jsx)(ei,{onClick:b,"aria-label":t("forma.month.prev"),children:(0,r.jsx)(p.In,{name:"chevron-left",size:16})}),(0,r.jsx)(en,{onClick:$,disabled:v,"aria-label":t("forma.month.today"),children:t("forma.month.today")}),(0,r.jsx)(ei,{onClick:y,disabled:v,"aria-label":t("forma.month.next"),children:(0,r.jsx)(p.In,{name:"chevron-right",size:16})})]})]}),(0,r.jsxs)(es,{children:[(0,r.jsxs)(el,{children:[(0,r.jsxs)(ed,{children:[(0,r.jsx)(ec,{children:t("forma.month.kpi.fastHours")}),(0,r.jsx)(ep,{children:(0,r.jsx)(p.In,{name:"clock",size:14})})]}),(0,r.jsxs)(em,{children:[A.toFixed(0),(0,r.jsx)(eg,{children:"h"})]}),(0,r.jsx)(eh,{top:10,right:28,opacity:.7}),(0,r.jsx)(eh,{top:22,right:20,opacity:.4})]}),(0,r.jsxs)(el,{children:[(0,r.jsxs)(ed,{children:[(0,r.jsx)(ec,{children:t("forma.month.kpi.avgProtein")}),(0,r.jsx)(ep,{children:(0,r.jsx)(p.In,{name:"utensils",size:14})})]}),(0,r.jsxs)(em,{children:[I.toFixed(0),(0,r.jsxs)(eg,{children:["g / ",D,"g"]})]}),(0,r.jsx)(eh,{top:10,right:28,opacity:.7}),(0,r.jsx)(eh,{top:22,right:20,opacity:.4})]}),(0,r.jsxs)(el,{children:[(0,r.jsxs)(ed,{children:[(0,r.jsx)(ec,{children:t("delta"===L.kind?"forma.month.kpi.weightDelta":"forma.month.kpi.weight")}),(0,r.jsx)(ep,{children:(0,r.jsx)(p.In,{name:"heart",size:14})})]}),(0,r.jsxs)(em,{children:["none"===L.kind?"—":"delta"===L.kind?`${L.value>0?"+":""}${L.value.toFixed(1)}`:L.value.toFixed(1),(0,r.jsx)(eg,{children:"kg"})]}),(0,r.jsx)(eh,{top:10,right:28,opacity:.7}),(0,r.jsx)(eh,{top:22,right:20,opacity:.4})]}),(0,r.jsxs)(el,{children:[(0,r.jsxs)(ed,{children:[(0,r.jsx)(ec,{children:t("forma.month.kpi.walks")}),(0,r.jsx)(ep,{children:(0,r.jsx)(p.In,{name:"leaf",size:14})})]}),(0,r.jsxs)(em,{children:[E,(0,r.jsx)(eg,{children:"min"})]}),(0,r.jsx)(eh,{top:10,right:28,opacity:.7}),(0,r.jsx)(eh,{top:22,right:20,opacity:.4})]})]}),(0,r.jsxs)(ef,{children:[(0,r.jsxs)(ex,{children:["◉ ",t("forma.month.calendar.title")]}),(0,r.jsxs)(ew,{children:[("pt"===a?["S","T","Q","Q","S","S","D"]:["M","T","W","T","F","S","S"]).map((e,t)=>(0,r.jsx)(eb,{children:e},`h-${t}`)),H.map(e=>{if(null===e.day||null===e.iso)return(0,r.jsx)(e$,{},e.key);let t=j[e.iso]??0,a=Math.min(1,t/B),o=void 0!==z[e.iso],i=F.has(e.iso),n=(T[e.iso]??0)>0,s=e.iso;return(0,r.jsxs)(ey,{type:"button",bg:function(e){if(e<=0)return V;let t=Math.round(X[0]+(Z[0]-X[0])*e),a=Math.round(X[1]+(Z[1]-X[1])*e),r=Math.round(X[2]+(Z[2]-X[2])*e);return`rgb(${t},${a},${r})`}(a),today:s===C,selected:s===u,onClick:()=>w(e=>e===s?null:s),"aria-pressed":s===u,"aria-label":`${s} \xb7 ${t.toFixed(1)}h fast`,title:`${s} \xb7 ${t.toFixed(1)}h fast`,children:[e.day,t>0&&(0,r.jsx)(eT,{"aria-hidden":"true",children:t>=10?`${Math.round(t)}h`:`${t.toFixed(1)}h`}),(0,r.jsxs)(eF,{children:[o&&(0,r.jsx)(eS,{color:"#58a6ff"}),i&&(0,r.jsx)(eS,{color:"#a371f7"}),n&&(0,r.jsx)(eS,{color:"#d29922"})]})]},e.key)})]}),u&&(i=j[u]??0,n=M[u]??0,s=z[u],l=T[u]??0,d=e.checkIns.find(e=>e.date===u),g=i>0||n>0||void 0!==s||l>0||void 0!==d,h=new Date(u+"T00:00:00").toLocaleDateString("pt"===a?"pt-PT":"en-US",{weekday:"short",month:"short",day:"numeric"}),(0,r.jsxs)(ev,{role:"status","aria-live":"polite",children:[(0,r.jsx)(ek,{children:h}),g?(0,r.jsxs)(r.Fragment,{children:[i>0&&(0,r.jsxs)(ej,{children:[(0,r.jsx)("span",{children:i>=10?`${Math.round(i)}h`:`${i.toFixed(1)}h`}),(0,r.jsx)("em",{children:t("forma.month.summary.fast")})]}),n>0&&(0,r.jsxs)(ej,{children:[(0,r.jsxs)("span",{children:[Math.round(n),"g"]}),(0,r.jsx)("em",{children:t("forma.month.summary.protein")})]}),void 0!==s&&(0,r.jsxs)(ej,{children:[(0,r.jsxs)("span",{children:[s.toFixed(1),"kg"]}),(0,r.jsx)("em",{children:t("forma.month.summary.weight")})]}),l>0&&(0,r.jsxs)(ej,{children:[(0,r.jsxs)("span",{children:[l,"min"]}),(0,r.jsx)("em",{children:t("forma.month.summary.walks")})]}),void 0!==d&&(0,r.jsxs)(ej,{children:[(0,r.jsx)("span",{"aria-hidden":"true",children:"●"}),(0,r.jsx)("em",{children:t("forma.month.summary.checkIn")})]})]}):(0,r.jsx)(eM,{children:t("forma.month.summary.empty")}),(0,r.jsx)(ez,{type:"button",onClick:()=>w(null),"aria-label":t("forma.month.summary.close"),children:"\xd7"})]})),(0,r.jsx)(k.I,{variant:"compact"})]}),(0,r.jsxs)(eu,{children:[(0,r.jsxs)(ef,{children:[(0,r.jsxs)(ex,{children:["◉ ",t("forma.month.protein.title")]}),0===R.length?(0,r.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(eC,{children:W.slice(0,S).map((e,t)=>(0,r.jsx)(eA,{h:Math.min(100,e/(1.2*D)*100),over:e>=D,title:`${_(f,t+1)} \xb7 ${e.toFixed(0)}g`},t))}),(0,r.jsxs)(eD,{children:[(0,r.jsx)("span",{children:"1"}),(0,r.jsx)("span",{children:Math.ceil(S/2)}),(0,r.jsx)("span",{children:S})]})]}),(0,r.jsx)(k.I,{variant:"compact"})]}),(0,r.jsxs)(ef,{children:[(0,r.jsxs)(ex,{children:["◉ ",t("forma.month.weight.title")]}),O.length<2?(0,r.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")}):(0,r.jsx)(c.OW,{points:O,accent:m.Js,width:260,height:100,fluid:!0}),(0,r.jsx)(k.I,{variant:"compact"})]})]})]})}let eI="#58a6ff",eL="#d29922",eE="#7fb77e",eP=["Mo","Tu","We","Th","Fr","Sa","Su"],eH=["Se","Te","Qa","Qi","Sx","S\xe1","Do"],eB=new Set([0,4,8,12,16,20]),eW=m.Js;function eO(e){return[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)]}let eN=eO("#1d2230"),eY=eO(eW);function eK(e){let t=Math.round(eN[0]+(eY[0]-eN[0])*e),a=Math.round(eN[1]+(eY[1]-eN[1])*e),r=Math.round(eN[2]+(eY[2]-eN[2])*e);return`rgb(${t},${a},${r})`}let eJ=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,eG=n().div`
  position: relative;
  overflow: hidden;
  background: ${m.xF};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${m.Js};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  animation: ${eJ} 0.25s ease both;
  transition: border-color 0.14s ease, transform 0.14s ease, box-shadow 0.14s ease;
  min-width: 0;
  height: 100%;

  &:hover {
    border-color: rgba(127, 183, 126, 0.4);
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  }
`,eV=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(127, 183, 126, 0.85);
`,eq=n().span`
  font-size: clamp(22px, 5.6vw, 28px);
  font-weight: 800;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  line-height: 1;
  letter-spacing: -0.02em;
`,eU=n().span`
  font-size: 18px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1;
`,e_=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,eQ=n().div`
  display: flex;
  align-items: baseline;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,eX=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${({positive:e})=>e?l.w4.colors.danger:m.Js};
  background: ${({positive:e})=>e?`${l.w4.colors.danger}18`:`${m.Js}18`};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 2px 6px;
`,eZ=n().div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`,e0=n().div`
  display: grid;
  grid-template-columns: 28px repeat(24, minmax(10px, 1fr));
  gap: 2px;
  margin-bottom: 2px;
  min-width: 260px;
`,e1=n().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1;
`,e2=n().div`
  display: grid;
  grid-template-columns: 28px repeat(24, minmax(10px, 1fr));
  gap: 2px;
  margin-bottom: 2px;
  min-width: 260px;
`,e4=n().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
`,e5=n().button`
  aspect-ratio: 1 / 1;
  border-radius: 2px;
  background: ${({bg:e})=>e};
  min-height: 10px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: ${({selected:e})=>e?`2px solid ${l.w4.colors.accent}`:"none"};
  outline-offset: 1px;
  transition: filter 120ms ease;
  &:hover { filter: brightness(1.4); }
  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 1px; }
`,e3=n().div`
  display: flex;
  align-items: flex-start;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid #7fb77e;
  border-radius: ${l.w4.borderRadius.md};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12px;
  color: ${l.w4.colors.mainText};
  white-space: pre-wrap;
  line-height: 1.5;
`,e6=n().button`
  background: transparent;
  border: none;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  padding: 4px;
  border-radius: ${l.w4.borderRadius.sm};
  margin-left: auto;
  flex-shrink: 0;
  &:hover { color: ${l.w4.colors.mainText}; }
`,e8=n().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  flex-wrap: wrap;
`,e7=n().div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,e9=n().div`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,te={positive:"#7fb77e",warn:"#facc15",info:l.w4.colors.mainTextMuted},tt=n().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,ta=n().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${({accent:e})=>e};
  border-radius: ${l.w4.borderRadius.md};
`,tr=n().span`
  font-size: 13px;
  font-weight: 600;
  color: ${l.w4.colors.mainText};
`,to=n().span`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
`;function ti({data:e,t,locale:a}){let i=new Date().toISOString().slice(0,10),[n,s]=(0,o.useState)(null),[l,p]=(0,o.useState)(null),g=(0,o.useMemo)(()=>(function(e){let t={};for(let a of e){if(!a.endedAt)continue;let e=a.startedAt,r=a.endedAt,o=e;for(;o<r;){let e=new Date(o),a=new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0).getTime()+864e5,i=Math.min(r,a)-o,n=e.toISOString().slice(0,10);t[n]=(t[n]??0)+i/36e5,o=a}}let a=[];for(let e=89;e>=0;e--){let r=t[function(e){let t=new Date;return t.setDate(t.getDate()-e),t.toISOString().slice(0,10)}(e)]??0,o=0;r>=18?o=4:r>=14?o=3:r>=8?o=2:r>0&&(o=1),a.push(o)}return a})(e.sessions),[e.sessions]),h=(0,o.useMemo)(()=>(0,d.weightTrend)(e.weights,60),[e.weights]),f=(0,o.useMemo)(()=>[...e.weights].sort((e,t)=>t.date.localeCompare(e.date))[0]??null,[e.weights]),x=(0,o.useMemo)(()=>(0,d.proteinByDay)(e.meals,i),[e.meals,i]),u=(0,o.useMemo)(()=>e.goal.proteinG??110,[e.goal.proteinG]),w=(0,o.useMemo)(()=>(function(e){let t=[],a=new Date,r=new Date(a),o=(a.getDay()+6)%7;r.setDate(a.getDate()-o),r.setHours(0,0,0,0);for(let a=5;a>=0;a--){let o=new Date(r);o.setDate(r.getDate()-7*a);let i=new Date(o);i.setDate(o.getDate()+7);let n=o.toISOString().slice(0,10),s=i.toISOString().slice(0,10),l=e.filter(e=>e.date>=n&&e.date<s),d=l.filter(e=>"lunch"===e.slot).reduce((e,t)=>e+(t.proteinG??0),0),c=l.filter(e=>"snack"===e.slot).reduce((e,t)=>e+(t.proteinG??0),0),p=l.filter(e=>"dinner"===e.slot).reduce((e,t)=>e+(t.proteinG??0),0),m=`${String(o.getDate()).padStart(2,"0")}/${String(o.getMonth()+1).padStart(2,"0")}`;t.push({label:m,segments:[{id:"lunch",value:d,color:eI},{id:"snack",value:c,color:eL},{id:"dinner",value:p,color:eE}]})}return t})(e.meals),[e.meals]),b=(0,o.useMemo)(()=>(0,d.dayHourFastMatrix)(e.sessions),[e.sessions]),y=(0,o.useMemo)(()=>{let e=0;for(let t of b)for(let a of t)a>e&&(e=a);return e},[b]),j=(0,o.useMemo)(()=>(0,d.generateFormaInsights)(e),[e]),M="pt"===a?eH:eP,z=e.weights.length>=2,T=e.meals.length>0,F=e.sessions.some(e=>void 0!==e.endedAt),S=[{id:"insights",defaultSize:"lg",render:()=>(0,r.jsxs)(eG,{children:[(0,r.jsxs)(eV,{children:["◉ ",t("forma.insights.title")]}),0===j.length?(0,r.jsx)(c.YG,{mode:"empty",label:t("forma.insights.empty")}):(0,r.jsx)(tt,{children:j.map(e=>{let a;return"string"==typeof(a={...e.vars??{}}).dayKey&&(a.day=t(a.dayKey)),(0,r.jsxs)(ta,{accent:te[e.severity],children:[(0,r.jsx)(tr,{children:t(e.titleKey)}),(0,r.jsx)(to,{children:t(e.bodyKey,a)})]},e.id)})}),(0,r.jsx)(k.I,{variant:"compact"})]})},{id:"fast-heatmap",defaultSize:"lg",render:()=>(0,r.jsxs)(eG,{children:[(0,r.jsxs)(eV,{children:["◉ ",t("forma.analytics.heatmap.title")]}),F?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.RT,{data:g,cellSize:11,gap:2,locale:a,selectedIndex:n??void 0,onCellClick:e=>s(t=>t===e?null:e),tooltip:r=>(0,v.Af)(e,(0,v.EQ)(r,g.length),t,a)}),(0,r.jsxs)(e8,{children:[(0,r.jsxs)(e7,{children:[(0,r.jsx)(e9,{color:eK(0)}),(0,r.jsx)("span",{children:t("forma.analytics.heatmap.none")})]}),(0,r.jsxs)(e7,{children:[(0,r.jsx)(e9,{color:eK(.25)}),(0,r.jsx)("span",{children:"<8h"})]}),(0,r.jsxs)(e7,{children:[(0,r.jsx)(e9,{color:eK(.5)}),(0,r.jsx)("span",{children:"8–14h"})]}),(0,r.jsxs)(e7,{children:[(0,r.jsx)(e9,{color:eK(.75)}),(0,r.jsx)("span",{children:"14–18h"})]}),(0,r.jsxs)(e7,{children:[(0,r.jsx)(e9,{color:eK(1)}),(0,r.jsx)("span",{children:"≥18h"})]})]}),null!==n&&(0,r.jsxs)(e3,{role:"status","aria-live":"polite",children:[(0,r.jsx)("span",{children:(0,v.Af)(e,(0,v.EQ)(n,g.length),t,a)}),(0,r.jsx)(e6,{type:"button",onClick:()=>s(null),"aria-label":t("forma.month.summary.close"),children:"\xd7"})]})]}):(0,r.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")}),(0,r.jsx)(k.I,{variant:"compact"})]})},{id:"weight-trend",defaultSize:"md",render:()=>(0,r.jsxs)(eG,{children:[(0,r.jsxs)(eV,{children:["◉ ",t("forma.analytics.weight.title")]}),z?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(eQ,{children:[(0,r.jsx)(eq,{children:f?f.kg.toFixed(1):"—"}),(0,r.jsx)(e_,{children:"kg"}),0!==h.delta&&(0,r.jsxs)(eX,{positive:h.delta>0,children:[h.delta>0?"+":"",h.delta.toFixed(1)," kg"]})]}),void 0!==e.goal.weightKg&&(0,r.jsxs)(eQ,{children:[(0,r.jsx)(eU,{children:e.goal.weightKg.toFixed(1)}),(0,r.jsxs)(e_,{children:["kg ",t("forma.weight.target")]})]}),(0,r.jsx)(e_,{children:t("forma.analytics.weight.delta")}),(0,r.jsx)(c.OW,{points:h.ema.length>=2?h.ema:e.weights.map(e=>e.kg),accent:m.Js,width:260,height:60,fluid:!0})]}):(0,r.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")}),(0,r.jsx)(k.I,{variant:"compact"})]})},{id:"protein-burn",defaultSize:"md",render:()=>(0,r.jsxs)(eG,{children:[(0,r.jsxs)(eV,{children:["◉ ",t("forma.analytics.protein.title")]}),(0,r.jsxs)(eQ,{children:[(0,r.jsx)(eq,{children:x.toFixed(0)}),(0,r.jsxs)(e_,{children:["/ ",u,"g ",t("forma.analytics.protein.target")]})]}),T?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.kl,{spent:u-x,budget:u,height:60}),(0,r.jsx)(e_,{children:x>=u?t("forma.analytics.protein.achieved"):`${(u-x).toFixed(0)}g ${t("forma.analytics.protein.remaining")}`})]}):(0,r.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")}),(0,r.jsx)(k.I,{variant:"compact"})]})},{id:"weekly-protein",defaultSize:"lg",render:()=>(0,r.jsxs)(eG,{children:[(0,r.jsxs)(eV,{children:["◉ ",t("forma.analytics.weekly.title")]}),T?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.ik,{data:w,budget:7*u,height:160}),(0,r.jsxs)(e8,{children:[(0,r.jsxs)(e7,{children:[(0,r.jsx)(e9,{color:eI}),(0,r.jsx)("span",{children:t("forma.meal.lunch")})]}),(0,r.jsxs)(e7,{children:[(0,r.jsx)(e9,{color:eL}),(0,r.jsx)("span",{children:t("forma.meal.snack")})]}),(0,r.jsxs)(e7,{children:[(0,r.jsx)(e9,{color:eE}),(0,r.jsx)("span",{children:t("forma.meal.dinner")})]})]})]}):(0,r.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")}),(0,r.jsx)(k.I,{variant:"compact"})]})},{id:"meal-heatmap",defaultSize:"lg",render:()=>(0,r.jsx)(G,{data:e,t:t,locale:a})},{id:"fast-times",defaultSize:"lg",render:()=>(0,r.jsxs)(eG,{children:[(0,r.jsxs)(eV,{children:["◉ ",t("forma.analytics.fastTimes.title")]}),F?(0,r.jsxs)(eZ,{children:[(0,r.jsxs)(e0,{children:[(0,r.jsx)("div",{}),Array.from({length:24},(e,t)=>(0,r.jsx)(e1,{children:eB.has(t)?String(t).padStart(2,"0"):""},t))]}),b.map((o,i)=>(0,r.jsxs)(e2,{children:[(0,r.jsx)(e4,{children:M[i]}),o.map((o,n)=>{let s=null!==l&&l.day===i&&l.hour===n;return(0,r.jsx)(e5,{type:"button",bg:0===y?eK(0):eK(o/y),selected:s,"aria-pressed":s,onClick:()=>p(e=>e&&e.day===i&&e.hour===n?null:{day:i,hour:n}),title:(0,v.Cl)(e,i,n,t,a)},n)})]},i))]}):(0,r.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")}),l&&(0,r.jsxs)(e3,{role:"status","aria-live":"polite",children:[(0,r.jsx)("span",{children:(0,v.Cl)(e,l.day,l.hour,t,a)}),(0,r.jsx)(e6,{type:"button",onClick:()=>p(null),"aria-label":t("forma.month.summary.close"),children:"\xd7"})]}),(0,r.jsx)(k.I,{variant:"compact"})]})}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(eR,{data:e,t:t,locale:a}),(0,r.jsx)($,{t:t,cards:S,storageKey:"forma:layout:analytics"})]})}},69568(e,t,a){a.d(t,{c:()=>S});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(72799),l=a(6063),d=a(63236),c=a(77752),p=a(21571),m=a(32988);let g=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,h=n().section`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${g} 0.25s ease both;
`,f=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(127, 183, 126, 0.85);
`,x=n().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  align-items: flex-end;
`,u=n().textarea`
  flex: 1;
  min-height: 44px;
  max-height: 120px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 10px ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamily};
  color: ${l.w4.colors.mainText};
  resize: none;
  outline: none;
  line-height: 1.5;
  &:focus {
    border-color: ${p.Js};
  }
  &::placeholder {
    color: ${l.w4.colors.mainTextMuted};
  }
`,w=n().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,b=n().div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  background: ${p.xF};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
`,y=n().div`
  display: flex;
  align-items: flex-start;
  gap: ${l.w4.spacing.sm};
`,$=n().div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${p.Js}33;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
`,v=n().p`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  margin: 0;
  line-height: 1.5;
`,k=n().div`
  padding-top: ${l.w4.spacing.sm};
  border-top: 1px solid ${l.w4.colors.borderSubtle??l.w4.colors.border};
`,j=n().span`
  display: inline-flex;
  gap: 3px;
  align-items: center;
  padding: 4px 0;
`,M=n().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${l.w4.colors.mainTextMuted};
  animation: pulse 1.2s ease-in-out infinite;
  animation-delay: ${({delay:e})=>e}ms;

  @keyframes pulse {
    0%, 60%, 100% { opacity: 0.3; transform: scale(0.8); }
    30% { opacity: 1; transform: scale(1); }
  }
`,z=n().div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${l.w4.spacing.xs};
`,T=n().p`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  padding: ${l.w4.spacing.md} 0;
  margin: 0;
`,F=n().p`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
  padding: ${l.w4.spacing.sm};
  border: 1px dashed ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  margin: 0;
  text-align: center;
`;function S({t:e,locale:t}){let{comments:a,addComment:i,updateAnswer:n,removeComment:s}=(0,c.useAskComments)(),[l,g]=(0,o.useState)(""),[C,A]=(0,o.useState)(null),[D,R]=(0,o.useState)(null),I=(0,o.useRef)(null);(0,o.useEffect)(()=>{(0,c.resolveGroqKey)().then(R)},[]);let L=(0,o.useCallback)(async()=>{let e=l.trim();if(!e||!D||C)return;g("");let a=await i(e);if(!a)return;A(a),I.current=new AbortController;let r=`You are a fasting and diet coach assistant for the Forma app.
Answer questions about intermittent fasting, nutrition, weight loss, and wellness.
Be concise, practical, and supportive. Respond in ${"pt"===t?"Portuguese (PT)":"English"}.`;try{let o="";await (0,c.askGroqStream)(e,{key:D,locale:t,system:r,maxTokens:512,signal:I.current.signal,onChunk:e=>{o=e,n(a,e)}}),await n(a,o)}catch{}finally{A(null),I.current=null}},[l,D,C,i,n,t]),E=[...a].reverse();return(0,r.jsxs)(h,{children:[(0,r.jsx)(f,{children:e("forma.ask.title")}),D?(0,r.jsxs)(x,{children:[(0,r.jsx)(u,{value:l,onChange:e=>g(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),L())},placeholder:e("forma.ask.chat.placeholder"),disabled:!!C,rows:1}),(0,r.jsx)(d.$n,{variant:"primary",onClick:()=>{L()},disabled:!l.trim()||!!C,children:(0,r.jsx)(d.In,{name:"send",size:14})})]}):(0,r.jsx)(F,{children:e("forma.ask.noKey")}),0===E.length?(0,r.jsx)(T,{children:e("forma.ask.chat.empty")}):(0,r.jsx)(w,{children:E.map(e=>(0,r.jsxs)(b,{children:[(0,r.jsxs)(y,{children:[(0,r.jsx)($,{children:(0,r.jsx)(d.In,{name:"user",size:12,color:p.Js})}),(0,r.jsx)(v,{children:e.question})]}),e.id!==C||e.answer?e.answer?(0,r.jsx)(k,{children:(0,r.jsx)(d.mQ,{children:e.answer})}):null:(0,r.jsx)(k,{children:(0,r.jsxs)(j,{children:[(0,r.jsx)(M,{delay:0}),(0,r.jsx)(M,{delay:200}),(0,r.jsx)(M,{delay:400})]})}),(0,r.jsx)(z,{children:(0,r.jsx)(d.$n,{variant:"ghost",onClick:()=>{s(e.id)},disabled:e.id===C,children:(0,r.jsx)(d.In,{name:"trash",size:13})})}),(0,r.jsx)(m.I,{variant:"compact"})]},e.id))})]})}},77961(e,t,a){a.d(t,{P:()=>N});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(72799),l=a(6063),d=a(77752),c=a(63236),p=a(21571),m=a(32988);function g({data:e,color:t,width:a=60,height:o=22}){if(e.length<2)return null;let i=Math.min(...e),n=Math.max(...e)-i||1,s=e.map((t,r)=>{let s=r/(e.length-1)*a,l=o-(t-i)/n*(o-4)-2;return`${s.toFixed(1)},${l.toFixed(1)}`}).join(" ");return(0,r.jsx)("svg",{width:a,height:o,viewBox:`0 0 ${a} ${o}`,"aria-hidden":"true",style:{overflow:"visible",flexShrink:0},children:(0,r.jsx)("polyline",{points:s,fill:"none",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}let h=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=n().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${h} 0.25s ease both;
`,x=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,u=n().div`
  position: relative;
  overflow: hidden;
  background: ${p.xF};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${p.Js};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  transition: border-color 140ms ease;

  &:hover {
    border-color: ${l.w4.colors.borderStrong??l.w4.colors.mainTextMuted};
    border-left-color: ${p.Js};
  }
`,w=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`,b=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${p.Js};
`,y=n().button`
  background: transparent;
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 2px 8px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 140ms ease, border-color 140ms ease;
  min-height: 28px;

  &:hover {
    color: ${p.Js};
    border-color: ${p.Js};
  }
`,$=n().div`
  display: flex;
  align-items: baseline;
  gap: ${l.w4.spacing.sm};
`,v=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  line-height: 1;
`,k=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,j=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  color: ${({negative:e})=>e?"#7fb77e":l.w4.colors.danger??"#f85149"};
  background: ${({negative:e})=>e?"rgba(127,183,126,0.12)":"rgba(248,81,73,0.12)"};
  border-radius: 99px;
  padding: 2px 7px;
`,M=n().span`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
`,z=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`,T=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,F=n().div`
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid ${l.w4.colors.border};
  margin-top: ${l.w4.spacing.xs};
`,S=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
  border-bottom: 1px solid ${l.w4.colors.borderSubtle??l.w4.colors.border};

  &:last-child { border-bottom: none; }
`,C=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,A=n().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  font-weight: 500;
`,D=n().button`
  background: transparent;
  border: none;
  padding: 2px 6px;
  border-radius: ${l.w4.borderRadius.sm};
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color 140ms ease;
  min-width: 28px;
  min-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover { color: ${l.w4.colors.danger??"#f85149"}; }
`,R=n().form`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.sm};
  border: 1px solid ${p.Js}60;
  border-radius: ${l.w4.borderRadius.md};
  background: rgba(127, 183, 126, 0.04);
`,I=n().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  align-items: center;
`,L=n().label`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  flex-shrink: 0;
  min-width: 60px;
`,E=n().input`
  flex: 1;
  background: ${l.w4.colors.codeBg??l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 4px 8px;
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  outline: none;
  transition: border-color 140ms ease;

  &:focus { border-color: ${p.Js}; }
`,P=n().div`
  display: flex;
  gap: ${l.w4.spacing.xs};
  justify-content: flex-end;
`,H=n().button`
  background: ${p.Js};
  color: #fff;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  padding: 4px 14px;
  font-size: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  min-height: 28px;
  transition: opacity 140ms ease;

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,B=n().button`
  background: transparent;
  color: ${l.w4.colors.mainTextMuted};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 4px 12px;
  font-size: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  min-height: 28px;
  transition: color 140ms ease, border-color 140ms ease;

  &:hover { color: ${l.w4.colors.mainText}; border-color: ${l.w4.colors.mainTextMuted}; }
`;function W(){return new Date().toISOString().slice(0,10)}function O({kind:e,entries:t,t:a,onAdd:i,onDelete:n}){let[s,l]=(0,o.useState)(!1),[c,h]=(0,o.useState)(""),[f,x]=(0,o.useState)(W()),N=a("forma.body.kind."+e),Y=(0,o.useMemo)(()=>(0,d.latestMeasurement)(t,e),[t,e]),K=(0,o.useMemo)(()=>(0,d.measurementDelta)(t,e),[t,e]),J=(0,o.useMemo)(()=>(0,d.measurementSparkline)(t,e),[t,e]),G=(0,o.useMemo)(()=>[...t].sort((e,t)=>t.date.localeCompare(e.date)).slice(0,5),[t]),V=(0,o.useCallback)(e=>{e.preventDefault();let t=parseFloat(c.replace(",","."));isNaN(t)||t<=0||(i(t,f||W()),h(""),x(W()),l(!1))},[c,f,i]),q=(0,o.useCallback)(e=>{window.confirm(a("forma.body.confirmDelete"))&&n(e)},[a,n]);return(0,r.jsxs)(u,{children:[(0,r.jsxs)(w,{children:[(0,r.jsx)(b,{children:N}),(0,r.jsx)(y,{type:"button",onClick:()=>l(e=>!e),"aria-label":a("forma.body.logSave")+" "+N,children:s?a("forma.body.logCancel"):"+"})]}),Y?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)($,{children:[(0,r.jsx)(v,{children:Y.cm.toFixed(1)}),(0,r.jsx)(k,{children:a("forma.body.cm")}),null!==K&&(0,r.jsxs)(j,{negative:K<0,children:[K>0?"+":"",K.toFixed(1)," cm"]})]}),(0,r.jsxs)(z,{children:[(0,r.jsxs)(T,{children:[t.length," ",1===t.length?"entry":"entries"," \xb7 ",a("forma.body.since")]}),(0,r.jsx)(g,{data:J,color:p.Js,width:64,height:22})]})]}):(0,r.jsx)(M,{children:a("forma.body.noEntries")}),s&&(0,r.jsxs)(R,{onSubmit:V,children:[(0,r.jsxs)(I,{children:[(0,r.jsx)(L,{htmlFor:`bm-val-${e}`,children:a("forma.body.logValue")}),(0,r.jsx)(E,{id:`bm-val-${e}`,type:"number",inputMode:"decimal",step:"0.1",min:"1",max:"999",placeholder:"e.g. 88",value:c,onChange:e=>h(e.target.value),autoFocus:!0,required:!0})]}),(0,r.jsxs)(I,{children:[(0,r.jsx)(L,{htmlFor:`bm-date-${e}`,children:a("forma.body.logDate")}),(0,r.jsx)(E,{id:`bm-date-${e}`,type:"date",value:f,onChange:e=>x(e.target.value)})]}),(0,r.jsxs)(P,{children:[(0,r.jsx)(B,{type:"button",onClick:()=>{l(!1),h(""),x(W())},children:a("forma.body.logCancel")}),(0,r.jsx)(H,{type:"submit",disabled:!c,children:a("forma.body.logSave")})]})]}),G.length>0&&(0,r.jsx)(F,{children:G.map(e=>(0,r.jsxs)(S,{children:[(0,r.jsx)(C,{children:e.date}),(0,r.jsxs)(A,{children:[e.cm.toFixed(1)," ",a("forma.body.cm")]}),(0,r.jsx)(D,{type:"button",onClick:()=>q(e.id),"aria-label":a("forma.body.confirmDelete"),children:"\xd7"})]},e.id))}),(0,r.jsx)(m.I,{variant:"compact"})]})}function N({data:e,t,onAddMeasurement:a,onDeleteMeasurement:i}){let n=e.measurements??[],s=(0,o.useMemo)(()=>{let e=new Map;for(let t of d.MEASUREMENT_KINDS)e.set(t,(0,d.measurementsByKind)(n,t));return e},[n]);return(0,r.jsxs)(f,{children:[(0,r.jsx)(c.YZ,{children:t("forma.body.eyebrow")}),(0,r.jsx)(x,{children:d.MEASUREMENT_KINDS.map(e=>(0,r.jsx)(O,{kind:e,entries:s.get(e)??[],t:t,onAdd:(t,r)=>void a(e,t,r),onDelete:e=>void i(e)},e))})]})}},82167(e,t,a){a.d(t,{X:()=>x});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(72799),l=a(6063);let d=(0,s.keyframes)`
  from { transform: translateY(-100%); opacity: 0; }
  to   { transform: translateY(0);     opacity: 1; }
`,c=(0,s.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,p=n().div`
  position: fixed;
  top: var(--topbar-height, ${56}px);
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index: ${l.w4.zIndex.modal??1e3};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  animation: ${c} 0.18s ease both;

  @media (min-width: ${l.w4.breakpoints.md}) {
    align-items: center;
    padding: ${l.w4.spacing.lg};
  }
`,m=n().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 0 0 ${l.w4.borderRadius.lg} ${l.w4.borderRadius.lg};
  border-left: 2px solid #7fb77e;
  width: 100%;
  max-width: ${({maxWidth:e})=>e}px;
  max-height: 80dvh;
  overflow-y: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: column;
  animation: ${d} 0.22s ease both;

  @media (min-width: ${l.w4.breakpoints.md}) {
    border-radius: ${l.w4.borderRadius.lg};
    max-height: calc(100dvh - ${56}px - ${l.w4.spacing.xl});
    padding-bottom: max(0px, env(safe-area-inset-bottom));
  }
`,g=n().div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${l.w4.spacing.sm} 0;
  flex-shrink: 0;
  touch-action: none;
  cursor: grab;
  order: 2;

  @media (min-width: ${l.w4.breakpoints.md}) {
    cursor: default;
    pointer-events: none;
    order: 0;
  }
`,h=n().div`
  width: 36px;
  height: 4px;
  border-radius: 2px;
  background: ${l.w4.colors.mainTextMuted};
  opacity: 0.4;
`,f=n().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  order: 1;
  min-height: 0;
  overflow-y: auto;
`;function x({open:e,onClose:t,children:a,maxWidth:i=480,ariaLabel:n}){let s=(0,o.useRef)(null);(0,o.useEffect)(()=>{if(!e)return;let a=e=>{"Escape"===e.key&&t()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[e,t]),(0,o.useEffect)(()=>{if(!e||!s.current)return;let t=s.current.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t?.focus()},[e]);let l=(0,o.useRef)(null),d=(0,o.useCallback)(e=>{l.current={y:e.touches[0].clientY}},[]),c=(0,o.useCallback)(e=>{if(!l.current||!s.current)return;let a=e.changedTouches[0].clientY-l.current.y;l.current=null,a>=0||-a/s.current.getBoundingClientRect().height>.3&&t()},[t]),u=(0,o.useRef)(null),w=(0,o.useCallback)(e=>{u.current={y:e.clientY}},[]),b=(0,o.useCallback)(e=>{if(!u.current||!s.current)return;let a=e.clientY-u.current.y;u.current=null,a>=0||-a/s.current.getBoundingClientRect().height>.3&&t()},[t]);return e?(0,r.jsx)(p,{onClick:t,role:"dialog","aria-modal":"true","aria-label":n,children:(0,r.jsxs)(m,{ref:s,maxWidth:i,onClick:e=>e.stopPropagation(),children:[(0,r.jsx)(g,{onTouchStart:d,onTouchEnd:c,onPointerDown:w,onPointerUp:b,"aria-hidden":"true",children:(0,r.jsx)(h,{})}),(0,r.jsx)(f,{children:a})]})}):null}},33499(e,t,a){a.d(t,{N:()=>k});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(6063),l=a(63236),d=a(77752),c=a(82167),p=a(21571);let m=n().div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.lg};
  padding: ${s.w4.spacing.md};
  padding-bottom: ${s.w4.spacing.lg};

  @media (min-width: ${s.w4.breakpoints.md}) {
    padding: ${s.w4.spacing.lg};
  }
`,g=n().h3`
  font-size: 16px;
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  margin: 0;
`,h=n().div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.sm};
`,f=n().label`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: ${s.w4.colors.mainTextMuted};
`,x=n().div`
  display: flex;
  gap: ${s.w4.spacing.xs};
`,u=n().button`
  flex: 1;
  height: 44px;
  border-radius: ${s.w4.borderRadius.md};
  border: 1px solid ${({active:e})=>e?p.Js:s.w4.colors.border};
  background: ${({active:e})=>e?`${p.Js}22`:s.w4.colors.mainBg};
  color: ${({active:e})=>e?p.Js:s.w4.colors.mainTextMuted};
  font-size: 13px;
  font-weight: ${({active:e})=>e?600:400};
  font-family: ${s.w4.typography.fontFamilyMono};
  cursor: pointer;
  transition: border-color 0.12s, background 0.12s, color 0.12s;
  &:hover {
    border-color: ${p.Js};
    color: ${p.Js};
  }
`,w=n().div`
  display: flex;
  gap: ${s.w4.spacing.sm};
`,b=n().button`
  flex: 1;
  height: 44px;
  border-radius: ${s.w4.borderRadius.md};
  border: 1px solid ${({active:e,danger:t})=>e?t?s.w4.colors.danger:p.Js:s.w4.colors.border};
  background: ${({active:e,danger:t})=>e?t?`${s.w4.colors.danger}22`:`${p.Js}22`:s.w4.colors.mainBg};
  color: ${({active:e,danger:t})=>e?t?s.w4.colors.danger:p.Js:s.w4.colors.mainTextMuted};
  font-size: 13px;
  font-weight: ${({active:e})=>e?600:400};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${s.w4.spacing.xs};
  transition: border-color 0.12s, background 0.12s, color 0.12s;
`,y=n().textarea`
  width: 100%;
  min-height: 72px;
  background: ${s.w4.colors.mainBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: ${s.w4.spacing.sm};
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamily};
  color: ${s.w4.colors.mainText};
  resize: vertical;
  outline: none;
  box-sizing: border-box;
  &:focus {
    border-color: ${p.Js};
  }
  &::placeholder {
    color: ${s.w4.colors.mainTextMuted};
  }
`,$=n().div`
  display: flex;
  gap: ${s.w4.spacing.sm};
  justify-content: flex-end;
`,v=[1,2,3,4,5];function k({open:e,onClose:t,t:a}){let{checkIn:i,saveCheckIn:n}=(0,d.useCheckIn)(),[s,p]=(0,o.useState)(i?.hunger??3),[j,M]=(0,o.useState)(i?.energy??3),[z,T]=(0,o.useState)(i?.adherence??!0),[F,S]=(0,o.useState)(i?.note??""),[C,A]=(0,o.useState)(!1),D=(0,o.useCallback)(async()=>{A(!0);try{await n({hunger:s,energy:j,adherence:z,note:F.trim()||void 0}),t()}finally{A(!1)}},[n,s,j,z,F,t]);return(0,r.jsx)(c.X,{open:e,onClose:t,ariaLabel:a("forma.checkin.title"),children:(0,r.jsxs)(m,{children:[(0,r.jsx)(g,{children:a("forma.checkin.title")}),(0,r.jsxs)(h,{children:[(0,r.jsx)(f,{children:a("forma.checkin.hunger")}),(0,r.jsx)(x,{children:v.map(e=>(0,r.jsx)(u,{active:s===e,onClick:()=>p(e),"aria-pressed":s===e,children:e},e))})]}),(0,r.jsxs)(h,{children:[(0,r.jsx)(f,{children:a("forma.checkin.energy")}),(0,r.jsx)(x,{children:v.map(e=>(0,r.jsx)(u,{active:j===e,onClick:()=>M(e),"aria-pressed":j===e,children:e},e))})]}),(0,r.jsxs)(h,{children:[(0,r.jsx)(f,{children:a("forma.checkin.adherence")}),(0,r.jsxs)(w,{children:[(0,r.jsxs)(b,{active:z,onClick:()=>T(!0),"aria-pressed":z,children:[(0,r.jsx)(l.In,{name:"check",size:14}),a("forma.checkin.adherenceYes")]}),(0,r.jsxs)(b,{active:!z,danger:!0,onClick:()=>T(!1),"aria-pressed":!z,children:[(0,r.jsx)(l.In,{name:"close",size:14}),a("forma.checkin.adherenceNo")]})]})]}),(0,r.jsxs)(h,{children:[(0,r.jsx)(f,{children:a("forma.checkin.note")}),(0,r.jsx)(y,{value:F,onChange:e=>S(e.target.value),placeholder:a("forma.checkin.notePlaceholder"),rows:2})]}),(0,r.jsxs)($,{children:[(0,r.jsx)(l.$n,{variant:"ghost",onClick:t,disabled:C,children:a("forma.checkin.cancel")}),(0,r.jsx)(l.$n,{variant:"success",onClick:()=>{D()},disabled:C,children:a("forma.checkin.save")})]})]})})}},24470(e,t,a){a.d(t,{s:()=>k});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(72799),l=a(6063),d=a(63236),c=a(77752),p=a(21571),m=a(32988);let g=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,h=n().section`
  position: relative;
  overflow: hidden;
  background: ${p.xF};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${({accent:e})=>e};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${g} 0.25s ease both;
`,f=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`,x=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(127, 183, 126, 0.85);
`,u=n().p`
  font-size: 14px;
  color: ${l.w4.colors.mainText};
  line-height: 1.6;
  margin: 0;
`,w=n().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.xs};
`,b=n().span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({accent:e})=>`${e}1a`};
  border: 1px solid ${({accent:e})=>`${e}33`};
  color: ${l.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
`,y=n().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.md} 0;
  text-align: center;
`,$=n().p`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin: 0;
`,v=n().div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${l.w4.spacing.xs};
  border-top: 1px solid ${l.w4.colors.border};
`;function k({t:e}){var t;let{output:a,refresh:i}=(0,c.useCoach)(),[n,s]=(0,o.useState)(!1),g=(0,o.useCallback)(async()=>{s(!0);try{await i()}finally{s(!1)}},[i]),j=()=>{g()};if(!a)return(0,r.jsxs)(h,{accent:p.Js,children:[(0,r.jsx)(f,{children:(0,r.jsx)(x,{children:e("forma.coach.title")})}),(0,r.jsxs)(y,{children:[(0,r.jsx)(d.In,{name:"message",size:24,color:l.w4.colors.mainTextMuted}),(0,r.jsx)($,{children:e("forma.coach.empty")}),(0,r.jsx)(d.$n,{variant:"accent",onClick:j,disabled:n,children:e("forma.coach.generate")})]}),(0,r.jsx)(m.I,{variant:"compact"})]});let M=(t=a.messageKey,/lowAdherence|hunger/.test(t)?"#f87171":/stall|lowEnergy/.test(t)?"#facc15":p.Js);return(0,r.jsxs)(h,{accent:M,children:[(0,r.jsx)(f,{children:(0,r.jsx)(x,{children:e("forma.coach.title")})}),(0,r.jsx)(u,{children:e(a.messageKey,a.vars)}),a.adjustments.length>0&&(0,r.jsx)(w,{children:a.adjustments.map((t,a)=>(0,r.jsx)(b,{accent:M,children:e(t.reasonKey)},a))}),(0,r.jsx)(v,{children:(0,r.jsxs)(d.$n,{variant:"ghost",onClick:j,disabled:n,children:[(0,r.jsx)(d.In,{name:"rotate-cw",size:13}),e("forma.coach.refresh")]})}),(0,r.jsx)(m.I,{variant:"compact"})]})}},78531(e,t,a){a.d(t,{F:()=>$});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(72799),l=a(6063),d=a(77752),c=a(21571);let p=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,m=n().button`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: ${l.w4.spacing.lg};
  width: 100%;
  padding: ${l.w4.spacing.lg} ${l.w4.spacing.xl};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  background:
    radial-gradient(circle at 18% 30%, rgba(127, 183, 126, 0.20), transparent 55%),
    radial-gradient(circle at 82% 78%, rgba(232, 154, 92, 0.20), transparent 60%),
    linear-gradient(135deg, #14241c 0%, #0f1612 100%);
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  animation: ${p} 0.25s ease both;
  transition: border-color ${l.w4.transitions.base}, transform ${l.w4.transitions.base};

  &:hover {
    border-color: rgba(127, 183, 126, 0.5);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    padding: ${l.w4.spacing.lg};
    gap: ${l.w4.spacing.md};
  }
`,g=n().div`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: ${({pct:e,active:t})=>t?`conic-gradient(${c.Js} 0deg, ${c.yl} ${3.6*e}deg, rgba(255,255,255,0.06) ${3.6*e}deg 360deg)`:"conic-gradient(rgba(127,183,126,0.18) 0deg 360deg)"};
  display: grid;
  place-items: center;
  flex-shrink: 0;
  box-shadow:
    0 0 48px rgba(127, 183, 126, 0.14),
    0 0 96px rgba(232, 154, 92, 0.08);

  &::after {
    content: '';
    width: 148px;
    height: 148px;
    border-radius: 50%;
    background: #14241c;
    grid-area: 1 / 1;
  }
`,h=n().span`
  grid-area: 1 / 1;
  z-index: 1;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 32px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
`,f=n().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,x=n().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(127, 183, 126, 0.85);
`,u=n().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: clamp(28px, 5vw, 36px);
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
  line-height: 1;
`,w=n().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,b=n().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 99px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  line-height: 1.4;
  align-self: flex-start;
  border: 1px solid ${({kind:e})=>"refeed"===e?`${c.yl}60`:`${c.m5}50`};
  color: ${({kind:e})=>"refeed"===e?c.yl:c.m5};
  background: ${({kind:e})=>"refeed"===e?"rgba(232, 154, 92, 0.10)":"rgba(95, 179, 217, 0.10)"};
`,y=n().span`
  position: absolute;
  top: ${({top:e})=>e}px;
  right: ${({right:e})=>e}px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${c.yl};
  opacity: ${({opacity:e})=>e};
  box-shadow: 0 0 8px rgba(232, 154, 92, 0.7);
  pointer-events: none;
`;function $({data:e,t,onClick:a}){var i;let n,s,l,c=16===(i=e.goal.targetHours??16)?"16:8":18===i?"18:6":20===i?"20:4":"custom",[p,v]=(0,o.useState)(()=>Date.now()),k=(0,d.currentFast)(e,p),j=null!==k;(0,o.useEffect)(()=>{if(!j)return;let e=window.setInterval(()=>v(Date.now()),1e3);return()=>window.clearInterval(e)},[j]);let M=j?Math.min(100,100*k.percent):0,z=j?`${k.session.targetHours}h`:"custom"===c?`${e.goal.targetHours??16}h`:c,T=j?`${k.hoursElapsed.toFixed(1)}H`:`${e.goal.targetHours??16}H`,F=j?k.remainingMs>0?(s=Math.floor((n=Math.max(0,Math.floor(k.remainingMs/1e3)))/3600),l=Math.floor(n%3600/60),`${s}h ${l.toString().padStart(2,"0")}m`).toUpperCase()+" \xb7 "+t("forma.timer.remaining").toUpperCase():t("forma.timer.complete").toUpperCase():t("forma.hero.notFasting").toUpperCase(),S=t(j?"forma.hero.inProgress":"forma.hero.fastIdleShort");return(0,r.jsxs)(m,{type:"button",onClick:a,"aria-label":j?t("forma.hero.fastActive",{h:k.hoursElapsed.toFixed(1)}):t("forma.hero.fastIdle"),children:[(0,r.jsx)(g,{pct:M,active:j,children:(0,r.jsx)(h,{children:z})}),(0,r.jsxs)(f,{children:[(0,r.jsx)(x,{children:S}),(0,r.jsx)(u,{children:T}),(0,r.jsx)(w,{children:F}),j&&("refeed"===k.session.kind||"breakday"===k.session.kind)&&(0,r.jsx)(b,{kind:k.session.kind,children:t("refeed"===k.session.kind?"forma.fast.kind.refeed":"forma.fast.kind.breakday")})]}),(0,r.jsx)(y,{top:18,right:22,opacity:.95}),(0,r.jsx)(y,{top:42,right:14,opacity:.7}),(0,r.jsx)(y,{top:66,right:26,opacity:.45})]})}},17102(e,t,a){a.d(t,{Y:()=>F});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(6063),l=a(63236),d=a(77752),c=a(82167),p=a(21571);function m(){return new Date().toISOString().slice(0,10)}function g(e){let t=new Date(e),a=e=>String(e).padStart(2,"0");return`${t.getFullYear()}-${a(t.getMonth()+1)}-${a(t.getDate())}T${a(t.getHours())}:${a(t.getMinutes())}`}function h(){return g(Date.now())}function f(e){if(!e)return null;let t=new Date(e).getTime();return Number.isNaN(t)?null:t}let x=n().div`
  padding: ${s.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.md};
`,u=n().div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.sm};
`,w=n().div`
  border-top: 1px solid ${s.w4.colors.border};
  padding-top: ${s.w4.spacing.md};
`,b=n().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};

  @media (max-width: ${s.w4.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`,y=n().label`
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
`,$=n().input`
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
    border-color: ${p.Js};
  }
`,v=n().select`
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
    border-color: ${p.Js};
  }
`,k=n()(v)``,j=n().button`
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
    border-color: ${p.Js};
  }
`,M=n().div`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${p.Js};
  padding: 0 ${s.w4.spacing.sm};
  margin-top: -${s.w4.spacing.xs};
`,z=n().span`
  color: ${s.w4.colors.mainTextMuted};
`,T=n().div`
  display: flex;
  gap: ${s.w4.spacing.sm};
  padding-top: ${s.w4.spacing.sm};
`;function F({open:e,onClose:t,data:a,t:i,initialMode:n,editing:p,onStartFast:S,onStopFast:C,onLogPastFast:A,onEditFast:D,onLogMeal:R,onEditMeal:I,onLogWeight:L,onEditWeight:E,onLogWalk:P,onEditWalk:H,onLogWater:B,onEditWater:W}){let[O,N]=(0,o.useState)(n??null),[Y,K]=(0,o.useState)("16:8"),[J,G]=(0,o.useState)("16"),[V,q]=(0,o.useState)("16:8"),[U,_]=(0,o.useState)("16"),[Q,X]=(0,o.useState)(h),[Z,ee]=(0,o.useState)(""),[et,ea]=(0,o.useState)(null),[er,eo]=(0,o.useState)("dinner"),[ei,en]=(0,o.useState)(""),[es,el]=(0,o.useState)(""),[ed,ec]=(0,o.useState)(""),[ep,em]=(0,o.useState)(m),[eg,eh]=(0,o.useState)(null),[ef,ex]=(0,o.useState)(""),[eu,ew]=(0,o.useState)(m),[eb,ey]=(0,o.useState)(""),[e$,ev]=(0,o.useState)(m),[ek,ej]=(0,o.useState)(""),[eM,ez]=(0,o.useState)(m);(0,o.useEffect)(()=>{if(e)if(ea(null),p?.kind==="fast"){let e=p.entry;N("pastFast"),q(e.protocol),_(String(e.targetHours)),X(g(e.startedAt)),ee(e.endedAt?g(e.endedAt):"")}else if(p?.kind==="meal"){let e=p.entry;N("meal"),eo(e.slot),en(String(e.proteinG??"")),el(String(e.kcal??"")),ec(e.notes??""),em(e.date)}else p?.kind==="weight"?(N("weight"),ex(String(p.entry.kg)),ew(p.entry.date)):p?.kind==="walk"?(N("walk"),ey(String(p.entry.minutes)),ev(p.entry.date)):p?.kind==="water"?(N("water"),ej(String(p.entry.ml)),ez(p.entry.date)):n&&(N(n),"pastFast"===n?(q("16:8"),_("16"),X(h()),ee("")):"meal"===n?(eo("dinner"),en(""),el(""),ec(""),em(m()),eh(null)):"weight"===n?(ex(""),ew(m())):"walk"===n?(ey(""),ev(m())):"water"===n&&(ej(""),ez(m())))},[e,p,n]);let eT=a.sessions.some(e=>void 0===e.endedAt),eF=p?.kind??("startFast"===n||"pastFast"===n?"fast":"meal"===n?"meal":"weight"===n?"weight":"walk"===n?"walk":"water"===n?"water":null),eS=null===eF||"fast"===eF,eC=null===eF||"meal"===eF,eA=null===eF||"weight"===eF,eD=null===eF||"walk"===eF,eR=null===eF||"water"===eF,eI=(0,o.useCallback)(()=>{N(null)},[]),eL=(0,o.useCallback)(()=>{eI(),t()},[eI,t]),eE=(0,o.useCallback)(()=>{let e=f(Q);if(null===e)return;let t=Z.trim(),a=t?f(t):null;if(t&&null===a)return;if(null!==a&&a<=e)return void ea(i("forma.sheet.fastInvalidRange"));let r=parseInt(U,10),o=isNaN(r)||r<1?16:r;p?.kind==="fast"&&D?D(p.entry.id,V,o,e,a??void 0):A&&A(V,o,e,a??void 0),eL()},[p,D,A,V,U,Q,Z,i,eL]),eP=(0,o.useCallback)(()=>{let e=parseInt(J,10);isNaN(e)||e<1||(S(Y,e),eL())},[Y,J,S,eL]),eH=(0,o.useMemo)(()=>(0,d.estimateNutrition)(ed),[ed]),eB=(0,o.useCallback)(e=>{eh(e.id),en(String(e.proteinG)),el(String(e.kcal)),ec(i(e.nameKey))},[i]),eW=(0,o.useCallback)(()=>{let e=""===ei.trim()?eH.proteinG:parseFloat(ei)||0,t=""===es.trim()?eH.kcal:parseFloat(es)||0;p?.kind==="meal"&&I?I(p.entry.id,er,e,t,ed.trim(),ep):R(er,e,t,ed.trim(),ep),eL()},[p,I,er,ei,es,eH,ed,ep,R,eL]),eO=(0,o.useCallback)(()=>{let e=parseFloat(ef.replace(",","."));isNaN(e)||e<=0||(p?.kind==="weight"&&E?E(eu,e):L(e,eu),eL())},[p,E,ef,eu,L,eL]),eN=(0,o.useCallback)(()=>{let e=parseInt(eb,10);isNaN(e)||e<=0||(p?.kind==="walk"&&H?H(p.entry.id,e,e$):P(e,e$),eL())},[p,H,eb,e$,P,eL]),eY=(0,o.useCallback)(()=>{let e=parseInt(ek,10);isNaN(e)||e<=0||(p?.kind==="water"&&W?W(p.entry.id,e,eM):B(e,eM),eL())},[p,W,ek,eM,B,eL]);return(0,r.jsx)(c.X,{open:e,onClose:eL,maxWidth:520,ariaLabel:i("forma.sheet.ariaLabel"),children:(0,r.jsxs)(x,{children:[(0,r.jsx)(l.YZ,{children:p?.kind==="fast"?i("forma.sheet.titleEditFast"):p?.kind==="meal"?i("forma.sheet.titleEditMeal"):p?.kind==="weight"?i("forma.sheet.titleEditWeight"):p?.kind==="walk"?i("forma.sheet.titleEditWalk"):p?.kind==="water"?i("forma.sheet.titleEditWater"):"pastFast"===n?i("forma.sheet.titleAddFast"):"meal"===n?i("forma.sheet.titleAddMeal"):"weight"===n?i("forma.sheet.titleAddWeight"):"walk"===n?i("forma.sheet.titleAddWalk"):"water"===n?i("forma.sheet.titleAddWater"):i("forma.sheet.title")}),eS&&(0,r.jsx)(w,{children:(0,r.jsx)(l.YZ,{children:i("forma.sheet.fastSection")})}),eS&&("pastFast"===O?(0,r.jsxs)(u,{children:[(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"past-fast-protocol",children:i("forma.rail.title")}),(0,r.jsxs)(v,{id:"past-fast-protocol",value:V,onChange:e=>{let t=e.target.value;q(t),"custom"!==t&&_(t.split(":")[0])},children:[(0,r.jsx)("option",{value:"16:8",children:"16:8"}),(0,r.jsx)("option",{value:"18:6",children:"18:6"}),(0,r.jsx)("option",{value:"20:4",children:"20:4"}),(0,r.jsx)("option",{value:"custom",children:i("forma.protocol.custom")})]})]}),"custom"===V&&(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"past-fast-target",children:i("forma.sheet.fastTargetLabel")}),(0,r.jsx)($,{id:"past-fast-target",type:"number",value:U,min:1,max:72,onChange:e=>_(e.target.value)})]}),(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"past-fast-start",children:i("forma.sheet.fastStartLabel")}),(0,r.jsx)($,{id:"past-fast-start",type:"datetime-local",value:Q,max:h(),onChange:e=>{X(e.target.value),ea(null)}})]}),(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"past-fast-end",children:i("forma.sheet.fastEndLabel")}),(0,r.jsx)($,{id:"past-fast-end",type:"datetime-local",value:Z,max:h(),placeholder:i("forma.sheet.fastEndHint"),onChange:e=>{ee(e.target.value),ea(null)}})]}),et&&(0,r.jsx)("div",{style:{fontSize:11,fontFamily:s.w4.typography.fontFamilyMono,color:s.w4.colors.danger},children:et}),(0,r.jsxs)(T,{children:[(0,r.jsx)(l.$n,{variant:"primary",onClick:eE,children:p?.kind==="fast"?i("forma.sheet.saveEdit"):i("forma.sheet.save")}),(0,r.jsx)(l.$n,{variant:"ghost",onClick:eI,children:i("forma.sheet.cancel")})]})]}):eT?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.$n,{variant:"danger",onClick:()=>{C(),eL()},children:i("forma.stop")}),(0,r.jsxs)(j,{onClick:()=>N("pastFast"),children:[(0,r.jsx)(l.In,{name:"clock",size:16}),i("forma.sheet.logPastFast")]})]}):"startFast"===O?(0,r.jsxs)(u,{children:[(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"fast-protocol",children:i("forma.rail.title")}),(0,r.jsxs)(v,{id:"fast-protocol",value:Y,onChange:e=>{let t=e.target.value;K(t),"custom"!==t&&G(t.split(":")[0])},children:[(0,r.jsx)("option",{value:"16:8",children:"16:8"}),(0,r.jsx)("option",{value:"18:6",children:"18:6"}),(0,r.jsx)("option",{value:"20:4",children:"20:4"}),(0,r.jsx)("option",{value:"custom",children:i("forma.protocol.custom")})]})]}),"custom"===Y&&(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"fast-hours",children:i("forma.timer.target")}),(0,r.jsx)($,{id:"fast-hours",type:"number",value:J,min:1,max:72,onChange:e=>G(e.target.value)})]}),(0,r.jsxs)(T,{children:[(0,r.jsx)(l.$n,{variant:"success",onClick:eP,children:i("forma.start")}),(0,r.jsx)(l.$n,{variant:"ghost",onClick:eI,children:i("forma.sheet.cancel")})]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(j,{onClick:()=>N("startFast"),children:[(0,r.jsx)(l.In,{name:"play",size:16}),i("forma.start")]}),(0,r.jsxs)(j,{onClick:()=>N("pastFast"),children:[(0,r.jsx)(l.In,{name:"clock",size:16}),i("forma.sheet.logPastFast")]})]})),eC&&(0,r.jsx)(w,{children:(0,r.jsx)(l.YZ,{children:i("forma.sheet.mealSection")})}),eC&&("meal"===O?(0,r.jsxs)(u,{children:[(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"meal-slot",children:i("forma.meal.lunch")}),(0,r.jsxs)(k,{id:"meal-slot",value:er,onChange:e=>eo(e.target.value),children:[(0,r.jsx)("option",{value:"lunch",children:i("forma.meal.lunch")}),(0,r.jsx)("option",{value:"dinner",children:i("forma.meal.dinner")}),(0,r.jsx)("option",{value:"snack",children:i("forma.meal.snack")})]})]}),(a.recipes?.length??0)>0&&(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{children:i("forma.meal.fromRecipe")}),(0,r.jsx)(l.ms,{align:"left",trigger:(0,r.jsx)(l.$n,{variant:"ghost",children:eg?i(a.recipes.find(e=>e.id===eg)?.nameKey??"forma.meal.fromRecipe"):i("forma.meal.fromRecipe")}),children:a.recipes.map(e=>(0,r.jsx)(l.tJ,{onClick:()=>eB(e),children:i(e.nameKey)},e.id))})]}),(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"meal-notes",children:i("forma.meal.template")}),(0,r.jsx)($,{id:"meal-notes",type:"text",value:ed,placeholder:"3 ovos, 100g atum, salada…",onChange:e=>ec(e.target.value)})]}),eH.matched.length>0&&(0,r.jsxs)(M,{children:[i("forma.sheet.estimateHint",{protein:eH.proteinG,kcal:eH.kcal}),eH.unmatched.length>0&&(0,r.jsxs)(z,{children:[" \xb7 ",i("forma.sheet.estimateUnmatched",{items:eH.unmatched.join(", ")})]})]}),(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"meal-protein",children:i("forma.sheet.proteinLabel")}),(0,r.jsx)($,{id:"meal-protein",type:"number",value:ei,min:0,placeholder:eH.proteinG>0?`≈ ${eH.proteinG}`:"0",onChange:e=>en(e.target.value)})]}),(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"meal-kcal",children:i("forma.sheet.kcalLabel")}),(0,r.jsx)($,{id:"meal-kcal",type:"number",value:es,min:0,placeholder:eH.kcal>0?`≈ ${eH.kcal}`:"0",onChange:e=>el(e.target.value)})]}),(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"meal-date",children:i("forma.sheet.dateLabel")}),(0,r.jsx)($,{id:"meal-date",type:"date",value:ep,max:m(),onChange:e=>em(e.target.value)})]}),(0,r.jsxs)(T,{children:[(0,r.jsx)(l.$n,{variant:"primary",onClick:eW,children:p?.kind==="meal"?i("forma.sheet.saveEdit"):i("forma.sheet.save")}),(0,r.jsx)(l.$n,{variant:"ghost",onClick:eI,children:i("forma.sheet.cancel")})]})]}):(0,r.jsxs)(j,{onClick:()=>N("meal"),children:[(0,r.jsx)(l.In,{name:"utensils",size:16}),i("forma.sheet.logMeal")]})),eA&&(0,r.jsx)(w,{children:(0,r.jsx)(l.YZ,{children:i("forma.sheet.weightSection")})}),eA&&("weight"===O?(0,r.jsxs)(u,{children:[(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"weight-kg",children:i("forma.sheet.weightLabel")}),(0,r.jsx)($,{id:"weight-kg",type:"number",value:ef,min:20,max:300,step:.1,placeholder:"84.2",onChange:e=>ex(e.target.value)})]}),(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"weight-date",children:i("forma.sheet.dateLabel")}),(0,r.jsx)($,{id:"weight-date",type:"date",value:eu,max:m(),onChange:e=>ew(e.target.value)})]}),(0,r.jsxs)(T,{children:[(0,r.jsx)(l.$n,{variant:"primary",onClick:eO,children:p?.kind==="weight"?i("forma.sheet.saveEdit"):i("forma.sheet.save")}),(0,r.jsx)(l.$n,{variant:"ghost",onClick:eI,children:i("forma.sheet.cancel")})]})]}):(0,r.jsxs)(j,{onClick:()=>N("weight"),children:[(0,r.jsx)(l.In,{name:"trending-up",size:16}),i("forma.sheet.logWeight")]})),eD&&(0,r.jsx)(w,{children:(0,r.jsx)(l.YZ,{children:i("forma.sheet.walkSection")})}),eD&&("walk"===O?(0,r.jsxs)(u,{children:[(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"walk-min",children:i("forma.sheet.walkLabel")}),(0,r.jsx)($,{id:"walk-min",type:"number",value:eb,min:1,max:600,placeholder:"30",onChange:e=>ey(e.target.value)})]}),(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"walk-date",children:i("forma.sheet.dateLabel")}),(0,r.jsx)($,{id:"walk-date",type:"date",value:e$,max:m(),onChange:e=>ev(e.target.value)})]}),(0,r.jsxs)(T,{children:[(0,r.jsx)(l.$n,{variant:"primary",onClick:eN,children:p?.kind==="walk"?i("forma.sheet.saveEdit"):i("forma.sheet.save")}),(0,r.jsx)(l.$n,{variant:"ghost",onClick:eI,children:i("forma.sheet.cancel")})]})]}):(0,r.jsxs)(j,{onClick:()=>N("walk"),children:[(0,r.jsx)(l.In,{name:"activity",size:16}),i("forma.sheet.logWalk")]})),eR&&(0,r.jsx)(w,{children:(0,r.jsx)(l.YZ,{children:i("forma.today.water")})}),eR&&("water"===O?(0,r.jsxs)(u,{children:[(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"water-ml",children:i("forma.sheet.waterLabel")}),(0,r.jsx)($,{id:"water-ml",type:"number",value:ek,min:1,max:5e3,placeholder:i("forma.sheet.waterPlaceholder"),onChange:e=>ej(e.target.value)})]}),(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{htmlFor:"water-date",children:i("forma.sheet.dateLabel")}),(0,r.jsx)($,{id:"water-date",type:"date",value:eM,max:m(),onChange:e=>ez(e.target.value)})]}),(0,r.jsxs)(T,{children:[(0,r.jsx)(l.$n,{variant:"primary",onClick:eY,children:p?.kind==="water"?i("forma.sheet.saveEdit"):i("forma.sheet.save")}),(0,r.jsx)(l.$n,{variant:"ghost",onClick:eI,children:i("forma.sheet.cancel")})]})]}):(0,r.jsxs)(j,{onClick:()=>N("water"),children:[(0,r.jsx)(l.In,{name:"droplets",size:16}),i("forma.water.add250")]}))]})})}},36971(e,t,a){a.d(t,{z:()=>b});var r=a(65723),o=a(36859),i=a.n(o),n=a(72799),s=a(6063),l=a(63236),d=a(77752);let c={endFastSoon:{color:"#7fb77e",glyph:"⏱",tint1:"rgba(127, 183, 126, 0.20)",tint2:"rgba(232, 154, 92, 0.16)",surface:"linear-gradient(135deg, #14241c 0%, #0f1612 100%)"},endFastDone:{color:"#e89a5c",glyph:"✓",tint1:"rgba(232, 154, 92, 0.24)",tint2:"rgba(127, 183, 126, 0.14)",surface:"linear-gradient(135deg, #241c14 0%, #16120f 100%)"},weighIn:{color:"#a78bfa",glyph:"⚖",tint1:"rgba(167, 139, 250, 0.20)",tint2:"rgba(139, 123, 255, 0.14)",surface:"linear-gradient(135deg, #1a1a2e 0%, #12121f 100%)"},logLunch:{color:"#f97316",glyph:"\uD83C\uDF74",tint1:"rgba(249, 115, 22, 0.20)",tint2:"rgba(232, 154, 92, 0.14)",surface:"linear-gradient(135deg, #261a14 0%, #18130f 100%)"},addWater:{color:"#58a6ff",glyph:"\uD83D\uDCA7",tint1:"rgba(88, 166, 255, 0.22)",tint2:"rgba(127, 183, 126, 0.12)",surface:"linear-gradient(135deg, #142028 0%, #0f161c 100%)"}},p=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,m=i().div`
  position: relative;
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.lg} ${s.w4.spacing.xl};
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: ${s.w4.spacing.lg};
  background:
    radial-gradient(circle at 12% 50%, ${({tint1:e})=>e}, transparent 55%),
    radial-gradient(circle at 92% 60%, ${({tint2:e})=>e}, transparent 60%),
    ${({surface:e})=>e};
  overflow: hidden;
  animation: ${p} 0.25s ease both;
  transition: border-color ${s.w4.transitions.base}, transform ${s.w4.transitions.base};
  min-width: 0;

  &:hover {
    border-color: ${({accent:e})=>e}80;
    transform: translateY(-1px);
  }

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    justify-items: stretch;
    padding: ${s.w4.spacing.lg};
  }
`,g=i().span`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: linear-gradient(135deg, ${({accent:e})=>e}33, ${({accent:e})=>e}14);
  border: 1px solid ${({accent:e})=>e}40;
  display: grid;
  place-items: center;
  font-size: 26px;
  line-height: 1;
  flex-shrink: 0;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.04) inset,
    0 0 24px ${({accent:e})=>e}26;

  @media (max-width: ${s.w4.breakpoints.md}) {
    width: 48px;
    height: 48px;
    font-size: 22px;
  }
`,h=i().span`
  position: absolute;
  top: ${({top:e})=>e}px;
  right: ${({right:e})=>e}px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({accent:e})=>e};
  opacity: ${({opacity:e})=>e};
  box-shadow: 0 0 8px ${({accent:e})=>e}b3;
  pointer-events: none;
`,f=i().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1 1 auto;
  min-width: 0;
`,x=i().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({accent:e})=>e}d9;
  line-height: 1;
`,u=i().div`
  font-size: 16px;
  font-weight: 600;
  color: ${s.w4.colors.mainText};
  line-height: 1.25;
  font-variant-numeric: tabular-nums;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${s.w4.breakpoints.md}) {
    white-space: normal;
  }
`,w=i().div`
  flex-shrink: 0;

  @media (max-width: ${s.w4.breakpoints.md}) {
    width: 100%;
    button { width: 100%; justify-content: center; }
  }
`;function b({data:e,t,onOpenSheet:a}){let o=function(e,t,a=new Date){let r=a.getHours(),o=a.toISOString().slice(0,10),i=(0,d.currentFast)(e,a.getTime());if(null!==i){if(i.remainingMs<=0)return{id:"endFastDone",copyKey:"forma.nextUp.endFastDone",ctaKey:"forma.nextUp.cta.endFast",action:()=>t("startFast")};if(i.remainingMs<72e5)return{id:"endFastSoon",copyKey:"forma.nextUp.endFastSoon",copyVars:{h:(i.remainingMs/36e5).toFixed(1)},ctaKey:"forma.nextUp.cta.endFast",action:()=>t("startFast")}}if(r>=9&&!e.weights.some(e=>e.date===o))return{id:"weighIn",copyKey:"forma.nextUp.weighIn",ctaKey:"forma.nextUp.cta.weighIn",action:()=>t("weight")};if(r>=14&&r<21&&!e.meals.some(e=>e.date===o&&"lunch"===e.slot))return{id:"logLunch",copyKey:"forma.nextUp.logLunch",ctaKey:"forma.nextUp.cta.logLunch",action:()=>t("meal")};if(r>=18){let a=e.goal.waterMl??2e3;if((0,d.waterByDay)(e.water??[],o)<a/2)return{id:"addWater",copyKey:"forma.nextUp.addWater",ctaKey:"forma.nextUp.cta.addWater",action:()=>t("water")}}return null}(e,a);if(null===o)return null;let i=t(o.copyKey,o.copyVars),n=t(o.ctaKey),s=c[o.id];return(0,r.jsxs)(m,{role:"region","aria-label":t("forma.nextUp.aria"),accent:s.color,tint1:s.tint1,tint2:s.tint2,surface:s.surface,children:[(0,r.jsx)(g,{accent:s.color,"aria-hidden":"true",children:s.glyph}),(0,r.jsxs)(f,{children:[(0,r.jsx)(x,{accent:s.color,children:t("forma.nextUp.eyebrow")}),(0,r.jsx)(u,{title:i,children:i})]}),(0,r.jsx)(w,{children:(0,r.jsx)(l.$n,{variant:"primary",onClick:o.action,children:n})}),(0,r.jsx)(h,{top:14,right:20,opacity:.95,accent:s.color}),(0,r.jsx)(h,{top:36,right:12,opacity:.65,accent:s.color}),(0,r.jsx)(h,{top:58,right:26,opacity:.4,accent:s.color})]})}},86704(e,t,a){a.d(t,{g:()=>T});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(72799),l=a(6063),d=a(63236),c=a(77752),p=a(21571),m=a(32988);let g=new Date().toISOString().slice(0,10),h=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=n().section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  padding: ${l.w4.spacing.lg};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${p.Js};
  border-radius: ${l.w4.borderRadius.lg};
  background: ${p.xF};
  overflow: hidden;
  animation: ${h} 0.25s ease both;
  transition: border-color 0.14s ease;
  &:hover { border-color: rgba(127, 183, 126, 0.4); }
`,x=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,u=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(127, 183, 126, 0.85);
`,w=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${p.Js};
`,b=n().div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 6px;
  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(5, 1fr);
  }
`,y=n().div`
  background: ${({hasCheckIn:e})=>e?"rgba(127, 183, 126, 0.14)":"rgba(20, 36, 28, 0.55)"};
  border: 1px solid ${({isToday:e,hasCheckIn:t})=>e?p.Js:t?`${p.Js}55`:"rgba(127, 183, 126, 0.18)"};
  border-radius: ${l.w4.borderRadius.md};
  padding: 8px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  opacity: ${({isPast:e,hasCheckIn:t,isToday:a})=>a?1:e&&!t?.45:e?1:.6};
  min-height: 64px;
  transition: border-color 0.14s ease, background 0.14s ease;
`,$=n().span`
  font-size: 13px;
  font-weight: ${({isToday:e})=>e?700:500};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${({isToday:e})=>e?p.Js:l.w4.colors.mainText};
`,v=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,k=n().span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${l.w4.colors.accent};
  flex-shrink: 0;
`,j=n().div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1.5px solid ${({done:e})=>e?p.Js:l.w4.colors.border};
  background: ${({done:e})=>e?p.Js:"transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
`,M=n().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.xl} 0;
  text-align: center;
`,z=n().p`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin: 0;
`;function T({t:e}){let{plan:t,dayNumber:a}=(0,c.useProgram)(),{data:i}=(0,c.useForma)(),n=(0,o.useMemo)(()=>i?new Set(i.checkIns.map(e=>e.date)):new Set,[i]);if(!t)return(0,r.jsxs)(M,{children:[(0,r.jsx)(d.In,{name:"calendar",size:24,color:l.w4.colors.mainTextMuted}),(0,r.jsx)(z,{children:e("forma.program.noProgram")})]});let s=t.days.filter(e=>{let a=F(t.startDate,e.day-1);return n.has(a)&&a<g}).length;return(0,r.jsxs)(f,{children:[(0,r.jsxs)(x,{children:[(0,r.jsx)(u,{children:e("forma.program.title")}),(0,r.jsxs)(w,{children:[s," / 30 ",e("forma.program.daysCompleted",{n:s})]})]}),(0,r.jsx)(b,{children:t.days.map(a=>{let o=F(t.startDate,a.day-1),i=o<g,s=o===g,l=n.has(o);return(0,r.jsxs)(y,{isToday:s,isPast:i,hasCheckIn:l,isRefeed:!0===a.refeed,children:[(0,r.jsx)($,{isToday:s,children:a.day}),(0,r.jsxs)(v,{children:[a.walkMin,"m"]}),a.refeed&&(0,r.jsx)(k,{title:e("forma.program.refeed")}),(0,r.jsx)(j,{done:l,children:l&&(0,r.jsx)("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",children:(0,r.jsx)("path",{d:"M1.5 4L3.5 6L6.5 2",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"})})})]},a.day)})}),(0,r.jsx)(m.I,{variant:"compact"})]})}function F(e,t){let a=new Date(e);return a.setDate(a.getDate()+t),a.toISOString().slice(0,10)}},25405(e,t,a){a.d(t,{F:()=>h});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(6063);let l=n().form`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.md};
  padding: ${s.w4.spacing.md} ${s.w4.spacing.xl};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  background:
    radial-gradient(circle at 6% 50%, rgba(127, 183, 126, 0.16), transparent 42%),
    radial-gradient(circle at 94% 50%, rgba(88, 166, 255, 0.10), transparent 50%),
    linear-gradient(135deg, #14191e 0%, #10141a 100%);
  overflow: hidden;
  transition: border-color ${s.w4.transitions.base}, transform ${s.w4.transitions.base}, box-shadow ${s.w4.transitions.base};

  &:hover {
    border-color: rgba(127, 183, 126, 0.30);
  }

  &:focus-within {
    border-color: rgba(127, 183, 126, 0.6);
    box-shadow: 0 0 0 4px rgba(127, 183, 126, 0.10);
  }

  @media (max-width: ${s.w4.breakpoints.md}) {
    display: none;
  }
`,d=n().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 14px;
  font-weight: 700;
  color: rgba(127, 183, 126, 0.85);
  letter-spacing: 0;
  user-select: none;
  flex-shrink: 0;
  text-shadow: 0 0 12px rgba(127, 183, 126, 0.4);
`,c=n().input`
  flex: 1;
  background: transparent;
  border: 0;
  padding: 4px 0;
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainText};
  outline: none;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.01em;

  &::placeholder {
    color: ${s.w4.colors.mainTextMuted};
    font-size: 12px;
    letter-spacing: 0.04em;
  }
`,p=n().span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`,m=n().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  font-weight: 600;
  color: ${s.w4.colors.mainTextMuted};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${s.w4.colors.border};
  border-radius: 4px;
  padding: 2px 6px;
  line-height: 1;
  letter-spacing: 0.04em;
`,g=n().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
`;function h({t:e,onParsed:t}){let[a,i]=(0,o.useState)(""),[n,s]=(0,o.useState)(!1),f=(0,o.useCallback)(e=>{e.preventDefault();let r=function(e){let t=e.trim().toLowerCase();if(!t)return null;let a=t.match(/^(?:agua|água|water|bebi)\s+(\d+)/);if(a){let e=parseInt(a[1],10);if(!isNaN(e)&&e>0)return{kind:"water",waterMl:e}}let r=t.match(/^(?:peso|weight)\s+(\d+(?:[.,]\d+)?)/);if(r){let e=parseFloat(r[1].replace(",","."));if(!isNaN(e))return{kind:"weight",weightKg:e}}let o=t.match(/^(?:caminhei|walked|walk|caminhada)\s+(\d+)/);if(o){let e=parseInt(o[1],10);if(!isNaN(e))return{kind:"walk",walkMinutes:e}}let i=t.match(/^(?:jejum|fast)\s+(\d+)/);if(i){let e=parseInt(i[1],10);if(!isNaN(e))return{kind:"fast",fastHours:e,fastProtocol:16===e?"16:8":18===e?"18:6":20===e?"20:4":"custom"}}for(let[e,a]of[[/^(?:cintura|waist)\s+(\d+(?:[.,]\d+)?)/,"waist"],[/^(?:peito|chest)\s+(\d+(?:[.,]\d+)?)/,"chest"],[/^(?:braços|bracos|arms)\s+(\d+(?:[.,]\d+)?)/,"arms"],[/^(?:coxas|thigh)\s+(\d+(?:[.,]\d+)?)/,"thigh"],[/^(?:anca|hip)\s+(\d+(?:[.,]\d+)?)/,"hip"],[/^(?:pescoço|pescoco|neck)\s+(\d+(?:[.,]\d+)?)/,"neck"]]){let r=t.match(e);if(r){let e=parseFloat((r[1]??"").replace(",","."));if(!isNaN(e)&&e>0)return{kind:"measurement",measurementKind:a,measurementCm:e}}}let n=t.match(/^(jantar|almoço|almoco|dinner|snack|lanche|lunch)\s+(.*)/);if(n){let e=n[1];return{kind:"meal",mealSlot:"jantar"===e||"dinner"===e?"dinner":"almo\xe7o"===e||"almoco"===e||"lunch"===e?"lunch":"snack",mealDesc:n[2].trim()}}return null}(a);if(!r){s(!0),setTimeout(()=>s(!1),1200);return}t(r),i("")},[a,t]);return(0,r.jsxs)(l,{onSubmit:f,style:{borderColor:n?"#f85149":void 0},children:[(0,r.jsx)(d,{"aria-hidden":"true",children:"›"}),(0,r.jsx)(c,{value:a,onChange:e=>i(e.target.value),placeholder:e("forma.quickadd.placeholder"),"aria-label":e("forma.quickadd.hint")}),(0,r.jsxs)(p,{children:[(0,r.jsx)(g,{children:e("forma.quickadd.hint")}),(0,r.jsx)(m,{children:"↵"})]})]})}},20429(e,t,a){a.d(t,{f:()=>T});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(6063),l=a(63236),d=a(77752),c=a(21571),p=a(32988);let m=n().section`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.lg};
  max-width: 560px;
`,g=n().div`
  position: relative;
  border: 1px solid ${s.w4.colors.border};
  border-left: 2px solid ${c.Js};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.md};
  background: ${c.xF};
  overflow: hidden;
  transition: border-color 0.14s ease;
  &:hover { border-color: rgba(127, 183, 126, 0.4); }
`,h=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(127, 183, 126, 0.85);
`,f=n().div`
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: ${s.w4.spacing.sm};
  align-items: center;
`,x=n().label`
  font-size: 13px;
  color: ${s.w4.colors.mainText};
`,u=n().input`
  background: ${s.w4.colors.mainBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 6px 8px;
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainText};
  outline: none;
  &:focus { border-color: ${c.Js}; }
`,w=n().div`
  display: flex;
  gap: ${s.w4.spacing.sm};
  justify-content: flex-end;
`,b=n().span`
  font-size: 12px;
  color: ${c.Js};
  align-self: center;
`,y=n().p`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  margin: -${s.w4.spacing.sm} 0 0;
`,$=n().p`
  font-size: 13px;
  color: ${s.w4.colors.mainTextMuted};
  margin: 0;
`,v=n().p`
  font-size: 13px;
  color: ${c.Js};
  margin: 0;
`,k=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${s.w4.spacing.sm};
  padding: 4px 0;
  border-bottom: 1px solid ${s.w4.colors.border};

  &:last-of-type {
    border-bottom: none;
  }
`,j=n().div`
  display: flex;
  gap: ${s.w4.spacing.xs};
  flex-shrink: 0;
`,M=n().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({$tone:e})=>"success"===e?c.Js:"error"===e?"#f85149":s.w4.colors.mainTextMuted};
  margin-top: 4px;
  display: block;
`,z=n().input`
  display: none;
`;function T({data:e,t,onSave:a}){let[i,n]=(0,o.useState)(String(e.goal.proteinG??110)),[s,c]=(0,o.useState)(String(e.goal.proteinPerKg??1.6)),[F,S]=(0,o.useState)(String(e.goal.kcal??2200)),[C,A]=(0,o.useState)(String(e.goal.walkMin??30)),[D,R]=(0,o.useState)(String(e.goal.weightKg??"")),[I,L]=(0,o.useState)(String(e.goal.targetHours)),[E,P]=(0,o.useState)(String(e.goal.weeklyFasts)),[H,B]=(0,o.useState)(!1),[W,O]=(0,o.useState)(!1),[N,Y]=(0,o.useState)(null),[K,J]=(0,o.useState)(null),[G,V]=(0,o.useState)(),q=(0,o.useRef)(null),U=(0,o.useRef)(null),_=(0,o.useRef)(null),Q=(0,o.useRef)(null),X=(0,o.useRef)(null),{plan:Z,dayNumber:ee,startProgram:et,clearProgram:ea}=(0,d.useProgram)(),er=(0,o.useCallback)(async()=>{let e=new Date().toISOString().slice(0,10);await et({...d.SEED_PLAN_TUNA_30,startDate:e})},[et]),eo=(0,o.useCallback)(async()=>{O(!1),await ea()},[ea]),ei=async()=>{let t=parseFloat(s),r={...e,goal:{targetHours:Number(I)||16,weeklyFasts:Number(E)||5,proteinG:Number(i)||void 0,proteinPerKg:t>=.5&&t<=3.5?t:1.6,kcal:Number(F)||void 0,walkMin:Number(C)||void 0,weightKg:D?Number(D):void 0}};await a(r),B(!0),setTimeout(()=>B(!1),2e3)},en=(0,o.useCallback)(t=>{let a=(0,d.exportFormaCSV)(e),r=(0,d.todayISODate)();(0,d.downloadCsv)(a[t],`forma-${t}-${r}.csv`)},[e]),es=(0,o.useCallback)((a,r)=>{if(!r)return;let o=new FileReader;o.onload=r=>{let o=r.target?.result;if("string"!=typeof o){J(t("forma.data.importError",{msg:"Could not read file"})),V("error");return}J(null),V(void 0);try{let r=0,i=e;if("sessions"===a){let a=(0,d.importFormaCSV)("sessions",o);if(!a.ok){J(t("forma.data.importError",{msg:a.error})),V("error");return}let n=(0,d.mergeFormaSessions)(e.sessions,a.entries);r=n.length-e.sessions.length,i={...e,sessions:n}}else if("meals"===a){let a=(0,d.importFormaCSV)("meals",o);if(!a.ok){J(t("forma.data.importError",{msg:a.error})),V("error");return}let n=(0,d.mergeFormaMeals)(e.meals,a.entries);r=n.length-e.meals.length,i={...e,meals:n}}else if("weights"===a){let a=(0,d.importFormaCSV)("weights",o);if(!a.ok){J(t("forma.data.importError",{msg:a.error})),V("error");return}let n=(0,d.mergeFormaWeights)(e.weights,a.entries);r=n.length-e.weights.length,i={...e,weights:n}}else if("walks"===a){let a=(0,d.importFormaCSV)("walks",o);if(!a.ok){J(t("forma.data.importError",{msg:a.error})),V("error");return}let n=(0,d.mergeFormaWalks)(e.walks,a.entries);r=n.length-e.walks.length,i={...e,walks:n}}else if("water"===a){let a=(0,d.importFormaCSV)("water",o);if(!a.ok){J(t("forma.data.importError",{msg:a.error})),V("error");return}let n=(0,d.mergeFormaWater)(e.water,a.entries);r=n.length-e.water.length,i={...e,water:n}}if(0===r){J(t("forma.data.importNoNew")),V("error");return}Y({kind:a,newCount:r,mergedData:i})}catch{J(t("forma.data.importError",{msg:"Unexpected parse error"})),V("error")}},o.readAsText(r)},[e,t]),el=(0,o.useCallback)(async()=>{if(!N)return;let{newCount:e,mergedData:r}=N;Y(null),await a(r),J(t("forma.data.importDone",{n:e})),V("success"),setTimeout(()=>{J(null),V(void 0)},4e3)},[N,a,t]),ed=(0,o.useCallback)(()=>{Y(null)},[]),ec=[{kind:"sessions",exportLabel:t("forma.data.exportSessions"),importLabel:t("forma.data.importSessions")},{kind:"meals",exportLabel:t("forma.data.exportMeals"),importLabel:t("forma.data.importMeals")},{kind:"weights",exportLabel:t("forma.data.exportWeights"),importLabel:t("forma.data.importWeights")},{kind:"walks",exportLabel:t("forma.data.exportWalks"),importLabel:t("forma.data.importWalks")},{kind:"water",exportLabel:t("forma.data.exportWater"),importLabel:t("forma.data.importWater")}];return(0,r.jsxs)(m,{children:[(0,r.jsxs)(g,{children:[(0,r.jsxs)(h,{children:["◉ ",t("forma.settings.foodGoals")]}),(0,r.jsxs)(f,{children:[(0,r.jsx)(x,{children:t("forma.settings.proteinG")}),(0,r.jsx)(u,{type:"number",value:i,onChange:e=>n(e.target.value)})]}),(0,r.jsxs)(f,{children:[(0,r.jsx)(x,{children:t("forma.settings.proteinPerKg")}),(0,r.jsx)(u,{type:"number",step:"0.1",min:"0.5",max:"3.5",value:s,onChange:e=>c(e.target.value)})]}),(0,r.jsx)(y,{children:t("forma.settings.proteinPerKgHint")}),(0,r.jsxs)(f,{children:[(0,r.jsx)(x,{children:t("forma.settings.kcal")}),(0,r.jsx)(u,{type:"number",value:F,onChange:e=>S(e.target.value)})]}),(0,r.jsxs)(f,{children:[(0,r.jsx)(x,{children:t("forma.settings.walkMin")}),(0,r.jsx)(u,{type:"number",value:C,onChange:e=>A(e.target.value)})]}),(0,r.jsxs)(f,{children:[(0,r.jsx)(x,{children:t("forma.settings.weightTarget")}),(0,r.jsx)(u,{type:"number",step:"0.1",value:D,onChange:e=>R(e.target.value)})]}),(0,r.jsx)(p.I,{variant:"compact"})]}),(0,r.jsxs)(g,{children:[(0,r.jsxs)(h,{children:["◉ ",t("forma.settings.fastingGoals")]}),(0,r.jsxs)(f,{children:[(0,r.jsx)(x,{children:t("forma.settings.targetHours")}),(0,r.jsx)(u,{type:"number",value:I,onChange:e=>L(e.target.value)})]}),(0,r.jsxs)(f,{children:[(0,r.jsx)(x,{children:t("forma.settings.weeklyFasts")}),(0,r.jsx)(u,{type:"number",value:E,onChange:e=>P(e.target.value)})]}),(0,r.jsx)(p.I,{variant:"compact"})]}),(0,r.jsxs)(g,{children:[(0,r.jsx)(h,{children:t("forma.program.title")}),Z?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{children:t("forma.program.active",{n:ee??0})}),(0,r.jsx)(w,{style:{justifyContent:"flex-start"},children:(0,r.jsx)(l.$n,{variant:"danger",onClick:()=>O(!0),children:t("forma.program.clear")})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)($,{children:t("forma.program.noProgram")}),(0,r.jsx)(w,{style:{justifyContent:"flex-start"},children:(0,r.jsx)(l.$n,{variant:"accent",onClick:()=>void er(),children:t("forma.program.start")})})]}),(0,r.jsx)(p.I,{variant:"compact"})]}),(0,r.jsxs)(g,{children:[(0,r.jsx)(h,{children:t("forma.data.title")}),ec.map(({kind:e,exportLabel:t,importLabel:a})=>(0,r.jsx)(k,{children:(0,r.jsxs)(j,{style:{flex:1,justifyContent:"flex-end"},children:[(0,r.jsx)(l.$n,{variant:"ghost",onClick:()=>en(e),children:t}),(0,r.jsx)(l.$n,{variant:"accent",onClick:()=>(e=>{switch(e){case"sessions":return q;case"meals":return U;case"weights":return _;case"walks":return Q;case"water":return X}})(e).current?.click(),children:a})]})},e)),K&&(0,r.jsx)(M,{$tone:G,children:K}),(0,r.jsx)(z,{ref:q,type:"file",accept:".csv,text/csv",onChange:e=>{es("sessions",e.target.files?.[0]),e.target.value=""}}),(0,r.jsx)(z,{ref:U,type:"file",accept:".csv,text/csv",onChange:e=>{es("meals",e.target.files?.[0]),e.target.value=""}}),(0,r.jsx)(z,{ref:_,type:"file",accept:".csv,text/csv",onChange:e=>{es("weights",e.target.files?.[0]),e.target.value=""}}),(0,r.jsx)(z,{ref:Q,type:"file",accept:".csv,text/csv",onChange:e=>{es("walks",e.target.files?.[0]),e.target.value=""}}),(0,r.jsx)(z,{ref:X,type:"file",accept:".csv,text/csv",onChange:e=>{es("water",e.target.files?.[0]),e.target.value=""}}),(0,r.jsx)(p.I,{variant:"compact"})]}),(0,r.jsxs)(w,{children:[H&&(0,r.jsx)(b,{children:t("forma.settings.saved")}),(0,r.jsx)(l.$n,{variant:"success",onClick:()=>void ei(),children:t("forma.settings.save")})]}),(0,r.jsx)(l.TM,{open:W,title:t("forma.program.confirmClear"),message:t("forma.program.confirmClearBody"),confirmLabel:t("forma.program.clear"),cancelLabel:t("forma.checkin.cancel"),onConfirm:()=>void eo(),onCancel:()=>O(!1),danger:!0}),(0,r.jsx)(l.TM,{open:null!==N,title:t("forma.data.confirmTitle"),message:N?t("forma.data.confirmBody",{n:N.newCount,kind:t(`forma.data.kind.${N.kind}`)}):"",confirmLabel:t("forma.data.confirmOk"),cancelLabel:t("forma.data.confirmCancel"),onConfirm:()=>void el(),onCancel:ed})]})}},359(e,t,a){a.d(t,{e:()=>M});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(72799),l=a(6063),d=a(63236);let c=[{id:"banana-power",nameKey:"forma.shake.banana-power.name",ingredientsKey:"forma.shake.banana-power.ingredients",proteinG:32,kcal:310,slot:"snack"},{id:"berry-burn",nameKey:"forma.shake.berry-burn.name",ingredientsKey:"forma.shake.berry-burn.ingredients",proteinG:28,kcal:190,slot:"snack"},{id:"choco-cafe",nameKey:"forma.shake.choco-cafe.name",ingredientsKey:"forma.shake.choco-cafe.ingredients",proteinG:28,kcal:150,slot:"snack"},{id:"verde-detox",nameKey:"forma.shake.verde-detox.name",ingredientsKey:"forma.shake.verde-detox.ingredients",proteinG:28,kcal:200,slot:"snack"},{id:"tropical-lean",nameKey:"forma.shake.tropical-lean.name",ingredientsKey:"forma.shake.tropical-lean.ingredients",proteinG:27,kcal:220,slot:"snack"},{id:"pb-strawberry",nameKey:"forma.shake.pb-strawberry.name",ingredientsKey:"forma.shake.pb-strawberry.ingredients",proteinG:32,kcal:210,slot:"snack"}];var p=a(21571),m=a(32988);let g=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,h=n().section`
  position: relative;
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${p.Js};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  background: ${p.xF};
  overflow: hidden;
  animation: ${g} 0.25s ease both;
  transition: border-color 0.14s ease;

  &:hover {
    border-color: rgba(127, 183, 126, 0.4);
  }
`,f=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`,x=n().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(127, 183, 126, 0.85);
`,u=n().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
`,w=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: ${l.w4.spacing.sm};
`,b=n().button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 6px;
  padding: ${l.w4.spacing.md};
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${({expanded:e})=>e?p.Js:"rgba(127, 183, 126, 0.25)"};
  background: ${({expanded:e})=>e?"rgba(127, 183, 126, 0.08)":"rgba(127, 183, 126, 0.03)"};
  color: ${l.w4.colors.mainText};
  cursor: pointer;
  text-align: left;
  font: inherit;
  transition: border-color 0.14s ease, background 0.14s ease, transform 0.14s ease;
  min-width: 0;
  overflow: hidden;

  &:hover {
    border-color: ${p.Js};
    transform: translateY(-1px);
    background: rgba(127, 183, 126, 0.08);
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,y=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.xs};
`,$=n().span`
  font-size: 13px;
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
`,v=n().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.06em;
  color: ${p.yl};
  flex-shrink: 0;
`,k=n().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  line-height: 1.5;
  color: ${l.w4.colors.mainTextMuted};
`,j=n().span`
  align-self: flex-end;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 99px;
  background: ${p.Js};
  color: #14241c;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.10em;
  margin-top: 4px;
`;function M({t:e,onLogShake:t}){let[a,i]=(0,o.useState)(null);return(0,r.jsxs)(h,{"aria-label":e("forma.shakes.aria"),children:[(0,r.jsxs)(f,{children:[(0,r.jsxs)(x,{children:["◉ ",e("forma.shakes.eyebrow")]}),(0,r.jsx)(u,{children:e("forma.shakes.sub")})]}),(0,r.jsx)(w,{children:c.map(o=>{let n=a===o.id,s=e(o.nameKey),l=e(o.ingredientsKey);return(0,r.jsxs)(b,{type:"button",expanded:n,onClick:()=>{n?(t(o,l),i(null)):i(o.id)},"aria-expanded":n,title:n?e("forma.shakes.tapToLog"):e("forma.shakes.tapToOpen"),children:[(0,r.jsxs)(y,{children:[(0,r.jsx)($,{children:s}),(0,r.jsxs)(v,{children:[o.proteinG,"g \xb7 ",o.kcal,"kcal"]})]}),n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k,{children:l}),(0,r.jsxs)(j,{children:[(0,r.jsx)(d.In,{name:"plus",size:12}),e("forma.shakes.logCta")]})]})]},o.id)})}),(0,r.jsx)(m.I,{variant:"compact"})]})}},22684(e,t,a){a.d(t,{q:()=>R});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(72799),l=a(6063),d=a(63236),c=a(77752),p=a(21571);let m="#facc15",g=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,h=n().section`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${p.Js};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${g} 0.25s ease both;
`,f=n().div`
  display: flex;
  align-items: flex-end;
  gap: ${l.w4.spacing.md};
  flex-wrap: wrap;
`,x=n().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-size: clamp(56px, 12vw, 84px);
  font-weight: 800;
  line-height: 0.9;
  color: ${p.Js};
`,u=n().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,w=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,b=n().span`
  font-size: 14px;
  font-weight: 600;
  color: ${l.w4.colors.mainText};
`,y=n().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  padding: 2px 8px;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${m}1a;
  border: 1px solid ${m}33;
  color: ${m};
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`,$=n().div`
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  gap: 2px;
  height: 6px;
`,v=n().div`
  border-radius: 1px;
  background: ${({state:e})=>"today"===e?p.Js:"past"===e?`${p.Js}66`:l.w4.colors.border};
  ${({state:e})=>"today"===e&&`box-shadow: 0 0 0 1px ${p.Js}66;`}
`,k=n().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,j=n().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 8px 10px;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${l.w4.colors.mainBg};
  min-height: 44px;
`,M=n().div`
  color: ${l.w4.colors.mainTextMuted};
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,z=n().div`
  flex: 1;
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  min-width: 0;
`,T=n().div`
  font-size: 13px;
  font-weight: 500;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  text-align: right;
  flex-shrink: 0;
`,F=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  padding-top: ${l.w4.spacing.sm};
  border-top: 1px solid ${l.w4.colors.border};
`,S=n().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  font-size: 13px;
  color: ${p.Js};
  font-family: ${l.w4.typography.fontFamilyMono};
`,C=n().section`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${p.Js};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  animation: ${g} 0.25s ease both;
`,A=n().h2`
  font-size: 16px;
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  margin: 0;
`,D=n().p`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin: 0;
`;function R({t:e,onOpenCheckIn:t,onOpenSettings:a}){let{plan:i,today:n,dayNumber:s}=(0,c.useProgram)(),{checkIn:p}=(0,c.useCheckIn)(),m=(0,o.useMemo)(()=>{if(!n)return"";let t=[`${n.oatsG}g`];return n.banana&&t.push(e("forma.program.breakfast.banana")),t.join(" + ")},[n,e]),g=(0,o.useMemo)(()=>n?e(n.dinnerKey):"",[n,e]);if(!i||null===n||null===s)return(0,r.jsxs)(C,{children:[(0,r.jsx)(w,{children:e("forma.program.title")}),(0,r.jsx)(A,{children:e("forma.program.startTitle")}),(0,r.jsx)(D,{children:e("forma.program.startBody")}),(0,r.jsx)("div",{children:(0,r.jsx)(d.$n,{variant:"primary",onClick:a,children:e("forma.program.start")})})]});let I=Array.from({length:30},(e,t)=>{let a=t+1;return a===s?"today":a<s?"past":"future"});return(0,r.jsxs)(h,{children:[(0,r.jsxs)(f,{children:[(0,r.jsx)(x,{children:s}),(0,r.jsxs)(u,{children:[(0,r.jsx)(w,{children:e("forma.program.dayOf",{n:30})}),(0,r.jsx)(b,{children:e("forma.program.title")}),n.refeed&&(0,r.jsx)(y,{children:e("forma.program.refeed")})]})]}),(0,r.jsx)($,{children:I.map((e,t)=>(0,r.jsx)(v,{state:e},t))}),(0,r.jsxs)(k,{children:[(0,r.jsxs)(j,{children:[(0,r.jsx)(M,{children:(0,r.jsx)(d.In,{name:"leaf",size:16})}),(0,r.jsx)(z,{children:e("forma.program.shake")}),(0,r.jsx)(T,{children:m})]}),(0,r.jsxs)(j,{children:[(0,r.jsx)(M,{children:(0,r.jsx)(d.In,{name:"utensils",size:16})}),(0,r.jsx)(z,{children:e("forma.program.dinner")}),(0,r.jsx)(T,{children:g})]}),(0,r.jsxs)(j,{children:[(0,r.jsx)(M,{children:(0,r.jsx)(d.In,{name:"heart",size:16})}),(0,r.jsx)(z,{children:e("forma.program.walkLabel")}),(0,r.jsx)(T,{children:e("forma.program.walk",{min:n.walkMin})})]})]}),(0,r.jsxs)(F,{children:[p?(0,r.jsxs)(S,{children:[(0,r.jsx)(d.In,{name:"check-circle",size:16}),e("forma.checkin.done")]}):(0,r.jsx)("span",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:e("forma.checkin.prompt")}),(0,r.jsx)(d.$n,{variant:p?"ghost":"accent",onClick:t,children:p?e("forma.checkin.update"):e("forma.checkin.title")})]})]})}},7434(e,t,a){a.d(t,{c:()=>y});var r=a(65723),o=a(36859),i=a.n(o),n=a(72799),s=a(6063),l=a(77752),d=a(21571);let c=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,p=i().section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${s.w4.spacing.md};
  flex-wrap: wrap;
  animation: ${c} 0.25s ease both;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,m=i().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1 1 auto;
  min-width: 0;
  width: 100%;
`,g=i().h1`
  font-family: ${s.w4.typography.fontFamilySerif};
  font-size: clamp(20px, 2.6vw, 28px);
  font-weight: 300;
  color: ${s.w4.colors.mainText};
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 900px) {
    white-space: normal;
  }
`,h=i().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
`,f=i().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.xs};
  flex-wrap: wrap;
  flex-shrink: 0;
`,x=i().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${s.w4.colors.mainTextMuted};
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
  white-space: nowrap;
  line-height: 1.4;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,u=i()(x)`
  background: ${({active:e})=>e?"rgba(249, 115, 22, 0.12)":s.w4.colors.surface};
  border-color: ${({active:e})=>e?"rgba(249, 115, 22, 0.4)":s.w4.colors.border};
  color: ${({active:e})=>e?"#fb923c":s.w4.colors.mainTextMuted};
`,w=i()(x)`
  background: ${({active:e})=>e?"rgba(127, 183, 126, 0.12)":s.w4.colors.surface};
  border-color: ${({active:e})=>e?"rgba(127, 183, 126, 0.4)":s.w4.colors.border};
  color: ${({active:e})=>e?d.Js:s.w4.colors.mainTextMuted};
`,b=i().span`
  color: ${s.w4.colors.mainText};
  font-weight: 700;
  font-variant-numeric: tabular-nums;
`;function y({data:e,t,userName:a}){let o,i,n,c,$=new Date,v=(0,l.currentFast)(e),k=e.goal.targetHours??16,j=(0,l.streakDays)(e.sessions,k),M=(n=new Date((i=((o=new Date($)).getDay()+6)%7,o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o.toISOString().slice(0,10))).getTime(),e.sessions.filter(e=>void 0!==e.endedAt&&!(e.startedAt<n)&&(e.endedAt-e.startedAt)/36e5>=e.targetHours).length),z=e.goal.weeklyFasts??5,T=new Date().toISOString().slice(0,10),F=e.weights.find(e=>e.date===T),S=[...e.weights].filter(e=>e.date<T).sort((e,t)=>e.date.localeCompare(t.date)).pop(),C=F&&S?F.kg-S.kg:null,A=$.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long"}),D=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}),R=null!==v,I=R?t("forma.hero.fastActive",{h:v.hoursElapsed.toFixed(1)}):t("forma.hero.fastIdle"),L=a&&a.trim()?a:t("forma.hero.defaultName");return(0,r.jsxs)(p,{children:[(0,r.jsxs)(m,{children:[(0,r.jsx)(g,{children:t((c=$.getHours())<12?"forma.hero.greet.morning":c<18?"forma.hero.greet.afternoon":"forma.hero.greet.evening",{name:L})}),(0,r.jsxs)(h,{children:[A," \xb7 ",D]})]}),(0,r.jsxs)(f,{children:[(0,r.jsxs)(w,{active:R,title:I,children:[(0,r.jsx)("span",{"aria-hidden":"true",children:"⏱"}),R?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(b,{children:[v.hoursElapsed.toFixed(1),"h"]}),t("forma.hero.fastShort")]}):(0,r.jsx)(r.Fragment,{children:t("forma.hero.fastIdleShort")})]}),(0,r.jsxs)(x,{title:t("forma.hero.weeklyFasts.tooltip",{n:M,total:z}),children:[(0,r.jsx)("span",{"aria-hidden":"true",children:"\uD83D\uDCC5"}),(0,r.jsxs)(b,{children:[M,"/",z]}),t("forma.hero.weeklyShort")]}),(0,r.jsxs)(u,{active:j>0,title:j>0?t("forma.streak",{n:j}):t("forma.streak.none"),children:[(0,r.jsx)("span",{"aria-hidden":"true",children:j>0?"\uD83D\uDD25":"\xb7"}),(0,r.jsx)(b,{children:j}),t("forma.hero.streakShort")]}),F&&(0,r.jsxs)(x,{title:t("forma.weight.label"),children:[(0,r.jsx)("span",{"aria-hidden":"true",children:"⚖"}),(0,r.jsx)(b,{children:F.kg.toFixed(1)}),"kg",null!==C&&Math.abs(C)>=.1&&(0,r.jsxs)("span",{style:{color:C>0?s.w4.colors.mainTextMuted:d.Js},children:[C>0?"+":"",C.toFixed(1)]})]})]})]})}},13412(e,t,a){a.d(t,{_:()=>el});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(6063),l=a(63236),d=a(77752),c=a(21571);let p="#58a6ff",m="#facc15",g="#22d3ee",h=84.5,f=68.5,x=52.5,u=36.5,w=n().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.lg};
  flex-wrap: wrap;

  @media (max-width: ${s.w4.breakpoints.md}) {
    gap: ${s.w4.spacing.md};
    justify-content: center;
  }
`,b=n().div`
  flex-shrink: 0;
  width: ${184}px;
  height: ${184}px;
  position: relative;
`,y=n().dl`
  flex: 1;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.sm};
  margin: 0;
`,$=n().div`
  display: grid;
  grid-template-columns: 12px 1fr auto;
  align-items: baseline;
  gap: ${s.w4.spacing.sm};
`,v=n().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
  align-self: center;
`,k=n().dt`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`,j=n().span`
  font-size: 10px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.04em;
  text-transform: none;
  color: ${({tone:e})=>"up"===e?"#7fb77e":"down"===e?s.w4.colors.mainTextMuted:s.w4.colors.mainTextFaint??s.w4.colors.mainTextMuted};
  opacity: 0.9;
`,M=n().dd`
  font-size: 13px;
  font-weight: 500;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainText};
  margin: 0;
  white-space: nowrap;
`;function z({radius:e,pct:t,color:a}){let o=2*Math.PI*e,i=Math.min(1,Math.max(0,t));return(0,r.jsxs)("g",{children:[(0,r.jsx)("circle",{cx:92,cy:92,r:e,fill:"none",stroke:a,strokeOpacity:.18,strokeWidth:11}),(0,r.jsx)("circle",{cx:92,cy:92,r:e,fill:"none",stroke:a,strokeWidth:11,strokeDasharray:o,strokeDashoffset:o*(1-i),strokeLinecap:"round",transform:"rotate(-90 92 92)",style:{transition:"stroke-dashoffset 0.6s ease"}})]})}function T(e){return .5>Math.abs(e)?"flat":e>0?"up":"down"}function F(e,t,a=0){if(.5>Math.abs(e))return"\xb7";let r=Math.abs(e);return`${e>0?"+":"−"}${r.toFixed(a)}${t}`}function S({t:e,fastPct:t,fastHours:a,fastTargetHours:o,protein:i,proteinTarget:n,proteinYesterday:l,kcal:d,kcalTarget:C,kcalYesterday:A,waterMl:D,waterTargetMl:R,waterYesterdayMl:I}){let L=C>0?d/C:0,E=d>C&&C>0,P=E?m:"#f59e0b",H=i-l,B=d-A,W=D-I;return(0,r.jsxs)(w,{children:[(0,r.jsx)(b,{children:(0,r.jsxs)("svg",{width:184,height:184,viewBox:"0 0 184 184","aria-hidden":"true",children:[(0,r.jsx)(z,{radius:h,pct:t,color:c.Js}),(0,r.jsx)(z,{radius:f,pct:n>0?i/n:0,color:p}),(0,r.jsx)(z,{radius:x,pct:Math.min(1,L),color:P}),(0,r.jsx)(z,{radius:u,pct:R>0?D/R:0,color:g})]})}),(0,r.jsxs)(y,{children:[(0,r.jsxs)($,{children:[(0,r.jsx)(v,{color:c.Js}),(0,r.jsx)(k,{children:e("forma.today.fast")}),(0,r.jsxs)(M,{children:[a>0?a.toFixed(1):"0",(0,r.jsxs)("span",{style:{color:s.w4.colors.mainTextMuted},children:[" / ",o,"h"]})]})]}),(0,r.jsxs)($,{children:[(0,r.jsx)(v,{color:p}),(0,r.jsxs)(k,{children:[e("forma.today.protein"),(0,r.jsx)(j,{tone:T(H),children:F(H,"g")})]}),(0,r.jsxs)(M,{children:[Math.round(i),(0,r.jsxs)("span",{style:{color:s.w4.colors.mainTextMuted},children:[" / ",n,"g"]})]})]}),(0,r.jsxs)($,{children:[(0,r.jsx)(v,{color:P}),(0,r.jsxs)(k,{children:[e(E?"forma.today.kcalOver":"forma.today.kcal"),(0,r.jsx)(j,{tone:T(-B),children:F(B,"")})]}),(0,r.jsxs)(M,{style:{color:E?m:void 0},children:[Math.round(d),(0,r.jsxs)("span",{style:{color:s.w4.colors.mainTextMuted},children:[" / ",C,"kcal"]})]})]}),(0,r.jsxs)($,{children:[(0,r.jsx)(v,{color:g}),(0,r.jsxs)(k,{children:[e("forma.today.water"),(0,r.jsx)(j,{tone:T(W),children:F(W,"ml")})]}),(0,r.jsxs)(M,{children:[D,(0,r.jsxs)("span",{style:{color:s.w4.colors.mainTextMuted},children:[" / ",R,"ml"]})]})]})]})]})}var C=a(69454);let A={protein:c.Js,carbs:"#d29922",fat:"#8b949e",fiber:"#5fb3d9"},D=n().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.md};
  flex-wrap: wrap;
  min-width: 0;
`,R=n().div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
`,I=n().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.xs};
`,L=n().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,E=n().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${s.w4.colors.mainTextMuted};
  flex: 1;
  min-width: 0;
`,P=n().span`
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 500;
  color: ${s.w4.colors.mainText};
  text-align: right;
  min-width: 40px;
`;function H({meals:e,today:t,t:a}){let{protein:i,carbs:n,fat:s,fiber:d}=(0,o.useMemo)(()=>{let a=e.filter(e=>e.date===t);return{protein:a.reduce((e,t)=>e+(t.proteinG??0),0),carbs:a.reduce((e,t)=>e+(t.carbsG??0),0),fat:a.reduce((e,t)=>e+(t.fatG??0),0),fiber:a.reduce((e,t)=>e+(t.fiberG??0),0)}},[e,t]);if(0===i&&0===n&&0===s&&0===d)return null;let c=i+n+s+d,p=[{value:i,color:A.protein},{value:n,color:A.carbs},{value:s,color:A.fat},{value:d,color:A.fiber}].filter(e=>e.value>0),m=[{key:"protein",labelKey:"forma.macros.protein",color:A.protein,value:i},{key:"carbs",labelKey:"forma.macros.carbs",color:A.carbs,value:n},{key:"fat",labelKey:"forma.macros.fat",color:A.fat,value:s},{key:"fiber",labelKey:"forma.macros.fiber",color:A.fiber,value:d}].filter(e=>e.value>0);return(0,r.jsxs)(D,{children:[(0,r.jsx)(C.RJ,{data:p,total:c,size:96,thickness:12,centerLabel:a("forma.macros.eyebrow"),centerValue:`${Math.round(c)}g`}),(0,r.jsxs)(R,{children:[(0,r.jsx)(l.YZ,{style:{marginBottom:2},children:a("forma.macros.eyebrow")}),m.map(e=>(0,r.jsxs)(I,{color:e.color,children:[(0,r.jsx)(L,{color:e.color}),(0,r.jsx)(E,{children:a(e.labelKey)}),(0,r.jsxs)(P,{children:[Math.round(e.value),"g"]})]},e.key))]})]})}let B=n().section`
  position: relative;
  border: 1px solid ${s.w4.colors.border};
  border-left: 2px solid ${c.Js};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.md};
  background:
    radial-gradient(circle at 8% 12%, rgba(127, 183, 126, 0.10), transparent 45%),
    radial-gradient(circle at 92% 88%, rgba(232, 154, 92, 0.08), transparent 50%),
    linear-gradient(135deg, #14241c 0%, #0f1612 100%);
  overflow: hidden;
`,W=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
`,O=n().div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.xs};
`,N=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: ${s.w4.spacing.xs};
`,Y=n().button`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  min-height: 44px;
  padding: 8px 10px;
  background: transparent;
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  color: ${s.w4.colors.mainText};
  cursor: pointer;
  text-align: left;
  transition: border-color 0.12s ease, background 0.12s ease, transform 0.12s ease;

  &:hover {
    border-color: ${c.Js};
    background: ${s.w4.colors.sidebarHover};
    transform: translateY(-1px);
  }
`,K=n().span`
  width: 22px;
  height: 22px;
  border-radius: ${s.w4.borderRadius.sm};
  background: rgba(127, 183, 126, 0.12);
  color: ${c.Js};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
`,J=n().span`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,G=n().span`
  font-size: 13px;
  font-weight: 500;
  color: ${s.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,V=n().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainTextMuted};
`,q=n().span`
  font-size: 10px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${s.w4.colors.mainTextMuted};
`,U=n().div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${s.w4.spacing.sm};

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,_=n().div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.xs};
`,Q=n().div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${s.w4.spacing.xs};

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,X=n().button`
  height: 44px;
  background: rgba(95, 179, 217, 0.06);
  border: 1px solid rgba(95, 179, 217, 0.25);
  border-radius: ${s.w4.borderRadius.md};
  color: ${s.w4.colors.mainText};
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  transition: border-color 0.12s ease, background 0.12s ease, transform 0.12s ease;
  min-width: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${c.m5};
    box-shadow: 0 0 8px rgba(95, 179, 217, 0.5);
  }

  &:hover {
    border-color: ${c.m5};
    background: rgba(95, 179, 217, 0.14);
    transform: translateY(-1px);
  }
`,Z=n().ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.xs};
`,ee=n().li`
  display: grid;
  grid-template-columns: auto auto 1fr auto auto;
  align-items: center;
  gap: ${s.w4.spacing.sm};
  padding: 6px 8px;
  border-radius: ${s.w4.borderRadius.sm};
  border-left: 2px solid transparent;
  transition: background 0.12s ease, border-color 0.12s ease;
  &:hover {
    background: ${s.w4.colors.sidebarHover};
    border-left-color: ${c.Js};
  }
`,et=n().span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({tone:e})=>e}22;
  color: ${({tone:e})=>e};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ea=n().span`
  font-size: 11px;
  font-weight: 500;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainTextMuted};
  min-width: 40px;
`,er=n().span`
  font-size: 13px;
  color: ${s.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eo=n().span`
  font-size: 13px;
  font-weight: 500;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainText};
`,ei=n().button`
  background: transparent;
  border: none;
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 4px;
  border-radius: ${s.w4.borderRadius.sm};
  display: flex;
  align-items: center;
  &:hover { color: ${s.w4.colors.danger}; }
`,en=n().p`
  font-size: 12px;
  color: ${s.w4.colors.mainTextMuted};
  margin: 0;
  font-style: italic;
`,es=n().div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: ${s.w4.colors.mainTextMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
`;function el({data:e,t,onLogMeal:a,onLogWalk:i,onLogWeight:n,onLogWater:p,onDeleteMeal:m,onEditMeal:g,onTapTemplate:h}){var f;let x=new Date().toISOString().slice(0,10),u=new Date(Date.now()-864e5).toISOString().slice(0,10),w=(0,d.proteinByDay)(e.meals,x),b=(0,d.proteinByDay)(e.meals,u),y=(0,d.kcalByDay)(e.meals,x),$=(0,d.kcalByDay)(e.meals,u),v=(0,d.kcalTargetForDate)(e,x),k=(f=e.walks,f.filter(e=>e.date===x).reduce((e,t)=>e+t.minutes,0)),j=(0,d.waterByDay)(e.water??[],x),M=(0,d.waterByDay)(e.water??[],u),z=e.goal.waterMl??2e3,T=e.meals.filter(e=>e.date===x).sort((e,t)=>e.createdAt-t.createdAt),F=(0,d.derivedProteinTargetG)(e),C=(0,d.currentFast)(e),A=e.goal.targetHours??16,D=C?.percent??0,R=C?.hoursElapsed??0,I=new Date().getDay(),L=new Set(T.map(e=>e.templateId).filter(e=>!!e)),E=e.templates.filter(e=>e.weekday===I&&!L.has(e.id)).sort((e,t)=>("lunch"===e.slot?-1:1)-("lunch"===t.slot?-1:1)),[P,ed]=(0,o.useState)(!1),[ec,ep]=(0,o.useState)(""),em=(0,o.useCallback)(()=>{let e=parseInt(ec,10);!isNaN(e)&&e>0&&(p(e),ep(""),ed(!1))},[ec,p]);return(0,r.jsxs)(B,{children:[(0,r.jsx)(S,{t:t,fastPct:D,fastHours:R,fastTargetHours:A,protein:w,proteinTarget:F,proteinYesterday:b,kcal:y,kcalTarget:v,kcalYesterday:$,waterMl:j,waterTargetMl:z,waterYesterdayMl:M}),(0,r.jsxs)(U,{children:[(0,r.jsx)(l.$n,{variant:"success",icon:(0,r.jsx)(l.In,{name:"plus",size:14}),onClick:a,children:t("forma.action.logMeal")}),(0,r.jsx)(l.$n,{variant:"ghost",icon:(0,r.jsx)(l.In,{name:"plus",size:14}),onClick:i,children:t("forma.action.logWalk")}),(0,r.jsx)(l.$n,{variant:"ghost",icon:(0,r.jsx)(l.In,{name:"plus",size:14}),onClick:n,children:t("forma.action.logWeight")})]}),(0,r.jsx)(_,{children:P?(0,r.jsxs)("div",{style:{display:"flex",gap:s.w4.spacing.xs},children:[(0,r.jsx)("input",{type:"number",min:1,placeholder:"ml",value:ec,onChange:e=>ep(e.target.value),onKeyDown:e=>{"Enter"===e.key&&em()},style:{flex:1,height:44,background:s.w4.colors.surface,border:`1px solid ${s.w4.colors.border}`,borderRadius:s.w4.borderRadius.md,color:s.w4.colors.mainText,fontSize:13,fontFamily:s.w4.typography.fontFamilyMono,padding:`0 ${s.w4.spacing.sm}`},autoFocus:!0}),(0,r.jsx)(l.$n,{variant:"accent",onClick:em,children:t("forma.sheet.save")}),(0,r.jsx)(l.$n,{variant:"ghost",onClick:()=>ed(!1),children:t("forma.sheet.cancel")})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(W,{style:{color:c.m5,opacity:.85},children:t("forma.today.waterEyebrow")}),(0,r.jsxs)(Q,{children:[(0,r.jsx)(X,{onClick:()=>p(250),children:t("forma.water.add250")}),(0,r.jsx)(X,{onClick:()=>p(500),children:t("forma.water.add500")}),(0,r.jsx)(X,{onClick:()=>p(1e3),children:t("forma.water.add1000")}),(0,r.jsx)(X,{onClick:()=>ed(!0),children:t("forma.water.addCustom")})]})]})}),h&&E.length>0&&(0,r.jsxs)(O,{children:[(0,r.jsx)(W,{children:t("forma.today.tapToLog")}),(0,r.jsx)(N,{children:E.map(e=>(0,r.jsxs)(Y,{onClick:()=>h(e),title:t("forma.today.tapToLog"),children:[(0,r.jsx)(K,{children:(0,l.n6)(e.icon)?(0,r.jsx)(l.In,{name:e.icon,size:14}):(0,r.jsx)("span",{children:e.icon})}),(0,r.jsxs)(J,{children:[(0,r.jsx)(G,{children:t(e.nameKey)}),(0,r.jsxs)(V,{children:[e.proteinG,"g \xb7 ",e.kcal,"kcal"]})]}),(0,r.jsx)(q,{children:t(`forma.meal.${e.slot}`)})]},e.id))})]}),0===T.length?(0,r.jsx)(en,{children:t("forma.today.noMealsYet")}):(0,r.jsx)(Z,{children:T.map(e=>(0,r.jsxs)(ee,{onClick:g?()=>g(e.id):void 0,style:{cursor:g?"pointer":"default"},title:g?t("forma.action.edit"):void 0,children:[(0,r.jsx)(et,{tone:"lunch"===e.slot?"#58a6ff":"dinner"===e.slot?"#f59e0b":"#a371f7",title:t(`forma.meal.${e.slot}`),"aria-label":t(`forma.meal.${e.slot}`),children:(0,r.jsx)(l.In,{name:"lunch"===e.slot?"utensils":"dinner"===e.slot?"flame":"apple",size:12})}),(0,r.jsx)(ea,{children:new Date(e.createdAt).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}),(0,r.jsx)(er,{children:e.notes||"—"}),(0,r.jsxs)(eo,{children:[e.proteinG??0,"g \xb7 ",e.kcal??0,"kcal"]}),(0,r.jsx)(ei,{onClick:t=>{t.stopPropagation(),m(e.id)},"aria-label":t("forma.action.delete"),children:(0,r.jsx)(l.In,{name:"trash",size:14})})]},e.id))}),(0,r.jsx)(H,{meals:e.meals,today:x,t:t}),k>0&&(0,r.jsx)(es,{children:(0,r.jsx)("span",{children:t("forma.today.walkSummary",{min:k})})})]})}},20483(e,t,a){a.d(t,{v:()=>k});var r=a(65723),o=a(36859),i=a.n(o),n=a(72799),s=a(6063),l=a(63236),d=a(21571),c=a(32988);let p=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],g=["Dom","Seg","Ter","Qua","Qui","Sex","S\xe1b"];function h(e){return e.toISOString().slice(0,10)}let f=i().section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.sm};
  padding: ${s.w4.spacing.lg};
  border: 1px solid ${s.w4.colors.border};
  border-left: 2px solid ${d.Js};
  border-radius: ${s.w4.borderRadius.lg};
  background: ${d.xF};
  overflow: hidden;
  animation: ${p} 0.25s ease both;
  transition: border-color 0.14s ease;
  &:hover { border-color: rgba(127, 183, 126, 0.4); }
`,x=i().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(127, 183, 126, 0.85);
`,u=i().div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${s.w4.spacing.xs};
`,w=i().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: ${s.w4.spacing.sm} ${s.w4.spacing.xs};
  border-radius: ${s.w4.borderRadius.md};
  border: 1px solid ${({isDone:e})=>e?`${d.Js}55`:"rgba(127, 183, 126, 0.18)"};
  background: ${({isDone:e,isToday:t})=>e?"rgba(127, 183, 126, 0.14)":t?"rgba(20, 36, 28, 0.55)":"rgba(20, 36, 28, 0.30)"};
  outline: ${({isToday:e})=>e?`1px solid ${d.Js}60`:"none"};
  transition: border-color 0.14s ease, background 0.14s ease, transform 0.14s ease;
  min-width: 0;
  cursor: ${({tappable:e})=>e?"pointer":"default"};
  font: inherit;
  color: inherit;
  text-align: center;

  &:hover {
    ${({tappable:e})=>e?`border-color: ${d.Js}; transform: translateY(-1px);`:""}
  }
`,b=i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-weight: ${({isToday:e})=>e?700:400};
  color: ${({isToday:e})=>e?d.Js:s.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,y=i().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,$=i().div`
  color: ${d.Js};
  display: flex;
  align-items: center;
  justify-content: center;
`,v=i().div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${s.w4.colors.border};
`;function k({data:e,t,locale:a,onTapTemplate:o}){let i,n,s,d=(n=new Date(i=new Date),s=(i.getDay()+6)%7,n.setDate(i.getDate()-s),n.setHours(0,0,0,0),Array.from({length:7},(e,t)=>{let a=new Date(n);return a.setDate(n.getDate()+t),{date:h(a),weekday:a.getDay()}})),p=h(new Date),j="pt"===a?g:m,M=new Map;for(let t of e.templates)M.set(t.weekday,t);return(0,r.jsxs)(f,{children:[(0,r.jsx)(x,{children:t("forma.week.title")}),(0,r.jsx)(u,{children:d.map(({date:a,weekday:i})=>{let n=a===p,s=e.meals.some(e=>e.date===a),d=e.sessions.some(e=>void 0!==e.endedAt&&h(new Date(e.startedAt))===a),c=s||d,m=M.get(i),g=n&&void 0!==m&&void 0!==o&&!s;return(0,r.jsxs)(w,{isToday:n,isDone:c,tappable:g,onClick:()=>{g&&m&&o?.(m)},type:"button",title:g?t("forma.week.tapToLog"):void 0,"aria-label":g?t("forma.week.tapToLog"):void 0,children:[(0,r.jsx)(b,{isToday:n,children:j[i]}),c?(0,r.jsx)($,{"aria-label":t("forma.week.done"),children:(0,r.jsx)(l.In,{name:"check-circle",size:14})}):m?(0,r.jsx)(v,{title:t("forma.week.planned")}):null,m&&(0,r.jsx)(y,{children:t(m.nameKey)})]},a)})}),(0,r.jsx)(c.I,{variant:"compact"})]})}},79793(e,t,a){a.d(t,{J:()=>$});var r=a(65723),o=a(36859),i=a.n(o),n=a(72799),s=a(6063),l=a(69454),d=a(21571);let c=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,p=i().button`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: ${s.w4.spacing.lg};
  width: 100%;
  padding: ${s.w4.spacing.lg} ${s.w4.spacing.xl};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.lg};
  background:
    radial-gradient(circle at 18% 30%, rgba(127, 183, 126, 0.20), transparent 55%),
    radial-gradient(circle at 82% 78%, rgba(232, 154, 92, 0.20), transparent 60%),
    linear-gradient(135deg, #14241c 0%, #0f1612 100%);
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  animation: ${c} 0.25s ease both;
  transition: border-color ${s.w4.transitions.base}, transform ${s.w4.transitions.base};

  &:hover {
    border-color: rgba(127, 183, 126, 0.5);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    padding: ${s.w4.spacing.lg};
    gap: ${s.w4.spacing.md};
  }
`,m=i().div`
  width: 180px;
  height: 180px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(127, 183, 126, 0.12), transparent 70%);
  position: relative;
  box-shadow:
    0 0 48px rgba(127, 183, 126, 0.10),
    0 0 96px rgba(232, 154, 92, 0.06);

  &::after {
    content: '';
    position: absolute;
    inset: 16px;
    border-radius: 50%;
    border: 1px dashed rgba(127, 183, 126, 0.22);
  }
`,g=i().div`
  position: relative;
  z-index: 1;
  width: 120px;
  height: 56px;
`,h=i().span`
  position: relative;
  z-index: 1;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 36px;
  font-weight: 700;
  color: ${s.w4.colors.mainTextMuted};
`,f=i().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,x=i().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(127, 183, 126, 0.85);
`,u=i().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: clamp(28px, 5vw, 36px);
  font-weight: 800;
  color: ${s.w4.colors.mainText};
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
  line-height: 1;
`,w=i().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,b=i().span`
  color: ${({down:e})=>e?d.Js:d.yl};
  font-weight: 700;
`,y=i().span`
  position: absolute;
  top: ${({top:e})=>e}px;
  right: ${({right:e})=>e}px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${d.yl};
  opacity: ${({opacity:e})=>e};
  box-shadow: 0 0 8px rgba(232, 154, 92, 0.7);
  pointer-events: none;
`;function $({data:e,t,onClick:a}){let o=[...e.weights].sort((e,t)=>e.date.localeCompare(t.date)),i=o.slice(-14).map(e=>e.kg),n=o[o.length-1],s=o.length>=2?o[o.length-2]:null,c=n&&s?n.kg-s.kg:null,v=e.goal.weightKg??null,k=n&&null!==v?n.kg-v:null,j=n?`${n.kg.toFixed(1)}KG`:"—";return(0,r.jsxs)(p,{type:"button",onClick:a,"aria-label":t("forma.weight.label"),children:[(0,r.jsx)(m,{children:i.length>=2?(0,r.jsx)(g,{children:(0,r.jsx)(l.OW,{points:i,accent:d.Js,width:120,height:56,strokeWidth:2})}):(0,r.jsx)(h,{children:"⚖"})}),(0,r.jsxs)(f,{children:[(0,r.jsx)(x,{children:t("forma.weight.label")}),(0,r.jsx)(u,{children:j}),(0,r.jsx)(w,{children:null!==c&&Math.abs(c)>=.05?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(b,{down:c<0,children:[c>0?"+":"",c.toFixed(1)," KG"]})," \xb7 ",null!==k?`${k>0?"+":""}${k.toFixed(1)} KG ${t("forma.weight.toGoal").toUpperCase()}`:t("forma.weight.vsPrev").toUpperCase()]}):null!==k?(0,r.jsx)(r.Fragment,{children:`${k>0?"+":""}${k.toFixed(1)} KG ${t("forma.weight.toGoal").toUpperCase()}`}):t("forma.weight.empty").toUpperCase()})]}),(0,r.jsx)(y,{top:18,right:22,opacity:.95}),(0,r.jsx)(y,{top:42,right:14,opacity:.7}),(0,r.jsx)(y,{top:66,right:26,opacity:.45})]})}},77112(e,t,a){a.d(t,{m:()=>C});var r=a(65723),o=a(37991),i=a(36859),n=a.n(i),s=a(6063),l=a(63236),d=a(77752),c=a(21571);let p="#58a6ff",m=n().div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 160px;
`,g=n().svg`
  width: 100%;
  height: 100%;
  display: block;
  overflow: visible;
`,h=n().text`
  font-size: 10px;
  font-family: ${s.w4.typography.fontFamilyMono};
  fill: ${s.w4.colors.mainTextMuted};
`,f=n().text`
  font-size: 10px;
  font-family: ${s.w4.typography.fontFamilyMono};
  fill: ${p};
`;function x({forecast:e,axes:t=!0,goalKg:a}){let i=e.history,n=(0,o.useMemo)(()=>(function(e){if(0===e.length)return[];let t=e[0].kg,a=[];for(let r of e)t=.25*r.kg+.75*t,a.push(t);return a})(i),[i]);if(0===i.length)return(0,r.jsx)(m,{children:(0,r.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:s.w4.colors.mainTextMuted,fontSize:12,fontFamily:s.w4.typography.fontFamilyMono},children:"—"})});let l=t?40:8,d=t?22:6,u=i.map(e=>e.kg);void 0!==a&&u.push(a);let w=Math.min(...u),b=Math.max(...u),y=Math.max(2,b-w),$=w-.15*y,v=b+.15*y,k=v-$,j=new Date(i[0].date).getTime(),M=new Date(i[i.length-1].date).getTime(),z=Math.max(e.forecast.length?new Date(e.forecast[e.forecast.length-1].date).getTime():M,j+6048e5)-j||1,T=e=>l+(new Date(e).getTime()-j)/z*(600-2*l),F=e=>200-d-(e-$)/k*(200-2*d),S=i.length>=2?i.map((e,t)=>`${0===t?"M":"L"} ${T(e.date).toFixed(1)} ${F(n[t]).toFixed(1)}`).join(" "):"",C=e.forecast.length?`M ${T(i[i.length-1].date).toFixed(1)} ${F(n[n.length-1]).toFixed(1)} `+e.forecast.map(e=>`L ${T(e.date).toFixed(1)} ${F(e.kg).toFixed(1)}`).join(" "):"",A=i[i.length-1],D=e.forecast[e.forecast.length-1];return(0,r.jsx)(m,{children:(0,r.jsxs)(g,{viewBox:"0 0 600 200",preserveAspectRatio:"xMidYMid meet",children:[t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{x:4,y:d+4,children:v.toFixed(1)}),(0,r.jsx)(h,{x:4,y:200-d+4,children:$.toFixed(1)}),(0,r.jsx)("line",{x1:l,y1:200-d,x2:600-l,y2:200-d,stroke:s.w4.colors.border,strokeWidth:1}),(0,r.jsx)("line",{x1:l,y1:d,x2:l,y2:200-d,stroke:s.w4.colors.border,strokeWidth:1})]}),void 0!==a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("line",{x1:l,y1:F(a),x2:600-l,y2:F(a),stroke:p,strokeWidth:1,strokeDasharray:"2 4",opacity:.7}),t&&(0,r.jsx)(f,{x:600-l+4,y:F(a)+3,children:a.toFixed(1)})]}),S&&(0,r.jsx)("path",{d:S,fill:"none",stroke:c.Js,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),C&&(0,r.jsx)("path",{d:C,fill:"none",stroke:c.Js,strokeWidth:2,strokeDasharray:"4 4",strokeLinecap:"round",opacity:.55}),i.map(e=>(0,r.jsx)("circle",{cx:T(e.date),cy:F(e.kg),r:3,fill:s.w4.colors.surface,stroke:c.Js,strokeWidth:1.5,children:(0,r.jsx)("title",{children:`${e.date} \xb7 ${e.kg.toFixed(1)} kg`})},e.date)),D&&(0,r.jsx)("circle",{cx:T(D.date),cy:F(D.kg),r:3,fill:c.Js,opacity:.6}),A&&(0,r.jsx)("circle",{cx:T(A.date),cy:F(A.kg),r:5,fill:c.Js,stroke:s.w4.colors.surface,strokeWidth:1.5})]})})}var u=a(32988);let w=n().section`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.lg};
`,b=n().div`
  position: relative;
  border: 1px solid ${s.w4.colors.border};
  border-left: 2px solid ${c.Js};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.md};
  background: ${c.xF};
  overflow: hidden;
  transition: border-color 0.14s ease;
  &:hover { border-color: rgba(127, 183, 126, 0.4); }
`,y=n().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,$=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(127, 183, 126, 0.85);
`,v=n().div`
  display: flex;
  align-items: baseline;
  gap: ${s.w4.spacing.lg};
  flex-wrap: wrap;
`,k=n().span`
  font-size: clamp(28px, 5.6vw, 36px);
  font-weight: 800;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainText};
  letter-spacing: -0.02em;
  line-height: 1;
`,j=n().span`
  font-size: 12px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
`,M=n().div`
  height: 240px;
`,z=n().div`
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${({pos:e})=>e?s.w4.colors.danger:c.Js};
`,T=n().ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 280px;
  overflow-y: auto;
`,F=n().li`
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
`,S=n().button`
  background: transparent;
  border: none;
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 4px;
  border-radius: ${s.w4.borderRadius.sm};
  display: flex;
  align-items: center;
  &:hover { color: ${s.w4.colors.danger}; }
`;function C({data:e,t,onLogWeight:a,onDeleteWeight:i,onEditWeight:n}){let c=(0,o.useMemo)(()=>(0,d.weightForecast)(e.weights,90,30),[e.weights]),p=c.history.length?c.history[c.history.length-1]:null,m=e.goal.weightKg,g=7*c.slopePerDay,h=c.forecast.length?c.forecast[c.forecast.length-1]:null,f=[...e.weights].sort((e,t)=>t.date.localeCompare(e.date));return(0,r.jsxs)(w,{children:[(0,r.jsxs)(b,{children:[(0,r.jsxs)(y,{children:[(0,r.jsxs)($,{children:["◉ ",t("forma.weight.title")]}),(0,r.jsx)(l.$n,{variant:"success",icon:(0,r.jsx)(l.In,{name:"plus",size:14}),onClick:a,children:t("forma.action.logWeight")})]}),(0,r.jsxs)(v,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(k,{children:p?p.kg.toFixed(1):"—"}),(0,r.jsxs)(j,{children:[" kg ",t("forma.weight.now")]})]}),h&&(0,r.jsxs)("div",{children:[(0,r.jsx)(k,{style:{fontSize:18,color:s.w4.colors.mainTextMuted},children:h.kg.toFixed(1)}),(0,r.jsxs)(j,{children:[" kg ",t("forma.weight.in30")]})]}),void 0!==m&&(0,r.jsxs)("div",{children:[(0,r.jsx)(k,{style:{fontSize:18,color:s.w4.colors.accent},children:m.toFixed(1)}),(0,r.jsxs)(j,{children:[" kg ",t("forma.weight.target")]})]})]}),c.forecast.length>0?(0,r.jsxs)(z,{pos:g>0,children:[g>=0?"+":"",g.toFixed(2)," kg / ",t("forma.weight.perWeek")]}):c.history.length>=1?(0,r.jsx)(z,{pos:!1,style:{color:s.w4.colors.mainTextMuted},children:t("forma.weight.needMoreData")}):null,(0,r.jsx)(M,{children:(0,r.jsx)(x,{forecast:c,axes:!0,goalKg:m})}),(0,r.jsx)(u.I,{variant:"hero"})]}),(0,r.jsxs)(b,{children:[(0,r.jsxs)($,{children:["◉ ",t("forma.weight.entries")]}),(0,r.jsx)(u.I,{variant:"compact"}),0===f.length?(0,r.jsx)(j,{style:{fontStyle:"italic"},children:t("forma.weight.empty")}):(0,r.jsx)(T,{children:f.map(e=>(0,r.jsxs)(F,{onClick:n?()=>n(e.date):void 0,style:{cursor:n?"pointer":"default"},title:n?t("forma.action.edit"):void 0,children:[(0,r.jsx)("span",{children:e.date}),(0,r.jsxs)("span",{children:[e.kg.toFixed(1)," kg"]}),(0,r.jsx)(S,{onClick:t=>{t.stopPropagation(),i(e.date)},"aria-label":t("forma.action.delete"),children:(0,r.jsx)(l.In,{name:"trash",size:14})})]},e.date))})]})]})}},1609(e,t,a){a.d(t,{Af:()=>i,Cl:()=>n,EQ:()=>s});let r=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],o=["Seg","Ter","Qua","Qui","Sex","S\xe1b","Dom"];function i(e,t,a,r){let o=[function(e,t){let[a,r,o]=e.split("-").map(e=>parseInt(e,10));return new Date(a,(r??1)-1,o??1).toLocaleDateString("pt"===t?"pt-PT":"en-GB",{day:"2-digit",month:"short",year:"numeric"})}(t,r)],{count:i,hours:n}=function(e,t){let[a,r,o]=t.split("-").map(e=>parseInt(e,10)),i=new Date(a,(r??1)-1,o??1).getTime(),n=i+864e5,s=0,l=0;for(let t of e.sessions){let e=t.startedAt,a=Math.min(t.endedAt??Date.now(),n)-Math.max(e,i);a>0&&(s+=1,l+=a/36e5)}return{count:s,hours:l}}(e,t);i>0&&o.push(`🔥 ${i}\xd7 ${a("forma.activities.filter.fast")} \xb7 ${n.toFixed(1)}h`);let s=e.meals.filter(e=>e.date===t);if(s.length>0){let e=s.reduce((e,t)=>e+(t.proteinG??0),0),t=s.reduce((e,t)=>e+(t.kcal??0),0);o.push(`🍽 ${s.length}\xd7 ${a("forma.activities.filter.meal")}`+(e?` \xb7 ${e}g ${a("forma.activities.protein")}`:"")+(t?` \xb7 ${t} kcal`:""))}let l=e.weights.find(e=>e.date===t);l&&o.push(`⚖ ${l.kg.toFixed(1)} kg`);let d=e.walks.filter(e=>e.date===t);if(d.length>0){let e=d.reduce((e,t)=>e+t.minutes,0);o.push(`🚶 ${e} min`)}return 1===o.length&&o.push(`— ${a("forma.activities.empty")}`),o.join("\n")}function n(e,t,a,i,n){let s=[`${("pt"===n?o:r)[t]} ${String(a).padStart(2,"0")}:00`],l=(t+1)%7,d=e.sessions.filter(e=>{let t=new Date(e.startedAt);return t.getDay()===l&&t.getHours()===a});d.length>0&&s.push(`🔥 ${d.length}\xd7 ${i("forma.activities.fast.target").toLowerCase()} \xb7 ${i("forma.activities.filter.fast")}`);let c=e.meals.filter(e=>{let t=new Date(e.createdAt??Date.parse(e.date));return t.getDay()===l&&t.getHours()===a});if(c.length>0){let e=c.reduce((e,t)=>e+(t.proteinG??0),0),t=c.reduce((e,t)=>e+(t.kcal??0),0);s.push(`🍽 ${c.length}\xd7 ${i("forma.activities.filter.meal")}`+(e?` \xb7 ${e}g`:"")+(t?` \xb7 ${t} kcal`:""))}return 1===s.length&&s.push(`— ${i("forma.activities.empty")}`),s.join("\n")}function s(e,t){let a=new Date;return a.setDate(a.getDate()-(t-1-e)),a.toISOString().slice(0,10)}},20948(e,t,a){a.d(t,{A:()=>r});let r={"forma.appTitle":{en:"Forma",pt:"Forma"},"forma.nextUp.eyebrow":{en:"◉ NEXT UP",pt:"◉ A SEGUIR"},"forma.nextUp.aria":{en:"Next up action",pt:"Pr\xf3xima a\xe7\xe3o"},"forma.nextUp.endFastSoon":{en:"End fast in {h}h",pt:"Termina o jejum em {h}h"},"forma.nextUp.endFastDone":{en:"Fast complete — close it out",pt:"Jejum completo — termina agora"},"forma.nextUp.weighIn":{en:"Weigh in",pt:"Registar peso"},"forma.nextUp.logLunch":{en:"Log lunch",pt:"Registar almo\xe7o"},"forma.nextUp.addWater":{en:"+500 ml water",pt:"+500 ml de \xe1gua"},"forma.nextUp.cta.endFast":{en:"End fast",pt:"Terminar jejum"},"forma.nextUp.cta.weighIn":{en:"Weigh in",pt:"Pesar-me"},"forma.nextUp.cta.logLunch":{en:"Log lunch",pt:"Registar almo\xe7o"},"forma.nextUp.cta.addWater":{en:"+500 ml",pt:"+500 ml"},"forma.timer.elapsed":{en:"elapsed",pt:"decorrido"},"forma.timer.remaining":{en:"remaining",pt:"restantes"},"forma.timer.target":{en:"target",pt:"objetivo"},"forma.timer.complete":{en:"complete",pt:"completo"},"forma.timer.startedAt":{en:"started {time}",pt:"iniciado {time}"},"forma.timer.editStart":{en:"Edit start time",pt:"Editar hora de in\xedcio"},"forma.timer.editStartPrompt":{en:"New start time (YYYY-MM-DDTHH:MM):",pt:"Nova hora de in\xedcio (AAAA-MM-DDTHH:MM):"},"forma.today.title":{en:"Today",pt:"Hoje"},"forma.today.protein":{en:"protein",pt:"prote\xedna"},"forma.today.kcal":{en:"kcal",pt:"kcal"},"forma.today.walk":{en:"walking",pt:"caminhada"},"forma.today.fast":{en:"fast",pt:"jejum"},"forma.today.streakShort":{en:"day streak",pt:"dias"},"forma.today.tapToLog":{en:"Tap to log today’s plan",pt:"Toca para registar o plano de hoje"},"forma.today.waterEyebrow":{en:"◉ Water \xb7 quick add",pt:"◉ \xc1gua \xb7 adicionar"},"forma.shakes.eyebrow":{en:"Shakes \xb7 Dymatize",pt:"Shakes \xb7 Dymatize"},"forma.shakes.sub":{en:"WEIGHT-LOSS \xb7 ISO100 WHEY",pt:"EMAGRECIMENTO \xb7 ISO100 WHEY"},"forma.shakes.aria":{en:"Dymatize weight-loss shake recipes",pt:"Receitas de shakes Dymatize para emagrecer"},"forma.shakes.tapToOpen":{en:"Tap to view ingredients",pt:"Toca para ver ingredientes"},"forma.shakes.tapToLog":{en:"Tap to log this shake",pt:"Toca para registar este shake"},"forma.shakes.logCta":{en:"Log shake",pt:"Registar"},"forma.shake.banana-power.name":{en:"Banana Power",pt:"Banana Power"},"forma.shake.banana-power.ingredients":{en:"1 scoop ISO100 chocolate \xb7 1 banana \xb7 250ml oat milk \xb7 1 tsp peanut butter \xb7 ice",pt:"1 scoop ISO100 chocolate \xb7 1 banana \xb7 250ml leite vegetal \xb7 1 colher ch\xe1 manteiga amendoim \xb7 gelo"},"forma.shake.berry-burn.name":{en:"Berry Burn",pt:"Berry Burn"},"forma.shake.berry-burn.ingredients":{en:"1 scoop ISO100 vanilla \xb7 1 cup mixed berries \xb7 250ml almond milk \xb7 ice",pt:"1 scoop ISO100 baunilha \xb7 1 ch\xe1vena frutos vermelhos congelados \xb7 250ml leite am\xeandoa \xb7 gelo"},"forma.shake.choco-cafe.name":{en:"Choco Coffee Cut",pt:"Choco Caf\xe9"},"forma.shake.choco-cafe.ingredients":{en:"1 scoop ISO100 chocolate \xb7 1 espresso shot \xb7 200ml unsweetened almond milk \xb7 1 tsp cocoa \xb7 ice",pt:"1 scoop ISO100 chocolate \xb7 1 expresso \xb7 200ml leite am\xeandoa s/a\xe7\xfacar \xb7 1 colher ch\xe1 cacau \xb7 gelo"},"forma.shake.verde-detox.name":{en:"Green Detox",pt:"Verde Detox"},"forma.shake.verde-detox.ingredients":{en:"1 scoop ISO100 vanilla \xb7 1 handful spinach \xb7 \xbd banana \xb7 250ml almond milk \xb7 1 tsp chia",pt:"1 scoop ISO100 baunilha \xb7 1 m\xe3o de espinafres \xb7 \xbd banana \xb7 250ml leite am\xeandoa \xb7 1 colher ch\xe1 chia"},"forma.shake.tropical-lean.name":{en:"Tropical Lean",pt:"Tropical Lean"},"forma.shake.tropical-lean.ingredients":{en:"1 scoop ISO100 vanilla \xb7 \xbd cup pineapple \xb7 \xbd cup mango \xb7 250ml coconut water \xb7 ice",pt:"1 scoop ISO100 baunilha \xb7 \xbd ch\xe1vena anan\xe1s \xb7 \xbd ch\xe1vena manga \xb7 250ml \xe1gua de coco \xb7 gelo"},"forma.shake.pb-strawberry.name":{en:"PB & Strawberry",pt:"PB & Morango"},"forma.shake.pb-strawberry.ingredients":{en:"1 scoop ISO100 chocolate \xb7 1 tbsp PB powder \xb7 \xbd cup frozen strawberries \xb7 250ml almond milk",pt:"1 scoop ISO100 chocolate \xb7 1 colher sopa PB powder \xb7 \xbd ch\xe1vena morangos congelados \xb7 250ml leite am\xeandoa"},"forma.hero.greet.morning":{en:"Good morning, {name}.",pt:"Bom dia, {name}."},"forma.hero.greet.afternoon":{en:"Good afternoon, {name}.",pt:"Boa tarde, {name}."},"forma.hero.greet.evening":{en:"Good evening, {name}.",pt:"Boa noite, {name}."},"forma.hero.defaultName":{en:"friend",pt:"amigo"},"forma.hero.fastActive":{en:"{h}h into your fast",pt:"{h}h de jejum"},"forma.hero.fastIdle":{en:"Not fasting",pt:"Sem jejum"},"forma.hero.fastShort":{en:"fasting",pt:"jejum"},"forma.hero.fastIdleShort":{en:"idle",pt:"parado"},"forma.hero.weeklyShort":{en:"this week",pt:"esta semana"},"forma.hero.streakShort":{en:"d streak",pt:"d seguidos"},"forma.hero.weeklyFasts.tooltip":{en:"{n} of {total} weekly fasts complete",pt:"{n} de {total} jejuns desta semana"},"forma.today.noMealsYet":{en:"No meals logged yet today.",pt:"Ainda n\xe3o registaste refei\xe7\xf5es hoje."},"forma.today.walkSummary":{en:"{min} min walked today",pt:"{min} min caminhados hoje"},"forma.action.logMeal":{en:"Log meal",pt:"Registar refei\xe7\xe3o"},"forma.action.logWalk":{en:"Log walk",pt:"Registar caminhada"},"forma.action.logWeight":{en:"Log weight",pt:"Registar peso"},"forma.action.delete":{en:"Delete",pt:"Apagar"},"forma.action.promptSlot":{en:"Slot (lunch / dinner / snack):",pt:"Slot (lunch / dinner / snack):"},"forma.action.promptMealDesc":{en:"What did you eat?",pt:"O que comeste?"},"forma.action.promptProtein":{en:"Protein (g):",pt:"Prote\xedna (g):"},"forma.action.promptKcal":{en:"Calories (kcal):",pt:"Calorias (kcal):"},"forma.action.promptWalk":{en:"Minutes walked:",pt:"Minutos caminhados:"},"forma.action.promptWeight":{en:"Weight (kg):",pt:"Peso (kg):"},"forma.action.edit":{en:"Edit",pt:"Editar"},"forma.ask.title":{en:"Ask Forma",pt:"Pergunta \xe0 Forma"},"forma.ask.button":{en:"Get feedback",pt:"Pedir feedback"},"forma.ask.loading":{en:"Thinking…",pt:"A pensar…"},"forma.ask.hint":{en:"Get AI feedback on your meals, protein and recent activity.",pt:"Recebe feedback de IA sobre as tuas refei\xe7\xf5es, prote\xedna e atividade recente."},"forma.ask.noKey":{en:"No Groq API key configured. Add one in Settings.",pt:"Sem chave Groq configurada. Adiciona uma nas Defini\xe7\xf5es."},"forma.ask.error":{en:"Could not reach Groq. Try again.",pt:"N\xe3o foi poss\xedvel contactar o Groq. Tenta de novo."},"forma.ask.generatedAt":{en:"Generated",pt:"Gerado"},"forma.ask.regenerate":{en:"Refresh",pt:"Atualizar"},"forma.tabs.aria":{en:"Forma sections",pt:"Sec\xe7\xf5es Forma"},"forma.tab.today":{en:"Today",pt:"Hoje"},"forma.tab.trends":{en:"Trends",pt:"Tend\xeancias"},"forma.tab.fasting":{en:"Fasting",pt:"Jejum"},"forma.tab.weight":{en:"Weight",pt:"Peso"},"forma.tab.settings":{en:"Settings",pt:"Defini\xe7\xf5es"},"forma.trends.sub.aria":{en:"Trends views",pt:"Vistas de tend\xeancias"},"forma.trends.sub.overview":{en:"Overview",pt:"Vis\xe3o geral"},"forma.trends.sub.weight":{en:"Weight",pt:"Peso"},"forma.trends.sub.activities":{en:"Activities",pt:"Atividades"},"forma.settings.cog.label":{en:"Forma settings",pt:"Defini\xe7\xf5es Forma"},"forma.miniFast.title":{en:"Fasting",pt:"Jejum"},"forma.miniFast.aria":{en:"Open fasting tab",pt:"Abrir separador jejum"},"forma.miniFast.noActive":{en:"Not fasting",pt:"Sem jejum"},"forma.miniWeight.title":{en:"Weight forecast",pt:"Previs\xe3o de peso"},"forma.miniWeight.aria":{en:"Open weight tab",pt:"Abrir separador peso"},"forma.weight.title":{en:"Weight",pt:"Peso"},"forma.weight.now":{en:"now",pt:"agora"},"forma.weight.in30":{en:"in 30d (projected)",pt:"em 30d (previsto)"},"forma.weight.needMoreData":{en:"Log a few more weigh-ins to project a trend (need ≥3 entries spanning ≥14 days).",pt:"Regista mais algumas pesagens para prever a tend\xeancia (s\xe3o precisas ≥3 entradas em ≥14 dias)."},"forma.weight.target":{en:"target",pt:"objetivo"},"forma.weight.perWeek":{en:"week",pt:"semana"},"forma.weight.entries":{en:"Entries",pt:"Registos"},"forma.weight.empty":{en:"No weight entries yet.",pt:"Ainda sem registos de peso."},"forma.mealHeatmap.title":{en:"Meals by day & hour",pt:"Refei\xe7\xf5es por dia e hora"},"forma.settings.foodGoals":{en:"Food goals",pt:"Objetivos alimentares"},"forma.settings.fastingGoals":{en:"Fasting goals",pt:"Objetivos de jejum"},"forma.settings.proteinG":{en:"Daily protein (g)",pt:"Prote\xedna di\xe1ria (g)"},"forma.settings.kcal":{en:"Daily kcal",pt:"kcal di\xe1rias"},"forma.settings.walkMin":{en:"Daily walk (min)",pt:"Caminhada di\xe1ria (min)"},"forma.settings.weightTarget":{en:"Weight target (kg)",pt:"Peso-objetivo (kg)"},"forma.settings.proteinPerKg":{en:"Protein per kg (g/kg)",pt:"Prote\xedna por kg (g/kg)"},"forma.settings.proteinPerKgHint":{en:"Daily target = weight \xd7 g/kg (default 1.6)",pt:"Objetivo di\xe1rio = peso \xd7 g/kg (padr\xe3o 1.6)"},"forma.settings.targetHours":{en:"Default fast hours",pt:"Horas de jejum padr\xe3o"},"forma.settings.weeklyFasts":{en:"Fasts per week",pt:"Jejuns por semana"},"forma.settings.save":{en:"Save settings",pt:"Guardar"},"forma.settings.saved":{en:"Saved ✓",pt:"Guardado ✓"},"forma.grid.moveLeft":{en:"Move left",pt:"Mover para a esquerda"},"forma.grid.moveRight":{en:"Move right",pt:"Mover para a direita"},"forma.grid.resize":{en:"Resize ({size})",pt:"Redimensionar ({size})"},"forma.grid.hide":{en:"Hide card",pt:"Ocultar cart\xe3o"},"forma.grid.hiddenLabel":{en:"Hidden",pt:"Ocultos"},"forma.grid.card.mini-fast":{en:"Fasting",pt:"Jejum"},"forma.grid.card.mini-weight":{en:"Weight forecast",pt:"Previs\xe3o de peso"},"forma.grid.card.today":{en:"Today",pt:"Hoje"},"forma.grid.card.ask":{en:"Ask Forma",pt:"Pergunta \xe0 Forma"},"forma.grid.card.meal-heatmap":{en:"Meal heatmap",pt:"Mapa de refei\xe7\xf5es"},"forma.grid.card.week":{en:"Week plan",pt:"Plano semanal"},"forma.grid.card.stats":{en:"Stats",pt:"M\xe9tricas"},"forma.start":{en:"Start fast",pt:"Iniciar jejum"},"forma.stop":{en:"End fast",pt:"Terminar jejum"},"forma.log":{en:"Log",pt:"Registar"},"forma.protocol.16-8":{en:"16:8 — Leangains",pt:"16:8 — Leangains"},"forma.protocol.18-6":{en:"18:6 — Warrior Lite",pt:"18:6 — Guerreiro Leve"},"forma.protocol.20-4":{en:"20:4 — Warrior",pt:"20:4 — Guerreiro"},"forma.protocol.custom":{en:"Custom",pt:"Personalizado"},"forma.protocol.adherence":{en:"adherence",pt:"ader\xeancia"},"forma.streak":{en:"{n} day streak|day streak",pt:"{n} dia seguido|dias seguidos"},"forma.streak.none":{en:"No streak yet",pt:"Ainda sem sequ\xeancia"},"forma.adherence.weekly":{en:"This week",pt:"Esta semana"},"forma.adherence.fasts":{en:"{n} fast|fasts",pt:"{n} jejum|jejuns"},"forma.meal.lunch":{en:"Lunch",pt:"Almo\xe7o"},"forma.meal.dinner":{en:"Dinner",pt:"Jantar"},"forma.meal.snack":{en:"Snack",pt:"Lanche"},"forma.meal.protein":{en:"Protein",pt:"Prote\xedna"},"forma.meal.kcal":{en:"kcal",pt:"kcal"},"forma.meal.logged":{en:"Meal logged",pt:"Refei\xe7\xe3o registada"},"forma.meal.template":{en:"Template",pt:"Modelo"},"forma.weight.kg":{en:"kg",pt:"kg"},"forma.weight.logged":{en:"Weight logged",pt:"Peso registado"},"forma.weight.trend":{en:"7d trend",pt:"Tend\xeancia 7d"},"forma.weight.label":{en:"Weight",pt:"Peso"},"forma.weight.toGoal":{en:"to goal",pt:"at\xe9 objetivo"},"forma.weight.vsPrev":{en:"vs previous",pt:"vs anterior"},"forma.walk.minutes":{en:"min",pt:"min"},"forma.walk.logged":{en:"Walk logged",pt:"Caminhada registada"},"forma.walk.label":{en:"Walk",pt:"Caminhada"},"forma.walk.consistency":{en:"consistency",pt:"consist\xeancia"},"forma.quickadd.placeholder":{en:'"dinner chicken", "walked 30", "weight 84.2", "fast 16", "water 500"',pt:'"jantar frango", "caminhei 30", "peso 84.2", "jejum 16", "\xe1gua 500"'},"forma.quickadd.hint":{en:"Quick log",pt:"Registo r\xe1pido"},"forma.week.title":{en:"◉ WEEK",pt:"◉ SEMANA"},"forma.week.done":{en:"done",pt:"feito"},"forma.week.planned":{en:"planned",pt:"planeado"},"forma.week.noTemplate":{en:"Flexible",pt:"Livre"},"forma.week.tapToLog":{en:"Tap to log this meal",pt:"Toca para registar esta refei\xe7\xe3o"},"forma.sheet.title":{en:"◉ LOG",pt:"◉ REGISTAR"},"forma.sheet.ariaLabel":{en:"Log entry",pt:"Registar entrada"},"forma.sheet.fastSection":{en:"◉ FAST",pt:"◉ JEJUM"},"forma.sheet.mealSection":{en:"◉ MEAL",pt:"◉ REFEI\xc7\xc3O"},"forma.sheet.weightSection":{en:"◉ WEIGHT",pt:"◉ PESO"},"forma.sheet.walkSection":{en:"◉ WALK",pt:"◉ CAMINHADA"},"forma.sheet.logMeal":{en:"Log meal",pt:"Registar refei\xe7\xe3o"},"forma.sheet.logWeight":{en:"Log weight",pt:"Registar peso"},"forma.sheet.logWalk":{en:"Log walk",pt:"Registar caminhada"},"forma.sheet.minutesSuffix":{en:"min",pt:"min"},"forma.sheet.proteinLabel":{en:"Protein (g)",pt:"Prote\xedna (g)"},"forma.sheet.kcalLabel":{en:"kcal",pt:"kcal"},"forma.sheet.weightLabel":{en:"Weight (kg)",pt:"Peso (kg)"},"forma.sheet.walkLabel":{en:"Duration (min)",pt:"Dura\xe7\xe3o (min)"},"forma.sheet.save":{en:"Save",pt:"Guardar"},"forma.sheet.saveEdit":{en:"Save changes",pt:"Guardar altera\xe7\xf5es"},"forma.sheet.cancel":{en:"Cancel",pt:"Cancelar"},"forma.sheet.dateLabel":{en:"Date",pt:"Data"},"forma.sheet.titleAddMeal":{en:"◉ LOG MEAL",pt:"◉ NOVA REFEI\xc7\xc3O"},"forma.sheet.titleAddWeight":{en:"◉ LOG WEIGHT",pt:"◉ NOVO PESO"},"forma.sheet.titleAddWalk":{en:"◉ LOG WALK",pt:"◉ NOVA CAMINHADA"},"forma.sheet.titleEditMeal":{en:"◉ EDIT MEAL",pt:"◉ EDITAR REFEI\xc7\xc3O"},"forma.sheet.titleEditWeight":{en:"◉ EDIT WEIGHT",pt:"◉ EDITAR PESO"},"forma.sheet.titleEditWalk":{en:"◉ EDIT WALK",pt:"◉ EDITAR CAMINHADA"},"forma.sheet.logPastFast":{en:"Log past fast",pt:"Registar jejum passado"},"forma.sheet.titleAddFast":{en:"◉ LOG PAST FAST",pt:"◉ NOVO JEJUM PASSADO"},"forma.sheet.titleEditFast":{en:"◉ EDIT FAST",pt:"◉ EDITAR JEJUM"},"forma.sheet.fastStartLabel":{en:"Started at",pt:"In\xedcio"},"forma.sheet.fastEndLabel":{en:"Ended at",pt:"Fim"},"forma.sheet.fastEndHint":{en:"Leave empty if still in progress",pt:"Deixa vazio se ainda em curso"},"forma.sheet.fastTargetLabel":{en:"Target (h)",pt:"Objetivo (h)"},"forma.sheet.fastInvalidRange":{en:"End must be after start.",pt:"O fim tem de ser depois do in\xedcio."},"forma.sheet.estimateHint":{en:"≈ {protein}g protein \xb7 {kcal} kcal",pt:"≈ {protein}g prote\xedna \xb7 {kcal} kcal"},"forma.sheet.estimateUnmatched":{en:"unknown: {items}",pt:"desconhecido: {items}"},"forma.rail.title":{en:"◉ PROTOCOL",pt:"◉ PROTOCOLO"},"forma.rail.hours":{en:"{n}h fast",pt:"Jejum de {n}h"},"forma.rail.window":{en:"{n}h window",pt:"Janela de {n}h"},"forma.hero.notFasting":{en:"Not fasting",pt:"Sem jejum activo"},"forma.hero.inProgress":{en:"In progress",pt:"Em progresso"},"forma.hero.completed":{en:"Completed",pt:"Conclu\xeddo"},"forma.hero.avgDuration":{en:"Avg duration",pt:"Dura\xe7\xe3o m\xe9dia"},"forma.empty.firstFast":{en:"Start your first fast",pt:"Inicia o teu primeiro jejum"},"forma.empty.noMeals":{en:"No meals logged today",pt:"Sem refei\xe7\xf5es hoje"},"forma.empty.noWeight":{en:"No weight logged",pt:"Sem peso registado"},"forma.error.load":{en:"Failed to load data",pt:"Erro ao carregar dados"},"forma.tab.activities":{en:"Activities",pt:"Atividades"},"forma.activities.empty":{en:"No activities yet",pt:"Sem atividades ainda"},"forma.activities.edit":{en:"Edit entry",pt:"Editar entrada"},"forma.activities.delete":{en:"Delete entry",pt:"Apagar entrada"},"forma.activities.duplicateToToday":{en:"Duplicate to today",pt:"Duplicar para hoje"},"forma.activities.protein":{en:"protein",pt:"prote\xedna"},"forma.activities.fast.completed":{en:"Fast completed",pt:"Jejum conclu\xeddo"},"forma.activities.fast.inProgress":{en:"Fast in progress",pt:"Jejum em curso"},"forma.activities.fast.target":{en:"target",pt:"objetivo"},"forma.activities.weight.entry":{en:"Weight log",pt:"Registo de peso"},"forma.activities.walk.entry":{en:"Walk",pt:"Caminhada"},"forma.activities.filter.all":{en:"All",pt:"Todas"},"forma.activities.filter.fast":{en:"Fast",pt:"Jejum"},"forma.activities.filter.meal":{en:"Food",pt:"Comida"},"forma.activities.filter.weight":{en:"Weight",pt:"Peso"},"forma.activities.filter.walk":{en:"Walk",pt:"Caminhada"},"forma.activities.range.month":{en:"Last month",pt:"\xdaltimo m\xeas"},"forma.activities.range.3m":{en:"Last 3 months",pt:"\xdaltimos 3 meses"},"forma.activities.range.6m":{en:"Last 6 months",pt:"\xdaltimos 6 meses"},"forma.activities.range.year":{en:"Last year",pt:"\xdaltimo ano"},"forma.activities.range.all":{en:"All time",pt:"Tudo"},"forma.activities.confirmDelete.fast":{en:"Delete this fast session?",pt:"Apagar este jejum?"},"forma.activities.confirmDelete.meal":{en:"Delete this meal entry?",pt:"Apagar esta refei\xe7\xe3o?"},"forma.activities.confirmDelete.weight":{en:"Delete this weight entry?",pt:"Apagar este registo de peso?"},"forma.activities.confirmDelete.walk":{en:"Delete this walk entry?",pt:"Apagar esta caminhada?"},"forma.tab.analytics":{en:"Analytics",pt:"An\xe1lise"},"forma.tab.coach":{en:"Coach",pt:"Coach"},"forma.analytics.empty":{en:"No data yet",pt:"Sem dados ainda"},"forma.analytics.heatmap.title":{en:"90-day fasting",pt:"Jejum 90 dias"},"forma.analytics.heatmap.none":{en:"none",pt:"nenhum"},"forma.analytics.weight.title":{en:"Weight trend",pt:"Tend\xeancia de peso"},"forma.analytics.weight.delta":{en:"60-day EMA trend",pt:"Tend\xeancia EMA 60 dias"},"forma.analytics.protein.title":{en:"Today's protein",pt:"Prote\xedna de hoje"},"forma.analytics.protein.target":{en:"target",pt:"objetivo"},"forma.analytics.protein.remaining":{en:"remaining",pt:"restantes"},"forma.analytics.protein.achieved":{en:"Target reached ✓",pt:"Objetivo atingido ✓"},"forma.analytics.weekly.title":{en:"Weekly protein (6w)",pt:"Prote\xedna semanal (6s)"},"forma.analytics.fastTimes.title":{en:"When I fast",pt:"Quando jejuo"},"forma.grid.card.fast-heatmap":{en:"90-day fasting",pt:"Jejum 90 dias"},"forma.grid.card.weight-trend":{en:"Weight trend",pt:"Tend\xeancia de peso"},"forma.grid.card.protein-burn":{en:"Today's protein",pt:"Prote\xedna de hoje"},"forma.grid.card.weekly-protein":{en:"Weekly protein",pt:"Prote\xedna semanal"},"forma.grid.card.fast-times":{en:"When I fast",pt:"Quando jejuo"},"forma.grid.card.insights":{en:"Insights",pt:"Insights"},"forma.insights.title":{en:"Insights",pt:"Insights"},"forma.insights.empty":{en:"Log a fast, meal or weight to see insights.",pt:"Regista um jejum, refei\xe7\xe3o ou peso para veres insights."},"forma.insights.weeklyFasts.up.title":{en:"Strong week",pt:"Boa semana"},"forma.insights.weeklyFasts.up.body":{en:"{done}/{target} fasts — {delta} vs last week",pt:"{done}/{target} jejuns — {delta} vs semana passada"},"forma.insights.weeklyFasts.down.title":{en:"Slower week",pt:"Semana mais fraca"},"forma.insights.weeklyFasts.down.body":{en:"{done}/{target} fasts — {delta} vs last week",pt:"{done}/{target} jejuns — {delta} vs semana passada"},"forma.insights.weeklyFasts.steady.title":{en:"Steady week",pt:"Semana est\xe1vel"},"forma.insights.weeklyFasts.steady.body":{en:"{done}/{target} fasts — same as last week",pt:"{done}/{target} jejuns — igual \xe0 semana passada"},"forma.insights.protein.short.title":{en:"Protein below target",pt:"Prote\xedna abaixo do alvo"},"forma.insights.protein.short.body":{en:"Avg {avg} g — {delta} g below {target} g/day",pt:"M\xe9dia {avg} g — {delta} g abaixo de {target} g/dia"},"forma.insights.protein.over.title":{en:"Above protein target",pt:"Acima do alvo de prote\xedna"},"forma.insights.protein.over.body":{en:"Avg {avg} g — {delta} g over {target} g/day",pt:"M\xe9dia {avg} g — {delta} g acima de {target} g/dia"},"forma.insights.protein.onTarget.title":{en:"Protein on track",pt:"Prote\xedna no caminho"},"forma.insights.protein.onTarget.body":{en:"Avg {avg} g — close to {target} g/day",pt:"M\xe9dia {avg} g — perto de {target} g/dia"},"forma.insights.weight.down.title":{en:"Trending down",pt:"Em descida"},"forma.insights.weight.down.body":{en:"7-day EMA {delta} kg",pt:"EMA 7 dias {delta} kg"},"forma.insights.weight.up.title":{en:"Trending up",pt:"Em subida"},"forma.insights.weight.up.body":{en:"7-day EMA {delta} kg",pt:"EMA 7 dias {delta} kg"},"forma.insights.weight.flat.title":{en:"Weight steady",pt:"Peso est\xe1vel"},"forma.insights.weight.flat.body":{en:"7-day EMA {delta} kg",pt:"EMA 7 dias {delta} kg"},"forma.insights.walks.consistent.title":{en:"Walks on track",pt:"Caminhadas em dia"},"forma.insights.walks.consistent.body":{en:"{done}/{target} days this week",pt:"{done}/{target} dias esta semana"},"forma.insights.walks.partial.title":{en:"Walks — keep going",pt:"Caminhadas — continua"},"forma.insights.walks.partial.body":{en:"{done}/{target} days this week",pt:"{done}/{target} dias esta semana"},"forma.insights.walks.inconsistent.title":{en:"Walks slipping",pt:"Caminhadas a falhar"},"forma.insights.walks.inconsistent.body":{en:"Only {done}/{target} days this week",pt:"S\xf3 {done}/{target} dias esta semana"},"forma.insights.dayOfWeek.strong.title":{en:"Strongest day",pt:"Dia mais forte"},"forma.insights.dayOfWeek.strong.body":{en:"{day} — {count} fasts in 8 weeks",pt:"{day} — {count} jejuns em 8 semanas"},"forma.day.sun":{en:"Sunday",pt:"Domingo"},"forma.day.mon":{en:"Monday",pt:"Segunda"},"forma.day.tue":{en:"Tuesday",pt:"Ter\xe7a"},"forma.day.wed":{en:"Wednesday",pt:"Quarta"},"forma.day.thu":{en:"Thursday",pt:"Quinta"},"forma.day.fri":{en:"Friday",pt:"Sexta"},"forma.day.sat":{en:"Saturday",pt:"S\xe1bado"},"forma.template.monEggs":{en:"Eggs",pt:"Ovos"},"forma.template.tueBeef":{en:"Beef",pt:"Novilho"},"forma.template.wedEggsWhites":{en:"Eggs + Whites",pt:"Ovos + Claras"},"forma.template.thuChicken":{en:"Chicken",pt:"Frango"},"forma.template.friOmelette":{en:"Omelette",pt:"Omelete"},"forma.template.satMeatFish":{en:"Meat / Fish",pt:"Carne / Peixe"},"forma.template.sunFlexible":{en:"Flexible",pt:"Livre"},"forma.dinner.tunaEggsSalad":{en:"Tuna + 3 eggs + salad",pt:"Atum + 3 ovos + salada"},"forma.dinner.tunaVegOliveOil":{en:"Tuna + veg + olive oil",pt:"Atum + legumes + azeite"},"forma.dinner.tunaThreeEggs":{en:"Tuna + 3 eggs",pt:"Atum + 3 ovos"},"forma.dinner.tunaSaladPotato":{en:"Tuna + salad + potato",pt:"Atum + salada + batata"},"forma.dinner.tunaOmeletteTwoEggs":{en:"Tuna + omelette (2 eggs)",pt:"Atum + omelete (2 ovos)"},"forma.dinner.sardinesVeg":{en:"Sardines + veg",pt:"Sardinhas + legumes"},"forma.dinner.tunaSaladRefeed":{en:"Tuna + salad + rice (refeed)",pt:"Atum + salada + arroz (recarga)"},"forma.dinner.tunaTwoEggsVeg":{en:"Tuna + 2 eggs + veg",pt:"Atum + 2 ovos + legumes"},"forma.dinner.tunaSalad":{en:"Tuna + salad",pt:"Atum + salada"},"forma.dinner.omeletteTuna":{en:"Omelette with tuna",pt:"Omelete com atum"},"forma.dinner.salmonVeg":{en:"Salmon + veg",pt:"Salm\xe3o + legumes"},"forma.dinner.tunaSaladRefeedLight":{en:"Tuna + salad + sweet potato (refeed)",pt:"Atum + salada + batata-doce (recarga)"},"forma.dinner.proteinFlex":{en:"Protein of choice",pt:"Prote\xedna \xe0 escolha"},"forma.coach.hunger":{en:"High hunger detected — consider reducing your fasting window slightly.",pt:"Fome elevada detectada — considera reduzir ligeiramente a janela de jejum."},"forma.coach.lowEnergy":{en:"Low energy reported — ensure you're hitting your protein targets and staying hydrated.",pt:"Energia baixa reportada — garante que atinges os objetivos de prote\xedna e te mant\xe9ns hidratado/a."},"forma.coach.stall":{en:"Progress has stalled this week — try a refeed day or adjust your protocol.",pt:"O progresso estagnou esta semana — experimenta um dia de recarga ou ajusta o protocolo."},"forma.coach.lowAdherence":{en:"Adherence has been inconsistent — small consistent wins beat sporadic perfection.",pt:"A ader\xeancia tem sido inconsistente — pequenas vit\xf3rias constantes superam a perfei\xe7\xe3o espor\xe1dica."},"forma.coach.slowProgress":{en:"Progress is slow but steady — keep going, you're building momentum.",pt:"O progresso \xe9 lento mas constante — continua, est\xe1s a ganhar impulso."},"forma.coach.working":{en:"Your plan is working — weight trend is positive. Stay the course.",pt:"O teu plano est\xe1 a funcionar — a tend\xeancia do peso \xe9 positiva. Mant\xe9m o rumo."},"forma.coach.consistent":{en:"Excellent consistency this week — you're nailing the protocol.",pt:"Excelente consist\xeancia esta semana — est\xe1s a dominar o protocolo."},"forma.coach.reason.hunger":{en:"Avg hunger ≥ 3 in last 3 days",pt:"Fome m\xe9dia ≥ 3 nos \xfaltimos 3 dias"},"forma.coach.reason.lowEnergy":{en:"Avg energy ≤ 2 in last 3 days",pt:"Energia m\xe9dia ≤ 2 nos \xfaltimos 3 dias"},"forma.coach.reason.stall":{en:"No weight change in last 7 days",pt:"Sem altera\xe7\xe3o de peso nos \xfaltimos 7 dias"},"forma.coach.reason.adherence":{en:"Less than 3 fasts this week",pt:"Menos de 3 jejuns esta semana"},"forma.coach.reason.slowProgress":{en:"Slow but steady downward trend",pt:"Tend\xeancia descendente lenta mas constante"},"forma.checkin.title":{en:"◉ DAILY CHECK-IN",pt:"◉ CHECK-IN DI\xc1RIO"},"forma.checkin.hunger":{en:"Hunger (1 low — 5 high)",pt:"Fome (1 baixa — 5 alta)"},"forma.checkin.energy":{en:"Energy (1 low — 5 high)",pt:"Energia (1 baixa — 5 alta)"},"forma.checkin.adherence":{en:"Adherence (1 poor — 5 perfect)",pt:"Ader\xeancia (1 fraca — 5 perfeita)"},"forma.checkin.note":{en:"Note (optional)",pt:"Nota (opcional)"},"forma.checkin.save":{en:"Save check-in",pt:"Guardar check-in"},"forma.checkin.cancel":{en:"Cancel",pt:"Cancelar"},"forma.checkin.adherenceYes":{en:"Yes",pt:"Sim"},"forma.checkin.adherenceNo":{en:"No",pt:"N\xe3o"},"forma.checkin.notePlaceholder":{en:"Optional note about how you felt…",pt:"Nota opcional sobre como te sentiste…"},"forma.checkin.done":{en:"Check-in done",pt:"Check-in feito"},"forma.checkin.update":{en:"Update check-in",pt:"Atualizar check-in"},"forma.checkin.prompt":{en:"How are you feeling today?",pt:"Como te sentes hoje?"},"forma.program.title":{en:"◉ 30-DAY PROGRAM",pt:"◉ PROGRAMA 30 DIAS"},"forma.program.start":{en:"Start 30-day program",pt:"Iniciar programa de 30 dias"},"forma.program.day":{en:"Day {n}",pt:"Dia {n}"},"forma.program.dayOf":{en:"Day of {n}",pt:"Dia de {n}"},"forma.program.shake":{en:"Shake",pt:"Batido"},"forma.program.startTitle":{en:"Ready when you are.",pt:"Pronto quando quiseres."},"forma.program.startBody":{en:"Start the 30-day tuna-based program — daily prescriptions, weekly refeeds, and adaptive coach tips.",pt:"Inicia o programa de 30 dias com base em atum — prescri\xe7\xf5es di\xe1rias, recargas semanais e dicas do coach adaptativas."},"forma.program.refeed":{en:"Refeed day",pt:"Dia de recarga"},"forma.program.breakfast.oats":{en:"Oats 60g + protein shake",pt:"Aveia 60g + batido de prote\xedna"},"forma.program.breakfast.banana":{en:"Banana + protein shake",pt:"Banana + batido de prote\xedna"},"forma.program.dinner":{en:"Dinner",pt:"Jantar"},"forma.program.walk":{en:"Walk {min} min",pt:"Caminhada {min} min"},"forma.program.active":{en:"Active — Day {n} of 30",pt:"Ativo — Dia {n} de 30"},"forma.program.clear":{en:"Clear program",pt:"Limpar programa"},"forma.program.confirmClear":{en:"Clear the 30-day program?",pt:"Limpar o programa de 30 dias?"},"forma.program.confirmClearBody":{en:"Your progress and day log will be erased. This cannot be undone.",pt:"O progresso e o registo de dias ser\xe3o apagados. Esta a\xe7\xe3o n\xe3o pode ser desfeita."},"forma.program.noProgram":{en:"No program active",pt:"Nenhum programa ativo"},"forma.program.daysCompleted":{en:"day completed|days completed",pt:"dia conclu\xeddo|dias conclu\xeddos"},"forma.coach.title":{en:"◉ COACH",pt:"◉ COACH"},"forma.coach.empty":{en:"No coach feedback yet for today.",pt:"Sem feedback do coach para hoje."},"forma.coach.generate":{en:"Get coach tip",pt:"Obter dica do coach"},"forma.coach.refresh":{en:"Refresh",pt:"Atualizar"},"forma.grid.card.today-card":{en:"Today's plan",pt:"Plano de hoje"},"forma.grid.card.coach":{en:"Coach",pt:"Coach"},"forma.ask.chat.placeholder":{en:"Ask about your fasting, meals, or progress…",pt:"Pergunta sobre o teu jejum, refei\xe7\xf5es ou progresso…"},"forma.ask.chat.send":{en:"Send",pt:"Enviar"},"forma.ask.chat.you":{en:"You",pt:"Tu"},"forma.ask.chat.empty":{en:"Ask a question to get personalized feedback on your Forma data.",pt:"Faz uma pergunta para receber feedback personalizado sobre os teus dados Forma."},"forma.notif.coachTitle":{en:"Coach tip ready",pt:"Dica do coach dispon\xedvel"},"forma.timeline.title":{en:"Activity",pt:"Atividade"},"forma.timeline.range.1m":{en:"1M",pt:"1M"},"forma.timeline.range.3m":{en:"3M",pt:"3M"},"forma.timeline.range.6m":{en:"6M",pt:"6M"},"forma.timeline.range.1y":{en:"1Y",pt:"1A"},"forma.timeline.selectedDay.title":{en:"Day summary",pt:"Resumo do dia"},"forma.timeline.selectedDay.noData":{en:"No activity recorded.",pt:"Sem atividade registada."},"forma.timeline.kpi.fastHours":{en:"Fasted",pt:"Jejuado"},"forma.timeline.kpi.avgProtein":{en:"Avg protein",pt:"Prote\xedna m\xe9dia"},"forma.timeline.kpi.weightDelta":{en:"Weight Δ",pt:"Peso Δ"},"forma.timeline.kpi.walks":{en:"Walked",pt:"Caminhado"},"forma.month.prev":{en:"Previous month",pt:"M\xeas anterior"},"forma.month.next":{en:"Next month",pt:"M\xeas seguinte"},"forma.month.today":{en:"Today",pt:"Hoje"},"forma.month.kpi.fastHours":{en:"Fast hours",pt:"Horas em jejum"},"forma.month.kpi.avgProtein":{en:"Avg protein / day",pt:"Prote\xedna m\xe9d. / dia"},"forma.month.kpi.weightDelta":{en:"Weight Δ",pt:"Varia\xe7\xe3o peso"},"forma.month.kpi.weight":{en:"Weight",pt:"Peso"},"forma.month.summary.fast":{en:"fast",pt:"jejum"},"forma.month.summary.protein":{en:"protein",pt:"prote\xedna"},"forma.month.summary.weight":{en:"weight",pt:"peso"},"forma.month.summary.walks":{en:"walk",pt:"caminhada"},"forma.month.summary.checkIn":{en:"Check-in",pt:"Check-in"},"forma.month.summary.empty":{en:"No data logged",pt:"Sem dados registados"},"forma.month.summary.close":{en:"Close",pt:"Fechar"},"forma.month.kpi.walks":{en:"Walks total",pt:"Caminhadas total"},"forma.month.calendar.title":{en:"Month calendar",pt:"Calend\xe1rio do m\xeas"},"forma.month.protein.title":{en:"Daily protein",pt:"Prote\xedna di\xe1ria"},"forma.month.weight.title":{en:"Weight trend",pt:"Tend\xeancia de peso"},"forma.coach.noData":{en:"Nothing logged yet — log a meal, a walk, or finish a fast to start coaching.",pt:"Ainda n\xe3o registaste nada — regista uma refei\xe7\xe3o, uma caminhada ou termina um jejum para come\xe7ar."},"forma.program.walkLabel":{en:"Walk",pt:"Caminhada"},"forma.today.water":{en:"water",pt:"\xe1gua"},"forma.today.kcalOver":{en:"kcal (over target)",pt:"kcal (acima do objetivo)"},"forma.water.add250":{en:"+250 ml",pt:"+250 ml"},"forma.water.add500":{en:"+500 ml",pt:"+500 ml"},"forma.water.add1000":{en:"+1000 ml",pt:"+1000 ml"},"forma.water.addCustom":{en:"Custom",pt:"Outro"},"forma.water.ml":{en:"ml",pt:"ml"},"forma.water.goal":{en:"Water goal",pt:"Objetivo de \xe1gua"},"forma.water.consumed":{en:"Consumed",pt:"Consumida"},"forma.water.ofGoal":{en:"of goal",pt:"do objetivo"},"forma.sheet.titleAddWater":{en:"Log water",pt:"Registar \xe1gua"},"forma.sheet.titleEditWater":{en:"Edit water entry",pt:"Editar registo de \xe1gua"},"forma.sheet.waterLabel":{en:"Amount (ml)",pt:"Quantidade (ml)"},"forma.sheet.waterPlaceholder":{en:"e.g. 500",pt:"ex. 500"},"forma.coach.msg.lowWater":{en:"Hydration is low today — try to drink more water throughout the day.",pt:"A hidrata\xe7\xe3o est\xe1 baixa hoje — tenta beber mais \xe1gua ao longo do dia."},"forma.coach.reason.lowWater":{en:"Less than half of water goal consumed",pt:"Menos de metade do objetivo de \xe1gua consumida"},"forma.trends.sub.body":{en:"Body",pt:"Corpo"},"forma.body.eyebrow":{en:"◉ BODY MEASUREMENTS",pt:"◉ MEDIDAS CORPORAIS"},"forma.body.empty":{en:"No measurements yet. Log your first below.",pt:"Sem medidas ainda. Regista a primeira abaixo."},"forma.body.confirmDelete":{en:"Delete this measurement?",pt:"Apagar esta medida?"},"forma.body.kind.waist":{en:"Waist",pt:"Cintura"},"forma.body.kind.chest":{en:"Chest",pt:"Peito"},"forma.body.kind.arms":{en:"Arms",pt:"Bra\xe7os"},"forma.body.kind.thigh":{en:"Thigh",pt:"Coxas"},"forma.body.kind.hip":{en:"Hip",pt:"Anca"},"forma.body.kind.neck":{en:"Neck",pt:"Pesco\xe7o"},"forma.body.latest":{en:"Latest",pt:"\xdaltimo"},"forma.body.since":{en:"since start",pt:"desde o in\xedcio"},"forma.body.noEntries":{en:"No data",pt:"Sem dados"},"forma.body.cm":{en:"cm",pt:"cm"},"forma.body.logKind":{en:"Measurement kind:",pt:"Tipo de medida:"},"forma.body.logValue":{en:"Value (cm)",pt:"Valor (cm)"},"forma.body.logDate":{en:"Date",pt:"Data"},"forma.body.logSave":{en:"Save",pt:"Guardar"},"forma.body.logCancel":{en:"Cancel",pt:"Cancelar"},"forma.body.quickadd.hint":{en:'"waist 88", "chest 104", "arms 36", "thigh 58", "hip 100", "neck 40"',pt:'"cintura 88", "peito 104", "bra\xe7os 36", "coxas 58", "anca 100", "pesco\xe7o 40"'},"forma.data.title":{en:"◉ DATA EXPORT / IMPORT",pt:"◉ EXPORTAR / IMPORTAR DADOS"},"forma.data.exportSessions":{en:"Export sessions",pt:"Exportar jejuns"},"forma.data.exportMeals":{en:"Export meals",pt:"Exportar refei\xe7\xf5es"},"forma.data.exportWeights":{en:"Export weights",pt:"Exportar pesagens"},"forma.data.exportWalks":{en:"Export walks",pt:"Exportar caminhadas"},"forma.data.exportWater":{en:"Export water",pt:"Exportar \xe1gua"},"forma.data.importSessions":{en:"Import sessions",pt:"Importar jejuns"},"forma.data.importMeals":{en:"Import meals",pt:"Importar refei\xe7\xf5es"},"forma.data.importWeights":{en:"Import weights",pt:"Importar pesagens"},"forma.data.importWalks":{en:"Import walks",pt:"Importar caminhadas"},"forma.data.importWater":{en:"Import water",pt:"Importar \xe1gua"},"forma.data.confirmTitle":{en:"Confirm import",pt:"Confirmar importa\xe7\xe3o"},"forma.data.confirmBody":{en:"Add {n} new {kind} entries? Existing entries will not be overwritten.",pt:"Adicionar {n} novas entradas de {kind}? As entradas existentes n\xe3o ser\xe3o sobrescritas."},"forma.data.confirmOk":{en:"Import",pt:"Importar"},"forma.data.confirmCancel":{en:"Cancel",pt:"Cancelar"},"forma.data.importError":{en:"Import failed: {msg}",pt:"Erro ao importar: {msg}"},"forma.data.importDone":{en:"Imported {n} entries",pt:"Importadas {n} entradas"},"forma.data.importNoNew":{en:"No new entries to import (all duplicates)",pt:"Sem novas entradas para importar (todas duplicadas)"},"forma.data.kind.sessions":{en:"fasting sessions",pt:"jejuns"},"forma.data.kind.meals":{en:"meals",pt:"refei\xe7\xf5es"},"forma.data.kind.weights":{en:"weights",pt:"pesagens"},"forma.data.kind.walks":{en:"walks",pt:"caminhadas"},"forma.data.kind.water":{en:"water entries",pt:"entradas de \xe1gua"},"forma.macros.eyebrow":{en:"◉ MACROS",pt:"◉ MACROS"},"forma.macros.protein":{en:"Protein",pt:"Prote\xedna"},"forma.macros.carbs":{en:"Carbs",pt:"Hidratos"},"forma.macros.fat":{en:"Fat",pt:"Gordura"},"forma.macros.fiber":{en:"Fiber",pt:"Fibra"},"forma.fast.kind.refeed":{en:"REFEED",pt:"RECARGA"},"forma.fast.kind.breakday":{en:"REST DAY",pt:"DESCANSO"},"forma.meal.fromRecipe":{en:"From recipe",pt:"De receita"},"forma.recipe.chicken-rice":{en:"Chicken + Rice",pt:"Frango + Arroz"},"forma.recipe.salmon-sweet-potato":{en:"Salmon + Sweet Potato",pt:"Salm\xe3o + Batata-doce"},"forma.recipe.oats-protein-shake":{en:"Oats + Protein Shake",pt:"Aveia + Batido Prote\xedna"},"forma.recipe.cottage-cheese-berries":{en:"Cottage Cheese + Berries",pt:"Requeij\xe3o + Frutos"},"forma.recipe.eggs-toast":{en:"Eggs + Toast",pt:"Ovos + Tostas"},"forma.recipe.beef-veg":{en:"Beef + Veg",pt:"Novilho + Legumes"},"forma.recipe.tuna-salad":{en:"Tuna + Salad",pt:"Atum + Salada"},"forma.recipe.greek-yogurt-granola":{en:"Greek Yogurt + Granola",pt:"Iogurte Grego + Granola"},"forma.templates.title":{en:"Meal templates",pt:"Modelos de refei\xe7\xf5es"},"forma.templates.add":{en:"Add",pt:"Adicionar"},"forma.templates.reset":{en:"Reset to defaults",pt:"Repor predefini\xe7\xf5es"},"forma.templates.empty":{en:"No templates yet. Add one above.",pt:"Sem modelos ainda. Adiciona um acima."},"forma.templates.confirmDelete":{en:"Delete template?",pt:"Apagar modelo?"},"forma.templates.confirmDeleteBody":{en:'Remove "{name}" from your weekly plan?',pt:'Remover "{name}" do teu plano semanal?'},"forma.templates.confirmReset":{en:"Reset templates?",pt:"Repor modelos?"},"forma.templates.confirmResetBody":{en:"All custom templates will be replaced with the default weekly plan. This cannot be undone.",pt:"Todos os modelos personalizados ser\xe3o substitu\xeddos pelo plano semanal predefinido. Esta a\xe7\xe3o n\xe3o pode ser desfeita."},"forma.templates.modal.titleAdd":{en:"◉ ADD TEMPLATE",pt:"◉ NOVO MODELO"},"forma.templates.modal.titleEdit":{en:"◉ EDIT TEMPLATE",pt:"◉ EDITAR MODELO"},"forma.templates.modal.name":{en:"Name",pt:"Nome"},"forma.templates.modal.namePlaceholder":{en:"e.g. Chicken + veg",pt:"ex. Frango + legumes"},"forma.templates.modal.weekday":{en:"Day of the week",pt:"Dia da semana"},"forma.templates.modal.slot":{en:"Meal slot",pt:"Tipo de refei\xe7\xe3o"},"forma.templates.modal.proteinG":{en:"Protein (g)",pt:"Prote\xedna (g)"},"forma.templates.modal.kcal":{en:"Calories (kcal)",pt:"Calorias (kcal)"},"forma.templates.modal.icon":{en:"Icon",pt:"\xcdcone"}}},28170(e,t,a){a.d(t,{Ym:()=>c,Nx:()=>p});var r=a(37991),o=a(6063);let i={"time.justNow":{en:"just now",pt:"agora mesmo"},"time.mAgo":{en:"{n}m ago",pt:"h\xe1 {n}m"},"time.hAgo":{en:"{n}h ago",pt:"h\xe1 {n}h"},"time.dAgo":{en:"{n}d ago",pt:"h\xe1 {n}d"},updated:{en:"updated {age}",pt:"atualizado {age}"},refresh:{en:"Refresh",pt:"Atualizar"},loading:{en:"Loading…",pt:"A carregar…"},noData:{en:"No data available",pt:"Sem dados dispon\xedveis"},noDescription:{en:"No description provided.",pt:"Sem descri\xe7\xe3o."},failedToFetch:{en:"Failed to fetch",pt:"Erro ao carregar"},perWeek:{en:"/ wk",pt:"/ sem"},"devtools.heading":{en:"Dev Tools",pt:"Ferramentas"},"devtools.playground":{en:"Playground",pt:"Playground"},"devtools.pad":{en:"Pad",pt:"Pad"},"devtools.charts":{en:"Charts",pt:"Gr\xe1ficos"},"devtools.csv":{en:"CSV",pt:"CSV"},"devtools.regex":{en:"Regex",pt:"Regex"},"devtools.json":{en:"JSON",pt:"JSON"},"devtools.diff":{en:"Diff",pt:"Diferen\xe7as"},"devtools.jwt":{en:"JWT",pt:"JWT"},"devtools.cron":{en:"Cron",pt:"Cron"},"devtools.colors":{en:"Colors",pt:"Cores"},"devtools.api":{en:"API",pt:"API"}},n="atlantis:locale",s="shell:locale";function l(e){return"en"===e||"pt"===e}function d(){try{let e=localStorage.getItem(n);if(l(e))return e}catch{}return"en"}function c(){let[e,t]=(0,r.useState)(d),a=(0,r.useCallback)(e=>{t(e);try{localStorage.setItem(n,e)}catch{}(0,o.Is)(s,e).catch(()=>{}),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,r.useEffect)(()=>{let e=e=>{t(e.detail)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,r.useEffect)(()=>{(0,o.PL)(s).then(a=>{if(l(a)&&a!==e){try{localStorage.setItem(n,a)}catch{}t(a)}}).catch(()=>{})},[]),[e,a]}function p(e,t){let a=t?{...i,...t}:i;return(t,r)=>{let o=function(e,t){if(!t||!e.includes("|"))return e;let a=null;for(let e of Object.values(t))if("number"==typeof e&&Number.isFinite(e)){a=e;break}if(null===a)return e;let r=e.indexOf("|"),o=e.slice(0,r),i=e.slice(r+1);return 1===a?o:i}(a[t]?.[e]??t,r);return r?Object.entries(r).reduce((e,[t,a])=>e.replace(RegExp(`\\{${t}\\}`,"g"),String(a)),o):o}}(0,o.PL)(s).then(e=>{if(l(e))try{localStorage.setItem(n,e)}catch{}}).catch(()=>{}),a(65723);var m=a(36859),g=a.n(m);g().div`
  display: flex;
  gap: 4px;
  background: ${o.w4.colors.surface};
  border: 1px solid ${o.w4.colors.border};
  border-radius: ${o.w4.borderRadius.md};
  padding: 2px;
`,g().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${o.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${o.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?o.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":o.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":o.w4.colors.mainText};
  }
`},45816(e,t,a){a.d(t,{FlyoutPanel:()=>b});var r=a(65723),o=a(37991),i=a.n(o),n=a(36859),s=a.n(n),l=a(72799),d=a(6063),c=a(37993);let p={activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"a-large-small":'<path d="M18 14v7M22 14l-4-7-4 7M2 14h7M2 21V7l5-4 5 4v14"/>',apple:'<path d="M12 20.9A9 9 0 1 1 19 6.5a4.9 4.9 0 0 0 2 5.4 8.9 8.9 0 0 1-9 9z"/><path d="M12 6a2 2 0 0 0 2-2 2 2 0 0 0-2-2"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"bar-chart-2":'<path d="M3 3v18h18"/><path d="M5 18V10M10 18V4M15 18v-7"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"circle-dot":'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2 6.3-6.4 2 2-6.3z"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',"file-text":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5 2.2 5 2.2a5 5 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.5 9.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.4V22"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',hand:'<path d="M18 11V5a2 2 0 1 0-4 0v3a2 2 0 1 0-4 0V5a2 2 0 1 0-4 0v8l-2-3a2 2 0 1 0-3 2l4 7a6 6 0 0 0 6 4h2a6 6 0 0 0 6-6v-3a2 2 0 1 0-4 0z"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',landmark:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 11h20z"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',"layout-grid":'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',map:'<path d="M9 3 3 7v14l6-4 6 4 6-4V3l-6 4z"/><path d="M9 3v14M15 7v14"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"message-circle":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',minus:'<path d="M5 12h14"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',"pen-tool":'<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="M18 13 16.5 5.5 2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2 9.6 9.6"/><circle cx="11" cy="11" r="2"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',plus:'<path d="M12 5v14M5 12h14"/>',puzzle:'<path d="M19.4 14.4a1 1 0 0 0 .6-.9V8a1 1 0 0 0-1-1h-5.5a1 1 0 0 1-.9-.6 2 2 0 1 0-2 2 2.5 2.5 0 0 1 0 3 2 2 0 1 0 2 2 1 1 0 0 1 .9-.6h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 .6-.9 2 2 0 1 0-1.2 0z"/>',ruler:'<path d="M5 3l16 16-3 3L2 6zM8 6l3 3M11 9l3 3M14 12l3 3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>',slash:'<line x1="22" y1="2" x2="2" y2="22"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',triangle:'<path d="M3 20h18L12 4z"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',truck:'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',"volume-2":'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',watch:'<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5M8.2 5.5l.8-2.5h6l.8 2.5M15.8 18.5l-.8 2.5H9l-.8-2.5"/>',waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',bot:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M8 15h.01M16 15h.01M12 17h.01"/>'},m=(0,l.keyframes)`
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
  animation: ${m} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
`,h=s().div`
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
`,f=s().button`
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
`,x=({size:e=14,strokeWidth:t=1.75})=>(0,r.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,r.jsx)("polyline",{points:"14 2 14 8 20 8"})]});function u({iconKey:e}){let t=e?p[e]:void 0;return t?(0,r.jsx)("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,dangerouslySetInnerHTML:{__html:t}}):(0,r.jsx)(x,{})}function w({entries:e,activeId:t,onSelect:a}){return(0,r.jsx)(r.Fragment,{children:e.map(e=>e.children?(0,r.jsx)(i().Fragment,{children:(0,r.jsx)(w,{entries:e.children,activeId:t,onSelect:a})},e.id):(0,r.jsxs)(f,{active:t===e.id,onClick:()=>a(e),children:[(0,r.jsx)(u,{iconKey:e.icon}),e.name]},e.id))})}function b({activeId:e}){let{flyout:t,scheduleFlyoutClose:a,cancelFlyoutClose:o}=(0,c.c)();if(!t)return null;let i=t.entry.icon?p[t.entry.icon]:void 0;return(0,r.jsxs)(g,{anchorY:t.anchorY,onMouseEnter:o,onMouseLeave:a,children:[(0,r.jsxs)(h,{children:[i?(0,r.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,dangerouslySetInnerHTML:{__html:i}}):(0,r.jsx)(x,{size:13,strokeWidth:2}),t.entry.name]}),(0,r.jsx)(w,{entries:t.entry.children??[],activeId:e,onSelect:e=>{t.onSelect(e),a()}})]})}},37993(e,t,a){a.d(t,{I:()=>o,c:()=>i});var r=a(37991);let o=(0,r.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,r.useContext)(o)},63236(e,t,a){a.d(t,{YZ:()=>q,n6:()=>S,zA:()=>tj,rl:()=>et,TM:()=>tt,RT:()=>tC,mQ:()=>eX,ms:()=>M,vu:()=>O,Ex:()=>G,$n:()=>w,tJ:()=>z,In:()=>C,K0:()=>v,zy:()=>tD,PE:()=>tk,eu:()=>E,x:()=>tM});var r=a(65723),o=a(37991),i=a.n(o),n=a(36859),s=a.n(n),l=a(6063);let d={ghost:"transparent",accent:"transparent",primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},c={ghost:l.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:l.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},p={ghost:l.w4.colors.border,accent:l.w4.colors.accent,primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},m={ghost:l.w4.colors.mainTextMuted,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},g={ghost:l.w4.colors.mainText,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},h={sm:"28px",md:"30px"},f={sm:"0 10px",md:"0 12px"},x={sm:"12px",md:"12px"},u=s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>h[e]};
  padding: ${({size:e})=>f[e]};
  background: ${({variant:e})=>d[e]};
  border: 1px solid ${({variant:e})=>p[e]};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({variant:e})=>m[e]};
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
`,w=i().forwardRef(function({variant:e="ghost",size:t="md",icon:a,iconRight:o,children:i,...n},s){return(0,r.jsxs)(u,{ref:s,variant:e,size:t,...n,children:[a,i,o]})}),b={default:l.w4.colors.accent,danger:"#f85149"},y={default:l.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"},$=s().button`
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
`,v=i().forwardRef(function({active:e=!1,shape:t="square",tone:a="default",children:o,...i},n){return(0,r.jsx)($,{ref:n,active:e,shape:t,tone:a,...i,children:o})}),k=s().div`
  position: relative;
  display: inline-flex;
`,j=s().div`
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
`;function M({trigger:e,children:t,align:a="right",open:n,onOpenChange:s}){let[l,d]=(0,o.useState)(!1),c=n??l,p=e=>{s&&s(e),void 0===n&&d(e)},m=(0,o.useRef)(null);(0,o.useEffect)(()=>{if(!c)return;let e=e=>{m.current&&!m.current.contains(e.target)&&p(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[c]);let g=i().cloneElement(e,{onClick:t=>{e.props.onClick?.(t),p(!c)},"aria-expanded":c,"aria-haspopup":"menu"});return(0,r.jsxs)(k,{ref:m,children:[g,c&&(0,r.jsx)(j,{align:a,role:"menu",children:t})]})}let z=s().button`
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
`;s().div`
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
`,a(62727);var T=a(72799);let F={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',"cloud-rain":'<path d="M16 14a5 5 0 1 0-9.8 2H6M8 19v2M12 17v4M16 19v2"/>',snowflake:'<path d="M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1M2 12h20M8 6l4 4 4-4M8 18l4-4 4 4"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"alert-triangle":'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',"check-circle":'<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>',"x-circle":'<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',"rotate-ccw":'<path d="M2 12a10 10 0 1 0 5-8.7L2 7M2 2v5h5"/>',"rotate-cw":'<path d="M22 12a10 10 0 1 1-5-8.7L22 7M22 2v5h-5"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"alert-circle":'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',"alert-octagon":'<path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"/><path d="M12 8v4M12 16h.01"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',columns:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',"eye-off":'<path d="M17.9 17.9A10.8 10.8 0 0 1 12 20c-7 0-11-8-11-8a19.6 19.6 0 0 1 5.1-6M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a19.6 19.6 0 0 1-2.2 3.2M6.6 6.6l10.8 10.8M14.1 14.1a3 3 0 1 1-4.2-4.2"/>',"file-plus":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M12 12v6M9 15h6"/>',gauge:'<path d="M12 14a2 2 0 1 0-2-2M12 2a10 10 0 1 0 10 10M12 14 7.5 16.5"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',"git-fork":'<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/>',"grip-vertical":'<circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',"image-plus":'<path d="M21 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21M19 2v6M22 5h-6"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',loader:'<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',"panel-left":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',"panel-left-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M16 15l-3-3 3-3"/>',"panel-left-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M14 9l3 3-3 3"/>',"panel-right-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M8 9l3 3-3 3"/>',"panel-right-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M10 15l-3-3 3-3"/>',pencil:'<path d="m12 20 9-9-4-4-9 9v4zM15 5l4 4"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M4.9 19.1a10 10 0 0 1 0-14.1M7.8 16.2a6 6 0 0 1 0-8.5M19.1 4.9a10 10 0 0 1 0 14.1M16.2 7.8a6 6 0 0 1 0 8.5"/>',"scatter-chart":'<circle cx="7.5" cy="7.5" r="0.8" fill="currentColor"/><circle cx="18" cy="5" r="0.8" fill="currentColor"/><circle cx="11" cy="11" r="0.8" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.8" fill="currentColor"/><circle cx="17" cy="14" r="0.8" fill="currentColor"/><path d="M3 3v18h18"/>',shield:'<path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"/>',"shield-off":'<path d="M19.7 14a7.7 7.7 0 0 0 .3-2V4l-8-2-3.4.9M4.7 4.7 4 5v7c0 6 8 10 8 10a13 13 0 0 0 5.2-3.5M2 2l20 20"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',"trending-down":'<path d="M22 17l-9.5-9.5-5 5L2 7"/><path d="M16 17h6v-6"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',"user-cog":'<circle cx="10" cy="8" r="4"/><path d="M10.2 14H8a4 4 0 0 0-4 4v2"/><circle cx="18" cy="15" r="3"/><path d="M18 10v1M18 19v1M22 12l-.8.5M14.8 17.5 14 18M22 18l-.8-.5M14.8 12.5 14 12"/>',volume:'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',car:'<path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h12l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2M5 17l1 3h12l1-3M5 17h14"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>',"shopping-bag":'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>',wifi:'<path d="M5 12.6A10 10 0 0 1 19 12.6M1.5 8.9a15 15 0 0 1 21 0M8.5 16.5a5 5 0 0 1 7 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/>',wallet:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18M16 14h2"/>',receipt:'<path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21z"/><path d="M8 8h8M8 12h8M8 16h5"/>',"piggy-bank":'<path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/><path d="M19 9h2v4M14 7V5a2 2 0 0 0-4 0M16 11h.01M5 17v3M14 17v3"/>',banknote:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M5 9h.01M19 15h.01"/>',coins:'<circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/><path d="M9 6v6M7 9h4"/>',"line-chart":'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',"calendar-range":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 15h3M13 15h3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"refresh-ccw":'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',"refresh-cw":'<path d="M21 12a9 9 0 0 0-15-6.7L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15 6.7L21 16"/><path d="M21 21v-5h-5"/>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',split:'<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 3 12 12 3 3"/><path d="M12 12v9"/>',"more-horizontal":'<circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>',"a-large-small":'<path d="M18 14v7M22 14l-4-7-4 7M2 14h7M2 21V7l5-4 5 4v14"/>',apple:'<path d="M12 20.9A9 9 0 1 1 19 6.5a4.9 4.9 0 0 0 2 5.4 8.9 8.9 0 0 1-9 9z"/><path d="M12 6a2 2 0 0 0 2-2 2 2 0 0 0-2-2"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',"circle-dot":'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2 6.3-6.4 2 2-6.3z"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',"file-text":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5 2.2 5 2.2a5 5 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.5 9.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.4V22"/>',hand:'<path d="M18 11V5a2 2 0 1 0-4 0v3a2 2 0 1 0-4 0V5a2 2 0 1 0-4 0v8l-2-3a2 2 0 1 0-3 2l4 7a6 6 0 0 0 6 4h2a6 6 0 0 0 6-6v-3a2 2 0 1 0-4 0z"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/>',landmark:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 11h20z"/>',"layout-grid":'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',map:'<path d="M9 3 3 7v14l6-4 6 4 6-4V3l-6 4z"/><path d="M9 3v14M15 7v14"/>',"message-circle":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',"pen-tool":'<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="M18 13 16.5 5.5 2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2 9.6 9.6"/><circle cx="11" cy="11" r="2"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',puzzle:'<path d="M19.4 14.4a1 1 0 0 0 .6-.9V8a1 1 0 0 0-1-1h-5.5a1 1 0 0 1-.9-.6 2 2 0 1 0-2 2 2.5 2.5 0 0 1 0 3 2 2 0 1 0 2 2 1 1 0 0 1 .9-.6h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 .6-.9 2 2 0 1 0-1.2 0z"/>',ruler:'<path d="M5 3l16 16-3 3L2 6zM8 6l3 3M11 9l3 3M14 12l3 3"/>',slash:'<line x1="22" y1="2" x2="2" y2="22"/>',triangle:'<path d="M3 20h18L12 4z"/>',truck:'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',"volume-2":'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7"/>',watch:'<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5M8.2 5.5l.8-2.5h6l.8 2.5M15.8 18.5l-.8 2.5H9l-.8-2.5"/>',waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',bot:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M8 15h.01M16 15h.01M12 17h.01"/>',"bar-chart-2":'<path d="M3 3v18h18"/><path d="M5 18V10M10 18V4M15 18v-7"/>'};function S(e){return Object.prototype.hasOwnProperty.call(F,e)}function C({name:e,size:t=18,strokeWidth:a=1.5,...o}){let i=F[e];return(0,r.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!o["aria-label"]||void 0,...o,dangerouslySetInnerHTML:{__html:i}})}Object.keys(F);let A=s().span`
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
`,D=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: ${({fontSize:e})=>e}px;
  font-weight: 700;
  color: ${l.w4.colors.mainBg};
  line-height: 1;
  letter-spacing: 0;
`,R=["#3b82f6","#8b5cf6","#ec4899","#10b981","#f59e0b","#06b6d4"],I=0,L=new Map;function E({member:e,size:t=24}){var a,o;let i,n="shared"===e.id||"shared"===e.role,s=Math.floor(.55*t),d=t<=18?8:t<=22?9:t<=28?11:12;if(n)return(0,r.jsx)(A,{size:t,bg:l.w4.colors.surface,ring:!0,"aria-label":"Shared",title:"Shared",style:{color:l.w4.colors.mainTextMuted},children:(0,r.jsx)(C,{name:"home",size:s,"aria-hidden":!0})});let c=(a=e.id,(o=e.color)?o:(!L.has(a)&&(L.set(a,R[I%R.length]),I++),L.get(a))),p="adult"===e.role,m=(i=e.name.trim().split(/\s+/),((i[0]?.[0]??"")+(i[1]?.[0]??"")).toUpperCase().slice(0,2));return(0,r.jsx)(A,{size:t,bg:c,ring:p,title:e.name,children:(0,r.jsx)(D,{fontSize:d,children:m})})}s().img`
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
`;let P=(0,T.keyframes)`
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
  animation: ${P} 0.15s ease;
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
`;let H=(0,T.keyframes)`
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

  /* forma — fasting + diet: a conic-gradient progress ring with mono caption */
  &.viz--forma {
    background:
      radial-gradient(circle at 30% 25%, rgba(127, 183, 126, 0.20), transparent 55%),
      radial-gradient(circle at 75% 80%, rgba(232, 154, 92, 0.18), transparent 60%),
      linear-gradient(135deg, #14241c 0%, #0f1612 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 0;

    & > .arc {
      position: relative;
      width: 64px; height: 64px;
      border-radius: 50%;
      background: conic-gradient(#7fb77e 0deg 195deg, rgba(255,255,255,0.06) 195deg 360deg);
      display: grid; place-items: center;
      flex-shrink: 0;
    }
    & > .arc::after {
      content: '';
      width: 48px; height: 48px;
      border-radius: 50%;
      background: #14241c;
      grid-area: 1 / 1;
    }
    & > .arc > .h {
      grid-area: 1 / 1;
      z-index: 1;
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 14px;
      font-weight: 600;
      color: #e6edf3;
      letter-spacing: -0.02em;
      font-variant-numeric: tabular-nums;
    }

    & > .lbl {
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 9.5px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(127, 183, 126, 0.85);
      flex-shrink: 0;
    }
    & > .pip {
      position: absolute;
      width: 4px; height: 4px;
      border-radius: 50%;
      background: rgba(232, 154, 92, 0.9);
      box-shadow: 0 0 6px rgba(232, 154, 92, 0.6);
    }
    & > .pip.p1 { top: 16px; right: 22px; }
    & > .pip.p2 { top: 38px; right: 14px; opacity: 0.7; }
    & > .pip.p3 { top: 62px; right: 22px; opacity: 0.5; }
  }

  /* finance — vertical bar chart, last bar accent */
  &.viz--finance {
    background:
      radial-gradient(circle at 80% 20%, rgba(127, 183, 126, 0.18), transparent 60%),
      linear-gradient(180deg, #0f1f17 0%, #0a130d 100%);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 14px 18px 18px;
    gap: 6px;

    & > .bar {
      flex: 1;
      max-width: 14px;
      background: linear-gradient(180deg, rgba(127,183,126,0.7), rgba(127,183,126,0.3));
      border-radius: 2px 2px 0 0;
      position: relative;
    }
    & > .bar.accent {
      background: linear-gradient(180deg, #7fb77e, #4f8e4e);
      box-shadow: 0 -4px 14px rgba(127, 183, 126, 0.45);
    }

    &::before {
      content: '€';
      position: absolute;
      top: 12px; left: 14px;
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 18px;
      font-weight: 600;
      color: rgba(127, 183, 126, 0.7);
    }
    &::after {
      content: '+18%';
      position: absolute;
      top: 12px; right: 14px;
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 10px;
      letter-spacing: 0.04em;
      color: #7fb77e;
    }
  }

  /* youtube — three film-strip thumbnails with play glyphs */
  &.viz--youtube {
    background:
      radial-gradient(circle at 50% 30%, rgba(255, 0, 0, 0.18), transparent 55%),
      linear-gradient(135deg, #1a0a0a 0%, #0a0608 100%);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    padding: 14px;

    & > .tile {
      position: relative;
      border-radius: 4px;
      background: linear-gradient(135deg, #2a1414, #160808);
      border: 1px solid rgba(255, 50, 50, 0.18);
      display: grid; place-items: center;
    }
    & > .tile.t1 { background: linear-gradient(135deg, #3a1a1a, #1a0a0a); }
    & > .tile.t2 { background: linear-gradient(135deg, #4a2020, #1c0c0c); }
    & > .tile.t3 { background: linear-gradient(135deg, #2a1010, #140606); }

    & > .tile::after {
      content: '';
      width: 0; height: 0;
      border-left: 9px solid rgba(255,255,255,0.85);
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      margin-left: 2px;
      filter: drop-shadow(0 0 6px rgba(255, 0, 0, 0.5));
    }

    &::before {
      content: '';
      position: absolute;
      left: 14px; right: 14px; top: 50%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,0,0,0.4), transparent);
      pointer-events: none;
    }
  }

  /* music — equalizer bars + warm gradient */
  &.viz--music {
    background:
      radial-gradient(circle at 70% 70%, rgba(232, 154, 92, 0.25), transparent 55%),
      linear-gradient(135deg, #2a1810 0%, #14080a 100%);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 4px;
    padding: 18px 22px;

    & > .eq {
      width: 5px;
      border-radius: 3px;
      background: linear-gradient(180deg, #f0a868, #8a4a22);
      box-shadow: 0 0 6px rgba(232, 154, 92, 0.4);
    }
    & > .eq.b1 { height: 38%; }
    & > .eq.b2 { height: 72%; }
    & > .eq.b3 { height: 48%; }
    & > .eq.b4 { height: 88%; }
    & > .eq.b5 { height: 60%; }
    & > .eq.b6 { height: 32%; }
    & > .eq.b7 { height: 76%; }
    & > .eq.b8 { height: 50%; }
    & > .eq.b9 { height: 84%; }
    & > .eq.b10 { height: 42%; }

    &::before {
      content: '';
      position: absolute;
      top: 14px; right: 14px;
      width: 22px; height: 22px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 50% 50%, #1a0a0a 0 5px, transparent 5px),
        repeating-radial-gradient(circle at 50% 50%, rgba(232,154,92,0.4) 0 1px, transparent 1px 3px);
      border: 1px solid rgba(232, 154, 92, 0.5);
    }
    &::after {
      content: '♪';
      position: absolute;
      bottom: 10px; left: 14px;
      font-size: 14px;
      color: rgba(232, 154, 92, 0.75);
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
`;let B=s().button`
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
`,W=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
`,O=i().forwardRef(function({variant:e="default",dotColor:t,children:a,onClick:o,...i},n){return(0,r.jsxs)(B,{ref:n,variant:e,clickable:!!o,onClick:o,type:i.type??"button",...i,children:[t&&(0,r.jsx)(W,{color:t}),a]})}),N={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:l.w4.colors.accentMuted},Y={neutral:l.w4.colors.mainTextMuted,live:l.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:l.w4.colors.accent},K=s().span`
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
  background: ${({tone:e})=>N[e]};
  color: ${({tone:e})=>Y[e]};
`,J=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`;function G({tone:e="neutral",dot:t,children:a,...o}){return(0,r.jsxs)(K,{tone:e,...o,children:[(t??"live"===e)&&(0,r.jsx)(J,{}),a]})}s().kbd`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 3px;
  color: ${l.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`;let V=s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;function q({children:e,...t}){return(0,r.jsx)(V,{...t,children:e})}s().label`
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
`;let U=s().div`
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
`,_=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,Q=s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,X=s().div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,Z=s().div`
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
`,ee=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.danger};
`;function et({title:e,accessory:t,accentColor:a,error:o,errorLabel:i,children:n}){return(0,r.jsxs)(U,{accentColor:a,"data-widget-shell":!0,children:[(0,r.jsxs)(_,{children:[(0,r.jsx)(q,{children:e}),t&&(0,r.jsx)(Q,{children:t})]}),o?(0,r.jsxs)(Z,{role:"alert",children:[(0,r.jsx)(ee,{children:i??"Error"}),(0,r.jsx)("div",{children:o})]}):(0,r.jsx)(X,{children:n})]})}s().div`
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
`;let ea=(0,T.keyframes)`
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
  animation: ${ea} 0.18s ease both;

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
`;let er=(0,T.keyframes)`
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
  animation: ${er} 0.4s ease both;
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
`;var eo=a(11352),ei=a(76710),en=a(4311),es=a(73639),el=a(40080);a(75406),s().nav`padding: ${l.w4.spacing.sm} 0;`,s().div`
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
`;var ed=a(54041);let ec="https://cdn.jsdelivr.net/npm/mermaid@11.14.0/dist/mermaid.min.js",ep=null,em="#7fb77e",eg=(0,T.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,eh=s().div`
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
  animation: ${eg} 0.25s ease both;
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
    background: ${em};
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
    color: ${em};
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
`,ef=s().div`
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
  animation: ${(0,T.keyframes)`
    from { background-position: 200% 0; }
    to   { background-position: -200% 0; }
  `} 1.6s ease-in-out infinite;
  opacity: 0.45;
`,ex=s().pre`
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
`,eu=!1,ew=/^(?:---[\s\S]*?---\s*)?(?:graph|flowchart|sequenceDiagram|classDiagram|stateDiagram(?:-v2)?|erDiagram|pie|gantt|journey|mindmap|gitGraph|sankey(?:-beta)?|quadrantChart|requirementDiagram|timeline|xychart-beta|block-beta|C4Context|C4Container|C4Component|C4Dynamic|C4Deployment)\b/;function eb({code:e}){let[t,a]=(0,o.useState)(""),[i,n]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{let t=!1;n(!1),a("");let r=e.trim();if(!r)return void n(!0);let o=r.split(/\r?\n/)[0]?.trim()??"";if(!ew.test(o))return void n(!0);let i=setTimeout(()=>{t||(console.error("[MermaidBlock] render timed out after 5s"),n(!0))},5e3);return(async()=>{try{let e=await (ep||(ep=new Promise((e,t)=>{let a=globalThis.mermaid;if(a)return void e(a);let r=document.createElement("script");r.src=ec,r.async=!0,r.onload=()=>{let a=globalThis.mermaid;a?e(a):t(Error("mermaid loaded but globalThis.mermaid missing"))},r.onerror=()=>t(Error(`failed to load ${ec}`)),document.head.appendChild(r)})));if(console.debug("[MermaidBlock] mermaid ready",{initialized:eu}),!eu){let t="#141820",a="#1c2332",r="#343c4f",o="#e8edf5",i="#9aa5b8",n="#7fb77e",s="#6aa8d8",l="#8b7bff",d="#e89a5c",c="#f87171";e.initialize({startOnLoad:!1,theme:"base",securityLevel:"loose",themeVariables:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",background:t,mainBkg:a,primaryColor:n,primaryTextColor:o,primaryBorderColor:n,secondaryColor:l,secondaryTextColor:o,secondaryBorderColor:l,tertiaryColor:s,tertiaryTextColor:o,tertiaryBorderColor:s,lineColor:i,textColor:o,nodeBorder:r,clusterBkg:t,clusterBorder:r,edgeLabelBackground:a,labelBackground:a,labelBorder:r,relationLabelBackground:a,relationLabelColor:o,pie1:n,pie2:l,pie3:s,pie4:d,pie5:"#ff6fa9",pie6:"#2dd4bf",pie7:c,pie8:n,pieStrokeColor:t,pieStrokeWidth:"2px",pieTitleTextSize:"18px",pieSectionTextSize:"13px",pieLegendTextSize:"13px",actorBkg:n,actorBorder:n,actorTextColor:t,signalColor:o,signalTextColor:o,labelBoxBkgColor:a,labelBoxBorderColor:r,labelTextColor:o,loopTextColor:o,noteBkgColor:d,noteBorderColor:d,noteTextColor:t,stateBkg:a,altBackground:t,attributeBackgroundColorOdd:a,attributeBackgroundColorEven:t,rowOdd:a,rowEven:t,gridColor:r,sectionBkgColor:a,sectionBkgColor2:t,taskBkgColor:l,taskTextColor:o,taskTextDarkColor:o,taskTextLightColor:o,taskTextOutsideColor:o,activeTaskBkgColor:n,activeTaskBorderColor:n,doneTaskBkgColor:i,doneTaskBorderColor:i,critBkgColor:c,critBorderColor:c}}),eu=!0}console.debug("[MermaidBlock] calling mermaid.render");let{svg:o}=await e.render(`mermaid-${(0,ed.z)()}`,r);if(clearTimeout(i),console.debug("[MermaidBlock] render returned",{length:o?.length??0}),t)return;let s=/aria-roledescription="error"/i.test(o)||/class="error-(?:icon|text)"/i.test(o)||/>Syntax error in text</i.test(o);if(!o||s)return void n(!0);a(o)}catch(e){clearTimeout(i),console.error("[MermaidBlock] render failed",e),t||n(!0)}})(),()=>{t=!0,clearTimeout(i)}},[e]),i)?(0,r.jsx)(ex,{children:e.trim()}):t?(0,r.jsx)(eh,{dangerouslySetInnerHTML:{__html:t}}):(0,r.jsx)(eh,{children:(0,r.jsx)(ef,{"aria-hidden":!0})})}let ey=["#388bfd","#3fb950","#d29922","#a371f7","#f87171","#22d3ee","#fb923c","#34d399","#f472b6","#818cf8"],e$=s().div`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ev=s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  margin-bottom: ${l.w4.spacing.md};
  text-align: center;
`,ek=s().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
`,ej=s().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,eM=s().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,ez=s().pre`
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
`;function eT(e){if(e<=0)return 10;let t=Math.pow(10,Math.floor(Math.log10(e)));return Math.ceil(e/t)*t}function eF(e,t,a){let r=Math.max(1,Math.ceil(a/8));return 0!==t&&t!==a-1&&t%r!=0?"":e.length>12?e.slice(0,11)+"…":e}function eS({labels:e,data:t,colors:a}){let o=340,i=176,n=eT(Math.max(...t,1)),s=Math.min(40,o/e.length*.6),d=o/e.length,c=Array.from({length:6},(e,t)=>n/5*t);return(0,r.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[c.map((e,t)=>{let a=16+i-e/n*i;return(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:44,y1:a,x2:384,y2:a,stroke:l.w4.colors.border,strokeWidth:.5,strokeDasharray:0===t?"none":"3,3"}),(0,r.jsx)("text",{x:38,y:a+4,fill:l.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:l.w4.typography.fontFamily,children:Math.round(e)})]},t)}),t.map((t,o)=>{let c=44+d*o+d/2-s/2,p=t/n*i,m=16+i-p,g=a[o%a.length];return(0,r.jsxs)("g",{children:[(0,r.jsxs)("rect",{x:c,y:m,width:s,height:p,rx:3,fill:g,opacity:.85,children:[(0,r.jsx)("animate",{attributeName:"height",from:"0",to:p,dur:"0.5s",fill:"freeze"}),(0,r.jsx)("animate",{attributeName:"y",from:16+i,to:m,dur:"0.5s",fill:"freeze"})]}),(0,r.jsx)("text",{x:c+s/2,y:m-4,fill:l.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:t}),(0,r.jsx)("text",{x:44+d*o+d/2,y:208,fill:l.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:eF(e[o],o,e.length)})]},o)})]})}function eC({labels:e,data:t,colors:a}){let o=t.reduce((e,t)=>e+t,0)||1,i=-Math.PI/2,n=t.map((e,t)=>{let n=e/o*Math.PI*2,s=i,d=i+=n,c=120+90*Math.cos(s),p=120+90*Math.sin(s),m=120+90*Math.cos(d),g=120+90*Math.sin(d),h=+(n>Math.PI),f=s+n/2,x=120+58.5*Math.cos(f),u=120+58.5*Math.sin(f),w=Math.round(e/o*100);return(0,r.jsxs)("g",{children:[(0,r.jsx)("path",{d:`M 120 120 L ${c} ${p} A 90 90 0 ${h} 1 ${m} ${g} Z`,fill:a[t%a.length],stroke:l.w4.colors.codeBg,strokeWidth:2,opacity:.85}),w>=5&&(0,r.jsxs)("text",{x:x,y:u+4,fill:"#fff",fontSize:11,fontWeight:600,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:[w,"%"]})]},t)});return(0,r.jsx)("svg",{viewBox:"0 0 240 240",width:"100%",style:{maxWidth:240},children:n})}function eA({labels:e,data:t,colors:a}){let o=340,i=176,n=eT(Math.max(...t,1)),s=t.length>1?o/(t.length-1):o,d=a[0],c=t.map((e,t)=>({x:44+s*t,y:16+i-e/n*i})),p=c.map((e,t)=>`${0===t?"M":"L"} ${e.x} ${e.y}`).join(" "),m=Array.from({length:6},(e,t)=>n/5*t);return(0,r.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[m.map((e,t)=>{let a=16+i-e/n*i;return(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:44,y1:a,x2:384,y2:a,stroke:l.w4.colors.border,strokeWidth:.5,strokeDasharray:0===t?"none":"3,3"}),(0,r.jsx)("text",{x:38,y:a+4,fill:l.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:l.w4.typography.fontFamily,children:Math.round(e)})]},t)}),(0,r.jsx)("path",{d:p,fill:"none",stroke:d,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),c.map((a,o)=>(0,r.jsxs)("g",{children:[(0,r.jsx)("circle",{cx:a.x,cy:a.y,r:4,fill:d,stroke:l.w4.colors.codeBg,strokeWidth:2}),(0,r.jsx)("text",{x:a.x,y:a.y-10,fill:l.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:t[o]}),(0,r.jsx)("text",{x:a.x,y:208,fill:l.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:eF(e[o],o,e.length)})]},o))]})}function eD({code:e}){let t=(0,o.useMemo)(()=>(function(e){let t,a,r=e.trim().split("\n"),o="bar",i=[],n=[];for(let e of r){let[r,...s]=e.split(":"),l=s.join(":").trim();if(l)switch(r.trim().toLowerCase()){case"type":["bar","pie","line"].includes(l.toLowerCase())&&(o=l.toLowerCase());break;case"title":t=l;break;case"labels":i=l.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim()).filter(Boolean);break;case"data":n=l.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim()).filter(Boolean).map(e=>parseFloat(e)||0);break;case"colors":{let e=l.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim()).filter(Boolean);a=e.length?e:void 0}}}return i.length&&n.length?{type:o,title:t,labels:i,data:n,colors:a}:null})(e),[e]);if(!t)return(0,r.jsx)(ez,{children:e.trim()});let a=t.colors??ey;return(0,r.jsxs)(e$,{children:[t.title&&(0,r.jsx)(ev,{children:t.title}),"bar"===t.type&&(0,r.jsx)(eS,{labels:t.labels,data:t.data,colors:a}),"pie"===t.type&&(0,r.jsx)(eC,{labels:t.labels,data:t.data,colors:a}),"line"===t.type&&(0,r.jsx)(eA,{labels:t.labels,data:t.data,colors:a}),(0,r.jsx)(ek,{children:t.labels.map((e,t)=>(0,r.jsxs)(ej,{children:[(0,r.jsx)(eM,{color:a[t%a.length]}),e]},t))})]})}s().div`
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
`;let eR=(0,T.keyframes)`
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
`;let eI=s().button`
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
    animation: ${eR} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;s()(eI)`
  border-bottom: 1px solid ${l.w4.colors.border}80;
`,s()(eI)``,s().span`
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
`;var eL=a(17223),eE=a(21426);let eP=s().div`
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
`,eB=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,eW=s().button`
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
`,eO={...eE.A,'pre[class*="language-"]':{...eE.A['pre[class*="language-"]'],background:l.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...eE.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function eN({lang:e="text",code:t}){let[a,i]=(0,o.useState)(!1);return(0,r.jsxs)(eP,{children:[(0,r.jsxs)(eH,{children:[(0,r.jsx)(eB,{children:e}),(0,r.jsxs)(eW,{copied:a,onClick:()=>{navigator.clipboard.writeText(t).then(()=>{i(!0),setTimeout(()=>i(!1),2e3)})},children:[a?(0,r.jsx)(C,{name:"check",size:12}):(0,r.jsx)(C,{name:"copy",size:12}),a?"Copied!":"Copy"]})]}),(0,r.jsx)(eL.A,{language:e,style:eO,showLineNumbers:t.split("\n").length>8,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:l.w4.colors.codeBg},wrapLongLines:!1,children:t})]})}let eY={NOTE:{bg:"rgba(88, 166, 255, 0.08)",border:"#58a6ff",icon:"info",label:"Note",color:"#58a6ff"},TIP:{bg:"rgba(63, 185, 80, 0.08)",border:"#3fb950",icon:"lightbulb",label:"Tip",color:"#3fb950"},IMPORTANT:{bg:"rgba(163, 113, 247, 0.08)",border:"#a371f7",icon:"zap",label:"Important",color:"#a371f7"},WARNING:{bg:"rgba(210, 153, 34, 0.08)",border:"#d29922",icon:"alert-triangle",label:"Warning",color:"#d29922"},CAUTION:{bg:"rgba(248, 81, 73, 0.08)",border:"#f85149",icon:"alert-octagon",label:"Caution",color:"#f85149"}},eK=s().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${l.w4.borderRadius.md} ${l.w4.borderRadius.md} 0;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
`,eJ=s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: ${l.w4.spacing.sm};
`,eG=s().div`
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`;function eV({type:e,children:t}){let a=eY[e]??eY.NOTE;return(0,r.jsxs)(eK,{bg:a.bg,border:a.border,children:[(0,r.jsxs)(eJ,{color:a.color,children:[(0,r.jsx)(C,{name:a.icon,size:15,strokeWidth:2}),a.label]}),(0,r.jsx)(eG,{children:t})]})}s().nav`
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
`;let eq=(0,T.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,eU=(0,T.keyframes)`
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
`;function e_(){let e=/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i;return t=>{function a(t,a,r){let o=a.children?.[0];o?.type==="text"&&(o.value=o.value.replace(e,""),o.value.trim()||1!==a.children.length||a.children.shift()),t.data=t.data??{},t.data.hName="div",t.data.hProperties={"data-callout":r.toUpperCase()}}!function t(r){if("blockquote"===r.type){let t=r.children?.[0];if(t?.type==="paragraph"){let o=t.children?.[0],i=o?.type==="text"&&o.value?.match(e);i&&a(r,t,i[1])}}if("paragraph"===r.type){let t=r.children?.[0],o=t?.type==="text"&&t.value?.match(e);if(o){let t=[...r.children];r.children=[{type:"paragraph",children:t}],a(r,r.children[0],o[1]);let i=t[0];i?.type==="text"&&(i.value=i.value.replace(e,""),i.value.trim()||1!==t.length||t.shift());return}}r.children?.forEach(t)}(t)}}s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  /* Layout's TopBar uses z-index:1000; sit above it so the drawer fully
     covers the chrome and the drawer header / first row aren't clipped. */
  z-index: 1100;
  animation: ${eq} 0.18s ease both;

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
  z-index: 1101;
  /* Respect notches / status bar on iOS so the drawer header sits below
     the safe area inset rather than under the camera notch. */
  padding-top: env(safe-area-inset-top, 0px);
  display: flex;
  flex-direction: column;
  animation: ${eU} 0.22s cubic-bezier(0.4, 0, 0.2, 1) both;

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
`;let eQ=s().div`
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
`;function eX({children:e}){return(0,r.jsx)(eQ,{children:(0,r.jsx)(eo.oz,{remarkPlugins:[ei.A,en.A,e_],rehypePlugins:[es.A,el.A],components:{div({node:e,children:t,...a}){let o=a["data-callout"];return o?(0,r.jsx)(eV,{type:o,children:t}):(0,r.jsx)("div",{...a,children:t})},pre:({children:e})=>(0,r.jsx)(r.Fragment,{children:e}),code({className:e,children:t}){let a=/language-(\w+)/.exec(e??"")?.[1],o=String(t).replace(/\n$/,"");return o.trim()?"mermaid"===a?(0,r.jsx)(eb,{code:o}):"chart"===a?(0,r.jsx)(eD,{code:o}):a||o.includes("\n")?(0,r.jsx)(eN,{lang:a,code:o}):(0,r.jsx)("code",{className:e,children:t}):null}},children:e})})}var eZ=a(37993);s().nav`
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
`;let e0=(0,T.keyframes)`
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
  animation: ${e0} 0.25s ease both;

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
`;let e1=s().button`
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
`;s()(e1)`
  &:hover {
    color: #f85149;
    border-color: rgba(248, 81, 73, 0.4);
  }
`;let e2=(0,T.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;s().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${e2} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`;let e4=(0,T.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,e5=(0,T.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`,e3=s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${l.w4.spacing.md};
  animation: ${e4} 0.15s ease both;
`,e6=s().div`
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
  animation: ${e5} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,e8=s().div`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?l.w4.colors.danger:l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
`,e7=s().div`
  font-size: ${l.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`,e9=s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${l.w4.spacing.sm};
`,te=s().button`
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
`;function tt({open:e,title:t,message:a,confirmLabel:i,cancelLabel:n,onConfirm:s,onCancel:l,danger:d=!1}){return((0,o.useEffect)(()=>{if(!e)return;let t=e=>{"Escape"===e.key&&l(),"Enter"===e.key&&s()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[e,l,s]),e)?(0,r.jsx)(e3,{onClick:l,role:"dialog","aria-modal":"true","aria-label":t,children:(0,r.jsxs)(e6,{danger:d,onClick:e=>e.stopPropagation(),children:[(0,r.jsx)(e8,{danger:d,children:t}),(0,r.jsx)(e7,{children:a}),(0,r.jsxs)(e9,{children:[(0,r.jsx)(te,{onClick:l,children:n}),(0,r.jsx)(te,{danger:d,primary:!d,onClick:s,autoFocus:!0,children:i})]})]})}):null}let ta=(0,T.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,tr=(0,T.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,to=(0,T.keyframes)`
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
  animation: ${ta} 0.4s ease 0.15s both;
`,s().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,s().div`
  position: absolute;
  inset: 0;
  animation: ${tr} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
  animation: ${to} 1.4s ease-in-out infinite;
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
`;let ti="260px",tn="56px",ts="44px",tl=s().header`
  display: flex;
  align-items: center;
  height: calc(${ts} + env(safe-area-inset-top, 0px));
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
    min-height: calc(${ts} + env(safe-area-inset-top, 0px));
  }
`,td=s().div`
  width: ${tn};
  min-width: ${tn};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${l.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,tc=s().button`
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
`,tp=s().button`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 0 ${l.w4.spacing.md};
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${l.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.85; }
`,tm=s().span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  background: linear-gradient(135deg, ${l.w4.colors.accent}, ${l.w4.colors.accentHover});
  font-family: ${l.w4.typography.fontFamilySerif};
  font-size: 17px;
  font-weight: 600;
  line-height: 1;
  color: #ffffff;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08) inset,
    0 6px 18px -4px ${l.w4.colors.accent}88;

  /* serif: approved for logo wordmark */
`,tg=s().span`
  font-family: ${l.w4.typography.fontFamilySerif};
  font-size: 19px;
  font-weight: 500;
  letter-spacing: 0.005em;
  color: ${l.w4.colors.mainText};
  line-height: 1;

  /* serif: approved for logo wordmark */
`,th=s().div`
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
`,tf=s().div`
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
`,tx=s().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,tu=s().div`
  display: flex;
  flex-direction: column;
  height: ${l.w4.sizes.fullHeight};
  background: ${l.w4.colors.mainBg};
  font-family: ${l.w4.typography.fontFamily};
  color: ${l.w4.colors.mainText};
  overflow: hidden;
`,tw=s().aside`
  width: ${({collapsed:e})=>e?tn:ti};
  min-width: ${({collapsed:e})=>e?tn:ti};
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
`,tb=s().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,ty=s().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;function t$(){return(0,r.jsxs)(tp,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:[(0,r.jsx)(tm,{"aria-hidden":"true",children:"A"}),(0,r.jsx)(tg,{children:"Atlantis"})]})}let tv="atlantis:sidebar-collapsed";function tk({sidebar:e,children:t,topBarRight:n,title:s="Atlantis",activeId:l=null}){let[d,c]=(0,o.useState)(()=>{try{return"true"===localStorage.getItem(tv)}catch{return!1}}),[p,m]=(0,o.useState)(null),g=(0,o.useRef)(),h=()=>c(e=>{let t=!e;try{localStorage.setItem(tv,String(t))}catch{}return t}),f=i().useMemo(()=>i().lazy(()=>Promise.resolve().then(a.bind(a,45816)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(eZ.I.Provider,{value:{collapsed:d,toggle:h,flyout:p,openFlyout:(e,t,a)=>{clearTimeout(g.current),m({entry:e,anchorY:t,onSelect:a})},scheduleFlyoutClose:()=>{g.current=setTimeout(()=>m(null),160)},cancelFlyoutClose:()=>clearTimeout(g.current)},children:(0,r.jsxs)(tu,{children:[(0,r.jsxs)(tl,{children:[e&&(0,r.jsx)(td,{children:(0,r.jsx)(tc,{onClick:h,title:d?"Expand sidebar":"Collapse sidebar",children:(0,r.jsxs)("svg",{width:17,height:17,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),(0,r.jsx)("path",{d:"M9 3v18"})]})})}),(0,r.jsx)(t$,{}),s&&(0,r.jsx)(th,{children:s}),n&&(0,r.jsx)(tf,{children:n})]}),(0,r.jsxs)(tx,{children:[null!=e&&(0,r.jsx)(tw,{collapsed:d,children:(0,r.jsx)(tb,{children:e})}),(0,r.jsx)(ty,{children:t})]}),p&&(0,r.jsx)(i().Suspense,{fallback:null,children:(0,r.jsx)(f,{activeId:l})})]})})}s().div`
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
  outline: none;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.mainText};
  }
  &:focus { outline: none; }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: -2px;
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
`;let tj={"1m":30,"3m":90,"6m":180,"1y":365};function tM(e,t,a){let r=new Date(a??new Date);return r.setDate(r.getDate()-(t-1-e)),r.toISOString().slice(0,10)}let tz=["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"],tT="'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",tF=["S","T","Q","Q","S","S","D"],tS=["S","M","T","W","T","F","S"];function tC({data:e,cellSize:t=10,gap:a=2,locale:i="pt",tooltip:n,showMonthLabels:s=!1,accent:d,selectedIndex:c,onCellClick:p}){let m=(0,o.useId)();if(!e.length)return null;let g=!!p,h=d??l.w4.colors.accent,f=Math.ceil(e.length/7),x=14*!!s,u=24+f*(t+a),w=x+14+7*(t+a),b=[];if(s&&e.length>0){let r=new Date,o=-1;for(let n=0;n<e.length;n++){let s=Math.floor(n/7);if(0!=n%7)continue;let l=new Date(tM(n,e.length,r)),d=l.getMonth();if(d!==o){o=d;let e=new Intl.DateTimeFormat("pt"===i?"pt-PT":"en-US",{month:"short"}).format(l),r=18+s*(t+a);b.push({label:e.charAt(0).toUpperCase()+e.slice(1),x:r})}}}let y=x+2;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes ${m}_fade { from { opacity: 0; } to { opacity: 1; } }
      `}),(0,r.jsxs)("svg",{viewBox:`0 0 ${u} ${w}`,preserveAspectRatio:"xMidYMid meet",style:{width:"100%",height:"auto",maxHeight:220,display:"block"},"aria-hidden":g?void 0:"true",role:g?"grid":void 0,"aria-label":void 0,children:[s&&(0,r.jsx)("g",{fontFamily:tT,fontSize:"8",fill:l.w4.colors.mainTextMuted,children:b.map(({label:e,x:t},a)=>(0,r.jsx)("text",{x:t,y:10,children:e},a))}),(0,r.jsx)("g",{fontFamily:tT,fontSize:"8",fill:l.w4.colors.mainTextMuted,children:("pt"===i?tF:tS).map((e,o)=>(0,r.jsx)("text",{x:"0",y:y+8+o*(t+a),children:e},o))}),e.map((e,o)=>{let i=18+Math.floor(o/7)*(t+a),s=y+o%7*(t+a),l=tz[Math.max(0,Math.min(4,e))]??tz[0],d=n?.(o,e),f=c===o;return g?(0,r.jsx)("rect",{x:i,y:s,width:t,height:t,fill:l,rx:"1",stroke:f?h:"none",strokeWidth:1.5*!!f,role:"button",tabIndex:0,style:{animation:`${m}_fade 0.3s ease-out ${8*o}ms both`,cursor:"pointer",outline:"none"},onClick:()=>p?.(o,e),onKeyDown:t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),p?.(o,e))},children:d?(0,r.jsx)("title",{children:d}):null},o):(0,r.jsx)("rect",{x:i,y:s,width:t,height:t,fill:l,rx:"1",stroke:f?h:"none",strokeWidth:1.5*!!f,style:{animation:`${m}_fade 0.3s ease-out ${8*o}ms both`},children:d?(0,r.jsx)("title",{children:d}):null},o)})]})]})}let tA=["1m","3m","6m","1y"];function tD({range:e,onChange:t,labels:a}){return(0,r.jsx)("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:tA.map(o=>{let i=o===e,n=a?.[o]??o;return(0,r.jsx)("button",{onClick:()=>t(o),style:{height:28,padding:"0 10px",fontSize:11,fontFamily:tT,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.1em",borderRadius:4,border:`1px solid ${i?l.w4.colors.accent:l.w4.colors.border}`,background:i?`${l.w4.colors.accent}18`:"transparent",color:i?l.w4.colors.accent:l.w4.colors.mainTextMuted,cursor:"pointer",transition:"border-color 0.14s ease, color 0.14s ease, background 0.14s ease",outline:"none"},onFocus:e=>{e.currentTarget.style.outline=`2px solid ${l.w4.colors.accent}`,e.currentTarget.style.outlineOffset="2px"},onBlur:e=>{e.currentTarget.style.outline="none"},"aria-pressed":i,children:n},o)})})}},9391(e,t,a){a.d(t,{O:()=>n});var r=a(65723);a(37991);var o=a(63236);let i={sm:20,md:24,lg:28};function n({member:e,size:t="md"}){let a="number"==typeof t?t:i[t];return(0,r.jsx)(o.eu,{member:e,size:a})}},85043(e,t,a){a.d(t,{Y:()=>p});var r=a(65723),o=a(36859),i=a.n(o),n=a(6063);let s=i().div`
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
`,c={loading:"◌ Loading",empty:"◎ Empty",error:"◎ Offline"};function p({mode:e,label:t,body:a}){return(0,r.jsxs)(s,{children:[(0,r.jsx)(l,{mode:e,children:t??c[e]}),a&&(0,r.jsx)(d,{children:a})]})}},96246(e,t,a){a.d(t,{OW:()=>s,ik:()=>p,x:()=>h.x,zA:()=>h.zA,zy:()=>h.zy,kl:()=>x,RT:()=>h.RT,RJ:()=>g,YG:()=>r.Y});var r=a(85043),o=a(65723),i=a(37991),n=a(6063);function s({points:e,accent:t=n.w4.colors.accent,width:a=60,height:r=28,strokeWidth:l=1.5,fluid:d=!1}){let c=(0,i.useMemo)(()=>{if(e.length<2)return"";let t=Math.min(...e),o=Math.max(...e)-t||1,i=a-2*l,n=r-2*l;return e.map((a,r)=>{let s=l+r/(e.length-1)*i,d=l+n-(a-t)/o*n;return`${0===r?"M":"L"} ${s.toFixed(1)} ${d.toFixed(1)}`}).join(" ")},[e,a,r,l]),p=(0,i.useMemo)(()=>{if(e.length<1)return null;let t=e[e.length-1],o=Math.min(...e),i=a-2*l,n=r-2*l;return{x:l+i,y:l+n-(t-o)/(Math.max(...e)-o||1)*n}},[e,a,r,l]);return c?(0,o.jsxs)("svg",{width:d?"100%":a,height:d?"auto":r,viewBox:`0 0 ${a} ${r}`,preserveAspectRatio:"xMidYMid meet","aria-hidden":"true",style:{display:"block",flexShrink:+!!d},children:[(0,o.jsx)("path",{d:c,fill:"none",stroke:t,strokeWidth:l,strokeLinecap:"round",strokeLinejoin:"round",opacity:.7}),p&&(0,o.jsx)("circle",{cx:p.x,cy:p.y,r:l+1,fill:t})]}):null}var l=a(36859),d=a.n(l);d().span`
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
`,a(83090);let c="'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";function p({data:e,budget:t,height:a=200,animation:r="rise"}){let s=(0,i.useId)();if(!e.length)return null;let l=1.1*Math.max(...e.map(e=>e.segments.reduce((e,t)=>e+t.value,0)+(e.over??0)),t??0)||1,d=472,m=a-20-24,g=472/e.length*.58,h=d/e.length,f="rise"===r?{transformOrigin:"bottom",animation:`${s}_rise 0.45s ease-out both`}:{};return(0,o.jsxs)(o.Fragment,{children:["rise"===r&&(0,o.jsx)("style",{children:`
          @keyframes ${s}_rise {
            from { transform: scaleY(0); }
            to   { transform: scaleY(1); }
          }
        `}),(0,o.jsxs)("svg",{viewBox:`0 0 520 ${a}`,style:{width:"100%",height:a},preserveAspectRatio:"xMidYMid meet","aria-hidden":"true",children:[null!=t?(0,o.jsxs)("g",{children:[(0,o.jsx)("line",{x1:40,x2:40+d,y1:20+m-t/l*m,y2:20+m-t/l*m,stroke:n.w4.colors.border,strokeDasharray:"3 3",strokeWidth:"1"}),(0,o.jsxs)("text",{x:36,y:20+m-t/l*m+3,textAnchor:"end",fontFamily:c,fontSize:"9",fill:n.w4.colors.mainTextMuted,children:["€",t]})]}):null,e.map((e,t)=>{let r,i=40+t*h+(h-g)/2,s=20+m;return(0,o.jsxs)("g",{style:f,children:[e.segments.map(e=>{let t=e.value/l*m;return s-=t,(0,o.jsx)("rect",{x:i,y:s,width:g,height:t,fill:e.color,opacity:.85},e.id)}),null!=e.over&&e.over>0?(r=e.over/l*m,s-=r,(0,o.jsx)("rect",{x:i,y:s,width:g,height:r,fill:"#f85149",opacity:.7},"over")):null,(0,o.jsx)("text",{x:i+g/2,y:a-6,textAnchor:"middle",fontFamily:c,fontSize:"10",fill:n.w4.colors.mainTextMuted,children:e.label})]},e.label)})]})]})}let m="'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";function g({data:e,total:t,size:a=110,thickness:r=14,centerLabel:s,centerValue:l}){let d=(0,i.useId)(),c=a/2-r/2-2,p=2*Math.PI*c,h=e.reduce((e,t)=>e+t.value,0)||1,f=0;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{children:`
        @keyframes ${d}_dash {
          from { stroke-dasharray: 0 ${p.toFixed(1)}; }
        }
      `}),(0,o.jsxs)("svg",{viewBox:`0 0 ${a} ${a}`,style:{width:a,height:a,flexShrink:0},"aria-hidden":"true",children:[(0,o.jsx)("circle",{cx:a/2,cy:a/2,r:c,fill:"none",stroke:n.w4.colors.border,strokeWidth:r}),e.map((e,t)=>{let i=e.value/h*p,n=60*t,s=(0,o.jsx)("circle",{cx:a/2,cy:a/2,r:c,fill:"none",stroke:e.color,strokeWidth:r,strokeDasharray:`${i.toFixed(1)} ${p.toFixed(1)}`,strokeDashoffset:(-f).toFixed(1),transform:`rotate(-90 ${a/2} ${a/2})`,style:{animation:`${d}_dash 0.45s ease-out ${n}ms both`}},t);return f+=i,s}),s?(0,o.jsx)("text",{x:a/2,y:a/2-4,textAnchor:"middle",fontFamily:m,fontSize:"9",fill:n.w4.colors.mainTextMuted,letterSpacing:"0.12em",textDecoration:"none",children:s.toUpperCase()}):null,l?(0,o.jsx)("text",{x:a/2,y:s?a/2+11:a/2+4,textAnchor:"middle",fontFamily:m,fontSize:"13",fontWeight:"700",fill:n.w4.colors.mainText,children:l}):null]})]})}var h=a(63236);function f(e){let t=0;for(let a=1;a<e.length;a++){let r=e[a][0]-e[a-1][0],o=e[a][1]-e[a-1][1];t+=Math.sqrt(r*r+o*o)}return t}function x({spent:e,budget:t,height:a=60}){let r=(0,i.useId)(),s=1.05*t||1,l=Array.from({length:8},(e,a)=>t-t/7*a),d=Math.min(e/(t||1),1),c=Array.from({length:8},(e,a)=>Math.max(0,t-a/7*t*d*1.1)),p=l.map((e,t)=>[320*t/7,a-e/s*(a-5)]),m=c.map((e,t)=>[320*t/7,a-e/s*(a-5)]),g=p.map(e=>e.join(",")).join(" "),h=m.map(e=>e.join(",")).join(" "),u=f(p).toFixed(1),w=f(m).toFixed(1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{children:`
        @keyframes ${r}_i { from { stroke-dashoffset: ${u}; } }
        @keyframes ${r}_a { from { stroke-dashoffset: ${w}; } }
      `}),(0,o.jsxs)("svg",{viewBox:`0 0 320 ${a}`,style:{width:"100%",height:a},preserveAspectRatio:"none","aria-hidden":"true",children:[(0,o.jsx)("line",{x1:"0",x2:320,y1:a-5,y2:a-5,stroke:n.w4.colors.border,strokeDasharray:"3 3",strokeWidth:"1"}),(0,o.jsx)("polyline",{points:g,stroke:n.w4.colors.mainTextMuted,strokeWidth:"1",strokeDasharray:`${u} ${u}`,strokeDashoffset:"0",fill:"none",style:{strokeDasharray:"2 3",animation:`${r}_i 0.45s ease-out both`}}),(0,o.jsx)("polyline",{points:h,stroke:"#7fb77e",strokeWidth:"1.5",strokeDasharray:`${w} ${w}`,strokeDashoffset:"0",fill:"none",strokeLinecap:"round",style:{animation:`${r}_a 0.45s ease-out 0.08s both`}})]})]})}d().div`
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
`},83090(e,t,a){a.d(t,{B:()=>o});var r=a(77752);function o(e){let t=(0,r.cacheBackedProducer)({id:e.id,category:e.category,cacheKey:e.cacheKey,parse:e.parse});return{id:e.id,category:e.category,labelKey:e.labelKey,defaultEnabled:e.defaultEnabled,producer:t,start(){},stop(){}}}},87517(e,t,a){a.d(t,{A:()=>r});let r={id:"habits",load:()=>Promise.all([a.e("44"),a.e("45")]).then(a.bind(a,26780)).then(e=>({default:e.HabitsWidget})),labels:{en:"Habits Grid",pt:"Grelha de H\xe1bitos"},descriptions:{en:"Your last 7 days of missions",pt:"Os teus \xfaltimas 7 dias de miss\xf5es"},icon:"\uD83C\uDFAF",accentColor:"#fb923c",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:200,suite:"vida",defaultOnDashboard:!0,sources:[{id:"daily-progress",kind:"bll-hook",cacheKey:"daily:progress",labelKey:"sources.dailyProgress"}],notifications:[{id:"daily",category:"daily.overdue",labelKey:"notifications.source.daily",producer:(0,a(77752).dailyProducer)({category:"daily.overdue"}),start(){},stop(){}}],persistedKeys:["daily:progress"]}},32013(e,t,a){a.d(t,{A:()=>i});var r=a(36730),o=a(77752);let i={id:"hackernews-hot",load:()=>Promise.all([a.e("44"),a.e("390")]).then(a.bind(a,33565)).then(e=>({default:e.HackerNewsHotWidget})),labels:{en:"Hacker News Hot",pt:"Em Alta no HN"},descriptions:{en:"Top stories from Hacker News",pt:"Hist\xf3rias em destaque no Hacker News"},icon:"\uD83D\uDD25",accentColor:"#f97316",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"hn-firebase",kind:"dal-client",cacheKey:"internet-hn-ids",labelKey:"sources.hackerNews",notifiable:!0}],notifications:[{id:"hn-front-page",category:"hn.frontPage",labelKey:"notifications.source.hnFrontPage",producer:{id:"hn-front-page",category:"hn.frontPage",async poll(){if((0,o.isMutedNow)("hn.frontPage"))return[];let e=await (0,r.fetchHnFrontPage)(5);if(!e?.hits)return[];let t=[];for(let a of e.hits){let e=a.created_at_i??(a.created_at?Date.parse(a.created_at)/1e3:NaN);Number.isFinite(e)&&t.push({id:`hn-front:${a.objectID}`,category:"hn.frontPage",ts:1e3*e,title:a.title,link:a.url??`https://news.ycombinator.com/item?id=${a.objectID}`,meta:{points:a.points,comments:a.num_comments}})}return t}},start(){},stop(){}}],persistedKeys:["widget-cache:internet-hn-ids"]}},69454(e,t,a){a.d(t,{OW:()=>r.OW,ik:()=>r.ik,x:()=>r.x,zA:()=>r.zA,zy:()=>r.zy,kl:()=>r.kl,RT:()=>r.RT,RJ:()=>r.RJ,YG:()=>r.YG}),a(77752),a(87517),a(32013),a(19603),a(72026),a(25471),a(55417),a(54200),a(52306),a(89780);var r=a(96246);a(65723),a(37991);var o=a(36859),i=a.n(o),n=a(72799),s=a(6063);a(63236),a(28170);let l=(0,n.keyframes)`
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
`},19603(e,t,a){a.d(t,{A:()=>n});var r=a(77752),o=a(83090);function i(e){return function(t){if(!t?.items)return[];let a=[];return t.items.forEach(t=>{let o=Date.parse(t.pubDate);if(Number.isNaN(o)||(0,r.classifyPtNewsItem)(t.title,t.description)!==e)return;let i=t.link||t.title;a.push({id:`news-pt-${e}:${i}`,ts:o,title:t.title,link:t.link})}),a}}let n={id:"news-pt",load:()=>Promise.all([a.e("44"),a.e("392")]).then(a.bind(a,71507)).then(e=>({default:e.NewsPortugalWidget})),labels:{en:"PT News",pt:"Not\xedcias PT"},descriptions:{en:"Latest news from RTP",pt:"\xdaltimas not\xedcias da RTP"},icon:"\uD83D\uDCF0",accentColor:"#2da44e",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"rtp-rss",kind:"cache-key",cacheKey:"news-portugal",labelKey:"sources.rtp",notifiable:!0}],notifications:[(0,o.B)({id:"news-pt-tech",category:"news.pt.tech",labelKey:"notifications.source.newsPtTech",badgeColor:"#a371f7",cacheKey:"news-portugal",parse:i("tech")}),(0,o.B)({id:"news-pt-sports",category:"news.pt.sports",labelKey:"notifications.source.newsPtSports",badgeColor:"#3fb950",cacheKey:"news-portugal",parse:i("sports")}),(0,o.B)({id:"news-pt-business",category:"news.pt.business",labelKey:"notifications.source.newsPtBusiness",badgeColor:"#d29922",cacheKey:"news-portugal",parse:i("business")}),(0,o.B)({id:"news-pt-general",category:"news.pt.general",labelKey:"notifications.source.newsPtGeneral",badgeColor:"#2da44e",cacheKey:"news-portugal",parse:i("general")})],persistedKeys:["widget-cache:news-portugal"]}},72026(e,t,a){a.d(t,{A:()=>r});let r={id:"news-world",load:()=>Promise.all([a.e("44"),a.e("566")]).then(a.bind(a,94925)).then(e=>({default:e.NewsWorldWidget})),labels:{en:"World News",pt:"Not\xedcias Mundo"},descriptions:{en:"Latest news from CNN",pt:"\xdaltimas not\xedcias da CNN"},icon:"\uD83C\uDF0D",accentColor:"#cc0000",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"cnn-rss",kind:"cache-key",cacheKey:"news-world",labelKey:"sources.cnn",notifiable:!0}],notifications:[(0,a(83090).B)({id:"news-world",category:"news.world",labelKey:"notifications.source.newsWorld",badgeColor:"#cc0000",cacheKey:"news-world",parse:function(e){if(!e?.items)return[];let t=[];return e.items.forEach((e,a)=>{let r=Date.parse(e.pubDate);Number.isNaN(r)||t.push({id:`${r}-${a}`,ts:r,title:e.title,link:e.link})}),t}})],persistedKeys:["widget-cache:news-world"]}},25471(e,t,a){a.d(t,{A:()=>o});var r=a(83090);let o={id:"seismic",load:()=>Promise.all([a.e("44"),a.e("773")]).then(a.bind(a,38108)).then(e=>({default:e.SeismicWidget})),labels:{en:"PT Seismic",pt:"Sismicidade PT"},descriptions:{en:"Recent seismic activity in Portugal",pt:"Atividade s\xedsmica recente em Portugal"},icon:"\uD83C\uDF0B",accentColor:"#f97316",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"ipma",kind:"dal-client",cacheKey:"seismic-pt",labelKey:"sources.ipma",notifiable:!0},{id:"usgs",kind:"dal-client",cacheKey:"seismic-world",labelKey:"sources.usgs",notifiable:!0}],notifications:[(0,r.B)({id:"seismic-pt",category:"seismic.pt",labelKey:"notifications.source.seismicPt",badgeColor:"#f97316",cacheKey:"seismic-pt",parse:function(e){if(!Array.isArray(e))return[];let t=[];return e.forEach((e,a)=>{let r=Date.parse(e.time);if(Number.isNaN(r))return;let o=e.local||e.obsRegion||"?";t.push({id:`pt-${r}-${a}`,ts:r,title:`M ${e.mag.toFixed(1)} — ${o}`})}),t}}),(0,r.B)({id:"seismic-world",category:"seismic.world",labelKey:"notifications.source.seismicWorld",badgeColor:"#ea580c",cacheKey:"seismic-world",parse:function(e){return e?.features?e.features.map(e=>({id:e.id,ts:e.properties.time,title:`M ${e.properties.mag.toFixed(1)} — ${e.properties.place}`,link:e.properties.url})):[]}})],persistedKeys:["widget-cache:seismic-pt","widget-cache:seismic-world"]}},55417(e,t,a){a.d(t,{A:()=>i});var r=a(36730),o=a(77752);let i={id:"techscope",load:()=>Promise.all([a.e("44"),a.e("923")]).then(a.bind(a,4942)).then(e=>({default:e.TechScopeLiveWidget})),labels:{en:"TechScope Live",pt:"TechScope Ao Vivo"},descriptions:{en:"Trending GitHub repos and Hacker News stories",pt:"Reposit\xf3rios GitHub e hist\xf3rias do Hacker News em alta"},icon:"⚡",accentColor:"#a371f7",defaultSize:"lg",defaultCols:2,maxCols:2,minHeight:240,suite:"learn",defaultOnDashboard:!0,sources:[{id:"github-trending",kind:"cache-key",cacheKey:"techscope-gh",labelKey:"sources.github",notifiable:!0},{id:"hn-algolia",kind:"cache-key",cacheKey:"techscope-hn",labelKey:"sources.hackerNews",notifiable:!0}],notifications:[{id:"github-trending",category:"github.trending",labelKey:"notifications.source.githubTrending",producer:{id:"github-trending",category:"github.trending",async poll(){if((0,o.isMutedNow)("github.trending"))return[];let e=await (0,r.fetchTrendingRepos)({days:7,perPage:5});if(!e?.items)return[];let t=[];for(let a of e.items){let e=a.created_at?Date.parse(a.created_at):NaN;if(!Number.isFinite(e))continue;let r=a.stargazers_count,o=a.language?` \xb7 ${a.language}`:"";t.push({id:`gh-trending:${a.id}`,category:"github.trending",ts:e,title:`${a.full_name} — ${r.toLocaleString()}★${o}`,link:a.html_url,meta:{stars:r,language:a.language,description:a.description}})}return t}},start(){},stop(){}},{id:"devto-weekly",category:"devto.weekly",labelKey:"notifications.source.devto",producer:{id:"devto-weekly",category:"devto.weekly",async poll(){if((0,o.isMutedNow)("devto.weekly"))return[];let e=await (0,r.fetchDevToArticles)({top:7,perPage:5});if(!e)return[];let t=[];for(let a of e){let e=Date.parse(a.published_at);if(!Number.isFinite(e))continue;let r=a.public_reactions_count??0,o=a.user?.name||a.user?.username,i=o?` — ${o}`:"";t.push({id:`devto:${a.id}`,category:"devto.weekly",ts:e,title:`${a.title}${i}`,link:a.url,meta:{reactions:r,comments:a.comments_count??0,readingTime:a.reading_time_minutes??null,tags:a.tag_list??[]}})}return t}},start(){},stop(){}}],persistedKeys:["widget-cache:techscope-gh","widget-cache:techscope-hn"]}},54200(e,t,a){a.d(t,{A:()=>r});let r={id:"trending-searches",load:()=>Promise.all([a.e("44"),a.e("346")]).then(a.bind(a,32065)).then(e=>({default:e.TrendingSearchesWidget})),labels:{en:"Trending Searches",pt:"Pesquisas em Alta"},descriptions:{en:"Top Google trending searches right now",pt:"As pesquisas mais populares no Google agora"},icon:"\uD83D\uDD0D",accentColor:"#e233ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"google-trends-rss",kind:"cache-key",cacheKey:"internet-trends",labelKey:"sources.googleTrends",notifiable:!0}],notifications:[(0,a(83090).B)({id:"trending-daily",category:"trending.daily",labelKey:"notifications.source.trending",badgeColor:"#e233ff",cacheKey:"internet-trends",parse:function(e){let t=e?.items?.[0];return t?[{id:new Date().toISOString().slice(0,10),ts:Date.now(),title:t.title,link:t.link}]:[]},defaultEnabled:!1})],persistedKeys:["widget-cache:internet-trends"]}},52306(e,t,a){a.d(t,{A:()=>n});var r=a(83090);let o={yellow:"\uD83D\uDFE1",orange:"\uD83D\uDFE0",red:"\uD83D\uDD34"},i={yellow:"Yellow",orange:"Orange",red:"Red"},n={id:"weather",load:()=>Promise.all([a.e("44"),a.e("693")]).then(a.bind(a,15940)).then(e=>({default:e.WeatherWidget})),labels:{en:"Weather",pt:"Meteorologia"},descriptions:{en:"Current weather for Lisbon",pt:"Meteorologia atual em Lisboa"},icon:"\uD83C\uDF24️",accentColor:"#58a6ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:280,suite:"vida",defaultOnDashboard:!0,sources:[{id:"openMeteo",kind:"cache-key",cacheKey:"weather-lisbon",labelKey:"sources.openMeteo",notifiable:!0}],notifications:[(0,r.B)({id:"ipma-warnings",category:"weather.pt.warnings",labelKey:"notifications.source.weatherPt",badgeColor:"#facc15",cacheKey:"ipma-warnings",parse:function(e){if(!Array.isArray(e))return[];let t=Date.now(),a=[];return e.forEach((e,r)=>{if("green"===e.awarenessLevelID||"yellow"===e.awarenessLevelID)return;let n=Date.parse(e.endTime);if(Number.isNaN(n)||n<t)return;let s=Date.parse(e.startTime);if(Number.isNaN(s))return;let l=e.awarenessLevelID,d=o[l]??"⚠",c=i[l]??e.awarenessLevelID.toUpperCase(),p=e.idAreaAviso||"Portugal",m=e.awarenessTypeName?e.awarenessTypeName.toLowerCase():"weather";a.push({id:`ipma-warn:${p}-${s}-${r}`,ts:s,title:`${d} ${c} ${m} warning — ${p}`,link:"https://www.ipma.pt/en/otempo/prev-sam/"})}),a}})]}},89780(e,t,a){a.d(t,{A:()=>n});var r=a(83090);let o=new Set(["Main_Page","Special:Search","Wikipedia:Featured_pictures","-","Special:Watchlist","Portal:Current_events"]);function i(){return new Date(Date.now()-864e5).toISOString().slice(0,10)}let n={id:"wiki-most-read",load:()=>Promise.all([a.e("44"),a.e("545")]).then(a.bind(a,45464)).then(e=>({default:e.WikiMostReadWidget})),labels:{en:"Wikipedia Top",pt:"Mais Lido na Wikip\xe9dia"},descriptions:{en:"Most read articles on Wikipedia today",pt:"Artigos mais lidos na Wikip\xe9dia hoje"},icon:"\uD83D\uDCD6",accentColor:"#58a6ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"wikipedia-pageviews",kind:"cache-key",labelKey:"sources.wikipedia",notifiable:!0}],notifications:[(0,r.B)({id:"wiki-top-read",category:"wiki.topRead",labelKey:"notifications.source.wikiTopRead",badgeColor:"#58a6ff",cacheKey:()=>`internet-wiki-${i()}`,parse:function(e){let t=(e?.items?.[0]?.articles??[]).find(e=>!o.has(e.article));if(!t)return[];let a=i(),r=t.article.replace(/_/g," ");return[{id:a,ts:Date.now(),title:r,link:`https://en.wikipedia.org/wiki/${encodeURIComponent(t.article)}`}]},defaultEnabled:!1})]}}}]);