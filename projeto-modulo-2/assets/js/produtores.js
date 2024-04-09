import SeletorBase from './SeletorBase.js';

class Produtores extends SeletorBase {
  constructor(pathData, pathImages, idSelect, idDetalhes, templateHtml) {
    super(pathData, pathImages, idSelect, idDetalhes, templateHtml);
  }

  handleChangeSelect() {
    const estadoSelecionado = this._select.value;
    const item = this._dados.filter(cultura => {
      return cultura.estados_produtores.includes(estadoSelecionado) || cultura.principal_produtor === estadoSelecionado;
    });

    if (item.length) {
      this.exibirDetalhes(item);
    } else {
      this._detalhes.innerHTML = `<div class="cultura-vazio"><em>Item não encontrado</em></div>`;
    }
  }
}

const pathData = 'data/culturas.json';
const pathImages = 'assets/images/culturas/'
const idSelect = "estados";
const idDetalhes = "detalhes-cultura";
const templateHtml = `
  <article>
  <h2>{{nome}}</h2>
  <p><img src="{{link_imagem}}" width="400px" height="300px" class="alignleft" alt="Imagem da cultura {{nome}}">{{descricao}}</p>
  <p><strong>Principal produtor:</strong> {{principal_produtor}}</p>
  <p><strong>Produtores:</strong> {{estados_produtores}}</p>
  </article>
  `;

const produtores = new Produtores(pathData, pathImages, idSelect, idDetalhes, templateHtml);

produtores.inicializar();
