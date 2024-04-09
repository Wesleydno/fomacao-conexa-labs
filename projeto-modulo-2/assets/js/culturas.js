import SeletorBase from "./SeletorBase.js"

document.addEventListener("DOMContentLoaded", function () {
  class Culturas extends SeletorBase {
    constructor(pathData, pathImages, idSelect, idDetalhes, templateHtml) {
      super(pathData, pathImages, idSelect, idDetalhes, templateHtml);
    }

  }

  const pathData = 'data/culturas.json';
  const pathImages = 'assets/images/culturas/'
  const idSelect = "culturas";
  const idDetalhes = "detalhes-cultura";

  const templateHtml = `
  <h2>{{nome}}</h2>
  <p><img src="{{link_imagem}}" width="400px" height="300px" class="alignleft" alt="Imagem da cultura {{nome}}">{{descricao}}</p>
  <p><strong>Principal produtor:</strong> {{principal_produtor}}</p>
  <p><strong>Produtores:</strong> {{estados_produtores}}</p>
  `;

  const culturas = new Culturas(pathData, pathImages, idSelect, idDetalhes, templateHtml);
  culturas.inicializar();

});