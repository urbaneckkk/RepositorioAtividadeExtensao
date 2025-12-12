//exibe o header nas paginas que contem elementos com o id header-slot

const headerHTML = `
<header class="topo">
    <div class="logo">Minha Loja</div>

    <!-- Botão mostrado apenas no mobile -->
    <button class="btn-mobile-categorias" id="btnMobileCategorias">☰ Categorias</button>

    <!-- Menu desktop normal -->
    <nav class="menu">
        <a href="index.html">Home</a>
        <a href="#">Produtos</a>
        <a href="#">Categorias</a>
        <a href="../pages/contato.html">Contato</a>
    </nav>

    <div class="acoes">
        <button onclick="window.location.href='/frontend/pages/login.html'">Login</button>
        <button onclick="window.location.href='/frontend/pages/carrinho.html'">Carrinho</button>
    </div>

    <!-- Menu mobile -->
    <nav class="menu-mobile" id="menuCategoriasMobile">
        <a href="/frontend/pages/produtos.html?cat=roupas">Roupas</a>
        <a href="/frontend/pages/produtos.html?cat=eletronicos">Eletrônicos</a>
        <a href="/frontend/pages/produtos.html?cat=acessorios">Acessórios</a>
        <a href="/frontend/pages/produtos.html?cat=promocoes">Promoções</a>
    </nav>
</header>
`;


function loadComponents() {
    const headerSlot = document.getElementById('header-slot');

    if (headerSlot) {
        headerSlot.innerHTML = headerHTML;
    }
}

loadComponents();

document.addEventListener("DOMContentLoaded", function () {

    function isSidebarExpanded(sidebarEl) {
        if (!sidebarEl) return false;
        // se você usa classe .expanded, conta também
        if (sidebarEl.classList.contains("expanded")) return true;
        // checa largura real: quando expandida ela será maior que 100px
        return sidebarEl.offsetWidth > 100;
    }

    const sidebar = document.querySelector(".sidebar");
    const toggles = Array.from(document.querySelectorAll(".menu-toggle"));

    toggles.forEach(btn => btn.replaceWith(btn.cloneNode(true)));
    // re-seleciona depois do clone para garantir listeners limpos
    const freshToggles = document.querySelectorAll(".menu-toggle");

    freshToggles.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();

            if (!isSidebarExpanded(sidebar)) return;

            const submenuAtual = btn.nextElementSibling;
            if (!submenuAtual) return;

            document.querySelectorAll(".submenu").forEach(s => {
                if (s !== submenuAtual) s.classList.remove("open");
            });

            submenuAtual.classList.toggle("open");
        });
    });

    // opcional: fechar todos os submenus ao clicar fora da sidebar
    document.addEventListener("click", (e) => {
        if (!sidebar) return;
        if (!sidebar.contains(e.target)) {
            document.querySelectorAll(".submenu").forEach(s => s.classList.remove("open"));
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnMobileCategorias");
    const menu = document.getElementById("menuCategoriasMobile");

    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    // Fecha ao clicar fora
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && e.target !== btn) {
            menu.style.display = "none";
        }
    });
});


