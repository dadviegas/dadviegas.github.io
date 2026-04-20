"use strict";(self.webpackChunk_atlantis_cosmos=self.webpackChunk_atlantis_cosmos||[]).push([["987"],{7416(e,a,o){o.d(a,{A:()=>N});var n=o(5723),t=o(7991),i=o(6859),r=o.n(i),l=o(3930),s=o(8641),c=o(5553),d=o(9421),m=o(9522);function g(e,a,o,n,t){let i,r,l,s,c,d=Math.PI/180,m=180/Math.PI,g=(i=t.getUTCFullYear(),r=t.getUTCMonth()+1,l=t.getUTCDate()+(t.getUTCHours()+t.getUTCMinutes()/60+t.getUTCSeconds()/3600)/24,c=i+4800-(s=Math.floor((14-r)/12)),((((280.46061837+360.98564736629*(l+Math.floor((153*(r+12*s-3)+2)/5)+365*c+Math.floor(c/4)-Math.floor(c/100)+Math.floor(c/400)-32045-2451545))%360+360)%360+n+360)%360-15*e+360)%360*d),u=o*d,p=a*d,f=Math.asin(Math.max(-1,Math.min(1,Math.sin(u)*Math.sin(p)+Math.cos(u)*Math.cos(p)*Math.cos(g)))),h=Math.acos(Math.max(-1,Math.min(1,(Math.sin(p)-Math.sin(f)*Math.sin(u))/(Math.cos(f)*Math.cos(u)))))*m;return Math.sin(g)>0&&(h=360-h),{az:h,alt:f*m}}function u(e,a,o){let n=Math.PI/180*e,t=Math.PI/180*a,i=6378.137/Math.sqrt(1-.00669437999014*Math.sin(n)**2);return{x:(i+o)*Math.cos(n)*Math.cos(t),y:(i+o)*Math.cos(n)*Math.sin(t),z:(.99330562000986*i+o)*Math.sin(n)}}function p(e,a,o,n,t){let i=u(e,a,0),r=u(o,n,t),l=r.x-i.x,s=r.y-i.y,c=r.z-i.z,d=Math.sqrt(l*l+s*s+c*c),m=Math.PI/180*e,g=Math.PI/180*a,p=[-Math.sin(g),Math.cos(g),0],f=[-Math.sin(m)*Math.cos(g),-Math.sin(m)*Math.sin(g),Math.cos(m)],h=[Math.cos(m)*Math.cos(g),Math.cos(m)*Math.sin(g),Math.sin(m)],x=l*p[0]+s*p[1]+c*p[2],y=l*f[0]+s*f[1]+c*f[2],b=180/Math.PI*Math.atan2(l*h[0]+s*h[1]+c*h[2],Math.sqrt(x*x+y*y)),w=180/Math.PI*Math.atan2(x,y);return w<0&&(w+=360),{az:w,el:b,range_km:d}}function f(e,a,o,n,t){if(a<0)return null;let i=t*(1-a/90),r=Math.PI/180*e;return{x:o+i*Math.sin(r),y:n-i*Math.cos(r)}}let h=[{id:"Betelgeuse",ra:5.9194,dec:7.407,mag:.45},{id:"Bellatrix",ra:5.4187,dec:6.35,mag:1.64},{id:"Mintaka",ra:5.5334,dec:-.3,mag:2.23},{id:"Alnilam",ra:5.6036,dec:-1.202,mag:1.7},{id:"Alnitak",ra:5.6795,dec:-1.943,mag:1.74},{id:"Rigel",ra:5.2423,dec:-8.202,mag:.13},{id:"Saiph",ra:5.7959,dec:-9.67,mag:2.06},{id:"Meissa",ra:5.5852,dec:9.934,mag:3.39},{id:"Dubhe",ra:11.0621,dec:61.75,mag:1.81},{id:"Merak",ra:11.0306,dec:56.383,mag:2.34},{id:"Phecda",ra:11.8974,dec:53.695,mag:2.44},{id:"Megrez",ra:12.2571,dec:57.033,mag:3.31},{id:"Alioth",ra:12.9004,dec:55.96,mag:1.76},{id:"Mizar",ra:13.399,dec:54.925,mag:2.23},{id:"Alkaid",ra:13.7924,dec:49.313,mag:1.85},{id:"Schedar",ra:.6753,dec:56.537,mag:2.24},{id:"Caph",ra:.1528,dec:59.15,mag:2.27},{id:"GammaCas",ra:.945,dec:60.717,mag:2.47},{id:"Ruchbah",ra:1.4304,dec:60.235,mag:2.66},{id:"Segin",ra:1.9061,dec:63.67,mag:3.37},{id:"Regulus",ra:10.1395,dec:11.967,mag:1.36},{id:"Denebola",ra:11.8179,dec:14.572,mag:2.14},{id:"Algieba",ra:10.333,dec:19.842,mag:2.01},{id:"Zosma",ra:11.235,dec:20.524,mag:2.55},{id:"EtaLeo",ra:10.1221,dec:16.763,mag:3.48},{id:"EpsilonLeo",ra:9.7641,dec:23.774,mag:2.97},{id:"Deneb",ra:20.6905,dec:45.28,mag:1.25},{id:"Sadr",ra:20.3704,dec:40.257,mag:2.23},{id:"Albireo",ra:19.512,dec:27.96,mag:3.09},{id:"Gienah",ra:20.7704,dec:33.97,mag:2.48},{id:"DeltaCyg",ra:19.7496,dec:44.95,mag:2.87},{id:"Vega",ra:18.6157,dec:38.783,mag:.03},{id:"Sheliak",ra:18.835,dec:33.363,mag:3.52},{id:"Sulafat",ra:18.9822,dec:32.69,mag:3.24},{id:"Altair",ra:19.8464,dec:8.868,mag:.76},{id:"Tarazed",ra:19.7713,dec:10.613,mag:2.72},{id:"Alshain",ra:19.9215,dec:6.407,mag:3.71},{id:"Antares",ra:16.4901,dec:-26.432,mag:1.06},{id:"Graffias",ra:16.0921,dec:-19.806,mag:2.62},{id:"Dschubba",ra:16.0056,dec:-22.622,mag:2.29},{id:"Shaula",ra:17.5601,dec:-37.104,mag:1.62},{id:"Lesath",ra:17.5304,dec:-37.298,mag:2.69},{id:"EpsilonSco",ra:16.8362,dec:-34.293,mag:2.29},{id:"ThetaSco",ra:17.622,dec:-42.998,mag:1.87},{id:"KappaSco",ra:17.7082,dec:-39.03,mag:2.41},{id:"Pollux",ra:7.7553,dec:28.026,mag:1.16},{id:"Castor",ra:7.5767,dec:31.888,mag:1.58},{id:"Alhena",ra:6.6283,dec:16.399,mag:1.93},{id:"Wasat",ra:7.3348,dec:21.982,mag:3.53},{id:"MuGem",ra:6.3826,dec:22.514,mag:2.87},{id:"Aldebaran",ra:4.5987,dec:16.509,mag:.87},{id:"Elnath",ra:5.4381,dec:28.608,mag:1.65},{id:"Sirius",ra:6.7525,dec:-16.716,mag:-1.46},{id:"Canopus",ra:6.3992,dec:-52.696,mag:-.74},{id:"Arcturus",ra:14.2613,dec:19.182,mag:-.05},{id:"Capella",ra:5.2782,dec:45.998,mag:.08},{id:"Procyon",ra:7.6551,dec:5.225,mag:.4},{id:"Achernar",ra:1.6285,dec:-57.237,mag:.45},{id:"Spica",ra:13.4199,dec:-11.161,mag:.97},{id:"Fomalhaut",ra:22.9608,dec:-29.622,mag:1.16}],x=Object.fromEntries(h.map(e=>[e.id,e])),y=[{name:"Orion",color:"#a0c4ff",lines:[["Meissa","Betelgeuse"],["Meissa","Bellatrix"],["Betelgeuse","Mintaka"],["Bellatrix","Mintaka"],["Mintaka","Alnilam"],["Alnilam","Alnitak"],["Alnitak","Saiph"],["Alnitak","Rigel"],["Saiph","Rigel"]]},{name:"Ursa Major",color:"#90e090",lines:[["Dubhe","Merak"],["Merak","Phecda"],["Phecda","Megrez"],["Megrez","Dubhe"],["Megrez","Alioth"],["Alioth","Mizar"],["Mizar","Alkaid"]]},{name:"Cassiopeia",color:"#ffd0a0",lines:[["Caph","Schedar"],["Schedar","GammaCas"],["GammaCas","Ruchbah"],["Ruchbah","Segin"]]},{name:"Leo",color:"#ffb0b0",lines:[["Regulus","EtaLeo"],["EtaLeo","Algieba"],["Algieba","EpsilonLeo"],["Algieba","Zosma"],["Zosma","Denebola"]]},{name:"Cygnus",color:"#d0b0ff",lines:[["Deneb","Sadr"],["Sadr","Albireo"],["DeltaCyg","Sadr"],["Sadr","Gienah"]]},{name:"Lyra",color:"#ffe080",lines:[["Vega","Sheliak"],["Sheliak","Sulafat"],["Sulafat","Vega"]]},{name:"Aquila",color:"#80d0ff",lines:[["Tarazed","Altair"],["Altair","Alshain"]]},{name:"Scorpius",color:"#ff9090",lines:[["Graffias","Dschubba"],["Dschubba","Antares"],["Antares","EpsilonSco"],["EpsilonSco","ThetaSco"],["ThetaSco","KappaSco"],["KappaSco","Shaula"],["Shaula","Lesath"]]},{name:"Gemini",color:"#a0ffb0",lines:[["Castor","Pollux"],["Castor","Wasat"],["Wasat","Alhena"],["Pollux","Alhena"],["MuGem","Alhena"]]}],b=r().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.md};
`,w=r().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${l.w4.spacing.sm};
`,z=r().h2`
  font-size: ${l.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,$=r().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
`,A=r().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
`,v=r().input`
  width: 90px;
  padding: 4px 8px;
  font-size: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainText};
  outline: none;

  &:focus {
    border-color: #58a6ff;
  }
`,k=r().label`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
`,S=r().div`
  display: flex;
  gap: ${l.w4.spacing.lg};
  align-items: flex-start;

  @media (max-width: ${l.w4.breakpoints.lg}) {
    flex-direction: column;
  }
`,j=r().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
`,M=r().canvas`
  border-radius: 50%;
  cursor: crosshair;
`,T=r().div`
  width: 220px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.sm};

  @media (max-width: ${l.w4.breakpoints.lg}) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`,B=r().div`
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
`,P=r().div`
  font-size: 10px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: ${l.w4.spacing.xs};
`,E=r().div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${l.w4.colors.mainText};
  padding: 2px 0;
`,C=r().div`
  width: 20px;
  height: 2px;
  background: ${({color:e})=>e};
  opacity: 0.7;
  border-radius: 1px;
  flex-shrink: 0;
`,I=r().div`
  font-size: 12px;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamilyMono};
  line-height: 1.8;
`,F=r().div`
  display: flex;
  justify-content: space-between;
  gap: ${l.w4.spacing.sm};
`,L=r().span`
  color: ${l.w4.colors.mainTextMuted};
  font-size: 11px;
`,R=r().div`
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.5;
`,G=r().div`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
  text-align: center;
`,D=r().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: 11px;
  background: transparent;
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;

  &:hover {
    border-color: #58a6ff;
    color: #58a6ff;
  }
`;function N(){let e=(0,t.useRef)(null),a=(0,t.useRef)(null),[o,i]=(0,t.useState)(480),[r,u]=(0,t.useState)(0),[N,K]=(0,t.useState)(new Date),{data:H}=(0,m.so)(5e3),{location:O,status:V}=(0,m.mJ)(),[_,W]=(0,t.useState)(48.85),[Y,U]=(0,t.useState)(2.35),[Z,J]=(0,t.useState)("48.85"),[q,X]=(0,t.useState)("2.35");(0,t.useEffect)(()=>{O&&(W(O.lat),U(O.lon),J(O.lat.toFixed(3)),X(O.lon.toFixed(3)))},[O]),(0,t.useEffect)(()=>{let e=a.current;if(!e)return;let o=new ResizeObserver(e=>{i(Math.max(280,Math.min(e[0].contentRect.width,540)))});return o.observe(e),()=>o.disconnect()},[]),(0,t.useEffect)(()=>{let e=setInterval(()=>{u(e=>e+1),K(new Date)},1e4);return()=>clearInterval(e)},[]);let Q=(0,t.useCallback)(()=>{let a=e.current;if(!a)return;let n=a.getContext("2d");if(!n)return;let t=new Date,i=o/2,r=o/2,s=o/2-18;n.clearRect(0,0,o,o);let c=n.createRadialGradient(i,r,0,i,r,s);for(let e of(c.addColorStop(0,"#06060f"),c.addColorStop(.7,"#08091a"),c.addColorStop(1,"#0b0c1e"),n.save(),n.beginPath(),n.arc(i,r,s,0,2*Math.PI),n.clip(),n.fillStyle=c,n.fillRect(0,0,o,o),n.restore(),[30,60])){let a=s*(1-e/90);n.beginPath(),n.arc(i,r,a,0,2*Math.PI),n.strokeStyle="rgba(255,255,255,0.04)",n.lineWidth=.8,n.stroke()}if(n.beginPath(),n.arc(i,r,s,0,2*Math.PI),n.strokeStyle="rgba(255,255,255,0.12)",n.lineWidth=1,n.stroke(),y.forEach(e=>{n.strokeStyle=e.color+"50",n.lineWidth=.9,e.lines.forEach(([e,a])=>{let o=x[e],l=x[a];if(!o||!l)return;let c=g(o.ra,o.dec,_,Y,t),d=g(l.ra,l.dec,_,Y,t);if(c.alt<0||d.alt<0)return;let m=f(c.az,c.alt,i,r,s),u=f(d.az,d.alt,i,r,s);m&&u&&(n.beginPath(),n.moveTo(m.x,m.y),n.lineTo(u.x,u.y),n.stroke())})}),h.forEach(e=>{let a=g(e.ra,e.dec,_,Y,t);if(a.alt<0)return;let o=f(a.az,a.alt,i,r,s);if(!o)return;let l=Math.max(.4,2.8-.55*e.mag),c=Math.min(1,Math.max(.25,1-(e.mag- -1.5)*.12));if(e.mag<1.5){let e=n.createRadialGradient(o.x,o.y,0,o.x,o.y,3*l);e.addColorStop(0,`rgba(255,255,220,${.5*c})`),e.addColorStop(1,"rgba(255,255,220,0)"),n.beginPath(),n.arc(o.x,o.y,3*l,0,2*Math.PI),n.fillStyle=e,n.fill()}n.beginPath(),n.arc(o.x,o.y,l,0,2*Math.PI),n.fillStyle=`rgba(255,255,220,${c})`,n.fill()}),H){let e=p(_,Y,H.latitude,H.longitude,H.altitude);if(e.el>0){let a=f(e.az,e.el,i,r,s);if(a){let o=n.createRadialGradient(a.x,a.y,0,a.x,a.y,12);o.addColorStop(0,"rgba(255,215,0,0.4)"),o.addColorStop(1,"rgba(255,215,0,0)"),n.beginPath(),n.arc(a.x,a.y,12,0,2*Math.PI),n.fillStyle=o,n.fill(),n.beginPath(),n.arc(a.x,a.y,5,0,2*Math.PI),n.fillStyle="#ffd700",n.fill(),n.strokeStyle="#fffacd",n.lineWidth=1,n.stroke(),n.font=`bold 11px ${l.w4.typography.fontFamilyMono}`,n.fillStyle="#ffd700",n.fillText("ISS",a.x+8,a.y+4),n.font=`10px ${l.w4.typography.fontFamilyMono}`,n.fillStyle="#ffd70099",n.fillText(`${e.el.toFixed(1)}\xb0 el`,a.x+8,a.y+16)}}}n.font="bold 11px sans-serif",n.textAlign="center",n.textBaseline="middle",[{az:0,label:"N"},{az:90,label:"E"},{az:180,label:"S"},{az:270,label:"W"}].forEach(({az:e,label:a})=>{let o=Math.PI/180*e,t=i+(s+12)*Math.sin(o),l=r-(s+12)*Math.cos(o);n.fillStyle="N"===a?"#58a6ff":"#8b949e",n.fillText(a,t,l)}),n.font="9px sans-serif",n.fillStyle="rgba(255,255,255,0.15)",n.textAlign="center",n.fillText("Zenith",i,r+4),n.textAlign="left",n.textBaseline="alphabetic"},[_,Y,H,o]);(0,t.useEffect)(()=>{Q()},[Q,r]);let ee=H?p(_,Y,H.latitude,H.longitude,H.altitude):null,ea=ee&&ee.el>0;return(0,n.jsxs)(b,{children:[(0,n.jsxs)(w,{children:[(0,n.jsxs)(z,{children:[(0,n.jsx)(s.A,{size:18,color:"#ffd700"}),"Night Sky"]}),(0,n.jsxs)($,{children:[(0,n.jsxs)(A,{children:[(0,n.jsx)(c.A,{size:12}),(0,n.jsx)(k,{children:"Lat"}),(0,n.jsx)(v,{type:"number",value:Z,onChange:e=>{J(e.target.value);let a=parseFloat(e.target.value);!isNaN(a)&&a>=-90&&a<=90&&W(a)},step:"0.001",min:"-90",max:"90"}),(0,n.jsx)(k,{children:"Lon"}),(0,n.jsx)(v,{type:"number",value:q,onChange:e=>{X(e.target.value);let a=parseFloat(e.target.value);!isNaN(a)&&a>=-180&&a<=180&&U(a)},step:"0.001",min:"-180",max:"180"})]}),"granted"===V&&(0,n.jsxs)(A,{style:{color:"#3fb950"},children:[(0,n.jsx)(c.A,{size:11}),"GPS"]}),(0,n.jsxs)(D,{onClick:()=>{u(e=>e+1),K(new Date)},children:[(0,n.jsx)(d.A,{size:11}),"Refresh"]})]})]}),(0,n.jsxs)(S,{children:[(0,n.jsx)(j,{ref:a,children:(0,n.jsx)(M,{ref:e,width:o,height:o})}),(0,n.jsxs)(T,{children:[(0,n.jsxs)(B,{children:[(0,n.jsx)(P,{children:"ISS Visibility"}),H&&ee?ea?(0,n.jsxs)(I,{children:[(0,n.jsxs)(F,{children:[(0,n.jsx)(L,{children:"Elevation"}),(0,n.jsxs)("span",{children:[ee.el.toFixed(1),"\xb0"]})]}),(0,n.jsxs)(F,{children:[(0,n.jsx)(L,{children:"Azimuth"}),(0,n.jsxs)("span",{children:[ee.az.toFixed(1),"\xb0"]})]}),(0,n.jsxs)(F,{children:[(0,n.jsx)(L,{children:"Range"}),(0,n.jsxs)("span",{children:[ee.range_km.toFixed(0)," km"]})]}),(0,n.jsxs)(F,{children:[(0,n.jsx)(L,{children:"Sun"}),(0,n.jsx)("span",{children:H.visibility})]})]}):(0,n.jsxs)(R,{children:["ISS is currently below the horizon.",(0,n.jsx)("br",{}),"El: ",ee.el.toFixed(1),"\xb0"]}):(0,n.jsx)(R,{children:"Loading ISS data…"})]}),(0,n.jsxs)(B,{children:[(0,n.jsx)(P,{children:"Constellations"}),y.map(e=>(0,n.jsxs)(E,{children:[(0,n.jsx)(C,{color:e.color}),e.name]},e.name))]}),(0,n.jsxs)(B,{children:[(0,n.jsx)(P,{children:"How to read"}),(0,n.jsx)(R,{children:"Centre = zenith (directly overhead). Edge = horizon. N is up. Stars are sized by brightness. ISS shown in gold when visible."})]})]})]}),(0,n.jsxs)(G,{children:["UTC ",N.toUTCString().split(" ")[4]," \xb7 Observer ",_.toFixed(3),"\xb0 ",_>=0?"N":"S",","," ",Math.abs(Y).toFixed(3),"\xb0 ",Y>=0?"E":"W"]})]})}},1150(e,a,o){o.d(a,{A:()=>z});var n=o(5723),t=o(7991),i=o(6859),r=o.n(i),l=o(3930),s=o(9522);let c=[{category:"station",label:"Space Stations",examples:"ISS, Tiangong"},{category:"observation",label:"Earth Observation",examples:"Terra, Aqua, Landsat-9"},{category:"navigation",label:"Navigation",examples:"GPS III, GPS IIF"},{category:"communications",label:"Communications",examples:"Starlink"},{category:"scientific",label:"Scientific",examples:"Hubble"},{category:"weather",label:"Weather",examples:"GOES-16, GOES-18"}],d=r().div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,m=r().div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,g=r().div`
  height: 100%;
  width: 100%;

  .leaflet-container {
    height: 100%;
    width: 100%;
    background: #0d1117;
    font-family: ${l.w4.typography.fontFamily};
  }

  .leaflet-tile-pane {
    filter: invert(1) hue-rotate(180deg) brightness(0.85) contrast(0.9);
  }

  .leaflet-popup-content-wrapper {
    background: ${l.w4.colors.surface};
    border: 1px solid ${l.w4.colors.border};
    border-radius: ${l.w4.borderRadius.md};
    color: ${l.w4.colors.mainText};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  }

  .leaflet-popup-tip {
    background: ${l.w4.colors.surface};
  }

  .leaflet-popup-content {
    margin: 12px 16px;
    font-size: 13px;
    line-height: 1.6;
  }

  .leaflet-control-zoom a {
    background: ${l.w4.colors.surface};
    border-color: ${l.w4.colors.border};
    color: ${l.w4.colors.mainText};
  }

  .leaflet-control-zoom a:hover {
    background: ${l.w4.colors.mainBg};
  }

  .leaflet-tooltip {
    background: #1c2128;
    border: 1px solid ${l.w4.colors.border};
    border-radius: 5px;
    color: ${l.w4.colors.mainText};
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    padding: 4px 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    white-space: nowrap;
  }

  .leaflet-tooltip::before {
    border-top-color: ${l.w4.colors.border};
  }
`,u=r().div`
  background: ${l.w4.colors.sidebarBg};
  border-top: 1px solid ${l.w4.colors.border};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.lg};
  flex-wrap: wrap;
`,p=r().span`
  font-size: 11px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  flex-shrink: 0;
`,f=r().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${l.w4.colors.mainText};
  white-space: nowrap;
`,h=r().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  box-shadow: 0 0 6px ${({color:e})=>e}80;
  flex-shrink: 0;
`,x=r().span`
  color: ${l.w4.colors.mainTextMuted};
  font-size: 11px;
`,y=r().div`
  height: 26px;
  min-height: 26px;
  background: ${l.w4.colors.sidebarBg};
  border-top: 1px solid ${l.w4.colors.border};
  display: flex;
  align-items: center;
  padding: 0 ${l.w4.spacing.md};
  gap: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
`,b=r().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({live:e})=>e?"#3fb950":"#f85149"};
`;function w(e){let a=s.IT[e.category];return`
    <div style="font-family: monospace; line-height: 1.8;">
      <div style="font-size: 14px; font-weight: 700; margin-bottom: 6px; color: ${a};">
        🛰 ${e.name}
      </div>
      <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="color:#8b949e; padding-right:12px; font-size:11px;">Lat</td>
            <td>${e.latitude.toFixed(4)}\xb0</td></tr>
        <tr><td style="color:#8b949e; padding-right:12px; font-size:11px;">Lon</td>
            <td>${e.longitude.toFixed(4)}\xb0</td></tr>
        <tr><td style="color:#8b949e; padding-right:12px; font-size:11px;">Altitude</td>
            <td>${e.altitude.toFixed(1)} km</td></tr>
      </table>
    </div>
  `}function z(){let e=(0,t.useRef)(null),a=(0,t.useRef)(null),o=(0,t.useRef)(null),i=(0,t.useRef)(null),r=(0,t.useRef)(null),l=(0,t.useRef)(new Map),[z,$]=(0,t.useState)(!1),{data:A}=(0,s.so)(5e3),v=(0,s.Ey)(15e3),{trail:k,addPoint:S}=(0,s.wB)(80);return(0,t.useEffect)(()=>{var e;!function(e){if(document.querySelector(`link[href="${e}"]`))return;let a=document.createElement("link");a.rel="stylesheet",a.href=e,document.head.appendChild(a)}("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),(e="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",new Promise((a,o)=>{if(document.querySelector(`script[src="${e}"]`))return void a();let n=document.createElement("script");n.src=e,n.onload=()=>a(),n.onerror=o,document.head.appendChild(n)})).then(()=>$(!0))},[]),(0,t.useEffect)(()=>{if(!z||!e.current||a.current)return;let n=window.L,t=n.map(e.current,{center:[20,0],zoom:2,zoomControl:!0,attributionControl:!1,minZoom:2});n.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:10}).addTo(t);let c=n.circleMarker([20,0],{radius:8,color:s.IT.station,fillColor:s.IT.station,fillOpacity:1,weight:2,pane:"markerPane"}).addTo(t);return c.bindPopup("Loading ISS…",{maxWidth:260,minWidth:200}),c.bindTooltip("\uD83D\uDEF0 ISS \xb7 International Space Station",{direction:"top",offset:[0,-8]}),o.current=c,i.current=n.polyline([],{color:`${s.IT.station}55`,weight:1.5,dashArray:"4 4"}).addTo(t),r.current=n.circle([20,0],{radius:0,color:`${s.IT.station}22`,fillColor:`${s.IT.station}08`,fillOpacity:1,weight:1}).addTo(t),a.current=t,()=>{t.remove(),a.current=null,o.current=null,i.current=null,r.current=null,l.current.clear()}},[z]),(0,t.useEffect)(()=>{if(!A||!a.current)return;let e=[A.latitude,A.longitude];S(A.latitude,A.longitude),o.current?.setLatLng(e),o.current?.setPopupContent(w({...A,norad:25544,category:"station",name:"ISS"})),r.current?.setLatLng(e),r.current?.setRadius(A.footprint/2*1e3)},[A,S]),(0,t.useEffect)(()=>{i.current?.setLatLngs(k)},[k]),(0,t.useEffect)(()=>{if(!a.current||!window.L)return;let e=window.L,o=a.current,n=l.current;v.forEach(a=>{if(25544===a.norad)return;let t=[a.latitude,a.longitude],i=s.IT[a.category],r=`🛰 ${a.name} \xb7 ${a.altitude.toFixed(0)} km`;if(n.has(a.norad)){let e=n.get(a.norad);e.setLatLng(t),e.setPopupContent(w(a)),e.setTooltipContent(r)}else{let l=e.circleMarker(t,{radius:5,color:i,fillColor:i,fillOpacity:.85,weight:1.5}).addTo(o);l.bindPopup(w(a),{maxWidth:260,minWidth:200}),l.bindTooltip(r,{direction:"top",offset:[0,-6]}),n.set(a.norad,l)}})},[v]),(0,n.jsxs)(d,{children:[(0,n.jsx)(m,{children:(0,n.jsx)(g,{children:(0,n.jsx)("div",{ref:e,style:{height:"100%",width:"100%"}})})}),(0,n.jsxs)(u,{children:[(0,n.jsx)(p,{children:"Legend"}),c.map(({category:e,label:a,examples:o})=>(0,n.jsxs)(f,{children:[(0,n.jsx)(h,{color:s.IT[e]}),a,(0,n.jsxs)(x,{children:["\xb7 ",o]})]},e))]}),(0,n.jsxs)(y,{children:[(0,n.jsx)(b,{live:!!A}),(0,n.jsx)("span",{children:"ISS"}),A&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:"\xb7"}),(0,n.jsxs)("span",{children:[A.latitude.toFixed(3),"\xb0, ",A.longitude.toFixed(3),"\xb0"]}),(0,n.jsx)("span",{children:"\xb7"}),(0,n.jsxs)("span",{children:[A.altitude.toFixed(1)," km"]}),(0,n.jsx)("span",{children:"\xb7"}),(0,n.jsxs)("span",{children:[(A.velocity/3600).toFixed(2)," km/s"]})]}),(0,n.jsxs)("span",{style:{marginLeft:"auto"},children:[v.length," satellites tracked \xb7 click any marker for details \xa0\xb7\xa0",(0,n.jsx)("a",{href:"https://www.openstreetmap.org/copyright",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline",opacity:.7},children:"\xa9 OpenStreetMap contributors"})]})]})]})}},6080(e,a,o){o.d(a,{A:()=>L});var n=o(5723);o(7991);var t=o(6859),i=o.n(t),r=o(2799),l=o(3930),s=o(6896),c=o(6720),d=o(6494),m=o(7230),g=o(4558),u=o(140),p=o(9522);let f=(0,r.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,h=i().div`
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.lg};
`,x=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${l.w4.spacing.md};
`,y=i().h2`
  font-size: ${l.w4.typography.fontSizeLg};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,b=i().span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 500;
  color: ${({active:e})=>e?"#3fb950":l.w4.colors.mainTextMuted};
  background: ${({active:e})=>e?"rgba(63,185,80,0.1)":"transparent"};
  border: 1px solid ${({active:e})=>e?"rgba(63,185,80,0.3)":l.w4.colors.border};
  border-radius: 999px;
  padding: 2px 10px;
`,w=i().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:e})=>e?"#3fb950":l.w4.colors.mainTextMuted};
  animation: ${({active:e})=>e?f:"none"} 1.5s ease-in-out infinite;
`,z=i().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${l.w4.spacing.md};

  @media (max-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,$=i().div`
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${l.w4.spacing.xs};
`,A=i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${l.w4.borderRadius.sm};
  background: ${({color:e})=>e}18;
  color: ${({color:e})=>e};
  margin-bottom: ${l.w4.spacing.xs};
`,v=i().div`
  font-size: 11px;
  font-weight: 500;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,k=i().div`
  font-size: ${l.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamilyMono};
  line-height: 1.2;
`,S=i().div`
  font-size: 11px;
  color: ${l.w4.colors.mainTextMuted};
`,j=i().div`
  height: 24px;
  width: 120px;
  background: ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  animation: ${f} 1.5s ease-in-out infinite;
`,M=i().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${l.w4.spacing.sm};

  @media (max-width: ${l.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,T=i().div`
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`,B=i().div`
  font-size: 10px;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,P=i().div`
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamilyMono};
`,E=i().div`
  font-size: 12px;
  font-weight: 600;
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,C=i().span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  background: ${({vis:e})=>"daylight"===e?"rgba(255,215,0,0.15)":"eclipsed"===e?"rgba(88,166,255,0.15)":"rgba(139,148,158,0.15)"};
  color: ${({vis:e})=>"daylight"===e?"#ffd700":"eclipsed"===e?"#58a6ff":l.w4.colors.mainTextMuted};
`;function I(e,a=2){return void 0===e?"—":e.toFixed(a)}function F(e,a,o){return`${Math.abs(e).toFixed(4)}\xb0 ${e>=0?a:o}`}function L(){let{data:e,loading:a}=(0,p.so)(5e3);return(0,n.jsxs)(h,{children:[(0,n.jsxs)(x,{children:[(0,n.jsxs)(y,{children:[(0,n.jsx)(s.A,{size:18,color:"#58a6ff"}),"Space Metrics"]}),(0,n.jsxs)(b,{active:!a&&!!e,children:[(0,n.jsx)(w,{active:!a&&!!e}),a?"Connecting…":e?"Live":"Offline"]})]}),(0,n.jsx)(E,{children:"ISS Telemetry"}),(0,n.jsxs)(z,{children:[(0,n.jsxs)($,{children:[(0,n.jsx)(A,{color:"#58a6ff",children:(0,n.jsx)(c.A,{size:16})}),(0,n.jsx)(v,{children:"Position"}),a?(0,n.jsx)(j,{}):e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k,{children:F(e.latitude,"N","S")}),(0,n.jsx)(S,{children:F(e.longitude,"E","W")})]}):(0,n.jsx)(k,{children:"—"})]}),(0,n.jsxs)($,{children:[(0,n.jsx)(A,{color:"#3fb950",children:(0,n.jsx)(d.A,{size:16})}),(0,n.jsx)(v,{children:"Altitude"}),a?(0,n.jsx)(j,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(k,{children:[I(e?.altitude)," km"]}),(0,n.jsxs)(S,{children:["~",I(e?.621371*e.altitude:void 0)," mi"]})]})]}),(0,n.jsxs)($,{children:[(0,n.jsx)(A,{color:"#e3b341",children:(0,n.jsx)(m.A,{size:16})}),(0,n.jsx)(v,{children:"Velocity"}),a?(0,n.jsx)(j,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(k,{children:[I(e?.velocity,0)," km/h"]}),(0,n.jsxs)(S,{children:[I(e?e.velocity/3600:void 0,2)," km/s"]})]})]}),(0,n.jsxs)($,{children:[(0,n.jsx)(A,{color:"#bc8cff",children:(0,n.jsx)(g.A,{size:16})}),(0,n.jsx)(v,{children:"Signal Footprint"}),a?(0,n.jsx)(j,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(k,{children:[I(e?.footprint,0)," km"]}),(0,n.jsx)(S,{children:"diameter visible from ISS"})]})]}),(0,n.jsxs)($,{children:[(0,n.jsx)(A,{color:"#ff7b72",children:(0,n.jsx)(u.A,{size:16})}),(0,n.jsx)(v,{children:"Sun Visibility"}),a?(0,n.jsx)(j,{}):e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k,{children:(0,n.jsx)(C,{vis:e.visibility,children:e.visibility.charAt(0).toUpperCase()+e.visibility.slice(1)})}),(0,n.jsxs)(S,{children:["Solar lat ",I(e.solar_lat,1),"\xb0 \xb7 lon ",I(e.solar_lon,1),"\xb0"]})]}):(0,n.jsx)(k,{children:"—"})]}),(0,n.jsxs)($,{children:[(0,n.jsx)(A,{color:"#39d353",children:(0,n.jsx)(s.A,{size:16})}),(0,n.jsx)(v,{children:"Orbit Period"}),(0,n.jsx)(k,{children:"92.68 min"}),(0,n.jsx)(S,{children:"15.5 orbits per day"})]})]}),(0,n.jsx)(E,{children:"In Orbit Right Now"}),(0,n.jsxs)(M,{children:[(0,n.jsxs)(T,{children:[(0,n.jsx)(B,{children:"Tracked Objects"}),(0,n.jsx)(P,{children:"~27,000+"})]}),(0,n.jsxs)(T,{children:[(0,n.jsx)(B,{children:"Active Satellites"}),(0,n.jsx)(P,{children:"~9,000+"})]}),(0,n.jsxs)(T,{children:[(0,n.jsx)(B,{children:"ISS Inclination"}),(0,n.jsx)(P,{children:"51.64\xb0"})]}),(0,n.jsxs)(T,{children:[(0,n.jsx)(B,{children:"ISS Mass"}),(0,n.jsx)(P,{children:"~420,000 kg"})]}),(0,n.jsxs)(T,{children:[(0,n.jsx)(B,{children:"ISS Size"}),(0,n.jsx)(P,{children:"109 \xd7 73 m"})]}),(0,n.jsxs)(T,{children:[(0,n.jsx)(B,{children:"LEO Range"}),(0,n.jsx)(P,{children:"160–2,000 km"})]}),(0,n.jsxs)(T,{children:[(0,n.jsx)(B,{children:"Orbital Velocity"}),(0,n.jsx)(P,{children:"~7.66 km/s"})]}),(0,n.jsxs)(T,{children:[(0,n.jsx)(B,{children:"ISS Crew"}),(0,n.jsx)(P,{children:"~7 people"})]})]})]})}},9522(e,a,o){o.d(a,{Ey:()=>g,IT:()=>c,mJ:()=>l,so:()=>r,wB:()=>u});var n=o(7991),t=o(8294),i=o(5881);function r(e=5e3){let{data:a,loading:o,failed:n,refresh:i}=(0,t.useIssPosition)({refreshMs:e});return{data:a,loading:o,error:n?"Fetch failed":null,refresh:i}}function l(){let[e,a]=(0,n.useState)(null),[o,t]=(0,n.useState)("pending");return(0,n.useEffect)(()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{a({lat:e.coords.latitude,lon:e.coords.longitude}),t("granted")},()=>t("denied"),{timeout:8e3}):t("denied")},[]),{location:e,status:o}}let s=[{norad:25544,name:"ISS",category:"station"},{norad:48274,name:"Tiangong",category:"station"},{norad:25994,name:"Terra",category:"observation"},{norad:27424,name:"Aqua",category:"observation"},{norad:49260,name:"Landsat-9",category:"observation"},{norad:43873,name:"GPS III-1",category:"navigation"},{norad:45854,name:"GPS III-4",category:"navigation"},{norad:40534,name:"GPS IIF-10",category:"navigation"},{norad:44713,name:"Starlink-24",category:"communications"},{norad:44914,name:"Starlink-60",category:"communications"},{norad:45178,name:"Starlink-100",category:"communications"},{norad:20580,name:"Hubble",category:"scientific"},{norad:37820,name:"Suomi NPP",category:"scientific"},{norad:41866,name:"GOES-16",category:"weather"},{norad:44914,name:"GOES-18",category:"weather"}],c={station:"#ffd700",observation:"#58a6ff",navigation:"#3fb950",communications:"#e3b341",scientific:"#bc8cff",weather:"#79c0ff"},d=new Map;function m(e,a,o){try{let n=(0,i.jl)(e,a),t=(0,i.gv)(n,o);if(!t.position||"boolean"==typeof t.position)return null;let r=(0,i.Y0)(o),l=(0,i.$6)(t.position,r);return{latitude:(0,i.Zr)(l.latitude),longitude:(0,i.yy)(l.longitude),altitude:l.height}}catch{return null}}function g(e=5e3){let[a,o]=(0,n.useState)([]),i=(0,n.useCallback)(async()=>{let e=await Promise.allSettled(s.map(async(e,a)=>(await new Promise(e=>setTimeout(e,120*a)),(0,t.fetchCachedTle)(e.norad)))),a=new Date,n=[];e.forEach((e,o)=>{if("fulfilled"!==e.status||!e.value)return;let{line1:t,line2:i}=e.value;d.set(s[o].norad,{line1:t,line2:i});let r=m(t,i,a);if(r){let e=s[o];n.push({norad:e.norad,name:e.name,category:e.category,...r})}}),n.length>0&&o(n)},[]);return(0,n.useEffect)(()=>{i();let e=setInterval(i,36e5);return()=>clearInterval(e)},[i]),(0,n.useEffect)(()=>{let a=setInterval(()=>{let e=new Date,a=[];s.forEach(o=>{let n=d.get(o.norad);if(!n)return;let t=m(n.line1,n.line2,e);t&&a.push({norad:o.norad,name:o.name,category:o.category,...t})}),a.length>0&&o(a)},e);return()=>clearInterval(a)},[e]),a}function u(e=60){let a=(0,n.useRef)([]),[o,t]=(0,n.useState)([]);return{trail:o,addPoint:(0,n.useCallback)((o,n)=>{a.current=[...a.current,[o,n]].slice(-e),t([...a.current])},[e])}}},8859(e,a,o){o.d(a,{FlyoutPanel:()=>b});var n=o(5723),t=o(7991),i=o.n(t),r=o(6859),l=o.n(r),s=o(2799),c=o(255),d=o(1316),m=o(814),g=o(6140);let u=(0,s.keyframes)`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,p=l().div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${d.w4.colors.surfaceRaised};
  border: 1px solid ${d.w4.colors.accentMuted};
  border-radius: ${d.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${d.w4.colors.borderSubtle},
    0 16px 48px rgba(0, 0, 0, 0.55);
  min-width: 210px;
  overflow-y: auto;
  animation: ${u} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
    background: ${d.w4.colors.accent};
    opacity: 0.4;
  }
`,f=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${d.w4.colors.accent};
  border-bottom: 1px solid ${d.w4.colors.borderSubtle};
  font-family: ${d.w4.typography.fontFamily};
`,h=l().button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?d.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?d.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?d.w4.colors.accent:d.w4.colors.sidebarText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${d.w4.colors.accentMuted};
    color: ${d.w4.colors.mainText};
  }
`;function x({iconKey:e}){let a=e?g.t[e]??c.A:c.A;return(0,n.jsx)(a,{size:14,strokeWidth:1.75})}function y({entries:e,activeId:a,onSelect:o}){return(0,n.jsx)(n.Fragment,{children:e.map(e=>e.children?(0,n.jsx)(i().Fragment,{children:(0,n.jsx)(y,{entries:e.children,activeId:a,onSelect:o})},e.id):(0,n.jsxs)(h,{active:a===e.id,onClick:()=>o(e),children:[(0,n.jsx)(x,{iconKey:e.icon}),e.name]},e.id))})}function b({activeId:e}){let{flyout:a,scheduleFlyoutClose:o,cancelFlyoutClose:t}=(0,m.c)();if(!a)return null;let i=a.entry.icon?g.t[a.entry.icon]??c.A:c.A;return(0,n.jsxs)(p,{anchorY:a.anchorY,onMouseEnter:t,onMouseLeave:o,children:[(0,n.jsxs)(f,{children:[(0,n.jsx)(i,{size:13,strokeWidth:2}),a.entry.name]}),(0,n.jsx)(y,{entries:a.entry.children??[],activeId:e,onSelect:e=>{a.onSelect(e),o()}})]})}},814(e,a,o){o.d(a,{I:()=>t,c:()=>i});var n=o(7991);let t=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,n.useContext)(t)},6140(e,a,o){o.d(a,{t:()=>ey});var n=o(6896),t=o(7902),i=o(3013),r=o(2887),l=o(9510),s=o(9848),c=o(7901),d=o(3045),m=o(3775),g=o(1783),u=o(3539),p=o(9416),f=o(1837),h=o(7167),x=o(4494),y=o(2314),b=o(255),w=o(5751),z=o(9633),$=o(2946),A=o(822),v=o(6720),k=o(7400),S=o(8456),j=o(3317),M=o(2709),T=o(8006),B=o(9301),P=o(7561),E=o(3517),C=o(8207),I=o(7032),F=o(6949),L=o(8218),R=o(6829),G=o(9591),D=o(5553),N=o(9923),K=o(2820),H=o(4621),O=o(8479),V=o(2534),_=o(6673),W=o(7490),Y=o(9033),U=o(9038),Z=o(5775),J=o(1365),q=o(2937),X=o(9821),Q=o(5912),ee=o(158),ea=o(8641),eo=o(8607),en=o(3249),et=o(1821),ei=o(5889),er=o(9655),el=o(7170),es=o(9161),ec=o(1849),ed=o(1604),em=o(3142),eg=o(1187),eu=o(7747),ep=o(2932),ef=o(4525),eh=o(7230),ex=o(2164);let ey={activity:n.A,"a-large-small":t.A,apple:i.A,"arrow-right":r.A,"bar-chart-2":l.A,book:s.A,"book-open":c.A,briefcase:d.A,calendar:m.A,clock:g.A,"circle-dot":u.A,cloud:p.A,compass:f.A,cpu:h.A,droplets:x.A,feather:y.A,file:b.A,"file-text":w.A,folder:z.A,"git-branch":$.A,github:A.A,globe:v.A,grid:k.A,hand:S.A,hash:j.A,heart:M.A,key:T.A,hexagon:B.A,home:P.A,landmark:E.A,layers:C.A,"layout-grid":I.A,leaf:F.A,lightbulb:L.A,list:R.A,map:G.A,"map-pin":D.A,"message-circle":N.A,"message-square":K.A,minus:H.A,monitor:O.A,mountain:V.A,package:_.A,palette:W.A,"pen-tool":Y.A,"pie-chart":U.A,plane:Z.A,plus:J.A,ruler:q.A,shirt:X.A,slash:Q.A,square:ee.A,star:ea.A,sun:eo.A,terminal:en.A,thermometer:et.A,triangle:ei.A,trophy:er.A,truck:el.A,type:es.A,users:ec.A,"volume-2":ed.A,watch:em.A,waves:eg.A,wind:eu.A,wrench:ep.A,x:ef.A,zap:eh.A,bot:ex.A}},3930(e,a,o){o.d(a,{wi:()=>q,PH:()=>Q,NI:()=>J,KW:()=>X,w4:()=>n.w4});var n=o(1316),t=o(5723),i=o(7991),r=o.n(i),l=o(6859),s=o.n(l);s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${n.w4.spacing.sm};
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,s().div`
  position: relative;
`;var c=o(2799),d=o(3661),m=o(814);let g="260px",u="56px",p="48px",f=s().header`
  display: flex;
  align-items: center;
  height: calc(${p} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);

  /* Mobile: logo + app label on row 1, scrollable chrome cluster on row 2. */
  @media (max-width: ${n.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(${p} + env(safe-area-inset-top, 0px));
  }
`,h=s().div`
  width: ${u};
  min-width: ${u};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${n.w4.breakpoints.md}) {
    display: none;
  }
`,x=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,y=(0,c.keyframes)`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,b=s().button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${n.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${n.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,w=s().span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${y} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`
    background: linear-gradient(135deg, ${n.w4.colors.accent}, ${n.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`,z=s().div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  padding-left: ${n.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 0;

  &::before {
    content: '/';
    margin-right: ${n.w4.spacing.sm};
    color: ${n.w4.colors.border};
  }
`,$=s().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${n.w4.spacing.md};
  padding: 0 ${n.w4.spacing.lg};
  min-width: 0;

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${n.w4.spacing.sm};
  }

  /* Full-width second row on mobile, horizontally scrollable.
     Align to the right so the avatar / bell stay flush with the
     viewport edge — matches desktop end-alignment. */
  @media (max-width: ${n.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    justify-content: flex-end;
    padding: ${n.w4.spacing.xs} ${n.w4.spacing.sm};
    gap: ${n.w4.spacing.xs};
    border-top: 1px solid ${n.w4.colors.sidebarBorder};
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }

    > section + section,
    > *:not(section) + section {
      margin-left: 0;
    }
  }
`,A=s().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,v=s().div`
  display: flex;
  flex-direction: column;
  height: ${n.w4.sizes.fullHeight};
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,k=s().aside`
  width: ${({collapsed:e})=>e?u:g};
  min-width: ${({collapsed:e})=>e?u:g};
  background: ${n.w4.colors.sidebarBg};
  border-right: 1px solid ${n.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${n.w4.breakpoints.md}) {
    display: none;
  }
`,S=s().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,j=s().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,M=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function T(){return(0,t.jsx)(b,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:M.map((e,a)=>(0,t.jsx)(w,{index:a,accent:e.accent,children:e.char},a))})}let B="atlantis:sidebar-collapsed";function P({sidebar:e,children:a,topBarRight:n,title:l="Atlantis",activeId:s=null}){let[c,g]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem(B)}catch{return!1}}),[u,p]=(0,i.useState)(null),y=(0,i.useRef)(),b=()=>g(e=>{let a=!e;try{localStorage.setItem(B,String(a))}catch{}return a}),w=r().useMemo(()=>r().lazy(()=>Promise.resolve().then(o.bind(o,8859)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,t.jsx)(m.I.Provider,{value:{collapsed:c,toggle:b,flyout:u,openFlyout:(e,a,o)=>{clearTimeout(y.current),p({entry:e,anchorY:a,onSelect:o})},scheduleFlyoutClose:()=>{y.current=setTimeout(()=>p(null),160)},cancelFlyoutClose:()=>clearTimeout(y.current)},children:(0,t.jsxs)(v,{children:[(0,t.jsxs)(f,{children:[e&&(0,t.jsx)(h,{children:(0,t.jsx)(x,{onClick:b,title:c?"Expand sidebar":"Collapse sidebar",children:(0,t.jsx)(d.A,{size:17})})}),(0,t.jsx)(T,{}),l&&(0,t.jsx)(z,{children:l}),n&&(0,t.jsx)($,{children:n})]}),(0,t.jsxs)(A,{children:[null!=e&&(0,t.jsx)(k,{collapsed:c,children:(0,t.jsx)(S,{children:e})}),(0,t.jsx)(j,{children:a})]}),u&&(0,t.jsx)(r().Suspense,{fallback:null,children:(0,t.jsx)(w,{activeId:s})})]})})}var E=o(255),C=o(9753),I=o(6140);let F=s().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,L=s().div`
  overflow: hidden;
`,R=s().div`
  padding-left: ${n.w4.spacing.md};
`,G=s().div`
  display: flex;
  flex-direction: column;
`,D=s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${n.w4.spacing.sm} ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":n.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${n.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${n.w4.colors.sidebarText};
    background: ${n.w4.colors.sidebarHover};
  }
`,N=s().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,K=s().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,H=s().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${n.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,O=s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?n.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?n.w4.colors.sidebarActive:n.w4.colors.sidebarText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${n.w4.borderRadius.md} ${n.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.mainText};
  }
`;function V({iconKey:e,size:a=16}){if(e&&!(e in I.t))return(0,t.jsx)("span",{style:{fontSize:a,lineHeight:1,display:"flex",alignItems:"center"},children:e});let o=e?I.t[e]??E.A:E.A;return(0,t.jsx)(o,{size:a,strokeWidth:1.75})}function _({entry:e,activeId:a,onSelect:o}){let[n,r]=(0,i.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:c,cancelFlyoutClose:d}=(0,m.c)();return e.children&&e.children.length>0?(0,t.jsxs)(G,{children:[(0,t.jsxs)(D,{collapsed:l,onClick:()=>{l||r(e=>!e)},onMouseEnter:l?a=>{s(e,a.currentTarget.getBoundingClientRect().top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,t.jsxs)(N,{collapsed:l,children:[(0,t.jsx)(V,{iconKey:e.icon,size:16}),(0,t.jsx)(K,{collapsed:l,children:e.name})]}),(0,t.jsx)(H,{open:n,collapsed:l,children:(0,t.jsx)(C.A,{size:13})})]}),(0,t.jsx)(F,{open:n&&!l,children:(0,t.jsx)(L,{children:(0,t.jsx)(R,{children:e.children.map(e=>(0,t.jsx)(_,{entry:e,activeId:a,onSelect:o},e.id))})})})]}):(0,t.jsxs)(O,{active:a===e.id,collapsed:l,onClick:()=>o(e),onMouseEnter:l?a=>{let n=a.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},n.top,o)}:void 0,onMouseLeave:l?c:void 0,children:[(0,t.jsx)(V,{iconKey:e.icon,size:15}),(0,t.jsx)(K,{collapsed:l,children:e.name})]})}function W({entries:e,activeId:a,onSelect:o}){return(0,t.jsx)("div",{children:e.map(e=>(0,t.jsx)(_,{entry:e,activeId:a,onSelect:o},e.id))})}let Y=(0,c.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;s().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${Y} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${n.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${n.w4.colors.surface};
  }
`,s().span`
  display: block;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${n.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${n.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${n.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${n.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,o(8859),s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  color: ${n.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.accent};
    border-color: ${n.w4.colors.accent};
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
`,[{id:"europe",name:"Europe",icon:"\uD83C\uDF0D",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"lourinha",name:"Lourinh\xe3",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"\uD83C\uDDEC\uD83C\uDDE7",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"\uD83C\uDDEB\uD83C\uDDF7",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"\uD83C\uDDE9\uD83C\uDDEA",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"\uD83C\uDDEA\uD83C\uDDF8",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"\uD83C\uDDEE\uD83C\uDDF9",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"\uD83C\uDDF3\uD83C\uDDF1",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"\uD83C\uDDEC\uD83C\uDDF7",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"\uD83C\uDDE7\uD83C\uDDEA",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"\uD83C\uDDE6\uD83C\uDDF9",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"\uD83C\uDDF5\uD83C\uDDF1",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"\uD83C\uDDF8\uD83C\uDDEA",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"\uD83C\uDDF3\uD83C\uDDF4",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"\uD83C\uDDE9\uD83C\uDDF0",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"\uD83C\uDDEB\uD83C\uDDEE",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"\uD83C\uDDEE\uD83C\uDDF8",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"\uD83C\uDDEE\uD83C\uDDEA",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"\uD83C\uDDE8\uD83C\uDDED",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"\uD83C\uDDFA\uD83C\uDDE6",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"\uD83C\uDDF7\uD83C\uDDFA",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"\uD83C\uDDF7\uD83C\uDDF4",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"\uD83C\uDDED\uD83C\uDDFA",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"\uD83C\uDDE8\uD83C\uDDFF",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"\uD83C\uDDF8\uD83C\uDDF0",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"\uD83C\uDDF8\uD83C\uDDEE",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"\uD83C\uDDED\uD83C\uDDF7",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"\uD83C\uDDF7\uD83C\uDDF8",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"\uD83C\uDDE7\uD83C\uDDE6",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"\uD83C\uDDE7\uD83C\uDDEC",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"\uD83C\uDDEA\uD83C\uDDEA",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"\uD83C\uDDF1\uD83C\uDDFB",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"\uD83C\uDDF1\uD83C\uDDF9",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"\uD83C\uDDE7\uD83C\uDDFE",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"\uD83C\uDDF2\uD83C\uDDE9",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"\uD83C\uDDE6\uD83C\uDDF1",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"\uD83C\uDDF2\uD83C\uDDF0",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"\uD83C\uDDF2\uD83C\uDDEA",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"\uD83C\uDDE8\uD83C\uDDFE",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"\uD83C\uDDF2\uD83C\uDDF9",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"\uD83C\uDDF1\uD83C\uDDFA",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"\uD83C\uDDE6\uD83C\uDDE9",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"\uD83C\uDDF2\uD83C\uDDE8",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"\uD83C\uDDF8\uD83C\uDDF2",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"\uD83C\uDDF1\uD83C\uDDEE",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"\uD83C\uDDFB\uD83C\uDDE6",zoom:15}]},{id:"americas",name:"Americas",icon:"\uD83C\uDF0E",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"\uD83C\uDDE8\uD83C\uDDE6",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"\uD83C\uDDF2\uD83C\uDDFD",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"\uD83C\uDDE7\uD83C\uDDFF",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"\uD83C\uDDEC\uD83C\uDDF9",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"\uD83C\uDDF8\uD83C\uDDFB",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"\uD83C\uDDED\uD83C\uDDF3",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"\uD83C\uDDF3\uD83C\uDDEE",zoom:12},{id:"san-jose-cr",name:"San Jos\xe9",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"\uD83C\uDDE8\uD83C\uDDF7",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"\uD83C\uDDF5\uD83C\uDDE6",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"\uD83C\uDDE8\uD83C\uDDFA",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"\uD83C\uDDE7\uD83C\uDDF8",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"\uD83C\uDDEF\uD83C\uDDF2",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"\uD83C\uDDED\uD83C\uDDF9",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"\uD83C\uDDE9\uD83C\uDDF4",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"\uD83C\uDDF0\uD83C\uDDF3",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"\uD83C\uDDF1\uD83C\uDDE8",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"\uD83C\uDDFB\uD83C\uDDE8",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"\uD83C\uDDE7\uD83C\uDDE7",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"\uD83C\uDDE6\uD83C\uDDEC",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"\uD83C\uDDE9\uD83C\uDDF2",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"\uD83C\uDDEC\uD83C\uDDE9",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"\uD83C\uDDF9\uD83C\uDDF9",zoom:12},{id:"bogota",name:"Bogot\xe1",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"\uD83C\uDDE8\uD83C\uDDF4",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"\uD83C\uDDFB\uD83C\uDDEA",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"\uD83C\uDDEC\uD83C\uDDFE",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"\uD83C\uDDF8\uD83C\uDDF7",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"\uD83C\uDDEA\uD83C\uDDE8",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"\uD83C\uDDF5\uD83C\uDDEA",zoom:12},{id:"sao-paulo",name:"S\xe3o Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"\uD83C\uDDE7\uD83C\uDDF7",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"\uD83C\uDDE7\uD83C\uDDF4",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"\uD83C\uDDE8\uD83C\uDDF1",zoom:12},{id:"asuncion",name:"Asunci\xf3n",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"\uD83C\uDDF5\uD83C\uDDFE",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"\uD83C\uDDE6\uD83C\uDDF7",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"\uD83C\uDDFA\uD83C\uDDFE",zoom:12}]},{id:"africa",name:"Africa",icon:"\uD83C\uDF0D",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"\uD83C\uDDF2\uD83C\uDDE6",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"\uD83C\uDDE9\uD83C\uDDFF",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"\uD83C\uDDF9\uD83C\uDDF3",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"\uD83C\uDDF1\uD83C\uDDFE",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"\uD83C\uDDEA\uD83C\uDDEC",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"\uD83C\uDDF8\uD83C\uDDE9",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"\uD83C\uDDF8\uD83C\uDDF3",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"\uD83C\uDDEC\uD83C\uDDF2",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"\uD83C\uDDEC\uD83C\uDDFC",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"\uD83C\uDDEC\uD83C\uDDF3",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"\uD83C\uDDF8\uD83C\uDDF1",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"\uD83C\uDDF1\uD83C\uDDF7",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"\uD83C\uDDE8\uD83C\uDDEE",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"\uD83C\uDDEC\uD83C\uDDED",zoom:12},{id:"lome",name:"Lom\xe9",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"\uD83C\uDDF9\uD83C\uDDEC",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"\uD83C\uDDE7\uD83C\uDDEF",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"\uD83C\uDDF3\uD83C\uDDEC",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"\uD83C\uDDF3\uD83C\uDDEA",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"\uD83C\uDDF2\uD83C\uDDF1",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"\uD83C\uDDE7\uD83C\uDDEB",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"\uD83C\uDDF2\uD83C\uDDF7",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"\uD83C\uDDE8\uD83C\uDDFB",zoom:13},{id:"yaounde",name:"Yaound\xe9",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"\uD83C\uDDE8\uD83C\uDDF2",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"\uD83C\uDDF9\uD83C\uDDE9",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"\uD83C\uDDE8\uD83C\uDDEB",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"\uD83C\uDDEC\uD83C\uDDF6",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"\uD83C\uDDEC\uD83C\uDDE6",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"\uD83C\uDDE8\uD83C\uDDEC",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"\uD83C\uDDE8\uD83C\uDDE9",zoom:12},{id:"sao-tome",name:"S\xe3o Tom\xe9",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"\uD83C\uDDF8\uD83C\uDDF9",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"\uD83C\uDDF8\uD83C\uDDF8",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"\uD83C\uDDEA\uD83C\uDDF9",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"\uD83C\uDDEA\uD83C\uDDF7",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"\uD83C\uDDE9\uD83C\uDDEF",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"\uD83C\uDDF8\uD83C\uDDF4",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"\uD83C\uDDF0\uD83C\uDDEA",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"\uD83C\uDDFA\uD83C\uDDEC",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"\uD83C\uDDF7\uD83C\uDDFC",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"\uD83C\uDDE7\uD83C\uDDEE",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"\uD83C\uDDF9\uD83C\uDDFF",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"\uD83C\uDDF2\uD83C\uDDEC",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"\uD83C\uDDF0\uD83C\uDDF2",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"\uD83C\uDDF2\uD83C\uDDFA",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"\uD83C\uDDF8\uD83C\uDDE8",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"\uD83C\uDDE6\uD83C\uDDF4",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"\uD83C\uDDFF\uD83C\uDDF2",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"\uD83C\uDDF2\uD83C\uDDFC",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"\uD83C\uDDF2\uD83C\uDDFF",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"\uD83C\uDDFF\uD83C\uDDFC",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"\uD83C\uDDE7\uD83C\uDDFC",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"\uD83C\uDDF3\uD83C\uDDE6",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"\uD83C\uDDFF\uD83C\uDDE6",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"\uD83C\uDDF8\uD83C\uDDFF",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"\uD83C\uDDF1\uD83C\uDDF8",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"\uD83D\uDD4C",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"\uD83C\uDDF8\uD83C\uDDE6",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"\uD83C\uDDE6\uD83C\uDDEA",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"\uD83C\uDDF6\uD83C\uDDE6",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"\uD83C\uDDE7\uD83C\uDDED",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"\uD83C\uDDF0\uD83C\uDDFC",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"\uD83C\uDDF4\uD83C\uDDF2",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"\uD83C\uDDFE\uD83C\uDDEA",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"\uD83C\uDDEE\uD83C\uDDF6",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"\uD83C\uDDEE\uD83C\uDDF7",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"\uD83C\uDDF9\uD83C\uDDF7",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"\uD83C\uDDF1\uD83C\uDDE7",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"\uD83C\uDDF8\uD83C\uDDFE",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"\uD83C\uDDEF\uD83C\uDDF4",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"\uD83C\uDDEE\uD83C\uDDF1",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"\uD83C\uDDF5\uD83C\uDDF8",zoom:13}]},{id:"asia",name:"Asia",icon:"\uD83C\uDF0F",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"\uD83C\uDDE6\uD83C\uDDEB",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"\uD83C\uDDF0\uD83C\uDDFF",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"\uD83C\uDDF0\uD83C\uDDEC",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"\uD83C\uDDFA\uD83C\uDDFF",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"\uD83C\uDDF9\uD83C\uDDEF",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"\uD83C\uDDF9\uD83C\uDDF2",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"\uD83C\uDDE6\uD83C\uDDF2",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"\uD83C\uDDE6\uD83C\uDDFF",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"\uD83C\uDDEC\uD83C\uDDEA",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"\uD83C\uDDF5\uD83C\uDDF0",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"\uD83C\uDDF3\uD83C\uDDF5",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"\uD83C\uDDE7\uD83C\uDDE9",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"\uD83C\uDDF1\uD83C\uDDF0",zoom:12},{id:"male",name:"Mal\xe9",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"\uD83C\uDDF2\uD83C\uDDFB",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"\uD83C\uDDE8\uD83C\uDDF3",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"\uD83C\uDDEF\uD83C\uDDF5",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"\uD83C\uDDF0\uD83C\uDDF7",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"\uD83C\uDDF0\uD83C\uDDF5",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"\uD83C\uDDF2\uD83C\uDDF3",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"\uD83C\uDDF9\uD83C\uDDED",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"\uD83C\uDDFB\uD83C\uDDF3",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"\uD83C\uDDF0\uD83C\uDDED",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"\uD83C\uDDF1\uD83C\uDDE6",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"\uD83C\uDDF2\uD83C\uDDF2",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"\uD83C\uDDF2\uD83C\uDDFE",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"\uD83C\uDDF8\uD83C\uDDEC",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"\uD83C\uDDEE\uD83C\uDDE9",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"\uD83C\uDDF5\uD83C\uDDED",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"\uD83C\uDDE7\uD83C\uDDF3",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"\uD83C\uDDF9\uD83C\uDDF1",zoom:13}]},{id:"oceania",name:"Oceania",icon:"\uD83C\uDF0A",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"\uD83C\uDDE6\uD83C\uDDFA",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"\uD83C\uDDF3\uD83C\uDDFF",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"\uD83C\uDDF5\uD83C\uDDEC",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"\uD83C\uDDEB\uD83C\uDDEF",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"\uD83C\uDDF8\uD83C\uDDE7",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"\uD83C\uDDFB\uD83C\uDDFA",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"\uD83C\uDDF9\uD83C\uDDF4",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"\uD83C\uDDFC\uD83C\uDDF8",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"\uD83C\uDDF9\uD83C\uDDFB",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"\uD83C\uDDF0\uD83C\uDDEE",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"\uD83C\uDDF2\uD83C\uDDED",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"\uD83C\uDDEB\uD83C\uDDF2",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"\uD83C\uDDF5\uD83C\uDDFC",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"\uD83C\uDDF3\uD83C\uDDF7",zoom:14}]}].flatMap(e=>e.places),o(1310),s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,s().div`
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,s().div`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
`,s().input`
  width: 100%;
  padding: 8px 12px;
  background: ${n.w4.colors.mainBg};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${n.w4.colors.accent}; }
  &::placeholder { color: ${n.w4.colors.sidebarTextMuted}; }
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,s().button`
  padding: 7px 18px;
  border-radius: ${n.w4.borderRadius.md};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:a})=>a?"rgba(248,81,73,0.12)":e?n.w4.colors.accent:"none"};
  color: ${({primary:e,danger:a})=>a?n.w4.colors.danger:e?"#fff":n.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:a})=>a?n.w4.colors.danger:e?n.w4.colors.accent:n.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,s().div`
  height: 1px;
  background: ${n.w4.colors.border};
  margin: 0 -4px;
`,s().div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`;let U=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Z=(0,c.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`;function J({title:e,sections:a,topBarRight:o,children:n}){let[r,l]=(0,i.useState)(null),s=(0,i.useCallback)(e=>{l(e.id),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth",block:"start"})},[]),c=(0,t.jsx)(W,{entries:a,activeId:r,onSelect:s});return(0,t.jsx)(P,{title:e,sidebar:c,activeId:r,topBarRight:o,children:n})}s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${n.w4.spacing.md};
  animation: ${U} 0.15s ease both;
`,s().div`
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?n.w4.colors.danger+"55":n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${n.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${Z} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,s().div`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?n.w4.colors.danger:n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
`,s().div`
  font-size: ${n.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${n.w4.spacing.sm};
`,s().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${n.w4.transitions.fast},
    border-color ${n.w4.transitions.fast},
    color ${n.w4.transitions.fast},
    opacity ${n.w4.transitions.fast};

  background: ${({primary:e,danger:a})=>a?n.w4.colors.danger:e?n.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:a})=>a||e?"#fff":n.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:a})=>a?n.w4.colors.danger:e?n.w4.colors.accent:n.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${n.w4.focusRing} }
`,s().div`
  position: relative;
`,s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    border-color: ${n.w4.colors.accent};
  }
`,s().div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,s().div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,s().div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,s().div`
  padding: 16px 14px;
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-style: italic;
`,s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
  }
`,s().button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,s().div`
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,s().div`
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  margin-top: 1px;
`,s().button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${n.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`;let q=s().div`
  padding: ${n.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,X=s().section`
  scroll-margin-top: ${n.w4.spacing.lg};
`,Q=s().div`
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.lg};
`;s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${n.w4.spacing.xl};

  @media (max-width: ${n.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,s().div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,s().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${n.w4.colors.sidebarBg};
  border-bottom: 1px solid ${n.w4.colors.sidebarBorder};
  padding-left: max(${n.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${n.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${n.w4.spacing.sm};
  z-index: 100;
`,s().button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${n.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${n.w4.colors.accent}; }
`,s().span`
  color: ${n.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,s().div`
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,s().span`
  font-weight: 400;
  color: ${n.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,s().div`
  flex: 1;
`;let ee=(0,c.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ea=(0,c.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,eo=(0,c.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  animation: ${ee} 0.4s ease 0.15s both;
`,s().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,s().div`
  position: absolute;
  inset: 0;
  animation: ${ea} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
`,s().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${n.w4.colors.border};
  animation: ${eo} 1.4s ease-in-out infinite;
`,s().span`
  color: ${n.w4.colors.mainTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`},1316(e,a,o){o.d(a,{w4:()=>i});let n={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},t="--at-",i={colors:function(){let e={};for(let a of Object.keys(n))e[a]=`var(${t}${a})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${t}suiteLab)`,vida:`var(${t}suiteVida)`,learn:`var(${t}suiteLearn)`,games:`var(${t}suiteGames)`,ent:`var(${t}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",xl:"0 40px 120px var(--at-shadowStrong), 0 8px 24px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:`
    outline: 2px solid var(--at-accent);
    outline-offset: 2px;
  `}}}]);