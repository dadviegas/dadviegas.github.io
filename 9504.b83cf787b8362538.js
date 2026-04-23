"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["9504"],{28675(e,o,i){i.d(o,{LabLauncherWidget:()=>L});var l=i(65723),t=i(37991),a=i(36859),n=i.n(a),r=i(72799),s=i(23930),c=i(2938),d=i(28170),p=i(98975),h=i(43414);let x=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,g=n().div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  min-height: 0;
  animation: ${x} 0.3s ease both;
`,b=n().div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
`,f=n().div`
  width: 54px;
  height: 54px;
  border-radius: 10px;
  background: ${({bg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
  flex-shrink: 0;
`,u=n().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,m=n().div`
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${s.w4.colors.mainText};
  margin-bottom: 2px;
`,y=n().div`
  font-size: 11.5px;
  color: ${s.w4.colors.mainTextMuted};
  line-height: 1.3;
  margin-bottom: 8px;
`,w=n().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${s.w4.colors.accentMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextMuted};
`,$=n().div`
  display: grid;
  grid-template-columns: ${({cols:e})=>`repeat(${e}, 1fr)`};
  gap: 10px;
  flex: 1;
  min-height: 0;
`,k=n().button`
  background: ${s.w4.colors.codeBg};
  border: 1px solid ${s.w4.colors.borderSubtle};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;
  gap: 6px;
  font-family: inherit;
  color: ${s.w4.colors.mainText};
  cursor: pointer;
  transition: border-color ${s.w4.transitions.fast}, background ${s.w4.transitions.fast};

  &:hover { border-color: ${s.w4.colors.borderStrong}; background: ${s.w4.colors.surfaceHover}; }
  &:focus-visible { outline: 2px solid ${s.w4.colors.accent}; outline-offset: -1px; }
`,j=n().div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`,v=n().div`
  font-size: 11px;
  color: ${s.w4.colors.mainText};
`,z=n().button`
  display: inline-flex;
  align-self: flex-start;
  background: none;
  border: none;
  padding: 0;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.05em;
  cursor: pointer;
  color: ${({color:e})=>e};

  &:hover { opacity: 0.8; }
  &:focus-visible { outline: 2px solid ${s.w4.colors.accent}; outline-offset: 2px; }
`,C=[{id:"ask",glyph:"✦",label:"Ask",bg:"#5e4cbb",hash:"#/ask"},{id:"promptlab",glyph:"◐",label:"Prompt",bg:"#c47a5e",hash:"#/promptlab"},{id:"imagegen",glyph:"◎",label:"Image",bg:"#a85c7a",hash:"#/imagegen"},{id:"playground",glyph:"⟨⟩",label:"Code",bg:"#4a6fa5",hash:"#/playground"},{id:"pad",glyph:"✎",label:"Pad",bg:"#7aa86c",hash:"#/pad"},{id:"apiexplorer",glyph:"☌",label:"API",bg:"#b08c4a",hash:"#/apiexplorer"}];function L({locale:e}){let o="pt"===e?"pt":"en",i=(0,t.useMemo)(()=>(0,d.Nx)(o,p.A),[o]);return(0,l.jsx)(c.rl,{title:i("labLauncher.title"),accentColor:h.A.accentColor,children:(0,l.jsxs)(g,{children:[(0,l.jsxs)(b,{children:[(0,l.jsx)(f,{bg:"linear-gradient(135deg, #3a2f5c 0%, #4e3d80 100%)",children:"⟁"}),(0,l.jsxs)(u,{children:[(0,l.jsx)(m,{children:i("labLauncher.title")}),(0,l.jsx)(y,{children:i("labLauncher.subtitle")}),(0,l.jsxs)(w,{children:[C.length," ",i("labLauncher.count")]})]})]}),(0,l.jsx)($,{cols:3,children:C.map(e=>(0,l.jsxs)(k,{type:"button",onClick:()=>{window.location.hash=e.hash},"aria-label":e.label,children:[(0,l.jsx)(j,{bg:e.bg,children:e.glyph}),(0,l.jsx)(v,{children:e.label})]},e.id))}),(0,l.jsx)(z,{color:s.w4.suites.lab,type:"button",onClick:()=>{window.location.hash="#/ask"},children:i("labLauncher.open")})]})})}}}]);