// Bloqueio de PrintScreen
document.addEventListener("keyup", function(e) {
  if (e.key === "PrintScreen") {
    navigator.clipboard.writeText("");
    alert("Captura de tela bloqueada por segurança!");
  }
});

// Bloqueio de Ctrl+P
document.addEventListener("keydown", function(e) {
  if (e.ctrlKey && e.key === "p") {
    e.preventDefault();
    alert("Função de impressão desativada.");
  }
});
