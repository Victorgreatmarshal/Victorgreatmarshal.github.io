(function () {
  var STORAGE_KEY = "blog-theme";
  var root = document.documentElement;
  var saved = localStorage.getItem(STORAGE_KEY);
  if (saved) root.setAttribute("data-theme", saved);

  function current() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setLabel(btn) {
    btn.textContent = current() === "dark" ? "☀︎ Light" : "☾ Dark";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    setLabel(btn);
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem(STORAGE_KEY, next);
      setLabel(btn);
    });
  });
})();
