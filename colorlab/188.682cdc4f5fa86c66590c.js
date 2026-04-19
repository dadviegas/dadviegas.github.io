"use strict";(self.webpackChunk_atlantis_colorlab=self.webpackChunk_atlantis_colorlab||[]).push([[188],{188(e,r,s){var o=s(7359),l=s(8997),i=s(3233),t=s(9200),n=s(8608),a=s(5609),d=s(320),c=s(2139),x=s(5723);const p=`\n  &::-webkit-scrollbar{width:6px}&::-webkit-scrollbar-track{background:transparent}\n  &::-webkit-scrollbar-thumb{background:${t.w4.colors.border};border-radius:3px}\n  scrollbar-width:thin;scrollbar-color:${t.w4.colors.border} transparent;\n`,h=i.default.div`display:flex;flex:1;overflow:hidden;`,u=i.default.div`
  width: 300px; flex-shrink: 0; display: flex; flex-direction: column;
  border-right: 1px solid ${t.w4.colors.sidebarBorder}; overflow-y: auto; ${p}
  background: ${t.w4.colors.sidebarBg};
`,g=i.default.div`
  flex: 1; overflow-y: auto; padding: ${t.w4.spacing.lg}; ${p}
  display: flex; flex-direction: column; gap: ${t.w4.spacing.lg};
`,f=i.default.div`
  width: 100%; height: 120px; background: ${e=>e.color}; flex-shrink: 0;
`,b=i.default.div`padding: ${t.w4.spacing.md}; display: flex; flex-direction: column; gap: ${t.w4.spacing.sm};`,j=i.default.div`font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: ${t.w4.colors.mainTextMuted};`,m=i.default.div`display: flex; align-items: center; gap: ${t.w4.spacing.sm};`,w=i.default.input`
  flex: 1; background: ${t.w4.colors.mainBg}; border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm}; padding: 6px 10px; font-size: 13px;
  font-family: ${t.w4.typography.fontFamilyMono}; color: ${t.w4.colors.mainText};
  outline: none; transition: border-color 0.15s;
  &:focus { border-color: ${t.w4.colors.accent}; }
`,$=i.default.input`
  width: 36px; height: 36px; padding: 2px; border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm}; background: ${t.w4.colors.mainBg};
  cursor: pointer; &::-webkit-color-swatch-wrapper { padding: 0; }
  &::-webkit-color-swatch { border: none; border-radius: 3px; }
`,v=i.default.div`display: flex; gap: 6px;`,k=i.default.input`
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
`,C=i.default.div`font-size: 11px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: ${t.w4.colors.mainTextMuted}; margin-bottom: ${t.w4.spacing.sm};`,z=i.default.div`display: flex; gap: 6px; flex-wrap: wrap;`,A=i.default.button`
  width: ${e=>"sm"===e.size?"32px":"48px"};
  height: ${e=>"sm"===e.size?"32px":"48px"};
  background: ${e=>e.color}; border: 2px solid transparent; border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer; transition: transform 0.1s, border-color 0.15s; flex-shrink: 0;
  &:hover { transform: scale(1.1); border-color: rgba(255,255,255,0.3); }
`,R=i.default.div`font-size: 10px; color: ${t.w4.colors.mainTextMuted}; margin-top: 3px; font-family: ${t.w4.typography.fontFamilyMono};`,B=i.default.div`display: flex; gap: ${t.w4.spacing.md};`,M=i.default.div`
  flex: 1; padding: ${t.w4.spacing.md}; border-radius: ${t.w4.borderRadius.md};
  background: ${e=>e.bg}; color: ${e=>e.fg}; font-size: 14px; font-weight: 600;
`,T=i.default.span`
  display: inline-flex; align-items: center; padding: 1px 6px; border-radius: 3px; font-size: 10px;
  font-weight: 700; font-family: ${t.w4.typography.fontFamily}; margin-left: 6px;
  background: ${e=>e.pass?"rgba(63,185,80,0.2)":"rgba(248,113,113,0.2)"};
  color: ${e=>e.pass?"#3fb950":"#f87171"};
  border: 1px solid ${e=>e.pass?"rgba(63,185,80,0.4)":"rgba(248,113,113,0.4)"};
`,L=i.default.div`background: ${t.w4.colors.surface}; border: 1px solid ${t.w4.colors.border}; border-radius: ${t.w4.borderRadius.md}; padding: ${t.w4.spacing.lg};`,F="toolkit:colorlab";function S({topBarRight:e}){const[r,s]=(0,o.useState)("#388bfd"),{copied:l,copy:i}=function(){const[e,r]=(0,o.useState)(null);return{copied:e,copy:(0,o.useCallback)((e,s)=>{navigator.clipboard.writeText(e).catch(()=>{}),r(s),setTimeout(()=>r(null),1500)},[])}}(),p=(0,o.useRef)(!1);(0,o.useEffect)(()=>{(0,t.PL)(F).then(e=>{e&&s(e),p.current=!0})},[]),(0,o.useEffect)(()=>{if(!p.current)return;const e=setTimeout(()=>(0,t.Is)(F,r),400);return()=>clearTimeout(e)},[r]);const S=(0,c.E2)(r)??{r:56,g:139,b:253},E=(0,c.K6)(S.r,S.g,S.b),Y=(0,c.Ob)(S.r,S.g,S.b),H=(0,o.useCallback)(e=>{s((0,c.Ob)(e.r,e.g,e.b))},[]),I=e=>{/^#[0-9a-fA-F]{3}$/.test(e)||/^#[0-9a-fA-F]{6}$/.test(e)?s(e):/^#?[0-9a-fA-F]{0,6}$/.test(e)&&s(e.startsWith("#")?e:"#"+e)},W=(e,r)=>{const s=Math.max(0,Math.min(255,parseInt(r)||0));H({...S,[e]:s})},O=(e,r)=>{const s="h"===e?360:100,o=Math.max(0,Math.min(s,parseInt(r)||0)),l={...E,[e]:o};H((0,c.YL)(l.h,l.s,l.l))},_=(0,c.iW)(E.h,E.s),G=(0,c.Hg)(E.h,E.s,E.l),[P,K]=(0,c.mW)(E.h,E.s,E.l),[q,D,J]=(0,c.Lt)(E.h,E.s,E.l),N=e=>(0,c.Ob)(...Object.values((0,c.YL)(e.h,e.s,e.l))),Q=(0,c.eM)(S,{r:255,g:255,b:255}),U=(0,c.eM)(S,{r:0,g:0,b:0});return(0,x.jsx)(t.PE,{title:"Color Lab",sidebar:(0,x.jsx)(n.tz,{activeAppId:"colorlab"}),topBarRight:e,children:(0,x.jsxs)(h,{children:[(0,x.jsxs)(u,{children:[(0,x.jsx)(f,{color:Y}),(0,x.jsxs)(b,{children:[(0,x.jsx)(j,{children:"Picker"}),(0,x.jsxs)(m,{children:[(0,x.jsx)($,{type:"color",value:Y,onChange:e=>I(e.target.value)}),(0,x.jsx)(w,{value:r,onChange:e=>I(e.target.value),spellCheck:!1}),(0,x.jsx)(y,{copied:"hex"===l,onClick:()=>i(Y,"hex"),children:"hex"===l?(0,x.jsx)(a.A,{size:13}):(0,x.jsx)(d.A,{size:13})})]})]}),(0,x.jsxs)(b,{children:[(0,x.jsx)(j,{children:"RGB"}),(0,x.jsxs)(m,{children:[(0,x.jsxs)(v,{children:[(0,x.jsx)(k,{value:S.r,onChange:e=>W("r",e.target.value),title:"Red"}),(0,x.jsx)(k,{value:S.g,onChange:e=>W("g",e.target.value),title:"Green"}),(0,x.jsx)(k,{value:S.b,onChange:e=>W("b",e.target.value),title:"Blue"})]}),(0,x.jsx)(y,{copied:"rgb"===l,onClick:()=>i(`rgb(${S.r}, ${S.g}, ${S.b})`,"rgb"),children:"rgb"===l?(0,x.jsx)(a.A,{size:13}):(0,x.jsx)(d.A,{size:13})})]})]}),(0,x.jsxs)(b,{children:[(0,x.jsx)(j,{children:"HSL"}),(0,x.jsxs)(m,{children:[(0,x.jsxs)(v,{children:[(0,x.jsx)(k,{value:E.h,onChange:e=>O("h",e.target.value),title:"Hue"}),(0,x.jsx)(k,{value:E.s,onChange:e=>O("s",e.target.value),title:"Saturation"}),(0,x.jsx)(k,{value:E.l,onChange:e=>O("l",e.target.value),title:"Lightness"})]}),(0,x.jsx)(y,{copied:"hsl"===l,onClick:()=>i(`hsl(${E.h}, ${E.s}%, ${E.l}%)`,"hsl"),children:"hsl"===l?(0,x.jsx)(a.A,{size:13}):(0,x.jsx)(d.A,{size:13})})]})]})]}),(0,x.jsxs)(g,{children:[(0,x.jsxs)(L,{children:[(0,x.jsx)(C,{children:"Shades"}),(0,x.jsx)(z,{children:_.map(e=>{const r=N(e);return(0,x.jsxs)("div",{children:[(0,x.jsx)(A,{color:r,size:"md",onClick:()=>H((0,c.YL)(e.h,e.s,e.l)),title:r}),(0,x.jsxs)(R,{children:[e.l,"%"]})]},e.l)})})]}),(0,x.jsxs)(L,{children:[(0,x.jsx)(C,{children:"Complementary"}),(0,x.jsxs)(z,{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)(A,{color:Y,size:"md",title:"Current"}),(0,x.jsx)(R,{children:"base"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(A,{color:N(G),size:"md",onClick:()=>H((0,c.YL)(G.h,G.s,G.l)),title:N(G)}),(0,x.jsx)(R,{children:N(G)})]})]})]}),(0,x.jsxs)(L,{children:[(0,x.jsx)(C,{children:"Analogous"}),(0,x.jsx)(z,{children:[P,{h:E.h,s:E.s,l:E.l},K].map((e,r)=>{const s=N(e);return(0,x.jsxs)("div",{children:[(0,x.jsx)(A,{color:s,size:"md",onClick:()=>H((0,c.YL)(e.h,e.s,e.l)),title:s}),(0,x.jsx)(R,{children:s})]},r)})})]}),(0,x.jsxs)(L,{children:[(0,x.jsx)(C,{children:"Triadic"}),(0,x.jsx)(z,{children:[q,D,J].map((e,r)=>{const s=N(e);return(0,x.jsxs)("div",{children:[(0,x.jsx)(A,{color:s,size:"md",onClick:()=>H((0,c.YL)(e.h,e.s,e.l)),title:s}),(0,x.jsx)(R,{children:s})]},r)})})]}),(0,x.jsxs)(L,{children:[(0,x.jsx)(C,{children:"WCAG Contrast"}),(0,x.jsxs)(B,{children:[(0,x.jsxs)(M,{bg:Y,fg:"#ffffff",children:[(0,x.jsx)("div",{style:{fontSize:12,marginBottom:4,opacity:.8},children:"vs White"}),Q,":1",(0,x.jsxs)(T,{pass:Q>=4.5,children:["AA ",Q>=4.5?"✓":"✗"]}),(0,x.jsxs)(T,{pass:Q>=7,children:["AAA ",Q>=7?"✓":"✗"]})]}),(0,x.jsxs)(M,{bg:Y,fg:"#000000",children:[(0,x.jsx)("div",{style:{fontSize:12,marginBottom:4,opacity:.7},children:"vs Black"}),U,":1",(0,x.jsxs)(T,{pass:U>=4.5,children:["AA ",U>=4.5?"✓":"✗"]}),(0,x.jsxs)(T,{pass:U>=7,children:["AAA ",U>=7?"✓":"✗"]})]})]})]})]})]})})}const E=document.getElementById("root");if(!E)throw new Error("Root element #root not found");(0,l.H)(E).render((0,x.jsx)(S,{}))},8997(e,r,s){var o=s(8991);r.H=o.createRoot,o.hydrateRoot}}]);