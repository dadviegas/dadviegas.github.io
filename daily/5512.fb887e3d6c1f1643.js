"use strict";(self.webpackChunk_atlantis_daily=self.webpackChunk_atlantis_daily||[]).push([["5512"],{8997(e,i,t){var o=t(2727);i.createRoot=o.createRoot,o.hydrateRoot},3611(e,i,t){var o=t(5723),s=t(8997),n=t(7991),r=t(2727),a=t.n(r),l=t(6859),d=t.n(l),c=t(2799),p=t(3930),m=t(8294),x=t(2938),h=t(8170),f=t(5609),g=t(1365),u=t(8320),y=t(536),w=t(948);let $=[{id:"brush-teeth",emoji:"toothbrush",translationKey:"daily.mission.brushTeeth",points:5,frame:"disc",color:p.w4.suites.learn,time:"07:30"},{id:"make-bed",emoji:"bed",translationKey:"daily.mission.makeBed",points:10,frame:"ring",color:p.w4.suites.vida,time:"08:00"},{id:"school-bag",emoji:"backpack",translationKey:"daily.mission.schoolBag",points:5,frame:"disc",color:p.w4.colors.accent,time:"08:15"},{id:"set-table",emoji:"utensils",translationKey:"daily.mission.setTable",points:10,frame:"polaroid",color:p.w4.suites.games,time:"12:30"},{id:"vegetables",emoji:"leaf",translationKey:"daily.mission.vegetables",points:5,frame:"ring",color:p.w4.suites.vida,time:"13:00"},{id:"homework",emoji:"edit",translationKey:"daily.mission.homework",points:15,frame:"hex",color:p.w4.suites.learn,time:"17:00"},{id:"tidy-room",emoji:"broom",translationKey:"daily.mission.tidyRoom",points:15,frame:"hex",color:p.w4.suites.ent,time:"17:30"},{id:"clothes-away",emoji:"shirt",translationKey:"daily.mission.clothesAway",points:10,frame:"stamp",color:p.w4.suites.ent,time:"18:00"},{id:"draw",emoji:"palette",translationKey:"daily.mission.draw",points:10,frame:"polaroid",color:p.w4.suites.lab,time:"18:30"},{id:"read",emoji:"book",translationKey:"daily.mission.read",points:15,frame:"stamp",color:p.w4.suites.lab,time:"19:30"},{id:"be-kind",emoji:"heart",translationKey:"daily.mission.beKind",points:10,frame:"disc",color:p.w4.suites.games}];function b(e){if(!e.time)return"morning";let[i]=e.time.split(":"),t=parseInt(i,10);return t<12?"morning":t<18?"afternoon":"evening"}let j="daily:notifications-asked";async function v(){if(!("u"<typeof window)&&"Notification"in window&&"default"===Notification.permission&&"1"!==await (0,p.qj)(j)){await (0,p.pJ)(j,"1");try{await Notification.requestPermission()}catch{}}}function k(){return{totalPoints:0,totalMissionsCompleted:0,completedToday:[],streakDays:[],lastResetDate:(0,m.todayISO)(),missions:$,history:{}}}let M=["toothbrush","bed","shirt","backpack","broom","utensils","leaf","book","edit","brain","graduation","palette","music","image","film","gamepad","heart","sun","moon","cloud","flame","target","trophy","star","sparkle","zap","clock","calendar","users","user","message","mail","send","globe","map-pin","home"],T=[{emoji:"\uD83C\uDF31",key:"daily.level.recruit"},{emoji:"\uD83E\uDDED",key:"daily.level.explorer"},{emoji:"⚔️",key:"daily.level.adventurer"},{emoji:"\uD83E\uDDB8",key:"daily.level.hero"},{emoji:"\uD83C\uDFC6",key:"daily.level.champion"},{emoji:"\uD83C\uDF1F",key:"daily.level.legend"}];function z(e){return Math.min(Math.floor(e/50),T.length-1)}let S=(0,c.keyframes)`
  0%   { opacity: 1; transform: translateY(0) scale(1); }
  80%  { opacity: 1; transform: translateY(-48px) scale(1.15); }
  100% { opacity: 0; transform: translateY(-72px) scale(0.9); }
`,C=(0,c.keyframes)`
  0%   { box-shadow: none; }
  30%  { box-shadow: 0 0 0 3px ${p.w4.colors.accent}; }
  100% { box-shadow: none; }
`,D=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,R=(0,c.keyframes)`
  0%   { transform: scale(0.6); }
  60%  { transform: scale(1.25); }
  100% { transform: scale(1); }
`,K=(0,c.keyframes)`
  0%, 100% { filter: drop-shadow(0 0 4px ${p.w4.colors.accent}); }
  50%       { filter: drop-shadow(0 0 12px ${p.w4.colors.accent}); }
`,P=(0,c.keyframes)`
  0%   { opacity: 0; transform: scale(0.7); }
  60%  { opacity: 1; transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
`,F=(0,c.keyframes)`
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.2); }
`,B=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,I=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(16px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;(0,c.keyframes)`
  from { width: 0%; }
`,(0,c.keyframes)`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;let E=d().div`
  display: flex;
  flex-direction: column;
  background: radial-gradient(ellipse at 50% 0%, ${p.w4.colors.accentMuted} 0%, ${p.w4.colors.mainBg} 60%);
  padding: ${p.w4.spacing.lg} ${p.w4.spacing.md} ${p.w4.spacing.xl};
  gap: ${p.w4.spacing.lg};
  animation: ${D} 0.3s ease;
  width: 100%;

  @media (min-width: ${p.w4.breakpoints.md}) {
    padding: ${p.w4.spacing.xl};
  }
`,Y=d().div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${p.w4.spacing.md};
`,H=d().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,A=d().div`
  font-family: ${p.w4.typography.fontFamilySerif};
  font-size: 28px;
  font-weight: 300;
  color: ${p.w4.colors.mainText};
  line-height: 1.2;
  letter-spacing: -0.01em;
`,O=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${p.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
`,N=d().div`
  display: flex;
  align-items: center;
  gap: ${p.w4.spacing.xs};
  flex-wrap: wrap;
  flex-shrink: 0;
`,L=d().div`
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
`,U=d().div`
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
`,Z=d().div`
  width: 48px;
  height: 5px;
  border-radius: 99px;
  background: ${p.w4.colors.border};
  overflow: hidden;
  position: relative;
`,_=d().div`
  width: ${({pct:e})=>`${e}%`};
  height: 100%;
  background: linear-gradient(
    90deg,
    ${p.w4.colors.accent},
    ${p.w4.colors.accentHover}
  );
  border-radius: inherit;
  transition: width ${p.w4.transitions.slow};
`,q=d().div`
  display: flex;
  flex-direction: column;
  gap: ${p.w4.spacing.lg};

  @media (min-width: ${p.w4.breakpoints.lg}) {
    flex-direction: row;
    align-items: stretch;
  }
`,W=d().div`
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
  animation: ${D} 0.35s ease;

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
`,J=d().div`
  align-self: flex-start;
`,X=d().div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 4px 12px ${p.w4.colors.shadowStrong});
`,G=d().div`
  font-size: 22px;
  font-weight: 600;
  color: ${p.w4.colors.mainText};
  text-align: center;
`,Q=d().div`
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.mainTextMuted};
  font-family: ${p.w4.typography.fontFamilyMono};
`,V=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${p.w4.colors.mainTextMuted};
  background: ${p.w4.colors.mainBg};
  border: 1px solid ${p.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
`,ee=d().div`
  display: flex;
  gap: ${p.w4.spacing.sm};
  width: 100%;

  > * { flex: 1; }
`,ei=d().div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  gap: ${p.w4.spacing.lg};
  padding: ${p.w4.spacing.sm} 0;
`,et=d().div`
  display: flex;
  align-items: center;
  gap: ${p.w4.spacing.lg};
`,eo=d().div`
  font-size: 48px;
  line-height: 1;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 8px ${p.w4.colors.shadow});
`,es=d().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,en=d().div`
  font-family: ${p.w4.typography.fontFamilySerif};
  font-size: 22px;
  font-weight: 400;
  color: ${p.w4.colors.mainText};
  line-height: 1.2;
`,er=d().div`
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.mainTextMuted};
`,ea=d().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${p.w4.spacing.sm};
`,el=d().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: ${p.w4.spacing.sm} ${p.w4.spacing.md};
  background: ${p.w4.colors.mainBg};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
`,ed=d().div`
  font-family: ${p.w4.typography.fontFamilySerif};
  font-size: 22px;
  font-weight: 400;
  color: ${p.w4.colors.mainText};
  line-height: 1;
`,ec=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${p.w4.colors.mainTextMuted};
`,ep=d().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p.w4.spacing.md};

  @media (min-width: ${p.w4.breakpoints.lg}) {
    min-width: 220px;
  }
`,em=d().div`
  position: relative;
  width: 180px;
  height: 180px;
  ${({pulsing:e})=>e?(0,c.css)`
          animation: ${K} 0.8s ease;
        `:""}
`,ex=d().div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`,eh=d().div`
  font-family: ${p.w4.typography.fontFamilySerif};
  font-size: 36px;
  font-weight: 400;
  color: ${p.w4.colors.mainText};
  line-height: 1;
`,ef=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${p.w4.colors.mainTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,eg=d().div`
  display: flex;
  flex-direction: column;
  gap: ${p.w4.spacing.md};
`,eu=d().div`
  display: flex;
  flex-direction: column;
  gap: ${p.w4.spacing.sm};
`,ey=d().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ew=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${p.w4.colors.mainTextMuted};
`,e$=d().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${p.w4.spacing.sm};

  @media (min-width: ${p.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
    gap: ${p.w4.spacing.md};
  }
`,eb=d().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${p.w4.spacing.sm};

  @media (min-width: ${p.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
    gap: ${p.w4.spacing.md};
  }
`,ej=d().div`
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
          animation: ${C} 0.6s ease forwards;
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
`,ev=d().div`
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
`,ek=d().div`
  border-radius: 50%;
  background: ${({color:e})=>`${e}28`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid ${({color:e})=>`${e}44`};
`,eM=d().div`
  border-radius: 50%;
  background: transparent;
  border: 2.5px solid ${({color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,eT=d().div`
  border-radius: ${p.w4.borderRadius.md};
  background: ${({color:e})=>`${e}28`};
  border: 2px solid ${({color:e})=>`${e}55`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transform: rotate(8deg);
  box-shadow: 2px 2px 6px ${p.w4.colors.shadow};
`,ez=d().div`
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  background: ${({color:e})=>`${e}35`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,eS=d().div`
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
`,eC=d().span`
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
`,eD=d().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
  min-height: 14px;
`,eR=d().div`
  font-size: 11px;
  font-weight: 700;
  color: ${({completed:e})=>e?p.w4.colors.success:p.w4.colors.accent};
  background: ${p.w4.colors.accentMuted};
  padding: 2px 6px;
  border-radius: 99px;
  white-space: nowrap;
`,eK=d().div`
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
  animation: ${R} 0.35s ease;
`,eP=d().span`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${p.w4.colors.mainTextMuted};
  line-height: 1.3;
`,eF=d().button`
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
`,eB=d().div`
  position: absolute;
  top: 6px;
  left: 6px;
  color: ${p.w4.colors.mainTextMuted};
  cursor: grab;
  line-height: 1;

  &:active { cursor: grabbing; }
`,eI=d().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p.w4.spacing.sm};
  margin-bottom: ${p.w4.spacing.md};
`,eE=d().h2`
  font-size: ${p.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${p.w4.colors.mainText};
  margin: 0;
`,eY=d().div`
  background: ${p.w4.colors.surface};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  padding: ${p.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${p.w4.spacing.sm};
`,eH=d().div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  align-items: flex-end;
  height: 48px;
`,eA=d().div`
  min-height: 2px;
  height: ${({heightPct:e})=>Math.max(100*e,2)}%;
  background: ${({isToday:e})=>e?p.w4.colors.accent:p.w4.colors.border};
  border-radius: 2px 2px 0 0;
  transition: height 0.4s ease;
`,eO=d().div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,eN=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({isToday:e})=>e?p.w4.colors.accent:p.w4.colors.mainTextMuted};
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,eL=d().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,eU=d().div`
  display: flex;
  justify-content: flex-end;
`,eZ=d().div`
  display: flex;
  flex-direction: column;
  gap: ${p.w4.spacing.xs};
  background: ${p.w4.colors.surface};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  padding: ${p.w4.spacing.md};
  animation: ${D} 0.2s ease;
`,e_=d().div`
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.mainTextMuted};
  text-align: center;
`,eq=d().div`
  display: flex;
  gap: ${p.w4.spacing.sm};
`,eW=d().div`
  position: fixed;
  pointer-events: none;
  font-size: 18px;
  font-weight: 700;
  color: ${p.w4.colors.accent};
  text-shadow: 0 0 8px ${p.w4.colors.accent};
  z-index: 9999;
  animation: ${S} 1.1s ease forwards;
`,eJ=d().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  ${({exiting:e})=>e?(0,c.css)`
          animation: ${F} 0.4s ease forwards;
        `:(0,c.css)`
          animation: ${P} 0.4s ease forwards;
        `}
`,eX=d().div`
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
`,eG=d().div`
  font-size: 80px;
  line-height: 1;
`,eQ=d().div`
  font-size: ${p.w4.typography.fontSizeSm};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${p.w4.colors.accent};
  font-weight: 700;
`,eV=d().div`
  font-size: ${p.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${p.w4.colors.mainText};
`,e0=d().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${p.w4.zIndex.modal};
  padding: ${p.w4.spacing.md};
  animation: ${B} 0.2s ease;
`,e4=d().div`
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
  animation: ${I} 0.25s ease;
`,e1=d().h2`
  font-size: ${p.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${p.w4.colors.mainText};
  margin: 0;
`,e2=d().div`
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.mainTextMuted};
  font-weight: 600;
  margin-bottom: ${p.w4.spacing.xs};
`;d().div`
  display: flex;
  gap: ${p.w4.spacing.sm};
`;let e5=d().input`
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
`,e3=d().div`
  display: flex;
  align-items: center;
  gap: ${p.w4.spacing.sm};
`,e8=d().input`
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
`;let e6=d().div`
  display: flex;
  gap: ${p.w4.spacing.sm};
  flex-wrap: wrap;
`,e9=d().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
  gap: 6px;
  max-height: 180px;
  overflow-y: auto;
  padding: ${p.w4.spacing.sm};
  background: ${p.w4.colors.mainBg};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
`,e7=d().button`
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
`,ie=d().button`
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
`,ii=d().div`
  display: flex;
  gap: ${p.w4.spacing.sm};
  flex-wrap: wrap;
`,it=d().button`
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
`,io=d().div`
  display: flex;
  gap: 4px;
`,is=d().button`
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
`,ir=d().div`
  display: flex;
  gap: ${p.w4.spacing.sm};
  justify-content: flex-end;
  padding-top: ${p.w4.spacing.xs};
  border-top: 1px solid ${p.w4.colors.borderSubtle};
`,ia=d().div`
  display: flex;
  justify-content: center;
  padding: ${p.w4.spacing.sm} 0;
`,il=d().div`
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
`,id=d().span`
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
`,ic=d().div`
  font-size: 11px;
  font-weight: 700;
  color: ${p.w4.colors.accent};
  background: ${p.w4.colors.accentMuted};
  padding: 2px 7px;
  border-radius: 99px;
  align-self: flex-end;
`;function ip({value:e,size:i,color:t}){return(0,x.n6)(e)?(0,o.jsx)(x.In,{name:e,size:i,style:{color:t}}):(0,o.jsx)("span",{style:{fontSize:i},children:e})}function im({frame:e,emoji:i,color:t,size:s=64}){let n=Math.round(.5*s),r=(0,o.jsx)(ip,{value:i,size:n,color:t});switch(e){case"ring":return(0,o.jsx)(eM,{color:t,style:{width:s,height:s},children:r});case"stamp":return(0,o.jsx)(eT,{color:t,style:{width:s-4,height:s-4},children:r});case"hex":return(0,o.jsx)(ez,{color:t,style:{width:s,height:s},children:r});case"polaroid":return(0,o.jsx)(eS,{color:t,style:{width:s,height:s+4},children:(0,o.jsx)("div",{className:"inner",children:r})});default:return(0,o.jsx)(ek,{color:t,style:{width:s,height:s},children:r})}}let ix=["disc","ring","stamp","hex","polaroid"];function ih({frame:e}){let i=p.w4.colors.accent;switch(e){case"ring":return(0,o.jsx)(eM,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"stamp":return(0,o.jsx)(eT,{color:i,style:{width:28,height:28},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"hex":return(0,o.jsx)(ez,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"polaroid":return(0,o.jsx)(eS,{color:i,style:{width:28,height:32},children:(0,o.jsx)("div",{className:"inner",children:(0,o.jsx)("span",{style:{fontSize:10},children:"✦"})})});default:return(0,o.jsx)(ek,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})})}}let ig=[p.w4.colors.accent,p.w4.colors.success,p.w4.suites.lab,p.w4.suites.vida,p.w4.suites.learn,p.w4.suites.games],iu=[5,10,15,20,25];function iy({t:e,mission:i,onSave:t,onClose:s}){let r=!!i,l=i?.translationKey?e(i.translationKey):"",d=i&&iu.includes(i.points)?i.points:10,[c,m]=(0,n.useState)(i?.name??l),[h,f]=(0,n.useState)(i?.emoji??"target"),[g,u]=(0,n.useState)(i?.frame??"disc"),[y,w]=(0,n.useState)(i?.color??p.w4.colors.accent),[$,b]=(0,n.useState)(d),[j,k]=(0,n.useState)(i?.time??""),T=(0,n.useRef)(null);(0,n.useEffect)(()=>{T.current?.focus();let e=e=>{"Escape"===e.key&&s()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[s]);let z=()=>{let e=c.trim();if(!e)return;let o=i?.translationKey&&e===l;j&&v(),t({id:i?.id??`custom-${Date.now().toString(36)}`,emoji:h||"target",points:$,frame:g,color:y,...o?{translationKey:i.translationKey}:{name:e},...j?{time:j}:{}})},S=(0,o.jsx)(e0,{onClick:e=>{e.target===e.currentTarget&&s()},children:(0,o.jsxs)(e4,{onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(e1,{children:e(r?"daily.editMission.title":"daily.newMission.title")}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e2,{children:e("daily.newMission.preview")}),(0,o.jsx)(ia,{children:(0,o.jsxs)(il,{children:[(0,o.jsx)(im,{frame:g,emoji:h||"target",color:y,size:52}),(0,o.jsx)(id,{children:c||e("daily.newMission.namePlaceholder")}),(0,o.jsxs)(ic,{children:["+",$," pts"]})]})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e2,{children:e("daily.newMission.name")}),(0,o.jsx)(e5,{ref:T,placeholder:e("daily.newMission.namePlaceholder"),value:c,onChange:e=>m(e.target.value),onKeyDown:e=>{"Enter"===e.key&&c.trim()&&z()}})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e2,{children:e("daily.newMission.icon")}),(0,o.jsx)(e9,{children:M.map(e=>(0,o.jsx)(e7,{type:"button",selected:h===e,onClick:()=>f(e),"aria-label":e,children:(0,o.jsx)(x.In,{name:e,size:20,style:{color:y}})},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e2,{children:e("daily.newMission.frame")}),(0,o.jsx)(e6,{children:ix.map(e=>(0,o.jsx)(ie,{type:"button",selected:g===e,onClick:()=>u(e),title:e,children:(0,o.jsx)(ih,{frame:e})},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e2,{children:e("daily.newMission.color")}),(0,o.jsx)(ii,{children:ig.map(e=>(0,o.jsx)(it,{type:"button",color:e,selected:y===e,onClick:()=>w(e)},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e2,{children:e("daily.newMission.points")}),(0,o.jsx)(io,{children:iu.map(e=>(0,o.jsx)(is,{type:"button",selected:$===e,onClick:()=>b(e),children:e},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e2,{children:e("daily.newMission.time")}),(0,o.jsxs)(e3,{children:[(0,o.jsx)(e8,{type:"time",value:j,onChange:e=>k(e.target.value)}),j&&(0,o.jsx)(x.$n,{variant:"ghost",size:"sm",onClick:()=>k(""),children:e("daily.newMission.timeClear")})]})]}),(0,o.jsxs)(ir,{children:[(0,o.jsx)(x.$n,{variant:"ghost",size:"sm",onClick:s,children:e("daily.cancel")}),(0,o.jsx)(x.$n,{variant:"primary",size:"sm",disabled:!c.trim(),onClick:z,children:e(r?"daily.editMission.save":"daily.newMission.save")})]})]})});return a().createPortal(S,document.body)}function iw({completed:e,total:i,t,pulsing:s}){let n=2*Math.PI*76,r=i>0?e/i:0;return(0,o.jsx)(ep,{children:(0,o.jsxs)(em,{pulsing:s,children:[(0,o.jsxs)("svg",{width:180,height:180,viewBox:"0 0 180 180","aria-hidden":!0,children:[(0,o.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:p.w4.colors.border,strokeWidth:14}),(0,o.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:p.w4.colors.accent,strokeWidth:14,strokeDasharray:n,strokeDashoffset:n*(1-r),strokeLinecap:"round",transform:"rotate(-90 90 90)",style:{transition:"stroke-dashoffset 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"}})]}),(0,o.jsxs)(ex,{children:[(0,o.jsxs)(eh,{children:[e,"/",i]}),(0,o.jsx)(ef,{children:t("daily.progress.today")})]})]})})}function i$({history:e,total:i,locale:t,t:s}){let n=(0,m.todayISO)(),r=new Intl.DateTimeFormat("pt"===t?"pt-PT":"en-US",{weekday:"short"}),a=Math.max(...e.map(e=>e.count),1);return(0,o.jsxs)(eY,{children:[(0,o.jsx)(eL,{children:(0,o.jsx)(x.YZ,{children:s("daily.sparkline.label")})}),(0,o.jsx)(eH,{children:e.map(e=>{let i=e.count/a;return(0,o.jsx)(eA,{heightPct:i,isToday:e.date===n},e.date)})}),(0,o.jsx)(eO,{children:e.map(e=>{let i=r.format(new Date(e.date+"T00:00:00"));return(0,o.jsx)(eN,{isToday:e.date===n,children:i.slice(0,3)},e.date)})})]})}let ib=document.getElementById("root");if(!ib)throw Error("Root element #root not found");(0,s.createRoot)(ib).render((0,o.jsx)(function({topBarRight:e}){let i,[t]=(0,h.Ym)(),s=(0,n.useMemo)(()=>(0,h.Nx)(t,w.A),[t]),[r]=(0,m.useProfile)(),[a,l]=(0,n.useState)(!1),[d,c]=(0,n.useState)(k),[j,v]=(0,n.useState)(!1),[M,S]=(0,n.useState)(!1),[C,D]=(0,n.useState)(null),[R,K]=(0,n.useState)(new Set),[P,F]=(0,n.useState)([]),[B,I]=(0,n.useState)(null),[ep,em]=(0,n.useState)(!1),[ex,eh]=(0,n.useState)(!1),[ef,ek]=(0,n.useState)(null),[eM,eT]=(0,n.useState)(null),[ez,eS]=(0,n.useState)(!1),[eY,eH]=(0,n.useState)([]),eA=(0,n.useRef)(0),eO=function(){let[e,i]=(0,n.useState)(()=>new Date);return(0,n.useEffect)(()=>{let e=setInterval(()=>i(new Date),6e4);return()=>clearInterval(e)},[6e4]),e}();(0,n.useEffect)(()=>{let e=!1;return m.daily.load().then(i=>{if(e)return;let t=(0,m.todayISO)();if(i){let e=i.missions&&i.missions.length>0?i.missions:$,o={...i.history??{}};!i.history&&i.completedToday.length>0&&(o[i.lastResetDate]=[...i.completedToday]),i.lastResetDate!==t?(i.completedToday.length>0&&(o[i.lastResetDate]=[...i.completedToday]),c({...i,completedToday:o[t]??[],lastResetDate:t,missions:e,history:o})):c({...i,missions:e,history:o,completedToday:o[t]??i.completedToday})}else c(k());l(!0)}),()=>{e=!0}},[]),(0,n.useEffect)(()=>{a&&m.daily.save(d)},[d,a]);let eN=(0,n.useCallback)((e,i)=>{c(t=>{let o=t.completedToday.includes(e.id),s=(0,m.todayISO)();if(o){let i=Math.max(0,t.totalPoints-e.points),o=t.completedToday.filter(i=>i!==e.id),n=o.length<3?t.streakDays.filter(e=>e!==s):t.streakDays,r={...t.history,[s]:o};return{...t,totalPoints:i,totalMissionsCompleted:Math.max(0,t.totalMissionsCompleted-1),completedToday:o,streakDays:n,history:r}}let n=t.totalPoints+e.points,r=[...t.completedToday,e.id],a=r.length>=3&&!t.streakDays.includes(s)?[...t.streakDays,s]:t.streakDays,l={...t.history,[s]:r};if(K(i=>new Set(i).add(e.id)),setTimeout(()=>{K(i=>{let t=new Set(i);return t.delete(e.id),t})},600),eS(!0),setTimeout(()=>eS(!1),850),navigator.vibrate?.(50),i){let t=i.getBoundingClientRect(),o=++eA.current;F(i=>[...i,{id:o,value:e.points,x:t.right-60,y:t.top+t.height/2}]),setTimeout(()=>{F(e=>e.filter(e=>e.id!==o))},1200)}eH(i=>i.filter(i=>i!==e.id));let d=z(t.totalPoints),c=z(n);return c>d&&(I(T[c]),em(!1),setTimeout(()=>{em(!0),setTimeout(()=>I(null),450)},2e3)),{...t,totalPoints:n,totalMissionsCompleted:t.totalMissionsCompleted+1,completedToday:r,streakDays:a,history:l}})},[]),eL=(0,n.useCallback)(()=>{c(e=>{let i=(0,m.todayISO)(),t={...e.history};return delete t[i],{...e,completedToday:[],lastResetDate:i,history:t}}),eH([]),eh(!1)},[]),e0=(0,n.useCallback)(e=>{c(i=>({...i,missions:i.missions.filter(i=>i.id!==e),completedToday:i.completedToday.filter(i=>i!==e)}))},[]),e4=(0,n.useCallback)(e=>{c(i=>({...i,missions:[...i.missions,e]}))},[]),e1=(0,n.useCallback)(e=>{c(i=>({...i,missions:i.missions.map(i=>i.id===e.id?e:i)}))},[]),e2=(0,n.useCallback)((e,i)=>{e!==i&&c(t=>{let o=t.missions,s=o.findIndex(i=>i.id===e),n=o.findIndex(e=>e.id===i);if(s<0||n<0)return t;let r=[...o],[a]=r.splice(s,1);return r.splice(n,0,a),{...t,missions:r}})},[]);z(d.totalPoints);let e5=Math.floor(d.totalPoints/50)+1,e3=(0,m.computeStreakFromHistory)(d.history??{}),e8=(0,n.useMemo)(()=>(0,m.getDailyHistory)(d,7),[d]),e6=d.missions.length,e9=(0,n.useMemo)(()=>{let e=new Set(d.missions.map(e=>e.id));return d.completedToday.filter(i=>e.has(i)).length},[d.completedToday,d.missions]),e7=Math.max(0,e6-e9),ie=(0,n.useMemo)(()=>{let e=new Set(d.completedToday);return d.missions.filter(i=>e.has(i.id)).reduce((e,i)=>e+(i.points||0),0)},[d.completedToday,d.missions]),ii=(0,n.useMemo)(()=>{let e,i=d.missions.filter(e=>!d.completedToday.includes(e.id)&&!eY.includes(e.id));if(0===i.length)return null;let t=(e=new Date().getHours())<12?"morning":e<18?"afternoon":"evening",o=i.filter(e=>b(e)===t);if(o.length>0)return o[0];let s="morning"===t?"afternoon":"evening",n=i.filter(e=>b(e)===s);return n.length>0?n[0]:i[0]},[d.missions,d.completedToday,eY]),it=(0,n.useMemo)(()=>({morning:d.missions.filter(e=>"morning"===b(e)),afternoon:d.missions.filter(e=>"afternoon"===b(e)),evening:d.missions.filter(e=>"evening"===b(e))}),[d.missions]),io=(i=eO.getHours())<12?"daily.greet.morning":i<18?"daily.greet.afternoon":"daily.greet.evening",is=(r.interests.length,s("daily.greet.defaultName")),ir=eO.toLocaleTimeString("pt"===t?"pt-PT":"en-US",{hour:"2-digit",minute:"2-digit"}),ia=eO.toLocaleDateString("pt"===t?"pt-PT":"en-US",{weekday:"long",day:"numeric",month:"long"}),il=0===e7?s("daily.greet.allDone"):s("daily.greet.remaining",{n:e7,total:e6});function id(e){let i=`daily.chapter.${e}`,t=it[e];if(0===t.length)return null;let n=t.filter(e=>d.completedToday.includes(e.id)).length;return(0,o.jsxs)(eu,{children:[(0,o.jsxs)(ey,{children:[(0,o.jsx)(x.YZ,{children:s(i)}),(0,o.jsx)(ew,{children:s("daily.chapter.count",{done:n,total:t.length})})]}),(0,o.jsx)(e$,{children:t.map(e=>{let i=d.completedToday.includes(e.id),t=R.has(e.id),n=e.translationKey?s(e.translationKey):e.name??"",r=e.color??p.w4.colors.accent,a=e.frame??"disc";return(0,o.jsxs)(ej,{completed:i,flashing:t,isOver:!1,onClick:i=>eN(e,i.currentTarget),role:"checkbox","aria-checked":i,tabIndex:0,onKeyDown:i=>{(" "===i.key||"Enter"===i.key)&&(i.preventDefault(),eN(e,i.currentTarget))},children:[(0,o.jsx)(im,{frame:a,emoji:e.emoji,color:r,size:40}),(0,o.jsx)(eC,{completed:i,children:n}),(0,o.jsxs)(eD,{children:[e.time?(0,o.jsx)(eP,{children:e.time}):(0,o.jsx)("span",{}),(0,o.jsxs)(eR,{completed:i,children:["+",e.points]})]}),i&&(0,o.jsx)(eK,{children:"✓"})]},e.id)})})]},e)}return(0,o.jsxs)(p.PE,{title:s("daily.title"),sidebar:null,topBarRight:e,children:[(0,o.jsxs)(E,{children:[(0,o.jsxs)(Y,{children:[(0,o.jsxs)(H,{children:[(0,o.jsx)(A,{children:s(io,{name:is})}),(0,o.jsxs)(O,{children:[ia," \xb7 ",ir," \xb7 ",il]})]}),(0,o.jsxs)(N,{children:[(0,o.jsxs)(L,{children:["\uD83E\uDDED ",s("daily.chip.level",{n:e5})]}),(0,o.jsxs)(U,{title:s("daily.chip.xpHint"),children:[(0,o.jsx)(Z,{children:(0,o.jsx)(_,{pct:d.totalPoints%50/50*100})}),(0,o.jsxs)("span",{children:[d.totalPoints%50,"/",50]})]}),(0,o.jsxs)(L,{children:["⭐ ",s("daily.chip.points",{n:d.totalPoints})]}),(0,o.jsxs)(L,{children:["\uD83D\uDD25 ",e3>1?s("daily.chip.streak",{n:e3}):s("daily.chip.streakSingle",{n:e3})]}),(0,o.jsxs)(L,{children:["✅ ",s("daily.chip.done",{n:e9})]})]})]}),(0,o.jsxs)(q,{children:[(0,o.jsxs)(W,{centered:!!ii,children:[(0,o.jsx)(J,{children:(0,o.jsx)(x.YZ,{children:ii?s("daily.focus.nextUp"):s("daily.focus.dayComplete")})}),ii?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(X,{children:(0,o.jsx)(im,{frame:ii.frame??"disc",emoji:ii.emoji,color:ii.color??p.w4.colors.accent,size:72})}),(0,o.jsx)(G,{children:ii.translationKey?s(ii.translationKey):ii.name??""}),(0,o.jsxs)(Q,{children:["+",ii.points," pts"]}),ii.time&&(0,o.jsx)(V,{children:s("daily.focus.timeChip",{time:ii.time})}),(0,o.jsxs)(ee,{children:[(0,o.jsx)(x.$n,{variant:"primary",onClick:e=>{eN(ii,e.target.closest("button"))},children:s("daily.focus.markDone")}),(0,o.jsx)(x.$n,{variant:"ghost",onClick:()=>eH(e=>[...e,ii.id]),children:s("daily.focus.skip")})]})]}):(0,o.jsxs)(ei,{children:[(0,o.jsxs)(et,{children:[(0,o.jsx)(eo,{children:"\uD83C\uDF1F"}),(0,o.jsxs)(es,{children:[(0,o.jsx)(en,{children:s("daily.focus.allDone")}),(0,o.jsx)(er,{children:s("daily.focus.allDoneBody")})]})]}),(0,o.jsxs)(ea,{children:[(0,o.jsxs)(el,{children:[(0,o.jsxs)(ed,{children:["+",ie]}),(0,o.jsx)(ec,{children:s("daily.summary.pointsToday")})]}),(0,o.jsxs)(el,{children:[(0,o.jsx)(ed,{children:e9}),(0,o.jsx)(ec,{children:s("daily.summary.missions")})]}),(0,o.jsxs)(el,{children:[(0,o.jsx)(ed,{children:e3}),(0,o.jsx)(ec,{children:s("daily.summary.streak")})]})]})]})]}),(0,o.jsx)(iw,{completed:e9,total:e6,t:s,pulsing:ez})]}),j?(0,o.jsxs)("div",{children:[(0,o.jsxs)(eI,{children:[(0,o.jsx)(eE,{children:s("daily.sectionMissions")}),(0,o.jsxs)("div",{style:{display:"flex",gap:p.w4.spacing.xs},children:[(0,o.jsx)(x.$n,{variant:"accent",size:"sm",icon:(0,o.jsx)(f.A,{size:13}),onClick:()=>{v(!1),S(!1)},children:s("daily.done")}),(0,o.jsx)(x.K0,{onClick:()=>S(!0),title:s("daily.addMission"),"aria-label":s("daily.addMission"),children:(0,o.jsx)(g.A,{size:13})})]})]}),(0,o.jsx)(eb,{children:d.missions.map(e=>{let i=ef===e.id,t=eM===e.id&&ef!==e.id,n=e.translationKey?s(e.translationKey):e.name??"",r=e.color??p.w4.colors.accent,a=e.frame??"disc";return(0,o.jsxs)(ev,{isOver:t,role:"button",tabIndex:0,"aria-label":s("daily.editMission.open"),title:s("daily.editMission.open"),style:{opacity:i?.3:1},onClick:()=>D(e),onKeyDown:i=>{("Enter"===i.key||" "===i.key)&&(i.preventDefault(),D(e))},onDragOver:i=>{i.preventDefault(),i.dataTransfer.dropEffect="move",ef&&ef!==e.id&&eT(e.id)},onDragLeave:e=>{e.currentTarget===e.target&&eT(null)},onDrop:i=>{i.preventDefault(),ef&&e2(ef,e.id),ek(null),eT(null)},children:[(0,o.jsx)(eB,{"aria-hidden":!0,draggable:!0,onClick:e=>e.stopPropagation(),onDragStart:i=>{ek(e.id),i.dataTransfer.effectAllowed="move",i.dataTransfer.setData("text/plain",e.id)},onDragEnd:()=>{ek(null),eT(null)},children:(0,o.jsx)(u.A,{size:14})}),(0,o.jsx)(im,{frame:a,emoji:e.emoji,color:r,size:40}),(0,o.jsx)(eC,{completed:!1,children:n}),(0,o.jsxs)(eD,{children:[e.time?(0,o.jsx)(eP,{children:e.time}):(0,o.jsx)("span",{}),(0,o.jsxs)(eR,{completed:!1,children:["+",e.points]})]}),(0,o.jsx)(eF,{onClick:i=>{i.stopPropagation(),e0(e.id)},"aria-label":s("daily.delete"),title:s("daily.delete"),children:"\xd7"})]},e.id)})}),(0,o.jsx)("div",{style:{marginTop:p.w4.spacing.sm},children:(0,o.jsx)(x.$n,{variant:"ghost",icon:(0,o.jsx)(g.A,{size:13}),onClick:()=>S(!0),children:s("daily.addMission")})})]}):(0,o.jsxs)(eg,{children:[(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,o.jsx)(x.YZ,{children:s("daily.sectionMissions")}),(0,o.jsxs)("div",{style:{display:"flex",gap:p.w4.spacing.xs},children:[(0,o.jsx)(x.$n,{variant:"ghost",size:"sm",icon:(0,o.jsx)(y.A,{size:13}),onClick:()=>v(!0),children:s("daily.edit")}),(0,o.jsx)(x.K0,{onClick:()=>S(!0),title:s("daily.addMission"),"aria-label":s("daily.addMission"),children:(0,o.jsx)(g.A,{size:13})})]})]}),id("morning"),id("afternoon"),id("evening")]}),(0,o.jsx)(i$,{history:e8,total:e6,locale:t,t:s}),(0,o.jsx)(eU,{children:ex?(0,o.jsxs)(eZ,{children:[(0,o.jsx)(e_,{children:s("daily.resetConfirm")}),(0,o.jsxs)(eq,{children:[(0,o.jsx)(x.$n,{variant:"danger",onClick:eL,style:{flex:1},children:s("daily.confirm")}),(0,o.jsx)(x.$n,{variant:"ghost",onClick:()=>eh(!1),style:{flex:1},children:s("daily.cancel")})]})]}):(0,o.jsx)(x.$n,{variant:"ghost",onClick:()=>eh(!0),children:s("daily.resetDay")})})]}),P.map(e=>(0,o.jsxs)(eW,{style:{left:e.x,top:e.y},children:["+",e.value]},e.id)),B&&(0,o.jsx)(eJ,{exiting:ep,children:(0,o.jsxs)(eX,{children:[(0,o.jsx)(eG,{children:B.emoji}),(0,o.jsx)(eQ,{children:s("daily.levelUp")}),(0,o.jsx)(eV,{children:s(B.key)})]})}),(M||C)&&(0,o.jsx)(iy,{t:s,mission:C??void 0,onSave:e=>{C?e1(e):e4(e),S(!1),D(null)},onClose:()=>{S(!1),D(null)}})]})},{}))}}]);