"use strict";(self.webpackChunk_atlantis_forma=self.webpackChunk_atlantis_forma||[]).push([["773"],{38108(e,t,o){o.d(t,{SeismicWidget:()=>$});var i=o(65723),r=o(37991),n=o(36859),l=o.n(n),a=o(72799),s=o(6063),c=o(63236),d=o(28170),p=o(98975),m=o(47693),x=o(96246),u=o(25471);let f=(0,a.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,h=l().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 4px;
  margin: 0 -4px;
  border: none;
  border-bottom: 1px solid ${s.w4.colors.border};
  border-radius: ${s.w4.borderRadius.sm};
  background: transparent;
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  width: calc(100% + 8px);
  animation: ${f} 0.25s ease both;
  animation-delay: ${({delay:e})=>60*e}ms;
  transition: background 0.12s;

  &:last-child { border-bottom: none; }
  &:hover { background: ${s.w4.colors.sidebarHover}; }
  &:focus-visible {
    outline: 2px solid ${s.w4.colors.accent};
    outline-offset: -2px;
  }
`,g=l().span`
  font-size: 11px;
  font-weight: 700;
  padding: 3px 7px;
  border-radius: 4px;
  background: ${({color:e})=>`${e}18`};
  color: ${({color:e})=>e};
  border: 1px solid ${({color:e})=>`${e}30`};
  flex-shrink: 0;
  font-family: ${s.w4.typography.fontFamilyMono};
  font-variant-numeric: tabular-nums;
  min-width: 52px;
  text-align: center;
`,w=l().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`,b=l().div`
  font-size: 13px;
  color: ${s.w4.colors.mainText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.4;
`,y=l().div`
  font-size: 11px;
  font-family: ${s.w4.typography.fontFamilyMono};
  color: ${s.w4.colors.mainTextMuted};
  margin-top: 1px;
`;function $({locale:e}){let t=(0,r.useMemo)(()=>(0,d.Nx)("pt"===e?"pt":"en",p.A),[e]),{quakes:o,source:n,loading:l,failed:a}=(0,m.useSeismicQuakes)(),f=t("pt"===n?"seismic.title.pt":"seismic.title.world"),k=o.slice().sort((e,t)=>t.time-e.time).slice(0,6);return(0,i.jsx)(c.rl,{title:`◎ ${f}`,accentColor:u.A.accentColor,errorLabel:t("widget.error.label"),error:a?t("widget.error.body"):void 0,children:l?(0,i.jsx)(x.YG,{mode:"loading",label:t("widget.loading")}):0===k.length?(0,i.jsx)(x.YG,{mode:"empty",label:t("seismic.empty")}):k.map((o,r)=>{var n;let l=(n=o.mag)>=4?s.w4.colors.danger:n>=2.5?s.w4.colors.warning:s.w4.colors.success;return(0,i.jsxs)(h,{delay:r,onClick:()=>{null!=o.lat&&null!=o.lon?(0,s.VJ)("earth",{lat:o.lat.toFixed(4),lon:o.lon.toFixed(4),zoom:5}):(0,s.VJ)("earth",{placeId:"lisbon"})},title:t("seismic.openInEarth"),children:[(0,i.jsxs)(g,{color:l,children:["M ",o.mag.toFixed(1)]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(b,{children:o.location}),(0,i.jsx)(y,{children:function(e,t){try{return new Date(e).toLocaleDateString("pt"===t?"pt-PT":"en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}catch{return new Date(e).toISOString()}}(o.time,e)})]})]},o.key)})})}}}]);