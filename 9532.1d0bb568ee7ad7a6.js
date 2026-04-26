"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["9532"],{22247(e,t,i){i.d(t,{AskSessionsWidget:()=>$});var n=i(65723),a=i(37991),s=i(36859),r=i.n(s),l=i(72799),o=i(6063),c=i(80884),p=i(28170),d=i(98975);let g=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,m=r().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  animation: ${g} 0.3s ease both;
`,u=r().button`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  column-gap: ${o.w4.spacing.sm};
  row-gap: 2px;
  align-items: start;
  width: 100%;
  background: transparent;
  border: none;
  border-radius: ${o.w4.borderRadius.md};
  padding: ${o.w4.spacing.sm};
  cursor: pointer;
  text-align: left;
  transition: background ${o.w4.transitions.base};
  font: inherit;

  &:hover { background: ${o.w4.colors.sidebarHover}; }
  &:focus-visible { outline: 2px solid ${o.w4.colors.accent}; outline-offset: -1px; }
`,w=r().span`
  grid-column: 1;
  grid-row: 1;
  font-size: ${o.w4.typography.fontSizeSm};
  font-family: ${o.w4.typography.fontFamily};
  color: ${o.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,f=r().span`
  grid-column: 2;
  grid-row: 1;
  font-size: 11px;
  font-family: ${o.w4.typography.fontFamilyMono};
  color: ${o.w4.colors.mainTextFaint};
  white-space: nowrap;
`,h=r().span`
  grid-column: 1 / -1;
  grid-row: 2;
  font-size: ${o.w4.typography.fontSizeSm};
  font-family: ${o.w4.typography.fontFamily};
  color: ${o.w4.colors.mainTextMuted};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.45;
`,y=r().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${o.w4.spacing.sm};
  padding: ${o.w4.spacing.lg} 0;
  text-align: center;
  flex: 1;
  animation: ${g} 0.3s ease both;
`,x=r().p`
  font-size: ${o.w4.typography.fontSizeBase};
  color: ${o.w4.colors.mainTextMuted};
  line-height: 1.5;
  max-width: 240px;
  margin: 0;
`;function $({locale:e}){let t=(0,a.useMemo)(()=>(0,p.Nx)("pt"===e?"pt":"en",d.A),[e]),[i,s]=(0,a.useState)([]),[r,l]=(0,a.useState)(!1),g=(0,a.useCallback)(async()=>{s((await (0,o.Iu)("ask")).map(e=>(function(e,t){let i,n=[];try{let t=JSON.parse(e.content);Array.isArray(t.turns)&&(n=t.turns)}catch{return null}if(0===n.length)return null;let a=n.find(e=>"user"===e.role),s=[...n].reverse().find(e=>"assistant"===e.role),r=e.name?.trim()||a?.content?.slice(0,50)||t("ask.widget.untitled");i=s?s.content.replace(/```[\s\S]*?```/g,"").replace(/`[^`]*`/g,"").replace(/#{1,6}\s+/g,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/__([^_]+)__/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/_([^_]+)_/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^>\s+/gm,"").replace(/^[-*+]\s+/gm,"").replace(/^\d+\.\s+/gm,"").replace(/^-{3,}$/gm,"").replace(/\s+/g," ").trim().slice(0,80):a?`> ${a.content.slice(0,77)}`:"";let l=(0,p.aw)(new Date(e.savedAt).toISOString(),t);return{doc:e,title:r,preview:i,age:l}})(e,t)).filter(e=>null!==e).slice(0,3)),l(!0)},[t]);return((0,a.useEffect)(()=>{g()},[g]),(0,a.useEffect)(()=>{let e=()=>{"visible"===document.visibilityState&&g()};return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[g]),r)?(0,n.jsx)(c.rl,{title:t("ask.widget.title"),accentColor:o.w4.suites.lab,children:0===i.length?(0,n.jsxs)(y,{children:[(0,n.jsx)(x,{children:t("ask.widget.empty")}),(0,n.jsx)(c.$n,{variant:"ghost",icon:(0,n.jsx)(c.In,{name:"sparkle",size:13}),onClick:()=>{window.dispatchEvent(new CustomEvent("atlantis:open-palette",{detail:{scope:"ask"}}))},children:t("ask.widget.emptyCta")})]}):(0,n.jsx)(m,{children:i.map(({doc:e,title:t,preview:i,age:a})=>(0,n.jsxs)(u,{onClick:()=>(0,o.VJ)("ask",{session:String(e.id)}),title:t,children:[(0,n.jsx)(w,{children:t}),(0,n.jsx)(f,{children:a}),i&&(0,n.jsx)(h,{children:i})]},e.id))})}):null}}}]);