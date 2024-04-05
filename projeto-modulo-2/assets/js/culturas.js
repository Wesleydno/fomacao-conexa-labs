document.addEventListener("DOMContentLoaded", function () {
  class Cultura {
    constructor(nome, descricao, principalProdutor, estadosProdutores, linkImagem) {
      this.nome = nome;
      this.descricao = descricao;
      this.principalProdutor = principalProdutor;
      this.estadosProdutores = estadosProdutores;
      this.linkImagem = linkImagem;
    }
  }

  class App {
    constructor(pathData, pathImages, idSelect, idDetalhes) {
      this.pathData = pathData;
      this.pathImages = pathImages;
      this.select = document.getElementById(idSelect);
      this.detalhes = document.getElementById(idDetalhes);
      this.allData = [];
    }
  }   

  const pathData = 'data/culturas.json';
  const pathImages = 'assets/images/culturas/';
  const idSelect = "culturas";
  const idDetalhes = "detalhes-cultura";

  const app = new App(pathData, pathImages, idSelect, idDetalhes);

  console.log(app);


});