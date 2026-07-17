const carousel = document.querySelector('.carousel');
const slides = [...document.querySelectorAll('[data-slide]')];
const order = slides.map((slide) => slide.dataset.slide);
const sessionKey = 'ai-beleza-variation';

function readSessionVariation() {
  try {
    const saved = sessionStorage.getItem(sessionKey);
    return order.includes(saved) ? saved : null;
  } catch {
    return null;
  }
}

function saveSessionVariation(selected) {
  try {
    sessionStorage.setItem(sessionKey, selected);
  } catch {
    // A variação continua estável durante este carregamento mesmo sem armazenamento.
  }
}

const selected = readSessionVariation() ?? order[Math.floor(Math.random() * order.length)];
saveSessionVariation(selected);

carousel.dataset.theme = selected;

slides.forEach((slide) => {
  slide.hidden = slide.dataset.slide !== selected;
});

carousel.dataset.ready = 'true';
