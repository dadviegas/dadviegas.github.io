"use strict";(self.webpackChunk_atlantis_daily=self.webpackChunk_atlantis_daily||[]).push([[188],{188(e,i,t){var o=t(8997),n=t(7359),s=t(8991),a=t(3233),r=t(7207),l=t(4901),d=t(9763),c=t(894),p=t(5609),f=t(1365),m=t(8320),x=t(536),u=t(8887),h=t(5723);const g=[{id:"brush-teeth",emoji:"🪥",translationKey:"daily.mission.brushTeeth",points:5,frame:"disc",color:l.w4.suites.learn,time:"07:30"},{id:"make-bed",emoji:"🛏️",translationKey:"daily.mission.makeBed",points:10,frame:"ring",color:l.w4.suites.vida,time:"08:00"},{id:"school-bag",emoji:"🎒",translationKey:"daily.mission.schoolBag",points:5,frame:"disc",color:l.w4.colors.accent,time:"08:15"},{id:"set-table",emoji:"🍽️",translationKey:"daily.mission.setTable",points:10,frame:"polaroid",color:l.w4.suites.games,time:"12:30"},{id:"vegetables",emoji:"🥗",translationKey:"daily.mission.vegetables",points:5,frame:"ring",color:l.w4.suites.vida,time:"13:00"},{id:"homework",emoji:"📝",translationKey:"daily.mission.homework",points:15,frame:"hex",color:l.w4.suites.learn,time:"17:00"},{id:"tidy-room",emoji:"🧹",translationKey:"daily.mission.tidyRoom",points:15,frame:"hex",color:l.w4.suites.ent,time:"17:30"},{id:"clothes-away",emoji:"🧤",translationKey:"daily.mission.clothesAway",points:10,frame:"stamp",color:l.w4.suites.ent,time:"18:00"},{id:"draw",emoji:"🎨",translationKey:"daily.mission.draw",points:10,frame:"polaroid",color:l.w4.suites.lab,time:"18:30"},{id:"read",emoji:"📚",translationKey:"daily.mission.read",points:15,frame:"stamp",color:l.w4.suites.lab,time:"19:30"},{id:"be-kind",emoji:"🤗",translationKey:"daily.mission.beKind",points:10,frame:"disc",color:l.w4.suites.games}];function w(e){if(!e.time)return"morning";const[i]=e.time.split(":"),t=parseInt(i,10);return t<12?"morning":t<18?"afternoon":"evening"}const y="daily:notifications-asked";function $(){return{totalPoints:0,totalMissionsCompleted:0,completedToday:[],streakDays:[],lastResetDate:(0,l.dR)(),missions:g,history:{}}}const b=["🪥","🧴","🛁","💊","🩺","🧼","🪒","🧘","🥗","🍎","🥕","💧","🍵","🥛","🍳","🥦","🏃","🚴","🧗","🏊","⚽","🏀","🎾","🤸","📚","📝","✏️","🎓","🧠","💡","🔬","🗣️","🛏️","🧹","🧺","🍽️","🧽","🧊","🌱","🪴","🎨","🎭","🎸","🎹","📷","🎬","✂️","🖍️","🤗","❤️","🌈","🎁","💌","🫂","🙏","🌟","🎯","🔥","🏆","⏰","📅","✨","🚀","⭐"],j=50,v=[{emoji:"🌱",key:"daily.level.recruit"},{emoji:"🧭",key:"daily.level.explorer"},{emoji:"⚔️",key:"daily.level.adventurer"},{emoji:"🦸",key:"daily.level.hero"},{emoji:"🏆",key:"daily.level.champion"},{emoji:"🌟",key:"daily.level.legend"}];function k(e){return Math.min(Math.floor(e/j),v.length-1)}function T(e){return e%j/j*100}const M=r.keyframes`
  0%   { opacity: 1; transform: translateY(0) scale(1); }
  80%  { opacity: 1; transform: translateY(-48px) scale(1.15); }
  100% { opacity: 0; transform: translateY(-72px) scale(0.9); }
`,z=r.keyframes`
  0%   { box-shadow: none; }
  30%  { box-shadow: 0 0 0 3px ${l.w4.colors.accent}; }
  100% { box-shadow: none; }
`,S=r.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,C=r.keyframes`
  0%   { transform: scale(0.6); }
  60%  { transform: scale(1.25); }
  100% { transform: scale(1); }
`,D=r.keyframes`
  0%, 100% { filter: drop-shadow(0 0 4px ${l.w4.colors.accent}); }
  50%       { filter: drop-shadow(0 0 12px ${l.w4.colors.accent}); }
`,R=r.keyframes`
  0%   { opacity: 0; transform: scale(0.7); }
  60%  { opacity: 1; transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
`,K=r.keyframes`
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.2); }
`,P=r.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,F=r.keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,B=(r.keyframes`
  from { width: 0%; }
`,r.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,a.default.div`
  display: flex;
  flex-direction: column;
  background: radial-gradient(ellipse at 50% 0%, ${l.w4.colors.accentMuted} 0%, ${l.w4.colors.mainBg} 60%);
  padding: ${l.w4.spacing.lg} ${l.w4.spacing.md} ${l.w4.spacing.xl};
  gap: ${l.w4.spacing.lg};
  animation: ${S} 0.3s ease;
  width: 100%;

  @media (min-width: ${l.w4.breakpoints.md}) {
    padding: ${l.w4.spacing.xl};
  }
`),E=a.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${l.w4.spacing.md};
`,I=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Y=a.default.div`
  font-family: ${l.w4.typography.fontFamilySerif};
  font-size: 28px;
  font-weight: 300;
  color: ${l.w4.colors.mainText};
  line-height: 1.2;
  letter-spacing: -0.01em;
`,H=a.default.div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
`,A=a.default.div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  flex-wrap: wrap;
  flex-shrink: 0;
`,L=a.default.div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
  white-space: nowrap;
  line-height: 1.4;
`,N=a.default.div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;
  line-height: 1.4;
`,U=a.default.div`
  width: 48px;
  height: 5px;
  border-radius: 99px;
  background: ${l.w4.colors.border};
  overflow: hidden;
  position: relative;
`,O=a.default.div`
  width: ${({pct:e})=>`${e}%`};
  height: 100%;
  background: linear-gradient(
    90deg,
    ${l.w4.colors.accent},
    ${l.w4.colors.accentHover}
  );
  border-radius: inherit;
  transition: width 0.35s ${l.w4.transitions.easing};
`,Z=a.default.div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};

  @media (min-width: ${l.w4.breakpoints.lg}) {
    flex-direction: row;
    align-items: stretch;
  }
`,_=a.default.div`
  flex: 1;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.accent};
  border-radius: ${l.w4.borderRadius.xl};
  padding: ${l.w4.spacing.xl} ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: ${({centered:e=!0})=>e?"center":"stretch"};
  justify-content: ${({centered:e=!0})=>e?"flex-start":"center"};
  gap: ${l.w4.spacing.md};
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
    background: linear-gradient(90deg, transparent, ${l.w4.colors.accent}, transparent);
  }
`,q=a.default.div`
  align-self: flex-start;
`,W=a.default.div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 4px 12px ${l.w4.colors.shadowStrong});
`,J=a.default.div`
  font-size: 22px;
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  text-align: center;
`,X=a.default.div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
`,G=a.default.div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
`,Q=a.default.div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  width: 100%;

  > * { flex: 1; }
`,V=a.default.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  gap: ${l.w4.spacing.lg};
  padding: ${l.w4.spacing.sm} 0;
`,ee=a.default.div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.lg};
`,ie=a.default.div`
  font-size: 48px;
  line-height: 1;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 8px ${l.w4.colors.shadow});
`,te=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,oe=a.default.div`
  font-family: ${l.w4.typography.fontFamilySerif};
  font-size: 22px;
  font-weight: 400;
  color: ${l.w4.colors.mainText};
  line-height: 1.2;
`,ne=a.default.div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
`,se=a.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${l.w4.spacing.sm};
`,ae=a.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
`,re=a.default.div`
  font-family: ${l.w4.typography.fontFamilySerif};
  font-size: 22px;
  font-weight: 400;
  color: ${l.w4.colors.mainText};
  line-height: 1;
`,le=a.default.div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
`,de=a.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.lg}) {
    min-width: 220px;
  }
`,ce=a.default.div`
  position: relative;
  width: 180px;
  height: 180px;
  ${({pulsing:e})=>e?r.css`
          animation: ${D} 0.8s ease;
        `:""}
`,pe=a.default.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`,fe=a.default.div`
  font-family: ${l.w4.typography.fontFamilySerif};
  font-size: 36px;
  font-weight: 400;
  color: ${l.w4.colors.mainText};
  line-height: 1;
`,me=a.default.div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${l.w4.colors.mainTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,xe=a.default.div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,ue=a.default.div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,he=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ge=a.default.div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
`,we=a.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${l.w4.spacing.sm};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
    gap: ${l.w4.spacing.md};
  }
`,ye=a.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${l.w4.spacing.sm};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
    gap: ${l.w4.spacing.md};
  }
`,$e=a.default.div`
  width: 100%;
  min-width: 0;
  min-height: 116px;
  background: ${({completed:e})=>e?l.w4.colors.accentMuted:l.w4.colors.surface};
  border: 1px solid ${({completed:e,isOver:i})=>i?l.w4.colors.accent:e?l.w4.colors.success:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
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
    border-color ${l.w4.transitions.base},
    background ${l.w4.transitions.base},
    box-shadow ${l.w4.transitions.base},
    transform ${l.w4.transitions.fast};
  ${({flashing:e})=>e?r.css`
          animation: ${z} 0.6s ease forwards;
        `:""}
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${({completed:e})=>e?l.w4.colors.success:l.w4.colors.accentHover};
    transform: translateY(-1px);
    box-shadow: ${l.w4.elevation.sm};
  }

  &:focus-visible {
    ${l.w4.focusRing}
  }
`,be=a.default.div`
  width: 100%;
  min-width: 0;
  min-height: 116px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${({isOver:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  padding: 12px 8px 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border-color ${l.w4.transitions.base}, background ${l.w4.transitions.fast};
  user-select: none;

  &:hover {
    border-color: ${l.w4.colors.accentHover};
    background: ${l.w4.colors.codeBg};
  }

  &:focus-visible {
    ${l.w4.focusRing}
  }
`,je=a.default.div`
  border-radius: 50%;
  background: ${({color:e})=>`${e}28`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid ${({color:e})=>`${e}44`};
`,ve=a.default.div`
  border-radius: 50%;
  background: transparent;
  border: 2.5px solid ${({color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ke=a.default.div`
  border-radius: ${l.w4.borderRadius.md};
  background: ${({color:e})=>`${e}28`};
  border: 2px solid ${({color:e})=>`${e}55`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transform: rotate(8deg);
  box-shadow: 2px 2px 6px ${l.w4.colors.shadow};
`,Te=a.default.div`
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  background: ${({color:e})=>`${e}35`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Me=a.default.div`
  background: ${l.w4.colors.mainText};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 1px 2px 6px ${l.w4.colors.shadow};

  .inner {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background: ${({color:e})=>`${e}30`};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,ze=a.default.span`
  font-size: 11px;
  color: ${({completed:e})=>e?l.w4.colors.mainTextMuted:l.w4.colors.mainText};
  font-weight: 500;
  text-decoration: ${({completed:e})=>e?"line-through":"none"};
  text-decoration-color: ${({completed:e})=>e?`${l.w4.colors.success}99`:"transparent"};
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
`,Se=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
  min-height: 14px;
`,Ce=a.default.div`
  font-size: 10px;
  font-weight: 700;
  color: ${({completed:e})=>e?l.w4.colors.success:l.w4.colors.accent};
  background: ${l.w4.colors.accentMuted};
  padding: 2px 6px;
  border-radius: 99px;
  white-space: nowrap;
`,De=a.default.div`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${l.w4.colors.success};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #fff;
  animation: ${C} 0.35s ease;
`,Re=a.default.span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.3;
`,Ke=a.default.button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${l.w4.colors.danger};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 11px;
  cursor: pointer;
  padding: 0;
  opacity: 0.85;
  transition: opacity ${l.w4.transitions.fast};

  &:hover { opacity: 1; }
`,Pe=a.default.div`
  position: absolute;
  top: 6px;
  left: 6px;
  color: ${l.w4.colors.mainTextMuted};
  cursor: grab;
  line-height: 1;

  &:active { cursor: grabbing; }
`,Fe=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.md};
`,Be=a.default.h2`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  margin: 0;
`,Ee=a.default.div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,Ie=a.default.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  align-items: flex-end;
  height: 48px;
`,Ye=a.default.div`
  min-height: 2px;
  height: ${({heightPct:e})=>Math.max(100*e,2)}%;
  background: ${({isToday:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: 2px 2px 0 0;
  transition: height 0.4s ease;
`,He=a.default.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,Ae=a.default.div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${({isToday:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,Le=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ne=a.default.div`
  display: flex;
  justify-content: flex-end;
`,Ue=a.default.div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xs};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  animation: ${S} 0.2s ease;
`,Oe=a.default.div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
`,Ze=a.default.div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,_e=a.default.div`
  position: fixed;
  pointer-events: none;
  font-size: 18px;
  font-weight: 700;
  color: ${l.w4.colors.accent};
  text-shadow: 0 0 8px ${l.w4.colors.accent};
  z-index: 9999;
  animation: ${M} 1.1s ease forwards;
`,qe=a.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  ${({exiting:e})=>e?r.css`
          animation: ${K} 0.4s ease forwards;
        `:r.css`
          animation: ${R} 0.4s ease forwards;
        `}
`,We=a.default.div`
  background: ${l.w4.colors.surface};
  border: 2px solid ${l.w4.colors.accent};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.xxl} ${l.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.md};
  text-align: center;
  box-shadow: 0 0 40px ${l.w4.colors.shadowStrong};
`,Je=a.default.div`
  font-size: 80px;
  line-height: 1;
`,Xe=a.default.div`
  font-size: ${l.w4.typography.fontSizeSm};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.accent};
  font-weight: 700;
`,Ge=a.default.div`
  font-size: ${l.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
`,Qe=a.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${l.w4.zIndex.modal};
  padding: ${l.w4.spacing.md};
  animation: ${P} 0.2s ease;
`,Ve=a.default.div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.xl};
  padding: ${l.w4.spacing.lg};
  width: 100%;
  max-width: 440px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
  box-shadow: ${l.w4.elevation.lg};
  animation: ${F} 0.25s ease;
`,ei=a.default.h2`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  margin: 0;
`,ii=a.default.div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  font-weight: 600;
  margin-bottom: ${l.w4.spacing.xs};
`,ti=a.default.div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,oi=a.default.input`
  width: 100%;
  padding: 10px 12px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  transition: border-color ${l.w4.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${l.w4.colors.accent};
  }

  &::placeholder {
    color: ${l.w4.colors.mainTextFaint};
  }
`,ni=a.default.div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,si=a.default.input`
  padding: 8px 10px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamilyMono};
  color-scheme: dark;
  transition: border-color ${l.w4.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${l.w4.colors.accent};
  }
`,ai=a.default.input`
  width: 56px;
  text-align: center;
  padding: 10px 8px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: 22px;
  font-family: ${l.w4.typography.fontFamily};
  flex-shrink: 0;
  transition: border-color ${l.w4.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${l.w4.colors.accent};
  }
`,ri=a.default.div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,li=a.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
  gap: 6px;
  max-height: 180px;
  overflow-y: auto;
  padding: ${l.w4.spacing.sm};
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
`,di=a.default.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({selected:e})=>e?l.w4.colors.accentMuted:"transparent"};
  border: 1px solid ${({selected:e})=>e?l.w4.colors.accent:"transparent"};
  border-radius: ${l.w4.borderRadius.sm};
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};
  font-family: ${l.w4.typography.fontFamily};

  &:hover {
    background: ${l.w4.colors.surfaceHover};
  }
`,ci=a.default.button`
  width: 52px;
  height: 52px;
  border-radius: ${l.w4.borderRadius.md};
  border: 2px solid ${({selected:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  background: ${({selected:e})=>e?l.w4.colors.accentMuted:l.w4.colors.mainBg};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color ${l.w4.transitions.fast}, background ${l.w4.transitions.fast};
  padding: 0;

  &:hover {
    border-color: ${l.w4.colors.accentHover};
  }
`,pi=a.default.div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,fi=a.default.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  border: 3px solid ${({selected:e})=>e?"#fff":"transparent"};
  cursor: pointer;
  padding: 0;
  outline: 2px solid ${({selected:e,color:i})=>e?i:"transparent"};
  outline-offset: 2px;
  transition: outline-color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};

  &:hover {
    outline-color: ${({color:e})=>e};
  }
`,mi=a.default.div`
  display: flex;
  gap: 4px;
`,xi=a.default.button`
  flex: 1;
  padding: 8px 4px;
  border-radius: ${l.w4.borderRadius.sm};
  border: 1px solid ${({selected:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  background: ${({selected:e})=>e?l.w4.colors.accent:l.w4.colors.mainBg};
  color: ${({selected:e})=>e?"#fff":l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  &:hover {
    border-color: ${l.w4.colors.accent};
  }
`,ui=a.default.div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  justify-content: flex-end;
  padding-top: ${l.w4.spacing.xs};
  border-top: 1px solid ${l.w4.colors.borderSubtle};
`,hi=a.default.div`
  display: flex;
  justify-content: center;
  padding: ${l.w4.spacing.sm} 0;
`,gi=a.default.div`
  width: 120px;
  aspect-ratio: 1 / 1.1;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.sm} ${l.w4.spacing.sm};
  position: relative;
  pointer-events: none;
`,wi=a.default.span`
  font-size: 11px;
  color: ${l.w4.colors.mainText};
  font-weight: 500;
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.3;
  width: 100%;
`,yi=a.default.div`
  font-size: 10px;
  font-weight: 700;
  color: ${l.w4.colors.accent};
  background: ${l.w4.colors.accentMuted};
  padding: 2px 7px;
  border-radius: 99px;
  align-self: flex-end;
`;function $i({frame:e,emoji:i,color:t,size:o=64}){const n={fontSize:Math.round(.44*o)};switch(e){case"ring":return(0,h.jsx)(ve,{color:t,style:{width:o,height:o},children:(0,h.jsx)("span",{style:n,children:i})});case"stamp":return(0,h.jsx)(ke,{color:t,style:{width:o-4,height:o-4},children:(0,h.jsx)("span",{style:n,children:i})});case"hex":return(0,h.jsx)(Te,{color:t,style:{width:o,height:o},children:(0,h.jsx)("span",{style:n,children:i})});case"polaroid":return(0,h.jsx)(Me,{color:t,style:{width:o,height:o+4},children:(0,h.jsx)("div",{className:"inner",children:(0,h.jsx)("span",{style:n,children:i})})});default:return(0,h.jsx)(je,{color:t,style:{width:o,height:o},children:(0,h.jsx)("span",{style:n,children:i})})}}const bi=["disc","ring","stamp","hex","polaroid"];function ji({frame:e}){const i=l.w4.colors.accent;switch(e){case"ring":return(0,h.jsx)(ve,{color:i,style:{width:30,height:30},children:(0,h.jsx)("span",{style:{fontSize:12},children:"✦"})});case"stamp":return(0,h.jsx)(ke,{color:i,style:{width:28,height:28},children:(0,h.jsx)("span",{style:{fontSize:12},children:"✦"})});case"hex":return(0,h.jsx)(Te,{color:i,style:{width:30,height:30},children:(0,h.jsx)("span",{style:{fontSize:12},children:"✦"})});case"polaroid":return(0,h.jsx)(Me,{color:i,style:{width:28,height:32},children:(0,h.jsx)("div",{className:"inner",children:(0,h.jsx)("span",{style:{fontSize:10},children:"✦"})})});default:return(0,h.jsx)(je,{color:i,style:{width:30,height:30},children:(0,h.jsx)("span",{style:{fontSize:12},children:"✦"})})}}const vi=[l.w4.colors.accent,l.w4.colors.success,l.w4.suites.lab,l.w4.suites.vida,l.w4.suites.learn,l.w4.suites.games],ki=[5,10,15,20,25];function Ti({t:e,mission:i,onSave:t,onClose:o}){const a=!!i,r=i?.translationKey?e(i.translationKey):"",c=i&&ki.includes(i.points)?i.points:10,[p,f]=(0,n.useState)(i?.name??r),[m,x]=(0,n.useState)(i?.emoji??"🎯"),[u,g]=(0,n.useState)(i?.frame??"disc"),[w,$]=(0,n.useState)(i?.color??l.w4.colors.accent),[j,v]=(0,n.useState)(c),[k,T]=(0,n.useState)(i?.time??""),M=(0,n.useRef)(null);(0,n.useEffect)(()=>{M.current?.focus();const e=e=>{"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o]);const z=()=>{const e=p.trim();if(!e)return;const o=i?.translationKey&&e===r;k&&async function(){if("undefined"!=typeof window&&"Notification"in window&&"default"===Notification.permission&&"1"!==await(0,l.qj)(y)){await(0,l.pJ)(y,"1");try{await Notification.requestPermission()}catch{}}}(),t({id:i?.id??`custom-${Date.now().toString(36)}`,emoji:m||"🎯",points:j,frame:u,color:w,...o?{translationKey:i.translationKey}:{name:e},...k?{time:k}:{}})},S=(0,h.jsx)(Qe,{onClick:e=>{e.target===e.currentTarget&&o()},children:(0,h.jsxs)(Ve,{onClick:e=>e.stopPropagation(),children:[(0,h.jsx)(ei,{children:e(a?"daily.editMission.title":"daily.newMission.title")}),(0,h.jsxs)("div",{children:[(0,h.jsx)(ii,{children:e("daily.newMission.preview")}),(0,h.jsx)(hi,{children:(0,h.jsxs)(gi,{children:[(0,h.jsx)($i,{frame:u,emoji:m||"🎯",color:w,size:52}),(0,h.jsx)(wi,{children:p||e("daily.newMission.namePlaceholder")}),(0,h.jsxs)(yi,{children:["+",j," pts"]})]})})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(ii,{children:e("daily.newMission.name")}),(0,h.jsxs)(ti,{children:[(0,h.jsx)(ai,{value:m,onChange:e=>x(e.target.value),maxLength:4,"aria-label":e("daily.newMission.emoji")}),(0,h.jsx)(oi,{ref:M,placeholder:e("daily.newMission.namePlaceholder"),value:p,onChange:e=>f(e.target.value),onKeyDown:e=>{"Enter"===e.key&&p.trim()&&z()}})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(ii,{children:e("daily.newMission.icon")}),(0,h.jsx)(li,{children:b.map(e=>(0,h.jsx)(di,{type:"button",selected:m===e,onClick:()=>x(e),"aria-label":e,children:e},e))})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(ii,{children:e("daily.newMission.frame")}),(0,h.jsx)(ri,{children:bi.map(e=>(0,h.jsx)(ci,{type:"button",selected:u===e,onClick:()=>g(e),title:e,children:(0,h.jsx)(ji,{frame:e})},e))})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(ii,{children:e("daily.newMission.color")}),(0,h.jsx)(pi,{children:vi.map(e=>(0,h.jsx)(fi,{type:"button",color:e,selected:w===e,onClick:()=>$(e)},e))})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(ii,{children:e("daily.newMission.points")}),(0,h.jsx)(mi,{children:ki.map(e=>(0,h.jsx)(xi,{type:"button",selected:j===e,onClick:()=>v(e),children:e},e))})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(ii,{children:e("daily.newMission.time")}),(0,h.jsxs)(ni,{children:[(0,h.jsx)(si,{type:"time",value:k,onChange:e=>T(e.target.value)}),k&&(0,h.jsx)(d.$n,{variant:"ghost",size:"sm",onClick:()=>T(""),children:e("daily.newMission.timeClear")})]})]}),(0,h.jsxs)(ui,{children:[(0,h.jsx)(d.$n,{variant:"ghost",size:"sm",onClick:o,children:e("daily.cancel")}),(0,h.jsx)(d.$n,{variant:"primary",size:"sm",disabled:!p.trim(),onClick:z,children:e(a?"daily.editMission.save":"daily.newMission.save")})]})]})});return s.createPortal(S,document.body)}function Mi({completed:e,total:i,t,pulsing:o}){const n=2*Math.PI*76,s=n*(1-(i>0?e/i:0));return(0,h.jsx)(de,{children:(0,h.jsxs)(ce,{pulsing:o,children:[(0,h.jsxs)("svg",{width:180,height:180,viewBox:"0 0 180 180","aria-hidden":!0,children:[(0,h.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:l.w4.colors.border,strokeWidth:14}),(0,h.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:l.w4.colors.accent,strokeWidth:14,strokeDasharray:n,strokeDashoffset:s,strokeLinecap:"round",transform:"rotate(-90 90 90)",style:{transition:"stroke-dashoffset 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"}})]}),(0,h.jsxs)(pe,{children:[(0,h.jsxs)(fe,{children:[e,"/",i]}),(0,h.jsx)(me,{children:t("daily.progress.today")})]})]})})}function zi({history:e,total:i,locale:t,t:o}){const n=(0,l.dR)(),s=new Intl.DateTimeFormat("pt"===t?"pt-PT":"en-US",{weekday:"short"}),a=Math.max(...e.map(e=>e.count),1);return(0,h.jsxs)(Ee,{children:[(0,h.jsx)(Le,{children:(0,h.jsx)(d.YZ,{children:o("daily.sparkline.label")})}),(0,h.jsx)(Ie,{children:e.map(e=>{const i=e.count/a;return(0,h.jsx)(Ye,{heightPct:i,isToday:e.date===n},e.date)})}),(0,h.jsx)(He,{children:e.map(e=>{const i=s.format(new Date(e.date+"T00:00:00"));return(0,h.jsx)(Ae,{isToday:e.date===n,children:i.slice(0,3)},e.date)})})]})}function Si({topBarRight:e}){const[i]=(0,c.Ym)(),t=(0,n.useMemo)(()=>(0,c.Nx)(i,u.A),[i]),[o]=(0,l.xc)(),[s,a]=(0,n.useState)(!1),[r,y]=(0,n.useState)($),[b,M]=(0,n.useState)(!1),[z,S]=(0,n.useState)(!1),[C,D]=(0,n.useState)(null),[R,K]=(0,n.useState)(new Set),[P,F]=(0,n.useState)([]),[de,ce]=(0,n.useState)(null),[pe,fe]=(0,n.useState)(!1),[me,je]=(0,n.useState)(!1),[ve,ke]=(0,n.useState)(null),[Te,Me]=(0,n.useState)(null),[Ee,Ie]=(0,n.useState)(!1),[Ye,He]=(0,n.useState)([]),Ae=(0,n.useRef)(0),Le=function(){const[e,i]=(0,n.useState)(()=>new Date);return(0,n.useEffect)(()=>{const e=setInterval(()=>i(new Date),6e4);return()=>clearInterval(e)},[6e4]),e}();(0,n.useEffect)(()=>{let e=!1;return(0,l.Fy)().then(i=>{if(e)return;const t=(0,l.dR)();if(i){const e=(i.missions&&i.missions.length>0?i.missions:g).map(e=>function(e){const i=e;return e.translationKey||e.name?e:i.nameEn||i.namePt?{...e,name:i.nameEn??i.namePt}:e}(e)),o={...i.history??{}};!i.history&&i.completedToday.length>0&&(o[i.lastResetDate]=[...i.completedToday]),i.lastResetDate!==t?(i.completedToday.length>0&&(o[i.lastResetDate]=[...i.completedToday]),y({...i,completedToday:o[t]??[],lastResetDate:t,missions:e,history:o})):y({...i,missions:e,history:o,completedToday:o[t]??i.completedToday})}else y($());a(!0)}),()=>{e=!0}},[]),(0,n.useEffect)(()=>{s&&(0,l.sg)(r)},[r,s]);const Qe=(0,n.useCallback)((e,i)=>{y(t=>{const o=t.completedToday.includes(e.id),n=(0,l.dR)();if(o){const i=Math.max(0,t.totalPoints-e.points),o=t.completedToday.filter(i=>i!==e.id),s=o.length<3?t.streakDays.filter(e=>e!==n):t.streakDays,a={...t.history,[n]:o};return{...t,totalPoints:i,totalMissionsCompleted:Math.max(0,t.totalMissionsCompleted-1),completedToday:o,streakDays:s,history:a}}const s=t.totalPoints+e.points,a=[...t.completedToday,e.id],r=a.length>=3&&!t.streakDays.includes(n)?[...t.streakDays,n]:t.streakDays,d={...t.history,[n]:a};if(K(i=>new Set(i).add(e.id)),setTimeout(()=>{K(i=>{const t=new Set(i);return t.delete(e.id),t})},600),Ie(!0),setTimeout(()=>Ie(!1),850),navigator.vibrate?.(50),i){const t=i.getBoundingClientRect(),o=++Ae.current;F(i=>[...i,{id:o,value:e.points,x:t.right-60,y:t.top+t.height/2}]),setTimeout(()=>{F(e=>e.filter(e=>e.id!==o))},1200)}He(i=>i.filter(i=>i!==e.id));const c=k(t.totalPoints),p=k(s);return p>c&&(ce(v[p]),fe(!1),setTimeout(()=>{fe(!0),setTimeout(()=>ce(null),450)},2e3)),{...t,totalPoints:s,totalMissionsCompleted:t.totalMissionsCompleted+1,completedToday:a,streakDays:r,history:d}})},[]),Ve=(0,n.useCallback)(()=>{y(e=>{const i=(0,l.dR)(),t={...e.history};return delete t[i],{...e,completedToday:[],lastResetDate:i,history:t}}),He([]),je(!1)},[]),ei=(0,n.useCallback)(e=>{y(i=>({...i,missions:i.missions.filter(i=>i.id!==e),completedToday:i.completedToday.filter(i=>i!==e)}))},[]),ii=(0,n.useCallback)(e=>{y(i=>({...i,missions:[...i.missions,e]}))},[]),ti=(0,n.useCallback)(e=>{y(i=>({...i,missions:i.missions.map(i=>i.id===e.id?e:i)}))},[]),oi=(0,n.useCallback)((e,i)=>{e!==i&&y(t=>{const o=t.missions,n=o.findIndex(i=>i.id===e),s=o.findIndex(e=>e.id===i);if(n<0||s<0)return t;const a=[...o],[r]=a.splice(n,1);return a.splice(s,0,r),{...t,missions:a}})},[]),ni=(k(r.totalPoints),si=r.totalPoints,Math.floor(si/j)+1);var si;const ai=(0,l.Up)(r.history??{}),ri=(0,n.useMemo)(()=>(0,l.yI)(r,7),[r]),li=r.missions.length,di=(0,n.useMemo)(()=>{const e=new Set(r.missions.map(e=>e.id));return r.completedToday.filter(i=>e.has(i)).length},[r.completedToday,r.missions]),ci=Math.max(0,li-di),pi=(0,n.useMemo)(()=>{const e=new Set(r.completedToday);return r.missions.filter(i=>e.has(i.id)).reduce((e,i)=>e+(i.points||0),0)},[r.completedToday,r.missions]),fi=(0,n.useMemo)(()=>{const e=r.missions.filter(e=>!r.completedToday.includes(e.id)&&!Ye.includes(e.id));if(0===e.length)return null;const i=function(){const e=(new Date).getHours();return e<12?"morning":e<18?"afternoon":"evening"}(),t=e.filter(e=>w(e)===i);if(t.length>0)return t[0];const o="morning"===i?"afternoon":"evening",n=e.filter(e=>w(e)===o);return n.length>0?n[0]:e[0]},[r.missions,r.completedToday,Ye]),mi=(0,n.useMemo)(()=>({morning:r.missions.filter(e=>"morning"===w(e)),afternoon:r.missions.filter(e=>"afternoon"===w(e)),evening:r.missions.filter(e=>"evening"===w(e))}),[r.missions]),xi=(()=>{const e=Le.getHours();return e<12?"daily.greet.morning":e<18?"daily.greet.afternoon":"daily.greet.evening"})(),ui=(o.interests.length,t("daily.greet.defaultName")),hi=Le.toLocaleTimeString("pt"===i?"pt-PT":"en-US",{hour:"2-digit",minute:"2-digit"}),gi=Le.toLocaleDateString("pt"===i?"pt-PT":"en-US",{weekday:"long",day:"numeric",month:"long"}),wi=0===ci?t("daily.greet.allDone"):t("daily.greet.remaining",{n:ci,total:li});function yi(e){const i=`daily.chapter.${e}`,o=mi[e];if(0===o.length)return null;const n=o.filter(e=>r.completedToday.includes(e.id)).length;return(0,h.jsxs)(ue,{children:[(0,h.jsxs)(he,{children:[(0,h.jsx)(d.YZ,{children:t(i)}),(0,h.jsx)(ge,{children:t("daily.chapter.count",{done:n,total:o.length})})]}),(0,h.jsx)(we,{children:o.map(e=>{const i=r.completedToday.includes(e.id),o=R.has(e.id),n=e.translationKey?t(e.translationKey):e.name??"",s=e.color??l.w4.colors.accent,a=e.frame??"disc";return(0,h.jsxs)($e,{completed:i,flashing:o,isOver:!1,onClick:i=>Qe(e,i.currentTarget),role:"checkbox","aria-checked":i,tabIndex:0,onKeyDown:i=>{" "!==i.key&&"Enter"!==i.key||(i.preventDefault(),Qe(e,i.currentTarget))},children:[(0,h.jsx)($i,{frame:a,emoji:e.emoji,color:s,size:40}),(0,h.jsx)(ze,{completed:i,children:n}),(0,h.jsxs)(Se,{children:[e.time?(0,h.jsx)(Re,{children:e.time}):(0,h.jsx)("span",{}),(0,h.jsxs)(Ce,{completed:i,children:["+",e.points]})]}),i&&(0,h.jsx)(De,{children:"✓"})]},e.id)})})]},e)}return(0,h.jsxs)(l.PE,{title:t("daily.title"),sidebar:null,topBarRight:e,children:[(0,h.jsxs)(B,{children:[(0,h.jsxs)(E,{children:[(0,h.jsxs)(I,{children:[(0,h.jsx)(Y,{children:t(xi,{name:ui})}),(0,h.jsxs)(H,{children:[gi," · ",hi," · ",wi]})]}),(0,h.jsxs)(A,{children:[(0,h.jsxs)(L,{children:["🧭 ",t("daily.chip.level",{n:ni})]}),(0,h.jsxs)(N,{title:t("daily.chip.xpHint"),children:[(0,h.jsx)(U,{children:(0,h.jsx)(O,{pct:T(r.totalPoints)})}),(0,h.jsxs)("span",{children:[r.totalPoints%j,"/",j]})]}),(0,h.jsxs)(L,{children:["⭐ ",t("daily.chip.points",{n:r.totalPoints})]}),(0,h.jsxs)(L,{children:["🔥 ",t(ai>1?"daily.chip.streak":"daily.chip.streakSingle",{n:ai})]}),(0,h.jsxs)(L,{children:["✅ ",t("daily.chip.done",{n:di})]})]})]}),(0,h.jsxs)(Z,{children:[(0,h.jsxs)(_,{centered:!!fi,children:[(0,h.jsx)(q,{children:(0,h.jsx)(d.YZ,{children:t(fi?"daily.focus.nextUp":"daily.focus.dayComplete")})}),fi?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(W,{children:(0,h.jsx)($i,{frame:fi.frame??"disc",emoji:fi.emoji,color:fi.color??l.w4.colors.accent,size:72})}),(0,h.jsx)(J,{children:fi.translationKey?t(fi.translationKey):fi.name??""}),(0,h.jsxs)(X,{children:["+",fi.points," pts"]}),fi.time&&(0,h.jsx)(G,{children:t("daily.focus.timeChip",{time:fi.time})}),(0,h.jsxs)(Q,{children:[(0,h.jsx)(d.$n,{variant:"primary",onClick:e=>{const i=e.target.closest("button");Qe(fi,i)},children:t("daily.focus.markDone")}),(0,h.jsx)(d.$n,{variant:"ghost",onClick:()=>He(e=>[...e,fi.id]),children:t("daily.focus.skip")})]})]}):(0,h.jsxs)(V,{children:[(0,h.jsxs)(ee,{children:[(0,h.jsx)(ie,{children:"🌟"}),(0,h.jsxs)(te,{children:[(0,h.jsx)(oe,{children:t("daily.focus.allDone")}),(0,h.jsx)(ne,{children:t("daily.focus.allDoneBody")})]})]}),(0,h.jsxs)(se,{children:[(0,h.jsxs)(ae,{children:[(0,h.jsxs)(re,{children:["+",pi]}),(0,h.jsx)(le,{children:t("daily.summary.pointsToday")})]}),(0,h.jsxs)(ae,{children:[(0,h.jsx)(re,{children:di}),(0,h.jsx)(le,{children:t("daily.summary.missions")})]}),(0,h.jsxs)(ae,{children:[(0,h.jsx)(re,{children:ai}),(0,h.jsx)(le,{children:t("daily.summary.streak")})]})]})]})]}),(0,h.jsx)(Mi,{completed:di,total:li,t,pulsing:Ee})]}),b?(0,h.jsxs)("div",{children:[(0,h.jsxs)(Fe,{children:[(0,h.jsx)(Be,{children:t("daily.sectionMissions")}),(0,h.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.xs},children:[(0,h.jsx)(d.$n,{variant:"accent",size:"sm",icon:(0,h.jsx)(p.A,{size:13}),onClick:()=>{M(!1),S(!1)},children:t("daily.done")}),(0,h.jsx)(d.K0,{onClick:()=>S(!0),title:t("daily.addMission"),"aria-label":t("daily.addMission"),children:(0,h.jsx)(f.A,{size:13})})]})]}),(0,h.jsx)(ye,{children:r.missions.map(e=>{const i=ve===e.id,o=Te===e.id&&ve!==e.id,n=e.translationKey?t(e.translationKey):e.name??"",s=e.color??l.w4.colors.accent,a=e.frame??"disc";return(0,h.jsxs)(be,{isOver:o,role:"button",tabIndex:0,"aria-label":t("daily.editMission.open"),title:t("daily.editMission.open"),style:{opacity:i?.3:1},onClick:()=>D(e),onKeyDown:i=>{"Enter"!==i.key&&" "!==i.key||(i.preventDefault(),D(e))},onDragOver:i=>{i.preventDefault(),i.dataTransfer.dropEffect="move",ve&&ve!==e.id&&Me(e.id)},onDragLeave:e=>{e.currentTarget===e.target&&Me(null)},onDrop:i=>{i.preventDefault(),ve&&oi(ve,e.id),ke(null),Me(null)},children:[(0,h.jsx)(Pe,{"aria-hidden":!0,draggable:!0,onClick:e=>e.stopPropagation(),onDragStart:i=>{ke(e.id),i.dataTransfer.effectAllowed="move",i.dataTransfer.setData("text/plain",e.id)},onDragEnd:()=>{ke(null),Me(null)},children:(0,h.jsx)(m.A,{size:14})}),(0,h.jsx)($i,{frame:a,emoji:e.emoji,color:s,size:40}),(0,h.jsx)(ze,{completed:!1,children:n}),(0,h.jsxs)(Se,{children:[e.time?(0,h.jsx)(Re,{children:e.time}):(0,h.jsx)("span",{}),(0,h.jsxs)(Ce,{completed:!1,children:["+",e.points]})]}),(0,h.jsx)(Ke,{onClick:i=>{i.stopPropagation(),ei(e.id)},"aria-label":t("daily.delete"),title:t("daily.delete"),children:"×"})]},e.id)})}),(0,h.jsx)("div",{style:{marginTop:l.w4.spacing.sm},children:(0,h.jsx)(d.$n,{variant:"ghost",icon:(0,h.jsx)(f.A,{size:13}),onClick:()=>S(!0),children:t("daily.addMission")})})]}):(0,h.jsxs)(xe,{children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,h.jsx)(d.YZ,{children:t("daily.sectionMissions")}),(0,h.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.xs},children:[(0,h.jsx)(d.$n,{variant:"ghost",size:"sm",icon:(0,h.jsx)(x.A,{size:13}),onClick:()=>M(!0),children:t("daily.edit")}),(0,h.jsx)(d.K0,{onClick:()=>S(!0),title:t("daily.addMission"),"aria-label":t("daily.addMission"),children:(0,h.jsx)(f.A,{size:13})})]})]}),yi("morning"),yi("afternoon"),yi("evening")]}),(0,h.jsx)(zi,{history:ri,total:li,locale:i,t}),(0,h.jsx)(Ne,{children:me?(0,h.jsxs)(Ue,{children:[(0,h.jsx)(Oe,{children:t("daily.resetConfirm")}),(0,h.jsxs)(Ze,{children:[(0,h.jsx)(d.$n,{variant:"danger",onClick:Ve,style:{flex:1},children:t("daily.confirm")}),(0,h.jsx)(d.$n,{variant:"ghost",onClick:()=>je(!1),style:{flex:1},children:t("daily.cancel")})]})]}):(0,h.jsx)(d.$n,{variant:"ghost",onClick:()=>je(!0),children:t("daily.resetDay")})})]}),P.map(e=>(0,h.jsxs)(_e,{style:{left:e.x,top:e.y},children:["+",e.value]},e.id)),de&&(0,h.jsx)(qe,{exiting:pe,children:(0,h.jsxs)(We,{children:[(0,h.jsx)(Je,{children:de.emoji}),(0,h.jsx)(Xe,{children:t("daily.levelUp")}),(0,h.jsx)(Ge,{children:t(de.key)})]})}),(z||C)&&(0,h.jsx)(Ti,{t,mission:C??void 0,onSave:e=>{C?ti(e):ii(e),S(!1),D(null)},onClose:()=>{S(!1),D(null)}})]})}const Ci=document.getElementById("root");if(!Ci)throw new Error("Root element #root not found");(0,o.H)(Ci).render((0,h.jsx)(Si,{}))},8997(e,i,t){var o=t(8991);i.H=o.createRoot,o.hydrateRoot}}]);