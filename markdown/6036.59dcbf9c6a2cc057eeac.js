"use strict";(self.webpackChunk_atlantis_markdown=self.webpackChunk_atlantis_markdown||[]).push([[6036],{46036(n,e,t){t.r(e),t.d(e,{default:()=>g});var i=t(27359),o=t(3188),l=t(35688),a=t(31509),s=t(14231),c=t(53233),r=t(65723);const d=s;function f(n,e){for(const t of n){if(t.id===e)return t;if(t.children){const n=f(t.children,e);if(n)return n}}}function h(n){return n.flatMap(n=>n.children?h(n.children):n.file?[n]:[])}function u(n,e){const t=n.match(/^#\/docs\/(.+)$/);if(t)return f(e,t[1])}const w=c.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${o.w4.colors.mainTextMuted};
  font-family: ${o.w4.typography.fontFamily};
  font-size: ${o.w4.typography.fontSizeMd};
`;function g({topBarRight:n}){const e=(0,i.useMemo)(()=>h(d.entries),[]),[t,s]=(0,i.useState)(()=>u(window.location.hash,d.entries)??e[0]??null);(0,i.useEffect)(()=>{const n=()=>{const n=u(window.location.hash,d.entries);n&&s(n)};return window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)},[]),(0,i.useEffect)(()=>{t&&!window.location.hash.includes("/blog/")&&(window.location.hash=`#/blog/${t.id}`)},[]);const c=(0,i.useCallback)(n=>{n.file&&(s(n),window.location.hash=`#/blog/${n.id}`)},[]),f=e.findIndex(n=>n.id===t?.id),g=f>0?e[f-1]:null,p=f<e.length-1?e[f+1]:null,m=t?.label??t?.name??"Atlantis";return(0,r.jsx)(o.PE,{title:m,activeId:t?.id??null,topBarRight:n,sidebar:(0,r.jsx)(l.B,{config:d,activeId:t?.id??null,onSelect:c}),children:t?.file?(0,r.jsx)(a.G,{file:t.file,prevEntry:g,nextEntry:p,onNavigate:c}):(0,r.jsx)(w,{children:"Select a page from the sidebar"})})}}}]);
//# sourceMappingURL=6036.59dcbf9c6a2cc057eeac.js.map