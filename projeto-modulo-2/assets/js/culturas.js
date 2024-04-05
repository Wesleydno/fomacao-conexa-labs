document.addEventListener("DOMContentLoaded", function () {
  class App {
    constructor(pathData, pathImages, idSelect, idDetalhes, templateHtml) {
      this._pathData = pathData;
      this._caminhoBaseImagens = pathImages;
      this._select = document.getElementById(idSelect);
      this._detalhes = document.getElementById(idDetalhes);
      this._dados = [];
      this._templateHtml = templateHtml;
    }

    async carregarDados() {
      try {
        const resposta = await fetch(this._pathData);
        const dados = await resposta.json();
        const dadosArray = Object.values(dados).find(Array.isArray);

        if (dadosArray) {
          this._dados = dadosArray.map(item => new Estrutura(item));
        } else {
          console.error("Nenhuma array encontrada nos dados.");
        }
      } catch (erro) {
        console.error("Erro ao carregar o JSON:", erro);
      }
    }

    preencherSelect() {
      this._dados.forEach(item => {
        const opcao = document.createElement("option");
        opcao.textContent = item.nome;
        opcao.value = item.nome;
        this._select.appendChild(opcao);
      });
    }

    exibirDetalhes(item) {
      this._detalhes.innerHTML = this.template(item);
    }

    template(item) {
      let html = this._templateHtml;
      for (const prop in item) {
        if (item.hasOwnProperty(prop)) {
          let valor = item[prop];
          if (prop === 'link_imagem') {
            valor = this._caminhoBaseImagens + valor;
          } else if (prop === 'estados_produtores') {
            valor = valor.join(", ");
          }
          html = html.replace(new RegExp(`{{${prop}}}`, 'g'), valor);
        }
      }
      return html;
    }

    async handleChangeSelect() {
      const itemSelecionado = this._select.value;
      const item = this._dados.find(objeto => objeto.nome === itemSelecionado);
      if (item) {
        this.exibirDetalhes(item);
      } else {
        this._detalhes.innerHTML = "<p>Item não encontrado</p>";
      }
    }

    inicializar() {
      this._select.addEventListener("change", this.handleChangeSelect.bind(this));
      this.carregarDados().then(() => {
        this.preencherSelect();
      });
    }
  }

  class Estrutura {
    constructor(data) {
      this.nome = data.nome;
      for (const chave in data) {
        if (data.hasOwnProperty(chave) && chave !== "nome") {
          this[chave] = data[chave];
        }
      }
    }
  }

  const pathData = 'data/culturas.json';
  const pathImages = 'assets/images/culturas/'
  const idSelect = "culturas";
  const idDetalhes = "detalhes-cultura";

  const templateHtmlCultura = `
  <h2>{{nome}}</h2>
  <p><img src="{{link_imagem}}" width="400px" height="300px" class="alignleft" alt="Imagem da cultura {{nome}}">{{descricao}}</p>
  <p><strong>Principal produtor:</strong> {{principal_produtor}}</p>
  <p><strong>Produtores:</strong> {{estados_produtores}}</p>
  `;

  const appCulturas = new App(pathData, pathImages, idSelect, idDetalhes, templateHtmlCultura);
  appCulturas.inicializar();

});