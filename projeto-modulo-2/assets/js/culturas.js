document.addEventListener("DOMContentLoaded", function () {
  class App {
    constructor(pathData, pathImages, idSelect, idDetalhes) {
      this._pathData = pathData;
      this._caminhoBaseImagens = pathImages;
      this._select = document.getElementById(idSelect);
      this._detalhes = document.getElementById(idDetalhes);
      this._dados = [];
    }

  }
  
  const pathData = 'data/culturas.json';
  const pathImages = 'assets/images/culturas/'
  const idSelect = "culturas";
  const idDetalhes = "detalhes-cultura";
  
  const appCulturas = new App(pathData, pathImages, idSelect, idDetalhes);
  console.log(appCulturas)

});