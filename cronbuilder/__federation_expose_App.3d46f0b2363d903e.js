"use strict";(self.webpackChunk_atlantis_cronbuilder=self.webpackChunk_atlantis_cronbuilder||[]).push([["362"],{3935(e,o,r){r.r(o),r.d(o,{default:()=>K});var n=r(5723),i=r(7991),s=r(6859),t=r.n(s),a=r(6063),l=r(997),d=r(9867),c=r(5151);let p=`&::-webkit-scrollbar{width:6px}&::-webkit-scrollbar-track{background:transparent}&::-webkit-scrollbar-thumb{background:${a.w4.colors.border};border-radius:3px}`,x=t().button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${a.w4.colors.accent};border-radius:${a.w4.borderRadius.md};color:${a.w4.colors.accent};font-size:${a.w4.typography.fontSizeBase};font-family:${a.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background ${a.w4.transitions.base};white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,m=t().div`display:flex;flex-direction:column;flex:1;overflow:hidden;padding:${a.w4.spacing.lg};gap:${a.w4.spacing.lg};`,u=t().div`
  display:flex;align-items:center;gap:${a.w4.spacing.md};flex-shrink:0;
  background:${a.w4.colors.surface};border:1px solid ${a.w4.colors.border};
  border-radius:${a.w4.borderRadius.md};padding:${a.w4.spacing.sm} ${a.w4.spacing.md};
`,g=t().input`
  flex:1;background:transparent;border:none;outline:none;
  font-family:${a.w4.typography.fontFamilyMono};font-size:18px;font-weight:600;
  color:${a.w4.colors.mainText};letter-spacing:0.04em;
`,w=t().div`
  font-size:13px;color:${a.w4.colors.mainTextMuted};white-space:nowrap;
`,f=t().div`
  display:grid;grid-template-columns:repeat(5,1fr);gap:${a.w4.spacing.md};flex-shrink:0;
`,h=t().div`
  background:${a.w4.colors.surface};border:1px solid ${a.w4.colors.border};
  border-radius:${a.w4.borderRadius.md};overflow:hidden;
`,b=t().div`
  padding:${a.w4.spacing.sm} ${a.w4.spacing.md};border-bottom:1px solid ${a.w4.colors.border};
  background:${a.w4.colors.mainBg};
`,y=t().div`font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${a.w4.colors.mainTextMuted};`,v=t().div`font-size:16px;font-weight:600;font-family:${a.w4.typography.fontFamilyMono};color:${a.w4.colors.accent};margin-top:2px;`,$=t().div`padding:${a.w4.spacing.sm};`,j=t().div`display:flex;gap:2px;margin-bottom:${a.w4.spacing.sm};`,k=t().button`
  flex:1;padding:3px 0;font-size:10px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;
  font-family:${a.w4.typography.fontFamily};border:none;border-radius:3px;cursor:pointer;
  background:${e=>e.active?a.w4.colors.accent:"transparent"};
  color:${e=>e.active?"#fff":a.w4.colors.mainTextMuted};
  transition:all ${a.w4.transitions.fast};
  &:hover{background:${e=>e.active?a.w4.colors.accent:a.w4.colors.border};}
`,z=t().input`
  width:100%;background:${a.w4.colors.mainBg};border:1px solid ${a.w4.colors.border};
  border-radius:${a.w4.borderRadius.sm};padding:4px 8px;font-size:12px;
  font-family:${a.w4.typography.fontFamilyMono};color:${a.w4.colors.mainText};outline:none;
  &:focus{border-color:${a.w4.colors.accent};}
`,T=t().div`display:flex;align-items:center;gap:4px;font-size:11px;color:${a.w4.colors.mainTextMuted};`,M=t().div`
  display:grid;grid-template-columns:repeat(${e=>e.cols},1fr);gap:3px;max-height:100px;overflow-y:auto;${p}
`,C=t().button`
  padding:2px 0;font-size:10px;text-align:center;font-family:${a.w4.typography.fontFamilyMono};
  border:1px solid ${e=>e.active?a.w4.colors.accent:a.w4.colors.border};border-radius:3px;
  background:${e=>e.active?"rgba(56,139,253,0.15)":"transparent"};
  color:${e=>e.active?a.w4.colors.accent:a.w4.colors.mainTextMuted};
  cursor:pointer;transition:all ${a.w4.transitions.fast};
`,F=t().div`display:flex;gap:${a.w4.spacing.lg};flex:1;min-height:0;overflow:hidden;`,S=t().div`
  flex:1;background:${a.w4.colors.surface};border:1px solid ${a.w4.colors.border};
  border-radius:${a.w4.borderRadius.md};padding:${a.w4.spacing.lg};display:flex;
  flex-direction:column;gap:${a.w4.spacing.sm};
`,I=t().div`font-size:16px;font-weight:600;color:${a.w4.colors.mainText};`,R=t().div`font-size:12px;color:${a.w4.colors.mainTextMuted};`,E=t().div`
  width:280px;flex-shrink:0;background:${a.w4.colors.surface};border:1px solid ${a.w4.colors.border};
  border-radius:${a.w4.borderRadius.md};overflow:hidden;
`,B=t().div`
  display:flex;align-items:center;gap:6px;padding:${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-bottom:1px solid ${a.w4.colors.border};background:${a.w4.colors.mainBg};
  font-size:11px;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;
  color:${a.w4.colors.mainTextMuted};
`,L=t().div`overflow-y:auto;${p}`,N=t().div`
  display:flex;align-items:center;gap:${a.w4.spacing.sm};
  padding:${a.w4.spacing.sm} ${a.w4.spacing.md};border-bottom:1px solid ${a.w4.colors.border};
  font-size:12px;font-family:${a.w4.typography.fontFamilyMono};
  &:last-child{border-bottom:none;}
`,_=t().span`color:${a.w4.colors.mainTextMuted};min-width:18px;`,D=t().span`color:${a.w4.colors.mainText};`,A=t().div`position:relative;`,P=t().button`display:flex;align-items:center;gap:4px;padding:0 ${a.w4.spacing.sm};height:30px;background:transparent;border:1px solid ${a.w4.colors.border};border-radius:${a.w4.borderRadius.sm};color:${a.w4.colors.mainTextMuted};font-size:12px;font-family:${a.w4.typography.fontFamily};cursor:pointer;&:hover{border-color:${a.w4.colors.accent};color:${a.w4.colors.mainText};}`,U=t().div`position:absolute;top:calc(100% + 4px);right:0;background:${a.w4.colors.surface};border:1px solid ${a.w4.colors.border};border-radius:${a.w4.borderRadius.md};box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:200;min-width:200px;overflow:hidden;`,X=t().button`display:block;width:100%;text-align:left;padding:${a.w4.spacing.sm} ${a.w4.spacing.md};background:transparent;border:none;color:${a.w4.colors.mainText};font-size:13px;font-family:${a.w4.typography.fontFamily};cursor:pointer;&:hover{background:${a.w4.colors.mainBg};}`,Y=["minute","hour","day","month","weekday"];function H({fieldName:e,field:o,onChange:r}){let i=d.o[e],s=Array.from({length:i.max-i.min+1},(e,o)=>o+i.min);return(0,n.jsxs)(h,{children:[(0,n.jsxs)(b,{children:[(0,n.jsx)(y,{children:d.XY[e]}),(0,n.jsx)(v,{children:(0,d.V7)(o)})]}),(0,n.jsxs)($,{children:[(0,n.jsx)(j,{children:["every","specific","range","step"].map(e=>(0,n.jsx)(k,{active:o.mode===e,onClick:()=>{r({...o,mode:e,values:"specific"===e?[i.min]:[]})},children:"every"===e?"*":"specific"===e?"#":"range"===e?"—":"/N"},e))}),"every"===o.mode&&(0,n.jsxs)(R,{style:{fontSize:11},children:["Every ",d.XY[e].toLowerCase()]}),"step"===o.mode&&(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:(0,n.jsx)(z,{type:"number",min:1,max:i.max,value:o.step,onChange:e=>r({...o,step:Math.max(1,parseInt(e.target.value)||1)}),placeholder:"step"})}),"range"===o.mode&&(0,n.jsxs)(T,{children:[(0,n.jsx)(z,{type:"number",min:i.min,max:i.max,value:o.rangeFrom,onChange:e=>r({...o,rangeFrom:parseInt(e.target.value)||i.min}),style:{width:56}}),(0,n.jsx)("span",{children:"–"}),(0,n.jsx)(z,{type:"number",min:i.min,max:i.max,value:o.rangeTo,onChange:e=>r({...o,rangeTo:parseInt(e.target.value)||i.max}),style:{width:56}})]}),"specific"===o.mode&&(0,n.jsx)(M,{cols:"minute"===e||"hour"===e||"weekday"===e?4:"month"===e?3:4,children:s.map(i=>(0,n.jsx)(C,{active:o.values.includes(i),onClick:()=>{let e;return e=o.values.includes(i)?o.values.filter(e=>e!==i):[...o.values,i].sort((e,o)=>e-o),void r({...o,values:e.length?e:[i]})},children:"weekday"===e?d.mZ[i]:"month"===e?d.oy[i-1]:String(i)},i))})]})]})}let J="toolkit:cronbuilder";function K({topBarRight:e}){let[o,r]=(0,i.useState)("* * * * *"),[s,t]=(0,i.useState)(!1),[p,h]=(0,i.useState)(!1),b=(0,i.useRef)(null),y=(0,i.useRef)(!1);(0,i.useEffect)(()=>{(0,a.PL)(J).then(e=>{e&&r(e),y.current=!0})},[]),(0,i.useEffect)(()=>{if(!y.current)return;let e=setTimeout(()=>(0,a.Is)(J,o),400);return()=>clearTimeout(e)},[o]);let v=async e=>{h(!1),await (0,a.KL)("cronbuilder",e,o)};(0,i.useEffect)(()=>{let e=e=>{b.current&&!b.current.contains(e.target)&&t(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let $=(0,i.useMemo)(()=>(0,d.E$)(o),[o]),j=(0,i.useMemo)(()=>(0,d.U)(o),[o]),k=(0,i.useMemo)(()=>$.valid?(0,d.Cy)(o,new Date,8):[],[o,$.valid]),z=(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,n.jsxs)(P,{onClick:()=>{r("* * * * *"),(0,a.Is)(J,"")},children:[(0,n.jsx)(l.In,{name:"file-plus",size:13})," New"]}),(0,n.jsx)(a.UO,{appId:"cronbuilder",onLoad:r}),(0,n.jsxs)(x,{onClick:()=>h(!0),children:[(0,n.jsx)(l.In,{name:"save",size:14}),"Save"]}),(0,n.jsxs)(A,{ref:b,children:[(0,n.jsxs)(P,{onClick:()=>t(e=>!e),children:["Examples ",(0,n.jsx)(l.In,{name:"chevron-down",size:12})]}),s&&(0,n.jsx)(U,{children:c.k.map(e=>(0,n.jsxs)(X,{onClick:()=>{r(e.expression),t(!1)},children:[(0,n.jsx)("div",{children:e.label}),(0,n.jsx)("div",{style:{fontSize:11,color:a.w4.colors.mainTextMuted},children:e.expression})]},e.label))})]}),e]});return(0,n.jsxs)(l.PE,{title:"Cron Builder",sidebar:(0,n.jsx)(l.tz,{activeAppId:"cronbuilder"}),topBarRight:z,children:[p&&(0,n.jsx)(l.MJ,{onSave:v,onCancel:()=>h(!1)}),(0,n.jsxs)(m,{children:[(0,n.jsxs)(u,{children:[(0,n.jsx)(g,{value:o,onChange:e=>{r(e.target.value)},spellCheck:!1}),(0,n.jsx)(w,{children:$.valid?j:(0,n.jsx)("span",{style:{color:"#f87171"},children:$.error})})]}),(0,n.jsx)(f,{children:Y.map(e=>(0,n.jsx)(H,{fieldName:e,field:$.fields[e],onChange:o=>{let n;return n={...$.fields,[e]:o},void r((0,d.nR)(n))}},e))}),(0,n.jsxs)(F,{children:[(0,n.jsxs)(S,{children:[(0,n.jsx)("div",{style:{fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:a.w4.colors.mainTextMuted},children:"Description"}),(0,n.jsx)(I,{children:j}),(0,n.jsx)(R,{children:(0,n.jsx)("span",{style:{fontFamily:a.w4.typography.fontFamilyMono,color:a.w4.colors.accent},children:o})}),(0,n.jsxs)("div",{style:{marginTop:"auto",fontSize:12,color:a.w4.colors.mainTextMuted,lineHeight:1.8},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("code",{style:{color:a.w4.colors.accent},children:"*"})," — every value"]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("code",{style:{color:a.w4.colors.accent},children:"*/n"})," — every n values"]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("code",{style:{color:a.w4.colors.accent},children:"a-b"})," — range from a to b"]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("code",{style:{color:a.w4.colors.accent},children:"a,b,c"})," — specific values"]})]})]}),(0,n.jsxs)(E,{children:[(0,n.jsxs)(B,{children:[(0,n.jsx)(l.In,{name:"clock",size:12})," Next 8 runs"]}),(0,n.jsxs)(L,{children:[k.map((e,o)=>(0,n.jsxs)(N,{index:o,children:[(0,n.jsxs)(_,{children:["#",o+1]}),(0,n.jsx)(D,{children:e.toLocaleString()})]},o)),!$.valid&&(0,n.jsx)(N,{index:0,children:(0,n.jsx)("span",{style:{color:"#f87171",fontSize:11},children:"Fix expression to see next runs"})})]})]})]})]})]})}}}]);