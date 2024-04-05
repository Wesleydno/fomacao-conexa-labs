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
  console.log(appCulturas)

});