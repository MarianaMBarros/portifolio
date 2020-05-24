import perfil from './perfil/perfil.js';

function conhecimento() {
  const html = perfil.habilidades.reduce((data, value) => {
    return data += `<li><i class="fab ${value.icone} fa-2x">${value.tecnologia}</i></li>`
  }, "");
  document.getElementById("list").innerHTML = html
}
conhecimento();

function mostarPortifolio() {
  const html = perfil.portifolios.reduce((data, value) => {
    return data += `<div class="portifolio-item pink">
    <h3>${value.projeto}</h3>
    <div>
      <a href="${value.link}" target="_blank"><img src="${value.img}" alt="${value.projeto}"></a>
    </div>
    <p>${value.descricao}</p>
  </div>`
  }, "");
  document.getElementById("portifolio-container").innerHTML = html;
}
mostarPortifolio();


function contato() {
  const html = perfil.contatos.reduce((data, value) => {
    return data += `<li><a href=${value.link} target="_blank"><i class="fab ${value.icone} fa-3x"></i></a></li>`
  }, "");
  document.getElementById("contato-icone").innerHTML = html;
}
contato();



$('.portifolio-container').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: '60px',
});