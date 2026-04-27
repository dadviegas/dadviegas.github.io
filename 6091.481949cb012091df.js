"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["6091"],{31382(e,t,o){o.d(t,{AgendaWidget:()=>_});var n=o(65723),a=o(37991),r=o(36859),i=o.n(r),s=o(72799),l=o(6063),d=o(60033),c=o(80884),p=o(28170),u=o(98975),g=o(10312);let x={personal:l.w4.suites.ent,team:l.w4.suites.lab,work:l.w4.suites.learn},m=d.AGENDA_TAG_ORDER,f=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,b=(0,s.keyframes)`
  0%, 100% { box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.24); }
  50%      { box-shadow: 0 0 0 6px rgba(99, 102, 241, 0.10); }
`,w=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};
`,h=i().div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,y=i().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  border: 1px solid ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, background ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.accent};
    border-color: ${l.w4.colors.accent};
  }
  &:focus-visible { ${l.w4.focusRing} }
`,$=i().div`
  position: relative;
  flex: 1;
  overflow-y: auto;
  padding-right: 2px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${l.w4.colors.border};
    border-radius: 2px;
  }
`,v=i().div`
  position: absolute;
  left: 50px;
  top: 4px;
  bottom: 4px;
  width: 1px;
  background: ${l.w4.colors.borderSubtle};
`,j=i().div`
  display: grid;
  grid-template-columns: 44px 1fr 18px;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 12px;
  opacity: ${({past:e})=>e?.45:1};
  animation: ${f} 0.3s ease both;
  animation-delay: ${({delay:e})=>35*e}ms;

  &:hover .delete-btn { opacity: 1; }

  &:last-child { margin-bottom: 0; }
`,k=i().button`
  background: none;
  border: none;
  padding: 2px 0 0;
  text-align: right;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  cursor: pointer;
  color: ${({active:e,past:t})=>e?l.w4.colors.accent:t?l.w4.colors.mainTextFaint:l.w4.colors.mainTextMuted};
  text-decoration: ${({past:e})=>e?"line-through":"none"};

  &:focus-visible { ${l.w4.focusRing} }
`,M=i().button`
  background: none;
  border: none;
  padding: 0 0 0 14px;
  text-align: left;
  position: relative;
  cursor: pointer;
  color: inherit;
  font: inherit;

  &:focus-visible { ${l.w4.focusRing} }

  .title {
    font-size: 13px;
    font-weight: 500;
    color: ${l.w4.colors.mainText};
    margin-bottom: 2px;
    line-height: 1.3;
    text-decoration: ${({done:e})=>e?"line-through":"none"};
  }
  .meta {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`,C=i().span`
  position: absolute;
  left: -2px;
  top: 6px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  ${({active:e})=>e?`animation: ${b} 2.2s ease-in-out infinite;`:""}
`,R=i().button`
  background: none;
  border: none;
  padding: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${l.w4.colors.mainTextFaint};
  cursor: pointer;
  border-radius: ${l.w4.borderRadius.sm};
  opacity: 0;
  transition: opacity ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};
  @media (hover: none) { opacity: 0.55; }

  &:hover { color: ${l.w4.colors.danger}; }
  &:focus-visible { ${l.w4.focusRing}; opacity: 1; }
`,z=i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${l.w4.spacing.md};
  text-align: center;
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
`,S=i().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: ${l.w4.colors.accentMuted};
  border: 1px solid ${l.w4.colors.accent};
  border-radius: 999px;
  color: ${l.w4.colors.accent};
  font-size: 11px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform ${l.w4.transitions.fast};

  &:hover { transform: translateY(-1px); }
  &:focus-visible { ${l.w4.focusRing} }
`,F=i().form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  background: ${l.w4.colors.surfaceRaised};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  margin-bottom: 8px;
  animation: ${f} 0.18s ease both;
`,T=i().div`
  display: grid;
  grid-template-columns: 64px 1fr 64px;
  gap: 6px;
`,E=i().input`
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  padding: 6px 8px;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainText};
  min-width: 0;

  &::placeholder { color: ${l.w4.colors.mainTextFaint}; }
  &:focus { outline: none; border-color: ${l.w4.colors.accent}; }
`,A=i().div`
  display: flex;
  gap: 6px;
`,D=i().button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 4px 6px;
  background: ${({color:e,selected:t})=>t?`${e}22`:"transparent"};
  border: 1px solid ${({color:e,selected:t})=>t?e:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({color:e,selected:t})=>t?e:l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({color:e})=>e};
  }
  &:focus-visible { ${l.w4.focusRing} }
`,H=i().div`
  display: flex;
  gap: 6px;
  justify-content: flex-end;
`,I=i().button`
  padding: 5px 10px;
  border-radius: ${l.w4.borderRadius.sm};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${({primary:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  background: ${({primary:e})=>e?l.w4.colors.accent:"transparent"};
  color: ${({primary:e})=>e?"#fff":l.w4.colors.mainText};

  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${l.w4.focusRing} }
`;function _({locale:e}){let t="pt"===e?"pt":"en",o=(0,a.useMemo)(()=>(0,p.Nx)(t,u.A),[t]),{store:r,loaded:i,add:s,toggleDone:f,remove:b}=(0,d.useAgenda)(),[N,O]=(0,a.useState)(!1),[Y,G]=(0,a.useState)(""),[B,P]=(0,a.useState)(()=>(0,d.currentHHMM)()),[W,q]=(0,a.useState)(""),[J,K]=(0,a.useState)("personal"),[L,Q]=(0,a.useState)(()=>{let e=new Date;return 60*e.getHours()+e.getMinutes()}),U=(0,d.todayISO)(),V=(0,a.useMemo)(()=>(0,d.sortEvents)(r[U]??[]),[r,U]);(0,a.useEffect)(()=>{let e=setInterval(()=>{let e=new Date;Q(60*e.getHours()+e.getMinutes())},6e4);return()=>clearInterval(e)},[]);let X=(0,a.useCallback)(async()=>{await s(U,{title:Y,time:B,end:W,tag:J})&&(G(""),q(""),K("personal"),P((0,d.currentHHMM)()),O(!1))},[Y,B,W,J,U,s]),Z=(0,a.useCallback)(e=>{f(U,e)},[U,f]),ee=(0,a.useCallback)(e=>{b(U,e)},[U,b]);if(!i)return null;let et=Y.trim().length>0&&/^\d{2}:\d{2}$/.test(B),eo=1===V.length?o("agenda.countOne"):o("agenda.count",{n:V.length});return(0,n.jsx)(c.rl,{title:o("agenda.title"),accessory:(0,n.jsxs)(h,{children:[V.length>0&&(0,n.jsx)("span",{children:eo}),(0,n.jsx)(y,{type:"button",active:N,onClick:()=>O(e=>!e),"aria-label":o("agenda.addEvent"),title:o("agenda.addEvent"),children:(0,n.jsx)(c.In,{name:"plus",size:12})})]}),accentColor:g.A.accentColor,children:(0,n.jsxs)(w,{children:[N&&(0,n.jsxs)(F,{onSubmit:e=>{e.preventDefault(),X()},children:[(0,n.jsxs)(T,{children:[(0,n.jsx)(E,{type:"time",value:B,onChange:e=>P(e.target.value),"aria-label":o("agenda.timeStart")}),(0,n.jsx)(E,{type:"text",value:Y,onChange:e=>G(e.target.value),placeholder:o("agenda.titlePlaceholder"),autoFocus:!0}),(0,n.jsx)(E,{type:"time",value:W,onChange:e=>q(e.target.value),placeholder:o("agenda.timeEnd"),"aria-label":o("agenda.timeEnd")})]}),(0,n.jsx)(A,{children:m.map(e=>(0,n.jsx)(D,{type:"button",color:x[e],selected:J===e,onClick:()=>K(e),children:o(`agenda.tag.${e}`)},e))}),(0,n.jsxs)(H,{children:[(0,n.jsx)(I,{type:"button",onClick:()=>O(!1),children:o("agenda.cancel")}),(0,n.jsx)(I,{type:"submit",primary:!0,disabled:!et,children:o("agenda.save")})]})]}),0===V.length?(0,n.jsxs)(z,{children:[(0,n.jsx)("div",{children:o("agenda.empty")}),!N&&(0,n.jsxs)(S,{type:"button",onClick:()=>O(!0),children:[(0,n.jsx)(c.In,{name:"plus",size:12}),o("agenda.emptyCta")]})]}):(0,n.jsxs)($,{children:[(0,n.jsx)(v,{}),V.map((e,t)=>{let a=(0,d.toMinutes)(e.time),r=e.end?(0,d.toMinutes)(e.end):a+30,i=r<L&&!e.done||!!e.done,s=!e.done&&a<=L&&L<r,p=e.done?l.w4.colors.mainTextFaint:x[e.tag];return(0,n.jsxs)(j,{delay:t,past:i,children:[(0,n.jsx)(k,{type:"button",active:s,past:i,onClick:()=>Z(e.id),"aria-label":o("agenda.toggleDone"),children:s?o("agenda.now"):e.time}),(0,n.jsxs)(M,{type:"button",done:!!e.done,onClick:()=>Z(e.id),children:[(0,n.jsx)(C,{color:p,active:s}),(0,n.jsx)("div",{className:"title",children:e.title}),(0,n.jsxs)("div",{className:"meta",style:{color:x[e.tag]},children:[o(`agenda.tag.${e.tag}`),e.end?` \xb7 ${e.time}–${e.end}`:` \xb7 ${e.time}`]})]}),(0,n.jsx)(R,{className:"delete-btn",type:"button",onClick:()=>ee(e.id),"aria-label":o("agenda.delete"),title:o("agenda.delete"),children:(0,n.jsx)(c.In,{name:"close",size:12})})]},e.id)})]})]})})}}}]);