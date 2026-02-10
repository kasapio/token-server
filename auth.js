(async function () {
  const server = "https://token-server.onrender.com";

  const params = new URLSearchParams(location.search);
  const token = params.get("token");
  const saved = localStorage.getItem("auth");

  // jeśli już ma dostęp
  if (saved) return;

  // jeśli jest token w linku
  if (token) {
    try {
      const res = await fetch(server + "/auth?token=" + token);
      if (res.ok) {
        localStorage.setItem("auth", "ok");
        history.replaceState({}, "", location.pathname);
        return;
      }
    } catch {}
  }

  // brak dostępu
  document.body.innerHTML = "<h1>Brak dostępu</h1>";
})();