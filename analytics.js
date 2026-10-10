// Google Analytics 4 + Microsoft Clarity, carregados só depois do consentimento (LGPD).
// Os IDs são públicos (aparecem no HTML de qualquer site), então podem ficar aqui.
// Enquanto estiverem vazios, nada é carregado e o aviso de cookies nem aparece.
(() => {
  "use strict";

  const GA_ID = "";       // ex.: "G-XXXXXXXXXX"  (Google Analytics → Admin → Fluxos de dados)
  const CLARITY_ID = "";  // ex.: "abcd1234ef"    (clarity.microsoft.com → Settings → Overview)

  const KEY = "consent-analytics";
  const store = {
    get: () => { try { return localStorage.getItem(KEY); } catch { return null; } },
    set: (v) => { try { localStorage.setItem(KEY, v); } catch { /* modo privado */ } },
  };

  const banner = document.getElementById("consent");
  const openBtn = document.getElementById("consent-open");
  if (!GA_ID && !CLARITY_ID) { if (openBtn) openBtn.hidden = true; return; }

  let loaded = false;
  function load() {
    if (loaded) return;
    loaded = true;
    if (GA_ID) {
      const s = document.createElement("script");
      s.async = true;
      s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("consent", "default", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "granted" });
      window.gtag("js", new Date());
      window.gtag("config", GA_ID, { anonymize_ip: true });
    }
    if (CLARITY_ID) {
      (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", CLARITY_ID);
      window.clarity("consent");
    }
  }

  function clearCookies() {
    for (const c of document.cookie.split(";")) {
      const name = c.split("=")[0].trim();
      if (/^(_ga|_gid|_gat|_clck|_clsk|CLID|ANONCHK|MR|MUID|SM)/.test(name)) {
        document.cookie = name + "=; Max-Age=0; path=/";
        document.cookie = name + "=; Max-Age=0; path=/; domain=" + location.hostname;
      }
    }
  }

  function decide(value) {
    const before = store.get();
    store.set(value);
    banner.hidden = true;
    if (value === "granted") load();
    else if (before === "granted") { clearCookies(); location.reload(); } // descarrega os scripts já ativos
  }

  document.getElementById("consent-yes").addEventListener("click", () => decide("granted"));
  document.getElementById("consent-no").addEventListener("click", () => decide("denied"));
  if (openBtn) openBtn.addEventListener("click", () => { banner.hidden = false; });

  const choice = store.get();
  if (choice === "granted") load();
  else if (choice !== "denied") banner.hidden = false;
})();
