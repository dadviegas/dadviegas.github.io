"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["7890"],{34201(e,a,t){t.d(a,{NightSkyWidget:()=>b});var i=t(65723),s=t(37991),n=t(36859),r=t.n(n),o=t(72799),l=t(23930),y=t(2938),m=t(28170),x=t(98975),g=t(77032);let c=[{id:"ursa-major",name:"Ursa Major",stars:[{x:.22,y:.28,mag:1.8},{x:.28,y:.3,mag:2.3},{x:.34,y:.33,mag:2.5},{x:.4,y:.36,mag:1.8},{x:.46,y:.32,mag:2},{x:.5,y:.28,mag:2.3},{x:.55,y:.24,mag:2}],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]]},{id:"cassiopeia",name:"Cassiopeia",stars:[{x:.6,y:.18,mag:2.2},{x:.66,y:.22,mag:2.4},{x:.71,y:.17,mag:2.5},{x:.76,y:.22,mag:2.7},{x:.82,y:.18,mag:2.3}],lines:[[0,1],[1,2],[2,3],[3,4]]},{id:"orion",name:"Orion",stars:[{x:.48,y:.68,mag:1.6},{x:.55,y:.6,mag:1.8},{x:.52,y:.74,mag:2.1},{x:.5,y:.72,mag:2},{x:.49,y:.75,mag:2},{x:.6,y:.82,mag:2.2},{x:.44,y:.8,mag:2.4}],lines:[[0,1],[0,2],[2,3],[3,4],[2,5],[2,6]]},{id:"lyra",name:"Lyra",stars:[{x:.78,y:.54,mag:.1},{x:.82,y:.58,mag:3.2},{x:.79,y:.62,mag:3.9},{x:.75,y:.6,mag:3.3}],lines:[[0,1],[1,2],[2,3],[3,0]]},{id:"scorpius",name:"Scorpius",stars:[{x:.18,y:.76,mag:1.1},{x:.24,y:.82,mag:2.3},{x:.3,y:.85,mag:2.8},{x:.36,y:.81,mag:2.9},{x:.32,y:.72,mag:2.6}],lines:[[0,1],[1,2],[2,3],[3,4]]},{id:"cygnus",name:"Cygnus",stars:[{x:.65,y:.42,mag:1.3},{x:.72,y:.46,mag:2.2},{x:.78,y:.44,mag:2.5},{x:.7,y:.38,mag:2.9},{x:.68,y:.5,mag:2.5}],lines:[[0,1],[1,2],[3,0],[0,4]]},{id:"bootes",name:"Bo\xf6tes",stars:[{x:.36,y:.52,mag:-.05},{x:.32,y:.46,mag:2.4},{x:.4,y:.48,mag:2.5},{x:.38,y:.56,mag:2.7}],lines:[[0,1],[0,2],[0,3]]},{id:"leo",name:"Leo",stars:[{x:.56,y:.52,mag:1.4},{x:.62,y:.5,mag:2},{x:.66,y:.54,mag:2.6},{x:.6,y:.58,mag:2.6},{x:.52,y:.58,mag:3.4}],lines:[[0,1],[1,2],[2,3],[3,0],[0,4]]}],d=(0,o.keyframes)`
  0%, 100% { opacity: 0.85; }
  50%      { opacity: 0.55; }
`,p=(0,o.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,h=r().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-height: 0;
  animation: ${p} 0.3s ease both;
`,f=r().span`
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
`,u=r().div`
  position: relative;
  flex: 1;
  min-height: 0;
  background:
    radial-gradient(ellipse at center, #0b1630 0%, #05080f 70%);
  border: 1px solid ${l.w4.colors.borderSubtle};
  border-radius: ${l.w4.borderRadius.md};
  overflow: hidden;
`,w=r().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.04em;
  text-align: center;
`,k=r().circle`
  animation: ${d} 3s ease-in-out infinite;
`,j=r().div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${l.w4.spacing.md};
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.08em;
`;function b({locale:e}){let a,t="pt"===e?"pt":"en",n=(0,s.useMemo)(()=>(0,m.Nx)(t,x.A),[t]),[r,o]=(0,s.useState)(new Date);(0,s.useEffect)(()=>{let e=setInterval(()=>o(new Date),6e4);return()=>clearInterval(e)},[]);let d=(a=new Date().getHours())>=20||a<7,p=(60*r.getHours()+r.getMinutes())/1440*360;return(0,i.jsx)(y.rl,{title:n("nightSky.title"),accessory:(0,i.jsx)(f,{children:n("astro.location")}),accentColor:g.A.accentColor,children:(0,i.jsxs)(h,{children:[(0,i.jsx)(u,{children:d?(0,i.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 260 260",preserveAspectRatio:"xMidYMid meet",children:[(0,i.jsx)("circle",{cx:130,cy:130,r:122,fill:"none",stroke:l.w4.colors.borderSubtle,strokeWidth:"1",strokeDasharray:"2 4",opacity:"0.45"}),[0,90,180,270].map(e=>{let a=e*Math.PI/180,t=130+122*Math.cos(a),s=130+122*Math.sin(a),n=130+116*Math.cos(a),r=130+116*Math.sin(a);return(0,i.jsx)("line",{x1:t,y1:s,x2:n,y2:r,stroke:l.w4.colors.mainTextFaint,strokeWidth:"1",opacity:"0.4"},e)}),(0,i.jsx)("g",{transform:`rotate(${p} 130 130)`,children:c.map(e=>{let a=e.stars.map(e=>({cx:16+228*e.x,cy:16+228*e.y,r:Math.max(.8,2.6-.6*e.mag)}));return(0,i.jsxs)("g",{children:[e.lines.map(([e,t],s)=>(0,i.jsx)("line",{x1:a[e].cx,y1:a[e].cy,x2:a[t].cx,y2:a[t].cy,stroke:"rgba(139,123,255,0.25)",strokeWidth:"0.6"},s)),a.map((e,a)=>(0,i.jsx)(k,{cx:e.cx,cy:e.cy,r:e.r,fill:"#f2ecd8",style:{animationDelay:`${a%6*.4}s`}},a))]},e.id)})})]}):(0,i.jsx)(j,{children:n("nightSky.dayTitle")})}),d&&(0,i.jsx)(w,{children:n("nightSky.nightLegend",{count:c.length})})]})})}}}]);