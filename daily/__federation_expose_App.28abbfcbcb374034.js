"use strict";(self.webpackChunk_atlantis_daily=self.webpackChunk_atlantis_daily||[]).push([["6362"],{3935(e,i,t){t.r(i),t.d(i,{default:()=>i$});var o=t(5723),n=t(7991),s=t(2727),r=t.n(s),a=t(6859),l=t.n(a),d=t(2799),c=t(4486),p=t(2938),m=t(8170),x=t(5609),h=t(1365),f=t(8320),g=t(536),w=t(948);let y=[{id:"brush-teeth",emoji:"\uD83E\uDEA5",translationKey:"daily.mission.brushTeeth",points:5,frame:"disc",color:c.w4.suites.learn,time:"07:30"},{id:"make-bed",emoji:"\uD83D\uDECF️",translationKey:"daily.mission.makeBed",points:10,frame:"ring",color:c.w4.suites.vida,time:"08:00"},{id:"school-bag",emoji:"\uD83C\uDF92",translationKey:"daily.mission.schoolBag",points:5,frame:"disc",color:c.w4.colors.accent,time:"08:15"},{id:"set-table",emoji:"\uD83C\uDF7D️",translationKey:"daily.mission.setTable",points:10,frame:"polaroid",color:c.w4.suites.games,time:"12:30"},{id:"vegetables",emoji:"\uD83E\uDD57",translationKey:"daily.mission.vegetables",points:5,frame:"ring",color:c.w4.suites.vida,time:"13:00"},{id:"homework",emoji:"\uD83D\uDCDD",translationKey:"daily.mission.homework",points:15,frame:"hex",color:c.w4.suites.learn,time:"17:00"},{id:"tidy-room",emoji:"\uD83E\uDDF9",translationKey:"daily.mission.tidyRoom",points:15,frame:"hex",color:c.w4.suites.ent,time:"17:30"},{id:"clothes-away",emoji:"\uD83E\uDDE4",translationKey:"daily.mission.clothesAway",points:10,frame:"stamp",color:c.w4.suites.ent,time:"18:00"},{id:"draw",emoji:"\uD83C\uDFA8",translationKey:"daily.mission.draw",points:10,frame:"polaroid",color:c.w4.suites.lab,time:"18:30"},{id:"read",emoji:"\uD83D\uDCDA",translationKey:"daily.mission.read",points:15,frame:"stamp",color:c.w4.suites.lab,time:"19:30"},{id:"be-kind",emoji:"\uD83E\uDD17",translationKey:"daily.mission.beKind",points:10,frame:"disc",color:c.w4.suites.games}];function u(e){if(!e.time)return"morning";let[i]=e.time.split(":"),t=parseInt(i,10);return t<12?"morning":t<18?"afternoon":"evening"}let $="daily:notifications-asked";async function b(){if(!("u"<typeof window)&&"Notification"in window&&"default"===Notification.permission&&"1"!==await (0,c.qj)($)){await (0,c.pJ)($,"1");try{await Notification.requestPermission()}catch{}}}function j(){return{totalPoints:0,totalMissionsCompleted:0,completedToday:[],streakDays:[],lastResetDate:(0,c.dR)(),missions:y,history:{}}}let v=["\uD83E\uDEA5","\uD83E\uDDF4","\uD83D\uDEC1","\uD83D\uDC8A","\uD83E\uDE7A","\uD83E\uDDFC","\uD83E\uDE92","\uD83E\uDDD8","\uD83E\uDD57","\uD83C\uDF4E","\uD83E\uDD55","\uD83D\uDCA7","\uD83C\uDF75","\uD83E\uDD5B","\uD83C\uDF73","\uD83E\uDD66","\uD83C\uDFC3","\uD83D\uDEB4","\uD83E\uDDD7","\uD83C\uDFCA","⚽","\uD83C\uDFC0","\uD83C\uDFBE","\uD83E\uDD38","\uD83D\uDCDA","\uD83D\uDCDD","✏️","\uD83C\uDF93","\uD83E\uDDE0","\uD83D\uDCA1","\uD83D\uDD2C","\uD83D\uDDE3️","\uD83D\uDECF️","\uD83E\uDDF9","\uD83E\uDDFA","\uD83C\uDF7D️","\uD83E\uDDFD","\uD83E\uDDCA","\uD83C\uDF31","\uD83E\uDEB4","\uD83C\uDFA8","\uD83C\uDFAD","\uD83C\uDFB8","\uD83C\uDFB9","\uD83D\uDCF7","\uD83C\uDFAC","✂️","\uD83D\uDD8D️","\uD83E\uDD17","❤️","\uD83C\uDF08","\uD83C\uDF81","\uD83D\uDC8C","\uD83E\uDEC2","\uD83D\uDE4F","\uD83C\uDF1F","\uD83C\uDFAF","\uD83D\uDD25","\uD83C\uDFC6","⏰","\uD83D\uDCC5","✨","\uD83D\uDE80","⭐"],k=[{emoji:"\uD83C\uDF31",key:"daily.level.recruit"},{emoji:"\uD83E\uDDED",key:"daily.level.explorer"},{emoji:"⚔️",key:"daily.level.adventurer"},{emoji:"\uD83E\uDDB8",key:"daily.level.hero"},{emoji:"\uD83C\uDFC6",key:"daily.level.champion"},{emoji:"\uD83C\uDF1F",key:"daily.level.legend"}];function M(e){return Math.min(Math.floor(e/50),k.length-1)}let T=(0,d.keyframes)`
  0%   { opacity: 1; transform: translateY(0) scale(1); }
  80%  { opacity: 1; transform: translateY(-48px) scale(1.15); }
  100% { opacity: 0; transform: translateY(-72px) scale(0.9); }
`,z=(0,d.keyframes)`
  0%   { box-shadow: none; }
  30%  { box-shadow: 0 0 0 3px ${c.w4.colors.accent}; }
  100% { box-shadow: none; }
`,S=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,C=(0,d.keyframes)`
  0%   { transform: scale(0.6); }
  60%  { transform: scale(1.25); }
  100% { transform: scale(1); }
`,D=(0,d.keyframes)`
  0%, 100% { filter: drop-shadow(0 0 4px ${c.w4.colors.accent}); }
  50%       { filter: drop-shadow(0 0 12px ${c.w4.colors.accent}); }
`,R=(0,d.keyframes)`
  0%   { opacity: 0; transform: scale(0.7); }
  60%  { opacity: 1; transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
`,K=(0,d.keyframes)`
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.2); }
`,P=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,F=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(16px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;(0,d.keyframes)`
  from { width: 0%; }
`,(0,d.keyframes)`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;let B=l().div`
  display: flex;
  flex-direction: column;
  background: radial-gradient(ellipse at 50% 0%, ${c.w4.colors.accentMuted} 0%, ${c.w4.colors.mainBg} 60%);
  padding: ${c.w4.spacing.lg} ${c.w4.spacing.md} ${c.w4.spacing.xl};
  gap: ${c.w4.spacing.lg};
  animation: ${S} 0.3s ease;
  width: 100%;

  @media (min-width: ${c.w4.breakpoints.md}) {
    padding: ${c.w4.spacing.xl};
  }
`,E=l().div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${c.w4.spacing.md};
`,Y=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,I=l().div`
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: 28px;
  font-weight: 300;
  color: ${c.w4.colors.mainText};
  line-height: 1.2;
  letter-spacing: -0.01em;
`,A=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
`,H=l().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.xs};
  flex-wrap: wrap;
  flex-shrink: 0;
`,L=l().div`
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
`,N=l().div`
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
`,U=l().div`
  width: 48px;
  height: 5px;
  border-radius: 99px;
  background: ${c.w4.colors.border};
  overflow: hidden;
  position: relative;
`,Z=l().div`
  width: ${({pct:e})=>`${e}%`};
  height: 100%;
  background: linear-gradient(
    90deg,
    ${c.w4.colors.accent},
    ${c.w4.colors.accentHover}
  );
  border-radius: inherit;
  transition: width 0.35s ${c.w4.transitions.easing};
`,_=l().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.lg};

  @media (min-width: ${c.w4.breakpoints.lg}) {
    flex-direction: row;
    align-items: stretch;
  }
`,O=l().div`
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
  animation: ${S} 0.35s ease;

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
`,q=l().div`
  align-self: flex-start;
`,W=l().div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 4px 12px ${c.w4.colors.shadowStrong});
`,J=l().div`
  font-size: 22px;
  font-weight: 600;
  color: ${c.w4.colors.mainText};
  text-align: center;
`,X=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  font-family: ${c.w4.typography.fontFamilyMono};
`,G=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
`,Q=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  width: 100%;

  > * { flex: 1; }
`,V=l().div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  gap: ${c.w4.spacing.lg};
  padding: ${c.w4.spacing.sm} 0;
`,ee=l().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.lg};
`,ei=l().div`
  font-size: 48px;
  line-height: 1;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 8px ${c.w4.colors.shadow});
`,et=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,eo=l().div`
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: 22px;
  font-weight: 400;
  color: ${c.w4.colors.mainText};
  line-height: 1.2;
`,en=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
`,es=l().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${c.w4.spacing.sm};
`,er=l().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md};
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
`,ea=l().div`
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: 22px;
  font-weight: 400;
  color: ${c.w4.colors.mainText};
  line-height: 1;
`,el=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextMuted};
`,ed=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${c.w4.spacing.md};

  @media (min-width: ${c.w4.breakpoints.lg}) {
    min-width: 220px;
  }
`,ec=l().div`
  position: relative;
  width: 180px;
  height: 180px;
  ${({pulsing:e})=>e?(0,d.css)`
          animation: ${D} 0.8s ease;
        `:""}
`,ep=l().div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`,em=l().div`
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: 36px;
  font-weight: 400;
  color: ${c.w4.colors.mainText};
  line-height: 1;
`,ex=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${c.w4.colors.mainTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,eh=l().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
`,ef=l().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,eg=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ew=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
`,ey=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${c.w4.spacing.sm};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
    gap: ${c.w4.spacing.md};
  }
`,eu=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${c.w4.spacing.sm};

  @media (min-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
    gap: ${c.w4.spacing.md};
  }
`,e$=l().div`
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
          animation: ${z} 0.6s ease forwards;
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
`,eb=l().div`
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
`,ej=l().div`
  border-radius: 50%;
  background: ${({color:e})=>`${e}28`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid ${({color:e})=>`${e}44`};
`,ev=l().div`
  border-radius: 50%;
  background: transparent;
  border: 2.5px solid ${({color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ek=l().div`
  border-radius: ${c.w4.borderRadius.md};
  background: ${({color:e})=>`${e}28`};
  border: 2px solid ${({color:e})=>`${e}55`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transform: rotate(8deg);
  box-shadow: 2px 2px 6px ${c.w4.colors.shadow};
`,eM=l().div`
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  background: ${({color:e})=>`${e}35`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,eT=l().div`
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
`,ez=l().span`
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
`,eS=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
  min-height: 14px;
`,eC=l().div`
  font-size: 10px;
  font-weight: 700;
  color: ${({completed:e})=>e?c.w4.colors.success:c.w4.colors.accent};
  background: ${c.w4.colors.accentMuted};
  padding: 2px 6px;
  border-radius: 99px;
  white-space: nowrap;
`,eD=l().div`
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
  font-size: 10px;
  color: #fff;
  animation: ${C} 0.35s ease;
`,eR=l().span`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.3;
`,eK=l().button`
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
`,eP=l().div`
  position: absolute;
  top: 6px;
  left: 6px;
  color: ${c.w4.colors.mainTextMuted};
  cursor: grab;
  line-height: 1;

  &:active { cursor: grabbing; }
`,eF=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.sm};
  margin-bottom: ${c.w4.spacing.md};
`,eB=l().h2`
  font-size: ${c.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  margin: 0;
`,eE=l().div`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: ${c.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,eY=l().div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  align-items: flex-end;
  height: 48px;
`,eI=l().div`
  min-height: 2px;
  height: ${({heightPct:e})=>Math.max(100*e,2)}%;
  background: ${({isToday:e})=>e?c.w4.colors.accent:c.w4.colors.border};
  border-radius: 2px 2px 0 0;
  transition: height 0.4s ease;
`,eA=l().div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,eH=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${({isToday:e})=>e?c.w4.colors.accent:c.w4.colors.mainTextMuted};
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,eL=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,eN=l().div`
  display: flex;
  justify-content: flex-end;
`,eU=l().div`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.xs};
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: ${c.w4.spacing.md};
  animation: ${S} 0.2s ease;
`,eZ=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  text-align: center;
`,e_=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
`,eO=l().div`
  position: fixed;
  pointer-events: none;
  font-size: 18px;
  font-weight: 700;
  color: ${c.w4.colors.accent};
  text-shadow: 0 0 8px ${c.w4.colors.accent};
  z-index: 9999;
  animation: ${T} 1.1s ease forwards;
`,eq=l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  ${({exiting:e})=>e?(0,d.css)`
          animation: ${K} 0.4s ease forwards;
        `:(0,d.css)`
          animation: ${R} 0.4s ease forwards;
        `}
`,eW=l().div`
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
`,eJ=l().div`
  font-size: 80px;
  line-height: 1;
`,eX=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${c.w4.colors.accent};
  font-weight: 700;
`,eG=l().div`
  font-size: ${c.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
`,eQ=l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${c.w4.zIndex.modal};
  padding: ${c.w4.spacing.md};
  animation: ${P} 0.2s ease;
`,eV=l().div`
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
  animation: ${F} 0.25s ease;
`,e0=l().h2`
  font-size: ${c.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  margin: 0;
`,e4=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  font-weight: 600;
  margin-bottom: ${c.w4.spacing.xs};
`,e1=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
`,e2=l().input`
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
`,e3=l().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,e5=l().input`
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
`,e8=l().input`
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
`,e6=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;
`,e9=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
  gap: 6px;
  max-height: 180px;
  overflow-y: auto;
  padding: ${c.w4.spacing.sm};
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
`,e7=l().button`
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
`,ie=l().button`
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
`,ii=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  flex-wrap: wrap;
`,it=l().button`
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
`,io=l().div`
  display: flex;
  gap: 4px;
`,is=l().button`
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
`,ir=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  justify-content: flex-end;
  padding-top: ${c.w4.spacing.xs};
  border-top: 1px solid ${c.w4.colors.borderSubtle};
`,ia=l().div`
  display: flex;
  justify-content: center;
  padding: ${c.w4.spacing.sm} 0;
`,il=l().div`
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
`,id=l().span`
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
`,ic=l().div`
  font-size: 10px;
  font-weight: 700;
  color: ${c.w4.colors.accent};
  background: ${c.w4.colors.accentMuted};
  padding: 2px 7px;
  border-radius: 99px;
  align-self: flex-end;
`;function ip({frame:e,emoji:i,color:t,size:n=64}){let s={fontSize:Math.round(.44*n)};switch(e){case"ring":return(0,o.jsx)(ev,{color:t,style:{width:n,height:n},children:(0,o.jsx)("span",{style:s,children:i})});case"stamp":return(0,o.jsx)(ek,{color:t,style:{width:n-4,height:n-4},children:(0,o.jsx)("span",{style:s,children:i})});case"hex":return(0,o.jsx)(eM,{color:t,style:{width:n,height:n},children:(0,o.jsx)("span",{style:s,children:i})});case"polaroid":return(0,o.jsx)(eT,{color:t,style:{width:n,height:n+4},children:(0,o.jsx)("div",{className:"inner",children:(0,o.jsx)("span",{style:s,children:i})})});default:return(0,o.jsx)(ej,{color:t,style:{width:n,height:n},children:(0,o.jsx)("span",{style:s,children:i})})}}let im=["disc","ring","stamp","hex","polaroid"];function ix({frame:e}){let i=c.w4.colors.accent;switch(e){case"ring":return(0,o.jsx)(ev,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"stamp":return(0,o.jsx)(ek,{color:i,style:{width:28,height:28},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"hex":return(0,o.jsx)(eM,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})});case"polaroid":return(0,o.jsx)(eT,{color:i,style:{width:28,height:32},children:(0,o.jsx)("div",{className:"inner",children:(0,o.jsx)("span",{style:{fontSize:10},children:"✦"})})});default:return(0,o.jsx)(ej,{color:i,style:{width:30,height:30},children:(0,o.jsx)("span",{style:{fontSize:12},children:"✦"})})}}let ih=[c.w4.colors.accent,c.w4.colors.success,c.w4.suites.lab,c.w4.suites.vida,c.w4.suites.learn,c.w4.suites.games],ig=[5,10,15,20,25];function iw({t:e,mission:i,onSave:t,onClose:s}){let a=!!i,l=i?.translationKey?e(i.translationKey):"",d=i&&ig.includes(i.points)?i.points:10,[m,x]=(0,n.useState)(i?.name??l),[h,f]=(0,n.useState)(i?.emoji??"\uD83C\uDFAF"),[g,w]=(0,n.useState)(i?.frame??"disc"),[y,u]=(0,n.useState)(i?.color??c.w4.colors.accent),[$,j]=(0,n.useState)(d),[k,M]=(0,n.useState)(i?.time??""),T=(0,n.useRef)(null);(0,n.useEffect)(()=>{T.current?.focus();let e=e=>{"Escape"===e.key&&s()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[s]);let z=()=>{let e=m.trim();if(!e)return;let o=i?.translationKey&&e===l;k&&b(),t({id:i?.id??`custom-${Date.now().toString(36)}`,emoji:h||"\uD83C\uDFAF",points:$,frame:g,color:y,...o?{translationKey:i.translationKey}:{name:e},...k?{time:k}:{}})},S=(0,o.jsx)(eQ,{onClick:e=>{e.target===e.currentTarget&&s()},children:(0,o.jsxs)(eV,{onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(e0,{children:e(a?"daily.editMission.title":"daily.newMission.title")}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e4,{children:e("daily.newMission.preview")}),(0,o.jsx)(ia,{children:(0,o.jsxs)(il,{children:[(0,o.jsx)(ip,{frame:g,emoji:h||"\uD83C\uDFAF",color:y,size:52}),(0,o.jsx)(id,{children:m||e("daily.newMission.namePlaceholder")}),(0,o.jsxs)(ic,{children:["+",$," pts"]})]})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e4,{children:e("daily.newMission.name")}),(0,o.jsxs)(e1,{children:[(0,o.jsx)(e8,{value:h,onChange:e=>f(e.target.value),maxLength:4,"aria-label":e("daily.newMission.emoji")}),(0,o.jsx)(e2,{ref:T,placeholder:e("daily.newMission.namePlaceholder"),value:m,onChange:e=>x(e.target.value),onKeyDown:e=>{"Enter"===e.key&&m.trim()&&z()}})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e4,{children:e("daily.newMission.icon")}),(0,o.jsx)(e9,{children:v.map(e=>(0,o.jsx)(e7,{type:"button",selected:h===e,onClick:()=>f(e),"aria-label":e,children:e},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e4,{children:e("daily.newMission.frame")}),(0,o.jsx)(e6,{children:im.map(e=>(0,o.jsx)(ie,{type:"button",selected:g===e,onClick:()=>w(e),title:e,children:(0,o.jsx)(ix,{frame:e})},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e4,{children:e("daily.newMission.color")}),(0,o.jsx)(ii,{children:ih.map(e=>(0,o.jsx)(it,{type:"button",color:e,selected:y===e,onClick:()=>u(e)},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e4,{children:e("daily.newMission.points")}),(0,o.jsx)(io,{children:ig.map(e=>(0,o.jsx)(is,{type:"button",selected:$===e,onClick:()=>j(e),children:e},e))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e4,{children:e("daily.newMission.time")}),(0,o.jsxs)(e3,{children:[(0,o.jsx)(e5,{type:"time",value:k,onChange:e=>M(e.target.value)}),k&&(0,o.jsx)(p.$n,{variant:"ghost",size:"sm",onClick:()=>M(""),children:e("daily.newMission.timeClear")})]})]}),(0,o.jsxs)(ir,{children:[(0,o.jsx)(p.$n,{variant:"ghost",size:"sm",onClick:s,children:e("daily.cancel")}),(0,o.jsx)(p.$n,{variant:"primary",size:"sm",disabled:!m.trim(),onClick:z,children:e(a?"daily.editMission.save":"daily.newMission.save")})]})]})});return r().createPortal(S,document.body)}function iy({completed:e,total:i,t,pulsing:n}){let s=2*Math.PI*76,r=i>0?e/i:0;return(0,o.jsx)(ed,{children:(0,o.jsxs)(ec,{pulsing:n,children:[(0,o.jsxs)("svg",{width:180,height:180,viewBox:"0 0 180 180","aria-hidden":!0,children:[(0,o.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:c.w4.colors.border,strokeWidth:14}),(0,o.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:c.w4.colors.accent,strokeWidth:14,strokeDasharray:s,strokeDashoffset:s*(1-r),strokeLinecap:"round",transform:"rotate(-90 90 90)",style:{transition:"stroke-dashoffset 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"}})]}),(0,o.jsxs)(ep,{children:[(0,o.jsxs)(em,{children:[e,"/",i]}),(0,o.jsx)(ex,{children:t("daily.progress.today")})]})]})})}function iu({history:e,total:i,locale:t,t:n}){let s=(0,c.dR)(),r=new Intl.DateTimeFormat("pt"===t?"pt-PT":"en-US",{weekday:"short"}),a=Math.max(...e.map(e=>e.count),1);return(0,o.jsxs)(eE,{children:[(0,o.jsx)(eL,{children:(0,o.jsx)(p.YZ,{children:n("daily.sparkline.label")})}),(0,o.jsx)(eY,{children:e.map(e=>{let i=e.count/a;return(0,o.jsx)(eI,{heightPct:i,isToday:e.date===s},e.date)})}),(0,o.jsx)(eA,{children:e.map(e=>{let i=r.format(new Date(e.date+"T00:00:00"));return(0,o.jsx)(eH,{isToday:e.date===s,children:i.slice(0,3)},e.date)})})]})}function i$({topBarRight:e}){let i,[t]=(0,m.Ym)(),s=(0,n.useMemo)(()=>(0,m.Nx)(t,w.A),[t]),[r]=(0,c.xc)(),[a,l]=(0,n.useState)(!1),[d,$]=(0,n.useState)(j),[b,v]=(0,n.useState)(!1),[T,z]=(0,n.useState)(!1),[S,C]=(0,n.useState)(null),[D,R]=(0,n.useState)(new Set),[K,P]=(0,n.useState)([]),[F,ed]=(0,n.useState)(null),[ec,ep]=(0,n.useState)(!1),[em,ex]=(0,n.useState)(!1),[ej,ev]=(0,n.useState)(null),[ek,eM]=(0,n.useState)(null),[eT,eE]=(0,n.useState)(!1),[eY,eI]=(0,n.useState)([]),eA=(0,n.useRef)(0),eH=function(){let[e,i]=(0,n.useState)(()=>new Date);return(0,n.useEffect)(()=>{let e=setInterval(()=>i(new Date),6e4);return()=>clearInterval(e)},[6e4]),e}();(0,n.useEffect)(()=>{let e=!1;return(0,c.Fy)().then(i=>{if(e)return;let t=(0,c.dR)();if(i){let e=(i.missions&&i.missions.length>0?i.missions:y).map(e=>e.translationKey||e.name?e:e.nameEn||e.namePt?{...e,name:e.nameEn??e.namePt}:e),o={...i.history??{}};!i.history&&i.completedToday.length>0&&(o[i.lastResetDate]=[...i.completedToday]),i.lastResetDate!==t?(i.completedToday.length>0&&(o[i.lastResetDate]=[...i.completedToday]),$({...i,completedToday:o[t]??[],lastResetDate:t,missions:e,history:o})):$({...i,missions:e,history:o,completedToday:o[t]??i.completedToday})}else $(j());l(!0)}),()=>{e=!0}},[]),(0,n.useEffect)(()=>{a&&(0,c.sg)(d)},[d,a]);let eL=(0,n.useCallback)((e,i)=>{$(t=>{let o=t.completedToday.includes(e.id),n=(0,c.dR)();if(o){let i=Math.max(0,t.totalPoints-e.points),o=t.completedToday.filter(i=>i!==e.id),s=o.length<3?t.streakDays.filter(e=>e!==n):t.streakDays,r={...t.history,[n]:o};return{...t,totalPoints:i,totalMissionsCompleted:Math.max(0,t.totalMissionsCompleted-1),completedToday:o,streakDays:s,history:r}}let s=t.totalPoints+e.points,r=[...t.completedToday,e.id],a=r.length>=3&&!t.streakDays.includes(n)?[...t.streakDays,n]:t.streakDays,l={...t.history,[n]:r};if(R(i=>new Set(i).add(e.id)),setTimeout(()=>{R(i=>{let t=new Set(i);return t.delete(e.id),t})},600),eE(!0),setTimeout(()=>eE(!1),850),navigator.vibrate?.(50),i){let t=i.getBoundingClientRect(),o=++eA.current;P(i=>[...i,{id:o,value:e.points,x:t.right-60,y:t.top+t.height/2}]),setTimeout(()=>{P(e=>e.filter(e=>e.id!==o))},1200)}eI(i=>i.filter(i=>i!==e.id));let d=M(t.totalPoints),p=M(s);return p>d&&(ed(k[p]),ep(!1),setTimeout(()=>{ep(!0),setTimeout(()=>ed(null),450)},2e3)),{...t,totalPoints:s,totalMissionsCompleted:t.totalMissionsCompleted+1,completedToday:r,streakDays:a,history:l}})},[]),eQ=(0,n.useCallback)(()=>{$(e=>{let i=(0,c.dR)(),t={...e.history};return delete t[i],{...e,completedToday:[],lastResetDate:i,history:t}}),eI([]),ex(!1)},[]),eV=(0,n.useCallback)(e=>{$(i=>({...i,missions:i.missions.filter(i=>i.id!==e),completedToday:i.completedToday.filter(i=>i!==e)}))},[]),e0=(0,n.useCallback)(e=>{$(i=>({...i,missions:[...i.missions,e]}))},[]),e4=(0,n.useCallback)(e=>{$(i=>({...i,missions:i.missions.map(i=>i.id===e.id?e:i)}))},[]),e1=(0,n.useCallback)((e,i)=>{e!==i&&$(t=>{let o=t.missions,n=o.findIndex(i=>i.id===e),s=o.findIndex(e=>e.id===i);if(n<0||s<0)return t;let r=[...o],[a]=r.splice(n,1);return r.splice(s,0,a),{...t,missions:r}})},[]);M(d.totalPoints);let e2=Math.floor(d.totalPoints/50)+1,e3=(0,c.Up)(d.history??{}),e5=(0,n.useMemo)(()=>(0,c.yI)(d,7),[d]),e8=d.missions.length,e6=(0,n.useMemo)(()=>{let e=new Set(d.missions.map(e=>e.id));return d.completedToday.filter(i=>e.has(i)).length},[d.completedToday,d.missions]),e9=Math.max(0,e8-e6),e7=(0,n.useMemo)(()=>{let e=new Set(d.completedToday);return d.missions.filter(i=>e.has(i.id)).reduce((e,i)=>e+(i.points||0),0)},[d.completedToday,d.missions]),ie=(0,n.useMemo)(()=>{let e,i=d.missions.filter(e=>!d.completedToday.includes(e.id)&&!eY.includes(e.id));if(0===i.length)return null;let t=(e=new Date().getHours())<12?"morning":e<18?"afternoon":"evening",o=i.filter(e=>u(e)===t);if(o.length>0)return o[0];let n="morning"===t?"afternoon":"evening",s=i.filter(e=>u(e)===n);return s.length>0?s[0]:i[0]},[d.missions,d.completedToday,eY]),ii=(0,n.useMemo)(()=>({morning:d.missions.filter(e=>"morning"===u(e)),afternoon:d.missions.filter(e=>"afternoon"===u(e)),evening:d.missions.filter(e=>"evening"===u(e))}),[d.missions]),it=(i=eH.getHours())<12?"daily.greet.morning":i<18?"daily.greet.afternoon":"daily.greet.evening",io=(r.interests.length,s("daily.greet.defaultName")),is=eH.toLocaleTimeString("pt"===t?"pt-PT":"en-US",{hour:"2-digit",minute:"2-digit"}),ir=eH.toLocaleDateString("pt"===t?"pt-PT":"en-US",{weekday:"long",day:"numeric",month:"long"}),ia=0===e9?s("daily.greet.allDone"):s("daily.greet.remaining",{n:e9,total:e8});function il(e){let i=`daily.chapter.${e}`,t=ii[e];if(0===t.length)return null;let n=t.filter(e=>d.completedToday.includes(e.id)).length;return(0,o.jsxs)(ef,{children:[(0,o.jsxs)(eg,{children:[(0,o.jsx)(p.YZ,{children:s(i)}),(0,o.jsx)(ew,{children:s("daily.chapter.count",{done:n,total:t.length})})]}),(0,o.jsx)(ey,{children:t.map(e=>{let i=d.completedToday.includes(e.id),t=D.has(e.id),n=e.translationKey?s(e.translationKey):e.name??"",r=e.color??c.w4.colors.accent,a=e.frame??"disc";return(0,o.jsxs)(e$,{completed:i,flashing:t,isOver:!1,onClick:i=>eL(e,i.currentTarget),role:"checkbox","aria-checked":i,tabIndex:0,onKeyDown:i=>{(" "===i.key||"Enter"===i.key)&&(i.preventDefault(),eL(e,i.currentTarget))},children:[(0,o.jsx)(ip,{frame:a,emoji:e.emoji,color:r,size:40}),(0,o.jsx)(ez,{completed:i,children:n}),(0,o.jsxs)(eS,{children:[e.time?(0,o.jsx)(eR,{children:e.time}):(0,o.jsx)("span",{}),(0,o.jsxs)(eC,{completed:i,children:["+",e.points]})]}),i&&(0,o.jsx)(eD,{children:"✓"})]},e.id)})})]},e)}return(0,o.jsxs)(c.PE,{title:s("daily.title"),sidebar:null,topBarRight:e,children:[(0,o.jsxs)(B,{children:[(0,o.jsxs)(E,{children:[(0,o.jsxs)(Y,{children:[(0,o.jsx)(I,{children:s(it,{name:io})}),(0,o.jsxs)(A,{children:[ir," \xb7 ",is," \xb7 ",ia]})]}),(0,o.jsxs)(H,{children:[(0,o.jsxs)(L,{children:["\uD83E\uDDED ",s("daily.chip.level",{n:e2})]}),(0,o.jsxs)(N,{title:s("daily.chip.xpHint"),children:[(0,o.jsx)(U,{children:(0,o.jsx)(Z,{pct:d.totalPoints%50/50*100})}),(0,o.jsxs)("span",{children:[d.totalPoints%50,"/",50]})]}),(0,o.jsxs)(L,{children:["⭐ ",s("daily.chip.points",{n:d.totalPoints})]}),(0,o.jsxs)(L,{children:["\uD83D\uDD25 ",e3>1?s("daily.chip.streak",{n:e3}):s("daily.chip.streakSingle",{n:e3})]}),(0,o.jsxs)(L,{children:["✅ ",s("daily.chip.done",{n:e6})]})]})]}),(0,o.jsxs)(_,{children:[(0,o.jsxs)(O,{centered:!!ie,children:[(0,o.jsx)(q,{children:(0,o.jsx)(p.YZ,{children:ie?s("daily.focus.nextUp"):s("daily.focus.dayComplete")})}),ie?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(W,{children:(0,o.jsx)(ip,{frame:ie.frame??"disc",emoji:ie.emoji,color:ie.color??c.w4.colors.accent,size:72})}),(0,o.jsx)(J,{children:ie.translationKey?s(ie.translationKey):ie.name??""}),(0,o.jsxs)(X,{children:["+",ie.points," pts"]}),ie.time&&(0,o.jsx)(G,{children:s("daily.focus.timeChip",{time:ie.time})}),(0,o.jsxs)(Q,{children:[(0,o.jsx)(p.$n,{variant:"primary",onClick:e=>{eL(ie,e.target.closest("button"))},children:s("daily.focus.markDone")}),(0,o.jsx)(p.$n,{variant:"ghost",onClick:()=>eI(e=>[...e,ie.id]),children:s("daily.focus.skip")})]})]}):(0,o.jsxs)(V,{children:[(0,o.jsxs)(ee,{children:[(0,o.jsx)(ei,{children:"\uD83C\uDF1F"}),(0,o.jsxs)(et,{children:[(0,o.jsx)(eo,{children:s("daily.focus.allDone")}),(0,o.jsx)(en,{children:s("daily.focus.allDoneBody")})]})]}),(0,o.jsxs)(es,{children:[(0,o.jsxs)(er,{children:[(0,o.jsxs)(ea,{children:["+",e7]}),(0,o.jsx)(el,{children:s("daily.summary.pointsToday")})]}),(0,o.jsxs)(er,{children:[(0,o.jsx)(ea,{children:e6}),(0,o.jsx)(el,{children:s("daily.summary.missions")})]}),(0,o.jsxs)(er,{children:[(0,o.jsx)(ea,{children:e3}),(0,o.jsx)(el,{children:s("daily.summary.streak")})]})]})]})]}),(0,o.jsx)(iy,{completed:e6,total:e8,t:s,pulsing:eT})]}),b?(0,o.jsxs)("div",{children:[(0,o.jsxs)(eF,{children:[(0,o.jsx)(eB,{children:s("daily.sectionMissions")}),(0,o.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.xs},children:[(0,o.jsx)(p.$n,{variant:"accent",size:"sm",icon:(0,o.jsx)(x.A,{size:13}),onClick:()=>{v(!1),z(!1)},children:s("daily.done")}),(0,o.jsx)(p.K0,{onClick:()=>z(!0),title:s("daily.addMission"),"aria-label":s("daily.addMission"),children:(0,o.jsx)(h.A,{size:13})})]})]}),(0,o.jsx)(eu,{children:d.missions.map(e=>{let i=ej===e.id,t=ek===e.id&&ej!==e.id,n=e.translationKey?s(e.translationKey):e.name??"",r=e.color??c.w4.colors.accent,a=e.frame??"disc";return(0,o.jsxs)(eb,{isOver:t,role:"button",tabIndex:0,"aria-label":s("daily.editMission.open"),title:s("daily.editMission.open"),style:{opacity:i?.3:1},onClick:()=>C(e),onKeyDown:i=>{("Enter"===i.key||" "===i.key)&&(i.preventDefault(),C(e))},onDragOver:i=>{i.preventDefault(),i.dataTransfer.dropEffect="move",ej&&ej!==e.id&&eM(e.id)},onDragLeave:e=>{e.currentTarget===e.target&&eM(null)},onDrop:i=>{i.preventDefault(),ej&&e1(ej,e.id),ev(null),eM(null)},children:[(0,o.jsx)(eP,{"aria-hidden":!0,draggable:!0,onClick:e=>e.stopPropagation(),onDragStart:i=>{ev(e.id),i.dataTransfer.effectAllowed="move",i.dataTransfer.setData("text/plain",e.id)},onDragEnd:()=>{ev(null),eM(null)},children:(0,o.jsx)(f.A,{size:14})}),(0,o.jsx)(ip,{frame:a,emoji:e.emoji,color:r,size:40}),(0,o.jsx)(ez,{completed:!1,children:n}),(0,o.jsxs)(eS,{children:[e.time?(0,o.jsx)(eR,{children:e.time}):(0,o.jsx)("span",{}),(0,o.jsxs)(eC,{completed:!1,children:["+",e.points]})]}),(0,o.jsx)(eK,{onClick:i=>{i.stopPropagation(),eV(e.id)},"aria-label":s("daily.delete"),title:s("daily.delete"),children:"\xd7"})]},e.id)})}),(0,o.jsx)("div",{style:{marginTop:c.w4.spacing.sm},children:(0,o.jsx)(p.$n,{variant:"ghost",icon:(0,o.jsx)(h.A,{size:13}),onClick:()=>z(!0),children:s("daily.addMission")})})]}):(0,o.jsxs)(eh,{children:[(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,o.jsx)(p.YZ,{children:s("daily.sectionMissions")}),(0,o.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.xs},children:[(0,o.jsx)(p.$n,{variant:"ghost",size:"sm",icon:(0,o.jsx)(g.A,{size:13}),onClick:()=>v(!0),children:s("daily.edit")}),(0,o.jsx)(p.K0,{onClick:()=>z(!0),title:s("daily.addMission"),"aria-label":s("daily.addMission"),children:(0,o.jsx)(h.A,{size:13})})]})]}),il("morning"),il("afternoon"),il("evening")]}),(0,o.jsx)(iu,{history:e5,total:e8,locale:t,t:s}),(0,o.jsx)(eN,{children:em?(0,o.jsxs)(eU,{children:[(0,o.jsx)(eZ,{children:s("daily.resetConfirm")}),(0,o.jsxs)(e_,{children:[(0,o.jsx)(p.$n,{variant:"danger",onClick:eQ,style:{flex:1},children:s("daily.confirm")}),(0,o.jsx)(p.$n,{variant:"ghost",onClick:()=>ex(!1),style:{flex:1},children:s("daily.cancel")})]})]}):(0,o.jsx)(p.$n,{variant:"ghost",onClick:()=>ex(!0),children:s("daily.resetDay")})})]}),K.map(e=>(0,o.jsxs)(eO,{style:{left:e.x,top:e.y},children:["+",e.value]},e.id)),F&&(0,o.jsx)(eq,{exiting:ec,children:(0,o.jsxs)(eW,{children:[(0,o.jsx)(eJ,{children:F.emoji}),(0,o.jsx)(eX,{children:s("daily.levelUp")}),(0,o.jsx)(eG,{children:s(F.key)})]})}),(T||S)&&(0,o.jsx)(iw,{t:s,mission:S??void 0,onSave:e=>{S?e4(e):e0(e),z(!1),C(null)},onClose:()=>{z(!1),C(null)}})]})}}}]);