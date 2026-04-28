"use strict";(self.webpackChunk_atlantis_daily=self.webpackChunk_atlantis_daily||[]).push([["512"],{8997(e,i,t){var o=t(2727);i.createRoot=o.createRoot,o.hydrateRoot},3611(e,i,t){var o=t(5723),n=t(8997),s=t(7991),r=t(2727),a=t.n(r),l=t(6859),d=t.n(l),c=t(2799),p=t(6063),m=t(3236),x=t(4021),h=t(8170),f=t(948),g=t(3436);let w=[{id:"brush-teeth",emoji:"toothbrush",translationKey:"daily.mission.brushTeeth",points:5,frame:"disc",color:p.w4.suites.learn,time:"07:30"},{id:"make-bed",emoji:"bed",translationKey:"daily.mission.makeBed",points:10,frame:"ring",color:p.w4.suites.vida,time:"08:00"},{id:"school-bag",emoji:"backpack",translationKey:"daily.mission.schoolBag",points:5,frame:"disc",color:p.w4.colors.accent,time:"08:15"},{id:"set-table",emoji:"utensils",translationKey:"daily.mission.setTable",points:10,frame:"polaroid",color:p.w4.suites.games,time:"12:30"},{id:"vegetables",emoji:"leaf",translationKey:"daily.mission.vegetables",points:5,frame:"ring",color:p.w4.suites.vida,time:"13:00"},{id:"homework",emoji:"edit",translationKey:"daily.mission.homework",points:15,frame:"hex",color:p.w4.suites.learn,time:"17:00"},{id:"tidy-room",emoji:"broom",translationKey:"daily.mission.tidyRoom",points:15,frame:"hex",color:p.w4.suites.ent,time:"17:30"},{id:"clothes-away",emoji:"shirt",translationKey:"daily.mission.clothesAway",points:10,frame:"stamp",color:p.w4.suites.ent,time:"18:00"},{id:"draw",emoji:"palette",translationKey:"daily.mission.draw",points:10,frame:"polaroid",color:p.w4.suites.lab,time:"18:30"},{id:"read",emoji:"book",translationKey:"daily.mission.read",points:15,frame:"stamp",color:p.w4.suites.lab,time:"19:30"},{id:"be-kind",emoji:"heart",translationKey:"daily.mission.beKind",points:10,frame:"disc",color:p.w4.suites.games}];function u(e){if(!e.time)return"morning";let[i]=e.time.split(":"),t=parseInt(i,10);return t<12?"morning":t<18?"afternoon":"evening"}let y="daily:notifications-asked";async function $(){if(!("u"<typeof window)&&"Notification"in window&&"default"===Notification.permission&&"1"!==await (0,p.qj)(y)){await (0,p.pJ)(y,"1");try{await Notification.requestPermission()}catch{}}}function b(){return{totalPoints:0,totalMissionsCompleted:0,completedToday:[],streakDays:[],lastResetDate:(0,x.todayISO)(),missions:w,history:{}}}let j=["toothbrush","bed","shirt","backpack","broom","utensils","leaf","book","edit","brain","graduation","palette","music","image","film","gamepad","heart","sun","moon","cloud","flame","target","trophy","star","sparkle","zap","clock","calendar","users","user","message","mail","send","globe","map-pin","home"],v=[{emoji:"\uD83C\uDF31",key:"daily.level.recruit"},{emoji:"\uD83E\uDDED",key:"daily.level.explorer"},{emoji:"⚔️",key:"daily.level.adventurer"},{emoji:"\uD83E\uDDB8",key:"daily.level.hero"},{emoji:"\uD83C\uDFC6",key:"daily.level.champion"},{emoji:"\uD83C\uDF1F",key:"daily.level.legend"}];function k(e){return Math.min(Math.floor(e/50),v.length-1)}let T=(0,c.keyframes)`
  0%   { opacity: 1; transform: translateY(0) scale(1); }
  80%  { opacity: 1; transform: translateY(-48px) scale(1.15); }
  100% { opacity: 0; transform: translateY(-72px) scale(0.9); }
`,M=(0,c.keyframes)`
  0%   { box-shadow: none; }
  30%  { box-shadow: 0 0 0 3px ${p.w4.colors.accent}; }
  100% { box-shadow: none; }
`,z=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,S=(0,c.keyframes)`
  0%   { transform: scale(0.6); }
  60%  { transform: scale(1.25); }
  100% { transform: scale(1); }
`,C=(0,c.keyframes)`
  0%, 100% { filter: drop-shadow(0 0 4px ${p.w4.colors.accent}); }
  50%       { filter: drop-shadow(0 0 12px ${p.w4.colors.accent}); }
`,D=(0,c.keyframes)`
  0%   { opacity: 0; transform: scale(0.7); }
  60%  { opacity: 1; transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
`,R=(0,c.keyframes)`
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.2); }
`,K=(0,c.keyframes)`
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
`;let P=d().div`
  display: flex;
  flex-direction: column;
  background: radial-gradient(ellipse at 50% 0%, ${p.w4.colors.accentMuted} 0%, ${p.w4.colors.mainBg} 60%);
  padding: ${p.w4.spacing.lg} ${p.w4.spacing.md} ${p.w4.spacing.xl};
  gap: ${p.w4.spacing.lg};
  animation: ${z} 0.3s ease;
  width: 100%;

  @media (min-width: ${p.w4.breakpoints.md}) {
    padding: ${p.w4.spacing.xl};
  }
`;d().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p.w4.spacing.md};
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;let F=d().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1 1 auto;
  min-width: 0;
  width: 100%;
`,B=d().div`
  font-family: ${p.w4.typography.fontFamilySerif};
  font-size: clamp(20px, 2.6vw, 28px);
  font-weight: 300;
  color: ${p.w4.colors.mainText};
  line-height: 1.2;
  letter-spacing: -0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 900px) {
    white-space: normal;
  }
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
`,_=d().div`
  background: ${p.w4.colors.surface};
  border: 1px solid ${p.w4.colors.accent};
  border-radius: ${p.w4.borderRadius.lg};
  padding: ${p.w4.spacing.md};
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: ${p.w4.spacing.md};
  row-gap: ${p.w4.spacing.sm};
  position: relative;
  overflow: hidden;
  animation: ${z} 0.35s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${p.w4.colors.accent}, transparent);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: left;
  }
`,A=d().div`
  grid-row: 1 / 3;
  align-self: center;
  line-height: 0;

  @media (max-width: 600px) {
    grid-row: auto;
  }
`,Z=d().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,q=d().div`
  display: flex;
  align-items: center;
  gap: ${p.w4.spacing.sm};
  flex-wrap: wrap;
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${p.w4.colors.mainTextMuted};
`,W=d().div`
  font-size: 16px;
  font-weight: 600;
  color: ${p.w4.colors.mainText};
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 600px) {
    white-space: normal;
  }
`,J=d().div`
  display: flex;
  align-items: center;
  gap: ${p.w4.spacing.sm};
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${p.w4.colors.mainTextMuted};
  flex-wrap: wrap;
`,X=d().span`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${p.w4.colors.mainTextMuted};
  background: ${p.w4.colors.mainBg};
  border: 1px solid ${p.w4.colors.border};
  border-radius: 99px;
  padding: 2px 8px;
  line-height: 1.4;
`,G=d().div`
  grid-column: 2 / 3;
  display: flex;
  gap: ${p.w4.spacing.sm};
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;

  @media (max-width: 600px) {
    grid-column: auto;
    justify-content: stretch;
    > * { flex: 1; }
  }
`,Q=d().div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  gap: ${p.w4.spacing.lg};
  padding: ${p.w4.spacing.sm} 0;
`,V=d().div`
  display: flex;
  align-items: center;
  gap: ${p.w4.spacing.lg};
`,ee=d().div`
  font-size: 48px;
  line-height: 1;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 8px ${p.w4.colors.shadow});
`,ei=d().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,et=d().div`
  font-family: ${p.w4.typography.fontFamilySerif};
  font-size: 22px;
  font-weight: 400;
  color: ${p.w4.colors.mainText};
  line-height: 1.2;
`,eo=d().div`
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.mainTextMuted};
`,en=d().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${p.w4.spacing.sm};
`,es=d().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: ${p.w4.spacing.sm} ${p.w4.spacing.md};
  background: ${p.w4.colors.mainBg};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
`,er=d().div`
  font-family: ${p.w4.typography.fontFamilySerif};
  font-size: 22px;
  font-weight: 400;
  color: ${p.w4.colors.mainText};
  line-height: 1;
`,ea=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${p.w4.colors.mainTextMuted};
`,el=d().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p.w4.spacing.md};

  @media (min-width: ${p.w4.breakpoints.lg}) {
    min-width: 220px;
  }
`,ed=d().div`
  position: relative;
  width: 180px;
  height: 180px;
  ${({pulsing:e})=>e?(0,c.css)`
          animation: ${C} 0.8s ease;
        `:""}
`,ec=d().div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`,ep=d().div`
  font-family: ${p.w4.typography.fontFamilySerif};
  font-size: 36px;
  font-weight: 400;
  color: ${p.w4.colors.mainText};
  line-height: 1;
`,em=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${p.w4.colors.mainTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,ex=d().div`
  display: flex;
  flex-direction: column;
  gap: ${p.w4.spacing.md};
`,eh=d().div`
  display: flex;
  flex-direction: column;
  gap: ${p.w4.spacing.sm};
`,ef=d().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,eg=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${p.w4.colors.mainTextMuted};
`,ew=d().div`
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
`,e$=d().div`
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
`,eb=d().div`
  border-radius: 50%;
  background: ${({color:e})=>`${e}28`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid ${({color:e})=>`${e}44`};
`,ej=d().div`
  border-radius: 50%;
  background: transparent;
  border: 2.5px solid ${({color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ev=d().div`
  border-radius: ${p.w4.borderRadius.md};
  background: ${({color:e})=>`${e}28`};
  border: 2px solid ${({color:e})=>`${e}55`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transform: rotate(8deg);
  box-shadow: 2px 2px 6px ${p.w4.colors.shadow};
`,ek=d().div`
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  background: ${({color:e})=>`${e}35`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,eT=d().div`
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
`,ez=d().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
  min-height: 14px;
`,eS=d().div`
  font-size: 11px;
  font-weight: 700;
  color: ${({completed:e})=>e?p.w4.colors.success:p.w4.colors.accent};
  background: ${p.w4.colors.accentMuted};
  padding: 2px 6px;
  border-radius: 99px;
  white-space: nowrap;
`,eC=d().div`
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
  animation: ${S} 0.35s ease;
`,eD=d().span`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${p.w4.colors.mainTextMuted};
  line-height: 1.3;
`,eR=d().button`
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
`,eK=d().div`
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
`,eP=d().h2`
  font-size: ${p.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${p.w4.colors.mainText};
  margin: 0;
`,eF=d().div`
  background: ${p.w4.colors.surface};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  padding: ${p.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${p.w4.spacing.sm};
`,eB=d().div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  align-items: flex-end;
  height: 48px;
`,eE=d().div`
  min-height: 2px;
  height: ${({heightPct:e})=>Math.max(100*e,2)}%;
  background: ${({isToday:e})=>e?p.w4.colors.accent:p.w4.colors.border};
  border-radius: 2px 2px 0 0;
  transition: height 0.4s ease;
`,eY=d().div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,eH=d().div`
  font-family: ${p.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({isToday:e})=>e?p.w4.colors.accent:p.w4.colors.mainTextMuted};
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,eO=d().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,eN=d().div`
  display: flex;
  justify-content: flex-end;
`,eL=d().div`
  display: flex;
  flex-direction: column;
  gap: ${p.w4.spacing.xs};
  background: ${p.w4.colors.surface};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
  padding: ${p.w4.spacing.md};
  animation: ${z} 0.2s ease;
`,eU=d().div`
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.mainTextMuted};
  text-align: center;
`,e_=d().div`
  display: flex;
  gap: ${p.w4.spacing.sm};
`,eA=d().div`
  position: fixed;
  pointer-events: none;
  font-size: 18px;
  font-weight: 700;
  color: ${p.w4.colors.accent};
  text-shadow: 0 0 8px ${p.w4.colors.accent};
  z-index: 9999;
  animation: ${T} 1.1s ease forwards;
`,eZ=d().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  ${({exiting:e})=>e?(0,c.css)`
          animation: ${R} 0.4s ease forwards;
        `:(0,c.css)`
          animation: ${D} 0.4s ease forwards;
        `}
`,eq=d().div`
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
`,eW=d().div`
  font-size: 80px;
  line-height: 1;
`,eJ=d().div`
  font-size: ${p.w4.typography.fontSizeSm};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${p.w4.colors.accent};
  font-weight: 700;
`,eX=d().div`
  font-size: ${p.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${p.w4.colors.mainText};
`,eG=d().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${p.w4.zIndex.modal};
  padding: ${p.w4.spacing.md};
  animation: ${K} 0.2s ease;
`,eQ=d().div`
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
`,eV=d().h2`
  font-size: ${p.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${p.w4.colors.mainText};
  margin: 0;
`,e0=d().div`
  font-size: ${p.w4.typography.fontSizeSm};
  color: ${p.w4.colors.mainTextMuted};
  font-weight: 600;
  margin-bottom: ${p.w4.spacing.xs};
`;d().div`
  display: flex;
  gap: ${p.w4.spacing.sm};
`;let e4=d().input`
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
`,e1=d().div`
  display: flex;
  align-items: center;
  gap: ${p.w4.spacing.sm};
`,e2=d().input`
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
`,e3=d().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
  gap: 6px;
  max-height: 180px;
  overflow-y: auto;
  padding: ${p.w4.spacing.sm};
  background: ${p.w4.colors.mainBg};
  border: 1px solid ${p.w4.colors.border};
  border-radius: ${p.w4.borderRadius.md};
`,e5=d().button`
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
`,e9=d().div`
  display: flex;
  gap: ${p.w4.spacing.sm};
  flex-wrap: wrap;
`,e7=d().button`
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
`,ie=d().div`
  display: flex;
  gap: 4px;
`,ii=d().button`
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
`,it=d().div`
  display: flex;
  gap: ${p.w4.spacing.sm};
  justify-content: flex-end;
  padding-top: ${p.w4.spacing.xs};
  border-top: 1px solid ${p.w4.colors.borderSubtle};
`,io=d().div`
  display: flex;
  justify-content: center;
  padding: ${p.w4.spacing.sm} 0;
`,is=d().div`
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
`,ir=d().span`
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
`,ia=d().div`
  font-size: 11px;
  font-weight: 700;
  color: ${p.w4.colors.accent};
  background: ${p.w4.colors.accentMuted};
  padding: 2px 7px;
  border-radius: 99px;
  align-self: flex-end;
`;function il({value:e,size:i,color:t}){return(0,m.n6)(e)?(0,o.jsx)(m.In,{name:e,size:i,style:{color:t}}):(0,o.jsx)("span",{style:{fontSize:i},children:e})}function id({frame:e,emoji:i,color:t,size:n=64}){let s=Math.round(.5*n),r=(0,o.jsx)(il,{value:i,size:s,color:t});switch(e){case"ring":return(0,o.jsx)(ej,{color:t,style:{width:n,height:n},children:r});case"stamp":return(0,o.jsx)(ev,{color:t,style:{width:n-4,height:n-4},children:r});case"hex":return(0,o.jsx)(ek,{color:t,style:{width:n,height:n},children:r});case"polaroid":return(0,o.jsx)(eT,{color:t,style:{width:n,height:n+4},children:(0,o.jsx)("div",{className:"inner",children:r})});default:return(0,o.jsx)(eb,{color:t,style:{width:n,height:n},children:r})}}let ic=["disc","ring","stamp","hex","polaroid"];function ip({frame:e}){let i=p.w4.colors.accent;switch(e){case"ring":return(0,o.jsx)(ej,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"stamp":return(0,o.jsx)(ev,{color:i,style:{width:28,height:28},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"hex":return(0,o.jsx)(ek,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"polaroid":return(0,o.jsx)(eT,{color:i,style:{width:28,height:32},children:(0,o.jsx)("div",{className:"inner",children:(0,o.jsx)("span",{style:{fontSize:10},children:"✦"})})});default:return(0,o.jsx)(eb,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})})}}let im=[p.w4.colors.accent,p.w4.colors.success,p.w4.suites.lab,p.w4.suites.vida,p.w4.suites.learn,p.w4.suites.games],ix=[5,10,15,20,25];function ih({t:e,mission:i,onSave:t,onClose:n}){let r=!!i,l=i?.translationKey?e(i.translationKey):"",d=i&&ix.includes(i.points)?i.points:10,[c,x]=(0,s.useState)(i?.name??l),[h,f]=(0,s.useState)(i?.emoji??"target"),[g,w]=(0,s.useState)(i?.frame??"disc"),[u,y]=(0,s.useState)(i?.color??p.w4.colors.accent),[b,v]=(0,s.useState)(d),[k,T]=(0,s.useState)(i?.time??""),M=(0,s.useRef)(null);(0,s.useEffect)(()=>{M.current?.focus();let e=e=>{"Escape"===e.key&&n()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[n]);let z=()=>{let e=c.trim();if(!e)return;let o=i?.translationKey&&e===l;k&&$(),t({id:i?.id??`custom-${Date.now().toString(36)}`,emoji:h||"target",points:b,frame:g,color:u,...o?{translationKey:i.translationKey}:{name:e},...k?{time:k}:{}})},S=(0,o.jsx)(eG,{onClick:e=>{e.target===e.currentTarget&&n()},children:(0,o.jsxs)(eQ,{onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(eV,{children:e(r?"daily.editMission.title":"daily.newMission.title")}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e0,{children:e("daily.newMission.preview")}),(0,o.jsx)(io,{children:(0,o.jsxs)(is,{children:[(0,o.jsx)(id,{frame:g,emoji:h||"target",color:u,size:52}),(0,o.jsx)(ir,{children:c||e("daily.newMission.namePlaceholder")}),(0,o.jsxs)(ia,{children:["+",b," pts"]})]})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e0,{children:e("daily.newMission.name")}),(0,o.jsx)(e4,{ref:M,placeholder:e("daily.newMission.namePlaceholder"),value:c,onChange:e=>x(e.target.value),onKeyDown:e=>{"Enter"===e.key&&c.trim()&&z()}})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e0,{children:e("daily.newMission.icon")}),(0,o.jsx)(e3,{children:j.map(e=>(0,o.jsx)(e5,{type:"button",selected:h===e,onClick:()=>f(e),"aria-label":e,children:(0,o.jsx)(m.In,{name:e,size:20,style:{color:u}})},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e0,{children:e("daily.newMission.frame")}),(0,o.jsx)(e6,{children:ic.map(e=>(0,o.jsx)(e8,{type:"button",selected:g===e,onClick:()=>w(e),title:e,children:(0,o.jsx)(ip,{frame:e})},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e0,{children:e("daily.newMission.color")}),(0,o.jsx)(e9,{children:im.map(e=>(0,o.jsx)(e7,{type:"button",color:e,selected:u===e,onClick:()=>y(e)},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e0,{children:e("daily.newMission.points")}),(0,o.jsx)(ie,{children:ix.map(e=>(0,o.jsx)(ii,{type:"button",selected:b===e,onClick:()=>v(e),children:e},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e0,{children:e("daily.newMission.time")}),(0,o.jsxs)(e1,{children:[(0,o.jsx)(e2,{type:"time",value:k,onChange:e=>T(e.target.value)}),k&&(0,o.jsx)(m.$n,{variant:"ghost",size:"sm",onClick:()=>T(""),children:e("daily.newMission.timeClear")})]})]}),(0,o.jsxs)(it,{children:[(0,o.jsx)(m.$n,{variant:"ghost",size:"sm",onClick:n,children:e("daily.cancel")}),(0,o.jsx)(m.$n,{variant:"primary",size:"sm",disabled:!c.trim(),onClick:z,children:e(r?"daily.editMission.save":"daily.newMission.save")})]})]})});return a().createPortal(S,document.body)}function ig({completed:e,total:i,t,pulsing:n}){let s=2*Math.PI*76,r=i>0?e/i:0;return(0,o.jsx)(el,{children:(0,o.jsxs)(ed,{pulsing:n,children:[(0,o.jsxs)("svg",{width:180,height:180,viewBox:"0 0 180 180","aria-hidden":!0,children:[(0,o.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:p.w4.colors.border,strokeWidth:14}),(0,o.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:p.w4.colors.accent,strokeWidth:14,strokeDasharray:s,strokeDashoffset:s*(1-r),strokeLinecap:"round",transform:"rotate(-90 90 90)",style:{transition:"stroke-dashoffset 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"}})]}),(0,o.jsxs)(ec,{children:[(0,o.jsxs)(ep,{children:[e,"/",i]}),(0,o.jsx)(em,{children:t("daily.progress.today")})]})]})})}function iw({history:e,total:i,locale:t,t:n}){let s=(0,x.todayISO)(),r=new Intl.DateTimeFormat("pt"===t?"pt-PT":"en-US",{weekday:"short"}),a=Math.max(...e.map(e=>e.count),1);return(0,o.jsxs)(eF,{children:[(0,o.jsx)(eO,{children:(0,o.jsx)(m.YZ,{children:n("daily.sparkline.label")})}),(0,o.jsx)(eB,{children:e.map(e=>{let i=e.count/a;return(0,o.jsx)(eE,{heightPct:i,isToday:e.date===s},e.date)})}),(0,o.jsx)(eY,{children:e.map(e=>{let i=r.format(new Date(e.date+"T00:00:00"));return(0,o.jsx)(eH,{isToday:e.date===s,children:i.slice(0,3)},e.date)})})]})}let iu=document.getElementById("root");if(!iu)throw Error("Root element #root not found");(0,n.createRoot)(iu).render((0,o.jsx)(function({topBarRight:e}){let i,[t]=(0,h.Ym)(),n=(0,s.useMemo)(()=>(0,h.Nx)(t,f.A),[t]),[r]=(0,x.useProfile)(),[a,l]=(0,s.useState)(!1),[d,c]=(0,s.useState)(b),[y,$]=(0,s.useState)(!1),[j,T]=(0,s.useState)(!1),[M,z]=(0,s.useState)(null),[S,C]=(0,s.useState)(new Set),[D,R]=(0,s.useState)([]),[K,I]=(0,s.useState)(null),[el,ed]=(0,s.useState)(!1),[ec,ep]=(0,s.useState)(!1),[em,eb]=(0,s.useState)(null),[ej,ev]=(0,s.useState)(null),[ek,eT]=(0,s.useState)(!1),[eF,eB]=(0,s.useState)([]),eE=(0,s.useRef)(0),eY=function(){let[e,i]=(0,s.useState)(()=>new Date);return(0,s.useEffect)(()=>{let e=setInterval(()=>i(new Date),6e4);return()=>clearInterval(e)},[6e4]),e}();(0,s.useEffect)(()=>{let e=!1;return x.daily.load().then(i=>{if(e)return;let t=(0,x.todayISO)();if(i){let e=i.missions&&i.missions.length>0?i.missions:w,o={...i.history??{}};!i.history&&i.completedToday.length>0&&(o[i.lastResetDate]=[...i.completedToday]),i.lastResetDate!==t?(i.completedToday.length>0&&(o[i.lastResetDate]=[...i.completedToday]),c({...i,completedToday:o[t]??[],lastResetDate:t,missions:e,history:o})):c({...i,missions:e,history:o,completedToday:o[t]??i.completedToday})}else c(b());l(!0)}),()=>{e=!0}},[]),(0,s.useEffect)(()=>{a&&x.daily.save(d)},[d,a]);let eH=(0,s.useCallback)((e,i)=>{c(t=>{let o=t.completedToday.includes(e.id),n=(0,x.todayISO)();if(o){let i=Math.max(0,t.totalPoints-e.points),o=t.completedToday.filter(i=>i!==e.id),s=o.length<3?t.streakDays.filter(e=>e!==n):t.streakDays,r={...t.history,[n]:o};return{...t,totalPoints:i,totalMissionsCompleted:Math.max(0,t.totalMissionsCompleted-1),completedToday:o,streakDays:s,history:r}}let s=t.totalPoints+e.points,r=[...t.completedToday,e.id],a=r.length>=3&&!t.streakDays.includes(n)?[...t.streakDays,n]:t.streakDays,l={...t.history,[n]:r};if(C(i=>new Set(i).add(e.id)),setTimeout(()=>{C(i=>{let t=new Set(i);return t.delete(e.id),t})},600),eT(!0),setTimeout(()=>eT(!1),850),navigator.vibrate?.(50),i){let t=i.getBoundingClientRect(),o=++eE.current;R(i=>[...i,{id:o,value:e.points,x:t.right-60,y:t.top+t.height/2}]),setTimeout(()=>{R(e=>e.filter(e=>e.id!==o))},1200)}eB(i=>i.filter(i=>i!==e.id));let d=k(t.totalPoints),c=k(s);return c>d&&(I(v[c]),ed(!1),setTimeout(()=>{ed(!0),setTimeout(()=>I(null),450)},2e3)),{...t,totalPoints:s,totalMissionsCompleted:t.totalMissionsCompleted+1,completedToday:r,streakDays:a,history:l}})},[]),eO=(0,s.useCallback)(()=>{c(e=>{let i=(0,x.todayISO)(),t={...e.history};return delete t[i],{...e,completedToday:[],lastResetDate:i,history:t}}),eB([]),ep(!1)},[]),eG=(0,s.useCallback)(e=>{c(i=>({...i,missions:i.missions.filter(i=>i.id!==e),completedToday:i.completedToday.filter(i=>i!==e)}))},[]),eQ=(0,s.useCallback)(e=>{c(i=>({...i,missions:[...i.missions,e]}))},[]),eV=(0,s.useCallback)(e=>{c(i=>({...i,missions:i.missions.map(i=>i.id===e.id?e:i)}))},[]),e0=(0,s.useCallback)((e,i)=>{e!==i&&c(t=>{let o=t.missions,n=o.findIndex(i=>i.id===e),s=o.findIndex(e=>e.id===i);if(n<0||s<0)return t;let r=[...o],[a]=r.splice(n,1);return r.splice(s,0,a),{...t,missions:r}})},[]);k(d.totalPoints);let e4=Math.floor(d.totalPoints/50)+1,e1=(0,x.computeStreakFromHistory)(d.history??{}),e2=(0,s.useMemo)(()=>(0,x.getDailyHistory)(d,7),[d]),e6=d.missions.length,e3=(0,s.useMemo)(()=>{let e=new Set(d.missions.map(e=>e.id));return d.completedToday.filter(i=>e.has(i)).length},[d.completedToday,d.missions]),e5=Math.max(0,e6-e3),e8=(0,s.useMemo)(()=>{let e=new Set(d.completedToday);return d.missions.filter(i=>e.has(i.id)).reduce((e,i)=>e+(i.points||0),0)},[d.completedToday,d.missions]),e9=(0,s.useMemo)(()=>{let e,i=d.missions.filter(e=>!d.completedToday.includes(e.id)&&!eF.includes(e.id));if(0===i.length)return null;let t=(e=new Date().getHours())<12?"morning":e<18?"afternoon":"evening",o=i.filter(e=>u(e)===t);if(o.length>0)return o[0];let n="morning"===t?"afternoon":"evening",s=i.filter(e=>u(e)===n);return s.length>0?s[0]:i[0]},[d.missions,d.completedToday,eF]),e7=(0,s.useMemo)(()=>({morning:d.missions.filter(e=>"morning"===u(e)),afternoon:d.missions.filter(e=>"afternoon"===u(e)),evening:d.missions.filter(e=>"evening"===u(e))}),[d.missions]),ie=(i=eY.getHours())<12?"daily.greet.morning":i<18?"daily.greet.afternoon":"daily.greet.evening",ii=(r.interests.length,n("daily.greet.defaultName")),it=eY.toLocaleTimeString("pt"===t?"pt-PT":"en-US",{hour:"2-digit",minute:"2-digit"}),io=eY.toLocaleDateString("pt"===t?"pt-PT":"en-US",{weekday:"long",day:"numeric",month:"long"}),is=0===e5?n("daily.greet.allDone"):n("daily.greet.remaining",{n:e5,total:e6});function ir(e){let i=`daily.chapter.${e}`,t=e7[e];if(0===t.length)return null;let s=t.filter(e=>d.completedToday.includes(e.id)).length;return(0,o.jsxs)(eh,{children:[(0,o.jsxs)(ef,{children:[(0,o.jsx)(m.YZ,{children:n(i)}),(0,o.jsx)(eg,{children:n("daily.chapter.count",{done:s,total:t.length})})]}),(0,o.jsx)(ew,{children:t.map(e=>{let i=d.completedToday.includes(e.id),t=S.has(e.id),s=e.translationKey?n(e.translationKey):e.name??"",r=e.color??p.w4.colors.accent,a=e.frame??"disc";return(0,o.jsxs)(ey,{completed:i,flashing:t,isOver:!1,onClick:i=>eH(e,i.currentTarget),role:"checkbox","aria-checked":i,tabIndex:0,onKeyDown:i=>{(" "===i.key||"Enter"===i.key)&&(i.preventDefault(),eH(e,i.currentTarget))},children:[(0,o.jsx)(id,{frame:a,emoji:e.emoji,color:r,size:40}),(0,o.jsx)(eM,{completed:i,children:s}),(0,o.jsxs)(ez,{children:[e.time?(0,o.jsx)(eD,{children:e.time}):(0,o.jsx)("span",{}),(0,o.jsxs)(eS,{completed:i,children:["+",e.points]})]}),i&&(0,o.jsx)(eC,{children:"✓"})]},e.id)})})]},e)}return(0,o.jsxs)(m.PE,{title:n("daily.title"),sidebar:null,topBarRight:e,children:[(0,o.jsxs)(P,{children:[(0,o.jsxs)(F,{children:[(0,o.jsx)(B,{children:n(ie,{name:ii})}),(0,o.jsxs)(E,{children:[io," \xb7 ",it," \xb7 ",is]})]}),(0,o.jsx)(g.R,{history:d.history??{},completedToday:d.completedToday,t:n}),(0,o.jsxs)(Y,{children:[(0,o.jsxs)(H,{children:["\uD83E\uDDED ",n("daily.chip.level",{n:e4})]}),(0,o.jsxs)(O,{title:n("daily.chip.xpHint"),children:[(0,o.jsx)(N,{children:(0,o.jsx)(L,{pct:d.totalPoints%50/50*100})}),(0,o.jsxs)("span",{children:[d.totalPoints%50,"/",50]})]}),(0,o.jsxs)(H,{children:["⭐ ",n("daily.chip.points",{n:d.totalPoints})]}),(0,o.jsxs)(H,{children:["\uD83D\uDD25 ",e1>1?n("daily.chip.streak",{n:e1}):n("daily.chip.streakSingle",{n:e1})]}),(0,o.jsxs)(H,{children:["✅ ",n("daily.chip.done",{n:e3})]})]}),(0,o.jsxs)(U,{children:[(0,o.jsx)(_,{centered:!!e9,children:e9?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(A,{children:(0,o.jsx)(id,{frame:e9.frame??"disc",emoji:e9.emoji,color:e9.color??p.w4.colors.accent,size:40})}),(0,o.jsxs)(Z,{children:[(0,o.jsxs)(q,{children:[(0,o.jsx)("span",{children:n(`daily.focus.eyebrow.${u(e9)}`)}),(0,o.jsx)("span",{"aria-hidden":"true",children:"\xb7"}),(0,o.jsx)("span",{children:n("daily.focus.nextUp")})]}),(0,o.jsx)(W,{children:e9.translationKey?n(e9.translationKey):e9.name??""}),(0,o.jsxs)(J,{children:[(0,o.jsxs)("span",{children:["+",e9.points," pts"]}),e9.time&&(0,o.jsx)(X,{children:n("daily.focus.timeChip",{time:e9.time})})]})]}),(0,o.jsxs)(G,{children:[(0,o.jsx)(m.$n,{variant:"primary",onClick:e=>{eH(e9,e.target.closest("button"))},children:n("daily.focus.markDone")}),(0,o.jsx)(m.$n,{variant:"ghost",onClick:()=>eB(e=>[...e,e9.id]),children:n("daily.focus.skip")})]})]}):(0,o.jsxs)(Q,{children:[(0,o.jsxs)(V,{children:[(0,o.jsx)(ee,{children:"\uD83C\uDF1F"}),(0,o.jsxs)(ei,{children:[(0,o.jsx)(et,{children:n("daily.focus.allDone")}),(0,o.jsx)(eo,{children:n("daily.focus.allDoneBody")})]})]}),(0,o.jsxs)(en,{children:[(0,o.jsxs)(es,{children:[(0,o.jsxs)(er,{children:["+",e8]}),(0,o.jsx)(ea,{children:n("daily.summary.pointsToday")})]}),(0,o.jsxs)(es,{children:[(0,o.jsx)(er,{children:e3}),(0,o.jsx)(ea,{children:n("daily.summary.missions")})]}),(0,o.jsxs)(es,{children:[(0,o.jsx)(er,{children:e1}),(0,o.jsx)(ea,{children:n("daily.summary.streak")})]})]})]})}),(0,o.jsx)(ig,{completed:e3,total:e6,t:n,pulsing:ek})]}),y?(0,o.jsxs)("div",{children:[(0,o.jsxs)(eI,{children:[(0,o.jsx)(eP,{children:n("daily.sectionMissions")}),(0,o.jsxs)("div",{style:{display:"flex",gap:p.w4.spacing.xs},children:[(0,o.jsx)(m.$n,{variant:"accent",size:"sm",icon:(0,o.jsx)(m.In,{name:"check",size:13}),onClick:()=>{$(!1),T(!1)},children:n("daily.done")}),(0,o.jsx)(m.K0,{onClick:()=>T(!0),title:n("daily.addMission"),"aria-label":n("daily.addMission"),children:(0,o.jsx)(m.In,{name:"plus",size:13})})]})]}),(0,o.jsx)(eu,{children:d.missions.map(e=>{let i=em===e.id,t=ej===e.id&&em!==e.id,s=e.translationKey?n(e.translationKey):e.name??"",r=e.color??p.w4.colors.accent,a=e.frame??"disc";return(0,o.jsxs)(e$,{isOver:t,role:"button",tabIndex:0,"aria-label":n("daily.editMission.open"),title:n("daily.editMission.open"),style:{opacity:i?.3:1},onClick:()=>z(e),onKeyDown:i=>{("Enter"===i.key||" "===i.key)&&(i.preventDefault(),z(e))},onDragOver:i=>{i.preventDefault(),i.dataTransfer.dropEffect="move",em&&em!==e.id&&ev(e.id)},onDragLeave:e=>{e.currentTarget===e.target&&ev(null)},onDrop:i=>{i.preventDefault(),em&&e0(em,e.id),eb(null),ev(null)},children:[(0,o.jsx)(eK,{"aria-hidden":!0,draggable:!0,onClick:e=>e.stopPropagation(),onDragStart:i=>{eb(e.id),i.dataTransfer.effectAllowed="move",i.dataTransfer.setData("text/plain",e.id)},onDragEnd:()=>{eb(null),ev(null)},children:(0,o.jsx)(m.In,{name:"grip-vertical",size:14})}),(0,o.jsx)(id,{frame:a,emoji:e.emoji,color:r,size:40}),(0,o.jsx)(eM,{completed:!1,children:s}),(0,o.jsxs)(ez,{children:[e.time?(0,o.jsx)(eD,{children:e.time}):(0,o.jsx)("span",{}),(0,o.jsxs)(eS,{completed:!1,children:["+",e.points]})]}),(0,o.jsx)(eR,{onClick:i=>{i.stopPropagation(),eG(e.id)},"aria-label":n("daily.delete"),title:n("daily.delete"),children:"\xd7"})]},e.id)})}),(0,o.jsx)("div",{style:{marginTop:p.w4.spacing.sm},children:(0,o.jsx)(m.$n,{variant:"ghost",icon:(0,o.jsx)(m.In,{name:"plus",size:13}),onClick:()=>T(!0),children:n("daily.addMission")})})]}):(0,o.jsxs)(ex,{children:[(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,o.jsx)(m.YZ,{children:n("daily.sectionMissions")}),(0,o.jsxs)("div",{style:{display:"flex",gap:p.w4.spacing.xs},children:[(0,o.jsx)(m.$n,{variant:"ghost",size:"sm",icon:(0,o.jsx)(m.In,{name:"pencil",size:13}),onClick:()=>$(!0),children:n("daily.edit")}),(0,o.jsx)(m.K0,{onClick:()=>T(!0),title:n("daily.addMission"),"aria-label":n("daily.addMission"),children:(0,o.jsx)(m.In,{name:"plus",size:13})})]})]}),ir("morning"),ir("afternoon"),ir("evening")]}),(0,o.jsx)(iw,{history:e2,total:e6,locale:t,t:n}),(0,o.jsx)(eN,{children:ec?(0,o.jsxs)(eL,{children:[(0,o.jsx)(eU,{children:n("daily.resetConfirm")}),(0,o.jsxs)(e_,{children:[(0,o.jsx)(m.$n,{variant:"danger",onClick:eO,style:{flex:1},children:n("daily.confirm")}),(0,o.jsx)(m.$n,{variant:"ghost",onClick:()=>ep(!1),style:{flex:1},children:n("daily.cancel")})]})]}):(0,o.jsx)(m.$n,{variant:"ghost",onClick:()=>ep(!0),children:n("daily.resetDay")})})]}),D.map(e=>(0,o.jsxs)(eA,{style:{left:e.x,top:e.y},children:["+",e.value]},e.id)),K&&(0,o.jsx)(eZ,{exiting:el,children:(0,o.jsxs)(eq,{children:[(0,o.jsx)(eW,{children:K.emoji}),(0,o.jsx)(eJ,{children:n("daily.levelUp")}),(0,o.jsx)(eX,{children:n(K.key)})]})}),(j||M)&&(0,o.jsx)(ih,{t:n,mission:M??void 0,onSave:e=>{M?eV(e):eQ(e),T(!1),z(null)},onClose:()=>{T(!1),z(null)}})]})},{}))}}]);