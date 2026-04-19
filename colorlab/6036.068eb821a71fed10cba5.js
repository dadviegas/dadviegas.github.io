"use strict";(self.webpackChunk_atlantis_colorlab=self.webpackChunk_atlantis_colorlab||[]).push([[6036],{6036(e,r,s){s.r(r),s.d(r,{default:()=>F});var o=s(7359),l=s(3233),i=s(4901),t=s(3857),a=s(5609),n=s(320),d=s(2139),c=s(5723);const x=`\n  &::-webkit-scrollbar{width:6px}&::-webkit-scrollbar-track{background:transparent}\n  &::-webkit-scrollbar-thumb{background:${i.w4.colors.border};border-radius:3px}\n  scrollbar-width:thin;scrollbar-color:${i.w4.colors.border} transparent;\n`,p=l.default.div`display:flex;flex:1;overflow:hidden;`,h=l.default.div`
  width: 300px; flex-shrink: 0; display: flex; flex-direction: column;
  border-right: 1px solid ${i.w4.colors.sidebarBorder}; overflow-y: auto; ${x}
  background: ${i.w4.colors.sidebarBg};
`,u=l.default.div`
  flex: 1; overflow-y: auto; padding: ${i.w4.spacing.lg}; ${x}
  display: flex; flex-direction: column; gap: ${i.w4.spacing.lg};
`,g=l.default.div`
  width: 100%; height: 120px; background: ${e=>e.color}; flex-shrink: 0;
`,b=l.default.div`padding: ${i.w4.spacing.md}; display: flex; flex-direction: column; gap: ${i.w4.spacing.sm};`,f=l.default.div`font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: ${i.w4.colors.mainTextMuted};`,j=l.default.div`display: flex; align-items: center; gap: ${i.w4.spacing.sm};`,m=l.default.input`
  flex: 1; background: ${i.w4.colors.mainBg}; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm}; padding: 6px 10px; font-size: 13px;
  font-family: ${i.w4.typography.fontFamilyMono}; color: ${i.w4.colors.mainText};
  outline: none; transition: border-color 0.15s;
  &:focus { border-color: ${i.w4.colors.accent}; }
`,w=l.default.input`
  width: 36px; height: 36px; padding: 2px; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm}; background: ${i.w4.colors.mainBg};
  cursor: pointer; &::-webkit-color-swatch-wrapper { padding: 0; }
  &::-webkit-color-swatch { border: none; border-radius: 3px; }
`,$=l.default.div`display: flex; gap: 6px;`,v=l.default.input`
  width: 0; flex: 1; background: ${i.w4.colors.mainBg}; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm}; padding: 6px 8px; font-size: 13px;
  font-family: ${i.w4.typography.fontFamilyMono}; color: ${i.w4.colors.mainText};
  outline: none; text-align: center;
  &:focus { border-color: ${i.w4.colors.accent}; }
`,k=l.default.button`
  display: flex; align-items: center; justify-content: center; width: 30px; height: 30px;
  background: transparent; border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm}; color: ${e=>e.copied?"#3fb950":i.w4.colors.mainTextMuted};
  cursor: pointer; flex-shrink: 0; transition: all 0.15s;
  &:hover { border-color: ${i.w4.colors.accent}; color: ${i.w4.colors.mainText}; }
`,y=l.default.div`font-size: 11px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: ${i.w4.colors.mainTextMuted}; margin-bottom: ${i.w4.spacing.sm};`,C=l.default.div`display: flex; gap: 6px; flex-wrap: wrap;`,z=l.default.button`
  width: ${e=>"sm"===e.size?"32px":"48px"};
  height: ${e=>"sm"===e.size?"32px":"48px"};
  background: ${e=>e.color}; border: 2px solid transparent; border-radius: ${i.w4.borderRadius.sm};
  cursor: pointer; transition: transform 0.1s, border-color 0.15s; flex-shrink: 0;
  &:hover { transform: scale(1.1); border-color: rgba(255,255,255,0.3); }
`,A=l.default.div`font-size: 10px; color: ${i.w4.colors.mainTextMuted}; margin-top: 3px; font-family: ${i.w4.typography.fontFamilyMono};`,M=l.default.div`display: flex; gap: ${i.w4.spacing.md};`,B=l.default.div`
  flex: 1; padding: ${i.w4.spacing.md}; border-radius: ${i.w4.borderRadius.md};
  background: ${e=>e.bg}; color: ${e=>e.fg}; font-size: 14px; font-weight: 600;
`,R=l.default.span`
  display: inline-flex; align-items: center; padding: 1px 6px; border-radius: 3px; font-size: 10px;
  font-weight: 700; font-family: ${i.w4.typography.fontFamily}; margin-left: 6px;
  background: ${e=>e.pass?"rgba(63,185,80,0.2)":"rgba(248,113,113,0.2)"};
  color: ${e=>e.pass?"#3fb950":"#f87171"};
  border: 1px solid ${e=>e.pass?"rgba(63,185,80,0.4)":"rgba(248,113,113,0.4)"};
`,T=l.default.div`background: ${i.w4.colors.surface}; border: 1px solid ${i.w4.colors.border}; border-radius: ${i.w4.borderRadius.md}; padding: ${i.w4.spacing.lg};`,L="toolkit:colorlab";function F({topBarRight:e}){const[r,s]=(0,o.useState)("#388bfd"),{copied:l,copy:x}=function(){const[e,r]=(0,o.useState)(null);return{copied:e,copy:(0,o.useCallback)((e,s)=>{navigator.clipboard.writeText(e).catch(()=>{}),r(s),setTimeout(()=>r(null),1500)},[])}}(),F=(0,o.useRef)(!1);(0,o.useEffect)(()=>{(0,i.PL)(L).then(e=>{e&&s(e),F.current=!0})},[]),(0,o.useEffect)(()=>{if(!F.current)return;const e=setTimeout(()=>(0,i.Is)(L,r),400);return()=>clearTimeout(e)},[r]);const S=(0,d.E2)(r)??{r:56,g:139,b:253},Y=(0,d.K6)(S.r,S.g,S.b),W=(0,d.Ob)(S.r,S.g,S.b),E=(0,o.useCallback)(e=>{s((0,d.Ob)(e.r,e.g,e.b))},[]),I=e=>{/^#[0-9a-fA-F]{3}$/.test(e)||/^#[0-9a-fA-F]{6}$/.test(e)?s(e):/^#?[0-9a-fA-F]{0,6}$/.test(e)&&s(e.startsWith("#")?e:"#"+e)},O=(e,r)=>{const s=Math.max(0,Math.min(255,parseInt(r)||0));E({...S,[e]:s})},_=(e,r)=>{const s="h"===e?360:100,o=Math.max(0,Math.min(s,parseInt(r)||0)),l={...Y,[e]:o};E((0,d.YL)(l.h,l.s,l.l))},G=(0,d.iW)(Y.h,Y.s),H=(0,d.Hg)(Y.h,Y.s,Y.l),[P,K]=(0,d.mW)(Y.h,Y.s,Y.l),[q,D,J]=(0,d.Lt)(Y.h,Y.s,Y.l),N=e=>(0,d.Ob)(...Object.values((0,d.YL)(e.h,e.s,e.l))),Q=(0,d.eM)(S,{r:255,g:255,b:255}),U=(0,d.eM)(S,{r:0,g:0,b:0});return(0,c.jsx)(i.PE,{title:"Color Lab",sidebar:(0,c.jsx)(t.tz,{activeAppId:"colorlab"}),topBarRight:e,children:(0,c.jsxs)(p,{children:[(0,c.jsxs)(h,{children:[(0,c.jsx)(g,{color:W}),(0,c.jsxs)(b,{children:[(0,c.jsx)(f,{children:"Picker"}),(0,c.jsxs)(j,{children:[(0,c.jsx)(w,{type:"color",value:W,onChange:e=>I(e.target.value)}),(0,c.jsx)(m,{value:r,onChange:e=>I(e.target.value),spellCheck:!1}),(0,c.jsx)(k,{copied:"hex"===l,onClick:()=>x(W,"hex"),children:"hex"===l?(0,c.jsx)(a.A,{size:13}):(0,c.jsx)(n.A,{size:13})})]})]}),(0,c.jsxs)(b,{children:[(0,c.jsx)(f,{children:"RGB"}),(0,c.jsxs)(j,{children:[(0,c.jsxs)($,{children:[(0,c.jsx)(v,{value:S.r,onChange:e=>O("r",e.target.value),title:"Red"}),(0,c.jsx)(v,{value:S.g,onChange:e=>O("g",e.target.value),title:"Green"}),(0,c.jsx)(v,{value:S.b,onChange:e=>O("b",e.target.value),title:"Blue"})]}),(0,c.jsx)(k,{copied:"rgb"===l,onClick:()=>x(`rgb(${S.r}, ${S.g}, ${S.b})`,"rgb"),children:"rgb"===l?(0,c.jsx)(a.A,{size:13}):(0,c.jsx)(n.A,{size:13})})]})]}),(0,c.jsxs)(b,{children:[(0,c.jsx)(f,{children:"HSL"}),(0,c.jsxs)(j,{children:[(0,c.jsxs)($,{children:[(0,c.jsx)(v,{value:Y.h,onChange:e=>_("h",e.target.value),title:"Hue"}),(0,c.jsx)(v,{value:Y.s,onChange:e=>_("s",e.target.value),title:"Saturation"}),(0,c.jsx)(v,{value:Y.l,onChange:e=>_("l",e.target.value),title:"Lightness"})]}),(0,c.jsx)(k,{copied:"hsl"===l,onClick:()=>x(`hsl(${Y.h}, ${Y.s}%, ${Y.l}%)`,"hsl"),children:"hsl"===l?(0,c.jsx)(a.A,{size:13}):(0,c.jsx)(n.A,{size:13})})]})]})]}),(0,c.jsxs)(u,{children:[(0,c.jsxs)(T,{children:[(0,c.jsx)(y,{children:"Shades"}),(0,c.jsx)(C,{children:G.map(e=>{const r=N(e);return(0,c.jsxs)("div",{children:[(0,c.jsx)(z,{color:r,size:"md",onClick:()=>E((0,d.YL)(e.h,e.s,e.l)),title:r}),(0,c.jsxs)(A,{children:[e.l,"%"]})]},e.l)})})]}),(0,c.jsxs)(T,{children:[(0,c.jsx)(y,{children:"Complementary"}),(0,c.jsxs)(C,{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(z,{color:W,size:"md",title:"Current"}),(0,c.jsx)(A,{children:"base"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(z,{color:N(H),size:"md",onClick:()=>E((0,d.YL)(H.h,H.s,H.l)),title:N(H)}),(0,c.jsx)(A,{children:N(H)})]})]})]}),(0,c.jsxs)(T,{children:[(0,c.jsx)(y,{children:"Analogous"}),(0,c.jsx)(C,{children:[P,{h:Y.h,s:Y.s,l:Y.l},K].map((e,r)=>{const s=N(e);return(0,c.jsxs)("div",{children:[(0,c.jsx)(z,{color:s,size:"md",onClick:()=>E((0,d.YL)(e.h,e.s,e.l)),title:s}),(0,c.jsx)(A,{children:s})]},r)})})]}),(0,c.jsxs)(T,{children:[(0,c.jsx)(y,{children:"Triadic"}),(0,c.jsx)(C,{children:[q,D,J].map((e,r)=>{const s=N(e);return(0,c.jsxs)("div",{children:[(0,c.jsx)(z,{color:s,size:"md",onClick:()=>E((0,d.YL)(e.h,e.s,e.l)),title:s}),(0,c.jsx)(A,{children:s})]},r)})})]}),(0,c.jsxs)(T,{children:[(0,c.jsx)(y,{children:"WCAG Contrast"}),(0,c.jsxs)(M,{children:[(0,c.jsxs)(B,{bg:W,fg:"#ffffff",children:[(0,c.jsx)("div",{style:{fontSize:12,marginBottom:4,opacity:.8},children:"vs White"}),Q,":1",(0,c.jsxs)(R,{pass:Q>=4.5,children:["AA ",Q>=4.5?"✓":"✗"]}),(0,c.jsxs)(R,{pass:Q>=7,children:["AAA ",Q>=7?"✓":"✗"]})]}),(0,c.jsxs)(B,{bg:W,fg:"#000000",children:[(0,c.jsx)("div",{style:{fontSize:12,marginBottom:4,opacity:.7},children:"vs Black"}),U,":1",(0,c.jsxs)(R,{pass:U>=4.5,children:["AA ",U>=4.5?"✓":"✗"]}),(0,c.jsxs)(R,{pass:U>=7,children:["AAA ",U>=7?"✓":"✗"]})]})]})]})]})]})})}}}]);