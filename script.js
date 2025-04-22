let produtos = [];
let carrinho = [];

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    produtos = data;
    popularCategorias(data);
    exibirProdutos(data);
  });

function popularCategorias(data) {
  const select = document.getElementById("categoriaFiltro");
  const categorias = [...new Set(data.map(p => p.categoria))];
  categorias.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });
}

function exibirProdutos(lista) {
  const container = document.getElementById("produtos");
  container.innerHTML = "";
  lista.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="imagens/${prod.imagem}" alt="${prod.nome}" />
      <h2>${prod.nome}</h2>
      <p>R$ ${prod.preco}</p>
      <button onclick='adicionarCarrinho(${JSON.stringify(prod)})'>Adicionar</button>
    `;
    container.appendChild(card);
  });
}

function adicionarCarrinho(prod) {
  carrinho.push(prod);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const totalSpan = document.getElementById("total");
  lista.innerHTML = "";

  let total = 0;
  carrinho.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nome} - R$ ${p.preco}`;
    lista.appendChild(li);
    total += parseFloat(p.preco.replace(",", "."));
  });

  totalSpan.textContent = total.toFixed(2).replace(".", ",");
}

document.getElementById("busca").addEventListener("input", e => {
  const termo = e.target.value.toLowerCase();
  const categoria = document.getElementById("categoriaFiltro").value;
  const filtrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(termo) &&
    (categoria === "" || p.categoria === categoria)
  );
  exibirProdutos(filtrados);
});

document.getElementById("categoriaFiltro").addEventListener("change", () => {
  document.getElementById("busca").dispatchEvent(new Event("input"));
});
