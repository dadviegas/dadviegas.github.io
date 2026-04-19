"use strict";(self.webpackChunk_atlantis_cronbuilder=self.webpackChunk_atlantis_cronbuilder||[]).push([["6362"],{3935(e,o,r){r.r(o),r.d(o,{default:()=>Z});var n=r(5723),i=r(7991),s=r(6859),t=r.n(s),a=r(4174),l=r(1638),d=r(1344),c=r(6480),p=r(679),x=r(1783),m=r(9867),u=r(5151);let g=`&::-webkit-scrollbar{width:6px}&::-webkit-scrollbar-track{background:transparent}&::-webkit-scrollbar-thumb{background:${a.w4.colors.border};border-radius:3px}`,w=t().button`display:flex;align-items:center;gap:6px;padding:5px 12px;background:none;border:1px solid ${a.w4.colors.accent};border-radius:${a.w4.borderRadius.md};color:${a.w4.colors.accent};font-size:${a.w4.typography.fontSizeBase};font-family:${a.w4.typography.fontFamily};font-weight:600;cursor:pointer;transition:background 0.15s;white-space:nowrap;&:hover{background:rgba(88,166,255,0.1);}`,f=t().div`display:flex;flex-direction:column;flex:1;overflow:hidden;padding:${a.w4.spacing.lg};gap:${a.w4.spacing.lg};`,h=t().div`
  display:flex;align-items:center;gap:${a.w4.spacing.md};flex-shrink:0;
  background:${a.w4.colors.surface};border:1px solid ${a.w4.colors.border};
  border-radius:${a.w4.borderRadius.md};padding:${a.w4.spacing.sm} ${a.w4.spacing.md};
`,b=t().input`
  flex:1;background:transparent;border:none;outline:none;
  font-family:${a.w4.typography.fontFamilyMono};font-size:18px;font-weight:600;
  color:${a.w4.colors.mainText};letter-spacing:0.04em;
`,y=t().div`
  font-size:13px;color:${a.w4.colors.mainTextMuted};white-space:nowrap;
`,v=t().div`
  display:grid;grid-template-columns:repeat(5,1fr);gap:${a.w4.spacing.md};flex-shrink:0;
`,$=t().div`
  background:${a.w4.colors.surface};border:1px solid ${a.w4.colors.border};
  border-radius:${a.w4.borderRadius.md};overflow:hidden;
`,j=t().div`
  padding:${a.w4.spacing.sm} ${a.w4.spacing.md};border-bottom:1px solid ${a.w4.colors.border};
  background:${a.w4.colors.mainBg};
`,k=t().div`font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${a.w4.colors.mainTextMuted};`,z=t().div`font-size:16px;font-weight:600;font-family:${a.w4.typography.fontFamilyMono};color:${a.w4.colors.accent};margin-top:2px;`,T=t().div`padding:${a.w4.spacing.sm};`,M=t().div`display:flex;gap:2px;margin-bottom:${a.w4.spacing.sm};`,C=t().button`
  flex:1;padding:3px 0;font-size:10px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;
  font-family:${a.w4.typography.fontFamily};border:none;border-radius:3px;cursor:pointer;
  background:${e=>e.active?a.w4.colors.accent:"transparent"};
  color:${e=>e.active?"#fff":a.w4.colors.mainTextMuted};
  transition:all 0.12s;
  &:hover{background:${e=>e.active?a.w4.colors.accent:a.w4.colors.border};}
`,F=t().input`
  width:100%;background:${a.w4.colors.mainBg};border:1px solid ${a.w4.colors.border};
  border-radius:${a.w4.borderRadius.sm};padding:4px 8px;font-size:12px;
  font-family:${a.w4.typography.fontFamilyMono};color:${a.w4.colors.mainText};outline:none;
  &:focus{border-color:${a.w4.colors.accent};}
`,S=t().div`display:flex;align-items:center;gap:4px;font-size:11px;color:${a.w4.colors.mainTextMuted};`,R=t().div`
  display:grid;grid-template-columns:repeat(${e=>e.cols},1fr);gap:3px;max-height:100px;overflow-y:auto;${g}
`,E=t().button`
  padding:2px 0;font-size:10px;text-align:center;font-family:${a.w4.typography.fontFamilyMono};
  border:1px solid ${e=>e.active?a.w4.colors.accent:a.w4.colors.border};border-radius:3px;
  background:${e=>e.active?"rgba(56,139,253,0.15)":"transparent"};
  color:${e=>e.active?a.w4.colors.accent:a.w4.colors.mainTextMuted};
  cursor:pointer;transition:all 0.1s;
`,I=t().div`display:flex;gap:${a.w4.spacing.lg};flex:1;min-height:0;overflow:hidden;`,B=t().div`
  flex:1;background:${a.w4.colors.surface};border:1px solid ${a.w4.colors.border};
  border-radius:${a.w4.borderRadius.md};padding:${a.w4.spacing.lg};display:flex;
  flex-direction:column;gap:${a.w4.spacing.sm};
`,L=t().div`font-size:16px;font-weight:600;color:${a.w4.colors.mainText};`,A=t().div`font-size:12px;color:${a.w4.colors.mainTextMuted};`,N=t().div`
  width:280px;flex-shrink:0;background:${a.w4.colors.surface};border:1px solid ${a.w4.colors.border};
  border-radius:${a.w4.borderRadius.md};overflow:hidden;
`,_=t().div`
  display:flex;align-items:center;gap:6px;padding:${a.w4.spacing.sm} ${a.w4.spacing.md};
  border-bottom:1px solid ${a.w4.colors.border};background:${a.w4.colors.mainBg};
  font-size:11px;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;
  color:${a.w4.colors.mainTextMuted};
`,D=t().div`overflow-y:auto;${g}`,P=t().div`
  display:flex;align-items:center;gap:${a.w4.spacing.sm};
  padding:${a.w4.spacing.sm} ${a.w4.spacing.md};border-bottom:1px solid ${a.w4.colors.border};
  font-size:12px;font-family:${a.w4.typography.fontFamilyMono};
  &:last-child{border-bottom:none;}
`,U=t().span`color:${a.w4.colors.mainTextMuted};min-width:18px;`,X=t().span`color:${a.w4.colors.mainText};`,Y=t().div`position:relative;`,H=t().button`display:flex;align-items:center;gap:4px;padding:0 ${a.w4.spacing.sm};height:30px;background:transparent;border:1px solid ${a.w4.colors.border};border-radius:${a.w4.borderRadius.sm};color:${a.w4.colors.mainTextMuted};font-size:12px;font-family:${a.w4.typography.fontFamily};cursor:pointer;&:hover{border-color:${a.w4.colors.accent};color:${a.w4.colors.mainText};}`,J=t().div`position:absolute;top:calc(100% + 4px);right:0;background:${a.w4.colors.surface};border:1px solid ${a.w4.colors.border};border-radius:${a.w4.borderRadius.md};box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:200;min-width:200px;overflow:hidden;`,K=t().button`display:block;width:100%;text-align:left;padding:${a.w4.spacing.sm} ${a.w4.spacing.md};background:transparent;border:none;color:${a.w4.colors.mainText};font-size:13px;font-family:${a.w4.typography.fontFamily};cursor:pointer;&:hover{background:${a.w4.colors.mainBg};}`,O=["minute","hour","day","month","weekday"];function V({fieldName:e,field:o,onChange:r}){let i=m.o[e],s=Array.from({length:i.max-i.min+1},(e,o)=>o+i.min);return(0,n.jsxs)($,{children:[(0,n.jsxs)(j,{children:[(0,n.jsx)(k,{children:m.XY[e]}),(0,n.jsx)(z,{children:(0,m.V7)(o)})]}),(0,n.jsxs)(T,{children:[(0,n.jsx)(M,{children:["every","specific","range","step"].map(e=>(0,n.jsx)(C,{active:o.mode===e,onClick:()=>{r({...o,mode:e,values:"specific"===e?[i.min]:[]})},children:"every"===e?"*":"specific"===e?"#":"range"===e?"—":"/N"},e))}),"every"===o.mode&&(0,n.jsxs)(A,{style:{fontSize:11},children:["Every ",m.XY[e].toLowerCase()]}),"step"===o.mode&&(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:(0,n.jsx)(F,{type:"number",min:1,max:i.max,value:o.step,onChange:e=>r({...o,step:Math.max(1,parseInt(e.target.value)||1)}),placeholder:"step"})}),"range"===o.mode&&(0,n.jsxs)(S,{children:[(0,n.jsx)(F,{type:"number",min:i.min,max:i.max,value:o.rangeFrom,onChange:e=>r({...o,rangeFrom:parseInt(e.target.value)||i.min}),style:{width:56}}),(0,n.jsx)("span",{children:"–"}),(0,n.jsx)(F,{type:"number",min:i.min,max:i.max,value:o.rangeTo,onChange:e=>r({...o,rangeTo:parseInt(e.target.value)||i.max}),style:{width:56}})]}),"specific"===o.mode&&(0,n.jsx)(R,{cols:"minute"===e||"hour"===e||"weekday"===e?4:"month"===e?3:4,children:s.map(i=>(0,n.jsx)(E,{active:o.values.includes(i),onClick:()=>{let e;return e=o.values.includes(i)?o.values.filter(e=>e!==i):[...o.values,i].sort((e,o)=>e-o),void r({...o,values:e.length?e:[i]})},children:"weekday"===e?m.mZ[i]:"month"===e?m.oy[i-1]:String(i)},i))})]})]})}let W="toolkit:cronbuilder";function Z({topBarRight:e}){let[o,r]=(0,i.useState)("* * * * *"),[s,t]=(0,i.useState)(!1),[g,$]=(0,i.useState)(!1),j=(0,i.useRef)(null),k=(0,i.useRef)(!1);(0,i.useEffect)(()=>{(0,a.PL)(W).then(e=>{e&&r(e),k.current=!0})},[]),(0,i.useEffect)(()=>{if(!k.current)return;let e=setTimeout(()=>(0,a.Is)(W,o),400);return()=>clearTimeout(e)},[o]);let z=async e=>{$(!1),await (0,a.KL)("cronbuilder",e,o)};(0,i.useEffect)(()=>{let e=e=>{j.current&&!j.current.contains(e.target)&&t(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let T=(0,i.useMemo)(()=>(0,m.E$)(o),[o]),M=(0,i.useMemo)(()=>(0,m.U)(o),[o]),C=(0,i.useMemo)(()=>T.valid?(0,m.Cy)(o,new Date,8):[],[o,T.valid]),F=(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,n.jsxs)(H,{onClick:()=>{r("* * * * *"),(0,a.Is)(W,"")},children:[(0,n.jsx)(d.A,{size:13})," New"]}),(0,n.jsx)(a.UO,{appId:"cronbuilder",onLoad:r}),(0,n.jsxs)(w,{onClick:()=>$(!0),children:[(0,n.jsx)(c.A,{size:14}),"Save"]}),(0,n.jsxs)(Y,{ref:j,children:[(0,n.jsxs)(H,{onClick:()=>t(e=>!e),children:["Examples ",(0,n.jsx)(p.A,{size:12})]}),s&&(0,n.jsx)(J,{children:u.k.map(e=>(0,n.jsxs)(K,{onClick:()=>{r(e.expression),t(!1)},children:[(0,n.jsx)("div",{children:e.label}),(0,n.jsx)("div",{style:{fontSize:11,color:a.w4.colors.mainTextMuted},children:e.expression})]},e.label))})]}),e]});return(0,n.jsxs)(a.PE,{title:"Cron Builder",sidebar:(0,n.jsx)(l.tz,{activeAppId:"cronbuilder"}),topBarRight:F,children:[g&&(0,n.jsx)(a.MJ,{onSave:z,onCancel:()=>$(!1)}),(0,n.jsxs)(f,{children:[(0,n.jsxs)(h,{children:[(0,n.jsx)(b,{value:o,onChange:e=>{r(e.target.value)},spellCheck:!1}),(0,n.jsx)(y,{children:T.valid?M:(0,n.jsx)("span",{style:{color:"#f87171"},children:T.error})})]}),(0,n.jsx)(v,{children:O.map(e=>(0,n.jsx)(V,{fieldName:e,field:T.fields[e],onChange:o=>{let n;return n={...T.fields,[e]:o},void r((0,m.nR)(n))}},e))}),(0,n.jsxs)(I,{children:[(0,n.jsxs)(B,{children:[(0,n.jsx)("div",{style:{fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:a.w4.colors.mainTextMuted},children:"Description"}),(0,n.jsx)(L,{children:M}),(0,n.jsx)(A,{children:(0,n.jsx)("span",{style:{fontFamily:a.w4.typography.fontFamilyMono,color:a.w4.colors.accent},children:o})}),(0,n.jsxs)("div",{style:{marginTop:"auto",fontSize:12,color:a.w4.colors.mainTextMuted,lineHeight:1.8},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("code",{style:{color:a.w4.colors.accent},children:"*"})," — every value"]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("code",{style:{color:a.w4.colors.accent},children:"*/n"})," — every n values"]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("code",{style:{color:a.w4.colors.accent},children:"a-b"})," — range from a to b"]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("code",{style:{color:a.w4.colors.accent},children:"a,b,c"})," — specific values"]})]})]}),(0,n.jsxs)(N,{children:[(0,n.jsxs)(_,{children:[(0,n.jsx)(x.A,{size:12})," Next 8 runs"]}),(0,n.jsxs)(D,{children:[C.map((e,o)=>(0,n.jsxs)(P,{index:o,children:[(0,n.jsxs)(U,{children:["#",o+1]}),(0,n.jsx)(X,{children:e.toLocaleString()})]},o)),!T.valid&&(0,n.jsx)(P,{index:0,children:(0,n.jsx)("span",{style:{color:"#f87171",fontSize:11},children:"Fix expression to see next runs"})})]})]})]})]})]})}}}]);