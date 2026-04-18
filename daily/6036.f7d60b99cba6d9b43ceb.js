"use strict";(self.webpackChunk_atlantis_daily=self.webpackChunk_atlantis_daily||[]).push([[6036],{6036(e,t,i){i.r(t),i.d(t,{default:()=>mt});var o=i(7359),s=i(8991),n=i(3233),a=i(7207),r=i(6879),l=i(5),d=i(894),c=i(5609),p=i(8320),f=i(536),m=i(1365),x=i(8887),u=i(5723);const h=[{id:"brush-teeth",emoji:"🪥",translationKey:"daily.mission.brushTeeth",points:5,frame:"disc",color:r.w4.suites.learn,time:"07:30"},{id:"make-bed",emoji:"🛏️",translationKey:"daily.mission.makeBed",points:10,frame:"ring",color:r.w4.suites.vida,time:"08:00"},{id:"school-bag",emoji:"🎒",translationKey:"daily.mission.schoolBag",points:5,frame:"disc",color:r.w4.colors.accent,time:"08:15"},{id:"set-table",emoji:"🍽️",translationKey:"daily.mission.setTable",points:10,frame:"polaroid",color:r.w4.suites.games,time:"12:30"},{id:"vegetables",emoji:"🥗",translationKey:"daily.mission.vegetables",points:5,frame:"ring",color:r.w4.suites.vida,time:"13:00"},{id:"homework",emoji:"📝",translationKey:"daily.mission.homework",points:15,frame:"hex",color:r.w4.suites.learn,time:"17:00"},{id:"tidy-room",emoji:"🧹",translationKey:"daily.mission.tidyRoom",points:15,frame:"hex",color:r.w4.suites.ent,time:"17:30"},{id:"clothes-away",emoji:"🧤",translationKey:"daily.mission.clothesAway",points:10,frame:"stamp",color:r.w4.suites.ent,time:"18:00"},{id:"draw",emoji:"🎨",translationKey:"daily.mission.draw",points:10,frame:"polaroid",color:r.w4.suites.lab,time:"18:30"},{id:"read",emoji:"📚",translationKey:"daily.mission.read",points:15,frame:"stamp",color:r.w4.suites.lab,time:"19:30"},{id:"be-kind",emoji:"🤗",translationKey:"daily.mission.beKind",points:10,frame:"disc",color:r.w4.suites.games}];function g(e){if(!e.time)return"morning";const[t]=e.time.split(":"),i=parseInt(t,10);return i<12?"morning":i<18?"afternoon":"evening"}function w(){return{totalPoints:0,totalMissionsCompleted:0,completedToday:[],streakDays:[],lastResetDate:(0,r.dR)(),missions:h,history:{}}}const y=["🪥","🧴","🛁","💊","🩺","🧼","🪒","🧘","🥗","🍎","🥕","💧","🍵","🥛","🍳","🥦","🏃","🚴","🧗","🏊","⚽","🏀","🎾","🤸","📚","📝","✏️","🎓","🧠","💡","🔬","🗣️","🛏️","🧹","🧺","🍽️","🧽","🧊","🌱","🪴","🎨","🎭","🎸","🎹","📷","🎬","✂️","🖍️","🤗","❤️","🌈","🎁","💌","🫂","🙏","🌟","🎯","🔥","🏆","⏰","📅","✨","🚀","⭐"],$=[{emoji:"🌱",key:"daily.level.recruit"},{emoji:"🧭",key:"daily.level.explorer"},{emoji:"⚔️",key:"daily.level.adventurer"},{emoji:"🦸",key:"daily.level.hero"},{emoji:"🏆",key:"daily.level.champion"},{emoji:"🌟",key:"daily.level.legend"}];function b(e){return Math.min(Math.floor(e/50),$.length-1)}const j=a.keyframes`
  0%   { opacity: 1; transform: translateY(0) scale(1); }
  80%  { opacity: 1; transform: translateY(-48px) scale(1.15); }
  100% { opacity: 0; transform: translateY(-72px) scale(0.9); }
`,v=a.keyframes`
  0%   { box-shadow: none; }
  30%  { box-shadow: 0 0 0 3px ${r.w4.colors.accent}; }
  100% { box-shadow: none; }
`,k=a.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,T=a.keyframes`
  0%   { transform: scale(0.6); }
  60%  { transform: scale(1.25); }
  100% { transform: scale(1); }
`,z=a.keyframes`
  0%, 100% { filter: drop-shadow(0 0 4px ${r.w4.colors.accent}); }
  50%       { filter: drop-shadow(0 0 12px ${r.w4.colors.accent}); }
`,M=a.keyframes`
  0%   { opacity: 0; transform: scale(0.7); }
  60%  { opacity: 1; transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
`,S=a.keyframes`
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.2); }
`,D=a.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,C=a.keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,R=(a.keyframes`
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
  animation: ${k} 0.3s ease;
  width: 100%;

  @media (min-width: ${r.w4.breakpoints.md}) {
    padding: ${r.w4.spacing.xl};
  }
`),K=n.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${r.w4.spacing.md};
`,P=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,F=n.default.div`
  font-family: ${r.w4.typography.fontFamilySerif};
  font-size: 28px;
  font-weight: 300;
  color: ${r.w4.colors.mainText};
  line-height: 1.2;
  letter-spacing: -0.01em;
`,B=n.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
`,E=n.default.div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.xs};
  flex-wrap: wrap;
  flex-shrink: 0;
`,Y=n.default.div`
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
`,A=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.lg};

  @media (min-width: ${r.w4.breakpoints.lg}) {
    flex-direction: row;
    align-items: stretch;
  }
`,I=n.default.div`
  flex: 1;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.accent};
  border-radius: ${r.w4.borderRadius.xl};
  padding: ${r.w4.spacing.xl} ${r.w4.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${r.w4.spacing.md};
  position: relative;
  overflow: hidden;
  animation: ${k} 0.35s ease;

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
`,L=n.default.div`
  align-self: flex-start;
`,H=n.default.div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 4px 12px ${r.w4.colors.shadowStrong});
`,O=n.default.div`
  font-size: 22px;
  font-weight: 600;
  color: ${r.w4.colors.mainText};
  text-align: center;
`,U=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
`,N=n.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: 99px;
  padding: 3px 10px;
`,Z=n.default.div`
  display: flex;
  gap: ${r.w4.spacing.sm};
  width: 100%;

  > * { flex: 1; }
`,_=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  padding: ${r.w4.spacing.md} 0;
  text-align: center;
`,W=n.default.div`
  font-size: 56px;
  line-height: 1;
`,X=n.default.div`
  font-size: ${r.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${r.w4.colors.mainText};
`,q=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
`,G=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${r.w4.spacing.md};

  @media (min-width: ${r.w4.breakpoints.lg}) {
    min-width: 220px;
  }
`,J=n.default.div`
  position: relative;
  width: 180px;
  height: 180px;
  ${({pulsing:e})=>e?a.css`
          animation: ${z} 0.8s ease;
        `:""}
`,Q=n.default.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`,V=n.default.div`
  font-family: ${r.w4.typography.fontFamilySerif};
  font-size: 36px;
  font-weight: 400;
  color: ${r.w4.colors.mainText};
  line-height: 1;
`,ee=n.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${r.w4.colors.mainTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,te=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.md};
`,ie=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.sm};
`,oe=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,se=n.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
`,ne=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextFaint};
  font-style: italic;
  padding: ${r.w4.spacing.sm} 0;
`,ae=n.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
  gap: ${r.w4.spacing.sm};

  @media (min-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));
  }
`,re=n.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: ${r.w4.spacing.sm};

  @media (min-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: ${r.w4.spacing.md};
  }
`,le=n.default.div`
  width: 88px;
  height: 96px;
  background: ${({completed:e})=>e?r.w4.colors.accentMuted:r.w4.colors.surface};
  border: 1px solid ${({completed:e,isOver:t})=>t?r.w4.colors.accent:e?r.w4.colors.success:r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${r.w4.spacing.sm} 6px 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    border-color ${r.w4.transitions.base},
    background ${r.w4.transitions.base},
    box-shadow ${r.w4.transitions.base},
    transform ${r.w4.transitions.fast};
  ${({flashing:e})=>e?a.css`
          animation: ${v} 0.6s ease forwards;
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
`,de=n.default.div`
  aspect-ratio: 1 / 1.1;
  background: ${r.w4.colors.surface};
  border: 1px solid ${({isOver:e})=>e?r.w4.colors.accent:r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${r.w4.spacing.md} ${r.w4.spacing.sm} ${r.w4.spacing.sm};
  cursor: default;
  position: relative;
  overflow: hidden;
  transition: border-color ${r.w4.transitions.base};
  user-select: none;
`,ce=n.default.div`
  border-radius: 50%;
  background: ${({color:e})=>`${e}28`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid ${({color:e})=>`${e}44`};
`,pe=n.default.div`
  border-radius: 50%;
  background: transparent;
  border: 2.5px solid ${({color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,fe=n.default.div`
  border-radius: ${r.w4.borderRadius.md};
  background: ${({color:e})=>`${e}28`};
  border: 2px solid ${({color:e})=>`${e}55`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transform: rotate(8deg);
  box-shadow: 2px 2px 6px ${r.w4.colors.shadow};
`,me=n.default.div`
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  background: ${({color:e})=>`${e}35`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,xe=n.default.div`
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
`,ue=n.default.span`
  font-size: 11px;
  color: ${({completed:e})=>e?r.w4.colors.mainTextMuted:r.w4.colors.mainText};
  font-weight: 500;
  text-decoration: ${({completed:e})=>e?"line-through":"none"};
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.3;
  width: 100%;
`,he=n.default.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`,ge=n.default.div`
  font-size: 10px;
  font-weight: 700;
  color: ${({completed:e})=>e?r.w4.colors.success:r.w4.colors.accent};
  background: ${r.w4.colors.accentMuted};
  padding: 2px 6px;
  border-radius: 99px;
  white-space: nowrap;
`,we=n.default.div`
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
  animation: ${T} 0.35s ease;
`,ye=n.default.button`
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
`,$e=n.default.div`
  position: absolute;
  top: 6px;
  left: 6px;
  color: ${r.w4.colors.mainTextMuted};
  cursor: grab;
  line-height: 1;

  &:active { cursor: grabbing; }
`,be=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${r.w4.spacing.sm};
  margin-bottom: ${r.w4.spacing.md};
`,je=n.default.h2`
  font-size: ${r.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${r.w4.colors.mainText};
  margin: 0;
`,ve=n.default.div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: ${r.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.sm};
`,ke=n.default.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  align-items: flex-end;
  height: 48px;
`,Te=n.default.div`
  min-height: 2px;
  height: ${({heightPct:e})=>Math.max(100*e,2)}%;
  background: ${({isToday:e})=>e?r.w4.colors.accent:r.w4.colors.border};
  border-radius: 2px 2px 0 0;
  transition: height 0.4s ease;
`,ze=n.default.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,Me=n.default.div`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${({isToday:e})=>e?r.w4.colors.accent:r.w4.colors.mainTextMuted};
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,Se=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,De=n.default.div`
  display: flex;
  justify-content: flex-end;
`,Ce=n.default.div`
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.xs};
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: ${r.w4.spacing.md};
  animation: ${k} 0.2s ease;
`,Re=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  text-align: center;
`,Ke=n.default.div`
  display: flex;
  gap: ${r.w4.spacing.sm};
`,Pe=n.default.div`
  position: fixed;
  pointer-events: none;
  font-size: 18px;
  font-weight: 700;
  color: ${r.w4.colors.accent};
  text-shadow: 0 0 8px ${r.w4.colors.accent};
  z-index: 9999;
  animation: ${j} 1.1s ease forwards;
`,Fe=n.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  ${({exiting:e})=>e?a.css`
          animation: ${S} 0.4s ease forwards;
        `:a.css`
          animation: ${M} 0.4s ease forwards;
        `}
`,Be=n.default.div`
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
`,Ee=n.default.div`
  font-size: 80px;
  line-height: 1;
`,Ye=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${r.w4.colors.accent};
  font-weight: 700;
`,Ae=n.default.div`
  font-size: ${r.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${r.w4.colors.mainText};
`,Ie=n.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${r.w4.zIndex.modal};
  padding: ${r.w4.spacing.md};
  animation: ${D} 0.2s ease;
`,Le=n.default.div`
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
  animation: ${C} 0.25s ease;
`,He=n.default.h2`
  font-size: ${r.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${r.w4.colors.mainText};
  margin: 0;
`,Oe=n.default.div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  font-weight: 600;
  margin-bottom: ${r.w4.spacing.xs};
`,Ue=n.default.div`
  display: flex;
  gap: ${r.w4.spacing.sm};
`,Ne=n.default.input`
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
`,Ze=n.default.input`
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
`,_e=n.default.div`
  display: flex;
  gap: ${r.w4.spacing.sm};
  flex-wrap: wrap;
`,We=n.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
  gap: 6px;
  max-height: 180px;
  overflow-y: auto;
  padding: ${r.w4.spacing.sm};
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
`,Xe=n.default.button`
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
`,qe=n.default.button`
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
`,Ge=n.default.div`
  display: flex;
  gap: ${r.w4.spacing.sm};
  flex-wrap: wrap;
`,Je=n.default.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  border: 3px solid ${({selected:e})=>e?"#fff":"transparent"};
  cursor: pointer;
  padding: 0;
  outline: 2px solid ${({selected:e,color:t})=>e?t:"transparent"};
  outline-offset: 2px;
  transition: outline-color ${r.w4.transitions.fast}, border-color ${r.w4.transitions.fast};

  &:hover {
    outline-color: ${({color:e})=>e};
  }
`,Qe=n.default.div`
  display: flex;
  gap: 4px;
`,Ve=n.default.button`
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
`,et=n.default.div`
  display: flex;
  gap: ${r.w4.spacing.sm};
  justify-content: flex-end;
  padding-top: ${r.w4.spacing.xs};
  border-top: 1px solid ${r.w4.colors.borderSubtle};
`,tt=n.default.div`
  display: flex;
  justify-content: center;
  padding: ${r.w4.spacing.sm} 0;
`,it=n.default.div`
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
`,ot=n.default.span`
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
`,st=n.default.div`
  font-size: 10px;
  font-weight: 700;
  color: ${r.w4.colors.accent};
  background: ${r.w4.colors.accentMuted};
  padding: 2px 7px;
  border-radius: 99px;
  align-self: flex-end;
`;function nt({frame:e,emoji:t,color:i,size:o=64}){const s={fontSize:Math.round(.44*o)};switch(e){case"ring":return(0,u.jsx)(pe,{color:i,style:{width:o,height:o},children:(0,u.jsx)("span",{style:s,children:t})});case"stamp":return(0,u.jsx)(fe,{color:i,style:{width:o-4,height:o-4},children:(0,u.jsx)("span",{style:s,children:t})});case"hex":return(0,u.jsx)(me,{color:i,style:{width:o,height:o},children:(0,u.jsx)("span",{style:s,children:t})});case"polaroid":return(0,u.jsx)(xe,{color:i,style:{width:o,height:o+4},children:(0,u.jsx)("div",{className:"inner",children:(0,u.jsx)("span",{style:s,children:t})})});default:return(0,u.jsx)(ce,{color:i,style:{width:o,height:o},children:(0,u.jsx)("span",{style:s,children:t})})}}const at=["disc","ring","stamp","hex","polaroid"];function rt({frame:e}){const t=r.w4.colors.accent;switch(e){case"ring":return(0,u.jsx)(pe,{color:t,style:{width:30,height:30},children:(0,u.jsx)("span",{style:{fontSize:12},children:"✦"})});case"stamp":return(0,u.jsx)(fe,{color:t,style:{width:28,height:28},children:(0,u.jsx)("span",{style:{fontSize:12},children:"✦"})});case"hex":return(0,u.jsx)(me,{color:t,style:{width:30,height:30},children:(0,u.jsx)("span",{style:{fontSize:12},children:"✦"})});case"polaroid":return(0,u.jsx)(xe,{color:t,style:{width:28,height:32},children:(0,u.jsx)("div",{className:"inner",children:(0,u.jsx)("span",{style:{fontSize:10},children:"✦"})})});default:return(0,u.jsx)(ce,{color:t,style:{width:30,height:30},children:(0,u.jsx)("span",{style:{fontSize:12},children:"✦"})})}}const lt=[r.w4.colors.accent,r.w4.colors.success,r.w4.suites.lab,r.w4.suites.vida,r.w4.suites.learn,r.w4.suites.games],dt=[5,10,15,20,25];function ct({t:e,onAdd:t,onClose:i}){const[n,a]=(0,o.useState)(""),[d,c]=(0,o.useState)("🎯"),[p,f]=(0,o.useState)("disc"),[m,x]=(0,o.useState)(r.w4.colors.accent),[h,g]=(0,o.useState)(10),w=(0,o.useRef)(null);(0,o.useEffect)(()=>{w.current?.focus();const e=e=>{"Escape"===e.key&&i()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[i]);const $=()=>{const e=n.trim();e&&t({id:`custom-${Date.now().toString(36)}`,emoji:d||"🎯",name:e,points:h,frame:p,color:m})},b=(0,u.jsx)(Ie,{onClick:e=>{e.target===e.currentTarget&&i()},children:(0,u.jsxs)(Le,{onClick:e=>e.stopPropagation(),children:[(0,u.jsx)(He,{children:e("daily.newMission.title")}),(0,u.jsxs)("div",{children:[(0,u.jsx)(Oe,{children:e("daily.newMission.preview")}),(0,u.jsx)(tt,{children:(0,u.jsxs)(it,{children:[(0,u.jsx)(nt,{frame:p,emoji:d||"🎯",color:m,size:52}),(0,u.jsx)(ot,{children:n||e("daily.newMission.namePlaceholder")}),(0,u.jsxs)(st,{children:["+",h," pts"]})]})})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(Oe,{children:e("daily.newMission.name")}),(0,u.jsxs)(Ue,{children:[(0,u.jsx)(Ze,{value:d,onChange:e=>c(e.target.value),maxLength:4,"aria-label":e("daily.newMission.emoji")}),(0,u.jsx)(Ne,{ref:w,placeholder:e("daily.newMission.namePlaceholder"),value:n,onChange:e=>a(e.target.value),onKeyDown:e=>{"Enter"===e.key&&n.trim()&&$()}})]})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(Oe,{children:e("daily.newMission.icon")}),(0,u.jsx)(We,{children:y.map(e=>(0,u.jsx)(Xe,{type:"button",selected:d===e,onClick:()=>c(e),"aria-label":e,children:e},e))})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(Oe,{children:e("daily.newMission.frame")}),(0,u.jsx)(_e,{children:at.map(e=>(0,u.jsx)(qe,{type:"button",selected:p===e,onClick:()=>f(e),title:e,children:(0,u.jsx)(rt,{frame:e})},e))})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(Oe,{children:e("daily.newMission.color")}),(0,u.jsx)(Ge,{children:lt.map(e=>(0,u.jsx)(Je,{type:"button",color:e,selected:m===e,onClick:()=>x(e)},e))})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(Oe,{children:e("daily.newMission.points")}),(0,u.jsx)(Qe,{children:dt.map(e=>(0,u.jsx)(Ve,{type:"button",selected:h===e,onClick:()=>g(e),children:e},e))})]}),(0,u.jsxs)(et,{children:[(0,u.jsx)(l.$n,{variant:"ghost",size:"sm",onClick:i,children:e("daily.cancel")}),(0,u.jsx)(l.$n,{variant:"primary",size:"sm",disabled:!n.trim(),onClick:$,children:e("daily.newMission.save")})]})]})});return s.createPortal(b,document.body)}function pt({completed:e,total:t,t:i,pulsing:o}){const s=2*Math.PI*76,n=s*(1-(t>0?e/t:0));return(0,u.jsx)(G,{children:(0,u.jsxs)(J,{pulsing:o,children:[(0,u.jsxs)("svg",{width:180,height:180,viewBox:"0 0 180 180","aria-hidden":!0,children:[(0,u.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:r.w4.colors.border,strokeWidth:14}),(0,u.jsx)("circle",{cx:90,cy:90,r:76,fill:"none",stroke:r.w4.colors.accent,strokeWidth:14,strokeDasharray:s,strokeDashoffset:n,strokeLinecap:"round",transform:"rotate(-90 90 90)",style:{transition:"stroke-dashoffset 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"}})]}),(0,u.jsxs)(Q,{children:[(0,u.jsxs)(V,{children:[e,"/",t]}),(0,u.jsx)(ee,{children:i("daily.progress.today")})]})]})})}function ft({history:e,total:t,locale:i,t:o}){const s=(0,r.dR)(),n=new Intl.DateTimeFormat("pt"===i?"pt-PT":"en-US",{weekday:"short"}),a=Math.max(...e.map(e=>e.count),1);return(0,u.jsxs)(ve,{children:[(0,u.jsx)(Se,{children:(0,u.jsx)(l.YZ,{children:o("daily.sparkline.label")})}),(0,u.jsx)(ke,{children:e.map(e=>{const t=e.count/a;return(0,u.jsx)(Te,{heightPct:t,isToday:e.date===s},e.date)})}),(0,u.jsx)(ze,{children:e.map(e=>{const t=n.format(new Date(e.date+"T00:00:00"));return(0,u.jsx)(Me,{isToday:e.date===s,children:t.slice(0,3)},e.date)})})]})}function mt({topBarRight:e}){const[t]=(0,d.Ym)(),i=(0,o.useMemo)(()=>(0,d.Nx)(t,x.A),[t]),[s]=(0,r.xc)(),[n,a]=(0,o.useState)(!1),[y,j]=(0,o.useState)(w),[v,k]=(0,o.useState)(!1),[T,z]=(0,o.useState)(!1),[M,S]=(0,o.useState)(new Set),[D,C]=(0,o.useState)([]),[G,J]=(0,o.useState)(null),[Q,V]=(0,o.useState)(!1),[ee,ce]=(0,o.useState)(!1),[pe,fe]=(0,o.useState)(null),[me,xe]=(0,o.useState)(null),[ve,ke]=(0,o.useState)(!1),[Te,ze]=(0,o.useState)([]),Me=(0,o.useRef)(0),Se=function(){const[e,t]=(0,o.useState)(()=>new Date);return(0,o.useEffect)(()=>{const e=setInterval(()=>t(new Date),6e4);return()=>clearInterval(e)},[6e4]),e}();(0,o.useEffect)(()=>{let e=!1;return(0,r.Fy)().then(t=>{if(e)return;const i=(0,r.dR)();if(t){const e=(t.missions&&t.missions.length>0?t.missions:h).map(e=>function(e){const t=e;return e.translationKey||e.name?e:t.nameEn||t.namePt?{...e,name:t.nameEn??t.namePt}:e}(e)),o={...t.history??{}};!t.history&&t.completedToday.length>0&&(o[t.lastResetDate]=[...t.completedToday]),t.lastResetDate!==i?(t.completedToday.length>0&&(o[t.lastResetDate]=[...t.completedToday]),j({...t,completedToday:o[i]??[],lastResetDate:i,missions:e,history:o})):j({...t,missions:e,history:o,completedToday:o[i]??t.completedToday})}else j(w());a(!0)}),()=>{e=!0}},[]),(0,o.useEffect)(()=>{n&&(0,r.sg)(y)},[y,n]);const Ie=(0,o.useCallback)((e,t)=>{j(i=>{const o=i.completedToday.includes(e.id),s=(0,r.dR)();if(o){const t=Math.max(0,i.totalPoints-e.points),o=i.completedToday.filter(t=>t!==e.id),n=o.length<3?i.streakDays.filter(e=>e!==s):i.streakDays,a={...i.history,[s]:o};return{...i,totalPoints:t,totalMissionsCompleted:Math.max(0,i.totalMissionsCompleted-1),completedToday:o,streakDays:n,history:a}}const n=i.totalPoints+e.points,a=[...i.completedToday,e.id],l=a.length>=3&&!i.streakDays.includes(s)?[...i.streakDays,s]:i.streakDays,d={...i.history,[s]:a};if(S(t=>new Set(t).add(e.id)),setTimeout(()=>{S(t=>{const i=new Set(t);return i.delete(e.id),i})},600),ke(!0),setTimeout(()=>ke(!1),850),navigator.vibrate?.(50),t){const i=t.getBoundingClientRect(),o=++Me.current;C(t=>[...t,{id:o,value:e.points,x:i.right-60,y:i.top+i.height/2}]),setTimeout(()=>{C(e=>e.filter(e=>e.id!==o))},1200)}ze(t=>t.filter(t=>t!==e.id));const c=b(i.totalPoints),p=b(n);return p>c&&(J($[p]),V(!1),setTimeout(()=>{V(!0),setTimeout(()=>J(null),450)},2e3)),{...i,totalPoints:n,totalMissionsCompleted:i.totalMissionsCompleted+1,completedToday:a,streakDays:l,history:d}})},[]),Le=(0,o.useCallback)(()=>{j(e=>{const t=(0,r.dR)(),i={...e.history};return delete i[t],{...e,completedToday:[],lastResetDate:t,history:i}}),ze([]),ce(!1)},[]),He=(0,o.useCallback)(e=>{j(t=>({...t,missions:t.missions.filter(t=>t.id!==e),completedToday:t.completedToday.filter(t=>t!==e)}))},[]),Oe=(0,o.useCallback)(e=>{j(t=>({...t,missions:[...t.missions,e]}))},[]),Ue=(0,o.useCallback)((e,t)=>{e!==t&&j(i=>{const o=i.missions,s=o.findIndex(t=>t.id===e),n=o.findIndex(e=>e.id===t);if(s<0||n<0)return i;const a=[...o],[r]=a.splice(s,1);return a.splice(n,0,r),{...i,missions:a}})},[]),Ne=(b(y.totalPoints),Ze=y.totalPoints,Math.floor(Ze/50)+1);var Ze;const _e=(0,r.DL)(y.streakDays),We=(0,o.useMemo)(()=>(0,r.yI)(y,7),[y]),Xe=y.completedToday.length,qe=y.missions.length,Ge=qe-Xe,Je=(0,o.useMemo)(()=>{const e=y.missions.filter(e=>!y.completedToday.includes(e.id)&&!Te.includes(e.id));if(0===e.length)return null;const t=function(){const e=(new Date).getHours();return e<12?"morning":e<18?"afternoon":"evening"}(),i=e.filter(e=>g(e)===t);if(i.length>0)return i[0];const o="morning"===t?"afternoon":"evening",s=e.filter(e=>g(e)===o);return s.length>0?s[0]:e[0]},[y.missions,y.completedToday,Te]),Qe=(0,o.useMemo)(()=>({morning:y.missions.filter(e=>"morning"===g(e)),afternoon:y.missions.filter(e=>"afternoon"===g(e)),evening:y.missions.filter(e=>"evening"===g(e))}),[y.missions]),Ve=(()=>{const e=Se.getHours();return e<12?"daily.greet.morning":e<18?"daily.greet.afternoon":"daily.greet.evening"})(),et=(s.interests.length,i("daily.greet.defaultName")),tt=Se.toLocaleTimeString("pt"===t?"pt-PT":"en-US",{hour:"2-digit",minute:"2-digit"}),it=Se.toLocaleDateString("pt"===t?"pt-PT":"en-US",{weekday:"long",day:"numeric",month:"long"}),ot=0===Ge?i("daily.greet.allDone"):i("daily.greet.remaining",{n:Ge,total:qe});function st(e){const t=`daily.chapter.${e}`,o=Qe[e],s=o.filter(e=>y.completedToday.includes(e.id)).length;return(0,u.jsxs)(ie,{children:[(0,u.jsxs)(oe,{children:[(0,u.jsx)(l.YZ,{children:i(t)}),(0,u.jsx)(se,{children:i("daily.chapter.count",{done:s,total:o.length})})]}),0===o.length?(0,u.jsx)(ne,{children:i("daily.chapter.empty")}):(0,u.jsx)(ae,{children:o.map(e=>{const t=y.completedToday.includes(e.id),o=M.has(e.id),s=e.translationKey?i(e.translationKey):e.name??"",n=e.color??r.w4.colors.accent,a=e.frame??"disc";return(0,u.jsxs)(le,{completed:t,flashing:o,isOver:!1,onClick:t=>Ie(e,t.currentTarget),role:"checkbox","aria-checked":t,tabIndex:0,onKeyDown:t=>{" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),Ie(e,t.currentTarget))},children:[(0,u.jsx)(nt,{frame:a,emoji:e.emoji,color:n,size:40}),(0,u.jsx)(ue,{completed:t,children:s}),(0,u.jsx)(he,{children:(0,u.jsxs)(ge,{completed:t,children:["+",e.points]})}),t&&(0,u.jsx)(we,{children:"✓"})]},e.id)})})]},e)}return(0,u.jsxs)(r.PE,{title:i("daily.title"),sidebar:null,topBarRight:e,children:[(0,u.jsxs)(R,{children:[(0,u.jsxs)(K,{children:[(0,u.jsxs)(P,{children:[(0,u.jsx)(F,{children:i(Ve,{name:et})}),(0,u.jsxs)(B,{children:[it," · ",tt," · ",ot]})]}),(0,u.jsxs)(E,{children:[(0,u.jsxs)(Y,{children:["🧭 ",i("daily.chip.level",{n:Ne})]}),(0,u.jsxs)(Y,{children:["⭐ ",i("daily.chip.points",{n:y.totalPoints})]}),(0,u.jsxs)(Y,{children:["🔥 ",i(_e>1?"daily.chip.streak":"daily.chip.streakSingle",{n:_e})]}),(0,u.jsxs)(Y,{children:["✅ ",i("daily.chip.done",{n:Xe})]})]})]}),(0,u.jsxs)(A,{children:[(0,u.jsxs)(I,{children:[(0,u.jsx)(L,{children:(0,u.jsx)(l.YZ,{children:i("daily.focus.nextUp")})}),Je?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(H,{children:(0,u.jsx)(nt,{frame:Je.frame??"disc",emoji:Je.emoji,color:Je.color??r.w4.colors.accent,size:72})}),(0,u.jsx)(O,{children:Je.translationKey?i(Je.translationKey):Je.name??""}),(0,u.jsxs)(U,{children:["+",Je.points," pts"]}),Je.time&&(0,u.jsx)(N,{children:i("daily.focus.timeChip",{time:Je.time})}),(0,u.jsxs)(Z,{children:[(0,u.jsx)(l.$n,{variant:"primary",onClick:e=>{const t=e.target.closest("button");Ie(Je,t)},children:i("daily.focus.markDone")}),(0,u.jsx)(l.$n,{variant:"ghost",onClick:()=>ze(e=>[...e,Je.id]),children:i("daily.focus.skip")})]})]}):(0,u.jsxs)(_,{children:[(0,u.jsx)(W,{children:"🌟"}),(0,u.jsx)(X,{children:i("daily.focus.allDone")}),(0,u.jsx)(q,{children:i("daily.focus.allDoneBody")})]})]}),(0,u.jsx)(pt,{completed:Xe,total:qe,t:i,pulsing:ve})]}),v?(0,u.jsxs)("div",{children:[(0,u.jsxs)(be,{children:[(0,u.jsx)(je,{children:i("daily.sectionMissions")}),(0,u.jsxs)("div",{style:{display:"flex",gap:r.w4.spacing.xs},children:[(0,u.jsx)(l.$n,{variant:"accent",size:"sm",icon:(0,u.jsx)(c.A,{size:13}),onClick:()=>{k(!1),z(!1)},children:i("daily.done")}),(0,u.jsx)(l.K0,{onClick:()=>z(!0),title:i("daily.addMission"),"aria-label":i("daily.addMission"),children:(0,u.jsx)(m.A,{size:13})})]})]}),(0,u.jsx)(re,{children:y.missions.map(e=>{const t=pe===e.id,o=me===e.id&&pe!==e.id,s=e.translationKey?i(e.translationKey):e.name??"",n=e.color??r.w4.colors.accent,a=e.frame??"disc";return(0,u.jsxs)(de,{isOver:o,draggable:!0,style:{opacity:t?.3:1},onDragStart:t=>{fe(e.id),t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",e.id)},onDragOver:t=>{t.preventDefault(),t.dataTransfer.dropEffect="move",pe&&pe!==e.id&&xe(e.id)},onDragLeave:e=>{e.currentTarget===e.target&&xe(null)},onDrop:t=>{t.preventDefault(),pe&&Ue(pe,e.id),fe(null),xe(null)},onDragEnd:()=>{fe(null),xe(null)},children:[(0,u.jsx)($e,{"aria-hidden":!0,children:(0,u.jsx)(p.A,{size:14})}),(0,u.jsx)(nt,{frame:a,emoji:e.emoji,color:n,size:52}),(0,u.jsx)(ue,{completed:!1,children:s}),(0,u.jsx)(he,{children:(0,u.jsxs)(ge,{completed:!1,children:["+",e.points," pts"]})}),(0,u.jsx)(ye,{onClick:t=>{t.stopPropagation(),He(e.id)},"aria-label":i("daily.delete"),title:i("daily.delete"),children:"×"})]},e.id)})}),(0,u.jsx)("div",{style:{marginTop:r.w4.spacing.sm},children:(0,u.jsx)(l.$n,{variant:"ghost",icon:(0,u.jsx)(m.A,{size:13}),onClick:()=>z(!0),children:i("daily.addMission")})})]}):(0,u.jsxs)(te,{children:[(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,u.jsx)(l.YZ,{children:i("daily.sectionMissions")}),(0,u.jsxs)("div",{style:{display:"flex",gap:r.w4.spacing.xs},children:[(0,u.jsx)(l.$n,{variant:"ghost",size:"sm",icon:(0,u.jsx)(f.A,{size:13}),onClick:()=>k(!0),children:i("daily.edit")}),(0,u.jsx)(l.K0,{onClick:()=>z(!0),title:i("daily.addMission"),"aria-label":i("daily.addMission"),children:(0,u.jsx)(m.A,{size:13})})]})]}),st("morning"),st("afternoon"),st("evening")]}),(0,u.jsx)(ft,{history:We,total:qe,locale:t,t:i}),(0,u.jsx)(De,{children:ee?(0,u.jsxs)(Ce,{children:[(0,u.jsx)(Re,{children:i("daily.resetConfirm")}),(0,u.jsxs)(Ke,{children:[(0,u.jsx)(l.$n,{variant:"danger",onClick:Le,style:{flex:1},children:i("daily.confirm")}),(0,u.jsx)(l.$n,{variant:"ghost",onClick:()=>ce(!1),style:{flex:1},children:i("daily.cancel")})]})]}):(0,u.jsx)(l.$n,{variant:"ghost",onClick:()=>ce(!0),children:i("daily.resetDay")})})]}),D.map(e=>(0,u.jsxs)(Pe,{style:{left:e.x,top:e.y},children:["+",e.value]},e.id)),G&&(0,u.jsx)(Fe,{exiting:Q,children:(0,u.jsxs)(Be,{children:[(0,u.jsx)(Ee,{children:G.emoji}),(0,u.jsx)(Ye,{children:i("daily.levelUp")}),(0,u.jsx)(Ae,{children:i(G.key)})]})}),T&&(0,u.jsx)(ct,{t:i,onAdd:e=>{Oe(e),z(!1)},onClose:()=>z(!1)})]})}}}]);
//# sourceMappingURL=6036.f7d60b99cba6d9b43ceb.js.map