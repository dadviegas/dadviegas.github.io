"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["45"],{26780(e,t,o){o.d(t,{HabitsWidget:()=>F});var i=o(65723),n=o(37991),s=o(36859),r=o.n(s),a=o(72799),l=o(6063),c=o(63236),d=o(25004),p=o(28170),x=o(98975),f=o(87517);let h=(0,a.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,m=r().button`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
    border-radius: ${l.w4.borderRadius.sm};
  }
`,w=r().div`
  display: grid;
  grid-template-columns: 18px 1fr ${"repeat(7, 12px)"} 22px;
  align-items: center;
  gap: 8px;
  padding: 0 2px 2px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,g=r().div`
  text-align: center;
  color: ${({isToday:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextFaint};
  font-weight: ${({isToday:e})=>e?700:400};
`,u=r().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`,y=r().div`
  display: grid;
  grid-template-columns: 18px 1fr ${"repeat(7, 12px)"} 22px;
  align-items: center;
  gap: 8px;
  padding: 4px 2px;
  border-radius: ${l.w4.borderRadius.sm};
  animation: ${h} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;
  transition: background ${l.w4.transitions.fast};

  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,b=r().div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1;
  color: ${l.w4.colors.mainText};
`,$=r().div`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,j=r().div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: ${({done:e,tint:t})=>e?t:l.w4.colors.codeBg};
  border: 1px solid ${({done:e,today:t,tint:o})=>t?l.w4.colors.accent:e?o:l.w4.colors.codeBorder};
  box-shadow: ${({done:e,tint:t})=>e?`0 0 0 1px ${t}33`:"none"};
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};
`,v=r().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 700;
  text-align: right;
  color: ${({hot:e,lit:t})=>e?"#fb923c":t?l.w4.colors.mainText:l.w4.colors.mainTextFaint};
  text-shadow: ${({hot:e})=>e?"0 0 8px rgba(251, 146, 60, 0.45)":"none"};
`,M=r().div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 6px;
  border-top: 1px solid ${l.w4.colors.border};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,T=r().span`
  color: ${l.w4.colors.accent};
  font-weight: 700;
`,k=r().div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
  padding: 8px ${l.w4.spacing.sm};
`,D=["S","M","T","W","T","F","S"],S=["D","S","T","Q","Q","S","S"];function F({locale:e}){let t="pt"===e?"pt":"en",o=(0,n.useMemo)(()=>(0,p.Nx)(t,x.A),[t]),{progress:s}=(0,d.useDaily)(),r=(0,n.useMemo)(()=>(0,d.lastNDays)(7),[]),a=(0,d.todayISO)(),h=(0,n.useMemo)(()=>{if(!s)return new Set;let e=new Set;for(let t of Object.values(s.history))for(let o of t)e.add(o);return e},[s]),z=(s?.missions??[]).filter(e=>h.has(e.id)).slice(0,5),C=z.reduce((e,t)=>e+r.filter(e=>!!s&&(0,d.wasMissionDone)(s,t.id,e)).length,0),_="pt"===t?S:D;return(0,i.jsx)(c.rl,{title:o("habits.title"),accessory:(0,i.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:o("habits.last7")}),accentColor:f.A.accentColor,children:(0,i.jsx)(m,{onClick:()=>{window.location.hash="#/daily"},title:o("habits.open"),children:s&&0!==h.size?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),r.map(e=>{let t=new Date(`${e}T00:00:00`).getDay();return(0,i.jsx)(g,{isToday:e===a,children:_[t]},e)}),(0,i.jsx)("span",{})]}),(0,i.jsx)(u,{children:z.map((e,o)=>{let n=function(e,t){let o=0,i=new Date;for(;;){let n=i.toISOString().slice(0,10);if(!(0,d.wasMissionDone)(e,t.id,n)||(o+=1,i.setDate(i.getDate()-1),o>365))break}return o}(s,e),p=e.color??l.w4.colors.accent,x=(0,d.missionLabel)(e,t);return(0,i.jsxs)(y,{delay:o,children:[(0,i.jsx)(b,{style:{color:p},children:(0,c.n6)(e.emoji)?(0,i.jsx)(c.In,{name:e.emoji,size:14}):e.emoji}),(0,i.jsx)($,{children:x}),r.map(t=>(0,i.jsx)(j,{done:(0,d.wasMissionDone)(s,e.id,t),today:t===a,tint:p},t)),(0,i.jsx)(v,{hot:n>=5,lit:n>0,children:n>0?n:"\xb7"})]},e.id)})}),(0,i.jsxs)(M,{children:[(0,i.jsx)("span",{children:o("habits.weekDone",{n:C})}),(0,i.jsxs)(T,{children:[o("habits.openShort")," →"]})]})]}):(0,i.jsx)(k,{children:o("habits.empty")})})})}}}]);