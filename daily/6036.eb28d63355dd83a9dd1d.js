"use strict";(self.webpackChunk_atlantis_daily=self.webpackChunk_atlantis_daily||[]).push([[6036],{6036(e,i,t){t.r(i),t.d(i,{default:()=>zi});var o=t(7359),s=t(8991),n=t(3233),a=t(7207),r=t(9200),l=t(8813),d=t(894),c=t(5609),p=t(8320),f=t(536),m=t(1365),x=t(8887),u=t(5723);const h=[{id:"brush-teeth",emoji:"🪥",translationKey:"daily.mission.brushTeeth",points:5,frame:"disc",color:r.w4.suites.learn,time:"07:30"},{id:"make-bed",emoji:"🛏️",translationKey:"daily.mission.makeBed",points:10,frame:"ring",color:r.w4.suites.vida,time:"08:00"},{id:"school-bag",emoji:"🎒",translationKey:"daily.mission.schoolBag",points:5,frame:"disc",color:r.w4.colors.accent,time:"08:15"},{id:"set-table",emoji:"🍽️",translationKey:"daily.mission.setTable",points:10,frame:"polaroid",color:r.w4.suites.games,time:"12:30"},{id:"vegetables",emoji:"🥗",translationKey:"daily.mission.vegetables",points:5,frame:"ring",color:r.w4.suites.vida,time:"13:00"},{id:"homework",emoji:"📝",translationKey:"daily.mission.homework",points:15,frame:"hex",color:r.w4.suites.learn,time:"17:00"},{id:"tidy-room",emoji:"🧹",translationKey:"daily.mission.tidyRoom",points:15,frame:"hex",color:r.w4.suites.ent,time:"17:30"},{id:"clothes-away",emoji:"🧤",translationKey:"daily.mission.clothesAway",points:10,frame:"stamp",color:r.w4.suites.ent,time:"18:00"},{id:"draw",emoji:"🎨",translationKey:"daily.mission.draw",points:10,frame:"polaroid",color:r.w4.suites.lab,time:"18:30"},{id:"read",emoji:"📚",translationKey:"daily.mission.read",points:15,frame:"stamp",color:r.w4.suites.lab,time:"19:30"},{id:"be-kind",emoji:"🤗",translationKey:"daily.mission.beKind",points:10,frame:"disc",color:r.w4.suites.games}];function g(e){if(!e.time)return"morning";const[i]=e.time.split(":"),t=parseInt(i,10);return t<12?"morning":t<18?"afternoon":"evening"}const w="daily:notifications-asked";function y(){return{totalPoints:0,totalMissionsCompleted:0,completedToday:[],streakDays:[],lastResetDate:(0,r.dR)(),missions:h,history:{}}}const $=["🪥","🧴","🛁","💊","🩺","🧼","🪒","🧘","🥗","🍎","🥕","💧","🍵","🥛","🍳","🥦","🏃","🚴","🧗","🏊","⚽","🏀","🎾","🤸","📚","📝","✏️","🎓","🧠","💡","🔬","🗣️","🛏️","🧹","🧺","🍽️","🧽","🧊","🌱","🪴","🎨","🎭","🎸","🎹","📷","🎬","✂️","🖍️","🤗","❤️","🌈","🎁","💌","🫂","🙏","🌟","🎯","🔥","🏆","⏰","📅","✨","🚀","⭐"],b=50,j=[{emoji:"🌱",key:"daily.level.recruit"},{emoji:"🧭",key:"daily.level.explorer"},{emoji:"⚔️",key:"daily.level.adventurer"},{emoji:"🦸",key:"daily.level.hero"},{emoji:"🏆",key:"daily.level.champion"},{emoji:"🌟",key:"daily.level.legend"}];function v(e){return Math.min(Math.floor(e/b),j.length-1)}function k(e){return e%b/b*100}const T=a.keyframes`
  0%   { opacity: 1; transform: translateY(0) scale(1); }
  80%  { opacity: 1; transform: translateY(-48px) scale(1.15); }
  100% { opacity: 0; transform: translateY(-72px) scale(0.9); }
`,M=a.keyframes`
  0%   { box-shadow: none; }
  30%  { box-shadow: 0 0 0 3px ${r.w4.colors.accent}; }
  100% { box-shadow: none; }
`,z=a.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,S=a.keyframes`
  0%   { transform: scale(0.6); }
  60%  { transform: scale(1.25); }
  100% { transform: scale(1); }
`,C=a.keyframes`
  0%, 100% { filter: drop-shadow(0 0 4px ${r.w4.colors.accent}); }
  50%       { filter: drop-shadow(0 0 12px ${r.w4.colors.accent}); }
`,D=a.keyframes`
  0%   { opacity: 0; transform: scale(0.7); }
  60%  { opacity: 1; transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
`,R=a.keyframes`
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.2); }
`,K=a.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,P=a.keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,F=(a.keyframes`
  from { width: 0%; }
`,a.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,n.default.div`
  display: flex;
  flex-direction: column;
  background: radial-gradient(ellipse at 50% 0%, ${r.w4.colors.accentMuted} 0%, ${r.w4.colors.mainBg} 60%);
  padding: ${r.w4.spacing.lg} ${r.w4.spacing.md} ${r.w4.spacing.xl};
  gap: ${r.w4.spacing.lg};
  animation: ${z} 0.3s ease;
  width: 100%;

  @media (min-width: ${r.w4.breakpoints.md}) {
    padding: ${r.w4.spacing.xl};
  }
`),B=n.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${r.w4.spacing.md};
`,E=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Y=n.default.div`
  font-family: ${r.w4.typography.fontFamilySerif};
  font-size: 28px;
  font-weight: 300;
  color: ${r.w4.colors.mainText};
  line-height: 1.2;
  letter-spacing: -0.01em;
`,I=n.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
`,A=n.default.div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.xs};
  flex-wrap: wrap;
  flex-shrink: 0;
`,H=n.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${r.w4.colors.mainTextMuted};
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
  white-space: nowrap;
  line-height: 1.4;
`,L=n.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${r.w4.colors.mainTextMuted};
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;
  line-height: 1.4;
`,N=n.default.div`
  width: 48px;
  height: 5px;
  border-radius: 99px;
  background: ${r.w4.colors.border};
  overflow: hidden;
  position: relative;
`,U=n.default.div`
  width: ${({pct:e})=>`${e}%`};
  height: 100%;
  background: linear-gradient(
    90deg,
    ${r.w4.colors.accent},
    ${r.w4.colors.accentHover}
  );
  border-radius: inherit;
  transition: width 0.35s ${r.w4.transitions.easing};
`,O=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};

  @media (min-width: ${r.w4.breakpoints.lg}) {
    flex-direction: row;
    align-items: stretch;
  }
`,Z=n.default.div`
  flex: 1;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.accent};
  border-radius: ${r.w4.borderRadius.xl};
  padding: ${r.w4.spacing.xl} ${r.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: ${({centered:e=!0})=>e?"center":"stretch"};
  justify-content: ${({centered:e=!0})=>e?"flex-start":"center"};
  gap: ${r.w4.spacing.md};
  position: relative;
  overflow: hidden;
  animation: ${z} 0.35s ease;

  /* Subtle accent gradient top edge */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${r.w4.colors.accent}, transparent);
  }
`,_=n.default.div`
  align-self: flex-start;
`,q=n.default.div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 4px 12px ${r.w4.colors.shadowStrong});
`,W=n.default.div`
  font-size: 22px;
  font-weight: 600;
  color: ${r.w4.colors.mainText};
  text-align: center;
`,J=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
`,X=n.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
`,G=n.default.div`
  display: flex;
  gap: ${r.w4.spacing.sm};
  width: 100%;

  > * { flex: 1; }
`,Q=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  gap: ${r.w4.spacing.lg};
  padding: ${r.w4.spacing.sm} 0;
`,V=n.default.div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.lg};
`,ee=n.default.div`
  font-size: 48px;
  line-height: 1;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 8px ${r.w4.colors.shadow});
`,ie=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,te=n.default.div`
  font-family: ${r.w4.typography.fontFamilySerif};
  font-size: 22px;
  font-weight: 400;
  color: ${r.w4.colors.mainText};
  line-height: 1.2;
`,oe=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
`,se=n.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${r.w4.spacing.sm};
`,ne=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: ${r.w4.spacing.sm} ${r.w4.spacing.md};
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
`,ae=n.default.div`
  font-family: ${r.w4.typography.fontFamilySerif};
  font-size: 22px;
  font-weight: 400;
  color: ${r.w4.colors.mainText};
  line-height: 1;
`,re=n.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${r.w4.colors.mainTextMuted};
`,le=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${r.w4.spacing.md};

  @media (min-width: ${r.w4.breakpoints.lg}) {
    min-width: 220px;
  }
`,de=n.default.div`
  position: relative;
  width: 180px;
  height: 180px;
  ${({pulsing:e})=>e?a.css`
          animation: ${C} 0.8s ease;
        `:""}
`,ce=n.default.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`,pe=n.default.div`
  font-family: ${r.w4.typography.fontFamilySerif};
  font-size: 36px;
  font-weight: 400;
  color: ${r.w4.colors.mainText};
  line-height: 1;
`,fe=n.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${r.w4.colors.mainTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,me=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.md};
`,xe=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.sm};
`,ue=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,he=n.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
`,ge=n.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${r.w4.spacing.sm};

  @media (min-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
    gap: ${r.w4.spacing.md};
  }
`,we=n.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${r.w4.spacing.sm};

  @media (min-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
    gap: ${r.w4.spacing.md};
  }
`,ye=n.default.div`
  width: 100%;
  min-width: 0;
  min-height: 116px;
  background: ${({completed:e})=>e?r.w4.colors.accentMuted:r.w4.colors.surface};
  border: 1px solid ${({completed:e,isOver:i})=>i?r.w4.colors.accent:e?r.w4.colors.success:r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
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
    border-color ${r.w4.transitions.base},
    background ${r.w4.transitions.base},
    box-shadow ${r.w4.transitions.base},
    transform ${r.w4.transitions.fast};
  ${({flashing:e})=>e?a.css`
          animation: ${M} 0.6s ease forwards;
        `:""}
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${({completed:e})=>e?r.w4.colors.success:r.w4.colors.accentHover};
    transform: translateY(-1px);
    box-shadow: ${r.w4.elevation.sm};
  }

  &:focus-visible {
    ${r.w4.focusRing}
  }
`,$e=n.default.div`
  width: 100%;
  min-width: 0;
  min-height: 116px;
  background: ${r.w4.colors.surface};
  border: 1px solid ${({isOver:e})=>e?r.w4.colors.accent:r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  padding: 12px 8px 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border-color ${r.w4.transitions.base}, background ${r.w4.transitions.fast};
  user-select: none;

  &:hover {
    border-color: ${r.w4.colors.accentHover};
    background: ${r.w4.colors.codeBg};
  }

  &:focus-visible {
    ${r.w4.focusRing}
  }
`,be=n.default.div`
  border-radius: 50%;
  background: ${({color:e})=>`${e}28`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid ${({color:e})=>`${e}44`};
`,je=n.default.div`
  border-radius: 50%;
  background: transparent;
  border: 2.5px solid ${({color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ve=n.default.div`
  border-radius: ${r.w4.borderRadius.md};
  background: ${({color:e})=>`${e}28`};
  border: 2px solid ${({color:e})=>`${e}55`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transform: rotate(8deg);
  box-shadow: 2px 2px 6px ${r.w4.colors.shadow};
`,ke=n.default.div`
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  background: ${({color:e})=>`${e}35`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Te=n.default.div`
  background: ${r.w4.colors.mainText};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 1px 2px 6px ${r.w4.colors.shadow};

  .inner {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background: ${({color:e})=>`${e}30`};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Me=n.default.span`
  font-size: 11px;
  color: ${({completed:e})=>e?r.w4.colors.mainTextMuted:r.w4.colors.mainText};
  font-weight: 500;
  text-decoration: ${({completed:e})=>e?"line-through":"none"};
  text-decoration-color: ${({completed:e})=>e?`${r.w4.colors.success}99`:"transparent"};
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
`,ze=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
  min-height: 14px;
`,Se=n.default.div`
  font-size: 10px;
  font-weight: 700;
  color: ${({completed:e})=>e?r.w4.colors.success:r.w4.colors.accent};
  background: ${r.w4.colors.accentMuted};
  padding: 2px 6px;
  border-radius: 99px;
  white-space: nowrap;
`,Ce=n.default.div`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${r.w4.colors.success};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #fff;
  animation: ${S} 0.35s ease;
`,De=n.default.span`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${r.w4.colors.mainTextMuted};
  line-height: 1.3;
`,Re=n.default.button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${r.w4.colors.danger};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 11px;
  cursor: pointer;
  padding: 0;
  opacity: 0.85;
  transition: opacity ${r.w4.transitions.fast};

  &:hover { opacity: 1; }
`,Ke=n.default.div`
  position: absolute;
  top: 6px;
  left: 6px;
  color: ${r.w4.colors.mainTextMuted};
  cursor: grab;
  line-height: 1;

  &:active { cursor: grabbing; }
`,Pe=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${r.w4.spacing.sm};
  margin-bottom: ${r.w4.spacing.md};
`,Fe=n.default.h2`
  font-size: ${r.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${r.w4.colors.mainText};
  margin: 0;
`,Be=n.default.div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: ${r.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.sm};
`,Ee=n.default.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  align-items: flex-end;
  height: 48px;
`,Ye=n.default.div`
  min-height: 2px;
  height: ${({heightPct:e})=>Math.max(100*e,2)}%;
  background: ${({isToday:e})=>e?r.w4.colors.accent:r.w4.colors.border};
  border-radius: 2px 2px 0 0;
  transition: height 0.4s ease;
`,Ie=n.default.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,Ae=n.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${({isToday:e})=>e?r.w4.colors.accent:r.w4.colors.mainTextMuted};
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,He=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Le=n.default.div`
  display: flex;
  justify-content: flex-end;
`,Ne=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.xs};
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: ${r.w4.spacing.md};
  animation: ${z} 0.2s ease;
`,Ue=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  text-align: center;
`,Oe=n.default.div`
  display: flex;
  gap: ${r.w4.spacing.sm};
`,Ze=n.default.div`
  position: fixed;
  pointer-events: none;
  font-size: 18px;
  font-weight: 700;
  color: ${r.w4.colors.accent};
  text-shadow: 0 0 8px ${r.w4.colors.accent};
  z-index: 9999;
  animation: ${T} 1.1s ease forwards;
`,_e=n.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  ${({exiting:e})=>e?a.css`
          animation: ${R} 0.4s ease forwards;
        `:a.css`
          animation: ${D} 0.4s ease forwards;
        `}
`,qe=n.default.div`
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
`,We=n.default.div`
  font-size: 80px;
  line-height: 1;
`,Je=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${r.w4.colors.accent};
  font-weight: 700;
`,Xe=n.default.div`
  font-size: ${r.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${r.w4.colors.mainText};
`,Ge=n.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${r.w4.zIndex.modal};
  padding: ${r.w4.spacing.md};
  animation: ${K} 0.2s ease;
`,Qe=n.default.div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.xl};
  padding: ${r.w4.spacing.lg};
  width: 100%;
  max-width: 440px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.md};
  box-shadow: ${r.w4.elevation.lg};
  animation: ${P} 0.25s ease;
`,Ve=n.default.h2`
  font-size: ${r.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${r.w4.colors.mainText};
  margin: 0;
`,ei=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  font-weight: 600;
  margin-bottom: ${r.w4.spacing.xs};
`,ii=n.default.div`
  display: flex;
  gap: ${r.w4.spacing.sm};
`,ti=n.default.input`
  width: 100%;
  padding: 10px 12px;
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  color: ${r.w4.colors.mainText};
  font-size: ${r.w4.typography.fontSizeBase};
  font-family: ${r.w4.typography.fontFamily};
  transition: border-color ${r.w4.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${r.w4.colors.accent};
  }

  &::placeholder {
    color: ${r.w4.colors.mainTextFaint};
  }
`,oi=n.default.div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
`,si=n.default.input`
  padding: 8px 10px;
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  color: ${r.w4.colors.mainText};
  font-size: ${r.w4.typography.fontSizeBase};
  font-family: ${r.w4.typography.fontFamilyMono};
  color-scheme: dark;
  transition: border-color ${r.w4.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${r.w4.colors.accent};
  }
`,ni=n.default.input`
  width: 56px;
  text-align: center;
  padding: 10px 8px;
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  color: ${r.w4.colors.mainText};
  font-size: 22px;
  font-family: ${r.w4.typography.fontFamily};
  flex-shrink: 0;
  transition: border-color ${r.w4.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${r.w4.colors.accent};
  }
`,ai=n.default.div`
  display: flex;
  gap: ${r.w4.spacing.sm};
  flex-wrap: wrap;
`,ri=n.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
  gap: 6px;
  max-height: 180px;
  overflow-y: auto;
  padding: ${r.w4.spacing.sm};
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
`,li=n.default.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({selected:e})=>e?r.w4.colors.accentMuted:"transparent"};
  border: 1px solid ${({selected:e})=>e?r.w4.colors.accent:"transparent"};
  border-radius: ${r.w4.borderRadius.sm};
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  transition: background ${r.w4.transitions.fast}, border-color ${r.w4.transitions.fast};
  font-family: ${r.w4.typography.fontFamily};

  &:hover {
    background: ${r.w4.colors.surfaceHover};
  }
`,di=n.default.button`
  width: 52px;
  height: 52px;
  border-radius: ${r.w4.borderRadius.md};
  border: 2px solid ${({selected:e})=>e?r.w4.colors.accent:r.w4.colors.border};
  background: ${({selected:e})=>e?r.w4.colors.accentMuted:r.w4.colors.mainBg};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color ${r.w4.transitions.fast}, background ${r.w4.transitions.fast};
  padding: 0;

  &:hover {
    border-color: ${r.w4.colors.accentHover};
  }
`,ci=n.default.div`
  display: flex;
  gap: ${r.w4.spacing.sm};
  flex-wrap: wrap;
`,pi=n.default.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  border: 3px solid ${({selected:e})=>e?"#fff":"transparent"};
  cursor: pointer;
  padding: 0;
  outline: 2px solid ${({selected:e,color:i})=>e?i:"transparent"};
  outline-offset: 2px;
  transition: outline-color ${r.w4.transitions.fast}, border-color ${r.w4.transitions.fast};

  &:hover {
    outline-color: ${({color:e})=>e};
  }
`,fi=n.default.div`
  display: flex;
  gap: 4px;
`,mi=n.default.button`
  flex: 1;
  padding: 8px 4px;
  border-radius: ${r.w4.borderRadius.sm};
  border: 1px solid ${({selected:e})=>e?r.w4.colors.accent:r.w4.colors.border};
  background: ${({selected:e})=>e?r.w4.colors.accent:r.w4.colors.mainBg};
  color: ${({selected:e})=>e?"#fff":r.w4.colors.mainTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background ${r.w4.transitions.fast}, border-color ${r.w4.transitions.fast}, color ${r.w4.transitions.fast};

  &:hover {
    border-color: ${r.w4.colors.accent};
  }
`,xi=n.default.div`
  display: flex;
  gap: ${r.w4.spacing.sm};
  justify-content: flex-end;
  padding-top: ${r.w4.spacing.xs};
  border-top: 1px solid ${r.w4.colors.borderSubtle};
`,ui=n.default.div`
  display: flex;
  justify-content: center;
  padding: ${r.w4.spacing.sm} 0;
`,hi=n.default.div`
  width: 120px;
  aspect-ratio: 1 / 1.1;
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${r.w4.spacing.md} ${r.w4.spacing.sm} ${r.w4.spacing.sm};
  position: relative;
  pointer-events: none;
`,gi=n.default.span`
  font-size: 11px;
  color: ${r.w4.colors.mainText};
  font-weight: 500;
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.3;
  width: 100%;
`,wi=n.default.div`
  font-size: 10px;
  font-weight: 700;
  color: ${r.w4.colors.accent};
  background: ${r.w4.colors.accentMuted};
  padding: 2px 7px;
  border-radius: 99px;
  align-self: flex-end;
`;function yi({frame:e,emoji:i,color:t,size:o=64}){const s={fontSize:Math.round(.44*o)};switch(e){case"ring":return(0,u.jsx)(je,{color:t,style:{width:o,height:o},children:(0,u.jsx)("span",{style:s,children:i})});case"stamp":return(0,u.jsx)(ve,{color:t,style:{width:o-4,height:o-4},children:(0,u.jsx)("span",{style:s,children:i})});case"hex":return(0,u.jsx)(ke,{color:t,style:{width:o,height:o},children:(0,u.jsx)("span",{style:s,children:i})});case"polaroid":return(0,u.jsx)(Te,{color:t,style:{width:o,height:o+4},children:(0,u.jsx)("div",{className:"inner",children:(0,u.jsx)("span",{style:s,children:i})})});default:return(0,u.jsx)(be,{color:t,style:{width:o,height:o},children:(0,u.jsx)("span",{style:s,children:i})})}}const $i=["disc","ring","stamp","hex","polaroid"];function bi({frame:e}){const i=r.w4.colors.accent;switch(e){case"ring":return(0,u.jsx)(je,{color:i,style:{width:30,height:30},children:(0,u.jsx)("span",{style:{fontSize:12},children:"✦"})});case"stamp":return(0,u.jsx)(ve,{color:i,style:{width:28,height:28},children:(0,u.jsx)("span",{style:{fontSize:12},children:"✦"})});case"hex":return(0,u.jsx)(ke,{color:i,style:{width:30,height:30},children:(0,u.jsx)("span",{style:{fontSize:12},children:"✦"})});case"polaroid":return(0,u.jsx)(Te,{color:i,style:{width:28,height:32},children:(0,u.jsx)("div",{className:"inner",children:(0,u.jsx)("span",{style:{fontSize:10},children:"✦"})})});default:return(0,u.jsx)(be,{color:i,style:{width:30,height:30},children:(0,u.jsx)("span",{style:{fontSize:12},children:"✦"})})}}const ji=[r.w4.colors.accent,r.w4.colors.success,r.w4.suites.lab,r.w4.suites.vida,r.w4.suites.learn,r.w4.suites.games],vi=[5,10,15,20,25];function ki({t:e,mission:i,onSave:t,onClose:n}){const a=!!i,d=i?.translationKey?e(i.translationKey):"",c=i&&vi.includes(i.points)?i.points:10,[p,f]=(0,o.useState)(i?.name??d),[m,x]=(0,o.useState)(i?.emoji??"🎯"),[h,g]=(0,o.useState)(i?.frame??"disc"),[y,b]=(0,o.useState)(i?.color??r.w4.colors.accent),[j,v]=(0,o.useState)(c),[k,T]=(0,o.useState)(i?.time??""),M=(0,o.useRef)(null);(0,o.useEffect)(()=>{M.current?.focus();const e=e=>{"Escape"===e.key&&n()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[n]);const z=()=>{const e=p.trim();if(!e)return;const o=i?.translationKey&&e===d;k&&async function(){if("undefined"!=typeof window&&"Notification"in window&&"default"===Notification.permission&&"1"!==await(0,r.qj)(w)){await(0,r.pJ)(w,"1");try{await Notification.requestPermission()}catch{}}}(),t({id:i?.id??`custom-${Date.now().toString(36)}`,emoji:m||"🎯",points:j,frame:h,color:y,...o?{translationKey:i.translationKey}:{name:e},...k?{time:k}:{}})},S=(0,u.jsx)(Ge,{onClick:e=>{e.target===e.currentTarget&&n()},children:(0,u.jsxs)(Qe,{onClick:e=>e.stopPropagation(),children:[(0,u.jsx)(Ve,{children:e(a?"daily.editMission.title":"daily.newMission.title")}),(0,u.jsxs)("div",{children:[(0,u.jsx)(ei,{children:e("daily.newMission.preview")}),(0,u.jsx)(ui,{children:(0,u.jsxs)(hi,{children:[(0,u.jsx)(yi,{frame:h,emoji:m||"🎯",color:y,size:52}),(0,u.jsx)(gi,{children:p||e("daily.newMission.namePlaceholder")}),(0,u.jsxs)(wi,{children:["+",j," pts"]})]})})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(ei,{children:e("daily.newMission.name")}),(0,u.jsxs)(ii,{children:[(0,u.jsx)(ni,{value:m,onChange:e=>x(e.target.value),maxLength:4,"aria-label":e("daily.newMission.emoji")}),(0,u.jsx)(ti,{ref:M,placeholder:e("daily.newMission.namePlaceholder"),value:p,onChange:e=>f(e.target.value),onKeyDown:e=>{"Enter"===e.key&&p.trim()&&z()}})]})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(ei,{children:e("daily.newMission.icon")}),(0,u.jsx)(ri,{children:$.map(e=>(0,u.jsx)(li,{type:"button",selected:m===e,onClick:()=>x(e),"aria-label":e,children:e},e))})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(ei,{children:e("daily.newMission.frame")}),(0,u.jsx)(ai,{children:$i.map(e=>(0,u.jsx)(di,{type:"button",selected:h===e,onClick:()=>g(e),title:e,children:(0,u.jsx)(bi,{frame:e})},e))})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(ei,{children:e("daily.newMission.color")}),(0,u.jsx)(ci,{children:ji.map(e=>(0,u.jsx)(pi,{type:"button",color:e,selected:y===e,onClick:()=>b(e)},e))})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(ei,{children:e("daily.newMission.points")}),(0,u.jsx)(fi,{children:vi.map(e=>(0,u.jsx)(mi,{type:"button",selected:j===e,onClick:()=>v(e),children:e},e))})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(ei,{children:e("daily.newMission.time")}),(0,u.jsxs)(oi,{children:[(0,u.jsx)(si,{type:"time",value:k,onChange:e=>T(e.target.value)}),k&&(0,u.jsx)(l.$n,{variant:"ghost",size:"sm",onClick:()=>T(""),children:e("daily.newMission.timeClear")})]})]}),(0,u.jsxs)(xi,{children:[(0,u.jsx)(l.$n,{variant:"ghost",size:"sm",onClick:n,children:e("daily.cancel")}),(0,u.jsx)(l.$n,{variant:"primary",size:"sm",disabled:!p.trim(),onClick:z,children:e(a?"daily.editMission.save":"daily.newMission.save")})]})]})});return s.createPortal(S,document.body)}function Ti({completed:e,total:i,t,pulsing:o}){const s=2*Math.PI*76,n=s*(1-(i>0?e/i:0));return(0,u.jsx)(le,{children:(0,u.jsxs)(de,{pulsing:o,children:[(0,u.jsxs)("svg",{width:180,height:180,viewBox:"0 0 180 180","aria-hidden":!0,children:[(0,u.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:r.w4.colors.border,strokeWidth:14}),(0,u.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:r.w4.colors.accent,strokeWidth:14,strokeDasharray:s,strokeDashoffset:n,strokeLinecap:"round",transform:"rotate(-90 90 90)",style:{transition:"stroke-dashoffset 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"}})]}),(0,u.jsxs)(ce,{children:[(0,u.jsxs)(pe,{children:[e,"/",i]}),(0,u.jsx)(fe,{children:t("daily.progress.today")})]})]})})}function Mi({history:e,total:i,locale:t,t:o}){const s=(0,r.dR)(),n=new Intl.DateTimeFormat("pt"===t?"pt-PT":"en-US",{weekday:"short"}),a=Math.max(...e.map(e=>e.count),1);return(0,u.jsxs)(Be,{children:[(0,u.jsx)(He,{children:(0,u.jsx)(l.YZ,{children:o("daily.sparkline.label")})}),(0,u.jsx)(Ee,{children:e.map(e=>{const i=e.count/a;return(0,u.jsx)(Ye,{heightPct:i,isToday:e.date===s},e.date)})}),(0,u.jsx)(Ie,{children:e.map(e=>{const i=n.format(new Date(e.date+"T00:00:00"));return(0,u.jsx)(Ae,{isToday:e.date===s,children:i.slice(0,3)},e.date)})})]})}function zi({topBarRight:e}){const[i]=(0,d.Ym)(),t=(0,o.useMemo)(()=>(0,d.Nx)(i,x.A),[i]),[s]=(0,r.xc)(),[n,a]=(0,o.useState)(!1),[w,$]=(0,o.useState)(y),[T,M]=(0,o.useState)(!1),[z,S]=(0,o.useState)(!1),[C,D]=(0,o.useState)(null),[R,K]=(0,o.useState)(new Set),[P,le]=(0,o.useState)([]),[de,ce]=(0,o.useState)(null),[pe,fe]=(0,o.useState)(!1),[be,je]=(0,o.useState)(!1),[ve,ke]=(0,o.useState)(null),[Te,Be]=(0,o.useState)(null),[Ee,Ye]=(0,o.useState)(!1),[Ie,Ae]=(0,o.useState)([]),He=(0,o.useRef)(0),Ge=function(){const[e,i]=(0,o.useState)(()=>new Date);return(0,o.useEffect)(()=>{const e=setInterval(()=>i(new Date),6e4);return()=>clearInterval(e)},[6e4]),e}();(0,o.useEffect)(()=>{let e=!1;return(0,r.Fy)().then(i=>{if(e)return;const t=(0,r.dR)();if(i){const e=(i.missions&&i.missions.length>0?i.missions:h).map(e=>function(e){const i=e;return e.translationKey||e.name?e:i.nameEn||i.namePt?{...e,name:i.nameEn??i.namePt}:e}(e)),o={...i.history??{}};!i.history&&i.completedToday.length>0&&(o[i.lastResetDate]=[...i.completedToday]),i.lastResetDate!==t?(i.completedToday.length>0&&(o[i.lastResetDate]=[...i.completedToday]),$({...i,completedToday:o[t]??[],lastResetDate:t,missions:e,history:o})):$({...i,missions:e,history:o,completedToday:o[t]??i.completedToday})}else $(y());a(!0)}),()=>{e=!0}},[]),(0,o.useEffect)(()=>{n&&(0,r.sg)(w)},[w,n]);const Qe=(0,o.useCallback)((e,i)=>{$(t=>{const o=t.completedToday.includes(e.id),s=(0,r.dR)();if(o){const i=Math.max(0,t.totalPoints-e.points),o=t.completedToday.filter(i=>i!==e.id),n=o.length<3?t.streakDays.filter(e=>e!==s):t.streakDays,a={...t.history,[s]:o};return{...t,totalPoints:i,totalMissionsCompleted:Math.max(0,t.totalMissionsCompleted-1),completedToday:o,streakDays:n,history:a}}const n=t.totalPoints+e.points,a=[...t.completedToday,e.id],l=a.length>=3&&!t.streakDays.includes(s)?[...t.streakDays,s]:t.streakDays,d={...t.history,[s]:a};if(K(i=>new Set(i).add(e.id)),setTimeout(()=>{K(i=>{const t=new Set(i);return t.delete(e.id),t})},600),Ye(!0),setTimeout(()=>Ye(!1),850),navigator.vibrate?.(50),i){const t=i.getBoundingClientRect(),o=++He.current;le(i=>[...i,{id:o,value:e.points,x:t.right-60,y:t.top+t.height/2}]),setTimeout(()=>{le(e=>e.filter(e=>e.id!==o))},1200)}Ae(i=>i.filter(i=>i!==e.id));const c=v(t.totalPoints),p=v(n);return p>c&&(ce(j[p]),fe(!1),setTimeout(()=>{fe(!0),setTimeout(()=>ce(null),450)},2e3)),{...t,totalPoints:n,totalMissionsCompleted:t.totalMissionsCompleted+1,completedToday:a,streakDays:l,history:d}})},[]),Ve=(0,o.useCallback)(()=>{$(e=>{const i=(0,r.dR)(),t={...e.history};return delete t[i],{...e,completedToday:[],lastResetDate:i,history:t}}),Ae([]),je(!1)},[]),ei=(0,o.useCallback)(e=>{$(i=>({...i,missions:i.missions.filter(i=>i.id!==e),completedToday:i.completedToday.filter(i=>i!==e)}))},[]),ii=(0,o.useCallback)(e=>{$(i=>({...i,missions:[...i.missions,e]}))},[]),ti=(0,o.useCallback)(e=>{$(i=>({...i,missions:i.missions.map(i=>i.id===e.id?e:i)}))},[]),oi=(0,o.useCallback)((e,i)=>{e!==i&&$(t=>{const o=t.missions,s=o.findIndex(i=>i.id===e),n=o.findIndex(e=>e.id===i);if(s<0||n<0)return t;const a=[...o],[r]=a.splice(s,1);return a.splice(n,0,r),{...t,missions:a}})},[]),si=(v(w.totalPoints),ni=w.totalPoints,Math.floor(ni/b)+1);var ni;const ai=(0,r.Up)(w.history??{}),ri=(0,o.useMemo)(()=>(0,r.yI)(w,7),[w]),li=w.missions.length,di=(0,o.useMemo)(()=>{const e=new Set(w.missions.map(e=>e.id));return w.completedToday.filter(i=>e.has(i)).length},[w.completedToday,w.missions]),ci=Math.max(0,li-di),pi=(0,o.useMemo)(()=>{const e=new Set(w.completedToday);return w.missions.filter(i=>e.has(i.id)).reduce((e,i)=>e+(i.points||0),0)},[w.completedToday,w.missions]),fi=(0,o.useMemo)(()=>{const e=w.missions.filter(e=>!w.completedToday.includes(e.id)&&!Ie.includes(e.id));if(0===e.length)return null;const i=function(){const e=(new Date).getHours();return e<12?"morning":e<18?"afternoon":"evening"}(),t=e.filter(e=>g(e)===i);if(t.length>0)return t[0];const o="morning"===i?"afternoon":"evening",s=e.filter(e=>g(e)===o);return s.length>0?s[0]:e[0]},[w.missions,w.completedToday,Ie]),mi=(0,o.useMemo)(()=>({morning:w.missions.filter(e=>"morning"===g(e)),afternoon:w.missions.filter(e=>"afternoon"===g(e)),evening:w.missions.filter(e=>"evening"===g(e))}),[w.missions]),xi=(()=>{const e=Ge.getHours();return e<12?"daily.greet.morning":e<18?"daily.greet.afternoon":"daily.greet.evening"})(),ui=(s.interests.length,t("daily.greet.defaultName")),hi=Ge.toLocaleTimeString("pt"===i?"pt-PT":"en-US",{hour:"2-digit",minute:"2-digit"}),gi=Ge.toLocaleDateString("pt"===i?"pt-PT":"en-US",{weekday:"long",day:"numeric",month:"long"}),wi=0===ci?t("daily.greet.allDone"):t("daily.greet.remaining",{n:ci,total:li});function $i(e){const i=`daily.chapter.${e}`,o=mi[e];if(0===o.length)return null;const s=o.filter(e=>w.completedToday.includes(e.id)).length;return(0,u.jsxs)(xe,{children:[(0,u.jsxs)(ue,{children:[(0,u.jsx)(l.YZ,{children:t(i)}),(0,u.jsx)(he,{children:t("daily.chapter.count",{done:s,total:o.length})})]}),(0,u.jsx)(ge,{children:o.map(e=>{const i=w.completedToday.includes(e.id),o=R.has(e.id),s=e.translationKey?t(e.translationKey):e.name??"",n=e.color??r.w4.colors.accent,a=e.frame??"disc";return(0,u.jsxs)(ye,{completed:i,flashing:o,isOver:!1,onClick:i=>Qe(e,i.currentTarget),role:"checkbox","aria-checked":i,tabIndex:0,onKeyDown:i=>{" "!==i.key&&"Enter"!==i.key||(i.preventDefault(),Qe(e,i.currentTarget))},children:[(0,u.jsx)(yi,{frame:a,emoji:e.emoji,color:n,size:40}),(0,u.jsx)(Me,{completed:i,children:s}),(0,u.jsxs)(ze,{children:[e.time?(0,u.jsx)(De,{children:e.time}):(0,u.jsx)("span",{}),(0,u.jsxs)(Se,{completed:i,children:["+",e.points]})]}),i&&(0,u.jsx)(Ce,{children:"✓"})]},e.id)})})]},e)}return(0,u.jsxs)(r.PE,{title:t("daily.title"),sidebar:null,topBarRight:e,children:[(0,u.jsxs)(F,{children:[(0,u.jsxs)(B,{children:[(0,u.jsxs)(E,{children:[(0,u.jsx)(Y,{children:t(xi,{name:ui})}),(0,u.jsxs)(I,{children:[gi," · ",hi," · ",wi]})]}),(0,u.jsxs)(A,{children:[(0,u.jsxs)(H,{children:["🧭 ",t("daily.chip.level",{n:si})]}),(0,u.jsxs)(L,{title:t("daily.chip.xpHint"),children:[(0,u.jsx)(N,{children:(0,u.jsx)(U,{pct:k(w.totalPoints)})}),(0,u.jsxs)("span",{children:[w.totalPoints%b,"/",b]})]}),(0,u.jsxs)(H,{children:["⭐ ",t("daily.chip.points",{n:w.totalPoints})]}),(0,u.jsxs)(H,{children:["🔥 ",t(ai>1?"daily.chip.streak":"daily.chip.streakSingle",{n:ai})]}),(0,u.jsxs)(H,{children:["✅ ",t("daily.chip.done",{n:di})]})]})]}),(0,u.jsxs)(O,{children:[(0,u.jsxs)(Z,{centered:!!fi,children:[(0,u.jsx)(_,{children:(0,u.jsx)(l.YZ,{children:t(fi?"daily.focus.nextUp":"daily.focus.dayComplete")})}),fi?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(q,{children:(0,u.jsx)(yi,{frame:fi.frame??"disc",emoji:fi.emoji,color:fi.color??r.w4.colors.accent,size:72})}),(0,u.jsx)(W,{children:fi.translationKey?t(fi.translationKey):fi.name??""}),(0,u.jsxs)(J,{children:["+",fi.points," pts"]}),fi.time&&(0,u.jsx)(X,{children:t("daily.focus.timeChip",{time:fi.time})}),(0,u.jsxs)(G,{children:[(0,u.jsx)(l.$n,{variant:"primary",onClick:e=>{const i=e.target.closest("button");Qe(fi,i)},children:t("daily.focus.markDone")}),(0,u.jsx)(l.$n,{variant:"ghost",onClick:()=>Ae(e=>[...e,fi.id]),children:t("daily.focus.skip")})]})]}):(0,u.jsxs)(Q,{children:[(0,u.jsxs)(V,{children:[(0,u.jsx)(ee,{children:"🌟"}),(0,u.jsxs)(ie,{children:[(0,u.jsx)(te,{children:t("daily.focus.allDone")}),(0,u.jsx)(oe,{children:t("daily.focus.allDoneBody")})]})]}),(0,u.jsxs)(se,{children:[(0,u.jsxs)(ne,{children:[(0,u.jsxs)(ae,{children:["+",pi]}),(0,u.jsx)(re,{children:t("daily.summary.pointsToday")})]}),(0,u.jsxs)(ne,{children:[(0,u.jsx)(ae,{children:di}),(0,u.jsx)(re,{children:t("daily.summary.missions")})]}),(0,u.jsxs)(ne,{children:[(0,u.jsx)(ae,{children:ai}),(0,u.jsx)(re,{children:t("daily.summary.streak")})]})]})]})]}),(0,u.jsx)(Ti,{completed:di,total:li,t,pulsing:Ee})]}),T?(0,u.jsxs)("div",{children:[(0,u.jsxs)(Pe,{children:[(0,u.jsx)(Fe,{children:t("daily.sectionMissions")}),(0,u.jsxs)("div",{style:{display:"flex",gap:r.w4.spacing.xs},children:[(0,u.jsx)(l.$n,{variant:"accent",size:"sm",icon:(0,u.jsx)(c.A,{size:13}),onClick:()=>{M(!1),S(!1)},children:t("daily.done")}),(0,u.jsx)(l.K0,{onClick:()=>S(!0),title:t("daily.addMission"),"aria-label":t("daily.addMission"),children:(0,u.jsx)(m.A,{size:13})})]})]}),(0,u.jsx)(we,{children:w.missions.map(e=>{const i=ve===e.id,o=Te===e.id&&ve!==e.id,s=e.translationKey?t(e.translationKey):e.name??"",n=e.color??r.w4.colors.accent,a=e.frame??"disc";return(0,u.jsxs)($e,{isOver:o,role:"button",tabIndex:0,"aria-label":t("daily.editMission.open"),title:t("daily.editMission.open"),style:{opacity:i?.3:1},onClick:()=>D(e),onKeyDown:i=>{"Enter"!==i.key&&" "!==i.key||(i.preventDefault(),D(e))},onDragOver:i=>{i.preventDefault(),i.dataTransfer.dropEffect="move",ve&&ve!==e.id&&Be(e.id)},onDragLeave:e=>{e.currentTarget===e.target&&Be(null)},onDrop:i=>{i.preventDefault(),ve&&oi(ve,e.id),ke(null),Be(null)},children:[(0,u.jsx)(Ke,{"aria-hidden":!0,draggable:!0,onClick:e=>e.stopPropagation(),onDragStart:i=>{ke(e.id),i.dataTransfer.effectAllowed="move",i.dataTransfer.setData("text/plain",e.id)},onDragEnd:()=>{ke(null),Be(null)},children:(0,u.jsx)(p.A,{size:14})}),(0,u.jsx)(yi,{frame:a,emoji:e.emoji,color:n,size:40}),(0,u.jsx)(Me,{completed:!1,children:s}),(0,u.jsxs)(ze,{children:[e.time?(0,u.jsx)(De,{children:e.time}):(0,u.jsx)("span",{}),(0,u.jsxs)(Se,{completed:!1,children:["+",e.points]})]}),(0,u.jsx)(Re,{onClick:i=>{i.stopPropagation(),ei(e.id)},"aria-label":t("daily.delete"),title:t("daily.delete"),children:"×"})]},e.id)})}),(0,u.jsx)("div",{style:{marginTop:r.w4.spacing.sm},children:(0,u.jsx)(l.$n,{variant:"ghost",icon:(0,u.jsx)(m.A,{size:13}),onClick:()=>S(!0),children:t("daily.addMission")})})]}):(0,u.jsxs)(me,{children:[(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,u.jsx)(l.YZ,{children:t("daily.sectionMissions")}),(0,u.jsxs)("div",{style:{display:"flex",gap:r.w4.spacing.xs},children:[(0,u.jsx)(l.$n,{variant:"ghost",size:"sm",icon:(0,u.jsx)(f.A,{size:13}),onClick:()=>M(!0),children:t("daily.edit")}),(0,u.jsx)(l.K0,{onClick:()=>S(!0),title:t("daily.addMission"),"aria-label":t("daily.addMission"),children:(0,u.jsx)(m.A,{size:13})})]})]}),$i("morning"),$i("afternoon"),$i("evening")]}),(0,u.jsx)(Mi,{history:ri,total:li,locale:i,t}),(0,u.jsx)(Le,{children:be?(0,u.jsxs)(Ne,{children:[(0,u.jsx)(Ue,{children:t("daily.resetConfirm")}),(0,u.jsxs)(Oe,{children:[(0,u.jsx)(l.$n,{variant:"danger",onClick:Ve,style:{flex:1},children:t("daily.confirm")}),(0,u.jsx)(l.$n,{variant:"ghost",onClick:()=>je(!1),style:{flex:1},children:t("daily.cancel")})]})]}):(0,u.jsx)(l.$n,{variant:"ghost",onClick:()=>je(!0),children:t("daily.resetDay")})})]}),P.map(e=>(0,u.jsxs)(Ze,{style:{left:e.x,top:e.y},children:["+",e.value]},e.id)),de&&(0,u.jsx)(_e,{exiting:pe,children:(0,u.jsxs)(qe,{children:[(0,u.jsx)(We,{children:de.emoji}),(0,u.jsx)(Je,{children:t("daily.levelUp")}),(0,u.jsx)(Xe,{children:t(de.key)})]})}),(z||C)&&(0,u.jsx)(ki,{t,mission:C??void 0,onSave:e=>{C?ti(e):ii(e),S(!1),D(null)},onClose:()=>{S(!1),D(null)}})]})}}}]);