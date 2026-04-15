"use strict";(self.webpackChunk_atlantis_school=self.webpackChunk_atlantis_school||[]).push([[892],{32289(e,o,a){a.d(o,{WO:()=>Ce});var i=a(27359),t=a(85723),n=a(53233),r=a(69753),l=a(88641),s=a(41783),d=a(65723);function c(e){try{return JSON.parse(localStorage.getItem(e)??"[]")}catch{return[]}}const m=n.default.nav`padding: ${t.w4.spacing.sm} 0;`,u=n.default.div`
  border-bottom: 1px solid ${t.w4.colors.border}60;
  margin-bottom: 2px;
`,p=n.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 7px ${t.w4.spacing.md};
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${t.w4.typography.fontFamily};
  transition: color 0.15s;

  &:hover { color: ${t.w4.colors.sidebarText}; }
`,f=n.default.span`
  display: flex;
  align-items: center;
  gap: 7px;
`,g=n.default.span`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,h=n.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,x=n.default.div`overflow: hidden;`,b=n.default.div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,y=n.default.button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${t.w4.spacing.md};
  background: ${({active:e})=>e?t.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?t.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?t.w4.colors.sidebarActive:t.w4.colors.sidebarText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${t.w4.colors.sidebarHover}; }
`,w=n.default.button`
  opacity: ${({active:e})=>e?1:0};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":t.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;function z({title:e,icon:o,entries:a,activeId:t,onSelect:n,favorites:s,onToggleFav:c}){const[m,z]=(0,i.useState)(!1);return a.length?(0,d.jsxs)(u,{children:[(0,d.jsxs)(p,{onClick:()=>z(e=>!e),children:[(0,d.jsxs)(f,{children:[o,e]}),(0,d.jsx)(g,{open:m,children:(0,d.jsx)(r.A,{size:12})})]}),(0,d.jsx)(h,{open:m,children:(0,d.jsx)(x,{children:a.map(e=>{const o=s.some(o=>o.id===e.id);return(0,d.jsxs)(b,{children:[(0,d.jsx)(y,{active:t===e.id,onClick:()=>n(e),children:e.name}),(0,d.jsx)(w,{active:o,title:o?"Remover dos favoritos":"Adicionar aos favoritos",onClick:o=>{o.stopPropagation(),c(e)},children:(0,d.jsx)(l.A,{size:12,fill:o?"currentColor":"none"})})]},e.id)})})})]}):null}function v({config:e,activeId:o,onSelect:a,hashPrefix:n}){const r=`atlantis-recent-${n}`,u=`atlantis-fav-${n}`,[p,f]=(0,i.useState)(()=>c(r)),[g,h]=(0,i.useState)(()=>c(u)),x=(0,i.useCallback)(e=>{e.file&&f(o=>function(e,o,a){const i=[o,...a.filter(e=>e.id!==o.id)].slice(0,10);return localStorage.setItem(e,JSON.stringify(i)),i}(r,e,o)),a(e)},[a,r]),b=(0,i.useCallback)(e=>{h(o=>function(e,o,a){const i=a.some(e=>e.id===o.id)?a.filter(e=>e.id!==o.id):[...a,o];return localStorage.setItem(e,JSON.stringify(i)),i}(u,e,o))},[u]);return(0,d.jsxs)(m,{children:[(0,d.jsx)(z,{title:"Recentes",icon:(0,d.jsx)(s.A,{size:13}),entries:p,activeId:o,onSelect:x,favorites:g,onToggleFav:b}),(0,d.jsx)(z,{title:"Favoritos",icon:(0,d.jsx)(l.A,{size:13}),entries:g,activeId:o,onSelect:x,favorites:g,onToggleFav:b}),(0,d.jsx)(t.CD,{entries:e.entries,activeId:o,onSelect:x})]})}var j=a(28976),$=a(18055),A=a(66225),k=a(302),S=a(39895),T=a(6930),M=a(14944);const C=n.default.div`
  background: ${t.w4.colors.codeBg};
  border: 1px solid ${t.w4.colors.codeBorder};
  border-radius: ${t.w4.borderRadius.md};
  padding: ${t.w4.spacing.lg};
  margin: ${t.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  svg { max-width: 100%; }
`,B=n.default.div`
  color: #f85149;
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: ${t.w4.typography.fontSizeSm};
  white-space: pre-wrap;
`;let E=!1;function P({code:e}){const o=(0,i.useRef)(null),[n,r]=(0,i.useState)(null);return(0,i.useEffect)(()=>{let i=!1;return async function(){const n=(await a.e(774).then(a.bind(a,30774))).default;if(E||(n.initialize({startOnLoad:!1,theme:"dark",themeVariables:{background:t.w4.colors.codeBg,primaryColor:t.w4.colors.accent,primaryTextColor:t.w4.colors.mainText,lineColor:t.w4.colors.border}}),E=!0),o.current&&!i)try{const a=`mermaid-${Math.random().toString(36).slice(2)}`,{svg:t}=await n.render(a,e);!i&&o.current&&(o.current.innerHTML=t)}catch(e){i||r(e instanceof Error?e.message:String(e))}}(),()=>{i=!0}},[e]),n?(0,d.jsx)(C,{children:(0,d.jsxs)(B,{children:["Mermaid error: ",n]})}):(0,d.jsx)(C,{ref:o})}var L=a(68383),O=a(21426),R=a(25609),N=a(20320);const F=n.default.div`
  margin: ${t.w4.spacing.lg} 0;
  border-radius: ${t.w4.borderRadius.md};
  border: 1px solid ${t.w4.colors.codeBorder};
  overflow: hidden;
`,I=n.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${t.w4.colors.codeBorder};
`,D=n.default.span`
  font-family: ${t.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,V=n.default.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":t.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${t.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${t.w4.colors.sidebarText}; border-color: ${t.w4.colors.sidebarText}; }
`,G={...O.A,'pre[class*="language-"]':{...O.A['pre[class*="language-"]'],background:t.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...O.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function H({lang:e="text",code:o}){const[a,n]=(0,i.useState)(!1);return(0,d.jsxs)(F,{children:[(0,d.jsxs)(I,{children:[(0,d.jsx)(D,{children:e}),(0,d.jsxs)(V,{copied:a,onClick:()=>{navigator.clipboard.writeText(o).then(()=>{n(!0),setTimeout(()=>n(!1),2e3)})},children:[a?(0,d.jsx)(R.A,{size:12}):(0,d.jsx)(N.A,{size:12}),a?"Copied!":"Copy"]})]}),(0,d.jsx)(L.A,{language:e,style:G,showLineNumbers:o.split("\n").length>8,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:t.w4.colors.codeBg},wrapLongLines:!1,children:o})]})}var U=a(65569),Y=a(8218),K=a(57230),W=a(22966),J=a(21069);const _={NOTE:{bg:"rgba(88, 166, 255, 0.08)",border:"#58a6ff",icon:U.A,label:"Note",color:"#58a6ff"},TIP:{bg:"rgba(63, 185, 80, 0.08)",border:"#3fb950",icon:Y.A,label:"Tip",color:"#3fb950"},IMPORTANT:{bg:"rgba(163, 113, 247, 0.08)",border:"#a371f7",icon:K.A,label:"Important",color:"#a371f7"},WARNING:{bg:"rgba(210, 153, 34, 0.08)",border:"#d29922",icon:W.A,label:"Warning",color:"#d29922"},CAUTION:{bg:"rgba(248, 81, 73, 0.08)",border:"#f85149",icon:J.A,label:"Caution",color:"#f85149"}},Z=n.default.div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${t.w4.borderRadius.md} ${t.w4.borderRadius.md} 0;
  padding: ${t.w4.spacing.md} ${t.w4.spacing.lg};
  margin: ${t.w4.spacing.lg} 0;
`,q=n.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${t.w4.typography.fontFamily};
  margin-bottom: ${t.w4.spacing.sm};
`,Q=n.default.div`
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`;function X({type:e,children:o}){const a=_[e]??_.NOTE,i=a.icon;return(0,d.jsxs)(Z,{bg:a.bg,border:a.border,children:[(0,d.jsxs)(q,{color:a.color,children:[(0,d.jsx)(i,{size:15,strokeWidth:2}),a.label]}),(0,d.jsx)(Q,{children:o})]})}const ee=n.default.nav`
  width: 220px;
  min-width: 220px;
  padding: ${t.w4.spacing.xxl} 0 ${t.w4.spacing.xxl} ${t.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,oe=n.default.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  margin-bottom: ${t.w4.spacing.md};
`,ae=n.default.ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,ie=n.default.a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${t.w4.typography.fontSizeSm};
  font-family: ${t.w4.typography.fontFamily};
  color: ${({active:e})=>e?t.w4.colors.accent:t.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?t.w4.colors.accent:"transparent"};
  border-radius: 0 ${t.w4.borderRadius.sm} ${t.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${t.w4.colors.mainText}; background: ${t.w4.colors.sidebarHover}; }
`;function te({headings:e,activeId:o}){return e.length<2?null:(0,d.jsxs)(ee,{children:[(0,d.jsx)(oe,{children:"On this page"}),(0,d.jsx)(ae,{children:e.map(e=>(0,d.jsx)("li",{children:(0,d.jsx)(ie,{href:`#${e.id}`,active:o===e.id,level:e.level,onClick:o=>{o.preventDefault(),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},children:e.text})},e.id))})]})}function ne(e){return e.toLowerCase().replace(/[*_`[\]()#]/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}function re(e){const{Children:o,isValidElement:i}=a(27359);return o.toArray(e).map(e=>"string"==typeof e?e:"number"==typeof e?String(e):i(e)?re(e.props.children??""):"").join("")}function le(){return e=>{!function e(o){if("blockquote"===o.type){const e=o.children?.[0];if("paragraph"===e?.type){const a=e.children?.[0];if("text"===a?.type){const i=a.value?.match(/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i);i&&(a.value=a.value.slice(i[0].length),a.value.trim()||1!==e.children.length||o.children.shift(),o.data=o.data??{},o.data.hName="div",o.data.hProperties={"data-callout":i[1].toUpperCase()})}}}o.children?.forEach(e)}(e)}}const se=n.default.div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${t.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,de=n.default.div`flex: 1; min-width: 0;`,ce=n.default.article`
  padding: ${t.w4.spacing.xxl} 0;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeMd};
  line-height: ${t.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${t.w4.spacing.xl} 0 ${t.w4.spacing.md};
    color: ${t.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${t.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${t.w4.typography.fontSizeXl}; border-bottom: 1px solid ${t.w4.colors.border}; padding-bottom: ${t.w4.spacing.sm}; }
  h2 { font-size: ${t.w4.typography.fontSizeLg}; border-bottom: 1px solid ${t.w4.colors.border}; padding-bottom: ${t.w4.spacing.xs}; }
  h3 { font-size: ${t.w4.typography.fontSizeMd}; }

  p { margin: ${t.w4.spacing.md} 0; }

  a { color: ${t.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${t.w4.colors.accentHover}; } }

  ul, ol { margin: ${t.w4.spacing.md} 0; padding-left: ${t.w4.spacing.xl}; }
  li { margin: ${t.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${t.w4.colors.border};
    margin: ${t.w4.spacing.lg} 0;
    padding: ${t.w4.spacing.sm} ${t.w4.spacing.lg};
    background: ${t.w4.colors.surface};
    color: ${t.w4.colors.mainTextMuted};
    border-radius: 0 ${t.w4.borderRadius.sm} ${t.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${t.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${t.w4.colors.codeBg};
    border: 1px solid ${t.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${t.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${t.w4.spacing.lg} 0; font-size: ${t.w4.typography.fontSizeBase}; }
  th, td { padding: ${t.w4.spacing.sm} ${t.w4.spacing.md}; border: 1px solid ${t.w4.colors.border}; text-align: left; }
  th { background: ${t.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${t.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${t.w4.colors.border}; margin: ${t.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${t.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${t.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${t.w4.spacing.lg} 0; }
`,me=n.default.div`
  display: flex;
  gap: ${t.w4.spacing.lg};
  padding: ${t.w4.spacing.xxl} 0;
  border-top: 1px solid ${t.w4.colors.border};
  margin-top: ${t.w4.spacing.xxl};
`,ue=n.default.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${t.w4.spacing.md} ${t.w4.spacing.lg};
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${t.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,pe=n.default.div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${t.w4.colors.sidebarTextMuted}; font-family: ${t.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,fe=n.default.div`
  font-size: ${t.w4.typography.fontSizeBase}; color: ${t.w4.colors.accent};
  font-family: ${t.w4.typography.fontFamily}; font-weight: 500;
`,ge=n.default.div`
  color: ${t.w4.colors.mainTextMuted};
  padding: ${t.w4.spacing.xxl} ${t.w4.spacing.xl};
  font-family: ${t.w4.typography.fontFamily};
`;function he(e){return function({children:o,...a}){const i=`h${e}`,t=re(o),n=ne(t);return(0,d.jsxs)(i,{id:n,...a,children:[o,(0,d.jsx)("a",{className:"heading-anchor",href:`#${n}`,"aria-label":`Link to "${t}"`,children:(0,d.jsx)(A.A,{size:14})})]})}}function xe({file:e,prevEntry:o,nextEntry:t,onNavigate:n}){const[l,s]=(0,i.useState)(null),[c,m]=(0,i.useState)(null),u=(0,i.useRef)(null);if((0,i.useEffect)(()=>{s(null),fetch(`${a.p}content/${e}`).then(e=>{if(!e.ok)throw new Error(`${e.status} ${e.statusText}`);return e.text()}).then(s).catch(o=>s(`> **Error loading \`${e}\`:** ${o.message}`))},[e]),(0,i.useEffect)(()=>{if(!l||!u.current)return;const e=u.current.querySelectorAll("h2[id], h3[id]");if(!e.length)return;const o=new IntersectionObserver(e=>{const o=e.filter(e=>e.isIntersecting);o.length&&m(o[0].target.id)},{rootMargin:"-10% 0% -60% 0%",threshold:0});return e.forEach(e=>o.observe(e)),()=>o.disconnect()},[l]),null===l)return(0,d.jsx)(ge,{children:"Loading…"});const p=function(e){const o=[],a=/^(#{2,3})\s+(.+)$/gm;let i;for(;null!==(i=a.exec(e));){const e=i[1].length,a=i[2].trim().replace(/\*\*(.+?)\*\*/g,"$1").replace(/\*(.+?)\*/g,"$1").replace(/`(.+?)`/g,"$1").replace(/\[(.+?)\]\(.+?\)/g,"$1");o.push({level:e,text:a,id:ne(a)})}return o}(l),f=o||t;return(0,d.jsxs)(se,{children:[(0,d.jsxs)(de,{children:[(0,d.jsx)(ce,{ref:u,children:(0,d.jsx)(j.oz,{remarkPlugins:[$.A,M.A,le],rehypePlugins:[S.A,T.A],components:{div({node:e,children:o,...a}){const i=a["data-callout"];return i?(0,d.jsx)(X,{type:i,children:o}):(0,d.jsx)("div",{...a,children:o})},h1:he(1),h2:he(2),h3:he(3),h4:he(4),pre:({children:e})=>(0,d.jsx)(d.Fragment,{children:e}),code({className:e,children:o}){const a=/language-(\w+)/.exec(e??"")?.[1],i=String(o).replace(/\n$/,"");return"mermaid"===a?(0,d.jsx)(P,{code:i}):a||i.includes("\n")?(0,d.jsx)(H,{lang:a,code:i}):(0,d.jsx)("code",{className:e,children:o})}},children:l})}),f&&(0,d.jsxs)(me,{children:[o?(0,d.jsxs)(ue,{align:"left",onClick:()=>n?.(o),children:[(0,d.jsxs)(pe,{children:[(0,d.jsx)(k.A,{size:13})," Previous"]}),(0,d.jsx)(fe,{children:o.name})]}):(0,d.jsx)("div",{style:{flex:1}}),t?(0,d.jsxs)(ue,{align:"right",onClick:()=>n?.(t),children:[(0,d.jsxs)(pe,{children:["Next ",(0,d.jsx)(r.A,{size:13})]}),(0,d.jsx)(fe,{children:t.name})]}):(0,d.jsx)("div",{style:{flex:1}})]})]}),(0,d.jsx)(te,{headings:p,activeId:c})]})}function be(e,o){for(const a of e){if(a.id===o)return a;if(a.children){const e=be(a.children,o);if(e)return e}}}function ye(e){return e.flatMap(e=>e.children?ye(e.children):e.file?[e]:[])}const we=n.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${t.w4.typography.fontFamily};
  background: ${t.w4.colors.mainBg};
`,ze=n.default.div`
  position: absolute;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  left: ${({x:e})=>e}%;
  top: ${({y:e})=>e}%;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%,
    hsl(${({hue:e})=>e}, 80%, 65%) 0%,
    hsl(${({hue:e})=>e+30}, 70%, 45%) 60%,
    transparent 100%
  );
  filter: blur(60px);
  opacity: 0.18;
  animation: drift ${({dur:e})=>e}s ease-in-out infinite alternate;
  pointer-events: none;

  @keyframes drift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(30px, -20px) scale(1.12); }
  }
`,ve=n.default.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${t.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${t.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,je=n.default.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,$e=n.default.h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${t.w4.colors.mainText} 0%,
    ${t.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,Ae=n.default.p`
  font-size: ${t.w4.typography.fontSizeMd};
  color: ${t.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,ke=n.default.span`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,Se={en:"Browse the sidebar",pt:"Explora o menu lateral"};function Te({title:e,sub:o,lang:a}){return(0,d.jsxs)(we,{children:[(0,d.jsx)(ve,{}),(0,d.jsx)(ze,{size:500,x:10,y:-10,hue:210,dur:7}),(0,d.jsx)(ze,{size:400,x:60,y:50,hue:270,dur:9}),(0,d.jsx)(ze,{size:300,x:30,y:70,hue:190,dur:6}),(0,d.jsxs)(je,{children:[(0,d.jsx)($e,{children:e}),(0,d.jsx)(Ae,{children:o}),(0,d.jsxs)(ke,{children:[(0,d.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:(0,d.jsx)("polyline",{points:"15 18 9 12 15 6"})}),Se[a]??Se.en]})]})]})}function Me(e,o,a){return"string"==typeof e?e:e[o]??e[a]??Object.values(e)[0]??""}function Ce({navigation:e,languages:o,defaultLang:a,locale:n,hashPrefix:r,topBarRight:l,welcomeTitle:s="Blog",welcomeSub:c="Notes, guides, and references — pick a topic from the sidebar to get started."}){const m=o?Object.keys(o):[],[u,p]=(m.length,(0,i.useState)(()=>a??m[0]??""));(0,i.useEffect)(()=>{n&&m.includes(n)&&n!==u&&p(n)},[n]);const f=(0,i.useMemo)(()=>o&&u?o[u].navigation:e??{entries:[]},[o,e,u]),g=((0,i.useMemo)(()=>ye(f.entries),[f]),(0,i.useCallback)(e=>{const o=e.match(new RegExp(`^#\\/${r}\\/(.+)$`));if(o)return be(f.entries,o[1])},[f,r])),[h,x]=(0,i.useState)(()=>g(window.location.hash)??null);(0,i.useEffect)(()=>{if(!h)return;const e=be(f.entries,h.id);x(e??null)},[u,f]),(0,i.useEffect)(()=>{const e=()=>{const e=g(window.location.hash);e&&x(e)};return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[g]);const b=(0,i.useCallback)(e=>{e.file&&(x(e),window.location.hash=`#/${r}/${e.id}`)},[r]),y=(0,i.useMemo)(()=>ye(f.entries),[f]),w=y.findIndex(e=>e.id===h?.id),z=w>0?y[w-1]:null,j=w<y.length-1?y[w+1]:null,$=h?.label??h?.name??r,A=Me(s,u,a??m[0]??""),k=Me(c,u,a??m[0]??"");return(0,d.jsx)(t.PE,{title:$,activeId:h?.id??null,topBarRight:l,sidebar:(0,d.jsx)(v,{config:f,activeId:h?.id??null,onSelect:b,hashPrefix:r}),children:h?.file?(0,d.jsx)(xe,{file:h.file,prevEntry:z,nextEntry:j,onNavigate:b}):(0,d.jsx)(Te,{title:A,sub:k,lang:u})})}n.default.div`
  display: flex;
  gap: 4px;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  padding: 2px;
`,n.default.button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${t.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?t.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":t.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":t.w4.colors.mainText};
  }
`},30894(e,o,a){a.d(o,{Ym:()=>d});var i=a(27359),t=a(85723);const n="atlantis:locale",r="shell:locale";function l(e){return"en"===e||"pt"===e}function s(){try{const e=localStorage.getItem(n);if(l(e))return e}catch{}return"en"}function d(){const[e,o]=(0,i.useState)(s),a=(0,i.useCallback)(e=>{o(e),function(e){try{localStorage.setItem(n,e)}catch{}(0,t.Is)(r,e).catch(()=>{})}(e),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,i.useEffect)(()=>{const e=e=>{const a=e.detail;o(a)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,i.useEffect)(()=>{(0,t.PL)(r).then(a=>{if(l(a)&&a!==e){try{localStorage.setItem(n,a)}catch{}o(a)}}).catch(()=>{})},[]),[e,a]}(0,t.PL)(r).then(e=>{if(l(e))try{localStorage.setItem(n,e)}catch{}}).catch(()=>{});var c=a(53233);a(65723),c.default.div`
  display: flex;
  gap: 4px;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  padding: 2px;
`,c.default.button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${t.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?t.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":t.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":t.w4.colors.mainText};
  }
`},74914(e,o,a){a.d(o,{FlyoutPanel:()=>x});var i=a(27359),t=a(53233),n=a(77207),r=a(20255),l=a(217),s=a(15959),d=a(65185),c=a(65723);const m=n.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,u=t.default.div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${l.w4.colors.surfaceRaised};
  border: 1px solid ${l.w4.colors.accentMuted};
  border-radius: ${l.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${l.w4.colors.borderSubtle},
    0 16px 48px rgba(0, 0, 0, 0.55);
  min-width: 210px;
  overflow-y: auto;
  animation: ${m} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  backdrop-filter: blur(12px);

  /* Left connector line */
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 2px;
    background: ${l.w4.colors.accent};
    opacity: 0.4;
  }
`,p=t.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${l.w4.colors.accent};
  border-bottom: 1px solid ${l.w4.colors.borderSubtle};
  font-family: ${l.w4.typography.fontFamily};
`,f=t.default.button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?l.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${l.w4.colors.accentMuted};
    color: ${l.w4.colors.mainText};
  }
`;function g({iconKey:e}){const o=e?d.t[e]??r.A:r.A;return(0,c.jsx)(o,{size:14,strokeWidth:1.75})}function h({entries:e,activeId:o,onSelect:a}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(i.Fragment,{children:(0,c.jsx)(h,{entries:e.children,activeId:o,onSelect:a})},e.id):(0,c.jsxs)(f,{active:o===e.id,onClick:()=>a(e),children:[(0,c.jsx)(g,{iconKey:e.icon}),e.name]},e.id))})}function x({activeId:e}){const{flyout:o,scheduleFlyoutClose:a,cancelFlyoutClose:i}=(0,s.c)();if(!o)return null;const t=o.entry.icon?d.t[o.entry.icon]??r.A:r.A;return(0,c.jsxs)(u,{anchorY:o.anchorY,onMouseEnter:i,onMouseLeave:a,children:[(0,c.jsxs)(p,{children:[(0,c.jsx)(t,{size:13,strokeWidth:2}),o.entry.name]}),(0,c.jsx)(h,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),a()}})]})}},15959(e,o,a){a.d(o,{I:()=>t,c:()=>n});var i=a(27359);const t=(0,i.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),n=()=>(0,i.useContext)(t)},65185(e,o,a){a.d(o,{t:()=>Y});var i=a(49510),t=a(99038),n=a(28207),r=a(36896),l=a(37901),s=a(39848),d=a(22164),c=a(43775),m=a(83539),u=a(41783),p=a(1837),f=a(82314),g=a(35751),h=a(20255),x=a(69633),b=a(92946),y=a(40822),w=a(36720),z=a(43317),v=a(52709),j=a(83517),$=a(37032),A=a(6949),k=a(8218),S=a(36829),T=a(15553),M=a(59591),C=a(72820),B=a(14621),E=a(66673),P=a(49033),L=a(31365),O=a(65912),R=a(88641),N=a(83249),F=a(1821),I=a(19161),D=a(71849),V=a(77747),G=a(2932),H=a(24525),U=a(57230);const Y={activity:r.A,"bar-chart-2":i.A,book:s.A,"book-open":l.A,calendar:c.A,clock:u.A,"circle-dot":m.A,feather:f.A,"file-text":g.A,globe:w.A,hash:z.A,heart:v.A,landmark:j.A,layers:n.A,leaf:A.A,map:M.A,package:E.A,compass:p.A,"git-branch":b.A,github:y.A,minus:B.A,terminal:N.A,thermometer:F.A,users:D.A,wind:V.A,"pie-chart":t.A,plus:L.A,slash:O.A,star:R.A,zap:U.A,bot:d.A,lightbulb:k.A,"message-square":C.A,wrench:G.A,x:H.A,"layout-grid":$.A,list:S.A,file:h.A,folder:x.A,"map-pin":T.A,"pen-tool":P.A,type:I.A}},85723(e,o,a){a.d(o,{PE:()=>T,CD:()=>H,PL:()=>X,Is:()=>Q,w4:()=>i.w4});var i=a(217),t=a(27359),n=a(53233),r=a(65723);n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${i.w4.spacing.sm};
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,n.default.div`
  position: relative;
`;var l=a(77207),s=a(73661),d=a(15959);const c="260px",m="56px",u=n.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);
`,p=n.default.div`
  width: ${m};
  min-width: ${m};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,f=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${i.w4.borderRadius.md};
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    color: ${i.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,g=l.keyframes`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,h=n.default.button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${i.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${i.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${i.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,x=n.default.span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${g} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`\n    background: linear-gradient(135deg, ${i.w4.colors.accent}, ${i.w4.colors.accentHover});\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`,b=n.default.div`
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  padding-left: ${i.w4.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${i.w4.spacing.sm};
    color: ${i.w4.colors.border};
  }
`,y=n.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${i.w4.spacing.sm};
  padding: 0 ${i.w4.spacing.lg};
`,w=n.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,z=n.default.div`
  display: flex;
  flex-direction: column;
  height: ${i.w4.sizes.fullHeight};
  background: ${i.w4.colors.mainBg};
  font-family: ${i.w4.typography.fontFamily};
  color: ${i.w4.colors.mainText};
  overflow: hidden;
`,v=n.default.aside`
  width: ${({collapsed:e})=>e?m:c};
  min-width: ${({collapsed:e})=>e?m:c};
  background: ${i.w4.colors.sidebarBg};
  border-right: 1px solid ${i.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${i.w4.breakpoints.md}) {
    display: none;
  }
`,j=n.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,$=n.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,A=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function k(){return(0,r.jsx)(h,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:A.map((e,o)=>(0,r.jsx)(x,{index:o,accent:e.accent,children:e.char},o))})}const S="atlantis:sidebar-collapsed";function T({sidebar:e,children:o,topBarRight:i,title:n="Atlantis",activeId:l=null}){const[c,m]=(0,t.useState)(()=>{try{return"true"===localStorage.getItem(S)}catch{return!1}}),[g,h]=(0,t.useState)(null),x=(0,t.useRef)(),A=()=>m(e=>{const o=!e;try{localStorage.setItem(S,String(o))}catch{}return o}),T=t.useMemo(()=>t.lazy(()=>Promise.resolve().then(a.bind(a,74914)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(d.I.Provider,{value:{collapsed:c,toggle:A,flyout:g,openFlyout:(e,o,a)=>{clearTimeout(x.current),h({entry:e,anchorY:o,onSelect:a})},scheduleFlyoutClose:()=>{x.current=setTimeout(()=>h(null),160)},cancelFlyoutClose:()=>clearTimeout(x.current)},children:(0,r.jsxs)(z,{children:[(0,r.jsxs)(u,{children:[e&&(0,r.jsx)(p,{children:(0,r.jsx)(f,{onClick:A,title:c?"Expand sidebar":"Collapse sidebar",children:(0,r.jsx)(s.A,{size:17})})}),(0,r.jsx)(k,{}),n&&(0,r.jsx)(b,{children:n}),i&&(0,r.jsx)(y,{children:i})]}),(0,r.jsxs)(w,{children:[null!=e&&(0,r.jsx)(v,{collapsed:c,children:(0,r.jsx)(j,{children:e})}),(0,r.jsx)($,{children:o})]}),g&&(0,r.jsx)(t.Suspense,{fallback:null,children:(0,r.jsx)(T,{activeId:l})})]})})}var M=a(20255),C=a(69753),B=a(65185);const E=n.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,P=n.default.div`
  overflow: hidden;
`,L=n.default.div`
  padding-left: ${i.w4.spacing.md};
`,O=n.default.div`
  display: flex;
  flex-direction: column;
`,R=n.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${i.w4.spacing.sm} ${i.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":i.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${i.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${i.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${i.w4.colors.sidebarText};
    background: ${i.w4.colors.sidebarHover};
  }
`,N=n.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,F=n.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,I=n.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${i.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,D=n.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${i.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?i.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?i.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?i.w4.colors.sidebarActive:i.w4.colors.sidebarText};
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${i.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${i.w4.borderRadius.md} ${i.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    color: ${i.w4.colors.mainText};
  }
`;function V({iconKey:e,size:o=16}){if(e&&!(e in B.t))return(0,r.jsx)("span",{style:{fontSize:o,lineHeight:1,display:"flex",alignItems:"center"},children:e});const a=e?B.t[e]??M.A:M.A;return(0,r.jsx)(a,{size:o,strokeWidth:1.75})}function G({entry:e,activeId:o,onSelect:a}){const[i,n]=(0,t.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:c,cancelFlyoutClose:m}=(0,d.c)();return e.children&&e.children.length>0?(0,r.jsxs)(O,{children:[(0,r.jsxs)(R,{collapsed:l,onClick:()=>{l||n(e=>!e)},onMouseEnter:l?o=>{const i=o.currentTarget.getBoundingClientRect();s(e,i.top,a)}:void 0,onMouseLeave:l?c:void 0,children:[(0,r.jsxs)(N,{collapsed:l,children:[(0,r.jsx)(V,{iconKey:e.icon,size:16}),(0,r.jsx)(F,{collapsed:l,children:e.name})]}),(0,r.jsx)(I,{open:i,collapsed:l,children:(0,r.jsx)(C.A,{size:13})})]}),(0,r.jsx)(E,{open:i&&!l,children:(0,r.jsx)(P,{children:(0,r.jsx)(L,{children:e.children.map(e=>(0,r.jsx)(G,{entry:e,activeId:o,onSelect:a},e.id))})})})]}):(0,r.jsxs)(D,{active:o===e.id,collapsed:l,onClick:()=>a(e),onMouseEnter:l?o=>{const i=o.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},i.top,a)}:void 0,onMouseLeave:l?c:void 0,children:[(0,r.jsx)(V,{iconKey:e.icon,size:15}),(0,r.jsx)(F,{collapsed:l,children:e.name})]})}function H({entries:e,activeId:o,onSelect:a}){return(0,r.jsx)("div",{children:e.map(e=>(0,r.jsx)(G,{entry:e,activeId:o,onSelect:a},e.id))})}const U=l.keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;n.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${U} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${i.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${i.w4.colors.surface};
  }
`,n.default.span`
  display: block;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${i.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${i.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${i.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${i.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,a(74914);var Y=a(61920),K=a(48607),W=a(68479);n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  cursor: pointer;
  color: ${i.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    color: ${i.w4.colors.accent};
    border-color: ${i.w4.colors.accent};
  }

  &:active {
    transform: scale(0.92);
  }

  svg {
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &:hover svg {
    transform: rotate(15deg);
  }
`,Y.A,K.A,W.A;[{id:"europe",name:"Europe",icon:"🌍",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"🇵🇹",zoom:12},{id:"lourinha",name:"Lourinhã",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"🇵🇹",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"🇬🇧",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"🇫🇷",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"🇩🇪",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"🇪🇸",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"🇮🇹",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"🇳🇱",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"🇬🇷",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"🇧🇪",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"🇦🇹",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"🇵🇱",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"🇸🇪",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"🇳🇴",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"🇩🇰",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"🇫🇮",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"🇮🇸",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"🇮🇪",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"🇨🇭",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"🇺🇦",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"🇷🇺",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"🇷🇴",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"🇭🇺",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"🇨🇿",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"🇸🇰",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"🇸🇮",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"🇭🇷",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"🇷🇸",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"🇧🇦",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"🇧🇬",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"🇪🇪",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"🇱🇻",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"🇱🇹",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"🇧🇾",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"🇲🇩",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"🇦🇱",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"🇲🇰",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"🇲🇪",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"🇨🇾",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"🇲🇹",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"🇱🇺",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"🇦🇩",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"🇲🇨",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"🇸🇲",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"🇱🇮",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"🇻🇦",zoom:15}]},{id:"americas",name:"Americas",icon:"🌎",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"🇺🇸",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"🇺🇸",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"🇨🇦",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"🇲🇽",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"🇧🇿",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"🇬🇹",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"🇸🇻",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"🇭🇳",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"🇳🇮",zoom:12},{id:"san-jose-cr",name:"San José",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"🇨🇷",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"🇵🇦",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"🇨🇺",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"🇧🇸",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"🇯🇲",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"🇭🇹",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"🇩🇴",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"🇰🇳",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"🇱🇨",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"🇻🇨",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"🇧🇧",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"🇦🇬",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"🇩🇲",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"🇬🇩",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"🇹🇹",zoom:12},{id:"bogota",name:"Bogotá",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"🇨🇴",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"🇻🇪",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"🇬🇾",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"🇸🇷",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"🇪🇨",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"🇵🇪",zoom:12},{id:"sao-paulo",name:"São Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"🇧🇷",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"🇧🇴",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"🇨🇱",zoom:12},{id:"asuncion",name:"Asunción",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"🇵🇾",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"🇦🇷",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"🇺🇾",zoom:12}]},{id:"africa",name:"Africa",icon:"🌍",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"🇲🇦",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"🇩🇿",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"🇹🇳",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"🇱🇾",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"🇪🇬",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"🇸🇩",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"🇸🇳",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"🇬🇲",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"🇬🇼",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"🇬🇳",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"🇸🇱",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"🇱🇷",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"🇨🇮",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"🇬🇭",zoom:12},{id:"lome",name:"Lomé",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"🇹🇬",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"🇧🇯",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"🇳🇬",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"🇳🇪",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"🇲🇱",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"🇧🇫",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"🇲🇷",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"🇨🇻",zoom:13},{id:"yaounde",name:"Yaoundé",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"🇨🇲",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"🇹🇩",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"🇨🇫",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"🇬🇶",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"🇬🇦",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"🇨🇬",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"🇨🇩",zoom:12},{id:"sao-tome",name:"São Tomé",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"🇸🇹",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"🇸🇸",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"🇪🇹",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"🇪🇷",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"🇩🇯",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"🇸🇴",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"🇰🇪",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"🇺🇬",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"🇷🇼",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"🇧🇮",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"🇹🇿",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"🇲🇬",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"🇰🇲",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"🇲🇺",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"🇸🇨",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"🇦🇴",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"🇿🇲",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"🇲🇼",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"🇲🇿",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"🇿🇼",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"🇧🇼",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"🇳🇦",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"🇿🇦",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"🇸🇿",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"🇱🇸",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"🕌",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"🇸🇦",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"🇦🇪",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"🇶🇦",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"🇧🇭",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"🇰🇼",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"🇴🇲",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"🇾🇪",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"🇮🇶",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"🇮🇷",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"🇹🇷",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"🇱🇧",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"🇸🇾",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"🇯🇴",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"🇮🇱",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"🇵🇸",zoom:13}]},{id:"asia",name:"Asia",icon:"🌏",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"🇦🇫",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"🇰🇿",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"🇰🇬",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"🇺🇿",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"🇹🇯",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"🇹🇲",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"🇦🇲",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"🇦🇿",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"🇬🇪",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"🇵🇰",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"🇮🇳",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"🇳🇵",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"🇧🇩",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"🇱🇰",zoom:12},{id:"male",name:"Malé",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"🇲🇻",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"🇨🇳",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"🇯🇵",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"🇰🇷",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"🇰🇵",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"🇲🇳",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"🇹🇭",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"🇻🇳",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"🇰🇭",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"🇱🇦",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"🇲🇲",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"🇲🇾",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"🇸🇬",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"🇮🇩",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"🇵🇭",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"🇧🇳",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"🇹🇱",zoom:13}]},{id:"oceania",name:"Oceania",icon:"🌊",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"🇦🇺",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"🇳🇿",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"🇵🇬",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"🇫🇯",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"🇸🇧",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"🇻🇺",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"🇹🇴",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"🇼🇸",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"🇹🇻",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"🇰🇮",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"🇲🇭",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"🇫🇲",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"🇵🇼",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"🇳🇷",zoom:14}]}].flatMap(e=>e.places);const J="documents",_="settings";function Z(){return new Promise((e,o)=>{const a=indexedDB.open("atlantis-tools",2);a.onupgradeneeded=e=>{const o=e.target.result;o.objectStoreNames.contains(J)||o.createObjectStore(J,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),o.objectStoreNames.contains(_)||o.createObjectStore(_,{keyPath:"key"})},a.onsuccess=()=>e(a.result),a.onerror=()=>o(a.error)})}let q={async saveDoc(e,o,a){const i=await Z(),t={appId:e,name:o,content:a,savedAt:Date.now()};return new Promise((e,o)=>{const a=i.transaction(J,"readwrite").objectStore(J).add(t);a.onsuccess=()=>e(String(a.result)),a.onerror=()=>o(a.error)})},async updateDoc(e,o,a){const i=await Z();return new Promise((t,n)=>{const r=i.transaction(J,"readwrite").objectStore(J),l=r.get(Number(e));l.onsuccess=()=>{const e=l.result;if(!e)return void n(new Error("Doc not found"));const i=r.put({...e,name:o,content:a,savedAt:Date.now()});i.onsuccess=()=>t(),i.onerror=()=>n(i.error)},l.onerror=()=>n(l.error)})},async listDocs(e){const o=await Z();return new Promise((a,i)=>{const t=o.transaction(J,"readonly").objectStore(J).index("appId").getAll(e);t.onsuccess=()=>a(t.result.map(e=>({...e,id:String(e.id)})).reverse()),t.onerror=()=>i(t.error)})},async deleteDoc(e){const o=await Z();return new Promise((a,i)=>{const t=o.transaction(J,"readwrite").objectStore(J).delete(Number(e));t.onsuccess=()=>a(),t.onerror=()=>i(t.error)})},async putSetting(e,o){const a=await Z();return new Promise((i,t)=>{const n=a.transaction(_,"readwrite").objectStore(_).put({key:e,value:o});n.onsuccess=()=>i(),n.onerror=()=>t(n.error)})},async getSetting(e){const o=await Z();return new Promise((a,i)=>{const t=o.transaction(_,"readonly").objectStore(_).get(e);t.onsuccess=()=>a(t.result?t.result.value:null),t.onerror=()=>i(t.error)})}};function Q(e,o){return q.putSetting(e,o)}function X(e){return q.getSetting(e)}n.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,n.default.div`
  background: ${i.w4.colors.sidebarBg};
  border: 1px solid ${i.w4.colors.sidebarBorder};
  border-radius: ${i.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,n.default.div`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
`,n.default.input`
  width: 100%;
  padding: 8px 12px;
  background: ${i.w4.colors.mainBg};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeBase};
  font-family: ${i.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${i.w4.colors.accent}; }
  &::placeholder { color: ${i.w4.colors.sidebarTextMuted}; }
`,n.default.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,n.default.button`
  padding: 7px 18px;
  border-radius: ${i.w4.borderRadius.md};
  font-size: ${i.w4.typography.fontSizeBase};
  font-family: ${i.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:o})=>o?"rgba(248,81,73,0.12)":e?i.w4.colors.accent:"none"};
  color: ${({primary:e,danger:o})=>o?i.w4.colors.danger:e?"#fff":i.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:o})=>o?i.w4.colors.danger:e?i.w4.colors.accent:i.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,n.default.div`
  height: 1px;
  background: ${i.w4.colors.border};
  margin: 0 -4px;
`,n.default.div`
  font-size: 11px;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
`,n.default.div`
  position: relative;
`,n.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeBase};
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
    border-color: ${i.w4.colors.accent};
  }
`,n.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${i.w4.colors.sidebarBg};
  border: 1px solid ${i.w4.colors.sidebarBorder};
  border-radius: ${i.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,n.default.div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,n.default.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,n.default.div`
  padding: 16px 14px;
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  font-style: italic;
`,n.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
  }
`,n.default.button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,n.default.div`
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,n.default.div`
  font-size: 11px;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  margin-top: 1px;
`,n.default.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${i.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`,n.default.div`
  padding: ${i.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${i.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,n.default.section`
  scroll-margin-top: ${i.w4.spacing.lg};
`,n.default.div`
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.lg};
`,n.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${i.w4.spacing.xl};

  @media (max-width: ${i.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,n.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${i.w4.colors.mainBg};
  font-family: ${i.w4.typography.fontFamily};
  color: ${i.w4.colors.mainText};
  overflow: hidden;
`,n.default.header`
  display: flex;
  align-items: center;
  height: 48px;
  background: ${i.w4.colors.sidebarBg};
  border-bottom: 1px solid ${i.w4.colors.sidebarBorder};
  padding: 0 ${i.w4.spacing.lg};
  flex-shrink: 0;
  gap: ${i.w4.spacing.sm};
  z-index: 100;
`,n.default.button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${i.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${i.w4.colors.accent}; }
`,n.default.span`
  color: ${i.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,n.default.div`
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,n.default.span`
  font-weight: 400;
  color: ${i.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,n.default.div`
  flex: 1;
`;const ee=l.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`,oe=l.keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,ae=l.keyframes`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${i.w4.colors.mainBg};
  font-family: ${i.w4.typography.fontFamily};
  animation: ${ee} 0.4s ease 0.15s both;
`,n.default.div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,n.default.div`
  position: absolute;
  inset: 0;
  animation: ${oe} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: ${({delay:e})=>e}s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({size:e})=>e}px;
    height: ${({size:e})=>e}px;
    border-radius: 50%;
    background: ${({color:e})=>e};
    box-shadow: 0 0 8px ${({color:e})=>e}44;
  }
`,n.default.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${i.w4.colors.border};
  animation: ${ae} 1.4s ease-in-out infinite;
`,n.default.span`
  color: ${i.w4.colors.mainTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`},217(e,o,a){a.d(o,{w4:()=>t});const i={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#7a8599",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.15)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#2a3040",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1a2030",success:"#34d399",warning:"#fbbf24",danger:"#f87171"},t={colors:function(){const e={};for(const o of Object.keys(i))e[o]=`var(--at-${o})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"}}},63594(e,o,a){a.d(o,{f:()=>Lo});var i=a(27359),t=a(53233),n=a(77207),r=a(69753);const l=[{id:"vogais",title:"Vogais",subtitle:"A · E · I · O · U",icon:"🔤",color:"#a855f7",cards:[{id:"a",letter:"A",emoji:"🐝",word:"Abelha",hint:"Avião · Anel · Arco · Árvore"},{id:"e",letter:"E",emoji:"🐘",word:"Elefante",hint:"Estrela · Escada · Erva · Espada"},{id:"i",letter:"I",emoji:"🏝️",word:"Ilha",hint:"Iglu · Igreja · Íris · Inseto"},{id:"o",letter:"O",emoji:"🐑",word:"Ovelha",hint:"Ovo · Olho · Ouriço · Ouro"},{id:"u",letter:"U",emoji:"🍇",word:"Uva",hint:"Urso · Unhas · Único · Útil"}]},{id:"silabas-b",title:"Letra B",subtitle:"BA · BE · BI · BO · BU",icon:"🅱️",color:"#3b82f6",cards:[{id:"ba",letter:"BA",emoji:"⛵",word:"Barco",hint:"Bala · Bater · Baile · Banana"},{id:"be",letter:"BE",emoji:"👶",word:"Bebé",hint:"Belo · Beber · Berço · Beleza"},{id:"bi",letter:"BI",emoji:"🚲",word:"Bicicleta",hint:"Bicho · Bico · Bingo · Biscoito"},{id:"bo",letter:"BO",emoji:"⚽",word:"Bola",hint:"Boca · Bolo · Bosque · Borboleta"},{id:"bu",letter:"BU",emoji:"🦋",word:"Borboleta",hint:"Burro · Bufo · Buzina · Bucho"}]},{id:"silabas-c",title:"Letra C",subtitle:"CA · CE · CI · CO · CU",icon:"🐱",color:"#f97316",cards:[{id:"ca",letter:"CA",emoji:"🏠",word:"Casa",hint:"Cama · Cão · Carro · Caracol"},{id:"ce",letter:"CE",emoji:"🦌",word:"Cervo",hint:"Cedo · Cereja · Cesta · Cebola"},{id:"ci",letter:"CI",emoji:"🦢",word:"Cisne",hint:"Cidade · Cinto · Cinema · Cinco"},{id:"co",letter:"CO",emoji:"🐰",word:"Coelho",hint:"Copo · Corda · Coroa · Comida"},{id:"cu",letter:"CU",emoji:"🩹",word:"Curativo",hint:"Cubo · Cuidado · Curva · Cultura"}]},{id:"silabas-d",title:"Letra D",subtitle:"DA · DE · DI · DO · DU",icon:"🦷",color:"#06b6d4",cards:[{id:"da",letter:"DA",emoji:"💃",word:"Dança",hint:"Data · Dado · Dama · Dama"},{id:"de",letter:"DE",emoji:"🦷",word:"Dente",hint:"Dedo · Descanso · Devagar · Dezembro"},{id:"di",letter:"DI",emoji:"💰",word:"Dinheiro",hint:"Dia · Dinossauro · Direto · Disco"},{id:"do",letter:"DO",emoji:"🤒",word:"Doente",hint:"Doce · Dormir · Dois · Domino"},{id:"du",letter:"DU",emoji:"🚿",word:"Duche",hint:"Duro · Duende · Duna · Duplo"}]},{id:"silabas-f",title:"Letra F",subtitle:"FA · FE · FI · FO · FU",icon:"🌸",color:"#ec4899",cards:[{id:"fa",letter:"FA",emoji:"🗣️",word:"Falar",hint:"Faca · Fada · Família · Farinha"},{id:"fe",letter:"FE",emoji:"😊",word:"Feliz",hint:"Feno · Ferro · Festa · Fevereiro"},{id:"fi",letter:"FI",emoji:"🧵",word:"Fio",hint:"Filho · Figo · Fila · Fim"},{id:"fo",letter:"FO",emoji:"📸",word:"Foto",hint:"Fogo · Folha · Forno · Formiga"},{id:"fu",letter:"FU",emoji:"⽕",word:"Fumo",hint:"Futebol · Furo · Futuro · Fungo"}]},{id:"silabas-g",title:"Letra G",subtitle:"GA · GE · GI · GO · GU",icon:"🐱",color:"#84cc16",cards:[{id:"ga",letter:"GA",emoji:"🐱",word:"Gato",hint:"Galinha · Ganso · Garfo · Gavião"},{id:"ge",letter:"GE",emoji:"🧊",word:"Gelo",hint:"Gente · Gelado · Gengibre · Gesto"},{id:"gi",letter:"GI",emoji:"🌻",word:"Girassol",hint:"Girafa · Ginásio · Gigante · Gira"},{id:"go",letter:"GO",emoji:"💧",word:"Gota",hint:"Gordo · Gorila · Golfe · Governo"},{id:"gu",letter:"GU",emoji:"🌂",word:"Guarda-chuva",hint:"Guitarra · Guloso · Guerra · Guia"}]},{id:"silabas-l",title:"Letra L",subtitle:"LA · LE · LI · LO · LU",icon:"🌙",color:"#8b5cf6",cards:[{id:"la",letter:"LA",emoji:"🏞️",word:"Lago",hint:"Lata · Lavar · Laranja · Lagarto"},{id:"le",letter:"LE",emoji:"🦁",word:"Leão",hint:"Leite · Ler · Lento · Lençol"},{id:"li",letter:"LI",emoji:"📚",word:"Livro",hint:"Lição · Liga · Limão · Lindo"},{id:"lo",letter:"LO",emoji:"🐺",word:"Lobo",hint:"Loja · Logo · Longe · Louça"},{id:"lu",letter:"LU",emoji:"🌙",word:"Lua",hint:"Luva · Luta · Lugar · Lume"}]},{id:"silabas-m",title:"Letra M",subtitle:"MA · ME · MI · MO · MU",icon:"🌊",color:"#10b981",cards:[{id:"ma",letter:"MA",emoji:"🍎",word:"Maçã",hint:"Mala · Mapa · Mago · Macaco"},{id:"me",letter:"ME",emoji:"🍯",word:"Mel",hint:"Mesa · Medo · Meias · Melancia"},{id:"mi",letter:"MI",emoji:"🐭",word:"Rato",hint:"Mina · Mimo · Milho · Miúdo"},{id:"mo",letter:"MO",emoji:"🏍️",word:"Mota",hint:"Mola · Monte · Mochila · Morada"},{id:"mu",letter:"MU",emoji:"🎵",word:"Música",hint:"Muro · Muitos · Mudo · Mundial"}]},{id:"silabas-n",title:"Letra N",subtitle:"NA · NE · NI · NO · NU",icon:"🌙",color:"#6366f1",cards:[{id:"na",letter:"NA",emoji:"🏊",word:"Nadar",hint:"Navio · Nariz · Natal · Natureza"},{id:"ne",letter:"NE",emoji:"❄️",word:"Neve",hint:"Neto · Negro · Negar · Necessário"},{id:"ni",letter:"NI",emoji:"🐦",word:"Ninho",hint:"Ninja · Nitido · Nível · Ninguém"},{id:"no",letter:"NO",emoji:"🌙",word:"Noite",hint:"Nota · Nome · Nobre · Noivo"},{id:"nu",letter:"NU",emoji:"☁️",word:"Nuvem",hint:"Número · Nulo · Nutrição · Nunca"}]},{id:"silabas-p",title:"Letra P",subtitle:"PA · PE · PI · PO · PU",icon:"🦆",color:"#f59e0b",cards:[{id:"pa",letter:"PA",emoji:"🦆",word:"Pato",hint:"Pão · Papa · Palha · Papagaio"},{id:"pe",letter:"PE",emoji:"🐟",word:"Peixe",hint:"Pele · Pena · Pedra · Pensar"},{id:"pi",letter:"PI",emoji:"🎀",word:"Pipa",hint:"Pico · Pingo · Pilha · Pintainho"},{id:"po",letter:"PO",emoji:"🐴",word:"Potro",hint:"Povo · Pote · Pomba · Polvo"},{id:"pu",letter:"PU",emoji:"🐾",word:"Pulga",hint:"Pulo · Pura · Pudim · Pulseira"}]},{id:"silabas-r",title:"Letra R",subtitle:"RA · RE · RI · RO · RU",icon:"🌹",color:"#ef4444",cards:[{id:"ra",letter:"RA",emoji:"🐸",word:"Rana",hint:"Rato · Ramo · Rapaz · Rainha"},{id:"re",letter:"RE",emoji:"👑",word:"Rei",hint:"Rede · Relógio · Remédio · Regra"},{id:"ri",letter:"RI",emoji:"😂",word:"Rir",hint:"Rio · Rico · Risco · Ritmo"},{id:"ro",letter:"RO",emoji:"🌹",word:"Rosa",hint:"Roda · Roupa · Robô · Rochedo"},{id:"ru",letter:"RU",emoji:"🛣️",word:"Rua",hint:"Ruído · Rural · Rumo · Rugido"}]},{id:"silabas-s",title:"Letra S",subtitle:"SA · SE · SI · SO · SU",icon:"☀️",color:"#f43f5e",cards:[{id:"sa",letter:"SA",emoji:"🐸",word:"Sapo",hint:"Saco · Sala · Salto · Sapato"},{id:"se",letter:"SE",emoji:"🌾",word:"Seco",hint:"Sede · Seta · Serra · Setembro"},{id:"si",letter:"SI",emoji:"🔔",word:"Sino",hint:"Sinal · Sítio · Sinto · Silêncio"},{id:"so",letter:"SO",emoji:"☀️",word:"Sol",hint:"Sopa · Sono · Soco · Sonho"},{id:"su",letter:"SU",emoji:"🧃",word:"Sumo",hint:"Sul · Suave · Susto · Subir"}]},{id:"silabas-t",title:"Letra T",subtitle:"TA · TE · TI · TO · TU",icon:"🐯",color:"#0ea5e9",cards:[{id:"ta",letter:"TA",emoji:"🥁",word:"Tambor",hint:"Tapa · Tarde · Tarefa · Tartaruga"},{id:"te",letter:"TE",emoji:"🧸",word:"Teddy",hint:"Tela · Tempo · Telefone · Terra"},{id:"ti",letter:"TI",emoji:"🐯",word:"Tigre",hint:"Tio · Tipo · Título · Tinha"},{id:"to",letter:"TO",emoji:"🍅",word:"Tomate",hint:"Toca · Torta · Touro · Torneira"},{id:"tu",letter:"TU",emoji:"🦈",word:"Tubarão",hint:"Tubo · Tudo · Tulipa · Turbina"}]},{id:"silabas-v",title:"Letra V",subtitle:"VA · VE · VI · VO · VU",icon:"🦋",color:"#d946ef",cards:[{id:"va",letter:"VA",emoji:"🐄",word:"Vaca",hint:"Vale · Varanda · Vassoura · Vampiro"},{id:"ve",letter:"VE",emoji:"🕯️",word:"Vela",hint:"Vento · Verde · Verdade · Veludo"},{id:"vi",letter:"VI",emoji:"🍷",word:"Vinho",hint:"Vida · Vila · Visão · Viagem"},{id:"vo",letter:"VO",emoji:"✈️",word:"Voar",hint:"Voz · Volta · Volume · Voluntário"},{id:"vu",letter:"VU",emoji:"🌋",word:"Vulcão",hint:"Vulnerável · Vulto · Vulgaria"}]},{id:"numeros",title:"Números",subtitle:"UM · DOIS · TRÊS...",icon:"🔢",color:"#f97316",cards:[{id:"um",letter:"UM",emoji:"1️⃣",word:"Um",hint:"Uma · Único · Unidade"},{id:"dois",letter:"DOIS",emoji:"2️⃣",word:"Dois",hint:"Duplo · Segundo · Par"},{id:"tres",letter:"TRÊS",emoji:"3️⃣",word:"Três",hint:"Triplo · Terceiro · Trio"},{id:"quatro",letter:"QUATRO",emoji:"4️⃣",word:"Quatro",hint:"Quádruplo · Quarto · Quadrado"},{id:"cinco",letter:"CINCO",emoji:"5️⃣",word:"Cinco",hint:"Quinteto · Quinto · Pentagon"},{id:"seis",letter:"SEIS",emoji:"6️⃣",word:"Seis",hint:"Sexto · Sexteto · Hexágono"},{id:"sete",letter:"SETE",emoji:"7️⃣",word:"Sete",hint:"Sétimo · Semana · Arco-íris"},{id:"oito",letter:"OITO",emoji:"8️⃣",word:"Oito",hint:"Oitavo · Polvo · Araña"},{id:"nove",letter:"NOVE",emoji:"9️⃣",word:"Nove",hint:"Nono · Novembro · Planeta"},{id:"dez",letter:"DEZ",emoji:"🔟",word:"Dez",hint:"Décimo · Dezembro · Dedos"}]},{id:"cores",title:"Cores",subtitle:"VERMELHO · AZUL · VERDE...",icon:"🎨",color:"#a855f7",cards:[{id:"vermelho",letter:"VERMELHO",emoji:"🔴",word:"Vermelho",hint:"Rosa · Tomate · Maçã · Coração"},{id:"azul",letter:"AZUL",emoji:"🔵",word:"Azul",hint:"Mar · Céu · Mirtilo · Baleia"},{id:"verde",letter:"VERDE",emoji:"🟢",word:"Verde",hint:"Erva · Folha · Sapo · Maçã"},{id:"amarelo",letter:"AMARELO",emoji:"🟡",word:"Amarelo",hint:"Sol · Banana · Patinho · Girassol"},{id:"laranja",letter:"LARANJA",emoji:"🟠",word:"Laranja",hint:"Fruta · Cenoura · Tigre · Outono"},{id:"roxo",letter:"ROXO",emoji:"🟣",word:"Roxo",hint:"Uva · Lavanda · Beringela · Violeta"},{id:"rosa",letter:"ROSA",emoji:"🌸",word:"Rosa",hint:"Flor · Porco · Flamingo · Bubble-gum"},{id:"branco",letter:"BRANCO",emoji:"⬜",word:"Branco",hint:"Neve · Leite · Nuvem · Algodão"},{id:"preto",letter:"PRETO",emoji:"⬛",word:"Preto",hint:"Noite · Gato · Pneu · Carvão"},{id:"castanho",letter:"CASTANHO",emoji:"🟫",word:"Castanho",hint:"Terra · Madeira · Chocolate · Urso"}]},{id:"animais",title:"Animais",subtitle:"Todos os animais",icon:"🦁",color:"#22c55e",cards:[{id:"cao",letter:"CÃO",emoji:"🐕",word:"Cão",hint:"Canino · Cachorro · Companheiro"},{id:"gato2",letter:"GATO",emoji:"🐈",word:"Gato",hint:"Felino · Miar · Bigodes"},{id:"cavalo",letter:"CAVALO",emoji:"🐴",word:"Cavalo",hint:"Patas · Crina · Galope"},{id:"elefante",letter:"ELEFANTE",emoji:"🐘",word:"Elefante",hint:"Tromba · Presa · Savana"},{id:"leao2",letter:"LEÃO",emoji:"🦁",word:"Leão",hint:"Rei · Juba · África"},{id:"girafa",letter:"GIRAFA",emoji:"🦒",word:"Girafa",hint:"Pescoço · Alto · Savana"},{id:"pinguim",letter:"PINGUIM",emoji:"🐧",word:"Pinguim",hint:"Gelo · Nadar · Antártida"},{id:"borboleta",letter:"BORBOLETA",emoji:"🦋",word:"Borboleta",hint:"Asas · Colorida · Flor"},{id:"coelho2",letter:"COELHO",emoji:"🐰",word:"Coelho",hint:"Orelhas · Saltitar · Cenoura"},{id:"pato2",letter:"PATO",emoji:"🦆",word:"Pato",hint:"Nadar · Grasnar · Lago"}]},{id:"corpo",title:"O Meu Corpo",subtitle:"Cabeça · Mãos · Pés...",icon:"🧒",color:"#f59e0b",cards:[{id:"cabeca",letter:"CABEÇA",emoji:"🧠",word:"Cabeça",hint:"Cérebro · Pensar · Crânio"},{id:"olhos",letter:"OLHOS",emoji:"👀",word:"Olhos",hint:"Ver · Piscar · Cores"},{id:"nariz",letter:"NARIZ",emoji:"👃",word:"Nariz",hint:"Cheirar · Respirar · Espirrar"},{id:"boca",letter:"BOCA",emoji:"👄",word:"Boca",hint:"Falar · Comer · Sorrir"},{id:"orelhas",letter:"ORELHAS",emoji:"👂",word:"Orelhas",hint:"Ouvir · Sons · Música"},{id:"maos",letter:"MÃOS",emoji:"🙌",word:"Mãos",hint:"Tocar · Escrever · Bater"},{id:"pes",letter:"PÉS",emoji:"🦶",word:"Pés",hint:"Andar · Correr · Saltar"},{id:"coracão",letter:"CORAÇÃO",emoji:"❤️",word:"Coração",hint:"Amor · Batimento · Vida"}]},{id:"familia",title:"Família",subtitle:"Mãe · Pai · Irmão...",icon:"👨‍👩‍👧‍👦",color:"#e11d48",cards:[{id:"mae",letter:"MÃE",emoji:"👩",word:"Mãe",hint:"Amor · Cuidar · Abraço"},{id:"pai",letter:"PAI",emoji:"👨",word:"Pai",hint:"Forte · Proteção · Brincar"},{id:"irmao",letter:"IRMÃO",emoji:"👦",word:"Irmão",hint:"Brincar · Partilhar · Família"},{id:"irma",letter:"IRMÃ",emoji:"👧",word:"Irmã",hint:"Amigas · Brincar · Família"},{id:"avo",letter:"AVÔ",emoji:"👴",word:"Avô",hint:"Sábio · Velho · Histórias"},{id:"avo2",letter:"AVÓ",emoji:"👵",word:"Avó",hint:"Mimos · Cozinhar · Amor"},{id:"bebe",letter:"BEBÉ",emoji:"👶",word:"Bebé",hint:"Pequeno · Dormir · Chorar"},{id:"tio",letter:"TIO",emoji:"🧔",word:"Tio",hint:"Divertido · Familiar · Natal"}]},{id:"palavras",title:"Palavras",subtitle:"Ler palavras simples",icon:"💬",color:"#14b8a6",cards:[{id:"bola",letter:"BOLA",emoji:"⚽",word:"Bola"},{id:"gato",letter:"GATO",emoji:"🐱",word:"Gato"},{id:"casa",letter:"CASA",emoji:"🏠",word:"Casa"},{id:"pato",letter:"PATO",emoji:"🦆",word:"Pato"},{id:"leao",letter:"LEÃO",emoji:"🦁",word:"Leão"},{id:"mesa",letter:"MESA",emoji:"🪑",word:"Mesa"},{id:"sapo",letter:"SAPO",emoji:"🐸",word:"Sapo"},{id:"porta",letter:"PORTA",emoji:"🚪",word:"Porta"},{id:"livro",letter:"LIVRO",emoji:"📚",word:"Livro"},{id:"cama",letter:"CAMA",emoji:"🛏️",word:"Cama"},{id:"carro",letter:"CARRO",emoji:"🚗",word:"Carro"},{id:"flor",letter:"FLOR",emoji:"🌸",word:"Flor"},{id:"peixe",letter:"PEIXE",emoji:"🐟",word:"Peixe"},{id:"arco",letter:"ARCO",emoji:"🌈",word:"Arco-íris"},{id:"borboleta2",letter:"BORBOLETA",emoji:"🦋",word:"Borboleta"}]},{id:"frases",title:"Frases",subtitle:"Ler frases simples",icon:"📖",color:"#6366f1",cards:[{id:"f1",letter:"O gato é bonito.",emoji:"🐱",word:"O gato é bonito."},{id:"f2",letter:"A bola é redonda.",emoji:"⚽",word:"A bola é redonda."},{id:"f3",letter:"O sapo é verde.",emoji:"🐸",word:"O sapo é verde."},{id:"f4",letter:"A lua brilha à noite.",emoji:"🌙",word:"A lua brilha à noite."},{id:"f5",letter:"O pato nada no lago.",emoji:"🦆",word:"O pato nada no lago."},{id:"f6",letter:"O leão é o rei da selva.",emoji:"🦁",word:"O leão é o rei da selva."},{id:"f7",letter:"A borboleta é colorida.",emoji:"🦋",word:"A borboleta é colorida."},{id:"f8",letter:"O coelho come cenouras.",emoji:"🐰",word:"O coelho come cenouras."},{id:"f9",letter:"O sol brilha durante o dia.",emoji:"☀️",word:"O sol brilha durante o dia."},{id:"f10",letter:"Eu gosto de ler livros.",emoji:"📚",word:"Eu gosto de ler livros."}]}],s=[{label:"🔤 Primeiros Passos",ids:["vogais"]},{label:"🔡 Sílabas",ids:["silabas-b","silabas-c","silabas-d","silabas-f","silabas-g","silabas-l","silabas-m","silabas-n","silabas-p","silabas-r","silabas-s","silabas-t","silabas-v"]},{label:"🌍 O Mundo à Volta",ids:["animais","cores","numeros","corpo","familia"]},{label:"📖 Ler e Escrever",ids:["palavras","frases"]}],d={"primeira-estrela":{emoji:"⭐",label:"Primeira Estrela!",desc:"Ganhaste a tua primeira estrela"},"primeira-licao":{emoji:"🎓",label:"Primeira Lição!",desc:"Completaste a tua primeira lição"},"tres-estrelas":{emoji:"🌟",label:"Super Estrela!",desc:"Tiveste 3 estrelas numa lição"},coleccionador:{emoji:"💎",label:"Coleccionador!",desc:"10 favoritos guardados"},"vogais-mestre":{emoji:"🔤",label:"Mestre das Vogais!",desc:"Completaste as Vogais com 3 estrelas"},leitor:{emoji:"📖",label:"Leitor!",desc:"Completaste todas as sílabas"},explorador:{emoji:"🌍",label:"Explorador!",desc:"Completaste O Mundo à Volta"},"numeros-mestre":{emoji:"🔢",label:"Mestre dos Números!",desc:"Completaste os Números com 3 estrelas"}};var c=a(65723);const m=n.keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`,u=n.keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
`,p=n.keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`,f=n.keyframes`
  0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
  60%  { transform: scale(1.3) rotate(5deg);  opacity: 1; }
  100% { transform: scale(1)   rotate(0deg);  opacity: 1; }
`,g=t.default.div`
  min-height: 100%;
  background: #0a0e1a;
  padding-bottom: 48px;
  overflow-y: auto;
  font-family: 'Nunito', 'Segoe UI', system-ui, -apple-system, sans-serif;
`,h=t.default.div`
  background: linear-gradient(160deg, #1a0040 0%, #0d1f5e 45%, #062040 100%);
  padding: 28px 20px 24px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 70% 90% at 15% 25%, #9333ea55 0%, transparent 65%),
      radial-gradient(ellipse 50% 70% at 85% 75%, #06b6d460 0%, transparent 65%),
      radial-gradient(ellipse 40% 50% at 50% 50%, #ec489940 0%, transparent 70%);
    pointer-events: none;
  }

  /* floating bubbles decoration */
  &::after {
    content: '⭐ 🌈 ✨ 🌟';
    position: absolute;
    top: 8px;
    right: 12px;
    font-size: 14px;
    opacity: 0.3;
    pointer-events: none;
    letter-spacing: 4px;
  }
`,x=t.default.div`position: relative; z-index: 1;`,b=t.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`,y=t.default.h1`
  font-size: 42px;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;
  background: linear-gradient(135deg, #fde68a 0%, #fb7185 40%, #a78bfa 70%, #60a5fa 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${p} 2.5s linear infinite;
  text-shadow: none;
`,w=t.default.div`
  font-size: 16px;
  font-weight: 700;
  color: #c4b5fd;
  margin-top: 4px;
  letter-spacing: 0.01em;
`,z=t.default.div`
  font-size: 72px;
  line-height: 1;
  animation: ${u} 2.5s ease-in-out infinite;
  user-select: none;
  filter: drop-shadow(0 0 16px #a78bfa80);
`,v=t.default.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,j=t.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({color:e})=>e}30;
  border: 2px solid ${({color:e})=>e}70;
  border-radius: 32px;
  padding: 8px 16px;
`,$=t.default.span`font-size: 20px;`,A=t.default.span`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
`,k=t.default.span`
  font-size: 13px;
  font-weight: 700;
  color: #c4b5fd;
  margin-left: 2px;
`,S=t.default.div`
  margin-top: 14px;
  background: #ffffff20;
  border-radius: 16px;
  height: 14px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px #00000030;
`,T=t.default.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: linear-gradient(90deg, #f59e0b, #ec4899, #a78bfa, #60a5fa);
  background-size: 200% auto;
  border-radius: 16px;
  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: ${p} 2s linear infinite;
`,M=t.default.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #a78bfa;
`,C=t.default.div`padding: 20px 16px 0;`,B=t.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 18px 20px;
  background: linear-gradient(135deg, #be185d35, #9333ea35);
  border: 2px solid #ec4899;
  border-radius: 24px;
  cursor: pointer;
  gap: 14px;
  margin-bottom: 20px;
  transition: transform 0.15s, box-shadow 0.15s;
  animation: ${m} 0.3s ease both;
  box-shadow: 0 4px 16px #be185d25;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 30px #be185d45;
  }
  &:active { transform: scale(0.97); }
`,E=t.default.span`font-size: 36px;`,P=t.default.div`
  flex: 1;
  text-align: left;
`,L=t.default.div`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
`,O=t.default.div`font-size: 14px; font-weight: 600; color: #f9a8d4;`,R=t.default.div`color: #fb7185; font-size: 24px;`,N=(t.default.div`
  background: linear-gradient(135deg, #0f2a2a, #101827);
  border: 1.5px solid #34d39955;
  border-radius: 18px;
  padding: 14px 16px;
  margin-bottom: 20px;
  animation: ${m} 0.32s ease both;
`,t.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
`,t.default.div`
  font-size: 14px;
  font-weight: 800;
  color: #ecfeff;
`,t.default.div`
  font-size: 12px;
  color: #94a3b8;
  margin-top: 2px;
`,t.default.button`
  border: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, #34d399, #0ea5e9);
  color: #06202a;
  font-size: 12px;
  font-weight: 800;
  padding: 10px 12px;
  cursor: pointer;
`,t.default.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`,t.default.div`
  background: #ffffff08;
  border: 1px solid #ffffff12;
  border-radius: 12px;
  padding: 10px 11px;
`,t.default.div`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #64748b;
  margin-bottom: 4px;
`,t.default.div`
  font-size: 13px;
  font-weight: 700;
  color: #e2e8f0;
  word-break: break-word;
`,t.default.div`
  margin-bottom: 24px;
  animation: ${m} 0.35s ease both;
  animation-delay: ${({index:e})=>60*e}ms;
`),F=t.default.div`
  font-size: 15px;
  font-weight: 900;
  color: #a78bfa;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
  padding-left: 4px;
`,I=t.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
`,D=t.default.button`
  display: flex;
  flex-direction: column;
  padding: 18px 16px 16px;
  background: ${({color:e,done:o})=>o?`linear-gradient(145deg, ${e}40, ${e}20)`:"linear-gradient(145deg, #1e2540, #131726)"};
  border: 2.5px solid ${({color:e,done:o})=>o?e+"90":e+"40"};
  border-radius: 28px;
  cursor: pointer;
  text-align: left;
  transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;
  position: relative;
  overflow: hidden;
  box-shadow: ${({color:e})=>`0 4px 16px ${e}20`};

  &::before {
    content: '';
    position: absolute;
    top: -20px; right: -20px;
    width: 80px; height: 80px;
    border-radius: 50%;
    background: ${({color:e})=>e}25;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30px; left: -10px;
    width: 70px; height: 70px;
    border-radius: 50%;
    background: ${({color:e})=>e}15;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px) scale(1.03);
    border-color: ${({color:e})=>e};
    box-shadow: 0 14px 32px ${({color:e})=>e}40;
  }

  &:active { transform: scale(0.96); }
`,V=t.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
`,G=t.default.div`font-size: 48px; line-height: 1; filter: drop-shadow(0 2px 6px #00000040);`,H=t.default.div`
  font-size: 11px;
  font-weight: 800;
  color: ${({color:e})=>e};
  background: ${({color:e})=>e}25;
  border: 1.5px solid ${({color:e})=>e}60;
  border-radius: 12px;
  padding: 3px 9px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,U=t.default.div`
  font-size: 17px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 3px;
  letter-spacing: -0.01em;
`,Y=t.default.div`
  font-size: 12px;
  font-weight: 600;
  color: #7c8db5;
  margin-bottom: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,K=t.default.div`
  display: flex;
  gap: 4px;
  align-items: center;
`,W=t.default.span`
  font-size: 20px;
  opacity: ${({lit:e})=>e?1:.18};
  filter: ${({lit:e,color:o})=>e?`drop-shadow(0 0 6px ${o})`:"none"};
  animation: ${({lit:e})=>e?f:"none"} 0.5s ease both;
  animation-delay: ${({delay:e})=>e}ms;
`,J=t.default.div`
  margin-left: auto;
  font-size: 12px;
  font-weight: 700;
  color: #4b5980;
`,_=t.default.div`
  margin-top: 4px;
  animation: ${m} 0.4s ease both;
`,Z=t.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,q=t.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #1e2540, #131726);
  border: 2px solid #a78bfa50;
  border-radius: 20px;
  padding: 10px 14px;
  box-shadow: 0 4px 12px #a78bfa15;
`,Q=t.default.span`font-size: 26px;`,X=t.default.span`
  font-size: 14px;
  font-weight: 800;
  color: #e2d9ff;
`;function ee({progress:e,speechDebug:o,onSelectLesson:a,onOpenFavorites:i,onSpeechTest:t}){const n=l.length,m=Object.values(e.lessons).filter(e=>e.completed).length,u=Math.round(m/n*100);return(0,c.jsxs)(g,{children:[(0,c.jsx)(h,{children:(0,c.jsxs)(x,{children:[(0,c.jsxs)(b,{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(y,{children:"LêBem"}),(0,c.jsx)(w,{children:"Vamos aprender a ler! 🚀✨"})]}),(0,c.jsx)(z,{children:"🦉"})]}),(0,c.jsxs)(v,{children:[(0,c.jsxs)(j,{color:"#f59e0b",children:[(0,c.jsx)($,{children:"⭐"}),(0,c.jsx)(A,{children:e.totalStars}),(0,c.jsx)(k,{children:"estrelas"})]}),(0,c.jsxs)(j,{color:"#7c3aed",children:[(0,c.jsx)($,{children:"🏆"}),(0,c.jsxs)(A,{children:["Nível ",e.level]})]}),(0,c.jsxs)(j,{color:"#10b981",children:[(0,c.jsx)($,{children:"🔥"}),(0,c.jsx)(A,{children:e.streak}),(0,c.jsx)(k,{children:"dias"})]})]}),(0,c.jsx)(S,{children:(0,c.jsx)(T,{pct:u})}),(0,c.jsxs)(M,{children:[(0,c.jsxs)("span",{children:[m," de ",n," lições"]}),(0,c.jsxs)("span",{children:[u,"% completo"]})]})]})}),(0,c.jsxs)(C,{children:[!1,(0,c.jsxs)(B,{onClick:i,children:[(0,c.jsx)(E,{children:"❤️"}),(0,c.jsxs)(P,{children:[(0,c.jsx)(L,{children:"Os meus Favoritos"}),(0,c.jsxs)(O,{children:[e.favorites.length," cartões guardados"]})]}),(0,c.jsx)(R,{children:(0,c.jsx)(r.A,{size:20})})]}),s.map((o,i)=>{const t=o.ids.map(e=>l.find(o=>o.id===e)).filter(Boolean);return(0,c.jsxs)(N,{index:i,children:[(0,c.jsx)(F,{children:o.label}),(0,c.jsx)(I,{children:t.map(o=>{const i=e.lessons[o.id],t=i?.stars??0,n=i?.completed??!1;return(0,c.jsxs)(D,{color:o.color,done:n,onClick:()=>a(o.id),children:[(0,c.jsxs)(V,{children:[(0,c.jsx)(G,{children:o.icon}),n&&(0,c.jsx)(H,{color:o.color,children:"✓ Feito"})]}),(0,c.jsx)(U,{children:o.title}),(0,c.jsx)(Y,{children:o.subtitle}),(0,c.jsxs)(K,{children:[[1,2,3].map(e=>(0,c.jsx)(W,{lit:t>=e,color:o.color,delay:80*e,children:"⭐"},e)),(0,c.jsxs)(J,{children:[o.cards.length," cartões"]})]})]},o.id)})})]},o.label)}),e.badges.length>0&&(0,c.jsxs)(_,{children:[(0,c.jsx)(F,{children:"🏅 Conquistas"}),(0,c.jsx)(Z,{children:e.badges.map(e=>{const o=d[e];return o?(0,c.jsxs)(q,{title:o.desc,children:[(0,c.jsx)(Q,{children:o.emoji}),(0,c.jsx)(X,{children:o.label})]},e):null})})]})]})]})}var oe=a(77180),ae=a(41604),ie=a(52709),te=a(32887),ne=a(70947),re=a(76680),le=a(85723);let se=null,de=null,ce=[],me=!1,ue=null,pe="idle",fe=null;const ge=new Set,he=["Joana","Luciana","Eddy","Flo","Grandma","Grandpa","Reed","Rocko","Sandy","Shelley"];function xe(){return/Chrome/i.test(window.navigator.userAgent)&&!/Edg|OPR|CriOS/i.test(window.navigator.userAgent)}function be(){const e=ve();for(const o of ge)o(e)}function ye(){return 0===ce.length&&(ce=window.speechSynthesis.getVoices()),ce}function we(){if(ce=window.speechSynthesis.getVoices(),fe&&ce.length>0){const e=fe;fe=null,window.setTimeout(()=>je(e),0)}return be(),ce}function ze(){const e=ye();if(xe())return e.find(e=>e.default&&e.lang.toLowerCase().startsWith("pt"))??e.find(e=>"pt-br"===e.lang.toLowerCase())??e.find(e=>"pt-pt"===e.lang.toLowerCase())??e.find(e=>e.lang.toLowerCase().startsWith("pt"))??null;for(const o of he){const a=e.find(e=>e.name.toLowerCase()===o.toLowerCase());if(a)return a}return e.find(e=>"pt-pt"===e.lang.toLowerCase())??e.find(e=>"pt-br"===e.lang.toLowerCase())??e.find(e=>e.lang.toLowerCase().startsWith("pt"))??e.find(e=>e.default)??null}function ve(){if(!("speechSynthesis"in window))return{supported:!1,voicesCount:0,preferredVoiceName:null,preferredVoiceLang:null,availableVoiceNames:[],speaking:!1,pending:!1,paused:!1,lastEvent:pe,lastError:ue};const e=window.speechSynthesis,o=ze(),a=ye();return{supported:!0,voicesCount:a.length,preferredVoiceName:o?.name??null,preferredVoiceLang:o?.lang??null,availableVoiceNames:a.filter(e=>e.lang.toLowerCase().startsWith("pt")).slice(0,6).map(e=>`${e.name} (${e.lang})`),speaking:e.speaking,pending:e.pending,paused:e.paused,lastEvent:pe,lastError:ue}}function je(e){const o=window.speechSynthesis,a=e.trim(),i=ye();if(!a)return;if(0===i.length)return fe=a,pe="waiting-for-voices",be(),void window.setTimeout(()=>{fe===a&&(fe=null,je(a))},400);null!==de&&(window.clearTimeout(de),de=null),ue=null,pe="queued",se=new SpeechSynthesisUtterance(a),se.lang=xe()?"pt-BR":"pt-PT",se.rate=.8,se.pitch=1.1;const t=ze();t&&!xe()?(se.voice=t,se.lang=t.lang):t&&(se.lang=t.lang),se.onstart=()=>{pe="start",be()},se.onend=()=>{se=null,pe="end",be()},se.onerror=e=>{se=null,pe="error",ue=e.error,be()},o.resume(),o.speak(se),be()}function $e(e){if(!("speechSynthesis"in window))return;const o=window.speechSynthesis,a=e.trim();if(a){if(null!==de&&(window.clearTimeout(de),de=null),o.speaking||o.pending)return pe="cancel",o.cancel(),de=window.setTimeout(()=>je(a),150),void be();je(a)}}function Ae(){$e("Ola, teste de voz do LeBem. Esta e a voz do leitor.")}n.keyframes`from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); }`;const ke=n.keyframes`0%,100%{ transform: translateX(0); } 25%{ transform: translateX(-10px); } 75%{ transform: translateX(10px); }`,Se=n.keyframes`0%{ transform: scale(1); } 50%{ transform: scale(1.2); } 100%{ transform: scale(1); }`,Te=n.keyframes`from{ transform: translateY(0) scale(1); opacity: 1; } to{ transform: translateY(-120px) scale(0.3) rotate(360deg); opacity: 0; }`,Me=n.keyframes`0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-12px); }`,Ce=t.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${le.w4.colors.mainBg};
  font-family: ${le.w4.typography.fontFamily};
  overflow: hidden;
`,Be=t.default.div`
  display: flex;
  align-items: center;
  padding: 16px 20px 0;
  gap: 12px;
  flex-shrink: 0;
`,Ee=t.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${le.w4.colors.surface};
  border: 1px solid ${le.w4.colors.border};
  border-radius: 12px;
  cursor: pointer;
  color: ${le.w4.colors.mainText};
  flex-shrink: 0;
  transition: background 0.15s;
  &:hover { background: ${le.w4.colors.sidebarHover}; }
`,Pe=t.default.div`
  font-size: 17px;
  font-weight: 700;
  color: ${le.w4.colors.mainText};
  flex: 1;
`,Le=t.default.div`
  display: flex;
  gap: 5px;
  flex-shrink: 0;
`,Oe=t.default.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({active:e,done:o,color:a})=>e?a:o?a+"80":le.w4.colors.border};
  transition: background 0.2s, transform 0.2s;
  transform: ${({active:e})=>e?"scale(1.4)":"scale(1)"};
`,Re=t.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;
  gap: 20px;
`,Ne=t.default.div`
  font-size: 110px;
  line-height: 1;
  cursor: pointer;
  animation: ${Me} 2.5s ease-in-out infinite;
  filter: drop-shadow(0 8px 24px ${({color:e})=>e}50);
  user-select: none;
  &:hover { animation: ${Se} 0.3s ease; }
`,Fe=t.default.div`
  font-size: 72px;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: ${({color:e})=>e};
  text-shadow: 0 4px 24px ${({color:e})=>e}60;
  line-height: 1;
`,Ie=t.default.div`
  font-size: 26px;
  font-weight: 700;
  color: ${le.w4.colors.mainText};
`,De=t.default.div`
  font-size: 14px;
  color: ${le.w4.colors.mainTextMuted};
  text-align: center;
`,Ve=t.default.div`
  display: flex;
  gap: 12px;
`,Ge=t.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: ${({color:e,active:o})=>o?e+"30":le.w4.colors.surface};
  border: 2px solid ${({color:e,active:o})=>o?e??"#fff":le.w4.colors.border};
  border-radius: 16px;
  cursor: pointer;
  color: ${({color:e,active:o})=>o?e??"#fff":le.w4.colors.mainText};
  transition: all 0.15s;
  &:hover { transform: scale(1.1); }
  &:active { transform: scale(0.95); }
`,He=t.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px 24px;
  flex-shrink: 0;
`,Ue=t.default.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  background: ${({color:e,disabled:o})=>o?le.w4.colors.surface:e+"20"};
  border: 2px solid ${({color:e,disabled:o})=>o?le.w4.colors.border:e+"60"};
  border-radius: 16px;
  color: ${({color:e,disabled:o})=>o?le.w4.colors.mainTextMuted:e};
  font-family: ${le.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 600;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.15s;
  opacity: ${({disabled:e})=>e?.4:1};
  &:hover:not(:disabled) { transform: translateX(${e=>e.disabled?"0":"3px"}); }
`,Ye=t.default.button`
  flex: 1;
  padding: 16px;
  background: ${({color:e})=>e};
  border: none;
  border-radius: 16px;
  color: #fff;
  font-family: ${le.w4.typography.fontFamily};
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.15s, transform 0.15s;
  &:hover { opacity: 0.9; transform: translateY(-2px); }
  &:active { transform: scale(0.97); }
`,Ke=t.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0;
  gap: 16px;
  overflow: hidden;
`,We=t.default.div`
  display: flex;
  gap: 6px;
  width: 100%;
`,Je=t.default.div`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: ${({state:e,color:o})=>"correct"===e?"#10b981":"wrong"===e?"#ef4444":"current"===e?o:le.w4.colors.border};
  transition: background 0.3s;
`,_e=t.default.div`
  font-size: 18px;
  font-weight: 600;
  color: ${le.w4.colors.mainTextMuted};
  text-align: center;
`,Ze=t.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: ${({isShaking:e})=>e?ke:"none"} 0.4s ease;
`,qe=t.default.div`font-size: 80px; line-height: 1;`,Qe=t.default.div`
  font-size: 20px;
  font-weight: 700;
  color: ${le.w4.colors.mainText};
`,Xe=t.default.div`
  font-size: 80px;
  font-weight: 900;
  color: ${({color:e})=>e};
  text-shadow: 0 4px 24px ${({color:e})=>e}60;
  line-height: 1;
`,eo=t.default.div`
  display: grid;
  grid-template-columns: ${({count:e})=>e<=2?"1fr 1fr":"repeat(2, 1fr)"};
  gap: 10px;
  width: 100%;
`,oo=t.default.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 18px 12px;
  background: ${({state:e})=>"correct"===e?"#10b98120":"wrong"===e?"#ef444420":le.w4.colors.surface};
  border: 3px solid ${({state:e})=>"correct"===e?"#10b981":"wrong"===e?"#ef4444":le.w4.colors.border};
  border-radius: 18px;
  cursor: pointer;
  font-family: ${le.w4.typography.fontFamily};
  transition: transform 0.15s, border-color 0.15s, background 0.15s;
  animation: ${({isShaking:e})=>e?ke:"none"} 0.4s ease;

  &:hover:not(:disabled) {
    transform: scale(1.04);
    border-color: ${le.w4.colors.accent};
  }
  &:active:not(:disabled) { transform: scale(0.97); }
  &:disabled { cursor: not-allowed; }
`,ao=t.default.div`font-size: 42px; line-height: 1;`,io=t.default.div`
  font-size: 30px;
  font-weight: 900;
  color: ${({color:e})=>e};
`,to=t.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 600;
  min-height: 28px;
`,no=t.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 20px;
  position: relative;
  overflow: hidden;
`,ro=t.default.div`
  position: absolute;
  font-size: 28px;
  top: 60%;
  left: ${({x:e})=>e}%;
  animation: ${Te} 1.4s ease ${({delay:e})=>e}s forwards;
  pointer-events: none;
`,lo=t.default.div`
  font-size: 80px;
  animation: ${Me} 1s ease-in-out infinite;
`,so=t.default.div`
  font-size: 32px;
  font-weight: 900;
  color: ${({color:e})=>e};
  text-align: center;
`,co=t.default.div`
  font-size: 18px;
  color: ${le.w4.colors.mainTextMuted};
`,mo=t.default.div`
  display: flex;
  gap: 8px;
  font-size: 44px;
`,uo=t.default.button`
  padding: 16px 40px;
  background: ${({color:e})=>e};
  border: none;
  border-radius: 20px;
  color: #fff;
  font-family: ${le.w4.typography.fontFamily};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.15s, transform 0.15s;
  &:hover { opacity: 0.9; transform: translateY(-2px); }
`;function po({lessonId:e,progress:o,onBack:a,onComplete:t,onToggleFavorite:n}){const r=(s=e,l.find(e=>e.id===s));var s;const[d,m]=(0,i.useState)("learn"),[u,p]=(0,i.useState)(0),[f,g]=(0,i.useState)([]),[h,x]=(0,i.useState)(0),[b,y]=(0,i.useState)([]),[w,z]=(0,i.useState)(null),[v,j]=(0,i.useState)(0),[$,A]=(0,i.useState)(!1),[k,S]=(0,i.useState)(!1),[T,M]=(0,i.useState)(!1),C=(0,i.useCallback)(e=>{$e(e),M(!0),setTimeout(()=>M(!1),1200)},[]),B=(0,i.useCallback)(()=>{const e=function(e){const o=[...e.cards].sort(()=>Math.random()-.5).slice(0,5),a="palavras"===e.id||"frases"===e.id;return o.map(o=>{const i=e.cards.filter(e=>e.id!==o.id).sort(()=>Math.random()-.5).slice(0,3);if(a){const e=[{emoji:o.emoji},...i.map(e=>({emoji:e.emoji}))].sort(()=>Math.random()-.5);return{type:"word-to-emoji",cardId:o.id,promptWord:o.letter,label:"Qual é a imagem?",options:e,correctIndex:e.findIndex(e=>e.emoji===o.emoji)}}if(Math.random()>.5){const a=[{letter:o.letter},...i.map(e=>({letter:e.letter}))].sort(()=>Math.random()-.5);return{type:"emoji-to-letter",cardId:o.id,promptEmoji:o.emoji,promptWord:o.word,label:"vogais"===e.id?"Começa com que letra?":"Começa com que sílaba?",options:a,correctIndex:a.findIndex(e=>e.letter===o.letter)}}const t=[{emoji:o.emoji},...i.map(e=>({emoji:e.emoji}))].sort(()=>Math.random()-.5);return{type:"letter-to-emoji",cardId:o.id,promptLetter:o.letter,label:"Qual é a imagem?",options:t,correctIndex:t.findIndex(e=>e.emoji===o.emoji)}})}(r);g(e),x(0),y([]),z(null),j(0),m("quiz")},[r]),E=(0,i.useCallback)(e=>{if(null!==w||!f[h])return;const o=e===f[h].correctIndex;z(e),o?(j(e=>e+1),y(e=>[...e,"correct"]),setTimeout(()=>$e(f[h]?.promptWord??f[h]?.promptLetter??""),200)):(A(!0),y(e=>[...e,"wrong"]),setTimeout(()=>A(!1),500)),setTimeout(()=>{h+1>=f.length?(m("result"),S(!0)):(x(e=>e+1),z(null))},900)},[w,f,h]),P=(0,i.useCallback)(()=>{t(e,v,f.length)},[e,v,f.length,t]);if(!r)return null;const L=r.cards[u],O=`${e}:${L?.id}`,R=o.favorites.includes(O),N=v>=f.length?3:v>=f.length-1?2:v>=Math.ceil(f.length/2)?1:0;if("learn"===d)return(0,c.jsxs)(Ce,{children:[(0,c.jsxs)(Be,{children:[(0,c.jsx)(Ee,{onClick:a,children:(0,c.jsx)(oe.A,{size:18})}),(0,c.jsx)(Pe,{children:r.title}),(0,c.jsx)(Le,{children:r.cards.map((e,o)=>(0,c.jsx)(Oe,{active:o===u,done:o<u,color:r.color},o))})]}),(0,c.jsxs)(Re,{children:[(0,c.jsx)(Ne,{color:r.color,onClick:()=>C(L.word),children:L.emoji}),(0,c.jsx)(Fe,{color:r.color,children:L.letter}),(0,c.jsx)(Ie,{children:L.word}),L.hint&&(0,c.jsx)(De,{children:L.hint}),(0,c.jsxs)(Ve,{children:[(0,c.jsx)(Ge,{type:"button",color:"#f59e0b",active:T,title:"Ouvir",onClick:()=>C(L.word),children:(0,c.jsx)(ae.A,{size:22,color:"#f59e0b"})}),(0,c.jsx)(Ge,{type:"button",color:"#ef4444",active:R,title:R?"Remover dos favoritos":"Adicionar aos favoritos",onClick:()=>n(O),children:(0,c.jsx)(ie.A,{size:22,fill:R?"#ef4444":"none",color:"#ef4444"})})]})]}),(0,c.jsxs)(He,{children:[(0,c.jsxs)(Ue,{color:r.color,disabled:0===u,onClick:()=>{u>0&&p(e=>e-1)},children:[(0,c.jsx)(oe.A,{size:18})," Anterior"]}),u<r.cards.length-1?(0,c.jsxs)(Ue,{color:r.color,onClick:()=>{p(e=>e+1),C(r.cards[u+1].word)},children:["Próxima ",(0,c.jsx)(te.A,{size:18})]}):(0,c.jsx)(Ye,{color:r.color,onClick:B,children:"Fazer Quiz 🎯"})]})]});if("quiz"===d){const e=f[h];return e?(0,c.jsxs)(Ce,{children:[(0,c.jsxs)(Be,{children:[(0,c.jsx)(Ee,{onClick:a,children:(0,c.jsx)(oe.A,{size:18})}),(0,c.jsxs)(Pe,{children:["Quiz — ",r.title]})]}),(0,c.jsxs)(Ke,{children:[(0,c.jsx)(We,{children:f.map((e,o)=>(0,c.jsx)(Je,{color:r.color,state:o<b.length?b[o]:o===h?"current":"pending"},o))}),(0,c.jsx)(_e,{children:e.label}),(0,c.jsxs)(Ze,{isShaking:$,color:r.color,children:[e.promptEmoji&&(0,c.jsx)(qe,{children:e.promptEmoji}),e.promptWord&&"word-to-emoji"!==e.type&&(0,c.jsx)(Qe,{children:e.promptWord}),"word-to-emoji"===e.type&&(0,c.jsx)(Xe,{color:r.color,children:e.promptWord}),e.promptLetter&&(0,c.jsx)(Xe,{color:r.color,children:e.promptLetter})]}),(0,c.jsx)(eo,{count:e.options.length,children:e.options.map((o,a)=>{const i=null===w?"idle":a===e.correctIndex?"correct":a===w&&w!==e.correctIndex?"wrong":"idle";return(0,c.jsxs)(oo,{state:i,isShaking:"wrong"===i&&$,disabled:null!==w,onClick:()=>E(a),children:[o.emoji&&(0,c.jsx)(ao,{children:o.emoji}),o.letter&&(0,c.jsx)(io,{color:r.color,children:o.letter})]},a)})}),(0,c.jsxs)(to,{children:[null!==w&&w===e.correctIndex&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(ne.A,{size:22,color:"#10b981"})," ",(0,c.jsx)("span",{style:{color:"#10b981"},children:"Muito bem! 🎉"})]}),null!==w&&w!==e.correctIndex&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(re.A,{size:22,color:"#ef4444"})," ",(0,c.jsxs)("span",{style:{color:"#ef4444"},children:["Era ",e.options[e.correctIndex]?.letter??e.options[e.correctIndex]?.emoji,"!"]})]})]})]})]}):null}const F=N>0?["⭐","✨","🌟","💫","⭐","✨"].map((e,o)=>({emoji:e,x:10+15*o,delay:.15*o})):[];return(0,c.jsxs)(Ce,{children:[(0,c.jsxs)(Be,{children:[(0,c.jsx)(Ee,{onClick:a,children:(0,c.jsx)(oe.A,{size:18})}),(0,c.jsx)(Pe,{children:"Resultado"})]}),(0,c.jsxs)(no,{children:[k&&F.map((e,o)=>(0,c.jsx)(ro,{x:e.x,delay:e.delay,children:e.emoji},o)),(0,c.jsx)(lo,{children:3===N?"🏆":2===N?"🎉":1===N?"👍":"😅"}),(0,c.jsx)(so,{color:r.color,children:3===N?"Perfeito!":2===N?"Muito bem!":1===N?"Bom esforço!":"Continua a tentar!"}),(0,c.jsxs)(co,{children:[v," de ",f.length," acertos"]}),(0,c.jsx)(mo,{children:[1,2,3].map(e=>(0,c.jsx)("span",{style:{opacity:N>=e?1:.2},children:"⭐"},e))}),(0,c.jsx)(uo,{color:r.color,onClick:P,children:"Continuar →"})]})]})}const fo=n.keyframes`from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); }`,go=t.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${le.w4.colors.mainBg};
  font-family: ${le.w4.typography.fontFamily};
  overflow: hidden;
`,ho=t.default.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  gap: 12px;
  border-bottom: 1px solid ${le.w4.colors.border};
  flex-shrink: 0;
`,xo=t.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${le.w4.colors.surface};
  border: 1px solid ${le.w4.colors.border};
  border-radius: 12px;
  cursor: pointer;
  color: ${le.w4.colors.mainText};
  transition: background 0.15s;
  &:hover { background: ${le.w4.colors.sidebarHover}; }
`,bo=t.default.div`
  font-size: 18px;
  font-weight: 700;
  color: ${le.w4.colors.mainText};
`,yo=t.default.div`
  margin-left: auto;
  font-size: 13px;
  color: ${le.w4.colors.mainTextMuted};
`,wo=t.default.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 16px 40px;
`,zo=t.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,vo=t.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px 14px;
  background: ${({color:e})=>e}12;
  border: 2px solid ${({color:e})=>e}30;
  border-radius: 20px;
  position: relative;
  animation: ${fo} 0.3s ease both;
  animation-delay: ${({index:e})=>40*e}ms;
`,jo=t.default.div`
  font-size: 52px;
  line-height: 1;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover { transform: scale(1.1); transition: transform 0.15s; }
`,$o=t.default.div`
  font-size: 22px;
  font-weight: 900;
  color: ${({color:e})=>e};
  letter-spacing: 0.02em;
`,Ao=t.default.div`
  font-size: 14px;
  color: ${le.w4.colors.mainTextMuted};
  margin-top: 2px;
`,ko=t.default.div`
  display: flex;
  gap: 6px;
  margin-top: 10px;
`,So=t.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: ${le.w4.colors.surface};
  border: 1px solid ${le.w4.colors.border};
  border-radius: 10px;
  cursor: pointer;
  color: ${le.w4.colors.mainTextMuted};
  transition: all 0.15s;
  &:hover { color: ${le.w4.colors.mainText}; background: ${le.w4.colors.sidebarHover}; }
`,To=t.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 16px;
  color: ${le.w4.colors.mainTextMuted};
  font-size: 16px;
  text-align: center;
`;function Mo({progress:e,onBack:o,onToggleFavorite:a}){const i=[];for(const o of e.favorites){const[e,a]=o.split(":"),t=l.find(o=>o.id===e),n=t?.cards.find(e=>e.id===a);t&&n&&i.push({cardKey:o,card:n,color:t.color})}return(0,c.jsxs)(go,{children:[(0,c.jsxs)(ho,{children:[(0,c.jsx)(xo,{onClick:o,children:(0,c.jsx)(oe.A,{size:18})}),(0,c.jsx)(bo,{children:"❤️ Favoritos"}),(0,c.jsxs)(yo,{children:[i.length," guardados"]})]}),(0,c.jsx)(wo,{children:0===i.length?(0,c.jsxs)(To,{children:[(0,c.jsx)("span",{style:{fontSize:64},children:"💔"}),(0,c.jsx)("span",{children:"Ainda não tens favoritos."}),(0,c.jsx)("span",{style:{fontSize:14},children:"Toca no ❤️ nas lições para guardar."})]}):(0,c.jsx)(zo,{children:i.map(({cardKey:e,card:o,color:i},t)=>(0,c.jsxs)(vo,{color:i,index:t,children:[(0,c.jsx)(jo,{onClick:()=>$e(o.word),children:o.emoji}),(0,c.jsx)($o,{color:i,children:o.letter}),(0,c.jsx)(Ao,{children:o.word}),(0,c.jsxs)(ko,{children:[(0,c.jsx)(So,{type:"button",title:"Ouvir",onClick:()=>$e(o.word),children:(0,c.jsx)(ae.A,{size:16})}),(0,c.jsx)(So,{type:"button",title:"Remover dos favoritos",onClick:()=>a(e),style:{color:"#ef4444",borderColor:"#ef444440"},children:(0,c.jsx)(ie.A,{size:16,fill:"#ef4444"})})]})]},e))})})]})}const Co="atlantis-leitor-progress",Bo={totalStars:0,level:1,streak:0,lastPlayedDate:"",lessons:{},favorites:[],badges:[]};function Eo(e,o){return e.badges.includes(o)?e:{...e,badges:[...e.badges,o]}}const Po=t.default.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;function Lo({onBack:e}){const[o,a]=(0,i.useState)(()=>function(){try{const e=localStorage.getItem(Co);return e?{...Bo,...JSON.parse(e)}:{...Bo}}catch{return{...Bo}}}()),[t,n]=(0,i.useState)(()=>ve());(0,i.useEffect)(()=>{return"speechSynthesis"in window&&(we(),me||(window.speechSynthesis.addEventListener("voiceschanged",we),me=!0,be())),e=n,ge.add(e),e(ve()),()=>{ge.delete(e)};var e},[]);const[r,l]=(0,i.useState)({id:"home"}),s=(0,i.useCallback)(e=>{a(o=>{const a=function(e){let o=e;return o.totalStars>=1&&!o.badges.includes("primeira-estrela")&&(o=Eo(o,"primeira-estrela")),Object.values(o.lessons).filter(e=>e.completed).length>=1&&!o.badges.includes("primeira-licao")&&(o=Eo(o,"primeira-licao")),Object.values(o.lessons).some(e=>3===e.stars)&&!o.badges.includes("tres-estrelas")&&(o=Eo(o,"tres-estrelas")),o.favorites.length>=10&&!o.badges.includes("coleccionador")&&(o=Eo(o,"coleccionador")),3!==o.lessons.vogais?.stars||o.badges.includes("vogais-mestre")||(o=Eo(o,"vogais-mestre")),["silabas-b","silabas-c","silabas-d","silabas-f","silabas-g","silabas-l","silabas-m","silabas-n","silabas-p","silabas-r","silabas-s","silabas-t","silabas-v"].every(e=>o.lessons[e]?.completed)&&!o.badges.includes("leitor")&&(o=Eo(o,"leitor")),["animais","cores","numeros","corpo","familia"].every(e=>o.lessons[e]?.completed)&&!o.badges.includes("explorador")&&(o=Eo(o,"explorador")),3!==o.lessons.numeros?.stars||o.badges.includes("numeros-mestre")||(o=Eo(o,"numeros-mestre")),o}(e(o));return function(e){try{localStorage.setItem(Co,JSON.stringify(e))}catch{}}(a),a})},[]),d=(0,i.useCallback)(e=>{s(o=>function(e,o){const a=e.favorites.includes(o);return{...e,favorites:a?e.favorites.filter(e=>e!==o):[...e.favorites,o]}}(o,e))},[s]),m=(0,i.useCallback)((e,o,a)=>{s(i=>function(e,o,a,i){a>=i||a>=i-1||Math.ceil(i/2);const t=e.lessons[o],n=Math.max(t?.bestScore??0,a),r=n>=i?3:n>=i-1?2:n>=Math.ceil(i/2)?1:0,l=Math.max(0,r-(t?.stars??0)),s=(new Date).toISOString().split("T")[0],d=(()=>{if(!e.lastPlayedDate)return!1;const o=new Date(e.lastPlayedDate);return 1==(new Date(s).getTime()-o.getTime())/864e5})();return{...e,totalStars:e.totalStars+l,level:Math.floor((e.totalStars+l)/5)+1,streak:e.lastPlayedDate===s?e.streak:d?e.streak+1:1,lastPlayedDate:s,lessons:{...e.lessons,[o]:{stars:r,bestScore:n,completed:r>0}}}}(i,e,o,a)),l({id:"home"})},[s]);return"lesson"===r.id?(0,c.jsx)(Po,{children:(0,c.jsx)(po,{lessonId:r.lessonId,progress:o,onBack:()=>l({id:"home"}),onComplete:m,onToggleFavorite:d})}):"favorites"===r.id?(0,c.jsx)(Po,{children:(0,c.jsx)(Mo,{progress:o,onBack:()=>l({id:"home"}),onToggleFavorite:d})}):(0,c.jsx)(Po,{children:(0,c.jsx)(ee,{progress:o,speechDebug:t,onSelectLesson:e=>l({id:"lesson",lessonId:e}),onOpenFavorites:()=>l({id:"favorites"}),onSpeechTest:Ae})})}},81664(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"book-open","children":[{"id":"y1-numeros","name":"Numbers to 20","icon":"hash","file":"math/en/year1/numbers.md"},{"id":"y1-adicao","name":"Addition","icon":"plus","file":"math/en/year1/addition.md"},{"id":"y1-subtracao","name":"Subtraction","icon":"minus","file":"math/en/year1/subtraction.md"}]},{"id":"year2","name":"Year 2","icon":"book-open","children":[{"id":"y2-numeros","name":"Numbers to 100","icon":"hash","file":"math/en/year2/numbers.md"},{"id":"y2-adicao","name":"Addition with Carrying","icon":"plus","file":"math/en/year2/addition.md"},{"id":"y2-subtracao","name":"Subtraction with Borrowing","icon":"minus","file":"math/en/year2/subtraction.md"},{"id":"y2-tabuadas","name":"Times Tables × 2, × 5, × 10","icon":"x","file":"math/en/year2/multiplication.md"}]},{"id":"year3","name":"Year 3","icon":"book-open","children":[{"id":"y3-numeros","name":"Numbers to 1000","icon":"hash","file":"math/en/year3/numbers.md"},{"id":"y3-multiplicacao","name":"Times Tables × 3 to × 9","icon":"x","file":"math/en/year3/multiplication.md"},{"id":"y3-divisao","name":"Division","icon":"slash","file":"math/en/year3/division.md"},{"id":"y3-fracoes","name":"Fractions","icon":"pie-chart","file":"math/en/year3/fractions.md"}]},{"id":"year4","name":"Year 4","icon":"book-open","children":[{"id":"y4-numeros","name":"Numbers to 1 000 000","icon":"hash","file":"math/en/year4/numbers.md"},{"id":"y4-multiplicacao","name":"Multiplication","icon":"x","file":"math/en/year4/multiplication.md"},{"id":"y4-divisao","name":"Division with Remainder","icon":"slash","file":"math/en/year4/division.md"},{"id":"y4-decimais","name":"Decimal Numbers","icon":"circle-dot","file":"math/en/year4/decimals.md"}]}]}')},87891(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.º Ano","icon":"book-open","children":[{"id":"y1-numeros","name":"Números até 20","icon":"hash","file":"math/pt/year1/numbers.md"},{"id":"y1-adicao","name":"Adição","icon":"plus","file":"math/pt/year1/addition.md"},{"id":"y1-subtracao","name":"Subtração","icon":"minus","file":"math/pt/year1/subtraction.md"}]},{"id":"year2","name":"2.º Ano","icon":"book-open","children":[{"id":"y2-numeros","name":"Números até 100","icon":"hash","file":"math/pt/year2/numbers.md"},{"id":"y2-adicao","name":"Adição com Transporte","icon":"plus","file":"math/pt/year2/addition.md"},{"id":"y2-subtracao","name":"Subtração com Empréstimo","icon":"minus","file":"math/pt/year2/subtraction.md"},{"id":"y2-tabuadas","name":"Tabuadas × 2, × 5, × 10","icon":"x","file":"math/pt/year2/multiplication.md"}]},{"id":"year3","name":"3.º Ano","icon":"book-open","children":[{"id":"y3-numeros","name":"Números até 1000","icon":"hash","file":"math/pt/year3/numbers.md"},{"id":"y3-multiplicacao","name":"Tabuadas × 3 ao × 9","icon":"x","file":"math/pt/year3/multiplication.md"},{"id":"y3-divisao","name":"Divisão","icon":"slash","file":"math/pt/year3/division.md"},{"id":"y3-fracoes","name":"Frações","icon":"pie-chart","file":"math/pt/year3/fractions.md"}]},{"id":"year4","name":"4.º Ano","icon":"book-open","children":[{"id":"y4-numeros","name":"Números até 1 000 000","icon":"hash","file":"math/pt/year4/numbers.md"},{"id":"y4-multiplicacao","name":"Multiplicação","icon":"x","file":"math/pt/year4/multiplication.md"},{"id":"y4-divisao","name":"Divisão com Resto","icon":"slash","file":"math/pt/year4/division.md"},{"id":"y4-decimais","name":"Números Decimais","icon":"circle-dot","file":"math/pt/year4/decimals.md"}]}]}')},31103(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"book-open","children":[{"id":"y1-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year1/reading.md"},{"id":"y1-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year1/grammar.md"},{"id":"y1-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year1/vocabulary.md"}]},{"id":"year2","name":"Year 2","icon":"book-open","children":[{"id":"y2-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year2/reading.md"},{"id":"y2-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year2/grammar.md"},{"id":"y2-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year2/texttypes.md"},{"id":"y2-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year2/vocabulary.md"}]},{"id":"year3","name":"Year 3","icon":"book-open","children":[{"id":"y3-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year3/reading.md"},{"id":"y3-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year3/grammar.md"},{"id":"y3-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year3/texttypes.md"},{"id":"y3-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year3/vocabulary.md"},{"id":"y3-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year3/spelling.md"}]},{"id":"year4","name":"Year 4","icon":"book-open","children":[{"id":"y4-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year4/reading.md"},{"id":"y4-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year4/grammar.md"},{"id":"y4-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year4/texttypes.md"},{"id":"y4-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year4/vocabulary.md"},{"id":"y4-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year4/spelling.md"}]}]}')},39360(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.º Ano","icon":"book-open","children":[{"id":"y1-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year1/leitura.md"},{"id":"y1-gramatica","name":"Gramática","icon":"type","file":"portuguese/pt/year1/gramatica.md"},{"id":"y1-vocabulario","name":"Vocabulário","icon":"list","file":"portuguese/pt/year1/vocabulario.md"}]},{"id":"year2","name":"2.º Ano","icon":"book-open","children":[{"id":"y2-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year2/leitura.md"},{"id":"y2-gramatica","name":"Gramática","icon":"type","file":"portuguese/pt/year2/gramatica.md"},{"id":"y2-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year2/texto.md"},{"id":"y2-vocabulario","name":"Vocabulário","icon":"list","file":"portuguese/pt/year2/vocabulario.md"}]},{"id":"year3","name":"3.º Ano","icon":"book-open","children":[{"id":"y3-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year3/leitura.md"},{"id":"y3-gramatica","name":"Gramática","icon":"type","file":"portuguese/pt/year3/gramatica.md"},{"id":"y3-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year3/texto.md"},{"id":"y3-vocabulario","name":"Vocabulário","icon":"list","file":"portuguese/pt/year3/vocabulario.md"},{"id":"y3-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year3/ortografia.md"}]},{"id":"year4","name":"4.º Ano","icon":"book-open","children":[{"id":"y4-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year4/leitura.md"},{"id":"y4-gramatica","name":"Gramática","icon":"type","file":"portuguese/pt/year4/gramatica.md"},{"id":"y4-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year4/texto.md"},{"id":"y4-vocabulario","name":"Vocabulário","icon":"list","file":"portuguese/pt/year4/vocabulario.md"},{"id":"y4-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year4/ortografia.md"}]}]}')},6662(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"Year 1","icon":"book-open","children":[{"id":"y1-corpo","name":"My Body","icon":"activity","file":"science/en/year1/body.md"},{"id":"y1-familia","name":"My Family","icon":"heart","file":"science/en/year1/family.md"},{"id":"y1-escola","name":"My School","icon":"map","file":"science/en/year1/school.md"}]},{"id":"year2","name":"Year 2","icon":"book-open","children":[{"id":"y2-corpo","name":"The Human Body","icon":"activity","file":"science/en/year2/body.md"},{"id":"y2-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year2/health.md"},{"id":"y2-animais","name":"Animals","icon":"feather","file":"science/en/year2/animals.md"},{"id":"y2-plantas","name":"Plants","icon":"leaf","file":"science/en/year2/plants.md"}]},{"id":"year3","name":"Year 3","icon":"book-open","children":[{"id":"y3-corpo","name":"The Human Body","icon":"activity","file":"science/en/year3/body.md"},{"id":"y3-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year3/health.md"},{"id":"y3-animais","name":"Animals","icon":"feather","file":"science/en/year3/animals.md"},{"id":"y3-plantas","name":"Plants","icon":"leaf","file":"science/en/year3/plants.md"},{"id":"y3-portugal","name":"Portugal","icon":"map","file":"science/en/year3/portugal.md"}]},{"id":"year4","name":"Year 4","icon":"book-open","children":[{"id":"y4-corpo","name":"The Human Body","icon":"activity","file":"science/en/year4/body.md"},{"id":"y4-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year4/health.md"},{"id":"y4-animais","name":"Animals","icon":"feather","file":"science/en/year4/animals.md"},{"id":"y4-plantas","name":"Plants","icon":"leaf","file":"science/en/year4/plants.md"},{"id":"y4-portugal","name":"Portugal","icon":"map","file":"science/en/year4/portugal.md"},{"id":"y4-historia","name":"History of Portugal","icon":"landmark","file":"science/en/year4/history.md"}]}]}')},37877(e){e.exports=JSON.parse('{"entries":[{"id":"year1","name":"1.º Ano","icon":"book-open","children":[{"id":"y1-corpo","name":"O Meu Corpo","icon":"activity","file":"science/pt/year1/corpo.md"},{"id":"y1-familia","name":"A Minha Família","icon":"heart","file":"science/pt/year1/familia.md"},{"id":"y1-escola","name":"A Minha Escola","icon":"map","file":"science/pt/year1/escola.md"}]},{"id":"year2","name":"2.º Ano","icon":"book-open","children":[{"id":"y2-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year2/corpo.md"},{"id":"y2-saude","name":"Saúde e Higiene","icon":"heart","file":"science/pt/year2/saude.md"},{"id":"y2-animais","name":"Os Animais","icon":"feather","file":"science/pt/year2/animais.md"},{"id":"y2-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year2/plantas.md"}]},{"id":"year3","name":"3.º Ano","icon":"book-open","children":[{"id":"y3-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year3/corpo.md"},{"id":"y3-saude","name":"Saúde e Higiene","icon":"heart","file":"science/pt/year3/saude.md"},{"id":"y3-animais","name":"Os Animais","icon":"feather","file":"science/pt/year3/animais.md"},{"id":"y3-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year3/plantas.md"},{"id":"y3-portugal","name":"Portugal","icon":"map","file":"science/pt/year3/portugal.md"}]},{"id":"year4","name":"4.º Ano","icon":"book-open","children":[{"id":"y4-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year4/corpo.md"},{"id":"y4-saude","name":"Saúde e Higiene","icon":"heart","file":"science/pt/year4/saude.md"},{"id":"y4-animais","name":"Os Animais","icon":"feather","file":"science/pt/year4/animais.md"},{"id":"y4-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year4/plantas.md"},{"id":"y4-portugal","name":"Portugal","icon":"map","file":"science/pt/year4/portugal.md"},{"id":"y4-historia","name":"História de Portugal","icon":"landmark","file":"science/pt/year4/historia.md"}]}]}')}}]);
//# sourceMappingURL=892.5e442adf7f05d393a8e3.js.map