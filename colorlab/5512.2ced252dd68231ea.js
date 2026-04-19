"use strict";(self.webpackChunk_atlantis_colorlab=self.webpackChunk_atlantis_colorlab||[]).push([["5512"],{8997(r,e,s){var o=s(2727);e.createRoot=o.createRoot,o.hydrateRoot},3611(r,e,s){var o=s(5723),i=s(7991),l=s(8997),t=s(6859),n=s.n(t),a=s(5726),d=s(1638),c=s(5609),x=s(320),h=s(5628);let p=`
  &::-webkit-scrollbar{width:6px}&::-webkit-scrollbar-track{background:transparent}
  &::-webkit-scrollbar-thumb{background:${a.w4.colors.border};border-radius:3px}
  scrollbar-width:thin;scrollbar-color:${a.w4.colors.border} transparent;
`,g=n().div`display:flex;flex:1;overflow:hidden;`,b=n().div`
  width: 300px; flex-shrink: 0; display: flex; flex-direction: column;
  border-right: 1px solid ${a.w4.colors.sidebarBorder}; overflow-y: auto; ${p}
  background: ${a.w4.colors.sidebarBg};
`,u=n().div`
  flex: 1; overflow-y: auto; padding: ${a.w4.spacing.lg}; ${p}
  display: flex; flex-direction: column; gap: ${a.w4.spacing.lg};
`,f=n().div`
  width: 100%; height: 120px; background: ${r=>r.color}; flex-shrink: 0;
`,j=n().div`padding: ${a.w4.spacing.md}; display: flex; flex-direction: column; gap: ${a.w4.spacing.sm};`,m=n().div`font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: ${a.w4.colors.mainTextMuted};`,w=n().div`display: flex; align-items: center; gap: ${a.w4.spacing.sm};`,$=n().input`
  flex: 1; background: ${a.w4.colors.mainBg}; border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm}; padding: 6px 10px; font-size: 13px;
  font-family: ${a.w4.typography.fontFamilyMono}; color: ${a.w4.colors.mainText};
  outline: none; transition: border-color 0.15s;
  &:focus { border-color: ${a.w4.colors.accent}; }
`,v=n().input`
  width: 36px; height: 36px; padding: 2px; border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm}; background: ${a.w4.colors.mainBg};
  cursor: pointer; &::-webkit-color-swatch-wrapper { padding: 0; }
  &::-webkit-color-swatch { border: none; border-radius: 3px; }
`,k=n().div`display: flex; gap: 6px;`,y=n().input`
  width: 0; flex: 1; background: ${a.w4.colors.mainBg}; border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm}; padding: 6px 8px; font-size: 13px;
  font-family: ${a.w4.typography.fontFamilyMono}; color: ${a.w4.colors.mainText};
  outline: none; text-align: center;
  &:focus { border-color: ${a.w4.colors.accent}; }
`,C=n().button`
  display: flex; align-items: center; justify-content: center; width: 30px; height: 30px;
  background: transparent; border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm}; color: ${r=>r.copied?"#3fb950":a.w4.colors.mainTextMuted};
  cursor: pointer; flex-shrink: 0; transition: all 0.15s;
  &:hover { border-color: ${a.w4.colors.accent}; color: ${a.w4.colors.mainText}; }
`,z=n().div`font-size: 11px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: ${a.w4.colors.mainTextMuted}; margin-bottom: ${a.w4.spacing.sm};`,A=n().div`display: flex; gap: 6px; flex-wrap: wrap;`,R=n().button`
  width: ${r=>"sm"===r.size?"32px":"48px"};
  height: ${r=>"sm"===r.size?"32px":"48px"};
  background: ${r=>r.color}; border: 2px solid transparent; border-radius: ${a.w4.borderRadius.sm};
  cursor: pointer; transition: transform 0.1s, border-color 0.15s; flex-shrink: 0;
  &:hover { transform: scale(1.1); border-color: rgba(255,255,255,0.3); }
`,M=n().div`font-size: 10px; color: ${a.w4.colors.mainTextMuted}; margin-top: 3px; font-family: ${a.w4.typography.fontFamilyMono};`,B=n().div`display: flex; gap: ${a.w4.spacing.md};`,T=n().div`
  flex: 1; padding: ${a.w4.spacing.md}; border-radius: ${a.w4.borderRadius.md};
  background: ${r=>r.bg}; color: ${r=>r.fg}; font-size: 14px; font-weight: 600;
`,L=n().span`
  display: inline-flex; align-items: center; padding: 1px 6px; border-radius: 3px; font-size: 10px;
  font-weight: 700; font-family: ${a.w4.typography.fontFamily}; margin-left: 6px;
  background: ${r=>r.pass?"rgba(63,185,80,0.2)":"rgba(248,113,113,0.2)"};
  color: ${r=>r.pass?"#3fb950":"#f87171"};
  border: 1px solid ${r=>r.pass?"rgba(63,185,80,0.4)":"rgba(248,113,113,0.4)"};
`,F=n().div`background: ${a.w4.colors.surface}; border: 1px solid ${a.w4.colors.border}; border-radius: ${a.w4.borderRadius.md}; padding: ${a.w4.spacing.lg};`,S="toolkit:colorlab",E=document.getElementById("root");if(!E)throw Error("Root element #root not found");(0,l.createRoot)(E).render((0,o.jsx)(function({topBarRight:r}){let[e,s]=(0,i.useState)("#388bfd"),{copied:l,copy:t}=function(){let[r,e]=(0,i.useState)(null);return{copied:r,copy:(0,i.useCallback)((r,s)=>{navigator.clipboard.writeText(r).catch(()=>{}),e(s),setTimeout(()=>e(null),1500)},[])}}(),n=(0,i.useRef)(!1);(0,i.useEffect)(()=>{(0,a.PL)(S).then(r=>{r&&s(r),n.current=!0})},[]),(0,i.useEffect)(()=>{if(!n.current)return;let r=setTimeout(()=>(0,a.Is)(S,e),400);return()=>clearTimeout(r)},[e]);let p=(0,h.E2)(e)??{r:56,g:139,b:253},E=(0,h.K6)(p.r,p.g,p.b),Y=(0,h.Ob)(p.r,p.g,p.b),I=(0,i.useCallback)(r=>{s((0,h.Ob)(r.r,r.g,r.b))},[]),W=r=>{/^#[0-9a-fA-F]{3}$/.test(r)||/^#[0-9a-fA-F]{6}$/.test(r)?s(r):/^#?[0-9a-fA-F]{0,6}$/.test(r)&&s(r.startsWith("#")?r:"#"+r)},O=(r,e)=>{let s=Math.max(0,Math.min(255,parseInt(e)||0));I({...p,[r]:s})},_=(r,e)=>{let s=Math.max(0,Math.min("h"===r?360:100,parseInt(e)||0)),o={...E,[r]:s};I((0,h.YL)(o.h,o.s,o.l))},G=(0,h.iW)(E.h,E.s),H=(0,h.Hg)(E.h,E.s,E.l),[P,K]=(0,h.mW)(E.h,E.s,E.l),[q,D,J]=(0,h.Lt)(E.h,E.s,E.l),N=r=>(0,h.Ob)(...Object.values((0,h.YL)(r.h,r.s,r.l))),Q=(0,h.eM)(p,{r:255,g:255,b:255}),U=(0,h.eM)(p,{r:0,g:0,b:0});return(0,o.jsx)(a.PE,{title:"Color Lab",sidebar:(0,o.jsx)(d.tz,{activeAppId:"colorlab"}),topBarRight:r,children:(0,o.jsxs)(g,{children:[(0,o.jsxs)(b,{children:[(0,o.jsx)(f,{color:Y}),(0,o.jsxs)(j,{children:[(0,o.jsx)(m,{children:"Picker"}),(0,o.jsxs)(w,{children:[(0,o.jsx)(v,{type:"color",value:Y,onChange:r=>W(r.target.value)}),(0,o.jsx)($,{value:e,onChange:r=>W(r.target.value),spellCheck:!1}),(0,o.jsx)(C,{copied:"hex"===l,onClick:()=>t(Y,"hex"),children:"hex"===l?(0,o.jsx)(c.A,{size:13}):(0,o.jsx)(x.A,{size:13})})]})]}),(0,o.jsxs)(j,{children:[(0,o.jsx)(m,{children:"RGB"}),(0,o.jsxs)(w,{children:[(0,o.jsxs)(k,{children:[(0,o.jsx)(y,{value:p.r,onChange:r=>O("r",r.target.value),title:"Red"}),(0,o.jsx)(y,{value:p.g,onChange:r=>O("g",r.target.value),title:"Green"}),(0,o.jsx)(y,{value:p.b,onChange:r=>O("b",r.target.value),title:"Blue"})]}),(0,o.jsx)(C,{copied:"rgb"===l,onClick:()=>t(`rgb(${p.r}, ${p.g}, ${p.b})`,"rgb"),children:"rgb"===l?(0,o.jsx)(c.A,{size:13}):(0,o.jsx)(x.A,{size:13})})]})]}),(0,o.jsxs)(j,{children:[(0,o.jsx)(m,{children:"HSL"}),(0,o.jsxs)(w,{children:[(0,o.jsxs)(k,{children:[(0,o.jsx)(y,{value:E.h,onChange:r=>_("h",r.target.value),title:"Hue"}),(0,o.jsx)(y,{value:E.s,onChange:r=>_("s",r.target.value),title:"Saturation"}),(0,o.jsx)(y,{value:E.l,onChange:r=>_("l",r.target.value),title:"Lightness"})]}),(0,o.jsx)(C,{copied:"hsl"===l,onClick:()=>t(`hsl(${E.h}, ${E.s}%, ${E.l}%)`,"hsl"),children:"hsl"===l?(0,o.jsx)(c.A,{size:13}):(0,o.jsx)(x.A,{size:13})})]})]})]}),(0,o.jsxs)(u,{children:[(0,o.jsxs)(F,{children:[(0,o.jsx)(z,{children:"Shades"}),(0,o.jsx)(A,{children:G.map(r=>{let e=N(r);return(0,o.jsxs)("div",{children:[(0,o.jsx)(R,{color:e,size:"md",onClick:()=>I((0,h.YL)(r.h,r.s,r.l)),title:e}),(0,o.jsxs)(M,{children:[r.l,"%"]})]},r.l)})})]}),(0,o.jsxs)(F,{children:[(0,o.jsx)(z,{children:"Complementary"}),(0,o.jsxs)(A,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(R,{color:Y,size:"md",title:"Current"}),(0,o.jsx)(M,{children:"base"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(R,{color:N(H),size:"md",onClick:()=>I((0,h.YL)(H.h,H.s,H.l)),title:N(H)}),(0,o.jsx)(M,{children:N(H)})]})]})]}),(0,o.jsxs)(F,{children:[(0,o.jsx)(z,{children:"Analogous"}),(0,o.jsx)(A,{children:[P,{h:E.h,s:E.s,l:E.l},K].map((r,e)=>{let s=N(r);return(0,o.jsxs)("div",{children:[(0,o.jsx)(R,{color:s,size:"md",onClick:()=>I((0,h.YL)(r.h,r.s,r.l)),title:s}),(0,o.jsx)(M,{children:s})]},e)})})]}),(0,o.jsxs)(F,{children:[(0,o.jsx)(z,{children:"Triadic"}),(0,o.jsx)(A,{children:[q,D,J].map((r,e)=>{let s=N(r);return(0,o.jsxs)("div",{children:[(0,o.jsx)(R,{color:s,size:"md",onClick:()=>I((0,h.YL)(r.h,r.s,r.l)),title:s}),(0,o.jsx)(M,{children:s})]},e)})})]}),(0,o.jsxs)(F,{children:[(0,o.jsx)(z,{children:"WCAG Contrast"}),(0,o.jsxs)(B,{children:[(0,o.jsxs)(T,{bg:Y,fg:"#ffffff",children:[(0,o.jsx)("div",{style:{fontSize:12,marginBottom:4,opacity:.8},children:"vs White"}),Q,":1",(0,o.jsxs)(L,{pass:Q>=4.5,children:["AA ",Q>=4.5?"✓":"✗"]}),(0,o.jsxs)(L,{pass:Q>=7,children:["AAA ",Q>=7?"✓":"✗"]})]}),(0,o.jsxs)(T,{bg:Y,fg:"#000000",children:[(0,o.jsx)("div",{style:{fontSize:12,marginBottom:4,opacity:.7},children:"vs Black"}),U,":1",(0,o.jsxs)(L,{pass:U>=4.5,children:["AA ",U>=4.5?"✓":"✗"]}),(0,o.jsxs)(L,{pass:U>=7,children:["AAA ",U>=7?"✓":"✗"]})]})]})]})]})]})})},{}))}}]);