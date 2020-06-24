import { } from './data.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('container')
  container.innerHTML =
    `<header class="menu-bg">
    <div class="menu">
      <nav class="menu-nav">
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#conhecimentos">Conhecimentos</a></li>
          <li><a href="#portifolio">Portifólio</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="dados">
    <h1 class="nome">Mariana Aparecida de Miranda Barros</h1>
    <h3 class="profissao">{ Jr. Front-End Developer }</h3>
  </div>
  <section class="sobre" id="sobre">
    <h1>SOBRE</h1>
    <div class="sobre-info">
      <p> 32 anos, Graduada no Curso de Gestão de Moda, Estilismo e Design concluido no ano de 2007,<br>
        Graduada no Tecnico Textil e Vestuario no ano de 2011.<br>
        Em 2014 decidi mudar de profissão e me fiz a graduação em Ciência da Computação pela Universidade Nove
        de Julho concluindo em 2017.<br>
        Fiz os Estágio em Programação Java 2016 -2017 <br>
        suporte Nivel II 2017 - 2018.<br>
        Em 2018 fiz um curso de React Native , pela ENG DTP Multimídia - São Paulo.<br>
        Atualmente Fazendo Bootcamp de Front-end pela Laboratória e curso de C# pela Codenation.
      </p>
      <img src="/src/img/fotoPerfil.jpg" alt="">
    </div>
  </section>
  <div class="conhecimentos" id="conhecimentos">
    <h1>Conhecimentos</h1>
    <ul id="list"></ul>
  </div>
  <section class="portifolio" id="portifolio">
    <h1>Portifólio</h1>
    <div id="portifolio-container" class="portifolio-container"></div>
  </section>
  <section class="contato" id="contato">
    <div class="contato-info">
      <h1>Contato</h1>
      <ul id="contato-icone"></ul>
    </div>
  </section>
  <footer class="footer">
    <p> © 2020 - By Mariana Barros </p>
  </footer>
  `
}