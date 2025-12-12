// Lista dos produtos
const produtos = [
    { id: 1, nome: "Produto Genérico 1", descricao: "Descrição simples do produto.", imagem: "https://picsum.photos/300/200?random=1", preco: 89.90 },
    { id: 2, nome: "Produto Genérico 2", descricao: "Descrição simples do produto.", imagem: "https://picsum.photos/300/200?random=2", preco: 129.90 },
    { id: 3, nome: "Produto Genérico 3", descricao: "Descrição simples do produto.", imagem: "https://picsum.photos/300/200?random=3", preco: 199.90 }
];

// Obtém o ID via URL
function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("id"));
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("produto-container");

    const id = getProductId();
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        container.innerHTML = `
            <div class="card-erro">
                <h1>❌ Produto não encontrado</h1>
                <p>O produto solicitado não existe.</p>
                <a class="btn-voltar" href="../../index.html">Voltar</a>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="produto-card">

            <img class="produto-img" src="${produto.imagem}" alt="${produto.nome}">

            <div class="produto-info">
                <h1>${produto.nome}</h1>
                <p>${produto.descricao}</p>
                <h3>Preço: R$ ${produto.preco.toFixed(2)}</h3>

                <button class="btn-add">Adicionar ao Carrinho</button>
            </div>

        </div>
    `;
});