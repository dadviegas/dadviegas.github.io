"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["9504"],{28675(e,o,i){i.d(o,{LabLauncherWidget:()=>z});var l=i(65723),a=i(37991),t=i(36859),n=i.n(t),r=i(72799),s=i(23930),c=i(28170),p=i(98975);let d=(0,r.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,h=n().div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  animation: ${d} 0.3s ease both;
`,x=n().div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
`,g=n().div`
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
`,b=n().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,f=n().div`
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${s.w4.colors.mainText};
  margin-bottom: 2px;
`,u=n().div`
  font-size: 11.5px;
  color: ${s.w4.colors.mainTextMuted};
  line-height: 1.3;
  margin-bottom: 8px;
`,m=n().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${s.w4.colors.accentMuted};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${s.w4.colors.mainTextMuted};
`,y=n().div`
  display: grid;
  grid-template-columns: ${({cols:e})=>`repeat(${e}, 1fr)`};
  gap: 10px;
  flex: 1;
  min-height: 0;
`,w=n().button`
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
`,$=n().div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`,k=n().div`
  font-size: 11px;
  color: ${s.w4.colors.mainText};
`,v=n().button`
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
`,j=[{id:"ask",glyph:"✦",label:"Ask",bg:"#5e4cbb",hash:"#/ask"},{id:"promptlab",glyph:"◐",label:"Prompt",bg:"#c47a5e",hash:"#/promptlab"},{id:"imagegen",glyph:"◎",label:"Image",bg:"#a85c7a",hash:"#/imagegen"},{id:"playground",glyph:"⟨⟩",label:"Code",bg:"#4a6fa5",hash:"#/playground"},{id:"pad",glyph:"✎",label:"Pad",bg:"#7aa86c",hash:"#/pad"},{id:"apiexplorer",glyph:"☌",label:"API",bg:"#b08c4a",hash:"#/apiexplorer"}];function z({locale:e}){let o="pt"===e?"pt":"en",i=(0,a.useMemo)(()=>(0,c.Nx)(o,p.A),[o]);return(0,l.jsxs)(h,{children:[(0,l.jsxs)(x,{children:[(0,l.jsx)(g,{bg:"linear-gradient(135deg, #3a2f5c 0%, #4e3d80 100%)",children:"⟁"}),(0,l.jsxs)(b,{children:[(0,l.jsx)(f,{children:i("labLauncher.title")}),(0,l.jsx)(u,{children:i("labLauncher.subtitle")}),(0,l.jsxs)(m,{children:[j.length," ",i("labLauncher.count")]})]})]}),(0,l.jsx)(y,{cols:3,children:j.map(e=>(0,l.jsxs)(w,{type:"button",onClick:()=>{window.location.hash=e.hash},"aria-label":e.label,children:[(0,l.jsx)($,{bg:e.bg,children:e.glyph}),(0,l.jsx)(k,{children:e.label})]},e.id))}),(0,l.jsx)(v,{color:s.w4.suites.lab,type:"button",onClick:()=>{window.location.hash="#/ask"},children:i("labLauncher.open")})]})}}}]);