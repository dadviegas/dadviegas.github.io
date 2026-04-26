"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["683"],{3161(e,t,o){o.d(t,{Q:()=>O});var r=o(5723),a=o(7991),i=o(6859),n=o.n(i),s=o(2799),l=o(4764),d=o(1232);o(7517),o(2013),o(9603),o(2026),o(5471),o(5417),o(4200),o(2306),o(9780);var c=o(2188);o(5030),o(8170);let p=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`;n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
  gap: 8px;
  flex: 1;
  align-content: start;
  animation: ${p} 0.25s ease both;
`,n().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 4px;
  background: ${({accentColor:e})=>`${e}08`};
  border: 1px solid ${({accentColor:e})=>`${e}20`};
  border-radius: ${l.w4.borderRadius.md};
  cursor: pointer;
  transition: background ${l.w4.transitions.base}, border-color ${l.w4.transitions.base}, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    background: ${({accentColor:e})=>`${e}18`};
    border-color: ${({accentColor:e})=>`${e}40`};
    transform: scale(1.05);
  }
  &:active { transform: scale(0.95); }
`,n().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({tint:e})=>e};
`,n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamily};
  color: ${l.w4.colors.mainText};
  font-weight: 500;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,n().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.5;
  text-align: center;
  line-height: 1.5;
`;let g="#7fb77e",f="#58a6ff",h="#d29922",m="#7fb77e",x=["Mo","Tu","We","Th","Fr","Sa","Su"],u=["Se","Te","Qa","Qi","Sx","S\xe1","Do"],w=new Set([0,4,8,12,16,20]);function b(e){return[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)]}let y=b("#1d2230"),$=b(g);function v(e){let t=Math.round(y[0]+($[0]-y[0])*e),o=Math.round(y[1]+($[1]-y[1])*e),r=Math.round(y[2]+($[2]-y[2])*e);return`rgb(${t},${o},${r})`}let k=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,M=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${l.w4.spacing.lg};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,j=n().div`
  grid-column: 1 / -1;
`,z=n().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-left: 2px solid ${g};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
  animation: ${k} 0.25s ease both;
  transition: border-color 0.14s ease, transform 0.14s ease, box-shadow 0.14s ease;
  min-width: 0;

  &:hover {
    border-color: ${l.w4.colors.borderStrong??l.w4.colors.mainTextMuted};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  }
`,T=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,F=n().span`
  font-size: 22px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  line-height: 1;
`,S=n().span`
  font-size: 18px;
  font-weight: 700;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1;
`,C=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,H=n().div`
  display: flex;
  align-items: baseline;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,A=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${({positive:e})=>e?l.w4.colors.danger:g};
  background: ${({positive:e})=>e?`${l.w4.colors.danger}18`:`${g}18`};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 2px 6px;
`,R=n().div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`,D=n().div`
  display: grid;
  grid-template-columns: 28px repeat(24, minmax(10px, 1fr));
  gap: 2px;
  margin-bottom: 2px;
`,L=n().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1;
`,P=n().div`
  display: grid;
  grid-template-columns: 28px repeat(24, minmax(10px, 1fr));
  gap: 2px;
  margin-bottom: 2px;
`,W=n().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
`,N=n().div`
  aspect-ratio: 1 / 1;
  border-radius: 2px;
  background: ${({bg:e})=>e};
  min-height: 10px;
  transition: filter 120ms ease;
  &:hover { filter: brightness(1.4); }
`,I=n().div`
  display: flex;
  gap: ${l.w4.spacing.md};
  flex-wrap: wrap;
`,E=n().div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,B=n().div`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`;function O({data:e,t,locale:o}){let i=new Date().toISOString().slice(0,10),n=(0,a.useMemo)(()=>(function(e){let t={};for(let o of e){if(!o.endedAt)continue;let e=o.startedAt,r=o.endedAt,a=e;for(;a<r;){let e=new Date(a),o=new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0).getTime()+864e5,i=Math.min(r,o)-a,n=e.toISOString().slice(0,10);t[n]=(t[n]??0)+i/36e5,a=o}}let o=[];for(let e=89;e>=0;e--){let r=t[function(e){let t=new Date;return t.setDate(t.getDate()-e),t.toISOString().slice(0,10)}(e)]??0,a=0;r>=18?a=4:r>=14?a=3:r>=8?a=2:r>0&&(a=1),o.push(a)}return o})(e.sessions),[e.sessions]),s=(0,a.useMemo)(()=>(0,d.weightTrend)(e.weights,60),[e.weights]),l=(0,a.useMemo)(()=>[...e.weights].sort((e,t)=>t.date.localeCompare(e.date))[0]??null,[e.weights]),p=(0,a.useMemo)(()=>(0,d.proteinByDay)(e.meals,i),[e.meals,i]),b=(0,a.useMemo)(()=>e.goal.proteinG??110,[e.goal.proteinG]),y=(0,a.useMemo)(()=>(function(e){let t=[],o=new Date,r=new Date(o),a=(o.getDay()+6)%7;r.setDate(o.getDate()-a),r.setHours(0,0,0,0);for(let o=5;o>=0;o--){let a=new Date(r);a.setDate(r.getDate()-7*o);let i=new Date(a);i.setDate(a.getDate()+7);let n=a.toISOString().slice(0,10),s=i.toISOString().slice(0,10),l=e.filter(e=>e.date>=n&&e.date<s),d=l.filter(e=>"lunch"===e.slot).reduce((e,t)=>e+(t.proteinG??0),0),c=l.filter(e=>"snack"===e.slot).reduce((e,t)=>e+(t.proteinG??0),0),p=l.filter(e=>"dinner"===e.slot).reduce((e,t)=>e+(t.proteinG??0),0),g=`${String(a.getDate()).padStart(2,"0")}/${String(a.getMonth()+1).padStart(2,"0")}`;t.push({label:g,segments:[{id:"lunch",value:d,color:f},{id:"snack",value:c,color:h},{id:"dinner",value:p,color:m}]})}return t})(e.meals),[e.meals]),$=(0,a.useMemo)(()=>(0,d.dayHourFastMatrix)(e.sessions),[e.sessions]),k=(0,a.useMemo)(()=>{let e=0;for(let t of $)for(let o of t)o>e&&(e=o);return e},[$]),Y="pt"===o?u:x,K=e.weights.length>=2,V=e.meals.length>0,G=e.sessions.some(e=>void 0!==e.endedAt);return(0,r.jsxs)(M,{children:[(0,r.jsx)(j,{children:(0,r.jsxs)(z,{children:[(0,r.jsxs)(T,{children:["◉ ",t("forma.analytics.heatmap.title")]}),G?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.RT,{data:n,cellSize:11,gap:2,locale:o}),(0,r.jsxs)(I,{children:[(0,r.jsxs)(E,{children:[(0,r.jsx)(B,{color:v(0)}),(0,r.jsx)("span",{children:t("forma.analytics.heatmap.none")})]}),(0,r.jsxs)(E,{children:[(0,r.jsx)(B,{color:v(.25)}),(0,r.jsx)("span",{children:"<8h"})]}),(0,r.jsxs)(E,{children:[(0,r.jsx)(B,{color:v(.5)}),(0,r.jsx)("span",{children:"8–14h"})]}),(0,r.jsxs)(E,{children:[(0,r.jsx)(B,{color:v(.75)}),(0,r.jsx)("span",{children:"14–18h"})]}),(0,r.jsxs)(E,{children:[(0,r.jsx)(B,{color:v(1)}),(0,r.jsx)("span",{children:"≥18h"})]})]})]}):(0,r.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")})]})}),(0,r.jsxs)(z,{children:[(0,r.jsxs)(T,{children:["◉ ",t("forma.analytics.weight.title")]}),K?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(H,{children:[(0,r.jsx)(F,{children:l?l.kg.toFixed(1):"—"}),(0,r.jsx)(C,{children:"kg"}),0!==s.delta&&(0,r.jsxs)(A,{positive:s.delta>0,children:[s.delta>0?"+":"",s.delta.toFixed(1)," kg"]})]}),void 0!==e.goal.weightKg&&(0,r.jsxs)(H,{children:[(0,r.jsx)(S,{children:e.goal.weightKg.toFixed(1)}),(0,r.jsxs)(C,{children:["kg ",t("forma.weight.target")]})]}),(0,r.jsx)(C,{children:t("forma.analytics.weight.delta")}),(0,r.jsx)(c.OW,{points:s.ema.length>=2?s.ema:e.weights.map(e=>e.kg),accent:g,width:260,height:60})]}):(0,r.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")})]}),(0,r.jsxs)(z,{children:[(0,r.jsxs)(T,{children:["◉ ",t("forma.analytics.protein.title")]}),(0,r.jsxs)(H,{children:[(0,r.jsx)(F,{children:p.toFixed(0)}),(0,r.jsxs)(C,{children:["/ ",b,"g ",t("forma.analytics.protein.target")]})]}),V?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.kl,{spent:b-p,budget:b,height:60}),(0,r.jsx)(C,{children:p>=b?t("forma.analytics.protein.achieved"):`${(b-p).toFixed(0)}g ${t("forma.analytics.protein.remaining")}`})]}):(0,r.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")})]}),(0,r.jsx)(j,{children:(0,r.jsxs)(z,{children:[(0,r.jsxs)(T,{children:["◉ ",t("forma.analytics.weekly.title")]}),V?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.ik,{data:y,budget:7*b,height:160}),(0,r.jsxs)(I,{children:[(0,r.jsxs)(E,{children:[(0,r.jsx)(B,{color:f}),(0,r.jsx)("span",{children:t("forma.meal.lunch")})]}),(0,r.jsxs)(E,{children:[(0,r.jsx)(B,{color:h}),(0,r.jsx)("span",{children:t("forma.meal.snack")})]}),(0,r.jsxs)(E,{children:[(0,r.jsx)(B,{color:m}),(0,r.jsx)("span",{children:t("forma.meal.dinner")})]})]})]}):(0,r.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")})]})}),(0,r.jsx)(j,{children:(0,r.jsxs)(z,{children:[(0,r.jsxs)(T,{children:["◉ ",t("forma.analytics.fastTimes.title")]}),G?(0,r.jsxs)(R,{children:[(0,r.jsxs)(D,{children:[(0,r.jsx)("div",{}),Array.from({length:24},(e,t)=>(0,r.jsx)(L,{children:w.has(t)?String(t).padStart(2,"0"):""},t))]}),$.map((e,t)=>(0,r.jsxs)(P,{children:[(0,r.jsx)(W,{children:Y[t]}),e.map((e,o)=>(0,r.jsx)(N,{bg:0===k?v(0):v(e/k),title:e>0?`${Y[t]} ${String(o).padStart(2,"0")}:00 — ${e}\xd7`:void 0},o))]},t))]}):(0,r.jsx)(c.YG,{mode:"empty",label:t("forma.analytics.empty")})]})})]})}},7103(e,t,o){o.d(t,{j:()=>m});var r=o(5723),a=o(7991),i=o(6859),n=o.n(i),s=o(4764),l=o(5030),d=o(1232);let c=n().section`
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
`,g=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
`,f=n().div`
  font-size: 13px;
  line-height: 1.55;
  color: ${s.w4.colors.mainText};
  white-space: pre-wrap;
  min-height: 24px;
`,h=n().div`
  font-size: 12px;
  color: ${s.w4.colors.danger};
`;function m({data:e,t,locale:o}){let[i,n]=(0,a.useState)(null),[x,u]=(0,a.useState)(""),[w,b]=(0,a.useState)(!1),[y,$]=(0,a.useState)(null);(0,a.useEffect)(()=>{(0,d.resolveGroqKey)().then(e=>n(!!e))},[]);let v=(0,a.useCallback)(async()=>{b(!0),$(null),u("");try{let r,a,i,n,s,l,c,p,g,f,h=await (0,d.resolveGroqKey)();if(!h){$(t("forma.ask.noKey")),b(!1);return}let m=(r=new Date().toISOString().slice(0,10),a=(0,d.proteinByDay)(e.meals,r),i=e.meals.filter(e=>e.date===r).reduce((e,t)=>e+(t.kcal??0),0),n=e.walks.filter(e=>e.date===r).reduce((e,t)=>e+t.minutes,0),s=(function(){let e=[],t=new Date;for(let o=6;o>=0;o-=1){let r=new Date(t);r.setDate(t.getDate()-o),e.push(r.toISOString().slice(0,10))}return e})().map(t=>({date:t,protein:(0,d.proteinByDay)(e.meals,t),kcal:e.meals.filter(e=>e.date===t).reduce((e,t)=>e+(t.kcal??0),0),walk:e.walks.filter(e=>e.date===t).reduce((e,t)=>e+t.minutes,0)})),(l=new Date).setDate(l.getDate()-6),c=(0,d.weeklyAdherence)(e.sessions,l,e.goal.weeklyFasts),p=(0,d.streakDays)(e.sessions,e.goal.targetHours),g=(0,d.avgFastDuration)(e.sessions,30),f=e.meals.filter(e=>e.date>=s[0].date).slice(-15).map(e=>`${e.date} ${e.slot} \xb7 ${e.proteinG??0}g protein \xb7 ${e.kcal??0}kcal \xb7 ${e.notes||""}`).join("\n"),`You are a concise nutrition + habit coach. Reply in ${"pt"===o?"Portuguese (PT-PT)":"English"}, max 5 short bullet points.
Focus on FOOD and ACTIONS first, fasting is secondary context. Be specific and actionable.
Avoid disclaimers. No medical advice — just practical patterns from the data.

TODAY (${r}):
- protein: ${Math.round(a)}g
- kcal: ${Math.round(i)}
- walk: ${n} min

LAST 7 DAYS:
${s.map(e=>`- ${e.date}: ${Math.round(e.protein)}g \xb7 ${Math.round(e.kcal)}kcal \xb7 walk ${e.walk}min`).join("\n")}

CONTEXT:
- weekly fast adherence: ${Math.round(100*c)}% (target ${e.goal.weeklyFasts}/wk)
- current streak: ${p} days
- avg fast (last 30d): ${g.toFixed(1)}h

RECENT MEALS:
${f||"(none yet)"}

Give 3–5 bullets: what's going well, what to fix, one specific next-meal suggestion.`);await (0,d.askGroqStream)(m,{key:h,locale:o,maxTokens:400,onChunk:e=>u(e)})}catch(e){$(e instanceof Error?e.message:t("forma.ask.error"))}finally{b(!1)}},[e,o,t]);return null===i||!1===i?null:(0,r.jsxs)(c,{children:[(0,r.jsxs)(p,{children:[(0,r.jsxs)(g,{children:["✦ ",t("forma.ask.title")]}),(0,r.jsx)(l.$n,{variant:"accent",icon:(0,r.jsx)(l.In,{name:"message",size:14}),onClick:()=>void v(),disabled:w,children:w?t("forma.ask.loading"):t("forma.ask.button")})]}),y&&(0,r.jsx)(h,{children:y}),(x||w)&&(0,r.jsx)(f,{children:x||"…"}),!x&&!w&&!y&&(0,r.jsx)(f,{style:{color:s.w4.colors.mainTextMuted,fontStyle:"italic"},children:t("forma.ask.hint")})]})}},2552(e,t,o){o.d(t,{k:()=>j});var r=o(5723),a=o(7991),i=o(6859),n=o.n(i),s=o(4764),l=o(5030),d=o(1232);let c="#7fb77e",p=2*Math.PI*95,g=n().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${s.w4.spacing.md};
  padding: ${s.w4.spacing.lg} 0;
`,f=n().div`
  position: relative;
  width: ${200}px;
  height: ${200}px;
  flex-shrink: 0;
`,h=n().svg`
  transform: rotate(-90deg);
  overflow: visible;
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
`;function j({data:e,t,onStart:o,onStop:i,onEditStart:n}){let z,T,F,S,C,[H,A]=(0,a.useState)(Date.now),R=e.sessions.some(e=>void 0===e.endedAt);(0,a.useEffect)(()=>{if(!R)return;let e=setInterval(()=>A(Date.now()),1e3);return()=>clearInterval(e)},[R]);let D=(0,d.currentFast)(e,H),L=D?.percent??0,P=null!==D,W=D?D.hoursElapsed:0,N=D?D.remainingMs:0,I=D?D.session.targetHours:e.goal.targetHours;return(0,r.jsxs)(g,{children:[(0,r.jsxs)(f,{children:[(0,r.jsxs)(h,{width:200,height:200,viewBox:"0 0 200 200","aria-hidden":"true",children:[(0,r.jsx)("circle",{cx:100,cy:100,r:95,fill:"none",stroke:s.w4.colors.border,strokeWidth:10}),(0,r.jsx)("circle",{cx:100,cy:100,r:95,fill:"none",stroke:c,strokeWidth:10,strokeLinecap:"round",strokeDasharray:p,strokeDashoffset:p*(1-L),style:{transition:"stroke-dashoffset 0.6s ease"}})]}),(0,r.jsx)(m,{children:P?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(x,{children:[W.toFixed(1),"h"]}),(0,r.jsx)(u,{children:t("forma.timer.elapsed")})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(x,{children:[I,"h"]}),(0,r.jsx)(u,{children:t("forma.hero.notFasting")})]})})]}),P&&D&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(y,{children:[(0,r.jsx)(w,{children:D.session.protocol}),n&&(0,r.jsx)($,{type:"button",onClick:()=>n(D.session),title:t("forma.timer.editStart"),children:t("forma.timer.startedAt",{time:(T=String((z=new Date(D.session.startedAt)).getHours()).padStart(2,"0"),F=String(z.getMinutes()).padStart(2,"0"),`${T}:${F}`)})})]}),(0,r.jsxs)(b,{children:[(0,r.jsxs)(v,{children:[(0,r.jsx)(k,{children:(C=Math.floor((S=Math.floor(N/6e4))/60),`${String(C).padStart(2,"0")}:${String(S%60).padStart(2,"0")}`)}),(0,r.jsx)(M,{children:t("forma.timer.remaining")})]}),(0,r.jsxs)(v,{children:[(0,r.jsxs)(k,{children:[Math.round(100*L),"%"]}),(0,r.jsx)(M,{children:t("forma.timer.complete")})]})]})]}),P&&D?(0,r.jsx)(l.$n,{variant:"danger",onClick:()=>i(D.session),children:t("forma.stop")}):(0,r.jsx)(l.$n,{variant:"success",onClick:o,children:t("forma.start")})]})}},4406(e,t,o){o.d(t,{C:()=>u});var r=o(5723),a=o(7991),i=o(6859),n=o.n(i),s=o(4764),l=o(5030);let d="#7fb77e",c="forma:layout",p=n().div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${s.w4.spacing.md};

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,g=n().div`
  position: relative;
  grid-column: span ${({size:e})=>"sm"===e?4:"md"===e?6:12};

  @media (max-width: ${s.w4.breakpoints.md}) {
    grid-column: span 1;
  }

  &:hover .forma-grid-controls {
    opacity: 1;
    pointer-events: auto;
  }
`,f=n().div`
  position: absolute;
  top: 6px;
  right: 6px;
  display: flex;
  gap: 2px;
  background: ${s.w4.colors.mainBg}cc;
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 2px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 140ms ease;
  z-index: 5;
  backdrop-filter: blur(4px);

  /* Always visible on touch devices — no hover available */
  @media (hover: none) {
    opacity: 0.65;
    pointer-events: auto;
  }
`,h=n().button`
  background: transparent;
  border: none;
  padding: 4px;
  border-radius: ${s.w4.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${s.w4.colors.mainTextMuted};
  transition: color 140ms ease, background 140ms ease;

  &:hover {
    color: ${d};
    background: ${s.w4.colors.surface};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,m=n().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${s.w4.spacing.xs};
  padding: ${s.w4.spacing.sm} 0;
`,x=n().button`
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
`;function u({cards:e,t}){let[o,i]=(0,a.useState)(null);(0,a.useEffect)(()=>{let t=!1;return(async()=>{let o=await (0,s.PL)(c),r=null;if(o)try{r=JSON.parse(o)}catch{r=null}t||i(function(e,t){let o=new Set(t.map(e=>e.id)),r=new Set,a=[];if(e)for(let t of e)o.has(t.id)&&(a.push(t),r.add(t.id));for(let e of t)r.has(e.id)||a.push({id:e.id,size:e.defaultSize??"sm",hidden:!1});return a}(r,e))})(),()=>{t=!0}},[e.map(e=>e.id).join("|")]);let n=(0,a.useCallback)(e=>{i(e),(0,s.Is)(c,JSON.stringify(e))},[]),d=(0,a.useCallback)((e,t)=>{if(!o)return;let r=o.filter(e=>!e.hidden),a=r.findIndex(t=>t.id===e);if(-1===a)return;let i=a+t;if(i<0||i>=r.length)return;let s=r[i],l=o.findIndex(t=>t.id===e),d=o.findIndex(e=>e.id===s.id),c=[...o];[c[l],c[d]]=[c[d],c[l]],n(c)},[o,n]),w=(0,a.useCallback)(e=>{o&&n(o.map(t=>{var o;return t.id===e?{...t,size:"sm"===(o=t.size)?"md":"md"===o?"lg":"sm"}:t}))},[o,n]),b=(0,a.useCallback)(e=>{o&&n(o.map(t=>t.id===e?{...t,hidden:!0}:t))},[o,n]),y=(0,a.useCallback)(e=>{o&&n(o.map(t=>t.id===e?{...t,hidden:!1}:t))},[o,n]),$=(0,a.useMemo)(()=>{let t=new Map;for(let o of e)t.set(o.id,o);return t},[e]);if(!o)return(0,r.jsx)(p,{});let v=o.filter(e=>!e.hidden),k=o.filter(e=>e.hidden);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{children:v.map((e,o)=>{let a=$.get(e.id);return a?(0,r.jsxs)(g,{size:e.size,children:[a.render(),(0,r.jsxs)(f,{className:"forma-grid-controls",children:[(0,r.jsx)(h,{onClick:()=>d(e.id,-1),disabled:0===o,title:t("forma.grid.moveLeft"),"aria-label":t("forma.grid.moveLeft"),children:(0,r.jsx)(l.In,{name:"chevron-left",size:14})}),(0,r.jsx)(h,{onClick:()=>d(e.id,1),disabled:o===v.length-1,title:t("forma.grid.moveRight"),"aria-label":t("forma.grid.moveRight"),children:(0,r.jsx)(l.In,{name:"chevron-right",size:14})}),(0,r.jsx)(h,{onClick:()=>w(e.id),title:t("forma.grid.resize",{size:e.size.toUpperCase()}),"aria-label":t("forma.grid.resize",{size:e.size.toUpperCase()}),children:(0,r.jsx)(l.In,{name:"grid",size:14})}),(0,r.jsx)(h,{onClick:()=>b(e.id),title:t("forma.grid.hide"),"aria-label":t("forma.grid.hide"),children:(0,r.jsx)(l.In,{name:"close",size:14})})]})]},e.id):null})}),k.length>0&&(0,r.jsxs)(m,{children:[(0,r.jsx)("span",{style:{fontSize:11,fontFamily:s.w4.typography.fontFamilyMono,color:s.w4.colors.mainTextMuted,textTransform:"uppercase",letterSpacing:"0.16em",alignSelf:"center",marginRight:8},children:t("forma.grid.hiddenLabel")}),k.map(e=>(0,r.jsxs)(x,{onClick:()=>y(e.id),children:["+ ",t(`forma.grid.card.${e.id}`)]},e.id))]})]})}},9276(e,t,o){o.d(t,{Y:()=>C});var r=o(5723),a=o(7991),i=o(6859),n=o.n(i),s=o(4764),l=o(5030),d=o(2799);let c=(0,d.keyframes)`
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
`,p=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,g=n().div`
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
`,f=n().div`
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
`,h=n().div`
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
`;function u({open:e,onClose:t,children:o,maxWidth:i=480,ariaLabel:n}){let s=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(!e)return;let o=e=>{"Escape"===e.key&&t()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,t]),(0,a.useEffect)(()=>{if(!e||!s.current)return;let t=s.current.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t?.focus()},[e]);let l=(0,a.useRef)(null),d=(0,a.useCallback)(e=>{l.current={y:e.touches[0].clientY}},[]),c=(0,a.useCallback)(e=>{if(!l.current||!s.current)return;let o=e.changedTouches[0].clientY-l.current.y;l.current=null,o<=0||o/s.current.getBoundingClientRect().height>.3&&t()},[t]),p=(0,a.useRef)(null),w=(0,a.useCallback)(e=>{p.current={y:e.clientY}},[]),b=(0,a.useCallback)(e=>{if(!p.current||!s.current)return;let o=e.clientY-p.current.y;p.current=null,o<=0||o/s.current.getBoundingClientRect().height>.3&&t()},[t]);return e?(0,r.jsx)(g,{onClick:t,role:"dialog","aria-modal":"true","aria-label":n,children:(0,r.jsxs)(f,{ref:s,maxWidth:i,onClick:e=>e.stopPropagation(),children:[(0,r.jsx)(h,{onTouchStart:d,onTouchEnd:c,onPointerDown:w,onPointerUp:b,"aria-hidden":"true",children:(0,r.jsx)(m,{})}),(0,r.jsx)(x,{children:o})]})}):null}function w(){return new Date().toISOString().slice(0,10)}let b="#7fb77e",y=n().div`
  padding: ${s.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.md};
`,$=n().div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.sm};
`,v=n().div`
  border-top: 1px solid ${s.w4.colors.border};
  padding-top: ${s.w4.spacing.md};
`,k=n().div`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.sm};
`,M=n().label`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
  flex: 0 0 100px;
`,j=n().input`
  flex: 1;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 6px ${s.w4.spacing.sm};
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainText};
  outline: none;
  transition: border-color 0.14s ease;

  &:focus {
    border-color: ${b};
  }
`,z=n().select`
  flex: 1;
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  padding: 6px ${s.w4.spacing.sm};
  font-size: 13px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainText};
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: ${b};
  }
`,T=n()(z)``,F=n().button`
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

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    border-color: ${b};
  }
`,S=n().div`
  display: flex;
  gap: ${s.w4.spacing.sm};
  padding-top: ${s.w4.spacing.sm};
`;function C({open:e,onClose:t,data:o,t:i,initialMode:n,editing:s,onStartFast:d,onStopFast:c,onLogMeal:p,onEditMeal:g,onLogWeight:f,onEditWeight:h,onLogWalk:m,onEditWalk:x}){let[b,H]=(0,a.useState)(n??null),[A,R]=(0,a.useState)("16:8"),[D,L]=(0,a.useState)("16"),[P,W]=(0,a.useState)("dinner"),[N,I]=(0,a.useState)(""),[E,B]=(0,a.useState)(""),[O,Y]=(0,a.useState)(""),[K,V]=(0,a.useState)(w),[G,_]=(0,a.useState)(""),[q,J]=(0,a.useState)(w),[Q,Z]=(0,a.useState)(""),[X,U]=(0,a.useState)(w);(0,a.useEffect)(()=>{if(e)if(s?.kind==="meal"){let e=s.entry;H("meal"),W(e.slot),I(String(e.proteinG??"")),B(String(e.kcal??"")),Y(e.notes??""),V(e.date)}else s?.kind==="weight"?(H("weight"),_(String(s.entry.kg)),J(s.entry.date)):s?.kind==="walk"?(H("walk"),Z(String(s.entry.minutes)),U(s.entry.date)):n&&(H(n),"meal"===n?(W("dinner"),I(""),B(""),Y(""),V(w())):"weight"===n?(_(""),J(w())):"walk"===n&&(Z(""),U(w())))},[e,s,n]);let ee=o.sessions.some(e=>void 0===e.endedAt),et=s?.kind??("startFast"===n?"fast":"meal"===n?"meal":"weight"===n?"weight":"walk"===n?"walk":null),eo=null===et||"fast"===et,er=null===et||"meal"===et,ea=null===et||"weight"===et,ei=null===et||"walk"===et,en=(0,a.useCallback)(()=>{H(null)},[]),es=(0,a.useCallback)(()=>{en(),t()},[en,t]),el=(0,a.useCallback)(()=>{let e=parseInt(D,10);isNaN(e)||e<1||(d(A,e),es())},[A,D,d,es]),ed=(0,a.useCallback)(()=>{let e=parseFloat(N)||0,t=parseFloat(E)||0;s?.kind==="meal"&&g?g(s.entry.id,P,e,t,O.trim(),K):p(P,e,t,O.trim(),K),es()},[s,g,P,N,E,O,K,p,es]),ec=(0,a.useCallback)(()=>{let e=parseFloat(G.replace(",","."));isNaN(e)||e<=0||(s?.kind==="weight"&&h?h(q,e):f(e,q),es())},[s,h,G,q,f,es]),ep=(0,a.useCallback)(()=>{let e=parseInt(Q,10);isNaN(e)||e<=0||(s?.kind==="walk"&&x?x(s.entry.id,e,X):m(e,X),es())},[s,x,Q,X,m,es]);return(0,r.jsx)(u,{open:e,onClose:es,maxWidth:520,ariaLabel:i("forma.sheet.ariaLabel"),children:(0,r.jsxs)(y,{children:[(0,r.jsx)(l.YZ,{children:i(s?.kind==="meal"?"forma.sheet.titleEditMeal":s?.kind==="weight"?"forma.sheet.titleEditWeight":s?.kind==="walk"?"forma.sheet.titleEditWalk":"meal"===n?"forma.sheet.titleAddMeal":"weight"===n?"forma.sheet.titleAddWeight":"walk"===n?"forma.sheet.titleAddWalk":"forma.sheet.title")}),eo&&(0,r.jsx)(v,{children:(0,r.jsx)(l.YZ,{children:i("forma.sheet.fastSection")})}),eo&&(ee?(0,r.jsx)(l.$n,{variant:"danger",onClick:()=>{c(),es()},children:i("forma.stop")}):"startFast"===b?(0,r.jsxs)($,{children:[(0,r.jsxs)(k,{children:[(0,r.jsx)(M,{htmlFor:"fast-protocol",children:i("forma.rail.title")}),(0,r.jsxs)(z,{id:"fast-protocol",value:A,onChange:e=>{let t=e.target.value;R(t),"custom"!==t&&L(t.split(":")[0])},children:[(0,r.jsx)("option",{value:"16:8",children:"16:8"}),(0,r.jsx)("option",{value:"18:6",children:"18:6"}),(0,r.jsx)("option",{value:"20:4",children:"20:4"}),(0,r.jsx)("option",{value:"custom",children:i("forma.protocol.custom")})]})]}),"custom"===A&&(0,r.jsxs)(k,{children:[(0,r.jsx)(M,{htmlFor:"fast-hours",children:i("forma.timer.target")}),(0,r.jsx)(j,{id:"fast-hours",type:"number",value:D,min:1,max:72,onChange:e=>L(e.target.value)})]}),(0,r.jsxs)(S,{children:[(0,r.jsx)(l.$n,{variant:"success",onClick:el,children:i("forma.start")}),(0,r.jsx)(l.$n,{variant:"ghost",onClick:en,children:i("forma.sheet.cancel")})]})]}):(0,r.jsxs)(F,{onClick:()=>H("startFast"),children:[(0,r.jsx)(l.In,{name:"play",size:16}),i("forma.start")]})),er&&(0,r.jsx)(v,{children:(0,r.jsx)(l.YZ,{children:i("forma.sheet.mealSection")})}),er&&("meal"===b?(0,r.jsxs)($,{children:[(0,r.jsxs)(k,{children:[(0,r.jsx)(M,{htmlFor:"meal-slot",children:i("forma.meal.lunch")}),(0,r.jsxs)(T,{id:"meal-slot",value:P,onChange:e=>W(e.target.value),children:[(0,r.jsx)("option",{value:"lunch",children:i("forma.meal.lunch")}),(0,r.jsx)("option",{value:"dinner",children:i("forma.meal.dinner")}),(0,r.jsx)("option",{value:"snack",children:i("forma.meal.snack")})]})]}),(0,r.jsxs)(k,{children:[(0,r.jsx)(M,{htmlFor:"meal-protein",children:i("forma.sheet.proteinLabel")}),(0,r.jsx)(j,{id:"meal-protein",type:"number",value:N,min:0,placeholder:"0",onChange:e=>I(e.target.value)})]}),(0,r.jsxs)(k,{children:[(0,r.jsx)(M,{htmlFor:"meal-kcal",children:i("forma.sheet.kcalLabel")}),(0,r.jsx)(j,{id:"meal-kcal",type:"number",value:E,min:0,placeholder:"0",onChange:e=>B(e.target.value)})]}),(0,r.jsxs)(k,{children:[(0,r.jsx)(M,{htmlFor:"meal-notes",children:i("forma.meal.template")}),(0,r.jsx)(j,{id:"meal-notes",type:"text",value:O,placeholder:"ovos, frango…",onChange:e=>Y(e.target.value)})]}),(0,r.jsxs)(k,{children:[(0,r.jsx)(M,{htmlFor:"meal-date",children:i("forma.sheet.dateLabel")}),(0,r.jsx)(j,{id:"meal-date",type:"date",value:K,max:w(),onChange:e=>V(e.target.value)})]}),(0,r.jsxs)(S,{children:[(0,r.jsx)(l.$n,{variant:"primary",onClick:ed,children:i(s?.kind==="meal"?"forma.sheet.saveEdit":"forma.sheet.save")}),(0,r.jsx)(l.$n,{variant:"ghost",onClick:en,children:i("forma.sheet.cancel")})]})]}):(0,r.jsxs)(F,{onClick:()=>H("meal"),children:[(0,r.jsx)(l.In,{name:"utensils",size:16}),i("forma.sheet.logMeal")]})),ea&&(0,r.jsx)(v,{children:(0,r.jsx)(l.YZ,{children:i("forma.sheet.weightSection")})}),ea&&("weight"===b?(0,r.jsxs)($,{children:[(0,r.jsxs)(k,{children:[(0,r.jsx)(M,{htmlFor:"weight-kg",children:i("forma.sheet.weightLabel")}),(0,r.jsx)(j,{id:"weight-kg",type:"number",value:G,min:20,max:300,step:.1,placeholder:"84.2",onChange:e=>_(e.target.value)})]}),(0,r.jsxs)(k,{children:[(0,r.jsx)(M,{htmlFor:"weight-date",children:i("forma.sheet.dateLabel")}),(0,r.jsx)(j,{id:"weight-date",type:"date",value:q,max:w(),onChange:e=>J(e.target.value)})]}),(0,r.jsxs)(S,{children:[(0,r.jsx)(l.$n,{variant:"primary",onClick:ec,children:i(s?.kind==="weight"?"forma.sheet.saveEdit":"forma.sheet.save")}),(0,r.jsx)(l.$n,{variant:"ghost",onClick:en,children:i("forma.sheet.cancel")})]})]}):(0,r.jsxs)(F,{onClick:()=>H("weight"),children:[(0,r.jsx)(l.In,{name:"trending-up",size:16}),i("forma.sheet.logWeight")]})),ei&&(0,r.jsx)(v,{children:(0,r.jsx)(l.YZ,{children:i("forma.sheet.walkSection")})}),ei&&("walk"===b?(0,r.jsxs)($,{children:[(0,r.jsxs)(k,{children:[(0,r.jsx)(M,{htmlFor:"walk-min",children:i("forma.sheet.walkLabel")}),(0,r.jsx)(j,{id:"walk-min",type:"number",value:Q,min:1,max:600,placeholder:"30",onChange:e=>Z(e.target.value)})]}),(0,r.jsxs)(k,{children:[(0,r.jsx)(M,{htmlFor:"walk-date",children:i("forma.sheet.dateLabel")}),(0,r.jsx)(j,{id:"walk-date",type:"date",value:X,max:w(),onChange:e=>U(e.target.value)})]}),(0,r.jsxs)(S,{children:[(0,r.jsx)(l.$n,{variant:"primary",onClick:ep,children:i(s?.kind==="walk"?"forma.sheet.saveEdit":"forma.sheet.save")}),(0,r.jsx)(l.$n,{variant:"ghost",onClick:en,children:i("forma.sheet.cancel")})]})]}):(0,r.jsxs)(F,{onClick:()=>H("walk"),children:[(0,r.jsx)(l.In,{name:"activity",size:16}),i("forma.sheet.logWalk")]}))]})})}},950(e,t,o){o.d(t,{M:()=>S});var r=o(5723),a=o(7991),i=o(6859),n=o.n(i),s=o(4764),l=o(1232);let d="#7fb77e";function c(e){return[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)]}let p=c("#1d2230"),g=c(d);function f(e){let t=Math.round(p[0]+(g[0]-p[0])*e),o=Math.round(p[1]+(g[1]-p[1])*e),r=Math.round(p[2]+(g[2]-p[2])*e);return`rgb(${t},${o},${r})`}let h=new Set([0,4,8,12,16,20]),m=["Mo","Tu","We","Th","Fr","Sa","Su"],x=["Se","Te","Qa","Qi","Sx","S\xe1","Do"],u=n().section`
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-left: 2px solid ${d};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.sm};
  height: 100%;
  min-width: 0;
`,w=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
`,b=n().div`
  display: grid;
  grid-template-columns: 28px repeat(24, 1fr);
  gap: 2px;
`,y=n().div`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextFaint??s.w4.colors.mainTextMuted};
  text-align: center;
  line-height: 1;
`,$=n().div``,v=n().div`
  display: grid;
  grid-template-columns: 28px repeat(24, 1fr);
  gap: 2px;
`,k=n().div`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextFaint??s.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
`,M=n().div`
  aspect-ratio: 1 / 1;
  border-radius: 2px;
  background: ${({bg:e})=>e};
  min-height: 8px;
  transition: filter 120ms ease;
  &:hover { filter: brightness(1.35); }
`,j=n().div`
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 2px;
  align-items: center;
`,z=n().div`
  display: flex;
  gap: 2px;
  height: 8px;
`,T=n().div`
  flex: 1;
  background: ${({pct:e})=>f(e)};
  border-radius: 1px;
`,F=n().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  margin-top: 2px;
`;function S({data:e,t,locale:o}){let i=(0,a.useMemo)(()=>(0,l.mealDayHourMatrix)(e.meals),[e.meals]),n=(0,a.useMemo)(()=>(0,l.mealKcalByHour)(e.meals),[e.meals]),s=(0,a.useMemo)(()=>{let e=0;for(let t of i)for(let o of t)o>e&&(e=o);return e},[i]),d=(0,a.useMemo)(()=>Math.max(0,...n),[n]),c=(0,a.useMemo)(()=>n.reduce((e,t)=>e+t,0),[n]),p="pt"===o?x:m;return(0,r.jsxs)(u,{children:[(0,r.jsx)(w,{children:t("forma.mealHeatmap.title")}),(0,r.jsxs)(b,{children:[(0,r.jsx)($,{}),Array.from({length:24},(e,t)=>(0,r.jsx)(y,{children:h.has(t)?String(t).padStart(2,"0"):""},t))]}),i.map((e,t)=>(0,r.jsxs)(v,{children:[(0,r.jsx)(k,{children:p[t]}),e.map((e,o)=>(0,r.jsx)(M,{bg:0===s?f(0):f(e/s),title:e>0?`${p[t]} ${String(o).padStart(2,"0")}:00 — ${Math.round(e)} kcal`:void 0},o))]},t)),(0,r.jsxs)(j,{children:[(0,r.jsx)($,{}),(0,r.jsx)(z,{children:n.map((e,t)=>(0,r.jsx)(T,{pct:0===d?0:e/d},t))})]}),(0,r.jsxs)(F,{children:[(0,r.jsx)("span",{children:"0"}),(0,r.jsxs)("span",{children:[Math.round(c).toLocaleString()," kcal"]})]})]})}},2128(e,t,o){o.d(t,{g:()=>w});var r=o(5723),a=o(7991),i=o(6859),n=o.n(i),s=o(4764),l=o(1232);let d="#7fb77e",c=n().button`
  display: flex;
  align-items: center;
  gap: ${s.w4.spacing.md};
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
  position: relative;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
`,g=n().div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainText};
`,f=n().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,h=n().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
`,m=n().span`
  font-size: 16px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${s.w4.colors.mainText};
`,x=n().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextFaint??s.w4.colors.mainTextMuted};
`,u=2*Math.PI*22;function w({data:e,t,onClick:o}){let[i,n]=(0,a.useState)(Date.now),b=e.sessions.some(e=>void 0===e.endedAt);(0,a.useEffect)(()=>{if(!b)return;let e=setInterval(()=>n(Date.now()),3e4);return()=>clearInterval(e)},[b]);let y=(0,l.currentFast)(e,i),$=y?.percent??0,v=y?Math.max(0,y.session.targetHours-y.hoursElapsed):0,k=y?`${v.toFixed(1)}h ${t("forma.timer.remaining")}`:t("forma.hero.notFasting");return(0,r.jsxs)(c,{onClick:o,"aria-label":t("forma.miniFast.aria"),children:[(0,r.jsxs)(p,{children:[(0,r.jsxs)("svg",{width:48,height:48,viewBox:"0 0 48 48",style:{transform:"rotate(-90deg)"},children:[(0,r.jsx)("circle",{cx:24,cy:24,r:22,fill:"none",stroke:s.w4.colors.border,strokeWidth:4}),y&&(0,r.jsx)("circle",{cx:24,cy:24,r:22,fill:"none",stroke:d,strokeWidth:4,strokeLinecap:"round",strokeDasharray:u,strokeDashoffset:u*(1-$),style:{transition:"stroke-dashoffset 0.6s ease"}})]}),(0,r.jsx)(g,{children:y?`${Math.round(100*$)}%`:"—"})]}),(0,r.jsxs)(f,{children:[(0,r.jsxs)(h,{children:["◉ ",t("forma.miniFast.title")]}),(0,r.jsx)(m,{children:y?`${y.hoursElapsed.toFixed(1)}h / ${y.session.targetHours}h`:t("forma.miniFast.noActive")}),(0,r.jsx)(x,{children:k})]})]})}},9446(e,t,o){o.d(t,{S:()=>w});var r=o(5723),a=o(7991),i=o(6859),n=o.n(i),s=o(4764),l=o(1232),d=o(1533);let c="#7fb77e",p=n().button`
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
`,g=n().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,f=n().span`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
`,h=n().div`
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
`;function w({data:e,t,onClick:o}){let i=(0,a.useMemo)(()=>(0,l.weightForecast)(e.weights,60,30),[e.weights]),n=i.history.length>0?i.history[i.history.length-1]:null,c=i.forecast.length>0?i.forecast[i.forecast.length-1]:null,b=n&&c?c.kg-n.kg:0;return(0,r.jsxs)(p,{onClick:o,"aria-label":t("forma.miniWeight.aria"),children:[(0,r.jsxs)(g,{children:[(0,r.jsxs)(f,{children:["◉ ",t("forma.miniWeight.title")]}),c&&(0,r.jsxs)(x,{pos:b>0,children:[b>=0?"+":"",b.toFixed(1),"kg / 30d"]})]}),(0,r.jsxs)(h,{children:[(0,r.jsx)(m,{children:n?n.kg.toFixed(1):"—"}),(0,r.jsx)("span",{style:{color:s.w4.colors.mainTextMuted,fontSize:13,fontFamily:s.w4.typography.fontFamilyMono},children:"kg"}),c&&(0,r.jsxs)("span",{style:{color:s.w4.colors.mainTextMuted,fontSize:12,fontFamily:s.w4.typography.fontFamilyMono},children:["→ ",c.kg.toFixed(1)," kg"]})]}),(0,r.jsx)(u,{children:(0,r.jsx)(d.h,{forecast:i,axes:!1})})]})}},8477(e,t,o){o.d(t,{P:()=>p});var r=o(5723),a=o(6859),i=o.n(a),n=o(4764);let s="#7fb77e",l=["16:8","18:6","20:4","custom"],d=i().div`
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
`;function p({t:e,active:t,onChange:o}){return(0,r.jsx)(d,{role:"group","aria-label":e("forma.rail.title"),children:l.map(a=>(0,r.jsx)(c,{active:t===a,onClick:()=>o(a),"aria-pressed":t===a,children:e(`forma.protocol.${a}`)},a))})}},1589(e,t,o){o.d(t,{B:()=>h});var r=o(5723),a=o(6859),i=o.n(a),n=o(4764);let s="#7fb77e",l=[{id:"16:8",fastH:16,windowH:8},{id:"18:6",fastH:18,windowH:6},{id:"20:4",fastH:20,windowH:4},{id:"custom",fastH:0,windowH:0}],d=i().aside`
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
`,g=i().span`
  font-size: 13px;
  font-weight: 600;
  color: ${({active:e})=>e?s:n.w4.colors.mainText};
`,f=i().span`
  font-size: 11px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.mainTextMuted};
`;function h({t:e,active:t,onChange:o}){return(0,r.jsxs)(d,{"aria-label":e("forma.rail.title"),children:[(0,r.jsx)(c,{children:e("forma.rail.title")}),l.map(a=>(0,r.jsxs)(p,{active:t===a.id,onClick:()=>o(a.id),"aria-pressed":t===a.id,children:[(0,r.jsx)(g,{active:t===a.id,children:e(`forma.protocol.${a.id}`)}),a.fastH>0&&(0,r.jsxs)(f,{children:[e("forma.rail.hours",{n:a.fastH})," \xb7 ",e("forma.rail.window",{n:a.windowH})]})]},a.id))]})}},5405(e,t,o){o.d(t,{F:()=>p});var r=o(5723),a=o(7991),i=o(6859),n=o.n(i),s=o(4764);let l=n().form`
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
`;function p({t:e,onParsed:t}){let[o,i]=(0,a.useState)(""),[n,s]=(0,a.useState)(!1),g=(0,a.useCallback)(e=>{e.preventDefault();let r=function(e){let t=e.trim().toLowerCase();if(!t)return null;let o=t.match(/^(?:peso|weight)\s+(\d+(?:[.,]\d+)?)/);if(o){let e=parseFloat(o[1].replace(",","."));if(!isNaN(e))return{kind:"weight",weightKg:e}}let r=t.match(/^(?:caminhei|walked|walk|caminhada)\s+(\d+)/);if(r){let e=parseInt(r[1],10);if(!isNaN(e))return{kind:"walk",walkMinutes:e}}let a=t.match(/^(?:jejum|fast)\s+(\d+)/);if(a){let e=parseInt(a[1],10);if(!isNaN(e))return{kind:"fast",fastHours:e,fastProtocol:16===e?"16:8":18===e?"18:6":20===e?"20:4":"custom"}}let i=t.match(/^(jantar|almoço|almoco|dinner|snack|lanche|lunch)\s+(.*)/);if(i){let e=i[1];return{kind:"meal",mealSlot:"jantar"===e||"dinner"===e?"dinner":"almo\xe7o"===e||"almoco"===e||"lunch"===e?"lunch":"snack",mealDesc:i[2].trim()}}return null}(o);if(!r){s(!0),setTimeout(()=>s(!1),1200);return}t(r),i("")},[o,t]);return(0,r.jsxs)(l,{onSubmit:g,children:[(0,r.jsx)(d,{value:o,onChange:e=>i(e.target.value),placeholder:e("forma.quickadd.placeholder"),style:{borderColor:n?"#f85149":void 0},"aria-label":e("forma.quickadd.hint")}),(0,r.jsx)(c,{children:e("forma.quickadd.hint")})]})}},429(e,t,o){o.d(t,{f:()=>w});var r=o(5723),a=o(7991),i=o(6859),n=o.n(i),s=o(4764),l=o(5030);let d="#7fb77e",c=n().section`
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
`,g=n().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${s.w4.colors.mainTextMuted};
`,f=n().div`
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: ${s.w4.spacing.sm};
  align-items: center;
`,h=n().label`
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
`;function w({data:e,t,onSave:o}){let[i,n]=(0,a.useState)(String(e.goal.proteinG??110)),[s,d]=(0,a.useState)(String(e.goal.kcal??2200)),[b,y]=(0,a.useState)(String(e.goal.walkMin??30)),[$,v]=(0,a.useState)(String(e.goal.weightKg??"")),[k,M]=(0,a.useState)(String(e.goal.targetHours)),[j,z]=(0,a.useState)(String(e.goal.weeklyFasts)),[T,F]=(0,a.useState)(!1),S=async()=>{let t={...e,goal:{targetHours:Number(k)||16,weeklyFasts:Number(j)||5,proteinG:Number(i)||void 0,kcal:Number(s)||void 0,walkMin:Number(b)||void 0,weightKg:$?Number($):void 0}};await o(t),F(!0),setTimeout(()=>F(!1),2e3)};return(0,r.jsxs)(c,{children:[(0,r.jsxs)(p,{children:[(0,r.jsxs)(g,{children:["◉ ",t("forma.settings.foodGoals")]}),(0,r.jsxs)(f,{children:[(0,r.jsx)(h,{children:t("forma.settings.proteinG")}),(0,r.jsx)(m,{type:"number",value:i,onChange:e=>n(e.target.value)})]}),(0,r.jsxs)(f,{children:[(0,r.jsx)(h,{children:t("forma.settings.kcal")}),(0,r.jsx)(m,{type:"number",value:s,onChange:e=>d(e.target.value)})]}),(0,r.jsxs)(f,{children:[(0,r.jsx)(h,{children:t("forma.settings.walkMin")}),(0,r.jsx)(m,{type:"number",value:b,onChange:e=>y(e.target.value)})]}),(0,r.jsxs)(f,{children:[(0,r.jsx)(h,{children:t("forma.settings.weightTarget")}),(0,r.jsx)(m,{type:"number",step:"0.1",value:$,onChange:e=>v(e.target.value)})]})]}),(0,r.jsxs)(p,{children:[(0,r.jsxs)(g,{children:["◉ ",t("forma.settings.fastingGoals")]}),(0,r.jsxs)(f,{children:[(0,r.jsx)(h,{children:t("forma.settings.targetHours")}),(0,r.jsx)(m,{type:"number",value:k,onChange:e=>M(e.target.value)})]}),(0,r.jsxs)(f,{children:[(0,r.jsx)(h,{children:t("forma.settings.weeklyFasts")}),(0,r.jsx)(m,{type:"number",value:j,onChange:e=>z(e.target.value)})]})]}),(0,r.jsxs)(x,{children:[T&&(0,r.jsx)(u,{children:t("forma.settings.saved")}),(0,r.jsx)(l.$n,{variant:"primary",onClick:()=>void S(),children:t("forma.settings.save")})]})]})}},5742(e,t,o){o.d(t,{_:()=>F});var r=o(5723),a=o(6859),i=o.n(a),n=o(4764),s=o(5030),l=o(1232);let d="#7fb77e",c=i().section`
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
`,g=i().span`
  font-size: 11px;
  font-weight: 600;
  font-family: ${n.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${n.w4.colors.mainTextMuted};
`,f=i().div`
  display: flex;
  align-items: baseline;
  gap: ${n.w4.spacing.lg};
  flex-wrap: wrap;
`,h=i().div`
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
`;function F({data:e,t,onLogMeal:o,onLogWalk:a,onLogWeight:i,onDeleteMeal:d,onEditMeal:S}){var C,H;let A=new Date().toISOString().slice(0,10),R=(0,l.proteinByDay)(e.meals,A),D=(C=e.meals,C.filter(e=>e.date===A).reduce((e,t)=>e+(t.kcal??0),0)),L=(H=e.walks,H.filter(e=>e.date===A).reduce((e,t)=>e+t.minutes,0)),P=e.meals.filter(e=>e.date===A).sort((e,t)=>e.createdAt-t.createdAt),W=e.goal.proteinG??110;return(0,r.jsxs)(c,{children:[(0,r.jsxs)(p,{children:[(0,r.jsxs)(g,{children:["◉ ",t("forma.today.title")]}),(0,r.jsx)(g,{children:new Date().toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"short"})})]}),(0,r.jsxs)(f,{children:[(0,r.jsxs)(h,{children:[(0,r.jsxs)(m,{children:[Math.round(R),(0,r.jsxs)("span",{style:{fontSize:14,color:n.w4.colors.mainTextMuted,marginLeft:4},children:["/ ",W,"g"]})]}),(0,r.jsx)(x,{children:t("forma.today.protein")})]}),(0,r.jsxs)(h,{children:[(0,r.jsx)(m,{children:Math.round(D)}),(0,r.jsx)(x,{children:t("forma.today.kcal")})]}),(0,r.jsxs)(h,{children:[(0,r.jsxs)(m,{children:[L,(0,r.jsx)("span",{style:{fontSize:14,color:n.w4.colors.mainTextMuted,marginLeft:4},children:"min"})]}),(0,r.jsx)(x,{children:t("forma.today.walk")})]})]}),(0,r.jsx)(u,{children:(0,r.jsx)(w,{pct:R/W*100})}),(0,r.jsxs)(b,{children:[(0,r.jsx)(s.$n,{variant:"primary",icon:(0,r.jsx)(s.In,{name:"plus",size:14}),onClick:o,children:t("forma.action.logMeal")}),(0,r.jsx)(s.$n,{variant:"ghost",icon:(0,r.jsx)(s.In,{name:"plus",size:14}),onClick:a,children:t("forma.action.logWalk")}),(0,r.jsx)(s.$n,{variant:"ghost",icon:(0,r.jsx)(s.In,{name:"plus",size:14}),onClick:i,children:t("forma.action.logWeight")})]}),0===P.length?(0,r.jsx)(z,{children:t("forma.today.noMealsYet")}):(0,r.jsx)(y,{children:P.map(e=>(0,r.jsxs)($,{onClick:S?()=>S(e.id):void 0,style:{cursor:S?"pointer":"default"},title:S?t("forma.action.edit"):void 0,children:[(0,r.jsx)(v,{children:t(`forma.meal.${e.slot}`)}),(0,r.jsx)(k,{children:e.notes||"—"}),(0,r.jsxs)(M,{children:[e.proteinG??0,"g \xb7 ",e.kcal??0,"kcal"]}),(0,r.jsx)(j,{onClick:t=>{t.stopPropagation(),d(e.id)},"aria-label":t("forma.action.delete"),children:(0,r.jsx)(s.In,{name:"trash",size:14})})]},e.id))}),L>0&&(0,r.jsx)(T,{children:(0,r.jsx)("span",{children:t("forma.today.walkSummary",{min:L})})})]})}},483(e,t,o){o.d(t,{v:()=>v});var r=o(5723),a=o(6859),i=o.n(a),n=o(2799),s=o(4764),l=o(5030);let d="#7fb77e",c=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,p=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],g=["Dom","Seg","Ter","Qua","Qui","Sex","S\xe1b"];function f(e){return e.toISOString().slice(0,10)}let h=i().div`
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
`;function v({data:e,t,locale:o,onTapTemplate:a}){let i,n,s,d=(n=new Date(i=new Date),s=(i.getDay()+6)%7,n.setDate(i.getDate()-s),n.setHours(0,0,0,0),Array.from({length:7},(e,t)=>{let o=new Date(n);return o.setDate(n.getDate()+t),{date:f(o),weekday:o.getDay()}})),c=f(new Date),k="pt"===o?g:p,M=new Map;for(let t of e.templates)M.set(t.weekday,t);return(0,r.jsxs)(h,{children:[(0,r.jsx)(m,{children:t("forma.week.title")}),(0,r.jsx)(x,{children:d.map(({date:o,weekday:i})=>{let n=o===c,s=e.meals.some(e=>e.date===o),d=e.sessions.some(e=>void 0!==e.endedAt&&f(new Date(e.startedAt))===o),p=s||d,g=M.get(i),h=n&&void 0!==g&&void 0!==a&&!s;return(0,r.jsxs)(u,{isToday:n,isDone:p,tappable:h,onClick:()=>{h&&g&&a?.(g)},type:"button",title:h?t("forma.week.tapToLog"):void 0,"aria-label":h?t("forma.week.tapToLog"):void 0,children:[(0,r.jsx)(w,{isToday:n,children:k[i]}),p?(0,r.jsx)(y,{"aria-label":t("forma.week.done"),children:(0,r.jsx)(l.In,{name:"check-circle",size:14})}):g?(0,r.jsx)($,{title:t("forma.week.planned")}):null,g&&(0,r.jsx)(b,{children:t(g.nameKey)})]},o)})})]})}},1533(e,t,o){o.d(t,{h:()=>g});var r=o(5723),a=o(7991),i=o(6859),n=o.n(i),s=o(4764);let l="#7fb77e",d=n().div`
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
`;function g({forecast:e,axes:t=!0}){let o=(0,a.useMemo)(()=>[...e.history,...e.forecast],[e.history,e.forecast]);if(o.length<2)return(0,r.jsx)(d,{children:(0,r.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:s.w4.colors.mainTextMuted,fontSize:12,fontFamily:s.w4.typography.fontFamilyMono},children:"—"})});let i=t?36:8,n=t?18:4,f=o.map(e=>e.kg),h=Math.min(...f),m=Math.max(...f),x=m-h||1,u=new Date(o[0].date).getTime(),w=new Date(o[o.length-1].date).getTime()-u||1,b=e=>i+(new Date(e).getTime()-u)/w*(600-2*i),y=e=>200-n-(e-h)/x*(200-2*n),$=e.history.map((e,t)=>`${0===t?"M":"L"} ${b(e.date).toFixed(1)} ${y(e.kg).toFixed(1)}`).join(" "),v=e.forecast.length?`M ${b(e.history[e.history.length-1].date).toFixed(1)} ${y(e.history[e.history.length-1].kg).toFixed(1)} `+e.forecast.map(e=>`L ${b(e.date).toFixed(1)} ${y(e.kg).toFixed(1)}`).join(" "):"",k=e.history[e.history.length-1],M=e.forecast[e.forecast.length-1];return(0,r.jsx)(d,{children:(0,r.jsxs)(c,{viewBox:"0 0 600 200",preserveAspectRatio:"none",children:[t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{x:4,y:n+4,children:m.toFixed(1)}),(0,r.jsx)(p,{x:4,y:200-n+4,children:h.toFixed(1)}),(0,r.jsx)("line",{x1:i,y1:200-n,x2:600-i,y2:200-n,stroke:s.w4.colors.border,strokeWidth:1}),(0,r.jsx)("line",{x1:i,y1:n,x2:i,y2:200-n,stroke:s.w4.colors.border,strokeWidth:1})]}),(0,r.jsx)("path",{d:$,fill:"none",stroke:l,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),v&&(0,r.jsx)("path",{d:v,fill:"none",stroke:l,strokeWidth:2,strokeDasharray:"4 4",strokeLinecap:"round",opacity:.65}),M&&(0,r.jsx)("circle",{cx:b(M.date),cy:y(M.kg),r:3,fill:l,opacity:.7}),k&&(0,r.jsx)("circle",{cx:b(k.date),cy:y(k.kg),r:4,fill:l,stroke:s.w4.colors.surface,strokeWidth:1.5})]})})}},2152(e,t,o){o.d(t,{m:()=>M});var r=o(5723),a=o(7991),i=o(6859),n=o.n(i),s=o(4764),l=o(5030),d=o(1232),c=o(1533);let p="#7fb77e",g=n().section`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.lg};
`,f=n().div`
  background: ${s.w4.colors.surface};
  border: 1px solid ${s.w4.colors.border};
  border-left: 2px solid ${p};
  border-radius: ${s.w4.borderRadius.lg};
  padding: ${s.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.md};
`,h=n().div`
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
`;function M({data:e,t,onLogWeight:o,onDeleteWeight:i,onEditWeight:n}){let p=(0,a.useMemo)(()=>(0,d.weightForecast)(e.weights,90,30),[e.weights]),j=p.history.length?p.history[p.history.length-1]:null,z=e.goal.weightKg,T=7*p.slopePerDay,F=p.forecast.length?p.forecast[p.forecast.length-1]:null,S=[...e.weights].sort((e,t)=>t.date.localeCompare(e.date));return(0,r.jsxs)(g,{children:[(0,r.jsxs)(f,{children:[(0,r.jsxs)(h,{children:[(0,r.jsxs)(m,{children:["◉ ",t("forma.weight.title")]}),(0,r.jsx)(l.$n,{variant:"primary",icon:(0,r.jsx)(l.In,{name:"plus",size:14}),onClick:o,children:t("forma.action.logWeight")})]}),(0,r.jsxs)(x,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(u,{children:j?j.kg.toFixed(1):"—"}),(0,r.jsxs)(w,{children:[" kg ",t("forma.weight.now")]})]}),F&&(0,r.jsxs)("div",{children:[(0,r.jsx)(u,{style:{fontSize:18,color:s.w4.colors.mainTextMuted},children:F.kg.toFixed(1)}),(0,r.jsxs)(w,{children:[" kg ",t("forma.weight.in30")]})]}),void 0!==z&&(0,r.jsxs)("div",{children:[(0,r.jsx)(u,{style:{fontSize:18,color:s.w4.colors.accent},children:z.toFixed(1)}),(0,r.jsxs)(w,{children:[" kg ",t("forma.weight.target")]})]})]}),p.history.length>=2&&(0,r.jsxs)(y,{pos:T>0,children:[T>=0?"+":"",T.toFixed(2)," kg / ",t("forma.weight.perWeek")]}),(0,r.jsx)(b,{children:(0,r.jsx)(c.h,{forecast:p,axes:!0})})]}),(0,r.jsxs)(f,{children:[(0,r.jsxs)(m,{children:["◉ ",t("forma.weight.entries")]}),0===S.length?(0,r.jsx)(w,{style:{fontStyle:"italic"},children:t("forma.weight.empty")}):(0,r.jsx)($,{children:S.map(e=>(0,r.jsxs)(v,{onClick:n?()=>n(e.date):void 0,style:{cursor:n?"pointer":"default"},title:n?t("forma.action.edit"):void 0,children:[(0,r.jsx)("span",{children:e.date}),(0,r.jsxs)("span",{children:[e.kg.toFixed(1)," kg"]}),(0,r.jsx)(k,{onClick:t=>{t.stopPropagation(),i(e.date)},"aria-label":t("forma.action.delete"),children:(0,r.jsx)(l.In,{name:"trash",size:14})})]},e.date))})]})]})}},948(e,t,o){o.d(t,{A:()=>r});let r={"forma.appTitle":{en:"Forma",pt:"Forma"},"forma.timer.elapsed":{en:"elapsed",pt:"decorrido"},"forma.timer.remaining":{en:"remaining",pt:"restantes"},"forma.timer.target":{en:"target",pt:"objetivo"},"forma.timer.complete":{en:"complete",pt:"completo"},"forma.timer.startedAt":{en:"started {time}",pt:"iniciado {time}"},"forma.timer.editStart":{en:"Edit start time",pt:"Editar hora de in\xedcio"},"forma.timer.editStartPrompt":{en:"New start time (YYYY-MM-DDTHH:MM):",pt:"Nova hora de in\xedcio (AAAA-MM-DDTHH:MM):"},"forma.today.title":{en:"Today",pt:"Hoje"},"forma.today.protein":{en:"protein",pt:"prote\xedna"},"forma.today.kcal":{en:"kcal",pt:"kcal"},"forma.today.walk":{en:"walking",pt:"caminhada"},"forma.today.noMealsYet":{en:"No meals logged yet today.",pt:"Ainda n\xe3o registaste refei\xe7\xf5es hoje."},"forma.today.walkSummary":{en:"{min} min walked today",pt:"{min} min caminhados hoje"},"forma.action.logMeal":{en:"Log meal",pt:"Registar refei\xe7\xe3o"},"forma.action.logWalk":{en:"Log walk",pt:"Registar caminhada"},"forma.action.logWeight":{en:"Log weight",pt:"Registar peso"},"forma.action.delete":{en:"Delete",pt:"Apagar"},"forma.action.promptSlot":{en:"Slot (lunch / dinner / snack):",pt:"Slot (lunch / dinner / snack):"},"forma.action.promptMealDesc":{en:"What did you eat?",pt:"O que comeste?"},"forma.action.promptProtein":{en:"Protein (g):",pt:"Prote\xedna (g):"},"forma.action.promptKcal":{en:"Calories (kcal):",pt:"Calorias (kcal):"},"forma.action.promptWalk":{en:"Minutes walked:",pt:"Minutos caminhados:"},"forma.action.promptWeight":{en:"Weight (kg):",pt:"Peso (kg):"},"forma.action.edit":{en:"Edit",pt:"Editar"},"forma.ask.title":{en:"Ask Forma",pt:"Pergunta \xe0 Forma"},"forma.ask.button":{en:"Get feedback",pt:"Pedir feedback"},"forma.ask.loading":{en:"Thinking…",pt:"A pensar…"},"forma.ask.hint":{en:"Get AI feedback on your meals, protein and recent activity.",pt:"Recebe feedback de IA sobre as tuas refei\xe7\xf5es, prote\xedna e atividade recente."},"forma.ask.noKey":{en:"No Groq API key configured. Add one in Settings.",pt:"Sem chave Groq configurada. Adiciona uma nas Defini\xe7\xf5es."},"forma.ask.error":{en:"Could not reach Groq. Try again.",pt:"N\xe3o foi poss\xedvel contactar o Groq. Tenta de novo."},"forma.tabs.aria":{en:"Forma sections",pt:"Sec\xe7\xf5es Forma"},"forma.tab.today":{en:"Today",pt:"Hoje"},"forma.tab.fasting":{en:"Fasting",pt:"Jejum"},"forma.tab.weight":{en:"Weight",pt:"Peso"},"forma.tab.settings":{en:"Settings",pt:"Defini\xe7\xf5es"},"forma.miniFast.title":{en:"Fasting",pt:"Jejum"},"forma.miniFast.aria":{en:"Open fasting tab",pt:"Abrir separador jejum"},"forma.miniFast.noActive":{en:"Not fasting",pt:"Sem jejum"},"forma.miniWeight.title":{en:"Weight forecast",pt:"Previs\xe3o de peso"},"forma.miniWeight.aria":{en:"Open weight tab",pt:"Abrir separador peso"},"forma.weight.title":{en:"Weight",pt:"Peso"},"forma.weight.now":{en:"now",pt:"agora"},"forma.weight.in30":{en:"in 30d (projected)",pt:"em 30d (previsto)"},"forma.weight.target":{en:"target",pt:"objetivo"},"forma.weight.perWeek":{en:"week",pt:"semana"},"forma.weight.entries":{en:"Entries",pt:"Registos"},"forma.weight.empty":{en:"No weight entries yet.",pt:"Ainda sem registos de peso."},"forma.mealHeatmap.title":{en:"Meals by day & hour",pt:"Refei\xe7\xf5es por dia e hora"},"forma.settings.foodGoals":{en:"Food goals",pt:"Objetivos alimentares"},"forma.settings.fastingGoals":{en:"Fasting goals",pt:"Objetivos de jejum"},"forma.settings.proteinG":{en:"Daily protein (g)",pt:"Prote\xedna di\xe1ria (g)"},"forma.settings.kcal":{en:"Daily kcal",pt:"kcal di\xe1rias"},"forma.settings.walkMin":{en:"Daily walk (min)",pt:"Caminhada di\xe1ria (min)"},"forma.settings.weightTarget":{en:"Weight target (kg)",pt:"Peso-objetivo (kg)"},"forma.settings.targetHours":{en:"Default fast hours",pt:"Horas de jejum padr\xe3o"},"forma.settings.weeklyFasts":{en:"Fasts per week",pt:"Jejuns por semana"},"forma.settings.save":{en:"Save settings",pt:"Guardar"},"forma.settings.saved":{en:"Saved ✓",pt:"Guardado ✓"},"forma.grid.moveLeft":{en:"Move left",pt:"Mover para a esquerda"},"forma.grid.moveRight":{en:"Move right",pt:"Mover para a direita"},"forma.grid.resize":{en:"Resize ({size})",pt:"Redimensionar ({size})"},"forma.grid.hide":{en:"Hide card",pt:"Ocultar cart\xe3o"},"forma.grid.hiddenLabel":{en:"Hidden",pt:"Ocultos"},"forma.grid.card.mini-fast":{en:"Fasting",pt:"Jejum"},"forma.grid.card.mini-weight":{en:"Weight forecast",pt:"Previs\xe3o de peso"},"forma.grid.card.today":{en:"Today",pt:"Hoje"},"forma.grid.card.ask":{en:"Ask Forma",pt:"Pergunta \xe0 Forma"},"forma.grid.card.meal-heatmap":{en:"Meal heatmap",pt:"Mapa de refei\xe7\xf5es"},"forma.grid.card.week":{en:"Week plan",pt:"Plano semanal"},"forma.grid.card.stats":{en:"Stats",pt:"M\xe9tricas"},"forma.start":{en:"Start fast",pt:"Iniciar jejum"},"forma.stop":{en:"End fast",pt:"Terminar jejum"},"forma.log":{en:"Log",pt:"Registar"},"forma.protocol.16-8":{en:"16:8 — Leangains",pt:"16:8 — Leangains"},"forma.protocol.18-6":{en:"18:6 — Warrior Lite",pt:"18:6 — Guerreiro Leve"},"forma.protocol.20-4":{en:"20:4 — Warrior",pt:"20:4 — Guerreiro"},"forma.protocol.custom":{en:"Custom",pt:"Personalizado"},"forma.protocol.adherence":{en:"adherence",pt:"ader\xeancia"},"forma.streak":{en:"{n} day streak|day streak",pt:"{n} dia seguido|dias seguidos"},"forma.streak.none":{en:"No streak yet",pt:"Ainda sem sequ\xeancia"},"forma.adherence.weekly":{en:"This week",pt:"Esta semana"},"forma.adherence.fasts":{en:"{n} fast|fasts",pt:"{n} jejum|jejuns"},"forma.meal.lunch":{en:"Lunch",pt:"Almo\xe7o"},"forma.meal.dinner":{en:"Dinner",pt:"Jantar"},"forma.meal.snack":{en:"Snack",pt:"Lanche"},"forma.meal.protein":{en:"Protein",pt:"Prote\xedna"},"forma.meal.kcal":{en:"kcal",pt:"kcal"},"forma.meal.logged":{en:"Meal logged",pt:"Refei\xe7\xe3o registada"},"forma.meal.template":{en:"Template",pt:"Modelo"},"forma.weight.kg":{en:"kg",pt:"kg"},"forma.weight.logged":{en:"Weight logged",pt:"Peso registado"},"forma.weight.trend":{en:"7d trend",pt:"Tend\xeancia 7d"},"forma.weight.label":{en:"Weight",pt:"Peso"},"forma.walk.minutes":{en:"min",pt:"min"},"forma.walk.logged":{en:"Walk logged",pt:"Caminhada registada"},"forma.walk.label":{en:"Walk",pt:"Caminhada"},"forma.walk.consistency":{en:"consistency",pt:"consist\xeancia"},"forma.quickadd.placeholder":{en:'"dinner chicken", "walked 30", "weight 84.2", "fast 16"',pt:'"jantar frango", "caminhei 30", "peso 84.2", "jejum 16"'},"forma.quickadd.hint":{en:"Quick log",pt:"Registo r\xe1pido"},"forma.week.title":{en:"◉ WEEK",pt:"◉ SEMANA"},"forma.week.done":{en:"done",pt:"feito"},"forma.week.planned":{en:"planned",pt:"planeado"},"forma.week.noTemplate":{en:"Flexible",pt:"Livre"},"forma.week.tapToLog":{en:"Tap to log this meal",pt:"Toca para registar esta refei\xe7\xe3o"},"forma.sheet.title":{en:"◉ LOG",pt:"◉ REGISTAR"},"forma.sheet.ariaLabel":{en:"Log entry",pt:"Registar entrada"},"forma.sheet.fastSection":{en:"◉ FAST",pt:"◉ JEJUM"},"forma.sheet.mealSection":{en:"◉ MEAL",pt:"◉ REFEI\xc7\xc3O"},"forma.sheet.weightSection":{en:"◉ WEIGHT",pt:"◉ PESO"},"forma.sheet.walkSection":{en:"◉ WALK",pt:"◉ CAMINHADA"},"forma.sheet.logMeal":{en:"Log meal",pt:"Registar refei\xe7\xe3o"},"forma.sheet.logWeight":{en:"Log weight",pt:"Registar peso"},"forma.sheet.logWalk":{en:"Log walk",pt:"Registar caminhada"},"forma.sheet.minutesSuffix":{en:"min",pt:"min"},"forma.sheet.proteinLabel":{en:"Protein (g)",pt:"Prote\xedna (g)"},"forma.sheet.kcalLabel":{en:"kcal",pt:"kcal"},"forma.sheet.weightLabel":{en:"Weight (kg)",pt:"Peso (kg)"},"forma.sheet.walkLabel":{en:"Duration (min)",pt:"Dura\xe7\xe3o (min)"},"forma.sheet.save":{en:"Save",pt:"Guardar"},"forma.sheet.saveEdit":{en:"Save changes",pt:"Guardar altera\xe7\xf5es"},"forma.sheet.cancel":{en:"Cancel",pt:"Cancelar"},"forma.sheet.dateLabel":{en:"Date",pt:"Data"},"forma.sheet.titleAddMeal":{en:"◉ LOG MEAL",pt:"◉ NOVA REFEI\xc7\xc3O"},"forma.sheet.titleAddWeight":{en:"◉ LOG WEIGHT",pt:"◉ NOVO PESO"},"forma.sheet.titleAddWalk":{en:"◉ LOG WALK",pt:"◉ NOVA CAMINHADA"},"forma.sheet.titleEditMeal":{en:"◉ EDIT MEAL",pt:"◉ EDITAR REFEI\xc7\xc3O"},"forma.sheet.titleEditWeight":{en:"◉ EDIT WEIGHT",pt:"◉ EDITAR PESO"},"forma.sheet.titleEditWalk":{en:"◉ EDIT WALK",pt:"◉ EDITAR CAMINHADA"},"forma.rail.title":{en:"◉ PROTOCOL",pt:"◉ PROTOCOLO"},"forma.rail.hours":{en:"{n}h fast",pt:"Jejum de {n}h"},"forma.rail.window":{en:"{n}h window",pt:"Janela de {n}h"},"forma.hero.notFasting":{en:"Not fasting",pt:"Sem jejum activo"},"forma.hero.inProgress":{en:"In progress",pt:"Em progresso"},"forma.hero.completed":{en:"Completed",pt:"Conclu\xeddo"},"forma.hero.avgDuration":{en:"Avg duration",pt:"Dura\xe7\xe3o m\xe9dia"},"forma.empty.firstFast":{en:"Start your first fast",pt:"Inicia o teu primeiro jejum"},"forma.empty.noMeals":{en:"No meals logged today",pt:"Sem refei\xe7\xf5es hoje"},"forma.empty.noWeight":{en:"No weight logged",pt:"Sem peso registado"},"forma.error.load":{en:"Failed to load data",pt:"Erro ao carregar dados"},"forma.tab.analytics":{en:"Analytics",pt:"An\xe1lise"},"forma.analytics.empty":{en:"No data yet",pt:"Sem dados ainda"},"forma.analytics.heatmap.title":{en:"90-day fasting",pt:"Jejum 90 dias"},"forma.analytics.heatmap.none":{en:"none",pt:"nenhum"},"forma.analytics.weight.title":{en:"Weight trend",pt:"Tend\xeancia de peso"},"forma.analytics.weight.delta":{en:"60-day EMA trend",pt:"Tend\xeancia EMA 60 dias"},"forma.analytics.protein.title":{en:"Today's protein",pt:"Prote\xedna de hoje"},"forma.analytics.protein.target":{en:"target",pt:"objetivo"},"forma.analytics.protein.remaining":{en:"remaining",pt:"restantes"},"forma.analytics.protein.achieved":{en:"Target reached ✓",pt:"Objetivo atingido ✓"},"forma.analytics.weekly.title":{en:"Weekly protein (6w)",pt:"Prote\xedna semanal (6s)"},"forma.analytics.fastTimes.title":{en:"When I fast",pt:"Quando jejuo"},"forma.grid.card.analytics":{en:"Analytics",pt:"An\xe1lise"},"forma.template.monEggs":{en:"Eggs",pt:"Ovos"},"forma.template.tueBeef":{en:"Beef",pt:"Novilho"},"forma.template.wedEggsWhites":{en:"Eggs + Whites",pt:"Ovos + Claras"},"forma.template.thuChicken":{en:"Chicken",pt:"Frango"},"forma.template.friOmelette":{en:"Omelette",pt:"Omelete"},"forma.template.satMeatFish":{en:"Meat / Fish",pt:"Carne / Peixe"},"forma.template.sunFlexible":{en:"Flexible",pt:"Livre"}}},8170(e,t,o){o.d(t,{Ym:()=>c,Nx:()=>p});var r=o(7991),a=o(4764);let i={"time.justNow":{en:"just now",pt:"agora mesmo"},"time.mAgo":{en:"{n}m ago",pt:"h\xe1 {n}m"},"time.hAgo":{en:"{n}h ago",pt:"h\xe1 {n}h"},"time.dAgo":{en:"{n}d ago",pt:"h\xe1 {n}d"},updated:{en:"updated {age}",pt:"atualizado {age}"},refresh:{en:"Refresh",pt:"Atualizar"},loading:{en:"Loading…",pt:"A carregar…"},noData:{en:"No data available",pt:"Sem dados dispon\xedveis"},noDescription:{en:"No description provided.",pt:"Sem descri\xe7\xe3o."},failedToFetch:{en:"Failed to fetch",pt:"Erro ao carregar"},perWeek:{en:"/ wk",pt:"/ sem"},"devtools.heading":{en:"Dev Tools",pt:"Ferramentas"},"devtools.playground":{en:"Playground",pt:"Playground"},"devtools.pad":{en:"Pad",pt:"Pad"},"devtools.charts":{en:"Charts",pt:"Gr\xe1ficos"},"devtools.csv":{en:"CSV",pt:"CSV"},"devtools.regex":{en:"Regex",pt:"Regex"},"devtools.json":{en:"JSON",pt:"JSON"},"devtools.diff":{en:"Diff",pt:"Diferen\xe7as"},"devtools.jwt":{en:"JWT",pt:"JWT"},"devtools.cron":{en:"Cron",pt:"Cron"},"devtools.colors":{en:"Colors",pt:"Cores"},"devtools.api":{en:"API",pt:"API"}},n="atlantis:locale",s="shell:locale";function l(e){return"en"===e||"pt"===e}function d(){try{let e=localStorage.getItem(n);if(l(e))return e}catch{}return"en"}function c(){let[e,t]=(0,r.useState)(d),o=(0,r.useCallback)(e=>{t(e);try{localStorage.setItem(n,e)}catch{}(0,a.Is)(s,e).catch(()=>{}),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,r.useEffect)(()=>{let e=e=>{t(e.detail)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,r.useEffect)(()=>{(0,a.PL)(s).then(o=>{if(l(o)&&o!==e){try{localStorage.setItem(n,o)}catch{}t(o)}}).catch(()=>{})},[]),[e,o]}function p(e,t){let o=t?{...i,...t}:i;return(t,r)=>{let a=function(e,t){if(!t||!e.includes("|"))return e;let o=null;for(let e of Object.values(t))if("number"==typeof e&&Number.isFinite(e)){o=e;break}if(null===o)return e;let r=e.indexOf("|"),a=e.slice(0,r),i=e.slice(r+1);return 1===o?a:i}(o[t]?.[e]??t,r);return r?Object.entries(r).reduce((e,[t,o])=>e.replace(RegExp(`\\{${t}\\}`,"g"),String(o)),a):a}}(0,a.PL)(s).then(e=>{if(l(e))try{localStorage.setItem(n,e)}catch{}}).catch(()=>{}),o(5723);var g=o(6859),f=o.n(g);f().div`
  display: flex;
  gap: 4px;
  background: ${a.w4.colors.surface};
  border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.md};
  padding: 2px;
`,f().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${a.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${a.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?a.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":a.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":a.w4.colors.mainText};
  }
`},5030(e,t,o){o.d(t,{rl:()=>E,YZ:()=>R,$n:()=>w,Ex:()=>H,n6:()=>k,In:()=>M});var r=o(5723),a=o(7991),i=o.n(a),n=o(6859),s=o.n(n),l=o(4764);let d={ghost:"transparent",accent:"transparent",primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},c={ghost:l.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:l.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},p={ghost:l.w4.colors.border,accent:l.w4.colors.accent,primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},g={ghost:l.w4.colors.mainTextMuted,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},f={ghost:l.w4.colors.mainText,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},h={sm:"28px",md:"30px"},m={sm:"0 10px",md:"0 12px"},x={sm:"12px",md:"12px"},u=s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>h[e]};
  padding: ${({size:e})=>m[e]};
  background: ${({variant:e})=>d[e]};
  border: 1px solid ${({variant:e})=>p[e]};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({variant:e})=>g[e]};
  font-size: ${({size:e})=>x[e]};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>c[e]};
    color: ${({variant:e})=>f[e]};
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
`,w=i().forwardRef(function({variant:e="ghost",size:t="md",icon:o,iconRight:a,children:i,...n},s){return(0,r.jsxs)(u,{ref:s,variant:e,size:t,...n,children:[o,i,a]})}),b={default:l.w4.colors.accent,danger:"#f85149"},y={default:l.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"};s().button`
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
`,o(2727);var $=o(2799);let v={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',"cloud-rain":'<path d="M16 14a5 5 0 1 0-9.8 2H6M8 19v2M12 17v4M16 19v2"/>',snowflake:'<path d="M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1M2 12h20M8 6l4 4 4-4M8 18l4-4 4 4"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"alert-triangle":'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',"check-circle":'<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>',"x-circle":'<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',"rotate-ccw":'<path d="M2 12a10 10 0 1 0 5-8.7L2 7M2 2v5h5"/>',"rotate-cw":'<path d="M22 12a10 10 0 1 1-5-8.7L22 7M22 2v5h-5"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"alert-circle":'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',"alert-octagon":'<path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"/><path d="M12 8v4M12 16h.01"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',columns:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',"eye-off":'<path d="M17.9 17.9A10.8 10.8 0 0 1 12 20c-7 0-11-8-11-8a19.6 19.6 0 0 1 5.1-6M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a19.6 19.6 0 0 1-2.2 3.2M6.6 6.6l10.8 10.8M14.1 14.1a3 3 0 1 1-4.2-4.2"/>',"file-plus":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M12 12v6M9 15h6"/>',gauge:'<path d="M12 14a2 2 0 1 0-2-2M12 2a10 10 0 1 0 10 10M12 14 7.5 16.5"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',"git-fork":'<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/>',"grip-vertical":'<circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',"image-plus":'<path d="M21 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21M19 2v6M22 5h-6"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',loader:'<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',"panel-left":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',"panel-left-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M16 15l-3-3 3-3"/>',"panel-left-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M14 9l3 3-3 3"/>',"panel-right-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M8 9l3 3-3 3"/>',"panel-right-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M10 15l-3-3 3-3"/>',pencil:'<path d="m12 20 9-9-4-4-9 9v4zM15 5l4 4"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M4.9 19.1a10 10 0 0 1 0-14.1M7.8 16.2a6 6 0 0 1 0-8.5M19.1 4.9a10 10 0 0 1 0 14.1M16.2 7.8a6 6 0 0 1 0 8.5"/>',"scatter-chart":'<circle cx="7.5" cy="7.5" r="0.8" fill="currentColor"/><circle cx="18" cy="5" r="0.8" fill="currentColor"/><circle cx="11" cy="11" r="0.8" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.8" fill="currentColor"/><circle cx="17" cy="14" r="0.8" fill="currentColor"/><path d="M3 3v18h18"/>',shield:'<path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"/>',"shield-off":'<path d="M19.7 14a7.7 7.7 0 0 0 .3-2V4l-8-2-3.4.9M4.7 4.7 4 5v7c0 6 8 10 8 10a13 13 0 0 0 5.2-3.5M2 2l20 20"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',"trending-down":'<path d="M22 17l-9.5-9.5-5 5L2 7"/><path d="M16 17h6v-6"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',"user-cog":'<circle cx="10" cy="8" r="4"/><path d="M10.2 14H8a4 4 0 0 0-4 4v2"/><circle cx="18" cy="15" r="3"/><path d="M18 10v1M18 19v1M22 12l-.8.5M14.8 17.5 14 18M22 18l-.8-.5M14.8 12.5 14 12"/>',volume:'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',car:'<path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h12l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2M5 17l1 3h12l1-3M5 17h14"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>',"shopping-bag":'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>',wifi:'<path d="M5 12.6A10 10 0 0 1 19 12.6M1.5 8.9a15 15 0 0 1 21 0M8.5 16.5a5 5 0 0 1 7 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/>',wallet:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18M16 14h2"/>',receipt:'<path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21z"/><path d="M8 8h8M8 12h8M8 16h5"/>',"piggy-bank":'<path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/><path d="M19 9h2v4M14 7V5a2 2 0 0 0-4 0M16 11h.01M5 17v3M14 17v3"/>',banknote:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M5 9h.01M19 15h.01"/>',coins:'<circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/><path d="M9 6v6M7 9h4"/>',"line-chart":'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',"calendar-range":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 15h3M13 15h3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"refresh-ccw":'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',"refresh-cw":'<path d="M21 12a9 9 0 0 0-15-6.7L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15 6.7L21 16"/><path d="M21 21v-5h-5"/>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',split:'<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 3 12 12 3 3"/><path d="M12 12v9"/>',"more-horizontal":'<circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>',"a-large-small":'<path d="M18 14v7M22 14l-4-7-4 7M2 14h7M2 21V7l5-4 5 4v14"/>',apple:'<path d="M12 20.9A9 9 0 1 1 19 6.5a4.9 4.9 0 0 0 2 5.4 8.9 8.9 0 0 1-9 9z"/><path d="M12 6a2 2 0 0 0 2-2 2 2 0 0 0-2-2"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',"circle-dot":'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2 6.3-6.4 2 2-6.3z"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',"file-text":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5 2.2 5 2.2a5 5 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.5 9.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.4V22"/>',hand:'<path d="M18 11V5a2 2 0 1 0-4 0v3a2 2 0 1 0-4 0V5a2 2 0 1 0-4 0v8l-2-3a2 2 0 1 0-3 2l4 7a6 6 0 0 0 6 4h2a6 6 0 0 0 6-6v-3a2 2 0 1 0-4 0z"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/>',landmark:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 11h20z"/>',"layout-grid":'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',map:'<path d="M9 3 3 7v14l6-4 6 4 6-4V3l-6 4z"/><path d="M9 3v14M15 7v14"/>',"message-circle":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',"pen-tool":'<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="M18 13 16.5 5.5 2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2 9.6 9.6"/><circle cx="11" cy="11" r="2"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',puzzle:'<path d="M19.4 14.4a1 1 0 0 0 .6-.9V8a1 1 0 0 0-1-1h-5.5a1 1 0 0 1-.9-.6 2 2 0 1 0-2 2 2.5 2.5 0 0 1 0 3 2 2 0 1 0 2 2 1 1 0 0 1 .9-.6h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 .6-.9 2 2 0 1 0-1.2 0z"/>',ruler:'<path d="M5 3l16 16-3 3L2 6zM8 6l3 3M11 9l3 3M14 12l3 3"/>',slash:'<line x1="22" y1="2" x2="2" y2="22"/>',triangle:'<path d="M3 20h18L12 4z"/>',truck:'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',"volume-2":'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7"/>',watch:'<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5M8.2 5.5l.8-2.5h6l.8 2.5M15.8 18.5l-.8 2.5H9l-.8-2.5"/>',waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',bot:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M8 15h.01M16 15h.01M12 17h.01"/>',"bar-chart-2":'<path d="M3 3v18h18"/><path d="M5 18V10M10 18V4M15 18v-7"/>'};function k(e){return Object.prototype.hasOwnProperty.call(v,e)}function M({name:e,size:t=18,strokeWidth:o=1.5,...a}){let i=v[e];return(0,r.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!a["aria-label"]||void 0,...a,dangerouslySetInnerHTML:{__html:i}})}Object.keys(v),s().span`
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
`,s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: ${({fontSize:e})=>e}px;
  font-weight: 700;
  color: ${l.w4.colors.mainBg};
  line-height: 1;
  letter-spacing: 0;
`,s().img`
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
`;let j=(0,$.keyframes)`
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
  animation: ${j} 0.15s ease;
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
`,o(8170),s().div`
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
`;let z=(0,$.keyframes)`
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
  animation: ${z} 0.4s ease both;
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
`,s().button`
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
`,s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
`;let T={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:l.w4.colors.accentMuted},F={neutral:l.w4.colors.mainTextMuted,live:l.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:l.w4.colors.accent},S=s().span`
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
  background: ${({tone:e})=>T[e]};
  color: ${({tone:e})=>F[e]};
`,C=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`;function H({tone:e="neutral",dot:t,children:o,...a}){return(0,r.jsxs)(S,{tone:e,...a,children:[(t??"live"===e)&&(0,r.jsx)(C,{}),o]})}s().kbd`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 3px;
  color: ${l.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`;let A=s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;function R({children:e,...t}){return(0,r.jsx)(A,{...t,children:e})}s().label`
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
`;let D=s().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
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
`,L=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,P=s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,W=s().div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,N=s().div`
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
`,I=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.danger};
`;function E({title:e,accessory:t,accentColor:o,error:a,errorLabel:i,children:n}){return(0,r.jsxs)(D,{accentColor:o,"data-widget-shell":!0,children:[(0,r.jsxs)(L,{children:[(0,r.jsx)(R,{children:e}),t&&(0,r.jsx)(P,{children:t})]}),a?(0,r.jsxs)(N,{role:"alert",children:[(0,r.jsx)(I,{children:i??"Error"}),(0,r.jsx)("div",{children:a})]}):(0,r.jsx)(W,{children:n})]})}s().div`
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
`;let B=(0,$.keyframes)`
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
  animation: ${B} 0.18s ease both;

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
`;let O=(0,$.keyframes)`
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
  animation: ${O} 0.4s ease both;
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
`,o(5406),s().nav`padding: ${l.w4.spacing.sm} 0;`,s().div`
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
`;let Y="#7fb77e",K=(0,$.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;s().div`
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
  animation: ${K} 0.25s ease both;
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
    background: ${Y};
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
    color: ${Y};
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
`,s().div`
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
`,s().pre`
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
`,s().div`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  margin-bottom: ${l.w4.spacing.md};
  text-align: center;
`,s().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
`,s().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,s().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,s().pre`
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
`,s().div`
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
`;let V=(0,$.keyframes)`
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
`;let G=s().button`
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
    animation: ${V} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;s()(G)`
  border-bottom: 1px solid ${l.w4.colors.border}80;
`,s()(G)``,s().span`
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
`;var _=o(1426);s().div`
  margin: ${l.w4.spacing.lg} 0;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${l.w4.colors.codeBorder};
  overflow: hidden;
`,s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${l.w4.colors.codeBorder};
`,s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,s().button`
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
`,_.A,_.A['pre[class*="language-"]'],l.w4.colors.codeBg,_.A['code[class*="language-"]'],s().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${l.w4.borderRadius.md} ${l.w4.borderRadius.md} 0;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
`,s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: ${l.w4.spacing.sm};
`,s().div`
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`,s().nav`
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
`;let q=(0,$.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,J=(0,$.keyframes)`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;s().div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${q} 0.15s ease;
`,s().div`
  width: 90%;
  max-width: 580px;
  max-height: 70vh;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px ${l.w4.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${J} 0.2s ease;
`,s().div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid ${l.w4.colors.border};
`,s().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  &::placeholder { color: ${l.w4.colors.sidebarTextMuted}; }
`,s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${l.w4.colors.sidebarHover};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  transition: color 0.15s, background 0.15s;
  &:hover { color: ${l.w4.colors.mainText}; background: ${l.w4.colors.border}; }
`,s().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.sm} 0;
`,s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.sidebarTextMuted};
`,s().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,s().button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 10px 18px;
  background: ${({selected:e})=>e?l.w4.colors.accentMuted:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,s().div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${l.w4.borderRadius.md};
  background: ${({selected:e})=>e?`${l.w4.colors.accent}20`:l.w4.colors.sidebarHover};
  color: ${({selected:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  margin-top: 1px;
`,s().div`
  flex: 1;
  min-width: 0;
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 8px;
`,s().span`
  font-weight: 400;
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.sidebarTextMuted};
`,s().span`
  font-size: 11px;
  font-weight: 500;
  color: ${l.w4.colors.accent};
  background: ${l.w4.colors.accentMuted};
  padding: 1px 6px;
  border-radius: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin-top: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${l.w4.colors.accent}25;
    color: ${l.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,s().div`
  display: flex;
  align-items: center;
  color: ${({selected:e})=>e?l.w4.colors.accent:"transparent"};
  margin-top: 8px;
  transition: color 0.1s;
`,s().div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  border-top: 1px solid ${l.w4.colors.border};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
`,s().kbd`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background: ${l.w4.colors.sidebarHover};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 3px;
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.sidebarTextMuted};
`,s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 18px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  text-align: center;
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
`,s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${l.w4.colors.sidebarHover};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: ${l.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${l.w4.colors.accent}60;
    color: ${l.w4.colors.mainText};
    background: ${l.w4.colors.accentMuted};
  }

  kbd {
    font-size: 10px;
    padding: 1px 4px;
    background: ${l.w4.colors.surface};
    border: 1px solid ${l.w4.colors.border};
    border-radius: 3px;
    color: ${l.w4.colors.sidebarTextMuted};
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    padding: 5px 8px;
    span { display: none; }
    kbd { display: none; }
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
`,s().div`
  padding: ${({collapsed:e})=>e?"8px 4px":`8px ${l.w4.spacing.md}`};
  border-bottom: 1px solid ${l.w4.colors.border}60;
`,s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${({collapsed:e})=>e?"8px 0":"6px 10px"};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  background: ${({focused:e})=>e?`${l.w4.colors.accent}10`:l.w4.colors.sidebarHover};
  border: 1px solid ${({focused:e})=>e?`${l.w4.colors.accent}40`:"transparent"};
  border-radius: ${l.w4.borderRadius.md};
  transition: background 0.15s, border-color 0.2s;
  cursor: ${({collapsed:e})=>e?"pointer":"text"};
`,s().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${l.w4.colors.sidebarText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  min-width: 0;
  display: ${({collapsed:e})=>e?"none":"block"};
  &::placeholder { color: ${l.w4.colors.sidebarTextMuted}; }
`,s().button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  border-radius: ${l.w4.borderRadius.sm};
  transition: color 0.15s;
  &:hover { color: ${l.w4.colors.mainText}; }
`,s().div`
  max-height: 60vh;
  overflow-y: auto;
  padding: ${l.w4.spacing.sm} 0;
`,s().button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding: 8px ${l.w4.spacing.md};
  background: ${({active:e})=>e?l.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?l.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;
  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${l.w4.colors.sidebarText};
`,s().span`
  font-weight: 400;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: 11px;
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  color: ${l.w4.colors.sidebarTextMuted};
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${l.w4.colors.accent}30;
    color: ${l.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,s().div`
  padding: 12px ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`,s().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,s().span`
  font-size: 11px;
  color: ${l.w4.colors.accent};
  font-weight: 600;
  margin-left: auto;
`,s().div`
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
  & > :first-child { margin-top: 0; }

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
`,s().nav`
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
`;let Q=(0,$.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;s().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: auto;
  gap: ${l.w4.spacing.lg};

  @media (max-width: ${l.w4.breakpoints.lg}) {
    gap: ${l.w4.spacing.md};
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,s().div`
  grid-column: ${({fullWidth:e,colSpan:t})=>e?"1 / -1":`span ${t}`};
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${Q} 0.25s ease both;

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
  top: -20px;
  right: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0;
  transition: opacity ${l.w4.transitions.fast};
  z-index: 2;
`;let Z=s().button`
  width: 32px;
  height: 32px;
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
`;s()(Z)`
  &:hover {
    color: #f85149;
    border-color: rgba(248, 81, 73, 0.4);
  }
`;let X=(0,$.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;s().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${X} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`;let U=(0,$.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ee=(0,$.keyframes)`
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
  animation: ${U} 0.15s ease both;
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
  animation: ${ee} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
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
`;let et=(0,$.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,eo=(0,$.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,er=(0,$.keyframes)`
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
  animation: ${et} 0.4s ease 0.15s both;
`,s().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,s().div`
  position: absolute;
  inset: 0;
  animation: ${eo} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
  animation: ${er} 1.4s ease-in-out infinite;
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
`},2188(e,t,o){o.d(t,{OW:()=>f,ik:()=>m,kl:()=>$,RT:()=>b,YG:()=>p});var r=o(5723),a=o(6859),i=o.n(a),n=o(4764);let s=i().div`
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
`,c={loading:"◌ Loading",empty:"◎ Empty",error:"◎ Offline"};function p({mode:e,label:t,body:o}){return(0,r.jsxs)(s,{children:[(0,r.jsx)(l,{mode:e,children:t??c[e]}),o&&(0,r.jsx)(d,{children:o})]})}var g=o(7991);function f({points:e,accent:t=n.w4.colors.accent,width:o=60,height:a=28,strokeWidth:i=1.5}){let s=(0,g.useMemo)(()=>{if(e.length<2)return"";let t=Math.min(...e),r=Math.max(...e)-t||1,n=o-2*i,s=a-2*i;return e.map((o,a)=>{let l=i+a/(e.length-1)*n,d=i+s-(o-t)/r*s;return`${0===a?"M":"L"} ${l.toFixed(1)} ${d.toFixed(1)}`}).join(" ")},[e,o,a,i]),l=(0,g.useMemo)(()=>{if(e.length<1)return null;let t=e[e.length-1],r=Math.min(...e),n=o-2*i,s=a-2*i;return{x:i+n,y:i+s-(t-r)/(Math.max(...e)-r||1)*s}},[e,o,a,i]);return s?(0,r.jsxs)("svg",{width:o,height:a,viewBox:`0 0 ${o} ${a}`,"aria-hidden":"true",style:{display:"block",flexShrink:0},children:[(0,r.jsx)("path",{d:s,fill:"none",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",opacity:.7}),l&&(0,r.jsx)("circle",{cx:l.x,cy:l.y,r:i+1,fill:t})]}):null}i().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
  color: ${({sign:e})=>"pos"===e?n.w4.colors.success:"neg"===e?n.w4.colors.danger:n.w4.colors.mainTextMuted};
  white-space: nowrap;
`,i().div`
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
`,i().a`
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
`,i().div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
`,i().span`
  font-size: 13px;
  color: ${n.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
`,i().span`
  font-size: 11px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.mainTextMuted};
  opacity: 0.75;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,i().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  color: ${n.w4.colors.mainTextMuted};
  white-space: nowrap;
  flex-shrink: 0;
  text-align: right;
`,o(3090);let h="'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";function m({data:e,budget:t,height:o=200,animation:a="rise"}){let i=(0,g.useId)();if(!e.length)return null;let s=1.1*Math.max(...e.map(e=>e.segments.reduce((e,t)=>e+t.value,0)+(e.over??0)),t??0)||1,l=472,d=o-20-24,c=472/e.length*.58,p=l/e.length,f="rise"===a?{transformOrigin:"bottom",animation:`${i}_rise 0.45s ease-out both`}:{};return(0,r.jsxs)(r.Fragment,{children:["rise"===a&&(0,r.jsx)("style",{children:`
          @keyframes ${i}_rise {
            from { transform: scaleY(0); }
            to   { transform: scaleY(1); }
          }
        `}),(0,r.jsxs)("svg",{viewBox:`0 0 520 ${o}`,style:{width:"100%",height:o},preserveAspectRatio:"xMidYMid meet","aria-hidden":"true",children:[null!=t?(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:40,x2:40+l,y1:20+d-t/s*d,y2:20+d-t/s*d,stroke:n.w4.colors.border,strokeDasharray:"3 3",strokeWidth:"1"}),(0,r.jsxs)("text",{x:36,y:20+d-t/s*d+3,textAnchor:"end",fontFamily:h,fontSize:"9",fill:n.w4.colors.mainTextMuted,children:["€",t]})]}):null,e.map((e,t)=>{let a,i=40+t*p+(p-c)/2,l=20+d;return(0,r.jsxs)("g",{style:f,children:[e.segments.map(e=>{let t=e.value/s*d;return l-=t,(0,r.jsx)("rect",{x:i,y:l,width:c,height:t,fill:e.color,opacity:.85},e.id)}),null!=e.over&&e.over>0?(a=e.over/s*d,l-=a,(0,r.jsx)("rect",{x:i,y:l,width:c,height:a,fill:"#f85149",opacity:.7},"over")):null,(0,r.jsx)("text",{x:i+c/2,y:o-6,textAnchor:"middle",fontFamily:h,fontSize:"10",fill:n.w4.colors.mainTextMuted,children:e.label})]},e.label)})]})]})}let x=["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"],u=["S","T","Q","Q","S","S","D"],w=["S","M","T","W","T","F","S"];function b({data:e,cellSize:t=10,gap:o=2,locale:a="pt"}){let i=(0,g.useId)();if(!e.length)return null;let s=24+Math.ceil(e.length/7)*(t+o),l=14+7*(t+o);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes ${i}_fade { from { opacity: 0; } to { opacity: 1; } }
      `}),(0,r.jsxs)("svg",{viewBox:`0 0 ${s} ${l}`,preserveAspectRatio:"xMidYMid meet",style:{width:"100%",height:"auto",maxHeight:220,display:"block"},"aria-hidden":"true",children:[(0,r.jsx)("g",{fontFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSize:"8",fill:n.w4.colors.mainTextMuted,children:("pt"===a?u:w).map((e,a)=>(0,r.jsx)("text",{x:"0",y:10+a*(t+o),children:e},a))}),e.map((e,a)=>{let n=18+Math.floor(a/7)*(t+o),s=2+a%7*(t+o),l=x[Math.max(0,Math.min(4,e))]??x[0];return(0,r.jsx)("rect",{x:n,y:s,width:t,height:t,fill:l,rx:"1",style:{animation:`${i}_fade 0.3s ease-out ${8*a}ms both`}},a)})]})]})}function y(e){let t=0;for(let o=1;o<e.length;o++){let r=e[o][0]-e[o-1][0],a=e[o][1]-e[o-1][1];t+=Math.sqrt(r*r+a*a)}return t}function $({spent:e,budget:t,height:o=60}){let a=(0,g.useId)(),i=1.05*t||1,s=Array.from({length:8},(e,o)=>t-t/7*o),l=Math.min(e/(t||1),1),d=Array.from({length:8},(e,o)=>Math.max(0,t-o/7*t*l*1.1)),c=s.map((e,t)=>[320*t/7,o-e/i*(o-5)]),p=d.map((e,t)=>[320*t/7,o-e/i*(o-5)]),f=c.map(e=>e.join(",")).join(" "),h=p.map(e=>e.join(",")).join(" "),m=y(c).toFixed(1),x=y(p).toFixed(1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes ${a}_i { from { stroke-dashoffset: ${m}; } }
        @keyframes ${a}_a { from { stroke-dashoffset: ${x}; } }
      `}),(0,r.jsxs)("svg",{viewBox:`0 0 320 ${o}`,style:{width:"100%",height:o},preserveAspectRatio:"none","aria-hidden":"true",children:[(0,r.jsx)("line",{x1:"0",x2:320,y1:o-5,y2:o-5,stroke:n.w4.colors.border,strokeDasharray:"3 3",strokeWidth:"1"}),(0,r.jsx)("polyline",{points:f,stroke:n.w4.colors.mainTextMuted,strokeWidth:"1",strokeDasharray:`${m} ${m}`,strokeDashoffset:"0",fill:"none",style:{strokeDasharray:"2 3",animation:`${a}_i 0.45s ease-out both`}}),(0,r.jsx)("polyline",{points:h,stroke:"#7fb77e",strokeWidth:"1.5",strokeDasharray:`${x} ${x}`,strokeDashoffset:"0",fill:"none",strokeLinecap:"round",style:{animation:`${a}_a 0.45s ease-out 0.08s both`}})]})]})}i().div`
  position: relative;
  height: 6px;
  background: ${n.w4.colors.border};
  border-radius: 3px;
  overflow: hidden;
`,i().div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 3px;
  width: ${({pct:e})=>Math.min(100,e)}%;
  background: ${({color:e})=>e};
  transition: width 400ms ease;
`,i().div`
  position: absolute;
  top: 0;
  height: 100%;
  left: ${({left:e})=>e}%;
  width: ${({width:e})=>e}%;
  background: ${"#f85149"};
  opacity: 0.7;
  transition: width 400ms ease;
`,o(5030),i().button`
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
`,i().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  color: ${n.w4.colors.mainTextMuted};
`},3090(e,t,o){o.d(t,{B:()=>a});var r=o(1232);function a(e){let t=(0,r.cacheBackedProducer)({id:e.id,category:e.category,cacheKey:e.cacheKey,parse:e.parse});return{id:e.id,category:e.category,labelKey:e.labelKey,defaultEnabled:e.defaultEnabled,producer:t,start(){},stop(){}}}},7517(e,t,o){o.d(t,{A:()=>r});let r={id:"habits",load:()=>Promise.all([o.e("44"),o.e("45")]).then(o.bind(o,6780)).then(e=>({default:e.HabitsWidget})),labels:{en:"Habits Grid",pt:"Grelha de H\xe1bitos"},descriptions:{en:"Your last 7 days of missions",pt:"Os teus \xfaltimas 7 dias de miss\xf5es"},icon:"\uD83C\uDFAF",accentColor:"#fb923c",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:200,suite:"vida",defaultOnDashboard:!0,sources:[{id:"daily-progress",kind:"bll-hook",cacheKey:"daily:progress",labelKey:"sources.dailyProgress"}],notifications:[{id:"daily",category:"daily.overdue",labelKey:"notifications.source.daily",producer:(0,o(1232).dailyProducer)({category:"daily.overdue"}),start(){},stop(){}}],persistedKeys:["daily:progress"]}},2013(e,t,o){o.d(t,{A:()=>i});var r=o(7922),a=o(1232);let i={id:"hackernews-hot",load:()=>Promise.all([o.e("44"),o.e("390")]).then(o.bind(o,3565)).then(e=>({default:e.HackerNewsHotWidget})),labels:{en:"Hacker News Hot",pt:"Em Alta no HN"},descriptions:{en:"Top stories from Hacker News",pt:"Hist\xf3rias em destaque no Hacker News"},icon:"\uD83D\uDD25",accentColor:"#f97316",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"hn-firebase",kind:"dal-client",cacheKey:"internet-hn-ids",labelKey:"sources.hackerNews",notifiable:!0}],notifications:[{id:"hn-front-page",category:"hn.frontPage",labelKey:"notifications.source.hnFrontPage",producer:{id:"hn-front-page",category:"hn.frontPage",async poll(){if((0,a.isMutedNow)("hn.frontPage"))return[];let e=await (0,r.fetchHnFrontPage)(5);if(!e?.hits)return[];let t=[];for(let o of e.hits){let e=o.created_at_i??(o.created_at?Date.parse(o.created_at)/1e3:NaN);Number.isFinite(e)&&t.push({id:`hn-front:${o.objectID}`,category:"hn.frontPage",ts:1e3*e,title:o.title,link:o.url??`https://news.ycombinator.com/item?id=${o.objectID}`,meta:{points:o.points,comments:o.num_comments}})}return t}},start(){},stop(){}}],persistedKeys:["widget-cache:internet-hn-ids"]}},9603(e,t,o){o.d(t,{A:()=>n});var r=o(1232),a=o(3090);function i(e){return function(t){if(!t?.items)return[];let o=[];return t.items.forEach(t=>{let a=Date.parse(t.pubDate);if(Number.isNaN(a)||(0,r.classifyPtNewsItem)(t.title,t.description)!==e)return;let i=t.link||t.title;o.push({id:`news-pt-${e}:${i}`,ts:a,title:t.title,link:t.link})}),o}}let n={id:"news-pt",load:()=>Promise.all([o.e("44"),o.e("392")]).then(o.bind(o,1507)).then(e=>({default:e.NewsPortugalWidget})),labels:{en:"PT News",pt:"Not\xedcias PT"},descriptions:{en:"Latest news from RTP",pt:"\xdaltimas not\xedcias da RTP"},icon:"\uD83D\uDCF0",accentColor:"#2da44e",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"rtp-rss",kind:"cache-key",cacheKey:"news-portugal",labelKey:"sources.rtp",notifiable:!0}],notifications:[(0,a.B)({id:"news-pt-tech",category:"news.pt.tech",labelKey:"notifications.source.newsPtTech",badgeColor:"#a371f7",cacheKey:"news-portugal",parse:i("tech")}),(0,a.B)({id:"news-pt-sports",category:"news.pt.sports",labelKey:"notifications.source.newsPtSports",badgeColor:"#3fb950",cacheKey:"news-portugal",parse:i("sports")}),(0,a.B)({id:"news-pt-business",category:"news.pt.business",labelKey:"notifications.source.newsPtBusiness",badgeColor:"#d29922",cacheKey:"news-portugal",parse:i("business")}),(0,a.B)({id:"news-pt-general",category:"news.pt.general",labelKey:"notifications.source.newsPtGeneral",badgeColor:"#2da44e",cacheKey:"news-portugal",parse:i("general")})],persistedKeys:["widget-cache:news-portugal"]}},2026(e,t,o){o.d(t,{A:()=>r});let r={id:"news-world",load:()=>Promise.all([o.e("44"),o.e("566")]).then(o.bind(o,4925)).then(e=>({default:e.NewsWorldWidget})),labels:{en:"World News",pt:"Not\xedcias Mundo"},descriptions:{en:"Latest news from CNN",pt:"\xdaltimas not\xedcias da CNN"},icon:"\uD83C\uDF0D",accentColor:"#cc0000",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"cnn-rss",kind:"cache-key",cacheKey:"news-world",labelKey:"sources.cnn",notifiable:!0}],notifications:[(0,o(3090).B)({id:"news-world",category:"news.world",labelKey:"notifications.source.newsWorld",badgeColor:"#cc0000",cacheKey:"news-world",parse:function(e){if(!e?.items)return[];let t=[];return e.items.forEach((e,o)=>{let r=Date.parse(e.pubDate);Number.isNaN(r)||t.push({id:`${r}-${o}`,ts:r,title:e.title,link:e.link})}),t}})],persistedKeys:["widget-cache:news-world"]}},5471(e,t,o){o.d(t,{A:()=>a});var r=o(3090);let a={id:"seismic",load:()=>Promise.all([o.e("44"),o.e("773")]).then(o.bind(o,8108)).then(e=>({default:e.SeismicWidget})),labels:{en:"PT Seismic",pt:"Sismicidade PT"},descriptions:{en:"Recent seismic activity in Portugal",pt:"Atividade s\xedsmica recente em Portugal"},icon:"\uD83C\uDF0B",accentColor:"#f97316",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"ipma",kind:"dal-client",cacheKey:"seismic-pt",labelKey:"sources.ipma",notifiable:!0},{id:"usgs",kind:"dal-client",cacheKey:"seismic-world",labelKey:"sources.usgs",notifiable:!0}],notifications:[(0,r.B)({id:"seismic-pt",category:"seismic.pt",labelKey:"notifications.source.seismicPt",badgeColor:"#f97316",cacheKey:"seismic-pt",parse:function(e){if(!Array.isArray(e))return[];let t=[];return e.forEach((e,o)=>{let r=Date.parse(e.time);if(Number.isNaN(r))return;let a=e.local||e.obsRegion||"?";t.push({id:`pt-${r}-${o}`,ts:r,title:`M ${e.mag.toFixed(1)} — ${a}`})}),t}}),(0,r.B)({id:"seismic-world",category:"seismic.world",labelKey:"notifications.source.seismicWorld",badgeColor:"#ea580c",cacheKey:"seismic-world",parse:function(e){return e?.features?e.features.map(e=>({id:e.id,ts:e.properties.time,title:`M ${e.properties.mag.toFixed(1)} — ${e.properties.place}`,link:e.properties.url})):[]}})],persistedKeys:["widget-cache:seismic-pt","widget-cache:seismic-world"]}},5417(e,t,o){o.d(t,{A:()=>i});var r=o(7922),a=o(1232);let i={id:"techscope",load:()=>Promise.all([o.e("44"),o.e("923")]).then(o.bind(o,4942)).then(e=>({default:e.TechScopeLiveWidget})),labels:{en:"TechScope Live",pt:"TechScope Ao Vivo"},descriptions:{en:"Trending GitHub repos and Hacker News stories",pt:"Reposit\xf3rios GitHub e hist\xf3rias do Hacker News em alta"},icon:"⚡",accentColor:"#a371f7",defaultSize:"lg",defaultCols:2,maxCols:2,minHeight:240,suite:"learn",defaultOnDashboard:!0,sources:[{id:"github-trending",kind:"cache-key",cacheKey:"techscope-gh",labelKey:"sources.github",notifiable:!0},{id:"hn-algolia",kind:"cache-key",cacheKey:"techscope-hn",labelKey:"sources.hackerNews",notifiable:!0}],notifications:[{id:"github-trending",category:"github.trending",labelKey:"notifications.source.githubTrending",producer:{id:"github-trending",category:"github.trending",async poll(){if((0,a.isMutedNow)("github.trending"))return[];let e=await (0,r.fetchTrendingRepos)({days:7,perPage:5});if(!e?.items)return[];let t=[];for(let o of e.items){let e=o.created_at?Date.parse(o.created_at):NaN;if(!Number.isFinite(e))continue;let r=o.stargazers_count,a=o.language?` \xb7 ${o.language}`:"";t.push({id:`gh-trending:${o.id}`,category:"github.trending",ts:e,title:`${o.full_name} — ${r.toLocaleString()}★${a}`,link:o.html_url,meta:{stars:r,language:o.language,description:o.description}})}return t}},start(){},stop(){}},{id:"devto-weekly",category:"devto.weekly",labelKey:"notifications.source.devto",producer:{id:"devto-weekly",category:"devto.weekly",async poll(){if((0,a.isMutedNow)("devto.weekly"))return[];let e=await (0,r.fetchDevToArticles)({top:7,perPage:5});if(!e)return[];let t=[];for(let o of e){let e=Date.parse(o.published_at);if(!Number.isFinite(e))continue;let r=o.public_reactions_count??0,a=o.user?.name||o.user?.username,i=a?` — ${a}`:"";t.push({id:`devto:${o.id}`,category:"devto.weekly",ts:e,title:`${o.title}${i}`,link:o.url,meta:{reactions:r,comments:o.comments_count??0,readingTime:o.reading_time_minutes??null,tags:o.tag_list??[]}})}return t}},start(){},stop(){}}],persistedKeys:["widget-cache:techscope-gh","widget-cache:techscope-hn"]}},4200(e,t,o){o.d(t,{A:()=>r});let r={id:"trending-searches",load:()=>Promise.all([o.e("44"),o.e("346")]).then(o.bind(o,2065)).then(e=>({default:e.TrendingSearchesWidget})),labels:{en:"Trending Searches",pt:"Pesquisas em Alta"},descriptions:{en:"Top Google trending searches right now",pt:"As pesquisas mais populares no Google agora"},icon:"\uD83D\uDD0D",accentColor:"#e233ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"google-trends-rss",kind:"cache-key",cacheKey:"internet-trends",labelKey:"sources.googleTrends",notifiable:!0}],notifications:[(0,o(3090).B)({id:"trending-daily",category:"trending.daily",labelKey:"notifications.source.trending",badgeColor:"#e233ff",cacheKey:"internet-trends",parse:function(e){let t=e?.items?.[0];return t?[{id:new Date().toISOString().slice(0,10),ts:Date.now(),title:t.title,link:t.link}]:[]},defaultEnabled:!1})],persistedKeys:["widget-cache:internet-trends"]}},2306(e,t,o){o.d(t,{A:()=>n});var r=o(3090);let a={yellow:"\uD83D\uDFE1",orange:"\uD83D\uDFE0",red:"\uD83D\uDD34"},i={yellow:"Yellow",orange:"Orange",red:"Red"},n={id:"weather",load:()=>Promise.all([o.e("44"),o.e("693")]).then(o.bind(o,5940)).then(e=>({default:e.WeatherWidget})),labels:{en:"Weather",pt:"Meteorologia"},descriptions:{en:"Current weather for Lisbon",pt:"Meteorologia atual em Lisboa"},icon:"\uD83C\uDF24️",accentColor:"#58a6ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:280,suite:"vida",defaultOnDashboard:!0,sources:[{id:"openMeteo",kind:"cache-key",cacheKey:"weather-lisbon",labelKey:"sources.openMeteo",notifiable:!0}],notifications:[(0,r.B)({id:"ipma-warnings",category:"weather.pt.warnings",labelKey:"notifications.source.weatherPt",badgeColor:"#facc15",cacheKey:"ipma-warnings",parse:function(e){if(!Array.isArray(e))return[];let t=Date.now(),o=[];return e.forEach((e,r)=>{if("green"===e.awarenessLevelID||"yellow"===e.awarenessLevelID)return;let n=Date.parse(e.endTime);if(Number.isNaN(n)||n<t)return;let s=Date.parse(e.startTime);if(Number.isNaN(s))return;let l=e.awarenessLevelID,d=a[l]??"⚠",c=i[l]??e.awarenessLevelID.toUpperCase(),p=e.idAreaAviso||"Portugal",g=e.awarenessTypeName?e.awarenessTypeName.toLowerCase():"weather";o.push({id:`ipma-warn:${p}-${s}-${r}`,ts:s,title:`${d} ${c} ${g} warning — ${p}`,link:"https://www.ipma.pt/en/otempo/prev-sam/"})}),o}})]}},9780(e,t,o){o.d(t,{A:()=>n});var r=o(3090);let a=new Set(["Main_Page","Special:Search","Wikipedia:Featured_pictures","-","Special:Watchlist","Portal:Current_events"]);function i(){return new Date(Date.now()-864e5).toISOString().slice(0,10)}let n={id:"wiki-most-read",load:()=>Promise.all([o.e("44"),o.e("545")]).then(o.bind(o,5464)).then(e=>({default:e.WikiMostReadWidget})),labels:{en:"Wikipedia Top",pt:"Mais Lido na Wikip\xe9dia"},descriptions:{en:"Most read articles on Wikipedia today",pt:"Artigos mais lidos na Wikip\xe9dia hoje"},icon:"\uD83D\uDCD6",accentColor:"#58a6ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"wikipedia-pageviews",kind:"cache-key",labelKey:"sources.wikipedia",notifiable:!0}],notifications:[(0,r.B)({id:"wiki-top-read",category:"wiki.topRead",labelKey:"notifications.source.wikiTopRead",badgeColor:"#58a6ff",cacheKey:()=>`internet-wiki-${i()}`,parse:function(e){let t=(e?.items?.[0]?.articles??[]).find(e=>!a.has(e.article));if(!t)return[];let o=i(),r=t.article.replace(/_/g," ");return[{id:o,ts:Date.now(),title:r,link:`https://en.wikipedia.org/wiki/${encodeURIComponent(t.article)}`}]},defaultEnabled:!1})]}}}]);