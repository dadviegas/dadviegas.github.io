"use strict";(self.webpackChunk_atlantis_daily=self.webpackChunk_atlantis_daily||[]).push([[188],{188(e,t,i){var o=i(8997),s=i(7359),n=i(8991),a=i(3233),r=i(7207),l=i(6879),d=i(5),c=i(894),p=i(5609),f=i(1365),m=i(8320),x=i(536),u=i(8887),h=i(5723);const g=[{id:"brush-teeth",emoji:"🪥",translationKey:"daily.mission.brushTeeth",points:5,frame:"disc",color:l.w4.suites.learn,time:"07:30"},{id:"make-bed",emoji:"🛏️",translationKey:"daily.mission.makeBed",points:10,frame:"ring",color:l.w4.suites.vida,time:"08:00"},{id:"school-bag",emoji:"🎒",translationKey:"daily.mission.schoolBag",points:5,frame:"disc",color:l.w4.colors.accent,time:"08:15"},{id:"set-table",emoji:"🍽️",translationKey:"daily.mission.setTable",points:10,frame:"polaroid",color:l.w4.suites.games,time:"12:30"},{id:"vegetables",emoji:"🥗",translationKey:"daily.mission.vegetables",points:5,frame:"ring",color:l.w4.suites.vida,time:"13:00"},{id:"homework",emoji:"📝",translationKey:"daily.mission.homework",points:15,frame:"hex",color:l.w4.suites.learn,time:"17:00"},{id:"tidy-room",emoji:"🧹",translationKey:"daily.mission.tidyRoom",points:15,frame:"hex",color:l.w4.suites.ent,time:"17:30"},{id:"clothes-away",emoji:"🧤",translationKey:"daily.mission.clothesAway",points:10,frame:"stamp",color:l.w4.suites.ent,time:"18:00"},{id:"draw",emoji:"🎨",translationKey:"daily.mission.draw",points:10,frame:"polaroid",color:l.w4.suites.lab,time:"18:30"},{id:"read",emoji:"📚",translationKey:"daily.mission.read",points:15,frame:"stamp",color:l.w4.suites.lab,time:"19:30"},{id:"be-kind",emoji:"🤗",translationKey:"daily.mission.beKind",points:10,frame:"disc",color:l.w4.suites.games}];function w(e){if(!e.time)return"morning";const[t]=e.time.split(":"),i=parseInt(t,10);return i<12?"morning":i<18?"afternoon":"evening"}function y(){return{totalPoints:0,totalMissionsCompleted:0,completedToday:[],streakDays:[],lastResetDate:(0,l.dR)(),missions:g,history:{}}}const $=["🪥","🧴","🛁","💊","🩺","🧼","🪒","🧘","🥗","🍎","🥕","💧","🍵","🥛","🍳","🥦","🏃","🚴","🧗","🏊","⚽","🏀","🎾","🤸","📚","📝","✏️","🎓","🧠","💡","🔬","🗣️","🛏️","🧹","🧺","🍽️","🧽","🧊","🌱","🪴","🎨","🎭","🎸","🎹","📷","🎬","✂️","🖍️","🤗","❤️","🌈","🎁","💌","🫂","🙏","🌟","🎯","🔥","🏆","⏰","📅","✨","🚀","⭐"],b=[{emoji:"🌱",key:"daily.level.recruit"},{emoji:"🧭",key:"daily.level.explorer"},{emoji:"⚔️",key:"daily.level.adventurer"},{emoji:"🦸",key:"daily.level.hero"},{emoji:"🏆",key:"daily.level.champion"},{emoji:"🌟",key:"daily.level.legend"}];function j(e){return Math.min(Math.floor(e/50),b.length-1)}const v=r.keyframes`
  0%   { opacity: 1; transform: translateY(0) scale(1); }
  80%  { opacity: 1; transform: translateY(-48px) scale(1.15); }
  100% { opacity: 0; transform: translateY(-72px) scale(0.9); }
`,k=r.keyframes`
  0%   { box-shadow: none; }
  30%  { box-shadow: 0 0 0 3px ${l.w4.colors.accent}; }
  100% { box-shadow: none; }
`,T=r.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,z=r.keyframes`
  0%   { transform: scale(0.6); }
  60%  { transform: scale(1.25); }
  100% { transform: scale(1); }
`,M=r.keyframes`
  0%, 100% { filter: drop-shadow(0 0 4px ${l.w4.colors.accent}); }
  50%       { filter: drop-shadow(0 0 12px ${l.w4.colors.accent}); }
`,S=r.keyframes`
  0%   { opacity: 0; transform: scale(0.7); }
  60%  { opacity: 1; transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
`,D=r.keyframes`
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.2); }
`,C=r.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,R=r.keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,K=(r.keyframes`
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
  animation: ${T} 0.3s ease;
  width: 100%;

  @media (min-width: ${l.w4.breakpoints.md}) {
    padding: ${l.w4.spacing.xl};
  }
`),P=a.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${l.w4.spacing.md};
`,B=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,F=a.default.div`
  font-family: ${l.w4.typography.fontFamilySerif};
  font-size: 28px;
  font-weight: 300;
  color: ${l.w4.colors.mainText};
  line-height: 1.2;
  letter-spacing: -0.01em;
`,E=a.default.div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
`,Y=a.default.div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xs};
  flex-wrap: wrap;
  flex-shrink: 0;
`,I=a.default.div`
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
`,A=a.default.div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};

  @media (min-width: ${l.w4.breakpoints.lg}) {
    flex-direction: row;
    align-items: stretch;
  }
`,L=a.default.div`
  flex: 1;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.accent};
  border-radius: ${l.w4.borderRadius.xl};
  padding: ${l.w4.spacing.xl} ${l.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.md};
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
    background: linear-gradient(90deg, transparent, ${l.w4.colors.accent}, transparent);
  }
`,H=a.default.div`
  align-self: flex-start;
`,O=a.default.div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 4px 12px ${l.w4.colors.shadowStrong});
`,U=a.default.div`
  font-size: 22px;
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  text-align: center;
`,N=a.default.div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
`,Z=a.default.div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
`,_=a.default.div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  width: 100%;

  > * { flex: 1; }
`,W=a.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: ${l.w4.spacing.md} 0;
  text-align: center;
`,X=a.default.div`
  font-size: 56px;
  line-height: 1;
`,q=a.default.div`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
`,G=a.default.div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
`,J=a.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${l.w4.spacing.md};

  @media (min-width: ${l.w4.breakpoints.lg}) {
    min-width: 220px;
  }
`,Q=a.default.div`
  position: relative;
  width: 180px;
  height: 180px;
  ${({pulsing:e})=>e?r.css`
          animation: ${M} 0.8s ease;
        `:""}
`,V=a.default.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`,ee=a.default.div`
  font-family: ${l.w4.typography.fontFamilySerif};
  font-size: 36px;
  font-weight: 400;
  color: ${l.w4.colors.mainText};
  line-height: 1;
`,te=a.default.div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${l.w4.colors.mainTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,ie=a.default.div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,oe=a.default.div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,se=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ne=a.default.div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
`,ae=a.default.div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextFaint};
  font-style: italic;
  padding: ${l.w4.spacing.sm} 0;
`,re=a.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
  gap: ${l.w4.spacing.sm};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));
  }
`,le=a.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: ${l.w4.spacing.sm};

  @media (min-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: ${l.w4.spacing.md};
  }
`,de=a.default.div`
  width: 88px;
  height: 96px;
  background: ${({completed:e})=>e?l.w4.colors.accentMuted:l.w4.colors.surface};
  border: 1px solid ${({completed:e,isOver:t})=>t?l.w4.colors.accent:e?l.w4.colors.success:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${l.w4.spacing.sm} 6px 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    border-color ${l.w4.transitions.base},
    background ${l.w4.transitions.base},
    box-shadow ${l.w4.transitions.base},
    transform ${l.w4.transitions.fast};
  ${({flashing:e})=>e?r.css`
          animation: ${k} 0.6s ease forwards;
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
`,ce=a.default.div`
  aspect-ratio: 1 / 1.1;
  background: ${l.w4.colors.surface};
  border: 1px solid ${({isOver:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.sm} ${l.w4.spacing.sm};
  cursor: default;
  position: relative;
  overflow: hidden;
  transition: border-color ${l.w4.transitions.base};
  user-select: none;
`,pe=a.default.div`
  border-radius: 50%;
  background: ${({color:e})=>`${e}28`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid ${({color:e})=>`${e}44`};
`,fe=a.default.div`
  border-radius: 50%;
  background: transparent;
  border: 2.5px solid ${({color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,me=a.default.div`
  border-radius: ${l.w4.borderRadius.md};
  background: ${({color:e})=>`${e}28`};
  border: 2px solid ${({color:e})=>`${e}55`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transform: rotate(8deg);
  box-shadow: 2px 2px 6px ${l.w4.colors.shadow};
`,xe=a.default.div`
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  background: ${({color:e})=>`${e}35`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ue=a.default.div`
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
`,he=a.default.span`
  font-size: 11px;
  color: ${({completed:e})=>e?l.w4.colors.mainTextMuted:l.w4.colors.mainText};
  font-weight: 500;
  text-decoration: ${({completed:e})=>e?"line-through":"none"};
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.3;
  width: 100%;
`,ge=a.default.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`,we=a.default.div`
  font-size: 10px;
  font-weight: 700;
  color: ${({completed:e})=>e?l.w4.colors.success:l.w4.colors.accent};
  background: ${l.w4.colors.accentMuted};
  padding: 2px 6px;
  border-radius: 99px;
  white-space: nowrap;
`,ye=a.default.div`
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
  animation: ${z} 0.35s ease;
`,$e=a.default.button`
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
`,be=a.default.div`
  position: absolute;
  top: 6px;
  left: 6px;
  color: ${l.w4.colors.mainTextMuted};
  cursor: grab;
  line-height: 1;

  &:active { cursor: grabbing; }
`,je=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
  margin-bottom: ${l.w4.spacing.md};
`,ve=a.default.h2`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  margin: 0;
`,ke=a.default.div`
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,Te=a.default.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  align-items: flex-end;
  height: 48px;
`,ze=a.default.div`
  min-height: 2px;
  height: ${({heightPct:e})=>Math.max(100*e,2)}%;
  background: ${({isToday:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: 2px 2px 0 0;
  transition: height 0.4s ease;
`,Me=a.default.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,Se=a.default.div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${({isToday:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,De=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ce=a.default.div`
  display: flex;
  justify-content: flex-end;
`,Re=a.default.div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xs};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  animation: ${T} 0.2s ease;
`,Ke=a.default.div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
`,Pe=a.default.div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,Be=a.default.div`
  position: fixed;
  pointer-events: none;
  font-size: 18px;
  font-weight: 700;
  color: ${l.w4.colors.accent};
  text-shadow: 0 0 8px ${l.w4.colors.accent};
  z-index: 9999;
  animation: ${v} 1.1s ease forwards;
`,Fe=a.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  ${({exiting:e})=>e?r.css`
          animation: ${D} 0.4s ease forwards;
        `:r.css`
          animation: ${S} 0.4s ease forwards;
        `}
`,Ee=a.default.div`
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
`,Ye=a.default.div`
  font-size: 80px;
  line-height: 1;
`,Ie=a.default.div`
  font-size: ${l.w4.typography.fontSizeSm};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${l.w4.colors.accent};
  font-weight: 700;
`,Ae=a.default.div`
  font-size: ${l.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${l.w4.colors.mainText};
`,Le=a.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${l.w4.zIndex.modal};
  padding: ${l.w4.spacing.md};
  animation: ${C} 0.2s ease;
`,He=a.default.div`
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
  animation: ${R} 0.25s ease;
`,Oe=a.default.h2`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  margin: 0;
`,Ue=a.default.div`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  font-weight: 600;
  margin-bottom: ${l.w4.spacing.xs};
`,Ne=a.default.div`
  display: flex;
  gap: ${l.w4.spacing.sm};
`,Ze=a.default.input`
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
`,_e=a.default.input`
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
`,We=a.default.div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,Xe=a.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
  gap: 6px;
  max-height: 180px;
  overflow-y: auto;
  padding: ${l.w4.spacing.sm};
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
`,qe=a.default.button`
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
`,Ge=a.default.button`
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
`,Je=a.default.div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,Qe=a.default.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  border: 3px solid ${({selected:e})=>e?"#fff":"transparent"};
  cursor: pointer;
  padding: 0;
  outline: 2px solid ${({selected:e,color:t})=>e?t:"transparent"};
  outline-offset: 2px;
  transition: outline-color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};

  &:hover {
    outline-color: ${({color:e})=>e};
  }
`,Ve=a.default.div`
  display: flex;
  gap: 4px;
`,et=a.default.button`
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
`,tt=a.default.div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  justify-content: flex-end;
  padding-top: ${l.w4.spacing.xs};
  border-top: 1px solid ${l.w4.colors.borderSubtle};
`,it=a.default.div`
  display: flex;
  justify-content: center;
  padding: ${l.w4.spacing.sm} 0;
`,ot=a.default.div`
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
`,st=a.default.span`
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
`,nt=a.default.div`
  font-size: 10px;
  font-weight: 700;
  color: ${l.w4.colors.accent};
  background: ${l.w4.colors.accentMuted};
  padding: 2px 7px;
  border-radius: 99px;
  align-self: flex-end;
`;function at({frame:e,emoji:t,color:i,size:o=64}){const s={fontSize:Math.round(.44*o)};switch(e){case"ring":return(0,h.jsx)(fe,{color:i,style:{width:o,height:o},children:(0,h.jsx)("span",{style:s,children:t})});case"stamp":return(0,h.jsx)(me,{color:i,style:{width:o-4,height:o-4},children:(0,h.jsx)("span",{style:s,children:t})});case"hex":return(0,h.jsx)(xe,{color:i,style:{width:o,height:o},children:(0,h.jsx)("span",{style:s,children:t})});case"polaroid":return(0,h.jsx)(ue,{color:i,style:{width:o,height:o+4},children:(0,h.jsx)("div",{className:"inner",children:(0,h.jsx)("span",{style:s,children:t})})});default:return(0,h.jsx)(pe,{color:i,style:{width:o,height:o},children:(0,h.jsx)("span",{style:s,children:t})})}}const rt=["disc","ring","stamp","hex","polaroid"];function lt({frame:e}){const t=l.w4.colors.accent;switch(e){case"ring":return(0,h.jsx)(fe,{color:t,style:{width:30,height:30},children:(0,h.jsx)("span",{style:{fontSize:12},children:"✦"})});case"stamp":return(0,h.jsx)(me,{color:t,style:{width:28,height:28},children:(0,h.jsx)("span",{style:{fontSize:12},children:"✦"})});case"hex":return(0,h.jsx)(xe,{color:t,style:{width:30,height:30},children:(0,h.jsx)("span",{style:{fontSize:12},children:"✦"})});case"polaroid":return(0,h.jsx)(ue,{color:t,style:{width:28,height:32},children:(0,h.jsx)("div",{className:"inner",children:(0,h.jsx)("span",{style:{fontSize:10},children:"✦"})})});default:return(0,h.jsx)(pe,{color:t,style:{width:30,height:30},children:(0,h.jsx)("span",{style:{fontSize:12},children:"✦"})})}}const dt=[l.w4.colors.accent,l.w4.colors.success,l.w4.suites.lab,l.w4.suites.vida,l.w4.suites.learn,l.w4.suites.games],ct=[5,10,15,20,25];function pt({t:e,onAdd:t,onClose:i}){const[o,a]=(0,s.useState)(""),[r,c]=(0,s.useState)("🎯"),[p,f]=(0,s.useState)("disc"),[m,x]=(0,s.useState)(l.w4.colors.accent),[u,g]=(0,s.useState)(10),w=(0,s.useRef)(null);(0,s.useEffect)(()=>{w.current?.focus();const e=e=>{"Escape"===e.key&&i()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[i]);const y=()=>{const e=o.trim();e&&t({id:`custom-${Date.now().toString(36)}`,emoji:r||"🎯",name:e,points:u,frame:p,color:m})},b=(0,h.jsx)(Le,{onClick:e=>{e.target===e.currentTarget&&i()},children:(0,h.jsxs)(He,{onClick:e=>e.stopPropagation(),children:[(0,h.jsx)(Oe,{children:e("daily.newMission.title")}),(0,h.jsxs)("div",{children:[(0,h.jsx)(Ue,{children:e("daily.newMission.preview")}),(0,h.jsx)(it,{children:(0,h.jsxs)(ot,{children:[(0,h.jsx)(at,{frame:p,emoji:r||"🎯",color:m,size:52}),(0,h.jsx)(st,{children:o||e("daily.newMission.namePlaceholder")}),(0,h.jsxs)(nt,{children:["+",u," pts"]})]})})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(Ue,{children:e("daily.newMission.name")}),(0,h.jsxs)(Ne,{children:[(0,h.jsx)(_e,{value:r,onChange:e=>c(e.target.value),maxLength:4,"aria-label":e("daily.newMission.emoji")}),(0,h.jsx)(Ze,{ref:w,placeholder:e("daily.newMission.namePlaceholder"),value:o,onChange:e=>a(e.target.value),onKeyDown:e=>{"Enter"===e.key&&o.trim()&&y()}})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(Ue,{children:e("daily.newMission.icon")}),(0,h.jsx)(Xe,{children:$.map(e=>(0,h.jsx)(qe,{type:"button",selected:r===e,onClick:()=>c(e),"aria-label":e,children:e},e))})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(Ue,{children:e("daily.newMission.frame")}),(0,h.jsx)(We,{children:rt.map(e=>(0,h.jsx)(Ge,{type:"button",selected:p===e,onClick:()=>f(e),title:e,children:(0,h.jsx)(lt,{frame:e})},e))})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(Ue,{children:e("daily.newMission.color")}),(0,h.jsx)(Je,{children:dt.map(e=>(0,h.jsx)(Qe,{type:"button",color:e,selected:m===e,onClick:()=>x(e)},e))})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(Ue,{children:e("daily.newMission.points")}),(0,h.jsx)(Ve,{children:ct.map(e=>(0,h.jsx)(et,{type:"button",selected:u===e,onClick:()=>g(e),children:e},e))})]}),(0,h.jsxs)(tt,{children:[(0,h.jsx)(d.$n,{variant:"ghost",size:"sm",onClick:i,children:e("daily.cancel")}),(0,h.jsx)(d.$n,{variant:"primary",size:"sm",disabled:!o.trim(),onClick:y,children:e("daily.newMission.save")})]})]})});return n.createPortal(b,document.body)}function ft({completed:e,total:t,t:i,pulsing:o}){const s=2*Math.PI*76,n=s*(1-(t>0?e/t:0));return(0,h.jsx)(J,{children:(0,h.jsxs)(Q,{pulsing:o,children:[(0,h.jsxs)("svg",{width:180,height:180,viewBox:"0 0 180 180","aria-hidden":!0,children:[(0,h.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:l.w4.colors.border,strokeWidth:14}),(0,h.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:l.w4.colors.accent,strokeWidth:14,strokeDasharray:s,strokeDashoffset:n,strokeLinecap:"round",transform:"rotate(-90 90 90)",style:{transition:"stroke-dashoffset 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"}})]}),(0,h.jsxs)(V,{children:[(0,h.jsxs)(ee,{children:[e,"/",t]}),(0,h.jsx)(te,{children:i("daily.progress.today")})]})]})})}function mt({history:e,total:t,locale:i,t:o}){const s=(0,l.dR)(),n=new Intl.DateTimeFormat("pt"===i?"pt-PT":"en-US",{weekday:"short"}),a=Math.max(...e.map(e=>e.count),1);return(0,h.jsxs)(ke,{children:[(0,h.jsx)(De,{children:(0,h.jsx)(d.YZ,{children:o("daily.sparkline.label")})}),(0,h.jsx)(Te,{children:e.map(e=>{const t=e.count/a;return(0,h.jsx)(ze,{heightPct:t,isToday:e.date===s},e.date)})}),(0,h.jsx)(Me,{children:e.map(e=>{const t=n.format(new Date(e.date+"T00:00:00"));return(0,h.jsx)(Se,{isToday:e.date===s,children:t.slice(0,3)},e.date)})})]})}function xt({topBarRight:e}){const[t]=(0,c.Ym)(),i=(0,s.useMemo)(()=>(0,c.Nx)(t,u.A),[t]),[o]=(0,l.xc)(),[n,a]=(0,s.useState)(!1),[r,$]=(0,s.useState)(y),[v,k]=(0,s.useState)(!1),[T,z]=(0,s.useState)(!1),[M,S]=(0,s.useState)(new Set),[D,C]=(0,s.useState)([]),[R,J]=(0,s.useState)(null),[Q,V]=(0,s.useState)(!1),[ee,te]=(0,s.useState)(!1),[pe,fe]=(0,s.useState)(null),[me,xe]=(0,s.useState)(null),[ue,ke]=(0,s.useState)(!1),[Te,ze]=(0,s.useState)([]),Me=(0,s.useRef)(0),Se=function(){const[e,t]=(0,s.useState)(()=>new Date);return(0,s.useEffect)(()=>{const e=setInterval(()=>t(new Date),6e4);return()=>clearInterval(e)},[6e4]),e}();(0,s.useEffect)(()=>{let e=!1;return(0,l.Fy)().then(t=>{if(e)return;const i=(0,l.dR)();if(t){const e=(t.missions&&t.missions.length>0?t.missions:g).map(e=>function(e){const t=e;return e.translationKey||e.name?e:t.nameEn||t.namePt?{...e,name:t.nameEn??t.namePt}:e}(e)),o={...t.history??{}};!t.history&&t.completedToday.length>0&&(o[t.lastResetDate]=[...t.completedToday]),t.lastResetDate!==i?(t.completedToday.length>0&&(o[t.lastResetDate]=[...t.completedToday]),$({...t,completedToday:o[i]??[],lastResetDate:i,missions:e,history:o})):$({...t,missions:e,history:o,completedToday:o[i]??t.completedToday})}else $(y());a(!0)}),()=>{e=!0}},[]),(0,s.useEffect)(()=>{n&&(0,l.sg)(r)},[r,n]);const De=(0,s.useCallback)((e,t)=>{$(i=>{const o=i.completedToday.includes(e.id),s=(0,l.dR)();if(o){const t=Math.max(0,i.totalPoints-e.points),o=i.completedToday.filter(t=>t!==e.id),n=o.length<3?i.streakDays.filter(e=>e!==s):i.streakDays,a={...i.history,[s]:o};return{...i,totalPoints:t,totalMissionsCompleted:Math.max(0,i.totalMissionsCompleted-1),completedToday:o,streakDays:n,history:a}}const n=i.totalPoints+e.points,a=[...i.completedToday,e.id],r=a.length>=3&&!i.streakDays.includes(s)?[...i.streakDays,s]:i.streakDays,d={...i.history,[s]:a};if(S(t=>new Set(t).add(e.id)),setTimeout(()=>{S(t=>{const i=new Set(t);return i.delete(e.id),i})},600),ke(!0),setTimeout(()=>ke(!1),850),navigator.vibrate?.(50),t){const i=t.getBoundingClientRect(),o=++Me.current;C(t=>[...t,{id:o,value:e.points,x:i.right-60,y:i.top+i.height/2}]),setTimeout(()=>{C(e=>e.filter(e=>e.id!==o))},1200)}ze(t=>t.filter(t=>t!==e.id));const c=j(i.totalPoints),p=j(n);return p>c&&(J(b[p]),V(!1),setTimeout(()=>{V(!0),setTimeout(()=>J(null),450)},2e3)),{...i,totalPoints:n,totalMissionsCompleted:i.totalMissionsCompleted+1,completedToday:a,streakDays:r,history:d}})},[]),Le=(0,s.useCallback)(()=>{$(e=>{const t=(0,l.dR)(),i={...e.history};return delete i[t],{...e,completedToday:[],lastResetDate:t,history:i}}),ze([]),te(!1)},[]),He=(0,s.useCallback)(e=>{$(t=>({...t,missions:t.missions.filter(t=>t.id!==e),completedToday:t.completedToday.filter(t=>t!==e)}))},[]),Oe=(0,s.useCallback)(e=>{$(t=>({...t,missions:[...t.missions,e]}))},[]),Ue=(0,s.useCallback)((e,t)=>{e!==t&&$(i=>{const o=i.missions,s=o.findIndex(t=>t.id===e),n=o.findIndex(e=>e.id===t);if(s<0||n<0)return i;const a=[...o],[r]=a.splice(s,1);return a.splice(n,0,r),{...i,missions:a}})},[]),Ne=(j(r.totalPoints),Ze=r.totalPoints,Math.floor(Ze/50)+1);var Ze;const _e=(0,l.DL)(r.streakDays),We=(0,s.useMemo)(()=>(0,l.yI)(r,7),[r]),Xe=r.completedToday.length,qe=r.missions.length,Ge=qe-Xe,Je=(0,s.useMemo)(()=>{const e=r.missions.filter(e=>!r.completedToday.includes(e.id)&&!Te.includes(e.id));if(0===e.length)return null;const t=function(){const e=(new Date).getHours();return e<12?"morning":e<18?"afternoon":"evening"}(),i=e.filter(e=>w(e)===t);if(i.length>0)return i[0];const o="morning"===t?"afternoon":"evening",s=e.filter(e=>w(e)===o);return s.length>0?s[0]:e[0]},[r.missions,r.completedToday,Te]),Qe=(0,s.useMemo)(()=>({morning:r.missions.filter(e=>"morning"===w(e)),afternoon:r.missions.filter(e=>"afternoon"===w(e)),evening:r.missions.filter(e=>"evening"===w(e))}),[r.missions]),Ve=(()=>{const e=Se.getHours();return e<12?"daily.greet.morning":e<18?"daily.greet.afternoon":"daily.greet.evening"})(),et=(o.interests.length,i("daily.greet.defaultName")),tt=Se.toLocaleTimeString("pt"===t?"pt-PT":"en-US",{hour:"2-digit",minute:"2-digit"}),it=Se.toLocaleDateString("pt"===t?"pt-PT":"en-US",{weekday:"long",day:"numeric",month:"long"}),ot=0===Ge?i("daily.greet.allDone"):i("daily.greet.remaining",{n:Ge,total:qe});function st(e){const t=`daily.chapter.${e}`,o=Qe[e],s=o.filter(e=>r.completedToday.includes(e.id)).length;return(0,h.jsxs)(oe,{children:[(0,h.jsxs)(se,{children:[(0,h.jsx)(d.YZ,{children:i(t)}),(0,h.jsx)(ne,{children:i("daily.chapter.count",{done:s,total:o.length})})]}),0===o.length?(0,h.jsx)(ae,{children:i("daily.chapter.empty")}):(0,h.jsx)(re,{children:o.map(e=>{const t=r.completedToday.includes(e.id),o=M.has(e.id),s=e.translationKey?i(e.translationKey):e.name??"",n=e.color??l.w4.colors.accent,a=e.frame??"disc";return(0,h.jsxs)(de,{completed:t,flashing:o,isOver:!1,onClick:t=>De(e,t.currentTarget),role:"checkbox","aria-checked":t,tabIndex:0,onKeyDown:t=>{" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),De(e,t.currentTarget))},children:[(0,h.jsx)(at,{frame:a,emoji:e.emoji,color:n,size:40}),(0,h.jsx)(he,{completed:t,children:s}),(0,h.jsx)(ge,{children:(0,h.jsxs)(we,{completed:t,children:["+",e.points]})}),t&&(0,h.jsx)(ye,{children:"✓"})]},e.id)})})]},e)}return(0,h.jsxs)(l.PE,{title:i("daily.title"),sidebar:null,topBarRight:e,children:[(0,h.jsxs)(K,{children:[(0,h.jsxs)(P,{children:[(0,h.jsxs)(B,{children:[(0,h.jsx)(F,{children:i(Ve,{name:et})}),(0,h.jsxs)(E,{children:[it," · ",tt," · ",ot]})]}),(0,h.jsxs)(Y,{children:[(0,h.jsxs)(I,{children:["🧭 ",i("daily.chip.level",{n:Ne})]}),(0,h.jsxs)(I,{children:["⭐ ",i("daily.chip.points",{n:r.totalPoints})]}),(0,h.jsxs)(I,{children:["🔥 ",i(_e>1?"daily.chip.streak":"daily.chip.streakSingle",{n:_e})]}),(0,h.jsxs)(I,{children:["✅ ",i("daily.chip.done",{n:Xe})]})]})]}),(0,h.jsxs)(A,{children:[(0,h.jsxs)(L,{children:[(0,h.jsx)(H,{children:(0,h.jsx)(d.YZ,{children:i("daily.focus.nextUp")})}),Je?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(O,{children:(0,h.jsx)(at,{frame:Je.frame??"disc",emoji:Je.emoji,color:Je.color??l.w4.colors.accent,size:72})}),(0,h.jsx)(U,{children:Je.translationKey?i(Je.translationKey):Je.name??""}),(0,h.jsxs)(N,{children:["+",Je.points," pts"]}),Je.time&&(0,h.jsx)(Z,{children:i("daily.focus.timeChip",{time:Je.time})}),(0,h.jsxs)(_,{children:[(0,h.jsx)(d.$n,{variant:"primary",onClick:e=>{const t=e.target.closest("button");De(Je,t)},children:i("daily.focus.markDone")}),(0,h.jsx)(d.$n,{variant:"ghost",onClick:()=>ze(e=>[...e,Je.id]),children:i("daily.focus.skip")})]})]}):(0,h.jsxs)(W,{children:[(0,h.jsx)(X,{children:"🌟"}),(0,h.jsx)(q,{children:i("daily.focus.allDone")}),(0,h.jsx)(G,{children:i("daily.focus.allDoneBody")})]})]}),(0,h.jsx)(ft,{completed:Xe,total:qe,t:i,pulsing:ue})]}),v?(0,h.jsxs)("div",{children:[(0,h.jsxs)(je,{children:[(0,h.jsx)(ve,{children:i("daily.sectionMissions")}),(0,h.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.xs},children:[(0,h.jsx)(d.$n,{variant:"accent",size:"sm",icon:(0,h.jsx)(p.A,{size:13}),onClick:()=>{k(!1),z(!1)},children:i("daily.done")}),(0,h.jsx)(d.K0,{onClick:()=>z(!0),title:i("daily.addMission"),"aria-label":i("daily.addMission"),children:(0,h.jsx)(f.A,{size:13})})]})]}),(0,h.jsx)(le,{children:r.missions.map(e=>{const t=pe===e.id,o=me===e.id&&pe!==e.id,s=e.translationKey?i(e.translationKey):e.name??"",n=e.color??l.w4.colors.accent,a=e.frame??"disc";return(0,h.jsxs)(ce,{isOver:o,draggable:!0,style:{opacity:t?.3:1},onDragStart:t=>{fe(e.id),t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",e.id)},onDragOver:t=>{t.preventDefault(),t.dataTransfer.dropEffect="move",pe&&pe!==e.id&&xe(e.id)},onDragLeave:e=>{e.currentTarget===e.target&&xe(null)},onDrop:t=>{t.preventDefault(),pe&&Ue(pe,e.id),fe(null),xe(null)},onDragEnd:()=>{fe(null),xe(null)},children:[(0,h.jsx)(be,{"aria-hidden":!0,children:(0,h.jsx)(m.A,{size:14})}),(0,h.jsx)(at,{frame:a,emoji:e.emoji,color:n,size:52}),(0,h.jsx)(he,{completed:!1,children:s}),(0,h.jsx)(ge,{children:(0,h.jsxs)(we,{completed:!1,children:["+",e.points," pts"]})}),(0,h.jsx)($e,{onClick:t=>{t.stopPropagation(),He(e.id)},"aria-label":i("daily.delete"),title:i("daily.delete"),children:"×"})]},e.id)})}),(0,h.jsx)("div",{style:{marginTop:l.w4.spacing.sm},children:(0,h.jsx)(d.$n,{variant:"ghost",icon:(0,h.jsx)(f.A,{size:13}),onClick:()=>z(!0),children:i("daily.addMission")})})]}):(0,h.jsxs)(ie,{children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,h.jsx)(d.YZ,{children:i("daily.sectionMissions")}),(0,h.jsxs)("div",{style:{display:"flex",gap:l.w4.spacing.xs},children:[(0,h.jsx)(d.$n,{variant:"ghost",size:"sm",icon:(0,h.jsx)(x.A,{size:13}),onClick:()=>k(!0),children:i("daily.edit")}),(0,h.jsx)(d.K0,{onClick:()=>z(!0),title:i("daily.addMission"),"aria-label":i("daily.addMission"),children:(0,h.jsx)(f.A,{size:13})})]})]}),st("morning"),st("afternoon"),st("evening")]}),(0,h.jsx)(mt,{history:We,total:qe,locale:t,t:i}),(0,h.jsx)(Ce,{children:ee?(0,h.jsxs)(Re,{children:[(0,h.jsx)(Ke,{children:i("daily.resetConfirm")}),(0,h.jsxs)(Pe,{children:[(0,h.jsx)(d.$n,{variant:"danger",onClick:Le,style:{flex:1},children:i("daily.confirm")}),(0,h.jsx)(d.$n,{variant:"ghost",onClick:()=>te(!1),style:{flex:1},children:i("daily.cancel")})]})]}):(0,h.jsx)(d.$n,{variant:"ghost",onClick:()=>te(!0),children:i("daily.resetDay")})})]}),D.map(e=>(0,h.jsxs)(Be,{style:{left:e.x,top:e.y},children:["+",e.value]},e.id)),R&&(0,h.jsx)(Fe,{exiting:Q,children:(0,h.jsxs)(Ee,{children:[(0,h.jsx)(Ye,{children:R.emoji}),(0,h.jsx)(Ie,{children:i("daily.levelUp")}),(0,h.jsx)(Ae,{children:i(R.key)})]})}),T&&(0,h.jsx)(pt,{t:i,onAdd:e=>{Oe(e),z(!1)},onClose:()=>z(!1)})]})}const ut=document.getElementById("root");if(!ut)throw new Error("Root element #root not found");(0,o.H)(ut).render((0,h.jsx)(xt,{}))},8997(e,t,i){var o=i(8991);t.H=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=188.4d8923a8b59ab744e424.js.map