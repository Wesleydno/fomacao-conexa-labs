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
  const selectCulturas = document.getElementById("culturas");
  const detalhesCultura = document.getElementById("detalhes-cultura");

  function carregarCulturas() {
    fetch(basePath)
      .then(response => response.json())
      .then(data => adicionarOpcoesCulturas(data.culturas))
      .catch(error => console.error("Erro ao carregar o JSON:", error));
  }

  function adicionarOpcoesCulturas(culturas) {
    culturas.forEach(cultura => {
        const option = document.createElement("option");
        option.textContent = cultura.nome;
        option.value = cultura.nome;
        selectCulturas.appendChild(option);
      });
  }

  function exibirDetalhesCultura(cultura) {
    detalhesCultura.innerHTML = culturaTemplate(cultura);
  }

  function culturaTemplate(cultura) {
    return `
    <h2>${cultura.nome}</h2>
    <p>${cultura.descricao}</p>
    <p><strong>Principal produtor:</strong> ${cultura.principal_produtor}</p>
    <p><strong>Produtores:</strong> ${cultura.estados_produtores.join(", ")}</p>
    <img src="${cultura.link_imagem}" alt="Imagem da cultura ${cultura.nome}">
  `;
  }

  function handleChangeSelect() {
    const culturaSelecionada = selectCulturas.value;
    fetch(basePath)
      .then(response => response.json())
      .then(data => {
        const cultura = data.culturas.find(c => c.nome === culturaSelecionada);
        if (cultura) {
          exibirDetalhesCultura(cultura);
        } else {
          detalhesCultura.innerHTML = "<p>Cultura não encontrada</p>";
        }
      })
      .catch(error => console.error("Erro ao buscar detalhes da cultura:", error));
  }

  carregarCulturas();

  selectCulturas.addEventListener("change", handleChangeSelect);