const areaData = [
  {
    name: 'Undead Burg',
    img: 'images/tauro.png',
    walkthrough: `<p>Guía para recorrer el Burgo de los no muertos, desde la llegada hasta el enfrentamiento con el Demonio de Tauro.</p>`
  },
  {
    name: 'Blighttown',
    img: 'images/queelag.png',
    walkthrough: `<p>Consejos para sobrevivir a la Ciudad Infestada y llegar al dominio de Quelaag.</p>`
  },
  {
    name: 'Anor Londo',
    img: 'images/ornstein.png',
    walkthrough: `<p>Ruta detallada por la majestuosa ciudad de los dioses, hogar de Ornstein y Smough.</p>`
  },
  {
    name: 'Oolacile Township',
    img: 'images/artorias.png',
    walkthrough: `<p>Explora la región corrompida por el Abismo en el DLC y enfréntate a Artorias.</p>`
  }
];

const contentMappingAreas = {
  lugares: `
    <section class="area-gallery">
      <h2>Dark Souls Area Walkthroughs</h2>
      <div class="area-cards">
        ${areaData
          .map(
            (area) => `
          <div class="area-item">
            <div class="area-card">
              <h3 class="area-name">${area.name}</h3>
            <div class="area-image-wrapper">
              <img src="${area.img}" alt="${area.name}">
            </div>
              <div class="area-walkthrough">${area.walkthrough}</div>
          </div>`
          )
          .join('')}
      </div>
    </section>
  `
};

function addAreaCardListeners() {
  const cards = document.querySelectorAll('.area-card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
        const item = card.parentElement;
        document.querySelectorAll('.area-item').forEach((it) => {
        if (it !== item) it.classList.remove('active');
      });
      item.classList.toggle('active');
    });
  });
}

function loadAreasContent() {
  const contentArea = document.getElementById('content-area');
  contentArea.innerHTML = contentMappingAreas.lugares;
  addAreaCardListeners();
}

document.addEventListener('DOMContentLoaded', () => {
  window.contentMappingHTML = window.contentMappingHTML || {};
  Object.assign(window.contentMappingHTML, contentMappingAreas);
  window.addAreaCardListeners = addAreaCardListeners;

  const areasLink = document.querySelector('a[data-section="lugares"]');
  if (areasLink) {
    areasLink.addEventListener('click', e => {
      e.preventDefault();
      loadAreasContent();
    });
  }
});

function addAreaCardListeners() {
  const items = document.querySelectorAll('.area-item');

  items.forEach(item => {
    const card    = item.querySelector('.area-card');
    const callout = item.querySelector('.area-callout');

    card.addEventListener('click', () => {
      const isOpening = !item.classList.contains('active');

      // Cerramos todo
      items.forEach(other => {
        other.classList.remove('active');
        const otherCallout = other.querySelector('.area-callout');
        if (otherCallout) {
          otherCallout.style.maxHeight = '0';
        }
      });

      if (isOpening) {
        item.classList.add('active');

        const fullHeight = callout.scrollHeight;
        callout.style.maxHeight = fullHeight + 'px';

        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        item.classList.remove('active');
        callout.style.maxHeight = '0';

        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

let currentAreaIndex = 0;

function openAreaModal(index) {
  currentAreaIndex = index;
  const data = areaData[index];

  document.querySelector('.area-modal-title').textContent = data.name;
  const imgEl = document.querySelector('.area-modal-img');
  imgEl.src    = data.img;
  imgEl.alt    = data.name;
  document.querySelector('.area-modal-walkthrough')
    .innerHTML = data.walkthrough;

  document.getElementById('area-modal').classList.remove('hidden');
}

function closeAreaModal() {
  document.getElementById('area-modal').classList.add('hidden');
}

function showPrevArea() {
  currentAreaIndex = (currentAreaIndex - 1 + areaData.length) % areaData.length;
  openAreaModal(currentAreaIndex);
}

function showNextArea() {
  currentAreaIndex = (currentAreaIndex + 1) % areaData.length;
  openAreaModal(currentAreaIndex);
}

function addAreaCardListeners() {
  const cards = document.querySelectorAll('.area-card');
  cards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      openAreaModal(idx);
    });
  });

  document
    .querySelector('.area-modal-backdrop')
    .addEventListener('click', closeAreaModal);

  document
    .querySelector('.area-modal-close')
    .addEventListener('click', closeAreaModal);
  document
    .querySelector('.area-modal-prev')
    .addEventListener('click', showPrevArea);
  document
    .querySelector('.area-modal-next')
    .addEventListener('click', showNextArea);
}

document.addEventListener('DOMContentLoaded', () => {
  loadAreasContent();      
  addAreaCardListeners();    
});