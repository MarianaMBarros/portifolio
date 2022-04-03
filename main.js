import perfil from './perfil/perfil.js';

// function conhecimento() {
//   const html = perfil.habilidades.reduce((data, value) => {
//     if (value.tipo === "ICON") {
//       return data += `<li><i class="${value.icone} fa-3x"></i>${value.tecnologia}</li>`
//     } else {
//       return data += `<li><img src="${value.icone}" style="width: 48px; height: 48px;"></img>${value.tecnologia}</li>`
//     }


//   }, "");
//   document.getElementById("list").innerHTML = html
// }
// conhecimento();

function mostarPortifolio() {
  const html = perfil.portifolios.reduce((data, value) => {
    return data += `<div class="portifolio-item blue">
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
    return data += `<li><a href=${value.link} target="_blank"><i class="fab ${value.icone} fa-5x"></i></a></li>`
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


function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function (letra, i) {

    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 85 * i)

  });
}
const titulo = document.querySelector('.nome');
typeWrite(titulo);


function displayWindowSize() {
  if (document.documentElement.clientWidth < 600) {
    $('.portifolio-container').slick('slickSetOption', 'slidesToShow', 1);
  }
  else
    $('.portifolio-container').slick('slickSetOption', 'slidesToShow', 3);
}
window.addEventListener("resize", displayWindowSize);
