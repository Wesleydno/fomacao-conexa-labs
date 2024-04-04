const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", menuHamburger);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function menuHamburger() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// script responsável por popular a sessão culturas

  const basePath = 'data/culturas.json';

  function carregarCulturas() {
    fetch(basePath)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error("Erro ao carregar o JSON:", error));
  }
  carregarCulturas();
  function adicionarOpcoesCulturas(culturas) {}

  function exibirDetalhesCultura(cultura) {}

  function culturaTemplate(cultura) {}

  function handleChangeSelect() {}