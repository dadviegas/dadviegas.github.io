"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["4016"],{78771(e,a,t){var o=t(65723),i=t(37991),n=t.n(i),r=t(58997),s=t(36859),l=t.n(s),d=t(72799),c=t(89874),p=t(48294),m=t(28395),g=t(28170),u=t(30522);let h={markdown:()=>t.e("4873").then(t.t.bind(t,27280,23)),earth:()=>t.e("3678").then(t.t.bind(t,67997,23)),techscope:()=>t.e("6514").then(t.t.bind(t,93305,23)),citypulse:()=>t.e("9462").then(t.t.bind(t,29829,23)),cosmos:()=>t.e("5616").then(t.t.bind(t,47699,23)),stockpulse:()=>t.e("1395").then(t.t.bind(t,49614,23)),pad:()=>t.e("9103").then(t.t.bind(t,3250,23)),regexlab:()=>t.e("4898").then(t.t.bind(t,22745,23)),jsonexplorer:()=>t.e("8065").then(t.t.bind(t,56776,23)),codediff:()=>t.e("4026").then(t.t.bind(t,21937,23)),playground:()=>t.e("3141").then(t.t.bind(t,41780,23)),jwtinspector:()=>t.e("5394").then(t.t.bind(t,58633,23)),colorlab:()=>t.e("4274").then(t.t.bind(t,28105,23)),cronbuilder:()=>t.e("6001").then(t.t.bind(t,97672,23)),csvexplorer:()=>t.e("9773").then(t.t.bind(t,95836,23)),chartbuilder:()=>t.e("2467").then(t.t.bind(t,83902,23)),school:()=>t.e("4848").then(t.t.bind(t,355,23)),weather:()=>t.e("446").then(t.t.bind(t,73437,23)),apiexplorer:()=>t.e("5153").then(t.t.bind(t,86488,23)),movies:async()=>{let e=await t.e("649").then(t.t.bind(t,22304,23)),a=e.default;return{default:("object"==typeof a&&a&&"default"in a?a.default:a)??e.default}},promptlab:()=>t.e("747").then(t.t.bind(t,15014,23)),imagegen:()=>t.e("3213").then(t.t.bind(t,67820,23)),games:()=>t.e("3009").then(t.t.bind(t,96840,23)),daily:()=>t.e("3531").then(t.t.bind(t,64438,23)),ask:()=>t.e("7335").then(t.t.bind(t,68170,23)),finance:()=>t.e("6248").then(t.t.bind(t,73851,23))},f=Object.fromEntries(Object.entries(h).map(([e,a])=>[e,n().lazy(a)])),b=new Set;function x(e){if(b.has(e))return;let a=h[e];if(!a)return;let t=navigator.connection;t?.saveData||(b.add(e),a().catch(()=>{b.delete(e)}))}let y={All:{en:"All",pt:"Todas"},Live:{en:"Live",pt:"Ao Vivo"},School:{en:"School",pt:"Escola"},Explore:{en:"Explore",pt:"Explorar"},Create:{en:"Create",pt:"Criar"},Inspect:{en:"Inspect",pt:"Analisar"},Connect:{en:"Connect",pt:"Conectar"},Content:{en:"Content",pt:"Conte\xfado"},Fun:{en:"Fun",pt:"Divers\xe3o"},Lab:{en:"Lab",pt:"Lab"},Tools:{en:"Tools",pt:"Ferramentas"}},w={"AI Lab":{en:"AI Lab",pt:"Lab de IA"},"Developer Toolkit":{en:"Developer Toolkit",pt:"Ferramentas Dev"},"Data Studio":{en:"Data Studio",pt:"Est\xfadio de Dados"},"Life Dashboard":{en:"Life Dashboard",pt:"Painel de Vida"},"Learning Hub":{en:"Learning Hub",pt:"Aprendizagem"},"Game Room":{en:"Game Room",pt:"Sala de Jogos"},Entertainment:{en:"Entertainment",pt:"Entretenimento"},Other:{en:"Other",pt:"Outros"}},v={categories:{en:"Categories",pt:"Categorias"},tagline:{en:"Everything happening on the internet. In one place.",pt:"Tudo o que acontece na internet. Num s\xf3 lugar."},searchApps:{en:"Search apps, widgets, places…",pt:"Pesquisar apps, widgets, lugares…"},openLauncher:{en:"to open launcher",pt:"para abrir launcher"},pinned:{en:"Pinned",pt:"Fixos"},recentlyUsed:{en:"Recently used",pt:"Usados recentemente"},noMatch:{en:"No apps match",pt:"Nenhuma app corresponde a"},open:{en:"Open",pt:"Abrir"},suites:{en:"Suites",pt:"Suites"},"greeting.morning":{en:"Good morning",pt:"Bom dia"},"greeting.afternoon":{en:"Good afternoon",pt:"Boa tarde"},"greeting.evening":{en:"Good evening",pt:"Boa noite"},dashboard:{en:"Dashboard",pt:"Painel"},addWidget:{en:"Add widget",pt:"Adicionar widget"},"home.today":{en:"Today",pt:"Hoje"},"home.weather.city":{en:"Lisbon",pt:"Lisboa"},"home.emptyFiltered.title":{en:"No apps to show",pt:"Sem apps para mostrar"},"home.emptyFiltered.desc":{en:"Your current filters don't match any apps. Try a different suite or category, or adjust your interests in Preferences.",pt:"Os filtros atuais n\xe3o correspondem a nenhuma app. Escolhe outra su\xedte ou categoria, ou ajusta os teus interesses nas Prefer\xeancias."},"home.emptyFiltered.cta":{en:"Open Preferences",pt:"Abrir Prefer\xeancias"},"home.emptyFiltered.clear":{en:"Clear filters",pt:"Limpar filtros"}};function k(e,a){return y[e]?.[a]??e}function $(e,a){return v[e]?.[a]??e}function z(e){return e.visibility?e.visibility:e.homeHidden?"hidden-home":"default"}let M=[{id:"markdown",port:3001,labelKey:"apps.markdown.label",descriptionKey:"apps.markdown.description",hash:"#/blog",icon:"file",color:"#388bfd",enabled:!0,category:"Content",needsAuth:!1,suite:"Learning Hub",interest:"learning"},{id:"school",port:3019,labelKey:"apps.school.label",descriptionKey:"apps.school.description",hash:"#/school",hashAliases:["math","portugues","estudodomeio","ingles"],icon:"graduation",color:"#f78166",enabled:!0,category:"School",needsAuth:!1,suite:"Learning Hub",interest:"learning"},{id:"earth",port:3002,labelKey:"apps.earth.label",descriptionKey:"apps.earth.description",hash:"#/earth",icon:"globe",color:"#3fb950",enabled:!0,category:"Explore",needsAuth:!1,suite:"Learning Hub",interest:"learning"},{id:"cosmos",port:3006,labelKey:"apps.cosmos.label",descriptionKey:"apps.cosmos.description",hash:"#/cosmos",icon:"telescope",color:"#bc8cff",enabled:!0,category:"Explore",needsAuth:!1,suite:"Learning Hub",interest:"space"},{id:"techscope",port:3003,labelKey:"apps.techscope.label",descriptionKey:"apps.techscope.description",hash:"#/techscope",icon:"satellite",color:"#a371f7",enabled:!0,category:"Live",needsAuth:!1,suite:"Life Dashboard",interest:"tech"},{id:"citypulse",port:3004,labelKey:"apps.citypulse.label",descriptionKey:"apps.citypulse.description",hash:"#/citypulse",icon:"buildings",color:"#d29922",enabled:!0,category:"Live",needsAuth:!1,suite:"Life Dashboard",interest:"news"},{id:"stockpulse",port:3007,labelKey:"apps.stockpulse.label",descriptionKey:"apps.stockpulse.description",hash:"#/stockpulse",icon:"trending-up",color:"#3fb950",enabled:!0,category:"Live",needsAuth:!1,suite:"Life Dashboard"},{id:"csvexplorer",port:3016,labelKey:"apps.csvexplorer.label",descriptionKey:"apps.csvexplorer.description",hash:"#/csvexplorer",icon:"table",color:"#58a6ff",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"chartbuilder",port:3017,labelKey:"apps.chartbuilder.label",descriptionKey:"apps.chartbuilder.description",hash:"#/chartbuilder",icon:"bar-chart",color:"#d29922",enabled:!0,category:"Create",needsAuth:!1,suite:"Developer Toolkit",homeHidden:!0},{id:"pad",port:3008,labelKey:"apps.pad.label",descriptionKey:"apps.pad.description",hash:"#/mdpad",hashAliases:["mermaidpad"],icon:"edit",color:"#f78166",enabled:!0,category:"Create",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"regexlab",port:3009,labelKey:"apps.regexlab.label",descriptionKey:"apps.regexlab.description",hash:"#/regexlab",icon:"search",color:"#388bfd",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"jsonexplorer",port:3010,labelKey:"apps.jsonexplorer.label",descriptionKey:"apps.jsonexplorer.description",hash:"#/jsonexplorer",icon:"braces",color:"#3fb950",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"codediff",port:3011,labelKey:"apps.codediff.label",descriptionKey:"apps.codediff.description",hash:"#/codediff",icon:"diff",color:"#d29922",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"playground",port:3012,labelKey:"apps.playground.label",descriptionKey:"apps.playground.description",hash:"#/playground",icon:"terminal",color:"#facc15",enabled:!0,category:"Create",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"jwtinspector",port:3013,labelKey:"apps.jwtinspector.label",descriptionKey:"apps.jwtinspector.description",hash:"#/jwtinspector",icon:"key",color:"#a371f7",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"colorlab",port:3014,labelKey:"apps.colorlab.label",descriptionKey:"apps.colorlab.description",hash:"#/colorlab",icon:"palette",color:"#f78166",enabled:!0,category:"Create",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"cronbuilder",port:3015,labelKey:"apps.cronbuilder.label",descriptionKey:"apps.cronbuilder.description",hash:"#/cronbuilder",icon:"clock",color:"#3fb950",enabled:!0,category:"Connect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"weather",port:3022,labelKey:"apps.weather.label",descriptionKey:"apps.weather.description",hash:"#/weather",icon:"cloud",color:"#58a6ff",enabled:!0,category:"Live",needsAuth:!1,suite:"Life Dashboard"},{id:"apiexplorer",port:3024,labelKey:"apps.apiexplorer.label",descriptionKey:"apps.apiexplorer.description",hash:"#/apiexplorer",icon:"code",color:"#58a6ff",enabled:!0,category:"Connect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"movies",port:3025,labelKey:"apps.movies.label",descriptionKey:"apps.movies.description",hash:"#/movies",icon:"film",color:"#e50914",enabled:!0,category:"Fun",needsAuth:!0,suite:"Entertainment",interest:"movies"},{id:"promptlab",port:3026,labelKey:"apps.promptlab.label",descriptionKey:"apps.promptlab.description",hash:"#/promptlab",icon:"brain",color:"#a371f7",enabled:!0,category:"Lab",needsAuth:!0,suite:"AI Lab",interest:"tech"},{id:"imagegen",port:3027,labelKey:"apps.imagegen.label",descriptionKey:"apps.imagegen.description",hash:"#/imagegen",icon:"image",color:"#f78166",enabled:!0,category:"Lab",needsAuth:!0,suite:"AI Lab",interest:"tech"},{id:"daily",port:3029,labelKey:"apps.daily.label",descriptionKey:"apps.daily.description",hash:"#/daily",icon:"target",color:"#34d399",enabled:!0,category:"Tools",needsAuth:!1,suite:"Life Dashboard",interest:"learning"},{id:"games",port:3028,labelKey:"apps.games.label",descriptionKey:"apps.games.description",hash:"#/games",hashAliases:["lebem","leitor","tictactoe","galo","soundhunter","familyquiz","adventure","pixelboard","stopgame","spotit","memory","tapit","jumpparty","drawguess","animalarena","crazykitchen","miniparty","hideseek","buttonmayhem","bombbrawl"],icon:"gamepad",color:"#f97583",enabled:!0,category:"Fun",needsAuth:!1,suite:"Game Room",interest:"games"},{id:"ask",port:3030,labelKey:"apps.ask.label",descriptionKey:"apps.ask.description",hash:"#/ask",hashAliases:[],icon:"sparkle",color:"#8b7bff",enabled:!0,category:"Lab",needsAuth:!1,suite:"AI Lab",interest:"tech"},{id:"finance",port:3031,labelKey:"apps.finance.label",descriptionKey:"apps.finance.description",hash:"#/finance",hashAliases:[],icon:"wallet",color:"#7fb77e",enabled:!0,category:"Tools",suite:"Life Dashboard",needsAuth:!1}],j=[{id:"lab",yamlSuite:"AI Lab",color:c.w4.suites.lab,icon:"beaker",nameKey:"suites.lab.name",subKey:"suites.lab.sub"},{id:"vida",yamlSuite:"Life Dashboard",color:c.w4.suites.vida,icon:"heart",nameKey:"suites.vida.name",subKey:"suites.vida.sub"},{id:"learn",yamlSuite:"Learning Hub",color:c.w4.suites.learn,icon:"graduation",nameKey:"suites.learn.name",subKey:"suites.learn.sub"},{id:"games",yamlSuite:"Game Room",color:c.w4.suites.games,icon:"gamepad",nameKey:"suites.games.name",subKey:"suites.games.sub"},{id:"ent",yamlSuite:"Entertainment",color:c.w4.suites.ent,icon:"film",nameKey:"suites.ent.name",subKey:"suites.ent.sub"}],S=[{id:"lebem",hash:"#/lebem",iconName:"book",labelKey:"quickLaunch.lebem",color:"#f97583"},{id:"tictactoe",hash:"#/tictactoe",iconName:"grid",labelKey:"quickLaunch.tictactoe",color:"#8b5cf6"},{id:"soundhunter",hash:"#/soundhunter",iconName:"mic",labelKey:"quickLaunch.soundhunter",color:"#f59e0b"},{id:"familyquiz",hash:"#/familyquiz",iconName:"brain",labelKey:"quickLaunch.familyquiz",color:"#3b82f6"},{id:"adventure",hash:"#/adventure",iconName:"book",labelKey:"quickLaunch.adventure",color:"#10b981"},{id:"pixelboard",hash:"#/pixelboard",iconName:"palette",labelKey:"quickLaunch.pixelboard",color:"#ec4899"},{id:"stopgame",hash:"#/stopgame",iconName:"close",labelKey:"quickLaunch.stopgame",color:"#f59e0b"},{id:"spotit",hash:"#/spotit",iconName:"eye",labelKey:"quickLaunch.spotit",color:"#8b5cf6"},{id:"memory",hash:"#/memory",iconName:"brain",labelKey:"quickLaunch.memory",color:"#06b6d4"},{id:"tapit",hash:"#/tapit",iconName:"target",labelKey:"quickLaunch.tapit",color:"#f97583"},{id:"jumpparty",hash:"#/jumpparty",iconName:"zap",labelKey:"quickLaunch.jumpparty",color:"#3fb950"},{id:"drawguess",hash:"#/drawguess",iconName:"edit",labelKey:"quickLaunch.drawguess",color:"#d2a8ff"},{id:"animalarena",hash:"#/animalarena",iconName:"trophy",labelKey:"quickLaunch.animalarena",color:"#ef4444"},{id:"crazykitchen",hash:"#/crazykitchen",iconName:"flame",labelKey:"quickLaunch.crazykitchen",color:"#f59e0b"},{id:"miniparty",hash:"#/miniparty",iconName:"sparkle",labelKey:"quickLaunch.miniparty",color:"#58a6ff"},{id:"hideseek",hash:"#/hideseek",iconName:"search",labelKey:"quickLaunch.hideseek",color:"#10b981"},{id:"buttonmayhem",hash:"#/buttonmayhem",iconName:"dice",labelKey:"quickLaunch.buttonmayhem",color:"#a855f7"},{id:"bombbrawl",hash:"#/bombbrawl",iconName:"bomb",labelKey:"quickLaunch.bombbrawl",color:"#ff4444"}],A=(()=>{let e={};for(let a of S)e[a.hash]=a;return e})(),T={"profile.title":"Your Profile","profile.close":"Close","profile.cancel":"Cancel","profile.save":"Save","profile.interests":"Interests","profile.interestsHint":"Personalize your daily feed and in-app recommendations.","profile.ageMode":"Age mode","profile.ageModeHint":"Adjusts School difficulty and filters sensitive content.","topbar.profile.tooltip":"Your profile","topbar.profile.aria":"Open profile","sidebar.home":"Home","sidebar.retreat":"Retreat","sidebar.show":"Show sidebar","sidebar.hide":"Hide sidebar","sidebar.showSuites":"+ Show suites","pinned.moveLeft":"Move left","pinned.moveRight":"Move right","retreat.prompt":"search or open anything","retreat.weather.city":"Lisbon","palette.search":"Search","palette.placeholder":"Search apps, tools, or go anywhere…","palette.recent":"Recent","palette.allApps":"All apps","palette.noMatch":"No apps match","palette.emptyHint":"Try another word or check the spelling.","palette.recentTag":"recent","palette.clear":"Clear","palette.hint.navigate":"navigate","palette.hint.open":"open","palette.hint.close":"close","palette.hint.ask":"ask","palette.scope.all":"All","palette.scope.jump":"Go to","palette.scope.actions":"Actions","palette.scope.recent":"Recent","palette.scope.ask":"Ask","palette.scope.ariaLabel":"Search scope","palette.section.jump":"Go to","palette.section.suites":"Suites","palette.section.apps":"Apps","palette.section.games":"Games","palette.section.actions":"Actions","palette.section.ask":"Ask Atlantis","palette.section.content":"Content","palette.meta.game":"Game \xb7 Game Room","palette.meta.doc":"Saved document","palette.meta.agenda":"Agenda event","palette.meta.reading":"Reading list","palette.action.addWidget":"Add widget to Dashboard","palette.action.addWidget.meta":"Opens the picker","palette.action.theme":"Toggle theme","palette.action.theme.meta":"Dark ↔ Light","palette.action.preferences":"Open Preferences","palette.action.preferences.meta":"Interests, age mode","palette.action.settings":"Open Settings","palette.action.settings.meta":"API keys, advanced","palette.action.language":"Toggle language","palette.action.language.meta":"EN → PT","palette.action.clearNotifications":"Clear notifications","palette.action.clearNotifications.meta":"Mark all {n} as read","palette.action.signout":"Sign out","palette.ask.placeholder":"Ask Atlantis or jump anywhere…","palette.ask.hint":"Type a question and press Enter.","palette.ask.thinking":"Thinking…","palette.ask.loading":"Thinking…","palette.ask.answer":"Atlantis says","palette.ask.error":"Couldn't reach the model","palette.ask.suggestMeta":"AI \xb7 replies inline","palette.ask.you":"You","palette.ask.atlantis":"Atlantis","palette.ask.empty":"Ask a question to get started.","palette.ask.suggestionsTitle":"Try asking…","palette.ask.followUp":"Ask a follow-up…","palette.ask.suggest.summarizeDay":"Summarize my day in 3 lines","palette.ask.suggest.whatsTrending":"What's trending in Lisbon today?","userMenu.preferences":"Preferences","userMenu.settings":"Settings","userMenu.signOut":"Sign out","userMenu.language":"Language","userMenu.theme":"Theme","userMenu.themeLight":"Light","userMenu.themeDark":"Dark","userMenu.themeSystem":"System","userMenu.clearData":"Clear local data","userMenu.clearDataConfirm":"Clear all local settings, caches, and preferences? This cannot be undone — the page will reload.","common.cancel":"Cancel","cmdk.hint.label":"to ask or jump","cmdk.hint.aria":"Press Cmd+K anywhere to open the command palette","cmdk.hint.dismiss":"Hide this hint","onboarding.eyebrow":"✦ START HERE","onboarding.title":"Welcome to Atlantis","onboarding.subtitle":"Three shortcuts to get moving. You can dismiss this card and come back anytime via the command palette.","onboarding.aria":"Getting started","onboarding.dismiss":"Dismiss onboarding","onboarding.tip.palette.title":"Jump anywhere","onboarding.tip.palette.body":"Open the command palette to launch any app, trigger an action, or ask the assistant.","onboarding.tip.preferences.title":"Pick what you care about","onboarding.tip.preferences.body":"Set interests and age mode in Preferences — the home grid, widgets, and suggestions adapt.","onboarding.tip.daily.title":"Keep a daily streak","onboarding.tip.daily.body":"The Daily Manager tracks missions, points, and streaks you pick each day.","suites.label":"Suites","suites.aria":"Open Suites menu","suites.appsCount":"apps in suite","suites.lab.name":"AI Lab","suites.lab.sub":"Prompt \xb7 Image \xb7 Code","suites.vida.name":"Life Dashboard","suites.vida.sub":"Health \xb7 Habits \xb7 News","suites.learn.name":"Learning Hub","suites.learn.sub":"Studies \xb7 Discovery","suites.games.name":"Game Room","suites.games.sub":"Quizzes \xb7 Puzzles","suites.ent.name":"Entertainment","suites.ent.sub":"Movies \xb7 Music \xb7 Stars","error.remote.title":"Couldn't load {name}","error.remote.generic":"Something went wrong while rendering this app.","error.remote.devHint":"The app's dev server isn't reachable. Start it with:","error.remote.prodHint":"This app is temporarily unavailable. Please try again in a moment.","error.remote.retry":"Retry","error.remote.goHome":"Go home","notifications.bell":"Notifications","notifications.title":"Notifications","notifications.markAllRead":"Mark all read","notifications.dismiss":"Dismiss","notifications.empty":"You're all caught up.","notifications.seeAll":"See all","notifications.page.title":"Notifications","notifications.page.subtitle":"Everything the dashboard has notified you about — newest first.","notifications.source.newsPt":"PT News","notifications.source.newsWorld":"World News","notifications.source.seismicPt":"Seismic PT","notifications.source.seismicWorld":"Seismic","notifications.source.daily":"Daily Mission","notifications.source.wikiTopRead":"Wikipedia Top","notifications.source.trending":"Trending","notifications.source.hnFrontPage":"HN Front Page","notifications.source.githubTrending":"GitHub Trending","notifications.source.devto":"Dev.to Weekly","notifications.source.syncError":"Sync Error","notifications.source.weatherPt":"Weather Warning","notifications.source.dailyAchievement":"Streak Achievement","notifications.source.financeBudget":"Budget Alert","notifications.daily.body":"It's {time} — time for {name}.","notifications.daily.group.one":"1 daily mission pending","notifications.daily.group.many":"{count} daily missions pending","notifications.settings.title":"Notification Sources","notifications.settings.desc":"Choose which widgets send notifications to the bell. Toggle sources on or off here.","notifications.settings.noWidgets":"No notification widgets on your dashboard yet. Add a widget with notifications to configure it here.","notifications.settings.enable":"Enable notifications","widgets.dashboard":"Dashboard","widgets.addWidget":"Add widget","widgets.moveLeft":"Move left","widgets.moveRight":"Move right","widgets.remove":"Remove","widgets.cycleSize":"Size: {size}","widgets.unpin":"Unpin","widgets.open":"Open","widgets.emptyDashboard":"Your dashboard is empty. Add some widgets!","widget.error.label":"◎ Offline","widget.error.body":"Can't reach the source. Retrying soon.","widget.loading":"Loading…","widgets.empty.title":"Compose your dashboard.","widgets.empty.body":"Pick the widgets that matter to you — news, weather, your streak, AI sessions. You can reorder and customize later.","widgets.empty.cta":"Add your first widget","widgets.picker.title":"Add a widget.","widgets.picker.eyebrow":"◇ Picker","widgets.picker.subtitle":"Pick from your widget catalog. Live data, glanceable.","widgets.picker.searchPlaceholder":"Search widgets — e.g. weather, news, clock…","widgets.picker.empty":"No widgets match. Try another keyword.","widgets.picker.close":"Close","widgets.picker.added":"Added","widgets.picker.suite.all":"All","widgets.picker.suite.tools":"Tools","quickLaunch.count.subjects":"subjects","quickLaunch.count.games":"games","quickLaunch.count.sections":"sections","quickLaunch.count.recent":"recent","quickLaunch.count.open":"open","quickLaunch.math":"Math","quickLaunch.portugues":"Portuguese","quickLaunch.estudodomeio":"Nature","quickLaunch.ingles":"English","quickLaunch.tictactoe":"Tic Tac Toe","quickLaunch.memory":"Memory","quickLaunch.pixelboard":"Pixels","quickLaunch.familyquiz":"Quiz","quickLaunch.spotit":"Spot It","quickLaunch.stopgame":"Stop","quickLaunch.lebem":"Read & Play","quickLaunch.soundhunter":"Sound Hunter","quickLaunch.adventure":"Adventure","quickLaunch.tapit":"Tap It","quickLaunch.jumpparty":"Jump","quickLaunch.drawguess":"Draw & Guess","quickLaunch.animalarena":"Sumo Zoo","quickLaunch.crazykitchen":"Crazy Kitchen","quickLaunch.miniparty":"Mini Party","quickLaunch.hideseek":"Hide & Seek","quickLaunch.buttonmayhem":"Button Mayhem","quickLaunch.bombbrawl":"BombBrawl","quickLaunch.movies.discover":"Discover","quickLaunch.movies.movies":"Movies","quickLaunch.movies.tv":"TV Shows","quickLaunch.movies.documentaries":"Docs","quickLaunch.movies.favorites":"Favorites","quickLaunch.movies.seen":"Seen","dailyFeed.title":"Daily feed","dailyFeed.sub.tech":"Tech \xb7 trending","dailyFeed.sub.movie":"Trending this week","dailyFeed.sub.history":"On this day","dailyFeed.sub.news.pt":"News \xb7 RTP","dailyFeed.sub.news.en":"News \xb7 CNN","dailyFeed.sub.school":"Learn today","dailyFeed.sub.game":"Game of the day","dailyFeed.school.math":"Try a quick math puzzle","dailyFeed.school.story":"Read a Portuguese story","dailyFeed.school.science":"Learn a science fact","dailyFeed.school.reading":"Practice reading aloud","dailyFeed.school.word":"Explore a word quiz","dailyFeed.game.memory":"Memory Game","dailyFeed.game.spotit":"Spot the Pair","dailyFeed.game.tictactoe":"Tic Tac Toe","dailyFeed.game.soundhunter":"Sound Hunter","dailyFeed.game.familyquiz":"Family Quiz","dailyFeed.game.adventure":"Text Adventure","dailyFeed.game.stop":"Stop!","seismic.title.pt":"PT Seismic","seismic.title.world":"World Seismic","seismic.empty":"No recent seismic activity","seismic.openInEarth":"Open in Earth","weather.city.lisbon":"Lisbon","weather.openInEarth":"→ Open in Earth","weather.humidity":"Humidity","weather.wind":"Wind","weather.feelsLike":"Feels like {t}\xb0","weather.uv":"UV","weather.sunrise":"Sunrise","weather.sunset":"Sunset","weather.hourly":"Next hours","weather.forecast":"3-day forecast","weather.now":"Now","weather.day.mon":"Mon","weather.day.tue":"Tue","weather.day.wed":"Wed","weather.day.thu":"Thu","weather.day.fri":"Fri","weather.day.sat":"Sat","weather.day.sun":"Sun","onThisDay.title":"On this day","techscopeLive.title":"Live feeds","movies.trending.title":"Trending this week","movies.apiKeyMissing":"API key missing","apps.markdown.label":"Blog","apps.markdown.description":"Articles and notes across a variety of topics","apps.school.label":"School","apps.school.description":"Primary school — Maths, Portuguese & Science (Years 1–4)","apps.earth.label":"Earth","apps.earth.description":"Interactive 3D globe visualization","apps.cosmos.label":"Cosmos","apps.cosmos.description":"Space exploration and astronomy data","apps.techscope.label":"TechScope","apps.techscope.description":"GitHub \xb7 HN \xb7 npm \xb7 Dev.to \xb7 Stack Overflow — 9 live feeds in one journal","apps.citypulse.label":"CityPulse","apps.citypulse.description":"City metrics and live urban data","apps.stockpulse.label":"StockPulse","apps.stockpulse.description":"Real-time stock market pulse","apps.csvexplorer.label":"CSV Explorer","apps.csvexplorer.description":"CSV viewer with sorting, filtering, and stats","apps.chartbuilder.label":"Chart Builder","apps.chartbuilder.description":"Build bar, line, pie, and scatter charts from CSV","apps.pad.label":"Pad","apps.pad.description":"Markdown & Mermaid editor with live preview","apps.regexlab.label":"Regex Lab","apps.regexlab.description":"Live regex tester with group highlighting","apps.jsonexplorer.label":"JSON Explorer","apps.jsonexplorer.description":"JSON tree explorer with JSONPath filtering","apps.codediff.label":"Code Diff","apps.codediff.description":"Visual side-by-side code diff","apps.playground.label":"Playground","apps.playground.description":"HTML \xb7 CSS \xb7 JS live playground with preview","apps.jwtinspector.label":"JWT Inspector","apps.jwtinspector.description":"Decode and inspect JWT tokens with expiry info","apps.colorlab.label":"Color Lab","apps.colorlab.description":"Color picker with palettes, shades, and contrast","apps.cronbuilder.label":"Cron Builder","apps.cronbuilder.description":"Visual cron expression builder with next runs","apps.weather.label":"Weather","apps.weather.description":"Live global weather map","apps.apiexplorer.label":"API Explorer","apps.apiexplorer.description":"HTTP client — fire requests, inspect responses, save collections","apps.movies.label":"Movies & Series","apps.movies.description":"Browse movies, TV shows & documentaries — search where to stream them","apps.promptlab.label":"Prompt Lab","apps.promptlab.description":"Test and compare prompts across Groq, Gemini, and Hugging Face","apps.imagegen.label":"Image Gen","apps.imagegen.description":"Generate images from text prompts using Pollinations AI","apps.games.label":"Games","apps.games.description":"Tic Tac Toe, Memory, Pixel Board, quizzes and more","apps.daily.label":"Daily Manager","apps.daily.description":"Track daily habits, earn points, keep the streak alive","apps.ask.label":"Ask","apps.ask.description":"Chat with Atlantis — markdown answers, conversations saved.","apps.finance.label":"Finance","apps.finance.description":"Track family expenses, income, and weekly budgets.","apps.devtools.label":"Dev Tools","apps.devtools.description":"Developer tools","pinnedCard.recent.label":"Last opened","ask.widget.title":"Ask sessions","ask.widget.description":"Your recent Ask conversations","ask.widget.untitled":"Untitled","ask.widget.empty":"No conversations yet. Start one from the command palette or the Ask app.","ask.widget.emptyCta":"Ask something","streak.title":"Daily Streak","streak.dayStreak":"day streak","streak.noStreak":"Start your streak today","streak.todayDone":"{n} / {total} today","streak.points":"{n} pts","streak.open":"Open Daily Manager","habits.title":"Habits","habits.last7":"Last 7 days","habits.empty":"Add missions in the Daily Manager to track them here.","habits.weekDone":"{n} done this week","habits.open":"Open Daily Manager","habits.openShort":"OPEN","agenda.title":"Agenda Today","agenda.count":"{n} events","agenda.countOne":"1 event","agenda.empty":"Nothing scheduled today","agenda.emptyCta":"Add your first event","agenda.addEvent":"Add event","agenda.titlePlaceholder":"What\\u2019s on?","agenda.timeStart":"Start","agenda.timeEnd":"End","agenda.tag.personal":"personal","agenda.tag.team":"team","agenda.tag.work":"work","agenda.save":"Save","agenda.cancel":"Cancel","agenda.delete":"Delete event","agenda.toggleDone":"Toggle done","agenda.now":"now","reading.title":"❂ Reading","reading.yearProgress":"{read}/{goal} this year","reading.yearGoal":"Year goal","reading.books":"books","reading.goal":"Annual goal","reading.page":"p.","reading.empty":"What are you reading right now?","reading.addBook":"Start a book","reading.updateBook":"Update reading","reading.finish":"Mark as finished","reading.save":"Save","reading.cancel":"Cancel","reading.placeholder.title":"Title","reading.placeholder.author":"Author","reading.placeholder.page":"Page","reading.placeholder.pages":"Total","reading.placeholder.goal":"Goal","reading.placeholder.cover":"COVER","reading.stat.week":"Week","reading.stat.pace":"Pace","reading.stat.finished":"Finished","reading.unit.pages":"pages","reading.unit.perDay":"pg/day","reading.unit.total":"total","bolsa.title":"▲ Markets","bolsa.updated":"updated {age}","bolsa.empty":"Loading tickers…","bolsa.error":"Could not load markets.","bolsa.errorLabel":"OFFLINE","bolsa.stocks.title":"STOCKS","bolsa.stocks.noKey":"Add your Finnhub key in Settings to see stock quotes.","bolsa.stocks.settingsLink":"Go to Settings","bolsa.crypto.title":"CRYPTO","settings.finnhub.label":"Finnhub","settings.finnhub.placeholder":"pk_...","settings.finnhub.help":"Stock quotes for the Markets widget","astro.title":"☽ Astronomy","astro.location":"Lisbon","astro.illuminated":"{pct}% illuminated","astro.dayLength":"{h}h {m}m","astro.phase.new":"New Moon","astro.phase.waxingCrescent":"Waxing Crescent","astro.phase.firstQuarter":"First Quarter","astro.phase.waxingGibbous":"Waxing Gibbous","astro.phase.full":"Full Moon","astro.phase.waningGibbous":"Waning Gibbous","astro.phase.lastQuarter":"Last Quarter","astro.phase.waningCrescent":"Waning Crescent","astro.iss.title":"Next ISS passes","astro.iss.loading":"Loading passes…","astro.iss.empty":"No upcoming visible passes.","labLauncher.title":"✦ AI Lab","labLauncher.subtitle":"Your AI suite","labLauncher.count":"tools","labLauncher.open":"// OPEN →","learnLauncher.title":"◎ Learning","learnLauncher.subtitle":"School & games","learnLauncher.count":"apps","learnLauncher.open":"// EXPLORE →","music.title":"♪ Music","music.subtitle":"Recently played","music.empty":"Paste a song to save.","music.placeholder":"Song — Artist","music.add":"Add","music.remove":"Remove","music.search.label":"Search Apple Music","nightSky.title":"✦ Night Sky","nightSky.iss":"ISS visible","nightSky.dayTitle":"Waiting for dusk","nightSky.nightLegend":"Zenith view \xb7 {count} constellations","health.title":"Dashboard Health","health.measuring":"Measuring…","health.offline":"offline","health.ch.crypto":"CoinGecko","health.ch.weather":"Open-Meteo","health.ch.wiki":"Wikipedia","health.ch.hn":"HN Algolia","health.ch.dom":"DOM Nodes","health.ch.fps":"Frame Rate","health.consumers":"used by {list}","health.status.ok":"All healthy","health.status.slow":"{n} slow","health.status.offline":"{n} offline"},C={"profile.title":"O Teu Perfil","profile.close":"Fechar","profile.cancel":"Cancelar","profile.save":"Guardar","profile.interests":"Interesses","profile.interestsHint":"Personaliza o feed di\xe1rio e as sugest\xf5es das apps.","profile.ageMode":"Modo de idade","profile.ageModeHint":"Ajusta a dificuldade na School e filtra conte\xfado sens\xedvel.","topbar.profile.tooltip":"O teu perfil","topbar.profile.aria":"Abrir perfil","sidebar.home":"In\xedcio","sidebar.retreat":"Retiro","sidebar.show":"Mostrar barra lateral","sidebar.hide":"Esconder barra lateral","sidebar.showSuites":"+ Mostrar su\xedtes","pinned.moveLeft":"Mover para a esquerda","pinned.moveRight":"Mover para a direita","retreat.prompt":"procurar ou abrir qualquer coisa","retreat.weather.city":"Lisboa","palette.search":"Procurar","palette.placeholder":"Procurar apps, ferramentas ou ir para qualquer s\xedtio…","palette.recent":"Recentes","palette.allApps":"Todas as apps","palette.noMatch":"Nenhuma app corresponde a","palette.emptyHint":"Tenta outra palavra ou verifica a ortografia.","palette.recentTag":"recente","palette.clear":"Limpar","palette.hint.navigate":"navegar","palette.hint.open":"abrir","palette.hint.close":"fechar","palette.hint.ask":"perguntar","palette.scope.all":"Tudo","palette.scope.jump":"Ir para","palette.scope.actions":"A\xe7\xf5es","palette.scope.recent":"Recentes","palette.scope.ask":"Perguntar","palette.scope.ariaLabel":"\xc2mbito da pesquisa","palette.section.jump":"Ir para","palette.section.suites":"Su\xedtes","palette.section.apps":"Apps","palette.section.games":"Jogos","palette.section.actions":"A\xe7\xf5es","palette.section.ask":"Perguntar ao Atlantis","palette.section.content":"Conte\xfado","palette.meta.game":"Jogo \xb7 Sala de Jogos","palette.meta.doc":"Documento guardado","palette.meta.agenda":"Evento da agenda","palette.meta.reading":"Lista de leituras","palette.action.addWidget":"Adicionar widget ao Painel","palette.action.addWidget.meta":"Abre o picker","palette.action.theme":"Mudar tema","palette.action.theme.meta":"Escuro ↔ Claro","palette.action.preferences":"Abrir Prefer\xeancias","palette.action.preferences.meta":"Interesses, modo de idade","palette.action.settings":"Abrir Defini\xe7\xf5es","palette.action.settings.meta":"Chaves API, avan\xe7ado","palette.action.language":"Alternar idioma","palette.action.language.meta":"PT → EN","palette.action.clearNotifications":"Limpar notifica\xe7\xf5es","palette.action.clearNotifications.meta":"Marcar {n} como lidas","palette.action.signout":"Terminar sess\xe3o","palette.ask.placeholder":"Pergunta ao Atlantis ou salta para qualquer lado…","palette.ask.hint":"Escreve uma pergunta e prime Enter.","palette.ask.thinking":"A pensar…","palette.ask.loading":"A pensar…","palette.ask.answer":"O Atlantis diz","palette.ask.error":"N\xe3o foi poss\xedvel contactar o modelo","palette.ask.suggestMeta":"IA \xb7 responde inline","palette.ask.you":"Voc\xea","palette.ask.atlantis":"Atlantis","palette.ask.empty":"Faz uma pergunta para come\xe7ar.","palette.ask.suggestionsTitle":"Experimenta perguntar…","palette.ask.followUp":"Faz uma pergunta de seguimento…","palette.ask.suggest.summarizeDay":"Resumir o meu dia em 3 linhas","palette.ask.suggest.whatsTrending":"O que est\xe1 em alta em Lisboa hoje?","userMenu.preferences":"Prefer\xeancias","userMenu.settings":"Defini\xe7\xf5es","userMenu.signOut":"Terminar sess\xe3o","userMenu.language":"Idioma","userMenu.theme":"Tema","userMenu.themeLight":"Claro","userMenu.themeDark":"Escuro","userMenu.themeSystem":"Sistema","userMenu.clearData":"Limpar dados locais","userMenu.clearDataConfirm":"Limpar todas as defini\xe7\xf5es, caches e prefer\xeancias locais? N\xe3o \xe9 poss\xedvel anular — a p\xe1gina ser\xe1 recarregada.","common.cancel":"Cancelar","cmdk.hint.label":"perguntar ou ir para","cmdk.hint.aria":"Prime Cmd+K em qualquer lado para abrir a paleta de comandos","cmdk.hint.dismiss":"Esconder esta dica","onboarding.eyebrow":"✦ COME\xc7AR AQUI","onboarding.title":"Bem-vindo a Atlantis","onboarding.subtitle":"Tr\xeas atalhos para come\xe7ar. Podes dispensar este cart\xe3o e voltar a tudo pela paleta de comandos.","onboarding.aria":"Come\xe7ar","onboarding.dismiss":"Dispensar introdu\xe7\xe3o","onboarding.tip.palette.title":"Ir a qualquer lado","onboarding.tip.palette.body":"Abre a paleta de comandos para lan\xe7ar uma app, desencadear uma a\xe7\xe3o ou perguntar ao assistente.","onboarding.tip.preferences.title":"Escolhe os teus interesses","onboarding.tip.preferences.body":"Define interesses e modo de idade nas Prefer\xeancias — a grelha, os widgets e as sugest\xf5es adaptam-se.","onboarding.tip.daily.title":"Cria uma rotina di\xe1ria","onboarding.tip.daily.body":"O Gestor Di\xe1rio acompanha miss\xf5es, pontos e sequ\xeancias que escolhes todos os dias.","suites.label":"Su\xedtes","suites.aria":"Abrir menu de Su\xedtes","suites.appsCount":"apps na su\xedte","suites.lab.name":"Lab de IA","suites.lab.sub":"Prompt \xb7 Imagem \xb7 C\xf3digo","suites.vida.name":"Painel de Vida","suites.vida.sub":"Sa\xfade \xb7 H\xe1bitos \xb7 Not\xedcias","suites.learn.name":"Aprendizagem","suites.learn.sub":"Estudos \xb7 Descoberta","suites.games.name":"Sala de Jogos","suites.games.sub":"Quizzes \xb7 Puzzles","suites.ent.name":"Entretenimento","suites.ent.sub":"Filmes \xb7 M\xfasica \xb7 Estrelas","error.remote.title":"N\xe3o consegui carregar {name}","error.remote.generic":"Algo correu mal ao abrir esta app.","error.remote.devHint":"O servidor de desenvolvimento desta app n\xe3o est\xe1 a correr. Arranca-o com:","error.remote.prodHint":"Esta app est\xe1 temporariamente indispon\xedvel. Tenta novamente dentro de momentos.","error.remote.retry":"Tentar de novo","error.remote.goHome":"Voltar ao in\xedcio","notifications.bell":"Notifica\xe7\xf5es","notifications.title":"Notifica\xe7\xf5es","notifications.markAllRead":"Marcar tudo como lido","notifications.dismiss":"Dispensar","notifications.empty":"Est\xe1s em dia.","notifications.seeAll":"Ver tudo","notifications.page.title":"Notifica\xe7\xf5es","notifications.page.subtitle":"Tudo o que o painel te notificou — mais recente primeiro.","notifications.source.newsPt":"Not\xedcias PT","notifications.source.newsWorld":"Not\xedcias Mundo","notifications.source.seismicPt":"Sismos PT","notifications.source.seismicWorld":"Sismos","notifications.source.daily":"Miss\xe3o Di\xe1ria","notifications.source.wikiTopRead":"Wikip\xe9dia Top","notifications.source.trending":"Em Alta","notifications.source.hnFrontPage":"HN Destaque","notifications.source.githubTrending":"GitHub Tend\xeancia","notifications.source.devto":"Dev.to Semanal","notifications.source.syncError":"Erro de Sincroniza\xe7\xe3o","notifications.source.weatherPt":"Aviso meteorol\xf3gico","notifications.source.dailyAchievement":"Conquista de sequ\xeancia","notifications.source.financeBudget":"Alerta de Or\xe7amento","notifications.daily.body":"S\xe3o {time} — hora de {name}.","notifications.daily.group.one":"1 miss\xe3o di\xe1ria por fazer","notifications.daily.group.many":"{count} miss\xf5es di\xe1rias por fazer","notifications.settings.title":"Fontes de Notifica\xe7\xf5es","notifications.settings.desc":"Escolhe quais widgets enviam notifica\xe7\xf5es para o sino. Ativa ou desativa as fontes aqui.","notifications.settings.noWidgets":"Ainda n\xe3o tens widgets com notifica\xe7\xf5es no painel. Adiciona um widget com notifica\xe7\xf5es para o configurar aqui.","notifications.settings.enable":"Ativar notifica\xe7\xf5es","widgets.dashboard":"Painel","widgets.addWidget":"Adicionar widget","widgets.moveLeft":"Mover para a esquerda","widgets.moveRight":"Mover para a direita","widgets.remove":"Remover","widgets.cycleSize":"Tamanho: {size}","widgets.unpin":"Desafixar","widgets.open":"Abrir","widgets.emptyDashboard":"O teu dashboard est\xe1 vazio. Adiciona widgets!","widget.error.label":"◎ Offline","widget.error.body":"Sem liga\xe7\xe3o \xe0 fonte. A tentar de novo.","widget.loading":"A carregar…","widgets.empty.title":"Comp\xf5e o teu painel.","widgets.empty.body":"Escolhe os widgets que te importam — not\xedcias, clima, a tua sequ\xeancia, conversas de IA. Podes reordenar e personalizar depois.","widgets.empty.cta":"Adicionar o primeiro widget","widgets.picker.title":"Adicionar widget.","widgets.picker.eyebrow":"◇ Cat\xe1logo","widgets.picker.subtitle":"Escolhe do cat\xe1logo de widgets. Dados ao vivo, num relance.","widgets.picker.searchPlaceholder":"Procurar widgets — ex: meteorologia, not\xedcias, rel\xf3gio…","widgets.picker.empty":"Nenhum widget corresponde. Tenta outra palavra.","widgets.picker.close":"Fechar","widgets.picker.added":"Adicionado","widgets.picker.suite.all":"Todos","widgets.picker.suite.tools":"Ferramentas","quickLaunch.count.subjects":"mat\xe9rias","quickLaunch.count.games":"jogos","quickLaunch.count.sections":"sec\xe7\xf5es","quickLaunch.count.recent":"recentes","quickLaunch.count.open":"abrir","quickLaunch.math":"Matem\xe1tica","quickLaunch.portugues":"Portugu\xeas","quickLaunch.estudodomeio":"Est. do Meio","quickLaunch.ingles":"Ingl\xeas","quickLaunch.tictactoe":"Galo","quickLaunch.memory":"Mem\xf3ria","quickLaunch.pixelboard":"Pixels","quickLaunch.familyquiz":"Quiz","quickLaunch.spotit":"Par","quickLaunch.stopgame":"Stop","quickLaunch.lebem":"Ler a Brincar","quickLaunch.soundhunter":"Ca\xe7ador de Sons","quickLaunch.adventure":"Aventura","quickLaunch.tapit":"Toca no Certo","quickLaunch.jumpparty":"Salta","quickLaunch.drawguess":"Desenha e Adivinha","quickLaunch.animalarena":"Sumo Zoo","quickLaunch.crazykitchen":"Cozinha Louca","quickLaunch.miniparty":"Mini Festa","quickLaunch.hideseek":"Esconde-Esconde","quickLaunch.buttonmayhem":"Bot\xe3o Maluco","quickLaunch.bombbrawl":"BombBrawl","quickLaunch.movies.discover":"Descobrir","quickLaunch.movies.movies":"Filmes","quickLaunch.movies.tv":"S\xe9ries","quickLaunch.movies.documentaries":"Docs","quickLaunch.movies.favorites":"Favoritos","quickLaunch.movies.seen":"Vistos","dailyFeed.title":"Feed di\xe1rio","dailyFeed.sub.tech":"Tech \xb7 em alta","dailyFeed.sub.movie":"Em alta esta semana","dailyFeed.sub.history":"Neste dia","dailyFeed.sub.news.pt":"Not\xedcias \xb7 RTP","dailyFeed.sub.news.en":"Not\xedcias \xb7 CNN","dailyFeed.sub.school":"Aprender hoje","dailyFeed.sub.game":"Jogo do dia","dailyFeed.school.math":"Experimenta um desafio de matem\xe1tica","dailyFeed.school.story":"L\xea uma hist\xf3ria em portugu\xeas","dailyFeed.school.science":"Aprende um facto de ci\xeancia","dailyFeed.school.reading":"Pratica leitura em voz alta","dailyFeed.school.word":"Explora um quiz de palavras","dailyFeed.game.memory":"Jogo da Mem\xf3ria","dailyFeed.game.spotit":"Encontra o Par!","dailyFeed.game.tictactoe":"Jogo do Galo","dailyFeed.game.soundhunter":"Ca\xe7ador de Sons","dailyFeed.game.familyquiz":"Quiz da Fam\xedlia","dailyFeed.game.adventure":"Aventura de Texto","dailyFeed.game.stop":"Stop!","seismic.title.pt":"Sismicidade PT","seismic.title.world":"Sismicidade Mundo","seismic.empty":"Sem atividade sismica recente","seismic.openInEarth":"Abrir no Earth","weather.city.lisbon":"Lisboa","weather.openInEarth":"→ Abrir no Earth","weather.humidity":"Humidade","weather.wind":"Vento","weather.feelsLike":"Sensa\xe7\xe3o de {t}\xb0","weather.uv":"UV","weather.sunrise":"Nascer","weather.sunset":"P\xf4r-do-sol","weather.hourly":"Pr\xf3ximas horas","weather.forecast":"Previs\xe3o 3 dias","weather.now":"Agora","weather.day.mon":"Seg","weather.day.tue":"Ter","weather.day.wed":"Qua","weather.day.thu":"Qui","weather.day.fri":"Sex","weather.day.sat":"S\xe1b","weather.day.sun":"Dom","onThisDay.title":"Neste dia","techscopeLive.title":"Feeds ao vivo","movies.trending.title":"Em alta esta semana","movies.apiKeyMissing":"API key em falta","apps.markdown.label":"Blog","apps.markdown.description":"Artigos e notas sobre v\xe1rios temas","apps.school.label":"Escola","apps.school.description":"Escola prim\xe1ria — Matem\xe1tica, Portugu\xeas e Estudo do Meio (1.\xba–4.\xba ano)","apps.earth.label":"Earth","apps.earth.description":"Globo 3D interativo","apps.cosmos.label":"Cosmos","apps.cosmos.description":"Explora\xe7\xe3o espacial e dados de astronomia","apps.techscope.label":"TechScope","apps.techscope.description":"GitHub \xb7 HN \xb7 npm \xb7 Dev.to \xb7 Stack Overflow — 9 feeds ao vivo num jornal","apps.citypulse.label":"CityPulse","apps.citypulse.description":"M\xe9tricas urbanas e dados ao vivo","apps.stockpulse.label":"StockPulse","apps.stockpulse.description":"Mercados financeiros em tempo real","apps.csvexplorer.label":"CSV Explorer","apps.csvexplorer.description":"Visualizador CSV com ordena\xe7\xe3o, filtros e estat\xedsticas","apps.chartbuilder.label":"Chart Builder","apps.chartbuilder.description":"Cria gr\xe1ficos de barras, linhas, pizza e dispers\xe3o","apps.pad.label":"Pad","apps.pad.description":"Editor Markdown e Mermaid com preview ao vivo","apps.regexlab.label":"Regex Lab","apps.regexlab.description":"Testador de regex ao vivo com destaque de grupos","apps.jsonexplorer.label":"JSON Explorer","apps.jsonexplorer.description":"Explorador de \xe1rvore JSON com filtros JSONPath","apps.codediff.label":"Code Diff","apps.codediff.description":"Compara\xe7\xe3o visual de c\xf3digo lado a lado","apps.playground.label":"Playground","apps.playground.description":"Playground HTML \xb7 CSS \xb7 JS ao vivo com preview","apps.jwtinspector.label":"JWT Inspector","apps.jwtinspector.description":"Descodifica e inspeciona tokens JWT","apps.colorlab.label":"Color Lab","apps.colorlab.description":"Seletor de cores com paletas, tons e contraste","apps.cronbuilder.label":"Cron Builder","apps.cronbuilder.description":"Construtor visual de express\xf5es cron","apps.weather.label":"Meteorologia","apps.weather.description":"Mapa meteorol\xf3gico global ao vivo","apps.apiexplorer.label":"API Explorer","apps.apiexplorer.description":"Cliente HTTP — enviar pedidos, inspecionar respostas, guardar cole\xe7\xf5es","apps.movies.label":"Filmes & S\xe9ries","apps.movies.description":"Filmes, s\xe9ries e document\xe1rios — descobre onde ver em streaming","apps.promptlab.label":"Prompt Lab","apps.promptlab.description":"Testa e compara prompts no Groq, Gemini e Hugging Face","apps.imagegen.label":"Image Gen","apps.imagegen.description":"Gera imagens a partir de texto com Pollinations AI","apps.games.label":"Jogos","apps.games.description":"Galo, Mem\xf3ria, Pixels, quizzes e muito mais","apps.daily.label":"Gestor Di\xe1rio","apps.daily.description":"Segue h\xe1bitos di\xe1rios, ganha pontos, mant\xe9m a s\xe9rie","apps.ask.label":"Perguntar","apps.ask.description":"Conversa com o Atlantis — respostas em markdown, guardadas.","apps.finance.label":"Finan\xe7as","apps.finance.description":"Regista despesas, receitas e or\xe7amentos semanais da fam\xedlia.","apps.devtools.label":"Dev Tools","apps.devtools.description":"Ferramentas de desenvolvimento","pinnedCard.recent.label":"\xdaltimo aberto","ask.widget.title":"Conversas com o Atlantis","ask.widget.description":"As tuas conversas recentes","ask.widget.untitled":"Sem t\xedtulo","ask.widget.empty":"Ainda n\xe3o tens conversas. Come\xe7a uma na paleta de comandos ou na app Ask.","ask.widget.emptyCta":"Fazer uma pergunta","streak.title":"S\xe9rie Di\xe1ria","streak.dayStreak":"dias seguidos","streak.noStreak":"Come\xe7a a tua s\xe9rie hoje","streak.todayDone":"{n} / {total} hoje","streak.points":"{n} pts","streak.open":"Abrir Gestor Di\xe1rio","habits.title":"H\xe1bitos","habits.last7":"\xdaltimos 7 dias","habits.empty":"Adiciona miss\xf5es no Gestor Di\xe1rio para as veres aqui.","habits.weekDone":"{n} feitas esta semana","habits.open":"Abrir Gestor Di\xe1rio","habits.openShort":"ABRIR","agenda.title":"Agenda Hoje","agenda.count":"{n} eventos","agenda.countOne":"1 evento","agenda.empty":"Nada agendado hoje","agenda.emptyCta":"Adiciona o primeiro evento","agenda.addEvent":"Adicionar evento","agenda.titlePlaceholder":"O que tens?","agenda.timeStart":"In\xedcio","agenda.timeEnd":"Fim","agenda.tag.personal":"pessoal","agenda.tag.team":"equipa","agenda.tag.work":"trabalho","agenda.save":"Guardar","agenda.cancel":"Cancelar","agenda.delete":"Apagar evento","agenda.toggleDone":"Alternar conclu\xeddo","agenda.now":"agora","reading.title":"❂ Leitura","reading.yearProgress":"{read}/{goal} este ano","reading.yearGoal":"Meta anual","reading.books":"livros","reading.goal":"Meta anual","reading.page":"p.","reading.empty":"O que est\xe1s a ler agora?","reading.addBook":"Come\xe7ar um livro","reading.updateBook":"Atualizar leitura","reading.finish":"Marcar como lido","reading.save":"Guardar","reading.cancel":"Cancelar","reading.placeholder.title":"T\xedtulo","reading.placeholder.author":"Autor","reading.placeholder.page":"P\xe1gina","reading.placeholder.pages":"Total","reading.placeholder.goal":"Meta","reading.placeholder.cover":"CAPA","reading.stat.week":"Semana","reading.stat.pace":"Ritmo","reading.stat.finished":"Conclu\xeddos","reading.unit.pages":"p\xe1ginas","reading.unit.perDay":"p\xe1g/dia","reading.unit.total":"total","bolsa.title":"▲ Bolsa","bolsa.updated":"atualizado {age}","bolsa.empty":"A carregar cota\xe7\xf5es…","bolsa.error":"N\xe3o foi poss\xedvel carregar cota\xe7\xf5es.","bolsa.errorLabel":"OFFLINE","bolsa.stocks.title":"A\xc7\xd5ES","bolsa.stocks.noKey":"Adiciona a tua chave Finnhub nas Defini\xe7\xf5es para ver cota\xe7\xf5es de a\xe7\xf5es.","bolsa.stocks.settingsLink":"Ir para Defini\xe7\xf5es","bolsa.crypto.title":"CRYPTO","settings.finnhub.label":"Finnhub","settings.finnhub.placeholder":"pk_...","settings.finnhub.help":"Cota\xe7\xf5es de a\xe7\xf5es para o widget Bolsa","astro.title":"☽ Astronomia","astro.location":"Lisboa","astro.illuminated":"{pct}% iluminada","astro.dayLength":"{h}h {m}m","astro.phase.new":"Lua Nova","astro.phase.waxingCrescent":"Crescente","astro.phase.firstQuarter":"Quarto Crescente","astro.phase.waxingGibbous":"Gibosa Crescente","astro.phase.full":"Lua Cheia","astro.phase.waningGibbous":"Gibosa Minguante","astro.phase.lastQuarter":"Quarto Minguante","astro.phase.waningCrescent":"Minguante","astro.iss.title":"Pr\xf3ximas passagens — ISS","astro.iss.loading":"A carregar passagens…","astro.iss.empty":"Sem passagens vis\xedveis \xe0 vista.","labLauncher.title":"✦ Lab de IA","labLauncher.subtitle":"A tua su\xedte de IA","labLauncher.count":"ferramentas","labLauncher.open":"// ABRIR →","learnLauncher.title":"◎ Aprendizagem","learnLauncher.subtitle":"Escola & jogos","learnLauncher.count":"apps","learnLauncher.open":"// EXPLORAR →","music.title":"♪ M\xfasica","music.subtitle":"Ouvido recentemente","music.empty":"Adiciona uma m\xfasica.","music.placeholder":"M\xfasica — Artista","music.add":"Adicionar","music.remove":"Remover","music.search.label":"Pesquisar no Apple Music","nightSky.title":"✦ C\xe9u Noturno","nightSky.iss":"ISS vis\xedvel","nightSky.dayTitle":"\xc0 espera do anoitecer","nightSky.nightLegend":"Vista do z\xe9nite \xb7 {count} constela\xe7\xf5es","health.title":"Sa\xfade do Painel","health.measuring":"A medir…","health.offline":"offline","health.ch.crypto":"CoinGecko","health.ch.weather":"Open-Meteo","health.ch.wiki":"Wikip\xe9dia","health.ch.hn":"HN Algolia","health.ch.dom":"N\xf3s DOM","health.ch.fps":"Frame Rate","health.consumers":"usado por {list}","health.status.ok":"Tudo bem","health.status.slow":"{n} lento","health.status.offline":"{n} offline"};var L=t(10312),F=t(95318),N=t(88350),E=t(8740),P=t(55523),I=t(73e3),R=t(87517),D=t(32013),B=t(43414),O=t(20593),H=t(57438),_=t(75763),K=t(53),U=t(19603),q=t(72026),G=t(77032),W=t(34836),Y=t(23971),V=t(9900),J=t(11042),Q=t(76461),Z=t(25471),X=t(82537),ee=t(55417),ea=t(54200),et=t(52306),eo=t(89780);let ei=[L.A,F.A,{id:"finance",load:()=>t.e("6957").then(t.bind(t,25708)).then(e=>({default:e.FinanceWidget})),labels:{en:"Finance",pt:"Finan\xe7as"},descriptions:{en:"Weekly budget status and recent expenses",pt:"Estado do or\xe7amento semanal e despesas recentes"},icon:"\uD83D\uDCB0",accentColor:"#7fb77e",defaultSize:"sm",availableSizes:["sm","md"],defaultCols:1,maxCols:2,minHeight:160,suite:"vida",defaultOnDashboard:!1,sources:[{id:"finance-data",kind:"bll-hook",labelKey:"financeWidget.source.data"}],persistedKeys:["finance:data"]},{id:"ask-sessions",load:()=>t.e("9532").then(t.bind(t,22247)).then(e=>({default:e.AskSessionsWidget})),labels:{en:"Ask Sessions",pt:"Conversas com o Atlantis"},descriptions:{en:"Your recent Ask conversations",pt:"As tuas conversas recentes com o Atlantis"},icon:"✦",accentColor:"#5e4cbb",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:200,suite:"lab",defaultOnDashboard:!0,sources:[{id:"ask-docs",kind:"bll-hook",labelKey:"sources.askDocs"}]},N.A,E.A,P.A,I.A,R.A,D.A,B.A,O.A,H.A,_.A,K.A,U.A,q.A,G.A,W.A,Y.A,V.A,J.A,Q.A,Z.A,X.A,ee.A,ea.A,et.A,eo.A];function en(e){return ei.find(a=>a.id===e)}var er=t(98975);t(38628);var es=t(59798);let el={...er.A,...function(){let e={};for(let a of new Set([...Object.keys(T),...Object.keys(C)])){let t=T[a],o=C[a];e[a]={en:t??a,pt:o??t??a}}return e}()};var ed=t(62727),ec=t.n(ed);let ep=[{id:"all",labelKey:"widgets.picker.suite.all"},{id:"lab",labelKey:"suites.lab.name",color:c.w4.suites.lab},{id:"vida",labelKey:"suites.vida.name",color:c.w4.suites.vida},{id:"learn",labelKey:"suites.learn.name",color:c.w4.suites.learn},{id:"games",labelKey:"suites.games.name",color:c.w4.suites.games},{id:"ent",labelKey:"suites.ent.name",color:c.w4.suites.ent},{id:"tools",labelKey:"widgets.picker.suite.tools",color:c.w4.colors.success}],em={lab:c.w4.suites.lab,vida:c.w4.suites.vida,learn:c.w4.suites.learn,games:c.w4.suites.games,ent:c.w4.suites.ent,tools:c.w4.colors.success},eg=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,eu=(0,d.keyframes)`
  from { opacity: 0; transform: scale(0.97) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,eh=l().div`
  position: fixed;
  inset: 0;
  z-index: ${c.w4.zIndex.modal};
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 8vh 16px;
  animation: ${eg} ${c.w4.transitions.fast};
`,ef=l().div`
  width: 760px;
  max-width: 100%;
  max-height: 84vh;
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.borderSubtle};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${c.w4.elevation.lg};
  animation: ${eu} ${c.w4.transitions.base};
  display: flex;
  flex-direction: column;
`,eb=l().div`
  padding: 20px 22px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
`,ex=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,ey=l().h2`
  margin: 0;
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: ${c.w4.colors.mainText};
`,ew=l().p`
  margin: 0;
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.5;
  max-width: 480px;
`,ev=l().button`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: transparent;
  border: 1px solid ${c.w4.colors.border};
  color: ${c.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${c.w4.transitions.fast};

  &:hover {
    color: ${c.w4.colors.mainText};
    border-color: ${c.w4.colors.borderStrong};
    background: ${c.w4.colors.surfaceHover};
  }
  &:focus-visible { ${c.w4.focusRing} }
`,ek=l().div`
  padding: 14px 22px 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,e$=l().div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,ez=l()("button",{shouldForwardProp:e=>"active"!==e&&"chipColor"!==e})`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 12px;
  border-radius: 999px;
  background: ${({active:e,chipColor:a})=>e?a?`${a}26`:c.w4.colors.accentMuted:"transparent"};
  border: 1px solid
    ${({active:e,chipColor:a})=>e?a??c.w4.colors.accent:c.w4.colors.borderSubtle};
  color: ${({active:e,chipColor:a})=>e?a??c.w4.colors.accent:c.w4.colors.mainTextMuted};
  font-family: ${c.w4.typography.fontFamily};
  font-size: 11px;
  cursor: pointer;
  transition: ${c.w4.transitions.fast};
  white-space: nowrap;

  &:hover {
    color: ${({chipColor:e})=>e??c.w4.colors.mainText};
    border-color: ${({chipColor:e})=>e??c.w4.colors.borderStrong};
  }
  &:focus-visible { ${c.w4.focusRing} }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }
`,eM=l().div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 22px 22px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
`,ej=l()("button",{shouldForwardProp:e=>"added"!==e})`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px;
  background: ${({added:e})=>e?c.w4.colors.surfaceHover:c.w4.colors.surface};
  border: 1px solid
    ${({added:e})=>e?c.w4.colors.accent:c.w4.colors.borderSubtle};
  border-radius: 12px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  color: inherit;
  transition: ${c.w4.transitions.fast};

  &:hover {
    background: ${c.w4.colors.surfaceHover};
    border-color: ${({added:e})=>e?c.w4.colors.danger:c.w4.colors.borderStrong};
    transform: translateY(-1px);
  }
  &:focus-visible { ${c.w4.focusRing} }
`,eS=l().div`
  display: flex;
  align-items: center;
  gap: 10px;
`,eA=l().span`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: ${c.w4.colors.codeBg};
  border: 1px solid ${c.w4.colors.borderSubtle};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
`,eT=l().div`
  flex: 1;
  min-width: 0;
  font-size: 13.5px;
  font-weight: 600;
  color: ${c.w4.colors.mainText};
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eC=l().span`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 3px;
  background: ${c.w4.colors.accentMuted};
  color: ${c.w4.colors.accent};
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,eL=l().div`
  font-size: 11.5px;
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,eF=l().div`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 9.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextFaint};
`,eN=l()("span",{shouldForwardProp:e=>"swatchColor"!==e})`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({swatchColor:e})=>e};
`,eE=l().div`
  grid-column: 1 / -1;
  padding: 40px 20px;
  text-align: center;
  color: ${c.w4.colors.mainTextMuted};
  font-size: 13px;
`;function eP({open:e,activeIds:a,locale:t,onAdd:n,onRemove:r,onClose:s}){let l=(0,i.useMemo)(()=>(0,g.Nx)(t,el),[t]),[d,c]=(0,i.useState)(""),[p,u]=(0,i.useState)("all"),h=(0,i.useRef)(null);(0,i.useEffect)(()=>{e&&(c(""),u("all"),requestAnimationFrame(()=>h.current?.focus()))},[e]),(0,i.useEffect)(()=>{if(!e)return;let a=e=>{"Escape"===e.key&&s()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[e,s]);let f=(0,i.useMemo)(()=>{let e=d.trim().toLowerCase();return ei.filter(a=>{if("all"!==p&&a.suite!==p)return!1;if(!e)return!0;let o="pt"===t?a.labels.pt:a.labels.en,i="pt"===t?a.descriptions.pt:a.descriptions.en;return o.toLowerCase().includes(e)||i.toLowerCase().includes(e)||a.id.toLowerCase().includes(e)||a.suite.toLowerCase().includes(e)})},[d,p,t]);return e?ec().createPortal((0,o.jsx)(eh,{onClick:s,children:(0,o.jsxs)(ef,{onClick:e=>e.stopPropagation(),role:"dialog","aria-label":l("widgets.picker.title"),children:[(0,o.jsxs)(eb,{children:[(0,o.jsxs)(ex,{children:[(0,o.jsx)(m.YZ,{children:l("widgets.picker.eyebrow")}),(0,o.jsx)(ev,{onClick:s,"aria-label":l("widgets.picker.close"),children:(0,o.jsx)(m.In,{name:"close",size:14,"aria-hidden":"true"})})]}),(0,o.jsx)(ey,{children:l("widgets.picker.title")}),(0,o.jsx)(ew,{children:l("widgets.picker.subtitle")})]}),(0,o.jsxs)(ek,{children:[(0,o.jsx)(m.pd,{ref:h,placeholder:l("widgets.picker.searchPlaceholder"),value:d,onChange:e=>c(e.target.value),before:(0,o.jsx)(m.In,{name:"search",size:14,"aria-hidden":"true"})}),(0,o.jsx)(e$,{role:"tablist",children:ep.map(e=>(0,o.jsxs)(ez,{active:p===e.id,chipColor:e.color,onClick:()=>u(e.id),role:"tab","aria-selected":p===e.id,children:[e.color&&(0,o.jsx)("span",{className:"dot"}),l(e.labelKey)]},e.id))})]}),(0,o.jsx)(eM,{children:0===f.length?(0,o.jsx)(eE,{children:l("widgets.picker.empty")}):f.map(e=>{let i=a.has(e.id),s="pt"===t?e.labels.pt:e.labels.en,d="pt"===t?e.descriptions.pt:e.descriptions.en,c=em[e.suite],p=ep.find(a=>a.id===e.suite);return(0,o.jsxs)(ej,{added:i,onClick:()=>{i?r(e.id):n(e.id)},children:[(0,o.jsxs)(eS,{children:[(0,o.jsx)(eA,{children:e.icon}),(0,o.jsx)(eT,{children:s}),i&&(0,o.jsxs)(eC,{children:[(0,o.jsx)(m.In,{name:"check",size:10,"aria-hidden":"true"}),l("widgets.picker.added")]})]}),(0,o.jsx)(eL,{children:d}),(0,o.jsxs)(eF,{children:[(0,o.jsx)(eN,{swatchColor:c}),p?l(p.labelKey):e.suite]})]},e.id)})})]})}),document.body):null}let eI="shell:dashboard-widgets",eR="shell:pending-open-widget-picker",eD=[{id:"w-ask-sessions",widgetId:"ask-sessions"},{id:"w-daily-feed",widgetId:"daily-feed"},{id:"w-techscope",widgetId:"techscope"},{id:"w-weather",widgetId:"weather"},{id:"w-clock",widgetId:"clock"}],eB=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,eO=l().div`
  margin-bottom: ${c.w4.spacing.xl};
  animation: ${eB} 0.35s ease both;
`,eH=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.md};
  padding-top: ${c.w4.spacing.md};
  padding-bottom: ${c.w4.spacing.md};
  margin-bottom: ${c.w4.spacing.md};
  border-top: 1px solid ${c.w4.colors.borderSubtle};
`,e_=l().h2`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextMuted};
  margin: 0;
`,eK=l().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 2px;
  background: none;
  border: none;
  color: ${({active:e})=>e?c.w4.colors.accent:c.w4.colors.mainTextMuted};
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: color ${c.w4.transitions.fast};

  &:hover { color: ${c.w4.colors.accent}; }
`,eU=l().div`
  display: grid;
  /* auto-fill + minmax enforces a MINIMUM column width (280px).
   * Once the viewport cant fit another 280px column the grid wraps
   * widgets to a new row instead of squishing them.
   * grid-auto-rows: auto lets each row size to its tallest widget in
   * that row only, avoiding the dead vertical space 1fr caused. */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: auto;
  gap: ${c.w4.spacing.lg};

  @media (max-width: ${c.w4.breakpoints.lg}) {
    gap: ${c.w4.spacing.md};
  }

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,eq=l().div`
  --accent: ${({accent:e})=>e??c.w4.colors.accent};
  grid-column: ${({fullWidth:e,colSpan:a})=>e?"1 / -1":`span ${a}`};
  min-width: 0;
  max-width: 100%;
  min-height: ${({minH:e})=>e??200}px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${c.w4.spacing.lg};
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  transition:
    border-color ${c.w4.transitions.base},
    box-shadow ${c.w4.transitions.base},
    transform ${c.w4.transitions.base};

  /* Left accent bar — matches the look WidgetShell provides so bare
   * widgets don't lose their suite accent.  */
  &::before {
    content: '';
    position: absolute;
    top: 14px; bottom: 14px; left: 0;
    width: 2px;
    background: var(--accent);
    border-radius: 0 2px 2px 0;
    opacity: 0.7;
  }

  &:hover {
    border-color: ${c.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px ${c.w4.colors.shadow};
  }

  /* WidgetShell owns its own chrome — zero ours so there's no double
   * frame and no double accent bar. */
  &:has(> [data-widget-shell]) {
    padding: 0;
    background: transparent;
    border-color: transparent;
  }
  &:has(> [data-widget-shell])::before { display: none; }
  &:has(> [data-widget-shell]):hover {
    border-color: transparent;
    box-shadow: none;
    transform: none;
  }

  &:hover .widget-controls { opacity: 1; }

  /* Controls float above the panel (top: -20px) and are whisper-quiet
   * at rest on touch — just enough to say "there's something here." */
  @media (hover: none) {
    .widget-controls {
      opacity: 0.35;
      transform: scale(0.85);
      transform-origin: top right;
    }
  }

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-column: span 1;
  }
`,eG=l().div`
  position: absolute;
  top: -20px;
  right: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0;
  transition: opacity ${c.w4.transitions.fast};
  z-index: 2;
`,eW=l().button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: color ${c.w4.transitions.fast}, border-color ${c.w4.transitions.fast}, background ${c.w4.transitions.fast};

  &:hover {
    color: ${c.w4.colors.mainText};
    border-color: ${c.w4.colors.mainTextMuted};
    background: ${c.w4.colors.surfaceRaised};
  }
`,eY=l()(eW)`
  &:hover {
    color: #f85149;
    border-color: #f8514960;
  }
`,eV=l().button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  cursor: pointer;
  padding: 0;
  transition: color ${c.w4.transitions.fast}, border-color ${c.w4.transitions.fast};

  &:hover {
    color: ${c.w4.colors.accent};
    border-color: ${c.w4.colors.accent};
  }
`,eJ=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eQ=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextFaint};
`,eZ=l().div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,eX=l().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({tintColor:e})=>`${e}14`};
  border: 1px solid ${({tintColor:e})=>`${e}33`};
  color: ${c.w4.colors.mainText};
  font-family: ${c.w4.typography.fontFamily};
  font-size: 11.5px;
  line-height: 1.3;
  cursor: pointer;
  transition: border-color ${c.w4.transitions.fast}, background ${c.w4.transitions.fast};

  > .glyph { line-height: 1; }
  > .label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 18ch;
  }

  &:hover {
    border-color: ${({tintColor:e})=>`${e}88`};
    background: ${({tintColor:e})=>`${e}22`};
  }
`,e0=l().div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${c.w4.spacing.md};
  padding: ${c.w4.spacing.xxl} ${c.w4.spacing.xl};
  min-height: 320px;
  background: ${c.w4.colors.surface};
  border: 1px dashed ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.xl};
  color: ${c.w4.colors.mainTextMuted};
  font-family: ${c.w4.typography.fontFamily};
  text-align: center;
  overflow: hidden;

  /* soft accent glow */
  &::before {
    content: '';
    position: absolute;
    inset: -40% 30% auto -30%;
    height: 240px;
    background: radial-gradient(
      ellipse at 50% 50%,
      ${c.w4.colors.accent}1a 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`,e1=l().div`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${c.w4.colors.accentMuted};
  border: 1px solid ${c.w4.colors.border};
  color: ${c.w4.colors.accent};
  font-size: 28px;
`,e4=l().div`
  position: relative;
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: 28px;
  font-weight: 400;
  color: ${c.w4.colors.mainText};
  line-height: 1.2;
`,e2=l().div`
  position: relative;
  font-size: ${c.w4.typography.fontSizeBase};
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.5;
  max-width: 420px;
`,e5=l().button`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: ${c.w4.colors.accent};
  border: none;
  border-radius: 99px;
  color: #fff;
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeBase};
  font-weight: 600;
  cursor: pointer;
  margin-top: ${c.w4.spacing.sm};
  transition: transform ${c.w4.transitions.fast}, box-shadow ${c.w4.transitions.fast};
  box-shadow: ${c.w4.elevation.glow};

  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0); }
  &:focus-visible { ${c.w4.focusRing} }
`,e3=new Set(M.filter(e=>"Developer Toolkit"===e.suite).map(e=>e.id)),e8="pin:",e6={sm:{colSpan:1},md:{colSpan:2},lg:{colSpan:"full"}};function e7({size:e}){return(0,o.jsxs)("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:[(0,o.jsx)("rect",{x:1.5,y:4.5,width:11,height:5,rx:1,stroke:"currentColor",strokeWidth:1,opacity:.4}),(0,o.jsx)("rect",{x:2,y:5,width:"sm"===e?4:"md"===e?7:11,height:4,rx:.5,fill:"currentColor"})]})}function e9(e){return e.widgetId.startsWith(e8)}function ae(e){return e.widgetId.slice(e8.length)}let aa=new Set(["games","movies","devtools"]);function at({instance:e,appId:a,meta:t,app:i,idx:n,totalCount:r,tShell:s,recentsOverride:l,onMove:d,onRemove:c,onSelectApp:g}){let u=(0,p.useRecents)(a),h=r>1?(0,o.jsxs)(o.Fragment,{children:[n>0&&(0,o.jsx)(eV,{type:"button",title:s("widgets.moveLeft"),onClick:a=>{a.stopPropagation(),d(e.id,-1)},children:(0,o.jsx)(m.In,{name:"chevron-left",size:13})}),n<r-1&&(0,o.jsx)(eV,{type:"button",title:s("widgets.moveRight"),onClick:a=>{a.stopPropagation(),d(e.id,1)},children:(0,o.jsx)(m.In,{name:"chevron-right",size:13})})]}):void 0;return(0,o.jsx)(m.SV,{vizId:a,label:t.label,description:t.description,hash:i?.hash??t.hash,category:t.category,accentColor:t.color,needsAuth:t.needsAuth,pinned:!0,index:n,onClick:()=>{i?g(i):window.location.hash=t.hash},onHoverIntent:i?()=>x(a):void 0,onTogglePin:()=>c(e.id),reorderControls:h,extra:aa.has(a)?function(e,a,t,i){if(0===e.length)return null;let n=e.slice(0,3);return(0,o.jsxs)(eJ,{children:[(0,o.jsx)(eQ,{children:t("pinnedCard.recent.label")}),(0,o.jsx)(eZ,{children:n.map(e=>{let t,n,r;return(0,o.jsxs)(eX,{type:"button",tintColor:e.color??a,title:e.label,onClick:a=>{a.stopPropagation(),window.location.hash=e.hash},children:[(t=function(e){if(e)return A[e.split("?")[0]]??A[e]}(e.hash),n=t?.iconName??e.iconName??i,r=t?.color??e.color??a,n?(0,o.jsx)("span",{className:"glyph","aria-hidden":"true",style:{color:r},children:(0,o.jsx)(m.In,{name:n,size:14})}):e.icon?(0,o.jsx)("span",{className:"glyph","aria-hidden":"true",children:e.icon}):null),(0,o.jsx)("span",{className:"label",children:e.label})]},e.hash)})})]})}(l??u,t.color,s,t.icon):null})}function ao({locale:e,pinnedAppIds:a,recentAppIds:t,apps:n,appMeta:r,onSelectApp:s,onTogglePin:l}){let d=(0,i.useMemo)(()=>(0,g.Nx)(e,el),[e]),[u,h]=(0,i.useState)([]),[f,b]=(0,i.useState)(!1),[x,y]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=()=>{try{sessionStorage.removeItem(eR)}catch{}y(!0)};window.addEventListener("atlantis:open-widget-picker",e);let a=!1;try{a="1"===sessionStorage.getItem(eR)}catch{}if(a){try{sessionStorage.removeItem(eR)}catch{}y(!0)}return()=>window.removeEventListener("atlantis:open-widget-picker",e)},[]),(0,i.useEffect)(()=>{let e=!1;return(async()=>{let a=await (0,c.PL)(eI);if(!e){if(a)try{let e=JSON.parse(a),t=function(e){if(!e.some(e=>"internet-now"===e.widgetId))return e;let a=[];for(let t of e)if("internet-now"===t.widgetId){let e=Date.now();a.push({id:`w-trending-${e}`,widgetId:"trending-searches"},{id:`w-wiki-${e+1}`,widgetId:"wiki-most-read"},{id:`w-hn-${e+2}`,widgetId:"hackernews-hot"})}else a.push(t);return a}(e);h(t),t!==e&&(0,c.Is)(eI,JSON.stringify(t))}catch{h(eD)}else h(eD);b(!0)}})(),()=>{e=!0}},[]),(0,i.useEffect)(()=>{f&&h(e=>{let t=new Set(a),o=new Set(e.filter(e9).map(ae)),i=e.filter(e=>!e9(e)||t.has(ae(e)));for(let e of a)o.has(e)||(i=[...i,{id:`pin-${e}`,widgetId:`${e8}${e}`}]);return i.length!==e.length||i.some((a,t)=>a.id!==e[t]?.id)?((0,c.Is)(eI,JSON.stringify(i)),i):e})},[a,f]);let w=(0,i.useRef)(new Set);(0,i.useEffect)(()=>{if(!f)return;let e=new Set(u.filter(e=>!e9(e)).map(e=>e.widgetId)),a=w.current;for(let t of e){if(a.has(t))continue;let e=en(t);if(e?.notifications?.length){for(let a of e.notifications)p.events.registerCategory({id:a.category,labelKey:a.labelKey??`notifications.source.${a.id}`,badgeColor:e.accentColor??c.w4.colors.mainTextMuted});p.events.registerRules(e.notifications)}}for(let t of a){if(e.has(t))continue;let a=en(t);if(a){if(a.notifications?.length){p.events.unregisterRules(a.notifications.map(e=>e.id));let e=new Set(a.notifications.map(e=>e.category));for(let a of p.events.getItems())e.has(a.category)&&p.events.dismiss(a.id)}for(let e of a.sources.filter(e=>e.cacheKey).map(e=>`widget-cache:${e.cacheKey}`))(0,c.bg)(e);if(a.persistedKeys)for(let e of a.persistedKeys)(0,c.bg)(e);(0,c.jv)(`notifications:${t}:`).then(e=>{for(let a of e)(0,c.bg)(a)}),a.cleanup&&a.cleanup().catch(()=>{})}}w.current=e},[u,f]);let v=(0,i.useCallback)(e=>{h(e),(0,c.Is)(eI,JSON.stringify(e))},[]),$=(0,i.useCallback)(e=>{v([...u,{id:`w-${e}-${Date.now()}`,widgetId:e}])},[u,v]),z=(0,i.useCallback)(e=>{let a=u.find(a=>a.id===e);a&&e9(a)?l(ae(a)):v(u.filter(a=>a.id!==e))},[u,v,l]),M=(0,i.useCallback)((e,a)=>{let t=u.findIndex(a=>a.id===e);if(t<0)return;let o=t+a;if(o<0||o>=u.length)return;let i=[...u];[i[t],i[o]]=[i[o],i[t]],v(i)},[u,v]),j=(0,i.useCallback)(e=>{let a=u.findIndex(a=>a.id===e);if(a<0)return;let t=u[a];if(e9(t))return;let o=en(t.widgetId);if(!o)return;let i=o.availableSizes??["sm","md","lg"],n=t.size??o.defaultSize,r=i.indexOf(n),s=i[(r+1)%i.length],l=[...u];l[a]={...t,size:s},v(l)},[u,v]),S=(0,i.useMemo)(()=>new Set(u.filter(e=>!e9(e)).map(e=>e.widgetId)),[u]),A=(0,i.useMemo)(()=>new Map,[]);return f?(0,o.jsxs)(eO,{children:[(0,o.jsxs)(eH,{children:[(0,o.jsx)(e_,{children:d("widgets.dashboard")}),(0,o.jsxs)(eK,{active:x,onClick:()=>y(!x),children:[(0,o.jsx)(m.In,{name:"plus",size:14}),d("widgets.addWidget")]})]}),(0,o.jsx)(eP,{open:x,activeIds:S,locale:e,onAdd:e=>{$(e)},onRemove:e=>{let a=u.find(a=>!e9(a)&&a.widgetId===e);a&&z(a.id)},onClose:()=>y(!1)}),0===u.length?(0,o.jsxs)(e0,{children:[(0,o.jsx)(e1,{children:"✨"}),(0,o.jsx)(e4,{children:d("widgets.empty.title")}),(0,o.jsx)(e2,{children:d("widgets.empty.body")}),(0,o.jsxs)(e5,{onClick:()=>y(!0),children:[(0,o.jsx)(m.In,{name:"plus",size:14}),d("widgets.empty.cta")]})]}):(0,o.jsx)(eU,{children:u.map((l,c)=>{if(e9(l)){let a=ae(l),i="devtools"===a,p=i?{icon:"terminal",label:d("apps.devtools.label"),description:d("apps.devtools.description"),color:"#facc15",category:k("Create",e),hash:"#/playground",needsAuth:!1}:r[a];if(!p)return null;let m=i?null:n.find(e=>e.id===a)??null,g=i?t.filter(e=>e3.has(e)).map(e=>{let a=r[e];return{hash:a?.hash??`#/${e}`,label:a?.label??e,iconName:a?.icon,color:a?.color,ts:0}}):void 0;return(0,o.jsx)(at,{instance:l,appId:a,meta:p,app:m,locale:e,idx:c,totalCount:u.length,tShell:d,recentsOverride:g,onMove:M,onRemove:z,onSelectApp:s},l.id)}let p=en(l.widgetId);if(!p)return null;let g=l.size??p.defaultSize,h=e6[g],f="full"===h.colSpan,b=f?1:h.colSpan,x=(p.availableSizes??["sm","md","lg"]).length>1;return(0,o.jsxs)(eq,{colSpan:b,fullWidth:f,minH:p.minHeight,accent:p.accentColor,children:[(0,o.jsxs)(eG,{className:"widget-controls",children:[c>0&&(0,o.jsx)(eW,{title:d("widgets.moveLeft"),onClick:()=>M(l.id,-1),children:(0,o.jsx)(m.In,{name:"chevron-left",size:14})}),c<u.length-1&&(0,o.jsx)(eW,{title:d("widgets.moveRight"),onClick:()=>M(l.id,1),children:(0,o.jsx)(m.In,{name:"chevron-right",size:14})}),x&&(0,o.jsx)(eW,{title:d("widgets.cycleSize",{size:g.toUpperCase()}),onClick:()=>j(l.id),children:(0,o.jsx)(e7,{size:g})}),(0,o.jsx)(eY,{title:d("widgets.remove"),onClick:()=>z(l.id),children:(0,o.jsx)(m.In,{name:"close",size:14})})]}),(l=>{if("quicklinks"===l.widgetId)return(0,o.jsx)(es.QuickLinksWidget,{locale:e,pinnedAppIds:a,recentAppIds:t,apps:n,appMeta:r,onSelectApp:s});let d=en(l.widgetId);if(!d)return null;A.has(l.widgetId)||A.set(l.widgetId,(0,i.lazy)(d.load));let c=A.get(l.widgetId);return(0,o.jsx)(i.Suspense,{fallback:null,children:(0,o.jsx)(c,{locale:e})})})(l)]},l.id)})})]}):null}let ai={0:"☀️",1:"\uD83C\uDF24️",2:"⛅",3:"☁️",45:"\uD83C\uDF2B️",48:"\uD83C\uDF2B️",51:"\uD83C\uDF26️",53:"\uD83C\uDF26️",55:"\uD83C\uDF27️",61:"\uD83C\uDF27️",63:"\uD83C\uDF27️",65:"\uD83C\uDF27️",71:"\uD83C\uDF28️",73:"\uD83C\uDF28️",75:"\uD83C\uDF28️",80:"\uD83C\uDF26️",81:"\uD83C\uDF27️",82:"\uD83C\uDF27️",95:"⛈️",96:"⛈️",99:"⛈️"},an={0:"\uD83C\uDF19",1:"\uD83C\uDF19",2:"☁️",3:"☁️"},ar=Object.fromEntries(M.map(e=>[e.id,e.icon])),as=Object.fromEntries(M.map(e=>[e.id,e.color]));function al(e){return e<10?`0${e}`:String(e)}function ad({locale:e,greeting:a,userName:t,pinnedApps:n,onSelect:r,t:s}){let[l,d]=(0,i.useState)(()=>new Date),{forecast:c}=(0,p.useWeather)({lat:u.j.lisbon.lat,lon:u.j.lisbon.lon,current:"temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day",daily:"temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max",timezone:u.j.lisbon.timezone,cacheKey:"weather-lisbon-v3"});(0,i.useEffect)(()=>{let e=setInterval(()=>d(new Date),3e4);return()=>clearInterval(e)},[]);let g=`${al(l.getHours())} : ${al(l.getMinutes())}`,h=(0,i.useMemo)(()=>{let a,t,o;return a=l.toLocaleDateString("pt"===e?"pt-PT":"en-GB",{weekday:"long"}),t=l.getDate(),o=l.toLocaleDateString("pt"===e?"pt-PT":"en-GB",{month:"long"}),`${a} \xb7 ${t} ${o}`.toUpperCase()},[l,e]),f=n.slice(0,5),b=c?.current?(c.current.is_day?ai[c.current.weather_code??0]:an[c.current.weather_code??0]??ai[c.current.weather_code??0])??"\xb7":null;return(0,o.jsxs)(ap,{children:[c?.current&&(0,o.jsxs)(ax,{children:[(0,o.jsx)("span",{className:"ico",children:b}),(0,o.jsxs)("span",{className:"temp",children:[Math.round(c.current.temperature_2m??0),"\xb0"]}),(0,o.jsx)("span",{className:"lbl",children:s("retreat.weather.city")})]}),(0,o.jsxs)(am,{children:[(0,o.jsx)(ag,{children:h}),(0,o.jsxs)(au,{children:[a,t?(0,o.jsxs)(o.Fragment,{children:[", ",(0,o.jsx)("span",{className:"name",children:t.split(" ")[0]})]}):null,"."]}),(0,o.jsx)(ah,{children:g}),(0,o.jsxs)(af,{"aria-hidden":!0,children:[(0,o.jsx)("span",{className:"caret",children:"⌘K"}),(0,o.jsx)("span",{className:"txt",children:s("retreat.prompt")})]}),f.length>0&&(0,o.jsx)(ab,{children:f.map((e,a)=>(0,o.jsxs)(ay,{onClick:()=>r(e),title:`${a+1} \xb7 ${e.label}`,"aria-label":e.label,children:[(0,o.jsx)("span",{className:"ico",style:{color:as[e.id]},children:ar[e.id]?(0,o.jsx)(m.In,{name:ar[e.id],size:18,"aria-hidden":"true"}):"\xb7"}),(0,o.jsx)("span",{className:"n",children:a+1})]},e.id))})]})]})}let ac=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,ap=l().div`
  flex: 1;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  animation: ${ac} 0.35s ease both;

  &::before {
    content: '';
    position: absolute;
    top: -30%;
    left: 50%;
    transform: translateX(-50%);
    width: 520px;
    height: 520px;
    border-radius: 50%;
    background: radial-gradient(circle, ${c.w4.colors.accent}1a 0%, transparent 70%);
    filter: blur(40px);
    pointer-events: none;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -35%;
    left: 20%;
    width: 640px;
    height: 640px;
    border-radius: 50%;
    background: radial-gradient(circle, #a371f71a 0%, transparent 70%);
    filter: blur(50px);
    pointer-events: none;
  }
`,am=l().div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: ${c.w4.spacing.lg};
`,ag=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.3em;
  color: ${c.w4.colors.mainTextMuted};
  margin-bottom: ${c.w4.spacing.md};
`,au=l().h1`
  /* Match Command-First Deep Dive: Cormorant Garamond display + ultra-light
     weight + tight tracking. Falls back gracefully to the system serif. */
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: clamp(32px, 6vw, 56px);
  font-weight: 400;
  letter-spacing: -0.8px;
  color: ${c.w4.colors.mainText};
  line-height: 1.05;

  .name {
    color: ${c.w4.colors.accent};
    font-weight: 400;
    font-style: italic;
  }
`,ah=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 14px;
  color: ${c.w4.colors.mainTextMuted};
  letter-spacing: 0.24em;
  margin-top: ${c.w4.spacing.md};
  font-variant-numeric: tabular-nums;
`,af=l().div`
  margin-top: ${c.w4.spacing.xl};
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  border: 1px solid ${c.w4.colors.border};
  border-radius: 999px;
  background: ${c.w4.colors.surface}aa;
  backdrop-filter: blur(10px);

  .caret {
    color: ${c.w4.colors.accent};
    font-family: ${c.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
  }
  .txt {
    font-family: ${c.w4.typography.fontFamilyMono};
    font-size: 11px;
    color: ${c.w4.colors.mainTextMuted};
    letter-spacing: 0.08em;
  }
`,ab=l().div`
  margin-top: ${c.w4.spacing.xl};
  display: flex;
  justify-content: center;
  gap: ${c.w4.spacing.md};
`,ax=l().div`
  position: absolute;
  top: ${c.w4.spacing.lg};
  right: ${c.w4.spacing.lg};
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  background: ${c.w4.colors.surface}80;
  border: 1px solid ${c.w4.colors.border};
  backdrop-filter: blur(10px);

  .ico { font-size: 14px; line-height: 1; }
  .temp {
    font-size: 14px;
    font-weight: 300;
    color: ${c.w4.colors.mainText};
    font-variant-numeric: tabular-nums;
  }
  .lbl {
    font-family: ${c.w4.typography.fontFamilyMono};
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${c.w4.colors.mainTextMuted};
  }
`,ay=l().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 44px;
  min-height: 44px;
  padding: 6px 4px;
  border: 1px solid ${c.w4.colors.border};
  border-radius: 12px;
  background: ${c.w4.colors.surface}80;
  color: ${c.w4.colors.sidebarTextMuted};
  cursor: pointer;
  transition: border-color ${c.w4.transitions.base}, color ${c.w4.transitions.base}, transform ${c.w4.transitions.base}, background ${c.w4.transitions.base};

  .ico { font-size: 18px; line-height: 1; }
  .n {
    font-family: ${c.w4.typography.fontFamilyMono};
    font-size: 9px;
    letter-spacing: 0.06em;
  }

  &:hover {
    border-color: ${c.w4.colors.accent};
    color: ${c.w4.colors.accent};
    background: ${c.w4.colors.accentMuted??`${c.w4.colors.accent}14`};
    transform: translateY(-2px);
  }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,aw=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,av=l().div`
  position: relative;
  padding: ${c.w4.spacing.xl};
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
  margin-bottom: ${c.w4.spacing.lg};
  animation: ${aw} 0.25s ${c.w4.transitions.easing} both;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 12px;
    bottom: 12px;
    width: 2px;
    background: ${c.w4.colors.accent};
    border-radius: 0 2px 2px 0;
  }
`,ak=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.md};
`,a$=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,az=l().div`
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: ${c.w4.typography.fontSizeLg};
  font-weight: 400;
  color: ${c.w4.colors.mainText};
`,aM=l().div`
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeBase};
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.5;
  max-width: 560px;
`,aj=l().button`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${c.w4.colors.border};
  background: transparent;
  color: ${c.w4.colors.mainTextMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    color ${c.w4.transitions.fast},
    border-color ${c.w4.transitions.fast};

  &:hover {
    color: ${c.w4.colors.mainText};
    border-color: ${c.w4.colors.mainText};
  }
  &:focus-visible { ${c.w4.focusRing} }
`,aS=l().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,aA=l().button`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: ${c.w4.spacing.md};
  background: ${c.w4.colors.mainBg};
  border: 1px solid ${c.w4.colors.borderSubtle};
  border-radius: ${c.w4.borderRadius.md};
  text-align: left;
  cursor: pointer;
  transition:
    border-color ${c.w4.transitions.fast},
    transform ${c.w4.transitions.fast};

  &:hover {
    border-color: ${c.w4.colors.accent};
    transform: translateY(-1px);
  }
  &:focus-visible { ${c.w4.focusRing} }
`,aT=l().div`
  color: ${c.w4.colors.accent};
`,aC=l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${c.w4.colors.mainText};
`,aL=l().div`
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.45;
`;function aF({t:e,onDismiss:a,onOpenPalette:t,onOpenPreferences:i}){let n=[{iconName:"search",titleKey:"onboarding.tip.palette.title",bodyKey:"onboarding.tip.palette.body",kbd:"⌘K",onClick:t},{iconName:"settings",titleKey:"onboarding.tip.preferences.title",bodyKey:"onboarding.tip.preferences.body",onClick:i},{iconName:"check",titleKey:"onboarding.tip.daily.title",bodyKey:"onboarding.tip.daily.body",onClick:()=>{window.location.hash="#/daily"}}];return(0,o.jsxs)(av,{role:"region","aria-label":e("onboarding.aria"),children:[(0,o.jsxs)(ak,{children:[(0,o.jsxs)(a$,{children:[(0,o.jsx)(m.YZ,{children:e("onboarding.eyebrow")}),(0,o.jsx)(az,{children:e("onboarding.title")}),(0,o.jsx)(aM,{children:e("onboarding.subtitle")})]}),(0,o.jsx)(aj,{type:"button",title:e("onboarding.dismiss"),"aria-label":e("onboarding.dismiss"),onClick:a,children:(0,o.jsx)(m.In,{name:"close",size:14})})]}),(0,o.jsx)(aS,{children:n.map(a=>(0,o.jsxs)(aA,{type:"button",onClick:a.onClick,disabled:!a.onClick,children:[(0,o.jsx)(aT,{"aria-hidden":!0,children:(0,o.jsx)(m.In,{name:a.iconName,size:18})}),(0,o.jsxs)(aC,{children:[e(a.titleKey),a.kbd&&(0,o.jsx)(m.ue,{children:a.kbd})]}),(0,o.jsx)(aL,{children:e(a.bodyKey)})]},a.titleKey))})]})}let aN=Object.fromEntries(M.map(({id:e,icon:a,labelKey:t,descriptionKey:o,color:i,category:n,suite:r,interest:s,needsAuth:l,hash:d})=>[e,{icon:a,labelKey:t,descriptionKey:o,color:i,category:n,suite:r,interest:s,needsAuth:l,hash:d}])),aE=new Set(M.filter(e=>"default"!==z(e)).map(e=>e.id)),aP=M.filter(e=>e.enabled&&"default"===z(e)),aI=["All","Live","School","Explore","Create","Inspect","Connect","Content","Fun","Lab","Tools"],aR=["AI Lab","Data Studio","Life Dashboard","Learning Hub","Game Room","Entertainment"],aD=aR.filter(e=>aP.some(a=>aN[a.id]?.suite===e));function aB(e,a=new Date){let t=a.getHours();return $(t<12?"greeting.morning":t<19?"greeting.afternoon":"greeting.evening",e)}let aO={0:"☀️",1:"\uD83C\uDF24️",2:"⛅",3:"☁️",45:"\uD83C\uDF2B️",48:"\uD83C\uDF2B️",51:"\uD83C\uDF26️",53:"\uD83C\uDF26️",55:"\uD83C\uDF27️",61:"\uD83C\uDF27️",63:"\uD83C\uDF27️",65:"\uD83C\uDF27️",71:"\uD83C\uDF28️",73:"\uD83C\uDF28️",75:"\uD83C\uDF28️",80:"\uD83C\uDF26️",81:"\uD83C\uDF27️",82:"\uD83C\uDF27️",95:"⛈️",96:"⛈️",99:"⛈️"},aH={0:"\uD83C\uDF19",1:"\uD83C\uDF19",2:"☁️",3:"☁️"},a_=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,aK=l().div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${c.w4.colors.mainBg};
  position: relative;
  overflow: hidden;

  /* Single static ambient glow — tonal, not theatrical. */
  &::before {
    content: '';
    position: fixed;
    top: -30vmax;
    right: -30vmax;
    width: 80vmax;
    height: 80vmax;
    border-radius: 50%;
    background: radial-gradient(ellipse at center,
      ${c.w4.colors.accent}12 0%,
      ${c.w4.colors.accent}06 40%,
      transparent 70%);
    filter: blur(120px);
    pointer-events: none;
    z-index: 0;
  }

  & > * { position: relative; z-index: 1; }
`,aU=l().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${c.w4.colors.sidebarBg};
  border-bottom: 1px solid ${c.w4.colors.sidebarBorder};
  flex-shrink: 0;
  backdrop-filter: blur(12px);
  z-index: 1000;

  /* On mobile the header becomes two stacked rows: logo on top, a
     horizontally-scrollable chrome row below. */
  @media (max-width: ${c.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(48px + env(safe-area-inset-top, 0px));
  }
`,aq=l().button`
  display: flex;
  align-items: baseline;
  padding: 0 ${c.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeMd};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${c.w4.colors.mainText};
  transition: opacity ${c.w4.transitions.fast};
  flex-shrink: 0;
  &:hover { opacity: 0.8; }

  .logo-accent {
    background: linear-gradient(135deg, ${c.w4.colors.accent}, ${c.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,aG=l().div`
  display: flex;
  align-items: center;
  padding-left: ${c.w4.spacing.md};
  flex-shrink: 0;

  @media (max-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,aW=l().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${c.w4.spacing.sm};
  padding: 0 ${c.w4.spacing.lg};

  /* Drop to a full-width second row on mobile and scroll horizontally,
     aligned to the right so the avatar stays anchored at the edge. */
  @media (max-width: ${c.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    min-width: 0;
    justify-content: flex-end;
    gap: ${c.w4.spacing.xs};
    padding: ${c.w4.spacing.xs} ${c.w4.spacing.sm};
    border-top: 1px solid ${c.w4.colors.sidebarBorder};
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`,aY=l().div`
  display: flex;
  flex: 1;
  overflow: hidden;

  @media (max-width: ${c.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,aV=l()("nav",{shouldForwardProp:e=>"collapsed"!==e})`
  width: ${({collapsed:e})=>e?"0":"220px"};
  min-width: ${({collapsed:e})=>e?"0":"220px"};
  border-right: ${({collapsed:e})=>e?"none":`1px solid ${c.w4.colors.borderSubtle}`};
  padding: ${({collapsed:e})=>e?"0":`${c.w4.spacing.xxl} ${c.w4.spacing.sm}`};
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
  opacity: ${({collapsed:e})=>+!e};
  visibility: ${({collapsed:e})=>e?"hidden":"visible"};
  transition:
    width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    padding 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s ease-out,
    visibility 0s linear ${({collapsed:e})=>e?"0.3s":"0s"};

  @media (max-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,aJ=l()("button",{shouldForwardProp:e=>"collapsed"!==e})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 11px;
  font-weight: 600;
  font-family: ${c.w4.typography.fontFamily};
  color: ${c.w4.colors.sidebarTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  transition: color ${c.w4.transitions.fast};
  &:hover { color: ${c.w4.colors.mainText}; }

  @media (max-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,aQ=l().span`
  display: inline-flex;
  transition: transform ${c.w4.transitions.base};
  transform: rotate(${({collapsed:e})=>e?"-90deg":"0deg"});
  flex-shrink: 0;
`,aZ=l()("div",{shouldForwardProp:e=>"collapsed"!==e})`
  display: grid;
  grid-template-rows: ${({collapsed:e})=>e?"0fr":"1fr"};
  opacity: ${({collapsed:e})=>+!e};
  transition:
    grid-template-rows 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.2s ease-out;
`,aX=l().div`
  overflow: hidden;
  padding: 2px 0;
  min-height: 0;
`,a0=l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6px ${c.w4.spacing.md};
  background: none;
  border: none;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: ${c.w4.colors.sidebarTextMuted};
  cursor: pointer;
  transition: color ${c.w4.transitions.fast};
  text-align: left;

  &:hover { color: ${c.w4.colors.accent}; }
  &:focus-visible { ${c.w4.focusRing} }

  @media (max-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,a1=l().button`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  width: 100%;
  min-height: 36px;
  padding: 8px ${c.w4.spacing.md};
  border: none;
  border-radius: ${c.w4.borderRadius.md};
  background: ${({active:e})=>e?c.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?c.w4.colors.accent:c.w4.colors.sidebarText};
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  text-align: left;
  transition: background ${c.w4.transitions.fast}, color ${c.w4.transitions.fast};
  &:hover {
    background: ${({active:e})=>e?c.w4.colors.accentMuted:c.w4.colors.sidebarHover};
    color: ${({active:e})=>e?c.w4.colors.accent:c.w4.colors.mainText};
  }

  @media (max-width: ${c.w4.breakpoints.md}) {
    width: auto;
    min-height: 36px;
    padding: 6px ${c.w4.spacing.md};
    border-radius: 20px;
    border: 1px solid ${({active:e})=>e?c.w4.colors.accent:c.w4.colors.border};
    font-size: ${c.w4.typography.fontSizeSm};
  }
`,a4=l().span`
  font-size: 11px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({active:e})=>e?c.w4.colors.accent:c.w4.colors.sidebarTextMuted};
  background: ${({active:e})=>e?c.w4.colors.accentMuted:c.w4.colors.sidebarHover};
  padding: 2px 8px;
  border-radius: 10px;
  min-width: 22px;
  text-align: center;
  line-height: 1.4;
  flex-shrink: 0;
  transition: background ${c.w4.transitions.fast}, color ${c.w4.transitions.fast};

  @media (max-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,a2=l().hr`
  border: none;
  border-top: 1px solid ${c.w4.colors.borderSubtle};
  margin: ${c.w4.spacing.sm} ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,a5=l().div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: ${({bleed:e})=>e?"0":`${c.w4.spacing.xl} ${c.w4.spacing.xxl} 80px`};
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;

  @media (max-width: ${c.w4.breakpoints.md}) {
    padding: ${({bleed:e})=>e?"0":`${c.w4.spacing.lg} ${c.w4.spacing.md} ${c.w4.spacing.xxl}`};
  }
`,a3=l().header`
  max-width: 820px;
  margin-bottom: ${c.w4.spacing.lg};
  animation: ${a_} 0.4s ease both;

  @media (max-width: ${c.w4.breakpoints.md}) {
    margin-bottom: ${c.w4.spacing.md};
  }
`,a8=l().div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${c.w4.spacing.md};
  margin-bottom: ${c.w4.spacing.md};
  flex-wrap: wrap;
`,a6=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.3em;
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
`,a7=l().span`
  color: ${c.w4.colors.mainTextMuted};
  opacity: 0.5;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
`,a9=l().div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  animation: ${a_} 0.4s ease both;

  .ico { font-size: 13px; line-height: 1; }
  .temp {
    font-family: ${c.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 500;
    color: ${c.w4.colors.mainText};
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.05em;
  }
  .lbl {
    font-family: ${c.w4.typography.fontFamilyMono};
    font-size: 11px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: ${c.w4.colors.mainTextMuted};
  }
`,te=l().h1`
  /* Command-First Deep Dive spec: 52 px ultra-light Cormorant Garamond,
     name in brand purple. Scales down gracefully on narrow viewports. */
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: clamp(34px, 4.8vw, 52px);
  font-weight: 300;
  letter-spacing: -0.015em;
  line-height: 1.1;
  color: ${c.w4.colors.mainText};
  margin: 0;

  .accent {
    color: ${c.w4.colors.accent};
    font-style: italic;
    font-weight: 400;
  }

  @media (max-width: ${c.w4.breakpoints.md}) {
    font-size: 28px;
  }
`,ta=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${c.w4.typography.fontFamily};
  color: ${c.w4.colors.sidebarTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding-top: 18px;
  margin-bottom: ${c.w4.spacing.md};
`,tt=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${c.w4.spacing.sm};
  }
`,to=l().button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  cursor: pointer;
  padding: 0;
  transition: color ${c.w4.transitions.fast}, border-color ${c.w4.transitions.fast};

  &:hover {
    color: ${c.w4.colors.accent};
    border-color: ${c.w4.colors.accent};
  }
`,ti=l().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${c.w4.spacing.sm};
  padding: ${c.w4.spacing.xl};
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  margin: ${c.w4.spacing.lg} 0;
`,tn=l().div`
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${c.w4.colors.mainText};
`,tr=l().div`
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeBase};
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.55;
  max-width: 480px;
`,ts=l().button`
  margin-top: ${c.w4.spacing.sm};
  padding: 8px 14px;
  background: ${c.w4.colors.accent};
  color: #fff;
  border: none;
  border-radius: ${c.w4.borderRadius.md};
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeBase};
  font-weight: 500;
  cursor: pointer;
  transition: background ${c.w4.transitions.fast};

  &:hover { background: ${c.w4.colors.accentHover}; }
  &:focus-visible { ${c.w4.focusRing} }
`;function tl({apps:e,recentAppIds:a,pinnedAppIds:t,onTogglePin:n,onMovePinned:r,onSelect:s,user:l,onSignOut:d,onPreferences:h,onClearData:f,onOpenPalette:b,notifications:y,suites:v}){let z,M,S,[A]=(0,p.useProfile)(),T=(0,i.useMemo)(()=>e.filter(e=>{if(aE.has(e.id))return!1;let a=aN[e.id];return!a||!(0,p.hasInterests)(A)||!a.interest||!!A.interests.includes(a.interest)}),[e,A]),[C,L]=(0,i.useState)("home"),[F,N]=(0,i.useState)("All"),[E,P]=(0,i.useState)(null),[I,R]=(0,i.useState)(()=>new Date),{forecast:D}=(0,p.useWeather)({lat:u.j.lisbon.lat,lon:u.j.lisbon.lon,current:"temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day",daily:"temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max",timezone:u.j.lisbon.timezone,cacheKey:"weather-lisbon-v3"}),[B,O]=(0,i.useState)(!0);(0,i.useEffect)(()=>{let e=!1;return(0,c.PL)("shell:onboarding-dismissed").then(a=>{e||O("true"===a)}).catch(()=>void 0),()=>{e=!0}},[]);let H=(0,i.useCallback)(()=>{O(!0),(0,c.Is)("shell:onboarding-dismissed","true").catch(()=>void 0)},[]);(0,i.useEffect)(()=>{let e=setInterval(()=>R(new Date),6e4),a=()=>{document.hidden||R(new Date)};return document.addEventListener("visibilitychange",a),window.addEventListener("focus",a),()=>{clearInterval(e),document.removeEventListener("visibilitychange",a),window.removeEventListener("focus",a)}},[]);let _=(0,i.useCallback)(()=>{L("home"),N("All"),P(null),(0,c.Is)("shell:home-mode","dashboard")},[]),K=(0,i.useCallback)(()=>{L("retreat"),N("All"),P(null),(0,c.Is)("shell:home-mode","retreat")},[]),U=(0,i.useCallback)(e=>{L("apps"),P(e),N("All")},[]),q=(0,i.useMemo)(()=>({lab:"AI Lab",vida:"Life Dashboard",learn:"Learning Hub",games:"Game Room",ent:"Entertainment"}),[]);(0,i.useEffect)(()=>{let e=()=>{let e=window.location.hash,a=e.indexOf("?");if(a<0)return;let t=new URLSearchParams(e.slice(a+1)).get("suite");if(!t)return;let o=q[t];o&&(L("apps"),P(o),N("All"))};return e(),window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[q]);let[G,W]=(0,i.useState)(()=>{try{let e=localStorage.getItem("shell:suites-collapsed");return null===e||"true"===e}catch{return!0}}),[Y,V]=(0,i.useState)(()=>{try{return"true"===localStorage.getItem("shell:home-sidebar-hidden")}catch{return!1}}),[J]=(0,i.useState)(()=>{try{return"1"===sessionStorage.getItem(eR)}catch{return!1}});(0,i.useEffect)(()=>{let e=!1;return(async()=>{let[a,t,o]=await Promise.all([(0,c.PL)("shell:suites-collapsed"),(0,c.PL)("shell:home-mode"),(0,c.PL)("shell:home-sidebar-hidden")]);if(!e){if(null!==a){W("true"===a);try{localStorage.setItem("shell:suites-collapsed",a)}catch{}}if(null!==o){V("true"===o);try{localStorage.setItem("shell:home-sidebar-hidden",o)}catch{}}J?(L("home"),(0,c.Is)("shell:home-mode","dashboard").catch(()=>void 0)):"retreat"===t&&L("retreat")}})(),()=>{e=!0}},[J]),(0,i.useEffect)(()=>{let e=()=>{L("home"),N("All"),P(null)};return window.addEventListener("atlantis:open-widget-picker",e),()=>window.removeEventListener("atlantis:open-widget-picker",e)},[]);let Q=(0,i.useCallback)(()=>{W(e=>{let a=!e;try{localStorage.setItem("shell:suites-collapsed",String(a))}catch{}return(0,c.Is)("shell:suites-collapsed",String(a)),a})},[]),Z=(0,i.useCallback)(()=>{V(e=>{let a=!e;try{localStorage.setItem("shell:home-sidebar-hidden",String(a))}catch{}return(0,c.Is)("shell:home-sidebar-hidden",String(a)).catch(()=>void 0),a})},[]),[X,ee]=(0,g.Ym)(),ea=(0,i.useMemo)(()=>(0,g.Nx)(X,el),[X]),et=(0,i.useMemo)(()=>{let e={};for(let a of T){let t=aN[a.id];t&&(e[a.id]={icon:t.icon,label:ea(t.labelKey),description:ea(t.descriptionKey),color:t.color,category:k(t.category,X),hash:t.hash,needsAuth:!!t.needsAuth})}return e},[T,ea,X]),eo=(0,i.useMemo)(()=>T.filter(e=>{let a=aN[e.id],o="All"===F||a?.category===F,i=!E||a?.suite===E,n="All"===F&&!E&&t.includes(e.id);return o&&i&&!n}),[T,F,E,t]),ei=(0,i.useMemo)(()=>{if("All"!==F)return null;if(E){let e={};for(let a of eo){let t=aN[a.id]?.category??"Other";e[t]||(e[t]=[]),e[t].push(a)}return{type:"category",groups:e}}let e={};for(let a of eo){let t=aN[a.id]?.suite??"Other";e[t]||(e[t]=[]),e[t].push(a)}return{type:"suite",groups:e}},[eo,F,E]),en=(0,i.useMemo)(()=>{let e={};for(let a of T){let t=aN[a.id]?.suite;t&&(e[t]=(e[t]??0)+1)}return e["AI Lab"]=(e["AI Lab"]??0)+1,e},[T]),er=(0,i.useMemo)(()=>t.flatMap(e=>T.filter(a=>a.id===e)),[t,T]),es=(0,i.useMemo)(()=>a.filter(e=>!t.includes(e)).flatMap(e=>T.filter(a=>a.id===e)).slice(0,6),[a,t,T]),ed=0,ec=(e,a,i)=>{let l=aN[e.id],d=t.includes(e.id),p=l?ea(l.descriptionKey):"",g=l?.color??c.w4.colors.accent,u=l?k(l.category,X):"",h=i&&i.total>1?(0,o.jsxs)(o.Fragment,{children:[i.pinIdx>0&&(0,o.jsx)(to,{type:"button",title:ea("pinned.moveLeft"),onClick:a=>{a.stopPropagation(),r(e.id,-1)},children:(0,o.jsx)(m.In,{name:"chevron-left",size:13})}),i.pinIdx<i.total-1&&(0,o.jsx)(to,{type:"button",title:ea("pinned.moveRight"),onClick:a=>{a.stopPropagation(),r(e.id,1)},children:(0,o.jsx)(m.In,{name:"chevron-right",size:13})})]}):void 0;return(0,o.jsx)(m.SV,{vizId:e.id,label:e.label,description:p,hash:l?.hash??e.hash,category:u,accentColor:g,needsAuth:l?.needsAuth,pinned:d,index:a,onClick:()=>s(e),onHoverIntent:()=>x(e.id),onTogglePin:()=>n(e.id),reorderControls:h},e.id)},ep=e=>{let a=t.includes("devtools");return(0,o.jsx)(m.SV,{vizId:"devtools",label:ea("apps.devtools.label"),description:ea("apps.devtools.description"),hash:"#/playground",category:k("Create",X),accentColor:"#facc15",pinned:a,index:e,onClick:()=>{window.location.hash="#/playground"},onHoverIntent:()=>x("playground"),onTogglePin:()=>n("devtools")})};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(aK,{children:[(0,o.jsxs)(aU,{children:[(0,o.jsx)(aG,{children:(0,o.jsx)(m.K0,{onClick:Z,title:Y?ea("sidebar.show"):ea("sidebar.hide"),"aria-label":Y?ea("sidebar.show"):ea("sidebar.hide"),"aria-pressed":Y,children:(0,o.jsx)(m.In,{name:"panel-left",size:16})})}),(0,o.jsxs)(aq,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:[(0,o.jsx)("span",{children:"Atl"}),(0,o.jsx)("span",{className:"logo-accent",children:"antis"})]}),(0,o.jsx)(aW,{children:(0,o.jsx)(m.Yw,{locale:X,onLocaleChange:ee,suites:v,notifications:y,onOpenPalette:b,paletteLabel:ea("palette.search"),user:l?{name:l.name,email:l.email,avatarUrl:l.avatarUrl}:void 0,userMenuItems:l?[...h?[{label:ea("userMenu.preferences"),icon:(0,o.jsx)(m.In,{name:"user-cog",size:14}),onClick:h}]:[],{label:ea("userMenu.settings"),icon:(0,o.jsx)(m.In,{name:"settings",size:14}),onClick:()=>{window.location.hash="#/settings"}},...f?[{label:ea("userMenu.clearData"),icon:(0,o.jsx)(m.In,{name:"trash",size:14}),onClick:f,danger:!0}]:[],...d?[{label:ea("userMenu.signOut"),icon:(0,o.jsx)(m.In,{name:"log-out",size:14}),onClick:d,danger:!0}]:[]]:[],userMenuControlLabels:{language:ea("userMenu.language"),theme:ea("userMenu.theme"),themeLight:ea("userMenu.themeLight"),themeDark:ea("userMenu.themeDark"),themeSystem:ea("userMenu.themeSystem")},onSignIn:()=>{window.location.hash="#/home"}})})]}),(0,o.jsxs)(aY,{children:[(0,o.jsxs)(aV,{collapsed:Y,children:[(0,o.jsx)(a1,{active:"home"===C,onClick:_,children:(0,o.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,o.jsx)(m.In,{name:"home",size:14}),ea("sidebar.home")]})}),(0,o.jsx)(a1,{active:"retreat"===C,onClick:K,children:(0,o.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,o.jsx)(m.In,{name:"moon",size:14}),ea("sidebar.retreat")]})}),(0,o.jsx)(a2,{}),aD.length>0&&(0,o.jsxs)(o.Fragment,{children:[G?(0,o.jsx)(a0,{type:"button",onClick:Q,children:ea("sidebar.showSuites")}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(aJ,{onClick:Q,children:[$("suites",X),(0,o.jsx)(aQ,{collapsed:G,children:(0,o.jsx)(m.In,{name:"chevron-down",size:14})})]}),(0,o.jsx)(aZ,{collapsed:G,children:(0,o.jsx)(aX,{children:aD.map(e=>{let a,t=(a=j.find(a=>a.yamlSuite===e))?{icon:a.icon,color:a.color}:void 0,i="apps"===C&&E===e;return(0,o.jsxs)(a1,{active:i,onClick:()=>U(e),children:[t&&(0,o.jsx)("span",{style:{display:"inline-flex",color:i?c.w4.colors.accent:t.color,flexShrink:0},children:(0,o.jsx)(m.In,{name:t.icon,size:16,"aria-hidden":"true"})}),(0,o.jsx)("span",{style:{flex:1,textAlign:"left"},children:w[e]?.[X]??e}),(0,o.jsx)(a4,{active:i,children:en[e]??0})]},e)})})})]}),(0,o.jsx)(a2,{})]})]}),(0,o.jsx)(a5,{bleed:"retreat"===C,children:"retreat"===C?(0,o.jsx)(ad,{locale:X,greeting:aB(X,I),userName:l?.name,pinnedApps:er,onSelect:s,t:ea}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a3,{children:[(0,o.jsxs)(a8,{children:[(0,o.jsx)(a6,{children:(z=I.toLocaleDateString("pt"===X?"pt-PT":"en-GB",{weekday:"long"}),M=I.getDate(),S=I.toLocaleDateString("pt"===X?"pt-PT":"en-GB",{month:"long"}),`${z} \xb7 ${M} ${S}`.toUpperCase())}),D?.current&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a7,{children:"\xb7"}),(0,o.jsxs)(a9,{children:[(0,o.jsx)("span",{className:"ico",children:(D.current.is_day?aO[D.current.weather_code??0]:aH[D.current.weather_code??0]??aO[D.current.weather_code??0])??"\xb7"}),(0,o.jsxs)("span",{className:"temp",children:[Math.round(D.current.temperature_2m??0),"\xb0"]}),(0,o.jsx)("span",{className:"lbl",children:$("home.weather.city",X)})]})]})]}),(0,o.jsxs)(te,{children:[aB(X,I),l?.name?(0,o.jsxs)(o.Fragment,{children:[", ",(0,o.jsx)("span",{className:"accent",children:l.name.split(" ")[0]})]}):null,"."]})]}),"home"===C&&!B&&0===er.length&&0===es.length&&(0,o.jsx)(aF,{t:ea,onDismiss:H,onOpenPalette:b,onOpenPreferences:h}),"home"===C&&(0,o.jsx)(ao,{locale:X,pinnedAppIds:t,recentAppIds:a,apps:T,appMeta:et,onSelectApp:s,onTogglePin:n}),"apps"===C&&(0,o.jsxs)(o.Fragment,{children:[0===eo.length&&(null!==E||"All"!==F||(0,p.hasInterests)(A))&&(0,o.jsxs)(ti,{children:[(0,o.jsx)(tn,{children:$("home.emptyFiltered.title",X)}),(0,o.jsx)(tr,{children:$("home.emptyFiltered.desc",X)}),(0,o.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.sm},children:[(null!==E||"All"!==F)&&(0,o.jsx)(ts,{type:"button",onClick:()=>{P(null),N("All")},style:{background:"transparent",color:c.w4.colors.accent,border:`1px solid ${c.w4.colors.border}`},children:$("home.emptyFiltered.clear",X)}),h&&(0,o.jsx)(ts,{type:"button",onClick:h,children:$("home.emptyFiltered.cta",X)})]})]}),"All"===F&&!E&&er.length>0&&(0,o.jsxs)("div",{children:[(0,o.jsx)(ta,{children:$("pinned",X)}),(0,o.jsx)(tt,{children:er.map((e,a)=>ec(e,ed++,{pinIdx:a,total:er.length}))})]}),"All"===F&&!E&&es.length>0&&(0,o.jsxs)("div",{children:[(0,o.jsx)(ta,{children:$("recentlyUsed",X)}),(0,o.jsx)(tt,{children:es.map(e=>ec(e,ed++))})]}),ei?[..."suite"===ei.type?aR:aI.slice(1),"Other"].filter(e=>ei.groups[e]?.length>0).map(e=>(0,o.jsxs)("div",{children:[(0,o.jsx)(ta,{children:"suite"===ei.type?w[e]?.[X]??e:k(e,X)}),(0,o.jsxs)(tt,{children:[ei.groups[e].map(e=>ec(e,ed++)),("suite"===ei.type&&"AI Lab"===e||"category"===ei.type&&"Lab"===e)&&ep(ed++)]})]},e)):(0,o.jsxs)(tt,{children:[eo.map(e=>ec(e,ed++)),"Lab"===F&&ep(ed++)]})]})]})})]})]})})}let td=(0,t(82791).U)("https://eqvzakschpdemcgexjyy.supabase.co","sb_publishable_D_UOsNIA7qD3929ZzReWLw_k8d8MxWL");function tc(){return td.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin}})}function tp(){return td.auth.signOut()}let tm=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,tg=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${c.w4.colors.mainBg};
`,tu=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${c.w4.spacing.lg};
  padding: 48px 40px;
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
  animation: ${tm} 0.3s ease both;
  max-width: 360px;
  width: 100%;
  text-align: center;
`,th=l().div`
  font-size: 40px;
  line-height: 1;
`,tf=l().h2`
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  margin: 0;
`,tb=l().p`
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeBase};
  color: ${c.w4.colors.mainTextMuted};
  margin: 0;
  line-height: 1.5;
`,tx=l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 44px;
  padding: 0 ${c.w4.spacing.lg};
  background: #fff;
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: #1f1f1f;
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeBase};
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow ${c.w4.transitions.fast}, background ${c.w4.transitions.fast};

  &:hover { box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25); }
  &:active { background: #f5f5f5; }
`,ty=()=>(0,o.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 48 48",children:[(0,o.jsx)("path",{fill:"#EA4335",d:"M24 9.5c3.14 0 5.95 1.08 8.17 2.86l6.1-6.1C34.46 3.19 29.53 1 24 1 14.82 1 7.07 6.48 3.88 14.22l7.1 5.52C12.68 13.55 17.9 9.5 24 9.5z"}),(0,o.jsx)("path",{fill:"#4285F4",d:"M46.52 24.5c0-1.64-.15-3.22-.42-4.75H24v9h12.67c-.55 2.94-2.18 5.44-4.65 7.12l7.19 5.59C43.39 37.48 46.52 31.47 46.52 24.5z"}),(0,o.jsx)("path",{fill:"#FBBC05",d:"M10.98 28.26A14.57 14.57 0 0 1 9.5 24c0-1.48.25-2.91.68-4.26l-7.1-5.52A23.93 23.93 0 0 0 .5 24c0 3.87.93 7.52 2.58 10.74l7.9-6.48z"}),(0,o.jsx)("path",{fill:"#34A853",d:"M24 47c5.52 0 10.15-1.83 13.53-4.97l-7.19-5.59C28.47 37.82 26.36 38.5 24 38.5c-6.1 0-11.32-4.05-13.02-9.74l-7.9 6.48C6.07 42.54 14.45 47 24 47z"})]}),tw=l().button`
  background: none;
  border: none;
  color: ${c.w4.colors.mainTextMuted};
  font-family: ${c.w4.typography.fontFamily};
  font-size: 11px;
  cursor: pointer;
  padding: 0;
  &:hover { color: ${c.w4.colors.mainText}; }
`;function tv({appLabel:e,onBack:a}){return(0,o.jsx)(tg,{children:(0,o.jsxs)(tu,{children:[(0,o.jsx)(th,{children:"\uD83D\uDD12"}),(0,o.jsx)(tf,{children:"Sign in required"}),(0,o.jsxs)(tb,{children:[(0,o.jsx)("strong",{style:{color:"inherit"},children:e})," is only available to signed-in users."]}),(0,o.jsxs)(tx,{onClick:tc,children:[(0,o.jsx)(ty,{}),"Continue with Google"]}),(0,o.jsx)(tw,{onClick:a,children:"← Back to home"})]})})}let tk={async saveDoc(e,a,t){let{data:{user:o}}=await td.auth.getUser();if(!o)throw Error("Not authenticated");let{data:i,error:n}=await td.from("documents").insert({user_id:o.id,app_id:e,name:a,content:t,saved_at:new Date().toISOString()}).select("id").single();if(n)throw n;return i.id},async updateDoc(e,a,t){let{error:o}=await td.from("documents").update({name:a,content:t,saved_at:new Date().toISOString()}).eq("id",e);if(o)throw o},async listDocs(e){let{data:a,error:t}=await td.from("documents").select("id, app_id, name, content, saved_at").eq("app_id",e).order("saved_at",{ascending:!1});if(t)throw t;return(a??[]).map(e=>({id:e.id,appId:e.app_id,name:e.name,content:e.content,savedAt:new Date(e.saved_at).getTime()}))},async deleteDoc(e){let{error:a}=await td.from("documents").delete().eq("id",e);if(a)throw a},async putSetting(e,a){let{data:{user:t}}=await td.auth.getUser();if(!t)return;let{error:o}=await td.from("settings").upsert({user_id:t.id,key:e,value:a},{onConflict:"user_id,key"});if(o)throw o},async getSetting(e){let{data:{user:a}}=await td.auth.getUser();if(!a)return null;let{data:t,error:o}=await td.from("settings").select("value").eq("key",e).single();return o?null:t?.value??null}};var t$=JSON.parse('{"j":[{"id":"guides","name":"Guides","icon":"compass","children":[{"id":"diagrams","name":"Diagrams with Mermaid","label":"Guides — Mermaid Diagrams","icon":"git-branch","file":"guides/diagrams.md"},{"id":"prompt-lab-api-keys","name":"Prompt Lab API Keys","label":"Guides — Prompt Lab API Keys","icon":"key","file":"guides/prompt-lab-api-keys.md"}]},{"id":"github","name":"GitHub","icon":"github","children":[{"id":"github-cli","name":"GitHub CLI (gh)","label":"GitHub — CLI Reference","icon":"terminal","file":"github/cli.md"},{"id":"github-actions","name":"GitHub Actions","label":"GitHub — Actions","icon":"zap","file":"github/actions.md"}]},{"id":"claude","name":"Claude AI","icon":"bot","children":[{"id":"claude-best-practices","name":"Best Practices","label":"Claude AI — Best Practices","icon":"lightbulb","file":"claude/best-practices.md"},{"id":"claude-prompts","name":"Prompt Tips","label":"Claude AI — Prompt Tips","icon":"message-square","file":"claude/prompts.md"}]},{"id":"devtools","name":"Developer Tools","icon":"wrench","children":[{"id":"devtools-extensions","name":"Useful Extensions","label":"Dev Tools — Extensions","icon":"layout-grid","file":"devtools/extensions.md"},{"id":"devtools-commands","name":"Useful Commands","label":"Dev Tools — Commands","icon":"terminal","file":"devtools/commands.md"}]}]}'),tz=JSON.parse('{"j":[{"id":"year1","name":"1.\xba Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-numeros","name":"N\xfameros at\xe9 20","icon":"hash","file":"math/pt/year1/numbers.md"},{"id":"y1-adicao","name":"Adi\xe7\xe3o","icon":"plus","file":"math/pt/year1/addition.md"},{"id":"y1-subtracao","name":"Subtra\xe7\xe3o","icon":"minus","file":"math/pt/year1/subtraction.md"},{"id":"y1-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year1/geometria.md"},{"id":"y1-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year1/medidas.md"}]},{"id":"year2","name":"2.\xba Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-numeros","name":"N\xfameros at\xe9 100","icon":"hash","file":"math/pt/year2/numbers.md"},{"id":"y2-adicao","name":"Adi\xe7\xe3o com Transporte","icon":"plus","file":"math/pt/year2/addition.md"},{"id":"y2-subtracao","name":"Subtra\xe7\xe3o com Empr\xe9stimo","icon":"minus","file":"math/pt/year2/subtraction.md"},{"id":"y2-tabuadas","name":"Tabuadas \xd7 2, \xd7 5, \xd7 10","icon":"x","file":"math/pt/year2/multiplication.md"},{"id":"y2-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year2/geometria.md"},{"id":"y2-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year2/medidas.md"}]},{"id":"year3","name":"3.\xba Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-numeros","name":"N\xfameros at\xe9 1000","icon":"hash","file":"math/pt/year3/numbers.md"},{"id":"y3-multiplicacao","name":"Tabuadas \xd7 3 ao \xd7 9","icon":"x","file":"math/pt/year3/multiplication.md"},{"id":"y3-divisao","name":"Divis\xe3o","icon":"slash","file":"math/pt/year3/division.md"},{"id":"y3-fracoes","name":"Fra\xe7\xf5es","icon":"pie-chart","file":"math/pt/year3/fractions.md"},{"id":"y3-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year3/geometria.md"},{"id":"y3-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year3/medidas.md"}]},{"id":"year4","name":"4.\xba Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-numeros","name":"N\xfameros at\xe9 1 000 000","icon":"hash","file":"math/pt/year4/numbers.md"},{"id":"y4-multiplicacao","name":"Multiplica\xe7\xe3o","icon":"x","file":"math/pt/year4/multiplication.md"},{"id":"y4-divisao","name":"Divis\xe3o com Resto","icon":"slash","file":"math/pt/year4/division.md"},{"id":"y4-decimais","name":"N\xfameros Decimais","icon":"circle-dot","file":"math/pt/year4/decimals.md"},{"id":"y4-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year4/geometria.md"},{"id":"y4-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year4/medidas.md"},{"id":"y4-dados","name":"Tratamento de Dados","icon":"bar-chart-2","file":"math/pt/year4/dados.md"}]},{"id":"resources","name":"Recursos","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-tabuadas","name":"Tabuadas","icon":"grid","file":"math/pt/resources/tabuadas.md"},{"id":"res-formas","name":"Formas Geom\xe9tricas","icon":"hexagon","file":"math/pt/resources/formas.md"},{"id":"res-areas","name":"\xc1reas e Per\xedmetros","icon":"square","file":"math/pt/resources/areas.md"},{"id":"res-unidades","name":"Unidades de Medida","icon":"ruler","file":"math/pt/resources/unidades.md"},{"id":"res-romanos","name":"N\xfameros Romanos","icon":"landmark","file":"math/pt/resources/romanos.md"},{"id":"res-relogio","name":"Rel\xf3gio Interativo","icon":"clock","file":"math/pt/resources/relogio.md"}]}]}'),tM=JSON.parse('{"j":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-numeros","name":"Numbers to 20","icon":"hash","file":"math/en/year1/numbers.md"},{"id":"y1-adicao","name":"Addition","icon":"plus","file":"math/en/year1/addition.md"},{"id":"y1-subtracao","name":"Subtraction","icon":"minus","file":"math/en/year1/subtraction.md"},{"id":"y1-geometria","name":"Geometry","icon":"triangle","file":"math/en/year1/geometry.md"},{"id":"y1-medidas","name":"Measurements","icon":"ruler","file":"math/en/year1/measures.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-numeros","name":"Numbers to 100","icon":"hash","file":"math/en/year2/numbers.md"},{"id":"y2-adicao","name":"Addition with Carrying","icon":"plus","file":"math/en/year2/addition.md"},{"id":"y2-subtracao","name":"Subtraction with Borrowing","icon":"minus","file":"math/en/year2/subtraction.md"},{"id":"y2-tabuadas","name":"Times Tables \xd7 2, \xd7 5, \xd7 10","icon":"x","file":"math/en/year2/multiplication.md"},{"id":"y2-geometria","name":"Geometry","icon":"triangle","file":"math/en/year2/geometry.md"},{"id":"y2-medidas","name":"Measurements","icon":"ruler","file":"math/en/year2/measures.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-numeros","name":"Numbers to 1000","icon":"hash","file":"math/en/year3/numbers.md"},{"id":"y3-multiplicacao","name":"Times Tables \xd7 3 to \xd7 9","icon":"x","file":"math/en/year3/multiplication.md"},{"id":"y3-divisao","name":"Division","icon":"slash","file":"math/en/year3/division.md"},{"id":"y3-fracoes","name":"Fractions","icon":"pie-chart","file":"math/en/year3/fractions.md"},{"id":"y3-geometria","name":"Geometry","icon":"triangle","file":"math/en/year3/geometry.md"},{"id":"y3-medidas","name":"Measurements","icon":"ruler","file":"math/en/year3/measures.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-numeros","name":"Numbers to 1 000 000","icon":"hash","file":"math/en/year4/numbers.md"},{"id":"y4-multiplicacao","name":"Multiplication","icon":"x","file":"math/en/year4/multiplication.md"},{"id":"y4-divisao","name":"Division with Remainder","icon":"slash","file":"math/en/year4/division.md"},{"id":"y4-decimais","name":"Decimal Numbers","icon":"circle-dot","file":"math/en/year4/decimals.md"},{"id":"y4-geometria","name":"Geometry","icon":"triangle","file":"math/en/year4/geometry.md"},{"id":"y4-medidas","name":"Measurements","icon":"ruler","file":"math/en/year4/measures.md"},{"id":"y4-dados","name":"Data Handling","icon":"bar-chart-2","file":"math/en/year4/data.md"}]},{"id":"resources","name":"Resources","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-tabuadas","name":"Times Tables","icon":"grid","file":"math/en/resources/timestables.md"},{"id":"res-formas","name":"Geometric Shapes","icon":"hexagon","file":"math/en/resources/shapes.md"},{"id":"res-areas","name":"Areas & Perimeters","icon":"square","file":"math/en/resources/areas.md"},{"id":"res-unidades","name":"Units of Measurement","icon":"ruler","file":"math/en/resources/units.md"},{"id":"res-romanos","name":"Roman Numerals","icon":"landmark","file":"math/en/resources/roman.md"},{"id":"res-relogio","name":"Interactive Clock","icon":"clock","file":"math/en/resources/clock.md"}]}]}'),tj=JSON.parse('{"j":[{"id":"year1","name":"1.\xba Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year1/leitura.md"},{"id":"y1-gramatica","name":"Gram\xe1tica","icon":"type","file":"portuguese/pt/year1/gramatica.md"},{"id":"y1-vocabulario","name":"Vocabul\xe1rio","icon":"list","file":"portuguese/pt/year1/vocabulario.md"},{"id":"y1-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year1/ortografia.md"}]},{"id":"year2","name":"2.\xba Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year2/leitura.md"},{"id":"y2-gramatica","name":"Gram\xe1tica","icon":"type","file":"portuguese/pt/year2/gramatica.md"},{"id":"y2-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year2/texto.md"},{"id":"y2-vocabulario","name":"Vocabul\xe1rio","icon":"list","file":"portuguese/pt/year2/vocabulario.md"},{"id":"y2-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year2/ortografia.md"}]},{"id":"year3","name":"3.\xba Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year3/leitura.md"},{"id":"y3-gramatica","name":"Gram\xe1tica","icon":"type","file":"portuguese/pt/year3/gramatica.md"},{"id":"y3-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year3/texto.md"},{"id":"y3-vocabulario","name":"Vocabul\xe1rio","icon":"list","file":"portuguese/pt/year3/vocabulario.md"},{"id":"y3-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year3/ortografia.md"}]},{"id":"year4","name":"4.\xba Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year4/leitura.md"},{"id":"y4-gramatica","name":"Gram\xe1tica","icon":"type","file":"portuguese/pt/year4/gramatica.md"},{"id":"y4-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year4/texto.md"},{"id":"y4-vocabulario","name":"Vocabul\xe1rio","icon":"list","file":"portuguese/pt/year4/vocabulario.md"},{"id":"y4-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year4/ortografia.md"}]},{"id":"resources","name":"Recursos","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-alfabeto","name":"Alfabeto e Sons","icon":"a-large-small","file":"portuguese/pt/resources/alfabeto.md"},{"id":"res-pontuacao","name":"Sinais de Pontua\xe7\xe3o","icon":"circle-dot","file":"portuguese/pt/resources/pontuacao.md"},{"id":"res-classes","name":"Classes de Palavras","icon":"layers","file":"portuguese/pt/resources/classes.md"},{"id":"res-verbos","name":"Verbos — Conjuga\xe7\xe3o","icon":"zap","file":"portuguese/pt/resources/verbos.md"}]}]}'),tS=JSON.parse('{"j":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year1/reading.md"},{"id":"y1-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year1/grammar.md"},{"id":"y1-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year1/vocabulary.md"},{"id":"y1-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year1/spelling.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year2/reading.md"},{"id":"y2-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year2/grammar.md"},{"id":"y2-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year2/texttypes.md"},{"id":"y2-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year2/vocabulary.md"},{"id":"y2-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year2/spelling.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year3/reading.md"},{"id":"y3-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year3/grammar.md"},{"id":"y3-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year3/texttypes.md"},{"id":"y3-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year3/vocabulary.md"},{"id":"y3-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year3/spelling.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year4/reading.md"},{"id":"y4-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year4/grammar.md"},{"id":"y4-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year4/texttypes.md"},{"id":"y4-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year4/vocabulary.md"},{"id":"y4-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year4/spelling.md"}]},{"id":"resources","name":"Resources","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-alfabeto","name":"Alphabet & Sounds","icon":"a-large-small","file":"portuguese/en/resources/alphabet.md"},{"id":"res-pontuacao","name":"Punctuation Marks","icon":"circle-dot","file":"portuguese/en/resources/punctuation.md"},{"id":"res-classes","name":"Word Classes","icon":"layers","file":"portuguese/en/resources/wordclasses.md"},{"id":"res-verbos","name":"Verb Conjugation","icon":"zap","file":"portuguese/en/resources/verbs.md"}]}]}'),tA=JSON.parse('{"j":[{"id":"year1","name":"1.\xba Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-corpo","name":"O Meu Corpo","icon":"activity","file":"science/pt/year1/corpo.md"},{"id":"y1-familia","name":"A Minha Fam\xedlia","icon":"heart","file":"science/pt/year1/familia.md"},{"id":"y1-escola","name":"A Minha Escola","icon":"map","file":"science/pt/year1/escola.md"},{"id":"y1-seres-vivos","name":"Os Seres Vivos","icon":"feather","file":"science/pt/year1/seresvivos.md"},{"id":"y1-estacoes","name":"Esta\xe7\xf5es do Ano","icon":"sun","file":"science/pt/year1/estacoes.md"}]},{"id":"year2","name":"2.\xba Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year2/corpo.md"},{"id":"y2-saude","name":"Sa\xfade e Higiene","icon":"heart","file":"science/pt/year2/saude.md"},{"id":"y2-animais","name":"Os Animais","icon":"feather","file":"science/pt/year2/animais.md"},{"id":"y2-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year2/plantas.md"},{"id":"y2-transportes","name":"Meios de Transporte","icon":"truck","file":"science/pt/year2/transportes.md"},{"id":"y2-orientacao","name":"Orienta\xe7\xe3o e Mapas","icon":"compass","file":"science/pt/year2/orientacao.md"}]},{"id":"year3","name":"3.\xba Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year3/corpo.md"},{"id":"y3-saude","name":"Sa\xfade e Higiene","icon":"heart","file":"science/pt/year3/saude.md"},{"id":"y3-animais","name":"Os Animais","icon":"feather","file":"science/pt/year3/animais.md"},{"id":"y3-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year3/plantas.md"},{"id":"y3-portugal","name":"Portugal","icon":"map","file":"science/pt/year3/portugal.md"},{"id":"y3-rochas","name":"Rochas e Solo","icon":"mountain","file":"science/pt/year3/rochas.md"},{"id":"y3-astros","name":"Os Astros","icon":"star","file":"science/pt/year3/astros.md"}]},{"id":"year4","name":"4.\xba Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year4/corpo.md"},{"id":"y4-saude","name":"Sa\xfade e Higiene","icon":"heart","file":"science/pt/year4/saude.md"},{"id":"y4-animais","name":"Os Animais","icon":"feather","file":"science/pt/year4/animais.md"},{"id":"y4-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year4/plantas.md"},{"id":"y4-portugal","name":"Portugal","icon":"map","file":"science/pt/year4/portugal.md"},{"id":"y4-historia","name":"Hist\xf3ria de Portugal","icon":"landmark","file":"science/pt/year4/historia.md"},{"id":"y4-economia","name":"Atividades Econ\xf3micas","icon":"briefcase","file":"science/pt/year4/economia.md"},{"id":"y4-rios","name":"Rios e Serras","icon":"waves","file":"science/pt/year4/rios.md"}]},{"id":"resources","name":"Recursos","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/resources/corpo.md"},{"id":"res-agua","name":"O Ciclo da \xc1gua","icon":"droplets","file":"science/pt/resources/agua.md"},{"id":"res-solar","name":"O Sistema Solar","icon":"sun","file":"science/pt/resources/solar.md"},{"id":"res-animais","name":"Classifica\xe7\xe3o dos Animais","icon":"feather","file":"science/pt/resources/animais.md"}]}]}'),tT=JSON.parse('{"j":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-corpo","name":"My Body","icon":"activity","file":"science/en/year1/body.md"},{"id":"y1-familia","name":"My Family","icon":"heart","file":"science/en/year1/family.md"},{"id":"y1-escola","name":"My School","icon":"map","file":"science/en/year1/school.md"},{"id":"y1-seres-vivos","name":"Living Things","icon":"feather","file":"science/en/year1/livingthings.md"},{"id":"y1-estacoes","name":"Seasons of the Year","icon":"sun","file":"science/en/year1/seasons.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-corpo","name":"The Human Body","icon":"activity","file":"science/en/year2/body.md"},{"id":"y2-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year2/health.md"},{"id":"y2-animais","name":"Animals","icon":"feather","file":"science/en/year2/animals.md"},{"id":"y2-plantas","name":"Plants","icon":"leaf","file":"science/en/year2/plants.md"},{"id":"y2-transportes","name":"Transport","icon":"truck","file":"science/en/year2/transport.md"},{"id":"y2-orientacao","name":"Orientation & Maps","icon":"compass","file":"science/en/year2/orientation.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-corpo","name":"The Human Body","icon":"activity","file":"science/en/year3/body.md"},{"id":"y3-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year3/health.md"},{"id":"y3-animais","name":"Animals","icon":"feather","file":"science/en/year3/animals.md"},{"id":"y3-plantas","name":"Plants","icon":"leaf","file":"science/en/year3/plants.md"},{"id":"y3-portugal","name":"Portugal","icon":"map","file":"science/en/year3/portugal.md"},{"id":"y3-rochas","name":"Rocks & Soil","icon":"mountain","file":"science/en/year3/rocks.md"},{"id":"y3-astros","name":"Space & Stars","icon":"star","file":"science/en/year3/space.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-corpo","name":"The Human Body","icon":"activity","file":"science/en/year4/body.md"},{"id":"y4-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year4/health.md"},{"id":"y4-animais","name":"Animals","icon":"feather","file":"science/en/year4/animals.md"},{"id":"y4-plantas","name":"Plants","icon":"leaf","file":"science/en/year4/plants.md"},{"id":"y4-portugal","name":"Portugal","icon":"map","file":"science/en/year4/portugal.md"},{"id":"y4-historia","name":"History of Portugal","icon":"landmark","file":"science/en/year4/history.md"},{"id":"y4-economia","name":"Economic Activities","icon":"briefcase","file":"science/en/year4/economy.md"},{"id":"y4-rios","name":"Rivers & Mountains","icon":"waves","file":"science/en/year4/rivers.md"}]},{"id":"resources","name":"Resources","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-corpo","name":"The Human Body","icon":"activity","file":"science/en/resources/body.md"},{"id":"res-agua","name":"The Water Cycle","icon":"droplets","file":"science/en/resources/water.md"},{"id":"res-solar","name":"The Solar System","icon":"sun","file":"science/en/resources/solar.md"},{"id":"res-animais","name":"Animal Classification","icon":"feather","file":"science/en/resources/animals.md"}]}]}'),tC=JSON.parse('{"j":[{"id":"year1","name":"1.\xba Ano","icon":"①","defaultOpen":false,"children":[{"id":"e1-greetings","name":"Cumprimentos","icon":"hand","file":"english/pt/year1/greetings.md"},{"id":"e1-numbers","name":"N\xfameros 1–10","icon":"hash","file":"english/pt/year1/numbers.md"},{"id":"e1-colors","name":"Cores","icon":"palette","file":"english/pt/year1/colors.md"},{"id":"e1-animals","name":"Animais","icon":"feather","file":"english/pt/year1/animals.md"},{"id":"e1-family","name":"Fam\xedlia","icon":"heart","file":"english/pt/year1/family.md"},{"id":"e1-classroom","name":"Sala de Aula","icon":"map","file":"english/pt/year1/classroom.md"}]},{"id":"year2","name":"2.\xba Ano","icon":"②","defaultOpen":false,"children":[{"id":"e2-food","name":"Comida","icon":"apple","file":"english/pt/year2/food.md"},{"id":"e2-body","name":"Corpo Humano","icon":"activity","file":"english/pt/year2/body.md"},{"id":"e2-weather","name":"Tempo e Clima","icon":"cloud","file":"english/pt/year2/weather.md"},{"id":"e2-days","name":"Dias e Meses","icon":"calendar","file":"english/pt/year2/days.md"},{"id":"e2-clothes","name":"Roupa","icon":"shirt","file":"english/pt/year2/clothes.md"},{"id":"e2-house","name":"A Casa","icon":"home","file":"english/pt/year2/house.md"}]},{"id":"year3","name":"3.\xba Ano","icon":"③","defaultOpen":false,"children":[{"id":"e3-routines","name":"Rotinas Di\xe1rias","icon":"clock","file":"english/pt/year3/routines.md"},{"id":"e3-sports","name":"Desportos","icon":"trophy","file":"english/pt/year3/sports.md"},{"id":"e3-nature","name":"Natureza","icon":"leaf","file":"english/pt/year3/nature.md"},{"id":"e3-directions","name":"Dire\xe7\xf5es","icon":"compass","file":"english/pt/year3/directions.md"},{"id":"e3-time","name":"As Horas","icon":"watch","file":"english/pt/year3/time.md"},{"id":"e3-jobs","name":"Profiss\xf5es","icon":"briefcase","file":"english/pt/year3/jobs.md"}]},{"id":"year4","name":"4.\xba Ano","icon":"④","defaultOpen":false,"children":[{"id":"e4-past","name":"Passado Simples","icon":"clock","file":"english/pt/year4/past.md"},{"id":"e4-comparatives","name":"Comparativos","icon":"bar-chart-2","file":"english/pt/year4/comparatives.md"},{"id":"e4-travel","name":"Viagens","icon":"plane","file":"english/pt/year4/travel.md"},{"id":"e4-media","name":"M\xe9dia e Tecnologia","icon":"monitor","file":"english/pt/year4/media.md"},{"id":"e4-health","name":"Sa\xfade","icon":"heart","file":"english/pt/year4/health.md"},{"id":"e4-environment","name":"Ambiente","icon":"globe","file":"english/pt/year4/environment.md"}]},{"id":"year5","name":"5.\xba Ano","icon":"⑤","defaultOpen":false,"children":[{"id":"e5-future","name":"Futuro Simples","icon":"arrow-right","file":"english/pt/year5/future.md"},{"id":"e5-conditionals","name":"Condicionais","icon":"git-branch","file":"english/pt/year5/conditionals.md"},{"id":"e5-culture","name":"Cultura","icon":"landmark","file":"english/pt/year5/culture.md"},{"id":"e5-technology","name":"Tecnologia","icon":"cpu","file":"english/pt/year5/technology.md"},{"id":"e5-debate","name":"Debate e Opini\xe3o","icon":"message-circle","file":"english/pt/year5/debate.md"},{"id":"e5-writing","name":"Escrita Criativa","icon":"pen-tool","file":"english/pt/year5/writing.md"}]},{"id":"resources","name":"Recursos","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-eng-vocab","name":"Vocabul\xe1rio Essencial","icon":"list","file":"english/pt/resources/vocabulario.md"},{"id":"res-eng-verbs","name":"Tabela de Verbos","icon":"zap","file":"english/pt/resources/verbos.md"},{"id":"res-eng-phrases","name":"Frases \xdateis","icon":"message-square","file":"english/pt/resources/frases.md"},{"id":"res-eng-pronunciation","name":"Guia de Pron\xfancia","icon":"volume-2","file":"english/pt/resources/pronuncia.md"}]}]}'),tL=JSON.parse('{"j":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"e1-greetings","name":"Greetings","icon":"hand","file":"english/en/year1/greetings.md"},{"id":"e1-numbers","name":"Numbers 1–10","icon":"hash","file":"english/en/year1/numbers.md"},{"id":"e1-colors","name":"Colors","icon":"palette","file":"english/en/year1/colors.md"},{"id":"e1-animals","name":"Animals","icon":"feather","file":"english/en/year1/animals.md"},{"id":"e1-family","name":"Family","icon":"heart","file":"english/en/year1/family.md"},{"id":"e1-classroom","name":"Classroom","icon":"map","file":"english/en/year1/classroom.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"e2-food","name":"Food","icon":"apple","file":"english/en/year2/food.md"},{"id":"e2-body","name":"Body Parts","icon":"activity","file":"english/en/year2/body.md"},{"id":"e2-weather","name":"Weather","icon":"cloud","file":"english/en/year2/weather.md"},{"id":"e2-days","name":"Days & Months","icon":"calendar","file":"english/en/year2/days.md"},{"id":"e2-clothes","name":"Clothes","icon":"shirt","file":"english/en/year2/clothes.md"},{"id":"e2-house","name":"The House","icon":"home","file":"english/en/year2/house.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"e3-routines","name":"Daily Routines","icon":"clock","file":"english/en/year3/routines.md"},{"id":"e3-sports","name":"Sports","icon":"trophy","file":"english/en/year3/sports.md"},{"id":"e3-nature","name":"Nature","icon":"leaf","file":"english/en/year3/nature.md"},{"id":"e3-directions","name":"Directions","icon":"compass","file":"english/en/year3/directions.md"},{"id":"e3-time","name":"Telling Time","icon":"watch","file":"english/en/year3/time.md"},{"id":"e3-jobs","name":"Jobs","icon":"briefcase","file":"english/en/year3/jobs.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"e4-past","name":"Simple Past","icon":"clock","file":"english/en/year4/past.md"},{"id":"e4-comparatives","name":"Comparatives","icon":"bar-chart-2","file":"english/en/year4/comparatives.md"},{"id":"e4-travel","name":"Travel","icon":"plane","file":"english/en/year4/travel.md"},{"id":"e4-media","name":"Media & Technology","icon":"monitor","file":"english/en/year4/media.md"},{"id":"e4-health","name":"Health","icon":"heart","file":"english/en/year4/health.md"},{"id":"e4-environment","name":"Environment","icon":"globe","file":"english/en/year4/environment.md"}]},{"id":"year5","name":"Year 5","icon":"⑤","defaultOpen":false,"children":[{"id":"e5-future","name":"Simple Future","icon":"arrow-right","file":"english/en/year5/future.md"},{"id":"e5-conditionals","name":"Conditionals","icon":"git-branch","file":"english/en/year5/conditionals.md"},{"id":"e5-culture","name":"Culture","icon":"landmark","file":"english/en/year5/culture.md"},{"id":"e5-technology","name":"Technology","icon":"cpu","file":"english/en/year5/technology.md"},{"id":"e5-debate","name":"Debate & Opinion","icon":"message-circle","file":"english/en/year5/debate.md"},{"id":"e5-writing","name":"Creative Writing","icon":"pen-tool","file":"english/en/year5/writing.md"}]},{"id":"resources","name":"Resources","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-eng-vocab","name":"Essential Vocabulary","icon":"list","file":"english/en/resources/vocabulary.md"},{"id":"res-eng-verbs","name":"Verb Tables","icon":"zap","file":"english/en/resources/verbs.md"},{"id":"res-eng-phrases","name":"Useful Phrases","icon":"message-square","file":"english/en/resources/phrases.md"},{"id":"res-eng-pronunciation","name":"Pronunciation Guide","icon":"volume-2","file":"english/en/resources/pronunciation.md"}]}]}');let tF=["pad","jsonexplorer","playground","regexlab","codediff","promptlab"],tN={pad:"#/pad",jsonexplorer:"#/jsonexplorer",playground:"#/playground",regexlab:"#/regexlab",codediff:"#/codediff",promptlab:"#/promptlab"},tE={pad:"file",jsonexplorer:"code",playground:"code",regexlab:"code",codediff:"code",promptlab:"message"};function tP(e,a=[]){let t=[];for(let o of e){let e=[...a,o.name];o.file&&t.push({id:o.id,label:o.label??o.name,subtitle:a.length>0?a.join(" \xb7 "):void 0,trail:e}),o.children?.length&&t.push(...tP(o.children,e))}return t}let tI=tP(t$.j),tR=[{hashPrefix:"math",label:"Matem\xe1tica \xb7 Maths",entries:[...tP(tz.j),...tP(tM.j)]},{hashPrefix:"portugues",label:"Portugu\xeas",entries:[...tP(tj.j),...tP(tS.j)]},{hashPrefix:"estudodomeio",label:"Estudo do Meio \xb7 Science",entries:[...tP(tA.j),...tP(tT.j)]},{hashPrefix:"ingles",label:"Ingl\xeas \xb7 English",entries:[...tP(tC.j),...tP(tL.j)]}],tD=[{id:"saved-docs",async search(e){if(!e.trim())return[];let a=e.toLowerCase(),t=[];for(let e of(await Promise.allSettled(tF.map(async e=>{let a=await (0,c.Iu)(e);return{appId:e,docs:a}})))){if("fulfilled"!==e.status)continue;let{appId:o,docs:i}=e.value;for(let e of i.filter(e=>e.name.toLowerCase().includes(a)).slice(0,3))t.push({id:`doc:${e.id}`,label:e.name,subtitle:o,hash:`${tN[o]}?doc=${e.id}`,iconName:tE[o],category:"doc"})}return t.slice(0,3)}},{id:"agenda",async search(e){if(!e.trim())return[];let a=e.toLowerCase(),t=null;try{t=await (0,c.PL)("agenda:events")}catch{return[]}if(!t)return[];let o={};try{o=JSON.parse(t)}catch{return[]}let i=[],n=new Date;for(let e=0;e<=6;e++){let t=new Date(n);t.setDate(t.getDate()+e);let r=t.toISOString().slice(0,10);for(let e of o[r]??[])if(e.title.toLowerCase().includes(a)&&i.push({id:`agenda:${e.id}`,label:e.title,subtitle:`${r} \xb7 ${e.time}`,hash:"#/daily",iconName:"calendar",category:"agenda"}),i.length>=3)break;if(i.length>=3)break}return i}},{id:"reading",async search(e){if(!e.trim())return[];let a=e.toLowerCase(),t=null;try{t=await (0,c.PL)("reading:state")}catch{return[]}if(!t)return[];let o={current:null,finished:[]};try{o=JSON.parse(t)}catch{return[]}let i=[];for(let e of(o.current&&o.current.title.toLowerCase().includes(a)&&i.push({id:"reading:current",label:o.current.title,subtitle:`${o.current.author} \xb7 p${o.current.page}/${o.current.pages}`,hash:"#/home",iconName:"book",category:"reading"}),o.finished)){if(i.length>=3)break;e.title.toLowerCase().includes(a)&&i.push({id:`reading:done:${e.finishedAt}`,label:e.title,subtitle:e.author,hash:"#/home",iconName:"book",category:"reading"})}return i.slice(0,3)}},{id:"blog-docs",async search(e){if(!e.trim())return[];let a=e.toLowerCase(),t=[];for(let e of tI){if(t.length>=3)break;`${e.label} ${e.subtitle??""}`.toLowerCase().includes(a)&&t.push({id:`blog:${e.id}`,label:e.label,subtitle:e.subtitle,hash:`#/blog/${e.id}`,iconName:"book",category:"blog"})}return t}},{id:"school-lessons",async search(e){if(!e.trim())return[];let a=e.toLowerCase(),t=[],o=new Set;for(let e of tR){for(let i of e.entries){if(t.length>=3)break;let n=`${e.hashPrefix}:${i.id}`;!o.has(n)&&`${i.label} ${i.subtitle??""}`.toLowerCase().includes(a)&&(o.add(n),t.push({id:`school:${n}`,label:i.label,subtitle:`${e.label}${i.subtitle?` \xb7 ${i.subtitle}`:""}`,hash:`#/${e.hashPrefix}/${i.id}`,iconName:"book",category:"school"}))}if(t.length>=3)break}return t}}];async function tB(e){if(!e.trim())return[];let a=await Promise.allSettled(tD.map(a=>a.search(e))),t=[];for(let e of a)if("fulfilled"===e.status&&t.push(...e.value),t.length>=15)break;return t.slice(0,15)}let tO=["palette.ask.suggest.summarizeDay","palette.ask.suggest.whatsTrending"],tH=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,t_=(0,d.keyframes)`
  from { opacity: 0; transform: scale(0.97) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,tK=l().div`
  position: fixed;
  inset: 0;
  z-index: ${c.w4.zIndex.modal};
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10vh;
  animation: ${tH} ${c.w4.transitions.fast};

  @media (max-width: ${c.w4.breakpoints.md}) {
    padding-top: 0;
    align-items: flex-end;
  }
`,tU=l().div`
  width: 780px;
  max-width: calc(100vw - 24px);
  background: ${c.w4.colors.surfaceRaised};
  border: 1px solid ${c.w4.colors.borderStrong};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${c.w4.elevation.lg};
  animation: ${t_} ${c.w4.transitions.base};
  font-family: ${c.w4.typography.fontFamily};
  color: ${c.w4.colors.mainText};
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: ${c.w4.breakpoints.md}) {
    border-radius: 16px 16px 0 0;
    height: 84vh;
  }
`,tq=l().div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 22px;
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
`,tG=l().div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${({active:e})=>e?c.w4.colors.accent:c.w4.colors.mainTextMuted};
  transition: color ${c.w4.transitions.fast};
`,tW=l().input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeMd};
  color: ${c.w4.colors.mainText};
  letter-spacing: -0.2px;
  caret-color: ${c.w4.colors.accent};

  &::placeholder {
    color: ${c.w4.colors.mainTextFaint};
  }
`,tY=l().kbd`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.04em;
  color: ${c.w4.colors.mainTextFaint};
  padding: 3px 8px;
  border: 1px solid ${c.w4.colors.border};
  border-radius: 5px;
  background: transparent;
`,tV=l().div`
  padding: 10px 16px;
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
`,tJ=l().div`
  flex: 1;
  overflow-y: auto;
  padding: 6px 0 12px;
  min-height: 140px;
  max-height: 60vh;

  @media (max-width: ${c.w4.breakpoints.md}) {
    max-height: none;
  }
`,tQ=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 22px 6px;
`,tZ=l().span`
  font-size: 11px;
  font-weight: 700;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
  opacity: 0.65;
`,tX=l().span`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextFaint};
`,t0=l()("div",{shouldForwardProp:e=>"selected"!==e})`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 22px;
  cursor: pointer;
  background: ${({selected:e})=>e?c.w4.colors.accentMuted:"transparent"};
  transition: background ${c.w4.transitions.fast};

  &:hover { background: ${c.w4.colors.accentMuted}; }
`,t1=l()("div",{shouldForwardProp:e=>"tintColor"!==e&&"selected"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  background: ${({tintColor:e})=>`${e}1a`};
  border: 1px solid ${({tintColor:e,selected:a})=>a?`${e}66`:`${e}26`};
  transition: ${c.w4.transitions.fast};
`,t4=l()("div",{shouldForwardProp:e=>"tintColor"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({tintColor:e})=>`${e}26`};
  color: ${({tintColor:e})=>e};
  border: 1px solid ${({tintColor:e})=>`${e}40`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,t2=l().div`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${c.w4.colors.mainTextMuted};
  background: transparent;
  flex-shrink: 0;
`,t5=l()("div",{shouldForwardProp:e=>"tintColor"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  background: ${({tintColor:e})=>`${e}22`};
  border: 1px solid ${({tintColor:e})=>`${e}40`};
`,t3=l().div`
  flex: 1;
  min-width: 0;
`,t8=l()("div",{shouldForwardProp:e=>"selected"!==e})`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: ${({selected:e})=>e?c.w4.colors.accent:c.w4.colors.mainText};
  line-height: 1.25;
`,t6=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextFaint};
  margin-top: 3px;
  letter-spacing: 0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,t7=l().span`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
  white-space: nowrap;
`,t9=l().div`
  display: inline-flex;
  gap: 4px;
  flex-shrink: 0;
`,oe=l().kbd`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  border-radius: 5px;
  border: 1px solid ${c.w4.colors.border};
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  background: transparent;
`,oa=l().div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0;
  min-height: 180px;
  max-height: 60vh;

  @media (max-width: ${c.w4.breakpoints.md}) {
    max-height: none;
  }
`,ot=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 22px 24px;
  gap: 16px;
`,oo=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextFaint};
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,oi=l().div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`,on=l().button`
  padding: 8px 14px;
  border-radius: 8px;
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  color: ${c.w4.colors.mainText};
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: ${c.w4.transitions.fast};
  line-height: 1.4;

  &:hover {
    border-color: ${c.w4.colors.accent};
    color: ${c.w4.colors.accent};
    background: ${c.w4.colors.accentMuted};
  }
  &:focus-visible { ${c.w4.focusRing} }
`,or=l().div`
  display: flex;
  flex-direction: column;
  padding: 12px 22px 16px;
  gap: 16px;
`,os=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ol=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextFaint};
  margin-bottom: 2px;
`,od=l().div`
  font-size: 14px;
  color: ${c.w4.colors.mainText};
  line-height: 1.5;
  font-weight: 500;
`,oc=(0,d.keyframes)`
  0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
  40%           { opacity: 1;   transform: scale(1);   }
`,op=l().div`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 4px 0;

  span {
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${c.w4.colors.accent};
    animation: ${oc} 1.4s ease-in-out infinite;

    &:nth-of-type(2) { animation-delay: 0.2s; }
    &:nth-of-type(3) { animation-delay: 0.4s; }
  }
`,om=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.danger};
  font-family: ${c.w4.typography.fontFamilyMono};
`,og=l().div`
  padding: 40px 24px 44px;
  text-align: center;
  color: ${c.w4.colors.mainTextMuted};

  .icon {
    display: inline-flex;
    width: 36px;
    height: 36px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${c.w4.colors.surfaceHover};
    margin-bottom: 10px;
  }
  .title { font-size: ${c.w4.typography.fontSizeSm}; color: ${c.w4.colors.mainText}; font-weight: 500; }
  .hint  { font-size: 11px; margin-top: 4px; line-height: 1.5; }
  .query { font-family: ${c.w4.typography.fontFamilyMono}; color: ${c.w4.colors.mainText}; }
`,ou=l().div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 10px 22px;
  border-top: 1px solid ${c.w4.colors.borderSubtle};

  @media (max-width: ${c.w4.breakpoints.md}) {
    gap: 12px;
    padding: 8px 16px;
  }
`,oh=l().span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
`;function of(e,a){if(!a)return!0;let t=a.toLowerCase();return e.label.toLowerCase().includes(t)||(e.meta?.toLowerCase().includes(t)??!1)}function ob({apps:e,recentIds:a,suites:t=[],games:r=[],actions:s=[],hasAsk:l=!1,groqKey:d,locale:u,initialScope:h,onNavigate:f,onClose:b}){let x=(0,i.useMemo)(()=>(0,g.Nx)(u,el),[u]),[y,w]=(0,i.useState)(""),[v,k]=(0,i.useState)(()=>"ask"!==h||l?h??"all":"all"),[$,z]=(0,i.useState)(0),[M,j]=(0,i.useState)([]),[S,A]=(0,i.useState)(!1),T=(0,i.useRef)([]),C=(0,i.useRef)(null),L=(0,i.useRef)(null),F=(0,i.useRef)(null),N=(0,i.useRef)(null),[E,P]=(0,i.useState)([]),I=(0,i.useRef)(null);(0,i.useEffect)(()=>{if("ask"!==v)return(null!==I.current&&clearTimeout(I.current),y.trim())?(I.current=setTimeout(()=>{tB(y).then(P)},200),()=>{null!==I.current&&clearTimeout(I.current)}):void P([])},[y,v]),(0,i.useEffect)(()=>(C.current?.focus(),()=>{N.current?.abort()}),[]),(0,i.useEffect)(()=>{T.current=M},[M]),(0,i.useEffect)(()=>{F.current?.scrollIntoView({behavior:"smooth"})},[M,S]);let R=(0,i.useMemo)(()=>{let o=new Set(a),i=e.map(e=>({id:`app:${e.id}`,kind:"app",label:e.label,meta:e.description,isRecent:o.has(e.id),appIcon:{iconName:e.icon,color:e.color},onConfirm:()=>{f(e.hash),b()}}));return[...t.map(e=>({id:`suite:${e.id}`,kind:"suite",label:e.name,meta:e.sub,glyphIcon:{iconName:e.iconName,color:e.color},shortcut:e.shortcut,onConfirm:()=>{e.onConfirm(),b()}})),...i,...r.map(e=>({id:`game:${e.id}`,kind:"game",label:e.name,meta:x("palette.meta.game"),gameGlyph:{iconName:e.iconName,color:e.color},hash:e.hash,onConfirm:()=>{f(e.hash),b()}})),...s.map(e=>({id:`action:${e.id}`,kind:"action",label:e.label,meta:e.meta,glyphIcon:{iconName:e.iconName,color:e.color??c.w4.colors.accent},shortcut:e.shortcut,onConfirm:()=>{e.onClick(),b()}}))]},[e,t,r,s,a,f,b,x]),D=(0,i.useMemo)(()=>E.map(e=>({id:e.id,kind:"action",label:e.label,meta:e.subtitle,glyphIcon:e.iconName?{iconName:e.iconName,color:c.w4.colors.mainTextMuted}:void 0,hash:e.hash,onConfirm:()=>{f(e.hash),b()}})),[E,f,b]),B=(0,i.useMemo)(()=>{if("ask"===v)return[];let e=R.filter(e=>of(e,y)),t=[],o=(e,a,o)=>{if(0!==o.length)for(let i of(t.push({kind:"header",label:x(a),key:e,count:o.length}),o))t.push({kind:"item",item:i})};return"recent"===v?o("recent","palette.recent",R.filter(e=>"app"===e.kind&&e.isRecent&&of(e,y)).sort((e,t)=>a.indexOf(e.id.slice(4))-a.indexOf(t.id.slice(4)))):"jump"===v?(o("suites","palette.section.suites",e.filter(e=>"suite"===e.kind)),o("apps","palette.section.apps",e.filter(e=>"app"===e.kind)),o("games","palette.section.games",e.filter(e=>"game"===e.kind))):"actions"===v?(o("actions","palette.section.actions",e.filter(e=>"action"===e.kind)),o("content","palette.section.content",D)):(o("jump","palette.section.jump",e.filter(e=>"suite"===e.kind||"app"===e.kind||"game"===e.kind)),o("actions","palette.section.actions",e.filter(e=>"action"===e.kind)),o("content","palette.section.content",D),l&&d&&o("ask","palette.section.ask",tO.map((e,a)=>({id:`suggest:${a}`,kind:"suggest",label:x(e),meta:x("palette.ask.suggestMeta"),shortcut:["↵"],onConfirm:()=>{k("ask"),setTimeout(()=>{H(x(e))},0)}})))),t},[v,y,R,a,x,l,d,D]),O=(0,i.useMemo)(()=>B.filter(e=>"item"===e.kind),[B]);(0,i.useEffect)(()=>{z(0)},[v,y]),(0,i.useEffect)(()=>{let e=L.current;if(!e)return;let a=e.querySelectorAll("[data-selectable]");a[$]?.scrollIntoView({block:"nearest"})},[$]);let H=(0,i.useCallback)(async e=>{if(!d||!e.trim())return;let a=e.trim(),t=`turn-${Date.now()}`;j(e=>[...e,{id:t,question:a}]),A(!0),w("");let o=[];for(let e of T.current)e.answer&&(o.push({role:"user",content:e.question}),o.push({role:"assistant",content:e.answer}));N.current?.abort();let i=new AbortController;N.current=i;try{let e=await (0,p.askGroq)(a,{key:d,locale:"pt"===u?"pt":"en",signal:i.signal,history:o});i.signal.aborted||j(a=>a.map(a=>a.id===t?{...a,answer:e}:a))}catch(a){if(i.signal.aborted)return;let e=a instanceof Error?a.message:String(a);j(a=>a.map(a=>a.id===t?{...a,error:e}:a))}finally{i.signal.aborted||A(!1)}},[d,u]),_=(0,i.useCallback)(e=>{if("Escape"===e.key){if("ask"===v&&y.trim())return void w("");if("ask"===v&&M.length>0){N.current?.abort(),A(!1),j([]);return}return void b()}if("ask"===v){"Enter"===e.key&&y.trim()&&(e.preventDefault(),H(y.trim()));return}if("ArrowDown"===e.key)e.preventDefault(),z(e=>Math.min(e+1,O.length-1));else if("ArrowUp"===e.key)e.preventDefault(),z(e=>Math.max(e-1,0));else if("Enter"===e.key){let e=O[$];e&&e.item.onConfirm()}},[v,y,M.length,O,$,b,H]),K=(0,i.useCallback)(e=>{e.target===e.currentTarget&&b()},[b]),U="ask"===v?M.length>0?x("palette.ask.followUp"):x("palette.ask.placeholder"):x("palette.placeholder"),q=(0,i.useMemo)(()=>{let e=[{value:"all",label:x("palette.scope.all")},{value:"jump",label:x("palette.scope.jump")},{value:"actions",label:x("palette.scope.actions")}];return l&&d&&e.push({value:"ask",label:x("palette.scope.ask"),highlight:!0}),e.push({value:"recent",label:x("palette.scope.recent")}),e},[x,l,d]),G=-1;return ec().createPortal((0,o.jsx)(tK,{onClick:K,children:(0,o.jsxs)(tU,{onClick:e=>e.stopPropagation(),children:[(0,o.jsxs)(tq,{children:[(0,o.jsx)(tG,{active:"ask"===v,children:(0,o.jsx)(m.In,{name:"ask"===v?"sparkle":"search",size:20,"aria-hidden":"true"})}),(0,o.jsx)(tW,{ref:C,placeholder:U,value:y,onChange:e=>w(e.target.value),onKeyDown:_,"aria-label":x("palette.search")}),(0,o.jsx)(tY,{children:"esc"})]}),(0,o.jsx)(tV,{children:(0,o.jsx)(m.tU,{tabs:q,value:v,onChange:k,"aria-label":x("palette.scope.ariaLabel")})}),"ask"===v?(0,o.jsx)(oa,{children:0!==M.length||S?(0,o.jsxs)(or,{children:[M.map(e=>(0,o.jsxs)(n().Fragment,{children:[(0,o.jsxs)(os,{children:[(0,o.jsx)(ol,{children:x("palette.ask.you")}),(0,o.jsx)(od,{children:e.question})]}),(0,o.jsxs)(os,{children:[(0,o.jsx)(ol,{children:x("palette.ask.atlantis")}),void 0!==e.answer?(0,o.jsx)(m.mQ,{children:e.answer}):void 0!==e.error?(0,o.jsx)(om,{children:e.error}):(0,o.jsxs)(op,{"aria-label":x("palette.ask.thinking"),children:[(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{})]})]})]},e.id)),(0,o.jsx)("div",{ref:F})]}):(0,o.jsxs)(ot,{children:[(0,o.jsx)(oo,{children:x("palette.ask.suggestionsTitle")}),(0,o.jsx)(oi,{children:tO.map(e=>(0,o.jsx)(on,{onClick:()=>{H(x(e))},type:"button",children:x(e)},e))}),(0,o.jsx)(oo,{style:{marginTop:4},children:x("palette.ask.hint")})]})}):(0,o.jsx)(tJ,{ref:L,children:0===O.length?(0,o.jsxs)(og,{children:[(0,o.jsx)("div",{className:"icon",children:(0,o.jsx)(m.In,{name:"search",size:16,"aria-hidden":"true"})}),(0,o.jsxs)("div",{className:"title",children:[x("palette.noMatch")," ",y&&(0,o.jsxs)("span",{className:"query",children:["“",y,"”"]})]}),(0,o.jsx)("div",{className:"hint",children:x("palette.emptyHint")})]}):B.map((e,a)=>{if("header"===e.kind)return(0,o.jsxs)(tQ,{children:[(0,o.jsx)(tZ,{children:e.label}),(0,o.jsx)(tX,{children:e.count})]},`h-${e.key}`);let t=G+=1,i=t===$,n=e.item;return(0,o.jsxs)(t0,{selected:i,"data-selectable":!0,onMouseEnter:()=>z(t),onClick:()=>n.onConfirm(),children:[n.appIcon&&(0,o.jsx)(t1,{tintColor:n.appIcon.color,selected:i,children:(0,o.jsx)(m.In,{name:n.appIcon.iconName,size:18,"aria-hidden":"true",color:n.appIcon.color})}),n.glyphIcon&&(0,o.jsx)(t4,{tintColor:n.glyphIcon.color,children:(0,o.jsx)(m.In,{name:n.glyphIcon.iconName,size:18,"aria-hidden":"true"})}),n.gameGlyph&&(0,o.jsx)(t5,{tintColor:n.gameGlyph.color,children:(0,o.jsx)(m.In,{name:n.gameGlyph.iconName,size:18,"aria-hidden":"true",color:n.gameGlyph.color})}),"suggest"===n.kind&&(0,o.jsx)(t2,{children:(0,o.jsx)(m.In,{name:"sparkle",size:18,"aria-hidden":"true"})}),(0,o.jsxs)(t3,{children:[(0,o.jsx)(t8,{selected:i,children:n.label}),n.meta&&(0,o.jsx)(t6,{children:n.meta})]}),n.hash&&(0,o.jsx)(t7,{children:n.hash}),n.shortcut&&n.shortcut.length>0&&(0,o.jsx)(t9,{children:n.shortcut.map((e,a)=>(0,o.jsx)(oe,{children:e},a))})]},n.id+"-"+a)})}),(0,o.jsx)(ou,{children:"ask"===v?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(oh,{children:[(0,o.jsx)(oe,{children:"↵"}),x("palette.hint.ask")]}),(0,o.jsxs)(oh,{children:[(0,o.jsx)(oe,{children:"esc"}),x("palette.hint.close")]})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(oh,{children:[(0,o.jsx)(oe,{children:"↑"}),(0,o.jsx)(oe,{children:"↓"}),x("palette.hint.navigate")]}),(0,o.jsxs)(oh,{children:[(0,o.jsx)(oe,{children:"↵"}),x("palette.hint.open")]}),(0,o.jsxs)(oh,{children:[(0,o.jsx)(oe,{children:"esc"}),x("palette.hint.close")]})]})})]})}),document.body)}let ox="shell:cmdk-hint-dismissed",oy=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,ow=l().div`
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: ${c.w4.zIndex.sticky};
  display: inline-flex;
  align-items: stretch;
  border-radius: 999px;
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  box-shadow: ${c.w4.elevation.sm};
  overflow: hidden;
  animation: ${oy} 0.25s ${c.w4.transitions.easing} both;
  animation-delay: 1s;
  transition:
    border-color ${c.w4.transitions.fast},
    transform ${c.w4.transitions.fast};

  &:hover {
    border-color: ${c.w4.colors.borderStrong};
    transform: translateY(-1px);
  }

  .hint-label {
    max-width: 0;
    opacity: 0;
    white-space: nowrap;
    transition: max-width ${c.w4.transitions.base}, opacity ${c.w4.transitions.fast};
  }
  .dismiss {
    max-width: 0;
    opacity: 0;
    padding: 0;
    transition: max-width ${c.w4.transitions.base}, opacity ${c.w4.transitions.fast}, padding ${c.w4.transitions.base};
  }
  &:hover .hint-label,
  &:focus-within .hint-label {
    max-width: 160px;
    opacity: 1;
  }
  &:hover .dismiss,
  &:focus-within .dismiss {
    max-width: 28px;
    opacity: 0.7;
    padding: 0 10px;
  }

  /* Only precise-pointer devices see the hint — touch users have no
     keyboard, and the hint would cover content on phones. */
  @media (hover: none), (pointer: coarse) {
    display: none;
  }
`,ov=l().button`
  appearance: none;
  background: transparent;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  color: ${c.w4.colors.mainTextMuted};
  font-family: ${c.w4.typography.fontFamily};
  font-size: 11px;
  line-height: 1;
  cursor: pointer;
  transition: color ${c.w4.transitions.fast}, padding ${c.w4.transitions.base};

  &:hover { color: ${c.w4.colors.mainText}; }
  &:focus-visible { ${c.w4.focusRing} }
`,ok=l().button`
  appearance: none;
  background: transparent;
  border: none;
  border-left: 1px solid ${c.w4.colors.border};
  color: ${c.w4.colors.mainTextFaint};
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  transition: color ${c.w4.transitions.fast};

  &:hover { color: ${c.w4.colors.mainText}; }
  &:focus-visible { ${c.w4.focusRing} }
`;function o$({onOpenPalette:e,t:a}){let[t,n]=(0,i.useState)(()=>{try{return"1"===localStorage.getItem(ox)}catch{return!1}});return((0,i.useEffect)(()=>{let e=e=>{e.key===ox&&n("1"===e.newValue)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[]),t)?null:ec().createPortal((0,o.jsxs)(ow,{children:[(0,o.jsxs)(ov,{type:"button","aria-label":a("cmdk.hint.aria"),onClick:e,children:[(0,o.jsx)(m.ue,{children:"⌘K"}),(0,o.jsx)("span",{className:"hint-label",children:a("cmdk.hint.label")})]}),(0,o.jsx)(ok,{type:"button",className:"dismiss","aria-label":a("cmdk.hint.dismiss"),title:a("cmdk.hint.dismiss"),onClick:e=>{e.stopPropagation();try{localStorage.setItem(ox,"1")}catch{}n(!0)},children:"\xd7"})]}),document.body)}var oz=t(1310);let oM=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,oj=l().div`
  flex: 1;
  overflow-y: auto;
  padding: ${c.w4.spacing.xl};
`,oS=l().div`
  max-width: 680px;
  margin: 0 auto;
  animation: ${oM} 0.4s ease;
`,oA=l().div`
  margin-bottom: ${c.w4.spacing.xl};
`,oT=l().h1`
  font-size: ${c.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  margin: 0 0 4px;
`,oC=l().p`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  margin: 0;
  line-height: 1.5;
`,oL=l().section`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.lg};
  margin-bottom: ${c.w4.spacing.lg};
`,oF=l().h2`
  font-size: ${c.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  margin: 0 0 ${c.w4.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,oN=l().p`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  margin: 0 0 ${c.w4.spacing.lg};
  line-height: 1.5;
`,oE=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: ${c.w4.spacing.md};

  &:last-of-type {
    margin-bottom: 0;
  }
`,oP=l().label`
  font-size: ${c.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${c.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 6px;
`,oI=l().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 3px;
  background: ${({active:e})=>e?"rgba(63,185,80,0.15)":"rgba(139,148,158,0.15)"};
  color: ${({active:e})=>e?"#3fb950":c.w4.colors.mainTextMuted};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`,oR=l().span`
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  font-weight: 400;
`,oD=l().div`
  display: flex;
  gap: 6px;
`,oB=l().div`
  flex: 1;
  position: relative;
`,oO=l().input`
  width: 100%;
  padding: 8px 36px 8px 12px;
  background: ${c.w4.colors.codeBg};
  border: 1px solid ${c.w4.colors.codeBorder};
  border-radius: ${c.w4.borderRadius.sm};
  color: ${c.w4.colors.mainText};
  font-size: ${c.w4.typography.fontSizeSm};
  font-family: ${c.w4.typography.fontFamilyMono};
  outline: none;
  transition: border-color ${c.w4.transitions.base};
  box-sizing: border-box;

  &:focus {
    border-color: ${c.w4.colors.accent};
  }

  &::placeholder {
    color: ${c.w4.colors.mainTextMuted};
    opacity: 0.5;
  }
`,oH=l().button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${c.w4.colors.mainTextMuted};
  cursor: pointer;
  padding: 2px;
  display: flex;
  transition: color ${c.w4.transitions.fast};

  &:hover {
    color: ${c.w4.colors.mainText};
  }
`,o_=l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: ${c.w4.colors.codeBg};
  border: 1px solid ${c.w4.colors.codeBorder};
  border-radius: ${c.w4.borderRadius.sm};
  color: ${({danger:e})=>e?"#e05252":c.w4.colors.mainTextMuted};
  cursor: pointer;
  flex-shrink: 0;
  transition: border-color ${c.w4.transitions.fast}, color ${c.w4.transitions.fast}, background ${c.w4.transitions.fast};

  &:hover {
    border-color: ${({danger:e})=>e?"#e05252":c.w4.colors.accent};
    color: ${({danger:e})=>e?"#e05252":c.w4.colors.mainText};
    background: ${({danger:e})=>e?"rgba(224,82,82,0.08)":c.w4.colors.surface};
  }
`,oK=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${c.w4.spacing.md};
  margin-top: ${c.w4.spacing.md};
  border-top: 1px solid ${c.w4.colors.border};
`,oU=l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  background: ${c.w4.colors.accent};
  border: none;
  border-radius: ${c.w4.borderRadius.sm};
  color: #fff;
  font-size: ${c.w4.typography.fontSizeSm};
  font-weight: 600;
  font-family: ${c.w4.typography.fontFamily};
  cursor: pointer;
  transition: background ${c.w4.transitions.base}, transform ${c.w4.transitions.fast};

  &:hover {
    background: ${c.w4.colors.accentHover};
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`,oq=l().span`
  font-size: ${c.w4.typography.fontSizeSm};
  color: #3fb950;
  font-family: ${c.w4.typography.fontFamilyMono};
`,oG=l().div`
  display: flex;
  align-items: flex-start;
  gap: ${c.w4.spacing.sm};
  padding: ${c.w4.spacing.md};
  background: rgba(88, 166, 255, 0.06);
  border: 1px solid rgba(88, 166, 255, 0.15);
  border-radius: ${c.w4.borderRadius.md};
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.5;
`,oW=l().div`
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: ${c.w4.spacing.md};
  margin-bottom: ${c.w4.spacing.md};
  background: ${c.w4.colors.codeBg};

  &:last-of-type {
    margin-bottom: 0;
  }
`,oY=l().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  margin-bottom: ${c.w4.spacing.sm};
`,oV=l().span`
  font-size: 18px;
  line-height: 1;
`,oJ=l().span`
  font-size: ${c.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${c.w4.colors.mainText};
`,oQ=l().label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-top: 1px solid ${c.w4.colors.borderSubtle};
  cursor: pointer;
  gap: ${c.w4.spacing.sm};

  &:hover .rule-label {
    color: ${c.w4.colors.mainText};
  }
`,oZ=l().span`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  transition: color ${c.w4.transitions.fast};
`,oX=l().div`
  position: relative;
  width: 36px;
  height: 20px;
  flex-shrink: 0;

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .track {
    position: absolute;
    inset: 0;
    border-radius: 10px;
    background: ${({checked:e})=>e?c.w4.colors.accent:c.w4.colors.border};
    transition: background ${c.w4.transitions.base};
    cursor: pointer;
  }

  .thumb {
    position: absolute;
    top: 3px;
    left: ${({checked:e})=>e?"19px":"3px"};
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #fff;
    transition: left ${c.w4.transitions.base};
    pointer-events: none;
  }
`,o0=l().p`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  text-align: center;
  padding: ${c.w4.spacing.md} 0;
  margin: 0;
  font-style: italic;
`,o1=[{id:"groq",label:"Groq",placeholder:"gsk_...",help:"Used by Prompt Lab and Image Gen (enhance)",linkUrl:"https://console.groq.com/keys",linkLabel:"Get key"},{id:"gemini",label:"Google Gemini",placeholder:"AIza...",help:"Used by Prompt Lab",linkUrl:"https://aistudio.google.com/apikey",linkLabel:"Get key"},{id:"finnhub",label:"Finnhub",placeholder:"pk_...",help:"Stock quotes for the Markets widget",linkUrl:"https://finnhub.io/dashboard",linkLabel:"Get key"}],o4="atlantis:api-keys",o2="atlantis:promptlab:keys",o5={groq:"",gemini:"",finnhub:""};function o3(e,a){return`notifications:${e}:${a}:enabled`}function o8({lang:e}){let[a,t]=(0,i.useState)(o5),[n,r]=(0,i.useState)({}),[s,l]=(0,i.useState)(!1),[d,p]=(0,i.useState)(!1),[u,h]=(0,i.useState)({}),[f,b]=(0,i.useState)([]),x=(0,i.useMemo)(()=>(0,g.Nx)(e,el),[e]),y="pt"===e;(0,i.useEffect)(()=>{let e=function(){try{let e=localStorage.getItem(o4);if(e)return{...o5,...JSON.parse(e)};let a=localStorage.getItem(o2);if(a)return{...o5,...JSON.parse(a)}}catch{}return{...o5}}();t(e),(0,c.PL)(o4).then(a=>{if(a)try{let o={...o5,...JSON.parse(a)},i={groq:e.groq||o.groq,gemini:e.gemini||o.gemini,finnhub:e.finnhub||o.finnhub};t(i)}catch{}}),(0,c.PL)("shell:dashboard-widgets").then(async e=>{let a=[];try{e&&(a=JSON.parse(e))}catch{}let t=new Set(a.map(e=>e.widgetId)),o=ei.filter(e=>t.has(e.id)&&e.notifications&&e.notifications.length>0);b(o);let i={};await Promise.all(o.flatMap(e=>(e.notifications??[]).map(async a=>{let t=o3(e.id,a.id),o=await (0,c.PL)(t);i[`${e.id}:${a.id}`]="false"!==o}))),h(i)})},[]);let w=(0,i.useCallback)((e,a)=>{t(t=>({...t,[e]:a})),p(!0),l(!1)},[]),v=(0,i.useCallback)(e=>{t(a=>({...a,[e]:""})),p(!0),l(!1)},[]),k=(0,i.useCallback)(()=>{let e;e=JSON.stringify(a),localStorage.setItem(o4,e),localStorage.setItem(o2,e),(0,c.Is)(o4,e),p(!1),l(!0),setTimeout(()=>l(!1),2500)},[a]),$=(0,i.useCallback)((e,a,t)=>{let o=`${e}:${a}`;h(e=>({...e,[o]:t})),(0,c.Is)(o3(e,a),t?"true":"false")},[]);return(0,o.jsx)(oj,{children:(0,o.jsxs)(oS,{children:[(0,o.jsxs)(oA,{children:[(0,o.jsx)(oT,{children:y?"Defini\xe7\xf5es":"Settings"}),(0,o.jsx)(oC,{children:y?"Gere as tuas chaves de API para os servi\xe7os de IA. As chaves s\xe3o guardadas no teu browser e sincronizadas com a tua conta.":"Manage your API keys for AI services. Keys are stored in your browser and synced with your account."})]}),(0,o.jsxs)(oL,{children:[(0,o.jsxs)(oF,{children:[(0,o.jsx)(m.In,{name:"key",size:16}),y?"Chaves de API":"API Keys"]}),(0,o.jsx)(oN,{children:y?"Estas chaves s\xe3o usadas pelo Prompt Lab e Image Gen. Cada servi\xe7o tem um plano gratuito.":"These keys are used by Prompt Lab and Image Gen. Each service has a free tier."}),o1.map(e=>{let t=a[e.id],i=n[e.id]??!1;return(0,o.jsxs)(oE,{children:[(0,o.jsxs)(oP,{children:[e.label,(0,o.jsx)(oI,{active:!!t,children:t?y?"ativa":"active":y?"vazia":"empty"}),(0,o.jsxs)(oR,{children:["— ",e.help]})]}),(0,o.jsxs)(oD,{children:[(0,o.jsxs)(oB,{children:[(0,o.jsx)(oO,{type:i?"text":"password",value:t,onChange:a=>w(e.id,a.target.value),placeholder:e.placeholder,spellCheck:!1,autoComplete:"off"}),(0,o.jsx)(oH,{onClick:()=>r(a=>({...a,[e.id]:!i})),title:i?"Hide":"Show",children:i?(0,o.jsx)(m.In,{name:"eye-off",size:13}):(0,o.jsx)(m.In,{name:"eye",size:13})})]}),(0,o.jsx)(o_,{danger:!0,onClick:()=>v(e.id),title:y?"Limpar":"Clear",children:(0,o.jsx)(m.In,{name:"trash",size:13})}),(0,o.jsx)("a",{href:e.linkUrl,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:(0,o.jsx)(o_,{title:e.linkLabel,children:(0,o.jsx)(m.In,{name:"external-link",size:13})})})]})]},e.id)}),(0,o.jsxs)(oK,{children:[s?(0,o.jsx)(oq,{children:y?"✓ Guardado":"✓ Saved"}):(0,o.jsx)("span",{}),(0,o.jsxs)(oU,{onClick:k,disabled:!d,children:[(0,o.jsx)(m.In,{name:"save",size:13}),y?"Guardar":"Save"]})]})]}),(0,o.jsxs)(oL,{children:[(0,o.jsxs)(oF,{children:[(0,o.jsx)(m.In,{name:"bell",size:16}),x("notifications.settings.title")]}),(0,o.jsx)(oN,{children:x("notifications.settings.desc")}),0===f.length?(0,o.jsx)(o0,{children:x("notifications.settings.noWidgets")}):f.map(a=>(0,o.jsxs)(oW,{children:[(0,o.jsxs)(oY,{children:[(0,o.jsx)(oV,{children:a.icon}),(0,o.jsx)(oJ,{children:"pt"===e?a.labels.pt:a.labels.en})]}),(a.notifications??[]).map(e=>{let t=u[`${a.id}:${e.id}`]??!0,i=e.labelKey?x(e.labelKey):e.category;return(0,o.jsxs)(oQ,{children:[(0,o.jsx)(oZ,{className:"rule-label",children:i}),(0,o.jsxs)(oX,{checked:t,onClick:()=>$(a.id,e.id,!t),title:x("notifications.settings.enable"),children:[(0,o.jsx)("input",{type:"checkbox",checked:t,onChange:()=>{},"aria-label":i}),(0,o.jsx)("span",{className:"track"}),(0,o.jsx)("span",{className:"thumb"})]})]},e.id)})]},a.id))]}),(0,o.jsxs)(oG,{children:[(0,o.jsx)(m.In,{name:"shield",size:14,style:{flexShrink:0,marginTop:2}}),(0,o.jsx)("span",{children:y?"As chaves s\xe3o enviadas diretamente do teu browser para o servi\xe7o de IA — nunca passam pelos nossos servidores. Podes remov\xea-las a qualquer momento.":"Keys are sent directly from your browser to the AI provider — they never pass through our servers. You can remove them at any time."})]})]})})}let o6=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,o7=(0,d.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-4px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,o9=l().div`
  position: fixed;
  inset: 0;
  z-index: 4000;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  animation: ${o6} 0.15s ease both;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${c.w4.spacing.md};
`,ie=l().div`
  width: 100%;
  max-width: 480px;
  max-height: calc(100dvh - 32px);
  background: ${c.w4.colors.surfaceRaised};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
  animation: ${o7} 0.18s ease both;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,ia=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${c.w4.spacing.md} ${c.w4.spacing.lg};
  border-bottom: 1px solid ${c.w4.colors.border};
`,it=l().h2`
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  margin: 0;
`,io=l().button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid transparent;
  border-radius: ${c.w4.borderRadius.sm};
  color: ${c.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: ${c.w4.transitions.fast};

  &:hover {
    color: ${c.w4.colors.mainText};
    border-color: ${c.w4.colors.border};
    background: ${c.w4.colors.sidebarHover};
  }
`,ii=l().div`
  padding: ${c.w4.spacing.lg};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.lg};
`,ir=l().section`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,is=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${c.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,il=l().div`
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  margin-top: -2px;
`,id=l().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.sm};
`,ic=l().button`
  padding: 6px 12px;
  font-family: ${c.w4.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  background: ${({active:e})=>e?c.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?c.w4.colors.accent:c.w4.colors.mainTextMuted};
  border: 1px solid ${({active:e})=>e?c.w4.colors.accent:c.w4.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: ${c.w4.transitions.fast};

  &:hover {
    border-color: ${c.w4.colors.accent};
    color: ${({active:e})=>e?c.w4.colors.accent:c.w4.colors.mainText};
  }
`,ip=l().div`
  display: flex;
  justify-content: flex-end;
  gap: ${c.w4.spacing.sm};
  padding: ${c.w4.spacing.md} ${c.w4.spacing.lg};
  border-top: 1px solid ${c.w4.colors.border};
`,im=l().button`
  padding: 8px 16px;
  font-family: ${c.w4.typography.fontFamily};
  font-size: 13px;
  background: transparent;
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainTextMuted};
  cursor: pointer;
  transition: ${c.w4.transitions.fast};

  &:hover {
    border-color: ${c.w4.colors.mainTextMuted};
    color: ${c.w4.colors.mainText};
  }
`,ig=l().button`
  padding: 8px 20px;
  font-family: ${c.w4.typography.fontFamily};
  font-size: 13px;
  font-weight: 600;
  background: ${c.w4.colors.accent};
  border: 1px solid ${c.w4.colors.accent};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainBg};
  cursor: pointer;
  transition: ${c.w4.transitions.fast};

  &:hover {
    background: ${c.w4.colors.accentHover};
    border-color: ${c.w4.colors.accentHover};
  }
`;function iu({open:e,onClose:a,locale:t}){let[n,r]=(0,p.useProfile)(),[s,l]=(0,i.useState)(n),d=(0,i.useMemo)(()=>(0,g.Nx)("pt"===t?"pt":"en",el),[t]);if((0,i.useEffect)(()=>{e&&l(n)},[e,n]),(0,i.useEffect)(()=>{if(!e)return;let t=e=>{"Escape"===e.key&&a()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[e,a]),!e)return null;let u=async()=>{let e=s.ageMode!==n.ageMode||s.interests.length!==n.interests.length||s.interests.some(e=>!n.interests.includes(e));await r(s),a(),e&&(await (0,c.sW)("widget-cache:"),window.location.reload())},h="pt"===t?p.INTEREST_LABELS_PT:p.INTEREST_LABELS_EN,f="pt"===t?p.AGE_MODE_LABELS_PT:p.AGE_MODE_LABELS_EN;return ec().createPortal((0,o.jsx)(o9,{onClick:e=>{e.target===e.currentTarget&&a()},children:(0,o.jsxs)(ie,{role:"dialog","aria-modal":"true","aria-labelledby":"profile-title",children:[(0,o.jsxs)(ia,{children:[(0,o.jsx)(it,{id:"profile-title",children:d("profile.title")}),(0,o.jsx)(io,{onClick:a,"aria-label":d("profile.close"),children:(0,o.jsx)(m.In,{name:"close",size:16})})]}),(0,o.jsxs)(ii,{children:[(0,o.jsxs)(ir,{children:[(0,o.jsx)(is,{children:d("profile.interests")}),(0,o.jsx)(il,{children:d("profile.interestsHint")}),(0,o.jsx)(id,{children:p.ALL_INTERESTS.map(e=>(0,o.jsx)(ic,{active:s.interests.includes(e),onClick:()=>{l(a=>({...a,interests:a.interests.includes(e)?a.interests.filter(a=>a!==e):[...a.interests,e]}))},"aria-pressed":s.interests.includes(e),children:h[e]},e))})]}),(0,o.jsxs)(ir,{children:[(0,o.jsx)(is,{children:d("profile.ageMode")}),(0,o.jsx)(il,{children:d("profile.ageModeHint")}),(0,o.jsx)(id,{children:["kid","teen","adult"].map(e=>(0,o.jsx)(ic,{active:s.ageMode===e,onClick:()=>{l(a=>({...a,ageMode:e}))},"aria-pressed":s.ageMode===e,children:f[e]},e))})]})]}),(0,o.jsxs)(ip,{children:[(0,o.jsx)(im,{onClick:a,children:d("profile.cancel")}),(0,o.jsx)(ig,{onClick:u,children:d("profile.save")})]})]})}),document.body)}var ih=t(68360);let ib=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,ix=l().div`
  position: fixed;
  inset: 0;
  z-index: ${c.w4.zIndex.dropdown};
`,iy=l().div`
  position: fixed;
  z-index: ${c.w4.zIndex.flyout};
  width: 360px;
  max-height: 480px;
  background: ${c.w4.colors.surfaceRaised};
  border: 1px solid ${c.w4.colors.borderStrong};
  border-radius: ${c.w4.borderRadius.lg};
  box-shadow: ${c.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  animation: ${ib} 0.15s ease both;
  overflow: hidden;

  @media (max-width: ${c.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    width: auto;
    max-width: none;
    max-height: calc(100dvh - 48px - env(safe-area-inset-top, 0px) - 24px);
  }
`,iw=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
`,iv=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextMuted};
`,ik=l().button`
  background: none;
  border: none;
  color: ${c.w4.colors.accent};
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeSm};
  cursor: pointer;
  padding: 2px 4px;

  &:hover { color: ${c.w4.colors.accentHover}; }
  &:disabled { color: ${c.w4.colors.mainTextFaint}; cursor: not-allowed; }
`,i$=l().div`
  flex: 1;
  overflow-y: auto;
`,iz=l().button`
  /* Reset browser button chrome so the footer reads as a link row. */
  appearance: none;
  background: transparent;
  border: none;
  border-top: 1px solid ${c.w4.colors.borderSubtle};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${c.w4.colors.accent};
  cursor: pointer;
  transition: background ${c.w4.transitions.fast}, color ${c.w4.transitions.fast};

  &:hover {
    background: ${c.w4.colors.surfaceHover};
    color: ${c.w4.colors.accentHover};
  }
  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: -2px;
  }

  .count {
    color: ${c.w4.colors.mainTextFaint};
    font-weight: 600;
  }
`,iM=l().div`
  position: relative;
  display: block;
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
  transition: background ${c.w4.transitions.fast};

  &:hover { background: ${c.w4.colors.surfaceHover}; }
  &:hover .dismiss { opacity: 1; }
  &:last-child { border-bottom: none; }
`,ij=l().a`
  display: block;
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: none;
  background: none;
  text-align: left;
  text-decoration: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
`,iS=l().button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${c.w4.borderRadius.sm};
  background: transparent;
  color: ${c.w4.colors.mainTextMuted};
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  opacity: 0;
  transition: opacity ${c.w4.transitions.fast}, background ${c.w4.transitions.fast}, color ${c.w4.transitions.fast};

  &:hover { background: ${c.w4.colors.surfaceHover}; color: ${c.w4.colors.mainText}; }
  &:focus-visible { opacity: 1; outline: 2px solid ${c.w4.colors.accent}; outline-offset: 1px; }

  @media (hover: none) { opacity: 0.6; }
`,iA=l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({color:e})=>e};

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({color:e})=>e};
  }

  .time {
    margin-left: auto;
    color: ${c.w4.colors.mainTextFaint};
  }
`,iT=l().div`
  font-family: ${c.w4.typography.fontFamily};
  font-size: 13px;
  line-height: 1.4;
  color: ${c.w4.colors.mainText};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,iC=l().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-right: 6px;
  vertical-align: -2px;
`,iL=l().div`
  padding: 32px 16px;
  text-align: center;
  font-family: ${c.w4.typography.fontFamily};
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
`;function iF({locale:e,state:a,anchor:t}){let n=(0,i.useMemo)(()=>(0,g.Nx)(e,el),[e]),{open:r,close:s,items:l,markAllRead:d,dismiss:u}=a;if(!r||!t)return null;let h=Math.round(t.bottom+8),f=Math.max(12,Math.round(window.innerWidth-t.right)),b=()=>{s(),window.location.hash="#/daily"};return ec().createPortal((0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ix,{onClick:s}),(0,o.jsxs)(iy,{style:{top:h,right:f},role:"dialog","aria-label":n("notifications.title"),children:[(0,o.jsxs)(iw,{children:[(0,o.jsx)(iv,{children:n("notifications.title")}),(0,o.jsx)(ik,{onClick:d,disabled:0===l.length,children:n("notifications.markAllRead")})]}),(0,o.jsx)(i$,{children:0===l.length?(0,o.jsx)(iL,{children:n("notifications.empty")}):l.slice(0,5).map(e=>{let a=p.defaultStore.getCategory(e.category)?.badgeColor??c.w4.colors.mainTextMuted,t=p.defaultStore.getCategory(e.category)?.labelKey,i=t?n(t):e.category;if("daily.overdue"===e.category){let t=e.meta,r=t?.count??0,s=(t?.missions??[]).slice(0,4),l=1===r?n("notifications.daily.group.one"):n("notifications.daily.group.many",{count:r});return(0,o.jsxs)(iM,{children:[(0,o.jsxs)(ij,{as:"button",type:"button",onClick:b,children:[(0,o.jsxs)(iA,{color:a,children:[(0,o.jsx)("span",{className:"dot"}),i,(0,o.jsx)("span",{className:"time",children:(0,ih.e)(e.ts)})]}),(0,o.jsxs)(iT,{children:[(0,o.jsx)(iC,{children:s.map(e=>(0,m.n6)(e.emoji)?(0,o.jsx)(m.In,{name:e.emoji,size:14,style:{color:e.color??a}},e.id):(0,o.jsx)("span",{children:e.emoji},e.id))}),l]})]}),(0,o.jsx)(iS,{type:"button",className:"dismiss","aria-label":n("notifications.dismiss"),title:n("notifications.dismiss"),onClick:a=>{a.stopPropagation(),u(e.id)},children:"\xd7"})]},e.id)}let r=e.link?{href:e.link,target:"_blank",rel:"noopener noreferrer",onClick:()=>{u(e.id)}}:{as:"button",type:"button",onClick:()=>{u(e.id)}};return(0,o.jsxs)(iM,{children:[(0,o.jsxs)(ij,{...r,children:[(0,o.jsxs)(iA,{color:a,children:[(0,o.jsx)("span",{className:"dot"}),i,(0,o.jsx)("span",{className:"time",children:(0,g.aw)(new Date(e.ts).toISOString(),n)})]}),(0,o.jsx)(iT,{children:e.title})]}),(0,o.jsx)(iS,{type:"button",className:"dismiss","aria-label":n("notifications.dismiss"),title:n("notifications.dismiss"),onClick:a=>{a.stopPropagation(),u(e.id)},children:"\xd7"})]},e.id)})}),l.length>0&&(0,o.jsxs)(iz,{type:"button",onClick:()=>{s(),window.location.hash="#/notifications"},children:[(0,o.jsx)("span",{children:n("notifications.seeAll")}),(0,o.jsx)("span",{className:"count",children:l.length>5?`+${l.length-5}`:l.length})]})]})]}),document.body)}let iN=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,iE=l().div`
  max-width: 720px;
  margin: 0 auto;
  padding: ${c.w4.spacing.xl} ${c.w4.spacing.lg} ${c.w4.spacing.xxl};
  animation: ${iN} 0.25s ease both;
`,iP=l().header`
  margin-bottom: ${c.w4.spacing.lg};
  padding-bottom: ${c.w4.spacing.md};
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
`,iI=l().h1`
  margin: 0 0 4px;
  font-family: ${c.w4.typography.fontFamily};
  font-size: 22px;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  letter-spacing: -0.02em;
`,iR=l().p`
  margin: 0;
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
`,iD=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.md};
`,iB=l().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: transparent;
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainTextMuted};
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: color ${c.w4.transitions.fast}, border-color ${c.w4.transitions.fast};

  &:hover:not(:disabled) {
    color: ${c.w4.colors.mainText};
    border-color: ${c.w4.colors.borderStrong};
  }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
`,iO=l().div`
  padding: ${c.w4.spacing.xxl} 0;
  text-align: center;
  color: ${c.w4.colors.mainTextMuted};
  font-size: 14px;
`,iH=l().h2`
  margin: ${c.w4.spacing.lg} 0 ${c.w4.spacing.sm};
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextMuted};
`,i_=l().div`
  display: flex;
  gap: ${c.w4.spacing.md};
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md};
  border-left: 2px solid ${({color:e})=>e};
  border-radius: ${c.w4.borderRadius.sm};
  background: ${c.w4.colors.surface};
  margin-bottom: 6px;
  transition: background ${c.w4.transitions.fast};

  &:hover { background: ${c.w4.colors.surfaceHover}; }
`,iK=l().a`
  flex: 1;
  display: block;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  min-width: 0;
`,iU=l().div`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  line-height: 1.4;
  word-break: break-word;
`,iq=l().div`
  margin-top: 2px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
`,iG=l().button`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: ${c.w4.colors.mainTextFaint};
  border-radius: ${c.w4.borderRadius.sm};
  cursor: pointer;
  transition: color ${c.w4.transitions.fast}, background ${c.w4.transitions.fast};

  &:hover {
    color: ${c.w4.colors.mainText};
    background: ${c.w4.colors.sidebarHover};
  }
`;function iW({locale:e}){let a=(0,i.useMemo)(()=>(0,g.Nx)(e,el),[e]),t=(0,p.useRegisteredCategories)(),{items:n,byCategory:r}=(0,p.useEvents)({channels:t}),s=(0,i.useMemo)(()=>{let e=new Map;for(let a of t){let t=r[a];t&&t.length>0&&e.set(a,t)}return e},[r,t]),l=(0,i.useCallback)(()=>{p.defaultStore.markAllRead()},[]),d=(0,i.useCallback)(e=>{p.defaultStore.dismiss(e)},[]),m=(0,i.useCallback)(()=>{window.location.hash="#/home"},[]);return(0,o.jsxs)(iE,{children:[(0,o.jsxs)(iP,{children:[(0,o.jsx)(iI,{children:a("notifications.page.title")}),(0,o.jsx)(iR,{children:a("notifications.page.subtitle")}),(0,o.jsxs)(iD,{children:[(0,o.jsxs)(iB,{onClick:m,children:["← ",a("error.remote.goHome")]}),(0,o.jsx)(iB,{onClick:l,disabled:0===n.length,children:a("notifications.markAllRead")})]})]}),0===n.length?(0,o.jsx)(iO,{children:a("notifications.empty")}):Array.from(s.entries()).map(([e,t])=>{let i;return(0,o.jsxs)("section",{children:[(0,o.jsx)(iH,{children:(i=p.defaultStore.getCategory(e),i?.labelKey?a(i.labelKey):e)}),t.map(t=>{let i=p.defaultStore.getCategory(e)?.badgeColor??c.w4.colors.mainTextMuted;return(0,o.jsxs)(i_,{color:i,children:[(0,o.jsxs)(iK,{href:t.link,target:t.link?"_blank":void 0,rel:t.link?"noopener noreferrer":void 0,children:[(0,o.jsx)(iU,{children:t.title}),(0,o.jsx)(iq,{children:(0,g.aw)(new Date(t.ts).toISOString(),a)})]}),(0,o.jsx)(iG,{type:"button","aria-label":a("notifications.dismiss"),title:a("notifications.dismiss"),onClick:()=>d(t.id),children:"\xd7"})]},t.id)})]},e)})]})}let iY={"stockpulse.enabled":!0};p.events.registerCategory({id:"sync.error",labelKey:"notifications.source.syncError",badgeColor:c.w4.colors.danger}),p.events.registerCategory({id:"daily.achievement",labelKey:"notifications.source.dailyAchievement",badgeColor:"#fb923c"}),p.events.registerCategory({id:"finance.budget",labelKey:"notifications.source.financeBudget",badgeColor:c.w4.colors.warning});{let e=new Map;(0,oz.subscribeRequests)(a=>{if(!a.host)return;if(a.ok)return void e.delete(a.host);let t=(e.get(a.host)??0)+1;if(e.set(a.host,t),3===t){let e=new Date().toISOString().slice(0,10);p.events.push({id:`sync.error:${a.host}:${e}`,category:"sync.error",ts:a.ts,title:`${a.host} — ${a.error??"failed"}`,meta:{host:a.host,status:a.status}})}})}let iV={movies:e=>({apiKey:e.tmdbKey}),games:e=>({isAuthenticated:!!e.user})},iJ=l().div`
  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  animation: fadeSlideIn 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  height: 100%;
`,iQ=(0,d.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,iZ=l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  height: 28px;
  border-radius: 999px;
  border: 1px solid ${c.w4.colors.success};
  background: ${c.w4.colors.surface};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.success};
  letter-spacing: 0.02em;
  user-select: none;
  opacity: 0.9;
`,iX=l().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${c.w4.colors.success};
  flex-shrink: 0;
  animation: ${iQ} 2s ease-in-out infinite;
`,i0={techscope:9,weather:1,citypulse:1};function i1({count:e}){return(0,o.jsxs)(iZ,{title:`${e} live ${1===e?"feed":"feeds"}`,children:[(0,o.jsx)(iX,{}),e,(0,o.jsx)("span",{style:{opacity:.65,fontSize:10},children:"LIVE"})]})}let i4=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${c.w4.spacing.xl};
  background: ${c.w4.colors.mainBg};
  color: ${c.w4.colors.mainTextMuted};
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeBase};
  gap: ${c.w4.spacing.lg};
`,i2=(l().code`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: ${c.w4.typography.fontSizeSm};
  background: ${c.w4.colors.codeBg};
  border: 1px solid ${c.w4.colors.codeBorder};
  color: ${c.w4.colors.mainText};
  padding: 8px 14px;
  border-radius: ${c.w4.borderRadius.sm};
`,l().div`
  font-size: 48px;
  line-height: 1;
  opacity: 0.6;
`),i5=l().h2`
  color: ${c.w4.colors.mainText};
  font-size: ${c.w4.typography.fontSizeLg};
  font-weight: 600;
`,i3=l().p`
  color: ${c.w4.colors.mainTextMuted};
  font-size: ${c.w4.typography.fontSizeBase};
  max-width: 360px;
  text-align: center;
  line-height: 1.5;
`,i8=l().button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainText};
  font-size: ${c.w4.typography.fontSizeBase};
  font-family: ${c.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${c.w4.transitions.fast}, border-color ${c.w4.transitions.fast};
  margin-top: ${c.w4.spacing.sm};

  &:hover {
    background: ${c.w4.colors.sidebarHover};
    border-color: ${c.w4.colors.accent};
  }
`;function i6({name:e,error:a,topBarRight:t,onRetry:n}){let[r]=(0,g.Ym)(),s=(0,i.useMemo)(()=>(0,g.Nx)(r,el),[r]),l=a.message??"",d=l.startsWith("REMOTE_LOAD_FAILED:"),p=d?l.slice(19):e,m=`apps.${p}.label`,u=s(m),h=u&&u!==m?u:p;return(0,o.jsx)(c.PE,{title:h,sidebar:null,topBarRight:t,children:(0,o.jsxs)(i4,{children:[(0,o.jsx)(i2,{children:"⚠"}),(0,o.jsx)(i5,{children:s("error.remote.title",{name:h})}),(0,o.jsx)(i3,{children:s(d?"error.remote.prodHint":"error.remote.generic")}),d&&!1,(0,o.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.sm},children:[(0,o.jsx)(i8,{onClick:n,children:s("error.remote.retry")}),(0,o.jsx)(i8,{onClick:()=>{window.location.hash="#/home"},children:s("error.remote.goHome")})]})]})})}class i7 extends n().Component{static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e){console.error(`[RemoteErrorBoundary] "${this.props.name}" threw:`,e)}componentDidUpdate(e){e.name!==this.props.name&&this.state.error&&this.setState({error:null})}render(){return this.state.error?(0,o.jsx)(i6,{name:this.props.name,error:this.state.error,topBarRight:this.props.topBarRight,onRetry:()=>this.setState({error:null})}):this.props.children}constructor(...e){super(...e),function(e,a,t){a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t}(this,"state",{error:null})}}let i9=(()=>{let e={settings:"settings"};for(let a of M)for(let t of(e[a.hash.replace(/^#\//,"")]=a.id,a.hashAliases??[]))e[t]=a.id;return e})();function ne(e){let a=e.replace(/^#\/?/,"");if(!a||"home"===a)return"home";let t=a.split("/")[0].split("?")[0];return"notifications"===t?"notifications":i9[t]??"home"}let na="shell:recent",nt="shell:pinned",no="shell:last-app";function ni(){let e=window.location.hash;if(!e||"#"===e||"#/"===e)try{let e=localStorage.getItem(no);if(e&&"home"!==e&&f[e]){let a=M.find(a=>a.id===e);if(a)return history.replaceState(null,"",a.hash),e}}catch{}return ne(e)}function nn(e){try{return JSON.parse(e??"[]")}catch{return[]}}let nr=new Set(M.filter(e=>e.needsAuth).map(e=>e.id)),ns="true"===process.env.MOCK_USER?{id:"mock-user",email:"dev@atlantis.local",user_metadata:{full_name:"Dev User",avatar_url:""}}:null,nl=document.getElementById("root");if(!nl)throw Error("Root element #root not found");(0,r.createRoot)(nl).render((0,o.jsx)(function(){let e,[a,t]=(0,i.useState)(ni),[n,r]=(0,i.useState)([]),[s,l]=(0,i.useState)([]),[d,u]=(0,i.useState)(ns),[h,b]=(0,i.useState)(!!ns),[x,y]=(0,i.useState)(!1),[w,v]=(0,i.useState)(void 0),[k,$]=(0,i.useState)(!1),[A,T]=(0,i.useState)(!1),[C,L]=(0,g.Ym)(),F=(0,i.useMemo)(()=>(0,g.Nx)(C,el),[C]),N=function(e={}){let a=(0,p.useRegisteredCategories)(),t=(0,p.useEventBell)({channels:a}),[o,n]=(0,i.useState)(!1),r=(0,i.useRef)(null),s=(0,i.useRef)(e.formatDailyReminder);(0,i.useEffect)(()=>{s.current=e.formatDailyReminder},[e.formatDailyReminder]),(0,i.useEffect)(()=>{let e=()=>{p.defaultStore.refresh()};window.addEventListener("focus",e);let a=p.dailyStore.subscribe(e);return()=>{window.removeEventListener("focus",e),a()}},[]),(0,i.useEffect)(()=>{if("u"<typeof window||!("Notification"in window)||"granted"!==Notification.permission)return;let e=t.items.find(e=>"daily.overdue"===e.category),a=(0,p.todayISO)();if(!e||r.current===a)return;let o=e.meta,i=o?.missions?.[0],n=i?s.current?.(i):void 0;if(n){r.current=a;try{new Notification(n.title,{body:n.body,tag:`atlantis-daily-${a}`,icon:"/manifest-icon.png"})}catch{}}},[t.items]);let l=(0,i.useCallback)(()=>n(e=>!e),[]),d=(0,i.useCallback)(()=>n(!1),[]);return{...t,open:o,toggle:l,close:d}}({formatDailyReminder:(0,i.useCallback)(e=>{let a=(0,p.missionLabel)(e,C),t=e.emoji?`${e.emoji} ${a}`.trim():a;return{title:F("notifications.source.daily"),body:F("notifications.daily.body",{time:e.time??"",name:t})}},[F,C])}),[E,P]=(0,i.useState)(null);(0,i.useEffect)(()=>{if(ns)return;td.auth.getSession().then(({data:e})=>{let a=e.session?.user??null;u(a),(0,c.Fm)(a?tk:null),b(!0)});let{data:{subscription:e}}=td.auth.onAuthStateChange((e,a)=>{let t=a?.user??null;u(t),(0,c.Fm)(t?tk:null)});return()=>e.unsubscribe()},[]),(0,i.useEffect)(()=>{(0,c.PL)(na).then(e=>r(nn(e))),(0,c.PL)(nt).then(e=>l(nn(e)))},[]),(0,i.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&"k"===e.key&&(e.preventDefault(),v(void 0),y(e=>!e))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),(0,i.useEffect)(()=>{let e=e=>{let a=e.detail;v(a?.scope),y(!0)};return window.addEventListener("atlantis:open-palette",e),()=>window.removeEventListener("atlantis:open-palette",e)},[]),(0,i.useEffect)(()=>{let e=()=>t(ne(window.location.hash));return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),(0,i.useEffect)(()=>{if(a&&"home"!==a){try{localStorage.setItem(no,a)}catch{}r(e=>{let t=[a,...e.filter(e=>e!==a)].slice(0,8);return(0,c.Is)(na,JSON.stringify(t)),t})}},[a]);let I=(0,i.useCallback)(e=>{window.location.hash=e,y(!1),v(void 0)},[]),R=(0,i.useCallback)(e=>{window.location.hash=`#/home?suite=${encodeURIComponent(e)}`},[]),[D]=(0,p.useProfile)(),B=(0,i.useMemo)(()=>M.filter(e=>e.flag?function(e){try{let a=localStorage.getItem("shell:flag:"+e);if("true"===a)return!0;if("false"===a)return!1}catch{}return iY[e]??!1}(e.flag):e.enabled).filter(e=>"hidden"!==z(e)).filter(e=>!(0,p.hasInterests)(D)||!e.interest||D.interests.includes(e.interest)),[D]),O=(0,i.useMemo)(()=>{let e=S.map(e=>({id:e.id,name:F(e.labelKey),iconName:e.iconName,hash:e.hash,accentColor:e.color,onClick:()=>{window.location.hash=e.hash}}));return j.map(a=>{let t=B.filter(e=>e.suite===a.yamlSuite),o="games"===a.id;return{id:a.id,name:F(a.nameKey),subtitle:F(a.subKey),color:a.color,icon:a.icon,count:o?S.length:t.length,onClick:o?void 0:()=>R(a.id),children:o?e:void 0}})},[B,F,R]),H=(0,i.useMemo)(()=>O.filter(e=>e.count>0),[O]),_=(0,i.useMemo)(()=>H.map(e=>({id:e.id,name:e.name,sub:e.subtitle,color:e.color,iconName:e.icon,onConfirm:()=>R(e.id)})),[H,R]),K=(0,i.useMemo)(()=>S.map(e=>({id:e.id,name:F(e.labelKey),iconName:e.iconName,hash:e.hash,color:e.color})),[F]),U=(0,i.useMemo)(()=>[{id:"add-widget",label:F("palette.action.addWidget"),meta:F("palette.action.addWidget.meta"),iconName:"plus",color:c.w4.colors.accent,onClick:()=>{window.location.hash="#/home";try{sessionStorage.setItem(eR,"1")}catch{}window.dispatchEvent(new CustomEvent("atlantis:open-widget-picker"))}},{id:"preferences",label:F("palette.action.preferences"),meta:F("palette.action.preferences.meta"),iconName:"settings",onClick:()=>$(!0)},{id:"settings",label:F("palette.action.settings"),meta:F("palette.action.settings.meta"),iconName:"sparkle",onClick:()=>{window.location.hash="#/settings"}},{id:"language",label:F("palette.action.language"),meta:F("palette.action.language.meta"),iconName:"globe",onClick:()=>L("pt"===C?"en":"pt")},...N.count>0?[{id:"clear-notifications",label:F("palette.action.clearNotifications"),meta:F("palette.action.clearNotifications.meta",{n:N.count}),iconName:"bell",color:c.w4.colors.accent,onClick:()=>{N.markAllRead()}}]:[],...d?[{id:"signout",label:F("palette.action.signout"),meta:d.email??"",iconName:"arrow-up-right",color:c.w4.colors.danger,onClick:()=>{tp()}}]:[]],[F,C,L,d,N]),[q,G]=(0,i.useState)(null);(0,i.useEffect)(()=>{(0,p.resolveGroqKey)().then(G)},[]);let W=(0,p.hasEnvGroqKey)()||!!q,Y=(0,i.useMemo)(()=>B.map(({id:e,labelKey:a,hash:t})=>({id:e,label:F(a),hash:t})),[B,F]),V=(0,i.useMemo)(()=>B.map(({id:e,labelKey:a,descriptionKey:t,hash:o,icon:i,color:n,category:r})=>({id:e,label:F(a),description:F(t),hash:o,icon:i,color:n,category:r})),[B,F]),J=(e=M.find(e=>e.id===a))?F(e.labelKey):a;if(!h)return(0,o.jsx)(c.NP,{children:(0,o.jsx)(c.xx,{})});if(nr.has(a)&&!d)return(0,o.jsx)(c.NP,{children:(0,o.jsx)(tv,{appLabel:J,onBack:()=>{window.location.hash="#/home"}})});let Q=i0[a],Z=e=>{P(e.currentTarget.getBoundingClientRect()),N.toggle()},X=(0,o.jsx)(m.Yw,{locale:C,onLocaleChange:L,before:null!=Q?(0,o.jsx)(i1,{count:Q}):void 0,suites:{entries:H,label:F("suites.label"),ariaLabel:F("suites.aria"),appsLabel:F("suites.appsCount")},notifications:{count:N.count,onClick:Z,label:F("notifications.bell")},onOpenPalette:()=>{v(void 0),y(!0)},paletteLabel:F("palette.search"),user:d?{name:d.user_metadata?.full_name,email:d.email??"",avatarUrl:d.user_metadata?.avatar_url}:void 0,userMenuItems:d?[{label:F("userMenu.preferences"),icon:(0,o.jsx)(m.In,{name:"user-cog",size:14}),onClick:()=>$(!0)},{label:F("userMenu.settings"),icon:(0,o.jsx)(m.In,{name:"settings",size:14}),onClick:()=>{window.location.hash="#/settings"}},{label:F("userMenu.clearData"),icon:(0,o.jsx)(m.In,{name:"trash",size:14}),onClick:()=>T(!0),danger:!0},{label:F("userMenu.signOut"),icon:(0,o.jsx)(m.In,{name:"log-out",size:14}),onClick:tp,danger:!0}]:[],userMenuControlLabels:{language:F("userMenu.language"),theme:F("userMenu.theme"),themeLight:F("userMenu.themeLight"),themeDark:F("userMenu.themeDark"),themeSystem:F("userMenu.themeSystem")},onSignIn:()=>{window.location.hash="#/home"}}),ee=x&&(0,o.jsx)(ob,{apps:V,recentIds:n,suites:_,games:K,actions:U,hasAsk:W,groqKey:q??void 0,locale:C,initialScope:w,onNavigate:I,onClose:()=>{y(!1),v(void 0)}}),ea=!x&&(0,o.jsx)(o$,{t:F,onOpenPalette:()=>{v(void 0),y(!0)}}),et=(0,o.jsx)(iu,{open:k,onClose:()=>$(!1),locale:C}),eo=(0,o.jsx)(c.TM,{open:A,title:F("userMenu.clearData"),message:F("userMenu.clearDataConfirm"),confirmLabel:F("userMenu.clearData"),cancelLabel:F("common.cancel"),danger:!0,onCancel:()=>T(!1),onConfirm:async()=>{T(!1),await (0,c.sW)(""),window.location.reload()}}),ei=(0,o.jsx)(iF,{locale:C,state:N,anchor:E});if("home"===a)return(0,o.jsxs)(c.NP,{children:[(0,o.jsx)(iJ,{children:(0,o.jsx)(tl,{apps:Y,recentAppIds:n,pinnedAppIds:s,onTogglePin:e=>{l(a=>{let t=a.includes(e)?a.filter(a=>a!==e):[...a,e];return(0,c.Is)(nt,JSON.stringify(t)),t})},onMovePinned:(e,a)=>{l(t=>{let o=t.indexOf(e);if(o<0)return t;let i=o+a;if(i<0||i>=t.length)return t;let n=[...t];return[n[o],n[i]]=[n[i],n[o]],(0,c.Is)(nt,JSON.stringify(n)),n})},onSelect:e=>{window.location.hash=e.hash},user:d?{name:d.user_metadata?.full_name,email:d.email??"",avatarUrl:d.user_metadata?.avatar_url}:null,onSignOut:tp,onPreferences:()=>$(!0),onClearData:()=>T(!0),onOpenPalette:()=>{v(void 0),y(!0)},notifications:{count:N.count,onClick:Z,label:F("notifications.bell")},suites:{entries:H,label:F("suites.label"),ariaLabel:F("suites.aria"),appsLabel:F("suites.appsCount")}})},"home"),ee,ea,et,eo,ei]});let en=f[a],er=iV[a]?.({user:d,tmdbKey:"9b6f2645abf1725625c843aa71e3efd5"})??{};return(0,o.jsxs)(c.NP,{children:[(0,o.jsx)(i7,{name:a,topBarRight:X,children:(0,o.jsx)(i.Suspense,{fallback:(0,o.jsx)(c.xx,{}),children:(0,o.jsxs)(iJ,{children:[en&&(0,o.jsx)(en,{topBarRight:X,...er}),"settings"===a&&(0,o.jsx)(c.PE,{title:"Settings",sidebar:null,topBarRight:X,children:(0,o.jsx)(o8,{lang:"pt"===C?"pt":"en"})}),"notifications"===a&&(0,o.jsx)(c.PE,{title:F("notifications.page.title"),sidebar:null,topBarRight:X,children:(0,o.jsx)(iW,{locale:C})})]},a)})}),ee,ea,et,eo,ei]})},{}))},30522(e,a,t){t.d(a,{C:()=>c,j:()=>p});let o={dal:{tmdb:{baseUrl:"https://api.themoviedb.org/3",imageBaseUrl:"https://image.tmdb.org/t/p",defaultTtlMs:18e5},wikipedia:{contentBaseUrl:"https://en.wikipedia.org/api/rest_v1",analyticsBaseUrl:"https://wikimedia.org/api/rest_v1",defaultTtlMs:36e5},sunriseSunset:{baseUrl:"https://api.sunrise-sunset.org/json",defaultTtlMs:864e5},openLibrary:{searchUrl:"https://openlibrary.org/search.json",coverBaseUrl:"https://covers.openlibrary.org/b/id",defaultTtlMs:2592e6},coinGecko:{baseUrl:"https://api.coingecko.com/api/v3",defaultTtlMs:3e5},openMeteo:{baseUrl:"https://api.open-meteo.com/v1",defaultTtlMs:9e5},hn:{algoliaBaseUrl:"https://hn.algolia.com/api/v1",firebaseBaseUrl:"https://hacker-news.firebaseio.com/v0",defaultTtlMs:3e5},github:{baseUrl:"https://api.github.com",defaultTtlMs:3e5},rss:{baseUrl:"https://api.rss2json.com/v1/api.json",defaultTtlMs:6e5},ipma:{baseUrl:"https://api.ipma.pt/open-data/observation/seismic",defaultTtlMs:18e5},usgs:{baseUrl:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary",defaultTtlMs:18e5},noaaSwpc:{baseUrl:"https://services.swpc.noaa.gov/json",defaultTtlMs:3e5},nasaEonet:{baseUrl:"https://eonet.gsfc.nasa.gov/api/v3",defaultTtlMs:18e5},airplanesLive:{baseUrl:"https://api.airplanes.live/v2",defaultTtlMs:15e3},rainViewer:{manifestUrl:"https://api.rainviewer.com/public/weather-maps.json",defaultTtlMs:3e5},npms:{baseUrl:"https://api.npms.io/v2",defaultTtlMs:3e5},npmRegistry:{baseUrl:"https://api.npmjs.org",defaultTtlMs:36e5},devTo:{baseUrl:"https://dev.to/api",defaultTtlMs:6e5},stackExchange:{baseUrl:"https://api.stackexchange.com/2.3",defaultTtlMs:6e5},itunesSearch:{baseUrl:"https://itunes.apple.com/search",defaultTtlMs:864e5},whereIsTheIss:{baseUrl:"https://api.wheretheiss.at/v1/satellites",defaultTtlMs:5e3},tle:{baseUrl:"https://tle.ivanstanojevic.me/api/tle",defaultTtlMs:36e5},groq:{chatCompletionsUrl:"https://api.groq.com/openai/v1/chat/completions",defaultModel:"llama-3.1-8b-instant",models:[{id:"llama-3.1-8b-instant",label:"Llama 3.1 \xb7 8B \xb7 instant",hint:"Fast default — good for short answers",vision:!1},{id:"llama-3.3-70b-versatile",label:"Llama 3.3 \xb7 70B \xb7 versatile",hint:"Slower but stronger reasoning",vision:!1},{id:"openai/gpt-oss-120b",label:"GPT-OSS \xb7 120B",hint:"Largest open-weights option",vision:!1},{id:"meta-llama/llama-4-scout-17b-16e-instruct",label:"Llama 4 \xb7 Scout \xb7 17B",hint:"Vision capable — analyzes images",vision:!0},{id:"meta-llama/llama-4-maverick-17b-128e-instruct",label:"Llama 4 \xb7 Maverick \xb7 17B",hint:"Vision capable — stronger multi-modal",vision:!0}]},gemini:{baseUrl:"https://generativelanguage.googleapis.com/v1beta/models",defaultModel:"gemini-2.0-flash",models:[{id:"gemini-2.0-flash",label:"Gemini 2.0 \xb7 Flash",hint:"Fast default — balanced quality"},{id:"gemini-2.0-flash-lite",label:"Gemini 2.0 \xb7 Flash Lite",hint:"Cheapest option"},{id:"gemini-1.5-flash",label:"Gemini 1.5 \xb7 Flash",hint:"Legacy — still supported"}]},pollinations:{imageBaseUrl:"https://image.pollinations.ai/prompt",defaultModel:"flux",models:[{id:"flux",label:"Flux"},{id:"flux-realism",label:"Flux \xb7 Realism"},{id:"flux-anime",label:"Flux \xb7 Anime"},{id:"flux-3d",label:"Flux \xb7 3D"},{id:"any-dark",label:"Any Dark"},{id:"turbo",label:"Turbo"}]}},locations:{lisbon:{lat:38.7223,lon:-9.1393,label:"Lisboa",timezone:"Europe/Lisbon"}}};function i(e){try{return"u">typeof process?process.env[e]:void 0}catch{return}}function n(e,a){let t=e;for(let e of a){if(!t||"object"!=typeof t)throw Error(`appConfig: missing path ${a.join(".")}`);t=t[e]}return t}function r(e,a){let t=i(a);if(t)return t;let r=n(o,e);if("string"!=typeof r)throw Error(`appConfig: expected string at ${e.join(".")}`);return r}function s(e,a){let t=i(a);if(void 0!==t&&""!==t){let e=Number(t);if(Number.isFinite(e))return e}let r=n(o,e);if("number"!=typeof r)throw Error(`appConfig: expected number at ${e.join(".")}`);return r}function l(e,a){let t=n(o,e);if(!Array.isArray(t))throw Error(`appConfig: expected array at ${e.join(".")}`);return Object.freeze(t.map((t,o)=>{try{return a(t)}catch(a){throw Error(`appConfig: invalid row at ${e.join(".")}[${o}]: ${a.message}`)}}))}function d(e){if("string"!=typeof e.id||"string"!=typeof e.label||"string"!=typeof e.hint)throw Error("expected { id, label, hint } strings");let a="boolean"==typeof e.vision?e.vision:void 0;return Object.freeze({id:e.id,label:e.label,hint:e.hint,...void 0!==a?{vision:a}:{}})}let c=Object.freeze({tmdb:Object.freeze({baseUrl:r(["dal","tmdb","baseUrl"],"TMDB_BASE_URL"),imageBaseUrl:r(["dal","tmdb","imageBaseUrl"],"TMDB_IMAGE_BASE_URL"),defaultTtlMs:s(["dal","tmdb","defaultTtlMs"],"TMDB_DEFAULT_TTL_MS")}),wikipedia:Object.freeze({contentBaseUrl:r(["dal","wikipedia","contentBaseUrl"],"WIKIPEDIA_CONTENT_BASE_URL"),analyticsBaseUrl:r(["dal","wikipedia","analyticsBaseUrl"],"WIKIPEDIA_ANALYTICS_BASE_URL"),defaultTtlMs:s(["dal","wikipedia","defaultTtlMs"],"WIKIPEDIA_DEFAULT_TTL_MS")}),sunriseSunset:Object.freeze({baseUrl:r(["dal","sunriseSunset","baseUrl"],"SUNRISE_SUNSET_BASE_URL"),defaultTtlMs:s(["dal","sunriseSunset","defaultTtlMs"],"SUNRISE_SUNSET_DEFAULT_TTL_MS")}),openLibrary:Object.freeze({searchUrl:r(["dal","openLibrary","searchUrl"],"OPEN_LIBRARY_SEARCH_URL"),coverBaseUrl:r(["dal","openLibrary","coverBaseUrl"],"OPEN_LIBRARY_COVER_BASE_URL"),defaultTtlMs:s(["dal","openLibrary","defaultTtlMs"],"OPEN_LIBRARY_DEFAULT_TTL_MS")}),coinGecko:Object.freeze({baseUrl:r(["dal","coinGecko","baseUrl"],"COINGECKO_BASE_URL"),defaultTtlMs:s(["dal","coinGecko","defaultTtlMs"],"COINGECKO_DEFAULT_TTL_MS")}),openMeteo:Object.freeze({baseUrl:r(["dal","openMeteo","baseUrl"],"OPEN_METEO_BASE_URL"),defaultTtlMs:s(["dal","openMeteo","defaultTtlMs"],"OPEN_METEO_DEFAULT_TTL_MS")}),hn:Object.freeze({algoliaBaseUrl:r(["dal","hn","algoliaBaseUrl"],"HN_ALGOLIA_BASE_URL"),firebaseBaseUrl:r(["dal","hn","firebaseBaseUrl"],"HN_FIREBASE_BASE_URL"),defaultTtlMs:s(["dal","hn","defaultTtlMs"],"HN_DEFAULT_TTL_MS")}),github:Object.freeze({baseUrl:r(["dal","github","baseUrl"],"GITHUB_BASE_URL"),defaultTtlMs:s(["dal","github","defaultTtlMs"],"GITHUB_DEFAULT_TTL_MS")}),rss:Object.freeze({baseUrl:r(["dal","rss","baseUrl"],"RSS_BASE_URL"),defaultTtlMs:s(["dal","rss","defaultTtlMs"],"RSS_DEFAULT_TTL_MS")}),ipma:Object.freeze({baseUrl:r(["dal","ipma","baseUrl"],"IPMA_BASE_URL"),defaultTtlMs:s(["dal","ipma","defaultTtlMs"],"IPMA_DEFAULT_TTL_MS")}),usgs:Object.freeze({baseUrl:r(["dal","usgs","baseUrl"],"USGS_BASE_URL"),defaultTtlMs:s(["dal","usgs","defaultTtlMs"],"USGS_DEFAULT_TTL_MS")}),whereIsTheIss:Object.freeze({baseUrl:r(["dal","whereIsTheIss","baseUrl"],"WHERE_IS_THE_ISS_BASE_URL"),defaultTtlMs:s(["dal","whereIsTheIss","defaultTtlMs"],"WHERE_IS_THE_ISS_DEFAULT_TTL_MS")}),tle:Object.freeze({baseUrl:r(["dal","tle","baseUrl"],"TLE_BASE_URL"),defaultTtlMs:s(["dal","tle","defaultTtlMs"],"TLE_DEFAULT_TTL_MS")}),groq:Object.freeze({chatCompletionsUrl:r(["dal","groq","chatCompletionsUrl"],"GROQ_CHAT_COMPLETIONS_URL"),defaultModel:r(["dal","groq","defaultModel"],"GROQ_DEFAULT_MODEL"),models:l(["dal","groq","models"],d)}),gemini:Object.freeze({baseUrl:r(["dal","gemini","baseUrl"],"GEMINI_BASE_URL"),defaultModel:r(["dal","gemini","defaultModel"],"GEMINI_DEFAULT_MODEL"),models:l(["dal","gemini","models"],d)}),pollinations:Object.freeze({imageBaseUrl:r(["dal","pollinations","imageBaseUrl"],"POLLINATIONS_IMAGE_BASE_URL"),defaultModel:r(["dal","pollinations","defaultModel"],"POLLINATIONS_DEFAULT_MODEL"),models:l(["dal","pollinations","models"],function(e){if("string"!=typeof e.id||"string"!=typeof e.label)throw Error("expected { id, label } strings");return Object.freeze({id:e.id,label:e.label})})}),noaaSwpc:Object.freeze({baseUrl:r(["dal","noaaSwpc","baseUrl"],"NOAA_SWPC_BASE_URL"),defaultTtlMs:s(["dal","noaaSwpc","defaultTtlMs"],"NOAA_SWPC_DEFAULT_TTL_MS")}),nasaEonet:Object.freeze({baseUrl:r(["dal","nasaEonet","baseUrl"],"NASA_EONET_BASE_URL"),defaultTtlMs:s(["dal","nasaEonet","defaultTtlMs"],"NASA_EONET_DEFAULT_TTL_MS")}),airplanesLive:Object.freeze({baseUrl:r(["dal","airplanesLive","baseUrl"],"AIRPLANES_LIVE_BASE_URL"),defaultTtlMs:s(["dal","airplanesLive","defaultTtlMs"],"AIRPLANES_LIVE_DEFAULT_TTL_MS")}),rainViewer:Object.freeze({manifestUrl:r(["dal","rainViewer","manifestUrl"],"RAIN_VIEWER_MANIFEST_URL"),defaultTtlMs:s(["dal","rainViewer","defaultTtlMs"],"RAIN_VIEWER_DEFAULT_TTL_MS")}),npms:Object.freeze({baseUrl:r(["dal","npms","baseUrl"],"NPMS_BASE_URL"),defaultTtlMs:s(["dal","npms","defaultTtlMs"],"NPMS_DEFAULT_TTL_MS")}),npmRegistry:Object.freeze({baseUrl:r(["dal","npmRegistry","baseUrl"],"NPM_REGISTRY_BASE_URL"),defaultTtlMs:s(["dal","npmRegistry","defaultTtlMs"],"NPM_REGISTRY_DEFAULT_TTL_MS")}),devTo:Object.freeze({baseUrl:r(["dal","devTo","baseUrl"],"DEV_TO_BASE_URL"),defaultTtlMs:s(["dal","devTo","defaultTtlMs"],"DEV_TO_DEFAULT_TTL_MS")}),stackExchange:Object.freeze({baseUrl:r(["dal","stackExchange","baseUrl"],"STACK_EXCHANGE_BASE_URL"),defaultTtlMs:s(["dal","stackExchange","defaultTtlMs"],"STACK_EXCHANGE_DEFAULT_TTL_MS")}),itunesSearch:Object.freeze({baseUrl:r(["dal","itunesSearch","baseUrl"],"ITUNES_SEARCH_BASE_URL"),defaultTtlMs:s(["dal","itunesSearch","defaultTtlMs"],"ITUNES_SEARCH_DEFAULT_TTL_MS")})}),p=Object.freeze({lisbon:Object.freeze({lat:s(["locations","lisbon","lat"],"LOCATION_LISBON_LAT"),lon:s(["locations","lisbon","lon"],"LOCATION_LISBON_LON"),label:r(["locations","lisbon","label"],"LOCATION_LISBON_LABEL"),timezone:r(["locations","lisbon","timezone"],"LOCATION_LISBON_TIMEZONE")})})},28170(e,a,t){t.d(a,{Ym:()=>c,Nx:()=>p,Fd:()=>x,aw:()=>m});var o=t(37991),i=t(89874);let n={"time.justNow":{en:"just now",pt:"agora mesmo"},"time.mAgo":{en:"{n}m ago",pt:"h\xe1 {n}m"},"time.hAgo":{en:"{n}h ago",pt:"h\xe1 {n}h"},"time.dAgo":{en:"{n}d ago",pt:"h\xe1 {n}d"},updated:{en:"updated {age}",pt:"atualizado {age}"},refresh:{en:"Refresh",pt:"Atualizar"},loading:{en:"Loading…",pt:"A carregar…"},noData:{en:"No data available",pt:"Sem dados dispon\xedveis"},noDescription:{en:"No description provided.",pt:"Sem descri\xe7\xe3o."},failedToFetch:{en:"Failed to fetch",pt:"Erro ao carregar"},perWeek:{en:"/ wk",pt:"/ sem"},"devtools.heading":{en:"Dev Tools",pt:"Ferramentas"},"devtools.playground":{en:"Playground",pt:"Playground"},"devtools.pad":{en:"Pad",pt:"Pad"},"devtools.charts":{en:"Charts",pt:"Gr\xe1ficos"},"devtools.csv":{en:"CSV",pt:"CSV"},"devtools.regex":{en:"Regex",pt:"Regex"},"devtools.json":{en:"JSON",pt:"JSON"},"devtools.diff":{en:"Diff",pt:"Diferen\xe7as"},"devtools.jwt":{en:"JWT",pt:"JWT"},"devtools.cron":{en:"Cron",pt:"Cron"},"devtools.colors":{en:"Colors",pt:"Cores"},"devtools.api":{en:"API",pt:"API"}},r="atlantis:locale",s="shell:locale";function l(e){return"en"===e||"pt"===e}function d(){try{let e=localStorage.getItem(r);if(l(e))return e}catch{}return"en"}function c(){let[e,a]=(0,o.useState)(d),t=(0,o.useCallback)(e=>{a(e);try{localStorage.setItem(r,e)}catch{}(0,i.Is)(s,e).catch(()=>{}),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,o.useEffect)(()=>{let e=e=>{a(e.detail)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,o.useEffect)(()=>{(0,i.PL)(s).then(t=>{if(l(t)&&t!==e){try{localStorage.setItem(r,t)}catch{}a(t)}}).catch(()=>{})},[]),[e,t]}function p(e,a){let t=a?{...n,...a}:n;return(a,o)=>{let i=function(e,a){if(!a||!e.includes("|"))return e;let t=null;for(let e of Object.values(a))if("number"==typeof e&&Number.isFinite(e)){t=e;break}if(null===t)return e;let o=e.indexOf("|"),i=e.slice(0,o),n=e.slice(o+1);return 1===t?i:n}(t[a]?.[e]??a,o);return o?Object.entries(o).reduce((e,[a,t])=>e.replace(RegExp(`\\{${a}\\}`,"g"),String(t)),i):i}}function m(e,a){let t=Math.floor((Date.now()-new Date(e).getTime())/6e4);if(t<1)return a("time.justNow");if(t<60)return a("time.mAgo",{n:t});let o=Math.floor(t/60);return o<24?a("time.hAgo",{n:o}):a("time.dAgo",{n:Math.floor(o/24)})}(0,i.PL)(s).then(e=>{if(l(e))try{localStorage.setItem(r,e)}catch{}}).catch(()=>{});var g=t(65723),u=t(36859),h=t.n(u);let f=h().div`
  display: flex;
  gap: 4px;
  background: ${i.w4.colors.surface};
  border: 1px solid ${i.w4.colors.border};
  border-radius: ${i.w4.borderRadius.md};
  padding: 2px;
`,b=h().button`
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
`;function x({locale:e,onChange:a}){return(0,g.jsxs)(f,{children:[(0,g.jsx)(b,{active:"pt"===e,onClick:()=>a("pt"),children:"PT"}),(0,g.jsx)(b,{active:"en"===e,onClick:()=>a("en"),children:"EN"})]})}},87330(e,a,t){t.d(a,{FlyoutPanel:()=>eE});var o=t(65723),i=t(37991),n=t.n(i),r=t(36859),s=t.n(r),l=t(72799),d=t(81316),c=t(40814),p=t(36896),m=t(87902),g=t(53013),u=t(32887),h=t(49510),f=t(39848),b=t(37901),x=t(3045),y=t(43775),w=t(41783),v=t(83539),k=t(39416),$=t(1837),z=t(57167),M=t(84494),j=t(82314),S=t(20255),A=t(35751),T=t(69633),C=t(92946),L=t(40822),F=t(36720),N=t(57400),E=t(58456),P=t(43317),I=t(52709),R=t(8006),D=t(89301),B=t(37561),O=t(83517),H=t(28207),_=t(37032),K=t(6949),U=t(8218),q=t(36829),G=t(59591),W=t(15553),Y=t(69923),V=t(72820),J=t(14621),Q=t(68479),Z=t(72534),X=t(66673),ee=t(67490),ea=t(49033),et=t(99038),eo=t(45775),ei=t(31365),en=t(62937),er=t(9821),es=t(65912),el=t(80158),ed=t(88641),ec=t(48607),ep=t(83249),em=t(1821),eg=t(15889),eu=t(89655),eh=t(27170),ef=t(19161),eb=t(71849),ex=t(41604),ey=t(13142),ew=t(61187),ev=t(77747),ek=t(2932),e$=t(24525),ez=t(57230),eM=t(22164);let ej={activity:p.A,"a-large-small":m.A,apple:g.A,"arrow-right":u.A,"bar-chart-2":h.A,book:f.A,"book-open":b.A,briefcase:x.A,calendar:y.A,clock:w.A,"circle-dot":v.A,cloud:k.A,compass:$.A,cpu:z.A,droplets:M.A,feather:j.A,file:S.A,"file-text":A.A,folder:T.A,"git-branch":C.A,github:L.A,globe:F.A,grid:N.A,hand:E.A,hash:P.A,heart:I.A,key:R.A,hexagon:D.A,home:B.A,landmark:O.A,layers:H.A,"layout-grid":_.A,leaf:K.A,lightbulb:U.A,list:q.A,map:G.A,"map-pin":W.A,"message-circle":Y.A,"message-square":V.A,minus:J.A,monitor:Q.A,mountain:Z.A,package:X.A,palette:ee.A,"pen-tool":ea.A,"pie-chart":et.A,plane:eo.A,plus:ei.A,ruler:en.A,shirt:er.A,slash:es.A,square:el.A,star:ed.A,sun:ec.A,terminal:ep.A,thermometer:em.A,triangle:eg.A,trophy:eu.A,truck:eh.A,type:ef.A,users:eb.A,"volume-2":ex.A,watch:ey.A,waves:ew.A,wind:ev.A,wrench:ek.A,x:e$.A,zap:ez.A,bot:eM.A},eS=(0,l.keyframes)`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,eA=s().div`
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
  animation: ${eS} 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
`,eT=s().div`
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
`,eC=s().button`
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
`,eL=({size:e=14,strokeWidth:a=1.75})=>(0,o.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,o.jsx)("polyline",{points:"14 2 14 8 20 8"})]});function eF({iconKey:e}){let a=e?ej[e]:null;return a?(0,o.jsx)(a,{size:14,strokeWidth:1.75}):(0,o.jsx)(eL,{})}function eN({entries:e,activeId:a,onSelect:t}){return(0,o.jsx)(o.Fragment,{children:e.map(e=>e.children?(0,o.jsx)(n().Fragment,{children:(0,o.jsx)(eN,{entries:e.children,activeId:a,onSelect:t})},e.id):(0,o.jsxs)(eC,{active:a===e.id,onClick:()=>t(e),children:[(0,o.jsx)(eF,{iconKey:e.icon}),e.name]},e.id))})}function eE({activeId:e}){let{flyout:a,scheduleFlyoutClose:t,cancelFlyoutClose:i}=(0,c.c)();if(!a)return null;let n=a.entry.icon?ej[a.entry.icon]:null;return(0,o.jsxs)(eA,{anchorY:a.anchorY,onMouseEnter:i,onMouseLeave:t,children:[(0,o.jsxs)(eT,{children:[n?(0,o.jsx)(n,{size:13,strokeWidth:2}):(0,o.jsx)(eL,{size:13,strokeWidth:2}),a.entry.name]}),(0,o.jsx)(eN,{entries:a.entry.children??[],activeId:e,onSelect:e=>{a.onSelect(e),t()}})]})}},40814(e,a,t){t.d(a,{I:()=>i,c:()=>n});var o=t(37991);let i=(0,o.createContext)({collapsed:!1,toggle:()=>{},flyout:null,openFlyout:()=>{},scheduleFlyoutClose:()=>{},cancelFlyoutClose:()=>{}}),n=()=>(0,o.useContext)(i)},89874(e,a,t){t.d(a,{jv:()=>q.listSettingsByPrefix,NP:()=>R,Fm:()=>q.setStorageProvider,Iu:()=>q.listDocs,TM:()=>ee,eP:()=>D,PL:()=>q.getSetting,xx:()=>ec,VJ:()=>ea,UW:()=>U,Is:()=>q.putSetting,sW:()=>q.clearSettingsByPrefix,PE:()=>C,bg:()=>q.deleteLocalSetting,w4:()=>o.w4});var o=t(81316),i=t(65723),n=t(37991),r=t.n(n),s=t(36859),l=t.n(s);l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${o.w4.spacing.sm};
  background: ${o.w4.colors.surface};
  border: 1px solid ${o.w4.colors.border};
  border-radius: ${o.w4.borderRadius.md};
  color: ${o.w4.colors.mainText};
  font-family: ${o.w4.typography.fontFamily};
  font-size: ${o.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,l().div`
  position: relative;
`;var d=t(72799),c=t(40814);let p="260px",m="56px",g="48px",u=l().header`
  display: flex;
  align-items: center;
  height: calc(${g} + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  background: ${o.w4.colors.sidebarBg};
  border-bottom: 1px solid ${o.w4.colors.sidebarBorder};
  flex-shrink: 0;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(12px);

  /* Mobile: logo + app label on row 1, scrollable chrome cluster on row 2. */
  @media (max-width: ${o.w4.breakpoints.md}) {
    flex-wrap: wrap;
    height: auto;
    min-height: calc(${g} + env(safe-area-inset-top, 0px));
  }
`,h=l().div`
  width: ${m};
  min-width: ${m};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${o.w4.colors.sidebarBorder};
  flex-shrink: 0;

  @media (max-width: ${o.w4.breakpoints.md}) {
    display: none;
  }
`,f=l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${o.w4.borderRadius.md};
  cursor: pointer;
  color: ${o.w4.colors.sidebarTextMuted};
  transition: background 0.15s, color 0.15s, transform 0.2s;
  flex-shrink: 0;

  &:hover {
    background: ${o.w4.colors.sidebarHover};
    color: ${o.w4.colors.accent};
  }

  &:active {
    transform: scale(0.9);
  }
`,b=(0,d.keyframes)`
  0%   { transform: scaleY(1); }
  2.5% { transform: scaleY(1.35); }
  5%   { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`,x=l().button`
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 0 ${o.w4.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${o.w4.typography.fontFamily};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${o.w4.colors.mainText};
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover { opacity: 0.8; }
`,y=l().span`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${b} 10s ease ${({index:e})=>.07*e}s infinite;

  ${({accent:e})=>e&&`
    background: linear-gradient(135deg, ${o.w4.colors.accent}, ${o.w4.colors.accentHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`,w=l().div`
  font-size: ${o.w4.typography.fontSizeBase};
  font-weight: 500;
  color: ${o.w4.colors.sidebarTextMuted};
  font-family: ${o.w4.typography.fontFamily};
  padding-left: ${o.w4.spacing.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 0;

  &::before {
    content: '/';
    margin-right: ${o.w4.spacing.sm};
    color: ${o.w4.colors.border};
  }
`,v=l().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${o.w4.spacing.md};
  padding: 0 ${o.w4.spacing.lg};
  min-width: 0;

  /* Extra breathing room between remote-app chrome and shell cluster */
  > section + section,
  > *:not(section) + section {
    margin-left: ${o.w4.spacing.sm};
  }

  /* Full-width second row on mobile, horizontally scrollable.
     Align to the right so the avatar / bell stay flush with the
     viewport edge — matches desktop end-alignment. */
  @media (max-width: ${o.w4.breakpoints.md}) {
    flex-basis: 100%;
    width: 100%;
    justify-content: flex-end;
    padding: ${o.w4.spacing.xs} ${o.w4.spacing.sm};
    gap: ${o.w4.spacing.xs};
    border-top: 1px solid ${o.w4.colors.sidebarBorder};
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
`,k=l().div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,$=l().div`
  display: flex;
  flex-direction: column;
  height: ${o.w4.sizes.fullHeight};
  background: ${o.w4.colors.mainBg};
  font-family: ${o.w4.typography.fontFamily};
  color: ${o.w4.colors.mainText};
  overflow: hidden;
`,z=l().aside`
  width: ${({collapsed:e})=>e?m:p};
  min-width: ${({collapsed:e})=>e?m:p};
  background: ${o.w4.colors.sidebarBg};
  border-right: 1px solid ${o.w4.colors.sidebarBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${o.w4.breakpoints.md}) {
    display: none;
  }
`,M=l().div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,j=l().main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,S=[{char:"A",accent:!1},{char:"t",accent:!1},{char:"l",accent:!1},{char:"a",accent:!0},{char:"n",accent:!0},{char:"t",accent:!0},{char:"i",accent:!0},{char:"s",accent:!0}];function A(){return(0,i.jsx)(x,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:S.map((e,a)=>(0,i.jsx)(y,{index:a,accent:e.accent,children:e.char},a))})}let T="atlantis:sidebar-collapsed";function C({sidebar:e,children:a,topBarRight:o,title:s="Atlantis",activeId:l=null}){let[d,p]=(0,n.useState)(()=>{try{return"true"===localStorage.getItem(T)}catch{return!1}}),[m,g]=(0,n.useState)(null),b=(0,n.useRef)(),x=()=>p(e=>{let a=!e;try{localStorage.setItem(T,String(a))}catch{}return a}),y=r().useMemo(()=>r().lazy(()=>Promise.resolve().then(t.bind(t,87330)).then(e=>({default:e.FlyoutPanel}))),[]);return(0,i.jsx)(c.I.Provider,{value:{collapsed:d,toggle:x,flyout:m,openFlyout:(e,a,t)=>{clearTimeout(b.current),g({entry:e,anchorY:a,onSelect:t})},scheduleFlyoutClose:()=>{b.current=setTimeout(()=>g(null),160)},cancelFlyoutClose:()=>clearTimeout(b.current)},children:(0,i.jsxs)($,{children:[(0,i.jsxs)(u,{children:[e&&(0,i.jsx)(h,{children:(0,i.jsx)(f,{onClick:x,title:d?"Expand sidebar":"Collapse sidebar",children:(0,i.jsxs)("svg",{width:17,height:17,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),(0,i.jsx)("path",{d:"M9 3v18"})]})})}),(0,i.jsx)(A,{}),s&&(0,i.jsx)(w,{children:s}),o&&(0,i.jsx)(v,{children:o})]}),(0,i.jsxs)(k,{children:[null!=e&&(0,i.jsx)(z,{collapsed:d,children:(0,i.jsx)(M,{children:e})}),(0,i.jsx)(j,{children:a})]}),m&&(0,i.jsx)(r().Suspense,{fallback:null,children:(0,i.jsx)(y,{activeId:l})})]})})}l().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`,l().div`
  overflow: hidden;
`,l().div`
  padding-left: ${o.w4.spacing.md};
`,l().div`
  display: flex;
  flex-direction: column;
`,l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`${o.w4.spacing.sm} ${o.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  gap: ${({collapsed:e})=>e?"0":o.w4.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${o.w4.colors.sidebarTextMuted};
  font-size: ${o.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${o.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${o.w4.borderRadius.md};
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${o.w4.colors.sidebarText};
    background: ${o.w4.colors.sidebarHover};
  }
`,l().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"8px"};
  min-width: 0;
`,l().span`
  overflow: hidden;
  white-space: nowrap;
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  transition: opacity 0.18s ease, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,l().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  color: ${o.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  svg {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,l().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"9px 0":`7px ${o.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  gap: ${({collapsed:e})=>e?"0":"8px"};
  background: ${({active:e})=>e?o.w4.colors.accentMuted:"none"};
  border: none;
  border-left: ${({collapsed:e})=>e?"none":"2px"} solid
    ${({active:e})=>e?o.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?o.w4.colors.sidebarActive:o.w4.colors.sidebarText};
  font-size: ${o.w4.typography.fontSizeBase};
  font-weight: ${({active:e})=>e?"600":"400"};
  font-family: ${o.w4.typography.fontFamily};
  text-align: left;
  border-radius: ${({collapsed:e})=>e?"0":`0 ${o.w4.borderRadius.md} ${o.w4.borderRadius.md} 0`};
  transition: background 0.15s, color 0.15s, font-weight 0.15s, border-color 0.15s;

  &:hover {
    background: ${o.w4.colors.sidebarHover};
    color: ${o.w4.colors.mainText};
  }
`;let L=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;l().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${L} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${o.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${o.w4.colors.surface};
  }
`,l().span`
  display: block;
  background: ${o.w4.colors.surface};
  border: 1px solid ${o.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${o.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${o.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${o.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${o.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,t(87330);let F=(0,n.createContext)({mode:"dark",resolvedMode:"dark",setMode:()=>{}}),N="atlantis:theme-mode";function E(){return"u"<typeof window?"dark":window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}let P="atlantis-webfonts";function I({resolvedMode:e}){let a=(0,n.useMemo)(()=>(0,o.EE)(e),[e]);return(0,i.jsx)(d.Global,{styles:(0,d.css)`
        :root {
          ${a}
        }

        html {
          color-scheme: ${e};
        }

        body {
          background: var(--at-mainBg);
          color: var(--at-mainText);
          font-family: ${o.w4.typography.fontFamily};
          font-size: ${o.w4.typography.fontSizeBase};
          line-height: ${o.w4.typography.lineHeightBase};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          transition: background 0.3s ease, color 0.3s ease;
        }

        /* Inherit by default — every app gets Inter without restating it. */
        button, input, textarea, select {
          font-family: inherit;
        }
        code, kbd, pre, samp {
          font-family: ${o.w4.typography.fontFamilyMono};
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: var(--at-border);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: var(--at-mainTextMuted);
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: var(--at-border) transparent;
        }

        /* Selection */
        ::selection {
          background: var(--at-accentMuted);
          color: var(--at-mainText);
        }

        /* Focus visible */
        :focus-visible {
          outline: 2px solid var(--at-accent);
          outline-offset: 2px;
        }
      `})}function R({children:e}){let[a,t]=(0,n.useState)(()=>{try{let e=localStorage.getItem(N);if("dark"===e||"light"===e||"system"===e)return e}catch{}return"dark"}),[o,r]=(0,n.useState)(()=>"system"===a?E():a),s=(0,n.useCallback)(e=>{t(e);try{localStorage.setItem(N,e)}catch{}},[]);(0,n.useEffect)(()=>{if("system"!==a)return void r(a);r(E());let e=window.matchMedia("(prefers-color-scheme: light)"),t=e=>{r(e.matches?"light":"dark")};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[a]),(0,n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",o)},[o]),(0,n.useEffect)(()=>{!function(){if("u"<typeof document||document.getElementById(P))return;let e=document.createElement("link");e.id=P,e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Cormorant+Garamond:wght@400;500;600;700&display=swap",document.head.appendChild(e)}()},[]);let l=(0,n.useMemo)(()=>({mode:a,resolvedMode:o,setMode:s}),[a,o,s]);return(0,i.jsxs)(F.Provider,{value:l,children:[(0,i.jsx)(I,{resolvedMode:o}),e]})}function D(){return(0,n.useContext)(F)}let B=l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid ${o.w4.colors.border};
  border-radius: ${o.w4.borderRadius.md};
  cursor: pointer;
  color: ${o.w4.colors.mainTextMuted};
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${o.w4.colors.sidebarHover};
    color: ${o.w4.colors.accent};
    border-color: ${o.w4.colors.accent};
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
`,O=["dark","light","system"],H={dark:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8z"/>',light:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',system:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'},_={dark:"Dark mode (click for light)",light:"Light mode (click for system)",system:"System mode (click for dark)"};function K({mode:e,size:a=16}){return(0,i.jsx)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round",dangerouslySetInnerHTML:{__html:H[e]}})}function U(){let{mode:e,setMode:a}=D();return(0,i.jsx)(B,{onClick:()=>{let t=O.indexOf(e);a(O[(t+1)%O.length])},title:_[e],children:(0,i.jsx)(K,{mode:e,size:16})})}[{id:"europe",name:"Europe",icon:"\uD83C\uDF0D",places:[{id:"lisbon",name:"Lisbon",country:"PT",lat:38.7169,lng:-9.1399,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"porto",name:"Porto",country:"PT",lat:41.1579,lng:-8.6291,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"faro",name:"Faro",country:"PT",lat:37.0194,lng:-7.9322,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"coimbra",name:"Coimbra",country:"PT",lat:40.2033,lng:-8.4103,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"braga",name:"Braga",country:"PT",lat:41.5518,lng:-8.4229,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"ponta-delgada",name:"Ponta Delgada",country:"PT",lat:37.7412,lng:-25.6756,timezone:"Atlantic/Azores",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"lourinha",name:"Lourinh\xe3",country:"PT",lat:39.2417,lng:-9.3133,timezone:"Europe/Lisbon",flag:"\uD83C\uDDF5\uD83C\uDDF9",zoom:12},{id:"london",name:"London",country:"GB",lat:51.5074,lng:-.1278,timezone:"Europe/London",flag:"\uD83C\uDDEC\uD83C\uDDE7",zoom:12},{id:"paris",name:"Paris",country:"FR",lat:48.8566,lng:2.3522,timezone:"Europe/Paris",flag:"\uD83C\uDDEB\uD83C\uDDF7",zoom:12},{id:"berlin",name:"Berlin",country:"DE",lat:52.52,lng:13.405,timezone:"Europe/Berlin",flag:"\uD83C\uDDE9\uD83C\uDDEA",zoom:12},{id:"madrid",name:"Madrid",country:"ES",lat:40.4168,lng:-3.7038,timezone:"Europe/Madrid",flag:"\uD83C\uDDEA\uD83C\uDDF8",zoom:12},{id:"rome",name:"Rome",country:"IT",lat:41.9028,lng:12.4964,timezone:"Europe/Rome",flag:"\uD83C\uDDEE\uD83C\uDDF9",zoom:12},{id:"amsterdam",name:"Amsterdam",country:"NL",lat:52.3676,lng:4.9041,timezone:"Europe/Amsterdam",flag:"\uD83C\uDDF3\uD83C\uDDF1",zoom:12},{id:"athens",name:"Athens",country:"GR",lat:37.9838,lng:23.7275,timezone:"Europe/Athens",flag:"\uD83C\uDDEC\uD83C\uDDF7",zoom:12},{id:"brussels",name:"Brussels",country:"BE",lat:50.8503,lng:4.3517,timezone:"Europe/Brussels",flag:"\uD83C\uDDE7\uD83C\uDDEA",zoom:12},{id:"vienna",name:"Vienna",country:"AT",lat:48.2082,lng:16.3738,timezone:"Europe/Vienna",flag:"\uD83C\uDDE6\uD83C\uDDF9",zoom:12},{id:"warsaw",name:"Warsaw",country:"PL",lat:52.2297,lng:21.0122,timezone:"Europe/Warsaw",flag:"\uD83C\uDDF5\uD83C\uDDF1",zoom:12},{id:"stockholm",name:"Stockholm",country:"SE",lat:59.3293,lng:18.0686,timezone:"Europe/Stockholm",flag:"\uD83C\uDDF8\uD83C\uDDEA",zoom:12},{id:"oslo",name:"Oslo",country:"NO",lat:59.9139,lng:10.7522,timezone:"Europe/Oslo",flag:"\uD83C\uDDF3\uD83C\uDDF4",zoom:12},{id:"copenhagen",name:"Copenhagen",country:"DK",lat:55.6761,lng:12.5683,timezone:"Europe/Copenhagen",flag:"\uD83C\uDDE9\uD83C\uDDF0",zoom:12},{id:"helsinki",name:"Helsinki",country:"FI",lat:60.1699,lng:24.9384,timezone:"Europe/Helsinki",flag:"\uD83C\uDDEB\uD83C\uDDEE",zoom:12},{id:"reykjavik",name:"Reykjavik",country:"IS",lat:64.1466,lng:-21.9426,timezone:"Atlantic/Reykjavik",flag:"\uD83C\uDDEE\uD83C\uDDF8",zoom:12},{id:"dublin",name:"Dublin",country:"IE",lat:53.3498,lng:-6.2603,timezone:"Europe/Dublin",flag:"\uD83C\uDDEE\uD83C\uDDEA",zoom:12},{id:"bern",name:"Bern",country:"CH",lat:46.948,lng:7.4474,timezone:"Europe/Zurich",flag:"\uD83C\uDDE8\uD83C\uDDED",zoom:12},{id:"kyiv",name:"Kyiv",country:"UA",lat:50.4501,lng:30.5234,timezone:"Europe/Kyiv",flag:"\uD83C\uDDFA\uD83C\uDDE6",zoom:12},{id:"moscow",name:"Moscow",country:"RU",lat:55.7558,lng:37.6173,timezone:"Europe/Moscow",flag:"\uD83C\uDDF7\uD83C\uDDFA",zoom:12},{id:"bucharest",name:"Bucharest",country:"RO",lat:44.4268,lng:26.1025,timezone:"Europe/Bucharest",flag:"\uD83C\uDDF7\uD83C\uDDF4",zoom:12},{id:"budapest",name:"Budapest",country:"HU",lat:47.4979,lng:19.0402,timezone:"Europe/Budapest",flag:"\uD83C\uDDED\uD83C\uDDFA",zoom:12},{id:"prague",name:"Prague",country:"CZ",lat:50.0755,lng:14.4378,timezone:"Europe/Prague",flag:"\uD83C\uDDE8\uD83C\uDDFF",zoom:12},{id:"bratislava",name:"Bratislava",country:"SK",lat:48.1486,lng:17.1077,timezone:"Europe/Bratislava",flag:"\uD83C\uDDF8\uD83C\uDDF0",zoom:12},{id:"ljubljana",name:"Ljubljana",country:"SI",lat:46.0569,lng:14.5058,timezone:"Europe/Ljubljana",flag:"\uD83C\uDDF8\uD83C\uDDEE",zoom:12},{id:"zagreb",name:"Zagreb",country:"HR",lat:45.815,lng:15.9819,timezone:"Europe/Zagreb",flag:"\uD83C\uDDED\uD83C\uDDF7",zoom:12},{id:"belgrade",name:"Belgrade",country:"RS",lat:44.7866,lng:20.4489,timezone:"Europe/Belgrade",flag:"\uD83C\uDDF7\uD83C\uDDF8",zoom:12},{id:"sarajevo",name:"Sarajevo",country:"BA",lat:43.8564,lng:18.4131,timezone:"Europe/Sarajevo",flag:"\uD83C\uDDE7\uD83C\uDDE6",zoom:12},{id:"sofia",name:"Sofia",country:"BG",lat:42.6977,lng:23.3219,timezone:"Europe/Sofia",flag:"\uD83C\uDDE7\uD83C\uDDEC",zoom:12},{id:"tallinn",name:"Tallinn",country:"EE",lat:59.437,lng:24.7536,timezone:"Europe/Tallinn",flag:"\uD83C\uDDEA\uD83C\uDDEA",zoom:12},{id:"riga",name:"Riga",country:"LV",lat:56.946,lng:24.1059,timezone:"Europe/Riga",flag:"\uD83C\uDDF1\uD83C\uDDFB",zoom:12},{id:"vilnius",name:"Vilnius",country:"LT",lat:54.6872,lng:25.2797,timezone:"Europe/Vilnius",flag:"\uD83C\uDDF1\uD83C\uDDF9",zoom:12},{id:"minsk",name:"Minsk",country:"BY",lat:53.9045,lng:27.5615,timezone:"Europe/Minsk",flag:"\uD83C\uDDE7\uD83C\uDDFE",zoom:12},{id:"chisinau",name:"Chișinău",country:"MD",lat:47.0105,lng:28.8638,timezone:"Europe/Chisinau",flag:"\uD83C\uDDF2\uD83C\uDDE9",zoom:12},{id:"tirana",name:"Tirana",country:"AL",lat:41.3317,lng:19.8319,timezone:"Europe/Tirane",flag:"\uD83C\uDDE6\uD83C\uDDF1",zoom:12},{id:"skopje",name:"Skopje",country:"MK",lat:41.9973,lng:21.428,timezone:"Europe/Skopje",flag:"\uD83C\uDDF2\uD83C\uDDF0",zoom:12},{id:"podgorica",name:"Podgorica",country:"ME",lat:42.4304,lng:19.2594,timezone:"Europe/Podgorica",flag:"\uD83C\uDDF2\uD83C\uDDEA",zoom:12},{id:"nicosia",name:"Nicosia",country:"CY",lat:35.1856,lng:33.3823,timezone:"Asia/Nicosia",flag:"\uD83C\uDDE8\uD83C\uDDFE",zoom:12},{id:"valletta",name:"Valletta",country:"MT",lat:35.8997,lng:14.5147,timezone:"Europe/Malta",flag:"\uD83C\uDDF2\uD83C\uDDF9",zoom:12},{id:"luxembourg",name:"Luxembourg",country:"LU",lat:49.6116,lng:6.1319,timezone:"Europe/Luxembourg",flag:"\uD83C\uDDF1\uD83C\uDDFA",zoom:12},{id:"andorra",name:"Andorra la Vella",country:"AD",lat:42.5063,lng:1.5218,timezone:"Europe/Andorra",flag:"\uD83C\uDDE6\uD83C\uDDE9",zoom:13},{id:"monaco",name:"Monaco",country:"MC",lat:43.7384,lng:7.4246,timezone:"Europe/Monaco",flag:"\uD83C\uDDF2\uD83C\uDDE8",zoom:14},{id:"san-marino",name:"San Marino",country:"SM",lat:43.9333,lng:12.45,timezone:"Europe/San_Marino",flag:"\uD83C\uDDF8\uD83C\uDDF2",zoom:14},{id:"liechtenstein",name:"Vaduz",country:"LI",lat:47.141,lng:9.5215,timezone:"Europe/Vaduz",flag:"\uD83C\uDDF1\uD83C\uDDEE",zoom:13},{id:"vatican",name:"Vatican City",country:"VA",lat:41.9029,lng:12.4534,timezone:"Europe/Vatican",flag:"\uD83C\uDDFB\uD83C\uDDE6",zoom:15}]},{id:"americas",name:"Americas",icon:"\uD83C\uDF0E",places:[{id:"washington-dc",name:"Washington D.C.",country:"US",lat:38.9072,lng:-77.0369,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"new-york",name:"New York",country:"US",lat:40.7128,lng:-74.006,timezone:"America/New_York",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"san-francisco",name:"San Francisco",country:"US",lat:37.7749,lng:-122.4194,timezone:"America/Los_Angeles",flag:"\uD83C\uDDFA\uD83C\uDDF8",zoom:12},{id:"ottawa",name:"Ottawa",country:"CA",lat:45.4215,lng:-75.6972,timezone:"America/Toronto",flag:"\uD83C\uDDE8\uD83C\uDDE6",zoom:12},{id:"mexico-city",name:"Mexico City",country:"MX",lat:19.4326,lng:-99.1332,timezone:"America/Mexico_City",flag:"\uD83C\uDDF2\uD83C\uDDFD",zoom:12},{id:"belmopan",name:"Belmopan",country:"BZ",lat:17.251,lng:-88.759,timezone:"America/Belize",flag:"\uD83C\uDDE7\uD83C\uDDFF",zoom:13},{id:"guatemala-city",name:"Guatemala City",country:"GT",lat:14.6349,lng:-90.5069,timezone:"America/Guatemala",flag:"\uD83C\uDDEC\uD83C\uDDF9",zoom:12},{id:"san-salvador",name:"San Salvador",country:"SV",lat:13.6929,lng:-89.2182,timezone:"America/El_Salvador",flag:"\uD83C\uDDF8\uD83C\uDDFB",zoom:12},{id:"tegucigalpa",name:"Tegucigalpa",country:"HN",lat:14.0818,lng:-87.2068,timezone:"America/Tegucigalpa",flag:"\uD83C\uDDED\uD83C\uDDF3",zoom:12},{id:"managua",name:"Managua",country:"NI",lat:12.1364,lng:-86.2514,timezone:"America/Managua",flag:"\uD83C\uDDF3\uD83C\uDDEE",zoom:12},{id:"san-jose-cr",name:"San Jos\xe9",country:"CR",lat:9.9281,lng:-84.0907,timezone:"America/Costa_Rica",flag:"\uD83C\uDDE8\uD83C\uDDF7",zoom:12},{id:"panama-city",name:"Panama City",country:"PA",lat:8.9936,lng:-79.5197,timezone:"America/Panama",flag:"\uD83C\uDDF5\uD83C\uDDE6",zoom:12},{id:"havana",name:"Havana",country:"CU",lat:23.1136,lng:-82.3666,timezone:"America/Havana",flag:"\uD83C\uDDE8\uD83C\uDDFA",zoom:12},{id:"nassau",name:"Nassau",country:"BS",lat:25.048,lng:-77.3554,timezone:"America/Nassau",flag:"\uD83C\uDDE7\uD83C\uDDF8",zoom:12},{id:"kingston-jm",name:"Kingston",country:"JM",lat:17.997,lng:-76.7936,timezone:"America/Jamaica",flag:"\uD83C\uDDEF\uD83C\uDDF2",zoom:12},{id:"port-au-prince",name:"Port-au-Prince",country:"HT",lat:18.5944,lng:-72.3074,timezone:"America/Port-au-Prince",flag:"\uD83C\uDDED\uD83C\uDDF9",zoom:12},{id:"santo-domingo",name:"Santo Domingo",country:"DO",lat:18.4861,lng:-69.9312,timezone:"America/Santo_Domingo",flag:"\uD83C\uDDE9\uD83C\uDDF4",zoom:12},{id:"basseterre",name:"Basseterre",country:"KN",lat:17.2948,lng:-62.7261,timezone:"America/St_Kitts",flag:"\uD83C\uDDF0\uD83C\uDDF3",zoom:13},{id:"castries",name:"Castries",country:"LC",lat:14.0101,lng:-60.9875,timezone:"America/St_Lucia",flag:"\uD83C\uDDF1\uD83C\uDDE8",zoom:13},{id:"kingstown",name:"Kingstown",country:"VC",lat:13.1587,lng:-61.2248,timezone:"America/St_Vincent",flag:"\uD83C\uDDFB\uD83C\uDDE8",zoom:13},{id:"bridgetown",name:"Bridgetown",country:"BB",lat:13.1132,lng:-59.5988,timezone:"America/Barbados",flag:"\uD83C\uDDE7\uD83C\uDDE7",zoom:13},{id:"st-johns-ag",name:"Saint John's",country:"AG",lat:17.1274,lng:-61.8468,timezone:"America/Antigua",flag:"\uD83C\uDDE6\uD83C\uDDEC",zoom:13},{id:"roseau",name:"Roseau",country:"DM",lat:15.3017,lng:-61.3881,timezone:"America/Dominica",flag:"\uD83C\uDDE9\uD83C\uDDF2",zoom:13},{id:"st-georges",name:"Saint George's",country:"GD",lat:12.0564,lng:-61.7485,timezone:"America/Grenada",flag:"\uD83C\uDDEC\uD83C\uDDE9",zoom:13},{id:"port-of-spain",name:"Port of Spain",country:"TT",lat:10.654,lng:-61.519,timezone:"America/Port_of_Spain",flag:"\uD83C\uDDF9\uD83C\uDDF9",zoom:12},{id:"bogota",name:"Bogot\xe1",country:"CO",lat:4.711,lng:-74.0721,timezone:"America/Bogota",flag:"\uD83C\uDDE8\uD83C\uDDF4",zoom:12},{id:"caracas",name:"Caracas",country:"VE",lat:10.4806,lng:-66.9036,timezone:"America/Caracas",flag:"\uD83C\uDDFB\uD83C\uDDEA",zoom:12},{id:"georgetown-gy",name:"Georgetown",country:"GY",lat:6.8013,lng:-58.1551,timezone:"America/Guyana",flag:"\uD83C\uDDEC\uD83C\uDDFE",zoom:12},{id:"paramaribo",name:"Paramaribo",country:"SR",lat:5.852,lng:-55.2038,timezone:"America/Paramaribo",flag:"\uD83C\uDDF8\uD83C\uDDF7",zoom:12},{id:"quito",name:"Quito",country:"EC",lat:-.1807,lng:-78.4678,timezone:"America/Guayaquil",flag:"\uD83C\uDDEA\uD83C\uDDE8",zoom:12},{id:"lima",name:"Lima",country:"PE",lat:-12.0464,lng:-77.0428,timezone:"America/Lima",flag:"\uD83C\uDDF5\uD83C\uDDEA",zoom:12},{id:"sao-paulo",name:"S\xe3o Paulo",country:"BR",lat:-23.5505,lng:-46.6333,timezone:"America/Sao_Paulo",flag:"\uD83C\uDDE7\uD83C\uDDF7",zoom:11},{id:"la-paz",name:"Sucre",country:"BO",lat:-19.0196,lng:-65.2619,timezone:"America/La_Paz",flag:"\uD83C\uDDE7\uD83C\uDDF4",zoom:12},{id:"santiago",name:"Santiago",country:"CL",lat:-33.4489,lng:-70.6693,timezone:"America/Santiago",flag:"\uD83C\uDDE8\uD83C\uDDF1",zoom:12},{id:"asuncion",name:"Asunci\xf3n",country:"PY",lat:-25.2637,lng:-57.5759,timezone:"America/Asuncion",flag:"\uD83C\uDDF5\uD83C\uDDFE",zoom:12},{id:"buenos-aires",name:"Buenos Aires",country:"AR",lat:-34.6037,lng:-58.3816,timezone:"America/Argentina/Buenos_Aires",flag:"\uD83C\uDDE6\uD83C\uDDF7",zoom:12},{id:"montevideo",name:"Montevideo",country:"UY",lat:-34.9011,lng:-56.1645,timezone:"America/Montevideo",flag:"\uD83C\uDDFA\uD83C\uDDFE",zoom:12}]},{id:"africa",name:"Africa",icon:"\uD83C\uDF0D",places:[{id:"rabat",name:"Rabat",country:"MA",lat:34.0209,lng:-6.8416,timezone:"Africa/Casablanca",flag:"\uD83C\uDDF2\uD83C\uDDE6",zoom:12},{id:"algiers",name:"Algiers",country:"DZ",lat:36.7369,lng:3.0863,timezone:"Africa/Algiers",flag:"\uD83C\uDDE9\uD83C\uDDFF",zoom:12},{id:"tunis",name:"Tunis",country:"TN",lat:36.8065,lng:10.1815,timezone:"Africa/Tunis",flag:"\uD83C\uDDF9\uD83C\uDDF3",zoom:12},{id:"tripoli",name:"Tripoli",country:"LY",lat:32.8872,lng:13.1913,timezone:"Africa/Tripoli",flag:"\uD83C\uDDF1\uD83C\uDDFE",zoom:12},{id:"cairo",name:"Cairo",country:"EG",lat:30.0444,lng:31.2357,timezone:"Africa/Cairo",flag:"\uD83C\uDDEA\uD83C\uDDEC",zoom:12},{id:"khartoum",name:"Khartoum",country:"SD",lat:15.5007,lng:32.5599,timezone:"Africa/Khartoum",flag:"\uD83C\uDDF8\uD83C\uDDE9",zoom:12},{id:"dakar",name:"Dakar",country:"SN",lat:14.7167,lng:-17.4677,timezone:"Africa/Dakar",flag:"\uD83C\uDDF8\uD83C\uDDF3",zoom:12},{id:"banjul",name:"Banjul",country:"GM",lat:13.4549,lng:-16.579,timezone:"Africa/Banjul",flag:"\uD83C\uDDEC\uD83C\uDDF2",zoom:13},{id:"bissau",name:"Bissau",country:"GW",lat:11.8636,lng:-15.5977,timezone:"Africa/Bissau",flag:"\uD83C\uDDEC\uD83C\uDDFC",zoom:13},{id:"conakry",name:"Conakry",country:"GN",lat:9.6412,lng:-13.5784,timezone:"Africa/Conakry",flag:"\uD83C\uDDEC\uD83C\uDDF3",zoom:12},{id:"freetown",name:"Freetown",country:"SL",lat:8.4897,lng:-13.2344,timezone:"Africa/Freetown",flag:"\uD83C\uDDF8\uD83C\uDDF1",zoom:12},{id:"monrovia",name:"Monrovia",country:"LR",lat:6.2907,lng:-10.7605,timezone:"Africa/Monrovia",flag:"\uD83C\uDDF1\uD83C\uDDF7",zoom:12},{id:"abidjan",name:"Abidjan",country:"CI",lat:5.36,lng:-4.0083,timezone:"Africa/Abidjan",flag:"\uD83C\uDDE8\uD83C\uDDEE",zoom:12},{id:"accra",name:"Accra",country:"GH",lat:5.6037,lng:-.187,timezone:"Africa/Accra",flag:"\uD83C\uDDEC\uD83C\uDDED",zoom:12},{id:"lome",name:"Lom\xe9",country:"TG",lat:6.1375,lng:1.2123,timezone:"Africa/Lome",flag:"\uD83C\uDDF9\uD83C\uDDEC",zoom:12},{id:"porto-novo",name:"Porto-Novo",country:"BJ",lat:6.3676,lng:2.4252,timezone:"Africa/Porto-Novo",flag:"\uD83C\uDDE7\uD83C\uDDEF",zoom:13},{id:"abuja",name:"Abuja",country:"NG",lat:9.0765,lng:7.3986,timezone:"Africa/Lagos",flag:"\uD83C\uDDF3\uD83C\uDDEC",zoom:12},{id:"niamey",name:"Niamey",country:"NE",lat:13.5137,lng:2.1098,timezone:"Africa/Niamey",flag:"\uD83C\uDDF3\uD83C\uDDEA",zoom:12},{id:"bamako",name:"Bamako",country:"ML",lat:12.6392,lng:-8.0029,timezone:"Africa/Bamako",flag:"\uD83C\uDDF2\uD83C\uDDF1",zoom:12},{id:"ouagadougou",name:"Ouagadougou",country:"BF",lat:12.3569,lng:-1.5352,timezone:"Africa/Ouagadougou",flag:"\uD83C\uDDE7\uD83C\uDDEB",zoom:12},{id:"nouakchott",name:"Nouakchott",country:"MR",lat:18.0735,lng:-15.9582,timezone:"Africa/Nouakchott",flag:"\uD83C\uDDF2\uD83C\uDDF7",zoom:12},{id:"praia",name:"Praia",country:"CV",lat:14.933,lng:-23.5133,timezone:"Atlantic/Cape_Verde",flag:"\uD83C\uDDE8\uD83C\uDDFB",zoom:13},{id:"yaounde",name:"Yaound\xe9",country:"CM",lat:3.848,lng:11.5021,timezone:"Africa/Douala",flag:"\uD83C\uDDE8\uD83C\uDDF2",zoom:12},{id:"ndjamena",name:"N'Djamena",country:"TD",lat:12.1048,lng:15.0445,timezone:"Africa/Ndjamena",flag:"\uD83C\uDDF9\uD83C\uDDE9",zoom:12},{id:"bangui",name:"Bangui",country:"CF",lat:4.361,lng:18.555,timezone:"Africa/Bangui",flag:"\uD83C\uDDE8\uD83C\uDDEB",zoom:12},{id:"malabo",name:"Malabo",country:"GQ",lat:3.7523,lng:8.7741,timezone:"Africa/Malabo",flag:"\uD83C\uDDEC\uD83C\uDDF6",zoom:13},{id:"libreville",name:"Libreville",country:"GA",lat:.3901,lng:9.4544,timezone:"Africa/Libreville",flag:"\uD83C\uDDEC\uD83C\uDDE6",zoom:12},{id:"brazzaville",name:"Brazzaville",country:"CG",lat:-4.2634,lng:15.2429,timezone:"Africa/Brazzaville",flag:"\uD83C\uDDE8\uD83C\uDDEC",zoom:12},{id:"kinshasa",name:"Kinshasa",country:"CD",lat:-4.3217,lng:15.3222,timezone:"Africa/Kinshasa",flag:"\uD83C\uDDE8\uD83C\uDDE9",zoom:12},{id:"sao-tome",name:"S\xe3o Tom\xe9",country:"ST",lat:.3365,lng:6.7273,timezone:"Africa/Sao_Tome",flag:"\uD83C\uDDF8\uD83C\uDDF9",zoom:13},{id:"juba",name:"Juba",country:"SS",lat:4.8594,lng:31.5713,timezone:"Africa/Juba",flag:"\uD83C\uDDF8\uD83C\uDDF8",zoom:12},{id:"addis-ababa",name:"Addis Ababa",country:"ET",lat:9.025,lng:38.7469,timezone:"Africa/Addis_Ababa",flag:"\uD83C\uDDEA\uD83C\uDDF9",zoom:12},{id:"asmara",name:"Asmara",country:"ER",lat:15.3229,lng:38.9251,timezone:"Africa/Asmara",flag:"\uD83C\uDDEA\uD83C\uDDF7",zoom:12},{id:"djibouti-city",name:"Djibouti",country:"DJ",lat:11.5886,lng:43.1451,timezone:"Africa/Djibouti",flag:"\uD83C\uDDE9\uD83C\uDDEF",zoom:13},{id:"mogadishu",name:"Mogadishu",country:"SO",lat:2.0469,lng:45.3182,timezone:"Africa/Mogadishu",flag:"\uD83C\uDDF8\uD83C\uDDF4",zoom:12},{id:"nairobi",name:"Nairobi",country:"KE",lat:-1.2921,lng:36.8219,timezone:"Africa/Nairobi",flag:"\uD83C\uDDF0\uD83C\uDDEA",zoom:12},{id:"kampala",name:"Kampala",country:"UG",lat:.3476,lng:32.5825,timezone:"Africa/Kampala",flag:"\uD83C\uDDFA\uD83C\uDDEC",zoom:12},{id:"kigali",name:"Kigali",country:"RW",lat:-1.9441,lng:30.0619,timezone:"Africa/Kigali",flag:"\uD83C\uDDF7\uD83C\uDDFC",zoom:12},{id:"gitega",name:"Gitega",country:"BI",lat:-3.4272,lng:29.9251,timezone:"Africa/Bujumbura",flag:"\uD83C\uDDE7\uD83C\uDDEE",zoom:13},{id:"dodoma",name:"Dodoma",country:"TZ",lat:-6.1722,lng:35.7395,timezone:"Africa/Dar_es_Salaam",flag:"\uD83C\uDDF9\uD83C\uDDFF",zoom:12},{id:"antananarivo",name:"Antananarivo",country:"MG",lat:-18.8792,lng:47.5079,timezone:"Indian/Antananarivo",flag:"\uD83C\uDDF2\uD83C\uDDEC",zoom:12},{id:"moroni",name:"Moroni",country:"KM",lat:-11.7022,lng:43.2551,timezone:"Indian/Comoro",flag:"\uD83C\uDDF0\uD83C\uDDF2",zoom:13},{id:"port-louis",name:"Port Louis",country:"MU",lat:-20.1654,lng:57.499,timezone:"Indian/Mauritius",flag:"\uD83C\uDDF2\uD83C\uDDFA",zoom:13},{id:"victoria-sc",name:"Victoria",country:"SC",lat:-4.6191,lng:55.4513,timezone:"Indian/Mahe",flag:"\uD83C\uDDF8\uD83C\uDDE8",zoom:13},{id:"luanda",name:"Luanda",country:"AO",lat:-8.8368,lng:13.2343,timezone:"Africa/Luanda",flag:"\uD83C\uDDE6\uD83C\uDDF4",zoom:12},{id:"lusaka",name:"Lusaka",country:"ZM",lat:-15.3875,lng:28.3228,timezone:"Africa/Lusaka",flag:"\uD83C\uDDFF\uD83C\uDDF2",zoom:12},{id:"lilongwe",name:"Lilongwe",country:"MW",lat:-13.9626,lng:33.7741,timezone:"Africa/Blantyre",flag:"\uD83C\uDDF2\uD83C\uDDFC",zoom:12},{id:"maputo",name:"Maputo",country:"MZ",lat:-25.9653,lng:32.5892,timezone:"Africa/Maputo",flag:"\uD83C\uDDF2\uD83C\uDDFF",zoom:12},{id:"harare",name:"Harare",country:"ZW",lat:-17.8252,lng:31.0335,timezone:"Africa/Harare",flag:"\uD83C\uDDFF\uD83C\uDDFC",zoom:12},{id:"gaborone",name:"Gaborone",country:"BW",lat:-24.6541,lng:25.9087,timezone:"Africa/Gaborone",flag:"\uD83C\uDDE7\uD83C\uDDFC",zoom:12},{id:"windhoek",name:"Windhoek",country:"NA",lat:-22.5609,lng:17.0658,timezone:"Africa/Windhoek",flag:"\uD83C\uDDF3\uD83C\uDDE6",zoom:12},{id:"cape-town",name:"Cape Town",country:"ZA",lat:-33.9249,lng:18.4241,timezone:"Africa/Johannesburg",flag:"\uD83C\uDDFF\uD83C\uDDE6",zoom:12},{id:"mbabane",name:"Mbabane",country:"SZ",lat:-26.3054,lng:31.1367,timezone:"Africa/Mbabane",flag:"\uD83C\uDDF8\uD83C\uDDFF",zoom:13},{id:"maseru",name:"Maseru",country:"LS",lat:-29.3142,lng:27.4833,timezone:"Africa/Maseru",flag:"\uD83C\uDDF1\uD83C\uDDF8",zoom:13}]},{id:"middle-east",name:"Middle East",icon:"\uD83D\uDD4C",places:[{id:"riyadh",name:"Riyadh",country:"SA",lat:24.6877,lng:46.7219,timezone:"Asia/Riyadh",flag:"\uD83C\uDDF8\uD83C\uDDE6",zoom:12},{id:"dubai",name:"Dubai",country:"AE",lat:25.2048,lng:55.2708,timezone:"Asia/Dubai",flag:"\uD83C\uDDE6\uD83C\uDDEA",zoom:12},{id:"doha",name:"Doha",country:"QA",lat:25.2854,lng:51.531,timezone:"Asia/Qatar",flag:"\uD83C\uDDF6\uD83C\uDDE6",zoom:12},{id:"manama",name:"Manama",country:"BH",lat:26.2154,lng:50.5832,timezone:"Asia/Bahrain",flag:"\uD83C\uDDE7\uD83C\uDDED",zoom:13},{id:"kuwait-city",name:"Kuwait City",country:"KW",lat:29.3759,lng:47.9774,timezone:"Asia/Kuwait",flag:"\uD83C\uDDF0\uD83C\uDDFC",zoom:12},{id:"muscat",name:"Muscat",country:"OM",lat:23.588,lng:58.3829,timezone:"Asia/Muscat",flag:"\uD83C\uDDF4\uD83C\uDDF2",zoom:12},{id:"sanaa",name:"Sana'a",country:"YE",lat:15.3694,lng:44.191,timezone:"Asia/Aden",flag:"\uD83C\uDDFE\uD83C\uDDEA",zoom:12},{id:"baghdad",name:"Baghdad",country:"IQ",lat:33.3152,lng:44.3661,timezone:"Asia/Baghdad",flag:"\uD83C\uDDEE\uD83C\uDDF6",zoom:12},{id:"tehran",name:"Tehran",country:"IR",lat:35.6892,lng:51.389,timezone:"Asia/Tehran",flag:"\uD83C\uDDEE\uD83C\uDDF7",zoom:12},{id:"ankara",name:"Ankara",country:"TR",lat:39.9334,lng:32.8597,timezone:"Europe/Istanbul",flag:"\uD83C\uDDF9\uD83C\uDDF7",zoom:12},{id:"beirut",name:"Beirut",country:"LB",lat:33.8938,lng:35.5018,timezone:"Asia/Beirut",flag:"\uD83C\uDDF1\uD83C\uDDE7",zoom:12},{id:"damascus",name:"Damascus",country:"SY",lat:33.5138,lng:36.2765,timezone:"Asia/Damascus",flag:"\uD83C\uDDF8\uD83C\uDDFE",zoom:12},{id:"amman",name:"Amman",country:"JO",lat:31.9454,lng:35.9284,timezone:"Asia/Amman",flag:"\uD83C\uDDEF\uD83C\uDDF4",zoom:12},{id:"jerusalem",name:"Jerusalem",country:"IL",lat:31.7683,lng:35.2137,timezone:"Asia/Jerusalem",flag:"\uD83C\uDDEE\uD83C\uDDF1",zoom:12},{id:"ramallah",name:"Ramallah",country:"PS",lat:31.8996,lng:35.2042,timezone:"Asia/Gaza",flag:"\uD83C\uDDF5\uD83C\uDDF8",zoom:13}]},{id:"asia",name:"Asia",icon:"\uD83C\uDF0F",places:[{id:"kabul",name:"Kabul",country:"AF",lat:34.5553,lng:69.2075,timezone:"Asia/Kabul",flag:"\uD83C\uDDE6\uD83C\uDDEB",zoom:12},{id:"astana",name:"Astana",country:"KZ",lat:51.1801,lng:71.446,timezone:"Asia/Almaty",flag:"\uD83C\uDDF0\uD83C\uDDFF",zoom:12},{id:"bishkek",name:"Bishkek",country:"KG",lat:42.8746,lng:74.5698,timezone:"Asia/Bishkek",flag:"\uD83C\uDDF0\uD83C\uDDEC",zoom:12},{id:"tashkent",name:"Tashkent",country:"UZ",lat:41.2995,lng:69.2401,timezone:"Asia/Tashkent",flag:"\uD83C\uDDFA\uD83C\uDDFF",zoom:12},{id:"dushanbe",name:"Dushanbe",country:"TJ",lat:38.5598,lng:68.787,timezone:"Asia/Dushanbe",flag:"\uD83C\uDDF9\uD83C\uDDEF",zoom:12},{id:"ashgabat",name:"Ashgabat",country:"TM",lat:37.9601,lng:58.3261,timezone:"Asia/Ashgabat",flag:"\uD83C\uDDF9\uD83C\uDDF2",zoom:12},{id:"yerevan",name:"Yerevan",country:"AM",lat:40.1792,lng:44.4991,timezone:"Asia/Yerevan",flag:"\uD83C\uDDE6\uD83C\uDDF2",zoom:12},{id:"baku",name:"Baku",country:"AZ",lat:40.4093,lng:49.8671,timezone:"Asia/Baku",flag:"\uD83C\uDDE6\uD83C\uDDFF",zoom:12},{id:"tbilisi",name:"Tbilisi",country:"GE",lat:41.6938,lng:44.8015,timezone:"Asia/Tbilisi",flag:"\uD83C\uDDEC\uD83C\uDDEA",zoom:12},{id:"islamabad",name:"Islamabad",country:"PK",lat:33.7294,lng:73.0931,timezone:"Asia/Karachi",flag:"\uD83C\uDDF5\uD83C\uDDF0",zoom:12},{id:"new-delhi",name:"New Delhi",country:"IN",lat:28.6139,lng:77.209,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"mumbai",name:"Mumbai",country:"IN",lat:19.076,lng:72.8777,timezone:"Asia/Kolkata",flag:"\uD83C\uDDEE\uD83C\uDDF3",zoom:12},{id:"kathmandu",name:"Kathmandu",country:"NP",lat:27.7172,lng:85.324,timezone:"Asia/Kathmandu",flag:"\uD83C\uDDF3\uD83C\uDDF5",zoom:12},{id:"dhaka",name:"Dhaka",country:"BD",lat:23.8103,lng:90.4125,timezone:"Asia/Dhaka",flag:"\uD83C\uDDE7\uD83C\uDDE9",zoom:12},{id:"colombo",name:"Colombo",country:"LK",lat:6.9271,lng:79.8612,timezone:"Asia/Colombo",flag:"\uD83C\uDDF1\uD83C\uDDF0",zoom:12},{id:"male",name:"Mal\xe9",country:"MV",lat:4.1755,lng:73.5093,timezone:"Indian/Maldives",flag:"\uD83C\uDDF2\uD83C\uDDFB",zoom:13},{id:"beijing",name:"Beijing",country:"CN",lat:39.9042,lng:116.4074,timezone:"Asia/Shanghai",flag:"\uD83C\uDDE8\uD83C\uDDF3",zoom:12},{id:"tokyo",name:"Tokyo",country:"JP",lat:35.6762,lng:139.6503,timezone:"Asia/Tokyo",flag:"\uD83C\uDDEF\uD83C\uDDF5",zoom:12},{id:"seoul",name:"Seoul",country:"KR",lat:37.5665,lng:126.978,timezone:"Asia/Seoul",flag:"\uD83C\uDDF0\uD83C\uDDF7",zoom:12},{id:"pyongyang",name:"Pyongyang",country:"KP",lat:39.0392,lng:125.7625,timezone:"Asia/Pyongyang",flag:"\uD83C\uDDF0\uD83C\uDDF5",zoom:12},{id:"ulaanbaatar",name:"Ulaanbaatar",country:"MN",lat:47.8864,lng:106.9057,timezone:"Asia/Ulaanbaatar",flag:"\uD83C\uDDF2\uD83C\uDDF3",zoom:12},{id:"bangkok",name:"Bangkok",country:"TH",lat:13.7563,lng:100.5018,timezone:"Asia/Bangkok",flag:"\uD83C\uDDF9\uD83C\uDDED",zoom:12},{id:"hanoi",name:"Hanoi",country:"VN",lat:21.0285,lng:105.8542,timezone:"Asia/Ho_Chi_Minh",flag:"\uD83C\uDDFB\uD83C\uDDF3",zoom:12},{id:"phnom-penh",name:"Phnom Penh",country:"KH",lat:11.5564,lng:104.9282,timezone:"Asia/Phnom_Penh",flag:"\uD83C\uDDF0\uD83C\uDDED",zoom:12},{id:"vientiane",name:"Vientiane",country:"LA",lat:17.9757,lng:102.6331,timezone:"Asia/Vientiane",flag:"\uD83C\uDDF1\uD83C\uDDE6",zoom:12},{id:"naypyidaw",name:"Naypyidaw",country:"MM",lat:19.7633,lng:96.0785,timezone:"Asia/Rangoon",flag:"\uD83C\uDDF2\uD83C\uDDF2",zoom:12},{id:"kuala-lumpur",name:"Kuala Lumpur",country:"MY",lat:3.139,lng:101.6869,timezone:"Asia/Kuala_Lumpur",flag:"\uD83C\uDDF2\uD83C\uDDFE",zoom:12},{id:"singapore",name:"Singapore",country:"SG",lat:1.3521,lng:103.8198,timezone:"Asia/Singapore",flag:"\uD83C\uDDF8\uD83C\uDDEC",zoom:12},{id:"jakarta",name:"Jakarta",country:"ID",lat:-6.2088,lng:106.8456,timezone:"Asia/Jakarta",flag:"\uD83C\uDDEE\uD83C\uDDE9",zoom:12},{id:"manila",name:"Manila",country:"PH",lat:14.5995,lng:120.9842,timezone:"Asia/Manila",flag:"\uD83C\uDDF5\uD83C\uDDED",zoom:12},{id:"bandar-seri",name:"Bandar Seri Begawan",country:"BN",lat:4.9031,lng:114.9398,timezone:"Asia/Brunei",flag:"\uD83C\uDDE7\uD83C\uDDF3",zoom:13},{id:"dili",name:"Dili",country:"TL",lat:-8.5569,lng:125.5603,timezone:"Asia/Dili",flag:"\uD83C\uDDF9\uD83C\uDDF1",zoom:13}]},{id:"oceania",name:"Oceania",icon:"\uD83C\uDF0A",places:[{id:"sydney",name:"Sydney",country:"AU",lat:-33.8688,lng:151.2093,timezone:"Australia/Sydney",flag:"\uD83C\uDDE6\uD83C\uDDFA",zoom:12},{id:"wellington",name:"Wellington",country:"NZ",lat:-41.2866,lng:174.7756,timezone:"Pacific/Auckland",flag:"\uD83C\uDDF3\uD83C\uDDFF",zoom:12},{id:"port-moresby",name:"Port Moresby",country:"PG",lat:-9.4438,lng:147.1803,timezone:"Pacific/Port_Moresby",flag:"\uD83C\uDDF5\uD83C\uDDEC",zoom:12},{id:"suva",name:"Suva",country:"FJ",lat:-18.1416,lng:178.4415,timezone:"Pacific/Fiji",flag:"\uD83C\uDDEB\uD83C\uDDEF",zoom:13},{id:"honiara",name:"Honiara",country:"SB",lat:-9.4319,lng:160.0658,timezone:"Pacific/Guadalcanal",flag:"\uD83C\uDDF8\uD83C\uDDE7",zoom:13},{id:"port-vila",name:"Port Vila",country:"VU",lat:-17.7333,lng:168.321,timezone:"Pacific/Efate",flag:"\uD83C\uDDFB\uD83C\uDDFA",zoom:13},{id:"nuku-alofa",name:"Nuku'alofa",country:"TO",lat:-21.1393,lng:-175.2049,timezone:"Pacific/Tongatapu",flag:"\uD83C\uDDF9\uD83C\uDDF4",zoom:13},{id:"apia",name:"Apia",country:"WS",lat:-13.8314,lng:-171.7518,timezone:"Pacific/Apia",flag:"\uD83C\uDDFC\uD83C\uDDF8",zoom:13},{id:"funafuti",name:"Funafuti",country:"TV",lat:-8.5243,lng:179.1942,timezone:"Pacific/Funafuti",flag:"\uD83C\uDDF9\uD83C\uDDFB",zoom:14},{id:"tarawa",name:"South Tarawa",country:"KI",lat:1.3291,lng:172.979,timezone:"Pacific/Tarawa",flag:"\uD83C\uDDF0\uD83C\uDDEE",zoom:14},{id:"majuro",name:"Majuro",country:"MH",lat:7.1315,lng:171.1845,timezone:"Pacific/Majuro",flag:"\uD83C\uDDF2\uD83C\uDDED",zoom:14},{id:"palikir",name:"Palikir",country:"FM",lat:6.9147,lng:158.161,timezone:"Pacific/Pohnpei",flag:"\uD83C\uDDEB\uD83C\uDDF2",zoom:14},{id:"ngerulmud",name:"Ngerulmud",country:"PW",lat:7.5004,lng:134.6241,timezone:"Pacific/Palau",flag:"\uD83C\uDDF5\uD83C\uDDFC",zoom:14},{id:"yaren",name:"Yaren",country:"NR",lat:-.5477,lng:166.9209,timezone:"Pacific/Nauru",flag:"\uD83C\uDDF3\uD83C\uDDF7",zoom:14}]}].flatMap(e=>e.places);var q=t(1310);l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,l().div`
  background: ${o.w4.colors.sidebarBg};
  border: 1px solid ${o.w4.colors.sidebarBorder};
  border-radius: ${o.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,l().div`
  font-size: ${o.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${o.w4.colors.mainText};
  font-family: ${o.w4.typography.fontFamily};
`,l().input`
  width: 100%;
  padding: 8px 12px;
  background: ${o.w4.colors.mainBg};
  border: 1px solid ${o.w4.colors.border};
  border-radius: ${o.w4.borderRadius.md};
  color: ${o.w4.colors.mainText};
  font-size: ${o.w4.typography.fontSizeBase};
  font-family: ${o.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${o.w4.colors.accent}; }
  &::placeholder { color: ${o.w4.colors.sidebarTextMuted}; }
`,l().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,l().button`
  padding: 7px 18px;
  border-radius: ${o.w4.borderRadius.md};
  font-size: ${o.w4.typography.fontSizeBase};
  font-family: ${o.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:a})=>a?"rgba(248,81,73,0.12)":e?o.w4.colors.accent:"none"};
  color: ${({primary:e,danger:a})=>a?o.w4.colors.danger:e?"#fff":o.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:a})=>a?o.w4.colors.danger:e?o.w4.colors.accent:o.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,l().div`
  height: 1px;
  background: ${o.w4.colors.border};
  margin: 0 -4px;
`,l().div`
  font-size: 11px;
  color: ${o.w4.colors.sidebarTextMuted};
  font-family: ${o.w4.typography.fontFamily};
`;let G=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,W=(0,d.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`,Y=l().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${o.w4.spacing.md};
  animation: ${G} 0.15s ease both;
`,V=l().div`
  background: ${o.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?o.w4.colors.danger+"55":o.w4.colors.sidebarBorder};
  border-radius: ${o.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${o.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${W} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,J=l().div`
  font-size: ${o.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?o.w4.colors.danger:o.w4.colors.mainText};
  font-family: ${o.w4.typography.fontFamily};
`,Q=l().div`
  font-size: ${o.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${o.w4.colors.mainTextMuted};
  font-family: ${o.w4.typography.fontFamily};
`,Z=l().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${o.w4.spacing.sm};
`,X=l().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${o.w4.typography.fontSizeBase};
  font-family: ${o.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${o.w4.transitions.fast},
    border-color ${o.w4.transitions.fast},
    color ${o.w4.transitions.fast},
    opacity ${o.w4.transitions.fast};

  background: ${({primary:e,danger:a})=>a?o.w4.colors.danger:e?o.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:a})=>a||e?"#fff":o.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:a})=>a?o.w4.colors.danger:e?o.w4.colors.accent:o.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${o.w4.focusRing} }
`;function ee({open:e,title:a,message:t,confirmLabel:o,cancelLabel:r,onConfirm:s,onCancel:l,danger:d=!1}){return((0,n.useEffect)(()=>{if(!e)return;let a=e=>{"Escape"===e.key&&l(),"Enter"===e.key&&s()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[e,l,s]),e)?(0,i.jsx)(Y,{onClick:l,role:"dialog","aria-modal":"true","aria-label":a,children:(0,i.jsxs)(V,{danger:d,onClick:e=>e.stopPropagation(),children:[(0,i.jsx)(J,{danger:d,children:a}),(0,i.jsx)(Q,{children:t}),(0,i.jsxs)(Z,{children:[(0,i.jsx)(X,{onClick:l,children:r}),(0,i.jsx)(X,{danger:d,primary:!d,onClick:s,autoFocus:!0,children:o})]})]})}):null}function ea(e,a){let t=a?Object.entries(a).filter(([,e])=>void 0!==e&&""!==e).map(([e,a])=>`${encodeURIComponent(e)}=${encodeURIComponent(String(a))}`).join("&"):"";window.location.hash=t?`#/${e}?${t}`:`#/${e}`}l().div`
  position: relative;
`,l().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: none;
  border: 1px solid ${o.w4.colors.border};
  border-radius: ${o.w4.borderRadius.md};
  color: ${o.w4.colors.mainText};
  font-size: ${o.w4.typography.fontSizeBase};
  font-family: ${o.w4.typography.fontFamily};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background: ${o.w4.colors.sidebarHover};
    border-color: ${o.w4.colors.accent};
  }
`,l().div`
  display: ${({open:e})=>e?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 280px;
  max-height: 360px;
  background: ${o.w4.colors.sidebarBg};
  border: 1px solid ${o.w4.colors.sidebarBorder};
  border-radius: ${o.w4.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  overflow: hidden;
`,l().div`
  padding: 8px 14px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${o.w4.colors.sidebarTextMuted};
  font-family: ${o.w4.typography.fontFamily};
  border-bottom: 1px solid ${o.w4.colors.sidebarBorder};
  flex-shrink: 0;
`,l().div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,l().div`
  padding: 16px 14px;
  font-size: ${o.w4.typography.fontSizeBase};
  color: ${o.w4.colors.sidebarTextMuted};
  font-family: ${o.w4.typography.fontFamily};
  font-style: italic;
`,l().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px 0 0;
  transition: background 0.12s;

  &:hover {
    background: ${o.w4.colors.sidebarHover};
  }
`,l().button`
  flex: 1;
  padding: 9px 14px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  min-width: 0;
`,l().div`
  font-size: ${o.w4.typography.fontSizeBase};
  color: ${o.w4.colors.mainText};
  font-family: ${o.w4.typography.fontFamily};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,l().div`
  font-size: 11px;
  color: ${o.w4.colors.sidebarTextMuted};
  font-family: ${o.w4.typography.fontFamily};
  margin-top: 1px;
`,l().button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: none;
  border: none;
  border-radius: ${o.w4.borderRadius.sm};
  cursor: pointer;
  color: ${o.w4.colors.sidebarTextMuted};
  transition: color 0.12s, background 0.12s;

  &:hover {
    color: ${o.w4.colors.danger};
    background: rgba(248, 81, 73, 0.12);
  }
`,l().div`
  padding: ${o.w4.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${o.w4.spacing.xl};
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`,l().section`
  scroll-margin-top: ${o.w4.spacing.lg};
`,l().div`
  background: ${o.w4.colors.surface};
  border: 1px solid ${o.w4.colors.border};
  border-radius: ${o.w4.borderRadius.lg};
  padding: ${o.w4.spacing.lg};
`,l().div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${o.w4.spacing.xl};

  @media (max-width: ${o.w4.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,l().div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: ${o.w4.colors.mainBg};
  font-family: ${o.w4.typography.fontFamily};
  color: ${o.w4.colors.mainText};
  overflow: hidden;
`,l().header`
  display: flex;
  align-items: center;
  height: calc(48px + env(safe-area-inset-top, 0px));
  padding-top: env(safe-area-inset-top, 0px);
  background: ${o.w4.colors.sidebarBg};
  border-bottom: 1px solid ${o.w4.colors.sidebarBorder};
  padding-left: max(${o.w4.spacing.lg}, env(safe-area-inset-left, 0px));
  padding-right: max(${o.w4.spacing.lg}, env(safe-area-inset-right, 0px));
  flex-shrink: 0;
  gap: ${o.w4.spacing.sm};
  z-index: 100;
`,l().button`
  display: flex;
  align-items: baseline;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${o.w4.typography.fontFamily};
  font-size: ${o.w4.typography.fontSizeBase};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${o.w4.colors.mainText};
  flex-shrink: 0;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
  span { color: ${o.w4.colors.accent}; }
`,l().span`
  color: ${o.w4.colors.border};
  margin: 0 2px;
  font-weight: 400;
`,l().div`
  font-size: ${o.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${o.w4.colors.mainText};
  letter-spacing: -0.01em;
  flex-shrink: 0;
`,l().span`
  font-weight: 400;
  color: ${o.w4.colors.sidebarTextMuted};
  margin-left: 4px;
  font-size: 12px;
`,l().div`
  flex: 1;
`;let et=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,eo=(0,d.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,ei=(0,d.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`,en=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${o.w4.colors.mainBg};
  font-family: ${o.w4.typography.fontFamily};
  animation: ${et} 0.4s ease 0.15s both;
`,er=l().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,es=l().div`
  position: absolute;
  inset: 0;
  animation: ${eo} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
`,el=l().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${o.w4.colors.border};
  animation: ${ei} 1.4s ease-in-out infinite;
`,ed=l().span`
  color: ${o.w4.colors.mainTextMuted};
  font-size: ${o.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`;function ec({label:e="Loading…"}){return(0,i.jsxs)(en,{children:[(0,i.jsxs)(er,{children:[(0,i.jsx)(es,{delay:0,size:8,color:o.w4.colors.accent}),(0,i.jsx)(es,{delay:-.45,size:6,color:"#bc8cff"}),(0,i.jsx)(es,{delay:-.9,size:5,color:"#3fb950"}),(0,i.jsx)(el,{})]}),(0,i.jsx)(ed,{children:e})]})}},81316(e,a,t){t.d(a,{EE:()=>r,w4:()=>s});let o={sidebarBg:"#0c1018",sidebarText:"#c5cdd8",sidebarTextMuted:"#5a6577",sidebarActive:"#6366f1",sidebarActiveBg:"#141820",sidebarHover:"#1a2030",sidebarBorder:"#1e2535",mainBg:"#0a0e14",mainText:"#e8edf5",mainTextMuted:"#9aa5b8",mainTextFaint:"rgba(232,237,245,0.38)",accent:"#6366f1",accentHover:"#818cf8",accentMuted:"rgba(99,102,241,0.18)",codeBg:"#0f1520",codeBorder:"#2a3040",border:"#343c4f",borderStrong:"rgba(255,255,255,0.16)",borderSubtle:"#1e2535",surface:"#141820",surfaceRaised:"#1c2332",surfaceHover:"#1d2138",success:"#34d399",warning:"#fbbf24",danger:"#f87171",shadow:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.45)",suiteLab:"#8b7bff",suiteVida:"#7fb77e",suiteLearn:"#6aa8d8",suiteGames:"#ff6fa9",suiteEnt:"#e89a5c"},i={sidebarBg:"#eef0f5",sidebarText:"#1f2937",sidebarTextMuted:"#6b7280",sidebarActive:"#4f46e5",sidebarActiveBg:"#ede9fe",sidebarHover:"#dde1e8",sidebarBorder:"#d7dbe3",mainBg:"#f5f6fa",mainText:"#111827",mainTextMuted:"#4b5563",mainTextFaint:"rgba(17,24,39,0.42)",accent:"#4f46e5",accentHover:"#6366f1",accentMuted:"rgba(79,70,229,0.12)",codeBg:"#eef0f5",codeBorder:"#d7dbe3",border:"#cfd4de",borderStrong:"rgba(15,23,42,0.18)",borderSubtle:"#e2e5eb",surface:"#ffffff",surfaceRaised:"#fbfbfd",surfaceHover:"#eef1f7",success:"#059669",warning:"#d97706",danger:"#dc2626",shadow:"rgba(15, 23, 42, 0.08)",shadowStrong:"rgba(15, 23, 42, 0.14)",suiteLab:"#5a4acf",suiteVida:"#4f9b6a",suiteLearn:"#3f7ea8",suiteGames:"#d94e85",suiteEnt:"#c47736"},n="--at-";function r(e){let a="dark"===e?o:i;return Object.keys(a).map(e=>`${n}${e}: ${a[e]};`).join("\n  ")}let s={colors:function(){let e={};for(let a of Object.keys(o))e[a]=`var(${n}${a})`;return e}(),spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sidebar:{width:"260px"},topbar:{height:"56px"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontFamilyMono:"'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",fontFamilySerif:"'Cormorant Garamond', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif",fontSizeSm:"13px",fontSizeBase:"14px",fontSizeMd:"16px",fontSizeLg:"20px",fontSizeXl:"24px",fontSizeHero:"32px",lineHeightBase:"1.6"},suites:{lab:`var(${n}suiteLab)`,vida:`var(${n}suiteVida)`,learn:`var(${n}suiteLearn)`,games:`var(${n}suiteGames)`,ent:`var(${n}suiteEnt)`},borderRadius:{sm:"4px",md:"6px",lg:"12px",xl:"16px"},breakpoints:{md:"768px",lg:"1024px",xl:"1280px"},sizes:{fullHeight:"100dvh",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{sticky:100,dropdown:1e3,flyout:1200,modal:1500,tooltip:1600},elevation:{sm:"0 2px 8px var(--at-shadow), 0 1px 2px var(--at-shadow)",md:"0 8px 24px var(--at-shadow), 0 2px 4px var(--at-shadow)",lg:"0 16px 48px var(--at-shadowStrong), 0 4px 12px var(--at-shadow)",xl:"0 40px 120px var(--at-shadowStrong), 0 8px 24px var(--at-shadow)",glow:"0 0 0 1px rgba(99,102,241,0.30), 0 8px 24px rgba(99,102,241,0.15)"},transitions:{fast:"0.1s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.2s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.35s cubic-bezier(0.4, 0, 0.2, 1)",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},focusRing:`
    outline: 2px solid var(--at-accent);
    outline-offset: 2px;
  `}},28395(e,a,t){t.d(a,{ue:()=>eU,Ex:()=>e_,$n:()=>x,YZ:()=>eG,n6:()=>C,In:()=>L,Yw:()=>ew,SV:()=>eR,K0:()=>k,rl:()=>e2,pd:()=>eJ,mQ:()=>aG,tU:()=>M});var o=t(65723),i=t(37991),n=t.n(i),r=t(36859),s=t.n(r),l=t(89874);let d={ghost:"transparent",accent:"transparent",primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},c={ghost:l.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:l.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},p={ghost:l.w4.colors.border,accent:l.w4.colors.accent,primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},m={ghost:l.w4.colors.mainTextMuted,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},g={ghost:l.w4.colors.mainText,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},u={sm:"28px",md:"30px"},h={sm:"0 10px",md:"0 12px"},f={sm:"12px",md:"12px"},b=s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>u[e]};
  padding: ${({size:e})=>h[e]};
  background: ${({variant:e})=>d[e]};
  border: 1px solid ${({variant:e})=>p[e]};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({variant:e})=>m[e]};
  font-size: ${({size:e})=>f[e]};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>c[e]};
    color: ${({variant:e})=>g[e]};
    border-color: ${({variant:e})=>"ghost"===e?l.w4.colors.accent:p[e]};
  }

  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,x=n().forwardRef(function({variant:e="ghost",size:a="md",icon:t,iconRight:i,children:n,...r},s){return(0,o.jsxs)(b,{ref:s,variant:e,size:a,...r,children:[t,n,i]})}),y={default:l.w4.colors.accent,danger:"#f85149"},w={default:l.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"},v=s().button`
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
    color: ${({tone:e})=>y[e]};
    background: ${({tone:e})=>w[e]};
    border-color: ${({tone:e})=>y[e]};
  }
  &:focus-visible {
    outline: 2px solid ${l.w4.colors.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,k=n().forwardRef(function({active:e=!1,shape:a="square",tone:t="default",children:i,...n},r){return(0,o.jsx)(v,{ref:r,active:e,shape:a,tone:t,...n,children:i})});s().div`
  position: relative;
  display: inline-flex;
`,s().div`
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
`,s().button`
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
`,s().div`
  height: 1px;
  margin: 4px 0;
  background: ${l.w4.colors.sidebarBorder};
`,s().div`
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`,s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
`,s().span`
  width: 1px;
  height: 20px;
  background: ${l.w4.colors.border};
  flex-shrink: 0;
`;let $=s().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,z=s()("button",{shouldForwardProp:e=>"active"!==e&&"highlight"!==e})`
  padding: 6px 14px;
  height: 28px;
  border-radius: 999px;
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  border: 1px solid
    ${({active:e,highlight:a})=>e||a?l.w4.colors.accent:"transparent"};
  color: ${({active:e,highlight:a})=>e||a?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: ${l.w4.transitions.fast};

  &:hover:not(:disabled) { color: ${l.w4.colors.mainText}; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${l.w4.focusRing} }
`;function M({tabs:e,value:a,onChange:t,className:i,"aria-label":n}){return(0,o.jsx)($,{role:"tablist","aria-label":n,className:i,children:e.map(e=>{let i=e.value===a;return(0,o.jsx)(z,{type:"button",role:"tab","aria-selected":i,active:i,highlight:e.highlight,disabled:e.disabled,onClick:()=>t(e.value),children:e.label},e.value)})})}var j=t(62727),S=t.n(j),A=t(72799);let T={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',"cloud-rain":'<path d="M16 14a5 5 0 1 0-9.8 2H6M8 19v2M12 17v4M16 19v2"/>',snowflake:'<path d="M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1M2 12h20M8 6l4 4 4-4M8 18l4-4 4 4"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"alert-triangle":'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',"check-circle":'<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>',"x-circle":'<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',"rotate-ccw":'<path d="M2 12a10 10 0 1 0 5-8.7L2 7M2 2v5h5"/>',"rotate-cw":'<path d="M22 12a10 10 0 1 1-5-8.7L22 7M22 2v5h-5"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"alert-circle":'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',"alert-octagon":'<path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"/><path d="M12 8v4M12 16h.01"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',columns:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',"eye-off":'<path d="M17.9 17.9A10.8 10.8 0 0 1 12 20c-7 0-11-8-11-8a19.6 19.6 0 0 1 5.1-6M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a19.6 19.6 0 0 1-2.2 3.2M6.6 6.6l10.8 10.8M14.1 14.1a3 3 0 1 1-4.2-4.2"/>',"file-plus":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M12 12v6M9 15h6"/>',gauge:'<path d="M12 14a2 2 0 1 0-2-2M12 2a10 10 0 1 0 10 10M12 14 7.5 16.5"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',"git-fork":'<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/>',"grip-vertical":'<circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',"image-plus":'<path d="M21 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21M19 2v6M22 5h-6"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',loader:'<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',"panel-left":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',"panel-left-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M16 15l-3-3 3-3"/>',"panel-left-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M14 9l3 3-3 3"/>',"panel-right-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M8 9l3 3-3 3"/>',"panel-right-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M10 15l-3-3 3-3"/>',pencil:'<path d="m12 20 9-9-4-4-9 9v4zM15 5l4 4"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M4.9 19.1a10 10 0 0 1 0-14.1M7.8 16.2a6 6 0 0 1 0-8.5M19.1 4.9a10 10 0 0 1 0 14.1M16.2 7.8a6 6 0 0 1 0 8.5"/>',"scatter-chart":'<circle cx="7.5" cy="7.5" r="0.8" fill="currentColor"/><circle cx="18" cy="5" r="0.8" fill="currentColor"/><circle cx="11" cy="11" r="0.8" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.8" fill="currentColor"/><circle cx="17" cy="14" r="0.8" fill="currentColor"/><path d="M3 3v18h18"/>',shield:'<path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"/>',"shield-off":'<path d="M19.7 14a7.7 7.7 0 0 0 .3-2V4l-8-2-3.4.9M4.7 4.7 4 5v7c0 6 8 10 8 10a13 13 0 0 0 5.2-3.5M2 2l20 20"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',"trending-down":'<path d="M22 17l-9.5-9.5-5 5L2 7"/><path d="M16 17h6v-6"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',"user-cog":'<circle cx="10" cy="8" r="4"/><path d="M10.2 14H8a4 4 0 0 0-4 4v2"/><circle cx="18" cy="15" r="3"/><path d="M18 10v1M18 19v1M22 12l-.8.5M14.8 17.5 14 18M22 18l-.8-.5M14.8 12.5 14 12"/>',volume:'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',wallet:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18M16 14h2"/>',receipt:'<path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21z"/><path d="M8 8h8M8 12h8M8 16h5"/>',"piggy-bank":'<path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/><path d="M19 9h2v4M14 7V5a2 2 0 0 0-4 0M16 11h.01M5 17v3M14 17v3"/>',banknote:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M5 9h.01M19 15h.01"/>',coins:'<circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/><path d="M9 6v6M7 9h4"/>',"line-chart":'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',"calendar-range":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 15h3M13 15h3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"refresh-ccw":'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',split:'<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 3 12 12 3 3"/><path d="M12 12v9"/>',"more-horizontal":'<circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>'};function C(e){return Object.prototype.hasOwnProperty.call(T,e)}function L({name:e,size:a=18,strokeWidth:t=1.5,...i}){let n=T[e];return(0,o.jsx)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!i["aria-label"]||void 0,...i,dangerouslySetInnerHTML:{__html:n}})}Object.keys(T),s().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  border: ${({ring:e})=>e?`1px solid ${l.w4.colors.border}`:"none"};
  flex-shrink: 0;
  overflow: hidden;
  user-select: none;
`,s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: ${({fontSize:e})=>e}px;
  font-weight: 700;
  color: ${l.w4.colors.mainBg};
  line-height: 1;
  letter-spacing: 0;
`;let F=s().img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,N=s().div`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  background: ${l.w4.colors.accentMuted};
  border: 1px solid ${l.w4.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 700;
  color: ${l.w4.colors.accent};
  flex-shrink: 0;
  /* Font scales with size: 26px → 12px, 40px → 18px */
  font-size: ${({size:e})=>Math.round(.46*e)}px;
`;function E({name:e,email:a,avatarUrl:t,size:i=26}){let n=e??a.split("@")[0]??a;if(t)return(0,o.jsx)(F,{src:t,alt:n,size:i});let r=((e??a.split("@")[0]??"")[0]??"?").toUpperCase();return(0,o.jsx)(N,{size:i,"aria-label":n,title:n,children:r})}let P=(0,A.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,I=s().div`
  position: relative;
`,R=s().button`
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
`,D=s().span`
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
`,B=s().div`
  position: fixed;
  min-width: 240px;
  background: ${l.w4.colors.surfaceRaised};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${P} 0.15s ease;
  backdrop-filter: blur(12px);

  @media (max-width: ${l.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    max-height: calc(100dvh - env(safe-area-inset-top, 0px) - 96px);
    overflow-y: auto;
  }
`,O=s().div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${l.w4.colors.border};
`,H=s().div`
  margin-bottom: 10px;
`,_=s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,K=s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,U=s().div`
  padding: 12px 16px 10px;
  border-bottom: 1px solid ${l.w4.colors.borderSubtle};
`,q=s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextFaint};
  margin-bottom: 6px;
`,G=s().div`
  display: flex;
  gap: 4px;
  padding: 3px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.borderSubtle};
  border-radius: ${l.w4.borderRadius.md};
`,W=s().button`
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
`,Y=s().button`
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
`;function V({labels:e}){let{mode:a,setMode:t}=(0,l.eP)(),i=[{value:"light",label:e?.themeLight??"Light"},{value:"dark",label:e?.themeDark??"Dark"},{value:"system",label:e?.themeSystem??"System"}];return(0,o.jsxs)(U,{children:[(0,o.jsx)(q,{children:e?.theme??"Theme"}),(0,o.jsx)(G,{role:"radiogroup","aria-label":e?.theme??"Theme",children:i.map(({value:e,label:i})=>(0,o.jsx)(W,{active:a===e,onClick:()=>t(e),role:"radio","aria-checked":a===e,children:i},e))})]})}function J({user:e,items:a,compact:t=!1,locale:n,onLocaleChange:r,controlLabels:s,showThemeControl:l=!0}){let[d,c]=(0,i.useState)(!1),[p,m]=(0,i.useState)(null),g=(0,i.useRef)(null),u=(0,i.useRef)(null),h=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!d)return;let e=e=>{let a=e.target;g.current?.contains(a)||h.current?.contains(a)||c(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[d]),(0,i.useEffect)(()=>{d?u.current&&m(u.current.getBoundingClientRect()):m(null)},[d]);let f=e.name??e.email.split("@")[0],b=p?{top:Math.round(p.bottom+8),right:Math.max(12,Math.round(window.innerWidth-p.right))}:{top:0,right:12};return(0,o.jsxs)(I,{ref:g,children:[(0,o.jsxs)(R,{ref:u,onClick:()=>c(e=>!e),children:[(0,o.jsx)(E,{name:e.name,email:e.email,avatarUrl:e.avatarUrl,size:26}),!t&&(0,o.jsx)(D,{children:f})]}),d&&S().createPortal((0,o.jsxs)(B,{ref:h,style:b,children:[(0,o.jsxs)(O,{children:[(0,o.jsx)(H,{children:(0,o.jsx)(E,{name:e.name,email:e.email,avatarUrl:e.avatarUrl,size:40})}),(0,o.jsx)(_,{children:f}),(0,o.jsx)(K,{children:e.email})]}),void 0!==n&&r&&(0,o.jsxs)(U,{children:[(0,o.jsx)(q,{children:s?.language??"Language"}),(0,o.jsxs)(G,{role:"radiogroup","aria-label":s?.language??"Language",children:[(0,o.jsx)(W,{active:"pt"===n,onClick:()=>r("pt"),role:"radio","aria-checked":"pt"===n,children:"Portugu\xeas"}),(0,o.jsx)(W,{active:"en"===n,onClick:()=>r("en"),role:"radio","aria-checked":"en"===n,children:"English"})]})]}),l&&(0,o.jsx)(V,{labels:s}),a.map((e,a)=>(0,o.jsxs)(Y,{danger:e.danger,onClick:()=>{c(!1),e.onClick()},children:[e.icon,e.label]},a))]}),document.body)]})}var Q=t(28170);let Z=s().div`
  position: relative;
  display: inline-block;
`,X=s().button`
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
`,ee=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  background: ${l.w4.colors.accentMuted};
  color: ${l.w4.colors.accent};
  padding: 2px 7px;
  border-radius: 999px;
`,ea=(0,A.keyframes)`
  from { opacity: 0; transform: translate(-50%, -6px); }
  to   { opacity: 1; transform: translate(-50%,  0); }
`,et=s().div`
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
  animation: ${ea} 0.18s ease both;

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
`,eo=s()("button",{shouldForwardProp:e=>"accent"!==e&&"expanded"!==e})`
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
`,ei=s()("span",{shouldForwardProp:e=>"accent"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({accent:e})=>e}26;
  color: ${({accent:e})=>e};
  border: 1px solid ${({accent:e})=>e}40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,en=s().span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,er=s().span`
  font-size: 13.5px;
  color: ${l.w4.colors.mainText};
  font-weight: 500;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,es=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,el=s()("span",{shouldForwardProp:e=>"accent"!==e})`
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
`,ed=s().div`
  margin: 2px 0 6px 48px;
  padding: 4px 0;
  border-left: 1px solid ${l.w4.colors.borderSubtle};
  display: flex;
  flex-direction: column;
`,ec=s().button`
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
`,ep=s().span`
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
`,em=s().span`
  margin-left: auto;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
`;function eg({label:e,ariaLabel:a,appsLabel:t,suites:r}){let[s,l]=(0,i.useState)(!1),[d,c]=(0,i.useState)(null),p=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!s)return;let e=e=>{p.current&&!p.current.contains(e.target)&&(l(!1),c(null))},a=e=>{"Escape"===e.key&&(l(!1),c(null))};return document.addEventListener("mousedown",e),document.addEventListener("keydown",a),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",a)}},[s]);let m=r.reduce((e,a)=>e+a.count,0);return(0,o.jsxs)(Z,{ref:p,children:[(0,o.jsxs)(X,{open:s,onClick:()=>l(e=>!e),"aria-haspopup":"menu","aria-expanded":s,"aria-label":a,children:[(0,o.jsx)("span",{children:e}),(0,o.jsx)(ee,{title:`${m} ${t}`,"aria-label":`${m} ${t}`,children:m}),(0,o.jsx)(L,{name:"chevron-down",size:12,"aria-hidden":"true"})]}),s&&(0,o.jsx)(et,{role:"menu",children:r.map(e=>{let a=d===e.id,i=!!(e.children&&e.children.length>0);return(0,o.jsxs)(n().Fragment,{children:[(0,o.jsxs)(eo,{accent:e.color,expanded:a,onClick:()=>{e.children&&e.children.length>0?c(a=>a===e.id?null:e.id):(e.onClick?.(),l(!1))},role:"menuitem","aria-expanded":i?a:void 0,children:[(0,o.jsx)(ei,{accent:e.color,children:(0,o.jsx)(L,{name:e.icon,size:18,"aria-hidden":"true"})}),(0,o.jsxs)(en,{children:[(0,o.jsx)(er,{children:e.name}),e.subtitle&&(0,o.jsx)(es,{children:e.subtitle})]}),(0,o.jsx)(el,{accent:e.color,title:`${e.count} ${t}`,"aria-label":`${e.count} ${t}`,children:e.count})]}),a&&i&&(0,o.jsx)(ed,{children:e.children.map(e=>(0,o.jsxs)(ec,{onClick:()=>{e.onClick(),l(!1),c(null)},role:"menuitem",children:[e.iconName?(0,o.jsx)(ep,{accent:e.accentColor,children:(0,o.jsx)(L,{name:e.iconName,size:14,"aria-hidden":"true"})}):e.glyph?(0,o.jsx)(ep,{accent:e.accentColor,children:e.glyph}):null,(0,o.jsx)("span",{children:e.name}),e.hash&&(0,o.jsx)(em,{children:e.hash})]},e.id))})]},e.id)})})]})}let eu=s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};

  @media (max-width: ${l.w4.breakpoints.md}) {
    gap: ${l.w4.spacing.xs};

    .header-kbd { display: none; }
    .header-hide-md { display: none; }
  }
`,eh=s().button`
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
`,ef=s().button`
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
`,eb=s().div`
  position: relative;
  display: inline-flex;
`,ex=s().span`
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
`,ey=s().button`
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
`;function ew({locale:e,onLocaleChange:a,user:t,userMenuItems:i=[],userMenuControlLabels:n,suites:r,onPreferences:s,notifications:d,onOpenPalette:c,paletteLabel:p="Search",onSignIn:m,signInLabel:g="Sign in",before:u,after:h}){let f=function(){if("u"<typeof navigator)return"Ctrl";let e=navigator,a=e.userAgentData?.platform??navigator.platform??navigator.userAgent??"";return/Mac|iPod|iPhone|iPad/i.test(a)?"⌘":"Ctrl"}(),b="⌘"===f?`${f}K`:`${f}+K`;return(0,o.jsxs)(eu,{children:[u,r&&r.entries.length>0&&(0,o.jsx)(eg,{label:r.label,ariaLabel:r.ariaLabel,appsLabel:r.appsLabel,suites:r.entries}),c&&(0,o.jsxs)(ef,{onClick:c,"aria-label":p,title:`${p} (${b})`,children:[(0,o.jsx)(L,{name:"search",size:14}),(0,o.jsx)("span",{className:"kbd header-kbd",children:b})]}),!t&&(0,o.jsx)(Q.Fd,{locale:e,onChange:a}),!t&&(0,o.jsx)("span",{className:"header-hide-md",children:(0,o.jsx)(l.UW,{})}),d&&(0,o.jsxs)(eb,{children:[(0,o.jsx)(eh,{onClick:d.onClick,"aria-label":d.label,title:d.label,children:(0,o.jsx)(L,{name:"bell",size:16})}),d.count>0&&(0,o.jsx)(ex,{"aria-hidden":"true",children:d.count>9?"9+":d.count})]}),s&&(0,o.jsx)("span",{className:"header-hide-md",children:(0,o.jsx)(eh,{onClick:s,"aria-label":"User preferences",title:"Preferences",children:(0,o.jsx)(L,{name:"user-cog",size:16})})}),t?(0,o.jsx)(J,{user:t,items:i,locale:e,onLocaleChange:a,controlLabels:n}):m?(0,o.jsxs)(ey,{onClick:m,"aria-label":g,children:[(0,o.jsx)(L,{name:"log-in",size:14}),g]}):null,h]})}s().div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 900;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  ${({forceVisible:e})=>e?"":"@media (hover: hover) and (pointer: fine) { display: none; }"}
`,s().div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 45%;
  height: 60%;
  pointer-events: auto;
  touch-action: none;
`,s().div`
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
`,s().div`
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
`,s().div`
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
`,s().button`
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
`;let ev=(0,A.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,ek=s()("div",{shouldForwardProp:e=>"accentColor"!==e&&"pinned"!==e&&"index"!==e})`
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
  animation: ${ev} 0.4s ease both;
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
`,e$=s().div`
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
`,ez=s().div`
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
`,eM=s().div`
  padding: 6px 14px 16px;
`,ej=s().h3`
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
`,eS=s().p`
  margin: 0;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,eA=s().div`
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid ${l.w4.colors.borderSubtle};
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.4;
`,eT=s().button`
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
`,eC=s().div`
  position: absolute;
  top: 8px;
  right: 44px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${l.w4.transitions.fast};
  z-index: 3;
`,eL={markdown:!0,school:!0,earth:!0,cosmos:!0,techscope:!0,citypulse:!0,stockpulse:!0,weather:!0,daily:!0,csvexplorer:!0,chartbuilder:!0,pad:!0,regexlab:!0,jsonexplorer:!0,codediff:!0,playground:!0,jwtinspector:!0,colorlab:!0,cronbuilder:!0,apiexplorer:!0,movies:!0,promptlab:!0,imagegen:!0,ask:!0,games:!0,devtools:!0},eF=["linear-gradient(135deg,#234b6b,#0d1024)","linear-gradient(135deg,#3e6060,#0e2424)","linear-gradient(135deg,#34578c,#0c1828)","linear-gradient(135deg,#6a4a7c,#2a1a34)","linear-gradient(135deg,#6d4d7c,#20102c)","linear-gradient(135deg,#b4503a,#30120b)","linear-gradient(135deg,#d94a4a,#4a1414)","linear-gradient(135deg,#d29922,#30280a)"],eN=[{bg:"linear-gradient(135deg,#ff6fa9,#4a1a2a)",glyph:"Qf"},{bg:"linear-gradient(135deg,#d86a6a,#3a1010)",glyph:"\xd7○",fg:"#fff"},{bg:"linear-gradient(135deg,#7fb77e,#0e2414)",glyph:"hz"},{bg:"linear-gradient(135deg,#e89a5c,#3a200e)",glyph:"\xa7"},{bg:"linear-gradient(135deg,#6aa8d8,#10283a)",glyph:"▦"},{bg:"linear-gradient(135deg,#c4b24a,#2a2410)",glyph:"◎"},{bg:"linear-gradient(135deg,#8b7bff,#1a1a40)",glyph:"✱"},{bg:"linear-gradient(135deg,#f97583,#3a1418)",glyph:"‼"}],eE=["#f78166","#d29922","#3fb950","#58a6ff","#a371f7"],eP=[40,65,52,78,30,88,45,70,58,82,35,62,72,48,90,55],eI=[{bg:"linear-gradient(135deg,#d29922,#3a2a10)",glyph:"{}",active:!0},{bg:"linear-gradient(135deg,#58a6ff,#10243a)",glyph:"/~"},{bg:"linear-gradient(135deg,#a371f7,#1a1430)",glyph:"◐"},{bg:"linear-gradient(135deg,#3fb950,#10301a)",glyph:"▤"},{bg:"linear-gradient(135deg,#f78166,#3a200e)",glyph:"#"},{bg:"linear-gradient(135deg,#79c0ff,#14243a)",glyph:"Δ"},{bg:"linear-gradient(135deg,#c4b24a,#2a2410)",glyph:"◇"},{bg:"linear-gradient(135deg,#ff6fa9,#3a1424)",glyph:"*/"},{bg:"linear-gradient(135deg,#8b7bff,#1a1a40)",glyph:"⧖"},{bg:"linear-gradient(135deg,#6aa8d8,#10283a)",glyph:"⎈"},{bg:"linear-gradient(135deg,#e89a5c,#3a200e)",glyph:"⟶"},{bg:"linear-gradient(135deg,#7fb77e,#0e2414)",glyph:"∎"}];function eR({vizId:e,label:a,description:t,hash:n,category:r,accentColor:s,needsAuth:d,pinned:c,index:p=0,onClick:m,onTogglePin:g,reorderControls:u,onHoverIntent:h,extra:f}){let b=Object.prototype.hasOwnProperty.call(eL,e)?e:"generic",x=(0,i.useRef)(null),y=(0,i.useRef)(!1),w=()=>{null!==x.current&&(window.clearTimeout(x.current),x.current=null)};return(0,i.useEffect)(()=>w,[]),(0,o.jsxs)(ek,{role:"button",tabIndex:0,accentColor:s,pinned:c,index:p,onClick:m,onMouseEnter:h?()=>{h&&!y.current&&(w(),x.current=window.setTimeout(()=>{y.current=!0,x.current=null,h()},200))}:void 0,onMouseLeave:h?w:void 0,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),m())},children:[u&&(0,o.jsx)(eC,{className:"pin-controls",children:u}),g&&(0,o.jsx)(eT,{className:"pin-btn",type:"button",pinned:!!c,"aria-label":c?"Unpin":"Pin to top",onClick:e=>{e.stopPropagation(),g?.()},children:(0,o.jsx)(L,{name:"pin",size:14})}),(0,o.jsx)(e$,{className:`viz viz--${b}`,accentColor:s,children:function(e,a,t){switch(e){case"markdown":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"h"}),(0,o.jsx)("span",{className:"l1"}),(0,o.jsx)("span",{className:"l2"}),(0,o.jsx)("span",{className:"l3"}),(0,o.jsx)("span",{className:"l4"})]});case"school":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"lb",children:"School"}),(0,o.jsx)("div",{className:"col"}),(0,o.jsx)("div",{className:"col"}),(0,o.jsx)("div",{className:"col"}),(0,o.jsx)("div",{className:"col"})]});case"earth":return(0,o.jsx)("div",{className:"g"});case"cosmos":case"citypulse":case"chartbuilder":return null;case"techscope":return(0,o.jsx)(o.Fragment,{children:eP.map((e,a)=>(0,o.jsx)("span",{style:{height:`${e}%`}},a))});case"stockpulse":return(0,o.jsx)(o.Fragment,{children:[0,1,0,0,1,0,0,0,1,0,0,0].map((e,a)=>(0,o.jsx)("div",{className:e?"c r":"c"},a))});case"csvexplorer":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"h",children:"id"}),(0,o.jsx)("span",{className:"h",children:"name"}),(0,o.jsx)("span",{className:"h",children:"qty"}),(0,o.jsx)("span",{className:"h",children:"px"}),(0,o.jsx)("span",{children:"01"}),(0,o.jsx)("span",{children:"alfa"}),(0,o.jsx)("span",{children:"12"}),(0,o.jsx)("span",{children:"1.2"}),(0,o.jsx)("span",{children:"02"}),(0,o.jsx)("span",{children:"beta"}),(0,o.jsx)("span",{children:"8"}),(0,o.jsx)("span",{children:"0.9"})]});case"pad":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"t"}),(0,o.jsx)("span",{className:"a"}),(0,o.jsx)("span",{className:"b"}),(0,o.jsx)("span",{className:"c"}),(0,o.jsx)("span",{className:"d"})]});case"regexlab":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"slash",children:"/"}),(0,o.jsx)("span",{children:"("}),(0,o.jsx)("span",{className:"hl",children:"[a-z]+"}),(0,o.jsx)("span",{children:")"}),(0,o.jsx)("span",{className:"slash",children:"/g"})]});case"jsonexplorer":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"b",children:"{"}),(0,o.jsx)("br",{}),"\xa0\xa0",(0,o.jsx)("span",{className:"k",children:'"user"'}),": ",(0,o.jsx)("span",{className:"v",children:'"dev"'}),",",(0,o.jsx)("br",{}),"\xa0\xa0",(0,o.jsx)("span",{className:"k",children:'"apps"'}),": ",(0,o.jsx)("span",{className:"b",children:"["}),(0,o.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,o.jsx)("span",{className:"v",children:'"markdown"'}),",",(0,o.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,o.jsx)("span",{className:"v",children:'"school"'}),(0,o.jsx)("br",{}),"\xa0\xa0",(0,o.jsx)("span",{className:"b",children:"]"}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{className:"b",children:"}"})]});case"codediff":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"col",children:[(0,o.jsx)("span",{className:"a"}),(0,o.jsx)("span",{className:"n",style:{width:"70%"}}),(0,o.jsx)("span",{className:"a"}),(0,o.jsx)("span",{className:"n",style:{width:"55%"}}),(0,o.jsx)("span",{className:"n"}),(0,o.jsx)("span",{className:"n",style:{width:"80%"}})]}),(0,o.jsxs)("div",{className:"col",children:[(0,o.jsx)("span",{className:"g"}),(0,o.jsx)("span",{className:"n",style:{width:"70%"}}),(0,o.jsx)("span",{className:"g"}),(0,o.jsx)("span",{className:"g"}),(0,o.jsx)("span",{className:"n",style:{width:"55%"}}),(0,o.jsx)("span",{className:"n",style:{width:"80%"}})]})]});case"playground":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"tube"}),(0,o.jsx)("div",{className:"tube",style:{height:45}}),(0,o.jsx)("div",{className:"tube",style:{height:50}})]});case"jwtinspector":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"h",children:"header"}),(0,o.jsx)("span",{className:"sep",children:"\xb7"}),(0,o.jsx)("span",{className:"p",children:"payload"}),(0,o.jsx)("span",{className:"sep",children:"\xb7"}),(0,o.jsx)("span",{className:"s",children:"sig"})]});case"colorlab":return(0,o.jsx)(o.Fragment,{children:eE.map(e=>(0,o.jsx)("span",{style:{background:e}},e))});case"cronbuilder":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"row","data-l":"m",children:[(0,o.jsx)("span",{}),(0,o.jsx)("span",{className:"on"}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{className:"on"}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{className:"on"}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{className:"on"}),(0,o.jsx)("span",{})]}),(0,o.jsxs)("div",{className:"row","data-l":"h",children:[(0,o.jsx)("span",{className:"on"}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{className:"on"}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{className:"on"}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{})]}),(0,o.jsxs)("div",{className:"row","data-l":"d",children:[(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{className:"on"}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{className:"on"}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{className:"on"}),(0,o.jsx)("span",{})]})]});case"weather":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"sun"}),(0,o.jsxs)("div",{className:"temp",children:["15",(0,o.jsx)("small",{children:"\xb0"})]})]});case"apiexplorer":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"get",children:"GET"})," ",(0,o.jsx)("span",{className:"url",children:"/api/v1/users/me"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"status",children:"200 OK"})," \xb7 42 ms"]}),(0,o.jsx)("div",{className:"echo",children:'→ { id: 1, role: "dev" }'})]});case"movies":return(0,o.jsx)(o.Fragment,{children:eF.map((e,a)=>(0,o.jsx)("span",{style:{background:e}},a))});case"promptlab":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"bubble",children:"Write a haiku about the fog at 6am."}),(0,o.jsx)("div",{className:"bubble r",children:"Low mist. Bridge lamps hum. The ferry horn splits the grey…"})]});case"imagegen":return(0,o.jsx)("div",{className:"frame"});case"ask":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"ask-user",children:"Como ajudo?"}),(0,o.jsx)("div",{className:"ask-spark","aria-hidden":"true"}),(0,o.jsxs)("div",{className:"ask-reply",children:[(0,o.jsx)("span",{className:"h"}),(0,o.jsx)("span",{className:"b1"}),(0,o.jsx)("span",{className:"b2"}),(0,o.jsx)("span",{className:"b3"})]})]});case"devtools":return(0,o.jsx)(o.Fragment,{children:eI.map((e,a)=>(0,o.jsx)("span",{className:e.active?"active":"",style:{background:e.bg},children:e.glyph},a))});case"daily":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"ring r1"}),(0,o.jsx)("div",{className:"ring r2"}),(0,o.jsx)("div",{className:"ring r3"}),(0,o.jsx)("div",{className:"dot"})]});case"games":return(0,o.jsx)(o.Fragment,{children:eN.map((e,a)=>(0,o.jsx)("span",{style:{background:e.bg,color:e.fg??l.w4.colors.mainText},children:e.glyph},a))});default:return(0,o.jsx)("span",{className:"viz-mono",style:{color:t},children:function(e){let a=e.trim().split(/\s+/).filter(Boolean);if(0===a.length)return"\xb7\xb7";if(1===a.length){let e=a[0];return(e[0]+(e[1]??"\xb7")).toUpperCase().slice(0,2)}return(a[0][0]+a[1][0]).toUpperCase()}(a)})}}(b,a,s)}),(0,o.jsxs)(ez,{accentColor:s,children:[(0,o.jsx)("span",{className:"dot"}),(0,o.jsx)("span",{className:"cat",children:r}),d&&(0,o.jsx)("span",{className:"lock",children:"◉ AUTH"})]}),(0,o.jsxs)(eM,{children:[(0,o.jsxs)(ej,{children:[a,(0,o.jsx)("span",{className:"hash",children:n})]}),(0,o.jsx)(eS,{children:t}),f&&(0,o.jsx)(eA,{children:f})]})]})}s().button`
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
`,s().span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  display: inline-block;
`;let eD={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:l.w4.colors.accentMuted},eB={neutral:l.w4.colors.mainTextMuted,live:l.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:l.w4.colors.accent},eO=s().span`
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
  background: ${({tone:e})=>eD[e]};
  color: ${({tone:e})=>eB[e]};
`,eH=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`;function e_({tone:e="neutral",dot:a,children:t,...i}){return(0,o.jsxs)(eO,{tone:e,...i,children:[(a??"live"===e)&&(0,o.jsx)(eH,{}),t]})}let eK=s().kbd`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 3px;
  color: ${l.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`;function eU({children:e,...a}){return(0,o.jsx)(eK,{...a,children:e})}let eq=s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;function eG({children:e,...a}){return(0,o.jsx)(eq,{...a,children:e})}let eW=s().label`
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
`,eY=s().input`
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
`,eV=s().span`
  display: inline-flex;
  align-items: center;
  color: ${l.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,eJ=n().forwardRef(function({before:e,after:a,...t},i){return(0,o.jsxs)(eW,{children:[e&&(0,o.jsx)(eV,{children:e}),(0,o.jsx)(eY,{ref:i,...t}),a&&(0,o.jsx)(eV,{children:a})]})}),eQ=s().div`
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
`,eZ=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,eX=s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,e0=s().div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,e1=s().div`
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
`,e4=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.danger};
`;function e2({title:e,accessory:a,accentColor:t,error:i,errorLabel:n,children:r}){return(0,o.jsxs)(eQ,{accentColor:t,"data-widget-shell":!0,children:[(0,o.jsxs)(eZ,{children:[(0,o.jsx)(eG,{children:e}),a&&(0,o.jsx)(eX,{children:a})]}),i?(0,o.jsxs)(e1,{role:"alert",children:[(0,o.jsx)(e4,{children:n??"Error"}),(0,o.jsx)("div",{children:i})]}):(0,o.jsx)(e0,{children:r})]})}s().div`
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
`,s().div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
`,s().div`
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
`,s().div`
  flex: 1;
  min-width: 0;
  padding-top: 2px;
`,s().div`
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${l.w4.colors.mainText};
  margin-bottom: 4px;
`,s().div`
  font-size: 11.5px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.35;
  margin-bottom: 8px;
`,s().div`
  display: inline-block;
  padding: 2px 7px;
  border-radius: 3px;
  background: ${l.w4.colors.accentMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
`,s().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 1;
  min-height: 0;
`,s().button`
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
`,s().div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({bg:e})=>e};
  color: ${({fg:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`,s().div`
  font-size: 11px;
  color: ${l.w4.colors.mainText};
`,s().div`
  margin-top: 14px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${({color:e})=>e};
  letter-spacing: 0.5px;
`;let e5=(0,A.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;s()("div",{shouldForwardProp:e=>"accentColor"!==e&&"index"!==e})`
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
  animation: ${e5} 0.4s ease both;
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
`,s()("div",{shouldForwardProp:e=>"accentColor"!==e})`
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
`,s().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  z-index: 2;
`,s()("div",{shouldForwardProp:e=>"accentColor"!==e})`
  --acc: ${({accentColor:e})=>e};
  height: 120px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${l.w4.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
  background: ${l.w4.colors.codeBg};

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
    font-family: ${l.w4.typography.fontFamily};
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
    font-family: ${l.w4.typography.fontFamily};
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
    font-family: ${l.w4.typography.fontFamilyMono};
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
`,s().span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
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
`,s().span`
  font-size: 56px;
  line-height: 1;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
`,s()("div",{shouldForwardProp:e=>"accentColor"!==e})`
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
`,s().div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
`,s().div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`,s()("div",{shouldForwardProp:e=>"accentColor"!==e})`
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
`,s().div`
  padding: 6px 14px 16px;
`,s().h3`
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
`,s().p`
  margin: 0;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`;var e3=t(11352),e8=t(76710),e6=t(4311),e7=t(73639),e9=t(8411);t(75406),s().nav`padding: ${l.w4.spacing.sm} 0;`,s().div`
  border-bottom: 1px solid ${l.w4.colors.border}60;
  margin-bottom: 2px;
`,s().button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({collapsed:e})=>e?"10px 0":`7px ${l.w4.spacing.md}`};
  justify-content: ${({collapsed:e})=>e?"center":"space-between"};
  background: none;
  border: none;
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: ${l.w4.typography.fontFamily};
  transition: color 0.15s, padding 0.3s, justify-content 0.3s;

  &:hover { color: ${l.w4.colors.sidebarText}; }
`,s().span`
  display: flex;
  align-items: center;
  gap: ${({collapsed:e})=>e?"0":"7px"};
`,s().span`
  opacity: ${({collapsed:e})=>+!e};
  max-width: ${({collapsed:e})=>e?"0":"200px"};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.2s, max-width 0.3s;
`,s().span`
  display: ${({collapsed:e})=>e?"none":"flex"};
  align-items: center;
  svg {
    transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(${({open:e})=>e?"90deg":"0deg"});
  }
`,s().div`
  display: grid;
  grid-template-rows: ${({open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`,s().div`overflow: hidden;`,s().div`
  display: flex;
  align-items: center;

  &:hover > button:last-child { opacity: 1; }
`,s().button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 5px ${l.w4.spacing.md};
  background: ${({active:e})=>e?l.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?l.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  color: ${({active:e})=>e?l.w4.colors.sidebarActive:l.w4.colors.sidebarText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background 0.12s, color 0.12s;

  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,s().button`
  opacity: ${({active:e})=>+!!e};
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({active:e})=>e?"#e3b341":l.w4.colors.sidebarTextMuted};
  transition: opacity 0.15s, color 0.15s;
  flex-shrink: 0;

  &:hover { color: #e3b341; opacity: 1; }
`;var ae=t(54041);let aa="#7fb77e",at=(0,A.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,ao=s().div`
  position: relative;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.xl} ${l.w4.spacing.lg} ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  animation: ${at} 0.25s ease both;
  transition:
    border-color ${l.w4.transitions.base},
    transform ${l.w4.transitions.base},
    box-shadow ${l.w4.transitions.base};

  /* Signature left accent bar — full-height, inset like a ribbon */
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0;
    width: 2px;
    border-radius: 2px;
    background: ${aa};
    box-shadow: 0 0 12px ${aa}55;
  }

  /* Uppercase mono eyebrow tag — reads "DIAGRAM · mermaid" */
  &::after {
    content: '◉ DIAGRAM';
    position: absolute;
    top: 10px;
    right: 14px;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    color: ${aa};
    opacity: 0.7;
    pointer-events: none;
  }

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: ${l.w4.elevation.sm};
  }

  svg { max-width: 100%; height: auto; }
  svg text { font-variant-numeric: tabular-nums; }
`,ai=s().pre`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${l.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`,an=!1,ar=/^(?:---[\s\S]*?---\s*)?(?:graph|flowchart|sequenceDiagram|classDiagram|stateDiagram(?:-v2)?|erDiagram|pie|gantt|journey|mindmap|gitGraph|sankey(?:-beta)?|quadrantChart|requirementDiagram|timeline|xychart-beta|block-beta|C4Context|C4Container|C4Component|C4Dynamic|C4Deployment)\b/;function as({code:e}){let[a,n]=(0,i.useState)(""),[r,s]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{let a=!1;s(!1),n("");let o=e.trim();if(!o)return void s(!0);let i=o.split(/\r?\n/)[0]?.trim()??"";return ar.test(i)?((async()=>{try{let e=(await t.e("6087").then(t.bind(t,29738))).default;if(!an){let a="#141820",t="#1c2332",o="#343c4f",i="#e8edf5",n="#9aa5b8",r="#7fb77e",s="#6aa8d8",l="#8b7bff",d="#e89a5c",c="#f87171";e.initialize({startOnLoad:!1,theme:"base",securityLevel:"loose",themeVariables:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",background:a,mainBkg:t,primaryColor:r,primaryTextColor:i,primaryBorderColor:r,secondaryColor:l,secondaryTextColor:i,secondaryBorderColor:l,tertiaryColor:s,tertiaryTextColor:i,tertiaryBorderColor:s,lineColor:n,textColor:i,nodeBorder:o,clusterBkg:a,clusterBorder:o,edgeLabelBackground:t,labelBackground:t,labelBorder:o,relationLabelBackground:t,relationLabelColor:i,pie1:r,pie2:l,pie3:s,pie4:d,pie5:"#ff6fa9",pie6:"#2dd4bf",pie7:c,pie8:r,pieStrokeColor:a,pieStrokeWidth:"2px",pieTitleTextSize:"18px",pieSectionTextSize:"13px",pieLegendTextSize:"13px",actorBkg:r,actorBorder:r,actorTextColor:a,signalColor:i,signalTextColor:i,labelBoxBkgColor:t,labelBoxBorderColor:o,labelTextColor:i,loopTextColor:i,noteBkgColor:d,noteBorderColor:d,noteTextColor:a,stateBkg:t,altBackground:a,attributeBackgroundColorOdd:t,attributeBackgroundColorEven:a,rowOdd:t,rowEven:a,gridColor:o,sectionBkgColor:t,sectionBkgColor2:a,taskBkgColor:l,taskTextColor:i,taskTextDarkColor:i,taskTextLightColor:i,taskTextOutsideColor:i,activeTaskBkgColor:r,activeTaskBorderColor:r,doneTaskBkgColor:n,doneTaskBorderColor:n,critBkgColor:c,critBorderColor:c}}),an=!0}let{svg:i}=await e.render(`mermaid-${(0,ae.z)()}`,o);if(a)return;if(!i||/aria-roledescription="error"/i.test(i))return void s(!0);n(i)}catch(e){console.error("[MermaidBlock] render failed",e),a||s(!0)}})(),()=>{a=!0}):void s(!0)},[e]),r)?(0,o.jsx)(ai,{children:e.trim()}):(0,o.jsx)(ao,{dangerouslySetInnerHTML:{__html:a}})}let al=["#388bfd","#3fb950","#d29922","#a371f7","#f87171","#22d3ee","#fb923c","#34d399","#f472b6","#818cf8"],ad=s().div`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ac=s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  margin-bottom: ${l.w4.spacing.md};
  text-align: center;
`,ap=s().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
`,am=s().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,ag=s().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,au=s().pre`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.md};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 12.5px;
  color: ${l.w4.colors.mainTextMuted};
  white-space: pre-wrap;
`;function ah(e){if(e<=0)return 10;let a=Math.pow(10,Math.floor(Math.log10(e)));return Math.ceil(e/a)*a}function af({labels:e,data:a,colors:t}){let i=340,n=176,r=ah(Math.max(...a,1)),s=Math.min(40,i/e.length*.6),d=i/e.length,c=Array.from({length:6},(e,a)=>r/5*a);return(0,o.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[c.map((e,a)=>{let t=16+n-e/r*n;return(0,o.jsxs)("g",{children:[(0,o.jsx)("line",{x1:44,y1:t,x2:384,y2:t,stroke:l.w4.colors.border,strokeWidth:.5,strokeDasharray:0===a?"none":"3,3"}),(0,o.jsx)("text",{x:38,y:t+4,fill:l.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:l.w4.typography.fontFamily,children:Math.round(e)})]},a)}),a.map((a,i)=>{let c=44+d*i+d/2-s/2,p=a/r*n,m=16+n-p,g=t[i%t.length];return(0,o.jsxs)("g",{children:[(0,o.jsxs)("rect",{x:c,y:m,width:s,height:p,rx:3,fill:g,opacity:.85,children:[(0,o.jsx)("animate",{attributeName:"height",from:"0",to:p,dur:"0.5s",fill:"freeze"}),(0,o.jsx)("animate",{attributeName:"y",from:16+n,to:m,dur:"0.5s",fill:"freeze"})]}),(0,o.jsx)("text",{x:c+s/2,y:m-4,fill:l.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:a}),(0,o.jsx)("text",{x:44+d*i+d/2,y:208,fill:l.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:e[i].length>8?e[i].slice(0,7)+"…":e[i]})]},i)})]})}function ab({labels:e,data:a,colors:t}){let i=a.reduce((e,a)=>e+a,0)||1,n=-Math.PI/2,r=a.map((e,a)=>{let r=e/i*Math.PI*2,s=n,d=n+=r,c=120+90*Math.cos(s),p=120+90*Math.sin(s),m=120+90*Math.cos(d),g=120+90*Math.sin(d),u=+(r>Math.PI),h=s+r/2,f=120+58.5*Math.cos(h),b=120+58.5*Math.sin(h),x=Math.round(e/i*100);return(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{d:`M 120 120 L ${c} ${p} A 90 90 0 ${u} 1 ${m} ${g} Z`,fill:t[a%t.length],stroke:l.w4.colors.codeBg,strokeWidth:2,opacity:.85}),x>=5&&(0,o.jsxs)("text",{x:f,y:b+4,fill:"#fff",fontSize:11,fontWeight:600,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:[x,"%"]})]},a)});return(0,o.jsx)("svg",{viewBox:"0 0 240 240",width:"100%",style:{maxWidth:240},children:r})}function ax({labels:e,data:a,colors:t}){let i=340,n=176,r=ah(Math.max(...a,1)),s=a.length>1?i/(a.length-1):i,d=t[0],c=a.map((e,a)=>({x:44+s*a,y:16+n-e/r*n})),p=c.map((e,a)=>`${0===a?"M":"L"} ${e.x} ${e.y}`).join(" "),m=Array.from({length:6},(e,a)=>r/5*a);return(0,o.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[m.map((e,a)=>{let t=16+n-e/r*n;return(0,o.jsxs)("g",{children:[(0,o.jsx)("line",{x1:44,y1:t,x2:384,y2:t,stroke:l.w4.colors.border,strokeWidth:.5,strokeDasharray:0===a?"none":"3,3"}),(0,o.jsx)("text",{x:38,y:t+4,fill:l.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:l.w4.typography.fontFamily,children:Math.round(e)})]},a)}),(0,o.jsx)("path",{d:p,fill:"none",stroke:d,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),c.map((t,i)=>(0,o.jsxs)("g",{children:[(0,o.jsx)("circle",{cx:t.x,cy:t.y,r:4,fill:d,stroke:l.w4.colors.codeBg,strokeWidth:2}),(0,o.jsx)("text",{x:t.x,y:t.y-10,fill:l.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:a[i]}),(0,o.jsx)("text",{x:t.x,y:208,fill:l.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:e[i].length>8?e[i].slice(0,7)+"…":e[i]})]},i))]})}function ay({code:e}){let a=(0,i.useMemo)(()=>(function(e){let a,t,o=e.trim().split("\n"),i="bar",n=[],r=[];for(let e of o){let[o,...s]=e.split(":"),l=s.join(":").trim();if(l)switch(o.trim().toLowerCase()){case"type":["bar","pie","line"].includes(l.toLowerCase())&&(i=l.toLowerCase());break;case"title":a=l;break;case"labels":n=l.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim());break;case"data":r=l.replace(/^\[|\]$/g,"").split(",").map(e=>parseFloat(e.trim())||0);break;case"colors":t=l.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim())}}return n.length&&r.length?{type:i,title:a,labels:n,data:r,colors:t}:null})(e),[e]);if(!a)return(0,o.jsx)(au,{children:e.trim()});let t=a.colors??al;return(0,o.jsxs)(ad,{children:[a.title&&(0,o.jsx)(ac,{children:a.title}),"bar"===a.type&&(0,o.jsx)(af,{labels:a.labels,data:a.data,colors:t}),"pie"===a.type&&(0,o.jsx)(ab,{labels:a.labels,data:a.data,colors:t}),"line"===a.type&&(0,o.jsx)(ax,{labels:a.labels,data:a.data,colors:t}),(0,o.jsx)(ap,{children:a.labels.map((e,a)=>(0,o.jsxs)(am,{children:[(0,o.jsx)(ag,{color:t[a%t.length]}),e]},a))})]})}s().div`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l.w4.spacing.md};
`,s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 40px;
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  letter-spacing: 0.05em;
  min-width: 150px;
  text-align: center;
`,s().div`
  display: flex;
  gap: ${l.w4.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`,s().button`
  padding: 6px 14px;
  border: 1px solid ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    border-color: ${l.w4.colors.accent};
    color: ${l.w4.colors.accent};
  }
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  text-align: center;
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  text-align: center;
`;let aw=(0,A.keyframes)`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
`;s().div`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.lg};
  padding: ${l.w4.spacing.md};
  margin: ${l.w4.spacing.lg} 0;
`,s().div`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${l.w4.spacing.md};
  display: flex;
  align-items: center;
  gap: 6px;
`,s().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${l.w4.spacing.sm};

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,s().div`
  display: flex;
  flex-direction: column;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${l.w4.colors.accent}40;
    box-shadow: 0 0 8px ${l.w4.colors.accent}15;
  }
`;let av=s().button`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};
  padding: 14px ${l.w4.spacing.md};
  min-height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${l.w4.typography.fontFamily};
  transition: background 0.15s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    animation: ${aw} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;s()(av)`
  border-bottom: 1px solid ${l.w4.colors.border}80;
`,s()(av)``,s().span`
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
`,s().span`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.accent};
`,s().span`
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${l.w4.colors.mainTextMuted};
`;var ak=t(17223),a$=t(21426),az=t(25609),aM=t(20320);let aj=s().div`
  margin: ${l.w4.spacing.lg} 0;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${l.w4.colors.codeBorder};
  overflow: hidden;
`,aS=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${l.w4.colors.codeBorder};
`,aA=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,aT=s().button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: none;
  border: 1px solid ${({copied:e})=>e?"#3fb950":l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({copied:e})=>e?"#3fb950":l.w4.colors.sidebarTextMuted};
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamily};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover { color: ${l.w4.colors.sidebarText}; border-color: ${l.w4.colors.sidebarText}; }
`,aC={...a$.A,'pre[class*="language-"]':{...a$.A['pre[class*="language-"]'],background:l.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...a$.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function aL({lang:e="text",code:a}){let[t,n]=(0,i.useState)(!1);return(0,o.jsxs)(aj,{children:[(0,o.jsxs)(aS,{children:[(0,o.jsx)(aA,{children:e}),(0,o.jsxs)(aT,{copied:t,onClick:()=>{navigator.clipboard.writeText(a).then(()=>{n(!0),setTimeout(()=>n(!1),2e3)})},children:[t?(0,o.jsx)(az.A,{size:12}):(0,o.jsx)(aM.A,{size:12}),t?"Copied!":"Copy"]})]}),(0,o.jsx)(ak.A,{language:e,style:aC,showLineNumbers:a.split("\n").length>8,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:l.w4.colors.codeBg},wrapLongLines:!1,children:a})]})}var aF=t(65569),aN=t(8218),aE=t(57230),aP=t(22966),aI=t(21069);let aR={NOTE:{bg:"rgba(88, 166, 255, 0.08)",border:"#58a6ff",icon:aF.A,label:"Note",color:"#58a6ff"},TIP:{bg:"rgba(63, 185, 80, 0.08)",border:"#3fb950",icon:aN.A,label:"Tip",color:"#3fb950"},IMPORTANT:{bg:"rgba(163, 113, 247, 0.08)",border:"#a371f7",icon:aE.A,label:"Important",color:"#a371f7"},WARNING:{bg:"rgba(210, 153, 34, 0.08)",border:"#d29922",icon:aP.A,label:"Warning",color:"#d29922"},CAUTION:{bg:"rgba(248, 81, 73, 0.08)",border:"#f85149",icon:aI.A,label:"Caution",color:"#f85149"}},aD=s().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${l.w4.borderRadius.md} ${l.w4.borderRadius.md} 0;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
`,aB=s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: ${l.w4.spacing.sm};
`,aO=s().div`
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`;function aH({type:e,children:a}){let t=aR[e]??aR.NOTE,i=t.icon;return(0,o.jsxs)(aD,{bg:t.bg,border:t.border,children:[(0,o.jsxs)(aB,{color:t.color,children:[(0,o.jsx)(i,{size:15,strokeWidth:2}),t.label]}),(0,o.jsx)(aO,{children:a})]})}s().nav`
  width: 220px;
  min-width: 220px;
  padding: ${l.w4.spacing.xxl} 0 ${l.w4.spacing.xxl} ${l.w4.spacing.xl};
  align-self: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1100px) { display: none; }
`,s().div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: ${l.w4.spacing.md};
`,s().ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px;`,s().a`
  display: block;
  padding: 4px 8px;
  padding-left: ${({level:e})=>3===e?"20px":"8px"};
  font-size: ${l.w4.typography.fontSizeSm};
  font-family: ${l.w4.typography.fontFamily};
  color: ${({active:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarTextMuted};
  text-decoration: none;
  border-left: 2px solid ${({active:e})=>e?l.w4.colors.accent:"transparent"};
  border-radius: 0 ${l.w4.borderRadius.sm} ${l.w4.borderRadius.sm} 0;
  line-height: 1.4;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  word-break: break-word;
  &:hover { color: ${l.w4.colors.mainText}; background: ${l.w4.colors.sidebarHover}; }
`,s().div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${l.w4.spacing.xl};
  width: 100%;
  box-sizing: border-box;
`,s().div`flex: 1; min-width: 0;`,s().article`
  padding: ${l.w4.spacing.xxl} 0;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  line-height: ${l.w4.typography.lineHeightBase};

  h1, h2, h3, h4, h5, h6 {
    margin: ${l.w4.spacing.xl} 0 ${l.w4.spacing.md};
    color: ${l.w4.colors.mainText};
    font-weight: 600;
    line-height: 1.3;
    scroll-margin-top: 24px;
    &:first-of-type { margin-top: 0; }
    .heading-anchor {
      opacity: 0; margin-left: 8px; color: ${l.w4.colors.sidebarTextMuted};
      text-decoration: none; font-size: 0.7em; vertical-align: middle; transition: opacity 0.15s;
    }
    &:hover .heading-anchor { opacity: 1; }
  }
  h1 { font-size: ${l.w4.typography.fontSizeXl}; border-bottom: 1px solid ${l.w4.colors.border}; padding-bottom: ${l.w4.spacing.sm}; }
  h2 { font-size: ${l.w4.typography.fontSizeLg}; border-bottom: 1px solid ${l.w4.colors.border}; padding-bottom: ${l.w4.spacing.xs}; }
  h3 { font-size: ${l.w4.typography.fontSizeMd}; }

  p { margin: ${l.w4.spacing.md} 0; }

  a { color: ${l.w4.colors.accent}; text-decoration: none; &:hover { text-decoration: underline; color: ${l.w4.colors.accentHover}; } }

  ul, ol { margin: ${l.w4.spacing.md} 0; padding-left: ${l.w4.spacing.xl}; }
  li { margin: ${l.w4.spacing.xs} 0; }

  blockquote {
    border-left: 3px solid ${l.w4.colors.border};
    margin: ${l.w4.spacing.lg} 0;
    padding: ${l.w4.spacing.sm} ${l.w4.spacing.lg};
    background: ${l.w4.colors.surface};
    color: ${l.w4.colors.mainTextMuted};
    border-radius: 0 ${l.w4.borderRadius.sm} ${l.w4.borderRadius.sm} 0;
  }

  code {
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 0.875em;
    background: ${l.w4.colors.codeBg};
    border: 1px solid ${l.w4.colors.codeBorder};
    padding: 2px 6px;
    border-radius: ${l.w4.borderRadius.sm};
  }

  pre { margin: 0; }
  pre code { background: none; border: none; padding: 0; }

  table { width: 100%; border-collapse: collapse; margin: ${l.w4.spacing.lg} 0; font-size: ${l.w4.typography.fontSizeBase}; }
  th, td { padding: ${l.w4.spacing.sm} ${l.w4.spacing.md}; border: 1px solid ${l.w4.colors.border}; text-align: left; }
  th { background: ${l.w4.colors.surface}; font-weight: 600; }
  tr:nth-of-type(even) td { background: ${l.w4.colors.surface}; }

  hr { border: none; border-top: 1px solid ${l.w4.colors.border}; margin: ${l.w4.spacing.xl} 0; }
  img { max-width: 100%; border-radius: ${l.w4.borderRadius.md}; }

  /* KaTeX */
  .katex .katex-mathml { display: none; }

  /* KaTeX display math */
  .math-display {
    overflow-x: auto;
    padding: ${l.w4.spacing.md} 0;
    text-align: center;
  }
  .katex { font-size: 1.1em; }
  .katex-display { margin: ${l.w4.spacing.lg} 0; }
`,s().div`
  display: flex;
  gap: ${l.w4.spacing.lg};
  padding: ${l.w4.spacing.xxl} 0;
  border-top: 1px solid ${l.w4.colors.border};
  margin-top: ${l.w4.spacing.xxl};
`,s().button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({align:e})=>"left"===e?"flex-start":"flex-end"};
  gap: 4px;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  cursor: pointer;
  text-align: ${({align:e})=>e};
  transition: border-color 0.15s, background 0.15s;
  &:hover { border-color: ${l.w4.colors.accent}; background: rgba(88, 166, 255, 0.05); }
`,s().div`
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: ${l.w4.colors.sidebarTextMuted}; font-family: ${l.w4.typography.fontFamily};
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
`,s().div`
  font-size: ${l.w4.typography.fontSizeBase}; color: ${l.w4.colors.accent};
  font-family: ${l.w4.typography.fontFamily}; font-weight: 500;
`,s().div`
  color: ${l.w4.colors.mainTextMuted};
  padding: ${l.w4.spacing.xxl} ${l.w4.spacing.xl};
  font-family: ${l.w4.typography.fontFamily};
`;let a_=(0,A.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,aK=(0,A.keyframes)`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;function aU(){let e=/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i;return a=>{function t(a,t,o){let i=t.children?.[0];i?.type==="text"&&(i.value=i.value.replace(e,""),i.value.trim()||1!==t.children.length||t.children.shift()),a.data=a.data??{},a.data.hName="div",a.data.hProperties={"data-callout":o.toUpperCase()}}!function a(o){if("blockquote"===o.type){let a=o.children?.[0];if(a?.type==="paragraph"){let i=a.children?.[0],n=i?.type==="text"&&i.value?.match(e);n&&t(o,a,n[1])}}if("paragraph"===o.type){let a=o.children?.[0],i=a?.type==="text"&&a.value?.match(e);if(i){let a=[...o.children];o.children=[{type:"paragraph",children:a}],t(o,o.children[0],i[1]);let n=a[0];n?.type==="text"&&(n.value=n.value.replace(e,""),n.value.trim()||1!==a.length||a.shift());return}}o.children?.forEach(a)}(a)}}s().div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${a_} 0.15s ease;
`,s().div`
  width: 90%;
  max-width: 580px;
  max-height: 70vh;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px ${l.w4.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${aK} 0.2s ease;
`,s().div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid ${l.w4.colors.border};
`,s().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  &::placeholder { color: ${l.w4.colors.sidebarTextMuted}; }
`,s().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${l.w4.colors.sidebarHover};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.sm};
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  transition: color 0.15s, background 0.15s;
  &:hover { color: ${l.w4.colors.mainText}; background: ${l.w4.colors.border}; }
`,s().div`
  flex: 1;
  overflow-y: auto;
  padding: ${l.w4.spacing.sm} 0;
`,s().div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.sidebarTextMuted};
`,s().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,s().button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 10px 18px;
  background: ${({selected:e})=>e?l.w4.colors.accentMuted:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,s().div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${l.w4.borderRadius.md};
  background: ${({selected:e})=>e?`${l.w4.colors.accent}20`:l.w4.colors.sidebarHover};
  color: ${({selected:e})=>e?l.w4.colors.accent:l.w4.colors.sidebarTextMuted};
  flex-shrink: 0;
  margin-top: 1px;
`,s().div`
  flex: 1;
  min-width: 0;
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 8px;
`,s().span`
  font-weight: 400;
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.sidebarTextMuted};
`,s().span`
  font-size: 11px;
  font-weight: 500;
  color: ${l.w4.colors.accent};
  background: ${l.w4.colors.accentMuted};
  padding: 1px 6px;
  border-radius: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.5;
  margin-top: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${l.w4.colors.accent}25;
    color: ${l.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,s().div`
  display: flex;
  align-items: center;
  color: ${({selected:e})=>e?l.w4.colors.accent:"transparent"};
  margin-top: 8px;
  transition: color 0.1s;
`,s().div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  border-top: 1px solid ${l.w4.colors.border};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
`,s().kbd`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  background: ${l.w4.colors.sidebarHover};
  border: 1px solid ${l.w4.colors.border};
  border-radius: 3px;
  font-size: 10px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.sidebarTextMuted};
`,s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 18px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  text-align: center;
`,s().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: ${l.w4.typography.fontFamily};
  background: ${l.w4.colors.mainBg};
`,s().div`
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
`,s().div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${l.w4.colors.border}40 1px, transparent 1px),
    linear-gradient(90deg, ${l.w4.colors.border}40 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
`,s().div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,s().h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg,
    ${l.w4.colors.mainText} 0%,
    ${l.w4.colors.accent} 50%,
    hsl(270, 70%, 70%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 0;
`,s().p`
  font-size: ${l.w4.typography.fontSizeMd};
  color: ${l.w4.colors.mainTextMuted};
  max-width: 380px;
  line-height: 1.6;
  margin: 0;
`,s().span`
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.8; }
  }
`,s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: ${l.w4.colors.sidebarHover};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: ${l.w4.typography.fontSizeSm};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${l.w4.colors.accent}60;
    color: ${l.w4.colors.mainText};
    background: ${l.w4.colors.accentMuted};
  }

  kbd {
    font-size: 10px;
    padding: 1px 4px;
    background: ${l.w4.colors.surface};
    border: 1px solid ${l.w4.colors.border};
    border-radius: 3px;
    color: ${l.w4.colors.sidebarTextMuted};
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    padding: 5px 8px;
    span { display: none; }
    kbd { display: none; }
  }
`,s().div`
  display: flex;
  gap: 4px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  padding: 2px;
`,s().button`
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
`,s().div`
  padding: ${({collapsed:e})=>e?"8px 4px":`8px ${l.w4.spacing.md}`};
  border-bottom: 1px solid ${l.w4.colors.border}60;
`,s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${({collapsed:e})=>e?"8px 0":"6px 10px"};
  justify-content: ${({collapsed:e})=>e?"center":"flex-start"};
  background: ${({focused:e})=>e?`${l.w4.colors.accent}10`:l.w4.colors.sidebarHover};
  border: 1px solid ${({focused:e})=>e?`${l.w4.colors.accent}40`:"transparent"};
  border-radius: ${l.w4.borderRadius.md};
  transition: background 0.15s, border-color 0.2s;
  cursor: ${({collapsed:e})=>e?"pointer":"text"};
`,s().input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: ${l.w4.colors.sidebarText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  min-width: 0;
  display: ${({collapsed:e})=>e?"none":"block"};
  &::placeholder { color: ${l.w4.colors.sidebarTextMuted}; }
`,s().button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: ${l.w4.colors.sidebarTextMuted};
  border-radius: ${l.w4.borderRadius.sm};
  transition: color 0.15s;
  &:hover { color: ${l.w4.colors.mainText}; }
`,s().div`
  max-height: 60vh;
  overflow-y: auto;
  padding: ${l.w4.spacing.sm} 0;
`,s().button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding: 8px ${l.w4.spacing.md};
  background: ${({active:e})=>e?l.w4.colors.sidebarActiveBg:"none"};
  border: none;
  border-left: 2px solid ${({active:e})=>e?l.w4.colors.sidebarActive:"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background 0.12s;
  &:hover { background: ${l.w4.colors.sidebarHover}; }
`,s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${l.w4.colors.sidebarText};
`,s().span`
  font-weight: 400;
  color: ${l.w4.colors.sidebarTextMuted};
  font-size: 11px;
`,s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  color: ${l.w4.colors.sidebarTextMuted};
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  mark {
    background: ${l.w4.colors.accent}30;
    color: ${l.w4.colors.accent};
    border-radius: 2px;
    padding: 0 2px;
  }
`,s().div`
  padding: 12px ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.sidebarTextMuted};
  display: flex;
  align-items: center;
  gap: 8px;
`,s().span`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`,s().span`
  font-size: 11px;
  color: ${l.w4.colors.accent};
  font-weight: 600;
  margin-left: auto;
`;let aq=s().div`
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
`;function aG({children:e}){return(0,o.jsx)(aq,{children:(0,o.jsx)(e3.oz,{remarkPlugins:[e8.A,e6.A,aU],rehypePlugins:[e7.A,e9.A],components:{div({node:e,children:a,...t}){let i=t["data-callout"];return i?(0,o.jsx)(aH,{type:i,children:a}):(0,o.jsx)("div",{...t,children:a})},pre:({children:e})=>(0,o.jsx)(o.Fragment,{children:e}),code({className:e,children:a}){let t=/language-(\w+)/.exec(e??"")?.[1],i=String(a).replace(/\n$/,"");return i.trim()?"mermaid"===t?(0,o.jsx)(as,{code:i}):"chart"===t?(0,o.jsx)(ay,{code:i}):t||i.includes("\n")?(0,o.jsx)(aL,{lang:t,code:i}):(0,o.jsx)("code",{className:e,children:a}):null}},children:e})})}s().nav`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: ${l.w4.spacing.sm} 0;
`,s().div`
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
`,s().button`
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
`,s().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`,s().span`
  overflow: hidden;
  text-overflow: ellipsis;
  ${({collapsed:e})=>e&&"display: none;"}
`},68360(e,a,t){t.d(a,{e:()=>o});function o(e){let a=e instanceof Date?e:new Date(e);if(Number.isNaN(a.getTime()))return"--:--";let t=String(a.getHours()).padStart(2,"0"),o=String(a.getMinutes()).padStart(2,"0");return`${t}:${o}`}},54041(e,a,t){t.d(a,{z:()=>o});function o(){return"u">typeof crypto&&"function"==typeof crypto.randomUUID?crypto.randomUUID().replace(/-/g,"").slice(0,8):Math.random().toString(36).slice(2,10).padEnd(8,"0")}},85043(e,a,t){t.d(a,{Y:()=>p});var o=t(65723),i=t(36859),n=t.n(i),r=t(89874);let s=n().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 80px;
  gap: 6px;
  padding: ${r.w4.spacing.md};
`,l=n().span`
  font-family: ${r.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({mode:e})=>r.w4.colors.mainTextMuted};
  opacity: ${({mode:e})=>"loading"===e?.5:.7};
`,d=n().p`
  font-size: ${r.w4.typography.fontSizeSm};
  color: ${r.w4.colors.mainTextMuted};
  opacity: 0.6;
  text-align: center;
  max-width: 240px;
  margin: 0;
  line-height: 1.5;
`,c={loading:"◌ Loading",empty:"◎ Empty",error:"◎ Offline"};function p({mode:e,label:a,body:t}){return(0,o.jsxs)(s,{children:[(0,o.jsx)(l,{mode:e,children:a??c[e]}),t&&(0,o.jsx)(d,{children:t})]})}},38628(e,a,t){t.d(a,{YG:()=>o.Y});var o=t(85043);t(65723),t(37991);var i=t(89874),n=t(36859),r=t.n(n);r().span`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
  color: ${({sign:e})=>"pos"===e?i.w4.colors.success:"neg"===e?i.w4.colors.danger:i.w4.colors.mainTextMuted};
  white-space: nowrap;
`,r().div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${i.w4.spacing.sm};
  padding: 4px 0;
  cursor: default;
  transition: background 0.12s;
  border-radius: 3px;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
  }
`,r().a`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${i.w4.spacing.sm};
  padding: 4px 0;
  text-decoration: none;
  color: inherit;
  border-radius: 3px;
  transition: background 0.12s;

  &:hover {
    background: ${i.w4.colors.sidebarHover};
  }
`,r().div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
`,r().span`
  font-size: 13px;
  color: ${i.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
`,r().span`
  font-size: 11px;
  font-family: ${i.w4.typography.fontFamilyMono};
  color: ${i.w4.colors.mainTextMuted};
  opacity: 0.75;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,r().span`
  font-family: ${i.w4.typography.fontFamilyMono};
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  color: ${i.w4.colors.mainTextMuted};
  white-space: nowrap;
  flex-shrink: 0;
  text-align: right;
`,t(83090),r().div`
  position: relative;
  height: 6px;
  background: ${i.w4.colors.border};
  border-radius: 3px;
  overflow: hidden;
`,r().div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 3px;
  width: ${({pct:e})=>Math.min(100,e)}%;
  background: ${({color:e})=>e};
  transition: width 400ms ease;
`,r().div`
  position: absolute;
  top: 0;
  height: 100%;
  left: ${({left:e})=>e}%;
  width: ${({width:e})=>e}%;
  background: ${"#f85149"};
  opacity: 0.7;
  transition: width 400ms ease;
`},83090(e,a,t){t.d(a,{B:()=>i});var o=t(48294);function i(e){let a=(0,o.cacheBackedProducer)({id:e.id,category:e.category,cacheKey:e.cacheKey,parse:e.parse});return{id:e.id,category:e.category,labelKey:e.labelKey,producer:a,start(){},stop(){}}}},10312(e,a,t){t.d(a,{A:()=>o});let o={id:"agenda",load:()=>t.e("6091").then(t.bind(t,31382)).then(e=>({default:e.AgendaWidget})),labels:{en:"Agenda Today",pt:"Agenda Hoje"},descriptions:{en:"Daily timeline — add and track your events",pt:"Linha do tempo di\xe1ria — adiciona e acompanha os teus eventos"},icon:"\uD83D\uDCC5",accentColor:"#6366f1",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:240,suite:"vida",defaultOnDashboard:!1,sources:[{id:"agenda-events",kind:"local",cacheKey:"agenda:events",labelKey:"sources.agendaEvents"}],persistedKeys:["agenda:events"]}},95318(e,a,t){t.d(a,{A:()=>o});let o={id:"analog-clock",load:()=>t.e("6184").then(t.bind(t,13147)).then(e=>({default:e.AnalogClockWidget})),labels:{en:"Analog Clock",pt:"Rel\xf3gio Anal\xf3gico"},descriptions:{en:"Classic clock face",pt:"Mostrador cl\xe1ssico de rel\xf3gio"},icon:"\uD83D\uDD50",accentColor:"#f87171",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[]}},88350(e,a,t){t.d(a,{A:()=>o});let o={id:"astro",load:()=>t.e("717").then(t.bind(t,36220)).then(e=>({default:e.AstroWidget})),labels:{en:"Astronomy",pt:"Astronomia"},descriptions:{en:"Moon phase, sun arc, and ISS passes",pt:"Fase da lua, arco solar e passagens da ISS"},icon:"☽",accentColor:"#8b7bff",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"sunrise-sunset",kind:"dal-client",labelKey:"sources.sunriseSunset"},{id:"iss-passes",kind:"bll-hook",labelKey:"sources.issPass"}]}},8740(e,a,t){t.d(a,{A:()=>o});let o={id:"bolsa",load:()=>t.e("5569").then(t.bind(t,20120)).then(e=>({default:e.BolsaWidget})),labels:{en:"Markets",pt:"Bolsa"},descriptions:{en:"Stocks and crypto prices with sparklines",pt:"A\xe7\xf5es e pre\xe7os cripto com sparklines"},icon:"▲",accentColor:"#7fb77e",defaultSize:"lg",defaultCols:2,maxCols:2,minHeight:280,suite:"vida",defaultOnDashboard:!1,sources:[{id:"coinGecko-markets",kind:"cache-key",cacheKey:"bolsa-markets",labelKey:"sources.coinGecko"},{id:"finnhub",kind:"bll-hook",labelKey:"sources.finnhub"}],persistedKeys:["widget-cache:bolsa-markets"]}},55523(e,a,t){t.d(a,{A:()=>o});let o={id:"clock",load:()=>t.e("5069").then(t.bind(t,48956)).then(e=>({default:e.ClockWidget})),labels:{en:"World Clock",pt:"Rel\xf3gio Mundial"},descriptions:{en:"Time across multiple zones",pt:"Horas em v\xe1rios fusos"},icon:"\uD83D\uDD50",accentColor:"#d29922",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:160,suite:"vida",defaultOnDashboard:!0,sources:[]}},73e3(e,a,t){t.d(a,{A:()=>o});let o={id:"daily-feed",load:()=>t.e("9300").then(t.bind(t,44879)).then(e=>({default:e.DailyFeedWidget})),labels:{en:"Daily Feed",pt:"Feed Di\xe1rio"},descriptions:{en:"Tech, movies, history, news — curated for today",pt:"Tech, filmes, hist\xf3ria, not\xedcias — curado para hoje"},icon:"\uD83D\uDCF0",accentColor:"#2dd4bf",defaultSize:"lg",defaultCols:2,maxCols:2,minHeight:280,suite:"vida",defaultOnDashboard:!0,sources:[{id:"techscope-hn",kind:"cache-key",cacheKey:"techscope-hn",labelKey:"sources.hackerNews"},{id:"trending-movies",kind:"cache-key",cacheKey:"trending-movies",labelKey:"sources.tmdb"},{id:"news-portugal",kind:"cache-key",cacheKey:"news-portugal",labelKey:"sources.rtp"},{id:"news-world",kind:"cache-key",cacheKey:"news-world",labelKey:"sources.cnn"},{id:"daily-progress",kind:"bll-hook",labelKey:"sources.dailyProgress"}]}},87517(e,a,t){t.d(a,{A:()=>o});let o={id:"habits",load:()=>t.e("2045").then(t.bind(t,26780)).then(e=>({default:e.HabitsWidget})),labels:{en:"Habits Grid",pt:"Grelha de H\xe1bitos"},descriptions:{en:"Your last 7 days of missions",pt:"Os teus \xfaltimas 7 dias de miss\xf5es"},icon:"\uD83C\uDFAF",accentColor:"#fb923c",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:200,suite:"vida",defaultOnDashboard:!0,sources:[{id:"daily-progress",kind:"bll-hook",cacheKey:"daily:progress",labelKey:"sources.dailyProgress"}],notifications:[{id:"daily",category:"daily.overdue",labelKey:"notifications.source.daily",producer:(0,t(48294).dailyProducer)({category:"daily.overdue"}),start(){},stop(){}}],persistedKeys:["daily:progress"]}},32013(e,a,t){t.d(a,{A:()=>i});var o=t(1310);let i={id:"hackernews-hot",load:()=>t.e("9390").then(t.bind(t,33565)).then(e=>({default:e.HackerNewsHotWidget})),labels:{en:"Hacker News Hot",pt:"Em Alta no HN"},descriptions:{en:"Top stories from Hacker News",pt:"Hist\xf3rias em destaque no Hacker News"},icon:"\uD83D\uDD25",accentColor:"#f97316",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"hn-firebase",kind:"dal-client",cacheKey:"internet-hn-ids",labelKey:"sources.hackerNews",notifiable:!0}],notifications:[{id:"hn-front-page",category:"hn.frontPage",labelKey:"notifications.source.hnFrontPage",producer:{id:"hn-front-page",category:"hn.frontPage",async poll(){let e=await (0,o.fetchHnFrontPage)(5);if(!e?.hits)return[];let a=[];for(let t of e.hits){let e=t.created_at_i??(t.created_at?Date.parse(t.created_at)/1e3:NaN);Number.isFinite(e)&&a.push({id:`hn-front:${t.objectID}`,category:"hn.frontPage",ts:1e3*e,title:t.title,link:t.url??`https://news.ycombinator.com/item?id=${t.objectID}`,meta:{points:t.points,comments:t.num_comments}})}return a}},start(){},stop(){}}],persistedKeys:["widget-cache:internet-hn-ids"]}},43414(e,a,t){t.d(a,{A:()=>o});let o={id:"lab-launcher",load:()=>t.e("9504").then(t.bind(t,28675)).then(e=>({default:e.LabLauncherWidget})),labels:{en:"AI Lab Launcher",pt:"Lan\xe7ador Lab de IA"},descriptions:{en:"Quick access to AI tools",pt:"Acesso r\xe1pido \xe0s ferramentas de IA"},icon:"⟁",accentColor:"#5e4cbb",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:240,suite:"lab",defaultOnDashboard:!1,sources:[]}},20593(e,a,t){t.d(a,{A:()=>o});let o={id:"learn-launcher",load:()=>t.e("4422").then(t.bind(t,24853)).then(e=>({default:e.LearnLauncherWidget})),labels:{en:"Learning Launcher",pt:"Lan\xe7ador de Aprendizagem"},descriptions:{en:"Quick access to school and learning apps",pt:"Acesso r\xe1pido a apps de escola e aprendizagem"},icon:"⌘",accentColor:"#3e805f",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:240,suite:"learn",defaultOnDashboard:!1,sources:[]}},57438(e,a,t){t.d(a,{A:()=>o});let o={id:"live-data",load:()=>t.e("2266").then(t.bind(t,98689)).then(e=>({default:e.LiveDataWidget})),labels:{en:"Dashboard Health",pt:"Sa\xfade do Painel"},descriptions:{en:"Live API latency and FPS monitor",pt:"Monitor de lat\xeancia e FPS ao vivo"},icon:"\uD83D\uDCE1",accentColor:"#00d4ff",defaultSize:"lg",defaultCols:2,maxCols:2,minHeight:200,suite:"tools",defaultOnDashboard:!1,sources:[{id:"dal-telemetry",kind:"bll-hook",labelKey:"sources.dalTelemetry"}]}},75763(e,a,t){t.d(a,{A:()=>o});let o={id:"movies",load:()=>t.e("3509").then(t.bind(t,60308)).then(e=>({default:e.MoviesWidget})),labels:{en:"Trending Movies",pt:"Filmes em Alta"},descriptions:{en:"Top trending movies and series this week",pt:"Filmes e s\xe9ries em alta esta semana"},icon:"\uD83C\uDFAC",accentColor:"#f97316",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:280,suite:"ent",defaultOnDashboard:!0,sources:[{id:"tmdb-trending",kind:"cache-key",cacheKey:"trending-movies",labelKey:"sources.tmdb"}],persistedKeys:["widget-cache:trending-movies"]}},53(e,a,t){t.d(a,{A:()=>o});let o={id:"music",load:()=>t.e("4232").then(t.bind(t,88571)).then(e=>({default:e.MusicaWidget})),labels:{en:"Music",pt:"M\xfasica"},descriptions:{en:"Your recently played tracks",pt:"As tuas m\xfasicas recentes"},icon:"♪",accentColor:"#e89a5c",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"music-tracks",kind:"local",cacheKey:"music:tracks",labelKey:"sources.musicTracks"}],persistedKeys:["music:tracks"]}},19603(e,a,t){t.d(a,{A:()=>o});let o={id:"news-pt",load:()=>t.e("9392").then(t.bind(t,71507)).then(e=>({default:e.NewsPortugalWidget})),labels:{en:"PT News",pt:"Not\xedcias PT"},descriptions:{en:"Latest news from RTP",pt:"\xdaltimas not\xedcias da RTP"},icon:"\uD83D\uDCF0",accentColor:"#2da44e",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"rtp-rss",kind:"cache-key",cacheKey:"news-portugal",labelKey:"sources.rtp",notifiable:!0}],notifications:[(0,t(83090).B)({id:"news-pt",category:"news.pt",labelKey:"notifications.source.newsPt",badgeColor:"#2da44e",cacheKey:"news-portugal",parse:function(e){if(!e?.items)return[];let a=[];return e.items.forEach((e,t)=>{let o=Date.parse(e.pubDate);Number.isNaN(o)||a.push({id:`${o}-${t}`,ts:o,title:e.title,link:e.link})}),a}})],persistedKeys:["widget-cache:news-portugal"]}},72026(e,a,t){t.d(a,{A:()=>o});let o={id:"news-world",load:()=>t.e("7566").then(t.bind(t,94925)).then(e=>({default:e.NewsWorldWidget})),labels:{en:"World News",pt:"Not\xedcias Mundo"},descriptions:{en:"Latest news from CNN",pt:"\xdaltimas not\xedcias da CNN"},icon:"\uD83C\uDF0D",accentColor:"#cc0000",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"cnn-rss",kind:"cache-key",cacheKey:"news-world",labelKey:"sources.cnn",notifiable:!0}],notifications:[(0,t(83090).B)({id:"news-world",category:"news.world",labelKey:"notifications.source.newsWorld",badgeColor:"#cc0000",cacheKey:"news-world",parse:function(e){if(!e?.items)return[];let a=[];return e.items.forEach((e,t)=>{let o=Date.parse(e.pubDate);Number.isNaN(o)||a.push({id:`${o}-${t}`,ts:o,title:e.title,link:e.link})}),a}})],persistedKeys:["widget-cache:news-world"]}},77032(e,a,t){t.d(a,{A:()=>o});let o={id:"night-sky",load:()=>t.e("7890").then(t.bind(t,34201)).then(e=>({default:e.NightSkyWidget})),labels:{en:"Night Sky",pt:"C\xe9u Noturno"},descriptions:{en:"Constellation map for tonight",pt:"Mapa de constela\xe7\xf5es para esta noite"},icon:"✦",accentColor:"#6aa8d8",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:240,suite:"vida",defaultOnDashboard:!1,sources:[]}},34836(e,a,t){t.d(a,{A:()=>o});let o={id:"onthisday",load:()=>t.e("3921").then(t.bind(t,29752)).then(e=>({default:e.OnThisDayWidget})),labels:{en:"On This Day",pt:"Neste Dia"},descriptions:{en:"Historical events that happened today",pt:"Eventos hist\xf3ricos que aconteceram hoje"},icon:"\uD83D\uDCC5",accentColor:"#d29922",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"wikipedia-onthisday",kind:"cache-key",labelKey:"sources.wikipedia"}]}},23971(e,a,t){t.d(a,{A:()=>o});let o={id:"pet",load:()=>t.e("333").then(t.bind(t,28044)).then(e=>({default:e.PetWidget})),labels:{en:"Digital Pet",pt:"Animal Virtual"},descriptions:{en:"Your virtual cat companion",pt:"O teu gatinho virtual"},icon:"\uD83D\uDC31",accentColor:"#e8a0b0",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:220,suite:"vida",defaultOnDashboard:!1,sources:[{id:"pet-state",kind:"local",cacheKey:"pet-state",labelKey:"sources.petState"}],persistedKeys:["pet-state"]}},59798(e,a,t){t.d(a,{QuickLinksWidget:()=>y});var o=t(65723),i=t(37991),n=t(36859),r=t.n(n),s=t(72799),l=t(89874),d=t(28395),c=t(28170),p=t(98975),m=t(9900);let g=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,u=r().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
  gap: 8px;
  flex: 1;
  align-content: start;
  animation: ${g} 0.25s ease both;
`,h=r().button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 4px;
  background: ${({accentColor:e})=>`${e}08`};
  border: 1px solid ${({accentColor:e})=>`${e}20`};
  border-radius: ${l.w4.borderRadius.md};
  cursor: pointer;
  transition: background ${l.w4.transitions.base}, border-color ${l.w4.transitions.base}, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    background: ${({accentColor:e})=>`${e}18`};
    border-color: ${({accentColor:e})=>`${e}40`};
    transform: scale(1.05);
  }
  &:active { transform: scale(0.95); }
`,f=r().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({tint:e})=>e};
`,b=r().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamily};
  color: ${l.w4.colors.mainText};
  font-weight: 500;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,x=r().div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 13px;
  font-family: ${l.w4.typography.fontFamilyMono};
  color: ${l.w4.colors.mainTextMuted};
  opacity: 0.5;
  text-align: center;
  line-height: 1.5;
`;function y({locale:e,pinnedAppIds:a=[],recentAppIds:t=[],apps:n=[],appMeta:r={},onSelectApp:s}){let g=(0,i.useMemo)(()=>(0,c.Nx)("pt"===e?"pt":"en",p.A),[e]),w=[...new Set([...a,...t])].slice(0,8).flatMap(e=>n.filter(a=>a.id===e));return(0,o.jsx)(d.rl,{title:g("quicklinks.title"),accentColor:m.A.accentColor,children:0===w.length?(0,o.jsx)(x,{children:g("quicklinks.empty")}):(0,o.jsx)(u,{children:w.map(e=>{let a=r[e.id],t=a?.label??e.label;return(0,o.jsxs)(h,{accentColor:a?.color??l.w4.colors.accent,onClick:()=>s?.(e),title:t,children:[(0,o.jsx)(f,{tint:a?.color??l.w4.colors.accent,children:a?.icon&&(0,o.jsx)(d.In,{name:a.icon,size:20,"aria-hidden":"true"})}),(0,o.jsx)(b,{children:t})]},e.id)})})})}},9900(e,a,t){t.d(a,{A:()=>o});let o={id:"quicklinks",load:()=>Promise.resolve().then(t.bind(t,59798)).then(e=>({default:e.QuickLinksWidget})),labels:{en:"Quick Links",pt:"Atalhos"},descriptions:{en:"Pin your favourite apps for quick access",pt:"Fixa as tuas apps favoritas para acesso r\xe1pido"},icon:"⚡",accentColor:"#3fb950",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:160,suite:"tools",defaultOnDashboard:!0,sources:[]}},11042(e,a,t){t.d(a,{A:()=>o});let o={id:"quotes",load:()=>t.e("9129").then(t.bind(t,37872)).then(e=>({default:e.QuotesWidget})),labels:{en:"Daily Quote",pt:"Cita\xe7\xe3o do Dia"},descriptions:{en:"An inspiring quote to start your day",pt:"Uma cita\xe7\xe3o inspiradora para come\xe7ar o dia"},icon:"\uD83D\uDCAC",accentColor:"#a371f7",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:160,suite:"vida",defaultOnDashboard:!1,sources:[]}},76461(e,a,t){t.d(a,{A:()=>o});let o={id:"reading",load:()=>t.e("4061").then(t.bind(t,9372)).then(e=>({default:e.ReadingWidget})),labels:{en:"Reading",pt:"Leitura"},descriptions:{en:"Track your current book, reading pace, and yearly goal",pt:"Acompanha o livro atual, o teu ritmo de leitura e a meta anual"},icon:"\uD83D\uDCD6",accentColor:"#a371f7",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:280,suite:"vida",defaultOnDashboard:!1,sources:[{id:"reading-state",kind:"local",cacheKey:"reading:state",labelKey:"sources.readingState"},{id:"open-library",kind:"dal-client",labelKey:"sources.openLibrary"}],persistedKeys:["reading:state"]}},25471(e,a,t){t.d(a,{A:()=>i});var o=t(83090);let i={id:"seismic",load:()=>t.e("5773").then(t.bind(t,38108)).then(e=>({default:e.SeismicWidget})),labels:{en:"PT Seismic",pt:"Sismicidade PT"},descriptions:{en:"Recent seismic activity in Portugal",pt:"Atividade s\xedsmica recente em Portugal"},icon:"\uD83C\uDF0B",accentColor:"#f97316",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"ipma",kind:"dal-client",cacheKey:"seismic-pt",labelKey:"sources.ipma",notifiable:!0},{id:"usgs",kind:"dal-client",cacheKey:"seismic-world",labelKey:"sources.usgs",notifiable:!0}],notifications:[(0,o.B)({id:"seismic-pt",category:"seismic.pt",labelKey:"notifications.source.seismicPt",badgeColor:"#f97316",cacheKey:"seismic-pt",parse:function(e){if(!Array.isArray(e))return[];let a=[];return e.forEach((e,t)=>{let o=Date.parse(e.time);if(Number.isNaN(o))return;let i=e.local||e.obsRegion||"?";a.push({id:`pt-${o}-${t}`,ts:o,title:`M ${e.mag.toFixed(1)} — ${i}`})}),a}}),(0,o.B)({id:"seismic-world",category:"seismic.world",labelKey:"notifications.source.seismicWorld",badgeColor:"#ea580c",cacheKey:"seismic-world",parse:function(e){return e?.features?e.features.map(e=>({id:e.id,ts:e.properties.time,title:`M ${e.properties.mag.toFixed(1)} — ${e.properties.place}`,link:e.properties.url})):[]}})],persistedKeys:["widget-cache:seismic-pt","widget-cache:seismic-world"]}},82537(e,a,t){t.d(a,{A:()=>o});let o={id:"streak",load:()=>t.e("1727").then(t.bind(t,59602)).then(e=>({default:e.StreakWidget})),labels:{en:"Daily Streak",pt:"S\xe9rie Di\xe1ria"},descriptions:{en:"Your habit streak and daily progress",pt:"A tua s\xe9rie de h\xe1bitos e progresso di\xe1rio"},icon:"\uD83D\uDD25",accentColor:"#fb923c",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:160,suite:"vida",defaultOnDashboard:!0,sources:[{id:"daily-progress",kind:"bll-hook",cacheKey:"daily:progress",labelKey:"sources.dailyProgress",notifiable:!0}],persistedKeys:["daily:progress"]}},55417(e,a,t){t.d(a,{A:()=>i});var o=t(1310);let i={id:"techscope",load:()=>t.e("7923").then(t.bind(t,4942)).then(e=>({default:e.TechScopeLiveWidget})),labels:{en:"TechScope Live",pt:"TechScope Ao Vivo"},descriptions:{en:"Trending GitHub repos and Hacker News stories",pt:"Reposit\xf3rios GitHub e hist\xf3rias do Hacker News em alta"},icon:"⚡",accentColor:"#a371f7",defaultSize:"lg",defaultCols:2,maxCols:2,minHeight:240,suite:"learn",defaultOnDashboard:!0,sources:[{id:"github-trending",kind:"cache-key",cacheKey:"techscope-gh",labelKey:"sources.github",notifiable:!0},{id:"hn-algolia",kind:"cache-key",cacheKey:"techscope-hn",labelKey:"sources.hackerNews",notifiable:!0}],notifications:[{id:"github-trending",category:"github.trending",labelKey:"notifications.source.githubTrending",producer:{id:"github-trending",category:"github.trending",async poll(){let e=await (0,o.fetchTrendingRepos)({days:7,perPage:5});if(!e?.items)return[];let a=[];for(let t of e.items){let e=t.created_at?Date.parse(t.created_at):NaN;if(!Number.isFinite(e))continue;let o=t.stargazers_count,i=t.language?` \xb7 ${t.language}`:"";a.push({id:`gh-trending:${t.id}`,category:"github.trending",ts:e,title:`${t.full_name} — ${o.toLocaleString()}★${i}`,link:t.html_url,meta:{stars:o,language:t.language,description:t.description}})}return a}},start(){},stop(){}},{id:"devto-weekly",category:"devto.weekly",labelKey:"notifications.source.devto",producer:{id:"devto-weekly",category:"devto.weekly",async poll(){let e=await (0,o.fetchDevToArticles)({top:7,perPage:5});if(!e)return[];let a=[];for(let t of e){let e=Date.parse(t.published_at);if(!Number.isFinite(e))continue;let o=t.public_reactions_count??0,i=t.user?.name||t.user?.username,n=i?` — ${i}`:"";a.push({id:`devto:${t.id}`,category:"devto.weekly",ts:e,title:`${t.title}${n}`,link:t.url,meta:{reactions:o,comments:t.comments_count??0,readingTime:t.reading_time_minutes??null,tags:t.tag_list??[]}})}return a}},start(){},stop(){}}],persistedKeys:["widget-cache:techscope-gh","widget-cache:techscope-hn"]}},98975(e,a,t){t.d(a,{A:()=>o});let o={"sources.openMeteo":{en:"Open-Meteo (weather)",pt:"Open-Meteo (meteorologia)"},"sources.ipma":{en:"IPMA (Portugal seismic)",pt:"IPMA (sismicidade PT)"},"sources.usgs":{en:"USGS (world seismic)",pt:"USGS (sismicidade mundial)"},"sources.rtp":{en:"RTP Not\xedcias (RSS)",pt:"RTP Not\xedcias (RSS)"},"sources.cnn":{en:"CNN International (RSS)",pt:"CNN Internacional (RSS)"},"sources.coinGecko":{en:"CoinGecko (crypto prices)",pt:"CoinGecko (pre\xe7os cripto)"},"sources.finnhub":{en:"Finnhub (stock quotes)",pt:"Finnhub (cota\xe7\xf5es de a\xe7\xf5es)"},"sources.hackerNews":{en:"Hacker News",pt:"Hacker News"},"sources.wikipedia":{en:"Wikipedia (pageviews)",pt:"Wikip\xe9dia (visualiza\xe7\xf5es)"},"sources.googleTrends":{en:"Google Trends (RSS)",pt:"Google Trends (RSS)"},"sources.tmdb":{en:"TMDB (trending movies)",pt:"TMDB (filmes em alta)"},"sources.github":{en:"GitHub (trending repos)",pt:"GitHub (reposit\xf3rios em alta)"},"sources.sunriseSunset":{en:"Sunrise-Sunset API",pt:"API nascer/p\xf4r-do-sol"},"sources.issPass":{en:"ISS pass predictions",pt:"Previs\xf5es de passagem ISS"},"sources.dailyProgress":{en:"Daily Manager progress",pt:"Progresso do Gestor Di\xe1rio"},"sources.agendaEvents":{en:"Agenda (your events)",pt:"Agenda (os teus eventos)"},"sources.musicTracks":{en:"Music (saved tracks)",pt:"M\xfasica (m\xfasicas guardadas)"},"sources.readingState":{en:"Reading tracker",pt:"Registo de leitura"},"sources.openLibrary":{en:"Open Library (book covers)",pt:"Open Library (capas de livros)"},"sources.petState":{en:"Digital pet state",pt:"Estado do animal virtual"},"sources.askDocs":{en:"Ask session history",pt:"Hist\xf3rico de conversas Ask"},"sources.dalTelemetry":{en:"DAL request telemetry",pt:"Telemetria de pedidos DAL"},"widget.error.label":{en:"◎ Offline",pt:"◎ Offline"},"widget.error.body":{en:"Can't reach the source. Retrying soon.",pt:"Sem liga\xe7\xe3o \xe0 fonte. A tentar de novo."},"widget.loading":{en:"Loading…",pt:"A carregar…"},"widgets.dashboard":{en:"Dashboard",pt:"Painel"},"widgets.addWidget":{en:"Add widget",pt:"Adicionar widget"},"widgets.moveLeft":{en:"Move left",pt:"Mover para a esquerda"},"widgets.moveRight":{en:"Move right",pt:"Mover para a direita"},"widgets.remove":{en:"Remove",pt:"Remover"},"widgets.unpin":{en:"Unpin",pt:"Desafixar"},"widgets.open":{en:"Open",pt:"Abrir"},"widgets.emptyDashboard":{en:"Your dashboard is empty. Add some widgets!",pt:"O teu dashboard est\xe1 vazio. Adiciona widgets!"},"widgets.empty.title":{en:"Compose your dashboard.",pt:"Comp\xf5e o teu painel."},"widgets.empty.body":{en:"Pick the widgets that matter to you — news, weather, your streak, AI sessions. You can reorder and customize later.",pt:"Escolhe os widgets que te importam — not\xedcias, clima, a tua sequ\xeancia, conversas de IA. Podes reordenar e personalizar depois."},"widgets.empty.cta":{en:"Add your first widget",pt:"Adicionar o primeiro widget"},"widgets.picker.title":{en:"Add a widget.",pt:"Adicionar widget."},"widgets.picker.eyebrow":{en:"◇ Picker",pt:"◇ Cat\xe1logo"},"widgets.picker.subtitle":{en:"Pick from your widget catalog. Live data, glanceable.",pt:"Escolhe do cat\xe1logo de widgets. Dados ao vivo, num relance."},"widgets.picker.searchPlaceholder":{en:"Search widgets — e.g. weather, news, clock…",pt:"Procurar widgets — ex: meteorologia, not\xedcias, rel\xf3gio…"},"widgets.picker.empty":{en:"No widgets match. Try another keyword.",pt:"Nenhum widget corresponde. Tenta outra palavra."},"widgets.picker.close":{en:"Close",pt:"Fechar"},"widgets.picker.added":{en:"Added",pt:"Adicionado"},"widgets.picker.suite.all":{en:"All",pt:"Todos"},"widgets.picker.suite.tools":{en:"Tools",pt:"Ferramentas"},"dailyFeed.title":{en:"Daily feed",pt:"Feed di\xe1rio"},"dailyFeed.sub.tech":{en:"Tech \xb7 trending",pt:"Tech \xb7 em alta"},"dailyFeed.sub.movie":{en:"Trending this week",pt:"Em alta esta semana"},"dailyFeed.sub.history":{en:"On this day",pt:"Neste dia"},"dailyFeed.sub.news.pt":{en:"News \xb7 RTP",pt:"Not\xedcias \xb7 RTP"},"dailyFeed.sub.news.en":{en:"News \xb7 CNN",pt:"Not\xedcias \xb7 CNN"},"dailyFeed.sub.school":{en:"Learn today",pt:"Aprender hoje"},"dailyFeed.sub.game":{en:"Game of the day",pt:"Jogo do dia"},"dailyFeed.school.math":{en:"Try a quick math puzzle",pt:"Experimenta um desafio de matem\xe1tica"},"dailyFeed.school.story":{en:"Read a Portuguese story",pt:"L\xea uma hist\xf3ria em portugu\xeas"},"dailyFeed.school.science":{en:"Learn a science fact",pt:"Aprende um facto de ci\xeancia"},"dailyFeed.school.reading":{en:"Practice reading aloud",pt:"Pratica leitura em voz alta"},"dailyFeed.school.word":{en:"Explore a word quiz",pt:"Explora um quiz de palavras"},"dailyFeed.game.memory":{en:"Memory Game",pt:"Jogo da Mem\xf3ria"},"dailyFeed.game.spotit":{en:"Spot the Pair",pt:"Encontra o Par!"},"dailyFeed.game.tictactoe":{en:"Tic Tac Toe",pt:"Jogo do Galo"},"dailyFeed.game.soundhunter":{en:"Sound Hunter",pt:"Ca\xe7ador de Sons"},"dailyFeed.game.familyquiz":{en:"Family Quiz",pt:"Quiz da Fam\xedlia"},"dailyFeed.game.adventure":{en:"Text Adventure",pt:"Aventura de Texto"},"dailyFeed.game.stop":{en:"Stop!",pt:"Stop!"},"seismic.title.pt":{en:"PT Seismic",pt:"Sismicidade PT"},"seismic.title.world":{en:"World Seismic",pt:"Sismicidade Mundo"},"seismic.empty":{en:"No recent seismic activity",pt:"Sem atividade sismica recente"},"seismic.openInEarth":{en:"Open in Earth",pt:"Abrir no Earth"},"weather.city.lisbon":{en:"Lisbon",pt:"Lisboa"},"weather.openInEarth":{en:"→ Open in Earth",pt:"→ Abrir no Earth"},"weather.humidity":{en:"Humidity",pt:"Humidade"},"weather.wind":{en:"Wind",pt:"Vento"},"weather.feelsLike":{en:"Feels like {t}\xb0",pt:"Sensa\xe7\xe3o de {t}\xb0"},"weather.uv":{en:"UV",pt:"UV"},"weather.sunrise":{en:"Sunrise",pt:"Nascer"},"weather.sunset":{en:"Sunset",pt:"P\xf4r-do-sol"},"weather.hourly":{en:"Next hours",pt:"Pr\xf3ximas horas"},"weather.forecast":{en:"3-day forecast",pt:"Previs\xe3o 3 dias"},"weather.now":{en:"Now",pt:"Agora"},"weather.day.mon":{en:"Mon",pt:"Seg"},"weather.day.tue":{en:"Tue",pt:"Ter"},"weather.day.wed":{en:"Wed",pt:"Qua"},"weather.day.thu":{en:"Thu",pt:"Qui"},"weather.day.fri":{en:"Fri",pt:"Sex"},"weather.day.sat":{en:"Sat",pt:"S\xe1b"},"weather.day.sun":{en:"Sun",pt:"Dom"},"clock.title":{en:"World clock",pt:"Rel\xf3gio mundial"},"analogClock.title":{en:"Clock",pt:"Rel\xf3gio"},"quotes.title":{en:"Daily quote",pt:"Cita\xe7\xe3o do dia"},"trendingSearches.title":{en:"Trending Searches",pt:"Pesquisas em Alta"},"wikiMostRead.title":{en:"Most Read — Wikipedia",pt:"Mais Lido na Wikip\xe9dia"},"onThisDay.title":{en:"\uD83D\uDCC5 On This Day",pt:"\uD83D\uDCC5 Neste Dia"},"onthisday.empty":{en:"No events found for today.",pt:"Sem eventos para hoje."},"movies.trending.title":{en:"Trending this week",pt:"Em alta esta semana"},"movies.apiKeyMissing":{en:"API key missing",pt:"Chave de API em falta"},"techscopeLive.title":{en:"Live feeds",pt:"Feeds ao vivo"},"ask.widget.title":{en:"Ask sessions",pt:"Conversas com o Atlantis"},"ask.widget.description":{en:"Your recent Ask conversations",pt:"As tuas conversas recentes"},"ask.widget.untitled":{en:"Untitled",pt:"Sem t\xedtulo"},"ask.widget.empty":{en:"No conversations yet. Start one from the command palette or the Ask app.",pt:"Ainda n\xe3o tens conversas. Come\xe7a uma na paleta de comandos ou na app Ask."},"ask.widget.emptyCta":{en:"Ask something",pt:"Fazer uma pergunta"},"streak.title":{en:"Daily Streak",pt:"S\xe9rie Di\xe1ria"},"streak.dayStreak":{en:"day streak",pt:"dias seguidos"},"streak.noStreak":{en:"Start your streak today",pt:"Come\xe7a a tua s\xe9rie hoje"},"streak.todayDone":{en:"{n} / {total} today",pt:"{n} / {total} hoje"},"streak.points":{en:"{n} pts",pt:"{n} pts"},"streak.open":{en:"Open Daily Manager",pt:"Abrir Gestor Di\xe1rio"},"habits.title":{en:"Habits",pt:"H\xe1bitos"},"habits.last7":{en:"Last 7 days",pt:"\xdaltimos 7 dias"},"habits.empty":{en:"Add missions in the Daily Manager to track them here.",pt:"Adiciona miss\xf5es no Gestor Di\xe1rio para as veres aqui."},"habits.weekDone":{en:"{n} done this week",pt:"{n} feitas esta semana"},"habits.open":{en:"Open Daily Manager",pt:"Abrir Gestor Di\xe1rio"},"habits.openShort":{en:"OPEN",pt:"ABRIR"},"agenda.title":{en:"Agenda Today",pt:"Agenda Hoje"},"agenda.count":{en:"{n} events",pt:"{n} eventos"},"agenda.countOne":{en:"1 event",pt:"1 evento"},"agenda.empty":{en:"Nothing scheduled today",pt:"Nada agendado hoje"},"agenda.emptyCta":{en:"Add your first event",pt:"Adiciona o primeiro evento"},"agenda.addEvent":{en:"Add event",pt:"Adicionar evento"},"agenda.titlePlaceholder":{en:"What’s on?",pt:"O que tens?"},"agenda.timeStart":{en:"Start",pt:"In\xedcio"},"agenda.timeEnd":{en:"End",pt:"Fim"},"agenda.tag.personal":{en:"personal",pt:"pessoal"},"agenda.tag.team":{en:"team",pt:"equipa"},"agenda.tag.work":{en:"work",pt:"trabalho"},"agenda.save":{en:"Save",pt:"Guardar"},"agenda.cancel":{en:"Cancel",pt:"Cancelar"},"agenda.delete":{en:"Delete event",pt:"Apagar evento"},"agenda.toggleDone":{en:"Toggle done",pt:"Alternar conclu\xeddo"},"agenda.now":{en:"now",pt:"agora"},"reading.title":{en:"❂ Reading",pt:"❂ Leitura"},"reading.yearProgress":{en:"{read}/{goal} this year",pt:"{read}/{goal} este ano"},"reading.yearGoal":{en:"Year goal",pt:"Meta anual"},"reading.books":{en:"books",pt:"livros"},"reading.goal":{en:"Annual goal",pt:"Meta anual"},"reading.page":{en:"p.",pt:"p."},"reading.empty":{en:"What are you reading right now?",pt:"O que est\xe1s a ler agora?"},"reading.addBook":{en:"Start a book",pt:"Come\xe7ar um livro"},"reading.updateBook":{en:"Update reading",pt:"Atualizar leitura"},"reading.finish":{en:"Mark as finished",pt:"Marcar como lido"},"reading.save":{en:"Save",pt:"Guardar"},"reading.cancel":{en:"Cancel",pt:"Cancelar"},"reading.placeholder.title":{en:"Title",pt:"T\xedtulo"},"reading.placeholder.author":{en:"Author",pt:"Autor"},"reading.placeholder.page":{en:"Page",pt:"P\xe1gina"},"reading.placeholder.pages":{en:"Total",pt:"Total"},"reading.placeholder.goal":{en:"Goal",pt:"Meta"},"reading.placeholder.cover":{en:"COVER",pt:"CAPA"},"reading.stat.week":{en:"Week",pt:"Semana"},"reading.stat.pace":{en:"Pace",pt:"Ritmo"},"reading.stat.finished":{en:"Finished",pt:"Terminados"},"reading.unit.pages":{en:"pages",pt:"p\xe1ginas"},"reading.unit.perDay":{en:"pg/day",pt:"p\xe1g/dia"},"reading.unit.total":{en:"total",pt:"total"},"bolsa.title":{en:"▲ Markets",pt:"▲ Bolsa"},"bolsa.updated":{en:"updated {age}",pt:"atualizado {age}"},"bolsa.empty":{en:"Loading tickers…",pt:"A carregar cota\xe7\xf5es…"},"bolsa.error":{en:"Could not load markets.",pt:"N\xe3o foi poss\xedvel carregar cota\xe7\xf5es."},"bolsa.errorLabel":{en:"OFFLINE",pt:"OFFLINE"},"bolsa.stocks.title":{en:"STOCKS",pt:"A\xc7\xd5ES"},"bolsa.stocks.noKey":{en:"Add your Finnhub key in Settings to see stock quotes.",pt:"Adiciona a tua chave Finnhub nas Defini\xe7\xf5es para ver cota\xe7\xf5es de a\xe7\xf5es."},"bolsa.stocks.settingsLink":{en:"Go to Settings",pt:"Ir para Defini\xe7\xf5es"},"bolsa.crypto.title":{en:"CRYPTO",pt:"CRYPTO"},"astro.title":{en:"☽ Astronomy",pt:"☽ Astronomia"},"astro.location":{en:"Lisbon",pt:"Lisboa"},"astro.illuminated":{en:"{pct}% illuminated",pt:"{pct}% iluminada"},"astro.dayLength":{en:"{h}h {m}m",pt:"{h}h {m}m"},"astro.phase.new":{en:"New Moon",pt:"Lua Nova"},"astro.phase.waxingCrescent":{en:"Waxing Crescent",pt:"Crescente"},"astro.phase.firstQuarter":{en:"First Quarter",pt:"Quarto Crescente"},"astro.phase.waxingGibbous":{en:"Waxing Gibbous",pt:"Gibosa Crescente"},"astro.phase.full":{en:"Full Moon",pt:"Lua Cheia"},"astro.phase.waningGibbous":{en:"Waning Gibbous",pt:"Gibosa Minguante"},"astro.phase.lastQuarter":{en:"Last Quarter",pt:"Quarto Minguante"},"astro.phase.waningCrescent":{en:"Waning Crescent",pt:"Minguante"},"astro.iss.title":{en:"Next ISS passes",pt:"Pr\xf3ximas passagens — ISS"},"astro.iss.loading":{en:"Loading passes…",pt:"A carregar passagens…"},"astro.iss.empty":{en:"No upcoming visible passes.",pt:"Sem passagens vis\xedveis \xe0 vista."},"labLauncher.title":{en:"✦ AI Lab",pt:"✦ Lab de IA"},"labLauncher.subtitle":{en:"Your AI suite",pt:"A tua su\xedte de IA"},"labLauncher.count":{en:"tools",pt:"ferramentas"},"labLauncher.open":{en:"// OPEN →",pt:"// ABRIR →"},"learnLauncher.title":{en:"◎ Learning",pt:"◎ Aprendizagem"},"learnLauncher.subtitle":{en:"School & games",pt:"Escola & jogos"},"learnLauncher.count":{en:"apps",pt:"apps"},"learnLauncher.open":{en:"// EXPLORE →",pt:"// EXPLORAR →"},"music.title":{en:"♪ Music",pt:"♪ M\xfasica"},"music.subtitle":{en:"Recently played",pt:"Ouvido recentemente"},"music.empty":{en:"Paste a song to save.",pt:"Adiciona uma m\xfasica."},"music.placeholder":{en:"Song — Artist",pt:"M\xfasica — Artista"},"music.add":{en:"Add",pt:"Adicionar"},"music.remove":{en:"Remove",pt:"Remover"},"music.search.label":{en:"Search Apple Music",pt:"Pesquisar no Apple Music"},"nightSky.title":{en:"✦ Night Sky",pt:"✦ C\xe9u Noturno"},"nightSky.iss":{en:"ISS visible",pt:"ISS vis\xedvel"},"nightSky.dayTitle":{en:"Waiting for dusk",pt:"\xc0 espera do anoitecer"},"nightSky.nightLegend":{en:"Zenith view \xb7 {count} constellations",pt:"Vista do z\xe9nite \xb7 {count} constela\xe7\xf5es"},"health.title":{en:"Dashboard Health",pt:"Sa\xfade do Painel"},"health.measuring":{en:"Measuring…",pt:"A medir…"},"health.offline":{en:"offline",pt:"offline"},"health.ch.crypto":{en:"CoinGecko",pt:"CoinGecko"},"health.ch.weather":{en:"Open-Meteo",pt:"Open-Meteo"},"health.ch.wiki":{en:"Wikipedia",pt:"Wikip\xe9dia"},"health.ch.hn":{en:"HN Algolia",pt:"HN Algolia"},"health.ch.dom":{en:"DOM Nodes",pt:"N\xf3s DOM"},"health.ch.fps":{en:"Frame Rate",pt:"Frame Rate"},"health.consumers":{en:"used by {list}",pt:"usado por {list}"},"health.status.ok":{en:"All healthy",pt:"Tudo bem"},"health.status.slow":{en:"{n} slow",pt:"{n} lento"},"health.status.offline":{en:"{n} offline",pt:"{n} offline"},"quicklinks.title":{en:"Quick links",pt:"Atalhos"},"quicklinks.empty":{en:"Pin apps for quick access",pt:"Fixa apps para acesso r\xe1pido"},"pinnedCard.recent.label":{en:"Last opened",pt:"Aberto recentemente"},"financeWidget.empty":{en:"No finance data yet.",pt:"Sem dados financeiros ainda."},"financeWidget.weekly":{en:"This week",pt:"Esta semana"},"financeWidget.spent":{en:"Spent",pt:"Gasto"},"financeWidget.month":{en:"This month",pt:"Este m\xeas"},"financeWidget.open":{en:"Open Finance",pt:"Abrir Finan\xe7as"},"financeWidget.openApp":{en:"Open Finance app",pt:"Abrir app Finan\xe7as"},"financeWidget.source.data":{en:"Finance data",pt:"Dados financeiros"}}},54200(e,a,t){t.d(a,{A:()=>o});let o={id:"trending-searches",load:()=>t.e("346").then(t.bind(t,32065)).then(e=>({default:e.TrendingSearchesWidget})),labels:{en:"Trending Searches",pt:"Pesquisas em Alta"},descriptions:{en:"Top Google trending searches right now",pt:"As pesquisas mais populares no Google agora"},icon:"\uD83D\uDD0D",accentColor:"#e233ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"google-trends-rss",kind:"cache-key",cacheKey:"internet-trends",labelKey:"sources.googleTrends",notifiable:!0}],notifications:[(0,t(83090).B)({id:"trending-daily",category:"trending.daily",labelKey:"notifications.source.trending",badgeColor:"#e233ff",cacheKey:"internet-trends",parse:function(e){let a=e?.items?.[0];return a?[{id:new Date().toISOString().slice(0,10),ts:Date.now(),title:a.title,link:a.link}]:[]}})],persistedKeys:["widget-cache:internet-trends"]}},52306(e,a,t){t.d(a,{A:()=>r});var o=t(83090);let i={yellow:"\uD83D\uDFE1",orange:"\uD83D\uDFE0",red:"\uD83D\uDD34"},n={yellow:"Yellow",orange:"Orange",red:"Red"},r={id:"weather",load:()=>t.e("6693").then(t.bind(t,15940)).then(e=>({default:e.WeatherWidget})),labels:{en:"Weather",pt:"Meteorologia"},descriptions:{en:"Current weather for Lisbon",pt:"Meteorologia atual em Lisboa"},icon:"\uD83C\uDF24️",accentColor:"#58a6ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:280,suite:"vida",defaultOnDashboard:!0,sources:[{id:"openMeteo",kind:"cache-key",cacheKey:"weather-lisbon",labelKey:"sources.openMeteo",notifiable:!0}],notifications:[(0,o.B)({id:"ipma-warnings",category:"weather.pt.warnings",labelKey:"notifications.source.weatherPt",badgeColor:"#facc15",cacheKey:"ipma-warnings",parse:function(e){if(!Array.isArray(e))return[];let a=Date.now(),t=[];return e.forEach((e,o)=>{if("green"===e.awarenessLevelID||"yellow"===e.awarenessLevelID)return;let r=Date.parse(e.endTime);if(Number.isNaN(r)||r<a)return;let s=Date.parse(e.startTime);if(Number.isNaN(s))return;let l=e.awarenessLevelID,d=i[l]??"⚠",c=n[l]??e.awarenessLevelID.toUpperCase(),p=e.idAreaAviso||"Portugal",m=e.awarenessTypeName?e.awarenessTypeName.toLowerCase():"weather";t.push({id:`ipma-warn:${p}-${s}-${o}`,ts:s,title:`${d} ${c} ${m} warning — ${p}`,link:"https://www.ipma.pt/en/otempo/prev-sam/"})}),t}})]}},89780(e,a,t){t.d(a,{A:()=>r});var o=t(83090);let i=new Set(["Main_Page","Special:Search","Wikipedia:Featured_pictures","-","Special:Watchlist","Portal:Current_events"]);function n(){return new Date(Date.now()-864e5).toISOString().slice(0,10)}let r={id:"wiki-most-read",load:()=>t.e("545").then(t.bind(t,45464)).then(e=>({default:e.WikiMostReadWidget})),labels:{en:"Wikipedia Top",pt:"Mais Lido na Wikip\xe9dia"},descriptions:{en:"Most read articles on Wikipedia today",pt:"Artigos mais lidos na Wikip\xe9dia hoje"},icon:"\uD83D\uDCD6",accentColor:"#58a6ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"wikipedia-pageviews",kind:"cache-key",labelKey:"sources.wikipedia",notifiable:!0}],notifications:[(0,o.B)({id:"wiki-top-read",category:"wiki.topRead",labelKey:"notifications.source.wikiTopRead",badgeColor:"#58a6ff",cacheKey:()=>`internet-wiki-${n()}`,parse:function(e){let a=(e?.items?.[0]?.articles??[]).find(e=>!i.has(e.article));if(!a)return[];let t=n(),o=a.article.replace(/_/g," ");return[{id:t,ts:Date.now(),title:o,link:`https://en.wikipedia.org/wiki/${encodeURIComponent(a.article)}`}]}})]}}}]);