//exibe o header nas paginas que contem elementos com o id header-slot

const headerHTML = `
<header class="topo">
    <div class="logo">Minha Loja</div>
    <nav class="menu">
        <a href="/frontend/index.html">Home</a>
        <a href="/frontend/pages/produtos.html">Produtos</a>
        <a href="#">Categorias</a>
        <a href="#">Contato</a>
    </nav>
    <div class="acoes">
        <button class="btn-login" onclick="window.location.href='/frontend/pages/login.html'">Login</button>
        <button class="btn-carrinho">Carrinho</button>
    </div>
</header>
`;

function loadComponents() {
    const headerSlot = document.getElementById('header-slot');

    if (headerSlot) {
        headerSlot.innerHTML = headerHTML;
    }
}

loadComponents();