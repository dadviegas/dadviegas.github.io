"use strict";(self.webpackChunk_atlantis_colorlab=self.webpackChunk_atlantis_colorlab||[]).push([[36],{6036(e,r,s){s.r(r),s.d(r,{default:()=>L});var o=s(7359),l=s(3233),i=s(458),t=s(5609),a=s(320),n=s(2139),d=s(5723);const c=`\n  &::-webkit-scrollbar{width:6px}&::-webkit-scrollbar-track{background:transparent}\n  &::-webkit-scrollbar-thumb{background:${i.w4.colors.border};border-radius:3px}\n  scrollbar-width:thin;scrollbar-color:${i.w4.colors.border} transparent;\n`,x=l.default.div`display:flex;flex:1;overflow:hidden;`,p=l.default.div`
  width: 300px; flex-shrink: 0; display: flex; flex-direction: column;
  border-right: 1px solid ${i.w4.colors.sidebarBorder}; overflow-y: auto; ${c}
  background: ${i.w4.colors.sidebarBg};
`,h=l.default.div`
  flex: 1; overflow-y: auto; padding: ${i.w4.spacing.lg}; ${c}
  display: flex; flex-direction: column; gap: ${i.w4.spacing.lg};
`,u=l.default.div`
  width: 100%; height: 120px; background: ${e=>e.color}; flex-shrink: 0;
`,g=l.default.div`padding: ${i.w4.spacing.md}; display: flex; flex-direction: column; gap: ${i.w4.spacing.sm};`,b=l.default.div`font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: ${i.w4.colors.mainTextMuted};`,f=l.default.div`display: flex; align-items: center; gap: ${i.w4.spacing.sm};`,j=l.default.input`
  flex: 1; background: ${i.w4.colors.mainBg}; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm}; padding: 6px 10px; font-size: 13px;
  font-family: ${i.w4.typography.fontFamilyMono}; color: ${i.w4.colors.mainText};
  outline: none; transition: border-color 0.15s;
  &:focus { border-color: ${i.w4.colors.accent}; }
`,m=l.default.input`
  width: 36px; height: 36px; padding: 2px; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm}; background: ${i.w4.colors.mainBg};
  cursor: pointer; &::-webkit-color-swatch-wrapper { padding: 0; }
  &::-webkit-color-swatch { border: none; border-radius: 3px; }
`,w=l.default.div`display: flex; gap: 6px;`,$=l.default.input`
  width: 0; flex: 1; background: ${i.w4.colors.mainBg}; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm}; padding: 6px 8px; font-size: 13px;
  font-family: ${i.w4.typography.fontFamilyMono}; color: ${i.w4.colors.mainText};
  outline: none; text-align: center;
  &:focus { border-color: ${i.w4.colors.accent}; }
`,v=l.default.button`
  display: flex; align-items: center; justify-content: center; width: 30px; height: 30px;
  background: transparent; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm}; color: ${e=>e.copied?"#3fb950":i.w4.colors.mainTextMuted};
  cursor: pointer; flex-shrink: 0; transition: all 0.15s;
  &:hover { border-color: ${i.w4.colors.accent}; color: ${i.w4.colors.mainText}; }
`,k=l.default.div`font-size: 11px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: ${i.w4.colors.mainTextMuted}; margin-bottom: ${i.w4.spacing.sm};`,y=l.default.div`display: flex; gap: 6px; flex-wrap: wrap;`,C=l.default.button`
  width: ${e=>"sm"===e.size?"32px":"48px"};
  height: ${e=>"sm"===e.size?"32px":"48px"};
  background: ${e=>e.color}; border: 2px solid transparent; border-radius: ${i.w4.borderRadius.sm};
  cursor: pointer; transition: transform 0.1s, border-color 0.15s; flex-shrink: 0;
  &:hover { transform: scale(1.1); border-color: rgba(255,255,255,0.3); }
`,z=l.default.div`font-size: 10px; color: ${i.w4.colors.mainTextMuted}; margin-top: 3px; font-family: ${i.w4.typography.fontFamilyMono};`,A=l.default.div`display: flex; gap: ${i.w4.spacing.md};`,M=l.default.div`
  flex: 1; padding: ${i.w4.spacing.md}; border-radius: ${i.w4.borderRadius.md};
  background: ${e=>e.bg}; color: ${e=>e.fg}; font-size: 14px; font-weight: 600;
`,B=l.default.span`
  display: inline-flex; align-items: center; padding: 1px 6px; border-radius: 3px; font-size: 10px;
  font-weight: 700; font-family: ${i.w4.typography.fontFamily}; margin-left: 6px;
  background: ${e=>e.pass?"rgba(63,185,80,0.2)":"rgba(248,113,113,0.2)"};
  color: ${e=>e.pass?"#3fb950":"#f87171"};
  border: 1px solid ${e=>e.pass?"rgba(63,185,80,0.4)":"rgba(248,113,113,0.4)"};
`,R=l.default.div`background: ${i.w4.colors.surface}; border: 1px solid ${i.w4.colors.border}; border-radius: ${i.w4.borderRadius.md}; padding: ${i.w4.spacing.lg};`,T="toolkit:colorlab";function L({topBarRight:e}){const[r,s]=(0,o.useState)("#388bfd"),{copied:l,copy:c}=function(){const[e,r]=(0,o.useState)(null);return{copied:e,copy:(0,o.useCallback)((e,s)=>{navigator.clipboard.writeText(e).catch(()=>{}),r(s),setTimeout(()=>r(null),1500)},[])}}(),L=(0,o.useRef)(!1);(0,o.useEffect)(()=>{(0,i.PL)(T).then(e=>{e&&s(e),L.current=!0})},[]),(0,o.useEffect)(()=>{if(!L.current)return;const e=setTimeout(()=>(0,i.Is)(T,r),400);return()=>clearTimeout(e)},[r]);const F=(0,n.E2)(r)??{r:56,g:139,b:253},S=(0,n.K6)(F.r,F.g,F.b),Y=(0,n.Ob)(F.r,F.g,F.b),W=(0,o.useCallback)(e=>{s((0,n.Ob)(e.r,e.g,e.b))},[]),E=e=>{/^#[0-9a-fA-F]{3}$/.test(e)||/^#[0-9a-fA-F]{6}$/.test(e)?s(e):/^#?[0-9a-fA-F]{0,6}$/.test(e)&&s(e.startsWith("#")?e:"#"+e)},I=(e,r)=>{const s=Math.max(0,Math.min(255,parseInt(r)||0));W({...F,[e]:s})},O=(e,r)=>{const s="h"===e?360:100,o=Math.max(0,Math.min(s,parseInt(r)||0)),l={...S,[e]:o};W((0,n.YL)(l.h,l.s,l.l))},_=(0,n.iW)(S.h,S.s),G=(0,n.Hg)(S.h,S.s,S.l),[H,P]=(0,n.mW)(S.h,S.s,S.l),[K,q,D]=(0,n.Lt)(S.h,S.s,S.l),J=e=>(0,n.Ob)(...Object.values((0,n.YL)(e.h,e.s,e.l))),N=(0,n.eM)(F,{r:255,g:255,b:255}),Q=(0,n.eM)(F,{r:0,g:0,b:0});return(0,d.jsx)(i.PE,{title:"Color Lab",sidebar:(0,d.jsx)(i.tz,{activeAppId:"colorlab"}),topBarRight:e,children:(0,d.jsxs)(x,{children:[(0,d.jsxs)(p,{children:[(0,d.jsx)(u,{color:Y}),(0,d.jsxs)(g,{children:[(0,d.jsx)(b,{children:"Picker"}),(0,d.jsxs)(f,{children:[(0,d.jsx)(m,{type:"color",value:Y,onChange:e=>E(e.target.value)}),(0,d.jsx)(j,{value:r,onChange:e=>E(e.target.value),spellCheck:!1}),(0,d.jsx)(v,{copied:"hex"===l,onClick:()=>c(Y,"hex"),children:"hex"===l?(0,d.jsx)(t.A,{size:13}):(0,d.jsx)(a.A,{size:13})})]})]}),(0,d.jsxs)(g,{children:[(0,d.jsx)(b,{children:"RGB"}),(0,d.jsxs)(f,{children:[(0,d.jsxs)(w,{children:[(0,d.jsx)($,{value:F.r,onChange:e=>I("r",e.target.value),title:"Red"}),(0,d.jsx)($,{value:F.g,onChange:e=>I("g",e.target.value),title:"Green"}),(0,d.jsx)($,{value:F.b,onChange:e=>I("b",e.target.value),title:"Blue"})]}),(0,d.jsx)(v,{copied:"rgb"===l,onClick:()=>c(`rgb(${F.r}, ${F.g}, ${F.b})`,"rgb"),children:"rgb"===l?(0,d.jsx)(t.A,{size:13}):(0,d.jsx)(a.A,{size:13})})]})]}),(0,d.jsxs)(g,{children:[(0,d.jsx)(b,{children:"HSL"}),(0,d.jsxs)(f,{children:[(0,d.jsxs)(w,{children:[(0,d.jsx)($,{value:S.h,onChange:e=>O("h",e.target.value),title:"Hue"}),(0,d.jsx)($,{value:S.s,onChange:e=>O("s",e.target.value),title:"Saturation"}),(0,d.jsx)($,{value:S.l,onChange:e=>O("l",e.target.value),title:"Lightness"})]}),(0,d.jsx)(v,{copied:"hsl"===l,onClick:()=>c(`hsl(${S.h}, ${S.s}%, ${S.l}%)`,"hsl"),children:"hsl"===l?(0,d.jsx)(t.A,{size:13}):(0,d.jsx)(a.A,{size:13})})]})]})]}),(0,d.jsxs)(h,{children:[(0,d.jsxs)(R,{children:[(0,d.jsx)(k,{children:"Shades"}),(0,d.jsx)(y,{children:_.map(e=>{const r=J(e);return(0,d.jsxs)("div",{children:[(0,d.jsx)(C,{color:r,size:"md",onClick:()=>W((0,n.YL)(e.h,e.s,e.l)),title:r}),(0,d.jsxs)(z,{children:[e.l,"%"]})]},e.l)})})]}),(0,d.jsxs)(R,{children:[(0,d.jsx)(k,{children:"Complementary"}),(0,d.jsxs)(y,{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(C,{color:Y,size:"md",title:"Current"}),(0,d.jsx)(z,{children:"base"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)(C,{color:J(G),size:"md",onClick:()=>W((0,n.YL)(G.h,G.s,G.l)),title:J(G)}),(0,d.jsx)(z,{children:J(G)})]})]})]}),(0,d.jsxs)(R,{children:[(0,d.jsx)(k,{children:"Analogous"}),(0,d.jsx)(y,{children:[H,{h:S.h,s:S.s,l:S.l},P].map((e,r)=>{const s=J(e);return(0,d.jsxs)("div",{children:[(0,d.jsx)(C,{color:s,size:"md",onClick:()=>W((0,n.YL)(e.h,e.s,e.l)),title:s}),(0,d.jsx)(z,{children:s})]},r)})})]}),(0,d.jsxs)(R,{children:[(0,d.jsx)(k,{children:"Triadic"}),(0,d.jsx)(y,{children:[K,q,D].map((e,r)=>{const s=J(e);return(0,d.jsxs)("div",{children:[(0,d.jsx)(C,{color:s,size:"md",onClick:()=>W((0,n.YL)(e.h,e.s,e.l)),title:s}),(0,d.jsx)(z,{children:s})]},r)})})]}),(0,d.jsxs)(R,{children:[(0,d.jsx)(k,{children:"WCAG Contrast"}),(0,d.jsxs)(A,{children:[(0,d.jsxs)(M,{bg:Y,fg:"#ffffff",children:[(0,d.jsx)("div",{style:{fontSize:12,marginBottom:4,opacity:.8},children:"vs White"}),N,":1",(0,d.jsxs)(B,{pass:N>=4.5,children:["AA ",N>=4.5?"✓":"✗"]}),(0,d.jsxs)(B,{pass:N>=7,children:["AAA ",N>=7?"✓":"✗"]})]}),(0,d.jsxs)(M,{bg:Y,fg:"#000000",children:[(0,d.jsx)("div",{style:{fontSize:12,marginBottom:4,opacity:.7},children:"vs Black"}),Q,":1",(0,d.jsxs)(B,{pass:Q>=4.5,children:["AA ",Q>=4.5?"✓":"✗"]}),(0,d.jsxs)(B,{pass:Q>=7,children:["AAA ",Q>=7?"✓":"✗"]})]})]})]})]})]})})}}}]);
//# sourceMappingURL=36.22dc9afd9b897861c380.js.map