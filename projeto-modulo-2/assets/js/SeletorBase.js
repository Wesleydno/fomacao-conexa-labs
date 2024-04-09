class SeletorBase {
    constructor(pathData, pathImages, idSelect, idDetalhes, templateHtml) {
      this._pathData = pathData;
      this._pathImages = pathImages;
      this._select = document.getElementById(idSelect);
      this._detalhes = document.getElementById(idDetalhes);
      this._templateHtml = templateHtml;
      this._dados = [];
    }
  
    async carregarDados() {
      try {
        const resposta = await fetch(this._pathData);
        const dados = await resposta.json();
        const dadosArray = Object.values(dados).find(Array.isArray);
  
        if (dadosArray) {
          this._dados = dadosArray.map(item => this.criarEstrutura(item));
        } else {
          console.error("Nenhuma array encontrada nos dados.");
        }
      } catch (erro) {
        console.error("Erro ao carregar o JSON:", erro);
      }
    }
  
    criarEstrutura(data) {
      const estrutura = { nome: data.nome };
      for (const chave in data) {
        if (data.hasOwnProperty(chave) && chave !== "nome") {
          estrutura[chave] = data[chave];
        }
      }
      return estrutura;
    }
  
    exibirDetalhes(item) {
      this._detalhes.innerHTML = this.template(item);
    }
  
    template(items) {
      let html = '';
      items.forEach(item => {
        let itemHtml = this._templateHtml;
        for (const prop in item) {
          if (item.hasOwnProperty(prop)) {
            let valor = item[prop];
            if (prop === 'link_imagem') {
              valor = this._pathImages + valor;
            } else if (prop === 'estados_produtores' && Array.isArray(valor)) {
              valor = valor.join(", ");
            }
            itemHtml = itemHtml.replace(new RegExp(`{{${prop}}}`, 'g'), valor);
          }
        }
        html += itemHtml;
      });
      return html;
    }
  
    async handleChangeSelect() {
      const itemSelecionado = this._select.value;
      const item = this._dados.find(objeto => objeto.nome === itemSelecionado);
      if (item) {
        this.exibirDetalhes(item);
      } else {
        this._detalhes.innerHTML = `<p class="cultura-vazio">Item não encontrado</p>`;
      }
    }
  
    inicializar() {
      this._select.addEventListener("change", this.handleChangeSelect.bind(this));
      this.carregarDados();
    }
  }
  
  export default SeletorBase;