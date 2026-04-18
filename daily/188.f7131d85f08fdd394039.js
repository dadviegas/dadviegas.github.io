"use strict";(self.webpackChunk_atlantis_daily=self.webpackChunk_atlantis_daily||[]).push([[188],{188(e,t,o){var i=o(8997),a=o(7359),n=o(3233),s=o(7207),r=o(458),l=o(93),d=o(894),c=o(5609),p=o(536),m=o(8320),u=o(4872),f=o(1365),x=o(8887),g=o(5723);const h=[{id:"brush-teeth",emoji:"🪥",nameEn:"Brush teeth",namePt:"Lavar os dentes",points:5},{id:"make-bed",emoji:"🛏️",nameEn:"Make bed",namePt:"Fazer a cama",points:10},{id:"read",emoji:"📚",nameEn:"Read for 15 min",namePt:"Ler 15 minutos",points:15},{id:"tidy-room",emoji:"🧹",nameEn:"Tidy room",namePt:"Arrumar o quarto",points:15},{id:"set-table",emoji:"🍽️",nameEn:"Help set table",namePt:"Ajudar a pôr a mesa",points:10},{id:"school-bag",emoji:"🎒",nameEn:"Pack school bag",namePt:"Preparar a mochila",points:5},{id:"vegetables",emoji:"🥗",nameEn:"Eat vegetables",namePt:"Comer legumes",points:5},{id:"clothes-away",emoji:"🧤",nameEn:"Put clothes away",namePt:"Guardar a roupa",points:10},{id:"homework",emoji:"📝",nameEn:"Do homework",namePt:"Fazer os trabalhos",points:15},{id:"draw",emoji:"🎨",nameEn:"Draw or paint",namePt:"Desenhar ou pintar",points:10},{id:"be-kind",emoji:"🤗",nameEn:"Be kind to someone",namePt:"Ser gentil com alguém",points:10}];function w(){return{totalPoints:0,totalMissionsCompleted:0,completedToday:[],streakDays:[],lastResetDate:(0,r.dR)(),missions:h,history:{}}}const y=50,$=[{emoji:"🌱",key:"daily.level.recruit"},{emoji:"🧭",key:"daily.level.explorer"},{emoji:"⚔️",key:"daily.level.adventurer"},{emoji:"🦸",key:"daily.level.hero"},{emoji:"🏆",key:"daily.level.champion"},{emoji:"🌟",key:"daily.level.legend"}];function b(e){return Math.min(Math.floor(e/y),$.length-1)}const j=s.keyframes`
  0%   { opacity: 1; transform: translateY(0) scale(1); }
  80%  { opacity: 1; transform: translateY(-48px) scale(1.15); }
  100% { opacity: 0; transform: translateY(-72px) scale(0.9); }
`,v=s.keyframes`
  0%   { background: ${r.w4.colors.surface}; box-shadow: none; }
  30%  { background: ${r.w4.colors.accentMuted}; box-shadow: 0 0 0 2px ${r.w4.colors.accent}; }
  100% { background: ${r.w4.colors.surface}; box-shadow: none; }
`,k=s.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,z=s.keyframes`
  0%   { transform: scale(0.6); }
  60%  { transform: scale(1.25); }
  100% { transform: scale(1); }
`,T=s.keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(251, 146, 60, 0.3); }
  50%      { box-shadow: 0 0 20px rgba(251, 146, 60, 0.6), 0 0 40px rgba(251, 146, 60, 0.2); }
`,S=s.keyframes`
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50%      { transform: translateY(-12px) rotate(5deg); }
`,M=s.keyframes`
  from { width: 0%; }
`,D=s.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,R=s.keyframes`
  0%   { opacity: 0; transform: scale(0.7); }
  60%  { opacity: 1; transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
`,P=s.keyframes`
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.2); }
`,C=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow-y: auto;
  background: radial-gradient(ellipse at 50% 0%, ${r.w4.colors.accentMuted} 0%, ${r.w4.colors.mainBg} 70%);
  padding: ${r.w4.spacing.md} ${r.w4.spacing.md} ${r.w4.spacing.xl};
  gap: ${r.w4.spacing.lg};
  animation: ${k} 0.3s ease;

  @media (min-width: ${r.w4.breakpoints.md}) {
    padding: ${r.w4.spacing.xl};
    max-width: 640px;
    margin: 0 auto;
    width: 100%;
  }
`,E=n.default.div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  padding: ${r.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  position: relative;
  flex-shrink: 0;
`,B=n.default.div`
  font-size: 64px;
  line-height: 1;
  filter: drop-shadow(0 4px 12px ${r.w4.colors.shadowStrong});
`,A=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.accent};
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,F=n.default.div`
  font-size: ${r.w4.typography.fontSizeXl};
  font-weight: 700;
  color: ${r.w4.colors.mainText};
`,Y=n.default.div`
  font-size: ${r.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${r.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.xs};

  span {
    color: ${r.w4.colors.accent};
    font-size: ${r.w4.typography.fontSizeXl};
    font-weight: 700;
  }
`,L=n.default.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,H=n.default.div`
  display: flex;
  justify-content: space-between;
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
`,I=n.default.div`
  width: 100%;
  height: 10px;
  background: ${r.w4.colors.border};
  border-radius: 99px;
  overflow: hidden;
`,N=n.default.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: linear-gradient(90deg, ${r.w4.colors.accent}, ${r.w4.colors.accentHover});
  border-radius: 99px;
  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: ${M} 0.8s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%);
    background-size: 200% 100%;
    opacity: ${({shimmer:e})=>e?1:0};
    animation: ${({shimmer:e})=>e?D:"none"} 0.7s ease forwards;
  }
`,_=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${r.w4.spacing.sm};
  margin-bottom: ${r.w4.spacing.md};
`,X=n.default.h2`
  font-size: ${r.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${r.w4.colors.mainText};
  margin: 0;
`,K=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.sm};
`,U=n.default.div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.md};
  padding: ${r.w4.spacing.md};
  min-height: 64px;
  background: ${({completed:e})=>e?r.w4.colors.accentMuted:r.w4.colors.surface};
  border: 1px solid ${({completed:e})=>e?r.w4.colors.success:r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  animation: ${({flashing:e})=>e?v:"none"} 0.6s ease forwards;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${({completed:e})=>e?r.w4.colors.success:r.w4.colors.accentHover};
  }
`,q=n.default.div`
  width: 28px;
  height: 28px;
  min-width: 28px;
  border-radius: ${r.w4.borderRadius.sm};
  border: 2px solid ${({checked:e})=>e?r.w4.colors.success:r.w4.colors.border};
  background: ${({checked:e})=>e?r.w4.colors.accentMuted:"transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: ${r.w4.colors.success};
  font-size: 16px;
  flex-shrink: 0;
  animation: ${({checked:e})=>e?z:"none"} 0.35s ease;
`,G=n.default.div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  flex: 1;
  min-width: 0;
`,O=n.default.span`
  font-size: 24px;
  line-height: 1;
  flex-shrink: 0;
`,W=n.default.span`
  font-size: ${r.w4.typography.fontSizeBase};
  color: ${({completed:e})=>e?r.w4.colors.mainTextMuted:r.w4.colors.mainText};
  font-weight: 500;
  text-decoration: ${({completed:e})=>e?"line-through":"none"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,J=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  font-weight: 700;
  color: ${({completed:e})=>e?r.w4.colors.success:r.w4.colors.accent};
  background: ${r.w4.colors.accentMuted};
  padding: 4px 10px;
  border-radius: 99px;
  white-space: nowrap;
  flex-shrink: 0;
`,Q=n.default.div`
  display: flex;
  gap: ${r.w4.spacing.xs};
  flex-shrink: 0;
`,V=n.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  cursor: grab;
  color: ${r.w4.colors.mainTextMuted};
  touch-action: none;
  flex-shrink: 0;

  &:hover { color: ${r.w4.colors.mainText}; }
  &:active { cursor: grabbing; }
`,Z=n.default.form`
  display: flex;
  gap: ${r.w4.spacing.sm};
  padding: ${r.w4.spacing.md};
  background: ${r.w4.colors.surface};
  border: 1px dashed ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  animation: ${k} 0.25s ease;
  flex-wrap: wrap;
  align-items: center;
`,ee=n.default.input`
  width: 48px;
  text-align: center;
  padding: 8px;
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.sm};
  color: ${r.w4.colors.mainText};
  font-size: 20px;
  font-family: ${r.w4.typography.fontFamily};

  &:focus {
    outline: none;
    border-color: ${r.w4.colors.accent};
  }
`,te=n.default.input`
  flex: 1;
  min-width: 120px;
  padding: 8px 12px;
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.sm};
  color: ${r.w4.colors.mainText};
  font-size: ${r.w4.typography.fontSizeBase};
  font-family: ${r.w4.typography.fontFamily};

  &:focus {
    outline: none;
    border-color: ${r.w4.colors.accent};
  }
`,oe=n.default.input`
  width: 64px;
  padding: 8px 12px;
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.sm};
  color: ${r.w4.colors.mainText};
  font-size: ${r.w4.typography.fontSizeBase};
  font-family: ${r.w4.typography.fontFamily};

  &:focus {
    outline: none;
    border-color: ${r.w4.colors.accent};
  }
`,ie=n.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${r.w4.spacing.sm};
`,ae=n.default.div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: ${r.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.sm};
`,ne=n.default.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${r.w4.spacing.xs};
`,se=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 6px 4px;
  border-radius: ${r.w4.borderRadius.sm};
  border: 1px solid ${({isToday:e})=>e?r.w4.colors.accent:"transparent"};
  background: ${({ratio:e})=>0===e?"transparent":r.w4.colors.accentMuted};
`,re=n.default.div`
  font-size: 10px;
  font-family: ${r.w4.typography.fontFamilyMono};
  color: ${r.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,le=n.default.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({level:e})=>{switch(e){case 0:return r.w4.colors.border;case 1:return"rgba(251, 146, 60, 0.4)";case 2:return"rgba(251, 146, 60, 0.75)";case 3:return"#fb923c"}}};
  box-shadow: ${({level:e})=>3===e?"0 0 8px rgba(251, 146, 60, 0.55)":"none"};
  transition: background 0.25s ease;
`,de=n.default.div`
  font-size: 10px;
  font-family: ${r.w4.typography.fontFamilyMono};
  color: ${r.w4.colors.mainTextMuted};
`,ce=n.default.div`
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  font-style: italic;
  text-align: center;
`,pe=n.default.div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: ${r.w4.spacing.md} ${r.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${r.w4.spacing.xs};
  text-align: center;
`,me=n.default.div`
  background: linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.06) 100%);
  border: 1px solid rgba(251, 146, 60, 0.4);
  border-radius: ${r.w4.borderRadius.md};
  padding: ${r.w4.spacing.md} ${r.w4.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${r.w4.spacing.xs};
  text-align: center;
  animation: ${T} 3s ease-in-out infinite;
`,ue=n.default.div`
  font-size: ${r.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${r.w4.colors.accent};
`,fe=n.default.div`
  font-size: 32px;
  font-weight: 800;
  color: #fb923c;
  text-shadow: 0 0 12px rgba(251, 146, 60, 0.5);
  line-height: 1;
`,xe=n.default.div`
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  line-height: 1.3;
  white-space: pre-line;
`,ge=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: rgba(251, 146, 60, 0.8);
  font-weight: 600;
  line-height: 1.3;
  white-space: pre-line;
`,he=n.default.div`
  font-size: 20px;
`,we=n.default.div`
  font-size: 32px;
`,ye=n.default.div`
  background: linear-gradient(135deg, ${r.w4.colors.accentMuted} 0%, transparent 100%);
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  padding: ${r.w4.spacing.xl} ${r.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  text-align: center;
`,$e=n.default.div`
  font-size: 52px;
  animation: ${S} 2s ease-in-out infinite;
`,be=n.default.div`
  font-size: ${r.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${r.w4.colors.mainText};
`,je=n.default.div`
  font-size: ${r.w4.typography.fontSizeBase};
  color: ${r.w4.colors.mainTextMuted};
  max-width: 280px;
  line-height: 1.5;
`,ve=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.sm};

  @media (min-width: ${r.w4.breakpoints.md}) {
    flex-direction: row;
  }
`,ke=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.xs};
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: ${r.w4.spacing.md};
  animation: ${k} 0.2s ease;
`,ze=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  text-align: center;
`,Te=n.default.div`
  display: flex;
  gap: ${r.w4.spacing.sm};
`,Se=n.default.div`
  position: fixed;
  pointer-events: none;
  font-size: 18px;
  font-weight: 700;
  color: ${r.w4.colors.accent};
  text-shadow: 0 0 8px ${r.w4.colors.accent};
  z-index: 9999;
  animation: ${j} 1.1s ease forwards;
`,Me=n.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${({exiting:e})=>e?P:R} 0.4s ease forwards;
`,De=n.default.div`
  background: ${r.w4.colors.surface};
  border: 2px solid ${r.w4.colors.accent};
  border-radius: ${r.w4.borderRadius.lg};
  padding: ${r.w4.spacing.xxl} ${r.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${r.w4.spacing.md};
  text-align: center;
  box-shadow: 0 0 40px ${r.w4.colors.shadowStrong};
`,Re=n.default.div`
  font-size: 80px;
  line-height: 1;
`,Pe=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${r.w4.colors.accent};
  font-weight: 700;
`,Ce=n.default.div`
  font-size: ${r.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${r.w4.colors.mainText};
`;function Ee({topBarRight:e}){const[t]=(0,d.Ym)(),o=(0,a.useMemo)(()=>(0,d.Nx)(t,x.A),[t]),i="pt"===t,[n,s]=(0,a.useState)(!1),[j,v]=(0,a.useState)(w),[k,z]=(0,a.useState)(!1),[T,S]=(0,a.useState)(!1),[M,D]=(0,a.useState)(new Set),[R,P]=(0,a.useState)([]),[Z,ee]=(0,a.useState)(null),[te,oe]=(0,a.useState)(!1),[ae,ne]=(0,a.useState)(!1),[se,re]=(0,a.useState)(!1),[le,de]=(0,a.useState)(null),[ce,Ee]=(0,a.useState)(null),Fe=(0,a.useRef)(0);(0,a.useEffect)(()=>{let e=!1;return(0,r.Fy)().then(t=>{if(e)return;const o=(0,r.dR)();if(t){const e=t.missions&&t.missions.length>0?t.missions:h,i={...t.history??{}};!t.history&&t.completedToday.length>0&&(i[t.lastResetDate]=[...t.completedToday]),t.lastResetDate!==o?(t.completedToday.length>0&&(i[t.lastResetDate]=[...t.completedToday]),v({...t,completedToday:i[o]??[],lastResetDate:o,missions:e,history:i})):v({...t,missions:e,history:i,completedToday:i[o]??t.completedToday})}else v(w());s(!0)}),()=>{e=!0}},[]),(0,a.useEffect)(()=>{n&&(0,r.sg)(j)},[j,n]);const Ye=(0,a.useCallback)((e,t)=>{v(o=>{const i=o.completedToday.includes(e.id),a=(0,r.dR)();if(i){const t=Math.max(0,o.totalPoints-e.points),i=o.completedToday.filter(t=>t!==e.id),n=i.length<3?o.streakDays.filter(e=>e!==a):o.streakDays,s={...o.history,[a]:i};return{...o,totalPoints:t,totalMissionsCompleted:Math.max(0,o.totalMissionsCompleted-1),completedToday:i,streakDays:n,history:s}}const n=o.totalPoints+e.points,s=[...o.completedToday,e.id],l=s.length>=3&&!o.streakDays.includes(a)?[...o.streakDays,a]:o.streakDays,d={...o.history,[a]:s};if(D(t=>new Set(t).add(e.id)),setTimeout(()=>{D(t=>{const o=new Set(t);return o.delete(e.id),o})},600),ne(!0),setTimeout(()=>ne(!1),750),navigator.vibrate?.(50),t){const o=t.getBoundingClientRect(),i=++Fe.current;P(t=>[...t,{id:i,value:e.points,x:o.right-60,y:o.top+o.height/2}]),setTimeout(()=>{P(e=>e.filter(e=>e.id!==i))},1200)}const c=b(o.totalPoints),p=b(n);return p>c&&(ee($[p]),oe(!1),setTimeout(()=>{oe(!0),setTimeout(()=>ee(null),450)},2e3)),{...o,totalPoints:n,totalMissionsCompleted:o.totalMissionsCompleted+1,completedToday:s,streakDays:l,history:d}})},[]),Le=(0,a.useCallback)(()=>{v(e=>{const t=(0,r.dR)(),o={...e.history};return delete o[t],{...e,completedToday:[],lastResetDate:t,history:o}}),re(!1)},[]),He=(0,a.useCallback)(e=>{v(t=>({...t,missions:t.missions.filter(t=>t.id!==e),completedToday:t.completedToday.filter(t=>t!==e)}))},[]),Ie=(0,a.useCallback)(e=>{v(t=>({...t,missions:[...t.missions,e]}))},[]),Ne=(0,a.useCallback)((e,t)=>{e!==t&&v(o=>{const i=o.missions,a=i.findIndex(t=>t.id===e),n=i.findIndex(e=>e.id===t);if(a<0||n<0)return o;const s=[...i],[r]=s.splice(a,1);return s.splice(n,0,r),{...o,missions:s}})},[]),_e=b(j.totalPoints),Xe=(Ke=j.totalPoints,Math.floor(Ke/y)+1);var Ke;const Ue=$[_e],qe=function(e){return e%y/y*100}(j.totalPoints),Ge=j.totalPoints%y,Oe=(0,r.DL)(j.streakDays),We=k?j.missions:[...j.missions].sort((e,t)=>(j.completedToday.includes(e.id)?1:0)-(j.completedToday.includes(t.id)?1:0)),Je=0===j.totalPoints&&0===j.completedToday.length&&!k;return(0,g.jsx)(r.PE,{title:o("daily.title"),sidebar:null,topBarRight:e,children:(0,g.jsxs)(C,{children:[(0,g.jsxs)(E,{children:[(0,g.jsx)(B,{children:Ue.emoji}),(0,g.jsx)(A,{children:o("daily.level",{n:Xe})}),(0,g.jsx)(F,{children:o(Ue.key)}),(0,g.jsxs)(Y,{children:[(0,g.jsx)("span",{children:j.totalPoints}),o("daily.points")]}),(0,g.jsxs)(L,{children:[(0,g.jsxs)(H,{children:[(0,g.jsx)("span",{children:o("daily.xp")}),(0,g.jsxs)("span",{children:[Ge," / ",y]})]}),(0,g.jsx)(I,{children:(0,g.jsx)(N,{pct:qe,shimmer:ae})})]})]}),Je&&(0,g.jsxs)(ye,{children:[(0,g.jsx)($e,{children:"🚀"}),(0,g.jsx)(be,{children:o("daily.welcomeTitle")}),(0,g.jsx)(je,{children:o("daily.welcomeBody")})]}),(0,g.jsxs)("div",{children:[(0,g.jsxs)(_,{children:[(0,g.jsx)(X,{children:o("daily.sectionMissions")}),(0,g.jsx)(l.$n,{variant:k?"accent":"ghost",size:"sm",icon:k?(0,g.jsx)(c.A,{size:13}):(0,g.jsx)(p.A,{size:13}),onClick:()=>{z(e=>!e),S(!1)},children:o(k?"daily.done":"daily.edit")})]}),(0,g.jsxs)(K,{children:[We.map(e=>{const t=j.completedToday.includes(e.id),a=M.has(e.id),n=i?e.namePt:e.nameEn;if(k){const t=le===e.id,i=ce===e.id&&le!==e.id;return(0,g.jsxs)(U,{completed:!1,flashing:!1,draggable:!0,style:{opacity:t?.3:1,cursor:"default",boxShadow:i?`0 -2px 0 0 ${r.w4.colors.accent}`:void 0},onDragStart:t=>{de(e.id),t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",e.id)},onDragOver:t=>{t.preventDefault(),t.dataTransfer.dropEffect="move",le&&le!==e.id&&Ee(e.id)},onDragLeave:e=>{e.currentTarget===e.target&&Ee(null)},onDrop:t=>{t.preventDefault(),le&&Ne(le,e.id),de(null),Ee(null)},onDragEnd:()=>{de(null),Ee(null)},children:[(0,g.jsx)(V,{"aria-hidden":!0,children:(0,g.jsx)(m.A,{size:16})}),(0,g.jsxs)(G,{children:[(0,g.jsx)(O,{children:e.emoji}),(0,g.jsx)(W,{completed:!1,children:n})]}),(0,g.jsxs)(J,{completed:!1,children:["+",e.points," pts"]}),(0,g.jsx)(Q,{children:(0,g.jsx)(l.K0,{tone:"danger",onClick:()=>He(e.id),title:o("daily.delete"),"aria-label":o("daily.delete"),children:(0,g.jsx)(u.A,{size:13})})})]},e.id)}return(0,g.jsxs)(U,{completed:t,flashing:a,onClick:t=>Ye(e,t.currentTarget),role:"checkbox","aria-checked":t,tabIndex:0,onKeyDown:t=>{" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),Ye(e,t.currentTarget))},children:[(0,g.jsx)(q,{checked:t,children:t&&"✓"}),(0,g.jsxs)(G,{children:[(0,g.jsx)(O,{children:e.emoji}),(0,g.jsx)(W,{completed:t,children:n})]}),(0,g.jsxs)(J,{completed:t,children:["+",e.points," pts"]})]},e.id)}),k&&(T?(0,g.jsx)(Ae,{t:o,onAdd:e=>{Ie(e),S(!1)},onCancel:()=>S(!1)}):(0,g.jsx)(l.$n,{variant:"ghost",icon:(0,g.jsx)(f.A,{size:13}),onClick:()=>S(!0),children:o("daily.addMission")}))]})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)(_,{children:(0,g.jsx)(X,{children:o("daily.sectionStats")})}),(0,g.jsxs)(ie,{children:[(0,g.jsxs)(pe,{children:[(0,g.jsx)(he,{children:"✅"}),(0,g.jsx)(ue,{children:j.totalMissionsCompleted}),(0,g.jsx)(xe,{children:o("daily.stat.completed")})]}),(0,g.jsxs)(pe,{children:[(0,g.jsx)(he,{children:"⭐"}),(0,g.jsx)(ue,{children:j.totalPoints}),(0,g.jsx)(xe,{children:o("daily.stat.points")})]}),(0,g.jsxs)(me,{children:[(0,g.jsx)(we,{children:"🔥"}),(0,g.jsx)(fe,{children:Oe}),(0,g.jsx)(ge,{children:o("daily.stat.streak")})]})]})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)(_,{children:(0,g.jsx)(X,{children:o("daily.sectionWeek")})}),(0,g.jsx)(Be,{progress:j,total:j.missions.length,locale:t})]}),(0,g.jsx)(ve,{children:se?(0,g.jsxs)(ke,{children:[(0,g.jsx)(ze,{children:o("daily.resetConfirm")}),(0,g.jsxs)(Te,{children:[(0,g.jsx)(l.$n,{variant:"danger",onClick:Le,style:{flex:1},children:o("daily.confirm")}),(0,g.jsx)(l.$n,{variant:"ghost",onClick:()=>re(!1),style:{flex:1},children:o("daily.cancel")})]})]}):(0,g.jsx)(l.$n,{variant:"ghost",onClick:()=>re(!0),children:o("daily.resetDay")})}),R.map(e=>(0,g.jsxs)(Se,{style:{left:e.x,top:e.y},children:["+",e.value]},e.id)),Z&&(0,g.jsx)(Me,{exiting:te,children:(0,g.jsxs)(De,{children:[(0,g.jsx)(Re,{children:Z.emoji}),(0,g.jsx)(Pe,{children:o("daily.levelUp")}),(0,g.jsx)(Ce,{children:o(Z.key)})]})})]})})}function Be({progress:e,total:t,locale:o}){const i=(0,a.useMemo)(()=>(0,d.Nx)("pt"===o?"pt":"en",x.A),[o]),n=(0,a.useMemo)(()=>(0,r.yI)(e,7),[e]),s=(0,r.dR)(),l=new Intl.DateTimeFormat("pt"===o?"pt-PT":"en-US",{weekday:"short"}),c=e=>{if(0===e)return 0;if(0===t)return 1;const o=e/t;return o>=.66?3:o>=.33?2:1};return(0,g.jsxs)(ae,{children:[(0,g.jsx)(ne,{children:n.map(e=>{const o=l.format(new Date(e.date+"T00:00:00")),i=t>0?e.count/t:0;return(0,g.jsxs)(se,{ratio:i,isToday:e.date===s,children:[(0,g.jsx)(re,{children:o}),(0,g.jsx)(le,{level:c(e.count)}),(0,g.jsxs)(de,{children:[e.count,t?`/${t}`:""]})]},e.date)})}),(0,g.jsx)(ce,{children:i("daily.weekHint")})]})}function Ae({t:e,onAdd:t,onCancel:o}){const[i,n]=(0,a.useState)("✨"),[s,r]=(0,a.useState)(""),[d,c]=(0,a.useState)(10);return(0,g.jsxs)(Z,{onSubmit:e=>{e.preventDefault();const o=s.trim();o&&(t({id:`custom-${Date.now().toString(36)}`,emoji:i||"✨",nameEn:o,namePt:o,points:Math.max(1,Math.min(100,Math.round(d)))}),r(""),c(10),n("✨"))},children:[(0,g.jsx)(ee,{value:i,onChange:e=>n(e.target.value),maxLength:4,"aria-label":e("daily.placeholderEmoji")}),(0,g.jsx)(te,{placeholder:e("daily.placeholderName"),value:s,onChange:e=>r(e.target.value),autoFocus:!0}),(0,g.jsx)(oe,{type:"number",min:1,max:100,value:d,onChange:e=>c(Number(e.target.value)),"aria-label":e("daily.placeholderPoints")}),(0,g.jsx)(l.$n,{variant:"primary",size:"sm",type:"submit",children:e("daily.add")}),(0,g.jsx)(l.$n,{variant:"ghost",size:"sm",type:"button",onClick:o,children:e("daily.cancel")})]})}const Fe=document.getElementById("root");if(!Fe)throw new Error("Root element #root not found");(0,i.H)(Fe).render((0,g.jsx)(Ee,{}))},8997(e,t,o){var i=o(8991);t.H=i.createRoot,i.hydrateRoot}}]);
//# sourceMappingURL=188.f7131d85f08fdd394039.js.map