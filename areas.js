const areaData = [
  {
    name: 'Undead Burg',
    img: 'images/tauro.png',
    description: 'Guía para recorrer el Burgo de los no muertos, desde la llegada hasta el enfrentamiento con el Demonio de Tauro.'
  },
  {
    name: 'Blighttown',
    img: 'images/queelag.png',
    description: 'Consejos para sobrevivir a la Ciudad Infestada y llegar al dominio de Quelaag.'
  },
  {
    name: 'Anor Londo',
    img: 'images/ornstein.png',
    description: 'Ruta detallada por la majestuosa ciudad de los dioses, hogar de Ornstein y Smough.'
  },
  {
    name: 'Oolacile Township',
    img: 'images/artorias.png',
    description: 'Explora la región corrompida por el Abismo en el DLC y enfréntate a Artorias.'
  }
];

const contentMappingAreas = {
  lugares: `
    <section class="area-gallery">
      <h2>Dark Souls Area Walkthroughs</h2>
      <div class="area-cards">
        ${areaData.map(area => `
          <div class="area-card">
            <h3 class="area-name">${area.name}</h3>
            <div class="area-image-wrapper">
              <img src="${area.img}" alt="${area.name}">
              <div class="area-info">${area.description}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `
};

function addAreaCardListeners() {
  const cards = document.querySelectorAll('.area-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => {
        if (c !== card) c.classList.remove('active');
      });
      card.classList.toggle('active');
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