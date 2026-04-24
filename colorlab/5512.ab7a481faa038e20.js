"use strict";(self.webpackChunk_atlantis_colorlab=self.webpackChunk_atlantis_colorlab||[]).push([["5512"],{8997(e,r,s){var o=s(2727);r.createRoot=o.createRoot,o.hydrateRoot},3611(e,r,s){var o=s(5723),i=s(7991),l=s(8997),t=s(6859),n=s.n(t),a=s(9874),d=s(8311),c=s(5628);let x=`
  &::-webkit-scrollbar{width:6px}&::-webkit-scrollbar-track{background:transparent}
  &::-webkit-scrollbar-thumb{background:${a.w4.colors.border};border-radius:3px}
  scrollbar-width:thin;scrollbar-color:${a.w4.colors.border} transparent;
`,h=n().div`display:flex;flex:1;overflow:hidden;`,p=n().div`
  width: 300px; flex-shrink: 0; display: flex; flex-direction: column;
  border-right: 1px solid ${a.w4.colors.sidebarBorder}; overflow-y: auto; ${x}
  background: ${a.w4.colors.sidebarBg};
`,g=n().div`
  flex: 1; overflow-y: auto; padding: ${a.w4.spacing.lg}; ${x}
  display: flex; flex-direction: column; gap: ${a.w4.spacing.lg};
`,b=n().div`
  width: 100%; height: 120px; background: ${e=>e.color}; flex-shrink: 0;
`,u=n().div`padding: ${a.w4.spacing.md}; display: flex; flex-direction: column; gap: ${a.w4.spacing.sm};`,f=n().div`font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: ${a.w4.colors.mainTextMuted};`,m=n().div`display: flex; align-items: center; gap: ${a.w4.spacing.sm};`,w=n().input`
  flex: 1; background: ${a.w4.colors.mainBg}; border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm}; padding: 6px 10px; font-size: 13px;
  font-family: ${a.w4.typography.fontFamilyMono}; color: ${a.w4.colors.mainText};
  outline: none; transition: border-color ${a.w4.transitions.base};
  &:focus { border-color: ${a.w4.colors.accent}; }
`,j=n().input`
  width: 36px; height: 36px; padding: 2px; border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm}; background: ${a.w4.colors.mainBg};
  cursor: pointer; &::-webkit-color-swatch-wrapper { padding: 0; }
  &::-webkit-color-swatch { border: none; border-radius: 3px; }
`,$=n().div`display: flex; gap: 6px;`,v=n().input`
  width: 0; flex: 1; background: ${a.w4.colors.mainBg}; border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm}; padding: 6px 8px; font-size: 13px;
  font-family: ${a.w4.typography.fontFamilyMono}; color: ${a.w4.colors.mainText};
  outline: none; text-align: center;
  &:focus { border-color: ${a.w4.colors.accent}; }
`,k=n().button`
  display: flex; align-items: center; justify-content: center; width: 30px; height: 30px;
  background: transparent; border: 1px solid ${a.w4.colors.border};
  border-radius: ${a.w4.borderRadius.sm}; color: ${e=>e.copied?"#3fb950":a.w4.colors.mainTextMuted};
  cursor: pointer; flex-shrink: 0; transition: all ${a.w4.transitions.base};
  &:hover { border-color: ${a.w4.colors.accent}; color: ${a.w4.colors.mainText}; }
`,y=n().div`font-size: 11px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: ${a.w4.colors.mainTextMuted}; margin-bottom: ${a.w4.spacing.sm};`,C=n().div`display: flex; gap: 6px; flex-wrap: wrap;`,z=n().button`
  width: ${e=>"sm"===e.size?"32px":"48px"};
  height: ${e=>"sm"===e.size?"32px":"48px"};
  background: ${e=>e.color}; border: 2px solid transparent; border-radius: ${a.w4.borderRadius.sm};
  cursor: pointer; transition: transform ${a.w4.transitions.fast}, border-color ${a.w4.transitions.base}; flex-shrink: 0;
  &:hover { transform: scale(1.1); border-color: rgba(255,255,255,0.3); }
`,A=n().div`font-size: 11px; color: ${a.w4.colors.mainTextMuted}; margin-top: 3px; font-family: ${a.w4.typography.fontFamilyMono};`,R=n().div`display: flex; gap: ${a.w4.spacing.md};`,M=n().div`
  flex: 1; padding: ${a.w4.spacing.md}; border-radius: ${a.w4.borderRadius.md};
  background: ${e=>e.bg}; color: ${e=>e.fg}; font-size: 14px; font-weight: 600;
`,B=n().span`
  display: inline-flex; align-items: center; padding: 1px 6px; border-radius: 3px; font-size: 11px;
  font-weight: 700; font-family: ${a.w4.typography.fontFamily}; margin-left: 6px;
  background: ${e=>e.pass?"rgba(63,185,80,0.2)":"rgba(248,113,113,0.2)"};
  color: ${e=>e.pass?"#3fb950":"#f87171"};
  border: 1px solid ${e=>e.pass?"rgba(63,185,80,0.4)":"rgba(248,113,113,0.4)"};
`,T=n().div`background: ${a.w4.colors.surface}; border: 1px solid ${a.w4.colors.border}; border-radius: ${a.w4.borderRadius.md}; padding: ${a.w4.spacing.lg};`,I="toolkit:colorlab",L=document.getElementById("root");if(!L)throw Error("Root element #root not found");(0,l.createRoot)(L).render((0,o.jsx)(function({topBarRight:e}){let[r,s]=(0,i.useState)("#388bfd"),{copied:l,copy:t}=function(){let[e,r]=(0,i.useState)(null);return{copied:e,copy:(0,i.useCallback)((e,s)=>{navigator.clipboard.writeText(e).catch(()=>{}),r(s),setTimeout(()=>r(null),1500)},[])}}(),n=(0,i.useRef)(!1);(0,i.useEffect)(()=>{(0,a.PL)(I).then(e=>{e&&s(e),n.current=!0})},[]),(0,i.useEffect)(()=>{if(!n.current)return;let e=setTimeout(()=>(0,a.Is)(I,r),400);return()=>clearTimeout(e)},[r]);let x=(0,c.E2)(r)??{r:56,g:139,b:253},L=(0,c.K6)(x.r,x.g,x.b),F=(0,c.Ob)(x.r,x.g,x.b),S=(0,i.useCallback)(e=>{s((0,c.Ob)(e.r,e.g,e.b))},[]),E=e=>{/^#[0-9a-fA-F]{3}$/.test(e)||/^#[0-9a-fA-F]{6}$/.test(e)?s(e):/^#?[0-9a-fA-F]{0,6}$/.test(e)&&s(e.startsWith("#")?e:"#"+e)},Y=(e,r)=>{let s=Math.max(0,Math.min(255,parseInt(r)||0));S({...x,[e]:s})},W=(e,r)=>{let s=Math.max(0,Math.min("h"===e?360:100,parseInt(r)||0)),o={...L,[e]:s};S((0,c.YL)(o.h,o.s,o.l))},O=(0,c.iW)(L.h,L.s),_=(0,c.Hg)(L.h,L.s,L.l),[G,H]=(0,c.mW)(L.h,L.s,L.l),[P,K,q]=(0,c.Lt)(L.h,L.s,L.l),D=e=>(0,c.Ob)(...Object.values((0,c.YL)(e.h,e.s,e.l))),J=(0,c.eM)(x,{r:255,g:255,b:255}),N=(0,c.eM)(x,{r:0,g:0,b:0});return(0,o.jsx)(a.PE,{title:"Color Lab",sidebar:(0,o.jsx)(d.tz,{activeAppId:"colorlab"}),topBarRight:e,children:(0,o.jsxs)(h,{children:[(0,o.jsxs)(p,{children:[(0,o.jsx)(b,{color:F}),(0,o.jsxs)(u,{children:[(0,o.jsx)(f,{children:"Picker"}),(0,o.jsxs)(m,{children:[(0,o.jsx)(j,{type:"color",value:F,onChange:e=>E(e.target.value)}),(0,o.jsx)(w,{value:r,onChange:e=>E(e.target.value),spellCheck:!1}),(0,o.jsx)(k,{copied:"hex"===l,onClick:()=>t(F,"hex"),children:"hex"===l?(0,o.jsx)(d.In,{name:"check",size:13}):(0,o.jsx)(d.In,{name:"copy",size:13})})]})]}),(0,o.jsxs)(u,{children:[(0,o.jsx)(f,{children:"RGB"}),(0,o.jsxs)(m,{children:[(0,o.jsxs)($,{children:[(0,o.jsx)(v,{value:x.r,onChange:e=>Y("r",e.target.value),title:"Red"}),(0,o.jsx)(v,{value:x.g,onChange:e=>Y("g",e.target.value),title:"Green"}),(0,o.jsx)(v,{value:x.b,onChange:e=>Y("b",e.target.value),title:"Blue"})]}),(0,o.jsx)(k,{copied:"rgb"===l,onClick:()=>t(`rgb(${x.r}, ${x.g}, ${x.b})`,"rgb"),children:"rgb"===l?(0,o.jsx)(d.In,{name:"check",size:13}):(0,o.jsx)(d.In,{name:"copy",size:13})})]})]}),(0,o.jsxs)(u,{children:[(0,o.jsx)(f,{children:"HSL"}),(0,o.jsxs)(m,{children:[(0,o.jsxs)($,{children:[(0,o.jsx)(v,{value:L.h,onChange:e=>W("h",e.target.value),title:"Hue"}),(0,o.jsx)(v,{value:L.s,onChange:e=>W("s",e.target.value),title:"Saturation"}),(0,o.jsx)(v,{value:L.l,onChange:e=>W("l",e.target.value),title:"Lightness"})]}),(0,o.jsx)(k,{copied:"hsl"===l,onClick:()=>t(`hsl(${L.h}, ${L.s}%, ${L.l}%)`,"hsl"),children:"hsl"===l?(0,o.jsx)(d.In,{name:"check",size:13}):(0,o.jsx)(d.In,{name:"copy",size:13})})]})]})]}),(0,o.jsxs)(g,{children:[(0,o.jsxs)(T,{children:[(0,o.jsx)(y,{children:"Shades"}),(0,o.jsx)(C,{children:O.map(e=>{let r=D(e);return(0,o.jsxs)("div",{children:[(0,o.jsx)(z,{color:r,size:"md",onClick:()=>S((0,c.YL)(e.h,e.s,e.l)),title:r}),(0,o.jsxs)(A,{children:[e.l,"%"]})]},e.l)})})]}),(0,o.jsxs)(T,{children:[(0,o.jsx)(y,{children:"Complementary"}),(0,o.jsxs)(C,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(z,{color:F,size:"md",title:"Current"}),(0,o.jsx)(A,{children:"base"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(z,{color:D(_),size:"md",onClick:()=>S((0,c.YL)(_.h,_.s,_.l)),title:D(_)}),(0,o.jsx)(A,{children:D(_)})]})]})]}),(0,o.jsxs)(T,{children:[(0,o.jsx)(y,{children:"Analogous"}),(0,o.jsx)(C,{children:[G,{h:L.h,s:L.s,l:L.l},H].map((e,r)=>{let s=D(e);return(0,o.jsxs)("div",{children:[(0,o.jsx)(z,{color:s,size:"md",onClick:()=>S((0,c.YL)(e.h,e.s,e.l)),title:s}),(0,o.jsx)(A,{children:s})]},r)})})]}),(0,o.jsxs)(T,{children:[(0,o.jsx)(y,{children:"Triadic"}),(0,o.jsx)(C,{children:[P,K,q].map((e,r)=>{let s=D(e);return(0,o.jsxs)("div",{children:[(0,o.jsx)(z,{color:s,size:"md",onClick:()=>S((0,c.YL)(e.h,e.s,e.l)),title:s}),(0,o.jsx)(A,{children:s})]},r)})})]}),(0,o.jsxs)(T,{children:[(0,o.jsx)(y,{children:"WCAG Contrast"}),(0,o.jsxs)(R,{children:[(0,o.jsxs)(M,{bg:F,fg:"#ffffff",children:[(0,o.jsx)("div",{style:{fontSize:12,marginBottom:4,opacity:.8},children:"vs White"}),J,":1",(0,o.jsxs)(B,{pass:J>=4.5,children:["AA ",J>=4.5?"✓":"✗"]}),(0,o.jsxs)(B,{pass:J>=7,children:["AAA ",J>=7?"✓":"✗"]})]}),(0,o.jsxs)(M,{bg:F,fg:"#000000",children:[(0,o.jsx)("div",{style:{fontSize:12,marginBottom:4,opacity:.7},children:"vs Black"}),N,":1",(0,o.jsxs)(B,{pass:N>=4.5,children:["AA ",N>=4.5?"✓":"✗"]}),(0,o.jsxs)(B,{pass:N>=7,children:["AAA ",N>=7?"✓":"✗"]})]})]})]})]})]})})},{}))}}]);