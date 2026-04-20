"use strict";(self.webpackChunk_atlantis_colorlab=self.webpackChunk_atlantis_colorlab||[]).push([["6362"],{3935(r,e,s){s.r(e),s.d(e,{default:()=>S});var o=s(5723),i=s(7991),l=s(6859),t=s.n(l),n=s(246),a=s(1638),d=s(5609),c=s(320),x=s(5628);let h=`
  &::-webkit-scrollbar{width:6px}&::-webkit-scrollbar-track{background:transparent}
  &::-webkit-scrollbar-thumb{background:${n.w4.colors.border};border-radius:3px}
  scrollbar-width:thin;scrollbar-color:${n.w4.colors.border} transparent;
`,p=t().div`display:flex;flex:1;overflow:hidden;`,g=t().div`
  width: 300px; flex-shrink: 0; display: flex; flex-direction: column;
  border-right: 1px solid ${n.w4.colors.sidebarBorder}; overflow-y: auto; ${h}
  background: ${n.w4.colors.sidebarBg};
`,b=t().div`
  flex: 1; overflow-y: auto; padding: ${n.w4.spacing.lg}; ${h}
  display: flex; flex-direction: column; gap: ${n.w4.spacing.lg};
`,u=t().div`
  width: 100%; height: 120px; background: ${r=>r.color}; flex-shrink: 0;
`,f=t().div`padding: ${n.w4.spacing.md}; display: flex; flex-direction: column; gap: ${n.w4.spacing.sm};`,j=t().div`font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: ${n.w4.colors.mainTextMuted};`,m=t().div`display: flex; align-items: center; gap: ${n.w4.spacing.sm};`,w=t().input`
  flex: 1; background: ${n.w4.colors.mainBg}; border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm}; padding: 6px 10px; font-size: 13px;
  font-family: ${n.w4.typography.fontFamilyMono}; color: ${n.w4.colors.mainText};
  outline: none; transition: border-color 0.15s;
  &:focus { border-color: ${n.w4.colors.accent}; }
`,$=t().input`
  width: 36px; height: 36px; padding: 2px; border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm}; background: ${n.w4.colors.mainBg};
  cursor: pointer; &::-webkit-color-swatch-wrapper { padding: 0; }
  &::-webkit-color-swatch { border: none; border-radius: 3px; }
`,v=t().div`display: flex; gap: 6px;`,k=t().input`
  width: 0; flex: 1; background: ${n.w4.colors.mainBg}; border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm}; padding: 6px 8px; font-size: 13px;
  font-family: ${n.w4.typography.fontFamilyMono}; color: ${n.w4.colors.mainText};
  outline: none; text-align: center;
  &:focus { border-color: ${n.w4.colors.accent}; }
`,y=t().button`
  display: flex; align-items: center; justify-content: center; width: 30px; height: 30px;
  background: transparent; border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm}; color: ${r=>r.copied?"#3fb950":n.w4.colors.mainTextMuted};
  cursor: pointer; flex-shrink: 0; transition: all 0.15s;
  &:hover { border-color: ${n.w4.colors.accent}; color: ${n.w4.colors.mainText}; }
`,C=t().div`font-size: 11px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: ${n.w4.colors.mainTextMuted}; margin-bottom: ${n.w4.spacing.sm};`,z=t().div`display: flex; gap: 6px; flex-wrap: wrap;`,A=t().button`
  width: ${r=>"sm"===r.size?"32px":"48px"};
  height: ${r=>"sm"===r.size?"32px":"48px"};
  background: ${r=>r.color}; border: 2px solid transparent; border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer; transition: transform 0.1s, border-color 0.15s; flex-shrink: 0;
  &:hover { transform: scale(1.1); border-color: rgba(255,255,255,0.3); }
`,M=t().div`font-size: 10px; color: ${n.w4.colors.mainTextMuted}; margin-top: 3px; font-family: ${n.w4.typography.fontFamilyMono};`,T=t().div`display: flex; gap: ${n.w4.spacing.md};`,B=t().div`
  flex: 1; padding: ${n.w4.spacing.md}; border-radius: ${n.w4.borderRadius.md};
  background: ${r=>r.bg}; color: ${r=>r.fg}; font-size: 14px; font-weight: 600;
`,L=t().span`
  display: inline-flex; align-items: center; padding: 1px 6px; border-radius: 3px; font-size: 10px;
  font-weight: 700; font-family: ${n.w4.typography.fontFamily}; margin-left: 6px;
  background: ${r=>r.pass?"rgba(63,185,80,0.2)":"rgba(248,113,113,0.2)"};
  color: ${r=>r.pass?"#3fb950":"#f87171"};
  border: 1px solid ${r=>r.pass?"rgba(63,185,80,0.4)":"rgba(248,113,113,0.4)"};
`,R=t().div`background: ${n.w4.colors.surface}; border: 1px solid ${n.w4.colors.border}; border-radius: ${n.w4.borderRadius.md}; padding: ${n.w4.spacing.lg};`,F="toolkit:colorlab";function S({topBarRight:r}){let[e,s]=(0,i.useState)("#388bfd"),{copied:l,copy:t}=function(){let[r,e]=(0,i.useState)(null);return{copied:r,copy:(0,i.useCallback)((r,s)=>{navigator.clipboard.writeText(r).catch(()=>{}),e(s),setTimeout(()=>e(null),1500)},[])}}(),h=(0,i.useRef)(!1);(0,i.useEffect)(()=>{(0,n.PL)(F).then(r=>{r&&s(r),h.current=!0})},[]),(0,i.useEffect)(()=>{if(!h.current)return;let r=setTimeout(()=>(0,n.Is)(F,e),400);return()=>clearTimeout(r)},[e]);let Y=(0,x.E2)(e)??{r:56,g:139,b:253},W=(0,x.K6)(Y.r,Y.g,Y.b),E=(0,x.Ob)(Y.r,Y.g,Y.b),I=(0,i.useCallback)(r=>{s((0,x.Ob)(r.r,r.g,r.b))},[]),O=r=>{/^#[0-9a-fA-F]{3}$/.test(r)||/^#[0-9a-fA-F]{6}$/.test(r)?s(r):/^#?[0-9a-fA-F]{0,6}$/.test(r)&&s(r.startsWith("#")?r:"#"+r)},_=(r,e)=>{let s=Math.max(0,Math.min(255,parseInt(e)||0));I({...Y,[r]:s})},G=(r,e)=>{let s=Math.max(0,Math.min("h"===r?360:100,parseInt(e)||0)),o={...W,[r]:s};I((0,x.YL)(o.h,o.s,o.l))},H=(0,x.iW)(W.h,W.s),P=(0,x.Hg)(W.h,W.s,W.l),[K,q]=(0,x.mW)(W.h,W.s,W.l),[D,J,N]=(0,x.Lt)(W.h,W.s,W.l),Q=r=>(0,x.Ob)(...Object.values((0,x.YL)(r.h,r.s,r.l))),U=(0,x.eM)(Y,{r:255,g:255,b:255}),V=(0,x.eM)(Y,{r:0,g:0,b:0});return(0,o.jsx)(n.PE,{title:"Color Lab",sidebar:(0,o.jsx)(a.tz,{activeAppId:"colorlab"}),topBarRight:r,children:(0,o.jsxs)(p,{children:[(0,o.jsxs)(g,{children:[(0,o.jsx)(u,{color:E}),(0,o.jsxs)(f,{children:[(0,o.jsx)(j,{children:"Picker"}),(0,o.jsxs)(m,{children:[(0,o.jsx)($,{type:"color",value:E,onChange:r=>O(r.target.value)}),(0,o.jsx)(w,{value:e,onChange:r=>O(r.target.value),spellCheck:!1}),(0,o.jsx)(y,{copied:"hex"===l,onClick:()=>t(E,"hex"),children:"hex"===l?(0,o.jsx)(d.A,{size:13}):(0,o.jsx)(c.A,{size:13})})]})]}),(0,o.jsxs)(f,{children:[(0,o.jsx)(j,{children:"RGB"}),(0,o.jsxs)(m,{children:[(0,o.jsxs)(v,{children:[(0,o.jsx)(k,{value:Y.r,onChange:r=>_("r",r.target.value),title:"Red"}),(0,o.jsx)(k,{value:Y.g,onChange:r=>_("g",r.target.value),title:"Green"}),(0,o.jsx)(k,{value:Y.b,onChange:r=>_("b",r.target.value),title:"Blue"})]}),(0,o.jsx)(y,{copied:"rgb"===l,onClick:()=>t(`rgb(${Y.r}, ${Y.g}, ${Y.b})`,"rgb"),children:"rgb"===l?(0,o.jsx)(d.A,{size:13}):(0,o.jsx)(c.A,{size:13})})]})]}),(0,o.jsxs)(f,{children:[(0,o.jsx)(j,{children:"HSL"}),(0,o.jsxs)(m,{children:[(0,o.jsxs)(v,{children:[(0,o.jsx)(k,{value:W.h,onChange:r=>G("h",r.target.value),title:"Hue"}),(0,o.jsx)(k,{value:W.s,onChange:r=>G("s",r.target.value),title:"Saturation"}),(0,o.jsx)(k,{value:W.l,onChange:r=>G("l",r.target.value),title:"Lightness"})]}),(0,o.jsx)(y,{copied:"hsl"===l,onClick:()=>t(`hsl(${W.h}, ${W.s}%, ${W.l}%)`,"hsl"),children:"hsl"===l?(0,o.jsx)(d.A,{size:13}):(0,o.jsx)(c.A,{size:13})})]})]})]}),(0,o.jsxs)(b,{children:[(0,o.jsxs)(R,{children:[(0,o.jsx)(C,{children:"Shades"}),(0,o.jsx)(z,{children:H.map(r=>{let e=Q(r);return(0,o.jsxs)("div",{children:[(0,o.jsx)(A,{color:e,size:"md",onClick:()=>I((0,x.YL)(r.h,r.s,r.l)),title:e}),(0,o.jsxs)(M,{children:[r.l,"%"]})]},r.l)})})]}),(0,o.jsxs)(R,{children:[(0,o.jsx)(C,{children:"Complementary"}),(0,o.jsxs)(z,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(A,{color:E,size:"md",title:"Current"}),(0,o.jsx)(M,{children:"base"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(A,{color:Q(P),size:"md",onClick:()=>I((0,x.YL)(P.h,P.s,P.l)),title:Q(P)}),(0,o.jsx)(M,{children:Q(P)})]})]})]}),(0,o.jsxs)(R,{children:[(0,o.jsx)(C,{children:"Analogous"}),(0,o.jsx)(z,{children:[K,{h:W.h,s:W.s,l:W.l},q].map((r,e)=>{let s=Q(r);return(0,o.jsxs)("div",{children:[(0,o.jsx)(A,{color:s,size:"md",onClick:()=>I((0,x.YL)(r.h,r.s,r.l)),title:s}),(0,o.jsx)(M,{children:s})]},e)})})]}),(0,o.jsxs)(R,{children:[(0,o.jsx)(C,{children:"Triadic"}),(0,o.jsx)(z,{children:[D,J,N].map((r,e)=>{let s=Q(r);return(0,o.jsxs)("div",{children:[(0,o.jsx)(A,{color:s,size:"md",onClick:()=>I((0,x.YL)(r.h,r.s,r.l)),title:s}),(0,o.jsx)(M,{children:s})]},e)})})]}),(0,o.jsxs)(R,{children:[(0,o.jsx)(C,{children:"WCAG Contrast"}),(0,o.jsxs)(T,{children:[(0,o.jsxs)(B,{bg:E,fg:"#ffffff",children:[(0,o.jsx)("div",{style:{fontSize:12,marginBottom:4,opacity:.8},children:"vs White"}),U,":1",(0,o.jsxs)(L,{pass:U>=4.5,children:["AA ",U>=4.5?"✓":"✗"]}),(0,o.jsxs)(L,{pass:U>=7,children:["AAA ",U>=7?"✓":"✗"]})]}),(0,o.jsxs)(B,{bg:E,fg:"#000000",children:[(0,o.jsx)("div",{style:{fontSize:12,marginBottom:4,opacity:.7},children:"vs Black"}),V,":1",(0,o.jsxs)(L,{pass:V>=4.5,children:["AA ",V>=4.5?"✓":"✗"]}),(0,o.jsxs)(L,{pass:V>=7,children:["AAA ",V>=7?"✓":"✗"]})]})]})]})]})]})})}}}]);