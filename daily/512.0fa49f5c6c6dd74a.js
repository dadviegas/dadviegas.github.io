"use strict";(self.webpackChunk_atlantis_daily=self.webpackChunk_atlantis_daily||[]).push([["512"],{8997(e,i,t){var o=t(2727);i.createRoot=o.createRoot,o.hydrateRoot},3611(e,i,t){var o=t(5723),n=t(8997),s=t(7991),r=t(2727),a=t.n(r),l=t(6859),d=t.n(l),c=t(2799),p=t(4764),m=t(5523),x=t(5030),h=t(8170),f=t(948);let g=[{id:"brush-teeth",emoji:"toothbrush",translationKey:"daily.mission.brushTeeth",points:5,frame:"disc",color:p.w4.suites.learn,time:"07:30"},{id:"make-bed",emoji:"bed",translationKey:"daily.mission.makeBed",points:10,frame:"ring",color:p.w4.suites.vida,time:"08:00"},{id:"school-bag",emoji:"backpack",translationKey:"daily.mission.schoolBag",points:5,frame:"disc",color:p.w4.colors.accent,time:"08:15"},{id:"set-table",emoji:"utensils",translationKey:"daily.mission.setTable",points:10,frame:"polaroid",color:p.w4.suites.games,time:"12:30"},{id:"vegetables",emoji:"leaf",translationKey:"daily.mission.vegetables",points:5,frame:"ring",color:p.w4.suites.vida,time:"13:00"},{id:"homework",emoji:"edit",translationKey:"daily.mission.homework",points:15,frame:"hex",color:p.w4.suites.learn,time:"17:00"},{id:"tidy-room",emoji:"broom",translationKey:"daily.mission.tidyRoom",points:15,frame:"hex",color:p.w4.suites.ent,time:"17:30"},{id:"clothes-away",emoji:"shirt",translationKey:"daily.mission.clothesAway",points:10,frame:"stamp",color:p.w4.suites.ent,time:"18:00"},{id:"draw",emoji:"palette",translationKey:"daily.mission.draw",points:10,frame:"polaroid",color:p.w4.suites.lab,time:"18:30"},{id:"read",emoji:"book",translationKey:"daily.mission.read",points:15,frame:"stamp",color:p.w4.suites.lab,time:"19:30"},{id:"be-kind",emoji:"heart",translationKey:"daily.mission.beKind",points:10,frame:"disc",color:p.w4.suites.games}];function u(e){if(!e.time)return"morning";let[i]=e.time.split(":"),t=parseInt(i,10);return t<12?"morning":t<18?"afternoon":"evening"}let y="daily:notifications-asked";async function w(){if(!("u"<typeof window)&&"Notification"in window&&"default"===Notification.permission&&"1"!==await (0,p.qj)(y)){await (0,p.pJ)(y,"1");try{await Notification.requestPermission()}catch{}}}function $(){return{totalPoints:0,totalMissionsCompleted:0,completedToday:[],streakDays:[],lastResetDate:(0,m.todayISO)(),missions:g,history:{}}}let b=["toothbrush","bed","shirt","backpack","broom","utensils","leaf","book","edit","brain","graduation","palette","music","image","film","gamepad","heart","sun","moon","cloud","flame","target","trophy","star","sparkle","zap","clock","calendar","users","user","message","mail","send","globe","map-pin","home"],j=[{emoji:"\uD83C\uDF31",key:"daily.level.recruit"},{emoji:"\uD83E\uDDED",key:"daily.level.explorer"},{emoji:"⚔️",key:"daily.level.adventurer"},{emoji:"\uD83E\uDDB8",key:"daily.level.hero"},{emoji:"\uD83C\uDFC6",key:"daily.level.champion"},{emoji:"\uD83C\uDF1F",key:"daily.level.legend"}];function v(e){return Math.min(Math.floor(e/50),j.length-1)}let k=(0,c.keyframes)`
  0%   { opacity: 1; transform: translateY(0) scale(1); }
  80%  { opacity: 1; transform: translateY(-48px) scale(1.15); }
  100% { opacity: 0; transform: translateY(-72px) scale(0.9); }
`,M=(0,c.keyframes)`
  0%   { box-shadow: none; }
  30%  { box-shadow: 0 0 0 3px ${p.w4.colors.accent}; }
  100% { box-shadow: none; }
`,T=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,z=(0,c.keyframes)`
  0%   { transform: scale(0.6); }
  60%  { transform: scale(1.25); }
  100% { transform: scale(1); }
`,S=(0,c.keyframes)`
  0%, 100% { filter: drop-shadow(0 0 4px ${p.w4.colors.accent}); }
  50%       { filter: drop-shadow(0 0 12px ${p.w4.colors.accent}); }
`,C=(0,c.keyframes)`
  0%   { opacity: 0; transform: scale(0.7); }
  60%  { opacity: 1; transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
`,D=(0,c.keyframes)`
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.2); }
`,R=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,K=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(16px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;(0,c.keyframes)`
  from { width: 0%; }
`,(0,c.keyframes)`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;let I=d().div`
  display: flex;
  flex-direction: column;
  background: radial-gradient(ellipse at 50% 0%, ${p.w4.colors.accentMuted} 0%, ${p.w4.colors.mainBg} 60%);
  padding: ${p.w4.spacing.lg} ${p.w4.spacing.md} ${p.w4.spacing.xl};
  gap: ${p.w4.spacing.lg};
  animation: ${T} 0.3s ease;
  width: 100%;

  @media (min-width: ${p.w4.breakpoints.md}) {
    padding: ${p.w4.spacing.xl};
  }
`,P=d().div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${p.w4.spacing.md};
`,F=d().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,B=d().div`
  font-family: ${p.w4.typography.fontFamilySerif};
  font-size: 28px;
  font-weight: 300;
  color: ${p.w4.colors.mainText};
  line-height: 1.2;
  letter-spacing: -0.01em;
`,E=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${p.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
`,Y=d().div`
  display: flex;
  align-items: center;
  gap: ${p.w4.spacing.xs};
  flex-wrap: wrap;
  flex-shrink: 0;
`,H=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${p.w4.colors.mainTextMuted};
  background: ${p.w4.colors.surface};
  border: 1px solid ${p.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
  white-space: nowrap;
  line-height: 1.4;
`,O=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${p.w4.colors.mainTextMuted};
  background: ${p.w4.colors.surface};
  border: 1px solid ${p.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;
  line-height: 1.4;
`,N=d().div`
  width: 48px;
  height: 5px;
  border-radius: 99px;
  background: ${p.w4.colors.border};
  overflow: hidden;
  position: relative;
`,L=d().div`
  width: ${({pct:e})=>`${e}%`};
  height: 100%;
  background: linear-gradient(
    90deg,
    ${p.w4.colors.accent},
    ${p.w4.colors.accentHover}
  );
  border-radius: inherit;
  transition: width ${p.w4.transitions.slow};
`,U=d().div`
  display: flex;
  flex-direction: column;
  gap: ${p.w4.spacing.lg};

  @media (min-width: ${p.w4.breakpoints.lg}) {
    flex-direction: row;
    align-items: stretch;
  }
`,Z=d().div`
  flex: 1;
  background: ${p.w4.colors.surface};
  border: 1px solid ${p.w4.colors.accent};
  border-radius: ${p.w4.borderRadius.xl};
  padding: ${p.w4.spacing.xl} ${p.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: ${({centered:e=!0})=>e?"center":"stretch"};
  justify-content: ${({centered:e=!0})=>e?"flex-start":"center"};
  gap: ${p.w4.spacing.md};
  position: relative;
  overflow: hidden;
  animation: ${T} 0.35s ease;

  /* Subtle accent gradient top edge */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${p.w4.colors.accent}, transparent);
  }
`,_=d().div`
  align-self: flex-start;
`,A=d().div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 4px 12px ${p.w4.colors.shadowStrong});
`,q=d().div`
  font-size: 22px;
  font-weight: 600;
  color: ${p.w4.colors.mainText};
  text-align: center;
`,W=d().div`
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.mainTextMuted};
  font-family: ${p.w4.typography.fontFamilyMono};
`,J=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${p.w4.colors.mainTextMuted};
  background: ${p.w4.colors.mainBg};
  border: 1px solid ${p.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
`,X=d().div`
  display: flex;
  gap: ${p.w4.spacing.sm};
  width: 100%;

  > * { flex: 1; }
`,G=d().div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  gap: ${p.w4.spacing.lg};
  padding: ${p.w4.spacing.sm} 0;
`,Q=d().div`
  display: flex;
  align-items: center;
  gap: ${p.w4.spacing.lg};
`,V=d().div`
  font-size: 48px;
  line-height: 1;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 8px ${p.w4.colors.shadow});
`,ee=d().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,ei=d().div`
  font-family: ${p.w4.typography.fontFamilySerif};
  font-size: 22px;
  font-weight: 400;
  color: ${p.w4.colors.mainText};
  line-height: 1.2;
`,et=d().div`
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.mainTextMuted};
`,eo=d().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${p.w4.spacing.sm};
`,en=d().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: ${p.w4.spacing.sm} ${p.w4.spacing.md};
  background: ${p.w4.colors.mainBg};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
`,es=d().div`
  font-family: ${p.w4.typography.fontFamilySerif};
  font-size: 22px;
  font-weight: 400;
  color: ${p.w4.colors.mainText};
  line-height: 1;
`,er=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${p.w4.colors.mainTextMuted};
`,ea=d().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p.w4.spacing.md};

  @media (min-width: ${p.w4.breakpoints.lg}) {
    min-width: 220px;
  }
`,el=d().div`
  position: relative;
  width: 180px;
  height: 180px;
  ${({pulsing:e})=>e?(0,c.css)`
          animation: ${S} 0.8s ease;
        `:""}
`,ed=d().div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`,ec=d().div`
  font-family: ${p.w4.typography.fontFamilySerif};
  font-size: 36px;
  font-weight: 400;
  color: ${p.w4.colors.mainText};
  line-height: 1;
`,ep=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${p.w4.colors.mainTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,em=d().div`
  display: flex;
  flex-direction: column;
  gap: ${p.w4.spacing.md};
`,ex=d().div`
  display: flex;
  flex-direction: column;
  gap: ${p.w4.spacing.sm};
`,eh=d().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ef=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${p.w4.colors.mainTextMuted};
`,eg=d().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${p.w4.spacing.sm};

  @media (min-width: ${p.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
    gap: ${p.w4.spacing.md};
  }
`,eu=d().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${p.w4.spacing.sm};

  @media (min-width: ${p.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
    gap: ${p.w4.spacing.md};
  }
`,ey=d().div`
  width: 100%;
  min-width: 0;
  min-height: 116px;
  background: ${({completed:e})=>e?p.w4.colors.accentMuted:p.w4.colors.surface};
  border: 1px solid ${({completed:e,isOver:i})=>i?p.w4.colors.accent:e?p.w4.colors.success:p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  padding: 12px 8px 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    border-color ${p.w4.transitions.base},
    background ${p.w4.transitions.base},
    box-shadow ${p.w4.transitions.base},
    transform ${p.w4.transitions.fast};
  ${({flashing:e})=>e?(0,c.css)`
          animation: ${M} 0.6s ease forwards;
        `:""}
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${({completed:e})=>e?p.w4.colors.success:p.w4.colors.accentHover};
    transform: translateY(-1px);
    box-shadow: ${p.w4.elevation.sm};
  }

  &:focus-visible {
    ${p.w4.focusRing}
  }
`,ew=d().div`
  width: 100%;
  min-width: 0;
  min-height: 116px;
  background: ${p.w4.colors.surface};
  border: 1px solid ${({isOver:e})=>e?p.w4.colors.accent:p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  padding: 12px 8px 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border-color ${p.w4.transitions.base}, background ${p.w4.transitions.fast};
  user-select: none;

  &:hover {
    border-color: ${p.w4.colors.accentHover};
    background: ${p.w4.colors.codeBg};
  }

  &:focus-visible {
    ${p.w4.focusRing}
  }
`,e$=d().div`
  border-radius: 50%;
  background: ${({color:e})=>`${e}28`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid ${({color:e})=>`${e}44`};
`,eb=d().div`
  border-radius: 50%;
  background: transparent;
  border: 2.5px solid ${({color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ej=d().div`
  border-radius: ${p.w4.borderRadius.md};
  background: ${({color:e})=>`${e}28`};
  border: 2px solid ${({color:e})=>`${e}55`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transform: rotate(8deg);
  box-shadow: 2px 2px 6px ${p.w4.colors.shadow};
`,ev=d().div`
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  background: ${({color:e})=>`${e}35`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ek=d().div`
  background: ${p.w4.colors.mainText};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 1px 2px 6px ${p.w4.colors.shadow};

  .inner {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background: ${({color:e})=>`${e}30`};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,eM=d().span`
  font-size: 11px;
  color: ${({completed:e})=>e?p.w4.colors.mainTextMuted:p.w4.colors.mainText};
  font-weight: 500;
  text-decoration: ${({completed:e})=>e?"line-through":"none"};
  text-decoration-color: ${({completed:e})=>e?`${p.w4.colors.success}99`:"transparent"};
  text-decoration-thickness: 1px;
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.3;
  width: 100%;
  flex: 1;
  word-break: break-word;
  hyphens: auto;
`,eT=d().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
  min-height: 14px;
`,ez=d().div`
  font-size: 11px;
  font-weight: 700;
  color: ${({completed:e})=>e?p.w4.colors.success:p.w4.colors.accent};
  background: ${p.w4.colors.accentMuted};
  padding: 2px 6px;
  border-radius: 99px;
  white-space: nowrap;
`,eS=d().div`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${p.w4.colors.success};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: #fff;
  animation: ${z} 0.35s ease;
`,eC=d().span`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${p.w4.colors.mainTextMuted};
  line-height: 1.3;
`,eD=d().button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${p.w4.colors.danger};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 11px;
  cursor: pointer;
  padding: 0;
  opacity: 0.85;
  transition: opacity ${p.w4.transitions.fast};

  &:hover { opacity: 1; }
`,eR=d().div`
  position: absolute;
  top: 6px;
  left: 6px;
  color: ${p.w4.colors.mainTextMuted};
  cursor: grab;
  line-height: 1;

  &:active { cursor: grabbing; }
`,eK=d().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p.w4.spacing.sm};
  margin-bottom: ${p.w4.spacing.md};
`,eI=d().h2`
  font-size: ${p.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${p.w4.colors.mainText};
  margin: 0;
`,eP=d().div`
  background: ${p.w4.colors.surface};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  padding: ${p.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${p.w4.spacing.sm};
`,eF=d().div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  align-items: flex-end;
  height: 48px;
`,eB=d().div`
  min-height: 2px;
  height: ${({heightPct:e})=>Math.max(100*e,2)}%;
  background: ${({isToday:e})=>e?p.w4.colors.accent:p.w4.colors.border};
  border-radius: 2px 2px 0 0;
  transition: height 0.4s ease;
`,eE=d().div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,eY=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({isToday:e})=>e?p.w4.colors.accent:p.w4.colors.mainTextMuted};
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,eH=d().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,eO=d().div`
  display: flex;
  justify-content: flex-end;
`,eN=d().div`
  display: flex;
  flex-direction: column;
  gap: ${p.w4.spacing.xs};
  background: ${p.w4.colors.surface};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  padding: ${p.w4.spacing.md};
  animation: ${T} 0.2s ease;
`,eL=d().div`
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.mainTextMuted};
  text-align: center;
`,eU=d().div`
  display: flex;
  gap: ${p.w4.spacing.sm};
`,eZ=d().div`
  position: fixed;
  pointer-events: none;
  font-size: 18px;
  font-weight: 700;
  color: ${p.w4.colors.accent};
  text-shadow: 0 0 8px ${p.w4.colors.accent};
  z-index: 9999;
  animation: ${k} 1.1s ease forwards;
`,e_=d().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  ${({exiting:e})=>e?(0,c.css)`
          animation: ${D} 0.4s ease forwards;
        `:(0,c.css)`
          animation: ${C} 0.4s ease forwards;
        `}
`,eA=d().div`
  background: ${p.w4.colors.surface};
  border: 2px solid ${p.w4.colors.accent};
  border-radius: ${p.w4.borderRadius.lg};
  padding: ${p.w4.spacing.xxl} ${p.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p.w4.spacing.md};
  text-align: center;
  box-shadow: 0 0 40px ${p.w4.colors.shadowStrong};
`,eq=d().div`
  font-size: 80px;
  line-height: 1;
`,eW=d().div`
  font-size: ${p.w4.typography.fontSizeSm};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${p.w4.colors.accent};
  font-weight: 700;
`,eJ=d().div`
  font-size: ${p.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${p.w4.colors.mainText};
`,eX=d().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${p.w4.zIndex.modal};
  padding: ${p.w4.spacing.md};
  animation: ${R} 0.2s ease;
`,eG=d().div`
  background: ${p.w4.colors.surface};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.xl};
  padding: ${p.w4.spacing.lg};
  width: 100%;
  max-width: 440px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${p.w4.spacing.md};
  box-shadow: ${p.w4.elevation.lg};
  animation: ${K} 0.25s ease;
`,eQ=d().h2`
  font-size: ${p.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${p.w4.colors.mainText};
  margin: 0;
`,eV=d().div`
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.mainTextMuted};
  font-weight: 600;
  margin-bottom: ${p.w4.spacing.xs};
`;d().div`
  display: flex;
  gap: ${p.w4.spacing.sm};
`;let e0=d().input`
  width: 100%;
  padding: 10px 12px;
  background: ${p.w4.colors.mainBg};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  color: ${p.w4.colors.mainText};
  font-size: ${p.w4.typography.fontSizeBase};
  font-family: ${p.w4.typography.fontFamily};
  transition: border-color ${p.w4.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${p.w4.colors.accent};
  }

  &::placeholder {
    color: ${p.w4.colors.mainTextFaint};
  }
`,e4=d().div`
  display: flex;
  align-items: center;
  gap: ${p.w4.spacing.sm};
`,e1=d().input`
  padding: 8px 10px;
  background: ${p.w4.colors.mainBg};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  color: ${p.w4.colors.mainText};
  font-size: ${p.w4.typography.fontSizeBase};
  font-family: ${p.w4.typography.fontFamilyMono};
  color-scheme: dark;
  transition: border-color ${p.w4.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${p.w4.colors.accent};
  }
`;d().input`
  width: 56px;
  text-align: center;
  padding: 10px 8px;
  background: ${p.w4.colors.mainBg};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  color: ${p.w4.colors.mainText};
  font-size: 22px;
  font-family: ${p.w4.typography.fontFamily};
  flex-shrink: 0;
  transition: border-color ${p.w4.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${p.w4.colors.accent};
  }
`;let e2=d().div`
  display: flex;
  gap: ${p.w4.spacing.sm};
  flex-wrap: wrap;
`,e5=d().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
  gap: 6px;
  max-height: 180px;
  overflow-y: auto;
  padding: ${p.w4.spacing.sm};
  background: ${p.w4.colors.mainBg};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
`,e3=d().button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({selected:e})=>e?p.w4.colors.accentMuted:"transparent"};
  border: 1px solid ${({selected:e})=>e?p.w4.colors.accent:"transparent"};
  border-radius: ${p.w4.borderRadius.sm};
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  transition: background ${p.w4.transitions.fast}, border-color ${p.w4.transitions.fast};
  font-family: ${p.w4.typography.fontFamily};

  &:hover {
    background: ${p.w4.colors.surfaceHover};
  }
`,e8=d().button`
  width: 52px;
  height: 52px;
  border-radius: ${p.w4.borderRadius.md};
  border: 2px solid ${({selected:e})=>e?p.w4.colors.accent:p.w4.colors.border};
  background: ${({selected:e})=>e?p.w4.colors.accentMuted:p.w4.colors.mainBg};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color ${p.w4.transitions.fast}, background ${p.w4.transitions.fast};
  padding: 0;

  &:hover {
    border-color: ${p.w4.colors.accentHover};
  }
`,e6=d().div`
  display: flex;
  gap: ${p.w4.spacing.sm};
  flex-wrap: wrap;
`,e9=d().button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  border: 3px solid ${({selected:e})=>e?"#fff":"transparent"};
  cursor: pointer;
  padding: 0;
  outline: 2px solid ${({selected:e,color:i})=>e?i:"transparent"};
  outline-offset: 2px;
  transition: outline-color ${p.w4.transitions.fast}, border-color ${p.w4.transitions.fast};

  &:hover {
    outline-color: ${({color:e})=>e};
  }
`,e7=d().div`
  display: flex;
  gap: 4px;
`,ie=d().button`
  flex: 1;
  padding: 8px 4px;
  border-radius: ${p.w4.borderRadius.sm};
  border: 1px solid ${({selected:e})=>e?p.w4.colors.accent:p.w4.colors.border};
  background: ${({selected:e})=>e?p.w4.colors.accent:p.w4.colors.mainBg};
  color: ${({selected:e})=>e?"#fff":p.w4.colors.mainTextMuted};
  font-size: ${p.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background ${p.w4.transitions.fast}, border-color ${p.w4.transitions.fast}, color ${p.w4.transitions.fast};

  &:hover {
    border-color: ${p.w4.colors.accent};
  }
`,ii=d().div`
  display: flex;
  gap: ${p.w4.spacing.sm};
  justify-content: flex-end;
  padding-top: ${p.w4.spacing.xs};
  border-top: 1px solid ${p.w4.colors.borderSubtle};
`,it=d().div`
  display: flex;
  justify-content: center;
  padding: ${p.w4.spacing.sm} 0;
`,io=d().div`
  width: 120px;
  aspect-ratio: 1 / 1.1;
  background: ${p.w4.colors.mainBg};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${p.w4.spacing.md} ${p.w4.spacing.sm} ${p.w4.spacing.sm};
  position: relative;
  pointer-events: none;
`,is=d().span`
  font-size: 11px;
  color: ${p.w4.colors.mainText};
  font-weight: 500;
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.3;
  width: 100%;
`,ir=d().div`
  font-size: 11px;
  font-weight: 700;
  color: ${p.w4.colors.accent};
  background: ${p.w4.colors.accentMuted};
  padding: 2px 7px;
  border-radius: 99px;
  align-self: flex-end;
`;function ia({value:e,size:i,color:t}){return(0,x.n6)(e)?(0,o.jsx)(x.In,{name:e,size:i,style:{color:t}}):(0,o.jsx)("span",{style:{fontSize:i},children:e})}function il({frame:e,emoji:i,color:t,size:n=64}){let s=Math.round(.5*n),r=(0,o.jsx)(ia,{value:i,size:s,color:t});switch(e){case"ring":return(0,o.jsx)(eb,{color:t,style:{width:n,height:n},children:r});case"stamp":return(0,o.jsx)(ej,{color:t,style:{width:n-4,height:n-4},children:r});case"hex":return(0,o.jsx)(ev,{color:t,style:{width:n,height:n},children:r});case"polaroid":return(0,o.jsx)(ek,{color:t,style:{width:n,height:n+4},children:(0,o.jsx)("div",{className:"inner",children:r})});default:return(0,o.jsx)(e$,{color:t,style:{width:n,height:n},children:r})}}let id=["disc","ring","stamp","hex","polaroid"];function ic({frame:e}){let i=p.w4.colors.accent;switch(e){case"ring":return(0,o.jsx)(eb,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"stamp":return(0,o.jsx)(ej,{color:i,style:{width:28,height:28},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"hex":return(0,o.jsx)(ev,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"polaroid":return(0,o.jsx)(ek,{color:i,style:{width:28,height:32},children:(0,o.jsx)("div",{className:"inner",children:(0,o.jsx)("span",{style:{fontSize:10},children:"✦"})})});default:return(0,o.jsx)(e$,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})})}}let ip=[p.w4.colors.accent,p.w4.colors.success,p.w4.suites.lab,p.w4.suites.vida,p.w4.suites.learn,p.w4.suites.games],im=[5,10,15,20,25];function ix({t:e,mission:i,onSave:t,onClose:n}){let r=!!i,l=i?.translationKey?e(i.translationKey):"",d=i&&im.includes(i.points)?i.points:10,[c,m]=(0,s.useState)(i?.name??l),[h,f]=(0,s.useState)(i?.emoji??"target"),[g,u]=(0,s.useState)(i?.frame??"disc"),[y,$]=(0,s.useState)(i?.color??p.w4.colors.accent),[j,v]=(0,s.useState)(d),[k,M]=(0,s.useState)(i?.time??""),T=(0,s.useRef)(null);(0,s.useEffect)(()=>{T.current?.focus();let e=e=>{"Escape"===e.key&&n()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[n]);let z=()=>{let e=c.trim();if(!e)return;let o=i?.translationKey&&e===l;k&&w(),t({id:i?.id??`custom-${Date.now().toString(36)}`,emoji:h||"target",points:j,frame:g,color:y,...o?{translationKey:i.translationKey}:{name:e},...k?{time:k}:{}})},S=(0,o.jsx)(eX,{onClick:e=>{e.target===e.currentTarget&&n()},children:(0,o.jsxs)(eG,{onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(eQ,{children:e(r?"daily.editMission.title":"daily.newMission.title")}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eV,{children:e("daily.newMission.preview")}),(0,o.jsx)(it,{children:(0,o.jsxs)(io,{children:[(0,o.jsx)(il,{frame:g,emoji:h||"target",color:y,size:52}),(0,o.jsx)(is,{children:c||e("daily.newMission.namePlaceholder")}),(0,o.jsxs)(ir,{children:["+",j," pts"]})]})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eV,{children:e("daily.newMission.name")}),(0,o.jsx)(e0,{ref:T,placeholder:e("daily.newMission.namePlaceholder"),value:c,onChange:e=>m(e.target.value),onKeyDown:e=>{"Enter"===e.key&&c.trim()&&z()}})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eV,{children:e("daily.newMission.icon")}),(0,o.jsx)(e5,{children:b.map(e=>(0,o.jsx)(e3,{type:"button",selected:h===e,onClick:()=>f(e),"aria-label":e,children:(0,o.jsx)(x.In,{name:e,size:20,style:{color:y}})},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eV,{children:e("daily.newMission.frame")}),(0,o.jsx)(e2,{children:id.map(e=>(0,o.jsx)(e8,{type:"button",selected:g===e,onClick:()=>u(e),title:e,children:(0,o.jsx)(ic,{frame:e})},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eV,{children:e("daily.newMission.color")}),(0,o.jsx)(e6,{children:ip.map(e=>(0,o.jsx)(e9,{type:"button",color:e,selected:y===e,onClick:()=>$(e)},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eV,{children:e("daily.newMission.points")}),(0,o.jsx)(e7,{children:im.map(e=>(0,o.jsx)(ie,{type:"button",selected:j===e,onClick:()=>v(e),children:e},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eV,{children:e("daily.newMission.time")}),(0,o.jsxs)(e4,{children:[(0,o.jsx)(e1,{type:"time",value:k,onChange:e=>M(e.target.value)}),k&&(0,o.jsx)(x.$n,{variant:"ghost",size:"sm",onClick:()=>M(""),children:e("daily.newMission.timeClear")})]})]}),(0,o.jsxs)(ii,{children:[(0,o.jsx)(x.$n,{variant:"ghost",size:"sm",onClick:n,children:e("daily.cancel")}),(0,o.jsx)(x.$n,{variant:"primary",size:"sm",disabled:!c.trim(),onClick:z,children:e(r?"daily.editMission.save":"daily.newMission.save")})]})]})});return a().createPortal(S,document.body)}function ih({completed:e,total:i,t,pulsing:n}){let s=2*Math.PI*76,r=i>0?e/i:0;return(0,o.jsx)(ea,{children:(0,o.jsxs)(el,{pulsing:n,children:[(0,o.jsxs)("svg",{width:180,height:180,viewBox:"0 0 180 180","aria-hidden":!0,children:[(0,o.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:p.w4.colors.border,strokeWidth:14}),(0,o.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:p.w4.colors.accent,strokeWidth:14,strokeDasharray:s,strokeDashoffset:s*(1-r),strokeLinecap:"round",transform:"rotate(-90 90 90)",style:{transition:"stroke-dashoffset 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"}})]}),(0,o.jsxs)(ed,{children:[(0,o.jsxs)(ec,{children:[e,"/",i]}),(0,o.jsx)(ep,{children:t("daily.progress.today")})]})]})})}function ig({history:e,total:i,locale:t,t:n}){let s=(0,m.todayISO)(),r=new Intl.DateTimeFormat("pt"===t?"pt-PT":"en-US",{weekday:"short"}),a=Math.max(...e.map(e=>e.count),1);return(0,o.jsxs)(eP,{children:[(0,o.jsx)(eH,{children:(0,o.jsx)(x.YZ,{children:n("daily.sparkline.label")})}),(0,o.jsx)(eF,{children:e.map(e=>{let i=e.count/a;return(0,o.jsx)(eB,{heightPct:i,isToday:e.date===s},e.date)})}),(0,o.jsx)(eE,{children:e.map(e=>{let i=r.format(new Date(e.date+"T00:00:00"));return(0,o.jsx)(eY,{isToday:e.date===s,children:i.slice(0,3)},e.date)})})]})}let iu=document.getElementById("root");if(!iu)throw Error("Root element #root not found");(0,n.createRoot)(iu).render((0,o.jsx)(function({topBarRight:e}){let i,[t]=(0,h.Ym)(),n=(0,s.useMemo)(()=>(0,h.Nx)(t,f.A),[t]),[r]=(0,m.useProfile)(),[a,l]=(0,s.useState)(!1),[d,c]=(0,s.useState)($),[y,w]=(0,s.useState)(!1),[b,k]=(0,s.useState)(!1),[M,T]=(0,s.useState)(null),[z,S]=(0,s.useState)(new Set),[C,D]=(0,s.useState)([]),[R,K]=(0,s.useState)(null),[ea,el]=(0,s.useState)(!1),[ed,ec]=(0,s.useState)(!1),[ep,e$]=(0,s.useState)(null),[eb,ej]=(0,s.useState)(null),[ev,ek]=(0,s.useState)(!1),[eP,eF]=(0,s.useState)([]),eB=(0,s.useRef)(0),eE=function(){let[e,i]=(0,s.useState)(()=>new Date);return(0,s.useEffect)(()=>{let e=setInterval(()=>i(new Date),6e4);return()=>clearInterval(e)},[6e4]),e}();(0,s.useEffect)(()=>{let e=!1;return m.daily.load().then(i=>{if(e)return;let t=(0,m.todayISO)();if(i){let e=i.missions&&i.missions.length>0?i.missions:g,o={...i.history??{}};!i.history&&i.completedToday.length>0&&(o[i.lastResetDate]=[...i.completedToday]),i.lastResetDate!==t?(i.completedToday.length>0&&(o[i.lastResetDate]=[...i.completedToday]),c({...i,completedToday:o[t]??[],lastResetDate:t,missions:e,history:o})):c({...i,missions:e,history:o,completedToday:o[t]??i.completedToday})}else c($());l(!0)}),()=>{e=!0}},[]),(0,s.useEffect)(()=>{a&&m.daily.save(d)},[d,a]);let eY=(0,s.useCallback)((e,i)=>{c(t=>{let o=t.completedToday.includes(e.id),n=(0,m.todayISO)();if(o){let i=Math.max(0,t.totalPoints-e.points),o=t.completedToday.filter(i=>i!==e.id),s=o.length<3?t.streakDays.filter(e=>e!==n):t.streakDays,r={...t.history,[n]:o};return{...t,totalPoints:i,totalMissionsCompleted:Math.max(0,t.totalMissionsCompleted-1),completedToday:o,streakDays:s,history:r}}let s=t.totalPoints+e.points,r=[...t.completedToday,e.id],a=r.length>=3&&!t.streakDays.includes(n)?[...t.streakDays,n]:t.streakDays,l={...t.history,[n]:r};if(S(i=>new Set(i).add(e.id)),setTimeout(()=>{S(i=>{let t=new Set(i);return t.delete(e.id),t})},600),ek(!0),setTimeout(()=>ek(!1),850),navigator.vibrate?.(50),i){let t=i.getBoundingClientRect(),o=++eB.current;D(i=>[...i,{id:o,value:e.points,x:t.right-60,y:t.top+t.height/2}]),setTimeout(()=>{D(e=>e.filter(e=>e.id!==o))},1200)}eF(i=>i.filter(i=>i!==e.id));let d=v(t.totalPoints),c=v(s);return c>d&&(K(j[c]),el(!1),setTimeout(()=>{el(!0),setTimeout(()=>K(null),450)},2e3)),{...t,totalPoints:s,totalMissionsCompleted:t.totalMissionsCompleted+1,completedToday:r,streakDays:a,history:l}})},[]),eH=(0,s.useCallback)(()=>{c(e=>{let i=(0,m.todayISO)(),t={...e.history};return delete t[i],{...e,completedToday:[],lastResetDate:i,history:t}}),eF([]),ec(!1)},[]),eX=(0,s.useCallback)(e=>{c(i=>({...i,missions:i.missions.filter(i=>i.id!==e),completedToday:i.completedToday.filter(i=>i!==e)}))},[]),eG=(0,s.useCallback)(e=>{c(i=>({...i,missions:[...i.missions,e]}))},[]),eQ=(0,s.useCallback)(e=>{c(i=>({...i,missions:i.missions.map(i=>i.id===e.id?e:i)}))},[]),eV=(0,s.useCallback)((e,i)=>{e!==i&&c(t=>{let o=t.missions,n=o.findIndex(i=>i.id===e),s=o.findIndex(e=>e.id===i);if(n<0||s<0)return t;let r=[...o],[a]=r.splice(n,1);return r.splice(s,0,a),{...t,missions:r}})},[]);v(d.totalPoints);let e0=Math.floor(d.totalPoints/50)+1,e4=(0,m.computeStreakFromHistory)(d.history??{}),e1=(0,s.useMemo)(()=>(0,m.getDailyHistory)(d,7),[d]),e2=d.missions.length,e5=(0,s.useMemo)(()=>{let e=new Set(d.missions.map(e=>e.id));return d.completedToday.filter(i=>e.has(i)).length},[d.completedToday,d.missions]),e3=Math.max(0,e2-e5),e8=(0,s.useMemo)(()=>{let e=new Set(d.completedToday);return d.missions.filter(i=>e.has(i.id)).reduce((e,i)=>e+(i.points||0),0)},[d.completedToday,d.missions]),e6=(0,s.useMemo)(()=>{let e,i=d.missions.filter(e=>!d.completedToday.includes(e.id)&&!eP.includes(e.id));if(0===i.length)return null;let t=(e=new Date().getHours())<12?"morning":e<18?"afternoon":"evening",o=i.filter(e=>u(e)===t);if(o.length>0)return o[0];let n="morning"===t?"afternoon":"evening",s=i.filter(e=>u(e)===n);return s.length>0?s[0]:i[0]},[d.missions,d.completedToday,eP]),e9=(0,s.useMemo)(()=>({morning:d.missions.filter(e=>"morning"===u(e)),afternoon:d.missions.filter(e=>"afternoon"===u(e)),evening:d.missions.filter(e=>"evening"===u(e))}),[d.missions]),e7=(i=eE.getHours())<12?"daily.greet.morning":i<18?"daily.greet.afternoon":"daily.greet.evening",ie=(r.interests.length,n("daily.greet.defaultName")),ii=eE.toLocaleTimeString("pt"===t?"pt-PT":"en-US",{hour:"2-digit",minute:"2-digit"}),it=eE.toLocaleDateString("pt"===t?"pt-PT":"en-US",{weekday:"long",day:"numeric",month:"long"}),io=0===e3?n("daily.greet.allDone"):n("daily.greet.remaining",{n:e3,total:e2});function is(e){let i=`daily.chapter.${e}`,t=e9[e];if(0===t.length)return null;let s=t.filter(e=>d.completedToday.includes(e.id)).length;return(0,o.jsxs)(ex,{children:[(0,o.jsxs)(eh,{children:[(0,o.jsx)(x.YZ,{children:n(i)}),(0,o.jsx)(ef,{children:n("daily.chapter.count",{done:s,total:t.length})})]}),(0,o.jsx)(eg,{children:t.map(e=>{let i=d.completedToday.includes(e.id),t=z.has(e.id),s=e.translationKey?n(e.translationKey):e.name??"",r=e.color??p.w4.colors.accent,a=e.frame??"disc";return(0,o.jsxs)(ey,{completed:i,flashing:t,isOver:!1,onClick:i=>eY(e,i.currentTarget),role:"checkbox","aria-checked":i,tabIndex:0,onKeyDown:i=>{(" "===i.key||"Enter"===i.key)&&(i.preventDefault(),eY(e,i.currentTarget))},children:[(0,o.jsx)(il,{frame:a,emoji:e.emoji,color:r,size:40}),(0,o.jsx)(eM,{completed:i,children:s}),(0,o.jsxs)(eT,{children:[e.time?(0,o.jsx)(eC,{children:e.time}):(0,o.jsx)("span",{}),(0,o.jsxs)(ez,{completed:i,children:["+",e.points]})]}),i&&(0,o.jsx)(eS,{children:"✓"})]},e.id)})})]},e)}return(0,o.jsxs)(p.PE,{title:n("daily.title"),sidebar:null,topBarRight:e,children:[(0,o.jsxs)(I,{children:[(0,o.jsxs)(P,{children:[(0,o.jsxs)(F,{children:[(0,o.jsx)(B,{children:n(e7,{name:ie})}),(0,o.jsxs)(E,{children:[it," \xb7 ",ii," \xb7 ",io]})]}),(0,o.jsxs)(Y,{children:[(0,o.jsxs)(H,{children:["\uD83E\uDDED ",n("daily.chip.level",{n:e0})]}),(0,o.jsxs)(O,{title:n("daily.chip.xpHint"),children:[(0,o.jsx)(N,{children:(0,o.jsx)(L,{pct:d.totalPoints%50/50*100})}),(0,o.jsxs)("span",{children:[d.totalPoints%50,"/",50]})]}),(0,o.jsxs)(H,{children:["⭐ ",n("daily.chip.points",{n:d.totalPoints})]}),(0,o.jsxs)(H,{children:["\uD83D\uDD25 ",e4>1?n("daily.chip.streak",{n:e4}):n("daily.chip.streakSingle",{n:e4})]}),(0,o.jsxs)(H,{children:["✅ ",n("daily.chip.done",{n:e5})]})]})]}),(0,o.jsxs)(U,{children:[(0,o.jsxs)(Z,{centered:!!e6,children:[(0,o.jsx)(_,{children:(0,o.jsx)(x.YZ,{children:e6?n("daily.focus.nextUp"):n("daily.focus.dayComplete")})}),e6?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(A,{children:(0,o.jsx)(il,{frame:e6.frame??"disc",emoji:e6.emoji,color:e6.color??p.w4.colors.accent,size:72})}),(0,o.jsx)(q,{children:e6.translationKey?n(e6.translationKey):e6.name??""}),(0,o.jsxs)(W,{children:["+",e6.points," pts"]}),e6.time&&(0,o.jsx)(J,{children:n("daily.focus.timeChip",{time:e6.time})}),(0,o.jsxs)(X,{children:[(0,o.jsx)(x.$n,{variant:"primary",onClick:e=>{eY(e6,e.target.closest("button"))},children:n("daily.focus.markDone")}),(0,o.jsx)(x.$n,{variant:"ghost",onClick:()=>eF(e=>[...e,e6.id]),children:n("daily.focus.skip")})]})]}):(0,o.jsxs)(G,{children:[(0,o.jsxs)(Q,{children:[(0,o.jsx)(V,{children:"\uD83C\uDF1F"}),(0,o.jsxs)(ee,{children:[(0,o.jsx)(ei,{children:n("daily.focus.allDone")}),(0,o.jsx)(et,{children:n("daily.focus.allDoneBody")})]})]}),(0,o.jsxs)(eo,{children:[(0,o.jsxs)(en,{children:[(0,o.jsxs)(es,{children:["+",e8]}),(0,o.jsx)(er,{children:n("daily.summary.pointsToday")})]}),(0,o.jsxs)(en,{children:[(0,o.jsx)(es,{children:e5}),(0,o.jsx)(er,{children:n("daily.summary.missions")})]}),(0,o.jsxs)(en,{children:[(0,o.jsx)(es,{children:e4}),(0,o.jsx)(er,{children:n("daily.summary.streak")})]})]})]})]}),(0,o.jsx)(ih,{completed:e5,total:e2,t:n,pulsing:ev})]}),y?(0,o.jsxs)("div",{children:[(0,o.jsxs)(eK,{children:[(0,o.jsx)(eI,{children:n("daily.sectionMissions")}),(0,o.jsxs)("div",{style:{display:"flex",gap:p.w4.spacing.xs},children:[(0,o.jsx)(x.$n,{variant:"accent",size:"sm",icon:(0,o.jsx)(x.In,{name:"check",size:13}),onClick:()=>{w(!1),k(!1)},children:n("daily.done")}),(0,o.jsx)(x.K0,{onClick:()=>k(!0),title:n("daily.addMission"),"aria-label":n("daily.addMission"),children:(0,o.jsx)(x.In,{name:"plus",size:13})})]})]}),(0,o.jsx)(eu,{children:d.missions.map(e=>{let i=ep===e.id,t=eb===e.id&&ep!==e.id,s=e.translationKey?n(e.translationKey):e.name??"",r=e.color??p.w4.colors.accent,a=e.frame??"disc";return(0,o.jsxs)(ew,{isOver:t,role:"button",tabIndex:0,"aria-label":n("daily.editMission.open"),title:n("daily.editMission.open"),style:{opacity:i?.3:1},onClick:()=>T(e),onKeyDown:i=>{("Enter"===i.key||" "===i.key)&&(i.preventDefault(),T(e))},onDragOver:i=>{i.preventDefault(),i.dataTransfer.dropEffect="move",ep&&ep!==e.id&&ej(e.id)},onDragLeave:e=>{e.currentTarget===e.target&&ej(null)},onDrop:i=>{i.preventDefault(),ep&&eV(ep,e.id),e$(null),ej(null)},children:[(0,o.jsx)(eR,{"aria-hidden":!0,draggable:!0,onClick:e=>e.stopPropagation(),onDragStart:i=>{e$(e.id),i.dataTransfer.effectAllowed="move",i.dataTransfer.setData("text/plain",e.id)},onDragEnd:()=>{e$(null),ej(null)},children:(0,o.jsx)(x.In,{name:"grip-vertical",size:14})}),(0,o.jsx)(il,{frame:a,emoji:e.emoji,color:r,size:40}),(0,o.jsx)(eM,{completed:!1,children:s}),(0,o.jsxs)(eT,{children:[e.time?(0,o.jsx)(eC,{children:e.time}):(0,o.jsx)("span",{}),(0,o.jsxs)(ez,{completed:!1,children:["+",e.points]})]}),(0,o.jsx)(eD,{onClick:i=>{i.stopPropagation(),eX(e.id)},"aria-label":n("daily.delete"),title:n("daily.delete"),children:"\xd7"})]},e.id)})}),(0,o.jsx)("div",{style:{marginTop:p.w4.spacing.sm},children:(0,o.jsx)(x.$n,{variant:"ghost",icon:(0,o.jsx)(x.In,{name:"plus",size:13}),onClick:()=>k(!0),children:n("daily.addMission")})})]}):(0,o.jsxs)(em,{children:[(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,o.jsx)(x.YZ,{children:n("daily.sectionMissions")}),(0,o.jsxs)("div",{style:{display:"flex",gap:p.w4.spacing.xs},children:[(0,o.jsx)(x.$n,{variant:"ghost",size:"sm",icon:(0,o.jsx)(x.In,{name:"pencil",size:13}),onClick:()=>w(!0),children:n("daily.edit")}),(0,o.jsx)(x.K0,{onClick:()=>k(!0),title:n("daily.addMission"),"aria-label":n("daily.addMission"),children:(0,o.jsx)(x.In,{name:"plus",size:13})})]})]}),is("morning"),is("afternoon"),is("evening")]}),(0,o.jsx)(ig,{history:e1,total:e2,locale:t,t:n}),(0,o.jsx)(eO,{children:ed?(0,o.jsxs)(eN,{children:[(0,o.jsx)(eL,{children:n("daily.resetConfirm")}),(0,o.jsxs)(eU,{children:[(0,o.jsx)(x.$n,{variant:"danger",onClick:eH,style:{flex:1},children:n("daily.confirm")}),(0,o.jsx)(x.$n,{variant:"ghost",onClick:()=>ec(!1),style:{flex:1},children:n("daily.cancel")})]})]}):(0,o.jsx)(x.$n,{variant:"ghost",onClick:()=>ec(!0),children:n("daily.resetDay")})})]}),C.map(e=>(0,o.jsxs)(eZ,{style:{left:e.x,top:e.y},children:["+",e.value]},e.id)),R&&(0,o.jsx)(e_,{exiting:ea,children:(0,o.jsxs)(eA,{children:[(0,o.jsx)(eq,{children:R.emoji}),(0,o.jsx)(eW,{children:n("daily.levelUp")}),(0,o.jsx)(eJ,{children:n(R.key)})]})}),(b||M)&&(0,o.jsx)(ix,{t:n,mission:M??void 0,onSave:e=>{M?eQ(e):eG(e),k(!1),T(null)},onClose:()=>{k(!1),T(null)}})]})},{}))}}]);