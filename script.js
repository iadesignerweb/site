function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Bloqueia clique direito
document.addEventListener("contextmenu", e => e.preventDefault());

// Captura PrintScreen
document.addEventListener("keydown", e => {
  if (e.key === "PrintScreen") {
    e.preventDefault();
    const a = document.getElementById("printAlert");
    a.style.display = "block";
    setTimeout(() => a.style.display = "none", 4000);
  }
});

// Carregamento dinâmico e ilimitado de imagens
async function loadAllImages() {
  const grid = document.getElementById("imageGrid");
  let idx = 1;
  while (true) {
    const url = `imagens/imagem${idx}.jpg`;
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (!res.ok) break;
      const card = document.createElement("div");
      card.className = "img-card";
      card.innerHTML = `
        <img src="${url}" alt="Imagem ${idx}" />
        <div class="label">Plínio Studio</div>
        <a href="https://wa.me/5587999786261"><button>Comprar</button></a>
      `;
      grid.appendChild(card);
      idx++;
    } catch {
      break;
    }
  }
}
loadAllImages();
