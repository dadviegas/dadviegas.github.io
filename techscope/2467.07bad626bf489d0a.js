"use strict";(self.webpackChunk_atlantis_techscope=self.webpackChunk_atlantis_techscope||[]).push([["2467"],{5748(e,o,a){a.d(o,{W:()=>oN});var t=a(5723),r=a(9874),i=a(7991),n=a.n(i),l=a(6859),s=a.n(l),d=a(8395),c=a(3711),p=a(9522),g=a(2799),m=a(8170);let f=(0,g.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,x=(0,g.keyframes)`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,h=s().div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  margin-bottom: ${r.w4.spacing.lg};
`,u=s().div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  flex: 1;
`,b=s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
  animation: ${f} 2.4s ease-in-out infinite;
`,w=s().h2`
  font-size: ${r.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${r.w4.colors.mainText};
  letter-spacing: -0.02em;
`,y=s().span`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
`,$=s().span`
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${r.w4.colors.mainTextMuted};
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
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: 6px 10px;
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainText};
  width: 500px;
  white-space: normal;
  line-height: 1.4;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  transition: opacity ${r.w4.transitions.fast}, transform ${r.w4.transitions.fast};
`,z=s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.borderSubtle};
  border-radius: ${r.w4.borderRadius.sm};
  color: ${r.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color ${r.w4.transitions.base}, border-color ${r.w4.transitions.base}, background ${r.w4.transitions.base}, box-shadow ${r.w4.transitions.base};
  flex-shrink: 0;

  svg {
    animation: ${({spinning:e})=>e?x:"none"} 0.7s linear infinite;
  }

  &:hover {
    color: ${r.w4.colors.mainText};
    border-color: ${r.w4.colors.accent};
    background: ${r.w4.colors.surfaceRaised};
    box-shadow: 0 0 10px ${r.w4.colors.accentMuted};
  }
`;function k({title:e,color:o,description:a,lastUpdated:r,loading:i,onRefresh:n,t:l}){let s,c=r?l?(0,m.lw)(r,l):(s=Math.floor((Date.now()-r.getTime())/6e4))<1?"just now":s<60?`${s}m ago`:`${Math.floor(s/60)}h ago`:null,p=c?l?l("updated",{age:c}):`updated ${c}`:null;return(0,t.jsxs)(h,{children:[(0,t.jsxs)(u,{children:[(0,t.jsx)(b,{color:o}),(0,t.jsx)(w,{children:e}),a&&(0,t.jsxs)($,{children:[(0,t.jsx)(d.In,{name:"info",size:13}),(0,t.jsx)(v,{children:a})]})]}),p&&(0,t.jsx)(y,{children:p}),(0,t.jsx)(z,{spinning:i,onClick:n,title:l?l("refresh"):"Refresh",children:(0,t.jsx)(d.In,{name:"refresh",size:13})})]})}let M="#3fb950",j={TypeScript:"#3178c6",JavaScript:"#f1e05a",Python:"#3572A5",Go:"#00ADD8",Rust:"#dea584",Java:"#b07219","C++":"#f34b7d","C#":"#178600",Ruby:"#701516",Swift:"#F05138",Kotlin:"#A97BFF",Shell:"#89e051",HTML:"#e34c26",CSS:"#563d7c",Dart:"#00B4AB",Zig:"#ec915c",Nix:"#7e7eff",Lua:"#000080","Jupyter Notebook":"#DA5B0B"},A=s().div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${r.w4.spacing.md};

  @media (max-width: ${r.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
  }
`,T=s().a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${r.w4.spacing.md};
  background: linear-gradient(168deg, ${M}0f 0%, ${r.w4.colors.surface} 44%, ${r.w4.colors.surface} 100%);
  border: 1px solid ${M}2e;
  border-radius: ${r.w4.borderRadius.md};
  text-decoration: none;
  transition: border-color ${r.w4.transitions.base}, background ${r.w4.transitions.base}, transform ${r.w4.transitions.base}, box-shadow ${r.w4.transitions.base};
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
    background: linear-gradient(90deg, transparent, ${M}, transparent);
    opacity: 0.45;
    transition: opacity ${r.w4.transitions.base};
  }

  &:hover {
    border-color: ${M}66;
    background: linear-gradient(168deg, ${M}1a 0%, ${r.w4.colors.surfaceRaised} 44%, ${r.w4.colors.surfaceRaised} 100%);
    box-shadow: 0 0 18px ${M}24, 0 10px 26px rgba(0, 0, 0, 0.28);
    transform: translateY(-2px);
  }

  &:hover::before {
    opacity: 0.9;
  }
`,S=s().div`
  font-size: ${r.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${r.w4.colors.accent};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,F=s().div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,B=s().div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  margin-top: auto;
`,R=s().span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${r.w4.typography.fontSizeSm};
  font-weight: 600;
  color: #d29922;
  font-family: ${r.w4.typography.fontFamilyMono};
`,P=s().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({lang:e})=>j[e]??r.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,H=s().span`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
`,C=s().span`
  flex: 1;
`,L=s().div`
  padding: ${r.w4.spacing.xl};
  color: ${r.w4.colors.mainTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  text-align: center;
`;function I({t:e}){let{result:o,loading:a,lastUpdated:r,refresh:i}=(0,c.useRepoSearch)({query:`created:>${(0,p.VF)(7)}`,sort:"stars",perPage:8,cacheKey:"techscope-live-pulse"});return(0,t.jsxs)("div",{children:[(0,t.jsx)(k,{title:e("nav.livePulse"),color:M,lastUpdated:r,loading:a,onRefresh:i,t:e}),o?.items?.length?(0,t.jsx)(A,{children:o.items.map(o=>(0,t.jsxs)(T,{href:o.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(S,{title:o.full_name,children:o.full_name}),(0,t.jsx)(F,{children:o.description??e("noDescription")}),(0,t.jsxs)(B,{children:[o.language&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(P,{lang:o.language}),(0,t.jsx)(H,{children:o.language})]}),(0,t.jsx)(C,{}),(0,t.jsxs)(R,{children:[(0,t.jsx)(d.In,{name:"star",size:12}),(0,p.Bz)(o.stargazers_count)]})]})]},o.id))}):(0,t.jsx)(L,{children:a?e("livePulse.loading"):e("noData")})]})}let D="#bc8cff",E={TypeScript:"#3178c6",JavaScript:"#f1e05a",Python:"#3572A5",Go:"#00ADD8",Rust:"#dea584",Java:"#b07219","C++":"#f34b7d","C#":"#178600",Ruby:"#701516",Swift:"#F05138",Kotlin:"#A97BFF",Shell:"#89e051",HTML:"#e34c26",CSS:"#563d7c",Dart:"#00B4AB",Zig:"#ec915c",Nix:"#7e7eff",Lua:"#000080"},V=s().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${r.w4.spacing.md};

  @media (max-width: ${r.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,_=s().a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${r.w4.spacing.md};
  background: linear-gradient(168deg, ${D}10 0%, ${r.w4.colors.surface} 44%, ${r.w4.colors.surface} 100%);
  border: 1px solid ${D}2d;
  border-radius: ${r.w4.borderRadius.md};
  text-decoration: none;
  transition: border-color ${r.w4.transitions.base}, background ${r.w4.transitions.base}, transform ${r.w4.transitions.base}, box-shadow ${r.w4.transitions.base};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${D}, transparent);
    opacity: 0.45;
    transition: opacity ${r.w4.transitions.base};
  }

  &:hover {
    border-color: ${D}66;
    background: linear-gradient(168deg, ${D}1c 0%, ${r.w4.colors.surfaceRaised} 44%, ${r.w4.colors.surfaceRaised} 100%);
    box-shadow: 0 0 18px ${D}24, 0 10px 26px rgba(0, 0, 0, 0.28);
    transform: translateY(-2px);
  }

  &:hover::before {
    opacity: 0.9;
  }
`,N=s().div`
  display: flex;
  align-items: flex-start;
  gap: ${r.w4.spacing.sm};
  justify-content: space-between;
`,K=s().div`
  font-size: ${r.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${D};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,Y=s().div`
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
  white-space: nowrap;
  flex-shrink: 0;
`,G=s().div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,q=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,O=s().span`
  font-size: 11px;
  padding: 2px 7px;
  background: rgba(188, 140, 255, 0.12);
  color: ${D};
  border-radius: 20px;
  border: 1px solid rgba(188, 140, 255, 0.25);
`,W=s().div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  margin-top: auto;
`,J=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
`,U=s()(J)`
  color: #d29922;
  font-weight: 600;
`,Z=s().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({lang:e})=>E[e]??r.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,X=s().span`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
`,Q=s().span`
  flex: 1;
`,ee=s().div`
  padding: ${r.w4.spacing.xl};
  color: ${r.w4.colors.mainTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  text-align: center;
`;function eo({t:e}){let{result:o,loading:a,lastUpdated:r,refresh:i}=(0,c.useRepoSearch)({query:`created:>${(0,p.VF)(30)}+fork:false`,stars:"50..500",sort:"stars",perPage:8,cacheKey:"techscope-experiment-zone"});return(0,t.jsxs)("div",{children:[(0,t.jsx)(k,{title:e("nav.experimentZone"),color:D,lastUpdated:r,loading:a,onRefresh:i,t:e}),o?.items?.length?(0,t.jsx)(V,{children:o.items.map(o=>(0,t.jsxs)(_,{href:o.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsxs)(N,{children:[(0,t.jsx)(K,{title:o.full_name,children:o.full_name}),(0,t.jsx)(Y,{children:(0,m.aw)(o.created_at,e)})]}),(0,t.jsx)(G,{children:o.description??e("noDescription")}),o.topics.length>0&&(0,t.jsx)(q,{children:o.topics.slice(0,4).map(e=>(0,t.jsx)(O,{children:e},e))}),(0,t.jsxs)(W,{children:[o.language&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Z,{lang:o.language}),(0,t.jsx)(X,{children:o.language})]}),(0,t.jsx)(Q,{}),(0,t.jsxs)(U,{children:[(0,t.jsx)(d.In,{name:"star",size:12}),(0,p.Bz)(o.stargazers_count)]}),(0,t.jsxs)(J,{children:[(0,t.jsx)(d.In,{name:"git-fork",size:12}),(0,p.Bz)(o.forks_count)]})]})]},o.id))}):(0,t.jsx)(ee,{children:a?e("experiment.loading"):e("noData")})]})}let ea="#d29922",et=s().ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,er=s().li``,ei=s().a`
  display: flex;
  align-items: flex-start;
  gap: ${r.w4.spacing.sm};
  padding: 8px ${r.w4.spacing.sm};
  border: 1px solid ${ea}18;
  border-radius: ${r.w4.borderRadius.sm};
  background: linear-gradient(165deg, ${ea}0a 0%, ${r.w4.colors.surface} 58%, ${r.w4.colors.surface} 100%);
  text-decoration: none;
  transition: background ${r.w4.transitions.base}, border-color ${r.w4.transitions.base}, transform ${r.w4.transitions.base};

  &:hover {
    background: linear-gradient(165deg, ${ea}14 0%, ${r.w4.colors.surfaceRaised} 58%, ${r.w4.colors.surfaceRaised} 100%);
    border-color: ${ea}5a;
    transform: translateX(2px);
  }
`,en=s().span`
  font-size: ${r.w4.typography.fontSizeSm};
  font-weight: 700;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
  min-width: 20px;
  text-align: right;
  flex-shrink: 0;
  padding-top: 1px;
`,el=s().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`,es=s().div`
  font-size: ${r.w4.typography.fontSizeBase};
  color: ${r.w4.colors.mainText};
  line-height: 1.4;
`,ed=s().div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
`,ec=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${ea};
  font-weight: 600;
`,ep=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
`,eg=s().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,em=s().div`
  padding: ${r.w4.spacing.xl};
  color: ${r.w4.colors.mainTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  text-align: center;
`;function ef({t:e}){let{hits:o,loading:a,lastUpdated:r,refresh:i}=(0,c.useHnFrontPage)({hitsPerPage:12,cacheKey:"techscope-today-in-tech"}),n=o??[];return(0,t.jsxs)("div",{children:[(0,t.jsx)(k,{title:e("nav.todayInTech"),color:ea,lastUpdated:r,loading:a,onRefresh:i,t:e}),n.length?(0,t.jsx)(et,{children:n.map((e,o)=>{let a=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,t.jsx)(er,{children:(0,t.jsxs)(ei,{href:a,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsxs)(en,{children:[o+1,"."]}),(0,t.jsxs)(el,{children:[(0,t.jsx)(es,{children:e.title}),(0,t.jsxs)(ed,{children:[(0,t.jsxs)(ec,{children:[(0,t.jsx)(d.In,{name:"trending-up",size:11}),e.points??0]}),(0,t.jsxs)(ep,{children:[(0,t.jsx)(d.In,{name:"message-square",size:11}),e.num_comments??0]}),(0,t.jsx)(eg,{children:(0,p.FB)(e.url)})]})]})]})},e.objectID)})}):(0,t.jsx)(em,{children:e(a?"todayInTech.loading":"todayInTech.empty")})]})}let ex="#58a6ff",eh=s().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,eu=s().a`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px ${r.w4.spacing.sm};
  border: 1px solid ${ex}18;
  border-radius: ${r.w4.borderRadius.sm};
  background: linear-gradient(165deg, ${ex}0b 0%, ${r.w4.colors.surface} 55%, ${r.w4.colors.surface} 100%);
  text-decoration: none;
  transition: background ${r.w4.transitions.base}, border-color ${r.w4.transitions.base}, transform ${r.w4.transitions.base};

  &:hover {
    background: linear-gradient(165deg, ${ex}14 0%, ${r.w4.colors.surfaceRaised} 55%, ${r.w4.colors.surfaceRaised} 100%);
    border-color: ${ex}5c;
    transform: translateX(2px);
  }
`,eb=s().div`
  font-size: ${r.w4.typography.fontSizeBase};
  color: ${r.w4.colors.mainText};
  line-height: 1.4;
  display: flex;
  align-items: flex-start;
  gap: 6px;
`,ew=s().span`
  color: ${r.w4.colors.mainTextMuted};
  flex-shrink: 0;
  margin-top: 2px;
`,ey=s().div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
`,e$=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${ex};
  font-weight: 600;
`,ev=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
`,ez=s().span`
  color: ${r.w4.colors.mainTextMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ek=s().div`
  padding: ${r.w4.spacing.xl};
  color: ${r.w4.colors.mainTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  text-align: center;
`,eM=s().div`
  height: 1px;
  background: ${ex}2a;
  margin: 2px 0;
`;function ej({t:e}){let o=Math.floor((Date.now()-1728e5)/1e3),{hits:a,loading:r,lastUpdated:i,refresh:l}=(0,c.useHnSearch)({query:"AI LLM model open source",tags:"story",since:o,hitsPerPage:8,cacheKey:"techscope-ai-radar"}),s=a??[];return(0,t.jsxs)("div",{children:[(0,t.jsx)(k,{title:e("nav.aiRadar"),color:ex,lastUpdated:i,loading:r,onRefresh:l,t:e}),s.length?(0,t.jsx)(eh,{children:s.map((o,a)=>{let r=o.url??`https://news.ycombinator.com/item?id=${o.objectID}`;return(0,t.jsxs)(n().Fragment,{children:[a>0&&(0,t.jsx)(eM,{}),(0,t.jsxs)(eu,{href:r,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsxs)(eb,{children:[(0,t.jsx)(ew,{children:(0,t.jsx)(d.In,{name:"external-link",size:12})}),o.title]}),(0,t.jsxs)(ey,{children:[(0,t.jsxs)(e$,{children:[(0,t.jsx)(d.In,{name:"trending-up",size:11}),o.points??0]}),(0,t.jsxs)(ev,{children:[(0,t.jsx)(d.In,{name:"message-square",size:11}),o.num_comments??0]}),(0,t.jsx)(ez,{children:(0,p.FB)(o.url)}),(0,t.jsx)("span",{style:{marginLeft:"auto"},children:o.created_at?(0,m.aw)(o.created_at,e):""})]})]})]},o.objectID)})}):(0,t.jsx)(ek,{children:r?e("aiRadar.loading"):e("aiRadar.empty")})]})}let eA="#ff6314",eT=[{id:"webdev",label:"webdev",query:"web frontend css html"},{id:"javascript",label:"JavaScript",query:"javascript node npm"},{id:"rust",label:"Rust",query:"rust lang cargo"},{id:"python",label:"Python",query:"python django fastapi"},{id:"devops",label:"DevOps",query:"docker kubernetes devops cloud"}],eS=s().div`
  display: flex;
  gap: 6px;
  margin-bottom: ${r.w4.spacing.lg};
  flex-wrap: wrap;
`,eF=s().button`
  padding: 5px 12px;
  font-size: 11px;
  border-radius: 20px;
  border: 1px solid ${({active:e})=>e?eA:r.w4.colors.border};
  background: ${({active:e})=>e?"rgba(255,99,20,0.15)":"transparent"};
  color: ${({active:e})=>e?eA:r.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: ${r.w4.transitions.fast};
  font-family: ${r.w4.typography.fontFamilyMono};

  &:hover {
    border-color: ${eA};
    color: ${eA};
    background: rgba(255, 99, 20, 0.08);
  }
`,eB=s().div`
  display: flex;
  flex-direction: column;
`,eR=s().a`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 8px;
  border-radius: ${r.w4.borderRadius.md};
  text-decoration: none;
  transition: background ${r.w4.transitions.fast}, transform ${r.w4.transitions.base};
  border-bottom: 1px solid ${r.w4.colors.border};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: translateX(2px);
  }
`,eP=s().span`
  color: ${r.w4.colors.mainTextMuted};
  flex-shrink: 0;
  margin-top: 3px;
`,eH=s().div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  min-width: 0;
`,eC=s().div`
  font-size: ${r.w4.typography.fontSizeBase};
  color: ${r.w4.colors.mainText};
  line-height: 1.45;
`,eL=s().div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
`,eI=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${eA};
  font-weight: 600;
`,eD=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
`,eE=s().span`
  color: ${r.w4.colors.mainTextMuted};
  opacity: 0.7;
`,eV=s().span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.7;
`,e_=s().span`
  margin-left: auto;
  white-space: nowrap;
`,eN=s().div`
  padding: ${r.w4.spacing.xl};
  color: ${r.w4.colors.mainTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  text-align: center;
`;function eK(){let[e,o]=(0,i.useState)(eT[0]),a=Math.floor((Date.now()-2592e5)/1e3),{hits:r,loading:n,lastUpdated:l,refresh:s}=(0,c.useHnSearch)({query:e.query,tags:"story",since:a,hitsPerPage:10,cacheKey:`techscope-community-${e.id}`}),g=r??[];return(0,t.jsxs)("div",{children:[(0,t.jsx)(k,{title:"Community Feed",color:eA,description:"Top stories from Hacker News in the last 72 hours, filtered by dev topic.",lastUpdated:l,loading:n,onRefresh:s}),(0,t.jsx)(eS,{children:eT.map(a=>(0,t.jsx)(eF,{active:e.id===a.id,onClick:()=>o(a),children:a.label},a.id))}),g.length?(0,t.jsx)(eB,{children:g.map(e=>{let o=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,t.jsxs)(eR,{href:o,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(eP,{children:(0,t.jsx)(d.In,{name:"external-link",size:13})}),(0,t.jsxs)(eH,{children:[(0,t.jsx)(eC,{children:e.title}),(0,t.jsxs)(eL,{children:[(0,t.jsxs)(eI,{children:[(0,t.jsx)(d.In,{name:"trending-up",size:11}),(0,p.aT)(e.points??0)," pts"]}),(0,t.jsxs)(eD,{children:[(0,t.jsx)(d.In,{name:"message-square",size:11}),e.num_comments??0]}),(0,t.jsxs)(eE,{children:["by ",e.author]}),(0,t.jsx)(eV,{children:(0,p.FB)(e.url)}),(0,t.jsx)(e_,{children:e.created_at?(0,p.fF)(e.created_at):""})]})]})]},e.objectID)})}):(0,t.jsx)(eN,{children:n?"Loading stories...":"No stories in the last 72h"})]})}let eY="#f7c948",eG=[{id:"react",label:"React",query:"react component"},{id:"cli",label:"CLI",query:"cli tool command"},{id:"typescript",label:"TypeScript",query:"typescript types"},{id:"testing",label:"Testing",query:"test jest vitest"},{id:"build",label:"Build",query:"bundler build vite webpack"}],eq=s().div`
  display: flex;
  gap: 6px;
  margin-bottom: ${r.w4.spacing.lg};
  flex-wrap: wrap;
`,eO=s().button`
  padding: 5px 12px;
  font-size: 11px;
  border-radius: 20px;
  border: 1px solid ${({active:e})=>e?eY:r.w4.colors.border};
  background: ${({active:e})=>e?"rgba(247,201,72,0.15)":"transparent"};
  color: ${({active:e})=>e?eY:r.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: all ${r.w4.transitions.base};
  font-family: ${r.w4.typography.fontFamilyMono};

  &:hover {
    border-color: ${eY};
    color: ${eY};
    background: rgba(247, 201, 72, 0.08);
  }
`,eW=s().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${r.w4.spacing.md};

  @media (max-width: ${r.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,eJ=s().a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${r.w4.spacing.md};
  background: linear-gradient(168deg, ${eY}0c 0%, ${r.w4.colors.surface} 44%, ${r.w4.colors.surface} 100%);
  border: 1px solid ${eY}2e;
  border-radius: ${r.w4.borderRadius.md};
  text-decoration: none;
  transition: border-color ${r.w4.transitions.base}, background ${r.w4.transitions.base}, transform ${r.w4.transitions.slow}, box-shadow ${r.w4.transitions.slow};
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
    background: linear-gradient(90deg, transparent, ${eY}, transparent);
    opacity: 0.3;
    transition: opacity ${r.w4.transitions.base};
  }

  &:hover {
    border-color: ${eY}66;
    background: linear-gradient(168deg, ${eY}18 0%, ${r.w4.colors.surfaceRaised} 44%, ${r.w4.colors.surfaceRaised} 100%);
    box-shadow: 0 0 18px ${eY}20, 0 8px 24px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }

  &:hover::before {
    opacity: 0.8;
  }
`,eU=s().div`
  font-size: ${r.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${eY};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;
`,eZ=s().span`
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
  font-weight: 400;
  flex-shrink: 0;
`,eX=s().div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,eQ=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,e0=s().span`
  font-size: 11px;
  padding: 2px 7px;
  background: rgba(247, 201, 72, 0.08);
  color: ${r.w4.colors.mainTextMuted};
  border-radius: 4px;
  border: 1px solid rgba(247, 201, 72, 0.15);
`,e1=s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
`,e4=s().div`
  flex: 1;
  height: 3px;
  background: ${r.w4.colors.border};
  border-radius: 2px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({value:e})=>Math.round(100*e)}%;
    background: ${eY};
    border-radius: 2px;
    opacity: 0.7;
  }
`,e2=s().div`
  display: flex;
  gap: 6px;
  font-size: 11px;
  font-family: ${r.w4.typography.fontFamilyMono};
  color: ${r.w4.colors.mainTextMuted};
  opacity: 0.7;
`,e5=s().span`
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
  white-space: nowrap;
  opacity: 0.6;
`,e3=s().div`
  padding: ${r.w4.spacing.xl};
  color: ${r.w4.colors.mainTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  text-align: center;
`;function e8(){let[e,o]=(0,i.useState)(eG[0]),{results:a,loading:r,lastUpdated:n,refresh:l}=(0,c.useNpmSearch)({query:e.query,size:12,cacheKey:`techscope-packages-${e.id}`}),s=a??[];return(0,t.jsxs)("div",{children:[(0,t.jsx)(k,{title:"Package Radar",color:eY,description:"Trending npm packages ranked by quality, popularity, and maintenance. Filtered by topic.",lastUpdated:n,loading:r,onRefresh:l}),(0,t.jsx)(eq,{children:eG.map(a=>(0,t.jsx)(eO,{active:e.id===a.id,onClick:()=>o(a),children:a.label},a.id))}),s.length?(0,t.jsx)(eW,{children:s.map(({package:e,score:o})=>(0,t.jsxs)(eJ,{href:e.links?.npm??`https://www.npmjs.com/package/${e.name}`,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsxs)(eU,{title:e.name,children:[(0,t.jsx)(d.In,{name:"package",size:13}),e.name,(0,t.jsxs)(eZ,{children:["v",e.version]})]}),(0,t.jsx)(eX,{children:e.description||"No description."}),e.keywords&&e.keywords.length>0&&(0,t.jsx)(eQ,{children:e.keywords.slice(0,3).map(e=>(0,t.jsx)(e0,{children:e},e))}),(0,t.jsxs)(e1,{children:[(0,t.jsxs)(e5,{children:["@",e.publisher?.username??"unknown"]}),(0,t.jsx)(e4,{value:o.final,title:`Score: ${Math.round(100*o.final)}%`})]}),(0,t.jsxs)(e2,{children:[(0,t.jsxs)("span",{title:"Quality",children:["Q:",Math.round(100*o.detail.quality),"%"]}),(0,t.jsxs)("span",{title:"Popularity",children:["P:",Math.round(100*o.detail.popularity),"%"]}),(0,t.jsxs)("span",{title:"Maintenance",children:["M:",Math.round(100*o.detail.maintenance),"%"]})]})]},e.name))}):(0,t.jsx)(e3,{children:r?"Scanning npm registry...":"No packages found"})]})}let e6="#f97316",e7=["react","typescript","lodash","axios","express","next","vue","vite","tailwindcss","eslint","prettier","webpack"],e9=s().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,oe=s().a`
  display: grid;
  grid-template-columns: 20px 120px 1fr 68px;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  padding: 7px ${r.w4.spacing.sm};
  border: 1px solid ${e6}18;
  border-radius: ${r.w4.borderRadius.sm};
  background: linear-gradient(165deg, ${e6}0a 0%, ${r.w4.colors.surface} 62%, ${r.w4.colors.surface} 100%);
  text-decoration: none;
  transition: background ${r.w4.transitions.base}, border-color ${r.w4.transitions.base}, transform ${r.w4.transitions.base};

  &:hover {
    background: linear-gradient(165deg, ${e6}13 0%, ${r.w4.colors.surfaceRaised} 62%, ${r.w4.colors.surfaceRaised} 100%);
    border-color: ${e6}5a;
    transform: translateX(2px);
  }

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: 20px 90px 1fr 60px;
  }
`,oo=s().span`
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
  text-align: right;
`,oa=s().span`
  font-size: ${r.w4.typography.fontSizeSm};
  font-family: ${r.w4.typography.fontFamilyMono};
  color: ${e6};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ot=s().div`
  height: 6px;
  background: ${r.w4.colors.border};
  border-radius: 3px;
  overflow: hidden;
`,or=s().div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: ${e6};
  border-radius: 3px;
  opacity: 0.75;
  transition: width 0.4s ease;
`,oi=s().span`
  font-size: 11px;
  font-family: ${r.w4.typography.fontFamilyMono};
  color: ${r.w4.colors.mainTextMuted};
  text-align: right;
  white-space: nowrap;
`,on=s().div`
  padding: ${r.w4.spacing.xl};
  color: ${r.w4.colors.mainTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  text-align: center;
`;function ol({t:e}){let{data:o,loading:a,lastUpdated:r,refresh:i}=(0,c.useNpmDownloads)({packages:e7,period:"last-week",cacheKey:"techscope-npm-trends"}),n=o?Object.values(o).filter(e=>!!e&&e.downloads>0).map(e=>({name:e.package,downloads:e.downloads})).sort((e,o)=>o.downloads-e.downloads):[],l=n[0]?.downloads??1;return(0,t.jsxs)("div",{children:[(0,t.jsx)(k,{title:e("nav.npmPulse"),color:e6,lastUpdated:r,loading:a,onRefresh:i,t:e}),n.length?(0,t.jsx)(e9,{children:n.map((o,a)=>{var r;return(0,t.jsxs)(oe,{href:`https://www.npmjs.com/package/${o.name}`,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(oo,{children:a+1}),(0,t.jsx)(oa,{children:o.name}),(0,t.jsx)(ot,{children:(0,t.jsx)(or,{pct:Math.round(o.downloads/l*100)})}),(0,t.jsxs)(oi,{children:[(r=o.downloads)>=1e9?`${(r/1e9).toFixed(1)}B`:r>=1e6?`${(r/1e6).toFixed(1)}M`:r>=1e3?`${(r/1e3).toFixed(1)}k`:String(r)," ",e("perWeek")]})]},o.name)})}):(0,t.jsx)(on,{children:a?e("npm.loading"):e("noData")})]})}let os="#7c3aed",od=[{id:"webdev",label:"webdev"},{id:"ai",label:"AI"},{id:"typescript",label:"TS"},{id:"rust",label:"Rust"},{id:"devops",label:"DevOps"}],oc=s().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${r.w4.spacing.md};

  @media (max-width: ${r.w4.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${r.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,op=s().div`
  display: flex;
  gap: 4px;
  margin-bottom: ${r.w4.spacing.md};
  flex-wrap: wrap;
`,og=s().button`
  padding: 4px 10px;
  font-size: ${r.w4.typography.fontSizeSm};
  border-radius: ${r.w4.borderRadius.sm};
  border: 1px solid ${({active:e})=>e?os:r.w4.colors.border};
  background: ${({active:e})=>e?"rgba(124,58,237,0.12)":"transparent"};
  color: ${({active:e})=>e?os:r.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: ${r.w4.transitions.fast};
  font-family: ${r.w4.typography.fontFamilyMono};

  &:hover {
    border-color: ${os};
    color: ${os};
  }
`,om=s().a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${r.w4.spacing.md};
  background: linear-gradient(168deg, ${os}0c 0%, ${r.w4.colors.surface} 44%, ${r.w4.colors.surface} 100%);
  border: 1px solid ${os}2d;
  border-radius: ${r.w4.borderRadius.md};
  text-decoration: none;
  transition: border-color ${r.w4.transitions.base}, background ${r.w4.transitions.base}, transform ${r.w4.transitions.base}, box-shadow ${r.w4.transitions.base};
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
    background: linear-gradient(90deg, transparent, ${os}, transparent);
    opacity: 0.3;
    transition: opacity ${r.w4.transitions.base};
  }

  &:hover {
    border-color: ${os}66;
    background: linear-gradient(168deg, ${os}18 0%, ${r.w4.colors.surfaceRaised} 44%, ${r.w4.colors.surfaceRaised} 100%);
    box-shadow: 0 0 18px ${os}20, 0 8px 24px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }

  &:hover::before {
    opacity: 0.8;
  }
`,of=s().div`
  font-size: ${r.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${r.w4.colors.mainText};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,ox=s().div`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,oh=s().div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,ou=s().span`
  font-size: 11px;
  padding: 2px 7px;
  background: rgba(124,58,237,0.1);
  color: ${os};
  border-radius: 20px;
  border: 1px solid rgba(124,58,237,0.2);
`,ob=s().div`
  display: flex;
  align-items: center;
  gap: ${r.w4.spacing.sm};
  margin-top: auto;
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
`,ow=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: #e05252;
`,oy=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
`,o$=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
  opacity: 0.7;
`,ov=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-left: auto;
`,oz=s().div`
  padding: ${r.w4.spacing.xl};
  color: ${r.w4.colors.mainTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  text-align: center;
`;function ok(){let[e,o]=(0,i.useState)(od[0].id),{articles:a,loading:r,lastUpdated:n,refresh:l}=(0,c.useDevToArticles)({tag:e,top:7,perPage:8,cacheKey:`techscope-tech-articles-${e}`}),s=a??[];return(0,t.jsxs)("div",{children:[(0,t.jsx)(k,{title:"Tech Articles",color:os,description:"Popular articles from Dev.to across frontend, AI, and systems topics.",lastUpdated:n,loading:r,onRefresh:l}),(0,t.jsx)(op,{children:od.map(a=>(0,t.jsxs)(og,{active:e===a.id,onClick:()=>o(a.id),children:["#",a.label]},a.id))}),s.length?(0,t.jsx)(oc,{children:s.map(e=>{let o=e.tag_list??[];return(0,t.jsxs)(om,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(of,{children:e.title}),e.description&&(0,t.jsx)(ox,{children:e.description}),o.length>0&&(0,t.jsx)(oh,{children:o.slice(0,3).map(e=>(0,t.jsxs)(ou,{children:["#",e]},e))}),(0,t.jsxs)(ob,{children:[(0,t.jsxs)(ow,{children:[(0,t.jsx)(d.In,{name:"heart",size:11}),(0,p.aT)(e.public_reactions_count??0)]}),(0,t.jsxs)(oy,{children:[(0,t.jsx)(MessageSquare,{size:11}),e.comments_count??0]}),(0,t.jsxs)(o$,{children:[(0,t.jsx)(d.In,{name:"user",size:10}),e.user?.name??"unknown"]}),(0,t.jsxs)(ov,{children:[(0,t.jsx)(d.In,{name:"book-open",size:11}),e.reading_time_minutes??0,"m"]})]})]},e.id)})}):(0,t.jsx)(oz,{children:r?"Loading articles...":"No articles found"})]})}let oM="#f48024",oj=[{id:"",label:"All"},{id:"javascript",label:"JS"},{id:"typescript",label:"TS"},{id:"python",label:"Python"},{id:"react",label:"React"}],oA=s().div`
  display: flex;
  gap: 6px;
  margin-bottom: ${r.w4.spacing.lg};
  flex-wrap: wrap;
`,oT=s().button`
  padding: 5px 12px;
  font-size: 11px;
  border-radius: 20px;
  border: 1px solid ${({active:e})=>e?oM:r.w4.colors.border};
  background: ${({active:e})=>e?"rgba(244,128,36,0.15)":"transparent"};
  color: ${({active:e})=>e?oM:r.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: ${r.w4.transitions.fast};
  font-family: ${r.w4.typography.fontFamilyMono};
  letter-spacing: 0.01em;

  &:hover {
    border-color: ${oM};
    color: ${oM};
    background: rgba(244, 128, 36, 0.08);
  }
`,oS=s().div`
  display: flex;
  flex-direction: column;
`,oF=s().a`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 8px;
  border-radius: ${r.w4.borderRadius.md};
  text-decoration: none;
  transition: background ${r.w4.transitions.fast}, transform ${r.w4.transitions.base};
  border-bottom: 1px solid ${r.w4.colors.border};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: translateX(2px);
  }
`,oB=s().span`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${({answered:e})=>e?"rgba(63,185,80,0.5)":r.w4.colors.border};
  background: ${({answered:e})=>e?"rgba(35,134,54,0.15)":"transparent"};
  color: ${({answered:e})=>e?"#3fb950":r.w4.colors.mainTextMuted};
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
`,oR=s().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,oP=s().div`
  font-size: ${r.w4.typography.fontSizeBase};
  color: ${r.w4.colors.mainText};
  line-height: 1.45;
`,oH=s().div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamilyMono};
  flex-wrap: wrap;
`,oC=s().span`
  color: ${({negative:e})=>e?"#e05252":oM};
  font-weight: 600;
`,oL=s().span`
  display: flex;
  align-items: center;
  gap: 3px;
  opacity: 0.7;
`,oI=s().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,oD=s().span`
  font-size: 11px;
  padding: 2px 6px;
  background: rgba(244, 128, 36, 0.08);
  color: ${r.w4.colors.mainTextMuted};
  border-radius: 4px;
  border: 1px solid rgba(244, 128, 36, 0.15);
  letter-spacing: 0.01em;
`,oE=s().span`
  margin-left: auto;
  white-space: nowrap;
`,oV=s().div`
  padding: ${r.w4.spacing.xl};
  color: ${r.w4.colors.mainTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  text-align: center;
`;function o_(){let[e,o]=(0,i.useState)(""),{questions:a,loading:r,lastUpdated:n,refresh:l}=(0,c.useStackExchangeHot)({tagged:e||void 0,pageSize:10,sort:"hot",order:"desc",cacheKey:`techscope-dev-pulse-${e||"all"}`}),s=a??[];return(0,t.jsxs)("div",{children:[(0,t.jsx)(k,{title:"Dev Pulse",color:oM,description:"Hot questions from Stack Overflow sorted by activity, filterable by language or framework.",lastUpdated:n,loading:r,onRefresh:l}),(0,t.jsx)(oA,{children:oj.map(a=>(0,t.jsx)(oT,{active:e===a.id,onClick:()=>o(a.id),children:a.label},a.id))}),s.length?(0,t.jsx)(oS,{children:s.map(e=>{let o=e.creation_date?new Date(1e3*e.creation_date).toISOString():"",a=e.is_answered??!1;return(0,t.jsxs)(oF,{href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(oB,{answered:a,children:a?"✓":"?"}),(0,t.jsxs)(oR,{children:[(0,t.jsx)(oP,{children:(0,p.iT)(e.title)}),(0,t.jsxs)(oH,{children:[(0,t.jsxs)(oC,{negative:e.score<0,children:[e.score>0?"+":"",(0,p.aT)(e.score)," votes"]}),(0,t.jsxs)("span",{children:[e.answer_count??0," ans"]}),(0,t.jsxs)(oL,{children:[(0,t.jsx)(d.In,{name:"eye",size:10}),(0,p.aT)(e.view_count??0)]}),(0,t.jsx)(oI,{children:(e.tags??[]).slice(0,3).map(e=>(0,t.jsx)(oD,{children:e},e))}),(0,t.jsx)(oE,{children:o?(0,p.fF)(o):""})]})]})]},e.question_id)})}):(0,t.jsx)(oV,{children:r?"Fetching hot questions...":"No questions found"})]})}function oN({category:e,t:o}){return(0,t.jsxs)(r.wi,{children:["github"===e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.KW,{id:"live-pulse",children:(0,t.jsx)(r.PH,{children:(0,t.jsx)(I,{t:o})})}),(0,t.jsx)(r.KW,{id:"experiment-zone",children:(0,t.jsx)(r.PH,{children:(0,t.jsx)(eo,{t:o})})})]}),"hackernews"===e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.pB,{children:[(0,t.jsx)(r.KW,{id:"today-in-tech",children:(0,t.jsx)(r.PH,{style:{height:"100%"},children:(0,t.jsx)(ef,{t:o})})}),(0,t.jsx)(r.KW,{id:"ai-radar",children:(0,t.jsx)(r.PH,{style:{height:"100%"},children:(0,t.jsx)(ej,{t:o})})})]}),(0,t.jsx)(r.KW,{id:"community-feed",children:(0,t.jsx)(r.PH,{children:(0,t.jsx)(eK,{})})})]}),"packages"===e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.KW,{id:"package-radar",children:(0,t.jsx)(r.PH,{children:(0,t.jsx)(e8,{})})}),(0,t.jsx)(r.KW,{id:"npm-trends",children:(0,t.jsx)(r.PH,{children:(0,t.jsx)(ol,{t:o})})})]}),"devcommunity"===e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.KW,{id:"tech-articles",children:(0,t.jsx)(r.PH,{children:(0,t.jsx)(ok,{})})}),(0,t.jsx)(r.KW,{id:"dev-pulse",children:(0,t.jsx)(r.PH,{children:(0,t.jsx)(o_,{})})})]})]})}},8108(e,o,a){a.d(o,{A:()=>el});var t=a(5723),r=a(7991),i=a(6859),n=a.n(i),l=a(2799),s=a(8395),d=a(9874),c=a(3711),p=a(9522);let g=(0,l.keyframes)`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`,m=n().div`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.sm};
`,f=n().div`
  display: grid;
  grid-template-columns: 100px 1fr 52px;
  align-items: center;
  gap: ${d.w4.spacing.sm};

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 80px 1fr 44px;
  }
`,x=n().span`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,h=n().div`
  height: 18px;
  background: ${d.w4.colors.codeBg};
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`,u=n().div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: linear-gradient(90deg, ${({color:e})=>e}66, ${({color:e})=>e});
  border-radius: 3px;
  transform-origin: left center;
  animation: ${g} 0.6s ease forwards;
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
`,b=n().span`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  font-weight: 600;
  color: ${({color:e})=>e};
  text-align: right;
`;function w({bars:e}){let o=Math.max(...e.map(e=>e.value),1);return(0,t.jsx)(m,{children:e.map((e,a)=>(0,t.jsxs)(f,{children:[(0,t.jsx)(x,{children:e.label}),(0,t.jsx)(h,{children:(0,t.jsx)(u,{pct:Math.round(e.value/o*100),color:e.color,delay:.1*a})}),(0,t.jsx)(b,{color:e.color,children:e.value})]},e.label))})}let y=[{id:"github",label:"GitHub",color:"#3fb950",panels:["live-pulse","experiment-zone"],desc:"Trending repos & rising projects"},{id:"hackernews",label:"Hacker News",color:"#ff6600",panels:["today-in-tech","ai-radar","community-feed"],desc:"Front page, AI & community"},{id:"packages",label:"Packages",color:"#cb3837",panels:["package-radar","npm-trends"],desc:"npm search & download stats"},{id:"devcommunity",label:"Dev Community",color:"#7c3aed",panels:["tech-articles","dev-pulse"],desc:"Articles & hot questions"}],$=(0,l.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,v=(0,l.keyframes)`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;(0,l.keyframes)`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;let z=n().div`
  padding: 0 ${d.w4.spacing.xl} ${d.w4.spacing.xxl};
  max-width: 1100px;
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
  margin: 0 auto;

  @media (max-width: ${d.w4.breakpoints.md}) {
    padding: 0 ${d.w4.spacing.md} ${d.w4.spacing.xl};
  }
`,k=n().header`
  text-align: center;
  padding: ${d.w4.spacing.xxl} 0 ${d.w4.spacing.lg};
  margin-bottom: ${d.w4.spacing.lg};
  animation: ${v} 0.6s ease;
  position: relative;
`,M=n().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: ${d.w4.spacing.sm};
`,j=n().h1`
  font-size: 48px;
  font-weight: 800;
  color: ${d.w4.colors.mainText};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 2px;
  line-height: 1;
  background: linear-gradient(135deg, ${d.w4.colors.mainText} 0%, ${d.w4.colors.accent} 50%, ${d.w4.colors.mainText} 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${d.w4.breakpoints.md}) {
    font-size: 28px;
  }
`,A=n().div`
  height: 3px;
  background: linear-gradient(90deg, transparent, ${d.w4.colors.border}, ${d.w4.colors.accent}40, ${d.w4.colors.border}, transparent);
  margin: ${d.w4.spacing.md} 0;
`,T=n().div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${d.w4.spacing.lg};
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  flex-wrap: wrap;
`,S=n().span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: rgba(63, 185, 80, 0.08);
  border: 1px solid rgba(63, 185, 80, 0.25);
  border-radius: 20px;
  color: #3fb950;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
`,F=n().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #3fb950;
  animation: ${$} 2s ease-in-out infinite;
  box-shadow: 0 0 6px #3fb95080;
`,B=n().div`
  height: 1px;
  background: ${d.w4.colors.border};
  margin: ${d.w4.spacing.lg} 0;
`,R=n().section`
  animation: ${v} 0.5s ease both;
  animation-delay: ${({delay:e})=>(e??0)*.12}s;
`,P=n().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.sm};
  margin-bottom: ${d.w4.spacing.md};
`,H=n().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  box-shadow: 0 0 8px ${({color:e})=>e}60;
  flex-shrink: 0;
`,C=n().span`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${({color:e})=>e??d.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 600;
`,L=n().span`
  flex: 1;
  height: 1px;
  background: ${d.w4.colors.border};
`,I=n().div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: ${d.w4.spacing.lg};
  margin-bottom: ${d.w4.spacing.lg};

  @media (max-width: ${d.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`,D=n().div`
  background: linear-gradient(180deg, transparent, ${d.w4.colors.border}, transparent);

  @media (max-width: ${d.w4.breakpoints.lg}) {
    display: none;
  }
`,E=n().a`
  display: flex;
  flex-direction: column;
  gap: ${d.w4.spacing.md};
  padding: ${d.w4.spacing.lg};
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  text-decoration: none;
  transition: border-color ${d.w4.transitions.slow}, transform ${d.w4.transitions.slow}, box-shadow ${d.w4.transitions.slow};
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
`,V=n().div`
  font-size: 9px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: #3fb950;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  display: flex;
  align-items: center;
  gap: 6px;
`,_=n().div`
  font-size: 22px;
  font-weight: 700;
  color: ${d.w4.colors.mainText};
  line-height: 1.2;
  font-family: ${d.w4.typography.fontFamilyMono};
`,N=n().div`
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainTextMuted};
  line-height: 1.65;
  flex: 1;
`,K=n().div`
  display: flex;
  align-items: center;
  gap: ${d.w4.spacing.md};
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${d.w4.colors.mainTextMuted};
  margin-top: auto;
  padding-top: ${d.w4.spacing.sm};
  border-top: 1px solid ${d.w4.colors.border};
`,Y=n().span`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #d29922;
  font-weight: 600;
`,G=n().span`
  display: flex;
  align-items: center;
  gap: 4px;
`,q=n().div`
  display: flex;
  flex-direction: column;
`,O=n().a`
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 11px 0;
  text-decoration: none;
  border-bottom: 1px solid ${d.w4.colors.border}80;
  transition: background ${d.w4.transitions.base}, padding-left ${d.w4.transitions.base};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    padding-left: 6px;
  }
`,W=n().span`
  font-size: 18px;
  font-weight: 800;
  color: #ff660030;
  font-family: ${d.w4.typography.fontFamilyMono};
  min-width: 24px;
  text-align: right;
  flex-shrink: 0;
  line-height: 1;
`,J=n().div`
  flex: 1;
  min-width: 0;
`,U=n().div`
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainText};
  line-height: 1.4;
  margin-bottom: 3px;
`,Z=n().div`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  font-family: ${d.w4.typography.fontFamilyMono};
  display: flex;
  align-items: center;
  gap: 8px;
`,X=n().div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${d.w4.spacing.md};
  margin-bottom: ${d.w4.spacing.xl};

  @media (max-width: ${d.w4.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${d.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Q=n().button`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.lg} ${d.w4.spacing.md};
  text-align: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: border-color ${d.w4.transitions.slow}, transform ${d.w4.transitions.slow}, box-shadow ${d.w4.transitions.slow};
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
    transition: opacity ${d.w4.transitions.base};
  }

  &:hover {
    border-color: ${({accentColor:e})=>e}50;
    transform: translateY(-3px);
    box-shadow: 0 0 20px ${({accentColor:e})=>e}18, 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  &:hover::before {
    opacity: 1;
  }
`,ee=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
`,eo=n().div`
  font-size: ${d.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${d.w4.colors.mainText};
`,ea=n().div`
  font-size: 20px;
  font-weight: 800;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${({color:e})=>e};
  opacity: 0.7;
`,et=n().div`
  font-size: 11px;
  color: ${d.w4.colors.mainTextMuted};
  margin-bottom: ${d.w4.spacing.xs};
`,er=n().div`
  font-size: 11px;
  font-family: ${d.w4.typography.fontFamilyMono};
  color: ${({color:e})=>e};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: auto;
  padding-top: ${d.w4.spacing.sm};
  opacity: 0.8;
  transition: transform ${d.w4.transitions.base};

  button:hover > & {
    transform: translateX(3px);
  }
`,ei=n().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.lg};
  margin-bottom: ${d.w4.spacing.lg};
`,en=n().div`
  background: ${d.w4.colors.surface};
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.lg};
  padding: ${d.w4.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${d.w4.colors.mainTextMuted};
  font-size: ${d.w4.typography.fontSizeSm};
  min-height: 180px;
  font-family: ${d.w4.typography.fontFamilyMono};
  letter-spacing: 0.04em;

  &::before {
    content: '//  ';
    opacity: 0.3;
  }
`;function el({onNavigate:e,t:o}){let{result:a}=(0,c.useRepoSearch)({query:`created:>${(0,p.VF)(7)}`,sort:"stars",perPage:1,cacheKey:"techscope-journal-hero"}),{hits:i}=(0,c.useHnFrontPage)({hitsPerPage:6,cacheKey:"techscope-journal-hn"}),n=a?.items?.[0]??null,l=i??[],[g,m]=(0,r.useState)({});(0,r.useEffect)(()=>{Promise.all(["live-pulse","experiment-zone","today-in-tech","ai-radar","community-feed","package-radar","npm-trends","tech-articles","dev-pulse"].map(e=>(0,d.PL)(`ts:count:${e}`).then(o=>[e,Number(o??0)]))).then(e=>m(Object.fromEntries(e)))},[]);let f=e=>e.reduce((e,o)=>e+(g[o]??0),0),x=y.map(e=>({label:e.label,value:f(e.panels),color:e.color})),h=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),u=y.reduce((e,o)=>e+o.panels.length,0),b=x.some(e=>e.value>0);return(0,t.jsxs)(z,{children:[(0,t.jsxs)(k,{children:[(0,t.jsx)(M,{children:o("journal.title")}),(0,t.jsx)(j,{children:"TechScope"}),(0,t.jsx)(A,{}),(0,t.jsxs)(T,{children:[(0,t.jsx)("span",{children:h}),(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsxs)(S,{children:[(0,t.jsx)(F,{}),o("journal.live")," — ",u," ",o("journal.feedsActive")]})]})]}),(0,t.jsx)(R,{delay:1,children:(0,t.jsxs)(I,{children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(H,{color:"#3fb950"}),(0,t.jsx)(C,{color:"#3fb950",children:o("journal.headline")}),(0,t.jsx)(L,{})]}),n?(0,t.jsxs)(E,{href:n.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(s.In,{name:"zap",size:10})," Trending this week"]}),(0,t.jsx)(_,{children:n.full_name}),(0,t.jsx)(N,{children:n.description??o("noDescription")}),(0,t.jsxs)(K,{children:[(0,t.jsxs)(Y,{children:[(0,t.jsx)(s.In,{name:"star",size:12}),(0,p.Bz)(n.stargazers_count)]}),n.language&&(0,t.jsx)(G,{children:n.language}),(0,t.jsx)(s.In,{name:"external-link",size:10,style:{marginLeft:"auto",opacity:.4}})]})]}):(0,t.jsx)(en,{children:o("livePulse.loading")})]}),(0,t.jsx)(D,{}),(0,t.jsxs)(q,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(H,{color:"#ff6600"}),(0,t.jsx)(C,{color:"#ff6600",children:o("journal.topStories")}),(0,t.jsx)(L,{})]}),l.length>0?l.map((e,o)=>{let a=e.url??`https://news.ycombinator.com/item?id=${e.objectID}`;return(0,t.jsxs)(O,{index:o,href:a,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(W,{children:o+1}),(0,t.jsxs)(J,{children:[(0,t.jsx)(U,{children:e.title}),(0,t.jsxs)(Z,{children:[(0,t.jsxs)("span",{style:{color:"#ff6600",fontWeight:600},children:[e.points??0," pts"]}),(0,t.jsxs)("span",{children:[e.num_comments??0," comments"]}),(0,t.jsx)("span",{style:{opacity:.5},children:(0,p.FB)(e.url)})]})]})]},e.objectID)}):(0,t.jsx)(en,{children:o("todayInTech.loading")})]})]})}),(0,t.jsx)(B,{}),(0,t.jsxs)(R,{delay:2,children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(H,{color:d.w4.colors.accent}),(0,t.jsx)(C,{children:o("journal.categories")}),(0,t.jsx)(L,{})]}),(0,t.jsx)(X,{children:y.map(o=>{let a=f(o.panels);return(0,t.jsxs)(Q,{accentColor:o.color,onClick:()=>e(o.id),children:[(0,t.jsxs)(ee,{children:[(0,t.jsx)(eo,{children:o.label}),(0,t.jsx)(ea,{color:o.color,children:a||""})]}),(0,t.jsx)(et,{children:o.desc}),(0,t.jsxs)(er,{color:o.color,children:[o.panels.length," feeds ",(0,t.jsx)(s.In,{name:"chevron-right",size:12})]})]},o.id)})})]}),b&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(B,{}),(0,t.jsxs)(R,{delay:3,children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(H,{color:d.w4.colors.accent}),(0,t.jsx)(C,{children:o("journal.activity")}),(0,t.jsx)(L,{})]}),(0,t.jsx)(ei,{children:(0,t.jsx)(w,{bars:x})})]})]})]})}},9522(e,o,a){function t(e){return e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}function r(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}function i(e){let o=Math.floor((Date.now()-new Date(e).getTime())/6e4);if(o<1)return"just now";if(o<60)return`${o}m ago`;let a=Math.floor(o/60);return a<24?`${a}h ago`:`${Math.floor(a/24)}d ago`}function n(e){let o=document.createElement("textarea");return o.innerHTML=e,o.value}function l(e){let o=new Date;return o.setDate(o.getDate()-e),o.toISOString().split("T")[0]}function s(e){if(!e)return"news.ycombinator.com";try{return new URL(e).hostname.replace(/^www\./,"")}catch{return""}}a.d(o,{Bz:()=>t,FB:()=>s,VF:()=>l,aT:()=>r,fF:()=>i,iT:()=>n}),a(7991),a(9874)},948(e,o,a){a.d(o,{A:()=>t});let t={"nav.journal":{en:"Journal",pt:"Jornal"},"nav.github":{en:"GitHub",pt:"GitHub"},"nav.hackernews":{en:"Hacker News",pt:"Hacker News"},"nav.packages":{en:"Packages",pt:"Packages"},"nav.devCommunity":{en:"Dev Community",pt:"Comunidade Dev"},"nav.livePulse":{en:"Live Pulse",pt:"Pulso ao Vivo"},"nav.aiRadar":{en:"AI Radar",pt:"Radar IA"},"nav.todayInTech":{en:"Today in Tech",pt:"Hoje em Tech"},"nav.experimentZone":{en:"Experiment Zone",pt:"Zona Experimental"},"nav.npmPulse":{en:"npm Pulse",pt:"Pulso npm"},"nav.packageRadar":{en:"Package Radar",pt:"Radar de Packages"},"nav.communityFeed":{en:"Community Feed",pt:"Feed da Comunidade"},"nav.devPulse":{en:"Dev Pulse",pt:"Pulso Dev"},"nav.techArticles":{en:"Tech Articles",pt:"Artigos Tech"},"journal.title":{en:"Internet Control Panel",pt:"Painel de Controlo da Internet"},"journal.activity":{en:"Activity Overview",pt:"Vis\xe3o Geral de Atividade"},"journal.headline":{en:"Headline",pt:"Destaque"},"journal.topStories":{en:"Top Stories",pt:"Principais Not\xedcias"},"journal.categories":{en:"Categories",pt:"Categorias"},"journal.items":{en:"items",pt:"itens"},"journal.feedsActive":{en:"feeds active",pt:"feeds ativos"},"journal.open":{en:"Open",pt:"Abrir"},"journal.live":{en:"LIVE",pt:"AO VIVO"},"livePulse.loading":{en:"Loading trending repos...",pt:"A carregar repos em destaque..."},"aiRadar.loading":{en:"Scanning AI activity...",pt:"A analisar atividade IA..."},"aiRadar.empty":{en:"No AI stories in the last 48h",pt:"Sem artigos IA nas \xfaltimas 48h"},"todayInTech.loading":{en:"Loading front page...",pt:"A carregar primeira p\xe1gina..."},"todayInTech.empty":{en:"No stories available",pt:"Sem artigos dispon\xedveis"},"experiment.loading":{en:"Scanning experimental repos...",pt:"A procurar repos experimentais..."},"npm.loading":{en:"Fetching download stats...",pt:"A obter estat\xedsticas..."}}},8170(e,o,a){a.d(o,{Ym:()=>c,Nx:()=>p,aw:()=>g,lw:()=>m});var t=a(7991),r=a(9874);let i={"time.justNow":{en:"just now",pt:"agora mesmo"},"time.mAgo":{en:"{n}m ago",pt:"h\xe1 {n}m"},"time.hAgo":{en:"{n}h ago",pt:"h\xe1 {n}h"},"time.dAgo":{en:"{n}d ago",pt:"h\xe1 {n}d"},updated:{en:"updated {age}",pt:"atualizado {age}"},refresh:{en:"Refresh",pt:"Atualizar"},loading:{en:"Loading…",pt:"A carregar…"},noData:{en:"No data available",pt:"Sem dados dispon\xedveis"},noDescription:{en:"No description provided.",pt:"Sem descri\xe7\xe3o."},failedToFetch:{en:"Failed to fetch",pt:"Erro ao carregar"},perWeek:{en:"/ wk",pt:"/ sem"},"devtools.heading":{en:"Dev Tools",pt:"Ferramentas"},"devtools.playground":{en:"Playground",pt:"Playground"},"devtools.pad":{en:"Pad",pt:"Pad"},"devtools.charts":{en:"Charts",pt:"Gr\xe1ficos"},"devtools.csv":{en:"CSV",pt:"CSV"},"devtools.regex":{en:"Regex",pt:"Regex"},"devtools.json":{en:"JSON",pt:"JSON"},"devtools.diff":{en:"Diff",pt:"Diferen\xe7as"},"devtools.jwt":{en:"JWT",pt:"JWT"},"devtools.cron":{en:"Cron",pt:"Cron"},"devtools.colors":{en:"Colors",pt:"Cores"},"devtools.api":{en:"API",pt:"API"}},n="atlantis:locale",l="shell:locale";function s(e){return"en"===e||"pt"===e}function d(){try{let e=localStorage.getItem(n);if(s(e))return e}catch{}return"en"}function c(){let[e,o]=(0,t.useState)(d),a=(0,t.useCallback)(e=>{o(e);try{localStorage.setItem(n,e)}catch{}(0,r.Is)(l,e).catch(()=>{}),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,t.useEffect)(()=>{let e=e=>{o(e.detail)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,t.useEffect)(()=>{(0,r.PL)(l).then(a=>{if(s(a)&&a!==e){try{localStorage.setItem(n,a)}catch{}o(a)}}).catch(()=>{})},[]),[e,a]}function p(e,o){let a=o?{...i,...o}:i;return(o,t)=>{let r=function(e,o){if(!o||!e.includes("|"))return e;let a=null;for(let e of Object.values(o))if("number"==typeof e&&Number.isFinite(e)){a=e;break}if(null===a)return e;let t=e.indexOf("|"),r=e.slice(0,t),i=e.slice(t+1);return 1===a?r:i}(a[o]?.[e]??o,t);return t?Object.entries(t).reduce((e,[o,a])=>e.replace(RegExp(`\\{${o}\\}`,"g"),String(a)),r):r}}function g(e,o){let a=Math.floor((Date.now()-new Date(e).getTime())/6e4);if(a<1)return o("time.justNow");if(a<60)return o("time.mAgo",{n:a});let t=Math.floor(a/60);return t<24?o("time.hAgo",{n:t}):o("time.dAgo",{n:Math.floor(t/24)})}function m(e,o){let a=Math.floor((Date.now()-e.getTime())/6e4);return a<1?o("time.justNow"):a<60?o("time.mAgo",{n:a}):o("time.hAgo",{n:Math.floor(a/60)})}(0,r.PL)(l).then(e=>{if(s(e))try{localStorage.setItem(n,e)}catch{}}).catch(()=>{}),a(5723);var f=a(6859),x=a.n(f);x().div`
  display: flex;
  gap: 4px;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  padding: 2px;
`,x().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${r.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${r.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?r.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":r.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":r.w4.colors.mainText};
  }
`},8859(e,o,a){a.d(o,{FlyoutPanel:()=>w});var t=a(5723),r=a(7991),i=a.n(r),n=a(6859),l=a.n(n),s=a(2799),d=a(1316),c=a(814),p=a(6140);let g=(0,s.keyframes)`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,m=l().div`
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
`,x=l().button`
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
`,h=({size:e=14,strokeWidth:o=1.75})=>(0,t.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,t.jsx)("polyline",{points:"14 2 14 8 20 8"})]});function u({iconKey:e}){let o=e?p.t[e]:null;return o?(0,t.jsx)(o,{size:14,strokeWidth:1.75}):(0,t.jsx)(h,{})}function b({entries:e,activeId:o,onSelect:a}){return(0,t.jsx)(t.Fragment,{children:e.map(e=>e.children?(0,t.jsx)(i().Fragment,{children:(0,t.jsx)(b,{entries:e.children,activeId:o,onSelect:a})},e.id):(0,t.jsxs)(x,{active:o===e.id,onClick:()=>a(e),children:[(0,t.jsx)(u,{iconKey:e.icon}),e.name]},e.id))})}function w({activeId:e}){let{flyout:o,scheduleFlyoutClose:a,cancelFlyoutClose:r}=(0,c.c)();if(!o)return null;let i=o.entry.icon?p.t[o.entry.icon]:null;return(0,t.jsxs)(m,{anchorY:o.anchorY,onMouseEnter:r,onMouseLeave:a,children:[(0,t.jsxs)(f,{children:[i?(0,t.jsx)(i,{size:13,strokeWidth:2}):(0,t.jsx)(h,{size:13,strokeWidth:2}),o.entry.name]}),(0,t.jsx)(b,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),a()}})]})}},814(e,o,a){a.d(o,{I:()=>r,c:()=>i});var t=a(7991);let r=(0,t.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,t.useContext)(r)},6140(e,o,a){a.d(o,{t:()=>eb});var t=a(6896),r=a(7902),i=a(3013),n=a(2887),l=a(9510),s=a(9848),d=a(7901),c=a(3045),p=a(3775),g=a(1783),m=a(3539),f=a(9416),x=a(1837),h=a(7167),u=a(4494),b=a(2314),w=a(255),y=a(5751),$=a(9633),v=a(2946),z=a(822),k=a(6720),M=a(7400),j=a(8456),A=a(3317),T=a(2709),S=a(8006),F=a(9301),B=a(7561),R=a(3517),P=a(8207),H=a(7032),C=a(6949),L=a(8218),I=a(6829),D=a(9591),E=a(5553),V=a(9923),_=a(2820),N=a(4621),K=a(8479),Y=a(2534),G=a(6673),q=a(7490),O=a(9033),W=a(9038),J=a(5775),U=a(1365),Z=a(2937),X=a(9821),Q=a(5912),ee=a(158),eo=a(8641),ea=a(8607),et=a(3249),er=a(1821),ei=a(5889),en=a(9655),el=a(7170),es=a(9161),ed=a(1849),ec=a(1604),ep=a(3142),eg=a(1187),em=a(7747),ef=a(2932),ex=a(4525),eh=a(7230),eu=a(2164);let eb={activity:t.A,"a-large-small":r.A,apple:i.A,"arrow-right":n.A,"bar-chart-2":l.A,book:s.A,"book-open":d.A,briefcase:c.A,calendar:p.A,clock:g.A,"circle-dot":m.A,cloud:f.A,compass:x.A,cpu:h.A,droplets:u.A,feather:b.A,file:w.A,"file-text":y.A,folder:$.A,"git-branch":v.A,github:z.A,globe:k.A,grid:M.A,hand:j.A,hash:A.A,heart:T.A,key:S.A,hexagon:F.A,home:B.A,landmark:R.A,layers:P.A,"layout-grid":H.A,leaf:C.A,lightbulb:L.A,list:I.A,map:D.A,"map-pin":E.A,"message-circle":V.A,"message-square":_.A,minus:N.A,monitor:K.A,mountain:Y.A,package:G.A,palette:q.A,"pen-tool":O.A,"pie-chart":W.A,plane:J.A,plus:U.A,ruler:Z.A,shirt:X.A,slash:Q.A,square:ee.A,star:eo.A,sun:ea.A,terminal:et.A,thermometer:er.A,triangle:ei.A,trophy:en.A,truck:el.A,type:es.A,users:ed.A,"volume-2":ec.A,watch:ep.A,waves:eg.A,wind:em.A,wrench:ef.A,x:ex.A,zap:eh.A,bot:eu.A}},9874(e,o,a){a.d(o,{w4:()=>t.w4,CD:()=>K,Is:()=>G.putSetting,pB:()=>Z,wi:()=>W,PH:()=>U,KW:()=>J,PE:()=>F,PL:()=>G.getSetting});var t=a(1316),r=a(5723),i=a(7991),n=a.n(i),l=a(6859),s=a.n(l);s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${t.w4.spacing.sm};
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,s().div`
  position: relative;
`;var d=a(2799),c=a(814);let p="260px",g="56px",m="48px",f=s().header`
  display: flex;
  align-items: center;
  height: calc(${m} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);

  /* Mobile: logo + app label on row 1, scrollable chrome cluster on row 2. */
  @media (max-width: ${t.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(${m} + env(safe-area-inset-top, 0px));
  }
`,x=s().div`
  width: ${g};
  min-width: ${g};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${t.w4.breakpoints.md}) {
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
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,u=(0,d.keyframes)`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,b=s().button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${t.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,w=s().span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${u} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`
    background: linear-gradient(135deg, ${t.w4.colors.accent}, ${t.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`,y=s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  padding-left: ${t.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 0;

  &::before {
    content: '/';
    margin-right: ${t.w4.spacing.sm};
    color: ${t.w4.colors.border};
  }
`,$=s().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${t.w4.spacing.md};
  padding: 0 ${t.w4.spacing.lg};
  min-width: 0;

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${t.w4.spacing.sm};
  }

  /* Full-width second row on mobile, horizontally scrollable.
     Align to the right so the avatar / bell stay flush with the
     viewport edge — matches desktop end-alignment. */
  @media (max-width: ${t.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    justify-content: flex-end;
    padding: ${t.w4.spacing.xs} ${t.w4.spacing.sm};
    gap: ${t.w4.spacing.xs};
    border-top: 1px solid ${t.w4.colors.sidebarBorder};
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
`,z=s().div`
  display: flex;
  flex-direction: column;
  height: ${t.w4.sizes.fullHeight};
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,k=s().aside`
  width: ${({collapsed:e})=>e?g:p};
  min-width: ${({collapsed:e})=>e?g:p};
  background: ${t.w4.colors.sidebarBg};
  border-right: 1px solid ${t.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${t.w4.breakpoints.md}) {
    display: none;
  }
`,M=s().div`
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
`,A=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function T(){return(0,r.jsx)(b,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:A.map((e,o)=>(0,r.jsx)(w,{index:o,accent:e.accent,children:e.char},o))})}let S="atlantis:sidebar-collapsed";function F({sidebar:e,children:o,topBarRight:t,title:l="Atlantis",activeId:s=null}){let[d,p]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem(S)}catch{return!1}}),[g,m]=(0,i.useState)(null),u=(0,i.useRef)(),b=()=>p(e=>{let o=!e;try{localStorage.setItem(S,String(o))}catch{}return o}),w=n().useMemo(()=>n().lazy(()=>Promise.resolve().then(a.bind(a,8859)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,r.jsx)(c.I.Provider,{value:{collapsed:d,toggle:b,flyout:g,openFlyout:(e,o,a)=>{clearTimeout(u.current),m({entry:e,anchorY:o,onSelect:a})},scheduleFlyoutClose:()=>{u.current=setTimeout(()=>m(null),160)},cancelFlyoutClose:()=>clearTimeout(u.current)},children:(0,r.jsxs)(z,{children:[(0,r.jsxs)(f,{children:[e&&(0,r.jsx)(x,{children:(0,r.jsx)(h,{onClick:b,title:d?"Expand sidebar":"Collapse sidebar",children:(0,r.jsxs)("svg",{width:17,height:17,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),(0,r.jsx)("path",{d:"M9 3v18"})]})})}),(0,r.jsx)(T,{}),l&&(0,r.jsx)(y,{children:l}),t&&(0,r.jsx)($,{children:t})]}),(0,r.jsxs)(v,{children:[null!=e&&(0,r.jsx)(k,{collapsed:d,children:(0,r.jsx)(M,{children:e})}),(0,r.jsx)(j,{children:o})]}),g&&(0,r.jsx)(n().Suspense,{fallback:null,children:(0,r.jsx)(w,{activeId:s})})]})})}var B=a(6140);let R=s().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,P=s().div`
  overflow: hidden;
`,H=s().div`
  padding-left: ${t.w4.spacing.md};
`,C=s().div`
  display: flex;
  flex-direction: column;
`,L=s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${t.w4.spacing.sm} ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":t.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${t.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${t.w4.colors.sidebarText};
    background: ${t.w4.colors.sidebarHover};
  }
`,I=s().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,D=s().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,E=s().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${t.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,V=s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${t.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?t.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?t.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?t.w4.colors.sidebarActive:t.w4.colors.sidebarText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${t.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${t.w4.borderRadius.md} ${t.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.mainText};
  }
`;function _({iconKey:e,size:o=16}){if(e&&!(e in B.t))return(0,r.jsx)("span",{style:{fontSize:o,lineHeight:1,display:"flex",alignItems:"center"},children:e});let a=e?B.t[e]:null;return a?(0,r.jsx)(a,{size:o,strokeWidth:1.75}):(0,r.jsxs)("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,r.jsx)("polyline",{points:"14 2 14 8 20 8"})]})}function N({entry:e,activeId:o,onSelect:a}){let[t,n]=(0,i.useState)(e.defaultOpen??!0),{collapsed:l,openFlyout:s,scheduleFlyoutClose:d,cancelFlyoutClose:p}=(0,c.c)();return e.children&&e.children.length>0?(0,r.jsxs)(C,{children:[(0,r.jsxs)(L,{collapsed:l,onClick:()=>{l||n(e=>!e)},onMouseEnter:l?o=>{s(e,o.currentTarget.getBoundingClientRect().top,a)}:void 0,onMouseLeave:l?d:void 0,children:[(0,r.jsxs)(I,{collapsed:l,children:[(0,r.jsx)(_,{iconKey:e.icon,size:16}),(0,r.jsx)(D,{collapsed:l,children:e.name})]}),(0,r.jsx)(E,{open:t,collapsed:l,children:(0,r.jsx)("svg",{width:13,height:13,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:"M9 6l6 6-6 6"})})})]}),(0,r.jsx)(R,{open:t&&!l,children:(0,r.jsx)(P,{children:(0,r.jsx)(H,{children:e.children.map(e=>(0,r.jsx)(N,{entry:e,activeId:o,onSelect:a},e.id))})})})]}):(0,r.jsxs)(V,{active:o===e.id,collapsed:l,onClick:()=>a(e),onMouseEnter:l?o=>{let t=o.currentTarget.getBoundingClientRect();s({id:e.id,name:e.name,icon:e.icon,file:e.file,children:[e]},t.top,a)}:void 0,onMouseLeave:l?d:void 0,children:[(0,r.jsx)(_,{iconKey:e.icon,size:15}),(0,r.jsx)(D,{collapsed:l,children:e.name})]})}function K({entries:e,activeId:o,onSelect:a}){return(0,r.jsx)("div",{children:e.map(e=>(0,r.jsx)(N,{entry:e,activeId:o,onSelect:a},e.id))})}let Y=(0,d.keyframes)`
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
    border-right-color: ${t.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${t.w4.colors.surface};
  }
`,s().span`
  display: block;
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${t.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${t.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${t.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${t.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,a(8859),s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  cursor: pointer;
  color: ${t.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    color: ${t.w4.colors.accent};
    border-color: ${t.w4.colors.accent};
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
`,[{id:"europe",name:"Europe",icon:"\uD83C\uDF0D",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"lourinha",name:"Lourinh\xe3",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"\uD83C\uDDEC\uD83C\uDDE7",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"\uD83C\uDDEB\uD83C\uDDF7",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"\uD83C\uDDE9\uD83C\uDDEA",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"\uD83C\uDDEA\uD83C\uDDF8",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"\uD83C\uDDEE\uD83C\uDDF9",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"\uD83C\uDDF3\uD83C\uDDF1",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"\uD83C\uDDEC\uD83C\uDDF7",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"\uD83C\uDDE7\uD83C\uDDEA",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"\uD83C\uDDE6\uD83C\uDDF9",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"\uD83C\uDDF5\uD83C\uDDF1",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"\uD83C\uDDF8\uD83C\uDDEA",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"\uD83C\uDDF3\uD83C\uDDF4",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"\uD83C\uDDE9\uD83C\uDDF0",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"\uD83C\uDDEB\uD83C\uDDEE",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"\uD83C\uDDEE\uD83C\uDDF8",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"\uD83C\uDDEE\uD83C\uDDEA",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"\uD83C\uDDE8\uD83C\uDDED",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"\uD83C\uDDFA\uD83C\uDDE6",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"\uD83C\uDDF7\uD83C\uDDFA",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"\uD83C\uDDF7\uD83C\uDDF4",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"\uD83C\uDDED\uD83C\uDDFA",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"\uD83C\uDDE8\uD83C\uDDFF",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"\uD83C\uDDF8\uD83C\uDDF0",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"\uD83C\uDDF8\uD83C\uDDEE",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"\uD83C\uDDED\uD83C\uDDF7",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"\uD83C\uDDF7\uD83C\uDDF8",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"\uD83C\uDDE7\uD83C\uDDE6",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"\uD83C\uDDE7\uD83C\uDDEC",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"\uD83C\uDDEA\uD83C\uDDEA",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"\uD83C\uDDF1\uD83C\uDDFB",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"\uD83C\uDDF1\uD83C\uDDF9",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"\uD83C\uDDE7\uD83C\uDDFE",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"\uD83C\uDDF2\uD83C\uDDE9",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"\uD83C\uDDE6\uD83C\uDDF1",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"\uD83C\uDDF2\uD83C\uDDF0",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"\uD83C\uDDF2\uD83C\uDDEA",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"\uD83C\uDDE8\uD83C\uDDFE",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"\uD83C\uDDF2\uD83C\uDDF9",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"\uD83C\uDDF1\uD83C\uDDFA",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"\uD83C\uDDE6\uD83C\uDDE9",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"\uD83C\uDDF2\uD83C\uDDE8",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"\uD83C\uDDF8\uD83C\uDDF2",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"\uD83C\uDDF1\uD83C\uDDEE",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"\uD83C\uDDFB\uD83C\uDDE6",zoom:15}]},{id:"americas",name:"Americas",icon:"\uD83C\uDF0E",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"\uD83C\uDDE8\uD83C\uDDE6",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"\uD83C\uDDF2\uD83C\uDDFD",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"\uD83C\uDDE7\uD83C\uDDFF",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"\uD83C\uDDEC\uD83C\uDDF9",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"\uD83C\uDDF8\uD83C\uDDFB",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"\uD83C\uDDED\uD83C\uDDF3",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"\uD83C\uDDF3\uD83C\uDDEE",zoom:12},{id:"san-jose-cr",name:"San Jos\xe9",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"\uD83C\uDDE8\uD83C\uDDF7",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"\uD83C\uDDF5\uD83C\uDDE6",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"\uD83C\uDDE8\uD83C\uDDFA",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"\uD83C\uDDE7\uD83C\uDDF8",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"\uD83C\uDDEF\uD83C\uDDF2",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"\uD83C\uDDED\uD83C\uDDF9",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"\uD83C\uDDE9\uD83C\uDDF4",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"\uD83C\uDDF0\uD83C\uDDF3",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"\uD83C\uDDF1\uD83C\uDDE8",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"\uD83C\uDDFB\uD83C\uDDE8",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"\uD83C\uDDE7\uD83C\uDDE7",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"\uD83C\uDDE6\uD83C\uDDEC",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"\uD83C\uDDE9\uD83C\uDDF2",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"\uD83C\uDDEC\uD83C\uDDE9",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"\uD83C\uDDF9\uD83C\uDDF9",zoom:12},{id:"bogota",name:"Bogot\xe1",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"\uD83C\uDDE8\uD83C\uDDF4",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"\uD83C\uDDFB\uD83C\uDDEA",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"\uD83C\uDDEC\uD83C\uDDFE",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"\uD83C\uDDF8\uD83C\uDDF7",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"\uD83C\uDDEA\uD83C\uDDE8",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"\uD83C\uDDF5\uD83C\uDDEA",zoom:12},{id:"sao-paulo",name:"S\xe3o Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"\uD83C\uDDE7\uD83C\uDDF7",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"\uD83C\uDDE7\uD83C\uDDF4",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"\uD83C\uDDE8\uD83C\uDDF1",zoom:12},{id:"asuncion",name:"Asunci\xf3n",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"\uD83C\uDDF5\uD83C\uDDFE",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"\uD83C\uDDE6\uD83C\uDDF7",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"\uD83C\uDDFA\uD83C\uDDFE",zoom:12}]},{id:"africa",name:"Africa",icon:"\uD83C\uDF0D",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"\uD83C\uDDF2\uD83C\uDDE6",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"\uD83C\uDDE9\uD83C\uDDFF",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"\uD83C\uDDF9\uD83C\uDDF3",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"\uD83C\uDDF1\uD83C\uDDFE",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"\uD83C\uDDEA\uD83C\uDDEC",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"\uD83C\uDDF8\uD83C\uDDE9",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"\uD83C\uDDF8\uD83C\uDDF3",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"\uD83C\uDDEC\uD83C\uDDF2",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"\uD83C\uDDEC\uD83C\uDDFC",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"\uD83C\uDDEC\uD83C\uDDF3",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"\uD83C\uDDF8\uD83C\uDDF1",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"\uD83C\uDDF1\uD83C\uDDF7",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"\uD83C\uDDE8\uD83C\uDDEE",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"\uD83C\uDDEC\uD83C\uDDED",zoom:12},{id:"lome",name:"Lom\xe9",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"\uD83C\uDDF9\uD83C\uDDEC",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"\uD83C\uDDE7\uD83C\uDDEF",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"\uD83C\uDDF3\uD83C\uDDEC",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"\uD83C\uDDF3\uD83C\uDDEA",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"\uD83C\uDDF2\uD83C\uDDF1",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"\uD83C\uDDE7\uD83C\uDDEB",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"\uD83C\uDDF2\uD83C\uDDF7",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"\uD83C\uDDE8\uD83C\uDDFB",zoom:13},{id:"yaounde",name:"Yaound\xe9",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"\uD83C\uDDE8\uD83C\uDDF2",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"\uD83C\uDDF9\uD83C\uDDE9",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"\uD83C\uDDE8\uD83C\uDDEB",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"\uD83C\uDDEC\uD83C\uDDF6",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"\uD83C\uDDEC\uD83C\uDDE6",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"\uD83C\uDDE8\uD83C\uDDEC",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"\uD83C\uDDE8\uD83C\uDDE9",zoom:12},{id:"sao-tome",name:"S\xe3o Tom\xe9",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"\uD83C\uDDF8\uD83C\uDDF9",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"\uD83C\uDDF8\uD83C\uDDF8",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"\uD83C\uDDEA\uD83C\uDDF9",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"\uD83C\uDDEA\uD83C\uDDF7",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"\uD83C\uDDE9\uD83C\uDDEF",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"\uD83C\uDDF8\uD83C\uDDF4",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"\uD83C\uDDF0\uD83C\uDDEA",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"\uD83C\uDDFA\uD83C\uDDEC",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"\uD83C\uDDF7\uD83C\uDDFC",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"\uD83C\uDDE7\uD83C\uDDEE",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"\uD83C\uDDF9\uD83C\uDDFF",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"\uD83C\uDDF2\uD83C\uDDEC",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"\uD83C\uDDF0\uD83C\uDDF2",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"\uD83C\uDDF2\uD83C\uDDFA",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"\uD83C\uDDF8\uD83C\uDDE8",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"\uD83C\uDDE6\uD83C\uDDF4",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"\uD83C\uDDFF\uD83C\uDDF2",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"\uD83C\uDDF2\uD83C\uDDFC",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"\uD83C\uDDF2\uD83C\uDDFF",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"\uD83C\uDDFF\uD83C\uDDFC",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"\uD83C\uDDE7\uD83C\uDDFC",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"\uD83C\uDDF3\uD83C\uDDE6",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"\uD83C\uDDFF\uD83C\uDDE6",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"\uD83C\uDDF8\uD83C\uDDFF",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"\uD83C\uDDF1\uD83C\uDDF8",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"\uD83D\uDD4C",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"\uD83C\uDDF8\uD83C\uDDE6",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"\uD83C\uDDE6\uD83C\uDDEA",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"\uD83C\uDDF6\uD83C\uDDE6",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"\uD83C\uDDE7\uD83C\uDDED",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"\uD83C\uDDF0\uD83C\uDDFC",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"\uD83C\uDDF4\uD83C\uDDF2",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"\uD83C\uDDFE\uD83C\uDDEA",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"\uD83C\uDDEE\uD83C\uDDF6",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"\uD83C\uDDEE\uD83C\uDDF7",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"\uD83C\uDDF9\uD83C\uDDF7",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"\uD83C\uDDF1\uD83C\uDDE7",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"\uD83C\uDDF8\uD83C\uDDFE",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"\uD83C\uDDEF\uD83C\uDDF4",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"\uD83C\uDDEE\uD83C\uDDF1",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"\uD83C\uDDF5\uD83C\uDDF8",zoom:13}]},{id:"asia",name:"Asia",icon:"\uD83C\uDF0F",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"\uD83C\uDDE6\uD83C\uDDEB",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"\uD83C\uDDF0\uD83C\uDDFF",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"\uD83C\uDDF0\uD83C\uDDEC",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"\uD83C\uDDFA\uD83C\uDDFF",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"\uD83C\uDDF9\uD83C\uDDEF",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"\uD83C\uDDF9\uD83C\uDDF2",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"\uD83C\uDDE6\uD83C\uDDF2",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"\uD83C\uDDE6\uD83C\uDDFF",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"\uD83C\uDDEC\uD83C\uDDEA",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"\uD83C\uDDF5\uD83C\uDDF0",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"\uD83C\uDDF3\uD83C\uDDF5",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"\uD83C\uDDE7\uD83C\uDDE9",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"\uD83C\uDDF1\uD83C\uDDF0",zoom:12},{id:"male",name:"Mal\xe9",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"\uD83C\uDDF2\uD83C\uDDFB",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"\uD83C\uDDE8\uD83C\uDDF3",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"\uD83C\uDDEF\uD83C\uDDF5",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"\uD83C\uDDF0\uD83C\uDDF7",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"\uD83C\uDDF0\uD83C\uDDF5",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"\uD83C\uDDF2\uD83C\uDDF3",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"\uD83C\uDDF9\uD83C\uDDED",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"\uD83C\uDDFB\uD83C\uDDF3",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"\uD83C\uDDF0\uD83C\uDDED",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"\uD83C\uDDF1\uD83C\uDDE6",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"\uD83C\uDDF2\uD83C\uDDF2",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"\uD83C\uDDF2\uD83C\uDDFE",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"\uD83C\uDDF8\uD83C\uDDEC",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"\uD83C\uDDEE\uD83C\uDDE9",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"\uD83C\uDDF5\uD83C\uDDED",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"\uD83C\uDDE7\uD83C\uDDF3",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"\uD83C\uDDF9\uD83C\uDDF1",zoom:13}]},{id:"oceania",name:"Oceania",icon:"\uD83C\uDF0A",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"\uD83C\uDDE6\uD83C\uDDFA",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"\uD83C\uDDF3\uD83C\uDDFF",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"\uD83C\uDDF5\uD83C\uDDEC",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"\uD83C\uDDEB\uD83C\uDDEF",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"\uD83C\uDDF8\uD83C\uDDE7",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"\uD83C\uDDFB\uD83C\uDDFA",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"\uD83C\uDDF9\uD83C\uDDF4",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"\uD83C\uDDFC\uD83C\uDDF8",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"\uD83C\uDDF9\uD83C\uDDFB",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"\uD83C\uDDF0\uD83C\uDDEE",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"\uD83C\uDDF2\uD83C\uDDED",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"\uD83C\uDDEB\uD83C\uDDF2",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"\uD83C\uDDF5\uD83C\uDDFC",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"\uD83C\uDDF3\uD83C\uDDF7",zoom:14}]}].flatMap(e=>e.places);var G=a(6701);s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,s().div`
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,s().div`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,s().input`
  width: 100%;
  padding: 8px 12px;
  background: ${t.w4.colors.mainBg};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${t.w4.colors.accent}; }
  &::placeholder { color: ${t.w4.colors.sidebarTextMuted}; }
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,s().button`
  padding: 7px 18px;
  border-radius: ${t.w4.borderRadius.md};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:o})=>o?"rgba(248,81,73,0.12)":e?t.w4.colors.accent:"none"};
  color: ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?"#fff":t.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?t.w4.colors.accent:t.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,s().div`
  height: 1px;
  background: ${t.w4.colors.border};
  margin: 0 -4px;
`,s().div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
`;let q=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,O=(0,d.keyframes)`
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
  padding: ${t.w4.spacing.md};
  animation: ${q} 0.15s ease both;
`,s().div`
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?t.w4.colors.danger+"55":t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${t.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${O} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,s().div`
  font-size: ${t.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?t.w4.colors.danger:t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
`,s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${t.w4.colors.mainTextMuted};
  font-family: ${t.w4.typography.fontFamily};
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${t.w4.spacing.sm};
`,s().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${t.w4.transitions.fast},
    border-color ${t.w4.transitions.fast},
    color ${t.w4.transitions.fast},
    opacity ${t.w4.transitions.fast};

  background: ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?t.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:o})=>o||e?"#fff":t.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:o})=>o?t.w4.colors.danger:e?t.w4.colors.accent:t.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${t.w4.focusRing} }
`,s().div`
  position: relative;
`,s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.md};
  color: ${t.w4.colors.mainText};
  font-size: ${t.w4.typography.fontSizeBase};
  font-family: ${t.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
    border-color: ${t.w4.colors.accent};
  }
`,s().div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${t.w4.colors.sidebarBg};
  border: 1px solid ${t.w4.colors.sidebarBorder};
  border-radius: ${t.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,s().div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,s().div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,s().div`
  padding: 16px 14px;
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
  font-style: italic;
`,s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${t.w4.colors.sidebarHover};
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
  font-size: ${t.w4.typography.fontSizeBase};
  color: ${t.w4.colors.mainText};
  font-family: ${t.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,s().div`
  font-size: 11px;
  color: ${t.w4.colors.sidebarTextMuted};
  font-family: ${t.w4.typography.fontFamily};
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
  border-radius: ${t.w4.borderRadius.sm};
  cursor: pointer;
  color: ${t.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${t.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`;let W=s().div`
  padding: ${t.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${t.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,J=s().section`
  scroll-margin-top: ${t.w4.spacing.lg};
`,U=s().div`
  background: ${t.w4.colors.surface};
  border: 1px solid ${t.w4.colors.border};
  border-radius: ${t.w4.borderRadius.lg};
  padding: ${t.w4.spacing.lg};
`,Z=s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${t.w4.spacing.xl};

  @media (max-width: ${t.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;s().div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  color: ${t.w4.colors.mainText};
  overflow: hidden;
`,s().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${t.w4.colors.sidebarBg};
  border-bottom: 1px solid ${t.w4.colors.sidebarBorder};
  padding-left: max(${t.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${t.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${t.w4.spacing.sm};
  z-index: 100;
`,s().button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w4.typography.fontFamily};
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${t.w4.colors.accent}; }
`,s().span`
  color: ${t.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,s().div`
  font-size: ${t.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${t.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,s().span`
  font-weight: 400;
  color: ${t.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,s().div`
  flex: 1;
`;let X=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Q=(0,d.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,ee=(0,d.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${t.w4.colors.mainBg};
  font-family: ${t.w4.typography.fontFamily};
  animation: ${X} 0.4s ease 0.15s both;
`,s().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,s().div`
  position: absolute;
  inset: 0;
  animation: ${Q} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
  background: ${t.w4.colors.border};
  animation: ${ee} 1.4s ease-in-out infinite;
`,s().span`
  color: ${t.w4.colors.mainTextMuted};
  font-size: ${t.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`},1316(e,o,a){a.d(o,{w4:()=>i});let t={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},r="--at-",i={colors:function(){let e={};for(let o of Object.keys(t))e[o]=`var(${r}${o})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${r}suiteLab)`,vida:`var(${r}suiteVida)`,learn:`var(${r}suiteLearn)`,games:`var(${r}suiteGames)`,ent:`var(${r}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",xl:"0 40px 120px var(--at-shadowStrong), 0 8px 24px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:`
    outline: 2px solid var(--at-accent);
    outline-offset: 2px;
  `}},8395(e,o,a){a.d(o,{In:()=>w});var t=a(5723);a(7991);var r=a(6859),i=a.n(r),n=a(9874);let l={ghost:"transparent",accent:"transparent",primary:n.w4.colors.accent,success:"#238636",danger:"#da3633"},s={ghost:n.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:n.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},d={ghost:n.w4.colors.border,accent:n.w4.colors.accent,primary:n.w4.colors.accent,success:"#238636",danger:"#da3633"},c={ghost:n.w4.colors.mainTextMuted,accent:n.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},p={ghost:n.w4.colors.mainText,accent:n.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},g={sm:"28px",md:"30px"},m={sm:"0 10px",md:"0 12px"},f={sm:"12px",md:"12px"};i().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>g[e]};
  padding: ${({size:e})=>m[e]};
  background: ${({variant:e})=>l[e]};
  border: 1px solid ${({variant:e})=>d[e]};
  border-radius: ${n.w4.borderRadius.sm};
  color: ${({variant:e})=>c[e]};
  font-size: ${({size:e})=>f[e]};
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${n.w4.transitions.fast}, border-color ${n.w4.transitions.fast}, color ${n.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>s[e]};
    color: ${({variant:e})=>p[e]};
    border-color: ${({variant:e})=>"ghost"===e?n.w4.colors.accent:d[e]};
  }

  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;let x={default:n.w4.colors.accent,danger:"#f85149"},h={default:n.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"};i().button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: ${({active:e})=>e?`${n.w4.colors.accent}22`:"transparent"};
  border: 1px solid
    ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.border};
  border-radius: ${({shape:e})=>"circle"===e?"999px":n.w4.borderRadius.sm};
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${n.w4.transitions.fast}, border-color ${n.w4.transitions.fast}, color ${n.w4.transitions.fast};

  &:hover:not(:disabled) {
    color: ${({tone:e})=>x[e]};
    background: ${({tone:e})=>h[e]};
    border-color: ${({tone:e})=>x[e]};
  }
  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,i().div`
  position: relative;
  display: inline-flex;
`,i().div`
  position: absolute;
  top: calc(100% + 6px);
  ${({align:e})=>"right"===e?"right: 0;":"left: 0;"}
  min-width: 180px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  background: ${n.w4.colors.sidebarBg};
  border: 1px solid ${n.w4.colors.sidebarBorder};
  border-radius: ${n.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,i().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: none;
  border: none;
  border-radius: ${n.w4.borderRadius.sm};
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeSm};
  font-family: ${n.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: -2px;
  }
`,i().div`
  height: 1px;
  margin: 4px 0;
  background: ${n.w4.colors.sidebarBorder};
`,i().div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
`,i().div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.sm};
`,i().span`
  width: 1px;
  height: 20px;
  background: ${n.w4.colors.border};
  flex-shrink: 0;
`,i().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,i()("button",{shouldForwardProp:e=>"active"!==e&&"highlight"!==e})`
  padding: 6px 14px;
  height: 28px;
  border-radius: 999px;
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"transparent"};
  border: 1px solid
    ${({active:e,highlight:o})=>e||o?n.w4.colors.accent:"transparent"};
  color: ${({active:e,highlight:o})=>e||o?n.w4.colors.accent:n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: ${n.w4.transitions.fast};

  &:hover:not(:disabled) { color: ${n.w4.colors.mainText}; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${n.w4.focusRing} }
`,a(2727);var u=a(2799);let b={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',"cloud-rain":'<path d="M16 14a5 5 0 1 0-9.8 2H6M8 19v2M12 17v4M16 19v2"/>',snowflake:'<path d="M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1M2 12h20M8 6l4 4 4-4M8 18l4-4 4 4"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"alert-triangle":'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',"check-circle":'<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>',"x-circle":'<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',"rotate-ccw":'<path d="M2 12a10 10 0 1 0 5-8.7L2 7M2 2v5h5"/>',"rotate-cw":'<path d="M22 12a10 10 0 1 1-5-8.7L22 7M22 2v5h-5"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"alert-circle":'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',"alert-octagon":'<path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"/><path d="M12 8v4M12 16h.01"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',columns:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',"eye-off":'<path d="M17.9 17.9A10.8 10.8 0 0 1 12 20c-7 0-11-8-11-8a19.6 19.6 0 0 1 5.1-6M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a19.6 19.6 0 0 1-2.2 3.2M6.6 6.6l10.8 10.8M14.1 14.1a3 3 0 1 1-4.2-4.2"/>',"file-plus":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M12 12v6M9 15h6"/>',gauge:'<path d="M12 14a2 2 0 1 0-2-2M12 2a10 10 0 1 0 10 10M12 14 7.5 16.5"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',"git-fork":'<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/>',"grip-vertical":'<circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',"image-plus":'<path d="M21 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21M19 2v6M22 5h-6"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',loader:'<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',"panel-left":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',"panel-left-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M16 15l-3-3 3-3"/>',"panel-left-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M14 9l3 3-3 3"/>',"panel-right-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M8 9l3 3-3 3"/>',"panel-right-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M10 15l-3-3 3-3"/>',pencil:'<path d="m12 20 9-9-4-4-9 9v4zM15 5l4 4"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M4.9 19.1a10 10 0 0 1 0-14.1M7.8 16.2a6 6 0 0 1 0-8.5M19.1 4.9a10 10 0 0 1 0 14.1M16.2 7.8a6 6 0 0 1 0 8.5"/>',"scatter-chart":'<circle cx="7.5" cy="7.5" r="0.8" fill="currentColor"/><circle cx="18" cy="5" r="0.8" fill="currentColor"/><circle cx="11" cy="11" r="0.8" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.8" fill="currentColor"/><circle cx="17" cy="14" r="0.8" fill="currentColor"/><path d="M3 3v18h18"/>',shield:'<path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"/>',"shield-off":'<path d="M19.7 14a7.7 7.7 0 0 0 .3-2V4l-8-2-3.4.9M4.7 4.7 4 5v7c0 6 8 10 8 10a13 13 0 0 0 5.2-3.5M2 2l20 20"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',"trending-down":'<path d="M22 17l-9.5-9.5-5 5L2 7"/><path d="M16 17h6v-6"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',"user-cog":'<circle cx="10" cy="8" r="4"/><path d="M10.2 14H8a4 4 0 0 0-4 4v2"/><circle cx="18" cy="15" r="3"/><path d="M18 10v1M18 19v1M22 12l-.8.5M14.8 17.5 14 18M22 18l-.8-.5M14.8 12.5 14 12"/>',volume:'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',wallet:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18M16 14h2"/>',receipt:'<path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21z"/><path d="M8 8h8M8 12h8M8 16h5"/>',"piggy-bank":'<path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/><path d="M19 9h2v4M14 7V5a2 2 0 0 0-4 0M16 11h.01M5 17v3M14 17v3"/>',banknote:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M5 9h.01M19 15h.01"/>',coins:'<circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/><path d="M9 6v6M7 9h4"/>',"line-chart":'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',"calendar-range":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 15h3M13 15h3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"refresh-ccw":'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',split:'<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 3 12 12 3 3"/><path d="M12 12v9"/>',"more-horizontal":'<circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>'};function w({name:e,size:o=18,strokeWidth:a=1.5,...r}){let i=b[e];return(0,t.jsx)("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!r["aria-label"]||void 0,...r,dangerouslySetInnerHTML:{__html:i}})}Object.keys(b),i().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  border: ${({ring:e})=>e?`1px solid ${n.w4.colors.border}`:"none"};
  flex-shrink: 0;
  overflow: hidden;
  user-select: none;
`,i().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: ${({fontSize:e})=>e}px;
  font-weight: 700;
  color: ${n.w4.colors.mainBg};
  line-height: 1;
  letter-spacing: 0;
`,i().img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,i().div`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${n.w4.colors.accentMuted};
  border: 1px solid ${n.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 700;
  color: ${n.w4.colors.accent};
  flex-shrink: 0;
  /* Font scales with size: 26px → 12px, 40px → 18px */
  font-size: ${({size:e})=>Math.round(.46*e)}px;
`;let y=(0,u.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;i().div`
  position: relative;
`,i().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px 4px 4px;
  background: none;
  border: 1px solid ${n.w4.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: border-color ${n.w4.transitions.fast}, background ${n.w4.transitions.fast};
  &:hover {
    border-color: ${n.w4.colors.accent};
    background: ${n.w4.colors.sidebarHover};
  }

  /* With DisplayName hidden on mobile the pill becomes an oval — pad
     equally and drop the gap so the wrapper is a true circle. */
  @media (max-width: ${n.w4.breakpoints.md}) {
    padding: 4px;
    gap: 0;
  }
`,i().span`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${n.w4.breakpoints.md}) {
    display: none;
  }
`,i().div`
  position: fixed;
  min-width: 240px;
  background: ${n.w4.colors.surfaceRaised};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${y} 0.15s ease;
  backdrop-filter: blur(12px);

  @media (max-width: ${n.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    max-height: calc(100dvh - env(safe-area-inset-top, 0px) - 96px);
    overflow-y: auto;
  }
`,i().div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${n.w4.colors.border};
`,i().div`
  margin-bottom: 10px;
`,i().div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${n.w4.colors.mainText};
`,i().div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: 12px;
  color: ${n.w4.colors.mainTextMuted};
  margin-top: 2px;
`,i().div`
  padding: 12px 16px 10px;
  border-bottom: 1px solid ${n.w4.colors.borderSubtle};
`,i().div`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${n.w4.colors.mainTextFaint};
  margin-bottom: 6px;
`,i().div`
  display: flex;
  gap: 4px;
  padding: 3px;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.borderSubtle};
  border-radius: ${n.w4.borderRadius.md};
`,i().button`
  flex: 1;
  padding: 6px 10px;
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${n.w4.borderRadius.sm};
  font-family: ${n.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: ${({active:e})=>e?600:500};
  cursor: pointer;
  transition: background ${n.w4.transitions.fast}, color ${n.w4.transitions.fast};

  &:hover {
    color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.mainText};
    background: ${({active:e})=>e?n.w4.colors.accentMuted:n.w4.colors.sidebarHover};
  }
`,i().button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainTextMuted};
  transition: background 0.12s, color 0.12s;
  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${({danger:e})=>e?"#e05252":n.w4.colors.mainText};
  }
`,a(8170),i().div`
  position: relative;
  display: inline-block;
`,i().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px 6px 8px;
  background: ${({open:e})=>e?n.w4.colors.surfaceHover:"transparent"};
  border: 1px solid
    ${({open:e})=>e?n.w4.colors.borderStrong:n.w4.colors.border};
  border-radius: 999px;
  color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background ${n.w4.transitions.fast},
    border-color ${n.w4.transitions.fast},
    color ${n.w4.transitions.fast};

  &:hover {
    color: ${n.w4.colors.mainText};
    border-color: ${n.w4.colors.borderStrong};
  }
  &:focus-visible { ${n.w4.focusRing} }
`,i().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  background: ${n.w4.colors.accentMuted};
  color: ${n.w4.colors.accent};
  padding: 2px 7px;
  border-radius: 999px;
`;let $=(0,u.keyframes)`
  from { opacity: 0; transform: translate(-50%, -6px); }
  to   { opacity: 1; transform: translate(-50%,  0); }
`;i().div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  max-width: calc(100vw - 24px);
  padding: 10px;
  background: ${n.w4.colors.surfaceRaised};
  border: 1px solid ${n.w4.colors.borderStrong};
  border-radius: 14px;
  box-shadow: ${n.w4.elevation.lg};
  z-index: ${n.w4.zIndex.dropdown};
  animation: ${$} 0.18s ease both;

  @media (max-width: ${n.w4.breakpoints.md}) {
    position: fixed;
    top: calc(48px + env(safe-area-inset-top, 0px) + 6px);
    left: 12px;
    right: 12px;
    width: auto;
    max-width: none;
    transform: none;
    animation: none;
    max-height: calc(100dvh - 48px - env(safe-area-inset-top, 0px) - 24px);
    overflow-y: auto;
  }
`,i()("button",{shouldForwardProp:e=>"accent"!==e&&"expanded"!==e})`
  width: 100%;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  background: ${({expanded:e})=>e?n.w4.colors.surfaceHover:"transparent"};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  text-align: left;
  transition: background ${n.w4.transitions.fast};

  &:hover { background: ${n.w4.colors.surfaceHover}; }
  &:focus-visible { ${n.w4.focusRing} }
`,i()("span",{shouldForwardProp:e=>"accent"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({accent:e})=>e}26;
  color: ${({accent:e})=>e};
  border: 1px solid ${({accent:e})=>e}40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,i().span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,i().span`
  font-size: 13.5px;
  color: ${n.w4.colors.mainText};
  font-weight: 500;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,i().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${n.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,i()("span",{shouldForwardProp:e=>"accent"!==e})`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  min-width: 24px;
  height: 22px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accent:e})=>e}30;
  color: ${({accent:e})=>e};
  border-radius: 999px;
`,i().div`
  margin: 2px 0 6px 48px;
  padding: 4px 0;
  border-left: 1px solid ${n.w4.colors.borderSubtle};
  display: flex;
  flex-direction: column;
`,i().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px 7px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  color: ${n.w4.colors.mainTextMuted};
  font-size: 12.5px;
  cursor: pointer;
  text-align: left;
  transition: background ${n.w4.transitions.fast},
    color ${n.w4.transitions.fast};

  &:hover {
    color: ${n.w4.colors.mainText};
    background: ${n.w4.colors.surfaceHover};
  }
  &:focus-visible { ${n.w4.focusRing} }
`,i().span`
  font-size: 14px;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: ${({accent:e})=>e?`${e}22`:"transparent"};
`,i().span`
  margin-left: auto;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${n.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
`,i().div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.sm};

  @media (max-width: ${n.w4.breakpoints.md}) {
    gap: ${n.w4.spacing.xs};

    .header-kbd { display: none; }
    .header-hide-md { display: none; }
  }
`,i().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${n.w4.colors.border};
  border-radius: 999px;
  color: ${n.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${n.w4.transitions.fast}, border-color ${n.w4.transitions.fast}, color ${n.w4.transitions.fast};

  &:hover {
    color: ${n.w4.colors.accent};
    border-color: ${n.w4.colors.accent};
    background: ${n.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: 2px;
  }
`,i().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 10px 0 10px;
  background: transparent;
  border: 1px solid ${n.w4.colors.border};
  border-radius: 999px;
  color: ${n.w4.colors.mainTextMuted};
  cursor: pointer;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  transition: background ${n.w4.transitions.fast}, border-color ${n.w4.transitions.fast}, color ${n.w4.transitions.fast};
  white-space: nowrap;

  .kbd {
    display: inline-flex;
    align-items: center;
    gap: 1px;
    padding: 2px 6px;
    border-radius: 6px;
    background: ${n.w4.colors.sidebarHover};
    border: 1px solid ${n.w4.colors.borderSubtle};
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    color: ${n.w4.colors.mainTextMuted};
    letter-spacing: 0.04em;
    transition: color ${n.w4.transitions.fast}, border-color ${n.w4.transitions.fast}, background ${n.w4.transitions.fast};
  }

  &:hover {
    color: ${n.w4.colors.accent};
    border-color: ${n.w4.colors.accent};
    background: ${n.w4.colors.sidebarHover};
  }
  &:hover .kbd {
    color: ${n.w4.colors.accent};
    border-color: ${n.w4.colors.accent}55;
    background: ${n.w4.colors.surface};
  }
  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: 2px;
  }
`,i().div`
  position: relative;
  display: inline-flex;
`,i().span`
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: #ff6fa9;
  border: 2px solid ${n.w4.colors.mainBg};
  color: #fff;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0;
  pointer-events: none;
`,i().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  background: ${n.w4.colors.accent};
  border: 1px solid ${n.w4.colors.accent};
  border-radius: 999px;
  color: #fff;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background ${n.w4.transitions.fast}, border-color ${n.w4.transitions.fast};
  white-space: nowrap;

  &:hover {
    background: ${n.w4.colors.accentHover};
    border-color: ${n.w4.colors.accentHover};
  }
  &:focus-visible {
    outline: 2px solid ${n.w4.colors.accent};
    outline-offset: 2px;
  }
`,i().div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 900;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  ${({forceVisible:e})=>e?"":"@media (hover: hover) and (pointer: fine) { display: none; }"}
`,i().div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 45%;
  height: 60%;
  pointer-events: auto;
  touch-action: none;
`,i().div`
  position: absolute;
  left: ${({left:e})=>e}px;
  top: ${({top:e})=>e}px;
  width: ${120}px;
  height: ${120}px;
  margin-left: -${60}px;
  margin-top: -${60}px;
  border-radius: 50%;
  background: rgba(13, 17, 23, 0.55);
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
  pointer-events: none;
  opacity: ${({active:e})=>e?1:.9};
  transition: opacity ${n.w4.transitions.fast};
`,i().div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${54}px;
  height: ${54}px;
  margin-left: -${27}px;
  margin-top: -${27}px;
  border-radius: 50%;
  background: ${n.w4.colors.accent};
  border: 2px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.45);
  transform: translate(
    ${({dx:e})=>60*e}px,
    ${({dy:e})=>60*e}px
  );
  transition: transform 0.05s linear;
`,i().div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  gap: 14px;
  pointer-events: auto;
  touch-action: manipulation;

  @media (max-width: ${n.w4.breakpoints.md}) {
    right: 20px;
    bottom: 20px;
    gap: 10px;
  }
`,i().button`
  min-width: 72px;
  min-height: 72px;
  padding: 0 18px;
  border-radius: 50%;
  background: ${({accent:e})=>e};
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-family: ${n.w4.typography.fontFamily};
  font-weight: 800;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  touch-action: manipulation;
  /* transform is hand-tuned tighter than the fast token so the press-scale
   * tracks the finger (joystick physics), box-shadow uses the motion scale. */
  transition: transform 0.08s ease, box-shadow ${n.w4.transitions.fast};

  &:active {
    transform: scale(0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  }
`;let v=(0,u.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;i()("div",{shouldForwardProp:e=>"accentColor"!==e&&"pinned"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  background: ${n.w4.colors.surface};
  border: 1px solid ${({pinned:e})=>e?n.w4.colors.accent:n.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  min-height: 230px;
  transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 200ms,
              box-shadow 200ms;
  animation: ${v} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${n.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${n.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .pin-btn { opacity: 1; }
    &:hover .pin-controls { opacity: 1; }
  }

  @media (hover: none) {
    .pin-btn { opacity: ${({pinned:e})=>e?1:.55}; }
    .pin-controls { opacity: 0.55; }
  }
`,i().div`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${n.w4.colors.border};
  color: ${n.w4.colors.mainText};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
    z-index: 1;
  }

  /* ── Per-id templates ── */

  /* generic fallback: diagonal gradient + uppercase monogram */
  &.viz--generic {
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(135deg, var(--acc) 0%, transparent 70%),
      linear-gradient(135deg, #1a1f38, #0f1220);
  }
  & .viz-mono {
    position: absolute;
    left: 16px;
    bottom: 12px;
    font-family: ${n.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 28px;
    letter-spacing: -1px;
    color: var(--acc);
    opacity: 0.9;
    z-index: 1;
  }

  /* markdown — paragraphs of lines */
  &.viz--markdown {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { display: block; height: 4px; background: #388bfd; border-radius: 2px; opacity: 0.7; }
    & > .h { height: 7px; background: ${n.w4.colors.mainText}; opacity: 0.9; width: 55%; margin-bottom: 4px; }
    & > .l1 { width: 88%; opacity: 0.5; }
    & > .l2 { width: 72%; opacity: 0.4; }
    & > .l3 { width: 90%; opacity: 0.5; }
    & > .l4 { width: 60%; opacity: 0.3; }
  }

  /* school — year ladder */
  &.viz--school {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    align-items: flex-end;
    gap: 6px;
    & > .col { flex: 1; background: linear-gradient(180deg, #f78166, rgba(247, 129, 102, 0.1)); border-radius: 3px 3px 0 0; }
    & > .col:nth-of-type(1) { height: 32%; }
    & > .col:nth-of-type(2) { height: 52%; }
    & > .col:nth-of-type(3) { height: 74%; }
    & > .col:nth-of-type(4) { height: 92%; }
    & > .lb { position: absolute; left: 14px; top: 12px; font-family: ${n.w4.typography.fontFamily}; font-style: italic; font-size: 22px; font-weight: 600; color: #f78166; letter-spacing: -0.4px; }
  }

  /* earth — globe grid */
  &.viz--earth {
    background: linear-gradient(135deg, #0d2e1a, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .g {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 35% 35%, rgba(63, 185, 80, 0.5), transparent 40%),
        radial-gradient(circle at 70% 65%, rgba(63, 185, 80, 0.3), transparent 40%),
        linear-gradient(135deg, #0f3a20, #0a1a10);
      border: 1px solid rgba(63, 185, 80, 0.3);
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 40px rgba(63, 185, 80, 0.15);
    }
    & > .g::before,
    & > .g::after {
      content: '';
      position: absolute;
      left: 0; right: 0;
      border-top: 1px solid rgba(63, 185, 80, 0.22);
    }
    & > .g::before { top: 30%; transform: skewY(-10deg); }
    & > .g::after  { top: 60%; transform: skewY(8deg); }
  }

  /* cosmos — starfield + moon */
  &.viz--cosmos {
    background:
      radial-gradient(2px 2px at 20% 30%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 75% 20%, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
      radial-gradient(1.5px 1.5px at 45% 70%, #fff 50%, transparent 50%),
      radial-gradient(1px 1px at 90% 60%, rgba(255, 255, 255, 0.8) 50%, transparent 50%),
      radial-gradient(2px 2px at 15% 85%, rgba(188, 140, 255, 0.9) 50%, transparent 50%),
      radial-gradient(1px 1px at 60% 40%, rgba(255, 255, 255, 0.4) 50%, transparent 50%),
      radial-gradient(1px 1px at 30% 15%, rgba(188, 140, 255, 0.7) 50%, transparent 50%),
      radial-gradient(circle at 78% 45%, rgba(188, 140, 255, 0.35), transparent 45%),
      linear-gradient(135deg, #1a1140, #0f1220);
    &::after {
      content: '';
      position: absolute;
      right: 24px;
      top: 24px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #e9d9ff, #b8a0e8 60%, #7a5ec0);
      box-shadow: 0 0 30px rgba(188, 140, 255, 0.4);
    }
  }

  /* techscope — spectrum bars */
  &.viz--techscope {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: flex-end;
    padding: 14px;
    gap: 3px;
    & > span { flex: 1; background: linear-gradient(180deg, #a371f7, rgba(163, 113, 247, 0.2)); border-radius: 1px; }
  }

  /* citypulse — skyline + sun */
  &.viz--citypulse {
    background: linear-gradient(180deg, #2a1a10 0%, #0f1220 100%);
    &::before {
      content: '';
      position: absolute;
      left: 0; right: 0; bottom: 0;
      height: 70%;
      background: #0a0b14;
      clip-path: polygon(0 100%, 0 80%, 6% 80%, 6% 55%, 13% 55%, 13% 85%, 22% 85%, 22% 35%, 34% 35%, 34% 70%, 43% 70%, 43% 20%, 55% 20%, 55% 60%, 66% 60%, 66% 40%, 75% 40%, 75% 75%, 88% 75%, 88% 50%, 100% 50%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      top: 18px; right: 20px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: #d29922;
      box-shadow: 0 0 24px rgba(210, 153, 34, 0.5);
    }
  }

  /* stockpulse — candles */
  &.viz--stockpulse {
    background: linear-gradient(135deg, #0f2818, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    & > .c { flex: 1; position: relative; height: 100%; }
    & > .c::before { content: ''; position: absolute; left: 50%; transform: translateX(-50%); width: 1px; top: 20%; bottom: 15%; background: #3fb950; opacity: 0.5; }
    & > .c::after  { content: ''; position: absolute; left: 0; width: 100%; top: 35%; height: 30%; background: #3fb950; border-radius: 1px; }
    & > .c.r::before { background: #d86a6a; }
    & > .c.r::after  { background: #d86a6a; }
  }

  /* csvexplorer — mini table */
  &.viz--csvexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 14px;
    gap: 1px;
    & > span {
      background: rgba(88, 166, 255, 0.08);
      border-radius: 2px;
      display: flex;
      align-items: center;
      padding-left: 6px;
      font-family: ${n.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: #58a6ff;
    }
    & > span.h { background: rgba(88, 166, 255, 0.2); font-weight: 500; }
  }

  /* chartbuilder — area chart */
  &.viz--chartbuilder {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    &::before {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: linear-gradient(180deg, rgba(210, 153, 34, 0.5), transparent);
      clip-path: polygon(0 100%, 0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 100%);
    }
    &::after {
      content: '';
      position: absolute;
      inset: 20% 14px 14px 14px;
      background: #d29922;
      clip-path: polygon(0 60%, 15% 55%, 25% 35%, 45% 50%, 60% 20%, 75% 30%, 90% 10%, 100% 22%, 100% 24%, 90% 12%, 75% 32%, 60% 22%, 45% 52%, 25% 37%, 15% 57%, 0 62%);
    }
  }

  /* pad — notebook */
  &.viz--pad {
    background: linear-gradient(135deg, #3a1c10, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & > span { height: 3px; background: rgba(247, 129, 102, 0.45); border-radius: 2px; }
    & > .t { height: 6px; background: #f78166; width: 45%; }
    & > .a { width: 85%; }
    & > .b { width: 65%; }
    & > .c { width: 90%; }
    & > .d { width: 50%; }
  }

  /* regexlab — pattern + highlight */
  &.viz--regexlab {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 14px;
    padding: 14px;
    line-height: 1.7;
    color: ${n.w4.colors.mainTextMuted};
    & .hl { background: rgba(56, 139, 253, 0.35); color: #58a6ff; padding: 1px 3px; border-radius: 2px; }
    & .slash { color: #58a6ff; }
  }

  /* jsonexplorer — tree */
  &.viz--jsonexplorer {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    color: ${n.w4.colors.mainTextMuted};
    line-height: 1.5;
    & .k { color: #3fb950; }
    & .v { color: ${n.w4.colors.mainText}; }
    & .b { color: ${n.w4.colors.mainTextMuted}; opacity: 0.7; }
  }

  /* codediff — two columns */
  &.viz--codediff {
    background: linear-gradient(135deg, #2a2010, #0f1220);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    padding: 14px;
    & > .col { display: flex; flex-direction: column; gap: 3px; }
    & span { height: 4px; border-radius: 2px; }
    & .a { background: rgba(216, 106, 106, 0.4); }
    & .n { background: rgba(255, 255, 255, 0.08); }
    & .g { background: rgba(127, 183, 126, 0.5); }
  }

  /* playground — tubes */
  &.viz--playground {
    background: linear-gradient(135deg, #2a2410, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    & > .tube {
      width: 24px;
      height: 60px;
      border: 1.5px solid #facc15;
      border-radius: 0 0 12px 12px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg, transparent 40%, rgba(250, 204, 21, 0.35) 40%);
    }
    & > .tube::before {
      content: '';
      position: absolute;
      inset: 40% 3px 3px 3px;
      background: #facc15;
      border-radius: 0 0 8px 8px;
      opacity: 0.6;
    }
  }

  /* jwtinspector — token chunks */
  &.viz--jwtinspector {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 4px;
    justify-content: center;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 11px;
    & > span { padding: 6px 10px; border-radius: 4px; }
    & > .h { background: rgba(163, 113, 247, 0.2); color: #a371f7; }
    & > .p { background: rgba(127, 183, 126, 0.2); color: #7fb77e; }
    & > .s { background: rgba(216, 106, 106, 0.2); color: #d86a6a; }
    & > .sep { padding: 0; background: transparent; color: ${n.w4.colors.mainTextMuted}; opacity: 0.6; }
  }

  /* colorlab — palette strip */
  &.viz--colorlab {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
  }

  /* cronbuilder — timeline */
  &.viz--cronbuilder {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    & > .row { display: flex; align-items: center; gap: 2px; height: 6px; position: relative; }
    & > .row::before {
      content: attr(data-l);
      position: absolute;
      left: -2px;
      top: -14px;
      font-family: ${n.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: ${n.w4.colors.mainTextMuted};
      letter-spacing: 1px;
      opacity: 0.7;
    }
    & > .row span { flex: 1; height: 100%; background: rgba(255, 255, 255, 0.05); border-radius: 1px; }
    & > .row span.on { background: #3fb950; }
  }

  /* weather — sun + temp */
  &.viz--weather {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    & > .sun {
      position: absolute;
      top: 20px; left: 34px;
      width: 50px; height: 50px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #ffd780, #58a6ff 80%);
      box-shadow: 0 0 40px rgba(88, 166, 255, 0.4);
    }
    & > .temp {
      position: absolute;
      right: 20px; bottom: 14px;
      font-family: ${n.w4.typography.fontFamily};
      font-size: 38px;
      font-weight: 300;
      color: #58a6ff;
      line-height: 1;
      letter-spacing: -1px;
    }
    & > .temp small { font-size: 16px; vertical-align: top; margin-left: 2px; font-weight: 400; }
  }

  /* apiexplorer — request/response */
  &.viz--apiexplorer {
    background: linear-gradient(135deg, #0f2140, #0f1220);
    padding: 14px;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & .get { color: #3fb950; }
    & .url { color: ${n.w4.colors.mainText}; }
    & .status { color: #58a6ff; }
    & .echo { color: ${n.w4.colors.mainTextMuted}; opacity: 0.75; }
  }

  /* movies — poster marquee. 4×2 ordered cool→warm for a diagonal tonal
     sweep; extra gap + padding lets each poster breathe instead of reading
     as a packed mosaic. */
  &.viz--movies {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 16px;
    & > span { border-radius: 4px; }
  }

  /* promptlab — chat bubbles */
  &.viz--promptlab {
    background: linear-gradient(135deg, #1f1430, #0f1220);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    & > .bubble {
      background: rgba(163, 113, 247, 0.12);
      border: 1px solid rgba(163, 113, 247, 0.3);
      border-radius: 6px;
      padding: 6px 10px;
      font-size: 10.5px;
      color: ${n.w4.colors.mainText};
      align-self: flex-start;
      max-width: 80%;
      line-height: 1.35;
    }
    & > .bubble.r {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.14);
      color: ${n.w4.colors.mainTextMuted};
      align-self: flex-end;
      font-family: ${n.w4.typography.fontFamilyMono};
    }
  }

  /* ask — floating conversation with sparkle + response ripples */
  &.viz--ask {
    background:
      radial-gradient(circle at 20% 20%, rgba(139, 123, 255, 0.35), transparent 60%),
      radial-gradient(circle at 80% 85%, rgba(99, 102, 241, 0.25), transparent 55%),
      linear-gradient(135deg, #1a1635 0%, #0e1022 100%);
    padding: 12px;

    & > .ask-user {
      position: absolute;
      top: 14px;
      right: 14px;
      background: rgba(139, 123, 255, 0.18);
      border: 1px solid rgba(139, 123, 255, 0.45);
      border-radius: 10px 10px 2px 10px;
      padding: 5px 9px;
      font-size: 9.5px;
      color: ${n.w4.colors.mainText};
      font-family: ${n.w4.typography.fontFamilyMono};
      letter-spacing: 0.02em;
      max-width: 60%;
    }

    & > .ask-spark {
      position: absolute;
      left: 14px;
      top: 48px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: linear-gradient(135deg, #a371f7, #58a6ff);
      box-shadow: 0 0 12px rgba(139, 123, 255, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 11px;
      line-height: 1;
    }
    & > .ask-spark::before { content: '✦'; }

    & > .ask-reply {
      position: absolute;
      left: 40px;
      right: 18px;
      top: 48px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    & > .ask-reply > span {
      height: 5px;
      border-radius: 2px;
      background: rgba(230, 237, 243, 0.22);
    }
    & > .ask-reply > span.h {
      width: 60%;
      background: rgba(139, 123, 255, 0.55);
      height: 6px;
    }
    & > .ask-reply > span.b1 { width: 85%; }
    & > .ask-reply > span.b2 { width: 72%; }
    & > .ask-reply > span.b3 { width: 50%; }
  }

  /* devtools — IDE-style panel grid showing the 11 tools */
  &.viz--devtools {
    background:
      linear-gradient(180deg, #0d1117 0%, #05070b 100%);
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0 1px, transparent 1px 3px);
      pointer-events: none;
      z-index: 1;
    }

    & > span {
      position: relative;
      z-index: 2;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${n.w4.typography.fontFamilyMono};
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: rgba(255, 255, 255, 0.92);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    /* mark the "focused" pane — the active tool */
    & > span.active {
      outline: 1px solid rgba(255, 255, 255, 0.3);
      outline-offset: 1px;
    }
  }

  /* imagegen — generated frame */
  &.viz--imagegen {
    background: conic-gradient(from 40deg at 50% 50%, #f78166 0 60deg, #a371f7 60deg 180deg, #58a6ff 180deg 280deg, #f78166 280deg 360deg);
    &::after {
      content: 'generate';
      position: absolute;
      left: 0; right: 0; bottom: 14px;
      text-align: center;
      font-family: ${n.w4.typography.fontFamilyMono};
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.9);
      z-index: 2;
    }
    & > .frame {
      position: absolute;
      inset: 14px;
      background: rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
    }
  }

  /* daily — bullseye */
  &.viz--daily {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    display: flex;
    align-items: center;
    justify-content: center;
    & > .ring { position: absolute; border-radius: 50%; border: 1.5px solid #34d399; }
    & > .ring.r1 { width: 100px; height: 100px; opacity: 0.25; }
    & > .ring.r2 { width: 65px;  height: 65px;  opacity: 0.5; }
    & > .ring.r3 { width: 30px;  height: 30px;  opacity: 1; }
    & > .dot {
      width: 8px; height: 8px;
      background: #34d399;
      border-radius: 50%;
      box-shadow: 0 0 18px #34d399;
      position: relative;
      z-index: 2;
    }
  }

  /* games — square collage */
  &.viz--games {
    background: #0f1220;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    padding: 8px;
    & > span {
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${n.w4.typography.fontFamily};
      font-weight: 800;
      font-size: 14px;
      letter-spacing: -1px;
      color: ${n.w4.colors.mainText};
    }
  }
`,i().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .lock {
    margin-left: auto;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 9px;
    color: ${n.w4.colors.mainTextMuted};
    letter-spacing: 1.4px;
    text-transform: uppercase;
    border: 1px solid ${n.w4.colors.border};
    border-radius: 3px;
    padding: 1px 6px;
    flex-shrink: 0;
  }
`,i().div`
  padding: 6px 14px 16px;
`,i().h3`
  margin: 0 0 6px;
  font-family: ${n.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${n.w4.colors.mainText};

  .hash {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${n.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,i().p`
  margin: 0;
  color: ${n.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,i().div`
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid ${n.w4.colors.borderSubtle};
  font-size: 12px;
  color: ${n.w4.colors.mainTextMuted};
  line-height: 1.4;
`,i().button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: ${({pinned:e})=>e?n.w4.colors.accent:n.w4.colors.mainText};
  opacity: ${({pinned:e})=>+!!e};
  cursor: pointer;
  transition: opacity ${n.w4.transitions.fast}, color ${n.w4.transitions.fast}, border-color ${n.w4.transitions.fast};
  z-index: 3;
  padding: 0;

  &:hover {
    color: ${n.w4.colors.accent};
    border-color: ${n.w4.colors.accent};
  }
`,i().div`
  position: absolute;
  top: 8px;
  right: 44px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${n.w4.transitions.fast};
  z-index: 3;
`,i().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1.5px solid
    ${({variant:e})=>"default"===e?n.w4.colors.borderStrong:n.w4.colors.accent};
  background: ${({variant:e})=>"filled"===e?n.w4.colors.accentMuted:"transparent"};
  color: ${({variant:e})=>"default"===e?n.w4.colors.mainTextMuted:n.w4.colors.accent};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 500;
  white-space: nowrap;
  cursor: ${({clickable:e})=>e?"pointer":"default"};
  transition: ${n.w4.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${({variant:e})=>"default"===e?n.w4.colors.mainTextFaint:n.w4.colors.accentHover};
    color: ${({variant:e})=>"default"===e?n.w4.colors.mainText:n.w4.colors.accentHover};
  }

  &:focus-visible {
    ${n.w4.focusRing}
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,i().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
`;let z={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:n.w4.colors.accentMuted},k={neutral:n.w4.colors.mainTextMuted,live:n.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:n.w4.colors.accent};i().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  font-weight: ${({tone:e})=>"film"===e||"tv"===e?600:500};
  letter-spacing: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"1.2px":"0.6px"};
  text-transform: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"uppercase":"none"};
  padding: ${({tone:e})=>"film"===e||"tv"===e?"3px 8px":"2px 7px"};
  border-radius: ${({tone:e})=>"film"===e||"tv"===e?n.w4.borderRadius.sm:"3px"};
  background: ${({tone:e})=>z[e]};
  color: ${({tone:e})=>k[e]};
`,i().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`,i().kbd`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${n.w4.colors.border};
  border-radius: 3px;
  color: ${n.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`,i().div`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${n.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,i().label`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  padding: 9px 14px;
  transition: border-color ${n.w4.transitions.fast};

  &:focus-within {
    border-color: ${n.w4.colors.accent};
  }
`,i().input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  color: ${n.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${n.w4.colors.mainTextFaint};
  }
`,i().span`
  display: inline-flex;
  align-items: center;
  color: ${n.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,i().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px 20px 20px;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.borderSubtle};
  border-radius: ${n.w4.borderRadius.lg};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  transition: border-color ${n.w4.transitions.fast},
    background ${n.w4.transitions.fast};

  &:hover {
    border-color: ${n.w4.colors.borderStrong};
  }

  ${({accentColor:e})=>e&&`&::before {
      content: '';
      position: absolute;
      top: 14px; bottom: 14px; left: 0;
      width: 2px;
      background: ${e};
      border-radius: 0 2px 2px 0;
      opacity: 0.7;
    }`}
`,i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,i().div`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,i().div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,i().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  line-height: 1.45;
`,i().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${n.w4.colors.danger};
`,i().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px;
  background: ${n.w4.colors.surface};
  border: 1px solid
    ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.borderSubtle};
  border-radius: ${n.w4.borderRadius.lg};
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  box-shadow: ${({active:e})=>e?`inset 0 0 0 1px ${n.w4.colors.accent}`:"none"};
  transition: border-color ${n.w4.transitions.fast};

  &:hover {
    border-color: ${({active:e})=>e?n.w4.colors.accentHover:n.w4.colors.borderStrong};
  }
`,i().div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
`,i().div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: ${({bg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fff;
  flex-shrink: 0;
`,i().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,i().div`
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${n.w4.colors.mainText};
  margin-bottom: 4px;
`,i().div`
  font-size: 11.5px;
  color: ${n.w4.colors.mainTextMuted};
  line-height: 1.35;
  margin-bottom: 8px;
`,i().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${n.w4.colors.accentMuted};
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${n.w4.colors.mainTextMuted};
`,i().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 1;
  min-height: 0;
`,i().button`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.borderSubtle};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;
  gap: 6px;
  font-family: inherit;
  color: ${n.w4.colors.mainText};
  cursor: ${e=>e.onClick?"pointer":"default"};
  transition: border-color ${n.w4.transitions.fast},
    background ${n.w4.transitions.fast};

  &:hover {
    border-color: ${n.w4.colors.borderStrong};
    background: ${n.w4.colors.surfaceHover};
  }

  &:focus-visible {
    ${n.w4.focusRing}
  }
`,i().div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: ${({fg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`,i().div`
  font-size: 11px;
  color: ${n.w4.colors.mainText};
`,i().div`
  margin-top: 14px;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({color:e})=>e};
  letter-spacing: 0.5px;
`;let M=(0,u.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;i()("div",{shouldForwardProp:e=>"accentColor"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  min-height: 230px;
  transition:
    transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 200ms,
    box-shadow 200ms;
  animation: ${M} 0.4s ease both;
  animation-delay: ${({index:e})=>Math.min(25*e,300)}ms;

  /* Left accent bar — slides in on hover (mirrors AppCard). */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--acc);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
    z-index: 2;
  }

  &:active { transform: scale(0.99); }
  &:focus-visible {
    outline: 2px solid var(--acc);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${n.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${n.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .gamecard-emoji { transform: translateY(-2px) scale(1.05); }
  }
`,i()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${n.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(120% 100% at 50% 100%, var(--acc) 0%, transparent 60%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
  background-color: ${n.w4.colors.codeBg};

  /* Subtle vignette + tile pattern, both fade in on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 14px),
      linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
    opacity: 0.6;
    transition: opacity 200ms;
  }

  /* ── V3 pattern-tile variants ──────────────────────────────────────────
   * Ported from docs/design/atlantis/project/Atlantis Game Card Explorations.html
   * Raw hex values are intentional — the viz is artwork, mirroring AppCard's
   * sanctioned exception to the no-hardcoded-colors rule.
   */

  /* familyquiz — scattered brand/pink dots, "Q & A" label */
  &.viz--familyquiz {
    background:
      radial-gradient(circle at 20% 30%, rgba(139, 123, 255, 0.4), transparent 15%),
      radial-gradient(circle at 55% 60%, rgba(139, 123, 255, 0.3), transparent 12%),
      radial-gradient(circle at 80% 25%, rgba(255, 111, 169, 0.35), transparent 12%),
      radial-gradient(circle at 35% 75%, rgba(255, 111, 169, 0.25), transparent 14%),
      radial-gradient(circle at 90% 80%, rgba(139, 123, 255, 0.2), transparent 12%),
      #14172a;
  }

  /* tictactoe — grid lines, "3×3" */
  &.viz--tictactoe {
    background:
      repeating-linear-gradient(90deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      repeating-linear-gradient(0deg, transparent 0 46px, rgba(255, 255, 255, 0.07) 46px 47px),
      #14172a;
  }

  /* soundhunter — vertical waveform stripes, "waveform" */
  &.viz--soundhunter {
    background:
      repeating-linear-gradient(90deg, rgba(127, 183, 126, 0.25) 0 2px, transparent 2px 7px),
      linear-gradient(180deg, #14302a 0%, #0f1220 100%);
  }

  /* adventure — dusk with paper texture */
  &.viz--adventure {
    background:
      radial-gradient(60% 50% at 50% 100%, rgba(232, 154, 92, 0.35), transparent 60%),
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0 2px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* pixelboard — rainbow conic masked by a center fade, "palette" */
  &.viz--pixelboard {
    background:
      conic-gradient(
        from 0deg at 50% 50%,
        #d86a6a 0 60deg,
        #e89a5c 60deg 120deg,
        #c4b24a 120deg 180deg,
        #7fb77e 180deg 240deg,
        #6aa8d8 240deg 300deg,
        #8b7bff 300deg 360deg
      );
    opacity: 0.3;
  }
  &.viz--pixelboard::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 30%, #14172a 70%);
    pointer-events: none;
    z-index: 1;
  }

  /* memory — flipped-card grid, cyan tones */
  &.viz--memory {
    background:
      repeating-linear-gradient(0deg, transparent 0 22px, rgba(6, 182, 212, 0.14) 22px 24px),
      repeating-linear-gradient(90deg, transparent 0 34px, rgba(6, 182, 212, 0.14) 34px 36px),
      linear-gradient(180deg, #0d1f28, #0f1220);
  }

  /* stopgame — warning stripes with stop-sign radial */
  &.viz--stopgame {
    background:
      radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.35), transparent 55%),
      repeating-linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0 8px, transparent 8px 20px),
      linear-gradient(180deg, #241506, #0f1220);
  }

  /* tapit — concentric target rings, coral tint */
  &.viz--tapit {
    background:
      radial-gradient(circle at 50% 50%, rgba(249, 117, 131, 0.55) 0 8%, transparent 8.5% 22%, rgba(249, 117, 131, 0.35) 22.5% 28%, transparent 28.5% 44%, rgba(249, 117, 131, 0.22) 44.5% 52%, transparent 53%),
      linear-gradient(180deg, #2a1420, #0f1220);
  }

  /* bombbrawl — shockwave rings on dark red */
  &.viz--bombbrawl {
    background:
      radial-gradient(circle at 50% 55%, rgba(255, 68, 68, 0.45) 0 12%, transparent 13% 25%, rgba(255, 68, 68, 0.25) 26% 38%, transparent 39% 55%, rgba(255, 68, 68, 0.12) 56% 70%, transparent 71%),
      linear-gradient(180deg, #2a0a0f, #0f0a12);
  }

  /* jumpparty — dotted-trail bounce, lime green */
  &.viz--jumpparty {
    background:
      radial-gradient(circle at 15% 80%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      radial-gradient(circle at 30% 60%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 50% 40%, rgba(63, 185, 80, 0.4) 0 3%, transparent 4%),
      radial-gradient(circle at 70% 55%, rgba(63, 185, 80, 0.45) 0 3%, transparent 4%),
      radial-gradient(circle at 85% 75%, rgba(63, 185, 80, 0.5) 0 3%, transparent 4%),
      linear-gradient(180deg, #0e2416, #0f1220);
  }

  /* lebem — pastel pages, coral glow (read-to-play) */
  &.viz--lebem {
    background:
      repeating-linear-gradient(90deg, transparent 0 40px, rgba(249, 117, 131, 0.10) 40px 41px),
      radial-gradient(ellipse at 50% 100%, rgba(249, 117, 131, 0.3), transparent 65%),
      linear-gradient(180deg, #24121a, #0f1220);
  }

  /* drawguess — scribble strokes, lilac */
  &.viz--drawguess {
    background:
      repeating-linear-gradient(20deg, rgba(210, 168, 255, 0.16) 0 1.5px, transparent 2px 9px),
      repeating-linear-gradient(-30deg, rgba(210, 168, 255, 0.12) 0 1.5px, transparent 2px 12px),
      linear-gradient(180deg, #1a1430, #0f1220);
  }

  /* spotit — scattered dots on violet */
  &.viz--spotit {
    background:
      radial-gradient(circle at 25% 35%, rgba(139, 92, 246, 0.35) 0 4%, transparent 5%),
      radial-gradient(circle at 55% 70%, rgba(139, 92, 246, 0.45) 0 5%, transparent 6%),
      radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.30) 0 3%, transparent 4%),
      radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.25) 0 3%, transparent 4%),
      radial-gradient(circle at 75% 55%, rgba(139, 92, 246, 0.18) 0 2%, transparent 3%),
      linear-gradient(180deg, #1c1530, #0f1220);
  }
`,i().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${n.w4.colors.mainTextMuted};
  z-index: 2;
`,i()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${n.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
  background: ${n.w4.colors.codeBg};

  /* ── bombbrawl — explosive red, heavy condensed logotype ──
   * padding-top reserves room for the player-count + online badges so
   * "BOMB" never sits under them (TopLeft / TopRight are absolutely
   * positioned at top:10px). */
  &.hero--bombbrawl {
    background: linear-gradient(135deg, #2a0a0f, #0f0a12);
    justify-content: flex-start;
    padding: 44px 20px 16px;
  }
  &.hero--bombbrawl .hero-mark {
    font-family: ${n.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 48px;
    letter-spacing: -3px;
    line-height: 0.88;
    color: #ff4444;
    text-shadow: 0 0 40px rgba(255, 68, 68, 0.45), 0 0 80px rgba(255, 68, 68, 0.18);
    user-select: none;
  }
  &.hero--bombbrawl .hero-mark em {
    font-style: normal;
    color: #ffb347;
    display: block;
    font-size: 36px;
    letter-spacing: -2px;
    opacity: 0.9;
  }

  /* ── jumpparty — lime burst, bouncy stacked words ── */
  &.hero--jumpparty {
    background: linear-gradient(135deg, #0e2416, #0f1220);
    flex-direction: column;
    gap: 0;
    padding: 44px 16px 12px;
  }
  &.hero--jumpparty .hero-mark {
    font-family: ${n.w4.typography.fontFamily};
    font-weight: 800;
    font-size: 54px;
    letter-spacing: -3px;
    line-height: 0.9;
    color: #3fb950;
    text-shadow: 0 0 36px rgba(63, 185, 80, 0.4);
    user-select: none;
  }
  &.hero--jumpparty .hero-mark em {
    font-style: normal;
    font-size: 24px;
    letter-spacing: 4px;
    color: rgba(63, 185, 80, 0.55);
    display: block;
    text-transform: uppercase;
  }

  /* ── animalarena — trophy gold, serif italic clash ── */
  &.hero--animalarena {
    background: linear-gradient(135deg, #1c1a0e, #0f0f12);
    flex-direction: column;
    align-items: flex-start;
    padding: 44px 20px 18px;
  }
  &.hero--animalarena .hero-mark {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-weight: 600;
    font-size: 40px;
    letter-spacing: -2px;
    line-height: 0.92;
    background: linear-gradient(120deg, #f59e0b, #ef4444 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    user-select: none;
  }
  &.hero--animalarena .hero-mark em {
    font-style: normal;
    display: block;
    font-size: 14px;
    letter-spacing: 3px;
    -webkit-text-fill-color: rgba(245, 158, 11, 0.45);
    text-transform: uppercase;
    margin-top: 6px;
  }
`,i().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${n.w4.colors.mainTextMuted};
  z-index: 2;

  /* bombbrawl's "BOMB / BRAWL" logotype is left-aligned and reaches the
   * bottom of the hero zone — anchor the caption bottom-right instead so
   * it clears the typography. */
  .hero--bombbrawl & {
    left: auto;
    right: 14px;
    color: rgba(255, 179, 71, 0.55);
  }

  /* animalarena's "SUMO / ZOO" stack is also left-aligned and its "ZOO"
   * block reaches the bottom of the hero zone — same bottom-right
   * anchoring clears the overlap. */
  .hero--animalarena & {
    left: auto;
    right: 14px;
    color: rgba(245, 158, 11, 0.5);
  }
`,i().span`
  font-size: 56px;
  line-height: 1;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,i()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({accentColor:e})=>`${e}1f`};
  border: 1px solid ${({accentColor:e})=>`${e}55`};
  color: ${({accentColor:e})=>e};
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,i().div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
`,i().div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`,i()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 2px;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({accentColor:e})=>e};
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cat {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,i().div`
  padding: 6px 14px 16px;
`,i().h3`
  margin: 0 0 6px;
  font-family: ${n.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${n.w4.colors.mainText};

  .hash {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${n.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,i().p`
  margin: 0;
  color: ${n.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,a(5406),i().nav`padding: ${n.w4.spacing.sm} 0;`,i().div`
  border-bottom: 1px solid ${n.w4.colors.border}60;
  margin-bottom: 2px;
`,i().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${n.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${n.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${n.w4.colors.sidebarText}; }
`,i().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,i().span`
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,i().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,i().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,i().div`overflow: hidden;`,i().div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,i().button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${n.w4.spacing.md};
  background: ${({active:e})=>e?n.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?n.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?n.w4.colors.sidebarActive:n.w4.colors.sidebarText};
  font-size: ${n.w4.typography.fontSizeBase};
  font-family: ${n.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${n.w4.colors.sidebarHover}; }
`,i().button`
  opacity: ${({active:e})=>+!!e};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":n.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;let j="#7fb77e",A=(0,u.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;i().div`
  position: relative;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.xl} ${n.w4.spacing.lg} ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  animation: ${A} 0.25s ease both;
  transition:
    border-color ${n.w4.transitions.base},
    transform ${n.w4.transitions.base},
    box-shadow ${n.w4.transitions.base};

  /* Signature left accent bar — full-height, inset like a ribbon */
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0;
    width: 2px;
    border-radius: 2px;
    background: ${j};
    box-shadow: 0 0 12px ${j}55;
  }

  /* Uppercase mono eyebrow tag — reads "DIAGRAM · mermaid" */
  &::after {
    content: '◉ DIAGRAM';
    position: absolute;
    top: 10px;
    right: 14px;
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    color: ${j};
    opacity: 0.7;
    pointer-events: none;
  }

  &:hover {
    border-color: ${n.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: ${n.w4.elevation.sm};
  }

  svg { max-width: 100%; height: auto; }
  svg text { font-variant-numeric: tabular-nums; }
`,i().pre`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.md};
  margin: ${n.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${n.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,i().div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,i().div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  margin-bottom: ${n.w4.spacing.md};
  text-align: center;
`,i().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${n.w4.spacing.sm} ${n.w4.spacing.md};
  margin-top: ${n.w4.spacing.md};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
`,i().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,i().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,i().pre`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.md};
  margin: ${n.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${n.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,i().div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.md};
  padding: ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${n.w4.spacing.md};
`,i().div`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,i().div`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${n.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,i().div`
  display: flex;
  gap: ${n.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,i().button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.mainTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${n.w4.colors.accent};
    color: ${n.w4.colors.accent};
  }
`,i().div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  text-align: center;
`,i().div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  text-align: center;
`;let T=(0,u.keyframes)`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`;i().div`
  background: ${n.w4.colors.codeBg};
  border: 1px solid ${n.w4.colors.codeBorder};
  border-radius: ${n.w4.borderRadius.lg};
  padding: ${n.w4.spacing.md};
  margin: ${n.w4.spacing.lg} 0;
`,i().div`
  font-size: 11px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${n.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,i().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${n.w4.spacing.sm};

  @media (max-width: ${n.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,i().div`
  display: flex;
  flex-direction: column;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${n.w4.colors.accent}40;
    box-shadow: 0 0 8px ${n.w4.colors.accent}15;
  }
`;let S=i().button`
  display: flex;
  align-items: center;
  gap: ${n.w4.spacing.sm};
  padding: 14px ${n.w4.spacing.md};
  min-height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${n.w4.typography.fontFamily};
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    animation: ${T} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;i()(S)`
  border-bottom: 1px solid ${n.w4.colors.border}80;
`,i()(S)``,i().span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({accentColor:e})=>e}18;
  color: ${({accentColor:e})=>e};
  flex-shrink: 0;
  transition: background 0.15s, transform 0.15s;

  button:active > & {
    background: ${({accentColor:e})=>e}30;
    transform: scale(0.9);
  }
`,i().span`
  font-size: ${n.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${n.w4.colors.accent};
`,i().span`
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${n.w4.colors.mainTextMuted};
`;var F=a(1426);i().div`
  margin: ${n.w4.spacing.lg} 0;
  border-radius: ${n.w4.borderRadius.md};
  border: 1px solid ${n.w4.colors.codeBorder};
  overflow: hidden;
`,i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${n.w4.colors.codeBorder};
`,i().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,i().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":n.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${n.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${n.w4.colors.sidebarText}; border-color: ${n.w4.colors.sidebarText}; }
`,F.A,F.A['pre[class*="language-"]'],n.w4.colors.codeBg,F.A['code[class*="language-"]'],i().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${n.w4.borderRadius.md} ${n.w4.borderRadius.md} 0;
  padding: ${n.w4.spacing.md} ${n.w4.spacing.lg};
  margin: ${n.w4.spacing.lg} 0;
`,i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${n.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${n.w4.typography.fontFamily};
  margin-bottom: ${n.w4.spacing.sm};
`,i().div`
  color: ${n.w4.colors.mainText};
  font-size: ${n.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`,i().nav`
  width: 220px;
  min-width: 220px;
  padding: ${n.w4.spacing.xxl} 0 ${n.w4.spacing.xxl} ${n.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,i().div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  margin-bottom: ${n.w4.spacing.md};
`,i().ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,i().a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${n.w4.typography.fontSizeSm};
  font-family: ${n.w4.typography.fontFamily};
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?n.w4.colors.accent:"transparent"};
  border-radius: 0 ${n.w4.borderRadius.sm} ${n.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${n.w4.colors.mainText}; background: ${n.w4.colors.sidebarHover}; }
`,i().div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${n.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,i().div`flex: 1; min-width: 0;`,i().article`
  padding: ${n.w4.spacing.xxl} 0;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  line-height: ${n.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${n.w4.spacing.xl} 0 ${n.w4.spacing.md};
    color: ${n.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${n.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${n.w4.typography.fontSizeXl}; border-bottom: 1px solid ${n.w4.colors.border}; padding-bottom: ${n.w4.spacing.sm}; }
  h2 { font-size: ${n.w4.typography.fontSizeLg}; border-bottom: 1px solid ${n.w4.colors.border}; padding-bottom: ${n.w4.spacing.xs}; }
  h3 { font-size: ${n.w4.typography.fontSizeMd}; }

  p { margin: ${n.w4.spacing.md} 0; }

  a { color: ${n.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${n.w4.colors.accentHover}; } }

  ul, ol { margin: ${n.w4.spacing.md} 0; padding-left: ${n.w4.spacing.xl}; }
  li { margin: ${n.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${n.w4.colors.border};
    margin: ${n.w4.spacing.lg} 0;
    padding: ${n.w4.spacing.sm} ${n.w4.spacing.lg};
    background: ${n.w4.colors.surface};
    color: ${n.w4.colors.mainTextMuted};
    border-radius: 0 ${n.w4.borderRadius.sm} ${n.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${n.w4.colors.codeBg};
    border: 1px solid ${n.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${n.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${n.w4.spacing.lg} 0; font-size: ${n.w4.typography.fontSizeBase}; }
  th, td { padding: ${n.w4.spacing.sm} ${n.w4.spacing.md}; border: 1px solid ${n.w4.colors.border}; text-align: left; }
  th { background: ${n.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${n.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${n.w4.colors.border}; margin: ${n.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${n.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${n.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${n.w4.spacing.lg} 0; }
`,i().div`
  display: flex;
  gap: ${n.w4.spacing.lg};
  padding: ${n.w4.spacing.xxl} 0;
  border-top: 1px solid ${n.w4.colors.border};
  margin-top: ${n.w4.spacing.xxl};
`,i().button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${n.w4.spacing.md} ${n.w4.spacing.lg};
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${n.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,i().div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${n.w4.colors.sidebarTextMuted}; font-family: ${n.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,i().div`
  font-size: ${n.w4.typography.fontSizeBase}; color: ${n.w4.colors.accent};
  font-family: ${n.w4.typography.fontFamily}; font-weight: 500;
`,i().div`
  color: ${n.w4.colors.mainTextMuted};
  padding: ${n.w4.spacing.xxl} ${n.w4.spacing.xl};
  font-family: ${n.w4.typography.fontFamily};
`;let B=(0,u.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,R=(0,u.keyframes)`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;i().div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${B} 0.15s ease;
`,i().div`
  width: 90%;
  max-width: 580px;
  max-height: 70vh;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.lg};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px ${n.w4.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${R} 0.2s ease;
`,i().div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid ${n.w4.colors.border};
`,i().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${n.w4.colors.mainText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeMd};
  &::placeholder { color: ${n.w4.colors.sidebarTextMuted}; }
`,i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${n.w4.colors.sidebarHover};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: 10px;
  font-family: ${n.w4.typography.fontFamilyMono};
  transition: color 0.15s, background 0.15s;
  &:hover { color: ${n.w4.colors.mainText}; background: ${n.w4.colors.border}; }
`,i().div`
  flex: 1;
  overflow-y: auto;
  padding: ${n.w4.spacing.sm} 0;
`,i().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.sidebarTextMuted};
`,i().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,i().button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 10px 18px;
  background: ${({selected:e})=>e?n.w4.colors.accentMuted:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  &:hover { background: ${n.w4.colors.sidebarHover}; }
`,i().div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${n.w4.borderRadius.md};
  background: ${({selected:e})=>e?`${n.w4.colors.accent}20`:n.w4.colors.sidebarHover};
  color: ${({selected:e})=>e?n.w4.colors.accent:n.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  margin-top: 1px;
`,i().div`
  flex: 1;
  min-width: 0;
`,i().div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${n.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 8px;
`,i().span`
  font-weight: 400;
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.sidebarTextMuted};
`,i().span`
  font-size: 11px;
  font-weight: 500;
  color: ${n.w4.colors.accent};
  background: ${n.w4.colors.accentMuted};
  padding: 1px 6px;
  border-radius: 10px;
  font-family: ${n.w4.typography.fontFamilyMono};
`,i().div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin-top: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${n.w4.colors.accent}25;
    color: ${n.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,i().div`
  display: flex;
  align-items: center;
  color: ${({selected:e})=>e?n.w4.colors.accent:"transparent"};
  margin-top: 8px;
  transition: color 0.1s;
`,i().div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  border-top: 1px solid ${n.w4.colors.border};
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${n.w4.colors.sidebarTextMuted};
`,i().kbd`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background: ${n.w4.colors.sidebarHover};
  border: 1px solid ${n.w4.colors.border};
  border-radius: 3px;
  font-size: 10px;
  font-family: ${n.w4.typography.fontFamilyMono};
  color: ${n.w4.colors.sidebarTextMuted};
`,i().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 18px;
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  text-align: center;
`,i().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${n.w4.typography.fontFamily};
  background: ${n.w4.colors.mainBg};
`,i().div`
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
`,i().div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${n.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${n.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,i().div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,i().h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${n.w4.colors.mainText} 0%,
    ${n.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,i().p`
  font-size: ${n.w4.typography.fontSizeMd};
  color: ${n.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,i().span`
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,i().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${n.w4.colors.sidebarHover};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  color: ${n.w4.colors.sidebarTextMuted};
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: ${n.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${n.w4.colors.accent}60;
    color: ${n.w4.colors.mainText};
    background: ${n.w4.colors.accentMuted};
  }

  kbd {
    font-size: 10px;
    padding: 1px 4px;
    background: ${n.w4.colors.surface};
    border: 1px solid ${n.w4.colors.border};
    border-radius: 3px;
    color: ${n.w4.colors.sidebarTextMuted};
  }

  @media (max-width: ${n.w4.breakpoints.md}) {
    padding: 5px 8px;
    span { display: none; }
    kbd { display: none; }
  }
`,i().div`
  display: flex;
  gap: 4px;
  background: ${n.w4.colors.surface};
  border: 1px solid ${n.w4.colors.border};
  border-radius: ${n.w4.borderRadius.md};
  padding: 2px;
`,i().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${n.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${n.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?n.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":n.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":n.w4.colors.mainText};
  }
`,i().div`
  padding: ${({collapsed:e})=>e?"8px 4px":`8px ${n.w4.spacing.md}`};
  border-bottom: 1px solid ${n.w4.colors.border}60;
`,i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${({collapsed:e})=>e?"8px 0":"6px 10px"};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  background: ${({focused:e})=>e?`${n.w4.colors.accent}10`:n.w4.colors.sidebarHover};
  border: 1px solid ${({focused:e})=>e?`${n.w4.colors.accent}40`:"transparent"};
  border-radius: ${n.w4.borderRadius.md};
  transition: background 0.15s, border-color 0.2s;
  cursor: ${({collapsed:e})=>e?"pointer":"text"};
`,i().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${n.w4.colors.sidebarText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  min-width: 0;
  display: ${({collapsed:e})=>e?"none":"block"};
  &::placeholder { color: ${n.w4.colors.sidebarTextMuted}; }
`,i().button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: ${n.w4.colors.sidebarTextMuted};
  border-radius: ${n.w4.borderRadius.sm};
  transition: color 0.15s;
  &:hover { color: ${n.w4.colors.mainText}; }
`,i().div`
  max-height: 60vh;
  overflow-y: auto;
  padding: ${n.w4.spacing.sm} 0;
`,i().button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding: 8px ${n.w4.spacing.md};
  background: ${({active:e})=>e?n.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?n.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;
  &:hover { background: ${n.w4.colors.sidebarHover}; }
`,i().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${n.w4.colors.sidebarText};
`,i().span`
  font-weight: 400;
  color: ${n.w4.colors.sidebarTextMuted};
  font-size: 11px;
`,i().div`
  font-family: ${n.w4.typography.fontFamily};
  font-size: 12px;
  color: ${n.w4.colors.sidebarTextMuted};
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${n.w4.colors.accent}30;
    color: ${n.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,i().div`
  padding: 12px ${n.w4.spacing.md};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`,i().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,i().span`
  font-size: 11px;
  color: ${n.w4.colors.accent};
  font-weight: 600;
  margin-left: auto;
`,i().div`
  font-size: 14px;
  color: ${n.w4.colors.mainText};
  line-height: 1.65;

  p { margin: 0 0 0.6em; }
  p:last-child { margin-bottom: 0; }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${n.w4.colors.mainText};
    margin: 0.9em 0 0.3em;
    line-height: 1.3;
  }
  h1 { font-size: 17px; }
  h2 { font-size: 15px; }
  h3, h4, h5, h6 { font-size: 13.5px; }
  & > :first-child { margin-top: 0; }

  ul, ol {
    padding-left: 1.4em;
    margin: 0 0 0.6em;
    line-height: 1.65;
  }
  li { margin-bottom: 0.15em; }
  li p { margin: 0; }

  /* Task lists */
  ul.contains-task-list { list-style: none; padding-left: 0.2em; }
  li.task-list-item { display: flex; align-items: baseline; gap: 0.4em; }
  li.task-list-item input[type="checkbox"] {
    accent-color: ${n.w4.colors.accent};
    flex-shrink: 0;
    margin-top: 2px;
  }

  strong { font-weight: 600; color: ${n.w4.colors.mainText}; }
  em     { font-style: italic; }

  a {
    color: ${n.w4.colors.accent};
    text-decoration: none;

    &:hover { text-decoration: underline; color: ${n.w4.colors.accentHover}; }
  }

  blockquote {
    margin: 0.6em 0;
    padding: 6px 12px;
    border-left: 3px solid ${n.w4.colors.accent};
    background: ${n.w4.colors.surface};
    border-radius: 0 6px 6px 0;
    color: ${n.w4.colors.mainTextMuted};
    font-style: italic;
  }

  /* Inline code only — CodeBlock owns fenced blocks */
  code {
    font-family: ${n.w4.typography.fontFamilyMono};
    font-size: 12.5px;
    background: ${n.w4.colors.codeBg};
    border: 1px solid ${n.w4.colors.codeBorder};
    border-radius: 4px;
    padding: 1px 5px;
    color: ${n.w4.colors.mainText};
  }

  /* Pre reset — CodeBlock handles the chrome */
  pre { margin: 0.5em 0; }
  pre code { background: none; border: none; padding: 0; border-radius: 0; }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    margin: 0.5em 0;
    overflow: hidden;
    border-radius: ${n.w4.borderRadius.md};
  }
  th, td {
    padding: 7px 12px;
    border: 1px solid ${n.w4.colors.border};
    text-align: left;
    vertical-align: top;
  }
  th {
    background: ${n.w4.colors.surface};
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.03em;
    color: ${n.w4.colors.mainTextMuted};
    text-transform: uppercase;
  }
  tr:nth-of-type(even) td { background: ${n.w4.colors.surface}; }

  img {
    max-width: 100%;
    border-radius: ${n.w4.borderRadius.md};
    margin: 0.4em 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${n.w4.colors.border};
    margin: 0.8em 0;
  }

  /* KaTeX — hide the aria-only MathML fork, keep the HTML render */
  .katex .katex-mathml { display: none; }
  .katex { font-size: 1.05em; }
  .katex-display {
    margin: 0.6em 0;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 2px 0;
  }
`,i().nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${n.w4.spacing.sm} 0;
`,i().div`
  font-size: 10px;
  font-weight: 600;
  color: ${n.w4.colors.sidebarTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: ${n.w4.spacing.xs} ${n.w4.spacing.md};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&`
    font-size: 0;
    padding: 0;
    margin: 0;
    height: 0;
  `}
`,i().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 0 6px;
  border: none;
  border-radius: ${n.w4.borderRadius.md};
  background: ${({active:e})=>e?n.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?n.w4.colors.accent:n.w4.colors.sidebarText};
  font-family: ${n.w4.typography.fontFamily};
  font-size: ${n.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background ${n.w4.transitions.fast}, color ${n.w4.transitions.fast};

  &:hover {
    background: ${n.w4.colors.sidebarHover};
    color: ${n.w4.colors.mainText};
  }

  ${({collapsed:e})=>e&&`
    justify-content: center;
    padding: 8px;
    margin: 0 4px;
  `}
`,i().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`,i().span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"display: none;"}
`}}]);