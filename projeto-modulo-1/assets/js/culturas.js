document.addEventListener("DOMContentLoaded", function() {
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
        <p><img src="${cultura.link_imagem}"  width="400px" height="300px" class="alignleft" alt="Imagem da cultura ${cultura.nome}">${cultura.descricao}</p>
        <p><strong>Principal produtor:</strong> ${cultura.principal_produtor}</p>
        <p><strong>Produtores:</strong> ${cultura.estados_produtores.join(", ")}</p>
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
    
    });