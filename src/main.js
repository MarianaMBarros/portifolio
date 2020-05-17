import portifolios from './portifolio/portifolio.js';


function mostarPortifolio() {
  const html = portifolios.reduce((data, value) => {
    return data += `<div class="portifolio-item pink">
    <h3>${value.projeto}</h3>
    <div>
      <a href="${value.link}" target="_blank"><img src="${value.img}"
          alt="${value.projeto}"></a>
    </div>
    <span>${value.descricao}</span>
  </div>`
  }, "")
  document.getElementById("portifolio-container").innerHTML = html;
}
mostarPortifolio()


$('.portifolio-container').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: '60px',
});