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

 const cultura = (new Cultura('Goiás', 'descricao', 'Mato Grosso ', 'Mato Grosso do Sul, Minas Gerais', 'goias.jpg'));

 console.log(cultura);

});