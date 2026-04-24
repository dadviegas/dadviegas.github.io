"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["5512"],{8997(e,n,t){var i=t(2727);n.createRoot=i.createRoot,i.hydrateRoot},3611(e,n,t){var i=t(5723),s=t(8997),a=t(7991),r=t(6859),o=t.n(r),l=t(2799),c=t(3930),d=t(8294),p=t(8395),m=t(1496),x=t(8170),h=t(4041),f=t(948),u=t(719);let g="#7fb77e",y="#f85149",w=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,b=o().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${w} 0.25s ease both;
  overflow: hidden;
`,j=o().div`
  display: block;
  @media (min-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,$=o().div`
  padding: 0 ${c.w4.spacing.md};
  border-bottom: 1px solid ${c.w4.colors.border};
  background: ${c.w4.colors.mainBg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
`,v=o().div`
  flex: 1;
  min-width: 0;
`,M=o().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  flex-shrink: 0;
`,k=o().div`
  flex: 1;
  overflow-y: auto;
  padding: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    padding: ${c.w4.spacing.lg};
  }
`,T=o().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`,F=o().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  border-left: 2px solid ${g};
  transition: border-color 120ms ease;

  &:hover {
    border-color: ${c.w4.colors.mainTextMuted};
    border-left-color: ${g};
  }

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,I=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${c.w4.spacing.sm};
  gap: ${c.w4.spacing.sm};
`,D=o().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,z=o().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,S=o().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  border-left: 2px solid ${g};
  padding: ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,B=o().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,E=o().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,A=o().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,C=o().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,R=o().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,L=o().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,P=o().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,Y=o().div`
  flex-shrink: 0;
  width: 100%;

  @media (min-width: ${c.w4.breakpoints.md}) {
    width: 260px;
  }
`,O=o().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,_=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,Z=o().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.mainTextMuted};
`,q=o().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
`,U=o().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,G=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  margin-top: 2px;
`,H=o().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: 4px 0;
`,N=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,W=o().span`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,K=o().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,Q=o().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,V=o().li`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: 10px ${c.w4.spacing.sm};
  border-radius: ${c.w4.borderRadius.md};
  transition: background 120ms ease;
  cursor: default;
  min-height: 44px;

  &:hover { background: ${c.w4.colors.sidebarHover}; }
  &:hover .delete-btn { opacity: 1; }
`,X=o().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${c.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,J=o().div`
  flex: 1;
  min-width: 0;
`,ee=o().div`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,en=o().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,et=o().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  flex-shrink: 0;
`,ei=o().span`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,es=o().span`
  font-size: 10px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${g}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?g:"#facc15"};
  white-space: nowrap;
`,ea=o().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  border-radius: ${c.w4.borderRadius.sm};
  color: ${c.w4.colors.mainTextMuted};
  cursor: pointer;
  font-size: 14px;
  opacity: 0;
  transition: opacity 120ms ease, color 120ms ease, background 120ms ease;
  flex-shrink: 0;

  &:hover {
    color: ${y};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,er=o().div`
  display: flex;
  align-items: flex-start;
  gap: ${c.w4.spacing.sm};
  padding: 10px ${c.w4.spacing.sm};
  border-radius: ${c.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${g}14`:c.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${g}44`:c.w4.colors.border};
  font-size: 13px;
  color: ${c.w4.colors.mainText};
`,eo=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?y:"warning"===e?"#facc15":"success"===e?g:c.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,el=o().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`;o()(F)`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`;let ec=o().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;
`,ed=o().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  height: 28px;
  border-radius: 999px;
  border: 1px solid ${({active:e,color:n})=>e?n:c.w4.colors.border};
  background: ${({active:e,color:n})=>e?`${n}22`:c.w4.colors.mainBg};
  color: ${c.w4.colors.mainText};
  font-size: 12px;
  cursor: pointer;
  transition: all 120ms ease;
  white-space: nowrap;
  min-height: 44px;

  &:focus-visible { outline: 2px solid ${c.w4.colors.accent}; outline-offset: 2px; }
`,ep=o().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${c.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,em=o().input`
  flex: 1;
  min-width: 160px;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${c.w4.spacing.sm};
  height: 44px;
  font-family: ${c.w4.typography.fontFamily};
  outline: none;
  transition: border-color 120ms ease;

  &::placeholder { color: ${c.w4.colors.mainTextMuted}; }
  &:focus {
    border-color: ${c.w4.colors.accent};
    box-shadow: 0 0 0 2px rgba(88,166,255,0.15);
  }
`,ex=o().select`
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${c.w4.spacing.sm};
  height: 44px;
  outline: none;
  cursor: pointer;
  transition: border-color 120ms ease;

  &:focus { border-color: ${c.w4.colors.accent}; }
  option { background: ${c.w4.colors.surface}; }
`,eh=o().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${g};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,ef=o().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,eu=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.md};
  margin-top: ${c.w4.spacing.sm};
  padding-top: ${c.w4.spacing.sm};
  border-top: 1px solid ${c.w4.colors.border};
`,eg=o().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ey=o().div`
  font-size: 18px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,ew=o().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.sm};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,eb=o().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,ej=o().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,e$=o().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,ev=o().span`
  font-size: 22px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
`,eM=o().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};

  span.fin { color: ${g}; }
`,ek=o().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eT=o().label`
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
`,eF=o().input`
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  padding: 0 ${c.w4.spacing.sm};
  height: 44px;
  width: 100%;
  outline: none;
  transition: border-color 120ms ease;

  &:focus {
    border-color: ${c.w4.colors.accent};
    box-shadow: 0 0 0 2px rgba(88,166,255,0.15);
  }
`,eI=o().select`
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: 13px;
  padding: 6px ${c.w4.spacing.sm};
  outline: none;
  cursor: pointer;
  font-family: ${c.w4.typography.fontFamilyMono};
  transition: border-color 120ms ease;
  height: 36px;

  &:focus { border-color: ${c.w4.colors.accent}; }
  option { background: ${c.w4.colors.surface}; }
`,eD=o().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ez=o().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,eS=o().div`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`,eB=o().div`
  flex: 1;
  height: 8px;
  background: ${c.w4.colors.border};
  border-radius: 4px;
  overflow: hidden;
`,eE=o().div`
  height: 100%;
  border-radius: 4px;
  width: ${({pct:e})=>e}%;
  background: ${({color:e})=>e};
  transition: width 0.4s ease;
`,eA=o().div`
  font-size: 13px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${c.w4.colors.mainText};
  width: 72px;
  text-align: right;
  flex-shrink: 0;
`,eC=o().button`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.accent};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 120ms ease;

  &:hover { color: ${c.w4.colors.accentHover??c.w4.colors.accent}; }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
    border-radius: 2px;
  }
`,eR=o().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
`,eL=o().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.accent};
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md};
`,eP=o().footer`
  flex-shrink: 0;
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md};
  border-top: 1px solid ${c.w4.colors.border};
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,eY=o().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.sm};
`,eO=o().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,e_=o().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`;function eZ(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function eq(e){return Math.round(e).toLocaleString("pt-PT")}function eU(e,n){let[t,i,s]=e.split("-").map(Number);return new Date(t,i-1,s).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function eG(e){return d.DEFAULT_CATEGORIES.find(n=>n.id===e)??d.DEFAULT_CATEGORIES[d.DEFAULT_CATEGORIES.length-1]}function eH({exp:e,finData:n,locale:t,t:s,onDelete:a}){let r=eG(e.categoryId),o=n.familyMembers.findIndex(n=>n.id===e.childId),l=o>=0?n.familyMembers[o]:null,d=l?(0,u.a8)(l,o):c.w4.colors.mainTextMuted;return(0,i.jsxs)(V,{children:[(0,i.jsx)(X,{color:r.color,children:(0,i.jsx)("span",{"aria-hidden":!0,children:r.icon})}),(0,i.jsxs)(J,{children:[(0,i.jsx)(ee,{children:e.description||("pt"===t?r.labelPt:r.labelEn)}),(0,i.jsxs)(en,{children:[l?(0,i.jsx)(p.eu,{member:{id:l.id,name:l.name,role:l.role,color:d},size:14}):null,(0,i.jsx)("span",{children:"pt"===t?r.labelPt:r.labelEn}),(0,i.jsx)("span",{children:"\xb7"}),(0,i.jsx)("span",{children:eU(e.date,t)}),"monthly"===e.type&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{children:"\xb7"}),(0,i.jsx)("span",{children:"mensal"})]})]})]}),(0,i.jsxs)(et,{children:[e.isReimbursable&&(0,i.jsx)(es,{ok:e.reimbursed,children:s(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}),"recurring"===e.type&&(0,i.jsx)(es,{children:s("finance.tx.recurring")}),(0,i.jsxs)(ei,{children:["−€",eZ(e.amount)]}),(0,i.jsx)(ea,{className:"delete-btn",type:"button",onClick:()=>a(e.id),"aria-label":`${s("finance.tx.delete")} ${e.description}`,children:"\xd7"})]})]})}function eN({expenses:e,total:n,locale:t}){let s=Object.entries((0,a.useMemo)(()=>{let n={};for(let t of e)n[t.categoryId]=(n[t.categoryId]??0)+t.amount;return n},[e])).map(([e,n])=>({cat:eG(e),amt:n})).sort((e,n)=>n.amt-e.amt);return 0===s.length?(0,i.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:"—"}):(0,i.jsx)(eD,{children:s.map(({cat:e,amt:s})=>{let a=n>0?s/n*100:0;return(0,i.jsxs)(ez,{children:[(0,i.jsxs)(eS,{children:[(0,i.jsx)("span",{"aria-hidden":!0,children:e.icon}),"pt"===t?e.labelPt:e.labelEn]}),(0,i.jsx)(eB,{children:(0,i.jsx)(eE,{pct:a,color:e.color})}),(0,i.jsxs)(eA,{children:["€",s.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.id)})})}function eW({data:e,months:n,locale:t,t:s}){let a=n.map(n=>(0,d.computeMonthlySummary)(e,n)),r=Math.max(...a.map(e=>e.totalExpenses),1);return a.every(e=>0===e.totalExpenses&&0===e.totalIncome)?(0,i.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:s("finance.insights.noData")}):(0,i.jsx)(eD,{children:a.map(e=>{let n=e.totalExpenses/r*100,[,s]=e.month.split("-"),a=new Date(parseInt(e.month.slice(0,4)),parseInt(s)-1,1).toLocaleDateString("pt"===t?"pt-PT":"en-GB",{month:"short"});return(0,i.jsxs)(ez,{children:[(0,i.jsx)(eS,{style:{width:80},children:a}),(0,i.jsx)(eB,{children:(0,i.jsx)(eE,{pct:n,color:c.w4.colors.accent})}),(0,i.jsxs)(eA,{children:["€",e.totalExpenses.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.month)})})}let eK=document.getElementById("root");if(!eK)throw Error("Root element #root not found");(0,s.createRoot)(eK).render((0,i.jsx)(function({topBarRight:e}){let[n]=(0,x.Ym)(),t=(0,a.useMemo)(()=>(0,x.Nx)(n,f.A),[n]),{data:s,loaded:r,save:o}=(0,d.useFinance)(),l=s??{...d.EMPTY_FINANCE_DATA},[w,es]=(0,a.useState)("overview"),[eD,ez]=(0,a.useState)(()=>(0,d.thisMonthKey)()),[eS,eB]=(0,a.useState)("shared"),eE=(0,a.useRef)(null),[eA,eK]=(0,a.useState)(""),[eQ,eV]=(0,a.useState)(""),[eX,eJ]=(0,a.useState)("shared"),[e0,e4]=(0,a.useState)(!1),e1=(0,a.useRef)(null),[e2,e8]=(0,a.useState)(""),[e3,e5]=(0,a.useState)(""),[e6,e7]=(0,a.useState)(!1),e9=(0,a.useMemo)(()=>(0,d.thisMonthKey)(),[]),ne=(0,a.useMemo)(()=>(0,d.computeWeeklyStatus)(l),[l]),nn=(0,a.useMemo)(()=>(0,d.computeMonthlySummary)(l,eD),[l,eD]),nt=(0,a.useMemo)(()=>(0,d.generateInsightsWithMembers)(l),[l]),ni=(0,a.useMemo)(()=>(0,d.availableMonths)(l),[l]),ns=(0,a.useMemo)(()=>(0,d.expensesForMonth)(l.expenses,eD),[l,eD]),na=(0,a.useMemo)(()=>(0,d.incomeForMonth)(l.income,eD),[l,eD]),nr=(0,a.useMemo)(()=>"shared"===eS?ns.filter(e=>!e.childId):ns.filter(e=>e.childId===eS),[ns,eS]),no=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(l,eS,e9),[l,eS,e9]),nl=(0,a.useMemo)(()=>(function(e){let[n,t]=e.split("-").map(Number),i=new Date(n,t-2,1);return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`})(e9),[e9]),nc=(0,a.useMemo)(()=>(0,d.monthlyTotalByMember)(l,eS,nl),[l,eS,nl]),nd=(0,a.useMemo)(()=>0===nc?0:Math.round((no-nc)/nc*100),[no,nc]),np=(0,a.useMemo)(()=>{if("shared"===eS)return t("finance.hero.family");let e=l.familyMembers.find(e=>e.id===eS);return e?.name??t("finance.hero.family")},[eS,l.familyMembers,t]),nm=(0,a.useMemo)(()=>{if("shared"===eS)return c.w4.colors.mainTextMuted;let e=l.familyMembers.findIndex(e=>e.id===eS);return -1===e?g:(0,u.a8)(l.familyMembers[e],e)},[eS,l.familyMembers]),nx=(0,a.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,t)=>{let i=new Date(e);i.setDate(e.getDate()-(5-t)*7-e.getDay()),i.setHours(0,0,0,0);let s=new Date(i);return s.setDate(i.getDate()+7),(0,d.expensesForMember)(l.expenses,eS).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=i&&n<s}).reduce((e,n)=>e+n.amount,0)})},[l.expenses,eS]),nh=(0,a.useMemo)(()=>(function(e,n){let t=[],i=new Date;for(let e=5;e>=0;e--){let n=new Date(i.getFullYear(),i.getMonth()-e,1);t.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let s=e.budget.monthlyBudget;return t.map(t=>{let i="shared"===n?(0,d.expensesForMonth)(e.expenses,t).filter(e=>!e.childId):(0,d.expensesForMonth)(e.expenses,t).filter(e=>e.childId===n),a={};for(let e of i)a[e.categoryId]=(a[e.categoryId]??0)+e.amount;let r=Object.values(a).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(t.slice(0,4)),parseInt(t.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(a).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:eG(e).color})),over:r>s?r-s:0}})})(l,eS),[l,eS]),nf=(0,a.useMemo)(()=>(function(e,n){let t=new Date,i=[];for(let s=89;s>=0;s--){let a=new Date(t);a.setDate(t.getDate()-s);let r=a.toISOString().slice(0,10),o=r.slice(0,7),l=("shared"===n?e.expenses.filter(e=>e.date===r&&!e.childId):e.expenses.filter(e=>e.date===r&&e.childId===n)).reduce((e,n)=>e+n.amount,0),c=(0,d.incomeForMonth)(e.income,o).reduce((e,n)=>e+n.amount,0)/30;i.push({inc:c,exp:l})}return i})(l,eS),[l,eS]),nu=(0,a.useMemo)(()=>{let e,n;return e=new Date,n=l.expenses.length>0?l.expenses.reduce((e,n)=>e+n.amount,0)/l.expenses.length:20,Array.from({length:91},(t,i)=>{let s=new Date(e);s.setDate(e.getDate()-90+i);let a=s.toISOString().slice(0,10),r=("shared"===eS?l.expenses.filter(e=>e.date===a&&!e.childId):l.expenses.filter(e=>e.date===a&&e.childId===eS)).reduce((e,n)=>e+n.amount,0);if(0===r)return 0;let o=r/n;return o<.5?1:o<1?2:o<2?3:4})},[l,eS]),ng=ne.budget>0?ne.spent/ne.budget*100:0,ny=l.budget.monthlyBudget>0?no/l.budget.monthlyBudget*100:0,nw=(0,a.useMemo)(()=>{let e=(0,d.parseQuickInput)(eA,l.familyMembers);return e?.description?(0,d.guessCategory)(e.description,l.categoryHints):"other"},[eA,l.categoryHints,l.familyMembers]),nb=eQ||nw;(0,a.useEffect)(()=>{let e=(0,d.parseQuickInput)(eA,l.familyMembers);e?.memberId&&eJ(e.memberId)},[eA,l.familyMembers]);let nj=(0,a.useCallback)(e=>{e.preventDefault();let n=(0,d.parseQuickInput)(eA,l.familyMembers);if(!n)return;let t=nb||"other",i=n.memberId??("shared"!==eX?eX:void 0),s={id:(0,h.z)(),amount:n.amount,date:new Date().toISOString().slice(0,10),categoryId:t,description:n.description||t,type:"daily",childId:i,createdAt:Date.now()},a={...l.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(a[e]=t)});let r=[n.description||"",...l.recentDescriptions].filter(Boolean).slice(0,20);o({...l,expenses:[s,...l.expenses],categoryHints:a,recentDescriptions:r}),eK(""),eV(""),e1.current&&clearTimeout(e1.current),e4(!0),e1.current=setTimeout(()=>e4(!1),2e3)},[eA,nb,eX,l,o]),n$=(0,a.useCallback)(e=>{o({...l,expenses:l.expenses.filter(n=>n.id!==e)})},[l,o]),nv=(0,a.useCallback)(e=>{o({...l,income:l.income.filter(n=>n.id!==e)})},[l,o]),nM=(0,a.useCallback)(()=>{let e=parseFloat(e2)||l.budget.weeklyBudget,n=parseFloat(e3)||l.budget.monthlyBudget;o({...l,budget:{...l.budget,weeklyBudget:e,monthlyBudget:n}}),e7(!0),setTimeout(()=>e7(!1),2e3)},[e2,e3,l,o]),nk=[{value:"overview",label:t("finance.tab.overview")},{value:"expenses",label:`${t("finance.tab.expenses")} ${nr.length>0?`(${nr.length})`:""}`},{value:"insights",label:`${t("finance.tab.insights")} ${nt.length>0?`(${nt.length})`:""}`},{value:"settings",label:t("finance.tab.settings")}],nT=Math.floor(no).toLocaleString("pt-PT"),nF=(no%1).toFixed(2).slice(1),nI=(()=>{let[e,t]=e9.split("-");return new Date(parseInt(e),parseInt(t)-1,1).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),nD=(0,i.jsx)(u.TA,{data:l,activeMemberId:eS,onSelectMember:eB,onSaveData:o,t:t,locale:n}),nz=(0,a.useMemo)(()=>{let e={};for(let n of nr)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:eG(e).color}))},[nr]),nS=nz.reduce((e,n)=>e+n.value,0),nB=(0,a.useMemo)(()=>nh.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[nh]),nE=nh.length>0?nB/nh.length:0,nA=nh.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>l.budget.monthlyBudget).length;return(0,i.jsx)(c.PE,{title:t("finance.appTitle"),sidebar:nD,topBarRight:e,activeId:eS,children:(0,i.jsxs)(b,{children:[(0,i.jsx)(j,{children:(0,i.jsx)(u.jb,{data:l,activeMemberId:eS,onSelectMember:eB,t:t,locale:n})}),(0,i.jsxs)($,{children:[(0,i.jsx)(v,{children:(0,i.jsx)(p.tU,{tabs:nk,value:w,onChange:es,"aria-label":t("finance.nav.ariaLabel")})}),(0,i.jsxs)(M,{children:[0===l.familyMembers.length&&(0,i.jsx)(eL,{children:t("finance.member.empty")}),(0,i.jsxs)(p.$n,{variant:"ghost",style:{height:30},onClick:()=>{es("overview"),setTimeout(()=>{eE.current?.scrollIntoView({behavior:"smooth",block:"start"})},100)},children:[(0,i.jsx)(p.In,{name:"plus",size:13,"aria-hidden":!0}),t("finance.quickAdd.newExpense")]})]})]}),(0,i.jsxs)(k,{children:["overview"===w&&(0,i.jsxs)(T,{children:[(0,i.jsx)(F,{span:12,style:{borderLeft:`2px solid ${g}`},children:(0,i.jsxs)(S,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,i.jsxs)(B,{children:[(0,i.jsxs)(E,{children:[t("finance.hero.spentIn")," ",nI," \xb7 ",np]}),(0,i.jsxs)(A,{children:[(0,i.jsx)(C,{children:"€"}),(0,i.jsx)(R,{children:nT}),(0,i.jsx)(L,{children:nF})]}),(0,i.jsxs)(P,{children:[(0,i.jsx)(m.Ru,{value:nd,format:"pct",decimals:0}),(0,i.jsxs)("span",{children:[t("finance.hero.vsPrevious")," ",(0,d.formatMonthLabel)(nl,n)," \xb7 €",eq(nc)]})]}),nx.some(e=>e>0)&&(0,i.jsx)("div",{style:{marginTop:4},children:(0,i.jsx)(m.OW,{points:nx,accent:nm,width:320,height:34})})]}),(0,i.jsx)(Y,{children:(0,i.jsxs)(O,{children:[(0,i.jsxs)(_,{children:[(0,i.jsx)(Z,{children:t("finance.budget.weekly")}),(0,i.jsxs)(q,{children:["€",eq(ne.spent)," ",(0,i.jsxs)(U,{children:["/ €",ne.budget]})]})]}),(0,i.jsx)(m.Xj,{pct:ng,over:ng>100?ng-100:0}),(0,i.jsxs)(G,{children:[(0,i.jsxs)("span",{children:[Math.round(ng),"% ",t("finance.budget.used")]}),(0,i.jsx)("span",{style:{color:ne.remaining<0?y:g},children:ne.remaining>0?`€${eq(ne.remaining)} ${t("finance.budget.remaining")}`:`€${eq(Math.abs(ne.remaining))} ${t("finance.budget.over")}`})]}),(0,i.jsxs)(_,{style:{marginTop:14},children:[(0,i.jsx)(Z,{children:t("finance.budget.monthly")}),(0,i.jsxs)(q,{children:["€",eq(no)," ",(0,i.jsxs)(U,{children:["/ €",l.budget.monthlyBudget]})]})]}),(0,i.jsx)(m.Xj,{pct:ny,over:ny>100?ny-100:0}),(0,i.jsxs)(G,{children:[(0,i.jsxs)("span",{children:[Math.round(ny),"% ",t("finance.budget.used")]}),(0,i.jsxs)("span",{style:{color:c.w4.colors.mainTextMuted},children:[t("finance.budget.projected")," €",eq(no+(ne.projectedTotal-ne.spent))]})]})]})})]})}),(0,i.jsxs)(F,{span:8,children:[(0,i.jsxs)(I,{children:[(0,i.jsx)(D,{children:t("finance.charts.sixMonths")}),(0,i.jsx)(z,{children:(0,i.jsx)(eY,{children:d.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,i.jsxs)(eO,{children:[(0,i.jsx)(e_,{color:e.color}),"pt"===n?e.labelPt:e.labelEn]},e.id))})})]}),(0,i.jsx)(m.ik,{data:nh,budget:l.budget.monthlyBudget,height:200}),(0,i.jsxs)(eu,{children:[(0,i.jsxs)(eg,{children:[(0,i.jsx)(p.YZ,{children:t("finance.charts.total6m")}),(0,i.jsxs)(ey,{children:["€",eq(nB)]})]}),(0,i.jsxs)(eg,{children:[(0,i.jsx)(p.YZ,{children:t("finance.charts.monthlyAvg")}),(0,i.jsxs)(ey,{children:["€",eq(nE)]})]}),(0,i.jsxs)(eg,{children:[(0,i.jsx)(p.YZ,{children:t("finance.charts.monthsOverBudget")}),(0,i.jsxs)(ey,{children:[nA," / ",nh.length]})]}),(0,i.jsxs)(eg,{children:[(0,i.jsx)(p.YZ,{children:t("finance.charts.trend")}),(0,i.jsxs)(ey,{style:{color:nd>0?y:g},children:[nd>0?"+":"",nd,"%"]})]})]})]}),(0,i.jsxs)(F,{span:4,children:[(0,i.jsxs)(I,{children:[(0,i.jsx)(D,{children:t("finance.charts.byCategory")}),(0,i.jsx)(eC,{type:"button",onClick:()=>es("insights"),children:t("finance.charts.viewAll")})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,i.jsx)(m.RJ,{data:nz,total:nS,size:110,centerLabel:nI.slice(0,3),centerValue:`€${eq(nS)}`}),(0,i.jsx)("div",{style:{flex:1,minWidth:120},children:nz.map(e=>{let t=eG(e.id),s=(0,d.expensesForMonth)(l.expenses,nl).filter(n=>"shared"===eS?!n.childId&&n.categoryId===e.id:n.childId===eS&&n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),a=s>0?(e.value-s)/s*100:0;return(0,i.jsxs)(H,{children:[(0,i.jsx)(N,{color:e.color}),(0,i.jsx)(W,{children:"pt"===n?t.labelPt:t.labelEn}),(0,i.jsxs)(K,{children:["€",eq(e.value)]}),Math.abs(a)>1&&(0,i.jsx)(m.Ru,{value:a,format:"pct",decimals:0})]},e.id)})})]})]}),(0,i.jsxs)(F,{span:5,children:[(0,i.jsxs)(I,{children:[(0,i.jsx)(D,{children:t("finance.charts.cashflow")}),(0,i.jsx)("span",{style:{fontSize:11,fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted},children:t("finance.charts.cashflowSub")})]}),(0,i.jsx)(m.uj,{data:nf,height:170,legendIn:t("finance.charts.in"),legendOut:t("finance.charts.out")})]}),(0,i.jsxs)(F,{span:4,children:[(0,i.jsx)(I,{children:(0,i.jsx)(D,{children:t("finance.charts.heatmap")})}),(0,i.jsx)(m.RT,{data:nu,locale:n}),(0,i.jsxs)(ew,{children:[(0,i.jsx)("span",{children:t("finance.charts.less")}),(0,i.jsx)(eb,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,i.jsx)("span",{style:{background:e}},n))}),(0,i.jsx)("span",{children:t("finance.charts.more")})]})]}),(0,i.jsxs)(F,{span:3,children:[(0,i.jsx)(I,{children:(0,i.jsx)(D,{children:t("finance.charts.thisWeek")})}),(0,i.jsxs)(ej,{children:[(0,i.jsxs)(e$,{children:[(0,i.jsxs)(ev,{children:["€",eq(ne.spent)]}),(0,i.jsxs)(U,{children:["/ €",ne.budget]})]}),(0,i.jsx)(m.kl,{spent:ne.spent,budget:ne.budget}),(0,i.jsxs)(eM,{children:[(0,i.jsx)("span",{children:t("finance.charts.ideal")}),(0,i.jsx)("span",{className:"fin",children:t("finance.charts.actual")})]})]})]}),(0,i.jsxs)(F,{span:7,children:[(0,i.jsxs)(I,{children:[(0,i.jsx)(D,{children:t("finance.recent.title")}),l.expenses.length>5&&(0,i.jsx)(eC,{type:"button",onClick:()=>es("expenses"),children:t("finance.recent.viewAll",{n:nr.length})})]}),0===nr.length?(0,i.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted,padding:`${c.w4.spacing.sm} 0`},children:t("finance.dashboard.noRecent")}):(0,i.jsx)(Q,{"aria-label":t("finance.recent.title"),children:nr.slice(0,6).map(e=>(0,i.jsx)(eH,{exp:e,finData:l,locale:n,t:t,onDelete:n$},e.id))})]}),(0,i.jsxs)(F,{span:5,children:[(0,i.jsx)(I,{children:(0,i.jsx)(D,{children:t("finance.insights.title")})}),0===nt.length?(0,i.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:t("insights")??"—"}):(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nt.map((e,n)=>(0,i.jsxs)(er,{itype:e.type,children:[(0,i.jsx)(eo,{itype:e.type}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:t(e.messageKey,e.params)}),e.memberId&&(()=>{let n=l.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let t=l.familyMembers.indexOf(n);return(0,i.jsxs)(el,{children:[(0,i.jsx)(p.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,u.a8)(n,t)},size:14}),(0,i.jsx)("span",{children:n.name})]})})()]})]},n))})]}),(0,i.jsxs)(F,{span:12,ref:eE,children:[(0,i.jsx)(p.YZ,{style:{marginBottom:c.w4.spacing.sm},children:t("finance.quickAdd.title")}),(0,i.jsxs)("form",{onSubmit:nj,"aria-label":t("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.sm},children:[(0,i.jsx)(ec,{children:[{id:"shared",name:t("finance.member.shared"),role:"shared",color:void 0},...l.familyMembers.map((e,n)=>({...e,color:(0,u.a8)(e,n)}))].map((e,n)=>{let t="shared"===e.id?c.w4.colors.mainTextMuted:(0,u.a8)(l.familyMembers[n-1]??e,n-1),s={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?t:void 0};return(0,i.jsxs)(ed,{type:"button",active:eX===e.id,color:t,onClick:()=>eJ(e.id),children:[(0,i.jsx)(p.eu,{member:s,size:18}),e.name]},e.id)})}),(0,i.jsxs)(ep,{children:[(0,i.jsx)(em,{type:"text",placeholder:t("finance.quickAdd.placeholder"),value:eA,onChange:e=>{eK(e.target.value),eV("")},"aria-label":t("finance.quickAdd.hint"),autoComplete:"off",inputMode:"decimal"}),(0,i.jsx)(ex,{value:eQ||nw,onChange:e=>eV(e.target.value),"aria-label":t("finance.quickAdd.category"),children:d.DEFAULT_CATEGORIES.map(e=>(0,i.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===n?e.labelPt:e.labelEn]},e.id))}),(0,i.jsx)(p.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!eA.trim(),children:t("finance.quickAdd.add")})]}),(0,i.jsxs)(eh,{visible:e0,"aria-live":"polite","aria-atomic":!0,children:["✓ ",t("finance.quickAdd.added")]}),(0,i.jsx)(ef,{children:t("finance.quickAdd.hint")})]})]})]}),"expenses"===w&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(eR,{style:{marginBottom:c.w4.spacing.md},children:[(0,i.jsx)(p.YZ,{children:t("finance.tx.title")}),(0,i.jsx)(eI,{value:eD,onChange:e=>ez(e.target.value),"aria-label":t("finance.insights.month"),children:ni.map(e=>(0,i.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,n)},e))})]}),0===nr.length&&0===na.length?(0,i.jsx)(F,{children:(0,i.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:t("finance.tx.empty")})}):(0,i.jsx)(F,{span:12,children:(0,i.jsx)(Q,{"aria-label":t("finance.tx.title"),children:[...nr.map(e=>({...e,_kind:"expense"})),...na.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,i.jsx)(eH,{exp:e,finData:l,locale:n,t:t,onDelete:n$},e.id):(0,i.jsxs)(V,{children:[(0,i.jsx)(X,{color:g,children:"\uD83D\uDCB0"}),(0,i.jsxs)(J,{children:[(0,i.jsx)(ee,{children:e.source}),(0,i.jsxs)(en,{children:[eU(e.date,n)," \xb7 ",t("finance.dashboard.income")]})]}),(0,i.jsxs)(et,{children:[(0,i.jsxs)(ei,{style:{color:g},children:["+€",eZ(e.amount)]}),(0,i.jsx)(ea,{className:"delete-btn",type:"button",onClick:()=>nv(e.id),"aria-label":`${t("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===w&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(eR,{style:{marginBottom:c.w4.spacing.md},children:[(0,i.jsx)(p.YZ,{children:t("finance.insights.title")}),(0,i.jsx)(eI,{value:eD,onChange:e=>ez(e.target.value),"aria-label":t("finance.insights.month"),children:ni.map(e=>(0,i.jsx)("option",{value:e,children:(0,d.formatMonthLabel)(e,n)},e))})]}),(0,i.jsxs)(F,{span:12,style:{marginBottom:c.w4.spacing.md},children:[(0,i.jsx)(p.YZ,{style:{marginBottom:c.w4.spacing.sm},children:t("finance.insights.byCategory")}),(0,i.jsx)(eN,{expenses:nr,total:nn.totalExpenses,locale:n})]}),(0,i.jsxs)(F,{span:12,children:[(0,i.jsx)(p.YZ,{style:{marginBottom:c.w4.spacing.sm},children:t("finance.insights.monthlyTrend")}),(0,i.jsx)(eW,{data:l,months:ni.slice(0,6),locale:n,t:t})]}),(0,i.jsxs)(F,{span:12,children:[(0,i.jsx)(p.YZ,{style:{marginBottom:c.w4.spacing.sm},children:t("finance.insights.title")}),0===nt.length?(0,i.jsx)("div",{style:{fontSize:13,color:c.w4.colors.mainTextMuted},children:t("finance.insights.noData")}):(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:nt.map((e,n)=>(0,i.jsxs)(er,{itype:e.type,children:[(0,i.jsx)(eo,{itype:e.type}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:t(e.messageKey,e.params)}),e.memberId&&(()=>{let n=l.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let t=l.familyMembers.indexOf(n);return(0,i.jsxs)(el,{children:[(0,i.jsx)(p.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,u.a8)(n,t)},size:14}),(0,i.jsx)("span",{children:n.name})]})})()]})]},n))})]})]}),"settings"===w&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(F,{span:12,children:[(0,i.jsx)(p.YZ,{style:{marginBottom:c.w4.spacing.md},children:t("finance.settings.title")}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:c.w4.spacing.md},children:[(0,i.jsxs)(ek,{children:[(0,i.jsx)(eT,{htmlFor:"weekly-budget",children:t("finance.settings.weeklyBudget")}),(0,i.jsx)(eF,{id:"weekly-budget",type:"number",min:"1",placeholder:String(l.budget.weeklyBudget),value:e2,onChange:e=>e8(e.target.value)})]}),(0,i.jsxs)(ek,{children:[(0,i.jsx)(eT,{htmlFor:"monthly-budget",children:t("finance.settings.monthlyBudget")}),(0,i.jsx)(eF,{id:"monthly-budget",type:"number",min:"1",placeholder:String(l.budget.monthlyBudget),value:e3,onChange:e=>e5(e.target.value)})]}),(0,i.jsx)(p.$n,{variant:"primary",onClick:nM,style:{height:44},children:e6?t("finance.settings.saved"):t("finance.settings.save")})]})]})})]}),(0,i.jsxs)(eP,{children:[(0,i.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,i.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]})})},{}))}}]);