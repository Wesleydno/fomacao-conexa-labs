# Projeto Módulo 2

A proposta para o módulo 2 consiste na aplicação dos conhecimentos adquiridos nos cursos ao Projeto 1. O código do módulo 2 foi estruturado aplicando conceitos de programação orientada a objetos, onde uma Super-Classe denominada [SeletorBase](assets/js/SeletorBase.js) foi criada para fornecer funcionalidades comuns a seletores em geral. Duas sub-classes, [Culturas](assets/js/culturas.js) e [Produtores](assets/js/produtores.js), foram desenvolvidas para estender as funcionalidades de [SeletorBase](assets/js/SeletorBase.js). No entanto, a sub-classe [Produtores](assets/js/produtores.js) exigia uma lógica diferente em relação à função [handleChangeSelect()](assets/js/produtores.js) herdada de [SeletorBase](assets/js/SeletorBase.js), e isso foi alcançado através do conceito de overriding, permitindo a modificação desta função para atender às necessidades específicas da mesma. Essa abordagem proporcionou uma organização clara e eficiente do código, aproveitando ao máximo os princípios da programação orientada a objetos.

- Fundamentos de Programação: Design Orientado a Objetos
- JavaScript Essential Training
- Curso Completo sobre JavaScript

### Como rodar o projeto ?

Utilize a extensão [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no Visual Studio Code para executar o projeto e evitar problemas de CORS policy.

![Página de Início](../projeto-modulo-1/docs/live-server.jpg)

😊
