"use strict";(self.webpackChunk_atlantis_daily=self.webpackChunk_atlantis_daily||[]).push([[36],{6036(e,t,o){o.r(t),o.d(t,{default:()=>Ce});var i=o(7359),a=o(3233),s=o(7207),n=o(458),r=o(5488),l=o(894),d=o(5609),c=o(8320),p=o(536),m=o(1365),u=o(4872),f=o(8887),x=o(5723);const g=[{id:"brush-teeth",emoji:"🪥",nameEn:"Brush teeth",namePt:"Lavar os dentes",points:5},{id:"make-bed",emoji:"🛏️",nameEn:"Make bed",namePt:"Fazer a cama",points:10},{id:"read",emoji:"📚",nameEn:"Read for 15 min",namePt:"Ler 15 minutos",points:15},{id:"tidy-room",emoji:"🧹",nameEn:"Tidy room",namePt:"Arrumar o quarto",points:15},{id:"set-table",emoji:"🍽️",nameEn:"Help set table",namePt:"Ajudar a pôr a mesa",points:10},{id:"school-bag",emoji:"🎒",nameEn:"Pack school bag",namePt:"Preparar a mochila",points:5},{id:"vegetables",emoji:"🥗",nameEn:"Eat vegetables",namePt:"Comer legumes",points:5},{id:"clothes-away",emoji:"🧤",nameEn:"Put clothes away",namePt:"Guardar a roupa",points:10},{id:"homework",emoji:"📝",nameEn:"Do homework",namePt:"Fazer os trabalhos",points:15},{id:"draw",emoji:"🎨",nameEn:"Draw or paint",namePt:"Desenhar ou pintar",points:10},{id:"be-kind",emoji:"🤗",nameEn:"Be kind to someone",namePt:"Ser gentil com alguém",points:10}];function h(){return{totalPoints:0,totalMissionsCompleted:0,completedToday:[],streakDays:[],lastResetDate:(0,n.dR)(),missions:g,history:{}}}const w=50,y=[{emoji:"🌱",key:"daily.level.recruit"},{emoji:"🧭",key:"daily.level.explorer"},{emoji:"⚔️",key:"daily.level.adventurer"},{emoji:"🦸",key:"daily.level.hero"},{emoji:"🏆",key:"daily.level.champion"},{emoji:"🌟",key:"daily.level.legend"}];function $(e){return Math.min(Math.floor(e/w),y.length-1)}const b=s.keyframes`
  0%   { opacity: 1; transform: translateY(0) scale(1); }
  80%  { opacity: 1; transform: translateY(-48px) scale(1.15); }
  100% { opacity: 0; transform: translateY(-72px) scale(0.9); }
`,j=s.keyframes`
  0%   { background: ${n.w4.colors.surface}; box-shadow: none; }
  30%  { background: ${n.w4.colors.accentMuted}; box-shadow: 0 0 0 2px ${n.w4.colors.accent}; }
  100% { background: ${n.w4.colors.surface}; box-shadow: none; }
`,v=s.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,k=s.keyframes`
  0%   { transform: scale(0.6); }
  60%  { transform: scale(1.25); }
  100% { transform: scale(1); }
`,z=s.keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(251, 146, 60, 0.3); }
  50%      { box-shadow: 0 0 20px rgba(251, 146, 60, 0.6), 0 0 40px rgba(251, 146, 60, 0.2); }
`,T=s.keyframes`
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50%      { transform: translateY(-12px) rotate(5deg); }
`,S=s.keyframes`
  from { width: 0%; }
`,M=s.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,D=s.keyframes`
  0%   { opacity: 0; transform: scale(0.7); }
  60%  { opacity: 1; transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
`,P=s.keyframes`
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.2); }
`,R=a.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow-y: auto;
  background: radial-gradient(ellipse at 50% 0%, ${n.w4.colors.accentMuted} 0%, ${n.w4.colors.mainBg} 70%);
  padding: ${n.w4.spacing.md} ${n.w4.spacing.md} ${n.w4.spacing.xl};
  gap: ${n.w4.spacing.lg};
  animation: ${v} 0.3s ease;

  @media (min-width: ${n.w4.breakpoints.md}) {
    padding: ${n.w4.spacing.xl};
    max-width: 640px;
    margin: 0 auto;
    width: 100%;
  }
`,C=a.default.div`
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${n.w4.spacing.sm};
  position: relative;
  flex-shrink: 0;
`,E=a.default.div`
  font-size: 64px;
  line-height: 1;
  filter: drop-shadow(0 4px 12px ${n.w4.colors.shadowStrong});
`,B=a.default.div`
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.accent};
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,A=a.default.div`
  font-size: ${n.w4.typography.fontSizeXl};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
`,F=a.default.div`
  font-size: ${n.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${n.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.xs};

  span {
    color: ${n.w4.colors.accent};
    font-size: ${n.w4.typography.fontSizeXl};
    font-weight: 700;
  }
`,Y=a.default.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,L=a.default.div`
  display: flex;
  justify-content: space-between;
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
`,I=a.default.div`
  width: 100%;
  height: 10px;
  background: ${n.w4.colors.border};
  border-radius: 99px;
  overflow: hidden;
`,H=a.default.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: linear-gradient(90deg, ${n.w4.colors.accent}, ${n.w4.colors.accentHover});
  border-radius: 99px;
  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: ${S} 0.8s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%);
    background-size: 200% 100%;
    opacity: ${({shimmer:e})=>e?1:0};
    animation: ${({shimmer:e})=>e?M:"none"} 0.7s ease forwards;
  }
`,N=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${n.w4.spacing.sm};
  margin-bottom: ${n.w4.spacing.md};
`,_=a.default.h2`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  margin: 0;
`,X=a.default.div`
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.sm};
`,K=a.default.div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.md};
  padding: ${n.w4.spacing.md};
  min-height: 64px;
  background: ${({completed:e})=>e?n.w4.colors.accentMuted:n.w4.colors.surface};
  border: 1px solid ${({completed:e})=>e?n.w4.colors.success:n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  animation: ${({flashing:e})=>e?j:"none"} 0.6s ease forwards;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${({completed:e})=>e?n.w4.colors.success:n.w4.colors.accentHover};
  }
`,U=a.default.div`
  width: 28px;
  height: 28px;
  min-width: 28px;
  border-radius: ${n.w4.borderRadius.sm};
  border: 2px solid ${({checked:e})=>e?n.w4.colors.success:n.w4.colors.border};
  background: ${({checked:e})=>e?n.w4.colors.accentMuted:"transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: ${n.w4.colors.success};
  font-size: 16px;
  flex-shrink: 0;
  animation: ${({checked:e})=>e?k:"none"} 0.35s ease;
`,q=a.default.div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.sm};
  flex: 1;
  min-width: 0;
`,G=a.default.span`
  font-size: 24px;
  line-height: 1;
  flex-shrink: 0;
`,O=a.default.span`
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${({completed:e})=>e?n.w4.colors.mainTextMuted:n.w4.colors.mainText};
  font-weight: 500;
  text-decoration: ${({completed:e})=>e?"line-through":"none"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,W=a.default.div`
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 700;
  color: ${({completed:e})=>e?n.w4.colors.success:n.w4.colors.accent};
  background: ${n.w4.colors.accentMuted};
  padding: 4px 10px;
  border-radius: 99px;
  white-space: nowrap;
  flex-shrink: 0;
`,J=a.default.div`
  display: flex;
  gap: ${n.w4.spacing.xs};
  flex-shrink: 0;
`,Q=a.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  cursor: grab;
  color: ${n.w4.colors.mainTextMuted};
  touch-action: none;
  flex-shrink: 0;

  &:hover { color: ${n.w4.colors.mainText}; }
  &:active { cursor: grabbing; }
`,V=a.default.form`
  display: flex;
  gap: ${n.w4.spacing.sm};
  padding: ${n.w4.spacing.md};
  background: ${n.w4.colors.surface};
  border: 1px dashed ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  animation: ${v} 0.25s ease;
  flex-wrap: wrap;
  align-items: center;
`,Z=a.default.input`
  width: 48px;
  text-align: center;
  padding: 8px;
  background: ${n.w4.colors.mainBg};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm};
  color: ${n.w4.colors.mainText};
  font-size: 20px;
  font-family: ${n.w4.typography.fontFamily};

  &:focus {
    outline: none;
    border-color: ${n.w4.colors.accent};
  }
`,ee=a.default.input`
  flex: 1;
  min-width: 120px;
  padding: 8px 12px;
  background: ${n.w4.colors.mainBg};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm};
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};

  &:focus {
    outline: none;
    border-color: ${n.w4.colors.accent};
  }
`,te=a.default.input`
  width: 64px;
  padding: 8px 12px;
  background: ${n.w4.colors.mainBg};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm};
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};

  &:focus {
    outline: none;
    border-color: ${n.w4.colors.accent};
  }
`,oe=a.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${n.w4.spacing.sm};
`,ie=a.default.div`
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.sm};
`,ae=a.default.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${n.w4.spacing.xs};
`,se=a.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 6px 4px;
  border-radius: ${n.w4.borderRadius.sm};
  border: 1px solid ${({isToday:e})=>e?n.w4.colors.accent:"transparent"};
  background: ${({ratio:e})=>0===e?"transparent":n.w4.colors.accentMuted};
`,ne=a.default.div`
  font-size: 10px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,re=a.default.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({level:e})=>{switch(e){case 0:return n.w4.colors.border;case 1:return"rgba(251, 146, 60, 0.4)";case 2:return"rgba(251, 146, 60, 0.75)";case 3:return"#fb923c"}}};
  box-shadow: ${({level:e})=>3===e?"0 0 8px rgba(251, 146, 60, 0.55)":"none"};
  transition: background 0.25s ease;
`,le=a.default.div`
  font-size: 10px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.mainTextMuted};
`,de=a.default.div`
  font-size: 11px;
  color: ${n.w4.colors.mainTextMuted};
  font-style: italic;
  text-align: center;
`,ce=a.default.div`
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.md} ${n.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${n.w4.spacing.xs};
  text-align: center;
`,pe=a.default.div`
  background: linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.06) 100%);
  border: 1px solid rgba(251, 146, 60, 0.4);
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.md} ${n.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${n.w4.spacing.xs};
  text-align: center;
  animation: ${z} 3s ease-in-out infinite;
`,me=a.default.div`
  font-size: ${n.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${n.w4.colors.accent};
`,ue=a.default.div`
  font-size: 32px;
  font-weight: 800;
  color: #fb923c;
  text-shadow: 0 0 12px rgba(251, 146, 60, 0.5);
  line-height: 1;
`,fe=a.default.div`
  font-size: 11px;
  color: ${n.w4.colors.mainTextMuted};
  line-height: 1.3;
  white-space: pre-line;
`,xe=a.default.div`
  font-size: ${n.w4.typography.fontSizeSm};
  color: rgba(251, 146, 60, 0.8);
  font-weight: 600;
  line-height: 1.3;
  white-space: pre-line;
`,ge=a.default.div`
  font-size: 20px;
`,he=a.default.div`
  font-size: 32px;
`,we=a.default.div`
  background: linear-gradient(135deg, ${n.w4.colors.accentMuted} 0%, transparent 100%);
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.xl} ${n.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${n.w4.spacing.sm};
  text-align: center;
`,ye=a.default.div`
  font-size: 52px;
  animation: ${T} 2s ease-in-out infinite;
`,$e=a.default.div`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
`,be=a.default.div`
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainTextMuted};
  max-width: 280px;
  line-height: 1.5;
`,je=a.default.div`
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.sm};

  @media (min-width: ${n.w4.breakpoints.md}) {
    flex-direction: row;
  }
`,ve=a.default.div`
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.xs};
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.md};
  animation: ${v} 0.2s ease;
`,ke=a.default.div`
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  text-align: center;
`,ze=a.default.div`
  display: flex;
  gap: ${n.w4.spacing.sm};
`,Te=a.default.div`
  position: fixed;
  pointer-events: none;
  font-size: 18px;
  font-weight: 700;
  color: ${n.w4.colors.accent};
  text-shadow: 0 0 8px ${n.w4.colors.accent};
  z-index: 9999;
  animation: ${b} 1.1s ease forwards;
`,Se=a.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${({exiting:e})=>e?P:D} 0.4s ease forwards;
`,Me=a.default.div`
  background: ${n.w4.colors.surface};
  border: 2px solid ${n.w4.colors.accent};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.xxl} ${n.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${n.w4.spacing.md};
  text-align: center;
  box-shadow: 0 0 40px ${n.w4.colors.shadowStrong};
`,De=a.default.div`
  font-size: 80px;
  line-height: 1;
`,Pe=a.default.div`
  font-size: ${n.w4.typography.fontSizeSm};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${n.w4.colors.accent};
  font-weight: 700;
`,Re=a.default.div`
  font-size: ${n.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${n.w4.colors.mainText};
`;function Ce({topBarRight:e}){const[t]=(0,l.Ym)(),o=(0,i.useMemo)(()=>(0,l.Nx)(t,f.A),[t]),a="pt"===t,[s,b]=(0,i.useState)(!1),[j,v]=(0,i.useState)(h),[k,z]=(0,i.useState)(!1),[T,S]=(0,i.useState)(!1),[M,D]=(0,i.useState)(new Set),[P,V]=(0,i.useState)([]),[Z,ee]=(0,i.useState)(null),[te,ie]=(0,i.useState)(!1),[ae,se]=(0,i.useState)(!1),[ne,re]=(0,i.useState)(!1),[le,de]=(0,i.useState)(null),[Ce,Ae]=(0,i.useState)(null),Fe=(0,i.useRef)(0);(0,i.useEffect)(()=>{let e=!1;return(0,n.Fy)().then(t=>{if(e)return;const o=(0,n.dR)();if(t){const e=t.missions&&t.missions.length>0?t.missions:g,i={...t.history??{}};!t.history&&t.completedToday.length>0&&(i[t.lastResetDate]=[...t.completedToday]),t.lastResetDate!==o?(t.completedToday.length>0&&(i[t.lastResetDate]=[...t.completedToday]),v({...t,completedToday:i[o]??[],lastResetDate:o,missions:e,history:i})):v({...t,missions:e,history:i,completedToday:i[o]??t.completedToday})}else v(h());b(!0)}),()=>{e=!0}},[]),(0,i.useEffect)(()=>{s&&(0,n.sg)(j)},[j,s]);const Ye=(0,i.useCallback)((e,t)=>{v(o=>{const i=o.completedToday.includes(e.id),a=(0,n.dR)();if(i){const t=Math.max(0,o.totalPoints-e.points),i=o.completedToday.filter(t=>t!==e.id),s=i.length<3?o.streakDays.filter(e=>e!==a):o.streakDays,n={...o.history,[a]:i};return{...o,totalPoints:t,totalMissionsCompleted:Math.max(0,o.totalMissionsCompleted-1),completedToday:i,streakDays:s,history:n}}const s=o.totalPoints+e.points,r=[...o.completedToday,e.id],l=r.length>=3&&!o.streakDays.includes(a)?[...o.streakDays,a]:o.streakDays,d={...o.history,[a]:r};if(D(t=>new Set(t).add(e.id)),setTimeout(()=>{D(t=>{const o=new Set(t);return o.delete(e.id),o})},600),se(!0),setTimeout(()=>se(!1),750),navigator.vibrate?.(50),t){const o=t.getBoundingClientRect(),i=++Fe.current;V(t=>[...t,{id:i,value:e.points,x:o.right-60,y:o.top+o.height/2}]),setTimeout(()=>{V(e=>e.filter(e=>e.id!==i))},1200)}const c=$(o.totalPoints),p=$(s);return p>c&&(ee(y[p]),ie(!1),setTimeout(()=>{ie(!0),setTimeout(()=>ee(null),450)},2e3)),{...o,totalPoints:s,totalMissionsCompleted:o.totalMissionsCompleted+1,completedToday:r,streakDays:l,history:d}})},[]),Le=(0,i.useCallback)(()=>{v(e=>{const t=(0,n.dR)(),o={...e.history};return delete o[t],{...e,completedToday:[],lastResetDate:t,history:o}}),re(!1)},[]),Ie=(0,i.useCallback)(e=>{v(t=>({...t,missions:t.missions.filter(t=>t.id!==e),completedToday:t.completedToday.filter(t=>t!==e)}))},[]),He=(0,i.useCallback)(e=>{v(t=>({...t,missions:[...t.missions,e]}))},[]),Ne=(0,i.useCallback)((e,t)=>{e!==t&&v(o=>{const i=o.missions,a=i.findIndex(t=>t.id===e),s=i.findIndex(e=>e.id===t);if(a<0||s<0)return o;const n=[...i],[r]=n.splice(a,1);return n.splice(s,0,r),{...o,missions:n}})},[]),_e=$(j.totalPoints),Xe=(Ke=j.totalPoints,Math.floor(Ke/w)+1);var Ke;const Ue=y[_e],qe=function(e){return e%w/w*100}(j.totalPoints),Ge=j.totalPoints%w,Oe=(0,n.DL)(j.streakDays),We=k?j.missions:[...j.missions].sort((e,t)=>(j.completedToday.includes(e.id)?1:0)-(j.completedToday.includes(t.id)?1:0)),Je=0===j.totalPoints&&0===j.completedToday.length&&!k;return(0,x.jsx)(n.PE,{title:o("daily.title"),sidebar:null,topBarRight:e,children:(0,x.jsxs)(R,{children:[(0,x.jsxs)(C,{children:[(0,x.jsx)(E,{children:Ue.emoji}),(0,x.jsx)(B,{children:o("daily.level",{n:Xe})}),(0,x.jsx)(A,{children:o(Ue.key)}),(0,x.jsxs)(F,{children:[(0,x.jsx)("span",{children:j.totalPoints}),o("daily.points")]}),(0,x.jsxs)(Y,{children:[(0,x.jsxs)(L,{children:[(0,x.jsx)("span",{children:o("daily.xp")}),(0,x.jsxs)("span",{children:[Ge," / ",w]})]}),(0,x.jsx)(I,{children:(0,x.jsx)(H,{pct:qe,shimmer:ae})})]})]}),Je&&(0,x.jsxs)(we,{children:[(0,x.jsx)(ye,{children:"🚀"}),(0,x.jsx)($e,{children:o("daily.welcomeTitle")}),(0,x.jsx)(be,{children:o("daily.welcomeBody")})]}),(0,x.jsxs)("div",{children:[(0,x.jsxs)(N,{children:[(0,x.jsx)(_,{children:o("daily.sectionMissions")}),(0,x.jsx)(r.$n,{variant:k?"accent":"ghost",size:"sm",icon:k?(0,x.jsx)(d.A,{size:13}):(0,x.jsx)(p.A,{size:13}),onClick:()=>{z(e=>!e),S(!1)},children:o(k?"daily.done":"daily.edit")})]}),(0,x.jsxs)(X,{children:[We.map(e=>{const t=j.completedToday.includes(e.id),i=M.has(e.id),s=a?e.namePt:e.nameEn;if(k){const t=le===e.id,i=Ce===e.id&&le!==e.id;return(0,x.jsxs)(K,{completed:!1,flashing:!1,draggable:!0,style:{opacity:t?.3:1,cursor:"default",boxShadow:i?`0 -2px 0 0 ${n.w4.colors.accent}`:void 0},onDragStart:t=>{de(e.id),t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",e.id)},onDragOver:t=>{t.preventDefault(),t.dataTransfer.dropEffect="move",le&&le!==e.id&&Ae(e.id)},onDragLeave:e=>{e.currentTarget===e.target&&Ae(null)},onDrop:t=>{t.preventDefault(),le&&Ne(le,e.id),de(null),Ae(null)},onDragEnd:()=>{de(null),Ae(null)},children:[(0,x.jsx)(Q,{"aria-hidden":!0,children:(0,x.jsx)(c.A,{size:16})}),(0,x.jsxs)(q,{children:[(0,x.jsx)(G,{children:e.emoji}),(0,x.jsx)(O,{completed:!1,children:s})]}),(0,x.jsxs)(W,{completed:!1,children:["+",e.points," pts"]}),(0,x.jsx)(J,{children:(0,x.jsx)(r.K0,{tone:"danger",onClick:()=>Ie(e.id),title:o("daily.delete"),"aria-label":o("daily.delete"),children:(0,x.jsx)(u.A,{size:13})})})]},e.id)}return(0,x.jsxs)(K,{completed:t,flashing:i,onClick:t=>Ye(e,t.currentTarget),role:"checkbox","aria-checked":t,tabIndex:0,onKeyDown:t=>{" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),Ye(e,t.currentTarget))},children:[(0,x.jsx)(U,{checked:t,children:t&&"✓"}),(0,x.jsxs)(q,{children:[(0,x.jsx)(G,{children:e.emoji}),(0,x.jsx)(O,{completed:t,children:s})]}),(0,x.jsxs)(W,{completed:t,children:["+",e.points," pts"]})]},e.id)}),k&&(T?(0,x.jsx)(Be,{t:o,onAdd:e=>{He(e),S(!1)},onCancel:()=>S(!1)}):(0,x.jsx)(r.$n,{variant:"ghost",icon:(0,x.jsx)(m.A,{size:13}),onClick:()=>S(!0),children:o("daily.addMission")}))]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(N,{children:(0,x.jsx)(_,{children:o("daily.sectionStats")})}),(0,x.jsxs)(oe,{children:[(0,x.jsxs)(ce,{children:[(0,x.jsx)(ge,{children:"✅"}),(0,x.jsx)(me,{children:j.totalMissionsCompleted}),(0,x.jsx)(fe,{children:o("daily.stat.completed")})]}),(0,x.jsxs)(ce,{children:[(0,x.jsx)(ge,{children:"⭐"}),(0,x.jsx)(me,{children:j.totalPoints}),(0,x.jsx)(fe,{children:o("daily.stat.points")})]}),(0,x.jsxs)(pe,{children:[(0,x.jsx)(he,{children:"🔥"}),(0,x.jsx)(ue,{children:Oe}),(0,x.jsx)(xe,{children:o("daily.stat.streak")})]})]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(N,{children:(0,x.jsx)(_,{children:o("daily.sectionWeek")})}),(0,x.jsx)(Ee,{progress:j,total:j.missions.length,locale:t})]}),(0,x.jsx)(je,{children:ne?(0,x.jsxs)(ve,{children:[(0,x.jsx)(ke,{children:o("daily.resetConfirm")}),(0,x.jsxs)(ze,{children:[(0,x.jsx)(r.$n,{variant:"danger",onClick:Le,style:{flex:1},children:o("daily.confirm")}),(0,x.jsx)(r.$n,{variant:"ghost",onClick:()=>re(!1),style:{flex:1},children:o("daily.cancel")})]})]}):(0,x.jsx)(r.$n,{variant:"ghost",onClick:()=>re(!0),children:o("daily.resetDay")})}),P.map(e=>(0,x.jsxs)(Te,{style:{left:e.x,top:e.y},children:["+",e.value]},e.id)),Z&&(0,x.jsx)(Se,{exiting:te,children:(0,x.jsxs)(Me,{children:[(0,x.jsx)(De,{children:Z.emoji}),(0,x.jsx)(Pe,{children:o("daily.levelUp")}),(0,x.jsx)(Re,{children:o(Z.key)})]})})]})})}function Ee({progress:e,total:t,locale:o}){const a=(0,i.useMemo)(()=>(0,l.Nx)("pt"===o?"pt":"en",f.A),[o]),s=(0,i.useMemo)(()=>(0,n.yI)(e,7),[e]),r=(0,n.dR)(),d=new Intl.DateTimeFormat("pt"===o?"pt-PT":"en-US",{weekday:"short"}),c=e=>{if(0===e)return 0;if(0===t)return 1;const o=e/t;return o>=.66?3:o>=.33?2:1};return(0,x.jsxs)(ie,{children:[(0,x.jsx)(ae,{children:s.map(e=>{const o=d.format(new Date(e.date+"T00:00:00")),i=t>0?e.count/t:0;return(0,x.jsxs)(se,{ratio:i,isToday:e.date===r,children:[(0,x.jsx)(ne,{children:o}),(0,x.jsx)(re,{level:c(e.count)}),(0,x.jsxs)(le,{children:[e.count,t?`/${t}`:""]})]},e.date)})}),(0,x.jsx)(de,{children:a("daily.weekHint")})]})}function Be({t:e,onAdd:t,onCancel:o}){const[a,s]=(0,i.useState)("✨"),[n,l]=(0,i.useState)(""),[d,c]=(0,i.useState)(10);return(0,x.jsxs)(V,{onSubmit:e=>{e.preventDefault();const o=n.trim();o&&(t({id:`custom-${Date.now().toString(36)}`,emoji:a||"✨",nameEn:o,namePt:o,points:Math.max(1,Math.min(100,Math.round(d)))}),l(""),c(10),s("✨"))},children:[(0,x.jsx)(Z,{value:a,onChange:e=>s(e.target.value),maxLength:4,"aria-label":e("daily.placeholderEmoji")}),(0,x.jsx)(ee,{placeholder:e("daily.placeholderName"),value:n,onChange:e=>l(e.target.value),autoFocus:!0}),(0,x.jsx)(te,{type:"number",min:1,max:100,value:d,onChange:e=>c(Number(e.target.value)),"aria-label":e("daily.placeholderPoints")}),(0,x.jsx)(r.$n,{variant:"primary",size:"sm",type:"submit",children:e("daily.add")}),(0,x.jsx)(r.$n,{variant:"ghost",size:"sm",type:"button",onClick:o,children:e("daily.cancel")})]})}}}]);
//# sourceMappingURL=36.9e6ee8d7702335a261ea.js.map