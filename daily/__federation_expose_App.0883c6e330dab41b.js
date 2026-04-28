"use strict";(self.webpackChunk_atlantis_daily=self.webpackChunk_atlantis_daily||[]).push([["362"],{3935(e,i,t){t.r(i),t.d(i,{default:()=>iw});var o=t(5723),n=t(7991),s=t(2727),r=t.n(s),a=t(6859),l=t.n(a),d=t(2799),c=t(6063),p=t(3236),m=t(3019),x=t(8170),h=t(948);let f=[{id:"brush-teeth",emoji:"toothbrush",translationKey:"daily.mission.brushTeeth",points:5,frame:"disc",color:c.w4.suites.learn,time:"07:30"},{id:"make-bed",emoji:"bed",translationKey:"daily.mission.makeBed",points:10,frame:"ring",color:c.w4.suites.vida,time:"08:00"},{id:"school-bag",emoji:"backpack",translationKey:"daily.mission.schoolBag",points:5,frame:"disc",color:c.w4.colors.accent,time:"08:15"},{id:"set-table",emoji:"utensils",translationKey:"daily.mission.setTable",points:10,frame:"polaroid",color:c.w4.suites.games,time:"12:30"},{id:"vegetables",emoji:"leaf",translationKey:"daily.mission.vegetables",points:5,frame:"ring",color:c.w4.suites.vida,time:"13:00"},{id:"homework",emoji:"edit",translationKey:"daily.mission.homework",points:15,frame:"hex",color:c.w4.suites.learn,time:"17:00"},{id:"tidy-room",emoji:"broom",translationKey:"daily.mission.tidyRoom",points:15,frame:"hex",color:c.w4.suites.ent,time:"17:30"},{id:"clothes-away",emoji:"shirt",translationKey:"daily.mission.clothesAway",points:10,frame:"stamp",color:c.w4.suites.ent,time:"18:00"},{id:"draw",emoji:"palette",translationKey:"daily.mission.draw",points:10,frame:"polaroid",color:c.w4.suites.lab,time:"18:30"},{id:"read",emoji:"book",translationKey:"daily.mission.read",points:15,frame:"stamp",color:c.w4.suites.lab,time:"19:30"},{id:"be-kind",emoji:"heart",translationKey:"daily.mission.beKind",points:10,frame:"disc",color:c.w4.suites.games}];function g(e){if(!e.time)return"morning";let[i]=e.time.split(":"),t=parseInt(i,10);return t<12?"morning":t<18?"afternoon":"evening"}let w="daily:notifications-asked";async function u(){if(!("u"<typeof window)&&"Notification"in window&&"default"===Notification.permission&&"1"!==await (0,c.qj)(w)){await (0,c.pJ)(w,"1");try{await Notification.requestPermission()}catch{}}}function y(){return{totalPoints:0,totalMissionsCompleted:0,completedToday:[],streakDays:[],lastResetDate:(0,m.todayISO)(),missions:f,history:{}}}let $=["toothbrush","bed","shirt","backpack","broom","utensils","leaf","book","edit","brain","graduation","palette","music","image","film","gamepad","heart","sun","moon","cloud","flame","target","trophy","star","sparkle","zap","clock","calendar","users","user","message","mail","send","globe","map-pin","home"],b=[{emoji:"\uD83C\uDF31",key:"daily.level.recruit"},{emoji:"\uD83E\uDDED",key:"daily.level.explorer"},{emoji:"⚔️",key:"daily.level.adventurer"},{emoji:"\uD83E\uDDB8",key:"daily.level.hero"},{emoji:"\uD83C\uDFC6",key:"daily.level.champion"},{emoji:"\uD83C\uDF1F",key:"daily.level.legend"}];function j(e){return Math.min(Math.floor(e/50),b.length-1)}let v=(0,d.keyframes)`
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
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.md};
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,I=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1 1 auto;
  min-width: 0;
  width: 100%;
`,F=l().div`
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: clamp(20px, 2.6vw, 28px);
  font-weight: 300;
  color: ${c.w4.colors.mainText};
  line-height: 1.2;
  letter-spacing: -0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 900px) {
    white-space: normal;
  }
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
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.accent};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.md};
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: ${c.w4.spacing.md};
  row-gap: ${c.w4.spacing.sm};
  position: relative;
  overflow: hidden;
  animation: ${M} 0.35s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${c.w4.colors.accent}, transparent);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: left;
  }
`,_=l().div`
  grid-row: 1 / 3;
  align-self: center;
  line-height: 0;

  @media (max-width: 600px) {
    grid-row: auto;
  }
`,A=l().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,Z=l().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
`,q=l().div`
  font-size: 16px;
  font-weight: 600;
  color: ${c.w4.colors.mainText};
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 600px) {
    white-space: normal;
  }
`,W=l().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  flex-wrap: wrap;
`,J=l().span`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: 99px;
  padding: 2px 8px;
  line-height: 1.4;
`,X=l().div`
  grid-column: 2 / 3;
  display: flex;
  gap: ${c.w4.spacing.sm};
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;

  @media (max-width: 600px) {
    grid-column: auto;
    justify-content: stretch;
    > * { flex: 1; }
  }
`,G=l().div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  gap: ${c.w4.spacing.lg};
  padding: ${c.w4.spacing.sm} 0;
`,Q=l().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.lg};
`,V=l().div`
  font-size: 48px;
  line-height: 1;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 8px ${c.w4.colors.shadow});
`,ee=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,ei=l().div`
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: 22px;
  font-weight: 400;
  color: ${c.w4.colors.mainText};
  line-height: 1.2;
`,et=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
`,eo=l().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${c.w4.spacing.sm};
`,en=l().div`
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
`,er=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextMuted};
`,ea=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.lg}) {
    min-width: 220px;
  }
`,el=l().div`
  position: relative;
  width: 180px;
  height: 180px;
  ${({pulsing:e})=>e?(0,d.css)`
          animation: ${z} 0.8s ease;
        `:""}
`,ed=l().div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`,ec=l().div`
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: 36px;
  font-weight: 400;
  color: ${c.w4.colors.mainText};
  line-height: 1;
`,ep=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,em=l().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,ex=l().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,eh=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ef=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
`,eg=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${c.w4.spacing.sm};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
    gap: ${c.w4.spacing.md};
  }
`,ew=l().div`
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
`,ey=l().div`
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
`,e$=l().div`
  border-radius: 50%;
  background: ${({color:e})=>`${e}28`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid ${({color:e})=>`${e}44`};
`,eb=l().div`
  border-radius: 50%;
  background: transparent;
  border: 2.5px solid ${({color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ej=l().div`
  border-radius: ${c.w4.borderRadius.md};
  background: ${({color:e})=>`${e}28`};
  border: 2px solid ${({color:e})=>`${e}55`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transform: rotate(8deg);
  box-shadow: 2px 2px 6px ${c.w4.colors.shadow};
`,ev=l().div`
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  background: ${({color:e})=>`${e}35`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ek=l().div`
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
`,eM=l().span`
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
`,eT=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
  min-height: 14px;
`,ez=l().div`
  font-size: 11px;
  font-weight: 700;
  color: ${({completed:e})=>e?c.w4.colors.success:c.w4.colors.accent};
  background: ${c.w4.colors.accentMuted};
  padding: 2px 6px;
  border-radius: 99px;
  white-space: nowrap;
`,eS=l().div`
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
`,eC=l().span`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.3;
`,eD=l().button`
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
`,eR=l().div`
  position: absolute;
  top: 6px;
  left: 6px;
  color: ${c.w4.colors.mainTextMuted};
  cursor: grab;
  line-height: 1;

  &:active { cursor: grabbing; }
`,eK=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
  margin-bottom: ${c.w4.spacing.md};
`,eP=l().h2`
  font-size: ${c.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  margin: 0;
`,eI=l().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,eF=l().div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  align-items: flex-end;
  height: 48px;
`,eB=l().div`
  min-height: 2px;
  height: ${({heightPct:e})=>Math.max(100*e,2)}%;
  background: ${({isToday:e})=>e?c.w4.colors.accent:c.w4.colors.border};
  border-radius: 2px 2px 0 0;
  transition: height 0.4s ease;
`,eE=l().div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,eY=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({isToday:e})=>e?c.w4.colors.accent:c.w4.colors.mainTextMuted};
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,eH=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,eO=l().div`
  display: flex;
  justify-content: flex-end;
`,eN=l().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.xs};
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: ${c.w4.spacing.md};
  animation: ${M} 0.2s ease;
`,eL=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  text-align: center;
`,eU=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
`,e_=l().div`
  position: fixed;
  pointer-events: none;
  font-size: 18px;
  font-weight: 700;
  color: ${c.w4.colors.accent};
  text-shadow: 0 0 8px ${c.w4.colors.accent};
  z-index: 9999;
  animation: ${v} 1.1s ease forwards;
`,eA=l().div`
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
`,eZ=l().div`
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
`,eq=l().div`
  font-size: 80px;
  line-height: 1;
`,eW=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.accent};
  font-weight: 700;
`,eJ=l().div`
  font-size: ${c.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
`,eX=l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${c.w4.zIndex.modal};
  padding: ${c.w4.spacing.md};
  animation: ${D} 0.2s ease;
`,eG=l().div`
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
`,eQ=l().h2`
  font-size: ${c.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  margin: 0;
`,eV=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  font-weight: 600;
  margin-bottom: ${c.w4.spacing.xs};
`;l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
`;let e0=l().input`
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
`,e4=l().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,e1=l().input`
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
`;let e2=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;
`,e6=l().div`
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
`,e8=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;
`,e9=l().button`
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
`,e7=l().div`
  display: flex;
  gap: 4px;
`,ie=l().button`
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
`,ii=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  justify-content: flex-end;
  padding-top: ${c.w4.spacing.xs};
  border-top: 1px solid ${c.w4.colors.borderSubtle};
`,it=l().div`
  display: flex;
  justify-content: center;
  padding: ${c.w4.spacing.sm} 0;
`,io=l().div`
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
`,is=l().span`
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
`,ir=l().div`
  font-size: 11px;
  font-weight: 700;
  color: ${c.w4.colors.accent};
  background: ${c.w4.colors.accentMuted};
  padding: 2px 7px;
  border-radius: 99px;
  align-self: flex-end;
`;function ia({value:e,size:i,color:t}){return(0,p.n6)(e)?(0,o.jsx)(p.In,{name:e,size:i,style:{color:t}}):(0,o.jsx)("span",{style:{fontSize:i},children:e})}function il({frame:e,emoji:i,color:t,size:n=64}){let s=Math.round(.5*n),r=(0,o.jsx)(ia,{value:i,size:s,color:t});switch(e){case"ring":return(0,o.jsx)(eb,{color:t,style:{width:n,height:n},children:r});case"stamp":return(0,o.jsx)(ej,{color:t,style:{width:n-4,height:n-4},children:r});case"hex":return(0,o.jsx)(ev,{color:t,style:{width:n,height:n},children:r});case"polaroid":return(0,o.jsx)(ek,{color:t,style:{width:n,height:n+4},children:(0,o.jsx)("div",{className:"inner",children:r})});default:return(0,o.jsx)(e$,{color:t,style:{width:n,height:n},children:r})}}let id=["disc","ring","stamp","hex","polaroid"];function ic({frame:e}){let i=c.w4.colors.accent;switch(e){case"ring":return(0,o.jsx)(eb,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"stamp":return(0,o.jsx)(ej,{color:i,style:{width:28,height:28},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"hex":return(0,o.jsx)(ev,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"polaroid":return(0,o.jsx)(ek,{color:i,style:{width:28,height:32},children:(0,o.jsx)("div",{className:"inner",children:(0,o.jsx)("span",{style:{fontSize:10},children:"✦"})})});default:return(0,o.jsx)(e$,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})})}}let ip=[c.w4.colors.accent,c.w4.colors.success,c.w4.suites.lab,c.w4.suites.vida,c.w4.suites.learn,c.w4.suites.games],im=[5,10,15,20,25];function ix({t:e,mission:i,onSave:t,onClose:s}){let a=!!i,l=i?.translationKey?e(i.translationKey):"",d=i&&im.includes(i.points)?i.points:10,[m,x]=(0,n.useState)(i?.name??l),[h,f]=(0,n.useState)(i?.emoji??"target"),[g,w]=(0,n.useState)(i?.frame??"disc"),[y,b]=(0,n.useState)(i?.color??c.w4.colors.accent),[j,v]=(0,n.useState)(d),[k,M]=(0,n.useState)(i?.time??""),T=(0,n.useRef)(null);(0,n.useEffect)(()=>{T.current?.focus();let e=e=>{"Escape"===e.key&&s()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[s]);let z=()=>{let e=m.trim();if(!e)return;let o=i?.translationKey&&e===l;k&&u(),t({id:i?.id??`custom-${Date.now().toString(36)}`,emoji:h||"target",points:j,frame:g,color:y,...o?{translationKey:i.translationKey}:{name:e},...k?{time:k}:{}})},S=(0,o.jsx)(eX,{onClick:e=>{e.target===e.currentTarget&&s()},children:(0,o.jsxs)(eG,{onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(eQ,{children:e(a?"daily.editMission.title":"daily.newMission.title")}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eV,{children:e("daily.newMission.preview")}),(0,o.jsx)(it,{children:(0,o.jsxs)(io,{children:[(0,o.jsx)(il,{frame:g,emoji:h||"target",color:y,size:52}),(0,o.jsx)(is,{children:m||e("daily.newMission.namePlaceholder")}),(0,o.jsxs)(ir,{children:["+",j," pts"]})]})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eV,{children:e("daily.newMission.name")}),(0,o.jsx)(e0,{ref:T,placeholder:e("daily.newMission.namePlaceholder"),value:m,onChange:e=>x(e.target.value),onKeyDown:e=>{"Enter"===e.key&&m.trim()&&z()}})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eV,{children:e("daily.newMission.icon")}),(0,o.jsx)(e6,{children:$.map(e=>(0,o.jsx)(e3,{type:"button",selected:h===e,onClick:()=>f(e),"aria-label":e,children:(0,o.jsx)(p.In,{name:e,size:20,style:{color:y}})},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eV,{children:e("daily.newMission.frame")}),(0,o.jsx)(e2,{children:id.map(e=>(0,o.jsx)(e5,{type:"button",selected:g===e,onClick:()=>w(e),title:e,children:(0,o.jsx)(ic,{frame:e})},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eV,{children:e("daily.newMission.color")}),(0,o.jsx)(e8,{children:ip.map(e=>(0,o.jsx)(e9,{type:"button",color:e,selected:y===e,onClick:()=>b(e)},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eV,{children:e("daily.newMission.points")}),(0,o.jsx)(e7,{children:im.map(e=>(0,o.jsx)(ie,{type:"button",selected:j===e,onClick:()=>v(e),children:e},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(eV,{children:e("daily.newMission.time")}),(0,o.jsxs)(e4,{children:[(0,o.jsx)(e1,{type:"time",value:k,onChange:e=>M(e.target.value)}),k&&(0,o.jsx)(p.$n,{variant:"ghost",size:"sm",onClick:()=>M(""),children:e("daily.newMission.timeClear")})]})]}),(0,o.jsxs)(ii,{children:[(0,o.jsx)(p.$n,{variant:"ghost",size:"sm",onClick:s,children:e("daily.cancel")}),(0,o.jsx)(p.$n,{variant:"primary",size:"sm",disabled:!m.trim(),onClick:z,children:e(a?"daily.editMission.save":"daily.newMission.save")})]})]})});return r().createPortal(S,document.body)}function ih({completed:e,total:i,t,pulsing:n}){let s=2*Math.PI*76,r=i>0?e/i:0;return(0,o.jsx)(ea,{children:(0,o.jsxs)(el,{pulsing:n,children:[(0,o.jsxs)("svg",{width:180,height:180,viewBox:"0 0 180 180","aria-hidden":!0,children:[(0,o.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:c.w4.colors.border,strokeWidth:14}),(0,o.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:c.w4.colors.accent,strokeWidth:14,strokeDasharray:s,strokeDashoffset:s*(1-r),strokeLinecap:"round",transform:"rotate(-90 90 90)",style:{transition:"stroke-dashoffset 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"}})]}),(0,o.jsxs)(ed,{children:[(0,o.jsxs)(ec,{children:[e,"/",i]}),(0,o.jsx)(ep,{children:t("daily.progress.today")})]})]})})}function ig({history:e,total:i,locale:t,t:n}){let s=(0,m.todayISO)(),r=new Intl.DateTimeFormat("pt"===t?"pt-PT":"en-US",{weekday:"short"}),a=Math.max(...e.map(e=>e.count),1);return(0,o.jsxs)(eI,{children:[(0,o.jsx)(eH,{children:(0,o.jsx)(p.YZ,{children:n("daily.sparkline.label")})}),(0,o.jsx)(eF,{children:e.map(e=>{let i=e.count/a;return(0,o.jsx)(eB,{heightPct:i,isToday:e.date===s},e.date)})}),(0,o.jsx)(eE,{children:e.map(e=>{let i=r.format(new Date(e.date+"T00:00:00"));return(0,o.jsx)(eY,{isToday:e.date===s,children:i.slice(0,3)},e.date)})})]})}function iw({topBarRight:e}){let i,[t]=(0,x.Ym)(),s=(0,n.useMemo)(()=>(0,x.Nx)(t,h.A),[t]),[r]=(0,m.useProfile)(),[a,l]=(0,n.useState)(!1),[d,w]=(0,n.useState)(y),[u,$]=(0,n.useState)(!1),[v,k]=(0,n.useState)(!1),[M,T]=(0,n.useState)(null),[z,S]=(0,n.useState)(new Set),[C,D]=(0,n.useState)([]),[R,ea]=(0,n.useState)(null),[el,ed]=(0,n.useState)(!1),[ec,ep]=(0,n.useState)(!1),[e$,eb]=(0,n.useState)(null),[ej,ev]=(0,n.useState)(null),[ek,eI]=(0,n.useState)(!1),[eF,eB]=(0,n.useState)([]),eE=(0,n.useRef)(0),eY=function(){let[e,i]=(0,n.useState)(()=>new Date);return(0,n.useEffect)(()=>{let e=setInterval(()=>i(new Date),6e4);return()=>clearInterval(e)},[6e4]),e}();(0,n.useEffect)(()=>{let e=!1;return m.daily.load().then(i=>{if(e)return;let t=(0,m.todayISO)();if(i){let e=i.missions&&i.missions.length>0?i.missions:f,o={...i.history??{}};!i.history&&i.completedToday.length>0&&(o[i.lastResetDate]=[...i.completedToday]),i.lastResetDate!==t?(i.completedToday.length>0&&(o[i.lastResetDate]=[...i.completedToday]),w({...i,completedToday:o[t]??[],lastResetDate:t,missions:e,history:o})):w({...i,missions:e,history:o,completedToday:o[t]??i.completedToday})}else w(y());l(!0)}),()=>{e=!0}},[]),(0,n.useEffect)(()=>{a&&m.daily.save(d)},[d,a]);let eH=(0,n.useCallback)((e,i)=>{w(t=>{let o=t.completedToday.includes(e.id),n=(0,m.todayISO)();if(o){let i=Math.max(0,t.totalPoints-e.points),o=t.completedToday.filter(i=>i!==e.id),s=o.length<3?t.streakDays.filter(e=>e!==n):t.streakDays,r={...t.history,[n]:o};return{...t,totalPoints:i,totalMissionsCompleted:Math.max(0,t.totalMissionsCompleted-1),completedToday:o,streakDays:s,history:r}}let s=t.totalPoints+e.points,r=[...t.completedToday,e.id],a=r.length>=3&&!t.streakDays.includes(n)?[...t.streakDays,n]:t.streakDays,l={...t.history,[n]:r};if(S(i=>new Set(i).add(e.id)),setTimeout(()=>{S(i=>{let t=new Set(i);return t.delete(e.id),t})},600),eI(!0),setTimeout(()=>eI(!1),850),navigator.vibrate?.(50),i){let t=i.getBoundingClientRect(),o=++eE.current;D(i=>[...i,{id:o,value:e.points,x:t.right-60,y:t.top+t.height/2}]),setTimeout(()=>{D(e=>e.filter(e=>e.id!==o))},1200)}eB(i=>i.filter(i=>i!==e.id));let d=j(t.totalPoints),c=j(s);return c>d&&(ea(b[c]),ed(!1),setTimeout(()=>{ed(!0),setTimeout(()=>ea(null),450)},2e3)),{...t,totalPoints:s,totalMissionsCompleted:t.totalMissionsCompleted+1,completedToday:r,streakDays:a,history:l}})},[]),eX=(0,n.useCallback)(()=>{w(e=>{let i=(0,m.todayISO)(),t={...e.history};return delete t[i],{...e,completedToday:[],lastResetDate:i,history:t}}),eB([]),ep(!1)},[]),eG=(0,n.useCallback)(e=>{w(i=>({...i,missions:i.missions.filter(i=>i.id!==e),completedToday:i.completedToday.filter(i=>i!==e)}))},[]),eQ=(0,n.useCallback)(e=>{w(i=>({...i,missions:[...i.missions,e]}))},[]),eV=(0,n.useCallback)(e=>{w(i=>({...i,missions:i.missions.map(i=>i.id===e.id?e:i)}))},[]),e0=(0,n.useCallback)((e,i)=>{e!==i&&w(t=>{let o=t.missions,n=o.findIndex(i=>i.id===e),s=o.findIndex(e=>e.id===i);if(n<0||s<0)return t;let r=[...o],[a]=r.splice(n,1);return r.splice(s,0,a),{...t,missions:r}})},[]);j(d.totalPoints);let e4=Math.floor(d.totalPoints/50)+1,e1=(0,m.computeStreakFromHistory)(d.history??{}),e2=(0,n.useMemo)(()=>(0,m.getDailyHistory)(d,7),[d]),e6=d.missions.length,e3=(0,n.useMemo)(()=>{let e=new Set(d.missions.map(e=>e.id));return d.completedToday.filter(i=>e.has(i)).length},[d.completedToday,d.missions]),e5=Math.max(0,e6-e3),e8=(0,n.useMemo)(()=>{let e=new Set(d.completedToday);return d.missions.filter(i=>e.has(i.id)).reduce((e,i)=>e+(i.points||0),0)},[d.completedToday,d.missions]),e9=(0,n.useMemo)(()=>{let e,i=d.missions.filter(e=>!d.completedToday.includes(e.id)&&!eF.includes(e.id));if(0===i.length)return null;let t=(e=new Date().getHours())<12?"morning":e<18?"afternoon":"evening",o=i.filter(e=>g(e)===t);if(o.length>0)return o[0];let n="morning"===t?"afternoon":"evening",s=i.filter(e=>g(e)===n);return s.length>0?s[0]:i[0]},[d.missions,d.completedToday,eF]),e7=(0,n.useMemo)(()=>({morning:d.missions.filter(e=>"morning"===g(e)),afternoon:d.missions.filter(e=>"afternoon"===g(e)),evening:d.missions.filter(e=>"evening"===g(e))}),[d.missions]),ie=(i=eY.getHours())<12?"daily.greet.morning":i<18?"daily.greet.afternoon":"daily.greet.evening",ii=(r.interests.length,s("daily.greet.defaultName")),it=eY.toLocaleTimeString("pt"===t?"pt-PT":"en-US",{hour:"2-digit",minute:"2-digit"}),io=eY.toLocaleDateString("pt"===t?"pt-PT":"en-US",{weekday:"long",day:"numeric",month:"long"}),is=0===e5?s("daily.greet.allDone"):s("daily.greet.remaining",{n:e5,total:e6});function ir(e){let i=`daily.chapter.${e}`,t=e7[e];if(0===t.length)return null;let n=t.filter(e=>d.completedToday.includes(e.id)).length;return(0,o.jsxs)(ex,{children:[(0,o.jsxs)(eh,{children:[(0,o.jsx)(p.YZ,{children:s(i)}),(0,o.jsx)(ef,{children:s("daily.chapter.count",{done:n,total:t.length})})]}),(0,o.jsx)(eg,{children:t.map(e=>{let i=d.completedToday.includes(e.id),t=z.has(e.id),n=e.translationKey?s(e.translationKey):e.name??"",r=e.color??c.w4.colors.accent,a=e.frame??"disc";return(0,o.jsxs)(eu,{completed:i,flashing:t,isOver:!1,onClick:i=>eH(e,i.currentTarget),role:"checkbox","aria-checked":i,tabIndex:0,onKeyDown:i=>{(" "===i.key||"Enter"===i.key)&&(i.preventDefault(),eH(e,i.currentTarget))},children:[(0,o.jsx)(il,{frame:a,emoji:e.emoji,color:r,size:40}),(0,o.jsx)(eM,{completed:i,children:n}),(0,o.jsxs)(eT,{children:[e.time?(0,o.jsx)(eC,{children:e.time}):(0,o.jsx)("span",{}),(0,o.jsxs)(ez,{completed:i,children:["+",e.points]})]}),i&&(0,o.jsx)(eS,{children:"✓"})]},e.id)})})]},e)}return(0,o.jsxs)(p.PE,{title:s("daily.title"),sidebar:null,topBarRight:e,children:[(0,o.jsxs)(K,{children:[(0,o.jsxs)(P,{children:[(0,o.jsxs)(I,{children:[(0,o.jsx)(F,{children:s(ie,{name:ii})}),(0,o.jsxs)(B,{children:[io," \xb7 ",it," \xb7 ",is]})]}),(0,o.jsxs)(E,{children:[(0,o.jsxs)(Y,{children:["\uD83E\uDDED ",s("daily.chip.level",{n:e4})]}),(0,o.jsxs)(H,{title:s("daily.chip.xpHint"),children:[(0,o.jsx)(O,{children:(0,o.jsx)(N,{pct:d.totalPoints%50/50*100})}),(0,o.jsxs)("span",{children:[d.totalPoints%50,"/",50]})]}),(0,o.jsxs)(Y,{children:["⭐ ",s("daily.chip.points",{n:d.totalPoints})]}),(0,o.jsxs)(Y,{children:["\uD83D\uDD25 ",e1>1?s("daily.chip.streak",{n:e1}):s("daily.chip.streakSingle",{n:e1})]}),(0,o.jsxs)(Y,{children:["✅ ",s("daily.chip.done",{n:e3})]})]})]}),(0,o.jsxs)(L,{children:[(0,o.jsx)(U,{centered:!!e9,children:e9?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_,{children:(0,o.jsx)(il,{frame:e9.frame??"disc",emoji:e9.emoji,color:e9.color??c.w4.colors.accent,size:40})}),(0,o.jsxs)(A,{children:[(0,o.jsxs)(Z,{children:[(0,o.jsx)("span",{children:s(`daily.focus.eyebrow.${g(e9)}`)}),(0,o.jsx)("span",{"aria-hidden":"true",children:"\xb7"}),(0,o.jsx)("span",{children:s("daily.focus.nextUp")})]}),(0,o.jsx)(q,{children:e9.translationKey?s(e9.translationKey):e9.name??""}),(0,o.jsxs)(W,{children:[(0,o.jsxs)("span",{children:["+",e9.points," pts"]}),e9.time&&(0,o.jsx)(J,{children:s("daily.focus.timeChip",{time:e9.time})})]})]}),(0,o.jsxs)(X,{children:[(0,o.jsx)(p.$n,{variant:"primary",onClick:e=>{eH(e9,e.target.closest("button"))},children:s("daily.focus.markDone")}),(0,o.jsx)(p.$n,{variant:"ghost",onClick:()=>eB(e=>[...e,e9.id]),children:s("daily.focus.skip")})]})]}):(0,o.jsxs)(G,{children:[(0,o.jsxs)(Q,{children:[(0,o.jsx)(V,{children:"\uD83C\uDF1F"}),(0,o.jsxs)(ee,{children:[(0,o.jsx)(ei,{children:s("daily.focus.allDone")}),(0,o.jsx)(et,{children:s("daily.focus.allDoneBody")})]})]}),(0,o.jsxs)(eo,{children:[(0,o.jsxs)(en,{children:[(0,o.jsxs)(es,{children:["+",e8]}),(0,o.jsx)(er,{children:s("daily.summary.pointsToday")})]}),(0,o.jsxs)(en,{children:[(0,o.jsx)(es,{children:e3}),(0,o.jsx)(er,{children:s("daily.summary.missions")})]}),(0,o.jsxs)(en,{children:[(0,o.jsx)(es,{children:e1}),(0,o.jsx)(er,{children:s("daily.summary.streak")})]})]})]})}),(0,o.jsx)(ih,{completed:e3,total:e6,t:s,pulsing:ek})]}),u?(0,o.jsxs)("div",{children:[(0,o.jsxs)(eK,{children:[(0,o.jsx)(eP,{children:s("daily.sectionMissions")}),(0,o.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.xs},children:[(0,o.jsx)(p.$n,{variant:"accent",size:"sm",icon:(0,o.jsx)(p.In,{name:"check",size:13}),onClick:()=>{$(!1),k(!1)},children:s("daily.done")}),(0,o.jsx)(p.K0,{onClick:()=>k(!0),title:s("daily.addMission"),"aria-label":s("daily.addMission"),children:(0,o.jsx)(p.In,{name:"plus",size:13})})]})]}),(0,o.jsx)(ew,{children:d.missions.map(e=>{let i=e$===e.id,t=ej===e.id&&e$!==e.id,n=e.translationKey?s(e.translationKey):e.name??"",r=e.color??c.w4.colors.accent,a=e.frame??"disc";return(0,o.jsxs)(ey,{isOver:t,role:"button",tabIndex:0,"aria-label":s("daily.editMission.open"),title:s("daily.editMission.open"),style:{opacity:i?.3:1},onClick:()=>T(e),onKeyDown:i=>{("Enter"===i.key||" "===i.key)&&(i.preventDefault(),T(e))},onDragOver:i=>{i.preventDefault(),i.dataTransfer.dropEffect="move",e$&&e$!==e.id&&ev(e.id)},onDragLeave:e=>{e.currentTarget===e.target&&ev(null)},onDrop:i=>{i.preventDefault(),e$&&e0(e$,e.id),eb(null),ev(null)},children:[(0,o.jsx)(eR,{"aria-hidden":!0,draggable:!0,onClick:e=>e.stopPropagation(),onDragStart:i=>{eb(e.id),i.dataTransfer.effectAllowed="move",i.dataTransfer.setData("text/plain",e.id)},onDragEnd:()=>{eb(null),ev(null)},children:(0,o.jsx)(p.In,{name:"grip-vertical",size:14})}),(0,o.jsx)(il,{frame:a,emoji:e.emoji,color:r,size:40}),(0,o.jsx)(eM,{completed:!1,children:n}),(0,o.jsxs)(eT,{children:[e.time?(0,o.jsx)(eC,{children:e.time}):(0,o.jsx)("span",{}),(0,o.jsxs)(ez,{completed:!1,children:["+",e.points]})]}),(0,o.jsx)(eD,{onClick:i=>{i.stopPropagation(),eG(e.id)},"aria-label":s("daily.delete"),title:s("daily.delete"),children:"\xd7"})]},e.id)})}),(0,o.jsx)("div",{style:{marginTop:c.w4.spacing.sm},children:(0,o.jsx)(p.$n,{variant:"ghost",icon:(0,o.jsx)(p.In,{name:"plus",size:13}),onClick:()=>k(!0),children:s("daily.addMission")})})]}):(0,o.jsxs)(em,{children:[(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,o.jsx)(p.YZ,{children:s("daily.sectionMissions")}),(0,o.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.xs},children:[(0,o.jsx)(p.$n,{variant:"ghost",size:"sm",icon:(0,o.jsx)(p.In,{name:"pencil",size:13}),onClick:()=>$(!0),children:s("daily.edit")}),(0,o.jsx)(p.K0,{onClick:()=>k(!0),title:s("daily.addMission"),"aria-label":s("daily.addMission"),children:(0,o.jsx)(p.In,{name:"plus",size:13})})]})]}),ir("morning"),ir("afternoon"),ir("evening")]}),(0,o.jsx)(ig,{history:e2,total:e6,locale:t,t:s}),(0,o.jsx)(eO,{children:ec?(0,o.jsxs)(eN,{children:[(0,o.jsx)(eL,{children:s("daily.resetConfirm")}),(0,o.jsxs)(eU,{children:[(0,o.jsx)(p.$n,{variant:"danger",onClick:eX,style:{flex:1},children:s("daily.confirm")}),(0,o.jsx)(p.$n,{variant:"ghost",onClick:()=>ep(!1),style:{flex:1},children:s("daily.cancel")})]})]}):(0,o.jsx)(p.$n,{variant:"ghost",onClick:()=>ep(!0),children:s("daily.resetDay")})})]}),C.map(e=>(0,o.jsxs)(e_,{style:{left:e.x,top:e.y},children:["+",e.value]},e.id)),R&&(0,o.jsx)(eA,{exiting:el,children:(0,o.jsxs)(eZ,{children:[(0,o.jsx)(eq,{children:R.emoji}),(0,o.jsx)(eW,{children:s("daily.levelUp")}),(0,o.jsx)(eJ,{children:s(R.key)})]})}),(v||M)&&(0,o.jsx)(ix,{t:s,mission:M??void 0,onSave:e=>{M?eV(e):eQ(e),k(!1),T(null)},onClose:()=>{k(!1),T(null)}})]})}}}]);