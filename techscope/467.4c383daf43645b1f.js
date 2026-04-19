"use strict";(self.webpackChunk_atlantis_techscope=self.webpackChunk_atlantis_techscope||[]).push([["467"],{5748(e,o,a){a.d(o,{W:()=>oZ});var n=a(5723),t=a(5726),i=a(7991),r=a.n(i),l=a(6859),s=a.n(l),d=a(8641),c=a(9522),p=a(2799),m=a(5569),g=a(9421),f=a(8170);let u=(0,p.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,x=(0,p.keyframes)`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,h=s().div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  margin-bottom: ${t.w4.spacing.lg};
`,w=s().div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  flex: 1;
`,b=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  animation: ${u} 2.4s ease-in-out infinite;
`,y=s().h2`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: -0.02em;
`,$=s().span`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
`,z=s().span`
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${t.w4.colors.mainTextMuted};
  cursor: default;
  flex-shrink: 0;

  &:hover > span {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
`,v=s().span`
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  padding: 6px 10px;
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainText};
  width: 500px;
  white-space: normal;
  line-height: 1.4;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  transition: opacity ${t.w4.transitions.fast}, transform ${t.w4.transitions.fast};
`,j=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.borderSubtle};
  border-radius: ${t.w4.borderRadius.sm};
  color: ${t.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color ${t.w4.transitions.base}, border-color ${t.w4.transitions.base}, background ${t.w4.transitions.base}, box-shadow ${t.w4.transitions.base};
  flex-shrink: 0;

  svg {
    animation: ${({spinning:e})=>e?x:"none"} 0.7s linear infinite;
  }

  &:hover {
    color: ${t.w4.colors.mainText};
    border-color: ${t.w4.colors.accent};
    background: ${t.w4.colors.surfaceRaised};
    box-shadow: 0 0 10px ${t.w4.colors.accentMuted};
  }
`;function k({title:e,color:o,description:a,lastUpdated:t,loading:i,onRefresh:r,t:l}){let s,d=t?l?(0,f.lw)(t,l):(s=Math.floor((Date.now()-t.getTime())/6e4))<1?"just now":s<60?`${s}m ago`:`${Math.floor(s/60)}h ago`:null,c=d?l?l("updated",{age:d}):`updated ${d}`:null;return(0,n.jsxs)(h,{children:[(0,n.jsxs)(w,{children:[(0,n.jsx)(b,{color:o}),(0,n.jsx)(y,{children:e}),a&&(0,n.jsxs)(z,{children:[(0,n.jsx)(m.A,{size:13}),(0,n.jsx)(v,{children:a})]})]}),c&&(0,n.jsx)($,{children:c}),(0,n.jsx)(j,{spinning:i,onClick:r,title:l?l("refresh"):"Refresh",children:(0,n.jsx)(g.A,{size:13})})]})}let A="#3fb950",S={TypeScript:"#3178c6",JavaScript:"#f1e05a",Python:"#3572A5",Go:"#00ADD8",Rust:"#dea584",Java:"#b07219","C++":"#f34b7d","C#":"#178600",Ruby:"#701516",Swift:"#F05138",Kotlin:"#A97BFF",Shell:"#89e051",HTML:"#e34c26",CSS:"#563d7c",Dart:"#00B4AB",Zig:"#ec915c",Nix:"#7e7eff",Lua:"#000080","Jupyter Notebook":"#DA5B0B"},M=s().div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${t.w4.spacing.md};

  @media (max-width: ${t.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${t.w4.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
  }
`,T=s().a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${t.w4.spacing.md};
  background: linear-gradient(168deg, ${A}0f 0%, ${t.w4.colors.surface} 44%, ${t.w4.colors.surface} 100%);
  border: 1px solid ${A}2e;
  border-radius: ${t.w4.borderRadius.md};
  text-decoration: none;
  transition: border-color ${t.w4.transitions.base}, background ${t.w4.transitions.base}, transform ${t.w4.transitions.base}, box-shadow ${t.w4.transitions.base};
  min-height: 120px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${A}, transparent);
    opacity: 0.45;
    transition: opacity ${t.w4.transitions.base};
  }

  &:hover {
    border-color: ${A}66;
    background: linear-gradient(168deg, ${A}1a 0%, ${t.w4.colors.surfaceRaised} 44%, ${t.w4.colors.surfaceRaised} 100%);
    box-shadow: 0 0 18px ${A}24, 0 10px 26px rgba(0, 0, 0, 0.28);
    transform: translateY(-2px);
  }

  &:hover::before {
    opacity: 0.9;
  }
`,B=s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${t.w4.colors.accent};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,P=s().div`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,F=s().div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  margin-top: auto;
`,R=s().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 600;
  color: #d29922;
  font-family: ${t.w4.typography.fontFamilyMono};
`,D=s().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({lang:e})=>S[e]??t.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,C=s().span`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
`,E=s().span`
  flex: 1;
`,L=s().div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function I({t:e}){let o=`https://api.github.com/search/repositories?q=created:>${(0,c.VF)(7)}&sort=stars&order=desc&per_page=8`,{data:a,loading:t,lastUpdated:i,refresh:r}=(0,c.st)(o);return(0,n.jsxs)("div",{children:[(0,n.jsx)(k,{title:e("nav.livePulse"),color:A,lastUpdated:i,loading:t,onRefresh:r,t:e}),a?.items?.length?(0,n.jsx)(M,{children:a.items.map(o=>(0,n.jsxs)(T,{href:o.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(B,{title:o.full_name,children:o.full_name}),(0,n.jsx)(P,{children:o.description??e("noDescription")}),(0,n.jsxs)(F,{children:[o.language&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(D,{lang:o.language}),(0,n.jsx)(C,{children:o.language})]}),(0,n.jsx)(E,{}),(0,n.jsxs)(R,{children:[(0,n.jsx)(d.A,{size:12}),(0,c.Bz)(o.stargazers_count)]})]})]},o.id))}):(0,n.jsx)(L,{children:t?e("livePulse.loading"):e("noData")})]})}var _=a(5046);let N="#bc8cff",H={TypeScript:"#3178c6",JavaScript:"#f1e05a",Python:"#3572A5",Go:"#00ADD8",Rust:"#dea584",Java:"#b07219","C++":"#f34b7d","C#":"#178600",Ruby:"#701516",Swift:"#F05138",Kotlin:"#A97BFF",Shell:"#89e051",HTML:"#e34c26",CSS:"#563d7c",Dart:"#00B4AB",Zig:"#ec915c",Nix:"#7e7eff",Lua:"#000080"},K=s().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${t.w4.spacing.md};

  @media (max-width: ${t.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${t.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,G=s().a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${t.w4.spacing.md};
  background: linear-gradient(168deg, ${N}10 0%, ${t.w4.colors.surface} 44%, ${t.w4.colors.surface} 100%);
  border: 1px solid ${N}2d;
  border-radius: ${t.w4.borderRadius.md};
  text-decoration: none;
  transition: border-color ${t.w4.transitions.base}, background ${t.w4.transitions.base}, transform ${t.w4.transitions.base}, box-shadow ${t.w4.transitions.base};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${N}, transparent);
    opacity: 0.45;
    transition: opacity ${t.w4.transitions.base};
  }

  &:hover {
    border-color: ${N}66;
    background: linear-gradient(168deg, ${N}1c 0%, ${t.w4.colors.surfaceRaised} 44%, ${t.w4.colors.surfaceRaised} 100%);
    box-shadow: 0 0 18px ${N}24, 0 10px 26px rgba(0, 0, 0, 0.28);
    transform: translateY(-2px);
  }

  &:hover::before {
    opacity: 0.9;
  }
`,Y=s().div`
  display: flex;
  align-items: flex-start;
  gap: ${t.w4.spacing.sm};
  justify-content: space-between;
`,V=s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${N};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,O=s().div`
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
  white-space: nowrap;
  flex-shrink: 0;
`,q=s().div`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,W=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,J=s().span`
  font-size: 11px;
  padding: 2px 7px;
  background: rgba(188, 140, 255, 0.12);
  color: ${N};
  border-radius: 20px;
  border: 1px solid rgba(188, 140, 255, 0.25);
`,U=s().div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  margin-top: auto;
`,Z=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
`,X=s()(Z)`
  color: #d29922;
  font-weight: 600;
`,Q=s().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({lang:e})=>H[e]??t.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,ee=s().span`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
`,eo=s().span`
  flex: 1;
`,ea=s().div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function en({t:e}){let o=`https://api.github.com/search/repositories?q=created:>${(0,c.VF)(30)}+stars:50..500+fork:false&sort=stars&order=desc&per_page=8`,{data:a,loading:t,lastUpdated:i,refresh:r}=(0,c.st)(o);return(0,n.jsxs)("div",{children:[(0,n.jsx)(k,{title:e("nav.experimentZone"),color:N,lastUpdated:i,loading:t,onRefresh:r,t:e}),a?.items?.length?(0,n.jsx)(K,{children:a.items.map(o=>(0,n.jsxs)(G,{href:o.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)(Y,{children:[(0,n.jsx)(V,{title:o.full_name,children:o.full_name}),(0,n.jsx)(O,{children:(0,f.aw)(o.created_at,e)})]}),(0,n.jsx)(q,{children:o.description??e("noDescription")}),o.topics.length>0&&(0,n.jsx)(W,{children:o.topics.slice(0,4).map(e=>(0,n.jsx)(J,{children:e},e))}),(0,n.jsxs)(U,{children:[o.language&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Q,{lang:o.language}),(0,n.jsx)(ee,{children:o.language})]}),(0,n.jsx)(eo,{}),(0,n.jsxs)(X,{children:[(0,n.jsx)(d.A,{size:12}),(0,c.Bz)(o.stargazers_count)]}),(0,n.jsxs)(Z,{children:[(0,n.jsx)(_.A,{size:12}),(0,c.Bz)(o.forks_count)]})]})]},o.id))}):(0,n.jsx)(ea,{children:t?e("experiment.loading"):e("noData")})]})}var et=a(4368),ei=a(2820);let er="#d29922",el=s().ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,es=s().li``,ed=s().a`
  display: flex;
  align-items: flex-start;
  gap: ${t.w4.spacing.sm};
  padding: 8px ${t.w4.spacing.sm};
  border: 1px solid ${er}18;
  border-radius: ${t.w4.borderRadius.sm};
  background: linear-gradient(165deg, ${er}0a 0%, ${t.w4.colors.surface} 58%, ${t.w4.colors.surface} 100%);
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: linear-gradient(165deg, ${er}14 0%, ${t.w4.colors.surfaceRaised} 58%, ${t.w4.colors.surfaceRaised} 100%);
    border-color: ${er}5a;
    transform: translateX(2px);
  }
`,ec=s().span`
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 700;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
  min-width: 20px;
  text-align: right;
  flex-shrink: 0;
  padding-top: 1px;
`,ep=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`,em=s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  line-height: 1.4;
`,eg=s().div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  font-size: 12px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
`,ef=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${er};
  font-weight: 600;
`,eu=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
`,ex=s().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,eh=s().div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function ew({t:e}){let{data:o,loading:a,lastUpdated:t,refresh:i}=(0,c.st)("https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=12"),r=o?.hits??[];return(0,n.jsxs)("div",{children:[(0,n.jsx)(k,{title:e("nav.todayInTech"),color:er,lastUpdated:t,loading:a,onRefresh:i,t:e}),r.length?(0,n.jsx)(el,{children:r.map((e,o)=>{let a=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,n.jsx)(es,{children:(0,n.jsxs)(ed,{href:a,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)(ec,{children:[o+1,"."]}),(0,n.jsxs)(ep,{children:[(0,n.jsx)(em,{children:e.title}),(0,n.jsxs)(eg,{children:[(0,n.jsxs)(ef,{children:[(0,n.jsx)(et.A,{size:11}),e.points??0]}),(0,n.jsxs)(eu,{children:[(0,n.jsx)(ei.A,{size:11}),e.num_comments??0]}),(0,n.jsx)(ex,{children:(0,c.FB)(e.url)})]})]})]})},e.objectID)})}):(0,n.jsx)(eh,{children:e(a?"todayInTech.loading":"todayInTech.empty")})]})}var eb=a(2743);let ey="#58a6ff",e$=s().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ez=s().a`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px ${t.w4.spacing.sm};
  border: 1px solid ${ey}18;
  border-radius: ${t.w4.borderRadius.sm};
  background: linear-gradient(165deg, ${ey}0b 0%, ${t.w4.colors.surface} 55%, ${t.w4.colors.surface} 100%);
  text-decoration: none;
  transition: background ${t.w4.transitions.base}, border-color ${t.w4.transitions.base}, transform ${t.w4.transitions.base};

  &:hover {
    background: linear-gradient(165deg, ${ey}14 0%, ${t.w4.colors.surfaceRaised} 55%, ${t.w4.colors.surfaceRaised} 100%);
    border-color: ${ey}5c;
    transform: translateX(2px);
  }
`,ev=s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  line-height: 1.4;
  display: flex;
  align-items: flex-start;
  gap: 6px;
`,ej=s().span`
  color: ${t.w4.colors.mainTextMuted};
  flex-shrink: 0;
  margin-top: 2px;
`,ek=s().div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  font-size: 12px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
`,eA=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${ey};
  font-weight: 600;
`,eS=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
`,eM=s().span`
  color: ${t.w4.colors.mainTextMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,eT=s().div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`,eB=s().div`
  height: 1px;
  background: ${ey}2a;
  margin: 2px 0;
`;function eP({t:e}){let o=Math.floor((Date.now()-1728e5)/1e3),a=`https://hn.algolia.com/api/v1/search?query=AI+LLM+model+open+source&tags=story&hitsPerPage=8&numericFilters=created_at_i>${o}`,{data:t,loading:i,lastUpdated:l,refresh:s}=(0,c.st)(a),d=t?.hits??[];return(0,n.jsxs)("div",{children:[(0,n.jsx)(k,{title:e("nav.aiRadar"),color:ey,lastUpdated:l,loading:i,onRefresh:s,t:e}),d.length?(0,n.jsx)(e$,{children:d.map((o,a)=>{let t=o.url??`https://news.ycombinator.com/item?id=${o.objectID}`;return(0,n.jsxs)(r().Fragment,{children:[a>0&&(0,n.jsx)(eB,{}),(0,n.jsxs)(ez,{href:t,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)(ev,{children:[(0,n.jsx)(ej,{children:(0,n.jsx)(eb.A,{size:12})}),o.title]}),(0,n.jsxs)(ek,{children:[(0,n.jsxs)(eA,{children:[(0,n.jsx)(et.A,{size:11}),o.points??0]}),(0,n.jsxs)(eS,{children:[(0,n.jsx)(ei.A,{size:11}),o.num_comments??0]}),(0,n.jsx)(eM,{children:(0,c.FB)(o.url)}),(0,n.jsx)("span",{style:{marginLeft:"auto"},children:(0,f.aw)(o.created_at,e)})]})]})]},o.objectID)})}):(0,n.jsx)(eT,{children:i?e("aiRadar.loading"):e("aiRadar.empty")})]})}let eF="#ff6314",eR=[{id:"webdev",label:"webdev",query:"web frontend css html"},{id:"javascript",label:"JavaScript",query:"javascript node npm"},{id:"rust",label:"Rust",query:"rust lang cargo"},{id:"python",label:"Python",query:"python django fastapi"},{id:"devops",label:"DevOps",query:"docker kubernetes devops cloud"}],eD=s().div`
  display: flex;
  gap: 6px;
  margin-bottom: ${t.w4.spacing.lg};
  flex-wrap: wrap;
`,eC=s().button`
  padding: 5px 12px;
  font-size: 12px;
  border-radius: 20px;
  border: 1px solid ${({active:e})=>e?eF:t.w4.colors.border};
  background: ${({active:e})=>e?"rgba(255,99,20,0.15)":"transparent"};
  color: ${({active:e})=>e?eF:t.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: ${t.w4.transitions.fast};
  font-family: ${t.w4.typography.fontFamilyMono};

  &:hover {
    border-color: ${eF};
    color: ${eF};
    background: rgba(255, 99, 20, 0.08);
  }
`,eE=s().div`
  display: flex;
  flex-direction: column;
`,eL=s().a`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 8px;
  border-radius: ${t.w4.borderRadius.md};
  text-decoration: none;
  transition: background ${t.w4.transitions.fast}, transform ${t.w4.transitions.base};
  border-bottom: 1px solid ${t.w4.colors.border};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: translateX(2px);
  }
`,eI=s().span`
  color: ${t.w4.colors.mainTextMuted};
  flex-shrink: 0;
  margin-top: 3px;
`,e_=s().div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  min-width: 0;
`,eN=s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  line-height: 1.45;
`,eH=s().div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
`,eK=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${eF};
  font-weight: 600;
`,eG=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
`,eY=s().span`
  color: ${t.w4.colors.mainTextMuted};
  opacity: 0.7;
`,eV=s().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.7;
`,eO=s().span`
  margin-left: auto;
  white-space: nowrap;
`,eq=s().div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function eW(){let[e,o]=(0,i.useState)(eR[0]),a=Math.floor((Date.now()-2592e5)/1e3),t=`https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(e.query)}&tags=story&hitsPerPage=10&numericFilters=created_at_i>${a}`,{data:r,loading:l,lastUpdated:s,refresh:d}=(0,c.st)(t),p=r?.hits??[];return(0,n.jsxs)("div",{children:[(0,n.jsx)(k,{title:"Community Feed",color:eF,description:"Top stories from Hacker News in the last 72 hours, filtered by dev topic.",lastUpdated:s,loading:l,onRefresh:d}),(0,n.jsx)(eD,{children:eR.map(a=>(0,n.jsx)(eC,{active:e.id===a.id,onClick:()=>o(a),children:a.label},a.id))}),p.length?(0,n.jsx)(eE,{children:p.map(e=>{let o=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,n.jsxs)(eL,{href:o,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(eI,{children:(0,n.jsx)(eb.A,{size:13})}),(0,n.jsxs)(e_,{children:[(0,n.jsx)(eN,{children:e.title}),(0,n.jsxs)(eH,{children:[(0,n.jsxs)(eK,{children:[(0,n.jsx)(et.A,{size:11}),(0,c.aT)(e.points??0)," pts"]}),(0,n.jsxs)(eG,{children:[(0,n.jsx)(ei.A,{size:11}),e.num_comments??0]}),(0,n.jsxs)(eY,{children:["by ",e.author]}),(0,n.jsx)(eV,{children:(0,c.FB)(e.url)}),(0,n.jsx)(eO,{children:(0,c.fF)(e.created_at)})]})]})]},e.objectID)})}):(0,n.jsx)(eq,{children:l?"Loading stories...":"No stories in the last 72h"})]})}var eJ=a(6673);let eU="#f7c948",eZ=[{id:"react",label:"React",query:"react component"},{id:"cli",label:"CLI",query:"cli tool command"},{id:"typescript",label:"TypeScript",query:"typescript types"},{id:"testing",label:"Testing",query:"test jest vitest"},{id:"build",label:"Build",query:"bundler build vite webpack"}],eX=s().div`
  display: flex;
  gap: 6px;
  margin-bottom: ${t.w4.spacing.lg};
  flex-wrap: wrap;
`,eQ=s().button`
  padding: 5px 12px;
  font-size: 12px;
  border-radius: 20px;
  border: 1px solid ${({active:e})=>e?eU:t.w4.colors.border};
  background: ${({active:e})=>e?"rgba(247,201,72,0.15)":"transparent"};
  color: ${({active:e})=>e?eU:t.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: all 0.15s;
  font-family: ${t.w4.typography.fontFamilyMono};

  &:hover {
    border-color: ${eU};
    color: ${eU};
    background: rgba(247, 201, 72, 0.08);
  }
`,e0=s().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${t.w4.spacing.md};

  @media (max-width: ${t.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${t.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,e1=s().a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${t.w4.spacing.md};
  background: linear-gradient(168deg, ${eU}0c 0%, ${t.w4.colors.surface} 44%, ${t.w4.colors.surface} 100%);
  border: 1px solid ${eU}2e;
  border-radius: ${t.w4.borderRadius.md};
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s, transform 0.25s, box-shadow 0.25s;
  min-height: 130px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${eU}, transparent);
    opacity: 0.3;
    transition: opacity 0.2s;
  }

  &:hover {
    border-color: ${eU}66;
    background: linear-gradient(168deg, ${eU}18 0%, ${t.w4.colors.surfaceRaised} 44%, ${t.w4.colors.surfaceRaised} 100%);
    box-shadow: 0 0 18px ${eU}20, 0 8px 24px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }

  &:hover::before {
    opacity: 0.8;
  }
`,e4=s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${eU};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;
`,e2=s().span`
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
  font-weight: 400;
  flex-shrink: 0;
`,e5=s().div`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,e3=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,e6=s().span`
  font-size: 10px;
  padding: 2px 7px;
  background: rgba(247, 201, 72, 0.08);
  color: ${t.w4.colors.mainTextMuted};
  border-radius: 4px;
  border: 1px solid rgba(247, 201, 72, 0.15);
`,e8=s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
`,e7=s().div`
  flex: 1;
  height: 3px;
  background: ${t.w4.colors.border};
  border-radius: 2px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({value:e})=>Math.round(100*e)}%;
    background: ${eU};
    border-radius: 2px;
    opacity: 0.7;
  }
`,e9=s().div`
  display: flex;
  gap: 6px;
  font-size: 10px;
  font-family: ${t.w4.typography.fontFamilyMono};
  color: ${t.w4.colors.mainTextMuted};
  opacity: 0.7;
`,oe=s().span`
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
  white-space: nowrap;
  opacity: 0.6;
`,oo=s().div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function oa(){let[e,o]=(0,i.useState)(eZ[0]),a=`https://api.npms.io/v2/search?q=${encodeURIComponent(e.query)}&size=12`,{data:t,loading:r,lastUpdated:l,refresh:s}=(0,c.st)(a),d=t?.results??[];return(0,n.jsxs)("div",{children:[(0,n.jsx)(k,{title:"Package Radar",color:eU,description:"Trending npm packages ranked by quality, popularity, and maintenance. Filtered by topic.",lastUpdated:l,loading:r,onRefresh:s}),(0,n.jsx)(eX,{children:eZ.map(a=>(0,n.jsx)(eQ,{active:e.id===a.id,onClick:()=>o(a),children:a.label},a.id))}),d.length?(0,n.jsx)(e0,{children:d.map(({package:e,score:o})=>(0,n.jsxs)(e1,{href:e.links.npm,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)(e4,{title:e.name,children:[(0,n.jsx)(eJ.A,{size:13}),e.name,(0,n.jsxs)(e2,{children:["v",e.version]})]}),(0,n.jsx)(e5,{children:e.description||"No description."}),e.keywords&&e.keywords.length>0&&(0,n.jsx)(e3,{children:e.keywords.slice(0,3).map(e=>(0,n.jsx)(e6,{children:e},e))}),(0,n.jsxs)(e8,{children:[(0,n.jsxs)(oe,{children:["@",e.publisher.username]}),(0,n.jsx)(e7,{value:o.final,title:`Score: ${Math.round(100*o.final)}%`})]}),(0,n.jsxs)(e9,{children:[(0,n.jsxs)("span",{title:"Quality",children:["Q:",Math.round(100*o.detail.quality),"%"]}),(0,n.jsxs)("span",{title:"Popularity",children:["P:",Math.round(100*o.detail.popularity),"%"]}),(0,n.jsxs)("span",{title:"Maintenance",children:["M:",Math.round(100*o.detail.maintenance),"%"]})]})]},e.name))}):(0,n.jsx)(oo,{children:r?"Scanning npm registry...":"No packages found"})]})}let on="#f97316",ot=s().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,oi=s().a`
  display: grid;
  grid-template-columns: 20px 120px 1fr 68px;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  padding: 7px ${t.w4.spacing.sm};
  border: 1px solid ${on}18;
  border-radius: ${t.w4.borderRadius.sm};
  background: linear-gradient(165deg, ${on}0a 0%, ${t.w4.colors.surface} 62%, ${t.w4.colors.surface} 100%);
  text-decoration: none;
  transition: background ${t.w4.transitions.base}, border-color ${t.w4.transitions.base}, transform ${t.w4.transitions.base};

  &:hover {
    background: linear-gradient(165deg, ${on}13 0%, ${t.w4.colors.surfaceRaised} 62%, ${t.w4.colors.surfaceRaised} 100%);
    border-color: ${on}5a;
    transform: translateX(2px);
  }

  @media (max-width: ${t.w4.breakpoints.md}) {
    grid-template-columns: 20px 90px 1fr 60px;
  }
`,or=s().span`
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
  text-align: right;
`,ol=s().span`
  font-size: ${t.w4.typography.fontSizeSm};
  font-family: ${t.w4.typography.fontFamilyMono};
  color: ${on};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,os=s().div`
  height: 6px;
  background: ${t.w4.colors.border};
  border-radius: 3px;
  overflow: hidden;
`,od=s().div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: ${on};
  border-radius: 3px;
  opacity: 0.75;
  transition: width 0.4s ease;
`,oc=s().span`
  font-size: 11px;
  font-family: ${t.w4.typography.fontFamilyMono};
  color: ${t.w4.colors.mainTextMuted};
  text-align: right;
  white-space: nowrap;
`,op=s().div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function om({t:e}){let{data:o,loading:a,lastUpdated:t,refresh:i}=(0,c.st)("https://api.npmjs.org/downloads/point/last-week/react,typescript,lodash,axios,express,next,vue,vite,tailwindcss,eslint,prettier,webpack"),r=o?Object.values(o).filter(e=>e.downloads>0).map(e=>({name:e.package,downloads:e.downloads})).sort((e,o)=>o.downloads-e.downloads):[],l=r[0]?.downloads??1;return(0,n.jsxs)("div",{children:[(0,n.jsx)(k,{title:e("nav.npmPulse"),color:on,lastUpdated:t,loading:a,onRefresh:i,t:e}),r.length?(0,n.jsx)(ot,{children:r.map((o,a)=>{var t;return(0,n.jsxs)(oi,{href:`https://www.npmjs.com/package/${o.name}`,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(or,{children:a+1}),(0,n.jsx)(ol,{children:o.name}),(0,n.jsx)(os,{children:(0,n.jsx)(od,{pct:Math.round(o.downloads/l*100)})}),(0,n.jsxs)(oc,{children:[(t=o.downloads)>=1e9?`${(t/1e9).toFixed(1)}B`:t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}k`:String(t)," ",e("perWeek")]})]},o.name)})}):(0,n.jsx)(op,{children:a?e("npm.loading"):e("noData")})]})}var og=a(2709),of=a(602),ou=a(7901);let ox="#7c3aed",oh=[{id:"webdev",label:"webdev"},{id:"ai",label:"AI"},{id:"typescript",label:"TS"},{id:"rust",label:"Rust"},{id:"devops",label:"DevOps"}],ow=s().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${t.w4.spacing.md};

  @media (max-width: ${t.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${t.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,ob=s().div`
  display: flex;
  gap: 4px;
  margin-bottom: ${t.w4.spacing.md};
  flex-wrap: wrap;
`,oy=s().button`
  padding: 4px 10px;
  font-size: ${t.w4.typography.fontSizeSm};
  border-radius: ${t.w4.borderRadius.sm};
  border: 1px solid ${({active:e})=>e?ox:t.w4.colors.border};
  background: ${({active:e})=>e?"rgba(124,58,237,0.12)":"transparent"};
  color: ${({active:e})=>e?ox:t.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: ${t.w4.transitions.fast};
  font-family: ${t.w4.typography.fontFamilyMono};

  &:hover {
    border-color: ${ox};
    color: ${ox};
  }
`,o$=s().a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${t.w4.spacing.md};
  background: linear-gradient(168deg, ${ox}0c 0%, ${t.w4.colors.surface} 44%, ${t.w4.colors.surface} 100%);
  border: 1px solid ${ox}2d;
  border-radius: ${t.w4.borderRadius.md};
  text-decoration: none;
  transition: border-color ${t.w4.transitions.base}, background ${t.w4.transitions.base}, transform ${t.w4.transitions.base}, box-shadow ${t.w4.transitions.base};
  min-height: 140px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${ox}, transparent);
    opacity: 0.3;
    transition: opacity ${t.w4.transitions.base};
  }

  &:hover {
    border-color: ${ox}66;
    background: linear-gradient(168deg, ${ox}18 0%, ${t.w4.colors.surfaceRaised} 44%, ${t.w4.colors.surfaceRaised} 100%);
    box-shadow: 0 0 18px ${ox}20, 0 8px 24px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }

  &:hover::before {
    opacity: 0.8;
  }
`,oz=s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${t.w4.colors.mainText};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,ov=s().div`
  font-size: ${t.w4.typography.fontSizeSm};
  color: ${t.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,oj=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,ok=s().span`
  font-size: 11px;
  padding: 2px 7px;
  background: rgba(124,58,237,0.1);
  color: ${ox};
  border-radius: 20px;
  border: 1px solid rgba(124,58,237,0.2);
`,oA=s().div`
  display: flex;
  align-items: center;
  gap: ${t.w4.spacing.sm};
  margin-top: auto;
  font-size: 12px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
`,oS=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: #e05252;
`,oM=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
`,oT=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
  opacity: 0.7;
`,oB=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-left: auto;
`,oP=s().div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function oF(){let[e,o]=(0,i.useState)(oh[0].id),a=`https://dev.to/api/articles?tag=${e}&top=7&per_page=8`,{data:t,loading:r,lastUpdated:l,refresh:s}=(0,c.st)(a),d=t??[];return(0,n.jsxs)("div",{children:[(0,n.jsx)(k,{title:"Tech Articles",color:ox,description:"Popular articles from Dev.to across frontend, AI, and systems topics.",lastUpdated:l,loading:r,onRefresh:s}),(0,n.jsx)(ob,{children:oh.map(a=>(0,n.jsxs)(oy,{active:e===a.id,onClick:()=>o(a.id),children:["#",a.label]},a.id))}),d.length?(0,n.jsx)(ow,{children:d.map(e=>(0,n.jsxs)(o$,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(oz,{children:e.title}),e.description&&(0,n.jsx)(ov,{children:e.description}),e.tag_list.length>0&&(0,n.jsx)(oj,{children:e.tag_list.slice(0,3).map(e=>(0,n.jsxs)(ok,{children:["#",e]},e))}),(0,n.jsxs)(oA,{children:[(0,n.jsxs)(oS,{children:[(0,n.jsx)(og.A,{size:11}),(0,c.aT)(e.public_reactions_count)]}),(0,n.jsxs)(oM,{children:[(0,n.jsx)(ei.A,{size:11}),e.comments_count]}),(0,n.jsxs)(oT,{children:[(0,n.jsx)(of.A,{size:10}),e.user.name]}),(0,n.jsxs)(oB,{children:[(0,n.jsx)(ou.A,{size:11}),e.reading_time_minutes,"m"]})]})]},e.id))}):(0,n.jsx)(oP,{children:r?"Loading articles...":"No articles found"})]})}var oR=a(140);let oD="#f48024",oC=[{id:"",label:"All"},{id:"javascript",label:"JS"},{id:"typescript",label:"TS"},{id:"python",label:"Python"},{id:"react",label:"React"}],oE=s().div`
  display: flex;
  gap: 6px;
  margin-bottom: ${t.w4.spacing.lg};
  flex-wrap: wrap;
`,oL=s().button`
  padding: 5px 12px;
  font-size: 12px;
  border-radius: 20px;
  border: 1px solid ${({active:e})=>e?oD:t.w4.colors.border};
  background: ${({active:e})=>e?"rgba(244,128,36,0.15)":"transparent"};
  color: ${({active:e})=>e?oD:t.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: ${t.w4.transitions.fast};
  font-family: ${t.w4.typography.fontFamilyMono};
  letter-spacing: 0.01em;

  &:hover {
    border-color: ${oD};
    color: ${oD};
    background: rgba(244, 128, 36, 0.08);
  }
`,oI=s().div`
  display: flex;
  flex-direction: column;
`,o_=s().a`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 8px;
  border-radius: ${t.w4.borderRadius.md};
  text-decoration: none;
  transition: background ${t.w4.transitions.fast}, transform ${t.w4.transitions.base};
  border-bottom: 1px solid ${t.w4.colors.border};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: translateX(2px);
  }
`,oN=s().span`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${({answered:e})=>e?"rgba(63,185,80,0.5)":t.w4.colors.border};
  background: ${({answered:e})=>e?"rgba(35,134,54,0.15)":"transparent"};
  color: ${({answered:e})=>e?"#3fb950":t.w4.colors.mainTextMuted};
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
`,oH=s().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,oK=s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  line-height: 1.45;
`,oG=s().div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamilyMono};
  flex-wrap: wrap;
`,oY=s().span`
  color: ${({negative:e})=>e?"#e05252":oD};
  font-weight: 600;
`,oV=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
  opacity: 0.7;
`,oO=s().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,oq=s().span`
  font-size: 10px;
  padding: 2px 6px;
  background: rgba(244, 128, 36, 0.08);
  color: ${t.w4.colors.mainTextMuted};
  border-radius: 4px;
  border: 1px solid rgba(244, 128, 36, 0.15);
  letter-spacing: 0.01em;
`,oW=s().span`
  margin-left: auto;
  white-space: nowrap;
`,oJ=s().div`
  padding: ${t.w4.spacing.xl};
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  text-align: center;
`;function oU(){let[e,o]=(0,i.useState)(""),a=e?`&tagged=${e}`:"",t=`https://api.stackexchange.com/2.3/questions?order=desc&sort=hot&site=stackoverflow&pagesize=10&filter=default${a}`,{data:r,loading:l,lastUpdated:s,refresh:d}=(0,c.st)(t),p=r?.items??[];return(0,n.jsxs)("div",{children:[(0,n.jsx)(k,{title:"Dev Pulse",color:oD,description:"Hot questions from Stack Overflow sorted by activity, filterable by language or framework.",lastUpdated:s,loading:l,onRefresh:d}),(0,n.jsx)(oE,{children:oC.map(a=>(0,n.jsx)(oL,{active:e===a.id,onClick:()=>o(a.id),children:a.label},a.id))}),p.length?(0,n.jsx)(oI,{children:p.map(e=>{let o=new Date(1e3*e.creation_date).toISOString();return(0,n.jsxs)(o_,{href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(oN,{answered:e.is_answered,children:e.is_answered?"✓":"?"}),(0,n.jsxs)(oH,{children:[(0,n.jsx)(oK,{children:(0,c.iT)(e.title)}),(0,n.jsxs)(oG,{children:[(0,n.jsxs)(oY,{negative:e.score<0,children:[e.score>0?"+":"",(0,c.aT)(e.score)," votes"]}),(0,n.jsxs)("span",{children:[e.answer_count," ans"]}),(0,n.jsxs)(oV,{children:[(0,n.jsx)(oR.A,{size:10}),(0,c.aT)(e.view_count)]}),(0,n.jsx)(oO,{children:e.tags.slice(0,3).map(e=>(0,n.jsx)(oq,{children:e},e))}),(0,n.jsx)(oW,{children:(0,c.fF)(o)})]})]})]},e.question_id)})}):(0,n.jsx)(oJ,{children:l?"Fetching hot questions...":"No questions found"})]})}function oZ({category:e,t:o}){return(0,n.jsxs)(t.wi,{children:["github"===e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.KW,{id:"live-pulse",children:(0,n.jsx)(t.PH,{children:(0,n.jsx)(I,{t:o})})}),(0,n.jsx)(t.KW,{id:"experiment-zone",children:(0,n.jsx)(t.PH,{children:(0,n.jsx)(en,{t:o})})})]}),"hackernews"===e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.pB,{children:[(0,n.jsx)(t.KW,{id:"today-in-tech",children:(0,n.jsx)(t.PH,{style:{height:"100%"},children:(0,n.jsx)(ew,{t:o})})}),(0,n.jsx)(t.KW,{id:"ai-radar",children:(0,n.jsx)(t.PH,{style:{height:"100%"},children:(0,n.jsx)(eP,{t:o})})})]}),(0,n.jsx)(t.KW,{id:"community-feed",children:(0,n.jsx)(t.PH,{children:(0,n.jsx)(eW,{})})})]}),"packages"===e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.KW,{id:"package-radar",children:(0,n.jsx)(t.PH,{children:(0,n.jsx)(oa,{})})}),(0,n.jsx)(t.KW,{id:"npm-trends",children:(0,n.jsx)(t.PH,{children:(0,n.jsx)(om,{t:o})})})]}),"devcommunity"===e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.KW,{id:"tech-articles",children:(0,n.jsx)(t.PH,{children:(0,n.jsx)(oF,{})})}),(0,n.jsx)(t.KW,{id:"dev-pulse",children:(0,n.jsx)(t.PH,{children:(0,n.jsx)(oU,{})})})]})]})}},8108(e,o,a){a.d(o,{A:()=>ed});var n=a(5723),t=a(7991),i=a(6859),r=a.n(i),l=a(2799),s=a(7230),d=a(8641),c=a(2743),p=a(9753),m=a(5726),g=a(9522);let f=(0,l.keyframes)`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`,u=r().div`
  display: flex;
  flex-direction: column;
  gap: ${m.w4.spacing.sm};
`,x=r().div`
  display: grid;
  grid-template-columns: 100px 1fr 52px;
  align-items: center;
  gap: ${m.w4.spacing.sm};

  @media (max-width: ${m.w4.breakpoints.md}) {
    grid-template-columns: 80px 1fr 44px;
  }
`,h=r().span`
  font-size: 11px;
  font-family: ${m.w4.typography.fontFamilyMono};
  color: ${m.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,w=r().div`
  height: 18px;
  background: ${m.w4.colors.codeBg};
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`,b=r().div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: linear-gradient(90deg, ${({color:e})=>e}66, ${({color:e})=>e});
  border-radius: 3px;
  transform-origin: left center;
  animation: ${f} 0.6s ease forwards;
  animation-delay: ${({delay:e})=>e}s;
  box-shadow: 0 0 8px ${({color:e})=>e}44;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: ${({color:e})=>e};
    box-shadow: 0 0 6px ${({color:e})=>e};
  }
`,y=r().span`
  font-size: 12px;
  font-family: ${m.w4.typography.fontFamilyMono};
  font-weight: 600;
  color: ${({color:e})=>e};
  text-align: right;
`;function $({bars:e}){let o=Math.max(...e.map(e=>e.value),1);return(0,n.jsx)(u,{children:e.map((e,a)=>(0,n.jsxs)(x,{children:[(0,n.jsx)(h,{children:e.label}),(0,n.jsx)(w,{children:(0,n.jsx)(b,{pct:Math.round(e.value/o*100),color:e.color,delay:.1*a})}),(0,n.jsx)(y,{color:e.color,children:e.value})]},e.label))})}let z=[{id:"github",label:"GitHub",color:"#3fb950",panels:["live-pulse","experiment-zone"],desc:"Trending repos & rising projects"},{id:"hackernews",label:"Hacker News",color:"#ff6600",panels:["today-in-tech","ai-radar","community-feed"],desc:"Front page, AI & community"},{id:"packages",label:"Packages",color:"#cb3837",panels:["package-radar","npm-trends"],desc:"npm search & download stats"},{id:"devcommunity",label:"Dev Community",color:"#7c3aed",panels:["tech-articles","dev-pulse"],desc:"Articles & hot questions"}],v=(0,l.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,j=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;(0,l.keyframes)`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;let k=r().div`
  padding: 0 ${m.w4.spacing.xl} ${m.w4.spacing.xxl};
  max-width: 1100px;
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
  margin: 0 auto;

  @media (max-width: ${m.w4.breakpoints.md}) {
    padding: 0 ${m.w4.spacing.md} ${m.w4.spacing.xl};
  }
`,A=r().header`
  text-align: center;
  padding: ${m.w4.spacing.xxl} 0 ${m.w4.spacing.lg};
  margin-bottom: ${m.w4.spacing.lg};
  animation: ${j} 0.6s ease;
  position: relative;
`,S=r().div`
  font-size: 10px;
  font-family: ${m.w4.typography.fontFamilyMono};
  color: ${m.w4.colors.mainTextMuted};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: ${m.w4.spacing.sm};
`,M=r().h1`
  font-size: 48px;
  font-weight: 800;
  color: ${m.w4.colors.mainText};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 2px;
  line-height: 1;
  background: linear-gradient(135deg, ${m.w4.colors.mainText} 0%, ${m.w4.colors.accent} 50%, ${m.w4.colors.mainText} 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${m.w4.breakpoints.md}) {
    font-size: 28px;
  }
`,T=r().div`
  height: 3px;
  background: linear-gradient(90deg, transparent, ${m.w4.colors.border}, ${m.w4.colors.accent}40, ${m.w4.colors.border}, transparent);
  margin: ${m.w4.spacing.md} 0;
`,B=r().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${m.w4.spacing.lg};
  font-size: 11px;
  font-family: ${m.w4.typography.fontFamilyMono};
  color: ${m.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  flex-wrap: wrap;
`,P=r().span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: rgba(63, 185, 80, 0.08);
  border: 1px solid rgba(63, 185, 80, 0.25);
  border-radius: 20px;
  color: #3fb950;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
`,F=r().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #3fb950;
  animation: ${v} 2s ease-in-out infinite;
  box-shadow: 0 0 6px #3fb95080;
`,R=r().div`
  height: 1px;
  background: ${m.w4.colors.border};
  margin: ${m.w4.spacing.lg} 0;
`,D=r().section`
  animation: ${j} 0.5s ease both;
  animation-delay: ${({delay:e})=>(e??0)*.12}s;
`,C=r().div`
  display: flex;
  align-items: center;
  gap: ${m.w4.spacing.sm};
  margin-bottom: ${m.w4.spacing.md};
`,E=r().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  box-shadow: 0 0 8px ${({color:e})=>e}60;
  flex-shrink: 0;
`,L=r().span`
  font-size: 10px;
  font-family: ${m.w4.typography.fontFamilyMono};
  color: ${({color:e})=>e??m.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 600;
`,I=r().span`
  flex: 1;
  height: 1px;
  background: ${m.w4.colors.border};
`,_=r().div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: ${m.w4.spacing.lg};
  margin-bottom: ${m.w4.spacing.lg};

  @media (max-width: ${m.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`,N=r().div`
  background: linear-gradient(180deg, transparent, ${m.w4.colors.border}, transparent);

  @media (max-width: ${m.w4.breakpoints.lg}) {
    display: none;
  }
`,H=r().a`
  display: flex;
  flex-direction: column;
  gap: ${m.w4.spacing.md};
  padding: ${m.w4.spacing.lg};
  background: ${m.w4.colors.surface};
  border: 1px solid ${m.w4.colors.border};
  border-radius: ${m.w4.borderRadius.lg};
  text-decoration: none;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #3fb950, transparent);
    opacity: 0.5;
  }

  &:hover {
    border-color: #3fb95044;
    transform: translateY(-2px);
    box-shadow: 0 0 20px #3fb95015, 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`,K=r().div`
  font-size: 9px;
  font-family: ${m.w4.typography.fontFamilyMono};
  color: #3fb950;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  display: flex;
  align-items: center;
  gap: 6px;
`,G=r().div`
  font-size: 22px;
  font-weight: 700;
  color: ${m.w4.colors.mainText};
  line-height: 1.2;
  font-family: ${m.w4.typography.fontFamilyMono};
`,Y=r().div`
  font-size: ${m.w4.typography.fontSizeBase};
  color: ${m.w4.colors.mainTextMuted};
  line-height: 1.65;
  flex: 1;
`,V=r().div`
  display: flex;
  align-items: center;
  gap: ${m.w4.spacing.md};
  font-size: 12px;
  font-family: ${m.w4.typography.fontFamilyMono};
  color: ${m.w4.colors.mainTextMuted};
  margin-top: auto;
  padding-top: ${m.w4.spacing.sm};
  border-top: 1px solid ${m.w4.colors.border};
`,O=r().span`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #d29922;
  font-weight: 600;
`,q=r().span`
  display: flex;
  align-items: center;
  gap: 4px;
`,W=r().div`
  display: flex;
  flex-direction: column;
`,J=r().a`
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 11px 0;
  text-decoration: none;
  border-bottom: 1px solid ${m.w4.colors.border}80;
  transition: background 0.15s, padding-left 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    padding-left: 6px;
  }
`,U=r().span`
  font-size: 18px;
  font-weight: 800;
  color: #ff660030;
  font-family: ${m.w4.typography.fontFamilyMono};
  min-width: 24px;
  text-align: right;
  flex-shrink: 0;
  line-height: 1;
`,Z=r().div`
  flex: 1;
  min-width: 0;
`,X=r().div`
  font-size: ${m.w4.typography.fontSizeBase};
  color: ${m.w4.colors.mainText};
  line-height: 1.4;
  margin-bottom: 3px;
`,Q=r().div`
  font-size: 10px;
  color: ${m.w4.colors.mainTextMuted};
  font-family: ${m.w4.typography.fontFamilyMono};
  display: flex;
  align-items: center;
  gap: 8px;
`,ee=r().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${m.w4.spacing.md};
  margin-bottom: ${m.w4.spacing.xl};

  @media (max-width: ${m.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${m.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,eo=r().button`
  background: ${m.w4.colors.surface};
  border: 1px solid ${m.w4.colors.border};
  border-radius: ${m.w4.borderRadius.lg};
  padding: ${m.w4.spacing.lg} ${m.w4.spacing.md};
  text-align: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({accentColor:e})=>e};
    opacity: 0.6;
    transition: opacity 0.2s;
  }

  &:hover {
    border-color: ${({accentColor:e})=>e}50;
    transform: translateY(-3px);
    box-shadow: 0 0 20px ${({accentColor:e})=>e}18, 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  &:hover::before {
    opacity: 1;
  }
`,ea=r().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
`,en=r().div`
  font-size: ${m.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${m.w4.colors.mainText};
`,et=r().div`
  font-size: 20px;
  font-weight: 800;
  font-family: ${m.w4.typography.fontFamilyMono};
  color: ${({color:e})=>e};
  opacity: 0.7;
`,ei=r().div`
  font-size: 12px;
  color: ${m.w4.colors.mainTextMuted};
  margin-bottom: ${m.w4.spacing.xs};
`,er=r().div`
  font-size: 11px;
  font-family: ${m.w4.typography.fontFamilyMono};
  color: ${({color:e})=>e};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: auto;
  padding-top: ${m.w4.spacing.sm};
  opacity: 0.8;
  transition: transform 0.2s;

  button:hover > & {
    transform: translateX(3px);
  }
`,el=r().div`
  background: ${m.w4.colors.surface};
  border: 1px solid ${m.w4.colors.border};
  border-radius: ${m.w4.borderRadius.lg};
  padding: ${m.w4.spacing.lg};
  margin-bottom: ${m.w4.spacing.lg};
`,es=r().div`
  background: ${m.w4.colors.surface};
  border: 1px solid ${m.w4.colors.border};
  border-radius: ${m.w4.borderRadius.lg};
  padding: ${m.w4.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${m.w4.colors.mainTextMuted};
  font-size: ${m.w4.typography.fontSizeSm};
  min-height: 180px;
  font-family: ${m.w4.typography.fontFamilyMono};
  letter-spacing: 0.04em;

  &::before {
    content: '//  ';
    opacity: 0.3;
  }
`;function ed({onNavigate:e,t:o}){let a=`https://api.github.com/search/repositories?q=created:>${(0,g.VF)(7)}&sort=stars&order=desc&per_page=1`,{data:i}=(0,g.st)(a),{data:r}=(0,g.st)("https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=6"),l=i?.items?.[0]??null,f=r?.hits??[],[u,x]=(0,t.useState)({});(0,t.useEffect)(()=>{Promise.all(["live-pulse","experiment-zone","today-in-tech","ai-radar","community-feed","package-radar","npm-trends","tech-articles","dev-pulse"].map(e=>(0,m.PL)(`ts:count:${e}`).then(o=>[e,Number(o??0)]))).then(e=>x(Object.fromEntries(e)))},[]);let h=e=>e.reduce((e,o)=>e+(u[o]??0),0),w=z.map(e=>({label:e.label,value:h(e.panels),color:e.color})),b=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),y=z.reduce((e,o)=>e+o.panels.length,0),v=w.some(e=>e.value>0);return(0,n.jsxs)(k,{children:[(0,n.jsxs)(A,{children:[(0,n.jsx)(S,{children:o("journal.title")}),(0,n.jsx)(M,{children:"TechScope"}),(0,n.jsx)(T,{}),(0,n.jsxs)(B,{children:[(0,n.jsx)("span",{children:b}),(0,n.jsx)("span",{children:"\xb7"}),(0,n.jsxs)(P,{children:[(0,n.jsx)(F,{}),o("journal.live")," — ",y," ",o("journal.feedsActive")]})]})]}),(0,n.jsx)(D,{delay:1,children:(0,n.jsxs)(_,{children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)(C,{children:[(0,n.jsx)(E,{color:"#3fb950"}),(0,n.jsx)(L,{color:"#3fb950",children:o("journal.headline")}),(0,n.jsx)(I,{})]}),l?(0,n.jsxs)(H,{href:l.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)(K,{children:[(0,n.jsx)(s.A,{size:10})," Trending this week"]}),(0,n.jsx)(G,{children:l.full_name}),(0,n.jsx)(Y,{children:l.description??o("noDescription")}),(0,n.jsxs)(V,{children:[(0,n.jsxs)(O,{children:[(0,n.jsx)(d.A,{size:12}),(0,g.Bz)(l.stargazers_count)]}),l.language&&(0,n.jsx)(q,{children:l.language}),(0,n.jsx)(c.A,{size:10,style:{marginLeft:"auto",opacity:.4}})]})]}):(0,n.jsx)(es,{children:o("livePulse.loading")})]}),(0,n.jsx)(N,{}),(0,n.jsxs)(W,{children:[(0,n.jsxs)(C,{children:[(0,n.jsx)(E,{color:"#ff6600"}),(0,n.jsx)(L,{color:"#ff6600",children:o("journal.topStories")}),(0,n.jsx)(I,{})]}),f.length>0?f.map((e,o)=>{let a=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,n.jsxs)(J,{index:o,href:a,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(U,{children:o+1}),(0,n.jsxs)(Z,{children:[(0,n.jsx)(X,{children:e.title}),(0,n.jsxs)(Q,{children:[(0,n.jsxs)("span",{style:{color:"#ff6600",fontWeight:600},children:[e.points??0," pts"]}),(0,n.jsxs)("span",{children:[e.num_comments??0," comments"]}),(0,n.jsx)("span",{style:{opacity:.5},children:(0,g.FB)(e.url)})]})]})]},e.objectID)}):(0,n.jsx)(es,{children:o("todayInTech.loading")})]})]})}),(0,n.jsx)(R,{}),(0,n.jsxs)(D,{delay:2,children:[(0,n.jsxs)(C,{children:[(0,n.jsx)(E,{color:m.w4.colors.accent}),(0,n.jsx)(L,{children:o("journal.categories")}),(0,n.jsx)(I,{})]}),(0,n.jsx)(ee,{children:z.map(o=>{let a=h(o.panels);return(0,n.jsxs)(eo,{accentColor:o.color,onClick:()=>e(o.id),children:[(0,n.jsxs)(ea,{children:[(0,n.jsx)(en,{children:o.label}),(0,n.jsx)(et,{color:o.color,children:a||""})]}),(0,n.jsx)(ei,{children:o.desc}),(0,n.jsxs)(er,{color:o.color,children:[o.panels.length," feeds ",(0,n.jsx)(p.A,{size:12})]})]},o.id)})})]}),v&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(R,{}),(0,n.jsxs)(D,{delay:3,children:[(0,n.jsxs)(C,{children:[(0,n.jsx)(E,{color:m.w4.colors.accent}),(0,n.jsx)(L,{children:o("journal.activity")}),(0,n.jsx)(I,{})]}),(0,n.jsx)(el,{children:(0,n.jsx)($,{bars:w})})]})]})]})}},9522(e,o,a){a.d(o,{Bz:()=>r,FB:()=>p,VF:()=>c,aT:()=>l,fF:()=>s,iT:()=>d,st:()=>i});var n=a(7991);a(5726);let t=new Map;function i(e,o=3e5){let a=t.get(e),r=a&&Date.now()-a.timestamp<18e4,[l,s]=(0,n.useState)(r?a.data:null),[d,c]=(0,n.useState)(!r),[p,m]=(0,n.useState)(null),[g,f]=(0,n.useState)(r?new Date(a.timestamp):null),u=(0,n.useCallback)(async()=>{try{let o=await fetch(e);if(!o.ok)throw Error(`HTTP ${o.status}`);let a=await o.json();s(a),f(new Date),m(null),t.set(e,{data:a,timestamp:Date.now()})}catch(e){m(e instanceof Error?e.message:"Failed to fetch")}finally{c(!1)}},[e]);return(0,n.useEffect)(()=>{let a=t.get(e);a&&Date.now()-a.timestamp<18e4?(s(a.data),f(new Date(a.timestamp)),c(!1)):u();let n=setInterval(u,o);return()=>clearInterval(n)},[u,o,e]),{data:l,loading:d,error:p,lastUpdated:g,refresh:u}}function r(e){return e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}function l(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}function s(e){let o=Math.floor((Date.now()-new Date(e).getTime())/6e4);if(o<1)return"just now";if(o<60)return`${o}m ago`;let a=Math.floor(o/60);return a<24?`${a}h ago`:`${Math.floor(a/24)}d ago`}function d(e){let o=document.createElement("textarea");return o.innerHTML=e,o.value}function c(e){let o=new Date;return o.setDate(o.getDate()-e),o.toISOString().split("T")[0]}function p(e){if(!e)return"news.ycombinator.com";try{return new URL(e).hostname.replace(/^www\./,"")}catch{return""}}},948(e,o,a){a.d(o,{A:()=>n});let n={"nav.journal":{en:"Journal",pt:"Jornal"},"nav.github":{en:"GitHub",pt:"GitHub"},"nav.hackernews":{en:"Hacker News",pt:"Hacker News"},"nav.packages":{en:"Packages",pt:"Packages"},"nav.devCommunity":{en:"Dev Community",pt:"Comunidade Dev"},"nav.livePulse":{en:"Live Pulse",pt:"Pulso ao Vivo"},"nav.aiRadar":{en:"AI Radar",pt:"Radar IA"},"nav.todayInTech":{en:"Today in Tech",pt:"Hoje em Tech"},"nav.experimentZone":{en:"Experiment Zone",pt:"Zona Experimental"},"nav.npmPulse":{en:"npm Pulse",pt:"Pulso npm"},"nav.packageRadar":{en:"Package Radar",pt:"Radar de Packages"},"nav.communityFeed":{en:"Community Feed",pt:"Feed da Comunidade"},"nav.devPulse":{en:"Dev Pulse",pt:"Pulso Dev"},"nav.techArticles":{en:"Tech Articles",pt:"Artigos Tech"},"journal.title":{en:"Internet Control Panel",pt:"Painel de Controlo da Internet"},"journal.activity":{en:"Activity Overview",pt:"Vis\xe3o Geral de Atividade"},"journal.headline":{en:"Headline",pt:"Destaque"},"journal.topStories":{en:"Top Stories",pt:"Principais Not\xedcias"},"journal.categories":{en:"Categories",pt:"Categorias"},"journal.items":{en:"items",pt:"itens"},"journal.feedsActive":{en:"feeds active",pt:"feeds ativos"},"journal.open":{en:"Open",pt:"Abrir"},"journal.live":{en:"LIVE",pt:"AO VIVO"},"livePulse.loading":{en:"Loading trending repos...",pt:"A carregar repos em destaque..."},"aiRadar.loading":{en:"Scanning AI activity...",pt:"A analisar atividade IA..."},"aiRadar.empty":{en:"No AI stories in the last 48h",pt:"Sem artigos IA nas \xfaltimas 48h"},"todayInTech.loading":{en:"Loading front page...",pt:"A carregar primeira p\xe1gina..."},"todayInTech.empty":{en:"No stories available",pt:"Sem artigos dispon\xedveis"},"experiment.loading":{en:"Scanning experimental repos...",pt:"A procurar repos experimentais..."},"npm.loading":{en:"Fetching download stats...",pt:"A obter estat\xedsticas..."}}},8170(e,o,a){a.d(o,{Ym:()=>c,Nx:()=>p,aw:()=>m,lw:()=>g});var n=a(7991),t=a(5726);let i={"time.justNow":{en:"just now",pt:"agora mesmo"},"time.mAgo":{en:"{n}m ago",pt:"h\xe1 {n}m"},"time.hAgo":{en:"{n}h ago",pt:"h\xe1 {n}h"},"time.dAgo":{en:"{n}d ago",pt:"h\xe1 {n}d"},updated:{en:"updated {age}",pt:"atualizado {age}"},refresh:{en:"Refresh",pt:"Atualizar"},loading:{en:"Loading…",pt:"A carregar…"},noData:{en:"No data available",pt:"Sem dados dispon\xedveis"},noDescription:{en:"No description provided.",pt:"Sem descri\xe7\xe3o."},failedToFetch:{en:"Failed to fetch",pt:"Erro ao carregar"},perWeek:{en:"/ wk",pt:"/ sem"},"devtools.heading":{en:"Dev Tools",pt:"Ferramentas"},"devtools.playground":{en:"Playground",pt:"Playground"},"devtools.pad":{en:"Pad",pt:"Pad"},"devtools.charts":{en:"Charts",pt:"Gr\xe1ficos"},"devtools.csv":{en:"CSV",pt:"CSV"},"devtools.regex":{en:"Regex",pt:"Regex"},"devtools.json":{en:"JSON",pt:"JSON"},"devtools.diff":{en:"Diff",pt:"Diferen\xe7as"},"devtools.jwt":{en:"JWT",pt:"JWT"},"devtools.cron":{en:"Cron",pt:"Cron"},"devtools.colors":{en:"Colors",pt:"Cores"},"devtools.api":{en:"API",pt:"API"}},r="atlantis:locale",l="shell:locale";function s(e){return"en"===e||"pt"===e}function d(){try{let e=localStorage.getItem(r);if(s(e))return e}catch{}return"en"}function c(){let[e,o]=(0,n.useState)(d),a=(0,n.useCallback)(e=>{o(e);try{localStorage.setItem(r,e)}catch{}(0,t.Is)(l,e).catch(()=>{}),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,n.useEffect)(()=>{let e=e=>{o(e.detail)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,n.useEffect)(()=>{(0,t.PL)(l).then(a=>{if(s(a)&&a!==e){try{localStorage.setItem(r,a)}catch{}o(a)}}).catch(()=>{})},[]),[e,a]}function p(e,o){let a=o?{...i,...o}:i;return(o,n)=>{let t=a[o]?.[e]??o;return n?Object.entries(n).reduce((e,[o,a])=>e.replace(RegExp(`\\{${o}\\}`,"g"),String(a)),t):t}}function m(e,o){let a=Math.floor((Date.now()-new Date(e).getTime())/6e4);if(a<1)return o("time.justNow");if(a<60)return o("time.mAgo",{n:a});let n=Math.floor(a/60);return n<24?o("time.hAgo",{n:n}):o("time.dAgo",{n:Math.floor(n/24)})}function g(e,o){let a=Math.floor((Date.now()-e.getTime())/6e4);return a<1?o("time.justNow"):a<60?o("time.mAgo",{n:a}):o("time.hAgo",{n:Math.floor(a/60)})}(0,t.PL)(l).then(e=>{if(s(e))try{localStorage.setItem(r,e)}catch{}}).catch(()=>{}),a(5723);var f=a(6859),u=a.n(f);u().div`
  display: flex;
  gap: 4px;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  padding: 2px;
`,u().button`
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
`},8859(e,o,a){a.d(o,{FlyoutPanel:()=>b});var n=a(5723),t=a(7991),i=a.n(t),r=a(6859),l=a.n(r),s=a(2799),d=a(255),c=a(1316),p=a(814),m=a(6140);let g=(0,s.keyframes)`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,f=l().div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  max-height: calc(100vh - max(${64}px, ${({anchorY:e})=>e+8}px));
  z-index: 1200;
  background: ${c.w4.colors.surfaceRaised};
  border: 1px solid ${c.w4.colors.accentMuted};
  border-radius: ${c.w4.borderRadius.lg};
  box-shadow:
    0 0 0 1px ${c.w4.colors.borderSubtle},
    0 16px 48px rgba(0, 0, 0, 0.55);
  min-width: 210px;
  overflow-y: auto;
  animation: ${g} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
    background: ${c.w4.colors.accent};
    opacity: 0.4;
  }
`,u=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${c.w4.colors.accent};
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
  font-family: ${c.w4.typography.fontFamily};
`,x=l().button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 8px 14px;
  background: ${({active:e})=>e?c.w4.colors.accentMuted:"none"};
  border: none;
  box-shadow: inset 2px 0 0 ${({active:e})=>e?c.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?c.w4.colors.accent:c.w4.colors.sidebarText};
  font-size: ${c.w4.typography.fontSizeBase};
  font-family: ${c.w4.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: ${c.w4.colors.accentMuted};
    color: ${c.w4.colors.mainText};
  }
`;function h({iconKey:e}){let o=e?m.t[e]??d.A:d.A;return(0,n.jsx)(o,{size:14,strokeWidth:1.75})}function w({entries:e,activeId:o,onSelect:a}){return(0,n.jsx)(n.Fragment,{children:e.map(e=>e.children?(0,n.jsx)(i().Fragment,{children:(0,n.jsx)(w,{entries:e.children,activeId:o,onSelect:a})},e.id):(0,n.jsxs)(x,{active:o===e.id,onClick:()=>a(e),children:[(0,n.jsx)(h,{iconKey:e.icon}),e.name]},e.id))})}function b({activeId:e}){let{flyout:o,scheduleFlyoutClose:a,cancelFlyoutClose:t}=(0,p.c)();if(!o)return null;let i=o.entry.icon?m.t[o.entry.icon]??d.A:d.A;return(0,n.jsxs)(f,{anchorY:o.anchorY,onMouseEnter:t,onMouseLeave:a,children:[(0,n.jsxs)(u,{children:[(0,n.jsx)(i,{size:13,strokeWidth:2}),o.entry.name]}),(0,n.jsx)(w,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),a()}})]})}},814(e,o,a){a.d(o,{I:()=>t,c:()=>i});var n=a(7991);let t=(0,n.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,n.useContext)(t)},6140(e,o,a){a.d(o,{t:()=>ew});var n=a(6896),t=a(7902),i=a(3013),r=a(2887),l=a(9510),s=a(9848),d=a(7901),c=a(3045),p=a(3775),m=a(1783),g=a(3539),f=a(9416),u=a(1837),x=a(7167),h=a(4494),w=a(2314),b=a(255),y=a(5751),$=a(9633),z=a(2946),v=a(822),j=a(6720),k=a(7400),A=a(8456),S=a(3317),M=a(2709),T=a(8006),B=a(9301),P=a(7561),F=a(3517),R=a(8207),D=a(7032),C=a(6949),E=a(8218),L=a(6829),I=a(9591),_=a(5553),N=a(9923),H=a(2820),K=a(4621),G=a(8479),Y=a(2534),V=a(6673),O=a(7490),q=a(9033),W=a(9038),J=a(5775),U=a(1365),Z=a(2937),X=a(9821),Q=a(5912),ee=a(158),eo=a(8641),ea=a(8607),en=a(3249),et=a(1821),ei=a(5889),er=a(9655),el=a(7170),es=a(9161),ed=a(1849),ec=a(1604),ep=a(3142),em=a(1187),eg=a(7747),ef=a(2932),eu=a(4525),ex=a(7230),eh=a(2164);let ew={activity:n.A,"a-large-small":t.A,apple:i.A,"arrow-right":r.A,"bar-chart-2":l.A,book:s.A,"book-open":d.A,briefcase:c.A,calendar:p.A,clock:m.A,"circle-dot":g.A,cloud:f.A,compass:u.A,cpu:x.A,droplets:h.A,feather:w.A,file:b.A,"file-text":y.A,folder:$.A,"git-branch":z.A,github:v.A,globe:j.A,grid:k.A,hand:A.A,hash:S.A,heart:M.A,key:T.A,hexagon:B.A,home:P.A,landmark:F.A,layers:R.A,"layout-grid":D.A,leaf:C.A,lightbulb:E.A,list:L.A,map:I.A,"map-pin":_.A,"message-circle":N.A,"message-square":H.A,minus:K.A,monitor:G.A,mountain:Y.A,package:V.A,palette:O.A,"pen-tool":q.A,"pie-chart":W.A,plane:J.A,plus:U.A,ruler:Z.A,shirt:X.A,slash:Q.A,square:ee.A,star:eo.A,sun:ea.A,terminal:en.A,thermometer:et.A,triangle:ei.A,trophy:er.A,truck:el.A,type:es.A,users:ed.A,"volume-2":ec.A,watch:ep.A,waves:em.A,wind:eg.A,wrench:ef.A,x:eu.A,zap:ex.A,bot:eh.A}},5726(e,o,a){a.d(o,{w4:()=>n.w4,CD:()=>O,Is:()=>X,pB:()=>ei,wi:()=>ea,PH:()=>et,KW:()=>en,PE:()=>P,PL:()=>Q});var n=a(1316),t=a(5723),i=a(7991),r=a.n(i),l=a(6859),s=a.n(l);s().button`
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
`;var d=a(2799),c=a(3661),p=a(814);let m="260px",g="56px",f="48px",u=s().header`
  display: flex;
  align-items: center;
  height: calc(${f} + env(safe-area-inset-top, 0px));
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
    min-height: calc(${f} + env(safe-area-inset-top, 0px));
  }
`,x=s().div`
  width: ${g};
  min-width: ${g};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${n.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${n.w4.breakpoints.md}) {
    display: none;
  }
`,h=s().button`
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
`,w=(0,d.keyframes)`
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
`,y=s().span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${w} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`
    background: linear-gradient(135deg, ${n.w4.colors.accent}, ${n.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`,$=s().div`
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
`,z=s().div`
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
`,v=s().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,j=s().div`
  display: flex;
  flex-direction: column;
  height: ${n.w4.sizes.fullHeight};
  background: ${n.w4.colors.mainBg};
  font-family: ${n.w4.typography.fontFamily};
  color: ${n.w4.colors.mainText};
  overflow: hidden;
`,k=s().aside`
  width: ${({collapsed:e})=>e?g:m};
  min-width: ${({collapsed:e})=>e?g:m};
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
`,A=s().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,S=s().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,M=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function T(){return(0,t.jsx)(b,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:M.map((e,o)=>(0,t.jsx)(y,{index:o,accent:e.accent,children:e.char},o))})}let B="atlantis:sidebar-collapsed";function P({sidebar:e,children:o,topBarRight:n,title:l="Atlantis",activeId:s=null}){let[d,m]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem(B)}catch{return!1}}),[g,f]=(0,i.useState)(null),w=(0,i.useRef)(),b=()=>m(e=>{let o=!e;try{localStorage.setItem(B,String(o))}catch{}return o}),y=r().useMemo(()=>r().lazy(()=>Promise.resolve().then(a.bind(a,8859)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,t.jsx)(p.I.Provider,{value:{collapsed:d,toggle:b,flyout:g,openFlyout:(e,o,a)=>{clearTimeout(w.current),f({entry:e,anchorY:o,onSelect:a})},scheduleFlyoutClose:()=>{w.current=setTimeout(()=>f(null),160)},cancelFlyoutClose:()=>clearTimeout(w.current)},children:(0,t.jsxs)(j,{children:[(0,t.jsxs)(u,{children:[e&&(0,t.jsx)(x,{children:(0,t.jsx)(h,{onClick:b,title:d?"Expand sidebar":"Collapse sidebar",children:(0,t.jsx)(c.A,{size:17})})}),(0,t.jsx)(T,{}),l&&(0,t.jsx)($,{children:l}),n&&(0,t.jsx)(z,{children:n})]}),(0,t.jsxs)(v,{children:[null!=e&&(0,t.jsx)(k,{collapsed:d,children:(0,t.jsx)(A,{children:e})}),(0,t.jsx)(S,{children:o})]}),g&&(0,t.jsx)(r().Suspense,{fallback:null,children:(0,t.jsx)(y,{activeId:s})})]})})}var F=a(255),R=a(9753),D=a(6140);let C=s().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,E=s().div`
  overflow: hidden;
`,L=s().div`
  padding-left: ${n.w4.spacing.md};
`,I=s().div`
  display: flex;
  flex-direction: column;
`,_=s().button`
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
`,H=s().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,K=s().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${n.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,G=s().button`
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
`;function Y({iconKey:e,size:o=16}){if(e&&!(e in D.t))return(0,t.jsx)("span",{style:{fontSize:o,lineHeight:1,display:"flex",alignItems:"center"},children:e});let a=e?D.t[e]??F.A:F.A;return(0,t.jsx)(a,{size:o,strokeWidth:1.75})}function V({entry:e,activeId:o,onSelect:a}){let[n,r]=(0,i.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:d,cancelFlyoutClose:c}=(0,p.c)();return e.children&&e.children.length>0?(0,t.jsxs)(I,{children:[(0,t.jsxs)(_,{collapsed:l,onClick:()=>{l||r(e=>!e)},onMouseEnter:l?o=>{s(e,o.currentTarget.getBoundingClientRect().top,a)}:void 0,onMouseLeave:l?d:void 0,children:[(0,t.jsxs)(N,{collapsed:l,children:[(0,t.jsx)(Y,{iconKey:e.icon,size:16}),(0,t.jsx)(H,{collapsed:l,children:e.name})]}),(0,t.jsx)(K,{open:n,collapsed:l,children:(0,t.jsx)(R.A,{size:13})})]}),(0,t.jsx)(C,{open:n&&!l,children:(0,t.jsx)(E,{children:(0,t.jsx)(L,{children:e.children.map(e=>(0,t.jsx)(V,{entry:e,activeId:o,onSelect:a},e.id))})})})]}):(0,t.jsxs)(G,{active:o===e.id,collapsed:l,onClick:()=>a(e),onMouseEnter:l?o=>{let n=o.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},n.top,a)}:void 0,onMouseLeave:l?d:void 0,children:[(0,t.jsx)(Y,{iconKey:e.icon,size:15}),(0,t.jsx)(H,{collapsed:l,children:e.name})]})}function O({entries:e,activeId:o,onSelect:a}){return(0,t.jsx)("div",{children:e.map(e=>(0,t.jsx)(V,{entry:e,activeId:o,onSelect:a},e.id))})}let q=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;s().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${q} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

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
`,a(8859),s().button`
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
`,[{id:"europe",name:"Europe",icon:"\uD83C\uDF0D",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"lourinha",name:"Lourinh\xe3",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"\uD83C\uDDEC\uD83C\uDDE7",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"\uD83C\uDDEB\uD83C\uDDF7",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"\uD83C\uDDE9\uD83C\uDDEA",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"\uD83C\uDDEA\uD83C\uDDF8",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"\uD83C\uDDEE\uD83C\uDDF9",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"\uD83C\uDDF3\uD83C\uDDF1",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"\uD83C\uDDEC\uD83C\uDDF7",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"\uD83C\uDDE7\uD83C\uDDEA",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"\uD83C\uDDE6\uD83C\uDDF9",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"\uD83C\uDDF5\uD83C\uDDF1",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"\uD83C\uDDF8\uD83C\uDDEA",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"\uD83C\uDDF3\uD83C\uDDF4",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"\uD83C\uDDE9\uD83C\uDDF0",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"\uD83C\uDDEB\uD83C\uDDEE",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"\uD83C\uDDEE\uD83C\uDDF8",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"\uD83C\uDDEE\uD83C\uDDEA",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"\uD83C\uDDE8\uD83C\uDDED",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"\uD83C\uDDFA\uD83C\uDDE6",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"\uD83C\uDDF7\uD83C\uDDFA",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"\uD83C\uDDF7\uD83C\uDDF4",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"\uD83C\uDDED\uD83C\uDDFA",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"\uD83C\uDDE8\uD83C\uDDFF",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"\uD83C\uDDF8\uD83C\uDDF0",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"\uD83C\uDDF8\uD83C\uDDEE",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"\uD83C\uDDED\uD83C\uDDF7",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"\uD83C\uDDF7\uD83C\uDDF8",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"\uD83C\uDDE7\uD83C\uDDE6",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"\uD83C\uDDE7\uD83C\uDDEC",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"\uD83C\uDDEA\uD83C\uDDEA",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"\uD83C\uDDF1\uD83C\uDDFB",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"\uD83C\uDDF1\uD83C\uDDF9",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"\uD83C\uDDE7\uD83C\uDDFE",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"\uD83C\uDDF2\uD83C\uDDE9",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"\uD83C\uDDE6\uD83C\uDDF1",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"\uD83C\uDDF2\uD83C\uDDF0",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"\uD83C\uDDF2\uD83C\uDDEA",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"\uD83C\uDDE8\uD83C\uDDFE",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"\uD83C\uDDF2\uD83C\uDDF9",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"\uD83C\uDDF1\uD83C\uDDFA",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"\uD83C\uDDE6\uD83C\uDDE9",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"\uD83C\uDDF2\uD83C\uDDE8",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"\uD83C\uDDF8\uD83C\uDDF2",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"\uD83C\uDDF1\uD83C\uDDEE",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"\uD83C\uDDFB\uD83C\uDDE6",zoom:15}]},{id:"americas",name:"Americas",icon:"\uD83C\uDF0E",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"\uD83C\uDDE8\uD83C\uDDE6",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"\uD83C\uDDF2\uD83C\uDDFD",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"\uD83C\uDDE7\uD83C\uDDFF",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"\uD83C\uDDEC\uD83C\uDDF9",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"\uD83C\uDDF8\uD83C\uDDFB",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"\uD83C\uDDED\uD83C\uDDF3",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"\uD83C\uDDF3\uD83C\uDDEE",zoom:12},{id:"san-jose-cr",name:"San Jos\xe9",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"\uD83C\uDDE8\uD83C\uDDF7",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"\uD83C\uDDF5\uD83C\uDDE6",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"\uD83C\uDDE8\uD83C\uDDFA",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"\uD83C\uDDE7\uD83C\uDDF8",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"\uD83C\uDDEF\uD83C\uDDF2",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"\uD83C\uDDED\uD83C\uDDF9",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"\uD83C\uDDE9\uD83C\uDDF4",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"\uD83C\uDDF0\uD83C\uDDF3",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"\uD83C\uDDF1\uD83C\uDDE8",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"\uD83C\uDDFB\uD83C\uDDE8",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"\uD83C\uDDE7\uD83C\uDDE7",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"\uD83C\uDDE6\uD83C\uDDEC",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"\uD83C\uDDE9\uD83C\uDDF2",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"\uD83C\uDDEC\uD83C\uDDE9",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"\uD83C\uDDF9\uD83C\uDDF9",zoom:12},{id:"bogota",name:"Bogot\xe1",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"\uD83C\uDDE8\uD83C\uDDF4",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"\uD83C\uDDFB\uD83C\uDDEA",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"\uD83C\uDDEC\uD83C\uDDFE",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"\uD83C\uDDF8\uD83C\uDDF7",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"\uD83C\uDDEA\uD83C\uDDE8",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"\uD83C\uDDF5\uD83C\uDDEA",zoom:12},{id:"sao-paulo",name:"S\xe3o Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"\uD83C\uDDE7\uD83C\uDDF7",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"\uD83C\uDDE7\uD83C\uDDF4",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"\uD83C\uDDE8\uD83C\uDDF1",zoom:12},{id:"asuncion",name:"Asunci\xf3n",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"\uD83C\uDDF5\uD83C\uDDFE",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"\uD83C\uDDE6\uD83C\uDDF7",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"\uD83C\uDDFA\uD83C\uDDFE",zoom:12}]},{id:"africa",name:"Africa",icon:"\uD83C\uDF0D",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"\uD83C\uDDF2\uD83C\uDDE6",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"\uD83C\uDDE9\uD83C\uDDFF",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"\uD83C\uDDF9\uD83C\uDDF3",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"\uD83C\uDDF1\uD83C\uDDFE",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"\uD83C\uDDEA\uD83C\uDDEC",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"\uD83C\uDDF8\uD83C\uDDE9",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"\uD83C\uDDF8\uD83C\uDDF3",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"\uD83C\uDDEC\uD83C\uDDF2",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"\uD83C\uDDEC\uD83C\uDDFC",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"\uD83C\uDDEC\uD83C\uDDF3",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"\uD83C\uDDF8\uD83C\uDDF1",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"\uD83C\uDDF1\uD83C\uDDF7",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"\uD83C\uDDE8\uD83C\uDDEE",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"\uD83C\uDDEC\uD83C\uDDED",zoom:12},{id:"lome",name:"Lom\xe9",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"\uD83C\uDDF9\uD83C\uDDEC",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"\uD83C\uDDE7\uD83C\uDDEF",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"\uD83C\uDDF3\uD83C\uDDEC",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"\uD83C\uDDF3\uD83C\uDDEA",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"\uD83C\uDDF2\uD83C\uDDF1",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"\uD83C\uDDE7\uD83C\uDDEB",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"\uD83C\uDDF2\uD83C\uDDF7",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"\uD83C\uDDE8\uD83C\uDDFB",zoom:13},{id:"yaounde",name:"Yaound\xe9",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"\uD83C\uDDE8\uD83C\uDDF2",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"\uD83C\uDDF9\uD83C\uDDE9",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"\uD83C\uDDE8\uD83C\uDDEB",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"\uD83C\uDDEC\uD83C\uDDF6",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"\uD83C\uDDEC\uD83C\uDDE6",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"\uD83C\uDDE8\uD83C\uDDEC",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"\uD83C\uDDE8\uD83C\uDDE9",zoom:12},{id:"sao-tome",name:"S\xe3o Tom\xe9",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"\uD83C\uDDF8\uD83C\uDDF9",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"\uD83C\uDDF8\uD83C\uDDF8",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"\uD83C\uDDEA\uD83C\uDDF9",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"\uD83C\uDDEA\uD83C\uDDF7",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"\uD83C\uDDE9\uD83C\uDDEF",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"\uD83C\uDDF8\uD83C\uDDF4",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"\uD83C\uDDF0\uD83C\uDDEA",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"\uD83C\uDDFA\uD83C\uDDEC",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"\uD83C\uDDF7\uD83C\uDDFC",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"\uD83C\uDDE7\uD83C\uDDEE",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"\uD83C\uDDF9\uD83C\uDDFF",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"\uD83C\uDDF2\uD83C\uDDEC",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"\uD83C\uDDF0\uD83C\uDDF2",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"\uD83C\uDDF2\uD83C\uDDFA",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"\uD83C\uDDF8\uD83C\uDDE8",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"\uD83C\uDDE6\uD83C\uDDF4",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"\uD83C\uDDFF\uD83C\uDDF2",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"\uD83C\uDDF2\uD83C\uDDFC",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"\uD83C\uDDF2\uD83C\uDDFF",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"\uD83C\uDDFF\uD83C\uDDFC",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"\uD83C\uDDE7\uD83C\uDDFC",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"\uD83C\uDDF3\uD83C\uDDE6",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"\uD83C\uDDFF\uD83C\uDDE6",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"\uD83C\uDDF8\uD83C\uDDFF",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"\uD83C\uDDF1\uD83C\uDDF8",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"\uD83D\uDD4C",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"\uD83C\uDDF8\uD83C\uDDE6",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"\uD83C\uDDE6\uD83C\uDDEA",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"\uD83C\uDDF6\uD83C\uDDE6",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"\uD83C\uDDE7\uD83C\uDDED",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"\uD83C\uDDF0\uD83C\uDDFC",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"\uD83C\uDDF4\uD83C\uDDF2",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"\uD83C\uDDFE\uD83C\uDDEA",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"\uD83C\uDDEE\uD83C\uDDF6",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"\uD83C\uDDEE\uD83C\uDDF7",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"\uD83C\uDDF9\uD83C\uDDF7",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"\uD83C\uDDF1\uD83C\uDDE7",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"\uD83C\uDDF8\uD83C\uDDFE",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"\uD83C\uDDEF\uD83C\uDDF4",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"\uD83C\uDDEE\uD83C\uDDF1",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"\uD83C\uDDF5\uD83C\uDDF8",zoom:13}]},{id:"asia",name:"Asia",icon:"\uD83C\uDF0F",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"\uD83C\uDDE6\uD83C\uDDEB",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"\uD83C\uDDF0\uD83C\uDDFF",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"\uD83C\uDDF0\uD83C\uDDEC",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"\uD83C\uDDFA\uD83C\uDDFF",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"\uD83C\uDDF9\uD83C\uDDEF",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"\uD83C\uDDF9\uD83C\uDDF2",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"\uD83C\uDDE6\uD83C\uDDF2",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"\uD83C\uDDE6\uD83C\uDDFF",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"\uD83C\uDDEC\uD83C\uDDEA",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"\uD83C\uDDF5\uD83C\uDDF0",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"\uD83C\uDDF3\uD83C\uDDF5",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"\uD83C\uDDE7\uD83C\uDDE9",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"\uD83C\uDDF1\uD83C\uDDF0",zoom:12},{id:"male",name:"Mal\xe9",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"\uD83C\uDDF2\uD83C\uDDFB",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"\uD83C\uDDE8\uD83C\uDDF3",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"\uD83C\uDDEF\uD83C\uDDF5",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"\uD83C\uDDF0\uD83C\uDDF7",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"\uD83C\uDDF0\uD83C\uDDF5",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"\uD83C\uDDF2\uD83C\uDDF3",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"\uD83C\uDDF9\uD83C\uDDED",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"\uD83C\uDDFB\uD83C\uDDF3",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"\uD83C\uDDF0\uD83C\uDDED",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"\uD83C\uDDF1\uD83C\uDDE6",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"\uD83C\uDDF2\uD83C\uDDF2",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"\uD83C\uDDF2\uD83C\uDDFE",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"\uD83C\uDDF8\uD83C\uDDEC",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"\uD83C\uDDEE\uD83C\uDDE9",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"\uD83C\uDDF5\uD83C\uDDED",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"\uD83C\uDDE7\uD83C\uDDF3",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"\uD83C\uDDF9\uD83C\uDDF1",zoom:13}]},{id:"oceania",name:"Oceania",icon:"\uD83C\uDF0A",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"\uD83C\uDDE6\uD83C\uDDFA",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"\uD83C\uDDF3\uD83C\uDDFF",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"\uD83C\uDDF5\uD83C\uDDEC",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"\uD83C\uDDEB\uD83C\uDDEF",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"\uD83C\uDDF8\uD83C\uDDE7",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"\uD83C\uDDFB\uD83C\uDDFA",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"\uD83C\uDDF9\uD83C\uDDF4",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"\uD83C\uDDFC\uD83C\uDDF8",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"\uD83C\uDDF9\uD83C\uDDFB",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"\uD83C\uDDF0\uD83C\uDDEE",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"\uD83C\uDDF2\uD83C\uDDED",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"\uD83C\uDDEB\uD83C\uDDF2",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"\uD83C\uDDF5\uD83C\uDDFC",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"\uD83C\uDDF3\uD83C\uDDF7",zoom:14}]}].flatMap(e=>e.places);let W="documents",J="settings";function U(){return new Promise((e,o)=>{let a=indexedDB.open("atlantis-tools",2);a.onupgradeneeded=e=>{let o=e.target.result;o.objectStoreNames.contains(W)||o.createObjectStore(W,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),o.objectStoreNames.contains(J)||o.createObjectStore(J,{keyPath:"key"})},a.onsuccess=()=>e(a.result),a.onerror=()=>o(a.error)})}let Z={async saveDoc(e,o,a){let n=await U(),t={appId:e,name:o,content:a,savedAt:Date.now()};return new Promise((e,o)=>{let a=n.transaction(W,"readwrite").objectStore(W).add(t);a.onsuccess=()=>e(String(a.result)),a.onerror=()=>o(a.error)})},async updateDoc(e,o,a){let n=await U();return new Promise((t,i)=>{let r=n.transaction(W,"readwrite").objectStore(W),l=r.get(Number(e));l.onsuccess=()=>{let e=l.result;if(!e)return void i(Error("Doc not found"));let n=r.put({...e,name:o,content:a,savedAt:Date.now()});n.onsuccess=()=>t(),n.onerror=()=>i(n.error)},l.onerror=()=>i(l.error)})},async listDocs(e){let o=await U();return new Promise((a,n)=>{let t=o.transaction(W,"readonly").objectStore(W).index("appId").getAll(e);t.onsuccess=()=>a(t.result.map(e=>({...e,id:String(e.id)})).reverse()),t.onerror=()=>n(t.error)})},async deleteDoc(e){let o=await U();return new Promise((a,n)=>{let t=o.transaction(W,"readwrite").objectStore(W).delete(Number(e));t.onsuccess=()=>a(),t.onerror=()=>n(t.error)})},async putSetting(e,o){let a=await U();return new Promise((n,t)=>{let i=a.transaction(J,"readwrite").objectStore(J).put({key:e,value:o});i.onsuccess=()=>n(),i.onerror=()=>t(i.error)})},async getSetting(e){let o=await U();return new Promise((a,n)=>{let t=o.transaction(J,"readonly").objectStore(J).get(e);t.onsuccess=()=>a(t.result?t.result.value:null),t.onerror=()=>n(t.error)})}};function X(e,o){return Z.putSetting(e,o)}function Q(e){return Z.getSetting(e)}s().div`
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
  background: ${({primary:e,danger:o})=>o?"rgba(248,81,73,0.12)":e?n.w4.colors.accent:"none"};
  color: ${({primary:e,danger:o})=>o?n.w4.colors.danger:e?"#fff":n.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:o})=>o?n.w4.colors.danger:e?n.w4.colors.accent:n.w4.colors.border};

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
`;let ee=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,eo=(0,d.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`;s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${n.w4.spacing.md};
  animation: ${ee} 0.15s ease both;
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
  animation: ${eo} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
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

  background: ${({primary:e,danger:o})=>o?n.w4.colors.danger:e?n.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:o})=>o||e?"#fff":n.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:o})=>o?n.w4.colors.danger:e?n.w4.colors.accent:n.w4.colors.border};

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
`;let ea=s().div`
  padding: ${n.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${n.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,en=s().section`
  scroll-margin-top: ${n.w4.spacing.lg};
`,et=s().div`
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.lg};
`,ei=s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${n.w4.spacing.xl};

  @media (max-width: ${n.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;s().div`
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
`;let er=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,el=(0,d.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,es=(0,d.keyframes)`
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
  animation: ${er} 0.4s ease 0.15s both;
`,s().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,s().div`
  position: absolute;
  inset: 0;
  animation: ${el} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
  animation: ${es} 1.4s ease-in-out infinite;
`,s().span`
  color: ${n.w4.colors.mainTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`},1316(e,o,a){a.d(o,{w4:()=>i});let n={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},t="--at-",i={colors:function(){let e={};for(let o of Object.keys(n))e[o]=`var(${t}${o})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${t}suiteLab)`,vida:`var(${t}suiteVida)`,learn:`var(${t}suiteLearn)`,games:`var(${t}suiteGames)`,ent:`var(${t}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:`
    outline: 2px solid var(--at-accent);
    outline-offset: 2px;
  `}}}]);