"use strict";(self.webpackChunk_atlantis_cronbuilder=self.webpackChunk_atlantis_cronbuilder||[]).push([[36],{6036(e,o,r){r.r(o),r.d(o,{default:()=>V});var n=r(7359),i=r(3233),s=r(894),t=r(679),a=r(1783),l=r(1344),d=r(6480),c=r(6022),p=r(9336),u=r(5723);const x=`&::-webkit-scrollbar{width:6px}&::-webkit-scrollbar-track{background:transparent}&::-webkit-scrollbar-thumb{background:${s.w4.colors.border};border-radius:3px}`,f=i.default.button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${s.w4.colors.accent};border-radius:${s.w4.borderRadius.md};color:${s.w4.colors.accent};font-size:${s.w4.typography.fontSizeBase};font-family:${s.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,m=i.default.div`display:flex;flex-direction:column;flex:1;overflow:hidden;padding:${s.w4.spacing.lg};gap:${s.w4.spacing.lg};`,g=i.default.div`
  display:flex;align-items:center;gap:${s.w4.spacing.md};flex-shrink:0;
  background:${s.w4.colors.surface};border:1px solid ${s.w4.colors.border};
  border-radius:${s.w4.borderRadius.md};padding:${s.w4.spacing.sm} ${s.w4.spacing.md};
`,w=i.default.input`
  flex:1;background:transparent;border:none;outline:none;
  font-family:${s.w4.typography.fontFamilyMono};font-size:18px;font-weight:600;
  color:${s.w4.colors.mainText};letter-spacing:0.04em;
`,h=i.default.div`
  font-size:13px;color:${s.w4.colors.mainTextMuted};white-space:nowrap;
`,b=i.default.div`
  display:grid;grid-template-columns:repeat(5,1fr);gap:${s.w4.spacing.md};flex-shrink:0;
`,y=i.default.div`
  background:${s.w4.colors.surface};border:1px solid ${s.w4.colors.border};
  border-radius:${s.w4.borderRadius.md};overflow:hidden;
`,v=i.default.div`
  padding:${s.w4.spacing.sm} ${s.w4.spacing.md};border-bottom:1px solid ${s.w4.colors.border};
  background:${s.w4.colors.mainBg};
`,$=i.default.div`font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${s.w4.colors.mainTextMuted};`,j=i.default.div`font-size:16px;font-weight:600;font-family:${s.w4.typography.fontFamilyMono};color:${s.w4.colors.accent};margin-top:2px;`,k=i.default.div`padding:${s.w4.spacing.sm};`,z=i.default.div`display:flex;gap:2px;margin-bottom:${s.w4.spacing.sm};`,T=i.default.button`
  flex:1;padding:3px 0;font-size:10px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;
  font-family:${s.w4.typography.fontFamily};border:none;border-radius:3px;cursor:pointer;
  background:${e=>e.active?s.w4.colors.accent:"transparent"};
  color:${e=>e.active?"#fff":s.w4.colors.mainTextMuted};
  transition:all 0.12s;
  &:hover{background:${e=>e.active?s.w4.colors.accent:s.w4.colors.border};}
`,M=i.default.input`
  width:100%;background:${s.w4.colors.mainBg};border:1px solid ${s.w4.colors.border};
  border-radius:${s.w4.borderRadius.sm};padding:4px 8px;font-size:12px;
  font-family:${s.w4.typography.fontFamilyMono};color:${s.w4.colors.mainText};outline:none;
  &:focus{border-color:${s.w4.colors.accent};}
`,C=i.default.div`display:flex;align-items:center;gap:4px;font-size:11px;color:${s.w4.colors.mainTextMuted};`,F=i.default.div`
  display:grid;grid-template-columns:repeat(${e=>e.cols},1fr);gap:3px;max-height:100px;overflow-y:auto;${x}
`,S=i.default.button`
  padding:2px 0;font-size:10px;text-align:center;font-family:${s.w4.typography.fontFamilyMono};
  border:1px solid ${e=>e.active?s.w4.colors.accent:s.w4.colors.border};border-radius:3px;
  background:${e=>e.active?"rgba(56,139,253,0.15)":"transparent"};
  color:${e=>e.active?s.w4.colors.accent:s.w4.colors.mainTextMuted};
  cursor:pointer;transition:all 0.1s;
`,R=i.default.div`display:flex;gap:${s.w4.spacing.lg};flex:1;min-height:0;overflow:hidden;`,E=i.default.div`
  flex:1;background:${s.w4.colors.surface};border:1px solid ${s.w4.colors.border};
  border-radius:${s.w4.borderRadius.md};padding:${s.w4.spacing.lg};display:flex;
  flex-direction:column;gap:${s.w4.spacing.sm};
`,B=i.default.div`font-size:16px;font-weight:600;color:${s.w4.colors.mainText};`,I=i.default.div`font-size:12px;color:${s.w4.colors.mainTextMuted};`,L=i.default.div`
  width:280px;flex-shrink:0;background:${s.w4.colors.surface};border:1px solid ${s.w4.colors.border};
  border-radius:${s.w4.borderRadius.md};overflow:hidden;
`,A=i.default.div`
  display:flex;align-items:center;gap:6px;padding:${s.w4.spacing.sm} ${s.w4.spacing.md};
  border-bottom:1px solid ${s.w4.colors.border};background:${s.w4.colors.mainBg};
  font-size:11px;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;
  color:${s.w4.colors.mainTextMuted};
`,N=i.default.div`overflow-y:auto;${x}`,_=i.default.div`
  display:flex;align-items:center;gap:${s.w4.spacing.sm};
  padding:${s.w4.spacing.sm} ${s.w4.spacing.md};border-bottom:1px solid ${s.w4.colors.border};
  font-size:12px;font-family:${s.w4.typography.fontFamilyMono};
  &:last-child{border-bottom:none;}
`,D=i.default.span`color:${s.w4.colors.mainTextMuted};min-width:18px;`,P=i.default.span`color:${s.w4.colors.mainText};`,U=i.default.div`position:relative;`,X=i.default.button`display:flex;align-items:center;gap:4px;padding:0 ${s.w4.spacing.sm};height:30px;background:transparent;border:1px solid ${s.w4.colors.border};border-radius:${s.w4.borderRadius.sm};color:${s.w4.colors.mainTextMuted};font-size:12px;font-family:${s.w4.typography.fontFamily};cursor:pointer;&:hover{border-color:${s.w4.colors.accent};color:${s.w4.colors.mainText};}`,Y=i.default.div`position:absolute;top:calc(100% + 4px);right:0;background:${s.w4.colors.surface};border:1px solid ${s.w4.colors.border};border-radius:${s.w4.borderRadius.md};box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:200;min-width:200px;overflow:hidden;`,H=i.default.button`display:block;width:100%;text-align:left;padding:${s.w4.spacing.sm} ${s.w4.spacing.md};background:transparent;border:none;color:${s.w4.colors.mainText};font-size:13px;font-family:${s.w4.typography.fontFamily};cursor:pointer;&:hover{background:${s.w4.colors.mainBg};}`,J=["minute","hour","day","month","weekday"];function K({fieldName:e,field:o,onChange:r}){const n=c.o[e],i=Array.from({length:n.max-n.min+1},(e,o)=>o+n.min),s=o=>"weekday"===e?c.mZ[o]:"month"===e?c.oy[o-1]:String(o),t="minute"===e||"hour"===e||"weekday"===e?4:"month"===e?3:4;return(0,u.jsxs)(y,{children:[(0,u.jsxs)(v,{children:[(0,u.jsx)($,{children:c.XY[e]}),(0,u.jsx)(j,{children:(0,c.V7)(o)})]}),(0,u.jsxs)(k,{children:[(0,u.jsx)(z,{children:["every","specific","range","step"].map(e=>(0,u.jsx)(T,{active:o.mode===e,onClick:()=>{return i=e,void r({...o,mode:i,values:"specific"===i?[n.min]:[]});var i},children:"every"===e?"*":"specific"===e?"#":"range"===e?"—":"/N"},e))}),"every"===o.mode&&(0,u.jsxs)(I,{style:{fontSize:11},children:["Every ",c.XY[e].toLowerCase()]}),"step"===o.mode&&(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:(0,u.jsx)(M,{type:"number",min:1,max:n.max,value:o.step,onChange:e=>r({...o,step:Math.max(1,parseInt(e.target.value)||1)}),placeholder:"step"})}),"range"===o.mode&&(0,u.jsxs)(C,{children:[(0,u.jsx)(M,{type:"number",min:n.min,max:n.max,value:o.rangeFrom,onChange:e=>r({...o,rangeFrom:parseInt(e.target.value)||n.min}),style:{width:56}}),(0,u.jsx)("span",{children:"–"}),(0,u.jsx)(M,{type:"number",min:n.min,max:n.max,value:o.rangeTo,onChange:e=>r({...o,rangeTo:parseInt(e.target.value)||n.max}),style:{width:56}})]}),"specific"===o.mode&&(0,u.jsx)(F,{cols:t,children:i.map(e=>(0,u.jsx)(S,{active:o.values.includes(e),onClick:()=>(e=>{const n=o.values.includes(e)?o.values.filter(o=>o!==e):[...o.values,e].sort((e,o)=>e-o);r({...o,values:n.length?n:[e]})})(e),children:s(e)},e))})]})]})}const O="toolkit:cronbuilder";function V({topBarRight:e}){const[o,r]=(0,n.useState)("* * * * *"),[i,x]=(0,n.useState)(!1),[y,v]=(0,n.useState)(!1),$=(0,n.useRef)(null),j=(0,n.useRef)(!1);(0,n.useEffect)(()=>{(0,s.PL)(O).then(e=>{e&&r(e),j.current=!0})},[]),(0,n.useEffect)(()=>{if(!j.current)return;const e=setTimeout(()=>(0,s.Is)(O,o),400);return()=>clearTimeout(e)},[o]),(0,n.useEffect)(()=>{const e=e=>{$.current&&!$.current.contains(e.target)&&x(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const k=(0,n.useMemo)(()=>(0,c.E$)(o),[o]),z=(0,n.useMemo)(()=>(0,c.U)(o),[o]),T=(0,n.useMemo)(()=>k.valid?(0,c.Cy)(o,new Date,8):[],[o,k.valid]),M=(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,u.jsxs)(X,{onClick:()=>{r("* * * * *"),(0,s.Is)(O,"")},children:[(0,u.jsx)(l.A,{size:13})," New"]}),(0,u.jsx)(s.UO,{appId:"cronbuilder",onLoad:r}),(0,u.jsxs)(f,{onClick:()=>v(!0),children:[(0,u.jsx)(d.A,{size:14}),"Save"]}),(0,u.jsxs)(U,{ref:$,children:[(0,u.jsxs)(X,{onClick:()=>x(e=>!e),children:["Examples ",(0,u.jsx)(t.A,{size:12})]}),i&&(0,u.jsx)(Y,{children:p.k.map(e=>(0,u.jsxs)(H,{onClick:()=>{r(e.expression),x(!1)},children:[(0,u.jsx)("div",{children:e.label}),(0,u.jsx)("div",{style:{fontSize:11,color:s.w4.colors.mainTextMuted},children:e.expression})]},e.label))})]}),e]});return(0,u.jsxs)(s.PE,{title:"Cron Builder",sidebar:(0,u.jsx)(s.tz,{activeAppId:"cronbuilder"}),topBarRight:M,children:[y&&(0,u.jsx)(s.MJ,{onSave:async e=>{v(!1),await(0,s.KL)("cronbuilder",e,o)},onCancel:()=>v(!1)}),(0,u.jsxs)(m,{children:[(0,u.jsxs)(g,{children:[(0,u.jsx)(w,{value:o,onChange:e=>{return o=e.target.value,void r(o);var o},spellCheck:!1}),(0,u.jsx)(h,{children:k.valid?z:(0,u.jsx)("span",{style:{color:"#f87171"},children:k.error})})]}),(0,u.jsx)(b,{children:J.map(e=>(0,u.jsx)(K,{fieldName:e,field:k.fields[e],onChange:o=>((e,o)=>{const n={...k.fields,[e]:o};r((0,c.nR)(n))})(e,o)},e))}),(0,u.jsxs)(R,{children:[(0,u.jsxs)(E,{children:[(0,u.jsx)("div",{style:{fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:s.w4.colors.mainTextMuted},children:"Description"}),(0,u.jsx)(B,{children:z}),(0,u.jsx)(I,{children:(0,u.jsx)("span",{style:{fontFamily:s.w4.typography.fontFamilyMono,color:s.w4.colors.accent},children:o})}),(0,u.jsxs)("div",{style:{marginTop:"auto",fontSize:12,color:s.w4.colors.mainTextMuted,lineHeight:1.8},children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("code",{style:{color:s.w4.colors.accent},children:"*"})," — every value"]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("code",{style:{color:s.w4.colors.accent},children:"*/n"})," — every n values"]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("code",{style:{color:s.w4.colors.accent},children:"a-b"})," — range from a to b"]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("code",{style:{color:s.w4.colors.accent},children:"a,b,c"})," — specific values"]})]})]}),(0,u.jsxs)(L,{children:[(0,u.jsxs)(A,{children:[(0,u.jsx)(a.A,{size:12})," Next 8 runs"]}),(0,u.jsxs)(N,{children:[T.map((e,o)=>(0,u.jsxs)(_,{index:o,children:[(0,u.jsxs)(D,{children:["#",o+1]}),(0,u.jsx)(P,{children:e.toLocaleString()})]},o)),!k.valid&&(0,u.jsx)(_,{index:0,children:(0,u.jsx)("span",{style:{color:"#f87171",fontSize:11},children:"Fix expression to see next runs"})})]})]})]})]})]})}}}]);
//# sourceMappingURL=36.fe6ec8f727a00050b383.js.map