"use strict";(self.webpackChunk_atlantis_colorlab=self.webpackChunk_atlantis_colorlab||[]).push([[188],{188(e,r,s){var o=s(7359),l=s(8997),i=s(3233),t=s(5723),n=s(5609),a=s(320),d=s(2139),c=s(8104);const x=`\n  &::-webkit-scrollbar{width:6px}&::-webkit-scrollbar-track{background:transparent}\n  &::-webkit-scrollbar-thumb{background:${t.w4.colors.border};border-radius:3px}\n  scrollbar-width:thin;scrollbar-color:${t.w4.colors.border} transparent;\n`,h=i.default.div`display:flex;flex:1;overflow:hidden;`,p=i.default.div`
  width: 300px; flex-shrink: 0; display: flex; flex-direction: column;
  border-right: 1px solid ${t.w4.colors.sidebarBorder}; overflow-y: auto; ${x}
  background: ${t.w4.colors.sidebarBg};
`,u=i.default.div`
  flex: 1; overflow-y: auto; padding: ${t.w4.spacing.lg}; ${x}
  display: flex; flex-direction: column; gap: ${t.w4.spacing.lg};
`,g=i.default.div`
  width: 100%; height: 120px; background: ${e=>e.color}; flex-shrink: 0;
`,b=i.default.div`padding: ${t.w4.spacing.md}; display: flex; flex-direction: column; gap: ${t.w4.spacing.sm};`,f=i.default.div`font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: ${t.w4.colors.mainTextMuted};`,j=i.default.div`display: flex; align-items: center; gap: ${t.w4.spacing.sm};`,m=i.default.input`
  flex: 1; background: ${t.w4.colors.mainBg}; border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm}; padding: 6px 10px; font-size: 13px;
  font-family: ${t.w4.typography.fontFamilyMono}; color: ${t.w4.colors.mainText};
  outline: none; transition: border-color 0.15s;
  &:focus { border-color: ${t.w4.colors.accent}; }
`,w=i.default.input`
  width: 36px; height: 36px; padding: 2px; border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm}; background: ${t.w4.colors.mainBg};
  cursor: pointer; &::-webkit-color-swatch-wrapper { padding: 0; }
  &::-webkit-color-swatch { border: none; border-radius: 3px; }
`,$=i.default.div`display: flex; gap: 6px;`,v=i.default.input`
  width: 0; flex: 1; background: ${t.w4.colors.mainBg}; border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm}; padding: 6px 8px; font-size: 13px;
  font-family: ${t.w4.typography.fontFamilyMono}; color: ${t.w4.colors.mainText};
  outline: none; text-align: center;
  &:focus { border-color: ${t.w4.colors.accent}; }
`,y=i.default.button`
  display: flex; align-items: center; justify-content: center; width: 30px; height: 30px;
  background: transparent; border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm}; color: ${e=>e.copied?"#3fb950":t.w4.colors.mainTextMuted};
  cursor: pointer; flex-shrink: 0; transition: all 0.15s;
  &:hover { border-color: ${t.w4.colors.accent}; color: ${t.w4.colors.mainText}; }
`,k=i.default.div`font-size: 11px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: ${t.w4.colors.mainTextMuted}; margin-bottom: ${t.w4.spacing.sm};`,C=i.default.div`display: flex; gap: 6px; flex-wrap: wrap;`,z=i.default.button`
  width: ${e=>"sm"===e.size?"32px":"48px"};
  height: ${e=>"sm"===e.size?"32px":"48px"};
  background: ${e=>e.color}; border: 2px solid transparent; border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer; transition: transform 0.1s, border-color 0.15s; flex-shrink: 0;
  &:hover { transform: scale(1.1); border-color: rgba(255,255,255,0.3); }
`,A=i.default.div`font-size: 10px; color: ${t.w4.colors.mainTextMuted}; margin-top: 3px; font-family: ${t.w4.typography.fontFamilyMono};`,R=i.default.div`display: flex; gap: ${t.w4.spacing.md};`,B=i.default.div`
  flex: 1; padding: ${t.w4.spacing.md}; border-radius: ${t.w4.borderRadius.md};
  background: ${e=>e.bg}; color: ${e=>e.fg}; font-size: 14px; font-weight: 600;
`,M=i.default.span`
  display: inline-flex; align-items: center; padding: 1px 6px; border-radius: 3px; font-size: 10px;
  font-weight: 700; font-family: ${t.w4.typography.fontFamily}; margin-left: 6px;
  background: ${e=>e.pass?"rgba(63,185,80,0.2)":"rgba(248,113,113,0.2)"};
  color: ${e=>e.pass?"#3fb950":"#f87171"};
  border: 1px solid ${e=>e.pass?"rgba(63,185,80,0.4)":"rgba(248,113,113,0.4)"};
`,L=i.default.div`background: ${t.w4.colors.surface}; border: 1px solid ${t.w4.colors.border}; border-radius: ${t.w4.borderRadius.md}; padding: ${t.w4.spacing.lg};`;function T({topBarRight:e}){const[r,s]=(0,o.useState)("#388bfd"),{copied:l,copy:i}=function(){const[e,r]=(0,o.useState)(null);return{copied:e,copy:(0,o.useCallback)((e,s)=>{navigator.clipboard.writeText(e).catch(()=>{}),r(s),setTimeout(()=>r(null),1500)},[])}}(),x=(0,d.E2)(r)??{r:56,g:139,b:253},T=(0,d.K6)(x.r,x.g,x.b),F=(0,d.Ob)(x.r,x.g,x.b),S=(0,o.useCallback)(e=>{s((0,d.Ob)(e.r,e.g,e.b))},[]),Y=e=>{/^#[0-9a-fA-F]{3}$/.test(e)||/^#[0-9a-fA-F]{6}$/.test(e)?s(e):/^#?[0-9a-fA-F]{0,6}$/.test(e)&&s(e.startsWith("#")?e:"#"+e)},H=(e,r)=>{const s=Math.max(0,Math.min(255,parseInt(r)||0));S({...x,[e]:s})},W=(e,r)=>{const s="h"===e?360:100,o=Math.max(0,Math.min(s,parseInt(r)||0)),l={...T,[e]:o};S((0,d.YL)(l.h,l.s,l.l))},E=(0,d.iW)(T.h,T.s),O=(0,d.Hg)(T.h,T.s,T.l),[_,G]=(0,d.mW)(T.h,T.s,T.l),[I,P,K]=(0,d.Lt)(T.h,T.s,T.l),q=e=>(0,d.Ob)(...Object.values((0,d.YL)(e.h,e.s,e.l))),D=(0,d.eM)(x,{r:255,g:255,b:255}),J=(0,d.eM)(x,{r:0,g:0,b:0});return(0,c.jsx)(t.PE,{title:"Color Lab",sidebar:null,topBarRight:e,children:(0,c.jsxs)(h,{children:[(0,c.jsxs)(p,{children:[(0,c.jsx)(g,{color:F}),(0,c.jsxs)(b,{children:[(0,c.jsx)(f,{children:"Picker"}),(0,c.jsxs)(j,{children:[(0,c.jsx)(w,{type:"color",value:F,onChange:e=>Y(e.target.value)}),(0,c.jsx)(m,{value:r,onChange:e=>Y(e.target.value),spellCheck:!1}),(0,c.jsx)(y,{copied:"hex"===l,onClick:()=>i(F,"hex"),children:"hex"===l?(0,c.jsx)(n.A,{size:13}):(0,c.jsx)(a.A,{size:13})})]})]}),(0,c.jsxs)(b,{children:[(0,c.jsx)(f,{children:"RGB"}),(0,c.jsxs)(j,{children:[(0,c.jsxs)($,{children:[(0,c.jsx)(v,{value:x.r,onChange:e=>H("r",e.target.value),title:"Red"}),(0,c.jsx)(v,{value:x.g,onChange:e=>H("g",e.target.value),title:"Green"}),(0,c.jsx)(v,{value:x.b,onChange:e=>H("b",e.target.value),title:"Blue"})]}),(0,c.jsx)(y,{copied:"rgb"===l,onClick:()=>i(`rgb(${x.r}, ${x.g}, ${x.b})`,"rgb"),children:"rgb"===l?(0,c.jsx)(n.A,{size:13}):(0,c.jsx)(a.A,{size:13})})]})]}),(0,c.jsxs)(b,{children:[(0,c.jsx)(f,{children:"HSL"}),(0,c.jsxs)(j,{children:[(0,c.jsxs)($,{children:[(0,c.jsx)(v,{value:T.h,onChange:e=>W("h",e.target.value),title:"Hue"}),(0,c.jsx)(v,{value:T.s,onChange:e=>W("s",e.target.value),title:"Saturation"}),(0,c.jsx)(v,{value:T.l,onChange:e=>W("l",e.target.value),title:"Lightness"})]}),(0,c.jsx)(y,{copied:"hsl"===l,onClick:()=>i(`hsl(${T.h}, ${T.s}%, ${T.l}%)`,"hsl"),children:"hsl"===l?(0,c.jsx)(n.A,{size:13}):(0,c.jsx)(a.A,{size:13})})]})]})]}),(0,c.jsxs)(u,{children:[(0,c.jsxs)(L,{children:[(0,c.jsx)(k,{children:"Shades"}),(0,c.jsx)(C,{children:E.map(e=>{const r=q(e);return(0,c.jsxs)("div",{children:[(0,c.jsx)(z,{color:r,size:"md",onClick:()=>S((0,d.YL)(e.h,e.s,e.l)),title:r}),(0,c.jsxs)(A,{children:[e.l,"%"]})]},e.l)})})]}),(0,c.jsxs)(L,{children:[(0,c.jsx)(k,{children:"Complementary"}),(0,c.jsxs)(C,{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(z,{color:F,size:"md",title:"Current"}),(0,c.jsx)(A,{children:"base"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(z,{color:q(O),size:"md",onClick:()=>S((0,d.YL)(O.h,O.s,O.l)),title:q(O)}),(0,c.jsx)(A,{children:q(O)})]})]})]}),(0,c.jsxs)(L,{children:[(0,c.jsx)(k,{children:"Analogous"}),(0,c.jsx)(C,{children:[_,{h:T.h,s:T.s,l:T.l},G].map((e,r)=>{const s=q(e);return(0,c.jsxs)("div",{children:[(0,c.jsx)(z,{color:s,size:"md",onClick:()=>S((0,d.YL)(e.h,e.s,e.l)),title:s}),(0,c.jsx)(A,{children:s})]},r)})})]}),(0,c.jsxs)(L,{children:[(0,c.jsx)(k,{children:"Triadic"}),(0,c.jsx)(C,{children:[I,P,K].map((e,r)=>{const s=q(e);return(0,c.jsxs)("div",{children:[(0,c.jsx)(z,{color:s,size:"md",onClick:()=>S((0,d.YL)(e.h,e.s,e.l)),title:s}),(0,c.jsx)(A,{children:s})]},r)})})]}),(0,c.jsxs)(L,{children:[(0,c.jsx)(k,{children:"WCAG Contrast"}),(0,c.jsxs)(R,{children:[(0,c.jsxs)(B,{bg:F,fg:"#ffffff",children:[(0,c.jsx)("div",{style:{fontSize:12,marginBottom:4,opacity:.8},children:"vs White"}),D,":1",(0,c.jsxs)(M,{pass:D>=4.5,children:["AA ",D>=4.5?"✓":"✗"]}),(0,c.jsxs)(M,{pass:D>=7,children:["AAA ",D>=7?"✓":"✗"]})]}),(0,c.jsxs)(B,{bg:F,fg:"#000000",children:[(0,c.jsx)("div",{style:{fontSize:12,marginBottom:4,opacity:.7},children:"vs Black"}),J,":1",(0,c.jsxs)(M,{pass:J>=4.5,children:["AA ",J>=4.5?"✓":"✗"]}),(0,c.jsxs)(M,{pass:J>=7,children:["AAA ",J>=7?"✓":"✗"]})]})]})]})]})]})})}const F=document.getElementById("root");if(!F)throw new Error("Root element #root not found");(0,l.H)(F).render((0,c.jsx)(T,{}))},8997(e,r,s){var o=s(8991);r.H=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=188.7f499eea8506c2604fed.js.map