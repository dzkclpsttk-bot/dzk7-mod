// ========================================
// MENU DO SITE
// ========================================

function abrirMenu() {
    const menu = document.getElementById("menu");

    if (menu.classList.contains("aberto")) {
        menu.classList.remove("aberto");
    } else {
        menu.classList.add("aberto");
    }
}


// ========================================
// FECHAR O MENU AO CLICAR EM UM LINK
// ========================================

const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach(function(link) {

    link.addEventListener("click", function() {

        const menu = document.getElementById("menu");

        menu.classList.remove("aberto");

    });

});


// ========================================
// ROLAGEM SUAVE
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            event.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ========================================
// ANIMAÇÃO DOS CARDS
// ========================================

const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        card.classList.toggle("selecionado");

    });

});


// ========================================
// MENSAGEM NO CONSOLE
// ========================================

console.log("Site carregado com sucesso!");