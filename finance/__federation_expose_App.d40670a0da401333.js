"use strict";(self.webpackChunk_atlantis_finance=self.webpackChunk_atlantis_finance||[]).push([["6362"],{3935(e,n,t){t.r(n),t.d(n,{default:()=>eG});var i=t(5723),s=t(7991),a=t(6859),r=t.n(a),o=t(2799),l=t(3930),c=t(8294),d=t(8395),p=t(1496),m=t(8170),x=t(4041),h=t(948),f=t(719);let u="#7fb77e",g="#f85149",y=(0,o.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,w=r().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${y} 0.25s ease both;
  overflow: hidden;
`,b=r().div`
  display: block;
  @media (min-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,j=r().div`
  padding: 0 ${l.w4.spacing.md};
  border-bottom: 1px solid ${l.w4.colors.border};
  background: ${l.w4.colors.mainBg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`,$=r().div`
  flex: 1;
  min-width: 0;
`,v=r().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,M=r().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    padding: ${l.w4.spacing.lg};
  }
`,k=r().div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
`,T=r().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  border-left: 2px solid ${u};
  transition: border-color 120ms ease;

  &:hover {
    border-color: ${l.w4.colors.mainTextMuted};
    border-left-color: ${u};
  }

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-column: span ${({span:e})=>e??12};
  }
`,F=r().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${l.w4.spacing.sm};
  gap: ${l.w4.spacing.sm};
`,I=r().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,D=r().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,z=r().div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  border-left: 2px solid ${u};
  padding: ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,S=r().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,B=r().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${l.w4.colors.mainTextMuted};
`,E=r().div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,A=r().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
`,C=r().span`
  font-size: clamp(28px, 6vw, 44px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
`,R=r().span`
  font-size: clamp(18px, 4vw, 28px);
  font-family: ${l.w4.typography.fontFamilyMono};
  font-weight: 800;
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,L=r().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,P=r().div`
  flex-shrink: 0;
  width: 100%;

  @media (min-width: ${l.w4.breakpoints.md}) {
    width: 260px;
  }
`,Y=r().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,O=r().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};

  &:first-child {
    margin-top: 0;
  }
`,_=r().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.mainTextMuted};
`,Z=r().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  font-weight: 600;
  white-space: nowrap;
`,q=r().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  font-variant-numeric: tabular-nums;
`,U=r().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,G=r().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 4px 0;
`,H=r().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,N=r().span`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,W=r().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  text-align: right;
  font-weight: 500;
  white-space: nowrap;
`,K=r().ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,Q=r().li`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 10px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.md};
  transition: background 120ms ease;
  cursor: default;
  min-height: 44px;

  &:hover { background: ${l.w4.colors.sidebarHover}; }
  &:hover .delete-btn { opacity: 1; }
`,V=r().span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({color:e})=>`${e}22`};
  font-size: 16px;
  flex-shrink: 0;
`,X=r().div`
  flex: 1;
  min-width: 0;
`,J=r().div`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ee=r().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1px;
`,en=r().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-shrink: 0;
`,et=r().span`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
  font-weight: 600;
`,ei=r().span`
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 5px;
  border-radius: 3px;
  background: ${({ok:e})=>e?`${u}22`:"rgba(250,204,21,0.15)"};
  color: ${({ok:e})=>e?u:"#facc15"};
  white-space: nowrap;
`,es=r().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  font-size: 14px;
  opacity: 0;
  transition: opacity 120ms ease, color 120ms ease, background 120ms ease;
  flex-shrink: 0;

  &:hover {
    color: ${g};
    background: rgba(248,81,73,0.1);
  }
  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,ea=r().div`
  display: flex;
  align-items: flex-start;
  gap: ${l.w4.spacing.sm};
  padding: 10px ${l.w4.spacing.sm};
  border-radius: ${l.w4.borderRadius.md};
  background: ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.08)":"warning"===e?"rgba(250,204,21,0.08)":"success"===e?`${u}14`:l.w4.colors.sidebarHover};
  border: 1px solid ${({itype:e})=>"danger"===e?"rgba(248,81,73,0.2)":"warning"===e?"rgba(250,204,21,0.2)":"success"===e?`${u}44`:l.w4.colors.border};
  font-size: 13px;
  color: ${l.w4.colors.mainText};
`,er=r().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({itype:e})=>"danger"===e?g:"warning"===e?"#facc15":"success"===e?u:l.w4.colors.accent};
  flex-shrink: 0;
  margin-top: 4px;
`,eo=r().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`;r()(T)`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`;let el=r().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,ec=r().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  height: 28px;
  border-radius: 999px;
  border: 1px solid ${({active:e,color:n})=>e?n:l.w4.colors.border};
  background: ${({active:e,color:n})=>e?`${n}22`:l.w4.colors.mainBg};
  color: ${l.w4.colors.mainText};
  font-size: 12px;
  cursor: pointer;
  transition: all 120ms ease;
  white-space: nowrap;
  min-height: 44px;

  &:focus-visible { outline: 2px solid ${l.w4.colors.accent}; outline-offset: 2px; }
`,ed=r().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${l.w4.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`,ep=r().input`
  flex: 1;
  min-width: 160px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${l.w4.spacing.sm};
  height: 44px;
  font-family: ${l.w4.typography.fontFamily};
  outline: none;
  transition: border-color 120ms ease;

  &::placeholder { color: ${l.w4.colors.mainTextMuted}; }
  &:focus {
    border-color: ${l.w4.colors.accent};
    box-shadow: 0 0 0 2px rgba(88,166,255,0.15);
  }
`,em=r().select`
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  padding: 0 ${l.w4.spacing.sm};
  height: 44px;
  outline: none;
  cursor: pointer;
  transition: border-color 120ms ease;

  &:focus { border-color: ${l.w4.colors.accent}; }
  option { background: ${l.w4.colors.surface}; }
`,ex=r().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${u};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: ${({visible:e})=>+!!e};
  transition: opacity 0.3s ease;
  height: 16px;
`,eh=r().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,ef=r().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.sm};
  padding-top: ${l.w4.spacing.sm};
  border-top: 1px solid ${l.w4.colors.border};
`,eu=r().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,eg=r().div`
  font-size: 18px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,ey=r().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  margin-top: ${l.w4.spacing.sm};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,ew=r().div`
  display: flex;
  gap: 2px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
`,eb=r().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,ej=r().div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,e$=r().span`
  font-size: 22px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,ev=r().div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};

  span.fin { color: ${u}; }
`,eM=r().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ek=r().label`
  font-size: 13px;
  color: ${l.w4.colors.mainTextMuted};
`,eT=r().input`
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  padding: 0 ${l.w4.spacing.sm};
  height: 44px;
  width: 100%;
  outline: none;
  transition: border-color 120ms ease;

  &:focus {
    border-color: ${l.w4.colors.accent};
    box-shadow: 0 0 0 2px rgba(88,166,255,0.15);
  }
`,eF=r().select`
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 13px;
  padding: 6px ${l.w4.spacing.sm};
  outline: none;
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamilyMono};
  transition: border-color 120ms ease;
  height: 36px;

  &:focus { border-color: ${l.w4.colors.accent}; }
  option { background: ${l.w4.colors.surface}; }
`,eI=r().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eD=r().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,ez=r().div`
  font-size: 13px;
  color: ${l.w4.colors.mainText};
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`,eS=r().div`
  flex: 1;
  height: 8px;
  background: ${l.w4.colors.border};
  border-radius: 4px;
  overflow: hidden;
`,eB=r().div`
  height: 100%;
  border-radius: 4px;
  width: ${({pct:e})=>e}%;
  background: ${({color:e})=>e};
  transition: width 0.4s ease;
`,eE=r().div`
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  color: ${l.w4.colors.mainText};
  width: 72px;
  text-align: right;
  flex-shrink: 0;
`,eA=r().button`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.accent};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 120ms ease;

  &:hover { color: ${l.w4.colors.accentHover??l.w4.colors.accent}; }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
    border-radius: 2px;
  }
`,eC=r().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`,eR=r().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.accent};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
`,eL=r().footer`
  flex-shrink: 0;
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  border-top: 1px solid ${l.w4.colors.border};
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,eP=r().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,eY=r().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
`,eO=r().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`;function e_(e){return e.toLocaleString("pt-PT",{minimumFractionDigits:2,maximumFractionDigits:2})}function eZ(e){return Math.round(e).toLocaleString("pt-PT")}function eq(e,n){let[t,i,s]=e.split("-").map(Number);return new Date(t,i-1,s).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{day:"numeric",month:"short"})}function eU(e){return c.DEFAULT_CATEGORIES.find(n=>n.id===e)??c.DEFAULT_CATEGORIES[c.DEFAULT_CATEGORIES.length-1]}function eG({topBarRight:e}){let[n]=(0,m.Ym)(),t=(0,s.useMemo)(()=>(0,m.Nx)(n,h.A),[n]),{data:a,loaded:r,save:o}=(0,c.useFinance)(),y=a??{...c.EMPTY_FINANCE_DATA},[ei,eI]=(0,s.useState)("overview"),[eD,ez]=(0,s.useState)(()=>(0,c.thisMonthKey)()),[eS,eB]=(0,s.useState)("shared"),eE=(0,s.useRef)(null),[eK,eQ]=(0,s.useState)(""),[eV,eX]=(0,s.useState)(""),[eJ,e0]=(0,s.useState)("shared"),[e4,e1]=(0,s.useState)(!1),e2=(0,s.useRef)(null),[e3,e8]=(0,s.useState)(""),[e5,e6]=(0,s.useState)(""),[e7,e9]=(0,s.useState)(!1),ne=(0,s.useMemo)(()=>(0,c.thisMonthKey)(),[]),nn=(0,s.useMemo)(()=>(0,c.computeWeeklyStatus)(y),[y]),nt=(0,s.useMemo)(()=>(0,c.computeMonthlySummary)(y,eD),[y,eD]),ni=(0,s.useMemo)(()=>(0,c.generateInsightsWithMembers)(y),[y]),ns=(0,s.useMemo)(()=>(0,c.availableMonths)(y),[y]),na=(0,s.useMemo)(()=>(0,c.expensesForMonth)(y.expenses,eD),[y,eD]),nr=(0,s.useMemo)(()=>(0,c.incomeForMonth)(y.income,eD),[y,eD]),no=(0,s.useMemo)(()=>"shared"===eS?na.filter(e=>!e.childId):na.filter(e=>e.childId===eS),[na,eS]),nl=(0,s.useMemo)(()=>(0,c.monthlyTotalByMember)(y,eS,ne),[y,eS,ne]),nc=(0,s.useMemo)(()=>(function(e){let[n,t]=e.split("-").map(Number),i=new Date(n,t-2,1);return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`})(ne),[ne]),nd=(0,s.useMemo)(()=>(0,c.monthlyTotalByMember)(y,eS,nc),[y,eS,nc]),np=(0,s.useMemo)(()=>0===nd?0:Math.round((nl-nd)/nd*100),[nl,nd]),nm=(0,s.useMemo)(()=>{if("shared"===eS)return t("finance.hero.family");let e=y.familyMembers.find(e=>e.id===eS);return e?.name??t("finance.hero.family")},[eS,y.familyMembers,t]),nx=(0,s.useMemo)(()=>{if("shared"===eS)return l.w4.colors.mainTextMuted;let e=y.familyMembers.findIndex(e=>e.id===eS);return -1===e?u:(0,f.a8)(y.familyMembers[e],e)},[eS,y.familyMembers]),nh=(0,s.useMemo)(()=>{let e=new Date;return Array.from({length:6},(n,t)=>{let i=new Date(e);i.setDate(e.getDate()-(5-t)*7-e.getDay()),i.setHours(0,0,0,0);let s=new Date(i);return s.setDate(i.getDate()+7),(0,c.expensesForMember)(y.expenses,eS).filter(e=>{let n=new Date(e.date+"T00:00:00");return n>=i&&n<s}).reduce((e,n)=>e+n.amount,0)})},[y.expenses,eS]),nf=(0,s.useMemo)(()=>(function(e,n){let t=[],i=new Date;for(let e=5;e>=0;e--){let n=new Date(i.getFullYear(),i.getMonth()-e,1);t.push(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`)}let s=e.budget.monthlyBudget;return t.map(t=>{let i="shared"===n?(0,c.expensesForMonth)(e.expenses,t).filter(e=>!e.childId):(0,c.expensesForMonth)(e.expenses,t).filter(e=>e.childId===n),a={};for(let e of i)a[e.categoryId]=(a[e.categoryId]??0)+e.amount;let r=Object.values(a).reduce((e,n)=>e+n,0);return{label:new Date(parseInt(t.slice(0,4)),parseInt(t.slice(5,7))-1,1).toLocaleDateString("pt-PT",{month:"short"}).slice(0,3).toUpperCase(),segments:Object.entries(a).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({id:e,value:n,color:eU(e).color})),over:r>s?r-s:0}})})(y,eS),[y,eS]),nu=(0,s.useMemo)(()=>(function(e,n){let t=new Date,i=[];for(let s=89;s>=0;s--){let a=new Date(t);a.setDate(t.getDate()-s);let r=a.toISOString().slice(0,10),o=r.slice(0,7),l=("shared"===n?e.expenses.filter(e=>e.date===r&&!e.childId):e.expenses.filter(e=>e.date===r&&e.childId===n)).reduce((e,n)=>e+n.amount,0),d=(0,c.incomeForMonth)(e.income,o).reduce((e,n)=>e+n.amount,0)/30;i.push({inc:d,exp:l})}return i})(y,eS),[y,eS]),ng=(0,s.useMemo)(()=>{let e,n;return e=new Date,n=y.expenses.length>0?y.expenses.reduce((e,n)=>e+n.amount,0)/y.expenses.length:20,Array.from({length:91},(t,i)=>{let s=new Date(e);s.setDate(e.getDate()-90+i);let a=s.toISOString().slice(0,10),r=("shared"===eS?y.expenses.filter(e=>e.date===a&&!e.childId):y.expenses.filter(e=>e.date===a&&e.childId===eS)).reduce((e,n)=>e+n.amount,0);if(0===r)return 0;let o=r/n;return o<.5?1:o<1?2:o<2?3:4})},[y,eS]),ny=nn.budget>0?nn.spent/nn.budget*100:0,nw=y.budget.monthlyBudget>0?nl/y.budget.monthlyBudget*100:0,nb=(0,s.useMemo)(()=>{let e=(0,c.parseQuickInput)(eK,y.familyMembers);return e?.description?(0,c.guessCategory)(e.description,y.categoryHints):"other"},[eK,y.categoryHints,y.familyMembers]),nj=eV||nb;(0,s.useEffect)(()=>{let e=(0,c.parseQuickInput)(eK,y.familyMembers);e?.memberId&&e0(e.memberId)},[eK,y.familyMembers]);let n$=(0,s.useCallback)(e=>{e.preventDefault();let n=(0,c.parseQuickInput)(eK,y.familyMembers);if(!n)return;let t=nj||"other",i=n.memberId??("shared"!==eJ?eJ:void 0),s={id:(0,x.z)(),amount:n.amount,date:new Date().toISOString().slice(0,10),categoryId:t,description:n.description||t,type:"daily",childId:i,createdAt:Date.now()},a={...y.categoryHints};n.description&&n.description.toLowerCase().split(/\s+/).forEach(e=>{e.length>2&&(a[e]=t)});let r=[n.description||"",...y.recentDescriptions].filter(Boolean).slice(0,20);o({...y,expenses:[s,...y.expenses],categoryHints:a,recentDescriptions:r}),eQ(""),eX(""),e2.current&&clearTimeout(e2.current),e1(!0),e2.current=setTimeout(()=>e1(!1),2e3)},[eK,nj,eJ,y,o]),nv=(0,s.useCallback)(e=>{o({...y,expenses:y.expenses.filter(n=>n.id!==e)})},[y,o]),nM=(0,s.useCallback)(e=>{o({...y,income:y.income.filter(n=>n.id!==e)})},[y,o]),nk=(0,s.useCallback)(()=>{let e=parseFloat(e3)||y.budget.weeklyBudget,n=parseFloat(e5)||y.budget.monthlyBudget;o({...y,budget:{...y.budget,weeklyBudget:e,monthlyBudget:n}}),e9(!0),setTimeout(()=>e9(!1),2e3)},[e3,e5,y,o]),nT=[{value:"overview",label:t("finance.tab.overview")},{value:"expenses",label:`${t("finance.tab.expenses")} ${no.length>0?`(${no.length})`:""}`},{value:"insights",label:`${t("finance.tab.insights")} ${ni.length>0?`(${ni.length})`:""}`},{value:"settings",label:t("finance.tab.settings")}],nF=Math.floor(nl).toLocaleString("pt-PT"),nI=(nl%1).toFixed(2).slice(1),nD=(()=>{let[e,t]=ne.split("-");return new Date(parseInt(e),parseInt(t)-1,1).toLocaleDateString("pt"===n?"pt-PT":"en-GB",{month:"long"}).toUpperCase()})(),nz=(0,i.jsx)(f.TA,{data:y,activeMemberId:eS,onSelectMember:eB,onSaveData:o,t:t,locale:n}),nS=(0,s.useMemo)(()=>{let e={};for(let n of no)e[n.categoryId]=(e[n.categoryId]??0)+n.amount;return Object.entries(e).sort((e,n)=>n[1]-e[1]).slice(0,6).map(([e,n])=>({id:e,value:n,color:eU(e).color}))},[no]),nB=nS.reduce((e,n)=>e+n.value,0),nE=(0,s.useMemo)(()=>nf.reduce((e,n)=>e+n.segments.reduce((e,n)=>e+n.value,0)+(n.over??0),0),[nf]),nA=nf.length>0?nE/nf.length:0,nC=nf.filter(e=>e.segments.reduce((e,n)=>e+n.value,0)+(e.over??0)>y.budget.monthlyBudget).length;return(0,i.jsx)(l.PE,{title:t("finance.appTitle"),sidebar:nz,topBarRight:e,activeId:eS,children:(0,i.jsxs)(w,{children:[(0,i.jsx)(b,{children:(0,i.jsx)(f.jb,{data:y,activeMemberId:eS,onSelectMember:eB,t:t,locale:n})}),(0,i.jsxs)(j,{children:[(0,i.jsx)($,{children:(0,i.jsx)(d.tU,{tabs:nT,value:ei,onChange:eI,"aria-label":t("finance.nav.ariaLabel")})}),(0,i.jsxs)(v,{children:[0===y.familyMembers.length&&(0,i.jsx)(eR,{children:t("finance.member.empty")}),(0,i.jsxs)(d.$n,{variant:"ghost",style:{height:30},onClick:()=>{eI("overview"),setTimeout(()=>{eE.current?.scrollIntoView({behavior:"smooth",block:"start"})},100)},children:[(0,i.jsx)(d.In,{name:"plus",size:13,"aria-hidden":!0}),t("finance.quickAdd.newExpense")]})]})]}),(0,i.jsxs)(M,{children:["overview"===ei&&(0,i.jsxs)(k,{children:[(0,i.jsx)(T,{span:12,style:{borderLeft:`2px solid ${u}`},children:(0,i.jsxs)(z,{style:{padding:0,border:"none",borderRadius:0,background:"transparent"},children:[(0,i.jsxs)(S,{children:[(0,i.jsxs)(B,{children:[t("finance.hero.spentIn")," ",nD," \xb7 ",nm]}),(0,i.jsxs)(E,{children:[(0,i.jsx)(A,{children:"€"}),(0,i.jsx)(C,{children:nF}),(0,i.jsx)(R,{children:nI})]}),(0,i.jsxs)(L,{children:[(0,i.jsx)(p.Ru,{value:np,format:"pct",decimals:0}),(0,i.jsxs)("span",{children:[t("finance.hero.vsPrevious")," ",(0,c.formatMonthLabel)(nc,n)," \xb7 €",eZ(nd)]})]}),nh.some(e=>e>0)&&(0,i.jsx)("div",{style:{marginTop:4},children:(0,i.jsx)(p.OW,{points:nh,accent:nx,width:320,height:34})})]}),(0,i.jsx)(P,{children:(0,i.jsxs)(Y,{children:[(0,i.jsxs)(O,{children:[(0,i.jsx)(_,{children:t("finance.budget.weekly")}),(0,i.jsxs)(Z,{children:["€",eZ(nn.spent)," ",(0,i.jsxs)(q,{children:["/ €",nn.budget]})]})]}),(0,i.jsx)(p.Xj,{pct:ny,over:ny>100?ny-100:0}),(0,i.jsxs)(U,{children:[(0,i.jsxs)("span",{children:[Math.round(ny),"% ",t("finance.budget.used")]}),(0,i.jsx)("span",{style:{color:nn.remaining<0?g:u},children:nn.remaining>0?`€${eZ(nn.remaining)} ${t("finance.budget.remaining")}`:`€${eZ(Math.abs(nn.remaining))} ${t("finance.budget.over")}`})]}),(0,i.jsxs)(O,{style:{marginTop:14},children:[(0,i.jsx)(_,{children:t("finance.budget.monthly")}),(0,i.jsxs)(Z,{children:["€",eZ(nl)," ",(0,i.jsxs)(q,{children:["/ €",y.budget.monthlyBudget]})]})]}),(0,i.jsx)(p.Xj,{pct:nw,over:nw>100?nw-100:0}),(0,i.jsxs)(U,{children:[(0,i.jsxs)("span",{children:[Math.round(nw),"% ",t("finance.budget.used")]}),(0,i.jsxs)("span",{style:{color:l.w4.colors.mainTextMuted},children:[t("finance.budget.projected")," €",eZ(nl+(nn.projectedTotal-nn.spent))]})]})]})})]})}),(0,i.jsxs)(T,{span:8,children:[(0,i.jsxs)(F,{children:[(0,i.jsx)(I,{children:t("finance.charts.sixMonths")}),(0,i.jsx)(D,{children:(0,i.jsx)(eP,{children:c.DEFAULT_CATEGORIES.slice(0,5).map(e=>(0,i.jsxs)(eY,{children:[(0,i.jsx)(eO,{color:e.color}),"pt"===n?e.labelPt:e.labelEn]},e.id))})})]}),(0,i.jsx)(p.ik,{data:nf,budget:y.budget.monthlyBudget,height:200}),(0,i.jsxs)(ef,{children:[(0,i.jsxs)(eu,{children:[(0,i.jsx)(d.YZ,{children:t("finance.charts.total6m")}),(0,i.jsxs)(eg,{children:["€",eZ(nE)]})]}),(0,i.jsxs)(eu,{children:[(0,i.jsx)(d.YZ,{children:t("finance.charts.monthlyAvg")}),(0,i.jsxs)(eg,{children:["€",eZ(nA)]})]}),(0,i.jsxs)(eu,{children:[(0,i.jsx)(d.YZ,{children:t("finance.charts.monthsOverBudget")}),(0,i.jsxs)(eg,{children:[nC," / ",nf.length]})]}),(0,i.jsxs)(eu,{children:[(0,i.jsx)(d.YZ,{children:t("finance.charts.trend")}),(0,i.jsxs)(eg,{style:{color:np>0?g:u},children:[np>0?"+":"",np,"%"]})]})]})]}),(0,i.jsxs)(T,{span:4,children:[(0,i.jsxs)(F,{children:[(0,i.jsx)(I,{children:t("finance.charts.byCategory")}),(0,i.jsx)(eA,{type:"button",onClick:()=>eI("insights"),children:t("finance.charts.viewAll")})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.md,alignItems:"flex-start",flexWrap:"wrap"},children:[(0,i.jsx)(p.RJ,{data:nS,total:nB,size:110,centerLabel:nD.slice(0,3),centerValue:`€${eZ(nB)}`}),(0,i.jsx)("div",{style:{flex:1,minWidth:120},children:nS.map(e=>{let t=eU(e.id),s=(0,c.expensesForMonth)(y.expenses,nc).filter(n=>"shared"===eS?!n.childId&&n.categoryId===e.id:n.childId===eS&&n.categoryId===e.id).reduce((e,n)=>e+n.amount,0),a=s>0?(e.value-s)/s*100:0;return(0,i.jsxs)(G,{children:[(0,i.jsx)(H,{color:e.color}),(0,i.jsx)(N,{children:"pt"===n?t.labelPt:t.labelEn}),(0,i.jsxs)(W,{children:["€",eZ(e.value)]}),Math.abs(a)>1&&(0,i.jsx)(p.Ru,{value:a,format:"pct",decimals:0})]},e.id)})})]})]}),(0,i.jsxs)(T,{span:5,children:[(0,i.jsxs)(F,{children:[(0,i.jsx)(I,{children:t("finance.charts.cashflow")}),(0,i.jsx)("span",{style:{fontSize:11,fontFamily:l.w4.typography.fontFamilyMono,color:l.w4.colors.mainTextMuted},children:t("finance.charts.cashflowSub")})]}),(0,i.jsx)(p.uj,{data:nu,height:170,legendIn:t("finance.charts.in"),legendOut:t("finance.charts.out")})]}),(0,i.jsxs)(T,{span:4,children:[(0,i.jsx)(F,{children:(0,i.jsx)(I,{children:t("finance.charts.heatmap")})}),(0,i.jsx)(p.RT,{data:ng,locale:n}),(0,i.jsxs)(ey,{children:[(0,i.jsx)("span",{children:t("finance.charts.less")}),(0,i.jsx)(ew,{children:["#1a2420","#2a4535","#4a7a5a","#6fa77a","#7fb77e"].map((e,n)=>(0,i.jsx)("span",{style:{background:e}},n))}),(0,i.jsx)("span",{children:t("finance.charts.more")})]})]}),(0,i.jsxs)(T,{span:3,children:[(0,i.jsx)(F,{children:(0,i.jsx)(I,{children:t("finance.charts.thisWeek")})}),(0,i.jsxs)(eb,{children:[(0,i.jsxs)(ej,{children:[(0,i.jsxs)(e$,{children:["€",eZ(nn.spent)]}),(0,i.jsxs)(q,{children:["/ €",nn.budget]})]}),(0,i.jsx)(p.kl,{spent:nn.spent,budget:nn.budget}),(0,i.jsxs)(ev,{children:[(0,i.jsx)("span",{children:t("finance.charts.ideal")}),(0,i.jsx)("span",{className:"fin",children:t("finance.charts.actual")})]})]})]}),(0,i.jsxs)(T,{span:7,children:[(0,i.jsxs)(F,{children:[(0,i.jsx)(I,{children:t("finance.recent.title")}),y.expenses.length>5&&(0,i.jsx)(eA,{type:"button",onClick:()=>eI("expenses"),children:t("finance.recent.viewAll",{n:no.length})})]}),0===no.length?(0,i.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted,padding:`${l.w4.spacing.sm} 0`},children:t("finance.dashboard.noRecent")}):(0,i.jsx)(K,{"aria-label":t("finance.recent.title"),children:no.slice(0,6).map(e=>(0,i.jsx)(eH,{exp:e,finData:y,locale:n,t:t,onDelete:nv},e.id))})]}),(0,i.jsxs)(T,{span:5,children:[(0,i.jsx)(F,{children:(0,i.jsx)(I,{children:t("finance.insights.title")})}),0===ni.length?(0,i.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:t("insights")??"—"}):(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:ni.map((e,n)=>(0,i.jsxs)(ea,{itype:e.type,children:[(0,i.jsx)(er,{itype:e.type}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:t(e.messageKey,e.params)}),e.memberId&&(()=>{let n=y.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let t=y.familyMembers.indexOf(n);return(0,i.jsxs)(eo,{children:[(0,i.jsx)(d.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,f.a8)(n,t)},size:14}),(0,i.jsx)("span",{children:n.name})]})})()]})]},n))})]}),(0,i.jsxs)(T,{span:12,ref:eE,children:[(0,i.jsx)(d.YZ,{style:{marginBottom:l.w4.spacing.sm},children:t("finance.quickAdd.title")}),(0,i.jsxs)("form",{onSubmit:n$,"aria-label":t("finance.quickAdd.title"),style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.sm},children:[(0,i.jsx)(el,{children:[{id:"shared",name:t("finance.member.shared"),role:"shared",color:void 0},...y.familyMembers.map((e,n)=>({...e,color:(0,f.a8)(e,n)}))].map((e,n)=>{let t="shared"===e.id?l.w4.colors.mainTextMuted:(0,f.a8)(y.familyMembers[n-1]??e,n-1),s={id:e.id,name:e.name,role:e.role,color:"shared"!==e.id?t:void 0};return(0,i.jsxs)(ec,{type:"button",active:eJ===e.id,color:t,onClick:()=>e0(e.id),children:[(0,i.jsx)(d.eu,{member:s,size:18}),e.name]},e.id)})}),(0,i.jsxs)(ed,{children:[(0,i.jsx)(ep,{type:"text",placeholder:t("finance.quickAdd.placeholder"),value:eK,onChange:e=>{eQ(e.target.value),eX("")},"aria-label":t("finance.quickAdd.hint"),autoComplete:"off",inputMode:"decimal"}),(0,i.jsx)(em,{value:eV||nb,onChange:e=>eX(e.target.value),"aria-label":t("finance.quickAdd.category"),children:c.DEFAULT_CATEGORIES.map(e=>(0,i.jsxs)("option",{value:e.id,children:[e.icon," ","pt"===n?e.labelPt:e.labelEn]},e.id))}),(0,i.jsx)(d.$n,{type:"submit",variant:"primary",style:{height:44,whiteSpace:"nowrap"},disabled:!eK.trim(),children:t("finance.quickAdd.add")})]}),(0,i.jsxs)(ex,{visible:e4,"aria-live":"polite","aria-atomic":!0,children:["✓ ",t("finance.quickAdd.added")]}),(0,i.jsx)(eh,{children:t("finance.quickAdd.hint")})]})]})]}),"expenses"===ei&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(eC,{style:{marginBottom:l.w4.spacing.md},children:[(0,i.jsx)(d.YZ,{children:t("finance.tx.title")}),(0,i.jsx)(eF,{value:eD,onChange:e=>ez(e.target.value),"aria-label":t("finance.insights.month"),children:ns.map(e=>(0,i.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,n)},e))})]}),0===no.length&&0===nr.length?(0,i.jsx)(T,{children:(0,i.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:t("finance.tx.empty")})}):(0,i.jsx)(T,{span:12,children:(0,i.jsx)(K,{"aria-label":t("finance.tx.title"),children:[...no.map(e=>({...e,_kind:"expense"})),...nr.map(e=>({...e,_kind:"income"}))].sort((e,n)=>n.createdAt-e.createdAt).map(e=>"expense"===e._kind?(0,i.jsx)(eH,{exp:e,finData:y,locale:n,t:t,onDelete:nv},e.id):(0,i.jsxs)(Q,{children:[(0,i.jsx)(V,{color:u,children:"\uD83D\uDCB0"}),(0,i.jsxs)(X,{children:[(0,i.jsx)(J,{children:e.source}),(0,i.jsxs)(ee,{children:[eq(e.date,n)," \xb7 ",t("finance.dashboard.income")]})]}),(0,i.jsxs)(en,{children:[(0,i.jsxs)(et,{style:{color:u},children:["+€",e_(e.amount)]}),(0,i.jsx)(es,{className:"delete-btn",type:"button",onClick:()=>nM(e.id),"aria-label":`${t("finance.tx.delete")} ${e.source}`,children:"\xd7"})]})]},e.id))})})]}),"insights"===ei&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(eC,{style:{marginBottom:l.w4.spacing.md},children:[(0,i.jsx)(d.YZ,{children:t("finance.insights.title")}),(0,i.jsx)(eF,{value:eD,onChange:e=>ez(e.target.value),"aria-label":t("finance.insights.month"),children:ns.map(e=>(0,i.jsx)("option",{value:e,children:(0,c.formatMonthLabel)(e,n)},e))})]}),(0,i.jsxs)(T,{span:12,style:{marginBottom:l.w4.spacing.md},children:[(0,i.jsx)(d.YZ,{style:{marginBottom:l.w4.spacing.sm},children:t("finance.insights.byCategory")}),(0,i.jsx)(eN,{expenses:no,total:nt.totalExpenses,locale:n})]}),(0,i.jsxs)(T,{span:12,children:[(0,i.jsx)(d.YZ,{style:{marginBottom:l.w4.spacing.sm},children:t("finance.insights.monthlyTrend")}),(0,i.jsx)(eW,{data:y,months:ns.slice(0,6),locale:n,t:t})]}),(0,i.jsxs)(T,{span:12,children:[(0,i.jsx)(d.YZ,{style:{marginBottom:l.w4.spacing.sm},children:t("finance.insights.title")}),0===ni.length?(0,i.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:t("finance.insights.noData")}):(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:ni.map((e,n)=>(0,i.jsxs)(ea,{itype:e.type,children:[(0,i.jsx)(er,{itype:e.type}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:t(e.messageKey,e.params)}),e.memberId&&(()=>{let n=y.familyMembers.find(n=>n.id===e.memberId);if(!n)return null;let t=y.familyMembers.indexOf(n);return(0,i.jsxs)(eo,{children:[(0,i.jsx)(d.eu,{member:{id:n.id,name:n.name,role:n.role,color:(0,f.a8)(n,t)},size:14}),(0,i.jsx)("span",{children:n.name})]})})()]})]},n))})]})]}),"settings"===ei&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(T,{span:12,children:[(0,i.jsx)(d.YZ,{style:{marginBottom:l.w4.spacing.md},children:t("finance.settings.title")}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:l.w4.spacing.md},children:[(0,i.jsxs)(eM,{children:[(0,i.jsx)(ek,{htmlFor:"weekly-budget",children:t("finance.settings.weeklyBudget")}),(0,i.jsx)(eT,{id:"weekly-budget",type:"number",min:"1",placeholder:String(y.budget.weeklyBudget),value:e3,onChange:e=>e8(e.target.value)})]}),(0,i.jsxs)(eM,{children:[(0,i.jsx)(ek,{htmlFor:"monthly-budget",children:t("finance.settings.monthlyBudget")}),(0,i.jsx)(eT,{id:"monthly-budget",type:"number",min:"1",placeholder:String(y.budget.monthlyBudget),value:e5,onChange:e=>e6(e.target.value)})]}),(0,i.jsx)(d.$n,{variant:"primary",onClick:nk,style:{height:44},children:e7?t("finance.settings.saved"):t("finance.settings.save")})]})]})})]}),(0,i.jsxs)(eL,{children:[(0,i.jsx)("span",{children:"Atlantis \xb7 Finan\xe7as \xb7 v0.4"}),(0,i.jsx)("span",{children:"EUR \xb7 Europa/Lisboa"})]})]})})}function eH({exp:e,finData:n,locale:t,t:s,onDelete:a}){let r=eU(e.categoryId),o=n.familyMembers.findIndex(n=>n.id===e.childId),c=o>=0?n.familyMembers[o]:null,p=c?(0,f.a8)(c,o):l.w4.colors.mainTextMuted;return(0,i.jsxs)(Q,{children:[(0,i.jsx)(V,{color:r.color,children:(0,i.jsx)("span",{"aria-hidden":!0,children:r.icon})}),(0,i.jsxs)(X,{children:[(0,i.jsx)(J,{children:e.description||("pt"===t?r.labelPt:r.labelEn)}),(0,i.jsxs)(ee,{children:[c?(0,i.jsx)(d.eu,{member:{id:c.id,name:c.name,role:c.role,color:p},size:14}):null,(0,i.jsx)("span",{children:"pt"===t?r.labelPt:r.labelEn}),(0,i.jsx)("span",{children:"\xb7"}),(0,i.jsx)("span",{children:eq(e.date,t)}),"monthly"===e.type&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{children:"\xb7"}),(0,i.jsx)("span",{children:"mensal"})]})]})]}),(0,i.jsxs)(en,{children:[e.isReimbursable&&(0,i.jsx)(ei,{ok:e.reimbursed,children:s(e.reimbursed?"finance.tx.reimbursed":"finance.tx.reimbursable")}),"recurring"===e.type&&(0,i.jsx)(ei,{children:s("finance.tx.recurring")}),(0,i.jsxs)(et,{children:["−€",e_(e.amount)]}),(0,i.jsx)(es,{className:"delete-btn",type:"button",onClick:()=>a(e.id),"aria-label":`${s("finance.tx.delete")} ${e.description}`,children:"\xd7"})]})]})}function eN({expenses:e,total:n,locale:t}){let a=Object.entries((0,s.useMemo)(()=>{let n={};for(let t of e)n[t.categoryId]=(n[t.categoryId]??0)+t.amount;return n},[e])).map(([e,n])=>({cat:eU(e),amt:n})).sort((e,n)=>n.amt-e.amt);return 0===a.length?(0,i.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:"—"}):(0,i.jsx)(eI,{children:a.map(({cat:e,amt:s})=>{let a=n>0?s/n*100:0;return(0,i.jsxs)(eD,{children:[(0,i.jsxs)(ez,{children:[(0,i.jsx)("span",{"aria-hidden":!0,children:e.icon}),"pt"===t?e.labelPt:e.labelEn]}),(0,i.jsx)(eS,{children:(0,i.jsx)(eB,{pct:a,color:e.color})}),(0,i.jsxs)(eE,{children:["€",s.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.id)})})}function eW({data:e,months:n,locale:t,t:s}){let a=n.map(n=>(0,c.computeMonthlySummary)(e,n)),r=Math.max(...a.map(e=>e.totalExpenses),1);return a.every(e=>0===e.totalExpenses&&0===e.totalIncome)?(0,i.jsx)("div",{style:{fontSize:13,color:l.w4.colors.mainTextMuted},children:s("finance.insights.noData")}):(0,i.jsx)(eI,{children:a.map(e=>{let n=e.totalExpenses/r*100,[,s]=e.month.split("-"),a=new Date(parseInt(e.month.slice(0,4)),parseInt(s)-1,1).toLocaleDateString("pt"===t?"pt-PT":"en-GB",{month:"short"});return(0,i.jsxs)(eD,{children:[(0,i.jsx)(ez,{style:{width:80},children:a}),(0,i.jsx)(eS,{children:(0,i.jsx)(eB,{pct:n,color:l.w4.colors.accent})}),(0,i.jsxs)(eE,{children:["€",e.totalExpenses.toLocaleString("pt-PT",{maximumFractionDigits:0})]})]},e.month)})})}}}]);