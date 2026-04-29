"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["4061"],{9372(e,r,t){t.d(r,{ReadingWidget:()=>H});var o=t(65723),i=t(37991),n=t(36859),a=t.n(n),l=t(72799),s=t(6063),d=t(32114),c=t(63236),p=t(28170),g=t(98975),u=t(76461);let x=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,f=a().div`
  display: flex;
  flex-direction: column;
  gap: ${s.w4.spacing.sm};
`,h=a().div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,m=a().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  background: transparent;
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  color: ${s.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color ${s.w4.transitions.fast}, border-color ${s.w4.transitions.fast};

  &:hover {
    color: ${s.w4.colors.accent};
    border-color: ${s.w4.colors.accent};
  }
  &:focus-visible { ${s.w4.focusRing} }
`,y=a().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 0;
`,w=a().div`
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 14px;
  align-items: stretch;
`,b=a().div`
  width: 64px;
  height: 94px;
  background:
    repeating-linear-gradient(135deg,
      rgba(255, 255, 255, 0.04) 0 6px,
      rgba(255, 255, 255, 0.02) 6px 12px),
    ${s.w4.colors.mainBg};
  border: 1px solid ${s.w4.colors.borderSubtle};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${s.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,$=a().div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
`,j=a().div`
  font-family: ${s.w4.typography.fontFamilySerif??"'Cormorant Garamond', 'Iowan Old Style', Georgia, serif"};
  font-size: 18px;
  line-height: 1.1;
  font-weight: 500;
  color: ${s.w4.colors.mainText};
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,v=a().div`
  font-size: ${s.w4.typography.fontSizeSm};
  color: ${s.w4.colors.mainTextMuted};
  font-style: italic;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,k=a().div`
  margin-top: 8px;
`,S=a().div`
  display: flex;
  justify-content: space-between;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  margin-bottom: 6px;
`,F=a().span`
  color: ${s.w4.colors.accent};
`,M=a().div`
  height: 3px;
  background: ${s.w4.colors.borderSubtle};
  border-radius: 2px;
  overflow: hidden;
`,z=a().div`
  width: ${({pct:e})=>e}%;
  height: 100%;
  background: ${s.w4.colors.accent};
  transition: width 0.4s ease;
`,T=a().div``,C=a().div`
  display: flex;
  justify-content: space-between;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 6px;
`,R=a().div`
  display: grid;
  grid-template-columns: ${({goal:e})=>`repeat(${e}, 1fr)`};
  gap: 2px;
`,A=a().div`
  height: 8px;
  background: ${({filled:e})=>e?s.w4.colors.accent:s.w4.colors.borderSubtle};
  border-radius: 1px;
`,I=a().div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 10px;
  border-top: 1px solid ${s.w4.colors.borderSubtle};
`,D=a().div``,G=a().div`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${s.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 4px;
`,B=a().div`
  font-family: ${s.w4.typography.fontFamilySerif??"'Cormorant Garamond', 'Iowan Old Style', Georgia, serif"};
  font-size: 22px;
  line-height: 1;
  color: ${s.w4.colors.mainText};
`,_=a().span`
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${s.w4.colors.mainTextFaint};
  margin-left: 5px;
  letter-spacing: 0.04em;
`,E=a().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${s.w4.spacing.md};
  text-align: center;
  color: ${s.w4.colors.mainTextMuted};
  font-size: ${s.w4.typography.fontSizeSm};
`,U=a().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: ${s.w4.colors.accentMuted};
  border: 1px solid ${s.w4.colors.accent};
  border-radius: 999px;
  color: ${s.w4.colors.accent};
  font-size: 11px;
  font-weight: 600;
  font-family: ${s.w4.typography.fontFamilyMono};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform ${s.w4.transitions.fast};

  &:hover { transform: translateY(-1px); }
  &:focus-visible { ${s.w4.focusRing} }
`,N=a().form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
  background: ${s.w4.colors.surfaceRaised};
  border: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.md};
  margin-bottom: 4px;
  animation: ${x} 0.18s ease both;
`,L=a().input`
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
`,O=a().div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 6px;
`,Y=a().div`
  display: flex;
  gap: 6px;
  justify-content: space-between;
  align-items: center;
`,P=a().button`
  padding: 5px 10px;
  border-radius: ${s.w4.borderRadius.sm};
  font-family: ${s.w4.typography.fontFamily};
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${s.w4.colors.border};
  background: transparent;
  color: ${s.w4.colors.mainTextMuted};

  &:hover { color: ${s.w4.colors.mainText}; }
  &:focus-visible { ${s.w4.focusRing} }
`,W=a().button`
  padding: 5px 10px;
  border-radius: ${s.w4.borderRadius.sm};
  font-family: ${s.w4.typography.fontFamily};
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid
    ${({primary:e,danger:r})=>r?s.w4.colors.danger:e?s.w4.colors.accent:s.w4.colors.border};
  background: ${({primary:e,danger:r})=>r?"transparent":e?s.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:r})=>r?s.w4.colors.danger:e?"#fff":s.w4.colors.mainText};

  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${s.w4.focusRing} }
`;function q({url:e,fallback:r,alt:t}){let[n,a]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{a(!1)},[e]),!e||n)?(0,o.jsx)(b,{children:r}):(0,o.jsx)(b,{children:(0,o.jsx)("img",{src:e,alt:t,loading:"lazy",onError:()=>a(!0)})})}function H({locale:e}){let r="pt"===e?"pt":"en",t=(0,i.useMemo)(()=>(0,p.Nx)(r,g.A),[r]),{state:n,loaded:a,save:l}=(0,d.useReading)(),[s,x]=(0,i.useState)(!1),[b,J]=(0,i.useState)(""),[K,Q]=(0,i.useState)(""),[V,X]=(0,i.useState)(""),[Z,ee]=(0,i.useState)(""),[er,et]=(0,i.useState)(String(d.DEFAULT_READING_GOAL)),eo=(0,i.useCallback)(()=>{n.current?(J(n.current.title),Q(n.current.author),X(String(n.current.page)),ee(String(n.current.pages))):(J(""),Q(""),X(""),ee("")),et(String(n.goal)),x(!0)},[n]),ei=(0,i.useCallback)(()=>{let e=b.trim(),r=K.trim(),t=parseInt(Z,10),o=parseInt(V,10),i=parseInt(er,10)||d.DEFAULT_READING_GOAL;if(!e||!r||!Number.isFinite(t)||t<=0)return;let a=Number.isFinite(o)?Math.max(0,Math.min(t,o)):0,s=!!n.current&&n.current.title===e&&n.current.author===r,c=s?n.current.startedAt:Date.now(),p=s?n.current.coverUrl:void 0;l({...n,current:{title:e,author:r,page:a,pages:t,startedAt:c,coverUrl:p},goal:i}),x(!1)},[b,K,V,Z,er,n,l]);(0,i.useEffect)(()=>{if(!a)return;let e=n.current;if(!e||void 0!==e.coverUrl)return;let{title:r,author:t}=e,o=!1;return(async()=>{let e=await (0,d.fetchBookCoverUrl)(r,t);o||l(o=>o.current&&o.current.title===r&&o.current.author===t?{...o,current:{...o.current,coverUrl:e}}:o)})(),()=>{o=!0}},[a,n.current?.title,n.current?.author,n.current?.coverUrl]);let en=(0,i.useCallback)(()=>{if(!n.current)return;let e={title:n.current.title,author:n.current.author,pages:n.current.pages,finishedAt:Date.now()};l({...n,current:null,finished:[e,...n.finished]}),x(!1)},[n,l]);if(!a)return null;let{current:ea,finished:el,goal:es}=n,ed=(0,d.booksThisYear)(el),ec=ea?Math.max(0,Math.min(100,Math.round(ea.page/ea.pages*100))):0,ep=b.trim().length>0&&K.trim().length>0&&/^\d+$/.test(Z.trim())&&parseInt(Z,10)>0;return(0,o.jsx)(c.rl,{title:t("reading.title"),accessory:(0,o.jsxs)(h,{children:[(0,o.jsx)("span",{children:t("reading.yearProgress",{read:ed,goal:es})}),(0,o.jsx)(m,{type:"button",onClick:eo,"aria-label":t(ea?"reading.updateBook":"reading.addBook"),title:t(ea?"reading.updateBook":"reading.addBook"),children:(0,o.jsx)(c.In,{name:ea?"settings":"plus",size:12})})]}),accentColor:u.A.accentColor,children:(0,o.jsxs)(f,{children:[s&&(0,o.jsxs)(N,{onSubmit:e=>{e.preventDefault(),ei()},children:[(0,o.jsx)(L,{type:"text",value:b,onChange:e=>J(e.target.value),placeholder:t("reading.placeholder.title"),autoFocus:!0}),(0,o.jsx)(L,{type:"text",value:K,onChange:e=>Q(e.target.value),placeholder:t("reading.placeholder.author")}),(0,o.jsxs)(O,{children:[(0,o.jsx)(L,{type:"number",value:V,onChange:e=>X(e.target.value),placeholder:t("reading.placeholder.page"),min:0}),(0,o.jsx)(L,{type:"number",value:Z,onChange:e=>ee(e.target.value),placeholder:t("reading.placeholder.pages"),min:1}),(0,o.jsx)(L,{type:"number",value:er,onChange:e=>et(e.target.value),placeholder:t("reading.placeholder.goal"),min:1,"aria-label":t("reading.goal")})]}),(0,o.jsxs)(Y,{children:[ea?(0,o.jsx)(W,{type:"button",danger:!0,onClick:en,children:t("reading.finish")}):(0,o.jsx)("span",{}),(0,o.jsxs)("div",{style:{display:"flex",gap:6},children:[(0,o.jsx)(P,{type:"button",onClick:()=>x(!1),children:t("reading.cancel")}),(0,o.jsx)(W,{type:"submit",primary:!0,disabled:!ep,children:t("reading.save")})]})]})]}),ea?(0,o.jsxs)(y,{children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(q,{url:ea.coverUrl,fallback:t("reading.placeholder.cover"),alt:ea.title}),(0,o.jsxs)($,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(j,{children:ea.title}),(0,o.jsx)(v,{children:ea.author})]}),(0,o.jsxs)(k,{children:[(0,o.jsxs)(S,{children:[(0,o.jsxs)("span",{children:[t("reading.page")," ",ea.page," / ",ea.pages]}),(0,o.jsxs)(F,{children:[ec,"%"]})]}),(0,o.jsx)(M,{children:(0,o.jsx)(z,{pct:ec})})]})]})]}),(0,o.jsxs)(T,{children:[(0,o.jsxs)(C,{children:[(0,o.jsx)("span",{children:t("reading.yearGoal")}),(0,o.jsxs)("span",{children:[ed,"/",es," ",t("reading.books")]})]}),(0,o.jsx)(R,{goal:es,children:Array.from({length:es}).map((e,r)=>(0,o.jsx)(A,{filled:r<ed},r))})]}),(0,o.jsxs)(I,{children:[(0,o.jsxs)(D,{children:[(0,o.jsx)(G,{children:t("reading.stat.week")}),(0,o.jsxs)(B,{children:[(0,d.pagesThisWeek)(ea),(0,o.jsx)(_,{children:t("reading.unit.pages")})]})]}),(0,o.jsxs)(D,{children:[(0,o.jsx)(G,{children:t("reading.stat.pace")}),(0,o.jsxs)(B,{children:[(0,d.pagesPerDay)(ea),(0,o.jsx)(_,{children:t("reading.unit.perDay")})]})]}),(0,o.jsxs)(D,{children:[(0,o.jsx)(G,{children:t("reading.stat.finished")}),(0,o.jsxs)(B,{children:[el.length,(0,o.jsx)(_,{children:t("reading.unit.total")})]})]})]})]}):(0,o.jsxs)(E,{children:[(0,o.jsx)("div",{children:t("reading.empty")}),!s&&(0,o.jsxs)(U,{type:"button",onClick:eo,children:[(0,o.jsx)(c.In,{name:"plus",size:12}),t("reading.addBook")]})]})]})})}}}]);