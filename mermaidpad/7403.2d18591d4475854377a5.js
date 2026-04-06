"use strict";(self.webpackChunk_atlantis_mermaidpad=self.webpackChunk_atlantis_mermaidpad||[]).push([[7403],{4914(e,o,n){n.d(o,{FlyoutPanel:()=>u});var t=n(7359),i=n(3233),r=n(7207),a=n(255),d=n(217),s=n(5959),l=n(5185),c=n(5723);const p=r.keyframes`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,f=i.default.div`
  position: fixed;
  left: ${62}px;
  top: max(${56}px, ${({anchorY:e})=>e}px);
  z-index: 1200;
  background: #161b22;
  border: 1px solid rgba(88, 166, 255, 0.2);
  border-radius: ${d.w.borderRadius.lg};
  box-shadow:
    0 0 0 1px rgba(88, 166, 255, 0.06),
    0 16px 48px rgba(0, 0, 0, 0.75);
  min-width: 210px;
  overflow: hidden;
  animation: ${p} 0.18s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Left connector line */
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 2px;
    background: rgba(88, 166, 255, 0.35);
  }
`,g=i.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px 9px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: rgba(88, 166, 255, 0.85);
  border-bottom: 1px solid rgba(88, 166, 255, 0.1);
  font-family: ${d.w.typography.fontFamily};
`,x=i.default.button`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  /* Same padding as PanelTitle so icons stay in the same column */
  padding: 8px 14px;
  background: ${({active:e})=>e?"rgba(88, 166, 255, 0.1)":"none"};
  border: none;
  /* inset box-shadow for the active indicator — doesn't affect layout unlike border-left */
  box-shadow: inset 2px 0 0 ${({active:e})=>e?"#58a6ff":"transparent"};
  color: ${({active:e})=>e?"#58a6ff":"#c9d1d9"};
  font-size: ${d.w.typography.fontSizeBase};
  font-family: ${d.w.typography.fontFamily};
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, color 0.1s, box-shadow 0.1s;

  &:hover {
    background: rgba(88, 166, 255, 0.07);
    color: #e6edf3;
  }
`;function b({iconKey:e}){const o=e?l.t[e]??a.A:a.A;return(0,c.jsx)(o,{size:14,strokeWidth:1.75})}function m({entries:e,activeId:o,onSelect:n}){return(0,c.jsx)(c.Fragment,{children:e.map(e=>e.children?(0,c.jsx)(t.Fragment,{children:(0,c.jsx)(m,{entries:e.children,activeId:o,onSelect:n})},e.id):(0,c.jsxs)(x,{active:o===e.id,onClick:()=>n(e),children:[(0,c.jsx)(b,{iconKey:e.icon}),e.name]},e.id))})}function u({activeId:e}){const{flyout:o,scheduleFlyoutClose:n,cancelFlyoutClose:t}=(0,s.c)();if(!o)return null;const i=o.entry.icon?l.t[o.entry.icon]??a.A:a.A;return(0,c.jsxs)(f,{anchorY:o.anchorY,onMouseEnter:t,onMouseLeave:n,children:[(0,c.jsxs)(g,{children:[(0,c.jsx)(i,{size:13,strokeWidth:2}),o.entry.name]}),(0,c.jsx)(m,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),n()}})]})}},5959(e,o,n){n.d(o,{c:()=>r});var t=n(7359);const i=(0,t.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),r=()=>(0,t.useContext)(i)},5185(e,o,n){n.d(o,{t:()=>w});var t=n(7901),i=n(2164),r=n(1837),a=n(5751),d=n(255),s=n(9633),l=n(2946),c=n(822),p=n(7032),f=n(8218),g=n(5553),x=n(2820),b=n(6673),m=n(3249),u=n(2932),h=n(7230);const w={"book-open":t.A,"file-text":a.A,package:b.A,compass:r.A,"git-branch":l.A,github:c.A,terminal:m.A,zap:h.A,bot:i.A,lightbulb:f.A,"message-square":x.A,wrench:u.A,"layout-grid":p.A,file:d.A,folder:s.A,"map-pin":g.A}},3188(e,o,n){n.d(o,{w4:()=>t.w});var t=n(217),i=(n(7359),n(3233));n(5723),i.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 ${t.w.spacing.sm};
  background: ${t.w.colors.surface};
  border: 1px solid ${t.w.colors.border};
  border-radius: ${t.w.borderRadius.md};
  color: ${t.w.colors.mainText};
  font-family: ${t.w.typography.fontFamily};
  font-size: ${t.w.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${t.w.colors.sidebarHover};
    border-color: ${t.w.colors.accent};
  }
`,i.default.div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 160px;
  background: ${t.w.colors.surface};
  border: 1px solid ${t.w.colors.border};
  border-radius: ${t.w.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 100;
`,i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px ${t.w.spacing.sm};
  background: ${({active:e})=>e?t.w.colors.sidebarActiveBg:"transparent"};
  border: none;
  color: ${({active:e})=>e?t.w.colors.accent:t.w.colors.mainText};
  font-family: ${t.w.typography.fontFamily};
  font-size: ${t.w.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;

  &:hover {
    background: ${t.w.colors.sidebarHover};
  }
`,i.default.div`
  position: relative;
`,i.default.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({active:e})=>e?t.w.colors.accent:t.w.colors.sidebarTextMuted};
  margin-right: 6px;
  flex-shrink: 0;
`,n(5959);const r="260px",a="56px";i.default.header`
  display: flex;
  align-items: center;
  height: ${"48px"};
  background: ${t.w.colors.sidebarBg};
  border-bottom: 1px solid ${t.w.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
`,i.default.div`
  width: ${a};
  min-width: ${a};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${t.w.colors.sidebarBorder};
  flex-shrink: 0;
`,i.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${t.w.borderRadius.md};
  cursor: pointer;
  color: ${t.w.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover {
    background: ${t.w.colors.sidebarHover};
    color: ${t.w.colors.sidebarText};
  }
`,i.default.button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${t.w.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${t.w.typography.fontFamily};
  font-size: ${t.w.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${t.w.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }

  span { color: ${t.w.colors.accent}; }
`,i.default.div`
  font-size: ${t.w.typography.fontSizeBase};
  font-weight: 500;
  color: ${t.w.colors.sidebarTextMuted};
  font-family: ${t.w.typography.fontFamily};
  padding-left: ${t.w.spacing.sm};

  &::before {
    content: '/';
    margin-right: ${t.w.spacing.sm};
    color: ${t.w.colors.border};
  }
`,i.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${t.w.spacing.lg};
`,i.default.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,i.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${t.w.colors.mainBg};
  font-family: ${t.w.typography.fontFamily};
  color: ${t.w.colors.mainText};
  overflow: hidden;
`,i.default.aside`
  width: ${({collapsed:e})=>e?a:r};
  min-width: ${({collapsed:e})=>e?a:r};
  background: ${t.w.colors.sidebarBg};
  border-right: 1px solid ${t.w.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${t.w.breakpoints.md}) {
    display: none;
  }
`,i.default.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,i.default.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,n(5185),i.default.div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,i.default.div`
  overflow: hidden;
`,i.default.div`
  padding-left: ${t.w.spacing.md};
`,i.default.div`
  display: flex;
  flex-direction: column;
`,i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${t.w.spacing.sm} ${t.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  /* gap=0 when collapsed so the invisible label doesn't shift the icon off-center */
  gap: ${({collapsed:e})=>e?"0":t.w.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${t.w.colors.sidebarTextMuted};
  font-size: ${t.w.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${t.w.typography.fontFamily};
  text-align: left;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${t.w.colors.sidebarText};
    background: ${t.w.colors.sidebarHover};
  }
`,i.default.span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,i.default.span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>e?0:1};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,i.default.span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${t.w.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,i.default.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`6px ${t.w.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?t.w.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?t.w.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?t.w.colors.sidebarActive:t.w.colors.sidebarText};
  font-size: ${t.w.typography.fontSizeBase};
  font-family: ${t.w.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${t.w.borderRadius.sm} ${t.w.borderRadius.sm} 0`};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${t.w.colors.sidebarHover};
  }
`;const d=n(7207).keyframes`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;i.default.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${d} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: rgba(88, 166, 255, 0.3);
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: #0d1117;
  }
`,i.default.span`
  display: block;
  background: #0d1117;
  border: 1px solid rgba(88, 166, 255, 0.25);
  box-shadow:
    0 0 0 1px rgba(88, 166, 255, 0.08),
    0 8px 32px rgba(0, 0, 0, 0.7);
  color: #e6edf3;
  font-size: 12px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: 6px;
  white-space: nowrap;
`,n(4914)},217(e,o,n){n.d(o,{w:()=>t});const t={colors:{sidebarBg:"#0f1117",sidebarText:"#c9d1d9",sidebarTextMuted:"#6e7681",sidebarActive:"#58a6ff",sidebarActiveBg:"#161b22",sidebarHover:"#21262d",sidebarBorder:"#21262d",mainBg:"#0d1117",mainText:"#e6edf3",mainTextMuted:"#8b949e",accent:"#58a6ff",accentHover:"#79c0ff",codeBg:"#161b22",codeBorder:"#30363d",border:"#30363d",surface:"#161b22"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",lineHeightBase:"1.6"},borderRadius:{sm:"4px",md:"6px",lg:"12px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"}}},9336(e,o,n){n.d(o,{k:()=>t});const t=[{label:"Flowchart",code:"flowchart TD\n    A([Start]) --\x3e B{Is it working?}\n    B -- Yes --\x3e C[Great!]\n    B -- No --\x3e D[Debug it]\n    D --\x3e E{Fixed?}\n    E -- Yes --\x3e C\n    E -- No --\x3e F[Ask for help]\n    F --\x3e D\n    C --\x3e G([End])"},{label:"Sequence Diagram",code:"sequenceDiagram\n    participant Client\n    participant API\n    participant DB\n\n    Client->>API: POST /login\n    API->>DB: SELECT user WHERE email=?\n    DB--\x3e>API: User record\n    API--\x3e>Client: 401 Unauthorized\n\n    Client->>API: POST /login (correct creds)\n    API->>DB: SELECT user WHERE email=?\n    DB--\x3e>API: User record\n    API--\x3e>Client: 200 OK + JWT token\n    Client->>API: GET /profile (Bearer token)\n    API--\x3e>Client: 200 OK + profile data"},{label:"Class Diagram",code:'classDiagram\n    class Animal {\n      +String name\n      +int age\n      +makeSound() String\n    }\n    class Dog {\n      +String breed\n      +fetch() void\n    }\n    class Cat {\n      +bool isIndoor\n      +purr() void\n    }\n    class Owner {\n      +String name\n      +List~Animal~ pets\n      +addPet(Animal) void\n    }\n    Animal <|-- Dog\n    Animal <|-- Cat\n    Owner "1" --\x3e "0..*" Animal'},{label:"Entity Relationship",code:'erDiagram\n    USER {\n      int id PK\n      string email\n      string name\n      datetime created_at\n    }\n    ORDER {\n      int id PK\n      int user_id FK\n      decimal total\n      string status\n    }\n    ORDER_ITEM {\n      int id PK\n      int order_id FK\n      int product_id FK\n      int quantity\n      decimal price\n    }\n    PRODUCT {\n      int id PK\n      string name\n      decimal price\n      int stock\n    }\n    USER ||--o{ ORDER : places\n    ORDER ||--|{ ORDER_ITEM : contains\n    PRODUCT ||--o{ ORDER_ITEM : "ordered in"'},{label:"Gantt Chart",code:"gantt\n    title Project Timeline\n    dateFormat  YYYY-MM-DD\n    section Planning\n    Requirements    :done,    req,  2024-01-01, 2024-01-14\n    Design          :done,    des,  2024-01-15, 2024-01-28\n    section Development\n    Backend API     :active,  be,   2024-01-29, 2024-02-25\n    Frontend        :         fe,   2024-02-01, 2024-02-28\n    section Testing\n    QA & Testing    :         qa,   2024-02-26, 2024-03-10\n    Bug fixes       :         fix,  2024-03-11, 2024-03-17\n    section Release\n    Deploy          :         dep,  2024-03-18, 2024-03-20"},{label:"Pie Chart",code:'pie title Browser Market Share 2024\n    "Chrome" : 65.1\n    "Safari" : 18.8\n    "Edge" : 5.2\n    "Firefox" : 4.0\n    "Other" : 6.9'},{label:"State Diagram",code:"stateDiagram-v2\n    [*] --\x3e Idle\n    Idle --\x3e Loading : fetchData()\n    Loading --\x3e Success : data received\n    Loading --\x3e Error : request failed\n    Success --\x3e Idle : reset()\n    Error --\x3e Loading : retry()\n    Error --\x3e Idle : dismiss()\n    Success --\x3e [*] : done"},{label:"Git Graph",code:'gitGraph\n   commit id: "Initial commit"\n   commit id: "Add README"\n   branch feature/login\n   checkout feature/login\n   commit id: "Add login form"\n   commit id: "Add auth API"\n   checkout main\n   branch feature/dashboard\n   checkout feature/dashboard\n   commit id: "Add dashboard"\n   checkout main\n   merge feature/login id: "Merge login"\n   commit id: "Fix typo"\n   merge feature/dashboard id: "Merge dashboard"\n   commit id: "v1.0.0" tag: "v1.0.0"'}]}}]);
//# sourceMappingURL=7403.2d18591d4475854377a5.js.map