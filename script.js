// Menu mobile
function abrirMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("ativo");
}

// Contadores
const contadores = {};

function registrarVisualizacao(chave) {
  if (!contadores[chave]) {
    contadores[chave] = 0;
  }

  contadores[chave]++;

  return contadores[chave];
}

// Contador geral do site
let visitasSite = Number(localStorage.getItem("dzk7_visitas")) || 0;
visitasSite++;

localStorage.setItem("dzk7_visitas", visitasSite);

const siteViews = document.getElementById("siteViews");

if (siteViews) {
  siteViews.textContent = visitasSite;
}

// Cards de mods
document.querySelectorAll(".card").forEach((card) => {
  const botao = card.querySelector(".abrir-card");
  const contador = card.querySelector(".card-views");
  const chave = card.dataset.counterKey;

  if (botao) {
    botao.addEventListener("click", () => {
      const total = registrarVisualizacao(chave);
      contador.textContent = total;

      botao.textContent = "Visualizado ✓";

      setTimeout(() => {
        botao.textContent = "Visualizar";
      }, 1200);
    });
  }
});

// Itens da área de jogos
document.querySelectorAll(".item").forEach((item) => {
  const contador = item.querySelector("strong");
  const chave = item.dataset.counterKey;

  item.addEventListener("click", () => {
    const total = registrarVisualizacao(chave);
    contador.textContent = total;
  });
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("ativo");
  });
});
