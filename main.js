// Idioma (PT/EN) e tema (claro/escuro). Sem dependências.
(() => {
  "use strict";

  const EN = {
    skip: "Skip to projects",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.eyebrow": "Hi, I'm",
    "hero.role": "Full Stack Developer",
    "hero.lead": "Software Engineering graduate. I build complete applications — React, Next.js and Vue front-ends, REST APIs in Node.js, C#/.NET and PHP, relational databases, automated tests and deployment with Docker and CI. I come from IT support, so I know what it's like on the user's side.",
    "hero.cta.projects": "See projects",
    "hero.cta.cv": "Download résumé (PT-BR)",
    "hero.location": "📍 Irati, Brazil · moving to Ponta Grossa in November",
    "projects.title": "Projects",
    "projects.sub": "All open source, with README, automated tests and CI on GitHub Actions.",
    "p.motor.desc": "Visual workflows (webhook or schedule → condition → API call → AI → Discord, Slack or Telegram) that actually run: a queue in PostgreSQL, retrying only the step that failed, and a history of every run with the flow colored by the result.",
    "p.motor.h1": "Queue with SKIP LOCKED, leases and recovery when a worker dies",
    "p.motor.h2": "Row Level Security, SSRF protection and 82 tests in CI",
    "p.motor.h3": "AI node with Claude or Gemini: classification via JSON Schema and prompt injection defenses",
    "p.explain.desc": "Runs EXPLAIN ANALYZE on a sample database with 1 million rows (or reads a pasted plan) and shows the tree with each node's time, where the estimate went wrong and what a hypothetical index would change.",
    "p.explain.h1": "Visitor SQL in layers: read-only role, timeout, one statement at a time and connection cleanup",
    "p.explain.h2": "Hypothetical index (HypoPG) to compare the plan before and after, without creating anything",
    "p.explain.h3": "87 tests in CI and Lighthouse 100 in production",
    "p.agenda.desc": "Scheduling API: the mentor publishes a weekly schedule and the student sees the free slots (without holidays and blocked periods), books without an account and cancels with a code.",
    "p.agenda.h1": "One slot, one person, guaranteed by PostgreSQL: 10 simultaneous bookings, only 1 gets in",
    "p.agenda.h2": "Idempotency-Key, mentor's time zone, BrasilAPI holidays with cache and 2FA",
    "p.agenda.h3": "46 tests with Jest (e2e against a real database) in CI",
    "p.chaos.desc": "Reverse proxy that sits between a client and an API and injects failures on purpose (latency, timeouts, 5xx errors, 429 with Retry-After, dropped connections and HTML instead of JSON) to measure, with numbers, whether the client copes.",
    "p.chaos.h1": "With it, the Tickets Portal got retries and a circuit breaker: from 20/30 to 30/30 with an unstable API",
    "p.chaos.h2": "Found two real bugs: the token that never reached PHP in Docker and HTML accepted as success in the Portal",
    "p.chaos.h3": "Per-visitor scenario in the public demo, rate limit on every route and 67 xUnit tests in CI",
    "p.portal.desc": "Service desk front-end for my Tickets API: queue with filters kept in the URL, ITIL priority computed as you type, SLA in business hours, conversation with internal notes, and metrics.",
    "p.portal.h1": "Server Components and Server Actions (BFF pattern)",
    "p.portal.h2": "API token in an httpOnly cookie, out of XSS reach",
    "p.portal.h3": "Tests with Vitest, Testing Library and Playwright",
    "p.api.desc": "Helpdesk REST API in plain PHP, based on my service desk routine: impact × urgency priority matrix, SLA counted in business hours and paused while waiting for the user, role-based permissions and history.",
    "p.api.h1": "Object-oriented PHP 8, no framework",
    "p.api.h2": "51 PHPUnit tests in CI on MySQL and SQLite",
    "p.api.h3": "OpenAPI docs tested against the routes",
    "p.painel.desc": "Security findings triage (SAST, DAST, SCA) with fictional data: summary and charts by severity and OWASP Top 10, table with filters and cursor pagination, CVSS 3.1 score explained, and triage with justification.",
    "p.painel.h1": "CVSS score computed from the vector, per the spec",
    "p.painel.h2": "GraphQL in the browser, ready to swap for a real API",
    "p.painel.h3": "Optimistic UI, PT/EN i18n and accessibility",
    "p.proto.desc": "Desktop system for a Brazilian real-estate registry protocol book: entries with gap-free numbering, requirement notices and resubmission, registration on the property record, and business-day deadlines with computed holidays.",
    "p.proto.h1": "MVP pattern: screens tested without opening a window",
    "p.proto.h2": "Optimistic concurrency with rowversion",
    "p.proto.h3": "Integration tests against SQL Server 2022 in CI",
    "p.ponto.desc": "Time tracking with a monthly timesheet, hours balance, absences and national holidays from the BrasilAPI web service. Exports to CSV and XML, with the API documented in Swagger.",
    "p.ponto.h1": "Redux Toolkit + RTK Query on the front-end",
    "p.ponto.h2": "REST API with JWT, rate limiting and OpenAPI",
    "p.ponto.h3": "Integration tests against PostgreSQL in CI",
    "p.sacd.tag": "· Capstone project",
    "p.sacd.desc": "Dengue control support system for municipal health departments: citizens report breeding sites with photo and location, and inspectors and managers follow everything on a map with a heatmap and radius search.",
    "p.sacd.h1": "ASP.NET Core API with 5 access levels",
    "p.sacd.h2": "Geospatial queries with PostGIS",
    "p.sacd.h3": "Tests with xUnit and Vitest",
    "p.ritmo.desc": "App for people on GLP-1 treatment to track doses, weight, symptoms, water and meals, with a PDF report for the doctor. Works offline and can be installed on the phone.",
    "p.ritmo.h1": "Offline-first PWA with IndexedDB",
    "p.ritmo.h2": "Accessible: keyboard, screen reader, focus",
    "p.ritmo.h3": "Automatic deploy to GitHub Pages",
    "p.fin.desc": "Personal finance app with transactions, categories, monthly budgets with limit alerts, savings goals with projections and reports with charts and CSV export.",
    "p.fin.h1": "End-to-end typed API with tRPC",
    "p.fin.h2": "Own auth: bcrypt + JWT in an httpOnly cookie",
    "p.fin.h3": "27 integration tests against MySQL",
    "links.code": "Code",
    "links.demo": "Live demo",
    "exp.title": "Experience",
    "exp.1.when": "May 2026 – present",
    "exp.1.role": "Service Desk Assistant",
    "exp.1.where": "Cybercorp · on-site at client Leão Junior",
    "exp.1.desc": "Diagnosing and solving software, hardware and network incidents; logging, prioritizing and following up tickets within SLA, following ITIL.",
    "exp.2.when": "Jul 2025 – Apr 2026",
    "exp.2.role": "IT Support",
    "exp.2.where": "Irati City Hall",
    "exp.2.desc": "City Hall's point of contact for rolling out Publitech's Digital Government platform: bridging the vendor and departments, helping with documentation and training users.",
    "exp.3.when": "Feb 2025 – Jun 2025",
    "exp.3.role": "IT Intern",
    "exp.3.where": "Irati City Hall",
    "exp.3.desc": "Hardware and software support, system installation and configuration.",
    "edu.role": "B.Sc. in Software Engineering",
    "skills.title": "Skills",
    "skills.db": "Databases",
    "skills.devops": "Testing & DevOps",
    "skills.also": "Also",
    "skills.flutter": "Flutter / Dart (college)",
    "contact.title": "Let's talk?",
    "contact.text": "I'm looking for my first developer role — junior, full stack or back-end. If my profile fits your team, get in touch.",
    "contact.email": "Send an email",
    footer: "Hand-made with HTML, CSS and JavaScript — no framework.",
    "footer.src": "Site source",
    "footer.privacy": "Privacy",
    "footer.cookies": "Cookies",
    "consent.text": "I use analytics cookies (Google Analytics and Microsoft Clarity) to understand how the site is visited. Nothing is collected without your permission.",
    "consent.more": "Learn more",
    "consent.no": "Decline",
    "consent.yes": "Accept",
  };
  const META = {
    pt: { title: "Ademar Chami Neto — Desenvolvedor Full Stack", lang: "pt-BR", button: "EN" },
    en: { title: "Ademar Chami Neto — Full Stack Developer", lang: "en", button: "PT" },
  };

  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* modo privado */ } },
  };

  // guarda o texto original (PT) de cada elemento traduzível
  const nodes = [...document.querySelectorAll("[data-i18n]")];
  const PT = Object.fromEntries(nodes.map((el) => [el.dataset.i18n, el.textContent]));

  function setLang(lang) {
    const dict = lang === "en" ? EN : PT;
    for (const el of nodes) {
      const text = dict[el.dataset.i18n];
      if (text) el.textContent = text;
    }
    document.documentElement.lang = META[lang].lang;
    document.title = META[lang].title;
    document.getElementById("lang-toggle").textContent = META[lang].button;
    store.set("lang", lang);
    currentLang = lang;
  }

  const fromUrl = new URLSearchParams(location.search).get("lang");
  let currentLang = "pt";
  const initial = fromUrl === "en" || fromUrl === "pt" ? fromUrl : store.get("lang") || "pt"; // padrão em português (vagas no Brasil)
  if (initial === "en") setLang("en");
  document.getElementById("lang-toggle").addEventListener("click", () => setLang(currentLang === "pt" ? "en" : "pt"));

  // tema: respeita o sistema até a pessoa escolher
  const root = document.documentElement;
  const savedTheme = store.get("theme");
  if (savedTheme) root.dataset.theme = savedTheme;
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const isDark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = isDark ? "light" : "dark";
    store.set("theme", root.dataset.theme);
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
