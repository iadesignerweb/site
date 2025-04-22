let contadorCarrinho = 0;

function adicionarCarrinho() {
  contadorCarrinho++;
  document.getElementById("contador").textContent = contadorCarrinho;
  alert("Produto adicionado ao carrinho!");
}

// Bloqueio de PrintScreen
document.addEventListener("keyup", function(e) {
  if (e.key === "PrintScreen") {
    navigator.clipboard.writeText("");
    alert("Captura de tela bloqueada por segurança!");
  }
});

// Bloqueio de Ctrl+P (impressão)
document.addEventListener("keydown", function(e) {
  if (e.ctrlKey && e.key === "p") {
    e.preventDefault();
    alert("Função de impressão desativada.");
  }
});
