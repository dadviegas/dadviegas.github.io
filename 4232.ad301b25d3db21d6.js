"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["4232"],{88571(e,o,t){t.d(o,{MusicaWidget:()=>z});var r=t(65723),i=t(37991),a=t(36859),l=t.n(a),n=t(72799),s=t(94764),c=t(86527),d=t(45030),p=t(28170),m=t(98975),u=t(53);let x=(0,n.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=l().div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,h=l().form`
  display: flex;
  gap: 6px;
`,b=l().input`
  flex: 1;
  background: ${s.w4.colors.mainBg};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  padding: 6px 8px;
  font-family: ${s.w4.typography.fontFamily};
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainText};
  min-width: 0;

  &::placeholder { color: ${s.w4.colors.mainTextFaint}; }
  &:focus { outline: none; border-color: ${s.w4.colors.accent}; }
`,w=l().button`
  padding: 5px 10px;
  border-radius: ${s.w4.borderRadius.sm};
  font-family: ${s.w4.typography.fontFamily};
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${s.w4.colors.accent};
  background: ${s.w4.colors.accent};
  color: #fff;

  &:disabled { opacity: 0.45; cursor: not-allowed; }
`,y=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${s.w4.colors.border};
    border-radius: 2px;
  }
`,g=l().a`
  display: grid;
  grid-template-columns: 1fr 18px;
  gap: 8px;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid ${s.w4.colors.borderSubtle};
  text-decoration: none;
  color: inherit;
  transition: background ${s.w4.transitions.fast};
  animation: ${x} 0.3s ease both;
  animation-delay: ${({delay:e})=>50*e}ms;

  &:last-child { border-bottom: none; }
  &:hover { background: ${s.w4.colors.surfaceHover}; }
  &:hover .remove-btn { opacity: 1; }
`,$=l().div`
  min-width: 0;
`,v=l().div`
  font-size: 13px;
  color: ${s.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
`,k=l().div`
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  font-style: italic;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,j=l().button`
  background: none;
  border: none;
  padding: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${s.w4.colors.mainTextFaint};
  cursor: pointer;
  border-radius: ${s.w4.borderRadius.sm};
  opacity: 0;
  transition: opacity ${s.w4.transitions.fast}, color ${s.w4.transitions.fast};
  @media (hover: none) { opacity: 0.55; }

  &:hover { color: ${s.w4.colors.danger}; }
`,C=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${s.w4.colors.mainTextMuted};
  font-size: 13px;
  padding: 8px 0;
`;function z({locale:e}){let o="pt"===e?"pt":"en",t=(0,i.useMemo)(()=>(0,p.Nx)(o,m.A),[o]),{tracks:a,loaded:l,add:n,remove:x}=(0,c.useMusic)(),[F,T]=(0,i.useState)(""),M=(0,i.useCallback)(()=>{let e=F.trim();e&&(n(e),T(""))},[F,n]),S=(0,i.useCallback)(e=>{x(e)},[x]);return l?(0,r.jsx)(d.rl,{title:t("music.title"),accessory:(0,r.jsx)("span",{style:{fontSize:11,fontFamily:s.w4.typography.fontFamilyMono,color:s.w4.colors.mainTextFaint},children:t("music.subtitle")}),accentColor:u.A.accentColor,children:(0,r.jsxs)(f,{children:[(0,r.jsxs)(h,{onSubmit:e=>{e.preventDefault(),M()},children:[(0,r.jsx)(b,{type:"text",value:F,onChange:e=>T(e.target.value),placeholder:t("music.placeholder")}),(0,r.jsx)(w,{type:"submit",disabled:0===F.trim().length,children:t("music.add")})]}),0===a.length?(0,r.jsx)(C,{children:t("music.empty")}):(0,r.jsx)(y,{children:a.map((e,o)=>{let i=e.artist?`${e.title} ${e.artist}`:e.title;return(0,r.jsxs)(g,{delay:o,href:`music://music.apple.com/search?term=${encodeURIComponent(i)}`,target:"_blank",rel:"noreferrer","aria-label":t("music.search.label"),children:[(0,r.jsxs)($,{children:[(0,r.jsx)(v,{children:e.title}),e.artist&&(0,r.jsx)(k,{children:e.artist})]}),(0,r.jsx)(j,{className:"remove-btn",type:"button","aria-label":t("music.remove"),title:t("music.remove"),onClick:o=>{o.preventDefault(),o.stopPropagation(),S(e.id)},children:(0,r.jsx)(d.In,{name:"close",size:12})})]},e.id)})})]})}):null}}}]);