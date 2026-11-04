/**
 * CASPAR FIVEM SCRIPTS - MULTI-LANGUAGE TRANSLATIONS (i18n)
 * Supported languages:
 * - de: Deutsch 🇩🇪
 * - en: English 🇬🇧
 * - fr: Français 🇫🇷
 * - es: Español 🇪🇸
 */

const CASPAR_TRANSLATIONS = {
  de: {
    lang_name: 'Deutsch',
    lang_flag: 'assets/flags/de.svg',
    nav: {
      scripts: 'Scripte',
      features: 'Features',
      terminal: 'Terminal',
      install: 'Installation',
      faq: 'FAQ',
      github: 'GITHUB',
      sfx_on: 'SFX: AN',
      sfx_off: 'SFX: AUS'
    },
    hero: {
      pill_resmon: '0.00ms RESMON OPTIMIERT',
      pill_pages: 'GITHUB PAGES BEREIT',
      title_sub: 'HIGH-END',
      title_five: 'FIVE',
      title_m: 'M',
      title_scripts: 'SCRIPTE',
      description: 'Next-Gen FiveM Ressourcen & Standalones für ambitionierte Roleplay-Server. Geschmiedet mit <span class="hero-highlight">höchster CPU-Effizienz</span>, modernen React/NUI Oberflächen, vollständiger Open-Source Transparenz via GitHub und einer unverwechselbaren <span class="hero-highlight">Cyberpunk-Ästhetik</span>.',
      btn_scripts: 'SCRIPTE ENTDECKEN',
      btn_terminal: 'TERMINAL TESTEN',
      btn_github: 'GITHUB REPOSITORIES',
      stat_resmon_val: '0.00ms',
      stat_resmon_lbl: 'Durchschnitts-Resmon',
      stat_escrow_val: '100%',
      stat_escrow_lbl: 'Escrow-Frei / Git',
      stat_multi_val: 'MULTI',
      stat_multi_lbl: 'QBCore • ESX • Qbox',
      stat_fps_val: '60+ FPS',
      stat_fps_lbl: 'Flüssige Bildrate',
      marker_left: 'CORE: ONLINE // 850V',
      marker_right: 'NEON: DUAL-SYNC AKTIV'
    },
    catalog: {
      badge: '⚡ CASPAR CODE VAULT',
      title: 'VERFÜGBARE SCRIPTE',
      subtitle: 'Direkt via GitHub klonen oder herunterladen. Alle Ressourcen sind modular aufgebaut, ausführlich dokumentiert und besitzen ein Resmon von 0.00 bis maximal 0.01ms.',
      filter_all: 'Alle Scripte',
      filter_nui: 'NUI & HUD',
      filter_vehicles: 'Fahrzeuge',
      filter_rp: 'Roleplay',
      filter_economy: 'Wirtschaft',
      filter_admin: 'Admin Tools',
      filter_performance: 'FPS & Boost',
      search_placeholder: 'Script, Tag oder Keyword suchen...',
      no_results_title: 'Keine Scripte gefunden',
      no_results_desc: 'Bitte passe deine Suchbegriffe oder Filter an.',
      btn_repo: 'GITHUB REPO ↗',
      btn_clone: 'GIT CLONE',
      btn_cloned: 'GEKLONT / KOPIERT!'
    },
    terminal: {
      badge: '⌨ INTERAKTIVE KONSOLE',
      title: 'TERMINAL & CONFIG SANDBOX',
      subtitle: 'Wirf einen Blick in den Code! Klicke durch die Tabs, kopiere Manifeste oder tippe Befehle wie <code style="color:var(--neon-cyan)">help</code>, <code style="color:var(--neon-cyan)">list</code> oder <code style="color:var(--neon-orange)">benchmark</code> in das interaktive CLI.',
      tab_fxmanifest: 'fxmanifest.lua',
      tab_config: 'config.lua',
      tab_server: 'server/sync.lua',
      tab_install: 'install.sh',
      btn_copy: 'CODE KOPIEREN',
      btn_copied: 'KOPIERT!',
      cli_prompt: 'caspar-node@root:~$',
      cli_placeholder: "Tippe 'help', 'benchmark', 'list' oder 'ensure caspar_hud' und drücke Enter..."
    },
    features: {
      badge: '🛡 WARUM CASPAR SCRIPTE',
      title: 'HIGH-END FIVE-M ARCHITEKTUR',
      subtitle: 'Keine überladenen Loops, keine veralteten ESX-1.1 Muster. Nur saubere, moderne Programmierung.',
      f1_title: 'Zero-Lag Resmon (0.00ms)',
      f1_desc: 'Alle Thread-Loops nutzen dynamische Tick-Raten. Wenn eine Aktion nicht gebraucht wird, schläft der Loop mit 1000ms. CPU-Spitzen auf Client & Server gehören der Vergangenheit an.',
      f2_title: '100% Escrow-Frei via GitHub',
      f2_desc: 'Kein lästiges FiveM Asset Escrow Schloss. Volle Kontrolle über jeden Quellcode. Du kannst alles modifizieren, optimieren, eigene Pull Requests senden und sofort per Git aktualisieren.',
      f3_title: 'Cyber NUI & React Interfaces',
      f3_desc: 'Moderne UI-Komponenten auf Basis von React, TailwindCSS und WebGL. Flüssige 60FPS UI-Animationen mit nativer Sound-Unterstützung und responsivem Layout.',
      f4_title: 'Universelle Framework-Brücke',
      f4_desc: 'Unterstützt QBCore, Qbox, ESX Legacy und Standalone ohne doppelte Codebasen dank unserer modularen Core-Bridge. Einfach in der config umschalten.',
      f5_title: 'Anti-Exploit Server-Validierung',
      f5_desc: 'Alle Geldbewegungen, Item-Transfers und Fahrzeugabfragen werden strikt serverseitig validiert und gegen Event-Injections, Lua-Executor und Abuse gehärtet.',
      f6_title: 'Automatischer SQL & Setup',
      f6_desc: 'Dank oxmysql / MySQL.ready werden alle benötigten Tabellen und Spalten beim ersten Serverstart automatisch synchronisiert. Keine fehleranfälligen manuellen SQL-Imports.'
    },
    install: {
      badge: '🚀 IN 60 SEKUNDEN EINSATZBEREIT',
      title: 'SCHNELLSTART ANLEITUNG',
      subtitle: 'Die Installation auf deinem Linux- oder Windows-Server ist denkbar einfach:',
      s1_title: 'Repo Klonen',
      s1_desc: 'Klone das gewünschte Script direkt in deinen FiveM resources Ordner.',
      s2_title: 'Config Anpassen',
      s2_desc: 'Öffne <code>config.lua</code> und passe Sprache, Farben und Optionen an.',
      s3_title: 'server.cfg Eintragen',
      s3_desc: 'Trage den Ressourcennamen in deine Hauptkonfiguration ein.',
      s4_title: 'Server Starten',
      s4_desc: 'Starte deinen Server neu oder führe <code>refresh</code> und <code>ensure</code> in der Konsole aus.'
    },
    faq: {
      badge: '❓ HÄUFIGE FRAGEN',
      title: 'FAQ & SUPPORT',
      subtitle: 'Alle Antworten rund um Lizenzierung, Sprachen, Anpassungsmöglichkeiten und GitHub Pages.',
      q1: 'Sind alle Scripte wirklich kostenlos und Open Source auf GitHub?',
      a1: 'Ja! Alle Caspar FiveM Ressourcen in diesem Showcase sind Open Source auf GitHub verfügbar. Du darfst den Code einsehen, an dein Server-Konzept anpassen und eigene Erweiterungen hinzufügen.',
      q2: 'Welche Frameworks und Sprachen werden unterstützt?',
      a2: 'Unsere Scripte verfügen über eine dynamische Framework-Bridge für QBCore, Qbox und ESX Legacy sowie vollen Standalone-Support. Jedes Script besitzt einen <code>locales/</code>-Ordner mit Deutsch, Englisch, Französisch und Spanisch.',
      q3: 'Wie bringe ich diese Homepage auf GitHub Pages online?',
      a3: 'Erstelle einfach ein GitHub Repository (z.B. <code>deinname.github.io</code>), lade diese Dateien hoch und aktiviere unter Settings ➔ Pages den Branch <code>main</code>. Die Seite läuft sofort ohne Build-Step!',
      q4: 'Kann ich eigene Farbschemata (außer Orange & Cyan) wählen?',
      a4: 'Absolut! In der <code>css/style.css</code> sowie in den jeweiligen Script-Konfigurationen sind alle Primär- und Sekundärfarben als Variablen definiert, sodass du sie mit einer einzigen Zeile austauschen kannst.'
    },
    footer: {
      brand_desc: 'Hochwertige, ressourcenschonende Skripte und Benutzeroberflächen für FiveM RP Server. Inspiriert vom futuristischen Neon-Reactor Design.',
      nav_title: 'Navigation',
      nav_scripts: 'Scripte Übersicht',
      nav_perf: 'Performance Vorteile',
      nav_terminal: 'Code Sandbox',
      nav_setup: 'Setup Guide',
      com_title: 'Community & Code',
      status_title: 'Status',
      status_desc: 'Entwickelt für FiveM / Cfx.re Plattformen. Getestet auf Build 2699 bis 3258.',
      disclaimer: '© 2026 Caspar FiveM Development. Alle Scripte lizenziert via GitHub. FiveM ist eine Marke von Take-Two Interactive & Rockstar Games. Nicht offiziell mit Rockstar Games affiliiert.'
    }
  },

  en: {
    lang_name: 'English',
    lang_flag: 'assets/flags/en.svg',
    nav: {
      scripts: 'Scripts',
      features: 'Features',
      terminal: 'Terminal',
      install: 'Installation',
      faq: 'FAQ',
      github: 'GITHUB',
      sfx_on: 'SFX: ON',
      sfx_off: 'SFX: OFF'
    },
    hero: {
      pill_resmon: '0.00ms RESMON OPTIMIZED',
      pill_pages: 'GITHUB PAGES READY',
      title_sub: 'HIGH-END',
      title_five: 'FIVE',
      title_m: 'M',
      title_scripts: 'SCRIPTS',
      description: 'Next-Gen FiveM resources & standalones engineered for ambitious roleplay servers. Crafted with <span class="hero-highlight">maximum CPU efficiency</span>, ultra-responsive React/NUI interfaces, total open-source transparency on GitHub, and a distinct <span class="hero-highlight">cyberpunk visual identity</span>.',
      btn_scripts: 'EXPLORE SCRIPTS',
      btn_terminal: 'TRY TERMINAL',
      btn_github: 'GITHUB REPOSITORIES',
      stat_resmon_val: '0.00ms',
      stat_resmon_lbl: 'Average Resmon',
      stat_escrow_val: '100%',
      stat_escrow_lbl: 'Escrow-Free / Git',
      stat_multi_val: 'MULTI',
      stat_multi_lbl: 'QBCore • ESX • Qbox',
      stat_fps_val: '60+ FPS',
      stat_fps_lbl: 'Smooth Frame Rate',
      marker_left: 'CORE: ONLINE // 850V',
      marker_right: 'NEON: DUAL-SYNC ACTIVE'
    },
    catalog: {
      badge: '⚡ CASPAR CODE VAULT',
      title: 'AVAILABLE SCRIPTS',
      subtitle: 'Clone or download directly via GitHub. All resources are modular, extensively documented, and engineered for 0.00ms to 0.01ms CPU resmon.',
      filter_all: 'All Scripts',
      filter_nui: 'NUI & HUD',
      filter_vehicles: 'Vehicles',
      filter_rp: 'Roleplay',
      filter_economy: 'Economy',
      filter_admin: 'Admin Tools',
      filter_performance: 'FPS & Boost',
      search_placeholder: 'Search script, tag or keyword...',
      no_results_title: 'No scripts found',
      no_results_desc: 'Please adjust your search query or filters.',
      btn_repo: 'REPO GITHUB ↗',
      btn_clone: 'GIT CLONE',
      btn_cloned: 'CLONED / COPIED!'
    },
    terminal: {
      badge: '⌨ INTERACTIVE CONSOLE',
      title: 'TERMINAL & CONFIG SANDBOX',
      subtitle: 'Peek into the codebase! Switch through file tabs, copy manifests or run commands like <code style="color:var(--neon-cyan)">help</code>, <code style="color:var(--neon-cyan)">list</code> or <code style="color:var(--neon-orange)">benchmark</code> in the interactive CLI.',
      tab_fxmanifest: 'fxmanifest.lua',
      tab_config: 'config.lua',
      tab_server: 'server/sync.lua',
      tab_install: 'install.sh',
      btn_copy: 'COPY CODE',
      btn_copied: 'COPIED!',
      cli_prompt: 'caspar-node@root:~$',
      cli_placeholder: "Type 'help', 'benchmark', 'list' or 'ensure caspar_hud' and press Enter..."
    },
    features: {
      badge: '🛡 WHY CHOOSE CASPAR',
      title: 'HIGH-END FIVEM ARCHITECTURE',
      subtitle: 'Zero bloated loops, no legacy ESX 1.1 code. Pure, performant, modern software engineering.',
      f1_title: 'Zero-Lag Resmon (0.00ms)',
      f1_desc: 'All execution loops utilize adaptive tick sleep timers. When an action is idle, threads throttle to 1000ms, completely eradicating CPU spikes on client and server.',
      f2_title: '100% Escrow-Free via GitHub',
      f2_desc: 'No frustrating FiveM Asset Escrow locks. Full control over all source code. Fork, modify, inspect, send PRs, and update immediately through Git.',
      f3_title: 'Cyber NUI & React Interfaces',
      f3_desc: 'Cutting-edge user interfaces powered by React, TailwindCSS, and WebGL. Ultra-smooth 60 FPS animations with native sound effects and responsive layouts.',
      f4_title: 'Universal Framework Bridge',
      f4_desc: 'Seamless compatibility with QBCore, Qbox, ESX Legacy, and Standalone without code duplication thanks to our unified bridge layer.',
      f5_title: 'Anti-Exploit Server Validation',
      f5_desc: 'All financial balances, inventory items, and vehicle states are strictly verified server-side against unauthorized event injections and executor exploits.',
      f6_title: 'Automated SQL & Schema Sync',
      f6_desc: 'Powered by oxmysql / MySQL.ready. All database tables and missing columns auto-populate on the first server launch. No manual SQL file importing needed.'
    },
    install: {
      badge: '🚀 DEPLOY IN 60 SECONDS',
      title: 'QUICKSTART INSTALLATION',
      subtitle: 'Setting up on your Windows or Linux FiveM server takes less than a minute:',
      s1_title: 'Clone Repository',
      s1_desc: 'Clone the desired resource directly into your server resources directory.',
      s2_title: 'Configure Options',
      s2_desc: 'Open <code>config.lua</code> to adjust language, theme colors, and framework keys.',
      s3_title: 'Register in server.cfg',
      s3_desc: 'Add the resource name to your primary server configuration.',
      s4_title: 'Launch Server',
      s4_desc: 'Restart your server or execute <code>refresh</code> and <code>ensure</code> in the server console.'
    },
    faq: {
      badge: '❓ FREQUENTLY ASKED QUESTIONS',
      title: 'FAQ & SUPPORT',
      subtitle: 'Everything you need to know about licensing, locales, custom styling, and GitHub Pages.',
      q1: 'Are all scripts completely free and open-source on GitHub?',
      a1: 'Yes! All Caspar FiveM resources featured on this portal are 100% open-source under GitHub. You are free to inspect, customize, extend, and deploy them on your roleplay server.',
      q2: 'Which frameworks and languages are supported?',
      a2: 'Our scripts feature an auto-detect framework bridge for QBCore, Qbox, and ESX Legacy, with standalone fallbacks. Every resource contains a <code>locales/</code> directory with German, English, French, and Spanish.',
      q3: 'How do I deploy this portal to GitHub Pages?',
      a3: 'Simply create a repository (e.g. <code>username.github.io</code>), commit these static files, and enable GitHub Pages on the <code>main</code> branch under Settings ➔ Pages. No build step required!',
      q4: 'Can I customize the neon color scheme?',
      a4: 'Absolutely! Primary and secondary accent colors are configured via clean CSS variables in <code>css/style.css</code> and in each script config. Change them in a single line.'
    },
    footer: {
      brand_desc: 'High-performance, ultra-efficient FiveM roleplay scripts and futuristic cyber interfaces. Powered by the dual-neon reactor aesthetic.',
      nav_title: 'Navigation',
      nav_scripts: 'Script Showcase',
      nav_perf: 'Performance Perks',
      nav_terminal: 'Code Sandbox',
      nav_setup: 'Setup Guide',
      com_title: 'Community & Code',
      status_title: 'Status',
      status_desc: 'Built for FiveM / Cfx.re server platforms. Tested across game builds 2699 to 3258.',
      disclaimer: '© 2026 Caspar FiveM Development. All scripts licensed under GitHub. FiveM is a trademark of Take-Two Interactive & Rockstar Games. Not affiliated with Rockstar Games.'
    }
  },

  fr: {
    lang_name: 'Français',
    lang_flag: 'assets/flags/fr.svg',
    nav: {
      scripts: 'Scripts',
      features: 'Fonctions',
      terminal: 'Terminal',
      install: 'Installation',
      faq: 'FAQ',
      github: 'GITHUB',
      sfx_on: 'SFX: ON',
      sfx_off: 'SFX: OFF'
    },
    hero: {
      pill_resmon: '0.00ms RESMON OPTIMISÉ',
      pill_pages: 'PRÊT POUR GITHUB PAGES',
      title_sub: 'HAUT DE GAMME',
      title_five: 'FIVE',
      title_m: 'M',
      title_scripts: 'SCRIPTS',
      description: 'Ressources FiveM nouvelle génération conçues pour les serveurs RP ambitieux. Forgées avec une <span class="hero-highlight">efficacité CPU maximale</span>, des interfaces React/NUI modernes, une totale transparence open-source sur GitHub et une <span class="hero-highlight">esthétique cyberpunk</span> unique.',
      btn_scripts: 'DÉCOUVRIR LES SCRIPTS',
      btn_terminal: 'TESTER LE TERMINAL',
      btn_github: 'DÉPÔTS GITHUB',
      stat_resmon_val: '0.00ms',
      stat_resmon_lbl: 'Resmon Moyen',
      stat_escrow_val: '100%',
      stat_escrow_lbl: 'Sans Escrow / Git',
      stat_multi_val: 'MULTI',
      stat_multi_lbl: 'QBCore • ESX • Qbox',
      stat_fps_val: '60+ FPS',
      stat_fps_lbl: 'Framerate Fluide',
      marker_left: 'CORE: EN LIGNE // 850V',
      marker_right: 'NÉON: DUAL-SYNC ACTIF'
    },
    catalog: {
      badge: '⚡ CASPAR CODE VAULT',
      title: 'SCRIPTS DISPONIBLES',
      subtitle: 'Clonez ou téléchargez directement depuis GitHub. Toutes les ressources sont modulaires, documentées et tournent entre 0.00ms et 0.01ms resmon.',
      filter_all: 'Tous les scripts',
      filter_nui: 'NUI & HUD',
      filter_vehicles: 'Véhicules',
      filter_rp: 'Roleplay',
      filter_economy: 'Économie',
      filter_admin: 'Outils Admin',
      filter_performance: 'FPS & Boost',
      search_placeholder: 'Rechercher un script, tag ou mot-clé...',
      no_results_title: 'Aucun script trouvé',
      no_results_desc: 'Veuillez modifier vos termes de recherche ou vos filtres.',
      btn_repo: 'DÉPÔT GITHUB ↗',
      btn_clone: 'GIT CLONE',
      btn_cloned: 'CLONÉ / COPIÉ!'
    },
    terminal: {
      badge: '⌨ CONSOLE INTERACTIVE',
      title: 'TERMINAL & CONFIG SANDBOX',
      subtitle: 'Examinez le code source! Changez d\'onglets, copiez les manifestes ou lancez des commandes comme <code style="color:var(--neon-cyan)">help</code> ou <code style="color:var(--neon-orange)">benchmark</code>.',
      tab_fxmanifest: 'fxmanifest.lua',
      tab_config: 'config.lua',
      tab_server: 'server/sync.lua',
      tab_install: 'install.sh',
      btn_copy: 'COPIER LE CODE',
      btn_copied: 'COPIÉ!',
      cli_prompt: 'caspar-node@root:~$',
      cli_placeholder: "Tapez 'help', 'benchmark', 'list' ou 'ensure caspar_hud'..."
    },
    features: {
      badge: '🛡 POURQUOI CASPAR',
      title: 'ARCHITECTURE FIVEM HAUTE PERFORMANCE',
      subtitle: 'Pas de boucles surchargées, aucun vieux code ESX 1.1. Une ingénierie logicielle propre et moderne.',
      f1_title: 'Zéro-Lag Resmon (0.00ms)',
      f1_desc: 'Toutes les boucles utilisent des fréquences adaptatives. Au repos, les threads dorment à 1000ms pour supprimer totalement les pointes CPU.',
      f2_title: '100% Sans Escrow via GitHub',
      f2_desc: 'Aucun verrouillage FiveM Asset Escrow. Gardez le plein contrôle sur le code source, modifiez-le et mettez à jour instantanément avec Git.',
      f3_title: 'Interfaces Cyber NUI & React',
      f3_desc: 'Interfaces utilisateur modernes développées avec React, TailwindCSS et WebGL. Animations fluides à 60 FPS avec bruitages intégrés.',
      f4_title: 'Passerelle Multi-Framework',
      f4_desc: 'Compatible avec QBCore, Qbox, ESX Legacy et Standalone sans duplication de code grâce à notre couche unifiée.',
      f5_title: 'Validation Serveur Anti-Exploit',
      f5_desc: 'Transactions financières et inventaires rigoureusement vérifiés côté serveur contre les injections d\'événements et exécuteurs.',
      f6_title: 'SQL & Tables Automatiques',
      f6_desc: 'Intégration oxmysql / MySQL.ready. Toutes les tables et colonnes sont créées automatiquement au démarrage du serveur.'
    },
    install: {
      badge: '🚀 DÉPLOIEMENT EN 60 SECONDES',
      title: 'GUIDE D\'INSTALLATION RAPIDE',
      subtitle: 'Installation facile sur votre serveur FiveM Linux ou Windows:',
      s1_title: 'Cloner le dépôt',
      s1_desc: 'Clonez le script désiré dans votre dossier resources FiveM.',
      s2_title: 'Configurer les options',
      s2_desc: 'Ouvrez <code>config.lua</code> pour régler la langue, les couleurs et les options.',
      s3_title: 'Ajouter au server.cfg',
      s3_desc: 'Inscrivez le nom de la ressource dans votre fichier de configuration.',
      s4_title: 'Démarrer le serveur',
      s4_desc: 'Redémarrez votre serveur ou lancez <code>refresh</code> et <code>ensure</code> en console.'
    },
    faq: {
      badge: '❓ QUESTIONS FRÉQUENTES',
      title: 'FAQ & SUPPORT',
      subtitle: 'Toutes les réponses concernant les licences, langues, styles et GitHub Pages.',
      q1: 'Tous les scripts sont-ils gratuits et open-source sur GitHub?',
      a1: 'Oui! Toutes les ressources Caspar FiveM de ce portail sont 100% open-source sur GitHub. Vous pouvez les modifier et les intégrer librement sur votre serveur.',
      q2: 'Quels frameworks et langues sont pris en charge?',
      a2: 'Nos scripts intègrent une détection automatique pour QBCore, Qbox et ESX Legacy. Chaque script inclut un dossier <code>locales/</code> en allemand, anglais, français et espagnol.',
      q3: 'Comment héberger ce site sur GitHub Pages?',
      a3: 'Créez un dépôt GitHub, publiez ces fichiers et activez GitHub Pages sur la branche <code>main</code> dans Settings ➔ Pages. Aucun build nécessaire!',
      q4: 'Puis-je changer les couleurs fluo?',
      a4: 'Tout à fait! Les couleurs principales sont définies via des variables CSS dans <code>css/style.css</code> et dans chaque config de script.'
    },
    footer: {
      brand_desc: 'Scripts FiveM haute performance et interfaces cybernétiques pour serveurs RP. Inspirés par l\'esthétique du réacteur à néon.',
      nav_title: 'Navigation',
      nav_scripts: 'Aperçu des scripts',
      nav_perf: 'Atouts Performance',
      nav_terminal: 'Bac à sable Code',
      nav_setup: 'Guide d\'installation',
      com_title: 'Communauté & Code',
      status_title: 'État du système',
      status_desc: 'Développé pour la plateforme FiveM / Cfx.re. Testé sur les versions 2699 à 3258.',
      disclaimer: '© 2026 Caspar FiveM Development. Tous les scripts sont sous licence GitHub. FiveM est une marque de Take-Two Interactive & Rockstar Games.'
    }
  },

  es: {
    lang_name: 'Español',
    lang_flag: 'assets/flags/es.svg',
    nav: {
      scripts: 'Scripts',
      features: 'Funciones',
      terminal: 'Terminal',
      install: 'Instalación',
      faq: 'FAQ',
      github: 'GITHUB',
      sfx_on: 'SFX: ON',
      sfx_off: 'SFX: OFF'
    },
    hero: {
      pill_resmon: '0.00ms RESMON OPTIMIZADO',
      pill_pages: 'LISTO PARA GITHUB PAGES',
      title_sub: 'ALTA GAMA',
      title_five: 'FIVE',
      title_m: 'M',
      title_scripts: 'SCRIPTS',
      description: 'Recursos FiveM de última generación diseñados para servidores de rol ambiciosos. Creados con <span class="hero-highlight">máxima eficiencia de CPU</span>, interfaces React/NUI modernas, transparencia total de código abierto en GitHub y una <span class="hero-highlight">estética cyberpunk</span> inconfundible.',
      btn_scripts: 'EXPLORAR SCRIPTS',
      btn_terminal: 'PROBAR TERMINAL',
      btn_github: 'REPOSITORIOS GITHUB',
      stat_resmon_val: '0.00ms',
      stat_resmon_lbl: 'Resmon Promedio',
      stat_escrow_val: '100%',
      stat_escrow_lbl: 'Sin Escrow / Git',
      stat_multi_val: 'MULTI',
      stat_multi_lbl: 'QBCore • ESX • Qbox',
      stat_fps_val: '60+ FPS',
      stat_fps_lbl: 'FPS Fluidos',
      marker_left: 'CORE: ONLINE // 850V',
      marker_right: 'NEON: DUAL-SYNC ACTIVO'
    },
    catalog: {
      badge: '⚡ CASPAR CODE VAULT',
      title: 'SCRIPTS DISPONIBLES',
      subtitle: 'Clona o descarga directamente desde GitHub. Todos los recursos son modulares, documentados y optimizados para un resmon de 0.00ms a 0.01ms.',
      filter_all: 'Todos los scripts',
      filter_nui: 'NUI y HUD',
      filter_vehicles: 'Vehículos',
      filter_rp: 'Roleplay',
      filter_economy: 'Economía',
      filter_admin: 'Herramientas Admin',
      filter_performance: 'FPS y Boost',
      search_placeholder: 'Buscar script, etiqueta o palabra clave...',
      no_results_title: 'No se encontraron scripts',
      no_results_desc: 'Por favor, ajusta tus términos de búsqueda o filtros.',
      btn_repo: 'GITHUB REPO ↗',
      btn_clone: 'GIT CLONE',
      btn_cloned: '¡CLONADO / COPIADO!'
    },
    terminal: {
      badge: '⌨ CONSOLA INTERACTIVA',
      title: 'TERMINAL & CONFIG SANDBOX',
      subtitle: '¡Echa un vistazo al código! Cambia entre pestañas, copia manifiestos o ejecuta comandos como <code style="color:var(--neon-cyan)">help</code> o <code style="color:var(--neon-orange)">benchmark</code>.',
      tab_fxmanifest: 'fxmanifest.lua',
      tab_config: 'config.lua',
      tab_server: 'server/sync.lua',
      tab_install: 'install.sh',
      btn_copy: 'COPIAR CÓDIGO',
      btn_copied: '¡COPIADO!',
      cli_prompt: 'caspar-node@root:~$',
      cli_placeholder: "Escribe 'help', 'benchmark', 'list' o 'ensure caspar_hud'..."
    },
    features: {
      badge: '🛡 POR QUÉ CASPAR',
      title: 'ARQUITECTURA FIVE-M DE ALTO RENDIMIENTO',
      subtitle: 'Sin bucles sobrecargados, sin código obsoleto de ESX 1.1. Programación moderna, limpia y ultra rápida.',
      f1_title: 'Cero Lag Resmon (0.00ms)',
      f1_desc: 'Todos los subprocesos cuentan con pausas inteligentes. En reposo duermen a 1000ms para evitar picos de uso de CPU tanto en cliente como en servidor.',
      f2_title: '100% Sin Escrow vía GitHub',
      f2_desc: 'Sin bloqueos molestos de FiveM Asset Escrow. Tienes el control total del código fuente para modificarlo, actualizarlo y crear tus propios forks.',
      f3_title: 'Interfaces Cyber NUI y React',
      f3_desc: 'Interfaces modernas creadas con React, TailwindCSS y WebGL. Animaciones fluidas a 60 FPS con soporte de efectos de sonido.',
      f4_title: 'Puente Multi-Framework',
      f4_desc: 'Compatible con QBCore, Qbox, ESX Legacy y Standalone sin duplicar código gracias a nuestra capa puente unificada.',
      f5_title: 'Validación del Servidor Anti-Exploit',
      f5_desc: 'Las transferencias de dinero, inventarios y vehículos se comprueban estrictamente en el servidor contra inyecciones y ejecutores Lua.',
      f6_title: 'Sincronización Automática de SQL',
      f6_desc: 'Integración completa con oxmysql / MySQL.ready. Todas las tablas y columnas se crean automáticamente al iniciar el servidor.'
    },
    install: {
      badge: '🚀 LISTO EN 60 SEGUNDOS',
      title: 'GUÍA RÁPIDA DE INSTALACIÓN',
      subtitle: 'La instalación en tu servidor FiveM de Linux o Windows es muy sencilla:',
      s1_title: 'Clonar repositorio',
      s1_desc: 'Clona el script elegido directamente en la carpeta resources de tu servidor.',
      s2_title: 'Ajustar configuración',
      s2_desc: 'Abre <code>config.lua</code> para configurar idioma, colores y opciones.',
      s3_title: 'Añadir a server.cfg',
      s3_desc: 'Escribe el nombre del recurso en tu archivo de configuración principal.',
      s4_title: 'Iniciar el servidor',
      s4_desc: 'Reinicia tu servidor o ejecuta <code>refresh</code> y <code>ensure</code> en la consola.'
    },
    faq: {
      badge: '❓ PREGUNTAS FRECUENTES',
      title: 'FAQ Y SOPORTE',
      subtitle: 'Todas las respuestas sobre licencias, idiomas, personalización y GitHub Pages.',
      q1: '¿Todos los scripts son realmente gratuitos y de código abierto?',
      a1: '¡Sí! Todos los recursos de Caspar FiveM son de código abierto en GitHub. Puedes ver el código, adaptarlo a tu servidor y añadir mejoras.',
      q2: '¿Qué frameworks e idiomas son compatibles?',
      a2: 'Nuestros scripts detectan automáticamente QBCore, Qbox y ESX Legacy, además de incluir modo Standalone. Cada script cuenta con una carpeta <code>locales/</code> con alemán, inglés, francés y español.',
      q3: '¿Cómo publico esta página en GitHub Pages?',
      a3: 'Crea un repositorio en GitHub, sube estos archivos y activa GitHub Pages en la rama <code>main</code> desde Settings ➔ Pages. ¡Funciona al instante!',
      q4: '¿Puedo cambiar la combinación de colores neón?',
      a4: '¡Por supuesto! Los colores primarios y secundarios están definidos como variables CSS en <code>css/style.css</code> y en las configs de cada script.'
    },
    footer: {
      brand_desc: 'Scripts FiveM de alto rendimiento e interfaces cibernéticas para servidores de rol. Inspirados en el reactor de neón futurista.',
      nav_title: 'Navegación',
      nav_scripts: 'Catálogo de Scripts',
      nav_perf: 'Ventajas de Rendimiento',
      nav_terminal: 'Sandbox de Código',
      nav_setup: 'Guía de Instalación',
      com_title: 'Comunidad y Código',
      status_title: 'Estado del Sistema',
      status_desc: 'Desarrollado para plataformas FiveM / Cfx.re. Probado en versiones 2699 a 3258.',
      disclaimer: '© 2026 Caspar FiveM Development. Todos los scripts licenciados vía GitHub. FiveM es una marca registrada de Take-Two Interactive y Rockstar Games.'
    }
  }
};

// Localized Metadata for each of the 7 scripts
const CASPAR_SCRIPTS_I18N = {
  de: {
    caspar_hud_v2: {
      description: 'Ultra-modernes Cyberpunk NUI HUD mit dynamischen Anzeigen für Gesundheit, Rüstung, Ausdauer, Sauerstoff, Stress und Nitro. Inklusive digitalem Fahrzeugtacho, Gurtwarner und Waffenrad.',
      tags: ['QBCore', 'ESX', 'Qbox', 'React/NUI', 'Mehrsprachig'],
      badge: 'BELIEBT'
    },
    caspar_garage: {
      description: 'Kinematische 3D-Kamera Valet-Garage und Abschlepphof (Impound). Unterstützt mehrstöckige Tiefgaragen, visuelle Fahrzeug-Schadensprüfung, Fraktionsgaragen und Valet-Lieferservice.',
      tags: ['QBCore', 'ESX', 'ox_lib', '3D Kamera', 'SQL Sync'],
      badge: 'FEATURED'
    },
    caspar_multicharacter: {
      description: 'Futuristische Charakterauswahl mit butterweichen Drohnen-Kamerafahrten, animierten Ped-Posen, detaillierter Charakterakte (Bargeld, Bank, Job) und integriertem Spawn-Selector.',
      tags: ['Standalone', 'QBCore', 'ESX', 'Smooth Cam', 'NUI'],
      badge: 'AKTUALISIERT'
    },
    caspar_banking: {
      description: 'Modernes Fleeca Bank- & Geldautomaten-System inklusive Smartphone-Banking-App. Bietet Firmenkonten mit Rollenrechten, Überweisungen mit IBAN, Buchungs-Logs mit CSV-Export und Krypto-Handel.',
      tags: ['QBCore', 'ESX', 'ox_inventory', 'Sichere SQL', 'Wirtschaft'],
      badge: 'SICHER'
    },
    caspar_dispatch: {
      description: 'Taktisches 911-Leitstellensystem für Polizei, Rettungsdienst (EMS) und Justiz. Echtzeit-Einsatzmeldungen, automatische Funkkanal-Synchronisation, Panik-Button und animierte GPS-Kartenblips.',
      tags: ['QBCore', 'ESX', 'Notruf 911', 'Echtzeit GPS', 'Blip Sync'],
      badge: 'TAKTIK'
    },
    caspar_admin_suite: {
      description: 'Vollumfängliche Server-Administration & Moderation. Live-Spectate mit Noclip-Flug, Inventar-Inspektion, Verwarn- und Bannsystem, Echtzeit-Resmon-Monitor und Entity-Wiper gegen Modder.',
      tags: ['Admin', 'Noclip', 'Resmon Tool', 'ACE Perms', 'Discord Logs'],
      badge: 'POWER'
    },
    caspar_fps_boost: {
      description: 'Echtzeit Client-FPS-Booster und RAM-Purge. Optimiert LOD-Distanzen, deaktiviert rechenintensive Schattenkaskaden und leert den Arbeitsspeicher per Hotkey [F7] für +40 bis +70 FPS bei 0.00ms Resmon.',
      tags: ['FPS Boost', 'Performance', 'RAM Purge', '+40-70 FPS', '0.00ms'],
      badge: 'FPS BOOST'
    }
  },

  en: {
    caspar_hud_v2: {
      description: 'Ultra-modern Cyberpunk NUI HUD. Dynamic health, armor, oxygen, stamina, stress & nitro gauges. Built-in vehicle speedometer cluster, seatbelt alerts & weapon wheel.',
      tags: ['QBCore', 'ESX', 'Qbox', 'React/NUI', 'Multi-Language'],
      badge: 'POPULAR'
    },
    caspar_garage: {
      description: 'Cinematic 3D camera vehicle garage & impound system. Supports multi-floor parking, custom vehicle health inspection, shared job garages & valet service.',
      tags: ['QBCore', 'ESX', 'ox_lib', '3D Camera', 'SQL Sync'],
      badge: 'FEATURED'
    },
    caspar_multicharacter: {
      description: 'Futuristic character selection screen with smooth drone camera flyovers, animated ped poses, detailed character biography, slots manager & spawn selector.',
      tags: ['Standalone', 'QBCore', 'ESX', 'Smooth Cam', 'NUI'],
      badge: 'UPDATED'
    },
    caspar_banking: {
      description: 'Next-gen ATM and Mobile Banking app. Business accounts with permission levels, scheduled wire transfers, transaction logs with CSV export & crypto hub.',
      tags: ['QBCore', 'ESX', 'ox_inventory', 'Secure SQL', 'Economy'],
      badge: 'SECURE'
    },
    caspar_dispatch: {
      description: 'Tactical police, EMS and security dispatch system. Live 911 calls, GPS radio channel sync, unit panic buttons, animated waypoint blips & bodycam views.',
      tags: ['QBCore', 'ESX', 'Emergency 911', 'Real-time GPS', 'Blip Sync'],
      badge: 'TACTICAL'
    },
    caspar_admin_suite: {
      description: 'Comprehensive staff administration tool. Real-time player spectate with noclip, inventory inspection, ban & warning manager, live server resmon monitor & entity wiper.',
      tags: ['Admin', 'Noclip', 'Resmon Tool', 'ACE Perms', 'Discord Log'],
      badge: 'POWERFUL'
    },
    caspar_fps_boost: {
      description: 'Real-time client FPS booster & RAM purge engine. Disables cascade shadows, tunes LOD scaling, culls distant traffic lights and flushes memory via [F7].',
      tags: ['FPS Boost', 'Performance', 'RAM Purge', '+40-70 FPS', '0.00ms'],
      badge: 'FPS BOOST'
    }
  },

  fr: {
    caspar_hud_v2: {
      description: 'HUD NUI Cyberpunk ultra-moderne. Jauges dynamiques de vie, armure, oxygène, endurance, stress et nitro. Compteur de vitesse, alerte ceinture et roue des armes.',
      tags: ['QBCore', 'ESX', 'Qbox', 'React/NUI', 'Multilingue'],
      badge: 'POPULAIRE'
    },
    caspar_garage: {
      description: 'Garage et fourrière cinématiques avec caméra 3D. Parkings souterrains, inspection d\'état du véhicule, garages d\'entreprise partagés et service voiturier.',
      tags: ['QBCore', 'ESX', 'ox_lib', 'Caméra 3D', 'Sync SQL'],
      badge: 'VEDETTE'
    },
    caspar_multicharacter: {
      description: 'Écran de sélection de personnage futuriste avec caméra drone fluide, poses de ped animées, dossier citoyen, gestion des slots et sélecteur de spawn.',
      tags: ['Standalone', 'QBCore', 'ESX', 'Caméra Drone', 'NUI'],
      badge: 'MIS À JOUR'
    },
    caspar_banking: {
      description: 'Distributeur et application bancaire mobile nouvelle génération. Comptes d\'entreprise avec hiérarchie, virements programmés, export CSV et module crypto.',
      tags: ['QBCore', 'ESX', 'ox_inventory', 'SQL Sécurisé', 'Économie'],
      badge: 'SÉCURISÉ'
    },
    caspar_dispatch: {
      description: 'Centrale tactique police, secours et sécurité. Appels 911 en direct, synchronisation des canaux radio GPS, bouton panique et balises radar animées.',
      tags: ['QBCore', 'ESX', 'Urgences 911', 'GPS Direct', 'Sync Balises'],
      badge: 'TACTIQUE'
    },
    caspar_admin_suite: {
      description: 'Outil complet d\'administration serveur. Mode spectateur temps réel avec noclip, fouille d\'inventaire, gestionnaire de sanctions et moniteur resmon.',
      tags: ['Admin', 'Noclip', 'Moniteur Resmon', 'ACE Perms', 'Logs Discord'],
      badge: 'PUISSANT'
    },
    caspar_fps_boost: {
      description: 'Optimiseur de FPS et purge de RAM en direct. Désactive les ombres en cascade, optimise les distances LOD, supprime les phares lointains via la touche [F7].',
      tags: ['FPS Boost', 'Performance', 'Purge RAM', '+40-70 FPS', '0.00ms'],
      badge: 'FPS BOOST'
    }
  },

  es: {
    caspar_hud_v2: {
      description: 'HUD NUI Cyberpunk ultra moderno. Indicadores dinámicos de salud, chaleco, oxígeno, estamina, estrés y nitro. Velocímetro integrado, cinturón y selector de armas.',
      tags: ['QBCore', 'ESX', 'Qbox', 'React/NUI', 'Multilingüe'],
      badge: 'POPULAR'
    },
    caspar_garage: {
      description: 'Garaje y depósito con cámara 3D cinematográfica. Compatible con parkings subterráneos, inspección visual de vehículos, garajes de trabajo y aparcacoches.',
      tags: ['QBCore', 'ESX', 'ox_lib', 'Cámara 3D', 'Sincro SQL'],
      badge: 'DESTACADO'
    },
    caspar_multicharacter: {
      description: 'Pantalla futurista de selección de personajes con vuelos suaves de dron, poses de ped, expediente civil detallado y selector de puntos de aparición.',
      tags: ['Standalone', 'QBCore', 'ESX', 'Cámara Suave', 'NUI'],
      badge: 'ACTUALIZADO'
    },
    caspar_banking: {
      description: 'Cajero automático y aplicación móvil de banca de última generación. Cuentas de empresa con permisos, transferencias bancarias, registros CSV y cripto.',
      tags: ['QBCore', 'ESX', 'ox_inventory', 'SQL Seguro', 'Economía'],
      badge: 'SEGURO'
    },
    caspar_dispatch: {
      description: 'Sistema táctico de centralita para policía y emergencias. Avisos 911 en directo, sincronización de radio GPS, botón de pánico y marcadores de radar.',
      tags: ['QBCore', 'ESX', 'Emergencias 911', 'GPS en Vivo', 'Sync Radar'],
      badge: 'TÁCTICO'
    },
    caspar_admin_suite: {
      description: 'Panel integral de administración. Modo espectador con noclip en tiempo real, inspección de inventarios, gestor de advertencias y monitor de resmon.',
      tags: ['Admin', 'Noclip', 'Monitor Resmon', 'Permisos ACE', 'Logs Discord'],
      badge: 'POTENTE'
    },
    caspar_fps_boost: {
      description: 'Optimizador de FPS y purga de RAM en tiempo real. Apaga sombras pesadas, optimiza distancias LOD, reduce tráfico lejano y libera memoria con [F7].',
      tags: ['FPS Boost', 'Rendimiento', 'Purga RAM', '+40-70 FPS', '0.00ms'],
      badge: 'FPS BOOST'
    }
  }
};

// Global scope export for browser window and Node/workers
if (typeof window !== 'undefined') {
  window.CASPAR_TRANSLATIONS = CASPAR_TRANSLATIONS;
  window.CASPAR_SCRIPTS_I18N = CASPAR_SCRIPTS_I18N;
}
if (typeof globalThis !== 'undefined') {
  globalThis.CASPAR_TRANSLATIONS = CASPAR_TRANSLATIONS;
  globalThis.CASPAR_SCRIPTS_I18N = CASPAR_SCRIPTS_I18N;
}
