"use strict";(self.webpackChunk_atlantis_daily=self.webpackChunk_atlantis_daily||[]).push([["362"],{3935(e,i,t){t.r(i),t.d(i,{default:()=>ig});var o=t(5723),s=t(7991),n=t(2727),r=t.n(n),a=t(6859),l=t.n(a),d=t(2799),c=t(4764),p=t(9463),m=t(5030),x=t(8170),h=t(948);let f=[{id:"brush-teeth",emoji:"toothbrush",translationKey:"daily.mission.brushTeeth",points:5,frame:"disc",color:c.w4.suites.learn,time:"07:30"},{id:"make-bed",emoji:"bed",translationKey:"daily.mission.makeBed",points:10,frame:"ring",color:c.w4.suites.vida,time:"08:00"},{id:"school-bag",emoji:"backpack",translationKey:"daily.mission.schoolBag",points:5,frame:"disc",color:c.w4.colors.accent,time:"08:15"},{id:"set-table",emoji:"utensils",translationKey:"daily.mission.setTable",points:10,frame:"polaroid",color:c.w4.suites.games,time:"12:30"},{id:"vegetables",emoji:"leaf",translationKey:"daily.mission.vegetables",points:5,frame:"ring",color:c.w4.suites.vida,time:"13:00"},{id:"homework",emoji:"edit",translationKey:"daily.mission.homework",points:15,frame:"hex",color:c.w4.suites.learn,time:"17:00"},{id:"tidy-room",emoji:"broom",translationKey:"daily.mission.tidyRoom",points:15,frame:"hex",color:c.w4.suites.ent,time:"17:30"},{id:"clothes-away",emoji:"shirt",translationKey:"daily.mission.clothesAway",points:10,frame:"stamp",color:c.w4.suites.ent,time:"18:00"},{id:"draw",emoji:"palette",translationKey:"daily.mission.draw",points:10,frame:"polaroid",color:c.w4.suites.lab,time:"18:30"},{id:"read",emoji:"book",translationKey:"daily.mission.read",points:15,frame:"stamp",color:c.w4.suites.lab,time:"19:30"},{id:"be-kind",emoji:"heart",translationKey:"daily.mission.beKind",points:10,frame:"disc",color:c.w4.suites.games}];function g(e){if(!e.time)return"morning";let[i]=e.time.split(":"),t=parseInt(i,10);return t<12?"morning":t<18?"afternoon":"evening"}let u="daily:notifications-asked";async function w(){if(!("u"<typeof window)&&"Notification"in window&&"default"===Notification.permission&&"1"!==await (0,c.qj)(u)){await (0,c.pJ)(u,"1");try{await Notification.requestPermission()}catch{}}}function y(){return{totalPoints:0,totalMissionsCompleted:0,completedToday:[],streakDays:[],lastResetDate:(0,p.todayISO)(),missions:f,history:{}}}let $=["toothbrush","bed","shirt","backpack","broom","utensils","leaf","book","edit","brain","graduation","palette","music","image","film","gamepad","heart","sun","moon","cloud","flame","target","trophy","star","sparkle","zap","clock","calendar","users","user","message","mail","send","globe","map-pin","home"],b=[{emoji:"\uD83C\uDF31",key:"daily.level.recruit"},{emoji:"\uD83E\uDDED",key:"daily.level.explorer"},{emoji:"⚔️",key:"daily.level.adventurer"},{emoji:"\uD83E\uDDB8",key:"daily.level.hero"},{emoji:"\uD83C\uDFC6",key:"daily.level.champion"},{emoji:"\uD83C\uDF1F",key:"daily.level.legend"}];function j(e){return Math.min(Math.floor(e/50),b.length-1)}let v=(0,d.keyframes)`
  0%   { opacity: 1; transform: translateY(0) scale(1); }
  80%  { opacity: 1; transform: translateY(-48px) scale(1.15); }
  100% { opacity: 0; transform: translateY(-72px) scale(0.9); }
`,k=(0,d.keyframes)`
  0%   { box-shadow: none; }
  30%  { box-shadow: 0 0 0 3px ${c.w4.colors.accent}; }
  100% { box-shadow: none; }
`,M=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,T=(0,d.keyframes)`
  0%   { transform: scale(0.6); }
  60%  { transform: scale(1.25); }
  100% { transform: scale(1); }
`,z=(0,d.keyframes)`
  0%, 100% { filter: drop-shadow(0 0 4px ${c.w4.colors.accent}); }
  50%       { filter: drop-shadow(0 0 12px ${c.w4.colors.accent}); }
`,S=(0,d.keyframes)`
  0%   { opacity: 0; transform: scale(0.7); }
  60%  { opacity: 1; transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
`,C=(0,d.keyframes)`
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.2); }
`,D=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,R=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(16px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;(0,d.keyframes)`
  from { width: 0%; }
`,(0,d.keyframes)`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;let K=l().div`
  display: flex;
  flex-direction: column;
  background: radial-gradient(ellipse at 50% 0%, ${c.w4.colors.accentMuted} 0%, ${c.w4.colors.mainBg} 60%);
  padding: ${c.w4.spacing.lg} ${c.w4.spacing.md} ${c.w4.spacing.xl};
  gap: ${c.w4.spacing.lg};
  animation: ${M} 0.3s ease;
  width: 100%;

  @media (min-width: ${c.w4.breakpoints.md}) {
    padding: ${c.w4.spacing.xl};
  }
`,P=l().div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${c.w4.spacing.md};
`,I=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,F=l().div`
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: 28px;
  font-weight: 300;
  color: ${c.w4.colors.mainText};
  line-height: 1.2;
  letter-spacing: -0.01em;
`,B=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
`,E=l().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.xs};
  flex-wrap: wrap;
  flex-shrink: 0;
`,Y=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${c.w4.colors.mainTextMuted};
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
  white-space: nowrap;
  line-height: 1.4;
`,H=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${c.w4.colors.mainTextMuted};
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;
  line-height: 1.4;
`,O=l().div`
  width: 48px;
  height: 5px;
  border-radius: 99px;
  background: ${c.w4.colors.border};
  overflow: hidden;
  position: relative;
`,N=l().div`
  width: ${({pct:e})=>`${e}%`};
  height: 100%;
  background: linear-gradient(
    90deg,
    ${c.w4.colors.accent},
    ${c.w4.colors.accentHover}
  );
  border-radius: inherit;
  transition: width ${c.w4.transitions.slow};
`,L=l().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.lg};

  @media (min-width: ${c.w4.breakpoints.lg}) {
    flex-direction: row;
    align-items: stretch;
  }
`,U=l().div`
  flex: 1;
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.accent};
  border-radius: ${c.w4.borderRadius.xl};
  padding: ${c.w4.spacing.xl} ${c.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: ${({centered:e=!0})=>e?"center":"stretch"};
  justify-content: ${({centered:e=!0})=>e?"flex-start":"center"};
  gap: ${c.w4.spacing.md};
  position: relative;
  overflow: hidden;
  animation: ${M} 0.35s ease;

  /* Subtle accent gradient top edge */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${c.w4.colors.accent}, transparent);
  }
`,Z=l().div`
  align-self: flex-start;
`,_=l().div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 4px 12px ${c.w4.colors.shadowStrong});
`,A=l().div`
  font-size: 22px;
  font-weight: 600;
  color: ${c.w4.colors.mainText};
  text-align: center;
`,q=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  font-family: ${c.w4.typography.fontFamilyMono};
`,W=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
`,J=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  width: 100%;

  > * { flex: 1; }
`,X=l().div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  gap: ${c.w4.spacing.lg};
  padding: ${c.w4.spacing.sm} 0;
`,G=l().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.lg};
`,Q=l().div`
  font-size: 48px;
  line-height: 1;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 8px ${c.w4.colors.shadow});
`,V=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,ee=l().div`
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: 22px;
  font-weight: 400;
  color: ${c.w4.colors.mainText};
  line-height: 1.2;
`,ei=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
`,et=l().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${c.w4.spacing.sm};
`,eo=l().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md};
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
`,es=l().div`
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: 22px;
  font-weight: 400;
  color: ${c.w4.colors.mainText};
  line-height: 1;
`,en=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextMuted};
`,er=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.lg}) {
    min-width: 220px;
  }
`,ea=l().div`
  position: relative;
  width: 180px;
  height: 180px;
  ${({pulsing:e})=>e?(0,d.css)`
          animation: ${z} 0.8s ease;
        `:""}
`,el=l().div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`,ed=l().div`
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: 36px;
  font-weight: 400;
  color: ${c.w4.colors.mainText};
  line-height: 1;
`,ec=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,ep=l().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,em=l().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,ex=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,eh=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
`,ef=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${c.w4.spacing.sm};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
    gap: ${c.w4.spacing.md};
  }
`,eg=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${c.w4.spacing.sm};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
    gap: ${c.w4.spacing.md};
  }
`,eu=l().div`
  width: 100%;
  min-width: 0;
  min-height: 116px;
  background: ${({completed:e})=>e?c.w4.colors.accentMuted:c.w4.colors.surface};
  border: 1px solid ${({completed:e,isOver:i})=>i?c.w4.colors.accent:e?c.w4.colors.success:c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
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
    border-color ${c.w4.transitions.base},
    background ${c.w4.transitions.base},
    box-shadow ${c.w4.transitions.base},
    transform ${c.w4.transitions.fast};
  ${({flashing:e})=>e?(0,d.css)`
          animation: ${k} 0.6s ease forwards;
        `:""}
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${({completed:e})=>e?c.w4.colors.success:c.w4.colors.accentHover};
    transform: translateY(-1px);
    box-shadow: ${c.w4.elevation.sm};
  }

  &:focus-visible {
    ${c.w4.focusRing}
  }
`,ew=l().div`
  width: 100%;
  min-width: 0;
  min-height: 116px;
  background: ${c.w4.colors.surface};
  border: 1px solid ${({isOver:e})=>e?c.w4.colors.accent:c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  padding: 12px 8px 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border-color ${c.w4.transitions.base}, background ${c.w4.transitions.fast};
  user-select: none;

  &:hover {
    border-color: ${c.w4.colors.accentHover};
    background: ${c.w4.colors.codeBg};
  }

  &:focus-visible {
    ${c.w4.focusRing}
  }
`,ey=l().div`
  border-radius: 50%;
  background: ${({color:e})=>`${e}28`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid ${({color:e})=>`${e}44`};
`,e$=l().div`
  border-radius: 50%;
  background: transparent;
  border: 2.5px solid ${({color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,eb=l().div`
  border-radius: ${c.w4.borderRadius.md};
  background: ${({color:e})=>`${e}28`};
  border: 2px solid ${({color:e})=>`${e}55`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transform: rotate(8deg);
  box-shadow: 2px 2px 6px ${c.w4.colors.shadow};
`,ej=l().div`
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  background: ${({color:e})=>`${e}35`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ev=l().div`
  background: ${c.w4.colors.mainText};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 1px 2px 6px ${c.w4.colors.shadow};

  .inner {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background: ${({color:e})=>`${e}30`};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,ek=l().span`
  font-size: 11px;
  color: ${({completed:e})=>e?c.w4.colors.mainTextMuted:c.w4.colors.mainText};
  font-weight: 500;
  text-decoration: ${({completed:e})=>e?"line-through":"none"};
  text-decoration-color: ${({completed:e})=>e?`${c.w4.colors.success}99`:"transparent"};
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
`,eM=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
  min-height: 14px;
`,eT=l().div`
  font-size: 11px;
  font-weight: 700;
  color: ${({completed:e})=>e?c.w4.colors.success:c.w4.colors.accent};
  background: ${c.w4.colors.accentMuted};
  padding: 2px 6px;
  border-radius: 99px;
  white-space: nowrap;
`,ez=l().div`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${c.w4.colors.success};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: #fff;
  animation: ${T} 0.35s ease;
`,eS=l().span`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.3;
`,eC=l().button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${c.w4.colors.danger};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 11px;
  cursor: pointer;
  padding: 0;
  opacity: 0.85;
  transition: opacity ${c.w4.transitions.fast};

  &:hover { opacity: 1; }
`,eD=l().div`
  position: absolute;
  top: 6px;
  left: 6px;
  color: ${c.w4.colors.mainTextMuted};
  cursor: grab;
  line-height: 1;

  &:active { cursor: grabbing; }
`,eR=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
  margin-bottom: ${c.w4.spacing.md};
`,eK=l().h2`
  font-size: ${c.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  margin: 0;
`,eP=l().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,eI=l().div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  align-items: flex-end;
  height: 48px;
`,eF=l().div`
  min-height: 2px;
  height: ${({heightPct:e})=>Math.max(100*e,2)}%;
  background: ${({isToday:e})=>e?c.w4.colors.accent:c.w4.colors.border};
  border-radius: 2px 2px 0 0;
  transition: height 0.4s ease;
`,eB=l().div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,eE=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({isToday:e})=>e?c.w4.colors.accent:c.w4.colors.mainTextMuted};
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,eY=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,eH=l().div`
  display: flex;
  justify-content: flex-end;
`,eO=l().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.xs};
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: ${c.w4.spacing.md};
  animation: ${M} 0.2s ease;
`,eN=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  text-align: center;
`,eL=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
`,eU=l().div`
  position: fixed;
  pointer-events: none;
  font-size: 18px;
  font-weight: 700;
  color: ${c.w4.colors.accent};
  text-shadow: 0 0 8px ${c.w4.colors.accent};
  z-index: 9999;
  animation: ${v} 1.1s ease forwards;
`,eZ=l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  ${({exiting:e})=>e?(0,d.css)`
          animation: ${C} 0.4s ease forwards;
        `:(0,d.css)`
          animation: ${S} 0.4s ease forwards;
        `}
`,e_=l().div`
  background: ${c.w4.colors.surface};
  border: 2px solid ${c.w4.colors.accent};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.xxl} ${c.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${c.w4.spacing.md};
  text-align: center;
  box-shadow: 0 0 40px ${c.w4.colors.shadowStrong};
`,eA=l().div`
  font-size: 80px;
  line-height: 1;
`,eq=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.accent};
  font-weight: 700;
`,eW=l().div`
  font-size: ${c.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
`,eJ=l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${c.w4.zIndex.modal};
  padding: ${c.w4.spacing.md};
  animation: ${D} 0.2s ease;
`,eX=l().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.xl};
  padding: ${c.w4.spacing.lg};
  width: 100%;
  max-width: 440px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
  box-shadow: ${c.w4.elevation.lg};
  animation: ${R} 0.25s ease;
`,eG=l().h2`
  font-size: ${c.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  margin: 0;
`,eQ=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  font-weight: 600;
  margin-bottom: ${c.w4.spacing.xs};
`;l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
`;let eV=l().input`
  width: 100%;
  padding: 10px 12px;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: ${c.w4.typography.fontSizeBase};
  font-family: ${c.w4.typography.fontFamily};
  transition: border-color ${c.w4.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${c.w4.colors.accent};
  }

  &::placeholder {
    color: ${c.w4.colors.mainTextFaint};
  }
`,e0=l().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,e4=l().input`
  padding: 8px 10px;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: ${c.w4.typography.fontSizeBase};
  font-family: ${c.w4.typography.fontFamilyMono};
  color-scheme: dark;
  transition: border-color ${c.w4.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${c.w4.colors.accent};
  }
`;l().input`
  width: 56px;
  text-align: center;
  padding: 10px 8px;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: 22px;
  font-family: ${c.w4.typography.fontFamily};
  flex-shrink: 0;
  transition: border-color ${c.w4.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${c.w4.colors.accent};
  }
`;let e1=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;
`,e2=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
  gap: 6px;
  max-height: 180px;
  overflow-y: auto;
  padding: ${c.w4.spacing.sm};
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
`,e3=l().button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({selected:e})=>e?c.w4.colors.accentMuted:"transparent"};
  border: 1px solid ${({selected:e})=>e?c.w4.colors.accent:"transparent"};
  border-radius: ${c.w4.borderRadius.sm};
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  transition: background ${c.w4.transitions.fast}, border-color ${c.w4.transitions.fast};
  font-family: ${c.w4.typography.fontFamily};

  &:hover {
    background: ${c.w4.colors.surfaceHover};
  }
`,e5=l().button`
  width: 52px;
  height: 52px;
  border-radius: ${c.w4.borderRadius.md};
  border: 2px solid ${({selected:e})=>e?c.w4.colors.accent:c.w4.colors.border};
  background: ${({selected:e})=>e?c.w4.colors.accentMuted:c.w4.colors.mainBg};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color ${c.w4.transitions.fast}, background ${c.w4.transitions.fast};
  padding: 0;

  &:hover {
    border-color: ${c.w4.colors.accentHover};
  }
`,e6=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;
`,e8=l().button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  border: 3px solid ${({selected:e})=>e?"#fff":"transparent"};
  cursor: pointer;
  padding: 0;
  outline: 2px solid ${({selected:e,color:i})=>e?i:"transparent"};
  outline-offset: 2px;
  transition: outline-color ${c.w4.transitions.fast}, border-color ${c.w4.transitions.fast};

  &:hover {
    outline-color: ${({color:e})=>e};
  }
`,e9=l().div`
  display: flex;
  gap: 4px;
`,e7=l().button`
  flex: 1;
  padding: 8px 4px;
  border-radius: ${c.w4.borderRadius.sm};
  border: 1px solid ${({selected:e})=>e?c.w4.colors.accent:c.w4.colors.border};
  background: ${({selected:e})=>e?c.w4.colors.accent:c.w4.colors.mainBg};
  color: ${({selected:e})=>e?"#fff":c.w4.colors.mainTextMuted};
  font-size: ${c.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background ${c.w4.transitions.fast}, border-color ${c.w4.transitions.fast}, color ${c.w4.transitions.fast};

  &:hover {
    border-color: ${c.w4.colors.accent};
  }
`,ie=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  justify-content: flex-end;
  padding-top: ${c.w4.spacing.xs};
  border-top: 1px solid ${c.w4.colors.borderSubtle};
`,ii=l().div`
  display: flex;
  justify-content: center;
  padding: ${c.w4.spacing.sm} 0;
`,it=l().div`
  width: 120px;
  aspect-ratio: 1 / 1.1;
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${c.w4.spacing.md} ${c.w4.spacing.sm} ${c.w4.spacing.sm};
  position: relative;
  pointer-events: none;
`,io=l().span`
  font-size: 11px;
  color: ${c.w4.colors.mainText};
  font-weight: 500;
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.3;
  width: 100%;
`,is=l().div`
  font-size: 11px;
  font-weight: 700;
  color: ${c.w4.colors.accent};
  background: ${c.w4.colors.accentMuted};
  padding: 2px 7px;
  border-radius: 99px;
  align-self: flex-end;
`;function ir({value:e,size:i,color:t}){return(0,m.n6)(e)?(0,o.jsx)(m.In,{name:e,size:i,style:{color:t}}):(0,o.jsx)("span",{style:{fontSize:i},children:e})}function ia({frame:e,emoji:i,color:t,size:s=64}){let n=Math.round(.5*s),r=(0,o.jsx)(ir,{value:i,size:n,color:t});switch(e){case"ring":return(0,o.jsx)(e$,{color:t,style:{width:s,height:s},children:r});case"stamp":return(0,o.jsx)(eb,{color:t,style:{width:s-4,height:s-4},children:r});case"hex":return(0,o.jsx)(ej,{color:t,style:{width:s,height:s},children:r});case"polaroid":return(0,o.jsx)(ev,{color:t,style:{width:s,height:s+4},children:(0,o.jsx)("div",{className:"inner",children:r})});default:return(0,o.jsx)(ey,{color:t,style:{width:s,height:s},children:r})}}let il=["disc","ring","stamp","hex","polaroid"];function id({frame:e}){let i=c.w4.colors.accent;switch(e){case"ring":return(0,o.jsx)(e$,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"stamp":return(0,o.jsx)(eb,{color:i,style:{width:28,height:28},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"hex":return(0,o.jsx)(ej,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"polaroid":return(0,o.jsx)(ev,{color:i,style:{width:28,height:32},children:(0,o.jsx)("div",{className:"inner",children:(0,o.jsx)("span",{style:{fontSize:10},children:"✦"})})});default:return(0,o.jsx)(ey,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})})}}let ic=[c.w4.colors.accent,c.w4.colors.success,c.w4.suites.lab,c.w4.suites.vida,c.w4.suites.learn,c.w4.suites.games],ip=[5,10,15,20,25];function im({t:e,mission:i,onSave:t,onClose:n}){let a=!!i,l=i?.translationKey?e(i.translationKey):"",d=i&&ip.includes(i.points)?i.points:10,[p,x]=(0,s.useState)(i?.name??l),[h,f]=(0,s.useState)(i?.emoji??"target"),[g,u]=(0,s.useState)(i?.frame??"disc"),[y,b]=(0,s.useState)(i?.color??c.w4.colors.accent),[j,v]=(0,s.useState)(d),[k,M]=(0,s.useState)(i?.time??""),T=(0,s.useRef)(null);(0,s.useEffect)(()=>{T.current?.focus();let e=e=>{"Escape"===e.key&&n()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[n]);let z=()=>{let e=p.trim();if(!e)return;let o=i?.translationKey&&e===l;k&&w(),t({id:i?.id??`custom-${Date.now().toString(36)}`,emoji:h||"target",points:j,frame:g,color:y,...o?{translationKey:i.translationKey}:{name:e},...k?{time:k}:{}})},S=(0,o.jsx)(eJ,{onClick:e=>{e.target===e.currentTarget&&n()},children:(0,o.jsxs)(eX,{onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(eG,{children:e(a?"daily.editMission.title":"daily.newMission.title")}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eQ,{children:e("daily.newMission.preview")}),(0,o.jsx)(ii,{children:(0,o.jsxs)(it,{children:[(0,o.jsx)(ia,{frame:g,emoji:h||"target",color:y,size:52}),(0,o.jsx)(io,{children:p||e("daily.newMission.namePlaceholder")}),(0,o.jsxs)(is,{children:["+",j," pts"]})]})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eQ,{children:e("daily.newMission.name")}),(0,o.jsx)(eV,{ref:T,placeholder:e("daily.newMission.namePlaceholder"),value:p,onChange:e=>x(e.target.value),onKeyDown:e=>{"Enter"===e.key&&p.trim()&&z()}})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eQ,{children:e("daily.newMission.icon")}),(0,o.jsx)(e2,{children:$.map(e=>(0,o.jsx)(e3,{type:"button",selected:h===e,onClick:()=>f(e),"aria-label":e,children:(0,o.jsx)(m.In,{name:e,size:20,style:{color:y}})},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eQ,{children:e("daily.newMission.frame")}),(0,o.jsx)(e1,{children:il.map(e=>(0,o.jsx)(e5,{type:"button",selected:g===e,onClick:()=>u(e),title:e,children:(0,o.jsx)(id,{frame:e})},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eQ,{children:e("daily.newMission.color")}),(0,o.jsx)(e6,{children:ic.map(e=>(0,o.jsx)(e8,{type:"button",color:e,selected:y===e,onClick:()=>b(e)},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eQ,{children:e("daily.newMission.points")}),(0,o.jsx)(e9,{children:ip.map(e=>(0,o.jsx)(e7,{type:"button",selected:j===e,onClick:()=>v(e),children:e},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eQ,{children:e("daily.newMission.time")}),(0,o.jsxs)(e0,{children:[(0,o.jsx)(e4,{type:"time",value:k,onChange:e=>M(e.target.value)}),k&&(0,o.jsx)(m.$n,{variant:"ghost",size:"sm",onClick:()=>M(""),children:e("daily.newMission.timeClear")})]})]}),(0,o.jsxs)(ie,{children:[(0,o.jsx)(m.$n,{variant:"ghost",size:"sm",onClick:n,children:e("daily.cancel")}),(0,o.jsx)(m.$n,{variant:"primary",size:"sm",disabled:!p.trim(),onClick:z,children:e(a?"daily.editMission.save":"daily.newMission.save")})]})]})});return r().createPortal(S,document.body)}function ix({completed:e,total:i,t,pulsing:s}){let n=2*Math.PI*76,r=i>0?e/i:0;return(0,o.jsx)(er,{children:(0,o.jsxs)(ea,{pulsing:s,children:[(0,o.jsxs)("svg",{width:180,height:180,viewBox:"0 0 180 180","aria-hidden":!0,children:[(0,o.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:c.w4.colors.border,strokeWidth:14}),(0,o.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:c.w4.colors.accent,strokeWidth:14,strokeDasharray:n,strokeDashoffset:n*(1-r),strokeLinecap:"round",transform:"rotate(-90 90 90)",style:{transition:"stroke-dashoffset 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"}})]}),(0,o.jsxs)(el,{children:[(0,o.jsxs)(ed,{children:[e,"/",i]}),(0,o.jsx)(ec,{children:t("daily.progress.today")})]})]})})}function ih({history:e,total:i,locale:t,t:s}){let n=(0,p.todayISO)(),r=new Intl.DateTimeFormat("pt"===t?"pt-PT":"en-US",{weekday:"short"}),a=Math.max(...e.map(e=>e.count),1);return(0,o.jsxs)(eP,{children:[(0,o.jsx)(eY,{children:(0,o.jsx)(m.YZ,{children:s("daily.sparkline.label")})}),(0,o.jsx)(eI,{children:e.map(e=>{let i=e.count/a;return(0,o.jsx)(eF,{heightPct:i,isToday:e.date===n},e.date)})}),(0,o.jsx)(eB,{children:e.map(e=>{let i=r.format(new Date(e.date+"T00:00:00"));return(0,o.jsx)(eE,{isToday:e.date===n,children:i.slice(0,3)},e.date)})})]})}function ig({topBarRight:e}){let i,[t]=(0,x.Ym)(),n=(0,s.useMemo)(()=>(0,x.Nx)(t,h.A),[t]),[r]=(0,p.useProfile)(),[a,l]=(0,s.useState)(!1),[d,u]=(0,s.useState)(y),[w,$]=(0,s.useState)(!1),[v,k]=(0,s.useState)(!1),[M,T]=(0,s.useState)(null),[z,S]=(0,s.useState)(new Set),[C,D]=(0,s.useState)([]),[R,er]=(0,s.useState)(null),[ea,el]=(0,s.useState)(!1),[ed,ec]=(0,s.useState)(!1),[ey,e$]=(0,s.useState)(null),[eb,ej]=(0,s.useState)(null),[ev,eP]=(0,s.useState)(!1),[eI,eF]=(0,s.useState)([]),eB=(0,s.useRef)(0),eE=function(){let[e,i]=(0,s.useState)(()=>new Date);return(0,s.useEffect)(()=>{let e=setInterval(()=>i(new Date),6e4);return()=>clearInterval(e)},[6e4]),e}();(0,s.useEffect)(()=>{let e=!1;return p.daily.load().then(i=>{if(e)return;let t=(0,p.todayISO)();if(i){let e=i.missions&&i.missions.length>0?i.missions:f,o={...i.history??{}};!i.history&&i.completedToday.length>0&&(o[i.lastResetDate]=[...i.completedToday]),i.lastResetDate!==t?(i.completedToday.length>0&&(o[i.lastResetDate]=[...i.completedToday]),u({...i,completedToday:o[t]??[],lastResetDate:t,missions:e,history:o})):u({...i,missions:e,history:o,completedToday:o[t]??i.completedToday})}else u(y());l(!0)}),()=>{e=!0}},[]),(0,s.useEffect)(()=>{a&&p.daily.save(d)},[d,a]);let eY=(0,s.useCallback)((e,i)=>{u(t=>{let o=t.completedToday.includes(e.id),s=(0,p.todayISO)();if(o){let i=Math.max(0,t.totalPoints-e.points),o=t.completedToday.filter(i=>i!==e.id),n=o.length<3?t.streakDays.filter(e=>e!==s):t.streakDays,r={...t.history,[s]:o};return{...t,totalPoints:i,totalMissionsCompleted:Math.max(0,t.totalMissionsCompleted-1),completedToday:o,streakDays:n,history:r}}let n=t.totalPoints+e.points,r=[...t.completedToday,e.id],a=r.length>=3&&!t.streakDays.includes(s)?[...t.streakDays,s]:t.streakDays,l={...t.history,[s]:r};if(S(i=>new Set(i).add(e.id)),setTimeout(()=>{S(i=>{let t=new Set(i);return t.delete(e.id),t})},600),eP(!0),setTimeout(()=>eP(!1),850),navigator.vibrate?.(50),i){let t=i.getBoundingClientRect(),o=++eB.current;D(i=>[...i,{id:o,value:e.points,x:t.right-60,y:t.top+t.height/2}]),setTimeout(()=>{D(e=>e.filter(e=>e.id!==o))},1200)}eF(i=>i.filter(i=>i!==e.id));let d=j(t.totalPoints),c=j(n);return c>d&&(er(b[c]),el(!1),setTimeout(()=>{el(!0),setTimeout(()=>er(null),450)},2e3)),{...t,totalPoints:n,totalMissionsCompleted:t.totalMissionsCompleted+1,completedToday:r,streakDays:a,history:l}})},[]),eJ=(0,s.useCallback)(()=>{u(e=>{let i=(0,p.todayISO)(),t={...e.history};return delete t[i],{...e,completedToday:[],lastResetDate:i,history:t}}),eF([]),ec(!1)},[]),eX=(0,s.useCallback)(e=>{u(i=>({...i,missions:i.missions.filter(i=>i.id!==e),completedToday:i.completedToday.filter(i=>i!==e)}))},[]),eG=(0,s.useCallback)(e=>{u(i=>({...i,missions:[...i.missions,e]}))},[]),eQ=(0,s.useCallback)(e=>{u(i=>({...i,missions:i.missions.map(i=>i.id===e.id?e:i)}))},[]),eV=(0,s.useCallback)((e,i)=>{e!==i&&u(t=>{let o=t.missions,s=o.findIndex(i=>i.id===e),n=o.findIndex(e=>e.id===i);if(s<0||n<0)return t;let r=[...o],[a]=r.splice(s,1);return r.splice(n,0,a),{...t,missions:r}})},[]);j(d.totalPoints);let e0=Math.floor(d.totalPoints/50)+1,e4=(0,p.computeStreakFromHistory)(d.history??{}),e1=(0,s.useMemo)(()=>(0,p.getDailyHistory)(d,7),[d]),e2=d.missions.length,e3=(0,s.useMemo)(()=>{let e=new Set(d.missions.map(e=>e.id));return d.completedToday.filter(i=>e.has(i)).length},[d.completedToday,d.missions]),e5=Math.max(0,e2-e3),e6=(0,s.useMemo)(()=>{let e=new Set(d.completedToday);return d.missions.filter(i=>e.has(i.id)).reduce((e,i)=>e+(i.points||0),0)},[d.completedToday,d.missions]),e8=(0,s.useMemo)(()=>{let e,i=d.missions.filter(e=>!d.completedToday.includes(e.id)&&!eI.includes(e.id));if(0===i.length)return null;let t=(e=new Date().getHours())<12?"morning":e<18?"afternoon":"evening",o=i.filter(e=>g(e)===t);if(o.length>0)return o[0];let s="morning"===t?"afternoon":"evening",n=i.filter(e=>g(e)===s);return n.length>0?n[0]:i[0]},[d.missions,d.completedToday,eI]),e9=(0,s.useMemo)(()=>({morning:d.missions.filter(e=>"morning"===g(e)),afternoon:d.missions.filter(e=>"afternoon"===g(e)),evening:d.missions.filter(e=>"evening"===g(e))}),[d.missions]),e7=(i=eE.getHours())<12?"daily.greet.morning":i<18?"daily.greet.afternoon":"daily.greet.evening",ie=(r.interests.length,n("daily.greet.defaultName")),ii=eE.toLocaleTimeString("pt"===t?"pt-PT":"en-US",{hour:"2-digit",minute:"2-digit"}),it=eE.toLocaleDateString("pt"===t?"pt-PT":"en-US",{weekday:"long",day:"numeric",month:"long"}),io=0===e5?n("daily.greet.allDone"):n("daily.greet.remaining",{n:e5,total:e2});function is(e){let i=`daily.chapter.${e}`,t=e9[e];if(0===t.length)return null;let s=t.filter(e=>d.completedToday.includes(e.id)).length;return(0,o.jsxs)(em,{children:[(0,o.jsxs)(ex,{children:[(0,o.jsx)(m.YZ,{children:n(i)}),(0,o.jsx)(eh,{children:n("daily.chapter.count",{done:s,total:t.length})})]}),(0,o.jsx)(ef,{children:t.map(e=>{let i=d.completedToday.includes(e.id),t=z.has(e.id),s=e.translationKey?n(e.translationKey):e.name??"",r=e.color??c.w4.colors.accent,a=e.frame??"disc";return(0,o.jsxs)(eu,{completed:i,flashing:t,isOver:!1,onClick:i=>eY(e,i.currentTarget),role:"checkbox","aria-checked":i,tabIndex:0,onKeyDown:i=>{(" "===i.key||"Enter"===i.key)&&(i.preventDefault(),eY(e,i.currentTarget))},children:[(0,o.jsx)(ia,{frame:a,emoji:e.emoji,color:r,size:40}),(0,o.jsx)(ek,{completed:i,children:s}),(0,o.jsxs)(eM,{children:[e.time?(0,o.jsx)(eS,{children:e.time}):(0,o.jsx)("span",{}),(0,o.jsxs)(eT,{completed:i,children:["+",e.points]})]}),i&&(0,o.jsx)(ez,{children:"✓"})]},e.id)})})]},e)}return(0,o.jsxs)(c.PE,{title:n("daily.title"),sidebar:null,topBarRight:e,children:[(0,o.jsxs)(K,{children:[(0,o.jsxs)(P,{children:[(0,o.jsxs)(I,{children:[(0,o.jsx)(F,{children:n(e7,{name:ie})}),(0,o.jsxs)(B,{children:[it," \xb7 ",ii," \xb7 ",io]})]}),(0,o.jsxs)(E,{children:[(0,o.jsxs)(Y,{children:["\uD83E\uDDED ",n("daily.chip.level",{n:e0})]}),(0,o.jsxs)(H,{title:n("daily.chip.xpHint"),children:[(0,o.jsx)(O,{children:(0,o.jsx)(N,{pct:d.totalPoints%50/50*100})}),(0,o.jsxs)("span",{children:[d.totalPoints%50,"/",50]})]}),(0,o.jsxs)(Y,{children:["⭐ ",n("daily.chip.points",{n:d.totalPoints})]}),(0,o.jsxs)(Y,{children:["\uD83D\uDD25 ",e4>1?n("daily.chip.streak",{n:e4}):n("daily.chip.streakSingle",{n:e4})]}),(0,o.jsxs)(Y,{children:["✅ ",n("daily.chip.done",{n:e3})]})]})]}),(0,o.jsxs)(L,{children:[(0,o.jsxs)(U,{centered:!!e8,children:[(0,o.jsx)(Z,{children:(0,o.jsx)(m.YZ,{children:e8?n("daily.focus.nextUp"):n("daily.focus.dayComplete")})}),e8?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_,{children:(0,o.jsx)(ia,{frame:e8.frame??"disc",emoji:e8.emoji,color:e8.color??c.w4.colors.accent,size:72})}),(0,o.jsx)(A,{children:e8.translationKey?n(e8.translationKey):e8.name??""}),(0,o.jsxs)(q,{children:["+",e8.points," pts"]}),e8.time&&(0,o.jsx)(W,{children:n("daily.focus.timeChip",{time:e8.time})}),(0,o.jsxs)(J,{children:[(0,o.jsx)(m.$n,{variant:"primary",onClick:e=>{eY(e8,e.target.closest("button"))},children:n("daily.focus.markDone")}),(0,o.jsx)(m.$n,{variant:"ghost",onClick:()=>eF(e=>[...e,e8.id]),children:n("daily.focus.skip")})]})]}):(0,o.jsxs)(X,{children:[(0,o.jsxs)(G,{children:[(0,o.jsx)(Q,{children:"\uD83C\uDF1F"}),(0,o.jsxs)(V,{children:[(0,o.jsx)(ee,{children:n("daily.focus.allDone")}),(0,o.jsx)(ei,{children:n("daily.focus.allDoneBody")})]})]}),(0,o.jsxs)(et,{children:[(0,o.jsxs)(eo,{children:[(0,o.jsxs)(es,{children:["+",e6]}),(0,o.jsx)(en,{children:n("daily.summary.pointsToday")})]}),(0,o.jsxs)(eo,{children:[(0,o.jsx)(es,{children:e3}),(0,o.jsx)(en,{children:n("daily.summary.missions")})]}),(0,o.jsxs)(eo,{children:[(0,o.jsx)(es,{children:e4}),(0,o.jsx)(en,{children:n("daily.summary.streak")})]})]})]})]}),(0,o.jsx)(ix,{completed:e3,total:e2,t:n,pulsing:ev})]}),w?(0,o.jsxs)("div",{children:[(0,o.jsxs)(eR,{children:[(0,o.jsx)(eK,{children:n("daily.sectionMissions")}),(0,o.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.xs},children:[(0,o.jsx)(m.$n,{variant:"accent",size:"sm",icon:(0,o.jsx)(m.In,{name:"check",size:13}),onClick:()=>{$(!1),k(!1)},children:n("daily.done")}),(0,o.jsx)(m.K0,{onClick:()=>k(!0),title:n("daily.addMission"),"aria-label":n("daily.addMission"),children:(0,o.jsx)(m.In,{name:"plus",size:13})})]})]}),(0,o.jsx)(eg,{children:d.missions.map(e=>{let i=ey===e.id,t=eb===e.id&&ey!==e.id,s=e.translationKey?n(e.translationKey):e.name??"",r=e.color??c.w4.colors.accent,a=e.frame??"disc";return(0,o.jsxs)(ew,{isOver:t,role:"button",tabIndex:0,"aria-label":n("daily.editMission.open"),title:n("daily.editMission.open"),style:{opacity:i?.3:1},onClick:()=>T(e),onKeyDown:i=>{("Enter"===i.key||" "===i.key)&&(i.preventDefault(),T(e))},onDragOver:i=>{i.preventDefault(),i.dataTransfer.dropEffect="move",ey&&ey!==e.id&&ej(e.id)},onDragLeave:e=>{e.currentTarget===e.target&&ej(null)},onDrop:i=>{i.preventDefault(),ey&&eV(ey,e.id),e$(null),ej(null)},children:[(0,o.jsx)(eD,{"aria-hidden":!0,draggable:!0,onClick:e=>e.stopPropagation(),onDragStart:i=>{e$(e.id),i.dataTransfer.effectAllowed="move",i.dataTransfer.setData("text/plain",e.id)},onDragEnd:()=>{e$(null),ej(null)},children:(0,o.jsx)(m.In,{name:"grip-vertical",size:14})}),(0,o.jsx)(ia,{frame:a,emoji:e.emoji,color:r,size:40}),(0,o.jsx)(ek,{completed:!1,children:s}),(0,o.jsxs)(eM,{children:[e.time?(0,o.jsx)(eS,{children:e.time}):(0,o.jsx)("span",{}),(0,o.jsxs)(eT,{completed:!1,children:["+",e.points]})]}),(0,o.jsx)(eC,{onClick:i=>{i.stopPropagation(),eX(e.id)},"aria-label":n("daily.delete"),title:n("daily.delete"),children:"\xd7"})]},e.id)})}),(0,o.jsx)("div",{style:{marginTop:c.w4.spacing.sm},children:(0,o.jsx)(m.$n,{variant:"ghost",icon:(0,o.jsx)(m.In,{name:"plus",size:13}),onClick:()=>k(!0),children:n("daily.addMission")})})]}):(0,o.jsxs)(ep,{children:[(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,o.jsx)(m.YZ,{children:n("daily.sectionMissions")}),(0,o.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.xs},children:[(0,o.jsx)(m.$n,{variant:"ghost",size:"sm",icon:(0,o.jsx)(m.In,{name:"pencil",size:13}),onClick:()=>$(!0),children:n("daily.edit")}),(0,o.jsx)(m.K0,{onClick:()=>k(!0),title:n("daily.addMission"),"aria-label":n("daily.addMission"),children:(0,o.jsx)(m.In,{name:"plus",size:13})})]})]}),is("morning"),is("afternoon"),is("evening")]}),(0,o.jsx)(ih,{history:e1,total:e2,locale:t,t:n}),(0,o.jsx)(eH,{children:ed?(0,o.jsxs)(eO,{children:[(0,o.jsx)(eN,{children:n("daily.resetConfirm")}),(0,o.jsxs)(eL,{children:[(0,o.jsx)(m.$n,{variant:"danger",onClick:eJ,style:{flex:1},children:n("daily.confirm")}),(0,o.jsx)(m.$n,{variant:"ghost",onClick:()=>ec(!1),style:{flex:1},children:n("daily.cancel")})]})]}):(0,o.jsx)(m.$n,{variant:"ghost",onClick:()=>ec(!0),children:n("daily.resetDay")})})]}),C.map(e=>(0,o.jsxs)(eU,{style:{left:e.x,top:e.y},children:["+",e.value]},e.id)),R&&(0,o.jsx)(eZ,{exiting:ea,children:(0,o.jsxs)(e_,{children:[(0,o.jsx)(eA,{children:R.emoji}),(0,o.jsx)(eq,{children:n("daily.levelUp")}),(0,o.jsx)(eW,{children:n(R.key)})]})}),(v||M)&&(0,o.jsx)(im,{t:n,mission:M??void 0,onSave:e=>{M?eQ(e):eG(e),k(!1),T(null)},onClose:()=>{k(!1),T(null)}})]})}}}]);