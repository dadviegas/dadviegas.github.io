"use strict";(self.webpackChunk_atlantis_pad=self.webpackChunk_atlantis_pad||[]).push([["3499"],{53804(e,o,a){a.d(o,{M:()=>u});var r=a(65723);a(37991);var t=a(36859),i=a.n(t),n=a(51530),l=a(15496),s=a(15726);let d=i().div`
  display: flex;
  flex-direction: column;
  flex: ${({collapsed:e})=>e?"0 0 0px":"1"};
  min-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  border-right: 1px solid ${s.w4.colors.sidebarBorder};
  background: ${s.w4.colors.mainBg};
  transition: flex 0.25s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
`,c=i().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${s.w4.spacing.md};
  height: 36px;
  background: ${s.w4.colors.sidebarBg};
  border-bottom: 1px solid ${s.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,p=i().span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${s.w4.colors.sidebarTextMuted};
  font-family: ${s.w4.typography.fontFamily};
`,g=i().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${s.w4.borderRadius.sm};
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${s.w4.colors.sidebarText};
  }
`,m=i().textarea`
  flex: 1;
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  padding: ${s.w4.spacing.lg};
  background: ${s.w4.colors.mainBg};
  color: ${s.w4.colors.mainText};
  font-family: ${s.w4.typography.fontFamilyMono};
  font-size: 13px;
  line-height: 1.7;
  tab-size: 2;
  caret-color: ${s.w4.colors.accent};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &::placeholder {
    color: ${s.w4.colors.sidebarTextMuted};
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${s.w4.colors.border};
    border-radius: 3px;
  }
`,f=i().button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 4px;
  background: ${s.w4.colors.sidebarBg};
  border: 1px solid ${s.w4.colors.sidebarBorder};
  border-left: none;
  border-radius: 0 ${s.w4.borderRadius.md} ${s.w4.borderRadius.md} 0;
  cursor: pointer;
  color: ${s.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  z-index: 10;

  &:hover {
    background: ${s.w4.colors.sidebarHover};
    color: ${s.w4.colors.sidebarText};
  }
`,x=i().span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${s.w4.typography.fontFamily};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`;function u({value:e,onChange:o,collapsed:a,onToggleCollapse:t,scrollRef:i,onScroll:s}){return a?(0,r.jsx)("div",{style:{position:"relative",flexShrink:0},children:(0,r.jsxs)(f,{onClick:t,title:"Show editor",children:[(0,r.jsx)(n.A,{size:14}),(0,r.jsx)(x,{children:"Editor"})]})}):(0,r.jsxs)(d,{collapsed:!1,children:[(0,r.jsxs)(c,{children:[(0,r.jsx)(p,{children:"Editor"}),(0,r.jsx)(g,{onClick:t,title:"Collapse editor",children:(0,r.jsx)(l.A,{size:15})})]}),(0,r.jsx)(m,{ref:i,value:e,onChange:e=>o(e.target.value),onScroll:s,placeholder:"Write markdown here…",spellCheck:!1})]})}},7279(e,o,a){a.d(o,{H:()=>b});var r=a(65723),t=a(37991),i=a(36859),n=a.n(i),l=a(37901),s=a(70679),d=a(15726);let c=[{id:"showcase",label:"Full Showcase",description:"All supported features in one document",content:`# Markdown Editor — Feature Showcase

Welcome! This editor supports **rich markdown** with live preview.
Use the collapse buttons to hide the editor or preview pane.

---

## Text Formatting

You can write **bold**, *italic*, ~~strikethrough~~, and \`inline code\`.
Links work too: [Atlantis](https://github.com) opens in a new tab.

> [!NOTE]
> This is a GitHub-style callout. Supported types: NOTE, TIP, WARNING, CAUTION, IMPORTANT.

> [!TIP]
> Collapse the editor to enter reading mode. Collapse the preview to focus on writing.

---

## Code Blocks

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUser(id: number): Promise<User> {
  const res = await fetch(\`/api/users/\${id}\`);
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return res.json();
}
\`\`\`

---

## Math (LaTeX)

Inline math: $E = mc^2$ and the Euler identity $e^{i\\pi} + 1 = 0$.

Display math:

$$
\\int_{-\\infty}^{\\infty} e^{-x^2}\\, dx = \\sqrt{\\pi}
$$

---

## Mermaid Diagrams

\`\`\`mermaid
flowchart TD
    A[Write Markdown] --> B{Live Preview}
    B -->|Renders| C[HTML Output]
    B -->|Supports| D[Math / Mermaid / Code]
    C --> E[Reading Mode]
    D --> E
\`\`\`

---

## Tables

| Feature        | Supported | Notes                       |
|----------------|-----------|-----------------------------|
| GFM tables     | ✅        | With striped rows            |
| Math (LaTeX)   | ✅        | Inline and block             |
| Mermaid        | ✅        | Flowcharts, sequences, etc.  |
| Charts         | ✅        | Bar, line, pie               |
| Clock          | ✅        | Interactive analog + digital |
| Syntax highlight | ✅      | 20+ languages               |

---

## Charts

\`\`\`chart
type: bar
title: Monthly Sales
labels: [Jan, Feb, Mar, Apr, May, Jun]
data: [12, 19, 8, 15, 22, 17]
colors: [#388bfd, #3fb950, #d29922, #a371f7, #f87171, #22d3ee]
\`\`\`

\`\`\`chart
type: pie
title: Browser Market Share
labels: [Chrome, Safari, Firefox, Edge, Other]
data: [65, 18, 7, 5, 5]
\`\`\`

\`\`\`chart
type: line
title: Temperature (\xb0C)
labels: [Mon, Tue, Wed, Thu, Fri, Sat, Sun]
data: [18, 20, 22, 19, 23, 25, 24]
\`\`\`

---

## Interactive Clock

\`\`\`clock
locale: en
\`\`\`

---

## Task Lists

- [x] Side-by-side editor and preview
- [x] Collapsible panes
- [x] Math support
- [x] Mermaid diagrams
- [x] Charts (bar, line, pie)
- [x] Interactive clock
- [x] Syntax highlighting
`},{id:"charts",label:"Charts",description:"Bar, line, and pie charts from simple data",content:"# Chart Examples\n\nUse ` ``` chart` code blocks to render interactive charts.\n\n---\n\n## Bar Chart\n\n```chart\ntype: bar\ntitle: Favourite Fruits\nlabels: [Apple, Banana, Orange, Strawberry, Grapes]\ndata: [4, 6, 3, 7, 2]\ncolors: [#ff6b6b, #ffd93d, #ff9f43, #ee5a24, #6c5ce7]\n```\n\n---\n\n## Pie Chart\n\n```chart\ntype: pie\ntitle: Time Spent Today\nlabels: [School, Homework, Play, Eating, Sleep]\ndata: [6, 2, 3, 1, 10]\n```\n\n---\n\n## Line Chart\n\n```chart\ntype: line\ntitle: Weekly Steps (thousands)\nlabels: [Mon, Tue, Wed, Thu, Fri, Sat, Sun]\ndata: [5, 7, 4, 8, 6, 12, 9]\ncolors: [#3fb950]\n```\n\n---\n\n## Interactive Clock\n\n```clock\nlocale: en\n```"},{id:"math",label:"Math (LaTeX)",description:"Mathematical notation with KaTeX",content:`# Math Examples

All math is rendered with KaTeX.
Use \`$...$\` for inline math and \`$$...$$\` for display math.

---

## Calculus

$$
\\frac{d}{dx}\\left[\\int_a^x f(t)\\, dt\\right] = f(x)
$$

$$
\\int_0^\\infty e^{-x^2}\\, dx = \\frac{\\sqrt{\\pi}}{2}
$$

---

## Linear Algebra

$$
\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc
$$

---

## Probability

Bayes' theorem:

$$
P(A \\mid B) = \\frac{P(B \\mid A)\\, P(A)}{P(B)}
$$
`}],p=n().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
    border-color: ${d.w4.colors.accent};
  }
`,g=n().div`
  display: ${({open:e})=>e?"block":"none"};
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 240px;
  background: ${d.w4.colors.sidebarBg};
  border: 1px solid ${d.w4.colors.sidebarBorder};
  border-radius: ${d.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,m=n().div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  border-bottom: 1px solid ${d.w4.colors.sidebarBorder};
`,f=n().button`
  display: block;
  width: 100%;
  padding: 8px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: background 0.12s;

  &:hover {
    background: ${d.w4.colors.sidebarHover};
  }
`,x=n().div`
  font-size: ${d.w4.typography.fontSizeBase};
  color: ${d.w4.colors.mainText};
  font-family: ${d.w4.typography.fontFamily};
  font-weight: 500;
`,u=n().div`
  font-size: 11px;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  margin-top: 1px;
`,h=n().div`
  position: relative;
`;function b({onSelect:e}){let[o,a]=(0,t.useState)(!1),i=(0,t.useRef)(null);return(0,t.useEffect)(()=>{if(!o)return;let e=e=>{i.current&&!i.current.contains(e.target)&&a(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[o]),(0,r.jsxs)(h,{ref:i,children:[(0,r.jsxs)(p,{onClick:()=>a(e=>!e),children:[(0,r.jsx)(l.A,{size:14}),"Examples",(0,r.jsx)(s.A,{size:13,style:{marginLeft:2}})]}),(0,r.jsxs)(g,{open:o,children:[(0,r.jsx)(m,{children:"Load an example"}),c.map(o=>(0,r.jsxs)(f,{onClick:()=>{e(o.content),a(!1)},children:[(0,r.jsx)(x,{children:o.label}),(0,r.jsx)(u,{children:o.description})]},o.id))]})]})}},56666(e,o,a){a.d(o,{C:()=>u});var r=a(65723),t=a(37991),i=a(36859),n=a.n(i),l=a(37901),s=a(70679),d=a(15726);let c=[{label:"Flowchart",code:`flowchart TD
    A([Start]) --> B{Is it working?}
    B -- Yes --> C[Great!]
    B -- No --> D[Debug it]
    D --> E{Fixed?}
    E -- Yes --> C
    E -- No --> F[Ask for help]
    F --> D
    C --> G([End])`},{label:"Sequence Diagram",code:`sequenceDiagram
    participant Client
    participant API
    participant DB

    Client->>API: POST /login
    API->>DB: SELECT user WHERE email=?
    DB-->>API: User record
    API-->>Client: 200 OK + JWT token
    Client->>API: GET /profile (Bearer token)
    API-->>Client: 200 OK + profile data`},{label:"Class Diagram",code:`classDiagram
    class Animal {
      +String name
      +int age
      +makeSound() String
    }
    class Dog {
      +String breed
      +fetch() void
    }
    class Cat {
      +bool isIndoor
      +purr() void
    }
    Animal <|-- Dog
    Animal <|-- Cat`},{label:"Entity Relationship",code:`erDiagram
    USER {
      int id PK
      string email
      string name
    }
    ORDER {
      int id PK
      int user_id FK
      decimal total
    }
    PRODUCT {
      int id PK
      string name
      decimal price
    }
    USER ||--o{ ORDER : places
    ORDER ||--|{ PRODUCT : contains`},{label:"Gantt Chart",code:`gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Planning
    Requirements    :done,    req,  2024-01-01, 2024-01-14
    Design          :done,    des,  2024-01-15, 2024-01-28
    section Development
    Backend API     :active,  be,   2024-01-29, 2024-02-25
    Frontend        :         fe,   2024-02-01, 2024-02-28
    section Release
    Deploy          :         dep,  2024-03-18, 2024-03-20`},{label:"State Diagram",code:`stateDiagram-v2
    [*] --> Idle
    Idle --> Loading : fetchData()
    Loading --> Success : data received
    Loading --> Error : request failed
    Success --> Idle : reset()
    Error --> Loading : retry()
    Error --> Idle : dismiss()
    Success --> [*] : done`},{label:"Git Graph",code:`gitGraph
   commit id: "Initial commit"
   commit id: "Add README"
   branch feature/login
   checkout feature/login
   commit id: "Add login form"
   commit id: "Add auth API"
   checkout main
   merge feature/login id: "Merge login"
   commit id: "v1.0.0" tag: "v1.0.0"`}],p=n().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${d.w4.colors.border};
  border-radius: ${d.w4.borderRadius.md};
  color: ${d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;
  &:hover { background: ${d.w4.colors.sidebarHover}; border-color: ${d.w4.colors.accent}; }
`,g=n().div`
  display: ${({open:e})=>e?"block":"none"};
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 200px;
  background: ${d.w4.colors.sidebarBg};
  border: 1px solid ${d.w4.colors.sidebarBorder};
  border-radius: ${d.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,m=n().div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.w4.colors.sidebarTextMuted};
  font-family: ${d.w4.typography.fontFamily};
  border-bottom: 1px solid ${d.w4.colors.sidebarBorder};
`,f=n().button`
  display: block;
  width: 100%;
  padding: 8px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  color: ${d.w4.colors.mainText};
  font-size: ${d.w4.typography.fontSizeBase};
  font-family: ${d.w4.typography.fontFamily};
  transition: background 0.12s;
  &:hover { background: ${d.w4.colors.sidebarHover}; }
`,x=n().div`
  position: relative;
`;function u({onSelect:e}){let[o,a]=(0,t.useState)(!1),i=(0,t.useRef)(null);return(0,t.useEffect)(()=>{if(!o)return;let e=e=>{i.current&&!i.current.contains(e.target)&&a(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[o]),(0,r.jsxs)(x,{ref:i,children:[(0,r.jsxs)(p,{onClick:()=>a(e=>!e),children:[(0,r.jsx)(l.A,{size:14}),"Examples",(0,r.jsx)(s.A,{size:13,style:{marginLeft:2}})]}),(0,r.jsxs)(g,{open:o,children:[(0,r.jsx)(m,{children:"Load a diagram"}),c.map(o=>(0,r.jsx)(f,{onClick:()=>{e(o.code),a(!1)},children:o.label},o.label))]})]})}},65320(e,o,a){a.d(o,{u:()=>$});var r=a(65723),t=a(37991),i=a(36859),n=a.n(i),l=a(49881),s=a(13045),d=a(52534),c=a(15726),p=a(29738);p.default.initialize({startOnLoad:!1,theme:"dark",securityLevel:"loose"});let g=`
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: ${c.w4.colors.border}; border-radius: 3px; }
`,m=n().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  background: #1a1f2e;
`,f=n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${c.w4.spacing.md};
  height: 36px;
  background: ${c.w4.colors.sidebarBg};
  border-bottom: 1px solid ${c.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,x=n().span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${c.w4.colors.sidebarTextMuted};
  font-family: ${c.w4.typography.fontFamily};
`,u=n().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${c.w4.borderRadius.sm};
  cursor: pointer;
  color: ${c.w4.colors.sidebarTextMuted};
  transition: background 0.12s, color 0.12s;
  &:hover { background: ${c.w4.colors.sidebarHover}; color: ${c.w4.colors.sidebarText}; }
`,h=n().div`
  flex: 1;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${c.w4.spacing.xl};
  ${g}
  & svg { max-width: 100%; height: auto; }
`,b=n().div`
  margin: ${c.w4.spacing.lg};
  padding: ${c.w4.spacing.md};
  background: rgba(248, 113, 113, 0.08);
  border: 1px solid rgba(248, 113, 113, 0.25);
  border-radius: ${c.w4.borderRadius.md};
  color: #f87171;
  font-size: 12px;
  font-family: ${c.w4.typography.fontFamilyMono};
  line-height: 1.5;
  display: flex;
  gap: 8px;
  align-items: flex-start;
  flex-shrink: 0;
`,w=n().button`
  position: relative;
  flex-shrink: 0;
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 4px;
  background: ${c.w4.colors.sidebarBg};
  border: 1px solid ${c.w4.colors.sidebarBorder};
  border-right: none;
  border-radius: ${c.w4.borderRadius.md} 0 0 ${c.w4.borderRadius.md};
  cursor: pointer;
  color: ${c.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  align-self: center;
  &:hover { background: ${c.w4.colors.sidebarHover}; color: ${c.w4.colors.sidebarText}; }
`,y=n().span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${c.w4.typography.fontFamily};
  writing-mode: vertical-rl;
`;function $({code:e,collapsed:o,onToggleCollapse:a}){let[i,n]=(0,t.useState)(""),[c,g]=(0,t.useState)(null),v=(0,t.useRef)(0),z=(0,t.useCallback)(async e=>{if(!e.trim()){n(""),g(null);return}let o=++v.current;try{let a="mermaid-"+Date.now(),{svg:r}=await p.default.render(a,e);v.current===o&&(n(r),g(null))}catch(e){v.current===o&&(g(e instanceof Error?e.message:String(e)),n(""))}},[]);return((0,t.useEffect)(()=>{let o=setTimeout(()=>z(e),300);return()=>clearTimeout(o)},[e,z]),o)?(0,r.jsxs)(w,{onClick:a,title:"Show preview",children:[(0,r.jsx)(l.A,{size:14}),(0,r.jsx)(y,{children:"Preview"})]}):(0,r.jsxs)(m,{children:[(0,r.jsxs)(f,{children:[(0,r.jsx)(x,{children:"Preview"}),(0,r.jsx)(u,{onClick:a,title:"Collapse preview",children:(0,r.jsx)(s.A,{size:15})})]}),c&&(0,r.jsxs)(b,{children:[(0,r.jsx)(d.A,{size:14,style:{flexShrink:0,marginTop:1}}),c]}),(0,r.jsx)(h,{dangerouslySetInnerHTML:{__html:i}})]})}},2099(e,o,a){a.d(o,{r:()=>k});var r=a(65723);a(37991);var t=a(11352),i=a(76710),n=a(4311),l=a(73639),s=a(8411);a(75406);var d=a(36859),c=a.n(d),p=a(49881),g=a(13045),m=a(15726),f=a(61318);function x(){return e=>{!function e(o){if("blockquote"===o.type){let e=o.children?.[0];if(e?.type==="paragraph"){let a=e.children?.[0];if(a?.type==="text"){let r=a.value?.match(/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i);r&&(a.value=a.value.slice(r[0].length),a.value.trim()||1!==e.children.length||o.children.shift(),o.data=o.data??{},o.data.hName="div",o.data.hProperties={"data-callout":r[1].toUpperCase()})}}}o.children?.forEach(e)}(e)}}let u=c().div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  background: ${m.w4.colors.mainBg};
`,h=c().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${m.w4.spacing.md};
  height: 36px;
  background: ${m.w4.colors.sidebarBg};
  border-bottom: 1px solid ${m.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,b=c().span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${m.w4.colors.sidebarTextMuted};
  font-family: ${m.w4.typography.fontFamily};
`,w=c().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${m.w4.borderRadius.sm};
  cursor: pointer;
  color: ${m.w4.colors.sidebarTextMuted};
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${m.w4.colors.sidebarHover};
    color: ${m.w4.colors.sidebarText};
  }
`,y=c().div`
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${m.w4.colors.border};
    border-radius: 3px;
  }
`,$=c().article`
  max-width: 780px;
  margin: 0 auto;
  padding: ${m.w4.spacing.xl} ${m.w4.spacing.xxl};
  color: ${m.w4.colors.mainText};
  font-family: ${m.w4.typography.fontFamily};
  font-size: ${m.w4.typography.fontSizeMd};
  line-height: ${m.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${m.w4.spacing.xl} 0 ${m.w4.spacing.md};
    color: ${m.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    &:first-of-type { margin-top: 0; }
  }
  h1 { font-size: ${m.w4.typography.fontSizeXl}; border-bottom: 1px solid ${m.w4.colors.border}; padding-bottom: ${m.w4.spacing.sm}; }
  h2 { font-size: ${m.w4.typography.fontSizeLg}; border-bottom: 1px solid ${m.w4.colors.border}; padding-bottom: ${m.w4.spacing.xs}; }
  h3 { font-size: ${m.w4.typography.fontSizeMd}; }

  p { margin: ${m.w4.spacing.md} 0; }

  a {
    color: ${m.w4.colors.accent};
    text-decoration: none;
    &:hover { text-decoration: underline; color: ${m.w4.colors.accentHover}; }
  }

  ul, ol { margin: ${m.w4.spacing.md} 0; padding-left: ${m.w4.spacing.xl}; }
  li { margin: ${m.w4.spacing.xs} 0; }

  /* Task list checkboxes */
  li input[type="checkbox"] {
    margin-right: 6px;
    accent-color: ${m.w4.colors.accent};
  }

  blockquote {
    border-left: 3px solid ${m.w4.colors.border};
    margin: ${m.w4.spacing.lg} 0;
    padding: ${m.w4.spacing.sm} ${m.w4.spacing.lg};
    background: ${m.w4.colors.surface};
    color: ${m.w4.colors.mainTextMuted};
    border-radius: 0 ${m.w4.borderRadius.sm} ${m.w4.borderRadius.sm} 0;
  }

  /* Callout variants */
  div[data-callout] {
    border-radius: ${m.w4.borderRadius.md};
    padding: ${m.w4.spacing.md} ${m.w4.spacing.lg};
    margin: ${m.w4.spacing.lg} 0;
    border-left: 4px solid;
    font-size: ${m.w4.typography.fontSizeBase};

    &::before {
      display: block;
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: ${m.w4.spacing.xs};
    }
  }
  div[data-callout="NOTE"]      { background: rgba(56,139,253,0.1);  border-color: #388bfd; &::before { content: "Note";      color: #388bfd; } }
  div[data-callout="TIP"]       { background: rgba(63,185,80,0.1);   border-color: #3fb950; &::before { content: "Tip";       color: #3fb950; } }
  div[data-callout="WARNING"]   { background: rgba(210,153,34,0.1);  border-color: #d29922; &::before { content: "Warning";   color: #d29922; } }
  div[data-callout="CAUTION"]   { background: rgba(248,81,73,0.1);   border-color: #f85149; &::before { content: "Caution";   color: #f85149; } }
  div[data-callout="IMPORTANT"] { background: rgba(163,113,247,0.1); border-color: #a371f7; &::before { content: "Important"; color: #a371f7; } }

  code {
    font-family: ${m.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${m.w4.colors.codeBg};
    border: 1px solid ${m.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${m.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${m.w4.spacing.lg} 0; font-size: ${m.w4.typography.fontSizeBase}; }
  th, td { padding: ${m.w4.spacing.sm} ${m.w4.spacing.md}; border: 1px solid ${m.w4.colors.border}; text-align: left; }
  th { background: ${m.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${m.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${m.w4.colors.border}; margin: ${m.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${m.w4.borderRadius.md}; }

  /* KaTeX display math spacing */
  .math-display {
    overflow-x: auto;
    padding: ${m.w4.spacing.md} 0;
  }
`,v=c().button`
  position: relative;
  flex-shrink: 0;
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 4px;
  background: ${m.w4.colors.sidebarBg};
  border: 1px solid ${m.w4.colors.sidebarBorder};
  border-right: none;
  border-radius: ${m.w4.borderRadius.md} 0 0 ${m.w4.borderRadius.md};
  cursor: pointer;
  color: ${m.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;
  align-self: center;

  &:hover {
    background: ${m.w4.colors.sidebarHover};
    color: ${m.w4.colors.sidebarText};
  }
`,z=c().span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${m.w4.typography.fontFamily};
  writing-mode: vertical-rl;
`;function k({content:e,collapsed:o,onToggleCollapse:a,scrollRef:d,onScroll:c}){return o?(0,r.jsxs)(v,{onClick:a,title:"Show preview",children:[(0,r.jsx)(p.A,{size:14}),(0,r.jsx)(z,{children:"Preview"})]}):(0,r.jsxs)(u,{children:[(0,r.jsxs)(h,{children:[(0,r.jsx)(b,{children:"Preview"}),(0,r.jsx)(w,{onClick:a,title:"Collapse preview",children:(0,r.jsx)(g.A,{size:15})})]}),(0,r.jsx)(y,{ref:d,onScroll:c,children:(0,r.jsx)($,{children:(0,r.jsx)(t.oz,{remarkPlugins:[i.A,n.A,x],rehypePlugins:[l.A,s.A],components:{div({node:e,children:o,...a}){let t=a["data-callout"];return t?(0,r.jsx)("div",{"data-callout":t,children:o}):(0,r.jsx)("div",{...a,children:o})},pre:({children:e})=>(0,r.jsx)(r.Fragment,{children:e}),code({className:e,children:o}){let a=/language-(\w+)/.exec(e??"")?.[1],t=String(o).replace(/\n$/,"");return"mermaid"===a?(0,r.jsx)(f.t,{code:t}):"chart"===a?(0,r.jsx)(f.MX,{code:t}):"clock"===a?(0,r.jsx)(f.sc,{code:t}):a||t.includes("\n")?(0,r.jsx)(f.NG,{lang:a,code:t}):(0,r.jsx)("code",{className:e,children:o})}},children:e})})})]})}},61318(e,o,a){a.d(o,{MX:()=>k,t:()=>g,sc:()=>P,NG:()=>_});var r=a(65723),t=a(37991),i=a(15726),n=a(36859),l=a.n(n);l().nav`padding: ${i.w4.spacing.sm} 0;`,l().div`
  border-bottom: 1px solid ${i.w4.colors.border}60;
  margin-bottom: 2px;
`,l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${i.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${i.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${i.w4.colors.sidebarText}; }
`,l().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,l().span`
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,l().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,l().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,l().div`overflow: hidden;`,l().div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,l().button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${i.w4.spacing.md};
  background: ${({active:e})=>e?i.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?i.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?i.w4.colors.sidebarActive:i.w4.colors.sidebarText};
  font-size: ${i.w4.typography.fontSizeBase};
  font-family: ${i.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${i.w4.colors.sidebarHover}; }
`,l().button`
  opacity: ${({active:e})=>+!!e};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":i.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;let s=l().div`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.codeBorder};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.lg};
  margin: ${i.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  svg { max-width: 100%; }
`,d=l().pre`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.codeBorder};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.md};
  margin: ${i.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${i.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,c=!1;function p(e){if("u"<typeof window)return e;let o=e.match(/^var\((--[-\w]+)\)$/);return o&&getComputedStyle(document.documentElement).getPropertyValue(o[1]).trim()||e}function g({code:e}){let o=(0,t.useRef)(null),[n,l]=(0,t.useState)(null),[m,f]=(0,t.useState)(!1);return((0,t.useEffect)(()=>{let r=!1;if(l(null),f(!1),!e.trim())return void f(!0);let t=e.trim().split(/\r?\n/)[0]?.trim()??"";return/^(?:---[\s\S]*?---\s*)?(?:graph|flowchart|sequenceDiagram|classDiagram|stateDiagram(?:-v2)?|erDiagram|pie|gantt|journey|mindmap|gitGraph|sankey(?:-beta)?|quadrantChart|requirementDiagram|timeline|xychart-beta|block-beta|C4Context|C4Container|C4Component|C4Dynamic|C4Deployment)\b/.test(t)?(async function(){let t=(await Promise.resolve().then(a.bind(a,29738))).default;if(c||(t.initialize({startOnLoad:!1,theme:"dark",themeVariables:{background:p(i.w4.colors.codeBg),primaryColor:p(i.w4.colors.accent),primaryTextColor:p(i.w4.colors.mainText),lineColor:p(i.w4.colors.border)}}),c=!0),o.current&&!r)try{let a=`mermaid-${Math.random().toString(36).slice(2)}`,{svg:i}=await t.render(a,e);if(r||!o.current)return;if(/aria-roledescription="error"|class="error-icon"|>Syntax error/i.test(i))return void f(!0);o.current.innerHTML=i,requestAnimationFrame(()=>{if(r||!o.current)return;let e=o.current.querySelector("svg");if(!e)return void f(!0);let a=e.getBoundingClientRect();(a.width<40||a.height<40)&&f(!0)})}catch(e){r||l(e instanceof Error?e.message:String(e))}}(),()=>{r=!0}):void f(!0)},[e]),n||m)?(0,r.jsx)(d,{children:e.trim()}):(0,r.jsx)(s,{ref:o})}let m=["#388bfd","#3fb950","#d29922","#a371f7","#f87171","#22d3ee","#fb923c","#34d399","#f472b6","#818cf8"],f=l().div`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.codeBorder};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.lg};
  margin: ${i.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,x=l().div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  margin-bottom: ${i.w4.spacing.md};
  text-align: center;
`,u=l().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${i.w4.spacing.sm} ${i.w4.spacing.md};
  margin-top: ${i.w4.spacing.md};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
`,h=l().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,b=l().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,w=l().pre`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.codeBorder};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.md};
  margin: ${i.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${i.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`;function y(e){if(e<=0)return 10;let o=Math.pow(10,Math.floor(Math.log10(e)));return Math.ceil(e/o)*o}function $({labels:e,data:o,colors:a}){let t=340,n=176,l=y(Math.max(...o,1)),s=Math.min(40,t/e.length*.6),d=t/e.length,c=Array.from({length:6},(e,o)=>l/5*o);return(0,r.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[c.map((e,o)=>{let a=16+n-e/l*n;return(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:44,y1:a,x2:384,y2:a,stroke:i.w4.colors.border,strokeWidth:.5,strokeDasharray:0===o?"none":"3,3"}),(0,r.jsx)("text",{x:38,y:a+4,fill:i.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:i.w4.typography.fontFamily,children:Math.round(e)})]},o)}),o.map((o,t)=>{let c=44+d*t+d/2-s/2,p=o/l*n,g=16+n-p,m=a[t%a.length];return(0,r.jsxs)("g",{children:[(0,r.jsxs)("rect",{x:c,y:g,width:s,height:p,rx:3,fill:m,opacity:.85,children:[(0,r.jsx)("animate",{attributeName:"height",from:"0",to:p,dur:"0.5s",fill:"freeze"}),(0,r.jsx)("animate",{attributeName:"y",from:16+n,to:g,dur:"0.5s",fill:"freeze"})]}),(0,r.jsx)("text",{x:c+s/2,y:g-4,fill:i.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:o}),(0,r.jsx)("text",{x:44+d*t+d/2,y:208,fill:i.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:e[t].length>8?e[t].slice(0,7)+"…":e[t]})]},t)})]})}function v({labels:e,data:o,colors:a}){let t=o.reduce((e,o)=>e+o,0)||1,n=-Math.PI/2,l=o.map((e,o)=>{let l=e/t*Math.PI*2,s=n,d=n+=l,c=120+90*Math.cos(s),p=120+90*Math.sin(s),g=120+90*Math.cos(d),m=120+90*Math.sin(d),f=+(l>Math.PI),x=s+l/2,u=120+58.5*Math.cos(x),h=120+58.5*Math.sin(x),b=Math.round(e/t*100);return(0,r.jsxs)("g",{children:[(0,r.jsx)("path",{d:`M 120 120 L ${c} ${p} A 90 90 0 ${f} 1 ${g} ${m} Z`,fill:a[o%a.length],stroke:i.w4.colors.codeBg,strokeWidth:2,opacity:.85}),b>=5&&(0,r.jsxs)("text",{x:u,y:h+4,fill:"#fff",fontSize:11,fontWeight:600,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:[b,"%"]})]},o)});return(0,r.jsx)("svg",{viewBox:"0 0 240 240",width:"100%",style:{maxWidth:240},children:l})}function z({labels:e,data:o,colors:a}){let t=340,n=176,l=y(Math.max(...o,1)),s=o.length>1?t/(o.length-1):t,d=a[0],c=o.map((e,o)=>({x:44+s*o,y:16+n-e/l*n})),p=c.map((e,o)=>`${0===o?"M":"L"} ${e.x} ${e.y}`).join(" "),g=Array.from({length:6},(e,o)=>l/5*o);return(0,r.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[g.map((e,o)=>{let a=16+n-e/l*n;return(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:44,y1:a,x2:384,y2:a,stroke:i.w4.colors.border,strokeWidth:.5,strokeDasharray:0===o?"none":"3,3"}),(0,r.jsx)("text",{x:38,y:a+4,fill:i.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:i.w4.typography.fontFamily,children:Math.round(e)})]},o)}),(0,r.jsx)("path",{d:p,fill:"none",stroke:d,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),c.map((a,t)=>(0,r.jsxs)("g",{children:[(0,r.jsx)("circle",{cx:a.x,cy:a.y,r:4,fill:d,stroke:i.w4.colors.codeBg,strokeWidth:2}),(0,r.jsx)("text",{x:a.x,y:a.y-10,fill:i.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:o[t]}),(0,r.jsx)("text",{x:a.x,y:208,fill:i.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:e[t].length>8?e[t].slice(0,7)+"…":e[t]})]},t))]})}function k({code:e}){let o=(0,t.useMemo)(()=>(function(e){let o,a,r=e.trim().split("\n"),t="bar",i=[],n=[];for(let e of r){let[r,...l]=e.split(":"),s=l.join(":").trim();if(s)switch(r.trim().toLowerCase()){case"type":["bar","pie","line"].includes(s.toLowerCase())&&(t=s.toLowerCase());break;case"title":o=s;break;case"labels":i=s.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim());break;case"data":n=s.replace(/^\[|\]$/g,"").split(",").map(e=>parseFloat(e.trim())||0);break;case"colors":a=s.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim())}}return i.length&&n.length?{type:t,title:o,labels:i,data:n,colors:a}:null})(e),[e]);if(!o)return(0,r.jsx)(w,{children:e.trim()});let a=o.colors??m;return(0,r.jsxs)(f,{children:[o.title&&(0,r.jsx)(x,{children:o.title}),"bar"===o.type&&(0,r.jsx)($,{labels:o.labels,data:o.data,colors:a}),"pie"===o.type&&(0,r.jsx)(v,{labels:o.labels,data:o.data,colors:a}),"line"===o.type&&(0,r.jsx)(z,{labels:o.labels,data:o.data,colors:a}),(0,r.jsx)(u,{children:o.labels.map((e,o)=>(0,r.jsxs)(h,{children:[(0,r.jsx)(b,{color:a[o%a.length]}),e]},o))})]})}let M=l().div`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.codeBorder};
  border-radius: ${i.w4.borderRadius.md};
  padding: ${i.w4.spacing.lg};
  margin: ${i.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${i.w4.spacing.md};
`,A=l().div`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,T=l().div`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${i.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,j=l().div`
  display: flex;
  gap: ${i.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,S=l().button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  background: ${({active:e})=>e?i.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.mainTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${i.w4.colors.accent};
    color: ${i.w4.colors.accent};
  }
`,F=l().div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  text-align: center;
`,B=l().div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  text-align: center;
`;function C(e){return e.toString().padStart(2,"0")}function R({hours:e,minutes:o,seconds:a}){let t=e=>e*Math.PI/180,n=a/60*360-90,l=o/60*360+a/60*6-90,s=e%12/12*360+o/60*30-90,d=100+61*Math.cos(t(n)),c=100+61*Math.sin(t(n)),p=100+65*Math.cos(t(l)),g=100+65*Math.sin(t(l)),m=100+45*Math.cos(t(s)),f=100+45*Math.sin(t(s));return(0,r.jsxs)("svg",{viewBox:"0 0 200 200",width:200,height:200,children:[(0,r.jsx)("circle",{cx:100,cy:100,r:85,fill:i.w4.colors.surface,stroke:i.w4.colors.border,strokeWidth:2}),Array.from({length:12},(e,o)=>{let a=o+1,n=a/12*360-90,l=100+69*Math.cos(t(n)),s=100+69*Math.sin(t(n));return(0,r.jsx)("text",{x:l,y:s+4,fill:i.w4.colors.mainText,fontSize:14,fontWeight:600,textAnchor:"middle",fontFamily:i.w4.typography.fontFamily,children:a},a)}),Array.from({length:60},(e,o)=>{let a=o/60*360-90,n=o%5==0,l=n?75:79;return(0,r.jsx)("line",{x1:100+l*Math.cos(t(a)),y1:100+l*Math.sin(t(a)),x2:100+83*Math.cos(t(a)),y2:100+83*Math.sin(t(a)),stroke:n?i.w4.colors.mainTextMuted:i.w4.colors.border,strokeWidth:n?2:1},o)}),(0,r.jsx)("line",{x1:100,y1:100,x2:m,y2:f,stroke:i.w4.colors.mainText,strokeWidth:4,strokeLinecap:"round"}),(0,r.jsx)("line",{x1:100,y1:100,x2:p,y2:g,stroke:i.w4.colors.accent,strokeWidth:2.5,strokeLinecap:"round"}),(0,r.jsx)("line",{x1:100-12*Math.cos(t(n)),y1:100-12*Math.sin(t(n)),x2:d,y2:c,stroke:"#f87171",strokeWidth:1.2,strokeLinecap:"round"}),(0,r.jsx)("circle",{cx:100,cy:100,r:4,fill:i.w4.colors.accent}),(0,r.jsx)("circle",{cx:100,cy:100,r:2,fill:"#f87171"})]})}function P({code:e}){let o=function(e){let o="pt";for(let a of e.trim().split("\n")){let[e,...r]=a.split(":"),t=r.join(":").trim();"locale"===e.trim().toLowerCase()&&(o=t.toLowerCase())}return{locale:o}}(e),[a,i]=(0,t.useState)("live"),[n,l]=(0,t.useState)(()=>new Date().getHours()),[s,d]=(0,t.useState)(()=>new Date().getMinutes()),[c,p]=(0,t.useState)(()=>new Date().getSeconds());(0,t.useEffect)(()=>{if("live"!==a)return;let e=()=>{let e=new Date;l(e.getHours()),d(e.getMinutes()),p(e.getSeconds())};e();let o=setInterval(e,1e3);return()=>clearInterval(o)},[a]);let g=(0,t.useCallback)(e=>{i("manual"),p(0),l(o=>((o+e)%24+24)%24)},[]),m=(0,t.useCallback)(e=>{i("manual"),p(0),d(o=>((o+e)%60+60)%60)},[]),f=(0,t.useCallback)(()=>i("live"),[]);return(0,r.jsxs)(M,{children:[(0,r.jsxs)(A,{children:[(0,r.jsx)(R,{hours:n,minutes:s,seconds:c}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(T,{children:[C(n),":",C(s),(0,r.jsxs)("span",{style:{fontSize:"24px",opacity:.5},children:[":",C(c)]})]}),(0,r.jsx)(B,{children:function(e,o,a){if("pt"===a){let a=1===e?"1 hora":`${e} horas`;return 0===o?a:15===o?`${a} e um quarto`:30===o?`${a} e meia`:45===o?`um quarto para as ${12===e?1:e+1}`:`${a} e ${o} minutos`}let r=e<12?"AM":"PM",t=e%12||12;return 0===o?`${t} o'clock ${r}`:15===o?`quarter past ${t} ${r}`:30===o?`half past ${t} ${r}`:45===o?`quarter to ${t%12+1} ${r}`:`${t}:${C(o)} ${r}`}(n%12||12,s,o.locale)})]})]}),(0,r.jsxs)(j,{children:[(0,r.jsx)(S,{onClick:()=>g(-1),children:"−1h"}),(0,r.jsx)(S,{onClick:()=>g(1),children:"+1h"}),(0,r.jsx)(S,{onClick:()=>m(-15),children:"−15m"}),(0,r.jsx)(S,{onClick:()=>m(15),children:"+15m"}),(0,r.jsx)(S,{onClick:()=>m(-5),children:"−5m"}),(0,r.jsx)(S,{onClick:()=>m(5),children:"+5m"}),(0,r.jsx)(S,{active:"live"===a,onClick:f,children:"pt"===o.locale?"Agora":"Now"})]}),(0,r.jsx)(F,{children:"pt"===o.locale?"Usa os bot\xf5es para mudar as horas e os minutos!":"Use the buttons to change the hours and minutes!"}),(0,r.jsx)(j,{children:[{label:"3:00",h:3,m:0},{label:"6:30",h:6,m:30},{label:"9:15",h:9,m:15},{label:"12:00",h:12,m:0},{label:"13:45",h:13,m:45},{label:"15:30",h:15,m:30},{label:"19:00",h:19,m:0},{label:"23:15",h:23,m:15}].map(e=>(0,r.jsx)(S,{onClick:()=>{i("manual"),l(e.h),d(e.m)},children:e.label},e.label))})]})}var E=a(72799);let L=(0,E.keyframes)`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`;l().div`
  background: ${i.w4.colors.codeBg};
  border: 1px solid ${i.w4.colors.codeBorder};
  border-radius: ${i.w4.borderRadius.lg};
  padding: ${i.w4.spacing.md};
  margin: ${i.w4.spacing.lg} 0;
`,l().div`
  font-size: 11px;
  font-family: ${i.w4.typography.fontFamilyMono};
  color: ${i.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${i.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${i.w4.spacing.sm};

  @media (max-width: ${i.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,l().div`
  display: flex;
  flex-direction: column;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${i.w4.colors.accent}40;
    box-shadow: 0 0 8px ${i.w4.colors.accent}15;
  }
`;let H=l().button`
  display: flex;
  align-items: center;
  gap: ${i.w4.spacing.sm};
  padding: 14px ${i.w4.spacing.md};
  min-height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${i.w4.typography.fontFamily};
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    animation: ${L} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;l()(H)`
  border-bottom: 1px solid ${i.w4.colors.border}80;
`,l()(H)``,l().span`
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
`,l().span`
  font-size: ${i.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${i.w4.colors.accent};
`,l().span`
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${i.w4.colors.mainTextMuted};
`;var D=a(17223),I=a(21426),N=a(25609),K=a(20320);let G=l().div`
  margin: ${i.w4.spacing.lg} 0;
  border-radius: ${i.w4.borderRadius.md};
  border: 1px solid ${i.w4.colors.codeBorder};
  overflow: hidden;
`,Y=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${i.w4.colors.codeBorder};
`,W=l().span`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${i.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,V=l().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":i.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${i.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${i.w4.colors.sidebarText}; border-color: ${i.w4.colors.sidebarText}; }
`,O={...I.A,'pre[class*="language-"]':{...I.A['pre[class*="language-"]'],background:i.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...I.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function _({lang:e="text",code:o}){let[a,n]=(0,t.useState)(!1);return(0,r.jsxs)(G,{children:[(0,r.jsxs)(Y,{children:[(0,r.jsx)(W,{children:e}),(0,r.jsxs)(V,{copied:a,onClick:()=>{navigator.clipboard.writeText(o).then(()=>{n(!0),setTimeout(()=>n(!1),2e3)})},children:[a?(0,r.jsx)(N.A,{size:12}):(0,r.jsx)(K.A,{size:12}),a?"Copied!":"Copy"]})]}),(0,r.jsx)(D.A,{language:e,style:O,showLineNumbers:o.split("\n").length>8,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:i.w4.colors.codeBg},wrapLongLines:!1,children:o})]})}l().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${i.w4.borderRadius.md} ${i.w4.borderRadius.md} 0;
  padding: ${i.w4.spacing.md} ${i.w4.spacing.lg};
  margin: ${i.w4.spacing.lg} 0;
`,l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${i.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${i.w4.typography.fontFamily};
  margin-bottom: ${i.w4.spacing.sm};
`,l().div`
  color: ${i.w4.colors.mainText};
  font-size: ${i.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`,l().nav`
  width: 220px;
  min-width: 220px;
  padding: ${i.w4.spacing.xxl} 0 ${i.w4.spacing.xxl} ${i.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,l().div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  margin-bottom: ${i.w4.spacing.md};
`,l().ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,l().a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${i.w4.typography.fontSizeSm};
  font-family: ${i.w4.typography.fontFamily};
  color: ${({active:e})=>e?i.w4.colors.accent:i.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?i.w4.colors.accent:"transparent"};
  border-radius: 0 ${i.w4.borderRadius.sm} ${i.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${i.w4.colors.mainText}; background: ${i.w4.colors.sidebarHover}; }
`,l().div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${i.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,l().div`flex: 1; min-width: 0;`,l().article`
  padding: ${i.w4.spacing.xxl} 0;
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeMd};
  line-height: ${i.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${i.w4.spacing.xl} 0 ${i.w4.spacing.md};
    color: ${i.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${i.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${i.w4.typography.fontSizeXl}; border-bottom: 1px solid ${i.w4.colors.border}; padding-bottom: ${i.w4.spacing.sm}; }
  h2 { font-size: ${i.w4.typography.fontSizeLg}; border-bottom: 1px solid ${i.w4.colors.border}; padding-bottom: ${i.w4.spacing.xs}; }
  h3 { font-size: ${i.w4.typography.fontSizeMd}; }

  p { margin: ${i.w4.spacing.md} 0; }

  a { color: ${i.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${i.w4.colors.accentHover}; } }

  ul, ol { margin: ${i.w4.spacing.md} 0; padding-left: ${i.w4.spacing.xl}; }
  li { margin: ${i.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${i.w4.colors.border};
    margin: ${i.w4.spacing.lg} 0;
    padding: ${i.w4.spacing.sm} ${i.w4.spacing.lg};
    background: ${i.w4.colors.surface};
    color: ${i.w4.colors.mainTextMuted};
    border-radius: 0 ${i.w4.borderRadius.sm} ${i.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${i.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${i.w4.colors.codeBg};
    border: 1px solid ${i.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${i.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${i.w4.spacing.lg} 0; font-size: ${i.w4.typography.fontSizeBase}; }
  th, td { padding: ${i.w4.spacing.sm} ${i.w4.spacing.md}; border: 1px solid ${i.w4.colors.border}; text-align: left; }
  th { background: ${i.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${i.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${i.w4.colors.border}; margin: ${i.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${i.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${i.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${i.w4.spacing.lg} 0; }
`,l().div`
  display: flex;
  gap: ${i.w4.spacing.lg};
  padding: ${i.w4.spacing.xxl} 0;
  border-top: 1px solid ${i.w4.colors.border};
  margin-top: ${i.w4.spacing.xxl};
`,l().button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${i.w4.spacing.md} ${i.w4.spacing.lg};
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${i.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,l().div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${i.w4.colors.sidebarTextMuted}; font-family: ${i.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,l().div`
  font-size: ${i.w4.typography.fontSizeBase}; color: ${i.w4.colors.accent};
  font-family: ${i.w4.typography.fontFamily}; font-weight: 500;
`,l().div`
  color: ${i.w4.colors.mainTextMuted};
  padding: ${i.w4.spacing.xxl} ${i.w4.spacing.xl};
  font-family: ${i.w4.typography.fontFamily};
`;let U=(0,E.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,q=(0,E.keyframes)`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;l().div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${U} 0.15s ease;
`,l().div`
  width: 90%;
  max-width: 580px;
  max-height: 70vh;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.lg};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px ${i.w4.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${q} 0.2s ease;
`,l().div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid ${i.w4.colors.border};
`,l().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${i.w4.colors.mainText};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeMd};
  &::placeholder { color: ${i.w4.colors.sidebarTextMuted}; }
`,l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${i.w4.colors.sidebarHover};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.sm};
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  font-size: 10px;
  font-family: ${i.w4.typography.fontFamilyMono};
  transition: color 0.15s, background 0.15s;
  &:hover { color: ${i.w4.colors.mainText}; background: ${i.w4.colors.border}; }
`,l().div`
  flex: 1;
  overflow-y: auto;
  padding: ${i.w4.spacing.sm} 0;
`,l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.sidebarTextMuted};
`,l().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,l().button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 10px 18px;
  background: ${({selected:e})=>e?i.w4.colors.accentMuted:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  &:hover { background: ${i.w4.colors.sidebarHover}; }
`,l().div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${i.w4.borderRadius.md};
  background: ${({selected:e})=>e?`${i.w4.colors.accent}20`:i.w4.colors.sidebarHover};
  color: ${({selected:e})=>e?i.w4.colors.accent:i.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  margin-top: 1px;
`,l().div`
  flex: 1;
  min-width: 0;
`,l().div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${i.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 8px;
`,l().span`
  font-weight: 400;
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.sidebarTextMuted};
`,l().span`
  font-size: 11px;
  font-weight: 500;
  color: ${i.w4.colors.accent};
  background: ${i.w4.colors.accentMuted};
  padding: 1px 6px;
  border-radius: 10px;
  font-family: ${i.w4.typography.fontFamilyMono};
`,l().div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin-top: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${i.w4.colors.accent}25;
    color: ${i.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,l().div`
  display: flex;
  align-items: center;
  color: ${({selected:e})=>e?i.w4.colors.accent:"transparent"};
  margin-top: 8px;
  transition: color 0.1s;
`,l().div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  border-top: 1px solid ${i.w4.colors.border};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${i.w4.colors.sidebarTextMuted};
`,l().kbd`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background: ${i.w4.colors.sidebarHover};
  border: 1px solid ${i.w4.colors.border};
  border-radius: 3px;
  font-size: 10px;
  font-family: ${i.w4.typography.fontFamilyMono};
  color: ${i.w4.colors.sidebarTextMuted};
`,l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 18px;
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  text-align: center;
`,l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${i.w4.typography.fontFamily};
  background: ${i.w4.colors.mainBg};
`,l().div`
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
`,l().div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${i.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${i.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,l().div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,l().h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${i.w4.colors.mainText} 0%,
    ${i.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,l().p`
  font-size: ${i.w4.typography.fontSizeMd};
  color: ${i.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,l().span`
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${i.w4.colors.sidebarHover};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  color: ${i.w4.colors.sidebarTextMuted};
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: ${i.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${i.w4.colors.accent}60;
    color: ${i.w4.colors.mainText};
    background: ${i.w4.colors.accentMuted};
  }

  kbd {
    font-size: 10px;
    padding: 1px 4px;
    background: ${i.w4.colors.surface};
    border: 1px solid ${i.w4.colors.border};
    border-radius: 3px;
    color: ${i.w4.colors.sidebarTextMuted};
  }

  @media (max-width: ${i.w4.breakpoints.md}) {
    padding: 5px 8px;
    span { display: none; }
    kbd { display: none; }
  }
`,l().div`
  display: flex;
  gap: 4px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: 2px;
`,l().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${i.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${i.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?i.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":i.w4.colors.mainTextMuted};
  &:hover {
    color: ${({active:e})=>e?"#0d1117":i.w4.colors.mainText};
  }
`,l().div`
  padding: ${({collapsed:e})=>e?"8px 4px":`8px ${i.w4.spacing.md}`};
  border-bottom: 1px solid ${i.w4.colors.border}60;
`,l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${({collapsed:e})=>e?"8px 0":"6px 10px"};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  background: ${({focused:e})=>e?`${i.w4.colors.accent}10`:i.w4.colors.sidebarHover};
  border: 1px solid ${({focused:e})=>e?`${i.w4.colors.accent}40`:"transparent"};
  border-radius: ${i.w4.borderRadius.md};
  transition: background 0.15s, border-color 0.2s;
  cursor: ${({collapsed:e})=>e?"pointer":"text"};
`,l().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${i.w4.colors.sidebarText};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  min-width: 0;
  display: ${({collapsed:e})=>e?"none":"block"};
  &::placeholder { color: ${i.w4.colors.sidebarTextMuted}; }
`,l().button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: ${i.w4.colors.sidebarTextMuted};
  border-radius: ${i.w4.borderRadius.sm};
  transition: color 0.15s;
  &:hover { color: ${i.w4.colors.mainText}; }
`,l().div`
  max-height: 60vh;
  overflow-y: auto;
  padding: ${i.w4.spacing.sm} 0;
`,l().button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding: 8px ${i.w4.spacing.md};
  background: ${({active:e})=>e?i.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?i.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;
  &:hover { background: ${i.w4.colors.sidebarHover}; }
`,l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${i.w4.colors.sidebarText};
`,l().span`
  font-weight: 400;
  color: ${i.w4.colors.sidebarTextMuted};
  font-size: 11px;
`,l().div`
  font-family: ${i.w4.typography.fontFamily};
  font-size: 12px;
  color: ${i.w4.colors.sidebarTextMuted};
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${i.w4.colors.accent}30;
    color: ${i.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,l().div`
  padding: 12px ${i.w4.spacing.md};
  font-family: ${i.w4.typography.fontFamily};
  font-size: ${i.w4.typography.fontSizeSm};
  color: ${i.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`,l().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,l().span`
  font-size: 11px;
  color: ${i.w4.colors.accent};
  font-weight: 600;
  margin-left: auto;
`},87330(e,o,a){a.d(o,{FlyoutPanel:()=>eR});var r=a(65723),t=a(37991),i=a.n(t),n=a(36859),l=a.n(n),s=a(72799),d=a(20255),c=a(81316),p=a(40814),g=a(36896),m=a(87902),f=a(53013),x=a(32887),u=a(49510),h=a(39848),b=a(37901),w=a(3045),y=a(43775),$=a(41783),v=a(83539),z=a(39416),k=a(1837),M=a(57167),A=a(84494),T=a(82314),j=a(35751),S=a(69633),F=a(92946),B=a(40822),C=a(36720),R=a(57400),P=a(58456),E=a(43317),L=a(52709),H=a(8006),D=a(89301),I=a(37561),N=a(83517),K=a(28207),G=a(37032),Y=a(6949),W=a(8218),V=a(36829),O=a(59591),_=a(15553),U=a(69923),q=a(72820),J=a(14621),X=a(68479),Z=a(72534),Q=a(66673),ee=a(67490),eo=a(49033),ea=a(99038),er=a(45775),et=a(31365),ei=a(62937),en=a(9821),el=a(65912),es=a(80158),ed=a(88641),ec=a(48607),ep=a(83249),eg=a(1821),em=a(15889),ef=a(89655),ex=a(27170),eu=a(19161),eh=a(71849),eb=a(41604),ew=a(13142),ey=a(61187),e$=a(77747),ev=a(2932),ez=a(24525),ek=a(57230),eM=a(22164);let eA={activity:g.A,"a-large-small":m.A,apple:f.A,"arrow-right":x.A,"bar-chart-2":u.A,book:h.A,"book-open":b.A,briefcase:w.A,calendar:y.A,clock:$.A,"circle-dot":v.A,cloud:z.A,compass:k.A,cpu:M.A,droplets:A.A,feather:T.A,file:d.A,"file-text":j.A,folder:S.A,"git-branch":F.A,github:B.A,globe:C.A,grid:R.A,hand:P.A,hash:E.A,heart:L.A,key:H.A,hexagon:D.A,home:I.A,landmark:N.A,layers:K.A,"layout-grid":G.A,leaf:Y.A,lightbulb:W.A,list:V.A,map:O.A,"map-pin":_.A,"message-circle":U.A,"message-square":q.A,minus:J.A,monitor:X.A,mountain:Z.A,package:Q.A,palette:ee.A,"pen-tool":eo.A,"pie-chart":ea.A,plane:er.A,plus:et.A,ruler:ei.A,shirt:en.A,slash:el.A,square:es.A,star:ed.A,sun:ec.A,terminal:ep.A,thermometer:eg.A,triangle:em.A,trophy:ef.A,truck:ex.A,type:eu.A,users:eh.A,"volume-2":eb.A,watch:ew.A,waves:ey.A,wind:e$.A,wrench:ev.A,x:ez.A,zap:ek.A,bot:eM.A},eT=(0,s.keyframes)`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,ej=l().div`
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
  animation: ${eT} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
`,eS=l().div`
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
`,eF=l().button`
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
`;function eB({iconKey:e}){let o=e?eA[e]??d.A:d.A;return(0,r.jsx)(o,{size:14,strokeWidth:1.75})}function eC({entries:e,activeId:o,onSelect:a}){return(0,r.jsx)(r.Fragment,{children:e.map(e=>e.children?(0,r.jsx)(i().Fragment,{children:(0,r.jsx)(eC,{entries:e.children,activeId:o,onSelect:a})},e.id):(0,r.jsxs)(eF,{active:o===e.id,onClick:()=>a(e),children:[(0,r.jsx)(eB,{iconKey:e.icon}),e.name]},e.id))})}function eR({activeId:e}){let{flyout:o,scheduleFlyoutClose:a,cancelFlyoutClose:t}=(0,p.c)();if(!o)return null;let i=o.entry.icon?eA[o.entry.icon]??d.A:d.A;return(0,r.jsxs)(ej,{anchorY:o.anchorY,onMouseEnter:t,onMouseLeave:a,children:[(0,r.jsxs)(eS,{children:[(0,r.jsx)(i,{size:13,strokeWidth:2}),o.entry.name]}),(0,r.jsx)(eC,{entries:o.entry.children??[],activeId:e,onSelect:e=>{o.onSelect(e),a()}})]})}},40814(e,o,a){a.d(o,{I:()=>t,c:()=>i});var r=a(37991);let t=(0,r.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),i=()=>(0,r.useContext)(t)},15726(e,o,a){a.d(o,{PL:()=>N,MJ:()=>q,mZ:()=>D,KL:()=>H,cL:()=>p.c,Is:()=>I,UO:()=>eg,PE:()=>B,w4:()=>r.w4});var r=a(81316),t=a(65723),i=a(37991),n=a.n(i),l=a(36859),s=a.n(l);s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${r.w4.spacing.sm};
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  color: ${r.w4.colors.mainText};
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,s().div`
  position: relative;
`;var d=a(72799),c=a(73661),p=a(40814);let g="260px",m="56px",f="48px",x=s().header`
  display: flex;
  align-items: center;
  height: calc(${f} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${r.w4.colors.sidebarBg};
  border-bottom: 1px solid ${r.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);

  /* Mobile: logo + app label on row 1, scrollable chrome cluster on row 2. */
  @media (max-width: ${r.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(${f} + env(safe-area-inset-top, 0px));
  }
`,u=s().div`
  width: ${m};
  min-width: ${m};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${r.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${r.w4.breakpoints.md}) {
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
  border-radius: ${r.w4.borderRadius.md};
  cursor: pointer;
  color: ${r.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${r.w4.colors.sidebarHover};
    color: ${r.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,b=(0,d.keyframes)`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,w=s().button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${r.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${r.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${r.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,y=s().span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${b} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`
    background: linear-gradient(135deg, ${r.w4.colors.accent}, ${r.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`,$=s().div`
  font-size: ${r.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${r.w4.colors.sidebarTextMuted};
  font-family: ${r.w4.typography.fontFamily};
  padding-left: ${r.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 0;

  &::before {
    content: '/';
    margin-right: ${r.w4.spacing.sm};
    color: ${r.w4.colors.border};
  }
`,v=s().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${r.w4.spacing.md};
  padding: 0 ${r.w4.spacing.lg};
  min-width: 0;

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${r.w4.spacing.sm};
  }

  /* Full-width second row on mobile, horizontally scrollable.
     Align to the right so the avatar / bell stay flush with the
     viewport edge — matches desktop end-alignment. */
  @media (max-width: ${r.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    justify-content: flex-end;
    padding: ${r.w4.spacing.xs} ${r.w4.spacing.sm};
    gap: ${r.w4.spacing.xs};
    border-top: 1px solid ${r.w4.colors.sidebarBorder};
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
`,z=s().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,k=s().div`
  display: flex;
  flex-direction: column;
  height: ${r.w4.sizes.fullHeight};
  background: ${r.w4.colors.mainBg};
  font-family: ${r.w4.typography.fontFamily};
  color: ${r.w4.colors.mainText};
  overflow: hidden;
`,M=s().aside`
  width: ${({collapsed:e})=>e?m:g};
  min-width: ${({collapsed:e})=>e?m:g};
  background: ${r.w4.colors.sidebarBg};
  border-right: 1px solid ${r.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${r.w4.breakpoints.md}) {
    display: none;
  }
`,A=s().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,T=s().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,j=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function S(){return(0,t.jsx)(w,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:j.map((e,o)=>(0,t.jsx)(y,{index:o,accent:e.accent,children:e.char},o))})}let F="atlantis:sidebar-collapsed";function B({sidebar:e,children:o,topBarRight:r,title:l="Atlantis",activeId:s=null}){let[d,g]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem(F)}catch{return!1}}),[m,f]=(0,i.useState)(null),b=(0,i.useRef)(),w=()=>g(e=>{let o=!e;try{localStorage.setItem(F,String(o))}catch{}return o}),y=n().useMemo(()=>n().lazy(()=>Promise.resolve().then(a.bind(a,87330)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,t.jsx)(p.I.Provider,{value:{collapsed:d,toggle:w,flyout:m,openFlyout:(e,o,a)=>{clearTimeout(b.current),f({entry:e,anchorY:o,onSelect:a})},scheduleFlyoutClose:()=>{b.current=setTimeout(()=>f(null),160)},cancelFlyoutClose:()=>clearTimeout(b.current)},children:(0,t.jsxs)(k,{children:[(0,t.jsxs)(x,{children:[e&&(0,t.jsx)(u,{children:(0,t.jsx)(h,{onClick:w,title:d?"Expand sidebar":"Collapse sidebar",children:(0,t.jsx)(c.A,{size:17})})}),(0,t.jsx)(S,{}),l&&(0,t.jsx)($,{children:l}),r&&(0,t.jsx)(v,{children:r})]}),(0,t.jsxs)(z,{children:[null!=e&&(0,t.jsx)(M,{collapsed:d,children:(0,t.jsx)(A,{children:e})}),(0,t.jsx)(T,{children:o})]}),m&&(0,t.jsx)(n().Suspense,{fallback:null,children:(0,t.jsx)(y,{activeId:s})})]})})}s().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,s().div`
  overflow: hidden;
`,s().div`
  padding-left: ${r.w4.spacing.md};
`,s().div`
  display: flex;
  flex-direction: column;
`,s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${r.w4.spacing.sm} ${r.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":r.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${r.w4.colors.sidebarTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${r.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${r.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${r.w4.colors.sidebarText};
    background: ${r.w4.colors.sidebarHover};
  }
`,s().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,s().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,s().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${r.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${r.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?r.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?r.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?r.w4.colors.sidebarActive:r.w4.colors.sidebarText};
  font-size: ${r.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${r.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${r.w4.borderRadius.md} ${r.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${r.w4.colors.sidebarHover};
    color: ${r.w4.colors.mainText};
  }
`;let C=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;s().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${C} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${r.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${r.w4.colors.surface};
  }
`,s().span`
  display: block;
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${r.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${r.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${r.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${r.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,a(87330),s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  cursor: pointer;
  color: ${r.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${r.w4.colors.sidebarHover};
    color: ${r.w4.colors.accent};
    border-color: ${r.w4.colors.accent};
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
`,[{id:"europe",name:"Europe",icon:"\uD83C\uDF0D",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"lourinha",name:"Lourinh\xe3",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"\uD83C\uDDEC\uD83C\uDDE7",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"\uD83C\uDDEB\uD83C\uDDF7",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"\uD83C\uDDE9\uD83C\uDDEA",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"\uD83C\uDDEA\uD83C\uDDF8",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"\uD83C\uDDEE\uD83C\uDDF9",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"\uD83C\uDDF3\uD83C\uDDF1",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"\uD83C\uDDEC\uD83C\uDDF7",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"\uD83C\uDDE7\uD83C\uDDEA",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"\uD83C\uDDE6\uD83C\uDDF9",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"\uD83C\uDDF5\uD83C\uDDF1",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"\uD83C\uDDF8\uD83C\uDDEA",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"\uD83C\uDDF3\uD83C\uDDF4",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"\uD83C\uDDE9\uD83C\uDDF0",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"\uD83C\uDDEB\uD83C\uDDEE",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"\uD83C\uDDEE\uD83C\uDDF8",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"\uD83C\uDDEE\uD83C\uDDEA",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"\uD83C\uDDE8\uD83C\uDDED",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"\uD83C\uDDFA\uD83C\uDDE6",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"\uD83C\uDDF7\uD83C\uDDFA",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"\uD83C\uDDF7\uD83C\uDDF4",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"\uD83C\uDDED\uD83C\uDDFA",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"\uD83C\uDDE8\uD83C\uDDFF",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"\uD83C\uDDF8\uD83C\uDDF0",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"\uD83C\uDDF8\uD83C\uDDEE",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"\uD83C\uDDED\uD83C\uDDF7",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"\uD83C\uDDF7\uD83C\uDDF8",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"\uD83C\uDDE7\uD83C\uDDE6",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"\uD83C\uDDE7\uD83C\uDDEC",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"\uD83C\uDDEA\uD83C\uDDEA",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"\uD83C\uDDF1\uD83C\uDDFB",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"\uD83C\uDDF1\uD83C\uDDF9",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"\uD83C\uDDE7\uD83C\uDDFE",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"\uD83C\uDDF2\uD83C\uDDE9",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"\uD83C\uDDE6\uD83C\uDDF1",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"\uD83C\uDDF2\uD83C\uDDF0",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"\uD83C\uDDF2\uD83C\uDDEA",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"\uD83C\uDDE8\uD83C\uDDFE",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"\uD83C\uDDF2\uD83C\uDDF9",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"\uD83C\uDDF1\uD83C\uDDFA",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"\uD83C\uDDE6\uD83C\uDDE9",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"\uD83C\uDDF2\uD83C\uDDE8",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"\uD83C\uDDF8\uD83C\uDDF2",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"\uD83C\uDDF1\uD83C\uDDEE",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"\uD83C\uDDFB\uD83C\uDDE6",zoom:15}]},{id:"americas",name:"Americas",icon:"\uD83C\uDF0E",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"\uD83C\uDDE8\uD83C\uDDE6",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"\uD83C\uDDF2\uD83C\uDDFD",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"\uD83C\uDDE7\uD83C\uDDFF",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"\uD83C\uDDEC\uD83C\uDDF9",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"\uD83C\uDDF8\uD83C\uDDFB",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"\uD83C\uDDED\uD83C\uDDF3",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"\uD83C\uDDF3\uD83C\uDDEE",zoom:12},{id:"san-jose-cr",name:"San Jos\xe9",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"\uD83C\uDDE8\uD83C\uDDF7",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"\uD83C\uDDF5\uD83C\uDDE6",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"\uD83C\uDDE8\uD83C\uDDFA",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"\uD83C\uDDE7\uD83C\uDDF8",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"\uD83C\uDDEF\uD83C\uDDF2",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"\uD83C\uDDED\uD83C\uDDF9",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"\uD83C\uDDE9\uD83C\uDDF4",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"\uD83C\uDDF0\uD83C\uDDF3",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"\uD83C\uDDF1\uD83C\uDDE8",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"\uD83C\uDDFB\uD83C\uDDE8",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"\uD83C\uDDE7\uD83C\uDDE7",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"\uD83C\uDDE6\uD83C\uDDEC",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"\uD83C\uDDE9\uD83C\uDDF2",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"\uD83C\uDDEC\uD83C\uDDE9",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"\uD83C\uDDF9\uD83C\uDDF9",zoom:12},{id:"bogota",name:"Bogot\xe1",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"\uD83C\uDDE8\uD83C\uDDF4",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"\uD83C\uDDFB\uD83C\uDDEA",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"\uD83C\uDDEC\uD83C\uDDFE",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"\uD83C\uDDF8\uD83C\uDDF7",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"\uD83C\uDDEA\uD83C\uDDE8",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"\uD83C\uDDF5\uD83C\uDDEA",zoom:12},{id:"sao-paulo",name:"S\xe3o Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"\uD83C\uDDE7\uD83C\uDDF7",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"\uD83C\uDDE7\uD83C\uDDF4",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"\uD83C\uDDE8\uD83C\uDDF1",zoom:12},{id:"asuncion",name:"Asunci\xf3n",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"\uD83C\uDDF5\uD83C\uDDFE",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"\uD83C\uDDE6\uD83C\uDDF7",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"\uD83C\uDDFA\uD83C\uDDFE",zoom:12}]},{id:"africa",name:"Africa",icon:"\uD83C\uDF0D",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"\uD83C\uDDF2\uD83C\uDDE6",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"\uD83C\uDDE9\uD83C\uDDFF",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"\uD83C\uDDF9\uD83C\uDDF3",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"\uD83C\uDDF1\uD83C\uDDFE",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"\uD83C\uDDEA\uD83C\uDDEC",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"\uD83C\uDDF8\uD83C\uDDE9",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"\uD83C\uDDF8\uD83C\uDDF3",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"\uD83C\uDDEC\uD83C\uDDF2",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"\uD83C\uDDEC\uD83C\uDDFC",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"\uD83C\uDDEC\uD83C\uDDF3",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"\uD83C\uDDF8\uD83C\uDDF1",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"\uD83C\uDDF1\uD83C\uDDF7",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"\uD83C\uDDE8\uD83C\uDDEE",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"\uD83C\uDDEC\uD83C\uDDED",zoom:12},{id:"lome",name:"Lom\xe9",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"\uD83C\uDDF9\uD83C\uDDEC",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"\uD83C\uDDE7\uD83C\uDDEF",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"\uD83C\uDDF3\uD83C\uDDEC",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"\uD83C\uDDF3\uD83C\uDDEA",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"\uD83C\uDDF2\uD83C\uDDF1",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"\uD83C\uDDE7\uD83C\uDDEB",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"\uD83C\uDDF2\uD83C\uDDF7",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"\uD83C\uDDE8\uD83C\uDDFB",zoom:13},{id:"yaounde",name:"Yaound\xe9",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"\uD83C\uDDE8\uD83C\uDDF2",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"\uD83C\uDDF9\uD83C\uDDE9",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"\uD83C\uDDE8\uD83C\uDDEB",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"\uD83C\uDDEC\uD83C\uDDF6",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"\uD83C\uDDEC\uD83C\uDDE6",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"\uD83C\uDDE8\uD83C\uDDEC",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"\uD83C\uDDE8\uD83C\uDDE9",zoom:12},{id:"sao-tome",name:"S\xe3o Tom\xe9",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"\uD83C\uDDF8\uD83C\uDDF9",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"\uD83C\uDDF8\uD83C\uDDF8",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"\uD83C\uDDEA\uD83C\uDDF9",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"\uD83C\uDDEA\uD83C\uDDF7",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"\uD83C\uDDE9\uD83C\uDDEF",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"\uD83C\uDDF8\uD83C\uDDF4",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"\uD83C\uDDF0\uD83C\uDDEA",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"\uD83C\uDDFA\uD83C\uDDEC",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"\uD83C\uDDF7\uD83C\uDDFC",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"\uD83C\uDDE7\uD83C\uDDEE",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"\uD83C\uDDF9\uD83C\uDDFF",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"\uD83C\uDDF2\uD83C\uDDEC",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"\uD83C\uDDF0\uD83C\uDDF2",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"\uD83C\uDDF2\uD83C\uDDFA",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"\uD83C\uDDF8\uD83C\uDDE8",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"\uD83C\uDDE6\uD83C\uDDF4",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"\uD83C\uDDFF\uD83C\uDDF2",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"\uD83C\uDDF2\uD83C\uDDFC",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"\uD83C\uDDF2\uD83C\uDDFF",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"\uD83C\uDDFF\uD83C\uDDFC",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"\uD83C\uDDE7\uD83C\uDDFC",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"\uD83C\uDDF3\uD83C\uDDE6",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"\uD83C\uDDFF\uD83C\uDDE6",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"\uD83C\uDDF8\uD83C\uDDFF",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"\uD83C\uDDF1\uD83C\uDDF8",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"\uD83D\uDD4C",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"\uD83C\uDDF8\uD83C\uDDE6",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"\uD83C\uDDE6\uD83C\uDDEA",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"\uD83C\uDDF6\uD83C\uDDE6",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"\uD83C\uDDE7\uD83C\uDDED",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"\uD83C\uDDF0\uD83C\uDDFC",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"\uD83C\uDDF4\uD83C\uDDF2",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"\uD83C\uDDFE\uD83C\uDDEA",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"\uD83C\uDDEE\uD83C\uDDF6",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"\uD83C\uDDEE\uD83C\uDDF7",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"\uD83C\uDDF9\uD83C\uDDF7",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"\uD83C\uDDF1\uD83C\uDDE7",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"\uD83C\uDDF8\uD83C\uDDFE",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"\uD83C\uDDEF\uD83C\uDDF4",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"\uD83C\uDDEE\uD83C\uDDF1",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"\uD83C\uDDF5\uD83C\uDDF8",zoom:13}]},{id:"asia",name:"Asia",icon:"\uD83C\uDF0F",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"\uD83C\uDDE6\uD83C\uDDEB",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"\uD83C\uDDF0\uD83C\uDDFF",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"\uD83C\uDDF0\uD83C\uDDEC",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"\uD83C\uDDFA\uD83C\uDDFF",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"\uD83C\uDDF9\uD83C\uDDEF",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"\uD83C\uDDF9\uD83C\uDDF2",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"\uD83C\uDDE6\uD83C\uDDF2",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"\uD83C\uDDE6\uD83C\uDDFF",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"\uD83C\uDDEC\uD83C\uDDEA",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"\uD83C\uDDF5\uD83C\uDDF0",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"\uD83C\uDDF3\uD83C\uDDF5",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"\uD83C\uDDE7\uD83C\uDDE9",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"\uD83C\uDDF1\uD83C\uDDF0",zoom:12},{id:"male",name:"Mal\xe9",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"\uD83C\uDDF2\uD83C\uDDFB",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"\uD83C\uDDE8\uD83C\uDDF3",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"\uD83C\uDDEF\uD83C\uDDF5",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"\uD83C\uDDF0\uD83C\uDDF7",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"\uD83C\uDDF0\uD83C\uDDF5",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"\uD83C\uDDF2\uD83C\uDDF3",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"\uD83C\uDDF9\uD83C\uDDED",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"\uD83C\uDDFB\uD83C\uDDF3",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"\uD83C\uDDF0\uD83C\uDDED",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"\uD83C\uDDF1\uD83C\uDDE6",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"\uD83C\uDDF2\uD83C\uDDF2",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"\uD83C\uDDF2\uD83C\uDDFE",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"\uD83C\uDDF8\uD83C\uDDEC",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"\uD83C\uDDEE\uD83C\uDDE9",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"\uD83C\uDDF5\uD83C\uDDED",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"\uD83C\uDDE7\uD83C\uDDF3",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"\uD83C\uDDF9\uD83C\uDDF1",zoom:13}]},{id:"oceania",name:"Oceania",icon:"\uD83C\uDF0A",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"\uD83C\uDDE6\uD83C\uDDFA",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"\uD83C\uDDF3\uD83C\uDDFF",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"\uD83C\uDDF5\uD83C\uDDEC",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"\uD83C\uDDEB\uD83C\uDDEF",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"\uD83C\uDDF8\uD83C\uDDE7",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"\uD83C\uDDFB\uD83C\uDDFA",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"\uD83C\uDDF9\uD83C\uDDF4",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"\uD83C\uDDFC\uD83C\uDDF8",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"\uD83C\uDDF9\uD83C\uDDFB",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"\uD83C\uDDF0\uD83C\uDDEE",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"\uD83C\uDDF2\uD83C\uDDED",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"\uD83C\uDDEB\uD83C\uDDF2",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"\uD83C\uDDF5\uD83C\uDDFC",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"\uD83C\uDDF3\uD83C\uDDF7",zoom:14}]}].flatMap(e=>e.places);let R="documents",P="settings";function E(){return new Promise((e,o)=>{let a=indexedDB.open("atlantis-tools",2);a.onupgradeneeded=e=>{let o=e.target.result;o.objectStoreNames.contains(R)||o.createObjectStore(R,{keyPath:"id",autoIncrement:!0}).createIndex("appId","appId",{unique:!1}),o.objectStoreNames.contains(P)||o.createObjectStore(P,{keyPath:"key"})},a.onsuccess=()=>e(a.result),a.onerror=()=>o(a.error)})}let L={async saveDoc(e,o,a){let r=await E(),t={appId:e,name:o,content:a,savedAt:Date.now()};return new Promise((e,o)=>{let a=r.transaction(R,"readwrite").objectStore(R).add(t);a.onsuccess=()=>e(String(a.result)),a.onerror=()=>o(a.error)})},async updateDoc(e,o,a){let r=await E();return new Promise((t,i)=>{let n=r.transaction(R,"readwrite").objectStore(R),l=n.get(Number(e));l.onsuccess=()=>{let e=l.result;if(!e)return void i(Error("Doc not found"));let r=n.put({...e,name:o,content:a,savedAt:Date.now()});r.onsuccess=()=>t(),r.onerror=()=>i(r.error)},l.onerror=()=>i(l.error)})},async listDocs(e){let o=await E();return new Promise((a,r)=>{let t=o.transaction(R,"readonly").objectStore(R).index("appId").getAll(e);t.onsuccess=()=>a(t.result.map(e=>({...e,id:String(e.id)})).reverse()),t.onerror=()=>r(t.error)})},async deleteDoc(e){let o=await E();return new Promise((a,r)=>{let t=o.transaction(R,"readwrite").objectStore(R).delete(Number(e));t.onsuccess=()=>a(),t.onerror=()=>r(t.error)})},async putSetting(e,o){let a=await E();return new Promise((r,t)=>{let i=a.transaction(P,"readwrite").objectStore(P).put({key:e,value:o});i.onsuccess=()=>r(),i.onerror=()=>t(i.error)})},async getSetting(e){let o=await E();return new Promise((a,r)=>{let t=o.transaction(P,"readonly").objectStore(P).get(e);t.onsuccess=()=>a(t.result?t.result.value:null),t.onerror=()=>r(t.error)})}};function H(e,o,a){return L.saveDoc(e,o,a)}function D(e,o,a){return L.updateDoc(e,o,a)}function I(e,o){return L.putSetting(e,o)}function N(e){return L.getSetting(e)}let K=s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,G=s().div`
  background: ${r.w4.colors.sidebarBg};
  border: 1px solid ${r.w4.colors.sidebarBorder};
  border-radius: ${r.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Y=s().div`
  font-size: ${r.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${r.w4.colors.mainText};
  font-family: ${r.w4.typography.fontFamily};
`,W=s().input`
  width: 100%;
  padding: 8px 12px;
  background: ${r.w4.colors.mainBg};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  color: ${r.w4.colors.mainText};
  font-size: ${r.w4.typography.fontSizeBase};
  font-family: ${r.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${r.w4.colors.accent}; }
  &::placeholder { color: ${r.w4.colors.sidebarTextMuted}; }
`,V=s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,O=s().button`
  padding: 7px 18px;
  border-radius: ${r.w4.borderRadius.md};
  font-size: ${r.w4.typography.fontSizeBase};
  font-family: ${r.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:o})=>o?"rgba(248,81,73,0.12)":e?r.w4.colors.accent:"none"};
  color: ${({primary:e,danger:o})=>o?r.w4.colors.danger:e?"#fff":r.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:o})=>o?r.w4.colors.danger:e?r.w4.colors.accent:r.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,_=s().div`
  height: 1px;
  background: ${r.w4.colors.border};
  margin: 0 -4px;
`,U=s().div`
  font-size: 11px;
  color: ${r.w4.colors.sidebarTextMuted};
  font-family: ${r.w4.typography.fontFamily};
`;function q({onSave:e,onUpdate:o,onCancel:a,existingDoc:r}){let[n,l]=(0,i.useState)(r?.name??""),s=(0,i.useRef)(null);return(0,i.useEffect)(()=>{s.current?.focus(),r&&s.current?.select()},[r]),(0,t.jsx)(K,{onClick:a,children:(0,t.jsxs)(G,{onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(Y,{children:"Save document"}),r&&o&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(U,{children:"Update the current version or save as a new one."}),(0,t.jsxs)(V,{children:[(0,t.jsx)(O,{onClick:a,children:"Cancel"}),(0,t.jsxs)(O,{danger:!0,onClick:o,children:['Update "',r.name,'"']})]}),(0,t.jsx)(_,{})]}),(0,t.jsx)(W,{ref:s,value:n,onChange:e=>l(e.target.value),onKeyDown:t=>{"Enter"===t.key&&n.trim()&&(r&&n.trim()===r.name&&o?o():e(n.trim())),"Escape"===t.key&&a()},placeholder:r?"Or save as a new version…":"Give this version a name…",maxLength:80}),(0,t.jsxs)(V,{children:[!r&&(0,t.jsx)(O,{onClick:a,children:"Cancel"}),(0,t.jsx)(O,{primary:!0,disabled:!n.trim(),onClick:()=>e(n.trim()),children:"Save as new"})]})]})})}let J=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,X=(0,d.keyframes)`
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
  padding: ${r.w4.spacing.md};
  animation: ${J} 0.15s ease both;
`,s().div`
  background: ${r.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?r.w4.colors.danger+"55":r.w4.colors.sidebarBorder};
  border-radius: ${r.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${r.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${X} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,s().div`
  font-size: ${r.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?r.w4.colors.danger:r.w4.colors.mainText};
  font-family: ${r.w4.typography.fontFamily};
`,s().div`
  font-size: ${r.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${r.w4.colors.mainTextMuted};
  font-family: ${r.w4.typography.fontFamily};
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${r.w4.spacing.sm};
`,s().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${r.w4.typography.fontSizeBase};
  font-family: ${r.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${r.w4.transitions.fast},
    border-color ${r.w4.transitions.fast},
    color ${r.w4.transitions.fast},
    opacity ${r.w4.transitions.fast};

  background: ${({primary:e,danger:o})=>o?r.w4.colors.danger:e?r.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:o})=>o||e?"#fff":r.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:o})=>o?r.w4.colors.danger:e?r.w4.colors.accent:r.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${r.w4.focusRing} }
`;var Z=a(18006),Q=a(70679),ee=a(54872);let eo=s().div`
  position: relative;
`,ea=s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.md};
  color: ${r.w4.colors.mainText};
  font-size: ${r.w4.typography.fontSizeBase};
  font-family: ${r.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${r.w4.colors.sidebarHover};
    border-color: ${r.w4.colors.accent};
  }
`,er=s().div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${r.w4.colors.sidebarBg};
  border: 1px solid ${r.w4.colors.sidebarBorder};
  border-radius: ${r.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,et=s().div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${r.w4.colors.sidebarTextMuted};
  font-family: ${r.w4.typography.fontFamily};
  border-bottom: 1px solid ${r.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,ei=s().div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,en=s().div`
  padding: 16px 14px;
  font-size: ${r.w4.typography.fontSizeBase};
  color: ${r.w4.colors.sidebarTextMuted};
  font-family: ${r.w4.typography.fontFamily};
  font-style: italic;
`,el=s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${r.w4.colors.sidebarHover};
  }
`,es=s().button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,ed=s().div`
  font-size: ${r.w4.typography.fontSizeBase};
  color: ${r.w4.colors.mainText};
  font-family: ${r.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ec=s().div`
  font-size: 11px;
  color: ${r.w4.colors.sidebarTextMuted};
  font-family: ${r.w4.typography.fontFamily};
  margin-top: 1px;
`,ep=s().button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${r.w4.borderRadius.sm};
  cursor: pointer;
  color: ${r.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${r.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`;function eg({appId:e,onLoad:o}){let[a,r]=(0,i.useState)(!1),[n,l]=(0,i.useState)([]),s=(0,i.useRef)(null),d=(0,i.useCallback)(()=>{L.listDocs(e).then(l).catch(()=>{})},[e]);(0,i.useEffect)(()=>{if(!a)return;d();let e=e=>{s.current&&!s.current.contains(e.target)&&r(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[a,d]);let c=async(e,o)=>{e.stopPropagation(),await L.deleteDoc(o),l(e=>e.filter(e=>e.id!==o))};return(0,t.jsxs)(eo,{ref:s,children:[(0,t.jsxs)(ea,{onClick:()=>r(e=>!e),children:[(0,t.jsx)(Z.A,{size:14}),"Saved",(0,t.jsx)(Q.A,{size:13,style:{marginLeft:2}})]}),(0,t.jsxs)(er,{open:a,children:[(0,t.jsx)(et,{children:"Saved versions"}),(0,t.jsx)(ei,{children:0===n.length?(0,t.jsx)(en,{children:"No saved documents yet."}):n.map(e=>{var a;return(0,t.jsxs)(el,{children:[(0,t.jsxs)(es,{onClick:()=>{o(e.content,e.id,e.name),r(!1)},children:[(0,t.jsx)(ed,{children:e.name}),(0,t.jsx)(ec,{children:(a=e.savedAt,new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(a)))})]}),(0,t.jsx)(ep,{onClick:o=>c(o,e.id),title:"Delete",children:(0,t.jsx)(ee.A,{size:13})})]},e.id)})})]})]})}s().div`
  padding: ${r.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${r.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,s().section`
  scroll-margin-top: ${r.w4.spacing.lg};
`,s().div`
  background: ${r.w4.colors.surface};
  border: 1px solid ${r.w4.colors.border};
  border-radius: ${r.w4.borderRadius.lg};
  padding: ${r.w4.spacing.lg};
`,s().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${r.w4.spacing.xl};

  @media (max-width: ${r.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,s().div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${r.w4.colors.mainBg};
  font-family: ${r.w4.typography.fontFamily};
  color: ${r.w4.colors.mainText};
  overflow: hidden;
`,s().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${r.w4.colors.sidebarBg};
  border-bottom: 1px solid ${r.w4.colors.sidebarBorder};
  padding-left: max(${r.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${r.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${r.w4.spacing.sm};
  z-index: 100;
`,s().button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${r.w4.typography.fontFamily};
  font-size: ${r.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${r.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${r.w4.colors.accent}; }
`,s().span`
  color: ${r.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,s().div`
  font-size: ${r.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${r.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,s().span`
  font-weight: 400;
  color: ${r.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,s().div`
  flex: 1;
`;let em=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ef=(0,d.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,ex=(0,d.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`;s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${r.w4.colors.mainBg};
  font-family: ${r.w4.typography.fontFamily};
  animation: ${em} 0.4s ease 0.15s both;
`,s().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,s().div`
  position: absolute;
  inset: 0;
  animation: ${ef} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
  background: ${r.w4.colors.border};
  animation: ${ex} 1.4s ease-in-out infinite;
`,s().span`
  color: ${r.w4.colors.mainTextMuted};
  font-size: ${r.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`},81316(e,o,a){a.d(o,{w4:()=>i});let r={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},t="--at-",i={colors:function(){let e={};for(let o of Object.keys(r))e[o]=`var(${t}${o})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${t}suiteLab)`,vida:`var(${t}suiteVida)`,learn:`var(${t}suiteLearn)`,games:`var(${t}suiteGames)`,ent:`var(${t}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:`
    outline: 2px solid var(--at-accent);
    outline-offset: 2px;
  `}},8581(e,o,a){a.d(o,{tz:()=>D});var r=a(65723),t=a(37991),i=a(36859),n=a.n(i),l=a(15726);let s={ghost:"transparent",accent:"transparent",primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},d={ghost:l.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:l.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},c={ghost:l.w4.colors.border,accent:l.w4.colors.accent,primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},p={ghost:l.w4.colors.mainTextMuted,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},g={ghost:l.w4.colors.mainText,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},m={sm:"28px",md:"30px"},f={sm:"0 10px",md:"0 12px"},x={sm:"12px",md:"12px"};n().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>m[e]};
  padding: ${({size:e})=>f[e]};
  background: ${({variant:e})=>s[e]};
  border: 1px solid ${({variant:e})=>c[e]};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({variant:e})=>p[e]};
  font-size: ${({size:e})=>x[e]};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>d[e]};
    color: ${({variant:e})=>g[e]};
    border-color: ${({variant:e})=>"ghost"===e?l.w4.colors.accent:c[e]};
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;let u={default:l.w4.colors.accent,danger:"#f85149"},h={default:l.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"};n().button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: ${({active:e})=>e?`${l.w4.colors.accent}22`:"transparent"};
  border: 1px solid
    ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${({shape:e})=>"circle"===e?"999px":l.w4.borderRadius.sm};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  &:hover:not(:disabled) {
    color: ${({tone:e})=>u[e]};
    background: ${({tone:e})=>h[e]};
    border-color: ${({tone:e})=>u[e]};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,n().div`
  position: relative;
  display: inline-flex;
`,n().div`
  position: absolute;
  top: calc(100% + 6px);
  ${({align:e})=>"right"===e?"right: 0;":"left: 0;"}
  min-width: 180px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,n().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: none;
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeSm};
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: -2px;
  }
`,n().div`
  height: 1px;
  margin: 4px 0;
  background: ${l.w4.colors.sidebarBorder};
`,n().div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`,n().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,n().span`
  width: 1px;
  height: 20px;
  background: ${l.w4.colors.border};
  flex-shrink: 0;
`,n().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,n()("button",{shouldForwardProp:e=>"active"!==e&&"highlight"!==e})`
  padding: 6px 14px;
  height: 28px;
  border-radius: 999px;
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  border: 1px solid
    ${({active:e,highlight:o})=>e||o?l.w4.colors.accent:"transparent"};
  color: ${({active:e,highlight:o})=>e||o?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: ${l.w4.transitions.fast};

  &:hover:not(:disabled) { color: ${l.w4.colors.mainText}; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${l.w4.focusRing} }
`,a(62727);var b=a(72799);let w=(0,b.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;n().div`
  position: relative;
`,n().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px 4px 4px;
  background: none;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: border-color ${l.w4.transitions.fast}, background ${l.w4.transitions.fast};
  &:hover {
    border-color: ${l.w4.colors.accent};
    background: ${l.w4.colors.sidebarHover};
  }

  /* With DisplayName hidden on mobile the pill becomes an oval — pad
     equally and drop the gap so the wrapper is a true circle. */
  @media (max-width: ${l.w4.breakpoints.md}) {
    padding: 4px;
    gap: 0;
  }
`,n().img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,n().div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${l.w4.colors.accentMuted};
  border: 1px solid ${l.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: ${l.w4.colors.accent};
  font-family: ${l.w4.typography.fontFamily};
  flex-shrink: 0;
`,n().span`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${l.w4.breakpoints.md}) {
    display: none;
  }
`,n().div`
  position: fixed;
  min-width: 240px;
  background: ${l.w4.colors.surfaceRaised};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${w} 0.15s ease;
  backdrop-filter: blur(12px);

  @media (max-width: ${l.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    max-height: calc(100dvh - env(safe-area-inset-top, 0px) - 96px);
    overflow-y: auto;
  }
`,n().div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${l.w4.colors.border};
`,n().img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`,n().div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${l.w4.colors.accentMuted};
  border: 1px solid ${l.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: ${l.w4.colors.accent};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: 10px;
`,n().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,n().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,n().div`
  padding: 12px 16px 10px;
  border-bottom: 1px solid ${l.w4.colors.borderSubtle};
`,n().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextFaint};
  margin-bottom: 6px;
`,n().div`
  display: flex;
  gap: 4px;
  padding: 3px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.borderSubtle};
  border-radius: ${l.w4.borderRadius.md};
`,n().button`
  flex: 1;
  padding: 6px 10px;
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: ${({active:e})=>e?600:500};
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  &:hover {
    color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainText};
    background: ${({active:e})=>e?l.w4.colors.accentMuted:l.w4.colors.sidebarHover};
  }
`,n().button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${l.w4.colors.mainTextMuted};
  transition: background 0.12s, color 0.12s;
  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${({danger:e})=>e?"#e05252":l.w4.colors.mainText};
  }
`;let y={"time.justNow":{en:"just now",pt:"agora mesmo"},"time.mAgo":{en:"{n}m ago",pt:"h\xe1 {n}m"},"time.hAgo":{en:"{n}h ago",pt:"h\xe1 {n}h"},"time.dAgo":{en:"{n}d ago",pt:"h\xe1 {n}d"},updated:{en:"updated {age}",pt:"atualizado {age}"},refresh:{en:"Refresh",pt:"Atualizar"},loading:{en:"Loading…",pt:"A carregar…"},noData:{en:"No data available",pt:"Sem dados dispon\xedveis"},noDescription:{en:"No description provided.",pt:"Sem descri\xe7\xe3o."},failedToFetch:{en:"Failed to fetch",pt:"Erro ao carregar"},perWeek:{en:"/ wk",pt:"/ sem"},"devtools.heading":{en:"Dev Tools",pt:"Ferramentas"},"devtools.playground":{en:"Playground",pt:"Playground"},"devtools.pad":{en:"Pad",pt:"Pad"},"devtools.charts":{en:"Charts",pt:"Gr\xe1ficos"},"devtools.csv":{en:"CSV",pt:"CSV"},"devtools.regex":{en:"Regex",pt:"Regex"},"devtools.json":{en:"JSON",pt:"JSON"},"devtools.diff":{en:"Diff",pt:"Diferen\xe7as"},"devtools.jwt":{en:"JWT",pt:"JWT"},"devtools.cron":{en:"Cron",pt:"Cron"},"devtools.colors":{en:"Colors",pt:"Cores"},"devtools.api":{en:"API",pt:"API"}},$="atlantis:locale",v="shell:locale";function z(e){return"en"===e||"pt"===e}function k(){try{let e=localStorage.getItem($);if(z(e))return e}catch{}return"en"}(0,l.PL)(v).then(e=>{if(z(e))try{localStorage.setItem($,e)}catch{}}).catch(()=>{}),n().div`
  display: flex;
  gap: 4px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
`,n().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${l.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${l.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?l.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":l.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":l.w4.colors.mainText};
  }
`;let M={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>'};function A({name:e,size:o=18,strokeWidth:a=1.5,...t}){let i=M[e];return(0,r.jsx)("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!t["aria-label"]||void 0,...t,dangerouslySetInnerHTML:{__html:i}})}n().div`
  position: relative;
  display: inline-block;
`,n().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px 6px 8px;
  background: ${({open:e})=>e?l.w4.colors.surfaceHover:"transparent"};
  border: 1px solid
    ${({open:e})=>e?l.w4.colors.borderStrong:l.w4.colors.border};
  border-radius: 999px;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast},
    border-color ${l.w4.transitions.fast},
    color ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.mainText};
    border-color: ${l.w4.colors.borderStrong};
  }
  &:focus-visible { ${l.w4.focusRing} }
`,n().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  background: ${l.w4.colors.accentMuted};
  color: ${l.w4.colors.accent};
  padding: 2px 7px;
  border-radius: 999px;
`;let T=(0,b.keyframes)`
  from { opacity: 0; transform: translate(-50%, -6px); }
  to   { opacity: 1; transform: translate(-50%,  0); }
`;n().div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  max-width: calc(100vw - 24px);
  padding: 10px;
  background: ${l.w4.colors.surfaceRaised};
  border: 1px solid ${l.w4.colors.borderStrong};
  border-radius: 14px;
  box-shadow: ${l.w4.elevation.lg};
  z-index: ${l.w4.zIndex.dropdown};
  animation: ${T} 0.18s ease both;

  @media (max-width: ${l.w4.breakpoints.md}) {
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
`,n()("button",{shouldForwardProp:e=>"accent"!==e&&"expanded"!==e})`
  width: 100%;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  background: ${({expanded:e})=>e?l.w4.colors.surfaceHover:"transparent"};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  text-align: left;
  transition: background ${l.w4.transitions.fast};

  &:hover { background: ${l.w4.colors.surfaceHover}; }
  &:focus-visible { ${l.w4.focusRing} }
`,n()("span",{shouldForwardProp:e=>"accent"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({accent:e})=>e}26;
  color: ${({accent:e})=>e};
  border: 1px solid ${({accent:e})=>e}40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,n().span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,n().span`
  font-size: 13.5px;
  color: ${l.w4.colors.mainText};
  font-weight: 500;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,n().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,n()("span",{shouldForwardProp:e=>"accent"!==e})`
  font-family: ${l.w4.typography.fontFamilyMono};
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
`,n().div`
  margin: 2px 0 6px 48px;
  padding: 4px 0;
  border-left: 1px solid ${l.w4.colors.borderSubtle};
  display: flex;
  flex-direction: column;
`,n().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px 7px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12.5px;
  cursor: pointer;
  text-align: left;
  transition: background ${l.w4.transitions.fast},
    color ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.mainText};
    background: ${l.w4.colors.surfaceHover};
  }
  &:focus-visible { ${l.w4.focusRing} }
`,n().span`
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
`,n().span`
  margin-left: auto;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
`,n().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};

  @media (max-width: ${l.w4.breakpoints.md}) {
    gap: ${l.w4.spacing.xs};

    .header-kbd { display: none; }
    .header-hide-md { display: none; }
  }
`,n().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 999px;
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.accent};
    border-color: ${l.w4.colors.accent};
    background: ${l.w4.colors.sidebarHover};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,n().button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 10px 0 10px;
  background: transparent;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 999px;
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};
  white-space: nowrap;

  .kbd {
    display: inline-flex;
    align-items: center;
    gap: 1px;
    padding: 2px 6px;
    border-radius: 6px;
    background: ${l.w4.colors.sidebarHover};
    border: 1px solid ${l.w4.colors.borderSubtle};
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    color: ${l.w4.colors.mainTextMuted};
    letter-spacing: 0.04em;
    transition: color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, background ${l.w4.transitions.fast};
  }

  &:hover {
    color: ${l.w4.colors.accent};
    border-color: ${l.w4.colors.accent};
    background: ${l.w4.colors.sidebarHover};
  }
  &:hover .kbd {
    color: ${l.w4.colors.accent};
    border-color: ${l.w4.colors.accent}55;
    background: ${l.w4.colors.surface};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,n().div`
  position: relative;
  display: inline-flex;
`,n().span`
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: #ff6fa9;
  border: 2px solid ${l.w4.colors.mainBg};
  color: #fff;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0;
  pointer-events: none;
`,n().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  background: ${l.w4.colors.accent};
  border: 1px solid ${l.w4.colors.accent};
  border-radius: 999px;
  color: #fff;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};
  white-space: nowrap;

  &:hover {
    background: ${l.w4.colors.accentHover};
    border-color: ${l.w4.colors.accentHover};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
`,n().div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 900;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  ${({forceVisible:e})=>e?"":"@media (hover: hover) and (pointer: fine) { display: none; }"}
`,n().div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 45%;
  height: 60%;
  pointer-events: auto;
  touch-action: none;
`,n().div`
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
  transition: opacity ${l.w4.transitions.fast};
`,n().div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${54}px;
  height: ${54}px;
  margin-left: -${27}px;
  margin-top: -${27}px;
  border-radius: 50%;
  background: ${l.w4.colors.accent};
  border: 2px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.45);
  transform: translate(
    ${({dx:e})=>60*e}px,
    ${({dy:e})=>60*e}px
  );
  transition: transform 0.05s linear;
`,n().div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  gap: 14px;
  pointer-events: auto;
  touch-action: manipulation;

  @media (max-width: ${l.w4.breakpoints.md}) {
    right: 20px;
    bottom: 20px;
    gap: 10px;
  }
`,n().button`
  min-width: 72px;
  min-height: 72px;
  padding: 0 18px;
  border-radius: 50%;
  background: ${({accent:e})=>e};
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-family: ${l.w4.typography.fontFamily};
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
  transition: transform 0.08s ease, box-shadow ${l.w4.transitions.fast};

  &:active {
    transform: scale(0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  }
`;let j=(0,b.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;n()("div",{shouldForwardProp:e=>"accentColor"!==e&&"pinned"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  background: ${l.w4.colors.surface};
  border: 1px solid ${({pinned:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  min-height: 230px;
  transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 200ms,
              box-shadow 200ms;
  animation: ${j} 0.4s ease both;
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
      border-color: ${l.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${l.w4.colors.shadowStrong};
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
`,n().div`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${l.w4.colors.border};
  color: ${l.w4.colors.mainText};

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
    font-family: ${l.w4.typography.fontFamily};
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
    & > .h { height: 7px; background: ${l.w4.colors.mainText}; opacity: 0.9; width: 55%; margin-bottom: 4px; }
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
    & > .lb { position: absolute; left: 14px; top: 12px; font-family: ${l.w4.typography.fontFamily}; font-style: italic; font-size: 22px; font-weight: 600; color: #f78166; letter-spacing: -0.4px; }
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
      font-family: ${l.w4.typography.fontFamilyMono};
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
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 14px;
    padding: 14px;
    line-height: 1.7;
    color: ${l.w4.colors.mainTextMuted};
    & .hl { background: rgba(56, 139, 253, 0.35); color: #58a6ff; padding: 1px 3px; border-radius: 2px; }
    & .slash { color: #58a6ff; }
  }

  /* jsonexplorer — tree */
  &.viz--jsonexplorer {
    background: linear-gradient(135deg, #0d2818, #0f1220);
    padding: 14px;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    color: ${l.w4.colors.mainTextMuted};
    line-height: 1.5;
    & .k { color: #3fb950; }
    & .v { color: ${l.w4.colors.mainText}; }
    & .b { color: ${l.w4.colors.mainTextMuted}; opacity: 0.7; }
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
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    & > span { padding: 6px 10px; border-radius: 4px; }
    & > .h { background: rgba(163, 113, 247, 0.2); color: #a371f7; }
    & > .p { background: rgba(127, 183, 126, 0.2); color: #7fb77e; }
    & > .s { background: rgba(216, 106, 106, 0.2); color: #d86a6a; }
    & > .sep { padding: 0; background: transparent; color: ${l.w4.colors.mainTextMuted}; opacity: 0.6; }
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
      font-family: ${l.w4.typography.fontFamilyMono};
      font-size: 9px;
      color: ${l.w4.colors.mainTextMuted};
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
      font-family: ${l.w4.typography.fontFamily};
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
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10.5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    & .get { color: #3fb950; }
    & .url { color: ${l.w4.colors.mainText}; }
    & .status { color: #58a6ff; }
    & .echo { color: ${l.w4.colors.mainTextMuted}; opacity: 0.75; }
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
      color: ${l.w4.colors.mainText};
      align-self: flex-start;
      max-width: 80%;
      line-height: 1.35;
    }
    & > .bubble.r {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.14);
      color: ${l.w4.colors.mainTextMuted};
      align-self: flex-end;
      font-family: ${l.w4.typography.fontFamilyMono};
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
      color: ${l.w4.colors.mainText};
      font-family: ${l.w4.typography.fontFamilyMono};
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
      font-family: ${l.w4.typography.fontFamilyMono};
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
      font-family: ${l.w4.typography.fontFamilyMono};
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
      font-family: ${l.w4.typography.fontFamily};
      font-weight: 800;
      font-size: 14px;
      letter-spacing: -1px;
      color: ${l.w4.colors.mainText};
    }
  }
`,n().div`
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
    font-family: ${l.w4.typography.fontFamilyMono};
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
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 9px;
    color: ${l.w4.colors.mainTextMuted};
    letter-spacing: 1.4px;
    text-transform: uppercase;
    border: 1px solid ${l.w4.colors.border};
    border-radius: 3px;
    padding: 1px 6px;
    flex-shrink: 0;
  }
`,n().div`
  padding: 6px 14px 16px;
`,n().h3`
  margin: 0 0 6px;
  font-family: ${l.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${l.w4.colors.mainText};

  .hash {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${l.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,n().p`
  margin: 0;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,n().div`
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid ${l.w4.colors.borderSubtle};
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.4;
`,n().button`
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
  color: ${({pinned:e})=>e?l.w4.colors.accent:l.w4.colors.mainText};
  opacity: ${({pinned:e})=>+!!e};
  cursor: pointer;
  transition: opacity ${l.w4.transitions.fast}, color ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast};
  z-index: 3;
  padding: 0;

  &:hover {
    color: ${l.w4.colors.accent};
    border-color: ${l.w4.colors.accent};
  }
`,n().div`
  position: absolute;
  top: 8px;
  right: 44px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${l.w4.transitions.fast};
  z-index: 3;
`,n().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1.5px solid
    ${({variant:e})=>"default"===e?l.w4.colors.borderStrong:l.w4.colors.accent};
  background: ${({variant:e})=>"filled"===e?l.w4.colors.accentMuted:"transparent"};
  color: ${({variant:e})=>"default"===e?l.w4.colors.mainTextMuted:l.w4.colors.accent};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 500;
  white-space: nowrap;
  cursor: ${({clickable:e})=>e?"pointer":"default"};
  transition: ${l.w4.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${({variant:e})=>"default"===e?l.w4.colors.mainTextFaint:l.w4.colors.accentHover};
    color: ${({variant:e})=>"default"===e?l.w4.colors.mainText:l.w4.colors.accentHover};
  }

  &:focus-visible {
    ${l.w4.focusRing}
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,n().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
`;let S={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:l.w4.colors.accentMuted},F={neutral:l.w4.colors.mainTextMuted,live:l.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:l.w4.colors.accent};n().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  font-weight: ${({tone:e})=>"film"===e||"tv"===e?600:500};
  letter-spacing: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"1.2px":"0.6px"};
  text-transform: ${({tone:e})=>"live"===e||"film"===e||"tv"===e?"uppercase":"none"};
  padding: ${({tone:e})=>"film"===e||"tv"===e?"3px 8px":"2px 7px"};
  border-radius: ${({tone:e})=>"film"===e||"tv"===e?l.w4.borderRadius.sm:"3px"};
  background: ${({tone:e})=>S[e]};
  color: ${({tone:e})=>F[e]};
`,n().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`,n().kbd`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 3px;
  color: ${l.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`,n().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,n().label`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 9px 14px;
  transition: border-color ${l.w4.transitions.fast};

  &:focus-within {
    border-color: ${l.w4.colors.accent};
  }
`,n().input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainText};
  min-width: 0;

  &::placeholder {
    color: ${l.w4.colors.mainTextFaint};
  }
`,n().span`
  display: inline-flex;
  align-items: center;
  color: ${l.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,n().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px 20px 20px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.borderSubtle};
  border-radius: ${l.w4.borderRadius.lg};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  transition: border-color ${l.w4.transitions.fast},
    background ${l.w4.transitions.fast};

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
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
`,n().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,n().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,n().div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,n().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  line-height: 1.45;
`,n().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.danger};
`,n().div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 18px;
  background: ${l.w4.colors.surface};
  border: 1px solid
    ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.borderSubtle};
  border-radius: ${l.w4.borderRadius.lg};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  box-shadow: ${({active:e})=>e?`inset 0 0 0 1px ${l.w4.colors.accent}`:"none"};
  transition: border-color ${l.w4.transitions.fast};

  &:hover {
    border-color: ${({active:e})=>e?l.w4.colors.accentHover:l.w4.colors.borderStrong};
  }
`,n().div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
`,n().div`
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
`,n().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,n().div`
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${l.w4.colors.mainText};
  margin-bottom: 4px;
`,n().div`
  font-size: 11.5px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.35;
  margin-bottom: 8px;
`,n().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${l.w4.colors.accentMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
`,n().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 1;
  min-height: 0;
`,n().button`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.borderSubtle};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;
  gap: 6px;
  font-family: inherit;
  color: ${l.w4.colors.mainText};
  cursor: ${e=>e.onClick?"pointer":"default"};
  transition: border-color ${l.w4.transitions.fast},
    background ${l.w4.transitions.fast};

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
    background: ${l.w4.colors.surfaceHover};
  }

  &:focus-visible {
    ${l.w4.focusRing}
  }
`,n().div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: ${({fg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`,n().div`
  font-size: 11px;
  color: ${l.w4.colors.mainText};
`,n().div`
  margin-top: 14px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({color:e})=>e};
  letter-spacing: 0.5px;
`;let B=(0,b.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;n()("div",{shouldForwardProp:e=>"accentColor"!==e&&"index"!==e})`
  --acc: ${({accentColor:e})=>e};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  min-height: 230px;
  transition:
    transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 200ms,
    box-shadow 200ms;
  animation: ${B} 0.4s ease both;
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
      border-color: ${l.w4.colors.mainTextMuted};
      box-shadow: 0 14px 40px ${l.w4.colors.shadowStrong};
    }
    &:hover::after { transform: scaleY(1); }
    &:hover .viz::before { opacity: 1; }
    &:hover .gamecard-emoji { transform: translateY(-2px) scale(1.05); }
  }
`,n()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${l.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(120% 100% at 50% 100%, var(--acc) 0%, transparent 60%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
  background-color: ${l.w4.colors.codeBg};

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
`,n().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  z-index: 2;
`,n().span`
  font-size: 56px;
  line-height: 1;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,n()("div",{shouldForwardProp:e=>"accentColor"!==e})`
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
`,n().div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
`,n().div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`,n()("div",{shouldForwardProp:e=>"accentColor"!==e})`
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
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: ${({accentColor:e})=>e};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,n().div`
  padding: 6px 14px 16px;
`,n().h3`
  margin: 0 0 6px;
  font-family: ${l.w4.typography.fontFamily};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${l.w4.colors.mainText};

  .hash {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 400;
    color: ${l.w4.colors.mainTextMuted};
    opacity: 0.75;
  }
`,n().p`
  margin: 0;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,a(75406),a(61318),n().div`
  font-size: 14px;
  color: ${l.w4.colors.mainText};
  line-height: 1.65;

  p { margin: 0 0 0.6em; }
  p:last-child { margin-bottom: 0; }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${l.w4.colors.mainText};
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
    accent-color: ${l.w4.colors.accent};
    flex-shrink: 0;
    margin-top: 2px;
  }

  strong { font-weight: 600; color: ${l.w4.colors.mainText}; }
  em     { font-style: italic; }

  a {
    color: ${l.w4.colors.accent};
    text-decoration: none;

    &:hover { text-decoration: underline; color: ${l.w4.colors.accentHover}; }
  }

  blockquote {
    margin: 0.6em 0;
    padding: 6px 12px;
    border-left: 3px solid ${l.w4.colors.accent};
    background: ${l.w4.colors.surface};
    border-radius: 0 6px 6px 0;
    color: ${l.w4.colors.mainTextMuted};
    font-style: italic;
  }

  /* Inline code only — CodeBlock owns fenced blocks */
  code {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 12.5px;
    background: ${l.w4.colors.codeBg};
    border: 1px solid ${l.w4.colors.codeBorder};
    border-radius: 4px;
    padding: 1px 5px;
    color: ${l.w4.colors.mainText};
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
    border-radius: ${l.w4.borderRadius.md};
  }
  th, td {
    padding: 7px 12px;
    border: 1px solid ${l.w4.colors.border};
    text-align: left;
    vertical-align: top;
  }
  th {
    background: ${l.w4.colors.surface};
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.03em;
    color: ${l.w4.colors.mainTextMuted};
    text-transform: uppercase;
  }
  tr:nth-of-type(even) td { background: ${l.w4.colors.surface}; }

  img {
    max-width: 100%;
    border-radius: ${l.w4.borderRadius.md};
    margin: 0.4em 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${l.w4.colors.border};
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
`;let C=[{id:"playground",labelKey:"devtools.playground",hash:"#/playground",icon:"beaker"},{id:"pad",labelKey:"devtools.pad",hash:"#/mdpad",icon:"edit"},{id:"chartbuilder",labelKey:"devtools.charts",hash:"#/chartbuilder",icon:"bar-chart"},{id:"csvexplorer",labelKey:"devtools.csv",hash:"#/csvexplorer",icon:"table"},{id:"regexlab",labelKey:"devtools.regex",hash:"#/regexlab",icon:"search"},{id:"jsonexplorer",labelKey:"devtools.json",hash:"#/jsonexplorer",icon:"braces"},{id:"codediff",labelKey:"devtools.diff",hash:"#/codediff",icon:"code"},{id:"jwtinspector",labelKey:"devtools.jwt",hash:"#/jwtinspector",icon:"key"},{id:"cronbuilder",labelKey:"devtools.cron",hash:"#/cronbuilder",icon:"clock"},{id:"colorlab",labelKey:"devtools.colors",hash:"#/colorlab",icon:"palette"},{id:"apiexplorer",labelKey:"devtools.api",hash:"#/apiexplorer",icon:"terminal"}],R=n().nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${l.w4.spacing.sm} 0;
`,P=n().div`
  font-size: 10px;
  font-weight: 600;
  color: ${l.w4.colors.sidebarTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: ${l.w4.spacing.xs} ${l.w4.spacing.md};
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
`,E=n().button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  margin: 0 6px;
  border: none;
  border-radius: ${l.w4.borderRadius.md};
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transition: background ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};

  &:hover {
    background: ${l.w4.colors.sidebarHover};
    color: ${l.w4.colors.mainText};
  }

  ${({collapsed:e})=>e&&`
    justify-content: center;
    padding: 8px;
    margin: 0 4px;
  `}
`,L=n().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`,H=n().span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"display: none;"}
`;function D({activeAppId:e}){let{collapsed:o}=(0,l.cL)(),[a]=function(){let[e,o]=(0,t.useState)(k),a=(0,t.useCallback)(e=>{o(e);try{localStorage.setItem($,e)}catch{}(0,l.Is)(v,e).catch(()=>{}),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,t.useEffect)(()=>{let e=e=>{o(e.detail)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,t.useEffect)(()=>{(0,l.PL)(v).then(a=>{if(z(a)&&a!==e){try{localStorage.setItem($,a)}catch{}o(a)}}).catch(()=>{})},[]),[e,a]}(),i=(0,t.useMemo)(()=>(e,o)=>{let r=y[e]?.[a]??e;return o?Object.entries(o).reduce((e,[o,a])=>e.replace(RegExp(`\\{${o}\\}`,"g"),String(a)),r):r},[a]),n=(0,t.useRef)(null),s=e=>{n.current!==e&&(n.current=e,document.activeElement?.blur(),window.location.hash=e,setTimeout(()=>{n.current=null},50))};return(0,r.jsxs)(R,{children:[(0,r.jsx)(P,{collapsed:o,children:i("devtools.heading")}),C.map(a=>{let t=i(a.labelKey);return(0,r.jsxs)(E,{active:e===a.id,collapsed:o,onPointerDown:e=>{0===e.button&&s(a.hash)},onClick:()=>s(a.hash),title:t,children:[(0,r.jsx)(L,{children:(0,r.jsx)(A,{name:a.icon,size:16})}),(0,r.jsx)(H,{collapsed:o,children:t})]},a.id)})]})}}}]);