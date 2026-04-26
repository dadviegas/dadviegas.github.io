"use strict";(self.webpackChunk_atlantis_shell=self.webpackChunk_atlantis_shell||[]).push([["9163"],{10326(e,t,a){var i=a(65723),o=a(37991),r=a.n(o),n=a(58997),s=a(36859),l=a.n(s),d=a(72799),c=a(94764),p=a(45030),u=a(28113),m=a(28170),g=a(30522);let h={markdown:()=>a.e("4873").then(a.t.bind(a,27280,23)),earth:()=>a.e("3678").then(a.t.bind(a,67997,23)),techscope:()=>a.e("6514").then(a.t.bind(a,93305,23)),citypulse:()=>a.e("9462").then(a.t.bind(a,29829,23)),cosmos:()=>a.e("5616").then(a.t.bind(a,47699,23)),stockpulse:()=>a.e("1395").then(a.t.bind(a,49614,23)),pad:()=>a.e("9103").then(a.t.bind(a,3250,23)),regexlab:()=>a.e("4898").then(a.t.bind(a,22745,23)),jsonexplorer:()=>a.e("8065").then(a.t.bind(a,56776,23)),codediff:()=>a.e("4026").then(a.t.bind(a,21937,23)),playground:()=>a.e("3141").then(a.t.bind(a,41780,23)),jwtinspector:()=>a.e("5394").then(a.t.bind(a,58633,23)),colorlab:()=>a.e("4274").then(a.t.bind(a,28105,23)),cronbuilder:()=>a.e("6001").then(a.t.bind(a,97672,23)),csvexplorer:()=>a.e("9773").then(a.t.bind(a,95836,23)),chartbuilder:()=>a.e("2467").then(a.t.bind(a,83902,23)),school:()=>a.e("4848").then(a.t.bind(a,355,23)),weather:()=>a.e("446").then(a.t.bind(a,73437,23)),apiexplorer:()=>a.e("5153").then(a.t.bind(a,86488,23)),movies:async()=>{let e=await a.e("649").then(a.t.bind(a,22304,23)),t=e.default;return{default:("object"==typeof t&&t&&"default"in t?t.default:t)??e.default}},promptlab:()=>a.e("747").then(a.t.bind(a,15014,23)),imagegen:()=>a.e("3213").then(a.t.bind(a,67820,23)),games:()=>a.e("3009").then(a.t.bind(a,96840,23)),daily:()=>a.e("3531").then(a.t.bind(a,64438,23)),ask:()=>a.e("7335").then(a.t.bind(a,68170,23)),finance:()=>a.e("6248").then(a.t.bind(a,73851,23)),youtube:()=>a.e("2379").then(a.t.bind(a,98230,23)),music:()=>a.e("5785").then(a.t.bind(a,36192,23))},f=Object.fromEntries(Object.entries(h).map(([e,t])=>[e,r().lazy(t)])),b=new Set;function x(e){if(b.has(e))return;let t=h[e];if(!t)return;let a=navigator.connection;a?.saveData||(b.add(e),t().catch(()=>{b.delete(e)}))}let y={All:{en:"All",pt:"Todas"},Live:{en:"Live",pt:"Ao Vivo"},School:{en:"School",pt:"Escola"},Explore:{en:"Explore",pt:"Explorar"},Create:{en:"Create",pt:"Criar"},Inspect:{en:"Inspect",pt:"Analisar"},Connect:{en:"Connect",pt:"Conectar"},Content:{en:"Content",pt:"Conte\xfado"},Fun:{en:"Fun",pt:"Divers\xe3o"},Lab:{en:"Lab",pt:"Lab"},Tools:{en:"Tools",pt:"Ferramentas"}},w={"AI Lab":{en:"AI Lab",pt:"Lab de IA"},"Developer Toolkit":{en:"Developer Toolkit",pt:"Ferramentas Dev"},"Data Studio":{en:"Data Studio",pt:"Est\xfadio de Dados"},"Life Dashboard":{en:"Life Dashboard",pt:"Painel de Vida"},"Learning Hub":{en:"Learning Hub",pt:"Aprendizagem"},"Game Room":{en:"Game Room",pt:"Sala de Jogos"},Entertainment:{en:"Entertainment",pt:"Entretenimento"},Other:{en:"Other",pt:"Outros"}},v={categories:{en:"Categories",pt:"Categorias"},tagline:{en:"Everything happening on the internet. In one place.",pt:"Tudo o que acontece na internet. Num s\xf3 lugar."},searchApps:{en:"Search apps, widgets, places…",pt:"Pesquisar apps, widgets, lugares…"},openLauncher:{en:"to open launcher",pt:"para abrir launcher"},pinned:{en:"Pinned",pt:"Fixos"},recentlyUsed:{en:"Recently used",pt:"Usados recentemente"},noMatch:{en:"No apps match",pt:"Nenhuma app corresponde a"},open:{en:"Open",pt:"Abrir"},suites:{en:"Suites",pt:"Suites"},"greeting.morning":{en:"Good morning",pt:"Bom dia"},"greeting.afternoon":{en:"Good afternoon",pt:"Boa tarde"},"greeting.evening":{en:"Good evening",pt:"Boa noite"},dashboard:{en:"Dashboard",pt:"Painel"},addWidget:{en:"Add widget",pt:"Adicionar widget"},"home.today":{en:"Today",pt:"Hoje"},"home.weather.city":{en:"Lisbon",pt:"Lisboa"},"home.emptyFiltered.title":{en:"No apps to show",pt:"Sem apps para mostrar"},"home.emptyFiltered.desc":{en:"Your current filters don't match any apps. Try a different suite or category, or adjust your interests in Preferences.",pt:"Os filtros atuais n\xe3o correspondem a nenhuma app. Escolhe outra su\xedte ou categoria, ou ajusta os teus interesses nas Prefer\xeancias."},"home.emptyFiltered.cta":{en:"Open Preferences",pt:"Abrir Prefer\xeancias"},"home.emptyFiltered.clear":{en:"Clear filters",pt:"Limpar filtros"}};function $(e,t){return y[e]?.[t]??e}function k(e,t){return v[e]?.[t]??e}function j(e){return e.visibility?e.visibility:e.homeHidden?"hidden-home":"default"}let M=[{id:"markdown",port:3001,labelKey:"apps.markdown.label",descriptionKey:"apps.markdown.description",hash:"#/blog",icon:"file",color:"#388bfd",enabled:!0,category:"Content",needsAuth:!1,suite:"Learning Hub",interest:"learning"},{id:"school",port:3019,labelKey:"apps.school.label",descriptionKey:"apps.school.description",hash:"#/school",hashAliases:["math","portugues","estudodomeio","ingles"],icon:"graduation",color:"#f78166",enabled:!0,category:"School",needsAuth:!1,suite:"Learning Hub",interest:"learning"},{id:"earth",port:3002,labelKey:"apps.earth.label",descriptionKey:"apps.earth.description",hash:"#/earth",icon:"globe",color:"#3fb950",enabled:!0,category:"Explore",needsAuth:!1,suite:"Learning Hub",interest:"learning"},{id:"cosmos",port:3006,labelKey:"apps.cosmos.label",descriptionKey:"apps.cosmos.description",hash:"#/cosmos",icon:"telescope",color:"#bc8cff",enabled:!0,category:"Explore",needsAuth:!1,suite:"Learning Hub",interest:"space"},{id:"techscope",port:3003,labelKey:"apps.techscope.label",descriptionKey:"apps.techscope.description",hash:"#/techscope",icon:"satellite",color:"#a371f7",enabled:!0,category:"Live",needsAuth:!1,suite:"Life Dashboard",interest:"tech"},{id:"citypulse",port:3004,labelKey:"apps.citypulse.label",descriptionKey:"apps.citypulse.description",hash:"#/citypulse",icon:"buildings",color:"#d29922",enabled:!0,category:"Live",needsAuth:!1,suite:"Life Dashboard",interest:"news"},{id:"stockpulse",port:3007,labelKey:"apps.stockpulse.label",descriptionKey:"apps.stockpulse.description",hash:"#/stockpulse",icon:"trending-up",color:"#3fb950",enabled:!0,category:"Live",needsAuth:!1,suite:"Life Dashboard"},{id:"csvexplorer",port:3016,labelKey:"apps.csvexplorer.label",descriptionKey:"apps.csvexplorer.description",hash:"#/csvexplorer",icon:"table",color:"#58a6ff",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"chartbuilder",port:3017,labelKey:"apps.chartbuilder.label",descriptionKey:"apps.chartbuilder.description",hash:"#/chartbuilder",icon:"bar-chart",color:"#d29922",enabled:!0,category:"Create",needsAuth:!1,suite:"Developer Toolkit",homeHidden:!0},{id:"pad",port:3008,labelKey:"apps.pad.label",descriptionKey:"apps.pad.description",hash:"#/mdpad",hashAliases:["mermaidpad"],icon:"edit",color:"#f78166",enabled:!0,category:"Create",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"regexlab",port:3009,labelKey:"apps.regexlab.label",descriptionKey:"apps.regexlab.description",hash:"#/regexlab",icon:"search",color:"#388bfd",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"jsonexplorer",port:3010,labelKey:"apps.jsonexplorer.label",descriptionKey:"apps.jsonexplorer.description",hash:"#/jsonexplorer",icon:"braces",color:"#3fb950",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"codediff",port:3011,labelKey:"apps.codediff.label",descriptionKey:"apps.codediff.description",hash:"#/codediff",icon:"diff",color:"#d29922",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"playground",port:3012,labelKey:"apps.playground.label",descriptionKey:"apps.playground.description",hash:"#/playground",icon:"terminal",color:"#facc15",enabled:!0,category:"Create",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"jwtinspector",port:3013,labelKey:"apps.jwtinspector.label",descriptionKey:"apps.jwtinspector.description",hash:"#/jwtinspector",icon:"key",color:"#a371f7",enabled:!0,category:"Inspect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"colorlab",port:3014,labelKey:"apps.colorlab.label",descriptionKey:"apps.colorlab.description",hash:"#/colorlab",icon:"palette",color:"#f78166",enabled:!0,category:"Create",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"cronbuilder",port:3015,labelKey:"apps.cronbuilder.label",descriptionKey:"apps.cronbuilder.description",hash:"#/cronbuilder",icon:"clock",color:"#3fb950",enabled:!0,category:"Connect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"weather",port:3022,labelKey:"apps.weather.label",descriptionKey:"apps.weather.description",hash:"#/weather",icon:"cloud",color:"#58a6ff",enabled:!0,category:"Live",needsAuth:!1,suite:"Life Dashboard"},{id:"apiexplorer",port:3024,labelKey:"apps.apiexplorer.label",descriptionKey:"apps.apiexplorer.description",hash:"#/apiexplorer",icon:"code",color:"#58a6ff",enabled:!0,category:"Connect",needsAuth:!0,suite:"Developer Toolkit",homeHidden:!0},{id:"movies",port:3025,labelKey:"apps.movies.label",descriptionKey:"apps.movies.description",hash:"#/movies",icon:"film",color:"#e50914",enabled:!0,category:"Fun",needsAuth:!0,suite:"Entertainment",interest:"movies"},{id:"promptlab",port:3026,labelKey:"apps.promptlab.label",descriptionKey:"apps.promptlab.description",hash:"#/promptlab",icon:"brain",color:"#a371f7",enabled:!0,category:"Lab",needsAuth:!0,suite:"AI Lab",interest:"tech"},{id:"imagegen",port:3027,labelKey:"apps.imagegen.label",descriptionKey:"apps.imagegen.description",hash:"#/imagegen",icon:"image",color:"#f78166",enabled:!0,category:"Lab",needsAuth:!0,suite:"AI Lab",interest:"tech"},{id:"daily",port:3029,labelKey:"apps.daily.label",descriptionKey:"apps.daily.description",hash:"#/daily",icon:"target",color:"#34d399",enabled:!0,category:"Tools",needsAuth:!1,suite:"Life Dashboard",interest:"learning"},{id:"games",port:3028,labelKey:"apps.games.label",descriptionKey:"apps.games.description",hash:"#/games",hashAliases:["lebem","leitor","tictactoe","galo","soundhunter","familyquiz","adventure","pixelboard","stopgame","spotit","memory","tapit","jumpparty","drawguess","animalarena","crazykitchen","miniparty","hideseek","buttonmayhem","bombbrawl"],icon:"gamepad",color:"#f97583",enabled:!0,category:"Fun",needsAuth:!1,suite:"Game Room",interest:"games"},{id:"ask",port:3030,labelKey:"apps.ask.label",descriptionKey:"apps.ask.description",hash:"#/ask",hashAliases:[],icon:"sparkle",color:"#8b7bff",enabled:!0,category:"Lab",needsAuth:!1,suite:"AI Lab",interest:"tech"},{id:"finance",port:3031,labelKey:"apps.finance.label",descriptionKey:"apps.finance.description",hash:"#/finance",hashAliases:[],icon:"wallet",color:"#7fb77e",enabled:!0,category:"Tools",suite:"Life Dashboard",needsAuth:!1},{id:"youtube",port:3032,labelKey:"apps.youtube.label",descriptionKey:"apps.youtube.description",hash:"#/youtube",hashAliases:[],icon:"film",color:"#ff0000",enabled:!0,category:"Fun",needsAuth:!1,suite:"Entertainment",interest:"movies"},{id:"music",port:3033,labelKey:"apps.music.label",descriptionKey:"apps.music.description",hash:"#/music",hashAliases:[],icon:"headphones",color:"#e89a5c",enabled:!0,category:"Entertainment",needsAuth:!1,suite:"Life Dashboard"}],S=[{id:"lab",yamlSuite:"AI Lab",color:c.w4.suites.lab,icon:"beaker",nameKey:"suites.lab.name",subKey:"suites.lab.sub"},{id:"vida",yamlSuite:"Life Dashboard",color:c.w4.suites.vida,icon:"heart",nameKey:"suites.vida.name",subKey:"suites.vida.sub"},{id:"learn",yamlSuite:"Learning Hub",color:c.w4.suites.learn,icon:"graduation",nameKey:"suites.learn.name",subKey:"suites.learn.sub"},{id:"games",yamlSuite:"Game Room",color:c.w4.suites.games,icon:"gamepad",nameKey:"suites.games.name",subKey:"suites.games.sub"},{id:"ent",yamlSuite:"Entertainment",color:c.w4.suites.ent,icon:"film",nameKey:"suites.ent.name",subKey:"suites.ent.sub"}],z=[{id:"lebem",hash:"#/lebem",iconName:"book",labelKey:"quickLaunch.lebem",color:"#f97583"},{id:"tictactoe",hash:"#/tictactoe",iconName:"grid",labelKey:"quickLaunch.tictactoe",color:"#8b5cf6"},{id:"soundhunter",hash:"#/soundhunter",iconName:"mic",labelKey:"quickLaunch.soundhunter",color:"#f59e0b"},{id:"familyquiz",hash:"#/familyquiz",iconName:"brain",labelKey:"quickLaunch.familyquiz",color:"#3b82f6"},{id:"adventure",hash:"#/adventure",iconName:"book",labelKey:"quickLaunch.adventure",color:"#10b981"},{id:"pixelboard",hash:"#/pixelboard",iconName:"palette",labelKey:"quickLaunch.pixelboard",color:"#ec4899"},{id:"stopgame",hash:"#/stopgame",iconName:"close",labelKey:"quickLaunch.stopgame",color:"#f59e0b"},{id:"spotit",hash:"#/spotit",iconName:"eye",labelKey:"quickLaunch.spotit",color:"#8b5cf6"},{id:"memory",hash:"#/memory",iconName:"brain",labelKey:"quickLaunch.memory",color:"#06b6d4"},{id:"tapit",hash:"#/tapit",iconName:"target",labelKey:"quickLaunch.tapit",color:"#f97583"},{id:"jumpparty",hash:"#/jumpparty",iconName:"zap",labelKey:"quickLaunch.jumpparty",color:"#3fb950"},{id:"drawguess",hash:"#/drawguess",iconName:"edit",labelKey:"quickLaunch.drawguess",color:"#d2a8ff"},{id:"animalarena",hash:"#/animalarena",iconName:"trophy",labelKey:"quickLaunch.animalarena",color:"#ef4444"},{id:"crazykitchen",hash:"#/crazykitchen",iconName:"flame",labelKey:"quickLaunch.crazykitchen",color:"#f59e0b"},{id:"miniparty",hash:"#/miniparty",iconName:"sparkle",labelKey:"quickLaunch.miniparty",color:"#58a6ff"},{id:"hideseek",hash:"#/hideseek",iconName:"search",labelKey:"quickLaunch.hideseek",color:"#10b981"},{id:"buttonmayhem",hash:"#/buttonmayhem",iconName:"dice",labelKey:"quickLaunch.buttonmayhem",color:"#a855f7"},{id:"bombbrawl",hash:"#/bombbrawl",iconName:"bomb",labelKey:"quickLaunch.bombbrawl",color:"#ff4444"}],C=(()=>{let e={};for(let t of z)e[t.hash]=t;return e})(),T={"profile.title":"Your Profile","profile.close":"Close","profile.cancel":"Cancel","profile.save":"Save","profile.interests":"Interests","profile.interestsHint":"Personalize your daily feed and in-app recommendations.","profile.ageMode":"Age mode","profile.ageModeHint":"Adjusts School difficulty and filters sensitive content.","topbar.profile.tooltip":"Your profile","topbar.profile.aria":"Open profile","sidebar.home":"Home","sidebar.retreat":"Retreat","sidebar.show":"Show sidebar","sidebar.hide":"Hide sidebar","sidebar.showSuites":"+ Show suites","pinned.moveLeft":"Move left","pinned.moveRight":"Move right","retreat.prompt":"search or open anything","retreat.weather.city":"Lisbon","palette.search":"Search","palette.placeholder":"Search apps, tools, or go anywhere…","palette.recent":"Recent","palette.allApps":"All apps","palette.noMatch":"No apps match","palette.emptyHint":"Try another word or check the spelling.","palette.recentTag":"recent","palette.clear":"Clear","palette.hint.navigate":"navigate","palette.hint.open":"open","palette.hint.close":"close","palette.hint.ask":"ask","palette.scope.all":"All","palette.scope.jump":"Go to","palette.scope.actions":"Actions","palette.scope.recent":"Recent","palette.scope.ask":"Ask","palette.scope.ariaLabel":"Search scope","palette.section.jump":"Go to","palette.section.suites":"Suites","palette.section.apps":"Apps","palette.section.games":"Games","palette.section.actions":"Actions","palette.section.ask":"Ask Atlantis","palette.section.content":"Content","palette.meta.game":"Game \xb7 Game Room","palette.meta.doc":"Saved document","palette.meta.agenda":"Agenda event","palette.meta.reading":"Reading list","palette.action.addWidget":"Add widget to Dashboard","palette.action.addWidget.meta":"Opens the picker","palette.action.theme":"Toggle theme","palette.action.theme.meta":"Dark ↔ Light","palette.action.preferences":"Open Preferences","palette.action.preferences.meta":"Interests, age mode","palette.action.settings":"Open Settings","palette.action.settings.meta":"API keys, advanced","palette.action.language":"Toggle language","palette.action.language.meta":"EN → PT","palette.action.clearNotifications":"Clear notifications","palette.action.clearNotifications.meta":"Mark all {n} as read","palette.action.signout":"Sign out","palette.ask.placeholder":"Ask Atlantis or jump anywhere…","palette.ask.hint":"Type a question and press Enter.","palette.ask.thinking":"Thinking…","palette.ask.loading":"Thinking…","palette.ask.answer":"Atlantis says","palette.ask.error":"Couldn't reach the model","palette.ask.suggestMeta":"AI \xb7 replies inline","palette.ask.you":"You","palette.ask.atlantis":"Atlantis","palette.ask.empty":"Ask a question to get started.","palette.ask.suggestionsTitle":"Try asking…","palette.ask.followUp":"Ask a follow-up…","palette.ask.suggest.summarizeDay":"Summarize my day in 3 lines","palette.ask.suggest.whatsTrending":"What's trending in Lisbon today?","userMenu.preferences":"Preferences","userMenu.settings":"Settings","userMenu.signOut":"Sign out","userMenu.language":"Language","userMenu.theme":"Theme","userMenu.themeLight":"Light","userMenu.themeDark":"Dark","userMenu.themeSystem":"System","userMenu.clearData":"Clear local data","userMenu.clearDataConfirm":"Clear all local settings, caches, and preferences? This cannot be undone — the page will reload.","common.cancel":"Cancel","cmdk.hint.label":"to ask or jump","cmdk.hint.aria":"Press Cmd+K anywhere to open the command palette","cmdk.hint.dismiss":"Hide this hint","onboarding.eyebrow":"✦ START HERE","onboarding.title":"Welcome to Atlantis","onboarding.subtitle":"Three shortcuts to get moving. You can dismiss this card and come back anytime via the command palette.","onboarding.aria":"Getting started","onboarding.dismiss":"Dismiss onboarding","onboarding.tip.palette.title":"Jump anywhere","onboarding.tip.palette.body":"Open the command palette to launch any app, trigger an action, or ask the assistant.","onboarding.tip.preferences.title":"Pick what you care about","onboarding.tip.preferences.body":"Set interests and age mode in Preferences — the home grid, widgets, and suggestions adapt.","onboarding.tip.daily.title":"Keep a daily streak","onboarding.tip.daily.body":"The Daily Manager tracks missions, points, and streaks you pick each day.","suites.label":"Suites","suites.aria":"Open Suites menu","suites.appsCount":"apps in suite","suites.lab.name":"AI Lab","suites.lab.sub":"Prompt \xb7 Image \xb7 Code","suites.vida.name":"Life Dashboard","suites.vida.sub":"Health \xb7 Habits \xb7 News","suites.learn.name":"Learning Hub","suites.learn.sub":"Studies \xb7 Discovery","suites.games.name":"Game Room","suites.games.sub":"Quizzes \xb7 Puzzles","suites.ent.name":"Entertainment","suites.ent.sub":"Movies \xb7 Music \xb7 Stars","error.remote.title":"Couldn't load {name}","error.remote.generic":"Something went wrong while rendering this app.","error.remote.devHint":"The app's dev server isn't reachable. Start it with:","error.remote.prodHint":"This app is temporarily unavailable. Please try again in a moment.","error.remote.retry":"Retry","error.remote.goHome":"Go home","notifications.bell":"Notifications","notifications.title":"Notifications","notifications.markAllRead":"Mark all read","notifications.dismiss":"Dismiss","notifications.empty":"You're all caught up.","notifications.seeAll":"See all","notifications.page.title":"Notifications","notifications.page.subtitle":"Everything the dashboard has notified you about — newest first.","notifications.source.newsPt":"PT News","notifications.source.newsPtTech":"PT News \xb7 Tech","notifications.source.newsPtSports":"PT News \xb7 Sports","notifications.source.newsPtBusiness":"PT News \xb7 Business","notifications.source.newsPtGeneral":"PT News \xb7 General","notifications.source.newsWorld":"World News","notifications.source.seismicPt":"Seismic PT","notifications.source.seismicWorld":"Seismic","notifications.source.daily":"Daily Mission","notifications.source.wikiTopRead":"Wikipedia Top","notifications.source.trending":"Trending","notifications.source.hnFrontPage":"HN Front Page","notifications.source.githubTrending":"GitHub Trending","notifications.source.devto":"Dev.to Weekly","notifications.source.syncError":"Sync Error","notifications.source.weatherPt":"Weather Warning","notifications.source.dailyAchievement":"Streak Achievement","notifications.source.financeBudget":"Budget Alert","notifications.source.financeBills":"Scheduled Bills","notifications.source.weatherForecast":"Weather Forecast Alert","notifications.daily.body":"It's {time} — time for {name}.","notifications.daily.group.one":"1 daily mission pending","notifications.daily.group.many":"{count} daily missions pending","notifications.settings.title":"Notification Sources","notifications.settings.desc":"Choose which widgets send notifications to the bell. Toggle sources on or off here.","notifications.settings.noWidgets":"No notification widgets on your dashboard yet. Add a widget with notifications to configure it here.","notifications.settings.enable":"Enable notifications","notifications.settings.shell.title":"Shell","notifications.settings.shell.desc":"System-level notifications — not tied to a specific widget.","notifications.settings.muteAll":"Mute all notifications","notifications.settings.muteAll.desc":"Silence every notification category globally.","notifications.settings.quietHours":"Quiet hours","notifications.settings.quietHours.desc":"Set a time window during which notifications are suppressed.","notifications.settings.quietHours.from":"From","notifications.settings.quietHours.to":"To","notifications.settings.quietHours.allDay":"All day","notifications.settings.quietHours.add":"Add quiet hours","notifications.settings.quietHours.remove":"Remove","notifications.settings.quietHours.category":"Category","notifications.settings.quietHours.global":"All categories","widgets.dashboard":"Dashboard","widgets.addWidget":"Add widget","widgets.moveLeft":"Move left","widgets.moveRight":"Move right","widgets.remove":"Remove","widgets.cycleSize":"Size: {size}","widgets.unpin":"Unpin","widgets.open":"Open","widgets.emptyDashboard":"Your dashboard is empty. Add some widgets!","widget.error.label":"◎ Offline","widget.error.body":"Can't reach the source. Retrying soon.","widget.loading":"Loading…","widgets.empty.title":"Compose your dashboard.","widgets.empty.body":"Pick the widgets that matter to you — news, weather, your streak, AI sessions. You can reorder and customize later.","widgets.empty.cta":"Add your first widget","widgets.picker.title":"Add a widget.","widgets.picker.eyebrow":"◇ Picker","widgets.picker.subtitle":"Pick from your widget catalog. Live data, glanceable.","widgets.picker.searchPlaceholder":"Search widgets — e.g. weather, news, clock…","widgets.picker.empty":"No widgets match. Try another keyword.","widgets.picker.close":"Close","widgets.picker.added":"Added","widgets.picker.removeAll":"Remove all ({n})","widgets.picker.removeAllConfirm":"Remove all widgets from your dashboard?","widgets.picker.suite.all":"All","widgets.picker.suite.tools":"Tools","quickLaunch.count.subjects":"subjects","quickLaunch.count.games":"games","quickLaunch.count.sections":"sections","quickLaunch.count.recent":"recent","quickLaunch.count.open":"open","quickLaunch.math":"Math","quickLaunch.portugues":"Portuguese","quickLaunch.estudodomeio":"Nature","quickLaunch.ingles":"English","quickLaunch.tictactoe":"Tic Tac Toe","quickLaunch.memory":"Memory","quickLaunch.pixelboard":"Pixels","quickLaunch.familyquiz":"Quiz","quickLaunch.spotit":"Spot It","quickLaunch.stopgame":"Stop","quickLaunch.lebem":"Read & Play","quickLaunch.soundhunter":"Sound Hunter","quickLaunch.adventure":"Adventure","quickLaunch.tapit":"Tap It","quickLaunch.jumpparty":"Jump","quickLaunch.drawguess":"Draw & Guess","quickLaunch.animalarena":"Sumo Zoo","quickLaunch.crazykitchen":"Crazy Kitchen","quickLaunch.miniparty":"Mini Party","quickLaunch.hideseek":"Hide & Seek","quickLaunch.buttonmayhem":"Button Mayhem","quickLaunch.bombbrawl":"BombBrawl","quickLaunch.movies.discover":"Discover","quickLaunch.movies.movies":"Movies","quickLaunch.movies.tv":"TV Shows","quickLaunch.movies.documentaries":"Docs","quickLaunch.movies.favorites":"Favorites","quickLaunch.movies.seen":"Seen","dailyFeed.title":"Daily feed","dailyFeed.sub.tech":"Tech \xb7 trending","dailyFeed.sub.movie":"Trending this week","dailyFeed.sub.history":"On this day","dailyFeed.sub.news.pt":"News \xb7 RTP","dailyFeed.sub.news.en":"News \xb7 CNN","dailyFeed.sub.school":"Learn today","dailyFeed.sub.game":"Game of the day","dailyFeed.school.math":"Try a quick math puzzle","dailyFeed.school.story":"Read a Portuguese story","dailyFeed.school.science":"Learn a science fact","dailyFeed.school.reading":"Practice reading aloud","dailyFeed.school.word":"Explore a word quiz","dailyFeed.game.memory":"Memory Game","dailyFeed.game.spotit":"Spot the Pair","dailyFeed.game.tictactoe":"Tic Tac Toe","dailyFeed.game.soundhunter":"Sound Hunter","dailyFeed.game.familyquiz":"Family Quiz","dailyFeed.game.adventure":"Text Adventure","dailyFeed.game.stop":"Stop!","seismic.title.pt":"PT Seismic","seismic.title.world":"World Seismic","seismic.empty":"No recent seismic activity","seismic.openInEarth":"Open in Earth","weather.city.lisbon":"Lisbon","weather.openInEarth":"→ Open in Earth","weather.humidity":"Humidity","weather.wind":"Wind","weather.feelsLike":"Feels like {t}\xb0","weather.uv":"UV","weather.sunrise":"Sunrise","weather.sunset":"Sunset","weather.hourly":"Next hours","weather.forecast":"3-day forecast","weather.now":"Now","weather.day.mon":"Mon","weather.day.tue":"Tue","weather.day.wed":"Wed","weather.day.thu":"Thu","weather.day.fri":"Fri","weather.day.sat":"Sat","weather.day.sun":"Sun","onThisDay.title":"On this day","techscopeLive.title":"Live feeds","movies.trending.title":"Trending this week","movies.apiKeyMissing":"API key missing","apps.markdown.label":"Blog","apps.markdown.description":"Articles and notes across a variety of topics","apps.school.label":"School","apps.school.description":"Primary school — Maths, Portuguese & Science (Years 1–4)","apps.earth.label":"Earth","apps.earth.description":"Interactive 3D globe visualization","apps.cosmos.label":"Cosmos","apps.cosmos.description":"Space exploration and astronomy data","apps.techscope.label":"TechScope","apps.techscope.description":"GitHub \xb7 HN \xb7 npm \xb7 Dev.to \xb7 Stack Overflow — 9 live feeds in one journal","apps.citypulse.label":"CityPulse","apps.citypulse.description":"City metrics and live urban data","apps.stockpulse.label":"StockPulse","apps.stockpulse.description":"Real-time stock market pulse","apps.csvexplorer.label":"CSV Explorer","apps.csvexplorer.description":"CSV viewer with sorting, filtering, and stats","apps.chartbuilder.label":"Chart Builder","apps.chartbuilder.description":"Build bar, line, pie, and scatter charts from CSV","apps.pad.label":"Pad","apps.pad.description":"Markdown & Mermaid editor with live preview","apps.regexlab.label":"Regex Lab","apps.regexlab.description":"Live regex tester with group highlighting","apps.jsonexplorer.label":"JSON Explorer","apps.jsonexplorer.description":"JSON tree explorer with JSONPath filtering","apps.codediff.label":"Code Diff","apps.codediff.description":"Visual side-by-side code diff","apps.playground.label":"Playground","apps.playground.description":"HTML \xb7 CSS \xb7 JS live playground with preview","apps.jwtinspector.label":"JWT Inspector","apps.jwtinspector.description":"Decode and inspect JWT tokens with expiry info","apps.colorlab.label":"Color Lab","apps.colorlab.description":"Color picker with palettes, shades, and contrast","apps.cronbuilder.label":"Cron Builder","apps.cronbuilder.description":"Visual cron expression builder with next runs","apps.weather.label":"Weather","apps.weather.description":"Live global weather map","apps.apiexplorer.label":"API Explorer","apps.apiexplorer.description":"HTTP client — fire requests, inspect responses, save collections","apps.movies.label":"Movies & Series","apps.movies.description":"Browse movies, TV shows & documentaries — search where to stream them","apps.promptlab.label":"Prompt Lab","apps.promptlab.description":"Test and compare prompts across Groq, Gemini, and Hugging Face","apps.imagegen.label":"Image Gen","apps.imagegen.description":"Generate images from text prompts using Pollinations AI","apps.games.label":"Games","apps.games.description":"Tic Tac Toe, Memory, Pixel Board, quizzes and more","apps.daily.label":"Daily Manager","apps.daily.description":"Track daily habits, earn points, keep the streak alive","apps.ask.label":"Ask","apps.ask.description":"Chat with Atlantis — markdown answers, conversations saved.","apps.finance.label":"Finance","apps.finance.description":"Track family expenses, income, and weekly budgets.","apps.youtube.label":"YouTube Safe Feed","apps.youtube.description":"Age-adapted YouTube feed — curated channels, no Shorts, no noise.","apps.music.label":"Music","apps.music.description":"Search Apple Music, track history and manage playlists.","apps.devtools.label":"Dev Tools","apps.devtools.description":"Developer tools","pinnedCard.recent.label":"Last opened","ask.widget.title":"Ask sessions","ask.widget.description":"Your recent Ask conversations","ask.widget.untitled":"Untitled","ask.widget.empty":"No conversations yet. Start one from the command palette or the Ask app.","ask.widget.emptyCta":"Ask something","streak.title":"Daily Streak","streak.dayStreak":"day streak","streak.noStreak":"Start your streak today","streak.todayDone":"{n} / {total} today","streak.points":"{n} pts","streak.open":"Open Daily Manager","habits.title":"Habits","habits.last7":"Last 7 days","habits.empty":"Add missions in the Daily Manager to track them here.","habits.weekDone":"{n} done this week","habits.open":"Open Daily Manager","habits.openShort":"OPEN","agenda.title":"Agenda Today","agenda.count":"{n} events","agenda.countOne":"1 event","agenda.empty":"Nothing scheduled today","agenda.emptyCta":"Add your first event","agenda.addEvent":"Add event","agenda.titlePlaceholder":"What\\u2019s on?","agenda.timeStart":"Start","agenda.timeEnd":"End","agenda.tag.personal":"personal","agenda.tag.team":"team","agenda.tag.work":"work","agenda.save":"Save","agenda.cancel":"Cancel","agenda.delete":"Delete event","agenda.toggleDone":"Toggle done","agenda.now":"now","reading.title":"❂ Reading","reading.yearProgress":"{read}/{goal} this year","reading.yearGoal":"Year goal","reading.books":"books","reading.goal":"Annual goal","reading.page":"p.","reading.empty":"What are you reading right now?","reading.addBook":"Start a book","reading.updateBook":"Update reading","reading.finish":"Mark as finished","reading.save":"Save","reading.cancel":"Cancel","reading.placeholder.title":"Title","reading.placeholder.author":"Author","reading.placeholder.page":"Page","reading.placeholder.pages":"Total","reading.placeholder.goal":"Goal","reading.placeholder.cover":"COVER","reading.stat.week":"Week","reading.stat.pace":"Pace","reading.stat.finished":"Finished","reading.unit.pages":"pages","reading.unit.perDay":"pg/day","reading.unit.total":"total","bolsa.title":"▲ Markets","bolsa.updated":"updated {age}","bolsa.empty":"Loading tickers…","bolsa.error":"Could not load markets.","bolsa.errorLabel":"OFFLINE","bolsa.stocks.title":"STOCKS","bolsa.stocks.noKey":"Add your Finnhub key in Settings to see stock quotes.","bolsa.stocks.settingsLink":"Go to Settings","bolsa.crypto.title":"CRYPTO","settings.finnhub.label":"Finnhub","settings.finnhub.placeholder":"pk_...","settings.finnhub.help":"Stock quotes for the Markets widget","astro.title":"☽ Astronomy","astro.location":"Lisbon","astro.illuminated":"{pct}% illuminated","astro.dayLength":"{h}h {m}m","astro.phase.new":"New Moon","astro.phase.waxingCrescent":"Waxing Crescent","astro.phase.firstQuarter":"First Quarter","astro.phase.waxingGibbous":"Waxing Gibbous","astro.phase.full":"Full Moon","astro.phase.waningGibbous":"Waning Gibbous","astro.phase.lastQuarter":"Last Quarter","astro.phase.waningCrescent":"Waning Crescent","astro.iss.title":"Next ISS passes","astro.iss.loading":"Loading passes…","astro.iss.empty":"No upcoming visible passes.","labLauncher.title":"✦ AI Lab","labLauncher.subtitle":"Your AI suite","labLauncher.count":"tools","labLauncher.open":"// OPEN →","learnLauncher.title":"◎ Learning","learnLauncher.subtitle":"School & games","learnLauncher.count":"apps","learnLauncher.open":"// EXPLORE →","music.title":"♪ Music","music.subtitle":"Recently played","music.empty":"Paste a song to save.","music.placeholder":"Song — Artist","music.add":"Add","music.remove":"Remove","music.search.label":"Search Apple Music","nightSky.title":"✦ Night Sky","nightSky.iss":"ISS visible","nightSky.dayTitle":"Waiting for dusk","nightSky.nightLegend":"Zenith view \xb7 {count} constellations","health.title":"Dashboard Health","health.measuring":"Measuring…","health.offline":"offline","health.ch.crypto":"CoinGecko","health.ch.weather":"Open-Meteo","health.ch.wiki":"Wikipedia","health.ch.hn":"HN Algolia","health.ch.dom":"DOM Nodes","health.ch.fps":"Frame Rate","health.consumers":"used by {list}","health.status.ok":"All healthy","health.status.slow":"{n} slow","health.status.offline":"{n} offline"},A={"profile.title":"O Teu Perfil","profile.close":"Fechar","profile.cancel":"Cancelar","profile.save":"Guardar","profile.interests":"Interesses","profile.interestsHint":"Personaliza o feed di\xe1rio e as sugest\xf5es das apps.","profile.ageMode":"Modo de idade","profile.ageModeHint":"Ajusta a dificuldade na School e filtra conte\xfado sens\xedvel.","topbar.profile.tooltip":"O teu perfil","topbar.profile.aria":"Abrir perfil","sidebar.home":"In\xedcio","sidebar.retreat":"Retiro","sidebar.show":"Mostrar barra lateral","sidebar.hide":"Esconder barra lateral","sidebar.showSuites":"+ Mostrar su\xedtes","pinned.moveLeft":"Mover para a esquerda","pinned.moveRight":"Mover para a direita","retreat.prompt":"procurar ou abrir qualquer coisa","retreat.weather.city":"Lisboa","palette.search":"Procurar","palette.placeholder":"Procurar apps, ferramentas ou ir para qualquer s\xedtio…","palette.recent":"Recentes","palette.allApps":"Todas as apps","palette.noMatch":"Nenhuma app corresponde a","palette.emptyHint":"Tenta outra palavra ou verifica a ortografia.","palette.recentTag":"recente","palette.clear":"Limpar","palette.hint.navigate":"navegar","palette.hint.open":"abrir","palette.hint.close":"fechar","palette.hint.ask":"perguntar","palette.scope.all":"Tudo","palette.scope.jump":"Ir para","palette.scope.actions":"A\xe7\xf5es","palette.scope.recent":"Recentes","palette.scope.ask":"Perguntar","palette.scope.ariaLabel":"\xc2mbito da pesquisa","palette.section.jump":"Ir para","palette.section.suites":"Su\xedtes","palette.section.apps":"Apps","palette.section.games":"Jogos","palette.section.actions":"A\xe7\xf5es","palette.section.ask":"Perguntar ao Atlantis","palette.section.content":"Conte\xfado","palette.meta.game":"Jogo \xb7 Sala de Jogos","palette.meta.doc":"Documento guardado","palette.meta.agenda":"Evento da agenda","palette.meta.reading":"Lista de leituras","palette.action.addWidget":"Adicionar widget ao Painel","palette.action.addWidget.meta":"Abre o picker","palette.action.theme":"Mudar tema","palette.action.theme.meta":"Escuro ↔ Claro","palette.action.preferences":"Abrir Prefer\xeancias","palette.action.preferences.meta":"Interesses, modo de idade","palette.action.settings":"Abrir Defini\xe7\xf5es","palette.action.settings.meta":"Chaves API, avan\xe7ado","palette.action.language":"Alternar idioma","palette.action.language.meta":"PT → EN","palette.action.clearNotifications":"Limpar notifica\xe7\xf5es","palette.action.clearNotifications.meta":"Marcar {n} como lidas","palette.action.signout":"Terminar sess\xe3o","palette.ask.placeholder":"Pergunta ao Atlantis ou salta para qualquer lado…","palette.ask.hint":"Escreve uma pergunta e prime Enter.","palette.ask.thinking":"A pensar…","palette.ask.loading":"A pensar…","palette.ask.answer":"O Atlantis diz","palette.ask.error":"N\xe3o foi poss\xedvel contactar o modelo","palette.ask.suggestMeta":"IA \xb7 responde inline","palette.ask.you":"Voc\xea","palette.ask.atlantis":"Atlantis","palette.ask.empty":"Faz uma pergunta para come\xe7ar.","palette.ask.suggestionsTitle":"Experimenta perguntar…","palette.ask.followUp":"Faz uma pergunta de seguimento…","palette.ask.suggest.summarizeDay":"Resumir o meu dia em 3 linhas","palette.ask.suggest.whatsTrending":"O que est\xe1 em alta em Lisboa hoje?","userMenu.preferences":"Prefer\xeancias","userMenu.settings":"Defini\xe7\xf5es","userMenu.signOut":"Terminar sess\xe3o","userMenu.language":"Idioma","userMenu.theme":"Tema","userMenu.themeLight":"Claro","userMenu.themeDark":"Escuro","userMenu.themeSystem":"Sistema","userMenu.clearData":"Limpar dados locais","userMenu.clearDataConfirm":"Limpar todas as defini\xe7\xf5es, caches e prefer\xeancias locais? N\xe3o \xe9 poss\xedvel anular — a p\xe1gina ser\xe1 recarregada.","common.cancel":"Cancelar","cmdk.hint.label":"perguntar ou ir para","cmdk.hint.aria":"Prime Cmd+K em qualquer lado para abrir a paleta de comandos","cmdk.hint.dismiss":"Esconder esta dica","onboarding.eyebrow":"✦ COME\xc7AR AQUI","onboarding.title":"Bem-vindo a Atlantis","onboarding.subtitle":"Tr\xeas atalhos para come\xe7ar. Podes dispensar este cart\xe3o e voltar a tudo pela paleta de comandos.","onboarding.aria":"Come\xe7ar","onboarding.dismiss":"Dispensar introdu\xe7\xe3o","onboarding.tip.palette.title":"Ir a qualquer lado","onboarding.tip.palette.body":"Abre a paleta de comandos para lan\xe7ar uma app, desencadear uma a\xe7\xe3o ou perguntar ao assistente.","onboarding.tip.preferences.title":"Escolhe os teus interesses","onboarding.tip.preferences.body":"Define interesses e modo de idade nas Prefer\xeancias — a grelha, os widgets e as sugest\xf5es adaptam-se.","onboarding.tip.daily.title":"Cria uma rotina di\xe1ria","onboarding.tip.daily.body":"O Gestor Di\xe1rio acompanha miss\xf5es, pontos e sequ\xeancias que escolhes todos os dias.","suites.label":"Su\xedtes","suites.aria":"Abrir menu de Su\xedtes","suites.appsCount":"apps na su\xedte","suites.lab.name":"Lab de IA","suites.lab.sub":"Prompt \xb7 Imagem \xb7 C\xf3digo","suites.vida.name":"Painel de Vida","suites.vida.sub":"Sa\xfade \xb7 H\xe1bitos \xb7 Not\xedcias","suites.learn.name":"Aprendizagem","suites.learn.sub":"Estudos \xb7 Descoberta","suites.games.name":"Sala de Jogos","suites.games.sub":"Quizzes \xb7 Puzzles","suites.ent.name":"Entretenimento","suites.ent.sub":"Filmes \xb7 M\xfasica \xb7 Estrelas","error.remote.title":"N\xe3o consegui carregar {name}","error.remote.generic":"Algo correu mal ao abrir esta app.","error.remote.devHint":"O servidor de desenvolvimento desta app n\xe3o est\xe1 a correr. Arranca-o com:","error.remote.prodHint":"Esta app est\xe1 temporariamente indispon\xedvel. Tenta novamente dentro de momentos.","error.remote.retry":"Tentar de novo","error.remote.goHome":"Voltar ao in\xedcio","notifications.bell":"Notifica\xe7\xf5es","notifications.title":"Notifica\xe7\xf5es","notifications.markAllRead":"Marcar tudo como lido","notifications.dismiss":"Dispensar","notifications.empty":"Est\xe1s em dia.","notifications.seeAll":"Ver tudo","notifications.page.title":"Notifica\xe7\xf5es","notifications.page.subtitle":"Tudo o que o painel te notificou — mais recente primeiro.","notifications.source.newsPt":"Not\xedcias PT","notifications.source.newsPtTech":"Not\xedcias PT \xb7 Tecnologia","notifications.source.newsPtSports":"Not\xedcias PT \xb7 Desporto","notifications.source.newsPtBusiness":"Not\xedcias PT \xb7 Economia","notifications.source.newsPtGeneral":"Not\xedcias PT \xb7 Geral","notifications.source.newsWorld":"Not\xedcias Mundo","notifications.source.seismicPt":"Sismos PT","notifications.source.seismicWorld":"Sismos","notifications.source.daily":"Miss\xe3o Di\xe1ria","notifications.source.wikiTopRead":"Wikip\xe9dia Top","notifications.source.trending":"Em Alta","notifications.source.hnFrontPage":"HN Destaque","notifications.source.githubTrending":"GitHub Tend\xeancia","notifications.source.devto":"Dev.to Semanal","notifications.source.syncError":"Erro de Sincroniza\xe7\xe3o","notifications.source.weatherPt":"Aviso meteorol\xf3gico","notifications.source.dailyAchievement":"Conquista de sequ\xeancia","notifications.source.financeBudget":"Alerta de Or\xe7amento","notifications.source.financeBills":"Contas Agendadas","notifications.source.weatherForecast":"Alerta de Previs\xe3o","notifications.daily.body":"S\xe3o {time} — hora de {name}.","notifications.daily.group.one":"1 miss\xe3o di\xe1ria por fazer","notifications.daily.group.many":"{count} miss\xf5es di\xe1rias por fazer","notifications.settings.title":"Fontes de Notifica\xe7\xf5es","notifications.settings.desc":"Escolhe quais widgets enviam notifica\xe7\xf5es para o sino. Ativa ou desativa as fontes aqui.","notifications.settings.noWidgets":"Ainda n\xe3o tens widgets com notifica\xe7\xf5es no painel. Adiciona um widget com notifica\xe7\xf5es para o configurar aqui.","notifications.settings.enable":"Ativar notifica\xe7\xf5es","notifications.settings.shell.title":"Sistema","notifications.settings.shell.desc":"Notifica\xe7\xf5es do sistema — n\xe3o associadas a um widget espec\xedfico.","notifications.settings.muteAll":"Silenciar todas as notifica\xe7\xf5es","notifications.settings.muteAll.desc":"Silencia todas as categorias de notifica\xe7\xf5es globalmente.","notifications.settings.quietHours":"Horas silenciosas","notifications.settings.quietHours.desc":"Define um per\xedodo durante o qual as notifica\xe7\xf5es s\xe3o suprimidas.","notifications.settings.quietHours.from":"Das","notifications.settings.quietHours.to":"\xc0s","notifications.settings.quietHours.allDay":"O dia todo","notifications.settings.quietHours.add":"Adicionar horas silenciosas","notifications.settings.quietHours.remove":"Remover","notifications.settings.quietHours.category":"Categoria","notifications.settings.quietHours.global":"Todas as categorias","widgets.dashboard":"Painel","widgets.addWidget":"Adicionar widget","widgets.moveLeft":"Mover para a esquerda","widgets.moveRight":"Mover para a direita","widgets.remove":"Remover","widgets.cycleSize":"Tamanho: {size}","widgets.unpin":"Desafixar","widgets.open":"Abrir","widgets.emptyDashboard":"O teu dashboard est\xe1 vazio. Adiciona widgets!","widget.error.label":"◎ Offline","widget.error.body":"Sem liga\xe7\xe3o \xe0 fonte. A tentar de novo.","widget.loading":"A carregar…","widgets.empty.title":"Comp\xf5e o teu painel.","widgets.empty.body":"Escolhe os widgets que te importam — not\xedcias, clima, a tua sequ\xeancia, conversas de IA. Podes reordenar e personalizar depois.","widgets.empty.cta":"Adicionar o primeiro widget","widgets.picker.title":"Adicionar widget.","widgets.picker.eyebrow":"◇ Cat\xe1logo","widgets.picker.subtitle":"Escolhe do cat\xe1logo de widgets. Dados ao vivo, num relance.","widgets.picker.searchPlaceholder":"Procurar widgets — ex: meteorologia, not\xedcias, rel\xf3gio…","widgets.picker.empty":"Nenhum widget corresponde. Tenta outra palavra.","widgets.picker.close":"Fechar","widgets.picker.added":"Adicionado","widgets.picker.removeAll":"Remover todos ({n})","widgets.picker.removeAllConfirm":"Remover todos os widgets do dashboard?","widgets.picker.suite.all":"Todos","widgets.picker.suite.tools":"Ferramentas","quickLaunch.count.subjects":"mat\xe9rias","quickLaunch.count.games":"jogos","quickLaunch.count.sections":"sec\xe7\xf5es","quickLaunch.count.recent":"recentes","quickLaunch.count.open":"abrir","quickLaunch.math":"Matem\xe1tica","quickLaunch.portugues":"Portugu\xeas","quickLaunch.estudodomeio":"Est. do Meio","quickLaunch.ingles":"Ingl\xeas","quickLaunch.tictactoe":"Galo","quickLaunch.memory":"Mem\xf3ria","quickLaunch.pixelboard":"Pixels","quickLaunch.familyquiz":"Quiz","quickLaunch.spotit":"Par","quickLaunch.stopgame":"Stop","quickLaunch.lebem":"Ler a Brincar","quickLaunch.soundhunter":"Ca\xe7ador de Sons","quickLaunch.adventure":"Aventura","quickLaunch.tapit":"Toca no Certo","quickLaunch.jumpparty":"Salta","quickLaunch.drawguess":"Desenha e Adivinha","quickLaunch.animalarena":"Sumo Zoo","quickLaunch.crazykitchen":"Cozinha Louca","quickLaunch.miniparty":"Mini Festa","quickLaunch.hideseek":"Esconde-Esconde","quickLaunch.buttonmayhem":"Bot\xe3o Maluco","quickLaunch.bombbrawl":"BombBrawl","quickLaunch.movies.discover":"Descobrir","quickLaunch.movies.movies":"Filmes","quickLaunch.movies.tv":"S\xe9ries","quickLaunch.movies.documentaries":"Docs","quickLaunch.movies.favorites":"Favoritos","quickLaunch.movies.seen":"Vistos","dailyFeed.title":"Feed di\xe1rio","dailyFeed.sub.tech":"Tech \xb7 em alta","dailyFeed.sub.movie":"Em alta esta semana","dailyFeed.sub.history":"Neste dia","dailyFeed.sub.news.pt":"Not\xedcias \xb7 RTP","dailyFeed.sub.news.en":"Not\xedcias \xb7 CNN","dailyFeed.sub.school":"Aprender hoje","dailyFeed.sub.game":"Jogo do dia","dailyFeed.school.math":"Experimenta um desafio de matem\xe1tica","dailyFeed.school.story":"L\xea uma hist\xf3ria em portugu\xeas","dailyFeed.school.science":"Aprende um facto de ci\xeancia","dailyFeed.school.reading":"Pratica leitura em voz alta","dailyFeed.school.word":"Explora um quiz de palavras","dailyFeed.game.memory":"Jogo da Mem\xf3ria","dailyFeed.game.spotit":"Encontra o Par!","dailyFeed.game.tictactoe":"Jogo do Galo","dailyFeed.game.soundhunter":"Ca\xe7ador de Sons","dailyFeed.game.familyquiz":"Quiz da Fam\xedlia","dailyFeed.game.adventure":"Aventura de Texto","dailyFeed.game.stop":"Stop!","seismic.title.pt":"Sismicidade PT","seismic.title.world":"Sismicidade Mundo","seismic.empty":"Sem atividade sismica recente","seismic.openInEarth":"Abrir no Earth","weather.city.lisbon":"Lisboa","weather.openInEarth":"→ Abrir no Earth","weather.humidity":"Humidade","weather.wind":"Vento","weather.feelsLike":"Sensa\xe7\xe3o de {t}\xb0","weather.uv":"UV","weather.sunrise":"Nascer","weather.sunset":"P\xf4r-do-sol","weather.hourly":"Pr\xf3ximas horas","weather.forecast":"Previs\xe3o 3 dias","weather.now":"Agora","weather.day.mon":"Seg","weather.day.tue":"Ter","weather.day.wed":"Qua","weather.day.thu":"Qui","weather.day.fri":"Sex","weather.day.sat":"S\xe1b","weather.day.sun":"Dom","onThisDay.title":"Neste dia","techscopeLive.title":"Feeds ao vivo","movies.trending.title":"Em alta esta semana","movies.apiKeyMissing":"API key em falta","apps.markdown.label":"Blog","apps.markdown.description":"Artigos e notas sobre v\xe1rios temas","apps.school.label":"Escola","apps.school.description":"Escola prim\xe1ria — Matem\xe1tica, Portugu\xeas e Estudo do Meio (1.\xba–4.\xba ano)","apps.earth.label":"Earth","apps.earth.description":"Globo 3D interativo","apps.cosmos.label":"Cosmos","apps.cosmos.description":"Explora\xe7\xe3o espacial e dados de astronomia","apps.techscope.label":"TechScope","apps.techscope.description":"GitHub \xb7 HN \xb7 npm \xb7 Dev.to \xb7 Stack Overflow — 9 feeds ao vivo num jornal","apps.citypulse.label":"CityPulse","apps.citypulse.description":"M\xe9tricas urbanas e dados ao vivo","apps.stockpulse.label":"StockPulse","apps.stockpulse.description":"Mercados financeiros em tempo real","apps.csvexplorer.label":"CSV Explorer","apps.csvexplorer.description":"Visualizador CSV com ordena\xe7\xe3o, filtros e estat\xedsticas","apps.chartbuilder.label":"Chart Builder","apps.chartbuilder.description":"Cria gr\xe1ficos de barras, linhas, pizza e dispers\xe3o","apps.pad.label":"Pad","apps.pad.description":"Editor Markdown e Mermaid com preview ao vivo","apps.regexlab.label":"Regex Lab","apps.regexlab.description":"Testador de regex ao vivo com destaque de grupos","apps.jsonexplorer.label":"JSON Explorer","apps.jsonexplorer.description":"Explorador de \xe1rvore JSON com filtros JSONPath","apps.codediff.label":"Code Diff","apps.codediff.description":"Compara\xe7\xe3o visual de c\xf3digo lado a lado","apps.playground.label":"Playground","apps.playground.description":"Playground HTML \xb7 CSS \xb7 JS ao vivo com preview","apps.jwtinspector.label":"JWT Inspector","apps.jwtinspector.description":"Descodifica e inspeciona tokens JWT","apps.colorlab.label":"Color Lab","apps.colorlab.description":"Seletor de cores com paletas, tons e contraste","apps.cronbuilder.label":"Cron Builder","apps.cronbuilder.description":"Construtor visual de express\xf5es cron","apps.weather.label":"Meteorologia","apps.weather.description":"Mapa meteorol\xf3gico global ao vivo","apps.apiexplorer.label":"API Explorer","apps.apiexplorer.description":"Cliente HTTP — enviar pedidos, inspecionar respostas, guardar cole\xe7\xf5es","apps.movies.label":"Filmes & S\xe9ries","apps.movies.description":"Filmes, s\xe9ries e document\xe1rios — descobre onde ver em streaming","apps.promptlab.label":"Prompt Lab","apps.promptlab.description":"Testa e compara prompts no Groq, Gemini e Hugging Face","apps.imagegen.label":"Image Gen","apps.imagegen.description":"Gera imagens a partir de texto com Pollinations AI","apps.games.label":"Jogos","apps.games.description":"Galo, Mem\xf3ria, Pixels, quizzes e muito mais","apps.daily.label":"Gestor Di\xe1rio","apps.daily.description":"Segue h\xe1bitos di\xe1rios, ganha pontos, mant\xe9m a s\xe9rie","apps.ask.label":"Perguntar","apps.ask.description":"Conversa com o Atlantis — respostas em markdown, guardadas.","apps.finance.label":"Finan\xe7as","apps.finance.description":"Regista despesas, receitas e or\xe7amentos semanais da fam\xedlia.","apps.youtube.label":"YouTube Seguro","apps.youtube.description":"Feed YouTube adaptado \xe0 idade — canais curados, sem Shorts, sem ru\xeddo.","apps.music.label":"M\xfasica","apps.music.description":"Pesquisa no Apple Music, hist\xf3rico e gest\xe3o de playlists.","apps.devtools.label":"Dev Tools","apps.devtools.description":"Ferramentas de desenvolvimento","pinnedCard.recent.label":"\xdaltimo aberto","ask.widget.title":"Conversas com o Atlantis","ask.widget.description":"As tuas conversas recentes","ask.widget.untitled":"Sem t\xedtulo","ask.widget.empty":"Ainda n\xe3o tens conversas. Come\xe7a uma na paleta de comandos ou na app Ask.","ask.widget.emptyCta":"Fazer uma pergunta","streak.title":"S\xe9rie Di\xe1ria","streak.dayStreak":"dias seguidos","streak.noStreak":"Come\xe7a a tua s\xe9rie hoje","streak.todayDone":"{n} / {total} hoje","streak.points":"{n} pts","streak.open":"Abrir Gestor Di\xe1rio","habits.title":"H\xe1bitos","habits.last7":"\xdaltimos 7 dias","habits.empty":"Adiciona miss\xf5es no Gestor Di\xe1rio para as veres aqui.","habits.weekDone":"{n} feitas esta semana","habits.open":"Abrir Gestor Di\xe1rio","habits.openShort":"ABRIR","agenda.title":"Agenda Hoje","agenda.count":"{n} eventos","agenda.countOne":"1 evento","agenda.empty":"Nada agendado hoje","agenda.emptyCta":"Adiciona o primeiro evento","agenda.addEvent":"Adicionar evento","agenda.titlePlaceholder":"O que tens?","agenda.timeStart":"In\xedcio","agenda.timeEnd":"Fim","agenda.tag.personal":"pessoal","agenda.tag.team":"equipa","agenda.tag.work":"trabalho","agenda.save":"Guardar","agenda.cancel":"Cancelar","agenda.delete":"Apagar evento","agenda.toggleDone":"Alternar conclu\xeddo","agenda.now":"agora","reading.title":"❂ Leitura","reading.yearProgress":"{read}/{goal} este ano","reading.yearGoal":"Meta anual","reading.books":"livros","reading.goal":"Meta anual","reading.page":"p.","reading.empty":"O que est\xe1s a ler agora?","reading.addBook":"Come\xe7ar um livro","reading.updateBook":"Atualizar leitura","reading.finish":"Marcar como lido","reading.save":"Guardar","reading.cancel":"Cancelar","reading.placeholder.title":"T\xedtulo","reading.placeholder.author":"Autor","reading.placeholder.page":"P\xe1gina","reading.placeholder.pages":"Total","reading.placeholder.goal":"Meta","reading.placeholder.cover":"CAPA","reading.stat.week":"Semana","reading.stat.pace":"Ritmo","reading.stat.finished":"Conclu\xeddos","reading.unit.pages":"p\xe1ginas","reading.unit.perDay":"p\xe1g/dia","reading.unit.total":"total","bolsa.title":"▲ Bolsa","bolsa.updated":"atualizado {age}","bolsa.empty":"A carregar cota\xe7\xf5es…","bolsa.error":"N\xe3o foi poss\xedvel carregar cota\xe7\xf5es.","bolsa.errorLabel":"OFFLINE","bolsa.stocks.title":"A\xc7\xd5ES","bolsa.stocks.noKey":"Adiciona a tua chave Finnhub nas Defini\xe7\xf5es para ver cota\xe7\xf5es de a\xe7\xf5es.","bolsa.stocks.settingsLink":"Ir para Defini\xe7\xf5es","bolsa.crypto.title":"CRYPTO","settings.finnhub.label":"Finnhub","settings.finnhub.placeholder":"pk_...","settings.finnhub.help":"Cota\xe7\xf5es de a\xe7\xf5es para o widget Bolsa","astro.title":"☽ Astronomia","astro.location":"Lisboa","astro.illuminated":"{pct}% iluminada","astro.dayLength":"{h}h {m}m","astro.phase.new":"Lua Nova","astro.phase.waxingCrescent":"Crescente","astro.phase.firstQuarter":"Quarto Crescente","astro.phase.waxingGibbous":"Gibosa Crescente","astro.phase.full":"Lua Cheia","astro.phase.waningGibbous":"Gibosa Minguante","astro.phase.lastQuarter":"Quarto Minguante","astro.phase.waningCrescent":"Minguante","astro.iss.title":"Pr\xf3ximas passagens — ISS","astro.iss.loading":"A carregar passagens…","astro.iss.empty":"Sem passagens vis\xedveis \xe0 vista.","labLauncher.title":"✦ Lab de IA","labLauncher.subtitle":"A tua su\xedte de IA","labLauncher.count":"ferramentas","labLauncher.open":"// ABRIR →","learnLauncher.title":"◎ Aprendizagem","learnLauncher.subtitle":"Escola & jogos","learnLauncher.count":"apps","learnLauncher.open":"// EXPLORAR →","music.title":"♪ M\xfasica","music.subtitle":"Ouvido recentemente","music.empty":"Adiciona uma m\xfasica.","music.placeholder":"M\xfasica — Artista","music.add":"Adicionar","music.remove":"Remover","music.search.label":"Pesquisar no Apple Music","nightSky.title":"✦ C\xe9u Noturno","nightSky.iss":"ISS vis\xedvel","nightSky.dayTitle":"\xc0 espera do anoitecer","nightSky.nightLegend":"Vista do z\xe9nite \xb7 {count} constela\xe7\xf5es","health.title":"Sa\xfade do Painel","health.measuring":"A medir…","health.offline":"offline","health.ch.crypto":"CoinGecko","health.ch.weather":"Open-Meteo","health.ch.wiki":"Wikip\xe9dia","health.ch.hn":"HN Algolia","health.ch.dom":"N\xf3s DOM","health.ch.fps":"Frame Rate","health.consumers":"usado por {list}","health.status.ok":"Tudo bem","health.status.slow":"{n} lento","health.status.offline":"{n} offline"};var F=a(10312),L=a(95318),N=a(88350),P=a(8740),I=a(55523),D=a(73e3),R=a(87517),E=a(32013),H=a(43414),O=a(20593),K=a(57438),q=a(75763),B=a(53),G=a(19603),W=a(72026),Y=a(77032),_=a(34836),V=a(23971),U=a(9900),J=a(11042),Q=a(76461),X=a(25471),Z=a(82537),ee=a(55417),et=a(54200),ea=a(52306),ei=a(89780);let eo=[F.A,L.A,{id:"finance",load:()=>a.e("6957").then(a.bind(a,25708)).then(e=>({default:e.FinanceWidget})),labels:{en:"Finance",pt:"Finan\xe7as"},descriptions:{en:"Weekly budget status and recent expenses",pt:"Estado do or\xe7amento semanal e despesas recentes"},icon:"\uD83D\uDCB0",accentColor:"#7fb77e",defaultSize:"sm",availableSizes:["sm","md"],defaultCols:1,maxCols:2,minHeight:160,suite:"vida",defaultOnDashboard:!1,sources:[{id:"finance-data",kind:"bll-hook",labelKey:"financeWidget.source.data"}],persistedKeys:["finance:data"]},{id:"finance-budget",load:()=>a.e("6818").then(a.bind(a,79753)).then(e=>({default:e.FinanceBudgetWidget})),labels:{en:"Budget Progress",pt:"Progresso do Or\xe7amento"},descriptions:{en:"Category spend vs budget caps, sorted by % used",pt:"Despesa por categoria vs limites, por % utilizada"},icon:"\uD83D\uDCCA",accentColor:"#7fb77e",defaultSize:"md",availableSizes:["md","lg"],defaultCols:2,maxCols:2,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"finance-budget-data",kind:"bll-hook",labelKey:"financeWidget.source.data"}],persistedKeys:["finance:data"]},{id:"ask-sessions",load:()=>a.e("9532").then(a.bind(a,22247)).then(e=>({default:e.AskSessionsWidget})),labels:{en:"Ask Sessions",pt:"Conversas com o Atlantis"},descriptions:{en:"Your recent Ask conversations",pt:"As tuas conversas recentes com o Atlantis"},icon:"✦",accentColor:"#5e4cbb",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:200,suite:"lab",defaultOnDashboard:!0,sources:[{id:"ask-docs",kind:"bll-hook",labelKey:"sources.askDocs"}]},N.A,P.A,I.A,D.A,R.A,E.A,H.A,O.A,K.A,q.A,B.A,G.A,W.A,Y.A,_.A,V.A,U.A,J.A,Q.A,X.A,Z.A,ee.A,et.A,ea.A,ei.A];function er(e){return eo.find(t=>t.id===e)}var en=a(98975);a(96246);var es=a(59798);let el={...en.A,...function(){let e={};for(let t of new Set([...Object.keys(T),...Object.keys(A)])){let a=T[t],i=A[t];e[t]={en:a??t,pt:i??a??t}}return e}()};var ed=a(62727),ec=a.n(ed);let ep=[{id:"all",labelKey:"widgets.picker.suite.all"},{id:"lab",labelKey:"suites.lab.name",color:c.w4.suites.lab},{id:"vida",labelKey:"suites.vida.name",color:c.w4.suites.vida},{id:"learn",labelKey:"suites.learn.name",color:c.w4.suites.learn},{id:"games",labelKey:"suites.games.name",color:c.w4.suites.games},{id:"ent",labelKey:"suites.ent.name",color:c.w4.suites.ent},{id:"tools",labelKey:"widgets.picker.suite.tools",color:c.w4.colors.success}],eu={lab:c.w4.suites.lab,vida:c.w4.suites.vida,learn:c.w4.suites.learn,games:c.w4.suites.games,ent:c.w4.suites.ent,tools:c.w4.colors.success},em=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,eg=(0,d.keyframes)`
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
  animation: ${em} ${c.w4.transitions.fast};
`,ef=l().div`
  width: 760px;
  max-width: 100%;
  max-height: 84vh;
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.borderSubtle};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${c.w4.elevation.lg};
  animation: ${eg} ${c.w4.transitions.base};
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
`,e$=l().div`
  padding: 14px 22px 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,ek=l().div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
`,ej=l().button`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 10px;
  background: transparent;
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  color: ${c.w4.colors.mainTextMuted};
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  cursor: pointer;
  transition: border-color 120ms ease, color 120ms ease;

  &:hover {
    border-color: ${c.w4.colors.danger};
    color: ${c.w4.colors.danger};
  }

  &:focus-visible {
    outline: 2px solid ${c.w4.colors.accent};
    outline-offset: 2px;
  }
`,eM=l()("button",{shouldForwardProp:e=>"active"!==e&&"chipColor"!==e})`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 12px;
  border-radius: 999px;
  background: ${({active:e,chipColor:t})=>e?t?`${t}26`:c.w4.colors.accentMuted:"transparent"};
  border: 1px solid
    ${({active:e,chipColor:t})=>e?t??c.w4.colors.accent:c.w4.colors.borderSubtle};
  color: ${({active:e,chipColor:t})=>e?t??c.w4.colors.accent:c.w4.colors.mainTextMuted};
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
`,eS=l().div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 22px 22px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
`,ez=l()("button",{shouldForwardProp:e=>"added"!==e})`
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
`,eC=l().div`
  display: flex;
  align-items: center;
  gap: 10px;
`,eT=l().span`
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
`,eA=l().div`
  flex: 1;
  min-width: 0;
  font-size: 13.5px;
  font-weight: 600;
  color: ${c.w4.colors.mainText};
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eF=l().span`
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
`,eN=l().div`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 9.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextFaint};
`,eP=l()("span",{shouldForwardProp:e=>"swatchColor"!==e})`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({swatchColor:e})=>e};
`,eI=l().div`
  grid-column: 1 / -1;
  padding: 40px 20px;
  text-align: center;
  color: ${c.w4.colors.mainTextMuted};
  font-size: 13px;
`;function eD({open:e,activeIds:t,locale:a,onAdd:r,onRemove:n,onRemoveAll:s,onClose:l}){let d=(0,o.useMemo)(()=>(0,m.Nx)(a,el),[a]),[c,u]=(0,o.useState)(""),[g,h]=(0,o.useState)("all"),[f,b]=(0,o.useState)(!1),x=(0,o.useRef)(null);(0,o.useEffect)(()=>{e&&(u(""),h("all"),requestAnimationFrame(()=>x.current?.focus()))},[e]),(0,o.useEffect)(()=>{if(!e)return;let t=e=>{"Escape"===e.key&&l()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[e,l]);let y=(0,o.useMemo)(()=>{let e=c.trim().toLowerCase();return eo.filter(t=>{if("all"!==g&&t.suite!==g)return!1;if(!e)return!0;let i="pt"===a?t.labels.pt:t.labels.en,o="pt"===a?t.descriptions.pt:t.descriptions.en;return i.toLowerCase().includes(e)||o.toLowerCase().includes(e)||t.id.toLowerCase().includes(e)||t.suite.toLowerCase().includes(e)})},[c,g,a]);return e?ec().createPortal((0,i.jsxs)(eh,{onClick:l,children:[(0,i.jsxs)(ef,{onClick:e=>e.stopPropagation(),role:"dialog","aria-label":d("widgets.picker.title"),children:[(0,i.jsxs)(eb,{children:[(0,i.jsxs)(ex,{children:[(0,i.jsx)(p.YZ,{children:d("widgets.picker.eyebrow")}),(0,i.jsx)(ev,{onClick:l,"aria-label":d("widgets.picker.close"),children:(0,i.jsx)(p.In,{name:"close",size:14,"aria-hidden":"true"})})]}),(0,i.jsx)(ey,{children:d("widgets.picker.title")}),(0,i.jsx)(ew,{children:d("widgets.picker.subtitle")})]}),(0,i.jsxs)(e$,{children:[(0,i.jsx)(p.pd,{ref:x,placeholder:d("widgets.picker.searchPlaceholder"),value:c,onChange:e=>u(e.target.value),before:(0,i.jsx)(p.In,{name:"search",size:14,"aria-hidden":"true"})}),(0,i.jsxs)(ek,{role:"tablist",children:[ep.map(e=>(0,i.jsxs)(eM,{active:g===e.id,chipColor:e.color,onClick:()=>h(e.id),role:"tab","aria-selected":g===e.id,children:[e.color&&(0,i.jsx)("span",{className:"dot"}),d(e.labelKey)]},e.id)),t.size>0&&(0,i.jsxs)(ej,{type:"button",onClick:()=>b(!0),"aria-label":d("widgets.picker.removeAll"),children:[(0,i.jsx)(p.In,{name:"trash",size:12,"aria-hidden":"true"}),d("widgets.picker.removeAll",{n:t.size})]})]})]}),(0,i.jsx)(eS,{children:0===y.length?(0,i.jsx)(eI,{children:d("widgets.picker.empty")}):y.map(e=>{let o=t.has(e.id),s="pt"===a?e.labels.pt:e.labels.en,l="pt"===a?e.descriptions.pt:e.descriptions.en,c=eu[e.suite],u=ep.find(t=>t.id===e.suite);return(0,i.jsxs)(ez,{added:o,onClick:()=>{o?n(e.id):r(e.id)},children:[(0,i.jsxs)(eC,{children:[(0,i.jsx)(eT,{children:e.icon}),(0,i.jsx)(eA,{children:s}),o&&(0,i.jsxs)(eF,{children:[(0,i.jsx)(p.In,{name:"check",size:10,"aria-hidden":"true"}),d("widgets.picker.added")]})]}),(0,i.jsx)(eL,{children:l}),(0,i.jsxs)(eN,{children:[(0,i.jsx)(eP,{swatchColor:c}),u?d(u.labelKey):e.suite]})]},e.id)})})]}),(0,i.jsx)(p.TM,{open:f,title:d("widgets.picker.removeAll",{n:t.size}),message:d("widgets.picker.removeAllConfirm"),confirmLabel:d("widgets.picker.removeAll",{n:t.size}),cancelLabel:d("widgets.picker.close"),danger:!0,onCancel:()=>b(!1),onConfirm:()=>{b(!1),s?s():Array.from(t).forEach(e=>n(e))}})]}),document.body):null}let eR="shell:dashboard-widgets",eE="shell:pending-open-widget-picker",eH=[{id:"w-ask-sessions",widgetId:"ask-sessions"},{id:"w-daily-feed",widgetId:"daily-feed"},{id:"w-techscope",widgetId:"techscope"},{id:"w-weather",widgetId:"weather"},{id:"w-clock",widgetId:"clock"}],eO=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,eK=l().div`
  margin-bottom: ${c.w4.spacing.xl};
  animation: ${eO} 0.35s ease both;
`,eq=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.md};
  padding-top: ${c.w4.spacing.md};
  padding-bottom: ${c.w4.spacing.md};
  margin-bottom: ${c.w4.spacing.md};
  border-top: 1px solid ${c.w4.colors.borderSubtle};
`,eB=l().h2`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextMuted};
  margin: 0;
`,eG=l().button`
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
`,eW=l().button`
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
`,eY=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,e_=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextFaint};
`,eV=l().div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,eU=l().button`
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
`,eJ=l().div`
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
`,eQ=l().div`
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
`,eX=l().div`
  position: relative;
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: 28px;
  font-weight: 400;
  color: ${c.w4.colors.mainText};
  line-height: 1.2;
`,eZ=l().div`
  position: relative;
  font-size: ${c.w4.typography.fontSizeBase};
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.5;
  max-width: 420px;
`,e0=l().button`
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
`,e1=new Set(M.filter(e=>"Developer Toolkit"===e.suite).map(e=>e.id)),e4="pin:";function e2(e){return e.widgetId.startsWith(e4)}function e5(e){return e.widgetId.slice(e4.length)}let e3=new Set(["games","movies","devtools"]);function e8({instance:e,appId:t,meta:a,app:o,idx:r,totalCount:n,tShell:s,recentsOverride:l,onMove:d,onRemove:c,onSelectApp:m}){let g=(0,u.useRecents)(t),h=n>1?(0,i.jsxs)(i.Fragment,{children:[r>0&&(0,i.jsx)(eW,{type:"button",title:s("widgets.moveLeft"),onClick:t=>{t.stopPropagation(),d(e.id,-1)},children:(0,i.jsx)(p.In,{name:"chevron-left",size:13})}),r<n-1&&(0,i.jsx)(eW,{type:"button",title:s("widgets.moveRight"),onClick:t=>{t.stopPropagation(),d(e.id,1)},children:(0,i.jsx)(p.In,{name:"chevron-right",size:13})})]}):void 0;return(0,i.jsx)(p.SV,{vizId:t,label:a.label,description:a.description,hash:o?.hash??a.hash,category:a.category,accentColor:a.color,needsAuth:a.needsAuth,pinned:!0,index:r,onClick:()=>{o?m(o):window.location.hash=a.hash},onHoverIntent:o?()=>x(t):void 0,onTogglePin:()=>c(e.id),reorderControls:h,extra:e3.has(t)?function(e,t,a,o){if(0===e.length)return null;let r=e.slice(0,3);return(0,i.jsxs)(eY,{children:[(0,i.jsx)(e_,{children:a("pinnedCard.recent.label")}),(0,i.jsx)(eV,{children:r.map(e=>{let a,r,n;return(0,i.jsxs)(eU,{type:"button",tintColor:e.color??t,title:e.label,onClick:t=>{t.stopPropagation(),window.location.hash=e.hash},children:[(a=function(e){if(e)return C[e.split("?")[0]]??C[e]}(e.hash),r=a?.iconName??e.iconName??o,n=a?.color??e.color??t,r?(0,i.jsx)("span",{className:"glyph","aria-hidden":"true",style:{color:n},children:(0,i.jsx)(p.In,{name:r,size:14})}):e.icon?(0,i.jsx)("span",{className:"glyph","aria-hidden":"true",children:e.icon}):null),(0,i.jsx)("span",{className:"label",children:e.label})]},e.hash)})})]})}(l??g,a.color,s,a.icon):null})}function e6({locale:e,pinnedAppIds:t,recentAppIds:a,apps:r,appMeta:n,onSelectApp:s,onTogglePin:l}){let d=(0,o.useMemo)(()=>(0,m.Nx)(e,el),[e]),[g,h]=(0,o.useState)([]),[f,b]=(0,o.useState)(!1),[x,y]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=()=>{try{sessionStorage.removeItem(eE)}catch{}y(!0)};window.addEventListener("atlantis:open-widget-picker",e);let t=!1;try{t="1"===sessionStorage.getItem(eE)}catch{}if(t){try{sessionStorage.removeItem(eE)}catch{}y(!0)}return()=>window.removeEventListener("atlantis:open-widget-picker",e)},[]),(0,o.useEffect)(()=>{let e=!1;return(async()=>{let t=await (0,c.PL)(eR);if(!e){if(t)try{let e=JSON.parse(t),a=function(e){if(!e.some(e=>"internet-now"===e.widgetId))return e;let t=[];for(let a of e)if("internet-now"===a.widgetId){let e=Date.now();t.push({id:`w-trending-${e}`,widgetId:"trending-searches"},{id:`w-wiki-${e+1}`,widgetId:"wiki-most-read"},{id:`w-hn-${e+2}`,widgetId:"hackernews-hot"})}else t.push(a);return t}(e);h(a),a!==e&&(0,c.Is)(eR,JSON.stringify(a))}catch{h(eH)}else h(eH);b(!0)}})(),()=>{e=!0}},[]),(0,o.useEffect)(()=>{f&&h(e=>{let a=new Set(t),i=new Set(e.filter(e2).map(e5)),o=e.filter(e=>!e2(e)||a.has(e5(e)));for(let e of t)i.has(e)||(o=[...o,{id:`pin-${e}`,widgetId:`${e4}${e}`}]);return o.length!==e.length||o.some((t,a)=>t.id!==e[a]?.id)?((0,c.Is)(eR,JSON.stringify(o)),o):e})},[t,f]);let w=(0,o.useRef)(new Set);(0,o.useEffect)(()=>{if(!f)return;let e=new Set(g.filter(e=>!e2(e)).map(e=>e.widgetId)),t=w.current;for(let a of e){if(t.has(a))continue;let e=er(a);if(e?.notifications?.length){for(let t of e.notifications)u.events.registerCategory({id:t.category,labelKey:t.labelKey??`notifications.source.${t.id}`,badgeColor:e.accentColor??c.w4.colors.mainTextMuted});u.events.registerRules(e.notifications)}}for(let a of t){if(e.has(a))continue;let t=er(a);if(t){if(t.notifications?.length){u.events.unregisterRules(t.notifications.map(e=>e.id));let e=new Set(t.notifications.map(e=>e.category));for(let t of u.events.getItems())e.has(t.category)&&u.events.dismiss(t.id)}for(let e of t.sources.filter(e=>e.cacheKey).map(e=>`widget-cache:${e.cacheKey}`))(0,c.bg)(e);if(t.persistedKeys)for(let e of t.persistedKeys)(0,c.bg)(e);(0,c.jv)(`notifications:${a}:`).then(e=>{for(let t of e)(0,c.bg)(t)}),t.cleanup&&t.cleanup().catch(()=>{})}}w.current=e},[g,f]);let v=(0,o.useCallback)(e=>{h(e),(0,c.Is)(eR,JSON.stringify(e))},[]),k=(0,o.useCallback)(e=>{v([...g,{id:`w-${e}-${Date.now()}`,widgetId:e}])},[g,v]),j=(0,o.useCallback)(e=>{let t=g.find(t=>t.id===e);t&&e2(t)?l(e5(t)):v(g.filter(t=>t.id!==e))},[g,v,l]),M=(0,o.useCallback)(()=>{g.filter(e2).forEach(e=>l(e5(e))),v([])},[g,v,l]),S=(0,o.useCallback)((e,t)=>{let a=g.findIndex(t=>t.id===e);if(a<0)return;let i=a+t;if(i<0||i>=g.length)return;let o=[...g];[o[a],o[i]]=[o[i],o[a]],v(o)},[g,v]),z=(0,o.useCallback)(e=>{let t=g.findIndex(t=>t.id===e);if(t<0)return;let a=g[t];if(e2(a))return;let i=er(a.widgetId);if(!i)return;let o=i.availableSizes??["sm","md","lg"],r=a.size??i.defaultSize,n=o.indexOf(r),s=o[(n+1)%o.length],l=[...g];l[t]={...a,size:s},v(l)},[g,v]),C=(0,o.useMemo)(()=>new Set(g.filter(e=>!e2(e)).map(e=>e.widgetId)),[g]),T=(0,o.useMemo)(()=>new Map,[]);return((0,o.useEffect)(()=>{},[]),f)?(0,i.jsxs)(eK,{children:[(0,i.jsxs)(eq,{children:[(0,i.jsx)(eB,{children:d("widgets.dashboard")}),(0,i.jsxs)(eG,{active:x,onClick:()=>y(!x),children:[(0,i.jsx)(p.In,{name:"plus",size:14}),d("widgets.addWidget")]})]}),(0,i.jsx)(eD,{open:x,activeIds:C,locale:e,onAdd:e=>{k(e)},onRemove:e=>{let t=g.find(t=>!e2(t)&&t.widgetId===e);t&&j(t.id)},onRemoveAll:M,onClose:()=>y(!1)}),0===g.length?(0,i.jsxs)(eJ,{children:[(0,i.jsx)(eQ,{children:"✨"}),(0,i.jsx)(eX,{children:d("widgets.empty.title")}),(0,i.jsx)(eZ,{children:d("widgets.empty.body")}),(0,i.jsxs)(e0,{onClick:()=>y(!0),children:[(0,i.jsx)(p.In,{name:"plus",size:14}),d("widgets.empty.cta")]})]}):(0,i.jsx)(p.dO,{items:g.flatMap(e=>{if(e2(e))return[{id:e.id,size:"sm",availableSizes:["sm"],minHeight:160}];let t=er(e.widgetId);return t?[{id:e.id,size:e.size??t.defaultSize,availableSizes:t.availableSizes??["sm","md","lg"],minHeight:t.minHeight??160}]:[]}),onReorder:(e,t)=>S(e,t),onCycleSize:e=>z(e),onRemove:e=>j(e),accentColor:e=>{let t=g.find(t=>t.id===e.id);if(!(!t||e2(t)))return er(t.widgetId)?.accentColor},labels:{moveLeft:d("widgets.moveLeft"),moveRight:d("widgets.moveRight"),cycleSize:d("widgets.cycleSize",{size:""}).trim(),remove:d("widgets.remove")},renderPanel:l=>{let c=g.find(e=>e.id===l.id);if(!c)return null;if(e2(c)){let t=e5(c),o="devtools"===t,l=o?{icon:"terminal",label:d("apps.devtools.label"),description:d("apps.devtools.description"),color:"#facc15",category:$("Create",e),hash:"#/playground",needsAuth:!1}:n[t];if(!l)return null;let p=o?null:r.find(e=>e.id===t)??null,u=g.findIndex(e=>e.id===c.id),m=o?a.filter(e=>e1.has(e)).map(e=>{let t=n[e];return{hash:t?.hash??`#/${e}`,label:t?.label??e,iconName:t?.icon,color:t?.color,ts:0}}):void 0;return(0,i.jsx)(e8,{instance:c,appId:t,meta:l,app:p,locale:e,idx:u,totalCount:g.length,tShell:d,recentsOverride:m,onMove:S,onRemove:j,onSelectApp:s})}if("quicklinks"===c.widgetId)return(0,i.jsx)(es.QuickLinksWidget,{locale:e,pinnedAppIds:t,recentAppIds:a,apps:r,appMeta:n,onSelectApp:s});let p=er(c.widgetId);if(!p)return null;T.has(c.widgetId)||T.set(c.widgetId,(0,o.lazy)(p.load));let u=T.get(c.widgetId);return(0,i.jsx)(o.Suspense,{fallback:null,children:(0,i.jsx)(u,{locale:e})})},showGrip:!1})]}):null}let e7={0:"☀️",1:"\uD83C\uDF24️",2:"⛅",3:"☁️",45:"\uD83C\uDF2B️",48:"\uD83C\uDF2B️",51:"\uD83C\uDF26️",53:"\uD83C\uDF26️",55:"\uD83C\uDF27️",61:"\uD83C\uDF27️",63:"\uD83C\uDF27️",65:"\uD83C\uDF27️",71:"\uD83C\uDF28️",73:"\uD83C\uDF28️",75:"\uD83C\uDF28️",80:"\uD83C\uDF26️",81:"\uD83C\uDF27️",82:"\uD83C\uDF27️",95:"⛈️",96:"⛈️",99:"⛈️"},e9={0:"\uD83C\uDF19",1:"\uD83C\uDF19",2:"☁️",3:"☁️"},te=Object.fromEntries(M.map(e=>[e.id,e.icon])),tt=Object.fromEntries(M.map(e=>[e.id,e.color]));function ta(e){return e<10?`0${e}`:String(e)}function ti({locale:e,greeting:t,userName:a,pinnedApps:r,onSelect:n,t:s}){let[l,d]=(0,o.useState)(()=>new Date),{forecast:c}=(0,u.useWeather)({lat:g.j.lisbon.lat,lon:g.j.lisbon.lon,current:"temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day",daily:"temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max",timezone:g.j.lisbon.timezone,cacheKey:"weather-lisbon-v3"});(0,o.useEffect)(()=>{let e=setInterval(()=>d(new Date),3e4);return()=>clearInterval(e)},[]);let m=`${ta(l.getHours())} : ${ta(l.getMinutes())}`,h=(0,o.useMemo)(()=>{let t,a,i;return t=l.toLocaleDateString("pt"===e?"pt-PT":"en-GB",{weekday:"long"}),a=l.getDate(),i=l.toLocaleDateString("pt"===e?"pt-PT":"en-GB",{month:"long"}),`${t} \xb7 ${a} ${i}`.toUpperCase()},[l,e]),f=r.slice(0,5),b=c?.current?(c.current.is_day?e7[c.current.weather_code??0]:e9[c.current.weather_code??0]??e7[c.current.weather_code??0])??"\xb7":null;return(0,i.jsxs)(tr,{children:[c?.current&&(0,i.jsxs)(tu,{children:[(0,i.jsx)("span",{className:"ico",children:b}),(0,i.jsxs)("span",{className:"temp",children:[Math.round(c.current.temperature_2m??0),"\xb0"]}),(0,i.jsx)("span",{className:"lbl",children:s("retreat.weather.city")})]}),(0,i.jsxs)(tn,{children:[(0,i.jsx)(ts,{children:h}),(0,i.jsxs)(tl,{children:[t,a?(0,i.jsxs)(i.Fragment,{children:[", ",(0,i.jsx)("span",{className:"name",children:a.split(" ")[0]})]}):null,"."]}),(0,i.jsx)(td,{children:m}),(0,i.jsxs)(tc,{"aria-hidden":!0,children:[(0,i.jsx)("span",{className:"caret",children:"⌘K"}),(0,i.jsx)("span",{className:"txt",children:s("retreat.prompt")})]}),f.length>0&&(0,i.jsx)(tp,{children:f.map((e,t)=>(0,i.jsxs)(tm,{onClick:()=>n(e),title:`${t+1} \xb7 ${e.label}`,"aria-label":e.label,children:[(0,i.jsx)("span",{className:"ico",style:{color:tt[e.id]},children:te[e.id]?(0,i.jsx)(p.In,{name:te[e.id],size:18,"aria-hidden":"true"}):"\xb7"}),(0,i.jsx)("span",{className:"n",children:t+1})]},e.id))})]})]})}let to=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,tr=l().div`
  flex: 1;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  animation: ${to} 0.35s ease both;

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
`,tn=l().div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: ${c.w4.spacing.lg};
`,ts=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.3em;
  color: ${c.w4.colors.mainTextMuted};
  margin-bottom: ${c.w4.spacing.md};
`,tl=l().h1`
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
`,td=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 14px;
  color: ${c.w4.colors.mainTextMuted};
  letter-spacing: 0.24em;
  margin-top: ${c.w4.spacing.md};
  font-variant-numeric: tabular-nums;
`,tc=l().div`
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
`,tp=l().div`
  margin-top: ${c.w4.spacing.xl};
  display: flex;
  justify-content: center;
  gap: ${c.w4.spacing.md};
`,tu=l().div`
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
`,tm=l().button`
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
`,tg=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,th=l().div`
  position: relative;
  padding: ${c.w4.spacing.xl};
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.md};
  margin-bottom: ${c.w4.spacing.lg};
  animation: ${tg} 0.25s ${c.w4.transitions.easing} both;

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
`,tf=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${c.w4.spacing.md};
`,tb=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,tx=l().div`
  font-family: ${c.w4.typography.fontFamilySerif};
  font-size: ${c.w4.typography.fontSizeLg};
  font-weight: 400;
  color: ${c.w4.colors.mainText};
`,ty=l().div`
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeBase};
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.5;
  max-width: 560px;
`,tw=l().button`
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
`,tv=l().div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,t$=l().button`
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
`,tk=l().div`
  color: ${c.w4.colors.accent};
`,tj=l().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${c.w4.colors.mainText};
`,tM=l().div`
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.45;
`;function tS({t:e,onDismiss:t,onOpenPalette:a,onOpenPreferences:o}){let r=[{iconName:"search",titleKey:"onboarding.tip.palette.title",bodyKey:"onboarding.tip.palette.body",kbd:"⌘K",onClick:a},{iconName:"settings",titleKey:"onboarding.tip.preferences.title",bodyKey:"onboarding.tip.preferences.body",onClick:o},{iconName:"check",titleKey:"onboarding.tip.daily.title",bodyKey:"onboarding.tip.daily.body",onClick:()=>{window.location.hash="#/daily"}}];return(0,i.jsxs)(th,{role:"region","aria-label":e("onboarding.aria"),children:[(0,i.jsxs)(tf,{children:[(0,i.jsxs)(tb,{children:[(0,i.jsx)(p.YZ,{children:e("onboarding.eyebrow")}),(0,i.jsx)(tx,{children:e("onboarding.title")}),(0,i.jsx)(ty,{children:e("onboarding.subtitle")})]}),(0,i.jsx)(tw,{type:"button",title:e("onboarding.dismiss"),"aria-label":e("onboarding.dismiss"),onClick:t,children:(0,i.jsx)(p.In,{name:"close",size:14})})]}),(0,i.jsx)(tv,{children:r.map(t=>(0,i.jsxs)(t$,{type:"button",onClick:t.onClick,disabled:!t.onClick,children:[(0,i.jsx)(tk,{"aria-hidden":!0,children:(0,i.jsx)(p.In,{name:t.iconName,size:18})}),(0,i.jsxs)(tj,{children:[e(t.titleKey),t.kbd&&(0,i.jsx)(p.ue,{children:t.kbd})]}),(0,i.jsx)(tM,{children:e(t.bodyKey)})]},t.titleKey))})]})}let tz=Object.fromEntries(M.map(({id:e,icon:t,labelKey:a,descriptionKey:i,color:o,category:r,suite:n,interest:s,needsAuth:l,hash:d})=>[e,{icon:t,labelKey:a,descriptionKey:i,color:o,category:r,suite:n,interest:s,needsAuth:l,hash:d}])),tC=new Set(M.filter(e=>"default"!==j(e)).map(e=>e.id)),tT=M.filter(e=>e.enabled&&"default"===j(e)),tA=["All","Live","School","Explore","Create","Inspect","Connect","Content","Fun","Lab","Tools"],tF=["AI Lab","Data Studio","Life Dashboard","Learning Hub","Game Room","Entertainment"],tL=tF.filter(e=>tT.some(t=>tz[t.id]?.suite===e));function tN(e,t=new Date){let a=t.getHours();return k(a<12?"greeting.morning":a<19?"greeting.afternoon":"greeting.evening",e)}let tP={0:"☀️",1:"\uD83C\uDF24️",2:"⛅",3:"☁️",45:"\uD83C\uDF2B️",48:"\uD83C\uDF2B️",51:"\uD83C\uDF26️",53:"\uD83C\uDF26️",55:"\uD83C\uDF27️",61:"\uD83C\uDF27️",63:"\uD83C\uDF27️",65:"\uD83C\uDF27️",71:"\uD83C\uDF28️",73:"\uD83C\uDF28️",75:"\uD83C\uDF28️",80:"\uD83C\uDF26️",81:"\uD83C\uDF27️",82:"\uD83C\uDF27️",95:"⛈️",96:"⛈️",99:"⛈️"},tI={0:"\uD83C\uDF19",1:"\uD83C\uDF19",2:"☁️",3:"☁️"},tD=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,tR=l().div`
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
`,tE=l().header`
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
`,tH=l().button`
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
`,tO=l().div`
  display: flex;
  align-items: center;
  padding-left: ${c.w4.spacing.md};
  flex-shrink: 0;

  @media (max-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,tK=l().div`
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
`,tq=l().div`
  display: flex;
  flex: 1;
  overflow: hidden;

  @media (max-width: ${c.w4.breakpoints.md}) {
    flex-direction: column;
  }
`,tB=l()("nav",{shouldForwardProp:e=>"collapsed"!==e})`
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
`,tG=l()("button",{shouldForwardProp:e=>"collapsed"!==e})`
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
`,tW=l().span`
  display: inline-flex;
  transition: transform ${c.w4.transitions.base};
  transform: rotate(${({collapsed:e})=>e?"-90deg":"0deg"});
  flex-shrink: 0;
`,tY=l()("div",{shouldForwardProp:e=>"collapsed"!==e})`
  display: grid;
  grid-template-rows: ${({collapsed:e})=>e?"0fr":"1fr"};
  opacity: ${({collapsed:e})=>+!e};
  transition:
    grid-template-rows 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.2s ease-out;
`,t_=l().div`
  overflow: hidden;
  padding: 2px 0;
  min-height: 0;
`,tV=l().button`
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
`,tU=l().button`
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
`,tJ=l().span`
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
`,tQ=l().hr`
  border: none;
  border-top: 1px solid ${c.w4.colors.borderSubtle};
  margin: ${c.w4.spacing.sm} ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.md}) {
    display: none;
  }
`,tX=l().div`
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
`,tZ=l().header`
  max-width: 820px;
  margin-bottom: ${c.w4.spacing.lg};
  animation: ${tD} 0.4s ease both;

  @media (max-width: ${c.w4.breakpoints.md}) {
    margin-bottom: ${c.w4.spacing.md};
  }
`,t0=l().div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${c.w4.spacing.md};
  margin-bottom: ${c.w4.spacing.md};
  flex-wrap: wrap;
`,t1=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.3em;
  color: ${c.w4.colors.mainTextMuted};
  text-transform: uppercase;
`,t4=l().span`
  color: ${c.w4.colors.mainTextMuted};
  opacity: 0.5;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
`,t2=l().div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  animation: ${tD} 0.4s ease both;

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
`,t5=l().h1`
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
`,t3=l().div`
  font-size: 11px;
  font-weight: 600;
  font-family: ${c.w4.typography.fontFamily};
  color: ${c.w4.colors.sidebarTextMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding-top: 18px;
  margin-bottom: ${c.w4.spacing.md};
`,t8=l().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${c.w4.spacing.md};

  @media (max-width: ${c.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${c.w4.spacing.sm};
  }
`,t6=l().button`
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
`,t7=l().div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${c.w4.spacing.sm};
  padding: ${c.w4.spacing.xl};
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  margin: ${c.w4.spacing.lg} 0;
`,t9=l().div`
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${c.w4.colors.mainText};
`,ae=l().div`
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeBase};
  color: ${c.w4.colors.mainTextMuted};
  line-height: 1.55;
  max-width: 480px;
`,at=l().button`
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
`;function aa({apps:e,recentAppIds:t,pinnedAppIds:a,onTogglePin:r,onMovePinned:n,onSelect:s,user:l,onSignOut:d,onPreferences:h,onClearData:f,onOpenPalette:b,notifications:y,suites:v}){let j,M,z,[C]=(0,u.useProfile)(),T=(0,o.useMemo)(()=>e.filter(e=>{if(tC.has(e.id))return!1;let t=tz[e.id];return!t||!(0,u.hasInterests)(C)||!t.interest||!!C.interests.includes(t.interest)}),[e,C]),[A,F]=(0,o.useState)("home"),[L,N]=(0,o.useState)("All"),[P,I]=(0,o.useState)(null),[D,R]=(0,o.useState)(()=>new Date),{forecast:E}=(0,u.useWeather)({lat:g.j.lisbon.lat,lon:g.j.lisbon.lon,current:"temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day",daily:"temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max",timezone:g.j.lisbon.timezone,cacheKey:"weather-lisbon-v3"}),[H,O]=(0,o.useState)(!0);(0,o.useEffect)(()=>{let e=!1;return(0,c.PL)("shell:onboarding-dismissed").then(t=>{e||O("true"===t)}).catch(()=>void 0),()=>{e=!0}},[]);let K=(0,o.useCallback)(()=>{O(!0),(0,c.Is)("shell:onboarding-dismissed","true").catch(()=>void 0)},[]);(0,o.useEffect)(()=>{let e=setInterval(()=>R(new Date),6e4),t=()=>{document.hidden||R(new Date)};return document.addEventListener("visibilitychange",t),window.addEventListener("focus",t),()=>{clearInterval(e),document.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}},[]);let q=(0,o.useCallback)(()=>{F("home"),N("All"),I(null),(0,c.Is)("shell:home-mode","dashboard")},[]),B=(0,o.useCallback)(()=>{F("retreat"),N("All"),I(null),(0,c.Is)("shell:home-mode","retreat")},[]),G=(0,o.useCallback)(e=>{F("apps"),I(e),N("All")},[]),W=(0,o.useMemo)(()=>({lab:"AI Lab",vida:"Life Dashboard",learn:"Learning Hub",games:"Game Room",ent:"Entertainment"}),[]);(0,o.useEffect)(()=>{let e=()=>{let e=window.location.hash,t=e.indexOf("?");if(t<0)return;let a=new URLSearchParams(e.slice(t+1)).get("suite");if(!a)return;let i=W[a];i&&(F("apps"),I(i),N("All"))};return e(),window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[W]);let[Y,_]=(0,o.useState)(()=>{try{let e=localStorage.getItem("shell:suites-collapsed");return null===e||"true"===e}catch{return!0}}),[V,U]=(0,o.useState)(()=>{try{return"true"===localStorage.getItem("shell:home-sidebar-hidden")}catch{return!1}}),[J]=(0,o.useState)(()=>{try{return"1"===sessionStorage.getItem(eE)}catch{return!1}});(0,o.useEffect)(()=>{let e=!1;return(async()=>{let[t,a,i]=await Promise.all([(0,c.PL)("shell:suites-collapsed"),(0,c.PL)("shell:home-mode"),(0,c.PL)("shell:home-sidebar-hidden")]);if(!e){if(null!==t){_("true"===t);try{localStorage.setItem("shell:suites-collapsed",t)}catch{}}if(null!==i){U("true"===i);try{localStorage.setItem("shell:home-sidebar-hidden",i)}catch{}}J?(F("home"),(0,c.Is)("shell:home-mode","dashboard").catch(()=>void 0)):"retreat"===a&&F("retreat")}})(),()=>{e=!0}},[J]),(0,o.useEffect)(()=>{let e=()=>{F("home"),N("All"),I(null)};return window.addEventListener("atlantis:open-widget-picker",e),()=>window.removeEventListener("atlantis:open-widget-picker",e)},[]);let Q=(0,o.useCallback)(()=>{_(e=>{let t=!e;try{localStorage.setItem("shell:suites-collapsed",String(t))}catch{}return(0,c.Is)("shell:suites-collapsed",String(t)),t})},[]),X=(0,o.useCallback)(()=>{U(e=>{let t=!e;try{localStorage.setItem("shell:home-sidebar-hidden",String(t))}catch{}return(0,c.Is)("shell:home-sidebar-hidden",String(t)).catch(()=>void 0),t})},[]),[Z,ee]=(0,m.Ym)(),et=(0,o.useMemo)(()=>(0,m.Nx)(Z,el),[Z]),ea=(0,o.useMemo)(()=>{let e={};for(let t of T){let a=tz[t.id];a&&(e[t.id]={icon:a.icon,label:et(a.labelKey),description:et(a.descriptionKey),color:a.color,category:$(a.category,Z),hash:a.hash,needsAuth:!!a.needsAuth})}return e},[T,et,Z]),ei=(0,o.useMemo)(()=>T.filter(e=>{let t=tz[e.id],i="All"===L||t?.category===L,o=!P||t?.suite===P,r="All"===L&&!P&&a.includes(e.id);return i&&o&&!r}),[T,L,P,a]),eo=(0,o.useMemo)(()=>{if("All"!==L)return null;if(P){let e={};for(let t of ei){let a=tz[t.id]?.category??"Other";e[a]||(e[a]=[]),e[a].push(t)}return{type:"category",groups:e}}let e={};for(let t of ei){let a=tz[t.id]?.suite??"Other";e[a]||(e[a]=[]),e[a].push(t)}return{type:"suite",groups:e}},[ei,L,P]),er=(0,o.useMemo)(()=>{let e={};for(let t of T){let a=tz[t.id]?.suite;a&&(e[a]=(e[a]??0)+1)}return e["AI Lab"]=(e["AI Lab"]??0)+1,e},[T]),en=(0,o.useMemo)(()=>a.flatMap(e=>T.filter(t=>t.id===e)),[a,T]),es=(0,o.useMemo)(()=>t.filter(e=>!a.includes(e)).flatMap(e=>T.filter(t=>t.id===e)).slice(0,6),[t,a,T]),ed=0,ec=(e,t,o)=>{let l=tz[e.id],d=a.includes(e.id),u=l?et(l.descriptionKey):"",m=l?.color??c.w4.colors.accent,g=l?$(l.category,Z):"",h=o&&o.total>1?(0,i.jsxs)(i.Fragment,{children:[o.pinIdx>0&&(0,i.jsx)(t6,{type:"button",title:et("pinned.moveLeft"),onClick:t=>{t.stopPropagation(),n(e.id,-1)},children:(0,i.jsx)(p.In,{name:"chevron-left",size:13})}),o.pinIdx<o.total-1&&(0,i.jsx)(t6,{type:"button",title:et("pinned.moveRight"),onClick:t=>{t.stopPropagation(),n(e.id,1)},children:(0,i.jsx)(p.In,{name:"chevron-right",size:13})})]}):void 0;return(0,i.jsx)(p.SV,{vizId:e.id,label:e.label,description:u,hash:l?.hash??e.hash,category:g,accentColor:m,needsAuth:l?.needsAuth,pinned:d,index:t,onClick:()=>s(e),onHoverIntent:()=>x(e.id),onTogglePin:()=>r(e.id),reorderControls:h},e.id)},ep=e=>{let t=a.includes("devtools");return(0,i.jsx)(p.SV,{vizId:"devtools",label:et("apps.devtools.label"),description:et("apps.devtools.description"),hash:"#/playground",category:$("Create",Z),accentColor:"#facc15",pinned:t,index:e,onClick:()=>{window.location.hash="#/playground"},onHoverIntent:()=>x("playground"),onTogglePin:()=>r("devtools")})};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(tR,{children:[(0,i.jsxs)(tE,{children:[(0,i.jsx)(tO,{children:(0,i.jsx)(p.K0,{onClick:X,title:V?et("sidebar.show"):et("sidebar.hide"),"aria-label":V?et("sidebar.show"):et("sidebar.hide"),"aria-pressed":V,children:(0,i.jsx)(p.In,{name:"panel-left",size:16})})}),(0,i.jsxs)(tH,{onClick:()=>{window.location.hash="#/home"},title:"Home",children:[(0,i.jsx)("span",{children:"Atl"}),(0,i.jsx)("span",{className:"logo-accent",children:"antis"})]}),(0,i.jsx)(tK,{children:(0,i.jsx)(p.Yw,{locale:Z,onLocaleChange:ee,suites:v,notifications:y,onOpenPalette:b,paletteLabel:et("palette.search"),user:l?{name:l.name,email:l.email,avatarUrl:l.avatarUrl}:void 0,userMenuItems:l?[...h?[{label:et("userMenu.preferences"),icon:(0,i.jsx)(p.In,{name:"user-cog",size:14}),onClick:h}]:[],{label:et("userMenu.settings"),icon:(0,i.jsx)(p.In,{name:"settings",size:14}),onClick:()=>{window.location.hash="#/settings"}},...f?[{label:et("userMenu.clearData"),icon:(0,i.jsx)(p.In,{name:"trash",size:14}),onClick:f,danger:!0}]:[],...d?[{label:et("userMenu.signOut"),icon:(0,i.jsx)(p.In,{name:"log-out",size:14}),onClick:d,danger:!0}]:[]]:[],userMenuControlLabels:{language:et("userMenu.language"),theme:et("userMenu.theme"),themeLight:et("userMenu.themeLight"),themeDark:et("userMenu.themeDark"),themeSystem:et("userMenu.themeSystem")},onSignIn:()=>{window.location.hash="#/home"}})})]}),(0,i.jsxs)(tq,{children:[(0,i.jsxs)(tB,{collapsed:V,children:[(0,i.jsx)(tU,{active:"home"===A,onClick:q,children:(0,i.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,i.jsx)(p.In,{name:"home",size:14}),et("sidebar.home")]})}),(0,i.jsx)(tU,{active:"retreat"===A,onClick:B,children:(0,i.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,i.jsx)(p.In,{name:"moon",size:14}),et("sidebar.retreat")]})}),(0,i.jsx)(tQ,{}),tL.length>0&&(0,i.jsxs)(i.Fragment,{children:[Y?(0,i.jsx)(tV,{type:"button",onClick:Q,children:et("sidebar.showSuites")}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(tG,{onClick:Q,children:[k("suites",Z),(0,i.jsx)(tW,{collapsed:Y,children:(0,i.jsx)(p.In,{name:"chevron-down",size:14})})]}),(0,i.jsx)(tY,{collapsed:Y,children:(0,i.jsx)(t_,{children:tL.map(e=>{let t,a=(t=S.find(t=>t.yamlSuite===e))?{icon:t.icon,color:t.color}:void 0,o="apps"===A&&P===e;return(0,i.jsxs)(tU,{active:o,onClick:()=>G(e),children:[a&&(0,i.jsx)("span",{style:{display:"inline-flex",color:o?c.w4.colors.accent:a.color,flexShrink:0},children:(0,i.jsx)(p.In,{name:a.icon,size:16,"aria-hidden":"true"})}),(0,i.jsx)("span",{style:{flex:1,textAlign:"left"},children:w[e]?.[Z]??e}),(0,i.jsx)(tJ,{active:o,children:er[e]??0})]},e)})})})]}),(0,i.jsx)(tQ,{})]})]}),(0,i.jsx)(tX,{bleed:"retreat"===A,children:"retreat"===A?(0,i.jsx)(ti,{locale:Z,greeting:tN(Z,D),userName:l?.name,pinnedApps:en,onSelect:s,t:et}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(tZ,{children:[(0,i.jsxs)(t0,{children:[(0,i.jsx)(t1,{children:(j=D.toLocaleDateString("pt"===Z?"pt-PT":"en-GB",{weekday:"long"}),M=D.getDate(),z=D.toLocaleDateString("pt"===Z?"pt-PT":"en-GB",{month:"long"}),`${j} \xb7 ${M} ${z}`.toUpperCase())}),E?.current&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t4,{children:"\xb7"}),(0,i.jsxs)(t2,{children:[(0,i.jsx)("span",{className:"ico",children:(E.current.is_day?tP[E.current.weather_code??0]:tI[E.current.weather_code??0]??tP[E.current.weather_code??0])??"\xb7"}),(0,i.jsxs)("span",{className:"temp",children:[Math.round(E.current.temperature_2m??0),"\xb0"]}),(0,i.jsx)("span",{className:"lbl",children:k("home.weather.city",Z)})]})]})]}),(0,i.jsxs)(t5,{children:[tN(Z,D),l?.name?(0,i.jsxs)(i.Fragment,{children:[", ",(0,i.jsx)("span",{className:"accent",children:l.name.split(" ")[0]})]}):null,"."]})]}),"home"===A&&!H&&0===en.length&&0===es.length&&(0,i.jsx)(tS,{t:et,onDismiss:K,onOpenPalette:b,onOpenPreferences:h}),"home"===A&&(0,i.jsx)(e6,{locale:Z,pinnedAppIds:a,recentAppIds:t,apps:T,appMeta:ea,onSelectApp:s,onTogglePin:r}),"apps"===A&&(0,i.jsxs)(i.Fragment,{children:[0===ei.length&&(null!==P||"All"!==L||(0,u.hasInterests)(C))&&(0,i.jsxs)(t7,{children:[(0,i.jsx)(t9,{children:k("home.emptyFiltered.title",Z)}),(0,i.jsx)(ae,{children:k("home.emptyFiltered.desc",Z)}),(0,i.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.sm},children:[(null!==P||"All"!==L)&&(0,i.jsx)(at,{type:"button",onClick:()=>{I(null),N("All")},style:{background:"transparent",color:c.w4.colors.accent,border:`1px solid ${c.w4.colors.border}`},children:k("home.emptyFiltered.clear",Z)}),h&&(0,i.jsx)(at,{type:"button",onClick:h,children:k("home.emptyFiltered.cta",Z)})]})]}),"All"===L&&!P&&en.length>0&&(0,i.jsxs)("div",{children:[(0,i.jsx)(t3,{children:k("pinned",Z)}),(0,i.jsx)(t8,{children:en.map((e,t)=>ec(e,ed++,{pinIdx:t,total:en.length}))})]}),"All"===L&&!P&&es.length>0&&(0,i.jsxs)("div",{children:[(0,i.jsx)(t3,{children:k("recentlyUsed",Z)}),(0,i.jsx)(t8,{children:es.map(e=>ec(e,ed++))})]}),eo?[..."suite"===eo.type?tF:tA.slice(1),"Other"].filter(e=>eo.groups[e]?.length>0).map(e=>(0,i.jsxs)("div",{children:[(0,i.jsx)(t3,{children:"suite"===eo.type?w[e]?.[Z]??e:$(e,Z)}),(0,i.jsxs)(t8,{children:[eo.groups[e].map(e=>ec(e,ed++)),("suite"===eo.type&&"AI Lab"===e||"category"===eo.type&&"Lab"===e)&&ep(ed++)]})]},e)):(0,i.jsxs)(t8,{children:[ei.map(e=>ec(e,ed++)),"Lab"===L&&ep(ed++)]})]})]})})]})]})})}let ai=(0,a(82791).U)("https://eqvzakschpdemcgexjyy.supabase.co","sb_publishable_D_UOsNIA7qD3929ZzReWLw_k8d8MxWL");function ao(){return ai.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin}})}function ar(){return ai.auth.signOut()}let an=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,as=l().div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${c.w4.colors.mainBg};
`,al=l().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${c.w4.spacing.lg};
  padding: 48px 40px;
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
  animation: ${an} 0.3s ease both;
  max-width: 360px;
  width: 100%;
  text-align: center;
`,ad=l().div`
  font-size: 40px;
  line-height: 1;
`,ac=l().h2`
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeLg};
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  margin: 0;
`,ap=l().p`
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeBase};
  color: ${c.w4.colors.mainTextMuted};
  margin: 0;
  line-height: 1.5;
`,au=l().button`
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
`,am=()=>(0,i.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 48 48",children:[(0,i.jsx)("path",{fill:"#EA4335",d:"M24 9.5c3.14 0 5.95 1.08 8.17 2.86l6.1-6.1C34.46 3.19 29.53 1 24 1 14.82 1 7.07 6.48 3.88 14.22l7.1 5.52C12.68 13.55 17.9 9.5 24 9.5z"}),(0,i.jsx)("path",{fill:"#4285F4",d:"M46.52 24.5c0-1.64-.15-3.22-.42-4.75H24v9h12.67c-.55 2.94-2.18 5.44-4.65 7.12l7.19 5.59C43.39 37.48 46.52 31.47 46.52 24.5z"}),(0,i.jsx)("path",{fill:"#FBBC05",d:"M10.98 28.26A14.57 14.57 0 0 1 9.5 24c0-1.48.25-2.91.68-4.26l-7.1-5.52A23.93 23.93 0 0 0 .5 24c0 3.87.93 7.52 2.58 10.74l7.9-6.48z"}),(0,i.jsx)("path",{fill:"#34A853",d:"M24 47c5.52 0 10.15-1.83 13.53-4.97l-7.19-5.59C28.47 37.82 26.36 38.5 24 38.5c-6.1 0-11.32-4.05-13.02-9.74l-7.9 6.48C6.07 42.54 14.45 47 24 47z"})]}),ag=l().button`
  background: none;
  border: none;
  color: ${c.w4.colors.mainTextMuted};
  font-family: ${c.w4.typography.fontFamily};
  font-size: 11px;
  cursor: pointer;
  padding: 0;
  &:hover { color: ${c.w4.colors.mainText}; }
`;function ah({appLabel:e,onBack:t}){return(0,i.jsx)(as,{children:(0,i.jsxs)(al,{children:[(0,i.jsx)(ad,{children:"\uD83D\uDD12"}),(0,i.jsx)(ac,{children:"Sign in required"}),(0,i.jsxs)(ap,{children:[(0,i.jsx)("strong",{style:{color:"inherit"},children:e})," is only available to signed-in users."]}),(0,i.jsxs)(au,{onClick:ao,children:[(0,i.jsx)(am,{}),"Continue with Google"]}),(0,i.jsx)(ag,{onClick:t,children:"← Back to home"})]})})}let af={async saveDoc(e,t,a){let{data:{user:i}}=await ai.auth.getUser();if(!i)throw Error("Not authenticated");let{data:o,error:r}=await ai.from("documents").insert({user_id:i.id,app_id:e,name:t,content:a,saved_at:new Date().toISOString()}).select("id").single();if(r)throw r;return o.id},async updateDoc(e,t,a){let{error:i}=await ai.from("documents").update({name:t,content:a,saved_at:new Date().toISOString()}).eq("id",e);if(i)throw i},async listDocs(e){let{data:t,error:a}=await ai.from("documents").select("id, app_id, name, content, saved_at").eq("app_id",e).order("saved_at",{ascending:!1});if(a)throw a;return(t??[]).map(e=>({id:e.id,appId:e.app_id,name:e.name,content:e.content,savedAt:new Date(e.saved_at).getTime()}))},async deleteDoc(e){let{error:t}=await ai.from("documents").delete().eq("id",e);if(t)throw t},async putSetting(e,t){let{data:{user:a}}=await ai.auth.getUser();if(!a)return;let{error:i}=await ai.from("settings").upsert({user_id:a.id,key:e,value:t},{onConflict:"user_id,key"});if(i)throw i},async getSetting(e){let{data:{user:t}}=await ai.auth.getUser();if(!t)return null;let{data:a,error:i}=await ai.from("settings").select("value").eq("key",e).single();return i?null:a?.value??null}};var ab=JSON.parse('{"j":[{"id":"manual","name":"Manual","icon":"book","defaultOpen":true,"children":[{"id":"manual-overview","name":"Atlantis Overview","label":"Manual — Atlantis Overview","icon":"home","file":"manual/atlantis-overview.md"},{"id":"manual-apps-catalog","name":"Apps Catalog","label":"Manual — Apps Catalog","icon":"grid","file":"manual/apps-catalog.md"},{"id":"manual-api-keys","name":"API Keys","label":"Manual — API Keys","icon":"key","file":"guides/api-keys.md"},{"id":"manual-finance","name":"Finance Guide","label":"Manual — Finance","icon":"briefcase","file":"manual/finance-guide.md"},{"id":"manual-daily","name":"Daily Manager Guide","label":"Manual — Daily Manager","icon":"calendar","file":"manual/daily-guide.md"},{"id":"manual-shortcuts","name":"Keyboard Shortcuts","label":"Manual — Keyboard Shortcuts","icon":"zap","file":"manual/keyboard-shortcuts.md"}]},{"id":"guides","name":"Guides","icon":"compass","children":[{"id":"diagrams","name":"Diagrams with Mermaid","label":"Guides — Mermaid Diagrams","icon":"git-branch","file":"guides/diagrams.md"},{"id":"prompt-lab-api-keys","name":"Prompt Lab API Keys","label":"Guides — Prompt Lab API Keys","icon":"key","file":"guides/prompt-lab-api-keys.md"},{"id":"api-keys","name":"All API Keys","label":"Guides — All API Keys","icon":"key","file":"guides/api-keys.md"},{"id":"widget-manifests","name":"Widget Manifests","label":"Guides — Widget Manifests","icon":"puzzle","file":"guides/widget-manifests.md"}]},{"id":"github","name":"GitHub","icon":"github","children":[{"id":"github-cli","name":"GitHub CLI (gh)","label":"GitHub — CLI Reference","icon":"terminal","file":"github/cli.md"},{"id":"github-actions","name":"GitHub Actions","label":"GitHub — Actions","icon":"zap","file":"github/actions.md"}]},{"id":"claude","name":"Claude AI","icon":"bot","children":[{"id":"claude-best-practices","name":"Best Practices","label":"Claude AI — Best Practices","icon":"lightbulb","file":"claude/best-practices.md"},{"id":"claude-prompts","name":"Prompt Tips","label":"Claude AI — Prompt Tips","icon":"message-square","file":"claude/prompts.md"}]},{"id":"devtools","name":"Developer Tools","icon":"wrench","children":[{"id":"devtools-extensions","name":"Useful Extensions","label":"Dev Tools — Extensions","icon":"layout-grid","file":"devtools/extensions.md"},{"id":"devtools-commands","name":"Useful Commands","label":"Dev Tools — Commands","icon":"terminal","file":"devtools/commands.md"}]}]}'),ax=JSON.parse('{"j":[{"id":"year1","name":"1.\xba Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-numeros","name":"N\xfameros at\xe9 20","icon":"hash","file":"math/pt/year1/numbers.md"},{"id":"y1-adicao","name":"Adi\xe7\xe3o","icon":"plus","file":"math/pt/year1/addition.md"},{"id":"y1-subtracao","name":"Subtra\xe7\xe3o","icon":"minus","file":"math/pt/year1/subtraction.md"},{"id":"y1-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year1/geometria.md"},{"id":"y1-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year1/medidas.md"}]},{"id":"year2","name":"2.\xba Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-numeros","name":"N\xfameros at\xe9 100","icon":"hash","file":"math/pt/year2/numbers.md"},{"id":"y2-adicao","name":"Adi\xe7\xe3o com Transporte","icon":"plus","file":"math/pt/year2/addition.md"},{"id":"y2-subtracao","name":"Subtra\xe7\xe3o com Empr\xe9stimo","icon":"minus","file":"math/pt/year2/subtraction.md"},{"id":"y2-tabuadas","name":"Tabuadas \xd7 2, \xd7 5, \xd7 10","icon":"x","file":"math/pt/year2/multiplication.md"},{"id":"y2-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year2/geometria.md"},{"id":"y2-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year2/medidas.md"}]},{"id":"year3","name":"3.\xba Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-numeros","name":"N\xfameros at\xe9 1000","icon":"hash","file":"math/pt/year3/numbers.md"},{"id":"y3-multiplicacao","name":"Tabuadas \xd7 3 ao \xd7 9","icon":"x","file":"math/pt/year3/multiplication.md"},{"id":"y3-divisao","name":"Divis\xe3o","icon":"slash","file":"math/pt/year3/division.md"},{"id":"y3-fracoes","name":"Fra\xe7\xf5es","icon":"pie-chart","file":"math/pt/year3/fractions.md"},{"id":"y3-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year3/geometria.md"},{"id":"y3-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year3/medidas.md"}]},{"id":"year4","name":"4.\xba Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-numeros","name":"N\xfameros at\xe9 1 000 000","icon":"hash","file":"math/pt/year4/numbers.md"},{"id":"y4-multiplicacao","name":"Multiplica\xe7\xe3o","icon":"x","file":"math/pt/year4/multiplication.md"},{"id":"y4-divisao","name":"Divis\xe3o com Resto","icon":"slash","file":"math/pt/year4/division.md"},{"id":"y4-decimais","name":"N\xfameros Decimais","icon":"circle-dot","file":"math/pt/year4/decimals.md"},{"id":"y4-geometria","name":"Geometria","icon":"triangle","file":"math/pt/year4/geometria.md"},{"id":"y4-medidas","name":"Medidas","icon":"ruler","file":"math/pt/year4/medidas.md"},{"id":"y4-dados","name":"Tratamento de Dados","icon":"bar-chart-2","file":"math/pt/year4/dados.md"}]},{"id":"resources","name":"Recursos","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-tabuadas","name":"Tabuadas","icon":"grid","file":"math/pt/resources/tabuadas.md"},{"id":"res-formas","name":"Formas Geom\xe9tricas","icon":"hexagon","file":"math/pt/resources/formas.md"},{"id":"res-areas","name":"\xc1reas e Per\xedmetros","icon":"square","file":"math/pt/resources/areas.md"},{"id":"res-unidades","name":"Unidades de Medida","icon":"ruler","file":"math/pt/resources/unidades.md"},{"id":"res-romanos","name":"N\xfameros Romanos","icon":"landmark","file":"math/pt/resources/romanos.md"},{"id":"res-relogio","name":"Rel\xf3gio Interativo","icon":"clock","file":"math/pt/resources/relogio.md"}]}]}'),ay=JSON.parse('{"j":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-numeros","name":"Numbers to 20","icon":"hash","file":"math/en/year1/numbers.md"},{"id":"y1-adicao","name":"Addition","icon":"plus","file":"math/en/year1/addition.md"},{"id":"y1-subtracao","name":"Subtraction","icon":"minus","file":"math/en/year1/subtraction.md"},{"id":"y1-geometria","name":"Geometry","icon":"triangle","file":"math/en/year1/geometry.md"},{"id":"y1-medidas","name":"Measurements","icon":"ruler","file":"math/en/year1/measures.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-numeros","name":"Numbers to 100","icon":"hash","file":"math/en/year2/numbers.md"},{"id":"y2-adicao","name":"Addition with Carrying","icon":"plus","file":"math/en/year2/addition.md"},{"id":"y2-subtracao","name":"Subtraction with Borrowing","icon":"minus","file":"math/en/year2/subtraction.md"},{"id":"y2-tabuadas","name":"Times Tables \xd7 2, \xd7 5, \xd7 10","icon":"x","file":"math/en/year2/multiplication.md"},{"id":"y2-geometria","name":"Geometry","icon":"triangle","file":"math/en/year2/geometry.md"},{"id":"y2-medidas","name":"Measurements","icon":"ruler","file":"math/en/year2/measures.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-numeros","name":"Numbers to 1000","icon":"hash","file":"math/en/year3/numbers.md"},{"id":"y3-multiplicacao","name":"Times Tables \xd7 3 to \xd7 9","icon":"x","file":"math/en/year3/multiplication.md"},{"id":"y3-divisao","name":"Division","icon":"slash","file":"math/en/year3/division.md"},{"id":"y3-fracoes","name":"Fractions","icon":"pie-chart","file":"math/en/year3/fractions.md"},{"id":"y3-geometria","name":"Geometry","icon":"triangle","file":"math/en/year3/geometry.md"},{"id":"y3-medidas","name":"Measurements","icon":"ruler","file":"math/en/year3/measures.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-numeros","name":"Numbers to 1 000 000","icon":"hash","file":"math/en/year4/numbers.md"},{"id":"y4-multiplicacao","name":"Multiplication","icon":"x","file":"math/en/year4/multiplication.md"},{"id":"y4-divisao","name":"Division with Remainder","icon":"slash","file":"math/en/year4/division.md"},{"id":"y4-decimais","name":"Decimal Numbers","icon":"circle-dot","file":"math/en/year4/decimals.md"},{"id":"y4-geometria","name":"Geometry","icon":"triangle","file":"math/en/year4/geometry.md"},{"id":"y4-medidas","name":"Measurements","icon":"ruler","file":"math/en/year4/measures.md"},{"id":"y4-dados","name":"Data Handling","icon":"bar-chart-2","file":"math/en/year4/data.md"}]},{"id":"resources","name":"Resources","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-tabuadas","name":"Times Tables","icon":"grid","file":"math/en/resources/timestables.md"},{"id":"res-formas","name":"Geometric Shapes","icon":"hexagon","file":"math/en/resources/shapes.md"},{"id":"res-areas","name":"Areas & Perimeters","icon":"square","file":"math/en/resources/areas.md"},{"id":"res-unidades","name":"Units of Measurement","icon":"ruler","file":"math/en/resources/units.md"},{"id":"res-romanos","name":"Roman Numerals","icon":"landmark","file":"math/en/resources/roman.md"},{"id":"res-relogio","name":"Interactive Clock","icon":"clock","file":"math/en/resources/clock.md"}]}]}'),aw=JSON.parse('{"j":[{"id":"year1","name":"1.\xba Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year1/leitura.md"},{"id":"y1-gramatica","name":"Gram\xe1tica","icon":"type","file":"portuguese/pt/year1/gramatica.md"},{"id":"y1-vocabulario","name":"Vocabul\xe1rio","icon":"list","file":"portuguese/pt/year1/vocabulario.md"},{"id":"y1-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year1/ortografia.md"}]},{"id":"year2","name":"2.\xba Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year2/leitura.md"},{"id":"y2-gramatica","name":"Gram\xe1tica","icon":"type","file":"portuguese/pt/year2/gramatica.md"},{"id":"y2-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year2/texto.md"},{"id":"y2-vocabulario","name":"Vocabul\xe1rio","icon":"list","file":"portuguese/pt/year2/vocabulario.md"},{"id":"y2-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year2/ortografia.md"}]},{"id":"year3","name":"3.\xba Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year3/leitura.md"},{"id":"y3-gramatica","name":"Gram\xe1tica","icon":"type","file":"portuguese/pt/year3/gramatica.md"},{"id":"y3-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year3/texto.md"},{"id":"y3-vocabulario","name":"Vocabul\xe1rio","icon":"list","file":"portuguese/pt/year3/vocabulario.md"},{"id":"y3-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year3/ortografia.md"}]},{"id":"year4","name":"4.\xba Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-leitura","name":"Leitura e Escrita","icon":"book","file":"portuguese/pt/year4/leitura.md"},{"id":"y4-gramatica","name":"Gram\xe1tica","icon":"type","file":"portuguese/pt/year4/gramatica.md"},{"id":"y4-texto","name":"Tipos de Texto","icon":"file-text","file":"portuguese/pt/year4/texto.md"},{"id":"y4-vocabulario","name":"Vocabul\xe1rio","icon":"list","file":"portuguese/pt/year4/vocabulario.md"},{"id":"y4-ortografia","name":"Ortografia","icon":"pen-tool","file":"portuguese/pt/year4/ortografia.md"}]},{"id":"resources","name":"Recursos","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-alfabeto","name":"Alfabeto e Sons","icon":"a-large-small","file":"portuguese/pt/resources/alfabeto.md"},{"id":"res-pontuacao","name":"Sinais de Pontua\xe7\xe3o","icon":"circle-dot","file":"portuguese/pt/resources/pontuacao.md"},{"id":"res-classes","name":"Classes de Palavras","icon":"layers","file":"portuguese/pt/resources/classes.md"},{"id":"res-verbos","name":"Verbos — Conjuga\xe7\xe3o","icon":"zap","file":"portuguese/pt/resources/verbos.md"}]}]}'),av=JSON.parse('{"j":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year1/reading.md"},{"id":"y1-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year1/grammar.md"},{"id":"y1-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year1/vocabulary.md"},{"id":"y1-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year1/spelling.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year2/reading.md"},{"id":"y2-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year2/grammar.md"},{"id":"y2-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year2/texttypes.md"},{"id":"y2-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year2/vocabulary.md"},{"id":"y2-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year2/spelling.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year3/reading.md"},{"id":"y3-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year3/grammar.md"},{"id":"y3-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year3/texttypes.md"},{"id":"y3-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year3/vocabulary.md"},{"id":"y3-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year3/spelling.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-leitura","name":"Reading & Writing","icon":"book","file":"portuguese/en/year4/reading.md"},{"id":"y4-gramatica","name":"Grammar","icon":"type","file":"portuguese/en/year4/grammar.md"},{"id":"y4-texto","name":"Text Types","icon":"file-text","file":"portuguese/en/year4/texttypes.md"},{"id":"y4-vocabulario","name":"Vocabulary","icon":"list","file":"portuguese/en/year4/vocabulary.md"},{"id":"y4-ortografia","name":"Spelling","icon":"pen-tool","file":"portuguese/en/year4/spelling.md"}]},{"id":"resources","name":"Resources","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-alfabeto","name":"Alphabet & Sounds","icon":"a-large-small","file":"portuguese/en/resources/alphabet.md"},{"id":"res-pontuacao","name":"Punctuation Marks","icon":"circle-dot","file":"portuguese/en/resources/punctuation.md"},{"id":"res-classes","name":"Word Classes","icon":"layers","file":"portuguese/en/resources/wordclasses.md"},{"id":"res-verbos","name":"Verb Conjugation","icon":"zap","file":"portuguese/en/resources/verbs.md"}]}]}'),a$=JSON.parse('{"j":[{"id":"year1","name":"1.\xba Ano","icon":"①","defaultOpen":false,"children":[{"id":"y1-corpo","name":"O Meu Corpo","icon":"activity","file":"science/pt/year1/corpo.md"},{"id":"y1-familia","name":"A Minha Fam\xedlia","icon":"heart","file":"science/pt/year1/familia.md"},{"id":"y1-escola","name":"A Minha Escola","icon":"map","file":"science/pt/year1/escola.md"},{"id":"y1-seres-vivos","name":"Os Seres Vivos","icon":"feather","file":"science/pt/year1/seresvivos.md"},{"id":"y1-estacoes","name":"Esta\xe7\xf5es do Ano","icon":"sun","file":"science/pt/year1/estacoes.md"}]},{"id":"year2","name":"2.\xba Ano","icon":"②","defaultOpen":false,"children":[{"id":"y2-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year2/corpo.md"},{"id":"y2-saude","name":"Sa\xfade e Higiene","icon":"heart","file":"science/pt/year2/saude.md"},{"id":"y2-animais","name":"Os Animais","icon":"feather","file":"science/pt/year2/animais.md"},{"id":"y2-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year2/plantas.md"},{"id":"y2-transportes","name":"Meios de Transporte","icon":"truck","file":"science/pt/year2/transportes.md"},{"id":"y2-orientacao","name":"Orienta\xe7\xe3o e Mapas","icon":"compass","file":"science/pt/year2/orientacao.md"}]},{"id":"year3","name":"3.\xba Ano","icon":"③","defaultOpen":false,"children":[{"id":"y3-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year3/corpo.md"},{"id":"y3-saude","name":"Sa\xfade e Higiene","icon":"heart","file":"science/pt/year3/saude.md"},{"id":"y3-animais","name":"Os Animais","icon":"feather","file":"science/pt/year3/animais.md"},{"id":"y3-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year3/plantas.md"},{"id":"y3-portugal","name":"Portugal","icon":"map","file":"science/pt/year3/portugal.md"},{"id":"y3-rochas","name":"Rochas e Solo","icon":"mountain","file":"science/pt/year3/rochas.md"},{"id":"y3-astros","name":"Os Astros","icon":"star","file":"science/pt/year3/astros.md"}]},{"id":"year4","name":"4.\xba Ano","icon":"④","defaultOpen":false,"children":[{"id":"y4-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/year4/corpo.md"},{"id":"y4-saude","name":"Sa\xfade e Higiene","icon":"heart","file":"science/pt/year4/saude.md"},{"id":"y4-animais","name":"Os Animais","icon":"feather","file":"science/pt/year4/animais.md"},{"id":"y4-plantas","name":"As Plantas","icon":"leaf","file":"science/pt/year4/plantas.md"},{"id":"y4-portugal","name":"Portugal","icon":"map","file":"science/pt/year4/portugal.md"},{"id":"y4-historia","name":"Hist\xf3ria de Portugal","icon":"landmark","file":"science/pt/year4/historia.md"},{"id":"y4-economia","name":"Atividades Econ\xf3micas","icon":"briefcase","file":"science/pt/year4/economia.md"},{"id":"y4-rios","name":"Rios e Serras","icon":"waves","file":"science/pt/year4/rios.md"}]},{"id":"resources","name":"Recursos","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-corpo","name":"O Corpo Humano","icon":"activity","file":"science/pt/resources/corpo.md"},{"id":"res-agua","name":"O Ciclo da \xc1gua","icon":"droplets","file":"science/pt/resources/agua.md"},{"id":"res-solar","name":"O Sistema Solar","icon":"sun","file":"science/pt/resources/solar.md"},{"id":"res-animais","name":"Classifica\xe7\xe3o dos Animais","icon":"feather","file":"science/pt/resources/animais.md"}]}]}'),ak=JSON.parse('{"j":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"y1-corpo","name":"My Body","icon":"activity","file":"science/en/year1/body.md"},{"id":"y1-familia","name":"My Family","icon":"heart","file":"science/en/year1/family.md"},{"id":"y1-escola","name":"My School","icon":"map","file":"science/en/year1/school.md"},{"id":"y1-seres-vivos","name":"Living Things","icon":"feather","file":"science/en/year1/livingthings.md"},{"id":"y1-estacoes","name":"Seasons of the Year","icon":"sun","file":"science/en/year1/seasons.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"y2-corpo","name":"The Human Body","icon":"activity","file":"science/en/year2/body.md"},{"id":"y2-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year2/health.md"},{"id":"y2-animais","name":"Animals","icon":"feather","file":"science/en/year2/animals.md"},{"id":"y2-plantas","name":"Plants","icon":"leaf","file":"science/en/year2/plants.md"},{"id":"y2-transportes","name":"Transport","icon":"truck","file":"science/en/year2/transport.md"},{"id":"y2-orientacao","name":"Orientation & Maps","icon":"compass","file":"science/en/year2/orientation.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"y3-corpo","name":"The Human Body","icon":"activity","file":"science/en/year3/body.md"},{"id":"y3-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year3/health.md"},{"id":"y3-animais","name":"Animals","icon":"feather","file":"science/en/year3/animals.md"},{"id":"y3-plantas","name":"Plants","icon":"leaf","file":"science/en/year3/plants.md"},{"id":"y3-portugal","name":"Portugal","icon":"map","file":"science/en/year3/portugal.md"},{"id":"y3-rochas","name":"Rocks & Soil","icon":"mountain","file":"science/en/year3/rocks.md"},{"id":"y3-astros","name":"Space & Stars","icon":"star","file":"science/en/year3/space.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"y4-corpo","name":"The Human Body","icon":"activity","file":"science/en/year4/body.md"},{"id":"y4-saude","name":"Health & Hygiene","icon":"heart","file":"science/en/year4/health.md"},{"id":"y4-animais","name":"Animals","icon":"feather","file":"science/en/year4/animals.md"},{"id":"y4-plantas","name":"Plants","icon":"leaf","file":"science/en/year4/plants.md"},{"id":"y4-portugal","name":"Portugal","icon":"map","file":"science/en/year4/portugal.md"},{"id":"y4-historia","name":"History of Portugal","icon":"landmark","file":"science/en/year4/history.md"},{"id":"y4-economia","name":"Economic Activities","icon":"briefcase","file":"science/en/year4/economy.md"},{"id":"y4-rios","name":"Rivers & Mountains","icon":"waves","file":"science/en/year4/rivers.md"}]},{"id":"resources","name":"Resources","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-corpo","name":"The Human Body","icon":"activity","file":"science/en/resources/body.md"},{"id":"res-agua","name":"The Water Cycle","icon":"droplets","file":"science/en/resources/water.md"},{"id":"res-solar","name":"The Solar System","icon":"sun","file":"science/en/resources/solar.md"},{"id":"res-animais","name":"Animal Classification","icon":"feather","file":"science/en/resources/animals.md"}]}]}'),aj=JSON.parse('{"j":[{"id":"year1","name":"1.\xba Ano","icon":"①","defaultOpen":false,"children":[{"id":"e1-greetings","name":"Cumprimentos","icon":"hand","file":"english/pt/year1/greetings.md"},{"id":"e1-numbers","name":"N\xfameros 1–10","icon":"hash","file":"english/pt/year1/numbers.md"},{"id":"e1-colors","name":"Cores","icon":"palette","file":"english/pt/year1/colors.md"},{"id":"e1-animals","name":"Animais","icon":"feather","file":"english/pt/year1/animals.md"},{"id":"e1-family","name":"Fam\xedlia","icon":"heart","file":"english/pt/year1/family.md"},{"id":"e1-classroom","name":"Sala de Aula","icon":"map","file":"english/pt/year1/classroom.md"}]},{"id":"year2","name":"2.\xba Ano","icon":"②","defaultOpen":false,"children":[{"id":"e2-food","name":"Comida","icon":"apple","file":"english/pt/year2/food.md"},{"id":"e2-body","name":"Corpo Humano","icon":"activity","file":"english/pt/year2/body.md"},{"id":"e2-weather","name":"Tempo e Clima","icon":"cloud","file":"english/pt/year2/weather.md"},{"id":"e2-days","name":"Dias e Meses","icon":"calendar","file":"english/pt/year2/days.md"},{"id":"e2-clothes","name":"Roupa","icon":"shirt","file":"english/pt/year2/clothes.md"},{"id":"e2-house","name":"A Casa","icon":"home","file":"english/pt/year2/house.md"}]},{"id":"year3","name":"3.\xba Ano","icon":"③","defaultOpen":false,"children":[{"id":"e3-routines","name":"Rotinas Di\xe1rias","icon":"clock","file":"english/pt/year3/routines.md"},{"id":"e3-sports","name":"Desportos","icon":"trophy","file":"english/pt/year3/sports.md"},{"id":"e3-nature","name":"Natureza","icon":"leaf","file":"english/pt/year3/nature.md"},{"id":"e3-directions","name":"Dire\xe7\xf5es","icon":"compass","file":"english/pt/year3/directions.md"},{"id":"e3-time","name":"As Horas","icon":"watch","file":"english/pt/year3/time.md"},{"id":"e3-jobs","name":"Profiss\xf5es","icon":"briefcase","file":"english/pt/year3/jobs.md"}]},{"id":"year4","name":"4.\xba Ano","icon":"④","defaultOpen":false,"children":[{"id":"e4-past","name":"Passado Simples","icon":"clock","file":"english/pt/year4/past.md"},{"id":"e4-comparatives","name":"Comparativos","icon":"bar-chart-2","file":"english/pt/year4/comparatives.md"},{"id":"e4-travel","name":"Viagens","icon":"plane","file":"english/pt/year4/travel.md"},{"id":"e4-media","name":"M\xe9dia e Tecnologia","icon":"monitor","file":"english/pt/year4/media.md"},{"id":"e4-health","name":"Sa\xfade","icon":"heart","file":"english/pt/year4/health.md"},{"id":"e4-environment","name":"Ambiente","icon":"globe","file":"english/pt/year4/environment.md"}]},{"id":"year5","name":"5.\xba Ano","icon":"⑤","defaultOpen":false,"children":[{"id":"e5-future","name":"Futuro Simples","icon":"arrow-right","file":"english/pt/year5/future.md"},{"id":"e5-conditionals","name":"Condicionais","icon":"git-branch","file":"english/pt/year5/conditionals.md"},{"id":"e5-culture","name":"Cultura","icon":"landmark","file":"english/pt/year5/culture.md"},{"id":"e5-technology","name":"Tecnologia","icon":"cpu","file":"english/pt/year5/technology.md"},{"id":"e5-debate","name":"Debate e Opini\xe3o","icon":"message-circle","file":"english/pt/year5/debate.md"},{"id":"e5-writing","name":"Escrita Criativa","icon":"pen-tool","file":"english/pt/year5/writing.md"}]},{"id":"resources","name":"Recursos","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-eng-vocab","name":"Vocabul\xe1rio Essencial","icon":"list","file":"english/pt/resources/vocabulario.md"},{"id":"res-eng-verbs","name":"Tabela de Verbos","icon":"zap","file":"english/pt/resources/verbos.md"},{"id":"res-eng-phrases","name":"Frases \xdateis","icon":"message-square","file":"english/pt/resources/frases.md"},{"id":"res-eng-pronunciation","name":"Guia de Pron\xfancia","icon":"volume-2","file":"english/pt/resources/pronuncia.md"}]}]}'),aM=JSON.parse('{"j":[{"id":"year1","name":"Year 1","icon":"①","defaultOpen":false,"children":[{"id":"e1-greetings","name":"Greetings","icon":"hand","file":"english/en/year1/greetings.md"},{"id":"e1-numbers","name":"Numbers 1–10","icon":"hash","file":"english/en/year1/numbers.md"},{"id":"e1-colors","name":"Colors","icon":"palette","file":"english/en/year1/colors.md"},{"id":"e1-animals","name":"Animals","icon":"feather","file":"english/en/year1/animals.md"},{"id":"e1-family","name":"Family","icon":"heart","file":"english/en/year1/family.md"},{"id":"e1-classroom","name":"Classroom","icon":"map","file":"english/en/year1/classroom.md"}]},{"id":"year2","name":"Year 2","icon":"②","defaultOpen":false,"children":[{"id":"e2-food","name":"Food","icon":"apple","file":"english/en/year2/food.md"},{"id":"e2-body","name":"Body Parts","icon":"activity","file":"english/en/year2/body.md"},{"id":"e2-weather","name":"Weather","icon":"cloud","file":"english/en/year2/weather.md"},{"id":"e2-days","name":"Days & Months","icon":"calendar","file":"english/en/year2/days.md"},{"id":"e2-clothes","name":"Clothes","icon":"shirt","file":"english/en/year2/clothes.md"},{"id":"e2-house","name":"The House","icon":"home","file":"english/en/year2/house.md"}]},{"id":"year3","name":"Year 3","icon":"③","defaultOpen":false,"children":[{"id":"e3-routines","name":"Daily Routines","icon":"clock","file":"english/en/year3/routines.md"},{"id":"e3-sports","name":"Sports","icon":"trophy","file":"english/en/year3/sports.md"},{"id":"e3-nature","name":"Nature","icon":"leaf","file":"english/en/year3/nature.md"},{"id":"e3-directions","name":"Directions","icon":"compass","file":"english/en/year3/directions.md"},{"id":"e3-time","name":"Telling Time","icon":"watch","file":"english/en/year3/time.md"},{"id":"e3-jobs","name":"Jobs","icon":"briefcase","file":"english/en/year3/jobs.md"}]},{"id":"year4","name":"Year 4","icon":"④","defaultOpen":false,"children":[{"id":"e4-past","name":"Simple Past","icon":"clock","file":"english/en/year4/past.md"},{"id":"e4-comparatives","name":"Comparatives","icon":"bar-chart-2","file":"english/en/year4/comparatives.md"},{"id":"e4-travel","name":"Travel","icon":"plane","file":"english/en/year4/travel.md"},{"id":"e4-media","name":"Media & Technology","icon":"monitor","file":"english/en/year4/media.md"},{"id":"e4-health","name":"Health","icon":"heart","file":"english/en/year4/health.md"},{"id":"e4-environment","name":"Environment","icon":"globe","file":"english/en/year4/environment.md"}]},{"id":"year5","name":"Year 5","icon":"⑤","defaultOpen":false,"children":[{"id":"e5-future","name":"Simple Future","icon":"arrow-right","file":"english/en/year5/future.md"},{"id":"e5-conditionals","name":"Conditionals","icon":"git-branch","file":"english/en/year5/conditionals.md"},{"id":"e5-culture","name":"Culture","icon":"landmark","file":"english/en/year5/culture.md"},{"id":"e5-technology","name":"Technology","icon":"cpu","file":"english/en/year5/technology.md"},{"id":"e5-debate","name":"Debate & Opinion","icon":"message-circle","file":"english/en/year5/debate.md"},{"id":"e5-writing","name":"Creative Writing","icon":"pen-tool","file":"english/en/year5/writing.md"}]},{"id":"resources","name":"Resources","icon":"\uD83D\uDCDA","defaultOpen":false,"children":[{"id":"res-eng-vocab","name":"Essential Vocabulary","icon":"list","file":"english/en/resources/vocabulary.md"},{"id":"res-eng-verbs","name":"Verb Tables","icon":"zap","file":"english/en/resources/verbs.md"},{"id":"res-eng-phrases","name":"Useful Phrases","icon":"message-square","file":"english/en/resources/phrases.md"},{"id":"res-eng-pronunciation","name":"Pronunciation Guide","icon":"volume-2","file":"english/en/resources/pronunciation.md"}]}]}');let aS=["pad","jsonexplorer","playground","regexlab","codediff","promptlab"],az={pad:"#/pad",jsonexplorer:"#/jsonexplorer",playground:"#/playground",regexlab:"#/regexlab",codediff:"#/codediff",promptlab:"#/promptlab"},aC={pad:"file",jsonexplorer:"code",playground:"code",regexlab:"code",codediff:"code",promptlab:"message"};function aT(e,t=[]){let a=[];for(let i of e){let e=[...t,i.name];i.file&&a.push({id:i.id,label:i.label??i.name,subtitle:t.length>0?t.join(" \xb7 "):void 0,trail:e}),i.children?.length&&a.push(...aT(i.children,e))}return a}let aA=aT(ab.j),aF=[{hashPrefix:"math",label:"Matem\xe1tica \xb7 Maths",entries:[...aT(ax.j),...aT(ay.j)]},{hashPrefix:"portugues",label:"Portugu\xeas",entries:[...aT(aw.j),...aT(av.j)]},{hashPrefix:"estudodomeio",label:"Estudo do Meio \xb7 Science",entries:[...aT(a$.j),...aT(ak.j)]},{hashPrefix:"ingles",label:"Ingl\xeas \xb7 English",entries:[...aT(aj.j),...aT(aM.j)]}],aL=[{id:"saved-docs",async search(e){if(!e.trim())return[];let t=e.toLowerCase(),a=[];for(let e of(await Promise.allSettled(aS.map(async e=>{let t=await (0,c.Iu)(e);return{appId:e,docs:t}})))){if("fulfilled"!==e.status)continue;let{appId:i,docs:o}=e.value;for(let e of o.filter(e=>e.name.toLowerCase().includes(t)).slice(0,3))a.push({id:`doc:${e.id}`,label:e.name,subtitle:i,hash:`${az[i]}?doc=${e.id}`,iconName:aC[i],category:"doc"})}return a.slice(0,3)}},{id:"agenda",async search(e){if(!e.trim())return[];let t=e.toLowerCase(),a=null;try{a=await (0,c.PL)("agenda:events")}catch{return[]}if(!a)return[];let i={};try{i=JSON.parse(a)}catch{return[]}let o=[],r=new Date;for(let e=0;e<=6;e++){let a=new Date(r);a.setDate(a.getDate()+e);let n=a.toISOString().slice(0,10);for(let e of i[n]??[])if(e.title.toLowerCase().includes(t)&&o.push({id:`agenda:${e.id}`,label:e.title,subtitle:`${n} \xb7 ${e.time}`,hash:"#/daily",iconName:"calendar",category:"agenda"}),o.length>=3)break;if(o.length>=3)break}return o}},{id:"reading",async search(e){if(!e.trim())return[];let t=e.toLowerCase(),a=null;try{a=await (0,c.PL)("reading:state")}catch{return[]}if(!a)return[];let i={current:null,finished:[]};try{i=JSON.parse(a)}catch{return[]}let o=[];for(let e of(i.current&&i.current.title.toLowerCase().includes(t)&&o.push({id:"reading:current",label:i.current.title,subtitle:`${i.current.author} \xb7 p${i.current.page}/${i.current.pages}`,hash:"#/home",iconName:"book",category:"reading"}),i.finished)){if(o.length>=3)break;e.title.toLowerCase().includes(t)&&o.push({id:`reading:done:${e.finishedAt}`,label:e.title,subtitle:e.author,hash:"#/home",iconName:"book",category:"reading"})}return o.slice(0,3)}},{id:"blog-docs",async search(e){if(!e.trim())return[];let t=e.toLowerCase(),a=[];for(let e of aA){if(a.length>=3)break;`${e.label} ${e.subtitle??""}`.toLowerCase().includes(t)&&a.push({id:`blog:${e.id}`,label:e.label,subtitle:e.subtitle,hash:`#/blog/${e.id}`,iconName:"book",category:"blog"})}return a}},{id:"school-lessons",async search(e){if(!e.trim())return[];let t=e.toLowerCase(),a=[],i=new Set;for(let e of aF){for(let o of e.entries){if(a.length>=3)break;let r=`${e.hashPrefix}:${o.id}`;!i.has(r)&&`${o.label} ${o.subtitle??""}`.toLowerCase().includes(t)&&(i.add(r),a.push({id:`school:${r}`,label:o.label,subtitle:`${e.label}${o.subtitle?` \xb7 ${o.subtitle}`:""}`,hash:`#/${e.hashPrefix}/${o.id}`,iconName:"book",category:"school"}))}if(a.length>=3)break}return a}}];async function aN(e){if(!e.trim())return[];let t=await Promise.allSettled(aL.map(t=>t.search(e))),a=[];for(let e of t)if("fulfilled"===e.status&&a.push(...e.value),a.length>=15)break;return a.slice(0,15)}let aP=["palette.ask.suggest.summarizeDay","palette.ask.suggest.whatsTrending"],aI=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,aD=(0,d.keyframes)`
  from { opacity: 0; transform: scale(0.97) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,aR=l().div`
  position: fixed;
  inset: 0;
  z-index: ${c.w4.zIndex.modal};
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10vh;
  animation: ${aI} ${c.w4.transitions.fast};

  @media (max-width: ${c.w4.breakpoints.md}) {
    padding-top: 0;
    align-items: flex-end;
  }
`,aE=l().div`
  width: 780px;
  max-width: calc(100vw - 24px);
  background: ${c.w4.colors.surfaceRaised};
  border: 1px solid ${c.w4.colors.borderStrong};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${c.w4.elevation.lg};
  animation: ${aD} ${c.w4.transitions.base};
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
`,aH=l().div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 22px;
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
`,aO=l().div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${({active:e})=>e?c.w4.colors.accent:c.w4.colors.mainTextMuted};
  transition: color ${c.w4.transitions.fast};
`,aK=l().input`
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
`,aq=l().kbd`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.04em;
  color: ${c.w4.colors.mainTextFaint};
  padding: 3px 8px;
  border: 1px solid ${c.w4.colors.border};
  border-radius: 5px;
  background: transparent;
`,aB=l().div`
  padding: 10px 16px;
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
`,aG=l().div`
  flex: 1;
  overflow-y: auto;
  padding: 6px 0 12px;
  min-height: 140px;
  max-height: 60vh;

  @media (max-width: ${c.w4.breakpoints.md}) {
    max-height: none;
  }
`,aW=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 22px 6px;
`,aY=l().span`
  font-size: 11px;
  font-weight: 700;
  font-family: ${c.w4.typography.fontFamilyMono};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${c.w4.colors.mainTextMuted};
  opacity: 0.65;
`,a_=l().span`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextFaint};
`,aV=l()("div",{shouldForwardProp:e=>"selected"!==e})`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 22px;
  cursor: pointer;
  background: ${({selected:e})=>e?c.w4.colors.accentMuted:"transparent"};
  transition: background ${c.w4.transitions.fast};

  &:hover { background: ${c.w4.colors.accentMuted}; }
`,aU=l()("div",{shouldForwardProp:e=>"tintColor"!==e&&"selected"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  background: ${({tintColor:e})=>`${e}1a`};
  border: 1px solid ${({tintColor:e,selected:t})=>t?`${e}66`:`${e}26`};
  transition: ${c.w4.transitions.fast};
`,aJ=l()("div",{shouldForwardProp:e=>"tintColor"!==e})`
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
`,aQ=l().div`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${c.w4.colors.mainTextMuted};
  background: transparent;
  flex-shrink: 0;
`,aX=l()("div",{shouldForwardProp:e=>"tintColor"!==e})`
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
`,aZ=l().div`
  flex: 1;
  min-width: 0;
`,a0=l()("div",{shouldForwardProp:e=>"selected"!==e})`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: ${({selected:e})=>e?c.w4.colors.accent:c.w4.colors.mainText};
  line-height: 1.25;
`,a1=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextFaint};
  margin-top: 3px;
  letter-spacing: 0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,a4=l().span`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
  white-space: nowrap;
`,a2=l().div`
  display: inline-flex;
  gap: 4px;
  flex-shrink: 0;
`,a5=l().kbd`
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
`,a3=l().div`
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
`,a8=l().div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 22px 24px;
  gap: 16px;
`,a6=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextFaint};
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,a7=l().div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`,a9=l().button`
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
`,ie=l().div`
  display: flex;
  flex-direction: column;
  padding: 12px 22px 16px;
  gap: 16px;
`,it=l().div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ia=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextFaint};
  margin-bottom: 2px;
`,ii=l().div`
  font-size: 14px;
  color: ${c.w4.colors.mainText};
  line-height: 1.5;
  font-weight: 500;
`,io=(0,d.keyframes)`
  0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
  40%           { opacity: 1;   transform: scale(1);   }
`,ir=l().div`
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
    animation: ${io} 1.4s ease-in-out infinite;

    &:nth-of-type(2) { animation-delay: 0.2s; }
    &:nth-of-type(3) { animation-delay: 0.4s; }
  }
`,is=l().div`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.danger};
  font-family: ${c.w4.typography.fontFamilyMono};
`,il=l().div`
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
`,id=l().div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 10px 22px;
  border-top: 1px solid ${c.w4.colors.borderSubtle};

  @media (max-width: ${c.w4.breakpoints.md}) {
    gap: 12px;
    padding: 8px 16px;
  }
`,ic=l().span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
`;function ip(e,t){if(!t)return!0;let a=t.toLowerCase();return e.label.toLowerCase().includes(a)||(e.meta?.toLowerCase().includes(a)??!1)}function iu({apps:e,recentIds:t,suites:a=[],games:n=[],actions:s=[],hasAsk:l=!1,groqKey:d,locale:g,initialScope:h,onNavigate:f,onClose:b}){let x=(0,o.useMemo)(()=>(0,m.Nx)(g,el),[g]),[y,w]=(0,o.useState)(""),[v,$]=(0,o.useState)(()=>"ask"!==h||l?h??"all":"all"),[k,j]=(0,o.useState)(0),[M,S]=(0,o.useState)([]),[z,C]=(0,o.useState)(!1),T=(0,o.useRef)([]),A=(0,o.useRef)(null),F=(0,o.useRef)(null),L=(0,o.useRef)(null),N=(0,o.useRef)(null),[P,I]=(0,o.useState)([]),D=(0,o.useRef)(null);(0,o.useEffect)(()=>{if("ask"!==v)return(null!==D.current&&clearTimeout(D.current),y.trim())?(D.current=setTimeout(()=>{aN(y).then(I)},200),()=>{null!==D.current&&clearTimeout(D.current)}):void I([])},[y,v]),(0,o.useEffect)(()=>(A.current?.focus(),()=>{N.current?.abort()}),[]),(0,o.useEffect)(()=>{T.current=M},[M]),(0,o.useEffect)(()=>{L.current?.scrollIntoView({behavior:"smooth"})},[M,z]);let R=(0,o.useMemo)(()=>{let i=new Set(t),o=e.map(e=>({id:`app:${e.id}`,kind:"app",label:e.label,meta:e.description,isRecent:i.has(e.id),appIcon:{iconName:e.icon,color:e.color},onConfirm:()=>{f(e.hash),b()}}));return[...a.map(e=>({id:`suite:${e.id}`,kind:"suite",label:e.name,meta:e.sub,glyphIcon:{iconName:e.iconName,color:e.color},shortcut:e.shortcut,onConfirm:()=>{e.onConfirm(),b()}})),...o,...n.map(e=>({id:`game:${e.id}`,kind:"game",label:e.name,meta:x("palette.meta.game"),gameGlyph:{iconName:e.iconName,color:e.color},hash:e.hash,onConfirm:()=>{f(e.hash),b()}})),...s.map(e=>({id:`action:${e.id}`,kind:"action",label:e.label,meta:e.meta,glyphIcon:{iconName:e.iconName,color:e.color??c.w4.colors.accent},shortcut:e.shortcut,onConfirm:()=>{e.onClick(),b()}}))]},[e,a,n,s,t,f,b,x]),E=(0,o.useMemo)(()=>P.map(e=>({id:e.id,kind:"action",label:e.label,meta:e.subtitle,glyphIcon:e.iconName?{iconName:e.iconName,color:c.w4.colors.mainTextMuted}:void 0,hash:e.hash,onConfirm:()=>{f(e.hash),b()}})),[P,f,b]),H=(0,o.useMemo)(()=>{if("ask"===v)return[];let e=R.filter(e=>ip(e,y)),a=[],i=(e,t,i)=>{if(0!==i.length)for(let o of(a.push({kind:"header",label:x(t),key:e,count:i.length}),i))a.push({kind:"item",item:o})};return"recent"===v?i("recent","palette.recent",R.filter(e=>"app"===e.kind&&e.isRecent&&ip(e,y)).sort((e,a)=>t.indexOf(e.id.slice(4))-t.indexOf(a.id.slice(4)))):"jump"===v?(i("suites","palette.section.suites",e.filter(e=>"suite"===e.kind)),i("apps","palette.section.apps",e.filter(e=>"app"===e.kind)),i("games","palette.section.games",e.filter(e=>"game"===e.kind))):"actions"===v?(i("actions","palette.section.actions",e.filter(e=>"action"===e.kind)),i("content","palette.section.content",E)):(i("jump","palette.section.jump",e.filter(e=>"suite"===e.kind||"app"===e.kind||"game"===e.kind)),i("actions","palette.section.actions",e.filter(e=>"action"===e.kind)),i("content","palette.section.content",E),l&&d&&i("ask","palette.section.ask",aP.map((e,t)=>({id:`suggest:${t}`,kind:"suggest",label:x(e),meta:x("palette.ask.suggestMeta"),shortcut:["↵"],onConfirm:()=>{$("ask"),setTimeout(()=>{K(x(e))},0)}})))),a},[v,y,R,t,x,l,d,E]),O=(0,o.useMemo)(()=>H.filter(e=>"item"===e.kind),[H]);(0,o.useEffect)(()=>{j(0)},[v,y]),(0,o.useEffect)(()=>{let e=F.current;if(!e)return;let t=e.querySelectorAll("[data-selectable]");t[k]?.scrollIntoView({block:"nearest"})},[k]);let K=(0,o.useCallback)(async e=>{if(!d||!e.trim())return;let t=e.trim(),a=`turn-${Date.now()}`;S(e=>[...e,{id:a,question:t}]),C(!0),w("");let i=[];for(let e of T.current)e.answer&&(i.push({role:"user",content:e.question}),i.push({role:"assistant",content:e.answer}));N.current?.abort();let o=new AbortController;N.current=o;try{let e=await (0,u.askGroq)(t,{key:d,locale:"pt"===g?"pt":"en",signal:o.signal,history:i});o.signal.aborted||S(t=>t.map(t=>t.id===a?{...t,answer:e}:t))}catch(t){if(o.signal.aborted)return;let e=t instanceof Error?t.message:String(t);S(t=>t.map(t=>t.id===a?{...t,error:e}:t))}finally{o.signal.aborted||C(!1)}},[d,g]),q=(0,o.useCallback)(e=>{if("Escape"===e.key){if("ask"===v&&y.trim())return void w("");if("ask"===v&&M.length>0){N.current?.abort(),C(!1),S([]);return}return void b()}if("ask"===v){"Enter"===e.key&&y.trim()&&(e.preventDefault(),K(y.trim()));return}if("ArrowDown"===e.key)e.preventDefault(),j(e=>Math.min(e+1,O.length-1));else if("ArrowUp"===e.key)e.preventDefault(),j(e=>Math.max(e-1,0));else if("Enter"===e.key){let e=O[k];e&&e.item.onConfirm()}},[v,y,M.length,O,k,b,K]),B=(0,o.useCallback)(e=>{e.target===e.currentTarget&&b()},[b]),G="ask"===v?M.length>0?x("palette.ask.followUp"):x("palette.ask.placeholder"):x("palette.placeholder"),W=(0,o.useMemo)(()=>{let e=[{value:"all",label:x("palette.scope.all")},{value:"jump",label:x("palette.scope.jump")},{value:"actions",label:x("palette.scope.actions")}];return l&&d&&e.push({value:"ask",label:x("palette.scope.ask"),highlight:!0}),e.push({value:"recent",label:x("palette.scope.recent")}),e},[x,l,d]),Y=-1;return ec().createPortal((0,i.jsx)(aR,{onClick:B,children:(0,i.jsxs)(aE,{onClick:e=>e.stopPropagation(),children:[(0,i.jsxs)(aH,{children:[(0,i.jsx)(aO,{active:"ask"===v,children:(0,i.jsx)(p.In,{name:"ask"===v?"sparkle":"search",size:20,"aria-hidden":"true"})}),(0,i.jsx)(aK,{ref:A,placeholder:G,value:y,onChange:e=>w(e.target.value),onKeyDown:q,"aria-label":x("palette.search")}),(0,i.jsx)(aq,{children:"esc"})]}),(0,i.jsx)(aB,{children:(0,i.jsx)(p.tU,{tabs:W,value:v,onChange:$,"aria-label":x("palette.scope.ariaLabel")})}),"ask"===v?(0,i.jsx)(a3,{children:0!==M.length||z?(0,i.jsxs)(ie,{children:[M.map(e=>(0,i.jsxs)(r().Fragment,{children:[(0,i.jsxs)(it,{children:[(0,i.jsx)(ia,{children:x("palette.ask.you")}),(0,i.jsx)(ii,{children:e.question})]}),(0,i.jsxs)(it,{children:[(0,i.jsx)(ia,{children:x("palette.ask.atlantis")}),void 0!==e.answer?(0,i.jsx)(p.mQ,{children:e.answer}):void 0!==e.error?(0,i.jsx)(is,{children:e.error}):(0,i.jsxs)(ir,{"aria-label":x("palette.ask.thinking"),children:[(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{})]})]})]},e.id)),(0,i.jsx)("div",{ref:L})]}):(0,i.jsxs)(a8,{children:[(0,i.jsx)(a6,{children:x("palette.ask.suggestionsTitle")}),(0,i.jsx)(a7,{children:aP.map(e=>(0,i.jsx)(a9,{onClick:()=>{K(x(e))},type:"button",children:x(e)},e))}),(0,i.jsx)(a6,{style:{marginTop:4},children:x("palette.ask.hint")})]})}):(0,i.jsx)(aG,{ref:F,children:0===O.length?(0,i.jsxs)(il,{children:[(0,i.jsx)("div",{className:"icon",children:(0,i.jsx)(p.In,{name:"search",size:16,"aria-hidden":"true"})}),(0,i.jsxs)("div",{className:"title",children:[x("palette.noMatch")," ",y&&(0,i.jsxs)("span",{className:"query",children:["“",y,"”"]})]}),(0,i.jsx)("div",{className:"hint",children:x("palette.emptyHint")})]}):H.map((e,t)=>{if("header"===e.kind)return(0,i.jsxs)(aW,{children:[(0,i.jsx)(aY,{children:e.label}),(0,i.jsx)(a_,{children:e.count})]},`h-${e.key}`);let a=Y+=1,o=a===k,r=e.item;return(0,i.jsxs)(aV,{selected:o,"data-selectable":!0,onMouseEnter:()=>j(a),onClick:()=>r.onConfirm(),children:[r.appIcon&&(0,i.jsx)(aU,{tintColor:r.appIcon.color,selected:o,children:(0,i.jsx)(p.In,{name:r.appIcon.iconName,size:18,"aria-hidden":"true",color:r.appIcon.color})}),r.glyphIcon&&(0,i.jsx)(aJ,{tintColor:r.glyphIcon.color,children:(0,i.jsx)(p.In,{name:r.glyphIcon.iconName,size:18,"aria-hidden":"true"})}),r.gameGlyph&&(0,i.jsx)(aX,{tintColor:r.gameGlyph.color,children:(0,i.jsx)(p.In,{name:r.gameGlyph.iconName,size:18,"aria-hidden":"true",color:r.gameGlyph.color})}),"suggest"===r.kind&&(0,i.jsx)(aQ,{children:(0,i.jsx)(p.In,{name:"sparkle",size:18,"aria-hidden":"true"})}),(0,i.jsxs)(aZ,{children:[(0,i.jsx)(a0,{selected:o,children:r.label}),r.meta&&(0,i.jsx)(a1,{children:r.meta})]}),r.hash&&(0,i.jsx)(a4,{children:r.hash}),r.shortcut&&r.shortcut.length>0&&(0,i.jsx)(a2,{children:r.shortcut.map((e,t)=>(0,i.jsx)(a5,{children:e},t))})]},r.id+"-"+t)})}),(0,i.jsx)(id,{children:"ask"===v?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(ic,{children:[(0,i.jsx)(a5,{children:"↵"}),x("palette.hint.ask")]}),(0,i.jsxs)(ic,{children:[(0,i.jsx)(a5,{children:"esc"}),x("palette.hint.close")]})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(ic,{children:[(0,i.jsx)(a5,{children:"↑"}),(0,i.jsx)(a5,{children:"↓"}),x("palette.hint.navigate")]}),(0,i.jsxs)(ic,{children:[(0,i.jsx)(a5,{children:"↵"}),x("palette.hint.open")]}),(0,i.jsxs)(ic,{children:[(0,i.jsx)(a5,{children:"esc"}),x("palette.hint.close")]})]})})]})}),document.body)}let im="shell:cmdk-hint-dismissed",ig=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,ih=l().div`
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
  animation: ${ig} 0.25s ${c.w4.transitions.easing} both;
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
`,ib=l().button`
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
`,ix=l().button`
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
`;function iy({onOpenPalette:e,t}){let[a,r]=(0,o.useState)(()=>{try{return"1"===localStorage.getItem(im)}catch{return!1}});return((0,o.useEffect)(()=>{let e=e=>{e.key===im&&r("1"===e.newValue)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[]),a)?null:ec().createPortal((0,i.jsxs)(ih,{children:[(0,i.jsxs)(ib,{type:"button","aria-label":t("cmdk.hint.aria"),onClick:e,children:[(0,i.jsx)(p.ue,{children:"⌘K"}),(0,i.jsx)("span",{className:"hint-label",children:t("cmdk.hint.label")})]}),(0,i.jsx)(ix,{type:"button",className:"dismiss","aria-label":t("cmdk.hint.dismiss"),title:t("cmdk.hint.dismiss"),onClick:e=>{e.stopPropagation();try{localStorage.setItem(im,"1")}catch{}r(!0)},children:"\xd7"})]}),document.body)}var iw=a(87611);let iv=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,i$=l().div`
  flex: 1;
  overflow-y: auto;
  padding: ${c.w4.spacing.xl};
`,ik=l().div`
  max-width: 680px;
  margin: 0 auto;
  animation: ${iv} 0.4s ease;
`,ij=l().div`
  margin-bottom: ${c.w4.spacing.xl};
`,iM=l().h1`
  font-size: ${c.w4.typography.fontSizeXl};
  font-weight: 800;
  color: ${c.w4.colors.mainText};
  margin: 0 0 4px;
`,iS=l().p`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  margin: 0;
  line-height: 1.5;
`,iz=l().section`
  background: ${c.w4.colors.surface};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  padding: ${c.w4.spacing.lg};
  margin-bottom: ${c.w4.spacing.lg};
`,iC=l().h2`
  font-size: ${c.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  margin: 0 0 ${c.w4.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
`,iT=l().p`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  margin: 0 0 ${c.w4.spacing.lg};
  line-height: 1.5;
`,iA=l().div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: ${c.w4.spacing.md};

  &:last-of-type {
    margin-bottom: 0;
  }
`,iF=l().label`
  font-size: ${c.w4.typography.fontSizeSm};
  font-weight: 600;
  color: ${c.w4.colors.mainText};
  display: flex;
  align-items: center;
  gap: 6px;
`,iL=l().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 3px;
  background: ${({active:e})=>e?"rgba(63,185,80,0.15)":"rgba(139,148,158,0.15)"};
  color: ${({active:e})=>e?"#3fb950":c.w4.colors.mainTextMuted};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`,iN=l().span`
  font-size: 11px;
  color: ${c.w4.colors.mainTextMuted};
  font-weight: 400;
`,iP=l().div`
  display: flex;
  gap: 6px;
`,iI=l().div`
  flex: 1;
  position: relative;
`,iD=l().input`
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
`,iR=l().button`
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
`,iE=l().button`
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
`,iH=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${c.w4.spacing.md};
  margin-top: ${c.w4.spacing.md};
  border-top: 1px solid ${c.w4.colors.border};
`,iO=l().button`
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
`,iK=l().span`
  font-size: ${c.w4.typography.fontSizeSm};
  color: #3fb950;
  font-family: ${c.w4.typography.fontFamilyMono};
`,iq=l().div`
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
`,iB=l().div`
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.md};
  padding: ${c.w4.spacing.md};
  margin-bottom: ${c.w4.spacing.md};
  background: ${c.w4.colors.codeBg};

  &:last-of-type {
    margin-bottom: 0;
  }
`,iG=l().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  margin-bottom: ${c.w4.spacing.sm};
`,iW=l().span`
  font-size: 18px;
  line-height: 1;
`,iY=l().span`
  font-size: ${c.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${c.w4.colors.mainText};
`,i_=l().label`
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
`,iV=l().span`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  transition: color ${c.w4.transitions.fast};
`,iU=l().div`
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
`,iJ=l().p`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  text-align: center;
  padding: ${c.w4.spacing.md} 0;
  margin: 0;
  font-style: italic;
`,iQ=l().label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${c.w4.spacing.md} 0;
  border-bottom: 1px solid ${c.w4.colors.border};
  gap: ${c.w4.spacing.sm};
  cursor: pointer;
`,iX=l().div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,iZ=l().span`
  font-size: ${c.w4.typography.fontSizeBase};
  font-weight: 600;
  color: ${c.w4.colors.mainText};
`,i0=l().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
`,i1=l().div`
  padding-top: ${c.w4.spacing.md};
`,i4=l().div`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextMuted};
  margin-bottom: ${c.w4.spacing.sm};
`,i2=l().p`
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  margin: 0 0 ${c.w4.spacing.md};
  line-height: 1.5;
`,i5=l().div`
  display: flex;
  align-items: center;
  gap: ${c.w4.spacing.sm};
  padding: 8px 0;
  border-top: 1px solid ${c.w4.colors.borderSubtle};
  flex-wrap: wrap;

  @media (max-width: ${c.w4.breakpoints.md}) {
    gap: 6px;
  }
`,i3=l().span`
  font-size: 11px;
  font-family: ${c.w4.typography.fontFamilyMono};
  color: ${c.w4.colors.mainTextMuted};
  min-width: 2.5rem;
`,i8=l().input`
  width: 80px;
  padding: 5px 8px;
  background: ${c.w4.colors.codeBg};
  border: 1px solid ${c.w4.colors.codeBorder};
  border-radius: ${c.w4.borderRadius.sm};
  color: ${c.w4.colors.mainText};
  font-size: ${c.w4.typography.fontSizeSm};
  font-family: ${c.w4.typography.fontFamilyMono};
  outline: none;
  transition: border-color ${c.w4.transitions.base};

  &:focus { border-color: ${c.w4.colors.accent}; }
`,i6=l().select`
  flex: 1;
  min-width: 120px;
  padding: 5px 8px;
  background: ${c.w4.colors.codeBg};
  border: 1px solid ${c.w4.colors.codeBorder};
  border-radius: ${c.w4.borderRadius.sm};
  color: ${c.w4.colors.mainText};
  font-size: ${c.w4.typography.fontSizeSm};
  font-family: ${c.w4.typography.fontFamily};
  outline: none;
  cursor: pointer;
  transition: border-color ${c.w4.transitions.base};

  &:focus { border-color: ${c.w4.colors.accent}; }
`,i7=l().label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  cursor: pointer;
  white-space: nowrap;
`,i9=l().button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: none;
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.sm};
  color: ${c.w4.colors.mainTextMuted};
  font-size: ${c.w4.typography.fontSizeSm};
  cursor: pointer;
  margin-top: ${c.w4.spacing.sm};
  transition: border-color ${c.w4.transitions.fast}, color ${c.w4.transitions.fast};

  &:hover {
    border-color: ${c.w4.colors.accent};
    color: ${c.w4.colors.accent};
  }
`,oe=l().button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: none;
  border: 1px solid transparent;
  border-radius: ${c.w4.borderRadius.sm};
  color: ${c.w4.colors.mainTextMuted};
  cursor: pointer;
  flex-shrink: 0;
  transition: color ${c.w4.transitions.fast}, border-color ${c.w4.transitions.fast};

  &:hover {
    color: #e05252;
    border-color: rgba(224,82,82,0.4);
  }
`,ot=[{id:"groq",label:"Groq",placeholder:"gsk_...",help:"Used by Prompt Lab and Image Gen (enhance)",linkUrl:"https://console.groq.com/keys",linkLabel:"Get key"},{id:"gemini",label:"Google Gemini",placeholder:"AIza...",help:"Used by Prompt Lab",linkUrl:"https://aistudio.google.com/apikey",linkLabel:"Get key"},{id:"finnhub",label:"Finnhub",placeholder:"pk_...",help:"Stock quotes for the Markets widget",linkUrl:"https://finnhub.io/dashboard",linkLabel:"Get key"},{id:"tmdb",label:"TMDB (The Movie Database)",placeholder:"eyJhbGci...",help:"Movies & Series app — Read Access Token (v4 auth)",linkUrl:"https://www.themoviedb.org/settings/api",linkLabel:"Get key"},{id:"youtube",label:"YouTube Data API v3",placeholder:"AIza...",help:"YouTube Safe Feed app — free quota, no billing required",linkUrl:"https://console.cloud.google.com/apis/credentials",linkLabel:"Get key"}],oa="atlantis:api-keys",oi="atlantis:promptlab:keys",oo=[{widgetId:"shell",ruleId:"sync.error",labelKey:"notifications.source.syncError",defaultEnabled:!0},{widgetId:"shell",ruleId:"daily.achievement",labelKey:"notifications.source.dailyAchievement",defaultEnabled:!0},{widgetId:"shell",ruleId:"finance.budget",labelKey:"notifications.source.financeBudget",defaultEnabled:!0}],or={groq:"",gemini:"",finnhub:"",tmdb:"",youtube:""};function on(e,t){return`notifications:${e}:${t}:enabled`}function os({lang:e}){let[t,a]=(0,o.useState)(or),[r,n]=(0,o.useState)({}),[s,l]=(0,o.useState)(!1),[d,g]=(0,o.useState)(!1),[h,f]=(0,o.useState)({}),[b,x]=(0,o.useState)([]),[y,w]=(0,o.useState)({muteAll:!1,windows:[]}),[v,$]=(0,o.useState)([]),k=(0,o.useMemo)(()=>(0,m.Nx)(e,el),[e]),j="pt"===e;(0,o.useEffect)(()=>{let e=function(){try{let e=localStorage.getItem(oa);if(e)return{...or,...JSON.parse(e)};let t=localStorage.getItem(oi);if(t)return{...or,...JSON.parse(t)}}catch{}return{...or}}();a(e),(0,c.PL)(oa).then(t=>{if(t)try{let i={...or,...JSON.parse(t)},o={groq:e.groq||i.groq,gemini:e.gemini||i.gemini,finnhub:e.finnhub||i.finnhub,tmdb:e.tmdb||i.tmdb,youtube:e.youtube||i.youtube};a(o)}catch{}}),(0,u.loadSchedule)().then(e=>w(e)),(0,c.PL)("shell:dashboard-widgets").then(async e=>{let t=[];try{e&&(t=JSON.parse(e))}catch{}let a=new Set(t.map(e=>e.widgetId)),i=eo.filter(e=>a.has(e.id)&&e.notifications&&e.notifications.length>0);x(i);let o=i.flatMap(e=>(e.notifications??[]).map(e=>e.category)),r=oo.map(e=>e.ruleId),n=new Set,s=[];for(let e of[...o,...r])n.has(e)||(n.add(e),s.push(e));$(s);let l={};await Promise.all(i.flatMap(e=>(e.notifications??[]).map(async t=>{let a=on(e.id,t.id),i=await (0,c.PL)(a),o=!1!==t.defaultEnabled;l[`${e.id}:${t.id}`]=null===i?o:"false"!==i}))),await Promise.all(oo.map(async e=>{let t=on(e.widgetId,e.ruleId),a=await (0,c.PL)(t);l[`${e.widgetId}:${e.ruleId}`]=null===a?e.defaultEnabled:"false"!==a})),f(l)})},[]);let M=(0,o.useCallback)((e,t)=>{a(a=>({...a,[e]:t})),g(!0),l(!1)},[]),S=(0,o.useCallback)(e=>{a(t=>({...t,[e]:""})),g(!0),l(!1)},[]),z=(0,o.useCallback)(()=>{let e;e=JSON.stringify(t),localStorage.setItem(oa,e),localStorage.setItem(oi,e),(0,c.Is)(oa,e),window.dispatchEvent(new CustomEvent("atlantis:api-keys-changed")),g(!1),l(!0),setTimeout(()=>l(!1),2500)},[t]),C=(0,o.useCallback)((e,t,a)=>{let i=`${e}:${t}`;f(e=>({...e,[i]:a})),(0,c.Is)(on(e,t),a?"true":"false")},[]),T=(0,o.useCallback)(e=>{let t={...y,muteAll:e};w(t),(0,u.saveSchedule)(t)},[y]),A=(0,o.useCallback)(()=>{let e={...y,windows:[...y.windows,{categoryId:"*",start:"22:00",end:"08:00"}]};w(e),(0,u.saveSchedule)(e)},[y]),F=(0,o.useCallback)(e=>{let t={...y,windows:y.windows.filter((t,a)=>a!==e)};w(t),(0,u.saveSchedule)(t)},[y]),L=(0,o.useCallback)((e,t)=>{let a={...y,windows:y.windows.map((a,i)=>i===e?{...a,...t}:a)};w(a),(0,u.saveSchedule)(a)},[y]),N=(0,o.useCallback)(e=>{if("*"===e)return k("notifications.settings.quietHours.global");for(let t of b)for(let a of t.notifications??[])if(a.category===e&&a.labelKey)return k(a.labelKey);for(let t of oo)if(t.ruleId===e)return k(t.labelKey);return e},[k,b]);return(0,i.jsx)(i$,{children:(0,i.jsxs)(ik,{children:[(0,i.jsxs)(ij,{children:[(0,i.jsx)(iM,{children:j?"Defini\xe7\xf5es":"Settings"}),(0,i.jsx)(iS,{children:j?"Gere as tuas chaves de API para os servi\xe7os de IA. As chaves s\xe3o guardadas no teu browser e sincronizadas com a tua conta.":"Manage your API keys for AI services. Keys are stored in your browser and synced with your account."})]}),(0,i.jsxs)(iz,{children:[(0,i.jsxs)(iC,{children:[(0,i.jsx)(p.In,{name:"key",size:16}),j?"Chaves de API":"API Keys"]}),(0,i.jsx)(iT,{children:j?"Estas chaves s\xe3o usadas pelo Prompt Lab e Image Gen. Cada servi\xe7o tem um plano gratuito.":"These keys are used by Prompt Lab and Image Gen. Each service has a free tier."}),ot.map(e=>{let a=t[e.id],o=r[e.id]??!1;return(0,i.jsxs)(iA,{children:[(0,i.jsxs)(iF,{children:[e.label,(0,i.jsx)(iL,{active:!!a,children:a?j?"ativa":"active":j?"vazia":"empty"}),(0,i.jsxs)(iN,{children:["— ",e.help]})]}),(0,i.jsxs)(iP,{children:[(0,i.jsxs)(iI,{children:[(0,i.jsx)(iD,{type:o?"text":"password",value:a,onChange:t=>M(e.id,t.target.value),placeholder:e.placeholder,spellCheck:!1,autoComplete:"off"}),(0,i.jsx)(iR,{onClick:()=>n(t=>({...t,[e.id]:!o})),title:o?"Hide":"Show",children:o?(0,i.jsx)(p.In,{name:"eye-off",size:13}):(0,i.jsx)(p.In,{name:"eye",size:13})})]}),(0,i.jsx)(iE,{danger:!0,onClick:()=>S(e.id),title:j?"Limpar":"Clear",children:(0,i.jsx)(p.In,{name:"trash",size:13})}),(0,i.jsx)("a",{href:e.linkUrl,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:(0,i.jsx)(iE,{title:e.linkLabel,children:(0,i.jsx)(p.In,{name:"external-link",size:13})})})]})]},e.id)}),(0,i.jsxs)(iH,{children:[s?(0,i.jsx)(iK,{children:j?"✓ Guardado":"✓ Saved"}):(0,i.jsx)("span",{}),(0,i.jsxs)(iO,{onClick:z,disabled:!d,children:[(0,i.jsx)(p.In,{name:"save",size:13}),j?"Guardar":"Save"]})]})]}),(0,i.jsxs)(iz,{children:[(0,i.jsxs)(iC,{children:[(0,i.jsx)(p.In,{name:"bell",size:16}),k("notifications.settings.title")]}),(0,i.jsx)(iT,{children:k("notifications.settings.desc")}),(0,i.jsxs)(iQ,{children:[(0,i.jsxs)(iX,{children:[(0,i.jsx)(iZ,{children:k("notifications.settings.muteAll")}),(0,i.jsx)(i0,{children:k("notifications.settings.muteAll.desc")})]}),(0,i.jsxs)(iU,{checked:y.muteAll,onClick:()=>T(!y.muteAll),title:k("notifications.settings.muteAll"),children:[(0,i.jsx)("input",{type:"checkbox",checked:y.muteAll,onChange:()=>{},"aria-label":k("notifications.settings.muteAll")}),(0,i.jsx)("span",{className:"track"}),(0,i.jsx)("span",{className:"thumb"})]})]}),0===b.length?(0,i.jsx)(iJ,{style:{marginTop:"16px"},children:k("notifications.settings.noWidgets")}):b.map(t=>(0,i.jsxs)(iB,{children:[(0,i.jsxs)(iG,{children:[(0,i.jsx)(iW,{children:t.icon}),(0,i.jsx)(iY,{children:"pt"===e?t.labels.pt:t.labels.en})]}),(t.notifications??[]).map(e=>{let a=`${t.id}:${e.id}`,o=!1!==e.defaultEnabled,r=h[a]??o,n=e.labelKey?k(e.labelKey):e.category;return(0,i.jsxs)(i_,{children:[(0,i.jsx)(iV,{className:"rule-label",children:n}),(0,i.jsxs)(iU,{checked:r,onClick:()=>C(t.id,e.id,!r),title:k("notifications.settings.enable"),children:[(0,i.jsx)("input",{type:"checkbox",checked:r,onChange:()=>{},"aria-label":n}),(0,i.jsx)("span",{className:"track"}),(0,i.jsx)("span",{className:"thumb"})]})]},e.id)})]},t.id)),(0,i.jsxs)(iB,{style:{marginTop:"12px"},children:[(0,i.jsxs)(iG,{children:[(0,i.jsx)(iW,{children:"\uD83D\uDD14"}),(0,i.jsx)(iY,{children:k("notifications.settings.shell.title")})]}),(0,i.jsx)("div",{style:{fontSize:"11px",fontFamily:c.w4.typography.fontFamilyMono,color:c.w4.colors.mainTextMuted,marginBottom:"4px"},children:k("notifications.settings.shell.desc")}),oo.map(e=>{let t=h[`${e.widgetId}:${e.ruleId}`]??e.defaultEnabled,a=k(e.labelKey);return(0,i.jsxs)(i_,{children:[(0,i.jsx)(iV,{className:"rule-label",children:a}),(0,i.jsxs)(iU,{checked:t,onClick:()=>C(e.widgetId,e.ruleId,!t),title:k("notifications.settings.enable"),children:[(0,i.jsx)("input",{type:"checkbox",checked:t,onChange:()=>{},"aria-label":a}),(0,i.jsx)("span",{className:"track"}),(0,i.jsx)("span",{className:"thumb"})]})]},e.ruleId)})]}),(0,i.jsxs)(i1,{children:[(0,i.jsx)(i4,{children:k("notifications.settings.quietHours")}),(0,i.jsx)(i2,{children:k("notifications.settings.quietHours.desc")}),y.windows.map((e,t)=>(0,i.jsxs)(i5,{children:[(0,i.jsxs)(i6,{value:e.categoryId,onChange:e=>L(t,{categoryId:e.target.value}),"aria-label":k("notifications.settings.quietHours.category"),children:[(0,i.jsx)("option",{value:"*",children:k("notifications.settings.quietHours.global")}),v.map(e=>(0,i.jsx)("option",{value:e,children:N(e)},e))]}),(0,i.jsxs)(i7,{children:[(0,i.jsx)("input",{type:"checkbox",checked:e.allDay??!1,onChange:e=>L(t,{allDay:e.target.checked})}),k("notifications.settings.quietHours.allDay")]}),!e.allDay&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(i3,{children:k("notifications.settings.quietHours.from")}),(0,i.jsx)(i8,{type:"time",value:e.start,onChange:e=>L(t,{start:e.target.value})}),(0,i.jsx)(i3,{children:k("notifications.settings.quietHours.to")}),(0,i.jsx)(i8,{type:"time",value:e.end,onChange:e=>L(t,{end:e.target.value})})]}),(0,i.jsx)(oe,{type:"button",title:k("notifications.settings.quietHours.remove"),onClick:()=>F(t),children:(0,i.jsx)(p.In,{name:"close",size:13})})]},t)),(0,i.jsxs)(i9,{type:"button",onClick:A,children:[(0,i.jsx)(p.In,{name:"plus",size:13}),k("notifications.settings.quietHours.add")]})]})]}),(0,i.jsxs)(iq,{children:[(0,i.jsx)(p.In,{name:"shield",size:14,style:{flexShrink:0,marginTop:2}}),(0,i.jsx)("span",{children:j?"As chaves s\xe3o enviadas diretamente do teu browser para o servi\xe7o de IA — nunca passam pelos nossos servidores. Podes remov\xea-las a qualquer momento.":"Keys are sent directly from your browser to the AI provider — they never pass through our servers. You can remove them at any time."})]})]})})}let ol=(0,d.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,od=(0,d.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-4px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,oc=l().div`
  position: fixed;
  inset: 0;
  z-index: 4000;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  animation: ${ol} 0.15s ease both;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${c.w4.spacing.md};
`,op=l().div`
  width: 100%;
  max-width: 480px;
  max-height: calc(100dvh - 32px);
  background: ${c.w4.colors.surfaceRaised};
  border: 1px solid ${c.w4.colors.border};
  border-radius: ${c.w4.borderRadius.lg};
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
  animation: ${od} 0.18s ease both;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,ou=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${c.w4.spacing.md} ${c.w4.spacing.lg};
  border-bottom: 1px solid ${c.w4.colors.border};
`,om=l().h2`
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  margin: 0;
`,og=l().button`
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
`,oh=l().div`
  padding: ${c.w4.spacing.lg};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.lg};
`,of=l().section`
  display: flex;
  flex-direction: column;
  gap: ${c.w4.spacing.sm};
`,ob=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  color: ${c.w4.colors.mainTextMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,ox=l().div`
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeSm};
  color: ${c.w4.colors.mainTextMuted};
  margin-top: -2px;
`,oy=l().div`
  display: flex;
  flex-wrap: wrap;
  gap: ${c.w4.spacing.sm};
`,ow=l().button`
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
`,ov=l().div`
  display: flex;
  justify-content: flex-end;
  gap: ${c.w4.spacing.sm};
  padding: ${c.w4.spacing.md} ${c.w4.spacing.lg};
  border-top: 1px solid ${c.w4.colors.border};
`,o$=l().button`
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
`,ok=l().button`
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
`;function oj({open:e,onClose:t,locale:a}){let[r,n]=(0,u.useProfile)(),[s,l]=(0,o.useState)(r),d=(0,o.useMemo)(()=>(0,m.Nx)("pt"===a?"pt":"en",el),[a]);if((0,o.useEffect)(()=>{e&&l(r)},[e,r]),(0,o.useEffect)(()=>{if(!e)return;let a=e=>{"Escape"===e.key&&t()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[e,t]),!e)return null;let g=async()=>{let e=s.ageMode!==r.ageMode||s.interests.length!==r.interests.length||s.interests.some(e=>!r.interests.includes(e));await n(s),t(),e&&(await (0,c.sW)("widget-cache:"),window.location.reload())},h="pt"===a?u.INTEREST_LABELS_PT:u.INTEREST_LABELS_EN,f="pt"===a?u.AGE_MODE_LABELS_PT:u.AGE_MODE_LABELS_EN;return ec().createPortal((0,i.jsx)(oc,{onClick:e=>{e.target===e.currentTarget&&t()},children:(0,i.jsxs)(op,{role:"dialog","aria-modal":"true","aria-labelledby":"profile-title",children:[(0,i.jsxs)(ou,{children:[(0,i.jsx)(om,{id:"profile-title",children:d("profile.title")}),(0,i.jsx)(og,{onClick:t,"aria-label":d("profile.close"),children:(0,i.jsx)(p.In,{name:"close",size:16})})]}),(0,i.jsxs)(oh,{children:[(0,i.jsxs)(of,{children:[(0,i.jsx)(ob,{children:d("profile.interests")}),(0,i.jsx)(ox,{children:d("profile.interestsHint")}),(0,i.jsx)(oy,{children:u.ALL_INTERESTS.map(e=>(0,i.jsx)(ow,{active:s.interests.includes(e),onClick:()=>{l(t=>({...t,interests:t.interests.includes(e)?t.interests.filter(t=>t!==e):[...t.interests,e]}))},"aria-pressed":s.interests.includes(e),children:h[e]},e))})]}),(0,i.jsxs)(of,{children:[(0,i.jsx)(ob,{children:d("profile.ageMode")}),(0,i.jsx)(ox,{children:d("profile.ageModeHint")}),(0,i.jsx)(oy,{children:["kid","teen","adult"].map(e=>(0,i.jsx)(ow,{active:s.ageMode===e,onClick:()=>{l(t=>({...t,ageMode:e}))},"aria-pressed":s.ageMode===e,children:f[e]},e))})]})]}),(0,i.jsxs)(ov,{children:[(0,i.jsx)(o$,{onClick:t,children:d("profile.cancel")}),(0,i.jsx)(ok,{onClick:g,children:d("profile.save")})]})]})}),document.body)}var oM=a(68360);let oS=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,oz=l().div`
  position: fixed;
  inset: 0;
  z-index: ${c.w4.zIndex.dropdown};
`,oC=l().div`
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
  animation: ${oS} 0.15s ease both;
  overflow: hidden;

  @media (max-width: ${c.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    width: auto;
    max-width: none;
    max-height: calc(100dvh - 48px - env(safe-area-inset-top, 0px) - 24px);
  }
`,oT=l().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
`,oA=l().div`
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextMuted};
`,oF=l().button`
  background: none;
  border: none;
  color: ${c.w4.colors.accent};
  font-family: ${c.w4.typography.fontFamily};
  font-size: ${c.w4.typography.fontSizeSm};
  cursor: pointer;
  padding: 2px 4px;

  &:hover { color: ${c.w4.colors.accentHover}; }
  &:disabled { color: ${c.w4.colors.mainTextFaint}; cursor: not-allowed; }
`,oL=l().div`
  flex: 1;
  overflow-y: auto;
`,oN=l().button`
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
`,oP=l().div`
  position: relative;
  display: block;
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
  transition: background ${c.w4.transitions.fast};

  &:hover { background: ${c.w4.colors.surfaceHover}; }
  &:hover .dismiss { opacity: 1; }
  &:last-child { border-bottom: none; }
`,oI=l().a`
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
`,oD=l().button`
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
`,oR=l().div`
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
`,oE=l().div`
  font-family: ${c.w4.typography.fontFamily};
  font-size: 13px;
  line-height: 1.4;
  color: ${c.w4.colors.mainText};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,oH=l().span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-right: 6px;
  vertical-align: -2px;
`,oO=l().div`
  padding: 32px 16px;
  text-align: center;
  font-family: ${c.w4.typography.fontFamily};
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
`;function oK({locale:e,state:t,anchor:a}){let r=(0,o.useMemo)(()=>(0,m.Nx)(e,el),[e]),{open:n,close:s,items:l,markAllRead:d,dismiss:g}=t;if(!n||!a)return null;let h=Math.round(a.bottom+8),f=Math.max(12,Math.round(window.innerWidth-a.right)),b=()=>{s(),window.location.hash="#/daily"};return ec().createPortal((0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(oz,{onClick:s}),(0,i.jsxs)(oC,{style:{top:h,right:f},role:"dialog","aria-label":r("notifications.title"),children:[(0,i.jsxs)(oT,{children:[(0,i.jsx)(oA,{children:r("notifications.title")}),(0,i.jsx)(oF,{onClick:d,disabled:0===l.length,children:r("notifications.markAllRead")})]}),(0,i.jsx)(oL,{children:0===l.length?(0,i.jsx)(oO,{children:r("notifications.empty")}):l.slice(0,5).map(e=>{let t=u.defaultStore.getCategory(e.category)?.badgeColor??c.w4.colors.mainTextMuted,a=u.defaultStore.getCategory(e.category)?.labelKey,o=a?r(a):e.category;if("daily.overdue"===e.category){let a=e.meta,n=a?.count??0,s=(a?.missions??[]).slice(0,4),l=1===n?r("notifications.daily.group.one"):r("notifications.daily.group.many",{count:n});return(0,i.jsxs)(oP,{children:[(0,i.jsxs)(oI,{as:"button",type:"button",onClick:b,children:[(0,i.jsxs)(oR,{color:t,children:[(0,i.jsx)("span",{className:"dot"}),o,(0,i.jsx)("span",{className:"time",children:(0,oM.e)(e.ts)})]}),(0,i.jsxs)(oE,{children:[(0,i.jsx)(oH,{children:s.map(e=>(0,p.n6)(e.emoji)?(0,i.jsx)(p.In,{name:e.emoji,size:14,style:{color:e.color??t}},e.id):(0,i.jsx)("span",{children:e.emoji},e.id))}),l]})]}),(0,i.jsx)(oD,{type:"button",className:"dismiss","aria-label":r("notifications.dismiss"),title:r("notifications.dismiss"),onClick:t=>{t.stopPropagation(),g(e.id)},children:"\xd7"})]},e.id)}let n=e.link?{href:e.link,target:"_blank",rel:"noopener noreferrer",onClick:()=>{g(e.id)}}:{as:"button",type:"button",onClick:()=>{g(e.id)}};return(0,i.jsxs)(oP,{children:[(0,i.jsxs)(oI,{...n,children:[(0,i.jsxs)(oR,{color:t,children:[(0,i.jsx)("span",{className:"dot"}),o,(0,i.jsx)("span",{className:"time",children:(0,m.aw)(new Date(e.ts).toISOString(),r)})]}),(0,i.jsx)(oE,{children:e.title})]}),(0,i.jsx)(oD,{type:"button",className:"dismiss","aria-label":r("notifications.dismiss"),title:r("notifications.dismiss"),onClick:t=>{t.stopPropagation(),g(e.id)},children:"\xd7"})]},e.id)})}),l.length>0&&(0,i.jsxs)(oN,{type:"button",onClick:()=>{s(),window.location.hash="#/notifications"},children:[(0,i.jsx)("span",{children:r("notifications.seeAll")}),(0,i.jsx)("span",{className:"count",children:l.length>5?`+${l.length-5}`:l.length})]})]})]}),document.body)}let oq=(0,d.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,oB=l().div`
  max-width: 720px;
  margin: 0 auto;
  padding: ${c.w4.spacing.xl} ${c.w4.spacing.lg} ${c.w4.spacing.xxl};
  animation: ${oq} 0.25s ease both;
`,oG=l().header`
  margin-bottom: ${c.w4.spacing.lg};
  padding-bottom: ${c.w4.spacing.md};
  border-bottom: 1px solid ${c.w4.colors.borderSubtle};
`,oW=l().h1`
  margin: 0 0 4px;
  font-family: ${c.w4.typography.fontFamily};
  font-size: 22px;
  font-weight: 700;
  color: ${c.w4.colors.mainText};
  letter-spacing: -0.02em;
`,oY=l().p`
  margin: 0;
  font-size: 13px;
  color: ${c.w4.colors.mainTextMuted};
`,o_=l().div`
  display: flex;
  gap: ${c.w4.spacing.sm};
  margin-top: ${c.w4.spacing.md};
`,oV=l().button`
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
`,oU=l().div`
  padding: ${c.w4.spacing.xxl} 0;
  text-align: center;
  color: ${c.w4.colors.mainTextMuted};
  font-size: 14px;
`,oJ=l().h2`
  margin: ${c.w4.spacing.lg} 0 ${c.w4.spacing.sm};
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${c.w4.colors.mainTextMuted};
`,oQ=l().div`
  display: flex;
  gap: ${c.w4.spacing.md};
  padding: ${c.w4.spacing.sm} ${c.w4.spacing.md};
  border-left: 2px solid ${({color:e})=>e};
  border-radius: ${c.w4.borderRadius.sm};
  background: ${c.w4.colors.surface};
  margin-bottom: 6px;
  transition: background ${c.w4.transitions.fast};

  &:hover { background: ${c.w4.colors.surfaceHover}; }
`,oX=l().a`
  flex: 1;
  display: block;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  min-width: 0;
`,oZ=l().div`
  font-size: 13px;
  color: ${c.w4.colors.mainText};
  line-height: 1.4;
  word-break: break-word;
`,o0=l().div`
  margin-top: 2px;
  font-family: ${c.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${c.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
`,o1=l().button`
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
`;function o4({locale:e}){let t=(0,o.useMemo)(()=>(0,m.Nx)(e,el),[e]),a=(0,u.useRegisteredCategories)(),{items:r,byCategory:n}=(0,u.useEvents)({channels:a}),s=(0,o.useMemo)(()=>{let e=new Map;for(let t of a){let a=n[t];a&&a.length>0&&e.set(t,a)}return e},[n,a]),l=(0,o.useCallback)(()=>{u.defaultStore.markAllRead()},[]),d=(0,o.useCallback)(e=>{u.defaultStore.dismiss(e)},[]),p=(0,o.useCallback)(()=>{window.location.hash="#/home"},[]);return(0,i.jsxs)(oB,{children:[(0,i.jsxs)(oG,{children:[(0,i.jsx)(oW,{children:t("notifications.page.title")}),(0,i.jsx)(oY,{children:t("notifications.page.subtitle")}),(0,i.jsxs)(o_,{children:[(0,i.jsxs)(oV,{onClick:p,children:["← ",t("error.remote.goHome")]}),(0,i.jsx)(oV,{onClick:l,disabled:0===r.length,children:t("notifications.markAllRead")})]})]}),0===r.length?(0,i.jsx)(oU,{children:t("notifications.empty")}):Array.from(s.entries()).map(([e,a])=>{let o;return(0,i.jsxs)("section",{children:[(0,i.jsx)(oJ,{children:(o=u.defaultStore.getCategory(e),o?.labelKey?t(o.labelKey):e)}),a.map(a=>{let o=u.defaultStore.getCategory(e)?.badgeColor??c.w4.colors.mainTextMuted;return(0,i.jsxs)(oQ,{color:o,children:[(0,i.jsxs)(oX,{href:a.link,target:a.link?"_blank":void 0,rel:a.link?"noopener noreferrer":void 0,children:[(0,i.jsx)(oZ,{children:a.title}),(0,i.jsx)(o0,{children:(0,m.aw)(new Date(a.ts).toISOString(),t)})]}),(0,i.jsx)(o1,{type:"button","aria-label":t("notifications.dismiss"),title:t("notifications.dismiss"),onClick:()=>d(a.id),children:"\xd7"})]},a.id)})]},e)})]})}u.events.registerCategory({id:"sync.error",labelKey:"notifications.source.syncError",badgeColor:c.w4.colors.danger}),u.events.registerCategory({id:"daily.achievement",labelKey:"notifications.source.dailyAchievement",badgeColor:"#fb923c"}),u.events.registerCategory({id:"finance.budget",labelKey:"notifications.source.financeBudget",badgeColor:c.w4.colors.warning}),u.events.registerCategory({id:"finance.bills",labelKey:"notifications.source.financeBills",badgeColor:"#fb923c"}),u.events.registerRules([u.billsRule]),u.events.registerCategory({id:"weather.pt.forecast",labelKey:"notifications.source.weatherForecast",badgeColor:"#3b82f6"}),u.events.registerRules([u.ipmaForecastDetailRule]),(0,u.loadSchedule)();{let e=new Map;(0,iw.subscribeRequests)(t=>{if(!t.host)return;if(t.ok)return void e.delete(t.host);let a=(e.get(t.host)??0)+1;if(e.set(t.host,a),3===a){let e=new Date().toISOString().slice(0,10);u.events.push({id:`sync.error:${t.host}:${e}`,category:"sync.error",ts:t.ts,title:`${t.host} — ${t.error??"failed"}`,meta:{host:t.host,status:t.status}})}})}let o2={movies:e=>({apiKey:e.tmdbKey}),youtube:e=>({apiKey:e.youtubeKey}),games:e=>({isAuthenticated:!!e.user})},o5=l().div`
  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  animation: fadeSlideIn 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  height: 100%;
`,o3=(0,d.keyframes)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,o8=l().div`
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
`,o6=l().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${c.w4.colors.success};
  flex-shrink: 0;
  animation: ${o3} 2s ease-in-out infinite;
`,o7={techscope:9,weather:1,citypulse:1};function o9({count:e}){return(0,i.jsxs)(o8,{title:`${e} live ${1===e?"feed":"feeds"}`,children:[(0,i.jsx)(o6,{}),e,(0,i.jsx)("span",{style:{opacity:.65,fontSize:10},children:"LIVE"})]})}let re=l().div`
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
`,rt=(l().code`
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
`),ra=l().h2`
  color: ${c.w4.colors.mainText};
  font-size: ${c.w4.typography.fontSizeLg};
  font-weight: 600;
`,ri=l().p`
  color: ${c.w4.colors.mainTextMuted};
  font-size: ${c.w4.typography.fontSizeBase};
  max-width: 360px;
  text-align: center;
  line-height: 1.5;
`,ro=l().button`
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
`;function rr({name:e,error:t,topBarRight:a,onRetry:r}){let[n]=(0,m.Ym)(),s=(0,o.useMemo)(()=>(0,m.Nx)(n,el),[n]),l=t.message??"",d=l.startsWith("REMOTE_LOAD_FAILED:"),p=d?l.slice(19):e,u=`apps.${p}.label`,g=s(u),h=g&&g!==u?g:p;return(0,i.jsx)(c.PE,{title:h,sidebar:null,topBarRight:a,children:(0,i.jsxs)(re,{children:[(0,i.jsx)(rt,{children:"⚠"}),(0,i.jsx)(ra,{children:s("error.remote.title",{name:h})}),(0,i.jsx)(ri,{children:s(d?"error.remote.prodHint":"error.remote.generic")}),d&&!1,(0,i.jsxs)("div",{style:{display:"flex",gap:c.w4.spacing.sm},children:[(0,i.jsx)(ro,{onClick:r,children:s("error.remote.retry")}),(0,i.jsx)(ro,{onClick:()=>{window.location.hash="#/home"},children:s("error.remote.goHome")})]})]})})}class rn extends r().Component{static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e){console.error(`[RemoteErrorBoundary] "${this.props.name}" threw:`,e)}componentDidUpdate(e){e.name!==this.props.name&&this.state.error&&this.setState({error:null})}render(){return this.state.error?(0,i.jsx)(rr,{name:this.props.name,error:this.state.error,topBarRight:this.props.topBarRight,onRetry:()=>this.setState({error:null})}):this.props.children}constructor(...e){super(...e),function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(this,"state",{error:null})}}let rs=(()=>{let e={settings:"settings"};for(let t of M)for(let a of(e[t.hash.replace(/^#\//,"")]=t.id,t.hashAliases??[]))e[a]=t.id;return e})();function rl(e){let t=e.replace(/^#\/?/,"");if(!t||"home"===t)return"home";let a=t.split("/")[0].split("?")[0];return"notifications"===a?"notifications":rs[a]??"home"}let rd="shell:recent",rc="shell:pinned",rp="shell:last-app";function ru(){let e=window.location.hash;if(!e||"#"===e||"#/"===e)try{let e=localStorage.getItem(rp);if(e&&"home"!==e&&f[e]){let t=M.find(t=>t.id===e);if(t)return history.replaceState(null,"",t.hash),e}}catch{}return rl(e)}function rm(e){try{return JSON.parse(e??"[]")}catch{return[]}}let rg=new Set(M.filter(e=>e.needsAuth).map(e=>e.id)),rh="true"===process.env.MOCK_USER?{id:"mock-user",email:"dev@atlantis.local",user_metadata:{full_name:"Dev User",avatar_url:""}}:null,rf=process.env.YOUTUBE_API_KEY||"",rb=document.getElementById("root");if(!rb)throw Error("Root element #root not found");(0,n.createRoot)(rb).render((0,i.jsx)(function(){let e,[t,a]=(0,o.useState)(ru),[r,n]=(0,o.useState)([]),[s,l]=(0,o.useState)([]),[d,g]=(0,o.useState)(rh),[h,b]=(0,o.useState)(!!rh),[x,y]=(0,o.useState)(!1),[w,v]=(0,o.useState)(void 0),[$,k]=(0,o.useState)(!1),[C,T]=(0,o.useState)(!1),[A,F]=(0,m.Ym)(),L=(0,o.useMemo)(()=>(0,m.Nx)(A,el),[A]),N=function(e={}){let t=(0,u.useRegisteredCategories)(),a=(0,u.useEventBell)({channels:t}),[i,r]=(0,o.useState)(!1),n=(0,o.useRef)(null),s=(0,o.useRef)(e.formatDailyReminder);(0,o.useEffect)(()=>{s.current=e.formatDailyReminder},[e.formatDailyReminder]),(0,o.useEffect)(()=>{let e=()=>{u.defaultStore.refresh()};window.addEventListener("focus",e);let t=u.dailyStore.subscribe(e);return()=>{window.removeEventListener("focus",e),t()}},[]),(0,o.useEffect)(()=>{if("u"<typeof window||!("Notification"in window)||"granted"!==Notification.permission)return;let e=a.items.find(e=>"daily.overdue"===e.category),t=(0,u.todayISO)();if(!e||n.current===t)return;let i=e.meta,o=i?.missions?.[0],r=o?s.current?.(o):void 0;if(r){n.current=t;try{new Notification(r.title,{body:r.body,tag:`atlantis-daily-${t}`,icon:"/manifest-icon.png"})}catch{}}},[a.items]);let l=(0,o.useCallback)(()=>r(e=>!e),[]),d=(0,o.useCallback)(()=>r(!1),[]);return{...a,open:i,toggle:l,close:d}}({formatDailyReminder:(0,o.useCallback)(e=>{let t=(0,u.missionLabel)(e,A),a=e.emoji?`${e.emoji} ${t}`.trim():t;return{title:L("notifications.source.daily"),body:L("notifications.daily.body",{time:e.time??"",name:a})}},[L,A])}),[P,I]=(0,o.useState)(null);(0,o.useEffect)(()=>{if(rh){u.session.setUser(rh),(0,u.resolveApiKeys)().then(e=>u.session.setApiKeys(e));return}ai.auth.getSession().then(({data:e})=>{let t=e.session?.user??null;g(t),(0,c.Fm)(t?af:null),u.session.setUser(t),(0,u.resolveApiKeys)().then(e=>u.session.setApiKeys(e)),b(!0)});let{data:{subscription:e}}=ai.auth.onAuthStateChange((e,t)=>{let a=t?.user??null;g(a),(0,c.Fm)(a?af:null),u.session.setUser(a),(0,u.resolveApiKeys)().then(e=>u.session.setApiKeys(e))});return()=>e.unsubscribe()},[]),(0,o.useEffect)(()=>{let e=()=>{(0,u.resolveApiKeys)().then(e=>u.session.setApiKeys(e))};return window.addEventListener("atlantis:api-keys-changed",e),()=>window.removeEventListener("atlantis:api-keys-changed",e)},[]),(0,o.useEffect)(()=>{u.session.setLocale(A)},[A]),(0,o.useEffect)(()=>{(0,c.PL)(rd).then(e=>n(rm(e))),(0,c.PL)(rc).then(e=>l(rm(e)))},[]),(0,o.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&"k"===e.key&&(e.preventDefault(),v(void 0),y(e=>!e))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),(0,o.useEffect)(()=>{let e=e=>{let t=e.detail;v(t?.scope),y(!0)};return window.addEventListener("atlantis:open-palette",e),()=>window.removeEventListener("atlantis:open-palette",e)},[]),(0,o.useEffect)(()=>{let e=()=>a(rl(window.location.hash));return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),(0,o.useEffect)(()=>{if(t&&"home"!==t){try{localStorage.setItem(rp,t)}catch{}n(e=>{let a=[t,...e.filter(e=>e!==t)].slice(0,8);return(0,c.Is)(rd,JSON.stringify(a)),a})}},[t]);let D=(0,o.useCallback)(e=>{window.location.hash=e,y(!1),v(void 0)},[]),R=(0,o.useCallback)(e=>{window.location.hash=`#/home?suite=${encodeURIComponent(e)}`},[]),[E]=(0,u.useProfile)(),H=(0,o.useMemo)(()=>M.filter(e=>e.flag?(0,u.resolveFlag)(e.flag):e.enabled).filter(e=>"hidden"!==j(e)).filter(e=>!(0,u.hasInterests)(E)||!e.interest||E.interests.includes(e.interest)),[E]),O=(0,o.useMemo)(()=>{let e=z.map(e=>({id:e.id,name:L(e.labelKey),iconName:e.iconName,hash:e.hash,accentColor:e.color,onClick:()=>{window.location.hash=e.hash}}));return S.map(t=>{let a=H.filter(e=>e.suite===t.yamlSuite),i="games"===t.id;return{id:t.id,name:L(t.nameKey),subtitle:L(t.subKey),color:t.color,icon:t.icon,count:i?z.length:a.length,onClick:i?void 0:()=>R(t.id),children:i?e:void 0}})},[H,L,R]),K=(0,o.useMemo)(()=>O.filter(e=>e.count>0),[O]),q=(0,o.useMemo)(()=>K.map(e=>({id:e.id,name:e.name,sub:e.subtitle,color:e.color,iconName:e.icon,onConfirm:()=>R(e.id)})),[K,R]),B=(0,o.useMemo)(()=>z.map(e=>({id:e.id,name:L(e.labelKey),iconName:e.iconName,hash:e.hash,color:e.color})),[L]),G=(0,o.useMemo)(()=>[{id:"add-widget",label:L("palette.action.addWidget"),meta:L("palette.action.addWidget.meta"),iconName:"plus",color:c.w4.colors.accent,onClick:()=>{window.location.hash="#/home";try{sessionStorage.setItem(eE,"1")}catch{}window.dispatchEvent(new CustomEvent("atlantis:open-widget-picker"))}},{id:"preferences",label:L("palette.action.preferences"),meta:L("palette.action.preferences.meta"),iconName:"settings",onClick:()=>k(!0)},{id:"settings",label:L("palette.action.settings"),meta:L("palette.action.settings.meta"),iconName:"sparkle",onClick:()=>{window.location.hash="#/settings"}},{id:"language",label:L("palette.action.language"),meta:L("palette.action.language.meta"),iconName:"globe",onClick:()=>F("pt"===A?"en":"pt")},...N.count>0?[{id:"clear-notifications",label:L("palette.action.clearNotifications"),meta:L("palette.action.clearNotifications.meta",{n:N.count}),iconName:"bell",color:c.w4.colors.accent,onClick:()=>{N.markAllRead()}}]:[],...d?[{id:"signout",label:L("palette.action.signout"),meta:d.email??"",iconName:"arrow-up-right",color:c.w4.colors.danger,onClick:()=>{ar()}}]:[]],[L,A,F,d,N]),[W,Y]=(0,o.useState)(null);(0,o.useEffect)(()=>{(0,u.resolveGroqKey)().then(Y)},[]);let _=(0,u.hasEnvGroqKey)()||!!W,V=(0,o.useMemo)(()=>H.map(({id:e,labelKey:t,hash:a})=>({id:e,label:L(t),hash:a})),[H,L]),U=(0,o.useMemo)(()=>H.map(({id:e,labelKey:t,descriptionKey:a,hash:i,icon:o,color:r,category:n})=>({id:e,label:L(t),description:L(a),hash:i,icon:o,color:r,category:n})),[H,L]),J=(e=M.find(e=>e.id===t))?L(e.labelKey):t;if(!h)return(0,i.jsx)(c.NP,{children:(0,i.jsx)(p.xx,{})});if(rg.has(t)&&!d)return(0,i.jsx)(c.NP,{children:(0,i.jsx)(ah,{appLabel:J,onBack:()=>{window.location.hash="#/home"}})});let Q=o7[t],X=e=>{I(e.currentTarget.getBoundingClientRect()),N.toggle()},Z=(0,i.jsx)(p.Yw,{locale:A,onLocaleChange:F,before:null!=Q?(0,i.jsx)(o9,{count:Q}):void 0,suites:{entries:K,label:L("suites.label"),ariaLabel:L("suites.aria"),appsLabel:L("suites.appsCount")},notifications:{count:N.count,onClick:X,label:L("notifications.bell")},onOpenPalette:()=>{v(void 0),y(!0)},paletteLabel:L("palette.search"),user:d?{name:d.user_metadata?.full_name,email:d.email??"",avatarUrl:d.user_metadata?.avatar_url}:void 0,userMenuItems:d?[{label:L("userMenu.preferences"),icon:(0,i.jsx)(p.In,{name:"user-cog",size:14}),onClick:()=>k(!0)},{label:L("userMenu.settings"),icon:(0,i.jsx)(p.In,{name:"settings",size:14}),onClick:()=>{window.location.hash="#/settings"}},{label:L("userMenu.clearData"),icon:(0,i.jsx)(p.In,{name:"trash",size:14}),onClick:()=>T(!0),danger:!0},{label:L("userMenu.signOut"),icon:(0,i.jsx)(p.In,{name:"log-out",size:14}),onClick:ar,danger:!0}]:[],userMenuControlLabels:{language:L("userMenu.language"),theme:L("userMenu.theme"),themeLight:L("userMenu.themeLight"),themeDark:L("userMenu.themeDark"),themeSystem:L("userMenu.themeSystem")},onSignIn:()=>{window.location.hash="#/home"}}),ee=x&&(0,i.jsx)(iu,{apps:U,recentIds:r,suites:q,games:B,actions:G,hasAsk:_,groqKey:W??void 0,locale:A,initialScope:w,onNavigate:D,onClose:()=>{y(!1),v(void 0)}}),et=!x&&(0,i.jsx)(iy,{t:L,onOpenPalette:()=>{v(void 0),y(!0)}}),ea=(0,i.jsx)(oj,{open:$,onClose:()=>k(!1),locale:A}),ei=(0,i.jsx)(p.TM,{open:C,title:L("userMenu.clearData"),message:L("userMenu.clearDataConfirm"),confirmLabel:L("userMenu.clearData"),cancelLabel:L("common.cancel"),danger:!0,onCancel:()=>T(!1),onConfirm:async()=>{T(!1),await (0,c.sW)(""),window.location.reload()}}),eo=(0,i.jsx)(oK,{locale:A,state:N,anchor:P});if("home"===t)return(0,i.jsxs)(c.NP,{children:[(0,i.jsx)(o5,{children:(0,i.jsx)(aa,{apps:V,recentAppIds:r,pinnedAppIds:s,onTogglePin:e=>{l(t=>{let a=t.includes(e)?t.filter(t=>t!==e):[...t,e];return(0,c.Is)(rc,JSON.stringify(a)),a})},onMovePinned:(e,t)=>{l(a=>{let i=a.indexOf(e);if(i<0)return a;let o=i+t;if(o<0||o>=a.length)return a;let r=[...a];return[r[i],r[o]]=[r[o],r[i]],(0,c.Is)(rc,JSON.stringify(r)),r})},onSelect:e=>{window.location.hash=e.hash},user:d?{name:d.user_metadata?.full_name,email:d.email??"",avatarUrl:d.user_metadata?.avatar_url}:null,onSignOut:ar,onPreferences:()=>k(!0),onClearData:()=>T(!0),onOpenPalette:()=>{v(void 0),y(!0)},notifications:{count:N.count,onClick:X,label:L("notifications.bell")},suites:{entries:K,label:L("suites.label"),ariaLabel:L("suites.aria"),appsLabel:L("suites.appsCount")}})},"home"),ee,et,ea,ei,eo]});let er=f[t],en=o2[t]?.({user:d,tmdbKey:"9b6f2645abf1725625c843aa71e3efd5",youtubeKey:rf})??{};return(0,i.jsxs)(c.NP,{children:[(0,i.jsx)(rn,{name:t,topBarRight:Z,children:(0,i.jsx)(o.Suspense,{fallback:(0,i.jsx)(p.xx,{}),children:(0,i.jsxs)(o5,{children:[er&&(0,i.jsx)(er,{topBarRight:Z,...en}),"settings"===t&&(0,i.jsx)(c.PE,{title:"Settings",sidebar:null,topBarRight:Z,children:(0,i.jsx)(os,{lang:"pt"===A?"pt":"en"})}),"notifications"===t&&(0,i.jsx)(c.PE,{title:L("notifications.page.title"),sidebar:null,topBarRight:Z,children:(0,i.jsx)(o4,{locale:A})})]},t)})}),ee,et,ea,ei,eo]})},{}))},28170(e,t,a){a.d(t,{Ym:()=>c,Nx:()=>p,Fd:()=>x,aw:()=>u});var i=a(37991),o=a(94764);let r={"time.justNow":{en:"just now",pt:"agora mesmo"},"time.mAgo":{en:"{n}m ago",pt:"h\xe1 {n}m"},"time.hAgo":{en:"{n}h ago",pt:"h\xe1 {n}h"},"time.dAgo":{en:"{n}d ago",pt:"h\xe1 {n}d"},updated:{en:"updated {age}",pt:"atualizado {age}"},refresh:{en:"Refresh",pt:"Atualizar"},loading:{en:"Loading…",pt:"A carregar…"},noData:{en:"No data available",pt:"Sem dados dispon\xedveis"},noDescription:{en:"No description provided.",pt:"Sem descri\xe7\xe3o."},failedToFetch:{en:"Failed to fetch",pt:"Erro ao carregar"},perWeek:{en:"/ wk",pt:"/ sem"},"devtools.heading":{en:"Dev Tools",pt:"Ferramentas"},"devtools.playground":{en:"Playground",pt:"Playground"},"devtools.pad":{en:"Pad",pt:"Pad"},"devtools.charts":{en:"Charts",pt:"Gr\xe1ficos"},"devtools.csv":{en:"CSV",pt:"CSV"},"devtools.regex":{en:"Regex",pt:"Regex"},"devtools.json":{en:"JSON",pt:"JSON"},"devtools.diff":{en:"Diff",pt:"Diferen\xe7as"},"devtools.jwt":{en:"JWT",pt:"JWT"},"devtools.cron":{en:"Cron",pt:"Cron"},"devtools.colors":{en:"Colors",pt:"Cores"},"devtools.api":{en:"API",pt:"API"}},n="atlantis:locale",s="shell:locale";function l(e){return"en"===e||"pt"===e}function d(){try{let e=localStorage.getItem(n);if(l(e))return e}catch{}return"en"}function c(){let[e,t]=(0,i.useState)(d),a=(0,i.useCallback)(e=>{t(e);try{localStorage.setItem(n,e)}catch{}(0,o.Is)(s,e).catch(()=>{}),window.dispatchEvent(new CustomEvent("atlantis:locale-change",{detail:e}))},[]);return(0,i.useEffect)(()=>{let e=e=>{t(e.detail)};return window.addEventListener("atlantis:locale-change",e),()=>window.removeEventListener("atlantis:locale-change",e)},[]),(0,i.useEffect)(()=>{(0,o.PL)(s).then(a=>{if(l(a)&&a!==e){try{localStorage.setItem(n,a)}catch{}t(a)}}).catch(()=>{})},[]),[e,a]}function p(e,t){let a=t?{...r,...t}:r;return(t,i)=>{let o=function(e,t){if(!t||!e.includes("|"))return e;let a=null;for(let e of Object.values(t))if("number"==typeof e&&Number.isFinite(e)){a=e;break}if(null===a)return e;let i=e.indexOf("|"),o=e.slice(0,i),r=e.slice(i+1);return 1===a?o:r}(a[t]?.[e]??t,i);return i?Object.entries(i).reduce((e,[t,a])=>e.replace(RegExp(`\\{${t}\\}`,"g"),String(a)),o):o}}function u(e,t){let a=Math.floor((Date.now()-new Date(e).getTime())/6e4);if(a<1)return t("time.justNow");if(a<60)return t("time.mAgo",{n:a});let i=Math.floor(a/60);return i<24?t("time.hAgo",{n:i}):t("time.dAgo",{n:Math.floor(i/24)})}(0,o.PL)(s).then(e=>{if(l(e))try{localStorage.setItem(n,e)}catch{}}).catch(()=>{});var m=a(65723),g=a(36859),h=a.n(g);let f=h().div`
  display: flex;
  gap: 4px;
  background: ${o.w4.colors.surface};
  border: 1px solid ${o.w4.colors.border};
  border-radius: ${o.w4.borderRadius.md};
  padding: 2px;
`,b=h().button`
  width: 38px;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
  font-family: ${o.w4.typography.fontFamilyMono};
  border: none;
  border-radius: ${o.w4.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background 0.15s, color 0.15s;
  background: ${({active:e})=>e?o.w4.colors.accent:"transparent"};
  color: ${({active:e})=>e?"#0d1117":o.w4.colors.mainTextMuted};

  &:hover {
    color: ${({active:e})=>e?"#0d1117":o.w4.colors.mainText};
  }
`;function x({locale:e,onChange:t}){return(0,m.jsxs)(f,{children:[(0,m.jsx)(b,{active:"pt"===e,onClick:()=>t("pt"),children:"PT"}),(0,m.jsx)(b,{active:"en"===e,onClick:()=>t("en"),children:"EN"})]})}},45030(e,t,a){a.d(t,{YZ:()=>eX,n6:()=>A,Yw:()=>eS,SV:()=>eB,rl:()=>e9,dO:()=>aa,TM:()=>au,pd:()=>e4,mQ:()=>t1,tU:()=>M,xx:()=>av,ue:()=>eJ,Ex:()=>eV,$n:()=>x,In:()=>F,K0:()=>$,eu:()=>O});var i=a(65723),o=a(37991),r=a.n(o),n=a(36859),s=a.n(n),l=a(94764);let d={ghost:"transparent",accent:"transparent",primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},c={ghost:l.w4.colors.sidebarHover,accent:"rgba(88,166,255,0.10)",primary:l.w4.colors.accentHover,success:"#2ea043",danger:"#f85149"},p={ghost:l.w4.colors.border,accent:l.w4.colors.accent,primary:l.w4.colors.accent,success:"#238636",danger:"#da3633"},u={ghost:l.w4.colors.mainTextMuted,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},m={ghost:l.w4.colors.mainText,accent:l.w4.colors.accent,primary:"#fff",success:"#fff",danger:"#fff"},g={sm:"28px",md:"30px"},h={sm:"0 10px",md:"0 12px"},f={sm:"12px",md:"12px"},b=s().button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${({size:e})=>g[e]};
  padding: ${({size:e})=>h[e]};
  background: ${({variant:e})=>d[e]};
  border: 1px solid ${({variant:e})=>p[e]};
  border-radius: ${l.w4.borderRadius.sm};
  color: ${({variant:e})=>u[e]};
  font-size: ${({size:e})=>f[e]};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast}, border-color ${l.w4.transitions.fast}, color ${l.w4.transitions.fast};
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({variant:e})=>c[e]};
    color: ${({variant:e})=>m[e]};
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
`,x=r().forwardRef(function({variant:e="ghost",size:t="md",icon:a,iconRight:o,children:r,...n},s){return(0,i.jsxs)(b,{ref:s,variant:e,size:t,...n,children:[a,r,o]})}),y={default:l.w4.colors.accent,danger:"#f85149"},w={default:l.w4.colors.sidebarHover,danger:"rgba(248,81,73,0.12)"},v=s().button`
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
`,$=r().forwardRef(function({active:e=!1,shape:t="square",tone:a="default",children:o,...r},n){return(0,i.jsx)(v,{ref:n,active:e,shape:t,tone:a,...r,children:o})});s().div`
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
`;let k=s().div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,j=s()("button",{shouldForwardProp:e=>"active"!==e&&"highlight"!==e})`
  padding: 6px 14px;
  height: 28px;
  border-radius: 999px;
  background: ${({active:e})=>e?l.w4.colors.accentMuted:"transparent"};
  border: 1px solid
    ${({active:e,highlight:t})=>e||t?l.w4.colors.accent:"transparent"};
  color: ${({active:e,highlight:t})=>e||t?l.w4.colors.accent:l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: ${l.w4.transitions.fast};

  &:hover:not(:disabled) { color: ${l.w4.colors.mainText}; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
  &:focus-visible { ${l.w4.focusRing} }
`;function M({tabs:e,value:t,onChange:a,className:o,"aria-label":r}){return(0,i.jsx)(k,{role:"tablist","aria-label":r,className:o,children:e.map(e=>{let o=e.value===t;return(0,i.jsx)(j,{type:"button",role:"tab","aria-selected":o,active:o,highlight:e.highlight,disabled:e.disabled,onClick:()=>a(e.value),children:e.label},e.value)})})}var S=a(62727),z=a.n(S),C=a(72799);let T={"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7"/>',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7"/>',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7"/>',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7"/>',"arrow-up-right":'<path d="M7 17L17 7M9 7h8v8"/>',"chevron-up":'<path d="M6 15l6-6 6 6"/>',"chevron-down":'<path d="M6 9l6 6 6-6"/>',"chevron-left":'<path d="M15 6l-6 6 6 6"/>',"chevron-right":'<path d="M9 6l6 6-6 6"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M5 12l5 5L20 7"/>',filter:'<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',pin:'<path d="M12 17v5M9 3h6l-1 4 3 5H7l3-5z"/>',file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7L12 19"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 8h5M17 8h5M2 16h5M17 16h5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',cloud:'<path d="M18 10a5 5 0 0 0-9.5-1.5A4 4 0 0 0 7 16h11a4 4 0 0 0 0-8z"/>',"cloud-rain":'<path d="M16 14a5 5 0 1 0-9.8 2H6M8 19v2M12 17v4M16 19v2"/>',snowflake:'<path d="M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1M2 12h20M8 6l4 4 4-4M8 18l4-4 4 4"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/>',"map-pin":'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>',"alert-triangle":'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',"check-circle":'<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>',"x-circle":'<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',flame:'<path d="M8 14s-3-2-3-5 3-5 3-5 2 2 2 4 0 0 2-2 2-4 2-4 4 3 4 8a6 6 0 0 1-12 0c0-2 2-4 2-4"/>',star:'<path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',sparkle:'<path d="M12 3 14 10l7 2-7 2-2 7-2-7-7-2 7-2zM19 3v4M21 5h-4M5 17v3M6 19H4"/>',trophy:'<path d="M7 4h10v5a5 5 0 1 1-10 0zM4 4h3v4a2 2 0 1 1-3 0zM17 4h3v4a2 2 0 1 1-3 0zM9 18h6v3H9z"/>',brain:'<path d="M12 4a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V4zM12 4a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3"/>',beaker:'<path d="M9 3h6v4l5 10a2 2 0 0 1-2 3H6a2 2 0 0 1-2-3l5-10z"/><path d="M7 14h10"/>',graduation:'<path d="m22 10-10-5L2 10l10 5 10-5zM6 12v5l6 3 6-3v-5"/>',gamepad:'<rect x="3" y="7" width="18" height="12" rx="3"/><path d="M8 11v2M7 12h2M15 12h.01M17 13h.01M14 13h.01M16 11h.01"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.4 2.6a2 2 0 0 1 2.8 2.8L11 16l-4 1 1-4z"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',"rotate-ccw":'<path d="M2 12a10 10 0 1 0 5-8.7L2 7M2 2v5h5"/>',"rotate-cw":'<path d="M22 12a10 10 0 1 1-5-8.7L22 7M22 2v5h-5"/>',paperclip:'<path d="m21.4 11.6-10 10a6 6 0 0 1-8.5-8.5l10-10a4 4 0 0 1 5.7 5.7l-10 10a2 2 0 0 1-2.8-2.8l8.5-8.6"/>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',"bar-chart":'<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m10.85 12.15 9.65-9.65M18 5l3 3M16 7l2 2"/>',palette:'<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17a5 5 0 0 0 5-5 10 10 0 0 0-10-8.2z"/><circle cx="7" cy="12" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',terminal:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',braces:'<path d="M8 3H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2"/>',telescope:'<path d="m10.5 20 1.5-3 3 3-1.5 3zM19 5l-4 4-3-3 4-4zM15 9l-8 8-3-3 8-8zM9 11l3 3M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',satellite:'<path d="M2 22l8-8-6-6-2 2 4 4-4 4zM12 12l4 4M17 14l5-5a4 4 0 0 0-5-5l-5 5"/>',buildings:'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4M10 6h4M10 10h4M10 14h4M10 18h4"/>',"trending-up":'<path d="M22 7l-9.5 9.5-5-5L2 17"/><path d="M16 7h6v6"/>',diff:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><path d="M5 8h4M5 12h4M15 10h4M15 14h4"/>',bomb:'<circle cx="11" cy="14" r="7"/><path d="m15.5 9 2-2M17 5l3-3M14 5l3-3M20 8l-3 0"/>',dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor"/><circle cx="16" cy="8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8" cy="16" r="1.1" fill="currentColor"/><circle cx="16" cy="16" r="1.1" fill="currentColor"/>',activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',"alert-circle":'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',"alert-octagon":'<path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"/><path d="M12 8v4M12 16h.01"/>',"book-open":'<path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',columns:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/>',droplets:'<path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.5-4-7.3-4-7.3S3 9.8 3 12.3c0 2.2 1.8 4 4 4z"/><path d="M12.6 8.8c.6-1 2.4-3.8 2.4-3.8S18 8.9 18 11.2c0 2-1.4 3.6-3.3 3.9"/>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',"eye-off":'<path d="M17.9 17.9A10.8 10.8 0 0 1 12 20c-7 0-11-8-11-8a19.6 19.6 0 0 1 5.1-6M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a19.6 19.6 0 0 1-2.2 3.2M6.6 6.6l10.8 10.8M14.1 14.1a3 3 0 1 1-4.2-4.2"/>',"file-plus":'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M12 12v6M9 15h6"/>',gauge:'<path d="M12 14a2 2 0 1 0-2-2M12 2a10 10 0 1 0 10 10M12 14 7.5 16.5"/>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',"git-fork":'<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/>',"grip-vertical":'<circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',"image-plus":'<path d="M21 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21M19 2v6M22 5h-6"/>',layers:'<path d="m12 2 10 6-10 6-10-6zM2 14l10 6 10-6M2 18l10 6 10-6"/>',lightbulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7L9 17h6l1-2.3A7 7 0 0 0 12 2z"/>',loader:'<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',package:'<path d="M16.5 9.4 7.5 4.2M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7l8.7 5 8.7-5M12 22V12"/>',"panel-left":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',"panel-left-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M16 15l-3-3 3-3"/>',"panel-left-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M14 9l3 3-3 3"/>',"panel-right-close":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M8 9l3 3-3 3"/>',"panel-right-open":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M10 15l-3-3 3-3"/>',pencil:'<path d="m12 20 9-9-4-4-9 9v4zM15 5l4 4"/>',"pie-chart":'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M4.9 19.1a10 10 0 0 1 0-14.1M7.8 16.2a6 6 0 0 1 0-8.5M19.1 4.9a10 10 0 0 1 0 14.1M16.2 7.8a6 6 0 0 1 0 8.5"/>',"scatter-chart":'<circle cx="7.5" cy="7.5" r="0.8" fill="currentColor"/><circle cx="18" cy="5" r="0.8" fill="currentColor"/><circle cx="11" cy="11" r="0.8" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.8" fill="currentColor"/><circle cx="17" cy="14" r="0.8" fill="currentColor"/><path d="M3 3v18h18"/>',shield:'<path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"/>',"shield-off":'<path d="M19.7 14a7.7 7.7 0 0 0 .3-2V4l-8-2-3.4.9M4.7 4.7 4 5v7c0 6 8 10 8 10a13 13 0 0 0 5.2-3.5M2 2l20 20"/>',thermometer:'<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/>',"trending-down":'<path d="M22 17l-9.5-9.5-5 5L2 7"/><path d="M16 17h6v-6"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',"user-cog":'<circle cx="10" cy="8" r="4"/><path d="M10.2 14H8a4 4 0 0 0-4 4v2"/><circle cx="18" cy="15" r="3"/><path d="M18 10v1M18 19v1M22 12l-.8.5M14.8 17.5 14 18M22 18l-.8-.5M14.8 12.5 14 12"/>',volume:'<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',car:'<path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h12l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2M5 17l1 3h12l1-3M5 17h14"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>',"shopping-bag":'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>',wifi:'<path d="M5 12.6A10 10 0 0 1 19 12.6M1.5 8.9a15 15 0 0 1 21 0M8.5 16.5a5 5 0 0 1 7 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/>',wallet:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18M16 14h2"/>',receipt:'<path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21z"/><path d="M8 8h8M8 12h8M8 16h5"/>',"piggy-bank":'<path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/><path d="M19 9h2v4M14 7V5a2 2 0 0 0-4 0M16 11h.01M5 17v3M14 17v3"/>',banknote:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M5 9h.01M19 15h.01"/>',coins:'<circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/><path d="M9 6v6M7 9h4"/>',"line-chart":'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',"calendar-range":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 15h3M13 15h3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"refresh-ccw":'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',"refresh-cw":'<path d="M21 12a9 9 0 0 0-15-6.7L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15 6.7L21 16"/><path d="M21 21v-5h-5"/>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',split:'<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 3 12 12 3 3"/><path d="M12 12v9"/>',"more-horizontal":'<circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',toothbrush:'<path d="m4 20 12-12"/><path d="m14 6 4 4"/><rect x="14" y="3" width="7" height="5" rx="1.5" transform="rotate(45 17.5 5.5)"/><path d="M15.5 4.5v-1M17 3v-1M18.5 4.5v-1"/>',bed:'<path d="M3 20v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 17h18"/><path d="M6 11V9a2 2 0 0 1 2-2h3v4"/>',backpack:'<path d="M6 9V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><rect x="4" y="9" width="16" height="12" rx="3"/><path d="M10 5V3h4v2"/><path d="M9 14h6"/><path d="M9 17h6"/>',utensils:'<path d="M7 3v18"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M18 21v-7h2V4a4 4 0 0 0-4 4v6z"/>',leaf:'<path d="M20 4c-8 0-16 4-16 14 0 1 0 2 1 2 10 0 15-7 15-16z"/><path d="M4 20 18 6"/>',broom:'<path d="M20 4 10 14"/><path d="m8 12 4 4"/><path d="m4 20 4-8 8 4-8 4z"/><path d="m4 20 3-3M8 16l3-3"/>',shirt:'<path d="M8 3 4 7l3 3v11h10V10l3-3-4-4-2 2a3 3 0 0 1-6 0z"/>'};function A(e){return Object.prototype.hasOwnProperty.call(T,e)}function F({name:e,size:t=18,strokeWidth:a=1.5,...o}){let r=T[e];return(0,i.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!o["aria-label"]||void 0,...o,dangerouslySetInnerHTML:{__html:r}})}Object.keys(T);let L=s().span`
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
`,N=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: ${({fontSize:e})=>e}px;
  font-weight: 700;
  color: ${l.w4.colors.mainBg};
  line-height: 1;
  letter-spacing: 0;
`,P=["#3b82f6","#8b5cf6","#ec4899","#10b981","#f59e0b","#06b6d4"],I=0,D=new Map,R=s().img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,E=s().div`
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
`;function H({name:e,email:t,avatarUrl:a,size:o=26}){let r=e??t.split("@")[0]??t;if(a)return(0,i.jsx)(R,{src:a,alt:r,size:o});let n=((e??t.split("@")[0]??"")[0]??"?").toUpperCase();return(0,i.jsx)(E,{size:o,"aria-label":r,title:r,children:n})}function O({member:e,size:t=24}){var a,o;let r,n="shared"===e.id||"shared"===e.role,s=Math.floor(.55*t),d=t<=18?8:t<=22?9:t<=28?11:12;if(n)return(0,i.jsx)(L,{size:t,bg:l.w4.colors.surface,ring:!0,"aria-label":"Shared",title:"Shared",style:{color:l.w4.colors.mainTextMuted},children:(0,i.jsx)(F,{name:"home",size:s,"aria-hidden":!0})});let c=(a=e.id,(o=e.color)?o:(!D.has(a)&&(D.set(a,P[I%P.length]),I++),D.get(a))),p="adult"===e.role,u=(r=e.name.trim().split(/\s+/),((r[0]?.[0]??"")+(r[1]?.[0]??"")).toUpperCase().slice(0,2));return(0,i.jsx)(L,{size:t,bg:c,ring:p,title:e.name,children:(0,i.jsx)(N,{fontSize:d,children:u})})}let K=(0,C.keyframes)`
  from { opacity: 0; transform: scale(0.95) translateY(-6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`,q=s().div`
  position: relative;
`,B=s().button`
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
`,G=s().span`
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
`,W=s().div`
  position: fixed;
  min-width: 240px;
  background: ${l.w4.colors.surfaceRaised};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  z-index: 3000;
  overflow: hidden;
  animation: ${K} 0.15s ease;
  backdrop-filter: blur(12px);

  @media (max-width: ${l.w4.breakpoints.md}) {
    left: 12px !important;
    right: 12px !important;
    max-height: calc(100dvh - env(safe-area-inset-top, 0px) - 96px);
    overflow-y: auto;
  }
`,Y=s().div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${l.w4.colors.border};
`,_=s().div`
  margin-bottom: 10px;
`,V=s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeBase};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
`,U=s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  margin-top: 2px;
`,J=s().div`
  padding: 12px 16px 10px;
  border-bottom: 1px solid ${l.w4.colors.borderSubtle};
`,Q=s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextFaint};
  margin-bottom: 6px;
`,X=s().div`
  display: flex;
  gap: 4px;
  padding: 3px;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.borderSubtle};
  border-radius: ${l.w4.borderRadius.md};
`,Z=s().button`
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
`,ee=s().button`
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
`;function et({labels:e}){let{mode:t,setMode:a}=(0,l.eP)(),o=[{value:"light",label:e?.themeLight??"Light"},{value:"dark",label:e?.themeDark??"Dark"},{value:"system",label:e?.themeSystem??"System"}];return(0,i.jsxs)(J,{children:[(0,i.jsx)(Q,{children:e?.theme??"Theme"}),(0,i.jsx)(X,{role:"radiogroup","aria-label":e?.theme??"Theme",children:o.map(({value:e,label:o})=>(0,i.jsx)(Z,{active:t===e,onClick:()=>a(e),role:"radio","aria-checked":t===e,children:o},e))})]})}function ea({user:e,items:t,compact:a=!1,locale:r,onLocaleChange:n,controlLabels:s,showThemeControl:l=!0}){let[d,c]=(0,o.useState)(!1),[p,u]=(0,o.useState)(null),m=(0,o.useRef)(null),g=(0,o.useRef)(null),h=(0,o.useRef)(null);(0,o.useEffect)(()=>{if(!d)return;let e=e=>{let t=e.target;m.current?.contains(t)||h.current?.contains(t)||c(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[d]),(0,o.useEffect)(()=>{d?g.current&&u(g.current.getBoundingClientRect()):u(null)},[d]);let f=e.name??e.email.split("@")[0],b=p?{top:Math.round(p.bottom+8),right:Math.max(12,Math.round(window.innerWidth-p.right))}:{top:0,right:12};return(0,i.jsxs)(q,{ref:m,children:[(0,i.jsxs)(B,{ref:g,onClick:()=>c(e=>!e),children:[(0,i.jsx)(H,{name:e.name,email:e.email,avatarUrl:e.avatarUrl,size:26}),!a&&(0,i.jsx)(G,{children:f})]}),d&&z().createPortal((0,i.jsxs)(W,{ref:h,style:b,children:[(0,i.jsxs)(Y,{children:[(0,i.jsx)(_,{children:(0,i.jsx)(H,{name:e.name,email:e.email,avatarUrl:e.avatarUrl,size:40})}),(0,i.jsx)(V,{children:f}),(0,i.jsx)(U,{children:e.email})]}),void 0!==r&&n&&(0,i.jsxs)(J,{children:[(0,i.jsx)(Q,{children:s?.language??"Language"}),(0,i.jsxs)(X,{role:"radiogroup","aria-label":s?.language??"Language",children:[(0,i.jsx)(Z,{active:"pt"===r,onClick:()=>n("pt"),role:"radio","aria-checked":"pt"===r,children:"Portugu\xeas"}),(0,i.jsx)(Z,{active:"en"===r,onClick:()=>n("en"),role:"radio","aria-checked":"en"===r,children:"English"})]})]}),l&&(0,i.jsx)(et,{labels:s}),t.map((e,t)=>(0,i.jsxs)(ee,{danger:e.danger,onClick:()=>{c(!1),e.onClick()},children:[e.icon,e.label]},t))]}),document.body)]})}var ei=a(28170);let eo=s().div`
  position: relative;
  display: inline-block;
`,er=s().button`
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
`,en=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  background: ${l.w4.colors.accentMuted};
  color: ${l.w4.colors.accent};
  padding: 2px 7px;
  border-radius: 999px;
`,es=(0,C.keyframes)`
  from { opacity: 0; transform: translate(-50%, -6px); }
  to   { opacity: 1; transform: translate(-50%,  0); }
`,el=s().div`
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
  animation: ${es} 0.18s ease both;

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
`,ed=s()("button",{shouldForwardProp:e=>"accent"!==e&&"expanded"!==e})`
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
`,ec=s()("span",{shouldForwardProp:e=>"accent"!==e})`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: ${({accent:e})=>e}26;
  color: ${({accent:e})=>e};
  border: 1px solid ${({accent:e})=>e}40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,ep=s().span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,eu=s().span`
  font-size: 13.5px;
  color: ${l.w4.colors.mainText};
  font-weight: 500;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,em=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,eg=s()("span",{shouldForwardProp:e=>"accent"!==e})`
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
`,eh=s().div`
  margin: 2px 0 6px 48px;
  padding: 4px 0;
  border-left: 1px solid ${l.w4.colors.borderSubtle};
  display: flex;
  flex-direction: column;
`,ef=s().button`
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
`,eb=s().span`
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
`,ex=s().span`
  margin-left: auto;
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  color: ${l.w4.colors.mainTextFaint};
  letter-spacing: 0.02em;
  flex-shrink: 0;
`;function ey({label:e,ariaLabel:t,appsLabel:a,suites:n}){let[s,l]=(0,o.useState)(!1),[d,c]=(0,o.useState)(null),p=(0,o.useRef)(null);(0,o.useEffect)(()=>{if(!s)return;let e=e=>{p.current&&!p.current.contains(e.target)&&(l(!1),c(null))},t=e=>{"Escape"===e.key&&(l(!1),c(null))};return document.addEventListener("mousedown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",t)}},[s]);let u=n.reduce((e,t)=>e+t.count,0);return(0,i.jsxs)(eo,{ref:p,children:[(0,i.jsxs)(er,{open:s,onClick:()=>l(e=>!e),"aria-haspopup":"menu","aria-expanded":s,"aria-label":t,children:[(0,i.jsx)("span",{children:e}),(0,i.jsx)(en,{title:`${u} ${a}`,"aria-label":`${u} ${a}`,children:u}),(0,i.jsx)(F,{name:"chevron-down",size:12,"aria-hidden":"true"})]}),s&&(0,i.jsx)(el,{role:"menu",children:n.map(e=>{let t=d===e.id,o=!!(e.children&&e.children.length>0);return(0,i.jsxs)(r().Fragment,{children:[(0,i.jsxs)(ed,{accent:e.color,expanded:t,onClick:()=>{e.children&&e.children.length>0?c(t=>t===e.id?null:e.id):(e.onClick?.(),l(!1))},role:"menuitem","aria-expanded":o?t:void 0,children:[(0,i.jsx)(ec,{accent:e.color,children:(0,i.jsx)(F,{name:e.icon,size:18,"aria-hidden":"true"})}),(0,i.jsxs)(ep,{children:[(0,i.jsx)(eu,{children:e.name}),e.subtitle&&(0,i.jsx)(em,{children:e.subtitle})]}),(0,i.jsx)(eg,{accent:e.color,title:`${e.count} ${a}`,"aria-label":`${e.count} ${a}`,children:e.count})]}),t&&o&&(0,i.jsx)(eh,{children:e.children.map(e=>(0,i.jsxs)(ef,{onClick:()=>{e.onClick(),l(!1),c(null)},role:"menuitem",children:[e.iconName?(0,i.jsx)(eb,{accent:e.accentColor,children:(0,i.jsx)(F,{name:e.iconName,size:14,"aria-hidden":"true"})}):e.glyph?(0,i.jsx)(eb,{accent:e.accentColor,children:e.glyph}):null,(0,i.jsx)("span",{children:e.name}),e.hash&&(0,i.jsx)(ex,{children:e.hash})]},e.id))})]},e.id)})})]})}let ew=s().div`
  display: flex;
  align-items: center;
  gap: ${l.w4.spacing.sm};

  @media (max-width: ${l.w4.breakpoints.md}) {
    gap: ${l.w4.spacing.xs};

    .header-kbd { display: none; }
    .header-hide-md { display: none; }
  }
`,ev=s().button`
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
`,e$=s().button`
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
`,ek=s().div`
  position: relative;
  display: inline-flex;
`,ej=s().span`
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
`,eM=s().button`
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
`;function eS({locale:e,onLocaleChange:t,user:a,userMenuItems:o=[],userMenuControlLabels:r,suites:n,onPreferences:s,notifications:d,onOpenPalette:c,paletteLabel:p="Search",onSignIn:u,signInLabel:m="Sign in",before:g,after:h}){let f=function(){if("u"<typeof navigator)return"Ctrl";let e=navigator,t=e.userAgentData?.platform??navigator.platform??navigator.userAgent??"";return/Mac|iPod|iPhone|iPad/i.test(t)?"⌘":"Ctrl"}(),b="⌘"===f?`${f}K`:`${f}+K`;return(0,i.jsxs)(ew,{children:[g,n&&n.entries.length>0&&(0,i.jsx)(ey,{label:n.label,ariaLabel:n.ariaLabel,appsLabel:n.appsLabel,suites:n.entries}),c&&(0,i.jsxs)(e$,{onClick:c,"aria-label":p,title:`${p} (${b})`,children:[(0,i.jsx)(F,{name:"search",size:14}),(0,i.jsx)("span",{className:"kbd header-kbd",children:b})]}),!a&&(0,i.jsx)(ei.Fd,{locale:e,onChange:t}),!a&&(0,i.jsx)("span",{className:"header-hide-md",children:(0,i.jsx)(l.UW,{})}),d&&(0,i.jsxs)(ek,{children:[(0,i.jsx)(ev,{onClick:d.onClick,"aria-label":d.label,title:d.label,children:(0,i.jsx)(F,{name:"bell",size:16})}),d.count>0&&(0,i.jsx)(ej,{"aria-hidden":"true",children:d.count>9?"9+":d.count})]}),s&&(0,i.jsx)("span",{className:"header-hide-md",children:(0,i.jsx)(ev,{onClick:s,"aria-label":"User preferences",title:"Preferences",children:(0,i.jsx)(F,{name:"user-cog",size:16})})}),a?(0,i.jsx)(ea,{user:a,items:o,locale:e,onLocaleChange:t,controlLabels:r}):u?(0,i.jsxs)(eM,{onClick:u,"aria-label":m,children:[(0,i.jsx)(F,{name:"log-in",size:14}),m]}):null,h]})}s().div`
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
`;let ez=(0,C.keyframes)`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,eC=s()("div",{shouldForwardProp:e=>"accentColor"!==e&&"pinned"!==e&&"index"!==e})`
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
  animation: ${ez} 0.4s ease both;
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
`,eT=s().div`
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
`,eA=s().div`
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
`,eF=s().div`
  padding: 6px 14px 16px;
`,eL=s().h3`
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
`,eN=s().p`
  margin: 0;
  color: ${l.w4.colors.mainTextMuted};
  font-size: 12.5px;
  line-height: 1.45;
`,eP=s().div`
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid ${l.w4.colors.borderSubtle};
  font-size: 12px;
  color: ${l.w4.colors.mainTextMuted};
  line-height: 1.4;
`,eI=s().button`
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
`,eD=s().div`
  position: absolute;
  top: 8px;
  right: 44px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity ${l.w4.transitions.fast};
  z-index: 3;
`,eR={markdown:!0,school:!0,earth:!0,cosmos:!0,techscope:!0,citypulse:!0,stockpulse:!0,weather:!0,daily:!0,csvexplorer:!0,chartbuilder:!0,pad:!0,regexlab:!0,jsonexplorer:!0,codediff:!0,playground:!0,jwtinspector:!0,colorlab:!0,cronbuilder:!0,apiexplorer:!0,movies:!0,promptlab:!0,imagegen:!0,ask:!0,games:!0,devtools:!0},eE=["linear-gradient(135deg,#234b6b,#0d1024)","linear-gradient(135deg,#3e6060,#0e2424)","linear-gradient(135deg,#34578c,#0c1828)","linear-gradient(135deg,#6a4a7c,#2a1a34)","linear-gradient(135deg,#6d4d7c,#20102c)","linear-gradient(135deg,#b4503a,#30120b)","linear-gradient(135deg,#d94a4a,#4a1414)","linear-gradient(135deg,#d29922,#30280a)"],eH=[{bg:"linear-gradient(135deg,#ff6fa9,#4a1a2a)",glyph:"Qf"},{bg:"linear-gradient(135deg,#d86a6a,#3a1010)",glyph:"\xd7○",fg:"#fff"},{bg:"linear-gradient(135deg,#7fb77e,#0e2414)",glyph:"hz"},{bg:"linear-gradient(135deg,#e89a5c,#3a200e)",glyph:"\xa7"},{bg:"linear-gradient(135deg,#6aa8d8,#10283a)",glyph:"▦"},{bg:"linear-gradient(135deg,#c4b24a,#2a2410)",glyph:"◎"},{bg:"linear-gradient(135deg,#8b7bff,#1a1a40)",glyph:"✱"},{bg:"linear-gradient(135deg,#f97583,#3a1418)",glyph:"‼"}],eO=["#f78166","#d29922","#3fb950","#58a6ff","#a371f7"],eK=[40,65,52,78,30,88,45,70,58,82,35,62,72,48,90,55],eq=[{bg:"linear-gradient(135deg,#d29922,#3a2a10)",glyph:"{}",active:!0},{bg:"linear-gradient(135deg,#58a6ff,#10243a)",glyph:"/~"},{bg:"linear-gradient(135deg,#a371f7,#1a1430)",glyph:"◐"},{bg:"linear-gradient(135deg,#3fb950,#10301a)",glyph:"▤"},{bg:"linear-gradient(135deg,#f78166,#3a200e)",glyph:"#"},{bg:"linear-gradient(135deg,#79c0ff,#14243a)",glyph:"Δ"},{bg:"linear-gradient(135deg,#c4b24a,#2a2410)",glyph:"◇"},{bg:"linear-gradient(135deg,#ff6fa9,#3a1424)",glyph:"*/"},{bg:"linear-gradient(135deg,#8b7bff,#1a1a40)",glyph:"⧖"},{bg:"linear-gradient(135deg,#6aa8d8,#10283a)",glyph:"⎈"},{bg:"linear-gradient(135deg,#e89a5c,#3a200e)",glyph:"⟶"},{bg:"linear-gradient(135deg,#7fb77e,#0e2414)",glyph:"∎"}];function eB({vizId:e,label:t,description:a,hash:r,category:n,accentColor:s,needsAuth:d,pinned:c,index:p=0,onClick:u,onTogglePin:m,reorderControls:g,onHoverIntent:h,extra:f}){let b=Object.prototype.hasOwnProperty.call(eR,e)?e:"generic",x=(0,o.useRef)(null),y=(0,o.useRef)(!1),w=()=>{null!==x.current&&(window.clearTimeout(x.current),x.current=null)};return(0,o.useEffect)(()=>w,[]),(0,i.jsxs)(eC,{role:"button",tabIndex:0,accentColor:s,pinned:c,index:p,onClick:u,onMouseEnter:h?()=>{h&&!y.current&&(w(),x.current=window.setTimeout(()=>{y.current=!0,x.current=null,h()},200))}:void 0,onMouseLeave:h?w:void 0,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),u())},children:[g&&(0,i.jsx)(eD,{className:"pin-controls",children:g}),m&&(0,i.jsx)(eI,{className:"pin-btn",type:"button",pinned:!!c,"aria-label":c?"Unpin":"Pin to top",onClick:e=>{e.stopPropagation(),m?.()},children:(0,i.jsx)(F,{name:"pin",size:14})}),(0,i.jsx)(eT,{className:`viz viz--${b}`,accentColor:s,children:function(e,t,a){switch(e){case"markdown":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"h"}),(0,i.jsx)("span",{className:"l1"}),(0,i.jsx)("span",{className:"l2"}),(0,i.jsx)("span",{className:"l3"}),(0,i.jsx)("span",{className:"l4"})]});case"school":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"lb",children:"School"}),(0,i.jsx)("div",{className:"col"}),(0,i.jsx)("div",{className:"col"}),(0,i.jsx)("div",{className:"col"}),(0,i.jsx)("div",{className:"col"})]});case"earth":return(0,i.jsx)("div",{className:"g"});case"cosmos":case"citypulse":case"chartbuilder":return null;case"techscope":return(0,i.jsx)(i.Fragment,{children:eK.map((e,t)=>(0,i.jsx)("span",{style:{height:`${e}%`}},t))});case"stockpulse":return(0,i.jsx)(i.Fragment,{children:[0,1,0,0,1,0,0,0,1,0,0,0].map((e,t)=>(0,i.jsx)("div",{className:e?"c r":"c"},t))});case"csvexplorer":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"h",children:"id"}),(0,i.jsx)("span",{className:"h",children:"name"}),(0,i.jsx)("span",{className:"h",children:"qty"}),(0,i.jsx)("span",{className:"h",children:"px"}),(0,i.jsx)("span",{children:"01"}),(0,i.jsx)("span",{children:"alfa"}),(0,i.jsx)("span",{children:"12"}),(0,i.jsx)("span",{children:"1.2"}),(0,i.jsx)("span",{children:"02"}),(0,i.jsx)("span",{children:"beta"}),(0,i.jsx)("span",{children:"8"}),(0,i.jsx)("span",{children:"0.9"})]});case"pad":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"t"}),(0,i.jsx)("span",{className:"a"}),(0,i.jsx)("span",{className:"b"}),(0,i.jsx)("span",{className:"c"}),(0,i.jsx)("span",{className:"d"})]});case"regexlab":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"slash",children:"/"}),(0,i.jsx)("span",{children:"("}),(0,i.jsx)("span",{className:"hl",children:"[a-z]+"}),(0,i.jsx)("span",{children:")"}),(0,i.jsx)("span",{className:"slash",children:"/g"})]});case"jsonexplorer":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"b",children:"{"}),(0,i.jsx)("br",{}),"\xa0\xa0",(0,i.jsx)("span",{className:"k",children:'"user"'}),": ",(0,i.jsx)("span",{className:"v",children:'"dev"'}),",",(0,i.jsx)("br",{}),"\xa0\xa0",(0,i.jsx)("span",{className:"k",children:'"apps"'}),": ",(0,i.jsx)("span",{className:"b",children:"["}),(0,i.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,i.jsx)("span",{className:"v",children:'"markdown"'}),",",(0,i.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,i.jsx)("span",{className:"v",children:'"school"'}),(0,i.jsx)("br",{}),"\xa0\xa0",(0,i.jsx)("span",{className:"b",children:"]"}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"b",children:"}"})]});case"codediff":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"col",children:[(0,i.jsx)("span",{className:"a"}),(0,i.jsx)("span",{className:"n",style:{width:"70%"}}),(0,i.jsx)("span",{className:"a"}),(0,i.jsx)("span",{className:"n",style:{width:"55%"}}),(0,i.jsx)("span",{className:"n"}),(0,i.jsx)("span",{className:"n",style:{width:"80%"}})]}),(0,i.jsxs)("div",{className:"col",children:[(0,i.jsx)("span",{className:"g"}),(0,i.jsx)("span",{className:"n",style:{width:"70%"}}),(0,i.jsx)("span",{className:"g"}),(0,i.jsx)("span",{className:"g"}),(0,i.jsx)("span",{className:"n",style:{width:"55%"}}),(0,i.jsx)("span",{className:"n",style:{width:"80%"}})]})]});case"playground":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"tube"}),(0,i.jsx)("div",{className:"tube",style:{height:45}}),(0,i.jsx)("div",{className:"tube",style:{height:50}})]});case"jwtinspector":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"h",children:"header"}),(0,i.jsx)("span",{className:"sep",children:"\xb7"}),(0,i.jsx)("span",{className:"p",children:"payload"}),(0,i.jsx)("span",{className:"sep",children:"\xb7"}),(0,i.jsx)("span",{className:"s",children:"sig"})]});case"colorlab":return(0,i.jsx)(i.Fragment,{children:eO.map(e=>(0,i.jsx)("span",{style:{background:e}},e))});case"cronbuilder":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"row","data-l":"m",children:[(0,i.jsx)("span",{}),(0,i.jsx)("span",{className:"on"}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{className:"on"}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{className:"on"}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{className:"on"}),(0,i.jsx)("span",{})]}),(0,i.jsxs)("div",{className:"row","data-l":"h",children:[(0,i.jsx)("span",{className:"on"}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{className:"on"}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{className:"on"}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{})]}),(0,i.jsxs)("div",{className:"row","data-l":"d",children:[(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{className:"on"}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{className:"on"}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{className:"on"}),(0,i.jsx)("span",{})]})]});case"weather":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"sun"}),(0,i.jsxs)("div",{className:"temp",children:["15",(0,i.jsx)("small",{children:"\xb0"})]})]});case"apiexplorer":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"get",children:"GET"})," ",(0,i.jsx)("span",{className:"url",children:"/api/v1/users/me"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"status",children:"200 OK"})," \xb7 42 ms"]}),(0,i.jsx)("div",{className:"echo",children:'→ { id: 1, role: "dev" }'})]});case"movies":return(0,i.jsx)(i.Fragment,{children:eE.map((e,t)=>(0,i.jsx)("span",{style:{background:e}},t))});case"promptlab":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"bubble",children:"Write a haiku about the fog at 6am."}),(0,i.jsx)("div",{className:"bubble r",children:"Low mist. Bridge lamps hum. The ferry horn splits the grey…"})]});case"imagegen":return(0,i.jsx)("div",{className:"frame"});case"ask":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"ask-user",children:"Como ajudo?"}),(0,i.jsx)("div",{className:"ask-spark","aria-hidden":"true"}),(0,i.jsxs)("div",{className:"ask-reply",children:[(0,i.jsx)("span",{className:"h"}),(0,i.jsx)("span",{className:"b1"}),(0,i.jsx)("span",{className:"b2"}),(0,i.jsx)("span",{className:"b3"})]})]});case"devtools":return(0,i.jsx)(i.Fragment,{children:eq.map((e,t)=>(0,i.jsx)("span",{className:e.active?"active":"",style:{background:e.bg},children:e.glyph},t))});case"daily":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"ring r1"}),(0,i.jsx)("div",{className:"ring r2"}),(0,i.jsx)("div",{className:"ring r3"}),(0,i.jsx)("div",{className:"dot"})]});case"games":return(0,i.jsx)(i.Fragment,{children:eH.map((e,t)=>(0,i.jsx)("span",{style:{background:e.bg,color:e.fg??l.w4.colors.mainText},children:e.glyph},t))});default:return(0,i.jsx)("span",{className:"viz-mono",style:{color:a},children:function(e){let t=e.trim().split(/\s+/).filter(Boolean);if(0===t.length)return"\xb7\xb7";if(1===t.length){let e=t[0];return(e[0]+(e[1]??"\xb7")).toUpperCase().slice(0,2)}return(t[0][0]+t[1][0]).toUpperCase()}(t)})}}(b,t,s)}),(0,i.jsxs)(eA,{accentColor:s,children:[(0,i.jsx)("span",{className:"dot"}),(0,i.jsx)("span",{className:"cat",children:n}),d&&(0,i.jsx)("span",{className:"lock",children:"◉ AUTH"})]}),(0,i.jsxs)(eF,{children:[(0,i.jsxs)(eL,{children:[t,(0,i.jsx)("span",{className:"hash",children:r})]}),(0,i.jsx)(eN,{children:a}),f&&(0,i.jsx)(eP,{children:f})]})]})}s().button`
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
`;let eG={neutral:"rgba(255,255,255,0.06)",live:"rgba(127,183,126,0.16)",film:"rgba(232,154,92,0.18)",tv:"rgba(106,168,216,0.18)",accent:l.w4.colors.accentMuted},eW={neutral:l.w4.colors.mainTextMuted,live:l.w4.colors.success,film:"#e89a5c",tv:"#6aa8d8",accent:l.w4.colors.accent},eY=s().span`
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
  background: ${({tone:e})=>eG[e]};
  color: ${({tone:e})=>eW[e]};
`,e_=s().span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
`;function eV({tone:e="neutral",dot:t,children:a,...o}){return(0,i.jsxs)(eY,{tone:e,...o,children:[(t??"live"===e)&&(0,i.jsx)(e_,{}),a]})}let eU=s().kbd`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${l.w4.colors.border};
  border-radius: 3px;
  color: ${l.w4.colors.mainTextFaint};
  background: transparent;
  letter-spacing: 0.4px;
  white-space: nowrap;
`;function eJ({children:e,...t}){return(0,i.jsx)(eU,{...t,children:e})}let eQ=s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${l.w4.colors.mainTextMuted};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;function eX({children:e,...t}){return(0,i.jsx)(eQ,{...t,children:e})}let eZ=s().label`
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
`,e0=s().input`
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
`,e1=s().span`
  display: inline-flex;
  align-items: center;
  color: ${l.w4.colors.mainTextMuted};
  flex-shrink: 0;
`,e4=r().forwardRef(function({before:e,after:t,...a},o){return(0,i.jsxs)(eZ,{children:[e&&(0,i.jsx)(e1,{children:e}),(0,i.jsx)(e0,{ref:o,...a}),t&&(0,i.jsx)(e1,{children:t})]})}),e2=s().div`
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
`,e5=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
`,e3=s().div`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.mainTextFaint};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,e8=s().div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,e6=s().div`
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
`,e7=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${l.w4.colors.danger};
`;function e9({title:e,accessory:t,accentColor:a,error:o,errorLabel:r,children:n}){return(0,i.jsxs)(e2,{accentColor:a,"data-widget-shell":!0,children:[(0,i.jsxs)(e5,{children:[(0,i.jsx)(eX,{children:e}),t&&(0,i.jsx)(e3,{children:t})]}),o?(0,i.jsxs)(e6,{role:"alert",children:[(0,i.jsx)(e7,{children:r??"Error"}),(0,i.jsx)("div",{children:o})]}):(0,i.jsx)(e8,{children:n})]})}s().div`
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
`;let te=(0,C.keyframes)`
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
  animation: ${te} 0.4s ease both;
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
`;var tt=a(11352),ta=a(76710),ti=a(4311),to=a(73639),tr=a(40080);a(75406),s().nav`padding: ${l.w4.spacing.sm} 0;`,s().div`
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
`;var tn=a(54041);let ts="https://cdn.jsdelivr.net/npm/mermaid@11.14.0/dist/mermaid.min.js",tl=null,td="#7fb77e",tc=(0,C.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,tp=s().div`
  position: relative;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  padding: 28px ${l.w4.spacing.lg} ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  text-align: center;
  min-height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${tc} 0.25s ease both;
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
    background: ${td};
  }

  /* Uppercase mono eyebrow tag — reads "◉ DIAGRAM" */
  &::after {
    content: '◉ DIAGRAM';
    position: absolute;
    top: 10px;
    right: 14px;
    font-family: ${l.w4.typography.fontFamilyMono};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    color: ${td};
    opacity: 0.75;
    pointer-events: none;
  }

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: ${l.w4.elevation.sm};
  }

  svg { max-width: 100%; height: auto; }
  svg text { font-variant-numeric: tabular-nums; }
`,tu=s().div`
  height: 36px;
  width: min(60%, 240px);
  margin: 0 auto;
  border-radius: ${l.w4.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${l.w4.colors.border} 0%,
    ${l.w4.colors.borderStrong} 50%,
    ${l.w4.colors.border} 100%
  );
  background-size: 200% 100%;
  animation: ${(0,C.keyframes)`
    from { background-position: 200% 0; }
    to   { background-position: -200% 0; }
  `} 1.6s ease-in-out infinite;
  opacity: 0.45;
`,tm=s().pre`
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
`,tg=!1,th=/^(?:---[\s\S]*?---\s*)?(?:graph|flowchart|sequenceDiagram|classDiagram|stateDiagram(?:-v2)?|erDiagram|pie|gantt|journey|mindmap|gitGraph|sankey(?:-beta)?|quadrantChart|requirementDiagram|timeline|xychart-beta|block-beta|C4Context|C4Container|C4Component|C4Dynamic|C4Deployment)\b/;function tf({code:e}){let[t,a]=(0,o.useState)(""),[r,n]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{let t=!1;n(!1),a("");let i=e.trim();if(!i)return void n(!0);let o=i.split(/\r?\n/)[0]?.trim()??"";if(!th.test(o))return void n(!0);let r=setTimeout(()=>{t||(console.error("[MermaidBlock] render timed out after 5s"),n(!0))},5e3);return(async()=>{try{let e=await (tl||(tl=new Promise((e,t)=>{let a=globalThis.mermaid;if(a)return void e(a);let i=document.createElement("script");i.src=ts,i.async=!0,i.onload=()=>{let a=globalThis.mermaid;a?e(a):t(Error("mermaid loaded but globalThis.mermaid missing"))},i.onerror=()=>t(Error(`failed to load ${ts}`)),document.head.appendChild(i)})));if(console.debug("[MermaidBlock] mermaid ready",{initialized:tg}),!tg){let t="#141820",a="#1c2332",i="#343c4f",o="#e8edf5",r="#9aa5b8",n="#7fb77e",s="#6aa8d8",l="#8b7bff",d="#e89a5c",c="#f87171";e.initialize({startOnLoad:!1,theme:"base",securityLevel:"loose",themeVariables:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",background:t,mainBkg:a,primaryColor:n,primaryTextColor:o,primaryBorderColor:n,secondaryColor:l,secondaryTextColor:o,secondaryBorderColor:l,tertiaryColor:s,tertiaryTextColor:o,tertiaryBorderColor:s,lineColor:r,textColor:o,nodeBorder:i,clusterBkg:t,clusterBorder:i,edgeLabelBackground:a,labelBackground:a,labelBorder:i,relationLabelBackground:a,relationLabelColor:o,pie1:n,pie2:l,pie3:s,pie4:d,pie5:"#ff6fa9",pie6:"#2dd4bf",pie7:c,pie8:n,pieStrokeColor:t,pieStrokeWidth:"2px",pieTitleTextSize:"18px",pieSectionTextSize:"13px",pieLegendTextSize:"13px",actorBkg:n,actorBorder:n,actorTextColor:t,signalColor:o,signalTextColor:o,labelBoxBkgColor:a,labelBoxBorderColor:i,labelTextColor:o,loopTextColor:o,noteBkgColor:d,noteBorderColor:d,noteTextColor:t,stateBkg:a,altBackground:t,attributeBackgroundColorOdd:a,attributeBackgroundColorEven:t,rowOdd:a,rowEven:t,gridColor:i,sectionBkgColor:a,sectionBkgColor2:t,taskBkgColor:l,taskTextColor:o,taskTextDarkColor:o,taskTextLightColor:o,taskTextOutsideColor:o,activeTaskBkgColor:n,activeTaskBorderColor:n,doneTaskBkgColor:r,doneTaskBorderColor:r,critBkgColor:c,critBorderColor:c}}),tg=!0}console.debug("[MermaidBlock] calling mermaid.render");let{svg:o}=await e.render(`mermaid-${(0,tn.z)()}`,i);if(clearTimeout(r),console.debug("[MermaidBlock] render returned",{length:o?.length??0}),t)return;if(!o||/aria-roledescription="error"/i.test(o))return void n(!0);a(o)}catch(e){clearTimeout(r),console.error("[MermaidBlock] render failed",e),t||n(!0)}})(),()=>{t=!0,clearTimeout(r)}},[e]),r)?(0,i.jsx)(tm,{children:e.trim()}):t?(0,i.jsx)(tp,{dangerouslySetInnerHTML:{__html:t}}):(0,i.jsx)(tp,{children:(0,i.jsx)(tu,{"aria-hidden":!0})})}let tb=["#388bfd","#3fb950","#d29922","#a371f7","#f87171","#22d3ee","#fb923c","#34d399","#f472b6","#818cf8"],tx=s().div`
  background: ${l.w4.colors.codeBg};
  border: 1px solid ${l.w4.colors.codeBorder};
  border-radius: ${l.w4.borderRadius.md};
  padding: ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ty=s().div`
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 600;
  color: ${l.w4.colors.mainText};
  margin-bottom: ${l.w4.spacing.md};
  text-align: center;
`,tw=s().div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${l.w4.spacing.sm} ${l.w4.spacing.md};
  margin-top: ${l.w4.spacing.md};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  color: ${l.w4.colors.mainTextMuted};
`,tv=s().span`
  display: flex;
  align-items: center;
  gap: 6px;
`,t$=s().span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  flex-shrink: 0;
`,tk=s().pre`
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
`;function tj(e){if(e<=0)return 10;let t=Math.pow(10,Math.floor(Math.log10(e)));return Math.ceil(e/t)*t}function tM({labels:e,data:t,colors:a}){let o=340,r=176,n=tj(Math.max(...t,1)),s=Math.min(40,o/e.length*.6),d=o/e.length,c=Array.from({length:6},(e,t)=>n/5*t);return(0,i.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[c.map((e,t)=>{let a=16+r-e/n*r;return(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:44,y1:a,x2:384,y2:a,stroke:l.w4.colors.border,strokeWidth:.5,strokeDasharray:0===t?"none":"3,3"}),(0,i.jsx)("text",{x:38,y:a+4,fill:l.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:l.w4.typography.fontFamily,children:Math.round(e)})]},t)}),t.map((t,o)=>{let c=44+d*o+d/2-s/2,p=t/n*r,u=16+r-p,m=a[o%a.length];return(0,i.jsxs)("g",{children:[(0,i.jsxs)("rect",{x:c,y:u,width:s,height:p,rx:3,fill:m,opacity:.85,children:[(0,i.jsx)("animate",{attributeName:"height",from:"0",to:p,dur:"0.5s",fill:"freeze"}),(0,i.jsx)("animate",{attributeName:"y",from:16+r,to:u,dur:"0.5s",fill:"freeze"})]}),(0,i.jsx)("text",{x:c+s/2,y:u-4,fill:l.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:t}),(0,i.jsx)("text",{x:44+d*o+d/2,y:208,fill:l.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:e[o].length>8?e[o].slice(0,7)+"…":e[o]})]},o)})]})}function tS({labels:e,data:t,colors:a}){let o=t.reduce((e,t)=>e+t,0)||1,r=-Math.PI/2,n=t.map((e,t)=>{let n=e/o*Math.PI*2,s=r,d=r+=n,c=120+90*Math.cos(s),p=120+90*Math.sin(s),u=120+90*Math.cos(d),m=120+90*Math.sin(d),g=+(n>Math.PI),h=s+n/2,f=120+58.5*Math.cos(h),b=120+58.5*Math.sin(h),x=Math.round(e/o*100);return(0,i.jsxs)("g",{children:[(0,i.jsx)("path",{d:`M 120 120 L ${c} ${p} A 90 90 0 ${g} 1 ${u} ${m} Z`,fill:a[t%a.length],stroke:l.w4.colors.codeBg,strokeWidth:2,opacity:.85}),x>=5&&(0,i.jsxs)("text",{x:f,y:b+4,fill:"#fff",fontSize:11,fontWeight:600,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:[x,"%"]})]},t)});return(0,i.jsx)("svg",{viewBox:"0 0 240 240",width:"100%",style:{maxWidth:240},children:n})}function tz({labels:e,data:t,colors:a}){let o=340,r=176,n=tj(Math.max(...t,1)),s=t.length>1?o/(t.length-1):o,d=a[0],c=t.map((e,t)=>({x:44+s*t,y:16+r-e/n*r})),p=c.map((e,t)=>`${0===t?"M":"L"} ${e.x} ${e.y}`).join(" "),u=Array.from({length:6},(e,t)=>n/5*t);return(0,i.jsxs)("svg",{viewBox:"0 0 400 240",width:"100%",style:{maxWidth:400},children:[u.map((e,t)=>{let a=16+r-e/n*r;return(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:44,y1:a,x2:384,y2:a,stroke:l.w4.colors.border,strokeWidth:.5,strokeDasharray:0===t?"none":"3,3"}),(0,i.jsx)("text",{x:38,y:a+4,fill:l.w4.colors.mainTextMuted,fontSize:10,textAnchor:"end",fontFamily:l.w4.typography.fontFamily,children:Math.round(e)})]},t)}),(0,i.jsx)("path",{d:p,fill:"none",stroke:d,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),c.map((a,o)=>(0,i.jsxs)("g",{children:[(0,i.jsx)("circle",{cx:a.x,cy:a.y,r:4,fill:d,stroke:l.w4.colors.codeBg,strokeWidth:2}),(0,i.jsx)("text",{x:a.x,y:a.y-10,fill:l.w4.colors.mainText,fontSize:10,fontWeight:600,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:t[o]}),(0,i.jsx)("text",{x:a.x,y:208,fill:l.w4.colors.mainTextMuted,fontSize:10,textAnchor:"middle",fontFamily:l.w4.typography.fontFamily,children:e[o].length>8?e[o].slice(0,7)+"…":e[o]})]},o))]})}function tC({code:e}){let t=(0,o.useMemo)(()=>(function(e){let t,a,i=e.trim().split("\n"),o="bar",r=[],n=[];for(let e of i){let[i,...s]=e.split(":"),l=s.join(":").trim();if(l)switch(i.trim().toLowerCase()){case"type":["bar","pie","line"].includes(l.toLowerCase())&&(o=l.toLowerCase());break;case"title":t=l;break;case"labels":r=l.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim());break;case"data":n=l.replace(/^\[|\]$/g,"").split(",").map(e=>parseFloat(e.trim())||0);break;case"colors":a=l.replace(/^\[|\]$/g,"").split(",").map(e=>e.trim())}}return r.length&&n.length?{type:o,title:t,labels:r,data:n,colors:a}:null})(e),[e]);if(!t)return(0,i.jsx)(tk,{children:e.trim()});let a=t.colors??tb;return(0,i.jsxs)(tx,{children:[t.title&&(0,i.jsx)(ty,{children:t.title}),"bar"===t.type&&(0,i.jsx)(tM,{labels:t.labels,data:t.data,colors:a}),"pie"===t.type&&(0,i.jsx)(tS,{labels:t.labels,data:t.data,colors:a}),"line"===t.type&&(0,i.jsx)(tz,{labels:t.labels,data:t.data,colors:a}),(0,i.jsx)(tw,{children:t.labels.map((e,t)=>(0,i.jsxs)(tv,{children:[(0,i.jsx)(t$,{color:a[t%a.length]}),e]},t))})]})}s().div`
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
`;let tT=(0,C.keyframes)`
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
`;let tA=s().button`
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
    animation: ${tT} 0.2s ease;
  }

  &:hover {
    background: ${({accentColor:e})=>e}0c;
  }
`;s()(tA)`
  border-bottom: 1px solid ${l.w4.colors.border}80;
`,s()(tA)``,s().span`
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
`;var tF=a(17223),tL=a(21426),tN=a(25609),tP=a(20320);let tI=s().div`
  margin: ${l.w4.spacing.lg} 0;
  border-radius: ${l.w4.borderRadius.md};
  border: 1px solid ${l.w4.colors.codeBorder};
  overflow: hidden;
`,tD=s().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: #1c2128;
  border-bottom: 1px solid ${l.w4.colors.codeBorder};
`,tR=s().span`
  font-family: ${l.w4.typography.fontFamilyMono};
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  letter-spacing: 0.04em;
`,tE=s().button`
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
`,tH={...tL.A,'pre[class*="language-"]':{...tL.A['pre[class*="language-"]'],background:l.w4.colors.codeBg,margin:0,padding:"18px 20px",fontSize:"13px",lineHeight:"1.6",borderRadius:0},'code[class*="language-"]':{...tL.A['code[class*="language-"]'],background:"none",fontSize:"13px"}};function tO({lang:e="text",code:t}){let[a,r]=(0,o.useState)(!1);return(0,i.jsxs)(tI,{children:[(0,i.jsxs)(tD,{children:[(0,i.jsx)(tR,{children:e}),(0,i.jsxs)(tE,{copied:a,onClick:()=>{navigator.clipboard.writeText(t).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})},children:[a?(0,i.jsx)(tN.A,{size:12}):(0,i.jsx)(tP.A,{size:12}),a?"Copied!":"Copy"]})]}),(0,i.jsx)(tF.A,{language:e,style:tH,showLineNumbers:t.split("\n").length>8,lineNumberStyle:{color:"#484f58",minWidth:"2.5em",paddingRight:"1.5em",userSelect:"none",fontSize:"12px"},customStyle:{margin:0,background:l.w4.colors.codeBg},wrapLongLines:!1,children:t})]})}var tK=a(65569),tq=a(8218),tB=a(57230),tG=a(22966),tW=a(21069);let tY={NOTE:{bg:"rgba(88, 166, 255, 0.08)",border:"#58a6ff",icon:tK.A,label:"Note",color:"#58a6ff"},TIP:{bg:"rgba(63, 185, 80, 0.08)",border:"#3fb950",icon:tq.A,label:"Tip",color:"#3fb950"},IMPORTANT:{bg:"rgba(163, 113, 247, 0.08)",border:"#a371f7",icon:tB.A,label:"Important",color:"#a371f7"},WARNING:{bg:"rgba(210, 153, 34, 0.08)",border:"#d29922",icon:tG.A,label:"Warning",color:"#d29922"},CAUTION:{bg:"rgba(248, 81, 73, 0.08)",border:"#f85149",icon:tW.A,label:"Caution",color:"#f85149"}},t_=s().div`
  background: ${({bg:e})=>e};
  border-left: 3px solid ${({border:e})=>e};
  border-radius: 0 ${l.w4.borderRadius.md} ${l.w4.borderRadius.md} 0;
  padding: ${l.w4.spacing.md} ${l.w4.spacing.lg};
  margin: ${l.w4.spacing.lg} 0;
`,tV=s().div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: ${l.w4.typography.fontSizeBase};
  color: ${({color:e})=>e};
  font-family: ${l.w4.typography.fontFamily};
  margin-bottom: ${l.w4.spacing.sm};
`,tU=s().div`
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  p:first-of-type { margin-top: 0; }
  p:last-of-type  { margin-bottom: 0; }
`;function tJ({type:e,children:t}){let a=tY[e]??tY.NOTE,o=a.icon;return(0,i.jsxs)(t_,{bg:a.bg,border:a.border,children:[(0,i.jsxs)(tV,{color:a.color,children:[(0,i.jsx)(o,{size:15,strokeWidth:2}),a.label]}),(0,i.jsx)(tU,{children:t})]})}s().nav`
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
`;let tQ=(0,C.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,tX=(0,C.keyframes)`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;function tZ(){let e=/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i;return t=>{function a(t,a,i){let o=a.children?.[0];o?.type==="text"&&(o.value=o.value.replace(e,""),o.value.trim()||1!==a.children.length||a.children.shift()),t.data=t.data??{},t.data.hName="div",t.data.hProperties={"data-callout":i.toUpperCase()}}!function t(i){if("blockquote"===i.type){let t=i.children?.[0];if(t?.type==="paragraph"){let o=t.children?.[0],r=o?.type==="text"&&o.value?.match(e);r&&a(i,t,r[1])}}if("paragraph"===i.type){let t=i.children?.[0],o=t?.type==="text"&&t.value?.match(e);if(o){let t=[...i.children];i.children=[{type:"paragraph",children:t}],a(i,i.children[0],o[1]);let r=t[0];r?.type==="text"&&(r.value=r.value.replace(e,""),r.value.trim()||1!==t.length||t.shift());return}}i.children?.forEach(t)}(t)}}s().div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: min(12vh, 100px);
  animation: ${tQ} 0.15s ease;
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
  animation: ${tX} 0.2s ease;
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
`;let t0=s().div`
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
`;function t1({children:e}){return(0,i.jsx)(t0,{children:(0,i.jsx)(tt.oz,{remarkPlugins:[ta.A,ti.A,tZ],rehypePlugins:[to.A,tr.A],components:{div({node:e,children:t,...a}){let o=a["data-callout"];return o?(0,i.jsx)(tJ,{type:o,children:t}):(0,i.jsx)("div",{...a,children:t})},pre:({children:e})=>(0,i.jsx)(i.Fragment,{children:e}),code({className:e,children:t}){let a=/language-(\w+)/.exec(e??"")?.[1],o=String(t).replace(/\n$/,"");return o.trim()?"mermaid"===a?(0,i.jsx)(tf,{code:o}):"chart"===a?(0,i.jsx)(tC,{code:o}):a||o.includes("\n")?(0,i.jsx)(tO,{lang:a,code:o}):(0,i.jsx)("code",{className:e,children:t}):null}},children:e})})}s().nav`
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
`;let t4=(0,C.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,t2=s().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: auto;
  gap: ${l.w4.spacing.lg};

  @media (max-width: ${l.w4.breakpoints.lg}) {
    gap: ${l.w4.spacing.md};
  }

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,t5=s().div`
  grid-column: ${({fullWidth:e,colSpan:t})=>e?"1 / -1":`span ${t}`};
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${t4} 0.25s ease both;

  @media (max-width: ${l.w4.breakpoints.md}) {
    grid-column: span 1;
  }
`,t3=s().div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  margin-bottom: 0;
  height: 20px;
`,t8=s().div`
  --panel-accent: ${({accent:e})=>e??l.w4.colors.accent};
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: ${({minH:e})=>e}px;
  height: 100%;
  padding: ${l.w4.spacing.lg};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.lg};
  transition:
    border-color ${l.w4.transitions.base},
    box-shadow ${l.w4.transitions.base},
    transform ${l.w4.transitions.base};

  /* Left accent bar */
  &::before {
    content: '';
    position: absolute;
    top: 14px; bottom: 14px; left: 0;
    width: 2px;
    background: var(--panel-accent);
    border-radius: 0 2px 2px 0;
    opacity: 0.7;
  }

  /* Grip visual affordance left edge */
  &[data-grip='true']::after {
    content: '';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 24px;
    border-left: 2px dotted ${l.w4.colors.borderSubtle};
    border-right: 2px dotted ${l.w4.colors.borderSubtle};
    opacity: 0.4;
  }

  &:hover {
    border-color: ${l.w4.colors.borderStrong};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px ${l.w4.colors.shadow};
  }

  /* WidgetShell owns its chrome — zero ours to avoid double frame. */
  &:has(> [data-widget-shell]) {
    padding: 0;
    background: transparent;
    border-color: transparent;
  }
  &:has(> [data-widget-shell])::before,
  &:has(> [data-widget-shell])::after { display: none; }
  &:has(> [data-widget-shell]):hover {
    border-color: transparent;
    box-shadow: none;
    transform: none;
  }

  /* Controls visible on hover (pointer devices); always slightly visible on touch. */
  &:hover .panel-controls { opacity: 1; }

  @media (hover: none) {
    .panel-controls {
      opacity: 0.4;
      transform: scale(0.87);
      transform-origin: top right;
    }
  }
`,t6=s().div`
  position: absolute;
  top: -20px;
  right: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0;
  transition: opacity ${l.w4.transitions.fast};
  z-index: 2;
`,t7=s().button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainTextMuted};
  cursor: pointer;
  transition:
    color ${l.w4.transitions.fast},
    border-color ${l.w4.transitions.fast},
    background ${l.w4.transitions.fast};

  &:hover {
    color: ${l.w4.colors.mainText};
    border-color: ${l.w4.colors.mainTextMuted};
    background: ${l.w4.colors.surfaceRaised};
  }
`,t9=s()(t7)`
  &:hover {
    color: #f85149;
    border-color: rgba(248, 81, 73, 0.4);
  }
`;function ae({size:e}){return(0,i.jsxs)("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:[(0,i.jsx)("rect",{x:1.5,y:4.5,width:11,height:5,rx:1,stroke:"currentColor",strokeWidth:1,opacity:.4}),(0,i.jsx)("rect",{x:2,y:5,width:"sm"===e?4:"md"===e?7:11,height:4,rx:.5,fill:"currentColor"})]})}let at={sm:1,md:2,lg:"full"};function aa({items:e,onReorder:t,onCycleSize:a,onRemove:o,renderPanel:r,renderAccessory:n,showGrip:s=!0,labels:l,accentColor:d}){return(0,i.jsx)(t2,{children:e.map((c,p)=>{let u=at[c.size],m="full"===u,g=c.minHeight??160,h=d?.(c),f=(c.availableSizes??["sm","md","lg"]).length>1,b=n?.(c);return(0,i.jsxs)(t5,{colSpan:m?1:u,fullWidth:m,children:[b&&(0,i.jsx)(t3,{children:b}),(0,i.jsxs)(t8,{minH:g,accent:h,"data-grip":s?"true":"false",children:[(0,i.jsxs)(t6,{className:"panel-controls",children:[p>0&&(0,i.jsx)(t7,{type:"button",title:l.moveLeft,onClick:()=>t(c.id,-1),children:(0,i.jsx)(F,{name:"chevron-left",size:14})}),p<e.length-1&&(0,i.jsx)(t7,{type:"button",title:l.moveRight,onClick:()=>t(c.id,1),children:(0,i.jsx)(F,{name:"chevron-right",size:14})}),f&&(0,i.jsx)(t7,{type:"button",title:`${l.cycleSize} \xb7 ${c.size.toUpperCase()}`,onClick:()=>a(c.id),children:(0,i.jsx)(ae,{size:c.size})}),o&&l.remove&&(0,i.jsx)(t9,{type:"button",title:l.remove,onClick:()=>o(c.id),children:(0,i.jsx)(F,{name:"close",size:14})})]}),r(c)]})]},c.id)})})}let ai=(0,C.keyframes)`
  from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
`;s().div`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 200;
  animation: ${ai} 0.16s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Arrow pointing left */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${l.w4.colors.accentMuted};
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${l.w4.colors.surface};
  }
`,s().span`
  display: block;
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.accentMuted};
  box-shadow:
    0 0 0 1px ${l.w4.colors.borderSubtle},
    0 8px 32px rgba(0, 0, 0, 0.5);
  color: ${l.w4.colors.mainText};
  font-size: 12px;
  font-weight: 500;
  font-family: ${l.w4.typography.fontFamily};
  letter-spacing: 0.01em;
  padding: 5px 10px;
  border-radius: ${l.w4.borderRadius.md};
  white-space: nowrap;
  backdrop-filter: blur(8px);
`,s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`,s().div`
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.lg};
  padding: 24px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
`,s().div`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
`,s().input`
  width: 100%;
  padding: 8px 12px;
  background: ${l.w4.colors.mainBg};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamilyMono};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus { border-color: ${l.w4.colors.accent}; }
  &::placeholder { color: ${l.w4.colors.sidebarTextMuted}; }
`,s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,s().button`
  padding: 7px 18px;
  border-radius: ${l.w4.borderRadius.md};
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;

  border-radius: 20px;
  background: ${({primary:e,danger:t})=>t?"rgba(248,81,73,0.12)":e?l.w4.colors.accent:"none"};
  color: ${({primary:e,danger:t})=>t?l.w4.colors.danger:e?"#fff":l.w4.colors.mainText};
  border: 1px solid ${({primary:e,danger:t})=>t?l.w4.colors.danger:e?l.w4.colors.accent:l.w4.colors.border};

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: default; }
`,s().div`
  height: 1px;
  background: ${l.w4.colors.border};
  margin: 0 -4px;
`,s().div`
  font-size: 11px;
  color: ${l.w4.colors.sidebarTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`;let ao=(0,C.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ar=(0,C.keyframes)`
  from { opacity: 0; transform: scale(0.96) translateY(6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);   }
`,an=s().div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: ${l.w4.spacing.md};
  animation: ${ao} 0.15s ease both;
`,as=s().div`
  background: ${l.w4.colors.sidebarBg};
  border: 1px solid ${({danger:e})=>e?l.w4.colors.danger+"55":l.w4.colors.sidebarBorder};
  border-radius: ${l.w4.borderRadius.lg};
  padding: 24px;
  width: 400px;
  max-width: 100%;
  box-shadow: ${l.w4.elevation.lg};
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${ar} 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
`,al=s().div`
  font-size: ${l.w4.typography.fontSizeMd};
  font-weight: 700;
  color: ${({danger:e})=>e?l.w4.colors.danger:l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
`,ad=s().div`
  font-size: ${l.w4.typography.fontSizeBase};
  line-height: 1.5;
  color: ${l.w4.colors.mainTextMuted};
  font-family: ${l.w4.typography.fontFamily};
`,ac=s().div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: ${l.w4.spacing.sm};
`,ap=s().button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: ${l.w4.typography.fontSizeBase};
  font-family: ${l.w4.typography.fontFamily};
  font-weight: 600;
  cursor: pointer;
  transition: background ${l.w4.transitions.fast},
    border-color ${l.w4.transitions.fast},
    color ${l.w4.transitions.fast},
    opacity ${l.w4.transitions.fast};

  background: ${({primary:e,danger:t})=>t?l.w4.colors.danger:e?l.w4.colors.accent:"transparent"};
  color: ${({primary:e,danger:t})=>t||e?"#fff":l.w4.colors.mainText};
  border: 1px solid
    ${({primary:e,danger:t})=>t?l.w4.colors.danger:e?l.w4.colors.accent:l.w4.colors.border};

  &:hover { opacity: 0.88; }
  &:focus-visible { ${l.w4.focusRing} }
`;function au({open:e,title:t,message:a,confirmLabel:r,cancelLabel:n,onConfirm:s,onCancel:l,danger:d=!1}){return((0,o.useEffect)(()=>{if(!e)return;let t=e=>{"Escape"===e.key&&l(),"Enter"===e.key&&s()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[e,l,s]),e)?(0,i.jsx)(an,{onClick:l,role:"dialog","aria-modal":"true","aria-label":t,children:(0,i.jsxs)(as,{danger:d,onClick:e=>e.stopPropagation(),children:[(0,i.jsx)(al,{danger:d,children:t}),(0,i.jsx)(ad,{children:a}),(0,i.jsxs)(ac,{children:[(0,i.jsx)(ap,{onClick:l,children:n}),(0,i.jsx)(ap,{danger:d,primary:!d,onClick:s,autoFocus:!0,children:r})]})]})}):null}let am=(0,C.keyframes)`
  from { opacity: 0; }
  to   { opacity: 1; }
`,ag=(0,C.keyframes)`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,ah=(0,C.keyframes)`
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1); }
`,af=s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  background: ${l.w4.colors.mainBg};
  font-family: ${l.w4.typography.fontFamily};
  animation: ${am} 0.4s ease 0.15s both;
`,ab=s().div`
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`,ax=s().div`
  position: absolute;
  inset: 0;
  animation: ${ag} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
`,ay=s().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${l.w4.colors.border};
  animation: ${ah} 1.4s ease-in-out infinite;
`,aw=s().span`
  color: ${l.w4.colors.mainTextMuted};
  font-size: ${l.w4.typography.fontSizeSm};
  letter-spacing: 0.04em;
`;function av({label:e="Loading…"}){return(0,i.jsxs)(af,{children:[(0,i.jsxs)(ab,{children:[(0,i.jsx)(ax,{delay:0,size:8,color:l.w4.colors.accent}),(0,i.jsx)(ax,{delay:-.45,size:6,color:"#bc8cff"}),(0,i.jsx)(ax,{delay:-.9,size:5,color:"#3fb950"}),(0,i.jsx)(ay,{})]}),(0,i.jsx)(aw,{children:e})]})}s().button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 ${l.w4.spacing.sm};
  background: ${l.w4.colors.surface};
  border: 1px solid ${l.w4.colors.border};
  border-radius: ${l.w4.borderRadius.md};
  color: ${l.w4.colors.mainText};
  font-family: ${l.w4.typography.fontFamily};
  font-size: ${l.w4.typography.fontSizeSm};
  font-weight: 500;
  cursor: default;
  white-space: nowrap;
`,s().div`
  position: relative;
`},9391(e,t,a){a.d(t,{O:()=>n});var i=a(65723);a(37991);var o=a(45030);let r={sm:20,md:24,lg:28};function n({member:e,size:t="md"}){let a="number"==typeof t?t:r[t];return(0,i.jsx)(o.eu,{member:e,size:a})}},85043(e,t,a){a.d(t,{Y:()=>p});var i=a(65723),o=a(36859),r=a.n(o),n=a(94764);let s=r().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 80px;
  gap: 6px;
  padding: ${n.w4.spacing.md};
`,l=r().span`
  font-family: ${n.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({mode:e})=>n.w4.colors.mainTextMuted};
  opacity: ${({mode:e})=>"loading"===e?.5:.7};
`,d=r().p`
  font-size: ${n.w4.typography.fontSizeSm};
  color: ${n.w4.colors.mainTextMuted};
  opacity: 0.6;
  text-align: center;
  max-width: 240px;
  margin: 0;
  line-height: 1.5;
`,c={loading:"◌ Loading",empty:"◎ Empty",error:"◎ Offline"};function p({mode:e,label:t,body:a}){return(0,i.jsxs)(s,{children:[(0,i.jsx)(l,{mode:e,children:t??c[e]}),a&&(0,i.jsx)(d,{children:a})]})}},96246(e,t,a){a.d(t,{YG:()=>i.Y});var i=a(85043);a(65723),a(37991);var o=a(94764),r=a(36859),n=a.n(r);n().span`
  font-family: ${o.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
  color: ${({sign:e})=>"pos"===e?o.w4.colors.success:"neg"===e?o.w4.colors.danger:o.w4.colors.mainTextMuted};
  white-space: nowrap;
`,n().div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${o.w4.spacing.sm};
  padding: 4px 0;
  cursor: default;
  transition: background 0.12s;
  border-radius: 3px;

  &:hover {
    background: ${o.w4.colors.sidebarHover};
  }
`,n().a`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${o.w4.spacing.sm};
  padding: 4px 0;
  text-decoration: none;
  color: inherit;
  border-radius: 3px;
  transition: background 0.12s;

  &:hover {
    background: ${o.w4.colors.sidebarHover};
  }
`,n().div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
`,n().span`
  font-size: 13px;
  color: ${o.w4.colors.mainText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
`,n().span`
  font-size: 11px;
  font-family: ${o.w4.typography.fontFamilyMono};
  color: ${o.w4.colors.mainTextMuted};
  opacity: 0.75;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,n().span`
  font-family: ${o.w4.typography.fontFamilyMono};
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  color: ${o.w4.colors.mainTextMuted};
  white-space: nowrap;
  flex-shrink: 0;
  text-align: right;
`,a(83090),n().div`
  position: relative;
  height: 6px;
  background: ${o.w4.colors.border};
  border-radius: 3px;
  overflow: hidden;
`,n().div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 3px;
  width: ${({pct:e})=>Math.min(100,e)}%;
  background: ${({color:e})=>e};
  transition: width 400ms ease;
`,n().div`
  position: absolute;
  top: 0;
  height: 100%;
  left: ${({left:e})=>e}%;
  width: ${({width:e})=>e}%;
  background: ${"#f85149"};
  opacity: 0.7;
  transition: width 400ms ease;
`,a(9391),n().button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  height: 28px;
  min-height: 44px; /* touch target */
  border-radius: 999px;
  border: 1px solid ${({selected:e,color:t})=>e?t:o.w4.colors.border};
  background: ${({selected:e,color:t})=>e?`${t}22`:o.w4.colors.surface};
  color: ${o.w4.colors.mainText};
  font-size: 13px;
  font-family: ${o.w4.typography.fontFamily};
  cursor: pointer;
  white-space: nowrap;
  transition: border-color 120ms ease, background 120ms ease;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    border-color: ${({color:e})=>e};
    background: ${({color:e})=>`${e}11`};
  }

  &:focus-visible {
    outline: 2px solid ${o.w4.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,n().span`
  font-family: ${o.w4.typography.fontFamilyMono};
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  color: ${o.w4.colors.mainTextMuted};
`},83090(e,t,a){a.d(t,{B:()=>o});var i=a(28113);function o(e){let t=(0,i.cacheBackedProducer)({id:e.id,category:e.category,cacheKey:e.cacheKey,parse:e.parse});return{id:e.id,category:e.category,labelKey:e.labelKey,defaultEnabled:e.defaultEnabled,producer:t,start(){},stop(){}}}},10312(e,t,a){a.d(t,{A:()=>i});let i={id:"agenda",load:()=>a.e("6091").then(a.bind(a,31382)).then(e=>({default:e.AgendaWidget})),labels:{en:"Agenda Today",pt:"Agenda Hoje"},descriptions:{en:"Daily timeline — add and track your events",pt:"Linha do tempo di\xe1ria — adiciona e acompanha os teus eventos"},icon:"\uD83D\uDCC5",accentColor:"#6366f1",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:240,suite:"vida",defaultOnDashboard:!1,sources:[{id:"agenda-events",kind:"local",cacheKey:"agenda:events",labelKey:"sources.agendaEvents"}],persistedKeys:["agenda:events"]}},95318(e,t,a){a.d(t,{A:()=>i});let i={id:"analog-clock",load:()=>a.e("6184").then(a.bind(a,13147)).then(e=>({default:e.AnalogClockWidget})),labels:{en:"Analog Clock",pt:"Rel\xf3gio Anal\xf3gico"},descriptions:{en:"Classic clock face",pt:"Mostrador cl\xe1ssico de rel\xf3gio"},icon:"\uD83D\uDD50",accentColor:"#f87171",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[]}},88350(e,t,a){a.d(t,{A:()=>i});let i={id:"astro",load:()=>a.e("717").then(a.bind(a,36220)).then(e=>({default:e.AstroWidget})),labels:{en:"Astronomy",pt:"Astronomia"},descriptions:{en:"Moon phase, sun arc, and ISS passes",pt:"Fase da lua, arco solar e passagens da ISS"},icon:"☽",accentColor:"#8b7bff",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"sunrise-sunset",kind:"dal-client",labelKey:"sources.sunriseSunset"},{id:"iss-passes",kind:"bll-hook",labelKey:"sources.issPass"}]}},8740(e,t,a){a.d(t,{A:()=>i});let i={id:"bolsa",load:()=>a.e("5569").then(a.bind(a,20120)).then(e=>({default:e.BolsaWidget})),labels:{en:"Markets",pt:"Bolsa"},descriptions:{en:"Stocks and crypto prices with sparklines",pt:"A\xe7\xf5es e pre\xe7os cripto com sparklines"},icon:"▲",accentColor:"#7fb77e",defaultSize:"lg",defaultCols:2,maxCols:2,minHeight:280,suite:"vida",defaultOnDashboard:!1,sources:[{id:"coinGecko-markets",kind:"cache-key",cacheKey:"bolsa-markets",labelKey:"sources.coinGecko"},{id:"finnhub",kind:"bll-hook",labelKey:"sources.finnhub"}],persistedKeys:["widget-cache:bolsa-markets"]}},55523(e,t,a){a.d(t,{A:()=>i});let i={id:"clock",load:()=>a.e("5069").then(a.bind(a,48956)).then(e=>({default:e.ClockWidget})),labels:{en:"World Clock",pt:"Rel\xf3gio Mundial"},descriptions:{en:"Time across multiple zones",pt:"Horas em v\xe1rios fusos"},icon:"\uD83D\uDD50",accentColor:"#d29922",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:160,suite:"vida",defaultOnDashboard:!0,sources:[]}},73e3(e,t,a){a.d(t,{A:()=>i});let i={id:"daily-feed",load:()=>a.e("9300").then(a.bind(a,44879)).then(e=>({default:e.DailyFeedWidget})),labels:{en:"Daily Feed",pt:"Feed Di\xe1rio"},descriptions:{en:"Tech, movies, history, news — curated for today",pt:"Tech, filmes, hist\xf3ria, not\xedcias — curado para hoje"},icon:"\uD83D\uDCF0",accentColor:"#2dd4bf",defaultSize:"lg",defaultCols:2,maxCols:2,minHeight:280,suite:"vida",defaultOnDashboard:!0,sources:[{id:"techscope-hn",kind:"cache-key",cacheKey:"techscope-hn",labelKey:"sources.hackerNews"},{id:"trending-movies",kind:"cache-key",cacheKey:"trending-movies",labelKey:"sources.tmdb"},{id:"news-portugal",kind:"cache-key",cacheKey:"news-portugal",labelKey:"sources.rtp"},{id:"news-world",kind:"cache-key",cacheKey:"news-world",labelKey:"sources.cnn"},{id:"daily-progress",kind:"bll-hook",labelKey:"sources.dailyProgress"}]}},87517(e,t,a){a.d(t,{A:()=>i});let i={id:"habits",load:()=>a.e("2045").then(a.bind(a,26780)).then(e=>({default:e.HabitsWidget})),labels:{en:"Habits Grid",pt:"Grelha de H\xe1bitos"},descriptions:{en:"Your last 7 days of missions",pt:"Os teus \xfaltimas 7 dias de miss\xf5es"},icon:"\uD83C\uDFAF",accentColor:"#fb923c",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:200,suite:"vida",defaultOnDashboard:!0,sources:[{id:"daily-progress",kind:"bll-hook",cacheKey:"daily:progress",labelKey:"sources.dailyProgress"}],notifications:[{id:"daily",category:"daily.overdue",labelKey:"notifications.source.daily",producer:(0,a(28113).dailyProducer)({category:"daily.overdue"}),start(){},stop(){}}],persistedKeys:["daily:progress"]}},32013(e,t,a){a.d(t,{A:()=>r});var i=a(87611),o=a(28113);let r={id:"hackernews-hot",load:()=>a.e("9390").then(a.bind(a,33565)).then(e=>({default:e.HackerNewsHotWidget})),labels:{en:"Hacker News Hot",pt:"Em Alta no HN"},descriptions:{en:"Top stories from Hacker News",pt:"Hist\xf3rias em destaque no Hacker News"},icon:"\uD83D\uDD25",accentColor:"#f97316",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"hn-firebase",kind:"dal-client",cacheKey:"internet-hn-ids",labelKey:"sources.hackerNews",notifiable:!0}],notifications:[{id:"hn-front-page",category:"hn.frontPage",labelKey:"notifications.source.hnFrontPage",producer:{id:"hn-front-page",category:"hn.frontPage",async poll(){if((0,o.isMutedNow)("hn.frontPage"))return[];let e=await (0,i.fetchHnFrontPage)(5);if(!e?.hits)return[];let t=[];for(let a of e.hits){let e=a.created_at_i??(a.created_at?Date.parse(a.created_at)/1e3:NaN);Number.isFinite(e)&&t.push({id:`hn-front:${a.objectID}`,category:"hn.frontPage",ts:1e3*e,title:a.title,link:a.url??`https://news.ycombinator.com/item?id=${a.objectID}`,meta:{points:a.points,comments:a.num_comments}})}return t}},start(){},stop(){}}],persistedKeys:["widget-cache:internet-hn-ids"]}},43414(e,t,a){a.d(t,{A:()=>i});let i={id:"lab-launcher",load:()=>a.e("9504").then(a.bind(a,28675)).then(e=>({default:e.LabLauncherWidget})),labels:{en:"AI Lab Launcher",pt:"Lan\xe7ador Lab de IA"},descriptions:{en:"Quick access to AI tools",pt:"Acesso r\xe1pido \xe0s ferramentas de IA"},icon:"⟁",accentColor:"#5e4cbb",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:240,suite:"lab",defaultOnDashboard:!1,sources:[]}},20593(e,t,a){a.d(t,{A:()=>i});let i={id:"learn-launcher",load:()=>a.e("4422").then(a.bind(a,24853)).then(e=>({default:e.LearnLauncherWidget})),labels:{en:"Learning Launcher",pt:"Lan\xe7ador de Aprendizagem"},descriptions:{en:"Quick access to school and learning apps",pt:"Acesso r\xe1pido a apps de escola e aprendizagem"},icon:"⌘",accentColor:"#3e805f",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:240,suite:"learn",defaultOnDashboard:!1,sources:[]}},57438(e,t,a){a.d(t,{A:()=>i});let i={id:"live-data",load:()=>a.e("2266").then(a.bind(a,98689)).then(e=>({default:e.LiveDataWidget})),labels:{en:"Dashboard Health",pt:"Sa\xfade do Painel"},descriptions:{en:"Live API latency and FPS monitor",pt:"Monitor de lat\xeancia e FPS ao vivo"},icon:"\uD83D\uDCE1",accentColor:"#00d4ff",defaultSize:"lg",defaultCols:2,maxCols:2,minHeight:200,suite:"tools",defaultOnDashboard:!1,sources:[{id:"dal-telemetry",kind:"bll-hook",labelKey:"sources.dalTelemetry"}]}},75763(e,t,a){a.d(t,{A:()=>i});let i={id:"movies",load:()=>a.e("3509").then(a.bind(a,60308)).then(e=>({default:e.MoviesWidget})),labels:{en:"Trending Movies",pt:"Filmes em Alta"},descriptions:{en:"Top trending movies and series this week",pt:"Filmes e s\xe9ries em alta esta semana"},icon:"\uD83C\uDFAC",accentColor:"#f97316",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:280,suite:"ent",defaultOnDashboard:!0,sources:[{id:"tmdb-trending",kind:"cache-key",cacheKey:"trending-movies",labelKey:"sources.tmdb"}],persistedKeys:["widget-cache:trending-movies"]}},53(e,t,a){a.d(t,{A:()=>i});let i={id:"music",load:()=>a.e("4232").then(a.bind(a,88571)).then(e=>({default:e.MusicaWidget})),labels:{en:"Music",pt:"M\xfasica"},descriptions:{en:"Your recently played tracks",pt:"As tuas m\xfasicas recentes"},icon:"♪",accentColor:"#e89a5c",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"music-tracks",kind:"local",cacheKey:"music:tracks",labelKey:"sources.musicTracks"}],persistedKeys:["music:tracks"]}},19603(e,t,a){a.d(t,{A:()=>n});var i=a(28113),o=a(83090);function r(e){return function(t){if(!t?.items)return[];let a=[];return t.items.forEach(t=>{let o=Date.parse(t.pubDate);if(Number.isNaN(o)||(0,i.classifyPtNewsItem)(t.title,t.description)!==e)return;let r=t.link||t.title;a.push({id:`news-pt-${e}:${r}`,ts:o,title:t.title,link:t.link})}),a}}let n={id:"news-pt",load:()=>a.e("9392").then(a.bind(a,71507)).then(e=>({default:e.NewsPortugalWidget})),labels:{en:"PT News",pt:"Not\xedcias PT"},descriptions:{en:"Latest news from RTP",pt:"\xdaltimas not\xedcias da RTP"},icon:"\uD83D\uDCF0",accentColor:"#2da44e",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"rtp-rss",kind:"cache-key",cacheKey:"news-portugal",labelKey:"sources.rtp",notifiable:!0}],notifications:[(0,o.B)({id:"news-pt-tech",category:"news.pt.tech",labelKey:"notifications.source.newsPtTech",badgeColor:"#a371f7",cacheKey:"news-portugal",parse:r("tech")}),(0,o.B)({id:"news-pt-sports",category:"news.pt.sports",labelKey:"notifications.source.newsPtSports",badgeColor:"#3fb950",cacheKey:"news-portugal",parse:r("sports")}),(0,o.B)({id:"news-pt-business",category:"news.pt.business",labelKey:"notifications.source.newsPtBusiness",badgeColor:"#d29922",cacheKey:"news-portugal",parse:r("business")}),(0,o.B)({id:"news-pt-general",category:"news.pt.general",labelKey:"notifications.source.newsPtGeneral",badgeColor:"#2da44e",cacheKey:"news-portugal",parse:r("general")})],persistedKeys:["widget-cache:news-portugal"]}},72026(e,t,a){a.d(t,{A:()=>i});let i={id:"news-world",load:()=>a.e("7566").then(a.bind(a,94925)).then(e=>({default:e.NewsWorldWidget})),labels:{en:"World News",pt:"Not\xedcias Mundo"},descriptions:{en:"Latest news from CNN",pt:"\xdaltimas not\xedcias da CNN"},icon:"\uD83C\uDF0D",accentColor:"#cc0000",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"cnn-rss",kind:"cache-key",cacheKey:"news-world",labelKey:"sources.cnn",notifiable:!0}],notifications:[(0,a(83090).B)({id:"news-world",category:"news.world",labelKey:"notifications.source.newsWorld",badgeColor:"#cc0000",cacheKey:"news-world",parse:function(e){if(!e?.items)return[];let t=[];return e.items.forEach((e,a)=>{let i=Date.parse(e.pubDate);Number.isNaN(i)||t.push({id:`${i}-${a}`,ts:i,title:e.title,link:e.link})}),t}})],persistedKeys:["widget-cache:news-world"]}},77032(e,t,a){a.d(t,{A:()=>i});let i={id:"night-sky",load:()=>a.e("7890").then(a.bind(a,34201)).then(e=>({default:e.NightSkyWidget})),labels:{en:"Night Sky",pt:"C\xe9u Noturno"},descriptions:{en:"Constellation map for tonight",pt:"Mapa de constela\xe7\xf5es para esta noite"},icon:"✦",accentColor:"#6aa8d8",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:240,suite:"vida",defaultOnDashboard:!1,sources:[]}},34836(e,t,a){a.d(t,{A:()=>i});let i={id:"onthisday",load:()=>a.e("3921").then(a.bind(a,29752)).then(e=>({default:e.OnThisDayWidget})),labels:{en:"On This Day",pt:"Neste Dia"},descriptions:{en:"Historical events that happened today",pt:"Eventos hist\xf3ricos que aconteceram hoje"},icon:"\uD83D\uDCC5",accentColor:"#d29922",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"wikipedia-onthisday",kind:"cache-key",labelKey:"sources.wikipedia"}]}},23971(e,t,a){a.d(t,{A:()=>i});let i={id:"pet",load:()=>a.e("333").then(a.bind(a,28044)).then(e=>({default:e.PetWidget})),labels:{en:"Digital Pet",pt:"Animal Virtual"},descriptions:{en:"Your virtual cat companion",pt:"O teu gatinho virtual"},icon:"\uD83D\uDC31",accentColor:"#e8a0b0",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:220,suite:"vida",defaultOnDashboard:!1,sources:[{id:"pet-state",kind:"local",cacheKey:"pet-state",labelKey:"sources.petState"}],persistedKeys:["pet-state"]}},59798(e,t,a){a.d(t,{QuickLinksWidget:()=>y});var i=a(65723),o=a(37991),r=a(36859),n=a.n(r),s=a(72799),l=a(94764),d=a(45030),c=a(28170),p=a(98975),u=a(9900);let m=(0,s.keyframes)`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,g=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
  gap: 8px;
  flex: 1;
  align-content: start;
  animation: ${m} 0.25s ease both;
`,h=n().button`
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
`,f=n().span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({tint:e})=>e};
`,b=n().span`
  font-size: 11px;
  font-family: ${l.w4.typography.fontFamily};
  color: ${l.w4.colors.mainText};
  font-weight: 500;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,x=n().div`
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
`;function y({locale:e,pinnedAppIds:t=[],recentAppIds:a=[],apps:r=[],appMeta:n={},onSelectApp:s}){let m=(0,o.useMemo)(()=>(0,c.Nx)("pt"===e?"pt":"en",p.A),[e]),w=[...new Set([...t,...a])].slice(0,8).flatMap(e=>r.filter(t=>t.id===e));return(0,i.jsx)(d.rl,{title:m("quicklinks.title"),accentColor:u.A.accentColor,children:0===w.length?(0,i.jsx)(x,{children:m("quicklinks.empty")}):(0,i.jsx)(g,{children:w.map(e=>{let t=n[e.id],a=t?.label??e.label;return(0,i.jsxs)(h,{accentColor:t?.color??l.w4.colors.accent,onClick:()=>s?.(e),title:a,children:[(0,i.jsx)(f,{tint:t?.color??l.w4.colors.accent,children:t?.icon&&(0,i.jsx)(d.In,{name:t.icon,size:20,"aria-hidden":"true"})}),(0,i.jsx)(b,{children:a})]},e.id)})})})}},9900(e,t,a){a.d(t,{A:()=>i});let i={id:"quicklinks",load:()=>Promise.resolve().then(a.bind(a,59798)).then(e=>({default:e.QuickLinksWidget})),labels:{en:"Quick Links",pt:"Atalhos"},descriptions:{en:"Pin your favourite apps for quick access",pt:"Fixa as tuas apps favoritas para acesso r\xe1pido"},icon:"⚡",accentColor:"#3fb950",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:160,suite:"tools",defaultOnDashboard:!0,sources:[]}},11042(e,t,a){a.d(t,{A:()=>i});let i={id:"quotes",load:()=>a.e("9129").then(a.bind(a,37872)).then(e=>({default:e.QuotesWidget})),labels:{en:"Daily Quote",pt:"Cita\xe7\xe3o do Dia"},descriptions:{en:"An inspiring quote to start your day",pt:"Uma cita\xe7\xe3o inspiradora para come\xe7ar o dia"},icon:"\uD83D\uDCAC",accentColor:"#a371f7",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:160,suite:"vida",defaultOnDashboard:!1,sources:[]}},76461(e,t,a){a.d(t,{A:()=>i});let i={id:"reading",load:()=>a.e("4061").then(a.bind(a,9372)).then(e=>({default:e.ReadingWidget})),labels:{en:"Reading",pt:"Leitura"},descriptions:{en:"Track your current book, reading pace, and yearly goal",pt:"Acompanha o livro atual, o teu ritmo de leitura e a meta anual"},icon:"\uD83D\uDCD6",accentColor:"#a371f7",defaultSize:"sm",defaultCols:1,maxCols:2,minHeight:280,suite:"vida",defaultOnDashboard:!1,sources:[{id:"reading-state",kind:"local",cacheKey:"reading:state",labelKey:"sources.readingState"},{id:"open-library",kind:"dal-client",labelKey:"sources.openLibrary"}],persistedKeys:["reading:state"]}},25471(e,t,a){a.d(t,{A:()=>o});var i=a(83090);let o={id:"seismic",load:()=>a.e("5773").then(a.bind(a,38108)).then(e=>({default:e.SeismicWidget})),labels:{en:"PT Seismic",pt:"Sismicidade PT"},descriptions:{en:"Recent seismic activity in Portugal",pt:"Atividade s\xedsmica recente em Portugal"},icon:"\uD83C\uDF0B",accentColor:"#f97316",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"vida",defaultOnDashboard:!1,sources:[{id:"ipma",kind:"dal-client",cacheKey:"seismic-pt",labelKey:"sources.ipma",notifiable:!0},{id:"usgs",kind:"dal-client",cacheKey:"seismic-world",labelKey:"sources.usgs",notifiable:!0}],notifications:[(0,i.B)({id:"seismic-pt",category:"seismic.pt",labelKey:"notifications.source.seismicPt",badgeColor:"#f97316",cacheKey:"seismic-pt",parse:function(e){if(!Array.isArray(e))return[];let t=[];return e.forEach((e,a)=>{let i=Date.parse(e.time);if(Number.isNaN(i))return;let o=e.local||e.obsRegion||"?";t.push({id:`pt-${i}-${a}`,ts:i,title:`M ${e.mag.toFixed(1)} — ${o}`})}),t}}),(0,i.B)({id:"seismic-world",category:"seismic.world",labelKey:"notifications.source.seismicWorld",badgeColor:"#ea580c",cacheKey:"seismic-world",parse:function(e){return e?.features?e.features.map(e=>({id:e.id,ts:e.properties.time,title:`M ${e.properties.mag.toFixed(1)} — ${e.properties.place}`,link:e.properties.url})):[]}})],persistedKeys:["widget-cache:seismic-pt","widget-cache:seismic-world"]}},82537(e,t,a){a.d(t,{A:()=>i});let i={id:"streak",load:()=>a.e("1727").then(a.bind(a,59602)).then(e=>({default:e.StreakWidget})),labels:{en:"Daily Streak",pt:"S\xe9rie Di\xe1ria"},descriptions:{en:"Your habit streak and daily progress",pt:"A tua s\xe9rie de h\xe1bitos e progresso di\xe1rio"},icon:"\uD83D\uDD25",accentColor:"#fb923c",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:160,suite:"vida",defaultOnDashboard:!0,sources:[{id:"daily-progress",kind:"bll-hook",cacheKey:"daily:progress",labelKey:"sources.dailyProgress",notifiable:!0}],persistedKeys:["daily:progress"]}},55417(e,t,a){a.d(t,{A:()=>r});var i=a(87611),o=a(28113);let r={id:"techscope",load:()=>a.e("7923").then(a.bind(a,4942)).then(e=>({default:e.TechScopeLiveWidget})),labels:{en:"TechScope Live",pt:"TechScope Ao Vivo"},descriptions:{en:"Trending GitHub repos and Hacker News stories",pt:"Reposit\xf3rios GitHub e hist\xf3rias do Hacker News em alta"},icon:"⚡",accentColor:"#a371f7",defaultSize:"lg",defaultCols:2,maxCols:2,minHeight:240,suite:"learn",defaultOnDashboard:!0,sources:[{id:"github-trending",kind:"cache-key",cacheKey:"techscope-gh",labelKey:"sources.github",notifiable:!0},{id:"hn-algolia",kind:"cache-key",cacheKey:"techscope-hn",labelKey:"sources.hackerNews",notifiable:!0}],notifications:[{id:"github-trending",category:"github.trending",labelKey:"notifications.source.githubTrending",producer:{id:"github-trending",category:"github.trending",async poll(){if((0,o.isMutedNow)("github.trending"))return[];let e=await (0,i.fetchTrendingRepos)({days:7,perPage:5});if(!e?.items)return[];let t=[];for(let a of e.items){let e=a.created_at?Date.parse(a.created_at):NaN;if(!Number.isFinite(e))continue;let i=a.stargazers_count,o=a.language?` \xb7 ${a.language}`:"";t.push({id:`gh-trending:${a.id}`,category:"github.trending",ts:e,title:`${a.full_name} — ${i.toLocaleString()}★${o}`,link:a.html_url,meta:{stars:i,language:a.language,description:a.description}})}return t}},start(){},stop(){}},{id:"devto-weekly",category:"devto.weekly",labelKey:"notifications.source.devto",producer:{id:"devto-weekly",category:"devto.weekly",async poll(){if((0,o.isMutedNow)("devto.weekly"))return[];let e=await (0,i.fetchDevToArticles)({top:7,perPage:5});if(!e)return[];let t=[];for(let a of e){let e=Date.parse(a.published_at);if(!Number.isFinite(e))continue;let i=a.public_reactions_count??0,o=a.user?.name||a.user?.username,r=o?` — ${o}`:"";t.push({id:`devto:${a.id}`,category:"devto.weekly",ts:e,title:`${a.title}${r}`,link:a.url,meta:{reactions:i,comments:a.comments_count??0,readingTime:a.reading_time_minutes??null,tags:a.tag_list??[]}})}return t}},start(){},stop(){}}],persistedKeys:["widget-cache:techscope-gh","widget-cache:techscope-hn"]}},98975(e,t,a){a.d(t,{A:()=>i});let i={"sources.openMeteo":{en:"Open-Meteo (weather)",pt:"Open-Meteo (meteorologia)"},"sources.ipma":{en:"IPMA (Portugal seismic)",pt:"IPMA (sismicidade PT)"},"sources.usgs":{en:"USGS (world seismic)",pt:"USGS (sismicidade mundial)"},"sources.rtp":{en:"RTP Not\xedcias (RSS)",pt:"RTP Not\xedcias (RSS)"},"sources.cnn":{en:"CNN International (RSS)",pt:"CNN Internacional (RSS)"},"sources.coinGecko":{en:"CoinGecko (crypto prices)",pt:"CoinGecko (pre\xe7os cripto)"},"sources.finnhub":{en:"Finnhub (stock quotes)",pt:"Finnhub (cota\xe7\xf5es de a\xe7\xf5es)"},"sources.hackerNews":{en:"Hacker News",pt:"Hacker News"},"sources.wikipedia":{en:"Wikipedia (pageviews)",pt:"Wikip\xe9dia (visualiza\xe7\xf5es)"},"sources.googleTrends":{en:"Google Trends (RSS)",pt:"Google Trends (RSS)"},"sources.tmdb":{en:"TMDB (trending movies)",pt:"TMDB (filmes em alta)"},"sources.github":{en:"GitHub (trending repos)",pt:"GitHub (reposit\xf3rios em alta)"},"sources.sunriseSunset":{en:"Sunrise-Sunset API",pt:"API nascer/p\xf4r-do-sol"},"sources.issPass":{en:"ISS pass predictions",pt:"Previs\xf5es de passagem ISS"},"sources.dailyProgress":{en:"Daily Manager progress",pt:"Progresso do Gestor Di\xe1rio"},"sources.agendaEvents":{en:"Agenda (your events)",pt:"Agenda (os teus eventos)"},"sources.musicTracks":{en:"Music (saved tracks)",pt:"M\xfasica (m\xfasicas guardadas)"},"sources.readingState":{en:"Reading tracker",pt:"Registo de leitura"},"sources.openLibrary":{en:"Open Library (book covers)",pt:"Open Library (capas de livros)"},"sources.petState":{en:"Digital pet state",pt:"Estado do animal virtual"},"sources.askDocs":{en:"Ask session history",pt:"Hist\xf3rico de conversas Ask"},"sources.dalTelemetry":{en:"DAL request telemetry",pt:"Telemetria de pedidos DAL"},"widget.error.label":{en:"◎ Offline",pt:"◎ Offline"},"widget.error.body":{en:"Can't reach the source. Retrying soon.",pt:"Sem liga\xe7\xe3o \xe0 fonte. A tentar de novo."},"widget.loading":{en:"Loading…",pt:"A carregar…"},"widgets.dashboard":{en:"Dashboard",pt:"Painel"},"widgets.addWidget":{en:"Add widget",pt:"Adicionar widget"},"widgets.moveLeft":{en:"Move left",pt:"Mover para a esquerda"},"widgets.moveRight":{en:"Move right",pt:"Mover para a direita"},"widgets.remove":{en:"Remove",pt:"Remover"},"widgets.unpin":{en:"Unpin",pt:"Desafixar"},"widgets.open":{en:"Open",pt:"Abrir"},"widgets.emptyDashboard":{en:"Your dashboard is empty. Add some widgets!",pt:"O teu dashboard est\xe1 vazio. Adiciona widgets!"},"widgets.empty.title":{en:"Compose your dashboard.",pt:"Comp\xf5e o teu painel."},"widgets.empty.body":{en:"Pick the widgets that matter to you — news, weather, your streak, AI sessions. You can reorder and customize later.",pt:"Escolhe os widgets que te importam — not\xedcias, clima, a tua sequ\xeancia, conversas de IA. Podes reordenar e personalizar depois."},"widgets.empty.cta":{en:"Add your first widget",pt:"Adicionar o primeiro widget"},"widgets.picker.title":{en:"Add a widget.",pt:"Adicionar widget."},"widgets.picker.eyebrow":{en:"◇ Picker",pt:"◇ Cat\xe1logo"},"widgets.picker.subtitle":{en:"Pick from your widget catalog. Live data, glanceable.",pt:"Escolhe do cat\xe1logo de widgets. Dados ao vivo, num relance."},"widgets.picker.searchPlaceholder":{en:"Search widgets — e.g. weather, news, clock…",pt:"Procurar widgets — ex: meteorologia, not\xedcias, rel\xf3gio…"},"widgets.picker.empty":{en:"No widgets match. Try another keyword.",pt:"Nenhum widget corresponde. Tenta outra palavra."},"widgets.picker.close":{en:"Close",pt:"Fechar"},"widgets.picker.added":{en:"Added",pt:"Adicionado"},"widgets.picker.suite.all":{en:"All",pt:"Todos"},"widgets.picker.suite.tools":{en:"Tools",pt:"Ferramentas"},"dailyFeed.title":{en:"Daily feed",pt:"Feed di\xe1rio"},"dailyFeed.sub.tech":{en:"Tech \xb7 trending",pt:"Tech \xb7 em alta"},"dailyFeed.sub.movie":{en:"Trending this week",pt:"Em alta esta semana"},"dailyFeed.sub.history":{en:"On this day",pt:"Neste dia"},"dailyFeed.sub.news.pt":{en:"News \xb7 RTP",pt:"Not\xedcias \xb7 RTP"},"dailyFeed.sub.news.en":{en:"News \xb7 CNN",pt:"Not\xedcias \xb7 CNN"},"dailyFeed.sub.school":{en:"Learn today",pt:"Aprender hoje"},"dailyFeed.sub.game":{en:"Game of the day",pt:"Jogo do dia"},"dailyFeed.school.math":{en:"Try a quick math puzzle",pt:"Experimenta um desafio de matem\xe1tica"},"dailyFeed.school.story":{en:"Read a Portuguese story",pt:"L\xea uma hist\xf3ria em portugu\xeas"},"dailyFeed.school.science":{en:"Learn a science fact",pt:"Aprende um facto de ci\xeancia"},"dailyFeed.school.reading":{en:"Practice reading aloud",pt:"Pratica leitura em voz alta"},"dailyFeed.school.word":{en:"Explore a word quiz",pt:"Explora um quiz de palavras"},"dailyFeed.game.memory":{en:"Memory Game",pt:"Jogo da Mem\xf3ria"},"dailyFeed.game.spotit":{en:"Spot the Pair",pt:"Encontra o Par!"},"dailyFeed.game.tictactoe":{en:"Tic Tac Toe",pt:"Jogo do Galo"},"dailyFeed.game.soundhunter":{en:"Sound Hunter",pt:"Ca\xe7ador de Sons"},"dailyFeed.game.familyquiz":{en:"Family Quiz",pt:"Quiz da Fam\xedlia"},"dailyFeed.game.adventure":{en:"Text Adventure",pt:"Aventura de Texto"},"dailyFeed.game.stop":{en:"Stop!",pt:"Stop!"},"seismic.title.pt":{en:"PT Seismic",pt:"Sismicidade PT"},"seismic.title.world":{en:"World Seismic",pt:"Sismicidade Mundo"},"seismic.empty":{en:"No recent seismic activity",pt:"Sem atividade sismica recente"},"seismic.openInEarth":{en:"Open in Earth",pt:"Abrir no Earth"},"weather.city.lisbon":{en:"Lisbon",pt:"Lisboa"},"weather.openInEarth":{en:"→ Open in Earth",pt:"→ Abrir no Earth"},"weather.humidity":{en:"Humidity",pt:"Humidade"},"weather.wind":{en:"Wind",pt:"Vento"},"weather.feelsLike":{en:"Feels like {t}\xb0",pt:"Sensa\xe7\xe3o de {t}\xb0"},"weather.uv":{en:"UV",pt:"UV"},"weather.sunrise":{en:"Sunrise",pt:"Nascer"},"weather.sunset":{en:"Sunset",pt:"P\xf4r-do-sol"},"weather.hourly":{en:"Next hours",pt:"Pr\xf3ximas horas"},"weather.forecast":{en:"3-day forecast",pt:"Previs\xe3o 3 dias"},"weather.now":{en:"Now",pt:"Agora"},"weather.day.mon":{en:"Mon",pt:"Seg"},"weather.day.tue":{en:"Tue",pt:"Ter"},"weather.day.wed":{en:"Wed",pt:"Qua"},"weather.day.thu":{en:"Thu",pt:"Qui"},"weather.day.fri":{en:"Fri",pt:"Sex"},"weather.day.sat":{en:"Sat",pt:"S\xe1b"},"weather.day.sun":{en:"Sun",pt:"Dom"},"clock.title":{en:"World clock",pt:"Rel\xf3gio mundial"},"analogClock.title":{en:"Clock",pt:"Rel\xf3gio"},"quotes.title":{en:"Daily quote",pt:"Cita\xe7\xe3o do dia"},"trendingSearches.title":{en:"Trending Searches",pt:"Pesquisas em Alta"},"wikiMostRead.title":{en:"Most Read — Wikipedia",pt:"Mais Lido na Wikip\xe9dia"},"onThisDay.title":{en:"\uD83D\uDCC5 On This Day",pt:"\uD83D\uDCC5 Neste Dia"},"onthisday.empty":{en:"No events found for today.",pt:"Sem eventos para hoje."},"movies.trending.title":{en:"Trending this week",pt:"Em alta esta semana"},"movies.apiKeyMissing":{en:"API key missing",pt:"Chave de API em falta"},"techscopeLive.title":{en:"Live feeds",pt:"Feeds ao vivo"},"ask.widget.title":{en:"Ask sessions",pt:"Conversas com o Atlantis"},"ask.widget.description":{en:"Your recent Ask conversations",pt:"As tuas conversas recentes"},"ask.widget.untitled":{en:"Untitled",pt:"Sem t\xedtulo"},"ask.widget.empty":{en:"No conversations yet. Start one from the command palette or the Ask app.",pt:"Ainda n\xe3o tens conversas. Come\xe7a uma na paleta de comandos ou na app Ask."},"ask.widget.emptyCta":{en:"Ask something",pt:"Fazer uma pergunta"},"streak.title":{en:"Daily Streak",pt:"S\xe9rie Di\xe1ria"},"streak.dayStreak":{en:"day streak",pt:"dias seguidos"},"streak.noStreak":{en:"Start your streak today",pt:"Come\xe7a a tua s\xe9rie hoje"},"streak.todayDone":{en:"{n} / {total} today",pt:"{n} / {total} hoje"},"streak.points":{en:"{n} pts",pt:"{n} pts"},"streak.open":{en:"Open Daily Manager",pt:"Abrir Gestor Di\xe1rio"},"habits.title":{en:"Habits",pt:"H\xe1bitos"},"habits.last7":{en:"Last 7 days",pt:"\xdaltimos 7 dias"},"habits.empty":{en:"Add missions in the Daily Manager to track them here.",pt:"Adiciona miss\xf5es no Gestor Di\xe1rio para as veres aqui."},"habits.weekDone":{en:"{n} done this week",pt:"{n} feitas esta semana"},"habits.open":{en:"Open Daily Manager",pt:"Abrir Gestor Di\xe1rio"},"habits.openShort":{en:"OPEN",pt:"ABRIR"},"agenda.title":{en:"Agenda Today",pt:"Agenda Hoje"},"agenda.count":{en:"{n} events",pt:"{n} eventos"},"agenda.countOne":{en:"1 event",pt:"1 evento"},"agenda.empty":{en:"Nothing scheduled today",pt:"Nada agendado hoje"},"agenda.emptyCta":{en:"Add your first event",pt:"Adiciona o primeiro evento"},"agenda.addEvent":{en:"Add event",pt:"Adicionar evento"},"agenda.titlePlaceholder":{en:"What’s on?",pt:"O que tens?"},"agenda.timeStart":{en:"Start",pt:"In\xedcio"},"agenda.timeEnd":{en:"End",pt:"Fim"},"agenda.tag.personal":{en:"personal",pt:"pessoal"},"agenda.tag.team":{en:"team",pt:"equipa"},"agenda.tag.work":{en:"work",pt:"trabalho"},"agenda.save":{en:"Save",pt:"Guardar"},"agenda.cancel":{en:"Cancel",pt:"Cancelar"},"agenda.delete":{en:"Delete event",pt:"Apagar evento"},"agenda.toggleDone":{en:"Toggle done",pt:"Alternar conclu\xeddo"},"agenda.now":{en:"now",pt:"agora"},"reading.title":{en:"❂ Reading",pt:"❂ Leitura"},"reading.yearProgress":{en:"{read}/{goal} this year",pt:"{read}/{goal} este ano"},"reading.yearGoal":{en:"Year goal",pt:"Meta anual"},"reading.books":{en:"books",pt:"livros"},"reading.goal":{en:"Annual goal",pt:"Meta anual"},"reading.page":{en:"p.",pt:"p."},"reading.empty":{en:"What are you reading right now?",pt:"O que est\xe1s a ler agora?"},"reading.addBook":{en:"Start a book",pt:"Come\xe7ar um livro"},"reading.updateBook":{en:"Update reading",pt:"Atualizar leitura"},"reading.finish":{en:"Mark as finished",pt:"Marcar como lido"},"reading.save":{en:"Save",pt:"Guardar"},"reading.cancel":{en:"Cancel",pt:"Cancelar"},"reading.placeholder.title":{en:"Title",pt:"T\xedtulo"},"reading.placeholder.author":{en:"Author",pt:"Autor"},"reading.placeholder.page":{en:"Page",pt:"P\xe1gina"},"reading.placeholder.pages":{en:"Total",pt:"Total"},"reading.placeholder.goal":{en:"Goal",pt:"Meta"},"reading.placeholder.cover":{en:"COVER",pt:"CAPA"},"reading.stat.week":{en:"Week",pt:"Semana"},"reading.stat.pace":{en:"Pace",pt:"Ritmo"},"reading.stat.finished":{en:"Finished",pt:"Terminados"},"reading.unit.pages":{en:"pages",pt:"p\xe1ginas"},"reading.unit.perDay":{en:"pg/day",pt:"p\xe1g/dia"},"reading.unit.total":{en:"total",pt:"total"},"bolsa.title":{en:"▲ Markets",pt:"▲ Bolsa"},"bolsa.updated":{en:"updated {age}",pt:"atualizado {age}"},"bolsa.empty":{en:"Loading tickers…",pt:"A carregar cota\xe7\xf5es…"},"bolsa.error":{en:"Could not load markets.",pt:"N\xe3o foi poss\xedvel carregar cota\xe7\xf5es."},"bolsa.errorLabel":{en:"OFFLINE",pt:"OFFLINE"},"bolsa.stocks.title":{en:"STOCKS",pt:"A\xc7\xd5ES"},"bolsa.stocks.noKey":{en:"Add your Finnhub key in Settings to see stock quotes.",pt:"Adiciona a tua chave Finnhub nas Defini\xe7\xf5es para ver cota\xe7\xf5es de a\xe7\xf5es."},"bolsa.stocks.settingsLink":{en:"Go to Settings",pt:"Ir para Defini\xe7\xf5es"},"bolsa.crypto.title":{en:"CRYPTO",pt:"CRYPTO"},"astro.title":{en:"☽ Astronomy",pt:"☽ Astronomia"},"astro.location":{en:"Lisbon",pt:"Lisboa"},"astro.illuminated":{en:"{pct}% illuminated",pt:"{pct}% iluminada"},"astro.dayLength":{en:"{h}h {m}m",pt:"{h}h {m}m"},"astro.phase.new":{en:"New Moon",pt:"Lua Nova"},"astro.phase.waxingCrescent":{en:"Waxing Crescent",pt:"Crescente"},"astro.phase.firstQuarter":{en:"First Quarter",pt:"Quarto Crescente"},"astro.phase.waxingGibbous":{en:"Waxing Gibbous",pt:"Gibosa Crescente"},"astro.phase.full":{en:"Full Moon",pt:"Lua Cheia"},"astro.phase.waningGibbous":{en:"Waning Gibbous",pt:"Gibosa Minguante"},"astro.phase.lastQuarter":{en:"Last Quarter",pt:"Quarto Minguante"},"astro.phase.waningCrescent":{en:"Waning Crescent",pt:"Minguante"},"astro.iss.title":{en:"Next ISS passes",pt:"Pr\xf3ximas passagens — ISS"},"astro.iss.loading":{en:"Loading passes…",pt:"A carregar passagens…"},"astro.iss.empty":{en:"No upcoming visible passes.",pt:"Sem passagens vis\xedveis \xe0 vista."},"labLauncher.title":{en:"✦ AI Lab",pt:"✦ Lab de IA"},"labLauncher.subtitle":{en:"Your AI suite",pt:"A tua su\xedte de IA"},"labLauncher.count":{en:"tools",pt:"ferramentas"},"labLauncher.open":{en:"// OPEN →",pt:"// ABRIR →"},"learnLauncher.title":{en:"◎ Learning",pt:"◎ Aprendizagem"},"learnLauncher.subtitle":{en:"School & games",pt:"Escola & jogos"},"learnLauncher.count":{en:"apps",pt:"apps"},"learnLauncher.open":{en:"// EXPLORE →",pt:"// EXPLORAR →"},"music.title":{en:"♪ Music",pt:"♪ M\xfasica"},"music.subtitle":{en:"Recently played",pt:"Ouvido recentemente"},"music.empty":{en:"Paste a song to save.",pt:"Adiciona uma m\xfasica."},"music.placeholder":{en:"Song — Artist",pt:"M\xfasica — Artista"},"music.add":{en:"Add",pt:"Adicionar"},"music.remove":{en:"Remove",pt:"Remover"},"music.search.label":{en:"Search Apple Music",pt:"Pesquisar no Apple Music"},"nightSky.title":{en:"✦ Night Sky",pt:"✦ C\xe9u Noturno"},"nightSky.iss":{en:"ISS visible",pt:"ISS vis\xedvel"},"nightSky.dayTitle":{en:"Waiting for dusk",pt:"\xc0 espera do anoitecer"},"nightSky.nightLegend":{en:"Zenith view \xb7 {count} constellations",pt:"Vista do z\xe9nite \xb7 {count} constela\xe7\xf5es"},"health.title":{en:"Dashboard Health",pt:"Sa\xfade do Painel"},"health.measuring":{en:"Measuring…",pt:"A medir…"},"health.offline":{en:"offline",pt:"offline"},"health.ch.crypto":{en:"CoinGecko",pt:"CoinGecko"},"health.ch.weather":{en:"Open-Meteo",pt:"Open-Meteo"},"health.ch.wiki":{en:"Wikipedia",pt:"Wikip\xe9dia"},"health.ch.hn":{en:"HN Algolia",pt:"HN Algolia"},"health.ch.dom":{en:"DOM Nodes",pt:"N\xf3s DOM"},"health.ch.fps":{en:"Frame Rate",pt:"Frame Rate"},"health.consumers":{en:"used by {list}",pt:"usado por {list}"},"health.status.ok":{en:"All healthy",pt:"Tudo bem"},"health.status.slow":{en:"{n} slow",pt:"{n} lento"},"health.status.offline":{en:"{n} offline",pt:"{n} offline"},"quicklinks.title":{en:"Quick links",pt:"Atalhos"},"quicklinks.empty":{en:"Pin apps for quick access",pt:"Fixa apps para acesso r\xe1pido"},"pinnedCard.recent.label":{en:"Last opened",pt:"Aberto recentemente"},"finance.budget.widget.title":{en:"Budget Progress",pt:"Progresso do Or\xe7amento"},"finance.budget.widget.empty":{en:"No budget caps set. Add limits in Finance.",pt:"Sem limites de or\xe7amento. Adiciona limites nas Finan\xe7as."},"finance.budget.widget.loading":{en:"Loading budget…",pt:"A carregar or\xe7amento…"},"financeWidget.empty":{en:"No finance data yet.",pt:"Sem dados financeiros ainda."},"financeWidget.weekly":{en:"This week",pt:"Esta semana"},"financeWidget.spent":{en:"Spent",pt:"Gasto"},"financeWidget.month":{en:"This month",pt:"Este m\xeas"},"financeWidget.open":{en:"Open Finance",pt:"Abrir Finan\xe7as"},"financeWidget.openApp":{en:"Open Finance app",pt:"Abrir app Finan\xe7as"},"financeWidget.source.data":{en:"Finance data",pt:"Dados financeiros"},"financeWidget.member.shared":{en:"Household",pt:"Agregado"},"financeWidget.weekRemaining":{en:"{n}€ left",pt:"{n}€ restantes"}}},54200(e,t,a){a.d(t,{A:()=>i});let i={id:"trending-searches",load:()=>a.e("346").then(a.bind(a,32065)).then(e=>({default:e.TrendingSearchesWidget})),labels:{en:"Trending Searches",pt:"Pesquisas em Alta"},descriptions:{en:"Top Google trending searches right now",pt:"As pesquisas mais populares no Google agora"},icon:"\uD83D\uDD0D",accentColor:"#e233ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"google-trends-rss",kind:"cache-key",cacheKey:"internet-trends",labelKey:"sources.googleTrends",notifiable:!0}],notifications:[(0,a(83090).B)({id:"trending-daily",category:"trending.daily",labelKey:"notifications.source.trending",badgeColor:"#e233ff",cacheKey:"internet-trends",parse:function(e){let t=e?.items?.[0];return t?[{id:new Date().toISOString().slice(0,10),ts:Date.now(),title:t.title,link:t.link}]:[]},defaultEnabled:!1})],persistedKeys:["widget-cache:internet-trends"]}},52306(e,t,a){a.d(t,{A:()=>n});var i=a(83090);let o={yellow:"\uD83D\uDFE1",orange:"\uD83D\uDFE0",red:"\uD83D\uDD34"},r={yellow:"Yellow",orange:"Orange",red:"Red"},n={id:"weather",load:()=>a.e("6693").then(a.bind(a,15940)).then(e=>({default:e.WeatherWidget})),labels:{en:"Weather",pt:"Meteorologia"},descriptions:{en:"Current weather for Lisbon",pt:"Meteorologia atual em Lisboa"},icon:"\uD83C\uDF24️",accentColor:"#58a6ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:280,suite:"vida",defaultOnDashboard:!0,sources:[{id:"openMeteo",kind:"cache-key",cacheKey:"weather-lisbon",labelKey:"sources.openMeteo",notifiable:!0}],notifications:[(0,i.B)({id:"ipma-warnings",category:"weather.pt.warnings",labelKey:"notifications.source.weatherPt",badgeColor:"#facc15",cacheKey:"ipma-warnings",parse:function(e){if(!Array.isArray(e))return[];let t=Date.now(),a=[];return e.forEach((e,i)=>{if("green"===e.awarenessLevelID||"yellow"===e.awarenessLevelID)return;let n=Date.parse(e.endTime);if(Number.isNaN(n)||n<t)return;let s=Date.parse(e.startTime);if(Number.isNaN(s))return;let l=e.awarenessLevelID,d=o[l]??"⚠",c=r[l]??e.awarenessLevelID.toUpperCase(),p=e.idAreaAviso||"Portugal",u=e.awarenessTypeName?e.awarenessTypeName.toLowerCase():"weather";a.push({id:`ipma-warn:${p}-${s}-${i}`,ts:s,title:`${d} ${c} ${u} warning — ${p}`,link:"https://www.ipma.pt/en/otempo/prev-sam/"})}),a}})]}},89780(e,t,a){a.d(t,{A:()=>n});var i=a(83090);let o=new Set(["Main_Page","Special:Search","Wikipedia:Featured_pictures","-","Special:Watchlist","Portal:Current_events"]);function r(){return new Date(Date.now()-864e5).toISOString().slice(0,10)}let n={id:"wiki-most-read",load:()=>a.e("545").then(a.bind(a,45464)).then(e=>({default:e.WikiMostReadWidget})),labels:{en:"Wikipedia Top",pt:"Mais Lido na Wikip\xe9dia"},descriptions:{en:"Most read articles on Wikipedia today",pt:"Artigos mais lidos na Wikip\xe9dia hoje"},icon:"\uD83D\uDCD6",accentColor:"#58a6ff",defaultSize:"sm",defaultCols:1,maxCols:1,minHeight:200,suite:"learn",defaultOnDashboard:!1,sources:[{id:"wikipedia-pageviews",kind:"cache-key",labelKey:"sources.wikipedia",notifiable:!0}],notifications:[(0,i.B)({id:"wiki-top-read",category:"wiki.topRead",labelKey:"notifications.source.wikiTopRead",badgeColor:"#58a6ff",cacheKey:()=>`internet-wiki-${r()}`,parse:function(e){let t=(e?.items?.[0]?.articles??[]).find(e=>!o.has(e.article));if(!t)return[];let a=r(),i=t.article.replace(/_/g," ");return[{id:a,ts:Date.now(),title:i,link:`https://en.wikipedia.org/wiki/${encodeURIComponent(t.article)}`}]},defaultEnabled:!1})]}}}]);