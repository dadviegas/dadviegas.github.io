"use strict";(self.webpackChunk_atlantis_colorlab=self.webpackChunk_atlantis_colorlab||[]).push([["362"],{3935(e,r,s){s.r(r),s.d(r,{default:()=>R});var o=s(5723),i=s(7991),l=s(6859),n=s.n(l),t=s(6063),a=s(132),d=s(5628);let c=`
  &::-webkit-scrollbar{width:6px}&::-webkit-scrollbar-track{background:transparent}
  &::-webkit-scrollbar-thumb{background:${t.w4.colors.border};border-radius:3px}
  scrollbar-width:thin;scrollbar-color:${t.w4.colors.border} transparent;
`,x=n().div`display:flex;flex:1;overflow:hidden;`,h=n().div`
  width: 300px; flex-shrink: 0; display: flex; flex-direction: column;
  border-right: 1px solid ${t.w4.colors.sidebarBorder}; overflow-y: auto; ${c}
  background: ${t.w4.colors.sidebarBg};
`,p=n().div`
  flex: 1; overflow-y: auto; padding: ${t.w4.spacing.lg}; ${c}
  display: flex; flex-direction: column; gap: ${t.w4.spacing.lg};
`,g=n().div`
  width: 100%; height: 120px; background: ${e=>e.color}; flex-shrink: 0;
`,b=n().div`padding: ${t.w4.spacing.md}; display: flex; flex-direction: column; gap: ${t.w4.spacing.sm};`,u=n().div`font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: ${t.w4.colors.mainTextMuted};`,f=n().div`display: flex; align-items: center; gap: ${t.w4.spacing.sm};`,m=n().input`
  flex: 1; background: ${t.w4.colors.mainBg}; border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm}; padding: 6px 10px; font-size: 13px;
  font-family: ${t.w4.typography.fontFamilyMono}; color: ${t.w4.colors.mainText};
  outline: none; transition: border-color ${t.w4.transitions.base};
  &:focus { border-color: ${t.w4.colors.accent}; }
`,w=n().input`
  width: 36px; height: 36px; padding: 2px; border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm}; background: ${t.w4.colors.mainBg};
  cursor: pointer; &::-webkit-color-swatch-wrapper { padding: 0; }
  &::-webkit-color-swatch { border: none; border-radius: 3px; }
`,j=n().div`display: flex; gap: 6px;`,$=n().input`
  width: 0; flex: 1; background: ${t.w4.colors.mainBg}; border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm}; padding: 6px 8px; font-size: 13px;
  font-family: ${t.w4.typography.fontFamilyMono}; color: ${t.w4.colors.mainText};
  outline: none; text-align: center;
  &:focus { border-color: ${t.w4.colors.accent}; }
`,v=n().button`
  display: flex; align-items: center; justify-content: center; width: 30px; height: 30px;
  background: transparent; border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm}; color: ${e=>e.copied?"#3fb950":t.w4.colors.mainTextMuted};
  cursor: pointer; flex-shrink: 0; transition: all ${t.w4.transitions.base};
  &:hover { border-color: ${t.w4.colors.accent}; color: ${t.w4.colors.mainText}; }
`,k=n().div`font-size: 11px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: ${t.w4.colors.mainTextMuted}; margin-bottom: ${t.w4.spacing.sm};`,y=n().div`display: flex; gap: 6px; flex-wrap: wrap;`,C=n().button`
  width: ${e=>"sm"===e.size?"32px":"48px"};
  height: ${e=>"sm"===e.size?"32px":"48px"};
  background: ${e=>e.color}; border: 2px solid transparent; border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer; transition: transform ${t.w4.transitions.fast}, border-color ${t.w4.transitions.base}; flex-shrink: 0;
  &:hover { transform: scale(1.1); border-color: rgba(255,255,255,0.3); }
`,z=n().div`font-size: 11px; color: ${t.w4.colors.mainTextMuted}; margin-top: 3px; font-family: ${t.w4.typography.fontFamilyMono};`,A=n().div`display: flex; gap: ${t.w4.spacing.md};`,M=n().div`
  flex: 1; padding: ${t.w4.spacing.md}; border-radius: ${t.w4.borderRadius.md};
  background: ${e=>e.bg}; color: ${e=>e.fg}; font-size: 14px; font-weight: 600;
`,T=n().span`
  display: inline-flex; align-items: center; padding: 1px 6px; border-radius: 3px; font-size: 11px;
  font-weight: 700; font-family: ${t.w4.typography.fontFamily}; margin-left: 6px;
  background: ${e=>e.pass?"rgba(63,185,80,0.2)":"rgba(248,113,113,0.2)"};
  color: ${e=>e.pass?"#3fb950":"#f87171"};
  border: 1px solid ${e=>e.pass?"rgba(63,185,80,0.4)":"rgba(248,113,113,0.4)"};
`,B=n().div`background: ${t.w4.colors.surface}; border: 1px solid ${t.w4.colors.border}; border-radius: ${t.w4.borderRadius.md}; padding: ${t.w4.spacing.lg};`,L="toolkit:colorlab";function R({topBarRight:e}){let[r,s]=(0,i.useState)("#388bfd"),{copied:l,copy:n}=function(){let[e,r]=(0,i.useState)(null);return{copied:e,copy:(0,i.useCallback)((e,s)=>{navigator.clipboard.writeText(e).catch(()=>{}),r(s),setTimeout(()=>r(null),1500)},[])}}(),c=(0,i.useRef)(!1);(0,i.useEffect)(()=>{(0,t.PL)(L).then(e=>{e&&s(e),c.current=!0})},[]),(0,i.useEffect)(()=>{if(!c.current)return;let e=setTimeout(()=>(0,t.Is)(L,r),400);return()=>clearTimeout(e)},[r]);let I=(0,d.E2)(r)??{r:56,g:139,b:253},F=(0,d.K6)(I.r,I.g,I.b),S=(0,d.Ob)(I.r,I.g,I.b),Y=(0,i.useCallback)(e=>{s((0,d.Ob)(e.r,e.g,e.b))},[]),W=e=>{/^#[0-9a-fA-F]{3}$/.test(e)||/^#[0-9a-fA-F]{6}$/.test(e)?s(e):/^#?[0-9a-fA-F]{0,6}$/.test(e)&&s(e.startsWith("#")?e:"#"+e)},E=(e,r)=>{let s=Math.max(0,Math.min(255,parseInt(r)||0));Y({...I,[e]:s})},O=(e,r)=>{let s=Math.max(0,Math.min("h"===e?360:100,parseInt(r)||0)),o={...F,[e]:s};Y((0,d.YL)(o.h,o.s,o.l))},_=(0,d.iW)(F.h,F.s),G=(0,d.Hg)(F.h,F.s,F.l),[H,P]=(0,d.mW)(F.h,F.s,F.l),[K,q,D]=(0,d.Lt)(F.h,F.s,F.l),J=e=>(0,d.Ob)(...Object.values((0,d.YL)(e.h,e.s,e.l))),N=(0,d.eM)(I,{r:255,g:255,b:255}),Q=(0,d.eM)(I,{r:0,g:0,b:0});return(0,o.jsx)(a.PE,{title:"Color Lab",sidebar:(0,o.jsx)(a.tz,{activeAppId:"colorlab"}),topBarRight:e,children:(0,o.jsxs)(x,{children:[(0,o.jsxs)(h,{children:[(0,o.jsx)(g,{color:S}),(0,o.jsxs)(b,{children:[(0,o.jsx)(u,{children:"Picker"}),(0,o.jsxs)(f,{children:[(0,o.jsx)(w,{type:"color",value:S,onChange:e=>W(e.target.value)}),(0,o.jsx)(m,{value:r,onChange:e=>W(e.target.value),spellCheck:!1}),(0,o.jsx)(v,{copied:"hex"===l,onClick:()=>n(S,"hex"),children:"hex"===l?(0,o.jsx)(a.In,{name:"check",size:13}):(0,o.jsx)(a.In,{name:"copy",size:13})})]})]}),(0,o.jsxs)(b,{children:[(0,o.jsx)(u,{children:"RGB"}),(0,o.jsxs)(f,{children:[(0,o.jsxs)(j,{children:[(0,o.jsx)($,{value:I.r,onChange:e=>E("r",e.target.value),title:"Red"}),(0,o.jsx)($,{value:I.g,onChange:e=>E("g",e.target.value),title:"Green"}),(0,o.jsx)($,{value:I.b,onChange:e=>E("b",e.target.value),title:"Blue"})]}),(0,o.jsx)(v,{copied:"rgb"===l,onClick:()=>n(`rgb(${I.r}, ${I.g}, ${I.b})`,"rgb"),children:"rgb"===l?(0,o.jsx)(a.In,{name:"check",size:13}):(0,o.jsx)(a.In,{name:"copy",size:13})})]})]}),(0,o.jsxs)(b,{children:[(0,o.jsx)(u,{children:"HSL"}),(0,o.jsxs)(f,{children:[(0,o.jsxs)(j,{children:[(0,o.jsx)($,{value:F.h,onChange:e=>O("h",e.target.value),title:"Hue"}),(0,o.jsx)($,{value:F.s,onChange:e=>O("s",e.target.value),title:"Saturation"}),(0,o.jsx)($,{value:F.l,onChange:e=>O("l",e.target.value),title:"Lightness"})]}),(0,o.jsx)(v,{copied:"hsl"===l,onClick:()=>n(`hsl(${F.h}, ${F.s}%, ${F.l}%)`,"hsl"),children:"hsl"===l?(0,o.jsx)(a.In,{name:"check",size:13}):(0,o.jsx)(a.In,{name:"copy",size:13})})]})]})]}),(0,o.jsxs)(p,{children:[(0,o.jsxs)(B,{children:[(0,o.jsx)(k,{children:"Shades"}),(0,o.jsx)(y,{children:_.map(e=>{let r=J(e);return(0,o.jsxs)("div",{children:[(0,o.jsx)(C,{color:r,size:"md",onClick:()=>Y((0,d.YL)(e.h,e.s,e.l)),title:r}),(0,o.jsxs)(z,{children:[e.l,"%"]})]},e.l)})})]}),(0,o.jsxs)(B,{children:[(0,o.jsx)(k,{children:"Complementary"}),(0,o.jsxs)(y,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(C,{color:S,size:"md",title:"Current"}),(0,o.jsx)(z,{children:"base"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(C,{color:J(G),size:"md",onClick:()=>Y((0,d.YL)(G.h,G.s,G.l)),title:J(G)}),(0,o.jsx)(z,{children:J(G)})]})]})]}),(0,o.jsxs)(B,{children:[(0,o.jsx)(k,{children:"Analogous"}),(0,o.jsx)(y,{children:[H,{h:F.h,s:F.s,l:F.l},P].map((e,r)=>{let s=J(e);return(0,o.jsxs)("div",{children:[(0,o.jsx)(C,{color:s,size:"md",onClick:()=>Y((0,d.YL)(e.h,e.s,e.l)),title:s}),(0,o.jsx)(z,{children:s})]},r)})})]}),(0,o.jsxs)(B,{children:[(0,o.jsx)(k,{children:"Triadic"}),(0,o.jsx)(y,{children:[K,q,D].map((e,r)=>{let s=J(e);return(0,o.jsxs)("div",{children:[(0,o.jsx)(C,{color:s,size:"md",onClick:()=>Y((0,d.YL)(e.h,e.s,e.l)),title:s}),(0,o.jsx)(z,{children:s})]},r)})})]}),(0,o.jsxs)(B,{children:[(0,o.jsx)(k,{children:"WCAG Contrast"}),(0,o.jsxs)(A,{children:[(0,o.jsxs)(M,{bg:S,fg:"#ffffff",children:[(0,o.jsx)("div",{style:{fontSize:12,marginBottom:4,opacity:.8},children:"vs White"}),N,":1",(0,o.jsxs)(T,{pass:N>=4.5,children:["AA ",N>=4.5?"✓":"✗"]}),(0,o.jsxs)(T,{pass:N>=7,children:["AAA ",N>=7?"✓":"✗"]})]}),(0,o.jsxs)(M,{bg:S,fg:"#000000",children:[(0,o.jsx)("div",{style:{fontSize:12,marginBottom:4,opacity:.7},children:"vs Black"}),Q,":1",(0,o.jsxs)(T,{pass:Q>=4.5,children:["AA ",Q>=4.5?"✓":"✗"]}),(0,o.jsxs)(T,{pass:Q>=7,children:["AAA ",Q>=7?"✓":"✗"]})]})]})]})]})]})})}}}]);